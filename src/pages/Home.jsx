import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { Card, Button } from 'react-bootstrap';


function CardsViwer() {

	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {
		const fetchPeople = async () => {
			const peopleResponse = await fetch("https://www.swapi.tech/api/people/")
			const data = await peopleResponse.json();
			const completeCharacter = await Promise.all(
				data.results.map(async(person) => {
					const res = await fetch(`https://www.swapi.tech/api/people/${person.uid}/`);
					const detail = await res.json();
					return{
						uid: person.uid,
						name: person.name,
						...detail.result.properties
					};
			
				})
			)
			dispatch({ type: 'CHARACTERS_ADD', payload: completeCharacter })
		}
		fetchPeople();
	}, [])

	return (

		<section>
			<h3 className="m-5">Personajes</h3>
			<div className="container m-5 p-5">
				<div className="d-flex flex-row gap-3 overflow-auto">
					{store.characters?.map((personajes, index) => (
						<Card key={index} style={{ width: '90rem' }}>
							<Card.Img variant="top" src="holder.js/100px180" />
							<Card.Body>
								<Card.Title>{personajes.name}</Card.Title>
								<Card.Text>
									
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					))}
				</div>
			</div>
		</section>

	);
}

export default CardsViwer;


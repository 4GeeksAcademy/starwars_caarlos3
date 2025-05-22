import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { Card, Button } from 'react-bootstrap';


function CardsViwer() {

	const { store, dispatch } = useGlobalReducer();

	const handleAddToFavorites = (item) => {
		dispatch({ type: 'FAVORITES_ADD', payload: item })
	}
	
	
	const handleToggleFavorites = (item) => {
		if (store.favorites.some((favorite) => favorite.uid === item.uid)) {
			handleRemoveFromFavorites(item.uid);
		} else {
			handleAddToFavorites(item);
		}
	}
	const isFavorite = (item) => {
		return store.favorites.some((favorite) => favorite.uid === item.uid);
	}

	useEffect(() => {
		const fetchPeople = async () => {
			const peopleResponse = await fetch("https://www.swapi.tech/api/people/")
			const data = await peopleResponse.json();
			const completeCharacter = await Promise.all(
				data.results.map(async (person) => {
					const res = await fetch(`https://www.swapi.tech/api/people/${person.uid}/`);
					const detail = await res.json();
					return {
						uid: person.uid,
						name: person.name,
						...detail.result.properties
					};

				})
			)
			dispatch({ type: 'CHARACTERS_ADD', payload: completeCharacter })
		}

		const fetchPlanets = async () => {
			const planetsResponse = await fetch("https://www.swapi.tech/api/planets/")
			const data = await planetsResponse.json();
			const completePlanets = await Promise.all(
				data.results.map(async (planet) => {
					const res = await fetch(`https://www.swapi.tech/api/planets/${planet.uid}/`);
					const detail = await res.json();
					return {
						uid: planet.uid,
						name: planet.name,
						...detail.result.properties
					};

				})
			)
			dispatch({ type: 'PLANETS_ADD', payload: completePlanets })
		}

		const fetchVehicles = async () => {
			const vehiclesResponse = await fetch("https://www.swapi.tech/api/vehicles/")
			const data = await vehiclesResponse.json();
			const completeVehicles = await Promise.all(
				data.results.map(async (vehicle) => {
					const res = await fetch(`https://www.swapi.tech/api/vehicles/${vehicle.uid}/`);
					const detail = await res.json();
					return {
						uid: vehicle.uid,
						name: vehicle.name,
						...detail.result.properties
					};

				})
			)
			dispatch({ type: 'VEHICLES_ADD', payload: completeVehicles })
		}
		fetchPeople();
		fetchPlanets();
		fetchVehicles();
	}, [])

	return (

		<div>

			<div>
				<h3 className="m-5 d-flex justify-content-center bg-danger text-white">Personajes</h3>
				<div className="container">
					<div className="d-flex flex-row gap-3 overflow-auto justify-content-start" id="cardContainer">
						{store.characters?.map((personajes, index) => (
							<Card key={index} style={{ width: '13rem', }} className="flex-shrink-0" >
								<Card.Img variant="top" src="https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/20.jpg?raw=true" style={{height: '150px'}} />
								<Card.Body>
									<Card.Title>{personajes.name}</Card.Title>
									<Card.Text>
										{personajes.gender}
									</Card.Text>
									<div className="d-flex justify-content-between">
									<Button variant="dark" >Learn more!!</Button>
									<Button variant="danger" className="d-flex justify-content-center" onClick={()=>handleAddToFavorites(personajes)}><i className="fa-solid fa-star"></i></Button>
									</div>
								</Card.Body>
							</Card>
						))}
					</div>
				</div>
			</div>

			<div>
				<h3 className="m-5 d-flex justify-content-center bg-danger text-white">Planetas</h3>
				<div className="container">
					<div className="d-flex flex-row gap-3 overflow-auto justify-content-center" id="cardContainer">
						{store.planets?.map((planetas, index) => (
							<Card key={index} style={{ width: '13rem', }} className="flex-shrink-0" >
								<Card.Img variant="top" src="https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/13.jpg?raw=true" style={{height: '150px'}} />
								<Card.Body>
									<Card.Title>{planetas.name}</Card.Title>
									<Card.Text>
										{planetas.climate}
									</Card.Text>
									<div className="d-flex justify-content-between">
									<Button variant="dark" >Learn more!!</Button>
									<Button variant="danger" className="d-flex justify-content-center" onClick={()=>handleAddToFavorites(planetas)}><i className="fa-solid fa-star"></i></Button>
									</div>
								</Card.Body>
							</Card>
						))}
					</div>
				</div>
			</div>

			<div>
				<h3 className="m-5 d-flex justify-content-center bg-danger text-white">Vehiculos</h3>
				<div className="container">
					<div className="d-flex flex-row gap-3 overflow-auto justify-content-center" id="cardContainer">
						{store.vehicles?.map((vehicle, index) => (
							<Card key={index} style={{ width: '13rem', }} className="flex-shrink-0" >
								<Card.Img variant="top" src="https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/30.jpg?raw=true" style={{height: '150px'}} />
								<Card.Body>
									<Card.Title>{vehicle.name}</Card.Title>
									<Card.Text>
										{vehicle.model}
									</Card.Text>
									<div className="d-flex justify-content-between mt-3">
									<Button variant="dark" >Learn more!!</Button>
									<Button variant="danger" className="d-flex justify-content-center" onClick={()=> handleAddToFavorites(vehicle)}><i className="fa-solid fa-star"></i></Button>
									</div>
								</Card.Body>
							</Card>
						))}
					</div>
				</div>
			</div>

		</div>

	);
}

export default CardsViwer;


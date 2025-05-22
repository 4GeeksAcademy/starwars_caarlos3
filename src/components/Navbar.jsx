import { Link } from "react-router-dom";
import storeReducer from "../store";
import { initialStore } from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer(); 

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1BjFcON4mgqG-wdIJ3lUpuFFLsgTI3j7hg&s" alt="not found" style={{ height: '3rem', borderRadius: '20px' }} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos <i class="fa-brands fa-jedi-order"></i>
						</button>
						<ul className="dropdown-menu">
							{store.favorites?.map((item, index) => (
								<li key={index}>
									<a className="dropdown-item" href="#">{item.name}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
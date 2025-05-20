import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1BjFcON4mgqG-wdIJ3lUpuFFLsgTI3j7hg&s" alt="not found" style= {{height: '3rem', borderRadius: '20px' }}/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-danger">Favoritos <i class="fa-brands fa-jedi-order"></i></button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
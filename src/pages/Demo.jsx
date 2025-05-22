// Import necessary components from react-router-dom and other parts of the application.
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.


export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { type, uid } = useParams();
  const { store, dispatch } = useGlobalReducer();

  let item;

  if (type === "people") {
    item = store.characters.find((item) => item.uid === uid);
  }
  if (type === "planets") {
    item = store.planets.find((item) => item.uid === uid);
  }
  if (type === "vehicles") {
    item = store.vehicles.find((item) => item.uid === uid);
  }

  return (

    <div className="container">
      <div className="d-flex justify-content-center ">
        <div>
          <img style={{ height: "400px", width: "400px" }} src={
            type === "people"
              ? `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/20.jpg?raw=true`
              : type === "planets"
                ? `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/13.jpg?raw=true`
                : type === "vehicles"
                  ? `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/30.jpg?raw=true`
                  : "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
          } alt="not found" />
        </div>
        <div>
          <h1 className="m-5">{item?.name}</h1>
          <p className="ms-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero vel quia, maiores itaque reprehenderit debitis? Officia provident eius magnam, nihil sequi recusandae aliquid dolore, asperiores exercitationem perferendis, incidunt fuga?</p>
        </div>
      </div>

      
        <div className="d-flex flex-column gap-3 m-5">
          {type === "people" &&
            <>
              <div><strong>Gender: {item?.gender}</strong></div>
              <div><strong>Height: {item?.height}</strong></div>
              <div><strong>Birth Year: {item?.birth_year}</strong></div>
              <div><strong>Films: {item?.films}</strong></div>
              <div><strong>Eye color: {item?.eye_color}</strong></div>
              <div><strong>Hair color: {item?.hair_color}</strong></div>
            </>
          }
          {type === "planets" &&
            <>
              <div><strong>Climate: {item?.climate}</strong></div>
              <div><strong>Diameter: {item?.diameter}</strong></div>
              <div><strong>Gravity: {item?.gravity}</strong></div>
              <div><strong>Orbital Period: {item?.orbital_period}</strong></div>
              <div><strong>Population: {item?.population}</strong></div>
            </>
          }
          {type === "vehicles" &&
            <>
              <div><strong>Model: {item?.model}</strong></div>
              <div><strong>Manufacturer: {item?.manufacturer}</strong></div>
              <div><strong>Cost in credits: {item?.cost_in_credits}</strong></div>
              <div><strong>Crew: {item?.crew}</strong></div>
              <div><strong>Passengers: {item?.passengers}</strong></div>
            </>
          }
          <Link to="/">
            <button className="btn btn-danger mt-5">Back home</button>
          </Link>
        </div>
      </div>
    
  )
}

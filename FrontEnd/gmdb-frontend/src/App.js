import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, useRouteMatch, NavLink} from "react-router-dom";
import logo from './logo.svg';
import MovieCard from './Components/MovieCard.js'
import IndivMovie from './Components/IndivMovie.js'
import './App.css';
import { useState, useEffect } from 'react';




function App() {
  const [movies, setMovies] = useState([]);
  
  //   let [pokeData, setPokeData] = useState([]);
  
  async function getMovies() {
    let res = await fetch("http://localhost:3001/movies");
    let data = await res.json();
    return data;
  } 
  
/*
#### Available Service Endpoints
- `GET movies` - returns a list of all movies
- `GET movies/:id` - returns details of a specific movie
- `GET movies?search=<query>` - returns a list of movies filtered on titles matching the given query
- `GET reviews/:movieId` - returns all reviews for a given movie
- `POST reviews` - creates a new review, returns success status in JSON response 
- `POST register` - creates a new user, returns success status in JSON response
*/


  console.log(movies);
  useEffect(() => {
    let mounted = true;
    getMovies()
      .then(items => {
        if(mounted) {
          setMovies(items)
        }
      })
    return () => mounted = false;
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <img src={logo} className="App-logo" alt="logo" />
            <a className="navbar-brand" href="index.html">GMDB</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-warning ms-2" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <div role="main" className="Main">
          {movies.map((movie) => (
                <MovieCard className="movie-card" movie={movie} key={movie.movieId} />
            ))}
      </div>
    </div>
  );
}

//async function getProductDetails(ProductId) {
//   let result = await fetch(`http://52.26.193.201:3000/products/${ProductId}`);
//   let json = await result.json();
//   return json;
// }

export default App;

//Functionality minimum
// - Look at a specific movie with details and reviews
// - Search movies
// - Post a review on a movie
// - Register a new user

//-Acceptance Criteria
// - All code is produced through TDD with a pair
// - UI tests are performed using Cypress
// - All functionality of the application is developed using component based architecture in React
// - All persistent data is received and processed through network requests to the back end service
// - The application is structured to consume data according to the structure provided by the back end service

// Designs:
// - Browsing Movies
// ![View for browsing movies](images/Browse-Movies.png)

// - Movie Details and Reviews
// ![movie details with corresponding review section](images/Movie-Detail-and-Post-Review.png) 

// - Searching for movies
// ![filtered movie list view based on search criteria](images/Search.png)

// - Login
// ![view of a login screen](images/Login.png)

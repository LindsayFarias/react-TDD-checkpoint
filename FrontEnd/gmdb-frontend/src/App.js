import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;

//Functionality minimum
// - Browse movies anonymously
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

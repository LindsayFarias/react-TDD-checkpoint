import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="navbar-brand">React Brand Products</div>
          </div>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
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

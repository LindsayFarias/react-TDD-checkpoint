import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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

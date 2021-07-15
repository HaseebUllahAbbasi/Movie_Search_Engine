import './App.css';
import SearchMovies from './SearchMovies';
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <div className="container">
        <h1 className="title">. Doesn't like movies, but I made Movie a Search Engine</h1>
        <SearchMovies/>
      </div>
    );
  
}
export default App;

import './App.css';
import { useState } from 'react'
import moviesData from './movies-data.json'
import MovieCard from './components/MovieCard'
import Spinner from './components/Spinner'

function App() {

  const [movies, setMovies] = useState(moviesData);
  const [loading, setLoading] = useState(true);
  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = id => setMovies(movies.filter(movie => movie._id !== id))
  const reverseList = () => setMovies([...movies].reverse())
  const averageRating = () => movies.reduce((accum, curr) => accum + curr.IMDBRating, 0) / movies.length

  const toggleShowMovies = () => {
    setShowMovies(!showMovies)
  }

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (loading) return <Spinner />
  else return (

    <div className="App">

      <h1>Movies</h1>
      <div> Average IMDB Rating: {averageRating()} </div>
      <button onClick={reverseList}> Reverse </button>
      <button onClick={toggleShowMovies}> {showMovies ? "Hide" : "Show"} </button>


      {
      showMovies &&
      movies.map(movie => {
        return (
          <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
        )
      })}


    </div>

  );

}

export default App;

 /*
  {
    const reverseList = () => {

      const newMoviesList = [...movies];
      newMoviesList.reverse()
      setMovies(newMoviesList)

    }

    const averageRating = () => {

    const avg = movies.reduce((accum, curr) => {
      return accum + curr.IMDBRating
    }, 0) / movies.length

    return avg

  }
  */
function MovieCard({ movie, deleteMovie }) {

    function generateScoreLabel(score) {
        if (score > 9) {
            return <span className="green">9+</span>
        }
        else if (score > 7) {
            return <span className="red">{score}</span>
        }
        else {
            return <span className="black">{score}</span>
        }
    }

    return (
        <div>
            <h1> {movie.title} </h1>
            <p> Director: {movie.director}</p>
            <p> IMDB Rating: {generateScoreLabel(movie.IMDBRating)}</p>
            <button onClick={() => deleteMovie(movie._id)}> Delete </button>


            {
                movie.hasOscars
                    ? (<div style={{ backgroundColor: "yellow" }}>
                        <p> Got Award! </p>
                    </div>)
                    : <div>No Oscarino.</div>
            }


        </div>
    )

}

export default MovieCard
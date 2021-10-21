import './MovieCard.css'

const MovieCard = ({ movie }) => {

    let poster = movie.poster;

    return (
        <div className="movie-card">
            <img src={poster} alt={movie.title}/>
        </div>
    ) 

}

export default MovieCard;
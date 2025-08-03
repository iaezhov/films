import './MovieCard.css';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import Rating from '../Rating/Rating';

function MovieCard({ rating, name, marked, posterUrl }) {
	return (
		<div className="movie-card">
			<div className="poster-wrapper">
				<img className="poster" src={posterUrl} alt={name} />
				<Rating count={rating} />
			</div>
			<div className='movie-card-content'>
				<h2 className='movie-card-title'>{name}</h2>
				<MovieCardButton marked={marked} />
			</div>
		</div>
	);
}
export default MovieCard;
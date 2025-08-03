import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

function MovieList({ items }) {
	return (
		<div className="movie-list">
			{items && items.length > 0 && items.map(movie => (
				<MovieCard
					key={movie.id}
					rating={movie.rating}
					name={movie.name}
					marked={movie.marked}
					posterUrl={movie.posterUrl}
				/>
			))}
		</div>
	);
}
export default MovieList;
import styles from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';
import type { MovieListProps } from './MovieList.props';

function MovieList({ items }: MovieListProps) {
	return (
		<div className={styles['movie-list']}>
			{items && items.length > 0 && items.map(movie => (
				<MovieCard
					key={movie.id}
					id={movie.id}
					rating={movie.rating}
					name={movie.name}
					posterUrl={movie.posterUrl}
				/>
			))}
		</div>
	);
}
export default MovieList;
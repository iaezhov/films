import styles from './MovieCard.module.css';
import Rating from '../Rating/Rating';
import type { MovieCardProps } from './MovieCard.props';
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function MovieCard({ movie }: MovieCardProps) {
	if (!movie) {
		return null;
	}
	return (
		<Link to={`/movie/${movie.id}`} className={styles['movie-card']}>
			<div
				className={styles['poster-wrapper']}
				style={{ backgroundImage: `url(${movie.posterUrl})`}}
			>
				<div className={styles['poster-info']}>
					<Rating count={movie.rank} />
				</div>
			</div>
			<div className={styles['movie-card-content']}>
				<h2 className={styles['movie-card-title']}>{movie.title}</h2>
				<FavoriteButton movie={movie} />
			</div>
		</Link>
	);
}
export default MovieCard;
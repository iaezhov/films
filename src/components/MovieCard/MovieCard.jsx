import styles from './MovieCard.module.css';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import Rating from '../Rating/Rating';

function MovieCard({ rating, name, marked, posterUrl }) {
	return (
		<div className={styles['movie-card']}>
			<div className={styles['poster-wrapper']}>
				<img className={styles['poster']} src={posterUrl} alt={name} />
				<div className={styles['poster-info']}>
					<Rating count={rating} />
				</div>
			</div>
			<div className={styles['movie-card-content']}>
				<h2 className={styles['movie-card-title']}>{name}</h2>
				<MovieCardButton marked={marked} />
			</div>
		</div>
	);
}
export default MovieCard;
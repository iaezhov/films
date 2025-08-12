import styles from './MovieCard.module.css';
import Rating from '../Rating/Rating';
import type { MovieCardProps } from './MovieCard.props';
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function MovieCard({ rating, name, posterUrl, id }: MovieCardProps) {
	return (
		<Link to={`/movie/${id}`} className={styles['movie-card']}>
			<div className={styles['poster-wrapper']}>
				<img className={styles['poster']} src={posterUrl} alt={name} />
				<div className={styles['poster-info']}>
					<Rating count={rating} />
				</div>
			</div>
			<div className={styles['movie-card-content']}>
				<h2 className={styles['movie-card-title']}>{name}</h2>
				<FavoriteButton movie={{ rating, name, posterUrl, id }} />
			</div>
		</Link>
	);
}
export default MovieCard;
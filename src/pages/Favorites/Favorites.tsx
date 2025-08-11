import Title from '../../components/Title/Title';
import MovieList from '../../components/MovieList/MovieList';
import { useFavorites } from '../../hooks/use-favorites.hook';
import styles from './Favorites.module.css';

function Favorites() {
	const { favorites } = useFavorites();

	return (
		<>
			<div className={styles['favorites-section']}>
				<Title text="Избранное" />
			</div>
			{!favorites.length
				? <div>Список пуст</div>
				: <MovieList items={favorites}
				/>}
			
		</>
	);
}

export default Favorites;

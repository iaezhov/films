import type { MovieListItem } from '../entities/movie';
import { useLocalStorage } from './use-localstorage.hook';

interface IUseFavorites {
	favorites: MovieListItem[],
	addToFavorites: (value: MovieListItem) => void,
	removeFromFavorites: (value: MovieListItem['id']) => void,
	setFavorites: (value: MovieListItem[]) => void,
	isFavorite: (value: MovieListItem['id']) => boolean,
}

export function useFavorites(): IUseFavorites {
	const [favorites, setFavorites] = useLocalStorage<MovieListItem[]>('favorites', []);

	const isFavorite: IUseFavorites['isFavorite']  = (id) => {
		return favorites.some(el => el.id === id);
	};

	const addToFavorites: IUseFavorites['addToFavorites'] = (movie) => {
		if (isFavorite(movie.id)) {
			return;
		}
		setFavorites([...favorites, movie]);
	};

	const removeFromFavorites: IUseFavorites['removeFromFavorites'] = (id) => {
		setFavorites([...favorites.filter(el => el.id !== id)]);
	};

	return {
		favorites,
		addToFavorites,
		removeFromFavorites,
		setFavorites,
		isFavorite
	};
}
import type { IMovie } from '../entities/movie/movie';
import { useLocalStorage } from './use-localstorage.hook';

interface IUseFavorites {
	favorites: IMovie[],
	addToFavorites: (value: IMovie) => void,
	removeFromFavorites: (value: IMovie['id']) => void,
	setFavorites: (value: IMovie[]) => void,
	isFavorite: (value: IMovie['id']) => boolean,
}

export function useFavorites(): IUseFavorites {
	const [favorites, setFavorites] = useLocalStorage<IMovie[]>('favorites', []);

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
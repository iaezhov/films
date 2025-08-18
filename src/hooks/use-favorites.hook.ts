import { useDispatch, useSelector } from 'react-redux';
import type { MovieListItem } from '../entities/movie';
import type { AppDispatch, RootState } from '../store/store';
import { favoritesActions } from '../store/favorites.slice';

interface IUseFavorites {
	favorites: MovieListItem[],
	addToFavorites: (value: MovieListItem) => void,
	removeFromFavorites: (value: MovieListItem['id']) => void,
	isFavorite: (value: MovieListItem['id']) => boolean,
	toggleFavorite: (value: MovieListItem) => void,
}

export function useFavorites(): IUseFavorites {
	const favorites = useSelector((s: RootState) => s.favorites.movies);
	const dispatch = useDispatch<AppDispatch>();

	const isFavorite: IUseFavorites['isFavorite']  = (id) => {
		return favorites.some(el => el.id === id);
	};

	const addToFavorites: IUseFavorites['addToFavorites'] = (movie) => {
		dispatch(favoritesActions.add(movie));
	};

	const removeFromFavorites: IUseFavorites['removeFromFavorites'] = (id) => {
		dispatch(favoritesActions.remove(id));
	};

	const toggleFavorite: IUseFavorites['toggleFavorite']  = (movie) => {
		if (!movie) {
			return;
		}
		if (isFavorite(movie.id)) {
			removeFromFavorites(movie.id);
		} else {
			addToFavorites(movie);
		}
	};

	return {
		favorites,
		addToFavorites,
		removeFromFavorites,
		isFavorite,
		toggleFavorite
	};
}
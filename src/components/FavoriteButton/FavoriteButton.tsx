import MovieCardButton from '../MovieCardButton/MovieCardButton';
import type { FavoriteButtonProps } from './FavoriteButton.props';
import { useFavorites } from '../../hooks/use-favorites.hook';
import type { MouseEvent } from 'react';

function FavoriteButton({ movie }: FavoriteButtonProps) {
	const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

	const onFavoriteButtonClicked = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		if (isFavorite(movie?.id)) {
			removeFromFavorites(movie?.id);
		} else {
			addToFavorites(movie);
		}
	};

	return (
		<MovieCardButton
			marked={isFavorite(movie?.id)}
			onClick={onFavoriteButtonClicked}
		/>
	);
}
export default FavoriteButton;
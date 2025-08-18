import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Movie, MovieListItem } from '../entities/movie';
import { loadState } from '../helpers/storage';
import type { IUser } from '../entities/user/user';

export const FAVORITES_PERSISTENT_STATE = 'favorites';
export type FavoritesPersistedState = { [key: string]: MovieListItem[] };

interface FavoritesState {
	movies: MovieListItem[];
}

function initState(): MovieListItem[] {
	const currentUser = loadState<IUser>('currentProfile') || null;
	if (!currentUser) {
		return [];
	}
	const favoritesPersistedState = loadState<FavoritesPersistedState>(FAVORITES_PERSISTENT_STATE) || {};
	return favoritesPersistedState[currentUser.profileName] || [];
}

const initialState: FavoritesState = {
	movies: initState()
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavorites: (state, action: PayloadAction<MovieListItem[]>) => {
			state.movies = action.payload;
		},
		add: (state, action: PayloadAction<MovieListItem | Movie>) => {
			state.movies.push({
				id: action.payload.id,
				title: action.payload.title,
				posterUrl: action.payload.posterUrl,
				rank: action.payload.rank
			});
		},
		remove: (state, action: PayloadAction<MovieListItem['id']>) => {
			state.movies = state.movies.filter(m => m.id !== action.payload);
		}
	}
});

export default favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;

import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice, { FAVORITES_PERSISTENT_STATE, type FavoritesPersistedState } from './favorites.slice';
import { loadState, saveState } from '../helpers/storage';
import type { IUser } from '../entities/user/user';

export const store = configureStore({
	reducer: {
		favorites: favoritesSlice
	}
});

store.subscribe(() => {
	const currentUser = loadState<IUser>('currentProfile') || null;
	if (currentUser) {
		const favoritesPersistedState = loadState<FavoritesPersistedState>(FAVORITES_PERSISTENT_STATE) || {};
		const favorites = store.getState().favorites.movies;
		saveState(FAVORITES_PERSISTENT_STATE, {
			...favoritesPersistedState,
			[currentUser.profileName]: favorites}
		);
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
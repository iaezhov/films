import { useCallback, useEffect, useState } from 'react';
import type { MovieListItem } from '../model/types';
import { getMovieList } from '../api/service';
import { AxiosError } from 'axios';

interface IUseMovieList {
	movies: MovieListItem[],
	isLoading: boolean,
	error: string,
	searchQuery: string,
	setSearchQuery: (value: string) => void
}

export function useMovieList(): IUseMovieList {
	const [movies, setMovies] = useState<MovieListItem[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [searchQuery, setSearchQuery] = useState<string>('');
    
	const fetchMovies = useCallback(async () => {
		try {
			setIsLoading(true);
			setError('');
			const list = await getMovieList(searchQuery);
			setMovies(list);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.message);
			}
		} finally {
			setIsLoading(false);
		}
	}, [searchQuery]);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);

	return { movies, isLoading, error, searchQuery, setSearchQuery };
}
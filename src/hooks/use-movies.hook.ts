import { useEffect, useState } from 'react';
import type { IMovie } from '../entities/movie/movie';
import { moviesList } from '../entities/movie/list';

export function useMovies(): [IMovie[], (value: IMovie[]) => void] {
	const [movies, setMovies] = useState<IMovie[]>([]);

	useEffect(() => {
		setMovies([...moviesList]);
	}, []);

	return [movies, setMovies];
}
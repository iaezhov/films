import axios from 'axios';
import type { MovieListItem, Movie } from '../model/types';
import type { RawMovieListItemDto, RawMovie } from './types';
import { mapMovieListItem } from '../lib/mapMovieListItem';
import { mapMovie } from '../lib/mapMovie';

const API_PREFFIX = 'https://search.imdbot.workers.dev/';

export async function getMovieList(query?: string): Promise<MovieListItem[]> {
	const { data } = await axios.get<RawMovieListItemDto>(API_PREFFIX, {
		params: { q: query || 'Avengers: Endgame' }
	});
	return data.description.map(mapMovieListItem);
}

export async function getMovie(id: string): Promise<Movie> {
	if (!id) {
		throw new Error('Отсутсвует id фильма');
	}
	const { data } = await axios.get<RawMovie>(API_PREFFIX, {
		params: { tt: id }
	});
	return mapMovie(data);
}
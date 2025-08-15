import type { RawMovieListItem } from '../api/types';
import type { MovieListItem } from '../model/types';

export function mapMovieListItem(raw: RawMovieListItem): MovieListItem {
	return {
		title: raw['#TITLE'],
		id: raw['#IMDB_ID'],
		rank: raw['#RANK'],
		posterUrl: raw['#IMG_POSTER']
	};
}
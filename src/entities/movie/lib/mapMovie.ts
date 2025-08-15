import type { RawMovie } from '../api/types';
import type { Movie } from '../model/types';

export function mapMovie(raw: RawMovie): Movie {
	return {
		title: raw.short.name,
		id: raw.imdbId,
		rank: raw.main.ratingsSummary.voteCount,
		posterUrl: raw.short.image,
		aggregateRating: raw.main.ratingsSummary.aggregateRating,
		description: raw.short.description,
		review: {
			date: raw.short?.review?.dateCreated,
			title: raw.short?.review?.name,
			text: raw.short?.review?.reviewBody
		}
	};
}
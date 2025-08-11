import type { IMovie } from '../../entities/movie/movie';

export type MovieCardProps = Pick<IMovie, 'id' | 'name' | 'posterUrl' | 'rating'>;
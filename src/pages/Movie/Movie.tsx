import styles from './Movie.module.css';
import Paragraph from '../../components/Paragraph/Paragraph';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import Rating from '../../components/Rating/Rating';
import InfoRow from '../../components/InfoRow/InfoRow';
import FadeWrapper from '../../components/FadeWrapper/FadeWrapper';
import Review from '../../components/Review/Review';
import type { Movie } from '../../entities/movie';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

function MoviePage() {
	const response = useLoaderData<{ movie: Movie }>();

	if (!response.movie) {
		return <div>Фильм не найден</div>;
	}

	return (
		<Suspense fallback={<div>Загрузка данных фильма</div>}>
			<Await resolve={response.movie}>
				{(movie) => (
					<div className={styles['movie-page']}>
						<FadeWrapper className={styles['title-wrapper']}>
							<span className={styles['subtitle']}>Поиск фильмов</span>
							<h1 className={styles['title']}>{movie.title}</h1>
						</FadeWrapper>
						<div className={styles['product-wrapper']}>
							<img
								className={styles['product-poster']}
								src={movie?.posterUrl}
								alt="Обложка фильма"
							/>
							<div className={styles['product-info']}>
								<Paragraph>{movie.description}</Paragraph>
								<div className={styles['product-actions']}>
									<Rating count={movie.aggregateRating} />
									<FavoriteButton movie={movie} />
								</div>
								<InfoRow title='Тип' text='Movie' />
								<InfoRow title='Дата выхода' text='2019-04-24' />
								<InfoRow title='Длительность' text='181 мин' />
								<InfoRow title='Жанр' text='Adventure,  Science Fiction, Action' />
							</div>
						</div>
						<div>Отзывы</div>

						{movie?.review && <Review
							title={movie.review.title}
							date={movie.review.date}
							text={movie.review.text}
						/>}
					</div>
				)}
			</Await>
		</Suspense>
	);
}

export default MoviePage;

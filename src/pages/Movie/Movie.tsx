// import { useParams } from 'react-router-dom';
import { useMovies } from '../../hooks/use-movies.hook';
import { useMemo } from 'react';
import styles from './Movie.module.css';
import Paragraph from '../../components/Paragraph/Paragraph';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import Rating from '../../components/Rating/Rating';
import InfoRow from '../../components/InfoRow/InfoRow';
import FadeWrapper from '../../components/FadeWrapper/FadeWrapper';
import Review from '../../components/Review/Review';

const infoText = 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.';
const reviewText = 'But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...';

function Movie() {
	// const { id } = useParams();
	const [movies] = useMovies();

	// const movie = useMemo(() => movies
	// 	.find(el => String(el.id) === String(id)), [id, movies]);

	const movie = useMemo(() => movies[0], [movies]);

	return (
		<div className={styles['movie-page']}>
			<FadeWrapper className={styles['title-wrapper']}>
				<span className={styles['subtitle']}>Поиск фильмов</span>
				<h1 className={styles['title']}>{movie?.name}</h1>
			</FadeWrapper>
			<div className={styles['product-wrapper']}>
				<img
					className={styles['product-poster']}
					src={movie?.posterUrl}
					alt="Обложка фильма"
				/>
				<div className={styles['product-info']}>
					<Paragraph>{infoText}</Paragraph>
					<div className={styles['product-actions']}>
						<Rating count={movie?.rating} />
						<FavoriteButton movie={movie} />
					</div>
					<InfoRow title='Тип' text='Movie' />
					<InfoRow title='Дата выхода' text='2019-04-24' />
					<InfoRow title='Длительность' text='181 мин' />
					<InfoRow title='Жанр' text='Adventure,  Science Fiction, Action' />
				</div>
			</div>
			<div>Отзывы</div>

			<Review
				title='Not as good as infinity war..'
				date='2019-04-29'
				text={reviewText}
			/>
		</div>
	);
}

export default Movie;

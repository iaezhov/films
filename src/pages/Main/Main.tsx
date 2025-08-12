import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import { useMovieList } from '../../entities/movie';
import Title from '../../components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';

const emptyStateStyles = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center'
} as const;

function Main() {
	const { movies, isLoading, error, setSearchQuery } = useMovieList();

	const search = ({ searchQuery }: { searchQuery: string }) => {
		setSearchQuery(searchQuery);
	};

	return (
		<>
			<SearchForm onSubmit={search} />
			{isLoading && !error && <>Загрузка</>}
			{!isLoading && error && <>Ошибка: {error}</>}
			{!isLoading && !movies.length && (
				<div style={emptyStateStyles}>
					<Title text='Упс... Ничего не найдено' />
					<Paragraph>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
				</div>
			)}
			{!isLoading && movies.length && <MovieList items={movies} />}
		</>
	);
}

export default Main;

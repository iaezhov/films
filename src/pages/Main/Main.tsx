import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import { useMovies } from '../../hooks/use-movies.hook';

function Main() {
	const [movies] = useMovies();

	const search = ({ searchQuery }: { searchQuery: string }) => {
		console.log(`Значение поиска ${searchQuery}`);
	};

	return (
		<>
			<SearchForm onSubmit={search} />
			<MovieList items={movies} />
		</>
	);
}

export default Main;

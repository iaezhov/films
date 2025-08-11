import './App.css';
import Navigation from './layouts/Navigation/Navigation';
import MovieList from './components/MovieList/MovieList';
import SearchForm from './components/SearchForm/SearchForm';
import LoginForm from './components/LoginForm/LoginForm';
import { UserContextProvider } from './context/User/UserContextProvider';
import { useMovies } from './components/hooks/use-movies.hook';

function App() {
	const [movies] = useMovies();

	const search = ({ searchQuery }: { searchQuery: string }) => {
		console.log(`Значение поиска ${searchQuery}`);
	};

	return (
		<UserContextProvider>
			<div className="layout">
				<Navigation />
				<LoginForm />
				<SearchForm onSubmit={search} />
				<MovieList items={movies} />
			</div>
		</UserContextProvider>
	);
}

export default App;

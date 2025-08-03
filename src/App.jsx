import './App.css';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';
import Input from './components/Input/Input';
import Navigation from './layouts/Navigation/Navigation';
import { useState } from 'react';
import MovieList from './components/MovieList/MovieList';

function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const clicked = () => {
		console.log(`Значение поиска ${searchQuery}`);
	};
	const [movies] = useState([
		{
			id: crypto.randomUUID(),
			rating: 324,
			name: 'Black Widow',
			marked: true,
			posterUrl: '/posters/1.png'
		},
		{
			id: crypto.randomUUID(),
			rating: 124,
			name: 'Shang Chi',
			marked: false,
			posterUrl: '/posters/2.png'
		},
		{
			id: crypto.randomUUID(),
			rating: 235,
			name: 'Loki',
			marked: false,
			posterUrl: '/posters/3.png'
		},
		{
			id: crypto.randomUUID(),
			rating: 123,
			name: 'How I Met Your Mother',
			marked: false,
			posterUrl: '/posters/4.png'
		},
		{
			id: crypto.randomUUID(),
			rating: 8125,
			name: 'Money Heist',
			marked: false,
			posterUrl: '/posters/5.png'
		},
		{
			id: crypto.randomUUID(),
			rating: 123,
			name: 'Friends',
			marked: false,
			posterUrl: '/posters/6.png'
		},
		{
			id: crypto.randomUUID(),
			rating: 12,
			name: 'The Big Bang Theory',
			marked: false,
			posterUrl: '/posters/7.png'
		},
		{
			id: crypto.randomUUID(),
			rating: 456,
			name: 'Two And a Half Men',
			marked: false,
			posterUrl: '/posters/8.png'
		}
	]);

	return (
		<div className='layout'>
			<Navigation />
			<div className='search-section'>
				<Title text="Поиск" />
				<Paragraph size="small">Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
				<div className='search-form'>
					<Input
						placeholder="Введите название"
						icon="search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<Button text="Искать" onClick={clicked} />
				</div>
			</div>
			<MovieList items={movies} />
		</div>
	);
}

export default App;

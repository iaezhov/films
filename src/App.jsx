import './App.css';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';
import Input from './components/Input/Input';
import Navigation from './layouts/Navigation/Navigation';
import { useState } from 'react';

function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const clicked = () => {
		console.log(`Значение поиска ${searchQuery}`);
	};

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
		</div>
	);
}

export default App;

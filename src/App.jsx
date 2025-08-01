import './App.css';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';

function App() {

	return (
		<>
			<div>
				<Title text="Поиск" />
				<Paragraph size="small">Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
				<Button text="Искать" />
			</div>
		</>
	);
}

export default App;

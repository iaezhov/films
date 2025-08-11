import styles from './SearchForm.module.css';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';
import Input from '../Input/Input';

function SearchForm({ onSubmit }) {
	const submit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());
		onSubmit(data);
		event.target.reset();
	};

	return (
		<div className={styles['search-section']}>
			<Title text="Поиск" />
			<Paragraph size="small">Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
			<form className={styles['search-form']} onSubmit={submit}>
				<Input
					name="searchQuery"
					placeholder="Введите название"
					icon="search"
				/>
				<Button text="Искать" />
			</form>
		</div>
	);
}
export default SearchForm;

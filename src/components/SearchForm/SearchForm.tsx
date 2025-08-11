import styles from './SearchForm.module.css';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';
import Input from '../Input/Input';
import type { SearchFormProps } from './SearchForm.props';
import type { FormEvent } from 'react';

type SearchFormData = {
	searchQuery: {
		value: string;
	};
}

function SearchForm({ onSubmit }: SearchFormProps) {
	const submit = (event: FormEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & SearchFormData;
		const { searchQuery } = target;
		onSubmit?.({ searchQuery: searchQuery?.value || '' });
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
				<Button>Искать</Button>
			</form>
		</div>
	);
}
export default SearchForm;

import styles from './LoginForm.module.css';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Input from '../Input/Input';

function LoginForm({ onSubmit }) {
	const submit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());
		onSubmit(data);
	};

	return (
		<div className={styles['login-section']}>
			<Title text="Вход" />
			<form className={styles['login-form']} onSubmit={submit}>
				<Input
					name='profileName'
					placeholder="Ваше имя"
				/>
				<Button text="Войти в профиль" />
			</form>
		</div>
	);
}
export default LoginForm;

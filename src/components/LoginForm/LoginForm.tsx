import styles from './LoginForm.module.css';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Input from '../Input/Input';
import { useContext, type FormEvent } from 'react';
import { UserContext } from '../../context/User/user.context';

type LoginFormData = {
	profileName: {
		value: string;
	};
}

function LoginForm() {
	const { user, login } = useContext(UserContext);

	if (user?.isLoginned) {
		return null;
	}

	const submit = (event: FormEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & LoginFormData;
		const { profileName } = target;
		login({ profileName: profileName.value });
	};

	return (
		<div className={styles['login-section']}>
			<Title text="Вход" />
			<form className={styles['login-form']} onSubmit={submit}>
				<Input
					name='profileName'
					placeholder="Ваше имя"
				/>
				<Button>Войти в профиль</Button>
			</form>
		</div>
	);
}
export default LoginForm;

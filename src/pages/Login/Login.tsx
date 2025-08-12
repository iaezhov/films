import styles from './Login.module.css';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import { useContext, type FormEvent } from 'react';
import { UserContext } from '../../context/User/user.context';
import { useNavigate } from 'react-router-dom';

type LoginFormData = {
	profileName: {
		value: string;
	};
}

function Login() {
	const navigate = useNavigate();
	const { login } = useContext(UserContext);

	const submit = (event: FormEvent) => {
		event.preventDefault();
		const target = event.target as typeof event.target & LoginFormData;
		const { profileName } = target;
		login({ profileName: profileName.value });
		navigate('/');
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
export default Login;

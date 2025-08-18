import styles from './Navigation.module.css';
import IconLogin from '../../components/icons/IconLogin';
import IconBookmark from '../../components/icons/IconBookmark';
import IconProfile from '../../components/icons/IconProfile';
import cn from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../context/User/user.context';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFavorites } from '../../hooks/use-favorites.hook';

function Navigation() {
	const { user, logout } = useContext(UserContext);
	const { favorites } =  useFavorites();
	const navigate = useNavigate();

	const favoriteCounter = favorites.length;

	const logoutHandler = () => {
		logout();
		navigate('/auth/login');
	};

	return (
		<header className={styles.navigation}>
			<IconBookmark className={styles.logo} />
			<nav className={styles['navigation-list']}>
				<ul>
					<li>
						<NavLink to='/' className={({ isActive }) => cn(
							styles['link'],
							{ [styles['active']]: isActive })}>
							<span>Поиск фильмов</span>
						</NavLink>
					</li>
					<li>
						<NavLink to='/favorites' className={({ isActive }) => cn(
							styles['link'],
							{ [styles['active']]: isActive })}>
							<span>Мои фильмы</span>
							{!!favoriteCounter && <div className={styles.counter}>{favoriteCounter}</div>}
						</NavLink>
					</li>
					{user?.isLoginned ? (
						<>
							<li>
								<a
									href='#'
									className={cn(styles['link'], styles['disabled'])}
								>
									<span>{user.profileName}</span>
									<IconProfile />
								</a>
							</li>
							<li>
								<span className={styles['link']} onClick={logoutHandler}>
									<span>Выйти</span>
								</span>
							</li>
						</>
					) : (
						<li>
							<NavLink to='/auth/login' className={({ isActive }) => cn(
								styles['link'],
								{ [styles['active']]: isActive })}>
								<span>Войти</span>
								<IconLogin />
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;

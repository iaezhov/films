import styles from './Navigation.module.css';
import IconLogin from '../../components/icons/IconLogin';
import IconBookmark from '../../components/icons/IconBookmark';
import IconProfile from '../../components/icons/IconProfile';
import cn from 'classnames';
import { useContext, type MouseEvent } from 'react';
import { UserContext } from '../../context/User/user.context';

function Navigation() {
	const { user, logout } = useContext(UserContext);

	const handleLinkClick = (
		e: MouseEvent<HTMLAnchorElement>,
		callback?: () => void
	) => {
		e.preventDefault();
		callback?.();
	};

	return (
		<header className={styles.navigation}>
			<IconBookmark className={styles.logo} />
			<nav className={styles['navigation-list']}>
				<ul>
					<li
						className={cn(
							styles['navigation-list-item'],
							styles['navigation-list-item__active']
						)}
					>
						<a href="#" onClick={handleLinkClick}>
							<span>Поиск фильмов</span>
						</a>
					</li>
					<li className={styles['navigation-list-item']}>
						<a href="#" onClick={handleLinkClick}>
							<span>Мои фильмы</span>
							<div className={styles.counter}>2</div>
						</a>
					</li>
					{user?.isLoginned ? (
						<>
							<li className={styles['navigation-list-item']}>
								<a href="#" onClick={handleLinkClick}>
									<span>{user.profileName}</span>
									<IconProfile />
								</a>
							</li>
							<li className={styles['navigation-list-item']}>
								<a href="#" onClick={(e) => handleLinkClick(e, logout)}>
									<span>Выйти</span>
								</a>
							</li>
						</>
					) : (
						<li className={styles['navigation-list-item']}>
							<a href="#" onClick={handleLinkClick}>
								<span>Войти</span>
								<IconLogin />
							</a>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;

import styles from './Navigation.module.css';
import IconLogin from '../../components/Icons/IconLogin';
import IconBookmark from '../../components/Icons/IconBookmark';
import IconProfile from '../../components/Icons/IconProfile';
import cn from 'classnames';

function Navigation({ onLogout, onLogin, profile = null }) {
	const onLinkClick = (e, callBack) => {
		e.preventDefault();
		if (callBack) {
			callBack();
		}
	};
	
	return (
		<header className={styles['navigation']}>
			<IconBookmark className={styles['logo']} />
			<nav className={styles['navigation-list']}>
				<ul>
					<li className={cn(styles['navigation-list-item'], styles['navigation-list-item__active'])}>
						<a href="#" onClick={onLinkClick}>
							<span>Поиск фильмов</span>
						</a>
					</li>
					<li className={styles['navigation-list-item']}>
						<a href="#" onClick={onLinkClick}>
							<span>Мои фильмы</span>
							<div className={styles['counter']}>2</div>
						</a>
					</li>
					{profile?.isLoginned
						? (
							<>
								<li className={styles['navigation-list-item']}>
									<a href="#" onClick={onLinkClick}>
										<span>{profile.profileName}</span>
										<IconProfile />
									</a>
								</li>
								<li className={styles['navigation-list-item']}>
									<a href="#" onClick={(e) => onLinkClick(e, onLogout)}>
										<span>Выйти</span>
									</a>
								</li>
							</>
						) : (
							<li className={styles['navigation-list-item']}>
								<a href="#" onClick={(e) => onLinkClick(e, onLogin)}>
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
import styles from './Navigation.module.css';
import IconLogin from '../../components/Icons/IconLogin';
import IconBookmark from '../../components/Icons/IconBookmark';
import cn from 'classnames';

function Navigation() {
	return (
		<header className={styles['navigation']}>
			<IconBookmark className={styles['logo']} />
			<nav className={styles['navigation-list']}>
				<ul>
					<li className={cn(styles['navigation-list-item'], styles['navigation-list-item__active'])}>
						<a href="#">
							<span>Поиск фильмов</span>
						</a>
					</li>
					<li className={styles['navigation-list-item']}>
						<a href="#">
							<span>Мои фильмы</span>
							<div className={styles['counter']}>2</div>
						</a>
					</li>
					<li className={styles['navigation-list-item']}>
						<a href="#">
							<span>Войти</span>
							<IconLogin />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default Navigation;
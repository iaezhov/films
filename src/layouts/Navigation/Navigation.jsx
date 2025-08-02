import './Navigation.css';
import IconLogin from '../../components/icons/IconLogin';

function Navigation() {
	return (
		<header className='navigation'>
			<img className='logo' src="/logo.svg" alt="Лого" />
			<nav className='navigation-list'>
				<ul>
					<li className='navigation-list-item navigation-list-item__active'>
						<a href="#">
							<span>Поиск фильмов</span>
						</a>
					</li>
					<li className='navigation-list-item'>
						<a href="#">
							<span>Мои фильмы</span>
							<div className='counter'>2</div>
						</a>
					</li>
					<li className='navigation-list-item'>
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
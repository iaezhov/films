import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Navigation from '../Navigation/Navigation';

function Layout() {
	return (
		<div className={styles['layout']}>
			<Navigation />
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;

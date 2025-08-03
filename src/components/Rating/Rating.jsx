import styles from './Rating.module.css';
import IconStar from '../Icons/IconStar';

function Rating({ count }) {
	return (
		<div className={styles.rating}>
			<IconStar />
			<span>{count}</span>
		</div>
	);
}
export default Rating;
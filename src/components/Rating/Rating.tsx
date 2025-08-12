import styles from './Rating.module.css';
import IconStar from '../icons/IconStar';
import type { RatingProps } from './Rating.props';

function Rating({ count = 0 }: RatingProps) {
	return (
		<div className={styles.rating}>
			<IconStar />
			<span>{count}</span>
		</div>
	);
}
export default Rating;
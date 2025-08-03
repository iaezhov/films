import './Rating.css';
import IconStar from '../Icons/IconStar';

function Rating({ count }) {
	return (
		<div className="rating">
			<IconStar />
			<span>{count}</span>
		</div>
	);
}
export default Rating;
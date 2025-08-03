import styles from './MovieCardButton.module.css';
import IconLike from '../Icons/IconLike';
import IconBookmark from '../Icons/IconBookmark';
import cn from 'classnames';

function MovieCardButton({ marked, onClick }) {

	return (
		<button
			className={cn(styles['button-like'], {
				[styles['button-like--marked']]: marked
			})}
			onClick={onClick}
		>
			{ marked ? <IconBookmark/> : <IconLike/> }
			<span>{ marked ? 'В избраном' : 'В избранное' }</span>
		</button>
	);
}
export default MovieCardButton;
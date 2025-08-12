import styles from './MovieCardButton.module.css';
import IconLike from '../icons/IconLike';
import cn from 'classnames';
import IconBookmark from '../icons/IconBookmark';
import type { MovieCardButtonProps } from './MovieCardButton.props';

function MovieCardButton({ marked, ...props }: MovieCardButtonProps) {

	return (
		<button
			className={cn(styles['button-like'], {
				[styles['button-like--marked']]: marked
			})}
			{...props}
		>
			{ marked ? <IconBookmark/> : <IconLike/> }
			<span>{ marked ? 'В избраном' : 'В избранное' }</span>
		</button>
	);
}
export default MovieCardButton;
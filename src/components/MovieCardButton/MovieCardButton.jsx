import './MovieCardButton.css';
import IconLike from '../Icons/IconLike';
import IconBookmark from '../Icons/IconBookmark';

function MovieCardButton({ marked, onClick }) {
	const cln = 'button-like' + (marked ? ' button-like--marked' : '');

	return (
		<button className={cln} onClick={onClick}>
			{ marked ? <IconBookmark/> : <IconLike/> }
			<span>{ marked ? 'В избраном' : 'В избранное' }</span>
		</button>
	);
}
export default MovieCardButton;
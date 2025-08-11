import styles from './Title.module.css';
import type { TitleProps } from './Title.props';

function Title({ text }: TitleProps) {
	return (
		<h1 className={styles.title}>{text}</h1>
	);
}
export default Title;
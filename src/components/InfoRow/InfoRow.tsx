import type { InfoRowProps } from './InfoRow.props';
import styles from './InfoRow.module.css';

function InfoRow({ title, text }: InfoRowProps) {
	return (
		<div className={styles['info-row']}>
			<div className={styles['title']}>{title}</div>
			<div className={styles['text']}>{text}</div>
		</div>
	);
}
export default InfoRow;
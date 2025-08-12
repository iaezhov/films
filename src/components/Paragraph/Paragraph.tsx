import styles from './Paragraph.module.css';
import cn from 'classnames';
import type { ParagraphProps } from './Paragraph.props';

function Paragraph({ size = 'default', children }: ParagraphProps) {
	return (
		<p
			className={cn(styles.paragraph, styles[size])}
		>{children}</p>
	);
}
export default Paragraph;
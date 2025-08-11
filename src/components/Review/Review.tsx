import type { FadeWrapperProps } from './Review.props';
import styles from './Review.module.css';
import cn from 'classnames';
import Paragraph from '../Paragraph/Paragraph';
import FadeWrapper from '../FadeWrapper/FadeWrapper';

function Review({ text, date, title, className }: FadeWrapperProps) {
	return (
		<FadeWrapper className={cn(styles['review'], className)}>
			<div className={styles['head']}>
				<span className={styles['title']}>{title}</span>
				<div className={styles['date']}>{date}</div>
			</div>
			<Paragraph>{text}</Paragraph>
		</FadeWrapper>
	);
}
export default Review;
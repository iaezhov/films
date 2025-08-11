import type { FadeWrapperProps } from './FadeWrapper.props';
import styles from './FadeWrapper.module.css';
import cn from 'classnames';

function FadeWrapper({ children, className }: FadeWrapperProps) {
	return (
		<div className={cn(styles['fade-wrapper'], className)}>{children}</div>
	);
}
export default FadeWrapper;
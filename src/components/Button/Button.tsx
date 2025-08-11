import { forwardRef } from 'react';
import styles from  './Button.module.css';
import type { ButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
	return (
		<button
			{...props}
			ref={ref}
			className={styles['button']}
		>{children}</button>
	);
});
export default Button;
import { forwardRef } from 'react';
import styles from  './Button.module.css';

const Button = forwardRef(({ text, ...props }, ref) => {
	return (
		<button
			{...props}
			ref={ref}
			className={styles['button']}
		>{text}</button>
	);
});
export default Button;
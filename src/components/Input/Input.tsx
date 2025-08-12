import { forwardRef } from 'react';
import IconSearch from '../icons/IconSearch';
import styles from './Input.module.css';
import type { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, name = 'value', ...props }, ref) => {
	return (
		<div className={styles['input-wrapper']}>
			{ icon === 'search' && <IconSearch /> }
			<input
				{...props}
				ref={ref}
				name={name}
				type="text"
				className={styles['styled-input']}
			/>
		</div>
	);
});
export default Input;
import { forwardRef } from 'react';
import IconSearch from '../Icons/IconSearch';
import styles from './Input.module.css';

const Input = forwardRef(({ icon, name = 'value', ...props }, ref) => {
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
import IconSearch from '../Icons/IconSearch';
import styles from './Input.module.css';

function Input({ placeholder, value, name, onChange, icon }) {
	return (
		<div className={styles['input-wrapper']}>
			{ icon === 'search' && <IconSearch /> }
			<input
				name={name || 'value'}
				type="text"
				value={value}
				onChange={onChange}
				className={styles['styled-input']}
				placeholder={placeholder}
			/>
		</div>
	);
}
export default Input;
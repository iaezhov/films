import IconSearch from '../icons/IconSearch';
import './Input.css';

function Input({ placeholder, value, name, onChange, icon }) {
	return (
		<div className="input-wrapper">
			{ icon === 'search' && <IconSearch /> }
			<input
				name={name || 'value'}
				type="text"
				value={value}
				onChange={onChange}
				className="styled-input"
				placeholder={placeholder}
			/>
		</div>
	);
}
export default Input;
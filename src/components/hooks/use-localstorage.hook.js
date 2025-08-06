import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue = null) {
	const [data, setData] = useState(initialValue);
    
	useEffect(() => {
		const res = localStorage.getItem(key);
		if (res && res !== 'undefined') {
			setData(JSON.parse(res));
		}
	}, [key]);

	const saveData = (value) => {
		localStorage.setItem(key, JSON.stringify(value));
		setData(value);
	};

	return [data, saveData];
}
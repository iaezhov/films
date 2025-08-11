import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
	const [data, setData] = useState<T>(initialValue);
    
	useEffect(() => {
		const res = localStorage.getItem(key);
		if (res && res !== 'undefined') {
			setData(JSON.parse(res));
		}
	}, [key]);

	const saveData = (value: T) => {
		localStorage.setItem(key, JSON.stringify(value));
		setData(value);
	};

	return [data, saveData];
}
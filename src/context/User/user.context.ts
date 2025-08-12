import { createContext } from 'react';
import type { IUser } from '../../entities/user/user';

interface UserContextValue {
    user: IUser | null;
    logout: () => void;
    login: (user: Pick<IUser, 'profileName'>) => void;
}

export const UserContext = createContext<UserContextValue>({
	user: null,
	login: () => {},
	logout: () => {}
});
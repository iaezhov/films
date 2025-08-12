import { UserContext } from './user.context';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';
import type { UserContextProviderProps } from './UserContextProvider.props';
import type { IUser } from '../../entities/user/user';
import type { ReactElement } from 'react';

export const UserContextProvider = ({ children }: UserContextProviderProps): ReactElement => {
	const [profiles, setProfiles] = useLocalStorage<IUser[]>('profiles', []);
	const [currentProfile, setCurrentProfile] = useLocalStorage<IUser | null>('currentProfile', null);

	const login = ({ profileName }: Pick<IUser, 'profileName'>): void => {
		if (!profileName) {
			return;
		}
		if (!profiles?.length) {
			setCurrentProfile(null);
		}
		const findedProfile = profiles.find((p) => p.profileName === profileName);
		const currentProfileInfo: IUser = {
			profileName: findedProfile?.profileName || profileName,
			isLoginned: true
		};
		setProfiles([
			...profiles.map(p => ({ ...p, isLoginned: p.profileName === profileName })),
			...(!findedProfile ? [currentProfileInfo] : [])
		]);
		setCurrentProfile(currentProfileInfo);
	};

	const logout = (): void => {
		setProfiles(profiles.map(p => ({ ...p, isLoginned: false })));
		setCurrentProfile(null);
	};

	return (
		<UserContext.Provider value={{ 
			user: currentProfile, 
			login, 
			logout 
		}}>
			{children}
		</UserContext.Provider>
	);
};
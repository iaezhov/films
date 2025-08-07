import { UserContext } from './user.context';
import { useLocalStorage } from '../../components/hooks/use-localstorage.hook';

export const UserContextProvider = ({ children }) => {
	const [profiles, setProfiles] = useLocalStorage('profiles', []);
	const [currentProfile, setCurrentProfile] = useLocalStorage('currentProfile', null);

	const login = ({ profileName }) => {
		if (!profileName) {
			return;
		}
		if (!profiles?.length) {
			setCurrentProfile(null);
		}
		const findedProfile = profiles.find((p) => p.profileName === profileName);
		const currentProfileInfo = {
			profileName: findedProfile?.profileName || profileName,
			isLoginned: true
		};
		setProfiles([
			...profiles.map(p => ({ ...p, isLoginned: p.profileName === profileName })),
			...(!findedProfile ? [currentProfileInfo] : [])
		]);
		setCurrentProfile(currentProfileInfo);
	};

	const logout = () => {
		setCurrentProfile(null);
		setProfiles(profiles.map((p) => {
			if (p.profileName === currentProfile.profileName) {
				return {
					...p,
					isLoginned: false
				};
			}
			return p;
		})
		);
	};

	return <UserContext.Provider value={{ user: currentProfile, login, logout }}>
		{children}
	</UserContext.Provider>;
};
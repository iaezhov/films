import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }: { children: ReactNode }) {
	const res = localStorage.getItem('currentProfile');
	const user = res && res !== 'undefined' ? JSON.parse(res) : undefined;

	if (!user?.isLoginned) {
		return <Navigate to='/auth/login' replace />;
	}

	return children;
}

export default RequireAuth;
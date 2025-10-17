import {createContext, useContext, useMemo, useState, useEffect} from 'react';

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({children}) {
	// save in local storage
	const [isAuthed, setIsAuthed] = useState(
		() => localStorage.getItem('isAuthed') === 'true'
	);
	const [user, setUser] = useState(() => {
		const raw = localStorage.getItem('user');
		return raw ? JSON.parse(raw) : null;
	});

	useEffect(
		() => localStorage.setItem('isAuthed', String(isAuthed)),
		[isAuthed]
	);
	useEffect(
		() => localStorage.setItem('user', user ? JSON.stringify(user) : ''),
		[user]
	);

	const login = (u) => {
		setIsAuthed(true);
		setUser(u ?? {email: 'demo@taskflow.app', role: 'demo'});
	};
	const logout = () => {
		setIsAuthed(false);
		setUser(null);
	};

	const value = useMemo(
		() => ({isAuthed, user, login, logout}),
		[isAuthed, user]
	);
	return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

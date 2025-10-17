import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from './AuthProvider.jsx';

export default function ProtectedRoute({children}) {
	const {isAuthed} = useAuth();
	const location = useLocation();
	if (!isAuthed)
		return <Navigate to="/login" replace state={{from: location}} />;
	return children;
}

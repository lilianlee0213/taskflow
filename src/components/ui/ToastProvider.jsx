import {createContext, useContext, useState, useCallback} from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ToastCtx = createContext(null);
export const useToast = () => useContext(ToastCtx);

export default function ToastProvider({children}) {
	const [open, setOpen] = useState(false);
	const [cfg, setCfg] = useState({text: '', severity: 'info'});

	const push = useCallback((text, severity = 'info') => {
		setCfg({text, severity});
		setOpen(true);
	}, []);

	const close = useCallback(() => setOpen(false), []);

	return (
		<ToastCtx.Provider value={{push}}>
			{children}
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={close}
				anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
				<Alert
					onClose={close}
					severity={cfg.severity}
					variant="filled"
					sx={{width: '100%'}}>
					{cfg.text}
				</Alert>
			</Snackbar>
		</ToastCtx.Provider>
	);
}

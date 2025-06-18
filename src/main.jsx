import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import App from './App.jsx';
import { myRouter } from './routes.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={myRouter}>
			<App />
		</RouterProvider>
	</StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout/Layout';
import { UserContextProvider } from './context/User/UserContextProvider';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Movie from './pages/Movie/Movie';
import Favorites from './pages/Favorites/Favorites';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Main />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/movie/:id',
				element: <Movie />
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	</StrictMode>
);

import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout/Layout';
import { UserContextProvider } from './context/User/UserContextProvider';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import { getMovie } from './entities/movie';

const Main = lazy(() => import('./pages/Main/Main'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Suspense><Main /></Suspense>
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
				loader: async ({ params }) => {
					const movie = await getMovie(params.id as string);
					return { movie };
				},
				Component: lazy(() => import('./pages/Movie/Movie')),
				HydrateFallback: () => <div>Загрузка данных фильма</div>
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

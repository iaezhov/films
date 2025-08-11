import type { IMovie } from './movie';

export const moviesList: IMovie[] = [
	{
		id: crypto.randomUUID(),
		rating: 324,
		name: 'Black Widow',
		marked: true,
		posterUrl: '/posters/1.png'
	},
	{
		id: crypto.randomUUID(),
		rating: 124,
		name: 'Shang Chi',
		marked: false,
		posterUrl: '/posters/2.png'
	},
	{
		id: crypto.randomUUID(),
		rating: 235,
		name: 'Loki',
		marked: false,
		posterUrl: '/posters/3.png'
	},
	{
		id: crypto.randomUUID(),
		rating: 123,
		name: 'How I Met Your Mother',
		marked: false,
		posterUrl: '/posters/4.png'
	},
	{
		id: crypto.randomUUID(),
		rating: 8125,
		name: 'Money Heist',
		marked: false,
		posterUrl: '/posters/5.png'
	},
	{
		id: crypto.randomUUID(),
		rating: 123,
		name: 'Friends',
		marked: false,
		posterUrl: '/posters/6.png'
	},
	{
		id: crypto.randomUUID(),
		rating: 12,
		name: 'The Big Bang Theory',
		marked: false,
		posterUrl: '/posters/7.png'
	},
	{
		id: crypto.randomUUID(),
		rating: 456,
		name: 'Two And a Half Men',
		marked: false,
		posterUrl: '/posters/8.png'
	}
];

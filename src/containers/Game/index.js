import Games from './Game.list';
import Game from './Game.detail';

const routes = [
	{
		name: 'game.list',
		path: '/games',
		component: Games,
		menu: true,
		menuName: 'Games'
	},
	{
		name: 'game.detail',
		path: '/games/:id',
		component: Game
	}
];

export default routes;

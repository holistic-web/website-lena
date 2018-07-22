export default {
	namespaced: true,
	state: {
		path: 'games',
		games: [],
		game: []
	},
	mutations: {
		SET_GAMES(state, games) {
			state.games = games;
		},
		SET_GAME(state, game) {
			state.game = game;
		}
	},
	actions: {
		async fetchList({ commit, state, rootState }) {
			const listRef = rootState.data.child(state.path);
			const snap = await listRef.once('value');
			const items = snap.val().map((item, i) => {
				item._id = i;
				return item;
			});
			commit('SET_GAMES', items);
		},
		async fetchDetail({ commit, state, rootState }) {
			const detailRef = rootState.data.child(state.path);
			const snap = await detailRef.once('value');
			const detail = snap.val();
			commit('SET_GAME', detail);
		}
	},
	getters: {
		games: state => state.games,
		game: state => state.game
	}
};

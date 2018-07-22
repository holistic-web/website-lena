<template>

	<ghost-buster v-if="game.component === 'GhostBuster'"/>

</template>

<script>
import games from './Games';
import GhostBuster from './Games/GhostBuster';

export default {
	components: {
		GhostBuster
	},
	data() {
		return {
			game: {}
		};
	},
	created() {
		this.game = games.find(game => game._id === this.$route.params.id);
	}
};
</script>


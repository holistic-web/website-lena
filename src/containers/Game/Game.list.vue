<template>
	<div class="Game">
		<div class="App__inner">

			<game-card
				v-for="game in games"
				:key="game._id"
				:game="game"/>

		</div>
	</div>
</template>

<script>
import games from './Games';
import GameCard from './components/GameCard';

export default {
	components: {
		GameCard
	},
	data() {
		return {
			games: []
		};
	},
	created() {
		this.games = games;
	}
};
</script>

<style lang="scss">
@import '../../settings';

</style>

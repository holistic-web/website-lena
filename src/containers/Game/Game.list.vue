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
import { mapGetters, mapActions } from 'vuex';
import GameCard from './components/GameCard';

export default {
	components: {
		GameCard
	},
	computed: {
		...mapGetters({
			games: 'game/games'
		})
	},
	methods: {
		...mapActions({
			fetch: 'game/fetchList'
		})
	},
	created() {
		this.fetch();
	}
};
</script>

<style lang="scss">
@import '../../settings';

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

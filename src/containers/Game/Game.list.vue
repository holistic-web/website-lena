<template>
	<div class="Game">
		<div class="App__inner">

			<b-card
				title="Ghost Buster!"
				img-src="/static/images/ghost-buster.png"
				img-alt="Ghost Buster"
				img-top
				tag="article"
				style="max-width: 20rem;"
				class="mb-2">
				<p class="card-text">
					Try out Helena's first game!
				</p>
				<b-button href="#/ghostbuster" variant="primary">Play now!</b-button>
				<b-button
					href="https://scratch.mit.edu/projects/227734828/#fullscreen"
					target="_blank"
					variant="secondary">
					Play orginal
				</b-button>
			</b-card>

		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GameCard from './components/GameCard';

export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		};
	},
	computed: {
		...mapGetters({
			poems: 'poems'
		})
	},
	methods: {
		...mapActions({
			loadPoems: 'loadPoems'
		})
	},
	created() {
		this.loadPoems();
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

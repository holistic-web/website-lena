<template>

	<b-card
		:title="game.name"
		:img-src="game.thumbnail"
		img-alt="game.name"
		img-top
		tag="article"
		style="max-width: 20rem;"
		class="mb-2">

		<p
			class="card-text"
			v-text="game.description"/>

		<b-button
			href="#/games/0"
			variant="primary">
			Play now!
		</b-button>

		<b-button
			v-if="isOriginalLinkVisible"
			:href="game.meta.originalLink"
			target="_blank"
			variant="secondary">
			Play orginal
		</b-button>

	</b-card>

</template>

<script>
export default {
	props: {
		game: {
			type: Object,
			required: true
		}
	},
	computed: {
		isOriginalLinkVisible() {
			return this.game.meta.originalLink;
		}
	}
};
</script>


<style lang="scss">
@import '../../../settings';


$headerHeight: $Header-Height;

.Ghostbuster {
	width: 100%;
	height: calc(100vh - #{$headerHeight});
	position: relative;
	top: $headerHeight;
	background-image: url('/static/images/spooky-forest.jpg');
	background-size: cover;
}

</style>

<template>

	<b-link
		class="GameCard__link"
		:href="standardLinkText">
		<b-card
			:title="game.name"
			:img-src="game.thumbnail"
			img-alt="game.name"
			img-top
			tag="article"
			style="max-width: 20rem;"
			class="mb-2 GameCard">
			<p
				class="card-text"
				v-text="game.description"/>
			<b-button
				class="GameCard__playGame"
				variant="outline-primary"
				v-text="'Play Now!'"/>
			<b-button
				v-if="isOriginalLinkVisible"
				:href="game.meta.originalLink"
				target="_blank"
				variant="secondary"
				v-text="'Play Original'"/>
		</b-card>
	</b-link>

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
		standardLinkText() {
			return `#/games/${this.game._id}`;
		},
		isOriginalLinkVisible() {
			return this.game.meta.originalLink;
		}
	}
};
</script>


<style lang="scss">
@import '../../../settings';

$textColour: $Text-Colour;

$transitionTime: 0.1s;

.GameCard {
	transition: margin $transitionTime, box-shadow $transitionTime;
	position: relative;

	&:hover {
		position: relative;
		margin: -3px -2px 0 0;
		box-shadow: 1px 2px 0 0px #ccc;

		.GameCard__playGame {
			// duplicate bootstrap outline-primary hover styles
			color: #fff;
			background-color: #007bff;
			border-color: #007bff;
		}

	}

	&__playGame {
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translateX(-50%);
	}

	&__link, &__link:hover {
		text-decoration: none !important;
		color: $textColour
	}
}

</style>

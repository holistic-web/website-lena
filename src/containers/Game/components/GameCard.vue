<template>

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

</template>

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

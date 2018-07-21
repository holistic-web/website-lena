<template>
<div class="Header">
	<div class="App__inner App__inner--fullHeight">

		<b-link to="/">
			<h1 class="Header__title App--center">
				Helena
			</h1>
		</b-link>

		<menue
			class="Header__menue App--center"
			:auto="true"/>

	</div>
</div>
</template>

<script>
import Menue from './Menue';

export default {
	components: {
		Menue
	}
};

</script>

<style lang="scss">
@import '../settings';

$headerHeight: $Header-Height;
$background: $Theme-Colour;
$shadow: $Shadow-Colour;
$textColour: $Highlight-Colour;
$mobileBreak: $Mobile-Width;

.Header{
	background: $background;
	height: $headerHeight;
	position: fixed;
	color: $textColour;
	width: 100%;
	z-index: 10;
	transition: box-shadow 350ms ease-in-out;
	&__title{
		height: $headerHeight / 2;
		color: $textColour;
		margin: auto;
		display: block;
		display: inline-block;
		left: 0;
	}
	&__menue{
		display: inline-block;
		right: 0;
		margin-top: 9px;
		@media all and (max-width: $mobileBreak) {
			top: 70px;
		}
	}

	&__inner{
		height: 100%;
	}

	&--shadow {
		box-shadow: 0 4px 15px -4px $shadow;
	}

	&--responsive {
		@media all and (max-width: $mobileBreak) {
			width: 100%;
		}
	}
}

</style>

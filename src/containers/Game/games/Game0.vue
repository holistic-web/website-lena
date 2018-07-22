<template>

	<section class="Ghostbuster"/>

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


<template>
	<div class="Landing">
		<div class="App__inner">

			<b-link href="#/games">
				<b-card
					class="Landing__card"
					overlay
					img-src="/static/images/games.jpg"
					img-alt="Games"
					text-variant="white"
					title="Games"/>
			</b-link>

		</div>
	</div>
</template>

<style lang="scss">
@import '../../settings';

.Landing {

	&__card {
		height: 270px;
		overflow: hidden;
	}
}
</style>

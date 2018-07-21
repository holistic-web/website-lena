<template>
    <div class="Footer">
        <div class="App__inner Footer__inner">
            <p> Andrew and Mike Ltd. Corp</p>
        </div>
    </div>
</template>


<style lang="scss">
@import '../settings';

$textColour: $Highlight-Colour;
$backgroundColour: $Background-Colour;
$height: $Footer-Height;


.Footer{
	height: $height;
	background: $Theme-Colour;

	&__inner {
		padding-top: 0.8em;
	}
}

</style>

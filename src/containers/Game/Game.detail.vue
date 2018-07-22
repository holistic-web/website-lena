<template>

	<game0 v-if="this.$route.params.id === '0'"/>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Game0 from './games/Game0';

export default {
	components: {
		Game0
	},
	computed: {
		...mapGetters({
			game: 'game/game'
		})
	},
	methods: {
		...mapActions({
			fetch: 'game/fetchDetail'
		})
	},
	created() {
		this.fetch();
	}
};
</script>


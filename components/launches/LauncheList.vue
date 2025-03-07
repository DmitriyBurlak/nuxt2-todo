<template>
  <div class="launches-list">
		<div v-if="error">{{ error }}</div>

		<template v-else-if="items?.length">
			<LaunchesItem
				v-for="(item, idx) in items"
				:key="idx"
				:item="item"
			/>
		</template>

		<div v-else>
			Список запусков пуст
		</div>
  </div>
</template>

<script>
import LaunchesItem from './LaunchesItem.vue'

export default {
	components: {
    LaunchesItem,
  },
	props: {
    items: {
      type: Array,
      default: () => [],
    },
    error: {
      type: String,
      default: '',
    }
  }
}
</script>

<style>
.launches-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>
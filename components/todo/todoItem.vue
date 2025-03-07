<template>
  <div class="todo-item">
		<NuxtLink
			:to="`/detail/${item?.id || ''}`"
			class="todo-item"
		>
			<input
				v-model="item.completed"
				style="min-width: 20px; width: 20px; height: 20px;"
				type="checkbox"
				disabled
			/>
			<div>
				{{ item?.title || '' }}
				<div v-if="item?.name">
					name: {{ item.name }}
				</div>
			</div>
		</NuxtLink>
  </div>
</template>

<script>
export default {
	props: {
    item: {
      type: Object,
      default: () => ({})
    },
  }
}
</script>

<style>
.todo-item {
	display: flex;
	align-items: center;
	gap: 10px;
	text-decoration: none;
	color: #000;
}
</style>
<template>
  <div class="todo-list">
		<div v-if="error">{{ error }}</div>

		<template v-else-if="todos?.length">
			<TodoItem
				v-for="(item, idx) in todos"
				:key="idx"
				:item="item"
			/>
		</template>

		<div v-else>
			Список задач пуст
		</div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
	components: {
    TodoItem,
  },
	props: {
    todos: {
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
.todo-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>
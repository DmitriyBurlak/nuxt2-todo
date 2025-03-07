<template>
  <div class="todo-details">
		<NuxtLink
			to="/"
		>
			Вернуться назад
		</NuxtLink>
		
		<div class="todo-details__wrapper">
			<div v-if="todoError">{{ todoError }}</div>

			<div v-else-if="todo">	
				<h1>Задача №{{ todo?.id || '' }}</h1>

				<div class="details">
					<h1>{{ todo?.title || '' }}</h1>

					<input
						v-model="todo.completed"
						style="min-width: 20px; width: 20px; height: 20px;"
						type="checkbox"
						disabled
					/>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	async asyncData({ $axios, params }) {
		let todo = null;
		let todoError = null;

		const todoId = params.id;
		if (!todoId) return;

		try {
      const data = await $axios.$get(`/todos/${todoId}`);
      todo = data;
    } catch (e) {
			todoError = 'Ошибка загрузки данных';
      console.error('Todos load error:', e);
    }

    return {
      todo,
      todoError,
    }
	},
}
</script>

<style>
.todo-details__wrapper {
	display: flex;
	gap: 50px;
	padding-top: 24px;
}

.todo-details__wrapper .details {
	display: flex;
	align-items: center;
	gap: 10px;
	padding-top: 12px;
}
</style>
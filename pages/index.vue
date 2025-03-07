<template>
  <div class="main-page">
    <h1>Todo</h1>

		<div class="main-page__wrapper">
			<TodoList
				:todos="todos"
				:error="todosError"
				class="main-page__list"
			/>
			<LauncheList
				:items="launches"
				:error="launcheError"
				class="main-page__list"
			/>
		</div>
  </div>
</template>

<script>
import { TodoList } from '~/components/todo'
import { LauncheList } from '~/components/launches'

export default {
	components: {
		TodoList,
		LauncheList,
  },
	async asyncData({ $axios }) {
		let todos = [];
    let users = [];
    let launches = [];
    let usersError = null;
    let todosError = null;
    let launcheError = null;

		try {
      const data = await $axios.$get('/todos');
      todos = data;
    } catch (e) {
      todosError = 'Ошибка загрузки задач';
      console.error('Todos load error:', e);
    }

    try {
      const data = await $axios.$get('/users');
      users = data;
    } catch (e) {
      usersError = 'Ошибка загрузки пользователей';
      console.error('Users load error:', e);
    }

		try {
      const data = await $axios.$get('https://api.spacexdata.com/v4/launches');
      launches = data;
    } catch (e) {
      launcheError = 'Ошибка загрузки списка запусков';
      console.error('Launches load error:', e);
    }

		if (users?.length) {
			const usersCount = 10; // ограничение в 10 записей
      const usersNames = users
				.slice(0, usersCount)
				.map(user => user.name);

			todos = todos.map((todo, index) => ({
				...todo,
				name: usersNames[index % usersNames.length]
			}));
		}

    return {
      todos,
      users,
			launches,
      usersError,
      todosError,
			launcheError,
    }
	},
	data() {
    return {
    }
  },
	methods: {
  },
	mounted() {
  },
}
</script>

<style>
.main-page__wrapper {
	display: flex;
	gap: 50px;
	padding-top: 20px;
}

.main-page__list {
	width: 50%;
}
</style>
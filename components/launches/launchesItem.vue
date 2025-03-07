<template>
  <div class="launches-item">
		<span class="launches-item__item">{{ item?.date_local ? new Date(item.date_local).toDateString() : '' }}</span>
		<span class="launches-item__item">{{ item?.details || '' }}</span>
		<span class="launches-item__item">{{ item?.rocket || '' }}</span>
		<span class="launches-item__item">{{ item?.success || '' }}</span>
  </div>
</template>

<script>
export default {
  name: 'LaunchesItem',
	props: ['item'],
}
</script>

<style>
.launches-item {
	display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  gap: 20px;
	background: #ebe4e4;
  padding: 20px;
  border-radius: 8px;
}
</style>
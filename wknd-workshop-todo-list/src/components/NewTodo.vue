<template>
  <form @submit.prevent="addItem()">
    <div>
      <label for="todo"></label>
      <input name="todo" v-model="todo.name">
    </div>
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  props: ['todo', 'addItem']
}
</script>

<style>

</style>

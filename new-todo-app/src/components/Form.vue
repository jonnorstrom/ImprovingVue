<template>
  <form @submit.prevent="addItem()">
    <div>
      <label for="todo">What to do?</label>
      <input type="text" v-model='todo.title' name='todo' required>
    </div>
    <div>
      <label for="optional">Optional??</label>
      <input type="checkbox" v-model="todo.optional" name="optional">
    </div>
    <br>
    <button type="submit" name="button">Add item</button>
  </form>
</template>

<script>
export default {
  props: ["todo", "addItem"]
}
</script>

<style lang="css">
</style>

<template>
  <li>
    <span>{{ todo.title }}</span>
    <span>
      <button @click="incompleteItem(i)">Not done</button>
    </span>
  </li>
</template>

<script>
export default {
  props: ['todo', 'incompleteItem', 'index']
}
</script>

<style lang="css">
</style>

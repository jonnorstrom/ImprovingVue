<template>
  <li>
    <span>{{ todo.title }}</span>
    <span><strong><em>{{todo.optional ? 'optional' : "req'd"}}</em></strong></span>
    <span>
      <button @click="markItem(index)">done</button>
    </span>
  </li>
</template>

<script>
export default {
  props: ['todo', 'markItem', 'index']
}
</script>

<style lang="css">
</style>

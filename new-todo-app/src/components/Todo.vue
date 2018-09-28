<template lang="html">
  <li>
    <span>{{ todo.title }}</span>
    <span><em><strong>{{todo.optional ? 'optional' : "req'd"}}</strong></em></span>
    <span>
      <button @click="markItem(i)">done</button>
    </span>
  </li>

</template>

<script>
export default {
  props: ['todo', 'markItem', 'i']
}
</script>

<style lang="css">
</style>

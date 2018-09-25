<template>
  <div class="lists">
    <div class="col">
      <h3 v-if="reqdTodos()">Not done stuff : {{reqdTodos()}}</h3>
      <h3 v-else>Nothing important to do!</h3>
      <ul>
        <li v-for="(todo,i) in todos" :key="'todo'+i" class="incomplete-item">
          <span>{{ todo.title }}</span>
          <span><strong><em>{{todo.optional ? 'optional' : "req'd"}}</em></strong></span>
          <span>
            <button @click="completeItem(i)">done</button>
          </span>
        </li>
      </ul>
    </div>
    <div class="col">
      <h3>Done stuff</h3>
      <ul>
        <li v-for="(todo,i) in doneTodos" :key="'todo'+i" class="complete-item">
          <span>{{ todo.title }}</span>
          <span>
            <button @click="incompleteItem(i)">Not done</button>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'incompleteItem',
    'completeItem',
    'reqdTodos',
    'todos',
    'doneTodos'
  ]
}
</script>

<style>
  button {
    padding: 5px;
    border: 4px #36495D solid;
    border-radius: 5px;
    outline: none;
    font: inherit;
    color: inherit;
    background: none;
  }
</style>

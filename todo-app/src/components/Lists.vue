<template>
  <div class="lists">
    <div class="col">
      <h3 v-if="reqdTodos()">Not done stuff : {{reqdTodos()}}</h3>
      <h3 v-else>Nothing important to do!</h3>
      <ul>
        <todo
          v-for="(todo,i) in todos"
          :key="'todo'+i"
          :todo="todo"
          :markItem="completeItem"
          :index="i"
          :class="['incomplete-item']"
        ></todo>
      </ul>
    </div>
    <div class="col">
      <h3>Done stuff</h3>
      <ul>
        <todo
          v-for="(todo,i) in doneTodos"
          :key="'todo'+i"
          :todo="todo"
          :markItem="incompleteItem"
          :index="i"
          :class="['complete-item']"
        ></todo>
      </ul>
    </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  props: [
    'incompleteItem',
    'completeItem',
    'reqdTodos',
    'todos',
    'doneTodos'
  ],

  components: {
    Todo
  }
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

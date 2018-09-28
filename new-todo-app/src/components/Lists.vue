<template>
  <div class="lists">
    <div class="col">
      <h3 v-if="reqdTodos()">Not done stuff : {{reqdTodos()}}</h3>
      <h3 v-else>Nothing important to do!</h3>
      <ul>
        <Todo
          v-for="(todo, i) in todos"
          :markItem="completeItem"
          :i="i"
          :todo="todo"
          :class="['incomplete-item']"
        ></Todo>
      </ul>
    </div>
    <div class="col">
      <h3>Done stuff</h3>
      <ul>
        <Todo
          v-for="(todo, i) in doneTodos"
          :markItem="incompleteItem"
          :i="i"
          :todo="todo"
          :class="['complete-item']"
        ></Todo>
      </ul>
    </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  props: [
    'reqdTodos',
    'todos',
    'doneTodos'
  ],

  components: {
    Todo
  },

  methods: {
    completeItem(i) {
      this.doneTodos.push(...this.todos.splice(i, 1))
    },

    incompleteItem(i) {
      this.todos.push(...this.doneTodos.splice(i, 1))
    },

    printComp() {
      console.log(this)
    }
  }
}
</script>

<style lang="css">
</style>

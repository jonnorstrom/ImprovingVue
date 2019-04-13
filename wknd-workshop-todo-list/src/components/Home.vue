<template>
  <div>
    <NewTodo :todo="todo" :addItem="addItem"/>
      <div class="lists">
        <div class="col">
          <Todo
            v-for="(todo, i) in todos"
            :key="'todo-' + i"
            :index="i"
            :todo="todo"/>
        </div>
      </div>
  </div>
</template>

<script>
import Todo from './Todo.vue'
import NewTodo from './NewTodo.vue'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      todo: {}
    }
  },

  mounted() {
    console.log(this.$route)
  },

  components : {
    Todo,
    NewTodo
  },

  computed: {
    ...mapState(['todos'])
  },

  methods: {
    addItem() {
      this.$store.commit('addTodo', this.todo.name)
      this.todo = {completed: false}
    }
  },
}
</script>

<style>

</style>



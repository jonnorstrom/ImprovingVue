<template>
  <div>
    <button @click="$store.commit('updateMessage', 'Hello from Home')">Update Message</button>
    <Form
      :addItem="addItem"
      :todo="todo"
    ></Form>
    <lists
      :completeItem="completeItem"
      :reqdTodos="reqdTodos"
      :incompleteItem="incompleteItem"
      :todos="todos"
      :doneTodos="doneTodos"
    ></lists>
  </div>
</template>
<script>
import Lists from './Lists.vue'
import Form from './Form.vue'

export default {
  name: 'app',
  components: {
    Lists,
    Form
  },

  data() {
    return {
      favNum: 9,
      todos: [
        {'title': 'fix the car', 'optional': true},
        {'title': 'save the bees', 'optional': false},
        {'title': 'walk the dog', 'optional': false}
      ],
      todo: {},
      doneTodos: []
    }
  },

  methods: {
    completeItem(i) {
      this.doneTodos.push(...this.todos.splice(i, 1))
    },

    addItem() {
      this.todos.push(this.todo);
      this.todo = {}
    },

    incompleteItem(i) {
      this.todos.push(...this.doneTodos.splice(i, 1))
    },

    reqdTodos() {
      return this.todos.filter((todo) => !todo.optional).length
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #36495D;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  max-width: 1100px;
  min-width: 900px;
  min-height: 90vh;
  border: 3px #46B784 solid;
  border-radius: 10px;
}

html, body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

.lists {
  display: flex;
  justify-content: space-around;
}

.col {
  min-width: 350px;
}

li {
  padding: 15px;
  margin: 5px;
  border: 1px black solid;
  list-style: none;
  text-align: left;
  position: relative;
  min-width: 200px;
}

li button {
  position: absolute;
  top: 3px;
  right: 3px;
}

li span {
  display: block;
}

form input {
  font-size: 1.5em;
}

form {
  display: flex;
  justify-content: center;
  background-color: #46B784;
  max-width: 80%;
  margin: auto;
  border-radius: 5px;
  padding: 15px;
  border: 2px #2c3e50 solid;
}

.complete-item {
  color: white;
  background-color: #5886B7;
}

.incomplete-item {
  color: white;
  background-color: #DF5E5E;
}

ul {
  margin: 0;
  padding: 0;
}

form div {
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

form label {
  display: block;
  text-align: left;
  font-size: 1em;
  align-self: flex-start;
}

form input[type="checkbox"] {
  -webkit-appearance:none;
  width:30px;
  height:30px;
  background:white;
  align-self: center;
  margin: 0;
}

form input[type="checkbox"]:checked {
  background-color: #abd;
}

form input {
  border-radius:5px;
  border:2px solid #555;
}

form button {
  height: 50px;
  align-self: flex-end;
}
</style>

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    message: "Hello from the store",
    todos: [
      {name: "make coffee", completed: false},
      {name: "buy cheese", completed: false},
      {name: "feed cat", completed: false},
      {name: "water plant", completed: false}
    ],
  },

  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage
    },

    updateTodo(state, index) {
      state.todos[index].completed = !state.todos[index].completed 
    },

    addTodo(state, name) {
      state.todos.push({name, completed: false})
    }
  },

  getters: {
    completedItems(state) {
      return state.todos.filter((todo) => todo.completed).length
    },

    notCompletedItems(state) {
      return state.todos.filter((todo) => !todo.completed).length
    }
  }
})
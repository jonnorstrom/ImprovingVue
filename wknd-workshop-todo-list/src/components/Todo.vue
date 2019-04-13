<template>
  <li>
    <h3>{{todo.name}}</h3>
    <p>{{itemStatus(todo.completed)}}</p>
    <button
      @click="$store.commit('updateTodo', index)">
      {{buttonText(todo.completed)}}
    </button>
  </li>
</template>

<script>
export default {
  props: ['todo', 'markComplete', 'index'],

  methods: {
    itemStatus(status) {
      return status ? "Completed" : "Not completed"
    },

    buttonText(status) {
      return status ? "Mark In-complete" : "Mark Complete"
    },
  }
}
</script>

<style>
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
</style>



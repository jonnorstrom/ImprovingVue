<template>
  <div id="app">
    <HelloWorld />
    <!-- <h2>Friendly Names</h2>
    <ul>
      <li
        v-for="(name, i) in names"
        :key="'name-' + i">
      {{name}}</li>
    </ul>

    <h3>profiles</h3>
    <ul>
      <li
        v-for="(val, key) in profile"
        :key="'profile-' + key">
        {{key}} : {{val}}
      </li>
    </ul> -->
    <router-link :to="{path: '/'}">Home</router-link> / 
    <router-link :to="{name: 'bar'}">Bar</router-link> / 
    <router-link :to="{name: 'foo'}">Foo</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  },


  data() {
    return {
      names: ['jon', 'sean', 'andy'],
      profile: {
        name: "jon",
        age: 25,
        likes: 'coffee, cheese'
      },
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

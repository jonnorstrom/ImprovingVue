<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <router-link :to="{ name: 'home'}">Home</router-link> /
    <router-link :to="{ name: 'foo'}">Foo</router-link> /
    <router-link :to="{ name: 'bar'}">Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {
      HelloWorld
    }
  }
</script>

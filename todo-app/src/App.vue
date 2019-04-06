<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <router-link to="/foo">Foo</router-link> / 
    <router-link to="/bar">Bar</router-link> /
    <router-link to="/">Home</router-link>
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

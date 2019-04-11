<template>
  <div>
    <h1>We in Foo</h1>
    <button @click="$store.commit('updateMessage', 'Hello from Foo')">Update Message</button>
  </div>
</template>
<script>
export default {
  
}
</script>

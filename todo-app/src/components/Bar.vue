<template>
  <div>
    <h1>We in Bar</h1>
    <button @click="$store.commit('updateMessage', 'Hello from Bar')">Update Message</button>
  </div>
</template>
<script>
export default {
  
}
</script>

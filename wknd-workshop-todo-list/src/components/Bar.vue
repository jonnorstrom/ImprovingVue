<template>
  <h1>We're in Bar</h1>
  <!-- // SUMMARY HERE -->
</template>

<script>
export default {
  beforeMount() {
    this.$store.commit('updateMessage', 'Updated - from Bar')
  }
}
</script>
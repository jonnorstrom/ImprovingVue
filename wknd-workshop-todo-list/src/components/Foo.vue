<template>
  <div>
    <h2>Completed Items: {{completedItems}}</h2>

    <h2>Items yet to complete: {{notCompletedItems}}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['completedItems', 'notCompletedItems'])
  }
}
</script>


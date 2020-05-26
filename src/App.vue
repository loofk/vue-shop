<template lang="pug">
  #app
    .user {{ user }}
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  user: string = 'Liuxiang'
}

</script>

<style lang="scss" scoped>
  #app {
    color: skyblue
  }
</style>

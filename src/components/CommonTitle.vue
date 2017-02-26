<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script>
export default {
  name: 'title',
  data () {
    return {
      title: 'formパーツ集aa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 20px;
}
</style>

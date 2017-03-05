<template>
  <div id="test">
    <h2 class="title">{{ title }}<span>赤くなった</span></h2>
    <hello></hello>
    <tamesi></tamesi>
  </div>
</template>

<script>
import Hello from './Hello.vue'
import Tamesi from './FormTypeText.vue'
export default {
  name: 'test',
  components: {
    Hello,
    Tamesi
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color: #f00;
.title {
  font-size: 20px;
  span {
    color: $color;
  }
}
</style>

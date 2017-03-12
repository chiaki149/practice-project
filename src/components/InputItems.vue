<template>
  <div>
    <common-title></common-title>
    {{ msg }}
  </div>
</template>

<script>
import CommonTitle from './items/CommonTitle.vue'
export default {
  components: {
    CommonTitle
  },
  data () {
    return {
      msg: '登録編集画面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div>
    <common-title></common-title>
    {{ msg }}
    <p>Vue.jsの基本的な使い方をこのページに記載 <a href="http://qiita.com/hosomichi/items/3faf74b7141081731a75">参考ページ</a></p>
    <div id="sample_namedata">
      <p v-text="fullName()"></p>
    </div>
    <p @click="type1()">ここクリックしたらアラート</p>
</template>

<script>
import CommonTitle from './items/CommonTitle.vue'
export default {
  components: {
    CommonTitle
  },
  data: function () {
    return {
      msg: '話が違うじゃないか',
      firstName: 'Taro',
      lastName: 'Urashima'
    }
  },
  methods: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    type1: function () {
      alert('message')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="wrap">
    <h1><a href="/">練習用のサイト</a></h1>
    <div class="container">
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="side">
        <ul class="menu">
          <li><router-link to="/" exact>HOME</router-link></li>
          <li><router-link to="/basic" @click="type1('これがやりたいんだけど')">基本構文</router-link></li>
          <li><router-link to="/listitems">一覧画面</router-link></li>
          <li><router-link to="/inputitems">登録編集画面</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>

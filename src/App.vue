<template>
  <div class="wrap">
    <h1><a href="/">練習用のサイト</a></h1>
    <div class="container">
      <div class="main">
        contents
      </div>
      <div class="side">
        <ul class="menu">
          <li><router-link to="/" exact>HOME</router-link></li>
          <li><router-link to="/list">一覧画面</router-link></li>
          <li><router-link to="/input">登録編集画面</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>

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
          <li><router-link to="/form">formパーツ集</router-link></li>
          <li><router-link to="/test">test</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>

<style>

html, body {
  height: 100%;
}
.wrap {
  height: 100%;
}
h1 {
  font-size: 18px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: stretch;
  font-size: 12px;
  height: 100%;
}
.main {
  order: 1;
  flex-grow: 1;
}
.side {
  background-color: #483d8b;
}
.menu {
  list-style: none;
}
.menu li {
}
.menu a {
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
}
.router-link-active {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

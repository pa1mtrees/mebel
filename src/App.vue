<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Стили для навигации и общего оформления */
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #007bff;
}
nav a:hover {
  text-decoration: underline;
}
</style>
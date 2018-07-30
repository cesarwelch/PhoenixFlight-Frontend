<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Playball%7CBitter';
@import '../src/assets/css/bootstrap.css';
@import '../src/assets/css/fluidbox.min.css';
@import '../src/assets/css/font-icon.css';
@import '../src/assets/css/home/styles.css';
@import '../src/assets/css/home/responsive.css';

#app {
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
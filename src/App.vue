<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HomeComponent></HomeComponent>
     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ButtonComponent from './components/ButtonComponent'
import HomeComponent from './components/HomeComponent'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ButtonComponent,
    HomeComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

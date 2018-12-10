<template>
  <div class="hello col-lg-12 row justify-content-center mt-3">
    <ButtonComponent></ButtonComponent>
    
    <h1 class="">{{ msg }}</h1>
  
 
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent'  
export default {
  name: 'HelloWorld',

  components:{
      ButtonComponent

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}

</style>

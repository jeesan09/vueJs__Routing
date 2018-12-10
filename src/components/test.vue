<template>
  <div class="row">
  <div class=" col-lg-12 ">
<ButtonComponent></ButtonComponent>
    
     <h1 >{{ msg }}</h1> <br>

     <p >ID Passed through the Router : {{Paramsid}}</p>
 
  </div>
  
</div>

</template>

<script>

import ButtonComponent from './ButtonComponent'




export default {
  name: 'TestComponent',
  components: {

    ButtonComponent,

  },  
  data () {
    return {
      msg: 'Test componet',
      Paramsid: this.$route.params.id
    }
  },
  watch:{
       '$route'(to,from){
         this.Paramsid = to.params.id;

       }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
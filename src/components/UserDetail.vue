<template>
  <div class="hello col-lg-12 row justify-content-center mt-3">

    
    <h1 class="">{{ msg }} User:{{$route.params.id}}</h1>
   
  
 
  </div>
</template>

<script>

export default {
  name: 'UserDetail',

/*  components:{
      ButtonComponent

  },*/
  data () {
    return {
      msg: 'User Detail',
      
    }
  },

  beforeRouteEnter(to,form,next){

    if(true){

       next();
       console.log("before Route Called");
       
    }else{

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

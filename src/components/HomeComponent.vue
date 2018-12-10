<template>
  <div>
  <div class="row">

     
      <div class="col-md-6 col-lg-6">
                           <router-link 
                                       class="btn btn-primary btn-lg"
                                       tag="button"
                                       to="/crud" >
                                      <p style="color: white;">Crud Component</p>
                            </router-link>      
      </div>

      <div class="col-md-6 col-lg-6">
                           <router-link 
                                       class="btn btn-primary btn-lg"
                                       tag="button"
                                       to="/button" >
                                      <p style="color: white;">Test Component</p>
                            </router-link>      
      </div>
   
           
          

  
      
          
  </div>


      <router-view></router-view>


</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
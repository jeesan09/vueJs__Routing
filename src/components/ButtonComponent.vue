<template>


<div class="col-sm-12" >
    
                        <router-link 
                         to="/hellow" 
                         class="btn btn-primary btn-lg" 
                         tag="button">
                                  <p style="color: white;">Welcome</p>
                        </router-link>

   
                        <router-link 
                        to="/test/12"
                        class="btn btn-primary btn-lg" 
                        tag="button"  >
                                  <p style="color: white;">Test Component 12</p>
                        </router-link>
        

   
<div style="" class="row justify-content-center mt-3">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link " href="#">             
                       <router-link to="/test/7"  >
                                  <p>Test Component 7</p>
                        </router-link>
       </a>
      </li>

      <li class="nav-item">
                       <router-link to="/test/9"  class="nav-link" >
                                  <p>Test Component 9</p>
                        </router-link>
      </li>

      <li class="nav-item">
        <a class="nav-link">
                        <router-link to="/" >
                                  <p >Home</p>
                        </router-link>
        </a>
      </li>


    </ul>
</div>
</div>
</template>

<script>
export default {
  name: 'button_component',
  data () {
    return {
 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

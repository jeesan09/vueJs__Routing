<template>
  <div>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
      


<table class="table  " >
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
      <tr v-for="(htval,index) in arrayData" >
      <th scope="row"> {{index}}</th>
      <td>{{htval.name}}

     
      </td>
      <td> 

           <router-link 
           class="btn btn-primary btn-sm"
           tag="button"

           :to="{name:'userDetail',params: {id: index}}">
        
           <i class="fas fa-plus"></i>
           </router-link>

           <router-link 
           class="btn btn-primary btn-sm"
           tag="button"
           :to="'/UserCrud/'+index+'/edit'" >
           <i class="far fa-edit"></i>
           </router-link>


           <router-link 
           class="btn btn-primary btn-sm"
           tag="button"
           to="" >
           <i class="far fa-trash-alt"></i>
           </router-link>


      </td>

    </tr>
    
  </tbody>
</table>


    </div>
  </div>
    
 
 
  </div>
</template>

<script>
export default {
  name: 'CrudComponent',

  data () {
    return {
       url:'',
    //   i:1,
      arrayData:[
           
         {name:'jeesan'},
         {name:'jeesa'},
         {name:'jees'},
         {name:'jee'}

      ]    
    }
  },
  methods: {
    getUrl:function(index){
      
      return "/UserCrud/"+(index+1)
    },
    getUrledit(index){
      return "/UserCrud/"+(index+1)+"/edit"

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

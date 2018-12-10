import test from './components/test.vue';
import HelloWorld from './components/HelloWorld.vue';
import ButtonComponent from './components/ButtonComponent.vue';
import CrudComponent from './components/CrudComponent.vue';
import UserDetail from './components/UserDetail.vue';
import UserEdit from './components/UserEdit.vue';
import userHolder from './components/userHolder.vue';

export const routes=[

	{path:'/hellow'    ,component:HelloWorld},
	{path:'/test/:id'  ,component:test},
	{path:'/button'    ,component:ButtonComponent},
	{path:'/crud'      ,component:CrudComponent},
	{path:'*'          , redirect:'/button'},
//
	{path:'/UserCrud'        ,component:userHolder ,  children:[
    //      {path: ''          , component:CrudComponent},
          {path: ':id'       , component:UserDetail, name: 'userDetail'},


          {path: ':id/edit'  , component:UserEdit, 
                               beforeEnter: (to,form,next)=>

						          {

										    if(true)

											    {
											       next();
											       console.log("before  Called");										       
											    }

										    else

											    {

											    }


						          }

          }
          

	]}
];






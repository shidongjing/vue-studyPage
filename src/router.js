import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/home',
      name: '112',
      // alias:'/home',//别名
      components: {
        default:Home,
        // 'academic':()=>import('./components/community/Academic.vue'),
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community.vue'),
      redirect:'/community/academic',
      meta:{
        login:false
      },
      children:[{
        path:'academic',
        component:()=>import('./components/community/Academic.vue'),
       
  //       beforeEnter(to,from,next){
  //         if( !key && to.path == "/community/components1"){
  //           if(confirm('请登陆')){
  //               // key = true;
  //               next('/login');
  //           }else{
  //               next(false)
  //           }
  //         }else{
  //           next(true)
  //         }
  // }
      },
      {
        path:'/community/components2',
        component: () => import('./components/community/components2.vue'),
      },
      {
        path:'/community/components3',
        component: () => import('./components/community/components3.vue'),
      },

      
      
    ]
    },
    {   
        path:'/question/:id',
        name:'question',
        component:() => import('./components/question.vue')
    },
    {
      path: '/learning',
      name: 'learning',
      component: () => import(/* webpackChunkName: "about" */ './views/Learning.vue')
    },
    {
      path: '/show',
      name: 'show',
      component: () => import(/* webpackChunkName: "about" */ './views/Show.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import(/* webpackChunkName: "about" */ './views/Student.vue')
    },
    {
      path:'/error',
      component:()=> import('./components/error.vue')
    },
    {
      path:'*',
      redirect(to){
        if(to.path == '/'){
          return '/home'
        }else{
          return '/error'
        }
      }
    },{
      path:'/login',
      component:()=> import('./components/login.vue')
    },
    {
      path:'/learning/remove',
      component:()=> import('./components/remove.vue'),
      
    },
    {
      path:'/neirong',
      component:()=>import('./components/remove/neirong.vue')
    }
  ]
})
// window.key = false;
// router.beforeEach((to,from,next)=>{
//      if( !key && to.path == "/community/components1"){
//        if(confirm('请登陆')){
//           // key = true;
//           next('/login');
//        }else{
//           next(false)
//        }
//      }else{
//        next(true)
//      }
// })
export default router;

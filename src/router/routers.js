
import Login from '../views/login'
import Main from '../views/main'

import UserInfo from '../views/user/user-info'
import UserList from '../views/user/user-list'

import ContentType from '../views/content/content-type'
import ContentTable from '../views/content/content-table'

import NotError from '../views/error/404'

export default [
  {
    path: '/main/:username',
    name: 'main',
    component: Main,
    props:true,
    //配置嵌套路由
    children:[
      {
        path:'/user/info/:id',
        name:'user-info',
        component:UserInfo,
        props:true
      },
      {
        path:'/user/list',
        name:'user-list',
        component:UserList,
        props:true
      },{
        path:'/content/type',
        name:'content-type',
        component:ContentType,
        props:true
      },{
        path:'/content/table',
        name:'content-table',
        component:ContentTable,
        props:true
      }
    ]
  },
  {
    //登陆页面
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/goMain/:username',
    name:'GoMain',
    redirect:'/main/:username',
    props:true
  },
  {
    path:'*',
    component:NotError
  }
]

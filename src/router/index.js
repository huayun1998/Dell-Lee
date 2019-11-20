import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pargs/home/Home'
import City from '@/pargs/city/City'
import Datali from '@/pargs/datali/Datali'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/city',
            name: 'City',
            component: City
        },
        {
            path: '/datali/:id',
            name: 'datali',
            component: Datali
        }
    ]
})
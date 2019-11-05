import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'
import About from '@/views/About.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail,
            props: true
        },
        {
            path: '/:type',
            name: 'search',
            component: Home,
            props: true
        }
    ]
})
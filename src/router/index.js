import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./_import_development')

import layout from '../views/layout/layout'
const form = () =>
	import ('@/views/form/index')
const hello = () =>
	import ('@/views/hello/HelloWorld')
const login = () =>
	import ('@/views/login/index')
const notFound = () =>
	import ('@/views/404/404')
const table = () =>
	import ('@/views/table/index')



Vue.use(Router)
export const constantRouterMap = [{
		path: '/',
		redirect: 'login',
		hidden: true,
	},
	{
		path: '/login',
		component: login,
		name: "login",
		hidden: true,
	},
	{
		path: '/notFound',
		component: notFound,
		name: "notFound",
		hidden: true,
	},
    {
		path: '/hello',
		component: layout,
        redirect: '/hello/index',
		children: [{
			path: 'index',
            name:'hello',
			component: hello,
			meta: {
				title: 'Hello',
				icon: 'edit'
			},
		}]
	},
    {
        path: '/example',
        component: layout,
        redirect: '/example/from',
        meta: {
            title: 'example',
            icon: 'menu'
        },
        children: [{
            path: 'form',
            name:'form',
            component: form,
            meta: {
                title: 'form',
                icon: 'star-on'
            },
        },{
            path: 'table',
            name:'table',
            component: table,
            meta: {
                title: 'table',
                icon: 'star-off'
            },
        }]
    }
]
export default new Router({
	mode: 'history',
	routes: constantRouterMap
})

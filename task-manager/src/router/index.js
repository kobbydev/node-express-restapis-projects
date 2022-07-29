import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import TasksView from '../views/TasksView.vue';

const routes = [
	{
		path: '/',
		name: 'login',
		component: LoginView,
		meta: {
			noAuth: true,
		},
	},
	{
		path: '/taskspage',
		name: 'taskspage',
		component: TasksView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from) => {
	let authenticated = false;
	const token = localStorage.getItem('userIsLogged');
	if (token) {
		authenticated = true;
		console.log(localStorage.getItem('userIsLogged'));
	} else {
		authenticated = false;
	}

	if (!to.meta.noAuth) {
		if (!authenticated && to.name !== 'login') {
			return { name: 'login' };
		}
	}
	// return to;
});

export default router;

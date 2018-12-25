require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import {Form, HasError, AlertError} from 'vform';
import {routes} from "./routes";

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes
});

const app = new Vue({
    el: '#app',
    router
});

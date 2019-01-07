require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import {Form, HasError, AlertError} from 'vform';
import VueProgressBar from 'vue-progressbar';
import {swal} from "./sweetalert";
import {routes} from "./routes";
import {filters} from "./filters";

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.use(VueRouter);

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
});

const router = new VueRouter({
    mode:'history',
    routes
});
window.Fire = new Vue();

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

const app = new Vue({
    el: '#app',
    router
});

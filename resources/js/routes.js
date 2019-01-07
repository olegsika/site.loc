export let routes = [
    { path:'/dashboard', component: require('./components/Dashboard.vue').default },
    { path:'/developer', component: require('./components/Developer.vue').default },
    { path:'/profile', component: require('./components/Profile.vue').default },
    { path:'/users', component: require('./components/Users.vue').default }
];
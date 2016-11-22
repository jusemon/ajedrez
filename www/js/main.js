var Vue = require('vue/dist/vue.js');
var VueResource = require('vue-resource');

Vue.use(VueResource);

var routes = {
    '/': { 'name': 'Home', 'view': require('../views/v-home.vue') },
    '/index.html': { 'name': 'Home', 'view': require('../views/v-home.vue') },
    '/about': { 'name': 'About', 'view': require('../views/v-about.vue') }
}
var vm = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            const matchingView = routes[this.currentRoute];
            return matchingView
                ? matchingView['view']
                : require('../views/v-404.vue');
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
});

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})
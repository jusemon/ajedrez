var Vue = require('vue/dist/vue.js');
var VueResource = require('vue-resource')

var VHome = require('../views/v-home.vue');
var VAbout = require('../views/v-about.vue');
var VGame = require('../views/v-game.vue');

Vue.use(VueResource);

var routes = {
    '/': { 'name': 'Home', 'view':  VHome},
    '/index.html': { 'name': 'Home', 'view': VHome },
    '/about': { 'name': 'About', 'view': VAbout},
    '/game': { 'name': 'Game', 'view': VGame}
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
});
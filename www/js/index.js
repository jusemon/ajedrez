var Vue = require('vue/dist/vue.js');
var VueResource = require('vue-resource');
Vue.use(VueResource);

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        startApp();
    },

    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },
};

function startApp() {
    var VHome = require('../views/v-home.vue');
    var VAbout = require('../views/v-about.vue');
    var VGame = require('../views/v-game.vue');
    var route = cordova.platformId != 'browser' ? cordova.file.applicationDirectory.substring(window.location.origin.length) + 'www/' : '/';
    var homeRoute = route + 'index.html', aboutRoute = route + 'about', gameRoute = route + 'game';

    var routes = {};
        routes[route] = { 'name': 'Home', 'view': VHome },
        routes[homeRoute] = { 'name': 'Home', 'view': VHome },
        routes[aboutRoute] = { 'name': 'About', 'view': VAbout },
        routes[gameRoute] = { 'name': 'Game', 'view': VGame };

    var vm = new Vue({
        el: '#app',
        data: {
            currentRoute: window.location.pathname,
            applicationDirectory: route,
            routes: makeRoutes(routes)
        },
        computed: {
            ViewComponent: function() {
                const matchingView = routes[this.currentRoute];
                return matchingView
                    ? matchingView['view']
                    : require('../views/v-404.vue');
            }
        },
        render: function(h) {
            return h(this.ViewComponent)
        }
    });
    window.addEventListener('popstate', function() {
        app.currentRoute = window.location.pathname
    });
}

function makeRoutes(routes) {
    var output = {};
    for (prop in routes) {
        output[prop] = routes[prop]['name'];
    }
    return output;
}

app.initialize();
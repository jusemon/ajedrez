var Vue = require('vue/dist/vue.js');
var VueResource = require('vue-resource');
var HeaderLayout = require('../components/header-layout.vue');
var FooterLayout = require('../components/footer-layout.vue');
var Home = require('../views/home.vue');

Vue.use(VueResource);

var vm = new Vue({
    el: '#app',
    components: {
        'header-layout': HeaderLayout,
        'main-layout': Home,
        'footer-layout': FooterLayout
    }
});
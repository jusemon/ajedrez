var Vue = require('vue/dist/vue.js');
var VueResource = require('vue-resource');
var RandomWord = require('./random-word.vue');

Vue.use(VueResource);

var vm = new Vue({
    el: '#app',
    components: {
        'random-word': RandomWord
    }
});
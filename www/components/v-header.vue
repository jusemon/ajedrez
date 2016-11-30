<template>
    <header>
        This is the HEAADEEEERRR!!!! <span>{{now}}</span>
        <ul>
            <li>
                <v-link v-for="(value, key) in uniqueRoutes" v-bind:href="key">{{value}}</v-link>                
            </li>
        </ul>
    </header>
</template>

<script>
    var VLink = require('./v-link.vue');
    export default {
        components: {
            'v-link': VLink
        },
        computed: {
            now: function () {
                return new Date().toLocaleDateString()
            },
            uniqueRoutes: function() {
                 var routes = this.$root.routes, output = {};
                 for(var key in routes){
                     var flag = true
                     for(var key0 in output){
                        if(routes[key] == output[key0]) flag = false
                     }
                    if(flag) output[key] = routes[key] 
                 }
                 return output;
            }
        }
    }
</script>
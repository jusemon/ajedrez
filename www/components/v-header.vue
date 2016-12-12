<template>
    <header>
        <nav id="header" class="nav-fixed grey darken-3">
            <div class="nav-wrapper container center-align">
                <a href="javascript:void(0)" class="brand-logo center center-align" id="logo-container">Ajedrez</a>
                <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
            </div>
        </nav>
        <ul class="side-nav fixed" id="slide-out">
            <li>
                <div class="userView">
                    <div class="background">
                        <img src="img/background.png">
                    </div>
                    <a href="#!user"><img class="circle" src="img/profile.png"></a>
                    <a href="#!name"><span class="white-text name">{{name}}</span></a>
                    <a href="#!email"><span class="white-text email">{{email}}</span></a>
                </div>
            </li>
            <li  v-for="(value, key) in uniqueRoutes" class="bold">
                <v-link v-bind:href="key">{{value}}</v-link>         
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
        data: function () {
            return {
                name: "Sebastián",
                email: "juansmm@outlook.com"
            }
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
        },
        mounted: function() {
            $('.button-collapse').sideNav({
                // menuWidth: 240, // Default is 240
                // edge: 'right', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
            });
        }
    }
</script>
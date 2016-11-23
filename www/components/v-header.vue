<template>
    <header>
        This is the HEAADEEEERRR!!!! <span>{{now}}</span>
        <ul>
            <li>
                <v-link href="/">Home</v-link>
                <v-link href="/about">About</v-link>
                <v-link href="/game">Game</v-link>
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
            now () {
                return new Date().toLocaleDateString()
            }
        },
    }
</script>
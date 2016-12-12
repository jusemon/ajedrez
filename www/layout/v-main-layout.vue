<template>
    <div>
        <v-header></v-header>
        <slot></slot>
        <v-footer></v-footer>
    </div>
</template>

<script>
    var VHeader = require('../components/v-header.vue');
    var VFooter = require('../components/v-footer.vue');
    export default {
        components:{
            'v-header': VHeader,
            'v-footer': VFooter
        }
    }
</script>
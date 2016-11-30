<template>
    <v-main-layout>
        This is the main!!!!
        <br> And Hi {{name}}
    </v-main-layout>
</template>

<script>
    var VMainLayout = require('../layout/v-main-layout.vue');
    export default {
        data: function () {
            return {
                name: "Sebastián"
            }
        },
        components:{
            'v-main-layout': VMainLayout
        }
    }
</script>
<template>
    <v-main-layout>
        <v-chessboard></v-chessboard>
    </v-main-layout>    
</template>

<script>
    var VMainLayout = require('../layout/v-main-layout.vue');
    var VChessboard = require('../components/v-chessboard.vue');
    export default {        
        components:{
            'v-main-layout': VMainLayout,
            'v-chessboard': VChessboard
        }
    }
</script>
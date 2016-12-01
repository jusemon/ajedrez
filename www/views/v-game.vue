<template>
    <v-main-layout>
        Who will win in this riveting game of <code class="js plain">You</code> vs <code class="js plain">AI Kong</code>?
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
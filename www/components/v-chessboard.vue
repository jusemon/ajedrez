<template>
    <table id="chessboard">
        <tbody>
            <tr v-for="item in items" id="chess">
                <td v-for="i in item" v-bind:class="{ black: i }">
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    methods: {
      dragDrop (event) {
        event.preventDefault()
        
      }
    },
    data () {
        return {
            items: [[0,1,0,1,0,1,0,1],
                    [1,0,1,0,1,0,1,0],
                    [0,1,0,1,0,1,0,1],
                    [1,0,1,0,1,0,1,0],
                    [0,1,0,1,0,1,0,1],
                    [1,0,1,0,1,0,1,0],
                    [0,1,0,1,0,1,0,1],
                    [1,0,1,0,1,0,1,0]]
        }
    }
  }
</script>

<style scoped>
    #chessboard {
        width: 500px;
        height: 500px;
        border-collapse:collapse; 
        border: none;
    }
    
    #chessboard tbody {        
    }
    
    #chessboard .black {
        background-color: black;
    }
    
    #chessboard td {
        padding: 0px;
        border: 1px solid black;
    }
</style>
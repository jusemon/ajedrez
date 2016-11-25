<template>
    <div>
        <button @click="init">
            Nuevo juego
        </button>
        <div id="board" style="width: 400px"></div>
    </div>
</template>

<script>
export default {
    methods: {
      init (event) {
        event.preventDefault()
        var Chess = require('chess.js').Chess;
        var ChessBoard = require('./../js/chessboard.js');

        var ChessAI = require('chess-ai-kong');
        ChessAI.setOptions({
            depth: 4,
            monitor: true,
            strategy: 'basic',
            timeout: 10000
        });
        var game = new Chess();
        var makeMove = function() {
            var possibleMoves = game.moves();
                if (game.game_over() === true || game.in_draw() === true || possibleMoves.length === 0) return;                                
                //game.move();
            // board.position(game.fen());
            // window.setTimeout(makeRandomMove, 500);
        }
        var board = ChessBoard('board', 'start');
        console.log("board", board);
        console.log("game", game);
        console.log("AI", ChessAI);
        console.log(ChessAI.playPosition(game.fen()));
        //window.setTimeout(makeRandomMove, 500);
      }
    }
  }  
</script>

<style scoped>
    #chessboard {
        width: 500px;
        height: 500px;
    }
</style>
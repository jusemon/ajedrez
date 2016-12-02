<template>
    <div>
        <button @click="init">
            Nuevo juego
        </button>
        <div id="board"></div>
    </div>
</template>

<script>
export default {
    methods: {
      init: function (event) {
        event.preventDefault();
        var ChessBoard = require('./../js/chessboard.js');
        var ChessRules = require('chess-rules');
        var ChessAI = require('chess-ai-kong');
        var ChessHelper = require('./../js/helper.js');
        var pos = ChessRules.getInitialPosition();

        ChessAI.setOptions({
            depth: 4,
            monitor: true,
            strategy: 'basic',
            timeout: 10000
        });
        
        var onDragStart = function(source, piece, position, orientation) {            
            if (ChessRules.getGameStatus(pos) !== 'OPEN' ||
                (pos.turn === 'W' && piece.search(/^b/) !== -1) ||
                (pos.turn === 'B' && piece.search(/^w/) !== -1)) {
                    return false;
                }
        };

        var onDrop = function(source, target) {
            var move = ChessHelper.toMove(source, target);
            var availablesMoves = ChessRules.getAvailableMoves(pos);
            if(ChessHelper.isAvailableMove(move, availablesMoves)){
                pos = ChessRules.applyMove(pos, move);   
            }
            else{
                return 'snapback';
            }
            // Aqui para que la IA maneje los negros
            // if(pos.turn == 'B'){
            //     setTimeout(function(){
            //         move = ChessAI.playPosition(pos);
            //         pos = ChessRules.applyMove(pos, ChessRules.pgnToMove(pos, move));
            //         onSnapEnd();
            //     }, 100)            
            // }
        };

        var onSnapEnd = function() {            
            board.position(ChessHelper.toPartialFen(pos));
        };
        
        var cfg = {
            draggable: true,
            position: 'start',
            onDragStart: onDragStart,
            onDrop: onDrop,
            onSnapEnd: onSnapEnd
        };

        var board = ChessBoard('board', cfg);
      }
    }
  }  
</script>

<style scoped>

</style>
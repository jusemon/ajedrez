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
            // see if the move is legal
            var move = ChessHelper.toMove(source, target);
            var availablesMoves = ChessRules.getAvailableMoves(pos);
            if(ChessHelper.availableMove(move, availablesMoves)){
                pos = ChessRules.applyMove(pos, move);
            }
            else{
                return 'snapback';
            }
            
            console.log(pos.turn);

            // var move = game.move({
            //     from: source,
            //     to: target,
            //     promotion: 'q' // NOTE: always promote to a queen for example simplicity
            // });

            // illegal move

            // if (move === null) return 'snapback';            
            // updateStatus();
        };

        // for castling, en passant, pawn promotion
        var onSnapEnd = function() {
            console.log(pos);
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

        // console.log("board", board);        
        // console.log("AI", ChessAI);
      },
      getPosition(){
          return pos;
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
/* 
* @Author: Andrew Judd
* @Date:   2014-02-17 21:07:24
* @Last Modified by:   Andrew Judd
* @Last Modified time: 2014-02-18 20:52:06
*/

// Build the namespace
var game = {}

game.easel = function(options) {

    var stage = null;

    var board = null;

    var initialize = function() {
        this.stage = new createjs.Stage(options.target);

        // Add the board to the canvas
        this.stage.addChild(this.board = new createjs.Container());
        
        this.board.width = this.stage.canvas.width * 0.6;
        this.board.height = this.stage.canvas.height * 0.9;

        this.board.setBounds(0, 0, this.board.width, this.board.height);

        // Draw the board
        drawBoard();

        // Draw the clickable panels
        drawPanels();

        this.stage.update();
    };

    var drawBoard = function() {
        var bar = new createjs.Shape();
        bar.graphics.beginFill("#000000").drawRect(0, 0, this.board.width, 1);
        bar.x = 5;
        bar.y = this.board.height / 3 + 3;
        this.board.addChild(bar);

        bar = new createjs.Shape();
        bar.graphics.beginFill("#000000").drawRect(0, 0, this.board.width, 1);
        bar.x = 5;
        bar.y = (this.board.height / 3) * 2 + 2;
        this.board.addChild(bar);

        bar = new createjs.Shape();
        bar.graphics.beginFill("#000000").drawRect(0, 0, 2, this.board.height);
        bar.y = 5;
        bar.x = (this.board.width / 3) + 4;
        this.board.addChild(bar);

        bar = new createjs.Shape();
        bar.graphics.beginFill("#000000").drawRect(0, 0, 2, this.board.height);
        bar.y = 5;
        bar.x = (this.board.width / 3 ) * 2 + 6;
        this.board.addChild(bar);
    };

    var drawPanels = function() {
        var tileWidth = ( this.board.width - 10 ) / 3;
        var tileHeight = ( this.board.height - 20 )/ 3;

        for(x = 0; x < 3; ++x)
        {
            for(y = 0; y < 3; ++y)
            {
                var square = new createjs.Shape();
                square.graphics.drawRect(1, 0, tileWidth - 1, tileHeight - 1);

                square.x = x * ( 5 + tileWidth ) + 6;
                square.y = y * ( 5 + tileHeight ) + 8;

                // Add in the panel location information
                square.xPosition = x;
                square.yPosition = y;

                // Add the click event
                square.on('click', panelClick);

                this.board.addChild(square);             
            }
        }
    };

    var panelClick = function(event) {
        console.log('here');
        console.log(event.target);
        alert('here');
    };

    // Call the intiialize function
    initialize();

    return {

    };
};

$(document).ready(function(){
    // Setup the stage
    var stage = new game.easel({
        target: 'game-canvas'
    });


});
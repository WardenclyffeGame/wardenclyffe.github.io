//look familiar?
var steamGame = steamGame || {};

steamGame.Boot = function(){};

steamGame.Boot.prototype = {
    preload: function() {

        //preload the loading screen stuff for the actual preload state later
        this.load.atlasJSONHash('logo', 'sprites/load/logo.png', 'sprites/load/logo.json');
        this.load.image('preloadbarF', 'sprites/load/preloadbar.png');
        this.load.image('preloadbarB', 'sprites/load/preloadbarback.png');
    },
    create: function() {

        //loading screen background (I chose a very very dark blue)
        this.game.stage.backgroundColor = '#02052b';

        //define a minimum and maximum dimension set so no matter what screen it's never weirdly stretched
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 240;
        this.scale.minHeight = 170;
        this.scale.maxWidth = 2880;
        this.scale.maxHeight = 1920;

        //center the game horizontally
        this.scale.pageAlignHorizontally = true;

        //set the game size automatically within the bounds from earlier
        this.scale.refresh(true);

        //phaser has 3 physics engines available to us
        //arcade, impact, and matter.js
        //we'll be starting with arcade while we figure out the actually code to create the window and basic movement,
        //then I'll probably switch us over to impact because of its advanced tile support
        //we won't go to matter however, 
        //matter is the vector graphics, particle system, springs and constraints answer to wed development
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //move to next state
        this.state.start('Preload');
    }
};
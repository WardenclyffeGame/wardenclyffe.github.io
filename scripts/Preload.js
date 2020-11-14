var steamGame = steamGame || {};

steamGame.Preload = function() {};

steamGame.Preload.prototype = {
    preload: function() {
        //create preload bar and logo
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 48, 'logo');
        this.splash.anchor.setTo(0.5);
        this.splash.animations.add('spin');
        this.splash.animations.play('spin', 7, true);

        this.preloadBar = this.add.sprite(this.game.world.centerX - 10, this.game.world.centerY + 128, 'preloadbarB');
        this.preloadBar.anchor.setTo(0.5);

        this.preloadBarF = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbarF');
        this.preloadBarF.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar, 0);

        //load actual sprites and spritesheets (placeholder stock images for now)
        this.load.atlasJSONHash('menuBlimp', 'sprites/images/blimp.png', 'sprites/images/blimp.json');
            this.load.atlasJSONHash('menuBall1', 'sprites/images/hotairballoon.png', 'sprites/images/hotairballoon.json');
        this.load.atlasJSONHash('title', 'sprites/load/Title.png', 'sprites/load/Title.json');
            this.load.atlasJSONHash('menuBall2', 'sprites/images/hotairballoon2.png', 'sprites/images/hotairballoon2.json');
        this.load.atlasJSONHash('clouds', 'sprites/images/clouds.png', 'sprites/images/clouds.json');
            this.load.image('plaque', 'maps/menuMapping.png');
        this.load.atlasJSONHash('menuBG', 'sprites/images/titleWarden.png', 'sprites/images/titleWarden.json');
            this.load.image('menuBG2', 'sprites/images/title2.png');
        this.load.bitmapFont('pixelFont', 'sprites/pixelFont.png', 'sprites/pixelFont.fnt');
            this.load.atlasJSONHash('menuPointer', 'sprites/images/menuPointer.png', 'sprites/images/menuPointer.json');
        this.load.atlasJSONHash('protest', 'sprites/game/testingProtag.png', 'sprites/game/testingProtag.json');
            this.load.image('debugTiles', 'sprites/game/testTiles.png');
        this.load.tilemap('debugMap', 'maps/debugMap.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.atlasJSONHash('heart', 'sprites/game/heart.png', 'sprites/game/heart.json');
        this.load.atlasJSONHash('steamMeter', 'sprites/game/steamMeter.png', 'sprites/game/steamMeter.json');
            this.load.atlasJSONHash('elecMeter', 'sprites/game/ElectricMeter.png', 'sprites/game/ElectricMeter.json');
        this.load.atlasJSONHash('ticker', 'sprites/game/ticker.png', 'sprites/game/ticker.json');
        this.load.image('frame', 'sprites/game/frame.png');
    },
    create: function() {
        this.state.start('MainMenu');
    } 
}; 

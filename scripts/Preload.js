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
        //this.load.atlasJSONHash('protest', 'sprites/game/testingProtag.png', 'sprites/game/testingProtag.json');
            this.load.atlasJSONHash('debugTiles', 'sprites/game/testTiles.png', 'sprites/game/jsonKeys/testTiles.json');
        this.load.tilemap('debugMap', 'maps/debugMap.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.atlasJSONHash('heart', 'sprites/game/heart.png', 'sprites/game/jsonKeys/heart.json');
        this.load.atlasJSONHash('steamMeter', 'sprites/game/steamMeter.png', 'sprites/game/jsonKeys/steamMeter.json');
            this.load.atlasJSONHash('elecMeter', 'sprites/game/ElectricMeter.png', 'sprites/game/jsonKeys/ElectricMeter.json');
        this.load.atlasJSONHash('ticker', 'sprites/game/ticker.png', 'sprites/game/jsonKeys/ticker.json');
            this.load.image('frame', 'sprites/game/frame.png');
        this.load.atlasJSONHash('milutin', 'sprites/game/milutinSheet.png', 'sprites/game/jsonKeys/milutinSheet.json');
            this.load.image('KronaL', 'sprites/game/kronaLogo.png');
        this.load.image('KronaG', 'sprites/game/kronaG.png');
        this.load.image('KronaS', 'sprites/game/kronaS.png');
        this.load.image('KronaZ', 'sprites/game/kronaZ.png');
            this.load.atlasJSONHash('Bomb', 'sprites/game/Bomb.png', 'sprites/game/jsonKeys/Bomb.json');
        this.load.image('abilityBack', 'sprites/game/abilityMenu.png');
            this.load.atlasJSONHash('Boots', 'sprites/game/Boots.png', 'sprites/game/jsonKeys/Boots.json');
        this.load.atlasJSONHash('Hook', 'sprites/game/Hook.png', 'sprites/game/jsonKeys/Hook.json');
            this.load.atlasJSONHash('LightRod', 'sprites/game/lightRod.png', 'sprites/game/jsonKeys/lightRod.json');
        this.load.atlasJSONHash('Winan', 'sprites/game/winan.png', 'sprites/game/jsonKeys/winan.json');
            this.load.atlasJSONHash('SteamShield', 'sprites/game/steamShield.png', 'sprites/game/jsonKeys/steamShield.json');
        this.load.atlasJSONHash('Boomerang', 'sprites/game/Boomerang.png', 'sprites/game/jsonKeys/Boomerang.json');
            this.load.atlasJSONHash('GreekFire', 'sprites/game/GreekFire.png', 'sprites/game/jsonKeys/GreekFire.json');
        this.load.atlasJSONHash('ExoArm', 'sprites/game/ExoArm.png', 'sprites/game/jsonKeys/ExoArm.json');
            this.load.atlasJSONHash('menuSword', 'sprites/game/Sword.png', 'sprites/game/jsonKeys/Sword.json');
        this.load.image('mapOverworld', 'maps/worldMapBack.png');
            this.load.image('selector', 'sprites/game/selector.png');
        this.load.image('Council', 'sprites/game/Council.png');
            this.load.atlasJSONHash('milutinHead', 'sprites/game/milutinHead.png', 'sprites/game/jsonKeys/milutinHead.json');
        this.load.atlasJSONHash('StunBaton', 'sprites/game/StunBaton.png', 'sprites/game/jsonKeys/StunBaton.json');
    },
    create: function() {
        this.state.start('MainMenu');
    } 
}; 

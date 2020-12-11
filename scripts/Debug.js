var steamGame = steamGame || {}

steamGame.Game = function(){}

steamGame.Game.prototype = {
    /////////////////////////////////////////////DEFAULT PHASER FUNCTIONS///////////////////////////////////////////////////////
    create: function(){
        //begin scene setup
        this.game.stage.backgroundColor = '#7D7D7D';
        this.scalingFactor = (this.game.world.width / 19) / 32;
        this.map = this.game.add.tilemap('debugMap');
        this.map.addTilesetImage('DebugTiles', 'debugTiles');
        this.water = this.map.createLayer('water');
        this.water.setScale(this.scalingFactor);
        this.wall = this.map.createLayer('wall');
        this.wall.setScale(this.scalingFactor);
        this.wall.hit = false;
        this.game.physics.arcade.enable(this.wall);
        this.floor = this.map.createLayer('floor');
        this.floor.setScale(this.scalingFactor);
        this.decWall = this.map.createLayer('wall1');
        this.decWall.setScale(this.scalingFactor);
        this.decFloor = this.map.createLayer('floor1');
        this.decFloor.setScale(this.scalingFactor);
        
        //this.wall.debug = true;
        this.map.setCollisionBetween(4, 25, true, 'wall');
        this.water.resizeWorld();
 
        
        ///////////////////////////////////testing objects//////////////////////////////////////////
        this.dummyCreate(this);

        this.ESign = this.game.add.sprite(this.game.world.centerX + (600 * this.scalingFactor), this.game.world.centerY - (400 * this.scalingFactor), 'signSheets');
        this.game.physics.arcade.enable(this.ESign);
        this.ESign.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ESign.frame = 1;
        this.ESign.body.immovable = true;

        this.CSign = this.game.add.sprite(this.game.world.centerX + (300 * this.scalingFactor), this.game.world.centerY - (400 * this.scalingFactor), 'signSheets');
        this.game.physics.arcade.enable(this.CSign);
        this.CSign.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.CSign.frame = 0;
        this.CSign.value = 10;
        this.CSign.body.immovable = true;

        this.SSign = this.game.add.sprite(this.game.world.centerX + (400 * this.scalingFactor), this.game.world.centerY - (400 * this.scalingFactor), 'signSheets');
        this.game.physics.arcade.enable(this.SSign);
        this.SSign.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.SSign.frame = 2;
        this.SSign.body.immovable = true;

        this.HPSign = this.game.add.sprite(this.game.world.centerX + (500 * this.scalingFactor), this.game.world.centerY - (400 * this.scalingFactor), 'signSheets');
        this.game.physics.arcade.enable(this.HPSign);
        this.HPSign.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.HPSign.frame = 3;
        this.HPSign.body.immovable = true;

        this.kronaTestG = this.game.add.sprite(this.game.world.centerX - (this.game.camera.width), this.game.world.centerY, 'KronaG');
        this.game.physics.arcade.enable(this.kronaTestG);
        this.kronaTestG.value = 60;
        this.kronaTestG.scale.setTo(this.scalingFactor * 1.1, this.scalingFactor * 1.1);
        this.kronaTestG.lightRadius = this.scalingFactor * 16;
        this.kronaTestG.lightColor = '#f5e022';

        this.kronaTestS = this.game.add.sprite(this.game.world.centerX - (this.game.camera.width - 70), this.game.world.centerY, 'KronaS');
        this.game.physics.arcade.enable(this.kronaTestS);
        this.kronaTestS.value = 36;
        this.kronaTestS.scale.setTo(this.scalingFactor * 1.1, this.scalingFactor * 1.1);
        this.kronaTestS.lightRadius = this.scalingFactor * 16;
        this.kronaTestS.lightColor = '#e8e8e8';

        this.kronaTestZ = this.game.add.sprite(this.game.world.centerX - (this.game.camera.width - 140), this.game.world.centerY, 'KronaZ');
        this.game.physics.arcade.enable(this.kronaTestZ);
        this.kronaTestZ.value = 12;
        this.kronaTestZ.scale.setTo(this.scalingFactor * 1.1, this.scalingFactor * 1.1);
        this.kronaTestZ.lightRadius = this.scalingFactor * 16;
        this.kronaTestZ.lightColor = '#bf961b';

        this.HPPotTest = this.game.add.sprite(this.game.world.centerX - (this.scalingFactor * 14.5 * 32), this.game.world.centerY - (this.scalingFactor * 7 * 32), 'HPPot');
        this.game.physics.arcade.enable(this.HPPotTest);
        this.HPPotTest.scale.setTo(this.scalingFactor * 0.4, this.scalingFactor * 0.4);

        this.coalTest = this.game.add.sprite(this.game.world.centerX - (this.scalingFactor * 12.5 * 32), this.game.world.centerY - (this.scalingFactor * 7 * 32), 'coal');
        this.game.physics.arcade.enable(this.coalTest);
        this.coalTest.scale.setTo(this.scalingFactor * 0.55, this.scalingFactor * 0.55);

        this.battTest = this.game.add.sprite(this.game.world.centerX - (this.scalingFactor * 10.5 * 32), this.game.world.centerY - (this.scalingFactor * 7 * 32), 'battery');
        this.game.physics.arcade.enable(this.battTest);
        this.battTest.scale.setTo(this.scalingFactor * 0.55, this.scalingFactor * 0.55);


        this.defaultCreate(this);
        

    },
    update: function(){
        /***************************************** Collision handler for player vs. layers and debug text ***************************************************************/
        if (this.fade.alpha == 1 && this.intro == null) {
            this.game.add.tween(this.fade).to({alpha: 0}, 500, null, true);
            this.intro = true;
        }
        if (debugKey.isDown) {
            this.debugText = this.debugText || {};
            //this.playerData1_2 = window.localStorage.getItem('playerData');
            //this.playerData2 = JSON.parse(this.playerData1_2);
            //this.debugText.HP = this.game.debug.text('Save Data: ' + this.playerData1_2, this.game.world.centerX - 1900, this.game.camera.height - 150, null, 'rgb(0, 0, 0)');
            this.debugText.HP = this.game.debug.text('q: ' + abilityKey.duration, this.game.camera.width - 150, this.game.camera.height - 150, null, 'rgb(0, 0, 0)');
            //this.game.debug.text('direction: ' + this.direction, this.game.camera.width - 150, this.game.camera.height - 150, null, 'rgb(0, 0, 0)');
            //this.debugText.HPC = this.game.debug.text('Health collision timer: ' + this.player.timer, this.game.world.centerX - 150, this.game.camera.height - 135, null, 'rgb(0, 0, 0)');
            //this.debugText.HPC = this.game.debug.text('active data: ' + this.player.curAbil, this.game.world.centerX - 900, this.game.camera.height - 135, null, 'rgb(0, 0, 0)');
            //this.debugText.SL = this.game.debug.text('True steam level: ' + this.player.currentSteam, this.game.world.centerX - 150, this.game.camera.height - 120, null, 'rgb(0, 0, 0)');
            this.game.debug.text('true TOD: ' + this.trueTOD, this.game.camera.width - 250, this.game.camera.height - 120, null, 'rgb(0, 0, 0)');
            //this.debugText.SC = this.game.debug.text('Steam counter timer:' + this.player.newSLevel, this.game.world.centerX - 150, this.game.camera.height - 105, null, 'rgb(0, 0, 0)');
            //this.debugText.MS = this.game.debug.text('menu state:' + this.menuState, this.game.world.centerX - 150, this.game.camera.height - 105, null, 'rgb(0, 0, 0)');
            //this.debugText.MS = this.game.debug.text('mapPos:' + (this.ASGroup.curPos + 1), this.game.world.centerX - 150, this.game.camera.height - 105, null, 'rgb(0, 0, 0)');
            //this.debugText.TC = this.game.debug.text('curAbil:' + this.ASGroup.curAbil, this.game.camera.width - 150, this.game.camera.height - 105, null, 'rgb(0, 0, 0)');
            this.game.debug.text('player bottom:' + this.player.bottom, this.game.camera.width - 250, this.game.camera.height - 105, null, 'rgb(0, 0, 0)');
            this.debugText.EL = this.game.debug.text('True energy: ' + this.player.currentEnergy, this.game.world.centerX - 150, this.game.camera.height - 90, null, 'rgb(0, 0, 0)');
            this.debugText.K = this.game.debug.text('Currency: ' + (this.player.currency + 10), this.game.world.centerX - 150, this.game.camera.height - 75, null, 'rgb(0, 0, 0)');
            this.debugText.KC = this.game.debug.text('Currency change: ' + (this.player.newC + 10), this.game.world.centerX - 150, this.game.camera.height - 60, null, 'rgb(0, 0, 0)');
            this.debugText.DIR = this.game.debug.text('Active direction: ' + this.direction, this.game.world.centerX - 150, this.game.camera.height - 45, null, 'rgb(0, 0, 0)');

            //this.debugText.PLYR = this.game.debug.body(this.player);
            //this.debugText.PLYRS = this.game.debug.body(this.player.swipe);
            //this.debugText.DB = this.game.debug.body(this.dummy);
            this.game.debug.body(this.dummy.post);
            this.bombWeapon.bullets.forEach((b) => {
                this.game.debug.body(b);
            });
            //this.game.debug.body(this.HPPotTest);
            
            if (rightArrow.isDown) {
                this.trueTOD ++;
            }
            if (leftArrow.isDown) {
                this.trueTOD --;
            }
        }
        /*if (debugKey.isUp) {
            this.debugText.destroy();
        }*/
        this.collisionHandler(this);
        this.updateShadows(this);
        this.dayCycle(this);

        if (this.menuState == 'none') {
            this.playerHPManager(this);
            
            this.playerMeterManager(this);
            

            /***************************************** Player Movement Handling ******************************************************************************************/
            this.playerKnockbackHandler(this);
            
            this.playerMovement(this);

            if(this.player.state == "walk") {
                this.playerUseAbil(this);
            }
            if (this.dummy.bottom > this.player.bottom) {
                this.dummy.moveUp();
            } else if (this.dummy.bottom < this.player.bottom) {
                this.dummy.moveDown();
            }

            this.playerAnimation(this);
            
            this.playerAttack(this);

            this.menuPosResets(this);
            //////////////////////////////vvvvv ALL UNFINISHED CODE BETWEEN THESE BARS vvvvv/////////////////////////////////////////////////////////////////////////////////////
            
            //////////////////////////////^^^^^ ALL UNFINISHED CODE BETWEEN THESE BARS ^^^^^/////////////////////////////////////////////////////////////////////////////////////
        }
        if (this.menuState == 'ability') {
            this.mapAway(this);

            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            this.player.swipe.body.velocity.x = 0;
            this.player.swipe.body.velocity.y = 0;
            this.game.time.events.remove(this.idleTimer1);
            if (this.animationName != "seated") {
                this.animationName = "stopped";
            }

            this.abilShow(this);
            
            this.ASManager(this);

            this.playerAnimation(this);
        }
        if (this.menuState == 'map') {
            this.abilAway(this);

            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            this.player.swipe.body.velocity.x = 0;
            this.player.swipe.body.velocity.y = 0;
            this.game.time.events.remove(this.idleTimer1);
            if (this.animationName != "seated") {
                this.animationName = "stopped";
            }
            
            this.mapShow(this);

            this.playerAnimation(this);
        }
        if (this.menuState == 'pause') {
            this.mapAway(this);
            this.abilAway(this);

            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            this.player.swipe.body.velocity.x = 0;
            this.player.swipe.body.velocity.y = 0;
            this.game.time.events.remove(this.idleTimer1);
            if (this.animationName != "seated") {
                this.animationName = "stopped";
            }
            
            this.pauseShow(this);

            this.pauseManager(this);

            this.playerAnimation(this);
        }
        this.tickerHandler(this);
        
    },
    /////////////////////////////////////////////STANDARD CREATE FUNCTIONS//////////////////////////////////////////////////////
    defaultCreate: function() {
        /******************************KEY DECLARATIONS***********************************/
        //movement 
        upKey = this.game.input.keyboard.addKey(87) //w
        upArrow = this.game.input.keyboard.addKey(38); // ^
        leftKey = this.game.input.keyboard.addKey(65) //a
        leftArrow = this.game.input.keyboard.addKey(37); // <-
        downKey = this.game.input.keyboard.addKey(83) //s
        downArrow = this.game.input.keyboard.addKey(40); // v
        rightKey = this.game.input.keyboard.addKey(68) //d
        rightArrow = this.game.input.keyboard.addKey(39); // ->
        //other interactivity
        spaceKey = this.game.input.keyboard.addKey(32); //space for swipe
        selectKey = this.game.input.keyboard.addKey(27) //escape
        interactKey = this.game.input.keyboard.addKey(69) // e interact
        abilityKey = this.game.input.keyboard.addKey(81) // q ability
        abilityScreenKey = this.game.input.keyboard.addKey(9); // tab ability screen
        dashKey = this.game.input.keyboard.addKey(16); // shift dash
        enterKey = this.game.input.keyboard.addKey(13); // enter
        mapKey = this.game.input.keyboard.addKey(77) // m map

        debugKey = this.game.input.keyboard.addKey(48); // 0

        abilityScreenKey.onDown.add(this.abilityTrans, this);
        mapKey.onDown.add(this.mapTrans, this);
        selectKey.onDown.add(this.pause, this);

        this.game.input.keyboard.addKeyCapture(9);
        this.game.input.keyboard.addKeyCapture(27);

        /*************************************SINGLE MOST VITAL PIECE: THE PLAYER************************************************/
        //player declaration
        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + (this.scalingFactor * 32), 'milutin');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.swipe = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY);
        this.player.scale.setTo(this.scalingFactor * 2, this.scalingFactor * 2);
        this.player.animations.add('idleDown', [39, 39, 39, 39, 39, 40, 40, 40, 41, 41, 41, 39], 12, true);
        this.player.animations.add('idleLeft', [42, 42, 42, 42, 42, 43, 43, 43, 44, 44, 44, 42], 12, true);
        this.player.animations.add('idleRight', [42, 42, 42, 42, 42, 43, 43, 43, 44, 44, 44, 42], 12, true);
        this.player.animations.add('idleUp', [36, 36, 36, 36, 36, 37, 37, 37, 38, 38, 38, 36], 12, true);
        this.player.animations.add('runDown', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 12, true);
        this.player.animations.add('runLeft', [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 12, true);
        this.player.animations.add('runUp', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 12, true);
        this.player.animations.add('runRight', [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 12, true);
        this.player.animations.add('swipeUp', [45, 46, 47, 48], 12, true);
        this.player.animations.add('swipeDown', [49, 50, 51, 52], 12, true);
        this.player.animations.add('swipeSide', [53, 54, 55, 56], 12, true);
        this.player.animations.add('swipeUp2', [57, 58, 59, 60], 12, true);
        this.player.animations.add('swipeDown2', [61, 62, 63, 64], 12, true);
        this.player.animations.add('swipeSide2', [65, 66, 67, 68], 12, true);
        this.player.animations.add('swipeUp3', [69, 70, 71, 72], 12, true);
        this.player.animations.add('swipeDown3', [73, 74, 75, 76], 12, true);
        this.player.animations.add('swipeSide3', [77, 78, 79, 80], 12, true);
        this.player.animations.add('sit', [42, 84, 85, 86, 87, 88, 89, 90], 12, false);
        this.player.animations.add('seated', [90, 90, 90, 90, 90, 91, 91, 91, 92, 92, 92, 92, 90], 4, true);
        this.player.animations.add('stand', [90, 89, 88, 87, 86, 85, 84, 42], 12, false);
        this.player.animations.add('trip', [93, 94, 95, 96, 97, 98, 98, 98, 98, 98, 98, 100, 100, 100, 101, 101, 102, 103], 12, false);
        this.player.animations.add('winanSide', [104, 105, 106, 107], 12, false);
        this.player.animations.add('winanUp', [108, 109, 110, 111], 12, false);
        this.player.animations.add('winanDown', [112, 113, 114, 115], 12, false);
        this.player.animations.add('winanSide2', [106, 106, 106, 106, 106, 106, 106, 107], 12, true);
        this.player.animations.add('winanUp2', [110, 110, 110, 110, 110, 110, 110, 111], 12, true);
        this.player.animations.add('winanDown2', [114, 114, 114, 114, 114, 114, 114, 115], 12, true);
        this.player.animations.add('dashSide', [116, 117, 118, 119, 120, 121], 12, false);
        this.player.animations.add('dashUp', [122, 123, 124, 125, 126, 127], 12, false);
        this.player.animations.add('dashDown', [128, 129, 130, 131, 132, 133], 12, false);
        this.game.physics.arcade.enable(this.player);
        this.player.body.enbable = true;
        this.player.speed = (this.scalingFactor * 320) / 3.2;
        this.player.body.setSize(12, 22, 10, 10);
        this.player.body.collideWorldBounds = true;
        this.game.camera.follow(this.player, 1);

        this.game.physics.arcade.enable(this.player.swipe);
        this.player.swipe.x = this.player.body.x - (this.player.body.width * 0.25);
        this.player.swipe.y = this.player.body.y + this.player.body.height;
        this.player.swipe.anchor.setTo(0.35, 1.1);
        this.player.swipe.width = this.player.body.width * 1.5;
        this.player.swipe.height = 42 * this.scalingFactor;
        this.player.swipe.debug = true;
        
        this.player.lightColor = "#ffffff";

        this.player.shadowTexture = this.game.add.bitmapData(this.game.width * 1.2, this.game.height * 1.2);
        this.player.lightRadius = this.scalingFactor * 32 * 3;

        this.player.lightSprite = this.game.add.image(this.game.camera.x, this.game.camera.y, this.player.shadowTexture);
        this.player.lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

        this.player.worldTintReference = this.game.add.sprite(0, 0, '');
        this.colorBlend = {step: 0};
        this.sunSet = this.game.add.tween(this.colorBlend).to({step: 100}, 10000, Phaser.Easing.Default, false)
            .onUpdateCallback(() => {
                this.player.worldTintReference.tint = Phaser.Color.interpolateColor(0xffffff, 0xD9B338, 100, this.colorBlend.step, 1);
            })
        this.nightFall = this.game.add.tween(this.colorBlend).to({step: 100}, 10000, Phaser.Easing.Default, false)
            .onUpdateCallback(() => {
                this.player.worldTintReference.tint = Phaser.Color.interpolateColor(0xD9B338, 0x242969, 100, this.colorBlend.step, 1);
            })
        this.sunRise = this.game.add.tween(this.colorBlend).to({step: 100}, 10000, Phaser.Easing.Default, false)
            .onUpdateCallback(() => {
                this.player.worldTintReference.tint = Phaser.Color.interpolateColor(0x242969, 0xD9B338, 100, this.colorBlend.step, 1);
            })
        this.dayBreak = this.game.add.tween(this.colorBlend).to({step: 100}, 10000, Phaser.Easing.Default, false)
            .onUpdateCallback(() => {
                this.player.worldTintReference.tint = Phaser.Color.interpolateColor(0xD9B338, 0xffffff, 100, this.colorBlend.step, 1);
            })

        
        /****************ALSO VITAL: SAVE STATE INFORMATION / PLAYER DATA********************/
        //player object stuff declaration
        this.player.maxHP = this.playerData.maxHP || 6;
        this.player.currentHP = this.playerData.currentHP || this.player.maxHP;
        if (this.playerData.currentHP == 0) {
            this.player.currentHP = 0;
        }
        this.player.maxSteam = this.playerData.maxSteam || 100;
        this.player.currentSteam = this.playerData.currentSteam || this.player.maxSteam;
        this.player.maxEnergy = this.playerData.maxEnergy || 50;
        this.player.currentEnergy = this.playerData.currentEnergy || this.player.maxEnergy;
        this.player.currency = 0;
        this.player.currencyData = {};
        this.player.newC = this.playerData.newC || 0;
        //ability declarations
        this.player.hasBomb = this.playerData.hasBomb || 0;
        this.player.bombCount = this.playerData.bombCount || 0;
        this.player.hasBoots = this.playerData.hasBoots || 0;
        this.player.hasExoArm = this.playerData.hasExoArm || 0;
        this.player.hasTaserSword = this.playerData.hasTaserSword || 0;
        this.player.hasWinan = this.playerData.hasWinan || 0;
        this.player.hasHook = this.playerData.hasHook || 0;
        this.player.hasSteamShield = this.playerData.hasSteamShield || 0;
        this.player.hasLightRod = this.playerData.hasLightRod || 0;
        this.player.hasBoomerang = this.playerData.hasBoomerang || 0;
        this.player.hasGreekFire = this.playerData.hasGreekFire || 0;
        this.player.hasStunBaton = this.playerData.hasStunBaton || 0;
        this.player.hasHammer = this.playerData.hasHammer || 0;
        this.player.hasTurbine = this.playerData.hasTurbine || 0;
        this.player.hasDefib = this.playerData.hasDefib || 0;
        this.player.hasJar = this.playerData.hasJar || 0;
        this.player.curAbil = this.playerData.curAbil || null;

        this.player.TOD = this.playerData.TOD || 300;
        this.trueTOD = this.player.TOD;

        this.player.timer = 75;
        this.player.newSLevel = 0;
        this.player.newELevel = 0;
        this.player.state = 'walk';
        this.player.combo = 0;
        this.idling = false;
        this.tripCount = 0;
        this.usingAbil = "none";

        this.debugText = {};

        //menustate declarations
        this.menuState = 'none';

        this.winanWeapon = this.add.weapon(20, 'steamBullet');
        this.winanWeapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.winanWeapon.bulletAngleOffset = 180;
        this.winanWeapon.bulletSpeed = this.player.speed * 0.025;
        this.winanWeapon.addBulletAnimation('spin', [0, 1, 2, 3], 12, true);
        this.winanWeapon.bullets.forEach((b) => {
            b.scale.setTo(this.scalingFactor * 1.5, this.scalingFactor * 1.5);
            b.body.updateBounds();
            b.lightRadius = this.scalingFactor * 32;
            b.lightColor = "#ebfcfb";
            b.debug = true;
        }, this);
        this.winanWeapon.bullets.lightRadius = this.scalingFactor * 32;
        this.winanWeapon.trackSprite(this.player, (this.player.width / 32) * -3, (this.player.width / 32) * 7);

        this.bombWeapon = this.add.weapon(20, 'Bomb');
        this.bombWeapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
        this.bombWeapon.bulletLifespan = Phaser.Timer.SECOND * 3;
        
        this.bombWeapon.bulletAngleOffset = 90;
        this.bombWeapon.bulletSpeed = 0;
        this.bombWeapon.addBulletAnimation('spin', [0, 1], 2, true);
        this.bombWeapon.bullets.forEach((b) => {
            b.scale.setTo(this.scalingFactor * 0.75);
            b.body.updateBounds();
            b.lightRadius = this.scalingFactor * 16;
            b.lightColor = "#ffcba13f";
            b.debug = true;
            //b.events.onKilled.add(function () {}, this);
        }, this);
        this.bombWeapon.bullets.lightRadius = this.scalingFactor * 16;
        this.bombWeapon.trackSprite(this.player, (this.player.width / 16), (this.player.width / 16));
        
        if (this.player.TOD >= 300 && this.player.TOD < 1140) {
            this.player.worldTintReference.tint = 0xffffff;
        } else if (this.player.TOD >= 1140 && this.player.TOD < 1200) {
            this.player.worldTintReference.tint = 0xD9B338;
        } else if (this.player.TOD >= 1200 || this.player.TOD < 240) {
            this.player.worldTintReference.tint = 0x242969;
        } else if (this.player.TOD >= 240 && this.player.TOD < 300) {
            this.player.worldTintReference.tint = 0xD9B338;
        }

        /***************************************ABSOLUTELY VITAL: UI SCRIPT*****************************************************/
        //Heart declaration
        for (i = 0; i < (this.player.maxHP/2); i++) {
            this.hPosX = 0;
            this.hSpawn;
            if(this['heart' + (i-1).toString()] != null){
                this.hPosX = i; 
            }
            if(this.hPosX > 0){
                this.hSpawn = this['heart' + (i - 1).toString()].width + this['heart' + (i - 1).toString()].x - 5;
            } else {
                this.hSpawn = 0;
            }
            this['heart' + i.toString()] = this.game.add.sprite(this.hSpawn + 5, 10 , 'heart');
            this['heart' + i.toString()].fixedToCamera = true;
            this['heart' + i.toString()].scale.setTo (this.scalingFactor*0.65,this.scalingFactor*0.65)
            this.highestHeart = i;
        }

        this.ticker = {};
        for (i = 0; i < 4; i++) {
            if (this.ticker['plate' + i.toString()] == null) {
                this.ticker.posx = this.game.camera.width * 0.8;
            } else {
                this.ticker.posx = this.ticker['plate' + i.toString()].x + this.ticker['plate' + i.toString()].width
            }
            this.ticker['plate' + (i + 1).toString()] = this.game.add.sprite(this.ticker.posx, 10, 'ticker');
            this.ticker['plate' + (i + 1).toString()].fixedToCamera = true;
            this.ticker['plate' + (i + 1).toString()].scale.setTo(this.scalingFactor * 2, this.scalingFactor * 2);
            this.ticker['plate' + (i + 1).toString()].animations.add('flip', [10, 11, 12, 13, 14, 15]);
        }
        this.ticker.logo = this.game.add.sprite(this.ticker.plate1.x, this.ticker.plate1.y, 'KronaL');
        this.ticker.logo.anchor.setTo(1, 0);
        this.ticker.logo.fixedToCamera = true;
        this.ticker.logo.scale.setTo(this.scalingFactor / 2, this.scalingFactor / 2);

        //steam meter declaration
        this.steamMeter = this.game.add.sprite(3, (this.heart0.y + (this.heart0.height * 4) + 5), 'steamMeter');
        this.steamMeter.frame = 0;
        this.steamMeter.fixedToCamera = true;
        this.steamMeter.anchor.setTo(0, 1);
        this.steamMeter.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * 0.65);

        this.steamLevel = this.game.add.sprite(3, (this.heart0.y + (this.heart0.height * 4) - (8 * (this.scalingFactor * 0.65))), 'steamMeter');
        this.steamLevel.frame = 1;
        this.steamLevel.fixedToCamera = true;
        this.steamLevel.anchor.setTo(0, 86/96);
        this.steamLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * 0.65);

        //Elec Meter declaration
        this.elecMeter = this.game.add.sprite(this.steamMeter.x + this.steamMeter.width, (this.heart0.y + (this.heart0.height * 4) + 5), 'elecMeter');
        this.elecMeter.frame = 0;
        this.elecMeter.fixedToCamera = true;
        this.elecMeter.anchor.setTo(0, 1);
        this.elecMeter.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * 0.65);

        this.elecLevel = this.game.add.sprite(this.steamMeter.x + this.steamMeter.width, (this.heart0.y + (this.heart0.height * 4) - (8 * (this.scalingFactor * 0.65))), 'elecMeter');
        this.elecLevel.frame = 1;
        this.elecLevel.fixedToCamera = true;
        this.elecLevel.anchor.setTo(0, 86/96);
        this.elecLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * 0.65);

        //frame declaration
        this.frame = this.game.add.sprite(this.game.camera.width, 8, 'frame');
        this.frame.anchor.setTo(1,0);
        this.frame.fixedToCamera = true;
        this.frame.scale.setTo(this.scalingFactor * 1.75, this.scalingFactor * 1.75);

        this.frameAbil = this.game.add.sprite(this.game.camera.width - ((this.frame.width - (32 * this.scalingFactor * 1.3)) / 2), 8 + ((this.frame.width - (32 * this.scalingFactor * 1.3)) / 2));
        this.frameAbil.anchor.setTo(1,0);
        this.frameAbil.fixedToCamera = true;
        this.frameAbil.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.frameAbil.name = 'none';


        /*******************************************MENU SCREENS********************************************/
        //ability screen above
        this.abilityScreenBack = this.game.add.sprite(this.game.camera.x + (this.game.camera.width / 2), this.game.camera.y - (this.game.camera.height / 2), 'abilityBack');
        this.abilityScreenBack.anchor.setTo(0.5, 0.5);
        this.abilityScreenBack.width = this.game.camera.width / 1.5;
        this.abilityScreenBack.height = this.game.camera.height * 0.8;
        this.ASGroup = this.game.add.group();
        this.ASGroup.add(this.abilityScreenBack);
        this.ASGroup.fixedToCamera = true;
        this.ASGroup.stationary = true;
        this.ASGroup.pos = 'up';

        //ROW 1
        //winan 
        this.ASWinan = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * 32), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 2 * 32), 'Winan');
        this.ASWinan.anchor.setTo(0.5, 0.5);
        this.ASWinan.frame = 1;
        this.ASWinan.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASWinan);
        //hook 
        this.ASHook = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * 18), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 2 * 32), 'Hook');
        this.ASHook.anchor.setTo(0.5, 0.5);
        this.ASHook.frame = 1;
        this.ASHook.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASHook);
        //steamShield 
        this.ASSteamShield = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * 4), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 2 * 32), 'SteamShield');
        this.ASSteamShield.anchor.setTo(0.5, 0.5);
        this.ASSteamShield.frame = 1;
        this.ASSteamShield.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASSteamShield);
         //lightRod 
        this.ASLightRod = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * -10), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 2 * 32), 'LightRod');
        this.ASLightRod.anchor.setTo(0.5, 0.5);
        this.ASLightRod.frame = 1;
        this.ASLightRod.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASLightRod);
        
        //ROW 2
        //Baton
        this.ASStunBaton = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * 32), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 0 * 32), 'StunBaton');
        this.ASStunBaton.anchor.setTo(0.5, 0.5);
        this.ASStunBaton.frame = 1;
        this.ASStunBaton.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASStunBaton);
        //boomerang
        this.ASBoomerang = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * 18), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 0 * 32), 'Boomerang');
        this.ASBoomerang.anchor.setTo(0.5, 0.5);
        this.ASBoomerang.frame = 1;
        this.ASBoomerang.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASBoomerang);
        //greek fire
        this.ASGreekFire = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * 4), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 0 * 32), 'GreekFire');
        this.ASGreekFire.anchor.setTo(0.5, 0.5);
        this.ASGreekFire.frame = 1;
        this.ASGreekFire.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASGreekFire);
        //blank
        this.ASHammer = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * -10), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 0 * 32), 'Hammer');
        this.ASHammer.anchor.setTo(0.5, 0.5);
        this.ASHammer.frame = 1;
        this.ASHammer.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASHammer);

        //ROW 3
        //bomb 
        this.ASBomb = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * 32), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * -2 * 32), 'Bomb');
        this.ASBomb.anchor.setTo(0.5, 0.5);
        this.ASBomb.frame = 1;
        this.ASBomb.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASBomb);
        //blank 
        this.ASTurbine = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * 18), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * -2 * 32), 'Turbine');
        this.ASTurbine.anchor.setTo(0.5, 0.5);
        this.ASTurbine.frame = 1;
        this.ASTurbine.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASTurbine);
        //blank 
        this.ASDefib = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * 4), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * -2 * 32), 'Defib');
        this.ASDefib.anchor.setTo(0.5, 0.5);
        this.ASDefib.frame = 1;
        this.ASDefib.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASDefib);
        //blank 
        this.ASJar = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * -10), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * -2 * 32), 'Jar');
        this.ASJar.anchor.setTo(0.5, 0.5);
        this.ASJar.frame = 1;
        this.ASJar.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASJar);

        //equipment section
        this.ASBoots = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * -29), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * -1.6 * 32), 'Boots');
        this.ASBoots.anchor.setTo(0.5, 0.5);
        this.ASBoots.frame = 1;
        this.ASBoots.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASBoots);

        this.ASArm = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * -35), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * -2.3 * 32), 'ExoArm');
        this.ASArm.anchor.setTo(0.5, 0.5);
        this.ASArm.frame = 1;
        this.ASArm.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASArm);

        this.ASSword = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * -31.7), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 0 * 32), 'menuSword');
        this.ASSword.anchor.setTo(0.5, 0.5);
        this.ASSword.frame = 0;
        this.ASSword.scale.setTo(this.scalingFactor * 1.3, this.scalingFactor * 1.3);
        this.ASGroup.add(this.ASSword);

        this.ASCouncil = this.game.add.sprite((this.game.camera.width / 2) - (this.scalingFactor * 4.8 * -31.7), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * 2 * 32), 'Council');
        this.ASCouncil.anchor.setTo(0.5, 0.5);
        this.ASCouncil.frame = 0;
        this.ASCouncil.scale.setTo(this.scalingFactor * 2.6, this.scalingFactor * 2.6);
        this.ASGroup.add(this.ASCouncil);

        this.ASSelector = this.game.add.sprite((this.game.camera.width * 3) - (this.scalingFactor * 4.8 * -10), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * -2 * 32), 'selector');
        this.ASSelector.anchor.setTo(0.5, 0.5);
        this.ASSelector.scale.setTo(this.scalingFactor * 1.7, this.scalingFactor * 1.7);
        this.ASGroup.add(this.ASSelector);
        
        
       

        this.ASGroup.maxH = this.abilityScreenBack.cameraOffset.y;
        this.ASGroup.selPos = {};
        if(this.player.curAbil == null) {
        } else if (this.player.curAbil == 'Winan') {
            this.ASGroup.curPos = 1;
        } else if (this.player.curAbil == 'Hook') {
            this.ASGroup.curPos = 2;
        } else if (this.player.curAbil == 'SteamShield') {
            this.ASGroup.curPos = 3;
        } else if (this.player.curAbil == 'LightRod') {
            this.ASGroup.curPos = 4;
        } else if (this.player.curAbil == 'StunBaton') {
            this.ASGroup.curPos = 5;
        } else if (this.player.curAbil == 'Boomerang') {
            this.ASGroup.curPos = 6;
        } else if (this.player.curAbil == 'GreekFire') {
            this.ASGroup.curPos = 7;
        } else if (this.player.curAbil == 'Hammer') {
            this.ASGroup.curPos = 8;
        } else if (this.player.curAbil == 'Bomb') {
            this.ASGroup.curPos = 9;
        } else if (this.player.curAbil == 'Turbine') {
            this.ASGroup.curPos = 10;
        } else if (this.player.curAbil == 'Defib') {
            this.ASGroup.curPos = 11;
        } else if (this.player.curAbil == 'Jar') {
            this.ASGroup.curPos = 12;
        }
        if (this.player.curAbil != null) {
            this.hasItems = true;
        }
        this.ASGroup.curAbil = this.player.curAbil;
        //map screen to the bottom
        this.mapOverworld = this.game.add.sprite(0, 0, 'mapOverworld');
        this.mapOverworld.anchor.setTo(0.5, 0.5);
        this.mapOverworld.width = this.game.camera.width / 1.5;
        this.mapOverworld.height = this.game.camera.height * 0.8;
        this.mapGroup = this.game.add.group();
        this.mapGroup.add(this.mapOverworld);
        this.mapGroup.fixedToCamera = true;
        this.mapGroup.stationary = true;
        this.mapGroup.pos = 'down';

        this.milutinHead = this.game.add.sprite((this.game.camera.width / 20) - (this.scalingFactor * 17 * 10), this.abilityScreenBack.cameraOffset.y - (this.scalingFactor * -2 * 45), 'milutinHead');
        this.milutinHead.anchor.setTo(0.5, 0.5);
        this.milutinHead.frame = 0;
        this.milutinHead.scale.setTo(this.scalingFactor * 2.2, this.scalingFactor * 2.2);
        this.mapGroup.add(this.milutinHead);
        this.milutinHead.animations.add('Blink');
        this.milutinHead.animations.play('Blink', 1.5, true);

        this.mapGroup.maxH = this.game.camera.height * 1.5;
        this.mapGroup.cameraOffset = {
            x: this.game.camera.width / 2,
            y: this.game.camera.height * 1.5
        }
        //pause appear
        this.pauseMenu = this.game.add.sprite(this.game.camera.width / 2, this.game.camera.height / 2, 'plaque');
        this.pauseMenu.anchor.setTo(0.5, 0.5);
        this.pauseMenu.width = this.game.camera.width / 2;
        this.pauseMenu.height = this.game.camera.height * 0.6;
        this.pauseGroup = this.game.add.group();
        this.pauseGroup.add(this.pauseMenu);
        this.pauseGroup.fixedToCamera = true;
        this.pauseGroup.stationary = true;
        this.pauseGroup.pos = 'gone';
        this.pauseGroup.alpha = 0;

        this.pauseText = this.game.add.bitmapText(this.game.camera.width / 2, (this.game.camera.height / 2) - (this.pauseMenu.height / 3), 'pixelFont', 'Pause', 15);
        this.pauseText.anchor.setTo(0.5, 0.5);
        this.pauseText.scale.setTo(this.scalingFactor * 2.2, this.scalingFactor * 2.2);
        this.pauseGroup.add(this.pauseText);

        this.pauseTextC = this.game.add.bitmapText(this.game.camera.width / 2, (this.game.camera.height / 2) - (this.pauseMenu.height / 12), 'pixelFont', 'Continue', 10);
        this.pauseTextC.anchor.setTo(0.5, 0.5);
        this.pauseTextC.scale.setTo(this.scalingFactor * 2.2, this.scalingFactor * 2.2);
        this.pauseGroup.add(this.pauseTextC);

        this.pauseTextS = this.game.add.bitmapText(this.game.camera.width / 2, (this.game.camera.height / 2) + (this.pauseMenu.height / 12), 'pixelFont', 'Save', 10);
        this.pauseTextS.anchor.setTo(0.5, 0.5);
        this.pauseTextS.scale.setTo(this.scalingFactor * 2.2, this.scalingFactor * 2.2);
        this.pauseGroup.add(this.pauseTextS);

        this.pauseTextSQ = this.game.add.bitmapText(this.game.camera.width / 2, (this.game.camera.height / 2) + (this.pauseMenu.height / 4), 'pixelFont', 'Save and Quit', 10);
        this.pauseTextSQ.anchor.setTo(0.5, 0.5);
        this.pauseTextSQ.scale.setTo(this.scalingFactor * 2.2, this.scalingFactor * 2.2);
        this.pauseGroup.add(this.pauseTextSQ);

        this.pausePointer = this.game.add.sprite((this.game.camera.width / 2) - (this.pauseTextSQ.width * (2 / 3)), (this.game.camera.height / 2) - (this.pauseMenu.height / 12), 'menuPointer');
        this.pausePointer.anchor.setTo(1, 0.5);
        this.pauseTextSQ.scale.setTo(this.scalingFactor * 2.2, this.scalingFactor * 2.2);
        this.pausePointer.animations.add('spin', [0, 0, 1, 2, 3, 4, 4, 3, 2, 1]);
        this.pausePointer.animations.play('spin', 12, true)
        this.pausePointer.pos = 1;
        this.pauseGroup.add(this.pausePointer);
        
        /*********************************************fade to black tiles***********************************************************/
        this.fade = this.game.add.tileSprite(this.game.camera.x, this.game.camera.y, this.game.camera.width, this.game.camera.height, 'black');
        this.fade.fixedToCamera = true;
        this.fade.alpha = 1;
    },
    dummyCreate: function () {
        //testing object for slashing
        this.dummy = this.game.add.sprite(this.game.world.centerX + (500 * this.scalingFactor), this.game.world.centerY + (100 * this.scalingFactor), 'Dummy');
        this.game.physics.arcade.enable(this.dummy);
        this.dummy.hit = false;
        this.dummy.scale.setTo(this.scalingFactor * 2, this.scalingFactor * 2);
        this.dummy.maxHP = 3;
        this.dummy.currentHP = this.dummy.maxHP;
        this.dummy.body.immovable = true;
        this.dummy.post = this.game.add.sprite(this.dummy.centerX + (this.dummy.height / 32), this.dummy.bottom - (this.dummy.height / 4), '');
        this.game.physics.arcade.enable(this.dummy.post);
        this.dummy.post.body.immovable = true;
        this.dummy.post.anchor.setTo(0.5, 1);
        this.dummy.post.width = this.scalingFactor / 16;
        this.dummy.post.height = this.scalingFactor / 16;
        this.dummy.lightRadius = this.scalingFactor * 32 * 1.5;
        this.dummy.lightColor = "#ffffff";
    },
    dayCycle: function() {
        if (this.countingSec != true) {
            this.game.time.events.add(Phaser.Timer.SECOND, function () { this.trueTOD ++;; this.countingSec = false; }, this);
            this.countingSec = true;
            if (this.trueTOD == 235) {
                this.colorBlend.step = 0;
                this.sunRise.start();
                this.player.TOD = "Dawn";
            }
            if (this.trueTOD == 295) {
                this.colorBlend.step = 0;
                this.dayBreak.start();
                this.player.TOD = "Day";
            }
            if (this.trueTOD > 305 && this.trueTOD < 1135) {
                this.colorBlend.step = 0;
                this.player.worldTintReference.tint = 0xffffff;
            }
            if (this.trueTOD == 1135) {
                this.colorBlend.step = 0;
                this.sunSet.start();
                this.player.TOD = "Dusk";
            }
            if (this.trueTOD == 1195) {
                this.colorBlend.step = 0;
                this.nightFall.start();
                this.player.TOD = "Night";
            }
            if (this.trueTOD >= 1440) {
                this.trueTOD = 0;
            }
            if (this.trueTOD < 0) {
                this.trueTOD = 1338;
            }
        }
        
    },
    /////////////////////////////////////////////COLLISON FUNCTIONS/////////////////////////////////////////////////////////////
    debugHealth: function(player, collectable) {
        if (collectable != this.HPPotTest) {
            player.timer += 1;
            if(player.timer === 100) {
                player.timer = 0;
                player.currentHP -= 1;
            }
        } else {
            if (player.currentHP < player.maxHP) {
                player.currentHP ++;
                collectable.destroy();
            } else if (player.currentHP = player.maxHP) {
                collectable.destroy();
            }
        }
    },
    debugSteam: function(player, collectable) {
        if (collectable != this.coalTest) {
            if (player.currentSteam < player.maxSteam) {
                player.newSLevel += 0.1;
                if (player.newSLevel >= 1) {
                    player.currentSteam ++;
                    player.newSLevel = 0;
                }
            }
            /*if (player.currentSteam > 0) {
                player.newSLevel -= 0.1;
                if (player.newSLevel <= -1) {
                    player.currentSteam --;
                    player.newSLevel = 0;
                }
            }*/
        } else {
            if (player.currentSteam + 10 <= player.maxSteam) {
                player.currentSteam += 10;
                collectable.destroy();
            } else if (player.currentSteam + 10 > player.maxSteam) {
                player.currentSteam = player.maxSteam;
                collectable.destroy();
            } else if (player.currentSteam = player.maxSteam) {
                collectable.destroy();
            }
        }
    },
    debugElec: function(player, collectable) {
        if (collectable != this.battTest) {
            /*if (player.currentSteam < player.maxSteam) {
                player.newSLevel += 0.1;
                if (player.newSLevel >= 1) {
                    player.currentSteam ++;
                    player.newSLevel = 0;
                }
            }*/
            if (player.currentEnergy > 0) {
                player.newELevel -= 0.1;
                if (player.newELevel <= -1) {
                    player.currentEnergy --;
                    player.newELevel = 0;
                }
            }
        } else {
            if (player.currentEnergy + 5 <= player.maxEnergy) {
                player.currentEnergy += 5;
                collectable.destroy();
            } else if (player.currentEnergy + 10 > player.maxEnergy) {
                player.currentEnergy = player.maxEnergy;
                collectable.destroy();
            } else if (player.currentEnergy = player.maxEnergy) {
                collectable.destroy();
            }
        }
    },
    debugSwipe: function(enemy, weapon){
        if(this.player.state == 'attack') {
            if(this.dummy.hit == false && this.dummy.currentHP > 1) {
                this.dummy.hit = true;
                this.dummy.frame = 1;

                this.dummy.currentHP -= 1;

                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    this.dummy.hit = false;
                    this.dummy.frame = 0;
                }, this);
            }
            if(this.dummy.hit == false && this.dummy.currentHP == 1) {
                this.dummy.currentHP = 0;
                this.dummy.value = 100;
                this.dummy.destroy();
                this.dummy.post.destroy();
                this.dummy.x = 0;
                this.dummy.y = 0;
                this.collect(this.player, this.dummy);
                this.player.hasBomb = 1;
                this.player.hasWinan = 1;
                this.player.hasLightRod = 1;
                this.player.hasStunBaton = 1;
                this.player.hasSteamShield = 1;
                this.player.hasHook = 1;
                this.player.hasHammer = 1;
                this.player.hasTurbine = 1;
                this.player.hasDefib = 1;
                this.player.hasJar = 'empty';
                this.player.hasBoomerang = 1;
                this.player.hasGreekFire = 1;
                this.player.hasBoots = 1;
                this.ASGroup.curPos = 5;
                this.ASGroup.curAbil = 'StunBaton';
                this.player.state = 'hurt';
                this.dummyRespawnTimer = this.game.time.events.add(Phaser.Timer.SECOND * 20, function () {
                    this.dummyCreate(this);
                }, this);
                if (this.direction == 'right') {
                    this.player.body.velocity.x = -this.player.speed * 3;
                    this.player.swipe.body.velocity.x = -this.player.speed * 3;
                }
                if (this.direction == 'left') {
                    this.player.body.velocity.x = this.player.speed * 3;
                    this.player.swipe.body.velocity.x = this.player.speed * 3;
                }
                if (this.direction == 'up') {
                    this.player.body.velocity.y = this.player.speed * 3;
                    this.player.swipe.body.velocity.y = this.player.speed * 3;
                }
                if (this.direction == 'down') {
                    this.player.body.velocity.y = -this.player.speed * 3;
                    this.player.swipe.body.velocity.y = -this.player.speed * 3;
                }
            }
        } else if (enemy != this.player.swipe){
            if(this.dummy.hit == false && this.dummy.currentHP > 2) {
                this.dummy.hit = true;
                this.dummy.frame = 1;
                weapon.destroy();

                this.dummy.currentHP -= 2;

                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    this.dummy.hit = false;
                    this.dummy.frame = 0;
                }, this);
            }
            if(this.dummy.hit == false && this.dummy.currentHP <= 2) {
                this.dummy.currentHP = 0;
                weapon.destroy();
                this.dummy.value = 100;
                this.dummy.destroy();
                this.dummy.post.destroy();
                this.dummy.x = 0;
                this.dummy.y = 0;
                this.collect(this.player, this.dummy);
                this.dummyRespawnTimer = this.game.time.events.add(Phaser.Timer.SECOND * 20, function () {
                    this.dummyCreate(this);
                }, this);
            }
            weapon.destroy();
            this.player.bombCount ++;
        }
    },
    collect: function(player, coin) {
        if (player.newC + coin.value < 10000) {
            player.newC += coin.value;
        } else {
            player.newC = 9999;
        }
        if (coin != this.CSign) {
            coin.destroy();
        }
    },
    collisionHandler: function() {
        this.game.physics.arcade.collide(this.player, this.wall);
        this.game.physics.arcade.collide(this.player, this.dummy.post);
        //this.game.physics.arcade.collide(this.player, this.wall, this.debugSteam);
        //this.game.physics.arcade.collide(this.player, this.wall, this.debugHurt, null, this);
        this.game.physics.arcade.collide(this.player, this.kronaTestG, this.collect, null, this);
        this.game.physics.arcade.collide(this.player, this.kronaTestS, this.collect, null, this);
        this.game.physics.arcade.collide(this.player, this.kronaTestZ, this.collect, null, this);
        this.game.physics.arcade.collide(this.player, this.CSign, this.collect, null, this);
        this.game.physics.arcade.collide(this.player, this.ESign, this.debugElec, null, this);
        this.game.physics.arcade.collide(this.player, this.SSign, this.debugSteam, null, this);
        this.game.physics.arcade.collide(this.player, this.HPSign, this.debugHealth, null, this);
        this.game.physics.arcade.collide(this.player, this.HPPotTest, this.debugHealth, null, this);
        this.game.physics.arcade.collide(this.player, this.coalTest, this.debugSteam, null, this);
        this.game.physics.arcade.collide(this.player, this.battTest, this.debugElec, null, this);
        this.game.physics.arcade.overlap(this.player.swipe, this.dummy, this.debugSwipe, null, this);
        this.game.physics.arcade.collide(this.winanWeapon.bullets, this.dummy, this.debugSwipe, null, this);

        //maintain map at absolute background
        this.decFloor.moveDown();
        this.decWall.moveDown();
        this.floor.moveDown();
        this.wall.moveDown();
        this.water.moveDown();

        this.game.world.bringToTop(this.ASGroup);
        this.game.world.bringToTop(this.mapGroup);
        this.game.world.bringToTop(this.pauseGroup);
        this.fade.moveUp();
    },
    /////////////////////////////////////////////PLAYER FUNCTIONS///////////////////////////////////////////////////////////////
    playerHPManager: function() {
        if (this.player.currentHP <= this.player.maxHP) {
            this.player.diffHP = this.player.maxHP - this.player.currentHP;
            if (this.player.diffHP == 0) {
                this['heart' + this.highestHeart.toString()].frame = 0;
            }
            if (this.player.diffHP == 2) {
                this['heart' + (this.highestHeart - 1).toString()].frame = 0;
            }
            if (this.player.diffHP == 4) {
                this['heart' + (this.highestHeart - 2).toString()].frame = 0;
            }
            if (this.player.diffHP == 6 && this.player.diffHP != this.player.maxHP) {
                this['heart' + (this.highestHeart - 3).toString()].frame = 0;
            }
            if (this.player.diffHP == 8 && this.player.diffHP != this.player.maxHP) {
                this['heart' + (this.highestHeart - 4).toString()].frame = 0;
            }
            if (this.player.diffHP == 10 && this.player.diffHP != this.player.maxHP) {
                this['heart' + (this.highestHeart - 5).toString()].frame = 0;
            }
            if (this.player.diffHP == 12 && this.player.diffHP != this.player.maxHP) {
                this['heart' + (this.highestHeart - 6).toString()].frame = 0;
            }
            if (this.player.diffHP == 14 && this.player.diffHP != this.player.maxHP) {
                this['heart' + (this.highestHeart - 7).toString()].frame = 0;
            }
            if (this.player.diffHP == 16 && this.player.diffHP != this.player.maxHP) {
                this['heart' + (this.highestHeart - 8).toString()].frame = 0;
            }
            if (this.player.diffHP == 18 && this.player.diffHP != this.player.maxHP) {
                this['heart' + (this.highestHeart - 9).toString()].frame = 0;
            }
            if(this.player.diffHP > 0) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + this.highestHeart.toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 1) {
                    this['heart' + this.highestHeart.toString()].frame = 2;
                }
            }
            if(this.player.diffHP > 2) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + (this.highestHeart - 1).toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 3) {
                    this['heart' + (this.highestHeart - 1).toString()].frame = 2;
                }
            }
            if(this.player.diffHP > 4) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + (this.highestHeart - 2).toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 5) {
                    this['heart' + (this.highestHeart - 2).toString()].frame = 2;
                }
            }
            if(this.player.diffHP > 6 && this['heart' + (this.highestHeart - 3).toString()] != null) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + (this.highestHeart - 3).toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 7) {
                    this['heart' + (this.highestHeart - 3).toString()].frame = 2;
                }
            }
            if(this.player.diffHP > 8 && this['heart' + (this.highestHeart - 4).toString()] != null) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + (this.highestHeart - 4).toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 9) {
                    this['heart' + (this.highestHeart - 4).toString()].frame = 2;
                }
            }
            if(this.player.diffHP > 10 && this['heart' + (this.highestHeart - 5).toString()] != null) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + (this.highestHeart - 5).toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 11) {
                    this['heart' + (this.highestHeart - 5).toString()].frame = 2;
                }
            }
            if(this.player.diffHP > 12 && this['heart' + (this.highestHeart - 6).toString()] != null) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + (this.highestHeart - 6).toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 13) {
                    this['heart' + (this.highestHeart - 6).toString()].frame = 2;
                }
            }
            if(this.player.diffHP > 14 && this['heart' + (this.highestHeart - 7).toString()] != null) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + (this.highestHeart - 7).toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 15) {
                    this['heart' + (this.highestHeart - 7).toString()].frame = 2;
                }
            }
            if(this.player.diffHP > 16 && this['heart' + (this.highestHeart - 8).toString()] != null) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + (this.highestHeart - 8).toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 17) {
                    this['heart' + (this.highestHeart - 8).toString()].frame = 2;
                }
            }
            if(this.player.diffHP > 18 && this['heart' + (this.highestHeart - 9).toString()] != null) {
                if(this.player.diffHP % 2 != 0) {
                    this['heart' + (this.highestHeart - 9).toString()].frame = 1;
                }
                if(this.player.diffHP % 2 == 0 || this.player.diffHP > 19) {
                    this['heart' + (this.highestHeart - 9).toString()].frame = 2;
                }
            }
            if (this.player.currentHP <= 0) {
                if (this.fade.alpha == 0) {
                    this.game.add.tween(this.fade).to({alpha: 1}, 500, null, true);
                    if (this.frameAbil != null) {
                        this.frameAbil.name == "none";
                        this.frameAbil.destroy();
                    }
                }
            }
        }
    },
    playerMeterManager: function() {
        if (this.player.currentSteam < this.player.maxSteam) {
            if (this.player.currentSteam <= 0) {
                this.player.currentSteam = 0.01;
            }
            this.diffSteam = this.player.currentSteam / this.player.maxSteam;
            this.steamLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * (0.65 * this.diffSteam));
            this.steamLevel.y += this.diffSteam * this.scalingFactor * 0.65
        } else {
            this.steamLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * 0.65);
        }

        /***************************************** Player Electricity Handler **********************************************************************************************/
        if (this.player.currentEnergy < this.player.maxEnergy) {
            if (this.player.currentEnergy <= 0) {
                this.player.currentEnergy = 0.01;
            }
            this.diffEnergy = this.player.currentEnergy / this.player.maxEnergy;
            this.elecLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * (0.65 * this.diffEnergy));
            this.elecLevel.y += this.diffEnergy * this.scalingFactor * 0.65
        } else {
            this.elecLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * 0.65);
        }
    },
    playerKnockbackHandler: function() {
        if (this.player.state == 'hurt' && this.knockbackTimer == null) {
            this.knockbackTimer = this.game.time.events.add(Phaser.Timer.SECOND * 0.15, function(){ this.player.body.velocity.x = 0; this.player.body.velocity.y = 0; this.player.swipe.body.velocity.x = 0; this.player.swipe.body.velocity.y = 0; }, this);
            this.knockbackTimer = this.game.time.events.add(Phaser.Timer.SECOND * 3, function(){ this.player.state = 'walk'; }, this);
        } 
        if (this.player.state == 'hurt') {
            if (this.direction == 'right') {
                this.player.frame = 83;
                if (this.player.scale.x > 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
            if (this.direction == 'left') {
                this.player.frame = 83;
                if (this.player.scale.x < 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
            if (this.direction == 'up') {
                this.player.frame = 81;
            }
            if (this.direction == 'down') {
                this.player.frame = 82;
            }
        }
    },
    playerMovement: function() {
        if (this.player.state == 'walk') {
            this.game.time.events.remove(this.knockbackTimer);
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            this.player.swipe.body.velocity.x = 0;
            this.player.swipe.body.velocity.y = 0;
            if (upKey.isDown) {
                this.player.body.velocity.y = -this.player.speed * 0.9;
                this.player.swipe.body.velocity.y = -this.player.speed * 0.9;
            } 
            if (upArrow.isDown) {
                this.player.body.velocity.y = -this.player.speed * 0.9;
                this.player.swipe.body.velocity.y = -this.player.speed * 0.9;
            } 
            if (downKey.isDown) {
                this.player.body.velocity.y = this.player.speed * 0.9;
                this.player.swipe.body.velocity.y = this.player.speed * 0.9;
            }
            if (downArrow.isDown) {
                this.player.body.velocity.y = this.player.speed * 0.9;
                this.player.swipe.body.velocity.y = this.player.speed * 0.9;
            }
            if (rightKey.isDown) {
                this.player.body.velocity.x = this.player.speed;
                this.player.swipe.body.velocity.x = this.player.speed;
            }
            if (rightArrow.isDown) {
                this.player.body.velocity.x = this.player.speed;
                this.player.swipe.body.velocity.x = this.player.speed;
            }
            if (leftKey.isDown) {
                this.player.body.velocity.x = -this.player.speed;
                this.player.swipe.body.velocity.x = -this.player.speed;
            }
            if (leftArrow.isDown) {
                this.player.body.velocity.x = -this.player.speed;
                this.player.swipe.body.velocity.x = -this.player.speed;
            }

        }

        

        if (this.frameAbil.name != this.ASGroup.curAbil) {
            this.frameAbil.destroy();
            this.frameAbil = this.game.add.sprite(this.game.camera.width - ((this.frame.width - (32 * this.scalingFactor * 1.1)) / 2), 8 + ((this.frame.width - (32 * this.scalingFactor * 1.1)) / 2), this.ASGroup.curAbil);
            this.frameAbil.anchor.setTo(1,0);
            this.frameAbil.fixedToCamera = true;
            this.frameAbil.scale.setTo(this.scalingFactor * 1.1, this.scalingFactor * 1.1);
            this.frameAbil.name = this.ASGroup.curAbil;
        }
    },
    playerAnimation: function() {
        /************************************** Animation Controller for Player movement *****************************************************************************/
        this.direction = this.direction || 'down';
        if (this.player.state == 'walk') {
            if (this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0 && this.idling == false) {
                this.idleTimer1 = this.game.time.events.add(Phaser.Timer.SECOND * 20, function(){ this.animationName = 'sit'; this.idling = "seated"; this.direction = "right"; }, this);
                this.game.time.events.remove(this.standTimer);
                this.game.time.events.remove(this.sitTimer);
                this.animationName = "stopped";
                this.idling = true;
            }

            if (this.idling == "seated") {
                this.direction = "right";
                this.player.body.velocity.x = 0;
                this.player.body.velocity.y = 0;
                this.player.swipe.body.velocity.x = 0;
                this.player.swipe.body.velocity.y = 0;
                if (this.player.animations.name == "sit" && this.sitTiming != true) {
                    this.sitTimer = this.game.time.events.add(Phaser.Timer.SECOND * 0.66, function () { this.sitTimed = true; this.sitTiming = false; this.animationName = "seated"; }, this);
                    this.sitTiming = true;
                }
                if (this.sitTimed == true) {
                    this.animationName = "seated";
                }

                if (upKey.isDown || upArrow.isDown || downKey.isDown || downArrow.isDown || leftKey.isDown || leftArrow.isDown || rightKey.isDown || rightArrow.isDown) {
                    if (this.player.animations.name == "seated") {
                        this.standTimer = this.game.time.events.add(Phaser.Timer.SECOND * (2/3), function() { this.idling = false; }, this);
                        this.animationName = 'stand';
                        this.sitTimed = false;
                    }
                }
            }

            if (this.tripCount >= 20) {
                this.player.state = "trip";
                this.player.body.velocity.x = 0;
                this.player.swipe.body.velocity.x = 0;
                this.player.body.velocity.y = 0;
                this.player.swipe.body.velocity.y = 0;
                this.animationName = "trip";
                if (this.tripTiming != true) {
                    this.tripTiming = true;
                    this.tripoverride = this.game.time.events.add(Phaser.Timer.SECOND * 1.5, function() { this.player.state = "walk"; this.tripTiming = false; this.tripCount = 0; }, this);
                }
            }
            
            if (this.player.body.velocity.x < 0) {
                this.animationName = 'runLeft';
                this.direction = 'left';
                this.player.swipe.x = this.player.x - (this.player.body.width / 2);
                this.player.swipe.y = this.player.y + (this.player.height / 2);
                this.player.swipe.anchor.setTo(1, 1.35);
                this.player.swipe.width = 18 * this.scalingFactor;
                this.player.swipe.height = this.player.body.height;
                if (this.player.scale.x < 0) {
                    if (this.player.body.velocity.y == 0) {
                        this.player.scale.x = this.player.scale.x * -1;
                        this.tripCount += 1;
                        this.game.time.events.remove(this.tripTimer);
                        this.tripTimer = this.game.time.events.add(Phaser.Timer.SECOND * (1/3), function(){ this.tripCount = 0; }, this);
                    }
                }
                if (this.player.scale.x < 0 && this.player.body.velocity.y != 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
                this.game.time.events.remove(this.idleTimer1);
                this.idling = false;
            }
            if (this.player.body.velocity.x > 0) {
                this.animationName = 'runRight';
                this.direction = 'right';
                this.player.swipe.x = this.player.x + (this.player.body.width / 2);
                this.player.swipe.y = this.player.y + (this.player.height / 2);
                this.player.swipe.anchor.setTo(0, 1.35);
                this.player.swipe.width = 18 * this.scalingFactor;
                this.player.swipe.height = this.player.body.height;
                if (this.player.scale.x > 0) {
                    if (this.player.body.velocity.y == 0) {
                        this.player.scale.x = this.player.scale.x * -1;
                        this.tripCount += 1;
                        this.game.time.events.remove(this.tripTimer);
                        this.tripTimer = this.game.time.events.add(Phaser.Timer.SECOND * (1/3), function(){ this.tripCount = 0; }, this);
                    }
                }
                if (this.player.scale.x < 0 && this.player.body.velocity.y != 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
                this.game.time.events.remove(this.idleTimer1);
                this.idling = false;
            }
            if (this.player.body.velocity.y < 0) {
                this.animationName = 'runUp';
                this.direction = 'up';
                this.player.swipe.x = this.player.body.x - (this.player.body.width * 0.25);
                this.player.swipe.y = this.player.body.y;
                this.player.swipe.anchor.setTo(0, 0.6);
                this.player.swipe.width = this.player.body.width * 1.5;
                this.player.swipe.height = 34 * this.scalingFactor;
                this.game.time.events.remove(this.idleTimer1);
                this.idling = false;
                if (this.player.scale.x < 0 && this.player.body.velocity.x < 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
            if (this.player.body.velocity.y > 0) {
                this.animationName = 'runDown';
                this.direction = 'down';
                this.player.swipe.x = this.player.body.x - (this.player.body.width * 0.25);
                this.player.swipe.y = this.player.body.y + this.player.body.height;
                this.player.swipe.anchor.setTo(0, 0.8);
                this.player.swipe.width = this.player.body.width * 1.5;
                this.player.swipe.height = 42 * this.scalingFactor;
                this.game.time.events.remove(this.idleTimer1);
                this.idling = false;
                if (this.player.scale.x < 0 && this.player.body.velocity.x < 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
        }
        //change current animation
        if (this.player.animations.name !== this.animationName && this.animationName !== 'stopped') {
            this.player.animations.play(this.animationName);
        } else if (this.animationName == 'stopped') {
            if (this.direction == 'down') {
                this.player.animations.play('idleDown', 4, true);
                if (this.player.scale.x < 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
            if (this.direction == 'right') {
                this.player.animations.play('idleRight', 4, true);
            }
            if (this.direction == 'up') {
                this.player.animations.play('idleUp', 4, true);
                if (this.player.scale.x < 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
            if (this.direction == 'left') {
                this.player.animations.play('idleLeft', 4, true);
            }
        }
    },
    playerAttack: function() {
        if(spaceKey.duration < 1 && spaceKey.isDown && this.player.combo < 3) {
            if (this.player.state != 'attack') {
                this.player.body.velocity.x = 0;
                this.player.body.velocity.y = 0;
                this.player.swipe.body.velocity.x = 0;
                this.player.swipe.body.velocity.y = 0;
                this.sitTimed = false;
                if (this.player.combo == 0) {
                    if(this.direction == 'up') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeUp';
                    } else if(this.direction == 'down') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeDown';
                    } else if(this.direction == 'left') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeSide';
                    } else if(this.direction == 'right') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeSide';
                    }
                    this.player.combo = 1;
                    this.game.time.events.add(Phaser.Timer.SECOND * (1/3), function(){
                        this.player.state = 'walk';
                        this.game.time.events.remove(this.idleTimer1);
                        this.idling = false;
                    }, this);
                    this.comboTimer1 = this.game.time.events.add(Phaser.Timer.SECOND * (2/3), function(){ this.player.combo = 0; }, this);
                }
                else if (this.player.combo == 1) {
                    if(this.direction == 'up') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeUp2';
                        this.player.body.velocity.y = -this.player.speed * 1.5;
                        this.player.swipe.body.velocity.y = -this.player.speed * 1.5;
                    } else if(this.direction == 'down') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeDown2';
                        this.player.body.velocity.y = this.player.speed * 1.5;
                        this.player.swipe.body.velocity.y = this.player.speed * 1.5;
                    } else if(this.direction == 'left') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeSide2';
                        this.player.body.velocity.x = -this.player.speed * 1.5;
                        this.player.swipe.body.velocity.x = -this.player.speed * 1.5;
                    } else if(this.direction == 'right') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeSide2';
                        this.player.body.velocity.x = this.player.speed * 1.5;
                        this.player.swipe.body.velocity.x = this.player.speed * 1.5;
                    }
                    this.player.combo = 2;
                    this.game.time.events.remove(this.comboTimer1);
                    this.game.time.events.add(Phaser.Timer.SECOND * (0.15), function(){ this.player.body.velocity.x = 0; this.player.body.velocity.y = 0; this.player.body.velocity.y = 0; this.player.swipe.body.velocity.x = 0; this.player.swipe.body.velocity.y = 0; }, this);
                    this.game.time.events.add(Phaser.Timer.SECOND * (1/3), function(){
                        this.player.state = 'walk';
                        this.game.time.events.remove(this.idleTimer1);
                        this.idling = false;
                    }, this);
                    this.comboTimer2 = this.game.time.events.add(Phaser.Timer.SECOND * (2/3), function(){ this.player.combo = 0; }, this);
                }
                else if (this.player.combo == 2) {
                    if(this.direction == 'up') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeUp3';
                        this.player.body.velocity.y = -this.player.speed * 2;
                        this.player.swipe.body.velocity.y = -this.player.speed * 2;
                    } else if(this.direction == 'down') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeDown3';
                        this.player.body.velocity.y = this.player.speed * 2;
                        this.player.swipe.body.velocity.y = this.player.speed * 2;
                    } else if(this.direction == 'left') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeSide3';
                        this.player.body.velocity.x = -this.player.speed * 2;
                        this.player.swipe.body.velocity.x = -this.player.speed * 2;
                    } else if(this.direction == 'right') {
                        this.player.state = 'attack';
                        this.animationName = 'swipeSide3';
                        this.player.body.velocity.x = this.player.speed * 2;
                        this.player.swipe.body.velocity.x = this.player.speed * 2;
                    }
                    this.player.combo = 3;
                    this.game.time.events.remove(this.comboTimer2);
                    this.game.time.events.add(Phaser.Timer.SECOND * (0.15), function(){ this.player.body.velocity.x = 0; this.player.body.velocity.y = 0; this.player.swipe.body.velocity.x = 0; this.player.swipe.body.velocity.y = 0; }, this);
                    this.game.time.events.add(Phaser.Timer.SECOND * (1/3), function(){
                        this.player.state = 'walk';
                        this.game.time.events.remove(this.idleTimer1);
                        this.idling = false;
                        this.player.combo = 0;
                    }, this);
                    
                }
                this.game.time.events.add(Phaser.Timer.SECOND * (2/3), function(){
                    spaceKey.duration = 0;
                }, this);
            }
        }
    },
    playerUseAbil: function() {
        //WINAN USAGE
        if (this.hasItems == true) {
            if (abilityKey.isDown && abilityKey.duration < 2) {
                if (this.ASGroup.curAbil == "Winan" && this.usingAbil == "none") {
                    this.sitTimed = false;
                    this.usingAbil = "Winan";
                    this.winanWeapon.bulletSpeed = this.player.speed * 2.5;
                    if (this.direction == "up") {
                        this.animationName = "winanUp";
                        this.winanWeapon.fireAngle = 270;
                        this.winanWeapon.trackSprite(this.player, (this.player.width / 32) * 5, (this.player.width / 32) * -15);
                    } 
                    else if (this.direction == "left" || this.direction == "right") {
                        this.animationName = "winanSide";
                        if (this.direction == "left") {
                            this.winanWeapon.fireAngle = 180;
                            this.winanWeapon.trackSprite(this.player, (this.player.width / 32) * -11, (this.player.width / 32) * -3.5);
                        }
                        if (this.direction == "right") {
                            this.winanWeapon.fireAngle = 0;
                            this.winanWeapon.trackSprite(this.player, (this.player.width / 32) * -11, (this.player.width / 32) * 3.5);
                        }
                    } 
                    else if (this.direction == "down") {
                        this.animationName = "winanDown";
                        this.winanWeapon.fireAngle = 90;
                        this.winanWeapon.trackSprite(this.player, (this.player.width / 32) * -3, (this.player.width / 32) * 7);
                    } 
                    if (this.idling == "seated") {
                        if (this.player.scale.x > 0) {
                            this.animationName = "winanSide";
                            this.winanWeapon.fireAngle = 180;
                            this.winanWeapon.trackSprite(this.player, (this.player.width / 32) * -11, (this.player.width / 32) * -3.5);
                        }
                        if (this.player.scale.x < 0) {
                            this.animationName = "winanSide";
                            this.winanWeapon.fireAngle = 0;
                            this.winanWeapon.trackSprite(this.player, (this.player.width / 32) * -11, (this.player.width / 32) * 3.5);
                        }
                    }
                    if (this.usingTiming != true) {
                        this.usingTimer = this.game.time.events.add(Phaser.Timer.SECOND * (1/2), function(){
                            this.usingAbil = "none"; 
                            abilityKey.duration = 0; 
                            this.usingTiming = false; 
                            this.refuel = false;
                            if (this.direction == "left") {
                                this.animationName = "idleLeft";
                            }
                            if (this.direction == "right") {
                               this.animationName = "idleRight";
                            }
                            if (this.direction == "up") {
                                this.animationName = "idleUp";
                            }
                            if (this.direction == "down") {
                                this.animationName = "idleDown";
                            }
                            this.usingTiming = false;
                        }, this);
                        this.usingTiming = true;
                    }
                    this.idling = true;
                    this.game.time.events.remove(this.idleTimer1);
                }
            }
            
            if (abilityKey.duration > 490 && abilityKey.isDown) {
                if (this.ASGroup.curAbil == "Winan" && this.usingAbil == "Winan") {
                    this.sitTimed = false;
                    this.usingAbil = "Winan2";
                    this.game.time.events.remove(this.usingTimer);
                    this.game.time.events.remove(this.usingTimer2);
                    this.usingTiming = false;
                    if (this.direction == "left" || this.direction == "right") {
                        this.animationName = "winanSide2";
                    } else if (this.direction == "up") {
                        this.animationName = "winanUp2";
                    } else if (this.direction == "down") {
                        this.animationName = "winanDown2";
                    }
                    if (this.usingTiming != true) {
                        this.refuel = false;
                        this.usingTimer = this.game.time.events.add(Phaser.Timer.SECOND * (2/3), function(){ this.usingAbil = "Winan"; this.usingTiming = false; this.refuel = false; }, this);
                        this.usingTimer2 = this.game.time.events.add(Phaser.Timer.SECOND * 0.7, function(){
                            this.usingAbil = "none"; 
                            abilityKey.duration = 0; 
                            this.usingTiming = false; 
                            this.refuel = false;
                            if (this.direction == "left") {
                                this.animationName = "idleLeft";
                            }
                            if (this.direction == "right") {
                               this.animationName = "idleRight";
                            }
                            if (this.direction == "up") {
                                this.animationName = "idleUp";
                            }
                            if (this.direction == "down") {
                                this.animationName = "idleDown";
                            }
                            this.usingTiming = false;
                        }, this);
                        this.usingTiming = true;
                    }
                    this.idling = true;
                    this.game.time.events.remove(this.idleTimer1);
                }
            }

            if (this.usingAbil == "Winan" || this.usingAbil == "Winan2") {
                this.player.body.velocity.x = 0;
                this.player.body.velocity.y = 0;
                this.player.swipe.body.velocity.x = 0;
                this.player.swipe.body.velocity.y = 0;
                if (this.refuel != true) {
                    if (this.usingAbil == "Winan") {
                        this.shootTimer = this.game.time.events.add(Phaser.Timer.SECOND * (1/4), function(){ 
                            if (this.player.currentSteam >= 10) {
                                this.winanWeapon.fire();
                                this.player.currentSteam -= 10;
                            }
                        }, this);
                    } else if (this.usingAbil == "Winan2") {
                        this.shootTimer = this.game.time.events.add(Phaser.Timer.SECOND * (7/12), function(){ 
                            if (this.player.currentSteam >= 10) {
                                this.winanWeapon.fire();
                                this.player.currentSteam -= 10;
                            }
                        }, this);
                    }
                    this.refuel = true;
                }
            }

            if (abilityKey.isUp && this.usingAbil == 'Winan2') {
                this.usingAbil = "none"; 
                abilityKey.duration = 0; 
                this.usingTiming = false; 
                this.refuel = false;
                this.idling = true;
                if (this.direction == "left") {
                    this.animationName = "idleLeft";
                }
                if (this.direction == "right") {
                    this.animationName = "idleRight";
                }
                if (this.direction == "up") {
                    this.animationName = "idleUp";
                }
                if (this.direction == "down") {
                    this.animationName = "idleDown";
                }
                this.usingTiming = false;
                this.game.time.events.remove(this.usingTimer);
                this.game.time.events.remove(this.usingTimer2);
                this.game.time.events.remove(this.shootTimer);

            }
        }
        //SHIELD USAGE
        if (this.hasItems == true) {
            if (abilityKey.isDown && abilityKey.duration < 2) {
                if (this.ASGroup.curAbil == "SteamShield" && this.usingAbil == "none") {
                    this.sitTimed = false;
                    this.usingAbil = "SteamShield";
                    if (this.direction == "left" || this.direction == "right") {
                        this.animationName = "winanSide";
                        if (this.usingTiming != true) {
                            this.usingTimer = this.game.time.events.add(Phaser.Timer.SECOND * (1/2), function(){
                                this.usingAbil = "none"; 
                                this.duration = 0; 
                                this.usingTiming = false; 
                                    if (this.direction == "left") {
                                    this.animationName = "idleLeft";
                                    }
                                    if (this.direction == "right") {
                                    this.animationName = "idleRight";
                                    }
                                    if (this.direction == "up") {
                                    this.animationName = "idleUp";
                                    }
                                    if (this.direction == "down") {
                                    this.animationName = "idleDown";
                                    }
                            this.usingTiming = false;
                            }, this);
                            this.usingTiming = true;
                        }
                        this.idling = true;
                        this.game.time.events.remove(this.idleTimer1);
                    }
                }
            }
            
            if (abilityKey.duration > 490 && abilityKey.isDown) {
                if (this.ASGroup.curAbil == "SteamShield" && this.usingAbil == "SteamShield") {
                    this.sitTimed = false;
                    this.usingAbil = "SteamShield";
                    this.game.time.events.remove(this.usingTimer);
                    this.game.time.events.remove(this.usingTimer2);
                    this.usingTiming = false;
                    if (this.direction == "left" || this.direction == "right") {
                        this.animationName = "winanSide2";
                    } else if (this.direction == "up") {
                        this.animationName = "winanUp2";
                    } else if (this.direction == "down") {
                        this.animationName = "winanDown2";
                    }
                    this.idling = true;
                    this.game.time.events.remove(this.idleTimer1);
                }
            }

            if (this.usingAbil == "SteamShield") {
                this.player.body.velocity.x = 0;
                this.player.body.velocity.y = 0;
                this.player.swipe.body.velocity.x = 0;
                this.player.swipe.body.velocity.y = 0;
                    if (this.usingAbil == "SteamShield") {
                        this.shootTimer = this.game.time.events.add(Phaser.Timer.SECOND * (1/4), function(){ 
                            if (this.player.currentSteam >= 0.5) {
                                this.player.currentSteam -= 0.5;
                            }
                        }, this);
                }
            }

            if (abilityKey.isUp && this.usingAbil == 'SteamShield') {
                this.usingAbil = "none"; 
                abilityKey.duration = 0; 
                this.usingTiming = false; 
                if (this.direction == "left") {
                    this.animationName = "idleLeft";
                }
                if (this.direction == "right") {
                    this.animationName = "idleRight";
                }
                if (this.direction == "up") {
                    this.animationName = "idleUp";
                }
                if (this.direction == "down") {
                    this.animationName = "idleDown";
                }
                this.usingTiming = false;
                this.game.time.events.remove(this.usingTimer);
                this.game.time.events.remove(this.usingTimer2);
                this.game.time.events.remove(this.shootTimer);

            }
        }

        //TURBINE & DEFIB USAGE
        if (this.hasItems == true) {
            if (abilityKey.isDown && abilityKey.duration < 2) {
                if (this.ASGroup.curAbil == "Turbine" && this.usingAbil == "none" && this.player.currentEnergy < this.player.maxEnergy && this.player.currentSteam >= 10) {
                    this.sitTimed = false;
                    this.usingAbil = "Turbine";
                    this.player.currentSteam -= 10;
                    if (this.player.currentEnergy + 5 <= this.player.maxEnergy) {
                        this.player.currentEnergy += 5;
                    } else {
                        this.player.currentEnergy = this.player.maxEnergy;
                    }
                    this.game.time.events.add(Phaser.Timer.SECOND * (1/2), function(){
                        this.usingAbil = "none";
                        abilityKey.duration = 0;
                    }, this);
                }

                if (this.ASGroup.curAbil == "Defib" && this.usingAbil == "none" && this.player.currentHP < this.player.maxHP && this.player.currentEnergy >= 15) {
                    this.sitTimed = false;
                    this.usingAbil = "Defib";
                    this.player.currentEnergy -= 15;
                    this.player.currentHP += 1;
                    this.game.time.events.add(Phaser.Timer.SECOND * (1/2), function(){
                        this.usingAbil = "none";
                        abilityKey.duration = 0;
                    }, this);
                }
            }
        }

        //BOMB USAGE
        if (this.hasItems == true) {
            if (this.player.bombCount > 0) {
                if (abilityKey.isDown && abilityKey.duration < 2) {
                    if (this.ASGroup.curAbil == 'Bomb') {
                        this.bombWeapon.fire();
                        this.player.bombCount --;
                        this.bombsAlive ++;
                        //this.game.time.events.add(Phaser.Timer.SECOND * 3, function() { this.bombWeapon.bullets }, this);
                    }
                }
            }
        }

        //BOOT USAGE
        if(dashKey.isDown && dashKey.duration < 2 && this.player.hasBoots == 1 && this.dashCD != true) {
            this.player.state = "dash";
            this.dashCD = true;
            this.dashORTimer = this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function(){ this.player.body.velocity.x = 0; this.player.body.velocity.y = 0; this.player.swipe.body.velocity.x = 0; this.player.swipe.body.velocity.y = 0; this.player.state = "walk";}, this);
            this.dashCDTimer = this.game.time.events.add(Phaser.Timer.SECOND * 1, function(){ dashKey.duration = 0; this.dashCD = false;}, this);
            if (this.player.body.velocity.x < 0) {
                this.player.body.velocity.x = this.player.speed * -3;
                this.player.swipe.body.velocity.x = this.player.body.velocity.x;
                this.animationName = "dashSide";
            } else if (this.player.body.velocity.x > 0) {
                this.player.body.velocity.x = this.player.speed * 3;
                this.player.swipe.body.velocity.x = this.player.body.velocity.x;
                this.animationName = "dashSide";
                if (this.player.scale.x > 0) {
                    this.player.scale.x = -this.player.scale.x;
                }
            }
            if (this.player.body.velocity.y < 0) {
                this.player.body.velocity.y = this.player.speed * -3 * 0.7;
                this.player.swipe.body.velocity.y = this.player.body.velocity.y;
                this.animationName = "dashUp";
            } else if (this.player.body.velocity.y > 0) {
                this.player.body.velocity.y = this.player.speed * 3 * 0.7;
                this.player.swipe.body.velocity.y = this.player.body.velocity.y;
                this.animationName = "dashDown";
            }
        }
    },
    explosionHandler: function(body) {
        //this.bombWeapon.bullets.forEachExists( function() {this.bombWeapon.addBulletAnimation('explode', [1], 2, true)});
    },
    /////////////////////////////////////////////SCREEN FUNCTIONS///////////////////////////////////////////////////////////////
    tickerHandler: function() {
        /***************************************** Currency tracker **************************************************************************************************/
        if (this.player.newC != this.player.currency) {
            this.player.currency = this.player.newC;
            //this.changeTicker(this.player.currency, this.ticker, this.player.currencyData);
            this.player.currencyData.digit1 = Math.floor(this.player.currency / 1000);
            this.player.currencyData.digit2 = Math.floor(this.player.currency / 100) - (this.player.currencyData.digit1 * 10);
            this.player.currencyData.digit3 = Math.floor(this.player.currency / 10) - (this.player.currencyData.digit1 * 100) - (this.player.currencyData.digit2 * 10);
            this.player.currencyData.digit4 = this.player.currency - (this.player.currencyData.digit1 * 1000) - (this.player.currencyData.digit2 * 100) - (this.player.currencyData.digit3 * 10);
            this.ticker.plate1.animations.play('flip', 12, false);
            this.ticker.plate2.animations.play('flip', 12, false);
            this.ticker.plate3.animations.play('flip', 12, false);
            this.ticker.plate4.animations.play('flip', 12, false);
        }

        if(this.ticker.plate1.animations.isPlaying != true) {
            if (this.ticker.plate1.frame >= 15 && this.ticker.plate1.frame != this.player.currencyData.digit1) {
                this.ticker.plate1.frame = this.player.currencyData.digit1;
            } else if(this.ticker.plate1.frame == 15) {
                this.ticker.plate1.frame = this.player.currencyData.digit1;
            }
        }
        if(this.ticker.plate2.animations.isPlaying != true) {
            if (this.ticker.plate2.frame >= 15 && this.ticker.plate2.frame != this.player.currencyData.digit2) {
                this.ticker.plate2.frame = this.player.currencyData.digit2;
            } else if(this.ticker.plate2.frame == 15) {
                this.ticker.plate2.frame = this.player.currencyData.digit2;
            }
        }
        if(this.ticker.plate3.animations.isPlaying != true) {
            if (this.ticker.plate3.frame >= 15 && this.ticker.plate3.frame != this.player.currencyData.digit3) {
                this.ticker.plate3.frame = this.player.currencyData.digit3;
            } else if(this.ticker.plate3.frame == 15) {
                this.ticker.plate3.frame = this.player.currencyData.digit3;
            }
        }
        if(this.ticker.plate4.animations.isPlaying != true) {
            if (this.ticker.plate4.frame >= 15 && this.ticker.plate4.frame != this.player.currencyData.digit4) {
                this.ticker.plate4.frame = this.player.currencyData.digit4;
            } else if(this.ticker.plate4.frame == 15) {
                this.ticker.plate4.frame = this.player.currencyData.digit4;
            }
        }
    },
    menuPosResets: function() {
        //moving any and all menus away
        this.abilAway(this);
        this.mapAway(this);
        this.pauseAway(this);
    },
    ASManager: function() {
        
        if (this.player.hasWinan == 1) {
            this.ASWinan.frame = 0;
            this.ASGroup.selPos.pos1 = 'Winan';
            this.hasItems = true;
        }
        if (this.player.hasHook == 1) {
            this.ASHook.frame = 0;
            this.ASGroup.selPos.pos2 = 'Hook';
            this.hasItems = true;
        }
        if (this.player.hasSteamShield == 1) {
            this.ASSteamShield.frame = 0;
            this.ASGroup.selPos.pos3 = 'SteamShield';
            this.hasItems = true;
        }
        if (this.player.hasLightRod == 1) {
            this.ASLightRod.frame = 0;
            this.ASGroup.selPos.pos4 = 'LightRod';
            this.hasItems = true;
        }
        if (this.player.hasStunBaton == 1) {
            this.ASStunBaton.frame = 0;
            this.ASGroup.selPos.pos5 = 'StunBaton';
            this.hasItems = true;
        }
        if (this.player.hasBoomerang == 1) {
            this.ASBoomerang.frame = 0;
            this.ASGroup.selPos.pos6 = 'Boomerang';
            this.hasItems = true;
        }
        if (this.player.hasGreekFire == 1) {
            this.ASGreekFire.frame = 0;
            this.ASGroup.selPos.pos7 = 'GreekFire';
            this.hasItems = true;
        }
        if (this.player.hasHammer == 1) {
            this.ASHammer.frame = 0;
            this.ASGroup.selPos.pos8 = 'Hammer';
            this.hasItems = true;
        }
        if (this.player.hasBomb == 1 || this.player.bombCount > 0) {
            this.ASBomb.frame = 0;
            this.player.hasBomb = 1;
            this.ASGroup.selPos.pos9 = 'Bomb';
            this.hasItems = true;
        }
        if (this.player.hasTurbine == 1) {
            this.ASTurbine.frame = 0;
            this.ASGroup.selPos.pos10 = 'Turbine';
            this.hasItems = true;
        }
        if (this.player.hasDefib == 1) {
            this.ASDefib.frame = 0;
            this.ASGroup.selPos.pos11 = 'Defib';
            this.hasItems = true;
        }
        if (this.player.hasJar != 0) {
            if(this.player.hasJar == "empty") {
                this.ASJar.frame = 0;
            }
            if(this.player.hasJar == "water") {
                this.ASJar.frame = 2;
            }
            if(this.player.hasJar == "acid") {
                this.ASJar.frame = 3;
            }
            if(this.player.hasJar == "HPPot") {
                this.ASJar.frame = 4;
            }
            this.ASGroup.selPos.pos12 = 'Jar';
            this.hasItems = true;
        }
        if (this.player.hasBoots == 1) {
            this.ASBoots.frame = 0;
            //this.ASGroup.selPos.pos13 = 'Boots';
            //this.hasItems = true;
        }
        if (this.player.hasExoArm == 1) {
            this.ASArm.frame = 0;
            //this.ASGroup.selPos.pos14 = 'ExoArm';
            //this.hasItems = true;
        }
        if (this.player.hasTaserSword == 1) {
            this.ASSword.frame = 1;
            //this.ASGroup.selPos.pos14 = 'ExoArm';
            //this.hasItems = true;
        }
        

        if (upKey.isDown || upArrow.isDown) {
            if (upKey.isDown && upKey.duration < 2) {
                if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 4)]]) {
                    this.ASGroup.curPos -= 4;
                } else if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 8)]]) {
                    this.ASGroup.curPos -= 8;
                }
                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    upKey.duration = 0;
                }, this);
            }
            if (upArrow.isDown && upArrow.duration < 2) {
                if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 4)]]) {
                    this.ASGroup.curPos -= 4;
                } else if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 8)]]) {
                    this.ASGroup.curPos -= 8;
                }
                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    upArrow.duration = 0;
                }, this);
            }
        } else if (downKey.isDown || downArrow.isDown) {
            if (downKey.isDown && downKey.duration < 2) {
                if (this.ASGroup.curPos != null && this.ASGroup.curPos + 4 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 4)]]) {
                    this.ASGroup.curPos += 4;
                } else if (this.ASGroup.curPos != null && this.ASGroup.curPos + 8 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 8)]]) {
                    this.ASGroup.curPos += 8;
                }
                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    downKey.duration = 0;
                }, this);
            }
            if (downArrow.isDown && downArrow.duration < 2) {
                if (this.ASGroup.curPos != null && this.ASGroup.curPos + 4 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 4)]]) {
                    this.ASGroup.curPos += 4;
                } else if (this.ASGroup.curPos != null && this.ASGroup.curPos + 8 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 8)]]) {
                    this.ASGroup.curPos += 8;
                }
                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    downArrow.duration = 0;
                }, this);
            }
        } else if (rightKey.isDown || rightArrow.isDown) {
            if (rightKey.isDown && rightKey.duration < 2) {
                if (this.ASGroup.curPos != null && this.ASGroup.curPos + 1 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 1)]]) {
                    this.ASGroup.curPos += 1;
                }  else if (this.ASGroup.curPos != null && this.ASGroup.curPos + 2 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 2)]]) {
                    this.ASGroup.curPos += 2;
                }  else if (this.ASGroup.curPos != null && this.ASGroup.curPos + 3 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 3)]]) {
                    this.ASGroup.curPos += 3;
                }
                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    rightKey.duration = 0;
                }, this);
            }
            if (rightArrow.isDown && rightArrow.duration < 2) {
                if (this.ASGroup.curPos != null && this.ASGroup.curPos + 1 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 1)]]) {
                    this.ASGroup.curPos += 1;
                }  else if (this.ASGroup.curPos != null && this.ASGroup.curPos + 2 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 2)]]) {
                    this.ASGroup.curPos += 2;
                }  else if (this.ASGroup.curPos != null && this.ASGroup.curPos + 3 < 13 && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos + 3)]]) {
                    this.ASGroup.curPos += 3;
                }
                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    rightArrow.duration = 0;
                }, this);
            }
        } else if (leftKey.isDown || leftArrow.isDown) {
            if (leftKey.isDown && leftKey.duration < 2) {
                if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 1)]]) {
                    this.ASGroup.curPos -= 1;
                }  else if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 2)]]) {
                    this.ASGroup.curPos -= 2;
                }  else if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 3)]]) {
                    this.ASGroup.curPos -= 3;
                }
                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    leftKey.duration = 0;
                }, this);
            }
            if (leftArrow.isDown && leftArrow.duration < 2) {
                if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 1)]]) {
                    this.ASGroup.curPos -= 1;
                }  else if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 2)]]) {
                    this.ASGroup.curPos -= 2;
                }  else if (this.ASGroup.curPos != null && this['AS' + this.ASGroup.selPos['pos' + (this.ASGroup.curPos - 3)]]) {
                    this.ASGroup.curPos -= 3;
                }
                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    leftArrow.duration = 0;
                }, this);
            }
        }

        if (this.frameAbil.name != this.ASGroup.selPos['pos' + this.ASGroup.curPos] && this.frameAbil.name != 'none') {
            this.frameAbil.destroy();
            this.frameAbil = this.game.add.sprite(this.game.camera.width - ((this.frame.width - (32 * this.scalingFactor * 1.1)) / 2), 8 + ((this.frame.width - (32 * this.scalingFactor * 1.1)) / 2), this.ASGroup.selPos['pos' + this.ASGroup.curPos]);
            this.frameAbil.anchor.setTo(1,0);
            this.frameAbil.fixedToCamera = true;
            this.frameAbil.scale.setTo(this.scalingFactor * 1.1, this.scalingFactor * 1.1);
            this.frameAbil.name = this.ASGroup.selPos['pos' + this.ASGroup.curPos];
            this.ASGroup.curAbil = this.ASGroup.selPos['pos' + this.ASGroup.curPos];
        }
        else if (this.frameAbil.name == "none") {
            this.frameAbil.destroy();
        }

        if (this.hasItems == true) {
            if (this['AS' + this.ASGroup.selPos['pos' + this.ASGroup.curPos]].x != null) {
                if (this.ASSelector.x != this['AS' + this.ASGroup.selPos['pos' + this.ASGroup.curPos]].x) {
                    this.ASSelector.x = this['AS' + this.ASGroup.selPos['pos' + this.ASGroup.curPos]].x;
                }
                if (this.ASSelector.y != this['AS' + this.ASGroup.selPos['pos' + this.ASGroup.curPos]].y) {
                    this.ASSelector.y = this['AS' + this.ASGroup.selPos['pos' + this.ASGroup.curPos]].y;
                }
            }
        }
    },
    pauseManager: function() {
        if (spaceKey.isDown || enterKey.isDown) {
            if (this.pausePointer.pos == 1) {
                this.pause(this);
            } else if (this.pausePointer.pos == 2) {
                this.save(this);
                this.pause(this);
            } else if (this.pausePointer.pos == 3) {
                this.save(this);
                if (this.fade.alpha == 0) {
                    this.game.add.tween(this.fade).to({alpha: 1}, 500, null, true);
                    if (this.frameAbil != null) {
                        this.frameAbil.name == "none";
                        this.frameAbil.destroy();
                    }
                }
                this.game.time.events.add(Phaser.Timer.SECOND * 0.75, function(){window.location.href = "http://wardenclyffegame.github.io";}, this);
            }
        }

        if (downKey.isDown || downArrow.isDown) {
            if (downKey.isDown && downKey.duration < 1) {
                if (this.pausePointer.pos == 3) {
                    this.pausePointer.pos = 1;
                } else {
                    this.pausePointer.pos += 1;
                }

                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    downKey.duration = 0;
                }, this);
            }
            if (downArrow.isDown && downArrow.duration < 1) {
                if (this.pausePointer.pos == 3) {
                    this.pausePointer.pos = 1;
                } else {
                    this.pausePointer.pos += 1;
                }

                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    downArrow.duration = 0;
                }, this);
            }
        }

        if (upKey.isDown || upArrow.isDown) {
            if (upKey.isDown && upKey.duration < 1) {
                if (this.pausePointer.pos == 1) {
                    this.pausePointer.pos = 3;
                } else {
                    this.pausePointer.pos -= 1;
                }

                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    upKey.duration = 0;
                }, this);
            }
            if (upArrow.isDown && upArrow.duration < 1) {
                if (this.pausePointer.pos == 1) {
                    this.pausePointer.pos = 3;
                } else {
                    this.pausePointer.pos -= 1;
                }

                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function(){
                    upArrow.duration = 0;
                }, this);
            }
        }

        if (this.pausePointer.pos == 1) {
            this.pausePointer.y = (this.game.camera.height / 2) - (this.pauseMenu.height / 12);
        } else if (this.pausePointer.pos == 2) {
            this.pausePointer.y = (this.game.camera.height / 2) + (this.pauseMenu.height / 12);
        } else if (this.pausePointer.pos == 3) {
            this.pausePointer.y = (this.game.camera.height / 2) + (this.pauseMenu.height / 4);
        }
    },
    abilityTrans: function() {
        if (this.ASGroup.stationary == true) {
            if (this.menuState == 'none' || this.menuState == 'ability') {
                if (this.ASGroup.pos == 'up') {
                    this.menuState = 'ability';
                } else if (this.ASGroup.pos == 'down') {
                    this.menuState = 'none';
                }
            }
        }
    },
    mapTrans: function() {
        if (this.mapGroup.stationary == true) {
            if (this.menuState == 'none' || this.menuState == 'map') {
                if (this.mapGroup.pos == 'down') {
                    this.menuState = 'map';
                } else if (this.mapGroup.pos == 'up') {
                    this.menuState = 'none';
                }
            }
        }
    },
    mapAway: function() {
        if (this.mapGroup.pos == 'up') {
            if (this.mapGroup.cameraOffset.y < this.mapGroup.maxH) {
                this.mapGroup.cameraOffset.y += this.game.camera.height / 40;
                this.mapGroup.stationary = false;
            } else {
                this.mapGroup.stationary = true;
                this.mapGroup.pos = 'down';
            }
        }
    },
    pauseAway: function() {
        if (this.pauseGroup.pos == 'there') {
            this.pauseGroup.alpha = 0;
            this.pauseGroup.pos = 'gone';
        }
    },
    abilAway: function() {
        if (this.ASGroup.pos == 'down') {
            if (this.ASGroup.cameraOffset.y > this.ASGroup.maxH + (this.game.camera.height * 0.5)) {
                this.ASGroup.cameraOffset.y -= this.game.camera.height / 40;
                this.ASGroup.stationary = false;
            } else {
                this.ASGroup.stationary = true;
                this.ASGroup.pos = 'up';
            }
        }
    },
    mapShow: function() {
        if (this.mapGroup.cameraOffset.y > this.game.camera.height / 2) {
            this.mapGroup.cameraOffset.y -= this.game.camera.height / 40;
            this.mapGroup.stationary = false;
        } else {
            this.mapGroup.stationary = true;
            this.mapGroup.pos = 'up';
        }
    },
    pauseShow: function() {
        if (this.pauseGroup.pos == 'gone') {
            this.pauseGroup.alpha = 1;
            this.pauseGroup.pos = 'there';
        }
    },
    abilShow: function() {
        if (this.ASGroup.cameraOffset.y < this.ASGroup.maxH + (this.game.camera.height * 1.5)) {
            this.ASGroup.cameraOffset.y += this.game.camera.height / 40;
            this.ASGroup.stationary = false;
        } else {
            this.ASGroup.stationary = true;
            this.ASGroup.pos = 'down';
        }
    },
    updateShadows: function() {
        this.player.lightSprite.reset(this.game.camera.x - (this.game.width * 0.1), this.game.camera.y - (this.game.height * 0.1));
        this.tintRetrieve = Phaser.Color.getRGB(this.player.worldTintReference.tint)
        this.currentTint = Phaser.Color.RGBtoString(this.tintRetrieve.r, this.tintRetrieve.g, this.tintRetrieve.b);
        this.player.shadowTexture.context.fillStyle = this.currentTint;
        this.player.shadowTexture.context.fillRect(0, 0, this.game.width * 1.2, this.game.height * 1.2);

        this.makeHalo(this.player);
        this.makeHalo(this.dummy);
        this.winanWeapon.bullets.forEachExists(this.makeHalo, this);
        this.bombWeapon.bullets.forEachExists(this.makeHalo, this);

        this.player.shadowTexture.dirty = true;
    },
    makeHalo: function(body) {
        body.shadowX = body.centerX - this.game.camera.x + (this.game.width * 0.1);
        body.shadowY = ((body.centerY - (body.height / 32 * 5)) - this.game.camera.y) + (this.game.height * 0.1);
        this.radialGradient = this.player.shadowTexture.context.createRadialGradient(body.shadowX, body.shadowY, (body.lightRadius * (2/3)), body.shadowX, body.shadowY, body.lightRadius)
        this.radialGradient.addColorStop(0, body.lightColor);
        if (body.lightColor.length == 9) {
            body.lightColor2 = body.lightColor.substring(0, body.lightColor.length - 2)
            this.radialGradient.addColorStop(1, body.lightColor2 + '00');
        } else {
            this.radialGradient.addColorStop(1, body.lightColor + '00');
        }
        this.player.shadowTexture.context.beginPath();
        this.player.shadowTexture.context.fillStyle = this.radialGradient;
        this.player.shadowTexture.context.arc(body.shadowX, body.shadowY, body.lightRadius, 0, Math.PI*2);
        this.player.shadowTexture.context.fill();
    },
    /////////////////////////////////////////////DATA FUNCTIONS/////////////////////////////////////////////////////////////////
    pause: function() {
        if (this.mapGroup.pos == 'down' && this.ASGroup.pos == 'up' && this.mapGroup.stationary == true && this.ASGroup.stationary == true) {
            if (this.pauseGroup.pos == 'gone') {
                this.menuState = 'pause';
                this.pauseGroup.alpha = 1;
            } else if (this.pauseGroup.pos == 'there') {
                this.menuState = 'none';
                this.pauseGroup.alpha = 0;
                this.pausePointer.pos = 1;
            }
        }
    },
    save: function() {
        this.playerData.maxHP = this.player.maxHP;
        this.playerData.currentHP = this.player.currentHP;
        this.playerData.maxSteam = this.player.maxSteam;
        this.playerData.currentSteam = this.player.currentSteam;
        this.playerData.maxEnergy = this.player.maxEnergy;
        this.playerData.currentEnergy = this.player.currentEnergy;
        this.playerData.currency = 0;
        this.playerData.newC = this.player.newC;
        this.playerData.bombCount = this.player.bombCount;
        //ability declarations
        this.playerData.hasBomb = this.player.hasBomb;
        this.playerData.hasBoots = this.player.hasBoots;
        this.playerData.hasExoArm = this.player.hasExoArm;
        this.playerData.hasTaserSword = this.player.hasTaserSword;
        this.playerData.hasWinan = this.player.hasWinan;
        this.playerData.hasHook = this.player.hasHook;
        this.playerData.hasSteamShield = this.player.hasSteamShield;
        this.playerData.hasLightRod = this.player.hasLightRod;
        this.playerData.hasBoomerang = this.player.hasBoomerang;
        this.playerData.hasGreekFire = this.player.hasGreekFire;
        this.playerData.hasStunBaton = this.player.hasStunBaton;
        this.playerData.hasHammer = this.player.hasHammer;
        this.playerData.hasTurbine = this.player.hasTurbine;
        this.playerData.hasDefib = this.player.hasDefib;
        this.playerData.hasJar = this.player.hasJar;
        this.playerData.curAbil = this.ASGroup.selPos['pos' + this.ASGroup.curPos] || this.player.curAbil;
        this.playerData.TOD = this.trueTOD;
        this.playerData.map = "Debug";
        window.localStorage.setItem('playerData', JSON.stringify(this.playerData));
    }
};

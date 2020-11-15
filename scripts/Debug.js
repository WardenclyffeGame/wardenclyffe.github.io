var steamGame = steamGame || {}

steamGame.Game = function(){}

steamGame.Game.prototype = {
    /*init: function(startingHP) {
        this.player = this.player || {};
        this.player.maxHP = startingHP;
    },*/

    create: function(){

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
        startKey = this.game.input.keyboard.addKey(69) // e
        mapKey = this.game.input.keyboard.addKey(81) // q
        debugKey = this.game.input.keyboard.addKey(48); // 0

        //begin scene setup
        this.game.stage.backgroundColor = '#acbfbc';
        this.scalingFactor = (this.game.world.width / 19) / 32;
        this.map = this.game.add.tilemap('debugMap');
        this.map.addTilesetImage('TileSets', 'debugTiles');
        this.floor = this.map.createLayer('floor');
        this.floor.setScale(this.scalingFactor);
        this.wall = this.map.createLayer('wall');
        this.wall.setScale(this.scalingFactor);
        this.game.physics.arcade.enable(this.wall);
        //this.wall.debug = true;
        this.map.setCollisionBetween(4, 17, true, 'wall');
        this.floor.resizeWorld();

        //menustate declarations
        this.menuState = 0;

        //set scene boundary
        //this.game.world.setBounds(0, 0, this.game.world.width, this.game.world.height);
 
        //player declaration
        this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'milutin');
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
        this.game.physics.arcade.enable(this.player);
        this.player.body.enbable = true;
        this.player.speed = (this.game.world.width / 13.66);
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
        //this.player.swipe.body.setSize(this.player.body.width, this.player.body.height);

        //ui declaration
        this.player.maxHP = this.playerData.maxHP || 6;
        this.player.currentHP = this.playerData.currentHP || this.player.maxHP;
        this.player.maxSteam = this.playerData.maxSteam || 100;
        this.player.currentSteam = this.playerData.currentSteam || this.player.maxSteam;
        this.player.maxEnergy = this.playerData.maxEnergy || 100;
        this.player.currentEnergy = this.playerData.currentEnergy || this.player.maxEnergy;
        this.player.currency = this.playerData.currency || 0;
        this.player.currencyData = {};
        this.player.newC = this.player.currency;

        this.player.timer = 75;
        this.player.newSLevel = 0;
        this.player.newELevel = 0;
        this.player.state = 'walk';

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

        

    },
    update: function(){
        /***************************************** Collision handler for player vs. layers and debug text ***************************************************************/
        
        if (debugKey.isDown) {
            this.game.debug.text('True health: ' + this.player.currentHP, this.game.world.centerX - 150, this.game.camera.height - 150, null, 'rgb(0, 0, 0)');
            this.game.debug.text('Health collision timer: ' + this.player.timer, this.game.world.centerX - 150, this.game.camera.height - 135, null, 'rgb(0, 0, 0)');
            this.game.debug.text('True steam level: ' + this.player.currentSteam, this.game.world.centerX - 150, this.game.camera.height - 120, null, 'rgb(0, 0, 0)');
            this.game.debug.text('Steam counter timer:' + this.player.newSLevel, this.game.world.centerX - 150, this.game.camera.height - 105, null, 'rgb(0, 0, 0)');
            this.game.debug.text('True energy: ' + this.player.currentEnergy, this.game.world.centerX - 150, this.game.camera.height - 90, null, 'rgb(0, 0, 0)');
            this.game.debug.text('Currency: ' + (this.player.currency + 10), this.game.world.centerX - 150, this.game.camera.height - 75, null, 'rgb(0, 0, 0)');
            this.game.debug.text('Currency change: ' + (this.player.newC + 10), this.game.world.centerX - 150, this.game.camera.height - 60, null, 'rgb(0, 0, 0)');
            this.game.debug.text('Active direction: ' + this.direction, this.game.world.centerX - 150, this.game.camera.height - 45, null, 'rgb(0, 0, 0)');

            this.game.debug.body(this.player);
            this.game.debug.body(this.player.swipe);
            
            if (this.player.currency < 9990) {
                this.player.newC += 10;
            } else if (this.player.currency >= 9990 && this.player.currency < 9999){
                this.player.newC += 1;
            }
        }

        //this.game.physics.arcade.collide(this.player, this.wall, this.debugHurt);
        //this.game.physics.arcade.collide(this.player, this.wall, this.debugSteam);
        this.game.physics.arcade.collide(this.player, this.wall, this.debugElec);
        if (this.menuState == 0) {
            /***************************************** Player HP manager ******************************************************************************************/
            if (this.player.currentHP < this.player.maxHP) {
                this.player.diffHP = this.player.maxHP - this.player.currentHP;
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
                if (this.diffHP == this.maxHP) {
                    //game over script
                }
            }

            /***************************************** Player Steam Handler **********************************************************************************************/
            if (this.player.currentSteam < this.player.maxSteam) {
                this.diffSteam = this.player.currentSteam / this.player.maxSteam;
                this.steamLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * (0.65 * this.diffSteam));
                this.steamLevel.y += this.diffSteam * this.scalingFactor * 0.65
            } else {
                this.steamLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * 0.65);
            }

            /***************************************** Player Electricity Handler **********************************************************************************************/
            if (this.player.currentEnergy < this.player.maxEnergy) {
                this.diffEnergy = this.player.currentEnergy / this.player.maxEnergy;
                this.elecLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * (0.65 * this.diffEnergy));
                this.elecLevel.y += this.diffEnergy * this.scalingFactor * 0.65
            } else {
                this.elecLevel.scale.setTo(this.scalingFactor * 0.65, this.scalingFactor * 0.65);
            }

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


            /***************************************** Player Movement Handling ******************************************************************************************/
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            this.player.swipe.body.velocity.x = 0;
            this.player.swipe.body.velocity.y = 0;
            if (this.player.state == 'walk') {
                if (upKey.isDown || upArrow.isDown) {
                    this.player.body.velocity.y = -this.player.speed * 0.9;
                    this.player.swipe.body.velocity.y = -this.player.speed * 0.9;
                } else if (downKey.isDown || downArrow.isDown) {
                    this.player.body.velocity.y = this.player.speed * 0.9;
                    this.player.swipe.body.velocity.y = this.player.speed * 0.9;
                }
                if (rightKey.isDown || rightArrow.isDown) {
                    this.player.body.velocity.x = this.player.speed * 1.2;
                    this.player.swipe.body.velocity.x = this.player.speed * 1.2;
                } else if (leftKey.isDown || leftArrow.isDown) {
                    this.player.body.velocity.x = -this.player.speed * 1.2;
                    this.player.swipe.body.velocity.x = -this.player.speed * 1.2;
                }
            }
            if(spaceKey.isDown && this.player.state == 'walk') {
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
                this.game.time.events.add(Phaser.Timer.SECOND * 0.350, function(){
                    this.player.state = 'walk';
                    this.animationName = "stopped";
                }, this);
            }

            /************************************** Animation Controller for Player movement *****************************************************************************/
            this.direction = this.direction || 'down';
            if (this.player.state == 'walk') {
                this.animationName = "stopped";
                if (this.player.body.velocity.x < 0) {
                    this.animationName = 'runLeft';
                    this.direction = 'left';
                    this.player.swipe.x = this.player.x - (this.player.body.width / 2);
                    this.player.swipe.y = this.player.y + (this.player.height / 2);
                    this.player.swipe.anchor.setTo(1, 1.35);
                    this.player.swipe.width = 18 * this.scalingFactor;
                    this.player.swipe.height = this.player.body.height;
                    if (this.player.scale.x < 0) {
                        this.player.scale.x = this.player.scale.x * -1;
                    }
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
                        this.player.scale.x = this.player.scale.x * -1;
                    }
                }
                if (this.player.body.velocity.y < 0) {
                    this.animationName = 'runUp';
                    this.direction = 'up';
                    this.player.swipe.x = this.player.body.x - (this.player.body.width * 0.25);
                    this.player.swipe.y = this.player.body.y;
                    this.player.swipe.anchor.setTo(0, 0.6);
                    this.player.swipe.width = this.player.body.width * 1.5;
                    this.player.swipe.height = 34 * this.scalingFactor;
                }
                if (this.player.body.velocity.y > 0) {
                    this.animationName = 'runDown';
                    this.direction = 'down';
                    this.player.swipe.x = this.player.body.x - (this.player.body.width * 0.25);
                    this.player.swipe.y = this.player.body.y + this.player.body.height;
                    this.player.swipe.anchor.setTo(0, 0.8);
                    this.player.swipe.width = this.player.body.width * 1.5;
                    this.player.swipe.height = 42 * this.scalingFactor;
                }
            }
            if (this.direction == 'left') {
                if (this.player.scale.x < 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
            if (this.direction == 'right') {
                if (this.player.scale.x > 0) {
                    this.player.scale.x = this.player.scale.x * -1;
                }
            }
            //change current animation
            if (this.player.animations.name !== this.animationName && this.animationName !== 'stopped') {
                this.player.animations.play(this.animationName, 12, true);
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
        }
    },
    debugHurt: function(player, walls) {
        player.timer += 1;
        if(player.timer === 100) {
            player.timer = 0;
            player.currentHP -= 1;
        }
    },
    debugSteam: function(player, walls) {
        /*if (player.currentSteam < player.maxSteam) {
            player.newSLevel += 0.1;
            if (player.newSLevel >= 1) {
                player.currentSteam ++;
                player.newSLevel = 0;
            }
        }*/
        if (player.currentSteam > 0) {
            player.newSLevel -= 0.1;
            if (player.newSLevel <= -1) {
                player.currentSteam --;
                player.newSLevel = 0;
            }
        }
    },
    debugElec: function(player, walls) {
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
    }
};

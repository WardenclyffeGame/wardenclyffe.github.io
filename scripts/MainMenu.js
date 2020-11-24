steamGame.MainMenu = function() {};

steamGame.MainMenu.prototype = {
    create: function() {
        this.starting = false;
        this.menustate = false;
        this.pointerPos = 0;

        this.game.stage.backgroundColor = '#75a1a0';

        this.backBlimp = this.game.add.sprite(this.game.world.centerX + 192, (this.game.world.centerY / 2), 'menuBlimp');
        this.backBlimp.anchor.setTo(0, 0.5);
        this.backBlimp.scale.setTo(0.5, 0.5);
        this.backBlimp.animations.add('float');
        this.backBlimp.animations.play('float', 8, true);

        this.backBall2 = this.game.add.sprite(160, this.game.world.height, 'menuBall2');
        this.backBall2.anchor.setTo(0, 0.95);
        this.backBall2.scale.setTo(0.2, 0.2);
        this.backBall2.animations.add('float');
        this.backBall2.animations.play('float', 6, true);

        //cloud script
        for (var i = 0; i < 3; i++) {

            var xs = [this.game.world.width + 800, this.game.world.width + 200, this.game.world.width + 1400];
            var sprites = [0, 1, 2, 3, 4, 5, 6];
            var height = this.game.world.height;
            function xAry() { return xs[Math.floor(Math.random() * xs.length)]; }
            function yAry() { return Math.floor(Math.random() * (height - 100));}
            function spriteAry() { return sprites[Math.floor(Math.random() * sprites.length)]; }

            this['cloud' + i.toString()] = this.game.add.sprite(xAry(), yAry(), 'clouds');
            this['cloud' + i.toString()].frame = spriteAry();
            this['cloud' + i.toString()].anchor.setTo(1.1, 0.1);
        }

        this.backBall1 = this.game.add.sprite(180, this.game.world.height, 'menuBall1');
        this.backBall1.anchor.setTo(0, 0.95);
        this.backBall1.scale.setTo(0.3, 0.3);
        this.backBall1.animations.add('float', [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        this.backBall1.animations.play('float', 6, true);

        this.titlePart0 = this.game.add.sprite(this.game.world.centerX - 520, (this.game.world.centerY / 2) - 32, 'title');
        this.titlePart1 = this.game.add.sprite(this.titlePart0.x + this.titlePart0.width - 16, this.titlePart0.y, 'title');
            this.titlePart1.frame = 1;
        this.titlePart2 = this.game.add.sprite(this.titlePart1.x + this.titlePart1.width - 24, this.titlePart0.y, 'title');
            this.titlePart2.frame = 2;
        this.titlePart3 = this.game.add.sprite(this.titlePart2.x + this.titlePart2.width - 16, this.titlePart0.y, 'title');
            this.titlePart3.frame = 3;
        this.titlePart4 = this.game.add.sprite(this.titlePart3.x + this.titlePart3.width - 24, this.titlePart0.y, 'title');
            this.titlePart4.frame = 4;
        this.titlePart5 = this.game.add.sprite(this.titlePart4.x + this.titlePart4.width - 16, this.titlePart0.y, 'title');
            this.titlePart5.frame = 5;
        this.titlePart6 = this.game.add.sprite(this.titlePart3.x + this.titlePart3.width, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart6.frame = 6;
        this.titlePart7 = this.game.add.sprite(this.titlePart6.x + this.titlePart6.width - 20, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart7.frame = 7;
        this.titlePart8 = this.game.add.sprite(this.titlePart7.x + this.titlePart7.width - 16, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart8.frame = 8;
        this.titlePart9 = this.game.add.sprite(this.titlePart8.x + this.titlePart8.width, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart9.frame = 9;
        this.titlePart10 = this.game.add.sprite(this.titlePart9.x + this.titlePart9.width - 16, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart10.frame = 10;
        this.titlePart11 = this.game.add.sprite(this.titlePart10.x + this.titlePart8.width - 24, this.titlePart3.y + this.titlePart3.height, 'title');
            this.titlePart11.frame = 11;

        this.menuBGround2 = this.game.add.sprite(this.game.world.width + 2, this.game.world.height * 2, 'menuBG2');
        this.menuBGround2.anchor.setTo(1, 1);
        this.menuBGSizingVar = ((this.game.world.width / 10) * 3.5) / this.menuBGround2.width;
        this.menuBGround2.scale.setTo(this.menuBGSizingVar, this.menuBGSizingVar);

        this.menuBack = this.game.add.sprite(this.game.world.centerX, this.backBall1.y, 'plaque');
        this.menuBack.anchor.setTo(0.5, 0);
        this.menuSizingVarX = ((this.game.world.width / 10) * 7) / this.menuBack.width;
        this.menuSizingVarY = ((this.game.world.height / 10) * 9.5) / this.menuBack.height;
        this.menuBack.scale.setTo(this.menuSizingVarX, this.menuSizingVarY);

        //this.game.load.bitmapFont('pixelFont', 'sprites/pixelFont.png', 'sprites/pixelFont.fnt');
        this.startText = this.game.add.bitmapText(this.game.world.centerX, this.game.world.height * 0.75, 'pixelFont', 'Press space to begin.', 48);
        this.startText.anchor.setTo(0.5, 0.5);

        this.menuText1 = this.game.add.bitmapText(this.game.world.centerX, this.game.world.height * 1.2, 'pixelFont', 'Wardenclyffe', 80);
        this.menuText1.anchor.setTo(0.5, 0.5);
        this.menuText2 = this.game.add.bitmapText(this.game.world.centerX, this.game.world.height * 1.4, 'pixelFont', 'New Game', 40);
        this.menuText2.anchor.setTo(0.5, 0.5);
        this.menuText3 = this.game.add.bitmapText(this.game.world.centerX, this.game.world.height * 1.5, 'pixelFont', 'Continue Game', 40);
        this.menuText3.anchor.setTo(0.5, 0.5);
        this.menuText4 = this.game.add.bitmapText(this.game.world.centerX, this.game.world.height * 1.6, 'pixelFont', 'Exit Game', 40);
        this.menuText4.anchor.setTo(0.5, 0.5);

        this.menuPointer = this.game.add.sprite(this.menuText2.x - this.menuText2.width - 30, this.menuText2.y, 'menuPointer');
        this.menuPointer.anchor.setTo(0.5, 0.5);
        this.menuPointer.animations.add('spin', [0, 0, 1, 2, 3, 4, 4, 3, 2, 1]);

        this.menuBGround1 = this.game.add.sprite(-2, this.game.world.height * 2, 'menuBG');
        this.menuBGround1.anchor.setTo(0, 1);
        this.menuBGround1.scale.setTo(this.menuBGSizingVar, this.menuBGSizingVar);
        this.menuBGround1.animations.add('zap', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 0]);
    
        space = this.game.input.keyboard.addKey(32);
        upArrow = this.game.input.keyboard.addKey(38);
        downArrow = this.game.input.keyboard.addKey(40);
        upKey = this.game.input.keyboard.addKey(87);
        downKey = this.game.input.keyboard.addKey(83);
        enterKey = this.game.input.keyboard.addKey(13);
        skipKey = this.game.input.keyboard.addKey(48); //debug key

        //default data
        this.defaultData ={
            maxHP: 6,
            maxSteam: 100,
            maxEnergy: 50,
            currency: 0,
        };
    },

    update: function() {
        if(space.isDown && this.starting == false) {
          //this.game.state.start('Saves');
          this.starting = true;
          /*this.backBlimp.animations.pause('float');
          this.backBall1.animations.pause('float');
          this.backBall2.animations.pause('float');*/
          //if (this.menustate == false) {
              /*this.menuBack = this.game.add.sprite(this.game.world.centerX, (this.game.world.height * 1.5), 'plaque');
              this.menuBack.anchor.setTo(0.5, 0);*/

          //}
        }
        //debugkey handler
        if (skipKey.isDown) {
            this.game.state.states['Debug'].playerData = this.defaultData;
            this.game.state.start('Debug');
        }

        if (this.starting != true) {
            if(this['cloud0'].x > 0) {
                this['cloud0'].x -= 1.2;
            } else {
                var sprites = [0, 1, 2, 3, 4, 5, 6];
                function spriteAry() { return sprites[Math.floor(Math.random() * sprites.length)]; }
                this['cloud0'].x = this.game.world.width + 200 + (Math.floor(Math.random() * 800));
                this['cloud0'].y = Math.floor(Math.random() * (this.game.world.height - 100));
                this['cloud0'].frame =  spriteAry();
            }
            if(this['cloud1'].x > 0) {
                this['cloud1'].x -= 1;
            } else {
                var sprites = [0, 1, 2, 3, 4, 5, 6];
                function spriteAry() { return sprites[Math.floor(Math.random() * sprites.length)]; }
                this['cloud1'].x = this.game.world.width + 200 + (Math.floor(Math.random() * 800));
                this['cloud1'].y = Math.floor(Math.random() * (this.game.world.height - 100));
                this['cloud1'].frame =  spriteAry();
            }
            if(this['cloud2'].x > 0) {
                this['cloud2'].x -= 0.8;
            } else {
                var sprites = [0, 1, 2, 3, 4, 5, 6];
                function spriteAry() { return sprites[Math.floor(Math.random() * sprites.length)]; }
                this['cloud2'].x = this.game.world.width + 200 + (Math.floor(Math.random() * 800));
                this['cloud2'].y = Math.floor(Math.random() * (this.game.world.height - 100));
                this['cloud2'].frame =  spriteAry();
            }
        }
        if (this.starting == true) {
            if(this['cloud0'].x > 0) {
                this['cloud0'].x -= 1.2;
                this['cloud0'].y -= 3.2;
            } else {
                this['cloud0'].destroy();
            }
            if(this['cloud1'].x > 0) {
                this['cloud1'].x -= 1;
                this['cloud1'].y -= 3.2;
            } else {
                this['cloud1'].destroy();
            }
            if(this['cloud2'].x > 0) {
                this['cloud2'].x -= 0.8;
                this['cloud2'].y -= 3.2;
            } else {
                this['cloud2'].destroy();
            }
            if(this.backBlimp.y + this.backBlimp.height > 0) {
                this.backBlimp.y -= 3.2;
            } else {
                this.backBlimp.destroy();
            }
            if(this.menuBack.y + (this.menuBack.height / 2) > this.game.world.height / 2) {
                this.backBall1.y -= 3.9;
                this.backBall2.y -= 3.9;
                this.menuBack.y -= 3.9;
                this.menuText1.y -= 3.9;
                this.menuText2.y -= 3.9;
                this.menuText3.y -= 3.9;
                this.menuText4.y -= 3.9;
                this.menuPointer.y -= 3.9;
            } else {
                this.menuState = true;
            }
            if(this.menuBGround1.y > this.game.world.height + 4) {
                this.menuBGround1.y -= 4.2;
            } else {
                if((Math.floor(Math.random() * 600) < 5) && (this.menuBGround1.animations.isPlaying != true)) {
                    this.menuBGround1.animations.play('zap', 10, false);
                }
            }
            if(this.menuBGround2.y > this.game.world.height + 2) {
                this.menuBGround2.y -= 4.2;
            } else if (this.menuBGround2.y <= this.game.world.height + 2) {
                this.menuState = true;
            }
            if(this.startText.alive == true) {
                this.startText.destroy();
            }
            if(this.titlePart0.y + 600 > 0) {
                this.titlePart0.y -= 2.5;
                this.titlePart1.y -= 2.5;
                this.titlePart2.y -= 2.5;
                this.titlePart3.y -= 2.5;
                this.titlePart4.y -= 2.5;
                this.titlePart5.y -= 2.5;
                this.titlePart6.y -= 2.5;
                this.titlePart7.y -= 2.5;
                this.titlePart8.y -= 2.5;
                this.titlePart9.y -= 2.5;
                this.titlePart10.y -= 2.5;
                this.titlePart11.y -= 2.5;
            } else {
                this.titlePart0.destroy();
                this.titlePart1.destroy();
                this.titlePart2.destroy();
                this.titlePart3.destroy();
                this.titlePart4.destroy();
                this.titlePart5.destroy();
                this.titlePart6.destroy();
                this.titlePart7.destroy();
                this.titlePart8.destroy();
                this.titlePart9.destroy();
                this.titlePart10.destroy();
                this.titlePart11.destroy();
            }
        }

        if (this.menuState == true) {
            if (this.menuPointer.animations.isPlaying != true) {
                this.menuPointer.animations.play('spin', 12, true);
            }
            if (downArrow.duration < 1) {
                if (downArrow.isDown) {
                    if (this.pointerPos < 2) {
                        this.pointerPos += 1;
                    } else {
                        this.pointerPos = 0;
                    }
                }
            }
            if (downKey.duration < 1) {
                if (downKey.isDown) {
                    if (this.pointerPos < 2) {
                        this.pointerPos += 1;
                    } else {
                        this.pointerPos = 0;
                    }
                }
            }
            if (upArrow.duration < 1) {
                if (upArrow.isDown) {
                    if (this.pointerPos > 0) {
                        this.pointerPos -= 1;
                    } else {
                        this.pointerPos = 2;
                    }
                }
            }
            if (upKey.duration < 1) {
                if (upKey.isDown) {
                    if (this.pointerPos > 0) {
                        this.pointerPos -= 1;
                    } else {
                        this.pointerPos = 2;
                    }
                }
            }
            if (this.pointerPos == 0) {
                this.menuPointer.y = this.menuText2.y
                if (enterKey.isDown) {
                    //enter default save state loading later, for now just start game
                    this.game.state.states['Debug'].playerData = this.defaultData
                    this.game.state.start('Debug');
                }
                if (space.isDown) {
                    //enter default save state loading later, for now just start game
                    this.game.state.states['Debug'].playerData = this.defaultData
                    this.game.state.start('Debug');
                }
            }
            else if (this.pointerPos == 1) {
                this.menuPointer.y = this.menuText3.y;
                if (JSON.parse(window.localStorage.getItem('playerData')) != null) {
                    if (enterKey.isDown) {
                        //enter default save state loading later, for now just start game
                        this.game.state.states['Debug'].playerData = JSON.parse(window.localStorage.getItem('playerData'));
                        this.game.state.start('Debug');
                    }
                    if (space.isDown) {
                        //enter default save state loading later, for now just start game
                        this.game.state.states['Debug'].playerData = JSON.parse(window.localStorage.getItem('playerData'));
                        this.game.state.start('Debug');
                    }
                }
            }
            else if (this.pointerPos == 2) {
                this.menuPointer.y = this.menuText4.y
                if (enterKey.isDown) {
                    window.location.href = "http://wardenclyffegame.github.io";
                }
                if (space.isDown) {
                    window.location.href = "http://wardenclyffegame.github.io";
                }
            }
        }
    }
}

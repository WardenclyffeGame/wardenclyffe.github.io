//placeholder text :)

//for sheen and ryan, this creates a safety net, 
//if the var doesnt exist to be defined as itself, it creates an empty object in its place
//this way the code will never return an undefined on something so vital as the game itself
var steamGame = steamGame || {};

//this basically creates our viewing window and defines a max size, then phaser auto scales it
steamGame.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

//addressing the predefined states from phaser
//namely boot up, preload, menu, and game
steamGame.game.state.add('Boot', steamGame.Boot);
//since the rest don't exist yet, I'm keeping them out
steamGame.game.state.add('Preload', steamGame.Preload);
steamGame.game.state.add('MainMenu', steamGame.MainMenu);
//steamGame.game.state.add('Saves', steamGame.Saves);
steamGame.game.state.add('Debug', steamGame.Game); // initial Berlin scene with berlin under attack

//running the first state in the sequence
steamGame.game.state.start('Boot');
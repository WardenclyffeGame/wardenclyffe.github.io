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

        //load actual ../sprites and ../spritesheets (placeholder stock images for now)
        this.load.atlasJSONHash('menuBlimp', '../sprites/images/blimp.png', '../sprites/images/blimp.json');
            this.load.atlasJSONHash('menuBall1', '../sprites/images/hotairballoon.png', '../sprites/images/hotairballoon.json');
		this.load.atlasJSONHash('title', '../sprites/images/TitleSplashAlt.png', "../sprites/images/TitleSplashAlt.json");
            this.load.atlasJSONHash('menuBall2', '../sprites/images/hotairballoon2.png', '../sprites/images/hotairballoon2.json');
        this.load.atlasJSONHash('clouds', '../sprites/images/clouds.png', '../sprites/images/clouds.json');
            this.load.image('plaque', '../maps/menuMapping.png');
        this.load.atlasJSONHash('menuBG', '../sprites/images/titleWarden.png', '../sprites/images/titleWarden.json');
            this.load.image('menuBG2', '../sprites/images/title2.png');
        this.load.atlasJSONHash('menuPointer', '../sprites/images/menuPointer.png', '../sprites/images/menuPointer.json');
        //this.load.atlasJSONHash('protest', '../sprites/game/testingProtag.png', '../sprites/game/testingProtag.json');
            this.load.image('black', '../sprites/game/black.png');
        this.load.atlasJSONHash('heart', '../sprites/game/heart.png', '../sprites/game/jsonKeys/heart.json');
            this.load.atlasJSONHash('steamMeter', '../sprites/game/steamMeter.png', '../sprites/game/jsonKeys/steamMeter.json');
        this.load.atlasJSONHash('elecMeter', '../sprites/game/ElectricMeter.png', '../sprites/game/jsonKeys/ElectricMeter.json');
            this.load.atlasJSONHash('ticker', '../sprites/game/ticker.png', '../sprites/game/jsonKeys/ticker.json');
        this.load.image('frame', '../sprites/game/frame.png');
            this.load.atlasJSONHash('milutin', '../sprites/game/milutinSheet.png', '../sprites/game/jsonKeys/milutinSheet.json');
        this.load.image('KronaL', '../sprites/game/kronaLogo.png');
            this.load.image('KronaG', '../sprites/game/kronaG.png');
        this.load.image('KronaS', '../sprites/game/kronaS.png');
            this.load.image('KronaZ', '../sprites/game/kronaZ.png');
        this.load.atlasJSONHash('Bomb', '../sprites/game/Bomb.png', '../sprites/game/jsonKeys/Bomb.json');
            this.load.image('abilityBack', '../sprites/game/abilityMenu.png');
        this.load.atlasJSONHash('Boots', '../sprites/game/Boots.png', '../sprites/game/jsonKeys/Boots.json');
            this.load.atlasJSONHash('Hook', '../sprites/game/Hook.png', '../sprites/game/jsonKeys/Hook.json');
        this.load.atlasJSONHash('LightRod', '../sprites/game/lightRod.png', '../sprites/game/jsonKeys/lightRod.json');
            this.load.atlasJSONHash('Winan', '../sprites/game/winan.png', '../sprites/game/jsonKeys/winan.json');
        this.load.atlasJSONHash('SteamShield', '../sprites/game/steamShield.png', '../sprites/game/jsonKeys/steamShield.json');
            this.load.atlasJSONHash('Boomerang', '../sprites/game/Boomerang.png', '../sprites/game/jsonKeys/Boomerang.json');
        this.load.atlasJSONHash('GreekFire', '../sprites/game/GreekFire.png', '../sprites/game/jsonKeys/GreekFire.json');
            this.load.atlasJSONHash('ExoArm', '../sprites/game/ExoArm.png', '../sprites/game/jsonKeys/ExoArm.json');
        this.load.atlasJSONHash('menuSword', '../sprites/game/Sword.png', '../sprites/game/jsonKeys/Sword.json');
            this.load.image('mapOverworld', '../maps/worldMapBack.png');
        this.load.image('selector', '../sprites/game/selector.png');
            this.load.image('Council', '../sprites/game/Council.png');
        this.load.atlasJSONHash('milutinHead', '../sprites/game/milutinHead.png', '../sprites/game/jsonKeys/milutinHead.json');
            this.load.atlasJSONHash('StunBaton', '../sprites/game/StunBaton.png', '../sprites/game/jsonKeys/StunBaton.json');
        this.load.atlasJSONHash('Dummy', '../sprites/game/Dummy.png', '../sprites/game/jsonKeys/Dummy.json');
            this.load.atlasJSONHash('Hammer', '../sprites/game/Hammer.png', '../sprites/game/jsonKeys/Hammer.json');
        this.load.atlasJSONHash('Defib', '../sprites/game/Defib.png', '../sprites/game/jsonKeys/Defib.json');
            this.load.atlasJSONHash('Jar', '../sprites/game/Jar.png', '../sprites/game/jsonKeys/Jar.json');
        this.load.atlasJSONHash('Turbine', '../sprites/game/Turbine.png', '../sprites/game/jsonKeys/Turbine.json');
            this.load.atlasJSONHash('steamBullet', '../sprites/game/steamBullet.png', '../sprites/game/jsonKeys/steamBullet.json');
        this.load.image('HPPot', '../sprites/game/HPPot.png');
            this.load.image('coal', '../sprites/game/coalTest.png');
        this.load.image('battery', '../sprites/game/battTest.png');
            this.load.atlasJSONHash('Hourglass', '../sprites/game/Hourglass.png', '../sprites/game/jsonKeys/Hourglass.json');
        this.load.image('diaWindow', '../sprites/game/dialogueWindow.png');
            this.load.atlasJSONHash('keyboard', '../sprites/game/keys.png', '../sprites/game/jsonKeys/keys.json');
    },
    create: function() {
        this.state.start('MainMenu');
    } 
}; 



// DONT TOUCH BELOW THIS!!!! IT IS MULTI THREAD CRAP

!function() {

	var URL = window.URL || window.webkitURL;
	if(!URL) {
		throw new Error('This browser does not support Blob URLs');
	}

	if(!window.Worker) {
		throw new Error('This browser does not support Web Workers');
	}

	function Multithread(threads) {
		this.threads = Math.max(2, threads | 0);
		this._queue = [];
		this._queueSize = 0;
		this._activeThreads = 0;
		this._debug = {
			start: 0,
			end: 0,
			time: 0
		};
	}

	Multithread.prototype._worker = {
		JSON: function() {
			var /**/name/**/ = (/**/func/**/);
			self.addEventListener('message', function(e) {
				var data = e.data;
				var view = new DataView(data);
				var len = data.byteLength;
				var str = Array(len);
				for(var i=0;i<len;i++) {
					str[i] = String.fromCharCode(view.getUint8(i));
				}
				var args = JSON.parse(str.join(''));
				var value = (/**/name/**/).apply(/**/name/**/, args);
				try {
					data = JSON.stringify(value);
				} catch(e) {
					throw new Error('Parallel function must return JSON serializable response');
				}
				len = typeof(data)==='undefined'?0:data.length;
				var buffer = new ArrayBuffer(len);
				view = new DataView(buffer);
				for(i=0;i<len;i++) {
					view.setUint8(i, data.charCodeAt(i) & 255);
				}
				self.postMessage(buffer, [buffer]);
				self.close();
			})
		},
		Int32: function() {
			var /**/name/**/ = (/**/func/**/);
			self.addEventListener('message', function(e) {
				var data = e.data;
				var view = new DataView(data);
				var len = data.byteLength / 4;
				var arr = Array(len);
				for(var i=0;i<len;i++) {
					arr[i] = view.getInt32(i*4);
				}
				var value = (/**/name/**/).apply(/**/name/**/, arr);
				if(!(value instanceof Array)) { value = [value]; }
				len = value.length;
				var buffer = new ArrayBuffer(len * 4);
				view = new DataView(buffer);
				for(i=0;i<len;i++) {
					view.setInt32(i*4, value[i]);
				}
				self.postMessage(buffer, [buffer]);
				self.close();
			})
		},
		Float64: function() {
			var /**/name/**/ = (/**/func/**/);
			self.addEventListener('message', function(e) {
				var data = e.data;
				var view = new DataView(data);
				var len = data.byteLength / 8;
				var arr = Array(len);
				for(var i=0;i<len;i++) {
					arr[i] = view.getFloat64(i*8);
				}
				var value = (/**/name/**/).apply(/**/name/**/, arr);
				if(!(value instanceof Array)) { value = [value]; }
				len = value.length;
				var buffer = new ArrayBuffer(len * 8);
				view = new DataView(buffer);
				for(i=0;i<len;i++) {
					view.setFloat64(i*8, value[i]);
				}
				self.postMessage(buffer, [buffer]);
				self.close();
			})
		}
	};

	Multithread.prototype._encode = {
		JSON: function(args) {
			try {
				var data = JSON.stringify(args);
			} catch(e) {
				throw new Error('Arguments provided to parallel function must be JSON serializable');
			}
			len = data.length;
			var buffer = new ArrayBuffer(len);
			var view = new DataView(buffer);
			for(var i=0;i<len;i++) {
				view.setUint8(i, data.charCodeAt(i) & 255);
			}
			return buffer;
		},
		Int32: function(args) {
			len = args.length;
			var buffer = new ArrayBuffer(len*4);
			var view = new DataView(buffer);
			for(var i=0;i<len;i++) {
				view.setInt32(i*4, args[i]);
			}
			return buffer;
		},
		Float64: function(args) {
			len = args.length;
			var buffer = new ArrayBuffer(len*8);
			var view = new DataView(buffer);
			for(var i=0;i<len;i++) {
				view.setFloat64(i*8, args[i]);
			}
			return buffer;
		}
	};

	Multithread.prototype._decode = {
		JSON: function(data) {
			var view = new DataView(data);
			var len = data.byteLength;
			var str = Array(len);
			for(var i=0;i<len;i++) {
				str[i] = String.fromCharCode(view.getUint8(i));
			}
			if(!str.length) {
				return;
			} else {
				return JSON.parse(str.join(''));
			}
		},
		Int32: function(data) {
			var view = new DataView(data);
			var len = data.byteLength / 4;
			var arr = Array(len);
			for(var i=0;i<len;i++) {
				arr[i] = view.getInt32(i*4);
			}
			return arr;
		},
		Float64: function(data) {
			var view = new DataView(data);
			var len = data.byteLength / 8;
			var arr = Array(len);
			for(var i=0;i<len;i++) {
				arr[i] = view.getFloat64(i*8);
			}
			return arr;
		},
	};

	Multithread.prototype._execute = function(resource, args, type, callback) {
		if(!this._activeThreads) {
			this._debug.start = (new Date).valueOf();
		}
		if(this._activeThreads < this.threads) {
			this._activeThreads++;
			var t = (new Date()).valueOf();
			var worker = new Worker(resource);
			var buffer = this._encode[type](args);
			var decode = this._decode[type];
			var self = this;
			if(type==='JSON') {
				var listener = function(e) {
					callback.call(self, decode(e.data));
					self.ready();
				};
			} else {
				var listener = function(e) {
					callback.apply(self, decode(e.data));
					self.ready();
				};
			}
			worker.addEventListener('message', listener);
			worker.postMessage(buffer, [buffer]);
		} else {
			this._queueSize++;
			this._queue.push([resource, args, type, callback]);
		}
	};

	Multithread.prototype.ready = function() {
		this._activeThreads--;
		if(this._queueSize) {
			this._execute.apply(this, this._queue.shift());
			this._queueSize--;
		} else if(!this._activeThreads) {
			this._debug.end = (new Date).valueOf();
			this._debug.time = this._debug.end - this._debug.start;
		}
	};

	Multithread.prototype._prepare = function(fn, type) {

		fn = fn;

		var name = fn.name;
		var fnStr = fn.toString();
		if(!name) {
			name = '$' + ((Math.random()*10)|0);
			while (fnStr.indexOf(name) !== -1) {
				name += ((Math.random()*10)|0);
			}
		}

		var script = this._worker[type]
			.toString()
			.replace(/^.*?[\n\r]+/gi, '')
			.replace(/\}[\s]*$/, '')
			.replace(/\/\*\*\/name\/\*\*\//gi, name)
			.replace(/\/\*\*\/func\/\*\*\//gi, fnStr);

		var resource = URL.createObjectURL(new Blob([script], {type: 'text/javascript'}));

		return resource;

	};

	Multithread.prototype.process = function(fn, callback) {

		var resource = this._prepare(fn, 'JSON');
		var self = this;

		return function() {
			self._execute(resource, [].slice.call(arguments), 'JSON', callback)
		};

	};

	Multithread.prototype.processInt32 = function(fn, callback) {

		var resource = this._prepare(fn, 'Int32');
		var self = this;

		return function() {
			self._execute(resource, [].slice.call(arguments), 'Int32', callback)
		};

	};

	Multithread.prototype.processFloat64 = function(fn, callback) {

		var resource = this._prepare(fn, 'Float64');
		var self = this;

		return function() {
			self._execute(resource, [].slice.call(arguments), 'Float64', callback)
		};

	};

	window['Multithread'] = Multithread;
	var num_threads = 4;
var MT = new Multithread(num_threads);

}();

//ok you can touch below here now

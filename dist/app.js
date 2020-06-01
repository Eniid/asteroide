/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Asteroide.js":
/*!**************************!*\
  !*** ./src/Asteroide.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Asteroide; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Asteroide = /*#__PURE__*/function () {
  function Asteroide(animation, colors) {
    _classCallCheck(this, Asteroide);

    this.animation = animation;
    this.canvas = this.animation.canvasElt;
    this.ctx = this.animation.ctx;
    this.ship = this.animation.ship;
    this.raduis = 10 + Math.round(Math.random() * 30);
    this.possiblepixelsW = this.canvas.width - this.raduis;
    this.possiblepixelsH = this.canvas.height - 2 * this.raduis;
    this.x = this.raduis + Math.floor(Math.random() * this.possiblepixelsW);
    this.y = -this.raduis + Math.floor(Math.random() * this.possiblepixelsW);
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.angleDeg = Math.random() * (100 - 84) + 84;
    this.angle = this.angleDeg * (Math.PI / 180);
    this.speed = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    console.log(this.speed);
    this.i = this.animation.asteroides.length;
    this.isAlive = true;
  }

  _createClass(Asteroide, [{
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.x, this.y, this.raduis, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }, {
    key: "boum",
    value: function boum() {
      var a = this.x - this.ship.shipPosX;
      var b = this.y - this.ship.shipPosY;
      var c = Math.sqrt(a * a + b * b);

      if (this.raduis + this.ship.shipH / 2 > c) {
        this.ship.shipMaxSpeed = 0;
        console.log(c);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.speed * Math.cos(this.angle);
      this.y += this.speed * Math.sin(this.angle);
      this.draw();

      if (this.y > this.canvas.height + this.raduis) {
        this.y = 15;
      }

      ;

      if (this.y <= -15) {
        this.y = this.canvas.height;
      }

      ;

      if (this.x > this.canvas.width + this.raduis) {
        this.x = 15;
      }

      ;

      if (this.x <= -15) {
        this.x = this.canvas.width;
      }

      ;

      if (this.isAlive === false) {
        this.animation.asteroides[this.i] = undefined;
      }

      this.boum();
    }
  }]);

  return Asteroide;
}();



/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ship; });
/* harmony import */ var _Shot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shot */ "./src/Shot.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Ship = /*#__PURE__*/function () {
  function Ship(animation) {
    _classCallCheck(this, Ship);

    this.animation = animation;
    this.canvas = this.animation.canvasElt;
    this.ctx = this.animation.ctx;
    this.shipW = 10;
    this.shipH = 30;
    this.shipSpeed = 0;
    this.shipMaxSpeed = 1;
    this.shipPosX = this.canvas.width / 2;
    this.shipPosY = this.canvas.height / 2;
    this.shipAngle = 90;
    this.delay = 20;
    this.lastshot = 0;
  }

  _createClass(Ship, [{
    key: "draw",
    value: function draw() {
      this.ctx.save();
      this.ctx.translate(this.shipPosX, this.shipPosY);
      this.ctx.rotate((this.shipAngle - 90) * (Math.PI / 180));
      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.translate(0, -15);
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(10, 30);
      this.ctx.lineTo(-10, 30);
      this.ctx.fill();
      this.ctx.restore();
    }
  }, {
    key: "shot",
    value: function shot() {
      if (this.animation.controller.isKeyDown(" ")) {
        if (this.lastshot === 0) {
          var shot = new _Shot__WEBPACK_IMPORTED_MODULE_0__["default"](this.animation);
          shot.x = this.shipPosX;
          shot.y = this.shipPosY;
          shot.i = this.animation.shots.length;
          shot.setAngle(this.shipAngle - 180);
          this.lastshot = this.delay;
          this.animation.shots.push(shot);
        }
      }

      if (this.lastshot > 0) {
        this.lastshot--;
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.animation.controller.isKeyDown("z")) {
        this.shipSpeed = -this.shipMaxSpeed;
      }

      if (this.animation.controller.isKeyDown("s")) {
        this.shipSpeed = this.shipMaxSpeed;
      }

      if (this.animation.controller.isKeyDown("d")) {
        this.shipAngle++;
      }

      if (this.animation.controller.isKeyDown("q")) {
        this.shipAngle--;
      }

      this.shot();
      this.shipPosX += this.shipSpeed * Math.cos(this.shipAngle * (Math.PI / 180));
      this.shipPosY += this.shipSpeed * Math.sin(this.shipAngle * (Math.PI / 180));
      this.shipSpeed /= 2;
      this.draw();
    }
  }]);

  return Ship;
}();



/***/ }),

/***/ "./src/Shot.js":
/*!*********************!*\
  !*** ./src/Shot.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shot; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shot = /*#__PURE__*/function () {
  function Shot(animation) {
    _classCallCheck(this, Shot);

    this.animation = animation;
    this.ctx = this.animation.ctx;
    this.canvas = this.animation.canvasElt;
    this.asteroides = this.animation.asteroides;
    this.Asteroide = this.animation.Asteroide;
    this.color = "#fff";
    this.raduis = 4;
    this.x = 100;
    this.y = 100;
    this.i = undefined;
    this.speed = 10;
    this.isAlive = true;
  }

  _createClass(Shot, [{
    key: "setAngle",
    value: function setAngle(angleDeg) {
      this.angleDeg = angleDeg;
      this.angle = this.angleDeg * (Math.PI / 180); //! coordonées polaires
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.x, this.y, this.raduis, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }, {
    key: "boum",
    value: function boum() {
      var _this = this;

      this.asteroides.forEach(function (asteroide) {
        if (asteroide !== undefined) {
          var a = _this.x - asteroide.x;
          var b = _this.y - asteroide.y;
          var c = Math.sqrt(a * a + b * b);

          if (_this.raduis + asteroide.raduis > c) {
            if (asteroide.raduis > 20) {
              var newAsteroide = new _this.Asteroide(_this.animation, _this.animation.colors);
              newAsteroide.raduis = 10 + Math.round(Math.random() * 10);
              newAsteroide.x = asteroide.x;
              newAsteroide.y = asteroide.y;
              newAsteroide.speed = asteroide.speed * 2.2;
              newAsteroide.angle = asteroide.angle;
              newAsteroide.color = asteroide.color;

              _this.asteroides.push(newAsteroide);

              var newAsteroideDeux = new _this.Asteroide(_this.animation, _this.animation.colors);
              newAsteroideDeux.raduis = 10 + Math.round(Math.random() * 10);
              newAsteroideDeux.x = asteroide.x;
              newAsteroideDeux.y = asteroide.y;
              newAsteroideDeux.speed = -asteroide.speed * 2.2;
              newAsteroideDeux.angle = asteroide.angle;
              newAsteroideDeux.color = asteroide.color;

              _this.asteroides.push(newAsteroideDeux);
            }

            asteroide.isAlive = false;
            _this.isAlive = false;
          }
        }
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.speed * Math.cos(this.angle); //!

      this.y += this.speed * Math.sin(this.angle); //! 

      this.draw();

      if (this.y > this.canvas.height + this.raduis) {
        this.isAlive = false;
      }

      if (this.y <= 0) {
        this.isAlive = false;
      }

      if (this.x > this.canvas.width + this.raduis) {
        this.isAlive = false;
      }

      if (this.y <= 0) {
        this.isAlive = false;
      }

      if (this.isAlive === false) {
        this.animation.shots[this.i] = undefined;
      }

      this.boum();
    }
  }]);

  return Shot;
}();



/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Asteroide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asteroide */ "./src/Asteroide.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _Shot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shot */ "./src/Shot.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ "./src/controller.js");




var animation = {
  canvasElt: undefined,
  ctx: undefined,
  asteroides: [],
  //? Tableau dans le quel on doit ajouter les asteroides (crée par le classe asteroide)
  shots: [],
  nbAsteroides: 10,
  controller: _controller__WEBPACK_IMPORTED_MODULE_3__["controller"],
  Asteroide: _Asteroide__WEBPACK_IMPORTED_MODULE_0__["default"],
  colors: ['#EC8900', '#E7A700', '#5787AB', '#E7A700'],
  //* Toutes les propoiétées !! 
  init: function init() {
    var _this = this;

    this.canvasElt = document.createElement("canvas");
    document.body.insertAdjacentElement("afterbegin", this.canvasElt);
    this.ctx = this.canvasElt.getContext('2d');
    this.resize();
    this.controller.init(this);
    window.addEventListener('resize', function (e) {
      _this.resize();
    }, false);
    this.ship = new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](this);

    for (var i = 0; i < this.nbAsteroides; i++) {
      var newAsteroide = new this.Asteroide(this, this.colors);
      newAsteroide.i = i;
      this.asteroides.push(newAsteroide);
    }

    this.animate();
  },
  draw: function draw() {
    this.asteroides.forEach(function (asteroide) {
      if (asteroide !== undefined) {
        asteroide.update();
      }
    });
    this.shots.forEach(function (shot) {
      if (shot !== undefined) {
        shot.update();
      }
    });

    if (this.ship.shipMaxSpeed !== 0) {
      this.ship.update();
    } else {
      this.ctx.font = "30px Arial";
      this.ctx.fillStyle = "#fff";
      this.ctx.textAlign = "center";
      this.ctx.fillText("Vous avez perdu..", this.canvasElt.width / 2, this.canvasElt.height / 2);
    }
  },
  animate: function animate() {
    var _this2 = this;

    //¨* Pour quand on va faire bouger le truc 
    this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
    this.draw();
    window.requestAnimationFrame(function () {
      _this2.animate(); // les arrow function permettes que le this reste le bon. 

    });
  },
  resize: function resize() {
    //* Pour que quand on rezise l'écran, le canvas aussi se resize
    this.canvasElt.height = 640;
    this.canvasElt.width = 640;
  }
};
animation.init(); //* Démare toute la classe animation

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controller", function() { return controller; });
var controller = {
  "allowedKeys": ["z", "q", "s", "d", " "],
  "pressedKeys": [],
  init: function init(animation) {
    var _this = this;

    this.animation = animation;
    console.log("hello");
    window.addEventListener("keydown", function (e) {
      var key = e.key;

      if (_this.allowedKeys.indexOf(key) != -1) {
        if (_this.pressedKeys.indexOf(key) == -1) {
          _this.pressedKeys.push(key);
        }
      }

      console.log(_this.pressedKeys);
    }, false);
    window.addEventListener("keyup", function (e) {
      var key = e.key;

      if (_this.pressedKeys.indexOf(key) != -1) {
        _this.pressedKeys.splice(_this.pressedKeys.indexOf(key), 1);
      }
    }, false);
  },
  isKeyDown: function isKeyDown(key) {
    if (this.pressedKeys.indexOf(key) != -1) {
      return true;
    } else {
      return false;
    }
  }
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/enid/Documents/cours/Multimedia_js/asteroide/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /Users/enid/Documents/cours/Multimedia_js/asteroide/src/app.scss */"./src/app.scss");


/***/ })

/******/ });
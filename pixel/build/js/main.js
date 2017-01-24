/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Application = __webpack_require__(1);

	var _Application2 = _interopRequireDefault(_Application);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Application2.default.showIntro();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _intro = __webpack_require__(2);

	var _intro2 = _interopRequireDefault(_intro);

	var _greeting = __webpack_require__(4);

	var _greeting2 = _interopRequireDefault(_greeting);

	var _drawLevel = __webpack_require__(5);

	var _drawLevel2 = _interopRequireDefault(_drawLevel);

	var _stats = __webpack_require__(14);

	var _stats2 = _interopRequireDefault(_stats);

	var _rules = __webpack_require__(15);

	var _rules2 = _interopRequireDefault(_rules);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var mainElement = document.getElementById('main');
	var changeView = function changeView(element) {
	  mainElement.innerHTML = '';
	  mainElement.appendChild(element);
	};

	var Application = function () {
	  function Application() {
	    _classCallCheck(this, Application);
	  }

	  _createClass(Application, null, [{
	    key: 'showIntro',
	    value: function showIntro() {
	      changeView((0, _intro2.default)());
	    }
	  }, {
	    key: 'showGreeting',
	    value: function showGreeting() {
	      changeView((0, _greeting2.default)());
	    }
	  }, {
	    key: 'showRules',
	    value: function showRules() {
	      changeView((0, _rules2.default)());
	    }
	  }, {
	    key: 'showGame',
	    value: function showGame() {
	      changeView((0, _drawLevel2.default)());
	    }
	  }, {
	    key: 'showStats',
	    value: function showStats(gameState) {
	      changeView((0, _stats2.default)(gameState));
	    }
	  }]);

	  return Application;
	}();

	exports.default = Application;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AbstractView2 = __webpack_require__(3);

	var _AbstractView3 = _interopRequireDefault(_AbstractView2);

	var _Application = __webpack_require__(1);

	var _Application2 = _interopRequireDefault(_Application);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IntroView = function (_AbstractView) {
	  _inherits(IntroView, _AbstractView);

	  function IntroView() {
	    _classCallCheck(this, IntroView);

	    return _possibleConstructorReturn(this, (IntroView.__proto__ || Object.getPrototypeOf(IntroView)).call(this));
	  }

	  _createClass(IntroView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      return '<div id="intro" class="intro">\n      <h1 class="intro__asterisk">*</h1>\n      <p class="intro__motto"><sup>*</sup> \u042D\u0442\u043E \u043D\u0435 \u0444\u043E\u0442\u043E. \u042D\u0442\u043E \u0440\u0438\u0441\u0443\u043D\u043E\u043A \u043C\u0430\u0441\u043B\u043E\u043C \u043D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u0441\u043A\u043E\u0433\u043E \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u0430-\u0444\u043E\u0442\u043E\u0440\u0435\u0430\u043B\u0438\u0441\u0442\u0430 Tjalf\n        Sparnaay.</p>\n    </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.element.querySelector('.intro__asterisk').addEventListener('click', function () {
	        _Application2.default.showGreeting();
	      });
	    }
	  }]);

	  return IntroView;
	}(_AbstractView3.default);

	exports.default = function () {
	  return new IntroView().element;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AbstractView = function () {
	  function AbstractView() {
	    _classCallCheck(this, AbstractView);
	  }

	  _createClass(AbstractView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      throw new Error('Abstract method should be implemented');
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      // By default there is nothing to bind
	    }
	  }, {
	    key: 'clearHandlers',
	    value: function clearHandlers() {
	      // By default nothing to clear
	    }
	  }, {
	    key: 'element',
	    get: function get() {
	      if (!this._element) {
	        this._element = document.createElement('div');
	        this._element.innerHTML = this.getMarkup();
	        this.bindHandlers();
	      }
	      return this._element;
	    }
	  }]);

	  return AbstractView;
	}();

	exports.default = AbstractView;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AbstractView2 = __webpack_require__(3);

	var _AbstractView3 = _interopRequireDefault(_AbstractView2);

	var _Application = __webpack_require__(1);

	var _Application2 = _interopRequireDefault(_Application);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GreetingView = function (_AbstractView) {
	  _inherits(GreetingView, _AbstractView);

	  function GreetingView() {
	    _classCallCheck(this, GreetingView);

	    return _possibleConstructorReturn(this, (GreetingView.__proto__ || Object.getPrototypeOf(GreetingView)).call(this));
	  }

	  _createClass(GreetingView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      return '<div class="greeting  central--blur">\n      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>\n      <h1 class="greeting__asterisk">*</h1>\n      <div class="greeting__challenge">\n        <h3>\u041B\u0443\u0447\u0448\u0438\u0435 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u0438-\u0444\u043E\u0442\u043E\u0440\u0435\u0430\u043B\u0438\u0441\u0442\u044B \u0431\u0440\u043E\u0441\u0430\u044E\u0442&nbsp;\u0442\u0435\u0431\u0435&nbsp;\u0432\u044B\u0437\u043E\u0432!</h3>\n        <p>\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B \u043F\u0440\u043E\u0441\u0442\u044B.<br>\n          \u041D\u0443\u0436\u043D\u043E \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0438\u0441\u0443\u043D\u043E\u043A&nbsp;\u043E\u0442 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0438 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u044B\u0431\u043E\u0440.<br>\n          \u0417\u0430\u0434\u0430\u0447\u0430 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0442\u0440\u0438\u0432\u0438\u0430\u043B\u044C\u043D\u043E\u0439, \u043D\u043E \u043D\u0435 \u0434\u0443\u043C\u0430\u0439, \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A \u043F\u0440\u043E\u0441\u0442\u043E.<br>\n          \u0424\u043E\u0442\u043E\u0440\u0435\u0430\u043B\u0438\u0437\u043C \u043E\u0431\u043C\u0430\u043D\u0447\u0438\u0432 \u0438 \u043A\u043E\u0432\u0430\u0440\u0435\u043D.<br>\n          \u041F\u043E\u043C\u043D\u0438, \x03\u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u2014 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0447\u0435\u043D\u044C \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E.</p>\n      </div>\n      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>\n    </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.element.querySelector('.greeting__continue').addEventListener('click', function () {
	        _Application2.default.showRules();
	      });
	    }
	  }]);

	  return GreetingView;
	}(_AbstractView3.default);

	exports.default = function () {
	  return new GreetingView().element;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _header = __webpack_require__(6);

	var _header2 = _interopRequireDefault(_header);

	var _drawGameScreen = __webpack_require__(8);

	var _drawGameScreen2 = _interopRequireDefault(_drawGameScreen);

	var _game = __webpack_require__(7);

	var _Model = __webpack_require__(11);

	var _Model2 = _interopRequireDefault(_Model);

	var _Application = __webpack_require__(1);

	var _Application2 = _interopRequireDefault(_Application);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var adress = 'https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/';

	var status = function status(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return response;
	  } else {
	    throw new Error(response.statusText);
	  }
	};

	var json = function json(response) {
	  return response.json();
	};

	var dataPromise = window.fetch('https://intensive-ecmascript-server-nnpnvhhedl.now.sh/pixel-hunter/questions').then(status).then(json);

	var Presenter = function () {
	  function Presenter(options) {
	    _classCallCheck(this, Presenter);

	    this.options = options;

	    this.head = new _header2.default(_Model2.default.state);
	    this.level = new _drawGameScreen2.default(this.options[_Model2.default.getLevel()]);

	    this.root = document.createElement('div');
	    this.root.appendChild(this.head.element);
	    this.root.appendChild(this.level.element);

	    this._interval = null;
	    this.isFirstQuestion = true;
	  }

	  _createClass(Presenter, [{
	    key: 'clearTimer',
	    value: function clearTimer() {
	      clearInterval(this._interval);
	      _Model2.default.state.time = 0;
	    }
	  }, {
	    key: 'startGame',
	    value: function startGame() {
	      var _this = this;

	      this.level.onAnswer = this.answer.bind(this);
	      this._interval = setInterval(function () {
	        _Model2.default.timer();
	        if (_Model2.default.state.time >= _game.constraints.timeLimit) {
	          _this.getWrongAnswer();
	        }
	        document.querySelector('.game__timer').innerHTML = _Model2.default.state.time;
	      }, 1000);
	    }
	  }, {
	    key: 'answer',
	    value: function answer(_answer) {
	      switch (_answer) {
	        case 2:
	          var eventTarget = event.target.previousSibling.previousSibling;
	          var index = parseInt(eventTarget.name.slice(8), 10) - 1; // we get a string('question1' or 'question2'), slice it to cut the letters and subtract 1 to get the number of issue in answers array;
	          var currentQuestion = this.options[_Model2.default.getLevel()].answers[index];
	          var rightAnswerCondition = currentQuestion.type === eventTarget.value;
	          if (rightAnswerCondition) {
	            if (!this.isFirstQuestion && _Model2.default.state.stats[_Model2.default.getLevel()] === _game.Result.WRONG) {
	              this.getWrongAnswer();
	            } else if (!this.isFirstQuestion) {
	              this.getRightAnswer();
	            }
	            this.isFirstQuestion = !this.isFirstQuestion;
	          } else {
	            _Model2.default.changeStats('wrong');
	            _Model2.default.die();
	            document.querySelector('.game__lives').innerHTML = (0, _game.drawHearts)(_Model2.default.state.lives);
	            if (_Model2.default.state.lives <= _game.constraints.livesLimit) {
	              this.clearTimer();
	              this.endGame();
	            }
	            if (!this.isFirstQuestion) {
	              this.getNextLevel();
	            }
	            this.isFirstQuestion = !this.isFirstQuestion;
	          }
	          break;
	        case 1:
	          eventTarget = event.target.previousSibling.previousSibling;
	          currentQuestion = this.options[_Model2.default.getLevel()].answers[0];
	          if (currentQuestion.type === eventTarget.value) {
	            this.getRightAnswer();
	          } else {
	            this.getWrongAnswer();
	          }
	          break;
	        case 3:
	          index = parseInt(event.target.childNodes[1].alt.slice(7), 10) - 1;
	          currentQuestion = this.options[_Model2.default.getLevel()].answers[index];
	          if (currentQuestion.type === 'painting') {
	            this.getRightAnswer();
	          } else {
	            this.getWrongAnswer();
	          }
	          break;
	        default:
	          throw new Error('Unknown result');
	      }
	    }
	  }, {
	    key: 'restart',
	    value: function restart(continueGame) {
	      if (!continueGame) {
	        _Model2.default.restart();
	      }
	      this.startGame();
	    }
	  }, {
	    key: 'updateHeader',
	    value: function updateHeader() {
	      var head = new _header2.default(_Model2.default.state);
	      this.root.replaceChild(head.element, this.head.element);
	      this.head = head;
	    }
	  }, {
	    key: 'getNextLevel',
	    value: function getNextLevel() {
	      this.clearTimer();
	      this.updateHeader();
	      _Model2.default.nextLevel();
	      if (_Model2.default.state.level >= _game.constraints.levelLimit) {
	        this.endGame();
	      } else {
	        var level = new _drawGameScreen2.default(this.options[_Model2.default.getLevel()]);
	        level.onAnswer = this.answer.bind(this);
	        this.changeContentView(level);
	        this.startGame();
	      }
	    }
	  }, {
	    key: 'getRightAnswer',
	    value: function getRightAnswer() {
	      if (_Model2.default.state.time >= _game.constraints.timeSlow) {
	        _Model2.default.changeStats(_game.Result.SLOW);
	      } else if (_Model2.default.state.time <= _game.constraints.timeFast) {
	        _Model2.default.changeStats(_game.Result.FAST);
	      } else {
	        _Model2.default.changeStats(_game.Result.CORRECT);
	      }
	      this.getNextLevel();
	    }
	  }, {
	    key: 'getWrongAnswer',
	    value: function getWrongAnswer() {
	      _Model2.default.changeStats(_game.Result.WRONG);
	      _Model2.default.die();
	      document.querySelector('.game__lives').innerHTML = (0, _game.drawHearts)(_Model2.default.state.lives);
	      if (_Model2.default.state.lives <= _game.constraints.livesLimit) {
	        this.endGame();
	      } else {
	        this.getNextLevel();
	      }
	    }
	  }, {
	    key: 'endGame',
	    value: function endGame() {
	      this.clearTimer();
	      window.fetch('' + adress + _Model2.default.state.user, {
	        method: 'POST',
	        body: JSON.stringify({
	          'stats': _Model2.default.state.stats,
	          'lives': _Model2.default.state.lives
	        }),
	        headers: {
	          'Content-Type': 'application/json'
	        }
	      }).then(status);
	      window.fetch('' + adress + _Model2.default.state.user).then(status).then(json).then(function (data) {
	        _Application2.default.showStats(data);
	      });
	    }
	  }, {
	    key: 'changeContentView',
	    value: function changeContentView(view) {
	      this.root.replaceChild(view.element, this.level.element);
	      this.level = view;
	    }
	  }]);

	  return Presenter;
	}();

	var newGame = void 0;
	dataPromise.then(function (data) {
	  newGame = new Presenter(data);
	});

	exports.default = function () {
	  newGame.restart(false);
	  return newGame.root;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _game = __webpack_require__(7);

	var _AbstractView2 = __webpack_require__(3);

	var _AbstractView3 = _interopRequireDefault(_AbstractView2);

	var _Application = __webpack_require__(1);

	var _Application2 = _interopRequireDefault(_Application);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderView = function (_AbstractView) {
	  _inherits(HeaderView, _AbstractView);

	  function HeaderView(gameState) {
	    _classCallCheck(this, HeaderView);

	    var _this = _possibleConstructorReturn(this, (HeaderView.__proto__ || Object.getPrototypeOf(HeaderView)).call(this));

	    _this.state = gameState;
	    return _this;
	  }

	  _createClass(HeaderView, [{
	    key: 'update',
	    value: function update(newState) {
	      this.state = newState;
	      this.element.innerHTML = this.getMarkup();
	    }
	  }, {
	    key: 'getMarkup',
	    value: function getMarkup() {
	      return '\n    <header class="header">\n      <div class="header__back">\n          <span class="back">\n            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">\n            <img src="img/logo_small.png" width="101" height="44">\n          </span>\n      </div>\n      <h1 class="game__timer">' + this.state.time + '</h1>\n      <div class="game__lives">\n        ' + (0, _game.drawHearts)(this.state.lives) + '\n      </div>\n    </header>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.element.querySelector('.header__back').addEventListener('click', function (event) {
	        event.preventDefault();
	        _Application2.default.showRules();
	      });
	    }
	  }]);

	  return HeaderView;
	}(_AbstractView3.default);

	exports.default = HeaderView;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var gameAnswers = exports.gameAnswers = ['photo', 'painting'];

	var bonus = exports.bonus = {
	  RIGHT: 100,
	  FAST: 50,
	  SLOW: -50,
	  LIFE: 50
	};

	var Result = exports.Result = {
	  CORRECT: 'correct',
	  WRONG: 'wrong',
	  FAST: 'fast',
	  SLOW: 'slow',
	  UNKNOWN: 'unknown'
	};

	var constraints = exports.constraints = {
	  timeLimit: 30,
	  levelLimit: 10,
	  livesLimit: 0,
	  timeSlow: 20,
	  timeFast: 10
	};

	var game = exports.game = {

	  stats: new Array(10).fill('unknown'),

	  lives: 3,

	  time: 0,

	  level: 0,

	  user: ':username'
	};

	var drawHeart = function drawHeart(full) {
	  return '<img src="img/heart__' + (full ? 'empty' : 'full') + '.svg" class="game__heart" alt="Life" width="32" height="32">';
	};

	var drawHearts = exports.drawHearts = function drawHearts(lives) {
	  return new Array(3).fill(0).map(function (it, i) {
	    return drawHeart(i >= lives);
	  }).join('\n');
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _footer = __webpack_require__(9);

	var _footer2 = _interopRequireDefault(_footer);

	var _gameContent = __webpack_require__(10);

	var _gameContent2 = _interopRequireDefault(_gameContent);

	var _AbstractView2 = __webpack_require__(3);

	var _AbstractView3 = _interopRequireDefault(_AbstractView2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LevelView = function (_AbstractView) {
	  _inherits(LevelView, _AbstractView);

	  function LevelView(options) {
	    _classCallCheck(this, LevelView);

	    var _this = _possibleConstructorReturn(this, (LevelView.__proto__ || Object.getPrototypeOf(LevelView)).call(this));

	    _this.level = options;
	    return _this;
	  }

	  _createClass(LevelView, [{
	    key: 'formClassList',
	    value: function formClassList() {
	      var formClass = void 0;
	      switch (this.level.answers.length) {
	        case 1:
	          formClass = '--wide';
	          break;
	        case 3:
	          formClass = '--triple';
	          break;
	        default:
	          formClass = '';
	          break;
	      }
	      return formClass;
	    }
	  }, {
	    key: 'getMarkup',
	    value: function getMarkup() {
	      return '\n    <div class="game">\n    ' + this.level.question + '\n    <form class="game__content  game__content' + this.formClassList(this.level) + '">' + (0, _gameContent2.default)(this.level) + '</form>\n    ' + (0, _footer2.default)() + '\n    </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      var _this2 = this;

	      this.element.querySelector('.game__content').addEventListener('click', function (event) {
	        event.preventDefault();
	        if (event.target.parentNode.classList.contains('game__answer') || event.target.classList.contains('game__option')) {
	          _this2._onAnswer(_this2.level.answers.length);
	        }
	      });
	    }
	  }, {
	    key: 'onAnswer',
	    set: function set(handler) {
	      this._onAnswer = handler;
	    }
	  }]);

	  return LevelView;
	}(_AbstractView3.default);

	exports.default = LevelView;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _game = __webpack_require__(7);

	var footer = function footer() {
	  return '<div class="stats">\n  <ul class="stats">\n    ' + _game.game.stats.map(function (result) {
	    return '<li class="stats__result stats__result--' + result + '"></li>';
	  }).join('\n') + '\n  </ul>\n</div>';
	};

	exports.default = footer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _game = __webpack_require__(7);

	exports.default = function (options) {
	  var gameQuestion = void 0;
	  switch (options.answers.length) {
	    case 2:
	      gameQuestion = '' + options.answers.map(function (item, i) {
	        return '<div class="game__option">\n  <img src=' + item.image.url + ' alt="Option ' + (i + 1) + '" width=' + item.image.width + ' height=' + item.image.height + '>\n    ' + _game.gameAnswers.map(function (answer) {
	          return '<label class="game__answer game__answer--' + answer + '">\n      <input name="question' + (i + 1) + '" type="radio" value="' + answer + '">\n      <span>\u0424\u043E\u0442\u043E</span>\n    </label>\n';
	        }).join('\n') + '\n</div>';
	      }).join('\n');
	      break;

	    case 1:
	      gameQuestion = '' + options.answers.map(function (item, i) {
	        return '<div class="game__option">\n<img src=' + item.image.url + ' alt="Option ' + (i + 1) + '" width=' + item.image.width + ' height=' + item.image.height + '>\n  ' + _game.gameAnswers.map(function (answer) {
	          return '<label class="game__answer game__answer--' + answer + '">\n    <input name="question' + (i + 1) + '" type="radio" value="' + answer + '">\n    <span>\u0424\u043E\u0442\u043E</span>\n  </label>\n';
	        }).join('\n') + '\n</div>';
	      }).join('\n');
	      break;

	    default:
	      gameQuestion = '' + options.answers.map(function (item, i) {
	        return '<div class="game__option">\n    <img src=' + item.image.url + ' alt="Option ' + (i + 1) + '" width=' + item.image.width + ' height=' + item.image.height + '>\n    </div>';
	      }).join('\n');
	      break;
	  }
	  return gameQuestion;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pure = __webpack_require__(12);

	var _game = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = function () {
	  function Model() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _game.game;

	    _classCallCheck(this, Model);

	    this._state = state;
	  }

	  _createClass(Model, [{
	    key: 'setUserName',
	    value: function setUserName(string) {
	      this._state.user = string;
	    }
	  }, {
	    key: 'changeStats',
	    value: function changeStats(string) {
	      this._state.stats[this._state.level] = string;
	    }
	  }, {
	    key: 'getLevel',
	    value: function getLevel() {
	      return this._state.level;
	    }
	  }, {
	    key: 'nextLevel',
	    value: function nextLevel() {
	      this._state = (0, _pure.setCurrentLevel)(this._state, this._state.level + 1);
	    }
	  }, {
	    key: 'die',
	    value: function die() {
	      this._state = (0, _pure.setLives)(this._state, this._state.lives - 1);
	    }
	  }, {
	    key: 'restart',
	    value: function restart() {
	      this._state = _game.game;
	    }
	  }, {
	    key: 'isDead',
	    value: function isDead() {
	      return this._state.lives <= _game.constraints.livesLimit;
	    }
	  }, {
	    key: 'timer',
	    value: function timer() {
	      this._state = (0, _pure.setTime)(this._state, this._state.time + 1);
	    }
	  }, {
	    key: 'state',
	    get: function get() {
	      return this._state;
	    }
	  }]);

	  return Model;
	}();

	exports.default = new Model();

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var setCurrentLevel = exports.setCurrentLevel = function setCurrentLevel(currentGame, level) {
	  if (level > 10) {
	    throw new RangeError('No such Level');
	  }
	  return Object.assign({}, currentGame, {
	    level: level
	  });
	};

	var setTime = exports.setTime = function setTime(currentGame, time) {
	  if (time < 0) {
	    throw new RangeError('Time can\'t be negative');
	  }
	  return Object.assign({}, currentGame, {
	    time: time
	  });
	};

	var setLives = exports.setLives = function setLives(currentGame, lives) {
	  if (lives < 0) {
	    throw new RangeError('Number of lives can\'t be negative');
	  }
	  if (lives > 3) {
	    throw new RangeError('Number of lives can\'t be negative');
	  }
	  return Object.assign({}, currentGame, {
	    lives: lives
	  });
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  if (support.arrayBuffer) {
	    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

	    var isDataView = function isDataView(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj);
	    };

	    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	    };
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }

	    return iterator;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var oldValue = this.map[name];
	    this.map[name] = oldValue ? oldValue + ',' + value : value;
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    name = normalizeName(name);
	    return this.has(name) ? this.map[name] : null;
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value);
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this);
	      }
	    }
	  };

	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsArrayBuffer(blob);
	    return promise;
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsText(blob);
	    return promise;
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf);
	    var chars = new Array(view.length);

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i]);
	    }
	    return chars.join('');
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0);
	    } else {
	      var view = new Uint8Array(buf.byteLength);
	      view.set(new Uint8Array(buf));
	      return view.buffer;
	    }
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (!body) {
	        this._bodyText = '';
	      } else if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer);
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer]);
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body);
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer);
	        }
	      };
	    }

	    this.text = function () {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected;
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob);
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text');
	      } else {
	        return Promise.resolve(this._bodyText);
	      }
	    };

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;

	    if (typeof input === 'string') {
	      this.url = input;
	    } else {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this, { body: this._bodyInit });
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers();
	    rawHeaders.split('\r\n').forEach(function (line) {
	      var parts = line.split(':');
	      var key = parts.shift().trim();
	      if (key) {
	        var value = parts.join(':').trim();
	        headers.append(key, value);
	      }
	    });
	    return headers;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = 'status' in options ? options.status : 200;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = 'statusText' in options ? options.statusText : 'OK';
	    this.headers = new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request = new Request(input, init);
	      var xhr = new XMLHttpRequest();

	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        };
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AbstractView2 = __webpack_require__(3);

	var _AbstractView3 = _interopRequireDefault(_AbstractView2);

	var _game = __webpack_require__(7);

	var _Application = __webpack_require__(1);

	var _Application2 = _interopRequireDefault(_Application);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StatsView = function (_AbstractView) {
	  _inherits(StatsView, _AbstractView);

	  function StatsView(gameState) {
	    _classCallCheck(this, StatsView);

	    var _this = _possibleConstructorReturn(this, (StatsView.__proto__ || Object.getPrototypeOf(StatsView)).call(this));

	    _this.state = gameState;
	    return _this;
	  }

	  _createClass(StatsView, [{
	    key: 'update',
	    value: function update(newState) {
	      this.state = newState;
	      this.element.innerHTML = this.getMarkup();
	    }
	  }, {
	    key: 'getUnknownArr',
	    value: function getUnknownArr(stats) {
	      var UnknownArr = stats.filter(function (item) {
	        return item === _game.Result.UNKNOWN;
	      });
	      return UnknownArr.length;
	    }
	  }, {
	    key: 'getWrongArr',
	    value: function getWrongArr(stats) {
	      var WrongArr = stats.filter(function (item) {
	        return item === _game.Result.WRONG;
	      });
	      return WrongArr.length;
	    }
	  }, {
	    key: 'getFastArr',
	    value: function getFastArr(stats) {
	      var FastArr = stats.filter(function (item) {
	        return item === _game.Result.FAST;
	      });
	      return FastArr.length;
	    }
	  }, {
	    key: 'getSlowArr',
	    value: function getSlowArr(stats) {
	      var SlowArr = stats.filter(function (item) {
	        return item === _game.Result.SLOW;
	      });
	      return SlowArr.length;
	    }
	  }, {
	    key: 'getDraftResult',
	    value: function getDraftResult(stats) {
	      return (stats.length - this.getWrongArr(stats) - this.getUnknownArr(stats)) * _game.bonus.RIGHT;
	    }
	  }, {
	    key: 'getFastResult',
	    value: function getFastResult(stats) {
	      return this.getFastArr(stats) * _game.bonus.FAST;
	    }
	  }, {
	    key: 'getLivesResult',
	    value: function getLivesResult(lives) {
	      return lives * _game.bonus.LIFE;
	    }
	  }, {
	    key: 'getSlowResult',
	    value: function getSlowResult(stats) {
	      return this.getSlowArr(stats) * _game.bonus.SLOW;
	    }
	  }, {
	    key: 'getTotalResult',
	    value: function getTotalResult(stats, lives) {
	      var totalResult = void 0;
	      if (this.getWrongArr(stats) === stats.length - this.getUnknownArr(stats)) {
	        totalResult = 'FAIL!';
	      } else {
	        totalResult = this.getDraftResult(stats) + this.getFastResult(stats) + this.getLivesResult(lives) + this.getSlowResult(stats);
	      }
	      return totalResult;
	    }
	  }, {
	    key: 'getHeaderStatsMarkup',
	    value: function getHeaderStatsMarkup() {
	      return '<header class="header">\n    <div class="header__back">\n      <span class="back">\n        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">\n        <img src="img/logo_small.png" width="101" height="44">\n      </span>\n    </div>\n  </header>';
	    }
	  }, {
	    key: 'getGameStatsMarkup',
	    value: function getGameStatsMarkup(stats) {
	      return '\n    <ul class="stats">\n      ' + stats.map(function (result) {
	        return '<li class="stats__result stats__result--' + result + '"></li>';
	      }).join(' ') + '\n    </ul>';
	    }
	  }, {
	    key: 'getTable',
	    value: function getTable() {
	      var _this2 = this;

	      return '' + this.state.map(function (item, i) {
	        return '<table class="result__table">\n      <tr>\n        <td class="result__number">' + (i + 1) + '.</td>\n        <td colspan="2">\n          ' + _this2.getGameStatsMarkup(item.stats) + '\n        </td>\n        <td class="result__points">\xD7&nbsp;100</td>\n        <td class="result__total">' + _this2.getDraftResult(item.stats) + '</td>\n      </tr>\n      <tr>\n        <td></td>\n        <td class="result__extra">\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C:</td>\n        <td class="result__extra">' + _this2.getFastArr(item.stats) + '&nbsp;<span class="stats__result stats__result--fast"></span></td>\n        <td class="result__points">\xD7&nbsp;' + _game.bonus.FAST + '</td>\n        <td class="result__total">' + _this2.getFastResult(item.stats) + '</td>\n      </tr>\n      <tr>\n        <td></td>\n        <td class="result__extra">\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0436\u0438\u0437\u043D\u0438:</td>\n        <td class="result__extra">' + item.lives + '&nbsp;<span class="stats__result stats__result--heart"></span></td>\n        <td class="result__points">\xD7&nbsp;' + _game.bonus.LIFE + '</td>\n        <td class="result__total">' + _this2.getLivesResult(item.lives) + '</td>\n      </tr>\n      <tr>\n        <td></td>\n        <td class="result__extra">\u0428\u0442\u0440\u0430\u0444 \u0437\u0430 \u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:</td>\n        <td class="result__extra">' + _this2.getSlowArr(item.stats) + '&nbsp;<span class="stats__result stats__result--slow"></span></td>\n        <td class="result__points">\xD7&nbsp;' + -_game.bonus.SLOW + '</td>\n        <td class="result__total">' + _this2.getSlowResult(item.stats) + '</td>\n      </tr>\n      <tr>\n        <td colspan="5" class="result__total  result__total--final">' + _this2.getTotalResult(item.stats, item.lives) + '</td>\n      </tr>\n    </table>';
	      }).join('\n');
	    }
	  }, {
	    key: 'getMarkup',
	    value: function getMarkup() {
	      return '\n    ' + this.getHeaderStatsMarkup() + '\n    <div class="result">\n      <h1>\u041F\u043E\u0431\u0435\u0434\u0430!</h1>\n      ' + this.getTable() + '\n    </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.element.querySelector('.header__back').addEventListener('click', function (event) {
	        event.preventDefault();
	        _Application2.default.showRules();
	      });
	    }
	  }]);

	  return StatsView;
	}(_AbstractView3.default);

	exports.default = function (gameState) {
	  return new StatsView(gameState).element;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AbstractView2 = __webpack_require__(3);

	var _AbstractView3 = _interopRequireDefault(_AbstractView2);

	var _Application = __webpack_require__(1);

	var _Application2 = _interopRequireDefault(_Application);

	var _Model = __webpack_require__(11);

	var _Model2 = _interopRequireDefault(_Model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RulesView = function (_AbstractView) {
	  _inherits(RulesView, _AbstractView);

	  function RulesView() {
	    _classCallCheck(this, RulesView);

	    return _possibleConstructorReturn(this, (RulesView.__proto__ || Object.getPrototypeOf(RulesView)).call(this));
	  }

	  _createClass(RulesView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      return '<header class="header">\n      <div class="header__back">\n        <span class="back">\n          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">\n          <img src="img/logo_small.png" width="101" height="44">\n        </span>\n      </div>\n    </header>\n    <div class="rules  central--none">\n      <h1 class="rules__title">\u041F\u0440\u0430\u0432\u0438\u043B\u0430</h1>\n      <p class="rules__description">\u0423\u0433\u0430\u0434\u0430\u0439 10 \u0440\u0430\u0437 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E <img\n        src="img/photo_icon.png" width="16" height="16"> \u0438\u043B\u0438 \u0440\u0438\u0441\u0443\u043D\u043E\u043A <img\n        src="img/paint_icon.png" width="16" height="16" alt="">.<br>\n        \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u0440\u0438\u0441\u0443\u043D\u043A\u0430\u043C\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043E\u0431\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.<br>\n        \u041D\u0430 \u043A\u0430\u0436\u0434\u0443\u044E \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043E\u0442\u0432\u043E\u0434\u0438\u0442\u0441\u044F 30 \u0441\u0435\u043A\u0443\u043D\u0434.<br>\n        \u041E\u0448\u0438\u0431\u0438\u0442\u044C\u0441\u044F \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 3 \u0440\u0430\u0437.<br>\n        <br>\n        \u0413\u043E\u0442\u043E\u0432\u044B?\n      </p>\n      <form class="rules__form">\n        <input class="rules__input" type="text" placeholder="\u0412\u0430\u0448\u0435 \u0418\u043C\u044F">\n        <button class="rules__button  continue" type="submit" disabled>Go!</button>\n      </form>\n    </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      var _this2 = this;

	      this.element.querySelector('.rules__button').addEventListener('click', function () {
	        event.preventDefault();
	        _Application2.default.showGame();
	      });

	      var rulesSubmit = this.element.querySelector('.rules__button');
	      this.element.querySelector('.rules__input').oninput = function () {
	        var userName = _this2.element.querySelector('.rules__input').value;
	        if (userName) {
	          rulesSubmit.removeAttribute('disabled');
	          _Model2.default.setUserName(':' + userName);
	        } else {
	          rulesSubmit.setAttribute('disabled', '');
	        }
	      };
	    }
	  }]);

	  return RulesView;
	}(_AbstractView3.default);

	exports.default = function () {
	  return new RulesView().element;
	};

/***/ }
/******/ ]);
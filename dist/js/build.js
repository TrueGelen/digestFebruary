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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _positionBurger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positionBurger */ \"./source/js/positionBurger.js\");\n/* harmony import */ var _positionBurger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_positionBurger__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./source/js/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slide4PlayVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide4PlayVideo */ \"./source/js/slide4PlayVideo.js\");\n/* harmony import */ var _slide4PlayVideo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slide4PlayVideo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _removePlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removePlugin */ \"./source/js/removePlugin.js\");\n/* harmony import */ var _removePlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_removePlugin__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // import './scrollTo'//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qcy9tYWluLmpzPzA0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Bvc2l0aW9uQnVyZ2VyJ1xyXG5pbXBvcnQgJy4vbWVudSdcclxuaW1wb3J0ICcuL3NsaWRlNFBsYXlWaWRlbydcclxuaW1wb3J0ICcuL3JlbW92ZVBsdWdpbidcclxuLy8gaW1wb3J0ICcuL3Njcm9sbFRvJyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/js/main.js\n");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  var burger = document.querySelector('#burger');\n  var menu = document.querySelector('#menu');\n  var close = menu.querySelector('.menu__close');\n  burger.addEventListener('click', function () {\n    burger.style.opacity = 0;\n    menu.classList.remove('hideMenu');\n    menu.classList.add('showMenu');\n    close.classList.remove('hideClose');\n    close.classList.add('showClose');\n  });\n  close.addEventListener('click', function () {\n    burger.style.opacity = 1;\n    menu.classList.remove('showMenu');\n    menu.classList.add('hideMenu');\n    close.classList.remove('showClose');\n    close.classList.add('hideClose');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvbWVudS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qcy9tZW51LmpzPzM5ZjAiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXInKVxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpXHJcbiAgY29uc3QgY2xvc2UgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19jbG9zZScpXHJcblxyXG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGJ1cmdlci5zdHlsZS5vcGFjaXR5ID0gMFxyXG5cclxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZU1lbnUnKVxyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdzaG93TWVudScpXHJcblxyXG4gICAgY2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZUNsb3NlJylcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ3Nob3dDbG9zZScpXHJcbiAgICBcclxuICB9KVxyXG5cclxuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGJ1cmdlci5zdHlsZS5vcGFjaXR5ID0gMVxyXG5cclxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd01lbnUnKVxyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdoaWRlTWVudScpXHJcblxyXG4gICAgY2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0Nsb3NlJylcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGVDbG9zZScpXHJcbiAgfSlcclxuXHJcbn0pIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/js/menu.js\n");

/***/ }),

/***/ "./source/js/positionBurger.js":
/*!*************************************!*\
  !*** ./source/js/positionBurger.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  var burger = document.querySelector('.burger');\n  var wrapper = document.querySelector('#page-wrapper #wrapper');\n\n  function position() {\n    if (window.innerWidth > 1450) {\n      var y = wrapper.getBoundingClientRect().height / 2 - 48 - 15;\n      burger.style.transform = \"translateY(\".concat(-y, \"px)\");\n    } else if (window.innerWidth <= 1450 && window.innerWidth > 1200) {\n      var _y = wrapper.getBoundingClientRect().height / 2 - 48;\n\n      burger.style.transform = \"translateY(\".concat(-_y, \"px)\");\n    } else if (window.innerWidth <= 1200 && window.innerWidth > 1050) {\n      var _y2 = wrapper.getBoundingClientRect().height / 2 - 60;\n\n      burger.style.transform = \"translateY(\".concat(-_y2, \"px)\");\n    } else if (window.innerWidth <= 1050 && window.innerWidth > 768) {\n      var _y3 = wrapper.getBoundingClientRect().height / 2 - 70;\n\n      burger.style.transform = \"translateY(\".concat(-_y3, \"px)\");\n    } else {\n      burger.style.transform = \"\";\n    }\n  }\n\n  position();\n  window.addEventListener('resize', function () {\n    position();\n    console.log(window.innerWidth);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvcG9zaXRpb25CdXJnZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcG9zaXRpb25CdXJnZXIuanM/YmQyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XHJcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpXHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXdyYXBwZXIgI3dyYXBwZXInKVxyXG5cclxuICBmdW5jdGlvbiBwb3NpdGlvbigpe1xyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPiAxNDUwKXtcclxuICAgICAgbGV0IHkgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDIgLSA0OCAtIDE1XHJcbiAgICAgIGJ1cmdlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgkey15fXB4KWBcclxuICAgIH1lbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxNDUwICYmIHdpbmRvdy5pbm5lcldpZHRoID4gMTIwMCl7XHJcbiAgICAgIGxldCB5ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyIC0gNDhcclxuICAgICAgYnVyZ2VyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7LXl9cHgpYFxyXG4gICAgfWVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEyMDAgJiYgd2luZG93LmlubmVyV2lkdGggPiAxMDUwKXtcclxuICAgICAgbGV0IHkgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDIgLSA2MFxyXG4gICAgICBidXJnZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHsteX1weClgXHJcbiAgICB9ZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPD0gMTA1MCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCl7XHJcbiAgICAgIGxldCB5ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyIC0gNzBcclxuICAgICAgYnVyZ2VyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7LXl9cHgpYFxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGJ1cmdlci5zdHlsZS50cmFuc2Zvcm0gPSBgYFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9zaXRpb24oKVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCk9PntcclxuICAgIHBvc2l0aW9uKClcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKVxyXG4gIH0pXHJcbn0pIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/js/positionBurger.js\n");

/***/ }),

/***/ "./source/js/removePlugin.js":
/*!***********************************!*\
  !*** ./source/js/removePlugin.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  var pageWrapper = document.querySelector('#page-wrapper');\n  var wrapper = document.querySelector('#wrapper');\n  var pluginStyles = document.querySelectorAll('link')[0];\n  var href = pluginStyles.href; // const script = document.querySelector('#off')\n  // const scriptSrc = script.src\n\n  function watcher() {\n    if (window.innerWidth > 768) {\n      pageWrapper.id = 'page-wrapper';\n      wrapper.id = 'wrapper';\n      pluginStyles.href = href; // document.write ('<script src=\"assets/js/main.js\"></script>');\n      // script.src = scriptSrc\n      // pageWrapper.classList.remove('myPageWrapper')\n      // wrapper.classList.remove('myWrapper')\n    } else {\n      pageWrapper.id = '';\n      wrapper.id = '';\n      pluginStyles.href = ''; // script.src = ''\n      // pageWrapper.classList.add('myPageWrapper')\n      // wrapper.classList.add('myWrapper')\n    }\n  }\n\n  watcher();\n  window.addEventListener('resize', function () {\n    watcher();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvcmVtb3ZlUGx1Z2luLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3JlbW92ZVBsdWdpbi5qcz8zNWM0Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXdyYXBwZXInKVxyXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3JhcHBlcicpXHJcbiAgY29uc3QgcGx1Z2luU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGluaycpWzBdXHJcbiAgY29uc3QgaHJlZiA9IHBsdWdpblN0eWxlcy5ocmVmXHJcblxyXG4gIC8vIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvZmYnKVxyXG4gIC8vIGNvbnN0IHNjcmlwdFNyYyA9IHNjcmlwdC5zcmNcclxuICBcclxuICBmdW5jdGlvbiB3YXRjaGVyKCl7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCl7XHJcbiAgICAgIHBhZ2VXcmFwcGVyLmlkID0gJ3BhZ2Utd3JhcHBlcidcclxuICAgICAgd3JhcHBlci5pZCA9ICd3cmFwcGVyJ1xyXG4gICAgICBwbHVnaW5TdHlsZXMuaHJlZiA9IGhyZWZcclxuICAgICAgLy8gZG9jdW1lbnQud3JpdGUgKCc8c2NyaXB0IHNyYz1cImFzc2V0cy9qcy9tYWluLmpzXCI+PC9zY3JpcHQ+Jyk7XHJcbiAgICAgIC8vIHNjcmlwdC5zcmMgPSBzY3JpcHRTcmNcclxuICAgICAgLy8gcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbXlQYWdlV3JhcHBlcicpXHJcbiAgICAgIC8vIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbXlXcmFwcGVyJylcclxuICAgIH1lbHNle1xyXG4gICAgICBwYWdlV3JhcHBlci5pZCA9ICcnXHJcbiAgICAgIHdyYXBwZXIuaWQgPSAnJ1xyXG4gICAgICBwbHVnaW5TdHlsZXMuaHJlZiA9ICcnXHJcbiAgICAgIC8vIHNjcmlwdC5zcmMgPSAnJ1xyXG4gICAgICAvLyBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdteVBhZ2VXcmFwcGVyJylcclxuICAgICAgLy8gd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdteVdyYXBwZXInKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2F0Y2hlcigpXHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+e1xyXG4gICAgd2F0Y2hlcigpXHJcbiAgfSlcclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/js/removePlugin.js\n");

/***/ }),

/***/ "./source/js/slide4PlayVideo.js":
/*!**************************************!*\
  !*** ./source/js/slide4PlayVideo.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('load', function () {\n  var video = document.querySelector('#page-wrapper #wrapper .slide4video .slide4video__video');\n  var btn = document.querySelector('#page-wrapper #wrapper .slide4video .button');\n  btn.addEventListener('click', function () {\n    var path = document.querySelector('#page-wrapper #wrapper .slide4video .slide4video__video source').getAttribute('data-src');\n    video.src = path;\n    video.setAttribute('controls', '');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvanMvc2xpZGU0UGxheVZpZGVvLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3NsaWRlNFBsYXlWaWRlby5qcz9iMzAwIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcclxuICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXdyYXBwZXIgI3dyYXBwZXIgLnNsaWRlNHZpZGVvIC5zbGlkZTR2aWRlb19fdmlkZW8nKVxyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXdyYXBwZXIgI3dyYXBwZXIgLnNsaWRlNHZpZGVvIC5idXR0b24nKVxyXG5cclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLXdyYXBwZXIgI3dyYXBwZXIgLnNsaWRlNHZpZGVvIC5zbGlkZTR2aWRlb19fdmlkZW8gc291cmNlJykuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXHJcbiAgICB2aWRlby5zcmMgPSBwYXRoXHJcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJycpXHJcbiAgfSlcclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/js/slide4PlayVideo.js\n");

/***/ })

/******/ });
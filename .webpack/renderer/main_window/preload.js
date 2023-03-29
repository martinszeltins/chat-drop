/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/preload.ts":
/*!************************!*\
  !*** ./src/preload.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// See the Electron documentation for details on how to use preload scripts:\n// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\nwindow.addEventListener('message', (event) => {\n    if (event.data === 'hide-main-window') {\n        electron_1.ipcRenderer.send('hide-main-window');\n    }\n});\nwindow.addEventListener('keydown', (event) => {\n    if (event.ctrlKey || event.metaKey) {\n        switch (event.key) {\n            case '=':\n            case '+':\n                electron_1.webFrame.setZoomFactor(electron_1.webFrame.getZoomFactor() + 0.1);\n                break;\n            case '-':\n                electron_1.webFrame.setZoomFactor(electron_1.webFrame.getZoomFactor() - 0.1);\n                break;\n            case '0':\n                electron_1.webFrame.setZoomFactor(1);\n                break;\n        }\n    }\n});\nelectron_1.webFrame.setZoomFactor(1.3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJlbG9hZC50cy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsNEVBQTRFO0FBQzVFLGdGQUFnRjs7QUFFaEYsbUVBQWlEO0FBRWpELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUN6QyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssa0JBQWtCLEVBQUU7UUFDbkMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUN4QztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQ3pDLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ2hDLFFBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNmLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUNKLG1CQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFFTixLQUFLLEdBQUc7Z0JBQ0osbUJBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDM0QsTUFBTTtZQUVOLEtBQUssR0FBRztnQkFDSixtQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtTQUNUO0tBQ0o7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILG1CQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ2hhdERyb3AvLi9zcmMvcHJlbG9hZC50cz8wNTZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNlZSB0aGUgRWxlY3Ryb24gZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscyBvbiBob3cgdG8gdXNlIHByZWxvYWQgc2NyaXB0czpcbi8vIGh0dHBzOi8vd3d3LmVsZWN0cm9uanMub3JnL2RvY3MvbGF0ZXN0L3R1dG9yaWFsL3Byb2Nlc3MtbW9kZWwjcHJlbG9hZC1zY3JpcHRzXG5cbmltcG9ydCB7IGlwY1JlbmRlcmVyLCB3ZWJGcmFtZSB9IGZyb20gJ2VsZWN0cm9uJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gJ2hpZGUtbWFpbi13aW5kb3cnKSB7XG4gICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoJ2hpZGUtbWFpbi13aW5kb3cnKTtcbiAgICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICc9JzpcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHdlYkZyYW1lLnNldFpvb21GYWN0b3Iod2ViRnJhbWUuZ2V0Wm9vbUZhY3RvcigpICsgMC4xKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICB3ZWJGcmFtZS5zZXRab29tRmFjdG9yKHdlYkZyYW1lLmdldFpvb21GYWN0b3IoKSAtIDAuMSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICAgICAgd2ViRnJhbWUuc2V0Wm9vbUZhY3RvcigxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbndlYkZyYW1lLnNldFpvb21GYWN0b3IoMS4zKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/preload.ts\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/preload.ts");
/******/ 	
/******/ })()
;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/InspectorModal.js":
/*!**********************************!*\
  !*** ./client/InspectorModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InspectorModal; });
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/components */ "./node_modules/camunda-modeler-plugin-helpers/components.js");
/* harmony import */ var _InspectorView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InspectorView */ "./client/InspectorView.js");


 // polyfill upcoming structural components

const Title = camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title || (({
  children
}) => camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, children));

const Body = camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body || (({
  children
}) => camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));

const Footer = camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer || (({
  children
}) => camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children));

function InspectorModal({
  onClose,
  json
}) {
  const [definitions, setDefinitions] = Object(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__["useState"])(json);
  return camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    onClose: onClose
  }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, "Object Tree Inspector"), camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InspectorView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    json: definitions,
    onChange: json => setDefinitions(json)
  })), camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "inspector-buttons"
  }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    disabled: true,
    onClick: () => onClose(definitions)
  }, "Save"))));
}

/***/ }),

/***/ "./client/InspectorPlugin.js":
/*!***********************************!*\
  !*** ./client/InspectorPlugin.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InspectorPlugin; });
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/components */ "./node_modules/camunda-modeler-plugin-helpers/components.js");
/* harmony import */ var _InspectorModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InspectorModal */ "./client/InspectorModal.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

/* eslint-disable no-unused-vars*/




class InspectorPlugin extends camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      modalOpen: null,
      definitions: {}
    });

    _defineProperty(this, "handleClosed", definitions => {
      this.setState({
        modalOpen: false
      });

      if (!definitions) {
        return;
      }

      const modeler = this.modeler; // todo(pinussilvestrus): find good way to update definitions
      // modeler._definitions = merge({}, modeler._definitions, definitions);

      this.update();
    });

    const {
      subscribe
    } = props;
    subscribe('bpmn.modeler.created', event => {
      const {
        modeler
      } = event;
      this.modeler = modeler;
      const self = this;
      modeler.on('import.done', function (e) {
        self.setState({
          definitions: modeler.getDefinitions()
        });
      });
    });
  }

  update() {
    const modeler = this.modeler;
    modeler.saveXML(function (err, result) {
      if (err) {
        console.log(err);
      } else {
        modeler.importXML(result);
      }
    });
  }

  render() {
    return camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__["Fill"], {
      slot: "toolbar",
      group: "9_inspector"
    }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: () => this.setState({
        modalOpen: true
      })
    }, "Inspect")), this.state.modalOpen && camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InspectorModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClose: this.handleClosed.bind(this),
      json: this.state.definitions
    }));
  }

} // helpers //////////////

function log(...args) {
  console.log('[JSONPlugin]', ...args);
} // @Deprecated


function merge(target, ...sources) {
  if (!sources.length) {
    return target;
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    target.$descriptor = source.$descriptor || target.$descriptor;
    Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(Object.getOwnPropertyNames(source), function (key) {
      const sourceVal = source[key];

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/***/ }),

/***/ "./client/InspectorView.js":
/*!*********************************!*\
  !*** ./client/InspectorView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InspectorView; });
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_json_editor_ajrm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-json-editor-ajrm */ "./node_modules/react-json-editor-ajrm/es/index.js");
/* harmony import */ var react_json_editor_ajrm_locale_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-json-editor-ajrm/locale/en */ "./node_modules/react-json-editor-ajrm/locale/en.js");
/* harmony import */ var react_json_editor_ajrm_locale_en__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_json_editor_ajrm_locale_en__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsoneditor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsoneditor-react */ "./node_modules/jsoneditor-react/es/index.js");
/* harmony import */ var jsoneditor_react_es_editor_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsoneditor-react/es/editor.min.css */ "./node_modules/jsoneditor-react/es/editor.min.css");
/* harmony import */ var jsoneditor_react_es_editor_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsoneditor_react_es_editor_min_css__WEBPACK_IMPORTED_MODULE_4__);





function InspectorView({
  json,
  onChange
}) {
  // todo(pinussilvestrus): not showing inherited props
  const handleChange = ({
    jsObject
  }) => onChange(jsObject);

  return camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,  true && camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_json_editor_ajrm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "json-editor",
    placeholder: json,
    onChange: handleChange,
    locale: react_json_editor_ajrm_locale_en__WEBPACK_IMPORTED_MODULE_2___default.a,
    theme: "light_mitsuketa_tribute",
    onKeyPressUpdate: false,
    confirmGood: false,
    viewOnly: true
  }),  false && false);
}

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var _InspectorPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectorPlugin */ "./client/InspectorPlugin.js");


Object(camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["registerClientExtension"])(_InspectorPlugin__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/components.js":
/*!*******************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/components.js ***!
  \*******************************************************************/
/*! exports provided: Fill, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fill", function() { return Fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
if (!window.components) {
  throw new Error('Not compatible with Camunda Modeler < 3.4');
}

/**
 * Fill component.
 *
 * @type {import('react').ComponentType<{ group: string, name: string }>}
 */
const Fill = window.components.Fill;

/**
 * Modal component.
 *
 * @type {import('react').ComponentType<{ onClose: Function }>}
 */
const Modal = window.components.Modal;

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/index.js ***!
  \**************************************************************/
/*! exports provided: registerClientPlugin, registerClientExtension, registerBpmnJSPlugin, registerBpmnJSModdleExtension, getModelerDirectory, getPluginsDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClientPlugin", function() { return registerClientPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClientExtension", function() { return registerClientExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSPlugin", function() { return registerBpmnJSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSModdleExtension", function() { return registerBpmnJSModdleExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelerDirectory", function() { return getModelerDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPluginsDirectory", function() { return getPluginsDirectory; });
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a client plugin.
 *
 * @param {import('react').ComponentType} extension
 *
 * @example
 *
 * import MyExtensionComponent from './MyExtensionComponent';
 *
 * registerClientExtension(MyExtensionComponent);
 */
function registerClientExtension(component) {
  registerClientPlugin(component, 'client');
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerBpmnJSPlugin(BpmnJSModule);
 */
function registerBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.modeler.additionalModules');
}

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerBpmnJSModdleExtension(moddleDescriptor);
 */
function registerBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.modeler.moddleExtension');
}

/**
 * Return the modeler directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getModelerDirectory() {
  return window.getModelerDirectory();
}

/**
 * Return the modeler plugin directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getPluginsDirectory() {
  return window.getPluginsDirectory();
}

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/react.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/react.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!window.react) {
  throw new Error('Not compatible with Camunda Modeler < 3.4');
}

/**
 * React object used by Camunda Modeler. Use it to create UI extension.
 *
 * @type {import('react')}
 */
module.exports = window.react;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/jsoneditor-react/es/editor.min.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/jsoneditor-react/es/editor.min.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/jsoneditor-icons.svg */ "./node_modules/jsoneditor-react/es/img/jsoneditor-icons.svg");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".ace_editor{min-height:150px}.jsoneditor .search input{height:auto;border:inherit;border:0;box-shadow:none}.jsoneditor table{border-collapse:collapse;width:auto}.jsoneditor td,.jsoneditor th{padding:0;display:table-cell;text-align:left;vertical-align:inherit;border-radius:inherit}.jsoneditor{color:#1a1a1a;border:thin solid #3883fa;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;position:relative;padding:0;line-height:100%}div.jsoneditor-field,div.jsoneditor-value,div.jsoneditor-readonly,div.jsoneditor-default{border:1px solid transparent;min-height:16px;min-width:32px;padding:2px;margin:1px;word-wrap:break-word;float:left}div.jsoneditor-field p,div.jsoneditor-value p{margin:0}div.jsoneditor-value{word-break:break-word}div.jsoneditor-value.jsoneditor-empty::after{content:\"value\"}div.jsoneditor-value.jsoneditor-string{color:#006000}div.jsoneditor-value.jsoneditor-number{color:#ee422e}div.jsoneditor-value.jsoneditor-boolean{color:#ff8c00}div.jsoneditor-value.jsoneditor-null{color:#004ed0}div.jsoneditor-value.jsoneditor-invalid{color:#000}div.jsoneditor-readonly{min-width:16px;color:gray}div.jsoneditor-empty{border-color:#d3d3d3;border-style:dashed;border-radius:2px}div.jsoneditor-field.jsoneditor-empty::after{content:\"field\"}div.jsoneditor td{vertical-align:top}div.jsoneditor td.jsoneditor-separator{padding:3px 0;vertical-align:top;color:gray}div.jsoneditor td.jsoneditor-tree{vertical-align:top}div.jsoneditor div.jsoneditor-anchor{cursor:pointer}div.jsoneditor div.jsoneditor-anchor .picker_wrapper.popup.popup_bottom{top:28px;left:-10px}div.jsoneditor.busy pre.jsoneditor-preview{background:#f5f5f5;color:gray}div.jsoneditor.busy div.jsoneditor-busy{display:inherit}div.jsoneditor code.jsoneditor-preview{background:0}div.jsoneditor.jsoneditor-mode-preview pre.jsoneditor-preview{width:100%;height:100%;box-sizing:border-box;overflow:auto;padding:2px;margin:0;white-space:pre-wrap;word-break:break-all}div.jsoneditor-default{color:gray;padding-left:10px}div.jsoneditor-tree{width:100%;height:100%;position:relative;overflow:auto}div.jsoneditor-tree button.jsoneditor-button{width:24px;height:24px;padding:0;margin:0;border:0;cursor:pointer;background:transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}div.jsoneditor-tree button.jsoneditor-button:focus{background-color:#f5f5f5;outline:#e5e5e5 solid 1px}div.jsoneditor-tree button.jsoneditor-collapsed{background-position:0 -48px}div.jsoneditor-tree button.jsoneditor-expanded{background-position:0 -72px}div.jsoneditor-tree button.jsoneditor-contextmenu{background-position:-48px -72px}div.jsoneditor-tree button.jsoneditor-invisible{visibility:hidden;background:0}div.jsoneditor-tree button.jsoneditor-dragarea{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") -72px -72px;cursor:move}div.jsoneditor-tree *:focus{outline:0}div.jsoneditor-tree div.jsoneditor-show-more{display:inline-block;padding:3px 4px;margin:2px 0;background-color:#e5e5e5;border-radius:3px;color:gray;font-family:arial,sans-serif;font-size:10pt}div.jsoneditor-tree div.jsoneditor-show-more a{display:inline-block;color:gray}div.jsoneditor-tree div.jsoneditor-color{display:inline-block;width:12px;height:12px;margin:4px;border:1px solid gray;cursor:pointer}div.jsoneditor-tree div.jsoneditor-date{background:#a1a1a1;color:#fff;font-family:arial,sans-serif;border-radius:3px;display:inline-block;padding:3px;margin:0 3px}div.jsoneditor-tree table.jsoneditor-tree{border-collapse:collapse;border-spacing:0;width:100%}div.jsoneditor-tree .jsoneditor-button.jsoneditor-schema-error{width:24px;height:24px;padding:0;margin:0 4px 0 0;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") -168px -48px}div.jsoneditor-outer{position:static;width:100%;height:100%;margin:0;padding:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}div.jsoneditor-outer.has-nav-bar{margin-top:-26px;padding-top:26px}div.jsoneditor-outer.has-nav-bar.has-main-menu-bar{margin-top:-61px;padding-top:61px}div.jsoneditor-outer.has-status-bar{margin-bottom:-26px;padding-bottom:26px}div.jsoneditor-outer.has-main-menu-bar{margin-top:-35px;padding-top:35px}div.jsoneditor-busy{position:absolute;top:15%;left:0;box-sizing:border-box;width:100%;text-align:center;display:none}div.jsoneditor-busy span{background-color:#ffffab;border:1px solid #fe0;border-radius:3px;padding:5px 15px;box-shadow:0 0 5px rgba(0,0,0,0.4)}div.jsoneditor-field.jsoneditor-empty::after,div.jsoneditor-value.jsoneditor-empty::after{pointer-events:none;color:#d3d3d3;font-size:8pt}div.jsoneditor-value.jsoneditor-url,a.jsoneditor-value.jsoneditor-url{color:#006000;text-decoration:underline}a.jsoneditor-value.jsoneditor-url{display:inline-block;padding:2px;margin:2px}a.jsoneditor-value.jsoneditor-url:hover,a.jsoneditor-value.jsoneditor-url:focus{color:#ee422e}div.jsoneditor-field[contenteditable=\"true\"]:focus,div.jsoneditor-field[contenteditable=\"true\"]:hover,div.jsoneditor-value[contenteditable=\"true\"]:focus,div.jsoneditor-value[contenteditable=\"true\"]:hover,div.jsoneditor-field.jsoneditor-highlight,div.jsoneditor-value.jsoneditor-highlight{background-color:#ffffab;border:1px solid #fe0;border-radius:2px}div.jsoneditor-field.jsoneditor-highlight-active,div.jsoneditor-field.jsoneditor-highlight-active:focus,div.jsoneditor-field.jsoneditor-highlight-active:hover,div.jsoneditor-value.jsoneditor-highlight-active,div.jsoneditor-value.jsoneditor-highlight-active:focus,div.jsoneditor-value.jsoneditor-highlight-active:hover{background-color:#fe0;border:1px solid #ffc700;border-radius:2px}div.jsoneditor-value.jsoneditor-object,div.jsoneditor-value.jsoneditor-array{min-width:16px}div.jsoneditor-mode-view tr.jsoneditor-expandable td.jsoneditor-tree,div.jsoneditor-mode-form tr.jsoneditor-expandable td.jsoneditor-tree{cursor:pointer}div.jsoneditor-tree button.jsoneditor-contextmenu:hover,div.jsoneditor-tree button.jsoneditor-contextmenu:focus,div.jsoneditor-tree button.jsoneditor-contextmenu.jsoneditor-selected,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu{background-position:-48px -48px}div.jsoneditor-tree div.jsoneditor-show-more a:hover,div.jsoneditor-tree div.jsoneditor-show-more a:focus{color:#ee422e}textarea.jsoneditor-text,.ace-jsoneditor{min-height:150px}textarea.jsoneditor-text{width:100%;height:100%;margin:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;outline-width:0;border:0;background-color:#fff;resize:none}tr.jsoneditor-highlight,tr.jsoneditor-selected{background-color:#d3d3d3}tr.jsoneditor-selected button.jsoneditor-dragarea,tr.jsoneditor-selected button.jsoneditor-contextmenu{visibility:hidden}tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-contextmenu{visibility:visible}div.jsoneditor-tree button.jsoneditor-dragarea:hover,div.jsoneditor-tree button.jsoneditor-dragarea:focus,tr.jsoneditor-selected.jsoneditor-first button.jsoneditor-dragarea{background-position:-72px -48px}div.jsoneditor tr,div.jsoneditor th,div.jsoneditor td{padding:0;margin:0}div.jsoneditor-field,div.jsoneditor-value,div.jsoneditor td,div.jsoneditor th,div.jsoneditor textarea,pre.jsoneditor-preview,.jsoneditor-schema-error,.jsoneditor-popover{font-family:\"dejavu sans mono\",\"droid sans mono\",consolas,monaco,\"lucida console\",\"courier new\",courier,monospace,sans-serif;font-size:10pt;color:#1a1a1a}.jsoneditor-schema-error{cursor:default;display:inline-block;height:24px;line-height:24px;position:relative;text-align:center;width:24px}.jsoneditor-popover{background-color:#4c4c4c;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,0.4);color:#fff;padding:7px 10px;position:absolute;cursor:auto;width:200px;z-index:999}.jsoneditor-popover.jsoneditor-above{bottom:32px;left:-98px}.jsoneditor-popover.jsoneditor-above:before{border-top:7px solid #4c4c4c;bottom:-7px}.jsoneditor-popover.jsoneditor-below{top:32px;left:-98px}.jsoneditor-popover.jsoneditor-below:before{border-bottom:7px solid #4c4c4c;top:-7px}.jsoneditor-popover.jsoneditor-left{top:-7px;right:32px}.jsoneditor-popover.jsoneditor-left:before{border-left:7px solid #4c4c4c;border-top:7px solid transparent;border-bottom:7px solid transparent;content:\"\";top:19px;right:-14px;left:inherit;margin-left:inherit;margin-top:-7px;position:absolute}.jsoneditor-popover.jsoneditor-right{top:-7px;left:32px}.jsoneditor-popover.jsoneditor-right:before{border-right:7px solid #4c4c4c;border-top:7px solid transparent;border-bottom:7px solid transparent;content:\"\";top:19px;left:-14px;margin-left:inherit;margin-top:-7px;position:absolute}.jsoneditor-popover:before{border-right:7px solid transparent;border-left:7px solid transparent;content:\"\";display:block;left:50%;margin-left:-7px;position:absolute}.jsoneditor-text-errors tr.jump-to-line:hover{text-decoration:underline;cursor:pointer}.jsoneditor-schema-error:hover .jsoneditor-popover,.jsoneditor-schema-error:focus .jsoneditor-popover{display:block;animation:fade-in .3s linear 1,move-up .3s linear 1}@keyframes fade-in{from{opacity:0}to{opacity:1}}.jsoneditor .jsoneditor-validation-errors-container{max-height:130px;overflow-y:auto}.jsoneditor .jsoneditor-validation-errors{width:100%;overflow:hidden}.jsoneditor .jsoneditor-additional-errors{position:absolute;margin:auto;bottom:31px;left:calc(50% - 92px);color:gray;background-color:#ebebeb;padding:7px 15px;border-radius:8px}.jsoneditor .jsoneditor-additional-errors.visible{visibility:visible;opacity:1;transition:opacity 2s linear}.jsoneditor .jsoneditor-additional-errors.hidden{visibility:hidden;opacity:0;transition:visibility 0s 2s,opacity 2s linear}.jsoneditor .jsoneditor-text-errors{width:100%;border-collapse:collapse;border-top:1px solid #ffc700}.jsoneditor .jsoneditor-text-errors td{padding:3px 6px;vertical-align:middle}.jsoneditor .jsoneditor-text-errors td pre{margin:0;white-space:normal}.jsoneditor .jsoneditor-text-errors tr{background-color:#ffffab}.jsoneditor .jsoneditor-text-errors tr.parse-error{background-color:#ee2e2e70}.jsoneditor-text-errors .jsoneditor-schema-error{border:0;width:24px;height:24px;padding:0;margin:0 4px 0 0;cursor:pointer}.jsoneditor-text-errors tr .jsoneditor-schema-error{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") -168px -48px}.jsoneditor-text-errors tr.parse-error .jsoneditor-schema-error{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") -25px 0}.fadein{-webkit-animation:fadein .3s;animation:fadein .3s;-moz-animation:fadein .3s;-o-animation:fadein .3s}@keyframes fadein{0%{opacity:0}100%{opacity:1}}.jsoneditor-contextmenu-root{position:relative;width:0;height:0}.jsoneditor-contextmenu{position:absolute;box-sizing:content-box;z-index:99}.jsoneditor-contextmenu .jsoneditor-menu{position:relative;left:0;top:0;width:128px;height:auto;background:#fff;border:1px solid #d3d3d3;box-shadow:2px 2px 12px rgba(128,128,128,0.3);list-style:none;margin:0;padding:0}.jsoneditor-contextmenu .jsoneditor-menu button{position:relative;padding:0 4px 0 0;margin:0;width:128px;height:auto;border:0;cursor:pointer;color:#4d4d4d;background:transparent;font-size:10pt;font-family:arial,sans-serif;box-sizing:border-box;text-align:left}.jsoneditor-contextmenu .jsoneditor-menu button::-moz-focus-inner{padding:0;border:0}.jsoneditor-contextmenu .jsoneditor-menu button.jsoneditor-default{width:96px}.jsoneditor-contextmenu .jsoneditor-menu button.jsoneditor-expand{float:right;width:32px;height:24px;border-left:1px solid #e5e5e5}.jsoneditor-contextmenu .jsoneditor-menu li{overflow:hidden}.jsoneditor-contextmenu .jsoneditor-menu li ul{display:none;position:relative;left:-10px;top:0;border:0;box-shadow:inset 0 0 10px rgba(128,128,128,0.5);padding:0 10px;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-o-transition:all .3s ease-out;transition:all .3s ease-out}.jsoneditor-contextmenu .jsoneditor-menu li ul .jsoneditor-icon{margin-left:24px}.jsoneditor-contextmenu .jsoneditor-menu li ul li button{padding-left:24px;animation:all ease-in-out 1s}.jsoneditor-contextmenu .jsoneditor-menu li button .jsoneditor-expand{position:absolute;top:0;right:0;width:24px;height:24px;padding:0;margin:0 4px 0 0;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 0 -72px}.jsoneditor-contextmenu .jsoneditor-icon{position:absolute;top:0;left:0;width:24px;height:24px;border:0;padding:0;margin:0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.jsoneditor-contextmenu .jsoneditor-text{padding:4px 0 4px 24px;word-wrap:break-word}.jsoneditor-contextmenu .jsoneditor-text.jsoneditor-right-margin{padding-right:24px}.jsoneditor-contextmenu .jsoneditor-separator{height:0;border-top:1px solid #e5e5e5;padding-top:5px;margin-top:5px}.jsoneditor-contextmenu button.jsoneditor-remove .jsoneditor-icon{background-position:-24px 0}.jsoneditor-contextmenu button.jsoneditor-append .jsoneditor-icon{background-position:0 0}.jsoneditor-contextmenu button.jsoneditor-insert .jsoneditor-icon{background-position:0 0}.jsoneditor-contextmenu button.jsoneditor-duplicate .jsoneditor-icon{background-position:-48px 0}.jsoneditor-contextmenu button.jsoneditor-sort-asc .jsoneditor-icon{background-position:-168px 0}.jsoneditor-contextmenu button.jsoneditor-sort-desc .jsoneditor-icon{background-position:-192px 0}.jsoneditor-contextmenu button.jsoneditor-transform .jsoneditor-icon{background-position:-216px 0}.jsoneditor-contextmenu button.jsoneditor-extract .jsoneditor-icon{background-position:0 -24px}.jsoneditor-contextmenu button.jsoneditor-type-string .jsoneditor-icon{background-position:-144px 0}.jsoneditor-contextmenu button.jsoneditor-type-auto .jsoneditor-icon{background-position:-120px 0}.jsoneditor-contextmenu button.jsoneditor-type-object .jsoneditor-icon{background-position:-72px 0}.jsoneditor-contextmenu button.jsoneditor-type-array .jsoneditor-icon{background-position:-96px 0}.jsoneditor-contextmenu button.jsoneditor-type-modes .jsoneditor-icon{background-image:none;width:6px}.jsoneditor-contextmenu ul,.jsoneditor-contextmenu li{box-sizing:content-box;position:relative}.jsoneditor-contextmenu .jsoneditor-menu button:hover,.jsoneditor-contextmenu .jsoneditor-menu button:focus{color:#1a1a1a;background-color:#f5f5f5;outline:0}.jsoneditor-contextmenu .jsoneditor-menu li button.jsoneditor-selected,.jsoneditor-contextmenu .jsoneditor-menu li button.jsoneditor-selected:hover,.jsoneditor-contextmenu .jsoneditor-menu li button.jsoneditor-selected:focus{color:#fff;background-color:#ee422e}.jsoneditor-contextmenu .jsoneditor-menu li ul li button:hover,.jsoneditor-contextmenu .jsoneditor-menu li ul li button:focus{background-color:#f5f5f5}.jsoneditor-modal{max-width:95%;border-radius:2px !important;padding:45px 15px 15px 15px !important;box-shadow:2px 2px 12px rgba(128,128,128,0.3);color:#4d4d4d;line-height:1.3em}.jsoneditor-modal.jsoneditor-modal-transform{width:600px !important}.jsoneditor-modal .pico-modal-header{position:absolute;box-sizing:border-box;top:0;left:0;width:100%;padding:0 10px;height:30px;line-height:30px;font-family:arial,sans-serif;font-size:11pt;background:#3883fa;color:#fff}.jsoneditor-modal table{width:100%}.jsoneditor-modal table td{padding:3px 0}.jsoneditor-modal table td.jsoneditor-modal-input{text-align:right;padding-right:0;white-space:nowrap}.jsoneditor-modal table td.jsoneditor-modal-actions{padding-top:15px}.jsoneditor-modal table th{vertical-align:middle}.jsoneditor-modal p:first-child{margin-top:0}.jsoneditor-modal a{color:#3883fa}.jsoneditor-modal .jsoneditor-jmespath-block{margin-bottom:10px}.jsoneditor-modal .pico-close{background:none !important;font-size:24px !important;top:7px !important;right:7px !important;color:#fff}.jsoneditor-modal input{padding:4px}.jsoneditor-modal input[type=\"text\"]{cursor:inherit}.jsoneditor-modal input[disabled]{background:#d3d3d3;color:gray}.jsoneditor-modal .jsoneditor-select-wrapper{position:relative;display:inline-block}.jsoneditor-modal .jsoneditor-select-wrapper:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #666;position:absolute;right:8px;top:14px;pointer-events:none}.jsoneditor-modal select{padding:3px 24px 3px 10px;min-width:180px;max-width:350px;-webkit-appearance:none;-moz-appearance:none;appearance:none;text-indent:0;text-overflow:\"\";font-size:10pt;line-height:1.5em}.jsoneditor-modal select::-ms-expand{display:none}.jsoneditor-modal .jsoneditor-button-group input{padding:4px 10px;margin:0;border-radius:0;border-left-style:none}.jsoneditor-modal .jsoneditor-button-group input.jsoneditor-button-first{border-top-left-radius:3px;border-bottom-left-radius:3px;border-left-style:solid}.jsoneditor-modal .jsoneditor-button-group input.jsoneditor-button-last{border-top-right-radius:3px;border-bottom-right-radius:3px}.jsoneditor-modal .jsoneditor-transform-preview{background:#f5f5f5;height:200px}.jsoneditor-modal .jsoneditor-transform-preview.jsoneditor-error{color:#ee422e}.jsoneditor-modal .jsoneditor-jmespath-wizard{line-height:1.2em;width:100%;padding:0;border-radius:3px}.jsoneditor-modal .jsoneditor-jmespath-label{font-weight:bold;color:dodgerblue;margin-top:20px;margin-bottom:5px}.jsoneditor-modal .jsoneditor-jmespath-wizard-table{width:100%;border-collapse:collapse}.jsoneditor-modal .jsoneditor-jmespath-wizard-label{font-style:italic;margin:4px 0 2px 0}.jsoneditor-modal .jsoneditor-inline{position:relative;display:inline-block;width:100%;padding-top:2px;padding-bottom:2px}.jsoneditor-modal .jsoneditor-inline:not(:last-child){padding-right:2px}.jsoneditor-modal .jsoneditor-jmespath-filter{display:flex;flex-wrap:wrap}.jsoneditor-modal .jsoneditor-jmespath-filter-field{width:180px}.jsoneditor-modal .jsoneditor-jmespath-filter-relation{width:100px}.jsoneditor-modal .jsoneditor-jmespath-filter-value{min-width:180px;flex:1}.jsoneditor-modal .jsoneditor-jmespath-sort-field{width:170px}.jsoneditor-modal .jsoneditor-jmespath-sort-order{width:150px}.jsoneditor-modal .jsoneditor-jmespath-select-fields{width:100%}.jsoneditor-modal .selectr-selected{border-color:#d3d3d3;padding:4px 28px 4px 8px}.jsoneditor-modal .selectr-selected .selectr-tag{background-color:#3883fa;border-radius:5px}.jsoneditor-modal table th,.jsoneditor-modal table td{text-align:left;vertical-align:middle;font-weight:normal;color:#4d4d4d;border-spacing:0;border-collapse:collapse}.jsoneditor-modal select,.jsoneditor-modal textarea,.jsoneditor-modal input,.jsoneditor-modal #query{background:#fff;border:1px solid #d3d3d3;color:#4d4d4d;border-radius:3px;padding:4px}.jsoneditor-modal,.jsoneditor-modal table td,.jsoneditor-modal table th,.jsoneditor-modal select,.jsoneditor-modal option,.jsoneditor-modal textarea,.jsoneditor-modal input,.jsoneditor-modal #query{font-size:10.5pt;font-family:arial,sans-serif}.jsoneditor-modal #query,.jsoneditor-modal .jsoneditor-transform-preview{font-family:\"dejavu sans mono\",\"droid sans mono\",consolas,monaco,\"lucida console\",\"courier new\",courier,monospace,sans-serif;font-size:10pt;width:100%;box-sizing:border-box}.jsoneditor-modal input[type=\"button\"],.jsoneditor-modal input[type=\"submit\"]{background:#f5f5f5;padding:4px 20px}.jsoneditor-modal select,.jsoneditor-modal input{cursor:pointer}.jsoneditor-modal .jsoneditor-button-group.jsoneditor-button-group-value-asc input.jsoneditor-button-asc,.jsoneditor-modal .jsoneditor-button-group.jsoneditor-button-group-value-desc input.jsoneditor-button-desc{background:#3883fa;border-color:#3883fa;color:#fff}.jsoneditor-menu{width:100%;height:35px;padding:2px;margin:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;background-color:#3883fa;border-bottom:1px solid #3883fa}.jsoneditor-menu>button,.jsoneditor-menu>.jsoneditor-modes>button{width:26px;height:26px;margin:2px;padding:0;border-radius:2px;border:1px solid transparent;background:transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");color:#fff;opacity:.8;font-family:arial,sans-serif;font-size:10pt;float:left}.jsoneditor-menu>button:hover,.jsoneditor-menu>.jsoneditor-modes>button:hover{background-color:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4)}.jsoneditor-menu>button:focus,.jsoneditor-menu>button:active,.jsoneditor-menu>.jsoneditor-modes>button:focus,.jsoneditor-menu>.jsoneditor-modes>button:active{background-color:rgba(255,255,255,0.3)}.jsoneditor-menu>button:disabled,.jsoneditor-menu>.jsoneditor-modes>button:disabled{opacity:.5;background-color:transparent;border:0}.jsoneditor-menu>button.jsoneditor-collapse-all{background-position:0 -96px}.jsoneditor-menu>button.jsoneditor-expand-all{background-position:0 -120px}.jsoneditor-menu>button.jsoneditor-sort{background-position:-120px -96px}.jsoneditor-menu>button.jsoneditor-transform{background-position:-144px -96px}.jsoneditor.jsoneditor-mode-view>.jsoneditor-menu>button.jsoneditor-sort,.jsoneditor.jsoneditor-mode-form>.jsoneditor-menu>button.jsoneditor-sort,.jsoneditor.jsoneditor-mode-view>.jsoneditor-menu>button.jsoneditor-transform,.jsoneditor.jsoneditor-mode-form>.jsoneditor-menu>button.jsoneditor-transform{display:none}.jsoneditor-menu>button.jsoneditor-undo{background-position:-24px -96px}.jsoneditor-menu>button.jsoneditor-undo:disabled{background-position:-24px -120px}.jsoneditor-menu>button.jsoneditor-redo{background-position:-48px -96px}.jsoneditor-menu>button.jsoneditor-redo:disabled{background-position:-48px -120px}.jsoneditor-menu>button.jsoneditor-compact{background-position:-72px -96px}.jsoneditor-menu>button.jsoneditor-format{background-position:-72px -120px}.jsoneditor-menu>button.jsoneditor-repair{background-position:-96px -96px}.jsoneditor-menu>.jsoneditor-modes{display:inline-block;float:left}.jsoneditor-menu>.jsoneditor-modes>button{background-image:none;width:auto;padding-left:6px;padding-right:6px}.jsoneditor-menu>button.jsoneditor-separator,.jsoneditor-menu>.jsoneditor-modes>button.jsoneditor-separator{margin-left:10px}.jsoneditor-menu a{font-family:arial,sans-serif;font-size:10pt;color:#fff;opacity:.8;vertical-align:middle}.jsoneditor-menu a:hover{opacity:1}.jsoneditor-menu a.jsoneditor-poweredBy{font-size:8pt;position:absolute;right:0;top:0;padding:10px}.jsoneditor-search{font-family:arial,sans-serif;position:absolute;right:4px;top:4px;border-collapse:collapse;border-spacing:0;display:flex}.jsoneditor-search input{color:#1a1a1a;width:120px;border:0;outline:0;margin:1px;line-height:20px}.jsoneditor-search button{width:16px;height:24px;padding:0;margin:0;border:0;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");vertical-align:top}.jsoneditor-search button:hover{background-color:transparent}.jsoneditor-search button.jsoneditor-refresh{width:18px;background-position:-99px -73px}.jsoneditor-search button.jsoneditor-next{cursor:pointer;background-position:-124px -73px}.jsoneditor-search button.jsoneditor-next:hover{background-position:-124px -49px}.jsoneditor-search button.jsoneditor-previous{cursor:pointer;background-position:-148px -73px;margin-right:2px}.jsoneditor-search button.jsoneditor-previous:hover{background-position:-148px -49px}.jsoneditor-results{font-family:arial,sans-serif;color:#fff;padding-right:5px;line-height:26px}.jsoneditor-frame{border:1px solid transparent;background-color:#fff;padding:0 2px;margin:0}.jsoneditor .autocomplete.dropdown{position:absolute;background:#fff;box-shadow:2px 2px 12px rgba(128,128,128,0.3);border:1px solid #d3d3d3;z-index:100;overflow-x:hidden;overflow-y:auto;cursor:default;margin:0;padding:5px;text-align:left;outline:0;font-family:\"dejavu sans mono\",\"droid sans mono\",consolas,monaco,\"lucida console\",\"courier new\",courier,monospace,sans-serif;font-size:10pt}.jsoneditor .autocomplete.dropdown .item{color:#333}.jsoneditor .autocomplete.dropdown .item.hover{background-color:#ddd}.jsoneditor .autocomplete.hint{color:#aaa;top:4px;left:4px}.jsoneditor-treepath{padding:0 5px;overflow:hidden;white-space:nowrap;outline:0}.jsoneditor-treepath.show-all{word-wrap:break-word;white-space:normal;position:absolute;background-color:#ebebeb;z-index:999;box-shadow:2px 2px 12px rgba(128,128,128,0.3)}.jsoneditor-treepath.show-all span.jsoneditor-treepath-show-all-btn{display:none}.jsoneditor-treepath div.jsoneditor-contextmenu-root{position:absolute;left:0}.jsoneditor-treepath .jsoneditor-treepath-show-all-btn{position:absolute;background-color:#ebebeb;left:0;height:20px;padding:0 3px;cursor:pointer}.jsoneditor-treepath .jsoneditor-treepath-element{margin:1px;font-family:arial,sans-serif;font-size:10pt}.jsoneditor-treepath .jsoneditor-treepath-seperator{margin:2px;font-size:9pt;font-family:arial,sans-serif}.jsoneditor-treepath span.jsoneditor-treepath-element:hover,.jsoneditor-treepath span.jsoneditor-treepath-seperator:hover{cursor:pointer;text-decoration:underline}.jsoneditor-statusbar{line-height:26px;height:26px;color:gray;background-color:#ebebeb;border-top:1px solid #d3d3d3;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:10pt}.jsoneditor-statusbar>.jsoneditor-curserinfo-val{margin-right:12px}.jsoneditor-statusbar>.jsoneditor-curserinfo-count{margin-left:4px}.jsoneditor-statusbar>.jsoneditor-validation-error-icon{float:right;width:24px;height:24px;padding:0;margin-top:1px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") -168px -48px;cursor:pointer}.jsoneditor-statusbar>.jsoneditor-validation-error-count{float:right;margin:0 4px 0 0;cursor:pointer}.jsoneditor-statusbar>.jsoneditor-parse-error-icon{float:right;width:24px;height:24px;padding:0;margin:1px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") -25px 0}.jsoneditor-statusbar .jsoneditor-array-info a{color:inherit}div.jsoneditor-statusbar>.jsoneditor-curserinfo-label,div.jsoneditor-statusbar>.jsoneditor-size-info{margin:0 4px}.jsoneditor-navigation-bar{width:100%;height:26px;line-height:26px;padding:0;margin:0;border-bottom:1px solid #d3d3d3;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:gray;background-color:#ebebeb;overflow:hidden;font-family:arial,sans-serif;font-size:10pt}/*!\n * Selectr 2.4.0\n * https://github.com/Mobius1/Selectr\n *\n * Released under the MIT license\n */.selectr-container{position:relative}.selectr-container li{list-style:none}.selectr-hidden{position:absolute;overflow:hidden;clip:rect(0,0,0,0);width:1px;height:1px;margin:-1px;padding:0;border:0 none}.selectr-visible{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;z-index:11}.selectr-desktop.multiple .selectr-visible{display:none}.selectr-desktop.multiple.native-open .selectr-visible{top:100%;min-height:200px !important;height:auto;opacity:1;display:block}.selectr-container.multiple.selectr-mobile .selectr-selected{z-index:0}.selectr-selected{position:relative;z-index:1;box-sizing:border-box;width:100%;padding:7px 28px 7px 14px;cursor:pointer;border:1px solid #999;border-radius:3px;background-color:#fff}.selectr-selected::before{position:absolute;top:50%;right:10px;width:0;height:0;content:'';-o-transform:rotate(0) translate3d(0,-50%,0);-ms-transform:rotate(0) translate3d(0,-50%,0);-moz-transform:rotate(0) translate3d(0,-50%,0);-webkit-transform:rotate(0) translate3d(0,-50%,0);transform:rotate(0) translate3d(0,-50%,0);border-width:4px 4px 0 4px;border-style:solid;border-color:#6c7a86 transparent transparent}.selectr-container.open .selectr-selected::before,.selectr-container.native-open .selectr-selected::before{border-width:0 4px 4px 4px;border-style:solid;border-color:transparent transparent #6c7a86}.selectr-label{display:none;overflow:hidden;width:100%;white-space:nowrap;text-overflow:ellipsis}.selectr-placeholder{color:#6c7a86}.selectr-tags{margin:0;padding:0;white-space:normal}.has-selected .selectr-tags{margin:0 0 -2px}.selectr-tag{list-style:none;position:relative;float:left;padding:2px 25px 2px 8px;margin:0 2px 2px 0;cursor:default;color:#fff;border:medium none;border-radius:10px;background:#acb7bf none repeat scroll 0 0}.selectr-container.multiple.has-selected .selectr-selected{padding:5px 28px 5px 5px}.selectr-options-container{position:absolute;z-index:10000;top:calc(100% - 1px);left:0;display:none;box-sizing:border-box;width:100%;border-width:0 1px 1px;border-style:solid;border-color:transparent #999 #999;border-radius:0 0 3px 3px;background-color:#fff}.selectr-container.open .selectr-options-container{display:block}.selectr-input-container{position:relative;display:none}.selectr-clear,.selectr-input-clear,.selectr-tag-remove{position:absolute;top:50%;right:22px;width:20px;height:20px;padding:0;cursor:pointer;-o-transform:translate3d(0,-50%,0);-ms-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);border:medium none;background-color:transparent;z-index:11}.selectr-clear,.selectr-input-clear{display:none}.selectr-container.has-selected .selectr-clear,.selectr-input-container.active .selectr-input-clear{display:block}.selectr-selected .selectr-tag-remove{right:2px}.selectr-clear::before,.selectr-clear::after,.selectr-input-clear::before,.selectr-input-clear::after,.selectr-tag-remove::before,.selectr-tag-remove::after{position:absolute;top:5px;left:9px;width:2px;height:10px;content:' ';background-color:#6c7a86}.selectr-tag-remove::before,.selectr-tag-remove::after{top:4px;width:3px;height:12px;background-color:#fff}.selectr-clear:before,.selectr-input-clear::before,.selectr-tag-remove::before{-o-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.selectr-clear:after,.selectr-input-clear::after,.selectr-tag-remove::after{-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.selectr-input-container.active,.selectr-input-container.active .selectr-clear{display:block}.selectr-input{top:5px;left:5px;box-sizing:border-box;width:calc(100% - 30px);margin:10px 15px;padding:7px 30px 7px 9px;border:1px solid #999;border-radius:3px}.selectr-notice{display:none;box-sizing:border-box;width:100%;padding:8px 16px;border-top:1px solid #999;border-radius:0 0 3px 3px;background-color:#fff}.selectr-container.notice .selectr-notice{display:block}.selectr-container.notice .selectr-selected{border-radius:3px 3px 0 0}.selectr-options{position:relative;top:calc(100% + 2px);display:none;overflow-x:auto;overflow-y:scroll;max-height:200px;margin:0;padding:0}.selectr-container.open .selectr-options,.selectr-container.open .selectr-input-container,.selectr-container.notice .selectr-options-container{display:block}.selectr-option{position:relative;display:block;padding:5px 20px;list-style:outside none none;cursor:pointer;font-weight:normal}.selectr-options.optgroups>.selectr-option{padding-left:25px}.selectr-optgroup{font-weight:bold;padding:0}.selectr-optgroup--label{font-weight:bold;margin-top:10px;padding:5px 15px}.selectr-match{text-decoration:underline}.selectr-option.selected{background-color:#ddd}.selectr-option.active{color:#fff;background-color:#5897fb}.selectr-option.disabled{opacity:.4}.selectr-option.excluded{display:none}.selectr-container.open .selectr-selected{border-color:#999 #999 transparent #999;border-radius:3px 3px 0 0}.selectr-container.open .selectr-selected::after{-o-transform:rotate(180deg) translate3d(0,50%,0);-ms-transform:rotate(180deg) translate3d(0,50%,0);-moz-transform:rotate(180deg) translate3d(0,50%,0);-webkit-transform:rotate(180deg) translate3d(0,50%,0);transform:rotate(180deg) translate3d(0,50%,0)}.selectr-disabled{opacity:.6}.selectr-empty,.has-selected .selectr-placeholder{display:none}.has-selected .selectr-label{display:block}.taggable .selectr-selected{padding:4px 28px 4px 4px}.taggable .selectr-selected::after{display:table;content:\" \";clear:both}.taggable .selectr-label{width:auto}.taggable .selectr-tags{float:left;display:block}.taggable .selectr-placeholder{display:none}.input-tag{float:left;min-width:90px;width:auto}.selectr-tag-input{border:medium none;padding:3px 10px;width:100%;font-family:inherit;font-weight:inherit;font-size:inherit}.selectr-input-container.loading::after{position:absolute;top:50%;right:20px;width:20px;height:20px;content:'';-o-transform:translate3d(0,-50%,0);-ms-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);-o-transform-origin:50% 0 0;-ms-transform-origin:50% 0 0;-moz-transform-origin:50% 0 0;-webkit-transform-origin:50% 0 0;transform-origin:50% 0 0;-moz-animation:500ms linear 0s normal forwards infinite running spin;-webkit-animation:500ms linear 0s normal forwards infinite running spin;animation:500ms linear 0s normal forwards infinite running spin;border-width:3px;border-style:solid;border-color:#aaa #ddd #ddd;border-radius:50%}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0) translate3d(0,-50%,0);transform:rotate(0) translate3d(0,-50%,0)}100%{-webkit-transform:rotate(360deg) translate3d(0,-50%,0);transform:rotate(360deg) translate3d(0,-50%,0)}}@keyframes spin{0%{-webkit-transform:rotate(0) translate3d(0,-50%,0);transform:rotate(0) translate3d(0,-50%,0)}100%{-webkit-transform:rotate(360deg) translate3d(0,-50%,0);transform:rotate(360deg) translate3d(0,-50%,0)}}.selectr-container.open.inverted .selectr-selected{border-color:transparent #999 #999;border-radius:0 0 3px 3px}.selectr-container.inverted .selectr-options-container{border-width:1px 1px 0;border-color:#999 #999 transparent;border-radius:3px 3px 0 0;background-color:#fff}.selectr-container.inverted .selectr-options-container{top:auto;bottom:calc(100% - 1px)}.selectr-container ::-webkit-input-placeholder{color:#6c7a86;opacity:1}.selectr-container ::-moz-placeholder{color:#6c7a86;opacity:1}.selectr-container :-ms-input-placeholder{color:#6c7a86;opacity:1}.selectr-container ::placeholder{color:#6c7a86;opacity:1}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/jsoneditor-react/es/editor.min.css":
/*!*********************************************************!*\
  !*** ./node_modules/jsoneditor-react/es/editor.min.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./editor.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/jsoneditor-react/es/editor.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/jsoneditor-react/es/img/jsoneditor-icons.svg":
/*!*******************************************************************!*\
  !*** ./node_modules/jsoneditor-react/es/img/jsoneditor-icons.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" id=\"svg4136\" version=\"1.1\" inkscape:version=\"0.91 r13725\" sodipodi:docname=\"jsoneditor-icons.svg\"><title id=\"title6512\">JSON Editor Icons</title><metadata id=\"metadata4148\"><rdf:RDF><cc:Work rdf:about><dc:format>image/svg+xml</dc:format><dc:type rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\"></dc><dc:title>JSON Editor Icons</dc:title></cc:Work></rdf:RDF></metadata><defs id=\"defs4146\"></defs><sodipodi:namedview pagecolor=\"#ff63ff\" bordercolor=\"#666666\" borderopacity=\"1\" objecttolerance=\"10\" gridtolerance=\"10\" guidetolerance=\"10\" inkscape:pageopacity=\"0\" inkscape:pageshadow=\"2\" inkscape:window-width=\"1920\" inkscape:window-height=\"1026\" id=\"namedview4144\" showgrid=\"true\" inkscape:zoom=\"4\" inkscape:cx=\"13.229181\" inkscape:cy=\"119.82429\" inkscape:window-x=\"0\" inkscape:window-y=\"0\" inkscape:window-maximized=\"1\" inkscape:current-layer=\"svg4136\" showguides=\"false\" borderlayer=\"false\" inkscape:showpageshadow=\"true\" showborder=\"true\"><inkscape:grid type=\"xygrid\" id=\"grid4640\" empspacing=\"24\"></inkscape></sodipodi:namedview><rect style=\"fill:#4c4c4c;fill-opacity:1;stroke:none;stroke-width:0\" id=\"svg_1\" height=\"16\" width=\"16\" y=\"4\" x=\"4\"></rect><rect id=\"svg_1-7\" height=\"16\" width=\"16\" y=\"3.999995\" x=\"28.000006\" style=\"fill:#ec3f29;fill-opacity:0.94117647;stroke:none;stroke-width:0\"></rect><rect style=\"fill:#4c4c4c;fill-opacity:1;stroke:none;stroke-width:0\" x=\"52.000004\" y=\"3.999995\" width=\"16\" height=\"16\" id=\"rect4165\"></rect><rect id=\"rect4175\" height=\"16\" width=\"16\" y=\"3.9999852\" x=\"172.00002\" style=\"fill:#4c4c4c;fill-opacity:1;stroke:none;stroke-width:0\"></rect><rect id=\"rect4175-3\" height=\"16\" width=\"16\" y=\"3.999995\" x=\"196\" style=\"fill:#4c4c4c;fill-opacity:1;stroke:none;stroke-width:0\"></rect><g id=\"g4299\" style=\"stroke:none\"><rect x=\"7.0000048\" y=\"10.999998\" width=\"9.9999924\" height=\"1.9999986\" id=\"svg_1-1\" style=\"fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0\"></rect><rect x=\"11.000005\" y=\"7.0000114\" width=\"1.9999955\" height=\"9.9999838\" id=\"svg_1-1-1\" style=\"fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0\"></rect></g><g id=\"g4299-3\" transform=\"matrix(0.70710678,-0.70710678,0.70710678,0.70710678,19.029435,12.000001)\" style=\"stroke:none\"><rect x=\"7.0000048\" y=\"10.999998\" width=\"9.9999924\" height=\"1.9999986\" id=\"svg_1-1-0\" style=\"fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0\"></rect><rect x=\"11.000005\" y=\"7.0000114\" width=\"1.9999955\" height=\"9.9999838\" id=\"svg_1-1-1-9\" style=\"fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0\"></rect></g><rect id=\"svg_1-7-5\" height=\"6.9999905\" width=\"6.9999909\" y=\"7.0000048\" x=\"55.000004\" style=\"fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0\"></rect><rect style=\"fill:#ffffff;fill-opacity:1;stroke:#4c4c4c;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" x=\"58\" y=\"10.00001\" width=\"6.9999909\" height=\"6.9999905\" id=\"rect4354\"></rect><rect id=\"svg_1-7-5-7\" height=\"6.9999905\" width=\"6.9999909\" y=\"10.000005\" x=\"58.000004\" style=\"fill:#ffffff;fill-opacity:1;stroke:#3c80df;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.94117647\"></rect><g id=\"g4378\"><rect style=\"fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0\" x=\"198\" y=\"10.999999\" width=\"7.9999909\" height=\"1.9999965\" id=\"svg_1-7-5-3\"></rect><rect id=\"rect4374\" height=\"1.9999946\" width=\"11.999995\" y=\"7.0000005\" x=\"198\" style=\"fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0\"></rect><rect id=\"rect4376\" height=\"1.9999995\" width=\"3.9999928\" y=\"14.999996\" x=\"198\" style=\"fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0\"></rect></g><g transform=\"matrix(1,0,0,-1,-23.999995,23.999995)\" id=\"g4383\"><rect id=\"rect4385\" height=\"1.9999965\" width=\"7.9999909\" y=\"10.999999\" x=\"198\" style=\"fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0\"></rect><rect style=\"fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0\" x=\"198\" y=\"7.0000005\" width=\"11.999995\" height=\"1.9999946\" id=\"rect4387\"></rect><rect style=\"fill:#ffffff;fill-opacity:1;stroke:#000000;stroke-width:0\" x=\"198\" y=\"14.999996\" width=\"3.9999928\" height=\"1.9999995\" id=\"rect4389\"></rect></g><rect style=\"fill:#4c4c4c;fill-opacity:1;stroke:none\" id=\"rect3754-4\" width=\"16\" height=\"16\" x=\"76\" y=\"3.9999199\"></rect><path style=\"fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" d=\"m 85.10447,6.0157384 -0.0156,1.4063 c 3.02669,-0.2402 0.33008,3.6507996 2.48438,4.5780996 -2.18694,1.0938 0.49191,4.9069 -2.45313,4.5781 l -0.0156,1.4219 c 5.70828,0.559 1.03264,-5.1005 4.70313,-5.2656 l 0,-1.4063 c -3.61303,-0.027 1.11893,-5.7069996 -4.70313,-5.3124996 z\" id=\"path4351\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccccccc\"></path><path style=\"fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" d=\"m 82.78125,5.9984384 0.0156,1.4063 c -3.02668,-0.2402 -0.33007,3.6506996 -2.48437,4.5780996 2.18694,1.0938 -0.49192,4.9069 2.45312,4.5781 l 0.0156,1.4219 c -5.70827,0.559 -1.03263,-5.1004 -4.70312,-5.2656 l 0,-1.4063 c 3.61303,-0.027 -1.11894,-5.7070996 4.70312,-5.3124996 z\" id=\"path4351-9\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccccccc\"></path><rect style=\"fill:#4c4c4c;fill-opacity:1;stroke:none\" id=\"rect3754-25\" width=\"16\" height=\"16\" x=\"100\" y=\"3.9999199\"></rect><path style=\"fill:#ffffff;fill-opacity:1;stroke:none\" d=\"m 103.719,5.6719384 0,12.7187996 3.03125,0 0,-1.5313 -1.34375,0 0,-9.6249996 1.375,0 0,-1.5625 z\" id=\"path2987\" inkscape:connector-curvature=\"0\"></path><path style=\"fill:#ffffff;fill-opacity:1;stroke:none\" d=\"m 112.2185,5.6721984 0,12.7187996 -3.03125,0 0,-1.5313 1.34375,0 0,-9.6249996 -1.375,0 0,-1.5625 z\" id=\"path2987-1\" inkscape:connector-curvature=\"0\"></path><rect style=\"fill:#4c4c4c;fill-opacity:1;stroke:none\" id=\"rect3754-73\" width=\"16\" height=\"16\" x=\"124\" y=\"3.9999199\"></rect><path style=\"fill:#ffffff;fill-opacity:1;stroke:none\" d=\"m 126.2824,17.602938 1.78957,0 1.14143,-2.8641 5.65364,0 1.14856,2.8641 1.76565,0 -4.78687,-11.1610996 -1.91903,0 z\" id=\"path3780\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccccc\"></path><path style=\"fill:#4c4c4c;fill-opacity:1;stroke:none\" d=\"m 129.72704,13.478838 4.60852,0.01 -2.30426,-5.5497996 z\" id=\"path3782\" inkscape:connector-curvature=\"0\"></path><rect style=\"fill:#4c4c4c;fill-opacity:1;stroke:none\" id=\"rect3754-35\" width=\"16\" height=\"16\" x=\"148\" y=\"3.9999199\"></rect><path style=\"fill:#ffffff;fill-opacity:1;stroke:none\" d=\"m 156.47655,5.8917384 0,2.1797 0.46093,2.3983996 1.82813,0 0.39844,-2.3983996 0,-2.1797 z\" id=\"path5008-2\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccc\"></path><path style=\"fill:#ffffff;fill-opacity:1;stroke:none\" d=\"m 152.51561,5.8906384 0,2.1797 0.46094,2.3983996 1.82812,0 0.39844,-2.3983996 0,-2.1797 z\" id=\"path5008-2-8\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccc\"></path><rect id=\"svg_1-7-2\" height=\"1.9999961\" width=\"11.999996\" y=\"64\" x=\"54\" style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\"></rect><rect id=\"svg_1-7-2-2\" height=\"2.9999905\" width=\"2.9999907\" y=\"52\" x=\"80.000008\" style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\"></rect><rect style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\" x=\"85.000008\" y=\"52\" width=\"2.9999907\" height=\"2.9999905\" id=\"rect4561\"></rect><rect style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\" x=\"80.000008\" y=\"58\" width=\"2.9999907\" height=\"2.9999905\" id=\"rect4563\"></rect><rect id=\"rect4565\" height=\"2.9999905\" width=\"2.9999907\" y=\"58\" x=\"85.000008\" style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\"></rect><rect id=\"rect4567\" height=\"2.9999905\" width=\"2.9999907\" y=\"64\" x=\"80.000008\" style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\"></rect><rect style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\" x=\"85.000008\" y=\"64\" width=\"2.9999907\" height=\"2.9999905\" id=\"rect4569\"></rect><circle style=\"opacity:1;fill:none;fill-opacity:1;stroke:#4c4c4c;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none\" id=\"path4571\" cx=\"110.06081\" cy=\"57.939209\" r=\"4.7438836\"></circle><rect style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\" x=\"116.64566\" y=\"-31.79752\" width=\"4.229713\" height=\"6.4053884\" id=\"rect4563-2\" transform=\"matrix(0.70710678,0.70710678,-0.70710678,0.70710678,0,0)\"></rect><path style=\"fill:#4c4c4c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" d=\"M 125,56 138.77027,56.095 132,64 Z\" id=\"path4613\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccc\"></path><path sodipodi:nodetypes=\"cccc\" inkscape:connector-curvature=\"0\" id=\"path4615\" d=\"M 149,64 162.77027,63.905 156,56 Z\" style=\"fill:#4c4c4c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></path><rect style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\" x=\"54\" y=\"53\" width=\"11.999996\" height=\"1.9999961\" id=\"rect4638\"></rect><rect id=\"svg_1-7-2-24\" height=\"1.9999957\" width=\"12.99999\" y=\"-56\" x=\"53\" style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\" transform=\"matrix(0,1,-1,0,0,0)\"></rect><rect transform=\"matrix(0,1,-1,0,0,0)\" style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\" x=\"53\" y=\"-66\" width=\"12.99999\" height=\"1.9999957\" id=\"rect4657\"></rect><rect id=\"rect4659\" height=\"0.99999291\" width=\"11.999999\" y=\"57\" x=\"54\" style=\"fill:#4c4c4c;fill-opacity:0.98431373;stroke:none;stroke-width:0\"></rect><rect style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\" x=\"54\" y=\"88.000122\" width=\"11.999996\" height=\"1.9999961\" id=\"rect4661\"></rect><rect style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\" x=\"80.000008\" y=\"76.000122\" width=\"2.9999907\" height=\"2.9999905\" id=\"rect4663\"></rect><rect id=\"rect4665\" height=\"2.9999905\" width=\"2.9999907\" y=\"76.000122\" x=\"85.000008\" style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\"></rect><rect id=\"rect4667\" height=\"2.9999905\" width=\"2.9999907\" y=\"82.000122\" x=\"80.000008\" style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\"></rect><rect style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\" x=\"85.000008\" y=\"82.000122\" width=\"2.9999907\" height=\"2.9999905\" id=\"rect4669\"></rect><rect style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\" x=\"80.000008\" y=\"88.000122\" width=\"2.9999907\" height=\"2.9999905\" id=\"rect4671\"></rect><rect id=\"rect4673\" height=\"2.9999905\" width=\"2.9999907\" y=\"88.000122\" x=\"85.000008\" style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\"></rect><circle r=\"4.7438836\" cy=\"81.939331\" cx=\"110.06081\" id=\"circle4675\" style=\"opacity:1;fill:none;fill-opacity:1;stroke:#d3d3d3;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></circle><rect transform=\"matrix(0.70710678,0.70710678,-0.70710678,0.70710678,0,0)\" id=\"rect4677\" height=\"6.4053884\" width=\"4.229713\" y=\"-14.826816\" x=\"133.6163\" style=\"fill:#d3d3d3;fill-opacity:1;stroke:#d3d3d3;stroke-width:0;stroke-opacity:1\"></rect><path sodipodi:nodetypes=\"cccc\" inkscape:connector-curvature=\"0\" id=\"path4679\" d=\"m 125,80.000005 13.77027,0.09499 L 132,87.999992 Z\" style=\"fill:#d3d3d3;fill-opacity:1;fill-rule:evenodd;stroke:#d3d3d3;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></path><path style=\"fill:#d3d3d3;fill-opacity:1;fill-rule:evenodd;stroke:#d3d3d3;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" d=\"M 149,88.0002 162.77027,87.9052 156,80.0002 Z\" id=\"path4681\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccc\"></path><rect id=\"rect4683\" height=\"1.9999961\" width=\"11.999996\" y=\"77.000122\" x=\"54\" style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\"></rect><rect transform=\"matrix(0,1,-1,0,0,0)\" style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\" x=\"77.000122\" y=\"-56\" width=\"12.99999\" height=\"1.9999957\" id=\"rect4685\"></rect><rect id=\"rect4687\" height=\"1.9999957\" width=\"12.99999\" y=\"-66\" x=\"77.000122\" style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\" transform=\"matrix(0,1,-1,0,0,0)\"></rect><rect style=\"fill:#d3d3d3;fill-opacity:1;stroke:none;stroke-width:0;stroke-opacity:1\" x=\"54\" y=\"81.000122\" width=\"11.999999\" height=\"0.99999291\" id=\"rect4689\"></rect><rect id=\"rect4761-1\" height=\"1.9999945\" width=\"15.99999\" y=\"101\" x=\"76.000008\" style=\"fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0\"></rect><rect id=\"rect4761-0\" height=\"1.9999945\" width=\"15.99999\" y=\"105\" x=\"76.000008\" style=\"fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0\"></rect><rect id=\"rect4761-7\" height=\"1.9999945\" width=\"9\" y=\"109\" x=\"76.000008\" style=\"fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0\"></rect><rect id=\"rect4761-1-1\" height=\"1.9999945\" width=\"12\" y=\"125\" x=\"76.000008\" style=\"fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0\"></rect><rect id=\"rect4761-1-1-4\" height=\"1.9999945\" width=\"10\" y=\"137\" x=\"76.000008\" style=\"fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0\"></rect><rect id=\"rect4761-1-1-4-4\" height=\"1.9999945\" width=\"10\" y=\"129\" x=\"82\" style=\"fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0\"></rect><rect id=\"rect4761-1-1-4-4-3\" height=\"1.9999945\" width=\"9\" y=\"133\" x=\"82\" style=\"fill:#ffffff;fill-opacity:0.8;stroke:none;stroke-width:0\"></rect><path inkscape:connector-curvature=\"0\" style=\"color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.8;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.66157866;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate\" d=\"m 36.398438,100.0254 c -0.423362,-0.013 -0.846847,0.01 -1.265626,0.062 -1.656562,0.2196 -3.244567,0.9739 -4.507812,2.2266 L 29,100.5991 l -2.324219,7.7129 7.826172,-1.9062 -1.804687,-1.9063 c 1.597702,-1.5308 4.048706,-1.8453 5.984375,-0.7207 1.971162,1.1452 2.881954,3.3975 2.308593,5.5508 -0.573361,2.1533 -2.533865,3.6953 -4.830078,3.6953 l 0,3.0742 c 3.550756,0 6.710442,-2.4113 7.650391,-5.9414 0.939949,-3.5301 -0.618463,-7.2736 -3.710938,-9.0703 -1.159678,-0.6738 -2.431087,-1.0231 -3.701171,-1.0625 z\" id=\"path4138\"></path><path inkscape:connector-curvature=\"0\" style=\"color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.8;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.66157866;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate\" d=\"m 59.722656,99.9629 c -1.270084,0.039 -2.541493,0.3887 -3.701172,1.0625 -3.092475,1.7967 -4.650886,5.5402 -3.710937,9.0703 0.939949,3.5301 4.09768,5.9414 7.648437,5.9414 l 0,-3.0742 c -2.296214,0 -4.256717,-1.542 -4.830078,-3.6953 -0.573361,-2.1533 0.337432,-4.4056 2.308594,-5.5508 1.935731,-1.1246 4.38863,-0.8102 5.986326,0.7207 l -1.806638,1.9063 7.828128,1.9062 -2.32422,-7.7129 -1.62696,1.7168 c -1.26338,-1.2531 -2.848917,-2.0088 -4.505855,-2.2285 -0.418778,-0.055 -0.842263,-0.076 -1.265625,-0.062 z\" id=\"path4138-1\"></path><path inkscape:connector-curvature=\"0\" style=\"opacity:0.8;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.96599996;stroke-miterlimit:4;stroke-dasharray:none\" d=\"m 10.5,100 0,2 -2.4999996,0 L 12,107 l 4,-5 -2.5,0 0,-2 -3,0 z\" id=\"path3055-0-77\"></path><path style=\"opacity:0.8;fill:none;stroke:#ffffff;stroke-width:1.96599996;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" d=\"m 4.9850574,108.015 14.0298856,-0.03\" id=\"path5244-5-0-5\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cc\"></path><path style=\"opacity:0.8;fill:none;stroke:#ffffff;stroke-width:1.96599996;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" d=\"m 4.9849874,132.015 14.0298866,-0.03\" id=\"path5244-5-0-5-8\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cc\"></path><path inkscape:connector-curvature=\"0\" style=\"color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.4;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#4d4d4d;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.66157866;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate\" d=\"m 36.398438,123.9629 c -0.423362,-0.013 -0.846847,0.01 -1.265626,0.062 -1.656562,0.2196 -3.244567,0.9739 -4.507812,2.2266 L 29,124.5366 l -2.324219,7.7129 7.826172,-1.9062 -1.804687,-1.9063 c 1.597702,-1.5308 4.048706,-1.8453 5.984375,-0.7207 1.971162,1.1453 2.881954,3.3975 2.308593,5.5508 -0.573361,2.1533 -2.533864,3.6953 -4.830078,3.6953 l 0,3.0742 c 3.550757,0 6.710442,-2.4093 7.650391,-5.9394 0.939949,-3.5301 -0.618463,-7.2756 -3.710938,-9.0723 -1.159678,-0.6737 -2.431087,-1.0231 -3.701171,-1.0625 z\" id=\"path4138-12\"></path><path inkscape:connector-curvature=\"0\" style=\"color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.4;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#4d4d4d;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.66157866;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate\" d=\"m 59.722656,123.9629 c -1.270084,0.039 -2.541493,0.3888 -3.701172,1.0625 -3.092475,1.7967 -4.650886,5.5422 -3.710937,9.0723 0.939949,3.5301 4.09768,5.9394 7.648437,5.9394 l 0,-3.0742 c -2.296214,0 -4.256717,-1.542 -4.830078,-3.6953 -0.573361,-2.1533 0.337432,-4.4055 2.308594,-5.5508 1.935731,-1.1246 4.38863,-0.8102 5.986326,0.7207 l -1.806638,1.9063 7.828128,1.9062 -2.32422,-7.7129 -1.62696,1.7168 c -1.26338,-1.2531 -2.848917,-2.0088 -4.505855,-2.2285 -0.418778,-0.055 -0.842263,-0.076 -1.265625,-0.062 z\" id=\"path4138-1-3\"></path><path id=\"path6191\" d=\"m 10.5,116 0,-2 -2.4999996,0 L 12,109 l 4,5 -2.5,0 0,2 -3,0 z\" style=\"opacity:0.8;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.96599996;stroke-miterlimit:4;stroke-dasharray:none\" inkscape:connector-curvature=\"0\"></path><path inkscape:connector-curvature=\"0\" style=\"opacity:0.8;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.96599996;stroke-miterlimit:4;stroke-dasharray:none\" d=\"m 10.5,129 0,-2 -2.4999996,0 L 12,122 l 4,5 -2.5,0 0,2 -3,0 z\" id=\"path6193\"></path><path id=\"path6195\" d=\"m 10.5,135 0,2 -2.4999996,0 L 12,142 l 4,-5 -2.5,0 0,-2 -3,0 z\" style=\"opacity:0.8;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.96599996;stroke-miterlimit:4;stroke-dasharray:none\" inkscape:connector-curvature=\"0\"></path><path sodipodi:type=\"star\" style=\"fill:#4d4d4d;fill-opacity:0.90196078;stroke:#d3d3d3;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none\" id=\"path4500\" sodipodi:sides=\"3\" sodipodi:cx=\"11.55581\" sodipodi:cy=\"60.073242\" sodipodi:r1=\"5.1116104\" sodipodi:r2=\"2.5558052\" sodipodi:arg1=\"0\" sodipodi:arg2=\"1.0471976\" inkscape:flatsided=\"false\" inkscape:rounded=\"0\" inkscape:randomized=\"0\" d=\"m 16.66742,60.073242 -3.833708,2.213392 -3.8337072,2.213393 0,-4.426785 0,-4.426784 3.8337082,2.213392 z\" inkscape:transform-center-x=\"-1.2779026\"></path><path inkscape:transform-center-x=\"1.277902\" d=\"m -31.500004,60.073242 -3.833708,2.213392 -3.833707,2.213393 0,-4.426785 0,-4.426784 3.833707,2.213392 z\" inkscape:randomized=\"0\" inkscape:rounded=\"0\" inkscape:flatsided=\"false\" sodipodi:arg2=\"1.0471976\" sodipodi:arg1=\"0\" sodipodi:r2=\"2.5558052\" sodipodi:r1=\"5.1116104\" sodipodi:cy=\"60.073242\" sodipodi:cx=\"-36.611614\" sodipodi:sides=\"3\" id=\"path4502\" style=\"fill:#4d4d4d;fill-opacity:0.90196078;stroke:#d3d3d3;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none\" sodipodi:type=\"star\" transform=\"scale(-1,1)\"></path><path d=\"m 16.66742,60.073212 -3.833708,2.213392 -3.8337072,2.213392 0,-4.426784 0,-4.426785 3.8337082,2.213392 z\" inkscape:randomized=\"0\" inkscape:rounded=\"0\" inkscape:flatsided=\"false\" sodipodi:arg2=\"1.0471976\" sodipodi:arg1=\"0\" sodipodi:r2=\"2.5558052\" sodipodi:r1=\"5.1116104\" sodipodi:cy=\"60.073212\" sodipodi:cx=\"11.55581\" sodipodi:sides=\"3\" id=\"path4504\" style=\"fill:#4d4d4d;fill-opacity:0.90196078;stroke:#d3d3d3;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none\" sodipodi:type=\"star\" transform=\"matrix(0,1,-1,0,72.0074,71.7877)\" inkscape:transform-center-y=\"1.2779029\"></path><path inkscape:transform-center-y=\"-1.2779026\" transform=\"matrix(0,-1,-1,0,96,96)\" sodipodi:type=\"star\" style=\"fill:#4d4d4d;fill-opacity:0.90196078;stroke:#d3d3d3;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none\" id=\"path4506\" sodipodi:sides=\"3\" sodipodi:cx=\"11.55581\" sodipodi:cy=\"60.073212\" sodipodi:r1=\"5.1116104\" sodipodi:r2=\"2.5558052\" sodipodi:arg1=\"0\" sodipodi:arg2=\"1.0471976\" inkscape:flatsided=\"false\" inkscape:rounded=\"0\" inkscape:randomized=\"0\" d=\"m 16.66742,60.073212 -3.833708,2.213392 -3.8337072,2.213392 0,-4.426784 0,-4.426785 3.8337082,2.213392 z\"></path><path sodipodi:nodetypes=\"cccc\" inkscape:connector-curvature=\"0\" id=\"path4615-5\" d=\"m 171.82574,65.174193 16.34854,0 -8.17427,-13.348454 z\" style=\"fill:#fbb917;fill-opacity:1;fill-rule:evenodd;stroke:#fbb917;stroke-width:1.65161395;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"></path><path style=\"opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" d=\"m 179,55 0,6 2,0 0,-6\" id=\"path4300\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccc\"></path><path style=\"opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" d=\"m 179,62 0,2 2,0 0,-2\" id=\"path4300-6\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccc\"></path><path style=\"fill:#ffffff;fill-opacity:0.8;fill-rule:evenodd;stroke:#ffffff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:round;stroke-opacity:0.8\" d=\"M 99.994369,113.0221 102,114.98353 l 7,-6.9558 3,0.97227 2,-1 1,-2 0,-3 -3,3 -3,-3 3,-3 -3,0 -2,1 -1,2 0.99437,3.0221 z\" id=\"path4268\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccccccccccc\"></path><rect id=\"rect4175-3-5\" height=\"16\" width=\"16\" y=\"4\" x=\"220\" style=\"fill:#4c4c4c;fill-opacity:1;stroke:none;stroke-width:0\"></rect><path style=\"fill:#ffffff;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" d=\"m 234,6 0,2 -5,5 0,5 -2,0 0,-5 -5,-5 0,-2\" id=\"path3546\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccccccc\"></path><g transform=\"matrix(1.3333328,0,0,-1.5999992,-139.9999,127.19999)\" id=\"g4383-6\"><rect id=\"rect4385-2\" height=\"1.2499905\" width=\"5.9999924\" y=\"12.625005\" x=\"198.00002\" style=\"fill:#ffffff;fill-opacity:0.8;stroke:#000000;stroke-width:0\"></rect><rect style=\"fill:#ffffff;fill-opacity:0.8;stroke:#000000;stroke-width:0\" x=\"198.00002\" y=\"15.125007\" width=\"7.4999928\" height=\"1.2499949\" id=\"rect4387-9\"></rect><rect style=\"fill:#ffffff;fill-opacity:0.8;stroke:#000000;stroke-width:0\" x=\"198.00002\" y=\"7.6250024\" width=\"2.9999909\" height=\"1.2499905\" id=\"rect4389-1-0\"></rect><rect style=\"fill:#ffffff;fill-opacity:0.8;stroke:#000000;stroke-width:0\" x=\"198.00002\" y=\"10.125004\" width=\"4.4999919\" height=\"1.2499905\" id=\"rect4389-1-9\"></rect><path style=\"fill:#ffffff;fill-opacity:0.8;fill-rule:evenodd;stroke:none;stroke-width:0.68465352px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" d=\"m 207.00001,16.375004 0,-5.625005 -2.25,0 3,-3.1250014 3,3.1250014 -2.25,0 0,5.625005 -1.5,0\" id=\"path4402\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccccccc\"></path></g><path style=\"fill:#ffffff;fill-opacity:0.8;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" d=\"m 164,100 0,3 -6,6 0,7 -4,0 0,-7 -6,-6 0,-3\" id=\"path3546-2-2\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccccccc\"></path><rect style=\"fill:#4c4c4c;fill-opacity:1;stroke:none;stroke-width:0\" id=\"svg_1-3\" height=\"16\" width=\"16\" y=\"28\" x=\"4\"></rect><path sodipodi:nodetypes=\"ccccccccc\" inkscape:connector-curvature=\"0\" id=\"path4402-5-7\" d=\"m 15,41 0,-7 -4,0 0,3 -5,-4 5,-4 0,3 6,0 0,9\" style=\"fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.68465352px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"></path></svg>"

/***/ }),

/***/ "./node_modules/jsoneditor-react/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/jsoneditor-react/es/index.js ***!
  \***************************************************/
/*! exports provided: JsonEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonEditor", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var jsoneditorMinimalist = createCommonjsModule(function (module, exports) {
/*!
 * jsoneditor.js
 *
 * @brief
 * JSONEditor is a web-based tool to view, edit, format, and validate JSON.
 * It has various modes such as a tree editor, a code editor, and a plain text
 * editor.
 *
 * Supported browsers: Chrome, Firefox, Safari, Opera, Internet Explorer 8+
 *
 * @license
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * Copyright (c) 2011-2019 Jos de Jong, http://jsoneditoronline.org
 *
 * @author  Jos de Jong, <wjosdejong@gmail.com>
 * @version 7.1.0
 * @date    2019-10-13
 */

(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repair", function() { return repair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeUnicodeChars", function() { return escapeUnicodeChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUrl", function() { return isUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteLeft", function() { return getAbsoluteLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteTop", function() { return getAbsoluteTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClassName", function() { return addClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllClassNames", function() { return removeAllClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassName", function() { return removeClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripFormatting", function() { return stripFormatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEndOfContentEditable", function() { return setEndOfContentEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectContentEditable", function() { return selectContentEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelection", function() { return getSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelection", function() { return setSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectionOffset", function() { return getSelectionOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectionOffset", function() { return setSelectionOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerText", function() { return getInnerText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasParentNode", function() { return hasParentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternetExplorerVersion", function() { return getInternetExplorerVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return isFirefox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChildOf", function() { return isChildOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyPath", function() { return stringifyPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "improveSchemaError", function() { return improveSchemaError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidValidationError", function() { return isValidValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insideRect", function() { return insideRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textDiff", function() { return textDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputSelection", function() { return getInputSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexForPosition", function() { return getIndexForPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionForPath", function() { return getPositionForPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileJSONPointer", function() { return compileJSONPointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorCSS", function() { return getColorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidColor", function() { return isValidColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFieldTooltip", function() { return makeFieldTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUniqueName", function() { return findUniqueName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildPaths", function() { return getChildPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortObjectKeys", function() { return sortObjectKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseString", function() { return parseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatSize", function() { return formatSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitCharacters", function() { return limitCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var javascript_natural_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var javascript_natural_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(javascript_natural_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jsonlint_jsonlint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _assets_jsonlint_jsonlint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_jsonlint_jsonlint__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var json_source_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var json_source_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(json_source_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var MAX_ITEMS_FIELDS_COLLECTION = 10000;
/**
 * Parse JSON using the parser built-in in the browser.
 * On exception, the jsonString is validated and a detailed error is thrown.
 * @param {String} jsonString
 * @return {JSON} json
 */

function parse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    // try to throw a more detailed error message using validate
    validate(jsonString); // rethrow the original error

    throw err;
  }
}
/**
 * Repair a JSON-like string containing. For example changes JavaScript
 * notation into JSON notation.
 * This function for example changes a string like "{a: 2, 'b': {c: 'd'}"
 * into '{"a": 2, "b": {"c": "d"}'
 * @param {string} jsString
 * @returns {string} json
 */

function repair(jsString) {
  // TODO: refactor this function, it's too large and complicated now
  // escape all single and double quotes inside strings
  var chars = [];
  var i = 0; // If JSON starts with a function (characters/digits/"_-"), remove this function.
  // This is useful for "stripping" JSONP objects to become JSON
  // For example: /* some comment */ function_12321321 ( [{"a":"b"}] ); => [{"a":"b"}]

  var match = jsString.match(/^\s*(\/\*(.|[\r\n])*?\*\/)?\s*[\da-zA-Z_$]+\s*\(([\s\S]*)\)\s*;?\s*$/);

  if (match) {
    jsString = match[3];
  }

  var controlChars = {
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t'
  };
  var quote = '\'';
  var quoteDbl = '"';
  var quoteLeft = "\u2018";
  var quoteRight = "\u2019";
  var quoteDblLeft = "\u201C";
  var quoteDblRight = "\u201D";
  var graveAccent = "`";
  var acuteAccent = "\xB4"; // helper functions to get the current/prev/next character

  function curr() {
    return jsString.charAt(i);
  }

  function next() {
    return jsString.charAt(i + 1);
  }

  function prev() {
    return jsString.charAt(i - 1);
  }

  function isWhiteSpace(c) {
    return c === ' ' || c === '\n' || c === '\r' || c === '\t';
  } // get the last parsed non-whitespace character


  function lastNonWhitespace() {
    var p = chars.length - 1;

    while (p >= 0) {
      var pp = chars[p];

      if (!isWhiteSpace(pp)) {
        return pp;
      }

      p--;
    }

    return '';
  } // get at the first next non-white space character


  function nextNonWhiteSpace() {
    var iNext = i + 1;

    while (iNext < jsString.length && isWhiteSpace(jsString[iNext])) {
      iNext++;
    }

    return jsString[iNext];
  } // skip a block comment '/* ... */'


  function skipBlockComment() {
    i += 2;

    while (i < jsString.length && (curr() !== '*' || next() !== '/')) {
      i++;
    }

    i += 2;
  } // skip a comment '// ...'


  function skipComment() {
    i += 2;

    while (i < jsString.length && curr() !== '\n') {
      i++;
    }
  }
  /**
   * parse single or double quoted string. Returns the parsed string
   * @param {string} endQuote
   * @return {string}
   */


  function parseString(endQuote) {
    var string = '';
    string += '"';
    i++;
    var c = curr();

    while (i < jsString.length && c !== endQuote) {
      if (c === '"' && prev() !== '\\') {
        // unescaped double quote, escape it
        string += '\\"';
      } else if (c in controlChars) {
        // replace unescaped control characters with escaped ones
        string += controlChars[c];
      } else if (c === '\\') {
        // remove the escape character when followed by a single quote ', not needed
        i++;
        c = curr();

        if (c !== '\'') {
          string += '\\';
        }

        string += c;
      } else {
        // regular character
        string += c;
      }

      i++;
      c = curr();
    }

    if (c === endQuote) {
      string += '"';
      i++;
    }

    return string;
  } // parse an unquoted key


  function parseKey() {
    var specialValues = ['null', 'true', 'false'];
    var key = '';
    var c = curr();
    var regexp = /[a-zA-Z_$\d]/; // letter, number, underscore, dollar character

    while (regexp.test(c)) {
      key += c;
      i++;
      c = curr();
    }

    if (specialValues.indexOf(key) === -1) {
      return '"' + key + '"';
    } else {
      return key;
    }
  }

  function parseMongoDataType() {
    var c = curr();
    var value;
    var dataType = '';

    while (/[a-zA-Z_$]/.test(c)) {
      dataType += c;
      i++;
      c = curr();
    }

    if (dataType.length > 0 && c === '(') {
      // This is an MongoDB data type like {"_id": ObjectId("123")}
      i++;
      c = curr();

      if (c === '"') {
        // a data type containing a string, like ISODate("2012-12-19T06:01:17.171Z")
        value = parseString(c);
        c = curr();
      } else {
        // a data type containing a value, like 'NumberLong(2)'
        value = '';

        while (c !== ')' && c !== '') {
          value += c;
          i++;
          c = curr();
        }
      }

      if (c === ')') {
        // skip the closing bracket at the end
        i++; // return the value (strip the data type object)

        return value;
      } else {
        // huh? that's unexpected. don't touch it
        return dataType + '(' + value + c;
      }
    } else {
      // hm, no Mongo data type after all
      return dataType;
    }
  }

  function isSpecialWhiteSpace(c) {
    return c === "\xA0" || c >= "\u2000" && c <= "\u200A" || c === "\u202F" || c === "\u205F" || c === "\u3000";
  }

  while (i < jsString.length) {
    var c = curr();

    if (c === '/' && next() === '*') {
      skipBlockComment();
    } else if (c === '/' && next() === '/') {
      skipComment();
    } else if (isSpecialWhiteSpace(c)) {
      // special white spaces (like non breaking space)
      chars.push(' ');
      i++;
    } else if (c === quote) {
      chars.push(parseString(c));
    } else if (c === quoteDbl) {
      chars.push(parseString(quoteDbl));
    } else if (c === graveAccent) {
      chars.push(parseString(acuteAccent));
    } else if (c === quoteLeft) {
      chars.push(parseString(quoteRight));
    } else if (c === quoteDblLeft) {
      chars.push(parseString(quoteDblRight));
    } else if (c === ',' && [']', '}'].indexOf(nextNonWhiteSpace()) !== -1) {
      // skip trailing commas
      i++;
    } else if (/[a-zA-Z_$]/.test(c) && ['{', ','].indexOf(lastNonWhitespace()) !== -1) {
      // an unquoted object key (like a in '{a:2}')
      chars.push(parseKey());
    } else {
      if (/[a-zA-Z_$]/.test(c)) {
        chars.push(parseMongoDataType());
      } else {
        chars.push(c);
        i++;
      }
    }
  }

  return chars.join('');
}
/**
 * Escape unicode characters.
 * For example input '\u2661' (length 1) will output '\\u2661' (length 5).
 * @param {string} text
 * @return {string}
 */

function escapeUnicodeChars( // see https://www.wikiwand.com/en/UTF-16
text) {
  return (// note: we leave surrogate pairs as two individual chars,
    // as JSON doesn't interpret them as a single unicode char.
    text.replace(/[\u007F-\uFFFF]/g, function (c) {
      return "\\u" + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
    })
  );
}
/**
 * Validate a string containing a JSON object
 * This method uses JSONLint to validate the String. If JSONLint is not
 * available, the built-in JSON parser of the browser is used.
 * @param {String} jsonString   String with an (invalid) JSON object
 * @throws Error
 */

function validate(jsonString) {
  if (typeof _assets_jsonlint_jsonlint__WEBPACK_IMPORTED_MODULE_2___default.a !== 'undefined') {
    _assets_jsonlint_jsonlint__WEBPACK_IMPORTED_MODULE_2___default.a.parse(jsonString);
  } else {
    JSON.parse(jsonString);
  }
}
/**
 * Extend object a with the properties of object b
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 */

function extend(a, b) {
  for (var prop in b) {
    if (hasOwnProperty(b, prop)) {
      a[prop] = b[prop];
    }
  }

  return a;
}
/**
 * Remove all properties from object a
 * @param {Object} a
 * @return {Object} a
 */

function clear(a) {
  for (var prop in a) {
    if (hasOwnProperty(a, prop)) {
      delete a[prop];
    }
  }

  return a;
}
/**
 * Get the type of an object
 * @param {*} object
 * @return {String} type
 */

function getType(object) {
  if (object === null) {
    return 'null';
  }

  if (object === undefined) {
    return 'undefined';
  }

  if (object instanceof Number || typeof object === 'number') {
    return 'number';
  }

  if (object instanceof String || typeof object === 'string') {
    return 'string';
  }

  if (object instanceof Boolean || typeof object === 'boolean') {
    return 'boolean';
  }

  if (object instanceof RegExp) {
    return 'regexp';
  }

  if (isArray(object)) {
    return 'array';
  }

  return 'object';
}
/**
 * Test whether a text contains a url (matches when a string starts
 * with 'http://*' or 'https://*' and has no whitespace characters)
 * @param {String} text
 */

var isUrlRegex = /^https?:\/\/\S+$/;
function isUrl(text) {
  return (typeof text === 'string' || text instanceof String) && isUrlRegex.test(text);
}
/**
 * Tes whether given object is an Array
 * @param {*} obj
 * @returns {boolean} returns true when obj is an array
 */

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
/**
 * Retrieve the absolute left value of a DOM element
 * @param {Element} elem    A dom element, for example a div
 * @return {Number} left    The absolute left position of this element
 *                          in the browser page.
 */

function getAbsoluteLeft(elem) {
  var rect = elem.getBoundingClientRect();
  return rect.left + window.pageXOffset || document.scrollLeft || 0;
}
/**
 * Retrieve the absolute top value of a DOM element
 * @param {Element} elem    A dom element, for example a div
 * @return {Number} top     The absolute top position of this element
 *                          in the browser page.
 */

function getAbsoluteTop(elem) {
  var rect = elem.getBoundingClientRect();
  return rect.top + window.pageYOffset || document.scrollTop || 0;
}
/**
 * add a className to the given elements style
 * @param {Element} elem
 * @param {String} className
 */

function addClassName(elem, className) {
  var classes = elem.className.split(' ');

  if (classes.indexOf(className) === -1) {
    classes.push(className); // add the class to the array

    elem.className = classes.join(' ');
  }
}
/**
 * remove all classes from the given elements style
 * @param {Element} elem
 */

function removeAllClassNames(elem) {
  elem.className = '';
}
/**
 * add a className to the given elements style
 * @param {Element} elem
 * @param {String} className
 */

function removeClassName(elem, className) {
  var classes = elem.className.split(' ');
  var index = classes.indexOf(className);

  if (index !== -1) {
    classes.splice(index, 1); // remove the class from the array

    elem.className = classes.join(' ');
  }
}
/**
 * Strip the formatting from the contents of a div
 * the formatting from the div itself is not stripped, only from its childs.
 * @param {Element} divElement
 */

function stripFormatting(divElement) {
  var childs = divElement.childNodes;

  for (var i = 0, iMax = childs.length; i < iMax; i++) {
    var child = childs[i]; // remove the style

    if (child.style) {
      // TODO: test if child.attributes does contain style
      child.removeAttribute('style');
    } // remove all attributes


    var attributes = child.attributes;

    if (attributes) {
      for (var j = attributes.length - 1; j >= 0; j--) {
        var attribute = attributes[j];

        if (attribute.specified === true) {
          child.removeAttribute(attribute.name);
        }
      }
    } // recursively strip childs


    stripFormatting(child);
  }
}
/**
 * Set focus to the end of an editable div
 * code from Nico Burns
 * http://stackoverflow.com/users/140293/nico-burns
 * http://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity
 * @param {Element} contentEditableElement   A content editable div
 */

function setEndOfContentEditable(contentEditableElement) {
  var range, selection;

  if (document.createRange) {
    range = document.createRange(); // Create a range (a range is a like the selection but invisible)

    range.selectNodeContents(contentEditableElement); // Select the entire contents of the element with the range

    range.collapse(false); // collapse the range to the end point. false means collapse to end rather than the start

    selection = window.getSelection(); // get the selection object (allows you to change selection)

    selection.removeAllRanges(); // remove any selections already made

    selection.addRange(range); // make the range you have just created the visible selection
  }
}
/**
 * Select all text of a content editable div.
 * http://stackoverflow.com/a/3806004/1262753
 * @param {Element} contentEditableElement   A content editable div
 */

function selectContentEditable(contentEditableElement) {
  if (!contentEditableElement || contentEditableElement.nodeName !== 'DIV') {
    return;
  }

  var sel, range;

  if (window.getSelection && document.createRange) {
    range = document.createRange();
    range.selectNodeContents(contentEditableElement);
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
}
/**
 * Get text selection
 * http://stackoverflow.com/questions/4687808/contenteditable-selected-text-save-and-restore
 * @return {Range | TextRange | null} range
 */

function getSelection() {
  if (window.getSelection) {
    var sel = window.getSelection();

    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  }

  return null;
}
/**
 * Set text selection
 * http://stackoverflow.com/questions/4687808/contenteditable-selected-text-save-and-restore
 * @param {Range | TextRange | null} range
 */

function setSelection(range) {
  if (range) {
    if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
}
/**
 * Get selected text range
 * @return {Object} params  object containing parameters:
 *                              {Number}  startOffset
 *                              {Number}  endOffset
 *                              {Element} container  HTML element holding the
 *                                                   selected text element
 *                          Returns null if no text selection is found
 */

function getSelectionOffset() {
  var range = getSelection();

  if (range && 'startOffset' in range && 'endOffset' in range && range.startContainer && range.startContainer === range.endContainer) {
    return {
      startOffset: range.startOffset,
      endOffset: range.endOffset,
      container: range.startContainer.parentNode
    };
  }

  return null;
}
/**
 * Set selected text range in given element
 * @param {Object} params   An object containing:
 *                              {Element} container
 *                              {Number} startOffset
 *                              {Number} endOffset
 */

function setSelectionOffset(params) {
  if (document.createRange && window.getSelection) {
    var selection = window.getSelection();

    if (selection) {
      var range = document.createRange();

      if (!params.container.firstChild) {
        params.container.appendChild(document.createTextNode(''));
      } // TODO: do not suppose that the first child of the container is a textnode,
      //       but recursively find the textnodes


      range.setStart(params.container.firstChild, params.startOffset);
      range.setEnd(params.container.firstChild, params.endOffset);
      setSelection(range);
    }
  }
}
/**
 * Get the inner text of an HTML element (for example a div element)
 * @param {Element} element
 * @param {Object} [buffer]
 * @return {String} innerText
 */

function getInnerText(element, buffer) {
  var first = buffer === undefined;

  if (first) {
    buffer = {
      text: '',
      flush: function flush() {
        var text = this.text;
        this.text = '';
        return text;
      },
      set: function set(text) {
        this.text = text;
      }
    };
  } // text node


  if (element.nodeValue) {
    return buffer.flush() + element.nodeValue;
  } // divs or other HTML elements


  if (element.hasChildNodes()) {
    var childNodes = element.childNodes;
    var innerText = '';

    for (var i = 0, iMax = childNodes.length; i < iMax; i++) {
      var child = childNodes[i];

      if (child.nodeName === 'DIV' || child.nodeName === 'P') {
        var prevChild = childNodes[i - 1];
        var prevName = prevChild ? prevChild.nodeName : undefined;

        if (prevName && prevName !== 'DIV' && prevName !== 'P' && prevName !== 'BR') {
          innerText += '\n';
          buffer.flush();
        }

        innerText += getInnerText(child, buffer);
        buffer.set('\n');
      } else if (child.nodeName === 'BR') {
        innerText += buffer.flush();
        buffer.set('\n');
      } else {
        innerText += getInnerText(child, buffer);
      }
    }

    return innerText;
  } else {
    if (element.nodeName === 'P' && getInternetExplorerVersion() !== -1) {
      // On Internet Explorer, a <p> with hasChildNodes()==false is
      // rendered with a new line. Note that a <p> with
      // hasChildNodes()==true is rendered without a new line
      // Other browsers always ensure there is a <br> inside the <p>,
      // and if not, the <p> does not render a new line
      return buffer.flush();
    }
  } // br or unknown


  return '';
}
/**
 * Test whether an element has the provided parent node somewhere up the node tree.
 * @param {Element} elem
 * @param {Element} parent
 * @return {boolean}
 */

function hasParentNode(elem, parent) {
  var e = elem ? elem.parentNode : undefined;

  while (e) {
    if (e === parent) {
      return true;
    }

    e = e.parentNode;
  }

  return false;
}
/**
 * Returns the version of Internet Explorer or a -1
 * (indicating the use of another browser).
 * Source: http://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
 * @return {Number} Internet Explorer version, or -1 in case of an other browser
 */

function getInternetExplorerVersion() {
  if (_ieVersion === -1) {
    var rv = -1; // Return value assumes failure.

    if (typeof navigator !== 'undefined' && navigator.appName === 'Microsoft Internet Explorer') {
      var ua = navigator.userAgent;
      var re = new RegExp('MSIE ([0-9]+[.0-9]+)');

      if (re.exec(ua) != null) {
        rv = parseFloat(RegExp.$1);
      }
    }

    _ieVersion = rv;
  }

  return _ieVersion;
}
/**
 * Test whether the current browser is Firefox
 * @returns {boolean} isFirefox
 */

function isFirefox() {
  return typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Firefox') !== -1;
}
/**
 * cached internet explorer version
 * @type {Number}
 * @private
 */

var _ieVersion = -1;
/**
 * Add and event listener. Works for all browsers
 * @param {Element}     element    An html element
 * @param {string}      action     The action, for example "click",
 *                                 without the prefix "on"
 * @param {function}    listener   The callback function to be executed
 * @param {boolean}     [useCapture] false by default
 * @return {function}   the created event listener
 */


function addEventListener(element, action, listener, useCapture) {
  if (element.addEventListener) {
    if (useCapture === undefined) {
      useCapture = false;
    }

    if (action === 'mousewheel' && isFirefox()) {
      action = 'DOMMouseScroll'; // For Firefox
    }

    element.addEventListener(action, listener, useCapture);
    return listener;
  } else if (element.attachEvent) {
    // Old IE browsers
    var f = function f() {
      return listener.call(element, window.event);
    };

    element.attachEvent('on' + action, f);
    return f;
  }
}
/**
 * Remove an event listener from an element
 * @param {Element}  element   An html dom element
 * @param {string}   action    The name of the event, for example "mousedown"
 * @param {function} listener  The listener function
 * @param {boolean}  [useCapture]   false by default
 */

function removeEventListener(element, action, listener, useCapture) {
  if (element.removeEventListener) {
    if (useCapture === undefined) {
      useCapture = false;
    }

    if (action === 'mousewheel' && isFirefox()) {
      action = 'DOMMouseScroll'; // For Firefox
    }

    element.removeEventListener(action, listener, useCapture);
  } else if (element.detachEvent) {
    // Old IE browsers
    element.detachEvent('on' + action, listener);
  }
}
/**
 * Test if an element is a child of a parent element.
 * @param {Element} elem
 * @param {Element} parent
 * @return {boolean} returns true if elem is a child of the parent
 */

function isChildOf(elem, parent) {
  var e = elem.parentNode;

  while (e) {
    if (e === parent) {
      return true;
    }

    e = e.parentNode;
  }

  return false;
}
/**
 * Parse a JSON path like '.items[3].name' into an array
 * @param {string} jsonPath
 * @return {Array}
 */

function parsePath(jsonPath) {
  var path = [];
  var i = 0;

  function parseProperty() {
    var prop = '';

    while (jsonPath[i] !== undefined && /[\w$]/.test(jsonPath[i])) {
      prop += jsonPath[i];
      i++;
    }

    if (prop === '') {
      throw new Error('Invalid JSON path: property name expected at index ' + i);
    }

    return prop;
  }

  function parseIndex(end) {
    var name = '';

    while (jsonPath[i] !== undefined && jsonPath[i] !== end) {
      name += jsonPath[i];
      i++;
    }

    if (jsonPath[i] !== end) {
      throw new Error('Invalid JSON path: unexpected end, character ' + end + ' expected');
    }

    return name;
  }

  while (jsonPath[i] !== undefined) {
    if (jsonPath[i] === '.') {
      i++;
      path.push(parseProperty());
    } else if (jsonPath[i] === '[') {
      i++;

      if (jsonPath[i] === '\'' || jsonPath[i] === '"') {
        var end = jsonPath[i];
        i++;
        path.push(parseIndex(end));

        if (jsonPath[i] !== end) {
          throw new Error('Invalid JSON path: closing quote \' expected at index ' + i);
        }

        i++;
      } else {
        var index = parseIndex(']').trim();

        if (index.length === 0) {
          throw new Error('Invalid JSON path: array value expected at index ' + i);
        } // Coerce numeric indices to numbers, but ignore star


        index = index === '*' ? index : JSON.parse(index);
        path.push(index);
      }

      if (jsonPath[i] !== ']') {
        throw new Error('Invalid JSON path: closing bracket ] expected at index ' + i);
      }

      i++;
    } else {
      throw new Error('Invalid JSON path: unexpected character "' + jsonPath[i] + '" at index ' + i);
    }
  }

  return path;
}
/**
 * Stringify an array with a path in a JSON path like '.items[3].name'
 * @param {Array.<string | number>} path
 * @returns {string}
 */

function stringifyPath(path) {
  return path.map(function (p) {
    if (typeof p === 'number') {
      return '[' + p + ']';
    } else if (typeof p === 'string' && p.match(/^[A-Za-z0-9_$]+$/)) {
      return '.' + p;
    } else {
      return '["' + p + '"]';
    }
  }).join('');
}
/**
 * Improve the error message of a JSON schema error
 * @param {Object} error
 * @return {Object} The error
 */

function improveSchemaError(error) {
  if (error.keyword === 'enum' && Array.isArray(error.schema)) {
    var enums = error.schema;

    if (enums) {
      enums = enums.map(function (value) {
        return JSON.stringify(value);
      });

      if (enums.length > 5) {
        var more = ['(' + (enums.length - 5) + ' more...)'];
        enums = enums.slice(0, 5);
        enums.push(more);
      }

      error.message = 'should be equal to one of: ' + enums.join(', ');
    }
  }

  if (error.keyword === 'additionalProperties') {
    error.message = 'should NOT have additional property: ' + error.params.additionalProperty;
  }

  return error;
}
/**
 * Test whether something is a Promise
 * @param {*} object
 * @returns {boolean} Returns true when object is a promise, false otherwise
 */

function isPromise(object) {
  return object && typeof object.then === 'function' && typeof object["catch"] === 'function';
}
/**
 * Test whether a custom validation error has the correct structure
 * @param {*} validationError The error to be checked.
 * @returns {boolean} Returns true if the structure is ok, false otherwise
 */

function isValidValidationError(validationError) {
  return _typeof(validationError) === 'object' && Array.isArray(validationError.path) && typeof validationError.message === 'string';
}
/**
 * Test whether the child rect fits completely inside the parent rect.
 * @param {ClientRect} parent
 * @param {ClientRect} child
 * @param {number} margin
 */

function insideRect(parent, child, margin) {
  var _margin = margin !== undefined ? margin : 0;

  return child.left - _margin >= parent.left && child.right + _margin <= parent.right && child.top - _margin >= parent.top && child.bottom + _margin <= parent.bottom;
}
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds.
 *
 * Source: https://davidwalsh.name/javascript-debounce-function
 *
 * @param {function} func
 * @param {number} wait                 Number in milliseconds
 * @param {boolean} [immediate=false]   If `immediate` is passed, trigger the
 *                                      function on the leading edge, instead
 *                                      of the trailing.
 * @return {function} Return the debounced function
 */

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/**
 * Determines the difference between two texts.
 * Can only detect one removed or inserted block of characters.
 * @param {string} oldText
 * @param {string} newText
 * @return {{start: number, end: number}} Returns the start and end
 *                                        of the changed part in newText.
 */

function textDiff(oldText, newText) {
  var len = newText.length;
  var start = 0;
  var oldEnd = oldText.length;
  var newEnd = newText.length;

  while (newText.charAt(start) === oldText.charAt(start) && start < len) {
    start++;
  }

  while (newText.charAt(newEnd - 1) === oldText.charAt(oldEnd - 1) && newEnd > start && oldEnd > 0) {
    newEnd--;
    oldEnd--;
  }

  return {
    start: start,
    end: newEnd
  };
}
/**
 * Return an object with the selection range or cursor position (if both have the same value)
 * Support also old browsers (IE8-)
 * Source: http://ourcodeworld.com/articles/read/282/how-to-get-the-current-cursor-position-and-selection-within-a-text-input-or-textarea-in-javascript
 * @param {DOMElement} el A dom element of a textarea or input text.
 * @return {Object} reference Object with 2 properties (start and end) with the identifier of the location of the cursor and selected text.
 **/

function getInputSelection(el) {
  var startIndex = 0;
  var endIndex = 0;
  var normalizedValue;
  var range;
  var textInputRange;
  var len;
  var endRange;

  if (typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number') {
    startIndex = el.selectionStart;
    endIndex = el.selectionEnd;
  } else {
    range = document.selection.createRange();

    if (range && range.parentElement() === el) {
      len = el.value.length;
      normalizedValue = el.value.replace(/\r\n/g, '\n'); // Create a working TextRange that lives only in the input

      textInputRange = el.createTextRange();
      textInputRange.moveToBookmark(range.getBookmark()); // Check if the startIndex and endIndex of the selection are at the very end
      // of the input, since moveStart/moveEnd doesn't return what we want
      // in those cases

      endRange = el.createTextRange();
      endRange.collapse(false);

      if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
        startIndex = endIndex = len;
      } else {
        startIndex = -textInputRange.moveStart('character', -len);
        startIndex += normalizedValue.slice(0, startIndex).split('\n').length - 1;

        if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
          endIndex = len;
        } else {
          endIndex = -textInputRange.moveEnd('character', -len);
          endIndex += normalizedValue.slice(0, endIndex).split('\n').length - 1;
        }
      }
    }
  }

  return {
    startIndex: startIndex,
    endIndex: endIndex,
    start: _positionForIndex(startIndex),
    end: _positionForIndex(endIndex)
  };
  /**
   * Returns textarea row and column position for certain index
   * @param {Number} index text index
   * @returns {{row: Number, column: Number}}
   */

  function _positionForIndex(index) {
    var textTillIndex = el.value.substring(0, index);
    var row = (textTillIndex.match(/\n/g) || []).length + 1;
    var col = textTillIndex.length - textTillIndex.lastIndexOf('\n');
    return {
      row: row,
      column: col
    };
  }
}
/**
 * Returns the index for certaion position in text element
 * @param {DOMElement} el A dom element of a textarea or input text.
 * @param {Number} row row value, > 0, if exceeds rows number - last row will be returned
 * @param {Number} column column value, > 0, if exceeds column length - end of column will be returned
 * @returns {Number} index of position in text, -1 if not found
 */

function getIndexForPosition(el, row, column) {
  var text = el.value || '';

  if (row > 0 && column > 0) {
    var rows = text.split('\n', row);
    row = Math.min(rows.length, row);
    column = Math.min(rows[row - 1].length, column - 1);
    var columnCount = row === 1 ? column : column + 1; // count new line on multiple rows

    return rows.slice(0, row - 1).join('\n').length + columnCount;
  }

  return -1;
}
/**
 * Returns location of json paths in certain json string
 * @param {String} text json string
 * @param {Array<String>} paths array of json paths
 * @returns {Array<{path: String, line: Number, row: Number}>}
 */

function getPositionForPath(text, paths) {
  var result = [];
  var jsmap;

  if (!paths || !paths.length) {
    return result;
  }

  try {
    jsmap = json_source_map__WEBPACK_IMPORTED_MODULE_3___default.a.parse(text);
  } catch (err) {
    return result;
  }

  paths.forEach(function (path) {
    var pathArr = parsePath(path);
    var pointerName = compileJSONPointer(pathArr);
    var pointer = jsmap.pointers[pointerName];

    if (pointer) {
      result.push({
        path: path,
        line: pointer.key ? pointer.key.line : pointer.value ? pointer.value.line : 0,
        column: pointer.key ? pointer.key.column : pointer.value ? pointer.value.column : 0
      });
    }
  });
  return result;
}
/**
 * Compile a JSON Pointer
 * WARNING: this is an incomplete implementation
 * @param {Array.<string | number>} path
 * @return {string}
 */

function compileJSONPointer(path) {
  return path.map(function (p) {
    return '/' + String(p).replace(/~/g, '~0').replace(/\//g, '~1');
  }).join('');
}
/**
 * Get the applied color given a color name or code
 * Source: https://stackoverflow.com/questions/6386090/validating-css-color-names/33184805
 * @param {string} color
 * @returns {string | null} returns the color if the input is a valid
 *                   color, and returns null otherwise. Example output:
 *                   'rgba(255,0,0,0.7)' or 'rgb(255,0,0)'
 */

function getColorCSS(color) {
  var ele = document.createElement('div');
  ele.style.color = color;
  return ele.style.color.split(/\s+/).join('').toLowerCase() || null;
}
/**
 * Test if a string contains a valid color name or code.
 * @param {string} color
 * @returns {boolean} returns true if a valid color, false otherwise
 */

function isValidColor(color) {
  return !!getColorCSS(color);
}
/**
 * Make a tooltip for a field based on the field's schema.
 * @param {object} schema JSON schema
 * @param {string} [locale] Locale code (for example, zh-CN)
 * @returns {string} Field tooltip, may be empty string if all relevant schema properties are missing
 */

function makeFieldTooltip(schema, locale) {
  if (!schema) {
    return '';
  }

  var tooltip = '';

  if (schema.title) {
    tooltip += schema.title;
  }

  if (schema.description) {
    if (tooltip.length > 0) {
      tooltip += '\n';
    }

    tooltip += schema.description;
  }

  if (schema["default"]) {
    if (tooltip.length > 0) {
      tooltip += '\n\n';
    }

    tooltip += Object(_i18n__WEBPACK_IMPORTED_MODULE_4__[/* translate */ "c"])('default', undefined, locale) + '\n';
    tooltip += JSON.stringify(schema["default"], null, 2);
  }

  if (Array.isArray(schema.examples) && schema.examples.length > 0) {
    if (tooltip.length > 0) {
      tooltip += '\n\n';
    }

    tooltip += Object(_i18n__WEBPACK_IMPORTED_MODULE_4__[/* translate */ "c"])('examples', undefined, locale) + '\n';
    schema.examples.forEach(function (example, index) {
      tooltip += JSON.stringify(example, null, 2);

      if (index !== schema.examples.length - 1) {
        tooltip += '\n';
      }
    });
  }

  return tooltip;
}
/**
 * Get a nested property from an object.
 * Returns undefined when the property does not exist.
 * @param {Object} object
 * @param {string[]} path
 * @return {*}
 */

function get(object, path) {
  var value = object;

  for (var i = 0; i < path.length && value !== undefined && value !== null; i++) {
    value = value[path[i]];
  }

  return value;
}
/**
 * Find a unique name. Suffix the name with ' (copy)', '(copy 2)', etc
 * until a unique name is found
 * @param {string} name
 * @param {Array} existingPropNames    Array with existing prop names
 */

function findUniqueName(name, existingPropNames) {
  var strippedName = name.replace(/ \(copy( \d+)?\)$/, '');
  var validName = strippedName;
  var i = 1;

  while (existingPropNames.indexOf(validName) !== -1) {
    var copy = 'copy' + (i > 1 ? ' ' + i : '');
    validName = strippedName + ' (' + copy + ')';
    i++;
  }

  return validName;
}
/**
 * Get the child paths of an array
 * @param {JSON} json
 * @param {boolean} [includeObjects=false] If true, object and array paths are returned as well
 * @return {string[]}
 */

function getChildPaths(json, includeObjects) {
  var pathsMap = {};

  function getObjectChildPaths(json, pathsMap, rootPath, includeObjects) {
    var isValue = !Array.isArray(json) && !isObject(json);

    if (isValue || includeObjects) {
      pathsMap[rootPath || ''] = true;
    }

    if (isObject(json)) {
      Object.keys(json).forEach(function (field) {
        getObjectChildPaths(json[field], pathsMap, rootPath + '.' + field, includeObjects);
      });
    }
  }

  if (Array.isArray(json)) {
    var max = Math.min(json.length, MAX_ITEMS_FIELDS_COLLECTION);

    for (var i = 0; i < max; i++) {
      var item = json[i];
      getObjectChildPaths(item, pathsMap, '', includeObjects);
    }
  } else {
    pathsMap[''] = true;
  }

  return Object.keys(pathsMap).sort();
}
/**
 * Sort object keys using natural sort
 * @param {Array} array
 * @param {String} [path] JSON pointer
 * @param {'asc' | 'desc'} [direction]
 */

function sort(array, path, direction) {
  var parsedPath = path && path !== '.' ? parsePath(path) : [];
  var sign = direction === 'desc' ? -1 : 1;
  var sortedArray = array.slice();
  sortedArray.sort(function (a, b) {
    var aValue = get(a, parsedPath);
    var bValue = get(b, parsedPath);
    return sign * (aValue > bValue ? 1 : aValue < bValue ? -1 : 0);
  });
  return sortedArray;
}
/**
 * Sort object keys using natural sort
 * @param {Object} object
 * @param {'asc' | 'desc'} [direction]
 */

function sortObjectKeys(object, direction) {
  var sign = direction === 'desc' ? -1 : 1;
  var sortedFields = Object.keys(object).sort(function (a, b) {
    return sign * javascript_natural_sort__WEBPACK_IMPORTED_MODULE_1___default()(a, b);
  });
  var sortedObject = {};
  sortedFields.forEach(function (field) {
    sortedObject[field] = object[field];
  });
  return sortedObject;
}
/**
 * Cast contents of a string to the correct type.
 * This can be a string, a number, a boolean, etc
 * @param {String} str
 * @return {*} castedStr
 * @private
 */

function parseString(str) {
  if (str === '') {
    return '';
  }

  var lower = str.toLowerCase();

  if (lower === 'null') {
    return null;
  }

  if (lower === 'true') {
    return true;
  }

  if (lower === 'false') {
    return false;
  }

  var num = Number(str); // will nicely fail with '123ab'

  var numFloat = parseFloat(str); // will nicely fail with '  '

  if (!isNaN(num) && !isNaN(numFloat)) {
    return num;
  }

  return str;
}
/**
 * Return a human readable document size
 * For example formatSize(7570718) outputs '7.2 MiB'
 * @param {number} size
 * @return {string} Returns a human readable size
 */

function formatSize(size) {
  if (size < 900) {
    return size.toFixed() + ' B';
  }

  var KiB = size / 1024;

  if (KiB < 900) {
    return KiB.toFixed(1) + ' KiB';
  }

  var MiB = KiB / 1024;

  if (MiB < 900) {
    return MiB.toFixed(1) + ' MiB';
  }

  var GiB = MiB / 1024;

  if (GiB < 900) {
    return GiB.toFixed(1) + ' GiB';
  }

  var TiB = GiB / 1024;
  return TiB.toFixed(1) + ' TiB';
}
/**
 * Limit text to a maximum number of characters
 * @param {string} text
 * @param {number} maxCharacterCount
 * @return {string} Returns the limited text,
 *                  ending with '...' if the max was exceeded
 */

function limitCharacters(text, maxCharacterCount) {
  if (text.length <= maxCharacterCount) {
    return text;
  }

  return text.slice(0, maxCharacterCount) + '...';
}
/**
 * Test whether a value is an Object
 * @param {*} value
 * @return {boolean}
 */

function isObject(value) {
  return _typeof(value) === 'object' && value !== null && !Array.isArray(value);
}
/**
 * Helper function to test whether an array contains an item
 * @param {Array} array
 * @param {*} item
 * @return {boolean} Returns true if `item` is in `array`, returns false otherwise.
 */

function contains(array, item) {
  return array.indexOf(item) !== -1;
}

function hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return translate; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills__WEBPACK_IMPORTED_MODULE_0__);

/* eslint-disable no-template-curly-in-string */


var _locales = ['en', 'pt-BR', 'zh-CN', 'tr'];
var _defs = {
  en: {
    array: 'Array',
    auto: 'Auto',
    appendText: 'Append',
    appendTitle: 'Append a new field with type \'auto\' after this field (Ctrl+Shift+Ins)',
    appendSubmenuTitle: 'Select the type of the field to be appended',
    appendTitleAuto: 'Append a new field with type \'auto\' (Ctrl+Shift+Ins)',
    ascending: 'Ascending',
    ascendingTitle: 'Sort the childs of this ${type} in ascending order',
    actionsMenu: 'Click to open the actions menu (Ctrl+M)',
    collapseAll: 'Collapse all fields',
    descending: 'Descending',
    descendingTitle: 'Sort the childs of this ${type} in descending order',
    drag: 'Drag to move this field (Alt+Shift+Arrows)',
    duplicateKey: 'duplicate key',
    duplicateText: 'Duplicate',
    duplicateTitle: 'Duplicate selected fields (Ctrl+D)',
    duplicateField: 'Duplicate this field (Ctrl+D)',
    duplicateFieldError: 'Duplicate field name',
    cannotParseFieldError: 'Cannot parse field into JSON',
    cannotParseValueError: 'Cannot parse value into JSON',
    empty: 'empty',
    expandAll: 'Expand all fields',
    expandTitle: 'Click to expand/collapse this field (Ctrl+E). \n' + 'Ctrl+Click to expand/collapse including all childs.',
    insert: 'Insert',
    insertTitle: 'Insert a new field with type \'auto\' before this field (Ctrl+Ins)',
    insertSub: 'Select the type of the field to be inserted',
    object: 'Object',
    ok: 'Ok',
    redo: 'Redo (Ctrl+Shift+Z)',
    removeText: 'Remove',
    removeTitle: 'Remove selected fields (Ctrl+Del)',
    removeField: 'Remove this field (Ctrl+Del)',
    selectNode: 'Select a node...',
    showAll: 'show all',
    showMore: 'show more',
    showMoreStatus: 'displaying ${visibleChilds} of ${totalChilds} items.',
    sort: 'Sort',
    sortTitle: 'Sort the childs of this ${type}',
    sortTitleShort: 'Sort contents',
    sortFieldLabel: 'Field:',
    sortDirectionLabel: 'Direction:',
    sortFieldTitle: 'Select the nested field by which to sort the array or object',
    sortAscending: 'Ascending',
    sortAscendingTitle: 'Sort the selected field in ascending order',
    sortDescending: 'Descending',
    sortDescendingTitle: 'Sort the selected field in descending order',
    string: 'String',
    transform: 'Transform',
    transformTitle: 'Filter, sort, or transform the childs of this ${type}',
    transformTitleShort: 'Filter, sort, or transform contents',
    extract: 'Extract',
    extractTitle: 'Extract this ${type}',
    transformQueryTitle: 'Enter a JMESPath query',
    transformWizardLabel: 'Wizard',
    transformWizardFilter: 'Filter',
    transformWizardSortBy: 'Sort by',
    transformWizardSelectFields: 'Select fields',
    transformQueryLabel: 'Query',
    transformPreviewLabel: 'Preview',
    type: 'Type',
    typeTitle: 'Change the type of this field',
    openUrl: 'Ctrl+Click or Ctrl+Enter to open url in new window',
    undo: 'Undo last action (Ctrl+Z)',
    validationCannotMove: 'Cannot move a field into a child of itself',
    autoType: 'Field type "auto". ' + 'The field type is automatically determined from the value ' + 'and can be a string, number, boolean, or null.',
    objectType: 'Field type "object". ' + 'An object contains an unordered set of key/value pairs.',
    arrayType: 'Field type "array". ' + 'An array contains an ordered collection of values.',
    stringType: 'Field type "string". ' + 'Field type is not determined from the value, ' + 'but always returned as string.',
    modeCodeText: 'Code',
    modeCodeTitle: 'Switch to code highlighter',
    modeFormText: 'Form',
    modeFormTitle: 'Switch to form editor',
    modeTextText: 'Text',
    modeTextTitle: 'Switch to plain text editor',
    modeTreeText: 'Tree',
    modeTreeTitle: 'Switch to tree editor',
    modeViewText: 'View',
    modeViewTitle: 'Switch to tree view',
    modePreviewText: 'Preview',
    modePreviewTitle: 'Switch to preview mode',
    examples: 'Examples',
    "default": 'Default'
  },
  'zh-CN': {
    array: '数组',
    auto: '自动',
    appendText: '追加',
    appendTitle: '在此字段后追加一个类型为“auto”的新字段 (Ctrl+Shift+Ins)',
    appendSubmenuTitle: '选择要追加的字段类型',
    appendTitleAuto: '追加类型为“auto”的新字段 (Ctrl+Shift+Ins)',
    ascending: '升序',
    ascendingTitle: '升序排列${type}的子节点',
    actionsMenu: '点击打开动作菜单(Ctrl+M)',
    collapseAll: '缩进所有字段',
    descending: '降序',
    descendingTitle: '降序排列${type}的子节点',
    drag: '拖拽移动该节点(Alt+Shift+Arrows)',
    duplicateKey: '重复键',
    duplicateText: '复制',
    duplicateTitle: '复制选中字段(Ctrl+D)',
    duplicateField: '复制该字段(Ctrl+D)',
    duplicateFieldError: '重复的字段名称',
    cannotParseFieldError: '无法将字段解析为JSON',
    cannotParseValueError: '无法将值解析为JSON',
    empty: '清空',
    expandAll: '展开所有字段',
    expandTitle: '点击 展开/收缩 该字段(Ctrl+E). \n' + 'Ctrl+Click 展开/收缩 包含所有子节点.',
    insert: '插入',
    insertTitle: '在此字段前插入类型为“auto”的新字段 (Ctrl+Ins)',
    insertSub: '选择要插入的字段类型',
    object: '对象',
    ok: 'Ok',
    redo: '重做 (Ctrl+Shift+Z)',
    removeText: '移除',
    removeTitle: '移除选中字段 (Ctrl+Del)',
    removeField: '移除该字段 (Ctrl+Del)',
    selectNode: '选择一个节点...',
    showAll: '展示全部',
    showMore: '展示更多',
    showMoreStatus: '显示${totalChilds}的${visibleChilds}项目.',
    sort: '排序',
    sortTitle: '排序${type}的子节点',
    sortTitleShort: '内容排序',
    sortFieldLabel: '字段：',
    sortDirectionLabel: '方向：',
    sortFieldTitle: '选择用于对数组或对象排序的嵌套字段',
    sortAscending: '升序排序',
    sortAscendingTitle: '按照该字段升序排序',
    sortDescending: '降序排序',
    sortDescendingTitle: '按照该字段降序排序',
    string: '字符串',
    transform: '变换',
    transformTitle: '筛选，排序，或者转换${type}的子节点',
    transformTitleShort: '筛选，排序，或者转换内容',
    extract: '提取',
    extractTitle: '提取这个 ${type}',
    transformQueryTitle: '输入JMESPath查询',
    transformWizardLabel: '向导',
    transformWizardFilter: '筛选',
    transformWizardSortBy: '排序',
    transformWizardSelectFields: '选择字段',
    transformQueryLabel: '查询',
    transformPreviewLabel: '预览',
    type: '类型',
    typeTitle: '更改字段类型',
    openUrl: 'Ctrl+Click 或者 Ctrl+Enter 在新窗口打开链接',
    undo: '撤销上次动作 (Ctrl+Z)',
    validationCannotMove: '无法将字段移入其子节点',
    autoType: '字段类型 "auto". ' + '字段类型由值自动确定 ' + '可以为 string，number，boolean，或者 null.',
    objectType: '字段类型 "object". ' + '对象包含一组无序的键/值对.',
    arrayType: '字段类型 "array". ' + '数组包含值的有序集合.',
    stringType: '字段类型 "string". ' + '字段类型由值自动确定，' + '但始终作为字符串返回.',
    modeCodeText: '代码',
    modeCodeTitle: '切换至代码高亮',
    modeFormText: '表单',
    modeFormTitle: '切换至表单编辑',
    modeTextText: '文本',
    modeTextTitle: '切换至文本编辑',
    modeTreeText: '树',
    modeTreeTitle: '切换至树编辑',
    modeViewText: '视图',
    modeViewTitle: '切换至树视图',
    modePreviewText: '预览',
    modePreviewTitle: '切换至预览模式',
    examples: '例子',
    "default": '缺省'
  },
  'pt-BR': {
    array: 'Lista',
    auto: 'Automatico',
    appendText: 'Adicionar',
    appendTitle: 'Adicionar novo campo com tipo \'auto\' depois deste campo (Ctrl+Shift+Ins)',
    appendSubmenuTitle: 'Selecione o tipo do campo a ser adicionado',
    appendTitleAuto: 'Adicionar novo campo com tipo \'auto\' (Ctrl+Shift+Ins)',
    ascending: 'Ascendente',
    ascendingTitle: 'Organizar filhor do tipo ${type} em crescente',
    actionsMenu: 'Clique para abrir o menu de ações (Ctrl+M)',
    collapseAll: 'Fechar todos campos',
    descending: 'Descendente',
    descendingTitle: 'Organizar o filhos do tipo ${type} em decrescente',
    duplicateKey: 'chave duplicada',
    drag: 'Arraste para mover este campo (Alt+Shift+Arrows)',
    duplicateText: 'Duplicar',
    duplicateTitle: 'Duplicar campos selecionados (Ctrl+D)',
    duplicateField: 'Duplicar este campo (Ctrl+D)',
    duplicateFieldError: 'Nome do campo duplicado',
    cannotParseFieldError: 'Não é possível analisar o campo no JSON',
    cannotParseValueError: 'Não é possível analisar o valor em JSON',
    empty: 'vazio',
    expandAll: 'Expandir todos campos',
    expandTitle: 'Clique para expandir/encolher este campo (Ctrl+E). \n' + 'Ctrl+Click para expandir/encolher incluindo todos os filhos.',
    insert: 'Inserir',
    insertTitle: 'Inserir um novo campo do tipo \'auto\' antes deste campo (Ctrl+Ins)',
    insertSub: 'Selecionar o tipo de campo a ser inserido',
    object: 'Objeto',
    ok: 'Ok',
    redo: 'Refazer (Ctrl+Shift+Z)',
    removeText: 'Remover',
    removeTitle: 'Remover campos selecionados (Ctrl+Del)',
    removeField: 'Remover este campo (Ctrl+Del)',
    // TODO: correctly translate
    selectNode: 'Selecione um nódulo...',
    showAll: 'mostrar todos',
    showMore: 'mostrar mais',
    // TODO: correctly translate
    showMoreStatus: 'exibindo ${visibleChilds} de ${totalChilds} itens.',
    sort: 'Organizar',
    sortTitle: 'Organizar os filhos deste ${type}',
    // TODO: correctly translate
    sortTitleShort: 'Organizar os filhos',
    sortFieldLabel: 'Campo:',
    sortDirectionLabel: 'Direção:',
    sortFieldTitle: 'Selecione um campo filho pelo qual ordenar o array ou objeto',
    sortAscending: 'Ascendente',
    sortAscendingTitle: 'Ordenar o campo selecionado por ordem ascendente',
    sortDescending: 'Descendente',
    sortDescendingTitle: 'Ordenar o campo selecionado por ordem descendente',
    string: 'Texto',
    // TODO: correctly translate
    transform: 'Transformar',
    transformTitle: 'Filtrar, ordenar ou transformar os filhos deste ${type}',
    transformTitleShort: 'Filtrar, ordenar ou transformar conteúdos',
    // TODO: correctly translate
    transformQueryTitle: 'Insira uma expressão JMESPath',
    // TODO: correctly translate
    transformWizardLabel: 'Assistente',
    transformWizardFilter: 'Filtro',
    transformWizardSortBy: 'Ordenar por',
    transformWizardSelectFields: 'Selecionar campos',
    transformQueryLabel: 'Expressão',
    transformPreviewLabel: 'Visualizar',
    type: 'Tipo',
    typeTitle: 'Mudar o tipo deste campo',
    openUrl: 'Ctrl+Click ou Ctrl+Enter para abrir link em nova janela',
    undo: 'Desfazer último ação (Ctrl+Z)',
    validationCannotMove: 'Não pode mover um campo como filho dele mesmo',
    autoType: 'Campo do tipo "auto". ' + 'O tipo do campo é determinao automaticamente a partir do seu valor ' + 'e pode ser texto, número, verdade/falso ou nulo.',
    objectType: 'Campo do tipo "objeto". ' + 'Um objeto contém uma lista de pares com chave e valor.',
    arrayType: 'Campo do tipo "lista". ' + 'Uma lista contem uma coleção de valores ordenados.',
    stringType: 'Campo do tipo "string". ' + 'Campo do tipo nao é determinado através do seu valor, ' + 'mas sempre retornara um texto.',
    examples: 'Exemplos',
    "default": 'Revelia'
  },
  tr: {
    array: 'Dizin',
    auto: 'Otomatik',
    appendText: 'Ekle',
    appendTitle: 'Bu alanın altına \'otomatik\' tipinde yeni bir alan ekle (Ctrl+Shift+Ins)',
    appendSubmenuTitle: 'Eklenecek alanın tipini seç',
    appendTitleAuto: '\'Otomatik\' tipinde yeni bir alan ekle (Ctrl+Shift+Ins)',
    ascending: 'Artan',
    ascendingTitle: '${type}\'ın alt tiplerini artan düzende sırala',
    actionsMenu: 'Aksiyon menüsünü açmak için tıklayın (Ctrl+M)',
    collapseAll: 'Tüm alanları kapat',
    descending: 'Azalan',
    descendingTitle: '${type}\'ın alt tiplerini azalan düzende sırala',
    drag: 'Bu alanı taşımak için sürükleyin (Alt+Shift+Arrows)',
    duplicateKey: 'Var olan anahtar',
    duplicateText: 'Aşağıya kopyala',
    duplicateTitle: 'Seçili alanlardan bir daha oluştur (Ctrl+D)',
    duplicateField: 'Bu alandan bir daha oluştur (Ctrl+D)',
    duplicateFieldError: 'Duplicate field name',
    cannotParseFieldError: 'Alan JSON\'a ayrıştırılamıyor',
    cannotParseValueError: 'JSON\'a değer ayrıştırılamıyor',
    empty: 'boş',
    expandAll: 'Tüm alanları aç',
    expandTitle: 'Bu alanı açmak/kapatmak için tıkla (Ctrl+E). \n' + 'Alt alanlarda dahil tüm alanları açmak için Ctrl+Click ',
    insert: 'Ekle',
    insertTitle: 'Bu alanın üstüne \'otomatik\' tipinde yeni bir alan ekle (Ctrl+Ins)',
    insertSub: 'Araya eklenecek alanın tipini seç',
    object: 'Nesne',
    ok: 'Tamam',
    redo: 'Yeniden yap (Ctrl+Shift+Z)',
    removeText: 'Kaldır',
    removeTitle: 'Seçilen alanları kaldır (Ctrl+Del)',
    removeField: 'Bu alanı kaldır (Ctrl+Del)',
    selectNode: 'Bir nesne seç...',
    showAll: 'tümünü göster',
    showMore: 'daha fazla göster',
    showMoreStatus: '${totalChilds} alanın ${visibleChilds} alt alanları gösteriliyor',
    sort: 'Sırala',
    sortTitle: '${type}\'ın alt alanlarını sırala',
    sortTitleShort: 'İçerikleri sırala',
    sortFieldLabel: 'Alan:',
    sortDirectionLabel: 'Yön:',
    sortFieldTitle: 'Diziyi veya nesneyi sıralamak için iç içe geçmiş alanı seçin',
    sortAscending: 'Artan',
    sortAscendingTitle: 'Seçili alanı artan düzende sırala',
    sortDescending: 'Azalan',
    sortDescendingTitle: 'Seçili alanı azalan düzende sırala',
    string: 'Karakter Dizisi',
    transform: 'Dönüştür',
    transformTitle: '${type}\'ın alt alanlarını filtrele, sırala veya dönüştür',
    transformTitleShort: 'İçerikleri filterele, sırala veya dönüştür',
    transformQueryTitle: 'JMESPath sorgusu gir',
    transformWizardLabel: 'Sihirbaz',
    transformWizardFilter: 'Filtre',
    transformWizardSortBy: 'Sırala',
    transformWizardSelectFields: 'Alanları seç',
    transformQueryLabel: 'Sorgu',
    transformPreviewLabel: 'Önizleme',
    type: 'Tip',
    typeTitle: 'Bu alanın tipini değiştir',
    openUrl: 'URL\'i yeni bir pencerede açmak için Ctrl+Click veya Ctrl+Enter',
    undo: 'Son değişikliği geri al (Ctrl+Z)',
    validationCannotMove: 'Alt alan olarak taşınamıyor',
    autoType: 'Alan tipi "otomatik". ' + 'Alan türü otomatik olarak değerden belirlenir' + 've bir dize, sayı, boolean veya null olabilir.',
    objectType: 'Alan tipi "nesne". ' + 'Bir nesne, sıralanmamış bir anahtar / değer çifti kümesi içerir.',
    arrayType: 'Alan tipi "dizi". ' + 'Bir dizi, düzenli değerler koleksiyonu içerir.',
    stringType: 'Alan tipi "karakter dizisi". ' + 'Alan türü değerden belirlenmez,' + 'ancak her zaman karakter dizisi olarak döndürülür.',
    modeCodeText: 'Kod',
    modeCodeTitle: 'Kod vurgulayıcıya geç',
    modeFormText: 'Form',
    modeFormTitle: 'Form düzenleyiciye geç',
    modeTextText: 'Metin',
    modeTextTitle: 'Düz metin düzenleyiciye geç',
    modeTreeText: 'Ağaç',
    modeTreeTitle: 'Ağaç düzenleyiciye geç',
    modeViewText: 'Görünüm',
    modeViewTitle: 'Ağaç görünümüne geç',
    examples: 'Örnekler',
    "default": 'Varsayılan'
  }
};
var _defaultLang = 'en';
var userLang = typeof navigator !== 'undefined' ? navigator.language || navigator.userLanguage : undefined;

var _lang = _locales.find(function (l) {
  return l === userLang;
}) || _defaultLang;

function setLanguage(lang) {
  if (!lang) {
    return;
  }

  var langFound = _locales.find(function (l) {
    return l === lang;
  });

  if (langFound) {
    _lang = langFound;
  } else {
    console.error('Language not found');
  }
}
function setLanguages(languages) {
  if (!languages) {
    return;
  }

  var _loop = function _loop(key) {
    var langFound = _locales.find(function (l) {
      return l === key;
    });

    if (!langFound) {
      _locales.push(key);
    }

    _defs[key] = Object.assign({}, _defs[_defaultLang], _defs[key], languages[key]);
  };

  for (var key in languages) {
    _loop(key);
  }
}
function translate(key, data, lang) {
  if (!lang) {
    lang = _lang;
  }

  var text = _defs[lang][key];

  if (data) {
    for (key in data) {
      text = text.replace('${' + key + '}', data[key]);
    }
  }

  return text || key;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_MODAL_ANCHOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SIZE_LARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAX_PREVIEW_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PREVIEW_HISTORY_LIMIT; });
var DEFAULT_MODAL_ANCHOR = document.body;
var SIZE_LARGE = 10 * 1024 * 1024; // 10 MB

var MAX_PREVIEW_CHARACTERS = 20000;
var PREVIEW_HISTORY_LIMIT = 2 * 1024 * 1024 * 1024; // 2 GB

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenu; });
/* harmony import */ var _createAbsoluteAnchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/**
 * A context menu
 * @param {Object[]} items    Array containing the menu structure
 *                            TODO: describe structure
 * @param {Object} [options]  Object with options. Available options:
 *                            {function} close    Callback called when the
 *                                                context menu is being closed.
 * @constructor
 */

var ContextMenu =
/*#__PURE__*/
function () {
  function ContextMenu(items, options) {
    _classCallCheck(this, ContextMenu);

    this.dom = {};
    var me = this;
    var dom = this.dom;
    this.anchor = undefined;
    this.items = items;
    this.eventListeners = {};
    this.selection = undefined; // holds the selection before the menu was opened

    this.onClose = options ? options.close : undefined; // create root element

    var root = document.createElement('div');
    root.className = 'jsoneditor-contextmenu-root';
    dom.root = root; // create a container element

    var menu = document.createElement('div');
    menu.className = 'jsoneditor-contextmenu';
    dom.menu = menu;
    root.appendChild(menu); // create a list to hold the menu items

    var list = document.createElement('ul');
    list.className = 'jsoneditor-menu';
    menu.appendChild(list);
    dom.list = list;
    dom.items = []; // list with all buttons
    // create a (non-visible) button to set the focus to the menu

    var focusButton = document.createElement('button');
    focusButton.type = 'button';
    dom.focusButton = focusButton;
    var li = document.createElement('li');
    li.style.overflow = 'hidden';
    li.style.height = '0';
    li.appendChild(focusButton);
    list.appendChild(li);

    function createMenuItems(list, domItems, items) {
      items.forEach(function (item) {
        if (item.type === 'separator') {
          // create a separator
          var separator = document.createElement('div');
          separator.className = 'jsoneditor-separator';

          var _li = document.createElement('li');

          _li.appendChild(separator);

          list.appendChild(_li);
        } else {
          var domItem = {}; // create a menu item

          var _li2 = document.createElement('li');

          list.appendChild(_li2); // create a button in the menu item

          var button = document.createElement('button');
          button.type = 'button';
          button.className = item.className;
          domItem.button = button;

          if (item.title) {
            button.title = item.title;
          }

          if (item.click) {
            button.onclick = function (event) {
              event.preventDefault();
              me.hide();
              item.click();
            };
          }

          _li2.appendChild(button); // create the contents of the button


          if (item.submenu) {
            // add the icon to the button
            var divIcon = document.createElement('div');
            divIcon.className = 'jsoneditor-icon';
            button.appendChild(divIcon);
            var divText = document.createElement('div');
            divText.className = 'jsoneditor-text' + (item.click ? '' : ' jsoneditor-right-margin');
            divText.appendChild(document.createTextNode(item.text));
            button.appendChild(divText);
            var buttonSubmenu;

            if (item.click) {
              // submenu and a button with a click handler
              button.className += ' jsoneditor-default';
              var buttonExpand = document.createElement('button');
              buttonExpand.type = 'button';
              domItem.buttonExpand = buttonExpand;
              buttonExpand.className = 'jsoneditor-expand';
              buttonExpand.innerHTML = '<div class="jsoneditor-expand"></div>';

              _li2.appendChild(buttonExpand);

              if (item.submenuTitle) {
                buttonExpand.title = item.submenuTitle;
              }

              buttonSubmenu = buttonExpand;
            } else {
              // submenu and a button without a click handler
              var divExpand = document.createElement('div');
              divExpand.className = 'jsoneditor-expand';
              button.appendChild(divExpand);
              buttonSubmenu = button;
            } // attach a handler to expand/collapse the submenu


            buttonSubmenu.onclick = function (event) {
              event.preventDefault();

              me._onExpandItem(domItem);

              buttonSubmenu.focus();
            }; // create the submenu


            var domSubItems = [];
            domItem.subItems = domSubItems;
            var ul = document.createElement('ul');
            domItem.ul = ul;
            ul.className = 'jsoneditor-menu';
            ul.style.height = '0';

            _li2.appendChild(ul);

            createMenuItems(ul, domSubItems, item.submenu);
          } else {
            // no submenu, just a button with clickhandler
            button.innerHTML = '<div class="jsoneditor-icon"></div>' + '<div class="jsoneditor-text">' + Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[/* translate */ "c"])(item.text) + '</div>';
          }

          domItems.push(domItem);
        }
      });
    }

    createMenuItems(list, this.dom.items, items); // TODO: when the editor is small, show the submenu on the right instead of inline?
    // calculate the max height of the menu with one submenu expanded

    this.maxHeight = 0; // height in pixels

    items.forEach(function (item) {
      var height = (items.length + (item.submenu ? item.submenu.length : 0)) * 24;
      me.maxHeight = Math.max(me.maxHeight, height);
    });
  }
  /**
   * Get the currently visible buttons
   * @return {Array.<HTMLElement>} buttons
   * @private
   */


  _createClass(ContextMenu, [{
    key: "_getVisibleButtons",
    value: function _getVisibleButtons() {
      var buttons = [];
      var me = this;
      this.dom.items.forEach(function (item) {
        buttons.push(item.button);

        if (item.buttonExpand) {
          buttons.push(item.buttonExpand);
        }

        if (item.subItems && item === me.expandedItem) {
          item.subItems.forEach(function (subItem) {
            buttons.push(subItem.button);

            if (subItem.buttonExpand) {
              buttons.push(subItem.buttonExpand);
            } // TODO: change to fully recursive method

          });
        }
      });
      return buttons;
    }
    /**
     * Attach the menu to an anchor
     * @param {HTMLElement} anchor    Anchor where the menu will be attached as sibling.
     * @param {HTMLElement} frame     The root of the JSONEditor window
     * @param {Boolean=} ignoreParent ignore anchor parent in regard to the calculation of the position, needed when the parent position is absolute
     */

  }, {
    key: "show",
    value: function show(anchor, frame, ignoreParent) {
      this.hide(); // determine whether to display the menu below or above the anchor

      var showBelow = true;
      var parent = anchor.parentNode;
      var anchorRect = anchor.getBoundingClientRect();
      var parentRect = parent.getBoundingClientRect();
      var frameRect = frame.getBoundingClientRect();
      var me = this;
      this.dom.absoluteAnchor = Object(_createAbsoluteAnchor__WEBPACK_IMPORTED_MODULE_0__[/* createAbsoluteAnchor */ "a"])(anchor, frame, function () {
        me.hide();
      });

      if (anchorRect.bottom + this.maxHeight < frameRect.bottom) ; else if (anchorRect.top - this.maxHeight > frameRect.top) {
        // fits above -> show above
        showBelow = false;
      }

      var topGap = ignoreParent ? 0 : anchorRect.top - parentRect.top; // position the menu

      if (showBelow) {
        // display the menu below the anchor
        var anchorHeight = anchor.offsetHeight;
        this.dom.menu.style.left = '0';
        this.dom.menu.style.top = topGap + anchorHeight + 'px';
        this.dom.menu.style.bottom = '';
      } else {
        // display the menu above the anchor
        this.dom.menu.style.left = '0';
        this.dom.menu.style.top = '';
        this.dom.menu.style.bottom = '0px';
      } // attach the menu to the temporary, absolute anchor
      // parent.insertBefore(this.dom.root, anchor);


      this.dom.absoluteAnchor.appendChild(this.dom.root); // move focus to the first button in the context menu

      this.selection = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getSelection"])();
      this.anchor = anchor;
      setTimeout(function () {
        me.dom.focusButton.focus();
      }, 0);

      if (ContextMenu.visibleMenu) {
        ContextMenu.visibleMenu.hide();
      }

      ContextMenu.visibleMenu = this;
    }
    /**
     * Hide the context menu if visible
     */

  }, {
    key: "hide",
    value: function hide() {
      // remove temporary absolutely positioned anchor
      if (this.dom.absoluteAnchor) {
        this.dom.absoluteAnchor.destroy();
        delete this.dom.absoluteAnchor;
      } // remove the menu from the DOM


      if (this.dom.root.parentNode) {
        this.dom.root.parentNode.removeChild(this.dom.root);

        if (this.onClose) {
          this.onClose();
        }
      }

      if (ContextMenu.visibleMenu === this) {
        ContextMenu.visibleMenu = undefined;
      }
    }
    /**
     * Expand a submenu
     * Any currently expanded submenu will be hided.
     * @param {Object} domItem
     * @private
     */

  }, {
    key: "_onExpandItem",
    value: function _onExpandItem(domItem) {
      var me = this;
      var alreadyVisible = domItem === this.expandedItem; // hide the currently visible submenu

      var expandedItem = this.expandedItem;

      if (expandedItem) {
        // var ul = expandedItem.ul;
        expandedItem.ul.style.height = '0';
        expandedItem.ul.style.padding = '';
        setTimeout(function () {
          if (me.expandedItem !== expandedItem) {
            expandedItem.ul.style.display = '';
            Object(_util__WEBPACK_IMPORTED_MODULE_1__["removeClassName"])(expandedItem.ul.parentNode, 'jsoneditor-selected');
          }
        }, 300); // timeout duration must match the css transition duration

        this.expandedItem = undefined;
      }

      if (!alreadyVisible) {
        var ul = domItem.ul;
        ul.style.display = 'block'; // eslint-disable-next-line no-unused-expressions

        ul.clientHeight; // force a reflow in Firefox

        setTimeout(function () {
          if (me.expandedItem === domItem) {
            var childsHeight = 0;

            for (var i = 0; i < ul.childNodes.length; i++) {
              childsHeight += ul.childNodes[i].clientHeight;
            }

            ul.style.height = childsHeight + 'px';
            ul.style.padding = '5px 10px';
          }
        }, 0);
        Object(_util__WEBPACK_IMPORTED_MODULE_1__["addClassName"])(ul.parentNode, 'jsoneditor-selected');
        this.expandedItem = domItem;
      }
    }
    /**
     * Handle onkeydown event
     * @param {Event} event
     * @private
     */

  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(event) {
      var target = event.target;
      var keynum = event.which;
      var handled = false;
      var buttons, targetIndex, prevButton, nextButton;

      if (keynum === 27) {
        // ESC
        // hide the menu on ESC key
        // restore previous selection and focus
        if (this.selection) {
          Object(_util__WEBPACK_IMPORTED_MODULE_1__["setSelection"])(this.selection);
        }

        if (this.anchor) {
          this.anchor.focus();
        }

        this.hide();
        handled = true;
      } else if (keynum === 9) {
        // Tab
        if (!event.shiftKey) {
          // Tab
          buttons = this._getVisibleButtons();
          targetIndex = buttons.indexOf(target);

          if (targetIndex === buttons.length - 1) {
            // move to first button
            buttons[0].focus();
            handled = true;
          }
        } else {
          // Shift+Tab
          buttons = this._getVisibleButtons();
          targetIndex = buttons.indexOf(target);

          if (targetIndex === 0) {
            // move to last button
            buttons[buttons.length - 1].focus();
            handled = true;
          }
        }
      } else if (keynum === 37) {
        // Arrow Left
        if (target.className === 'jsoneditor-expand') {
          buttons = this._getVisibleButtons();
          targetIndex = buttons.indexOf(target);
          prevButton = buttons[targetIndex - 1];

          if (prevButton) {
            prevButton.focus();
          }
        }

        handled = true;
      } else if (keynum === 38) {
        // Arrow Up
        buttons = this._getVisibleButtons();
        targetIndex = buttons.indexOf(target);
        prevButton = buttons[targetIndex - 1];

        if (prevButton && prevButton.className === 'jsoneditor-expand') {
          // skip expand button
          prevButton = buttons[targetIndex - 2];
        }

        if (!prevButton) {
          // move to last button
          prevButton = buttons[buttons.length - 1];
        }

        if (prevButton) {
          prevButton.focus();
        }

        handled = true;
      } else if (keynum === 39) {
        // Arrow Right
        buttons = this._getVisibleButtons();
        targetIndex = buttons.indexOf(target);
        nextButton = buttons[targetIndex + 1];

        if (nextButton && nextButton.className === 'jsoneditor-expand') {
          nextButton.focus();
        }

        handled = true;
      } else if (keynum === 40) {
        // Arrow Down
        buttons = this._getVisibleButtons();
        targetIndex = buttons.indexOf(target);
        nextButton = buttons[targetIndex + 1];

        if (nextButton && nextButton.className === 'jsoneditor-expand') {
          // skip expand button
          nextButton = buttons[targetIndex + 2];
        }

        if (!nextButton) {
          // move to first button
          nextButton = buttons[0];
        }

        if (nextButton) {
          nextButton.focus();
          handled = true;
        }

        handled = true;
      } // TODO: arrow left and right


      if (handled) {
        event.stopPropagation();
        event.preventDefault();
      }
    }
  }]);

  return ContextMenu;
}(); // currently displayed context menu, a singleton. We may only have one visible context menu

ContextMenu.visibleMenu = undefined;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function(exports) {

  function isArray(obj) {
    if (obj !== null) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    } else {
      return false;
    }
  }

  function isObject(obj) {
    if (obj !== null) {
      return Object.prototype.toString.call(obj) === "[object Object]";
    } else {
      return false;
    }
  }

  function strictDeepEqual(first, second) {
    // Check the scalar case first.
    if (first === second) {
      return true;
    }

    // Check if they are the same type.
    var firstType = Object.prototype.toString.call(first);
    if (firstType !== Object.prototype.toString.call(second)) {
      return false;
    }
    // We know that first and second have the same type so we can just check the
    // first type from now on.
    if (isArray(first) === true) {
      // Short circuit if they're not the same length;
      if (first.length !== second.length) {
        return false;
      }
      for (var i = 0; i < first.length; i++) {
        if (strictDeepEqual(first[i], second[i]) === false) {
          return false;
        }
      }
      return true;
    }
    if (isObject(first) === true) {
      // An object is equal if it has the same key/value pairs.
      var keysSeen = {};
      for (var key in first) {
        if (hasOwnProperty.call(first, key)) {
          if (strictDeepEqual(first[key], second[key]) === false) {
            return false;
          }
          keysSeen[key] = true;
        }
      }
      // Now check that there aren't any keys in second that weren't
      // in first.
      for (var key2 in second) {
        if (hasOwnProperty.call(second, key2)) {
          if (keysSeen[key2] !== true) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  function isFalse(obj) {
    // From the spec:
    // A false value corresponds to the following values:
    // Empty list
    // Empty object
    // Empty string
    // False boolean
    // null value

    // First check the scalar values.
    if (obj === "" || obj === false || obj === null) {
        return true;
    } else if (isArray(obj) && obj.length === 0) {
        // Check for an empty array.
        return true;
    } else if (isObject(obj)) {
        // Check for an empty object.
        for (var key in obj) {
            // If there are any keys, then
            // the object is not empty so the object
            // is not false.
            if (obj.hasOwnProperty(key)) {
              return false;
            }
        }
        return true;
    } else {
        return false;
    }
  }

  function objValues(obj) {
    var keys = Object.keys(obj);
    var values = [];
    for (var i = 0; i < keys.length; i++) {
      values.push(obj[keys[i]]);
    }
    return values;
  }

  var trimLeft;
  if (typeof String.prototype.trimLeft === "function") {
    trimLeft = function(str) {
      return str.trimLeft();
    };
  } else {
    trimLeft = function(str) {
      return str.match(/^\s*(.*)/)[1];
    };
  }

  // Type constants used to define functions.
  var TYPE_NUMBER = 0;
  var TYPE_ANY = 1;
  var TYPE_STRING = 2;
  var TYPE_ARRAY = 3;
  var TYPE_OBJECT = 4;
  var TYPE_BOOLEAN = 5;
  var TYPE_EXPREF = 6;
  var TYPE_NULL = 7;
  var TYPE_ARRAY_NUMBER = 8;
  var TYPE_ARRAY_STRING = 9;

  var TOK_EOF = "EOF";
  var TOK_UNQUOTEDIDENTIFIER = "UnquotedIdentifier";
  var TOK_QUOTEDIDENTIFIER = "QuotedIdentifier";
  var TOK_RBRACKET = "Rbracket";
  var TOK_RPAREN = "Rparen";
  var TOK_COMMA = "Comma";
  var TOK_COLON = "Colon";
  var TOK_RBRACE = "Rbrace";
  var TOK_NUMBER = "Number";
  var TOK_CURRENT = "Current";
  var TOK_EXPREF = "Expref";
  var TOK_PIPE = "Pipe";
  var TOK_OR = "Or";
  var TOK_AND = "And";
  var TOK_EQ = "EQ";
  var TOK_GT = "GT";
  var TOK_LT = "LT";
  var TOK_GTE = "GTE";
  var TOK_LTE = "LTE";
  var TOK_NE = "NE";
  var TOK_FLATTEN = "Flatten";
  var TOK_STAR = "Star";
  var TOK_FILTER = "Filter";
  var TOK_DOT = "Dot";
  var TOK_NOT = "Not";
  var TOK_LBRACE = "Lbrace";
  var TOK_LBRACKET = "Lbracket";
  var TOK_LPAREN= "Lparen";
  var TOK_LITERAL= "Literal";

  // The "&", "[", "<", ">" tokens
  // are not in basicToken because
  // there are two token variants
  // ("&&", "[?", "<=", ">=").  This is specially handled
  // below.

  var basicTokens = {
    ".": TOK_DOT,
    "*": TOK_STAR,
    ",": TOK_COMMA,
    ":": TOK_COLON,
    "{": TOK_LBRACE,
    "}": TOK_RBRACE,
    "]": TOK_RBRACKET,
    "(": TOK_LPAREN,
    ")": TOK_RPAREN,
    "@": TOK_CURRENT
  };

  var operatorStartToken = {
      "<": true,
      ">": true,
      "=": true,
      "!": true
  };

  var skipChars = {
      " ": true,
      "\t": true,
      "\n": true
  };


  function isAlpha(ch) {
      return (ch >= "a" && ch <= "z") ||
             (ch >= "A" && ch <= "Z") ||
             ch === "_";
  }

  function isNum(ch) {
      return (ch >= "0" && ch <= "9") ||
             ch === "-";
  }
  function isAlphaNum(ch) {
      return (ch >= "a" && ch <= "z") ||
             (ch >= "A" && ch <= "Z") ||
             (ch >= "0" && ch <= "9") ||
             ch === "_";
  }

  function Lexer() {
  }
  Lexer.prototype = {
      tokenize: function(stream) {
          var tokens = [];
          this._current = 0;
          var start;
          var identifier;
          var token;
          while (this._current < stream.length) {
              if (isAlpha(stream[this._current])) {
                  start = this._current;
                  identifier = this._consumeUnquotedIdentifier(stream);
                  tokens.push({type: TOK_UNQUOTEDIDENTIFIER,
                               value: identifier,
                               start: start});
              } else if (basicTokens[stream[this._current]] !== undefined) {
                  tokens.push({type: basicTokens[stream[this._current]],
                              value: stream[this._current],
                              start: this._current});
                  this._current++;
              } else if (isNum(stream[this._current])) {
                  token = this._consumeNumber(stream);
                  tokens.push(token);
              } else if (stream[this._current] === "[") {
                  // No need to increment this._current.  This happens
                  // in _consumeLBracket
                  token = this._consumeLBracket(stream);
                  tokens.push(token);
              } else if (stream[this._current] === "\"") {
                  start = this._current;
                  identifier = this._consumeQuotedIdentifier(stream);
                  tokens.push({type: TOK_QUOTEDIDENTIFIER,
                               value: identifier,
                               start: start});
              } else if (stream[this._current] === "'") {
                  start = this._current;
                  identifier = this._consumeRawStringLiteral(stream);
                  tokens.push({type: TOK_LITERAL,
                               value: identifier,
                               start: start});
              } else if (stream[this._current] === "`") {
                  start = this._current;
                  var literal = this._consumeLiteral(stream);
                  tokens.push({type: TOK_LITERAL,
                               value: literal,
                               start: start});
              } else if (operatorStartToken[stream[this._current]] !== undefined) {
                  tokens.push(this._consumeOperator(stream));
              } else if (skipChars[stream[this._current]] !== undefined) {
                  // Ignore whitespace.
                  this._current++;
              } else if (stream[this._current] === "&") {
                  start = this._current;
                  this._current++;
                  if (stream[this._current] === "&") {
                      this._current++;
                      tokens.push({type: TOK_AND, value: "&&", start: start});
                  } else {
                      tokens.push({type: TOK_EXPREF, value: "&", start: start});
                  }
              } else if (stream[this._current] === "|") {
                  start = this._current;
                  this._current++;
                  if (stream[this._current] === "|") {
                      this._current++;
                      tokens.push({type: TOK_OR, value: "||", start: start});
                  } else {
                      tokens.push({type: TOK_PIPE, value: "|", start: start});
                  }
              } else {
                  var error = new Error("Unknown character:" + stream[this._current]);
                  error.name = "LexerError";
                  throw error;
              }
          }
          return tokens;
      },

      _consumeUnquotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          while (this._current < stream.length && isAlphaNum(stream[this._current])) {
              this._current++;
          }
          return stream.slice(start, this._current);
      },

      _consumeQuotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== "\"" && this._current < maxLength) {
              // You can escape a double quote and you can escape an escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "\"")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          this._current++;
          return JSON.parse(stream.slice(start, this._current));
      },

      _consumeRawStringLiteral: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== "'" && this._current < maxLength) {
              // You can escape a single quote and you can escape an escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "'")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          this._current++;
          var literal = stream.slice(start + 1, this._current - 1);
          return literal.replace("\\'", "'");
      },

      _consumeNumber: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (isNum(stream[this._current]) && this._current < maxLength) {
              this._current++;
          }
          var value = parseInt(stream.slice(start, this._current));
          return {type: TOK_NUMBER, value: value, start: start};
      },

      _consumeLBracket: function(stream) {
          var start = this._current;
          this._current++;
          if (stream[this._current] === "?") {
              this._current++;
              return {type: TOK_FILTER, value: "[?", start: start};
          } else if (stream[this._current] === "]") {
              this._current++;
              return {type: TOK_FLATTEN, value: "[]", start: start};
          } else {
              return {type: TOK_LBRACKET, value: "[", start: start};
          }
      },

      _consumeOperator: function(stream) {
          var start = this._current;
          var startingChar = stream[start];
          this._current++;
          if (startingChar === "!") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_NE, value: "!=", start: start};
              } else {
                return {type: TOK_NOT, value: "!", start: start};
              }
          } else if (startingChar === "<") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_LTE, value: "<=", start: start};
              } else {
                  return {type: TOK_LT, value: "<", start: start};
              }
          } else if (startingChar === ">") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_GTE, value: ">=", start: start};
              } else {
                  return {type: TOK_GT, value: ">", start: start};
              }
          } else if (startingChar === "=") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_EQ, value: "==", start: start};
              }
          }
      },

      _consumeLiteral: function(stream) {
          this._current++;
          var start = this._current;
          var maxLength = stream.length;
          var literal;
          while(stream[this._current] !== "`" && this._current < maxLength) {
              // You can escape a literal char or you can escape the escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "`")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          var literalString = trimLeft(stream.slice(start, this._current));
          literalString = literalString.replace("\\`", "`");
          if (this._looksLikeJSON(literalString)) {
              literal = JSON.parse(literalString);
          } else {
              // Try to JSON parse it as "<literal>"
              literal = JSON.parse("\"" + literalString + "\"");
          }
          // +1 gets us to the ending "`", +1 to move on to the next char.
          this._current++;
          return literal;
      },

      _looksLikeJSON: function(literalString) {
          var startingChars = "[{\"";
          var jsonLiterals = ["true", "false", "null"];
          var numberLooking = "-0123456789";

          if (literalString === "") {
              return false;
          } else if (startingChars.indexOf(literalString[0]) >= 0) {
              return true;
          } else if (jsonLiterals.indexOf(literalString) >= 0) {
              return true;
          } else if (numberLooking.indexOf(literalString[0]) >= 0) {
              try {
                  JSON.parse(literalString);
                  return true;
              } catch (ex) {
                  return false;
              }
          } else {
              return false;
          }
      }
  };

      var bindingPower = {};
      bindingPower[TOK_EOF] = 0;
      bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_QUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_RBRACKET] = 0;
      bindingPower[TOK_RPAREN] = 0;
      bindingPower[TOK_COMMA] = 0;
      bindingPower[TOK_RBRACE] = 0;
      bindingPower[TOK_NUMBER] = 0;
      bindingPower[TOK_CURRENT] = 0;
      bindingPower[TOK_EXPREF] = 0;
      bindingPower[TOK_PIPE] = 1;
      bindingPower[TOK_OR] = 2;
      bindingPower[TOK_AND] = 3;
      bindingPower[TOK_EQ] = 5;
      bindingPower[TOK_GT] = 5;
      bindingPower[TOK_LT] = 5;
      bindingPower[TOK_GTE] = 5;
      bindingPower[TOK_LTE] = 5;
      bindingPower[TOK_NE] = 5;
      bindingPower[TOK_FLATTEN] = 9;
      bindingPower[TOK_STAR] = 20;
      bindingPower[TOK_FILTER] = 21;
      bindingPower[TOK_DOT] = 40;
      bindingPower[TOK_NOT] = 45;
      bindingPower[TOK_LBRACE] = 50;
      bindingPower[TOK_LBRACKET] = 55;
      bindingPower[TOK_LPAREN] = 60;

  function Parser() {
  }

  Parser.prototype = {
      parse: function(expression) {
          this._loadTokens(expression);
          this.index = 0;
          var ast = this.expression(0);
          if (this._lookahead(0) !== TOK_EOF) {
              var t = this._lookaheadToken(0);
              var error = new Error(
                  "Unexpected token type: " + t.type + ", value: " + t.value);
              error.name = "ParserError";
              throw error;
          }
          return ast;
      },

      _loadTokens: function(expression) {
          var lexer = new Lexer();
          var tokens = lexer.tokenize(expression);
          tokens.push({type: TOK_EOF, value: "", start: expression.length});
          this.tokens = tokens;
      },

      expression: function(rbp) {
          var leftToken = this._lookaheadToken(0);
          this._advance();
          var left = this.nud(leftToken);
          var currentToken = this._lookahead(0);
          while (rbp < bindingPower[currentToken]) {
              this._advance();
              left = this.led(currentToken, left);
              currentToken = this._lookahead(0);
          }
          return left;
      },

      _lookahead: function(number) {
          return this.tokens[this.index + number].type;
      },

      _lookaheadToken: function(number) {
          return this.tokens[this.index + number];
      },

      _advance: function() {
          this.index++;
      },

      nud: function(token) {
        var left;
        var right;
        var expression;
        switch (token.type) {
          case TOK_LITERAL:
            return {type: "Literal", value: token.value};
          case TOK_UNQUOTEDIDENTIFIER:
            return {type: "Field", name: token.value};
          case TOK_QUOTEDIDENTIFIER:
            var node = {type: "Field", name: token.value};
            if (this._lookahead(0) === TOK_LPAREN) {
                throw new Error("Quoted identifier not allowed for function names.");
            } else {
                return node;
            }
            break;
          case TOK_NOT:
            right = this.expression(bindingPower.Not);
            return {type: "NotExpression", children: [right]};
          case TOK_STAR:
            left = {type: "Identity"};
            right = null;
            if (this._lookahead(0) === TOK_RBRACKET) {
                // This can happen in a multiselect,
                // [a, b, *]
                right = {type: "Identity"};
            } else {
                right = this._parseProjectionRHS(bindingPower.Star);
            }
            return {type: "ValueProjection", children: [left, right]};
          case TOK_FILTER:
            return this.led(token.type, {type: "Identity"});
          case TOK_LBRACE:
            return this._parseMultiselectHash();
          case TOK_FLATTEN:
            left = {type: TOK_FLATTEN, children: [{type: "Identity"}]};
            right = this._parseProjectionRHS(bindingPower.Flatten);
            return {type: "Projection", children: [left, right]};
          case TOK_LBRACKET:
            if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice({type: "Identity"}, right);
            } else if (this._lookahead(0) === TOK_STAR &&
                       this._lookahead(1) === TOK_RBRACKET) {
                this._advance();
                this._advance();
                right = this._parseProjectionRHS(bindingPower.Star);
                return {type: "Projection",
                        children: [{type: "Identity"}, right]};
            } else {
                return this._parseMultiselectList();
            }
            break;
          case TOK_CURRENT:
            return {type: TOK_CURRENT};
          case TOK_EXPREF:
            expression = this.expression(bindingPower.Expref);
            return {type: "ExpressionReference", children: [expression]};
          case TOK_LPAREN:
            var args = [];
            while (this._lookahead(0) !== TOK_RPAREN) {
              if (this._lookahead(0) === TOK_CURRENT) {
                expression = {type: TOK_CURRENT};
                this._advance();
              } else {
                expression = this.expression(0);
              }
              args.push(expression);
            }
            this._match(TOK_RPAREN);
            return args[0];
          default:
            this._errorToken(token);
        }
      },

      led: function(tokenName, left) {
        var right;
        switch(tokenName) {
          case TOK_DOT:
            var rbp = bindingPower.Dot;
            if (this._lookahead(0) !== TOK_STAR) {
                right = this._parseDotRHS(rbp);
                return {type: "Subexpression", children: [left, right]};
            } else {
                // Creating a projection.
                this._advance();
                right = this._parseProjectionRHS(rbp);
                return {type: "ValueProjection", children: [left, right]};
            }
            break;
          case TOK_PIPE:
            right = this.expression(bindingPower.Pipe);
            return {type: TOK_PIPE, children: [left, right]};
          case TOK_OR:
            right = this.expression(bindingPower.Or);
            return {type: "OrExpression", children: [left, right]};
          case TOK_AND:
            right = this.expression(bindingPower.And);
            return {type: "AndExpression", children: [left, right]};
          case TOK_LPAREN:
            var name = left.name;
            var args = [];
            var expression, node;
            while (this._lookahead(0) !== TOK_RPAREN) {
              if (this._lookahead(0) === TOK_CURRENT) {
                expression = {type: TOK_CURRENT};
                this._advance();
              } else {
                expression = this.expression(0);
              }
              if (this._lookahead(0) === TOK_COMMA) {
                this._match(TOK_COMMA);
              }
              args.push(expression);
            }
            this._match(TOK_RPAREN);
            node = {type: "Function", name: name, children: args};
            return node;
          case TOK_FILTER:
            var condition = this.expression(0);
            this._match(TOK_RBRACKET);
            if (this._lookahead(0) === TOK_FLATTEN) {
              right = {type: "Identity"};
            } else {
              right = this._parseProjectionRHS(bindingPower.Filter);
            }
            return {type: "FilterProjection", children: [left, right, condition]};
          case TOK_FLATTEN:
            var leftNode = {type: TOK_FLATTEN, children: [left]};
            var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
            return {type: "Projection", children: [leftNode, rightNode]};
          case TOK_EQ:
          case TOK_NE:
          case TOK_GT:
          case TOK_GTE:
          case TOK_LT:
          case TOK_LTE:
            return this._parseComparator(left, tokenName);
          case TOK_LBRACKET:
            var token = this._lookaheadToken(0);
            if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice(left, right);
            } else {
                this._match(TOK_STAR);
                this._match(TOK_RBRACKET);
                right = this._parseProjectionRHS(bindingPower.Star);
                return {type: "Projection", children: [left, right]};
            }
            break;
          default:
            this._errorToken(this._lookaheadToken(0));
        }
      },

      _match: function(tokenType) {
          if (this._lookahead(0) === tokenType) {
              this._advance();
          } else {
              var t = this._lookaheadToken(0);
              var error = new Error("Expected " + tokenType + ", got: " + t.type);
              error.name = "ParserError";
              throw error;
          }
      },

      _errorToken: function(token) {
          var error = new Error("Invalid token (" +
                                token.type + "): \"" +
                                token.value + "\"");
          error.name = "ParserError";
          throw error;
      },


      _parseIndexExpression: function() {
          if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
              return this._parseSliceExpression();
          } else {
              var node = {
                  type: "Index",
                  value: this._lookaheadToken(0).value};
              this._advance();
              this._match(TOK_RBRACKET);
              return node;
          }
      },

      _projectIfSlice: function(left, right) {
          var indexExpr = {type: "IndexExpression", children: [left, right]};
          if (right.type === "Slice") {
              return {
                  type: "Projection",
                  children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)]
              };
          } else {
              return indexExpr;
          }
      },

      _parseSliceExpression: function() {
          // [start:end:step] where each part is optional, as well as the last
          // colon.
          var parts = [null, null, null];
          var index = 0;
          var currentToken = this._lookahead(0);
          while (currentToken !== TOK_RBRACKET && index < 3) {
              if (currentToken === TOK_COLON) {
                  index++;
                  this._advance();
              } else if (currentToken === TOK_NUMBER) {
                  parts[index] = this._lookaheadToken(0).value;
                  this._advance();
              } else {
                  var t = this._lookahead(0);
                  var error = new Error("Syntax error, unexpected token: " +
                                        t.value + "(" + t.type + ")");
                  error.name = "Parsererror";
                  throw error;
              }
              currentToken = this._lookahead(0);
          }
          this._match(TOK_RBRACKET);
          return {
              type: "Slice",
              children: parts
          };
      },

      _parseComparator: function(left, comparator) {
        var right = this.expression(bindingPower[comparator]);
        return {type: "Comparator", name: comparator, children: [left, right]};
      },

      _parseDotRHS: function(rbp) {
          var lookahead = this._lookahead(0);
          var exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR];
          if (exprTokens.indexOf(lookahead) >= 0) {
              return this.expression(rbp);
          } else if (lookahead === TOK_LBRACKET) {
              this._match(TOK_LBRACKET);
              return this._parseMultiselectList();
          } else if (lookahead === TOK_LBRACE) {
              this._match(TOK_LBRACE);
              return this._parseMultiselectHash();
          }
      },

      _parseProjectionRHS: function(rbp) {
          var right;
          if (bindingPower[this._lookahead(0)] < 10) {
              right = {type: "Identity"};
          } else if (this._lookahead(0) === TOK_LBRACKET) {
              right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_FILTER) {
              right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_DOT) {
              this._match(TOK_DOT);
              right = this._parseDotRHS(rbp);
          } else {
              var t = this._lookaheadToken(0);
              var error = new Error("Sytanx error, unexpected token: " +
                                    t.value + "(" + t.type + ")");
              error.name = "ParserError";
              throw error;
          }
          return right;
      },

      _parseMultiselectList: function() {
          var expressions = [];
          while (this._lookahead(0) !== TOK_RBRACKET) {
              var expression = this.expression(0);
              expressions.push(expression);
              if (this._lookahead(0) === TOK_COMMA) {
                  this._match(TOK_COMMA);
                  if (this._lookahead(0) === TOK_RBRACKET) {
                    throw new Error("Unexpected token Rbracket");
                  }
              }
          }
          this._match(TOK_RBRACKET);
          return {type: "MultiSelectList", children: expressions};
      },

      _parseMultiselectHash: function() {
        var pairs = [];
        var identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER];
        var keyToken, keyName, value, node;
        for (;;) {
          keyToken = this._lookaheadToken(0);
          if (identifierTypes.indexOf(keyToken.type) < 0) {
            throw new Error("Expecting an identifier token, got: " +
                            keyToken.type);
          }
          keyName = keyToken.value;
          this._advance();
          this._match(TOK_COLON);
          value = this.expression(0);
          node = {type: "KeyValuePair", name: keyName, value: value};
          pairs.push(node);
          if (this._lookahead(0) === TOK_COMMA) {
            this._match(TOK_COMMA);
          } else if (this._lookahead(0) === TOK_RBRACE) {
            this._match(TOK_RBRACE);
            break;
          }
        }
        return {type: "MultiSelectHash", children: pairs};
      }
  };


  function TreeInterpreter(runtime) {
    this.runtime = runtime;
  }

  TreeInterpreter.prototype = {
      search: function(node, value) {
          return this.visit(node, value);
      },

      visit: function(node, value) {
          var matched, current, result, first, second, field, left, right, collected, i;
          switch (node.type) {
            case "Field":
              if (value === null ) {
                  return null;
              } else if (isObject(value)) {
                  field = value[node.name];
                  if (field === undefined) {
                      return null;
                  } else {
                      return field;
                  }
              } else {
                return null;
              }
              break;
            case "Subexpression":
              result = this.visit(node.children[0], value);
              for (i = 1; i < node.children.length; i++) {
                  result = this.visit(node.children[1], result);
                  if (result === null) {
                      return null;
                  }
              }
              return result;
            case "IndexExpression":
              left = this.visit(node.children[0], value);
              right = this.visit(node.children[1], left);
              return right;
            case "Index":
              if (!isArray(value)) {
                return null;
              }
              var index = node.value;
              if (index < 0) {
                index = value.length + index;
              }
              result = value[index];
              if (result === undefined) {
                result = null;
              }
              return result;
            case "Slice":
              if (!isArray(value)) {
                return null;
              }
              var sliceParams = node.children.slice(0);
              var computed = this.computeSliceParams(value.length, sliceParams);
              var start = computed[0];
              var stop = computed[1];
              var step = computed[2];
              result = [];
              if (step > 0) {
                  for (i = start; i < stop; i += step) {
                      result.push(value[i]);
                  }
              } else {
                  for (i = start; i > stop; i += step) {
                      result.push(value[i]);
                  }
              }
              return result;
            case "Projection":
              // Evaluate left child.
              var base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              collected = [];
              for (i = 0; i < base.length; i++) {
                current = this.visit(node.children[1], base[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "ValueProjection":
              // Evaluate left child.
              base = this.visit(node.children[0], value);
              if (!isObject(base)) {
                return null;
              }
              collected = [];
              var values = objValues(base);
              for (i = 0; i < values.length; i++) {
                current = this.visit(node.children[1], values[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "FilterProjection":
              base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              var filtered = [];
              var finalResults = [];
              for (i = 0; i < base.length; i++) {
                matched = this.visit(node.children[2], base[i]);
                if (!isFalse(matched)) {
                  filtered.push(base[i]);
                }
              }
              for (var j = 0; j < filtered.length; j++) {
                current = this.visit(node.children[1], filtered[j]);
                if (current !== null) {
                  finalResults.push(current);
                }
              }
              return finalResults;
            case "Comparator":
              first = this.visit(node.children[0], value);
              second = this.visit(node.children[1], value);
              switch(node.name) {
                case TOK_EQ:
                  result = strictDeepEqual(first, second);
                  break;
                case TOK_NE:
                  result = !strictDeepEqual(first, second);
                  break;
                case TOK_GT:
                  result = first > second;
                  break;
                case TOK_GTE:
                  result = first >= second;
                  break;
                case TOK_LT:
                  result = first < second;
                  break;
                case TOK_LTE:
                  result = first <= second;
                  break;
                default:
                  throw new Error("Unknown comparator: " + node.name);
              }
              return result;
            case TOK_FLATTEN:
              var original = this.visit(node.children[0], value);
              if (!isArray(original)) {
                return null;
              }
              var merged = [];
              for (i = 0; i < original.length; i++) {
                current = original[i];
                if (isArray(current)) {
                  merged.push.apply(merged, current);
                } else {
                  merged.push(current);
                }
              }
              return merged;
            case "Identity":
              return value;
            case "MultiSelectList":
              if (value === null) {
                return null;
              }
              collected = [];
              for (i = 0; i < node.children.length; i++) {
                  collected.push(this.visit(node.children[i], value));
              }
              return collected;
            case "MultiSelectHash":
              if (value === null) {
                return null;
              }
              collected = {};
              var child;
              for (i = 0; i < node.children.length; i++) {
                child = node.children[i];
                collected[child.name] = this.visit(child.value, value);
              }
              return collected;
            case "OrExpression":
              matched = this.visit(node.children[0], value);
              if (isFalse(matched)) {
                  matched = this.visit(node.children[1], value);
              }
              return matched;
            case "AndExpression":
              first = this.visit(node.children[0], value);

              if (isFalse(first) === true) {
                return first;
              }
              return this.visit(node.children[1], value);
            case "NotExpression":
              first = this.visit(node.children[0], value);
              return isFalse(first);
            case "Literal":
              return node.value;
            case TOK_PIPE:
              left = this.visit(node.children[0], value);
              return this.visit(node.children[1], left);
            case TOK_CURRENT:
              return value;
            case "Function":
              var resolvedArgs = [];
              for (i = 0; i < node.children.length; i++) {
                  resolvedArgs.push(this.visit(node.children[i], value));
              }
              return this.runtime.callFunction(node.name, resolvedArgs);
            case "ExpressionReference":
              var refNode = node.children[0];
              // Tag the node with a specific attribute so the type
              // checker verify the type.
              refNode.jmespathType = TOK_EXPREF;
              return refNode;
            default:
              throw new Error("Unknown node type: " + node.type);
          }
      },

      computeSliceParams: function(arrayLength, sliceParams) {
        var start = sliceParams[0];
        var stop = sliceParams[1];
        var step = sliceParams[2];
        var computed = [null, null, null];
        if (step === null) {
          step = 1;
        } else if (step === 0) {
          var error = new Error("Invalid slice, step cannot be 0");
          error.name = "RuntimeError";
          throw error;
        }
        var stepValueNegative = step < 0 ? true : false;

        if (start === null) {
            start = stepValueNegative ? arrayLength - 1 : 0;
        } else {
            start = this.capSliceRange(arrayLength, start, step);
        }

        if (stop === null) {
            stop = stepValueNegative ? -1 : arrayLength;
        } else {
            stop = this.capSliceRange(arrayLength, stop, step);
        }
        computed[0] = start;
        computed[1] = stop;
        computed[2] = step;
        return computed;
      },

      capSliceRange: function(arrayLength, actualValue, step) {
          if (actualValue < 0) {
              actualValue += arrayLength;
              if (actualValue < 0) {
                  actualValue = step < 0 ? -1 : 0;
              }
          } else if (actualValue >= arrayLength) {
              actualValue = step < 0 ? arrayLength - 1 : arrayLength;
          }
          return actualValue;
      }

  };

  function Runtime(interpreter) {
    this._interpreter = interpreter;
    this.functionTable = {
        // name: [function, <signature>]
        // The <signature> can be:
        //
        // {
        //   args: [[type1, type2], [type1, type2]],
        //   variadic: true|false
        // }
        //
        // Each arg in the arg list is a list of valid types
        // (if the function is overloaded and supports multiple
        // types.  If the type is "any" then no type checking
        // occurs on the argument.  Variadic is optional
        // and if not provided is assumed to be false.
        abs: {_func: this._functionAbs, _signature: [{types: [TYPE_NUMBER]}]},
        avg: {_func: this._functionAvg, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
        ceil: {_func: this._functionCeil, _signature: [{types: [TYPE_NUMBER]}]},
        contains: {
            _func: this._functionContains,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]},
                        {types: [TYPE_ANY]}]},
        "ends_with": {
            _func: this._functionEndsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
        floor: {_func: this._functionFloor, _signature: [{types: [TYPE_NUMBER]}]},
        length: {
            _func: this._functionLength,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT]}]},
        map: {
            _func: this._functionMap,
            _signature: [{types: [TYPE_EXPREF]}, {types: [TYPE_ARRAY]}]},
        max: {
            _func: this._functionMax,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
        "merge": {
            _func: this._functionMerge,
            _signature: [{types: [TYPE_OBJECT], variadic: true}]
        },
        "max_by": {
          _func: this._functionMaxBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        sum: {_func: this._functionSum, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
        "starts_with": {
            _func: this._functionStartsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
        min: {
            _func: this._functionMin,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
        "min_by": {
          _func: this._functionMinBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        type: {_func: this._functionType, _signature: [{types: [TYPE_ANY]}]},
        keys: {_func: this._functionKeys, _signature: [{types: [TYPE_OBJECT]}]},
        values: {_func: this._functionValues, _signature: [{types: [TYPE_OBJECT]}]},
        sort: {_func: this._functionSort, _signature: [{types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER]}]},
        "sort_by": {
          _func: this._functionSortBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        join: {
            _func: this._functionJoin,
            _signature: [
                {types: [TYPE_STRING]},
                {types: [TYPE_ARRAY_STRING]}
            ]
        },
        reverse: {
            _func: this._functionReverse,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]}]},
        "to_array": {_func: this._functionToArray, _signature: [{types: [TYPE_ANY]}]},
        "to_string": {_func: this._functionToString, _signature: [{types: [TYPE_ANY]}]},
        "to_number": {_func: this._functionToNumber, _signature: [{types: [TYPE_ANY]}]},
        "not_null": {
            _func: this._functionNotNull,
            _signature: [{types: [TYPE_ANY], variadic: true}]
        }
    };
  }

  Runtime.prototype = {
    callFunction: function(name, resolvedArgs) {
      var functionEntry = this.functionTable[name];
      if (functionEntry === undefined) {
          throw new Error("Unknown function: " + name + "()");
      }
      this._validateArgs(name, resolvedArgs, functionEntry._signature);
      return functionEntry._func.call(this, resolvedArgs);
    },

    _validateArgs: function(name, args, signature) {
        // Validating the args requires validating
        // the correct arity and the correct type of each arg.
        // If the last argument is declared as variadic, then we need
        // a minimum number of args to be required.  Otherwise it has to
        // be an exact amount.
        var pluralized;
        if (signature[signature.length - 1].variadic) {
            if (args.length < signature.length) {
                pluralized = signature.length === 1 ? " argument" : " arguments";
                throw new Error("ArgumentError: " + name + "() " +
                                "takes at least" + signature.length + pluralized +
                                " but received " + args.length);
            }
        } else if (args.length !== signature.length) {
            pluralized = signature.length === 1 ? " argument" : " arguments";
            throw new Error("ArgumentError: " + name + "() " +
                            "takes " + signature.length + pluralized +
                            " but received " + args.length);
        }
        var currentSpec;
        var actualType;
        var typeMatched;
        for (var i = 0; i < signature.length; i++) {
            typeMatched = false;
            currentSpec = signature[i].types;
            actualType = this._getTypeName(args[i]);
            for (var j = 0; j < currentSpec.length; j++) {
                if (this._typeMatches(actualType, currentSpec[j], args[i])) {
                    typeMatched = true;
                    break;
                }
            }
            if (!typeMatched) {
                throw new Error("TypeError: " + name + "() " +
                                "expected argument " + (i + 1) +
                                " to be type " + currentSpec +
                                " but received type " + actualType +
                                " instead.");
            }
        }
    },

    _typeMatches: function(actual, expected, argValue) {
        if (expected === TYPE_ANY) {
            return true;
        }
        if (expected === TYPE_ARRAY_STRING ||
            expected === TYPE_ARRAY_NUMBER ||
            expected === TYPE_ARRAY) {
            // The expected type can either just be array,
            // or it can require a specific subtype (array of numbers).
            //
            // The simplest case is if "array" with no subtype is specified.
            if (expected === TYPE_ARRAY) {
                return actual === TYPE_ARRAY;
            } else if (actual === TYPE_ARRAY) {
                // Otherwise we need to check subtypes.
                // I think this has potential to be improved.
                var subtype;
                if (expected === TYPE_ARRAY_NUMBER) {
                  subtype = TYPE_NUMBER;
                } else if (expected === TYPE_ARRAY_STRING) {
                  subtype = TYPE_STRING;
                }
                for (var i = 0; i < argValue.length; i++) {
                    if (!this._typeMatches(
                            this._getTypeName(argValue[i]), subtype,
                                             argValue[i])) {
                        return false;
                    }
                }
                return true;
            }
        } else {
            return actual === expected;
        }
    },
    _getTypeName: function(obj) {
        switch (Object.prototype.toString.call(obj)) {
            case "[object String]":
              return TYPE_STRING;
            case "[object Number]":
              return TYPE_NUMBER;
            case "[object Array]":
              return TYPE_ARRAY;
            case "[object Boolean]":
              return TYPE_BOOLEAN;
            case "[object Null]":
              return TYPE_NULL;
            case "[object Object]":
              // Check if it's an expref.  If it has, it's been
              // tagged with a jmespathType attr of 'Expref';
              if (obj.jmespathType === TOK_EXPREF) {
                return TYPE_EXPREF;
              } else {
                return TYPE_OBJECT;
              }
        }
    },

    _functionStartsWith: function(resolvedArgs) {
        return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
    },

    _functionEndsWith: function(resolvedArgs) {
        var searchStr = resolvedArgs[0];
        var suffix = resolvedArgs[1];
        return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
    },

    _functionReverse: function(resolvedArgs) {
        var typeName = this._getTypeName(resolvedArgs[0]);
        if (typeName === TYPE_STRING) {
          var originalStr = resolvedArgs[0];
          var reversedStr = "";
          for (var i = originalStr.length - 1; i >= 0; i--) {
              reversedStr += originalStr[i];
          }
          return reversedStr;
        } else {
          var reversedArray = resolvedArgs[0].slice(0);
          reversedArray.reverse();
          return reversedArray;
        }
    },

    _functionAbs: function(resolvedArgs) {
      return Math.abs(resolvedArgs[0]);
    },

    _functionCeil: function(resolvedArgs) {
        return Math.ceil(resolvedArgs[0]);
    },

    _functionAvg: function(resolvedArgs) {
        var sum = 0;
        var inputArray = resolvedArgs[0];
        for (var i = 0; i < inputArray.length; i++) {
            sum += inputArray[i];
        }
        return sum / inputArray.length;
    },

    _functionContains: function(resolvedArgs) {
        return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
    },

    _functionFloor: function(resolvedArgs) {
        return Math.floor(resolvedArgs[0]);
    },

    _functionLength: function(resolvedArgs) {
       if (!isObject(resolvedArgs[0])) {
         return resolvedArgs[0].length;
       } else {
         // As far as I can tell, there's no way to get the length
         // of an object without O(n) iteration through the object.
         return Object.keys(resolvedArgs[0]).length;
       }
    },

    _functionMap: function(resolvedArgs) {
      var mapped = [];
      var interpreter = this._interpreter;
      var exprefNode = resolvedArgs[0];
      var elements = resolvedArgs[1];
      for (var i = 0; i < elements.length; i++) {
          mapped.push(interpreter.visit(exprefNode, elements[i]));
      }
      return mapped;
    },

    _functionMerge: function(resolvedArgs) {
      var merged = {};
      for (var i = 0; i < resolvedArgs.length; i++) {
        var current = resolvedArgs[i];
        for (var key in current) {
          merged[key] = current[key];
        }
      }
      return merged;
    },

    _functionMax: function(resolvedArgs) {
      if (resolvedArgs[0].length > 0) {
        var typeName = this._getTypeName(resolvedArgs[0][0]);
        if (typeName === TYPE_NUMBER) {
          return Math.max.apply(Math, resolvedArgs[0]);
        } else {
          var elements = resolvedArgs[0];
          var maxElement = elements[0];
          for (var i = 1; i < elements.length; i++) {
              if (maxElement.localeCompare(elements[i]) < 0) {
                  maxElement = elements[i];
              }
          }
          return maxElement;
        }
      } else {
          return null;
      }
    },

    _functionMin: function(resolvedArgs) {
      if (resolvedArgs[0].length > 0) {
        var typeName = this._getTypeName(resolvedArgs[0][0]);
        if (typeName === TYPE_NUMBER) {
          return Math.min.apply(Math, resolvedArgs[0]);
        } else {
          var elements = resolvedArgs[0];
          var minElement = elements[0];
          for (var i = 1; i < elements.length; i++) {
              if (elements[i].localeCompare(minElement) < 0) {
                  minElement = elements[i];
              }
          }
          return minElement;
        }
      } else {
        return null;
      }
    },

    _functionSum: function(resolvedArgs) {
      var sum = 0;
      var listToSum = resolvedArgs[0];
      for (var i = 0; i < listToSum.length; i++) {
        sum += listToSum[i];
      }
      return sum;
    },

    _functionType: function(resolvedArgs) {
        switch (this._getTypeName(resolvedArgs[0])) {
          case TYPE_NUMBER:
            return "number";
          case TYPE_STRING:
            return "string";
          case TYPE_ARRAY:
            return "array";
          case TYPE_OBJECT:
            return "object";
          case TYPE_BOOLEAN:
            return "boolean";
          case TYPE_EXPREF:
            return "expref";
          case TYPE_NULL:
            return "null";
        }
    },

    _functionKeys: function(resolvedArgs) {
        return Object.keys(resolvedArgs[0]);
    },

    _functionValues: function(resolvedArgs) {
        var obj = resolvedArgs[0];
        var keys = Object.keys(obj);
        var values = [];
        for (var i = 0; i < keys.length; i++) {
            values.push(obj[keys[i]]);
        }
        return values;
    },

    _functionJoin: function(resolvedArgs) {
        var joinChar = resolvedArgs[0];
        var listJoin = resolvedArgs[1];
        return listJoin.join(joinChar);
    },

    _functionToArray: function(resolvedArgs) {
        if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
            return resolvedArgs[0];
        } else {
            return [resolvedArgs[0]];
        }
    },

    _functionToString: function(resolvedArgs) {
        if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
            return resolvedArgs[0];
        } else {
            return JSON.stringify(resolvedArgs[0]);
        }
    },

    _functionToNumber: function(resolvedArgs) {
        var typeName = this._getTypeName(resolvedArgs[0]);
        var convertedValue;
        if (typeName === TYPE_NUMBER) {
            return resolvedArgs[0];
        } else if (typeName === TYPE_STRING) {
            convertedValue = +resolvedArgs[0];
            if (!isNaN(convertedValue)) {
                return convertedValue;
            }
        }
        return null;
    },

    _functionNotNull: function(resolvedArgs) {
        for (var i = 0; i < resolvedArgs.length; i++) {
            if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
                return resolvedArgs[i];
            }
        }
        return null;
    },

    _functionSort: function(resolvedArgs) {
        var sortedArray = resolvedArgs[0].slice(0);
        sortedArray.sort();
        return sortedArray;
    },

    _functionSortBy: function(resolvedArgs) {
        var sortedArray = resolvedArgs[0].slice(0);
        if (sortedArray.length === 0) {
            return sortedArray;
        }
        var interpreter = this._interpreter;
        var exprefNode = resolvedArgs[1];
        var requiredType = this._getTypeName(
            interpreter.visit(exprefNode, sortedArray[0]));
        if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
            throw new Error("TypeError");
        }
        var that = this;
        // In order to get a stable sort out of an unstable
        // sort algorithm, we decorate/sort/undecorate (DSU)
        // by creating a new list of [index, element] pairs.
        // In the cmp function, if the evaluated elements are
        // equal, then the index will be used as the tiebreaker.
        // After the decorated list has been sorted, it will be
        // undecorated to extract the original elements.
        var decorated = [];
        for (var i = 0; i < sortedArray.length; i++) {
          decorated.push([i, sortedArray[i]]);
        }
        decorated.sort(function(a, b) {
          var exprA = interpreter.visit(exprefNode, a[1]);
          var exprB = interpreter.visit(exprefNode, b[1]);
          if (that._getTypeName(exprA) !== requiredType) {
              throw new Error(
                  "TypeError: expected " + requiredType + ", received " +
                  that._getTypeName(exprA));
          } else if (that._getTypeName(exprB) !== requiredType) {
              throw new Error(
                  "TypeError: expected " + requiredType + ", received " +
                  that._getTypeName(exprB));
          }
          if (exprA > exprB) {
            return 1;
          } else if (exprA < exprB) {
            return -1;
          } else {
            // If they're equal compare the items by their
            // order to maintain relative order of equal keys
            // (i.e. to get a stable sort).
            return a[0] - b[0];
          }
        });
        // Undecorate: extract out the original list elements.
        for (var j = 0; j < decorated.length; j++) {
          sortedArray[j] = decorated[j][1];
        }
        return sortedArray;
    },

    _functionMaxBy: function(resolvedArgs) {
      var exprefNode = resolvedArgs[1];
      var resolvedArray = resolvedArgs[0];
      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
      var maxNumber = -Infinity;
      var maxRecord;
      var current;
      for (var i = 0; i < resolvedArray.length; i++) {
        current = keyFunction(resolvedArray[i]);
        if (current > maxNumber) {
          maxNumber = current;
          maxRecord = resolvedArray[i];
        }
      }
      return maxRecord;
    },

    _functionMinBy: function(resolvedArgs) {
      var exprefNode = resolvedArgs[1];
      var resolvedArray = resolvedArgs[0];
      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
      var minNumber = Infinity;
      var minRecord;
      var current;
      for (var i = 0; i < resolvedArray.length; i++) {
        current = keyFunction(resolvedArray[i]);
        if (current < minNumber) {
          minNumber = current;
          minRecord = resolvedArray[i];
        }
      }
      return minRecord;
    },

    createKeyFunction: function(exprefNode, allowedTypes) {
      var that = this;
      var interpreter = this._interpreter;
      var keyFunc = function(x) {
        var current = interpreter.visit(exprefNode, x);
        if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
          var msg = "TypeError: expected one of " + allowedTypes +
                    ", received " + that._getTypeName(current);
          throw new Error(msg);
        }
        return current;
      };
      return keyFunc;
    }

  };

  function compile(stream) {
    var parser = new Parser();
    var ast = parser.parse(stream);
    return ast;
  }

  function tokenize(stream) {
      var lexer = new Lexer();
      return lexer.tokenize(stream);
  }

  function search(data, expression) {
      var parser = new Parser();
      // This needs to be improved.  Both the interpreter and runtime depend on
      // each other.  The runtime needs the interpreter to support exprefs.
      // There's likely a clean way to avoid the cyclic dependency.
      var runtime = new Runtime();
      var interpreter = new TreeInterpreter(runtime);
      runtime._interpreter = interpreter;
      var node = parser.parse(expression);
      return interpreter.search(node, data);
  }

  exports.tokenize = tokenize;
  exports.compile = compile;
  exports.search = search;
  exports.strictDeepEqual = strictDeepEqual;
})( exports);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showSortModal; });
/* harmony import */ var picomodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var picomodal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(picomodal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);



/**
 * Show advanced sorting modal
 * @param {HTMLElement} container   The container where to center
 *                                  the modal and create an overlay
 * @param {JSON} json               The JSON data to be sorted.
 * @param {function} onSort         Callback function, invoked with
 *                                  an object containing the selected
 *                                  path and direction
 * @param {Object} options
 *            Available options:
 *                - {string} path              The selected path
 *                - {'asc' | 'desc'} direction The selected direction
 */

function showSortModal(container, json, onSort, options) {
  var paths = Array.isArray(json) ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["getChildPaths"])(json) : [''];
  var selectedPath = options && options.path && Object(_util__WEBPACK_IMPORTED_MODULE_2__["contains"])(paths, options.path) ? options.path : paths[0];
  var selectedDirection = options && options.direction || 'asc';
  var content = '<div class="pico-modal-contents">' + '<div class="pico-modal-header">' + Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('sort') + '</div>' + '<form>' + '<table>' + '<tbody>' + '<tr>' + '  <td>' + Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('sortFieldLabel') + ' </td>' + '  <td class="jsoneditor-modal-input">' + '  <div class="jsoneditor-select-wrapper">' + '    <select id="field" title="' + Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('sortFieldTitle') + '">' + '    </select>' + '  </div>' + '  </td>' + '</tr>' + '<tr>' + '  <td>' + Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('sortDirectionLabel') + ' </td>' + '  <td class="jsoneditor-modal-input">' + '  <div id="direction" class="jsoneditor-button-group">' + '<input type="button" ' + 'value="' + Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('sortAscending') + '" ' + 'title="' + Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('sortAscendingTitle') + '" ' + 'data-value="asc" ' + 'class="jsoneditor-button-first jsoneditor-button-asc"/>' + '<input type="button" ' + 'value="' + Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('sortDescending') + '" ' + 'title="' + Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('sortDescendingTitle') + '" ' + 'data-value="desc" ' + 'class="jsoneditor-button-last jsoneditor-button-desc"/>' + '  </div>' + '  </td>' + '</tr>' + '<tr>' + '<td colspan="2" class="jsoneditor-modal-input jsoneditor-modal-actions">' + '  <input type="submit" id="ok" value="' + Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('ok') + '" />' + '</td>' + '</tr>' + '</tbody>' + '</table>' + '</form>' + '</div>';
  picomodal__WEBPACK_IMPORTED_MODULE_0___default()({
    parent: container,
    content: content,
    overlayClass: 'jsoneditor-modal-overlay',
    overlayStyles: {
      backgroundColor: 'rgb(1,1,1)',
      opacity: 0.3
    },
    modalClass: 'jsoneditor-modal jsoneditor-modal-sort'
  }).afterCreate(function (modal) {
    var form = modal.modalElem().querySelector('form');
    var ok = modal.modalElem().querySelector('#ok');
    var field = modal.modalElem().querySelector('#field');
    var direction = modal.modalElem().querySelector('#direction');

    function preprocessPath(path) {
      return path === '' ? '@' : path[0] === '.' ? path.slice(1) : path;
    }

    paths.forEach(function (path) {
      var option = document.createElement('option');
      option.text = preprocessPath(path);
      option.value = path;
      field.appendChild(option);
    });

    function setDirection(value) {
      direction.value = value;
      direction.className = 'jsoneditor-button-group jsoneditor-button-group-value-' + direction.value;
    }

    field.value = selectedPath || paths[0];
    setDirection(selectedDirection || 'asc');

    direction.onclick = function (event) {
      setDirection(event.target.getAttribute('data-value'));
    };

    ok.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();
      modal.close();
      onSort({
        path: field.value,
        direction: direction.value
      });
    };

    if (form) {
      // form is not available when JSONEditor is created inside a form
      form.onsubmit = ok.onclick;
    }
  }).afterClose(function (modal) {
    modal.destroy();
  }).show();
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModeSwitcher; });
/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Create a select box to be used in the editor menu's, which allows to switch mode
 * @param {HTMLElement} container
 * @param {String[]} modes  Available modes: 'code', 'form', 'text', 'tree', 'view', 'preview'
 * @param {String} current  Available modes: 'code', 'form', 'text', 'tree', 'view', 'preview'
 * @param {function(mode: string)} onSwitch  Callback invoked on switch
 * @constructor
 */

var ModeSwitcher =
/*#__PURE__*/
function () {
  function ModeSwitcher(container, modes, current, onSwitch) {
    _classCallCheck(this, ModeSwitcher);

    // available modes
    var availableModes = {
      code: {
        text: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeCodeText'),
        title: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeCodeTitle'),
        click: function click() {
          onSwitch('code');
        }
      },
      form: {
        text: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeFormText'),
        title: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeFormTitle'),
        click: function click() {
          onSwitch('form');
        }
      },
      text: {
        text: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeTextText'),
        title: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeTextTitle'),
        click: function click() {
          onSwitch('text');
        }
      },
      tree: {
        text: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeTreeText'),
        title: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeTreeTitle'),
        click: function click() {
          onSwitch('tree');
        }
      },
      view: {
        text: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeViewText'),
        title: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modeViewTitle'),
        click: function click() {
          onSwitch('view');
        }
      },
      preview: {
        text: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modePreviewText'),
        title: Object(_i18n__WEBPACK_IMPORTED_MODULE_1__[/* translate */ "c"])('modePreviewTitle'),
        click: function click() {
          onSwitch('preview');
        }
      }
    }; // list the selected modes

    var items = [];

    for (var i = 0; i < modes.length; i++) {
      var mode = modes[i];
      var item = availableModes[mode];

      if (!item) {
        throw new Error('Unknown mode "' + mode + '"');
      }

      item.className = 'jsoneditor-type-modes' + (current === mode ? ' jsoneditor-selected' : '');
      items.push(item);
    } // retrieve the title of current mode


    var currentMode = availableModes[current];

    if (!currentMode) {
      throw new Error('Unknown mode "' + current + '"');
    }

    var currentTitle = currentMode.text; // create the html element

    var box = document.createElement('button');
    box.type = 'button';
    box.className = 'jsoneditor-modes jsoneditor-separator';
    box.innerHTML = currentTitle + ' &#x25BE;';
    box.title = 'Switch editor mode';

    box.onclick = function () {
      var menu = new _ContextMenu__WEBPACK_IMPORTED_MODULE_0__[/* ContextMenu */ "a"](items);
      menu.show(box, container);
    };

    var frame = document.createElement('div');
    frame.className = 'jsoneditor-modes';
    frame.style.position = 'relative';
    frame.appendChild(box);
    container.appendChild(frame);
    this.dom = {
      container: container,
      box: box,
      frame: frame
    };
  }
  /**
   * Set focus to switcher
   */


  _createClass(ModeSwitcher, [{
    key: "focus",
    value: function focus() {
      this.dom.box.focus();
    }
    /**
     * Destroy the ModeSwitcher, remove from DOM
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.dom && this.dom.frame && this.dom.frame.parentNode) {
        this.dom.frame.parentNode.removeChild(this.dom.frame);
      }

      this.dom = null;
    }
  }]);

  return ModeSwitcher;
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

// EXTERNAL MODULE: ./node_modules/jmespath/jmespath.js
var jmespath = __webpack_require__(4);
var jmespath_default = /*#__PURE__*/__webpack_require__.n(jmespath);

// EXTERNAL MODULE: ./node_modules/picomodal/src/picoModal.js
var picoModal = __webpack_require__(12);
var picoModal_default = /*#__PURE__*/__webpack_require__.n(picoModal);

// EXTERNAL MODULE: ./src/js/assets/selectr/selectr.js
var selectr = __webpack_require__(8);
var selectr_default = /*#__PURE__*/__webpack_require__.n(selectr);

// EXTERNAL MODULE: ./src/js/i18n.js
var i18n = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/jsonUtils.js

/**
 * Convert part of a JSON object to a JSON string.
 * Use case is to stringify a small part of a large JSON object so you can see
 * a preview.
 *
 * @param {*} value
 * The value to convert to a JSON string.
 *
 * @param {number | string | null} [space]
 * A String or Number object that's used to insert white space into the output
 * JSON string for readability purposes. If this is a Number, it indicates the
 * number of space characters to use as white space; this number is capped at 10
 * if it's larger than that. Values less than 1 indicate that no space should be
 * used. If this is a String, the string (or the first 10 characters of the string,
 * if it's longer than that) is used as white space. If this parameter is not
 * provided (or is null), no white space is used.
 *
 * @param {number} [limit] Maximum size of the string output.
 *
 * @returns {string | undefined} Returns the string representation of the JSON object.
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function stringifyPartial(value, space, limit) {
  var _space; // undefined by default


  if (typeof space === 'number') {
    if (space > 10) {
      _space = repeat(' ', 10);
    } else if (space >= 1) {
      _space = repeat(' ', space);
    } // else ignore

  } else if (typeof space === 'string' && space !== '') {
    _space = space;
  }

  var output = stringifyValue(value, _space, '', limit);
  return output.length > limit ? slice(output, limit) + '...' : output;
}
/**
 * Stringify a value
 * @param {*} value
 * @param {string} space
 * @param {string} indent
 * @param {number} limit
 * @return {string | undefined}
 */

function stringifyValue(value, space, indent, limit) {
  // boolean, null, number, string, or date
  if (typeof value === 'boolean' || value instanceof Boolean || value === null || typeof value === 'number' || value instanceof Number || typeof value === 'string' || value instanceof String || value instanceof Date) {
    return JSON.stringify(value);
  } // array


  if (Array.isArray(value)) {
    return stringifyArray(value, space, indent, limit);
  } // object (test lastly!)


  if (value && _typeof(value) === 'object') {
    return stringifyObject(value, space, indent, limit);
  }

  return undefined;
}
/**
 * Stringify an array
 * @param {Array} array
 * @param {string} space
 * @param {string} indent
 * @param {number} limit
 * @return {string}
 */


function stringifyArray(array, space, indent, limit) {
  var childIndent = space ? indent + space : undefined;
  var str = space ? '[\n' : '[';

  for (var i = 0; i < array.length; i++) {
    var item = array[i];

    if (space) {
      str += childIndent;
    }

    if (typeof item !== 'undefined' && typeof item !== 'function') {
      str += stringifyValue(item, space, childIndent, limit);
    } else {
      str += 'null';
    }

    if (i < array.length - 1) {
      str += space ? ',\n' : ',';
    } // stop as soon as we're exceeding the limit


    if (str.length > limit) {
      return str + '...';
    }
  }

  str += space ? '\n' + indent + ']' : ']';
  return str;
}
/**
 * Stringify an object
 * @param {Object} object
 * @param {string} space
 * @param {string} indent
 * @param {number} limit
 * @return {string}
 */


function stringifyObject(object, space, indent, limit) {
  var childIndent = space ? indent + space : undefined;
  var first = true;
  var str = space ? '{\n' : '{';

  if (typeof object.toJSON === 'function') {
    return stringifyValue(object.toJSON(), space, indent, limit);
  }

  for (var key in object) {
    if (jsonUtils_hasOwnProperty(object, key)) {
      var value = object[key];

      if (first) {
        first = false;
      } else {
        str += space ? ',\n' : ',';
      }

      str += space ? childIndent + '"' + key + '": ' : '"' + key + '":';
      str += stringifyValue(value, space, childIndent, limit); // stop as soon as we're exceeding the limit

      if (str.length > limit) {
        return str + '...';
      }
    }
  }

  str += space ? '\n' + indent + '}' : '}';
  return str;
}
/**
 * Repeat a string a number of times.
 * Simple linear solution, we only need up to 10 iterations in practice
 * @param {string} text
 * @param {number} times
 * @return {string}
 */


function repeat(text, times) {
  var res = '';

  while (times-- > 0) {
    res += text;
  }

  return res;
}
/**
 * Limit the length of text
 * @param {string} text
 * @param {number} [limit]
 * @return {string}
 */


function slice(text, limit) {
  return typeof limit === 'number' ? text.slice(0, limit) : text;
}

function jsonUtils_hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}
// EXTERNAL MODULE: ./src/js/util.js
var util = __webpack_require__(0);

// EXTERNAL MODULE: ./src/js/constants.js
var constants = __webpack_require__(2);

// CONCATENATED MODULE: ./src/js/showTransformModal.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showTransformModal; });







/**
 * Show advanced filter and transform modal using JMESPath
 * @param {HTMLElement} container   The container where to center
 *                                  the modal and create an overlay
 * @param {JSON} json               The json data to be transformed
 * @param {function} onTransform    Callback invoked with the created
 *                                  query as callback
 */

function showTransformModal(container, json, onTransform) {
  var value = json;
  var content = '<label class="pico-modal-contents">' + '<div class="pico-modal-header">' + Object(i18n["c" /* translate */])('transform') + '</div>' + '<p>' + 'Enter a <a href="http://jmespath.org" target="_blank">JMESPath</a> query to filter, sort, or transform the JSON data.<br/>' + 'To learn JMESPath, go to <a href="http://jmespath.org/tutorial.html" target="_blank">the interactive tutorial</a>.' + '</p>' + '<div class="jsoneditor-jmespath-label">' + Object(i18n["c" /* translate */])('transformWizardLabel') + ' </div>' + '<div id="wizard" class="jsoneditor-jmespath-block jsoneditor-jmespath-wizard">' + '  <table class="jsoneditor-jmespath-wizard-table">' + '    <tbody>' + '      <tr>' + '        <th>' + Object(i18n["c" /* translate */])('transformWizardFilter') + '</th>' + '        <td class="jsoneditor-jmespath-filter">' + '          <div class="jsoneditor-inline jsoneditor-jmespath-filter-field" >' + '            <select id="filterField">' + '            </select>' + '          </div>' + '          <div class="jsoneditor-inline jsoneditor-jmespath-filter-relation" >' + '            <select id="filterRelation">' + '              <option value="==">==</option>' + '              <option value="!=">!=</option>' + '              <option value="<">&lt;</option>' + '              <option value="<=">&lt;=</option>' + '              <option value=">">&gt;</option>' + '              <option value=">=">&gt;=</option>' + '            </select>' + '          </div>' + '          <div class="jsoneditor-inline jsoneditor-jmespath-filter-value" >' + '            <input placeholder="value..." id="filterValue" />' + '          </div>' + '        </td>' + '      </tr>' + '      <tr>' + '        <th>' + Object(i18n["c" /* translate */])('transformWizardSortBy') + '</th>' + '        <td class="jsoneditor-jmespath-filter">' + '          <div class="jsoneditor-inline jsoneditor-jmespath-sort-field">' + '            <select id="sortField">' + '            </select>' + '          </div>' + '          <div class="jsoneditor-inline jsoneditor-jmespath-sort-order" >' + '            <select id="sortOrder">' + '              <option value="asc">Ascending</option>' + '              <option value="desc">Descending</option>' + '            </select>' + '          </div>' + '        </td>' + '      </tr>' + '      <tr id="selectFieldsPart">' + '        <th>' + Object(i18n["c" /* translate */])('transformWizardSelectFields') + '</th>' + '        <td class="jsoneditor-jmespath-filter">' + '          <select class="jsoneditor-jmespath-select-fields" id="selectFields" multiple></select>' + '        </td>' + '      </tr>' + '    </tbody>' + '  </table>' + '</div>' + '<div class="jsoneditor-jmespath-label">' + Object(i18n["c" /* translate */])('transformQueryLabel') + ' </div>' + '<div class="jsoneditor-jmespath-block">' + '  <textarea id="query" ' + '            rows="4" ' + '            autocomplete="off" ' + '            autocorrect="off" ' + '            autocapitalize="off" ' + '            spellcheck="false"' + '            title="' + Object(i18n["c" /* translate */])('transformQueryTitle') + '">[*]</textarea>' + '</div>' + '<div class="jsoneditor-jmespath-label">' + Object(i18n["c" /* translate */])('transformPreviewLabel') + ' </div>' + '<div class="jsoneditor-jmespath-block">' + '  <textarea id="preview" ' + '      class="jsoneditor-transform-preview"' + '      readonly> </textarea>' + '</div>' + '<div class="jsoneditor-jmespath-block jsoneditor-modal-actions">' + '  <input type="submit" id="ok" value="' + Object(i18n["c" /* translate */])('ok') + '" autofocus />' + '</div>' + '</div>';
  picoModal_default()({
    parent: container,
    content: content,
    overlayClass: 'jsoneditor-modal-overlay',
    overlayStyles: {
      backgroundColor: 'rgb(1,1,1)',
      opacity: 0.3
    },
    modalClass: 'jsoneditor-modal jsoneditor-modal-transform',
    focus: false
  }).afterCreate(function (modal) {
    var elem = modal.modalElem();
    var wizard = elem.querySelector('#wizard');
    var ok = elem.querySelector('#ok');
    var filterField = elem.querySelector('#filterField');
    var filterRelation = elem.querySelector('#filterRelation');
    var filterValue = elem.querySelector('#filterValue');
    var sortField = elem.querySelector('#sortField');
    var sortOrder = elem.querySelector('#sortOrder');
    var selectFields = elem.querySelector('#selectFields');
    var query = elem.querySelector('#query');
    var preview = elem.querySelector('#preview');

    if (!Array.isArray(value)) {
      wizard.style.fontStyle = 'italic';
      wizard.innerHTML = '(wizard not available for objects, only for arrays)';
    }

    var sortablePaths = Object(util["getChildPaths"])(json);
    sortablePaths.forEach(function (path) {
      var formattedPath = preprocessPath(path);
      var filterOption = document.createElement('option');
      filterOption.text = formattedPath;
      filterOption.value = formattedPath;
      filterField.appendChild(filterOption);
      var sortOption = document.createElement('option');
      sortOption.text = formattedPath;
      sortOption.value = formattedPath;
      sortField.appendChild(sortOption);
    });
    var selectablePaths = Object(util["getChildPaths"])(json, true).filter(function (path) {
      return path !== '';
    });

    if (selectablePaths.length > 0) {
      selectablePaths.forEach(function (path) {
        var formattedPath = preprocessPath(path);
        var option = document.createElement('option');
        option.text = formattedPath;
        option.value = formattedPath;
        selectFields.appendChild(option);
      });
    } else {
      var selectFieldsPart = elem.querySelector('#selectFieldsPart');

      if (selectFieldsPart) {
        selectFieldsPart.style.display = 'none';
      }
    }

    var selectrFilterField = new selectr_default.a(filterField, {
      defaultSelected: false,
      clearable: true,
      allowDeselect: true,
      placeholder: 'field...'
    });
    var selectrFilterRelation = new selectr_default.a(filterRelation, {
      defaultSelected: false,
      clearable: true,
      allowDeselect: true,
      placeholder: 'compare...'
    });
    var selectrSortField = new selectr_default.a(sortField, {
      defaultSelected: false,
      clearable: true,
      allowDeselect: true,
      placeholder: 'field...'
    });
    var selectrSortOrder = new selectr_default.a(sortOrder, {
      defaultSelected: false,
      clearable: true,
      allowDeselect: true,
      placeholder: 'order...'
    });
    var selectrSelectFields = new selectr_default.a(selectFields, {
      multiple: true,
      clearable: true,
      defaultSelected: false,
      placeholder: 'select fields...'
    });
    selectrFilterField.on('selectr.change', generateQueryFromWizard);
    selectrFilterRelation.on('selectr.change', generateQueryFromWizard);
    filterValue.oninput = generateQueryFromWizard;
    selectrSortField.on('selectr.change', generateQueryFromWizard);
    selectrSortOrder.on('selectr.change', generateQueryFromWizard);
    selectrSelectFields.on('selectr.change', generateQueryFromWizard);

    elem.querySelector('.pico-modal-contents').onclick = function (event) {
      // prevent the first clear button (in any select box) from getting
      // focus when clicking anywhere in the modal. Only allow clicking links.
      if (event.target.nodeName !== 'A') {
        event.preventDefault();
      }
    };

    query.value = Array.isArray(value) ? '[*]' : '@';

    function preprocessPath(path) {
      return path === '' ? '@' : path[0] === '.' ? path.slice(1) : path;
    }

    function generateQueryFromWizard() {
      if (filterField.value && filterRelation.value && filterValue.value) {
        var field1 = filterField.value;
        var examplePath = field1 !== '@' ? ['0'].concat(Object(util["parsePath"])('.' + field1)) : ['0'];
        var exampleValue = Object(util["get"])(value, examplePath);
        var value1 = typeof exampleValue === 'string' ? filterValue.value : Object(util["parseString"])(filterValue.value);
        query.value = '[? ' + field1 + ' ' + filterRelation.value + ' ' + '`' + JSON.stringify(value1) + '`' + ']';
      } else {
        query.value = '[*]';
      }

      if (sortField.value && sortOrder.value) {
        var field2 = sortField.value;

        if (sortOrder.value === 'desc') {
          query.value += ' | reverse(sort_by(@, &' + field2 + '))';
        } else {
          query.value += ' | sort_by(@, &' + field2 + ')';
        }
      }

      if (selectFields.value) {
        var values = [];

        for (var i = 0; i < selectFields.options.length; i++) {
          if (selectFields.options[i].selected) {
            var selectedValue = selectFields.options[i].value;
            values.push(selectedValue);
          }
        }

        if (query.value[query.value.length - 1] !== ']') {
          query.value += ' | [*]';
        }

        if (values.length === 1) {
          query.value += '.' + values[0];
        } else if (values.length > 1) {
          query.value += '.{' + values.map(function (value) {
            var parts = value.split('.');
            var last = parts[parts.length - 1];
            return last + ': ' + value;
          }).join(', ') + '}';
        }
      }

      debouncedUpdatePreview();
    }

    function updatePreview() {
      try {
        var transformed = jmespath_default.a.search(value, query.value);
        preview.className = 'jsoneditor-transform-preview';
        preview.value = stringifyPartial(transformed, 2, constants["b" /* MAX_PREVIEW_CHARACTERS */]);
        ok.disabled = false;
      } catch (err) {
        preview.className = 'jsoneditor-transform-preview jsoneditor-error';
        preview.value = err.toString();
        ok.disabled = true;
      }
    }

    var debouncedUpdatePreview = Object(util["debounce"])(updatePreview, 300);
    query.oninput = debouncedUpdatePreview;
    debouncedUpdatePreview();

    ok.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();
      modal.close();
      onTransform(query.value);
    };

    setTimeout(function () {
      query.select();
      query.focus();
      query.selectionStart = 3;
      query.selectionEnd = 3;
    });
  }).afterClose(function (modal) {
    modal.destroy();
  }).show();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {
/*!
 * Selectr 2.4.0
 * https://github.com/Mobius1/Selectr
 *
 * Released under the MIT license
 */

/**
 * Default configuration options
 * @type {Object}
 */

var defaultConfig = {
  /**
   * Emulates browser behaviour by selecting the first option by default
   * @type {Boolean}
   */
  defaultSelected: true,

  /**
   * Sets the width of the container
   * @type {String}
   */
  width: "auto",

  /**
   * Enables/ disables the container
   * @type {Boolean}
   */
  disabled: false,

  /**
   * Enables / disables the search function
   * @type {Boolean}
   */
  searchable: true,

  /**
   * Enable disable the clear button
   * @type {Boolean}
   */
  clearable: false,

  /**
   * Sort the tags / multiselect options
   * @type {Boolean}
   */
  sortSelected: false,

  /**
   * Allow deselecting of select-one options
   * @type {Boolean}
   */
  allowDeselect: false,

  /**
   * Close the dropdown when scrolling (@AlexanderReiswich, #11)
   * @type {Boolean}
   */
  closeOnScroll: false,

  /**
   * Allow the use of the native dropdown (@jonnyscholes, #14)
   * @type {Boolean}
   */
  nativeDropdown: false,

  /**
   * Set the main placeholder
   * @type {String}
   */
  placeholder: "Select an option...",

  /**
   * Allow the tagging feature
   * @type {Boolean}
   */
  taggable: false,

  /**
   * Set the tag input placeholder (@labikmartin, #21, #22)
   * @type {String}
   */
  tagPlaceholder: "Enter a tag..."
};
/**
 * Event Emitter
 */

var Events = function Events() {};
/**
 * Event Prototype
 * @type {Object}
 */


Events.prototype = {
  /**
   * Add custom event listener
   * @param  {String} event Event type
   * @param  {Function} func   Callback
   * @return {Void}
   */
  on: function on(event, func) {
    this._events = this._events || {};
    this._events[event] = this._events[event] || [];

    this._events[event].push(func);
  },

  /**
   * Remove custom event listener
   * @param  {String} event Event type
   * @param  {Function} func   Callback
   * @return {Void}
   */
  off: function off(event, func) {
    this._events = this._events || {};
    if (event in this._events === false) return;

    this._events[event].splice(this._events[event].indexOf(func), 1);
  },

  /**
   * Fire a custom event
   * @param  {String} event Event type
   * @return {Void}
   */
  emit: function emit(event
  /* , args... */
  ) {
    this._events = this._events || {};
    if (event in this._events === false) return;

    for (var i = 0; i < this._events[event].length; i++) {
      this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
    }
  }
};
/**
 * Event mixin
 * @param  {Object} obj
 * @return {Object}
 */

Events.mixin = function (obj) {
  var props = ['on', 'off', 'emit'];

  for (var i = 0; i < props.length; i++) {
    if (typeof obj === 'function') {
      obj.prototype[props[i]] = Events.prototype[props[i]];
    } else {
      obj[props[i]] = Events.prototype[props[i]];
    }
  }

  return obj;
};
/**
 * Helpers
 * @type {Object}
 */


var util = {
  extend: function extend(src, props) {
    props = props || {};
    var p;

    for (p in src) {
      if (src.hasOwnProperty(p)) {
        if (!props.hasOwnProperty(p)) {
          props[p] = src[p];
        }
      }
    }

    return props;
  },
  each: function each(a, b, c) {
    if ("[object Object]" === Object.prototype.toString.call(a)) {
      for (var d in a) {
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          b.call(c, d, a[d], a);
        }
      }
    } else {
      for (var e = 0, f = a.length; e < f; e++) {
        b.call(c, e, a[e], a);
      }
    }
  },
  createElement: function createElement(e, a) {
    var d = document,
        el = d.createElement(e);

    if (a && "[object Object]" === Object.prototype.toString.call(a)) {
      var i;

      for (i in a) {
        if (i in el) el[i] = a[i];else if ("html" === i) el.innerHTML = a[i];else if ("text" === i) {
          var t = d.createTextNode(a[i]);
          el.appendChild(t);
        } else el.setAttribute(i, a[i]);
      }
    }

    return el;
  },
  hasClass: function hasClass(a, b) {
    if (a) return a.classList ? a.classList.contains(b) : !!a.className && !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
  },
  addClass: function addClass(a, b) {
    if (!util.hasClass(a, b)) {
      if (a.classList) {
        a.classList.add(b);
      } else {
        a.className = a.className.trim() + " " + b;
      }
    }
  },
  removeClass: function removeClass(a, b) {
    if (util.hasClass(a, b)) {
      if (a.classList) {
        a.classList.remove(b);
      } else {
        a.className = a.className.replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
      }
    }
  },
  closest: function closest(el, fn) {
    return el && el !== document.body && (fn(el) ? el : util.closest(el.parentNode, fn));
  },
  isInt: function isInt(val) {
    return typeof val === 'number' && isFinite(val) && Math.floor(val) === val;
  },
  debounce: function debounce(a, b, c) {
    var d;
    return function () {
      var e = this,
          f = arguments,
          g = function g() {
        d = null;
        if (!c) a.apply(e, f);
      },
          h = c && !d;

      clearTimeout(d);
      d = setTimeout(g, b);

      if (h) {
        a.apply(e, f);
      }
    };
  },
  rect: function rect(el, abs) {
    var w = window;
    var r = el.getBoundingClientRect();
    var x = abs ? w.pageXOffset : 0;
    var y = abs ? w.pageYOffset : 0;
    return {
      bottom: r.bottom + y,
      height: r.height,
      left: r.left + x,
      right: r.right + x,
      top: r.top + y,
      width: r.width
    };
  },
  includes: function includes(a, b) {
    return a.indexOf(b) > -1;
  },
  truncate: function truncate(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }
};

function isset(obj, prop) {
  return obj.hasOwnProperty(prop) && (obj[prop] === true || obj[prop].length);
}
/**
 * Append an item to the list
 * @param  {Object} item
 * @param  {Object} custom
 * @return {Void}
 */


function appendItem(item, parent, custom) {
  if (item.parentNode) {
    if (!item.parentNode.parentNode) {
      parent.appendChild(item.parentNode);
    }
  } else {
    parent.appendChild(item);
  }

  util.removeClass(item, "excluded");

  if (!custom) {
    item.innerHTML = item.textContent;
  }
}
/**
 * Render the item list
 * @return {Void}
 */


var render = function render() {
  if (this.items.length) {
    var f = document.createDocumentFragment();

    if (this.config.pagination) {
      var pages = this.pages.slice(0, this.pageIndex);
      util.each(pages, function (i, items) {
        util.each(items, function (j, item) {
          appendItem(item, f, this.customOption);
        }, this);
      }, this);
    } else {
      util.each(this.items, function (i, item) {
        appendItem(item, f, this.customOption);
      }, this);
    }

    if (f.childElementCount) {
      util.removeClass(this.items[this.navIndex], "active");
      this.navIndex = f.querySelector(".selectr-option").idx;
      util.addClass(this.items[this.navIndex], "active");
    }

    this.tree.appendChild(f);
  }
};
/**
 * Dismiss / close the dropdown
 * @param  {obj} e
 * @return {void}
 */


var dismiss = function dismiss(e) {
  var target = e.target;

  if (!this.container.contains(target) && (this.opened || util.hasClass(this.container, "notice"))) {
    this.close();
  }
};
/**
 * Build a list item from the HTMLOptionElement
 * @param  {int} i      HTMLOptionElement index
 * @param  {HTMLOptionElement} option
 * @param  {bool} group  Has parent optgroup
 * @return {void}
 */


var createItem = function createItem(option, data) {
  data = data || option;
  var content = this.customOption ? this.config.renderOption(data) : option.textContent;
  var opt = util.createElement("li", {
    "class": "selectr-option",
    html: content,
    role: "treeitem",
    "aria-selected": false
  });
  opt.idx = option.idx;
  this.items.push(opt);

  if (option.defaultSelected) {
    this.defaultSelected.push(option.idx);
  }

  if (option.disabled) {
    opt.disabled = true;
    util.addClass(opt, "disabled");
  }

  return opt;
};
/**
 * Build the container
 * @return {Void}
 */


var build = function build() {
  this.requiresPagination = this.config.pagination && this.config.pagination > 0; // Set width

  if (isset(this.config, "width")) {
    if (util.isInt(this.config.width)) {
      this.width = this.config.width + "px";
    } else {
      if (this.config.width === "auto") {
        this.width = "100%";
      } else if (util.includes(this.config.width, "%")) {
        this.width = this.config.width;
      }
    }
  }

  this.container = util.createElement("div", {
    "class": "selectr-container"
  }); // Custom className

  if (this.config.customClass) {
    util.addClass(this.container, this.config.customClass);
  } // Mobile device


  if (this.mobileDevice) {
    util.addClass(this.container, "selectr-mobile");
  } else {
    util.addClass(this.container, "selectr-desktop");
  } // Hide the HTMLSelectElement and prevent focus


  this.el.tabIndex = -1; // Native dropdown

  if (this.config.nativeDropdown || this.mobileDevice) {
    util.addClass(this.el, "selectr-visible");
  } else {
    util.addClass(this.el, "selectr-hidden");
  }

  this.selected = util.createElement("div", {
    "class": "selectr-selected",
    disabled: this.disabled,
    tabIndex: 1,
    // enable tabIndex (#9)
    "aria-expanded": false
  });
  this.label = util.createElement(this.el.multiple ? "ul" : "span", {
    "class": "selectr-label"
  });
  var dropdown = util.createElement("div", {
    "class": "selectr-options-container"
  });
  this.tree = util.createElement("ul", {
    "class": "selectr-options",
    role: "tree",
    "aria-hidden": true,
    "aria-expanded": false
  });
  this.notice = util.createElement("div", {
    "class": "selectr-notice"
  });
  this.el.setAttribute("aria-hidden", true);

  if (this.disabled) {
    this.el.disabled = true;
  }

  if (this.el.multiple) {
    util.addClass(this.label, "selectr-tags");
    util.addClass(this.container, "multiple"); // Collection of tags

    this.tags = []; // Collection of selected values

    this.selectedValues = this.getSelectedProperties('value'); // Collection of selected indexes

    this.selectedIndexes = this.getSelectedProperties('idx');
  }

  this.selected.appendChild(this.label);

  if (this.config.clearable) {
    this.selectClear = util.createElement("button", {
      "class": "selectr-clear",
      type: "button"
    });
    this.container.appendChild(this.selectClear);
    util.addClass(this.container, "clearable");
  }

  if (this.config.taggable) {
    var li = util.createElement('li', {
      "class": 'input-tag'
    });
    this.input = util.createElement("input", {
      "class": "selectr-tag-input",
      placeholder: this.config.tagPlaceholder,
      tagIndex: 0,
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false",
      role: "textbox",
      type: "search"
    });
    li.appendChild(this.input);
    this.label.appendChild(li);
    util.addClass(this.container, "taggable");
    this.tagSeperators = [","];

    if (this.config.tagSeperators) {
      this.tagSeperators = this.tagSeperators.concat(this.config.tagSeperators);
    }
  }

  if (this.config.searchable) {
    this.input = util.createElement("input", {
      "class": "selectr-input",
      tagIndex: -1,
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false",
      role: "textbox",
      type: "search"
    });
    this.inputClear = util.createElement("button", {
      "class": "selectr-input-clear",
      type: "button"
    });
    this.inputContainer = util.createElement("div", {
      "class": "selectr-input-container"
    });
    this.inputContainer.appendChild(this.input);
    this.inputContainer.appendChild(this.inputClear);
    dropdown.appendChild(this.inputContainer);
  }

  dropdown.appendChild(this.notice);
  dropdown.appendChild(this.tree); // List of items for the dropdown

  this.items = []; // Establish options

  this.options = []; // Check for options in the element

  if (this.el.options.length) {
    this.options = [].slice.call(this.el.options);
  } // Element may have optgroups so
  // iterate element.children instead of element.options


  var group = false,
      j = 0;

  if (this.el.children.length) {
    util.each(this.el.children, function (i, element) {
      if (element.nodeName === "OPTGROUP") {
        group = util.createElement("ul", {
          "class": "selectr-optgroup",
          role: "group",
          html: "<li class='selectr-optgroup--label'>" + element.label + "</li>"
        });
        util.each(element.children, function (x, el) {
          el.idx = j;
          group.appendChild(createItem.call(this, el, group));
          j++;
        }, this);
      } else {
        element.idx = j;
        createItem.call(this, element);
        j++;
      }
    }, this);
  } // Options defined by the data option


  if (this.config.data && Array.isArray(this.config.data)) {
    this.data = [];
    var optgroup = false,
        option;
    group = false;
    j = 0;
    util.each(this.config.data, function (i, opt) {
      // Check for group options
      if (isset(opt, "children")) {
        optgroup = util.createElement("optgroup", {
          label: opt.text
        });
        group = util.createElement("ul", {
          "class": "selectr-optgroup",
          role: "group",
          html: "<li class='selectr-optgroup--label'>" + opt.text + "</li>"
        });
        util.each(opt.children, function (x, data) {
          option = new Option(data.text, data.value, false, data.hasOwnProperty("selected") && data.selected === true);
          option.disabled = isset(data, "disabled");
          this.options.push(option);
          optgroup.appendChild(option);
          option.idx = j;
          group.appendChild(createItem.call(this, option, data));
          this.data[j] = data;
          j++;
        }, this);
      } else {
        option = new Option(opt.text, opt.value, false, opt.hasOwnProperty("selected") && opt.selected === true);
        option.disabled = isset(opt, "disabled");
        this.options.push(option);
        option.idx = j;
        createItem.call(this, option, opt);
        this.data[j] = opt;
        j++;
      }
    }, this);
  }

  this.setSelected(true);
  var first;
  this.navIndex = 0;

  for (var i = 0; i < this.items.length; i++) {
    first = this.items[i];

    if (!util.hasClass(first, "disabled")) {
      util.addClass(first, "active");
      this.navIndex = i;
      break;
    }
  } // Check for pagination / infinite scroll


  if (this.requiresPagination) {
    this.pageIndex = 1; // Create the pages

    this.paginate();
  }

  this.container.appendChild(this.selected);
  this.container.appendChild(dropdown);
  this.placeEl = util.createElement("div", {
    "class": "selectr-placeholder"
  }); // Set the placeholder

  this.setPlaceholder();
  this.selected.appendChild(this.placeEl); // Disable if required

  if (this.disabled) {
    this.disable();
  }

  this.el.parentNode.insertBefore(this.container, this.el);
  this.container.appendChild(this.el);
};
/**
 * Navigate through the dropdown
 * @param  {obj} e
 * @return {void}
 */


var navigate = function navigate(e) {
  e = e || window.event; // Filter out the keys we don"t want

  if (!this.items.length || !this.opened || !util.includes([13, 38, 40], e.which)) {
    this.navigating = false;
    return;
  }

  e.preventDefault();

  if (e.which === 13) {
    if (this.config.taggable && this.input.value.length > 0) {
      return false;
    }

    return this.change(this.navIndex);
  }

  var direction,
      prevEl = this.items[this.navIndex];

  switch (e.which) {
    case 38:
      direction = 0;

      if (this.navIndex > 0) {
        this.navIndex--;
      }

      break;

    case 40:
      direction = 1;

      if (this.navIndex < this.items.length - 1) {
        this.navIndex++;
      }

  }

  this.navigating = true; // Instead of wasting memory holding a copy of this.items
  // with disabled / excluded options omitted, skip them instead

  while (util.hasClass(this.items[this.navIndex], "disabled") || util.hasClass(this.items[this.navIndex], "excluded")) {
    if (direction) {
      this.navIndex++;
    } else {
      this.navIndex--;
    }

    if (this.searching) {
      if (this.navIndex > this.tree.lastElementChild.idx) {
        this.navIndex = this.tree.lastElementChild.idx;
        break;
      } else if (this.navIndex < this.tree.firstElementChild.idx) {
        this.navIndex = this.tree.firstElementChild.idx;
        break;
      }
    }
  } // Autoscroll the dropdown during navigation


  var r = util.rect(this.items[this.navIndex]);

  if (!direction) {
    if (this.navIndex === 0) {
      this.tree.scrollTop = 0;
    } else if (r.top - this.optsRect.top < 0) {
      this.tree.scrollTop = this.tree.scrollTop + (r.top - this.optsRect.top);
    }
  } else {
    if (this.navIndex === 0) {
      this.tree.scrollTop = 0;
    } else if (r.top + r.height > this.optsRect.top + this.optsRect.height) {
      this.tree.scrollTop = this.tree.scrollTop + (r.top + r.height - (this.optsRect.top + this.optsRect.height));
    } // Load another page if needed


    if (this.navIndex === this.tree.childElementCount - 1 && this.requiresPagination) {
      load.call(this);
    }
  }

  if (prevEl) {
    util.removeClass(prevEl, "active");
  }

  util.addClass(this.items[this.navIndex], "active");
};
/**
 * Add a tag
 * @param  {HTMLElement} item
 */


var addTag = function addTag(item) {
  var that = this,
      r;
  var docFrag = document.createDocumentFragment();
  var option = this.options[item.idx];
  var data = this.data ? this.data[item.idx] : option;
  var content = this.customSelected ? this.config.renderSelection(data) : option.textContent;
  var tag = util.createElement("li", {
    "class": "selectr-tag",
    html: content
  });
  var btn = util.createElement("button", {
    "class": "selectr-tag-remove",
    type: "button"
  });
  tag.appendChild(btn); // Set property to check against later

  tag.idx = item.idx;
  tag.tag = option.value;
  this.tags.push(tag);

  if (this.config.sortSelected) {
    var tags = this.tags.slice(); // Deal with values that contain numbers

    r = function r(val, arr) {
      val.replace(/(\d+)|(\D+)/g, function (that, $1, $2) {
        arr.push([$1 || Infinity, $2 || ""]);
      });
    };

    tags.sort(function (a, b) {
      var x = [],
          y = [],
          ac,
          bc;

      if (that.config.sortSelected === true) {
        ac = a.tag;
        bc = b.tag;
      } else if (that.config.sortSelected === 'text') {
        ac = a.textContent;
        bc = b.textContent;
      }

      r(ac, x);
      r(bc, y);

      while (x.length && y.length) {
        var ax = x.shift();
        var by = y.shift();
        var nn = ax[0] - by[0] || ax[1].localeCompare(by[1]);
        if (nn) return nn;
      }

      return x.length - y.length;
    });
    util.each(tags, function (i, tg) {
      docFrag.appendChild(tg);
    });
    this.label.innerHTML = "";
  } else {
    docFrag.appendChild(tag);
  }

  if (this.config.taggable) {
    this.label.insertBefore(docFrag, this.input.parentNode);
  } else {
    this.label.appendChild(docFrag);
  }
};
/**
 * Remove a tag
 * @param  {HTMLElement} item
 * @return {void}
 */


var removeTag = function removeTag(item) {
  var tag = false;
  util.each(this.tags, function (i, t) {
    if (t.idx === item.idx) {
      tag = t;
    }
  }, this);

  if (tag) {
    this.label.removeChild(tag);
    this.tags.splice(this.tags.indexOf(tag), 1);
  }
};
/**
 * Load the next page of items
 * @return {void}
 */


var load = function load() {
  var tree = this.tree;
  var scrollTop = tree.scrollTop;
  var scrollHeight = tree.scrollHeight;
  var offsetHeight = tree.offsetHeight;
  var atBottom = scrollTop >= scrollHeight - offsetHeight;

  if (atBottom && this.pageIndex < this.pages.length) {
    var f = document.createDocumentFragment();
    util.each(this.pages[this.pageIndex], function (i, item) {
      appendItem(item, f, this.customOption);
    }, this);
    tree.appendChild(f);
    this.pageIndex++;
    this.emit("selectr.paginate", {
      items: this.items.length,
      total: this.data.length,
      page: this.pageIndex,
      pages: this.pages.length
    });
  }
};
/**
 * Clear a search
 * @return {void}
 */


var clearSearch = function clearSearch() {
  if (this.config.searchable || this.config.taggable) {
    this.input.value = null;
    this.searching = false;

    if (this.config.searchable) {
      util.removeClass(this.inputContainer, "active");
    }

    if (util.hasClass(this.container, "notice")) {
      util.removeClass(this.container, "notice");
      util.addClass(this.container, "open");
      this.input.focus();
    }

    util.each(this.items, function (i, item) {
      // Items that didn't match need the class
      // removing to make them visible again
      util.removeClass(item, "excluded"); // Remove the span element for underlining matched items

      if (!this.customOption) {
        item.innerHTML = item.textContent;
      }
    }, this);
  }
};
/**
 * Query matching for searches
 * @param  {string} query
 * @param  {HTMLOptionElement} option
 * @return {bool}
 */


var match = function match(query, option) {
  var result = new RegExp(query, "i").exec(option.textContent);

  if (result) {
    return option.textContent.replace(result[0], "<span class='selectr-match'>" + result[0] + "</span>");
  }

  return false;
}; // Main Lib


var Selectr = function Selectr(el, config) {
  config = config || {};

  if (!el) {
    throw new Error("You must supply either a HTMLSelectElement or a CSS3 selector string.");
  }

  this.el = el; // CSS3 selector string

  if (typeof el === "string") {
    this.el = document.querySelector(el);
  }

  if (this.el === null) {
    throw new Error("The element you passed to Selectr can not be found.");
  }

  if (this.el.nodeName.toLowerCase() !== "select") {
    throw new Error("The element you passed to Selectr is not a HTMLSelectElement.");
  }

  this.render(config);
};
/**
 * Render the instance
 * @param  {object} config
 * @return {void}
 */


Selectr.prototype.render = function (config) {
  if (this.rendered) return; // Merge defaults with user set config

  this.config = util.extend(defaultConfig, config); // Store type

  this.originalType = this.el.type; // Store tabIndex

  this.originalIndex = this.el.tabIndex; // Store defaultSelected options for form reset

  this.defaultSelected = []; // Store the original option count

  this.originalOptionCount = this.el.options.length;

  if (this.config.multiple || this.config.taggable) {
    this.el.multiple = true;
  } // Disabled?


  this.disabled = isset(this.config, "disabled");
  this.opened = false;

  if (this.config.taggable) {
    this.config.searchable = false;
  }

  this.navigating = false;
  this.mobileDevice = false;

  if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
    this.mobileDevice = true;
  }

  this.customOption = this.config.hasOwnProperty("renderOption") && typeof this.config.renderOption === "function";
  this.customSelected = this.config.hasOwnProperty("renderSelection") && typeof this.config.renderSelection === "function"; // Enable event emitter

  Events.mixin(this);
  build.call(this);
  this.bindEvents();
  this.update();
  this.optsRect = util.rect(this.tree);
  this.rendered = true; // Fixes macOS Safari bug #28

  if (!this.el.multiple) {
    this.el.selectedIndex = this.selectedIndex;
  }

  var that = this;
  setTimeout(function () {
    that.emit("selectr.init");
  }, 20);
};

Selectr.prototype.getSelected = function () {
  var selected = this.el.querySelectorAll('option:checked');
  return selected;
};

Selectr.prototype.getSelectedProperties = function (prop) {
  var selected = this.getSelected();
  var values = [].slice.call(selected).map(function (option) {
    return option[prop];
  }).filter(function (i) {
    return i !== null && i !== undefined;
  });
  return values;
};
/**
 * Attach the required event listeners
 */


Selectr.prototype.bindEvents = function () {
  var that = this;
  this.events = {};
  this.events.dismiss = dismiss.bind(this);
  this.events.navigate = navigate.bind(this);
  this.events.reset = this.reset.bind(this);

  if (this.config.nativeDropdown || this.mobileDevice) {
    this.container.addEventListener("touchstart", function (e) {
      if (e.changedTouches[0].target === that.el) {
        that.toggle();
      }
    });

    if (this.config.nativeDropdown || this.mobileDevice) {
      this.container.addEventListener("click", function (e) {
        e.preventDefault(); // Jos: Added to prevent emitting clear directly after select

        e.stopPropagation(); // Jos: Added to prevent emitting clear directly after select

        if (e.target === that.el) {
          that.toggle();
        }
      });
    }

    var getChangedOptions = function getChangedOptions(last, current) {
      var added = [],
          removed = last.slice(0);
      var idx;

      for (var i = 0; i < current.length; i++) {
        idx = removed.indexOf(current[i]);
        if (idx > -1) removed.splice(idx, 1);else added.push(current[i]);
      }

      return [added, removed];
    }; // Listen for the change on the native select
    // and update accordingly


    this.el.addEventListener("change", function (e) {
      if (that.el.multiple) {
        var indexes = that.getSelectedProperties('idx');
        var changes = getChangedOptions(that.selectedIndexes, indexes);
        util.each(changes[0], function (i, idx) {
          that.select(idx);
        }, that);
        util.each(changes[1], function (i, idx) {
          that.deselect(idx);
        }, that);
      } else {
        if (that.el.selectedIndex > -1) {
          that.select(that.el.selectedIndex);
        }
      }
    });
  } // Open the dropdown with Enter key if focused


  if (this.config.nativeDropdown) {
    this.container.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && that.selected === document.activeElement) {
        // Show the native
        that.toggle(); // Focus on the native multiselect

        setTimeout(function () {
          that.el.focus();
        }, 200);
      }
    });
  } // Non-native dropdown


  this.selected.addEventListener("click", function (e) {
    if (!that.disabled) {
      that.toggle();
    }

    e.preventDefault();
    e.stopPropagation(); // Jos: Added to prevent emitting clear directly after select
  }); // Remove tag

  this.label.addEventListener("click", function (e) {
    if (util.hasClass(e.target, "selectr-tag-remove")) {
      that.deselect(e.target.parentNode.idx);
    }
  }); // Clear input

  if (this.selectClear) {
    this.selectClear.addEventListener("click", this.clear.bind(this));
  } // Prevent text selection


  this.tree.addEventListener("mousedown", function (e) {
    e.preventDefault();
  }); // Select / deselect items

  this.tree.addEventListener("click", function (e) {
    e.preventDefault(); // Jos: Added to prevent emitting clear directly after select

    e.stopPropagation(); // Jos: Added to prevent emitting clear directly after select

    var item = util.closest(e.target, function (el) {
      return el && util.hasClass(el, "selectr-option");
    });

    if (item) {
      if (!util.hasClass(item, "disabled")) {
        if (util.hasClass(item, "selected")) {
          if (that.el.multiple || !that.el.multiple && that.config.allowDeselect) {
            that.deselect(item.idx);
          }
        } else {
          that.select(item.idx);
        }

        if (that.opened && !that.el.multiple) {
          that.close();
        }
      }
    }
  }); // Mouseover list items

  this.tree.addEventListener("mouseover", function (e) {
    if (util.hasClass(e.target, "selectr-option")) {
      if (!util.hasClass(e.target, "disabled")) {
        util.removeClass(that.items[that.navIndex], "active");
        util.addClass(e.target, "active");
        that.navIndex = [].slice.call(that.items).indexOf(e.target);
      }
    }
  }); // Searchable

  if (this.config.searchable) {
    // Show / hide the search input clear button
    this.input.addEventListener("focus", function (e) {
      that.searching = true;
    });
    this.input.addEventListener("blur", function (e) {
      that.searching = false;
    });
    this.input.addEventListener("keyup", function (e) {
      that.search();

      if (!that.config.taggable) {
        // Show / hide the search input clear button
        if (this.value.length) {
          util.addClass(this.parentNode, "active");
        } else {
          util.removeClass(this.parentNode, "active");
        }
      }
    }); // Clear the search input

    this.inputClear.addEventListener("click", function (e) {
      that.input.value = null;
      clearSearch.call(that);

      if (!that.tree.childElementCount) {
        render.call(that);
      }
    });
  }

  if (this.config.taggable) {
    this.input.addEventListener("keyup", function (e) {
      that.search();

      if (that.config.taggable && this.value.length) {
        var val = this.value.trim();

        if (e.which === 13 || util.includes(that.tagSeperators, e.key)) {
          util.each(that.tagSeperators, function (i, k) {
            val = val.replace(k, '');
          });
          var option = that.add({
            value: val,
            text: val,
            selected: true
          }, true);

          if (!option) {
            this.value = '';
            that.setMessage('That tag is already in use.');
          } else {
            that.close();
            clearSearch.call(that);
          }
        }
      }
    });
  }

  this.update = util.debounce(function () {
    // Optionally close dropdown on scroll / resize (#11)
    if (that.opened && that.config.closeOnScroll) {
      that.close();
    }

    if (that.width) {
      that.container.style.width = that.width;
    }

    that.invert();
  }, 50);

  if (this.requiresPagination) {
    this.paginateItems = util.debounce(function () {
      load.call(this);
    }, 50);
    this.tree.addEventListener("scroll", this.paginateItems.bind(this));
  } // Dismiss when clicking outside the container


  document.addEventListener("click", this.events.dismiss);
  window.addEventListener("keydown", this.events.navigate);
  window.addEventListener("resize", this.update);
  window.addEventListener("scroll", this.update); // Listen for form.reset() (@ambrooks, #13)

  if (this.el.form) {
    this.el.form.addEventListener("reset", this.events.reset);
  }
};
/**
 * Check for selected options
 * @param {bool} reset
 */


Selectr.prototype.setSelected = function (reset) {
  // Select first option as with a native select-one element - #21, #24
  if (!this.config.data && !this.el.multiple && this.el.options.length) {
    // Browser has selected the first option by default
    if (this.el.selectedIndex === 0) {
      if (!this.el.options[0].defaultSelected && !this.config.defaultSelected) {
        this.el.selectedIndex = -1;
      }
    }

    this.selectedIndex = this.el.selectedIndex;

    if (this.selectedIndex > -1) {
      this.select(this.selectedIndex);
    }
  } // If we're changing a select-one to select-multiple via the config
  // and there are no selected options, the first option will be selected by the browser
  // Let's prevent that here.


  if (this.config.multiple && this.originalType === "select-one" && !this.config.data) {
    if (this.el.options[0].selected && !this.el.options[0].defaultSelected) {
      this.el.options[0].selected = false;
    }
  }

  util.each(this.options, function (i, option) {
    if (option.selected && option.defaultSelected) {
      this.select(option.idx);
    }
  }, this);

  if (this.config.selectedValue) {
    this.setValue(this.config.selectedValue);
  }

  if (this.config.data) {
    if (!this.el.multiple && this.config.defaultSelected && this.el.selectedIndex < 0) {
      this.select(0);
    }

    var j = 0;
    util.each(this.config.data, function (i, opt) {
      // Check for group options
      if (isset(opt, "children")) {
        util.each(opt.children, function (x, item) {
          if (item.hasOwnProperty("selected") && item.selected === true) {
            this.select(j);
          }

          j++;
        }, this);
      } else {
        if (opt.hasOwnProperty("selected") && opt.selected === true) {
          this.select(j);
        }

        j++;
      }
    }, this);
  }
};
/**
 * Destroy the instance
 * @return {void}
 */


Selectr.prototype.destroy = function () {
  if (!this.rendered) return;
  this.emit("selectr.destroy"); // Revert to select-single if programtically set to multiple

  if (this.originalType === 'select-one') {
    this.el.multiple = false;
  }

  if (this.config.data) {
    this.el.innerHTML = "";
  } // Remove the className from select element


  util.removeClass(this.el, 'selectr-hidden'); // Remove reset listener from parent form

  if (this.el.form) {
    util.off(this.el.form, "reset", this.events.reset);
  } // Remove event listeners attached to doc and win


  util.off(document, "click", this.events.dismiss);
  util.off(document, "keydown", this.events.navigate);
  util.off(window, "resize", this.update);
  util.off(window, "scroll", this.update); // Replace the container with the original select element

  this.container.parentNode.replaceChild(this.el, this.container);
  this.rendered = false;
};
/**
 * Change an options state
 * @param  {Number} index
 * @return {void}
 */


Selectr.prototype.change = function (index) {
  var item = this.items[index],
      option = this.options[index];

  if (option.disabled) {
    return;
  }

  if (option.selected && util.hasClass(item, "selected")) {
    this.deselect(index);
  } else {
    this.select(index);
  }

  if (this.opened && !this.el.multiple) {
    this.close();
  }
};
/**
 * Select an option
 * @param  {Number} index
 * @return {void}
 */


Selectr.prototype.select = function (index) {
  var item = this.items[index],
      options = [].slice.call(this.el.options),
      option = this.options[index];

  if (this.el.multiple) {
    if (util.includes(this.selectedIndexes, index)) {
      return false;
    }

    if (this.config.maxSelections && this.tags.length === this.config.maxSelections) {
      this.setMessage("A maximum of " + this.config.maxSelections + " items can be selected.", true);
      return false;
    }

    this.selectedValues.push(option.value);
    this.selectedIndexes.push(index);
    addTag.call(this, item);
  } else {
    var data = this.data ? this.data[index] : option;
    this.label.innerHTML = this.customSelected ? this.config.renderSelection(data) : option.textContent;
    this.selectedValue = option.value;
    this.selectedIndex = index;
    util.each(this.options, function (i, o) {
      var opt = this.items[i];

      if (i !== index) {
        if (opt) {
          util.removeClass(opt, "selected");
        }

        o.selected = false;
        o.removeAttribute("selected");
      }
    }, this);
  }

  if (!util.includes(options, option)) {
    this.el.add(option);
  }

  item.setAttribute("aria-selected", true);
  util.addClass(item, "selected");
  util.addClass(this.container, "has-selected");
  option.selected = true;
  option.setAttribute("selected", "");
  this.emit("selectr.change", option);
  this.emit("selectr.select", option);
};
/**
 * Deselect an option
 * @param  {Number} index
 * @return {void}
 */


Selectr.prototype.deselect = function (index, force) {
  var item = this.items[index],
      option = this.options[index];

  if (this.el.multiple) {
    var selIndex = this.selectedIndexes.indexOf(index);
    this.selectedIndexes.splice(selIndex, 1);
    var valIndex = this.selectedValues.indexOf(option.value);
    this.selectedValues.splice(valIndex, 1);
    removeTag.call(this, item);

    if (!this.tags.length) {
      util.removeClass(this.container, "has-selected");
    }
  } else {
    if (!force && !this.config.clearable && !this.config.allowDeselect) {
      return false;
    }

    this.label.innerHTML = "";
    this.selectedValue = null;
    this.el.selectedIndex = this.selectedIndex = -1;
    util.removeClass(this.container, "has-selected");
  }

  this.items[index].setAttribute("aria-selected", false);
  util.removeClass(this.items[index], "selected");
  option.selected = false;
  option.removeAttribute("selected");
  this.emit("selectr.change", null);
  this.emit("selectr.deselect", option);
};
/**
 * Programmatically set selected values
 * @param {String|Array} value - A string or an array of strings
 */


Selectr.prototype.setValue = function (value) {
  var isArray = Array.isArray(value);

  if (!isArray) {
    value = value.toString().trim();
  } // Can't pass array to select-one


  if (!this.el.multiple && isArray) {
    return false;
  }

  util.each(this.options, function (i, option) {
    if (isArray && util.includes(value.toString(), option.value) || option.value === value) {
      this.change(option.idx);
    }
  }, this);
};
/**
 * Set the selected value(s)
 * @param  {bool} toObject Return only the raw values or an object
 * @param  {bool} toJson   Return the object as a JSON string
 * @return {mixed}         Array or String
 */


Selectr.prototype.getValue = function (toObject, toJson) {
  var value;

  if (this.el.multiple) {
    if (toObject) {
      if (this.selectedIndexes.length) {
        value = {};
        value.values = [];
        util.each(this.selectedIndexes, function (i, index) {
          var option = this.options[index];
          value.values[i] = {
            value: option.value,
            text: option.textContent
          };
        }, this);
      }
    } else {
      value = this.selectedValues.slice();
    }
  } else {
    if (toObject) {
      var option = this.options[this.selectedIndex];
      value = {
        value: option.value,
        text: option.textContent
      };
    } else {
      value = this.selectedValue;
    }
  }

  if (toObject && toJson) {
    value = JSON.stringify(value);
  }

  return value;
};
/**
 * Add a new option or options
 * @param {object} data
 */


Selectr.prototype.add = function (data, checkDuplicate) {
  if (data) {
    this.data = this.data || [];
    this.items = this.items || [];
    this.options = this.options || [];

    if (Array.isArray(data)) {
      // We have an array on items
      util.each(data, function (i, obj) {
        this.add(obj, checkDuplicate);
      }, this);
    } // User passed a single object to the method
    // or Selectr passed an object from an array
    else if ("[object Object]" === Object.prototype.toString.call(data)) {
        if (checkDuplicate) {
          var dupe = false;
          util.each(this.options, function (i, option) {
            if (option.value.toLowerCase() === data.value.toLowerCase()) {
              dupe = true;
            }
          });

          if (dupe) {
            return false;
          }
        }

        var option = util.createElement('option', data);
        this.data.push(data); // Add the new option to the list

        this.options.push(option); // Add the index for later use

        option.idx = this.options.length > 0 ? this.options.length - 1 : 0; // Create a new item

        createItem.call(this, option); // Select the item if required

        if (data.selected) {
          this.select(option.idx);
        }

        return option;
      } // We may have had an empty select so update
    // the placeholder to reflect the changes.


    this.setPlaceholder(); // Recount the pages

    if (this.config.pagination) {
      this.paginate();
    }

    return true;
  }
};
/**
 * Remove an option or options
 * @param  {Mixed} o Array, integer (index) or string (value)
 * @return {Void}
 */


Selectr.prototype.remove = function (o) {
  var options = [];

  if (Array.isArray(o)) {
    util.each(o, function (i, opt) {
      if (util.isInt(opt)) {
        options.push(this.getOptionByIndex(opt));
      } else if (typeof o === "string") {
        options.push(this.getOptionByValue(opt));
      }
    }, this);
  } else if (util.isInt(o)) {
    options.push(this.getOptionByIndex(o));
  } else if (typeof o === "string") {
    options.push(this.getOptionByValue(o));
  }

  if (options.length) {
    var index;
    util.each(options, function (i, option) {
      index = option.idx; // Remove the HTMLOptionElement

      this.el.remove(option); // Remove the reference from the option array

      this.options.splice(index, 1); // If the item has a parentNode (group element) it needs to be removed
      // otherwise the render function will still append it to the dropdown

      var parentNode = this.items[index].parentNode;

      if (parentNode) {
        parentNode.removeChild(this.items[index]);
      } // Remove reference from the items array


      this.items.splice(index, 1); // Reset the indexes

      util.each(this.options, function (i, opt) {
        opt.idx = i;
        this.items[i].idx = i;
      }, this);
    }, this); // We may have had an empty select now so update
    // the placeholder to reflect the changes.

    this.setPlaceholder(); // Recount the pages

    if (this.config.pagination) {
      this.paginate();
    }
  }
};
/**
 * Remove all options
 */


Selectr.prototype.removeAll = function () {
  // Clear any selected options
  this.clear(true); // Remove the HTMLOptionElements

  util.each(this.el.options, function (i, option) {
    this.el.remove(option);
  }, this); // Empty the dropdown

  util.truncate(this.tree); // Reset variables

  this.items = [];
  this.options = [];
  this.data = [];
  this.navIndex = 0;

  if (this.requiresPagination) {
    this.requiresPagination = false;
    this.pageIndex = 1;
    this.pages = [];
  } // Update the placeholder


  this.setPlaceholder();
};
/**
 * Perform a search
 * @param  {string} query The query string
 */


Selectr.prototype.search = function (string) {
  if (this.navigating) return;
  string = string || this.input.value;
  var f = document.createDocumentFragment(); // Remove message

  this.removeMessage(); // Clear the dropdown

  util.truncate(this.tree);

  if (string.length > 1) {
    // Check the options for the matching string
    util.each(this.options, function (i, option) {
      var item = this.items[option.idx];
      var includes = util.includes(option.textContent.toLowerCase(), string.toLowerCase());

      if (includes && !option.disabled) {
        appendItem(item, f, this.customOption);
        util.removeClass(item, "excluded"); // Underline the matching results

        if (!this.customOption) {
          item.innerHTML = match(string, option);
        }
      } else {
        util.addClass(item, "excluded");
      }
    }, this);

    if (!f.childElementCount) {
      if (!this.config.taggable) {
        this.setMessage("no results.");
      }
    } else {
      // Highlight top result (@binary-koan #26)
      var prevEl = this.items[this.navIndex];
      var firstEl = f.firstElementChild;
      util.removeClass(prevEl, "active");
      this.navIndex = firstEl.idx;
      util.addClass(firstEl, "active");
    }
  } else {
    render.call(this);
  }

  this.tree.appendChild(f);
};
/**
 * Toggle the dropdown
 * @return {void}
 */


Selectr.prototype.toggle = function () {
  if (!this.disabled) {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
};
/**
 * Open the dropdown
 * @return {void}
 */


Selectr.prototype.open = function () {
  var that = this;

  if (!this.options.length) {
    return false;
  }

  if (!this.opened) {
    this.emit("selectr.open");
  }

  this.opened = true;

  if (this.mobileDevice || this.config.nativeDropdown) {
    util.addClass(this.container, "native-open");

    if (this.config.data) {
      // Dump the options into the select
      // otherwise the native dropdown will be empty
      util.each(this.options, function (i, option) {
        this.el.add(option);
      }, this);
    }

    return;
  }

  util.addClass(this.container, "open");
  render.call(this);
  this.invert();
  this.tree.scrollTop = 0;
  util.removeClass(this.container, "notice");
  this.selected.setAttribute("aria-expanded", true);
  this.tree.setAttribute("aria-hidden", false);
  this.tree.setAttribute("aria-expanded", true);

  if (this.config.searchable && !this.config.taggable) {
    setTimeout(function () {
      that.input.focus(); // Allow tab focus

      that.input.tabIndex = 0;
    }, 10);
  }
};
/**
 * Close the dropdown
 * @return {void}
 */


Selectr.prototype.close = function () {
  if (this.opened) {
    this.emit("selectr.close");
  }

  this.opened = false;

  if (this.mobileDevice || this.config.nativeDropdown) {
    util.removeClass(this.container, "native-open");
    return;
  }

  var notice = util.hasClass(this.container, "notice");

  if (this.config.searchable && !notice) {
    this.input.blur(); // Disable tab focus

    this.input.tabIndex = -1;
    this.searching = false;
  }

  if (notice) {
    util.removeClass(this.container, "notice");
    this.notice.textContent = "";
  }

  util.removeClass(this.container, "open");
  util.removeClass(this.container, "native-open");
  this.selected.setAttribute("aria-expanded", false);
  this.tree.setAttribute("aria-hidden", true);
  this.tree.setAttribute("aria-expanded", false);
  util.truncate(this.tree);
  clearSearch.call(this);
};
/**
 * Enable the element
 * @return {void}
 */


Selectr.prototype.enable = function () {
  this.disabled = false;
  this.el.disabled = false;
  this.selected.tabIndex = this.originalIndex;

  if (this.el.multiple) {
    util.each(this.tags, function (i, t) {
      t.lastElementChild.tabIndex = 0;
    });
  }

  util.removeClass(this.container, "selectr-disabled");
};
/**
 * Disable the element
 * @param  {boolean} container Disable the container only (allow value submit with form)
 * @return {void}
 */


Selectr.prototype.disable = function (container) {
  if (!container) {
    this.el.disabled = true;
  }

  this.selected.tabIndex = -1;

  if (this.el.multiple) {
    util.each(this.tags, function (i, t) {
      t.lastElementChild.tabIndex = -1;
    });
  }

  this.disabled = true;
  util.addClass(this.container, "selectr-disabled");
};
/**
 * Reset to initial state
 * @return {void}
 */


Selectr.prototype.reset = function () {
  if (!this.disabled) {
    this.clear();
    this.setSelected(true);
    util.each(this.defaultSelected, function (i, idx) {
      this.select(idx);
    }, this);
    this.emit("selectr.reset");
  }
};
/**
 * Clear all selections
 * @return {void}
 */


Selectr.prototype.clear = function (force) {
  if (this.el.multiple) {
    // Loop over the selectedIndexes so we don't have to loop over all the options
    // which can be costly if there are a lot of them
    if (this.selectedIndexes.length) {
      // Copy the array or we'll get an error
      var indexes = this.selectedIndexes.slice();
      util.each(indexes, function (i, idx) {
        this.deselect(idx);
      }, this);
    }
  } else {
    if (this.selectedIndex > -1) {
      this.deselect(this.selectedIndex, force);
    }
  }

  this.emit("selectr.clear");
};
/**
 * Return serialised data
 * @param  {boolean} toJson
 * @return {mixed} Returns either an object or JSON string
 */


Selectr.prototype.serialise = function (toJson) {
  var data = [];
  util.each(this.options, function (i, option) {
    var obj = {
      value: option.value,
      text: option.textContent
    };

    if (option.selected) {
      obj.selected = true;
    }

    if (option.disabled) {
      obj.disabled = true;
    }

    data[i] = obj;
  });
  return toJson ? JSON.stringify(data) : data;
};
/**
 * Localised version of serialise() method
 */


Selectr.prototype.serialize = function (toJson) {
  return this.serialise(toJson);
};
/**
 * Sets the placeholder
 * @param {String} placeholder
 */


Selectr.prototype.setPlaceholder = function (placeholder) {
  // Set the placeholder
  placeholder = placeholder || this.config.placeholder || this.el.getAttribute("placeholder");

  if (!this.options.length) {
    placeholder = "No options available";
  }

  this.placeEl.innerHTML = placeholder;
};
/**
 * Paginate the option list
 * @return {Array}
 */


Selectr.prototype.paginate = function () {
  if (this.items.length) {
    var that = this;
    this.pages = this.items.map(function (v, i) {
      return i % that.config.pagination === 0 ? that.items.slice(i, i + that.config.pagination) : null;
    }).filter(function (pages) {
      return pages;
    });
    return this.pages;
  }
};
/**
 * Display a message
 * @param  {String} message The message
 */


Selectr.prototype.setMessage = function (message, close) {
  if (close) {
    this.close();
  }

  util.addClass(this.container, "notice");
  this.notice.textContent = message;
};
/**
 * Dismiss the current message
 */


Selectr.prototype.removeMessage = function () {
  util.removeClass(this.container, "notice");
  this.notice.innerHTML = "";
};
/**
 * Keep the dropdown within the window
 * @return {void}
 */


Selectr.prototype.invert = function () {
  var rt = util.rect(this.selected),
      oh = this.tree.parentNode.offsetHeight,
      wh = window.innerHeight,
      doInvert = rt.top + rt.height + oh > wh;

  if (doInvert) {
    util.addClass(this.container, "inverted");
    this.isInverted = true;
  } else {
    util.removeClass(this.container, "inverted");
    this.isInverted = false;
  }

  this.optsRect = util.rect(this.tree);
};
/**
 * Get an option via it's index
 * @param  {Integer} index The index of the HTMLOptionElement required
 * @return {HTMLOptionElement}
 */


Selectr.prototype.getOptionByIndex = function (index) {
  return this.options[index];
};
/**
 * Get an option via it's value
 * @param  {String} value The value of the HTMLOptionElement required
 * @return {HTMLOptionElement}
 */


Selectr.prototype.getOptionByValue = function (value) {
  var option = false;

  for (var i = 0, l = this.options.length; i < l; i++) {
    if (this.options[i].value.trim() === value.toString().trim()) {
      option = this.options[i];
      break;
    }
  }

  return option;
};

module.exports = Selectr;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
 * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
 */
/*jshint unused:false */
module.exports = function naturalSort (a, b) {
	var re = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
		sre = /(^[ ]*|[ ]*$)/g,
		dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
		hre = /^0x[0-9a-f]+$/i,
		ore = /^0/,
		i = function(s) { return naturalSort.insensitive && ('' + s).toLowerCase() || '' + s; },
		// convert all to strings strip whitespace
		x = i(a).replace(sre, '') || '',
		y = i(b).replace(sre, '') || '',
		// chunk/tokenize
		xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
		yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
		// numeric, hex or date detection
		xD = parseInt(x.match(hre), 16) || (xN.length !== 1 && x.match(dre) && Date.parse(x)),
		yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null,
		oFxNcL, oFyNcL;
	// first try and sort Hex codes or Dates
	if (yD) {
		if ( xD < yD ) { return -1; }
		else if ( xD > yD ) { return 1; }
	}
	// natural sorting through split numeric strings and default strings
	for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
		// find floats not starting with '0', string or 0 if not defined (Clint Priest)
		oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
		oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
		// handle numeric vs string comparison - number < string - (Kyle Adams)
		if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
		// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
		else if (typeof oFxNcL !== typeof oFyNcL) {
			oFxNcL += '';
			oFyNcL += '';
		}
		if (oFxNcL < oFyNcL) { return -1; }
		if (oFxNcL > oFyNcL) { return 1; }
	}
	return 0;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAbsoluteAnchor; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Create an anchor element absolutely positioned in the `parent`
 * element.
 * @param {HTMLElement} anchor
 * @param {HTMLElement} parent
 * @param {function(HTMLElement)} [onDestroy]  Callback when the anchor is destroyed
 * @param {boolean} [destroyOnMouseOut=false] If true, anchor will be removed on mouse out
 * @returns {HTMLElement}
 */

function createAbsoluteAnchor(anchor, parent, onDestroy) {
  var destroyOnMouseOut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var root = getRootNode(anchor);
  var eventListeners = {};
  var anchorRect = anchor.getBoundingClientRect();
  var frameRect = parent.getBoundingClientRect();
  var absoluteAnchor = document.createElement('div');
  absoluteAnchor.className = 'jsoneditor-anchor';
  absoluteAnchor.style.position = 'absolute';
  absoluteAnchor.style.left = anchorRect.left - frameRect.left + 'px';
  absoluteAnchor.style.top = anchorRect.top - frameRect.top + 'px';
  absoluteAnchor.style.width = anchorRect.width - 2 + 'px';
  absoluteAnchor.style.height = anchorRect.height - 2 + 'px';
  absoluteAnchor.style.boxSizing = 'border-box';
  parent.appendChild(absoluteAnchor);

  function destroy() {
    // remove temporary absolutely positioned anchor
    if (absoluteAnchor && absoluteAnchor.parentNode) {
      absoluteAnchor.parentNode.removeChild(absoluteAnchor); // remove all event listeners
      // all event listeners are supposed to be attached to document.

      for (var name in eventListeners) {
        if (hasOwnProperty(eventListeners, name)) {
          var fn = eventListeners[name];

          if (fn) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeEventListener"])(root, name, fn);
          }

          delete eventListeners[name];
        }
      }

      if (typeof onDestroy === 'function') {
        onDestroy(anchor);
      }
    }
  }

  function isOutside(target) {
    return target !== absoluteAnchor && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isChildOf"])(target, absoluteAnchor);
  } // create and attach event listeners


  function destroyIfOutside(event) {
    if (isOutside(event.target)) {
      destroy();
    }
  }

  eventListeners.mousedown = Object(_util__WEBPACK_IMPORTED_MODULE_0__["addEventListener"])(root, 'mousedown', destroyIfOutside);
  eventListeners.mousewheel = Object(_util__WEBPACK_IMPORTED_MODULE_0__["addEventListener"])(root, 'mousewheel', destroyIfOutside);

  if (destroyOnMouseOut) {
    var destroyTimer = null;

    absoluteAnchor.onmouseover = function () {
      clearTimeout(destroyTimer);
      destroyTimer = null;
    };

    absoluteAnchor.onmouseout = function () {
      if (!destroyTimer) {
        destroyTimer = setTimeout(destroy, 200);
      }
    };
  }

  absoluteAnchor.destroy = destroy;
  return absoluteAnchor;
}
/**
 * Node.getRootNode shim
 * @param  {HTMLElement} node node to check
 * @return {HTMLElement}      node's rootNode or `window` if there is ShadowDOM is not supported.
 */

function getRootNode(node) {
  return typeof node.getRootNode === 'function' ? node.getRootNode() : window;
}

function hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var VanillaPicker;

if (window.Picker) {
  // use the already loaded instance of VanillaPicker
  VanillaPicker = window.Picker;
} else {
  try {
    // load color picker
    VanillaPicker = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'vanilla-picker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  } catch (err) {// probably running the minimalist bundle
  }
}

module.exports = VanillaPicker;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function (root, factory) {

    {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}(this, function () {

    /** Returns whether a value is a dom node */
    function isNode(value) {
        if ( typeof Node === "object" ) {
            return value instanceof Node;
        }
        else {
            return value && typeof value === "object" && typeof value.nodeType === "number";
        }
    }

    /** Returns whether a value is a string */
    function isString(value) {
        return typeof value === "string";
    }

    /**
     * Generates observable objects that can be watched and triggered
     */
    function observable() {
        var callbacks = [];
        return {
            watch: callbacks.push.bind(callbacks),
            trigger: function(context, detail) {

                var unprevented = true;
                var event = {
                    detail: detail,
                    preventDefault: function preventDefault () {
                        unprevented = false;
                    }
                };

                for (var i = 0; i < callbacks.length; i++) {
                    callbacks[i](context, event);
                }

                return unprevented;
            }
        };
    }


    /** Whether an element is hidden */
    function isHidden ( elem ) {
        // @see http://stackoverflow.com/questions/19669786
        return window.getComputedStyle(elem).display === 'none';
    }


    /**
     * A small interface for creating and managing a dom element
     */
    function Elem( elem ) {
        this.elem = elem;
    }

    /** Creates a new div */
    Elem.make = function ( parent, tag ) {
        if ( typeof parent === "string" ) {
            parent = document.querySelector(parent);
        }
        var elem = document.createElement(tag || 'div');
        (parent || document.body).appendChild(elem);
        return new Elem(elem);
    };

    Elem.prototype = {

        /** Creates a child of this node */
        child: function (tag) {
            return Elem.make(this.elem, tag);
        },

        /** Applies a set of styles to an element */
        stylize: function(styles) {
            styles = styles || {};

            if ( typeof styles.opacity !== "undefined" ) {
                styles.filter = "alpha(opacity=" + (styles.opacity * 100) + ")";
            }

            for (var prop in styles) {
                if (styles.hasOwnProperty(prop)) {
                    this.elem.style[prop] = styles[prop];
                }
            }

            return this;
        },

        /** Adds a class name */
        clazz: function (clazz) {
            this.elem.className += " " + clazz;
            return this;
        },

        /** Sets the HTML */
        html: function (content) {
            if ( isNode(content) ) {
                this.elem.appendChild( content );
            }
            else {
                this.elem.innerHTML = content;
            }
            return this;
        },

        /** Adds a click handler to this element */
        onClick: function(callback) {
            this.elem.addEventListener('click', callback);
            return this;
        },

        /** Removes this element from the DOM */
        destroy: function() {
            this.elem.parentNode.removeChild(this.elem);
        },

        /** Hides this element */
        hide: function() {
            this.elem.style.display = "none";
        },

        /** Shows this element */
        show: function() {
            this.elem.style.display = "block";
        },

        /** Sets an attribute on this element */
        attr: function ( name, value ) {
            if (value !== undefined) {
                this.elem.setAttribute(name, value);
            }
            return this;
        },

        /** Executes a callback on all the ancestors of an element */
        anyAncestor: function ( predicate ) {
            var elem = this.elem;
            while ( elem ) {
                if ( predicate( new Elem(elem) ) ) {
                    return true;
                }
                else {
                    elem = elem.parentNode;
                }
            }
            return false;
        },

        /** Whether this element is visible */
        isVisible: function () {
            return !isHidden(this.elem);
        }
    };


    /** Generates the grey-out effect */
    function buildOverlay( getOption, close ) {
        return Elem.make( getOption("parent") )
            .clazz("pico-overlay")
            .clazz( getOption("overlayClass", "") )
            .stylize({
                display: "none",
                position: "fixed",
                top: "0px",
                left: "0px",
                height: "100%",
                width: "100%",
                zIndex: 10000
            })
            .stylize(getOption('overlayStyles', {
                opacity: 0.5,
                background: "#000"
            }))
            .onClick(function () {
                if ( getOption('overlayClose', true) ) {
                    close();
                }
            });
    }

    // An auto incrementing ID assigned to each modal
    var autoinc = 1;

    /** Builds the content of a modal */
    function buildModal( getOption, close ) {
        var width = getOption('width', 'auto');
        if ( typeof width === "number" ) {
            width = "" + width + "px";
        }

        var id = getOption("modalId", "pico-" + autoinc++);

        var elem = Elem.make( getOption("parent") )
            .clazz("pico-content")
            .clazz( getOption("modalClass", "") )
            .stylize({
                display: 'none',
                position: 'fixed',
                zIndex: 10001,
                left: "50%",
                top: "38.1966%",
                maxHeight: '90%',
                boxSizing: 'border-box',
                width: width,
                '-ms-transform': 'translate(-50%,-38.1966%)',
                '-moz-transform': 'translate(-50%,-38.1966%)',
                '-webkit-transform': 'translate(-50%,-38.1966%)',
                '-o-transform': 'translate(-50%,-38.1966%)',
                transform: 'translate(-50%,-38.1966%)'
            })
            .stylize(getOption('modalStyles', {
                overflow: 'auto',
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px"
            }))
            .html( getOption('content') )
            .attr("id", id)
            .attr("role", "dialog")
            .attr("aria-labelledby", getOption("ariaLabelledBy"))
            .attr("aria-describedby", getOption("ariaDescribedBy", id))
            .onClick(function (event) {
                var isCloseClick = new Elem(event.target).anyAncestor(function (elem) {
                    return /\bpico-close\b/.test(elem.elem.className);
                });
                if ( isCloseClick ) {
                    close();
                }
            });

        return elem;
    }

    /** Builds the close button */
    function buildClose ( elem, getOption ) {
        if ( getOption('closeButton', true) ) {
            return elem.child('button')
                .html( getOption('closeHtml', "&#xD7;") )
                .clazz("pico-close")
                .clazz( getOption("closeClass", "") )
                .stylize( getOption('closeStyles', {
                    borderRadius: "2px",
                    border: 0,
                    padding: 0,
                    cursor: "pointer",
                    height: "15px",
                    width: "15px",
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    fontSize: "16px",
                    textAlign: "center",
                    lineHeight: "15px",
                    background: "#CCC"
                }) )
                .attr("aria-label", getOption("close-label", "Close"));
        }
    }

    /** Builds a method that calls a method and returns an element */
    function buildElemAccessor( builder ) {
        return function () {
            return builder().elem;
        };
    }


    // An observable that is triggered whenever the escape key is pressed
    var escapeKey = observable();

    // An observable that is triggered when the user hits the tab key
    var tabKey = observable();

    /** A global event handler to detect the escape key being pressed */
    document.documentElement.addEventListener('keydown', function onKeyPress (event) {
        var keycode = event.which || event.keyCode;

        // If this is the escape key
        if ( keycode === 27 ) {
            escapeKey.trigger();
        }

        // If this is the tab key
        else if ( keycode === 9 ) {
            tabKey.trigger(event);
        }
    });


    /** Attaches focus management events */
    function manageFocus ( iface, isEnabled ) {

        /** Whether an element matches a selector */
        function matches ( elem, selector ) {
            var fn = elem.msMatchesSelector || elem.webkitMatchesSelector || elem.matches;
            return fn.call(elem, selector);
        }

        /**
         * Returns whether an element is focusable
         * @see http://stackoverflow.com/questions/18261595
         */
        function canFocus( elem ) {
            if (
                isHidden(elem) ||
                matches(elem, ":disabled") ||
                elem.hasAttribute("contenteditable")
            ) {
                return false;
            }
            else {
                return elem.hasAttribute("tabindex") ||
                    matches(elem, "input,select,textarea,button,a[href],area[href],iframe");
            }
        }

        /** Returns the first descendant that can be focused */
        function firstFocusable ( elem ) {
            var items = elem.getElementsByTagName("*");
            for (var i = 0; i < items.length; i++) {
                if ( canFocus(items[i]) ) {
                    return items[i];
                }
            }
        }

        /** Returns the last descendant that can be focused */
        function lastFocusable ( elem ) {
            var items = elem.getElementsByTagName("*");
            for (var i = items.length; i--;) {
                if ( canFocus(items[i]) ) {
                    return items[i];
                }
            }
        }

        // The element focused before the modal opens
        var focused;

        // Records the currently focused element so state can be returned
        // after the modal closes
        iface.beforeShow(function getActiveFocus() {
            focused = document.activeElement;
        });

        // Shift focus into the modal
        iface.afterShow(function focusModal() {
            if ( isEnabled() ) {
                var focusable = firstFocusable(iface.modalElem());
                if ( focusable ) {
                    focusable.focus();
                }
            }
        });

        // Restore the previously focused element when the modal closes
        iface.afterClose(function returnFocus() {
            if ( isEnabled() && focused ) {
                focused.focus();
            }
            focused = null;
        });

        // Capture tab key presses and loop them within the modal
        tabKey.watch(function tabKeyPress (event) {
            if ( isEnabled() && iface.isVisible() ) {
                var first = firstFocusable(iface.modalElem());
                var last = lastFocusable(iface.modalElem());

                var from = event.shiftKey ? first : last;
                if ( from === document.activeElement ) {
                    (event.shiftKey ? last : first).focus();
                    event.preventDefault();
                }
            }
        });
    }

    /** Manages setting the 'overflow: hidden' on the body tag */
    function manageBodyOverflow(iface, isEnabled) {
        var origOverflow;
        var body = new Elem(document.body);

        iface.beforeShow(function () {
            // Capture the current values so they can be restored
            origOverflow = body.elem.style.overflow;

            if (isEnabled()) {
                body.stylize({ overflow: "hidden" });
            }
        });

        iface.afterClose(function () {
            body.stylize({ overflow: origOverflow });
        });
    }

    /**
     * Displays a modal
     */
    return function picoModal(options) {

        if ( isString(options) || isNode(options) ) {
            options = { content: options };
        }

        var afterCreateEvent = observable();
        var beforeShowEvent = observable();
        var afterShowEvent = observable();
        var beforeCloseEvent = observable();
        var afterCloseEvent = observable();

        /**
         * Returns a named option if it has been explicitly defined. Otherwise,
         * it returns the given default value
         */
        function getOption ( opt, defaultValue ) {
            var value = options[opt];
            if ( typeof value === "function" ) {
                value = value( defaultValue );
            }
            return value === undefined ? defaultValue : value;
        }


        // The various DOM elements that constitute the modal
        var modalElem = build.bind(window, 'modal');
        var shadowElem = build.bind(window, 'overlay');
        var closeElem = build.bind(window, 'close');

        // This will eventually contain the modal API returned to the user
        var iface;


        /** Hides this modal */
        function forceClose (detail) {
            shadowElem().hide();
            modalElem().hide();
            afterCloseEvent.trigger(iface, detail);
        }

        /** Gracefully hides this modal */
        function close (detail) {
            if ( beforeCloseEvent.trigger(iface, detail) ) {
                forceClose(detail);
            }
        }

        /** Wraps a method so it returns the modal interface */
        function returnIface ( callback ) {
            return function () {
                callback.apply(this, arguments);
                return iface;
            };
        }


        // The constructed dom nodes
        var built;

        /** Builds a method that calls a method and returns an element */
        function build (name, detail) {
            if ( !built ) {
                var modal = buildModal(getOption, close);
                built = {
                    modal: modal,
                    overlay: buildOverlay(getOption, close),
                    close: buildClose(modal, getOption)
                };
                afterCreateEvent.trigger(iface, detail);
            }
            return built[name];
        }

        iface = {

            /** Returns the wrapping modal element */
            modalElem: buildElemAccessor(modalElem),

            /** Returns the close button element */
            closeElem: buildElemAccessor(closeElem),

            /** Returns the overlay element */
            overlayElem: buildElemAccessor(shadowElem),

            /** Builds the dom without showing the modal */
            buildDom: returnIface(build.bind(null, null)),

            /** Returns whether this modal is currently being shown */
            isVisible: function () {
                return !!(built && modalElem && modalElem().isVisible());
            },

            /** Shows this modal */
            show: function (detail) {
                if ( beforeShowEvent.trigger(iface, detail) ) {
                    shadowElem().show();
                    closeElem();
                    modalElem().show();
                    afterShowEvent.trigger(iface, detail);
                }
                return this;
            },

            /** Hides this modal */
            close: returnIface(close),

            /**
             * Force closes this modal. This will not call beforeClose
             * events and will just immediately hide the modal
             */
            forceClose: returnIface(forceClose),

            /** Destroys this modal */
            destroy: function () {
                modalElem().destroy();
                shadowElem().destroy();
                shadowElem = modalElem = closeElem = undefined;
            },

            /**
             * Updates the options for this modal. This will only let you
             * change options that are re-evaluted regularly, such as
             * `overlayClose`.
             */
            options: function ( opts ) {
                Object.keys(opts).map(function (key) {
                    options[key] = opts[key];
                });
            },

            /** Executes after the DOM nodes are created */
            afterCreate: returnIface(afterCreateEvent.watch),

            /** Executes a callback before this modal is closed */
            beforeShow: returnIface(beforeShowEvent.watch),

            /** Executes a callback after this modal is shown */
            afterShow: returnIface(afterShowEvent.watch),

            /** Executes a callback before this modal is closed */
            beforeClose: returnIface(beforeCloseEvent.watch),

            /** Executes a callback after this modal is closed */
            afterClose: returnIface(afterCloseEvent.watch)
        };

        manageFocus(iface, getOption.bind(null, "focus", true));

        manageBodyOverflow(iface, getOption.bind(null, "bodyOverflow", true));

        // If a user presses the 'escape' key, close the modal.
        escapeKey.watch(function escapeKeyPress () {
            if ( getOption("escCloses", true) && iface.isVisible() ) {
                iface.close();
            }
        });

        return iface;
    };

}));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorTable; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Show errors and schema warnings in a clickable table view
 * @param {Object} config
 * @property {boolean} errorTableVisible
 * @property {function (boolean) : void} onToggleVisibility
 * @property {function (number)} [onFocusLine]
 * @property {function (number)} onChangeHeight
 * @constructor
 */
var ErrorTable =
/*#__PURE__*/
function () {
  function ErrorTable(config) {
    _classCallCheck(this, ErrorTable);

    this.errorTableVisible = config.errorTableVisible;
    this.onToggleVisibility = config.onToggleVisibility;

    this.onFocusLine = config.onFocusLine || function () {};

    this.onChangeHeight = config.onChangeHeight;
    this.dom = {};
    var validationErrorsContainer = document.createElement('div');
    validationErrorsContainer.className = 'jsoneditor-validation-errors-container';
    this.dom.validationErrorsContainer = validationErrorsContainer;
    var additionalErrorsIndication = document.createElement('div');
    additionalErrorsIndication.style.display = 'none';
    additionalErrorsIndication.className = 'jsoneditor-additional-errors fadein';
    additionalErrorsIndication.innerHTML = 'Scroll for more &#9663;';
    this.dom.additionalErrorsIndication = additionalErrorsIndication;
    validationErrorsContainer.appendChild(additionalErrorsIndication);
    var validationErrorIcon = document.createElement('span');
    validationErrorIcon.className = 'jsoneditor-validation-error-icon';
    validationErrorIcon.style.display = 'none';
    this.dom.validationErrorIcon = validationErrorIcon;
    var validationErrorCount = document.createElement('span');
    validationErrorCount.className = 'jsoneditor-validation-error-count';
    validationErrorCount.style.display = 'none';
    this.dom.validationErrorCount = validationErrorCount;
    this.dom.parseErrorIndication = document.createElement('span');
    this.dom.parseErrorIndication.className = 'jsoneditor-parse-error-icon';
    this.dom.parseErrorIndication.style.display = 'none';
  }

  _createClass(ErrorTable, [{
    key: "getErrorTable",
    value: function getErrorTable() {
      return this.dom.validationErrorsContainer;
    }
  }, {
    key: "getErrorCounter",
    value: function getErrorCounter() {
      return this.dom.validationErrorCount;
    }
  }, {
    key: "getWarningIcon",
    value: function getWarningIcon() {
      return this.dom.validationErrorIcon;
    }
  }, {
    key: "getErrorIcon",
    value: function getErrorIcon() {
      return this.dom.parseErrorIndication;
    }
  }, {
    key: "toggleTableVisibility",
    value: function toggleTableVisibility() {
      this.errorTableVisible = !this.errorTableVisible;
      this.onToggleVisibility(this.errorTableVisible);
    }
  }, {
    key: "setErrors",
    value: function setErrors(errors, errorLocations) {
      var _this = this;

      // clear any previous errors
      if (this.dom.validationErrors) {
        this.dom.validationErrors.parentNode.removeChild(this.dom.validationErrors);
        this.dom.validationErrors = null;
        this.dom.additionalErrorsIndication.style.display = 'none';
      } // create the table with errors
      // keep default behavior for parse errors


      if (this.errorTableVisible && errors.length > 0) {
        var validationErrors = document.createElement('div');
        validationErrors.className = 'jsoneditor-validation-errors';
        validationErrors.innerHTML = '<table class="jsoneditor-text-errors"><tbody></tbody></table>';
        var tbody = validationErrors.getElementsByTagName('tbody')[0];
        errors.forEach(function (error) {
          var message;

          if (typeof error === 'string') {
            message = '<td colspan="2"><pre>' + error + '</pre></td>';
          } else {
            message = '<td>' + (error.dataPath || '') + '</td>' + '<td><pre>' + error.message + '</pre></td>';
          }

          var line;

          if (!isNaN(error.line)) {
            line = error.line;
          } else if (error.dataPath) {
            var errLoc = errorLocations.find(function (loc) {
              return loc.path === error.dataPath;
            });

            if (errLoc) {
              line = errLoc.line + 1;
            }
          }

          var trEl = document.createElement('tr');
          trEl.className = !isNaN(line) ? 'jump-to-line' : '';

          if (error.type === 'error') {
            trEl.className += ' parse-error';
          } else {
            trEl.className += ' validation-error';
          }

          trEl.innerHTML = '<td><button class="jsoneditor-schema-error"></button></td><td style="white-space:nowrap;">' + (!isNaN(line) ? 'Ln ' + line : '') + '</td>' + message;

          trEl.onclick = function () {
            _this.onFocusLine(line);
          };

          tbody.appendChild(trEl);
        });
        this.dom.validationErrors = validationErrors;
        this.dom.validationErrorsContainer.appendChild(validationErrors);
        this.dom.additionalErrorsIndication.title = errors.length + ' errors total';

        if (this.dom.validationErrorsContainer.clientHeight < this.dom.validationErrorsContainer.scrollHeight) {
          this.dom.additionalErrorsIndication.style.display = 'block';

          this.dom.validationErrorsContainer.onscroll = function () {
            _this.dom.additionalErrorsIndication.style.display = _this.dom.validationErrorsContainer.clientHeight > 0 && _this.dom.validationErrorsContainer.scrollTop === 0 ? 'block' : 'none';
          };
        } else {
          this.dom.validationErrorsContainer.onscroll = undefined;
        }

        var height = this.dom.validationErrorsContainer.clientHeight + (this.dom.statusBar ? this.dom.statusBar.clientHeight : 0); // this.content.style.marginBottom = (-height) + 'px';
        // this.content.style.paddingBottom = height + 'px';

        this.onChangeHeight(height);
      } else {
        this.onChangeHeight(0);
      } // update the status bar


      var validationErrorsCount = errors.filter(function (error) {
        return error.type !== 'error';
      }).length;

      if (validationErrorsCount > 0) {
        this.dom.validationErrorCount.style.display = 'inline';
        this.dom.validationErrorCount.innerText = validationErrorsCount;
        this.dom.validationErrorCount.onclick = this.toggleTableVisibility.bind(this);
        this.dom.validationErrorIcon.style.display = 'inline';
        this.dom.validationErrorIcon.title = validationErrorsCount + ' schema validation error(s) found';
        this.dom.validationErrorIcon.onclick = this.toggleTableVisibility.bind(this);
      } else {
        this.dom.validationErrorCount.style.display = 'none';
        this.dom.validationErrorIcon.style.display = 'none';
      } // update the parse error icon


      var hasParseErrors = errors.some(function (error) {
        return error.type === 'error';
      });

      if (hasParseErrors) {
        var line = errors[0].line;
        this.dom.parseErrorIndication.style.display = 'block';
        this.dom.parseErrorIndication.title = !isNaN(line) ? 'parse error on line ' + line : 'parse error - check that the json is valid';
      } else {
        this.dom.parseErrorIndication.style.display = 'none';
      }
    }
  }]);

  return ErrorTable;
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var ace;

if (window.ace) {
  // use the already loaded instance of Ace
  ace = window.ace;
} else {
  try {
    // load Ace editor
    ace = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'ace-builds/src-noconflict/ace'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // load required Ace plugins

    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'ace-builds/src-noconflict/mode-json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'ace-builds/src-noconflict/ext-searchbox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // embed Ace json worker
    // https://github.com/ajaxorg/ace/issues/3913


    var jsonWorkerDataUrl = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../generated/worker-json-data-url'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

    ace.config.setModuleUrl('ace/mode/json_worker', jsonWorkerDataUrl);
  } catch (err) {// failed to load Ace (can be minimalist bundle).
    // No worries, the editor will fall back to plain text if needed.
  }
}

module.exports = ace;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/js/ace/index.js
var ace = __webpack_require__(14);
var ace_default = /*#__PURE__*/__webpack_require__.n(ace);

// EXTERNAL MODULE: ./node_modules/jmespath/jmespath.js
var jmespath = __webpack_require__(4);
var jmespath_default = /*#__PURE__*/__webpack_require__.n(jmespath);

// EXTERNAL MODULE: ./src/js/i18n.js
var i18n = __webpack_require__(1);

// EXTERNAL MODULE: ./src/js/ModeSwitcher.js
var ModeSwitcher = __webpack_require__(6);

// EXTERNAL MODULE: ./src/js/ErrorTable.js
var ErrorTable = __webpack_require__(13);

// EXTERNAL MODULE: ./src/js/util.js
var util = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/validationUtils.js

/**
 * Execute custom validation if configured.
 *
 * Returns a promise resolving with the custom errors (or an empty array).
 */

function validateCustom(json, onValidate) {
  if (!onValidate) {
    return Promise.resolve([]);
  }

  try {
    var customValidateResults = onValidate(json);
    var resultPromise = Object(util["isPromise"])(customValidateResults) ? customValidateResults : Promise.resolve(customValidateResults);
    return resultPromise.then(function (customValidationPathErrors) {
      if (Array.isArray(customValidationPathErrors)) {
        return customValidationPathErrors.filter(function (error) {
          var valid = Object(util["isValidValidationError"])(error);

          if (!valid) {
            console.warn('Ignoring a custom validation error with invalid structure. ' + 'Expected structure: {path: [...], message: "..."}. ' + 'Actual error:', error);
          }

          return valid;
        }).map(function (error) {
          return (// change data structure into the structure matching the JSON schema errors
            {
              dataPath: Object(util["stringifyPath"])(error.path),
              message: error.message
            }
          );
        });
      } else {
        return [];
      }
    });
  } catch (err) {
    return Promise.reject(err);
  }
}
// EXTERNAL MODULE: ./src/js/showSortModal.js
var showSortModal = __webpack_require__(5);

// EXTERNAL MODULE: ./src/js/showTransformModal.js + 1 modules
var showTransformModal = __webpack_require__(7);

// EXTERNAL MODULE: ./src/js/constants.js
var constants = __webpack_require__(2);

// EXTERNAL MODULE: ./src/js/tryRequireThemeJsonEditor.js
var tryRequireThemeJsonEditor = __webpack_require__(19);

// CONCATENATED MODULE: ./src/js/textmode.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textModeMixins", function() { return textModeMixins; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











 // create a mixin with the functions for text mode

var textmode = {};
var DEFAULT_THEME = 'ace/theme/jsoneditor';
/**
 * Create a text editor
 * @param {Element} container
 * @param {Object} [options]   Object with options. See docs for details.
 * @private
 */

textmode.create = function (container) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options.statusBar === 'undefined') {
    options.statusBar = true;
  } // setting default for textmode


  options.mainMenuBar = options.mainMenuBar !== false;
  options.enableSort = options.enableSort !== false;
  options.enableTransform = options.enableTransform !== false;
  this.options = options; // indentation

  if (options.indentation) {
    this.indentation = Number(options.indentation);
  } else {
    this.indentation = 2; // number of spaces
  } // grab ace from options if provided


  var _ace = options.ace ? options.ace : ace_default.a; // TODO: make the option options.ace deprecated, it's not needed anymore (see #309)
  // determine mode


  this.mode = options.mode === 'code' ? 'code' : 'text';

  if (this.mode === 'code') {
    // verify whether Ace editor is available and supported
    if (typeof _ace === 'undefined') {
      this.mode = 'text';
      console.warn('Failed to load Ace editor, falling back to plain text mode. Please use a JSONEditor bundle including Ace, or pass Ace as via the configuration option `ace`.');
    }
  } // determine theme


  this.theme = options.theme || DEFAULT_THEME;

  if (this.theme === DEFAULT_THEME && _ace) {
    Object(tryRequireThemeJsonEditor["tryRequireThemeJsonEditor"])();
  }

  if (options.onTextSelectionChange) {
    this.onTextSelectionChange(options.onTextSelectionChange);
  }

  var me = this;
  this.container = container;
  this.dom = {};
  this.aceEditor = undefined; // ace code editor

  this.textarea = undefined; // plain text editor (fallback when Ace is not available)

  this.validateSchema = null;
  this.annotations = []; // create a debounced validate function

  this._debouncedValidate = Object(util["debounce"])(this.validate.bind(this), this.DEBOUNCE_INTERVAL);
  this.width = container.clientWidth;
  this.height = container.clientHeight;
  this.frame = document.createElement('div');
  this.frame.className = 'jsoneditor jsoneditor-mode-' + this.options.mode;

  this.frame.onclick = function (event) {
    // prevent default submit action when the editor is located inside a form
    event.preventDefault();
  };

  this.frame.onkeydown = function (event) {
    me._onKeyDown(event);
  };

  this.content = document.createElement('div');
  this.content.className = 'jsoneditor-outer';

  if (this.options.mainMenuBar) {
    Object(util["addClassName"])(this.content, 'has-main-menu-bar'); // create menu

    this.menu = document.createElement('div');
    this.menu.className = 'jsoneditor-menu';
    this.frame.appendChild(this.menu); // create format button

    var buttonFormat = document.createElement('button');
    buttonFormat.type = 'button';
    buttonFormat.className = 'jsoneditor-format';
    buttonFormat.title = 'Format JSON data, with proper indentation and line feeds (Ctrl+\\)';
    this.menu.appendChild(buttonFormat);

    buttonFormat.onclick = function () {
      try {
        me.format();

        me._onChange();
      } catch (err) {
        me._onError(err);
      }
    }; // create compact button


    var buttonCompact = document.createElement('button');
    buttonCompact.type = 'button';
    buttonCompact.className = 'jsoneditor-compact';
    buttonCompact.title = 'Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)';
    this.menu.appendChild(buttonCompact);

    buttonCompact.onclick = function () {
      try {
        me.compact();

        me._onChange();
      } catch (err) {
        me._onError(err);
      }
    }; // create sort button


    if (this.options.enableSort) {
      var _sort = document.createElement('button');

      _sort.type = 'button';
      _sort.className = 'jsoneditor-sort';
      _sort.title = Object(i18n["c" /* translate */])('sortTitleShort');

      _sort.onclick = function () {
        me._showSortModal();
      };

      this.menu.appendChild(_sort);
    } // create transform button


    if (this.options.enableTransform) {
      var transform = document.createElement('button');
      transform.type = 'button';
      transform.title = Object(i18n["c" /* translate */])('transformTitleShort');
      transform.className = 'jsoneditor-transform';

      transform.onclick = function () {
        me._showTransformModal();
      };

      this.menu.appendChild(transform);
    } // create repair button


    var buttonRepair = document.createElement('button');
    buttonRepair.type = 'button';
    buttonRepair.className = 'jsoneditor-repair';
    buttonRepair.title = 'Repair JSON: fix quotes and escape characters, remove comments and JSONP notation, turn JavaScript objects into JSON.';
    this.menu.appendChild(buttonRepair);

    buttonRepair.onclick = function () {
      try {
        me.repair();

        me._onChange();
      } catch (err) {
        me._onError(err);
      }
    }; // create mode box


    if (this.options && this.options.modes && this.options.modes.length) {
      this.modeSwitcher = new ModeSwitcher["a" /* ModeSwitcher */](this.menu, this.options.modes, this.options.mode, function onSwitch(mode) {
        // switch mode and restore focus
        me.setMode(mode);
        me.modeSwitcher.focus();
      });
    }

    if (this.mode === 'code') {
      var poweredBy = document.createElement('a');
      poweredBy.appendChild(document.createTextNode('powered by ace'));
      poweredBy.href = 'http://ace.ajax.org';
      poweredBy.target = '_blank';
      poweredBy.className = 'jsoneditor-poweredBy';

      poweredBy.onclick = function () {
        // TODO: this anchor falls below the margin of the content,
        // therefore the normal a.href does not work. We use a click event
        // for now, but this should be fixed.
        window.open(poweredBy.href, poweredBy.target);
      };

      this.menu.appendChild(poweredBy);
    }
  }

  var emptyNode = {};
  var isReadOnly = this.options.onEditable && _typeof(this.options.onEditable === 'function') && !this.options.onEditable(emptyNode);
  this.frame.appendChild(this.content);
  this.container.appendChild(this.frame);

  if (this.mode === 'code') {
    this.editorDom = document.createElement('div');
    this.editorDom.style.height = '100%'; // TODO: move to css

    this.editorDom.style.width = '100%'; // TODO: move to css

    this.content.appendChild(this.editorDom);

    var aceEditor = _ace.edit(this.editorDom);

    var aceSession = aceEditor.getSession();
    aceEditor.$blockScrolling = Infinity;
    aceEditor.setTheme(this.theme);
    aceEditor.setOptions({
      readOnly: isReadOnly
    });
    aceEditor.setShowPrintMargin(false);
    aceEditor.setFontSize('13px');
    aceSession.setMode('ace/mode/json');
    aceSession.setTabSize(this.indentation);
    aceSession.setUseSoftTabs(true);
    aceSession.setUseWrapMode(true); // replace ace setAnnotations with custom function that also covers jsoneditor annotations

    var originalSetAnnotations = aceSession.setAnnotations;

    aceSession.setAnnotations = function (annotations) {
      originalSetAnnotations.call(this, annotations && annotations.length ? annotations : me.annotations);
    };

    aceEditor.commands.bindKey('Ctrl-L', null); // disable Ctrl+L (is used by the browser to select the address bar)

    aceEditor.commands.bindKey('Command-L', null); // disable Ctrl+L (is used by the browser to select the address bar)

    this.aceEditor = aceEditor; // register onchange event

    aceEditor.on('change', this._onChange.bind(this));
    aceEditor.on('changeSelection', this._onSelect.bind(this));
  } else {
    // load a plain text textarea
    var textarea = document.createElement('textarea');
    textarea.className = 'jsoneditor-text';
    textarea.spellcheck = false;
    this.content.appendChild(textarea);
    this.textarea = textarea;
    this.textarea.readOnly = isReadOnly; // register onchange event

    if (this.textarea.oninput === null) {
      this.textarea.oninput = this._onChange.bind(this);
    } else {
      // oninput is undefined. For IE8-
      this.textarea.onchange = this._onChange.bind(this);
    }

    textarea.onselect = this._onSelect.bind(this);
    textarea.onmousedown = this._onMouseDown.bind(this);
    textarea.onblur = this._onBlur.bind(this);
  }

  this.errorTable = new ErrorTable["a" /* ErrorTable */]({
    errorTableVisible: this.mode === 'text',
    onToggleVisibility: function onToggleVisibility() {
      me.validate();
    },
    onFocusLine: function onFocusLine(line) {
      me.isFocused = true;

      if (!isNaN(line)) {
        me.setTextSelection({
          row: line,
          column: 1
        }, {
          row: line,
          column: 1000
        });
      }
    },
    onChangeHeight: function onChangeHeight(height) {
      // TODO: change CSS to using flex box, remove setting height using JavaScript
      var statusBarHeight = me.dom.statusBar ? me.dom.statusBar.clientHeight : 0;
      var totalHeight = height + statusBarHeight + 1;
      me.content.style.marginBottom = -totalHeight + 'px';
      me.content.style.paddingBottom = totalHeight + 'px';
    }
  });
  this.frame.appendChild(this.errorTable.getErrorTable());

  if (options.statusBar) {
    Object(util["addClassName"])(this.content, 'has-status-bar');
    this.curserInfoElements = {};
    var statusBar = document.createElement('div');
    this.dom.statusBar = statusBar;
    statusBar.className = 'jsoneditor-statusbar';
    this.frame.appendChild(statusBar);
    var lnLabel = document.createElement('span');
    lnLabel.className = 'jsoneditor-curserinfo-label';
    lnLabel.innerText = 'Ln:';
    var lnVal = document.createElement('span');
    lnVal.className = 'jsoneditor-curserinfo-val';
    lnVal.innerText = '1';
    statusBar.appendChild(lnLabel);
    statusBar.appendChild(lnVal);
    var colLabel = document.createElement('span');
    colLabel.className = 'jsoneditor-curserinfo-label';
    colLabel.innerText = 'Col:';
    var colVal = document.createElement('span');
    colVal.className = 'jsoneditor-curserinfo-val';
    colVal.innerText = '1';
    statusBar.appendChild(colLabel);
    statusBar.appendChild(colVal);
    this.curserInfoElements.colVal = colVal;
    this.curserInfoElements.lnVal = lnVal;
    var countLabel = document.createElement('span');
    countLabel.className = 'jsoneditor-curserinfo-label';
    countLabel.innerText = 'characters selected';
    countLabel.style.display = 'none';
    var countVal = document.createElement('span');
    countVal.className = 'jsoneditor-curserinfo-count';
    countVal.innerText = '0';
    countVal.style.display = 'none';
    this.curserInfoElements.countLabel = countLabel;
    this.curserInfoElements.countVal = countVal;
    statusBar.appendChild(countVal);
    statusBar.appendChild(countLabel);
    statusBar.appendChild(this.errorTable.getErrorCounter());
    statusBar.appendChild(this.errorTable.getWarningIcon());
    statusBar.appendChild(this.errorTable.getErrorIcon());
  }

  this.setSchema(this.options.schema, this.options.schemaRefs);
};
/**
 * Handle a change:
 * - Validate JSON schema
 * - Send a callback to the onChange listener if provided
 * @private
 */


textmode._onChange = function () {
  if (this.onChangeDisabled) {
    return;
  } // validate JSON schema (if configured)


  this._debouncedValidate(); // trigger the onChange callback


  if (this.options.onChange) {
    try {
      this.options.onChange();
    } catch (err) {
      console.error('Error in onChange callback: ', err);
    }
  } // trigger the onChangeText callback


  if (this.options.onChangeText) {
    try {
      this.options.onChangeText(this.getText());
    } catch (err) {
      console.error('Error in onChangeText callback: ', err);
    }
  }
};
/**
 * Open a sort modal
 * @private
 */


textmode._showSortModal = function () {
  var me = this;
  var container = this.options.modalAnchor || constants["a" /* DEFAULT_MODAL_ANCHOR */];
  var json = this.get();

  function onSort(sortedBy) {
    if (Array.isArray(json)) {
      var sortedJson = Object(util["sort"])(json, sortedBy.path, sortedBy.direction);
      me.sortedBy = sortedBy;
      me.set(sortedJson);
    }

    if (Object(util["isObject"])(json)) {
      var _sortedJson = Object(util["sortObjectKeys"])(json, sortedBy.direction);

      me.sortedBy = sortedBy;
      me.set(_sortedJson);
    }
  }

  Object(showSortModal["a" /* showSortModal */])(container, json, onSort, me.sortedBy);
};
/**
 * Open a transform modal
 * @private
 */


textmode._showTransformModal = function () {
  var me = this;
  var anchor = this.options.modalAnchor || constants["a" /* DEFAULT_MODAL_ANCHOR */];
  var json = this.get();
  Object(showTransformModal["a" /* showTransformModal */])(anchor, json, function (query) {
    var updatedJson = jmespath_default.a.search(json, query);
    me.set(updatedJson);
  });
};
/**
 * Handle text selection
 * Calculates the cursor position and selection range and updates menu
 * @private
 */


textmode._onSelect = function () {
  this._updateCursorInfo();

  this._emitSelectionChange();
};
/**
 * Event handler for keydown. Handles shortcut keys
 * @param {Event} event
 * @private
 */


textmode._onKeyDown = function (event) {
  var keynum = event.which || event.keyCode;
  var handled = false;

  if (keynum === 220 && event.ctrlKey) {
    if (event.shiftKey) {
      // Ctrl+Shift+\
      this.compact();

      this._onChange();
    } else {
      // Ctrl+\
      this.format();

      this._onChange();
    }

    handled = true;
  }

  if (handled) {
    event.preventDefault();
    event.stopPropagation();
  }

  this._updateCursorInfo();

  this._emitSelectionChange();
};
/**
 * Event handler for mousedown.
 * @private
 */


textmode._onMouseDown = function () {
  this._updateCursorInfo();

  this._emitSelectionChange();
};
/**
 * Event handler for blur.
 * @private
 */


textmode._onBlur = function () {
  var me = this; // this allows to avoid blur when clicking inner elements (like the errors panel)
  // just make sure to set the isFocused to true on the inner element onclick callback

  setTimeout(function () {
    if (!me.isFocused) {
      me._updateCursorInfo();

      me._emitSelectionChange();
    }

    me.isFocused = false;
  });
};
/**
 * Update the cursor info and the status bar, if presented
 */


textmode._updateCursorInfo = function () {
  var me = this;
  var line, col, count;

  if (this.textarea) {
    setTimeout(function () {
      // this to verify we get the most updated textarea cursor selection
      var selectionRange = Object(util["getInputSelection"])(me.textarea);

      if (selectionRange.startIndex !== selectionRange.endIndex) {
        count = selectionRange.endIndex - selectionRange.startIndex;
      }

      if (count && me.cursorInfo && me.cursorInfo.line === selectionRange.end.row && me.cursorInfo.column === selectionRange.end.column) {
        line = selectionRange.start.row;
        col = selectionRange.start.column;
      } else {
        line = selectionRange.end.row;
        col = selectionRange.end.column;
      }

      me.cursorInfo = {
        line: line,
        column: col,
        count: count
      };

      if (me.options.statusBar) {
        updateDisplay();
      }
    }, 0);
  } else if (this.aceEditor && this.curserInfoElements) {
    var curserPos = this.aceEditor.getCursorPosition();
    var selectedText = this.aceEditor.getSelectedText();
    line = curserPos.row + 1;
    col = curserPos.column + 1;
    count = selectedText.length;
    me.cursorInfo = {
      line: line,
      column: col,
      count: count
    };

    if (this.options.statusBar) {
      updateDisplay();
    }
  }

  function updateDisplay() {
    if (me.curserInfoElements.countVal.innerText !== count) {
      me.curserInfoElements.countVal.innerText = count;
      me.curserInfoElements.countVal.style.display = count ? 'inline' : 'none';
      me.curserInfoElements.countLabel.style.display = count ? 'inline' : 'none';
    }

    me.curserInfoElements.lnVal.innerText = line;
    me.curserInfoElements.colVal.innerText = col;
  }
};
/**
 * emits selection change callback, if given
 * @private
 */


textmode._emitSelectionChange = function () {
  if (this._selectionChangedHandler) {
    var currentSelection = this.getTextSelection();

    this._selectionChangedHandler(currentSelection.start, currentSelection.end, currentSelection.text);
  }
};
/**
 * refresh ERROR annotations state
 * error annotations are handled by the ace json mode (ace/mode/json)
 * validation annotations are handled by this mode
 * therefore in order to refresh we send only the annotations of error type in order to maintain its state
 * @private
 */


textmode._refreshAnnotations = function () {
  var session = this.aceEditor && this.aceEditor.getSession();

  if (session) {
    var errEnnotations = session.getAnnotations().filter(function (annotation) {
      return annotation.type === 'error';
    });
    session.setAnnotations(errEnnotations);
  }
};
/**
 * Destroy the editor. Clean up DOM, event listeners, and web workers.
 */


textmode.destroy = function () {
  // remove old ace editor
  if (this.aceEditor) {
    this.aceEditor.destroy();
    this.aceEditor = null;
  }

  if (this.frame && this.container && this.frame.parentNode === this.container) {
    this.container.removeChild(this.frame);
  }

  if (this.modeSwitcher) {
    this.modeSwitcher.destroy();
    this.modeSwitcher = null;
  }

  this.textarea = null;
  this._debouncedValidate = null;
};
/**
 * Compact the code in the text editor
 */


textmode.compact = function () {
  var json = this.get();
  var text = JSON.stringify(json);

  this._setText(text, false);
};
/**
 * Format the code in the text editor
 */


textmode.format = function () {
  var json = this.get();
  var text = JSON.stringify(json, null, this.indentation);

  this._setText(text, false);
};
/**
 * Repair the code in the text editor
 */


textmode.repair = function () {
  var text = this.getText();
  var repairedText = Object(util["repair"])(text);

  this._setText(repairedText, false);
};
/**
 * Set focus to the formatter
 */


textmode.focus = function () {
  if (this.textarea) {
    this.textarea.focus();
  }

  if (this.aceEditor) {
    this.aceEditor.focus();
  }
};
/**
 * Resize the formatter
 */


textmode.resize = function () {
  if (this.aceEditor) {
    var force = false;
    this.aceEditor.resize(force);
  }
};
/**
 * Set json data in the formatter
 * @param {*} json
 */


textmode.set = function (json) {
  this.setText(JSON.stringify(json, null, this.indentation));
};
/**
 * Update data. Same as calling `set` in text/code mode.
 * @param {*} json
 */


textmode.update = function (json) {
  this.updateText(JSON.stringify(json, null, this.indentation));
};
/**
 * Get json data from the formatter
 * @return {*} json
 */


textmode.get = function () {
  var text = this.getText();
  return Object(util["parse"])(text); // this can throw an error
};
/**
 * Get the text contents of the editor
 * @return {String} jsonText
 */


textmode.getText = function () {
  if (this.textarea) {
    return this.textarea.value;
  }

  if (this.aceEditor) {
    return this.aceEditor.getValue();
  }

  return '';
};
/**
 * Set the text contents of the editor and optionally clear the history
 * @param {String} jsonText
 * @param {boolean} clearHistory   Only applicable for mode 'code'
 * @private
 */


textmode._setText = function (jsonText, clearHistory) {
  var text = this.options.escapeUnicode === true ? Object(util["escapeUnicodeChars"])(jsonText) : jsonText;

  if (this.textarea) {
    this.textarea.value = text;
  }

  if (this.aceEditor) {
    // prevent emitting onChange events while setting new text
    this.onChangeDisabled = true;
    this.aceEditor.setValue(text, -1);
    this.onChangeDisabled = false;

    if (clearHistory) {
      // prevent initial undo action clearing the initial contents
      var me = this;
      setTimeout(function () {
        if (me.aceEditor) {
          me.aceEditor.session.getUndoManager().reset();
        }
      }, 0);
    }
  } // validate JSON schema


  this._debouncedValidate();
};
/**
 * Set the text contents of the editor
 * @param {String} jsonText
 */


textmode.setText = function (jsonText) {
  this._setText(jsonText, true);
};
/**
 * Update the text contents
 * @param {string} jsonText
 */


textmode.updateText = function (jsonText) {
  // don't update if there are no changes
  if (this.getText() === jsonText) {
    return;
  }

  this._setText(jsonText, false);
};
/**
 * Validate current JSON object against the configured JSON schema
 * Throws an exception when no JSON schema is configured
 */


textmode.validate = function () {
  var schemaErrors = [];
  var parseErrors = [];
  var json;

  try {
    json = this.get(); // this can fail when there is no valid json
    // execute JSON schema validation (ajv)

    if (this.validateSchema) {
      var valid = this.validateSchema(json);

      if (!valid) {
        schemaErrors = this.validateSchema.errors.map(function (error) {
          error.type = 'validation';
          return Object(util["improveSchemaError"])(error);
        });
      }
    } // execute custom validation and after than merge and render all errors
    // TODO: implement a better mechanism for only using the last validation action


    this.validationSequence = (this.validationSequence || 0) + 1;
    var me = this;
    var seq = this.validationSequence;
    validateCustom(json, this.options.onValidate).then(function (customValidationErrors) {
      // only apply when there was no other validation started whilst resolving async results
      if (seq === me.validationSequence) {
        var errors = schemaErrors.concat(parseErrors).concat(customValidationErrors);

        me._renderErrors(errors);
      }
    })["catch"](function (err) {
      console.error('Custom validation function did throw an error', err);
    });
  } catch (err) {
    if (this.getText()) {
      // try to extract the line number from the jsonlint error message
      var match = /\w*line\s*(\d+)\w*/g.exec(err.message);
      var line;

      if (match) {
        line = +match[1];
      }

      parseErrors = [{
        type: 'error',
        message: err.message.replace(/\n/g, '<br>'),
        line: line
      }];
    }

    this._renderErrors(parseErrors);
  }
};

textmode._renderErrors = function (errors) {
  var jsonText = this.getText();
  var errorPaths = [];
  errors.reduce(function (acc, curr) {
    if (acc.indexOf(curr.dataPath) === -1) {
      acc.push(curr.dataPath);
    }

    return acc;
  }, errorPaths);
  var errorLocations = Object(util["getPositionForPath"])(jsonText, errorPaths); // render annotations in Ace Editor (if any)

  if (this.aceEditor) {
    this.annotations = errorLocations.map(function (errLoc) {
      var validationErrors = errors.filter(function (err) {
        return err.dataPath === errLoc.path;
      });
      var message = validationErrors.map(function (err) {
        return err.message;
      }).join('\n');

      if (message) {
        return {
          row: errLoc.line,
          column: errLoc.column,
          text: 'Schema validation error' + (validationErrors.length !== 1 ? 's' : '') + ': \n' + message,
          type: 'warning',
          source: 'jsoneditor'
        };
      }

      return {};
    });

    this._refreshAnnotations();
  } // render errors in the errors table (if any)


  this.errorTable.setErrors(errors, errorLocations); // update the height of the ace editor

  if (this.aceEditor) {
    var force = false;
    this.aceEditor.resize(force);
  }
};
/**
 * Get the selection details
 * @returns {{start:{row:Number, column:Number},end:{row:Number, column:Number},text:String}}
 */


textmode.getTextSelection = function () {
  var selection = {};

  if (this.textarea) {
    var selectionRange = Object(util["getInputSelection"])(this.textarea);

    if (this.cursorInfo && this.cursorInfo.line === selectionRange.end.row && this.cursorInfo.column === selectionRange.end.column) {
      // selection direction is bottom => up
      selection.start = selectionRange.end;
      selection.end = selectionRange.start;
    } else {
      selection = selectionRange;
    }

    return {
      start: selection.start,
      end: selection.end,
      text: this.textarea.value.substring(selectionRange.startIndex, selectionRange.endIndex)
    };
  }

  if (this.aceEditor) {
    var aceSelection = this.aceEditor.getSelection();
    var selectedText = this.aceEditor.getSelectedText();
    var range = aceSelection.getRange();
    var lead = aceSelection.getSelectionLead();

    if (lead.row === range.end.row && lead.column === range.end.column) {
      selection = range;
    } else {
      // selection direction is bottom => up
      selection.start = range.end;
      selection.end = range.start;
    }

    return {
      start: {
        row: selection.start.row + 1,
        column: selection.start.column + 1
      },
      end: {
        row: selection.end.row + 1,
        column: selection.end.column + 1
      },
      text: selectedText
    };
  }
};
/**
 * Callback registration for selection change
 * @param {selectionCallback} callback
 *
 * @callback selectionCallback
 */


textmode.onTextSelectionChange = function (callback) {
  if (typeof callback === 'function') {
    this._selectionChangedHandler = Object(util["debounce"])(callback, this.DEBOUNCE_INTERVAL);
  }
};
/**
 * Set selection on editor's text
 * @param {{row:Number, column:Number}} startPos selection start position
 * @param {{row:Number, column:Number}} endPos selected end position
 */


textmode.setTextSelection = function (startPos, endPos) {
  if (!startPos || !endPos) return;

  if (this.textarea) {
    var startIndex = Object(util["getIndexForPosition"])(this.textarea, startPos.row, startPos.column);
    var endIndex = Object(util["getIndexForPosition"])(this.textarea, endPos.row, endPos.column);

    if (startIndex > -1 && endIndex > -1) {
      if (this.textarea.setSelectionRange) {
        this.textarea.focus();
        this.textarea.setSelectionRange(startIndex, endIndex);
      } else if (this.textarea.createTextRange) {
        // IE < 9
        var range = this.textarea.createTextRange();
        range.collapse(true);
        range.moveEnd('character', endIndex);
        range.moveStart('character', startIndex);
        range.select();
      }

      var rows = (this.textarea.value.match(/\n/g) || []).length + 1;
      var lineHeight = this.textarea.scrollHeight / rows;
      var selectionScrollPos = startPos.row * lineHeight;
      this.textarea.scrollTop = selectionScrollPos > this.textarea.clientHeight ? selectionScrollPos - this.textarea.clientHeight / 2 : 0;
    }
  } else if (this.aceEditor) {
    var _range = {
      start: {
        row: startPos.row - 1,
        column: startPos.column - 1
      },
      end: {
        row: endPos.row - 1,
        column: endPos.column - 1
      }
    };
    this.aceEditor.selection.setRange(_range);
    this.aceEditor.scrollToLine(startPos.row - 1, true);
  }
};

function load() {
  try {
    this.format();
  } catch (err) {// in case of an error, just move on, failing formatting is not a big deal
  }
} // define modes


var textModeMixins = [{
  mode: 'text',
  mixin: textmode,
  data: 'text',
  load: load
}, {
  mode: 'code',
  mixin: textmode,
  data: 'text',
  load: load
}];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* Jison generated parser */
var jsonlint = function () {
  var parser = {
    trace: function trace() {},
    yy: {},
    symbols_: {
      "error": 2,
      "JSONString": 3,
      "STRING": 4,
      "JSONNumber": 5,
      "NUMBER": 6,
      "JSONNullLiteral": 7,
      "NULL": 8,
      "JSONBooleanLiteral": 9,
      "TRUE": 10,
      "FALSE": 11,
      "JSONText": 12,
      "JSONValue": 13,
      "EOF": 14,
      "JSONObject": 15,
      "JSONArray": 16,
      "{": 17,
      "}": 18,
      "JSONMemberList": 19,
      "JSONMember": 20,
      ":": 21,
      ",": 22,
      "[": 23,
      "]": 24,
      "JSONElementList": 25,
      "$accept": 0,
      "$end": 1
    },
    terminals_: {
      2: "error",
      4: "STRING",
      6: "NUMBER",
      8: "NULL",
      10: "TRUE",
      11: "FALSE",
      14: "EOF",
      17: "{",
      18: "}",
      21: ":",
      22: ",",
      23: "[",
      24: "]"
    },
    productions_: [0, [3, 1], [5, 1], [7, 1], [9, 1], [9, 1], [12, 2], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [15, 2], [15, 3], [20, 3], [19, 1], [19, 3], [16, 2], [16, 3], [25, 1], [25, 3]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;

      switch (yystate) {
        case 1:
          // replace escaped characters with actual character
          this.$ = yytext.replace(/\\(\\|")/g, "$" + "1").replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\v/g, '\v').replace(/\\f/g, '\f').replace(/\\b/g, '\b');
          break;

        case 2:
          this.$ = Number(yytext);
          break;

        case 3:
          this.$ = null;
          break;

        case 4:
          this.$ = true;
          break;

        case 5:
          this.$ = false;
          break;

        case 6:
          return this.$ = $$[$0 - 1];
          break;

        case 13:
          this.$ = {};
          break;

        case 14:
          this.$ = $$[$0 - 1];
          break;

        case 15:
          this.$ = [$$[$0 - 2], $$[$0]];
          break;

        case 16:
          this.$ = {};
          this.$[$$[$0][0]] = $$[$0][1];
          break;

        case 17:
          this.$ = $$[$0 - 2];
          $$[$0 - 2][$$[$0][0]] = $$[$0][1];
          break;

        case 18:
          this.$ = [];
          break;

        case 19:
          this.$ = $$[$0 - 1];
          break;

        case 20:
          this.$ = [$$[$0]];
          break;

        case 21:
          this.$ = $$[$0 - 2];
          $$[$0 - 2].push($$[$0]);
          break;
      }
    },
    table: [{
      3: 5,
      4: [1, 12],
      5: 6,
      6: [1, 13],
      7: 3,
      8: [1, 9],
      9: 4,
      10: [1, 10],
      11: [1, 11],
      12: 1,
      13: 2,
      15: 7,
      16: 8,
      17: [1, 14],
      23: [1, 15]
    }, {
      1: [3]
    }, {
      14: [1, 16]
    }, {
      14: [2, 7],
      18: [2, 7],
      22: [2, 7],
      24: [2, 7]
    }, {
      14: [2, 8],
      18: [2, 8],
      22: [2, 8],
      24: [2, 8]
    }, {
      14: [2, 9],
      18: [2, 9],
      22: [2, 9],
      24: [2, 9]
    }, {
      14: [2, 10],
      18: [2, 10],
      22: [2, 10],
      24: [2, 10]
    }, {
      14: [2, 11],
      18: [2, 11],
      22: [2, 11],
      24: [2, 11]
    }, {
      14: [2, 12],
      18: [2, 12],
      22: [2, 12],
      24: [2, 12]
    }, {
      14: [2, 3],
      18: [2, 3],
      22: [2, 3],
      24: [2, 3]
    }, {
      14: [2, 4],
      18: [2, 4],
      22: [2, 4],
      24: [2, 4]
    }, {
      14: [2, 5],
      18: [2, 5],
      22: [2, 5],
      24: [2, 5]
    }, {
      14: [2, 1],
      18: [2, 1],
      21: [2, 1],
      22: [2, 1],
      24: [2, 1]
    }, {
      14: [2, 2],
      18: [2, 2],
      22: [2, 2],
      24: [2, 2]
    }, {
      3: 20,
      4: [1, 12],
      18: [1, 17],
      19: 18,
      20: 19
    }, {
      3: 5,
      4: [1, 12],
      5: 6,
      6: [1, 13],
      7: 3,
      8: [1, 9],
      9: 4,
      10: [1, 10],
      11: [1, 11],
      13: 23,
      15: 7,
      16: 8,
      17: [1, 14],
      23: [1, 15],
      24: [1, 21],
      25: 22
    }, {
      1: [2, 6]
    }, {
      14: [2, 13],
      18: [2, 13],
      22: [2, 13],
      24: [2, 13]
    }, {
      18: [1, 24],
      22: [1, 25]
    }, {
      18: [2, 16],
      22: [2, 16]
    }, {
      21: [1, 26]
    }, {
      14: [2, 18],
      18: [2, 18],
      22: [2, 18],
      24: [2, 18]
    }, {
      22: [1, 28],
      24: [1, 27]
    }, {
      22: [2, 20],
      24: [2, 20]
    }, {
      14: [2, 14],
      18: [2, 14],
      22: [2, 14],
      24: [2, 14]
    }, {
      3: 20,
      4: [1, 12],
      20: 29
    }, {
      3: 5,
      4: [1, 12],
      5: 6,
      6: [1, 13],
      7: 3,
      8: [1, 9],
      9: 4,
      10: [1, 10],
      11: [1, 11],
      13: 30,
      15: 7,
      16: 8,
      17: [1, 14],
      23: [1, 15]
    }, {
      14: [2, 19],
      18: [2, 19],
      22: [2, 19],
      24: [2, 19]
    }, {
      3: 5,
      4: [1, 12],
      5: 6,
      6: [1, 13],
      7: 3,
      8: [1, 9],
      9: 4,
      10: [1, 10],
      11: [1, 11],
      13: 31,
      15: 7,
      16: 8,
      17: [1, 14],
      23: [1, 15]
    }, {
      18: [2, 17],
      22: [2, 17]
    }, {
      18: [2, 15],
      22: [2, 15]
    }, {
      22: [2, 21],
      24: [2, 21]
    }],
    defaultActions: {
      16: [2, 6]
    },
    parseError: function parseError(str, hash) {
      throw new Error(str);
    },
    parse: function parse(input) {
      var self = this,
          stack = [0],
          vstack = [null],
          // semantic value stack
      lstack = [],
          // location stack
      table = this.table,
          yytext = '',
          yylineno = 0,
          yyleng = 0,
          recovering = 0,
          TERROR = 2,
          EOF = 1; //this.reductionCount = this.shiftCount = 0;

      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      if (typeof this.lexer.yylloc == 'undefined') this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      if (typeof this.yy.parseError === 'function') this.parseError = this.yy.parseError;

      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }

      function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert

        if (typeof token !== 'number') {
          token = self.symbols_[token] || token;
        }

        return token;
      }

      var symbol,
          preErrorSymbol,
          state,
          action,
          r,
          yyval = {},
          p,
          len,
          newState,
          expected;

      while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1]; // use default actions if available

        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol == null) symbol = lex(); // read action for current state and first input

          action = table[state] && table[state][symbol];
        } // handle parse error


        _handle_error: if (typeof action === 'undefined' || !action.length || !action[0]) {
          if (!recovering) {
            // Report error
            expected = [];

            for (p in table[state]) {
              if (this.terminals_[p] && p > 2) {
                expected.push("'" + this.terminals_[p] + "'");
              }
            }

            var errStr = '';

            if (this.lexer.showPosition) {
              errStr = 'Parse error on line ' + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(', ') + ", got '" + this.terminals_[symbol] + "'";
            } else {
              errStr = 'Parse error on line ' + (yylineno + 1) + ": Unexpected " + (symbol == 1
              /*EOF*/
              ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
            }

            this.parseError(errStr, {
              text: this.lexer.match,
              token: this.terminals_[symbol] || symbol,
              line: this.lexer.yylineno,
              loc: yyloc,
              expected: expected
            });
          } // just recovered from another error


          if (recovering == 3) {
            if (symbol == EOF) {
              throw new Error(errStr || 'Parsing halted.');
            } // discard current lookahead and grab another


            yyleng = this.lexer.yyleng;
            yytext = this.lexer.yytext;
            yylineno = this.lexer.yylineno;
            yyloc = this.lexer.yylloc;
            symbol = lex();
          } // try to recover from error


          while (1) {
            // check for error recovery rule in this state
            if (TERROR.toString() in table[state]) {
              break;
            }

            if (state == 0) {
              throw new Error(errStr || 'Parsing halted.');
            }

            popStack(1);
            state = stack[stack.length - 1];
          }

          preErrorSymbol = symbol; // save the lookahead token

          symbol = TERROR; // insert generic error symbol as new lookahead

          state = stack[stack.length - 1];
          action = table[state] && table[state][TERROR];
          recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        } // this shouldn't happen, unless resolve defaults are off


        if (action[0] instanceof Array && action.length > 1) {
          throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }

        switch (action[0]) {
          case 1:
            // shift
            //this.shiftCount++;
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]); // push state

            symbol = null;

            if (!preErrorSymbol) {
              // normal execution/no error
              yyleng = this.lexer.yyleng;
              yytext = this.lexer.yytext;
              yylineno = this.lexer.yylineno;
              yyloc = this.lexer.yylloc;
              if (recovering > 0) recovering--;
            } else {
              // error just occurred, resume old lookahead f/ before error
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }

            break;

          case 2:
            // reduce
            //this.reductionCount++;
            len = this.productions_[action[1]][1]; // perform semantic action

            yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
            // default location, uses first token for firsts, last for lasts

            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

            if (typeof r !== 'undefined') {
              return r;
            } // pop off stack


            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }

            stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)

            vstack.push(yyval.$);
            lstack.push(yyval._$); // goto new state = table[STATE][NONTERMINAL]

            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;

          case 3:
            // accept
            return true;
        }
      }

      return true;
    }
  };
  /* Jison generated lexer */

  var lexer = function () {
    var lexer = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parseError) {
          this.yy.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      setInput: function setInput(input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        return this;
      },
      input: function input() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
      },
      unput: function unput(ch) {
        this._input = ch + this._input;
        return this;
      },
      more: function more() {
        this._more = true;
        return this;
      },
      less: function less(n) {
        this._input = this.match.slice(n) + this._input;
      },
      pastInput: function pastInput() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
      },
      upcomingInput: function upcomingInput() {
        var next = this.match;

        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }

        return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
      },
      showPosition: function showPosition() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      next: function next() {
        if (this.done) {
          return this.EOF;
        }

        if (!this._input) this.done = true;
        var token, match, tempMatch, index, lines;

        if (!this._more) {
          this.yytext = '';
          this.match = '';
        }

        var rules = this._currentRules();

        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);

          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (!this.options.flex) break;
          }
        }

        if (match) {
          lines = match[0].match(/\n.*/g);
          if (lines) this.yylineno += lines.length;
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ? lines[lines.length - 1].length - 1 : this.yylloc.last_column + match[0].length
          };
          this.yytext += match[0];
          this.match += match[0];
          this.yyleng = this.yytext.length;
          this._more = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
          if (this.done && this._input) this.done = false;
          if (token) return token;else return;
        }

        if (this._input === "") {
          return this.EOF;
        } else {
          this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      },
      lex: function lex() {
        var r = this.next();

        if (typeof r !== 'undefined') {
          return r;
        } else {
          return this.lex();
        }
      },
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      popState: function popState() {
        return this.conditionStack.pop();
      },
      _currentRules: function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      },
      topState: function topState() {
        return this.conditionStack[this.conditionStack.length - 2];
      },
      pushState: function begin(condition) {
        this.begin(condition);
      }
    };
    lexer.options = {};

    lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

      switch ($avoiding_name_collisions) {
        case 0:
          /* skip whitespace */
          break;

        case 1:
          return 6;
          break;

        case 2:
          yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);
          return 4;
          break;

        case 3:
          return 17;
          break;

        case 4:
          return 18;
          break;

        case 5:
          return 23;
          break;

        case 6:
          return 24;
          break;

        case 7:
          return 22;
          break;

        case 8:
          return 21;
          break;

        case 9:
          return 10;
          break;

        case 10:
          return 11;
          break;

        case 11:
          return 8;
          break;

        case 12:
          return 14;
          break;

        case 13:
          return 'INVALID';
          break;
      }
    };

    lexer.rules = [/^(?:\s+)/, /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/, /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/, /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:$)/, /^(?:.)/];
    lexer.conditions = {
      "INITIAL": {
        "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        "inclusive": true
      }
    };
    return lexer;
  }();

  parser.lexer = lexer;
  return parser;
}();

{
  exports.parser = jsonlint;
  exports.parse = jsonlint.parse.bind(jsonlint);
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

if (typeof Element !== 'undefined') {
  // Polyfill for array remove
  (function () {
    function polyfill(item) {
      if ('remove' in item) {
        return;
      }

      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== undefined) {
            this.parentNode.removeChild(this);
          }
        }
      });
    }

    if (typeof window.Element !== 'undefined') {
      polyfill(window.Element.prototype);
    }

    if (typeof window.CharacterData !== 'undefined') {
      polyfill(window.CharacterData.prototype);
    }

    if (typeof window.DocumentType !== 'undefined') {
      polyfill(window.DocumentType.prototype);
    }
  })();
} // Polyfill for Array.find


if (!Array.prototype.find) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
      var element = this[i];

      if (callback.call(this, element, i, this)) {
        return element;
      }
    }
  };
} // Polyfill for String.trim


if (!String.prototype.trim) {
  // eslint-disable-next-line no-extend-native
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


var escapedChars = {
  'b': '\b',
  'f': '\f',
  'n': '\n',
  'r': '\r',
  't': '\t',
  '"': '"',
  '/': '/',
  '\\': '\\'
};

var A_CODE = 'a'.charCodeAt();


exports.parse = function (source, _, options) {
  var pointers = {};
  var line = 0;
  var column = 0;
  var pos = 0;
  var bigint = options && options.bigint && typeof BigInt != 'undefined';
  return {
    data: _parse('', true),
    pointers: pointers
  };

  function _parse(ptr, topLevel) {
    whitespace();
    var data;
    map(ptr, 'value');
    var char = getChar();
    switch (char) {
      case 't': read('rue'); data = true; break;
      case 'f': read('alse'); data = false; break;
      case 'n': read('ull'); data = null; break;
      case '"': data = parseString(); break;
      case '[': data = parseArray(ptr); break;
      case '{': data = parseObject(ptr); break;
      default:
        backChar();
        if ('-0123456789'.indexOf(char) >= 0)
          data = parseNumber();
        else
          unexpectedToken();
    }
    map(ptr, 'valueEnd');
    whitespace();
    if (topLevel && pos < source.length) unexpectedToken();
    return data;
  }

  function whitespace() {
    loop:
      while (pos < source.length) {
        switch (source[pos]) {
          case ' ': column++; break;
          case '\t': column += 4; break;
          case '\r': column = 0; break;
          case '\n': column = 0; line++; break;
          default: break loop;
        }
        pos++;
      }
  }

  function parseString() {
    var str = '';
    var char;
    while (true) {
      char = getChar();
      if (char == '"') {
        break;
      } else if (char == '\\') {
        char = getChar();
        if (char in escapedChars)
          str += escapedChars[char];
        else if (char == 'u')
          str += getCharCode();
        else
          wasUnexpectedToken();
      } else {
        str += char;
      }
    }
    return str;
  }

  function parseNumber() {
    var numStr = '';
    var integer = true;
    if (source[pos] == '-') numStr += getChar();

    numStr += source[pos] == '0'
              ? getChar()
              : getDigits();

    if (source[pos] == '.') {
      numStr += getChar() + getDigits();
      integer = false;
    }

    if (source[pos] == 'e' || source[pos] == 'E') {
      numStr += getChar();
      if (source[pos] == '+' || source[pos] == '-') numStr += getChar();
      numStr += getDigits();
      integer = false;
    }

    var result = +numStr;
    return bigint && integer && (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER)
            ? BigInt(numStr)
            : result;
  }

  function parseArray(ptr) {
    whitespace();
    var arr = [];
    var i = 0;
    if (getChar() == ']') return arr;
    backChar();

    while (true) {
      var itemPtr = ptr + '/' + i;
      arr.push(_parse(itemPtr));
      whitespace();
      var char = getChar();
      if (char == ']') break;
      if (char != ',') wasUnexpectedToken();
      whitespace();
      i++;
    }
    return arr;
  }

  function parseObject(ptr) {
    whitespace();
    var obj = {};
    if (getChar() == '}') return obj;
    backChar();

    while (true) {
      var loc = getLoc();
      if (getChar() != '"') wasUnexpectedToken();
      var key = parseString();
      var propPtr = ptr + '/' + escapeJsonPointer(key);
      mapLoc(propPtr, 'key', loc);
      map(propPtr, 'keyEnd');
      whitespace();
      if (getChar() != ':') wasUnexpectedToken();
      whitespace();
      obj[key] = _parse(propPtr);
      whitespace();
      var char = getChar();
      if (char == '}') break;
      if (char != ',') wasUnexpectedToken();
      whitespace();
    }
    return obj;
  }

  function read(str) {
    for (var i=0; i<str.length; i++)
      if (getChar() !== str[i]) wasUnexpectedToken();
  }

  function getChar() {
    checkUnexpectedEnd();
    var char = source[pos];
    pos++;
    column++; // new line?
    return char;
  }

  function backChar() {
    pos--;
    column--;
  }

  function getCharCode() {
    var count = 4;
    var code = 0;
    while (count--) {
      code <<= 4;
      var char = getChar().toLowerCase();
      if (char >= 'a' && char <= 'f')
        code += char.charCodeAt() - A_CODE + 10;
      else if (char >= '0' && char <= '9')
        code += +char;
      else
        wasUnexpectedToken();
    }
    return String.fromCharCode(code);
  }

  function getDigits() {
    var digits = '';
    while (source[pos] >= '0' && source[pos] <= '9')
      digits += getChar();

    if (digits.length) return digits;
    checkUnexpectedEnd();
    unexpectedToken();
  }

  function map(ptr, prop) {
    mapLoc(ptr, prop, getLoc());
  }

  function mapLoc(ptr, prop, loc) {
    pointers[ptr] = pointers[ptr] || {};
    pointers[ptr][prop] = loc;
  }

  function getLoc() {
    return {
      line: line,
      column: column,
      pos: pos
    };
  }

  function unexpectedToken() {
    throw new SyntaxError('Unexpected token ' + source[pos] + ' in JSON at position ' + pos);
  }

  function wasUnexpectedToken() {
    backChar();
    unexpectedToken();
  }

  function checkUnexpectedEnd() {
    if (pos >= source.length)
      throw new SyntaxError('Unexpected end of JSON input');
  }
};


exports.stringify = function (data, _, options) {
  if (!validType(data)) return;
  var wsLine = 0;
  var wsPos, wsColumn;
  var whitespace = typeof options == 'object'
                    ? options.space
                    : options;
  switch (typeof whitespace) {
    case 'number':
      var len = whitespace > 10
                  ? 10
                  : whitespace < 0
                    ? 0
                    : Math.floor(whitespace);
      whitespace = len && repeat(len, ' ');
      wsPos = len;
      wsColumn = len;
      break;
    case 'string':
      whitespace = whitespace.slice(0, 10);
      wsPos = 0;
      wsColumn = 0;
      for (var j=0; j<whitespace.length; j++) {
        var char = whitespace[j];
        switch (char) {
          case ' ': wsColumn++; break;
          case '\t': wsColumn += 4; break;
          case '\r': wsColumn = 0; break;
          case '\n': wsColumn = 0; wsLine++; break;
          default: throw new Error('whitespace characters not allowed in JSON');
        }
        wsPos++;
      }
      break;
    default:
      whitespace = undefined;
  }

  var json = '';
  var pointers = {};
  var line = 0;
  var column = 0;
  var pos = 0;
  var es6 = options && options.es6 && typeof Map == 'function';
  _stringify(data, 0, '');
  return {
    json: json,
    pointers: pointers
  };

  function _stringify(_data, lvl, ptr) {
    map(ptr, 'value');
    switch (typeof _data) {
      case 'number':
      case 'bigint':
      case 'boolean':
        out('' + _data); break;
      case 'string':
        out(quoted(_data)); break;
      case 'object':
        if (_data === null) {
          out('null');
        } else if (typeof _data.toJSON == 'function') {
          out(quoted(_data.toJSON()));
        } else if (Array.isArray(_data)) {
          stringifyArray();
        } else if (es6) {
          if (_data.constructor.BYTES_PER_ELEMENT)
            stringifyArray();
          else if (_data instanceof Map)
            stringifyMapSet();
          else if (_data instanceof Set)
            stringifyMapSet(true);
          else
            stringifyObject();
        } else {
          stringifyObject();
        }
    }
    map(ptr, 'valueEnd');

    function stringifyArray() {
      if (_data.length) {
        out('[');
        var itemLvl = lvl + 1;
        for (var i=0; i<_data.length; i++) {
          if (i) out(',');
          indent(itemLvl);
          var item = validType(_data[i]) ? _data[i] : null;
          var itemPtr = ptr + '/' + i;
          _stringify(item, itemLvl, itemPtr);
        }
        indent(lvl);
        out(']');
      } else {
        out('[]');
      }
    }

    function stringifyObject() {
      var keys = Object.keys(_data);
      if (keys.length) {
        out('{');
        var propLvl = lvl + 1;
        for (var i=0; i<keys.length; i++) {
          var key = keys[i];
          var value = _data[key];
          if (validType(value)) {
            if (i) out(',');
            var propPtr = ptr + '/' + escapeJsonPointer(key);
            indent(propLvl);
            map(propPtr, 'key');
            out(quoted(key));
            map(propPtr, 'keyEnd');
            out(':');
            if (whitespace) out(' ');
            _stringify(value, propLvl, propPtr);
          }
        }
        indent(lvl);
        out('}');
      } else {
        out('{}');
      }
    }

    function stringifyMapSet(isSet) {
      if (_data.size) {
        out('{');
        var propLvl = lvl + 1;
        var first = true;
        var entries = _data.entries();
        var entry = entries.next();
        while (!entry.done) {
          var item = entry.value;
          var key = item[0];
          var value = isSet ? true : item[1];
          if (validType(value)) {
            if (!first) out(',');
            first = false;
            var propPtr = ptr + '/' + escapeJsonPointer(key);
            indent(propLvl);
            map(propPtr, 'key');
            out(quoted(key));
            map(propPtr, 'keyEnd');
            out(':');
            if (whitespace) out(' ');
            _stringify(value, propLvl, propPtr);
          }
          entry = entries.next();
        }
        indent(lvl);
        out('}');
      } else {
        out('{}');
      }
    }
  }

  function out(str) {
    column += str.length;
    pos += str.length;
    json += str;
  }

  function indent(lvl) {
    if (whitespace) {
      json += '\n' + repeat(lvl, whitespace);
      line++;
      column = 0;
      while (lvl--) {
        if (wsLine) {
          line += wsLine;
          column = wsColumn;
        } else {
          column += wsColumn;
        }
        pos += wsPos;
      }
      pos += 1; // \n character
    }
  }

  function map(ptr, prop) {
    pointers[ptr] = pointers[ptr] || {};
    pointers[ptr][prop] = {
      line: line,
      column: column,
      pos: pos
    };
  }

  function repeat(n, str) {
    return Array(n + 1).join(str);
  }
};


var VALID_TYPES = ['number', 'bigint', 'boolean', 'string', 'object'];
function validType(data) {
  return VALID_TYPES.indexOf(typeof data) >= 0;
}


var ESC_QUOTE = /"|\\/g;
var ESC_B = /[\b]/g;
var ESC_F = /\f/g;
var ESC_N = /\n/g;
var ESC_R = /\r/g;
var ESC_T = /\t/g;
function quoted(str) {
  str = str.replace(ESC_QUOTE, '\\$&')
           .replace(ESC_F, '\\f')
           .replace(ESC_B, '\\b')
           .replace(ESC_N, '\\n')
           .replace(ESC_R, '\\r')
           .replace(ESC_T, '\\t');
  return '"' + str + '"';
}


var ESC_0 = /~/g;
var ESC_1 = /\//g;
function escapeJsonPointer(str) {
  return str.replace(ESC_0, '~0')
            .replace(ESC_1, '~1');
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports.tryRequireThemeJsonEditor = function () {
  try {
    __webpack_require__(21);
  } catch (err) {
    console.error(err);
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


var ace = __webpack_require__(14); // may be undefined in case of minimalist bundle


var VanillaPicker = __webpack_require__(11); // may be undefined in case of minimalist bundle


var _require = __webpack_require__(23),
    treeModeMixins = _require.treeModeMixins;

var _require2 = __webpack_require__(15),
    textModeMixins = _require2.textModeMixins;

var _require3 = __webpack_require__(24),
    previewModeMixins = _require3.previewModeMixins;

var _require4 = __webpack_require__(0),
    clear = _require4.clear,
    extend = _require4.extend,
    getInternetExplorerVersion = _require4.getInternetExplorerVersion,
    parse = _require4.parse;

var _require5 = __webpack_require__(22),
    tryRequireAjv = _require5.tryRequireAjv;

var Ajv = tryRequireAjv();

if (typeof Promise === 'undefined') {
  console.error('Promise undefined. Please load a Promise polyfill in the browser in order to use JSONEditor');
}
/**
 * @constructor JSONEditor
 * @param {Element} container    Container element
 * @param {Object}  [options]    Object with options. available options:
 *                               {String} mode        Editor mode. Available values:
 *                                                    'tree' (default), 'view',
 *                                                    'form', 'text', and 'code'.
 *                               {function} onChange  Callback method, triggered
 *                                                    on change of contents.
 *                                                    Does not pass the contents itself.
 *                                                    See also `onChangeJSON` and
 *                                                    `onChangeText`.
 *                               {function} onChangeJSON  Callback method, triggered
 *                                                        in modes on change of contents,
 *                                                        passing the changed contents
 *                                                        as JSON.
 *                                                        Only applicable for modes
 *                                                        'tree', 'view', and 'form'.
 *                               {function} onChangeText  Callback method, triggered
 *                                                        in modes on change of contents,
 *                                                        passing the changed contents
 *                                                        as stringified JSON.
 *                               {function} onError   Callback method, triggered
 *                                                    when an error occurs
 *                               {Boolean} search     Enable search box.
 *                                                    True by default
 *                                                    Only applicable for modes
 *                                                    'tree', 'view', and 'form'
 *                               {Boolean} history    Enable history (undo/redo).
 *                                                    True by default
 *                                                    Only applicable for modes
 *                                                    'tree', 'view', and 'form'
 *                               {String} name        Field name for the root node.
 *                                                    Only applicable for modes
 *                                                    'tree', 'view', and 'form'
 *                               {Number} indentation     Number of indentation
 *                                                        spaces. 4 by default.
 *                                                        Only applicable for
 *                                                        modes 'text' and 'code'
 *                               {boolean} escapeUnicode  If true, unicode
 *                                                        characters are escaped.
 *                                                        false by default.
 *                               {boolean} sortObjectKeys If true, object keys are
 *                                                        sorted before display.
 *                                                        false by default.
 *                               {function} onSelectionChange Callback method,
 *                                                            triggered on node selection change
 *                                                            Only applicable for modes
 *                                                            'tree', 'view', and 'form'
 *                               {function} onTextSelectionChange Callback method,
 *                                                                triggered on text selection change
 *                                                                Only applicable for modes
 *                               {HTMLElement} modalAnchor        The anchor element to apply an
 *                                                                overlay and display the modals in a
 *                                                                centered location.
 *                                                                Defaults to document.body
 *                                                                'text' and 'code'
 *                               {function} onEvent Callback method, triggered
 *                                                  when an event occurs in
 *                                                  a JSON field or value.
 *                                                  Only applicable for
 *                                                  modes 'form', 'tree' and
 *                                                  'view'
 *                               {function} onClassName Callback method, triggered
 *                                                  when a Node DOM is rendered. Function returns
 *                                                  a css class name to be set on a node.
 *                                                  Only applicable for
 *                                                  modes 'form', 'tree' and
 *                                                  'view'
 *                               {Number} maxVisibleChilds Number of children allowed for a node
 *                                                         in 'tree', 'view', or 'form' mode before
 *                                                         the "show more/show all" buttons appear.
 *                                                         100 by default.
 *
 * @param {Object | undefined} json JSON object
 */


function JSONEditor(container, options, json) {
  if (!(this instanceof JSONEditor)) {
    throw new Error('JSONEditor constructor called without "new".');
  } // check for unsupported browser (IE8 and older)


  var ieVersion = getInternetExplorerVersion();

  if (ieVersion !== -1 && ieVersion < 9) {
    throw new Error('Unsupported browser, IE9 or newer required. ' + 'Please install the newest version of your browser.');
  }

  if (options) {
    // check for deprecated options
    if (options.error) {
      console.warn('Option "error" has been renamed to "onError"');
      options.onError = options.error;
      delete options.error;
    }

    if (options.change) {
      console.warn('Option "change" has been renamed to "onChange"');
      options.onChange = options.change;
      delete options.change;
    }

    if (options.editable) {
      console.warn('Option "editable" has been renamed to "onEditable"');
      options.onEditable = options.editable;
      delete options.editable;
    } // warn if onChangeJSON is used when mode can be `text` or `code`


    if (options.onChangeJSON) {
      if (options.mode === 'text' || options.mode === 'code' || options.modes && (options.modes.indexOf('text') !== -1 || options.modes.indexOf('code') !== -1)) {
        console.warn('Option "onChangeJSON" is not applicable to modes "text" and "code". ' + 'Use "onChangeText" or "onChange" instead.');
      }
    } // validate options


    if (options) {
      Object.keys(options).forEach(function (option) {
        if (JSONEditor.VALID_OPTIONS.indexOf(option) === -1) {
          console.warn('Unknown option "' + option + '". This option will be ignored');
        }
      });
    }
  }

  if (arguments.length) {
    this._create(container, options, json);
  }
}
/**
 * Configuration for all registered modes. Example:
 * {
 *     tree: {
 *         mixin: TreeEditor,
 *         data: 'json'
 *     },
 *     text: {
 *         mixin: TextEditor,
 *         data: 'text'
 *     }
 * }
 *
 * @type { Object.<String, {mixin: Object, data: String} > }
 */


JSONEditor.modes = {}; // debounce interval for JSON schema vaidation in milliseconds

JSONEditor.prototype.DEBOUNCE_INTERVAL = 150;
JSONEditor.VALID_OPTIONS = ['ajv', 'schema', 'schemaRefs', 'templates', 'ace', 'theme', 'autocomplete', 'onChange', 'onChangeJSON', 'onChangeText', 'onEditable', 'onError', 'onEvent', 'onModeChange', 'onNodeName', 'onValidate', 'onCreateMenu', 'onSelectionChange', 'onTextSelectionChange', 'onClassName', 'colorPicker', 'onColorPicker', 'timestampTag', 'escapeUnicode', 'history', 'search', 'mode', 'modes', 'name', 'indentation', 'sortObjectKeys', 'navigationBar', 'statusBar', 'mainMenuBar', 'languages', 'language', 'enableSort', 'enableTransform', 'maxVisibleChilds'];
/**
 * Create the JSONEditor
 * @param {Element} container    Container element
 * @param {Object}  [options]    See description in constructor
 * @param {Object | undefined} json JSON object
 * @private
 */

JSONEditor.prototype._create = function (container, options, json) {
  this.container = container;
  this.options = options || {};
  this.json = json || {};
  var mode = this.options.mode || this.options.modes && this.options.modes[0] || 'tree';
  this.setMode(mode);
};
/**
 * Destroy the editor. Clean up DOM, event listeners, and web workers.
 */


JSONEditor.prototype.destroy = function () {};
/**
 * Set JSON object in editor
 * @param {Object | undefined} json      JSON data
 */


JSONEditor.prototype.set = function (json) {
  this.json = json;
};
/**
 * Get JSON from the editor
 * @returns {Object} json
 */


JSONEditor.prototype.get = function () {
  return this.json;
};
/**
 * Set string containing JSON for the editor
 * @param {String | undefined} jsonText
 */


JSONEditor.prototype.setText = function (jsonText) {
  this.json = parse(jsonText);
};
/**
 * Get stringified JSON contents from the editor
 * @returns {String} jsonText
 */


JSONEditor.prototype.getText = function () {
  return JSON.stringify(this.json);
};
/**
 * Set a field name for the root node.
 * @param {String | undefined} name
 */


JSONEditor.prototype.setName = function (name) {
  if (!this.options) {
    this.options = {};
  }

  this.options.name = name;
};
/**
 * Get the field name for the root node.
 * @return {String | undefined} name
 */


JSONEditor.prototype.getName = function () {
  return this.options && this.options.name;
};
/**
 * Change the mode of the editor.
 * JSONEditor will be extended with all methods needed for the chosen mode.
 * @param {String} mode     Available modes: 'tree' (default), 'view', 'form',
 *                          'text', and 'code'.
 */


JSONEditor.prototype.setMode = function (mode) {
  // if the mode is the same as current mode (and it's not the first time), do nothing.
  if (mode === this.options.mode && this.create) {
    return;
  }

  var container = this.container;
  var options = extend({}, this.options);
  var oldMode = options.mode;
  var data;
  var name;
  options.mode = mode;
  var config = JSONEditor.modes[mode];

  if (config) {
    try {
      var asText = config.data === 'text';
      name = this.getName();
      data = this[asText ? 'getText' : 'get'](); // get text or json

      this.destroy();
      clear(this);
      extend(this, config.mixin);
      this.create(container, options);
      this.setName(name);
      this[asText ? 'setText' : 'set'](data); // set text or json

      if (typeof config.load === 'function') {
        try {
          config.load.call(this);
        } catch (err) {
          console.error(err);
        }
      }

      if (typeof options.onModeChange === 'function' && mode !== oldMode) {
        try {
          options.onModeChange(mode, oldMode);
        } catch (err) {
          console.error(err);
        }
      }
    } catch (err) {
      this._onError(err);
    }
  } else {
    throw new Error('Unknown mode "' + options.mode + '"');
  }
};
/**
 * Get the current mode
 * @return {string}
 */


JSONEditor.prototype.getMode = function () {
  return this.options.mode;
};
/**
 * Throw an error. If an error callback is configured in options.error, this
 * callback will be invoked. Else, a regular error is thrown.
 * @param {Error} err
 * @private
 */


JSONEditor.prototype._onError = function (err) {
  if (this.options && typeof this.options.onError === 'function') {
    this.options.onError(err);
  } else {
    throw err;
  }
};
/**
 * Set a JSON schema for validation of the JSON object.
 * To remove the schema, call JSONEditor.setSchema(null)
 * @param {Object | null} schema
 * @param {Object.<string, Object>=} schemaRefs Schemas that are referenced using the `$ref` property from the JSON schema that are set in the `schema` option,
 +  the object structure in the form of `{reference_key: schemaObject}`
 */


JSONEditor.prototype.setSchema = function (schema, schemaRefs) {
  // compile a JSON schema validator if a JSON schema is provided
  if (schema) {
    var ajv;

    try {
      // grab ajv from options if provided, else create a new instance
      if (this.options.ajv) {
        ajv = this.options.ajv;
      } else {
        ajv = Ajv({
          allErrors: true,
          verbose: true,
          schemaId: 'auto',
          $data: true
        }); // support both draft-04 and draft-06 alongside the latest draft-07

        ajv.addMetaSchema(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'ajv/lib/refs/json-schema-draft-04.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
        ajv.addMetaSchema(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'ajv/lib/refs/json-schema-draft-06.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
      }
    } catch (err) {
      console.warn('Failed to create an instance of Ajv, JSON Schema validation is not available. Please use a JSONEditor bundle including Ajv, or pass an instance of Ajv as via the configuration option `ajv`.');
    }

    if (ajv) {
      if (schemaRefs) {
        for (var ref in schemaRefs) {
          ajv.removeSchema(ref); // When updating a schema - old refs has to be removed first

          if (schemaRefs[ref]) {
            ajv.addSchema(schemaRefs[ref], ref);
          }
        }

        this.options.schemaRefs = schemaRefs;
      }

      this.validateSchema = ajv.compile(schema); // add schema to the options, so that when switching to an other mode,
      // the set schema is not lost

      this.options.schema = schema; // validate now

      this.validate();
    }

    this.refresh(); // update DOM
  } else {
    // remove current schema
    this.validateSchema = null;
    this.options.schema = null;
    this.options.schemaRefs = null;
    this.validate(); // to clear current error messages

    this.refresh(); // update DOM
  }
};
/**
 * Validate current JSON object against the configured JSON schema
 * Throws an exception when no JSON schema is configured
 */


JSONEditor.prototype.validate = function () {} // must be implemented by treemode and textmode

/**
 * Refresh the rendered contents
 */
;

JSONEditor.prototype.refresh = function () {} // can be implemented by treemode and textmode

/**
 * Register a plugin with one ore multiple modes for the JSON Editor.
 *
 * A mode is described as an object with properties:
 *
 * - `mode: String`           The name of the mode.
 * - `mixin: Object`          An object containing the mixin functions which
 *                            will be added to the JSONEditor. Must contain functions
 *                            create, get, getText, set, and setText. May have
 *                            additional functions.
 *                            When the JSONEditor switches to a mixin, all mixin
 *                            functions are added to the JSONEditor, and then
 *                            the function `create(container, options)` is executed.
 * - `data: 'text' | 'json'`  The type of data that will be used to load the mixin.
 * - `[load: function]`       An optional function called after the mixin
 *                            has been loaded.
 *
 * @param {Object | Array} mode  A mode object or an array with multiple mode objects.
 */
;

JSONEditor.registerMode = function (mode) {
  var i, prop;

  if (Array.isArray(mode)) {
    // multiple modes
    for (i = 0; i < mode.length; i++) {
      JSONEditor.registerMode(mode[i]);
    }
  } else {
    // validate the new mode
    if (!('mode' in mode)) throw new Error('Property "mode" missing');
    if (!('mixin' in mode)) throw new Error('Property "mixin" missing');
    if (!('data' in mode)) throw new Error('Property "data" missing');
    var name = mode.mode;

    if (name in JSONEditor.modes) {
      throw new Error('Mode "' + name + '" already registered');
    } // validate the mixin


    if (typeof mode.mixin.create !== 'function') {
      throw new Error('Required function "create" missing on mixin');
    }

    var reserved = ['setMode', 'registerMode', 'modes'];

    for (i = 0; i < reserved.length; i++) {
      prop = reserved[i];

      if (prop in mode.mixin) {
        throw new Error('Reserved property "' + prop + '" not allowed in mixin');
      }
    }

    JSONEditor.modes[name] = mode;
  }
}; // register tree, text, and preview modes


JSONEditor.registerMode(treeModeMixins);
JSONEditor.registerMode(textModeMixins);
JSONEditor.registerMode(previewModeMixins); // expose some of the libraries that can be used customized

JSONEditor.ace = ace;
JSONEditor.Ajv = Ajv;
JSONEditor.VanillaPicker = VanillaPicker; // default export for TypeScript ES6 projects

JSONEditor["default"] = JSONEditor;
module.exports = JSONEditor;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */
window.ace.define('ace/theme/jsoneditor', ['require', 'exports', 'module', 'ace/lib/dom'], function (acequire, exports, module) {
  exports.isDark = false;
  exports.cssClass = 'ace-jsoneditor';
  exports.cssText = ".ace-jsoneditor .ace_gutter {\nbackground: #ebebeb;\ncolor: #333\n}\n\n.ace-jsoneditor.ace_editor {\nfont-family: \"dejavu sans mono\", \"droid sans mono\", consolas, monaco, \"lucida console\", \"courier new\", courier, monospace, sans-serif;\nline-height: 1.3;\nbackground-color: #fff;\n}\n.ace-jsoneditor .ace_print-margin {\nwidth: 1px;\nbackground: #e8e8e8\n}\n.ace-jsoneditor .ace_scroller {\nbackground-color: #FFFFFF\n}\n.ace-jsoneditor .ace_text-layer {\ncolor: gray\n}\n.ace-jsoneditor .ace_variable {\ncolor: #1a1a1a\n}\n.ace-jsoneditor .ace_cursor {\nborder-left: 2px solid #000000\n}\n.ace-jsoneditor .ace_overwrite-cursors .ace_cursor {\nborder-left: 0px;\nborder-bottom: 1px solid #000000\n}\n.ace-jsoneditor .ace_marker-layer .ace_selection {\nbackground: lightgray\n}\n.ace-jsoneditor.ace_multiselect .ace_selection.ace_start {\nbox-shadow: 0 0 3px 0px #FFFFFF;\nborder-radius: 2px\n}\n.ace-jsoneditor .ace_marker-layer .ace_step {\nbackground: rgb(255, 255, 0)\n}\n.ace-jsoneditor .ace_marker-layer .ace_bracket {\nmargin: -1px 0 0 -1px;\nborder: 1px solid #BFBFBF\n}\n.ace-jsoneditor .ace_marker-layer .ace_active-line {\nbackground: #FFFBD1\n}\n.ace-jsoneditor .ace_gutter-active-line {\nbackground-color : #dcdcdc\n}\n.ace-jsoneditor .ace_marker-layer .ace_selected-word {\nborder: 1px solid lightgray\n}\n.ace-jsoneditor .ace_invisible {\ncolor: #BFBFBF\n}\n.ace-jsoneditor .ace_keyword,\n.ace-jsoneditor .ace_meta,\n.ace-jsoneditor .ace_support.ace_constant.ace_property-value {\ncolor: #AF956F\n}\n.ace-jsoneditor .ace_keyword.ace_operator {\ncolor: #484848\n}\n.ace-jsoneditor .ace_keyword.ace_other.ace_unit {\ncolor: #96DC5F\n}\n.ace-jsoneditor .ace_constant.ace_language {\ncolor: darkorange\n}\n.ace-jsoneditor .ace_constant.ace_numeric {\ncolor: red\n}\n.ace-jsoneditor .ace_constant.ace_character.ace_entity {\ncolor: #BF78CC\n}\n.ace-jsoneditor .ace_invalid {\ncolor: #FFFFFF;\nbackground-color: #FF002A;\n}\n.ace-jsoneditor .ace_fold {\nbackground-color: #AF956F;\nborder-color: #000000\n}\n.ace-jsoneditor .ace_storage,\n.ace-jsoneditor .ace_support.ace_class,\n.ace-jsoneditor .ace_support.ace_function,\n.ace-jsoneditor .ace_support.ace_other,\n.ace-jsoneditor .ace_support.ace_type {\ncolor: #C52727\n}\n.ace-jsoneditor .ace_string {\ncolor: green\n}\n.ace-jsoneditor .ace_comment {\ncolor: #BCC8BA\n}\n.ace-jsoneditor .ace_entity.ace_name.ace_tag,\n.ace-jsoneditor .ace_entity.ace_other.ace_attribute-name {\ncolor: #606060\n}\n.ace-jsoneditor .ace_markup.ace_underline {\ntext-decoration: underline\n}\n.ace-jsoneditor .ace_indent-guide {\nbackground: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y\n}";
  var dom = acequire('../lib/dom');
  dom.importCssString(exports.cssText, exports.cssClass);
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports.tryRequireAjv = function () {
  try {
    return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'ajv'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  } catch (err) {// no problem... when we need Ajv we will throw a neat exception
  }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/js/vanilla-picker/index.js
var vanilla_picker = __webpack_require__(11);
var vanilla_picker_default = /*#__PURE__*/__webpack_require__.n(vanilla_picker);

// CONCATENATED MODULE: ./src/js/Highlighter.js

/**
 * The highlighter can highlight/unhighlight a node, and
 * animate the visibility of a context menu.
 * @constructor Highlighter
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Highlighter =
/*#__PURE__*/
function () {
  function Highlighter() {
    _classCallCheck(this, Highlighter);

    this.locked = false;
  }
  /**
   * Hightlight given node and its childs
   * @param {Node} node
   */


  _createClass(Highlighter, [{
    key: "highlight",
    value: function highlight(node) {
      if (this.locked) {
        return;
      }

      if (this.node !== node) {
        // unhighlight current node
        if (this.node) {
          this.node.setHighlight(false);
        } // highlight new node


        this.node = node;
        this.node.setHighlight(true);
      } // cancel any current timeout


      this._cancelUnhighlight();
    }
    /**
     * Unhighlight currently highlighted node.
     * Will be done after a delay
     */

  }, {
    key: "unhighlight",
    value: function unhighlight() {
      if (this.locked) {
        return;
      }

      var me = this;

      if (this.node) {
        this._cancelUnhighlight(); // do the unhighlighting after a small delay, to prevent re-highlighting
        // the same node when moving from the drag-icon to the contextmenu-icon
        // or vice versa.


        this.unhighlightTimer = setTimeout(function () {
          me.node.setHighlight(false);
          me.node = undefined;
          me.unhighlightTimer = undefined;
        }, 0);
      }
    }
    /**
     * Cancel an unhighlight action (if before the timeout of the unhighlight action)
     * @private
     */

  }, {
    key: "_cancelUnhighlight",
    value: function _cancelUnhighlight() {
      if (this.unhighlightTimer) {
        clearTimeout(this.unhighlightTimer);
        this.unhighlightTimer = undefined;
      }
    }
    /**
     * Lock highlighting or unhighlighting nodes.
     * methods highlight and unhighlight do not work while locked.
     */

  }, {
    key: "lock",
    value: function lock() {
      this.locked = true;
    }
    /**
     * Unlock highlighting or unhighlighting nodes
     */

  }, {
    key: "unlock",
    value: function unlock() {
      this.locked = false;
    }
  }]);

  return Highlighter;
}();
// EXTERNAL MODULE: ./src/js/util.js
var util = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/NodeHistory.js


function NodeHistory_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NodeHistory_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NodeHistory_createClass(Constructor, protoProps, staticProps) { if (protoProps) NodeHistory_defineProperties(Constructor.prototype, protoProps); if (staticProps) NodeHistory_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @constructor History
 * Store action history, enables undo and redo
 * @param {JSONEditor} editor
 */

var NodeHistory_NodeHistory =
/*#__PURE__*/
function () {
  function NodeHistory(editor) {
    NodeHistory_classCallCheck(this, NodeHistory);

    this.editor = editor;
    this.history = [];
    this.index = -1;
    this.clear(); // helper function to find a Node from a path

    function findNode(path) {
      return editor.node.findNodeByInternalPath(path);
    } // map with all supported actions


    this.actions = {
      editField: {
        undo: function undo(params) {
          var parentNode = findNode(params.parentPath);
          var node = parentNode.childs[params.index];
          node.updateField(params.oldValue);
        },
        redo: function redo(params) {
          var parentNode = findNode(params.parentPath);
          var node = parentNode.childs[params.index];
          node.updateField(params.newValue);
        }
      },
      editValue: {
        undo: function undo(params) {
          findNode(params.path).updateValue(params.oldValue);
        },
        redo: function redo(params) {
          findNode(params.path).updateValue(params.newValue);
        }
      },
      changeType: {
        undo: function undo(params) {
          findNode(params.path).changeType(params.oldType);
        },
        redo: function redo(params) {
          findNode(params.path).changeType(params.newType);
        }
      },
      appendNodes: {
        undo: function undo(params) {
          var parentNode = findNode(params.parentPath);
          params.paths.map(findNode).forEach(function (node) {
            parentNode.removeChild(node);
          });
        },
        redo: function redo(params) {
          var parentNode = findNode(params.parentPath);
          params.nodes.forEach(function (node) {
            parentNode.appendChild(node);
          });
        }
      },
      insertBeforeNodes: {
        undo: function undo(params) {
          var parentNode = findNode(params.parentPath);
          params.paths.map(findNode).forEach(function (node) {
            parentNode.removeChild(node);
          });
        },
        redo: function redo(params) {
          var parentNode = findNode(params.parentPath);
          var beforeNode = findNode(params.beforePath);
          params.nodes.forEach(function (node) {
            parentNode.insertBefore(node, beforeNode);
          });
        }
      },
      insertAfterNodes: {
        undo: function undo(params) {
          var parentNode = findNode(params.parentPath);
          params.paths.map(findNode).forEach(function (node) {
            parentNode.removeChild(node);
          });
        },
        redo: function redo(params) {
          var parentNode = findNode(params.parentPath);
          var afterNode = findNode(params.afterPath);
          params.nodes.forEach(function (node) {
            parentNode.insertAfter(node, afterNode);
            afterNode = node;
          });
        }
      },
      removeNodes: {
        undo: function undo(params) {
          var parentNode = findNode(params.parentPath);
          var beforeNode = parentNode.childs[params.index] || parentNode.append;
          params.nodes.forEach(function (node) {
            parentNode.insertBefore(node, beforeNode);
          });
        },
        redo: function redo(params) {
          var parentNode = findNode(params.parentPath);
          params.paths.map(findNode).forEach(function (node) {
            parentNode.removeChild(node);
          });
        }
      },
      duplicateNodes: {
        undo: function undo(params) {
          var parentNode = findNode(params.parentPath);
          params.clonePaths.map(findNode).forEach(function (node) {
            parentNode.removeChild(node);
          });
        },
        redo: function redo(params) {
          var parentNode = findNode(params.parentPath);
          var afterNode = findNode(params.afterPath);
          var nodes = params.paths.map(findNode);
          nodes.forEach(function (node) {
            var clone = node.clone();

            if (parentNode.type === 'object') {
              var existingFieldNames = parentNode.getFieldNames();
              clone.field = Object(util["findUniqueName"])(node.field, existingFieldNames);
            }

            parentNode.insertAfter(clone, afterNode);
            afterNode = clone;
          });
        }
      },
      moveNodes: {
        undo: function undo(params) {
          var oldParentNode = findNode(params.oldParentPath);
          var newParentNode = findNode(params.newParentPath);
          var oldBeforeNode = oldParentNode.childs[params.oldIndex] || oldParentNode.append; // first copy the nodes, then move them

          var nodes = newParentNode.childs.slice(params.newIndex, params.newIndex + params.count);
          nodes.forEach(function (node, index) {
            node.field = params.fieldNames[index];
            oldParentNode.moveBefore(node, oldBeforeNode);
          }); // This is a hack to work around an issue that we don't know tha original
          // path of the new parent after dragging, as the node is already moved at that time.

          if (params.newParentPathRedo === null) {
            params.newParentPathRedo = newParentNode.getInternalPath();
          }
        },
        redo: function redo(params) {
          var oldParentNode = findNode(params.oldParentPathRedo);
          var newParentNode = findNode(params.newParentPathRedo);
          var newBeforeNode = newParentNode.childs[params.newIndexRedo] || newParentNode.append; // first copy the nodes, then move them

          var nodes = oldParentNode.childs.slice(params.oldIndexRedo, params.oldIndexRedo + params.count);
          nodes.forEach(function (node, index) {
            node.field = params.fieldNames[index];
            newParentNode.moveBefore(node, newBeforeNode);
          });
        }
      },
      sort: {
        undo: function undo(params) {
          var node = findNode(params.path);
          node.hideChilds();
          node.childs = params.oldChilds;
          node.updateDom({
            updateIndexes: true
          });
          node.showChilds();
        },
        redo: function redo(params) {
          var node = findNode(params.path);
          node.hideChilds();
          node.childs = params.newChilds;
          node.updateDom({
            updateIndexes: true
          });
          node.showChilds();
        }
      },
      transform: {
        undo: function undo(params) {
          findNode(params.path).setInternalValue(params.oldValue); // TODO: would be nice to restore the state of the node and childs
        },
        redo: function redo(params) {
          findNode(params.path).setInternalValue(params.newValue); // TODO: would be nice to restore the state of the node and childs
        }
      } // TODO: restore the original caret position and selection with each undo
      // TODO: implement history for actions "expand", "collapse", "scroll", "setDocument"

    };
  }
  /**
   * The method onChange is executed when the History is changed, and can
   * be overloaded.
   */


  NodeHistory_createClass(NodeHistory, [{
    key: "onChange",
    value: function onChange() {}
    /**
     * Add a new action to the history
     * @param {String} action  The executed action. Available actions: "editField",
     *                         "editValue", "changeType", "appendNode",
     *                         "removeNode", "duplicateNode", "moveNode"
     * @param {Object} params  Object containing parameters describing the change.
     *                         The parameters in params depend on the action (for
     *                         example for "editValue" the Node, old value, and new
     *                         value are provided). params contains all information
     *                         needed to undo or redo the action.
     */

  }, {
    key: "add",
    value: function add(action, params) {
      this.index++;
      this.history[this.index] = {
        action: action,
        params: params,
        timestamp: new Date()
      }; // remove redo actions which are invalid now

      if (this.index < this.history.length - 1) {
        this.history.splice(this.index + 1, this.history.length - this.index - 1);
      } // fire onchange event


      this.onChange();
    }
    /**
     * Clear history
     */

  }, {
    key: "clear",
    value: function clear() {
      this.history = [];
      this.index = -1; // fire onchange event

      this.onChange();
    }
    /**
     * Check if there is an action available for undo
     * @return {Boolean} canUndo
     */

  }, {
    key: "canUndo",
    value: function canUndo() {
      return this.index >= 0;
    }
    /**
     * Check if there is an action available for redo
     * @return {Boolean} canRedo
     */

  }, {
    key: "canRedo",
    value: function canRedo() {
      return this.index < this.history.length - 1;
    }
    /**
     * Undo the last action
     */

  }, {
    key: "undo",
    value: function undo() {
      if (this.canUndo()) {
        var obj = this.history[this.index];

        if (obj) {
          var action = this.actions[obj.action];

          if (action && action.undo) {
            action.undo(obj.params);

            if (obj.params.oldSelection) {
              try {
                this.editor.setDomSelection(obj.params.oldSelection);
              } catch (err) {
                console.error(err);
              }
            }
          } else {
            console.error(new Error('unknown action "' + obj.action + '"'));
          }
        }

        this.index--; // fire onchange event

        this.onChange();
      }
    }
    /**
     * Redo the last action
     */

  }, {
    key: "redo",
    value: function redo() {
      if (this.canRedo()) {
        this.index++;
        var obj = this.history[this.index];

        if (obj) {
          var action = this.actions[obj.action];

          if (action && action.redo) {
            action.redo(obj.params);

            if (obj.params.newSelection) {
              try {
                this.editor.setDomSelection(obj.params.newSelection);
              } catch (err) {
                console.error(err);
              }
            }
          } else {
            console.error(new Error('unknown action "' + obj.action + '"'));
          }
        } // fire onchange event


        this.onChange();
      }
    }
    /**
     * Destroy history
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.editor = null;
      this.history = [];
      this.index = -1;
    }
  }]);

  return NodeHistory;
}();
// CONCATENATED MODULE: ./src/js/SearchBox.js

/**
 * @constructor SearchBox
 * Create a search box in given HTML container
 * @param {JSONEditor} editor    The JSON Editor to attach to
 * @param {Element} container               HTML container element of where to
 *                                          create the search box
 */

function SearchBox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchBox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SearchBox_createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchBox_defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchBox_defineProperties(Constructor, staticProps); return Constructor; }

var SearchBox =
/*#__PURE__*/
function () {
  function SearchBox(editor, container) {
    SearchBox_classCallCheck(this, SearchBox);

    var searchBox = this;
    this.editor = editor;
    this.timeout = undefined;
    this.delay = 200; // ms

    this.lastText = undefined;
    this.results = null;
    this.dom = {};
    this.dom.container = container;
    var wrapper = document.createElement('div');
    this.dom.wrapper = wrapper;
    wrapper.className = 'jsoneditor-search';
    container.appendChild(wrapper);
    var results = document.createElement('div');
    this.dom.results = results;
    results.className = 'jsoneditor-results';
    wrapper.appendChild(results);
    var divInput = document.createElement('div');
    this.dom.input = divInput;
    divInput.className = 'jsoneditor-frame';
    divInput.title = 'Search fields and values';
    wrapper.appendChild(divInput);
    var refreshSearch = document.createElement('button');
    refreshSearch.type = 'button';
    refreshSearch.className = 'jsoneditor-refresh';
    divInput.appendChild(refreshSearch);
    var search = document.createElement('input');
    search.type = 'text';
    this.dom.search = search;

    search.oninput = function (event) {
      searchBox._onDelayedSearch(event);
    };

    search.onchange = function (event) {
      // For IE 9
      searchBox._onSearch();
    };

    search.onkeydown = function (event) {
      searchBox._onKeyDown(event);
    };

    search.onkeyup = function (event) {
      searchBox._onKeyUp(event);
    };

    refreshSearch.onclick = function (event) {
      search.select();
    }; // TODO: ESC in FF restores the last input, is a FF bug, https://bugzilla.mozilla.org/show_bug.cgi?id=598819


    divInput.appendChild(search);
    var searchNext = document.createElement('button');
    searchNext.type = 'button';
    searchNext.title = 'Next result (Enter)';
    searchNext.className = 'jsoneditor-next';

    searchNext.onclick = function () {
      searchBox.next();
    };

    divInput.appendChild(searchNext);
    var searchPrevious = document.createElement('button');
    searchPrevious.type = 'button';
    searchPrevious.title = 'Previous result (Shift+Enter)';
    searchPrevious.className = 'jsoneditor-previous';

    searchPrevious.onclick = function () {
      searchBox.previous();
    };

    divInput.appendChild(searchPrevious);
  }
  /**
   * Go to the next search result
   * @param {boolean} [focus]   If true, focus will be set to the next result
   *                            focus is false by default.
   */


  SearchBox_createClass(SearchBox, [{
    key: "next",
    value: function next(focus) {
      if (this.results) {
        var index = this.resultIndex !== null ? this.resultIndex + 1 : 0;

        if (index > this.results.length - 1) {
          index = 0;
        }

        this._setActiveResult(index, focus);
      }
    }
    /**
     * Go to the prevous search result
     * @param {boolean} [focus]   If true, focus will be set to the next result
     *                            focus is false by default.
     */

  }, {
    key: "previous",
    value: function previous(focus) {
      if (this.results) {
        var max = this.results.length - 1;
        var index = this.resultIndex !== null ? this.resultIndex - 1 : max;

        if (index < 0) {
          index = max;
        }

        this._setActiveResult(index, focus);
      }
    }
    /**
     * Set new value for the current active result
     * @param {Number} index
     * @param {boolean} [focus]   If true, focus will be set to the next result.
     *                            focus is false by default.
     * @private
     */

  }, {
    key: "_setActiveResult",
    value: function _setActiveResult(index, focus) {
      // de-activate current active result
      if (this.activeResult) {
        var prevNode = this.activeResult.node;
        var prevElem = this.activeResult.elem;

        if (prevElem === 'field') {
          delete prevNode.searchFieldActive;
        } else {
          delete prevNode.searchValueActive;
        }

        prevNode.updateDom();
      }

      if (!this.results || !this.results[index]) {
        // out of range, set to undefined
        this.resultIndex = undefined;
        this.activeResult = undefined;
        return;
      }

      this.resultIndex = index; // set new node active

      var node = this.results[this.resultIndex].node;
      var elem = this.results[this.resultIndex].elem;

      if (elem === 'field') {
        node.searchFieldActive = true;
      } else {
        node.searchValueActive = true;
      }

      this.activeResult = this.results[this.resultIndex];
      node.updateDom(); // TODO: not so nice that the focus is only set after the animation is finished

      node.scrollTo(function () {
        if (focus) {
          node.focus(elem);
        }
      });
    }
    /**
     * Cancel any running onDelayedSearch.
     * @private
     */

  }, {
    key: "_clearDelay",
    value: function _clearDelay() {
      if (this.timeout !== undefined) {
        clearTimeout(this.timeout);
        delete this.timeout;
      }
    }
    /**
     * Start a timer to execute a search after a short delay.
     * Used for reducing the number of searches while typing.
     * @param {Event} event
     * @private
     */

  }, {
    key: "_onDelayedSearch",
    value: function _onDelayedSearch(event) {
      // execute the search after a short delay (reduces the number of
      // search actions while typing in the search text box)
      this._clearDelay();

      var searchBox = this;
      this.timeout = setTimeout(function (event) {
        searchBox._onSearch();
      }, this.delay);
    }
    /**
     * Handle onSearch event
     * @param {boolean} [forceSearch]  If true, search will be executed again even
     *                                 when the search text is not changed.
     *                                 Default is false.
     * @private
     */

  }, {
    key: "_onSearch",
    value: function _onSearch(forceSearch) {
      this._clearDelay();

      var value = this.dom.search.value;
      var text = value.length > 0 ? value : undefined;

      if (text !== this.lastText || forceSearch) {
        // only search again when changed
        this.lastText = text;
        this.results = this.editor.search(text);
        var MAX_SEARCH_RESULTS = this.results[0] ? this.results[0].node.MAX_SEARCH_RESULTS : Infinity; // try to maintain the current active result if this is still part of the new search results

        var activeResultIndex = 0;

        if (this.activeResult) {
          for (var i = 0; i < this.results.length; i++) {
            if (this.results[i].node === this.activeResult.node) {
              activeResultIndex = i;
              break;
            }
          }
        }

        this._setActiveResult(activeResultIndex, false); // display search results


        if (text !== undefined) {
          var resultCount = this.results.length;

          if (resultCount === 0) {
            this.dom.results.innerHTML = 'no&nbsp;results';
          } else if (resultCount === 1) {
            this.dom.results.innerHTML = '1&nbsp;result';
          } else if (resultCount > MAX_SEARCH_RESULTS) {
            this.dom.results.innerHTML = MAX_SEARCH_RESULTS + '+&nbsp;results';
          } else {
            this.dom.results.innerHTML = resultCount + '&nbsp;results';
          }
        } else {
          this.dom.results.innerHTML = '';
        }
      }
    }
    /**
     * Handle onKeyDown event in the input box
     * @param {Event} event
     * @private
     */

  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(event) {
      var keynum = event.which;

      if (keynum === 27) {
        // ESC
        this.dom.search.value = ''; // clear search

        this._onSearch();

        event.preventDefault();
        event.stopPropagation();
      } else if (keynum === 13) {
        // Enter
        if (event.ctrlKey) {
          // force to search again
          this._onSearch(true);
        } else if (event.shiftKey) {
          // move to the previous search result
          this.previous();
        } else {
          // move to the next search result
          this.next();
        }

        event.preventDefault();
        event.stopPropagation();
      }
    }
    /**
     * Handle onKeyUp event in the input box
     * @param {Event} event
     * @private
     */

  }, {
    key: "_onKeyUp",
    value: function _onKeyUp(event) {
      var keynum = event.keyCode;

      if (keynum !== 27 && keynum !== 13) {
        // !show and !Enter
        this._onDelayedSearch(event); // For IE 9

      }
    }
    /**
     * Clear the search results
     */

  }, {
    key: "clear",
    value: function clear() {
      this.dom.search.value = '';

      this._onSearch();
    }
    /**
     * Refresh searchResults if there is a search value
     */

  }, {
    key: "forceSearch",
    value: function forceSearch() {
      this._onSearch(true);
    }
    /**
     * Test whether the search box value is empty
     * @returns {boolean} Returns true when empty.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.dom.search.value === '';
    }
    /**
     * Destroy the search box
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.editor = null;
      this.dom.container.removeChild(this.dom.wrapper);
      this.dom = null;
      this.results = null;
      this.activeResult = null;

      this._clearDelay();
    }
  }]);

  return SearchBox;
}();
// EXTERNAL MODULE: ./src/js/ContextMenu.js
var ContextMenu = __webpack_require__(3);

// EXTERNAL MODULE: ./src/js/i18n.js
var i18n = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/TreePath.js


function TreePath_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TreePath_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TreePath_createClass(Constructor, protoProps, staticProps) { if (protoProps) TreePath_defineProperties(Constructor.prototype, protoProps); if (staticProps) TreePath_defineProperties(Constructor, staticProps); return Constructor; }




/**
 * Creates a component that visualize path selection in tree based editors
 * @param {HTMLElement} container
 * @param {HTMLElement} root
 * @constructor
 */

var TreePath_TreePath =
/*#__PURE__*/
function () {
  function TreePath(container, root) {
    TreePath_classCallCheck(this, TreePath);

    if (container) {
      this.root = root;
      this.path = document.createElement('div');
      this.path.className = 'jsoneditor-treepath';
      this.path.setAttribute('tabindex', 0);
      this.contentMenuClicked = false;
      container.appendChild(this.path);
      this.reset();
    }
  }
  /**
   * Reset component to initial status
   */


  TreePath_createClass(TreePath, [{
    key: "reset",
    value: function reset() {
      this.path.innerHTML = Object(i18n["c" /* translate */])('selectNode');
    }
    /**
     * Renders the component UI according to a given path objects
     * @param {Array<{name: String, childs: Array}>} pathObjs a list of path objects
     *
     */

  }, {
    key: "setPath",
    value: function setPath(pathObjs) {
      var me = this;
      this.path.innerHTML = '';

      if (pathObjs && pathObjs.length) {
        pathObjs.forEach(function (pathObj, idx) {
          var pathEl = document.createElement('span');
          var sepEl;
          pathEl.className = 'jsoneditor-treepath-element';
          pathEl.innerText = pathObj.name;
          pathEl.onclick = _onSegmentClick.bind(me, pathObj);
          me.path.appendChild(pathEl);

          if (pathObj.children.length) {
            sepEl = document.createElement('span');
            sepEl.className = 'jsoneditor-treepath-seperator';
            sepEl.innerHTML = '&#9658;';

            sepEl.onclick = function () {
              me.contentMenuClicked = true;
              var items = [];
              pathObj.children.forEach(function (child) {
                items.push({
                  text: child.name,
                  className: 'jsoneditor-type-modes' + (pathObjs[idx + 1] + 1 && pathObjs[idx + 1].name === child.name ? ' jsoneditor-selected' : ''),
                  click: _onContextMenuItemClick.bind(me, pathObj, child.name)
                });
              });
              var menu = new ContextMenu["a" /* ContextMenu */](items);
              menu.show(sepEl, me.root, true);
            };

            me.path.appendChild(sepEl);
          }

          if (idx === pathObjs.length - 1) {
            var leftRectPos = (sepEl || pathEl).getBoundingClientRect().right;

            if (me.path.offsetWidth < leftRectPos) {
              me.path.scrollLeft = leftRectPos;
            }

            if (me.path.scrollLeft) {
              var showAllBtn = document.createElement('span');
              showAllBtn.className = 'jsoneditor-treepath-show-all-btn';
              showAllBtn.title = 'show all path';
              showAllBtn.innerHTML = '...';
              showAllBtn.onclick = _onShowAllClick.bind(me, pathObjs);
              me.path.insertBefore(showAllBtn, me.path.firstChild);
            }
          }
        });
      }

      function _onShowAllClick(pathObjs) {
        me.contentMenuClicked = false;
        Object(util["addClassName"])(me.path, 'show-all');
        me.path.style.width = me.path.parentNode.getBoundingClientRect().width - 10 + 'px';

        me.path.onblur = function () {
          if (me.contentMenuClicked) {
            me.contentMenuClicked = false;
            me.path.focus();
            return;
          }

          Object(util["removeClassName"])(me.path, 'show-all');
          me.path.onblur = undefined;
          me.path.style.width = '';
          me.setPath(pathObjs);
        };
      }

      function _onSegmentClick(pathObj) {
        if (this.selectionCallback) {
          this.selectionCallback(pathObj);
        }
      }

      function _onContextMenuItemClick(pathObj, selection) {
        if (this.contextMenuCallback) {
          this.contextMenuCallback(pathObj, selection);
        }
      }
    }
    /**
     * set a callback function for selection of path section
     * @param {Function} callback function to invoke when section is selected
     */

  }, {
    key: "onSectionSelected",
    value: function onSectionSelected(callback) {
      if (typeof callback === 'function') {
        this.selectionCallback = callback;
      }
    }
    /**
     * set a callback function for selection of path section
     * @param {Function} callback function to invoke when section is selected
     */

  }, {
    key: "onContextMenuItemSelected",
    value: function onContextMenuItemSelected(callback) {
      if (typeof callback === 'function') {
        this.contextMenuCallback = callback;
      }
    }
  }]);

  return TreePath;
}();
// EXTERNAL MODULE: ./node_modules/jmespath/jmespath.js
var jmespath = __webpack_require__(4);
var jmespath_default = /*#__PURE__*/__webpack_require__.n(jmespath);

// EXTERNAL MODULE: ./node_modules/javascript-natural-sort/naturalSort.js
var naturalSort = __webpack_require__(9);
var naturalSort_default = /*#__PURE__*/__webpack_require__.n(naturalSort);

// EXTERNAL MODULE: ./src/js/createAbsoluteAnchor.js
var createAbsoluteAnchor = __webpack_require__(10);

// CONCATENATED MODULE: ./src/js/appendNodeFactory.js





/**
 * A factory function to create an AppendNode, which depends on a Node
 * @param {Node} Node
 */

function appendNodeFactory(Node) {
  /**
   * @constructor AppendNode
   * @extends Node
   * @param {TreeEditor} editor
   * Create a new AppendNode. This is a special node which is created at the
   * end of the list with childs for an object or array
   */
  function AppendNode(editor) {
    /** @type {TreeEditor} */
    this.editor = editor;
    this.dom = {};
  }

  AppendNode.prototype = new Node();
  /**
   * Return a table row with an append button.
   * @return {Element} dom   TR element
   */

  AppendNode.prototype.getDom = function () {
    // TODO: implement a new solution for the append node
    var dom = this.dom;

    if (dom.tr) {
      return dom.tr;
    }

    this._updateEditability(); // a row for the append button


    var trAppend = document.createElement('tr');
    trAppend.className = 'jsoneditor-append';
    trAppend.node = this;
    dom.tr = trAppend; // TODO: consistent naming

    if (this.editor.options.mode === 'tree') {
      // a cell for the dragarea column
      dom.tdDrag = document.createElement('td'); // create context menu

      var tdMenu = document.createElement('td');
      dom.tdMenu = tdMenu;
      var menu = document.createElement('button');
      menu.type = 'button';
      menu.className = 'jsoneditor-button jsoneditor-contextmenu';
      menu.title = 'Click to open the actions menu (Ctrl+M)';
      dom.menu = menu;
      tdMenu.appendChild(dom.menu);
    } // a cell for the contents (showing text 'empty')


    var tdAppend = document.createElement('td');
    var domText = document.createElement('div');
    domText.innerHTML = '(' + Object(i18n["c" /* translate */])('empty') + ')';
    domText.className = 'jsoneditor-readonly';
    tdAppend.appendChild(domText);
    dom.td = tdAppend;
    dom.text = domText;
    this.updateDom();
    return trAppend;
  };
  /**
   * Append node doesn't have a path
   * @returns {null}
   */


  AppendNode.prototype.getPath = function () {
    return null;
  };
  /**
   * Append node doesn't have an index
   * @returns {null}
   */


  AppendNode.prototype.getIndex = function () {
    return null;
  };
  /**
   * Update the HTML dom of the Node
   */


  AppendNode.prototype.updateDom = function (options) {
    var dom = this.dom;
    var tdAppend = dom.td;

    if (tdAppend) {
      tdAppend.style.paddingLeft = this.getLevel() * 24 + 26 + 'px'; // TODO: not so nice hard coded offset
    }

    var domText = dom.text;

    if (domText) {
      domText.innerHTML = '(' + Object(i18n["c" /* translate */])('empty') + ' ' + this.parent.type + ')';
    } // attach or detach the contents of the append node:
    // hide when the parent has childs, show when the parent has no childs


    var trAppend = dom.tr;

    if (!this.isVisible()) {
      if (dom.tr.firstChild) {
        if (dom.tdDrag) {
          trAppend.removeChild(dom.tdDrag);
        }

        if (dom.tdMenu) {
          trAppend.removeChild(dom.tdMenu);
        }

        trAppend.removeChild(tdAppend);
      }
    } else {
      if (!dom.tr.firstChild) {
        if (dom.tdDrag) {
          trAppend.appendChild(dom.tdDrag);
        }

        if (dom.tdMenu) {
          trAppend.appendChild(dom.tdMenu);
        }

        trAppend.appendChild(tdAppend);
      }
    }
  };
  /**
   * Check whether the AppendNode is currently visible.
   * the AppendNode is visible when its parent has no childs (i.e. is empty).
   * @return {boolean} isVisible
   */


  AppendNode.prototype.isVisible = function () {
    return this.parent.childs.length === 0;
  };
  /**
   * Show a contextmenu for this node
   * @param {HTMLElement} anchor   The element to attach the menu to.
   * @param {function} [onClose]   Callback method called when the context menu
   *                               is being closed.
   */


  AppendNode.prototype.showContextMenu = function (anchor, onClose) {
    var node = this;
    var titles = Node.TYPE_TITLES;
    var appendSubmenu = [{
      text: Object(i18n["c" /* translate */])('auto'),
      className: 'jsoneditor-type-auto',
      title: titles.auto,
      click: function click() {
        node._onAppend('', '', 'auto');
      }
    }, {
      text: Object(i18n["c" /* translate */])('array'),
      className: 'jsoneditor-type-array',
      title: titles.array,
      click: function click() {
        node._onAppend('', []);
      }
    }, {
      text: Object(i18n["c" /* translate */])('object'),
      className: 'jsoneditor-type-object',
      title: titles.object,
      click: function click() {
        node._onAppend('', {});
      }
    }, {
      text: Object(i18n["c" /* translate */])('string'),
      className: 'jsoneditor-type-string',
      title: titles.string,
      click: function click() {
        node._onAppend('', '', 'string');
      }
    }];
    node.addTemplates(appendSubmenu, true);
    var items = [// create append button
    {
      text: Object(i18n["c" /* translate */])('appendText'),
      title: Object(i18n["c" /* translate */])('appendTitleAuto'),
      submenuTitle: Object(i18n["c" /* translate */])('appendSubmenuTitle'),
      className: 'jsoneditor-insert',
      click: function click() {
        node._onAppend('', '', 'auto');
      },
      submenu: appendSubmenu
    }];

    if (this.editor.options.onCreateMenu) {
      var path = node.parent.getPath();
      items = this.editor.options.onCreateMenu(items, {
        type: 'append',
        path: path,
        paths: [path]
      });
    }

    var menu = new ContextMenu["a" /* ContextMenu */](items, {
      close: onClose
    });
    menu.show(anchor, this.editor.frame);
  };
  /**
   * Handle an event. The event is caught centrally by the editor
   * @param {Event} event
   */


  AppendNode.prototype.onEvent = function (event) {
    var type = event.type;
    var target = event.target || event.srcElement;
    var dom = this.dom; // highlight the append nodes parent

    var menu = dom.menu;

    if (target === menu) {
      if (type === 'mouseover') {
        this.editor.highlighter.highlight(this.parent);
      } else if (type === 'mouseout') {
        this.editor.highlighter.unhighlight();
      }
    } // context menu events


    if (type === 'click' && target === dom.menu) {
      var highlighter = this.editor.highlighter;
      highlighter.highlight(this.parent);
      highlighter.lock();
      Object(util["addClassName"])(dom.menu, 'jsoneditor-selected');
      this.showContextMenu(dom.menu, function () {
        Object(util["removeClassName"])(dom.menu, 'jsoneditor-selected');
        highlighter.unlock();
        highlighter.unhighlight();
      });
    }

    if (type === 'keydown') {
      this.onKeyDown(event);
    }
  };

  return AppendNode;
}
// CONCATENATED MODULE: ./src/js/showMoreNodeFactory.js



/**
 * A factory function to create an ShowMoreNode, which depends on a Node
 * @param {function} Node
 */

function showMoreNodeFactory(Node) {
  /**
   * @constructor ShowMoreNode
   * @extends Node
   * @param {TreeEditor} editor
   * @param {Node} parent
   * Create a new ShowMoreNode. This is a special node which is created
   * for arrays or objects having more than 100 items
   */
  function ShowMoreNode(editor, parent) {
    /** @type {TreeEditor} */
    this.editor = editor;
    this.parent = parent;
    this.dom = {};
  }

  ShowMoreNode.prototype = new Node();
  /**
   * Return a table row with an append button.
   * @return {Element} dom   TR element
   */

  ShowMoreNode.prototype.getDom = function () {
    if (this.dom.tr) {
      return this.dom.tr;
    }

    this._updateEditability(); // display "show more"


    if (!this.dom.tr) {
      var me = this;
      var parent = this.parent;
      var showMoreButton = document.createElement('a');
      showMoreButton.appendChild(document.createTextNode(Object(i18n["c" /* translate */])('showMore')));
      showMoreButton.href = '#';

      showMoreButton.onclick = function (event) {
        // TODO: use callback instead of accessing a method of the parent
        parent.visibleChilds = Math.floor(parent.visibleChilds / parent.getMaxVisibleChilds() + 1) * parent.getMaxVisibleChilds();
        me.updateDom();
        parent.showChilds();
        event.preventDefault();
        return false;
      };

      var showAllButton = document.createElement('a');
      showAllButton.appendChild(document.createTextNode(Object(i18n["c" /* translate */])('showAll')));
      showAllButton.href = '#';

      showAllButton.onclick = function (event) {
        // TODO: use callback instead of accessing a method of the parent
        parent.visibleChilds = Infinity;
        me.updateDom();
        parent.showChilds();
        event.preventDefault();
        return false;
      };

      var moreContents = document.createElement('div');
      var moreText = document.createTextNode(this._getShowMoreText());
      moreContents.className = 'jsoneditor-show-more';
      moreContents.appendChild(moreText);
      moreContents.appendChild(showMoreButton);
      moreContents.appendChild(document.createTextNode('. '));
      moreContents.appendChild(showAllButton);
      moreContents.appendChild(document.createTextNode('. '));
      var tdContents = document.createElement('td');
      tdContents.appendChild(moreContents);
      var moreTr = document.createElement('tr');

      if (this.editor.options.mode === 'tree') {
        moreTr.appendChild(document.createElement('td'));
        moreTr.appendChild(document.createElement('td'));
      }

      moreTr.appendChild(tdContents);
      moreTr.className = 'jsoneditor-show-more';
      this.dom.tr = moreTr;
      this.dom.moreContents = moreContents;
      this.dom.moreText = moreText;
    }

    this.updateDom();
    return this.dom.tr;
  };
  /**
   * Update the HTML dom of the Node
   */


  ShowMoreNode.prototype.updateDom = function (options) {
    if (this.isVisible()) {
      // attach to the right child node (the first non-visible child)
      this.dom.tr.node = this.parent.childs[this.parent.visibleChilds];

      if (!this.dom.tr.parentNode) {
        var nextTr = this.parent._getNextTr();

        if (nextTr) {
          nextTr.parentNode.insertBefore(this.dom.tr, nextTr);
        }
      } // update the counts in the text


      this.dom.moreText.nodeValue = this._getShowMoreText(); // update left margin

      this.dom.moreContents.style.marginLeft = (this.getLevel() + 1) * 24 + 'px';
    } else {
      if (this.dom.tr && this.dom.tr.parentNode) {
        this.dom.tr.parentNode.removeChild(this.dom.tr);
      }
    }
  };

  ShowMoreNode.prototype._getShowMoreText = function () {
    return Object(i18n["c" /* translate */])('showMoreStatus', {
      visibleChilds: this.parent.visibleChilds,
      totalChilds: this.parent.childs.length
    }) + ' ';
  };
  /**
   * Check whether the ShowMoreNode is currently visible.
   * the ShowMoreNode is visible when it's parent has more childs than
   * the current visibleChilds
   * @return {boolean} isVisible
   */


  ShowMoreNode.prototype.isVisible = function () {
    return this.parent.expanded && this.parent.childs.length > this.parent.visibleChilds;
  };
  /**
   * Handle an event. The event is caught centrally by the editor
   * @param {Event} event
   */


  ShowMoreNode.prototype.onEvent = function (event) {
    var type = event.type;

    if (type === 'keydown') {
      this.onKeyDown(event);
    }
  };

  return ShowMoreNode;
}
// EXTERNAL MODULE: ./src/js/showSortModal.js
var js_showSortModal = __webpack_require__(5);

// EXTERNAL MODULE: ./src/js/showTransformModal.js + 1 modules
var js_showTransformModal = __webpack_require__(7);

// EXTERNAL MODULE: ./src/js/constants.js
var constants = __webpack_require__(2);

// CONCATENATED MODULE: ./src/js/Node.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Node_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Node_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Node_createClass(Constructor, protoProps, staticProps) { if (protoProps) Node_defineProperties(Constructor.prototype, protoProps); if (staticProps) Node_defineProperties(Constructor, staticProps); return Constructor; }












var YEAR_2000 = 946684800000;
/**
 * @constructor Node
 * Create a new Node
 * @param {./treemode} editor
 * @param {Object} [params] Can contain parameters:
 *                          {string}  field
 *                          {boolean} fieldEditable
 *                          {*}       value
 *                          {String}  type  Can have values 'auto', 'array',
 *                                          'object', or 'string'.
 */

var Node_Node =
/*#__PURE__*/
function () {
  function Node(editor, params) {
    Node_classCallCheck(this, Node);

    /** @type {./treemode} */
    this.editor = editor;
    this.dom = {};
    this.expanded = false;

    if (params && params instanceof Object) {
      this.setField(params.field, params.fieldEditable);

      if ('value' in params) {
        this.setValue(params.value, params.type);
      }

      if ('internalValue' in params) {
        this.setInternalValue(params.internalValue);
      }
    } else {
      this.setField('');
      this.setValue(null);
    }

    this._debouncedOnChangeValue = Object(util["debounce"])(this._onChangeValue.bind(this), Node.prototype.DEBOUNCE_INTERVAL);
    this._debouncedOnChangeField = Object(util["debounce"])(this._onChangeField.bind(this), Node.prototype.DEBOUNCE_INTERVAL); // starting value for visible children

    this.visibleChilds = this.getMaxVisibleChilds();
  }

  Node_createClass(Node, [{
    key: "getMaxVisibleChilds",
    value: function getMaxVisibleChilds() {
      return this.editor && this.editor.options && this.editor.options.maxVisibleChilds ? this.editor.options.maxVisibleChilds : DEFAULT_MAX_VISIBLE_CHILDS;
    }
    /**
     * Determine whether the field and/or value of this node are editable
     * @private
     */

  }, {
    key: "_updateEditability",
    value: function _updateEditability() {
      this.editable = {
        field: true,
        value: true
      };

      if (this.editor) {
        this.editable.field = this.editor.options.mode === 'tree';
        this.editable.value = this.editor.options.mode !== 'view';

        if ((this.editor.options.mode === 'tree' || this.editor.options.mode === 'form') && typeof this.editor.options.onEditable === 'function') {
          var editable = this.editor.options.onEditable({
            field: this.field,
            value: this.value,
            path: this.getPath()
          });

          if (typeof editable === 'boolean') {
            this.editable.field = editable;
            this.editable.value = editable;
          } else {
            if (typeof editable.field === 'boolean') this.editable.field = editable.field;
            if (typeof editable.value === 'boolean') this.editable.value = editable.value;
          }
        }
      }
    }
    /**
     * Get the path of this node
     * @return {{string|number}[]} Array containing the path to this node.
     * Element is a number if is the index of an array, a string otherwise.
     */

  }, {
    key: "getPath",
    value: function getPath() {
      var node = this;
      var path = [];

      while (node) {
        var field = node.getName();

        if (field !== undefined) {
          path.unshift(field);
        }

        node = node.parent;
      }

      return path;
    }
    /**
     * Get the internal path of this node, a list with the child indexes.
     * @return {String[]} Array containing the internal path to this node
     */

  }, {
    key: "getInternalPath",
    value: function getInternalPath() {
      var node = this;
      var internalPath = [];

      while (node) {
        if (node.parent) {
          internalPath.unshift(node.getIndex());
        }

        node = node.parent;
      }

      return internalPath;
    }
    /**
     * Get node serializable name
     * @returns {String|Number}
     */

  }, {
    key: "getName",
    value: function getName() {
      return !this.parent ? undefined // do not add an (optional) field name of the root node
      : this.parent.type !== 'array' ? this.field : this.index;
    }
    /**
     * Find child node by serializable path
     * @param {Array<String>} path
     */

  }, {
    key: "findNodeByPath",
    value: function findNodeByPath(path) {
      if (!path) {
        return;
      }

      if (path.length === 0) {
        return this;
      }

      if (path.length && this.childs && this.childs.length) {
        for (var i = 0; i < this.childs.length; ++i) {
          if ('' + path[0] === '' + this.childs[i].getName()) {
            return this.childs[i].findNodeByPath(path.slice(1));
          }
        }
      }
    }
    /**
     * Find child node by an internal path: the indexes of the childs nodes
     * @param {Array<String>} internalPath
     * @return {Node | undefined} Returns the node if the path exists.
     *                            Returns undefined otherwise.
     */

  }, {
    key: "findNodeByInternalPath",
    value: function findNodeByInternalPath(internalPath) {
      if (!internalPath) {
        return undefined;
      }

      var node = this;

      for (var i = 0; i < internalPath.length && node; i++) {
        var childIndex = internalPath[i];
        node = node.childs[childIndex];
      }

      return node;
    }
    /**
     * @typedef {{value: String|Object|Number|Boolean, path: Array.<String|Number>}} SerializableNode
     *
     * Returns serializable representation for the node
     * @return {SerializableNode}
     */

  }, {
    key: "serialize",
    value: function serialize() {
      return {
        value: this.getValue(),
        path: this.getPath()
      };
    }
    /**
     * Find a Node from a JSON path like '.items[3].name'
     * @param {string} jsonPath
     * @return {Node | null} Returns the Node when found, returns null if not found
     */

  }, {
    key: "findNode",
    value: function findNode(jsonPath) {
      var path = Object(util["parsePath"])(jsonPath);
      var node = this;

      var _loop = function _loop() {
        var prop = path.shift();

        if (typeof prop === 'number') {
          if (node.type !== 'array') {
            throw new Error('Cannot get child node at index ' + prop + ': node is no array');
          }

          node = node.childs[prop];
        } else {
          // string
          if (node.type !== 'object') {
            throw new Error('Cannot get child node ' + prop + ': node is no object');
          }

          node = node.childs.filter(function (child) {
            return child.field === prop;
          })[0];
        }
      };

      while (node && path.length > 0) {
        _loop();
      }

      return node;
    }
    /**
     * Find all parents of this node. The parents are ordered from root node towards
     * the original node.
     * @return {Array.<Node>}
     */

  }, {
    key: "findParents",
    value: function findParents() {
      var parents = [];
      var parent = this.parent;

      while (parent) {
        parents.unshift(parent);
        parent = parent.parent;
      }

      return parents;
    }
    /**
     *
     * @param {{dataPath: string, keyword: string, message: string, params: Object, schemaPath: string} | null} error
     * @param {Node} [child]  When this is the error of a parent node, pointing
     *                        to an invalid child node, the child node itself
     *                        can be provided. If provided, clicking the error
     *                        icon will set focus to the invalid child node.
     */

  }, {
    key: "setError",
    value: function setError(error, child) {
      this.error = error;
      this.errorChild = child;

      if (this.dom && this.dom.tr) {
        this.updateError();
      }
    }
    /**
     * Render the error
     */

  }, {
    key: "updateError",
    value: function updateError() {
      var _this = this;

      var error = this.fieldError || this.valueError || this.error;
      var tdError = this.dom.tdError;

      if (error && this.dom && this.dom.tr) {
        Object(util["addClassName"])(this.dom.tr, 'jsoneditor-validation-error');

        if (!tdError) {
          tdError = document.createElement('td');
          this.dom.tdError = tdError;
          this.dom.tdValue.parentNode.appendChild(tdError);
        }

        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'jsoneditor-button jsoneditor-schema-error';

        var destroy = function destroy() {
          if (_this.dom.popupAnchor) {
            _this.dom.popupAnchor.destroy(); // this will trigger the onDestroy callback

          }
        };

        var onDestroy = function onDestroy() {
          delete _this.dom.popupAnchor;
        };

        var createPopup = function createPopup(destroyOnMouseOut) {
          var frame = _this.editor.frame;
          _this.dom.popupAnchor = Object(createAbsoluteAnchor["a" /* createAbsoluteAnchor */])(button, frame, onDestroy, destroyOnMouseOut);
          var popupWidth = 200; // must correspond to what's configured in the CSS

          var buttonRect = button.getBoundingClientRect();
          var frameRect = frame.getBoundingClientRect();
          var position = frameRect.width - buttonRect.x > popupWidth / 2 + 20 ? 'jsoneditor-above' : 'jsoneditor-left';
          var popover = document.createElement('div');
          popover.className = 'jsoneditor-popover ' + position;
          popover.appendChild(document.createTextNode(error.message));

          _this.dom.popupAnchor.appendChild(popover);
        };

        button.onmouseover = function () {
          if (!_this.dom.popupAnchor) {
            createPopup(true);
          }
        };

        button.onfocus = function () {
          destroy();
          createPopup(false);
        };

        button.onblur = function () {
          destroy();
        }; // when clicking the error icon, expand all nodes towards the invalid
        // child node, and set focus to the child node


        var child = this.errorChild;

        if (child) {
          button.onclick = function showInvalidNode() {
            child.findParents().forEach(function (parent) {
              parent.expand(false);
            });
            child.scrollTo(function () {
              child.focus();
            });
          };
        } // apply the error message to the node


        while (tdError.firstChild) {
          tdError.removeChild(tdError.firstChild);
        }

        tdError.appendChild(button);
      } else {
        if (this.dom.tr) {
          Object(util["removeClassName"])(this.dom.tr, 'jsoneditor-validation-error');
        }

        if (tdError) {
          this.dom.tdError.parentNode.removeChild(this.dom.tdError);
          delete this.dom.tdError;
        }
      }
    }
    /**
     * Get the index of this node: the index in the list of childs where this
     * node is part of
     * @return {number | null} Returns the index, or null if this is the root node
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      if (this.parent) {
        var index = this.parent.childs.indexOf(this);
        return index !== -1 ? index : null;
      } else {
        return -1;
      }
    }
    /**
     * Set parent node
     * @param {Node} parent
     */

  }, {
    key: "setParent",
    value: function setParent(parent) {
      this.parent = parent;
    }
    /**
     * Set field
     * @param {String}  field
     * @param {boolean} [fieldEditable]
     */

  }, {
    key: "setField",
    value: function setField(field, fieldEditable) {
      this.field = field;
      this.previousField = field;
      this.fieldEditable = fieldEditable === true;
    }
    /**
     * Get field
     * @return {String}
     */

  }, {
    key: "getField",
    value: function getField() {
      if (this.field === undefined) {
        this._getDomField();
      }

      return this.field;
    }
    /**
     * Set value. Value is a JSON structure or an element String, Boolean, etc.
     * @param {*} value
     * @param {String} [type]  Specify the type of the value. Can be 'auto',
     *                         'array', 'object', or 'string'
     */

  }, {
    key: "setValue",
    value: function setValue(value, type) {
      var childValue, child, visible;
      var i, j;
      var notUpdateDom = false;
      var previousChilds = this.childs;
      this.type = this._getType(value); // check if type corresponds with the provided type

      if (type && type !== this.type) {
        if (type === 'string' && this.type === 'auto') {
          this.type = type;
        } else {
          throw new Error('Type mismatch: ' + 'cannot cast value of type "' + this.type + ' to the specified type "' + type + '"');
        }
      }

      if (this.type === 'array') {
        // array
        if (!this.childs) {
          this.childs = [];
        }

        for (i = 0; i < value.length; i++) {
          childValue = value[i];

          if (childValue !== undefined && !(childValue instanceof Function)) {
            if (i < this.childs.length) {
              // reuse existing child, keep its state
              child = this.childs[i];
              child.fieldEditable = false;
              child.index = i;
              child.setValue(childValue);
            } else {
              // create a new child
              child = new Node(this.editor, {
                value: childValue
              });
              visible = i < this.getMaxVisibleChilds();
              this.appendChild(child, visible, notUpdateDom);
            }
          }
        } // cleanup redundant childs
        // we loop backward to prevent issues with shifting index numbers


        for (j = this.childs.length; j >= value.length; j--) {
          this.removeChild(this.childs[j], notUpdateDom);
        }
      } else if (this.type === 'object') {
        // object
        if (!this.childs) {
          this.childs = [];
        } // cleanup redundant childs
        // we loop backward to prevent issues with shifting index numbers


        for (j = this.childs.length - 1; j >= 0; j--) {
          if (!Node_hasOwnProperty(value, this.childs[j].field)) {
            this.removeChild(this.childs[j], notUpdateDom);
          }
        }

        i = 0;

        for (var childField in value) {
          if (Node_hasOwnProperty(value, childField)) {
            childValue = value[childField];

            if (childValue !== undefined && !(childValue instanceof Function)) {
              child = this.findChildByProperty(childField);

              if (child) {
                // reuse existing child, keep its state
                child.setField(childField, true);
                child.setValue(childValue);
              } else {
                // create a new child
                child = new Node(this.editor, {
                  field: childField,
                  value: childValue
                });
                visible = i < this.getMaxVisibleChilds();
                this.appendChild(child, visible, notUpdateDom);
              }
            }

            i++;
          }
        }

        this.value = ''; // sort object keys

        if (this.editor.options.sortObjectKeys === true) {
          this.sort([], 'asc');
        }
      } else {
        // value
        this.hideChilds();
        delete this.append;
        delete this.showMore;
        delete this.expanded;
        delete this.childs;
        this.value = value;
      } // recreate the DOM if switching from an object/array to auto/string or vice versa
      // needed to recreated the expand button for example


      if (Array.isArray(previousChilds) !== Array.isArray(this.childs)) {
        this.recreateDom();
      }

      this.updateDom({
        updateIndexes: true
      });
      this.previousValue = this.value; // used only to check for changes in DOM vs JS model
    }
    /**
     * Set internal value
     * @param {*} internalValue  Internal value structure keeping type,
     *                           order and duplicates in objects
     */

  }, {
    key: "setInternalValue",
    value: function setInternalValue(internalValue) {
      var childValue, child, visible;
      var i, j;
      var notUpdateDom = false;
      var previousChilds = this.childs;
      this.type = internalValue.type;

      if (internalValue.type === 'array') {
        // array
        if (!this.childs) {
          this.childs = [];
        }

        for (i = 0; i < internalValue.childs.length; i++) {
          childValue = internalValue.childs[i];

          if (childValue !== undefined && !(childValue instanceof Function)) {
            if (i < this.childs.length) {
              // reuse existing child, keep its state
              child = this.childs[i];
              child.fieldEditable = false;
              child.index = i;
              child.setInternalValue(childValue);
            } else {
              // create a new child
              child = new Node(this.editor, {
                internalValue: childValue
              });
              visible = i < this.getMaxVisibleChilds();
              this.appendChild(child, visible, notUpdateDom);
            }
          }
        } // cleanup redundant childs
        // we loop backward to prevent issues with shifting index numbers


        for (j = this.childs.length; j >= internalValue.childs.length; j--) {
          this.removeChild(this.childs[j], notUpdateDom);
        }
      } else if (internalValue.type === 'object') {
        // object
        if (!this.childs) {
          this.childs = [];
        }

        for (i = 0; i < internalValue.childs.length; i++) {
          childValue = internalValue.childs[i];

          if (childValue !== undefined && !(childValue instanceof Function)) {
            if (i < this.childs.length) {
              // reuse existing child, keep its state
              child = this.childs[i];
              delete child.index;
              child.setField(childValue.field, true);
              child.setInternalValue(childValue.value);
            } else {
              // create a new child
              child = new Node(this.editor, {
                field: childValue.field,
                internalValue: childValue.value
              });
              visible = i < this.getMaxVisibleChilds();
              this.appendChild(child, visible, notUpdateDom);
            }
          }
        } // cleanup redundant childs
        // we loop backward to prevent issues with shifting index numbers


        for (j = this.childs.length; j >= internalValue.childs.length; j--) {
          this.removeChild(this.childs[j], notUpdateDom);
        }
      } else {
        // value
        this.hideChilds();
        delete this.append;
        delete this.showMore;
        delete this.expanded;
        delete this.childs;
        this.value = internalValue.value;
      } // recreate the DOM if switching from an object/array to auto/string or vice versa
      // needed to recreated the expand button for example


      if (Array.isArray(previousChilds) !== Array.isArray(this.childs)) {
        this.recreateDom();
      }

      this.updateDom({
        updateIndexes: true
      });
      this.previousValue = this.value; // used only to check for changes in DOM vs JS model
    }
    /**
     * Remove the DOM of this node and it's childs and recreate it again
     */

  }, {
    key: "recreateDom",
    value: function recreateDom() {
      if (this.dom && this.dom.tr && this.dom.tr.parentNode) {
        var domAnchor = this._detachFromDom();

        this.clearDom();

        this._attachToDom(domAnchor);
      } else {
        this.clearDom();
      }
    }
    /**
     * Get value. Value is a JSON structure
     * @return {*} value
     */

  }, {
    key: "getValue",
    value: function getValue() {
      if (this.type === 'array') {
        var arr = [];
        this.childs.forEach(function (child) {
          arr.push(child.getValue());
        });
        return arr;
      } else if (this.type === 'object') {
        var obj = {};
        this.childs.forEach(function (child) {
          obj[child.getField()] = child.getValue();
        });
        return obj;
      } else {
        if (this.value === undefined) {
          this._getDomValue();
        }

        return this.value;
      }
    }
    /**
     * Get internal value, a structure which maintains ordering and duplicates in objects
     * @return {*} value
     */

  }, {
    key: "getInternalValue",
    value: function getInternalValue() {
      if (this.type === 'array') {
        return {
          type: this.type,
          childs: this.childs.map(function (child) {
            return child.getInternalValue();
          })
        };
      } else if (this.type === 'object') {
        return {
          type: this.type,
          childs: this.childs.map(function (child) {
            return {
              field: child.getField(),
              value: child.getInternalValue()
            };
          })
        };
      } else {
        if (this.value === undefined) {
          this._getDomValue();
        }

        return {
          type: this.type,
          value: this.value
        };
      }
    }
    /**
     * Get the nesting level of this node
     * @return {Number} level
     */

  }, {
    key: "getLevel",
    value: function getLevel() {
      return this.parent ? this.parent.getLevel() + 1 : 0;
    }
    /**
     * Get jsonpath of the current node
     * @return {Node[]} Returns an array with nodes
     */

  }, {
    key: "getNodePath",
    value: function getNodePath() {
      var path = this.parent ? this.parent.getNodePath() : [];
      path.push(this);
      return path;
    }
    /**
     * Create a clone of a node
     * The complete state of a clone is copied, including whether it is expanded or
     * not. The DOM elements are not cloned.
     * @return {Node} clone
     */

  }, {
    key: "clone",
    value: function clone() {
      var clone = new Node(this.editor);
      clone.type = this.type;
      clone.field = this.field;
      clone.fieldInnerText = this.fieldInnerText;
      clone.fieldEditable = this.fieldEditable;
      clone.previousField = this.previousField;
      clone.value = this.value;
      clone.valueInnerText = this.valueInnerText;
      clone.previousValue = this.previousValue;
      clone.expanded = this.expanded;
      clone.visibleChilds = this.visibleChilds;

      if (this.childs) {
        // an object or array
        var cloneChilds = [];
        this.childs.forEach(function (child) {
          var childClone = child.clone();
          childClone.setParent(clone);
          cloneChilds.push(childClone);
        });
        clone.childs = cloneChilds;
      } else {
        // a value
        clone.childs = undefined;
      }

      return clone;
    }
    /**
     * Expand this node and optionally its childs.
     * @param {boolean} [recurse] Optional recursion, true by default. When
     *                            true, all childs will be expanded recursively
     */

  }, {
    key: "expand",
    value: function expand(recurse) {
      if (!this.childs) {
        return;
      } // set this node expanded


      this.expanded = true;

      if (this.dom.expand) {
        this.dom.expand.className = 'jsoneditor-button jsoneditor-expanded';
      }

      this.showChilds();

      if (recurse !== false) {
        this.childs.forEach(function (child) {
          child.expand(recurse);
        });
      }
    }
    /**
     * Collapse this node and optionally its childs.
     * @param {boolean} [recurse] Optional recursion, true by default. When
     *                            true, all childs will be collapsed recursively
     */

  }, {
    key: "collapse",
    value: function collapse(recurse) {
      if (!this.childs) {
        return;
      }

      this.hideChilds(); // collapse childs in case of recurse

      if (recurse !== false) {
        this.childs.forEach(function (child) {
          child.collapse(recurse);
        });
      } // make this node collapsed


      if (this.dom.expand) {
        this.dom.expand.className = 'jsoneditor-button jsoneditor-collapsed';
      }

      this.expanded = false;
    }
    /**
     * Recursively show all childs when they are expanded
     */

  }, {
    key: "showChilds",
    value: function showChilds() {
      var childs = this.childs;

      if (!childs) {
        return;
      }

      if (!this.expanded) {
        return;
      }

      var tr = this.dom.tr;
      var nextTr;
      var table = tr ? tr.parentNode : undefined;

      if (table) {
        // show row with append button
        var append = this.getAppendDom();

        if (!append.parentNode) {
          nextTr = tr.nextSibling;

          if (nextTr) {
            table.insertBefore(append, nextTr);
          } else {
            table.appendChild(append);
          }
        } // show childs


        var iMax = Math.min(this.childs.length, this.visibleChilds);
        nextTr = this._getNextTr();

        for (var i = 0; i < iMax; i++) {
          var child = this.childs[i];

          if (!child.getDom().parentNode) {
            table.insertBefore(child.getDom(), nextTr);
          }

          child.showChilds();
        } // show "show more childs" if limited


        var showMore = this.getShowMoreDom();
        nextTr = this._getNextTr();

        if (!showMore.parentNode) {
          table.insertBefore(showMore, nextTr);
        }

        this.showMore.updateDom(); // to update the counter
      }
    }
  }, {
    key: "_getNextTr",
    value: function _getNextTr() {
      if (this.showMore && this.showMore.getDom().parentNode) {
        return this.showMore.getDom();
      }

      if (this.append && this.append.getDom().parentNode) {
        return this.append.getDom();
      }
    }
    /**
     * Hide the node with all its childs
     * @param {{resetVisibleChilds: boolean}} [options]
     */

  }, {
    key: "hide",
    value: function hide(options) {
      var tr = this.dom.tr;
      var table = tr ? tr.parentNode : undefined;

      if (table) {
        table.removeChild(tr);
      }

      if (this.dom.popupAnchor) {
        this.dom.popupAnchor.destroy();
      }

      this.hideChilds(options);
    }
    /**
     * Recursively hide all childs
     * @param {{resetVisibleChilds: boolean}} [options]
     */

  }, {
    key: "hideChilds",
    value: function hideChilds(options) {
      var childs = this.childs;

      if (!childs) {
        return;
      }

      if (!this.expanded) {
        return;
      } // hide append row


      var append = this.getAppendDom();

      if (append.parentNode) {
        append.parentNode.removeChild(append);
      } // hide childs


      this.childs.forEach(function (child) {
        child.hide();
      }); // hide "show more" row

      var showMore = this.getShowMoreDom();

      if (showMore.parentNode) {
        showMore.parentNode.removeChild(showMore);
      } // reset max visible childs


      if (!options || options.resetVisibleChilds) {
        this.visibleChilds = this.getMaxVisibleChilds();
      }
    }
    /**
     * set custom css classes on a node
     */

  }, {
    key: "_updateCssClassName",
    value: function _updateCssClassName() {
      if (this.dom.field && this.editor && this.editor.options && typeof this.editor.options.onClassName === 'function' && this.dom.tree) {
        Object(util["removeAllClassNames"])(this.dom.tree);
        var addClasses = this.editor.options.onClassName({
          path: this.getPath(),
          field: this.field,
          value: this.value
        }) || '';
        Object(util["addClassName"])(this.dom.tree, 'jsoneditor-values ' + addClasses);
      }
    }
  }, {
    key: "recursivelyUpdateCssClassesOnNodes",
    value: function recursivelyUpdateCssClassesOnNodes() {
      this._updateCssClassName();

      if (Array.isArray(this.childs)) {
        for (var i = 0; i < this.childs.length; i++) {
          this.childs[i].recursivelyUpdateCssClassesOnNodes();
        }
      }
    }
    /**
     * Goes through the path from the node to the root and ensures that it is expanded
     */

  }, {
    key: "expandTo",
    value: function expandTo() {
      var currentNode = this.parent;

      while (currentNode) {
        if (!currentNode.expanded) {
          currentNode.expand();
        }

        currentNode = currentNode.parent;
      }
    }
    /**
     * Add a new child to the node.
     * Only applicable when Node value is of type array or object
     * @param {Node} node
     * @param {boolean} [visible] If true (default), the child will be rendered
     * @param {boolean} [updateDom]  If true (default), the DOM of both parent
     *                               node and appended node will be updated
     *                               (child count, indexes)
     */

  }, {
    key: "appendChild",
    value: function appendChild(node, visible, updateDom) {
      if (this._hasChilds()) {
        // adjust the link to the parent
        node.setParent(this);
        node.fieldEditable = this.type === 'object';

        if (this.type === 'array') {
          node.index = this.childs.length;
        }

        if (this.type === 'object' && node.field === undefined) {
          // initialize field value if needed
          node.setField('');
        }

        this.childs.push(node);

        if (this.expanded && visible !== false) {
          // insert into the DOM, before the appendRow
          var newTr = node.getDom();

          var nextTr = this._getNextTr();

          var table = nextTr ? nextTr.parentNode : undefined;

          if (nextTr && table) {
            table.insertBefore(newTr, nextTr);
          }

          node.showChilds();
          this.visibleChilds++;
        }

        if (updateDom !== false) {
          this.updateDom({
            updateIndexes: true
          });
          node.updateDom({
            recurse: true
          });
        }
      }
    }
    /**
     * Move a node from its current parent to this node
     * Only applicable when Node value is of type array or object
     * @param {Node} node
     * @param {Node} beforeNode
     */

  }, {
    key: "moveBefore",
    value: function moveBefore(node, beforeNode) {
      if (this._hasChilds()) {
        // create a temporary row, to prevent the scroll position from jumping
        // when removing the node
        var tbody = this.dom.tr ? this.dom.tr.parentNode : undefined;

        if (tbody) {
          var trTemp = document.createElement('tr');
          trTemp.style.height = tbody.clientHeight + 'px';
          tbody.appendChild(trTemp);
        }

        if (node.parent) {
          node.parent.removeChild(node);
        }

        if (beforeNode instanceof Node_AppendNode || !beforeNode) {
          // the this.childs.length + 1 is to reckon with the node that we're about to add
          if (this.childs.length + 1 > this.visibleChilds) {
            var lastVisibleNode = this.childs[this.visibleChilds - 1];
            this.insertBefore(node, lastVisibleNode);
          } else {
            this.appendChild(node);
          }
        } else {
          this.insertBefore(node, beforeNode);
        }

        if (tbody) {
          tbody.removeChild(trTemp);
        }
      }
    }
    /**
     * Insert a new child before a given node
     * Only applicable when Node value is of type array or object
     * @param {Node} node
     * @param {Node} beforeNode
     */

  }, {
    key: "insertBefore",
    value: function insertBefore(node, beforeNode) {
      if (this._hasChilds()) {
        this.visibleChilds++; // initialize field value if needed

        if (this.type === 'object' && node.field === undefined) {
          node.setField('');
        }

        if (beforeNode === this.append) {
          // append to the child nodes
          // adjust the link to the parent
          node.setParent(this);
          node.fieldEditable = this.type === 'object';
          this.childs.push(node);
        } else {
          // insert before a child node
          var index = this.childs.indexOf(beforeNode);

          if (index === -1) {
            throw new Error('Node not found');
          } // adjust the link to the parent


          node.setParent(this);
          node.fieldEditable = this.type === 'object';
          this.childs.splice(index, 0, node);
        }

        if (this.expanded) {
          // insert into the DOM
          var newTr = node.getDom();
          var nextTr = beforeNode.getDom();
          var table = nextTr ? nextTr.parentNode : undefined;

          if (nextTr && table) {
            table.insertBefore(newTr, nextTr);
          }

          node.showChilds();
          this.showChilds();
        }

        this.updateDom({
          updateIndexes: true
        });
        node.updateDom({
          recurse: true
        });
      }
    }
    /**
     * Insert a new child before a given node
     * Only applicable when Node value is of type array or object
     * @param {Node} node
     * @param {Node} afterNode
     */

  }, {
    key: "insertAfter",
    value: function insertAfter(node, afterNode) {
      if (this._hasChilds()) {
        var index = this.childs.indexOf(afterNode);
        var beforeNode = this.childs[index + 1];

        if (beforeNode) {
          this.insertBefore(node, beforeNode);
        } else {
          this.appendChild(node);
        }
      }
    }
    /**
     * Search in this node
     * Searches are case insensitive.
     * @param {String} text
     * @param {Node[]} [results] Array where search results will be added
     *                           used to count and limit the results whilst iterating
     * @return {Node[]} results  Array with nodes containing the search text
     */

  }, {
    key: "search",
    value: function search(text, results) {
      if (!Array.isArray(results)) {
        results = [];
      }

      var index;
      var search = text ? text.toLowerCase() : undefined; // delete old search data

      delete this.searchField;
      delete this.searchValue; // search in field

      if (this.field !== undefined && results.length <= this.MAX_SEARCH_RESULTS) {
        var field = String(this.field).toLowerCase();
        index = field.indexOf(search);

        if (index !== -1) {
          this.searchField = true;
          results.push({
            node: this,
            elem: 'field'
          });
        } // update dom


        this._updateDomField();
      } // search in value


      if (this._hasChilds()) {
        // array, object
        // search the nodes childs
        if (this.childs) {
          this.childs.forEach(function (child) {
            child.search(text, results);
          });
        }
      } else {
        // string, auto
        if (this.value !== undefined && results.length <= this.MAX_SEARCH_RESULTS) {
          var value = String(this.value).toLowerCase();
          index = value.indexOf(search);

          if (index !== -1) {
            this.searchValue = true;
            results.push({
              node: this,
              elem: 'value'
            });
          } // update dom


          this._updateDomValue();
        }
      }

      return results;
    }
    /**
     * Move the scroll position such that this node is in the visible area.
     * The node will not get the focus
     * @param {function(boolean)} [callback]
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(callback) {
      this.expandPathToNode();

      if (this.dom.tr && this.dom.tr.parentNode) {
        this.editor.scrollTo(this.dom.tr.offsetTop, callback);
      }
    }
    /**
     * if the node is not visible, expand its parents
     */

  }, {
    key: "expandPathToNode",
    value: function expandPathToNode() {
      var node = this;
      var recurse = false;

      while (node && node.parent) {
        // expand visible childs of the parent if needed
        var index = node.parent.type === 'array' ? node.index : node.parent.childs.indexOf(node);

        while (node.parent.visibleChilds < index + 1) {
          node.parent.visibleChilds += this.getMaxVisibleChilds();
        } // expand the parent itself


        node.parent.expand(recurse);
        node = node.parent;
      }
    }
    /**
     * Set focus to this node
     * @param {String} [elementName]  The field name of the element to get the
     *                                focus available values: 'drag', 'menu',
     *                                'expand', 'field', 'value' (default)
     */

  }, {
    key: "focus",
    value: function focus(elementName) {
      Node.focusElement = elementName;

      if (this.dom.tr && this.dom.tr.parentNode) {
        var dom = this.dom;

        switch (elementName) {
          case 'drag':
            if (dom.drag) {
              dom.drag.focus();
            } else {
              dom.menu.focus();
            }

            break;

          case 'menu':
            dom.menu.focus();
            break;

          case 'expand':
            if (this._hasChilds()) {
              dom.expand.focus();
            } else if (dom.field && this.fieldEditable) {
              dom.field.focus();
              Object(util["selectContentEditable"])(dom.field);
            } else if (dom.value && !this._hasChilds()) {
              dom.value.focus();
              Object(util["selectContentEditable"])(dom.value);
            } else {
              dom.menu.focus();
            }

            break;

          case 'field':
            if (dom.field && this.fieldEditable) {
              dom.field.focus();
              Object(util["selectContentEditable"])(dom.field);
            } else if (dom.value && !this._hasChilds()) {
              dom.value.focus();
              Object(util["selectContentEditable"])(dom.value);
            } else if (this._hasChilds()) {
              dom.expand.focus();
            } else {
              dom.menu.focus();
            }

            break;

          case 'value':
          default:
            if (dom.select) {
              // enum select box
              dom.select.focus();
            } else if (dom.value && !this._hasChilds()) {
              dom.value.focus();
              Object(util["selectContentEditable"])(dom.value);
            } else if (dom.field && this.fieldEditable) {
              dom.field.focus();
              Object(util["selectContentEditable"])(dom.field);
            } else if (this._hasChilds()) {
              dom.expand.focus();
            } else {
              dom.menu.focus();
            }

            break;
        }
      }
    }
    /**
     * Check if given node is a child. The method will check recursively to find
     * this node.
     * @param {Node} node
     * @return {boolean} containsNode
     */

  }, {
    key: "containsNode",
    value: function containsNode(node) {
      if (this === node) {
        return true;
      }

      var childs = this.childs;

      if (childs) {
        // TODO: use the js5 Array.some() here?
        for (var i = 0, iMax = childs.length; i < iMax; i++) {
          if (childs[i].containsNode(node)) {
            return true;
          }
        }
      }

      return false;
    }
    /**
     * Remove a child from the node.
     * Only applicable when Node value is of type array or object
     * @param {Node} node   The child node to be removed;
     * @param {boolean} [updateDom]  If true (default), the DOM of the parent
     *                               node will be updated (like child count)
     * @return {Node | undefined} node  The removed node on success,
     *                                             else undefined
     */

  }, {
    key: "removeChild",
    value: function removeChild(node, updateDom) {
      if (this.childs) {
        var index = this.childs.indexOf(node);

        if (index !== -1) {
          if (index < this.visibleChilds && this.expanded) {
            this.visibleChilds--;
          }

          node.hide(); // delete old search results

          delete node.searchField;
          delete node.searchValue;
          var removedNode = this.childs.splice(index, 1)[0];
          removedNode.parent = null;

          if (updateDom !== false) {
            this.updateDom({
              updateIndexes: true
            });
          }

          return removedNode;
        }
      }

      return undefined;
    }
    /**
     * Remove a child node node from this node
     * This method is equal to Node.removeChild, except that _remove fire an
     * onChange event.
     * @param {Node} node
     * @private
     */

  }, {
    key: "_remove",
    value: function _remove(node) {
      this.removeChild(node);
    }
    /**
     * Change the type of the value of this Node
     * @param {String} newType
     */

  }, {
    key: "changeType",
    value: function changeType(newType) {
      var oldType = this.type;

      if (oldType === newType) {
        // type is not changed
        return;
      }

      if ((newType === 'string' || newType === 'auto') && (oldType === 'string' || oldType === 'auto')) {
        // this is an easy change
        this.type = newType;
      } else {
        // change from array to object, or from string/auto to object/array
        var domAnchor = this._detachFromDom(); // delete the old DOM


        this.clearDom(); // adjust the field and the value

        this.type = newType; // adjust childs

        if (newType === 'object') {
          if (!this.childs) {
            this.childs = [];
          }

          this.childs.forEach(function (child) {
            child.clearDom();
            delete child.index;
            child.fieldEditable = true;

            if (child.field === undefined) {
              child.field = '';
            }
          });

          if (oldType === 'string' || oldType === 'auto') {
            this.expanded = true;
          }
        } else if (newType === 'array') {
          if (!this.childs) {
            this.childs = [];
          }

          this.childs.forEach(function (child, index) {
            child.clearDom();
            child.fieldEditable = false;
            child.index = index;
          });

          if (oldType === 'string' || oldType === 'auto') {
            this.expanded = true;
          }
        } else {
          this.expanded = false;
        }

        this._attachToDom(domAnchor);
      }

      if (newType === 'auto' || newType === 'string') {
        // cast value to the correct type
        if (newType === 'string') {
          this.value = String(this.value);
        } else {
          this.value = Object(util["parseString"])(String(this.value));
        }

        this.focus();
      }

      this.updateDom({
        updateIndexes: true
      });
    }
    /**
     * Test whether the JSON contents of this node are deep equal to provided JSON object.
     * @param {*} json
     */

  }, {
    key: "deepEqual",
    value: function deepEqual(json) {
      var i;

      if (this.type === 'array') {
        if (!Array.isArray(json)) {
          return false;
        }

        if (this.childs.length !== json.length) {
          return false;
        }

        for (i = 0; i < this.childs.length; i++) {
          if (!this.childs[i].deepEqual(json[i])) {
            return false;
          }
        }
      } else if (this.type === 'object') {
        if (_typeof(json) !== 'object' || !json) {
          return false;
        } // TODO: for better efficiency, we could create a property `isDuplicate` on all of the childs
        // and keep that up to date. This should make deepEqual about 20% faster.


        var props = {};
        var propCount = 0;

        for (i = 0; i < this.childs.length; i++) {
          var child = this.childs[i];

          if (!props[child.field]) {
            // We can have childs with duplicate field names.
            // We take the first, and ignore the others.
            props[child.field] = true;
            propCount++;

            if (!(child.field in json)) {
              return false;
            }

            if (!child.deepEqual(json[child.field])) {
              return false;
            }
          }
        }

        if (propCount !== Object.keys(json).length) {
          return false;
        }
      } else {
        if (this.value !== json) {
          return false;
        }
      }

      return true;
    }
    /**
     * Retrieve value from DOM
     * @private
     */

  }, {
    key: "_getDomValue",
    value: function _getDomValue() {
      this._clearValueError();

      if (this.dom.value && this.type !== 'array' && this.type !== 'object') {
        this.valueInnerText = Object(util["getInnerText"])(this.dom.value);
      }

      if (this.valueInnerText !== undefined) {
        try {
          // retrieve the value
          var value;

          if (this.type === 'string') {
            value = this._unescapeHTML(this.valueInnerText);
          } else {
            var str = this._unescapeHTML(this.valueInnerText);

            value = Object(util["parseString"])(str);
          }

          if (value !== this.value) {
            this.value = value;

            this._debouncedOnChangeValue();
          }
        } catch (err) {
          // keep the previous value
          this._setValueError(Object(i18n["c" /* translate */])('cannotParseValueError'));
        }
      }
    }
    /**
     * Show a local error in case of invalid value
     * @param {string} message
     * @private
     */

  }, {
    key: "_setValueError",
    value: function _setValueError(message) {
      this.valueError = {
        message: message
      };
      this.updateError();
    }
  }, {
    key: "_clearValueError",
    value: function _clearValueError() {
      if (this.valueError) {
        this.valueError = null;
        this.updateError();
      }
    }
    /**
     * Show a local error in case of invalid or duplicate field
     * @param {string} message
     * @private
     */

  }, {
    key: "_setFieldError",
    value: function _setFieldError(message) {
      this.fieldError = {
        message: message
      };
      this.updateError();
    }
  }, {
    key: "_clearFieldError",
    value: function _clearFieldError() {
      if (this.fieldError) {
        this.fieldError = null;
        this.updateError();
      }
    }
    /**
     * Handle a changed value
     * @private
     */

  }, {
    key: "_onChangeValue",
    value: function _onChangeValue() {
      // get current selection, then override the range such that we can select
      // the added/removed text on undo/redo
      var oldSelection = this.editor.getDomSelection();

      if (oldSelection.range) {
        var undoDiff = Object(util["textDiff"])(String(this.value), String(this.previousValue));
        oldSelection.range.startOffset = undoDiff.start;
        oldSelection.range.endOffset = undoDiff.end;
      }

      var newSelection = this.editor.getDomSelection();

      if (newSelection.range) {
        var redoDiff = Object(util["textDiff"])(String(this.previousValue), String(this.value));
        newSelection.range.startOffset = redoDiff.start;
        newSelection.range.endOffset = redoDiff.end;
      }

      this.editor._onAction('editValue', {
        path: this.getInternalPath(),
        oldValue: this.previousValue,
        newValue: this.value,
        oldSelection: oldSelection,
        newSelection: newSelection
      });

      this.previousValue = this.value;
    }
    /**
     * Handle a changed field
     * @private
     */

  }, {
    key: "_onChangeField",
    value: function _onChangeField() {
      // get current selection, then override the range such that we can select
      // the added/removed text on undo/redo
      var oldSelection = this.editor.getDomSelection();
      var previous = this.previousField || '';

      if (oldSelection.range) {
        var undoDiff = Object(util["textDiff"])(this.field, previous);
        oldSelection.range.startOffset = undoDiff.start;
        oldSelection.range.endOffset = undoDiff.end;
      }

      var newSelection = this.editor.getDomSelection();

      if (newSelection.range) {
        var redoDiff = Object(util["textDiff"])(previous, this.field);
        newSelection.range.startOffset = redoDiff.start;
        newSelection.range.endOffset = redoDiff.end;
      }

      this.editor._onAction('editField', {
        parentPath: this.parent.getInternalPath(),
        index: this.getIndex(),
        oldValue: this.previousField,
        newValue: this.field,
        oldSelection: oldSelection,
        newSelection: newSelection
      });

      this.previousField = this.field;
    }
    /**
     * Update dom value:
     * - the text color of the value, depending on the type of the value
     * - the height of the field, depending on the width
     * - background color in case it is empty
     * @private
     */

  }, {
    key: "_updateDomValue",
    value: function _updateDomValue() {
      var domValue = this.dom.value;

      if (domValue) {
        var classNames = ['jsoneditor-value']; // set text color depending on value type

        var value = this.value;
        var valueType = this.type === 'auto' ? Object(util["getType"])(value) : this.type;
        var valueIsUrl = valueType === 'string' && Object(util["isUrl"])(value);
        classNames.push('jsoneditor-' + valueType);

        if (valueIsUrl) {
          classNames.push('jsoneditor-url');
        } // visual styling when empty


        var isEmpty = String(this.value) === '' && this.type !== 'array' && this.type !== 'object';

        if (isEmpty) {
          classNames.push('jsoneditor-empty');
        } // highlight when there is a search result


        if (this.searchValueActive) {
          classNames.push('jsoneditor-highlight-active');
        }

        if (this.searchValue) {
          classNames.push('jsoneditor-highlight');
        }

        domValue.className = classNames.join(' '); // update title

        if (valueType === 'array' || valueType === 'object') {
          var count = this.childs ? this.childs.length : 0;
          domValue.title = this.type + ' containing ' + count + ' items';
        } else if (valueIsUrl && this.editable.value) {
          domValue.title = Object(i18n["c" /* translate */])('openUrl');
        } else {
          domValue.title = '';
        } // show checkbox when the value is a boolean


        if (valueType === 'boolean' && this.editable.value) {
          if (!this.dom.checkbox) {
            this.dom.checkbox = document.createElement('input');
            this.dom.checkbox.type = 'checkbox';
            this.dom.tdCheckbox = document.createElement('td');
            this.dom.tdCheckbox.className = 'jsoneditor-tree';
            this.dom.tdCheckbox.appendChild(this.dom.checkbox);
            this.dom.tdValue.parentNode.insertBefore(this.dom.tdCheckbox, this.dom.tdValue);
          }

          this.dom.checkbox.checked = this.value;
        } else {
          // cleanup checkbox when displayed
          if (this.dom.tdCheckbox) {
            this.dom.tdCheckbox.parentNode.removeChild(this.dom.tdCheckbox);
            delete this.dom.tdCheckbox;
            delete this.dom.checkbox;
          }
        } // create select box when this node has an enum object


        if (this["enum"] && this.editable.value) {
          if (!this.dom.select) {
            this.dom.select = document.createElement('select');
            this.id = this.field + '_' + new Date().getUTCMilliseconds();
            this.dom.select.id = this.id;
            this.dom.select.name = this.dom.select.id; // Create the default empty option

            this.dom.select.option = document.createElement('option');
            this.dom.select.option.value = '';
            this.dom.select.option.innerHTML = '--';
            this.dom.select.appendChild(this.dom.select.option); // Iterate all enum values and add them as options

            for (var i = 0; i < this["enum"].length; i++) {
              this.dom.select.option = document.createElement('option');
              this.dom.select.option.value = this["enum"][i];
              this.dom.select.option.innerHTML = this["enum"][i];

              if (this.dom.select.option.value === this.value) {
                this.dom.select.option.selected = true;
              }

              this.dom.select.appendChild(this.dom.select.option);
            }

            this.dom.tdSelect = document.createElement('td');
            this.dom.tdSelect.className = 'jsoneditor-tree';
            this.dom.tdSelect.appendChild(this.dom.select);
            this.dom.tdValue.parentNode.insertBefore(this.dom.tdSelect, this.dom.tdValue);
          } // If the enum is inside a composite type display
          // both the simple input and the dropdown field


          if (this.schema && !Node_hasOwnProperty(this.schema, 'oneOf') && !Node_hasOwnProperty(this.schema, 'anyOf') && !Node_hasOwnProperty(this.schema, 'allOf')) {
            this.valueFieldHTML = this.dom.tdValue.innerHTML;
            this.dom.tdValue.style.visibility = 'hidden';
            this.dom.tdValue.innerHTML = '';
          } else {
            delete this.valueFieldHTML;
          }
        } else {
          // cleanup select box when displayed
          if (this.dom.tdSelect) {
            this.dom.tdSelect.parentNode.removeChild(this.dom.tdSelect);
            delete this.dom.tdSelect;
            delete this.dom.select;
            this.dom.tdValue.innerHTML = this.valueFieldHTML;
            this.dom.tdValue.style.visibility = '';
            delete this.valueFieldHTML;
          }
        } // show color picker when value is a color


        if (this.editable.value && this.editor.options.colorPicker && typeof value === 'string' && Object(util["isValidColor"])(value)) {
          if (!this.dom.color) {
            this.dom.color = document.createElement('div');
            this.dom.color.className = 'jsoneditor-color';
            this.dom.tdColor = document.createElement('td');
            this.dom.tdColor.className = 'jsoneditor-tree';
            this.dom.tdColor.appendChild(this.dom.color);
            this.dom.tdValue.parentNode.insertBefore(this.dom.tdColor, this.dom.tdValue); // this is a bit hacky, overriding the text color like this. find a nicer solution

            this.dom.value.style.color = '#1A1A1A';
          } // update the color background


          this.dom.color.style.backgroundColor = value;
        } else {
          // cleanup color picker when displayed
          this._deleteDomColor();
        } // show date tag when value is a timestamp in milliseconds


        if (this.editor.options.timestampTag && typeof value === 'number' && value > YEAR_2000 && !isNaN(new Date(value).valueOf())) {
          if (!this.dom.date) {
            this.dom.date = document.createElement('div');
            this.dom.date.className = 'jsoneditor-date';
            this.dom.value.parentNode.appendChild(this.dom.date);
          }

          this.dom.date.innerHTML = new Date(value).toISOString();
          this.dom.date.title = new Date(value).toString();
        } else {
          // cleanup date tag
          if (this.dom.date) {
            this.dom.date.parentNode.removeChild(this.dom.date);
            delete this.dom.date;
          }
        } // strip formatting from the contents of the editable div


        Object(util["stripFormatting"])(domValue);

        this._updateDomDefault();
      }
    }
  }, {
    key: "_deleteDomColor",
    value: function _deleteDomColor() {
      if (this.dom.color) {
        this.dom.tdColor.parentNode.removeChild(this.dom.tdColor);
        delete this.dom.tdColor;
        delete this.dom.color;
        this.dom.value.style.color = '';
      }
    }
    /**
     * Update dom field:
     * - the text color of the field, depending on the text
     * - the height of the field, depending on the width
     * - background color in case it is empty
     * @private
     */

  }, {
    key: "_updateDomField",
    value: function _updateDomField() {
      var domField = this.dom.field;

      if (domField) {
        var tooltip = Object(util["makeFieldTooltip"])(this.schema, this.editor.options.language);

        if (tooltip) {
          domField.title = tooltip;
        } // make backgound color lightgray when empty


        var isEmpty = String(this.field) === '' && this.parent.type !== 'array';

        if (isEmpty) {
          Object(util["addClassName"])(domField, 'jsoneditor-empty');
        } else {
          Object(util["removeClassName"])(domField, 'jsoneditor-empty');
        } // highlight when there is a search result


        if (this.searchFieldActive) {
          Object(util["addClassName"])(domField, 'jsoneditor-highlight-active');
        } else {
          Object(util["removeClassName"])(domField, 'jsoneditor-highlight-active');
        }

        if (this.searchField) {
          Object(util["addClassName"])(domField, 'jsoneditor-highlight');
        } else {
          Object(util["removeClassName"])(domField, 'jsoneditor-highlight');
        } // strip formatting from the contents of the editable div


        Object(util["stripFormatting"])(domField);
      }
    }
    /**
     * Retrieve field from DOM
     * @param {boolean} [forceUnique]  If true, the field name will be changed
     *                                 into a unique name in case it is a duplicate.
     * @private
     */

  }, {
    key: "_getDomField",
    value: function _getDomField(forceUnique) {
      this._clearFieldError();

      if (this.dom.field && this.fieldEditable) {
        this.fieldInnerText = Object(util["getInnerText"])(this.dom.field);
      }

      if (this.fieldInnerText !== undefined) {
        try {
          var field = this._unescapeHTML(this.fieldInnerText);

          var existingFieldNames = this.parent.getFieldNames(this);
          var isDuplicate = existingFieldNames.indexOf(field) !== -1;

          if (!isDuplicate) {
            if (field !== this.field) {
              this.field = field;

              this._debouncedOnChangeField();
            }
          } else {
            if (forceUnique) {
              // fix duplicate field: change it into a unique name
              field = Object(util["findUniqueName"])(field, existingFieldNames);

              if (field !== this.field) {
                this.field = field; // TODO: don't debounce but resolve right away, and cancel current debounce

                this._debouncedOnChangeField();
              }
            } else {
              this._setFieldError(Object(i18n["c" /* translate */])('duplicateFieldError'));
            }
          }
        } catch (err) {
          // keep the previous field value
          this._setFieldError(Object(i18n["c" /* translate */])('cannotParseFieldError'));
        }
      }
    }
    /**
     * Update the value of the schema default element in the DOM.
     * @private
     * @returns {undefined}
     */

  }, {
    key: "_updateDomDefault",
    value: function _updateDomDefault() {
      // Short-circuit if schema is missing, has no default, or if Node has children
      if (!this.schema || this.schema["default"] === undefined || this._hasChilds()) {
        return;
      } // select either enum dropdown (select) or input value


      var inputElement = this.dom.select ? this.dom.select : this.dom.value;

      if (!inputElement) {
        return;
      }

      if (this.value === this.schema["default"]) {
        inputElement.title = Object(i18n["c" /* translate */])('default');
        Object(util["addClassName"])(inputElement, 'jsoneditor-is-default');
        Object(util["removeClassName"])(inputElement, 'jsoneditor-is-not-default');
      } else {
        inputElement.removeAttribute('title');
        Object(util["removeClassName"])(inputElement, 'jsoneditor-is-default');
        Object(util["addClassName"])(inputElement, 'jsoneditor-is-not-default');
      }
    }
    /**
     * Clear the dom of the node
     */

  }, {
    key: "clearDom",
    value: function clearDom() {
      // TODO: hide the node first?
      // this.hide();
      // TODO: recursively clear dom?
      this.dom = {};
    }
    /**
     * Get the HTML DOM TR element of the node.
     * The dom will be generated when not yet created
     * @return {Element} tr    HTML DOM TR Element
     */

  }, {
    key: "getDom",
    value: function getDom() {
      var dom = this.dom;

      if (dom.tr) {
        return dom.tr;
      }

      this._updateEditability(); // create row


      dom.tr = document.createElement('tr');
      dom.tr.node = this;

      if (this.editor.options.mode === 'tree') {
        // note: we take here the global setting
        var tdDrag = document.createElement('td');

        if (this.editable.field) {
          // create draggable area
          if (this.parent) {
            var domDrag = document.createElement('button');
            domDrag.type = 'button';
            dom.drag = domDrag;
            domDrag.className = 'jsoneditor-button jsoneditor-dragarea';
            domDrag.title = Object(i18n["c" /* translate */])('drag');
            tdDrag.appendChild(domDrag);
          }
        }

        dom.tr.appendChild(tdDrag); // create context menu

        var tdMenu = document.createElement('td');
        var menu = document.createElement('button');
        menu.type = 'button';
        dom.menu = menu;
        menu.className = 'jsoneditor-button jsoneditor-contextmenu';
        menu.title = Object(i18n["c" /* translate */])('actionsMenu');
        tdMenu.appendChild(dom.menu);
        dom.tr.appendChild(tdMenu);
      } // create tree and field


      var tdField = document.createElement('td');
      dom.tr.appendChild(tdField);
      dom.tree = this._createDomTree();
      tdField.appendChild(dom.tree);
      this.updateDom({
        updateIndexes: true
      });
      return dom.tr;
    }
    /**
     * Test whether a Node is rendered and visible
     * @returns {boolean}
     */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.dom && this.dom.tr && this.dom.tr.parentNode || false;
    }
    /**
     * Test if this node is a sescendant of an other node
     * @param {Node} node
     * @return {boolean} isDescendant
     * @private
     */

  }, {
    key: "isDescendantOf",
    value: function isDescendantOf(node) {
      var n = this.parent;

      while (n) {
        if (n === node) {
          return true;
        }

        n = n.parent;
      }

      return false;
    }
    /**
     * Create an editable field
     * @return {Element} domField
     * @private
     */

  }, {
    key: "_createDomField",
    value: function _createDomField() {
      return document.createElement('div');
    }
    /**
     * Set highlighting for this node and all its childs.
     * Only applied to the currently visible (expanded childs)
     * @param {boolean} highlight
     */

  }, {
    key: "setHighlight",
    value: function setHighlight(highlight) {
      if (this.dom.tr) {
        if (highlight) {
          Object(util["addClassName"])(this.dom.tr, 'jsoneditor-highlight');
        } else {
          Object(util["removeClassName"])(this.dom.tr, 'jsoneditor-highlight');
        }

        if (this.append) {
          this.append.setHighlight(highlight);
        }

        if (this.childs) {
          this.childs.forEach(function (child) {
            child.setHighlight(highlight);
          });
        }
      }
    }
    /**
     * Select or deselect a node
     * @param {boolean} selected
     * @param {boolean} [isFirst]
     */

  }, {
    key: "setSelected",
    value: function setSelected(selected, isFirst) {
      this.selected = selected;

      if (this.dom.tr) {
        if (selected) {
          Object(util["addClassName"])(this.dom.tr, 'jsoneditor-selected');
        } else {
          Object(util["removeClassName"])(this.dom.tr, 'jsoneditor-selected');
        }

        if (isFirst) {
          Object(util["addClassName"])(this.dom.tr, 'jsoneditor-first');
        } else {
          Object(util["removeClassName"])(this.dom.tr, 'jsoneditor-first');
        }

        if (this.append) {
          this.append.setSelected(selected);
        }

        if (this.showMore) {
          this.showMore.setSelected(selected);
        }

        if (this.childs) {
          this.childs.forEach(function (child) {
            child.setSelected(selected);
          });
        }
      }
    }
    /**
     * Update the value of the node. Only primitive types are allowed, no Object
     * or Array is allowed.
     * @param {String | Number | Boolean | null} value
     */

  }, {
    key: "updateValue",
    value: function updateValue(value) {
      this.value = value;
      this.previousValue = value;
      this.valueError = undefined;
      this.updateDom();
    }
    /**
     * Update the field of the node.
     * @param {String} field
     */

  }, {
    key: "updateField",
    value: function updateField(field) {
      this.field = field;
      this.previousField = field;
      this.fieldError = undefined;
      this.updateDom();
    }
    /**
     * Update the HTML DOM, optionally recursing through the childs
     * @param {Object} [options] Available parameters:
     *                          {boolean} [recurse]         If true, the
     *                          DOM of the childs will be updated recursively.
     *                          False by default.
     *                          {boolean} [updateIndexes]   If true, the childs
     *                          indexes of the node will be updated too. False by
     *                          default.
     */

  }, {
    key: "updateDom",
    value: function updateDom(options) {
      // update level indentation
      var domTree = this.dom.tree;

      if (domTree) {
        domTree.style.marginLeft = this.getLevel() * 24 + 'px';
      } // apply field to DOM


      var domField = this.dom.field;

      if (domField) {
        if (this.fieldEditable) {
          // parent is an object
          domField.contentEditable = this.editable.field;
          domField.spellcheck = false;
          domField.className = 'jsoneditor-field';
        } else {
          // parent is an array this is the root node
          domField.contentEditable = false;
          domField.className = 'jsoneditor-readonly';
        }

        var fieldText;

        if (this.index !== undefined) {
          fieldText = this.index;
        } else if (this.field !== undefined) {
          fieldText = this.field;
        } else {
          var schema = this.editor.options.schema ? Node._findSchema(this.editor.options.schema, this.editor.options.schemaRefs || {}, this.getPath()) : undefined;

          if (schema && schema.title) {
            fieldText = schema.title;
          } else if (this._hasChilds()) {
            fieldText = this.type;
          } else {
            fieldText = '';
          }
        }

        domField.innerHTML = this._escapeHTML(fieldText);

        this._updateSchema();
      } // apply value to DOM


      var domValue = this.dom.value;

      if (domValue) {
        if (this.type === 'array') {
          this.updateNodeName();
          Object(util["addClassName"])(this.dom.tr, 'jsoneditor-expandable');
        } else if (this.type === 'object') {
          this.updateNodeName();
          Object(util["addClassName"])(this.dom.tr, 'jsoneditor-expandable');
        } else {
          domValue.innerHTML = this._escapeHTML(this.value);
          Object(util["removeClassName"])(this.dom.tr, 'jsoneditor-expandable');
        }
      } // update field and value


      this._updateDomField();

      this._updateDomValue();

      this._updateCssClassName(); // update childs indexes


      if (options && options.updateIndexes === true) {
        // updateIndexes is true or undefined
        this._updateDomIndexes();
      } // update childs recursively


      if (options && options.recurse === true) {
        if (this.childs) {
          this.childs.forEach(function (child) {
            child.updateDom(options);
          });
        }
      } // update rendering of error


      if (this.error) {
        this.updateError();
      } // update row with append button


      if (this.append) {
        this.append.updateDom();
      } // update "show more" text at the bottom of large arrays


      if (this.showMore) {
        this.showMore.updateDom();
      }
    }
    /**
     * Locate the JSON schema of the node and check for any enum type
     * @private
     */

  }, {
    key: "_updateSchema",
    value: function _updateSchema() {
      // Locating the schema of the node and checking for any enum type
      if (this.editor && this.editor.options) {
        // find the part of the json schema matching this nodes path
        this.schema = this.editor.options.schema // fix childSchema with $ref, and not display the select element on the child schema because of not found enum
        ? Node._findSchema(this.editor.options.schema, this.editor.options.schemaRefs || {}, this.getPath()) : null;

        if (this.schema) {
          this["enum"] = Node._findEnum(this.schema);
        } else {
          delete this["enum"];
        }
      }
    }
    /**
     * Update the DOM of the childs of a node: update indexes and undefined field
     * names.
     * Only applicable when structure is an array or object
     * @private
     */

  }, {
    key: "_updateDomIndexes",
    value: function _updateDomIndexes() {
      var domValue = this.dom.value;
      var childs = this.childs;

      if (domValue && childs) {
        if (this.type === 'array') {
          childs.forEach(function (child, index) {
            child.index = index;
            var childField = child.dom.field;

            if (childField) {
              childField.innerHTML = index;
            }
          });
        } else if (this.type === 'object') {
          childs.forEach(function (child) {
            if (child.index !== undefined) {
              delete child.index;

              if (child.field === undefined) {
                child.field = '';
              }
            }
          });
        }
      }
    }
    /**
     * Create an editable value
     * @private
     */

  }, {
    key: "_createDomValue",
    value: function _createDomValue() {
      var domValue;

      if (this.type === 'array') {
        domValue = document.createElement('div');
        domValue.innerHTML = '[...]';
      } else if (this.type === 'object') {
        domValue = document.createElement('div');
        domValue.innerHTML = '{...}';
      } else {
        if (!this.editable.value && Object(util["isUrl"])(this.value)) {
          // create a link in case of read-only editor and value containing an url
          domValue = document.createElement('a');
          domValue.href = this.value;
          domValue.innerHTML = this._escapeHTML(this.value);
        } else {
          // create an editable or read-only div
          domValue = document.createElement('div');
          domValue.contentEditable = this.editable.value;
          domValue.spellcheck = false;
          domValue.innerHTML = this._escapeHTML(this.value);
        }
      }

      return domValue;
    }
    /**
     * Create an expand/collapse button
     * @return {Element} expand
     * @private
     */

  }, {
    key: "_createDomExpandButton",
    value: function _createDomExpandButton() {
      // create expand button
      var expand = document.createElement('button');
      expand.type = 'button';

      if (this._hasChilds()) {
        expand.className = this.expanded ? 'jsoneditor-button jsoneditor-expanded' : 'jsoneditor-button jsoneditor-collapsed';
        expand.title = Object(i18n["c" /* translate */])('expandTitle');
      } else {
        expand.className = 'jsoneditor-button jsoneditor-invisible';
        expand.title = '';
      }

      return expand;
    }
    /**
     * Create a DOM tree element, containing the expand/collapse button
     * @return {Element} domTree
     * @private
     */

  }, {
    key: "_createDomTree",
    value: function _createDomTree() {
      var dom = this.dom;
      var domTree = document.createElement('table');
      var tbody = document.createElement('tbody');
      domTree.style.borderCollapse = 'collapse'; // TODO: put in css

      domTree.className = 'jsoneditor-values';
      domTree.appendChild(tbody);
      var tr = document.createElement('tr');
      tbody.appendChild(tr); // create expand button

      var tdExpand = document.createElement('td');
      tdExpand.className = 'jsoneditor-tree';
      tr.appendChild(tdExpand);
      dom.expand = this._createDomExpandButton();
      tdExpand.appendChild(dom.expand);
      dom.tdExpand = tdExpand; // create the field

      var tdField = document.createElement('td');
      tdField.className = 'jsoneditor-tree';
      tr.appendChild(tdField);
      dom.field = this._createDomField();
      tdField.appendChild(dom.field);
      dom.tdField = tdField; // create a separator

      var tdSeparator = document.createElement('td');
      tdSeparator.className = 'jsoneditor-tree';
      tr.appendChild(tdSeparator);

      if (this.type !== 'object' && this.type !== 'array') {
        tdSeparator.appendChild(document.createTextNode(':'));
        tdSeparator.className = 'jsoneditor-separator';
      }

      dom.tdSeparator = tdSeparator; // create the value

      var tdValue = document.createElement('td');
      tdValue.className = 'jsoneditor-tree';
      tr.appendChild(tdValue);
      dom.value = this._createDomValue();
      tdValue.appendChild(dom.value);
      dom.tdValue = tdValue;
      return domTree;
    }
    /**
     * Handle an event. The event is caught centrally by the editor
     * @param {Event} event
     */

  }, {
    key: "onEvent",
    value: function onEvent(event) {
      var type = event.type;
      var target = event.target || event.srcElement;
      var dom = this.dom;
      var node = this;

      var expandable = this._hasChilds();

      if (typeof this.editor.options.onEvent === 'function') {
        this._onEvent(event);
      } // check if mouse is on menu or on dragarea.
      // If so, highlight current row and its childs


      if (target === dom.drag || target === dom.menu) {
        if (type === 'mouseover') {
          this.editor.highlighter.highlight(this);
        } else if (type === 'mouseout') {
          this.editor.highlighter.unhighlight();
        }
      } // context menu events


      if (type === 'click' && target === dom.menu) {
        var highlighter = node.editor.highlighter;
        highlighter.highlight(node);
        highlighter.lock();
        Object(util["addClassName"])(dom.menu, 'jsoneditor-selected');
        this.showContextMenu(dom.menu, function () {
          Object(util["removeClassName"])(dom.menu, 'jsoneditor-selected');
          highlighter.unlock();
          highlighter.unhighlight();
        });
      } // expand events


      if (type === 'click') {
        if (target === dom.expand || (node.editor.options.mode === 'view' || node.editor.options.mode === 'form') && target.nodeName === 'DIV') {
          if (expandable) {
            var recurse = event.ctrlKey; // with ctrl-key, expand/collapse all

            this._onExpand(recurse);
          }
        }
      }

      if (type === 'click' && (event.target === node.dom.tdColor || event.target === node.dom.color)) {
        this._showColorPicker();
      } // swap the value of a boolean when the checkbox displayed left is clicked


      if (type === 'change' && target === dom.checkbox) {
        this.dom.value.innerHTML = !this.value;

        this._getDomValue();

        this._updateDomDefault();
      } // update the value of the node based on the selected option


      if (type === 'change' && target === dom.select) {
        this.dom.value.innerHTML = dom.select.value;

        this._getDomValue();

        this._updateDomValue();
      } // value events


      var domValue = dom.value;

      if (target === domValue) {
        // noinspection FallthroughInSwitchStatementJS
        switch (type) {
          case 'blur':
          case 'change':
            {
              this._getDomValue();

              this._clearValueError();

              this._updateDomValue();

              var escapedValue = this._escapeHTML(this.value);

              if (domValue.innerHTML !== escapedValue) {
                // only update if changed, else you lose the caret position when changing tabs for example
                domValue.innerHTML = escapedValue;
              }

              break;
            }

          case 'input':
            // this._debouncedGetDomValue(true); // TODO
            this._getDomValue();

            this._updateDomValue();

            break;

          case 'keydown':
          case 'mousedown':
            // TODO: cleanup
            this.editor.selection = this.editor.getDomSelection();
            break;

          case 'click':
            if (event.ctrlKey && this.editable.value) {
              // if read-only, we use the regular click behavior of an anchor
              if (Object(util["isUrl"])(this.value)) {
                event.preventDefault();
                window.open(this.value, '_blank');
              }
            }

            break;

          case 'keyup':
            // this._debouncedGetDomValue(true); // TODO
            this._getDomValue();

            this._updateDomValue();

            break;

          case 'cut':
          case 'paste':
            setTimeout(function () {
              node._getDomValue();

              node._updateDomValue();
            }, 1);
            break;
        }
      } // field events


      var domField = dom.field;

      if (target === domField) {
        switch (type) {
          case 'blur':
            {
              this._getDomField(true);

              this._updateDomField();

              var escapedField = this._escapeHTML(this.field);

              if (domField.innerHTML !== escapedField) {
                // only update if changed, else you lose the caret position when changing tabs for example
                domField.innerHTML = escapedField;
              }

              break;
            }

          case 'input':
            this._getDomField();

            this._updateSchema();

            this._updateDomField();

            this._updateDomValue();

            break;

          case 'keydown':
          case 'mousedown':
            this.editor.selection = this.editor.getDomSelection();
            break;

          case 'keyup':
            this._getDomField();

            this._updateDomField();

            break;

          case 'cut':
          case 'paste':
            setTimeout(function () {
              node._getDomField();

              node._updateDomField();
            }, 1);
            break;
        }
      } // focus
      // when clicked in whitespace left or right from the field or value, set focus


      var domTree = dom.tree;

      if (domTree && target === domTree.parentNode && type === 'click' && !event.hasMoved) {
        var left = event.offsetX !== undefined ? event.offsetX < (this.getLevel() + 1) * 24 : event.pageX < Object(util["getAbsoluteLeft"])(dom.tdSeparator); // for FF

        if (left || expandable) {
          // node is expandable when it is an object or array
          if (domField) {
            Object(util["setEndOfContentEditable"])(domField);
            domField.focus();
          }
        } else {
          if (domValue && !this["enum"]) {
            Object(util["setEndOfContentEditable"])(domValue);
            domValue.focus();
          }
        }
      }

      if ((target === dom.tdExpand && !expandable || target === dom.tdField || target === dom.tdSeparator) && type === 'click' && !event.hasMoved) {
        if (domField) {
          Object(util["setEndOfContentEditable"])(domField);
          domField.focus();
        }
      }

      if (type === 'keydown') {
        this.onKeyDown(event);
      }
    }
    /**
     * Trigger external onEvent provided in options if node is a JSON field or
     * value.
     * Information provided depends on the element, value is only included if
     * event occurs in a JSON value:
     * {field: string, path: {string|number}[] [, value: string]}
     * @param {Event} event
     * @private
     */

  }, {
    key: "_onEvent",
    value: function _onEvent(event) {
      var element = event.target;

      if (element === this.dom.field || element === this.dom.value) {
        var info = {
          field: this.getField(),
          path: this.getPath()
        }; // For leaf values, include value

        if (!this._hasChilds() && element === this.dom.value) {
          info.value = this.getValue();
        }

        this.editor.options.onEvent(info, event);
      }
    }
    /**
     * Key down event handler
     * @param {Event} event
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var keynum = event.which || event.keyCode;
      var target = event.target || event.srcElement;
      var ctrlKey = event.ctrlKey;
      var shiftKey = event.shiftKey;
      var altKey = event.altKey;
      var handled = false;
      var prevNode, nextNode, nextDom, nextDom2;
      var editable = this.editor.options.mode === 'tree';
      var oldSelection;
      var oldNextNode;
      var oldParent;
      var oldIndexRedo;
      var newIndexRedo;
      var oldParentPathRedo;
      var newParentPathRedo;
      var nodes;
      var multiselection;
      var selectedNodes = this.editor.multiselection.nodes.length > 0 ? this.editor.multiselection.nodes : [this];
      var firstNode = selectedNodes[0];
      var lastNode = selectedNodes[selectedNodes.length - 1]; // console.log(ctrlKey, keynum, event.charCode); // TODO: cleanup

      if (keynum === 13) {
        // Enter
        if (target === this.dom.value) {
          if (!this.editable.value || event.ctrlKey) {
            if (Object(util["isUrl"])(this.value)) {
              window.open(this.value, '_blank');
              handled = true;
            }
          }
        } else if (target === this.dom.expand) {
          var expandable = this._hasChilds();

          if (expandable) {
            var recurse = event.ctrlKey; // with ctrl-key, expand/collapse all

            this._onExpand(recurse);

            target.focus();
            handled = true;
          }
        }
      } else if (keynum === 68) {
        // D
        if (ctrlKey && editable) {
          // Ctrl+D
          Node.onDuplicate(selectedNodes);
          handled = true;
        }
      } else if (keynum === 69) {
        // E
        if (ctrlKey) {
          // Ctrl+E and Ctrl+Shift+E
          this._onExpand(shiftKey); // recurse = shiftKey


          target.focus(); // TODO: should restore focus in case of recursing expand (which takes DOM offline)

          handled = true;
        }
      } else if (keynum === 77 && editable) {
        // M
        if (ctrlKey) {
          // Ctrl+M
          this.showContextMenu(target);
          handled = true;
        }
      } else if (keynum === 46 && editable) {
        // Del
        if (ctrlKey) {
          // Ctrl+Del
          Node.onRemove(selectedNodes);
          handled = true;
        }
      } else if (keynum === 45 && editable) {
        // Ins
        if (ctrlKey && !shiftKey) {
          // Ctrl+Ins
          this._onInsertBefore();

          handled = true;
        } else if (ctrlKey && shiftKey) {
          // Ctrl+Shift+Ins
          this._onInsertAfter();

          handled = true;
        }
      } else if (keynum === 35) {
        // End
        if (altKey) {
          // Alt+End
          // find the last node
          var endNode = this._lastNode();

          if (endNode) {
            endNode.focus(Node.focusElement || this._getElementName(target));
          }

          handled = true;
        }
      } else if (keynum === 36) {
        // Home
        if (altKey) {
          // Alt+Home
          // find the first node
          var homeNode = this._firstNode();

          if (homeNode) {
            homeNode.focus(Node.focusElement || this._getElementName(target));
          }

          handled = true;
        }
      } else if (keynum === 37) {
        // Arrow Left
        if (altKey && !shiftKey) {
          // Alt + Arrow Left
          // move to left element
          var prevElement = this._previousElement(target);

          if (prevElement) {
            this.focus(this._getElementName(prevElement));
          }

          handled = true;
        } else if (altKey && shiftKey && editable) {
          // Alt + Shift + Arrow left
          if (lastNode.expanded) {
            var appendDom = lastNode.getAppendDom();
            nextDom = appendDom ? appendDom.nextSibling : undefined;
          } else {
            var dom = lastNode.getDom();
            nextDom = dom.nextSibling;
          }

          if (nextDom) {
            nextNode = Node.getNodeFromTarget(nextDom);
            nextDom2 = nextDom.nextSibling;
            var nextNode2 = Node.getNodeFromTarget(nextDom2);

            if (nextNode && nextNode instanceof Node_AppendNode && !(lastNode.parent.childs.length === 1) && nextNode2 && nextNode2.parent) {
              oldSelection = this.editor.getDomSelection();
              oldParent = firstNode.parent;
              oldNextNode = oldParent.childs[lastNode.getIndex() + 1] || oldParent.append;
              oldIndexRedo = firstNode.getIndex();
              newIndexRedo = nextNode2.getIndex();
              oldParentPathRedo = oldParent.getInternalPath();
              newParentPathRedo = nextNode2.parent.getInternalPath();
              selectedNodes.forEach(function (node) {
                nextNode2.parent.moveBefore(node, nextNode2);
              });
              this.focus(Node.focusElement || this._getElementName(target));

              this.editor._onAction('moveNodes', {
                count: selectedNodes.length,
                fieldNames: selectedNodes.map(getField),
                oldParentPath: oldParent.getInternalPath(),
                newParentPath: firstNode.parent.getInternalPath(),
                oldIndex: oldNextNode.getIndex(),
                newIndex: firstNode.getIndex(),
                oldIndexRedo: oldIndexRedo,
                newIndexRedo: newIndexRedo,
                oldParentPathRedo: oldParentPathRedo,
                newParentPathRedo: newParentPathRedo,
                oldSelection: oldSelection,
                newSelection: this.editor.getDomSelection()
              });
            }
          }
        }
      } else if (keynum === 38) {
        // Arrow Up
        if (altKey && !shiftKey) {
          // Alt + Arrow Up
          // find the previous node
          prevNode = this._previousNode();

          if (prevNode) {
            this.editor.deselect(true);
            prevNode.focus(Node.focusElement || this._getElementName(target));
          }

          handled = true;
        } else if (!altKey && ctrlKey && shiftKey && editable) {
          // Ctrl + Shift + Arrow Up
          // select multiple nodes
          prevNode = this._previousNode();

          if (prevNode) {
            multiselection = this.editor.multiselection;
            multiselection.start = multiselection.start || this;
            multiselection.end = prevNode;
            nodes = this.editor._findTopLevelNodes(multiselection.start, multiselection.end);
            this.editor.select(nodes);
            prevNode.focus('field'); // select field as we know this always exists
          }

          handled = true;
        } else if (altKey && shiftKey && editable) {
          // Alt + Shift + Arrow Up
          // find the previous node
          prevNode = firstNode._previousNode();

          if (prevNode && prevNode.parent) {
            oldSelection = this.editor.getDomSelection();
            oldParent = firstNode.parent;
            oldNextNode = oldParent.childs[lastNode.getIndex() + 1] || oldParent.append;
            oldIndexRedo = firstNode.getIndex();
            newIndexRedo = prevNode.getIndex();
            oldParentPathRedo = oldParent.getInternalPath();
            newParentPathRedo = prevNode.parent.getInternalPath();
            selectedNodes.forEach(function (node) {
              prevNode.parent.moveBefore(node, prevNode);
            });
            this.focus(Node.focusElement || this._getElementName(target));

            this.editor._onAction('moveNodes', {
              count: selectedNodes.length,
              fieldNames: selectedNodes.map(getField),
              oldParentPath: oldParent.getInternalPath(),
              newParentPath: firstNode.parent.getInternalPath(),
              oldIndex: oldNextNode.getIndex(),
              newIndex: firstNode.getIndex(),
              oldIndexRedo: oldIndexRedo,
              newIndexRedo: newIndexRedo,
              oldParentPathRedo: oldParentPathRedo,
              newParentPathRedo: newParentPathRedo,
              oldSelection: oldSelection,
              newSelection: this.editor.getDomSelection()
            });
          }

          handled = true;
        }
      } else if (keynum === 39) {
        // Arrow Right
        if (altKey && !shiftKey) {
          // Alt + Arrow Right
          // move to right element
          var nextElement = this._nextElement(target);

          if (nextElement) {
            this.focus(this._getElementName(nextElement));
          }

          handled = true;
        } else if (altKey && shiftKey && editable) {
          // Alt + Shift + Arrow Right
          dom = firstNode.getDom();
          var prevDom = dom.previousSibling;

          if (prevDom) {
            prevNode = Node.getNodeFromTarget(prevDom);

            if (prevNode && prevNode.parent && !prevNode.isVisible()) {
              oldSelection = this.editor.getDomSelection();
              oldParent = firstNode.parent;
              oldNextNode = oldParent.childs[lastNode.getIndex() + 1] || oldParent.append;
              oldIndexRedo = firstNode.getIndex();
              newIndexRedo = prevNode.getIndex();
              oldParentPathRedo = oldParent.getInternalPath();
              newParentPathRedo = prevNode.parent.getInternalPath();
              selectedNodes.forEach(function (node) {
                prevNode.parent.moveBefore(node, prevNode);
              });
              this.focus(Node.focusElement || this._getElementName(target));

              this.editor._onAction('moveNodes', {
                count: selectedNodes.length,
                fieldNames: selectedNodes.map(getField),
                oldParentPath: oldParent.getInternalPath(),
                newParentPath: firstNode.parent.getInternalPath(),
                oldIndex: oldNextNode.getIndex(),
                newIndex: firstNode.getIndex(),
                oldIndexRedo: oldIndexRedo,
                newIndexRedo: newIndexRedo,
                oldParentPathRedo: oldParentPathRedo,
                newParentPathRedo: newParentPathRedo,
                oldSelection: oldSelection,
                newSelection: this.editor.getDomSelection()
              });
            }
          }
        }
      } else if (keynum === 40) {
        // Arrow Down
        if (altKey && !shiftKey) {
          // Alt + Arrow Down
          // find the next node
          nextNode = this._nextNode();

          if (nextNode) {
            this.editor.deselect(true);
            nextNode.focus(Node.focusElement || this._getElementName(target));
          }

          handled = true;
        } else if (!altKey && ctrlKey && shiftKey && editable) {
          // Ctrl + Shift + Arrow Down
          // select multiple nodes
          nextNode = this._nextNode();

          if (nextNode) {
            multiselection = this.editor.multiselection;
            multiselection.start = multiselection.start || this;
            multiselection.end = nextNode;
            nodes = this.editor._findTopLevelNodes(multiselection.start, multiselection.end);
            this.editor.select(nodes);
            nextNode.focus('field'); // select field as we know this always exists
          }

          handled = true;
        } else if (altKey && shiftKey && editable) {
          // Alt + Shift + Arrow Down
          // find the 2nd next node and move before that one
          if (lastNode.expanded) {
            nextNode = lastNode.append ? lastNode.append._nextNode() : undefined;
          } else {
            nextNode = lastNode._nextNode();
          } // when the next node is not visible, we've reached the "showMore" buttons


          if (nextNode && !nextNode.isVisible()) {
            nextNode = nextNode.parent.showMore;
          }

          if (nextNode && nextNode instanceof Node_AppendNode) {
            nextNode = lastNode;
          }

          var _nextNode2 = nextNode && (nextNode._nextNode() || nextNode.parent.append);

          if (_nextNode2 && _nextNode2.parent) {
            oldSelection = this.editor.getDomSelection();
            oldParent = firstNode.parent;
            oldNextNode = oldParent.childs[lastNode.getIndex() + 1] || oldParent.append;
            oldIndexRedo = firstNode.getIndex();
            newIndexRedo = _nextNode2.getIndex();
            oldParentPathRedo = oldParent.getInternalPath();
            newParentPathRedo = _nextNode2.parent.getInternalPath();
            selectedNodes.forEach(function (node) {
              _nextNode2.parent.moveBefore(node, _nextNode2);
            });
            this.focus(Node.focusElement || this._getElementName(target));

            this.editor._onAction('moveNodes', {
              count: selectedNodes.length,
              fieldNames: selectedNodes.map(getField),
              oldParentPath: oldParent.getInternalPath(),
              newParentPath: firstNode.parent.getInternalPath(),
              oldParentPathRedo: oldParentPathRedo,
              newParentPathRedo: newParentPathRedo,
              oldIndexRedo: oldIndexRedo,
              newIndexRedo: newIndexRedo,
              oldIndex: oldNextNode.getIndex(),
              newIndex: firstNode.getIndex(),
              oldSelection: oldSelection,
              newSelection: this.editor.getDomSelection()
            });
          }

          handled = true;
        }
      }

      if (handled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    /**
     * Handle the expand event, when clicked on the expand button
     * @param {boolean} recurse   If true, child nodes will be expanded too
     * @private
     */

  }, {
    key: "_onExpand",
    value: function _onExpand(recurse) {
      if (recurse) {
        // Take the table offline
        var table = this.dom.tr.parentNode; // TODO: not nice to access the main table like this

        var frame = table.parentNode;
        var scrollTop = frame.scrollTop;
        frame.removeChild(table);
      }

      if (this.expanded) {
        this.collapse(recurse);
      } else {
        this.expand(recurse);
      }

      if (recurse) {
        // Put the table online again
        frame.appendChild(table);
        frame.scrollTop = scrollTop;
      }
    }
    /**
     * Open a color picker to select a new color
     * @private
     */

  }, {
    key: "_showColorPicker",
    value: function _showColorPicker() {
      if (typeof this.editor.options.onColorPicker === 'function' && this.dom.color) {
        var node = this; // force deleting current color picker (if any)

        node._deleteDomColor();

        node.updateDom();
        var colorAnchor = Object(createAbsoluteAnchor["a" /* createAbsoluteAnchor */])(this.dom.color, this.editor.frame);
        this.editor.options.onColorPicker(colorAnchor, this.value, function onChange(value) {
          if (typeof value === 'string' && value !== node.value) {
            // force recreating the color block, to cleanup any attached color picker
            node._deleteDomColor();

            node.value = value;
            node.updateDom();

            node._debouncedOnChangeValue();
          }
        });
      }
    }
    /**
     * Get all field names of an object
     * @param {Node} [excludeNode] Optional node to be excluded from the returned field names
     * @return {string[]}
     */

  }, {
    key: "getFieldNames",
    value: function getFieldNames(excludeNode) {
      if (this.type === 'object') {
        return this.childs.filter(function (child) {
          return child !== excludeNode;
        }).map(function (child) {
          return child.field;
        });
      }

      return [];
    }
    /**
     * Handle insert before event
     * @param {String} [field]
     * @param {*} [value]
     * @param {String} [type]   Can be 'auto', 'array', 'object', or 'string'
     * @private
     */

  }, {
    key: "_onInsertBefore",
    value: function _onInsertBefore(field, value, type) {
      var oldSelection = this.editor.getDomSelection();
      var newNode = new Node(this.editor, {
        field: field !== undefined ? field : '',
        value: value !== undefined ? value : '',
        type: type
      });
      newNode.expand(true);
      var beforePath = this.getInternalPath();
      this.parent.insertBefore(newNode, this);
      this.editor.highlighter.unhighlight();
      newNode.focus('field');
      var newSelection = this.editor.getDomSelection();

      this.editor._onAction('insertBeforeNodes', {
        nodes: [newNode],
        paths: [newNode.getInternalPath()],
        beforePath: beforePath,
        parentPath: this.parent.getInternalPath(),
        oldSelection: oldSelection,
        newSelection: newSelection
      });
    }
    /**
     * Handle insert after event
     * @param {String} [field]
     * @param {*} [value]
     * @param {String} [type]   Can be 'auto', 'array', 'object', or 'string'
     * @private
     */

  }, {
    key: "_onInsertAfter",
    value: function _onInsertAfter(field, value, type) {
      var oldSelection = this.editor.getDomSelection();
      var newNode = new Node(this.editor, {
        field: field !== undefined ? field : '',
        value: value !== undefined ? value : '',
        type: type
      });
      newNode.expand(true);
      this.parent.insertAfter(newNode, this);
      this.editor.highlighter.unhighlight();
      newNode.focus('field');
      var newSelection = this.editor.getDomSelection();

      this.editor._onAction('insertAfterNodes', {
        nodes: [newNode],
        paths: [newNode.getInternalPath()],
        afterPath: this.getInternalPath(),
        parentPath: this.parent.getInternalPath(),
        oldSelection: oldSelection,
        newSelection: newSelection
      });
    }
    /**
     * Handle append event
     * @param {String} [field]
     * @param {*} [value]
     * @param {String} [type]   Can be 'auto', 'array', 'object', or 'string'
     * @private
     */

  }, {
    key: "_onAppend",
    value: function _onAppend(field, value, type) {
      var oldSelection = this.editor.getDomSelection();
      var newNode = new Node(this.editor, {
        field: field !== undefined ? field : '',
        value: value !== undefined ? value : '',
        type: type
      });
      newNode.expand(true);
      this.parent.appendChild(newNode);
      this.editor.highlighter.unhighlight();
      newNode.focus('field');
      var newSelection = this.editor.getDomSelection();

      this.editor._onAction('appendNodes', {
        nodes: [newNode],
        paths: [newNode.getInternalPath()],
        parentPath: this.parent.getInternalPath(),
        oldSelection: oldSelection,
        newSelection: newSelection
      });
    }
    /**
     * Change the type of the node's value
     * @param {String} newType
     * @private
     */

  }, {
    key: "_onChangeType",
    value: function _onChangeType(newType) {
      var oldType = this.type;

      if (newType !== oldType) {
        var oldSelection = this.editor.getDomSelection();
        this.changeType(newType);
        var newSelection = this.editor.getDomSelection();

        this.editor._onAction('changeType', {
          path: this.getInternalPath(),
          oldType: oldType,
          newType: newType,
          oldSelection: oldSelection,
          newSelection: newSelection
        });
      }
    }
    /**
     * Sort the child's of the node. Only applicable when the node has type 'object'
     * or 'array'.
     * @param {String[] | string} path  Path of the child value to be compared
     * @param {String} direction        Sorting direction. Available values: "asc", "desc"
     * @private
     */

  }, {
    key: "sort",
    value: function sort(path, direction) {
      if (typeof path === 'string') {
        path = Object(util["parsePath"])(path);
      }

      if (!this._hasChilds()) {
        return;
      }

      this.hideChilds(); // sorting is faster when the childs are not attached to the dom
      // copy the childs array (the old one will be kept for an undo action

      var oldChilds = this.childs;
      this.childs = this.childs.concat(); // sort the childs array

      var order = direction === 'desc' ? -1 : 1;

      if (this.type === 'object') {
        this.childs.sort(function (a, b) {
          return order * naturalSort_default()(a.field, b.field);
        });
      } else {
        // this.type === 'array'
        this.childs.sort(function (a, b) {
          var nodeA = a.getNestedChild(path);
          var nodeB = b.getNestedChild(path);

          if (!nodeA) {
            return order;
          }

          if (!nodeB) {
            return -order;
          }

          var valueA = nodeA.value;
          var valueB = nodeB.value;

          if (typeof valueA !== 'string' && typeof valueB !== 'string') {
            // both values are a number, boolean, or null -> use simple, fast sorting
            return valueA > valueB ? order : valueA < valueB ? -order : 0;
          }

          return order * naturalSort_default()(valueA, valueB);
        });
      } // update the index numbering


      this._updateDomIndexes();

      this.editor._onAction('sort', {
        path: this.getInternalPath(),
        oldChilds: oldChilds,
        newChilds: this.childs
      });

      this.showChilds();
    }
    /**
     * Replace the value of the node, keep it's state
     * @param {*} newValue
     */

  }, {
    key: "update",
    value: function update(newValue) {
      var oldValue = this.getInternalValue();
      this.setValue(newValue);

      this.editor._onAction('transform', {
        path: this.getInternalPath(),
        oldValue: oldValue,
        newValue: this.getInternalValue()
      });
    }
    /**
     * Remove this node from the DOM
     * @returns {{table: Element, nextTr?: Element}}
     *            Returns the DOM elements that which be used to attach the node
     *            to the DOM again, see _attachToDom.
     * @private
     */

  }, {
    key: "_detachFromDom",
    value: function _detachFromDom() {
      var table = this.dom.tr ? this.dom.tr.parentNode : undefined;
      var lastTr;

      if (this.expanded) {
        lastTr = this.getAppendDom();
      } else {
        lastTr = this.getDom();
      }

      var nextTr = lastTr && lastTr.parentNode ? lastTr.nextSibling : undefined;
      this.hide({
        resetVisibleChilds: false
      });
      return {
        table: table,
        nextTr: nextTr
      };
    }
    /**
     * Attach this node to the DOM again
     * @param {{table: Element, nextTr?: Element}} domAnchor
     *            The DOM elements returned by _detachFromDom.
     * @private
     */

  }, {
    key: "_attachToDom",
    value: function _attachToDom(domAnchor) {
      if (domAnchor.table) {
        if (domAnchor.nextTr) {
          domAnchor.table.insertBefore(this.getDom(), domAnchor.nextTr);
        } else {
          domAnchor.table.appendChild(this.getDom());
        }
      }

      if (this.expanded) {
        this.showChilds();
      }
    }
    /**
     * Transform the node given a JMESPath query.
     * @param {String} query    JMESPath query to apply
     * @private
     */

  }, {
    key: "transform",
    value: function transform(query) {
      if (!this._hasChilds()) {
        return;
      }

      this.hideChilds(); // sorting is faster when the childs are not attached to the dom

      try {
        var oldInternalValue = this.getInternalValue(); // apply the JMESPath query

        var oldValue = this.getValue();
        var newValue = jmespath_default.a.search(oldValue, query);
        this.setValue(newValue);
        var newInternalValue = this.getInternalValue();

        this.editor._onAction('transform', {
          path: this.getInternalPath(),
          oldValue: oldInternalValue,
          newValue: newInternalValue
        });

        this.showChilds();
      } catch (err) {
        this.showChilds();

        this.editor._onError(err);
      }
    }
    /**
     * Make this object the root object of the ditor
     */

  }, {
    key: "extract",
    value: function extract() {
      this.editor.node.hideChilds();
      this.hideChilds();

      try {
        var oldInternalValue = this.editor.node.getInternalValue();

        this.editor._setRoot(this);

        var newInternalValue = this.editor.node.getInternalValue();

        this.editor._onAction('transform', {
          path: this.editor.node.getInternalPath(),
          oldValue: oldInternalValue,
          newValue: newInternalValue
        });
      } catch (err) {
        this.editor._onError(err);
      } finally {
        this.updateDom({
          recurse: true
        });
        this.showChilds();
      }
    }
    /**
     * Get a nested child given a path with properties
     * @param {String[]} path
     * @returns {Node}
     */

  }, {
    key: "getNestedChild",
    value: function getNestedChild(path) {
      var i = 0;
      var child = this;

      while (child && i < path.length) {
        child = child.findChildByProperty(path[i]);
        i++;
      }

      return child;
    }
    /**
     * Find a child by property name
     * @param {string} prop
     * @return {Node | undefined} Returns the child node when found, or undefined otherwise
     */

  }, {
    key: "findChildByProperty",
    value: function findChildByProperty(prop) {
      if (this.type !== 'object') {
        return undefined;
      }

      return this.childs.find(function (child) {
        return child.field === prop;
      });
    }
    /**
     * Create a table row with an append button.
     * @return {HTMLElement | undefined} tr with the AppendNode contents
     */

  }, {
    key: "getAppendDom",
    value: function getAppendDom() {
      if (!this.append) {
        this.append = new Node_AppendNode(this.editor);
        this.append.setParent(this);
      }

      return this.append.getDom();
    }
    /**
     * Create a table row with an showMore button and text
     * @return {HTMLElement | undefined} tr with the AppendNode contents
     */

  }, {
    key: "getShowMoreDom",
    value: function getShowMoreDom() {
      if (!this.showMore) {
        this.showMore = new Node_ShowMoreNode(this.editor, this);
      }

      return this.showMore.getDom();
    }
    /**
     * Get the next sibling of current node
     * @return {Node} nextSibling
     */

  }, {
    key: "nextSibling",
    value: function nextSibling() {
      var index = this.parent.childs.indexOf(this);
      return this.parent.childs[index + 1] || this.parent.append;
    }
    /**
     * Get the previously rendered node
     * @return {Node | null} previousNode
     */

  }, {
    key: "_previousNode",
    value: function _previousNode() {
      var prevNode = null;
      var dom = this.getDom();

      if (dom && dom.parentNode) {
        // find the previous field
        var prevDom = dom;

        do {
          prevDom = prevDom.previousSibling;
          prevNode = Node.getNodeFromTarget(prevDom);
        } while (prevDom && prevNode && prevNode instanceof Node_AppendNode && !prevNode.isVisible());
      }

      return prevNode;
    }
    /**
     * Get the next rendered node
     * @return {Node | null} nextNode
     * @private
     */

  }, {
    key: "_nextNode",
    value: function _nextNode() {
      var nextNode = null;
      var dom = this.getDom();

      if (dom && dom.parentNode) {
        // find the previous field
        var nextDom = dom;

        do {
          nextDom = nextDom.nextSibling;
          nextNode = Node.getNodeFromTarget(nextDom);
        } while (nextDom && nextNode && nextNode instanceof Node_AppendNode && !nextNode.isVisible());
      }

      return nextNode;
    }
    /**
     * Get the first rendered node
     * @return {Node | null} firstNode
     * @private
     */

  }, {
    key: "_firstNode",
    value: function _firstNode() {
      var firstNode = null;
      var dom = this.getDom();

      if (dom && dom.parentNode) {
        var firstDom = dom.parentNode.firstChild;
        firstNode = Node.getNodeFromTarget(firstDom);
      }

      return firstNode;
    }
    /**
     * Get the last rendered node
     * @return {Node | null} lastNode
     * @private
     */

  }, {
    key: "_lastNode",
    value: function _lastNode() {
      var lastNode = null;
      var dom = this.getDom();

      if (dom && dom.parentNode) {
        var lastDom = dom.parentNode.lastChild;
        lastNode = Node.getNodeFromTarget(lastDom);

        while (lastDom && lastNode && !lastNode.isVisible()) {
          lastDom = lastDom.previousSibling;
          lastNode = Node.getNodeFromTarget(lastDom);
        }
      }

      return lastNode;
    }
    /**
     * Get the next element which can have focus.
     * @param {Element} elem
     * @return {Element | null} nextElem
     * @private
     */

  }, {
    key: "_previousElement",
    value: function _previousElement(elem) {
      var dom = this.dom; // noinspection FallthroughInSwitchStatementJS

      switch (elem) {
        case dom.value:
          if (this.fieldEditable) {
            return dom.field;
          }

        // intentional fall through

        case dom.field:
          if (this._hasChilds()) {
            return dom.expand;
          }

        // intentional fall through

        case dom.expand:
          return dom.menu;

        case dom.menu:
          if (dom.drag) {
            return dom.drag;
          }

        // intentional fall through

        default:
          return null;
      }
    }
    /**
     * Get the next element which can have focus.
     * @param {Element} elem
     * @return {Element | null} nextElem
     * @private
     */

  }, {
    key: "_nextElement",
    value: function _nextElement(elem) {
      var dom = this.dom; // noinspection FallthroughInSwitchStatementJS

      switch (elem) {
        case dom.drag:
          return dom.menu;

        case dom.menu:
          if (this._hasChilds()) {
            return dom.expand;
          }

        // intentional fall through

        case dom.expand:
          if (this.fieldEditable) {
            return dom.field;
          }

        // intentional fall through

        case dom.field:
          if (!this._hasChilds()) {
            return dom.value;
          }

        // intentional fall through

        default:
          return null;
      }
    }
    /**
     * Get the dom name of given element. returns null if not found.
     * For example when element === dom.field, "field" is returned.
     * @param {Element} element
     * @return {String | null} elementName  Available elements with name: 'drag',
     *                                      'menu', 'expand', 'field', 'value'
     * @private
     */

  }, {
    key: "_getElementName",
    value: function _getElementName(element) {
      var _this2 = this;

      return Object.keys(this.dom).find(function (name) {
        return _this2.dom[name] === element;
      });
    }
    /**
     * Test if this node has childs. This is the case when the node is an object
     * or array.
     * @return {boolean} hasChilds
     * @private
     */

  }, {
    key: "_hasChilds",
    value: function _hasChilds() {
      return this.type === 'array' || this.type === 'object';
    }
  }, {
    key: "addTemplates",
    value: function addTemplates(menu, append) {
      var node = this;
      var templates = node.editor.options.templates;
      if (templates == null) return;

      if (templates.length) {
        // create a separator
        menu.push({
          type: 'separator'
        });
      }

      var appendData = function appendData(name, data) {
        node._onAppend(name, data);
      };

      var insertData = function insertData(name, data) {
        node._onInsertBefore(name, data);
      };

      templates.forEach(function (template) {
        menu.push({
          text: template.text,
          className: template.className || 'jsoneditor-type-object',
          title: template.title,
          click: append ? appendData.bind(this, template.field, template.value) : insertData.bind(this, template.field, template.value)
        });
      });
    }
    /**
     * Show a contextmenu for this node
     * @param {HTMLElement} anchor   Anchor element to attach the context menu to
     *                               as sibling.
     * @param {function} [onClose]   Callback method called when the context menu
     *                               is being closed.
     */

  }, {
    key: "showContextMenu",
    value: function showContextMenu(anchor, onClose) {
      var node = this;
      var titles = Node.TYPE_TITLES;
      var items = [];

      if (this.editable.value) {
        items.push({
          text: Object(i18n["c" /* translate */])('type'),
          title: Object(i18n["c" /* translate */])('typeTitle'),
          className: 'jsoneditor-type-' + this.type,
          submenu: [{
            text: Object(i18n["c" /* translate */])('auto'),
            className: 'jsoneditor-type-auto' + (this.type === 'auto' ? ' jsoneditor-selected' : ''),
            title: titles.auto,
            click: function click() {
              node._onChangeType('auto');
            }
          }, {
            text: Object(i18n["c" /* translate */])('array'),
            className: 'jsoneditor-type-array' + (this.type === 'array' ? ' jsoneditor-selected' : ''),
            title: titles.array,
            click: function click() {
              node._onChangeType('array');
            }
          }, {
            text: Object(i18n["c" /* translate */])('object'),
            className: 'jsoneditor-type-object' + (this.type === 'object' ? ' jsoneditor-selected' : ''),
            title: titles.object,
            click: function click() {
              node._onChangeType('object');
            }
          }, {
            text: Object(i18n["c" /* translate */])('string'),
            className: 'jsoneditor-type-string' + (this.type === 'string' ? ' jsoneditor-selected' : ''),
            title: titles.string,
            click: function click() {
              node._onChangeType('string');
            }
          }]
        });
      }

      if (this._hasChilds()) {
        if (this.editor.options.enableSort) {
          items.push({
            text: Object(i18n["c" /* translate */])('sort'),
            title: Object(i18n["c" /* translate */])('sortTitle', {
              type: this.type
            }),
            className: 'jsoneditor-sort-asc',
            click: function click() {
              node.showSortModal();
            }
          });
        }

        if (this.editor.options.enableTransform) {
          items.push({
            text: Object(i18n["c" /* translate */])('transform'),
            title: Object(i18n["c" /* translate */])('transformTitle', {
              type: this.type
            }),
            className: 'jsoneditor-transform',
            click: function click() {
              node.showTransformModal();
            }
          });
        }

        if (this.parent) {
          items.push({
            text: Object(i18n["c" /* translate */])('extract'),
            title: Object(i18n["c" /* translate */])('extractTitle', {
              type: this.type
            }),
            className: 'jsoneditor-extract',
            click: function click() {
              node.extract();
            }
          });
        }
      }

      if (this.parent && this.parent._hasChilds()) {
        if (items.length) {
          // create a separator
          items.push({
            type: 'separator'
          });
        } // create append button (for last child node only)


        var childs = node.parent.childs;

        if (node === childs[childs.length - 1]) {
          var appendSubmenu = [{
            text: Object(i18n["c" /* translate */])('auto'),
            className: 'jsoneditor-type-auto',
            title: titles.auto,
            click: function click() {
              node._onAppend('', '', 'auto');
            }
          }, {
            text: Object(i18n["c" /* translate */])('array'),
            className: 'jsoneditor-type-array',
            title: titles.array,
            click: function click() {
              node._onAppend('', []);
            }
          }, {
            text: Object(i18n["c" /* translate */])('object'),
            className: 'jsoneditor-type-object',
            title: titles.object,
            click: function click() {
              node._onAppend('', {});
            }
          }, {
            text: Object(i18n["c" /* translate */])('string'),
            className: 'jsoneditor-type-string',
            title: titles.string,
            click: function click() {
              node._onAppend('', '', 'string');
            }
          }];
          node.addTemplates(appendSubmenu, true);
          items.push({
            text: Object(i18n["c" /* translate */])('appendText'),
            title: Object(i18n["c" /* translate */])('appendTitle'),
            submenuTitle: Object(i18n["c" /* translate */])('appendSubmenuTitle'),
            className: 'jsoneditor-append',
            click: function click() {
              node._onAppend('', '', 'auto');
            },
            submenu: appendSubmenu
          });
        } // create insert button


        var insertSubmenu = [{
          text: Object(i18n["c" /* translate */])('auto'),
          className: 'jsoneditor-type-auto',
          title: titles.auto,
          click: function click() {
            node._onInsertBefore('', '', 'auto');
          }
        }, {
          text: Object(i18n["c" /* translate */])('array'),
          className: 'jsoneditor-type-array',
          title: titles.array,
          click: function click() {
            node._onInsertBefore('', []);
          }
        }, {
          text: Object(i18n["c" /* translate */])('object'),
          className: 'jsoneditor-type-object',
          title: titles.object,
          click: function click() {
            node._onInsertBefore('', {});
          }
        }, {
          text: Object(i18n["c" /* translate */])('string'),
          className: 'jsoneditor-type-string',
          title: titles.string,
          click: function click() {
            node._onInsertBefore('', '', 'string');
          }
        }];
        node.addTemplates(insertSubmenu, false);
        items.push({
          text: Object(i18n["c" /* translate */])('insert'),
          title: Object(i18n["c" /* translate */])('insertTitle'),
          submenuTitle: Object(i18n["c" /* translate */])('insertSub'),
          className: 'jsoneditor-insert',
          click: function click() {
            node._onInsertBefore('', '', 'auto');
          },
          submenu: insertSubmenu
        });

        if (this.editable.field) {
          // create duplicate button
          items.push({
            text: Object(i18n["c" /* translate */])('duplicateText'),
            title: Object(i18n["c" /* translate */])('duplicateField'),
            className: 'jsoneditor-duplicate',
            click: function click() {
              Node.onDuplicate(node);
            }
          }); // create remove button

          items.push({
            text: Object(i18n["c" /* translate */])('removeText'),
            title: Object(i18n["c" /* translate */])('removeField'),
            className: 'jsoneditor-remove',
            click: function click() {
              Node.onRemove(node);
            }
          });
        }
      }

      if (this.editor.options.onCreateMenu) {
        var path = node.getPath();
        items = this.editor.options.onCreateMenu(items, {
          type: 'single',
          path: path,
          paths: [path]
        });
      }

      var menu = new ContextMenu["a" /* ContextMenu */](items, {
        close: onClose
      });
      menu.show(anchor, this.editor.frame);
    }
    /**
     * Show sorting modal
     */

  }, {
    key: "showSortModal",
    value: function showSortModal() {
      var node = this;
      var container = this.editor.options.modalAnchor || constants["a" /* DEFAULT_MODAL_ANCHOR */];
      var json = this.getValue();

      function onSort(sortedBy) {
        var path = sortedBy.path;
        var pathArray = Object(util["parsePath"])(path);
        node.sortedBy = sortedBy;
        node.sort(pathArray, sortedBy.direction);
      }

      Object(js_showSortModal["a" /* showSortModal */])(container, json, onSort, node.sortedBy);
    }
    /**
     * Show transform modal
     */

  }, {
    key: "showTransformModal",
    value: function showTransformModal() {
      var node = this;
      var anchor = this.editor.options.modalAnchor || constants["a" /* DEFAULT_MODAL_ANCHOR */];
      var json = node.getValue();

      Object(js_showTransformModal["a" /* showTransformModal */])(anchor, json, function (query) {
        node.transform(query);
      });
    }
    /**
     * get the type of a value
     * @param {*} value
     * @return {String} type   Can be 'object', 'array', 'string', 'auto'
     * @private
     */

  }, {
    key: "_getType",
    value: function _getType(value) {
      if (value instanceof Array) {
        return 'array';
      }

      if (value instanceof Object) {
        return 'object';
      }

      if (typeof value === 'string' && typeof Object(util["parseString"])(value) !== 'string') {
        return 'string';
      }

      return 'auto';
    }
    /**
     * escape a text, such that it can be displayed safely in an HTML element
     * @param {String} text
     * @return {String} escapedText
     * @private
     */

  }, {
    key: "_escapeHTML",
    value: function _escapeHTML(text) {
      if (typeof text !== 'string') {
        return String(text);
      } else {
        var htmlEscaped = String(text).replace(/&/g, '&amp;') // must be replaced first!
        .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/ {2}/g, ' &nbsp;') // replace double space with an nbsp and space
        .replace(/^ /, '&nbsp;') // space at start
        .replace(/ $/, '&nbsp;'); // space at end

        var json = JSON.stringify(htmlEscaped);
        var html = json.substring(1, json.length - 1);

        if (this.editor.options.escapeUnicode === true) {
          html = Object(util["escapeUnicodeChars"])(html);
        }

        return html;
      }
    }
    /**
     * unescape a string.
     * @param {String} escapedText
     * @return {String} text
     * @private
     */

  }, {
    key: "_unescapeHTML",
    value: function _unescapeHTML(escapedText) {
      var json = '"' + this._escapeJSON(escapedText) + '"';
      var htmlEscaped = Object(util["parse"])(json);
      return htmlEscaped.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;|\u00A0/g, ' ').replace(/&amp;/g, '&'); // must be replaced last
    }
    /**
     * escape a text to make it a valid JSON string. The method will:
     *   - replace unescaped double quotes with '\"'
     *   - replace unescaped backslash with '\\'
     *   - replace returns with '\n'
     * @param {String} text
     * @return {String} escapedText
     * @private
     */

  }, {
    key: "_escapeJSON",
    value: function _escapeJSON(text) {
      // TODO: replace with some smart regex (only when a new solution is faster!)
      var escaped = '';
      var i = 0;

      while (i < text.length) {
        var c = text.charAt(i);

        if (c === '\n') {
          escaped += '\\n';
        } else if (c === '\\') {
          escaped += c;
          i++;
          c = text.charAt(i);

          if (c === '' || '"\\/bfnrtu'.indexOf(c) === -1) {
            escaped += '\\'; // no valid escape character
          }

          escaped += c;
        } else if (c === '"') {
          escaped += '\\"';
        } else {
          escaped += c;
        }

        i++;
      }

      return escaped;
    }
    /**
     * update the object name according to the callback onNodeName
     * @private
     */

  }, {
    key: "updateNodeName",
    value: function updateNodeName() {
      var count = this.childs ? this.childs.length : 0;
      var nodeName;

      if (this.type === 'object' || this.type === 'array') {
        if (this.editor.options.onNodeName) {
          try {
            nodeName = this.editor.options.onNodeName({
              path: this.getPath(),
              size: count,
              type: this.type
            });
          } catch (err) {
            console.error('Error in onNodeName callback: ', err);
          }
        }

        this.dom.value.innerHTML = this.type === 'object' ? '{' + (nodeName || count) + '}' : '[' + (nodeName || count) + ']';
      }
    }
    /**
     * update recursively the object's and its children's name.
     * @private
     */

  }, {
    key: "recursivelyUpdateNodeName",
    value: function recursivelyUpdateNodeName() {
      if (this.expanded) {
        this.updateNodeName();

        if (this.childs !== 'undefined') {
          var i;

          for (i in this.childs) {
            this.childs[i].recursivelyUpdateNodeName();
          }
        }
      }
    }
  }]);

  return Node;
}(); // debounce interval for keyboard input in milliseconds

Node_Node.prototype.DEBOUNCE_INTERVAL = 150; // search will stop iterating as soon as the max is reached

Node_Node.prototype.MAX_SEARCH_RESULTS = 999; // default number of child nodes to display

var DEFAULT_MAX_VISIBLE_CHILDS = 100; // stores the element name currently having the focus

Node_Node.focusElement = undefined;
/**
 * Select all text in an editable div after a delay of 0 ms
 * @param {Element} editableDiv
 */

Node_Node.select = function (editableDiv) {
  setTimeout(function () {
    Object(util["selectContentEditable"])(editableDiv);
  }, 0);
};
/**
 * DragStart event, fired on mousedown on the dragarea at the left side of a Node
 * @param {Node[] | Node} nodes
 * @param {Event} event
 */


Node_Node.onDragStart = function (nodes, event) {
  if (!Array.isArray(nodes)) {
    return Node_Node.onDragStart([nodes], event);
  }

  if (nodes.length === 0) {
    return;
  }

  var firstNode = nodes[0];
  var lastNode = nodes[nodes.length - 1];
  var parent = firstNode.parent;
  var draggedNode = Node_Node.getNodeFromTarget(event.target);
  var editor = firstNode.editor; // in case of multiple selected nodes, offsetY prevents the selection from
  // jumping when you start dragging one of the lower down nodes in the selection

  var offsetY = Object(util["getAbsoluteTop"])(draggedNode.dom.tr) - Object(util["getAbsoluteTop"])(firstNode.dom.tr);

  if (!editor.mousemove) {
    editor.mousemove = Object(util["addEventListener"])(window, 'mousemove', function (event) {
      Node_Node.onDrag(nodes, event);
    });
  }

  if (!editor.mouseup) {
    editor.mouseup = Object(util["addEventListener"])(window, 'mouseup', function (event) {
      Node_Node.onDragEnd(nodes, event);
    });
  }

  editor.highlighter.lock();
  editor.drag = {
    oldCursor: document.body.style.cursor,
    oldSelection: editor.getDomSelection(),
    oldPaths: nodes.map(getInternalPath),
    oldParent: parent,
    oldNextNode: parent.childs[lastNode.getIndex() + 1] || parent.append,
    oldParentPathRedo: parent.getInternalPath(),
    oldIndexRedo: firstNode.getIndex(),
    mouseX: event.pageX,
    offsetY: offsetY,
    level: firstNode.getLevel()
  };
  document.body.style.cursor = 'move';
  event.preventDefault();
};
/**
 * Drag event, fired when moving the mouse while dragging a Node
 * @param {Node[] | Node} nodes
 * @param {Event} event
 */


Node_Node.onDrag = function (nodes, event) {
  if (!Array.isArray(nodes)) {
    return Node_Node.onDrag([nodes], event);
  }

  if (nodes.length === 0) {
    return;
  } // TODO: this method has grown too large. Split it in a number of methods


  var editor = nodes[0].editor;
  var mouseY = event.pageY - editor.drag.offsetY;
  var mouseX = event.pageX;
  var trPrev, trNext, trFirst, trLast, trRoot;
  var nodePrev, nodeNext;
  var topPrev, topFirst, bottomNext, heightNext;
  var moved = false; // TODO: add an ESC option, which resets to the original position
  // move up/down

  var firstNode = nodes[0];
  var trThis = firstNode.dom.tr;
  var topThis = Object(util["getAbsoluteTop"])(trThis);
  var heightThis = trThis.offsetHeight;

  if (mouseY < topThis) {
    // move up
    trPrev = trThis;

    do {
      trPrev = trPrev.previousSibling;
      nodePrev = Node_Node.getNodeFromTarget(trPrev);
      topPrev = trPrev ? Object(util["getAbsoluteTop"])(trPrev) : 0;
    } while (trPrev && mouseY < topPrev);

    if (nodePrev && !nodePrev.parent) {
      nodePrev = undefined;
    }

    if (!nodePrev) {
      // move to the first node
      trRoot = trThis.parentNode.firstChild;
      trPrev = trRoot ? trRoot.nextSibling : undefined;
      nodePrev = Node_Node.getNodeFromTarget(trPrev);

      if (nodePrev === firstNode) {
        nodePrev = undefined;
      }
    }

    if (nodePrev && nodePrev.isVisible()) {
      // check if mouseY is really inside the found node
      trPrev = nodePrev.dom.tr;
      topPrev = trPrev ? Object(util["getAbsoluteTop"])(trPrev) : 0;

      if (mouseY > topPrev + heightThis) {
        nodePrev = undefined;
      }
    }

    if (nodePrev) {
      nodes.forEach(function (node) {
        nodePrev.parent.moveBefore(node, nodePrev);
      });
      moved = true;
    }
  } else {
    // move down
    var lastNode = nodes[nodes.length - 1];
    trLast = lastNode.expanded && lastNode.append ? lastNode.append.getDom() : lastNode.dom.tr;
    trFirst = trLast ? trLast.nextSibling : undefined;

    if (trFirst) {
      topFirst = Object(util["getAbsoluteTop"])(trFirst);
      trNext = trFirst;

      do {
        nodeNext = Node_Node.getNodeFromTarget(trNext);

        if (trNext) {
          bottomNext = trNext.nextSibling ? Object(util["getAbsoluteTop"])(trNext.nextSibling) : 0;
          heightNext = trNext ? bottomNext - topFirst : 0;

          if (nodeNext && nodeNext.parent.childs.length === nodes.length && nodeNext.parent.childs[nodes.length - 1] === lastNode) {
            // We are about to remove the last child of this parent,
            // which will make the parents appendNode visible.
            topThis += 27; // TODO: dangerous to suppose the height of the appendNode a constant of 27 px.
          }

          trNext = trNext.nextSibling;
        }
      } while (trNext && mouseY > topThis + heightNext);

      if (nodeNext && nodeNext.parent) {
        // calculate the desired level
        var diffX = mouseX - editor.drag.mouseX;
        var diffLevel = Math.round(diffX / 24 / 2);
        var level = editor.drag.level + diffLevel; // desired level

        var levelNext = nodeNext.getLevel(); // level to be
        // find the best fitting level (move upwards over the append nodes)

        trPrev = nodeNext.dom.tr && nodeNext.dom.tr.previousSibling;

        while (levelNext < level && trPrev) {
          nodePrev = Node_Node.getNodeFromTarget(trPrev);
          var isDraggedNode = nodes.some(function (node) {
            return node === nodePrev || nodePrev.isDescendantOf(node);
          });

          if (isDraggedNode) ; else if (nodePrev instanceof Node_AppendNode) {
            var childs = nodePrev.parent.childs;

            if (childs.length !== nodes.length || childs[nodes.length - 1] !== lastNode) {
              // non-visible append node of a list of childs
              // consisting of not only this node (else the
              // append node will change into a visible "empty"
              // text when removing this node).
              nodeNext = Node_Node.getNodeFromTarget(trPrev);
              levelNext = nodeNext.getLevel();
            } else {
              break;
            }
          } else {
            break;
          }

          trPrev = trPrev.previousSibling;
        }

        if (nodeNext instanceof Node_AppendNode && !nodeNext.isVisible() && nodeNext.parent.showMore.isVisible()) {
          nodeNext = nodeNext._nextNode();
        } // move the node when its position is changed


        if (nodeNext && nodeNext.dom.tr && trLast.nextSibling !== nodeNext.dom.tr) {
          nodes.forEach(function (node) {
            nodeNext.parent.moveBefore(node, nodeNext);
          });
          moved = true;
        }
      }
    }
  }

  if (moved) {
    // update the dragging parameters when moved
    editor.drag.mouseX = mouseX;
    editor.drag.level = firstNode.getLevel();
  } // auto scroll when hovering around the top of the editor


  editor.startAutoScroll(mouseY);
  event.preventDefault();
};
/**
 * Drag event, fired on mouseup after having dragged a node
 * @param {Node[] | Node} nodes
 * @param {Event} event
 */


Node_Node.onDragEnd = function (nodes, event) {
  if (!Array.isArray(nodes)) {
    return Node_Node.onDrag([nodes], event);
  }

  if (nodes.length === 0) {
    return;
  }

  var firstNode = nodes[0];
  var editor = firstNode.editor; // set focus to the context menu button of the first node

  if (nodes[0]) {
    nodes[0].dom.menu.focus();
  }

  var oldParentPath = editor.drag.oldParent.getInternalPath();
  var newParentPath = firstNode.parent.getInternalPath();
  var sameParent = editor.drag.oldParent === firstNode.parent;
  var oldIndex = editor.drag.oldNextNode.getIndex();
  var newIndex = firstNode.getIndex();
  var oldParentPathRedo = editor.drag.oldParentPathRedo;
  var oldIndexRedo = editor.drag.oldIndexRedo;
  var newIndexRedo = sameParent && oldIndexRedo < newIndex ? newIndex + nodes.length : newIndex;

  if (!sameParent || oldIndexRedo !== newIndex) {
    // only register this action if the node is actually moved to another place
    editor._onAction('moveNodes', {
      count: nodes.length,
      fieldNames: nodes.map(getField),
      oldParentPath: oldParentPath,
      newParentPath: newParentPath,
      oldIndex: oldIndex,
      newIndex: newIndex,
      oldIndexRedo: oldIndexRedo,
      newIndexRedo: newIndexRedo,
      oldParentPathRedo: oldParentPathRedo,
      newParentPathRedo: null,
      // This is a hack, value will be filled in during undo
      oldSelection: editor.drag.oldSelection,
      newSelection: editor.getDomSelection()
    });
  }

  document.body.style.cursor = editor.drag.oldCursor;
  editor.highlighter.unlock();
  nodes.forEach(function (node) {
    node.updateDom();

    if (event.target !== node.dom.drag && event.target !== node.dom.menu) {
      editor.highlighter.unhighlight();
    }
  });
  delete editor.drag;

  if (editor.mousemove) {
    Object(util["removeEventListener"])(window, 'mousemove', editor.mousemove);
    delete editor.mousemove;
  }

  if (editor.mouseup) {
    Object(util["removeEventListener"])(window, 'mouseup', editor.mouseup);
    delete editor.mouseup;
  } // Stop any running auto scroll


  editor.stopAutoScroll();
  event.preventDefault();
};
/**
 * find an enum definition in a JSON schema, as property `enum` or inside
 * one of the schemas composites (`oneOf`, `anyOf`, `allOf`)
 * @param  {Object} schema
 * @return {Array | null} Returns the enum when found, null otherwise.
 * @private
 */


Node_Node._findEnum = function (schema) {
  if (schema["enum"]) {
    return schema["enum"];
  }

  var composite = schema.oneOf || schema.anyOf || schema.allOf;

  if (composite) {
    var match = composite.filter(function (entry) {
      return entry["enum"];
    });

    if (match.length > 0) {
      return match[0]["enum"];
    }
  }

  return null;
};
/**
 * Return the part of a JSON schema matching given path.
 * @param {Object} schema
 * @param {Object} schemaRefs
 * @param {Array.<string | number>} path
 * @return {Object | null}
 * @private
 */


Node_Node._findSchema = function (schema, schemaRefs, path) {
  var childSchema = schema;
  var foundSchema = childSchema;
  var allSchemas = schema.oneOf || schema.anyOf || schema.allOf;

  if (!allSchemas) {
    allSchemas = [schema];
  }

  for (var j = 0; j < allSchemas.length; j++) {
    childSchema = allSchemas[j];

    if ('$ref' in childSchema && typeof childSchema.$ref === 'string') {
      childSchema = schemaRefs[childSchema.$ref];

      if (childSchema) {
        foundSchema = Node_Node._findSchema(childSchema, schemaRefs, path);
      }
    }

    for (var i = 0; i < path.length && childSchema; i++) {
      var nextPath = path.slice(i + 1, path.length);
      var key = path[i];

      if (typeof key === 'string' && childSchema.patternProperties && !(childSchema.properties && key in childSchema.properties)) {
        for (var prop in childSchema.patternProperties) {
          if (key.match(prop)) {
            foundSchema = Node_Node._findSchema(childSchema.patternProperties[prop], schemaRefs, nextPath);
          }
        }
      } else if (typeof key === 'string' && childSchema.properties) {
        if (!(key in childSchema.properties)) {
          foundSchema = null;
        } else {
          childSchema = childSchema.properties[key];

          if (childSchema) {
            foundSchema = Node_Node._findSchema(childSchema, schemaRefs, nextPath);
          }
        }
      } else if (typeof key === 'number' && childSchema.items) {
        childSchema = childSchema.items;

        if (childSchema) {
          foundSchema = Node_Node._findSchema(childSchema, schemaRefs, nextPath);
        }
      }
    }
  } // If the found schema is the input schema, the schema does not have the given path


  if (foundSchema === schema && path.length > 0) {
    return null;
  }

  return foundSchema;
};
/**
 * Remove nodes
 * @param {Node[] | Node} nodes
 */


Node_Node.onRemove = function (nodes) {
  if (!Array.isArray(nodes)) {
    return Node_Node.onRemove([nodes]);
  }

  if (nodes && nodes.length > 0) {
    var firstNode = nodes[0];
    var parent = firstNode.parent;
    var editor = firstNode.editor;
    var firstIndex = firstNode.getIndex();
    editor.highlighter.unhighlight(); // adjust the focus

    var oldSelection = editor.getDomSelection();
    Node_Node.blurNodes(nodes);
    var newSelection = editor.getDomSelection(); // store the paths before removing them (needed for history)

    var paths = nodes.map(getInternalPath); // remove the nodes

    nodes.forEach(function (node) {
      node.parent._remove(node);
    }); // store history action

    editor._onAction('removeNodes', {
      nodes: nodes,
      paths: paths,
      parentPath: parent.getInternalPath(),
      index: firstIndex,
      oldSelection: oldSelection,
      newSelection: newSelection
    });
  }
};
/**
 * Duplicate nodes
 * duplicated nodes will be added right after the original nodes
 * @param {Node[] | Node} nodes
 */


Node_Node.onDuplicate = function (nodes) {
  if (!Array.isArray(nodes)) {
    return Node_Node.onDuplicate([nodes]);
  }

  if (nodes && nodes.length > 0) {
    var lastNode = nodes[nodes.length - 1];
    var parent = lastNode.parent;
    var editor = lastNode.editor;
    editor.deselect(editor.multiselection.nodes); // duplicate the nodes

    var oldSelection = editor.getDomSelection();
    var afterNode = lastNode;
    var clones = nodes.map(function (node) {
      var clone = node.clone();

      if (node.parent.type === 'object') {
        var existingFieldNames = node.parent.getFieldNames();
        clone.field = Object(util["findUniqueName"])(node.field, existingFieldNames);
      }

      parent.insertAfter(clone, afterNode);
      afterNode = clone;
      return clone;
    }); // set selection to the duplicated nodes

    if (nodes.length === 1) {
      if (clones[0].parent.type === 'object') {
        // when duplicating a single object property,
        // set focus to the field and keep the original field name
        clones[0].dom.field.innerHTML = nodes[0].field;
        clones[0].focus('field');
      } else {
        clones[0].focus();
      }
    } else {
      editor.select(clones);
    }

    var newSelection = editor.getDomSelection();

    editor._onAction('duplicateNodes', {
      paths: nodes.map(getInternalPath),
      clonePaths: clones.map(getInternalPath),
      afterPath: lastNode.getInternalPath(),
      parentPath: parent.getInternalPath(),
      oldSelection: oldSelection,
      newSelection: newSelection
    });
  }
};
/**
 * Find the node from an event target
 * @param {HTMLElement} target
 * @return {Node | undefined} node  or undefined when not found
 * @static
 */


Node_Node.getNodeFromTarget = function (target) {
  while (target) {
    if (target.node) {
      return target.node;
    }

    target = target.parentNode;
  }

  return undefined;
};
/**
 * Test whether target is a child of the color DOM of a node
 * @param {HTMLElement} target
 * @returns {boolean}
 */


Node_Node.targetIsColorPicker = function (target) {
  var node = Node_Node.getNodeFromTarget(target);

  if (node) {
    var parent = target && target.parentNode;

    while (parent) {
      if (parent === node.dom.color) {
        return true;
      }

      parent = parent.parentNode;
    }
  }

  return false;
};
/**
 * Remove the focus of given nodes, and move the focus to the (a) node before,
 * (b) the node after, or (c) the parent node.
 * @param {Array.<Node> | Node} nodes
 */


Node_Node.blurNodes = function (nodes) {
  if (!Array.isArray(nodes)) {
    Node_Node.blurNodes([nodes]);
    return;
  }

  var firstNode = nodes[0];
  var parent = firstNode.parent;
  var firstIndex = firstNode.getIndex();

  if (parent.childs[firstIndex + nodes.length]) {
    parent.childs[firstIndex + nodes.length].focus();
  } else if (parent.childs[firstIndex - 1]) {
    parent.childs[firstIndex - 1].focus();
  } else {
    parent.focus();
  }
}; // titles with explanation for the different types


Node_Node.TYPE_TITLES = {
  auto: Object(i18n["c" /* translate */])('autoType'),
  object: Object(i18n["c" /* translate */])('objectType'),
  array: Object(i18n["c" /* translate */])('arrayType'),
  string: Object(i18n["c" /* translate */])('stringType')
}; // helper function to get the internal path of a node

function getInternalPath(node) {
  return node.getInternalPath();
} // helper function to get the field of a node


function getField(node) {
  return node.getField();
}

function Node_hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
} // TODO: find a nicer solution to resolve this circular dependency between Node and AppendNode
//       idea: introduce properties .isAppendNode and .isNode and use that instead of instanceof AppendNode checks


var Node_AppendNode = appendNodeFactory(Node_Node);
var Node_ShowMoreNode = showMoreNodeFactory(Node_Node);
// EXTERNAL MODULE: ./src/js/ModeSwitcher.js
var ModeSwitcher = __webpack_require__(6);

// CONCATENATED MODULE: ./src/js/autocomplete.js


var defaultFilterFunction = {
  start: function start(token, match, config) {
    return match.indexOf(token) === 0;
  },
  contain: function contain(token, match, config) {
    return match.indexOf(token) > -1;
  }
};
function autocomplete(config) {
  config = config || {};
  config.filter = config.filter || 'start';
  config.trigger = config.trigger || 'keydown';
  config.confirmKeys = config.confirmKeys || [39, 35, 9]; // right, end, tab

  config.caseSensitive = config.caseSensitive || false; // autocomplete case sensitive

  var fontSize = '';
  var fontFamily = '';
  var wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  wrapper.style.outline = '0';
  wrapper.style.border = '0';
  wrapper.style.margin = '0';
  wrapper.style.padding = '0';
  var dropDown = document.createElement('div');
  dropDown.className = 'autocomplete dropdown';
  dropDown.style.position = 'absolute';
  dropDown.style.visibility = 'hidden';
  var spacer;
  var leftSide; // <-- it will contain the leftSide part of the textfield (the bit that was already autocompleted)

  var createDropDownController = function createDropDownController(elem, rs) {
    var rows = [];
    var ix = 0;
    var oldIndex = -1; // TODO: move this styling in JS to SCSS

    var onMouseOver = function onMouseOver() {
      this.style.backgroundColor = '#ddd';
    };

    var onMouseOut = function onMouseOut() {
      this.style.backgroundColor = '';
    };

    var onMouseDown = function onMouseDown() {
      p.hide();
      p.onmouseselection(this.__hint, p.rs);
    };

    var p = {
      rs: rs,
      hide: function hide() {
        elem.style.visibility = 'hidden'; // rs.hideDropDown();
      },
      refresh: function refresh(token, array) {
        elem.style.visibility = 'hidden';
        ix = 0;
        elem.innerHTML = '';
        var vph = window.innerHeight || document.documentElement.clientHeight;
        var rect = elem.parentNode.getBoundingClientRect();
        var distanceToTop = rect.top - 6; // heuristic give 6px

        var distanceToBottom = vph - rect.bottom - 6; // distance from the browser border.

        rows = [];
        var filterFn = typeof config.filter === 'function' ? config.filter : defaultFilterFunction[config.filter];
        var filtered = !filterFn ? [] : array.filter(function (match) {
          return filterFn(config.caseSensitive ? token : token.toLowerCase(), config.caseSensitive ? match : match.toLowerCase(), config);
        });
        rows = filtered.map(function (row) {
          var divRow = document.createElement('div');
          divRow.className = 'item'; // divRow.style.color = config.color;

          divRow.onmouseover = onMouseOver;
          divRow.onmouseout = onMouseOut;
          divRow.onmousedown = onMouseDown;
          divRow.__hint = row;
          divRow.innerHTML = row.substring(0, token.length) + '<b>' + row.substring(token.length) + '</b>';
          elem.appendChild(divRow);
          return divRow;
        });

        if (rows.length === 0) {
          return; // nothing to show.
        }

        if (rows.length === 1 && (token.toLowerCase() === rows[0].__hint.toLowerCase() && !config.caseSensitive || token === rows[0].__hint && config.caseSensitive)) {
          return; // do not show the dropDown if it has only one element which matches what we have just displayed.
        }

        if (rows.length < 2) return;
        p.highlight(0);

        if (distanceToTop > distanceToBottom * 3) {
          // Heuristic (only when the distance to the to top is 4 times more than distance to the bottom
          elem.style.maxHeight = distanceToTop + 'px'; // we display the dropDown on the top of the input text

          elem.style.top = '';
          elem.style.bottom = '100%';
        } else {
          elem.style.top = '100%';
          elem.style.bottom = '';
          elem.style.maxHeight = distanceToBottom + 'px';
        }

        elem.style.visibility = 'visible';
      },
      highlight: function highlight(index) {
        if (oldIndex !== -1 && rows[oldIndex]) {
          rows[oldIndex].className = 'item';
        }

        rows[index].className = 'item hover';
        oldIndex = index;
      },
      move: function move(step) {
        // moves the selection either up or down (unless it's not possible) step is either +1 or -1.
        if (elem.style.visibility === 'hidden') return ''; // nothing to move if there is no dropDown. (this happens if the user hits escape and then down or up)

        if (ix + step === -1 || ix + step === rows.length) return rows[ix].__hint; // NO CIRCULAR SCROLLING.

        ix += step;
        p.highlight(ix);
        return rows[ix].__hint; // txtShadow.value = uRows[uIndex].__hint ;
      },
      onmouseselection: function onmouseselection() {} // it will be overwritten.

    };
    return p;
  };

  function setEndOfContenteditable(contentEditableElement) {
    var range, selection;

    if (document.createRange) {
      // Firefox, Chrome, Opera, Safari, IE 9+
      range = document.createRange(); // Create a range (a range is a like the selection but invisible)

      range.selectNodeContents(contentEditableElement); // Select the entire contents of the element with the range

      range.collapse(false); // collapse the range to the end point. false means collapse to end rather than the start

      selection = window.getSelection(); // get the selection object (allows you to change selection)

      selection.removeAllRanges(); // remove any selections already made

      selection.addRange(range); // make the range you have just created the visible selection
    } else if (document.selection) {
      // IE 8 and lower
      range = document.body.createTextRange(); // Create a range (a range is a like the selection but invisible)

      range.moveToElementText(contentEditableElement); // Select the entire contents of the element with the range

      range.collapse(false); // collapse the range to the end point. false means collapse to end rather than the start

      range.select(); // Select the range (make it the visible selection
    }
  }

  function calculateWidthForText(text) {
    if (spacer === undefined) {
      // on first call only.
      spacer = document.createElement('span');
      spacer.style.visibility = 'hidden';
      spacer.style.position = 'fixed';
      spacer.style.outline = '0';
      spacer.style.margin = '0';
      spacer.style.padding = '0';
      spacer.style.border = '0';
      spacer.style.left = '0';
      spacer.style.whiteSpace = 'pre';
      spacer.style.fontSize = fontSize;
      spacer.style.fontFamily = fontFamily;
      spacer.style.fontWeight = 'normal';
      document.body.appendChild(spacer);
    } // Used to encode an HTML string into a plain text.
    // taken from http://stackoverflow.com/questions/1219860/javascript-jquery-html-encoding


    spacer.innerHTML = String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return spacer.getBoundingClientRect().right;
  }

  var rs = {
    onArrowDown: function onArrowDown() {},
    // defaults to no action.
    onArrowUp: function onArrowUp() {},
    // defaults to no action.
    onEnter: function onEnter() {},
    // defaults to no action.
    onTab: function onTab() {},
    // defaults to no action.
    startFrom: 0,
    options: [],
    element: null,
    elementHint: null,
    elementStyle: null,
    wrapper: wrapper,
    // Only to allow  easy access to the HTML elements to the final user (possibly for minor customizations)
    show: function show(element, startPos, options) {
      var _this = this;

      this.startFrom = startPos;
      this.wrapper.remove();

      if (this.elementHint) {
        this.elementHint.remove();
        this.elementHint = null;
      }

      if (fontSize === '') {
        fontSize = window.getComputedStyle(element).getPropertyValue('font-size');
      }

      if (fontFamily === '') {
        fontFamily = window.getComputedStyle(element).getPropertyValue('font-family');
      }

      dropDown.style.marginLeft = '0';
      dropDown.style.marginTop = element.getBoundingClientRect().height + 'px';
      this.options = options;

      if (this.element !== element) {
        this.element = element;
        this.elementStyle = {
          zIndex: this.element.style.zIndex,
          position: this.element.style.position,
          backgroundColor: this.element.style.backgroundColor,
          borderColor: this.element.style.borderColor
        };
      }

      this.element.style.zIndex = 3;
      this.element.style.position = 'relative';
      this.element.style.backgroundColor = 'transparent';
      this.element.style.borderColor = 'transparent';
      this.elementHint = element.cloneNode();
      this.elementHint.className = 'autocomplete hint';
      this.elementHint.style.zIndex = 2;
      this.elementHint.style.position = 'absolute';

      this.elementHint.onfocus = function () {
        _this.element.focus();
      };

      if (this.element.addEventListener) {
        this.element.removeEventListener('keydown', keyDownHandler);
        this.element.addEventListener('keydown', keyDownHandler, false);
        this.element.removeEventListener('blur', onBlurHandler);
        this.element.addEventListener('blur', onBlurHandler, false);
      }

      wrapper.appendChild(this.elementHint);
      wrapper.appendChild(dropDown);
      element.parentElement.appendChild(wrapper);
      this.repaint(element);
    },
    setText: function setText(text) {
      this.element.innerText = text;
    },
    getText: function getText() {
      return this.element.innerText;
    },
    hideDropDown: function hideDropDown() {
      this.wrapper.remove();

      if (this.elementHint) {
        this.elementHint.remove();
        this.elementHint = null;
        dropDownController.hide();
        this.element.style.zIndex = this.elementStyle.zIndex;
        this.element.style.position = this.elementStyle.position;
        this.element.style.backgroundColor = this.elementStyle.backgroundColor;
        this.element.style.borderColor = this.elementStyle.borderColor;
      }
    },
    repaint: function repaint(element) {
      var text = element.innerText;
      text = text.replace('\n', '');
      var optionsLength = this.options.length; // breaking text in leftSide and token.

      var token = text.substring(this.startFrom);
      leftSide = text.substring(0, this.startFrom);

      for (var i = 0; i < optionsLength; i++) {
        var opt = this.options[i];

        if (!config.caseSensitive && opt.toLowerCase().indexOf(token.toLowerCase()) === 0 || config.caseSensitive && opt.indexOf(token) === 0) {
          // <-- how about upperCase vs. lowercase
          this.elementHint.innerText = leftSide + token + opt.substring(token.length);
          this.elementHint.realInnerText = leftSide + opt;
          break;
        }
      } // moving the dropDown and refreshing it.


      dropDown.style.left = calculateWidthForText(leftSide) + 'px';
      dropDownController.refresh(token, this.options);
      this.elementHint.style.width = calculateWidthForText(this.elementHint.innerText) + 10 + 'px';
      var wasDropDownHidden = dropDown.style.visibility === 'hidden';

      if (!wasDropDownHidden) {
        this.elementHint.style.width = calculateWidthForText(this.elementHint.innerText) + dropDown.clientWidth + 'px';
      }
    }
  };
  var dropDownController = createDropDownController(dropDown, rs);

  var keyDownHandler = function (e) {
    // console.log("Keydown:" + e.keyCode);
    e = e || window.event;
    var keyCode = e.keyCode;
    if (this.elementHint == null) return;

    if (keyCode === 33) {
      return;
    } // page up (do nothing)


    if (keyCode === 34) {
      return;
    } // page down (do nothing);


    if (keyCode === 27) {
      // escape
      rs.hideDropDown();
      rs.element.focus();
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    var text = this.element.innerText;
    text = text.replace('\n', '');

    if (config.confirmKeys.indexOf(keyCode) >= 0) {
      //  (autocomplete triggered)
      if (keyCode === 9) {
        if (this.elementHint.innerText.length === 0) {
          rs.onTab();
        }
      }

      if (this.elementHint.innerText.length > 0) {
        // if there is a hint
        if (this.element.innerText !== this.elementHint.realInnerText) {
          this.element.innerText = this.elementHint.realInnerText;
          rs.hideDropDown();
          setEndOfContenteditable(this.element);

          if (keyCode === 9) {
            rs.element.focus();
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }

      return;
    }

    if (keyCode === 13) {
      // enter  (autocomplete triggered)
      if (this.elementHint.innerText.length === 0) {
        // if there is a hint
        rs.onEnter();
      } else {
        var wasDropDownHidden = dropDown.style.visibility === 'hidden';
        dropDownController.hide();

        if (wasDropDownHidden) {
          rs.hideDropDown();
          rs.element.focus();
          rs.onEnter();
          return;
        }

        this.element.innerText = this.elementHint.realInnerText;
        rs.hideDropDown();
        setEndOfContenteditable(this.element);
        e.preventDefault();
        e.stopPropagation();
      }

      return;
    }

    if (keyCode === 40) {
      // down
      var token = text.substring(this.startFrom);
      var m = dropDownController.move(+1);

      if (m === '') {
        rs.onArrowDown();
      }

      this.elementHint.innerText = leftSide + token + m.substring(token.length);
      this.elementHint.realInnerText = leftSide + m;
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (keyCode === 38) {
      // up
      var _token = text.substring(this.startFrom);

      var _m = dropDownController.move(-1);

      if (_m === '') {
        rs.onArrowUp();
      }

      this.elementHint.innerText = leftSide + _token + _m.substring(_token.length);
      this.elementHint.realInnerText = leftSide + _m;
      e.preventDefault();
      e.stopPropagation();
    }
  }.bind(rs);

  var onBlurHandler = function onBlurHandler(e) {
    rs.hideDropDown(); // console.log("Lost focus.");
  };

  dropDownController.onmouseselection = function (text, rs) {
    rs.element.innerText = rs.elementHint.innerText = leftSide + text;
    rs.hideDropDown();
    window.setTimeout(function () {
      rs.element.focus();
      setEndOfContenteditable(rs.element);
    }, 1);
  };

  return rs;
}
// CONCATENATED MODULE: ./src/js/treemode.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeModeMixins", function() { return treeModeMixins; });












 // create a mixin with the functions for tree mode

var treemode = {};
/**
 * Create a tree editor
 * @param {Element} container    Container element
 * @param {Object} [options]   Object with options. See docs for details.
 * @private
 */

treemode.create = function (container, options) {
  if (!container) {
    throw new Error('No container element provided.');
  }

  this.container = container;
  this.dom = {};
  this.highlighter = new Highlighter();
  this.selection = undefined; // will hold the last input selection

  this.multiselection = {
    nodes: []
  };
  this.validateSchema = null; // will be set in .setSchema(schema)

  this.validationSequence = 0;
  this.errorNodes = [];
  this.node = null;
  this.focusTarget = null;

  this._setOptions(options);

  if (options.autocomplete) {
    this.autocomplete = autocomplete(options.autocomplete);
  }

  if (this.options.history && this.options.mode !== 'view') {
    this.history = new NodeHistory_NodeHistory(this);
  }

  this._createFrame();

  this._createTable();
};
/**
 * Destroy the editor. Clean up DOM, event listeners, and web workers.
 */


treemode.destroy = function () {
  if (this.frame && this.container && this.frame.parentNode === this.container) {
    this.container.removeChild(this.frame);
    this.frame = null;
  }

  this.container = null;
  this.dom = null;
  this.clear();
  this.node = null;
  this.focusTarget = null;
  this.selection = null;
  this.multiselection = null;
  this.errorNodes = null;
  this.validateSchema = null;
  this._debouncedValidate = null;

  if (this.history) {
    this.history.destroy();
    this.history = null;
  }

  if (this.searchBox) {
    this.searchBox.destroy();
    this.searchBox = null;
  }

  if (this.modeSwitcher) {
    this.modeSwitcher.destroy();
    this.modeSwitcher = null;
  }
};
/**
 * Initialize and set default options
 * @param {Object}  [options]    See description in constructor
 * @private
 */


treemode._setOptions = function (options) {
  var _this = this;

  this.options = {
    search: true,
    history: true,
    mode: 'tree',
    name: undefined,
    // field name of root node
    schema: null,
    schemaRefs: null,
    autocomplete: null,
    navigationBar: true,
    mainMenuBar: true,
    onSelectionChange: null,
    colorPicker: true,
    onColorPicker: function onColorPicker(parent, color, onChange) {
      if (vanilla_picker_default.a) {
        // we'll render the color picker on top
        // when there is not enough space below, and there is enough space above
        var pickerHeight = 300; // estimated height of the color picker

        var top = parent.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        new vanilla_picker_default.a({
          parent: parent,
          color: color,
          popup: windowHeight - top < pickerHeight && top > pickerHeight ? 'top' : 'bottom',
          onDone: function onDone(color) {
            var alpha = color.rgba[3];
            var hex = alpha === 1 ? color.hex.substr(0, 7) // return #RRGGBB
            : color.hex; // return #RRGGBBAA

            onChange(hex);
          }
        }).show();
      } else {
        console.warn('Cannot open color picker: the `vanilla-picker` library is not included in the bundle. ' + 'Either use the full bundle or implement your own color picker using `onColorPicker`.');
      }
    },
    timestampTag: true,
    onEvent: null,
    enableSort: true,
    enableTransform: true
  }; // copy all options

  if (options) {
    Object.keys(options).forEach(function (prop) {
      _this.options[prop] = options[prop];
    });
  } // compile a JSON schema validator if a JSON schema is provided


  this.setSchema(this.options.schema, this.options.schemaRefs); // create a debounced validate function

  this._debouncedValidate = Object(util["debounce"])(this.validate.bind(this), this.DEBOUNCE_INTERVAL);

  if (options.onSelectionChange) {
    this.onSelectionChange(options.onSelectionChange);
  }

  Object(i18n["b" /* setLanguages */])(this.options.languages);
  Object(i18n["a" /* setLanguage */])(this.options.language);
};
/**
 * Set new JSON object in editor.
 * Resets the state of the editor (expanded nodes, search, selection).
 *
 * @param {*} json
 */


treemode.set = function (json) {
  // verify if json is valid JSON, ignore when a function
  if (json instanceof Function || json === undefined) {
    this.clear();
  } else {
    this.content.removeChild(this.table); // Take the table offline
    // replace the root node

    var params = {
      field: this.options.name,
      value: json
    };
    var node = new Node_Node(this, params);

    this._setRoot(node); // validate JSON schema (if configured)


    this.validate(); // expand

    var recurse = false;
    this.node.expand(recurse);
    this.content.appendChild(this.table); // Put the table online again
  } // TODO: maintain history, store last state and previous document


  if (this.history) {
    this.history.clear();
  } // clear search


  if (this.searchBox) {
    this.searchBox.clear();
  }
};
/**
 * Update JSON object in editor.
 * Maintains the state of the editor (expanded nodes, search, selection).
 *
 * @param {*} json
 */


treemode.update = function (json) {
  // don't update if there are no changes
  if (this.node.deepEqual(json)) {
    return;
  }

  var selection = this.getSelection(); // apply the changed json

  this.onChangeDisabled = true; // don't fire an onChange event

  this.node.update(json);
  this.onChangeDisabled = false; // validate JSON schema

  this.validate(); // update search result if any

  if (this.searchBox && !this.searchBox.isEmpty()) {
    this.searchBox.forceSearch();
  } // update selection if any


  if (selection && selection.start && selection.end) {
    // only keep/update the selection if both start and end node still exists,
    // else we clear the selection
    var startNode = this.node.findNodeByPath(selection.start.path);
    var endNode = this.node.findNodeByPath(selection.end.path);

    if (startNode && endNode) {
      this.setSelection(selection.start, selection.end);
    } else {
      this.setSelection({}, {}); // clear selection
    }
  } else {
    this.setSelection({}, {}); // clear selection
  }
};
/**
 * Get JSON object from editor
 * @return {Object | undefined} json
 */


treemode.get = function () {
  // TODO: resolve pending debounced input changes if any, but do not resolve invalid inputs
  if (this.node) {
    return this.node.getValue();
  } else {
    return undefined;
  }
};
/**
 * Get the text contents of the editor
 * @return {String} jsonText
 */


treemode.getText = function () {
  return JSON.stringify(this.get());
};
/**
 * Set the text contents of the editor.
 * Resets the state of the editor (expanded nodes, search, selection).
 * @param {String} jsonText
 */


treemode.setText = function (jsonText) {
  try {
    this.set(Object(util["parse"])(jsonText)); // this can throw an error
  } catch (err) {
    // try to repair json, replace JavaScript notation with JSON notation
    var repairedJsonText = Object(util["repair"])(jsonText); // try to parse again

    this.set(Object(util["parse"])(repairedJsonText)); // this can throw an error
  }
};
/**
 * Update the text contents of the editor.
 * Maintains the state of the editor (expanded nodes, search, selection).
 * @param {String} jsonText
 */


treemode.updateText = function (jsonText) {
  try {
    this.update(Object(util["parse"])(jsonText)); // this can throw an error
  } catch (err) {
    // try to repair json, replace JavaScript notation with JSON notation
    var repairJsonText = Object(util["repair"])(jsonText); // try to parse again

    this.update(Object(util["parse"])(repairJsonText)); // this can throw an error
  }
};
/**
 * Set a field name for the root node.
 * @param {String | undefined} name
 */


treemode.setName = function (name) {
  this.options.name = name;

  if (this.node) {
    this.node.updateField(this.options.name);
  }
};
/**
 * Get the field name for the root node.
 * @return {String | undefined} name
 */


treemode.getName = function () {
  return this.options.name;
};
/**
 * Set focus to the editor. Focus will be set to:
 * - the first editable field or value, or else
 * - to the expand button of the root node, or else
 * - to the context menu button of the root node, or else
 * - to the first button in the top menu
 */


treemode.focus = function () {
  var input = this.scrollableContent.querySelector('[contenteditable=true]');

  if (input) {
    input.focus();
  } else if (this.node.dom.expand) {
    this.node.dom.expand.focus();
  } else if (this.node.dom.menu) {
    this.node.dom.menu.focus();
  } else {
    // focus to the first button in the menu
    input = this.frame.querySelector('button');

    if (input) {
      input.focus();
    }
  }
};
/**
 * Remove the root node from the editor
 */


treemode.clear = function () {
  if (this.node) {
    this.node.hide();
    delete this.node;
  }

  if (this.treePath) {
    this.treePath.reset();
  }
};
/**
 * Set the root node for the json editor
 * @param {Node} node
 * @private
 */


treemode._setRoot = function (node) {
  this.clear();
  this.node = node;
  node.setParent(null);
  node.setField(this.getName(), false);
  delete node.index; // append to the dom

  this.tbody.appendChild(node.getDom());
};
/**
 * Search text in all nodes
 * The nodes will be expanded when the text is found one of its childs,
 * else it will be collapsed. Searches are case insensitive.
 * @param {String} text
 * @return {Object[]} results  Array with nodes containing the search results
 *                             The result objects contains fields:
 *                             - {Node} node,
 *                             - {String} elem  the dom element name where
 *                                              the result is found ('field' or
 *                                              'value')
 */


treemode.search = function (text) {
  var results;

  if (this.node) {
    this.content.removeChild(this.table); // Take the table offline

    results = this.node.search(text);
    this.content.appendChild(this.table); // Put the table online again
  } else {
    results = [];
  }

  return results;
};
/**
 * Expand all nodes
 */


treemode.expandAll = function () {
  if (this.node) {
    this.content.removeChild(this.table); // Take the table offline

    this.node.expand();
    this.content.appendChild(this.table); // Put the table online again
  }
};
/**
 * Collapse all nodes
 */


treemode.collapseAll = function () {
  if (this.node) {
    this.content.removeChild(this.table); // Take the table offline

    this.node.collapse();
    this.content.appendChild(this.table); // Put the table online again
  }
};
/**
 * The method onChange is called whenever a field or value is changed, created,
 * deleted, duplicated, etc.
 * @param {String} action  Change action. Available values: "editField",
 *                         "editValue", "changeType", "appendNode",
 *                         "removeNode", "duplicateNode", "moveNode", "expand",
 *                         "collapse".
 * @param {Object} params  Object containing parameters describing the change.
 *                         The parameters in params depend on the action (for
 *                         example for "editValue" the Node, old value, and new
 *                         value are provided). params contains all information
 *                         needed to undo or redo the action.
 * @private
 */


treemode._onAction = function (action, params) {
  // add an action to the history
  if (this.history) {
    this.history.add(action, params);
  }

  this._onChange();
};
/**
 * Handle a change:
 * - Validate JSON schema
 * - Send a callback to the onChange listener if provided
 * @private
 */


treemode._onChange = function () {
  if (this.onChangeDisabled) {
    return;
  } // selection can be changed after undo/redo


  this.selection = this.getDomSelection(); // validate JSON schema (if configured)

  this._debouncedValidate();

  if (this.treePath) {
    var selectedNode = this.node && this.selection ? this.node.findNodeByInternalPath(this.selection.path) : this.multiselection ? this.multiselection.nodes[0] : undefined;

    if (selectedNode) {
      this._updateTreePath(selectedNode.getNodePath());
    } else {
      this.treePath.reset();
    }
  } // trigger the onChange callback


  if (this.options.onChange) {
    try {
      this.options.onChange();
    } catch (err) {
      console.error('Error in onChange callback: ', err);
    }
  } // trigger the onChangeJSON callback


  if (this.options.onChangeJSON) {
    try {
      this.options.onChangeJSON(this.get());
    } catch (err) {
      console.error('Error in onChangeJSON callback: ', err);
    }
  } // trigger the onChangeText callback


  if (this.options.onChangeText) {
    try {
      this.options.onChangeText(this.getText());
    } catch (err) {
      console.error('Error in onChangeText callback: ', err);
    }
  } // trigger the onClassName callback


  if (this.options.onClassName) {
    this.node.recursivelyUpdateCssClassesOnNodes();
  } // trigger the onNodeName callback


  if (this.options.onNodeName && this.node.childs) {
    try {
      this.node.recursivelyUpdateNodeName();
    } catch (err) {
      console.error('Error in onNodeName callback: ', err);
    }
  }
};
/**
 * Validate current JSON object against the configured JSON schema
 * Throws an exception when no JSON schema is configured
 */


treemode.validate = function () {
  var root = this.node;

  if (!root) {
    // TODO: this should be redundant but is needed on mode switch
    return;
  }

  var json = root.getValue(); // execute JSON schema validation

  var schemaErrors = [];

  if (this.validateSchema) {
    var valid = this.validateSchema(json);

    if (!valid) {
      // apply all new errors
      schemaErrors = this.validateSchema.errors.map(function (error) {
        return Object(util["improveSchemaError"])(error);
      }).map(function findNode(error) {
        return {
          node: root.findNode(error.dataPath),
          error: error
        };
      }).filter(function hasNode(entry) {
        return entry.node != null;
      });
    }
  } // execute custom validation and after than merge and render all errors


  try {
    this.validationSequence++;
    var me = this;
    var seq = this.validationSequence;

    this._validateCustom(json).then(function (customValidationErrors) {
      // only apply when there was no other validation started whilst resolving async results
      if (seq === me.validationSequence) {
        var errorNodes = [].concat(schemaErrors, customValidationErrors || []);

        me._renderValidationErrors(errorNodes);
      }
    })["catch"](function (err) {
      console.error(err);
    });
  } catch (err) {
    console.error(err);
  }
};

treemode._renderValidationErrors = function (errorNodes) {
  // clear all current errors
  if (this.errorNodes) {
    this.errorNodes.forEach(function (node) {
      node.setError(null);
    });
  } // render the new errors


  var parentPairs = errorNodes.reduce(function (all, entry) {
    return entry.node.findParents().filter(function (parent) {
      return !all.some(function (pair) {
        return pair[0] === parent;
      });
    }).map(function (parent) {
      return [parent, entry.node];
    }).concat(all);
  }, []);
  this.errorNodes = parentPairs.map(function (pair) {
    return {
      node: pair[0],
      child: pair[1],
      error: {
        message: pair[0].type === 'object' ? 'Contains invalid properties' // object
        : 'Contains invalid items' // array

      }
    };
  }).concat(errorNodes).map(function setError(entry) {
    entry.node.setError(entry.error, entry.child);
    return entry.node;
  });
};
/**
 * Execute custom validation if configured.
 *
 * Returns a promise resolving with the custom errors (or nothing).
 */


treemode._validateCustom = function (json) {
  try {
    if (this.options.onValidate) {
      var root = this.node;
      var customValidateResults = this.options.onValidate(json);
      var resultPromise = Object(util["isPromise"])(customValidateResults) ? customValidateResults : Promise.resolve(customValidateResults);
      return resultPromise.then(function (customValidationPathErrors) {
        if (Array.isArray(customValidationPathErrors)) {
          return customValidationPathErrors.filter(function (error) {
            var valid = Object(util["isValidValidationError"])(error);

            if (!valid) {
              console.warn('Ignoring a custom validation error with invalid structure. ' + 'Expected structure: {path: [...], message: "..."}. ' + 'Actual error:', error);
            }

            return valid;
          }).map(function (error) {
            var node;

            try {
              node = error && error.path ? root.findNodeByPath(error.path) : null;
            } catch (err) {// stay silent here, we throw a generic warning if no node is found
            }

            if (!node) {
              console.warn('Ignoring validation error: node not found. Path:', error.path, 'Error:', error);
            }

            return {
              node: node,
              error: error
            };
          }).filter(function (entry) {
            return entry && entry.node && entry.error && entry.error.message;
          });
        } else {
          return null;
        }
      });
    }
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(null);
};
/**
 * Refresh the rendered contents
 */


treemode.refresh = function () {
  if (this.node) {
    this.node.updateDom({
      recurse: true
    });
  }
};
/**
 * Start autoscrolling when given mouse position is above the top of the
 * editor contents, or below the bottom.
 * @param {Number} mouseY  Absolute mouse position in pixels
 */


treemode.startAutoScroll = function (mouseY) {
  var me = this;
  var content = this.scrollableContent;
  var top = Object(util["getAbsoluteTop"])(content);
  var height = content.clientHeight;
  var bottom = top + height;
  var margin = 24;
  var interval = 50; // ms

  if (mouseY < top + margin && content.scrollTop > 0) {
    this.autoScrollStep = (top + margin - mouseY) / 3;
  } else if (mouseY > bottom - margin && height + content.scrollTop < content.scrollHeight) {
    this.autoScrollStep = (bottom - margin - mouseY) / 3;
  } else {
    this.autoScrollStep = undefined;
  }

  if (this.autoScrollStep) {
    if (!this.autoScrollTimer) {
      this.autoScrollTimer = setInterval(function () {
        if (me.autoScrollStep) {
          content.scrollTop -= me.autoScrollStep;
        } else {
          me.stopAutoScroll();
        }
      }, interval);
    }
  } else {
    this.stopAutoScroll();
  }
};
/**
 * Stop auto scrolling. Only applicable when scrolling
 */


treemode.stopAutoScroll = function () {
  if (this.autoScrollTimer) {
    clearTimeout(this.autoScrollTimer);
    delete this.autoScrollTimer;
  }

  if (this.autoScrollStep) {
    delete this.autoScrollStep;
  }
};
/**
 * Set the focus to an element in the editor, set text selection, and
 * set scroll position.
 * @param {Object} selection  An object containing fields:
 *                            {Element | undefined} dom     The dom element
 *                                                          which has focus
 *                            {Range | TextRange} range     A text selection
 *                            {Node[]} nodes                Nodes in case of multi selection
 *                            {Number} scrollTop            Scroll position
 */


treemode.setDomSelection = function (selection) {
  if (!selection) {
    return;
  }

  if ('scrollTop' in selection && this.scrollableContent) {
    // TODO: animated scroll
    this.scrollableContent.scrollTop = selection.scrollTop;
  }

  if (selection.paths) {
    // multi-select
    var me = this;
    var nodes = selection.paths.map(function (path) {
      return me.node.findNodeByInternalPath(path);
    });
    this.select(nodes);
  } else {
    // find the actual DOM element where to apply the focus
    var node = selection.path ? this.node.findNodeByInternalPath(selection.path) : null;
    var container = node && selection.domName ? node.dom[selection.domName] : null;

    if (selection.range && container) {
      var range = Object.assign({}, selection.range, {
        container: container
      });
      Object(util["setSelectionOffset"])(range);
    } else if (node) {
      // just a fallback
      node.focus();
    }
  }
};
/**
 * Get the current focus
 * @return {Object} selection An object containing fields:
 *                            {Element | undefined} dom     The dom element
 *                                                          which has focus
 *                            {Range | TextRange} range     A text selection
 *                            {Node[]} nodes                Nodes in case of multi selection
 *                            {Number} scrollTop            Scroll position
 */


treemode.getDomSelection = function () {
  // find the node and field name of the current target,
  // so we can store the current selection in a serializable
  // way (internal node path and domName)
  var node = Node_Node.getNodeFromTarget(this.focusTarget);
  var focusTarget = this.focusTarget;
  var domName = node ? Object.keys(node.dom).find(function (domName) {
    return node.dom[domName] === focusTarget;
  }) : null;
  var range = Object(util["getSelectionOffset"])();

  if (range && range.container.nodeName !== 'DIV') {
    // filter on (editable) divs)
    range = null;
  }

  if (range && range.container !== focusTarget) {
    range = null;
  }

  if (range) {
    // we cannot rely on the current instance of the container,
    // we need to store the internal node path and field and
    // find the actual DOM field when applying the selection
    delete range.container;
  }

  return {
    path: node ? node.getInternalPath() : null,
    domName: domName,
    range: range,
    paths: this.multiselection.length > 0 ? this.multiselection.nodes.map(function (node) {
      return node.getInternalPath();
    }) : null,
    scrollTop: this.scrollableContent ? this.scrollableContent.scrollTop : 0
  };
};
/**
 * Adjust the scroll position such that given top position is shown at 1/4
 * of the window height.
 * @param {Number} top
 * @param {function(boolean)} [animateCallback] Callback, executed when animation is
 *                                              finished. The callback returns true
 *                                              when animation is finished, or false
 *                                              when not.
 */


treemode.scrollTo = function (top, animateCallback) {
  var content = this.scrollableContent;

  if (content) {
    var editor = this; // cancel any running animation

    if (editor.animateTimeout) {
      clearTimeout(editor.animateTimeout);
      delete editor.animateTimeout;
    }

    if (editor.animateCallback) {
      editor.animateCallback(false);
      delete editor.animateCallback;
    } // calculate final scroll position


    var height = content.clientHeight;
    var bottom = content.scrollHeight - height;
    var finalScrollTop = Math.min(Math.max(top - height / 4, 0), bottom); // animate towards the new scroll position

    var animate = function animate() {
      var scrollTop = content.scrollTop;
      var diff = finalScrollTop - scrollTop;

      if (Math.abs(diff) > 3) {
        content.scrollTop += diff / 3;
        editor.animateCallback = animateCallback;
        editor.animateTimeout = setTimeout(animate, 50);
      } else {
        // finished
        if (animateCallback) {
          animateCallback(true);
        }

        content.scrollTop = finalScrollTop;
        delete editor.animateTimeout;
        delete editor.animateCallback;
      }
    };

    animate();
  } else {
    if (animateCallback) {
      animateCallback(false);
    }
  }
};
/**
 * Create main frame
 * @private
 */


treemode._createFrame = function () {
  // create the frame
  this.frame = document.createElement('div');
  this.frame.className = 'jsoneditor jsoneditor-mode-' + this.options.mode;
  this.container.appendChild(this.frame);
  this.contentOuter = document.createElement('div');
  this.contentOuter.className = 'jsoneditor-outer'; // create one global event listener to handle all events from all nodes

  var editor = this;

  function onEvent(event) {
    // when switching to mode "code" or "text" via the menu, some events
    // are still fired whilst the _onEvent methods is already removed.
    if (editor._onEvent) {
      editor._onEvent(event);
    }
  }

  this.frame.onclick = function (event) {
    var target = event.target; // || event.srcElement;

    onEvent(event); // prevent default submit action of buttons when editor is located
    // inside a form

    if (target.nodeName === 'BUTTON') {
      event.preventDefault();
    }
  };

  this.frame.oninput = onEvent;
  this.frame.onchange = onEvent;
  this.frame.onkeydown = onEvent;
  this.frame.onkeyup = onEvent;
  this.frame.oncut = onEvent;
  this.frame.onpaste = onEvent;
  this.frame.onmousedown = onEvent;
  this.frame.onmouseup = onEvent;
  this.frame.onmouseover = onEvent;
  this.frame.onmouseout = onEvent; // Note: focus and blur events do not propagate, therefore they defined
  // using an eventListener with useCapture=true
  // see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html

  Object(util["addEventListener"])(this.frame, 'focus', onEvent, true);
  Object(util["addEventListener"])(this.frame, 'blur', onEvent, true);
  this.frame.onfocusin = onEvent; // for IE

  this.frame.onfocusout = onEvent; // for IE

  if (this.options.mainMenuBar) {
    Object(util["addClassName"])(this.contentOuter, 'has-main-menu-bar'); // create menu

    this.menu = document.createElement('div');
    this.menu.className = 'jsoneditor-menu';
    this.frame.appendChild(this.menu); // create expand all button

    var expandAll = document.createElement('button');
    expandAll.type = 'button';
    expandAll.className = 'jsoneditor-expand-all';
    expandAll.title = Object(i18n["c" /* translate */])('expandAll');

    expandAll.onclick = function () {
      editor.expandAll();
    };

    this.menu.appendChild(expandAll); // create collapse all button

    var collapseAll = document.createElement('button');
    collapseAll.type = 'button';
    collapseAll.title = Object(i18n["c" /* translate */])('collapseAll');
    collapseAll.className = 'jsoneditor-collapse-all';

    collapseAll.onclick = function () {
      editor.collapseAll();
    };

    this.menu.appendChild(collapseAll); // create sort button

    if (this.options.enableSort) {
      var sort = document.createElement('button');
      sort.type = 'button';
      sort.className = 'jsoneditor-sort';
      sort.title = Object(i18n["c" /* translate */])('sortTitleShort');

      sort.onclick = function () {
        editor.node.showSortModal();
      };

      this.menu.appendChild(sort);
    } // create transform button


    if (this.options.enableTransform) {
      var transform = document.createElement('button');
      transform.type = 'button';
      transform.title = Object(i18n["c" /* translate */])('transformTitleShort');
      transform.className = 'jsoneditor-transform';

      transform.onclick = function () {
        editor.node.showTransformModal();
      };

      this.menu.appendChild(transform);
    } // create undo/redo buttons


    if (this.history) {
      // create undo button
      var undo = document.createElement('button');
      undo.type = 'button';
      undo.className = 'jsoneditor-undo jsoneditor-separator';
      undo.title = Object(i18n["c" /* translate */])('undo');

      undo.onclick = function () {
        editor._onUndo();
      };

      this.menu.appendChild(undo);
      this.dom.undo = undo; // create redo button

      var redo = document.createElement('button');
      redo.type = 'button';
      redo.className = 'jsoneditor-redo';
      redo.title = Object(i18n["c" /* translate */])('redo');

      redo.onclick = function () {
        editor._onRedo();
      };

      this.menu.appendChild(redo);
      this.dom.redo = redo; // register handler for onchange of history

      this.history.onChange = function () {
        undo.disabled = !editor.history.canUndo();
        redo.disabled = !editor.history.canRedo();
      };

      this.history.onChange();
    } // create mode box


    if (this.options && this.options.modes && this.options.modes.length) {
      var me = this;
      this.modeSwitcher = new ModeSwitcher["a" /* ModeSwitcher */](this.menu, this.options.modes, this.options.mode, function onSwitch(mode) {
        // switch mode and restore focus
        me.setMode(mode);
        me.modeSwitcher.focus();
      });
    } // create search box


    if (this.options.search) {
      this.searchBox = new SearchBox(this, this.menu);
    }
  }

  if (this.options.navigationBar) {
    // create second menu row for treepath
    this.navBar = document.createElement('div');
    this.navBar.className = 'jsoneditor-navigation-bar nav-bar-empty';
    this.frame.appendChild(this.navBar);
    this.treePath = new TreePath_TreePath(this.navBar, this.frame);
    this.treePath.onSectionSelected(this._onTreePathSectionSelected.bind(this));
    this.treePath.onContextMenuItemSelected(this._onTreePathMenuItemSelected.bind(this));
  }
};
/**
 * Perform an undo action
 * @private
 */


treemode._onUndo = function () {
  if (this.history) {
    // undo last action
    this.history.undo(); // fire change event

    this._onChange();
  }
};
/**
 * Perform a redo action
 * @private
 */


treemode._onRedo = function () {
  if (this.history) {
    // redo last action
    this.history.redo(); // fire change event

    this._onChange();
  }
};
/**
 * Event handler
 * @param event
 * @private
 */


treemode._onEvent = function (event) {
  // don't process events when coming from the color picker
  if (Node_Node.targetIsColorPicker(event.target)) {
    return;
  }

  var node = Node_Node.getNodeFromTarget(event.target);

  if (event.type === 'keydown') {
    this._onKeyDown(event);
  }

  if (node && event.type === 'focus') {
    this.focusTarget = event.target;

    if (this.options.autocomplete && this.options.autocomplete.trigger === 'focus') {
      this._showAutoComplete(event.target);
    }
  }

  if (event.type === 'mousedown') {
    this._startDragDistance(event);
  }

  if (event.type === 'mousemove' || event.type === 'mouseup' || event.type === 'click') {
    this._updateDragDistance(event);
  }

  if (node && this.options && this.options.navigationBar && node && (event.type === 'keydown' || event.type === 'mousedown')) {
    // apply on next tick, right after the new key press is applied
    var me = this;
    setTimeout(function () {
      me._updateTreePath(node.getNodePath());
    });
  }

  if (node && node.selected) {
    if (event.type === 'click') {
      if (event.target === node.dom.menu) {
        this.showContextMenu(event.target); // stop propagation (else we will open the context menu of a single node)

        return;
      } // deselect a multi selection


      if (!event.hasMoved) {
        this.deselect();
      }
    }

    if (event.type === 'mousedown') {
      // drag multiple nodes
      Node_Node.onDragStart(this.multiselection.nodes, event);
    }
  } else {
    // filter mouse events in the contents part of the editor (not the main menu)
    if (event.type === 'mousedown' && Object(util["hasParentNode"])(event.target, this.content)) {
      this.deselect();

      if (node && event.target === node.dom.drag) {
        // drag a singe node
        Node_Node.onDragStart(node, event);
      } else if (!node || event.target !== node.dom.field && event.target !== node.dom.value && event.target !== node.dom.select) {
        // select multiple nodes
        this._onMultiSelectStart(event);
      }
    }
  }

  if (node) {
    node.onEvent(event);
  }
};
/**
 * Update TreePath components
 * @param {Array<Node>} pathNodes list of nodes in path from root to selection
 * @private
 */


treemode._updateTreePath = function (pathNodes) {
  if (pathNodes && pathNodes.length) {
    Object(util["removeClassName"])(this.navBar, 'nav-bar-empty');
    var pathObjs = [];
    pathNodes.forEach(function (node) {
      var pathObj = {
        name: getName(node),
        node: node,
        children: []
      };

      if (node.childs && node.childs.length) {
        node.childs.forEach(function (childNode) {
          pathObj.children.push({
            name: getName(childNode),
            node: childNode
          });
        });
      }

      pathObjs.push(pathObj);
    });
    this.treePath.setPath(pathObjs);
  } else {
    Object(util["addClassName"])(this.navBar, 'nav-bar-empty');
  }

  function getName(node) {
    return node.parent ? node.parent.type === 'array' ? node.index : node.field : node.type;
  }
};
/**
 * Callback for tree path section selection - focus the selected node in the tree
 * @param {Object} pathObj path object that was represents the selected section node
 * @private
 */


treemode._onTreePathSectionSelected = function (pathObj) {
  if (pathObj && pathObj.node) {
    pathObj.node.expandTo();
    pathObj.node.focus();
  }
};
/**
 * Callback for tree path menu item selection - rebuild the path accrding to the new selection and focus the selected node in the tree
 * @param {Object} pathObj path object that was represents the parent section node
 * @param {String} selection selected section child
 * @private
 */


treemode._onTreePathMenuItemSelected = function (pathObj, selection) {
  if (pathObj && pathObj.children.length) {
    var selectionObj = pathObj.children.find(function (obj) {
      return obj.name === selection;
    });

    if (selectionObj && selectionObj.node) {
      this._updateTreePath(selectionObj.node.getNodePath());

      selectionObj.node.expandTo();
      selectionObj.node.focus();
    }
  }
};

treemode._startDragDistance = function (event) {
  this.dragDistanceEvent = {
    initialTarget: event.target,
    initialPageX: event.pageX,
    initialPageY: event.pageY,
    dragDistance: 0,
    hasMoved: false
  };
};

treemode._updateDragDistance = function (event) {
  if (!this.dragDistanceEvent) {
    this._startDragDistance(event);
  }

  var diffX = event.pageX - this.dragDistanceEvent.initialPageX;
  var diffY = event.pageY - this.dragDistanceEvent.initialPageY;
  this.dragDistanceEvent.dragDistance = Math.sqrt(diffX * diffX + diffY * diffY);
  this.dragDistanceEvent.hasMoved = this.dragDistanceEvent.hasMoved || this.dragDistanceEvent.dragDistance > 10;
  event.dragDistance = this.dragDistanceEvent.dragDistance;
  event.hasMoved = this.dragDistanceEvent.hasMoved;
  return event.dragDistance;
};
/**
 * Start multi selection of nodes by dragging the mouse
 * @param event
 * @private
 */


treemode._onMultiSelectStart = function (event) {
  var node = Node_Node.getNodeFromTarget(event.target);

  if (this.options.mode !== 'tree' || this.options.onEditable !== undefined) {
    // dragging not allowed in modes 'view' and 'form'
    // TODO: allow multiselection of items when option onEditable is specified
    return;
  }

  this.multiselection = {
    start: node || null,
    end: null,
    nodes: []
  };

  this._startDragDistance(event);

  var editor = this;

  if (!this.mousemove) {
    this.mousemove = Object(util["addEventListener"])(window, 'mousemove', function (event) {
      editor._onMultiSelect(event);
    });
  }

  if (!this.mouseup) {
    this.mouseup = Object(util["addEventListener"])(window, 'mouseup', function (event) {
      editor._onMultiSelectEnd(event);
    });
  }

  event.preventDefault();
};
/**
 * Multiselect nodes by dragging
 * @param event
 * @private
 */


treemode._onMultiSelect = function (event) {
  event.preventDefault();

  this._updateDragDistance(event);

  if (!event.hasMoved) {
    return;
  }

  var node = Node_Node.getNodeFromTarget(event.target);

  if (node) {
    if (this.multiselection.start == null) {
      this.multiselection.start = node;
    }

    this.multiselection.end = node;
  } // deselect previous selection


  this.deselect(); // find the selected nodes in the range from first to last

  var start = this.multiselection.start;
  var end = this.multiselection.end || this.multiselection.start;

  if (start && end) {
    // find the top level childs, all having the same parent
    this.multiselection.nodes = this._findTopLevelNodes(start, end);

    if (this.multiselection.nodes && this.multiselection.nodes.length) {
      var firstNode = this.multiselection.nodes[0];

      if (this.multiselection.start === firstNode || this.multiselection.start.isDescendantOf(firstNode)) {
        this.multiselection.direction = 'down';
      } else {
        this.multiselection.direction = 'up';
      }
    }

    this.select(this.multiselection.nodes);
  }
};
/**
 * End of multiselect nodes by dragging
 * @private
 */


treemode._onMultiSelectEnd = function () {
  // set focus to the context menu button of the first node
  if (this.multiselection.nodes[0]) {
    this.multiselection.nodes[0].dom.menu.focus();
  }

  this.multiselection.start = null;
  this.multiselection.end = null; // cleanup global event listeners

  if (this.mousemove) {
    Object(util["removeEventListener"])(window, 'mousemove', this.mousemove);
    delete this.mousemove;
  }

  if (this.mouseup) {
    Object(util["removeEventListener"])(window, 'mouseup', this.mouseup);
    delete this.mouseup;
  }
};
/**
 * deselect currently selected nodes
 * @param {boolean} [clearStartAndEnd=false]  If true, the `start` and `end`
 *                                            state is cleared too.
 */


treemode.deselect = function (clearStartAndEnd) {
  var selectionChanged = !!this.multiselection.nodes.length;
  this.multiselection.nodes.forEach(function (node) {
    node.setSelected(false);
  });
  this.multiselection.nodes = [];

  if (clearStartAndEnd) {
    this.multiselection.start = null;
    this.multiselection.end = null;
  }

  if (selectionChanged) {
    if (this._selectionChangedHandler) {
      this._selectionChangedHandler();
    }
  }
};
/**
 * select nodes
 * @param {Node[] | Node} nodes
 */


treemode.select = function (nodes) {
  if (!Array.isArray(nodes)) {
    return this.select([nodes]);
  }

  if (nodes) {
    this.deselect();
    this.multiselection.nodes = nodes.slice(0);
    var first = nodes[0];
    nodes.forEach(function (node) {
      node.expandPathToNode();
      node.setSelected(true, node === first);
    });

    if (this._selectionChangedHandler) {
      var selection = this.getSelection();

      this._selectionChangedHandler(selection.start, selection.end);
    }
  }
};
/**
 * From two arbitrary selected nodes, find their shared parent node.
 * From that parent node, select the two child nodes in the brances going to
 * nodes `start` and `end`, and select all childs in between.
 * @param {Node} start
 * @param {Node} end
 * @return {Array.<Node>} Returns an ordered list with child nodes
 * @private
 */


treemode._findTopLevelNodes = function (start, end) {
  var startPath = start.getNodePath();
  var endPath = end.getNodePath();
  var i = 0;

  while (i < startPath.length && startPath[i] === endPath[i]) {
    i++;
  }

  var root = startPath[i - 1];
  var startChild = startPath[i];
  var endChild = endPath[i];

  if (!startChild || !endChild) {
    if (root.parent) {
      // startChild is a parent of endChild or vice versa
      startChild = root;
      endChild = root;
      root = root.parent;
    } else {
      // we have selected the root node (which doesn't have a parent)
      startChild = root.childs[0];
      endChild = root.childs[root.childs.length - 1];
    }
  }

  if (root && startChild && endChild) {
    var startIndex = root.childs.indexOf(startChild);
    var endIndex = root.childs.indexOf(endChild);
    var firstIndex = Math.min(startIndex, endIndex);
    var lastIndex = Math.max(startIndex, endIndex);
    return root.childs.slice(firstIndex, lastIndex + 1);
  } else {
    return [];
  }
};
/**
 * Show autocomplete menu
 * @param {HTMLElement} element
 * @private
 */


treemode._showAutoComplete = function (element) {
  var node = Node_Node.getNodeFromTarget(element);
  var jsonElementType = '';
  if (element.className.indexOf('jsoneditor-value') >= 0) jsonElementType = 'value';
  if (element.className.indexOf('jsoneditor-field') >= 0) jsonElementType = 'field';
  var self = this;
  setTimeout(function () {
    if (node && (self.options.autocomplete.trigger === 'focus' || element.innerText.length > 0)) {
      var result = self.options.autocomplete.getOptions(element.innerText, node.getPath(), jsonElementType, node.editor);

      if (result === null) {
        self.autocomplete.hideDropDown();
      } else if (typeof result.then === 'function') {
        // probably a promise
        result.then(function (obj) {
          if (obj === null) {
            self.autocomplete.hideDropDown();
          } else if (obj.options) {
            self.autocomplete.show(element, obj.startFrom, obj.options);
          } else {
            self.autocomplete.show(element, 0, obj);
          }
        })["catch"](function (err) {
          console.error(err);
        });
      } else {
        // definitely not a promise
        if (result.options) {
          self.autocomplete.show(element, result.startFrom, result.options);
        } else {
          self.autocomplete.show(element, 0, result);
        }
      }
    } else {
      self.autocomplete.hideDropDown();
    }
  }, 50);
};
/**
 * Event handler for keydown. Handles shortcut keys
 * @param {Event} event
 * @private
 */


treemode._onKeyDown = function (event) {
  var keynum = event.which || event.keyCode;
  var altKey = event.altKey;
  var ctrlKey = event.ctrlKey;
  var metaKey = event.metaKey;
  var shiftKey = event.shiftKey;
  var handled = false;

  if (keynum === 9) {
    // Tab or Shift+Tab
    var me = this;
    setTimeout(function () {
      // select all text when moving focus to an editable div
      Object(util["selectContentEditable"])(me.focusTarget);
    }, 0);
  }

  if (this.searchBox) {
    if (ctrlKey && keynum === 70) {
      // Ctrl+F
      this.searchBox.dom.search.focus();
      this.searchBox.dom.search.select();
      handled = true;
    } else if (keynum === 114 || ctrlKey && keynum === 71) {
      // F3 or Ctrl+G
      var focus = true;

      if (!shiftKey) {
        // select next search result (F3 or Ctrl+G)
        this.searchBox.next(focus);
      } else {
        // select previous search result (Shift+F3 or Ctrl+Shift+G)
        this.searchBox.previous(focus);
      }

      handled = true;
    }
  }

  if (this.history) {
    if (ctrlKey && !shiftKey && keynum === 90) {
      // Ctrl+Z
      // undo
      this._onUndo();

      handled = true;
    } else if (ctrlKey && shiftKey && keynum === 90) {
      // Ctrl+Shift+Z
      // redo
      this._onRedo();

      handled = true;
    }
  }

  if (this.options.autocomplete && !handled) {
    if (!ctrlKey && !altKey && !metaKey && (event.key.length === 1 || keynum === 8 || keynum === 46)) {
      handled = false; // Activate autocomplete

      this._showAutoComplete(event.target);
    }
  }

  if (handled) {
    event.preventDefault();
    event.stopPropagation();
  }
};
/**
 * Create main table
 * @private
 */


treemode._createTable = function () {
  if (this.options.navigationBar) {
    Object(util["addClassName"])(this.contentOuter, 'has-nav-bar');
  }

  this.scrollableContent = document.createElement('div');
  this.scrollableContent.className = 'jsoneditor-tree';
  this.contentOuter.appendChild(this.scrollableContent); // the jsoneditor-tree-inner div with bottom padding is here to
  // keep space for the action menu dropdown. It's created as a
  // separate div instead of using scrollableContent to work around
  // and issue in the Chrome browser showing scrollable contents outside of the div
  // see https://github.com/josdejong/jsoneditor/issues/557

  this.content = document.createElement('div');
  this.content.className = 'jsoneditor-tree-inner';
  this.scrollableContent.appendChild(this.content);
  this.table = document.createElement('table');
  this.table.className = 'jsoneditor-tree';
  this.content.appendChild(this.table); // create colgroup where the first two columns don't have a fixed
  // width, and the edit columns do have a fixed width

  var col;
  this.colgroupContent = document.createElement('colgroup');

  if (this.options.mode === 'tree') {
    col = document.createElement('col');
    col.width = '24px';
    this.colgroupContent.appendChild(col);
  }

  col = document.createElement('col');
  col.width = '24px';
  this.colgroupContent.appendChild(col);
  col = document.createElement('col');
  this.colgroupContent.appendChild(col);
  this.table.appendChild(this.colgroupContent);
  this.tbody = document.createElement('tbody');
  this.table.appendChild(this.tbody);
  this.frame.appendChild(this.contentOuter);
};
/**
 * Show a contextmenu for this node.
 * Used for multiselection
 * @param {HTMLElement} anchor   Anchor element to attach the context menu to.
 * @param {function} [onClose]   Callback method called when the context menu
 *                               is being closed.
 */


treemode.showContextMenu = function (anchor, onClose) {
  var items = [];
  var selectedNodes = this.multiselection.nodes.slice(); // create duplicate button

  items.push({
    text: Object(i18n["c" /* translate */])('duplicateText'),
    title: Object(i18n["c" /* translate */])('duplicateTitle'),
    className: 'jsoneditor-duplicate',
    click: function click() {
      Node_Node.onDuplicate(selectedNodes);
    }
  }); // create remove button

  items.push({
    text: Object(i18n["c" /* translate */])('remove'),
    title: Object(i18n["c" /* translate */])('removeTitle'),
    className: 'jsoneditor-remove',
    click: function click() {
      Node_Node.onRemove(selectedNodes);
    }
  });

  if (this.options.onCreateMenu) {
    var paths = selectedNodes.map(function (node) {
      return node.getPath();
    });
    items = this.options.onCreateMenu(items, {
      type: 'multiple',
      path: paths[0],
      paths: paths
    });
  }

  var menu = new ContextMenu["a" /* ContextMenu */](items, {
    close: onClose
  });
  menu.show(anchor, this.frame);
};
/**
 * Get current selected nodes
 * @return {{start:SerializableNode, end: SerializableNode}}
 */


treemode.getSelection = function () {
  var selection = {
    start: null,
    end: null
  };

  if (this.multiselection.nodes && this.multiselection.nodes.length) {
    if (this.multiselection.nodes.length) {
      var selection1 = this.multiselection.nodes[0];
      var selection2 = this.multiselection.nodes[this.multiselection.nodes.length - 1];

      if (this.multiselection.direction === 'down') {
        selection.start = selection1.serialize();
        selection.end = selection2.serialize();
      } else {
        selection.start = selection2.serialize();
        selection.end = selection1.serialize();
      }
    }
  }

  return selection;
};
/**
 * Callback registration for selection change
 * @param {selectionCallback} callback
 *
 * @callback selectionCallback
 */


treemode.onSelectionChange = function (callback) {
  if (typeof callback === 'function') {
    this._selectionChangedHandler = Object(util["debounce"])(callback, this.DEBOUNCE_INTERVAL);
  }
};
/**
 * Select range of nodes.
 * For selecting single node send only the start parameter
 * For clear the selection do not send any parameter
 * If the nodes are not from the same level the first common parent will be selected
 * @param {{path: Array.<String>}} start object contains the path for selection start
 * @param {{path: Array.<String>}} end object contains the path for selection end
 */


treemode.setSelection = function (start, end) {
  // check for old usage
  if (start && start.dom && start.range) {
    console.warn('setSelection/getSelection usage for text selection is deprecated and should not be used, see documentation for supported selection options');
    this.setDomSelection(start);
  }

  var nodes = this._getNodeInstancesByRange(start, end);

  nodes.forEach(function (node) {
    node.expandTo();
  });
  this.select(nodes);
};
/**
 * Returns a set of Nodes according to a range of selection
 * @param {{path: Array.<String>}} start object contains the path for range start
 * @param {{path: Array.<String>}=} end object contains the path for range end
 * @return {Array.<Node>} Node instances on the given range
 * @private
 */


treemode._getNodeInstancesByRange = function (start, end) {
  var startNode, endNode;

  if (start && start.path) {
    startNode = this.node.findNodeByPath(start.path);

    if (end && end.path) {
      endNode = this.node.findNodeByPath(end.path);
    }
  }

  var nodes = [];

  if (startNode instanceof Node_Node) {
    if (endNode instanceof Node_Node && endNode !== startNode) {
      if (startNode.parent === endNode.parent) {
        if (startNode.getIndex() < endNode.getIndex()) {
          start = startNode;
          end = endNode;
        } else {
          start = endNode;
          end = startNode;
        }

        var current = start;
        nodes.push(current);

        do {
          current = current.nextSibling();
          nodes.push(current);
        } while (current && current !== end);
      } else {
        nodes = this._findTopLevelNodes(startNode, endNode);
      }
    } else {
      nodes.push(startNode);
    }
  }

  return nodes;
};

treemode.getNodesByRange = function (start, end) {
  var nodes = this._getNodeInstancesByRange(start, end);

  var serializableNodes = [];
  nodes.forEach(function (node) {
    serializableNodes.push(node.serialize());
  });
  return serializableNodes;
}; // define modes


var treeModeMixins = [{
  mode: 'tree',
  mixin: treemode,
  data: 'json'
}, {
  mode: 'view',
  mixin: treemode,
  data: 'json'
}, {
  mode: 'form',
  mixin: treemode,
  data: 'json'
}];

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/jmespath/jmespath.js
var jmespath = __webpack_require__(4);
var jmespath_default = /*#__PURE__*/__webpack_require__.n(jmespath);

// EXTERNAL MODULE: ./src/js/i18n.js
var i18n = __webpack_require__(1);

// EXTERNAL MODULE: ./src/js/ModeSwitcher.js
var ModeSwitcher = __webpack_require__(6);

// EXTERNAL MODULE: ./src/js/ErrorTable.js
var ErrorTable = __webpack_require__(13);

// EXTERNAL MODULE: ./src/js/showSortModal.js
var showSortModal = __webpack_require__(5);

// EXTERNAL MODULE: ./src/js/showTransformModal.js + 1 modules
var showTransformModal = __webpack_require__(7);

// EXTERNAL MODULE: ./src/js/textmode.js + 1 modules
var textmode = __webpack_require__(15);

// EXTERNAL MODULE: ./src/js/constants.js
var constants = __webpack_require__(2);

// EXTERNAL MODULE: ./src/js/util.js
var util = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/History.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Keep track on any history, be able
 * @param {function} onChange
 * @param {function} calculateItemSize
 * @param {number} limit    Maximum size of all items in history
 * @constructor
 */
var History =
/*#__PURE__*/
function () {
  function History(onChange, calculateItemSize, limit) {
    _classCallCheck(this, History);

    this.onChange = onChange;

    this.calculateItemSize = calculateItemSize || function () {
      return 1;
    };

    this.limit = limit;
    this.items = [];
    this.index = -1;
  }

  _createClass(History, [{
    key: "add",
    value: function add(item) {
      // limit number of items in history so that the total size doesn't
      // always keep at least one item in memory
      while (this._calculateHistorySize() > this.limit && this.items.length > 1) {
        this.items.shift();
        this.index--;
      } // cleanup any redo action that are not valid anymore


      this.items = this.items.slice(0, this.index + 1);
      this.items.push(item);
      this.index++;
      this.onChange();
    }
  }, {
    key: "_calculateHistorySize",
    value: function _calculateHistorySize() {
      var calculateItemSize = this.calculateItemSize;
      var totalSize = 0;
      this.items.forEach(function (item) {
        totalSize += calculateItemSize(item);
      });
      return totalSize;
    }
  }, {
    key: "undo",
    value: function undo() {
      if (!this.canUndo()) {
        return;
      }

      this.index--;
      this.onChange();
      return this.items[this.index];
    }
  }, {
    key: "redo",
    value: function redo() {
      if (!this.canRedo()) {
        return;
      }

      this.index++;
      this.onChange();
      return this.items[this.index];
    }
  }, {
    key: "canUndo",
    value: function canUndo() {
      return this.index > 0;
    }
  }, {
    key: "canRedo",
    value: function canRedo() {
      return this.index < this.items.length - 1;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = [];
      this.index = -1;
      this.onChange();
    }
  }]);

  return History;
}();
// CONCATENATED MODULE: ./src/js/previewmode.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewModeMixins", function() { return previewModeMixins; });












var previewmode_textmode = textmode["textModeMixins"][0].mixin; // create a mixin with the functions for text mode

var previewmode = {};
/**
 * Create a JSON document preview, suitable for processing of large documents
 * @param {Element} container
 * @param {Object} [options]   Object with options. See docs for details.
 * @private
 */

previewmode.create = function (container) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options.statusBar === 'undefined') {
    options.statusBar = true;
  } // setting default for previewmode


  options.mainMenuBar = options.mainMenuBar !== false;
  options.enableSort = options.enableSort !== false;
  options.enableTransform = options.enableTransform !== false;
  this.options = options; // indentation

  if (options.indentation) {
    this.indentation = Number(options.indentation);
  } else {
    this.indentation = 2; // number of spaces
  } // determine mode


  this.mode = 'preview';
  var me = this;
  this.container = container;
  this.dom = {};
  this.json = undefined;
  this.text = ''; // TODO: JSON Schema support
  // create a debounced validate function

  this._debouncedValidate = Object(util["debounce"])(this.validate.bind(this), this.DEBOUNCE_INTERVAL);
  this.width = container.clientWidth;
  this.height = container.clientHeight;
  this.frame = document.createElement('div');
  this.frame.className = 'jsoneditor jsoneditor-mode-preview';

  this.frame.onclick = function (event) {
    // prevent default submit action when the editor is located inside a form
    event.preventDefault();
  };

  this.content = document.createElement('div');
  this.content.className = 'jsoneditor-outer';
  this.dom.busy = document.createElement('div');
  this.dom.busy.className = 'jsoneditor-busy';
  this.dom.busyContent = document.createElement('span');
  this.dom.busyContent.innerHTML = 'busy...';
  this.dom.busy.appendChild(this.dom.busyContent);
  this.content.appendChild(this.dom.busy);
  this.dom.previewContent = document.createElement('pre');
  this.dom.previewContent.className = 'jsoneditor-preview';
  this.dom.previewText = document.createTextNode('');
  this.dom.previewContent.appendChild(this.dom.previewText);
  this.content.appendChild(this.dom.previewContent);

  if (this.options.mainMenuBar) {
    Object(util["addClassName"])(this.content, 'has-main-menu-bar'); // create menu

    this.menu = document.createElement('div');
    this.menu.className = 'jsoneditor-menu';
    this.frame.appendChild(this.menu); // create format button

    var buttonFormat = document.createElement('button');
    buttonFormat.type = 'button';
    buttonFormat.className = 'jsoneditor-format';
    buttonFormat.title = 'Format JSON data, with proper indentation and line feeds (Ctrl+\\)';
    this.menu.appendChild(buttonFormat);

    buttonFormat.onclick = function handleFormat() {
      me.executeWithBusyMessage(function () {
        try {
          me.format();
        } catch (err) {
          me._onError(err);
        }
      }, 'formatting...');
    }; // create compact button


    var buttonCompact = document.createElement('button');
    buttonCompact.type = 'button';
    buttonCompact.className = 'jsoneditor-compact';
    buttonCompact.title = 'Compact JSON data, remove all whitespaces (Ctrl+Shift+\\)';
    this.menu.appendChild(buttonCompact);

    buttonCompact.onclick = function handleCompact() {
      me.executeWithBusyMessage(function () {
        try {
          me.compact();
        } catch (err) {
          me._onError(err);
        }
      }, 'compacting...');
    }; // create sort button


    if (this.options.enableSort) {
      var _sort = document.createElement('button');

      _sort.type = 'button';
      _sort.className = 'jsoneditor-sort';
      _sort.title = Object(i18n["c" /* translate */])('sortTitleShort');

      _sort.onclick = function () {
        me._showSortModal();
      };

      this.menu.appendChild(_sort);
    } // create transform button


    if (this.options.enableTransform) {
      var transform = document.createElement('button');
      transform.type = 'button';
      transform.title = Object(i18n["c" /* translate */])('transformTitleShort');
      transform.className = 'jsoneditor-transform';

      transform.onclick = function () {
        me._showTransformModal();
      };

      this.dom.transform = transform;
      this.menu.appendChild(transform);
    } // create repair button


    var buttonRepair = document.createElement('button');
    buttonRepair.type = 'button';
    buttonRepair.className = 'jsoneditor-repair';
    buttonRepair.title = 'Repair JSON: fix quotes and escape characters, remove comments and JSONP notation, turn JavaScript objects into JSON.';
    this.menu.appendChild(buttonRepair);

    buttonRepair.onclick = function () {
      if (me.json === undefined) {
        // only repair if we don't have valid JSON
        me.executeWithBusyMessage(function () {
          try {
            me.repair();
          } catch (err) {
            me._onError(err);
          }
        }, 'repairing...');
      }
    }; // create history and undo/redo buttons


    if (this.options.history !== false) {
      // default option value is true
      var onHistoryChange = function onHistoryChange() {
        me.dom.undo.disabled = !me.history.canUndo();
        me.dom.redo.disabled = !me.history.canRedo();
      };

      var calculateItemSize = function calculateItemSize(item) {
        return (// times two to account for the json object
          item.text.length * 2
        );
      };

      this.history = new History(onHistoryChange, calculateItemSize, constants["c" /* PREVIEW_HISTORY_LIMIT */]); // create undo button

      var undo = document.createElement('button');
      undo.type = 'button';
      undo.className = 'jsoneditor-undo jsoneditor-separator';
      undo.title = Object(i18n["c" /* translate */])('undo');

      undo.onclick = function () {
        var action = me.history.undo();

        if (action) {
          me._applyHistory(action);
        }
      };

      this.menu.appendChild(undo);
      this.dom.undo = undo; // create redo button

      var redo = document.createElement('button');
      redo.type = 'button';
      redo.className = 'jsoneditor-redo';
      redo.title = Object(i18n["c" /* translate */])('redo');

      redo.onclick = function () {
        var action = me.history.redo();

        if (action) {
          me._applyHistory(action);
        }
      };

      this.menu.appendChild(redo);
      this.dom.redo = redo; // force enabling/disabling the undo/redo button

      this.history.onChange();
    } // create mode box


    if (this.options && this.options.modes && this.options.modes.length) {
      this.modeSwitcher = new ModeSwitcher["a" /* ModeSwitcher */](this.menu, this.options.modes, this.options.mode, function onSwitch(mode) {
        // switch mode and restore focus
        me.setMode(mode);
        me.modeSwitcher.focus();
      });
    }
  }

  this.errorTable = new ErrorTable["a" /* ErrorTable */]({
    errorTableVisible: true,
    onToggleVisibility: function onToggleVisibility() {
      me.validate();
    },
    onFocusLine: null,
    onChangeHeight: function onChangeHeight(height) {
      // TODO: change CSS to using flex box, remove setting height using JavaScript
      var statusBarHeight = me.dom.statusBar ? me.dom.statusBar.clientHeight : 0;
      var totalHeight = height + statusBarHeight + 1;
      me.content.style.marginBottom = -totalHeight + 'px';
      me.content.style.paddingBottom = totalHeight + 'px';
    }
  });
  this.frame.appendChild(this.content);
  this.frame.appendChild(this.errorTable.getErrorTable());
  this.container.appendChild(this.frame);

  if (options.statusBar) {
    Object(util["addClassName"])(this.content, 'has-status-bar');
    var statusBar = document.createElement('div');
    this.dom.statusBar = statusBar;
    statusBar.className = 'jsoneditor-statusbar';
    this.frame.appendChild(statusBar);
    this.dom.fileSizeInfo = document.createElement('span');
    this.dom.fileSizeInfo.className = 'jsoneditor-size-info';
    this.dom.fileSizeInfo.innerText = '';
    statusBar.appendChild(this.dom.fileSizeInfo);
    this.dom.arrayInfo = document.createElement('span');
    this.dom.arrayInfo.className = 'jsoneditor-size-info';
    this.dom.arrayInfo.innerText = '';
    statusBar.appendChild(this.dom.arrayInfo);
    statusBar.appendChild(this.errorTable.getErrorCounter());
    statusBar.appendChild(this.errorTable.getWarningIcon());
    statusBar.appendChild(this.errorTable.getErrorIcon());
  }

  this._renderPreview();

  this.setSchema(this.options.schema, this.options.schemaRefs);
};

previewmode._renderPreview = function () {
  var text = this.getText();
  this.dom.previewText.nodeValue = Object(util["limitCharacters"])(text, constants["b" /* MAX_PREVIEW_CHARACTERS */]);

  if (this.dom.fileSizeInfo) {
    this.dom.fileSizeInfo.innerText = 'Size: ' + Object(util["formatSize"])(text.length);
  }

  if (this.dom.arrayInfo) {
    if (Array.isArray(this.json)) {
      this.dom.arrayInfo.innerText = 'Array: ' + this.json.length + ' items';
    } else {
      this.dom.arrayInfo.innerText = '';
    }
  }
};
/**
 * Handle a change:
 * - Validate JSON schema
 * - Send a callback to the onChange listener if provided
 * @private
 */


previewmode._onChange = function () {
  // validate JSON schema (if configured)
  this._debouncedValidate(); // trigger the onChange callback


  if (this.options.onChange) {
    try {
      this.options.onChange();
    } catch (err) {
      console.error('Error in onChange callback: ', err);
    }
  } // trigger the onChangeJSON callback


  if (this.options.onChangeJSON) {
    try {
      this.options.onChangeJSON(this.get());
    } catch (err) {
      console.error('Error in onChangeJSON callback: ', err);
    }
  } // trigger the onChangeText callback


  if (this.options.onChangeText) {
    try {
      this.options.onChangeText(this.getText());
    } catch (err) {
      console.error('Error in onChangeText callback: ', err);
    }
  }
};
/**
 * Open a sort modal
 * @private
 */


previewmode._showSortModal = function () {
  var me = this;

  function onSort(json, sortedBy) {
    if (Array.isArray(json)) {
      var sortedArray = Object(util["sort"])(json, sortedBy.path, sortedBy.direction);
      me.sortedBy = sortedBy;

      me._setAndFireOnChange(sortedArray);
    }

    if (Object(util["isObject"])(json)) {
      var sortedObject = Object(util["sortObjectKeys"])(json, sortedBy.direction);
      me.sortedBy = sortedBy;

      me._setAndFireOnChange(sortedObject);
    }
  }

  this.executeWithBusyMessage(function () {
    var container = me.options.modalAnchor || constants["a" /* DEFAULT_MODAL_ANCHOR */];
    var json = me.get();

    me._renderPreview(); // update array count


    Object(showSortModal["a" /* showSortModal */])(container, json, function (sortedBy) {
      me.executeWithBusyMessage(function () {
        onSort(json, sortedBy);
      }, 'sorting...');
    }, me.sortedBy);
  }, 'parsing...');
};
/**
 * Open a transform modal
 * @private
 */


previewmode._showTransformModal = function () {
  var me = this;
  this.executeWithBusyMessage(function () {
    var anchor = me.options.modalAnchor || constants["a" /* DEFAULT_MODAL_ANCHOR */];
    var json = me.get();

    me._renderPreview(); // update array count


    Object(showTransformModal["a" /* showTransformModal */])(anchor, json, function (query) {
      me.executeWithBusyMessage(function () {
        var updatedJson = jmespath_default.a.search(json, query);

        me._setAndFireOnChange(updatedJson);
      }, 'transforming...');
    });
  }, 'parsing...');
};
/**
 * Destroy the editor. Clean up DOM, event listeners, and web workers.
 */


previewmode.destroy = function () {
  if (this.frame && this.container && this.frame.parentNode === this.container) {
    this.container.removeChild(this.frame);
  }

  if (this.modeSwitcher) {
    this.modeSwitcher.destroy();
    this.modeSwitcher = null;
  }

  this._debouncedValidate = null;
  this.history.clear();
  this.history = null;
};
/**
 * Compact the code in the text editor
 */


previewmode.compact = function () {
  var json = this.get();
  var text = JSON.stringify(json); // we know that in this case the json is still the same, so we pass json too

  this._setTextAndFireOnChange(text, json);
};
/**
 * Format the code in the text editor
 */


previewmode.format = function () {
  var json = this.get();
  var text = JSON.stringify(json, null, this.indentation); // we know that in this case the json is still the same, so we pass json too

  this._setTextAndFireOnChange(text, json);
};
/**
 * Repair the code in the text editor
 */


previewmode.repair = function () {
  var text = this.getText();
  var repairedText = Object(util["repair"])(text);

  this._setTextAndFireOnChange(repairedText);
};
/**
 * Set focus to the editor
 */


previewmode.focus = function () {
  // we don't really have a place to focus,
  // let's focus on the transform button
  this.dom.transform.focus();
};
/**
 * Set json data in the editor
 * @param {*} json
 */


previewmode.set = function (json) {
  if (this.history) {
    this.history.clear();
  }

  this._set(json);
};
/**
 * Update data. Same as calling `set` in text/code mode.
 * @param {*} json
 */


previewmode.update = function (json) {
  this._set(json);
};
/**
 * Set json data
 * @param {*} json
 */


previewmode._set = function (json) {
  this.text = undefined;
  this.json = json;

  this._renderPreview();

  this._pushHistory(); // validate JSON schema


  this._debouncedValidate();
};

previewmode._setAndFireOnChange = function (json) {
  this._set(json);

  this._onChange();
};
/**
 * Get json data
 * @return {*} json
 */


previewmode.get = function () {
  if (this.json === undefined) {
    var text = this.getText();
    this.json = Object(util["parse"])(text); // this can throw an error
  }

  return this.json;
};
/**
 * Get the text contents of the editor
 * @return {String} jsonText
 */


previewmode.getText = function () {
  if (this.text === undefined) {
    this.text = JSON.stringify(this.json, null, this.indentation);

    if (this.options.escapeUnicode === true) {
      this.text = Object(util["escapeUnicodeChars"])(this.text);
    }
  }

  return this.text;
};
/**
 * Set the text contents of the editor
 * @param {String} jsonText
 */


previewmode.setText = function (jsonText) {
  if (this.history) {
    this.history.clear();
  }

  this._setText(jsonText);
};
/**
 * Update the text contents
 * @param {string} jsonText
 */


previewmode.updateText = function (jsonText) {
  // don't update if there are no changes
  if (this.getText() === jsonText) {
    return;
  }

  this._setText(jsonText);
};
/**
 * Set the text contents of the editor
 * @param {string} jsonText
 * @param {*} [json] Optional JSON instance of the text
 * @private
 */


previewmode._setText = function (jsonText, json) {
  if (this.options.escapeUnicode === true) {
    this.text = Object(util["escapeUnicodeChars"])(jsonText);
  } else {
    this.text = jsonText;
  }

  this.json = json;

  this._renderPreview();

  if (this.json === undefined) {
    var me = this;
    this.executeWithBusyMessage(function () {
      try {
        // force parsing the json now, else it will be done in validate without feedback
        me.json = me.get();

        me._renderPreview();

        me._pushHistory();
      } catch (err) {// no need to throw an error, validation will show an error
      }
    }, 'parsing...');
  } else {
    this._pushHistory();
  }

  this._debouncedValidate();
};
/**
 * Set text and fire onChange callback
 * @param {string} jsonText
 * @param {*} [json] Optional JSON instance of the text
 * @private
 */


previewmode._setTextAndFireOnChange = function (jsonText, json) {
  this._setText(jsonText, json);

  this._onChange();
};
/**
 * Apply history to the current state
 * @param {{json?: JSON, text?: string}} action
 * @private
 */


previewmode._applyHistory = function (action) {
  this.json = action.json;
  this.text = action.text;

  this._renderPreview();

  this._debouncedValidate();
};
/**
 * Push the current state to history
 * @private
 */


previewmode._pushHistory = function () {
  if (!this.history) {
    return;
  }

  var action = {
    text: this.text,
    json: this.json
  };
  this.history.add(action);
};
/**
 * Execute a heavy, blocking action.
 * Before starting the action, show a message on screen like "parsing..."
 * @param {function} fn
 * @param {string} message
 */


previewmode.executeWithBusyMessage = function (fn, message) {
  var size = this.getText().length;

  if (size > constants["d" /* SIZE_LARGE */]) {
    var me = this;
    Object(util["addClassName"])(me.frame, 'busy');
    me.dom.busyContent.innerText = message;
    setTimeout(function () {
      fn();
      Object(util["removeClassName"])(me.frame, 'busy');
      me.dom.busyContent.innerText = '';
    }, 100);
  } else {
    fn();
  }
}; // TODO: refactor into composable functions instead of this shaky mixin-like structure


previewmode.validate = previewmode_textmode.validate;
previewmode._renderErrors = previewmode_textmode._renderErrors; // define modes

var previewModeMixins = [{
  mode: 'preview',
  mixin: previewmode,
  data: 'json'
}];

/***/ })
/******/ ]);
});
});

var JSONEditor = unwrapExports(jsoneditorMinimalist);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * @typedef {{
 * tree: string,
 * view: string,
 * form: string,
 * code: string,
 * text: string,
 * allValues: Array<string>
 * }} TJsonEditorModes
 */
var modes = {
    tree: 'tree',
    view: 'view',
    form: 'form',
    code: 'code',
    text: 'text'
};

var values = Object.values(modes);

modes.allValues = values;

/**
 * @type {object}
 * @property {object} [value]
 * @property {string} [mode='tree'] - Set the editor mode.
 * @property {string} [name=undefined] - Initial field name for the root node
 * @property {object} [schema] - Validate the JSON object against a JSON schema.
 * @property {object} [schemaRefs] - Schemas that are referenced using
 * the $ref property
 * @property {Function} [onChange] - Set a callback function
 * triggered when the contents of the JSONEditor change.
 * Called without parameters. Will only be triggered on changes made by the user.
 * Return new json.
 * @property {Function} [onError] - Set a callback function triggered when an error occurs.
 * Invoked with the error as first argument.
 * The callback is only invoked for errors triggered by a users action,
 * like switching from code mode to tree mode or clicking
 * the Format button whilst the editor doesn't contain valid JSON.
 * @property {Function} [onModeChange] - Set a callback function
 * triggered right after the mode is changed by the user.
 * @property {object} [ace] - Provide a version of the Ace editor.
 * Only applicable when mode is code
 * @property {object} [ajv] - Provide a instance of ajv,
 * the library used for JSON schema validation.
 * @property {string} [theme] - Set the Ace editor theme,
 * uses included 'ace/theme/jsoneditor' by default.
 * @property {boolean} [history=false] - Enables history,
 * adds a button Undo and Redo to the menu of the JSONEditor. Only applicable when
 * mode is 'tree' or 'form'
 * @property {boolean} [navigationBar=true] - Adds navigation bar to the menu
 * the navigation bar visualize the current position on the
 * tree structure as well as allows breadcrumbs navigation.
 * @property {boolean} [statusBar=true] - Adds status bar to the buttom of the editor
 * the status bar shows the cursor position and a count of the selected characters.
 * Only applicable when mode is 'code' or 'text'.
 * @property {boolean} [search=true] - Enables a search box in
 * the upper right corner of the JSONEditor.
 * @property {Array<string>} [allowedModes] - Create a box in the editor menu where
 * the user can switch between the specified modes.
 * @property {(string|PropTypes.elementType)} [tag='div'] - Html element, or react element to render
 * @property {object} [htmlElementProps] - html element custom props
 * @property {Function} [innerRef] - callback to get html element reference
 */

var Editor = function (_Component) {
    inherits(Editor, _Component);

    function Editor(props) {
        classCallCheck(this, Editor);

        var _this = possibleConstructorReturn(this, _Component.call(this, props));

        _this.htmlElementRef = null;
        _this.jsonEditor = null;

        _this.handleChange = _this.handleChange.bind(_this);
        _this.setRef = _this.setRef.bind(_this);
        _this.collapseAll = _this.collapseAll.bind(_this);
        _this.expandAll = _this.expandAll.bind(_this);
        _this.focus = _this.focus.bind(_this);
        return _this;
    }

    /**
     * @type TJsonEditorModes
     */


    Editor.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props,
            allowedModes = _props.allowedModes,
            innerRef = _props.innerRef,
            htmlElementProps = _props.htmlElementProps,
            tag = _props.tag,
            onChange = _props.onChange,
            rest = objectWithoutProperties(_props, ['allowedModes', 'innerRef', 'htmlElementProps', 'tag', 'onChange']);


        this.createEditor(_extends({}, rest, {
            modes: allowedModes
        }));
    };

    Editor.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
        var allowedModes = _ref.allowedModes,
            schema = _ref.schema,
            name = _ref.name,
            theme = _ref.theme,
            schemaRefs = _ref.schemaRefs,
            innerRef = _ref.innerRef,
            htmlElementProps = _ref.htmlElementProps,
            tag = _ref.tag,
            onChange = _ref.onChange,
            rest = objectWithoutProperties(_ref, ['allowedModes', 'schema', 'name', 'theme', 'schemaRefs', 'innerRef', 'htmlElementProps', 'tag', 'onChange']);

        if (this.jsonEditor) {
            if (theme !== this.props.theme) {
                this.createEditor(_extends({}, rest, {
                    theme: theme,
                    modes: allowedModes
                }));
            } else {
                if (schema !== this.props.schema || schemaRefs !== this.props.schemaRefs) {
                    this.jsonEditor.setSchema(schema, schemaRefs);
                }

                if (name !== this.jsonEditor.getName()) {
                    this.jsonEditor.setName(name);
                }
            }
        }
    };

    Editor.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref2) {
        var htmlElementProps = _ref2.htmlElementProps;

        return htmlElementProps !== this.props.htmlElementProps;
    };

    Editor.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.jsonEditor) {
            this.jsonEditor.destroy();
            this.jsonEditor = null;
        }
    };

    Editor.prototype.setRef = function setRef(element) {
        this.htmlElementRef = element;
        if (this.props.innerRef) {
            this.props.innerRef(element);
        }
    };

    Editor.prototype.createEditor = function createEditor(_ref3) {
        var value = _ref3.value,
            rest = objectWithoutProperties(_ref3, ['value']);

        if (this.jsonEditor) {
            this.jsonEditor.destroy();
        }

        this.jsonEditor = new JSONEditor(this.htmlElementRef, _extends({
            onChange: this.handleChange
        }, rest));

        this.jsonEditor.set(value);
    };

    Editor.prototype.handleChange = function handleChange() {
        if (this.props.onChange) {
            try {
                var text = this.jsonEditor.getText();
                if (text === '') {
                    this.props.onChange(null);
                }

                var currentJson = this.jsonEditor.get();
                if (this.props.value !== currentJson) {
                    this.props.onChange(currentJson);
                }
            } catch (err) {
                this.err = err;
            }
        }
    };

    Editor.prototype.collapseAll = function collapseAll() {
        if (this.jsonEditor) {
            this.jsonEditor.collapseAll();
        }
    };

    Editor.prototype.expandAll = function expandAll() {
        if (this.jsonEditor) {
            this.jsonEditor.expandAll();
        }
    };

    Editor.prototype.focus = function focus() {
        if (this.jsonEditor) {
            this.jsonEditor.focus();
        }
    };

    Editor.prototype.render = function render() {
        var _props2 = this.props,
            htmlElementProps = _props2.htmlElementProps,
            tag = _props2.tag;


        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tag, _extends({}, htmlElementProps, {
            ref: this.setRef
        }));
    };

    return Editor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Editor.propTypes = {
    //  jsoneditor props
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
    mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(values),
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    schema: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    schemaRefs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onModeChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

    ace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    ajv: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    navigationBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    statusBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    allowedModes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(values)),

    //  custom props
    tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType]),
    htmlElementProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Editor.defaultProps = {
    tag: 'div',
    mode: modes.tree,
    history: false,
    search: true,
    navigationBar: true,
    statusBar: true
};
Editor.modes = modes;


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: flatten, find, findIndex, filter, forEach, without, reduce, every, some, map, keys, size, values, groupBy, uniqueBy, unionBy, sortBy, matchPattern, debounce, throttle, bind, isUndefined, isDefined, isNil, isArray, isObject, isNumber, isFunction, isString, ensureArray, has, assign, pick, omit, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return without; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionBy", function() { return unionBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPattern", function() { return matchPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureArray", function() { return ensureArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var nativeToString = Object.prototype.toString;
var nativeHasOwnProperty = Object.prototype.hasOwnProperty;
function isUndefined(obj) {
  return obj === undefined;
}
function isDefined(obj) {
  return obj !== undefined;
}
function isNil(obj) {
  return obj == null;
}
function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}
function isObject(obj) {
  return nativeToString.call(obj) === '[object Object]';
}
function isNumber(obj) {
  return nativeToString.call(obj) === '[object Number]';
}
function isFunction(obj) {
  var tag = nativeToString.call(obj);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object AsyncGeneratorFunction]' || tag === '[object Proxy]';
}
function isString(obj) {
  return nativeToString.call(obj) === '[object String]';
}
/**
 * Ensure collection is an array.
 *
 * @param {Object} obj
 */

function ensureArray(obj) {
  if (isArray(obj)) {
    return;
  }

  throw new Error('must supply array');
}
/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */

function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}

/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function|Object} matcher
 *
 * @return {Object}
 */

function find(collection, matcher) {
  matcher = toMatcher(matcher);
  var match;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      match = val;
      return false;
    }
  });
  return match;
}
/**
 * Find element index in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Object}
 */

function findIndex(collection, matcher) {
  matcher = toMatcher(matcher);
  var idx = isArray(collection) ? -1 : undefined;
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      idx = key;
      return false;
    }
  });
  return idx;
}
/**
 * Find element in collection.
 *
 * @param  {Array|Object} collection
 * @param  {Function} matcher
 *
 * @return {Array} result
 */

function filter(collection, matcher) {
  var result = [];
  forEach(collection, function (val, key) {
    if (matcher(val, key)) {
      result.push(val);
    }
  });
  return result;
}
/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */

function forEach(collection, iterator) {
  var val, result;

  if (isUndefined(collection)) {
    return;
  }

  var convertKey = isArray(collection) ? toNum : identity;

  for (var key in collection) {
    if (has(collection, key)) {
      val = collection[key];
      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}
/**
 * Return collection without element.
 *
 * @param  {Array} arr
 * @param  {Function} matcher
 *
 * @return {Array}
 */

function without(arr, matcher) {
  if (isUndefined(arr)) {
    return [];
  }

  ensureArray(arr);
  matcher = toMatcher(matcher);
  return arr.filter(function (el, idx) {
    return !matcher(el, idx);
  });
}
/**
 * Reduce collection, returning a single result.
 *
 * @param  {Object|Array} collection
 * @param  {Function} iterator
 * @param  {Any} result
 *
 * @return {Any} result returned from last iterator
 */

function reduce(collection, iterator, result) {
  forEach(collection, function (value, idx) {
    result = iterator(result, value, idx);
  });
  return result;
}
/**
 * Return true if every element in the collection
 * matches the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function every(collection, matcher) {
  return !!reduce(collection, function (matches, val, key) {
    return matches && matcher(val, key);
  }, true);
}
/**
 * Return true if some elements in the collection
 * match the criteria.
 *
 * @param  {Object|Array} collection
 * @param  {Function} matcher
 *
 * @return {Boolean}
 */

function some(collection, matcher) {
  return !!find(collection, matcher);
}
/**
 * Transform a collection into another collection
 * by piping each member through the given fn.
 *
 * @param  {Object|Array}   collection
 * @param  {Function} fn
 *
 * @return {Array} transformed collection
 */

function map(collection, fn) {
  var result = [];
  forEach(collection, function (val, key) {
    result.push(fn(val, key));
  });
  return result;
}
/**
 * Get the collections keys.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function keys(collection) {
  return collection && Object.keys(collection) || [];
}
/**
 * Shorthand for `keys(o).length`.
 *
 * @param  {Object|Array} collection
 *
 * @return {Number}
 */

function size(collection) {
  return keys(collection).length;
}
/**
 * Get the values in the collection.
 *
 * @param  {Object|Array} collection
 *
 * @return {Array}
 */

function values(collection) {
  return map(collection, function (val) {
    return val;
  });
}
/**
 * Group collection members by attribute.
 *
 * @param  {Object|Array} collection
 * @param  {Function} extractor
 *
 * @return {Object} map with { attrValue => [ a, b, c ] }
 */

function groupBy(collection, extractor) {
  var grouped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  extractor = toExtractor(extractor);
  forEach(collection, function (val) {
    var discriminator = extractor(val) || '_';
    var group = grouped[discriminator];

    if (!group) {
      group = grouped[discriminator] = [];
    }

    group.push(val);
  });
  return grouped;
}
function uniqueBy(extractor) {
  extractor = toExtractor(extractor);
  var grouped = {};

  for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    collections[_key - 1] = arguments[_key];
  }

  forEach(collections, function (c) {
    return groupBy(c, extractor, grouped);
  });
  var result = map(grouped, function (val, key) {
    return val[0];
  });
  return result;
}
var unionBy = uniqueBy;
/**
 * Sort collection by criteria.
 *
 * @param  {Object|Array} collection
 * @param  {String|Function} extractor
 *
 * @return {Array}
 */

function sortBy(collection, extractor) {
  extractor = toExtractor(extractor);
  var sorted = [];
  forEach(collection, function (value, key) {
    var disc = extractor(value, key);
    var entry = {
      d: disc,
      v: value
    };

    for (var idx = 0; idx < sorted.length; idx++) {
      var d = sorted[idx].d;

      if (disc < d) {
        sorted.splice(idx, 0, entry);
        return;
      }
    } // not inserted, append (!)


    sorted.push(entry);
  });
  return map(sorted, function (e) {
    return e.v;
  });
}
/**
 * Create an object pattern matcher.
 *
 * @example
 *
 * const matcher = matchPattern({ id: 1 });
 *
 * var element = find(elements, matcher);
 *
 * @param  {Object} pattern
 *
 * @return {Function} matcherFn
 */

function matchPattern(pattern) {
  return function (el) {
    return every(pattern, function (val, key) {
      return el[key] === val;
    });
  };
}

function toExtractor(extractor) {
  return isFunction(extractor) ? extractor : function (e) {
    return e[extractor];
  };
}

function toMatcher(matcher) {
  return isFunction(matcher) ? matcher : function (e) {
    return e === matcher;
  };
}

function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Debounce fn, calling it only once if
 * the given time elapsed between calls.
 *
 * @param  {Function} fn
 * @param  {Number} timeout
 *
 * @return {Function} debounced function
 */
function debounce(fn, timeout) {
  var timer;
  var lastArgs;
  var lastThis;
  var lastNow;

  function fire() {
    var now = Date.now();
    var scheduledDiff = lastNow + timeout - now;

    if (scheduledDiff > 0) {
      return schedule(scheduledDiff);
    }

    fn.apply(lastThis, lastArgs);
    timer = lastNow = lastArgs = lastThis = undefined;
  }

  function schedule(timeout) {
    timer = setTimeout(fire, timeout);
  }

  return function () {
    lastNow = Date.now();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;
    lastThis = this; // ensure an execution is scheduled

    if (!timer) {
      schedule(timeout);
    }
  };
}
/**
 * Throttle fn, calling at most once
 * in the given interval.
 *
 * @param  {Function} fn
 * @param  {Number} interval
 *
 * @return {Function} throttled function
 */

function throttle(fn, interval) {
  var throttling = false;
  return function () {
    if (throttling) {
      return;
    }

    fn.apply(void 0, arguments);
    throttling = true;
    setTimeout(function () {
      throttling = false;
    }, interval);
  };
}
/**
 * Bind function against target <this>.
 *
 * @param  {Function} fn
 * @param  {Object}   target
 *
 * @return {Function} bound function
 */

function bind(fn, target) {
  return fn.bind(target);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Convenience wrapper for `Object.assign`.
 *
 * @param {Object} target
 * @param {...Object} others
 *
 * @return {Object} the target
 */

function assign(target) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  return _extends.apply(void 0, [target].concat(others));
}
/**
 * Pick given properties from the target object.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function pick(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(properties, function (prop) {
    if (prop in obj) {
      result[prop] = target[prop];
    }
  });
  return result;
}
/**
 * Pick all target properties, excluding the given ones.
 *
 * @param {Object} target
 * @param {Array} properties
 *
 * @return {Object} target
 */

function omit(target, properties) {
  var result = {};
  var obj = Object(target);
  forEach(obj, function (prop, key) {
    if (properties.indexOf(key) === -1) {
      result[key] = prop;
    }
  });
  return result;
}
/**
 * Recursively merge `...sources` into given target.
 *
 * Does support merging objects; does not support merging arrays.
 *
 * @param {Object} target
 * @param {...Object} sources
 *
 * @return {Object} the target
 */

function merge(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) {
    return target;
  }

  forEach(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !isObject(source)) {
      return;
    }

    forEach(source, function (sourceVal, key) {
      if (key === '__proto__') {
        return;
      }

      var targetVal = target[key];

      if (isObject(sourceVal)) {
        if (!isObject(targetVal)) {
          // override target[key] with object
          targetVal = {};
        }

        target[key] = merge(targetVal, sourceVal);
      } else {
        target[key] = sourceVal;
      }
    });
  });
  return target;
}




/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/err.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/err.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mitsuketa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mitsuketa */ "./node_modules/react-json-editor-ajrm/es/mitsuketa/index.js");
/* harmony import */ var _mitsuketa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mitsuketa__WEBPACK_IMPORTED_MODULE_0__);

const err = {
  getCaller: (skip = 1) => {
    // A somewhat hacky solution that will yield different results in different JS engines. 
    // Since we only call this function when an error will actually be thrown we typically don't 
    // rally mind the performance impact this might have if called too often.
    // Lucky for us we use nodeJS and thus only V8.
    const stackTrace = new Error().stack;
    var callerName = stackTrace.replace(/^Error\s+/, '');
    callerName = callerName.split("\n")[skip];
    callerName = callerName.replace(/^\s+at Object./, '').replace(/^\s+at /, '').replace(/ \(.+\)$/, '');
    return callerName;
  },
  throwError: (fxName = 'unknown function', paramName = 'unknown parameter', expectation = 'to be defined') => {
    throw ['@', fxName, '(): Expected parameter \'', paramName, '\' ', expectation].join('');
  },
  isUndefined: (paramName = '<unknown parameter>', param) => {
    if ([null, undefined].indexOf(param) > -1) err.throwError(err.getCaller(2), paramName);
  },
  isFalsy: (paramName = '<unknown parameter>', param) => {
    if (!param) err.throwError(err.getCaller(2), paramName);
  },
  isNoneOf: (paramName = '<unknown parameter>', param, contains = []) => {
    if (contains.indexOf(param) === -1) err.throwError(err.getCaller(2), paramName, 'to be any of' + JSON.stringify(contains));
  },
  isAnyOf: (paramName = '<unknown parameter>', param, contains = []) => {
    if (contains.indexOf(param) > -1) err.throwError(err.getCaller(2), paramName, 'not to be any of' + JSON.stringify(contains));
  },
  isNotType: (paramName = '<unknown parameter>', param, type = '') => {
    if (Object(_mitsuketa__WEBPACK_IMPORTED_MODULE_0__["getType"])(param) !== type.toLowerCase()) err.throwError(err.getCaller(2), paramName, 'to be type ' + type.toLowerCase());
  },
  isAnyTypeOf: (paramName = '<unknown parameter>', param, types = []) => {
    types.forEach(type => {
      if (Object(_mitsuketa__WEBPACK_IMPORTED_MODULE_0__["getType"])(param) === type) err.throwError(err.getCaller(2), paramName, 'not to be type of ' + type.toLowerCase());
    });
  },
  missingKey: (paramName = '<unknown parameter>', param, keyName = '') => {
    err.isUndefined(paramName, param);
    if (Object.keys(param).indexOf(keyName) === -1) err.throwError(err.getCaller(2), paramName, 'to contain \'' + keyName + '\' key');
  },
  missingAnyKeys: (paramName = '<unknown parameter>', param, keyNames = ['']) => {
    err.isUndefined(paramName, param);
    const keyList = Object.keys(param);
    keyNames.forEach(keyName => {
      if (keyList.indexOf(keyName) === -1) err.throwError(err.getCaller(2), paramName, 'to contain \'' + keyName + '\' key');
    });
  },
  containsUndefined: (paramName = '<unknown parameter>', param) => {
    [undefined, null].forEach(value => {
      const location = Object(_mitsuketa__WEBPACK_IMPORTED_MODULE_0__["locate"])(param, value);
      if (location) err.throwError(err.getCaller(2), paramName, 'not to contain \'' + JSON.stringify(value) + '\' at ' + location);
    });
  },
  isInvalidPath: (paramName = '<unknown parameter>', param) => {
    err.isUndefined(paramName, param);
    err.isNotType(paramName, param, 'string');
    err.isAnyOf(paramName, param, ['', '/']);
    '.$[]#'.split().forEach(invalidChar => {
      if (param.indexOf(invalidChar) > -1) err.throwError(err.getCaller(2), paramName, 'not to contain invalid character \'' + invalidChar + '\'');
    });
    if (param.match(/\/{2,}/g)) err.throwError(err.getCaller(2), paramName, 'not to contain consecutive forward slash characters');
  },
  isInvalidWriteData: (paramName = '<unknown parameter>', param) => {
    err.isUndefined(paramName, param);
    err.containsUndefined(paramName, param);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (err);

/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes */ "./node_modules/react-json-editor-ajrm/es/themes.js");
/* harmony import */ var _mitsuketa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mitsuketa */ "./node_modules/react-json-editor-ajrm/es/mitsuketa/index.js");
/* harmony import */ var _mitsuketa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mitsuketa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _err__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./err */ "./node_modules/react-json-editor-ajrm/es/err.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale */ "./node_modules/react-json-editor-ajrm/es/locale/index.js");
/* harmony import */ var _locale_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale/en */ "./node_modules/react-json-editor-ajrm/es/locale/en.js");
/** @license react-json-editor-ajrm v2.5.9
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








class JSONInput extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.updateInternalProps = this.updateInternalProps.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.update = this.update.bind(this);
    this.getCursorPosition = this.getCursorPosition.bind(this);
    this.setCursorPosition = this.setCursorPosition.bind(this);
    this.scheduledUpdate = this.scheduledUpdate.bind(this);
    this.setUpdateTime = this.setUpdateTime.bind(this);
    this.renderLabels = this.renderLabels.bind(this);
    this.newSpan = this.newSpan.bind(this);
    this.renderErrorMessage = this.renderErrorMessage.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.showPlaceholder = this.showPlaceholder.bind(this);
    this.tokenize = this.tokenize.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onPaste = this.onPaste.bind(this);
    this.stopEvent = this.stopEvent.bind(this);
    this.refContent = null;
    this.refLabels = null;
    this.updateInternalProps();
    this.renderCount = 1;
    this.state = {
      prevPlaceholder: '',
      markupText: '',
      plainText: '',
      json: '',
      jsObject: undefined,
      lines: false,
      error: false
    };

    if (!this.props.locale) {
      console.warn("[react-json-editor-ajrm - Deprecation Warning] You did not provide a 'locale' prop for your JSON input - This will be required in a future version. English has been set as a default.");
    }
  }

  updateInternalProps() {
    let colors = {},
        style = {},
        theme = _themes__WEBPACK_IMPORTED_MODULE_2__["default"].dark_vscode_tribute;
    if ('theme' in this.props) if (typeof this.props.theme === 'string') if (this.props.theme in _themes__WEBPACK_IMPORTED_MODULE_2__["default"]) theme = _themes__WEBPACK_IMPORTED_MODULE_2__["default"][this.props.theme];
    colors = theme;
    if ('colors' in this.props) colors = {
      default: 'default' in this.props.colors ? this.props.colors.default : colors.default,
      string: 'string' in this.props.colors ? this.props.colors.string : colors.string,
      number: 'number' in this.props.colors ? this.props.colors.number : colors.number,
      colon: 'colon' in this.props.colors ? this.props.colors.colon : colors.colon,
      keys: 'keys' in this.props.colors ? this.props.colors.keys : colors.keys,
      keys_whiteSpace: 'keys_whiteSpace' in this.props.colors ? this.props.colors.keys_whiteSpace : colors.keys_whiteSpace,
      primitive: 'primitive' in this.props.colors ? this.props.colors.primitive : colors.primitive,
      error: 'error' in this.props.colors ? this.props.colors.error : colors.error,
      background: 'background' in this.props.colors ? this.props.colors.background : colors.background,
      background_warning: 'background_warning' in this.props.colors ? this.props.colors.background_warning : colors.background_warning
    };
    this.colors = colors;
    if ('style' in this.props) style = {
      outerBox: 'outerBox' in this.props.style ? this.props.style.outerBox : {},
      container: 'container' in this.props.style ? this.props.style.container : {},
      warningBox: 'warningBox' in this.props.style ? this.props.style.warningBox : {},
      errorMessage: 'errorMessage' in this.props.style ? this.props.style.errorMessage : {},
      body: 'body' in this.props.style ? this.props.style.body : {},
      labelColumn: 'labelColumn' in this.props.style ? this.props.style.labelColumn : {},
      labels: 'labels' in this.props.style ? this.props.style.labels : {},
      contentBox: 'contentBox' in this.props.style ? this.props.style.contentBox : {}
    };else style = {
      outerBox: {},
      container: {},
      warningBox: {},
      errorMessage: {},
      body: {},
      labelColumn: {},
      labels: {},
      contentBox: {}
    };
    this.style = style;
    this.confirmGood = 'confirmGood' in this.props ? this.props.confirmGood : true;
    const totalHeight = this.props.height || '610px',
          totalWidth = this.props.width || '479px';
    this.totalHeight = totalHeight;
    this.totalWidth = totalWidth;

    if (!('onKeyPressUpdate' in this.props) || this.props.onKeyPressUpdate) {
      if (!this.timer) this.timer = setInterval(this.scheduledUpdate, 100);
    } else if (this.timer) {
      clearInterval(this.timer);
      this.timer = false;
    }

    this.updateTime = false;
    this.waitAfterKeyPress = 'waitAfterKeyPress' in this.props ? this.props.waitAfterKeyPress : 1000;
    this.resetConfiguration = 'reset' in this.props ? this.props.reset : false;
  }

  render() {
    const id = this.props.id,
          markupText = this.state.markupText,
          error = this.state.error,
          colors = this.colors,
          style = this.style,
          confirmGood = this.confirmGood,
          totalHeight = this.totalHeight,
          totalWidth = this.totalWidth,
          hasError = error ? 'token' in error : false;
    this.renderCount++;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      name: "outer-box",
      id: id && id + '-outer-box',
      style: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        display: 'block',
        overflow: 'none',
        height: totalHeight,
        width: totalWidth,
        margin: 0,
        boxSizing: 'border-box',
        position: 'relative'
      }, style.outerBox)
    }, confirmGood ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        opacity: hasError ? 0 : 1,
        height: '30px',
        width: '30px',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(-25%,25%)',
        pointerEvents: 'none',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      height: "30px",
      width: "30px",
      viewBox: "0 0 100 100"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "green",
      opacity: "0.85",
      d: "M39.363,79L16,55.49l11.347-11.419L39.694,56.49L72.983,23L84,34.085L39.363,79z"
    }))) : void 0, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      name: "container",
      id: id && id + '-container',
      style: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        display: 'block',
        height: totalHeight,
        width: totalWidth,
        margin: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        fontFamily: 'Roboto, sans-serif'
      }, style.container),
      onClick: this.onClick
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      name: "warning-box",
      id: id && id + '-warning-box',
      style: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        display: 'block',
        overflow: 'hidden',
        height: hasError ? '60px' : '0px',
        width: '100%',
        margin: 0,
        backgroundColor: colors.background_warning,
        transitionDuration: '0.2s',
        transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'
      }, style.warningBox),
      onClick: this.onClick
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        height: '60px',
        width: '60px',
        margin: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        verticalAlign: 'top',
        pointerEvents: 'none'
      },
      onClick: this.onClick
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        position: 'relative',
        top: 0,
        left: 0,
        height: '60px',
        width: '60px',
        margin: 0,
        pointerEvents: 'none'
      },
      onClick: this.onClick
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      },
      onClick: this.onClick
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      height: "25px",
      width: "25px",
      viewBox: "0 0 100 100"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "red",
      d: "M73.9,5.75c0.467-0.467,1.067-0.7,1.8-0.7c0.7,0,1.283,0.233,1.75,0.7l16.8,16.8  c0.467,0.5,0.7,1.084,0.7,1.75c0,0.733-0.233,1.334-0.7,1.801L70.35,50l23.9,23.95c0.5,0.467,0.75,1.066,0.75,1.8  c0,0.667-0.25,1.25-0.75,1.75l-16.8,16.75c-0.534,0.467-1.117,0.7-1.75,0.7s-1.233-0.233-1.8-0.7L50,70.351L26.1,94.25  c-0.567,0.467-1.167,0.7-1.8,0.7c-0.667,0-1.283-0.233-1.85-0.7L5.75,77.5C5.25,77,5,76.417,5,75.75c0-0.733,0.25-1.333,0.75-1.8  L29.65,50L5.75,26.101C5.25,25.667,5,25.066,5,24.3c0-0.666,0.25-1.25,0.75-1.75l16.8-16.8c0.467-0.467,1.05-0.7,1.75-0.7  c0.733,0,1.333,0.233,1.8,0.7L50,29.65L73.9,5.75z"
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        height: '60px',
        width: 'calc(100% - 60px)',
        margin: 0,
        overflow: 'hidden',
        verticalAlign: 'top',
        position: 'absolute',
        pointerEvents: 'none'
      },
      onClick: this.onClick
    }, this.renderErrorMessage())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      name: "body",
      id: id && id + '-body',
      style: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        display: 'flex',
        overflow: 'none',
        height: hasError ? 'calc(100% - 60px)' : '100%',
        width: '',
        margin: 0,
        resize: 'none',
        fontFamily: 'Roboto Mono, Monaco, monospace',
        fontSize: '11px',
        backgroundColor: colors.background,
        transitionDuration: '0.2s',
        transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)'
      }, style.body),
      onClick: this.onClick
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      name: "labels",
      id: id && id + '-labels',
      ref: ref => this.refLabels = ref,
      style: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        display: 'inline-block',
        boxSizing: 'border-box',
        verticalAlign: 'top',
        height: '100%',
        width: '44px',
        margin: 0,
        padding: '5px 0px 5px 10px',
        overflow: 'hidden',
        color: '#D4D4D4'
      }, style.labelColumn),
      onClick: this.onClick
    }, this.renderLabels()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      id: id,
      ref: ref => this.refContent = ref,
      contentEditable: true,
      style: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        display: 'inline-block',
        boxSizing: 'border-box',
        verticalAlign: 'top',
        height: '100%',
        width: '',
        flex: 1,
        margin: 0,
        padding: '5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        wordWrap: 'break-word',
        whiteSpace: 'pre-line',
        color: '#D4D4D4',
        outline: 'none'
      }, style.contentBox),
      dangerouslySetInnerHTML: this.createMarkup(markupText),
      onKeyPress: this.onKeyPress,
      onKeyDown: this.onKeyDown,
      onClick: this.onClick,
      onBlur: this.onBlur,
      onScroll: this.onScroll,
      onPaste: this.onPaste,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false
    }))));
  }

  renderErrorMessage() {
    const locale = this.props.locale || _locale_en__WEBPACK_IMPORTED_MODULE_6__["default"],
          error = this.state.error,
          style = this.style;
    if (!error) return void 0;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        color: 'red',
        fontSize: '12px',
        position: 'absolute',
        width: 'calc(100% - 60px)',
        height: '60px',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        paddingRight: '10px',
        overflowWrap: 'break-word',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }, style.errorMessage)
    }, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.format, error));
  }

  renderLabels() {
    const colors = this.colors,
          style = this.style,
          errorLine = this.state.error ? this.state.error.line : -1,
          lines = this.state.lines ? this.state.lines : 1;
    let labels = new Array(lines);

    for (var i = 0; i < lines - 1; i++) labels[i] = i + 1;

    return labels.map(number => {
      const color = number !== errorLine ? colors.default : 'red';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: number,
        style: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style.labels, {
          color: color
        })
      }, number);
    });
  }

  createMarkup(markupText) {
    if (markupText === undefined) return {
      __html: ''
    };
    return {
      __html: '' + markupText
    };
  }

  newSpan(i, token, depth) {
    let colors = this.colors,
        type = token.type,
        string = token.string;
    let color = '';

    switch (type) {
      case 'string':
      case 'number':
      case 'primitive':
      case 'error':
        color = colors[token.type];
        break;

      case 'key':
        if (string === ' ') color = colors.keys_whiteSpace;else color = colors.keys;
        break;

      case 'symbol':
        if (string === ':') color = colors.colon;else color = colors.default;
        break;

      default:
        color = colors.default;
        break;
    }

    if (string.length !== string.replace(/</g, '').replace(/>/g, '').length) string = '<xmp style=display:inline;>' + string + '</xmp>';
    return '<span' + ' type="' + type + '"' + ' value="' + string + '"' + ' depth="' + depth + '"' + ' style="color:' + color + '"' + '>' + string + '</span>';
  }

  getCursorPosition(countBR) {
    /**
     * Need to deprecate countBR
     * It is used to differenciate between good markup render, and aux render when error found
     * Adjustments based on coundBR account for usage of <br> instead of <span> for linebreaks to determine acurate cursor position
     * Find a way to consolidate render styles
     */
    const isChildOf = node => {
      while (node !== null) {
        if (node === this.refContent) return true;
        node = node.parentNode;
      }

      return false;
    };

    let selection = window.getSelection(),
        charCount = -1,
        linebreakCount = 0,
        node;

    if (selection.focusNode && isChildOf(selection.focusNode)) {
      node = selection.focusNode;
      charCount = selection.focusOffset;

      while (node) {
        if (node === this.refContent) break;

        if (node.previousSibling) {
          node = node.previousSibling;
          if (countBR) if (node.nodeName === 'BR') linebreakCount++;
          charCount += node.textContent.length;
        } else {
          node = node.parentNode;
          if (node === null) break;
        }
      }
    }

    return charCount + linebreakCount;
  }

  setCursorPosition(nextPosition) {
    if ([false, null, undefined].indexOf(nextPosition) > -1) return;

    const createRange = (node, chars, range) => {
      if (!range) {
        range = document.createRange();
        range.selectNode(node);
        range.setStart(node, 0);
      }

      if (chars.count === 0) {
        range.setEnd(node, chars.count);
      } else if (node && chars.count > 0) {
        if (node.nodeType === Node.TEXT_NODE) {
          if (node.textContent.length < chars.count) chars.count -= node.textContent.length;else {
            range.setEnd(node, chars.count);
            chars.count = 0;
          }
        } else for (var lp = 0; lp < node.childNodes.length; lp++) {
          range = createRange(node.childNodes[lp], chars, range);
          if (chars.count === 0) break;
        }
      }

      return range;
    };

    const setPosition = chars => {
      if (chars < 0) return;
      let selection = window.getSelection(),
          range = createRange(this.refContent, {
        count: chars
      });
      if (!range) return;
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    };

    if (nextPosition > 0) setPosition(nextPosition);else this.refContent.focus();
  }

  update(cursorOffset = 0, updateCursorPosition = true) {
    const container = this.refContent,
          data = this.tokenize(container);
    if ('onChange' in this.props) this.props.onChange({
      plainText: data.indented,
      markupText: data.markup,
      json: data.json,
      jsObject: data.jsObject,
      lines: data.lines,
      error: data.error
    });
    let cursorPosition = this.getCursorPosition(data.error) + cursorOffset;
    this.setState({
      plainText: data.indented,
      markupText: data.markup,
      json: data.json,
      jsObject: data.jsObject,
      lines: data.lines,
      error: data.error
    });
    this.updateTime = false;
    if (updateCursorPosition) this.setCursorPosition(cursorPosition);
  }

  scheduledUpdate() {
    if ('onKeyPressUpdate' in this.props) if (this.props.onKeyPressUpdate === false) return;
    const {
      updateTime
    } = this;
    if (updateTime === false) return;
    if (updateTime > new Date().getTime()) return;
    this.update();
  }

  setUpdateTime() {
    if ('onKeyPressUpdate' in this.props) if (this.props.onKeyPressUpdate === false) return;
    this.updateTime = new Date().getTime() + this.waitAfterKeyPress;
  }

  stopEvent(event) {
    if (!event) return;
    event.preventDefault();
    event.stopPropagation();
  }

  onKeyPress(event) {
    const ctrlOrMetaIsPressed = event.ctrlKey || event.metaKey;
    if (this.props.viewOnly && !ctrlOrMetaIsPressed) this.stopEvent(event);
    if (!ctrlOrMetaIsPressed) this.setUpdateTime();
  }

  onKeyDown(event) {
    const viewOnly = !!this.props.viewOnly;
    const ctrlOrMetaIsPressed = event.ctrlKey || event.metaKey;

    switch (event.key) {
      case 'Tab':
        this.stopEvent(event);
        if (viewOnly) break;
        document.execCommand("insertText", false, "  ");
        this.setUpdateTime();
        break;

      case 'Backspace':
      case 'Delete':
        if (viewOnly) this.stopEvent(event);
        this.setUpdateTime();
        break;

      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        this.setUpdateTime();
        break;

      case 'a':
      case 'c':
        if (viewOnly && !ctrlOrMetaIsPressed) this.stopEvent(event);
        break;

      default:
        if (viewOnly) this.stopEvent(event);
        break;
    }
  }

  onPaste(event) {
    if (this.props.viewOnly) {
      this.stopEvent(event);
    } else {
      event.preventDefault();
      var text = event.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false, text);
    }

    this.update();
  }

  onClick() {
    if ('viewOnly' in this.props) if (this.props.viewOnly) return;
  }

  onBlur() {
    if ('viewOnly' in this.props) if (this.props.viewOnly) return;
    this.update(0, false);
  }

  onScroll(event) {
    this.refLabels.scrollTop = event.target.scrollTop;
  }

  componentDidUpdate() {
    this.updateInternalProps();
    this.showPlaceholder();
  }

  componentDidMount() {
    this.showPlaceholder();
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  showPlaceholder() {
    const placeholderDoesNotExist = !('placeholder' in this.props);
    if (placeholderDoesNotExist) return;
    const {
      placeholder
    } = this.props;
    const placeholderHasEmptyValues = [undefined, null].indexOf(placeholder) > -1;
    if (placeholderHasEmptyValues) return;
    const {
      prevPlaceholder,
      jsObject
    } = this.state;
    const {
      resetConfiguration
    } = this;
    const placeholderDataType = Object(_mitsuketa__WEBPACK_IMPORTED_MODULE_3__["getType"])(placeholder);
    const unexpectedDataType = ['object', 'array'].indexOf(placeholderDataType) === -1;
    if (unexpectedDataType) _err__WEBPACK_IMPORTED_MODULE_4__["default"].throwError('showPlaceholder', 'placeholder', 'either an object or an array');
    const samePlaceholderValues = Object(_mitsuketa__WEBPACK_IMPORTED_MODULE_3__["identical"])(placeholder, prevPlaceholder); // Component will always re-render when new placeholder value is any different from previous placeholder value. 

    let componentShouldUpdate = !samePlaceholderValues;

    if (!componentShouldUpdate) {
      if (resetConfiguration) {
        /**
         * If 'reset' property is set true or is truthy,
         * any difference between placeholder and current value
         * should trigger component re-render
         */
        if (jsObject !== undefined) componentShouldUpdate = !Object(_mitsuketa__WEBPACK_IMPORTED_MODULE_3__["identical"])(placeholder, jsObject);
      }
    }

    if (!componentShouldUpdate) return;
    const data = this.tokenize(placeholder);
    this.setState({
      prevPlaceholder: placeholder,
      plainText: data.indentation,
      markupText: data.markup,
      lines: data.lines,
      error: data.error
    });
  }

  tokenize(something) {
    if (typeof something !== 'object') return console.error('tokenize() expects object type properties only. Got \'' + typeof something + '\' type instead.');
    const locale = this.props.locale || _locale_en__WEBPACK_IMPORTED_MODULE_6__["default"];
    const newSpan = this.newSpan;
    /**
     *     DOM NODE || ONBLUR OR UPDATE
     */

    if ('nodeType' in something) {
      const containerNode = something.cloneNode(true),
            hasChildren = containerNode.hasChildNodes();
      if (!hasChildren) return '';
      const children = containerNode.childNodes;
      let buffer = {
        tokens_unknown: [],
        tokens_proto: [],
        tokens_split: [],
        tokens_fallback: [],
        tokens_normalize: [],
        tokens_merge: [],
        tokens_plainText: '',
        indented: '',
        json: '',
        jsObject: undefined,
        markup: ''
      };

      for (var i = 0; i < children.length; i++) {
        let child = children[i];
        let info = {};

        switch (child.nodeName) {
          case 'SPAN':
            info = {
              string: child.textContent,
              type: child.attributes.type.textContent
            };
            buffer.tokens_unknown.push(info);
            break;

          case 'DIV':
            buffer.tokens_unknown.push({
              string: child.textContent,
              type: 'unknown'
            });
            break;

          case 'BR':
            if (child.textContent === '') buffer.tokens_unknown.push({
              string: '\n',
              type: 'unknown'
            });
            break;

          case '#text':
            buffer.tokens_unknown.push({
              string: child.wholeText,
              type: 'unknown'
            });
            break;

          case 'FONT':
            buffer.tokens_unknown.push({
              string: child.textContent,
              type: 'unknown'
            });
            break;

          default:
            console.error('Unrecognized node:', {
              child
            });
            break;
        }
      }

      function quarkize(text, prefix = '') {
        let buffer = {
          active: false,
          string: '',
          number: '',
          symbol: '',
          space: '',
          delimiter: '',
          quarks: []
        };

        function pushAndStore(char, type) {
          switch (type) {
            case 'symbol':
            case 'delimiter':
              if (buffer.active) buffer.quarks.push({
                string: buffer[buffer.active],
                type: prefix + '-' + buffer.active
              });
              buffer[buffer.active] = '';
              buffer.active = type;
              buffer[buffer.active] = char;
              break;

            default:
              if (type !== buffer.active || [buffer.string, char].indexOf('\n') > -1) {
                if (buffer.active) buffer.quarks.push({
                  string: buffer[buffer.active],
                  type: prefix + '-' + buffer.active
                });
                buffer[buffer.active] = '';
                buffer.active = type;
                buffer[buffer.active] = char;
              } else buffer[type] += char;

              break;
          }
        }

        function finalPush() {
          if (buffer.active) {
            buffer.quarks.push({
              string: buffer[buffer.active],
              type: prefix + '-' + buffer.active
            });
            buffer[buffer.active] = '';
            buffer.active = false;
          }
        }

        for (var i = 0; i < text.length; i++) {
          const char = text.charAt(i);

          switch (char) {
            case '"':
            case "'":
              pushAndStore(char, 'delimiter');
              break;

            case ' ':
            case '\u00A0':
              pushAndStore(char, 'space');
              break;

            case '{':
            case '}':
            case '[':
            case ']':
            case ':':
            case ',':
              pushAndStore(char, 'symbol');
              break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              if (buffer.active === 'string') pushAndStore(char, 'string');else pushAndStore(char, 'number');
              break;

            case '-':
              if (i < text.length - 1) if ('0123456789'.indexOf(text.charAt(i + 1)) > -1) {
                pushAndStore(char, 'number');
                break;
              }

            case '.':
              if (i < text.length - 1 && i > 0) if ('0123456789'.indexOf(text.charAt(i + 1)) > -1 && '0123456789'.indexOf(text.charAt(i - 1)) > -1) {
                pushAndStore(char, 'number');
                break;
              }

            default:
              pushAndStore(char, 'string');
              break;
          }
        }

        finalPush();
        return buffer.quarks;
      }

      for (var i = 0; i < buffer.tokens_unknown.length; i++) {
        let token = buffer.tokens_unknown[i];
        buffer.tokens_proto = buffer.tokens_proto.concat(quarkize(token.string, 'proto'));
      }

      function validToken(string, type) {
        const quotes = '\'"';
        let firstChar = '',
            lastChar = '',
            quoteType = false;

        switch (type) {
          case 'primitive':
            if (['true', 'false', 'null', 'undefined'].indexOf(string) === -1) return false;
            break;

          case 'string':
            if (string.length < 2) return false;
            firstChar = string.charAt(0), lastChar = string.charAt(string.length - 1), quoteType = quotes.indexOf(firstChar);
            if (quoteType === -1) return false;
            if (firstChar !== lastChar) return false;

            for (var i = 0; i < string.length; i++) {
              if (i > 0 && i < string.length - 1) if (string.charAt(i) === quotes[quoteType]) if (string.charAt(i - 1) !== '\\') return false;
            }

            break;

          case 'key':
            if (string.length === 0) return false;
            firstChar = string.charAt(0), lastChar = string.charAt(string.length - 1), quoteType = quotes.indexOf(firstChar);

            if (quoteType > -1) {
              if (string.length === 1) return false;
              if (firstChar !== lastChar) return false;

              for (var i = 0; i < string.length; i++) {
                if (i > 0 && i < string.length - 1) if (string.charAt(i) === quotes[quoteType]) if (string.charAt(i - 1) !== '\\') return false;
              }
            } else {
              const nonAlphanumeric = '\'"`.,:;{}[]&<>=~*%\\|/-+!?@^ \xa0';

              for (var i = 0; i < nonAlphanumeric.length; i++) {
                const nonAlpha = nonAlphanumeric.charAt(i);
                if (string.indexOf(nonAlpha) > -1) return false;
              }
            }

            break;

          case 'number':
            for (var i = 0; i < string.length; i++) {
              if ('0123456789'.indexOf(string.charAt(i)) === -1) if (i === 0) {
                if ('-' !== string.charAt(0)) return false;
              } else if ('.' !== string.charAt(i)) return false;
            }

            break;

          case 'symbol':
            if (string.length > 1) return false;
            if ('{[:]},'.indexOf(string) === -1) return false;
            break;

          case 'colon':
            if (string.length > 1) return false;
            if (':' !== string) return false;
            break;

          default:
            return true;
            break;
        }

        return true;
      }

      for (var i = 0; i < buffer.tokens_proto.length; i++) {
        let token = buffer.tokens_proto[i];

        if (token.type.indexOf('proto') === -1) {
          if (!validToken(token.string, token.type)) {
            buffer.tokens_split = buffer.tokens_split.concat(quarkize(token.string, 'split'));
          } else buffer.tokens_split.push(token);
        } else buffer.tokens_split.push(token);
      }

      for (var i = 0; i < buffer.tokens_split.length; i++) {
        let token = buffer.tokens_split[i];
        let type = token.type,
            string = token.string,
            length = string.length,
            fallback = [];

        if (type.indexOf('-') > -1) {
          type = type.slice(type.indexOf('-') + 1);
          if (type !== 'string') fallback.push('string');
          fallback.push('key');
          fallback.push('error');
        }

        let tokul = {
          string: string,
          length: length,
          type: type,
          fallback: fallback
        };
        buffer.tokens_fallback.push(tokul);
      }

      function tokenFollowed() {
        const last = buffer.tokens_normalize.length - 1;
        if (last < 1) return false;

        for (var i = last; i >= 0; i--) {
          const previousToken = buffer.tokens_normalize[i];

          switch (previousToken.type) {
            case 'space':
            case 'linebreak':
              break;

            default:
              return previousToken;
              break;
          }
        }

        return false;
      }

      let buffer2 = {
        brackets: [],
        stringOpen: false,
        isValue: false
      };

      for (var i = 0; i < buffer.tokens_fallback.length; i++) {
        let token = buffer.tokens_fallback[i];
        const type = token.type,
              string = token.string;
        let normalToken = {
          type: type,
          string: string
        };

        switch (type) {
          case 'symbol':
          case 'colon':
            if (buffer2.stringOpen) {
              if (buffer2.isValue) normalToken.type = 'string';else normalToken.type = 'key';
              break;
            }

            switch (string) {
              case '[':
              case '{':
                buffer2.brackets.push(string);
                buffer2.isValue = buffer2.brackets[buffer2.brackets.length - 1] === '[';
                break;

              case ']':
              case '}':
                buffer2.brackets.pop();
                buffer2.isValue = buffer2.brackets[buffer2.brackets.length - 1] === '[';
                break;

              case ',':
                if (tokenFollowed().type === 'colon') break;
                buffer2.isValue = buffer2.brackets[buffer2.brackets.length - 1] === '[';
                break;

              case ':':
                normalToken.type = 'colon';
                buffer2.isValue = true;
                break;
            }

            break;

          case 'delimiter':
            if (buffer2.isValue) normalToken.type = 'string';else normalToken.type = 'key';

            if (!buffer2.stringOpen) {
              buffer2.stringOpen = string;
              break;
            }

            if (i > 0) {
              const previousToken = buffer.tokens_fallback[i - 1],
                    _string = previousToken.string,
                    _type = previousToken.type,
                    _char = _string.charAt(_string.length - 1);

              if (_type === 'string' && _char === '\\') break;
            }

            if (buffer2.stringOpen === string) {
              buffer2.stringOpen = false;
              break;
            }

            break;

          case 'primitive':
          case 'string':
            if (['false', 'true', 'null', 'undefined'].indexOf(string) > -1) {
              const lastIndex = buffer.tokens_normalize.length - 1;

              if (lastIndex >= 0) {
                if (buffer.tokens_normalize[lastIndex].type !== 'string') {
                  normalToken.type = 'primitive';
                  break;
                }

                normalToken.type = 'string';
                break;
              }

              normalToken.type = 'primitive';
              break;
            }

            if (string === '\n') if (!buffer2.stringOpen) {
              normalToken.type = 'linebreak';
              break;
            }
            if (buffer2.isValue) normalToken.type = 'string';else normalToken.type = 'key';
            break;

          case 'space':
            if (buffer2.stringOpen) if (buffer2.isValue) normalToken.type = 'string';else normalToken.type = 'key';
            break;

          case 'number':
            if (buffer2.stringOpen) if (buffer2.isValue) normalToken.type = 'string';else normalToken.type = 'key';
            break;

          default:
            break;
        }

        buffer.tokens_normalize.push(normalToken);
      }

      for (var i = 0; i < buffer.tokens_normalize.length; i++) {
        const token = buffer.tokens_normalize[i];
        let mergedToken = {
          string: token.string,
          type: token.type,
          tokens: [i]
        };
        if (['symbol', 'colon'].indexOf(token.type) === -1) if (i + 1 < buffer.tokens_normalize.length) {
          let count = 0;

          for (var u = i + 1; u < buffer.tokens_normalize.length; u++) {
            const nextToken = buffer.tokens_normalize[u];
            if (token.type !== nextToken.type) break;
            mergedToken.string += nextToken.string;
            mergedToken.tokens.push(u);
            count++;
          }

          i += count;
        }
        buffer.tokens_merge.push(mergedToken);
      }

      const quotes = '\'"',
            alphanumeric = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789' + '_$';
      var error = false,
          line = buffer.tokens_merge.length > 0 ? 1 : 0;
      buffer2 = {
        brackets: [],
        stringOpen: false,
        isValue: false
      };

      function setError(tokenID, reason, offset = 0) {
        error = {
          token: tokenID,
          line: line,
          reason: reason
        };
        buffer.tokens_merge[tokenID + offset].type = 'error';
      }

      function followedBySymbol(tokenID, options) {
        if (tokenID === undefined) console.error('tokenID argument must be an integer.');
        if (options === undefined) console.error('options argument must be an array.');
        if (tokenID === buffer.tokens_merge.length - 1) return false;

        for (var i = tokenID + 1; i < buffer.tokens_merge.length; i++) {
          const nextToken = buffer.tokens_merge[i];

          switch (nextToken.type) {
            case 'space':
            case 'linebreak':
              break;

            case 'symbol':
            case 'colon':
              if (options.indexOf(nextToken.string) > -1) return i;else return false;
              break;

            default:
              return false;
              break;
          }
        }

        return false;
      }

      function followsSymbol(tokenID, options) {
        if (tokenID === undefined) console.error('tokenID argument must be an integer.');
        if (options === undefined) console.error('options argument must be an array.');
        if (tokenID === 0) return false;

        for (var i = tokenID - 1; i >= 0; i--) {
          const previousToken = buffer.tokens_merge[i];

          switch (previousToken.type) {
            case 'space':
            case 'linebreak':
              break;

            case 'symbol':
            case 'colon':
              if (options.indexOf(previousToken.string) > -1) return true;
              return false;
              break;

            default:
              return false;
              break;
          }
        }

        return false;
      }

      function typeFollowed(tokenID) {
        if (tokenID === undefined) console.error('tokenID argument must be an integer.');
        if (tokenID === 0) return false;

        for (var i = tokenID - 1; i >= 0; i--) {
          const previousToken = buffer.tokens_merge[i];

          switch (previousToken.type) {
            case 'space':
            case 'linebreak':
              break;

            default:
              return previousToken.type;
              break;
          }
        }

        return false;
      }

      let bracketList = [];

      for (var i = 0; i < buffer.tokens_merge.length; i++) {
        if (error) break;
        let token = buffer.tokens_merge[i],
            string = token.string,
            type = token.type,
            found = false;

        switch (type) {
          case 'space':
            break;

          case 'linebreak':
            line++;
            break;

          case 'symbol':
            switch (string) {
              case '{':
              case '[':
                found = followsSymbol(i, ['}', ']']);

                if (found) {
                  setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.prohibited, {
                    firstToken: buffer.tokens_merge[found].string,
                    secondToken: string
                  }));
                  break;
                }

                if (string === '[' && i > 0) if (!followsSymbol(i, [':', '[', ','])) {
                  setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.permitted, {
                    firstToken: "[",
                    secondToken: [":", "[", ","]
                  }));
                  break;
                }
                if (string === '{') if (followsSymbol(i, ['{'])) {
                  setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.double, {
                    token: "{"
                  }));
                  break;
                }
                buffer2.brackets.push(string);
                buffer2.isValue = buffer2.brackets[buffer2.brackets.length - 1] === '[';
                bracketList.push({
                  i: i,
                  line: line,
                  string: string
                });
                break;

              case '}':
              case ']':
                if (string === '}') if (buffer2.brackets[buffer2.brackets.length - 1] !== '{') {
                  setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.brace.curly.missingOpen));
                  break;
                }
                if (string === '}') if (followsSymbol(i, [','])) {
                  setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.prohibited, {
                    firstToken: ",",
                    secondToken: "}"
                  }));
                  break;
                }
                if (string === ']') if (buffer2.brackets[buffer2.brackets.length - 1] !== '[') {
                  setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.brace.square.missingOpen));
                  break;
                }
                if (string === ']') if (followsSymbol(i, [':'])) {
                  setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.prohibited, {
                    firstToken: ":",
                    secondToken: "]"
                  }));
                  break;
                }
                buffer2.brackets.pop();
                buffer2.isValue = buffer2.brackets[buffer2.brackets.length - 1] === '[';
                bracketList.push({
                  i: i,
                  line: line,
                  string: string
                });
                break;

              case ',':
                found = followsSymbol(i, ['{']);

                if (found) {
                  if (followedBySymbol(i, ['}'])) {
                    setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.brace.curly.cannotWrap, {
                      token: ","
                    }));
                    break;
                  }

                  setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.prohibited, {
                    firstToken: "{",
                    secondToken: ","
                  }));
                  break;
                }

                if (followedBySymbol(i, ['}', ',', ']'])) {
                  setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.noTrailingOrLeadingComma));
                  break;
                }

                found = typeFollowed(i);

                switch (found) {
                  case 'key':
                  case 'colon':
                    setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.termSequence.prohibited, {
                      firstTerm: found === 'key' ? locale.types.key : locale.symbols.colon,
                      secondTerm: locale.symbols.comma
                    }));
                    break;

                  case 'symbol':
                    if (followsSymbol(i, ['{'])) {
                      setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.prohibited, {
                        firstToken: "{",
                        secondToken: ","
                      }));
                      break;
                    }

                    break;

                  default:
                    break;
                }

                buffer2.isValue = buffer2.brackets[buffer2.brackets.length - 1] === '[';
                break;

              default:
                break;
            }

            buffer.json += string;
            break;

          case 'colon':
            found = followsSymbol(i, ['[']);

            if (found && followedBySymbol(i, [']'])) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.brace.square.cannotWrap, {
                token: ":"
              }));
              break;
            }

            if (found) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.prohibited, {
                firstToken: "[",
                secondToken: ":"
              }));
              break;
            }

            if (typeFollowed(i) !== 'key') {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.termSequence.permitted, {
                firstTerm: locale.symbols.colon,
                secondTerm: locale.types.key
              }));
              break;
            }

            if (followedBySymbol(i, ['}', ']'])) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.termSequence.permitted, {
                firstTerm: locale.symbols.colon,
                secondTerm: locale.types.value
              }));
              break;
            }

            buffer2.isValue = true;
            buffer.json += string;
            break;

          case 'key':
          case 'string':
            let firstChar = string.charAt(0),
                lastChar = string.charAt(string.length - 1),
                quote_primary = quotes.indexOf(firstChar);
            if (quotes.indexOf(firstChar) === -1) if (quotes.indexOf(lastChar) !== -1) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.string.missingOpen, {
                quote: firstChar
              }));
              break;
            }
            if (quotes.indexOf(lastChar) === -1) if (quotes.indexOf(firstChar) !== -1) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.string.missingClose, {
                quote: firstChar
              }));
              break;
            }
            if (quotes.indexOf(firstChar) > -1) if (firstChar !== lastChar) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.string.missingClose, {
                quote: firstChar
              }));
              break;
            }
            if ('string' === type) if (quotes.indexOf(firstChar) === -1 && quotes.indexOf(lastChar) === -1) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.string.mustBeWrappedByQuotes));
              break;
            }
            if ('key' === type) if (followedBySymbol(i, ['}', ']'])) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.termSequence.permitted, {
                firstTerm: locale.types.key,
                secondTerm: locale.symbols.colon
              }));
            }
            if (quotes.indexOf(firstChar) === -1 && quotes.indexOf(lastChar) === -1) for (var h = 0; h < string.length; h++) {
              if (error) break;
              const c = string.charAt(h);

              if (alphanumeric.indexOf(c) === -1) {
                setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.string.nonAlphanumeric, {
                  token: c
                }));
                break;
              }
            }
            if (firstChar === "'") string = '"' + string.slice(1, -1) + '"';else if (firstChar !== '"') string = '"' + string + '"';
            if ('key' === type) if ('key' === typeFollowed(i)) {
              if (i > 0) if (!isNaN(buffer.tokens_merge[i - 1])) {
                buffer.tokens_merge[i - 1] += buffer.tokens_merge[i];
                setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.key.numberAndLetterMissingQuotes));
                break;
              }
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.key.spaceMissingQuotes));
              break;
            }
            if ('key' === type) if (!followsSymbol(i, ['{', ','])) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.permitted, {
                firstToken: type,
                secondToken: ["{", ","]
              }));
              break;
            }
            if ('string' === type) if (!followsSymbol(i, ['[', ':', ','])) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.permitted, {
                firstToken: type,
                secondToken: ["[", ":", ","]
              }));
              break;
            }
            if ('key' === type) if (buffer2.isValue) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.string.unexpectedKey));
              break;
            }
            if ('string' === type) if (!buffer2.isValue) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.key.unexpectedString));
              break;
            }
            buffer.json += string;
            break;

          case 'number':
          case 'primitive':
            if (followsSymbol(i, ['{'])) {
              buffer.tokens_merge[i].type = 'key';
              type = buffer.tokens_merge[i].type;
              string = '"' + string + '"';
            } else if (typeFollowed(i) === 'key') {
              buffer.tokens_merge[i].type = 'key';
              type = buffer.tokens_merge[i].type;
            } else if (!followsSymbol(i, ['[', ':', ','])) {
              setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.tokenSequence.permitted, {
                firstToken: type,
                secondToken: ["[", ":", ","]
              }));
              break;
            }

            if (type !== 'key') if (!buffer2.isValue) {
              buffer.tokens_merge[i].type = 'key';
              type = buffer.tokens_merge[i].type;
              string = '"' + string + '"';
            }
            if (type === 'primitive') if (string === 'undefined') setError(i, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.useInstead, {
              badToken: "undefined",
              goodToken: "null"
            }));
            buffer.json += string;
            break;
        }
      }

      let noEscapedSingleQuote = '';

      for (var i = 0; i < buffer.json.length; i++) {
        let current = buffer.json.charAt(i),
            next = '';

        if (i + 1 < buffer.json.length) {
          next = buffer.json.charAt(i + 1);

          if (current === '\\' && next === "'") {
            noEscapedSingleQuote += next;
            i++;
            continue;
          }
        }

        noEscapedSingleQuote += current;
      }

      buffer.json = noEscapedSingleQuote;

      if (!error) {
        const maxIterations = Math.ceil(bracketList.length / 2);
        let round = 0,
            delta = false;

        function removePair(index) {
          bracketList.splice(index + 1, 1);
          bracketList.splice(index, 1);
          if (!delta) delta = true;
        }

        while (bracketList.length > 0) {
          delta = false;

          for (var tokenCount = 0; tokenCount < bracketList.length - 1; tokenCount++) {
            const pair = bracketList[tokenCount].string + bracketList[tokenCount + 1].string;
            if (['[]', '{}'].indexOf(pair) > -1) removePair(tokenCount);
          }

          round++;
          if (!delta) break;
          if (round >= maxIterations) break;
        }

        if (bracketList.length > 0) {
          const _tokenString = bracketList[0].string,
                _tokenPosition = bracketList[0].i,
                _closingBracketType = _tokenString === '[' ? ']' : '}';

          line = bracketList[0].line;
          setError(_tokenPosition, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.brace[_closingBracketType === ']' ? 'square' : 'curly'].missingClose));
        }
      }

      if (!error) if ([undefined, ''].indexOf(buffer.json) === -1) try {
        buffer.jsObject = JSON.parse(buffer.json);
      } catch (err) {
        const errorMessage = err.message,
              subsMark = errorMessage.indexOf('position');
        if (subsMark === -1) throw new Error('Error parsing failed');
        const errPositionStr = errorMessage.substring(subsMark + 9, errorMessage.length),
              errPosition = parseInt(errPositionStr);
        let charTotal = 0,
            tokenIndex = 0,
            token = false,
            _line = 1,
            exitWhile = false;

        while (charTotal < errPosition && !exitWhile) {
          token = buffer.tokens_merge[tokenIndex];
          if ('linebreak' === token.type) _line++;
          if (['space', 'linebreak'].indexOf(token.type) === -1) charTotal += token.string.length;
          if (charTotal >= errPosition) break;
          tokenIndex++;
          if (!buffer.tokens_merge[tokenIndex + 1]) exitWhile = true;
        }

        line = _line;
        let backslashCount = 0;

        for (let i = 0; i < token.string.length; i++) {
          const char = token.string.charAt(i);
          if (char === '\\') backslashCount = backslashCount > 0 ? backslashCount + 1 : 1;else {
            if (backslashCount % 2 !== 0 || backslashCount === 0) if ('\'"bfnrt'.indexOf(char) === -1) {
              setError(tokenIndex, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.unexpected, {
                token: '\\'
              }));
            }
            backslashCount = 0;
          }
        }

        if (!error) setError(tokenIndex, Object(_locale__WEBPACK_IMPORTED_MODULE_5__["format"])(locale.invalidToken.unexpected, {
          token: token.string
        }));
      }
      let _line = 1,
          _depth = 0;

      function newIndent() {
        var space = [];

        for (var i = 0; i < _depth * 2; i++) space.push('&nbsp;');

        return space.join('');
      }

      function newLineBreak(byPass = false) {
        _line++;

        if (_depth > 0 || byPass) {
          return '<br>';
        }

        return '';
      }

      function newLineBreakAndIndent(byPass = false) {
        return newLineBreak(byPass) + newIndent();
      }

      ;
      if (!error) for (var i = 0; i < buffer.tokens_merge.length; i++) {
        const token = buffer.tokens_merge[i],
              string = token.string,
              type = token.type;

        switch (type) {
          case 'space':
          case 'linebreak':
            break;

          case 'string':
          case 'number':
          case 'primitive':
          case 'error':
            buffer.markup += (followsSymbol(i, [',', '[']) ? newLineBreakAndIndent() : '') + newSpan(i, token, _depth);
            break;

          case 'key':
            buffer.markup += newLineBreakAndIndent() + newSpan(i, token, _depth);
            break;

          case 'colon':
            buffer.markup += newSpan(i, token, _depth) + '&nbsp;';
            break;

          case 'symbol':
            switch (string) {
              case '[':
              case '{':
                buffer.markup += (!followsSymbol(i, [':']) ? newLineBreakAndIndent() : '') + newSpan(i, token, _depth);
                _depth++;
                break;

              case ']':
              case '}':
                _depth--;

                const islastToken = i === buffer.tokens_merge.length - 1,
                      _adjustment = i > 0 ? ['[', '{'].indexOf(buffer.tokens_merge[i - 1].string) > -1 ? '' : newLineBreakAndIndent(islastToken) : '';

                buffer.markup += _adjustment + newSpan(i, token, _depth);
                break;

              case ',':
                buffer.markup += newSpan(i, token, _depth);
                break;
            }

            break;
        }
      }

      if (error) {
        let _line_fallback = 1;

        function countCarrigeReturn(string) {
          let count = 0;

          for (var i = 0; i < string.length; i++) {
            if (['\n', '\r'].indexOf(string[i]) > -1) count++;
          }

          return count;
        }

        _line = 1;

        for (var i = 0; i < buffer.tokens_merge.length; i++) {
          const token = buffer.tokens_merge[i],
                type = token.type,
                string = token.string;
          if (type === 'linebreak') _line++;
          buffer.markup += newSpan(i, token, _depth);
          _line_fallback += countCarrigeReturn(string);
        }

        _line++;
        _line_fallback++;
        if (_line < _line_fallback) _line = _line_fallback;
      }

      for (var i = 0; i < buffer.tokens_merge.length; i++) {
        let token = buffer.tokens_merge[i];
        buffer.indented += token.string;
        if (['space', 'linebreak'].indexOf(token.type) === -1) buffer.tokens_plainText += token.string;
      }

      if (error) {
        function isFunction(functionToCheck) {
          return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
        }

        if ('modifyErrorText' in this.props) if (isFunction(this.props.modifyErrorText)) error.reason = this.props.modifyErrorText(error.reason);
      }

      return {
        tokens: buffer.tokens_merge,
        noSpaces: buffer.tokens_plainText,
        indented: buffer.indented,
        json: buffer.json,
        jsObject: buffer.jsObject,
        markup: buffer.markup,
        lines: _line,
        error: error
      };
    }

    ;
    /**
     *     JS OBJECTS || PLACEHOLDER
     */

    if (!('nodeType' in something)) {
      let buffer = {
        inputText: JSON.stringify(something),
        position: 0,
        currentChar: '',
        tokenPrimary: '',
        tokenSecondary: '',
        brackets: [],
        isValue: false,
        stringOpen: false,
        stringStart: 0,
        tokens: []
      };

      function escape_character() {
        if (buffer.currentChar !== '\\') return false;
        buffer.inputText = deleteCharAt(buffer.inputText, buffer.position);
        return true;
      }

      function deleteCharAt(string, position) {
        return string.slice(0, position) + string.slice(position + 1);
      }

      function determine_string() {
        if ('\'"'.indexOf(buffer.currentChar) === -1) return false;

        if (!buffer.stringOpen) {
          add_tokenSecondary();
          buffer.stringStart = buffer.position;
          buffer.stringOpen = buffer.currentChar;
          return true;
        }

        if (buffer.stringOpen === buffer.currentChar) {
          add_tokenSecondary();
          const stringToken = buffer.inputText.substring(buffer.stringStart, buffer.position + 1);
          add_tokenPrimary(stringToken);
          buffer.stringOpen = false;
          return true;
        }

        return false;
      }

      function determine_value() {
        if (':,{}[]'.indexOf(buffer.currentChar) === -1) return false;
        if (buffer.stringOpen) return false;
        add_tokenSecondary();
        add_tokenPrimary(buffer.currentChar);

        switch (buffer.currentChar) {
          case ':':
            buffer.isValue = true;
            return true;
            break;

          case '{':
          case '[':
            buffer.brackets.push(buffer.currentChar);
            break;

          case '}':
          case ']':
            buffer.brackets.pop();
            break;
        }

        if (buffer.currentChar !== ':') buffer.isValue = buffer.brackets[buffer.brackets.length - 1] === '[';
        return true;
      }

      function add_tokenSecondary() {
        if (buffer.tokenSecondary.length === 0) return false;
        buffer.tokens.push(buffer.tokenSecondary);
        buffer.tokenSecondary = '';
        return true;
      }

      function add_tokenPrimary(value) {
        if (value.length === 0) return false;
        buffer.tokens.push(value);
        return true;
      }

      for (var i = 0; i < buffer.inputText.length; i++) {
        buffer.position = i;
        buffer.currentChar = buffer.inputText.charAt(buffer.position);
        const a = determine_value(),
              b = determine_string(),
              c = escape_character();
        if (!a && !b && !c) if (!buffer.stringOpen) buffer.tokenSecondary += buffer.currentChar;
      }

      let buffer2 = {
        brackets: [],
        isValue: false,
        tokens: []
      };
      buffer2.tokens = buffer.tokens.map(token => {
        let type = '',
            string = '',
            value = '';

        switch (token) {
          case ',':
            type = 'symbol';
            string = token;
            value = token;
            buffer2.isValue = buffer2.brackets[buffer2.brackets.length - 1] === '[';
            break;

          case ':':
            type = 'symbol';
            string = token;
            value = token;
            buffer2.isValue = true;
            break;

          case '{':
          case '[':
            type = 'symbol';
            string = token;
            value = token;
            buffer2.brackets.push(token);
            buffer2.isValue = buffer2.brackets[buffer2.brackets.length - 1] === '[';
            break;

          case '}':
          case ']':
            type = 'symbol';
            string = token;
            value = token;
            buffer2.brackets.pop();
            buffer2.isValue = buffer2.brackets[buffer2.brackets.length - 1] === '[';
            break;

          case 'undefined':
            type = 'primitive';
            string = token;
            value = undefined;
            break;

          case 'null':
            type = 'primitive';
            string = token;
            value = null;
            break;

          case 'false':
            type = 'primitive';
            string = token;
            value = false;
            break;

          case 'true':
            type = 'primitive';
            string = token;
            value = true;
            break;

          default:
            const C = token.charAt(0);

            function stripQuotesFromKey(text) {
              if (text.length === 0) return text;
              if (['""', "''"].indexOf(text) > -1) return "''";
              let wrappedInQuotes = false;

              for (var i = 0; i < 2; i++) {
                if ([text.charAt(0), text.charAt(text.length - 1)].indexOf(['"', "'"][i]) > -1) {
                  wrappedInQuotes = true;
                  break;
                }
              }

              if (wrappedInQuotes && text.length >= 2) text = text.slice(1, -1);

              const nonAlphaNumeric = text.replace(/\w/g, ''),
                    alphaNumeric = text.replace(/\W+/g, ''),
                    mayRemoveQuotes = ((nonAlphaNumeric, text) => {
                let numberAndLetter = false;

                for (var i = 0; i < text.length; i++) {
                  if (i === 0) if (isNaN(text.charAt(i))) break;

                  if (isNaN(text.charAt(i))) {
                    numberAndLetter = true;
                    break;
                  }
                }

                return !(nonAlphaNumeric.length > 0 || numberAndLetter);
              })(nonAlphaNumeric, text),
                    hasQuotes = (string => {
                for (var i = 0; i < string.length; i++) {
                  if (["'", '"'].indexOf(string.charAt(i)) > -1) return true;
                }

                return false;
              })(nonAlphaNumeric);

              if (hasQuotes) {
                let newText = '';
                const charList = text.split('');

                for (var ii = 0; ii < charList.length; ii++) {
                  let char = charList[ii];
                  if (["'", '"'].indexOf(char) > -1) char = '\\' + char;
                  newText += char;
                }

                text = newText;
              }

              if (!mayRemoveQuotes) return "'" + text + "'";else return text;
            }

            if ('\'"'.indexOf(C) > -1) {
              if (buffer2.isValue) type = 'string';else type = 'key';
              if (type === 'key') string = stripQuotesFromKey(token);

              if (type === 'string') {
                string = '';
                const charList2 = token.slice(1, -1).split('');

                for (var ii = 0; ii < charList2.length; ii++) {
                  let char = charList2[ii];
                  if ('\'\"'.indexOf(char) > -1) char = '\\' + char;
                  string += char;
                }

                string = "'" + string + "'";
              }

              value = string;
              break;
            }

            if (!isNaN(token)) {
              type = 'number';
              string = token;
              value = Number(token);
              break;
            }

            if (token.length > 0) if (!buffer2.isValue) {
              type = 'key';
              string = token;
              if (string.indexOf(' ') > -1) string = "'" + string + "'";
              value = string;
              break;
            }
        }

        return {
          type: type,
          string: string,
          value: value,
          depth: buffer2.brackets.length
        };
      });
      let clean = '';

      for (var i = 0; i < buffer2.tokens.length; i++) {
        let token = buffer2.tokens[i];
        clean += token.string;
      }

      function indent(number) {
        var space = [];

        for (var i = 0; i < number * 2; i++) space.push(' ');

        return (number > 0 ? '\n' : '') + space.join('');
      }

      ;
      let indentation = '';

      for (var i = 0; i < buffer2.tokens.length; i++) {
        let token = buffer2.tokens[i];

        switch (token.string) {
          case '[':
          case '{':
            const nextToken = i < buffer2.tokens.length - 1 - 1 ? buffer2.tokens[i + 1] : '';
            if ('}]'.indexOf(nextToken.string) === -1) indentation += token.string + indent(token.depth);else indentation += token.string;
            break;

          case ']':
          case '}':
            const prevToken = i > 0 ? buffer2.tokens[i - 1] : '';
            if ('[{'.indexOf(prevToken.string) === -1) indentation += indent(token.depth) + token.string;else indentation += token.string;
            break;

          case ':':
            indentation += token.string + ' ';
            break;

          case ',':
            indentation += token.string + indent(token.depth);
            break;

          default:
            indentation += token.string;
            break;
        }
      }

      let lines = 1;

      function indentII(number) {
        var space = [];
        if (number > 0) lines++;

        for (var i = 0; i < number * 2; i++) space.push('&nbsp;');

        return (number > 0 ? '<br>' : '') + space.join('');
      }

      ;
      let markup = '';
      const lastIndex = buffer2.tokens.length - 1;

      for (var i = 0; i < buffer2.tokens.length; i++) {
        let token = buffer2.tokens[i];
        let span = newSpan(i, token, token.depth);

        switch (token.string) {
          case '{':
          case '[':
            const nextToken = i < buffer2.tokens.length - 1 - 1 ? buffer2.tokens[i + 1] : '';
            if ('}]'.indexOf(nextToken.string) === -1) markup += span + indentII(token.depth);else markup += span;
            break;

          case '}':
          case ']':
            const prevToken = i > 0 ? buffer2.tokens[i - 1] : '';
            if ('[{'.indexOf(prevToken.string) === -1) markup += indentII(token.depth) + (lastIndex === i ? '<br>' : '') + span;else markup += span;
            break;

          case ':':
            markup += span + ' ';
            break;

          case ',':
            markup += span + indentII(token.depth);
            break;

          default:
            markup += span;
            break;
        }
      }

      lines += 2;
      return {
        tokens: buffer2.tokens,
        noSpaces: clean,
        indented: indentation,
        json: JSON.stringify(something),
        jsObject: something,
        markup: markup,
        lines: lines
      };
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (JSONInput);

/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/locale/en.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/locale/en.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  format: "{reason} at line {line}",
  symbols: {
    colon: "colon",
    // :
    comma: "comma",
    // ,  ،  、
    semicolon: "semicolon",
    // ;
    slash: "slash",
    // /  relevant for comment syntax support
    backslash: "backslash",
    // \  relevant for escaping character
    brackets: {
      round: "round brackets",
      // ( )
      square: "square brackets",
      // [ ]
      curly: "curly brackets",
      // { }
      angle: "angle brackets" // < >

    },
    period: "period",
    // . Also known as full point, full stop, or dot
    quotes: {
      single: "single quote",
      // '
      double: "double quote",
      // "
      grave: "grave accent" // ` used on Javascript ES6 Syntax for String Templates

    },
    space: "space",
    //       
    ampersand: "ampersand",
    //	&
    asterisk: "asterisk",
    //	*  relevant for some comment sytanx
    at: "at sign",
    //	@  multiple uses in other coding languages including certain data types
    equals: "equals sign",
    //	=
    hash: "hash",
    //	#
    percent: "percent",
    //	%
    plus: "plus",
    //	+
    minus: "minus",
    //	−
    dash: "dash",
    //	−
    hyphen: "hyphen",
    //	−
    tilde: "tilde",
    //	~
    underscore: "underscore",
    //	_
    bar: "vertical bar" //	|

  },
  types: {
    key: "key",
    value: "value",
    number: "number",
    string: "string",
    primitive: "primitive",
    boolean: "boolean",
    character: "character",
    integer: "integer",
    array: "array",
    float: "float" //... Reference: https://en.wikipedia.org/wiki/List_of_data_structures

  },
  invalidToken: {
    tokenSequence: {
      prohibited: "'{firstToken}' token cannot be followed by '{secondToken}' token(s)",
      permitted: "'{firstToken}' token can only be followed by '{secondToken}' token(s)"
    },
    termSequence: {
      prohibited: "A {firstTerm} cannot be followed by a {secondTerm}",
      permitted: "A {firstTerm} can only be followed by a {secondTerm}"
    },
    double: "'{token}' token cannot be followed by another '{token}' token",
    useInstead: "'{badToken}' token is not accepted. Use '{goodToken}' instead",
    unexpected: "Unexpected '{token}' token found"
  },
  brace: {
    curly: {
      missingOpen: "Missing '{' open curly brace",
      missingClose: "Open '{' curly brace is missing closing '}' curly brace",
      cannotWrap: "'{token}' token cannot be wrapped in '{}' curly braces"
    },
    square: {
      missingOpen: "Missing '[' open square brace",
      missingClose: "Open '[' square brace is missing closing ']' square brace",
      cannotWrap: "'{token}' token cannot be wrapped in '[]' square braces"
    }
  },
  string: {
    missingOpen: "Missing/invalid opening string '{quote}' token",
    missingClose: "Missing/invalid closing string '{quote}' token",
    mustBeWrappedByQuotes: "Strings must be wrapped by quotes",
    nonAlphanumeric: "Non-alphanumeric token '{token}' is not allowed outside string notation",
    unexpectedKey: "Unexpected key found at string position"
  },
  key: {
    numberAndLetterMissingQuotes: "Key beginning with number and containing letters must be wrapped by quotes",
    spaceMissingQuotes: "Key containing space must be wrapped by quotes",
    unexpectedString: "Unexpected string found at key position"
  },
  noTrailingOrLeadingComma: "Trailing or leading commas in arrays and objects are not permitted"
});

/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/locale/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/locale/index.js ***!
  \****************************************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
// Allows us to pass arrays and numbers instead of just strings to the format function.
const stringify = arg => Array.isArray(arg) ? arg.join(", ") : typeof arg === "string" ? arg : "" + arg; // Replaces a string with the values of an object. Google "format unicorn" on an explanation of how to use.


const format = (str, args) => args ? Object.keys(args).reduce((str, arg) => str.replace(new RegExp(`\\{${arg}\\}`, 'gi'), stringify(args[arg])), str) : str;



/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/mitsuketa/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/mitsuketa/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author Andrew Redican <andrew.redican.mejia@gmail.com>
 */

/**
 * Performs deep search on object tree, removes all properties with matching key, returns a new identity without the specified property
 * @param {Any} identity
 * @param {string} keyName
 * @param {Optional Number} maxDepth
 * @return {Any} identity
 */
function deepRemoveAll_Key(identity, keyName, maxDepth) {
  if (getType(keyName) !== 'string') return undefined;
  if (keyName === '') return undefined;
  let clonedIdentity = deepClone(identity);
  var paths = locateAll_Key(clonedIdentity, keyName, maxDepth);
  if (paths === [] || paths === false) return clonedIdentity;
  paths.forEach(path => {
    if (path === '') path = keyName;else path += '.' + keyName;
    path = path.split('.');
    var ref = clonedIdentity;
    if (!Array.isArray(path)) delete ref[path];

    for (var i = 0; i < path.length; i++) {
      var key = path[i];

      if (key in ref) {
        if (i < path.length - 1) ref = ref[key];else delete ref[key];
      } else break;
    }
  });
  return clonedIdentity;
}
/**
 * Performs deep search on object tree, removes the first property with matching key, returns a new identity without the specified property
 * @param {Any} identity
 * @param {string} keyName
 * @param {Optional Number} maxDepth
 * @return {Any} identity
 */


function deepRemove_Key(identity, keyName, maxDepth) {
  if (getType(keyName) !== 'string') return undefined;
  if (keyName === '') return undefined;
  let clonedIdentity = deepClone(identity);
  var path = locate_Key(clonedIdentity, keyName, maxDepth);
  if (path === false) return clonedIdentity;
  if (path === '') path = keyName;else path += '.' + keyName;
  path = path.split('.');
  var ref = clonedIdentity;
  if (!Array.isArray(path)) delete ref[path];
  path.forEach((key, i) => {
    if (i < path.length - 1) ref = ref[key];else delete ref[key];
  });
  return clonedIdentity;
}
/**
 * Performs deep search on object tree, and renames the all matching keys
 * @param {Any} identity
 * @param {string} keyName
 * @param {string} newKeyName
 * @param {Optional Number} maxDepth
 * @return {Any} identity
 */


function renameKeys(identity, keyName, newKeyName, maxDepth = null) {
  if (getType(keyName) !== 'string') return undefined;
  if (getType(newKeyName) !== 'string') return undefined;
  if (keyName === '') return undefined;
  if (newKeyName === '') return undefined;

  function _renameKeys(identity, keyName, newKeyName, maxDepth, currentDepth = 0) {
    let keys;

    switch (getType(identity)) {
      case 'array':
        var Arr = [];
        keys = Object.keys(identity);

        for (var i = 0, l = keys.length; i < l; i++) {
          let key = keys[i],
              subIdentity = identity[key];
          Arr[key] = _renameKeys(subIdentity, keyName, newKeyName, maxDepth, currentDepth + 1);
        }

        return Arr;

      case 'object':
        var Obj = {};
        keys = Object.keys(identity);

        for (var i = 0, l = keys.length; i < l; i++) {
          let key = keys[i],
              subIdentity = identity[key];
          if (maxDepth !== null ? currentDepth < maxDepth : true) if (key === keyName) key = newKeyName;
          Obj[key] = _renameKeys(subIdentity, keyName, newKeyName, maxDepth, currentDepth + 1);
        }

        return Obj;

      case 'string':
        return '' + identity;

      case 'number':
        return 0 + identity;

      case 'boolean':
        if (identity) return true;
        return false;

      case 'null':
        return null;

      case 'undefined':
        return undefined;
    }
  }

  return _renameKeys(identity, keyName, newKeyName, maxDepth, 0);
}
/**
 * Performs deep search on object tree, then renames the first matching key
 * @param {Any} identity
 * @param {string} keyName
 * @param {string} newKeyName
 * @param {Optional Number} maxDepth
 * @return {Any} identity
 */


function renameKey(identity, keyName, newKeyName, maxDepth = null) {
  if (getType(keyName) !== 'string') return undefined;
  if (getType(newKeyName) !== 'string') return undefined;
  if (keyName === '') return undefined;
  if (newKeyName === '') return undefined;
  var applied = false;

  function _renameKey(identity, keyName, newKeyName, maxDepth, currentDepth = 0) {
    let keys;

    switch (getType(identity)) {
      case 'array':
        var Arr = [];
        keys = Object.keys(identity);

        for (var i = 0, l = keys.length; i < l; i++) {
          let key = keys[i],
              subIdentity = identity[key];
          Arr[key] = _renameKey(subIdentity, keyName, newKeyName, maxDepth, currentDepth + 1);
        }

        return Arr;

      case 'object':
        var Obj = {};
        keys = Object.keys(identity);

        for (var i = 0, l = keys.length; i < l; i++) {
          let key = keys[i],
              subIdentity = identity[key];
          if (maxDepth !== null ? currentDepth < maxDepth : true) if (!applied) if (key === keyName) {
            key = newKeyName;
            applied = true;
          }
          Obj[key] = _renameKey(subIdentity, keyName, newKeyName, maxDepth, currentDepth + 1);
        }

        return Obj;

      case 'string':
        return '' + identity;

      case 'number':
        return 0 + identity;

      case 'boolean':
        if (identity) return true;
        return false;

      case 'null':
        return null;

      case 'undefined':
        return undefined;
    }
  }

  return _renameKey(identity, keyName, newKeyName, maxDepth, 0);
}
/**
 * Creates a non-reference clone that is an exact copy to the identity provided.
 * @param {Any} identity
 * @param {Optional Number} maxDepth
 * @param {Optional Number} startDepth
 * @return {Any} identity
 */


function deepClone(identity, maxDepth = null, startDepth = null) {
  var R = [];

  function _deepClone(identity, maxDepth, startDepth, currentDepth = 0) {
    let keys;

    if (startDepth !== null ? currentDepth < startDepth : false) {
      if (isIterable(identity)) {
        keys = Object.keys(identity);
        keys.forEach(key => {
          _deepClone(identity[key], maxDepth, startDepth, currentDepth + 1);
        });
      }

      return;
    }

    if (startDepth !== null ? currentDepth == startDepth : false) {
      if (startDepth == 0) {
        R = _deepClone(identity, maxDepth, null, currentDepth);
        return;
      }

      if (isIterable(identity)) R.push(_deepClone(identity, maxDepth, startDepth, currentDepth + 1));
      return;
    }

    switch (getType(identity)) {
      case 'array':
        var Arr = [];
        keys = Object.keys(identity);
        if (maxDepth !== null ? currentDepth < maxDepth : true) for (var i = 0, l = keys.length; i < l; i++) {
          const key = keys[i],
                subIdentity = identity[key];
          Arr[key] = _deepClone(subIdentity, maxDepth, startDepth, currentDepth + 1);
        }
        return Arr;

      case 'object':
        var Obj = {};
        keys = Object.keys(identity);
        if (maxDepth !== null ? currentDepth < maxDepth : true) for (var i = 0, l = keys.length; i < l; i++) {
          const key = keys[i],
                subIdentity = identity[key];
          Obj[key] = _deepClone(subIdentity, maxDepth, startDepth, currentDepth + 1);
        }
        return Obj;

      case 'string':
        return '' + identity;

      case 'number':
        return 0 + identity;

      case 'boolean':
        if (identity) return true;
        return false;

      case 'null':
        return null;

      case 'undefined':
        return undefined;
    }
  }

  if (startDepth === null) return _deepClone(identity, maxDepth, startDepth, 0);

  _deepClone(identity, maxDepth, startDepth, 0);

  return R;
}
/**
 * Performs deep search on collection to find all matches to the key name, and returns a list of identities containing the matched instances. If no matches found, it returns `undefined`.
 * @param {Any} collection
 * @param {Any} keyName
 * @param {Optional Number} maxDepth
 * @return {Array || undefined} Identities
 */


function deepFilter_Key(collection, keyName, maxDepth = null) {
  if (getType(keyName) !== 'string') return undefined;
  if (keyName === '') return undefined;
  var paths = locateAll_Key(collection, keyName, maxDepth);
  if (paths === false) return undefined;
  const results = paths.map(path => {
    if (path === false) return undefined;
    if (path === '') path = keyName;else path += '.' + keyName;
    path = path.split('.');
    var result = collection;
    if (!Array.isArray(path)) return result[path];
    path.forEach(key => {
      result = result[key];
    });
    return result;
  });
  return results;
}
/**
 * Performs deep search on collection to find all matches to the key name, returns the location of each match in a string array. If no matches found, it returns `false`.
 * @param {Any} collection
 * @param {Any} keyName
 * @param {Optional Number} maxDepth
 * @return {Array || false} Paths
 */


function locateAll_Key(collection, keyName, maxDepth = null) {
  if (getType(keyName) !== 'string') return undefined;
  if (keyName === '') return undefined;
  var R = [];

  function _locateAll_Key(collection, keyName, xKey = '', path = '', maxDepth = null, currentDepth = 0) {
    if (xKey === keyName) R[R.length] = path;
    var result = false;
    if (maxDepth !== null) if (currentDepth >= maxDepth) return result;
    if (isIterable(collection)) for (var i = 0, keys = Object.keys(collection), l = keys.length; i < l; i++) {
      const key = keys[i],
            subcollection = collection[key];

      _locateAll_Key(subcollection, keyName, key, (path === '' ? path : path + '.') + key, maxDepth, currentDepth + 1);
    }
  }

  _locateAll_Key(collection, keyName, '', '', maxDepth);

  R = R.map(path => {
    if (getType(path) === 'boolean') return path;
    if (path === '') return path;
    path = path.split('.');
    path.pop();
    path = path.join('.');
    return path;
  });
  return R.length === 0 ? false : R;
}
/**
 * Performs deep search on collection to find a match to the key name, and returns the first identity containing the match. If no match found, it returns `undefined`.
 * @param {Any} collection
 * @param {Any} keyName
 * @param {Optional number} maxDepth
 * @return {Identity || undefined} identity
 */


function deepGet_Key(collection, keyName, maxDepth = null) {
  if (getType(keyName) !== 'string') return undefined;
  if (keyName === '') return undefined;
  var path = locate_Key(collection, keyName, maxDepth);
  if (path === false) return undefined;
  if (path === '') path = keyName;else path += '.' + keyName;
  path = path.split('.');
  var result = collection;
  if (!Array.isArray(path)) return result[path];
  path.forEach(key => {
    result = result[key];
  });
  return result;
}
/**
 * Performs deep search on collection to find a match to the key name, will return the path of the first instance matched. If no match found, it returns `false`.
 * @param {Any} collection
 * @param {Any} keyName
 * @param {Optional number} maxDepth
 * @return {String || false} Path
 */


function locate_Key(collection, keyName, maxDepth = null) {
  if (getType(keyName) !== 'string') return undefined;
  if (keyName === '') return undefined;

  function _locate_Key(collection, keyName, path = '', maxDepth, currentDepth = 0) {
    if (path === keyName) return path;
    var result = false;
    if (maxDepth !== null) if (currentDepth >= maxDepth) return result;
    if (isIterable(collection)) for (var i = 0, keys = Object.keys(collection), l = keys.length; i < l; i++) {
      const key = keys[i],
            subcollection = collection[key],
            res = _locate_Key(subcollection, keyName, key, maxDepth, currentDepth + 1);

      if (res) {
        path = path === '' ? path : path + '.';
        result = path + res;
        break;
      }
    }
    return result;
  }

  var path = _locate_Key(collection, keyName, '', maxDepth, 0);

  if (getType(path) === 'boolean') return path;
  if (path === '') return path;
  path = path.split('.');
  path.pop();
  path = path.join('.');
  return path;
}
/**
 * Performs deep search for identity on collection to return the location's depth of the first match. If no match found, it returns `false`.
 * @param {Any} collection
 * @param {Any} identity
 * @param {Optional Number} maxDepth
 * @return {boolean}
 */


function matchDepth(collection, identity, maxDepth = null) {
  var path = locate(collection, identity, maxDepth);
  if (path === false) return false;
  if (path === '') return 0;
  path = path.split('.');
  return path.length;
}
/**
 * Walks through the entire object tree to return the maximum number of layers it contains.
 * @param {Any} identity
 * @param {Optional Number} maxDepth
 */


function maxDepth(identity, maxLayer = null) {
  let R = 0;

  function _maxDepth(identity, maxLayer, currentDepth = 0) {
    if (R < currentDepth) R = currentDepth;
    if (maxLayer !== null) if (currentDepth >= maxLayer) return;

    if (isIterable(identity)) {
      var keys = Object.keys(identity);
      keys.forEach(key => {
        var subIdentity = identity[key];

        _maxDepth(subIdentity, maxLayer, currentDepth + 1);
      });
    }
  }

  _maxDepth(identity, maxLayer);

  return R;
}
/**
 * Performs deep search for identity on collection, returns the number of matches found.
 * @param {Any} collection
 * @param {Any} identity
 * @param {Number} nthDepth
 * @param {Optional Number} maxDepth
 * @return {Any} Returns number of matches found.
 */


function countMatches(collection, identity, nthDepth = null, maxDepth = null) {
  var depth,
      nthDepth_isNull = nthDepth === null,
      maxDepth_isNull = maxDepth === null;
  if (nthDepth_isNull && maxDepth_isNull) depth = null;else if (!nthDepth_isNull && !maxDepth_isNull) {
    if (nthDepth < maxDepth) depth = nthDepth;else depth = maxDepth;
  } else if (nthDepth) depth = nthDepth;else depth = maxDepth;
  var paths = locateAll(collection, identity, depth);
  if (paths === false) return 0;
  if (nthDepth === null) return paths.length;

  if (getType(nthDepth) === 'number') {
    let count = 0;
    paths.forEach(path => {
      path = path.split('.');
      if (path.length === nthDepth) count++;
    });
    return count;
  }

  return undefined;
}
/**
* Performs deep search for each identity on collection, to shorten the identities to those that meets the match criteria
* @param {Any} collection
* @param {Any} identities
* @param {Any} property
* @param {Optional Number} maxDepth
* @return {Any} Returns a collection of the same type as the 'identities' parameter provided with only the identities that matched.
*/


function onlyFalsy(collection, identities, property, maxDepth = null) {
  if (getType(identities) === 'array') {
    let result = [];
    identities.forEach(identity => {
      const subCollection = deepFilter(collection, identity);
      if (isTruthy(subCollection)) if (foundFalsy(subCollection, property, maxDepth)) result.push(identity);
    });
    return result;
  }

  if (getType(identities) === 'object') {
    let result = {};
    Object.keys(identities).forEach(key => {
      const identity = identities[key],
            subCollection = deepFilter(collection, identity);
      if (isTruthy(subCollection)) if (foundFalsy(subCollection, property, maxDepth)) result[key] = identity;
    });
    return result;
  }

  if (foundFalsy(collection, property, maxDepth)) return identities;
}
/**
 * Performs deep search on collection to find any match to the property and evalutates if truthy
 * @param {Any} collection
 * @param {Property} identity
 * @param {Optional Number} maxDepth
 * @return {boolean} If match confirmed and truthy will return true, otherwise false
 */


function foundFalsy(collection, identity, maxDepth = null) {
  identity = singleProperty(identity);
  if (isFalsy(identity)) return undefined;

  function _foundFalsy(collection, identity, maxDepth, currentDepth = 0) {
    if (containsKeys(collection, [identity])) return isFalsy(collection[identity]);
    if (maxDepth !== null) if (currentDepth >= maxDepth) return false;
    if (isIterable(collection)) for (var i = 0, keys = Object.keys(collection), l = keys.length; i < l; i++) {
      const key = keys[i],
            subcollection = collection[key],
            res = _foundFalsy(subcollection, identity, maxDepth, currentDepth + 1);

      if (res) return true;
    }
    return false;
  }

  return _foundFalsy(collection, identity, maxDepth);
}
/**
 * Performs deep search for each identity on collection, to shorten the identities to those that meets the match criteria
 * @param {Any} collection
 * @param {Any} identities
 * @param {Any} property
 * @param {Optional Number} maxDepth
 * @return {Any} Returns a collection of the same type as the 'identities' parameter provided with only the identities that matched.
 */


function onlyTruthy(collection, identities, property, maxDepth = null) {
  if (getType(identities) === 'array') {
    let result = [];
    identities.forEach(identity => {
      const subCollection = deepFilter(collection, identity);
      if (isTruthy(subCollection)) if (foundTruthy(subCollection, property, maxDepth)) result.push(identity);
    });
    return result;
  }

  if (getType(identities) === 'object') {
    let result = {};
    Object.keys(identities).forEach(key => {
      const identity = identities[key],
            subCollection = deepFilter(collection, identity);
      if (isTruthy(subCollection)) if (foundTruthy(subCollection, property, maxDepth)) result[key] = identity;
    });
    return result;
  }

  if (foundTruthy(collection, property, maxDepth)) return identities;
}
/**
 * Performs deep search on collection to find any match to the property and evalutates if truthy
 * @param {Any} collection
 * @param {Property} identity
 * @param {Optional Number} maxDepth
 * @return {boolean} If match confirmed and truthy will return true, otherwise false
 */


function foundTruthy(collection, identity, maxDepth = null) {
  identity = singleProperty(identity);
  if (isFalsy(identity)) return undefined;

  function _foundTruthy(collection, identity, maxDepth, currentDepth = 0) {
    if (containsKeys(collection, [identity])) return isTruthy(collection[identity]);
    if (maxDepth !== null) if (currentDepth >= maxDepth) return false;
    if (isIterable(collection)) for (var i = 0, keys = Object.keys(collection), l = keys.length; i < l; i++) {
      const key = keys[i],
            subcollection = collection[key],
            res = _foundTruthy(subcollection, identity, maxDepth, currentDepth + 1);

      if (res) return true;
    }
    return false;
  }

  return _foundTruthy(collection, identity, maxDepth, 0);
}
/**
 * Validates if identity is equal to a property definition or contains a single property key.
 * @param {Property} identity
 * @return {String || boolean} If criteria matched will return property name as string, otherwise false
 */


function singleProperty(identity) {
  const propCount = length(identity);
  if (propCount > 1) return false;
  if (propCount === 1) return Object.keys(identity)[0];
  if (propCount === 0) if (['string', 'number'].indexOf(getType(identity)) > -1) return identity;
  return false;
}
/**
 * Determines if identity is non-falsy
 * @param {Any} identity
 * @return {boolean} Returns true if criteria matched, otherwise false.
 */


function isTruthy(identity) {
  return !isFalsy(identity);
}
/**
 * Determines if identity is falsy
 * @param {Any} identity
 * @return {boolean} Returns true if criteria matched, otherwise false.
 */


function isFalsy(identity) {
  if (falser(identity) === false) return true;
  return false;
}
/**
 * Converts false-like values into actual boolean value of false
 * @param {Any} identity
 * @return {Any || boolean} Returns false is value is falsy, otherwise returns original value.
 */


function falser(identity) {
  if (isIterable(identity)) return identity;
  if (['null', 'undefined'].indexOf(getType(identity)) > -1) return false;
  if (['', 0, false].indexOf(identity) > -1) return false;
  return identity;
}
/**
 * Check the length of the top-most depth of the identity
 * @param {Any} identity
 * @return {integer} Greater than or equal to 0.
 */


function length(identity) {
  if (['array', 'object'].indexOf(getType(identity)) === -1) return 0;
  return Object.keys(identity).length;
}
/**
 * Performs deep search for each identity on collection, to shorten the identities to those that does meets the match criteria
 * @param {Any} collection
 * @param {Any} identities
 * @param {Optional Number} maxDepth
 * @return {Any} Returns a collection of the same type as the 'identities' parameter provided with only the identities that were not matched.
 */


function onlyMissing(collection, identities, maxDepth = null) {
  if (getType(identities) === 'array') {
    let result = [];
    identities.forEach(identity => {
      if (!exists(collection, identity, maxDepth)) result.push(identity);
    });
    return result;
  }

  if (getType(identities) === 'object') {
    let result = {};
    Object.keys(identities).forEach(key => {
      let identity = identities[key];
      if (!exists(collection, identity, maxDepth)) result[key] = identity;
    });
    return result;
  }

  if (!exists(collection, identities, maxDepth)) return identities;
}
/**
 * Performs deep search for each identity on collection, to shorten the identities to those that meets the match criteria
 * @param {Any} collection
 * @param {Any} identities
 * @param {Optional Number} maxDepth
 * @return {Any} Returns a collection of the same type as the 'identities' parameter provided with only the identities that matched.
 */


function onlyExisting(collection, identities, maxDepth = null) {
  if (getType(identities) === 'array') {
    let result = [];
    identities.forEach(identity => {
      if (exists(collection, identity, maxDepth)) result.push(identity);
    });
    return result;
  }

  if (getType(identities) === 'object') {
    let result = {};
    Object.keys(identities).forEach(key => {
      let identity = identities[key];
      if (exists(collection, identity, maxDepth)) result[key] = identity;
    });
    return result;
  }

  if (exists(collection, identities, maxDepth)) return identities;
}
/**
 * Performs deep search on collection to find any match to the identity
 * @param {Any} collection
 * @param {Any} identity
 * @param {Optional Number} maxDepth
 * @return {boolean} If a match is confirmed will return true, otherwise false
 */


function exists(collection, identity, maxDepth = null, currentDepth = 0) {
  if (identical(collection, identity)) return true;
  if (isIterable(identity)) if (sameType(collection, identity)) if (containsKeys(collection, Object.keys(identity))) {
    const trimmed = trim(collection, Object.keys(identity));
    if (identical(trimmed, identity)) return true;
  }
  if (maxDepth === null ? true : currentDepth < maxDepth) if (isIterable(collection)) for (var i = 0, keys = Object.keys(collection), l = keys.length; i < l; i++) {
    const key = keys[i],
          subcollection = collection[key],
          res = exists(subcollection, identity, maxDepth, currentDepth + 1);
    if (res) return true;
  }
  return false;
}
/**
 * Performs deep search on collection to find all matches to the identity, will return a list of identities containing the match. If no matches found, it returns `undefined`.
 * @param {Any} collection
 * @param {Any} identity
 * @param {Optional Number} maxDepth
 * @return {Array || undefined} identities
 */


function deepFilter(collection, identity, maxDepth = null) {
  var paths = locateAll(collection, identity, maxDepth);
  if (paths === false) return undefined;
  const results = paths.map(path => {
    if (path === '') return collection;
    path = path.split('.');
    if (['array', 'object'].indexOf(getType(identity)) === -1) path.splice(-1, 1);
    var result = collection;
    if (!Array.isArray(path)) return result[path];
    path.forEach(key => {
      result = result[key];
    });
    return result;
  });
  return results;
}
/**
 * Performs deep search on collection to find all matches to the identity, returns a string array containing the location of all matches. If no matches found, it returns `false`.
 * @param {Any} collection
 * @param {Any} identity
 * @param {Optional Number} maxDepth
 * @return {Array || false} Paths
 */


function locateAll(collection, identity, maxDepth = null) {
  var R = [];

  function _locateAll(collection, identity, path = '', maxDepth, currentDepth) {
    if (isIterable(identity)) if (sameType(collection, identity)) if (containsKeys(collection, Object.keys(identity))) {
      const trimmed = trim(collection, Object.keys(identity));
      if (identical(trimmed, identity)) R[R.length] = path;
    }
    if (identical(collection, identity)) R[R.length] = path;
    var result = false;
    if (maxDepth !== null) if (currentDepth >= maxDepth) return result;
    if (isIterable(collection)) for (var i = 0, keys = Object.keys(collection), l = keys.length; i < l; i++) {
      const key = keys[i],
            subcollection = collection[key];

      _locateAll(subcollection, identity, (path === '' ? path : path + '.') + key, maxDepth, currentDepth + 1);
    }
  }

  _locateAll(collection, identity, '', maxDepth, 0);

  return R.length === 0 ? false : R;
}
/**
 * Performs deep search on collection to find a match to the identity, will return the identity containing of the first instance matched. If no matches found, it returns `undefined`.
 * @param {Any} collection
 * @param {Any} identity
 * @param {Optional Number} maxDepth
 * @return {identity || undefined} identity
 */


function deepGet(collection, identity, maxDepth = null) {
  var path = locate(collection, identity, maxDepth);
  if (path === false) return undefined;
  if (path === '') return collection;
  path = path.split('.');
  if (['array', 'object'].indexOf(getType(identity)) === -1) path.splice(-1, 1);
  var result = collection;
  if (!Array.isArray(path)) return result[path];
  path.forEach(key => {
    result = result[key];
  });
  return result;
}
/**
 * Performs deep search on collection to find a match to the identity, will return the path of the first instance matched as string. If no matches found, returns `false`.
 * @param {Any} collection
 * @param {Any} identity
 * @param {Optional number} maxDepth
 * @return {string || false} path
 */


function locate(collection, identity, maxDepth = null) {
  function _locate(collection, identity, path = '', maxDepth, currentDepth) {
    if (isIterable(identity)) if (sameType(collection, identity)) if (containsKeys(collection, Object.keys(identity))) {
      const trimmed = trim(collection, Object.keys(identity));
      if (identical(trimmed, identity)) return path;
    }
    if (identical(collection, identity)) return path;
    var result = false;
    if (maxDepth !== null) if (currentDepth >= maxDepth) return result;
    if (isIterable(collection)) for (var i = 0, keys = Object.keys(collection), l = keys.length; i < l; i++) {
      const key = keys[i],
            subcollection = collection[key],
            res = _locate(subcollection, identity, key, maxDepth, currentDepth + 1);

      if (res) {
        path = path === '' ? path : path + '.';
        result = path + res;
        break;
      }
    }
    return result;
  }

  return _locate(collection, identity, '', maxDepth, 0);
}
/**
 * Trims an identity to only contain the specified properties.
 * @param {Any} identity
 * @param {Any} keyList
 * @return {Object or Array} Returns , otherwise false
 */


function trim(identity, keyList) {
  const identityType = getType(identity);
  if (['array', 'object'].indexOf(identityType) === -1) return undefined;
  const keyCount = keyList.length;
  if (keyCount === 0) return undefined;
  var newIdentity;

  switch (identityType) {
    case 'object':
      newIdentity = {};
      keyList.forEach(key => {
        if (key in identity) newIdentity[key] = identity[key];
      });
      break;

    case 'array':
      newIdentity = [];
      keyList.forEach(key => {
        if (key in identity) newIdentity.push(identity[key]);
      });
      break;
  }

  return newIdentity;
}
/**
 * Check if identity contains all of the specified keys
 * @param {Any} identity
 * @param {Array} keyList
 * @return {boolean} true || false
 */


function containsKeys(identity, keyList) {
  const keyCount = keyList.length;
  if (keyCount === 0 || !isIterable(identity)) return false;
  const identitykeys = Object.keys(identity);
  var result = true;

  for (var i = 0; i < keyCount; i++) {
    const key = '' + keyList[i];

    if (identitykeys.indexOf(key) === -1) {
      result = false;
      break;
    }
  }

  return result;
}
/**
 * Check if identity has one or more keys to iterate
 * @param {Any} identity
 * @return {boolean} true || false
 */


function isIterable(identity) {
  if (['array', 'object'].indexOf(getType(identity)) === -1) return false;
  if (Object.keys(identity).length === 0) return false;
  return true;
}
/**
 * Compares two identities, will return either true if identical, otherwise false.
 * @param {Any} identityA
 * @param {Any} identityB
 * @return {boolean} true || false
 */


function identical(identityA, identityB) {
  const structureMatch = sameStructure(identityA, identityB);
  if (structureMatch === false) return structureMatch;
  if (['array', 'object'].indexOf(structureMatch) === -1) return identityA === identityB;
  const Keys = Object.keys(identityA),
        KeyCount = Keys.length;
  var childMatch = true;

  for (var i = 0; i < KeyCount; i++) {
    const Key = Keys[i],
          identicalMatch = identical(identityA[Key], identityB[Key]);

    if (identicalMatch === false) {
      childMatch = identicalMatch;
      break;
    }

    ;
  }

  return childMatch;
}
/**
 * Compares data structure of two identities, will return either the dataType or true/false.
 * @param {Any} identityA
 * @param {Any} identityB
 * @return {String || False} DataType as string for positive match, otherwise false
 */


function sameStructure(identityA, identityB) {
  const typeMatch = sameType(identityA, identityB);
  if (typeMatch === false) return false;

  if (['array', 'object'].indexOf(typeMatch) > -1) {
    const AKeys = Object.keys(identityA),
          BKeys = Object.keys(identityB),
          AKeyCount = AKeys.length,
          BKeyCount = BKeys.length;
    if (!(AKeyCount === BKeyCount)) return false;
    if (AKeyCount === 0) return true;

    for (var i = 0; i < AKeyCount; i++) {
      if (AKeys[i] !== BKeys[i]) return false;
    }
  }

  return typeMatch;
}
/**
 * Compares data type of two identities, will dataType if true.
 * @param {Any} identityA
 * @param {Any} identityB
 * @return {boolean} true || false
 */


function sameType(identityA, identityB) {
  const typeA = getType(identityA);
  return typeA === getType(identityB) ? typeA : false;
}
/**
 * Gets data type; makes distintion between object, array, and null.
 * @param {Any} identity
 * @return {String} dataType
 */


function getType(identity) {
  if (identity === null) return 'null';
  const it = typeof identity;
  if (it === 'object') if (Array.isArray(identity)) return 'array';
  return it;
}

var mitsuketa = {
  getType: function (identity) {
    return getType(identity);
  },
  sameType: function (identityA, identityB) {
    return sameType(identityA, identityB);
  },
  sameStructure: function (identityA, identityB) {
    return sameStructure(identityA, identityB);
  },
  identical: function (identityA, identityB) {
    return identical(identityA, identityB);
  },
  isIterable: function (identity) {
    return isIterable(identity);
  },
  containsKeys: function (identity, keyList) {
    return containsKeys(identity, keyList);
  },
  trim: function (identity, keyList) {
    return trim(identity, keyList);
  },
  locate: function (collection, identity, maxDepth) {
    return locate(collection, identity, maxDepth);
  },
  deepGet: function (collection, identity, maxDepth) {
    return deepGet(collection, identity, maxDepth);
  },
  locateAll: function (collection, identity, maxDepth) {
    return locateAll(collection, identity, maxDepth);
  },
  deepFilter: function (collection, identity, maxDepth) {
    return deepFilter(collection, identity, maxDepth);
  },
  exists: function (collection, identity, maxDepth) {
    return exists(collection, identity, maxDepth);
  },
  onlyExisting: function (collection, identities, maxDepth) {
    return onlyExisting(collection, identities, maxDepth);
  },
  onlyMissing: function (collection, identities, maxDepth) {
    return onlyMissing(collection, identities, maxDepth);
  },
  length: function (identity) {
    return length(identity);
  },
  isFalsy: function (identity) {
    return isFalsy(identity);
  },
  isTruthy: function (identity) {
    return isTruthy(identity);
  },
  foundTruthy: function (collection, identity, maxDepth) {
    return foundTruthy(collection, identity, maxDepth);
  },
  onlyTruthy: function (collection, identities, property, maxDepth) {
    return onlyTruthy(collection, identities, property, maxDepth);
  },
  foundFalsy: function (collection, identity, maxDepth) {
    return foundFalsy(collection, identity, maxDepth);
  },
  onlyFalsy: function (collection, identities, property, maxDepth) {
    return onlyFalsy(collection, identities, property, maxDepth);
  },
  countMatches: function (collection, identity, nthDepth, maxDepth) {
    return countMatches(collection, identity, nthDepth, maxDepth);
  },
  matchDepth: function (collection, identity, maxDepth) {
    return matchDepth(collection, identity, maxDepth);
  },
  maxDepth: function (identity, maxLayer) {
    return maxDepth(identity, maxLayer);
  },
  locate_Key: function (collection, keyName, maxDepth) {
    return locate_Key(collection, keyName, maxDepth);
  },
  deepGet_Key: function (collection, keyName, maxDepth) {
    return deepGet_Key(collection, keyName, maxDepth);
  },
  locateAll_Key: function (collection, keyName, maxDepth) {
    return locateAll_Key(collection, keyName, maxDepth);
  },
  deepFilter_Key: function (collection, keyName, maxDepth) {
    return deepFilter_Key(collection, keyName, maxDepth);
  },
  deepClone: function (identity, maxDepth, startDepth) {
    return deepClone(identity, maxDepth, startDepth);
  },
  renameKey: function (identity, keyName, newKeyName, maxDepth) {
    return renameKey(identity, keyName, newKeyName, maxDepth);
  },
  renameKeys: function (identity, keyName, newKeyName, maxDepth) {
    return renameKeys(identity, keyName, newKeyName, maxDepth);
  },
  deepRemove_Key: function (identity, keyName, maxDepth) {
    return deepRemove_Key(identity, keyName, maxDepth);
  },
  deepRemoveAll_Key: function (identity, keyName, maxDepth) {
    return deepRemoveAll_Key(identity, keyName, maxDepth);
  }
};
module.exports = exports = mitsuketa;

/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/themes.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/themes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dark_vscode_tribute = {
  default: '#D4D4D4',
  background: '#1E1E1E',
  background_warning: '#1E1E1E',
  string: '#CE8453',
  number: '#B5CE9F',
  colon: '#49B8F7',
  keys: '#9CDCFE',
  keys_whiteSpace: '#AF74A5',
  primitive: '#6392C6'
};
const light_mitsuketa_tribute = {
  default: '#D4D4D4',
  background: '#FCFDFD',
  background_warning: '#FEECEB',
  string: '#FA7921',
  number: '#70CE35',
  colon: '#49B8F7',
  keys: '#59A5D8',
  keys_whiteSpace: '#835FB6',
  primitive: '#386FA4'
};
const themes = {
  dark_vscode_tribute: dark_vscode_tribute,
  light_mitsuketa_tribute: light_mitsuketa_tribute
};
/* harmony default export */ __webpack_exports__["default"] = (themes);

/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/locale/en.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/locale/en.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  format: "{reason} at line {line}",
  symbols: {
    colon: "colon",
    // :
    comma: "comma",
    // ,  ،  、
    semicolon: "semicolon",
    // ;
    slash: "slash",
    // /  relevant for comment syntax support
    backslash: "backslash",
    // \  relevant for escaping character
    brackets: {
      round: "round brackets",
      // ( )
      square: "square brackets",
      // [ ]
      curly: "curly brackets",
      // { }
      angle: "angle brackets" // < >

    },
    period: "period",
    // . Also known as full point, full stop, or dot
    quotes: {
      single: "single quote",
      // '
      double: "double quote",
      // "
      grave: "grave accent" // ` used on Javascript ES6 Syntax for String Templates

    },
    space: "space",
    //       
    ampersand: "ampersand",
    //	&
    asterisk: "asterisk",
    //	*  relevant for some comment sytanx
    at: "at sign",
    //	@  multiple uses in other coding languages including certain data types
    equals: "equals sign",
    //	=
    hash: "hash",
    //	#
    percent: "percent",
    //	%
    plus: "plus",
    //	+
    minus: "minus",
    //	−
    dash: "dash",
    //	−
    hyphen: "hyphen",
    //	−
    tilde: "tilde",
    //	~
    underscore: "underscore",
    //	_
    bar: "vertical bar" //	|

  },
  types: {
    key: "key",
    value: "value",
    number: "number",
    string: "string",
    primitive: "primitive",
    boolean: "boolean",
    character: "character",
    integer: "integer",
    array: "array",
    float: "float" //... Reference: https://en.wikipedia.org/wiki/List_of_data_structures

  },
  invalidToken: {
    tokenSequence: {
      prohibited: "'{firstToken}' token cannot be followed by '{secondToken}' token(s)",
      permitted: "'{firstToken}' token can only be followed by '{secondToken}' token(s)"
    },
    termSequence: {
      prohibited: "A {firstTerm} cannot be followed by a {secondTerm}",
      permitted: "A {firstTerm} can only be followed by a {secondTerm}"
    },
    double: "'{token}' token cannot be followed by another '{token}' token",
    useInstead: "'{badToken}' token is not accepted. Use '{goodToken}' instead",
    unexpected: "Unexpected '{token}' token found"
  },
  brace: {
    curly: {
      missingOpen: "Missing '{' open curly brace",
      missingClose: "Open '{' curly brace is missing closing '}' curly brace",
      cannotWrap: "'{token}' token cannot be wrapped in '{}' curly braces"
    },
    square: {
      missingOpen: "Missing '[' open square brace",
      missingClose: "Open '[' square brace is missing closing ']' square brace",
      cannotWrap: "'{token}' token cannot be wrapped in '[]' square braces"
    }
  },
  string: {
    missingOpen: "Missing/invalid opening string '{quote}' token",
    missingClose: "Missing/invalid closing string '{quote}' token",
    mustBeWrappedByQuotes: "Strings must be wrapped by quotes",
    nonAlphanumeric: "Non-alphanumeric token '{token}' is not allowed outside string notation",
    unexpectedKey: "Unexpected key found at string position"
  },
  key: {
    numberAndLetterMissingQuotes: "Key beginning with number and containing letters must be wrapped by quotes",
    spaceMissingQuotes: "Key containing space must be wrapped by quotes",
    unexpectedString: "Unexpected string found at key position"
  },
  noTrailingOrLeadingComma: "Trailing or leading commas in arrays and objects are not permitted"
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ })

/******/ });
//# sourceMappingURL=client.js.map
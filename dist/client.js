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
/* harmony import */ var _json_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json.svg */ "./client/json.svg");



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
  }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_json_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "inspector-icon-modal"
  }), " Object Tree Inspector"), camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InspectorView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    json: definitions,
    onChange: json => setDefinitions(json)
  })), camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inspector-buttons"
  }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-primary",
    disabled: true,
    onClick: () => onClose(definitions)
  }, "Save"), camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-secondary",
    onClick: () => onClose()
  }, "Cancel"))));
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
/* harmony import */ var _json_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json.svg */ "./client/json.svg");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class InspectorPlugin extends camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      activeTab: null,
      modalOpen: null,
      definitions: {},
      modelers: []
    });

    _defineProperty(this, "openModal", () => {
      const {
        activeTab
      } = this.state;
      const modeler = this.getModeler(activeTab);
      this.setState({
        modalOpen: true,
        definitions: modeler.getDefinitions()
      });
    });

    _defineProperty(this, "handleClosed", definitions => {
      this.setState({
        modalOpen: false
      });

      if (!definitions) {
        return;
      } // todo(pinussilvestrus): find good way to update definitions
      // const modeler = this.modeler;
      // modeler._definitions = merge({}, modeler._definitions, definitions);


      this.update();
    });

    const {
      subscribe
    } = props;
    subscribe('bpmn.modeler.created', event => {
      const {
        modeler,
        tab
      } = event;
      const {
        modelers
      } = this.state;
      modelers.push({
        tab: tab.id,
        modeler
      });
    });
    subscribe('app.activeTabChanged', ({
      activeTab
    }) => {
      this.setState({
        activeTab
      });
    });
  }

  getModeler(tab) {
    const found = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["find"])(this.state.modelers, m => m.tab === tab.id);
    return found ? found.modeler : null;
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
    }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_json_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "inspector-icon",
      onClick: this.openModal
    })), this.state.modalOpen && camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InspectorModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClose: this.handleClosed.bind(this),
      json: this.state.definitions
    }));
  }

} // helpers //////////////
// eslint-disable-next-line

function log(...args) {
  console.log('[JSONPlugin]', ...args);
} // @Deprecated
// eslint-disable-next-line


function merge(target, ...sources) {
  if (!sources.length) {
    return target;
  }

  Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["isObject"])(source)) {
      return;
    }

    target.$descriptor = source.$descriptor || target.$descriptor;
    Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(Object.getOwnPropertyNames(source), function (key) {
      const sourceVal = source[key];

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if (Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["isObject"])(sourceVal)) {
        if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["isObject"])(targetVal)) {
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
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");




function InspectorView({
  json,
  onChange
}) {
  json = ensureAllProps({}, json);

  const handleChange = ({
    jsObject
  }) => onChange(jsObject);

  return camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_json_editor_ajrm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "json-editor",
    placeholder: json,
    onChange: handleChange,
    locale: react_json_editor_ajrm_locale_en__WEBPACK_IMPORTED_MODULE_2___default.a,
    theme: "light_mitsuketa_tribute",
    onKeyPressUpdate: false,
    height: "500px",
    confirmGood: false,
    viewOnly: true
  }));
} // helpers /////

const skipKeys = ['bpmnElement', '$parent', 'outgoing', 'incoming'];

function ensureAllProps(target, source) {
  Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["forEach"])(Object.getOwnPropertyNames(source), key => {
    const sourceVal = source[key];

    if (key === '__proto__') {
      return;
    }

    if (skipKeys.includes(key)) {
      target[key] = (source[key] || {}).id;
      return target;
    }

    let targetVal = target[key];

    if (Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["isObject"])(sourceVal)) {
      if (!Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["isObject"])(targetVal)) {
        // override target[key] with object
        targetVal = {};
      }

      target[key] = ensureAllProps(targetVal, sourceVal);
    } else if (Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["isArray"])(sourceVal)) {
      target[key] = Object(min_dash__WEBPACK_IMPORTED_MODULE_3__["map"])(sourceVal, s => ensureAllProps({}, s));
    } else {
      target[key] = sourceVal;
    }
  });
  return target;
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

/***/ "./client/json.svg":
/*!*************************!*\
  !*** ./client/json.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  "aria-hidden": "true",
  "data-prefix": "fab",
  "data-icon": "js-square",
  className: (styles["svg-inline--fa"] || "svg-inline--fa") + " " + (styles["fa-js-square"] || "fa-js-square") + " " + (styles["fa-w-14"] || "fa-w-14"),
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "currentColor",
  d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
})));

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

/***/ })

/******/ });
//# sourceMappingURL=client.js.map
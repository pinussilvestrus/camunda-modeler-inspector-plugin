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
/* harmony import */ var react_simple_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-tooltip */ "./node_modules/react-simple-tooltip/es/index.js");
/* harmony import */ var _InspectorView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InspectorView */ "./client/InspectorView.js");
/* harmony import */ var _json_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json.svg */ "./client/json.svg");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





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
  }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_json_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "inspector-icon-modal"
  }), " Object Tree Inspector"), camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InspectorView__WEBPACK_IMPORTED_MODULE_3__["default"], {
    json: definitions,
    onChange: json => setDefinitions(json)
  })), camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inspector-buttons"
  }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_simple_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: "Currently not available \uD83C\uDF85\uD83C\uDFFB",
    background: "white",
    border: "grey",
    color: "black",
    padding: 5,
    customCss: styled_components__WEBPACK_IMPORTED_MODULE_5__["css"]`white-space: nowrap; border-radius: 5px`,
    fixed: false
  }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-primary",
    disabled: true,
    onClick: () => onClose(definitions)
  }, "Save")), camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
      const {
        displayNotification
      } = this.props;
      const modeler = this.getModeler(activeTab);

      if (!modeler) {
        displayNotification({
          type: 'error',
          title: 'Not available for this tab',
          duration: 4000
        });
        return;
      }

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

  const handleKeyDown = event => {
    const {
      keyCode,
      ctrlKey,
      metaKey
    } = event;

    if (keyCode === 67 && (ctrlKey || metaKey)) {
      // <C>
      event.preventDefault();
      document.execCommand('copy');
    }
  };

  return camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onKeyDown: handleKeyDown
  }, camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_json_editor_ajrm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "json-editor",
    placeholder: json,
    onChange: handleChange,
    locale: react_json_editor_ajrm_locale_en__WEBPACK_IMPORTED_MODULE_2___default.a,
    onKeyPressUpdate: false,
    height: "500px",
    width: "100%",
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

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/^.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


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

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: getType, isAnyObject, isArray, isBlob, isBoolean, isDate, isEmptyString, isFile, isFullString, isFunction, isNull, isNumber, isObject, isObjectLike, isPlainObject, isPrimitive, isRegExp, isString, isSymbol, isType, isUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyObject", function() { return isAnyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlob", function() { return isBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullString", function() { return isFullString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return (payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype);
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
function isFunction(payload) {
    return getType(payload) === 'Function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return (getType(payload) === 'Number' && !isNaN(payload));
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return (getType(payload) === 'Symbol');
}
/**
 * Returns whether the payload is a date, and that the date is Valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return (getType(payload) === 'Date' && !isNaN(payload));
}
/**
 * Returns whether the payload is a blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
function isBlob(payload) {
    return getType(payload) === 'Blob';
}
/**
 * Returns whether the payload is a file
 *
 * @param {*} payload
 * @returns {payload is File}
 */
function isFile(payload) {
    return getType(payload) === 'File';
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!type.hasOwnProperty('prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return (getType(payload) === name) || Boolean(payload && (payload.constructor === type));
}




/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default, concatArrays, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatArrays", function() { return concatArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newComer)) {
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = __spreadArrays(props_1, symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = __spreadArrays(props, symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(originVal) && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ __webpack_exports__["default"] = (merge);



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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


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

/***/ "./node_modules/react-simple-tooltip/es/components/Arrow/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-simple-tooltip/es/components/Arrow/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  width: ", "px;\n  height: ", "px;\n  background: ", ";\n"], ["\n  position: absolute;\n  width: ", "px;\n  height: ", "px;\n  background: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  ", ";\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ", ";\n  border-top: 1px solid ", ";\n"], ["\n  ", ";\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ", ";\n  border-top: 1px solid ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  ", ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"], ["\n  ", ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  ", ";\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"], ["\n  ", ";\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  ", ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ", ";\n  border-top: 1px solid ", ";\n"], ["\n  ", ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ", ";\n  border-top: 1px solid ", ";\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/** @jsx jsx */



var Base = function Base(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, props.width, props.width, props.background);
};

var Up = function Up(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, Base(props), props.border, props.border);
};
var Down = function Down(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, Base(props), props.border, props.border);
};
var Left = function Left(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, Base(props), props.border, props.border);
};

var Right = function Right(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, Base(props), props.border, props.border);
};

var BaseArrow = function BaseArrow(_ref) {
  var fn = _ref.fn,
      props = _objectWithoutProperties(_ref, ["fn"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", { css: fn(props) });
};

BaseArrow.propTypes =  true ? {
  fn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  background: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  border: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
} : undefined;

var arrows = {
  left: function left(props) {
    return BaseArrow(_extends({ fn: Right }, props));
  },
  top: function top(props) {
    return BaseArrow(_extends({ fn: Down }, props));
  },
  right: function right(props) {
    return BaseArrow(_extends({ fn: Left }, props));
  },
  bottom: function bottom(props) {
    return BaseArrow(_extends({ fn: Up }, props));
  }
};

var Arrow = function Arrow(_ref2) {
  var background = _ref2.background,
      border = _ref2.border,
      placement = _ref2.placement,
      width = _ref2.width;

  var Component = arrows[placement] || arrows.top;
  return width > 0 && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Component, { background: background, border: border, width: width });
};

Arrow.propTypes =  true ? {
  background: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  border: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ }),

/***/ "./node_modules/react-simple-tooltip/es/components/Bubble/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-simple-tooltip/es/components/Bubble/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n      color: ", ";\n      background: ", ";\n      border-radius: ", ";\n      border: 1px solid ", ";\n      padding: ", ";\n      font-size: ", ";\n      font-family: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n      border-radius: ", ";\n      border: 1px solid ", ";\n      padding: ", ";\n      font-size: ", ";\n      font-family: ", ";\n    "]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/** @jsx jsx */



var Bubble = function Bubble(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(
    "div",
    {
      css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, props.color ? props.color : "inherit", props.background ? props.background : "inherit", props.radius ? props.radius + "px" : 0, props.border, props.padding ? props.padding + "px" : 0, props.fontSize, props.fontFamily)
    },
    props.children
  );
};

Bubble.propTypes =  true ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  background: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  border: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (Bubble);

/***/ }),

/***/ "./node_modules/react-simple-tooltip/es/components/Tooltip/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-simple-tooltip/es/components/Tooltip/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/propTypes */ "./node_modules/react-simple-tooltip/es/utils/propTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(["\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n"], ["\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  animation: ", "ms ", " 0s 1 ", ";\n"], ["\n  animation: ", "ms ", " 0s 1 ", ";\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  ", ";\n  ", ";\n"], ["\n  position: absolute;\n  ", ";\n  ", ";\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  ", ";\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: ", "px;\n"], ["\n  ", ";\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: ", "px;\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  ", ";\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: ", "px;\n"], ["\n  ", ";\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: ", "px;\n"]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  ", ";\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-right: ", "px;\n"], ["\n  ", ";\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-right: ", "px;\n"]),
    _templateObject7 = _taggedTemplateLiteralLoose(["\n  ", ";\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-left: ", "px;\n"], ["\n  ", ";\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-left: ", "px;\n"]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/** @jsx jsx */




var fadeAnimation = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject);

var animation = function animation(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, props.fadeDuration, props.fadeEasing, fadeAnimation);
};

// prettier-ignore
var Base = function Base(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, props.fadeDuration && props.fadeDuration > 0 && animation(props), props.zIndex && "z-index: " + props.zIndex + ";");
};

var Top = function Top(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, Base(props), props.offset);
};

var Bottom = function Bottom(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, Base(props), props.offset);
};

var Left = function Left(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, Base(props), props.offset);
};

var Right = function Right(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, Base(props), props.offset);
};

var BaseToolTop = function BaseToolTop(_ref) {
  var fn = _ref.fn,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["fn", "children"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(
    "div",
    { css: fn(props) },
    children
  );
};

BaseToolTop.propTypes =  true ? {
  fn: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any.isRequired,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  open: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  fadeEasing: _utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["easingPropType"],
  fadeDuration: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
} : undefined;

var tooltips = {
  left: function left(_ref2) {
    var children = _ref2.children,
        props = _objectWithoutProperties(_ref2, ["children"]);

    return BaseToolTop(_extends({ fn: Left, children: children }, props));
  },
  top: function top(_ref3) {
    var children = _ref3.children,
        props = _objectWithoutProperties(_ref3, ["children"]);

    return BaseToolTop(_extends({ fn: Top, children: children }, props));
  },
  right: function right(_ref4) {
    var children = _ref4.children,
        props = _objectWithoutProperties(_ref4, ["children"]);

    return BaseToolTop(_extends({ fn: Right, children: children }, props));
  },
  bottom: function bottom(_ref5) {
    var children = _ref5.children,
        props = _objectWithoutProperties(_ref5, ["children"]);

    return BaseToolTop(_extends({ fn: Bottom, children: children }, props));
  }
};

var Tooltip = function Tooltip(_ref6) {
  var children = _ref6.children,
      offset = _ref6.offset,
      open = _ref6.open,
      placement = _ref6.placement,
      zIndex = _ref6.zIndex,
      fadeDuration = _ref6.fadeDuration,
      fadeEasing = _ref6.fadeEasing;

  var Component = tooltips[placement] || tooltips.top;
  return open && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(
    Component,
    {
      offset: offset,
      zIndex: zIndex,
      fadeDuration: fadeDuration,
      fadeEasing: fadeEasing
    },
    children
  );
};

Tooltip.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any.isRequired,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  open: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  fadeEasing: _utils_propTypes__WEBPACK_IMPORTED_MODULE_2__["easingPropType"],
  fadeDuration: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./node_modules/react-simple-tooltip/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-simple-tooltip/es/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _components_Arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Arrow */ "./node_modules/react-simple-tooltip/es/components/Arrow/index.js");
/* harmony import */ var _components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Tooltip */ "./node_modules/react-simple-tooltip/es/components/Tooltip/index.js");
/* harmony import */ var _components_Bubble__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Bubble */ "./node_modules/react-simple-tooltip/es/components/Bubble/index.js");
/* harmony import */ var _utils_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/propTypes */ "./node_modules/react-simple-tooltip/es/utils/propTypes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n          ", ";\n          ", "\n        "], ["\n          ", ";\n          ", "\n        "]);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/** @jsx jsx */









var ContainerCss = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject);

var Wrapper = function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      open: false
    };

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleTouch = _this.handleTouch.bind(_this);
    return _this;
  }

  Wrapper.prototype.handleMouseEnter = function handleMouseEnter() {
    this.setState({ open: true });
  };

  Wrapper.prototype.handleMouseLeave = function handleMouseLeave() {
    this.setState({ open: false });
  };

  Wrapper.prototype.handleTouch = function handleTouch() {
    var isOpen = this.state.open;
    this.setState({ open: !isOpen });
  };

  Wrapper.prototype.render = function render() {
    var open = this.state.open;

    var _props = this.props,
        arrow = _props.arrow,
        background = _props.background,
        border = _props.border,
        children = _props.children,
        color = _props.color,
        content = _props.content,
        customCss = _props.customCss,
        fadeDuration = _props.fadeDuration,
        fadeEasing = _props.fadeEasing,
        fixed = _props.fixed,
        fontFamily = _props.fontFamily,
        fontSize = _props.fontSize,
        offset = _props.offset,
        padding = _props.padding,
        placement = _props.placement,
        radius = _props.radius,
        zIndex = _props.zIndex,
        props = _objectWithoutProperties(_props, ["arrow", "background", "border", "children", "color", "content", "customCss", "fadeDuration", "fadeEasing", "fixed", "fontFamily", "fontSize", "offset", "padding", "placement", "radius", "zIndex"]);

    var hasTrigger = children !== undefined && children !== null;
    var tooltipElement = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(
      _components_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"],
      {
        open: !hasTrigger || fixed ? true : open,
        placement: placement,
        offset: offset + arrow,
        zIndex: zIndex,
        fadeEasing: fadeEasing,
        fadeDuration: fadeDuration
      },
      Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(
        _components_Bubble__WEBPACK_IMPORTED_MODULE_5__["default"],
        {
          background: background,
          border: border,
          color: color,
          radius: radius,
          fontFamily: fontFamily,
          fontSize: fontSize,
          padding: padding
        },
        Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Arrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: arrow,
          background: background,
          border: border,
          color: color,
          placement: placement
        }),
        content
      )
    );
    return hasTrigger ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(
      "div",
      _extends({
        onMouseEnter: !fixed ? this.handleMouseEnter : undefined,
        onMouseLeave: !fixed ? this.handleMouseLeave : undefined,
        onTouchEnd: !fixed ? this.handleTouch : undefined,
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2, ContainerCss, customCss)
      }, props),
      children,
      tooltipElement
    ) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(
      "div",
      _extends({
        css: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2, ContainerCss, customCss)
      }, props),
      tooltipElement
    );
  };

  return Wrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Wrapper.propTypes =  true ? {
  arrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  background: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  border: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  customCss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  fadeDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  fadeEasing: _utils_propTypes__WEBPACK_IMPORTED_MODULE_6__["easingPropType"],
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["left", "top", "right", "bottom"]),
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
} : undefined;

Wrapper.defaultProps = {
  arrow: 8,
  background: "#000",
  border: "#000",
  children: null,
  color: "#fff",
  fadeDuration: 0,
  fadeEasing: "linear",
  fixed: false,
  fontFamily: "inherit",
  fontSize: "inherit",
  offset: 0,
  padding: 16,
  placement: "top",
  radius: 0,
  zIndex: 1
};

Wrapper.displayName = "Tooltip.Wrapper";
_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"].displayName = "Tooltip";
_components_Bubble__WEBPACK_IMPORTED_MODULE_5__["default"].displayName = "Tooltip.Bubble";
_components_Arrow__WEBPACK_IMPORTED_MODULE_3__["default"].displayName = "Tooltip.Arrow";

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./node_modules/react-simple-tooltip/es/utils/propTypes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-simple-tooltip/es/utils/propTypes.js ***!
  \*****************************************************************/
/*! exports provided: easingPropType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easingPropType", function() { return easingPropType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var normalEasingPropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["linear", "ease", "ease-in", "ease-out", "ease-in-out"]);

// A regex to test if a string matches the CSS cubic-beizer format
// cubic-bezier(n,n,n,n)
// See: https://regex101.com/r/n2fAzV for details
var cubicEasingRegex = /^cubic-bezier\((-?((\d*\.\d+)|\d+),){3}(-?(\d*\.\d+)|\d+)\)$/;

var cubicEasingPropType = function cubicEasingPropType(props, propName, componentName) {
  if (!cubicEasingRegex.test(props[propName])) {
    return new Error("Invalid prop `" + propName + "` supplied to" + " `" + componentName + "`. Validation failed.");
  }
};

var easingPropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([normalEasingPropType, cubicEasingPropType]);



/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

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

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic =  false && false;
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ( true && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? Object(merge_anything__WEBPACK_IMPORTED_MODULE_8__["default"])(target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ( true && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ })

/******/ });
//# sourceMappingURL=client.js.map
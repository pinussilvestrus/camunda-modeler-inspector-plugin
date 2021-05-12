/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__.default(stylisOptions);

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
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheProvider": () => (/* reexport safe */ _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.C),
/* harmony export */   "ThemeContext": () => (/* reexport safe */ _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.T),
/* harmony export */   "withEmotionCache": () => (/* reexport safe */ _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.w),
/* harmony export */   "css": () => (/* reexport safe */ _emotion_css__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "ClassNames": () => (/* binding */ ClassNames),
/* harmony export */   "Global": () => (/* binding */ Global),
/* harmony export */   "createElement": () => (/* binding */ jsx),
/* harmony export */   "jsx": () => (/* binding */ jsx),
/* harmony export */   "keyframes": () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emotion-element-57a3a7a3.browser.esm.js */ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");











var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.h.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.E;
  createElementArgArray[1] = (0,_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */(0,_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.w)(function (props, cache) {
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
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.T.Consumer, null, function (theme) {
      var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([styles(theme)]);
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([styles]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__.StyleSheet({
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
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(this.props.cache, this.props.serialized.next, true);
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
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_7__.default.apply(void 0, arguments);
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
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = (0,_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.w)(function (props, context) {
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_emotion_element_57a3a7a3_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__.T.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)(args, context.registered);

      {
        (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(context, serialized, false);
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

/***/ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CacheProvider),
/* harmony export */   "E": () => (/* binding */ Emotion),
/* harmony export */   "T": () => (/* binding */ ThemeContext),
/* harmony export */   "c": () => (/* binding */ createEmotionProps),
/* harmony export */   "h": () => (/* binding */ hasOwnProperty),
/* harmony export */   "w": () => (/* binding */ withEmotionCache)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");






var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_2__.default)() : null);
var ThemeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};

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
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.insertStyles)(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(type, newProps);

  return ele;
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__.serializeStyles)(args);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeStyles": () => (/* binding */ serializeStyles)
/* harmony export */ });
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

var processStyleName = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__.default)(function (styleName) {
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

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__.default[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
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

  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__.default)(styles) + identifierName;

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleSheet": () => (/* binding */ StyleSheet)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegisteredStyles": () => (/* binding */ getRegisteredStyles),
/* harmony export */   "insertStyles": () => (/* binding */ insertStyles)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weakMemoize);


/***/ }),

/***/ "./client/InspectorModal.js":
/*!**********************************!*\
  !*** ./client/InspectorModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InspectorModal)
/* harmony export */ });
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/components */ "./node_modules/camunda-modeler-plugin-helpers/components.js");
/* harmony import */ var react_simple_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-tooltip */ "./node_modules/react-simple-tooltip/es/index.js");
/* harmony import */ var _InspectorView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InspectorView */ "./client/InspectorView.js");
/* harmony import */ var _json_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json.svg */ "./client/json.svg");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





 // polyfill upcoming structural components

const Title = camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Title || (({
  children
}) => /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, children));

const Body = camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body || (({
  children
}) => /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children));

const Footer = camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer || (({
  children
}) => /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children));

function InspectorModal({
  onClose,
  json
}) {
  const [definitions, setDefinitions] = (0,camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__.useState)(json);
  return /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onClose: onClose
  }, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, null, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_json_svg__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "inspector-icon-modal"
  }), " Object Tree Inspector"), /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Body, null, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InspectorView__WEBPACK_IMPORTED_MODULE_3__.default, {
    json: definitions,
    onChange: json => setDefinitions(json)
  })), /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inspector-buttons"
  }, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_simple_tooltip__WEBPACK_IMPORTED_MODULE_2__.default, {
    content: "Currently not available \uD83C\uDF85\uD83C\uDFFB",
    background: "white",
    border: "grey",
    color: "black",
    padding: 5,
    customCss: styled_components__WEBPACK_IMPORTED_MODULE_5__.css`white-space: nowrap; border-radius: 5px`,
    fixed: false
  }, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary",
    disabled: true,
    onClick: () => onClose(definitions)
  }, "Save")), /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-secondary",
    onClick: () => onClose()
  }, "Cancel"))));
}

/***/ }),

/***/ "./client/InspectorPlugin.js":
/*!***********************************!*\
  !*** ./client/InspectorPlugin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InspectorPlugin)
/* harmony export */ });
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/components */ "./node_modules/camunda-modeler-plugin-helpers/components.js");
/* harmony import */ var _InspectorModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InspectorModal */ "./client/InspectorModal.js");
/* harmony import */ var min_dash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! min-dash */ "./node_modules/min-dash/dist/index.esm.js");
/* harmony import */ var _json_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json.svg */ "./client/json.svg");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class InspectorPlugin extends camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
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
    const found = (0,min_dash__WEBPACK_IMPORTED_MODULE_4__.find)(this.state.modelers, m => m.tab === tab.id);
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
    return /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(camunda_modeler_plugin_helpers_components__WEBPACK_IMPORTED_MODULE_1__.Fill, {
      slot: "toolbar",
      group: "9_inspector"
    }, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_json_svg__WEBPACK_IMPORTED_MODULE_3__.default, {
      className: "inspector-icon",
      onClick: this.openModal
    })), this.state.modalOpen && /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InspectorModal__WEBPACK_IMPORTED_MODULE_2__.default, {
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

  (0,min_dash__WEBPACK_IMPORTED_MODULE_4__.forEach)(sources, function (source) {
    // skip non-obj sources, i.e. null
    if (!source || !(0,min_dash__WEBPACK_IMPORTED_MODULE_4__.isObject)(source)) {
      return;
    }

    target.$descriptor = source.$descriptor || target.$descriptor;
    (0,min_dash__WEBPACK_IMPORTED_MODULE_4__.forEach)(Object.getOwnPropertyNames(source), function (key) {
      const sourceVal = source[key];

      if (key === '__proto__') {
        return;
      }

      let targetVal = target[key];

      if ((0,min_dash__WEBPACK_IMPORTED_MODULE_4__.isObject)(sourceVal)) {
        if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_4__.isObject)(targetVal)) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InspectorView)
/* harmony export */ });
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers/react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_json_editor_ajrm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-json-editor-ajrm */ "./node_modules/react-json-editor-ajrm/es/index.js");
/* harmony import */ var react_json_editor_ajrm_locale_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-json-editor-ajrm/locale/en */ "./node_modules/react-json-editor-ajrm/locale/en.js");
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

  return /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/camunda_modeler_plugin_helpers_react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_json_editor_ajrm__WEBPACK_IMPORTED_MODULE_1__.default, {
    id: "json-editor",
    placeholder: json,
    onChange: handleChange,
    locale: react_json_editor_ajrm_locale_en__WEBPACK_IMPORTED_MODULE_2__.default,
    onKeyPressUpdate: false,
    height: "500px",
    width: "100%",
    confirmGood: false,
    viewOnly: true
  }));
} // helpers /////

const skipKeys = ['bpmnElement', '$parent', 'outgoing', 'incoming'];

function ensureAllProps(target, source) {
  (0,min_dash__WEBPACK_IMPORTED_MODULE_3__.forEach)(Object.getOwnPropertyNames(source), key => {
    const sourceVal = source[key];

    if (key === '__proto__') {
      return;
    }

    if (skipKeys.includes(key)) {
      target[key] = (source[key] || {}).id;
      return target;
    }

    let targetVal = target[key];

    if ((0,min_dash__WEBPACK_IMPORTED_MODULE_3__.isObject)(sourceVal)) {
      if (!(0,min_dash__WEBPACK_IMPORTED_MODULE_3__.isObject)(targetVal)) {
        // override target[key] with object
        targetVal = {};
      }

      target[key] = ensureAllProps(targetVal, sourceVal);
    } else if ((0,min_dash__WEBPACK_IMPORTED_MODULE_3__.isArray)(sourceVal)) {
      target[key] = (0,min_dash__WEBPACK_IMPORTED_MODULE_3__.map)(sourceVal, s => ensureAllProps({}, s));
    } else {
      target[key] = sourceVal;
    }
  });
  return target;
}

/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/components.js":
/*!*******************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/components.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fill": () => (/* binding */ Fill),
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerClientPlugin": () => (/* binding */ registerClientPlugin),
/* harmony export */   "registerClientExtension": () => (/* binding */ registerClientExtension),
/* harmony export */   "registerBpmnJSPlugin": () => (/* binding */ registerBpmnJSPlugin),
/* harmony export */   "registerBpmnJSModdleExtension": () => (/* binding */ registerBpmnJSModdleExtension),
/* harmony export */   "getModelerDirectory": () => (/* binding */ getModelerDirectory),
/* harmony export */   "getPluginsDirectory": () => (/* binding */ getPluginsDirectory)
/* harmony export */ });
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
/***/ ((module) => {

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

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
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
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/min-dash/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/min-dash/dist/index.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "ensureArray": () => (/* binding */ ensureArray),
/* harmony export */   "every": () => (/* binding */ every),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "findIndex": () => (/* binding */ findIndex),
/* harmony export */   "flatten": () => (/* binding */ flatten),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "groupBy": () => (/* binding */ groupBy),
/* harmony export */   "has": () => (/* binding */ has),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isDefined": () => (/* binding */ isDefined),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isNil": () => (/* binding */ isNil),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "matchPattern": () => (/* binding */ matchPattern),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "omit": () => (/* binding */ omit),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "reduce": () => (/* binding */ reduce),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "size": () => (/* binding */ size),
/* harmony export */   "some": () => (/* binding */ some),
/* harmony export */   "sortBy": () => (/* binding */ sortBy),
/* harmony export */   "throttle": () => (/* binding */ throttle),
/* harmony export */   "unionBy": () => (/* binding */ unionBy),
/* harmony export */   "uniqueBy": () => (/* binding */ uniqueBy),
/* harmony export */   "values": () => (/* binding */ values),
/* harmony export */   "without": () => (/* binding */ without)
/* harmony export */ });
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
 * Sets a nested property of a given object to the specified value.
 *
 * This mutates the object and returns it.
 *
 * @param {Object} target The target of the set operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} value The value to set.
 */

function set(target, path, value) {
  var currentTarget = target;
  forEach(path, function (key, idx) {
    if (key === '__proto__') {
      throw new Error('illegal key: __proto__');
    }

    var nextKey = path[idx + 1];
    var nextTarget = currentTarget[key];

    if (isDefined(nextKey) && isNil(nextTarget)) {
      nextTarget = currentTarget[key] = isNaN(+nextKey) ? {} : [];
    }

    if (isUndefined(nextKey)) {
      if (isUndefined(value)) {
        delete currentTarget[key];
      } else {
        currentTarget[key] = value;
      }
    } else {
      currentTarget = nextTarget;
    }
  });
  return target;
}
/**
 * Gets a nested property of a given object.
 *
 * @param {Object} target The target of the get operation.
 * @param {(string|number)[]} path The path to the nested value.
 * @param {any} [defaultValue] The value to return if no value exists.
 */

function get(target, path, defaultValue) {
  var currentTarget = target;
  forEach(path, function (key) {
    // accessing nil property yields <undefined>
    if (isNil(currentTarget)) {
      currentTarget = undefined;
      return false;
    }

    currentTarget = currentTarget[key];
  });
  return isUndefined(currentTarget) ? defaultValue : currentTarget;
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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
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
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

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
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/err.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/err.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    if ((0,_mitsuketa__WEBPACK_IMPORTED_MODULE_0__.getType)(param) !== type.toLowerCase()) err.throwError(err.getCaller(2), paramName, 'to be type ' + type.toLowerCase());
  },
  isAnyTypeOf: (paramName = '<unknown parameter>', param, types = []) => {
    types.forEach(type => {
      if ((0,_mitsuketa__WEBPACK_IMPORTED_MODULE_0__.getType)(param) === type) err.throwError(err.getCaller(2), paramName, 'not to be type of ' + type.toLowerCase());
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
      const location = (0,_mitsuketa__WEBPACK_IMPORTED_MODULE_0__.locate)(param, value);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (err);

/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes */ "./node_modules/react-json-editor-ajrm/es/themes.js");
/* harmony import */ var _mitsuketa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mitsuketa */ "./node_modules/react-json-editor-ajrm/es/mitsuketa/index.js");
/* harmony import */ var _mitsuketa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mitsuketa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _err__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./err */ "./node_modules/react-json-editor-ajrm/es/err.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale */ "./node_modules/react-json-editor-ajrm/es/locale/index.js");
/* harmony import */ var _locale_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale/en */ "./node_modules/react-json-editor-ajrm/es/locale/en.js");
/** @license react-json-editor-ajrm v2.5.13
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








class JSONInput extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
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
        theme = _themes__WEBPACK_IMPORTED_MODULE_2__.default.dark_vscode_tribute;
    if ('theme' in this.props) if (typeof this.props.theme === 'string') if (this.props.theme in _themes__WEBPACK_IMPORTED_MODULE_2__.default) theme = _themes__WEBPACK_IMPORTED_MODULE_2__.default[this.props.theme];
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
          error = this.props.error || this.state.error,
          colors = this.colors,
          style = this.style,
          confirmGood = this.confirmGood,
          totalHeight = this.totalHeight,
          totalWidth = this.totalWidth,
          hasError = !!this.props.error || (error ? 'token' in error : false);
    this.renderCount++;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      name: "outer-box",
      id: id && id + '-outer-box',
      style: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.default)({
        display: 'block',
        overflow: 'none',
        height: totalHeight,
        width: totalWidth,
        margin: 0,
        boxSizing: 'border-box',
        position: 'relative'
      }, style.outerBox)
    }, confirmGood ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
      height: "30px",
      width: "30px",
      viewBox: "0 0 100 100"
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "green",
      opacity: "0.85",
      d: "M39.363,79L16,55.49l11.347-11.419L39.694,56.49L72.983,23L84,34.085L39.363,79z"
    }))) : void 0, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      name: "container",
      id: id && id + '-container',
      style: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.default)({
        display: 'block',
        height: totalHeight,
        width: totalWidth,
        margin: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        fontFamily: 'Roboto, sans-serif'
      }, style.container),
      onClick: this.onClick
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      name: "warning-box",
      id: id && id + '-warning-box',
      style: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.default)({
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      },
      onClick: this.onClick
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
      height: "25px",
      width: "25px",
      viewBox: "0 0 100 100"
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "red",
      d: "M73.9,5.75c0.467-0.467,1.067-0.7,1.8-0.7c0.7,0,1.283,0.233,1.75,0.7l16.8,16.8  c0.467,0.5,0.7,1.084,0.7,1.75c0,0.733-0.233,1.334-0.7,1.801L70.35,50l23.9,23.95c0.5,0.467,0.75,1.066,0.75,1.8  c0,0.667-0.25,1.25-0.75,1.75l-16.8,16.75c-0.534,0.467-1.117,0.7-1.75,0.7s-1.233-0.233-1.8-0.7L50,70.351L26.1,94.25  c-0.567,0.467-1.167,0.7-1.8,0.7c-0.667,0-1.283-0.233-1.85-0.7L5.75,77.5C5.25,77,5,76.417,5,75.75c0-0.733,0.25-1.333,0.75-1.8  L29.65,50L5.75,26.101C5.25,25.667,5,25.066,5,24.3c0-0.666,0.25-1.25,0.75-1.75l16.8-16.8c0.467-0.467,1.05-0.7,1.75-0.7  c0.733,0,1.333,0.233,1.8,0.7L50,29.65L73.9,5.75z"
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
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
    }, this.renderErrorMessage())), react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      name: "body",
      id: id && id + '-body',
      style: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.default)({
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      name: "labels",
      id: id && id + '-labels',
      ref: ref => this.refLabels = ref,
      style: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.default)({
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
    }, this.renderLabels()), react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      id: id,
      ref: ref => this.refContent = ref,
      contentEditable: true,
      style: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.default)({
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
    const locale = this.props.locale || _locale_en__WEBPACK_IMPORTED_MODULE_3__.default,
          error = this.props.error || this.state.error,
          style = this.style;
    if (!error) return void 0;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      style: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.default)({
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
    }, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.format, error));
  }

  renderLabels() {
    const colors = this.colors,
          style = this.style,
          error = this.props.error || this.state.error,
          errorLine = error ? error.line : -1,
          lines = this.state.lines ? this.state.lines : 1;
    let labels = new Array(lines);

    for (var i = 0; i < lines - 1; i++) labels[i] = i + 1;

    return labels.map(number => {
      const color = number !== errorLine ? colors.default : 'red';
      return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        key: number,
        style: (0,_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.default)({}, style.labels, {
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
      document.execCommand('insertText', false, text);
    }

    this.update();
  }

  onClick() {
    if ('viewOnly' in this.props) if (this.props.viewOnly) return;
  }

  onBlur() {
    if ('viewOnly' in this.props) if (this.props.viewOnly) return;
    const container = this.refContent,
          data = this.tokenize(container);
    if ('onBlur' in this.props) this.props.onBlur({
      plainText: data.indented,
      markupText: data.markup,
      json: data.json,
      jsObject: data.jsObject,
      lines: data.lines,
      error: data.error
    });
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
    const placeholderDataType = (0,_mitsuketa__WEBPACK_IMPORTED_MODULE_5__.getType)(placeholder);
    const unexpectedDataType = ['object', 'array'].indexOf(placeholderDataType) === -1;
    if (unexpectedDataType) _err__WEBPACK_IMPORTED_MODULE_6__.default.throwError('showPlaceholder', 'placeholder', 'either an object or an array');
    const samePlaceholderValues = (0,_mitsuketa__WEBPACK_IMPORTED_MODULE_5__.identical)(placeholder, prevPlaceholder); // Component will always re-render when new placeholder value is any different from previous placeholder value.

    let componentShouldUpdate = !samePlaceholderValues;

    if (!componentShouldUpdate) {
      if (resetConfiguration) {
        /**
         * If 'reset' property is set true or is truthy,
         * any difference between placeholder and current value
         * should trigger component re-render
         */
        if (jsObject !== undefined) componentShouldUpdate = !(0,_mitsuketa__WEBPACK_IMPORTED_MODULE_5__.identical)(placeholder, jsObject);
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
    const locale = this.props.locale || _locale_en__WEBPACK_IMPORTED_MODULE_3__.default;
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
                  setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.prohibited, {
                    firstToken: buffer.tokens_merge[found].string,
                    secondToken: string
                  }));
                  break;
                }

                if (string === '[' && i > 0) if (!followsSymbol(i, [':', '[', ','])) {
                  setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.permitted, {
                    firstToken: "[",
                    secondToken: [":", "[", ","]
                  }));
                  break;
                }
                if (string === '{') if (followsSymbol(i, ['{'])) {
                  setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.double, {
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
                  setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.brace.curly.missingOpen));
                  break;
                }
                if (string === '}') if (followsSymbol(i, [','])) {
                  setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.prohibited, {
                    firstToken: ",",
                    secondToken: "}"
                  }));
                  break;
                }
                if (string === ']') if (buffer2.brackets[buffer2.brackets.length - 1] !== '[') {
                  setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.brace.square.missingOpen));
                  break;
                }
                if (string === ']') if (followsSymbol(i, [':'])) {
                  setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.prohibited, {
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
                    setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.brace.curly.cannotWrap, {
                      token: ","
                    }));
                    break;
                  }

                  setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.prohibited, {
                    firstToken: "{",
                    secondToken: ","
                  }));
                  break;
                }

                if (followedBySymbol(i, ['}', ',', ']'])) {
                  setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.noTrailingOrLeadingComma));
                  break;
                }

                found = typeFollowed(i);

                switch (found) {
                  case 'key':
                  case 'colon':
                    setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.termSequence.prohibited, {
                      firstTerm: found === 'key' ? locale.types.key : locale.symbols.colon,
                      secondTerm: locale.symbols.comma
                    }));
                    break;

                  case 'symbol':
                    if (followsSymbol(i, ['{'])) {
                      setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.prohibited, {
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
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.brace.square.cannotWrap, {
                token: ":"
              }));
              break;
            }

            if (found) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.prohibited, {
                firstToken: "[",
                secondToken: ":"
              }));
              break;
            }

            if (typeFollowed(i) !== 'key') {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.termSequence.permitted, {
                firstTerm: locale.symbols.colon,
                secondTerm: locale.types.key
              }));
              break;
            }

            if (followedBySymbol(i, ['}', ']'])) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.termSequence.permitted, {
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
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.string.missingOpen, {
                quote: firstChar
              }));
              break;
            }
            if (quotes.indexOf(lastChar) === -1) if (quotes.indexOf(firstChar) !== -1) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.string.missingClose, {
                quote: firstChar
              }));
              break;
            }
            if (quotes.indexOf(firstChar) > -1) if (firstChar !== lastChar) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.string.missingClose, {
                quote: firstChar
              }));
              break;
            }
            if ('string' === type) if (quotes.indexOf(firstChar) === -1 && quotes.indexOf(lastChar) === -1) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.string.mustBeWrappedByQuotes));
              break;
            }
            if ('key' === type) if (followedBySymbol(i, ['}', ']'])) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.termSequence.permitted, {
                firstTerm: locale.types.key,
                secondTerm: locale.symbols.colon
              }));
            }
            if (quotes.indexOf(firstChar) === -1 && quotes.indexOf(lastChar) === -1) for (var h = 0; h < string.length; h++) {
              if (error) break;
              const c = string.charAt(h);

              if (alphanumeric.indexOf(c) === -1) {
                setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.string.nonAlphanumeric, {
                  token: c
                }));
                break;
              }
            }
            if (firstChar === "'") string = '"' + string.slice(1, -1) + '"';else if (firstChar !== '"') string = '"' + string + '"';
            if ('key' === type) if ('key' === typeFollowed(i)) {
              if (i > 0) if (!isNaN(buffer.tokens_merge[i - 1])) {
                buffer.tokens_merge[i - 1] += buffer.tokens_merge[i];
                setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.key.numberAndLetterMissingQuotes));
                break;
              }
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.key.spaceMissingQuotes));
              break;
            }
            if ('key' === type) if (!followsSymbol(i, ['{', ','])) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.permitted, {
                firstToken: type,
                secondToken: ["{", ","]
              }));
              break;
            }
            if ('string' === type) if (!followsSymbol(i, ['[', ':', ','])) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.permitted, {
                firstToken: type,
                secondToken: ["[", ":", ","]
              }));
              break;
            }
            if ('key' === type) if (buffer2.isValue) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.string.unexpectedKey));
              break;
            }
            if ('string' === type) if (!buffer2.isValue) {
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.key.unexpectedString));
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
              setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.tokenSequence.permitted, {
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
            if (type === 'primitive') if (string === 'undefined') setError(i, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.useInstead, {
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
          setError(_tokenPosition, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.brace[_closingBracketType === ']' ? 'square' : 'curly'].missingClose));
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
              setError(tokenIndex, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.unexpected, {
                token: '\\'
              }));
            }
            backslashCount = 0;
          }
        }

        if (!error) setError(tokenIndex, (0,_locale__WEBPACK_IMPORTED_MODULE_4__.format)(locale.invalidToken.unexpected, {
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
        return true;
      }

      function extract(string, position) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSONInput);

/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/locale/en.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/locale/en.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": () => (/* binding */ format)
/* harmony export */ });
// Allows us to pass arrays and numbers instead of just strings to the format function.
const stringify = arg => Array.isArray(arg) ? arg.join(", ") : typeof arg === "string" ? arg : "" + arg; // Replaces a string with the values of an object. Google "format unicorn" on an explanation of how to use.


const format = (str, args) => args ? Object.keys(args).reduce((str, arg) => str.replace(new RegExp(`\\{${arg}\\}`, 'gi'), stringify(args[arg])), str) : str;



/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/es/mitsuketa/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/es/mitsuketa/index.js ***!
  \*******************************************************************/
/***/ ((module, exports) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themes);

/***/ }),

/***/ "./node_modules/react-json-editor-ajrm/locale/en.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-json-editor-ajrm/locale/en.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject, props.width, props.width, props.background);
};

var Up = function Up(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2, Base(props), props.border, props.border);
};
var Down = function Down(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3, Base(props), props.border, props.border);
};
var Left = function Left(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4, Base(props), props.border, props.border);
};

var Right = function Right(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5, Base(props), props.border, props.border);
};

var BaseArrow = function BaseArrow(_ref) {
  var fn = _ref.fn,
      props = _objectWithoutProperties(_ref, ["fn"]);

  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { css: fn(props) });
};

BaseArrow.propTypes =  true ? {
  fn: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),
  background: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  border: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired)
} : 0;

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
  return width > 0 && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, { background: background, border: border, width: width });
};

Arrow.propTypes =  true ? {
  background: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  border: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  placement: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired)
} : 0;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arrow);

/***/ }),

/***/ "./node_modules/react-simple-tooltip/es/components/Bubble/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-simple-tooltip/es/components/Bubble/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n      color: ", ";\n      background: ", ";\n      border-radius: ", ";\n      border: 1px solid ", ";\n      padding: ", ";\n      font-size: ", ";\n      font-family: ", ";\n    "], ["\n      color: ", ";\n      background: ", ";\n      border-radius: ", ";\n      border: 1px solid ", ";\n      padding: ", ";\n      font-size: ", ";\n      font-family: ", ";\n    "]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/** @jsx jsx */



var Bubble = function Bubble(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    "div",
    {
      css: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject, props.color ? props.color : "inherit", props.background ? props.background : "inherit", props.radius ? props.radius + "px" : 0, props.border, props.padding ? props.padding + "px" : 0, props.fontSize, props.fontFamily)
    },
    props.children
  );
};

Bubble.propTypes =  true ? {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  background: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  border: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  padding: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  radius: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)]),
  fontSize: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  fontFamily: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array)
} : 0;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bubble);

/***/ }),

/***/ "./node_modules/react-simple-tooltip/es/components/Tooltip/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-simple-tooltip/es/components/Tooltip/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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




var fadeAnimation = (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject);

var animation = function animation(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2, props.fadeDuration, props.fadeEasing, fadeAnimation);
};

// prettier-ignore
var Base = function Base(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3, props.fadeDuration && props.fadeDuration > 0 && animation(props), props.zIndex && "z-index: " + props.zIndex + ";");
};

var Top = function Top(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4, Base(props), props.offset);
};

var Bottom = function Bottom(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5, Base(props), props.offset);
};

var Left = function Left(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject6, Base(props), props.offset);
};

var Right = function Right(props) {
  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject7, Base(props), props.offset);
};

var BaseToolTop = function BaseToolTop(_ref) {
  var fn = _ref.fn,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["fn", "children"]);

  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    "div",
    { css: fn(props) },
    children
  );
};

BaseToolTop.propTypes =  true ? {
  fn: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any.isRequired),
  offset: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  zIndex: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  fadeEasing: _utils_propTypes__WEBPACK_IMPORTED_MODULE_2__.easingPropType,
  fadeDuration: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
} : 0;

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
  return open && (0,_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(
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
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any.isRequired),
  offset: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  placement: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  zIndex: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  fadeEasing: _utils_propTypes__WEBPACK_IMPORTED_MODULE_2__.easingPropType,
  fadeDuration: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
} : 0;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

/***/ }),

/***/ "./node_modules/react-simple-tooltip/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-simple-tooltip/es/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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









var ContainerCss = (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject);

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
    var tooltipElement = (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(
      _components_Tooltip__WEBPACK_IMPORTED_MODULE_4__.default,
      {
        open: !hasTrigger || fixed ? true : open,
        placement: placement,
        offset: offset + arrow,
        zIndex: zIndex,
        fadeEasing: fadeEasing,
        fadeDuration: fadeDuration
      },
      (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(
        _components_Bubble__WEBPACK_IMPORTED_MODULE_5__.default,
        {
          background: background,
          border: border,
          color: color,
          radius: radius,
          fontFamily: fontFamily,
          fontSize: fontSize,
          padding: padding
        },
        (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Arrow__WEBPACK_IMPORTED_MODULE_3__.default, {
          width: arrow,
          background: background,
          border: border,
          color: color,
          placement: placement
        }),
        content
      )
    );
    return hasTrigger ? (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(
      "div",
      _extends({
        onMouseEnter: !fixed ? this.handleMouseEnter : undefined,
        onMouseLeave: !fixed ? this.handleMouseLeave : undefined,
        onTouchEnd: !fixed ? this.handleTouch : undefined,
        css: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject2, ContainerCss, customCss)
      }, props),
      children,
      tooltipElement
    ) : (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.jsx)(
      "div",
      _extends({
        css: (0,_emotion_core__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject2, ContainerCss, customCss)
      }, props),
      tooltipElement
    );
  };

  return Wrapper;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Wrapper.propTypes =  true ? {
  arrow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  background: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  border: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any.isRequired),
  customCss: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  fadeDuration: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  fadeEasing: _utils_propTypes__WEBPACK_IMPORTED_MODULE_6__.easingPropType,
  fixed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fontFamily: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  fontSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  offset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  padding: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["left", "top", "right", "bottom"]),
  radius: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  zIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
} : 0;

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
_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__.default.displayName = "Tooltip";
_components_Bubble__WEBPACK_IMPORTED_MODULE_5__.default.displayName = "Tooltip.Bubble";
_components_Arrow__WEBPACK_IMPORTED_MODULE_3__.default.displayName = "Tooltip.Arrow";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./node_modules/react-simple-tooltip/es/utils/propTypes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-simple-tooltip/es/utils/propTypes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easingPropType": () => (/* binding */ easingPropType)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var normalEasingPropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["linear", "ease", "ease-in", "ease-out", "ease-in-out"]);

// A regex to test if a string matches the CSS cubic-beizer format
// cubic-bezier(n,n,n,n)
// See: https://regex101.com/r/n2fAzV for details
var cubicEasingRegex = /^cubic-bezier\((-?((\d*\.\d+)|\d+),){3}(-?(\d*\.\d+)|\d+)\)$/;

var cubicEasingPropType = function cubicEasingPropType(props, propName, componentName) {
  if (!cubicEasingRegex.test(props[propName])) {
    return new Error("Invalid prop `" + propName + "` supplied to" + " `" + componentName + "`. Validation failed.");
  }
};

var easingPropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([normalEasingPropType, cubicEasingPropType]);



/***/ }),

/***/ "./client/json.svg":
/*!*************************!*\
  !*** ./client/json.svg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  styles = {},
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
  "aria-hidden": "true",
  "data-prefix": "fab",
  "data-icon": "js-square",
  className: (styles["svg-inline--fa"] || "svg-inline--fa") + " " + (styles["fa-js-square"] || "fa-js-square") + " " + (styles["fa-w-14"] || "fa-w-14"),
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
  fill: "currentColor",
  d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
})));

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ServerStyleSheet": () => (/* binding */ Ue),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ le),
/* harmony export */   "StyleSheetContext": () => (/* binding */ ue),
/* harmony export */   "StyleSheetManager": () => (/* binding */ ye),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Le),
/* harmony export */   "ThemeContext": () => (/* binding */ ze),
/* harmony export */   "ThemeProvider": () => (/* binding */ Ge),
/* harmony export */   "__PRIVATE__": () => (/* binding */ Ze),
/* harmony export */   "createGlobalStyle": () => (/* binding */ $e),
/* harmony export */   "css": () => (/* binding */ Ae),
/* harmony export */   "isStyledComponent": () => (/* binding */ N),
/* harmony export */   "keyframes": () => (/* binding */ We),
/* harmony export */   "useTheme": () => (/* binding */ Xe),
/* harmony export */   "version": () => (/* binding */ C),
/* harmony export */   "withTheme": () => (/* binding */ Je)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/camunda-modeler-plugin-helpers/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.0",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.3.0"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.0");var s=q();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=M(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=A+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.0"),ie=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var i=Ne(this.rules,e,t,n).join(""),s=ee(te(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,i=void 0===e?E:e,s=i.options,a=void 0===s?E:s,c=i.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__.default(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,i){return 0===r&&-1!==ae.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(se,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],i=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=Ne(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!_e(t[s])&&(S(t[s])?i.push.apply(i,e(t[s],s)):b(t[s])?i.push(be(s)+":",t[s],";"):i.push(be(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__.default?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),Ie.has(n)||(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(xe(s))for(var a in s)Ve(a)&&Be(e,s[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),Le=ze.Consumer;function Ge(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),s=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.0"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new ie(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in b(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t]})),[r,o]}(Oe(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),i=me(),s=t?e.generateAndInjectStyles(E,o,i):e.generateAndInjectStyles(n,o,i);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(s), true&&!t&&r&&r(s),s}(s,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default,_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default)(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:i}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},s&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var i=function(){return t(r,o,Ae.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(s)),u=new He(s,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&s.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var i=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,i,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),i=Te(o);return new ve(i,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),s=e.defaultProps,a=Oe(t,o,s);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze)},Ze={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var _InspectorPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectorPlugin */ "./client/InspectorPlugin.js");


(0,camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__.registerClientExtension)(_InspectorPlugin__WEBPACK_IMPORTED_MODULE_1__.default);
})();

/******/ })()
;
//# sourceMappingURL=client.js.map
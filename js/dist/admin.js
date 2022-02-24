module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.ts":
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.tsx");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/dayjs/plugin/duration.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/duration.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, s) {
   true ? module.exports = s() : undefined;
}(this, function () {
  "use strict";

  var t,
      s,
      n = 1e3,
      i = 6e4,
      e = 36e5,
      r = 864e5,
      o = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      u = 31536e6,
      h = 2592e6,
      a = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
      d = {
    years: u,
    months: h,
    days: r,
    hours: e,
    minutes: i,
    seconds: n,
    milliseconds: 1,
    weeks: 6048e5
  },
      c = function c(t) {
    return t instanceof p;
  },
      f = function f(t, s, n) {
    return new p(t, n, s.$l);
  },
      m = function m(t) {
    return s.p(t) + "s";
  },
      l = function l(t) {
    return t < 0;
  },
      $ = function $(t) {
    return l(t) ? Math.ceil(t) : Math.floor(t);
  },
      y = function y(t) {
    return Math.abs(t);
  },
      g = function g(t, s) {
    return t ? l(t) ? {
      negative: !0,
      format: "" + y(t) + s
    } : {
      negative: !1,
      format: "" + t + s
    } : {
      negative: !1,
      format: ""
    };
  },
      p = function () {
    function l(t, s, n) {
      var i = this;
      if (this.$d = {}, this.$l = n, void 0 === t && (this.$ms = 0, this.parseFromMilliseconds()), s) return f(t * d[m(s)], this);
      if ("number" == typeof t) return this.$ms = t, this.parseFromMilliseconds(), this;
      if ("object" == typeof t) return Object.keys(t).forEach(function (s) {
        i.$d[m(s)] = t[s];
      }), this.calMilliseconds(), this;

      if ("string" == typeof t) {
        var e = t.match(a);

        if (e) {
          var r = e.slice(2).map(function (t) {
            return null != t ? Number(t) : 0;
          });
          return this.$d.years = r[0], this.$d.months = r[1], this.$d.weeks = r[2], this.$d.days = r[3], this.$d.hours = r[4], this.$d.minutes = r[5], this.$d.seconds = r[6], this.calMilliseconds(), this;
        }
      }

      return this;
    }

    var y = l.prototype;
    return y.calMilliseconds = function () {
      var t = this;
      this.$ms = Object.keys(this.$d).reduce(function (s, n) {
        return s + (t.$d[n] || 0) * d[n];
      }, 0);
    }, y.parseFromMilliseconds = function () {
      var t = this.$ms;
      this.$d.years = $(t / u), t %= u, this.$d.months = $(t / h), t %= h, this.$d.days = $(t / r), t %= r, this.$d.hours = $(t / e), t %= e, this.$d.minutes = $(t / i), t %= i, this.$d.seconds = $(t / n), t %= n, this.$d.milliseconds = t;
    }, y.toISOString = function () {
      var t = g(this.$d.years, "Y"),
          s = g(this.$d.months, "M"),
          n = +this.$d.days || 0;
      this.$d.weeks && (n += 7 * this.$d.weeks);
      var i = g(n, "D"),
          e = g(this.$d.hours, "H"),
          r = g(this.$d.minutes, "M"),
          o = this.$d.seconds || 0;
      this.$d.milliseconds && (o += this.$d.milliseconds / 1e3);
      var u = g(o, "S"),
          h = t.negative || s.negative || i.negative || e.negative || r.negative || u.negative,
          a = e.format || r.format || u.format ? "T" : "",
          d = (h ? "-" : "") + "P" + t.format + s.format + i.format + a + e.format + r.format + u.format;
      return "P" === d || "-P" === d ? "P0D" : d;
    }, y.toJSON = function () {
      return this.toISOString();
    }, y.format = function (t) {
      var n = t || "YYYY-MM-DDTHH:mm:ss",
          i = {
        Y: this.$d.years,
        YY: s.s(this.$d.years, 2, "0"),
        YYYY: s.s(this.$d.years, 4, "0"),
        M: this.$d.months,
        MM: s.s(this.$d.months, 2, "0"),
        D: this.$d.days,
        DD: s.s(this.$d.days, 2, "0"),
        H: this.$d.hours,
        HH: s.s(this.$d.hours, 2, "0"),
        m: this.$d.minutes,
        mm: s.s(this.$d.minutes, 2, "0"),
        s: this.$d.seconds,
        ss: s.s(this.$d.seconds, 2, "0"),
        SSS: s.s(this.$d.milliseconds, 3, "0")
      };
      return n.replace(o, function (t, s) {
        return s || String(i[t]);
      });
    }, y.as = function (t) {
      return this.$ms / d[m(t)];
    }, y.get = function (t) {
      var s = this.$ms,
          n = m(t);
      return "milliseconds" === n ? s %= 1e3 : s = "weeks" === n ? $(s / d[n]) : this.$d[n], 0 === s ? 0 : s;
    }, y.add = function (t, s, n) {
      var i;
      return i = s ? t * d[m(s)] : c(t) ? t.$ms : f(t, this).$ms, f(this.$ms + i * (n ? -1 : 1), this);
    }, y.subtract = function (t, s) {
      return this.add(t, s, !0);
    }, y.locale = function (t) {
      var s = this.clone();
      return s.$l = t, s;
    }, y.clone = function () {
      return f(this.$ms, this);
    }, y.humanize = function (s) {
      return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s);
    }, y.milliseconds = function () {
      return this.get("milliseconds");
    }, y.asMilliseconds = function () {
      return this.as("milliseconds");
    }, y.seconds = function () {
      return this.get("seconds");
    }, y.asSeconds = function () {
      return this.as("seconds");
    }, y.minutes = function () {
      return this.get("minutes");
    }, y.asMinutes = function () {
      return this.as("minutes");
    }, y.hours = function () {
      return this.get("hours");
    }, y.asHours = function () {
      return this.as("hours");
    }, y.days = function () {
      return this.get("days");
    }, y.asDays = function () {
      return this.as("days");
    }, y.weeks = function () {
      return this.get("weeks");
    }, y.asWeeks = function () {
      return this.as("weeks");
    }, y.months = function () {
      return this.get("months");
    }, y.asMonths = function () {
      return this.as("months");
    }, y.years = function () {
      return this.get("years");
    }, y.asYears = function () {
      return this.as("years");
    }, l;
  }();

  return function (n, i, e) {
    t = e, s = e().$utils(), e.duration = function (t, s) {
      var n = e.locale();
      return f(t, {
        $l: n
      }, s);
    }, e.isDuration = c;
    var r = i.prototype.add,
        o = i.prototype.subtract;
    i.prototype.add = function (t, s) {
      return c(t) && (t = t.asMilliseconds()), r.bind(this)(t, s);
    }, i.prototype.subtract = function (t, s) {
      return c(t) && (t = t.asMilliseconds()), o.bind(this)(t, s);
    };
  };
});

/***/ }),

/***/ "./src/admin/components/ControlSection.tsx":
/*!*************************************************!*\
  !*** ./src/admin/components/ControlSection.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlSection; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Installer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Installer */ "./src/admin/components/Installer.tsx");
/* harmony import */ var _Updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Updater */ "./src/admin/components/Updater.tsx");







var ControlSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ControlSection, _Component);

  function ControlSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ControlSection.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "ExtensionPage-permissions PackageManager-controlSection"
    }, m("div", {
      className: "ExtensionPage-permissions-header"
    }, m("div", {
      className: "container"
    }, m("h2", {
      className: "ExtensionTitle"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.sections.control.title')))), m("div", {
      className: "container"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.data['flarum-package-manager.writable_dirs'] ? m('[', null, m(_Installer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      queueState: this.attrs.queueState
    }), m(_Updater__WEBPACK_IMPORTED_MODULE_5__["default"], {
      queueState: this.attrs.queueState
    })) : m("div", {
      className: "Form-group"
    }, m(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "warning",
      dismissible: false
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.file_permissions')))));
  };

  return ControlSection;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/ExtensionItem.tsx":
/*!************************************************!*\
  !*** ./src/admin/components/ExtensionItem.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtensionItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _WhyNotModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WhyNotModal */ "./src/admin/components/WhyNotModal.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Label */ "./src/admin/components/Label.tsx");









/*
 * @todo fix in core
 */

var ExtensionItem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ExtensionItem, _Component);

  function ExtensionItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ExtensionItem.prototype;

  _proto.view = function view(vnode) {
    var _updates$latestMinor;

    var _this$attrs = this.attrs,
        extension = _this$attrs.extension,
        updates = _this$attrs.updates,
        onClickUpdate = _this$attrs.onClickUpdate,
        whyNotWarning = _this$attrs.whyNotWarning,
        isCore = _this$attrs.isCore,
        isDanger = _this$attrs.isDanger;
    var latestVersion = (_updates$latestMinor = updates['latest-minor']) != null ? _updates$latestMinor : updates['latest-major'] && !isCore ? updates['latest-major'] : null;
    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()({
        'PackageManager-extension': true,
        'PackageManager-extension--core': isCore,
        'PackageManager-extension--danger': isDanger
      })
    }, m("div", {
      className: "PackageManager-extension-icon ExtensionIcon",
      style: extension.icon
    }, extension.icon ? flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(extension.icon.name) : ''), m("div", {
      className: "PackageManager-extension-info"
    }, m("div", {
      className: "PackageManager-extension-name"
    }, extension.extra['flarum-extension'].title), m("div", {
      className: "PackageManager-extension-version"
    }, m("span", {
      className: "PackageManager-extension-version-current"
    }, this.version(extension.version)), latestVersion ? m(_Label__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "PackageManager-extension-version-latest",
      type: updates['latest-minor'] ? 'success' : 'warning'
    }, this.version(latestVersion)) : null)), m("div", {
      className: "PackageManager-extension-controls"
    }, onClickUpdate ? m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
      text: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.extensions.update')
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      icon: "fas fa-arrow-alt-circle-up",
      className: "Button Button--icon Button--flat",
      onclick: onClickUpdate,
      "aria-label": flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.extensions.update')
    })) : null, whyNotWarning ? m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
      text: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.extensions.check_why_it_failed_updating')
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      icon: "fas fa-exclamation-circle",
      className: "Button Button--icon Button--flat Button--danger",
      onclick: function onclick() {
        return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(_WhyNotModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
          "package": extension.name
        });
      },
      "aria-label": flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.extensions.check_why_it_failed_updating')
    })) : null));
  };

  _proto.version = function version(v) {
    return 'v' + v.replace('v', '');
  };

  return ExtensionItem;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/Installer.tsx":
/*!********************************************!*\
  !*** ./src/admin/components/Installer.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Installer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/admin/components/LoadingModal */ "flarum/admin/components/LoadingModal");
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/errorHandler */ "./src/admin/utils/errorHandler.ts");
/* harmony import */ var _utils_handleAsyncProcessing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/handleAsyncProcessing */ "./src/admin/utils/handleAsyncProcessing.ts");









var Installer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Installer, _Component);

  function Installer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.packageName = void 0;
    _this.isLoading = false;
    return _this;
  }

  var _proto = Installer.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.packageName = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()('');
  };

  _proto.view = function view() {
    return m("div", {
      className: "Form-group PackageManager-installer"
    }, m("label", {
      htmlFor: "install-extension"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.extensions.install')), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.extensions.install_help', {
      extiverse: m("a", {
        href: "https://extiverse.com"
      }, "extiverse.com")
    })), m("div", {
      className: "FormControl-container"
    }, m("input", {
      className: "FormControl",
      id: "install-extension",
      placeholder: "vendor/package-name",
      bidi: this.packageName
    }), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button",
      icon: "fas fa-download",
      onclick: this.onsubmit.bind(this),
      loading: this.isLoading
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.extensions.proceed'))));
  };

  _proto.data = function data() {
    return {
      "package": this.packageName()
    };
  };

  _proto.onsubmit = function onsubmit() {
    var _this2 = this;

    this.isLoading = true;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_5___default.a);
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + "/package-manager/extensions",
      body: {
        data: this.data()
      },
      errorHandler: _utils_errorHandler__WEBPACK_IMPORTED_MODULE_6__["default"],
      config: function config(xhr) {
        return Object(_utils_handleAsyncProcessing__WEBPACK_IMPORTED_MODULE_7__["default"])(xhr, function () {
          return _this2.attrs.queueState.loadTasks();
        });
      }
    }).then(function (response) {
      var extensionId = response.id;
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show({
        type: 'success'
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.extensions.successful_install', {
        extension: extensionId
      }));
      window.location.href = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('adminUrl') + "#/extension/" + extensionId;
      window.location.reload();
    })["finally"](function () {
      _this2.isLoading = false;
      m.redraw();
    });
  };

  return Installer;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/Label.tsx":
/*!****************************************!*\
  !*** ./src/admin/components/Label.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["className", "type"];



var Label = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Label, _Component);

  function Label() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Label.prototype;

  _proto.view = function view(vnode) {
    var _this$attrs = this.attrs,
        className = _this$attrs.className,
        type = _this$attrs.type,
        attrs = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$attrs, _excluded);

    return m("span", Object.assign({
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_3___default()(['Label', "Label--" + this.attrs.type, className])
    }, attrs), vnode.children);
  };

  return Label;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/MajorUpdater.tsx":
/*!***********************************************!*\
  !*** ./src/admin/components/MajorUpdater.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MajorUpdater; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/admin/components/LoadingModal */ "flarum/admin/components/LoadingModal");
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/errorHandler */ "./src/admin/utils/errorHandler.ts");
/* harmony import */ var _WhyNotModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WhyNotModal */ "./src/admin/components/WhyNotModal.tsx");
/* harmony import */ var _ExtensionItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ExtensionItem */ "./src/admin/components/ExtensionItem.tsx");











var MajorUpdater = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MajorUpdater, _Component);

  function MajorUpdater() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.isLoading = null;
    _this.updateState = void 0;
    return _this;
  }

  var _proto = MajorUpdater.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.updateState = this.attrs.updateState;
  };

  _proto.view = function view(vnode) {
    // @todo move Form-group--danger class to core for reuse
    return m("div", {
      className: "Form-group Form-group--danger PackageManager-majorUpdate"
    }, m("img", {
      alt: "flarum logo",
      src: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('baseUrl') + '/assets/extensions/flarum-package-manager/flarum.svg'
    }), m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.major_updater.title', {
      version: this.attrs.coreUpdate['latest-major']
    })), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.major_updater.description')), m("div", {
      className: "PackageManager-updaterControls"
    }, m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      text: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.major_updater.dry_run_help')
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button",
      icon: "fas fa-vial",
      onclick: this.update.bind(this, true)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.major_updater.dry_run'))), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button Button--danger",
      icon: "fas fa-play",
      onclick: this.update.bind(this, false)
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.major_updater.update'))), this.updateState.incompatibleExtensions.length ? m("div", {
      className: "PackageManager-majorUpdate-incompatibleExtensions PackageManager-extensions-grid"
    }, this.updateState.incompatibleExtensions.map(function (extension) {
      return m(_ExtensionItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        extension: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.data.extensions[extension.replace('flarum-', '').replace('flarum-ext-', '').replace('/', '-')],
        updates: {},
        onClickUpdate: null,
        isDanger: true
      });
    })) : null, this.updateState.status === 'failure' ? m(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "error",
      className: "PackageManager-majorUpdate-failure",
      dismissible: false,
      controls: [m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "Button Button--text PackageManager-majorUpdate-failure-details",
        icon: "fas fa-question-circle",
        onclick: function onclick() {
          return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(_WhyNotModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
            "package": 'flarum/core'
          });
        }
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.major_updater.failure.why'))]
    }, m("p", {
      className: "PackageManager-majorUpdate-failure-desc"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.major_updater.failure.desc'))) : null);
  };

  _proto.update = function update(dryRun) {
    var _this2 = this;

    this.isLoading = "update-" + (dryRun ? 'dry-run' : 'run');
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_5___default.a);
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + "/package-manager/major-update",
      body: {
        data: {
          dryRun: dryRun
        }
      },
      errorHandler: _utils_errorHandler__WEBPACK_IMPORTED_MODULE_7__["default"]
    }).then(function () {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show({
        type: 'success'
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.update_successful'));
      window.location.reload();
    })["catch"](function (e) {
      var _e$response, _e$response$errors, _e$response$errors$po;

      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();
      _this2.updateState.status = 'failure';
      _this2.updateState.incompatibleExtensions = (_e$response = e.response) == null ? void 0 : (_e$response$errors = _e$response.errors) == null ? void 0 : (_e$response$errors$po = _e$response$errors.pop()) == null ? void 0 : _e$response$errors$po.incompatible_extensions;
    })["finally"](function () {
      _this2.isLoading = null;
      m.redraw();
    });
  };

  return MajorUpdater;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/QueueSection.tsx":
/*!***********************************************!*\
  !*** ./src/admin/components/QueueSection.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueueSection; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Label */ "./src/admin/components/Label.tsx");
/* harmony import */ var _TaskOutputModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TaskOutputModal */ "./src/admin/components/TaskOutputModal.tsx");
/* harmony import */ var _utils_humanDuration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/humanDuration */ "./src/admin/utils/humanDuration.ts");


var _excluded = ["label", "content"];












var QueueSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(QueueSection, _Component);

  function QueueSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = QueueSection.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.attrs.state.loadTasks().then(m.redraw);
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      id: "PackageManager-queueSection",
      className: "ExtensionPage-permissions PackageManager-queueSection"
    }, m("div", {
      className: "ExtensionPage-permissions-header PackageManager-queueSection-header"
    }, m("div", {
      className: "container"
    }, m("h2", {
      className: "ExtensionTitle"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.sections.queue.title')), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "Button Button--icon",
      icon: "fas fa-sync-alt",
      onclick: function onclick() {
        return _this.attrs.state.loadTasks().then(m.redraw);
      },
      "aria-label": flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.sections.queue.refresh')
    }))), m("div", {
      className: "container"
    }, this.queueTable()));
  };

  _proto.columns = function columns() {
    var _this2 = this;

    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default.a();
    items.add('operation', {
      label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.sections.queue.columns.operation')),
      content: function content(task) {
        return m("div", {
          className: "PackageManager-queueTable-operation"
        }, m("span", {
          className: "PackageManager-queueTable-operation-icon"
        }, _this2.operationIcon(task.operation())), m("span", {
          className: "PackageManager-queueTable-operation-name"
        }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("flarum-package-manager.admin.sections.queue.operations." + task.operation())));
      }
    }, 80);
    items.add('package', {
      label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.sections.queue.columns.package')),
      content: function content(task) {
        var _task$package;

        var extension = flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.extensions[(_task$package = task["package"]()) == null ? void 0 : _task$package.replace(/(\/flarum-|\/flarum-ext-|\/)/g, '-')];
        return extension ? m("div", {
          className: "PackageManager-queueTable-package"
        }, m("div", {
          className: "PackageManager-queueTable-package-icon ExtensionIcon",
          style: extension.icon
        }, extension.icon ? flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()(extension.icon.name) : ''), m("div", {
          className: "PackageManager-queueTable-package-details"
        }, m("span", {
          className: "PackageManager-queueTable-package-title"
        }, extension.extra['flarum-extension'].title), m("span", {
          className: "PackageManager-queueTable-package-name"
        }, task["package"]()))) : task["package"]();
      }
    }, 75);
    items.add('status', {
      label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.sections.queue.columns.status')),
      content: function content(task) {
        return m(_Label__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "PackageManager-queueTable-status",
          type: {
            running: 'neutral',
            failure: 'error',
            pending: 'warning',
            success: 'success'
          }[task.status()]
        }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans("flarum-package-manager.admin.sections.queue.statuses." + task.status()));
      }
    }, 70);
    items.add('elapsedTime', {
      label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.sections.queue.columns.elapsed_time')),
      content: function content(task) {
        return m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
          text: dayjs(task.startedAt()).format('LL LTS') + "  " + dayjs(task.finishedAt()).format('LL LTS')
        }, m("span", null, Object(_utils_humanDuration__WEBPACK_IMPORTED_MODULE_12__["default"])(task.startedAt(), task.finishedAt())));
      }
    }, 65);
    items.add('details', {
      label: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.sections.queue.columns.details')),
      content: function content(task) {
        return m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: "Button Button--icon Table-controls-item",
          icon: "fas fa-file-alt",
          "aria-label": flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.sections.queue.columns.details') // @todo fix in core
          // @ts-ignore
          ,
          onclick: function onclick() {
            return flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.modal.show(_TaskOutputModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
              task: task
            });
          }
        });
      },
      className: 'Table-controls'
    }, 60);
    return items;
  };

  _proto.queueTable = function queueTable() {
    if (!this.attrs.state.tasks) {
      return m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a, null);
    }

    if (this.attrs.state.tasks && !this.attrs.state.tasks.length) {
      return m("h3", {
        className: "ExtensionPage-subHeader"
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.sections.queue.none'));
    }

    var columns = this.columns();
    return m("table", {
      className: "Table PackageManager-queueTable"
    }, m("thead", null, m("tr", null, columns.toArray().map(function (item, index) {
      return m("th", {
        key: index
      }, item.label);
    }))), m("tbody", null, this.attrs.state.tasks.map(function (task, index) {
      return m("tr", {
        key: index
      }, columns.toArray().map(function (item, index) {
        var label = item.label,
            content = item.content,
            attrs = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(item, _excluded);

        return m("td", Object.assign({
          key: index
        }, attrs), content(task));
      }));
    })));
  };

  _proto.operationIcon = function operationIcon(operation) {
    return flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()({
      'update_check': 'fas fa-sync-alt',
      'update_major': 'fas fa-play',
      'update_minor': 'fas fa-play',
      'update_global': 'fas fa-play',
      'extension_install': 'fas fa-download',
      'extension_remove': 'fas fa-times',
      'extension_update': 'fas fa-arrow-alt-circle-up',
      'why_not': 'fas fa-exclamation-circle'
    }[operation]);
  };

  return QueueSection;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/admin/components/SettingsPage.tsx":
/*!***********************************************!*\
  !*** ./src/admin/components/SettingsPage.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QueueSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueueSection */ "./src/admin/components/QueueSection.tsx");
/* harmony import */ var _ControlSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ControlSection */ "./src/admin/components/ControlSection.tsx");
/* harmony import */ var _states_QueueState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../states/QueueState */ "./src/admin/states/QueueState.ts");







var SettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsPage, _ExtensionPage);

  function SettingsPage() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ExtensionPage.call.apply(_ExtensionPage, [this].concat(args)) || this;
    _this.queueState = new _states_QueueState__WEBPACK_IMPORTED_MODULE_5__["default"]();
    return _this;
  }

  var _proto = SettingsPage.prototype;

  _proto.sections = function sections(vnode) {
    // @todo add core feature to register sections
    var items = _ExtensionPage.prototype.sections.call(this, vnode);

    if (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.data.settings['flarum-package-manager.queue_jobs']) {
      items.add('queue', m(_QueueSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
        state: this.queueState
      }), 5);
    }

    items.add('control', m(_ControlSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      queueState: this.queueState
    }), 8);
    items.setPriority('content', 10);
    items.setPriority('permissions', 0);
    return items;
  };

  return SettingsPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/TaskOutputModal.tsx":
/*!**************************************************!*\
  !*** ./src/admin/components/TaskOutputModal.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskOutputModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);




var TaskOutputModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TaskOutputModal, _Modal);

  function TaskOutputModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = TaskOutputModal.prototype;

  _proto.className = function className() {
    return 'Modal--large QuickModal';
  };

  _proto.title = function title() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans("flarum-package-manager.admin.sections.queue.operations." + this.attrs.task.operation());
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "TaskOutputModal-data"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.sections.queue.output_modal.command')), m("div", {
      className: "FormControl TaskOutputModal-data-command"
    }, m("code", null, "$ composer ", this.attrs.task.command()))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.sections.queue.output_modal.output')), m("div", {
      className: "FormControl TaskOutputModal-data-output"
    }, m("code", null, m("pre", null, this.attrs.task.output()))))));
  };

  return TaskOutputModal;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/Updater.tsx":
/*!******************************************!*\
  !*** ./src/admin/components/Updater.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Updater; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/humanTime */ "flarum/common/helpers/humanTime");
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/admin/components/LoadingModal */ "flarum/admin/components/LoadingModal");
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/errorHandler */ "./src/admin/utils/errorHandler.ts");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _MajorUpdater__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MajorUpdater */ "./src/admin/components/MajorUpdater.tsx");
/* harmony import */ var _ExtensionItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ExtensionItem */ "./src/admin/components/ExtensionItem.tsx");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_handleAsyncProcessing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/handleAsyncProcessing */ "./src/admin/utils/handleAsyncProcessing.ts");














var Updater = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Updater, _Component);

  function Updater() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.isLoading = null;
    _this.packageUpdates = {};
    _this.lastUpdateCheck = JSON.parse(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings['flarum-package-manager.last_update_check']);
    return _this;
  }

  var _proto = Updater.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };

  _proto.view = function view() {
    var _this$lastUpdateCheck,
        _this2 = this;

    var extensions = this.getExtensionUpdates();
    var coreUpdate = this.getCoreUpdate();
    var core;

    if (coreUpdate) {
      core = {
        id: 'flarum-core',
        name: 'flarum/core',
        version: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings.version,
        icon: {
          backgroundImage: "url(" + flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('baseUrl') + "/assets/extensions/flarum-package-manager/flarum.svg"
        },
        extra: {
          'flarum-extension': {
            title: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.updater.flarum')
          }
        }
      };
    }

    return [m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.updater.updater_title')), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.updater.updater_help')), ((_this$lastUpdateCheck = this.lastUpdateCheck) == null ? void 0 : _this$lastUpdateCheck.checkedAt) && m("p", {
      className: "PackageManager-lastUpdatedAt"
    }, m("span", {
      className: "PackageManager-lastUpdatedAt-label"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.updater.last_update_checked_at')), m("span", {
      className: "PackageManager-lastUpdatedAt-value"
    }, flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default()(this.lastUpdateCheck.checkedAt))), m("div", {
      className: "PackageManager-updaterControls"
    }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "Button",
      icon: "fas fa-sync-alt",
      onclick: this.checkForUpdates.bind(this),
      loading: this.isLoading === 'check',
      disabled: this.isLoading !== null && this.isLoading !== 'check'
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.updater.check_for_updates')), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "Button",
      icon: "fas fa-play",
      onclick: this.updateGlobally.bind(this),
      loading: this.isLoading === 'global-update',
      disabled: this.isLoading !== null && this.isLoading !== 'global-update'
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.updater.run_global_update'))), this.isLoading !== null ? m("div", {
      className: "PackageManager-extensions"
    }, m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default.a, null)) : extensions.length || core ? m("div", {
      className: "PackageManager-extensions"
    }, m("div", {
      className: "PackageManager-extensions-grid"
    }, core ? m(_ExtensionItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      extension: core,
      updates: coreUpdate,
      isCore: true,
      onClickUpdate: this.updateCoreMinor.bind(this),
      whyNotWarning: this.lastUpdateRun.limitedPackages().includes('flarum/core')
    }) : null, extensions.map(function (extension) {
      return m(_ExtensionItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        extension: extension,
        updates: _this2.packageUpdates[extension.id],
        onClickUpdate: _this2.updateExtension.bind(_this2, extension),
        whyNotWarning: _this2.lastUpdateRun.limitedPackages().includes(extension.name)
      });
    }))) : null), coreUpdate && coreUpdate['latest-major'] ? m(_MajorUpdater__WEBPACK_IMPORTED_MODULE_9__["default"], {
      coreUpdate: coreUpdate,
      updateState: this.lastUpdateRun.major
    }) : null];
  };

  _proto.getExtensionUpdates = function getExtensionUpdates() {
    var _this$lastUpdateCheck2,
        _this$lastUpdateCheck3,
        _this$lastUpdateCheck4,
        _this3 = this;

    (_this$lastUpdateCheck2 = this.lastUpdateCheck) == null ? void 0 : (_this$lastUpdateCheck3 = _this$lastUpdateCheck2.updates) == null ? void 0 : (_this$lastUpdateCheck4 = _this$lastUpdateCheck3.installed) == null ? void 0 : _this$lastUpdateCheck4.filter(function (composerPackage) {
      var id = composerPackage.name.replace('/', '-').replace(/(flarum-ext-)|(flarum-)/, '');
      var extension = flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.extensions[id];
      var safeToUpdate = ['semver-safe-update', 'update-possible'].includes(composerPackage['latest-status']);

      if (extension && safeToUpdate) {
        _this3.packageUpdates[extension.id] = composerPackage;
      }

      return extension && safeToUpdate;
    });
    return Object.values(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.extensions).filter(function (extension) {
      return _this3.packageUpdates[extension.id];
    });
  };

  _proto.getCoreUpdate = function getCoreUpdate() {
    var _this$lastUpdateCheck5, _this$lastUpdateCheck6, _this$lastUpdateCheck7;

    return (_this$lastUpdateCheck5 = this.lastUpdateCheck) == null ? void 0 : (_this$lastUpdateCheck6 = _this$lastUpdateCheck5.updates) == null ? void 0 : (_this$lastUpdateCheck7 = _this$lastUpdateCheck6.installed) == null ? void 0 : _this$lastUpdateCheck7.filter(function (composerPackage) {
      return composerPackage.name === 'flarum/core';
    }).pop();
  };

  _proto.checkForUpdates = function checkForUpdates() {
    var _this4 = this;

    this.isLoading = 'check';
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('apiUrl') + "/package-manager/check-for-updates",
      errorHandler: _utils_errorHandler__WEBPACK_IMPORTED_MODULE_7__["default"],
      config: function config(xhr) {
        return Object(_utils_handleAsyncProcessing__WEBPACK_IMPORTED_MODULE_12__["default"])(xhr, function () {
          return _this4.attrs.queueState.loadTasks();
        });
      }
    }).then(function (response) {
      // @TODO, I wish the response had more than just the payload, need status code here to determine
      // if the server is handling this asynchronously.
      _this4.lastUpdateCheck = response;
    })["finally"](function () {
      _this4.isLoading = null;
      m.redraw();
    });
  };

  _proto.updateCoreMinor = function updateCoreMinor() {
    var _this5 = this;

    if (confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_11___default()(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.minor_update_confirmation.content')))) {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.modal.show(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_6___default.a);
      this.isLoading = 'minor-update';
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.request({
        method: 'POST',
        url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('apiUrl') + "/package-manager/minor-update",
        errorHandler: _utils_errorHandler__WEBPACK_IMPORTED_MODULE_7__["default"],
        config: function config(xhr) {
          return Object(_utils_handleAsyncProcessing__WEBPACK_IMPORTED_MODULE_12__["default"])(xhr, function () {
            return _this5.attrs.queueState.loadTasks();
          });
        }
      }).then(function () {
        flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.alerts.show({
          type: 'success'
        }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.update_successful'));
        window.location.reload();
      })["finally"](function () {
        _this5.isLoading = null;
        m.redraw();
      });
    }
  };

  _proto.updateExtension = function updateExtension(extension) {
    var _this6 = this;

    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.modal.show(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_6___default.a);
    this.isLoading = 'extension-update';
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.request({
      method: 'PATCH',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('apiUrl') + "/package-manager/extensions/" + extension.id,
      errorHandler: _utils_errorHandler__WEBPACK_IMPORTED_MODULE_7__["default"],
      config: function config(xhr) {
        return Object(_utils_handleAsyncProcessing__WEBPACK_IMPORTED_MODULE_12__["default"])(xhr, function () {
          return _this6.attrs.queueState.loadTasks();
        });
      }
    }).then(function () {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.alerts.show({
        type: 'success'
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.extensions.successful_update', {
        extension: extension.extra['flarum-extension'].title
      }));
      window.location.reload();
    })["finally"](function () {
      _this6.isLoading = null;
      m.redraw();
    });
  };

  _proto.updateGlobally = function updateGlobally() {
    var _this7 = this;

    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.modal.show(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_6___default.a);
    this.isLoading = 'global-update';
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('apiUrl') + "/package-manager/global-update",
      errorHandler: _utils_errorHandler__WEBPACK_IMPORTED_MODULE_7__["default"],
      config: function config(xhr) {
        return Object(_utils_handleAsyncProcessing__WEBPACK_IMPORTED_MODULE_12__["default"])(xhr, function () {
          return _this7.attrs.queueState.loadTasks();
        });
      }
    }).then(function () {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.alerts.show({
        type: 'success'
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-package-manager.admin.updater.global_update_successful'));
      window.location.reload();
    })["finally"](function () {
      _this7.isLoading = null;
      m.redraw();
    });
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Updater, [{
    key: "lastUpdateRun",
    get: function get() {
      var lastUpdateRun = JSON.parse(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default.a.data.settings['flarum-package-manager.last_update_run']);

      lastUpdateRun.limitedPackages = function () {
        return [].concat(lastUpdateRun.major.limitedPackages, lastUpdateRun.minor.limitedPackages, lastUpdateRun.global.limitedPackages);
      };

      return lastUpdateRun;
    }
  }]);

  return Updater;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/admin/components/WhyNotModal.tsx":
/*!**********************************************!*\
  !*** ./src/admin/components/WhyNotModal.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WhyNotModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/errorHandler */ "./src/admin/utils/errorHandler.ts");






var WhyNotModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WhyNotModal, _Modal);

  function WhyNotModal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.loading = true;
    _this.whyNot = null;
    return _this;
  }

  var _proto = WhyNotModal.prototype;

  _proto.className = function className() {
    return 'Modal--large WhyNotModal';
  };

  _proto.title = function title() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-package-manager.admin.why_not_modal.title');
  };

  _proto.oncreate = function oncreate(vnode) {
    _Modal.prototype.oncreate.call(this, vnode);

    this.requestWhyNot();
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, this.loading ? m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_3___default.a, null) : m("pre", {
      className: "WhyNotModal-contents"
    }, this.whyNot));
  };

  _proto.requestWhyNot = function requestWhyNot() {
    var _this2 = this;

    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      method: 'POST',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + "/package-manager/why-not",
      body: {
        data: {
          "package": this.attrs["package"]
        }
      },
      errorHandler: _utils_errorHandler__WEBPACK_IMPORTED_MODULE_4__["default"]
    }).then(function (response) {
      _this2.loading = false;
      _this2.whyNot = response.data.whyNot;
      m.redraw();
    });
  };

  return WhyNotModal;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/index.tsx":
/*!*****************************!*\
  !*** ./src/admin/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/components/LoadingModal */ "flarum/admin/components/LoadingModal");
/* harmony import */ var flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/admin/utils/isExtensionEnabled */ "flarum/admin/utils/isExtensionEnabled");
/* harmony import */ var flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SettingsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SettingsPage */ "./src/admin/components/SettingsPage.tsx");
/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Task */ "./src/admin/models/Task.ts");








flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('flarum-package-manager', function (app) {
  app.store.models['package-manager-tasks'] = _models_Task__WEBPACK_IMPORTED_MODULE_7__["default"];
  app.extensionData["for"]('flarum-package-manager').registerSetting({
    setting: 'flarum-package-manager.queue_jobs',
    label: app.translator.trans('flarum-package-manager.admin.settings.queue_jobs'),
    "default": false,
    type: 'boolean',
    disabled: app.data['flarum-package-manager.using_sync_queue']
  }).registerPage(_components_SettingsPage__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'topItems', function (items) {
    var _this = this;

    if (this.extension.id === 'flarum-package-manager' || flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5___default()(this.extension.id)) {
      return;
    }

    items.add('remove', m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button Button--danger",
      icon: "fas fa-times",
      onclick: function onclick() {
        app.modal.show(flarum_admin_components_LoadingModal__WEBPACK_IMPORTED_MODULE_4___default.a);
        app.request({
          url: app.forum.attribute('apiUrl') + "/package-manager/extensions/" + _this.extension.id,
          method: 'DELETE'
        }).then(function () {
          app.alerts.show({
            type: 'success'
          }, app.translator.trans('flarum-package-manager.admin.extensions.successful_remove'));
          window.location = app.forum.attribute('adminUrl');
        })["finally"](function () {
          app.modal.close();
        });
      }
    }, "Remove"));
  });
});

/***/ }),

/***/ "./src/admin/models/Task.ts":
/*!**********************************!*\
  !*** ./src/admin/models/Task.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Task; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);



var Task = /*#__PURE__*/function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Task, _Model);

  function Task() {
    return _Model.apply(this, arguments) || this;
  }

  var _proto = Task.prototype;

  _proto.status = function status() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('status').call(this);
  };

  _proto.operation = function operation() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('operation').call(this);
  };

  _proto.command = function command() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('command').call(this);
  };

  _proto["package"] = function _package() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('package').call(this);
  };

  _proto.output = function output() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('output').call(this);
  };

  _proto.createdAt = function createdAt() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('createdAt', flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate).call(this);
  };

  _proto.startedAt = function startedAt() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('startedAt', flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate).call(this);
  };

  _proto.finishedAt = function finishedAt() {
    return flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('finishedAt', flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate).call(this);
  };

  return Task;
}(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/states/QueueState.ts":
/*!****************************************!*\
  !*** ./src/admin/states/QueueState.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueueState; });
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);


var QueueState = /*#__PURE__*/function () {
  function QueueState() {
    this.tasks = void 0;
  }

  var _proto = QueueState.prototype;

  _proto.loadTasks = function loadTasks() {
    var _this = this;

    this.tasks = null;
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.find('package-manager-tasks', {}).then(function (data) {
      _this.tasks = data;
    });
  };

  return QueueState;
}();



/***/ }),

/***/ "./src/admin/utils/errorHandler.ts":
/*!*****************************************!*\
  !*** ./src/admin/utils/errorHandler.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var error = e.response.errors[0];

  if (!['composer_command_failure', 'extension_already_installed', 'extension_not_installed'].includes(error.code)) {
    throw e;
  }

  switch (error.code) {
    case 'composer_command_failure':
      if (error.guessed_cause) {
        flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.alerts.show({
          type: 'error'
        }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans("flarum-package-manager.admin.exceptions.guessed_cause." + error.guessed_cause));
        flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.close();
      } else {
        flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.alerts.show({
          type: 'error'
        }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('flarum-package-manager.admin.exceptions.composer_command_failure'));
      }

      break;

    case 'extension_already_installed':
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.alerts.show({
        type: 'error'
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('flarum-package-manager.admin.exceptions.extension_already_installed'));
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.close();
      break;

    case 'extension_not_installed':
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.alerts.show({
        type: 'error'
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('flarum-package-manager.admin.exceptions.extension_not_installed'));
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.close();
  }
});

/***/ }),

/***/ "./src/admin/utils/handleAsyncProcessing.ts":
/*!**************************************************!*\
  !*** ./src/admin/utils/handleAsyncProcessing.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleAsyncProcessing; });
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);

function handleAsyncProcessing(xhr, refresh) {
  /**
   * The command is being processed asynchronously through the queue.
   * We refresh the queue table and scroll to it.
   */
  xhr.onloadend = function () {
    if (this.status === 202) {
      var _document$getElementB;

      refresh().then(m.redraw);
      (_document$getElementB = document.getElementById('PackageManager-queueSection')) == null ? void 0 : _document$getElementB.scrollIntoView({
        block: 'nearest'
      });
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.close();
    }
  };

  return xhr;
}

/***/ }),

/***/ "./src/admin/utils/humanDuration.ts":
/*!******************************************!*\
  !*** ./src/admin/utils/humanDuration.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return humanDuration; });
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/plugin/duration */ "./node_modules/dayjs/plugin/duration.js");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_0__);

function humanDuration(start, end) {
  dayjs.extend(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_0___default.a);
  var durationTime = dayjs(end).diff(start);
  return dayjs.duration(durationTime).humanize();
}

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/LoadingModal":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/LoadingModal']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/LoadingModal'];

/***/ }),

/***/ "flarum/admin/utils/isExtensionEnabled":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/isExtensionEnabled']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/utils/isExtensionEnabled'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/humanTime":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/humanTime']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/humanTime'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map
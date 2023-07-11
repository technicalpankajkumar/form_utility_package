"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Radio;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["label", "options", "name", "outerClass"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Radio(_ref) {
  var label = _ref.label,
    options = _ref.options,
    name = _ref.name,
    outerClass = _ref.outerClass,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: outerClass
  }, label ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("label", null, "".concat(label, " :")), /*#__PURE__*/_react["default"].createElement("br", null)) : /*#__PURE__*/_react["default"].createElement("span", null), options.map(function (opt, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement("input", _extends({
      type: "radio",
      name: name,
      id: opt.value,
      value: opt.value
    }, rest)), /*#__PURE__*/_react["default"].createElement("label", null, opt.label), " \xA0");
  }));
}
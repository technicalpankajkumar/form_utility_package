"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Field;
var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("../fields/Input"));
var _Radio = _interopRequireDefault(require("../fields/Radio"));
var _Checkbox = _interopRequireDefault(require("../fields/Checkbox"));
var _Button = _interopRequireDefault(require("../fields/Button"));
var _Select = _interopRequireDefault(require("../fields/Select"));
var _File = _interopRequireDefault(require("../fields/File"));
var _Textarea = _interopRequireDefault(require("../fields/Textarea"));
var _excluded = ["control"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Field(_ref) {
  var control = _ref.control,
    rest = _objectWithoutProperties(_ref, _excluded);
  switch (control) {
    case 'input':
      return /*#__PURE__*/_react["default"].createElement(_Input["default"], rest);
    case 'radio':
      return /*#__PURE__*/_react["default"].createElement(_Radio["default"], rest);
    case 'checkbox':
      return /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], rest);
    case 'select':
      return /*#__PURE__*/_react["default"].createElement(_Select["default"], rest);
    case 'textarea':
      return /*#__PURE__*/_react["default"].createElement(_Textarea["default"], rest);
    case 'button':
      return /*#__PURE__*/_react["default"].createElement(_Button["default"], rest);
    case 'file':
      return /*#__PURE__*/_react["default"].createElement(_File["default"], rest);
    default:
      return null;
  }
}
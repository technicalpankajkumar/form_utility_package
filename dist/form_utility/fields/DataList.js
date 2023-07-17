"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["label", "type", "name", "options", "onChange", "outerClass", "list_id"],
  _excluded2 = ["value", "label"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function DataList(_ref) {
  var label = _ref.label,
    type = _ref.type,
    name = _ref.name,
    options = _ref.options,
    onChange = _ref.onChange,
    outerClass = _ref.outerClass,
    list_id = _ref.list_id,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: outerClass
  }, label ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name
  }, "".concat(label, " :")), /*#__PURE__*/_react["default"].createElement("br", null)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: type,
    id: name,
    name: name,
    list: list_id,
    onChange: onChange
  }, rest)), /*#__PURE__*/_react["default"].createElement("datalist", {
    id: "".concat(list_id)
  }, options.map(function (_ref2, index) {
    var value = _ref2.value,
      label = _ref2.label,
      rest = _objectWithoutProperties(_ref2, _excluded2);
    return /*#__PURE__*/_react["default"].createElement("option", _extends({
      value: "".concat(value),
      key: index
    }, rest), "".concat(label));
  })));
}
var _default = /*#__PURE__*/(0, _react.memo)(DataList); // types => {'range','color','text','number'}
// min=0 and max=100 attribute for input field in type of range.
// Recommended values in types text, search, url, tel, email and number,
// are displayed in a drop-down menu when user clicks or double-clicks on the control. 
exports["default"] = _default;
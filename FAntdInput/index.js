function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["state", "onChange"],
  _excluded2 = ["state", "onInput"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Input } from 'antd';
import { forwardRef, useCallback } from 'react';
import { throttle, debounce } from 'lodash-es';

// 获取公共属性
var getBaseArgs = function getBaseArgs(_ref, ref) {
  var state = _ref.state,
    _onChange = _ref.onChange,
    args = _objectWithoutProperties(_ref, _excluded);
  return _objectSpread({
    ref: ref,
    allowClear: true,
    value: state === null || state === void 0 ? void 0 : state[0],
    onChange: function onChange(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      state === null || state === void 0 || state[1].apply(state, [event.target.value].concat(args));
      _onChange && _onChange.apply(void 0, [event].concat(args));
    }
  }, args);
};

// 基础Input
var BaseInput = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Input, _extends({
    placeholder: '请输入'
  }, getBaseArgs(props, ref)));
});

// 先将其他子组件也带过来
var $$typeof = Input.$$typeof,
  render = Input.render,
  components = _objectWithoutProperties(Input, ["$$typeof", "render"]);
for (var name in components) BaseInput[name] = Input[name];

// 重写Password
BaseInput.Password = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Input.Password, _extends({
    placeholder: '请输入密码'
  }, getBaseArgs(props, ref)));
});
// 重写Search
BaseInput.Search = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$throttleDurati, _props$throttleTraili, _props$debounceDurati;
  // 搜索
  var toSearch = function toSearch() {
    props.onSearch && props.onSearch.apply(props, arguments);
  };
  // 节流搜索
  var throttleSearch = throttle(toSearch, (_props$throttleDurati = props.throttleDuration) !== null && _props$throttleDurati !== void 0 ? _props$throttleDurati : 0, {
    trailing: (_props$throttleTraili = props.throttleTrailing) !== null && _props$throttleTraili !== void 0 ? _props$throttleTraili : false
  });
  // 自动搜索
  var debounceSearch = useCallback(debounce(toSearch, (_props$debounceDurati = props.debounceDuration) !== null && _props$debounceDurati !== void 0 ? _props$debounceDurati : 500), []);
  // 输入
  var onInput = function onInput(event) {
    if (props.autoSearch) debounceSearch(event.target.value);
    props.onInput && props.onInput(event);
  };
  return /*#__PURE__*/React.createElement(Input.Search, _extends({
    placeholder: props.autoSearch ? '输入后自动搜索' : '请输入'
  }, getBaseArgs(props, ref), {
    onSearch: throttleSearch,
    onInput: onInput
  }));
});
// 重写TextArea
BaseInput.TextArea = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Input.TextArea, _extends({
    placeholder: '请输入',
    showCount: true,
    maxLength: 100
  }, getBaseArgs(props, ref), {
    style: _objectSpread({
      height: 100
    }, props === null || props === void 0 ? void 0 : props.style)
  }));
});
// 重写OTP
BaseInput.OTP = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var state = _ref2.state,
    _onInput = _ref2.onInput,
    args = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(Input.OTP, _extends({
    ref: ref,
    value: state === null || state === void 0 ? void 0 : state[0]
  }, args, {
    onInput: function onInput(value) {
      state === null || state === void 0 || state[1](value.join(''));
      _onInput && _onInput(value);
    }
  }));
});
export default BaseInput;
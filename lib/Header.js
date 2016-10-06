'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
  var size = _ref.size;
  var strokeColor = _ref.strokeColor;
  var strokeWidth = _ref.strokeWidth;
  var fillColor = _ref.fillColor;
  var svgClass = _ref.svgClass;

  var inlineStyling = {
    fill: fillColor,
    stroke: strokeColor,
    strokeWidth: strokeWidth
  };

  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      style: inlineStyling,
      className: svgClass,
      viewBox: '0 0 8 8'
    },
    _react2.default.createElement('path', { d: 'M0 0v1h.5c.28 0 .5.22.5.5v4c0 .28-.22.5-.5.5h-.5v1h3v-1h-.5c-.28 0-.5-.22-.5-.5v-1.5h3v1.5c0 .28-.22.5-.5.5h-.5v1h3v-1h-.5c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h.5v-1h-3v1h.5c.28 0 .5.22.5.5v1.5h-3v-1.5c0-.28.22-.5.5-.5h.5v-1h-3z' })
  );
}

Header.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};
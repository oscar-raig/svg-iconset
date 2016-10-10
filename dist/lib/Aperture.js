'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Aperture;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Aperture(_ref) {
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
    _react2.default.createElement('path', { d: 'M4 0c-.69 0-1.34.19-1.91.5l3.22 2.34.75-2.25c-.6-.36-1.31-.59-2.06-.59zm-2.75 1.13c-.76.73-1.25 1.74-1.25 2.88 0 .25.02.48.06.72l3.09-2.22-1.91-1.38zm5.63.13l-1.22 3.75h2.19c.08-.32.16-.65.16-1 0-1.07-.44-2.03-1.13-2.75zm-4.72 3.22l-1.75 1.25c.55 1.13 1.6 1.99 2.88 2.22l-1.13-3.47zm1.56 1.53l.63 1.97c1.33-.12 2.46-.88 3.09-1.97h-3.72z'
    })
  );
}

Aperture.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};
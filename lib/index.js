"use strict";

var _express = _interopRequireDefault(require("express"));

var _connectHistoryApiFallback = _interopRequireDefault(require("connect-history-api-fallback"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '..', 'dist')));
app.use((0, _connectHistoryApiFallback["default"])({
  index: _path["default"].resolve(__dirname + '..', 'dist', 'index.html')
}));
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '..', 'dist')));
app.listen(port, function () {
  return console.log("App listening on port ".concat(port));
});
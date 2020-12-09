"use strict";

var _express = _interopRequireDefault(require("express"));

var _connectHistoryApiFallback = _interopRequireDefault(require("connect-history-api-fallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var app = (0, _express.default)();
app.use(_express.default.static(__dirname + '/dist'));
app.use((0, _connectHistoryApiFallback.default)({
  index: '/dist/index.html'
}));
app.use(_express.default.static(__dirname + '/dist'));
app.listen(port, function () {
  return console.log("App listening on port ".concat(port));
});
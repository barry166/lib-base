import _typeof from '@babel/runtime-corejs3/helpers/typeof';
import _Map from '@babel/runtime-corejs3/core-js-stable/map';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Set from '@babel/runtime-corejs3/core-js-stable/set';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function clone(obj) {
  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Map();
  if (_typeof(obj) !== 'object' || obj === null) return obj;
  if (map.get(obj)) {
    return map.get(obj);
  }
  var target = {};
  map.set(obj, target);
  if (obj instanceof _Map) {
    target = new _Map();
    _forEachInstanceProperty(obj).call(obj, function (v, k) {
      var v1 = clone(v, map);
      var k1 = clone(k, map);
      target.set(k1, v1);
    });
  }
  if (obj instanceof _Set) {
    target = new _Set();
    _forEachInstanceProperty(obj).call(obj, function (v) {
      var v1 = clone(v, map);
      target.add(v1);
    });
  }
  if (obj instanceof Array) {
    target = _mapInstanceProperty(obj).call(obj, function (item) {
      return clone(item, map);
    });
  }

  // 对象情况
  for (var key in obj) {
    var val = clone(obj[key], map);
    target[key] = val;
  }
  return target;
}
var src = clone;
var index = /*@__PURE__*/getDefaultExportFromCjs(src);

export { index as default };

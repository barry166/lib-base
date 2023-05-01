/*!
 * lib-base 1.0.0 (https://github.com/barry166)
 * API 
 * Copyright 2017-2023 All Rights Reserved
 * Licensed under MIT
 */

'use strict';

var _typeof = require('@babel/runtime/helpers/typeof');

function clone(obj) {
  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
  if (_typeof(obj) !== 'object' || obj === null) return obj;
  if (map.get(obj)) {
    return map.get(obj);
  }
  var target = {};
  map.set(obj, target);
  if (obj instanceof Map) {
    target = new Map();
    obj.forEach(function (v, k) {
      var v1 = clone(v, map);
      var k1 = clone(k, map);
      target.set(k1, v1);
    });
  }
  if (obj instanceof Set) {
    target = new Set();
    obj.forEach(function (v) {
      var v1 = clone(v, map);
      target.add(v1);
    });
  }
  if (obj instanceof Array) {
    target = obj.map(function (item) {
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
module.exports = clone;

var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/type/value/is.js
var require_is = __commonJS({
  "node_modules/type/value/is.js"(exports, module2) {
    "use strict";
    var _undefined = void 0;
    module2.exports = function(value) {
      return value !== _undefined && value !== null;
    };
  }
});

// node_modules/type/object/is.js
var require_is2 = __commonJS({
  "node_modules/type/object/is.js"(exports, module2) {
    "use strict";
    var isValue = require_is();
    var possibleTypes = {
      "object": true,
      "function": true,
      "undefined": true
      /* document.all */
    };
    module2.exports = function(value) {
      if (!isValue(value))
        return false;
      return hasOwnProperty.call(possibleTypes, typeof value);
    };
  }
});

// node_modules/type/prototype/is.js
var require_is3 = __commonJS({
  "node_modules/type/prototype/is.js"(exports, module2) {
    "use strict";
    var isObject = require_is2();
    module2.exports = function(value) {
      if (!isObject(value))
        return false;
      try {
        if (!value.constructor)
          return false;
        return value.constructor.prototype === value;
      } catch (error) {
        return false;
      }
    };
  }
});

// node_modules/type/function/is.js
var require_is4 = __commonJS({
  "node_modules/type/function/is.js"(exports, module2) {
    "use strict";
    var isPrototype = require_is3();
    module2.exports = function(value) {
      if (typeof value !== "function")
        return false;
      if (!hasOwnProperty.call(value, "length"))
        return false;
      try {
        if (typeof value.length !== "number")
          return false;
        if (typeof value.call !== "function")
          return false;
        if (typeof value.apply !== "function")
          return false;
      } catch (error) {
        return false;
      }
      return !isPrototype(value);
    };
  }
});

// node_modules/type/plain-function/is.js
var require_is5 = __commonJS({
  "node_modules/type/plain-function/is.js"(exports, module2) {
    "use strict";
    var isFunction = require_is4();
    var classRe = /^\s*class[\s{/}]/;
    var functionToString = Function.prototype.toString;
    module2.exports = function(value) {
      if (!isFunction(value))
        return false;
      if (classRe.test(functionToString.call(value)))
        return false;
      return true;
    };
  }
});

// node_modules/es5-ext/object/assign/is-implemented.js
var require_is_implemented = __commonJS({
  "node_modules/es5-ext/object/assign/is-implemented.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      var assign = Object.assign, obj;
      if (typeof assign !== "function")
        return false;
      obj = { foo: "raz" };
      assign(obj, { bar: "dwa" }, { trzy: "trzy" });
      return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
    };
  }
});

// node_modules/es5-ext/object/keys/is-implemented.js
var require_is_implemented2 = __commonJS({
  "node_modules/es5-ext/object/keys/is-implemented.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      try {
        Object.keys("primitive");
        return true;
      } catch (e) {
        return false;
      }
    };
  }
});

// node_modules/es5-ext/function/noop.js
var require_noop = __commonJS({
  "node_modules/es5-ext/function/noop.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
    };
  }
});

// node_modules/es5-ext/object/is-value.js
var require_is_value = __commonJS({
  "node_modules/es5-ext/object/is-value.js"(exports, module2) {
    "use strict";
    var _undefined = require_noop()();
    module2.exports = function(val) {
      return val !== _undefined && val !== null;
    };
  }
});

// node_modules/es5-ext/object/keys/shim.js
var require_shim = __commonJS({
  "node_modules/es5-ext/object/keys/shim.js"(exports, module2) {
    "use strict";
    var isValue = require_is_value();
    var keys = Object.keys;
    module2.exports = function(object) {
      return keys(isValue(object) ? Object(object) : object);
    };
  }
});

// node_modules/es5-ext/object/keys/index.js
var require_keys = __commonJS({
  "node_modules/es5-ext/object/keys/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented2()() ? Object.keys : require_shim();
  }
});

// node_modules/es5-ext/object/valid-value.js
var require_valid_value = __commonJS({
  "node_modules/es5-ext/object/valid-value.js"(exports, module2) {
    "use strict";
    var isValue = require_is_value();
    module2.exports = function(value) {
      if (!isValue(value))
        throw new TypeError("Cannot use null or undefined");
      return value;
    };
  }
});

// node_modules/es5-ext/object/assign/shim.js
var require_shim2 = __commonJS({
  "node_modules/es5-ext/object/assign/shim.js"(exports, module2) {
    "use strict";
    var keys = require_keys();
    var value = require_valid_value();
    var max = Math.max;
    module2.exports = function(dest, src) {
      var error, i, length = max(arguments.length, 2), assign;
      dest = Object(value(dest));
      assign = function(key) {
        try {
          dest[key] = src[key];
        } catch (e) {
          if (!error)
            error = e;
        }
      };
      for (i = 1; i < length; ++i) {
        src = arguments[i];
        keys(src).forEach(assign);
      }
      if (error !== void 0)
        throw error;
      return dest;
    };
  }
});

// node_modules/es5-ext/object/assign/index.js
var require_assign = __commonJS({
  "node_modules/es5-ext/object/assign/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented()() ? Object.assign : require_shim2();
  }
});

// node_modules/es5-ext/object/normalize-options.js
var require_normalize_options = __commonJS({
  "node_modules/es5-ext/object/normalize-options.js"(exports, module2) {
    "use strict";
    var isValue = require_is_value();
    var forEach = Array.prototype.forEach;
    var create = Object.create;
    var process2 = function(src, obj) {
      var key;
      for (key in src)
        obj[key] = src[key];
    };
    module2.exports = function(opts1) {
      var result = create(null);
      forEach.call(arguments, function(options) {
        if (!isValue(options))
          return;
        process2(Object(options), result);
      });
      return result;
    };
  }
});

// node_modules/es5-ext/string/#/contains/is-implemented.js
var require_is_implemented3 = __commonJS({
  "node_modules/es5-ext/string/#/contains/is-implemented.js"(exports, module2) {
    "use strict";
    var str = "razdwatrzy";
    module2.exports = function() {
      if (typeof str.contains !== "function")
        return false;
      return str.contains("dwa") === true && str.contains("foo") === false;
    };
  }
});

// node_modules/es5-ext/string/#/contains/shim.js
var require_shim3 = __commonJS({
  "node_modules/es5-ext/string/#/contains/shim.js"(exports, module2) {
    "use strict";
    var indexOf = String.prototype.indexOf;
    module2.exports = function(searchString) {
      return indexOf.call(this, searchString, arguments[1]) > -1;
    };
  }
});

// node_modules/es5-ext/string/#/contains/index.js
var require_contains = __commonJS({
  "node_modules/es5-ext/string/#/contains/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented3()() ? String.prototype.contains : require_shim3();
  }
});

// node_modules/d/index.js
var require_d = __commonJS({
  "node_modules/d/index.js"(exports, module2) {
    "use strict";
    var isValue = require_is();
    var isPlainFunction = require_is5();
    var assign = require_assign();
    var normalizeOpts = require_normalize_options();
    var contains = require_contains();
    var d = module2.exports = function(dscr, value) {
      var c, e, w, options, desc;
      if (arguments.length < 2 || typeof dscr !== "string") {
        options = value;
        value = dscr;
        dscr = null;
      } else {
        options = arguments[2];
      }
      if (isValue(dscr)) {
        c = contains.call(dscr, "c");
        e = contains.call(dscr, "e");
        w = contains.call(dscr, "w");
      } else {
        c = w = true;
        e = false;
      }
      desc = { value, configurable: c, enumerable: e, writable: w };
      return !options ? desc : assign(normalizeOpts(options), desc);
    };
    d.gs = function(dscr, get, set) {
      var c, e, options, desc;
      if (typeof dscr !== "string") {
        options = set;
        set = get;
        get = dscr;
        dscr = null;
      } else {
        options = arguments[3];
      }
      if (!isValue(get)) {
        get = void 0;
      } else if (!isPlainFunction(get)) {
        options = get;
        get = set = void 0;
      } else if (!isValue(set)) {
        set = void 0;
      } else if (!isPlainFunction(set)) {
        options = set;
        set = void 0;
      }
      if (isValue(dscr)) {
        c = contains.call(dscr, "c");
        e = contains.call(dscr, "e");
      } else {
        c = true;
        e = false;
      }
      desc = { get, set, configurable: c, enumerable: e };
      return !options ? desc : assign(normalizeOpts(options), desc);
    };
  }
});

// node_modules/es5-ext/object/valid-callable.js
var require_valid_callable = __commonJS({
  "node_modules/es5-ext/object/valid-callable.js"(exports, module2) {
    "use strict";
    module2.exports = function(fn) {
      if (typeof fn !== "function")
        throw new TypeError(fn + " is not a function");
      return fn;
    };
  }
});

// node_modules/es5-ext/object/_iterate.js
var require_iterate = __commonJS({
  "node_modules/es5-ext/object/_iterate.js"(exports, module2) {
    "use strict";
    var callable = require_valid_callable();
    var value = require_valid_value();
    var bind = Function.prototype.bind;
    var call = Function.prototype.call;
    var keys = Object.keys;
    var objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;
    module2.exports = function(method, defVal) {
      return function(obj, cb) {
        var list, thisArg = arguments[2], compareFn = arguments[3];
        obj = Object(value(obj));
        callable(cb);
        list = keys(obj);
        if (compareFn) {
          list.sort(typeof compareFn === "function" ? bind.call(compareFn, obj) : void 0);
        }
        if (typeof method !== "function")
          method = list[method];
        return call.call(method, list, function(key, index) {
          if (!objPropertyIsEnumerable.call(obj, key))
            return defVal;
          return call.call(cb, thisArg, obj[key], key, obj, index);
        });
      };
    };
  }
});

// node_modules/es5-ext/object/for-each.js
var require_for_each = __commonJS({
  "node_modules/es5-ext/object/for-each.js"(exports, module2) {
    "use strict";
    module2.exports = require_iterate()("forEach");
  }
});

// node_modules/es5-ext/object/map.js
var require_map = __commonJS({
  "node_modules/es5-ext/object/map.js"(exports, module2) {
    "use strict";
    var callable = require_valid_callable();
    var forEach = require_for_each();
    var call = Function.prototype.call;
    module2.exports = function(obj, cb) {
      var result = {}, thisArg = arguments[2];
      callable(cb);
      forEach(obj, function(value, key, targetObj, index) {
        result[key] = call.call(cb, thisArg, value, key, targetObj, index);
      });
      return result;
    };
  }
});

// node_modules/es5-ext/object/primitive-set.js
var require_primitive_set = __commonJS({
  "node_modules/es5-ext/object/primitive-set.js"(exports, module2) {
    "use strict";
    var forEach = Array.prototype.forEach;
    var create = Object.create;
    module2.exports = function(arg) {
      var set = create(null);
      forEach.call(arguments, function(name) {
        set[name] = true;
      });
      return set;
    };
  }
});

// node_modules/es5-ext/object/set-prototype-of/is-implemented.js
var require_is_implemented4 = __commonJS({
  "node_modules/es5-ext/object/set-prototype-of/is-implemented.js"(exports, module2) {
    "use strict";
    var create = Object.create;
    var getPrototypeOf = Object.getPrototypeOf;
    var plainObject = {};
    module2.exports = function() {
      var setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;
      if (typeof setPrototypeOf !== "function")
        return false;
      return getPrototypeOf(setPrototypeOf(customCreate(null), plainObject)) === plainObject;
    };
  }
});

// node_modules/es5-ext/object/is-object.js
var require_is_object = __commonJS({
  "node_modules/es5-ext/object/is-object.js"(exports, module2) {
    "use strict";
    var isValue = require_is_value();
    var map = { function: true, object: true };
    module2.exports = function(value) {
      return isValue(value) && map[typeof value] || false;
    };
  }
});

// node_modules/es5-ext/object/create.js
var require_create = __commonJS({
  "node_modules/es5-ext/object/create.js"(exports, module2) {
    "use strict";
    var create = Object.create;
    var shim;
    if (!require_is_implemented4()()) {
      shim = require_shim4();
    }
    module2.exports = function() {
      var nullObject, polyProps, desc;
      if (!shim)
        return create;
      if (shim.level !== 1)
        return create;
      nullObject = {};
      polyProps = {};
      desc = { configurable: false, enumerable: false, writable: true, value: void 0 };
      Object.getOwnPropertyNames(Object.prototype).forEach(function(name) {
        if (name === "__proto__") {
          polyProps[name] = {
            configurable: true,
            enumerable: false,
            writable: true,
            value: void 0
          };
          return;
        }
        polyProps[name] = desc;
      });
      Object.defineProperties(nullObject, polyProps);
      Object.defineProperty(shim, "nullPolyfill", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: nullObject
      });
      return function(prototype, props) {
        return create(prototype === null ? nullObject : prototype, props);
      };
    }();
  }
});

// node_modules/es5-ext/object/set-prototype-of/shim.js
var require_shim4 = __commonJS({
  "node_modules/es5-ext/object/set-prototype-of/shim.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var value = require_valid_value();
    var objIsPrototypeOf = Object.prototype.isPrototypeOf;
    var defineProperty = Object.defineProperty;
    var nullDesc = { configurable: true, enumerable: false, writable: true, value: void 0 };
    var validate;
    validate = function(obj, prototype) {
      value(obj);
      if (prototype === null || isObject(prototype))
        return obj;
      throw new TypeError("Prototype must be null or an object");
    };
    module2.exports = function(status) {
      var fn, set;
      if (!status)
        return null;
      if (status.level === 2) {
        if (status.set) {
          set = status.set;
          fn = function(obj, prototype) {
            set.call(validate(obj, prototype), prototype);
            return obj;
          };
        } else {
          fn = function(obj, prototype) {
            validate(obj, prototype).__proto__ = prototype;
            return obj;
          };
        }
      } else {
        fn = function self2(obj, prototype) {
          var isNullBase;
          validate(obj, prototype);
          isNullBase = objIsPrototypeOf.call(self2.nullPolyfill, obj);
          if (isNullBase)
            delete self2.nullPolyfill.__proto__;
          if (prototype === null)
            prototype = self2.nullPolyfill;
          obj.__proto__ = prototype;
          if (isNullBase)
            defineProperty(self2.nullPolyfill, "__proto__", nullDesc);
          return obj;
        };
      }
      return Object.defineProperty(fn, "level", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: status.level
      });
    }(
      function() {
        var tmpObj1 = /* @__PURE__ */ Object.create(null), tmpObj2 = {}, set, desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
        if (desc) {
          try {
            set = desc.set;
            set.call(tmpObj1, tmpObj2);
          } catch (ignore) {
          }
          if (Object.getPrototypeOf(tmpObj1) === tmpObj2)
            return { set, level: 2 };
        }
        tmpObj1.__proto__ = tmpObj2;
        if (Object.getPrototypeOf(tmpObj1) === tmpObj2)
          return { level: 2 };
        tmpObj1 = {};
        tmpObj1.__proto__ = tmpObj2;
        if (Object.getPrototypeOf(tmpObj1) === tmpObj2)
          return { level: 1 };
        return false;
      }()
    );
    require_create();
  }
});

// node_modules/es5-ext/object/set-prototype-of/index.js
var require_set_prototype_of = __commonJS({
  "node_modules/es5-ext/object/set-prototype-of/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented4()() ? Object.setPrototypeOf : require_shim4();
  }
});

// node_modules/es5-ext/math/sign/is-implemented.js
var require_is_implemented5 = __commonJS({
  "node_modules/es5-ext/math/sign/is-implemented.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      var sign = Math.sign;
      if (typeof sign !== "function")
        return false;
      return sign(10) === 1 && sign(-20) === -1;
    };
  }
});

// node_modules/es5-ext/math/sign/shim.js
var require_shim5 = __commonJS({
  "node_modules/es5-ext/math/sign/shim.js"(exports, module2) {
    "use strict";
    module2.exports = function(value) {
      value = Number(value);
      if (isNaN(value) || value === 0)
        return value;
      return value > 0 ? 1 : -1;
    };
  }
});

// node_modules/es5-ext/math/sign/index.js
var require_sign = __commonJS({
  "node_modules/es5-ext/math/sign/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented5()() ? Math.sign : require_shim5();
  }
});

// node_modules/es5-ext/number/to-integer.js
var require_to_integer = __commonJS({
  "node_modules/es5-ext/number/to-integer.js"(exports, module2) {
    "use strict";
    var sign = require_sign();
    var abs = Math.abs;
    var floor = Math.floor;
    module2.exports = function(value) {
      if (isNaN(value))
        return 0;
      value = Number(value);
      if (value === 0 || !isFinite(value))
        return value;
      return sign(value) * floor(abs(value));
    };
  }
});

// node_modules/es5-ext/number/to-pos-integer.js
var require_to_pos_integer = __commonJS({
  "node_modules/es5-ext/number/to-pos-integer.js"(exports, module2) {
    "use strict";
    var toInteger = require_to_integer();
    var max = Math.max;
    module2.exports = function(value) {
      return max(0, toInteger(value));
    };
  }
});

// node_modules/memoizee/lib/resolve-length.js
var require_resolve_length = __commonJS({
  "node_modules/memoizee/lib/resolve-length.js"(exports, module2) {
    "use strict";
    var toPosInt = require_to_pos_integer();
    module2.exports = function(optsLength, fnLength, isAsync) {
      var length;
      if (isNaN(optsLength)) {
        length = fnLength;
        if (!(length >= 0))
          return 1;
        if (isAsync && length)
          return length - 1;
        return length;
      }
      if (optsLength === false)
        return false;
      return toPosInt(optsLength);
    };
  }
});

// node_modules/memoizee/lib/registered-extensions.js
var require_registered_extensions = __commonJS({
  "node_modules/memoizee/lib/registered-extensions.js"() {
    "use strict";
  }
});

// node_modules/es5-ext/error/custom.js
var require_custom = __commonJS({
  "node_modules/es5-ext/error/custom.js"(exports, module2) {
    "use strict";
    var assign = require_assign();
    var isObject = require_is_object();
    var isValue = require_is_value();
    var captureStackTrace = Error.captureStackTrace;
    module2.exports = function(message) {
      var err = new Error(message), code = arguments[1], ext = arguments[2];
      if (!isValue(ext)) {
        if (isObject(code)) {
          ext = code;
          code = null;
        }
      }
      if (isValue(ext))
        assign(err, ext);
      if (isValue(code))
        err.code = code;
      if (captureStackTrace)
        captureStackTrace(err, module2.exports);
      return err;
    };
  }
});

// node_modules/es5-ext/object/mixin.js
var require_mixin = __commonJS({
  "node_modules/es5-ext/object/mixin.js"(exports, module2) {
    "use strict";
    var value = require_valid_value();
    var defineProperty = Object.defineProperty;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    module2.exports = function(target, source) {
      var error, sourceObject = Object(value(source));
      target = Object(value(target));
      getOwnPropertyNames(sourceObject).forEach(function(name) {
        try {
          defineProperty(target, name, getOwnPropertyDescriptor(source, name));
        } catch (e) {
          error = e;
        }
      });
      if (typeof getOwnPropertySymbols === "function") {
        getOwnPropertySymbols(sourceObject).forEach(function(symbol) {
          try {
            defineProperty(target, symbol, getOwnPropertyDescriptor(source, symbol));
          } catch (e) {
            error = e;
          }
        });
      }
      if (error !== void 0)
        throw error;
      return target;
    };
  }
});

// node_modules/es5-ext/function/_define-length.js
var require_define_length = __commonJS({
  "node_modules/es5-ext/function/_define-length.js"(exports, module2) {
    "use strict";
    var toPosInt = require_to_pos_integer();
    var test = function(arg1, arg2) {
      return arg2;
    };
    var desc;
    var defineProperty;
    var generate;
    var mixin;
    try {
      Object.defineProperty(test, "length", {
        configurable: true,
        writable: false,
        enumerable: false,
        value: 1
      });
    } catch (ignore) {
    }
    if (test.length === 1) {
      desc = { configurable: true, writable: false, enumerable: false };
      defineProperty = Object.defineProperty;
      module2.exports = function(fn, length) {
        length = toPosInt(length);
        if (fn.length === length)
          return fn;
        desc.value = length;
        return defineProperty(fn, "length", desc);
      };
    } else {
      mixin = require_mixin();
      generate = function() {
        var cache = [];
        return function(length) {
          var args, i = 0;
          if (cache[length])
            return cache[length];
          args = [];
          while (length--)
            args.push("a" + (++i).toString(36));
          return new Function(
            "fn",
            "return function (" + args.join(", ") + ") { return fn.apply(this, arguments); };"
          );
        };
      }();
      module2.exports = function(src, length) {
        var target;
        length = toPosInt(length);
        if (src.length === length)
          return src;
        target = generate(length)(src);
        try {
          mixin(target, src);
        } catch (ignore) {
        }
        return target;
      };
    }
  }
});

// node_modules/event-emitter/index.js
var require_event_emitter = __commonJS({
  "node_modules/event-emitter/index.js"(exports, module2) {
    "use strict";
    var d = require_d();
    var callable = require_valid_callable();
    var apply = Function.prototype.apply;
    var call = Function.prototype.call;
    var create = Object.create;
    var defineProperty = Object.defineProperty;
    var defineProperties = Object.defineProperties;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var descriptor = { configurable: true, enumerable: false, writable: true };
    var on;
    var once;
    var off;
    var emit;
    var methods;
    var descriptors;
    var base;
    on = function(type, listener) {
      var data;
      callable(listener);
      if (!hasOwnProperty2.call(this, "__ee__")) {
        data = descriptor.value = create(null);
        defineProperty(this, "__ee__", descriptor);
        descriptor.value = null;
      } else {
        data = this.__ee__;
      }
      if (!data[type])
        data[type] = listener;
      else if (typeof data[type] === "object")
        data[type].push(listener);
      else
        data[type] = [data[type], listener];
      return this;
    };
    once = function(type, listener) {
      var once2, self2;
      callable(listener);
      self2 = this;
      on.call(this, type, once2 = function() {
        off.call(self2, type, once2);
        apply.call(listener, this, arguments);
      });
      once2.__eeOnceListener__ = listener;
      return this;
    };
    off = function(type, listener) {
      var data, listeners, candidate, i;
      callable(listener);
      if (!hasOwnProperty2.call(this, "__ee__"))
        return this;
      data = this.__ee__;
      if (!data[type])
        return this;
      listeners = data[type];
      if (typeof listeners === "object") {
        for (i = 0; candidate = listeners[i]; ++i) {
          if (candidate === listener || candidate.__eeOnceListener__ === listener) {
            if (listeners.length === 2)
              data[type] = listeners[i ? 0 : 1];
            else
              listeners.splice(i, 1);
          }
        }
      } else {
        if (listeners === listener || listeners.__eeOnceListener__ === listener) {
          delete data[type];
        }
      }
      return this;
    };
    emit = function(type) {
      var i, l, listener, listeners, args;
      if (!hasOwnProperty2.call(this, "__ee__"))
        return;
      listeners = this.__ee__[type];
      if (!listeners)
        return;
      if (typeof listeners === "object") {
        l = arguments.length;
        args = new Array(l - 1);
        for (i = 1; i < l; ++i)
          args[i - 1] = arguments[i];
        listeners = listeners.slice();
        for (i = 0; listener = listeners[i]; ++i) {
          apply.call(listener, this, args);
        }
      } else {
        switch (arguments.length) {
          case 1:
            call.call(listeners, this);
            break;
          case 2:
            call.call(listeners, this, arguments[1]);
            break;
          case 3:
            call.call(listeners, this, arguments[1], arguments[2]);
            break;
          default:
            l = arguments.length;
            args = new Array(l - 1);
            for (i = 1; i < l; ++i) {
              args[i - 1] = arguments[i];
            }
            apply.call(listeners, this, args);
        }
      }
    };
    methods = {
      on,
      once,
      off,
      emit
    };
    descriptors = {
      on: d(on),
      once: d(once),
      off: d(off),
      emit: d(emit)
    };
    base = defineProperties({}, descriptors);
    module2.exports = exports = function(o) {
      return o == null ? create(base) : defineProperties(Object(o), descriptors);
    };
    exports.methods = methods;
  }
});

// node_modules/es5-ext/array/from/is-implemented.js
var require_is_implemented6 = __commonJS({
  "node_modules/es5-ext/array/from/is-implemented.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      var from = Array.from, arr, result;
      if (typeof from !== "function")
        return false;
      arr = ["raz", "dwa"];
      result = from(arr);
      return Boolean(result && result !== arr && result[1] === "dwa");
    };
  }
});

// node_modules/ext/global-this/is-implemented.js
var require_is_implemented7 = __commonJS({
  "node_modules/ext/global-this/is-implemented.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      if (typeof globalThis !== "object")
        return false;
      if (!globalThis)
        return false;
      return globalThis.Array === Array;
    };
  }
});

// node_modules/ext/global-this/implementation.js
var require_implementation = __commonJS({
  "node_modules/ext/global-this/implementation.js"(exports, module2) {
    var naiveFallback = function() {
      if (typeof self === "object" && self)
        return self;
      if (typeof window === "object" && window)
        return window;
      throw new Error("Unable to resolve global `this`");
    };
    module2.exports = function() {
      if (this)
        return this;
      try {
        Object.defineProperty(Object.prototype, "__global__", {
          get: function() {
            return this;
          },
          configurable: true
        });
      } catch (error) {
        return naiveFallback();
      }
      try {
        if (!__global__)
          return naiveFallback();
        return __global__;
      } finally {
        delete Object.prototype.__global__;
      }
    }();
  }
});

// node_modules/ext/global-this/index.js
var require_global_this = __commonJS({
  "node_modules/ext/global-this/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented7()() ? globalThis : require_implementation();
  }
});

// node_modules/es6-symbol/is-implemented.js
var require_is_implemented8 = __commonJS({
  "node_modules/es6-symbol/is-implemented.js"(exports, module2) {
    "use strict";
    var global2 = require_global_this();
    var validTypes = { object: true, symbol: true };
    module2.exports = function() {
      var Symbol2 = global2.Symbol;
      var symbol;
      if (typeof Symbol2 !== "function")
        return false;
      symbol = Symbol2("test symbol");
      try {
        String(symbol);
      } catch (e) {
        return false;
      }
      if (!validTypes[typeof Symbol2.iterator])
        return false;
      if (!validTypes[typeof Symbol2.toPrimitive])
        return false;
      if (!validTypes[typeof Symbol2.toStringTag])
        return false;
      return true;
    };
  }
});

// node_modules/es6-symbol/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/es6-symbol/is-symbol.js"(exports, module2) {
    "use strict";
    module2.exports = function(value) {
      if (!value)
        return false;
      if (typeof value === "symbol")
        return true;
      if (!value.constructor)
        return false;
      if (value.constructor.name !== "Symbol")
        return false;
      return value[value.constructor.toStringTag] === "Symbol";
    };
  }
});

// node_modules/es6-symbol/validate-symbol.js
var require_validate_symbol = __commonJS({
  "node_modules/es6-symbol/validate-symbol.js"(exports, module2) {
    "use strict";
    var isSymbol = require_is_symbol();
    module2.exports = function(value) {
      if (!isSymbol(value))
        throw new TypeError(value + " is not a symbol");
      return value;
    };
  }
});

// node_modules/es6-symbol/lib/private/generate-name.js
var require_generate_name = __commonJS({
  "node_modules/es6-symbol/lib/private/generate-name.js"(exports, module2) {
    "use strict";
    var d = require_d();
    var create = Object.create;
    var defineProperty = Object.defineProperty;
    var objPrototype = Object.prototype;
    var created = create(null);
    module2.exports = function(desc) {
      var postfix = 0, name, ie11BugWorkaround;
      while (created[desc + (postfix || "")])
        ++postfix;
      desc += postfix || "";
      created[desc] = true;
      name = "@@" + desc;
      defineProperty(
        objPrototype,
        name,
        d.gs(null, function(value) {
          if (ie11BugWorkaround)
            return;
          ie11BugWorkaround = true;
          defineProperty(this, name, d(value));
          ie11BugWorkaround = false;
        })
      );
      return name;
    };
  }
});

// node_modules/es6-symbol/lib/private/setup/standard-symbols.js
var require_standard_symbols = __commonJS({
  "node_modules/es6-symbol/lib/private/setup/standard-symbols.js"(exports, module2) {
    "use strict";
    var d = require_d();
    var NativeSymbol = require_global_this().Symbol;
    module2.exports = function(SymbolPolyfill) {
      return Object.defineProperties(SymbolPolyfill, {
        // To ensure proper interoperability with other native functions (e.g. Array.from)
        // fallback to eventual native implementation of given symbol
        hasInstance: d(
          "",
          NativeSymbol && NativeSymbol.hasInstance || SymbolPolyfill("hasInstance")
        ),
        isConcatSpreadable: d(
          "",
          NativeSymbol && NativeSymbol.isConcatSpreadable || SymbolPolyfill("isConcatSpreadable")
        ),
        iterator: d("", NativeSymbol && NativeSymbol.iterator || SymbolPolyfill("iterator")),
        match: d("", NativeSymbol && NativeSymbol.match || SymbolPolyfill("match")),
        replace: d("", NativeSymbol && NativeSymbol.replace || SymbolPolyfill("replace")),
        search: d("", NativeSymbol && NativeSymbol.search || SymbolPolyfill("search")),
        species: d("", NativeSymbol && NativeSymbol.species || SymbolPolyfill("species")),
        split: d("", NativeSymbol && NativeSymbol.split || SymbolPolyfill("split")),
        toPrimitive: d(
          "",
          NativeSymbol && NativeSymbol.toPrimitive || SymbolPolyfill("toPrimitive")
        ),
        toStringTag: d(
          "",
          NativeSymbol && NativeSymbol.toStringTag || SymbolPolyfill("toStringTag")
        ),
        unscopables: d(
          "",
          NativeSymbol && NativeSymbol.unscopables || SymbolPolyfill("unscopables")
        )
      });
    };
  }
});

// node_modules/es6-symbol/lib/private/setup/symbol-registry.js
var require_symbol_registry = __commonJS({
  "node_modules/es6-symbol/lib/private/setup/symbol-registry.js"(exports, module2) {
    "use strict";
    var d = require_d();
    var validateSymbol = require_validate_symbol();
    var registry = /* @__PURE__ */ Object.create(null);
    module2.exports = function(SymbolPolyfill) {
      return Object.defineProperties(SymbolPolyfill, {
        for: d(function(key) {
          if (registry[key])
            return registry[key];
          return registry[key] = SymbolPolyfill(String(key));
        }),
        keyFor: d(function(symbol) {
          var key;
          validateSymbol(symbol);
          for (key in registry) {
            if (registry[key] === symbol)
              return key;
          }
          return void 0;
        })
      });
    };
  }
});

// node_modules/es6-symbol/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/es6-symbol/polyfill.js"(exports, module2) {
    "use strict";
    var d = require_d();
    var validateSymbol = require_validate_symbol();
    var NativeSymbol = require_global_this().Symbol;
    var generateName = require_generate_name();
    var setupStandardSymbols = require_standard_symbols();
    var setupSymbolRegistry = require_symbol_registry();
    var create = Object.create;
    var defineProperties = Object.defineProperties;
    var defineProperty = Object.defineProperty;
    var SymbolPolyfill;
    var HiddenSymbol;
    var isNativeSafe;
    if (typeof NativeSymbol === "function") {
      try {
        String(NativeSymbol());
        isNativeSafe = true;
      } catch (ignore) {
      }
    } else {
      NativeSymbol = null;
    }
    HiddenSymbol = function Symbol2(description) {
      if (this instanceof HiddenSymbol)
        throw new TypeError("Symbol is not a constructor");
      return SymbolPolyfill(description);
    };
    module2.exports = SymbolPolyfill = function Symbol2(description) {
      var symbol;
      if (this instanceof Symbol2)
        throw new TypeError("Symbol is not a constructor");
      if (isNativeSafe)
        return NativeSymbol(description);
      symbol = create(HiddenSymbol.prototype);
      description = description === void 0 ? "" : String(description);
      return defineProperties(symbol, {
        __description__: d("", description),
        __name__: d("", generateName(description))
      });
    };
    setupStandardSymbols(SymbolPolyfill);
    setupSymbolRegistry(SymbolPolyfill);
    defineProperties(HiddenSymbol.prototype, {
      constructor: d(SymbolPolyfill),
      toString: d("", function() {
        return this.__name__;
      })
    });
    defineProperties(SymbolPolyfill.prototype, {
      toString: d(function() {
        return "Symbol (" + validateSymbol(this).__description__ + ")";
      }),
      valueOf: d(function() {
        return validateSymbol(this);
      })
    });
    defineProperty(
      SymbolPolyfill.prototype,
      SymbolPolyfill.toPrimitive,
      d("", function() {
        var symbol = validateSymbol(this);
        if (typeof symbol === "symbol")
          return symbol;
        return symbol.toString();
      })
    );
    defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d("c", "Symbol"));
    defineProperty(
      HiddenSymbol.prototype,
      SymbolPolyfill.toStringTag,
      d("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])
    );
    defineProperty(
      HiddenSymbol.prototype,
      SymbolPolyfill.toPrimitive,
      d("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])
    );
  }
});

// node_modules/es6-symbol/index.js
var require_es6_symbol = __commonJS({
  "node_modules/es6-symbol/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented8()() ? require_global_this().Symbol : require_polyfill();
  }
});

// node_modules/es5-ext/function/is-arguments.js
var require_is_arguments = __commonJS({
  "node_modules/es5-ext/function/is-arguments.js"(exports, module2) {
    "use strict";
    var objToString = Object.prototype.toString;
    var id = objToString.call(function() {
      return arguments;
    }());
    module2.exports = function(value) {
      return objToString.call(value) === id;
    };
  }
});

// node_modules/es5-ext/function/is-function.js
var require_is_function = __commonJS({
  "node_modules/es5-ext/function/is-function.js"(exports, module2) {
    "use strict";
    var objToString = Object.prototype.toString;
    var isFunctionStringTag = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
    module2.exports = function(value) {
      return typeof value === "function" && isFunctionStringTag(objToString.call(value));
    };
  }
});

// node_modules/es5-ext/string/is-string.js
var require_is_string = __commonJS({
  "node_modules/es5-ext/string/is-string.js"(exports, module2) {
    "use strict";
    var objToString = Object.prototype.toString;
    var id = objToString.call("");
    module2.exports = function(value) {
      return typeof value === "string" || value && typeof value === "object" && (value instanceof String || objToString.call(value) === id) || false;
    };
  }
});

// node_modules/es5-ext/array/from/shim.js
var require_shim6 = __commonJS({
  "node_modules/es5-ext/array/from/shim.js"(exports, module2) {
    "use strict";
    var iteratorSymbol = require_es6_symbol().iterator;
    var isArguments = require_is_arguments();
    var isFunction = require_is_function();
    var toPosInt = require_to_pos_integer();
    var callable = require_valid_callable();
    var validValue = require_valid_value();
    var isValue = require_is_value();
    var isString = require_is_string();
    var isArray = Array.isArray;
    var call = Function.prototype.call;
    var desc = { configurable: true, enumerable: true, writable: true, value: null };
    var defineProperty = Object.defineProperty;
    module2.exports = function(arrayLike) {
      var mapFn = arguments[1], thisArg = arguments[2], Context, i, j, arr, length, code, iterator, result, getIterator, value;
      arrayLike = Object(validValue(arrayLike));
      if (isValue(mapFn))
        callable(mapFn);
      if (!this || this === Array || !isFunction(this)) {
        if (!mapFn) {
          if (isArguments(arrayLike)) {
            length = arrayLike.length;
            if (length !== 1)
              return Array.apply(null, arrayLike);
            arr = new Array(1);
            arr[0] = arrayLike[0];
            return arr;
          }
          if (isArray(arrayLike)) {
            arr = new Array(length = arrayLike.length);
            for (i = 0; i < length; ++i)
              arr[i] = arrayLike[i];
            return arr;
          }
        }
        arr = [];
      } else {
        Context = this;
      }
      if (!isArray(arrayLike)) {
        if ((getIterator = arrayLike[iteratorSymbol]) !== void 0) {
          iterator = callable(getIterator).call(arrayLike);
          if (Context)
            arr = new Context();
          result = iterator.next();
          i = 0;
          while (!result.done) {
            value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
            if (Context) {
              desc.value = value;
              defineProperty(arr, i, desc);
            } else {
              arr[i] = value;
            }
            result = iterator.next();
            ++i;
          }
          length = i;
        } else if (isString(arrayLike)) {
          length = arrayLike.length;
          if (Context)
            arr = new Context();
          for (i = 0, j = 0; i < length; ++i) {
            value = arrayLike[i];
            if (i + 1 < length) {
              code = value.charCodeAt(0);
              if (code >= 55296 && code <= 56319)
                value += arrayLike[++i];
            }
            value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
            if (Context) {
              desc.value = value;
              defineProperty(arr, j, desc);
            } else {
              arr[j] = value;
            }
            ++j;
          }
          length = j;
        }
      }
      if (length === void 0) {
        length = toPosInt(arrayLike.length);
        if (Context)
          arr = new Context(length);
        for (i = 0; i < length; ++i) {
          value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
          if (Context) {
            desc.value = value;
            defineProperty(arr, i, desc);
          } else {
            arr[i] = value;
          }
        }
      }
      if (Context) {
        desc.value = null;
        arr.length = length;
      }
      return arr;
    };
  }
});

// node_modules/es5-ext/array/from/index.js
var require_from = __commonJS({
  "node_modules/es5-ext/array/from/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented6()() ? Array.from : require_shim6();
  }
});

// node_modules/es5-ext/array/to-array.js
var require_to_array = __commonJS({
  "node_modules/es5-ext/array/to-array.js"(exports, module2) {
    "use strict";
    var from = require_from();
    var isArray = Array.isArray;
    module2.exports = function(arrayLike) {
      return isArray(arrayLike) ? arrayLike : from(arrayLike);
    };
  }
});

// node_modules/memoizee/lib/resolve-resolve.js
var require_resolve_resolve = __commonJS({
  "node_modules/memoizee/lib/resolve-resolve.js"(exports, module2) {
    "use strict";
    var toArray = require_to_array();
    var isValue = require_is_value();
    var callable = require_valid_callable();
    var slice = Array.prototype.slice;
    var resolveArgs;
    resolveArgs = function(args) {
      return this.map(function(resolve, i) {
        return resolve ? resolve(args[i]) : args[i];
      }).concat(slice.call(args, this.length));
    };
    module2.exports = function(resolvers) {
      resolvers = toArray(resolvers);
      resolvers.forEach(function(resolve) {
        if (isValue(resolve))
          callable(resolve);
      });
      return resolveArgs.bind(resolvers);
    };
  }
});

// node_modules/memoizee/lib/resolve-normalize.js
var require_resolve_normalize = __commonJS({
  "node_modules/memoizee/lib/resolve-normalize.js"(exports, module2) {
    "use strict";
    var callable = require_valid_callable();
    module2.exports = function(userNormalizer) {
      var normalizer;
      if (typeof userNormalizer === "function")
        return { set: userNormalizer, get: userNormalizer };
      normalizer = { get: callable(userNormalizer.get) };
      if (userNormalizer.set !== void 0) {
        normalizer.set = callable(userNormalizer.set);
        if (userNormalizer.delete)
          normalizer.delete = callable(userNormalizer.delete);
        if (userNormalizer.clear)
          normalizer.clear = callable(userNormalizer.clear);
        return normalizer;
      }
      normalizer.set = normalizer.get;
      return normalizer;
    };
  }
});

// node_modules/memoizee/lib/configure-map.js
var require_configure_map = __commonJS({
  "node_modules/memoizee/lib/configure-map.js"(exports, module2) {
    "use strict";
    var customError = require_custom();
    var defineLength = require_define_length();
    var d = require_d();
    var ee = require_event_emitter().methods;
    var resolveResolve = require_resolve_resolve();
    var resolveNormalize = require_resolve_normalize();
    var apply = Function.prototype.apply;
    var call = Function.prototype.call;
    var create = Object.create;
    var defineProperties = Object.defineProperties;
    var on = ee.on;
    var emit = ee.emit;
    module2.exports = function(original, length, options) {
      var cache = create(null), conf, memLength, get, set, del, clear, extDel, extGet, extHas, normalizer, getListeners, setListeners, deleteListeners, memoized, resolve;
      if (length !== false)
        memLength = length;
      else if (isNaN(original.length))
        memLength = 1;
      else
        memLength = original.length;
      if (options.normalizer) {
        normalizer = resolveNormalize(options.normalizer);
        get = normalizer.get;
        set = normalizer.set;
        del = normalizer.delete;
        clear = normalizer.clear;
      }
      if (options.resolvers != null)
        resolve = resolveResolve(options.resolvers);
      if (get) {
        memoized = defineLength(function(arg) {
          var id, result, args = arguments;
          if (resolve)
            args = resolve(args);
          id = get(args);
          if (id !== null) {
            if (hasOwnProperty.call(cache, id)) {
              if (getListeners)
                conf.emit("get", id, args, this);
              return cache[id];
            }
          }
          if (args.length === 1)
            result = call.call(original, this, args[0]);
          else
            result = apply.call(original, this, args);
          if (id === null) {
            id = get(args);
            if (id !== null)
              throw customError("Circular invocation", "CIRCULAR_INVOCATION");
            id = set(args);
          } else if (hasOwnProperty.call(cache, id)) {
            throw customError("Circular invocation", "CIRCULAR_INVOCATION");
          }
          cache[id] = result;
          if (setListeners)
            conf.emit("set", id, null, result);
          return result;
        }, memLength);
      } else if (length === 0) {
        memoized = function() {
          var result;
          if (hasOwnProperty.call(cache, "data")) {
            if (getListeners)
              conf.emit("get", "data", arguments, this);
            return cache.data;
          }
          if (arguments.length)
            result = apply.call(original, this, arguments);
          else
            result = call.call(original, this);
          if (hasOwnProperty.call(cache, "data")) {
            throw customError("Circular invocation", "CIRCULAR_INVOCATION");
          }
          cache.data = result;
          if (setListeners)
            conf.emit("set", "data", null, result);
          return result;
        };
      } else {
        memoized = function(arg) {
          var result, args = arguments, id;
          if (resolve)
            args = resolve(arguments);
          id = String(args[0]);
          if (hasOwnProperty.call(cache, id)) {
            if (getListeners)
              conf.emit("get", id, args, this);
            return cache[id];
          }
          if (args.length === 1)
            result = call.call(original, this, args[0]);
          else
            result = apply.call(original, this, args);
          if (hasOwnProperty.call(cache, id)) {
            throw customError("Circular invocation", "CIRCULAR_INVOCATION");
          }
          cache[id] = result;
          if (setListeners)
            conf.emit("set", id, null, result);
          return result;
        };
      }
      conf = {
        original,
        memoized,
        profileName: options.profileName,
        get: function(args) {
          if (resolve)
            args = resolve(args);
          if (get)
            return get(args);
          return String(args[0]);
        },
        has: function(id) {
          return hasOwnProperty.call(cache, id);
        },
        delete: function(id) {
          var result;
          if (!hasOwnProperty.call(cache, id))
            return;
          if (del)
            del(id);
          result = cache[id];
          delete cache[id];
          if (deleteListeners)
            conf.emit("delete", id, result);
        },
        clear: function() {
          var oldCache = cache;
          if (clear)
            clear();
          cache = create(null);
          conf.emit("clear", oldCache);
        },
        on: function(type, listener) {
          if (type === "get")
            getListeners = true;
          else if (type === "set")
            setListeners = true;
          else if (type === "delete")
            deleteListeners = true;
          return on.call(this, type, listener);
        },
        emit,
        updateEnv: function() {
          original = conf.original;
        }
      };
      if (get) {
        extDel = defineLength(function(arg) {
          var id, args = arguments;
          if (resolve)
            args = resolve(args);
          id = get(args);
          if (id === null)
            return;
          conf.delete(id);
        }, memLength);
      } else if (length === 0) {
        extDel = function() {
          return conf.delete("data");
        };
      } else {
        extDel = function(arg) {
          if (resolve)
            arg = resolve(arguments)[0];
          return conf.delete(arg);
        };
      }
      extGet = defineLength(function() {
        var id, args = arguments;
        if (length === 0)
          return cache.data;
        if (resolve)
          args = resolve(args);
        if (get)
          id = get(args);
        else
          id = String(args[0]);
        return cache[id];
      });
      extHas = defineLength(function() {
        var id, args = arguments;
        if (length === 0)
          return conf.has("data");
        if (resolve)
          args = resolve(args);
        if (get)
          id = get(args);
        else
          id = String(args[0]);
        if (id === null)
          return false;
        return conf.has(id);
      });
      defineProperties(memoized, {
        __memoized__: d(true),
        delete: d(extDel),
        clear: d(conf.clear),
        _get: d(extGet),
        _has: d(extHas)
      });
      return conf;
    };
  }
});

// node_modules/memoizee/plain.js
var require_plain = __commonJS({
  "node_modules/memoizee/plain.js"(exports, module2) {
    "use strict";
    var callable = require_valid_callable();
    var forEach = require_for_each();
    var extensions = require_registered_extensions();
    var configure = require_configure_map();
    var resolveLength = require_resolve_length();
    module2.exports = function self2(fn) {
      var options, length, conf;
      callable(fn);
      options = Object(arguments[1]);
      if (options.async && options.promise) {
        throw new Error("Options 'async' and 'promise' cannot be used together");
      }
      if (hasOwnProperty.call(fn, "__memoized__") && !options.force)
        return fn;
      length = resolveLength(options.length, fn.length, options.async && extensions.async);
      conf = configure(fn, length, options);
      forEach(extensions, function(extFn, name) {
        if (options[name])
          extFn(options[name], conf, options);
      });
      if (self2.__profiler__)
        self2.__profiler__(conf);
      conf.updateEnv();
      return conf.memoized;
    };
  }
});

// node_modules/memoizee/normalizers/primitive.js
var require_primitive = __commonJS({
  "node_modules/memoizee/normalizers/primitive.js"(exports, module2) {
    "use strict";
    module2.exports = function(args) {
      var id, i, length = args.length;
      if (!length)
        return "";
      id = String(args[i = 0]);
      while (--length)
        id += "" + args[++i];
      return id;
    };
  }
});

// node_modules/memoizee/normalizers/get-primitive-fixed.js
var require_get_primitive_fixed = __commonJS({
  "node_modules/memoizee/normalizers/get-primitive-fixed.js"(exports, module2) {
    "use strict";
    module2.exports = function(length) {
      if (!length) {
        return function() {
          return "";
        };
      }
      return function(args) {
        var id = String(args[0]), i = 0, currentLength = length;
        while (--currentLength) {
          id += "" + args[++i];
        }
        return id;
      };
    };
  }
});

// node_modules/es5-ext/number/is-nan/is-implemented.js
var require_is_implemented9 = __commonJS({
  "node_modules/es5-ext/number/is-nan/is-implemented.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      var numberIsNaN = Number.isNaN;
      if (typeof numberIsNaN !== "function")
        return false;
      return !numberIsNaN({}) && numberIsNaN(NaN) && !numberIsNaN(34);
    };
  }
});

// node_modules/es5-ext/number/is-nan/shim.js
var require_shim7 = __commonJS({
  "node_modules/es5-ext/number/is-nan/shim.js"(exports, module2) {
    "use strict";
    module2.exports = function(value) {
      return value !== value;
    };
  }
});

// node_modules/es5-ext/number/is-nan/index.js
var require_is_nan = __commonJS({
  "node_modules/es5-ext/number/is-nan/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented9()() ? Number.isNaN : require_shim7();
  }
});

// node_modules/es5-ext/array/#/e-index-of.js
var require_e_index_of = __commonJS({
  "node_modules/es5-ext/array/#/e-index-of.js"(exports, module2) {
    "use strict";
    var numberIsNaN = require_is_nan();
    var toPosInt = require_to_pos_integer();
    var value = require_valid_value();
    var indexOf = Array.prototype.indexOf;
    var objHasOwnProperty = Object.prototype.hasOwnProperty;
    var abs = Math.abs;
    var floor = Math.floor;
    module2.exports = function(searchElement) {
      var i, length, fromIndex, val;
      if (!numberIsNaN(searchElement))
        return indexOf.apply(this, arguments);
      length = toPosInt(value(this).length);
      fromIndex = arguments[1];
      if (isNaN(fromIndex))
        fromIndex = 0;
      else if (fromIndex >= 0)
        fromIndex = floor(fromIndex);
      else
        fromIndex = toPosInt(this.length) - floor(abs(fromIndex));
      for (i = fromIndex; i < length; ++i) {
        if (objHasOwnProperty.call(this, i)) {
          val = this[i];
          if (numberIsNaN(val))
            return i;
        }
      }
      return -1;
    };
  }
});

// node_modules/memoizee/normalizers/get.js
var require_get = __commonJS({
  "node_modules/memoizee/normalizers/get.js"(exports, module2) {
    "use strict";
    var indexOf = require_e_index_of();
    var create = Object.create;
    module2.exports = function() {
      var lastId = 0, map = [], cache = create(null);
      return {
        get: function(args) {
          var index = 0, set = map, i, length = args.length;
          if (length === 0)
            return set[length] || null;
          if (set = set[length]) {
            while (index < length - 1) {
              i = indexOf.call(set[0], args[index]);
              if (i === -1)
                return null;
              set = set[1][i];
              ++index;
            }
            i = indexOf.call(set[0], args[index]);
            if (i === -1)
              return null;
            return set[1][i] || null;
          }
          return null;
        },
        set: function(args) {
          var index = 0, set = map, i, length = args.length;
          if (length === 0) {
            set[length] = ++lastId;
          } else {
            if (!set[length]) {
              set[length] = [[], []];
            }
            set = set[length];
            while (index < length - 1) {
              i = indexOf.call(set[0], args[index]);
              if (i === -1) {
                i = set[0].push(args[index]) - 1;
                set[1].push([[], []]);
              }
              set = set[1][i];
              ++index;
            }
            i = indexOf.call(set[0], args[index]);
            if (i === -1) {
              i = set[0].push(args[index]) - 1;
            }
            set[1][i] = ++lastId;
          }
          cache[lastId] = args;
          return lastId;
        },
        delete: function(id) {
          var index = 0, set = map, i, args = cache[id], length = args.length, path = [];
          if (length === 0) {
            delete set[length];
          } else if (set = set[length]) {
            while (index < length - 1) {
              i = indexOf.call(set[0], args[index]);
              if (i === -1) {
                return;
              }
              path.push(set, i);
              set = set[1][i];
              ++index;
            }
            i = indexOf.call(set[0], args[index]);
            if (i === -1) {
              return;
            }
            id = set[1][i];
            set[0].splice(i, 1);
            set[1].splice(i, 1);
            while (!set[0].length && path.length) {
              i = path.pop();
              set = path.pop();
              set[0].splice(i, 1);
              set[1].splice(i, 1);
            }
          }
          delete cache[id];
        },
        clear: function() {
          map = [];
          cache = create(null);
        }
      };
    };
  }
});

// node_modules/memoizee/normalizers/get-1.js
var require_get_1 = __commonJS({
  "node_modules/memoizee/normalizers/get-1.js"(exports, module2) {
    "use strict";
    var indexOf = require_e_index_of();
    module2.exports = function() {
      var lastId = 0, argsMap = [], cache = [];
      return {
        get: function(args) {
          var index = indexOf.call(argsMap, args[0]);
          return index === -1 ? null : cache[index];
        },
        set: function(args) {
          argsMap.push(args[0]);
          cache.push(++lastId);
          return lastId;
        },
        delete: function(id) {
          var index = indexOf.call(cache, id);
          if (index !== -1) {
            argsMap.splice(index, 1);
            cache.splice(index, 1);
          }
        },
        clear: function() {
          argsMap = [];
          cache = [];
        }
      };
    };
  }
});

// node_modules/memoizee/normalizers/get-fixed.js
var require_get_fixed = __commonJS({
  "node_modules/memoizee/normalizers/get-fixed.js"(exports, module2) {
    "use strict";
    var indexOf = require_e_index_of();
    var create = Object.create;
    module2.exports = function(length) {
      var lastId = 0, map = [[], []], cache = create(null);
      return {
        get: function(args) {
          var index = 0, set = map, i;
          while (index < length - 1) {
            i = indexOf.call(set[0], args[index]);
            if (i === -1)
              return null;
            set = set[1][i];
            ++index;
          }
          i = indexOf.call(set[0], args[index]);
          if (i === -1)
            return null;
          return set[1][i] || null;
        },
        set: function(args) {
          var index = 0, set = map, i;
          while (index < length - 1) {
            i = indexOf.call(set[0], args[index]);
            if (i === -1) {
              i = set[0].push(args[index]) - 1;
              set[1].push([[], []]);
            }
            set = set[1][i];
            ++index;
          }
          i = indexOf.call(set[0], args[index]);
          if (i === -1) {
            i = set[0].push(args[index]) - 1;
          }
          set[1][i] = ++lastId;
          cache[lastId] = args;
          return lastId;
        },
        delete: function(id) {
          var index = 0, set = map, i, path = [], args = cache[id];
          while (index < length - 1) {
            i = indexOf.call(set[0], args[index]);
            if (i === -1) {
              return;
            }
            path.push(set, i);
            set = set[1][i];
            ++index;
          }
          i = indexOf.call(set[0], args[index]);
          if (i === -1) {
            return;
          }
          id = set[1][i];
          set[0].splice(i, 1);
          set[1].splice(i, 1);
          while (!set[0].length && path.length) {
            i = path.pop();
            set = path.pop();
            set[0].splice(i, 1);
            set[1].splice(i, 1);
          }
          delete cache[id];
        },
        clear: function() {
          map = [[], []];
          cache = create(null);
        }
      };
    };
  }
});

// node_modules/next-tick/index.js
var require_next_tick = __commonJS({
  "node_modules/next-tick/index.js"(exports, module2) {
    "use strict";
    var ensureCallable = function(fn) {
      if (typeof fn !== "function")
        throw new TypeError(fn + " is not a function");
      return fn;
    };
    var byObserver = function(Observer) {
      var node = document.createTextNode(""), queue, currentQueue, i = 0;
      new Observer(function() {
        var callback;
        if (!queue) {
          if (!currentQueue)
            return;
          queue = currentQueue;
        } else if (currentQueue) {
          queue = currentQueue.concat(queue);
        }
        currentQueue = queue;
        queue = null;
        if (typeof currentQueue === "function") {
          callback = currentQueue;
          currentQueue = null;
          callback();
          return;
        }
        node.data = i = ++i % 2;
        while (currentQueue) {
          callback = currentQueue.shift();
          if (!currentQueue.length)
            currentQueue = null;
          callback();
        }
      }).observe(node, { characterData: true });
      return function(fn) {
        ensureCallable(fn);
        if (queue) {
          if (typeof queue === "function")
            queue = [queue, fn];
          else
            queue.push(fn);
          return;
        }
        queue = fn;
        node.data = i = ++i % 2;
      };
    };
    module2.exports = function() {
      if (typeof process === "object" && process && typeof process.nextTick === "function") {
        return process.nextTick;
      }
      if (typeof queueMicrotask === "function") {
        return function(cb) {
          queueMicrotask(ensureCallable(cb));
        };
      }
      if (typeof document === "object" && document) {
        if (typeof MutationObserver === "function")
          return byObserver(MutationObserver);
        if (typeof WebKitMutationObserver === "function")
          return byObserver(WebKitMutationObserver);
      }
      if (typeof setImmediate === "function") {
        return function(cb) {
          setImmediate(ensureCallable(cb));
        };
      }
      if (typeof setTimeout === "function" || typeof setTimeout === "object") {
        return function(cb) {
          setTimeout(ensureCallable(cb), 0);
        };
      }
      return null;
    }();
  }
});

// node_modules/memoizee/ext/async.js
var require_async = __commonJS({
  "node_modules/memoizee/ext/async.js"() {
    "use strict";
    var aFrom = require_from();
    var objectMap = require_map();
    var mixin = require_mixin();
    var defineLength = require_define_length();
    var nextTick = require_next_tick();
    var slice = Array.prototype.slice;
    var apply = Function.prototype.apply;
    var create = Object.create;
    require_registered_extensions().async = function(tbi, conf) {
      var waiting = create(null), cache = create(null), base = conf.memoized, original = conf.original, currentCallback, currentContext, currentArgs;
      conf.memoized = defineLength(function(arg) {
        var args = arguments, last = args[args.length - 1];
        if (typeof last === "function") {
          currentCallback = last;
          args = slice.call(args, 0, -1);
        }
        return base.apply(currentContext = this, currentArgs = args);
      }, base);
      try {
        mixin(conf.memoized, base);
      } catch (ignore) {
      }
      conf.on("get", function(id) {
        var cb, context, args;
        if (!currentCallback)
          return;
        if (waiting[id]) {
          if (typeof waiting[id] === "function")
            waiting[id] = [waiting[id], currentCallback];
          else
            waiting[id].push(currentCallback);
          currentCallback = null;
          return;
        }
        cb = currentCallback;
        context = currentContext;
        args = currentArgs;
        currentCallback = currentContext = currentArgs = null;
        nextTick(function() {
          var data;
          if (hasOwnProperty.call(cache, id)) {
            data = cache[id];
            conf.emit("getasync", id, args, context);
            apply.call(cb, data.context, data.args);
          } else {
            currentCallback = cb;
            currentContext = context;
            currentArgs = args;
            base.apply(context, args);
          }
        });
      });
      conf.original = function() {
        var args, cb, origCb, result;
        if (!currentCallback)
          return apply.call(original, this, arguments);
        args = aFrom(arguments);
        cb = function self2(err) {
          var cb2, args2, id = self2.id;
          if (id == null) {
            nextTick(apply.bind(self2, this, arguments));
            return void 0;
          }
          delete self2.id;
          cb2 = waiting[id];
          delete waiting[id];
          if (!cb2) {
            return void 0;
          }
          args2 = aFrom(arguments);
          if (conf.has(id)) {
            if (err) {
              conf.delete(id);
            } else {
              cache[id] = { context: this, args: args2 };
              conf.emit("setasync", id, typeof cb2 === "function" ? 1 : cb2.length);
            }
          }
          if (typeof cb2 === "function") {
            result = apply.call(cb2, this, args2);
          } else {
            cb2.forEach(function(cb3) {
              result = apply.call(cb3, this, args2);
            }, this);
          }
          return result;
        };
        origCb = currentCallback;
        currentCallback = currentContext = currentArgs = null;
        args.push(cb);
        result = apply.call(original, this, args);
        cb.cb = origCb;
        currentCallback = cb;
        return result;
      };
      conf.on("set", function(id) {
        if (!currentCallback) {
          conf.delete(id);
          return;
        }
        if (waiting[id]) {
          if (typeof waiting[id] === "function")
            waiting[id] = [waiting[id], currentCallback.cb];
          else
            waiting[id].push(currentCallback.cb);
        } else {
          waiting[id] = currentCallback.cb;
        }
        delete currentCallback.cb;
        currentCallback.id = id;
        currentCallback = null;
      });
      conf.on("delete", function(id) {
        var result;
        if (hasOwnProperty.call(waiting, id))
          return;
        if (!cache[id])
          return;
        result = cache[id];
        delete cache[id];
        conf.emit("deleteasync", id, slice.call(result.args, 1));
      });
      conf.on("clear", function() {
        var oldCache = cache;
        cache = create(null);
        conf.emit(
          "clearasync",
          objectMap(oldCache, function(data) {
            return slice.call(data.args, 1);
          })
        );
      });
    };
  }
});

// node_modules/es5-ext/object/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/es5-ext/object/is-callable.js"(exports, module2) {
    "use strict";
    module2.exports = function(obj) {
      return typeof obj === "function";
    };
  }
});

// node_modules/es5-ext/object/validate-stringifiable.js
var require_validate_stringifiable = __commonJS({
  "node_modules/es5-ext/object/validate-stringifiable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(stringifiable) {
      try {
        if (stringifiable && isCallable(stringifiable.toString))
          return stringifiable.toString();
        return String(stringifiable);
      } catch (e) {
        throw new TypeError("Passed argument cannot be stringifed");
      }
    };
  }
});

// node_modules/es5-ext/object/validate-stringifiable-value.js
var require_validate_stringifiable_value = __commonJS({
  "node_modules/es5-ext/object/validate-stringifiable-value.js"(exports, module2) {
    "use strict";
    var ensureValue = require_valid_value();
    var stringifiable = require_validate_stringifiable();
    module2.exports = function(value) {
      return stringifiable(ensureValue(value));
    };
  }
});

// node_modules/es5-ext/safe-to-string.js
var require_safe_to_string = __commonJS({
  "node_modules/es5-ext/safe-to-string.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(value) {
      try {
        if (value && isCallable(value.toString))
          return value.toString();
        return String(value);
      } catch (e) {
        return "<Non-coercible to string value>";
      }
    };
  }
});

// node_modules/es5-ext/to-short-string-representation.js
var require_to_short_string_representation = __commonJS({
  "node_modules/es5-ext/to-short-string-representation.js"(exports, module2) {
    "use strict";
    var safeToString = require_safe_to_string();
    var reNewLine = /[\n\r\u2028\u2029]/g;
    module2.exports = function(value) {
      var string = safeToString(value);
      if (string.length > 100)
        string = string.slice(0, 99) + "\u2026";
      string = string.replace(reNewLine, function(char) {
        return JSON.stringify(char).slice(1, -1);
      });
      return string;
    };
  }
});

// node_modules/is-promise/index.js
var require_is_promise = __commonJS({
  "node_modules/is-promise/index.js"(exports, module2) {
    module2.exports = isPromise;
    module2.exports.default = isPromise;
    function isPromise(obj) {
      return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
    }
  }
});

// node_modules/memoizee/ext/promise.js
var require_promise = __commonJS({
  "node_modules/memoizee/ext/promise.js"() {
    "use strict";
    var objectMap = require_map();
    var primitiveSet = require_primitive_set();
    var ensureString = require_validate_stringifiable_value();
    var toShortString = require_to_short_string_representation();
    var isPromise = require_is_promise();
    var nextTick = require_next_tick();
    var create = Object.create;
    var supportedModes = primitiveSet("then", "then:finally", "done", "done:finally");
    require_registered_extensions().promise = function(mode, conf) {
      var waiting = create(null), cache = create(null), promises = create(null);
      if (mode === true) {
        mode = null;
      } else {
        mode = ensureString(mode);
        if (!supportedModes[mode]) {
          throw new TypeError("'" + toShortString(mode) + "' is not valid promise mode");
        }
      }
      conf.on("set", function(id, ignore, promise) {
        var isFailed = false;
        if (!isPromise(promise)) {
          cache[id] = promise;
          conf.emit("setasync", id, 1);
          return;
        }
        waiting[id] = 1;
        promises[id] = promise;
        var onSuccess = function(result) {
          var count = waiting[id];
          if (isFailed) {
            throw new Error(
              "Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead."
            );
          }
          if (!count)
            return;
          delete waiting[id];
          cache[id] = result;
          conf.emit("setasync", id, count);
        };
        var onFailure = function() {
          isFailed = true;
          if (!waiting[id])
            return;
          delete waiting[id];
          delete promises[id];
          conf.delete(id);
        };
        var resolvedMode = mode;
        if (!resolvedMode)
          resolvedMode = "then";
        if (resolvedMode === "then") {
          var nextTickFailure = function() {
            nextTick(onFailure);
          };
          promise = promise.then(function(result) {
            nextTick(onSuccess.bind(this, result));
          }, nextTickFailure);
          if (typeof promise.finally === "function") {
            promise.finally(nextTickFailure);
          }
        } else if (resolvedMode === "done") {
          if (typeof promise.done !== "function") {
            throw new Error(
              "Memoizee error: Retrieved promise does not implement 'done' in 'done' mode"
            );
          }
          promise.done(onSuccess, onFailure);
        } else if (resolvedMode === "done:finally") {
          if (typeof promise.done !== "function") {
            throw new Error(
              "Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode"
            );
          }
          if (typeof promise.finally !== "function") {
            throw new Error(
              "Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode"
            );
          }
          promise.done(onSuccess);
          promise.finally(onFailure);
        }
      });
      conf.on("get", function(id, args, context) {
        var promise;
        if (waiting[id]) {
          ++waiting[id];
          return;
        }
        promise = promises[id];
        var emit = function() {
          conf.emit("getasync", id, args, context);
        };
        if (isPromise(promise)) {
          if (typeof promise.done === "function")
            promise.done(emit);
          else {
            promise.then(function() {
              nextTick(emit);
            });
          }
        } else {
          emit();
        }
      });
      conf.on("delete", function(id) {
        delete promises[id];
        if (waiting[id]) {
          delete waiting[id];
          return;
        }
        if (!hasOwnProperty.call(cache, id))
          return;
        var result = cache[id];
        delete cache[id];
        conf.emit("deleteasync", id, [result]);
      });
      conf.on("clear", function() {
        var oldCache = cache;
        cache = create(null);
        waiting = create(null);
        promises = create(null);
        conf.emit("clearasync", objectMap(oldCache, function(data) {
          return [data];
        }));
      });
    };
  }
});

// node_modules/memoizee/ext/dispose.js
var require_dispose = __commonJS({
  "node_modules/memoizee/ext/dispose.js"() {
    "use strict";
    var callable = require_valid_callable();
    var forEach = require_for_each();
    var extensions = require_registered_extensions();
    var apply = Function.prototype.apply;
    extensions.dispose = function(dispose, conf, options) {
      var del;
      callable(dispose);
      if (options.async && extensions.async || options.promise && extensions.promise) {
        conf.on("deleteasync", del = function(id, resultArray) {
          apply.call(dispose, null, resultArray);
        });
        conf.on("clearasync", function(cache) {
          forEach(cache, function(result, id) {
            del(id, result);
          });
        });
        return;
      }
      conf.on("delete", del = function(id, result) {
        dispose(result);
      });
      conf.on("clear", function(cache) {
        forEach(cache, function(result, id) {
          del(id, result);
        });
      });
    };
  }
});

// node_modules/timers-ext/max-timeout.js
var require_max_timeout = __commonJS({
  "node_modules/timers-ext/max-timeout.js"(exports, module2) {
    "use strict";
    module2.exports = 2147483647;
  }
});

// node_modules/timers-ext/valid-timeout.js
var require_valid_timeout = __commonJS({
  "node_modules/timers-ext/valid-timeout.js"(exports, module2) {
    "use strict";
    var toPosInt = require_to_pos_integer();
    var maxTimeout = require_max_timeout();
    module2.exports = function(value) {
      value = toPosInt(value);
      if (value > maxTimeout)
        throw new TypeError(value + " exceeds maximum possible timeout");
      return value;
    };
  }
});

// node_modules/memoizee/ext/max-age.js
var require_max_age = __commonJS({
  "node_modules/memoizee/ext/max-age.js"() {
    "use strict";
    var aFrom = require_from();
    var forEach = require_for_each();
    var nextTick = require_next_tick();
    var isPromise = require_is_promise();
    var timeout = require_valid_timeout();
    var extensions = require_registered_extensions();
    var noop = Function.prototype;
    var max = Math.max;
    var min = Math.min;
    var create = Object.create;
    extensions.maxAge = function(maxAge, conf, options) {
      var timeouts, postfix, preFetchAge, preFetchTimeouts;
      maxAge = timeout(maxAge);
      if (!maxAge)
        return;
      timeouts = create(null);
      postfix = options.async && extensions.async || options.promise && extensions.promise ? "async" : "";
      conf.on("set" + postfix, function(id) {
        timeouts[id] = setTimeout(function() {
          conf.delete(id);
        }, maxAge);
        if (typeof timeouts[id].unref === "function")
          timeouts[id].unref();
        if (!preFetchTimeouts)
          return;
        if (preFetchTimeouts[id]) {
          if (preFetchTimeouts[id] !== "nextTick")
            clearTimeout(preFetchTimeouts[id]);
        }
        preFetchTimeouts[id] = setTimeout(function() {
          delete preFetchTimeouts[id];
        }, preFetchAge);
        if (typeof preFetchTimeouts[id].unref === "function")
          preFetchTimeouts[id].unref();
      });
      conf.on("delete" + postfix, function(id) {
        clearTimeout(timeouts[id]);
        delete timeouts[id];
        if (!preFetchTimeouts)
          return;
        if (preFetchTimeouts[id] !== "nextTick")
          clearTimeout(preFetchTimeouts[id]);
        delete preFetchTimeouts[id];
      });
      if (options.preFetch) {
        if (options.preFetch === true || isNaN(options.preFetch)) {
          preFetchAge = 0.333;
        } else {
          preFetchAge = max(min(Number(options.preFetch), 1), 0);
        }
        if (preFetchAge) {
          preFetchTimeouts = {};
          preFetchAge = (1 - preFetchAge) * maxAge;
          conf.on("get" + postfix, function(id, args, context) {
            if (!preFetchTimeouts[id]) {
              preFetchTimeouts[id] = "nextTick";
              nextTick(function() {
                var result;
                if (preFetchTimeouts[id] !== "nextTick")
                  return;
                delete preFetchTimeouts[id];
                conf.delete(id);
                if (options.async) {
                  args = aFrom(args);
                  args.push(noop);
                }
                result = conf.memoized.apply(context, args);
                if (options.promise) {
                  if (isPromise(result)) {
                    if (typeof result.done === "function")
                      result.done(noop, noop);
                    else
                      result.then(noop, noop);
                  }
                }
              });
            }
          });
        }
      }
      conf.on("clear" + postfix, function() {
        forEach(timeouts, function(id) {
          clearTimeout(id);
        });
        timeouts = {};
        if (preFetchTimeouts) {
          forEach(preFetchTimeouts, function(id) {
            if (id !== "nextTick")
              clearTimeout(id);
          });
          preFetchTimeouts = {};
        }
      });
    };
  }
});

// node_modules/lru-queue/index.js
var require_lru_queue = __commonJS({
  "node_modules/lru-queue/index.js"(exports, module2) {
    "use strict";
    var toPosInt = require_to_pos_integer();
    var create = Object.create;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    module2.exports = function(limit) {
      var size = 0, base = 1, queue = create(null), map = create(null), index = 0, del;
      limit = toPosInt(limit);
      return {
        hit: function(id) {
          var oldIndex = map[id], nuIndex = ++index;
          queue[nuIndex] = id;
          map[id] = nuIndex;
          if (!oldIndex) {
            ++size;
            if (size <= limit)
              return;
            id = queue[base];
            del(id);
            return id;
          }
          delete queue[oldIndex];
          if (base !== oldIndex)
            return;
          while (!hasOwnProperty2.call(queue, ++base))
            continue;
        },
        delete: del = function(id) {
          var oldIndex = map[id];
          if (!oldIndex)
            return;
          delete queue[oldIndex];
          delete map[id];
          --size;
          if (base !== oldIndex)
            return;
          if (!size) {
            index = 0;
            base = 1;
            return;
          }
          while (!hasOwnProperty2.call(queue, ++base))
            continue;
        },
        clear: function() {
          size = 0;
          base = 1;
          queue = create(null);
          map = create(null);
          index = 0;
        }
      };
    };
  }
});

// node_modules/memoizee/ext/max.js
var require_max = __commonJS({
  "node_modules/memoizee/ext/max.js"() {
    "use strict";
    var toPosInteger = require_to_pos_integer();
    var lruQueue = require_lru_queue();
    var extensions = require_registered_extensions();
    extensions.max = function(max, conf, options) {
      var postfix, queue, hit;
      max = toPosInteger(max);
      if (!max)
        return;
      queue = lruQueue(max);
      postfix = options.async && extensions.async || options.promise && extensions.promise ? "async" : "";
      conf.on("set" + postfix, hit = function(id) {
        id = queue.hit(id);
        if (id === void 0)
          return;
        conf.delete(id);
      });
      conf.on("get" + postfix, hit);
      conf.on("delete" + postfix, queue.delete);
      conf.on("clear" + postfix, queue.clear);
    };
  }
});

// node_modules/memoizee/ext/ref-counter.js
var require_ref_counter = __commonJS({
  "node_modules/memoizee/ext/ref-counter.js"() {
    "use strict";
    var d = require_d();
    var extensions = require_registered_extensions();
    var create = Object.create;
    var defineProperties = Object.defineProperties;
    extensions.refCounter = function(ignore, conf, options) {
      var cache, postfix;
      cache = create(null);
      postfix = options.async && extensions.async || options.promise && extensions.promise ? "async" : "";
      conf.on("set" + postfix, function(id, length) {
        cache[id] = length || 1;
      });
      conf.on("get" + postfix, function(id) {
        ++cache[id];
      });
      conf.on("delete" + postfix, function(id) {
        delete cache[id];
      });
      conf.on("clear" + postfix, function() {
        cache = {};
      });
      defineProperties(conf.memoized, {
        deleteRef: d(function() {
          var id = conf.get(arguments);
          if (id === null)
            return null;
          if (!cache[id])
            return null;
          if (!--cache[id]) {
            conf.delete(id);
            return true;
          }
          return false;
        }),
        getRefCount: d(function() {
          var id = conf.get(arguments);
          if (id === null)
            return 0;
          if (!cache[id])
            return 0;
          return cache[id];
        })
      });
    };
  }
});

// node_modules/memoizee/index.js
var require_memoizee = __commonJS({
  "node_modules/memoizee/index.js"(exports, module2) {
    "use strict";
    var normalizeOpts = require_normalize_options();
    var resolveLength = require_resolve_length();
    var plain = require_plain();
    module2.exports = function(fn) {
      var options = normalizeOpts(arguments[1]), length;
      if (!options.normalizer) {
        length = options.length = resolveLength(options.length, fn.length, options.async);
        if (length !== 0) {
          if (options.primitive) {
            if (length === false) {
              options.normalizer = require_primitive();
            } else if (length > 1) {
              options.normalizer = require_get_primitive_fixed()(length);
            }
          } else if (length === false)
            options.normalizer = require_get()();
          else if (length === 1)
            options.normalizer = require_get_1()();
          else
            options.normalizer = require_get_fixed()(length);
        }
      }
      if (options.async)
        require_async();
      if (options.promise)
        require_promise();
      if (options.dispose)
        require_dispose();
      if (options.maxAge)
        require_max_age();
      if (options.max)
        require_max();
      if (options.refCounter)
        require_ref_counter();
      return plain(fn, options);
    };
  }
});

// node_modules/type/string/coerce.js
var require_coerce = __commonJS({
  "node_modules/type/string/coerce.js"(exports, module2) {
    "use strict";
    var isValue = require_is();
    var isObject = require_is2();
    var objectToString = Object.prototype.toString;
    module2.exports = function(value) {
      if (!isValue(value))
        return null;
      if (isObject(value)) {
        var valueToString = value.toString;
        if (typeof valueToString !== "function")
          return null;
        if (valueToString === objectToString)
          return null;
      }
      try {
        return "" + value;
      } catch (error) {
        return null;
      }
    };
  }
});

// node_modules/type/lib/safe-to-string.js
var require_safe_to_string2 = __commonJS({
  "node_modules/type/lib/safe-to-string.js"(exports, module2) {
    "use strict";
    module2.exports = function(value) {
      try {
        return value.toString();
      } catch (error) {
        try {
          return String(value);
        } catch (error2) {
          return null;
        }
      }
    };
  }
});

// node_modules/type/lib/to-short-string.js
var require_to_short_string = __commonJS({
  "node_modules/type/lib/to-short-string.js"(exports, module2) {
    "use strict";
    var safeToString = require_safe_to_string2();
    var reNewLine = /[\n\r\u2028\u2029]/g;
    module2.exports = function(value) {
      var string = safeToString(value);
      if (string === null)
        return "<Non-coercible to string value>";
      if (string.length > 100)
        string = string.slice(0, 99) + "\u2026";
      string = string.replace(reNewLine, function(char) {
        switch (char) {
          case "\n":
            return "\\n";
          case "\r":
            return "\\r";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("Unexpected character");
        }
      });
      return string;
    };
  }
});

// node_modules/type/lib/resolve-exception.js
var require_resolve_exception = __commonJS({
  "node_modules/type/lib/resolve-exception.js"(exports, module2) {
    "use strict";
    var isValue = require_is();
    var isObject = require_is2();
    var stringCoerce = require_coerce();
    var toShortString = require_to_short_string();
    var resolveMessage = function(message, value) {
      return message.replace("%v", toShortString(value));
    };
    module2.exports = function(value, defaultMessage, inputOptions) {
      if (!isObject(inputOptions))
        throw new TypeError(resolveMessage(defaultMessage, value));
      if (!isValue(value)) {
        if ("default" in inputOptions)
          return inputOptions["default"];
        if (inputOptions.isOptional)
          return null;
      }
      var errorMessage = stringCoerce(inputOptions.errorMessage);
      if (!isValue(errorMessage))
        errorMessage = defaultMessage;
      throw new TypeError(resolveMessage(errorMessage, value));
    };
  }
});

// node_modules/type/value/ensure.js
var require_ensure = __commonJS({
  "node_modules/type/value/ensure.js"(exports, module2) {
    "use strict";
    var resolveException = require_resolve_exception();
    var is = require_is();
    module2.exports = function(value) {
      if (is(value))
        return value;
      return resolveException(value, "Cannot use %v", arguments[1]);
    };
  }
});

// node_modules/d/lazy.js
var require_lazy = __commonJS({
  "node_modules/d/lazy.js"(exports, module2) {
    "use strict";
    var isPlainFunction = require_is5();
    var ensureValue = require_ensure();
    var isValue = require_is();
    var map = require_map();
    var contains = require_contains();
    var call = Function.prototype.call;
    var defineProperty = Object.defineProperty;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var cacheDesc = { configurable: false, enumerable: false, writable: false, value: null };
    var define;
    define = function(name, options) {
      var value, dgs, cacheName, desc, writable = false, resolvable, flat;
      options = Object(ensureValue(options));
      cacheName = options.cacheName;
      flat = options.flat;
      if (!isValue(cacheName))
        cacheName = name;
      delete options.cacheName;
      value = options.value;
      resolvable = isPlainFunction(value);
      delete options.value;
      dgs = { configurable: Boolean(options.configurable), enumerable: Boolean(options.enumerable) };
      if (name !== cacheName) {
        dgs.get = function() {
          if (hasOwnProperty2.call(this, cacheName))
            return this[cacheName];
          cacheDesc.value = resolvable ? call.call(value, this, options) : value;
          cacheDesc.writable = writable;
          defineProperty(this, cacheName, cacheDesc);
          cacheDesc.value = null;
          if (desc)
            defineProperty(this, name, desc);
          return this[cacheName];
        };
      } else if (!flat) {
        dgs.get = function self2() {
          var ownDesc;
          if (hasOwnProperty2.call(this, name)) {
            ownDesc = getOwnPropertyDescriptor(this, name);
            if (ownDesc) {
              if (ownDesc.hasOwnProperty("value"))
                return ownDesc.value;
              if (typeof ownDesc.get === "function" && ownDesc.get !== self2) {
                return ownDesc.get.call(this);
              }
              return value;
            }
          }
          desc.value = resolvable ? call.call(value, this, options) : value;
          defineProperty(this, name, desc);
          desc.value = null;
          return this[name];
        };
      } else {
        dgs.get = function self2() {
          var base = this, ownDesc;
          if (hasOwnProperty2.call(this, name)) {
            ownDesc = getOwnPropertyDescriptor(this, name);
            if (ownDesc.hasOwnProperty("value"))
              return ownDesc.value;
            if (typeof ownDesc.get === "function" && ownDesc.get !== self2) {
              return ownDesc.get.call(this);
            }
          }
          while (!hasOwnProperty2.call(base, name))
            base = getPrototypeOf(base);
          desc.value = resolvable ? call.call(value, base, options) : value;
          defineProperty(base, name, desc);
          desc.value = null;
          return base[name];
        };
      }
      dgs.set = function(value2) {
        if (hasOwnProperty2.call(this, name)) {
          throw new TypeError("Cannot assign to lazy defined '" + name + "' property of " + this);
        }
        dgs.get.call(this);
        this[cacheName] = value2;
      };
      if (options.desc) {
        desc = {
          configurable: contains.call(options.desc, "c"),
          enumerable: contains.call(options.desc, "e")
        };
        if (cacheName === name) {
          desc.writable = contains.call(options.desc, "w");
          desc.value = null;
        } else {
          writable = contains.call(options.desc, "w");
          desc.get = dgs.get;
          desc.set = dgs.set;
        }
        delete options.desc;
      } else if (cacheName === name) {
        desc = {
          configurable: Boolean(options.configurable),
          enumerable: Boolean(options.enumerable),
          writable: Boolean(options.writable),
          value: null
        };
      }
      delete options.configurable;
      delete options.enumerable;
      delete options.writable;
      return dgs;
    };
    module2.exports = function(props) {
      return map(props, function(desc, name) {
        return define(name, desc);
      });
    };
  }
});

// node_modules/memoizee/lib/methods.js
var require_methods = __commonJS({
  "node_modules/memoizee/lib/methods.js"(exports, module2) {
    "use strict";
    var forEach = require_for_each();
    var normalizeOpts = require_normalize_options();
    var callable = require_valid_callable();
    var lazy = require_lazy();
    var resolveLength = require_resolve_length();
    var extensions = require_registered_extensions();
    module2.exports = function(memoize) {
      return function(props) {
        forEach(props, function(desc) {
          var fn = callable(desc.value), length;
          desc.value = function(options) {
            if (options.getNormalizer) {
              options = normalizeOpts(options);
              if (length === void 0) {
                length = resolveLength(
                  options.length,
                  fn.length,
                  options.async && extensions.async
                );
              }
              options.normalizer = options.getNormalizer(length);
              delete options.getNormalizer;
            }
            return memoize(fn.bind(this), options);
          };
        });
        return lazy(props);
      };
    };
  }
});

// node_modules/memoizee/methods.js
var require_methods2 = __commonJS({
  "node_modules/memoizee/methods.js"(exports, module2) {
    "use strict";
    module2.exports = require_methods()(require_memoizee());
  }
});

// node_modules/es5-ext/object/first-key.js
var require_first_key = __commonJS({
  "node_modules/es5-ext/object/first-key.js"(exports, module2) {
    "use strict";
    var value = require_valid_value();
    var objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;
    module2.exports = function(obj) {
      var i;
      value(obj);
      for (i in obj) {
        if (objPropertyIsEnumerable.call(obj, i))
          return i;
      }
      return null;
    };
  }
});

// node_modules/es5-ext/array/#/for-each-right.js
var require_for_each_right = __commonJS({
  "node_modules/es5-ext/array/#/for-each-right.js"(exports, module2) {
    "use strict";
    var toPosInt = require_to_pos_integer();
    var callable = require_valid_callable();
    var value = require_valid_value();
    var objHasOwnProperty = Object.prototype.hasOwnProperty;
    var call = Function.prototype.call;
    module2.exports = function(cb) {
      var i, self2, thisArg;
      self2 = Object(value(this));
      callable(cb);
      thisArg = arguments[1];
      for (i = toPosInt(self2.length) - 1; i >= 0; --i) {
        if (objHasOwnProperty.call(self2, i))
          call.call(cb, thisArg, self2[i], i, self2);
      }
    };
  }
});

// node_modules/es5-ext/array/#/uniq.js
var require_uniq = __commonJS({
  "node_modules/es5-ext/array/#/uniq.js"(exports, module2) {
    "use strict";
    var indexOf = require_e_index_of();
    var filter = Array.prototype.filter;
    var isFirst;
    isFirst = function(value, index) {
      return indexOf.call(this, value) === index;
    };
    module2.exports = function() {
      return filter.call(this, isFirst, this);
    };
  }
});

// node_modules/cli-color/lib/sgr.js
var require_sgr = __commonJS({
  "node_modules/cli-color/lib/sgr.js"(exports, module2) {
    "use strict";
    var assign = require_assign();
    var includes = require_contains();
    var forOwn = require_for_each();
    var onlyKey = require_first_key();
    var forEachRight = require_for_each_right();
    var uniq = require_uniq();
    var CSI = "\x1B[";
    var sgr = function(code) {
      return CSI + code + "m";
    };
    sgr.CSI = CSI;
    var mods = assign(
      {
        // Style
        bold: { _bold: [1, 22] },
        italic: { _italic: [3, 23] },
        underline: { _underline: [4, 24] },
        blink: { _blink: [5, 25] },
        inverse: { _inverse: [7, 27] },
        strike: { _strike: [9, 29] }
        // Color
      },
      ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"].reduce(function(obj, color, index) {
        obj[color] = { _fg: [30 + index, 39] };
        obj[color + "Bright"] = { _fg: [90 + index, 39] };
        obj["bg" + color[0].toUpperCase() + color.slice(1)] = { _bg: [40 + index, 49] };
        obj["bg" + color[0].toUpperCase() + color.slice(1) + "Bright"] = { _bg: [100 + index, 49] };
        return obj;
      }, {})
    );
    sgr.mods = mods;
    sgr.openers = {};
    sgr.closers = {};
    forOwn(mods, function(mod) {
      var modPair = mod[onlyKey(mod)];
      sgr.openers[modPair[0]] = modPair;
      sgr.closers[modPair[1]] = modPair;
    });
    sgr.openStyle = function(openedMods, code) {
      openedMods.push(sgr.openers[code]);
    };
    sgr.closeStyle = function(openedMods, code) {
      forEachRight.call(openedMods, function(modPair, index) {
        if (modPair[1] === code) {
          openedMods.splice(index, 1);
        }
      });
    };
    sgr.prepend = function(currentMods) {
      return currentMods.map(function(modPair) {
        return sgr(modPair[0]);
      });
    };
    sgr.complete = function(openedMods, closerCodes) {
      closerCodes.forEach(function(code) {
        sgr.closeStyle(openedMods, code);
      });
      openedMods = openedMods.reverse();
      openedMods = openedMods.map(function(modPair) {
        return modPair[1];
      });
      openedMods = uniq.call(openedMods);
      return openedMods.map(sgr);
    };
    var hasCSI = function(str) {
      return includes.call(str, CSI);
    };
    sgr.hasCSI = hasCSI;
    var extractCode = function(csi) {
      var code = csi.slice(2, -1);
      code = Number(code);
      return code;
    };
    sgr.extractCode = extractCode;
    module2.exports = sgr;
  }
});

// node_modules/cli-color/lib/supports-color.js
var require_supports_color = __commonJS({
  "node_modules/cli-color/lib/supports-color.js"(exports, module2) {
    "use strict";
    var state = null;
    var enableColor = function() {
      state = true;
    };
    var disableColor = function() {
      state = false;
    };
    var autoDetectSupport = function() {
      state = null;
    };
    var isColorSupported = function() {
      return state === null ? !process.env.NO_COLOR : state;
    };
    module2.exports = {
      enableColor,
      disableColor,
      autoDetectSupport,
      isColorSupported
    };
  }
});

// node_modules/cli-color/lib/xterm-colors.js
var require_xterm_colors = __commonJS({
  "node_modules/cli-color/lib/xterm-colors.js"(exports, module2) {
    "use strict";
    module2.exports = [
      "000000",
      "800000",
      "008000",
      "808000",
      "000080",
      "800080",
      "008080",
      "c0c0c0",
      "808080",
      "ff0000",
      "00ff00",
      "ffff00",
      "0000ff",
      "ff00ff",
      "00ffff",
      "ffffff",
      "000000",
      "00005f",
      "000087",
      "0000af",
      "0000d7",
      "0000ff",
      "005f00",
      "005f5f",
      "005f87",
      "005faf",
      "005fd7",
      "005fff",
      "008700",
      "00875f",
      "008787",
      "0087af",
      "0087d7",
      "0087ff",
      "00af00",
      "00af5f",
      "00af87",
      "00afaf",
      "00afd7",
      "00afff",
      "00d700",
      "00d75f",
      "00d787",
      "00d7af",
      "00d7d7",
      "00d7ff",
      "00ff00",
      "00ff5f",
      "00ff87",
      "00ffaf",
      "00ffd7",
      "00ffff",
      "5f0000",
      "5f005f",
      "5f0087",
      "5f00af",
      "5f00d7",
      "5f00ff",
      "5f5f00",
      "5f5f5f",
      "5f5f87",
      "5f5faf",
      "5f5fd7",
      "5f5fff",
      "5f8700",
      "5f875f",
      "5f8787",
      "5f87af",
      "5f87d7",
      "5f87ff",
      "5faf00",
      "5faf5f",
      "5faf87",
      "5fafaf",
      "5fafd7",
      "5fafff",
      "5fd700",
      "5fd75f",
      "5fd787",
      "5fd7af",
      "5fd7d7",
      "5fd7ff",
      "5fff00",
      "5fff5f",
      "5fff87",
      "5fffaf",
      "5fffd7",
      "5fffff",
      "870000",
      "87005f",
      "870087",
      "8700af",
      "8700d7",
      "8700ff",
      "875f00",
      "875f5f",
      "875f87",
      "875faf",
      "875fd7",
      "875fff",
      "878700",
      "87875f",
      "878787",
      "8787af",
      "8787d7",
      "8787ff",
      "87af00",
      "87af5f",
      "87af87",
      "87afaf",
      "87afd7",
      "87afff",
      "87d700",
      "87d75f",
      "87d787",
      "87d7af",
      "87d7d7",
      "87d7ff",
      "87ff00",
      "87ff5f",
      "87ff87",
      "87ffaf",
      "87ffd7",
      "87ffff",
      "af0000",
      "af005f",
      "af0087",
      "af00af",
      "af00d7",
      "af00ff",
      "af5f00",
      "af5f5f",
      "af5f87",
      "af5faf",
      "af5fd7",
      "af5fff",
      "af8700",
      "af875f",
      "af8787",
      "af87af",
      "af87d7",
      "af87ff",
      "afaf00",
      "afaf5f",
      "afaf87",
      "afafaf",
      "afafd7",
      "afafff",
      "afd700",
      "afd75f",
      "afd787",
      "afd7af",
      "afd7d7",
      "afd7ff",
      "afff00",
      "afff5f",
      "afff87",
      "afffaf",
      "afffd7",
      "afffff",
      "d70000",
      "d7005f",
      "d70087",
      "d700af",
      "d700d7",
      "d700ff",
      "d75f00",
      "d75f5f",
      "d75f87",
      "d75faf",
      "d75fd7",
      "d75fff",
      "d78700",
      "d7875f",
      "d78787",
      "d787af",
      "d787d7",
      "d787ff",
      "d7af00",
      "d7af5f",
      "d7af87",
      "d7afaf",
      "d7afd7",
      "d7afff",
      "d7d700",
      "d7d75f",
      "d7d787",
      "d7d7af",
      "d7d7d7",
      "d7d7ff",
      "d7ff00",
      "d7ff5f",
      "d7ff87",
      "d7ffaf",
      "d7ffd7",
      "d7ffff",
      "ff0000",
      "ff005f",
      "ff0087",
      "ff00af",
      "ff00d7",
      "ff00ff",
      "ff5f00",
      "ff5f5f",
      "ff5f87",
      "ff5faf",
      "ff5fd7",
      "ff5fff",
      "ff8700",
      "ff875f",
      "ff8787",
      "ff87af",
      "ff87d7",
      "ff87ff",
      "ffaf00",
      "ffaf5f",
      "ffaf87",
      "ffafaf",
      "ffafd7",
      "ffafff",
      "ffd700",
      "ffd75f",
      "ffd787",
      "ffd7af",
      "ffd7d7",
      "ffd7ff",
      "ffff00",
      "ffff5f",
      "ffff87",
      "ffffaf",
      "ffffd7",
      "ffffff",
      "080808",
      "121212",
      "1c1c1c",
      "262626",
      "303030",
      "3a3a3a",
      "444444",
      "4e4e4e",
      "585858",
      "626262",
      "6c6c6c",
      "767676",
      "808080",
      "8a8a8a",
      "949494",
      "9e9e9e",
      "a8a8a8",
      "b2b2b2",
      "bcbcbc",
      "c6c6c6",
      "d0d0d0",
      "dadada",
      "e4e4e4",
      "eeeeee"
    ];
  }
});

// node_modules/cli-color/lib/xterm-match.js
var require_xterm_match = __commonJS({
  "node_modules/cli-color/lib/xterm-match.js"(exports, module2) {
    "use strict";
    var push = Array.prototype.push;
    var reduce = Array.prototype.reduce;
    var abs = Math.abs;
    var colors;
    var match;
    var result;
    var i;
    colors = require_xterm_colors().map(function(color) {
      return {
        r: parseInt(color.slice(0, 2), 16),
        g: parseInt(color.slice(2, 4), 16),
        b: parseInt(color.slice(4), 16)
      };
    });
    match = colors.slice(0, 16);
    module2.exports = result = [];
    i = 0;
    while (i < 8) {
      result.push(30 + i++);
    }
    i = 0;
    while (i < 8) {
      result.push(90 + i++);
    }
    push.apply(
      result,
      colors.slice(16).map(function(data) {
        var index, diff = Infinity;
        match.every(function(innerMatch, currentIndex) {
          var ndiff = reduce.call(
            "rgb",
            function(currentDiff, channel) {
              currentDiff += abs(innerMatch[channel] - data[channel]);
              return currentDiff;
            },
            0
          );
          if (ndiff < diff) {
            index = currentIndex;
            diff = ndiff;
          }
          return ndiff;
        });
        return result[index];
      })
    );
  }
});

// node_modules/cli-color/bare.js
var require_bare = __commonJS({
  "node_modules/cli-color/bare.js"(exports, module2) {
    "use strict";
    var d = require_d();
    var assign = require_assign();
    var forEach = require_for_each();
    var map = require_map();
    var primitiveSet = require_primitive_set();
    var setPrototypeOf = require_set_prototype_of();
    var memoize = require_memoizee();
    var memoizeMethods = require_methods2();
    var sgr = require_sgr();
    var supportsColor = require_supports_color();
    var mods = sgr.mods;
    var join = Array.prototype.join;
    var defineProperty = Object.defineProperty;
    var max = Math.max;
    var min = Math.min;
    var variantModes = primitiveSet("_fg", "_bg");
    var xtermMatch = process.platform === "win32" ? require_xterm_match() : null;
    var getFn;
    var memoized = memoize(function(scope, mod) {
      return defineProperty(getFn(), "_cliColorData", d(assign({}, scope._cliColorData, mod)));
    });
    var proto = Object.create(
      Function.prototype,
      assign(
        map(mods, function(mod) {
          return d.gs(function() {
            return memoized(this, mod);
          });
        }),
        memoizeMethods({
          // xterm (255) color
          xterm: d(function(code) {
            code = isNaN(code) ? 255 : min(max(code, 0), 255);
            return defineProperty(
              getFn(),
              "_cliColorData",
              d(
                assign({}, this._cliColorData, {
                  _fg: [xtermMatch ? xtermMatch[code] : "38;5;" + code, 39]
                })
              )
            );
          }),
          bgXterm: d(function(code) {
            code = isNaN(code) ? 255 : min(max(code, 0), 255);
            return defineProperty(
              getFn(),
              "_cliColorData",
              d(
                assign({}, this._cliColorData, {
                  _bg: [xtermMatch ? xtermMatch[code] + 10 : "48;5;" + code, 49]
                })
              )
            );
          })
        })
      )
    );
    var getEndRe = memoize(function(code) {
      return new RegExp("\x1B\\[" + code + "m", "g");
    }, {
      primitive: true
    });
    getFn = function() {
      return setPrototypeOf(
        function self2() {
          var start = "", end = "", msg = join.call(arguments, " "), conf = self2._cliColorData, hasAnsi = sgr.hasCSI(msg);
          forEach(
            conf,
            function(mod, key) {
              end = sgr(mod[1]) + end;
              start += sgr(mod[0]);
              if (hasAnsi) {
                msg = msg.replace(getEndRe(mod[1]), variantModes[key] ? sgr(mod[0]) : "");
              }
            },
            null,
            true
          );
          if (!supportsColor.isColorSupported())
            return msg;
          return start + msg + end;
        },
        proto
      );
    };
    module2.exports = Object.defineProperties(getFn(), {
      xtermSupported: d(!xtermMatch),
      _cliColorData: d("", {})
    });
  }
});

// node_modules/cli-color/window-size.js
var require_window_size = __commonJS({
  "node_modules/cli-color/window-size.js"(exports) {
    "use strict";
    var d = require_d();
    Object.defineProperties(exports, {
      width: d.gs("ce", function() {
        return process.stdout.columns || 0;
      }),
      height: d.gs("ce", function() {
        return process.stdout.rows || 0;
      })
    });
  }
});

// node_modules/cli-color/erase.js
var require_erase = __commonJS({
  "node_modules/cli-color/erase.js"(exports, module2) {
    "use strict";
    module2.exports = {
      screen: "\x1B[2J",
      screenLeft: "\x1B[1J",
      screenRight: "\x1B[J",
      line: "\x1B[2K",
      lineLeft: "\x1B[1K",
      lineRight: "\x1B[K"
    };
  }
});

// node_modules/es5-ext/math/trunc/is-implemented.js
var require_is_implemented10 = __commonJS({
  "node_modules/es5-ext/math/trunc/is-implemented.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      var trunc = Math.trunc;
      if (typeof trunc !== "function")
        return false;
      return trunc(13.67) === 13 && trunc(-13.67) === -13;
    };
  }
});

// node_modules/es5-ext/math/trunc/shim.js
var require_shim8 = __commonJS({
  "node_modules/es5-ext/math/trunc/shim.js"(exports, module2) {
    "use strict";
    var floor = Math.floor;
    module2.exports = function(value) {
      if (isNaN(value))
        return NaN;
      value = Number(value);
      if (value === 0)
        return value;
      if (value === Infinity)
        return Infinity;
      if (value === -Infinity)
        return -Infinity;
      if (value > 0)
        return floor(value);
      return -floor(-value);
    };
  }
});

// node_modules/es5-ext/math/trunc/index.js
var require_trunc = __commonJS({
  "node_modules/es5-ext/math/trunc/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented10()() ? Math.trunc : require_shim8();
  }
});

// node_modules/cli-color/move.js
var require_move = __commonJS({
  "node_modules/cli-color/move.js"(exports, module2) {
    "use strict";
    var d = require_d();
    var trunc = require_trunc();
    var up;
    var down;
    var right;
    var left;
    var abs = Math.abs;
    var floor = Math.floor;
    var max = Math.max;
    var getMove = function(control) {
      return function(num) {
        num = isNaN(num) ? 0 : max(floor(num), 0);
        return num ? "\x1B[" + num + control : "";
      };
    };
    module2.exports = Object.defineProperties(
      function(x, y) {
        x = isNaN(x) ? 0 : floor(x);
        y = isNaN(y) ? 0 : floor(y);
        return (x > 0 ? right(x) : left(-x)) + (y > 0 ? down(y) : up(-y));
      },
      {
        up: d(up = getMove("A")),
        down: d(down = getMove("B")),
        right: d(right = getMove("C")),
        left: d(left = getMove("D")),
        to: d(function(x, y) {
          x = isNaN(x) ? 1 : max(floor(x), 0) + 1;
          y = isNaN(y) ? 1 : max(floor(y), 0) + 1;
          return "\x1B[" + y + ";" + x + "H";
        }),
        lines: d(function(n) {
          var dir;
          n = trunc(n) || 0;
          dir = n >= 0 ? "B" : "A";
          n = floor(abs(n));
          return "\x1B[" + n + dir + "\x1B[1G";
        }),
        top: d("\x1B[5000F"),
        bottom: d("\x1B[5000B"),
        lineBegin: d("\x1B[5000D"),
        lineEnd: d("\x1B[5000C")
      }
    );
  }
});

// node_modules/cli-color/beep.js
var require_beep = __commonJS({
  "node_modules/cli-color/beep.js"(exports, module2) {
    "use strict";
    module2.exports = "\x07";
  }
});

// node_modules/es5-ext/array/generate.js
var require_generate = __commonJS({
  "node_modules/es5-ext/array/generate.js"(exports, module2) {
    "use strict";
    var toPosInt = require_to_pos_integer();
    var value = require_valid_value();
    var slice = Array.prototype.slice;
    module2.exports = function(length) {
      var arr, currentLength;
      length = toPosInt(value(length));
      if (length === 0)
        return [];
      arr = arguments.length < 2 ? [void 0] : slice.call(arguments, 1, 1 + length);
      while ((currentLength = arr.length) < length) {
        arr = arr.concat(arr.slice(0, length - currentLength));
      }
      return arr;
    };
  }
});

// node_modules/es5-ext/object/is-array-like.js
var require_is_array_like = __commonJS({
  "node_modules/es5-ext/object/is-array-like.js"(exports, module2) {
    "use strict";
    var isFunction = require_is_function();
    var isObject = require_is_object();
    var isValue = require_is_value();
    module2.exports = function(value) {
      return isValue(value) && typeof value.length === "number" && // Just checking ((typeof x === 'object') && (typeof x !== 'function'))
      // won't work right for some cases, e.g.:
      // type of instance of NodeList in Safari is a 'function'
      (isObject(value) && !isFunction(value) || typeof value === "string") || false;
    };
  }
});

// node_modules/es5-ext/iterable/is.js
var require_is6 = __commonJS({
  "node_modules/es5-ext/iterable/is.js"(exports, module2) {
    "use strict";
    var iteratorSymbol = require_es6_symbol().iterator;
    var isValue = require_is_value();
    var isArrayLike = require_is_array_like();
    module2.exports = function(value) {
      if (!isValue(value))
        return false;
      if (typeof value[iteratorSymbol] === "function")
        return true;
      return isArrayLike(value);
    };
  }
});

// node_modules/es5-ext/iterable/validate-object.js
var require_validate_object = __commonJS({
  "node_modules/es5-ext/iterable/validate-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var is = require_is6();
    module2.exports = function(value) {
      if (is(value) && isObject(value))
        return value;
      throw new TypeError(value + " is not an iterable or array-like object");
    };
  }
});

// node_modules/es5-ext/string/#/repeat/is-implemented.js
var require_is_implemented11 = __commonJS({
  "node_modules/es5-ext/string/#/repeat/is-implemented.js"(exports, module2) {
    "use strict";
    var str = "foo";
    module2.exports = function() {
      if (typeof str.repeat !== "function")
        return false;
      return str.repeat(2) === "foofoo";
    };
  }
});

// node_modules/es5-ext/string/#/repeat/shim.js
var require_shim9 = __commonJS({
  "node_modules/es5-ext/string/#/repeat/shim.js"(exports, module2) {
    "use strict";
    var value = require_valid_value();
    var toInteger = require_to_integer();
    module2.exports = function(count) {
      var str = String(value(this)), result;
      count = toInteger(count);
      if (count < 0)
        throw new RangeError("Count must be >= 0");
      if (!isFinite(count))
        throw new RangeError("Count must be < \u221E");
      result = "";
      while (count) {
        if (count % 2)
          result += str;
        if (count > 1)
          str += str;
        count >>= 1;
      }
      return result;
    };
  }
});

// node_modules/es5-ext/string/#/repeat/index.js
var require_repeat = __commonJS({
  "node_modules/es5-ext/string/#/repeat/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_is_implemented11()() ? String.prototype.repeat : require_shim9();
  }
});

// node_modules/cli-color/regex-ansi.js
var require_regex_ansi = __commonJS({
  "node_modules/cli-color/regex-ansi.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      return new RegExp(
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
        "g"
      );
    };
  }
});

// node_modules/cli-color/strip.js
var require_strip = __commonJS({
  "node_modules/cli-color/strip.js"(exports, module2) {
    "use strict";
    var stringifiable = require_validate_stringifiable();
    var r = require_regex_ansi()();
    module2.exports = function(str) {
      return stringifiable(str).replace(r, "");
    };
  }
});

// node_modules/cli-color/get-stripped-length.js
var require_get_stripped_length = __commonJS({
  "node_modules/cli-color/get-stripped-length.js"(exports, module2) {
    "use strict";
    var strip = require_strip();
    module2.exports = function(str) {
      return strip(str).length;
    };
  }
});

// node_modules/cli-color/columns.js
var require_columns = __commonJS({
  "node_modules/cli-color/columns.js"(exports, module2) {
    "use strict";
    var generate = require_generate();
    var from = require_from();
    var iterable = require_validate_object();
    var isValue = require_is_value();
    var stringifiable = require_validate_stringifiable();
    var repeat = require_repeat();
    var getStrippedLength = require_get_stripped_length();
    var push = Array.prototype.push;
    module2.exports = function(inputRows) {
      var options = Object(arguments[1]), colsMeta = [], colsOptions = options.columns || [], rows = [];
      from(iterable(inputRows), function(row) {
        var rowRows = [[]];
        from(iterable(row), function(cellStr, columnIndex) {
          var cellRows = stringifiable(cellStr).split("\n");
          while (cellRows.length > rowRows.length)
            rowRows.push(generate(columnIndex, ""));
          cellRows.forEach(function(cellRow, rowRowIndex) {
            rowRows[rowRowIndex][columnIndex] = cellRow;
          });
        });
        push.apply(rows, rowRows);
      });
      return rows.map(function(row) {
        return from(iterable(row), function(str, index) {
          var col = colsMeta[index], strLength;
          if (!col)
            col = colsMeta[index] = { width: 0 };
          str = stringifiable(str);
          strLength = getStrippedLength(str);
          if (strLength > col.width)
            col.width = strLength;
          return { str, length: strLength };
        });
      }).map(function(row) {
        return row.map(function(item, index) {
          var pad, align = "left", colOptions = colsOptions && colsOptions[index];
          align = colOptions && colOptions.align === "right" ? "right" : "left";
          pad = repeat.call(" ", colsMeta[index].width - item.length);
          if (align === "left")
            return item.str + pad;
          return pad + item.str;
        }).join(isValue(options.sep) ? options.sep : " | ");
      }).join("\n") + "\n";
    };
  }
});

// node_modules/cli-color/slice.js
var require_slice = __commonJS({
  "node_modules/cli-color/slice.js"(exports, module2) {
    "use strict";
    var reAnsi = require_regex_ansi();
    var stringifiable = require_validate_stringifiable_value();
    var length = require_get_stripped_length();
    var sgr = require_sgr();
    var max = Math.max;
    var Token = function(token) {
      this.token = token;
    };
    var tokenize = function(str) {
      var match = reAnsi().exec(str);
      if (!match) {
        return [str];
      }
      var index = match.index, head, prehead, tail;
      if (index === 0) {
        head = match[0];
        tail = str.slice(head.length);
        return [new Token(head)].concat(tokenize(tail));
      }
      prehead = str.slice(0, index);
      head = match[0];
      tail = str.slice(index + head.length);
      return [prehead, new Token(head)].concat(tokenize(tail));
    };
    var isChunkInSlice = function(chunk, index, begin, end) {
      var endIndex = chunk.length + index;
      if (begin > endIndex)
        return false;
      if (end < index)
        return false;
      return true;
    };
    var sliceSeq = function(seq, begin, end) {
      var sliced = seq.reduce(
        function(state, chunk) {
          var index = state.index;
          if (chunk instanceof Token) {
            var code = sgr.extractCode(chunk.token);
            if (index <= begin) {
              if (code in sgr.openers) {
                sgr.openStyle(state.preOpeners, code);
              }
              if (code in sgr.closers) {
                sgr.closeStyle(state.preOpeners, code);
              }
            } else if (index < end) {
              if (code in sgr.openers) {
                sgr.openStyle(state.inOpeners, code);
                state.seq.push(chunk);
              } else if (code in sgr.closers) {
                state.inClosers.push(code);
                state.seq.push(chunk);
              }
            }
          } else {
            var nextChunk = "";
            if (isChunkInSlice(chunk, index, begin, end)) {
              var relBegin = Math.max(begin - index, 0), relEnd = Math.min(end - index, chunk.length);
              nextChunk = chunk.slice(relBegin, relEnd);
            }
            state.seq.push(nextChunk);
            state.index = index + chunk.length;
          }
          return state;
        },
        {
          index: 0,
          seq: [],
          // preOpeners -> [ mod ]
          // preOpeners must be prepended to the slice if they wasn't closed til the end of it
          // preOpeners must be closed if they wasn't closed til the end of the slice
          preOpeners: [],
          // inOpeners  -> [ mod ]
          // inOpeners already in the slice and must not be prepended to the slice
          // inOpeners must be closed if they wasn't closed til the end of the slice
          inOpeners: [],
          // opener CSI inside slice
          // inClosers -> [ code ]
          // closer CSIs for determining which pre/in-Openers must be closed
          inClosers: []
        }
      );
      sliced.seq = [].concat(
        sgr.prepend(sliced.preOpeners),
        sliced.seq,
        sgr.complete([].concat(sliced.preOpeners, sliced.inOpeners), sliced.inClosers)
      );
      return sliced.seq;
    };
    module2.exports = function(str) {
      var seq, begin = Number(arguments[1]), end = Number(arguments[2]), len;
      str = stringifiable(str);
      len = length(str);
      if (isNaN(begin)) {
        begin = 0;
      }
      if (isNaN(end)) {
        end = len;
      }
      if (begin < 0) {
        begin = max(len + begin, 0);
      }
      if (end < 0) {
        end = max(len + end, 0);
      }
      seq = tokenize(str);
      seq = sliceSeq(seq, begin, end);
      return seq.map(function(chunk) {
        if (chunk instanceof Token) {
          return chunk.token;
        }
        return chunk;
      }).join("");
    };
  }
});

// node_modules/es5-ext/function/#/compose.js
var require_compose = __commonJS({
  "node_modules/es5-ext/function/#/compose.js"(exports, module2) {
    "use strict";
    var isValue = require_is_value();
    var callable = require_valid_callable();
    var aFrom = require_from();
    var apply = Function.prototype.apply;
    var call = Function.prototype.call;
    var callFn = function(arg, fn) {
      return call.call(fn, this, arg);
    };
    module2.exports = function(fnIgnored) {
      var fns, first;
      var args = aFrom(arguments);
      fns = isValue(this) ? [this].concat(args) : args;
      fns.forEach(callable);
      fns = fns.reverse();
      first = fns[0];
      fns = fns.slice(1);
      return function(argIgnored) {
        return fns.reduce(callFn, apply.call(first, this, arguments));
      };
    };
  }
});

// node_modules/cli-color/throbber.js
var require_throbber = __commonJS({
  "node_modules/cli-color/throbber.js"(exports, module2) {
    "use strict";
    var compose = require_compose();
    var callable = require_valid_callable();
    var d = require_d();
    var validTimeout = require_valid_timeout();
    var chars = "-\\|/";
    var l = chars.length;
    var ThrobberIterator;
    ThrobberIterator = function() {
    };
    Object.defineProperties(ThrobberIterator.prototype, {
      index: d(-1),
      running: d(false),
      next: d(function() {
        var str = this.running ? "\b" : "";
        if (!this.running)
          this.running = true;
        return str + chars[this.index = (this.index + 1) % l];
      }),
      reset: d(function() {
        if (!this.running)
          return "";
        this.index = -1;
        this.running = false;
        return "\b";
      })
    });
    module2.exports = exports = function(write, interval) {
      var format = arguments[2], token, iterator = new ThrobberIterator();
      callable(write);
      interval = validTimeout(interval);
      if (format !== void 0)
        write = compose.call(write, callable(format));
      return {
        start: function() {
          if (token)
            return;
          token = setInterval(function() {
            write(iterator.next());
          }, interval);
        },
        restart: function() {
          this.stop();
          this.start();
        },
        stop: function() {
          if (!token)
            return;
          clearInterval(token);
          token = null;
          write(iterator.reset());
        }
      };
    };
    Object.defineProperty(exports, "Iterator", d(ThrobberIterator));
  }
});

// node_modules/cli-color/reset.js
var require_reset = __commonJS({
  "node_modules/cli-color/reset.js"(exports, module2) {
    "use strict";
    module2.exports = "\x1B[2J\x1B[0;0H";
  }
});

// node_modules/es5-ext/object/valid-object.js
var require_valid_object = __commonJS({
  "node_modules/es5-ext/object/valid-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    module2.exports = function(value) {
      if (!isObject(value))
        throw new TypeError(value + " is not an Object");
      return value;
    };
  }
});

// node_modules/es5-ext/array/#/clear.js
var require_clear = __commonJS({
  "node_modules/es5-ext/array/#/clear.js"(exports, module2) {
    "use strict";
    var value = require_valid_value();
    module2.exports = function() {
      value(this).length = 0;
      return this;
    };
  }
});

// node_modules/type/plain-function/ensure.js
var require_ensure2 = __commonJS({
  "node_modules/type/plain-function/ensure.js"(exports, module2) {
    "use strict";
    var resolveException = require_resolve_exception();
    var is = require_is5();
    module2.exports = function(value) {
      if (is(value))
        return value;
      return resolveException(value, "%v is not a plain function", arguments[1]);
    };
  }
});

// node_modules/es5-ext/object/copy.js
var require_copy = __commonJS({
  "node_modules/es5-ext/object/copy.js"(exports, module2) {
    "use strict";
    var aFrom = require_from();
    var assign = require_assign();
    var value = require_valid_value();
    module2.exports = function(obj) {
      var copy = Object(value(obj)), propertyNames = arguments[1], options = Object(arguments[2]);
      if (copy !== obj && !propertyNames)
        return copy;
      var result = {};
      if (propertyNames) {
        aFrom(propertyNames, function(propertyName) {
          if (options.ensure || propertyName in obj)
            result[propertyName] = obj[propertyName];
        });
      } else {
        assign(result, obj);
      }
      return result;
    };
  }
});

// node_modules/d/auto-bind.js
var require_auto_bind = __commonJS({
  "node_modules/d/auto-bind.js"(exports, module2) {
    "use strict";
    var isValue = require_is();
    var ensureValue = require_ensure();
    var ensurePlainFunction = require_ensure2();
    var copy = require_copy();
    var normalizeOptions = require_normalize_options();
    var map = require_map();
    var bind = Function.prototype.bind;
    var defineProperty = Object.defineProperty;
    var hasOwnProperty2 = Object.prototype.hasOwnProperty;
    var define;
    define = function(name, desc, options) {
      var value = ensureValue(desc) && ensurePlainFunction(desc.value), dgs;
      dgs = copy(desc);
      delete dgs.writable;
      delete dgs.value;
      dgs.get = function() {
        if (!options.overwriteDefinition && hasOwnProperty2.call(this, name))
          return value;
        desc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);
        defineProperty(this, name, desc);
        return this[name];
      };
      return dgs;
    };
    module2.exports = function(props) {
      var options = normalizeOptions(arguments[1]);
      if (isValue(options.resolveContext))
        ensurePlainFunction(options.resolveContext);
      return map(props, function(desc, name) {
        return define(name, desc, options);
      });
    };
  }
});

// node_modules/es6-iterator/index.js
var require_es6_iterator = __commonJS({
  "node_modules/es6-iterator/index.js"(exports, module2) {
    "use strict";
    var clear = require_clear();
    var assign = require_assign();
    var callable = require_valid_callable();
    var value = require_valid_value();
    var d = require_d();
    var autoBind = require_auto_bind();
    var Symbol2 = require_es6_symbol();
    var defineProperty = Object.defineProperty;
    var defineProperties = Object.defineProperties;
    var Iterator;
    module2.exports = Iterator = function(list, context) {
      if (!(this instanceof Iterator))
        throw new TypeError("Constructor requires 'new'");
      defineProperties(this, {
        __list__: d("w", value(list)),
        __context__: d("w", context),
        __nextIndex__: d("w", 0)
      });
      if (!context)
        return;
      callable(context.on);
      context.on("_add", this._onAdd);
      context.on("_delete", this._onDelete);
      context.on("_clear", this._onClear);
    };
    delete Iterator.prototype.constructor;
    defineProperties(
      Iterator.prototype,
      assign(
        {
          _next: d(function() {
            var i;
            if (!this.__list__)
              return void 0;
            if (this.__redo__) {
              i = this.__redo__.shift();
              if (i !== void 0)
                return i;
            }
            if (this.__nextIndex__ < this.__list__.length)
              return this.__nextIndex__++;
            this._unBind();
            return void 0;
          }),
          next: d(function() {
            return this._createResult(this._next());
          }),
          _createResult: d(function(i) {
            if (i === void 0)
              return { done: true, value: void 0 };
            return { done: false, value: this._resolve(i) };
          }),
          _resolve: d(function(i) {
            return this.__list__[i];
          }),
          _unBind: d(function() {
            this.__list__ = null;
            delete this.__redo__;
            if (!this.__context__)
              return;
            this.__context__.off("_add", this._onAdd);
            this.__context__.off("_delete", this._onDelete);
            this.__context__.off("_clear", this._onClear);
            this.__context__ = null;
          }),
          toString: d(function() {
            return "[object " + (this[Symbol2.toStringTag] || "Object") + "]";
          })
        },
        autoBind({
          _onAdd: d(function(index) {
            if (index >= this.__nextIndex__)
              return;
            ++this.__nextIndex__;
            if (!this.__redo__) {
              defineProperty(this, "__redo__", d("c", [index]));
              return;
            }
            this.__redo__.forEach(function(redo, i) {
              if (redo >= index)
                this.__redo__[i] = ++redo;
            }, this);
            this.__redo__.push(index);
          }),
          _onDelete: d(function(index) {
            var i;
            if (index >= this.__nextIndex__)
              return;
            --this.__nextIndex__;
            if (!this.__redo__)
              return;
            i = this.__redo__.indexOf(index);
            if (i !== -1)
              this.__redo__.splice(i, 1);
            this.__redo__.forEach(function(redo, j) {
              if (redo > index)
                this.__redo__[j] = --redo;
            }, this);
          }),
          _onClear: d(function() {
            if (this.__redo__)
              clear.call(this.__redo__);
            this.__nextIndex__ = 0;
          })
        })
      )
    );
    defineProperty(
      Iterator.prototype,
      Symbol2.iterator,
      d(function() {
        return this;
      })
    );
  }
});

// node_modules/es6-iterator/array.js
var require_array = __commonJS({
  "node_modules/es6-iterator/array.js"(exports, module2) {
    "use strict";
    var setPrototypeOf = require_set_prototype_of();
    var contains = require_contains();
    var d = require_d();
    var Symbol2 = require_es6_symbol();
    var Iterator = require_es6_iterator();
    var defineProperty = Object.defineProperty;
    var ArrayIterator;
    ArrayIterator = module2.exports = function(arr, kind) {
      if (!(this instanceof ArrayIterator))
        throw new TypeError("Constructor requires 'new'");
      Iterator.call(this, arr);
      if (!kind)
        kind = "value";
      else if (contains.call(kind, "key+value"))
        kind = "key+value";
      else if (contains.call(kind, "key"))
        kind = "key";
      else
        kind = "value";
      defineProperty(this, "__kind__", d("", kind));
    };
    if (setPrototypeOf)
      setPrototypeOf(ArrayIterator, Iterator);
    delete ArrayIterator.prototype.constructor;
    ArrayIterator.prototype = Object.create(Iterator.prototype, {
      _resolve: d(function(i) {
        if (this.__kind__ === "value")
          return this.__list__[i];
        if (this.__kind__ === "key+value")
          return [i, this.__list__[i]];
        return i;
      })
    });
    defineProperty(ArrayIterator.prototype, Symbol2.toStringTag, d("c", "Array Iterator"));
  }
});

// node_modules/es6-iterator/string.js
var require_string = __commonJS({
  "node_modules/es6-iterator/string.js"(exports, module2) {
    "use strict";
    var setPrototypeOf = require_set_prototype_of();
    var d = require_d();
    var Symbol2 = require_es6_symbol();
    var Iterator = require_es6_iterator();
    var defineProperty = Object.defineProperty;
    var StringIterator;
    StringIterator = module2.exports = function(str) {
      if (!(this instanceof StringIterator))
        throw new TypeError("Constructor requires 'new'");
      str = String(str);
      Iterator.call(this, str);
      defineProperty(this, "__length__", d("", str.length));
    };
    if (setPrototypeOf)
      setPrototypeOf(StringIterator, Iterator);
    delete StringIterator.prototype.constructor;
    StringIterator.prototype = Object.create(Iterator.prototype, {
      _next: d(function() {
        if (!this.__list__)
          return void 0;
        if (this.__nextIndex__ < this.__length__)
          return this.__nextIndex__++;
        this._unBind();
        return void 0;
      }),
      _resolve: d(function(i) {
        var char = this.__list__[i], code;
        if (this.__nextIndex__ === this.__length__)
          return char;
        code = char.charCodeAt(0);
        if (code >= 55296 && code <= 56319)
          return char + this.__list__[this.__nextIndex__++];
        return char;
      })
    });
    defineProperty(StringIterator.prototype, Symbol2.toStringTag, d("c", "String Iterator"));
  }
});

// node_modules/es6-iterator/is-iterable.js
var require_is_iterable = __commonJS({
  "node_modules/es6-iterator/is-iterable.js"(exports, module2) {
    "use strict";
    var isArguments = require_is_arguments();
    var isValue = require_is_value();
    var isString = require_is_string();
    var iteratorSymbol = require_es6_symbol().iterator;
    var isArray = Array.isArray;
    module2.exports = function(value) {
      if (!isValue(value))
        return false;
      if (isArray(value))
        return true;
      if (isString(value))
        return true;
      if (isArguments(value))
        return true;
      return typeof value[iteratorSymbol] === "function";
    };
  }
});

// node_modules/es6-iterator/valid-iterable.js
var require_valid_iterable = __commonJS({
  "node_modules/es6-iterator/valid-iterable.js"(exports, module2) {
    "use strict";
    var isIterable = require_is_iterable();
    module2.exports = function(value) {
      if (!isIterable(value))
        throw new TypeError(value + " is not iterable");
      return value;
    };
  }
});

// node_modules/es6-iterator/get.js
var require_get2 = __commonJS({
  "node_modules/es6-iterator/get.js"(exports, module2) {
    "use strict";
    var isArguments = require_is_arguments();
    var isString = require_is_string();
    var ArrayIterator = require_array();
    var StringIterator = require_string();
    var iterable = require_valid_iterable();
    var iteratorSymbol = require_es6_symbol().iterator;
    module2.exports = function(obj) {
      if (typeof iterable(obj)[iteratorSymbol] === "function")
        return obj[iteratorSymbol]();
      if (isArguments(obj))
        return new ArrayIterator(obj);
      if (isString(obj))
        return new StringIterator(obj);
      return new ArrayIterator(obj);
    };
  }
});

// node_modules/es6-iterator/for-of.js
var require_for_of = __commonJS({
  "node_modules/es6-iterator/for-of.js"(exports, module2) {
    "use strict";
    var isArguments = require_is_arguments();
    var callable = require_valid_callable();
    var isString = require_is_string();
    var get = require_get2();
    var isArray = Array.isArray;
    var call = Function.prototype.call;
    var some = Array.prototype.some;
    module2.exports = function(iterable, cb) {
      var mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;
      if (isArray(iterable) || isArguments(iterable))
        mode = "array";
      else if (isString(iterable))
        mode = "string";
      else
        iterable = get(iterable);
      callable(cb);
      doBreak = function() {
        broken = true;
      };
      if (mode === "array") {
        some.call(iterable, function(value) {
          call.call(cb, thisArg, value, doBreak);
          return broken;
        });
        return;
      }
      if (mode === "string") {
        length = iterable.length;
        for (i = 0; i < length; ++i) {
          char = iterable[i];
          if (i + 1 < length) {
            code = char.charCodeAt(0);
            if (code >= 55296 && code <= 56319)
              char += iterable[++i];
          }
          call.call(cb, thisArg, char, doBreak);
          if (broken)
            break;
        }
        return;
      }
      result = iterable.next();
      while (!result.done) {
        call.call(cb, thisArg, result.value, doBreak);
        if (broken)
          return;
        result = iterable.next();
      }
    };
  }
});

// node_modules/cli-color/art.js
var require_art = __commonJS({
  "node_modules/cli-color/art.js"(exports, module2) {
    "use strict";
    var object = require_valid_object();
    var stringifiable = require_validate_stringifiable_value();
    var forOf = require_for_of();
    module2.exports = function(text, style) {
      var result = "";
      text = stringifiable(text);
      object(style);
      forOf(text, function(char) {
        result += style[char] || char;
      });
      return result;
    };
  }
});

// node_modules/cli-color/index.js
var require_cli_color = __commonJS({
  "node_modules/cli-color/index.js"(exports, module2) {
    "use strict";
    var d = require_d();
    module2.exports = Object.defineProperties(require_bare(), {
      windowSize: d(require_window_size()),
      erase: d(require_erase()),
      move: d(require_move()),
      beep: d(require_beep()),
      columns: d(require_columns()),
      strip: d(require_strip()),
      getStrippedLength: d(require_get_stripped_length()),
      slice: d(require_slice()),
      throbber: d(require_throbber()),
      reset: d(require_reset()),
      art: d(require_art())
    });
  }
});

// node_modules/ascii-text-generator/lib/ascii_text.js
var require_ascii_text = __commonJS({
  "node_modules/ascii-text-generator/lib/ascii_text.js"(exports) {
    "use strict";
    function buildStyle1(inputText) {
      var newline = false;
      var line0 = "";
      var line1 = "";
      var line2 = "";
      var line3 = "";
      var space = "    ";
      var a = new Array(4);
      var b = new Array(4);
      var c = new Array(4);
      var d = new Array(4);
      var e = new Array(4);
      var f = new Array(4);
      var g = new Array(4);
      var h = new Array(4);
      var I = new Array(4);
      var j = new Array(4);
      var k = new Array(4);
      var l = new Array(4);
      var m = new Array(4);
      var n = new Array(4);
      var o = new Array(4);
      var p = new Array(4);
      var q = new Array(4);
      var r = new Array(4);
      var s = new Array(4);
      var t = new Array(4);
      var u = new Array(4);
      var v = new Array(4);
      var w = new Array(4);
      var x = new Array(4);
      var y = new Array(4);
      var z = new Array(4);
      var zero = new Array(4);
      var one = new Array(4);
      var two = new Array(4);
      var three = new Array(4);
      var four = new Array(4);
      var five = new Array(4);
      var six = new Array(4);
      var seven = new Array(4);
      var eight = new Array(4);
      var nine = new Array(4);
      a[0] = "     ";
      a[1] = " __  ";
      a[2] = "(__( ";
      a[3] = "     ";
      b[0] = "     ";
      b[1] = "|__  ";
      b[2] = "|__) ";
      b[3] = "     ";
      c[0] = "     ";
      c[1] = " __  ";
      c[2] = "(___ ";
      c[3] = "     ";
      d[0] = "     ";
      d[1] = " __| ";
      d[2] = "(__| ";
      d[3] = "     ";
      e[0] = "      ";
      e[1] = " ___  ";
      e[2] = "(__/_ ";
      e[3] = "      ";
      f[0] = "  _ ";
      f[1] = "_|_ ";
      f[2] = " |  ";
      f[3] = "    ";
      g[0] = "     ";
      g[1] = " __  ";
      g[2] = "(__| ";
      g[3] = " __/ ";
      h[0] = "     ";
      h[1] = "|__  ";
      h[2] = "|  ) ";
      h[3] = "     ";
      I[0] = "  ";
      I[1] = "o ";
      I[2] = "| ";
      I[3] = "  ";
      j[0] = "     ";
      j[1] = "   | ";
      j[2] = "(__, ";
      j[3] = "     ";
      k[0] = "     ";
      k[1] = "|__, ";
      k[2] = "|  \\ ";
      k[3] = "     ";
      l[0] = "    ";
      l[1] = "|   ";
      l[2] = "|_, ";
      l[3] = "    ";
      m[0] = "        ";
      m[1] = " __ __  ";
      m[2] = "|  )  ) ";
      m[3] = "        ";
      n[0] = "     ";
      n[1] = " __  ";
      n[2] = "|  ) ";
      n[3] = "     ";
      o[0] = "     ";
      o[1] = " __  ";
      o[2] = "(__) ";
      o[3] = "     ";
      p[0] = "     ";
      p[1] = " __  ";
      p[2] = "|__) ";
      p[3] = "|    ";
      q[0] = "     ";
      q[1] = " __  ";
      q[2] = "(__| ";
      q[3] = "   | ";
      r[0] = "     ";
      r[1] = " __  ";
      r[2] = "|  ' ";
      r[3] = "     ";
      s[0] = "     ";
      s[1] = "  __ ";
      s[2] = "__)  ";
      s[3] = "     ";
      t[0] = "     ";
      t[1] = "_|_  ";
      t[2] = " |_, ";
      t[3] = "     ";
      u[0] = "      ";
      u[1] = "      ";
      u[2] = "(__(_ ";
      u[3] = "      ";
      v[0] = "     ";
      v[1] = "     ";
      v[2] = "(__| ";
      v[3] = "     ";
      w[0] = "        ";
      w[1] = "        ";
      w[2] = "(__(__( ";
      w[3] = "        ";
      x[0] = "    ";
      x[1] = "\\_' ";
      x[2] = "/ \\ ";
      x[3] = "    ";
      y[0] = "     ";
      y[1] = "     ";
      y[2] = "(__| ";
      y[3] = "   | ";
      z[0] = "     ";
      z[1] = "__   ";
      z[2] = " (__ ";
      z[3] = "     ";
      zero[0] = " __  ";
      zero[1] = "|  | ";
      zero[2] = "|__| ";
      zero[3] = "     ";
      one[0] = "   ";
      one[1] = "'| ";
      one[2] = " | ";
      one[3] = "   ";
      two[0] = " __  ";
      two[1] = " __) ";
      two[2] = "(___ ";
      two[3] = "     ";
      three[0] = "___ ";
      three[1] = " _/ ";
      three[2] = "__) ";
      three[3] = "    ";
      four[0] = "     ";
      four[1] = "(__| ";
      four[2] = "   | ";
      four[3] = "     ";
      five[0] = " __  ";
      five[1] = "(__  ";
      five[2] = "___) ";
      five[3] = "     ";
      six[0] = "     ";
      six[1] = " /_  ";
      six[2] = "(__) ";
      six[3] = "     ";
      seven[0] = "__  ";
      seven[1] = "  / ";
      seven[2] = " /  ";
      seven[3] = "    ";
      eight[0] = " __  ";
      eight[1] = "(__) ";
      eight[2] = "(__) ";
      eight[3] = "     ";
      nine[0] = " __  ";
      nine[1] = "(__) ";
      nine[2] = "  /  ";
      nine[3] = "     ";
      for (var i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i) == " ") {
          line0 += space;
          line1 += space;
          line2 += space;
          line3 += space;
        }
        if (inputText.charAt(i) == "a") {
          line0 += a[0];
          line1 += a[1];
          line2 += a[2];
          line3 += a[3];
        }
        if (inputText.charAt(i) == "b") {
          line0 += b[0];
          line1 += b[1];
          line2 += b[2];
          line3 += b[3];
        }
        if (inputText.charAt(i) == "c") {
          line0 += c[0];
          line1 += c[1];
          line2 += c[2];
          line3 += c[3];
        }
        if (inputText.charAt(i) == "d") {
          line0 += d[0];
          line1 += d[1];
          line2 += d[2];
          line3 += d[3];
        }
        if (inputText.charAt(i) == "e") {
          line0 += e[0];
          line1 += e[1];
          line2 += e[2];
          line3 += e[3];
        }
        if (inputText.charAt(i) == "f") {
          line0 += f[0];
          line1 += f[1];
          line2 += f[2];
          line3 += f[3];
        }
        if (inputText.charAt(i) == "g") {
          line0 += g[0];
          line1 += g[1];
          line2 += g[2];
          line3 += g[3];
        }
        if (inputText.charAt(i) == "h") {
          line0 += h[0];
          line1 += h[1];
          line2 += h[2];
          line3 += h[3];
        }
        if (inputText.charAt(i) == "i") {
          line0 += I[0];
          line1 += I[1];
          line2 += I[2];
          line3 += I[3];
        }
        if (inputText.charAt(i) == "j") {
          line0 += j[0];
          line1 += j[1];
          line2 += j[2];
          line3 += j[3];
        }
        if (inputText.charAt(i) == "k") {
          line0 += k[0];
          line1 += k[1];
          line2 += k[2];
          line3 += k[3];
        }
        if (inputText.charAt(i) == "l") {
          line0 += l[0];
          line1 += l[1];
          line2 += l[2];
          line3 += l[3];
        }
        if (inputText.charAt(i) == "m") {
          line0 += m[0];
          line1 += m[1];
          line2 += m[2];
          line3 += m[3];
        }
        if (inputText.charAt(i) == "n") {
          line0 += n[0];
          line1 += n[1];
          line2 += n[2];
          line3 += n[3];
        }
        if (inputText.charAt(i) == "o") {
          line0 += o[0];
          line1 += o[1];
          line2 += o[2];
          line3 += o[3];
        }
        if (inputText.charAt(i) == "p") {
          line0 += p[0];
          line1 += p[1];
          line2 += p[2];
          line3 += p[3];
        }
        if (inputText.charAt(i) == "q") {
          line0 += q[0];
          line1 += q[1];
          line2 += q[2];
          line3 += q[3];
        }
        if (inputText.charAt(i) == "r") {
          line0 += r[0];
          line1 += r[1];
          line2 += r[2];
          line3 += r[3];
        }
        if (inputText.charAt(i) == "s") {
          line0 += s[0];
          line1 += s[1];
          line2 += s[2];
          line3 += s[3];
        }
        if (inputText.charAt(i) == "t") {
          line0 += t[0];
          line1 += t[1];
          line2 += t[2];
          line3 += t[3];
        }
        if (inputText.charAt(i) == "u") {
          line0 += u[0];
          line1 += u[1];
          line2 += u[2];
          line3 += u[3];
        }
        if (inputText.charAt(i) == "v") {
          line0 += v[0];
          line1 += v[1];
          line2 += v[2];
          line3 += v[3];
        }
        if (inputText.charAt(i) == "w") {
          line0 += w[0];
          line1 += w[1];
          line2 += w[2];
          line3 += w[3];
        }
        if (inputText.charAt(i) == "x") {
          line0 += x[0];
          line1 += x[1];
          line2 += x[2];
          line3 += x[3];
        }
        if (inputText.charAt(i) == "y") {
          line0 += y[0];
          line1 += y[1];
          line2 += y[2];
          line3 += y[3];
        }
        if (inputText.charAt(i) == "z") {
          line0 += z[0];
          line1 += z[1];
          line2 += z[2];
          line3 += z[3];
        }
        if (inputText.charAt(i) == "0") {
          line0 += zero[0];
          line1 += zero[1];
          line2 += zero[2];
          line3 += zero[3];
        }
        if (inputText.charAt(i) == "1") {
          line0 += one[0];
          line1 += one[1];
          line2 += one[2];
          line3 += one[3];
        }
        if (inputText.charAt(i) == "2") {
          line0 += two[0];
          line1 += two[1];
          line2 += two[2];
          line3 += two[3];
        }
        if (inputText.charAt(i) == "3") {
          line0 += three[0];
          line1 += three[1];
          line2 += three[2];
          line3 += three[3];
        }
        if (inputText.charAt(i) == "4") {
          line0 += four[0];
          line1 += four[1];
          line2 += four[2];
          line3 += four[3];
        }
        if (inputText.charAt(i) == "5") {
          line0 += five[0];
          line1 += five[1];
          line2 += five[2];
          line3 += five[3];
        }
        if (inputText.charAt(i) == "6") {
          line0 += six[0];
          line1 += six[1];
          line2 += six[2];
          line3 += six[3];
        }
        if (inputText.charAt(i) == "7") {
          line0 += seven[0];
          line1 += seven[1];
          line2 += seven[2];
          line3 += seven[3];
        }
        if (inputText.charAt(i) == "8") {
          line0 += eight[0];
          line1 += eight[1];
          line2 += eight[2];
          line3 += eight[3];
        }
        if (inputText.charAt(i) == "9") {
          line0 += nine[0];
          line1 += nine[1];
          line2 += nine[2];
          line3 += nine[3];
        }
        if (inputText.substring(i, i + 2) == "\\n") {
          newline = true;
          break;
        }
      }
      var outputText = line0 + "\n" + line1 + "\n" + line2 + "\n" + line3;
      if (newline == true) {
        return outputText + "\n" + buildStyle1(inputText.substring(i + 2, inputText.length));
      } else {
        return outputText;
      }
    }
    function buildStyle2(inputText) {
      var newline = false;
      var line0 = "";
      var line1 = "";
      var line2 = "";
      var line3 = "";
      var line4 = "";
      var line5 = "";
      var space = "     ";
      var a = new Array(6);
      var b = new Array(6);
      var c = new Array(6);
      var d = new Array(6);
      var e = new Array(6);
      var f = new Array(6);
      var g = new Array(6);
      var h = new Array(6);
      var I = new Array(6);
      var j = new Array(6);
      var k = new Array(6);
      var l = new Array(6);
      var m = new Array(6);
      var n = new Array(6);
      var o = new Array(6);
      var p = new Array(6);
      var q = new Array(6);
      var r = new Array(6);
      var s = new Array(6);
      var t = new Array(6);
      var u = new Array(6);
      var v = new Array(6);
      var w = new Array(6);
      var x = new Array(6);
      var y = new Array(6);
      var z = new Array(6);
      var zero = new Array(6);
      var one = new Array(6);
      var two = new Array(6);
      var three = new Array(6);
      var four = new Array(6);
      var five = new Array(6);
      var six = new Array(6);
      var seven = new Array(6);
      var eight = new Array(6);
      var nine = new Array(6);
      a[0] = "     ___  ";
      a[1] = "    /   | ";
      a[2] = "   / /| | ";
      a[3] = "  / / | | ";
      a[4] = " / /  | | ";
      a[5] = "/_/   |_| ";
      b[0] = " _____  ";
      b[1] = "|  _  \\ ";
      b[2] = "| |_| | ";
      b[3] = "|  _  { ";
      b[4] = "| |_| | ";
      b[5] = "|_____/ ";
      c[0] = " _____  ";
      c[1] = "/  ___| ";
      c[2] = "| |     ";
      c[3] = "| |     ";
      c[4] = "| |___  ";
      c[5] = "\\_____| ";
      d[0] = " _____  ";
      d[1] = "|  _  \\ ";
      d[2] = "| | | | ";
      d[3] = "| | | | ";
      d[4] = "| |_| | ";
      d[5] = "|_____/ ";
      e[0] = " _____  ";
      e[1] = "| ____| ";
      e[2] = "| |__   ";
      e[3] = "|  __|  ";
      e[4] = "| |___  ";
      e[5] = "|_____| ";
      f[0] = " _____  ";
      f[1] = "|  ___| ";
      f[2] = "| |__   ";
      f[3] = "|  __|  ";
      f[4] = "| |     ";
      f[5] = "|_|     ";
      g[0] = " _____  ";
      g[1] = "/  ___| ";
      g[2] = "| |     ";
      g[3] = "| |  _  ";
      g[4] = "| |_| | ";
      g[5] = "\\_____/ ";
      h[0] = " _   _  ";
      h[1] = "| | | | ";
      h[2] = "| |_| | ";
      h[3] = "|  _  | ";
      h[4] = "| | | | ";
      h[5] = "|_| |_| ";
      I[0] = " _  ";
      I[1] = "| | ";
      I[2] = "| | ";
      I[3] = "| | ";
      I[4] = "| | ";
      I[5] = "|_| ";
      j[0] = "     _  ";
      j[1] = "    | | ";
      j[2] = "    | | ";
      j[3] = " _  | | ";
      j[4] = "| |_| | ";
      j[5] = "\\_____/ ";
      k[0] = " _   _   ";
      k[1] = "| | / /  ";
      k[2] = "| |/ /   ";
      k[3] = "| |\\ \\   ";
      k[4] = "| | \\ \\  ";
      k[5] = "|_|  \\_\\ ";
      l[0] = " _      ";
      l[1] = "| |     ";
      l[2] = "| |     ";
      l[3] = "| |     ";
      l[4] = "| |___  ";
      l[5] = "|_____| ";
      m[0] = "     ___  ___  ";
      m[1] = "    /   |/   | ";
      m[2] = "   / /|   /| | ";
      m[3] = "  / / |__/ | | ";
      m[4] = " / /       | | ";
      m[5] = "/_/        |_| ";
      n[0] = " __   _  ";
      n[1] = "|  \\ | | ";
      n[2] = "|   \\| | ";
      n[3] = "| |\\   | ";
      n[4] = "| | \\  | ";
      n[5] = "|_|  \\_| ";
      o[0] = " _____  ";
      o[1] = "/  _  \\ ";
      o[2] = "| | | | ";
      o[3] = "| | | | ";
      o[4] = "| |_| | ";
      o[5] = "\\_____/ ";
      p[0] = " _____  ";
      p[1] = "|  _  \\ ";
      p[2] = "| |_| | ";
      p[3] = "|  ___/ ";
      p[4] = "| |     ";
      p[5] = "|_|     ";
      q[0] = " _____    ";
      q[1] = "/  _  \\   ";
      q[2] = "| | | |   ";
      q[3] = "| | | |   ";
      q[4] = "| |_| |_  ";
      q[5] = "\\_______| ";
      r[0] = " _____   ";
      r[1] = "|  _  \\  ";
      r[2] = "| |_| |  ";
      r[3] = "|  _  /  ";
      r[4] = "| | \\ \\  ";
      r[5] = "|_|  \\_\\ ";
      s[0] = " _____  ";
      s[1] = "/  ___/ ";
      s[2] = "| |___  ";
      s[3] = "\\___  \\ ";
      s[4] = " ___| | ";
      s[5] = "/_____/ ";
      t[0] = " _____  ";
      t[1] = "|_   _| ";
      t[2] = "  | |   ";
      t[3] = "  | |   ";
      t[4] = "  | |   ";
      t[5] = "  |_|   ";
      u[0] = " _   _  ";
      u[1] = "| | | | ";
      u[2] = "| | | | ";
      u[3] = "| | | | ";
      u[4] = "| |_| | ";
      u[5] = "\\_____/ ";
      v[0] = " _     _  ";
      v[1] = "| |   / / ";
      v[2] = "| |  / /  ";
      v[3] = "| | / /   ";
      v[4] = "| |/ /    ";
      v[5] = "|___/     ";
      w[0] = " _          __ ";
      w[1] = "| |        / / ";
      w[2] = "| |  __   / /  ";
      w[3] = "| | /  | / /   ";
      w[4] = "| |/   |/ /    ";
      w[5] = "|___/|___/     ";
      x[0] = "__    __ ";
      x[1] = "\\ \\  / / ";
      x[2] = " \\ \\/ /  ";
      x[3] = "  }  {   ";
      x[4] = " / /\\ \\  ";
      x[5] = "/_/  \\_\\ ";
      y[0] = "__    __ ";
      y[1] = "\\ \\  / / ";
      y[2] = " \\ \\/ /  ";
      y[3] = "  \\  /   ";
      y[4] = "  / /    ";
      y[5] = " /_/     ";
      z[0] = " ______ ";
      z[1] = "|___  / ";
      z[2] = "   / /  ";
      z[3] = "  / /   ";
      z[4] = " / /__  ";
      z[5] = "/_____| ";
      zero[0] = " _____  ";
      zero[1] = "/  _  \\ ";
      zero[2] = "| | | | ";
      zero[3] = "| |/| | ";
      zero[4] = "| |_| | ";
      zero[5] = "\\_____/ ";
      one[0] = " ___  ";
      one[1] = "|_  | ";
      one[2] = "  | | ";
      one[3] = "  | | ";
      one[4] = "  | | ";
      one[5] = "  |_| ";
      two[0] = " _____  ";
      two[1] = "/___  \\ ";
      two[2] = " ___| | ";
      two[3] = "/  ___/ ";
      two[4] = "| |___  ";
      two[5] = "|_____| ";
      three[0] = " _____  ";
      three[1] = "|___  | ";
      three[2] = "   _| | ";
      three[3] = "  |_  { ";
      three[4] = " ___| | ";
      three[5] = "|_____/ ";
      four[0] = " _   _  ";
      four[1] = "| | | | ";
      four[2] = "| |_| | ";
      four[3] = "\\___  | ";
      four[4] = "    | | ";
      four[5] = "    |_| ";
      five[0] = " _____  ";
      five[1] = "|  ___| ";
      five[2] = "| |___  ";
      five[3] = "\\___  \\ ";
      five[4] = " ___| | ";
      five[5] = "\\_____| ";
      six[0] = " _____  ";
      six[1] = "/  ___| ";
      six[2] = "| |___  ";
      six[3] = "|  _  \\ ";
      six[4] = "| |_| | ";
      six[5] = "\\_____/ ";
      seven[0] = " _____  ";
      seven[1] = "|___  | ";
      seven[2] = "    / / ";
      seven[3] = "   / /  ";
      seven[4] = "  / /   ";
      seven[5] = " /_/    ";
      eight[0] = " _____  ";
      eight[1] = "/  _  \\ ";
      eight[2] = "| |_| | ";
      eight[3] = "}  _  { ";
      eight[4] = "| |_| | ";
      eight[5] = "\\_____/ ";
      nine[0] = " _____  ";
      nine[1] = "/  _  \\ ";
      nine[2] = "| |_| | ";
      nine[3] = "\\___  | ";
      nine[4] = " ___| | ";
      nine[5] = "|_____/ ";
      for (var i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i) == " ") {
          line0 += space;
          line1 += space;
          line2 += space;
          line3 += space;
          line4 += space;
          line5 += space;
        }
        if (inputText.charAt(i) == "a") {
          line0 += a[0];
          line1 += a[1];
          line2 += a[2];
          line3 += a[3];
          line4 += a[4];
          line5 += a[5];
        }
        if (inputText.charAt(i) == "b") {
          line0 += b[0];
          line1 += b[1];
          line2 += b[2];
          line3 += b[3];
          line4 += b[4];
          line5 += b[5];
        }
        if (inputText.charAt(i) == "c") {
          line0 += c[0];
          line1 += c[1];
          line2 += c[2];
          line3 += c[3];
          line4 += c[4];
          line5 += c[5];
        }
        if (inputText.charAt(i) == "d") {
          line0 += d[0];
          line1 += d[1];
          line2 += d[2];
          line3 += d[3];
          line4 += d[4];
          line5 += d[5];
        }
        if (inputText.charAt(i) == "e") {
          line0 += e[0];
          line1 += e[1];
          line2 += e[2];
          line3 += e[3];
          line4 += e[4];
          line5 += e[5];
        }
        if (inputText.charAt(i) == "f") {
          line0 += f[0];
          line1 += f[1];
          line2 += f[2];
          line3 += f[3];
          line4 += f[4];
          line5 += f[5];
        }
        if (inputText.charAt(i) == "g") {
          line0 += g[0];
          line1 += g[1];
          line2 += g[2];
          line3 += g[3];
          line4 += g[4];
          line5 += g[5];
        }
        if (inputText.charAt(i) == "h") {
          line0 += h[0];
          line1 += h[1];
          line2 += h[2];
          line3 += h[3];
          line4 += h[4];
          line5 += h[5];
        }
        if (inputText.charAt(i) == "i") {
          line0 += I[0];
          line1 += I[1];
          line2 += I[2];
          line3 += I[3];
          line4 += I[4];
          line5 += I[5];
        }
        if (inputText.charAt(i) == "j") {
          line0 += j[0];
          line1 += j[1];
          line2 += j[2];
          line3 += j[3];
          line4 += j[4];
          line5 += j[5];
        }
        if (inputText.charAt(i) == "k") {
          line0 += k[0];
          line1 += k[1];
          line2 += k[2];
          line3 += k[3];
          line4 += k[4];
          line5 += k[5];
        }
        if (inputText.charAt(i) == "l") {
          line0 += l[0];
          line1 += l[1];
          line2 += l[2];
          line3 += l[3];
          line4 += l[4];
          line5 += l[5];
        }
        if (inputText.charAt(i) == "m") {
          line0 += m[0];
          line1 += m[1];
          line2 += m[2];
          line3 += m[3];
          line4 += m[4];
          line5 += m[5];
        }
        if (inputText.charAt(i) == "n") {
          line0 += n[0];
          line1 += n[1];
          line2 += n[2];
          line3 += n[3];
          line4 += n[4];
          line5 += n[5];
        }
        if (inputText.charAt(i) == "o") {
          line0 += o[0];
          line1 += o[1];
          line2 += o[2];
          line3 += o[3];
          line4 += o[4];
          line5 += o[5];
        }
        if (inputText.charAt(i) == "p") {
          line0 += p[0];
          line1 += p[1];
          line2 += p[2];
          line3 += p[3];
          line4 += p[4];
          line5 += p[5];
        }
        if (inputText.charAt(i) == "q") {
          line0 += q[0];
          line1 += q[1];
          line2 += q[2];
          line3 += q[3];
          line4 += q[4];
          line5 += q[5];
        }
        if (inputText.charAt(i) == "r") {
          line0 += r[0];
          line1 += r[1];
          line2 += r[2];
          line3 += r[3];
          line4 += r[4];
          line5 += r[5];
        }
        if (inputText.charAt(i) == "s") {
          line0 += s[0];
          line1 += s[1];
          line2 += s[2];
          line3 += s[3];
          line4 += s[4];
          line5 += s[5];
        }
        if (inputText.charAt(i) == "t") {
          line0 += t[0];
          line1 += t[1];
          line2 += t[2];
          line3 += t[3];
          line4 += t[4];
          line5 += t[5];
        }
        if (inputText.charAt(i) == "u") {
          line0 += u[0];
          line1 += u[1];
          line2 += u[2];
          line3 += u[3];
          line4 += u[4];
          line5 += u[5];
        }
        if (inputText.charAt(i) == "v") {
          line0 += v[0];
          line1 += v[1];
          line2 += v[2];
          line3 += v[3];
          line4 += v[4];
          line5 += v[5];
        }
        if (inputText.charAt(i) == "w") {
          line0 += w[0];
          line1 += w[1];
          line2 += w[2];
          line3 += w[3];
          line4 += w[4];
          line5 += w[5];
        }
        if (inputText.charAt(i) == "x") {
          line0 += x[0];
          line1 += x[1];
          line2 += x[2];
          line3 += x[3];
          line4 += x[4];
          line5 += x[5];
        }
        if (inputText.charAt(i) == "y") {
          line0 += y[0];
          line1 += y[1];
          line2 += y[2];
          line3 += y[3];
          line4 += y[4];
          line5 += y[5];
        }
        if (inputText.charAt(i) == "z") {
          line0 += z[0];
          line1 += z[1];
          line2 += z[2];
          line3 += z[3];
          line4 += z[4];
          line5 += z[5];
        }
        if (inputText.charAt(i) == "0") {
          line0 += zero[0];
          line1 += zero[1];
          line2 += zero[2];
          line3 += zero[3];
          line4 += zero[4];
          line5 += zero[5];
        }
        if (inputText.charAt(i) == "1") {
          line0 += one[0];
          line1 += one[1];
          line2 += one[2];
          line3 += one[3];
          line4 += one[4];
          line5 += one[5];
        }
        if (inputText.charAt(i) == "2") {
          line0 += two[0];
          line1 += two[1];
          line2 += two[2];
          line3 += two[3];
          line4 += two[4];
          line5 += two[5];
        }
        if (inputText.charAt(i) == "3") {
          line0 += three[0];
          line1 += three[1];
          line2 += three[2];
          line3 += three[3];
          line4 += three[4];
          line5 += three[5];
        }
        if (inputText.charAt(i) == "4") {
          line0 += four[0];
          line1 += four[1];
          line2 += four[2];
          line3 += four[3];
          line4 += four[4];
          line5 += four[5];
        }
        if (inputText.charAt(i) == "5") {
          line0 += five[0];
          line1 += five[1];
          line2 += five[2];
          line3 += five[3];
          line4 += five[4];
          line5 += five[5];
        }
        if (inputText.charAt(i) == "6") {
          line0 += six[0];
          line1 += six[1];
          line2 += six[2];
          line3 += six[3];
          line4 += six[4];
          line5 += six[5];
        }
        if (inputText.charAt(i) == "7") {
          line0 += seven[0];
          line1 += seven[1];
          line2 += seven[2];
          line3 += seven[3];
          line4 += seven[4];
          line5 += seven[5];
        }
        if (inputText.charAt(i) == "8") {
          line0 += eight[0];
          line1 += eight[1];
          line2 += eight[2];
          line3 += eight[3];
          line4 += eight[4];
          line5 += eight[5];
        }
        if (inputText.charAt(i) == "9") {
          line0 += nine[0];
          line1 += nine[1];
          line2 += nine[2];
          line3 += nine[3];
          line4 += nine[4];
          line5 += nine[5];
        }
        if (inputText.substring(i, i + 2) == "\\n") {
          newline = true;
          break;
        }
      }
      var outputText = line0 + "\n" + line1 + "\n" + line2 + "\n" + line3 + "\n" + line4 + "\n" + line5;
      if (newline == true) {
        return outputText + "\n" + buildStyle2(inputText.substring(i + 2, inputText.length));
      } else {
        return outputText;
      }
    }
    function buildStyle3(inputText, booleanRepeat) {
      var newline = false;
      var line0 = "";
      var line1 = "";
      var line2 = "";
      var space = "  ";
      var a = new Array(3);
      var b = new Array(3);
      var c = new Array(3);
      var d = new Array(3);
      var e = new Array(3);
      var f = new Array(3);
      var g = new Array(3);
      var h = new Array(3);
      var I = new Array(3);
      var j = new Array(3);
      var k = new Array(3);
      var l = new Array(3);
      var m = new Array(3);
      var n = new Array(3);
      var o = new Array(3);
      var p = new Array(3);
      var q = new Array(3);
      var r = new Array(3);
      var s = new Array(3);
      var t = new Array(3);
      var u = new Array(3);
      var v = new Array(3);
      var w = new Array(3);
      var x = new Array(3);
      var y = new Array(3);
      var z = new Array(3);
      var zero = new Array(3);
      var one = new Array(3);
      var two = new Array(3);
      var three = new Array(3);
      var four = new Array(3);
      var five = new Array(3);
      var six = new Array(3);
      var seven = new Array(3);
      var eight = new Array(3);
      var nine = new Array(3);
      a[0] = "/\xAF\\ ";
      a[1] = "|\xAF| ";
      a[2] = "    ";
      b[0] = "|\xAF/ ";
      b[1] = "|\xAF/ ";
      b[2] = " \xAF  ";
      c[0] = "|\xAF ";
      c[1] = "|_ ";
      c[2] = "   ";
      d[0] = "|\xAF\\ ";
      d[1] = "|_/ ";
      d[2] = "    ";
      e[0] = "|\xAF ";
      e[1] = "|\xAF ";
      e[2] = " \xAF ";
      f[0] = "|\xAF ";
      f[1] = "|\xAF ";
      f[2] = "   ";
      g[0] = "|\xAF  ";
      g[1] = "| | ";
      g[2] = " \xAF  ";
      h[0] = "| | ";
      h[1] = "|\xAF| ";
      h[2] = "    ";
      I[0] = "| ";
      I[1] = "| ";
      I[2] = "  ";
      j[0] = " \xAF|\xAF ";
      j[1] = "|_|  ";
      j[2] = "     ";
      k[0] = "|/  ";
      k[1] = "|\xAF\\ ";
      k[2] = "    ";
      l[0] = "|  ";
      l[1] = "|_ ";
      l[2] = "   ";
      m[0] = "|\\/| ";
      m[1] = "|  | ";
      m[2] = "     ";
      n[0] = "|\\| ";
      n[1] = "| | ";
      n[2] = "    ";
      o[0] = "|\xAF| ";
      o[1] = "|_| ";
      o[2] = "    ";
      p[0] = "|\xAF| ";
      p[1] = "|\xAF  ";
      p[2] = "    ";
      q[0] = "|\xAF|  ";
      q[1] = "|_|\xAC ";
      q[2] = "     ";
      r[0] = "|\xAF| ";
      r[1] = "|\xAF\\ ";
      r[2] = "    ";
      s[0] = "|\xAF  ";
      s[1] = " \xAF| ";
      s[2] = " \xAF  ";
      t[0] = "\xAF|\xAF ";
      t[1] = " |  ";
      t[2] = "    ";
      u[0] = "| | ";
      u[1] = "|_| ";
      u[2] = "    ";
      v[0] = "\\ | ";
      v[1] = " \\| ";
      v[2] = "    ";
      w[0] = "\\ |\\ | ";
      w[1] = " \\| \\| ";
      w[2] = "       ";
      x[0] = "\\/ ";
      x[1] = "/\\ ";
      x[2] = "   ";
      y[0] = "\\| ";
      y[1] = " | ";
      y[2] = "   ";
      z[0] = "\xAF/ ";
      z[1] = "/_ ";
      z[2] = "   ";
      zero[0] = "|\xAF| ";
      zero[1] = "|/| ";
      zero[2] = " \xAF  ";
      one[0] = "'| ";
      one[1] = " | ";
      one[2] = "   ";
      two[0] = " \xAF| ";
      two[1] = "|\xAF  ";
      two[2] = " \xAF  ";
      three[0] = "\xAF| ";
      three[1] = "\xAF| ";
      three[2] = "\xAF  ";
      four[0] = "/ | ";
      four[1] = " \xAF| ";
      four[2] = "    ";
      five[0] = "|\xAF  ";
      five[1] = " \xAF| ";
      five[2] = " \xAF  ";
      six[0] = "|\xAF  ";
      six[1] = "|\xAF| ";
      six[2] = " \xAF  ";
      seven[0] = "\xAF/ ";
      seven[1] = "/  ";
      seven[2] = "   ";
      eight[0] = "|\xAF| ";
      eight[1] = "|\xAF| ";
      eight[2] = " \xAF  ";
      nine[0] = "|\xAF| ";
      nine[1] = " \xAF| ";
      nine[2] = "    ";
      for (var i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i) == " ") {
          line0 += space;
          line1 += space;
          line2 += space;
        }
        if (inputText.charAt(i) == "a") {
          line0 += a[0];
          line1 += a[1];
          line2 += a[2];
        }
        if (inputText.charAt(i) == "b") {
          line0 += b[0];
          line1 += b[1];
          line2 += b[2];
        }
        if (inputText.charAt(i) == "c") {
          line0 += c[0];
          line1 += c[1];
          line2 += c[2];
        }
        if (inputText.charAt(i) == "d") {
          line0 += d[0];
          line1 += d[1];
          line2 += d[2];
        }
        if (inputText.charAt(i) == "e") {
          line0 += e[0];
          line1 += e[1];
          line2 += e[2];
        }
        if (inputText.charAt(i) == "f") {
          line0 += f[0];
          line1 += f[1];
          line2 += f[2];
        }
        if (inputText.charAt(i) == "g") {
          line0 += g[0];
          line1 += g[1];
          line2 += g[2];
        }
        if (inputText.charAt(i) == "h") {
          line0 += h[0];
          line1 += h[1];
          line2 += h[2];
        }
        if (inputText.charAt(i) == "i") {
          line0 += I[0];
          line1 += I[1];
          line2 += I[2];
        }
        if (inputText.charAt(i) == "j") {
          line0 += j[0];
          line1 += j[1];
          line2 += j[2];
        }
        if (inputText.charAt(i) == "k") {
          line0 += k[0];
          line1 += k[1];
          line2 += k[2];
        }
        if (inputText.charAt(i) == "l") {
          line0 += l[0];
          line1 += l[1];
          line2 += l[2];
        }
        if (inputText.charAt(i) == "m") {
          line0 += m[0];
          line1 += m[1];
          line2 += m[2];
        }
        if (inputText.charAt(i) == "n") {
          line0 += n[0];
          line1 += n[1];
          line2 += n[2];
        }
        if (inputText.charAt(i) == "o") {
          line0 += o[0];
          line1 += o[1];
          line2 += o[2];
        }
        if (inputText.charAt(i) == "p") {
          line0 += p[0];
          line1 += p[1];
          line2 += p[2];
        }
        if (inputText.charAt(i) == "q") {
          line0 += q[0];
          line1 += q[1];
          line2 += q[2];
        }
        if (inputText.charAt(i) == "r") {
          line0 += r[0];
          line1 += r[1];
          line2 += r[2];
        }
        if (inputText.charAt(i) == "s") {
          line0 += s[0];
          line1 += s[1];
          line2 += s[2];
        }
        if (inputText.charAt(i) == "t") {
          line0 += t[0];
          line1 += t[1];
          line2 += t[2];
        }
        if (inputText.charAt(i) == "u") {
          line0 += u[0];
          line1 += u[1];
          line2 += u[2];
        }
        if (inputText.charAt(i) == "v") {
          line0 += v[0];
          line1 += v[1];
          line2 += v[2];
        }
        if (inputText.charAt(i) == "w") {
          line0 += w[0];
          line1 += w[1];
          line2 += w[2];
        }
        if (inputText.charAt(i) == "x") {
          line0 += x[0];
          line1 += x[1];
          line2 += x[2];
        }
        if (inputText.charAt(i) == "y") {
          line0 += y[0];
          line1 += y[1];
          line2 += y[2];
        }
        if (inputText.charAt(i) == "z") {
          line0 += z[0];
          line1 += z[1];
          line2 += z[2];
        }
        if (inputText.charAt(i) == "0") {
          line0 += zero[0];
          line1 += zero[1];
          line2 += zero[2];
        }
        if (inputText.charAt(i) == "1") {
          line0 += one[0];
          line1 += one[1];
          line2 += one[2];
        }
        if (inputText.charAt(i) == "2") {
          line0 += two[0];
          line1 += two[1];
          line2 += two[2];
        }
        if (inputText.charAt(i) == "3") {
          line0 += three[0];
          line1 += three[1];
          line2 += three[2];
        }
        if (inputText.charAt(i) == "4") {
          line0 += four[0];
          line1 += four[1];
          line2 += four[2];
        }
        if (inputText.charAt(i) == "5") {
          line0 += five[0];
          line1 += five[1];
          line2 += five[2];
        }
        if (inputText.charAt(i) == "6") {
          line0 += six[0];
          line1 += six[1];
          line2 += six[2];
        }
        if (inputText.charAt(i) == "7") {
          line0 += seven[0];
          line1 += seven[1];
          line2 += seven[2];
        }
        if (inputText.charAt(i) == "8") {
          line0 += eight[0];
          line1 += eight[1];
          line2 += eight[2];
        }
        if (inputText.charAt(i) == "9") {
          line0 += nine[0];
          line1 += nine[1];
          line2 += nine[2];
        }
        if (inputText.substring(i, i + 2) == "\\n") {
          newline = true;
          break;
        }
      }
      var outputText = line0 + "\n" + line1 + "\n" + line2;
      if (newline == true) {
        return outputText + "\n" + buildStyle3(inputText.substring(i + 2, inputText.length));
      } else {
        return outputText;
      }
    }
    exports.buildStyle1 = buildStyle1;
    exports.buildStyle2 = buildStyle2;
    exports.buildStyle3 = buildStyle3;
  }
});

// node_modules/ascii-text-generator/index.js
var require_ascii_text_generator = __commonJS({
  "node_modules/ascii-text-generator/index.js"(exports, module2) {
    "use strict";
    var buildStyle = require_ascii_text();
    function beginGenerator(inputText, textStyle) {
      var validChars = true;
      var invalChar;
      inputText = inputText.toLowerCase();
      for (var i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i) != "a" && inputText.charAt(i) != "b" && inputText.charAt(i) != "c" && inputText.charAt(i) != "d" && inputText.charAt(i) != "e" && inputText.charAt(i) != "f" && inputText.charAt(i) != "g" && inputText.charAt(i) != "h" && inputText.charAt(i) != "i" && inputText.charAt(i) != "j" && inputText.charAt(i) != "k" && inputText.charAt(i) != "l" && inputText.charAt(i) != "m" && inputText.charAt(i) != "n" && inputText.charAt(i) != "o" && inputText.charAt(i) != "p" && inputText.charAt(i) != "q" && inputText.charAt(i) != "r" && inputText.charAt(i) != "s" && inputText.charAt(i) != "t" && inputText.charAt(i) != "u" && inputText.charAt(i) != "v" && inputText.charAt(i) != "w" && inputText.charAt(i) != "x" && inputText.charAt(i) != "y" && inputText.charAt(i) != "z" && inputText.charAt(i) != " " && inputText.charAt(i) != "0" && inputText.charAt(i) != "1" && inputText.charAt(i) != "2" && inputText.charAt(i) != "3" && inputText.charAt(i) != "4" && inputText.charAt(i) != "5" && inputText.charAt(i) != "6" && inputText.charAt(i) != "7" && inputText.charAt(i) != "8" && inputText.charAt(i) != "9" && inputText.substring(i, i + 2) != "\\n") {
          validChars = false;
          invalChar = inputText.charAt(i);
        }
      }
      if (validChars == false) {
        throw new Error('Fatal Error: Character "' + invalChar + '" invalid.  Only characters a-z, 0-9, and newlines (\n) accepted.');
      }
      if (validChars == true) {
        if (textStyle === "1") {
          return buildStyle.buildStyle1(inputText);
        }
        if (textStyle === "2") {
          return buildStyle.buildStyle2(inputText);
        }
        if (textStyle === "3") {
          return buildStyle.buildStyle3(inputText);
        }
      }
    }
    module2.exports = beginGenerator;
  }
});

// node_modules/picomatch/lib/constants.js
var require_constants = __commonJS({
  "node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/picomatch/lib/utils.js
var require_utils = __commonJS({
  "node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1)
        return input;
      if (input[idx - 1] === "\\")
        return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/picomatch/lib/scan.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true)
            continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK)
            isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob)
          glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// node_modules/picomatch/lib/parse.js
var require_parse = __commonJS({
  "node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    var constants = require_constants();
    var utils = require_utils();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output)
          append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".")
              prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true)
          return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match)
              return;
            const source2 = create(match[1]);
            if (!source2)
              return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/picomatch/lib/picomatch.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var scan = require_scan();
    var parse = require_parse();
    var utils = require_utils();
    var constants = require_constants();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2)
              return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern))
        return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true)
          throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module2.exports = picomatch;
  }
});

// node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/picomatch/index.js"(exports, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// node_modules/readdirp/index.js
var require_readdirp = __commonJS({
  "node_modules/readdirp/index.js"(exports, module2) {
    "use strict";
    var fs2 = require("fs");
    var { Readable } = require("stream");
    var sysPath = require("path");
    var { promisify } = require("util");
    var picomatch = require_picomatch2();
    var readdir = promisify(fs2.readdir);
    var stat = promisify(fs2.stat);
    var lstat = promisify(fs2.lstat);
    var realpath = promisify(fs2.realpath);
    var BANG = "!";
    var RECURSIVE_ERROR_CODE = "READDIRP_RECURSIVE_ERROR";
    var NORMAL_FLOW_ERRORS = /* @__PURE__ */ new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", RECURSIVE_ERROR_CODE]);
    var FILE_TYPE = "files";
    var DIR_TYPE = "directories";
    var FILE_DIR_TYPE = "files_directories";
    var EVERYTHING_TYPE = "all";
    var ALL_TYPES = [FILE_TYPE, DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE];
    var isNormalFlowError = (error) => NORMAL_FLOW_ERRORS.has(error.code);
    var [maj, min] = process.versions.node.split(".").slice(0, 2).map((n) => Number.parseInt(n, 10));
    var wantBigintFsStats = process.platform === "win32" && (maj > 10 || maj === 10 && min >= 5);
    var normalizeFilter = (filter) => {
      if (filter === void 0)
        return;
      if (typeof filter === "function")
        return filter;
      if (typeof filter === "string") {
        const glob = picomatch(filter.trim());
        return (entry) => glob(entry.basename);
      }
      if (Array.isArray(filter)) {
        const positive = [];
        const negative = [];
        for (const item of filter) {
          const trimmed = item.trim();
          if (trimmed.charAt(0) === BANG) {
            negative.push(picomatch(trimmed.slice(1)));
          } else {
            positive.push(picomatch(trimmed));
          }
        }
        if (negative.length > 0) {
          if (positive.length > 0) {
            return (entry) => positive.some((f) => f(entry.basename)) && !negative.some((f) => f(entry.basename));
          }
          return (entry) => !negative.some((f) => f(entry.basename));
        }
        return (entry) => positive.some((f) => f(entry.basename));
      }
    };
    var ReaddirpStream = class extends Readable {
      static get defaultOptions() {
        return {
          root: ".",
          /* eslint-disable no-unused-vars */
          fileFilter: (path) => true,
          directoryFilter: (path) => true,
          /* eslint-enable no-unused-vars */
          type: FILE_TYPE,
          lstat: false,
          depth: 2147483648,
          alwaysStat: false
        };
      }
      constructor(options = {}) {
        super({
          objectMode: true,
          autoDestroy: true,
          highWaterMark: options.highWaterMark || 4096
        });
        const opts = { ...ReaddirpStream.defaultOptions, ...options };
        const { root, type } = opts;
        this._fileFilter = normalizeFilter(opts.fileFilter);
        this._directoryFilter = normalizeFilter(opts.directoryFilter);
        const statMethod = opts.lstat ? lstat : stat;
        if (wantBigintFsStats) {
          this._stat = (path) => statMethod(path, { bigint: true });
        } else {
          this._stat = statMethod;
        }
        this._maxDepth = opts.depth;
        this._wantsDir = [DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
        this._wantsFile = [FILE_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
        this._wantsEverything = type === EVERYTHING_TYPE;
        this._root = sysPath.resolve(root);
        this._isDirent = "Dirent" in fs2 && !opts.alwaysStat;
        this._statsProp = this._isDirent ? "dirent" : "stats";
        this._rdOptions = { encoding: "utf8", withFileTypes: this._isDirent };
        this.parents = [this._exploreDir(root, 1)];
        this.reading = false;
        this.parent = void 0;
      }
      async _read(batch) {
        if (this.reading)
          return;
        this.reading = true;
        try {
          while (!this.destroyed && batch > 0) {
            const { path, depth, files = [] } = this.parent || {};
            if (files.length > 0) {
              const slice = files.splice(0, batch).map((dirent) => this._formatEntry(dirent, path));
              for (const entry of await Promise.all(slice)) {
                if (this.destroyed)
                  return;
                const entryType = await this._getEntryType(entry);
                if (entryType === "directory" && this._directoryFilter(entry)) {
                  if (depth <= this._maxDepth) {
                    this.parents.push(this._exploreDir(entry.fullPath, depth + 1));
                  }
                  if (this._wantsDir) {
                    this.push(entry);
                    batch--;
                  }
                } else if ((entryType === "file" || this._includeAsFile(entry)) && this._fileFilter(entry)) {
                  if (this._wantsFile) {
                    this.push(entry);
                    batch--;
                  }
                }
              }
            } else {
              const parent = this.parents.pop();
              if (!parent) {
                this.push(null);
                break;
              }
              this.parent = await parent;
              if (this.destroyed)
                return;
            }
          }
        } catch (error) {
          this.destroy(error);
        } finally {
          this.reading = false;
        }
      }
      async _exploreDir(path, depth) {
        let files;
        try {
          files = await readdir(path, this._rdOptions);
        } catch (error) {
          this._onError(error);
        }
        return { files, depth, path };
      }
      async _formatEntry(dirent, path) {
        let entry;
        try {
          const basename = this._isDirent ? dirent.name : dirent;
          const fullPath = sysPath.resolve(sysPath.join(path, basename));
          entry = { path: sysPath.relative(this._root, fullPath), fullPath, basename };
          entry[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
        } catch (err) {
          this._onError(err);
        }
        return entry;
      }
      _onError(err) {
        if (isNormalFlowError(err) && !this.destroyed) {
          this.emit("warn", err);
        } else {
          this.destroy(err);
        }
      }
      async _getEntryType(entry) {
        const stats = entry && entry[this._statsProp];
        if (!stats) {
          return;
        }
        if (stats.isFile()) {
          return "file";
        }
        if (stats.isDirectory()) {
          return "directory";
        }
        if (stats && stats.isSymbolicLink()) {
          const full = entry.fullPath;
          try {
            const entryRealPath = await realpath(full);
            const entryRealPathStats = await lstat(entryRealPath);
            if (entryRealPathStats.isFile()) {
              return "file";
            }
            if (entryRealPathStats.isDirectory()) {
              const len = entryRealPath.length;
              if (full.startsWith(entryRealPath) && full.substr(len, 1) === sysPath.sep) {
                const recursiveError = new Error(
                  `Circular symlink detected: "${full}" points to "${entryRealPath}"`
                );
                recursiveError.code = RECURSIVE_ERROR_CODE;
                return this._onError(recursiveError);
              }
              return "directory";
            }
          } catch (error) {
            this._onError(error);
          }
        }
      }
      _includeAsFile(entry) {
        const stats = entry && entry[this._statsProp];
        return stats && this._wantsEverything && !stats.isDirectory();
      }
    };
    var readdirp = (root, options = {}) => {
      let type = options.entryType || options.type;
      if (type === "both")
        type = FILE_DIR_TYPE;
      if (type)
        options.type = type;
      if (!root) {
        throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
      } else if (typeof root !== "string") {
        throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
      } else if (type && !ALL_TYPES.includes(type)) {
        throw new Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(", ")}`);
      }
      options.root = root;
      return new ReaddirpStream(options);
    };
    var readdirpPromise = (root, options = {}) => {
      return new Promise((resolve, reject) => {
        const files = [];
        readdirp(root, options).on("data", (entry) => files.push(entry)).on("end", () => resolve(files)).on("error", (error) => reject(error));
      });
    };
    readdirp.promise = readdirpPromise;
    readdirp.ReaddirpStream = ReaddirpStream;
    readdirp.default = readdirp;
    module2.exports = readdirp;
  }
});

// node_modules/normalize-path/index.js
var require_normalize_path = __commonJS({
  "node_modules/normalize-path/index.js"(exports, module2) {
    module2.exports = function(path, stripTrailing) {
      if (typeof path !== "string") {
        throw new TypeError("expected path to be a string");
      }
      if (path === "\\" || path === "/")
        return "/";
      var len = path.length;
      if (len <= 1)
        return path;
      var prefix = "";
      if (len > 4 && path[3] === "\\") {
        var ch = path[2];
        if ((ch === "?" || ch === ".") && path.slice(0, 2) === "\\\\") {
          path = path.slice(2);
          prefix = "//";
        }
      }
      var segs = path.split(/[/\\]+/);
      if (stripTrailing !== false && segs[segs.length - 1] === "") {
        segs.pop();
      }
      return prefix + segs.join("/");
    };
  }
});

// node_modules/anymatch/index.js
var require_anymatch = __commonJS({
  "node_modules/anymatch/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var picomatch = require_picomatch2();
    var normalizePath = require_normalize_path();
    var BANG = "!";
    var DEFAULT_OPTIONS = { returnIndex: false };
    var arrify = (item) => Array.isArray(item) ? item : [item];
    var createPattern = (matcher, options) => {
      if (typeof matcher === "function") {
        return matcher;
      }
      if (typeof matcher === "string") {
        const glob = picomatch(matcher, options);
        return (string) => matcher === string || glob(string);
      }
      if (matcher instanceof RegExp) {
        return (string) => matcher.test(string);
      }
      return (string) => false;
    };
    var matchPatterns = (patterns, negPatterns, args, returnIndex) => {
      const isList = Array.isArray(args);
      const _path = isList ? args[0] : args;
      if (!isList && typeof _path !== "string") {
        throw new TypeError("anymatch: second argument must be a string: got " + Object.prototype.toString.call(_path));
      }
      const path = normalizePath(_path, false);
      for (let index = 0; index < negPatterns.length; index++) {
        const nglob = negPatterns[index];
        if (nglob(path)) {
          return returnIndex ? -1 : false;
        }
      }
      const applied = isList && [path].concat(args.slice(1));
      for (let index = 0; index < patterns.length; index++) {
        const pattern = patterns[index];
        if (isList ? pattern(...applied) : pattern(path)) {
          return returnIndex ? index : true;
        }
      }
      return returnIndex ? -1 : false;
    };
    var anymatch = (matchers, testString, options = DEFAULT_OPTIONS) => {
      if (matchers == null) {
        throw new TypeError("anymatch: specify first argument");
      }
      const opts = typeof options === "boolean" ? { returnIndex: options } : options;
      const returnIndex = opts.returnIndex || false;
      const mtchers = arrify(matchers);
      const negatedGlobs = mtchers.filter((item) => typeof item === "string" && item.charAt(0) === BANG).map((item) => item.slice(1)).map((item) => picomatch(item, opts));
      const patterns = mtchers.filter((item) => typeof item !== "string" || typeof item === "string" && item.charAt(0) !== BANG).map((matcher) => createPattern(matcher, opts));
      if (testString == null) {
        return (testString2, ri = false) => {
          const returnIndex2 = typeof ri === "boolean" ? ri : false;
          return matchPatterns(patterns, negatedGlobs, testString2, returnIndex2);
        };
      }
      return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
    };
    anymatch.default = anymatch;
    module2.exports = anymatch;
  }
});

// node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "node_modules/is-extglob/index.js"(exports, module2) {
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2])
          return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});

// node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "node_modules/is-glob/index.js"(exports, module2) {
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    module2.exports = function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check = strictCheck;
      if (options && options.strict === false) {
        check = relaxedCheck;
      }
      return check(str);
    };
  }
});

// node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "node_modules/glob-parent/index.js"(exports, module2) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = require("path").posix.dirname;
    var isWin32 = require("os").platform() === "win32";
    var slash = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module2.exports = function globParent(str, opts) {
      var options = Object.assign({ flipBackslashes: true }, opts);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
      }
      if (enclosure.test(str)) {
        str += slash;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    };
  }
});

// node_modules/braces/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/braces/lib/utils.js"(exports) {
    "use strict";
    exports.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false)
        return false;
      if (!exports.isInteger(min) || !exports.isInteger(max))
        return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports.escapeNode = (block, n = 0, type) => {
      let node = block.nodes[n];
      if (!node)
        return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports.encloseBrace = (node) => {
      if (node.type !== "brace")
        return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports.isInvalidBrace = (block) => {
      if (block.type !== "brace")
        return false;
      if (block.invalid === true || block.dollar)
        return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text")
        acc.push(node.value);
      if (node.type === "range")
        node.type = "text";
      return acc;
    }, []);
    exports.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          let ele = arr[i];
          Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/braces/lib/stringify.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    module2.exports = (ast, options = {}) => {
      let stringify = (node, parent = {}) => {
        let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      };
      return stringify(ast);
    };
  }
});

// node_modules/is-number/index.js
var require_is_number = __commonJS({
  "node_modules/is-number/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "node_modules/to-regex-range/index.js"(exports, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = { relaxZeros: true, ...options };
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = /* @__PURE__ */ new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++)
        arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "node_modules/fill-range/index.js"(exports, module2) {
    "use strict";
    var util = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-")
        value = value.slice(1);
      if (value === "0")
        return false;
      while (value[++index] === "0")
        ;
      return index > 0;
    };
    var stringify = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash)
          input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength)
        input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, { wrap: false, ...options });
      }
      let start = String.fromCharCode(a);
      if (a === b)
        return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true)
        throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true)
          throw rangeError([start, end]);
        return [];
      }
      if (a === 0)
        a = 0;
      if (b === 0)
        b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options) : toRegex(range, null, { wrap: false, ...options });
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = { ...options };
      if (opts.capture === true)
        opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step))
          return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});

// node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "node_modules/braces/lib/compile.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils2();
    var compile = (ast, options = {}) => {
      let walk = (node, parent = {}) => {
        let invalidBlock = utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let invalid = invalidBlock === true || invalidNode === true;
        let prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          let range = fill(...args, { ...options, wrap: false, toRegex: true });
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "node_modules/braces/lib/expand.js"(exports, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils2();
    var append = (queue = "", stash = "", enclose = false) => {
      let result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length)
        return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (let item of queue) {
        if (Array.isArray(item)) {
          for (let value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string")
              ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options = {}) => {
      let rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      let walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        let enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          let child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1)
              queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// node_modules/braces/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/braces/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      // Digits
      CHAR_0: "0",
      /* 0 */
      CHAR_9: "9",
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: "A",
      /* A */
      CHAR_LOWERCASE_A: "a",
      /* a */
      CHAR_UPPERCASE_Z: "Z",
      /* Z */
      CHAR_LOWERCASE_Z: "z",
      /* z */
      CHAR_LEFT_PARENTHESES: "(",
      /* ( */
      CHAR_RIGHT_PARENTHESES: ")",
      /* ) */
      CHAR_ASTERISK: "*",
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: "&",
      /* & */
      CHAR_AT: "@",
      /* @ */
      CHAR_BACKSLASH: "\\",
      /* \ */
      CHAR_BACKTICK: "`",
      /* ` */
      CHAR_CARRIAGE_RETURN: "\r",
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: "^",
      /* ^ */
      CHAR_COLON: ":",
      /* : */
      CHAR_COMMA: ",",
      /* , */
      CHAR_DOLLAR: "$",
      /* . */
      CHAR_DOT: ".",
      /* . */
      CHAR_DOUBLE_QUOTE: '"',
      /* " */
      CHAR_EQUAL: "=",
      /* = */
      CHAR_EXCLAMATION_MARK: "!",
      /* ! */
      CHAR_FORM_FEED: "\f",
      /* \f */
      CHAR_FORWARD_SLASH: "/",
      /* / */
      CHAR_HASH: "#",
      /* # */
      CHAR_HYPHEN_MINUS: "-",
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: "<",
      /* < */
      CHAR_LEFT_CURLY_BRACE: "{",
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: "[",
      /* [ */
      CHAR_LINE_FEED: "\n",
      /* \n */
      CHAR_NO_BREAK_SPACE: "\xA0",
      /* \u00A0 */
      CHAR_PERCENT: "%",
      /* % */
      CHAR_PLUS: "+",
      /* + */
      CHAR_QUESTION_MARK: "?",
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      /* > */
      CHAR_RIGHT_CURLY_BRACE: "}",
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      /* ] */
      CHAR_SEMICOLON: ";",
      /* ; */
      CHAR_SINGLE_QUOTE: "'",
      /* ' */
      CHAR_SPACE: " ",
      /*   */
      CHAR_TAB: "	",
      /* \t */
      CHAR_UNDERSCORE: "_",
      /* _ */
      CHAR_VERTICAL_LINE: "|",
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      /* \uFEFF */
    };
  }
});

// node_modules/braces/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/braces/lib/parse.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      /* \ */
      CHAR_BACKTICK,
      /* ` */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_RIGHT_SQUARE_BRACKET,
      /* ] */
      CHAR_DOUBLE_QUOTE,
      /* " */
      CHAR_SINGLE_QUOTE,
      /* ' */
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants2();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      let opts = options || {};
      let max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      let ast = { type: "root", input, nodes: [] };
      let stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      let length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      let memo = {};
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let closed = true;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          let open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true)
                value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          let brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          let type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            let open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          let siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            let before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open")
                node.isOpen = true;
              if (node.type === "close")
                node.isClose = true;
              if (!node.nodes)
                node.type = "text";
              node.invalid = true;
            }
          });
          let parent = stack[stack.length - 1];
          let index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// node_modules/braces/index.js
var require_braces = __commonJS({
  "node_modules/braces/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse2();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (let pattern of input) {
          let result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// node_modules/binary-extensions/binary-extensions.json
var require_binary_extensions = __commonJS({
  "node_modules/binary-extensions/binary-extensions.json"(exports, module2) {
    module2.exports = [
      "3dm",
      "3ds",
      "3g2",
      "3gp",
      "7z",
      "a",
      "aac",
      "adp",
      "ai",
      "aif",
      "aiff",
      "alz",
      "ape",
      "apk",
      "appimage",
      "ar",
      "arj",
      "asf",
      "au",
      "avi",
      "bak",
      "baml",
      "bh",
      "bin",
      "bk",
      "bmp",
      "btif",
      "bz2",
      "bzip2",
      "cab",
      "caf",
      "cgm",
      "class",
      "cmx",
      "cpio",
      "cr2",
      "cur",
      "dat",
      "dcm",
      "deb",
      "dex",
      "djvu",
      "dll",
      "dmg",
      "dng",
      "doc",
      "docm",
      "docx",
      "dot",
      "dotm",
      "dra",
      "DS_Store",
      "dsk",
      "dts",
      "dtshd",
      "dvb",
      "dwg",
      "dxf",
      "ecelp4800",
      "ecelp7470",
      "ecelp9600",
      "egg",
      "eol",
      "eot",
      "epub",
      "exe",
      "f4v",
      "fbs",
      "fh",
      "fla",
      "flac",
      "flatpak",
      "fli",
      "flv",
      "fpx",
      "fst",
      "fvt",
      "g3",
      "gh",
      "gif",
      "graffle",
      "gz",
      "gzip",
      "h261",
      "h263",
      "h264",
      "icns",
      "ico",
      "ief",
      "img",
      "ipa",
      "iso",
      "jar",
      "jpeg",
      "jpg",
      "jpgv",
      "jpm",
      "jxr",
      "key",
      "ktx",
      "lha",
      "lib",
      "lvp",
      "lz",
      "lzh",
      "lzma",
      "lzo",
      "m3u",
      "m4a",
      "m4v",
      "mar",
      "mdi",
      "mht",
      "mid",
      "midi",
      "mj2",
      "mka",
      "mkv",
      "mmr",
      "mng",
      "mobi",
      "mov",
      "movie",
      "mp3",
      "mp4",
      "mp4a",
      "mpeg",
      "mpg",
      "mpga",
      "mxu",
      "nef",
      "npx",
      "numbers",
      "nupkg",
      "o",
      "odp",
      "ods",
      "odt",
      "oga",
      "ogg",
      "ogv",
      "otf",
      "ott",
      "pages",
      "pbm",
      "pcx",
      "pdb",
      "pdf",
      "pea",
      "pgm",
      "pic",
      "png",
      "pnm",
      "pot",
      "potm",
      "potx",
      "ppa",
      "ppam",
      "ppm",
      "pps",
      "ppsm",
      "ppsx",
      "ppt",
      "pptm",
      "pptx",
      "psd",
      "pya",
      "pyc",
      "pyo",
      "pyv",
      "qt",
      "rar",
      "ras",
      "raw",
      "resources",
      "rgb",
      "rip",
      "rlc",
      "rmf",
      "rmvb",
      "rpm",
      "rtf",
      "rz",
      "s3m",
      "s7z",
      "scpt",
      "sgi",
      "shar",
      "snap",
      "sil",
      "sketch",
      "slk",
      "smv",
      "snk",
      "so",
      "stl",
      "suo",
      "sub",
      "swf",
      "tar",
      "tbz",
      "tbz2",
      "tga",
      "tgz",
      "thmx",
      "tif",
      "tiff",
      "tlz",
      "ttc",
      "ttf",
      "txz",
      "udf",
      "uvh",
      "uvi",
      "uvm",
      "uvp",
      "uvs",
      "uvu",
      "viv",
      "vob",
      "war",
      "wav",
      "wax",
      "wbmp",
      "wdp",
      "weba",
      "webm",
      "webp",
      "whl",
      "wim",
      "wm",
      "wma",
      "wmv",
      "wmx",
      "woff",
      "woff2",
      "wrm",
      "wvx",
      "xbm",
      "xif",
      "xla",
      "xlam",
      "xls",
      "xlsb",
      "xlsm",
      "xlsx",
      "xlt",
      "xltm",
      "xltx",
      "xm",
      "xmind",
      "xpi",
      "xpm",
      "xwd",
      "xz",
      "z",
      "zip",
      "zipx"
    ];
  }
});

// node_modules/binary-extensions/index.js
var require_binary_extensions2 = __commonJS({
  "node_modules/binary-extensions/index.js"(exports, module2) {
    module2.exports = require_binary_extensions();
  }
});

// node_modules/is-binary-path/index.js
var require_is_binary_path = __commonJS({
  "node_modules/is-binary-path/index.js"(exports, module2) {
    "use strict";
    var path = require("path");
    var binaryExtensions = require_binary_extensions2();
    var extensions = new Set(binaryExtensions);
    module2.exports = (filePath) => extensions.has(path.extname(filePath).slice(1).toLowerCase());
  }
});

// node_modules/chokidar/lib/constants.js
var require_constants3 = __commonJS({
  "node_modules/chokidar/lib/constants.js"(exports) {
    "use strict";
    var { sep } = require("path");
    var { platform } = process;
    var os = require("os");
    exports.EV_ALL = "all";
    exports.EV_READY = "ready";
    exports.EV_ADD = "add";
    exports.EV_CHANGE = "change";
    exports.EV_ADD_DIR = "addDir";
    exports.EV_UNLINK = "unlink";
    exports.EV_UNLINK_DIR = "unlinkDir";
    exports.EV_RAW = "raw";
    exports.EV_ERROR = "error";
    exports.STR_DATA = "data";
    exports.STR_END = "end";
    exports.STR_CLOSE = "close";
    exports.FSEVENT_CREATED = "created";
    exports.FSEVENT_MODIFIED = "modified";
    exports.FSEVENT_DELETED = "deleted";
    exports.FSEVENT_MOVED = "moved";
    exports.FSEVENT_CLONED = "cloned";
    exports.FSEVENT_UNKNOWN = "unknown";
    exports.FSEVENT_TYPE_FILE = "file";
    exports.FSEVENT_TYPE_DIRECTORY = "directory";
    exports.FSEVENT_TYPE_SYMLINK = "symlink";
    exports.KEY_LISTENERS = "listeners";
    exports.KEY_ERR = "errHandlers";
    exports.KEY_RAW = "rawEmitters";
    exports.HANDLER_KEYS = [exports.KEY_LISTENERS, exports.KEY_ERR, exports.KEY_RAW];
    exports.DOT_SLASH = `.${sep}`;
    exports.BACK_SLASH_RE = /\\/g;
    exports.DOUBLE_SLASH_RE = /\/\//;
    exports.SLASH_OR_BACK_SLASH_RE = /[/\\]/;
    exports.DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
    exports.REPLACER_RE = /^\.[/\\]/;
    exports.SLASH = "/";
    exports.SLASH_SLASH = "//";
    exports.BRACE_START = "{";
    exports.BANG = "!";
    exports.ONE_DOT = ".";
    exports.TWO_DOTS = "..";
    exports.STAR = "*";
    exports.GLOBSTAR = "**";
    exports.ROOT_GLOBSTAR = "/**/*";
    exports.SLASH_GLOBSTAR = "/**";
    exports.DIR_SUFFIX = "Dir";
    exports.ANYMATCH_OPTS = { dot: true };
    exports.STRING_TYPE = "string";
    exports.FUNCTION_TYPE = "function";
    exports.EMPTY_STR = "";
    exports.EMPTY_FN = () => {
    };
    exports.IDENTITY_FN = (val) => val;
    exports.isWindows = platform === "win32";
    exports.isMacos = platform === "darwin";
    exports.isLinux = platform === "linux";
    exports.isIBMi = os.type() === "OS400";
  }
});

// node_modules/chokidar/lib/nodefs-handler.js
var require_nodefs_handler = __commonJS({
  "node_modules/chokidar/lib/nodefs-handler.js"(exports, module2) {
    "use strict";
    var fs2 = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var isBinaryPath = require_is_binary_path();
    var {
      isWindows,
      isLinux,
      EMPTY_FN,
      EMPTY_STR,
      KEY_LISTENERS,
      KEY_ERR,
      KEY_RAW,
      HANDLER_KEYS,
      EV_CHANGE,
      EV_ADD,
      EV_ADD_DIR,
      EV_ERROR,
      STR_DATA,
      STR_END,
      BRACE_START,
      STAR
    } = require_constants3();
    var THROTTLE_MODE_WATCH = "watch";
    var open = promisify(fs2.open);
    var stat = promisify(fs2.stat);
    var lstat = promisify(fs2.lstat);
    var close = promisify(fs2.close);
    var fsrealpath = promisify(fs2.realpath);
    var statMethods = { lstat, stat };
    var foreach = (val, fn) => {
      if (val instanceof Set) {
        val.forEach(fn);
      } else {
        fn(val);
      }
    };
    var addAndConvert = (main, prop, item) => {
      let container = main[prop];
      if (!(container instanceof Set)) {
        main[prop] = container = /* @__PURE__ */ new Set([container]);
      }
      container.add(item);
    };
    var clearItem = (cont) => (key) => {
      const set = cont[key];
      if (set instanceof Set) {
        set.clear();
      } else {
        delete cont[key];
      }
    };
    var delFromSet = (main, prop, item) => {
      const container = main[prop];
      if (container instanceof Set) {
        container.delete(item);
      } else if (container === item) {
        delete main[prop];
      }
    };
    var isEmptySet = (val) => val instanceof Set ? val.size === 0 : !val;
    var FsWatchInstances = /* @__PURE__ */ new Map();
    function createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
      const handleEvent = (rawEvent, evPath) => {
        listener(path);
        emitRaw(rawEvent, evPath, { watchedPath: path });
        if (evPath && path !== evPath) {
          fsWatchBroadcast(
            sysPath.resolve(path, evPath),
            KEY_LISTENERS,
            sysPath.join(path, evPath)
          );
        }
      };
      try {
        return fs2.watch(path, options, handleEvent);
      } catch (error) {
        errHandler(error);
      }
    }
    var fsWatchBroadcast = (fullPath, type, val1, val2, val3) => {
      const cont = FsWatchInstances.get(fullPath);
      if (!cont)
        return;
      foreach(cont[type], (listener) => {
        listener(val1, val2, val3);
      });
    };
    var setFsWatchListener = (path, fullPath, options, handlers) => {
      const { listener, errHandler, rawEmitter } = handlers;
      let cont = FsWatchInstances.get(fullPath);
      let watcher;
      if (!options.persistent) {
        watcher = createFsWatchInstance(
          path,
          options,
          listener,
          errHandler,
          rawEmitter
        );
        return watcher.close.bind(watcher);
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_ERR, errHandler);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        watcher = createFsWatchInstance(
          path,
          options,
          fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS),
          errHandler,
          // no need to use broadcast here
          fsWatchBroadcast.bind(null, fullPath, KEY_RAW)
        );
        if (!watcher)
          return;
        watcher.on(EV_ERROR, async (error) => {
          const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
          cont.watcherUnusable = true;
          if (isWindows && error.code === "EPERM") {
            try {
              const fd = await open(path, "r");
              await close(fd);
              broadcastErr(error);
            } catch (err) {
            }
          } else {
            broadcastErr(error);
          }
        });
        cont = {
          listeners: listener,
          errHandlers: errHandler,
          rawEmitters: rawEmitter,
          watcher
        };
        FsWatchInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_ERR, errHandler);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          cont.watcher.close();
          FsWatchInstances.delete(fullPath);
          HANDLER_KEYS.forEach(clearItem(cont));
          cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    };
    var FsWatchFileInstances = /* @__PURE__ */ new Map();
    var setFsWatchFileListener = (path, fullPath, options, handlers) => {
      const { listener, rawEmitter } = handlers;
      let cont = FsWatchFileInstances.get(fullPath);
      let listeners = /* @__PURE__ */ new Set();
      let rawEmitters = /* @__PURE__ */ new Set();
      const copts = cont && cont.options;
      if (copts && (copts.persistent < options.persistent || copts.interval > options.interval)) {
        listeners = cont.listeners;
        rawEmitters = cont.rawEmitters;
        fs2.unwatchFile(fullPath);
        cont = void 0;
      }
      if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_RAW, rawEmitter);
      } else {
        cont = {
          listeners: listener,
          rawEmitters: rawEmitter,
          options,
          watcher: fs2.watchFile(fullPath, options, (curr, prev) => {
            foreach(cont.rawEmitters, (rawEmitter2) => {
              rawEmitter2(EV_CHANGE, fullPath, { curr, prev });
            });
            const currmtime = curr.mtimeMs;
            if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) {
              foreach(cont.listeners, (listener2) => listener2(path, curr));
            }
          })
        };
        FsWatchFileInstances.set(fullPath, cont);
      }
      return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
          FsWatchFileInstances.delete(fullPath);
          fs2.unwatchFile(fullPath);
          cont.options = cont.watcher = void 0;
          Object.freeze(cont);
        }
      };
    };
    var NodeFsHandler = class {
      /**
       * @param {import("../index").FSWatcher} fsW
       */
      constructor(fsW) {
        this.fsw = fsW;
        this._boundHandleError = (error) => fsW._handleError(error);
      }
      /**
       * Watch file for changes with fs_watchFile or fs_watch.
       * @param {String} path to file or dir
       * @param {Function} listener on fs change
       * @returns {Function} closer for the watcher instance
       */
      _watchWithNodeFs(path, listener) {
        const opts = this.fsw.options;
        const directory = sysPath.dirname(path);
        const basename = sysPath.basename(path);
        const parent = this.fsw._getWatchedDir(directory);
        parent.add(basename);
        const absolutePath = sysPath.resolve(path);
        const options = { persistent: opts.persistent };
        if (!listener)
          listener = EMPTY_FN;
        let closer;
        if (opts.usePolling) {
          options.interval = opts.enableBinaryInterval && isBinaryPath(basename) ? opts.binaryInterval : opts.interval;
          closer = setFsWatchFileListener(path, absolutePath, options, {
            listener,
            rawEmitter: this.fsw._emitRaw
          });
        } else {
          closer = setFsWatchListener(path, absolutePath, options, {
            listener,
            errHandler: this._boundHandleError,
            rawEmitter: this.fsw._emitRaw
          });
        }
        return closer;
      }
      /**
       * Watch a file and emit add event if warranted.
       * @param {Path} file Path
       * @param {fs.Stats} stats result of fs_stat
       * @param {Boolean} initialAdd was the file added at watch instantiation?
       * @returns {Function} closer for the watcher instance
       */
      _handleFile(file, stats, initialAdd) {
        if (this.fsw.closed) {
          return;
        }
        const dirname = sysPath.dirname(file);
        const basename = sysPath.basename(file);
        const parent = this.fsw._getWatchedDir(dirname);
        let prevStats = stats;
        if (parent.has(basename))
          return;
        const listener = async (path, newStats) => {
          if (!this.fsw._throttle(THROTTLE_MODE_WATCH, file, 5))
            return;
          if (!newStats || newStats.mtimeMs === 0) {
            try {
              const newStats2 = await stat(file);
              if (this.fsw.closed)
                return;
              const at = newStats2.atimeMs;
              const mt = newStats2.mtimeMs;
              if (!at || at <= mt || mt !== prevStats.mtimeMs) {
                this.fsw._emit(EV_CHANGE, file, newStats2);
              }
              if (isLinux && prevStats.ino !== newStats2.ino) {
                this.fsw._closeFile(path);
                prevStats = newStats2;
                this.fsw._addPathCloser(path, this._watchWithNodeFs(file, listener));
              } else {
                prevStats = newStats2;
              }
            } catch (error) {
              this.fsw._remove(dirname, basename);
            }
          } else if (parent.has(basename)) {
            const at = newStats.atimeMs;
            const mt = newStats.mtimeMs;
            if (!at || at <= mt || mt !== prevStats.mtimeMs) {
              this.fsw._emit(EV_CHANGE, file, newStats);
            }
            prevStats = newStats;
          }
        };
        const closer = this._watchWithNodeFs(file, listener);
        if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
          if (!this.fsw._throttle(EV_ADD, file, 0))
            return;
          this.fsw._emit(EV_ADD, file, stats);
        }
        return closer;
      }
      /**
       * Handle symlinks encountered while reading a dir.
       * @param {Object} entry returned by readdirp
       * @param {String} directory path of dir being read
       * @param {String} path of this item
       * @param {String} item basename of this item
       * @returns {Promise<Boolean>} true if no more processing is needed for this entry.
       */
      async _handleSymlink(entry, directory, path, item) {
        if (this.fsw.closed) {
          return;
        }
        const full = entry.fullPath;
        const dir = this.fsw._getWatchedDir(directory);
        if (!this.fsw.options.followSymlinks) {
          this.fsw._incrReadyCount();
          let linkPath;
          try {
            linkPath = await fsrealpath(path);
          } catch (e) {
            this.fsw._emitReady();
            return true;
          }
          if (this.fsw.closed)
            return;
          if (dir.has(item)) {
            if (this.fsw._symlinkPaths.get(full) !== linkPath) {
              this.fsw._symlinkPaths.set(full, linkPath);
              this.fsw._emit(EV_CHANGE, path, entry.stats);
            }
          } else {
            dir.add(item);
            this.fsw._symlinkPaths.set(full, linkPath);
            this.fsw._emit(EV_ADD, path, entry.stats);
          }
          this.fsw._emitReady();
          return true;
        }
        if (this.fsw._symlinkPaths.has(full)) {
          return true;
        }
        this.fsw._symlinkPaths.set(full, true);
      }
      _handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
        directory = sysPath.join(directory, EMPTY_STR);
        if (!wh.hasGlob) {
          throttler = this.fsw._throttle("readdir", directory, 1e3);
          if (!throttler)
            return;
        }
        const previous = this.fsw._getWatchedDir(wh.path);
        const current = /* @__PURE__ */ new Set();
        let stream = this.fsw._readdirp(directory, {
          fileFilter: (entry) => wh.filterPath(entry),
          directoryFilter: (entry) => wh.filterDir(entry),
          depth: 0
        }).on(STR_DATA, async (entry) => {
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          const item = entry.path;
          let path = sysPath.join(directory, item);
          current.add(item);
          if (entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path, item)) {
            return;
          }
          if (this.fsw.closed) {
            stream = void 0;
            return;
          }
          if (item === target || !target && !previous.has(item)) {
            this.fsw._incrReadyCount();
            path = sysPath.join(dir, sysPath.relative(dir, path));
            this._addToNodeFs(path, initialAdd, wh, depth + 1);
          }
        }).on(EV_ERROR, this._boundHandleError);
        return new Promise(
          (resolve) => stream.once(STR_END, () => {
            if (this.fsw.closed) {
              stream = void 0;
              return;
            }
            const wasThrottled = throttler ? throttler.clear() : false;
            resolve();
            previous.getChildren().filter((item) => {
              return item !== directory && !current.has(item) && // in case of intersecting globs;
              // a path may have been filtered out of this readdir, but
              // shouldn't be removed because it matches a different glob
              (!wh.hasGlob || wh.filterPath({
                fullPath: sysPath.resolve(directory, item)
              }));
            }).forEach((item) => {
              this.fsw._remove(directory, item);
            });
            stream = void 0;
            if (wasThrottled)
              this._handleRead(directory, false, wh, target, dir, depth, throttler);
          })
        );
      }
      /**
       * Read directory to add / remove files from `@watched` list and re-read it on change.
       * @param {String} dir fs path
       * @param {fs.Stats} stats
       * @param {Boolean} initialAdd
       * @param {Number} depth relative to user-supplied path
       * @param {String} target child path targeted for watch
       * @param {Object} wh Common watch helpers for this path
       * @param {String} realpath
       * @returns {Promise<Function>} closer for the watcher instance.
       */
      async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
        const parentDir = this.fsw._getWatchedDir(sysPath.dirname(dir));
        const tracked = parentDir.has(sysPath.basename(dir));
        if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
          if (!wh.hasGlob || wh.globFilter(dir))
            this.fsw._emit(EV_ADD_DIR, dir, stats);
        }
        parentDir.add(sysPath.basename(dir));
        this.fsw._getWatchedDir(dir);
        let throttler;
        let closer;
        const oDepth = this.fsw.options.depth;
        if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
          if (!target) {
            await this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler);
            if (this.fsw.closed)
              return;
          }
          closer = this._watchWithNodeFs(dir, (dirPath, stats2) => {
            if (stats2 && stats2.mtimeMs === 0)
              return;
            this._handleRead(dirPath, false, wh, target, dir, depth, throttler);
          });
        }
        return closer;
      }
      /**
       * Handle added file, directory, or glob pattern.
       * Delegates call to _handleFile / _handleDir after checks.
       * @param {String} path to file or ir
       * @param {Boolean} initialAdd was the file added at watch instantiation?
       * @param {Object} priorWh depth relative to user-supplied path
       * @param {Number} depth Child path actually targeted for watch
       * @param {String=} target Child path actually targeted for watch
       * @returns {Promise}
       */
      async _addToNodeFs(path, initialAdd, priorWh, depth, target) {
        const ready = this.fsw._emitReady;
        if (this.fsw._isIgnored(path) || this.fsw.closed) {
          ready();
          return false;
        }
        const wh = this.fsw._getWatchHelpers(path, depth);
        if (!wh.hasGlob && priorWh) {
          wh.hasGlob = priorWh.hasGlob;
          wh.globFilter = priorWh.globFilter;
          wh.filterPath = (entry) => priorWh.filterPath(entry);
          wh.filterDir = (entry) => priorWh.filterDir(entry);
        }
        try {
          const stats = await statMethods[wh.statMethod](wh.watchPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(wh.watchPath, stats)) {
            ready();
            return false;
          }
          const follow = this.fsw.options.followSymlinks && !path.includes(STAR) && !path.includes(BRACE_START);
          let closer;
          if (stats.isDirectory()) {
            const absPath = sysPath.resolve(path);
            const targetPath = follow ? await fsrealpath(path) : path;
            if (this.fsw.closed)
              return;
            closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (absPath !== targetPath && targetPath !== void 0) {
              this.fsw._symlinkPaths.set(absPath, targetPath);
            }
          } else if (stats.isSymbolicLink()) {
            const targetPath = follow ? await fsrealpath(path) : path;
            if (this.fsw.closed)
              return;
            const parent = sysPath.dirname(wh.watchPath);
            this.fsw._getWatchedDir(parent).add(wh.watchPath);
            this.fsw._emit(EV_ADD, wh.watchPath, stats);
            closer = await this._handleDir(parent, stats, initialAdd, depth, path, wh, targetPath);
            if (this.fsw.closed)
              return;
            if (targetPath !== void 0) {
              this.fsw._symlinkPaths.set(sysPath.resolve(path), targetPath);
            }
          } else {
            closer = this._handleFile(wh.watchPath, stats, initialAdd);
          }
          ready();
          this.fsw._addPathCloser(path, closer);
          return false;
        } catch (error) {
          if (this.fsw._handleError(error)) {
            ready();
            return path;
          }
        }
      }
    };
    module2.exports = NodeFsHandler;
  }
});

// node_modules/chokidar/lib/fsevents-handler.js
var require_fsevents_handler = __commonJS({
  "node_modules/chokidar/lib/fsevents-handler.js"(exports, module2) {
    "use strict";
    var fs2 = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var fsevents;
    try {
      fsevents = require("fsevents");
    } catch (error) {
      if (process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR)
        console.error(error);
    }
    if (fsevents) {
      const mtch = process.version.match(/v(\d+)\.(\d+)/);
      if (mtch && mtch[1] && mtch[2]) {
        const maj = Number.parseInt(mtch[1], 10);
        const min = Number.parseInt(mtch[2], 10);
        if (maj === 8 && min < 16) {
          fsevents = void 0;
        }
      }
    }
    var {
      EV_ADD,
      EV_CHANGE,
      EV_ADD_DIR,
      EV_UNLINK,
      EV_ERROR,
      STR_DATA,
      STR_END,
      FSEVENT_CREATED,
      FSEVENT_MODIFIED,
      FSEVENT_DELETED,
      FSEVENT_MOVED,
      // FSEVENT_CLONED,
      FSEVENT_UNKNOWN,
      FSEVENT_TYPE_FILE,
      FSEVENT_TYPE_DIRECTORY,
      FSEVENT_TYPE_SYMLINK,
      ROOT_GLOBSTAR,
      DIR_SUFFIX,
      DOT_SLASH,
      FUNCTION_TYPE,
      EMPTY_FN,
      IDENTITY_FN
    } = require_constants3();
    var Depth = (value) => isNaN(value) ? {} : { depth: value };
    var stat = promisify(fs2.stat);
    var lstat = promisify(fs2.lstat);
    var realpath = promisify(fs2.realpath);
    var statMethods = { stat, lstat };
    var FSEventsWatchers = /* @__PURE__ */ new Map();
    var consolidateThreshhold = 10;
    var wrongEventFlags = /* @__PURE__ */ new Set([
      69888,
      70400,
      71424,
      72704,
      73472,
      131328,
      131840,
      262912
    ]);
    var createFSEventsInstance = (path, callback) => {
      const stop = fsevents.watch(path, callback);
      return { stop };
    };
    function setFSEventsListener(path, realPath, listener, rawEmitter) {
      let watchPath = sysPath.extname(realPath) ? sysPath.dirname(realPath) : realPath;
      const parentPath = sysPath.dirname(watchPath);
      let cont = FSEventsWatchers.get(watchPath);
      if (couldConsolidate(parentPath)) {
        watchPath = parentPath;
      }
      const resolvedPath = sysPath.resolve(path);
      const hasSymlink = resolvedPath !== realPath;
      const filteredListener = (fullPath, flags, info) => {
        if (hasSymlink)
          fullPath = fullPath.replace(realPath, resolvedPath);
        if (fullPath === resolvedPath || !fullPath.indexOf(resolvedPath + sysPath.sep))
          listener(fullPath, flags, info);
      };
      let watchedParent = false;
      for (const watchedPath of FSEventsWatchers.keys()) {
        if (realPath.indexOf(sysPath.resolve(watchedPath) + sysPath.sep) === 0) {
          watchPath = watchedPath;
          cont = FSEventsWatchers.get(watchPath);
          watchedParent = true;
          break;
        }
      }
      if (cont || watchedParent) {
        cont.listeners.add(filteredListener);
      } else {
        cont = {
          listeners: /* @__PURE__ */ new Set([filteredListener]),
          rawEmitter,
          watcher: createFSEventsInstance(watchPath, (fullPath, flags) => {
            if (!cont.listeners.size)
              return;
            const info = fsevents.getInfo(fullPath, flags);
            cont.listeners.forEach((list) => {
              list(fullPath, flags, info);
            });
            cont.rawEmitter(info.event, fullPath, info);
          })
        };
        FSEventsWatchers.set(watchPath, cont);
      }
      return () => {
        const lst = cont.listeners;
        lst.delete(filteredListener);
        if (!lst.size) {
          FSEventsWatchers.delete(watchPath);
          if (cont.watcher)
            return cont.watcher.stop().then(() => {
              cont.rawEmitter = cont.watcher = void 0;
              Object.freeze(cont);
            });
        }
      };
    }
    var couldConsolidate = (path) => {
      let count = 0;
      for (const watchPath of FSEventsWatchers.keys()) {
        if (watchPath.indexOf(path) === 0) {
          count++;
          if (count >= consolidateThreshhold) {
            return true;
          }
        }
      }
      return false;
    };
    var canUse = () => fsevents && FSEventsWatchers.size < 128;
    var calcDepth = (path, root) => {
      let i = 0;
      while (!path.indexOf(root) && (path = sysPath.dirname(path)) !== root)
        i++;
      return i;
    };
    var sameTypes = (info, stats) => info.type === FSEVENT_TYPE_DIRECTORY && stats.isDirectory() || info.type === FSEVENT_TYPE_SYMLINK && stats.isSymbolicLink() || info.type === FSEVENT_TYPE_FILE && stats.isFile();
    var FsEventsHandler = class {
      /**
       * @param {import('../index').FSWatcher} fsw
       */
      constructor(fsw) {
        this.fsw = fsw;
      }
      checkIgnored(path, stats) {
        const ipaths = this.fsw._ignoredPaths;
        if (this.fsw._isIgnored(path, stats)) {
          ipaths.add(path);
          if (stats && stats.isDirectory()) {
            ipaths.add(path + ROOT_GLOBSTAR);
          }
          return true;
        }
        ipaths.delete(path);
        ipaths.delete(path + ROOT_GLOBSTAR);
      }
      addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
        const event = watchedDir.has(item) ? EV_CHANGE : EV_ADD;
        this.handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts);
      }
      async checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
        try {
          const stats = await stat(path);
          if (this.fsw.closed)
            return;
          if (sameTypes(info, stats)) {
            this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
          } else {
            this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
          }
        } catch (error) {
          if (error.code === "EACCES") {
            this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
          } else {
            this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
          }
        }
      }
      handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts) {
        if (this.fsw.closed || this.checkIgnored(path))
          return;
        if (event === EV_UNLINK) {
          const isDirectory = info.type === FSEVENT_TYPE_DIRECTORY;
          if (isDirectory || watchedDir.has(item)) {
            this.fsw._remove(parent, item, isDirectory);
          }
        } else {
          if (event === EV_ADD) {
            if (info.type === FSEVENT_TYPE_DIRECTORY)
              this.fsw._getWatchedDir(path);
            if (info.type === FSEVENT_TYPE_SYMLINK && opts.followSymlinks) {
              const curDepth = opts.depth === void 0 ? void 0 : calcDepth(fullPath, realPath) + 1;
              return this._addToFsEvents(path, false, true, curDepth);
            }
            this.fsw._getWatchedDir(parent).add(item);
          }
          const eventName = info.type === FSEVENT_TYPE_DIRECTORY ? event + DIR_SUFFIX : event;
          this.fsw._emit(eventName, path);
          if (eventName === EV_ADD_DIR)
            this._addToFsEvents(path, false, true);
        }
      }
      /**
       * Handle symlinks encountered during directory scan
       * @param {String} watchPath  - file/dir path to be watched with fsevents
       * @param {String} realPath   - real path (in case of symlinks)
       * @param {Function} transform  - path transformer
       * @param {Function} globFilter - path filter in case a glob pattern was provided
       * @returns {Function} closer for the watcher instance
      */
      _watchWithFsEvents(watchPath, realPath, transform, globFilter) {
        if (this.fsw.closed || this.fsw._isIgnored(watchPath))
          return;
        const opts = this.fsw.options;
        const watchCallback = async (fullPath, flags, info) => {
          if (this.fsw.closed)
            return;
          if (opts.depth !== void 0 && calcDepth(fullPath, realPath) > opts.depth)
            return;
          const path = transform(sysPath.join(
            watchPath,
            sysPath.relative(watchPath, fullPath)
          ));
          if (globFilter && !globFilter(path))
            return;
          const parent = sysPath.dirname(path);
          const item = sysPath.basename(path);
          const watchedDir = this.fsw._getWatchedDir(
            info.type === FSEVENT_TYPE_DIRECTORY ? path : parent
          );
          if (wrongEventFlags.has(flags) || info.event === FSEVENT_UNKNOWN) {
            if (typeof opts.ignored === FUNCTION_TYPE) {
              let stats;
              try {
                stats = await stat(path);
              } catch (error) {
              }
              if (this.fsw.closed)
                return;
              if (this.checkIgnored(path, stats))
                return;
              if (sameTypes(info, stats)) {
                this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
              } else {
                this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
              }
            } else {
              this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          } else {
            switch (info.event) {
              case FSEVENT_CREATED:
              case FSEVENT_MODIFIED:
                return this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
              case FSEVENT_DELETED:
              case FSEVENT_MOVED:
                return this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts);
            }
          }
        };
        const closer = setFSEventsListener(
          watchPath,
          realPath,
          watchCallback,
          this.fsw._emitRaw
        );
        this.fsw._emitReady();
        return closer;
      }
      /**
       * Handle symlinks encountered during directory scan
       * @param {String} linkPath path to symlink
       * @param {String} fullPath absolute path to the symlink
       * @param {Function} transform pre-existing path transformer
       * @param {Number} curDepth level of subdirectories traversed to where symlink is
       * @returns {Promise<void>}
       */
      async _handleFsEventsSymlink(linkPath, fullPath, transform, curDepth) {
        if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath))
          return;
        this.fsw._symlinkPaths.set(fullPath, true);
        this.fsw._incrReadyCount();
        try {
          const linkTarget = await realpath(linkPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(linkTarget)) {
            return this.fsw._emitReady();
          }
          this.fsw._incrReadyCount();
          this._addToFsEvents(linkTarget || linkPath, (path) => {
            let aliasedPath = linkPath;
            if (linkTarget && linkTarget !== DOT_SLASH) {
              aliasedPath = path.replace(linkTarget, linkPath);
            } else if (path !== DOT_SLASH) {
              aliasedPath = sysPath.join(linkPath, path);
            }
            return transform(aliasedPath);
          }, false, curDepth);
        } catch (error) {
          if (this.fsw._handleError(error)) {
            return this.fsw._emitReady();
          }
        }
      }
      /**
       *
       * @param {Path} newPath
       * @param {fs.Stats} stats
       */
      emitAdd(newPath, stats, processPath, opts, forceAdd) {
        const pp = processPath(newPath);
        const isDir = stats.isDirectory();
        const dirObj = this.fsw._getWatchedDir(sysPath.dirname(pp));
        const base = sysPath.basename(pp);
        if (isDir)
          this.fsw._getWatchedDir(pp);
        if (dirObj.has(base))
          return;
        dirObj.add(base);
        if (!opts.ignoreInitial || forceAdd === true) {
          this.fsw._emit(isDir ? EV_ADD_DIR : EV_ADD, pp, stats);
        }
      }
      initWatch(realPath, path, wh, processPath) {
        if (this.fsw.closed)
          return;
        const closer = this._watchWithFsEvents(
          wh.watchPath,
          sysPath.resolve(realPath || wh.watchPath),
          processPath,
          wh.globFilter
        );
        this.fsw._addPathCloser(path, closer);
      }
      /**
       * Handle added path with fsevents
       * @param {String} path file/dir path or glob pattern
       * @param {Function|Boolean=} transform converts working path to what the user expects
       * @param {Boolean=} forceAdd ensure add is emitted
       * @param {Number=} priorDepth Level of subdirectories already traversed.
       * @returns {Promise<void>}
       */
      async _addToFsEvents(path, transform, forceAdd, priorDepth) {
        if (this.fsw.closed) {
          return;
        }
        const opts = this.fsw.options;
        const processPath = typeof transform === FUNCTION_TYPE ? transform : IDENTITY_FN;
        const wh = this.fsw._getWatchHelpers(path);
        try {
          const stats = await statMethods[wh.statMethod](wh.watchPath);
          if (this.fsw.closed)
            return;
          if (this.fsw._isIgnored(wh.watchPath, stats)) {
            throw null;
          }
          if (stats.isDirectory()) {
            if (!wh.globFilter)
              this.emitAdd(processPath(path), stats, processPath, opts, forceAdd);
            if (priorDepth && priorDepth > opts.depth)
              return;
            this.fsw._readdirp(wh.watchPath, {
              fileFilter: (entry) => wh.filterPath(entry),
              directoryFilter: (entry) => wh.filterDir(entry),
              ...Depth(opts.depth - (priorDepth || 0))
            }).on(STR_DATA, (entry) => {
              if (this.fsw.closed) {
                return;
              }
              if (entry.stats.isDirectory() && !wh.filterPath(entry))
                return;
              const joinedPath = sysPath.join(wh.watchPath, entry.path);
              const { fullPath } = entry;
              if (wh.followSymlinks && entry.stats.isSymbolicLink()) {
                const curDepth = opts.depth === void 0 ? void 0 : calcDepth(joinedPath, sysPath.resolve(wh.watchPath)) + 1;
                this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
              } else {
                this.emitAdd(joinedPath, entry.stats, processPath, opts, forceAdd);
              }
            }).on(EV_ERROR, EMPTY_FN).on(STR_END, () => {
              this.fsw._emitReady();
            });
          } else {
            this.emitAdd(wh.watchPath, stats, processPath, opts, forceAdd);
            this.fsw._emitReady();
          }
        } catch (error) {
          if (!error || this.fsw._handleError(error)) {
            this.fsw._emitReady();
            this.fsw._emitReady();
          }
        }
        if (opts.persistent && forceAdd !== true) {
          if (typeof transform === FUNCTION_TYPE) {
            this.initWatch(void 0, path, wh, processPath);
          } else {
            let realPath;
            try {
              realPath = await realpath(wh.watchPath);
            } catch (e) {
            }
            this.initWatch(realPath, path, wh, processPath);
          }
        }
      }
    };
    module2.exports = FsEventsHandler;
    module2.exports.canUse = canUse;
  }
});

// node_modules/chokidar/index.js
var require_chokidar = __commonJS({
  "node_modules/chokidar/index.js"(exports) {
    "use strict";
    var { EventEmitter } = require("events");
    var fs2 = require("fs");
    var sysPath = require("path");
    var { promisify } = require("util");
    var readdirp = require_readdirp();
    var anymatch = require_anymatch().default;
    var globParent = require_glob_parent();
    var isGlob = require_is_glob();
    var braces = require_braces();
    var normalizePath = require_normalize_path();
    var NodeFsHandler = require_nodefs_handler();
    var FsEventsHandler = require_fsevents_handler();
    var {
      EV_ALL,
      EV_READY,
      EV_ADD,
      EV_CHANGE,
      EV_UNLINK,
      EV_ADD_DIR,
      EV_UNLINK_DIR,
      EV_RAW,
      EV_ERROR,
      STR_CLOSE,
      STR_END,
      BACK_SLASH_RE,
      DOUBLE_SLASH_RE,
      SLASH_OR_BACK_SLASH_RE,
      DOT_RE,
      REPLACER_RE,
      SLASH,
      SLASH_SLASH,
      BRACE_START,
      BANG,
      ONE_DOT,
      TWO_DOTS,
      GLOBSTAR,
      SLASH_GLOBSTAR,
      ANYMATCH_OPTS,
      STRING_TYPE,
      FUNCTION_TYPE,
      EMPTY_STR,
      EMPTY_FN,
      isWindows,
      isMacos,
      isIBMi
    } = require_constants3();
    var stat = promisify(fs2.stat);
    var readdir = promisify(fs2.readdir);
    var arrify = (value = []) => Array.isArray(value) ? value : [value];
    var flatten = (list, result = []) => {
      list.forEach((item) => {
        if (Array.isArray(item)) {
          flatten(item, result);
        } else {
          result.push(item);
        }
      });
      return result;
    };
    var unifyPaths = (paths_) => {
      const paths = flatten(arrify(paths_));
      if (!paths.every((p) => typeof p === STRING_TYPE)) {
        throw new TypeError(`Non-string provided as watch path: ${paths}`);
      }
      return paths.map(normalizePathToUnix);
    };
    var toUnix = (string) => {
      let str = string.replace(BACK_SLASH_RE, SLASH);
      let prepend = false;
      if (str.startsWith(SLASH_SLASH)) {
        prepend = true;
      }
      while (str.match(DOUBLE_SLASH_RE)) {
        str = str.replace(DOUBLE_SLASH_RE, SLASH);
      }
      if (prepend) {
        str = SLASH + str;
      }
      return str;
    };
    var normalizePathToUnix = (path) => toUnix(sysPath.normalize(toUnix(path)));
    var normalizeIgnored = (cwd = EMPTY_STR) => (path) => {
      if (typeof path !== STRING_TYPE)
        return path;
      return normalizePathToUnix(sysPath.isAbsolute(path) ? path : sysPath.join(cwd, path));
    };
    var getAbsolutePath = (path, cwd) => {
      if (sysPath.isAbsolute(path)) {
        return path;
      }
      if (path.startsWith(BANG)) {
        return BANG + sysPath.join(cwd, path.slice(1));
      }
      return sysPath.join(cwd, path);
    };
    var undef = (opts, key) => opts[key] === void 0;
    var DirEntry = class {
      /**
       * @param {Path} dir
       * @param {Function} removeWatcher
       */
      constructor(dir, removeWatcher) {
        this.path = dir;
        this._removeWatcher = removeWatcher;
        this.items = /* @__PURE__ */ new Set();
      }
      add(item) {
        const { items } = this;
        if (!items)
          return;
        if (item !== ONE_DOT && item !== TWO_DOTS)
          items.add(item);
      }
      async remove(item) {
        const { items } = this;
        if (!items)
          return;
        items.delete(item);
        if (items.size > 0)
          return;
        const dir = this.path;
        try {
          await readdir(dir);
        } catch (err) {
          if (this._removeWatcher) {
            this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
          }
        }
      }
      has(item) {
        const { items } = this;
        if (!items)
          return;
        return items.has(item);
      }
      /**
       * @returns {Array<String>}
       */
      getChildren() {
        const { items } = this;
        if (!items)
          return;
        return [...items.values()];
      }
      dispose() {
        this.items.clear();
        delete this.path;
        delete this._removeWatcher;
        delete this.items;
        Object.freeze(this);
      }
    };
    var STAT_METHOD_F = "stat";
    var STAT_METHOD_L = "lstat";
    var WatchHelper = class {
      constructor(path, watchPath, follow, fsw) {
        this.fsw = fsw;
        this.path = path = path.replace(REPLACER_RE, EMPTY_STR);
        this.watchPath = watchPath;
        this.fullWatchPath = sysPath.resolve(watchPath);
        this.hasGlob = watchPath !== path;
        if (path === EMPTY_STR)
          this.hasGlob = false;
        this.globSymlink = this.hasGlob && follow ? void 0 : false;
        this.globFilter = this.hasGlob ? anymatch(path, void 0, ANYMATCH_OPTS) : false;
        this.dirParts = this.getDirParts(path);
        this.dirParts.forEach((parts) => {
          if (parts.length > 1)
            parts.pop();
        });
        this.followSymlinks = follow;
        this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
      }
      checkGlobSymlink(entry) {
        if (this.globSymlink === void 0) {
          this.globSymlink = entry.fullParentDir === this.fullWatchPath ? false : { realPath: entry.fullParentDir, linkPath: this.fullWatchPath };
        }
        if (this.globSymlink) {
          return entry.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath);
        }
        return entry.fullPath;
      }
      entryPath(entry) {
        return sysPath.join(
          this.watchPath,
          sysPath.relative(this.watchPath, this.checkGlobSymlink(entry))
        );
      }
      filterPath(entry) {
        const { stats } = entry;
        if (stats && stats.isSymbolicLink())
          return this.filterDir(entry);
        const resolvedPath = this.entryPath(entry);
        const matchesGlob = this.hasGlob && typeof this.globFilter === FUNCTION_TYPE ? this.globFilter(resolvedPath) : true;
        return matchesGlob && this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
      }
      getDirParts(path) {
        if (!this.hasGlob)
          return [];
        const parts = [];
        const expandedPath = path.includes(BRACE_START) ? braces.expand(path) : [path];
        expandedPath.forEach((path2) => {
          parts.push(sysPath.relative(this.watchPath, path2).split(SLASH_OR_BACK_SLASH_RE));
        });
        return parts;
      }
      filterDir(entry) {
        if (this.hasGlob) {
          const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
          let globstar = false;
          this.unmatchedGlob = !this.dirParts.some((parts) => {
            return parts.every((part, i) => {
              if (part === GLOBSTAR)
                globstar = true;
              return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i], ANYMATCH_OPTS);
            });
          });
        }
        return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
      }
    };
    var FSWatcher = class extends EventEmitter {
      // Not indenting methods for history sake; for now.
      constructor(_opts) {
        super();
        const opts = {};
        if (_opts)
          Object.assign(opts, _opts);
        this._watched = /* @__PURE__ */ new Map();
        this._closers = /* @__PURE__ */ new Map();
        this._ignoredPaths = /* @__PURE__ */ new Set();
        this._throttled = /* @__PURE__ */ new Map();
        this._symlinkPaths = /* @__PURE__ */ new Map();
        this._streams = /* @__PURE__ */ new Set();
        this.closed = false;
        if (undef(opts, "persistent"))
          opts.persistent = true;
        if (undef(opts, "ignoreInitial"))
          opts.ignoreInitial = false;
        if (undef(opts, "ignorePermissionErrors"))
          opts.ignorePermissionErrors = false;
        if (undef(opts, "interval"))
          opts.interval = 100;
        if (undef(opts, "binaryInterval"))
          opts.binaryInterval = 300;
        if (undef(opts, "disableGlobbing"))
          opts.disableGlobbing = false;
        opts.enableBinaryInterval = opts.binaryInterval !== opts.interval;
        if (undef(opts, "useFsEvents"))
          opts.useFsEvents = !opts.usePolling;
        const canUseFsEvents = FsEventsHandler.canUse();
        if (!canUseFsEvents)
          opts.useFsEvents = false;
        if (undef(opts, "usePolling") && !opts.useFsEvents) {
          opts.usePolling = isMacos;
        }
        if (isIBMi) {
          opts.usePolling = true;
        }
        const envPoll = process.env.CHOKIDAR_USEPOLLING;
        if (envPoll !== void 0) {
          const envLower = envPoll.toLowerCase();
          if (envLower === "false" || envLower === "0") {
            opts.usePolling = false;
          } else if (envLower === "true" || envLower === "1") {
            opts.usePolling = true;
          } else {
            opts.usePolling = !!envLower;
          }
        }
        const envInterval = process.env.CHOKIDAR_INTERVAL;
        if (envInterval) {
          opts.interval = Number.parseInt(envInterval, 10);
        }
        if (undef(opts, "atomic"))
          opts.atomic = !opts.usePolling && !opts.useFsEvents;
        if (opts.atomic)
          this._pendingUnlinks = /* @__PURE__ */ new Map();
        if (undef(opts, "followSymlinks"))
          opts.followSymlinks = true;
        if (undef(opts, "awaitWriteFinish"))
          opts.awaitWriteFinish = false;
        if (opts.awaitWriteFinish === true)
          opts.awaitWriteFinish = {};
        const awf = opts.awaitWriteFinish;
        if (awf) {
          if (!awf.stabilityThreshold)
            awf.stabilityThreshold = 2e3;
          if (!awf.pollInterval)
            awf.pollInterval = 100;
          this._pendingWrites = /* @__PURE__ */ new Map();
        }
        if (opts.ignored)
          opts.ignored = arrify(opts.ignored);
        let readyCalls = 0;
        this._emitReady = () => {
          readyCalls++;
          if (readyCalls >= this._readyCount) {
            this._emitReady = EMPTY_FN;
            this._readyEmitted = true;
            process.nextTick(() => this.emit(EV_READY));
          }
        };
        this._emitRaw = (...args) => this.emit(EV_RAW, ...args);
        this._readyEmitted = false;
        this.options = opts;
        if (opts.useFsEvents) {
          this._fsEventsHandler = new FsEventsHandler(this);
        } else {
          this._nodeFsHandler = new NodeFsHandler(this);
        }
        Object.freeze(opts);
      }
      // Public methods
      /**
       * Adds paths to be watched on an existing FSWatcher instance
       * @param {Path|Array<Path>} paths_
       * @param {String=} _origAdd private; for handling non-existent paths to be watched
       * @param {Boolean=} _internal private; indicates a non-user add
       * @returns {FSWatcher} for chaining
       */
      add(paths_, _origAdd, _internal) {
        const { cwd, disableGlobbing } = this.options;
        this.closed = false;
        let paths = unifyPaths(paths_);
        if (cwd) {
          paths = paths.map((path) => {
            const absPath = getAbsolutePath(path, cwd);
            if (disableGlobbing || !isGlob(path)) {
              return absPath;
            }
            return normalizePath(absPath);
          });
        }
        paths = paths.filter((path) => {
          if (path.startsWith(BANG)) {
            this._ignoredPaths.add(path.slice(1));
            return false;
          }
          this._ignoredPaths.delete(path);
          this._ignoredPaths.delete(path + SLASH_GLOBSTAR);
          this._userIgnored = void 0;
          return true;
        });
        if (this.options.useFsEvents && this._fsEventsHandler) {
          if (!this._readyCount)
            this._readyCount = paths.length;
          if (this.options.persistent)
            this._readyCount *= 2;
          paths.forEach((path) => this._fsEventsHandler._addToFsEvents(path));
        } else {
          if (!this._readyCount)
            this._readyCount = 0;
          this._readyCount += paths.length;
          Promise.all(
            paths.map(async (path) => {
              const res = await this._nodeFsHandler._addToNodeFs(path, !_internal, 0, 0, _origAdd);
              if (res)
                this._emitReady();
              return res;
            })
          ).then((results) => {
            if (this.closed)
              return;
            results.filter((item) => item).forEach((item) => {
              this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
            });
          });
        }
        return this;
      }
      /**
       * Close watchers or start ignoring events from specified paths.
       * @param {Path|Array<Path>} paths_ - string or array of strings, file/directory paths and/or globs
       * @returns {FSWatcher} for chaining
      */
      unwatch(paths_) {
        if (this.closed)
          return this;
        const paths = unifyPaths(paths_);
        const { cwd } = this.options;
        paths.forEach((path) => {
          if (!sysPath.isAbsolute(path) && !this._closers.has(path)) {
            if (cwd)
              path = sysPath.join(cwd, path);
            path = sysPath.resolve(path);
          }
          this._closePath(path);
          this._ignoredPaths.add(path);
          if (this._watched.has(path)) {
            this._ignoredPaths.add(path + SLASH_GLOBSTAR);
          }
          this._userIgnored = void 0;
        });
        return this;
      }
      /**
       * Close watchers and remove all listeners from watched paths.
       * @returns {Promise<void>}.
      */
      close() {
        if (this.closed)
          return this._closePromise;
        this.closed = true;
        this.removeAllListeners();
        const closers = [];
        this._closers.forEach((closerList) => closerList.forEach((closer) => {
          const promise = closer();
          if (promise instanceof Promise)
            closers.push(promise);
        }));
        this._streams.forEach((stream) => stream.destroy());
        this._userIgnored = void 0;
        this._readyCount = 0;
        this._readyEmitted = false;
        this._watched.forEach((dirent) => dirent.dispose());
        ["closers", "watched", "streams", "symlinkPaths", "throttled"].forEach((key) => {
          this[`_${key}`].clear();
        });
        this._closePromise = closers.length ? Promise.all(closers).then(() => void 0) : Promise.resolve();
        return this._closePromise;
      }
      /**
       * Expose list of watched paths
       * @returns {Object} for chaining
      */
      getWatched() {
        const watchList = {};
        this._watched.forEach((entry, dir) => {
          const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
          watchList[key || ONE_DOT] = entry.getChildren().sort();
        });
        return watchList;
      }
      emitWithAll(event, args) {
        this.emit(...args);
        if (event !== EV_ERROR)
          this.emit(EV_ALL, ...args);
      }
      // Common helpers
      // --------------
      /**
       * Normalize and emit events.
       * Calling _emit DOES NOT MEAN emit() would be called!
       * @param {EventName} event Type of event
       * @param {Path} path File or directory path
       * @param {*=} val1 arguments to be passed with event
       * @param {*=} val2
       * @param {*=} val3
       * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
       */
      async _emit(event, path, val1, val2, val3) {
        if (this.closed)
          return;
        const opts = this.options;
        if (isWindows)
          path = sysPath.normalize(path);
        if (opts.cwd)
          path = sysPath.relative(opts.cwd, path);
        const args = [event, path];
        if (val3 !== void 0)
          args.push(val1, val2, val3);
        else if (val2 !== void 0)
          args.push(val1, val2);
        else if (val1 !== void 0)
          args.push(val1);
        const awf = opts.awaitWriteFinish;
        let pw;
        if (awf && (pw = this._pendingWrites.get(path))) {
          pw.lastChange = /* @__PURE__ */ new Date();
          return this;
        }
        if (opts.atomic) {
          if (event === EV_UNLINK) {
            this._pendingUnlinks.set(path, args);
            setTimeout(() => {
              this._pendingUnlinks.forEach((entry, path2) => {
                this.emit(...entry);
                this.emit(EV_ALL, ...entry);
                this._pendingUnlinks.delete(path2);
              });
            }, typeof opts.atomic === "number" ? opts.atomic : 100);
            return this;
          }
          if (event === EV_ADD && this._pendingUnlinks.has(path)) {
            event = args[0] = EV_CHANGE;
            this._pendingUnlinks.delete(path);
          }
        }
        if (awf && (event === EV_ADD || event === EV_CHANGE) && this._readyEmitted) {
          const awfEmit = (err, stats) => {
            if (err) {
              event = args[0] = EV_ERROR;
              args[1] = err;
              this.emitWithAll(event, args);
            } else if (stats) {
              if (args.length > 2) {
                args[2] = stats;
              } else {
                args.push(stats);
              }
              this.emitWithAll(event, args);
            }
          };
          this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit);
          return this;
        }
        if (event === EV_CHANGE) {
          const isThrottled = !this._throttle(EV_CHANGE, path, 50);
          if (isThrottled)
            return this;
        }
        if (opts.alwaysStat && val1 === void 0 && (event === EV_ADD || event === EV_ADD_DIR || event === EV_CHANGE)) {
          const fullPath = opts.cwd ? sysPath.join(opts.cwd, path) : path;
          let stats;
          try {
            stats = await stat(fullPath);
          } catch (err) {
          }
          if (!stats || this.closed)
            return;
          args.push(stats);
        }
        this.emitWithAll(event, args);
        return this;
      }
      /**
       * Common handler for errors
       * @param {Error} error
       * @returns {Error|Boolean} The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
       */
      _handleError(error) {
        const code = error && error.code;
        if (error && code !== "ENOENT" && code !== "ENOTDIR" && (!this.options.ignorePermissionErrors || code !== "EPERM" && code !== "EACCES")) {
          this.emit(EV_ERROR, error);
        }
        return error || this.closed;
      }
      /**
       * Helper utility for throttling
       * @param {ThrottleType} actionType type being throttled
       * @param {Path} path being acted upon
       * @param {Number} timeout duration of time to suppress duplicate actions
       * @returns {Object|false} tracking object or false if action should be suppressed
       */
      _throttle(actionType, path, timeout) {
        if (!this._throttled.has(actionType)) {
          this._throttled.set(actionType, /* @__PURE__ */ new Map());
        }
        const action = this._throttled.get(actionType);
        const actionPath = action.get(path);
        if (actionPath) {
          actionPath.count++;
          return false;
        }
        let timeoutObject;
        const clear = () => {
          const item = action.get(path);
          const count = item ? item.count : 0;
          action.delete(path);
          clearTimeout(timeoutObject);
          if (item)
            clearTimeout(item.timeoutObject);
          return count;
        };
        timeoutObject = setTimeout(clear, timeout);
        const thr = { timeoutObject, clear, count: 0 };
        action.set(path, thr);
        return thr;
      }
      _incrReadyCount() {
        return this._readyCount++;
      }
      /**
       * Awaits write operation to finish.
       * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
       * @param {Path} path being acted upon
       * @param {Number} threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
       * @param {EventName} event
       * @param {Function} awfEmit Callback to be called when ready for event to be emitted.
       */
      _awaitWriteFinish(path, threshold, event, awfEmit) {
        let timeoutHandler;
        let fullPath = path;
        if (this.options.cwd && !sysPath.isAbsolute(path)) {
          fullPath = sysPath.join(this.options.cwd, path);
        }
        const now = /* @__PURE__ */ new Date();
        const awaitWriteFinish = (prevStat) => {
          fs2.stat(fullPath, (err, curStat) => {
            if (err || !this._pendingWrites.has(path)) {
              if (err && err.code !== "ENOENT")
                awfEmit(err);
              return;
            }
            const now2 = Number(/* @__PURE__ */ new Date());
            if (prevStat && curStat.size !== prevStat.size) {
              this._pendingWrites.get(path).lastChange = now2;
            }
            const pw = this._pendingWrites.get(path);
            const df = now2 - pw.lastChange;
            if (df >= threshold) {
              this._pendingWrites.delete(path);
              awfEmit(void 0, curStat);
            } else {
              timeoutHandler = setTimeout(
                awaitWriteFinish,
                this.options.awaitWriteFinish.pollInterval,
                curStat
              );
            }
          });
        };
        if (!this._pendingWrites.has(path)) {
          this._pendingWrites.set(path, {
            lastChange: now,
            cancelWait: () => {
              this._pendingWrites.delete(path);
              clearTimeout(timeoutHandler);
              return event;
            }
          });
          timeoutHandler = setTimeout(
            awaitWriteFinish,
            this.options.awaitWriteFinish.pollInterval
          );
        }
      }
      _getGlobIgnored() {
        return [...this._ignoredPaths.values()];
      }
      /**
       * Determines whether user has asked to ignore this path.
       * @param {Path} path filepath or dir
       * @param {fs.Stats=} stats result of fs.stat
       * @returns {Boolean}
       */
      _isIgnored(path, stats) {
        if (this.options.atomic && DOT_RE.test(path))
          return true;
        if (!this._userIgnored) {
          const { cwd } = this.options;
          const ign = this.options.ignored;
          const ignored = ign && ign.map(normalizeIgnored(cwd));
          const paths = arrify(ignored).filter((path2) => typeof path2 === STRING_TYPE && !isGlob(path2)).map((path2) => path2 + SLASH_GLOBSTAR);
          const list = this._getGlobIgnored().map(normalizeIgnored(cwd)).concat(ignored, paths);
          this._userIgnored = anymatch(list, void 0, ANYMATCH_OPTS);
        }
        return this._userIgnored([path, stats]);
      }
      _isntIgnored(path, stat2) {
        return !this._isIgnored(path, stat2);
      }
      /**
       * Provides a set of common helpers and properties relating to symlink and glob handling.
       * @param {Path} path file, directory, or glob pattern being watched
       * @param {Number=} depth at any depth > 0, this isn't a glob
       * @returns {WatchHelper} object containing helpers for this path
       */
      _getWatchHelpers(path, depth) {
        const watchPath = depth || this.options.disableGlobbing || !isGlob(path) ? path : globParent(path);
        const follow = this.options.followSymlinks;
        return new WatchHelper(path, watchPath, follow, this);
      }
      // Directory helpers
      // -----------------
      /**
       * Provides directory tracking objects
       * @param {String} directory path of the directory
       * @returns {DirEntry} the directory's tracking object
       */
      _getWatchedDir(directory) {
        if (!this._boundRemove)
          this._boundRemove = this._remove.bind(this);
        const dir = sysPath.resolve(directory);
        if (!this._watched.has(dir))
          this._watched.set(dir, new DirEntry(dir, this._boundRemove));
        return this._watched.get(dir);
      }
      // File helpers
      // ------------
      /**
       * Check for read permissions.
       * Based on this answer on SO: https://stackoverflow.com/a/11781404/1358405
       * @param {fs.Stats} stats - object, result of fs_stat
       * @returns {Boolean} indicates whether the file can be read
      */
      _hasReadPermissions(stats) {
        if (this.options.ignorePermissionErrors)
          return true;
        const md = stats && Number.parseInt(stats.mode, 10);
        const st = md & 511;
        const it = Number.parseInt(st.toString(8)[0], 10);
        return Boolean(4 & it);
      }
      /**
       * Handles emitting unlink events for
       * files and directories, and via recursion, for
       * files and directories within directories that are unlinked
       * @param {String} directory within which the following item is located
       * @param {String} item      base path of item/directory
       * @returns {void}
      */
      _remove(directory, item, isDirectory) {
        const path = sysPath.join(directory, item);
        const fullPath = sysPath.resolve(path);
        isDirectory = isDirectory != null ? isDirectory : this._watched.has(path) || this._watched.has(fullPath);
        if (!this._throttle("remove", path, 100))
          return;
        if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) {
          this.add(directory, item, true);
        }
        const wp = this._getWatchedDir(path);
        const nestedDirectoryChildren = wp.getChildren();
        nestedDirectoryChildren.forEach((nested) => this._remove(path, nested));
        const parent = this._getWatchedDir(directory);
        const wasTracked = parent.has(item);
        parent.remove(item);
        if (this._symlinkPaths.has(fullPath)) {
          this._symlinkPaths.delete(fullPath);
        }
        let relPath = path;
        if (this.options.cwd)
          relPath = sysPath.relative(this.options.cwd, path);
        if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
          const event = this._pendingWrites.get(relPath).cancelWait();
          if (event === EV_ADD)
            return;
        }
        this._watched.delete(path);
        this._watched.delete(fullPath);
        const eventName = isDirectory ? EV_UNLINK_DIR : EV_UNLINK;
        if (wasTracked && !this._isIgnored(path))
          this._emit(eventName, path);
        if (!this.options.useFsEvents) {
          this._closePath(path);
        }
      }
      /**
       * Closes all watchers for a path
       * @param {Path} path
       */
      _closePath(path) {
        this._closeFile(path);
        const dir = sysPath.dirname(path);
        this._getWatchedDir(dir).remove(sysPath.basename(path));
      }
      /**
       * Closes only file-specific watchers
       * @param {Path} path
       */
      _closeFile(path) {
        const closers = this._closers.get(path);
        if (!closers)
          return;
        closers.forEach((closer) => closer());
        this._closers.delete(path);
      }
      /**
       *
       * @param {Path} path
       * @param {Function} closer
       */
      _addPathCloser(path, closer) {
        if (!closer)
          return;
        let list = this._closers.get(path);
        if (!list) {
          list = [];
          this._closers.set(path, list);
        }
        list.push(closer);
      }
      _readdirp(root, opts) {
        if (this.closed)
          return;
        const options = { type: EV_ALL, alwaysStat: true, lstat: true, ...opts };
        let stream = readdirp(root, options);
        this._streams.add(stream);
        stream.once(STR_CLOSE, () => {
          stream = void 0;
        });
        stream.once(STR_END, () => {
          if (stream) {
            this._streams.delete(stream);
            stream = void 0;
          }
        });
        return stream;
      }
    };
    exports.FSWatcher = FSWatcher;
    var watch2 = (paths, options) => {
      const watcher = new FSWatcher(options);
      watcher.add(paths);
      return watcher;
    };
    exports.watch = watch2;
  }
});

// node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "node_modules/ansi-regex/index.js"(exports, module2) {
    "use strict";
    module2.exports = (options) => {
      options = Object.assign({
        onlyFirst: false
      }, options);
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, options.onlyFirst ? void 0 : "g");
    };
  }
});

// node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS({
  "node_modules/strip-ansi/index.js"(exports, module2) {
    "use strict";
    var ansiRegex = require_ansi_regex();
    var stripAnsi = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
    module2.exports = stripAnsi;
    module2.exports.default = stripAnsi;
  }
});

// node_modules/prompt-sync/index.js
var require_prompt_sync = __commonJS({
  "node_modules/prompt-sync/index.js"(exports, module2) {
    "use strict";
    var fs2 = require("fs");
    var stripAnsi = require_strip_ansi();
    var term = 13;
    function create(config) {
      config = config || {};
      var sigint = config.sigint;
      var eot = config.eot;
      var autocomplete = config.autocomplete = config.autocomplete || function() {
        return [];
      };
      var history = config.history;
      prompt2.history = history || { save: function() {
      } };
      prompt2.hide = function(ask) {
        return prompt2(ask, { echo: "" });
      };
      return prompt2;
      function prompt2(ask, value, opts) {
        var insert = 0, savedinsert = 0, res, i, savedstr;
        opts = opts || {};
        if (Object(ask) === ask) {
          opts = ask;
          ask = opts.ask;
        } else if (Object(value) === value) {
          opts = value;
          value = opts.value;
        }
        ask = ask || "";
        var echo = opts.echo;
        var masked = "echo" in opts;
        autocomplete = opts.autocomplete || autocomplete;
        var fd = process.platform === "win32" ? process.stdin.fd : fs2.openSync("/dev/tty", "rs");
        var wasRaw = process.stdin.isRaw;
        if (!wasRaw) {
          process.stdin.setRawMode && process.stdin.setRawMode(true);
        }
        var buf = Buffer.alloc(3);
        var str = "", character, read;
        savedstr = "";
        if (ask) {
          process.stdout.write(ask);
        }
        var cycle = 0;
        var prevComplete;
        while (true) {
          read = fs2.readSync(fd, buf, 0, 3);
          if (read > 1) {
            switch (buf.toString()) {
              case "\x1B[A":
                if (masked)
                  break;
                if (!history)
                  break;
                if (history.atStart())
                  break;
                if (history.atEnd()) {
                  savedstr = str;
                  savedinsert = insert;
                }
                str = history.prev();
                insert = str.length;
                process.stdout.write("\x1B[2K\x1B[0G" + ask + str);
                break;
              case "\x1B[B":
                if (masked)
                  break;
                if (!history)
                  break;
                if (history.pastEnd())
                  break;
                if (history.atPenultimate()) {
                  str = savedstr;
                  insert = savedinsert;
                  history.next();
                } else {
                  str = history.next();
                  insert = str.length;
                }
                process.stdout.write("\x1B[2K\x1B[0G" + ask + str + "\x1B[" + (insert + ask.length + 1) + "G");
                break;
              case "\x1B[D":
                if (masked)
                  break;
                var before = insert;
                insert = --insert < 0 ? 0 : insert;
                if (before - insert)
                  process.stdout.write("\x1B[1D");
                break;
              case "\x1B[C":
                if (masked)
                  break;
                insert = ++insert > str.length ? str.length : insert;
                process.stdout.write("\x1B[" + (insert + ask.length + 1) + "G");
                break;
              default:
                if (buf.toString()) {
                  str = str + buf.toString();
                  str = str.replace(/\0/g, "");
                  insert = str.length;
                  promptPrint(masked, ask, echo, str, insert);
                  process.stdout.write("\x1B[" + (insert + ask.length + 1) + "G");
                  buf = Buffer.alloc(3);
                }
            }
            continue;
          }
          character = buf[read - 1];
          if (character == 3) {
            process.stdout.write("^C\n");
            fs2.closeSync(fd);
            if (sigint)
              process.exit(130);
            process.stdin.setRawMode && process.stdin.setRawMode(wasRaw);
            return null;
          }
          if (character == 4) {
            if (str.length == 0 && eot) {
              process.stdout.write("exit\n");
              process.exit(0);
            }
          }
          if (character == term) {
            fs2.closeSync(fd);
            if (!history)
              break;
            if (!masked && str.length)
              history.push(str);
            history.reset();
            break;
          }
          if (character == 9) {
            res = autocomplete(str);
            if (str == res[0]) {
              res = autocomplete("");
            } else {
              prevComplete = res.length;
            }
            if (res.length == 0) {
              process.stdout.write("	");
              continue;
            }
            var item = res[cycle++] || res[cycle = 0, cycle++];
            if (item) {
              process.stdout.write("\r\x1B[K" + ask + item);
              str = item;
              insert = item.length;
            }
          }
          if (character == 127 || process.platform == "win32" && character == 8) {
            if (!insert)
              continue;
            str = str.slice(0, insert - 1) + str.slice(insert);
            insert--;
            process.stdout.write("\x1B[2D");
          } else {
            if (character < 32 || character > 126)
              continue;
            str = str.slice(0, insert) + String.fromCharCode(character) + str.slice(insert);
            insert++;
          }
          ;
          promptPrint(masked, ask, echo, str, insert);
        }
        process.stdout.write("\n");
        process.stdin.setRawMode && process.stdin.setRawMode(wasRaw);
        return str || value || "";
      }
      ;
      function promptPrint(masked, ask, echo, str, insert) {
        if (masked) {
          process.stdout.write("\x1B[2K\x1B[0G" + ask + Array(str.length + 1).join(echo));
        } else {
          process.stdout.write("\x1B[s");
          if (insert == str.length) {
            process.stdout.write("\x1B[2K\x1B[0G" + ask + str);
          } else {
            if (ask) {
              process.stdout.write("\x1B[2K\x1B[0G" + ask + str);
            } else {
              process.stdout.write("\x1B[2K\x1B[0G" + str + "\x1B[" + (str.length - insert) + "D");
            }
          }
          var askLength = stripAnsi(ask).length;
          process.stdout.write(`\x1B[${askLength + 1 + (echo == "" ? 0 : insert)}G`);
        }
      }
    }
    module2.exports = create;
  }
});

// node_modules/webidl-conversions/lib/index.js
var require_lib = __commonJS({
  "node_modules/webidl-conversions/lib/index.js"(exports, module2) {
    "use strict";
    var conversions = {};
    module2.exports = conversions;
    function sign(x) {
      return x < 0 ? -1 : 1;
    }
    function evenRound(x) {
      if (x % 1 === 0.5 && (x & 1) === 0) {
        return Math.floor(x);
      } else {
        return Math.round(x);
      }
    }
    function createNumberConversion(bitLength, typeOpts) {
      if (!typeOpts.unsigned) {
        --bitLength;
      }
      const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
      const upperBound = Math.pow(2, bitLength) - 1;
      const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
      const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
      return function(V, opts) {
        if (!opts)
          opts = {};
        let x = +V;
        if (opts.enforceRange) {
          if (!Number.isFinite(x)) {
            throw new TypeError("Argument is not a finite number");
          }
          x = sign(x) * Math.floor(Math.abs(x));
          if (x < lowerBound || x > upperBound) {
            throw new TypeError("Argument is not in byte range");
          }
          return x;
        }
        if (!isNaN(x) && opts.clamp) {
          x = evenRound(x);
          if (x < lowerBound)
            x = lowerBound;
          if (x > upperBound)
            x = upperBound;
          return x;
        }
        if (!Number.isFinite(x) || x === 0) {
          return 0;
        }
        x = sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) {
          return x - moduloVal;
        } else if (typeOpts.unsigned) {
          if (x < 0) {
            x += moduloVal;
          } else if (x === -0) {
            return 0;
          }
        }
        return x;
      };
    }
    conversions["void"] = function() {
      return void 0;
    };
    conversions["boolean"] = function(val) {
      return !!val;
    };
    conversions["byte"] = createNumberConversion(8, { unsigned: false });
    conversions["octet"] = createNumberConversion(8, { unsigned: true });
    conversions["short"] = createNumberConversion(16, { unsigned: false });
    conversions["unsigned short"] = createNumberConversion(16, { unsigned: true });
    conversions["long"] = createNumberConversion(32, { unsigned: false });
    conversions["unsigned long"] = createNumberConversion(32, { unsigned: true });
    conversions["long long"] = createNumberConversion(32, { unsigned: false, moduloBitLength: 64 });
    conversions["unsigned long long"] = createNumberConversion(32, { unsigned: true, moduloBitLength: 64 });
    conversions["double"] = function(V) {
      const x = +V;
      if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite floating-point value");
      }
      return x;
    };
    conversions["unrestricted double"] = function(V) {
      const x = +V;
      if (isNaN(x)) {
        throw new TypeError("Argument is NaN");
      }
      return x;
    };
    conversions["float"] = conversions["double"];
    conversions["unrestricted float"] = conversions["unrestricted double"];
    conversions["DOMString"] = function(V, opts) {
      if (!opts)
        opts = {};
      if (opts.treatNullAsEmptyString && V === null) {
        return "";
      }
      return String(V);
    };
    conversions["ByteString"] = function(V, opts) {
      const x = String(V);
      let c = void 0;
      for (let i = 0; (c = x.codePointAt(i)) !== void 0; ++i) {
        if (c > 255) {
          throw new TypeError("Argument is not a valid bytestring");
        }
      }
      return x;
    };
    conversions["USVString"] = function(V) {
      const S = String(V);
      const n = S.length;
      const U = [];
      for (let i = 0; i < n; ++i) {
        const c = S.charCodeAt(i);
        if (c < 55296 || c > 57343) {
          U.push(String.fromCodePoint(c));
        } else if (56320 <= c && c <= 57343) {
          U.push(String.fromCodePoint(65533));
        } else {
          if (i === n - 1) {
            U.push(String.fromCodePoint(65533));
          } else {
            const d = S.charCodeAt(i + 1);
            if (56320 <= d && d <= 57343) {
              const a = c & 1023;
              const b = d & 1023;
              U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
              ++i;
            } else {
              U.push(String.fromCodePoint(65533));
            }
          }
        }
      }
      return U.join("");
    };
    conversions["Date"] = function(V, opts) {
      if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
      }
      if (isNaN(V)) {
        return void 0;
      }
      return V;
    };
    conversions["RegExp"] = function(V, opts) {
      if (!(V instanceof RegExp)) {
        V = new RegExp(V);
      }
      return V;
    };
  }
});

// node_modules/whatwg-url/lib/utils.js
var require_utils3 = __commonJS({
  "node_modules/whatwg-url/lib/utils.js"(exports, module2) {
    "use strict";
    module2.exports.mixin = function mixin(target, source) {
      const keys = Object.getOwnPropertyNames(source);
      for (let i = 0; i < keys.length; ++i) {
        Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
      }
    };
    module2.exports.wrapperSymbol = Symbol("wrapper");
    module2.exports.implSymbol = Symbol("impl");
    module2.exports.wrapperForImpl = function(impl) {
      return impl[module2.exports.wrapperSymbol];
    };
    module2.exports.implForWrapper = function(wrapper) {
      return wrapper[module2.exports.implSymbol];
    };
  }
});

// node_modules/tr46/lib/mappingTable.json
var require_mappingTable = __commonJS({
  "node_modules/tr46/lib/mappingTable.json"(exports, module2) {
    module2.exports = [[[0, 44], "disallowed_STD3_valid"], [[45, 46], "valid"], [[47, 47], "disallowed_STD3_valid"], [[48, 57], "valid"], [[58, 64], "disallowed_STD3_valid"], [[65, 65], "mapped", [97]], [[66, 66], "mapped", [98]], [[67, 67], "mapped", [99]], [[68, 68], "mapped", [100]], [[69, 69], "mapped", [101]], [[70, 70], "mapped", [102]], [[71, 71], "mapped", [103]], [[72, 72], "mapped", [104]], [[73, 73], "mapped", [105]], [[74, 74], "mapped", [106]], [[75, 75], "mapped", [107]], [[76, 76], "mapped", [108]], [[77, 77], "mapped", [109]], [[78, 78], "mapped", [110]], [[79, 79], "mapped", [111]], [[80, 80], "mapped", [112]], [[81, 81], "mapped", [113]], [[82, 82], "mapped", [114]], [[83, 83], "mapped", [115]], [[84, 84], "mapped", [116]], [[85, 85], "mapped", [117]], [[86, 86], "mapped", [118]], [[87, 87], "mapped", [119]], [[88, 88], "mapped", [120]], [[89, 89], "mapped", [121]], [[90, 90], "mapped", [122]], [[91, 96], "disallowed_STD3_valid"], [[97, 122], "valid"], [[123, 127], "disallowed_STD3_valid"], [[128, 159], "disallowed"], [[160, 160], "disallowed_STD3_mapped", [32]], [[161, 167], "valid", [], "NV8"], [[168, 168], "disallowed_STD3_mapped", [32, 776]], [[169, 169], "valid", [], "NV8"], [[170, 170], "mapped", [97]], [[171, 172], "valid", [], "NV8"], [[173, 173], "ignored"], [[174, 174], "valid", [], "NV8"], [[175, 175], "disallowed_STD3_mapped", [32, 772]], [[176, 177], "valid", [], "NV8"], [[178, 178], "mapped", [50]], [[179, 179], "mapped", [51]], [[180, 180], "disallowed_STD3_mapped", [32, 769]], [[181, 181], "mapped", [956]], [[182, 182], "valid", [], "NV8"], [[183, 183], "valid"], [[184, 184], "disallowed_STD3_mapped", [32, 807]], [[185, 185], "mapped", [49]], [[186, 186], "mapped", [111]], [[187, 187], "valid", [], "NV8"], [[188, 188], "mapped", [49, 8260, 52]], [[189, 189], "mapped", [49, 8260, 50]], [[190, 190], "mapped", [51, 8260, 52]], [[191, 191], "valid", [], "NV8"], [[192, 192], "mapped", [224]], [[193, 193], "mapped", [225]], [[194, 194], "mapped", [226]], [[195, 195], "mapped", [227]], [[196, 196], "mapped", [228]], [[197, 197], "mapped", [229]], [[198, 198], "mapped", [230]], [[199, 199], "mapped", [231]], [[200, 200], "mapped", [232]], [[201, 201], "mapped", [233]], [[202, 202], "mapped", [234]], [[203, 203], "mapped", [235]], [[204, 204], "mapped", [236]], [[205, 205], "mapped", [237]], [[206, 206], "mapped", [238]], [[207, 207], "mapped", [239]], [[208, 208], "mapped", [240]], [[209, 209], "mapped", [241]], [[210, 210], "mapped", [242]], [[211, 211], "mapped", [243]], [[212, 212], "mapped", [244]], [[213, 213], "mapped", [245]], [[214, 214], "mapped", [246]], [[215, 215], "valid", [], "NV8"], [[216, 216], "mapped", [248]], [[217, 217], "mapped", [249]], [[218, 218], "mapped", [250]], [[219, 219], "mapped", [251]], [[220, 220], "mapped", [252]], [[221, 221], "mapped", [253]], [[222, 222], "mapped", [254]], [[223, 223], "deviation", [115, 115]], [[224, 246], "valid"], [[247, 247], "valid", [], "NV8"], [[248, 255], "valid"], [[256, 256], "mapped", [257]], [[257, 257], "valid"], [[258, 258], "mapped", [259]], [[259, 259], "valid"], [[260, 260], "mapped", [261]], [[261, 261], "valid"], [[262, 262], "mapped", [263]], [[263, 263], "valid"], [[264, 264], "mapped", [265]], [[265, 265], "valid"], [[266, 266], "mapped", [267]], [[267, 267], "valid"], [[268, 268], "mapped", [269]], [[269, 269], "valid"], [[270, 270], "mapped", [271]], [[271, 271], "valid"], [[272, 272], "mapped", [273]], [[273, 273], "valid"], [[274, 274], "mapped", [275]], [[275, 275], "valid"], [[276, 276], "mapped", [277]], [[277, 277], "valid"], [[278, 278], "mapped", [279]], [[279, 279], "valid"], [[280, 280], "mapped", [281]], [[281, 281], "valid"], [[282, 282], "mapped", [283]], [[283, 283], "valid"], [[284, 284], "mapped", [285]], [[285, 285], "valid"], [[286, 286], "mapped", [287]], [[287, 287], "valid"], [[288, 288], "mapped", [289]], [[289, 289], "valid"], [[290, 290], "mapped", [291]], [[291, 291], "valid"], [[292, 292], "mapped", [293]], [[293, 293], "valid"], [[294, 294], "mapped", [295]], [[295, 295], "valid"], [[296, 296], "mapped", [297]], [[297, 297], "valid"], [[298, 298], "mapped", [299]], [[299, 299], "valid"], [[300, 300], "mapped", [301]], [[301, 301], "valid"], [[302, 302], "mapped", [303]], [[303, 303], "valid"], [[304, 304], "mapped", [105, 775]], [[305, 305], "valid"], [[306, 307], "mapped", [105, 106]], [[308, 308], "mapped", [309]], [[309, 309], "valid"], [[310, 310], "mapped", [311]], [[311, 312], "valid"], [[313, 313], "mapped", [314]], [[314, 314], "valid"], [[315, 315], "mapped", [316]], [[316, 316], "valid"], [[317, 317], "mapped", [318]], [[318, 318], "valid"], [[319, 320], "mapped", [108, 183]], [[321, 321], "mapped", [322]], [[322, 322], "valid"], [[323, 323], "mapped", [324]], [[324, 324], "valid"], [[325, 325], "mapped", [326]], [[326, 326], "valid"], [[327, 327], "mapped", [328]], [[328, 328], "valid"], [[329, 329], "mapped", [700, 110]], [[330, 330], "mapped", [331]], [[331, 331], "valid"], [[332, 332], "mapped", [333]], [[333, 333], "valid"], [[334, 334], "mapped", [335]], [[335, 335], "valid"], [[336, 336], "mapped", [337]], [[337, 337], "valid"], [[338, 338], "mapped", [339]], [[339, 339], "valid"], [[340, 340], "mapped", [341]], [[341, 341], "valid"], [[342, 342], "mapped", [343]], [[343, 343], "valid"], [[344, 344], "mapped", [345]], [[345, 345], "valid"], [[346, 346], "mapped", [347]], [[347, 347], "valid"], [[348, 348], "mapped", [349]], [[349, 349], "valid"], [[350, 350], "mapped", [351]], [[351, 351], "valid"], [[352, 352], "mapped", [353]], [[353, 353], "valid"], [[354, 354], "mapped", [355]], [[355, 355], "valid"], [[356, 356], "mapped", [357]], [[357, 357], "valid"], [[358, 358], "mapped", [359]], [[359, 359], "valid"], [[360, 360], "mapped", [361]], [[361, 361], "valid"], [[362, 362], "mapped", [363]], [[363, 363], "valid"], [[364, 364], "mapped", [365]], [[365, 365], "valid"], [[366, 366], "mapped", [367]], [[367, 367], "valid"], [[368, 368], "mapped", [369]], [[369, 369], "valid"], [[370, 370], "mapped", [371]], [[371, 371], "valid"], [[372, 372], "mapped", [373]], [[373, 373], "valid"], [[374, 374], "mapped", [375]], [[375, 375], "valid"], [[376, 376], "mapped", [255]], [[377, 377], "mapped", [378]], [[378, 378], "valid"], [[379, 379], "mapped", [380]], [[380, 380], "valid"], [[381, 381], "mapped", [382]], [[382, 382], "valid"], [[383, 383], "mapped", [115]], [[384, 384], "valid"], [[385, 385], "mapped", [595]], [[386, 386], "mapped", [387]], [[387, 387], "valid"], [[388, 388], "mapped", [389]], [[389, 389], "valid"], [[390, 390], "mapped", [596]], [[391, 391], "mapped", [392]], [[392, 392], "valid"], [[393, 393], "mapped", [598]], [[394, 394], "mapped", [599]], [[395, 395], "mapped", [396]], [[396, 397], "valid"], [[398, 398], "mapped", [477]], [[399, 399], "mapped", [601]], [[400, 400], "mapped", [603]], [[401, 401], "mapped", [402]], [[402, 402], "valid"], [[403, 403], "mapped", [608]], [[404, 404], "mapped", [611]], [[405, 405], "valid"], [[406, 406], "mapped", [617]], [[407, 407], "mapped", [616]], [[408, 408], "mapped", [409]], [[409, 411], "valid"], [[412, 412], "mapped", [623]], [[413, 413], "mapped", [626]], [[414, 414], "valid"], [[415, 415], "mapped", [629]], [[416, 416], "mapped", [417]], [[417, 417], "valid"], [[418, 418], "mapped", [419]], [[419, 419], "valid"], [[420, 420], "mapped", [421]], [[421, 421], "valid"], [[422, 422], "mapped", [640]], [[423, 423], "mapped", [424]], [[424, 424], "valid"], [[425, 425], "mapped", [643]], [[426, 427], "valid"], [[428, 428], "mapped", [429]], [[429, 429], "valid"], [[430, 430], "mapped", [648]], [[431, 431], "mapped", [432]], [[432, 432], "valid"], [[433, 433], "mapped", [650]], [[434, 434], "mapped", [651]], [[435, 435], "mapped", [436]], [[436, 436], "valid"], [[437, 437], "mapped", [438]], [[438, 438], "valid"], [[439, 439], "mapped", [658]], [[440, 440], "mapped", [441]], [[441, 443], "valid"], [[444, 444], "mapped", [445]], [[445, 451], "valid"], [[452, 454], "mapped", [100, 382]], [[455, 457], "mapped", [108, 106]], [[458, 460], "mapped", [110, 106]], [[461, 461], "mapped", [462]], [[462, 462], "valid"], [[463, 463], "mapped", [464]], [[464, 464], "valid"], [[465, 465], "mapped", [466]], [[466, 466], "valid"], [[467, 467], "mapped", [468]], [[468, 468], "valid"], [[469, 469], "mapped", [470]], [[470, 470], "valid"], [[471, 471], "mapped", [472]], [[472, 472], "valid"], [[473, 473], "mapped", [474]], [[474, 474], "valid"], [[475, 475], "mapped", [476]], [[476, 477], "valid"], [[478, 478], "mapped", [479]], [[479, 479], "valid"], [[480, 480], "mapped", [481]], [[481, 481], "valid"], [[482, 482], "mapped", [483]], [[483, 483], "valid"], [[484, 484], "mapped", [485]], [[485, 485], "valid"], [[486, 486], "mapped", [487]], [[487, 487], "valid"], [[488, 488], "mapped", [489]], [[489, 489], "valid"], [[490, 490], "mapped", [491]], [[491, 491], "valid"], [[492, 492], "mapped", [493]], [[493, 493], "valid"], [[494, 494], "mapped", [495]], [[495, 496], "valid"], [[497, 499], "mapped", [100, 122]], [[500, 500], "mapped", [501]], [[501, 501], "valid"], [[502, 502], "mapped", [405]], [[503, 503], "mapped", [447]], [[504, 504], "mapped", [505]], [[505, 505], "valid"], [[506, 506], "mapped", [507]], [[507, 507], "valid"], [[508, 508], "mapped", [509]], [[509, 509], "valid"], [[510, 510], "mapped", [511]], [[511, 511], "valid"], [[512, 512], "mapped", [513]], [[513, 513], "valid"], [[514, 514], "mapped", [515]], [[515, 515], "valid"], [[516, 516], "mapped", [517]], [[517, 517], "valid"], [[518, 518], "mapped", [519]], [[519, 519], "valid"], [[520, 520], "mapped", [521]], [[521, 521], "valid"], [[522, 522], "mapped", [523]], [[523, 523], "valid"], [[524, 524], "mapped", [525]], [[525, 525], "valid"], [[526, 526], "mapped", [527]], [[527, 527], "valid"], [[528, 528], "mapped", [529]], [[529, 529], "valid"], [[530, 530], "mapped", [531]], [[531, 531], "valid"], [[532, 532], "mapped", [533]], [[533, 533], "valid"], [[534, 534], "mapped", [535]], [[535, 535], "valid"], [[536, 536], "mapped", [537]], [[537, 537], "valid"], [[538, 538], "mapped", [539]], [[539, 539], "valid"], [[540, 540], "mapped", [541]], [[541, 541], "valid"], [[542, 542], "mapped", [543]], [[543, 543], "valid"], [[544, 544], "mapped", [414]], [[545, 545], "valid"], [[546, 546], "mapped", [547]], [[547, 547], "valid"], [[548, 548], "mapped", [549]], [[549, 549], "valid"], [[550, 550], "mapped", [551]], [[551, 551], "valid"], [[552, 552], "mapped", [553]], [[553, 553], "valid"], [[554, 554], "mapped", [555]], [[555, 555], "valid"], [[556, 556], "mapped", [557]], [[557, 557], "valid"], [[558, 558], "mapped", [559]], [[559, 559], "valid"], [[560, 560], "mapped", [561]], [[561, 561], "valid"], [[562, 562], "mapped", [563]], [[563, 563], "valid"], [[564, 566], "valid"], [[567, 569], "valid"], [[570, 570], "mapped", [11365]], [[571, 571], "mapped", [572]], [[572, 572], "valid"], [[573, 573], "mapped", [410]], [[574, 574], "mapped", [11366]], [[575, 576], "valid"], [[577, 577], "mapped", [578]], [[578, 578], "valid"], [[579, 579], "mapped", [384]], [[580, 580], "mapped", [649]], [[581, 581], "mapped", [652]], [[582, 582], "mapped", [583]], [[583, 583], "valid"], [[584, 584], "mapped", [585]], [[585, 585], "valid"], [[586, 586], "mapped", [587]], [[587, 587], "valid"], [[588, 588], "mapped", [589]], [[589, 589], "valid"], [[590, 590], "mapped", [591]], [[591, 591], "valid"], [[592, 680], "valid"], [[681, 685], "valid"], [[686, 687], "valid"], [[688, 688], "mapped", [104]], [[689, 689], "mapped", [614]], [[690, 690], "mapped", [106]], [[691, 691], "mapped", [114]], [[692, 692], "mapped", [633]], [[693, 693], "mapped", [635]], [[694, 694], "mapped", [641]], [[695, 695], "mapped", [119]], [[696, 696], "mapped", [121]], [[697, 705], "valid"], [[706, 709], "valid", [], "NV8"], [[710, 721], "valid"], [[722, 727], "valid", [], "NV8"], [[728, 728], "disallowed_STD3_mapped", [32, 774]], [[729, 729], "disallowed_STD3_mapped", [32, 775]], [[730, 730], "disallowed_STD3_mapped", [32, 778]], [[731, 731], "disallowed_STD3_mapped", [32, 808]], [[732, 732], "disallowed_STD3_mapped", [32, 771]], [[733, 733], "disallowed_STD3_mapped", [32, 779]], [[734, 734], "valid", [], "NV8"], [[735, 735], "valid", [], "NV8"], [[736, 736], "mapped", [611]], [[737, 737], "mapped", [108]], [[738, 738], "mapped", [115]], [[739, 739], "mapped", [120]], [[740, 740], "mapped", [661]], [[741, 745], "valid", [], "NV8"], [[746, 747], "valid", [], "NV8"], [[748, 748], "valid"], [[749, 749], "valid", [], "NV8"], [[750, 750], "valid"], [[751, 767], "valid", [], "NV8"], [[768, 831], "valid"], [[832, 832], "mapped", [768]], [[833, 833], "mapped", [769]], [[834, 834], "valid"], [[835, 835], "mapped", [787]], [[836, 836], "mapped", [776, 769]], [[837, 837], "mapped", [953]], [[838, 846], "valid"], [[847, 847], "ignored"], [[848, 855], "valid"], [[856, 860], "valid"], [[861, 863], "valid"], [[864, 865], "valid"], [[866, 866], "valid"], [[867, 879], "valid"], [[880, 880], "mapped", [881]], [[881, 881], "valid"], [[882, 882], "mapped", [883]], [[883, 883], "valid"], [[884, 884], "mapped", [697]], [[885, 885], "valid"], [[886, 886], "mapped", [887]], [[887, 887], "valid"], [[888, 889], "disallowed"], [[890, 890], "disallowed_STD3_mapped", [32, 953]], [[891, 893], "valid"], [[894, 894], "disallowed_STD3_mapped", [59]], [[895, 895], "mapped", [1011]], [[896, 899], "disallowed"], [[900, 900], "disallowed_STD3_mapped", [32, 769]], [[901, 901], "disallowed_STD3_mapped", [32, 776, 769]], [[902, 902], "mapped", [940]], [[903, 903], "mapped", [183]], [[904, 904], "mapped", [941]], [[905, 905], "mapped", [942]], [[906, 906], "mapped", [943]], [[907, 907], "disallowed"], [[908, 908], "mapped", [972]], [[909, 909], "disallowed"], [[910, 910], "mapped", [973]], [[911, 911], "mapped", [974]], [[912, 912], "valid"], [[913, 913], "mapped", [945]], [[914, 914], "mapped", [946]], [[915, 915], "mapped", [947]], [[916, 916], "mapped", [948]], [[917, 917], "mapped", [949]], [[918, 918], "mapped", [950]], [[919, 919], "mapped", [951]], [[920, 920], "mapped", [952]], [[921, 921], "mapped", [953]], [[922, 922], "mapped", [954]], [[923, 923], "mapped", [955]], [[924, 924], "mapped", [956]], [[925, 925], "mapped", [957]], [[926, 926], "mapped", [958]], [[927, 927], "mapped", [959]], [[928, 928], "mapped", [960]], [[929, 929], "mapped", [961]], [[930, 930], "disallowed"], [[931, 931], "mapped", [963]], [[932, 932], "mapped", [964]], [[933, 933], "mapped", [965]], [[934, 934], "mapped", [966]], [[935, 935], "mapped", [967]], [[936, 936], "mapped", [968]], [[937, 937], "mapped", [969]], [[938, 938], "mapped", [970]], [[939, 939], "mapped", [971]], [[940, 961], "valid"], [[962, 962], "deviation", [963]], [[963, 974], "valid"], [[975, 975], "mapped", [983]], [[976, 976], "mapped", [946]], [[977, 977], "mapped", [952]], [[978, 978], "mapped", [965]], [[979, 979], "mapped", [973]], [[980, 980], "mapped", [971]], [[981, 981], "mapped", [966]], [[982, 982], "mapped", [960]], [[983, 983], "valid"], [[984, 984], "mapped", [985]], [[985, 985], "valid"], [[986, 986], "mapped", [987]], [[987, 987], "valid"], [[988, 988], "mapped", [989]], [[989, 989], "valid"], [[990, 990], "mapped", [991]], [[991, 991], "valid"], [[992, 992], "mapped", [993]], [[993, 993], "valid"], [[994, 994], "mapped", [995]], [[995, 995], "valid"], [[996, 996], "mapped", [997]], [[997, 997], "valid"], [[998, 998], "mapped", [999]], [[999, 999], "valid"], [[1e3, 1e3], "mapped", [1001]], [[1001, 1001], "valid"], [[1002, 1002], "mapped", [1003]], [[1003, 1003], "valid"], [[1004, 1004], "mapped", [1005]], [[1005, 1005], "valid"], [[1006, 1006], "mapped", [1007]], [[1007, 1007], "valid"], [[1008, 1008], "mapped", [954]], [[1009, 1009], "mapped", [961]], [[1010, 1010], "mapped", [963]], [[1011, 1011], "valid"], [[1012, 1012], "mapped", [952]], [[1013, 1013], "mapped", [949]], [[1014, 1014], "valid", [], "NV8"], [[1015, 1015], "mapped", [1016]], [[1016, 1016], "valid"], [[1017, 1017], "mapped", [963]], [[1018, 1018], "mapped", [1019]], [[1019, 1019], "valid"], [[1020, 1020], "valid"], [[1021, 1021], "mapped", [891]], [[1022, 1022], "mapped", [892]], [[1023, 1023], "mapped", [893]], [[1024, 1024], "mapped", [1104]], [[1025, 1025], "mapped", [1105]], [[1026, 1026], "mapped", [1106]], [[1027, 1027], "mapped", [1107]], [[1028, 1028], "mapped", [1108]], [[1029, 1029], "mapped", [1109]], [[1030, 1030], "mapped", [1110]], [[1031, 1031], "mapped", [1111]], [[1032, 1032], "mapped", [1112]], [[1033, 1033], "mapped", [1113]], [[1034, 1034], "mapped", [1114]], [[1035, 1035], "mapped", [1115]], [[1036, 1036], "mapped", [1116]], [[1037, 1037], "mapped", [1117]], [[1038, 1038], "mapped", [1118]], [[1039, 1039], "mapped", [1119]], [[1040, 1040], "mapped", [1072]], [[1041, 1041], "mapped", [1073]], [[1042, 1042], "mapped", [1074]], [[1043, 1043], "mapped", [1075]], [[1044, 1044], "mapped", [1076]], [[1045, 1045], "mapped", [1077]], [[1046, 1046], "mapped", [1078]], [[1047, 1047], "mapped", [1079]], [[1048, 1048], "mapped", [1080]], [[1049, 1049], "mapped", [1081]], [[1050, 1050], "mapped", [1082]], [[1051, 1051], "mapped", [1083]], [[1052, 1052], "mapped", [1084]], [[1053, 1053], "mapped", [1085]], [[1054, 1054], "mapped", [1086]], [[1055, 1055], "mapped", [1087]], [[1056, 1056], "mapped", [1088]], [[1057, 1057], "mapped", [1089]], [[1058, 1058], "mapped", [1090]], [[1059, 1059], "mapped", [1091]], [[1060, 1060], "mapped", [1092]], [[1061, 1061], "mapped", [1093]], [[1062, 1062], "mapped", [1094]], [[1063, 1063], "mapped", [1095]], [[1064, 1064], "mapped", [1096]], [[1065, 1065], "mapped", [1097]], [[1066, 1066], "mapped", [1098]], [[1067, 1067], "mapped", [1099]], [[1068, 1068], "mapped", [1100]], [[1069, 1069], "mapped", [1101]], [[1070, 1070], "mapped", [1102]], [[1071, 1071], "mapped", [1103]], [[1072, 1103], "valid"], [[1104, 1104], "valid"], [[1105, 1116], "valid"], [[1117, 1117], "valid"], [[1118, 1119], "valid"], [[1120, 1120], "mapped", [1121]], [[1121, 1121], "valid"], [[1122, 1122], "mapped", [1123]], [[1123, 1123], "valid"], [[1124, 1124], "mapped", [1125]], [[1125, 1125], "valid"], [[1126, 1126], "mapped", [1127]], [[1127, 1127], "valid"], [[1128, 1128], "mapped", [1129]], [[1129, 1129], "valid"], [[1130, 1130], "mapped", [1131]], [[1131, 1131], "valid"], [[1132, 1132], "mapped", [1133]], [[1133, 1133], "valid"], [[1134, 1134], "mapped", [1135]], [[1135, 1135], "valid"], [[1136, 1136], "mapped", [1137]], [[1137, 1137], "valid"], [[1138, 1138], "mapped", [1139]], [[1139, 1139], "valid"], [[1140, 1140], "mapped", [1141]], [[1141, 1141], "valid"], [[1142, 1142], "mapped", [1143]], [[1143, 1143], "valid"], [[1144, 1144], "mapped", [1145]], [[1145, 1145], "valid"], [[1146, 1146], "mapped", [1147]], [[1147, 1147], "valid"], [[1148, 1148], "mapped", [1149]], [[1149, 1149], "valid"], [[1150, 1150], "mapped", [1151]], [[1151, 1151], "valid"], [[1152, 1152], "mapped", [1153]], [[1153, 1153], "valid"], [[1154, 1154], "valid", [], "NV8"], [[1155, 1158], "valid"], [[1159, 1159], "valid"], [[1160, 1161], "valid", [], "NV8"], [[1162, 1162], "mapped", [1163]], [[1163, 1163], "valid"], [[1164, 1164], "mapped", [1165]], [[1165, 1165], "valid"], [[1166, 1166], "mapped", [1167]], [[1167, 1167], "valid"], [[1168, 1168], "mapped", [1169]], [[1169, 1169], "valid"], [[1170, 1170], "mapped", [1171]], [[1171, 1171], "valid"], [[1172, 1172], "mapped", [1173]], [[1173, 1173], "valid"], [[1174, 1174], "mapped", [1175]], [[1175, 1175], "valid"], [[1176, 1176], "mapped", [1177]], [[1177, 1177], "valid"], [[1178, 1178], "mapped", [1179]], [[1179, 1179], "valid"], [[1180, 1180], "mapped", [1181]], [[1181, 1181], "valid"], [[1182, 1182], "mapped", [1183]], [[1183, 1183], "valid"], [[1184, 1184], "mapped", [1185]], [[1185, 1185], "valid"], [[1186, 1186], "mapped", [1187]], [[1187, 1187], "valid"], [[1188, 1188], "mapped", [1189]], [[1189, 1189], "valid"], [[1190, 1190], "mapped", [1191]], [[1191, 1191], "valid"], [[1192, 1192], "mapped", [1193]], [[1193, 1193], "valid"], [[1194, 1194], "mapped", [1195]], [[1195, 1195], "valid"], [[1196, 1196], "mapped", [1197]], [[1197, 1197], "valid"], [[1198, 1198], "mapped", [1199]], [[1199, 1199], "valid"], [[1200, 1200], "mapped", [1201]], [[1201, 1201], "valid"], [[1202, 1202], "mapped", [1203]], [[1203, 1203], "valid"], [[1204, 1204], "mapped", [1205]], [[1205, 1205], "valid"], [[1206, 1206], "mapped", [1207]], [[1207, 1207], "valid"], [[1208, 1208], "mapped", [1209]], [[1209, 1209], "valid"], [[1210, 1210], "mapped", [1211]], [[1211, 1211], "valid"], [[1212, 1212], "mapped", [1213]], [[1213, 1213], "valid"], [[1214, 1214], "mapped", [1215]], [[1215, 1215], "valid"], [[1216, 1216], "disallowed"], [[1217, 1217], "mapped", [1218]], [[1218, 1218], "valid"], [[1219, 1219], "mapped", [1220]], [[1220, 1220], "valid"], [[1221, 1221], "mapped", [1222]], [[1222, 1222], "valid"], [[1223, 1223], "mapped", [1224]], [[1224, 1224], "valid"], [[1225, 1225], "mapped", [1226]], [[1226, 1226], "valid"], [[1227, 1227], "mapped", [1228]], [[1228, 1228], "valid"], [[1229, 1229], "mapped", [1230]], [[1230, 1230], "valid"], [[1231, 1231], "valid"], [[1232, 1232], "mapped", [1233]], [[1233, 1233], "valid"], [[1234, 1234], "mapped", [1235]], [[1235, 1235], "valid"], [[1236, 1236], "mapped", [1237]], [[1237, 1237], "valid"], [[1238, 1238], "mapped", [1239]], [[1239, 1239], "valid"], [[1240, 1240], "mapped", [1241]], [[1241, 1241], "valid"], [[1242, 1242], "mapped", [1243]], [[1243, 1243], "valid"], [[1244, 1244], "mapped", [1245]], [[1245, 1245], "valid"], [[1246, 1246], "mapped", [1247]], [[1247, 1247], "valid"], [[1248, 1248], "mapped", [1249]], [[1249, 1249], "valid"], [[1250, 1250], "mapped", [1251]], [[1251, 1251], "valid"], [[1252, 1252], "mapped", [1253]], [[1253, 1253], "valid"], [[1254, 1254], "mapped", [1255]], [[1255, 1255], "valid"], [[1256, 1256], "mapped", [1257]], [[1257, 1257], "valid"], [[1258, 1258], "mapped", [1259]], [[1259, 1259], "valid"], [[1260, 1260], "mapped", [1261]], [[1261, 1261], "valid"], [[1262, 1262], "mapped", [1263]], [[1263, 1263], "valid"], [[1264, 1264], "mapped", [1265]], [[1265, 1265], "valid"], [[1266, 1266], "mapped", [1267]], [[1267, 1267], "valid"], [[1268, 1268], "mapped", [1269]], [[1269, 1269], "valid"], [[1270, 1270], "mapped", [1271]], [[1271, 1271], "valid"], [[1272, 1272], "mapped", [1273]], [[1273, 1273], "valid"], [[1274, 1274], "mapped", [1275]], [[1275, 1275], "valid"], [[1276, 1276], "mapped", [1277]], [[1277, 1277], "valid"], [[1278, 1278], "mapped", [1279]], [[1279, 1279], "valid"], [[1280, 1280], "mapped", [1281]], [[1281, 1281], "valid"], [[1282, 1282], "mapped", [1283]], [[1283, 1283], "valid"], [[1284, 1284], "mapped", [1285]], [[1285, 1285], "valid"], [[1286, 1286], "mapped", [1287]], [[1287, 1287], "valid"], [[1288, 1288], "mapped", [1289]], [[1289, 1289], "valid"], [[1290, 1290], "mapped", [1291]], [[1291, 1291], "valid"], [[1292, 1292], "mapped", [1293]], [[1293, 1293], "valid"], [[1294, 1294], "mapped", [1295]], [[1295, 1295], "valid"], [[1296, 1296], "mapped", [1297]], [[1297, 1297], "valid"], [[1298, 1298], "mapped", [1299]], [[1299, 1299], "valid"], [[1300, 1300], "mapped", [1301]], [[1301, 1301], "valid"], [[1302, 1302], "mapped", [1303]], [[1303, 1303], "valid"], [[1304, 1304], "mapped", [1305]], [[1305, 1305], "valid"], [[1306, 1306], "mapped", [1307]], [[1307, 1307], "valid"], [[1308, 1308], "mapped", [1309]], [[1309, 1309], "valid"], [[1310, 1310], "mapped", [1311]], [[1311, 1311], "valid"], [[1312, 1312], "mapped", [1313]], [[1313, 1313], "valid"], [[1314, 1314], "mapped", [1315]], [[1315, 1315], "valid"], [[1316, 1316], "mapped", [1317]], [[1317, 1317], "valid"], [[1318, 1318], "mapped", [1319]], [[1319, 1319], "valid"], [[1320, 1320], "mapped", [1321]], [[1321, 1321], "valid"], [[1322, 1322], "mapped", [1323]], [[1323, 1323], "valid"], [[1324, 1324], "mapped", [1325]], [[1325, 1325], "valid"], [[1326, 1326], "mapped", [1327]], [[1327, 1327], "valid"], [[1328, 1328], "disallowed"], [[1329, 1329], "mapped", [1377]], [[1330, 1330], "mapped", [1378]], [[1331, 1331], "mapped", [1379]], [[1332, 1332], "mapped", [1380]], [[1333, 1333], "mapped", [1381]], [[1334, 1334], "mapped", [1382]], [[1335, 1335], "mapped", [1383]], [[1336, 1336], "mapped", [1384]], [[1337, 1337], "mapped", [1385]], [[1338, 1338], "mapped", [1386]], [[1339, 1339], "mapped", [1387]], [[1340, 1340], "mapped", [1388]], [[1341, 1341], "mapped", [1389]], [[1342, 1342], "mapped", [1390]], [[1343, 1343], "mapped", [1391]], [[1344, 1344], "mapped", [1392]], [[1345, 1345], "mapped", [1393]], [[1346, 1346], "mapped", [1394]], [[1347, 1347], "mapped", [1395]], [[1348, 1348], "mapped", [1396]], [[1349, 1349], "mapped", [1397]], [[1350, 1350], "mapped", [1398]], [[1351, 1351], "mapped", [1399]], [[1352, 1352], "mapped", [1400]], [[1353, 1353], "mapped", [1401]], [[1354, 1354], "mapped", [1402]], [[1355, 1355], "mapped", [1403]], [[1356, 1356], "mapped", [1404]], [[1357, 1357], "mapped", [1405]], [[1358, 1358], "mapped", [1406]], [[1359, 1359], "mapped", [1407]], [[1360, 1360], "mapped", [1408]], [[1361, 1361], "mapped", [1409]], [[1362, 1362], "mapped", [1410]], [[1363, 1363], "mapped", [1411]], [[1364, 1364], "mapped", [1412]], [[1365, 1365], "mapped", [1413]], [[1366, 1366], "mapped", [1414]], [[1367, 1368], "disallowed"], [[1369, 1369], "valid"], [[1370, 1375], "valid", [], "NV8"], [[1376, 1376], "disallowed"], [[1377, 1414], "valid"], [[1415, 1415], "mapped", [1381, 1410]], [[1416, 1416], "disallowed"], [[1417, 1417], "valid", [], "NV8"], [[1418, 1418], "valid", [], "NV8"], [[1419, 1420], "disallowed"], [[1421, 1422], "valid", [], "NV8"], [[1423, 1423], "valid", [], "NV8"], [[1424, 1424], "disallowed"], [[1425, 1441], "valid"], [[1442, 1442], "valid"], [[1443, 1455], "valid"], [[1456, 1465], "valid"], [[1466, 1466], "valid"], [[1467, 1469], "valid"], [[1470, 1470], "valid", [], "NV8"], [[1471, 1471], "valid"], [[1472, 1472], "valid", [], "NV8"], [[1473, 1474], "valid"], [[1475, 1475], "valid", [], "NV8"], [[1476, 1476], "valid"], [[1477, 1477], "valid"], [[1478, 1478], "valid", [], "NV8"], [[1479, 1479], "valid"], [[1480, 1487], "disallowed"], [[1488, 1514], "valid"], [[1515, 1519], "disallowed"], [[1520, 1524], "valid"], [[1525, 1535], "disallowed"], [[1536, 1539], "disallowed"], [[1540, 1540], "disallowed"], [[1541, 1541], "disallowed"], [[1542, 1546], "valid", [], "NV8"], [[1547, 1547], "valid", [], "NV8"], [[1548, 1548], "valid", [], "NV8"], [[1549, 1551], "valid", [], "NV8"], [[1552, 1557], "valid"], [[1558, 1562], "valid"], [[1563, 1563], "valid", [], "NV8"], [[1564, 1564], "disallowed"], [[1565, 1565], "disallowed"], [[1566, 1566], "valid", [], "NV8"], [[1567, 1567], "valid", [], "NV8"], [[1568, 1568], "valid"], [[1569, 1594], "valid"], [[1595, 1599], "valid"], [[1600, 1600], "valid", [], "NV8"], [[1601, 1618], "valid"], [[1619, 1621], "valid"], [[1622, 1624], "valid"], [[1625, 1630], "valid"], [[1631, 1631], "valid"], [[1632, 1641], "valid"], [[1642, 1645], "valid", [], "NV8"], [[1646, 1647], "valid"], [[1648, 1652], "valid"], [[1653, 1653], "mapped", [1575, 1652]], [[1654, 1654], "mapped", [1608, 1652]], [[1655, 1655], "mapped", [1735, 1652]], [[1656, 1656], "mapped", [1610, 1652]], [[1657, 1719], "valid"], [[1720, 1721], "valid"], [[1722, 1726], "valid"], [[1727, 1727], "valid"], [[1728, 1742], "valid"], [[1743, 1743], "valid"], [[1744, 1747], "valid"], [[1748, 1748], "valid", [], "NV8"], [[1749, 1756], "valid"], [[1757, 1757], "disallowed"], [[1758, 1758], "valid", [], "NV8"], [[1759, 1768], "valid"], [[1769, 1769], "valid", [], "NV8"], [[1770, 1773], "valid"], [[1774, 1775], "valid"], [[1776, 1785], "valid"], [[1786, 1790], "valid"], [[1791, 1791], "valid"], [[1792, 1805], "valid", [], "NV8"], [[1806, 1806], "disallowed"], [[1807, 1807], "disallowed"], [[1808, 1836], "valid"], [[1837, 1839], "valid"], [[1840, 1866], "valid"], [[1867, 1868], "disallowed"], [[1869, 1871], "valid"], [[1872, 1901], "valid"], [[1902, 1919], "valid"], [[1920, 1968], "valid"], [[1969, 1969], "valid"], [[1970, 1983], "disallowed"], [[1984, 2037], "valid"], [[2038, 2042], "valid", [], "NV8"], [[2043, 2047], "disallowed"], [[2048, 2093], "valid"], [[2094, 2095], "disallowed"], [[2096, 2110], "valid", [], "NV8"], [[2111, 2111], "disallowed"], [[2112, 2139], "valid"], [[2140, 2141], "disallowed"], [[2142, 2142], "valid", [], "NV8"], [[2143, 2207], "disallowed"], [[2208, 2208], "valid"], [[2209, 2209], "valid"], [[2210, 2220], "valid"], [[2221, 2226], "valid"], [[2227, 2228], "valid"], [[2229, 2274], "disallowed"], [[2275, 2275], "valid"], [[2276, 2302], "valid"], [[2303, 2303], "valid"], [[2304, 2304], "valid"], [[2305, 2307], "valid"], [[2308, 2308], "valid"], [[2309, 2361], "valid"], [[2362, 2363], "valid"], [[2364, 2381], "valid"], [[2382, 2382], "valid"], [[2383, 2383], "valid"], [[2384, 2388], "valid"], [[2389, 2389], "valid"], [[2390, 2391], "valid"], [[2392, 2392], "mapped", [2325, 2364]], [[2393, 2393], "mapped", [2326, 2364]], [[2394, 2394], "mapped", [2327, 2364]], [[2395, 2395], "mapped", [2332, 2364]], [[2396, 2396], "mapped", [2337, 2364]], [[2397, 2397], "mapped", [2338, 2364]], [[2398, 2398], "mapped", [2347, 2364]], [[2399, 2399], "mapped", [2351, 2364]], [[2400, 2403], "valid"], [[2404, 2405], "valid", [], "NV8"], [[2406, 2415], "valid"], [[2416, 2416], "valid", [], "NV8"], [[2417, 2418], "valid"], [[2419, 2423], "valid"], [[2424, 2424], "valid"], [[2425, 2426], "valid"], [[2427, 2428], "valid"], [[2429, 2429], "valid"], [[2430, 2431], "valid"], [[2432, 2432], "valid"], [[2433, 2435], "valid"], [[2436, 2436], "disallowed"], [[2437, 2444], "valid"], [[2445, 2446], "disallowed"], [[2447, 2448], "valid"], [[2449, 2450], "disallowed"], [[2451, 2472], "valid"], [[2473, 2473], "disallowed"], [[2474, 2480], "valid"], [[2481, 2481], "disallowed"], [[2482, 2482], "valid"], [[2483, 2485], "disallowed"], [[2486, 2489], "valid"], [[2490, 2491], "disallowed"], [[2492, 2492], "valid"], [[2493, 2493], "valid"], [[2494, 2500], "valid"], [[2501, 2502], "disallowed"], [[2503, 2504], "valid"], [[2505, 2506], "disallowed"], [[2507, 2509], "valid"], [[2510, 2510], "valid"], [[2511, 2518], "disallowed"], [[2519, 2519], "valid"], [[2520, 2523], "disallowed"], [[2524, 2524], "mapped", [2465, 2492]], [[2525, 2525], "mapped", [2466, 2492]], [[2526, 2526], "disallowed"], [[2527, 2527], "mapped", [2479, 2492]], [[2528, 2531], "valid"], [[2532, 2533], "disallowed"], [[2534, 2545], "valid"], [[2546, 2554], "valid", [], "NV8"], [[2555, 2555], "valid", [], "NV8"], [[2556, 2560], "disallowed"], [[2561, 2561], "valid"], [[2562, 2562], "valid"], [[2563, 2563], "valid"], [[2564, 2564], "disallowed"], [[2565, 2570], "valid"], [[2571, 2574], "disallowed"], [[2575, 2576], "valid"], [[2577, 2578], "disallowed"], [[2579, 2600], "valid"], [[2601, 2601], "disallowed"], [[2602, 2608], "valid"], [[2609, 2609], "disallowed"], [[2610, 2610], "valid"], [[2611, 2611], "mapped", [2610, 2620]], [[2612, 2612], "disallowed"], [[2613, 2613], "valid"], [[2614, 2614], "mapped", [2616, 2620]], [[2615, 2615], "disallowed"], [[2616, 2617], "valid"], [[2618, 2619], "disallowed"], [[2620, 2620], "valid"], [[2621, 2621], "disallowed"], [[2622, 2626], "valid"], [[2627, 2630], "disallowed"], [[2631, 2632], "valid"], [[2633, 2634], "disallowed"], [[2635, 2637], "valid"], [[2638, 2640], "disallowed"], [[2641, 2641], "valid"], [[2642, 2648], "disallowed"], [[2649, 2649], "mapped", [2582, 2620]], [[2650, 2650], "mapped", [2583, 2620]], [[2651, 2651], "mapped", [2588, 2620]], [[2652, 2652], "valid"], [[2653, 2653], "disallowed"], [[2654, 2654], "mapped", [2603, 2620]], [[2655, 2661], "disallowed"], [[2662, 2676], "valid"], [[2677, 2677], "valid"], [[2678, 2688], "disallowed"], [[2689, 2691], "valid"], [[2692, 2692], "disallowed"], [[2693, 2699], "valid"], [[2700, 2700], "valid"], [[2701, 2701], "valid"], [[2702, 2702], "disallowed"], [[2703, 2705], "valid"], [[2706, 2706], "disallowed"], [[2707, 2728], "valid"], [[2729, 2729], "disallowed"], [[2730, 2736], "valid"], [[2737, 2737], "disallowed"], [[2738, 2739], "valid"], [[2740, 2740], "disallowed"], [[2741, 2745], "valid"], [[2746, 2747], "disallowed"], [[2748, 2757], "valid"], [[2758, 2758], "disallowed"], [[2759, 2761], "valid"], [[2762, 2762], "disallowed"], [[2763, 2765], "valid"], [[2766, 2767], "disallowed"], [[2768, 2768], "valid"], [[2769, 2783], "disallowed"], [[2784, 2784], "valid"], [[2785, 2787], "valid"], [[2788, 2789], "disallowed"], [[2790, 2799], "valid"], [[2800, 2800], "valid", [], "NV8"], [[2801, 2801], "valid", [], "NV8"], [[2802, 2808], "disallowed"], [[2809, 2809], "valid"], [[2810, 2816], "disallowed"], [[2817, 2819], "valid"], [[2820, 2820], "disallowed"], [[2821, 2828], "valid"], [[2829, 2830], "disallowed"], [[2831, 2832], "valid"], [[2833, 2834], "disallowed"], [[2835, 2856], "valid"], [[2857, 2857], "disallowed"], [[2858, 2864], "valid"], [[2865, 2865], "disallowed"], [[2866, 2867], "valid"], [[2868, 2868], "disallowed"], [[2869, 2869], "valid"], [[2870, 2873], "valid"], [[2874, 2875], "disallowed"], [[2876, 2883], "valid"], [[2884, 2884], "valid"], [[2885, 2886], "disallowed"], [[2887, 2888], "valid"], [[2889, 2890], "disallowed"], [[2891, 2893], "valid"], [[2894, 2901], "disallowed"], [[2902, 2903], "valid"], [[2904, 2907], "disallowed"], [[2908, 2908], "mapped", [2849, 2876]], [[2909, 2909], "mapped", [2850, 2876]], [[2910, 2910], "disallowed"], [[2911, 2913], "valid"], [[2914, 2915], "valid"], [[2916, 2917], "disallowed"], [[2918, 2927], "valid"], [[2928, 2928], "valid", [], "NV8"], [[2929, 2929], "valid"], [[2930, 2935], "valid", [], "NV8"], [[2936, 2945], "disallowed"], [[2946, 2947], "valid"], [[2948, 2948], "disallowed"], [[2949, 2954], "valid"], [[2955, 2957], "disallowed"], [[2958, 2960], "valid"], [[2961, 2961], "disallowed"], [[2962, 2965], "valid"], [[2966, 2968], "disallowed"], [[2969, 2970], "valid"], [[2971, 2971], "disallowed"], [[2972, 2972], "valid"], [[2973, 2973], "disallowed"], [[2974, 2975], "valid"], [[2976, 2978], "disallowed"], [[2979, 2980], "valid"], [[2981, 2983], "disallowed"], [[2984, 2986], "valid"], [[2987, 2989], "disallowed"], [[2990, 2997], "valid"], [[2998, 2998], "valid"], [[2999, 3001], "valid"], [[3002, 3005], "disallowed"], [[3006, 3010], "valid"], [[3011, 3013], "disallowed"], [[3014, 3016], "valid"], [[3017, 3017], "disallowed"], [[3018, 3021], "valid"], [[3022, 3023], "disallowed"], [[3024, 3024], "valid"], [[3025, 3030], "disallowed"], [[3031, 3031], "valid"], [[3032, 3045], "disallowed"], [[3046, 3046], "valid"], [[3047, 3055], "valid"], [[3056, 3058], "valid", [], "NV8"], [[3059, 3066], "valid", [], "NV8"], [[3067, 3071], "disallowed"], [[3072, 3072], "valid"], [[3073, 3075], "valid"], [[3076, 3076], "disallowed"], [[3077, 3084], "valid"], [[3085, 3085], "disallowed"], [[3086, 3088], "valid"], [[3089, 3089], "disallowed"], [[3090, 3112], "valid"], [[3113, 3113], "disallowed"], [[3114, 3123], "valid"], [[3124, 3124], "valid"], [[3125, 3129], "valid"], [[3130, 3132], "disallowed"], [[3133, 3133], "valid"], [[3134, 3140], "valid"], [[3141, 3141], "disallowed"], [[3142, 3144], "valid"], [[3145, 3145], "disallowed"], [[3146, 3149], "valid"], [[3150, 3156], "disallowed"], [[3157, 3158], "valid"], [[3159, 3159], "disallowed"], [[3160, 3161], "valid"], [[3162, 3162], "valid"], [[3163, 3167], "disallowed"], [[3168, 3169], "valid"], [[3170, 3171], "valid"], [[3172, 3173], "disallowed"], [[3174, 3183], "valid"], [[3184, 3191], "disallowed"], [[3192, 3199], "valid", [], "NV8"], [[3200, 3200], "disallowed"], [[3201, 3201], "valid"], [[3202, 3203], "valid"], [[3204, 3204], "disallowed"], [[3205, 3212], "valid"], [[3213, 3213], "disallowed"], [[3214, 3216], "valid"], [[3217, 3217], "disallowed"], [[3218, 3240], "valid"], [[3241, 3241], "disallowed"], [[3242, 3251], "valid"], [[3252, 3252], "disallowed"], [[3253, 3257], "valid"], [[3258, 3259], "disallowed"], [[3260, 3261], "valid"], [[3262, 3268], "valid"], [[3269, 3269], "disallowed"], [[3270, 3272], "valid"], [[3273, 3273], "disallowed"], [[3274, 3277], "valid"], [[3278, 3284], "disallowed"], [[3285, 3286], "valid"], [[3287, 3293], "disallowed"], [[3294, 3294], "valid"], [[3295, 3295], "disallowed"], [[3296, 3297], "valid"], [[3298, 3299], "valid"], [[3300, 3301], "disallowed"], [[3302, 3311], "valid"], [[3312, 3312], "disallowed"], [[3313, 3314], "valid"], [[3315, 3328], "disallowed"], [[3329, 3329], "valid"], [[3330, 3331], "valid"], [[3332, 3332], "disallowed"], [[3333, 3340], "valid"], [[3341, 3341], "disallowed"], [[3342, 3344], "valid"], [[3345, 3345], "disallowed"], [[3346, 3368], "valid"], [[3369, 3369], "valid"], [[3370, 3385], "valid"], [[3386, 3386], "valid"], [[3387, 3388], "disallowed"], [[3389, 3389], "valid"], [[3390, 3395], "valid"], [[3396, 3396], "valid"], [[3397, 3397], "disallowed"], [[3398, 3400], "valid"], [[3401, 3401], "disallowed"], [[3402, 3405], "valid"], [[3406, 3406], "valid"], [[3407, 3414], "disallowed"], [[3415, 3415], "valid"], [[3416, 3422], "disallowed"], [[3423, 3423], "valid"], [[3424, 3425], "valid"], [[3426, 3427], "valid"], [[3428, 3429], "disallowed"], [[3430, 3439], "valid"], [[3440, 3445], "valid", [], "NV8"], [[3446, 3448], "disallowed"], [[3449, 3449], "valid", [], "NV8"], [[3450, 3455], "valid"], [[3456, 3457], "disallowed"], [[3458, 3459], "valid"], [[3460, 3460], "disallowed"], [[3461, 3478], "valid"], [[3479, 3481], "disallowed"], [[3482, 3505], "valid"], [[3506, 3506], "disallowed"], [[3507, 3515], "valid"], [[3516, 3516], "disallowed"], [[3517, 3517], "valid"], [[3518, 3519], "disallowed"], [[3520, 3526], "valid"], [[3527, 3529], "disallowed"], [[3530, 3530], "valid"], [[3531, 3534], "disallowed"], [[3535, 3540], "valid"], [[3541, 3541], "disallowed"], [[3542, 3542], "valid"], [[3543, 3543], "disallowed"], [[3544, 3551], "valid"], [[3552, 3557], "disallowed"], [[3558, 3567], "valid"], [[3568, 3569], "disallowed"], [[3570, 3571], "valid"], [[3572, 3572], "valid", [], "NV8"], [[3573, 3584], "disallowed"], [[3585, 3634], "valid"], [[3635, 3635], "mapped", [3661, 3634]], [[3636, 3642], "valid"], [[3643, 3646], "disallowed"], [[3647, 3647], "valid", [], "NV8"], [[3648, 3662], "valid"], [[3663, 3663], "valid", [], "NV8"], [[3664, 3673], "valid"], [[3674, 3675], "valid", [], "NV8"], [[3676, 3712], "disallowed"], [[3713, 3714], "valid"], [[3715, 3715], "disallowed"], [[3716, 3716], "valid"], [[3717, 3718], "disallowed"], [[3719, 3720], "valid"], [[3721, 3721], "disallowed"], [[3722, 3722], "valid"], [[3723, 3724], "disallowed"], [[3725, 3725], "valid"], [[3726, 3731], "disallowed"], [[3732, 3735], "valid"], [[3736, 3736], "disallowed"], [[3737, 3743], "valid"], [[3744, 3744], "disallowed"], [[3745, 3747], "valid"], [[3748, 3748], "disallowed"], [[3749, 3749], "valid"], [[3750, 3750], "disallowed"], [[3751, 3751], "valid"], [[3752, 3753], "disallowed"], [[3754, 3755], "valid"], [[3756, 3756], "disallowed"], [[3757, 3762], "valid"], [[3763, 3763], "mapped", [3789, 3762]], [[3764, 3769], "valid"], [[3770, 3770], "disallowed"], [[3771, 3773], "valid"], [[3774, 3775], "disallowed"], [[3776, 3780], "valid"], [[3781, 3781], "disallowed"], [[3782, 3782], "valid"], [[3783, 3783], "disallowed"], [[3784, 3789], "valid"], [[3790, 3791], "disallowed"], [[3792, 3801], "valid"], [[3802, 3803], "disallowed"], [[3804, 3804], "mapped", [3755, 3737]], [[3805, 3805], "mapped", [3755, 3745]], [[3806, 3807], "valid"], [[3808, 3839], "disallowed"], [[3840, 3840], "valid"], [[3841, 3850], "valid", [], "NV8"], [[3851, 3851], "valid"], [[3852, 3852], "mapped", [3851]], [[3853, 3863], "valid", [], "NV8"], [[3864, 3865], "valid"], [[3866, 3871], "valid", [], "NV8"], [[3872, 3881], "valid"], [[3882, 3892], "valid", [], "NV8"], [[3893, 3893], "valid"], [[3894, 3894], "valid", [], "NV8"], [[3895, 3895], "valid"], [[3896, 3896], "valid", [], "NV8"], [[3897, 3897], "valid"], [[3898, 3901], "valid", [], "NV8"], [[3902, 3906], "valid"], [[3907, 3907], "mapped", [3906, 4023]], [[3908, 3911], "valid"], [[3912, 3912], "disallowed"], [[3913, 3916], "valid"], [[3917, 3917], "mapped", [3916, 4023]], [[3918, 3921], "valid"], [[3922, 3922], "mapped", [3921, 4023]], [[3923, 3926], "valid"], [[3927, 3927], "mapped", [3926, 4023]], [[3928, 3931], "valid"], [[3932, 3932], "mapped", [3931, 4023]], [[3933, 3944], "valid"], [[3945, 3945], "mapped", [3904, 4021]], [[3946, 3946], "valid"], [[3947, 3948], "valid"], [[3949, 3952], "disallowed"], [[3953, 3954], "valid"], [[3955, 3955], "mapped", [3953, 3954]], [[3956, 3956], "valid"], [[3957, 3957], "mapped", [3953, 3956]], [[3958, 3958], "mapped", [4018, 3968]], [[3959, 3959], "mapped", [4018, 3953, 3968]], [[3960, 3960], "mapped", [4019, 3968]], [[3961, 3961], "mapped", [4019, 3953, 3968]], [[3962, 3968], "valid"], [[3969, 3969], "mapped", [3953, 3968]], [[3970, 3972], "valid"], [[3973, 3973], "valid", [], "NV8"], [[3974, 3979], "valid"], [[3980, 3983], "valid"], [[3984, 3986], "valid"], [[3987, 3987], "mapped", [3986, 4023]], [[3988, 3989], "valid"], [[3990, 3990], "valid"], [[3991, 3991], "valid"], [[3992, 3992], "disallowed"], [[3993, 3996], "valid"], [[3997, 3997], "mapped", [3996, 4023]], [[3998, 4001], "valid"], [[4002, 4002], "mapped", [4001, 4023]], [[4003, 4006], "valid"], [[4007, 4007], "mapped", [4006, 4023]], [[4008, 4011], "valid"], [[4012, 4012], "mapped", [4011, 4023]], [[4013, 4013], "valid"], [[4014, 4016], "valid"], [[4017, 4023], "valid"], [[4024, 4024], "valid"], [[4025, 4025], "mapped", [3984, 4021]], [[4026, 4028], "valid"], [[4029, 4029], "disallowed"], [[4030, 4037], "valid", [], "NV8"], [[4038, 4038], "valid"], [[4039, 4044], "valid", [], "NV8"], [[4045, 4045], "disallowed"], [[4046, 4046], "valid", [], "NV8"], [[4047, 4047], "valid", [], "NV8"], [[4048, 4049], "valid", [], "NV8"], [[4050, 4052], "valid", [], "NV8"], [[4053, 4056], "valid", [], "NV8"], [[4057, 4058], "valid", [], "NV8"], [[4059, 4095], "disallowed"], [[4096, 4129], "valid"], [[4130, 4130], "valid"], [[4131, 4135], "valid"], [[4136, 4136], "valid"], [[4137, 4138], "valid"], [[4139, 4139], "valid"], [[4140, 4146], "valid"], [[4147, 4149], "valid"], [[4150, 4153], "valid"], [[4154, 4159], "valid"], [[4160, 4169], "valid"], [[4170, 4175], "valid", [], "NV8"], [[4176, 4185], "valid"], [[4186, 4249], "valid"], [[4250, 4253], "valid"], [[4254, 4255], "valid", [], "NV8"], [[4256, 4293], "disallowed"], [[4294, 4294], "disallowed"], [[4295, 4295], "mapped", [11559]], [[4296, 4300], "disallowed"], [[4301, 4301], "mapped", [11565]], [[4302, 4303], "disallowed"], [[4304, 4342], "valid"], [[4343, 4344], "valid"], [[4345, 4346], "valid"], [[4347, 4347], "valid", [], "NV8"], [[4348, 4348], "mapped", [4316]], [[4349, 4351], "valid"], [[4352, 4441], "valid", [], "NV8"], [[4442, 4446], "valid", [], "NV8"], [[4447, 4448], "disallowed"], [[4449, 4514], "valid", [], "NV8"], [[4515, 4519], "valid", [], "NV8"], [[4520, 4601], "valid", [], "NV8"], [[4602, 4607], "valid", [], "NV8"], [[4608, 4614], "valid"], [[4615, 4615], "valid"], [[4616, 4678], "valid"], [[4679, 4679], "valid"], [[4680, 4680], "valid"], [[4681, 4681], "disallowed"], [[4682, 4685], "valid"], [[4686, 4687], "disallowed"], [[4688, 4694], "valid"], [[4695, 4695], "disallowed"], [[4696, 4696], "valid"], [[4697, 4697], "disallowed"], [[4698, 4701], "valid"], [[4702, 4703], "disallowed"], [[4704, 4742], "valid"], [[4743, 4743], "valid"], [[4744, 4744], "valid"], [[4745, 4745], "disallowed"], [[4746, 4749], "valid"], [[4750, 4751], "disallowed"], [[4752, 4782], "valid"], [[4783, 4783], "valid"], [[4784, 4784], "valid"], [[4785, 4785], "disallowed"], [[4786, 4789], "valid"], [[4790, 4791], "disallowed"], [[4792, 4798], "valid"], [[4799, 4799], "disallowed"], [[4800, 4800], "valid"], [[4801, 4801], "disallowed"], [[4802, 4805], "valid"], [[4806, 4807], "disallowed"], [[4808, 4814], "valid"], [[4815, 4815], "valid"], [[4816, 4822], "valid"], [[4823, 4823], "disallowed"], [[4824, 4846], "valid"], [[4847, 4847], "valid"], [[4848, 4878], "valid"], [[4879, 4879], "valid"], [[4880, 4880], "valid"], [[4881, 4881], "disallowed"], [[4882, 4885], "valid"], [[4886, 4887], "disallowed"], [[4888, 4894], "valid"], [[4895, 4895], "valid"], [[4896, 4934], "valid"], [[4935, 4935], "valid"], [[4936, 4954], "valid"], [[4955, 4956], "disallowed"], [[4957, 4958], "valid"], [[4959, 4959], "valid"], [[4960, 4960], "valid", [], "NV8"], [[4961, 4988], "valid", [], "NV8"], [[4989, 4991], "disallowed"], [[4992, 5007], "valid"], [[5008, 5017], "valid", [], "NV8"], [[5018, 5023], "disallowed"], [[5024, 5108], "valid"], [[5109, 5109], "valid"], [[5110, 5111], "disallowed"], [[5112, 5112], "mapped", [5104]], [[5113, 5113], "mapped", [5105]], [[5114, 5114], "mapped", [5106]], [[5115, 5115], "mapped", [5107]], [[5116, 5116], "mapped", [5108]], [[5117, 5117], "mapped", [5109]], [[5118, 5119], "disallowed"], [[5120, 5120], "valid", [], "NV8"], [[5121, 5740], "valid"], [[5741, 5742], "valid", [], "NV8"], [[5743, 5750], "valid"], [[5751, 5759], "valid"], [[5760, 5760], "disallowed"], [[5761, 5786], "valid"], [[5787, 5788], "valid", [], "NV8"], [[5789, 5791], "disallowed"], [[5792, 5866], "valid"], [[5867, 5872], "valid", [], "NV8"], [[5873, 5880], "valid"], [[5881, 5887], "disallowed"], [[5888, 5900], "valid"], [[5901, 5901], "disallowed"], [[5902, 5908], "valid"], [[5909, 5919], "disallowed"], [[5920, 5940], "valid"], [[5941, 5942], "valid", [], "NV8"], [[5943, 5951], "disallowed"], [[5952, 5971], "valid"], [[5972, 5983], "disallowed"], [[5984, 5996], "valid"], [[5997, 5997], "disallowed"], [[5998, 6e3], "valid"], [[6001, 6001], "disallowed"], [[6002, 6003], "valid"], [[6004, 6015], "disallowed"], [[6016, 6067], "valid"], [[6068, 6069], "disallowed"], [[6070, 6099], "valid"], [[6100, 6102], "valid", [], "NV8"], [[6103, 6103], "valid"], [[6104, 6107], "valid", [], "NV8"], [[6108, 6108], "valid"], [[6109, 6109], "valid"], [[6110, 6111], "disallowed"], [[6112, 6121], "valid"], [[6122, 6127], "disallowed"], [[6128, 6137], "valid", [], "NV8"], [[6138, 6143], "disallowed"], [[6144, 6149], "valid", [], "NV8"], [[6150, 6150], "disallowed"], [[6151, 6154], "valid", [], "NV8"], [[6155, 6157], "ignored"], [[6158, 6158], "disallowed"], [[6159, 6159], "disallowed"], [[6160, 6169], "valid"], [[6170, 6175], "disallowed"], [[6176, 6263], "valid"], [[6264, 6271], "disallowed"], [[6272, 6313], "valid"], [[6314, 6314], "valid"], [[6315, 6319], "disallowed"], [[6320, 6389], "valid"], [[6390, 6399], "disallowed"], [[6400, 6428], "valid"], [[6429, 6430], "valid"], [[6431, 6431], "disallowed"], [[6432, 6443], "valid"], [[6444, 6447], "disallowed"], [[6448, 6459], "valid"], [[6460, 6463], "disallowed"], [[6464, 6464], "valid", [], "NV8"], [[6465, 6467], "disallowed"], [[6468, 6469], "valid", [], "NV8"], [[6470, 6509], "valid"], [[6510, 6511], "disallowed"], [[6512, 6516], "valid"], [[6517, 6527], "disallowed"], [[6528, 6569], "valid"], [[6570, 6571], "valid"], [[6572, 6575], "disallowed"], [[6576, 6601], "valid"], [[6602, 6607], "disallowed"], [[6608, 6617], "valid"], [[6618, 6618], "valid", [], "XV8"], [[6619, 6621], "disallowed"], [[6622, 6623], "valid", [], "NV8"], [[6624, 6655], "valid", [], "NV8"], [[6656, 6683], "valid"], [[6684, 6685], "disallowed"], [[6686, 6687], "valid", [], "NV8"], [[6688, 6750], "valid"], [[6751, 6751], "disallowed"], [[6752, 6780], "valid"], [[6781, 6782], "disallowed"], [[6783, 6793], "valid"], [[6794, 6799], "disallowed"], [[6800, 6809], "valid"], [[6810, 6815], "disallowed"], [[6816, 6822], "valid", [], "NV8"], [[6823, 6823], "valid"], [[6824, 6829], "valid", [], "NV8"], [[6830, 6831], "disallowed"], [[6832, 6845], "valid"], [[6846, 6846], "valid", [], "NV8"], [[6847, 6911], "disallowed"], [[6912, 6987], "valid"], [[6988, 6991], "disallowed"], [[6992, 7001], "valid"], [[7002, 7018], "valid", [], "NV8"], [[7019, 7027], "valid"], [[7028, 7036], "valid", [], "NV8"], [[7037, 7039], "disallowed"], [[7040, 7082], "valid"], [[7083, 7085], "valid"], [[7086, 7097], "valid"], [[7098, 7103], "valid"], [[7104, 7155], "valid"], [[7156, 7163], "disallowed"], [[7164, 7167], "valid", [], "NV8"], [[7168, 7223], "valid"], [[7224, 7226], "disallowed"], [[7227, 7231], "valid", [], "NV8"], [[7232, 7241], "valid"], [[7242, 7244], "disallowed"], [[7245, 7293], "valid"], [[7294, 7295], "valid", [], "NV8"], [[7296, 7359], "disallowed"], [[7360, 7367], "valid", [], "NV8"], [[7368, 7375], "disallowed"], [[7376, 7378], "valid"], [[7379, 7379], "valid", [], "NV8"], [[7380, 7410], "valid"], [[7411, 7414], "valid"], [[7415, 7415], "disallowed"], [[7416, 7417], "valid"], [[7418, 7423], "disallowed"], [[7424, 7467], "valid"], [[7468, 7468], "mapped", [97]], [[7469, 7469], "mapped", [230]], [[7470, 7470], "mapped", [98]], [[7471, 7471], "valid"], [[7472, 7472], "mapped", [100]], [[7473, 7473], "mapped", [101]], [[7474, 7474], "mapped", [477]], [[7475, 7475], "mapped", [103]], [[7476, 7476], "mapped", [104]], [[7477, 7477], "mapped", [105]], [[7478, 7478], "mapped", [106]], [[7479, 7479], "mapped", [107]], [[7480, 7480], "mapped", [108]], [[7481, 7481], "mapped", [109]], [[7482, 7482], "mapped", [110]], [[7483, 7483], "valid"], [[7484, 7484], "mapped", [111]], [[7485, 7485], "mapped", [547]], [[7486, 7486], "mapped", [112]], [[7487, 7487], "mapped", [114]], [[7488, 7488], "mapped", [116]], [[7489, 7489], "mapped", [117]], [[7490, 7490], "mapped", [119]], [[7491, 7491], "mapped", [97]], [[7492, 7492], "mapped", [592]], [[7493, 7493], "mapped", [593]], [[7494, 7494], "mapped", [7426]], [[7495, 7495], "mapped", [98]], [[7496, 7496], "mapped", [100]], [[7497, 7497], "mapped", [101]], [[7498, 7498], "mapped", [601]], [[7499, 7499], "mapped", [603]], [[7500, 7500], "mapped", [604]], [[7501, 7501], "mapped", [103]], [[7502, 7502], "valid"], [[7503, 7503], "mapped", [107]], [[7504, 7504], "mapped", [109]], [[7505, 7505], "mapped", [331]], [[7506, 7506], "mapped", [111]], [[7507, 7507], "mapped", [596]], [[7508, 7508], "mapped", [7446]], [[7509, 7509], "mapped", [7447]], [[7510, 7510], "mapped", [112]], [[7511, 7511], "mapped", [116]], [[7512, 7512], "mapped", [117]], [[7513, 7513], "mapped", [7453]], [[7514, 7514], "mapped", [623]], [[7515, 7515], "mapped", [118]], [[7516, 7516], "mapped", [7461]], [[7517, 7517], "mapped", [946]], [[7518, 7518], "mapped", [947]], [[7519, 7519], "mapped", [948]], [[7520, 7520], "mapped", [966]], [[7521, 7521], "mapped", [967]], [[7522, 7522], "mapped", [105]], [[7523, 7523], "mapped", [114]], [[7524, 7524], "mapped", [117]], [[7525, 7525], "mapped", [118]], [[7526, 7526], "mapped", [946]], [[7527, 7527], "mapped", [947]], [[7528, 7528], "mapped", [961]], [[7529, 7529], "mapped", [966]], [[7530, 7530], "mapped", [967]], [[7531, 7531], "valid"], [[7532, 7543], "valid"], [[7544, 7544], "mapped", [1085]], [[7545, 7578], "valid"], [[7579, 7579], "mapped", [594]], [[7580, 7580], "mapped", [99]], [[7581, 7581], "mapped", [597]], [[7582, 7582], "mapped", [240]], [[7583, 7583], "mapped", [604]], [[7584, 7584], "mapped", [102]], [[7585, 7585], "mapped", [607]], [[7586, 7586], "mapped", [609]], [[7587, 7587], "mapped", [613]], [[7588, 7588], "mapped", [616]], [[7589, 7589], "mapped", [617]], [[7590, 7590], "mapped", [618]], [[7591, 7591], "mapped", [7547]], [[7592, 7592], "mapped", [669]], [[7593, 7593], "mapped", [621]], [[7594, 7594], "mapped", [7557]], [[7595, 7595], "mapped", [671]], [[7596, 7596], "mapped", [625]], [[7597, 7597], "mapped", [624]], [[7598, 7598], "mapped", [626]], [[7599, 7599], "mapped", [627]], [[7600, 7600], "mapped", [628]], [[7601, 7601], "mapped", [629]], [[7602, 7602], "mapped", [632]], [[7603, 7603], "mapped", [642]], [[7604, 7604], "mapped", [643]], [[7605, 7605], "mapped", [427]], [[7606, 7606], "mapped", [649]], [[7607, 7607], "mapped", [650]], [[7608, 7608], "mapped", [7452]], [[7609, 7609], "mapped", [651]], [[7610, 7610], "mapped", [652]], [[7611, 7611], "mapped", [122]], [[7612, 7612], "mapped", [656]], [[7613, 7613], "mapped", [657]], [[7614, 7614], "mapped", [658]], [[7615, 7615], "mapped", [952]], [[7616, 7619], "valid"], [[7620, 7626], "valid"], [[7627, 7654], "valid"], [[7655, 7669], "valid"], [[7670, 7675], "disallowed"], [[7676, 7676], "valid"], [[7677, 7677], "valid"], [[7678, 7679], "valid"], [[7680, 7680], "mapped", [7681]], [[7681, 7681], "valid"], [[7682, 7682], "mapped", [7683]], [[7683, 7683], "valid"], [[7684, 7684], "mapped", [7685]], [[7685, 7685], "valid"], [[7686, 7686], "mapped", [7687]], [[7687, 7687], "valid"], [[7688, 7688], "mapped", [7689]], [[7689, 7689], "valid"], [[7690, 7690], "mapped", [7691]], [[7691, 7691], "valid"], [[7692, 7692], "mapped", [7693]], [[7693, 7693], "valid"], [[7694, 7694], "mapped", [7695]], [[7695, 7695], "valid"], [[7696, 7696], "mapped", [7697]], [[7697, 7697], "valid"], [[7698, 7698], "mapped", [7699]], [[7699, 7699], "valid"], [[7700, 7700], "mapped", [7701]], [[7701, 7701], "valid"], [[7702, 7702], "mapped", [7703]], [[7703, 7703], "valid"], [[7704, 7704], "mapped", [7705]], [[7705, 7705], "valid"], [[7706, 7706], "mapped", [7707]], [[7707, 7707], "valid"], [[7708, 7708], "mapped", [7709]], [[7709, 7709], "valid"], [[7710, 7710], "mapped", [7711]], [[7711, 7711], "valid"], [[7712, 7712], "mapped", [7713]], [[7713, 7713], "valid"], [[7714, 7714], "mapped", [7715]], [[7715, 7715], "valid"], [[7716, 7716], "mapped", [7717]], [[7717, 7717], "valid"], [[7718, 7718], "mapped", [7719]], [[7719, 7719], "valid"], [[7720, 7720], "mapped", [7721]], [[7721, 7721], "valid"], [[7722, 7722], "mapped", [7723]], [[7723, 7723], "valid"], [[7724, 7724], "mapped", [7725]], [[7725, 7725], "valid"], [[7726, 7726], "mapped", [7727]], [[7727, 7727], "valid"], [[7728, 7728], "mapped", [7729]], [[7729, 7729], "valid"], [[7730, 7730], "mapped", [7731]], [[7731, 7731], "valid"], [[7732, 7732], "mapped", [7733]], [[7733, 7733], "valid"], [[7734, 7734], "mapped", [7735]], [[7735, 7735], "valid"], [[7736, 7736], "mapped", [7737]], [[7737, 7737], "valid"], [[7738, 7738], "mapped", [7739]], [[7739, 7739], "valid"], [[7740, 7740], "mapped", [7741]], [[7741, 7741], "valid"], [[7742, 7742], "mapped", [7743]], [[7743, 7743], "valid"], [[7744, 7744], "mapped", [7745]], [[7745, 7745], "valid"], [[7746, 7746], "mapped", [7747]], [[7747, 7747], "valid"], [[7748, 7748], "mapped", [7749]], [[7749, 7749], "valid"], [[7750, 7750], "mapped", [7751]], [[7751, 7751], "valid"], [[7752, 7752], "mapped", [7753]], [[7753, 7753], "valid"], [[7754, 7754], "mapped", [7755]], [[7755, 7755], "valid"], [[7756, 7756], "mapped", [7757]], [[7757, 7757], "valid"], [[7758, 7758], "mapped", [7759]], [[7759, 7759], "valid"], [[7760, 7760], "mapped", [7761]], [[7761, 7761], "valid"], [[7762, 7762], "mapped", [7763]], [[7763, 7763], "valid"], [[7764, 7764], "mapped", [7765]], [[7765, 7765], "valid"], [[7766, 7766], "mapped", [7767]], [[7767, 7767], "valid"], [[7768, 7768], "mapped", [7769]], [[7769, 7769], "valid"], [[7770, 7770], "mapped", [7771]], [[7771, 7771], "valid"], [[7772, 7772], "mapped", [7773]], [[7773, 7773], "valid"], [[7774, 7774], "mapped", [7775]], [[7775, 7775], "valid"], [[7776, 7776], "mapped", [7777]], [[7777, 7777], "valid"], [[7778, 7778], "mapped", [7779]], [[7779, 7779], "valid"], [[7780, 7780], "mapped", [7781]], [[7781, 7781], "valid"], [[7782, 7782], "mapped", [7783]], [[7783, 7783], "valid"], [[7784, 7784], "mapped", [7785]], [[7785, 7785], "valid"], [[7786, 7786], "mapped", [7787]], [[7787, 7787], "valid"], [[7788, 7788], "mapped", [7789]], [[7789, 7789], "valid"], [[7790, 7790], "mapped", [7791]], [[7791, 7791], "valid"], [[7792, 7792], "mapped", [7793]], [[7793, 7793], "valid"], [[7794, 7794], "mapped", [7795]], [[7795, 7795], "valid"], [[7796, 7796], "mapped", [7797]], [[7797, 7797], "valid"], [[7798, 7798], "mapped", [7799]], [[7799, 7799], "valid"], [[7800, 7800], "mapped", [7801]], [[7801, 7801], "valid"], [[7802, 7802], "mapped", [7803]], [[7803, 7803], "valid"], [[7804, 7804], "mapped", [7805]], [[7805, 7805], "valid"], [[7806, 7806], "mapped", [7807]], [[7807, 7807], "valid"], [[7808, 7808], "mapped", [7809]], [[7809, 7809], "valid"], [[7810, 7810], "mapped", [7811]], [[7811, 7811], "valid"], [[7812, 7812], "mapped", [7813]], [[7813, 7813], "valid"], [[7814, 7814], "mapped", [7815]], [[7815, 7815], "valid"], [[7816, 7816], "mapped", [7817]], [[7817, 7817], "valid"], [[7818, 7818], "mapped", [7819]], [[7819, 7819], "valid"], [[7820, 7820], "mapped", [7821]], [[7821, 7821], "valid"], [[7822, 7822], "mapped", [7823]], [[7823, 7823], "valid"], [[7824, 7824], "mapped", [7825]], [[7825, 7825], "valid"], [[7826, 7826], "mapped", [7827]], [[7827, 7827], "valid"], [[7828, 7828], "mapped", [7829]], [[7829, 7833], "valid"], [[7834, 7834], "mapped", [97, 702]], [[7835, 7835], "mapped", [7777]], [[7836, 7837], "valid"], [[7838, 7838], "mapped", [115, 115]], [[7839, 7839], "valid"], [[7840, 7840], "mapped", [7841]], [[7841, 7841], "valid"], [[7842, 7842], "mapped", [7843]], [[7843, 7843], "valid"], [[7844, 7844], "mapped", [7845]], [[7845, 7845], "valid"], [[7846, 7846], "mapped", [7847]], [[7847, 7847], "valid"], [[7848, 7848], "mapped", [7849]], [[7849, 7849], "valid"], [[7850, 7850], "mapped", [7851]], [[7851, 7851], "valid"], [[7852, 7852], "mapped", [7853]], [[7853, 7853], "valid"], [[7854, 7854], "mapped", [7855]], [[7855, 7855], "valid"], [[7856, 7856], "mapped", [7857]], [[7857, 7857], "valid"], [[7858, 7858], "mapped", [7859]], [[7859, 7859], "valid"], [[7860, 7860], "mapped", [7861]], [[7861, 7861], "valid"], [[7862, 7862], "mapped", [7863]], [[7863, 7863], "valid"], [[7864, 7864], "mapped", [7865]], [[7865, 7865], "valid"], [[7866, 7866], "mapped", [7867]], [[7867, 7867], "valid"], [[7868, 7868], "mapped", [7869]], [[7869, 7869], "valid"], [[7870, 7870], "mapped", [7871]], [[7871, 7871], "valid"], [[7872, 7872], "mapped", [7873]], [[7873, 7873], "valid"], [[7874, 7874], "mapped", [7875]], [[7875, 7875], "valid"], [[7876, 7876], "mapped", [7877]], [[7877, 7877], "valid"], [[7878, 7878], "mapped", [7879]], [[7879, 7879], "valid"], [[7880, 7880], "mapped", [7881]], [[7881, 7881], "valid"], [[7882, 7882], "mapped", [7883]], [[7883, 7883], "valid"], [[7884, 7884], "mapped", [7885]], [[7885, 7885], "valid"], [[7886, 7886], "mapped", [7887]], [[7887, 7887], "valid"], [[7888, 7888], "mapped", [7889]], [[7889, 7889], "valid"], [[7890, 7890], "mapped", [7891]], [[7891, 7891], "valid"], [[7892, 7892], "mapped", [7893]], [[7893, 7893], "valid"], [[7894, 7894], "mapped", [7895]], [[7895, 7895], "valid"], [[7896, 7896], "mapped", [7897]], [[7897, 7897], "valid"], [[7898, 7898], "mapped", [7899]], [[7899, 7899], "valid"], [[7900, 7900], "mapped", [7901]], [[7901, 7901], "valid"], [[7902, 7902], "mapped", [7903]], [[7903, 7903], "valid"], [[7904, 7904], "mapped", [7905]], [[7905, 7905], "valid"], [[7906, 7906], "mapped", [7907]], [[7907, 7907], "valid"], [[7908, 7908], "mapped", [7909]], [[7909, 7909], "valid"], [[7910, 7910], "mapped", [7911]], [[7911, 7911], "valid"], [[7912, 7912], "mapped", [7913]], [[7913, 7913], "valid"], [[7914, 7914], "mapped", [7915]], [[7915, 7915], "valid"], [[7916, 7916], "mapped", [7917]], [[7917, 7917], "valid"], [[7918, 7918], "mapped", [7919]], [[7919, 7919], "valid"], [[7920, 7920], "mapped", [7921]], [[7921, 7921], "valid"], [[7922, 7922], "mapped", [7923]], [[7923, 7923], "valid"], [[7924, 7924], "mapped", [7925]], [[7925, 7925], "valid"], [[7926, 7926], "mapped", [7927]], [[7927, 7927], "valid"], [[7928, 7928], "mapped", [7929]], [[7929, 7929], "valid"], [[7930, 7930], "mapped", [7931]], [[7931, 7931], "valid"], [[7932, 7932], "mapped", [7933]], [[7933, 7933], "valid"], [[7934, 7934], "mapped", [7935]], [[7935, 7935], "valid"], [[7936, 7943], "valid"], [[7944, 7944], "mapped", [7936]], [[7945, 7945], "mapped", [7937]], [[7946, 7946], "mapped", [7938]], [[7947, 7947], "mapped", [7939]], [[7948, 7948], "mapped", [7940]], [[7949, 7949], "mapped", [7941]], [[7950, 7950], "mapped", [7942]], [[7951, 7951], "mapped", [7943]], [[7952, 7957], "valid"], [[7958, 7959], "disallowed"], [[7960, 7960], "mapped", [7952]], [[7961, 7961], "mapped", [7953]], [[7962, 7962], "mapped", [7954]], [[7963, 7963], "mapped", [7955]], [[7964, 7964], "mapped", [7956]], [[7965, 7965], "mapped", [7957]], [[7966, 7967], "disallowed"], [[7968, 7975], "valid"], [[7976, 7976], "mapped", [7968]], [[7977, 7977], "mapped", [7969]], [[7978, 7978], "mapped", [7970]], [[7979, 7979], "mapped", [7971]], [[7980, 7980], "mapped", [7972]], [[7981, 7981], "mapped", [7973]], [[7982, 7982], "mapped", [7974]], [[7983, 7983], "mapped", [7975]], [[7984, 7991], "valid"], [[7992, 7992], "mapped", [7984]], [[7993, 7993], "mapped", [7985]], [[7994, 7994], "mapped", [7986]], [[7995, 7995], "mapped", [7987]], [[7996, 7996], "mapped", [7988]], [[7997, 7997], "mapped", [7989]], [[7998, 7998], "mapped", [7990]], [[7999, 7999], "mapped", [7991]], [[8e3, 8005], "valid"], [[8006, 8007], "disallowed"], [[8008, 8008], "mapped", [8e3]], [[8009, 8009], "mapped", [8001]], [[8010, 8010], "mapped", [8002]], [[8011, 8011], "mapped", [8003]], [[8012, 8012], "mapped", [8004]], [[8013, 8013], "mapped", [8005]], [[8014, 8015], "disallowed"], [[8016, 8023], "valid"], [[8024, 8024], "disallowed"], [[8025, 8025], "mapped", [8017]], [[8026, 8026], "disallowed"], [[8027, 8027], "mapped", [8019]], [[8028, 8028], "disallowed"], [[8029, 8029], "mapped", [8021]], [[8030, 8030], "disallowed"], [[8031, 8031], "mapped", [8023]], [[8032, 8039], "valid"], [[8040, 8040], "mapped", [8032]], [[8041, 8041], "mapped", [8033]], [[8042, 8042], "mapped", [8034]], [[8043, 8043], "mapped", [8035]], [[8044, 8044], "mapped", [8036]], [[8045, 8045], "mapped", [8037]], [[8046, 8046], "mapped", [8038]], [[8047, 8047], "mapped", [8039]], [[8048, 8048], "valid"], [[8049, 8049], "mapped", [940]], [[8050, 8050], "valid"], [[8051, 8051], "mapped", [941]], [[8052, 8052], "valid"], [[8053, 8053], "mapped", [942]], [[8054, 8054], "valid"], [[8055, 8055], "mapped", [943]], [[8056, 8056], "valid"], [[8057, 8057], "mapped", [972]], [[8058, 8058], "valid"], [[8059, 8059], "mapped", [973]], [[8060, 8060], "valid"], [[8061, 8061], "mapped", [974]], [[8062, 8063], "disallowed"], [[8064, 8064], "mapped", [7936, 953]], [[8065, 8065], "mapped", [7937, 953]], [[8066, 8066], "mapped", [7938, 953]], [[8067, 8067], "mapped", [7939, 953]], [[8068, 8068], "mapped", [7940, 953]], [[8069, 8069], "mapped", [7941, 953]], [[8070, 8070], "mapped", [7942, 953]], [[8071, 8071], "mapped", [7943, 953]], [[8072, 8072], "mapped", [7936, 953]], [[8073, 8073], "mapped", [7937, 953]], [[8074, 8074], "mapped", [7938, 953]], [[8075, 8075], "mapped", [7939, 953]], [[8076, 8076], "mapped", [7940, 953]], [[8077, 8077], "mapped", [7941, 953]], [[8078, 8078], "mapped", [7942, 953]], [[8079, 8079], "mapped", [7943, 953]], [[8080, 8080], "mapped", [7968, 953]], [[8081, 8081], "mapped", [7969, 953]], [[8082, 8082], "mapped", [7970, 953]], [[8083, 8083], "mapped", [7971, 953]], [[8084, 8084], "mapped", [7972, 953]], [[8085, 8085], "mapped", [7973, 953]], [[8086, 8086], "mapped", [7974, 953]], [[8087, 8087], "mapped", [7975, 953]], [[8088, 8088], "mapped", [7968, 953]], [[8089, 8089], "mapped", [7969, 953]], [[8090, 8090], "mapped", [7970, 953]], [[8091, 8091], "mapped", [7971, 953]], [[8092, 8092], "mapped", [7972, 953]], [[8093, 8093], "mapped", [7973, 953]], [[8094, 8094], "mapped", [7974, 953]], [[8095, 8095], "mapped", [7975, 953]], [[8096, 8096], "mapped", [8032, 953]], [[8097, 8097], "mapped", [8033, 953]], [[8098, 8098], "mapped", [8034, 953]], [[8099, 8099], "mapped", [8035, 953]], [[8100, 8100], "mapped", [8036, 953]], [[8101, 8101], "mapped", [8037, 953]], [[8102, 8102], "mapped", [8038, 953]], [[8103, 8103], "mapped", [8039, 953]], [[8104, 8104], "mapped", [8032, 953]], [[8105, 8105], "mapped", [8033, 953]], [[8106, 8106], "mapped", [8034, 953]], [[8107, 8107], "mapped", [8035, 953]], [[8108, 8108], "mapped", [8036, 953]], [[8109, 8109], "mapped", [8037, 953]], [[8110, 8110], "mapped", [8038, 953]], [[8111, 8111], "mapped", [8039, 953]], [[8112, 8113], "valid"], [[8114, 8114], "mapped", [8048, 953]], [[8115, 8115], "mapped", [945, 953]], [[8116, 8116], "mapped", [940, 953]], [[8117, 8117], "disallowed"], [[8118, 8118], "valid"], [[8119, 8119], "mapped", [8118, 953]], [[8120, 8120], "mapped", [8112]], [[8121, 8121], "mapped", [8113]], [[8122, 8122], "mapped", [8048]], [[8123, 8123], "mapped", [940]], [[8124, 8124], "mapped", [945, 953]], [[8125, 8125], "disallowed_STD3_mapped", [32, 787]], [[8126, 8126], "mapped", [953]], [[8127, 8127], "disallowed_STD3_mapped", [32, 787]], [[8128, 8128], "disallowed_STD3_mapped", [32, 834]], [[8129, 8129], "disallowed_STD3_mapped", [32, 776, 834]], [[8130, 8130], "mapped", [8052, 953]], [[8131, 8131], "mapped", [951, 953]], [[8132, 8132], "mapped", [942, 953]], [[8133, 8133], "disallowed"], [[8134, 8134], "valid"], [[8135, 8135], "mapped", [8134, 953]], [[8136, 8136], "mapped", [8050]], [[8137, 8137], "mapped", [941]], [[8138, 8138], "mapped", [8052]], [[8139, 8139], "mapped", [942]], [[8140, 8140], "mapped", [951, 953]], [[8141, 8141], "disallowed_STD3_mapped", [32, 787, 768]], [[8142, 8142], "disallowed_STD3_mapped", [32, 787, 769]], [[8143, 8143], "disallowed_STD3_mapped", [32, 787, 834]], [[8144, 8146], "valid"], [[8147, 8147], "mapped", [912]], [[8148, 8149], "disallowed"], [[8150, 8151], "valid"], [[8152, 8152], "mapped", [8144]], [[8153, 8153], "mapped", [8145]], [[8154, 8154], "mapped", [8054]], [[8155, 8155], "mapped", [943]], [[8156, 8156], "disallowed"], [[8157, 8157], "disallowed_STD3_mapped", [32, 788, 768]], [[8158, 8158], "disallowed_STD3_mapped", [32, 788, 769]], [[8159, 8159], "disallowed_STD3_mapped", [32, 788, 834]], [[8160, 8162], "valid"], [[8163, 8163], "mapped", [944]], [[8164, 8167], "valid"], [[8168, 8168], "mapped", [8160]], [[8169, 8169], "mapped", [8161]], [[8170, 8170], "mapped", [8058]], [[8171, 8171], "mapped", [973]], [[8172, 8172], "mapped", [8165]], [[8173, 8173], "disallowed_STD3_mapped", [32, 776, 768]], [[8174, 8174], "disallowed_STD3_mapped", [32, 776, 769]], [[8175, 8175], "disallowed_STD3_mapped", [96]], [[8176, 8177], "disallowed"], [[8178, 8178], "mapped", [8060, 953]], [[8179, 8179], "mapped", [969, 953]], [[8180, 8180], "mapped", [974, 953]], [[8181, 8181], "disallowed"], [[8182, 8182], "valid"], [[8183, 8183], "mapped", [8182, 953]], [[8184, 8184], "mapped", [8056]], [[8185, 8185], "mapped", [972]], [[8186, 8186], "mapped", [8060]], [[8187, 8187], "mapped", [974]], [[8188, 8188], "mapped", [969, 953]], [[8189, 8189], "disallowed_STD3_mapped", [32, 769]], [[8190, 8190], "disallowed_STD3_mapped", [32, 788]], [[8191, 8191], "disallowed"], [[8192, 8202], "disallowed_STD3_mapped", [32]], [[8203, 8203], "ignored"], [[8204, 8205], "deviation", []], [[8206, 8207], "disallowed"], [[8208, 8208], "valid", [], "NV8"], [[8209, 8209], "mapped", [8208]], [[8210, 8214], "valid", [], "NV8"], [[8215, 8215], "disallowed_STD3_mapped", [32, 819]], [[8216, 8227], "valid", [], "NV8"], [[8228, 8230], "disallowed"], [[8231, 8231], "valid", [], "NV8"], [[8232, 8238], "disallowed"], [[8239, 8239], "disallowed_STD3_mapped", [32]], [[8240, 8242], "valid", [], "NV8"], [[8243, 8243], "mapped", [8242, 8242]], [[8244, 8244], "mapped", [8242, 8242, 8242]], [[8245, 8245], "valid", [], "NV8"], [[8246, 8246], "mapped", [8245, 8245]], [[8247, 8247], "mapped", [8245, 8245, 8245]], [[8248, 8251], "valid", [], "NV8"], [[8252, 8252], "disallowed_STD3_mapped", [33, 33]], [[8253, 8253], "valid", [], "NV8"], [[8254, 8254], "disallowed_STD3_mapped", [32, 773]], [[8255, 8262], "valid", [], "NV8"], [[8263, 8263], "disallowed_STD3_mapped", [63, 63]], [[8264, 8264], "disallowed_STD3_mapped", [63, 33]], [[8265, 8265], "disallowed_STD3_mapped", [33, 63]], [[8266, 8269], "valid", [], "NV8"], [[8270, 8274], "valid", [], "NV8"], [[8275, 8276], "valid", [], "NV8"], [[8277, 8278], "valid", [], "NV8"], [[8279, 8279], "mapped", [8242, 8242, 8242, 8242]], [[8280, 8286], "valid", [], "NV8"], [[8287, 8287], "disallowed_STD3_mapped", [32]], [[8288, 8288], "ignored"], [[8289, 8291], "disallowed"], [[8292, 8292], "ignored"], [[8293, 8293], "disallowed"], [[8294, 8297], "disallowed"], [[8298, 8303], "disallowed"], [[8304, 8304], "mapped", [48]], [[8305, 8305], "mapped", [105]], [[8306, 8307], "disallowed"], [[8308, 8308], "mapped", [52]], [[8309, 8309], "mapped", [53]], [[8310, 8310], "mapped", [54]], [[8311, 8311], "mapped", [55]], [[8312, 8312], "mapped", [56]], [[8313, 8313], "mapped", [57]], [[8314, 8314], "disallowed_STD3_mapped", [43]], [[8315, 8315], "mapped", [8722]], [[8316, 8316], "disallowed_STD3_mapped", [61]], [[8317, 8317], "disallowed_STD3_mapped", [40]], [[8318, 8318], "disallowed_STD3_mapped", [41]], [[8319, 8319], "mapped", [110]], [[8320, 8320], "mapped", [48]], [[8321, 8321], "mapped", [49]], [[8322, 8322], "mapped", [50]], [[8323, 8323], "mapped", [51]], [[8324, 8324], "mapped", [52]], [[8325, 8325], "mapped", [53]], [[8326, 8326], "mapped", [54]], [[8327, 8327], "mapped", [55]], [[8328, 8328], "mapped", [56]], [[8329, 8329], "mapped", [57]], [[8330, 8330], "disallowed_STD3_mapped", [43]], [[8331, 8331], "mapped", [8722]], [[8332, 8332], "disallowed_STD3_mapped", [61]], [[8333, 8333], "disallowed_STD3_mapped", [40]], [[8334, 8334], "disallowed_STD3_mapped", [41]], [[8335, 8335], "disallowed"], [[8336, 8336], "mapped", [97]], [[8337, 8337], "mapped", [101]], [[8338, 8338], "mapped", [111]], [[8339, 8339], "mapped", [120]], [[8340, 8340], "mapped", [601]], [[8341, 8341], "mapped", [104]], [[8342, 8342], "mapped", [107]], [[8343, 8343], "mapped", [108]], [[8344, 8344], "mapped", [109]], [[8345, 8345], "mapped", [110]], [[8346, 8346], "mapped", [112]], [[8347, 8347], "mapped", [115]], [[8348, 8348], "mapped", [116]], [[8349, 8351], "disallowed"], [[8352, 8359], "valid", [], "NV8"], [[8360, 8360], "mapped", [114, 115]], [[8361, 8362], "valid", [], "NV8"], [[8363, 8363], "valid", [], "NV8"], [[8364, 8364], "valid", [], "NV8"], [[8365, 8367], "valid", [], "NV8"], [[8368, 8369], "valid", [], "NV8"], [[8370, 8373], "valid", [], "NV8"], [[8374, 8376], "valid", [], "NV8"], [[8377, 8377], "valid", [], "NV8"], [[8378, 8378], "valid", [], "NV8"], [[8379, 8381], "valid", [], "NV8"], [[8382, 8382], "valid", [], "NV8"], [[8383, 8399], "disallowed"], [[8400, 8417], "valid", [], "NV8"], [[8418, 8419], "valid", [], "NV8"], [[8420, 8426], "valid", [], "NV8"], [[8427, 8427], "valid", [], "NV8"], [[8428, 8431], "valid", [], "NV8"], [[8432, 8432], "valid", [], "NV8"], [[8433, 8447], "disallowed"], [[8448, 8448], "disallowed_STD3_mapped", [97, 47, 99]], [[8449, 8449], "disallowed_STD3_mapped", [97, 47, 115]], [[8450, 8450], "mapped", [99]], [[8451, 8451], "mapped", [176, 99]], [[8452, 8452], "valid", [], "NV8"], [[8453, 8453], "disallowed_STD3_mapped", [99, 47, 111]], [[8454, 8454], "disallowed_STD3_mapped", [99, 47, 117]], [[8455, 8455], "mapped", [603]], [[8456, 8456], "valid", [], "NV8"], [[8457, 8457], "mapped", [176, 102]], [[8458, 8458], "mapped", [103]], [[8459, 8462], "mapped", [104]], [[8463, 8463], "mapped", [295]], [[8464, 8465], "mapped", [105]], [[8466, 8467], "mapped", [108]], [[8468, 8468], "valid", [], "NV8"], [[8469, 8469], "mapped", [110]], [[8470, 8470], "mapped", [110, 111]], [[8471, 8472], "valid", [], "NV8"], [[8473, 8473], "mapped", [112]], [[8474, 8474], "mapped", [113]], [[8475, 8477], "mapped", [114]], [[8478, 8479], "valid", [], "NV8"], [[8480, 8480], "mapped", [115, 109]], [[8481, 8481], "mapped", [116, 101, 108]], [[8482, 8482], "mapped", [116, 109]], [[8483, 8483], "valid", [], "NV8"], [[8484, 8484], "mapped", [122]], [[8485, 8485], "valid", [], "NV8"], [[8486, 8486], "mapped", [969]], [[8487, 8487], "valid", [], "NV8"], [[8488, 8488], "mapped", [122]], [[8489, 8489], "valid", [], "NV8"], [[8490, 8490], "mapped", [107]], [[8491, 8491], "mapped", [229]], [[8492, 8492], "mapped", [98]], [[8493, 8493], "mapped", [99]], [[8494, 8494], "valid", [], "NV8"], [[8495, 8496], "mapped", [101]], [[8497, 8497], "mapped", [102]], [[8498, 8498], "disallowed"], [[8499, 8499], "mapped", [109]], [[8500, 8500], "mapped", [111]], [[8501, 8501], "mapped", [1488]], [[8502, 8502], "mapped", [1489]], [[8503, 8503], "mapped", [1490]], [[8504, 8504], "mapped", [1491]], [[8505, 8505], "mapped", [105]], [[8506, 8506], "valid", [], "NV8"], [[8507, 8507], "mapped", [102, 97, 120]], [[8508, 8508], "mapped", [960]], [[8509, 8510], "mapped", [947]], [[8511, 8511], "mapped", [960]], [[8512, 8512], "mapped", [8721]], [[8513, 8516], "valid", [], "NV8"], [[8517, 8518], "mapped", [100]], [[8519, 8519], "mapped", [101]], [[8520, 8520], "mapped", [105]], [[8521, 8521], "mapped", [106]], [[8522, 8523], "valid", [], "NV8"], [[8524, 8524], "valid", [], "NV8"], [[8525, 8525], "valid", [], "NV8"], [[8526, 8526], "valid"], [[8527, 8527], "valid", [], "NV8"], [[8528, 8528], "mapped", [49, 8260, 55]], [[8529, 8529], "mapped", [49, 8260, 57]], [[8530, 8530], "mapped", [49, 8260, 49, 48]], [[8531, 8531], "mapped", [49, 8260, 51]], [[8532, 8532], "mapped", [50, 8260, 51]], [[8533, 8533], "mapped", [49, 8260, 53]], [[8534, 8534], "mapped", [50, 8260, 53]], [[8535, 8535], "mapped", [51, 8260, 53]], [[8536, 8536], "mapped", [52, 8260, 53]], [[8537, 8537], "mapped", [49, 8260, 54]], [[8538, 8538], "mapped", [53, 8260, 54]], [[8539, 8539], "mapped", [49, 8260, 56]], [[8540, 8540], "mapped", [51, 8260, 56]], [[8541, 8541], "mapped", [53, 8260, 56]], [[8542, 8542], "mapped", [55, 8260, 56]], [[8543, 8543], "mapped", [49, 8260]], [[8544, 8544], "mapped", [105]], [[8545, 8545], "mapped", [105, 105]], [[8546, 8546], "mapped", [105, 105, 105]], [[8547, 8547], "mapped", [105, 118]], [[8548, 8548], "mapped", [118]], [[8549, 8549], "mapped", [118, 105]], [[8550, 8550], "mapped", [118, 105, 105]], [[8551, 8551], "mapped", [118, 105, 105, 105]], [[8552, 8552], "mapped", [105, 120]], [[8553, 8553], "mapped", [120]], [[8554, 8554], "mapped", [120, 105]], [[8555, 8555], "mapped", [120, 105, 105]], [[8556, 8556], "mapped", [108]], [[8557, 8557], "mapped", [99]], [[8558, 8558], "mapped", [100]], [[8559, 8559], "mapped", [109]], [[8560, 8560], "mapped", [105]], [[8561, 8561], "mapped", [105, 105]], [[8562, 8562], "mapped", [105, 105, 105]], [[8563, 8563], "mapped", [105, 118]], [[8564, 8564], "mapped", [118]], [[8565, 8565], "mapped", [118, 105]], [[8566, 8566], "mapped", [118, 105, 105]], [[8567, 8567], "mapped", [118, 105, 105, 105]], [[8568, 8568], "mapped", [105, 120]], [[8569, 8569], "mapped", [120]], [[8570, 8570], "mapped", [120, 105]], [[8571, 8571], "mapped", [120, 105, 105]], [[8572, 8572], "mapped", [108]], [[8573, 8573], "mapped", [99]], [[8574, 8574], "mapped", [100]], [[8575, 8575], "mapped", [109]], [[8576, 8578], "valid", [], "NV8"], [[8579, 8579], "disallowed"], [[8580, 8580], "valid"], [[8581, 8584], "valid", [], "NV8"], [[8585, 8585], "mapped", [48, 8260, 51]], [[8586, 8587], "valid", [], "NV8"], [[8588, 8591], "disallowed"], [[8592, 8682], "valid", [], "NV8"], [[8683, 8691], "valid", [], "NV8"], [[8692, 8703], "valid", [], "NV8"], [[8704, 8747], "valid", [], "NV8"], [[8748, 8748], "mapped", [8747, 8747]], [[8749, 8749], "mapped", [8747, 8747, 8747]], [[8750, 8750], "valid", [], "NV8"], [[8751, 8751], "mapped", [8750, 8750]], [[8752, 8752], "mapped", [8750, 8750, 8750]], [[8753, 8799], "valid", [], "NV8"], [[8800, 8800], "disallowed_STD3_valid"], [[8801, 8813], "valid", [], "NV8"], [[8814, 8815], "disallowed_STD3_valid"], [[8816, 8945], "valid", [], "NV8"], [[8946, 8959], "valid", [], "NV8"], [[8960, 8960], "valid", [], "NV8"], [[8961, 8961], "valid", [], "NV8"], [[8962, 9e3], "valid", [], "NV8"], [[9001, 9001], "mapped", [12296]], [[9002, 9002], "mapped", [12297]], [[9003, 9082], "valid", [], "NV8"], [[9083, 9083], "valid", [], "NV8"], [[9084, 9084], "valid", [], "NV8"], [[9085, 9114], "valid", [], "NV8"], [[9115, 9166], "valid", [], "NV8"], [[9167, 9168], "valid", [], "NV8"], [[9169, 9179], "valid", [], "NV8"], [[9180, 9191], "valid", [], "NV8"], [[9192, 9192], "valid", [], "NV8"], [[9193, 9203], "valid", [], "NV8"], [[9204, 9210], "valid", [], "NV8"], [[9211, 9215], "disallowed"], [[9216, 9252], "valid", [], "NV8"], [[9253, 9254], "valid", [], "NV8"], [[9255, 9279], "disallowed"], [[9280, 9290], "valid", [], "NV8"], [[9291, 9311], "disallowed"], [[9312, 9312], "mapped", [49]], [[9313, 9313], "mapped", [50]], [[9314, 9314], "mapped", [51]], [[9315, 9315], "mapped", [52]], [[9316, 9316], "mapped", [53]], [[9317, 9317], "mapped", [54]], [[9318, 9318], "mapped", [55]], [[9319, 9319], "mapped", [56]], [[9320, 9320], "mapped", [57]], [[9321, 9321], "mapped", [49, 48]], [[9322, 9322], "mapped", [49, 49]], [[9323, 9323], "mapped", [49, 50]], [[9324, 9324], "mapped", [49, 51]], [[9325, 9325], "mapped", [49, 52]], [[9326, 9326], "mapped", [49, 53]], [[9327, 9327], "mapped", [49, 54]], [[9328, 9328], "mapped", [49, 55]], [[9329, 9329], "mapped", [49, 56]], [[9330, 9330], "mapped", [49, 57]], [[9331, 9331], "mapped", [50, 48]], [[9332, 9332], "disallowed_STD3_mapped", [40, 49, 41]], [[9333, 9333], "disallowed_STD3_mapped", [40, 50, 41]], [[9334, 9334], "disallowed_STD3_mapped", [40, 51, 41]], [[9335, 9335], "disallowed_STD3_mapped", [40, 52, 41]], [[9336, 9336], "disallowed_STD3_mapped", [40, 53, 41]], [[9337, 9337], "disallowed_STD3_mapped", [40, 54, 41]], [[9338, 9338], "disallowed_STD3_mapped", [40, 55, 41]], [[9339, 9339], "disallowed_STD3_mapped", [40, 56, 41]], [[9340, 9340], "disallowed_STD3_mapped", [40, 57, 41]], [[9341, 9341], "disallowed_STD3_mapped", [40, 49, 48, 41]], [[9342, 9342], "disallowed_STD3_mapped", [40, 49, 49, 41]], [[9343, 9343], "disallowed_STD3_mapped", [40, 49, 50, 41]], [[9344, 9344], "disallowed_STD3_mapped", [40, 49, 51, 41]], [[9345, 9345], "disallowed_STD3_mapped", [40, 49, 52, 41]], [[9346, 9346], "disallowed_STD3_mapped", [40, 49, 53, 41]], [[9347, 9347], "disallowed_STD3_mapped", [40, 49, 54, 41]], [[9348, 9348], "disallowed_STD3_mapped", [40, 49, 55, 41]], [[9349, 9349], "disallowed_STD3_mapped", [40, 49, 56, 41]], [[9350, 9350], "disallowed_STD3_mapped", [40, 49, 57, 41]], [[9351, 9351], "disallowed_STD3_mapped", [40, 50, 48, 41]], [[9352, 9371], "disallowed"], [[9372, 9372], "disallowed_STD3_mapped", [40, 97, 41]], [[9373, 9373], "disallowed_STD3_mapped", [40, 98, 41]], [[9374, 9374], "disallowed_STD3_mapped", [40, 99, 41]], [[9375, 9375], "disallowed_STD3_mapped", [40, 100, 41]], [[9376, 9376], "disallowed_STD3_mapped", [40, 101, 41]], [[9377, 9377], "disallowed_STD3_mapped", [40, 102, 41]], [[9378, 9378], "disallowed_STD3_mapped", [40, 103, 41]], [[9379, 9379], "disallowed_STD3_mapped", [40, 104, 41]], [[9380, 9380], "disallowed_STD3_mapped", [40, 105, 41]], [[9381, 9381], "disallowed_STD3_mapped", [40, 106, 41]], [[9382, 9382], "disallowed_STD3_mapped", [40, 107, 41]], [[9383, 9383], "disallowed_STD3_mapped", [40, 108, 41]], [[9384, 9384], "disallowed_STD3_mapped", [40, 109, 41]], [[9385, 9385], "disallowed_STD3_mapped", [40, 110, 41]], [[9386, 9386], "disallowed_STD3_mapped", [40, 111, 41]], [[9387, 9387], "disallowed_STD3_mapped", [40, 112, 41]], [[9388, 9388], "disallowed_STD3_mapped", [40, 113, 41]], [[9389, 9389], "disallowed_STD3_mapped", [40, 114, 41]], [[9390, 9390], "disallowed_STD3_mapped", [40, 115, 41]], [[9391, 9391], "disallowed_STD3_mapped", [40, 116, 41]], [[9392, 9392], "disallowed_STD3_mapped", [40, 117, 41]], [[9393, 9393], "disallowed_STD3_mapped", [40, 118, 41]], [[9394, 9394], "disallowed_STD3_mapped", [40, 119, 41]], [[9395, 9395], "disallowed_STD3_mapped", [40, 120, 41]], [[9396, 9396], "disallowed_STD3_mapped", [40, 121, 41]], [[9397, 9397], "disallowed_STD3_mapped", [40, 122, 41]], [[9398, 9398], "mapped", [97]], [[9399, 9399], "mapped", [98]], [[9400, 9400], "mapped", [99]], [[9401, 9401], "mapped", [100]], [[9402, 9402], "mapped", [101]], [[9403, 9403], "mapped", [102]], [[9404, 9404], "mapped", [103]], [[9405, 9405], "mapped", [104]], [[9406, 9406], "mapped", [105]], [[9407, 9407], "mapped", [106]], [[9408, 9408], "mapped", [107]], [[9409, 9409], "mapped", [108]], [[9410, 9410], "mapped", [109]], [[9411, 9411], "mapped", [110]], [[9412, 9412], "mapped", [111]], [[9413, 9413], "mapped", [112]], [[9414, 9414], "mapped", [113]], [[9415, 9415], "mapped", [114]], [[9416, 9416], "mapped", [115]], [[9417, 9417], "mapped", [116]], [[9418, 9418], "mapped", [117]], [[9419, 9419], "mapped", [118]], [[9420, 9420], "mapped", [119]], [[9421, 9421], "mapped", [120]], [[9422, 9422], "mapped", [121]], [[9423, 9423], "mapped", [122]], [[9424, 9424], "mapped", [97]], [[9425, 9425], "mapped", [98]], [[9426, 9426], "mapped", [99]], [[9427, 9427], "mapped", [100]], [[9428, 9428], "mapped", [101]], [[9429, 9429], "mapped", [102]], [[9430, 9430], "mapped", [103]], [[9431, 9431], "mapped", [104]], [[9432, 9432], "mapped", [105]], [[9433, 9433], "mapped", [106]], [[9434, 9434], "mapped", [107]], [[9435, 9435], "mapped", [108]], [[9436, 9436], "mapped", [109]], [[9437, 9437], "mapped", [110]], [[9438, 9438], "mapped", [111]], [[9439, 9439], "mapped", [112]], [[9440, 9440], "mapped", [113]], [[9441, 9441], "mapped", [114]], [[9442, 9442], "mapped", [115]], [[9443, 9443], "mapped", [116]], [[9444, 9444], "mapped", [117]], [[9445, 9445], "mapped", [118]], [[9446, 9446], "mapped", [119]], [[9447, 9447], "mapped", [120]], [[9448, 9448], "mapped", [121]], [[9449, 9449], "mapped", [122]], [[9450, 9450], "mapped", [48]], [[9451, 9470], "valid", [], "NV8"], [[9471, 9471], "valid", [], "NV8"], [[9472, 9621], "valid", [], "NV8"], [[9622, 9631], "valid", [], "NV8"], [[9632, 9711], "valid", [], "NV8"], [[9712, 9719], "valid", [], "NV8"], [[9720, 9727], "valid", [], "NV8"], [[9728, 9747], "valid", [], "NV8"], [[9748, 9749], "valid", [], "NV8"], [[9750, 9751], "valid", [], "NV8"], [[9752, 9752], "valid", [], "NV8"], [[9753, 9753], "valid", [], "NV8"], [[9754, 9839], "valid", [], "NV8"], [[9840, 9841], "valid", [], "NV8"], [[9842, 9853], "valid", [], "NV8"], [[9854, 9855], "valid", [], "NV8"], [[9856, 9865], "valid", [], "NV8"], [[9866, 9873], "valid", [], "NV8"], [[9874, 9884], "valid", [], "NV8"], [[9885, 9885], "valid", [], "NV8"], [[9886, 9887], "valid", [], "NV8"], [[9888, 9889], "valid", [], "NV8"], [[9890, 9905], "valid", [], "NV8"], [[9906, 9906], "valid", [], "NV8"], [[9907, 9916], "valid", [], "NV8"], [[9917, 9919], "valid", [], "NV8"], [[9920, 9923], "valid", [], "NV8"], [[9924, 9933], "valid", [], "NV8"], [[9934, 9934], "valid", [], "NV8"], [[9935, 9953], "valid", [], "NV8"], [[9954, 9954], "valid", [], "NV8"], [[9955, 9955], "valid", [], "NV8"], [[9956, 9959], "valid", [], "NV8"], [[9960, 9983], "valid", [], "NV8"], [[9984, 9984], "valid", [], "NV8"], [[9985, 9988], "valid", [], "NV8"], [[9989, 9989], "valid", [], "NV8"], [[9990, 9993], "valid", [], "NV8"], [[9994, 9995], "valid", [], "NV8"], [[9996, 10023], "valid", [], "NV8"], [[10024, 10024], "valid", [], "NV8"], [[10025, 10059], "valid", [], "NV8"], [[10060, 10060], "valid", [], "NV8"], [[10061, 10061], "valid", [], "NV8"], [[10062, 10062], "valid", [], "NV8"], [[10063, 10066], "valid", [], "NV8"], [[10067, 10069], "valid", [], "NV8"], [[10070, 10070], "valid", [], "NV8"], [[10071, 10071], "valid", [], "NV8"], [[10072, 10078], "valid", [], "NV8"], [[10079, 10080], "valid", [], "NV8"], [[10081, 10087], "valid", [], "NV8"], [[10088, 10101], "valid", [], "NV8"], [[10102, 10132], "valid", [], "NV8"], [[10133, 10135], "valid", [], "NV8"], [[10136, 10159], "valid", [], "NV8"], [[10160, 10160], "valid", [], "NV8"], [[10161, 10174], "valid", [], "NV8"], [[10175, 10175], "valid", [], "NV8"], [[10176, 10182], "valid", [], "NV8"], [[10183, 10186], "valid", [], "NV8"], [[10187, 10187], "valid", [], "NV8"], [[10188, 10188], "valid", [], "NV8"], [[10189, 10189], "valid", [], "NV8"], [[10190, 10191], "valid", [], "NV8"], [[10192, 10219], "valid", [], "NV8"], [[10220, 10223], "valid", [], "NV8"], [[10224, 10239], "valid", [], "NV8"], [[10240, 10495], "valid", [], "NV8"], [[10496, 10763], "valid", [], "NV8"], [[10764, 10764], "mapped", [8747, 8747, 8747, 8747]], [[10765, 10867], "valid", [], "NV8"], [[10868, 10868], "disallowed_STD3_mapped", [58, 58, 61]], [[10869, 10869], "disallowed_STD3_mapped", [61, 61]], [[10870, 10870], "disallowed_STD3_mapped", [61, 61, 61]], [[10871, 10971], "valid", [], "NV8"], [[10972, 10972], "mapped", [10973, 824]], [[10973, 11007], "valid", [], "NV8"], [[11008, 11021], "valid", [], "NV8"], [[11022, 11027], "valid", [], "NV8"], [[11028, 11034], "valid", [], "NV8"], [[11035, 11039], "valid", [], "NV8"], [[11040, 11043], "valid", [], "NV8"], [[11044, 11084], "valid", [], "NV8"], [[11085, 11087], "valid", [], "NV8"], [[11088, 11092], "valid", [], "NV8"], [[11093, 11097], "valid", [], "NV8"], [[11098, 11123], "valid", [], "NV8"], [[11124, 11125], "disallowed"], [[11126, 11157], "valid", [], "NV8"], [[11158, 11159], "disallowed"], [[11160, 11193], "valid", [], "NV8"], [[11194, 11196], "disallowed"], [[11197, 11208], "valid", [], "NV8"], [[11209, 11209], "disallowed"], [[11210, 11217], "valid", [], "NV8"], [[11218, 11243], "disallowed"], [[11244, 11247], "valid", [], "NV8"], [[11248, 11263], "disallowed"], [[11264, 11264], "mapped", [11312]], [[11265, 11265], "mapped", [11313]], [[11266, 11266], "mapped", [11314]], [[11267, 11267], "mapped", [11315]], [[11268, 11268], "mapped", [11316]], [[11269, 11269], "mapped", [11317]], [[11270, 11270], "mapped", [11318]], [[11271, 11271], "mapped", [11319]], [[11272, 11272], "mapped", [11320]], [[11273, 11273], "mapped", [11321]], [[11274, 11274], "mapped", [11322]], [[11275, 11275], "mapped", [11323]], [[11276, 11276], "mapped", [11324]], [[11277, 11277], "mapped", [11325]], [[11278, 11278], "mapped", [11326]], [[11279, 11279], "mapped", [11327]], [[11280, 11280], "mapped", [11328]], [[11281, 11281], "mapped", [11329]], [[11282, 11282], "mapped", [11330]], [[11283, 11283], "mapped", [11331]], [[11284, 11284], "mapped", [11332]], [[11285, 11285], "mapped", [11333]], [[11286, 11286], "mapped", [11334]], [[11287, 11287], "mapped", [11335]], [[11288, 11288], "mapped", [11336]], [[11289, 11289], "mapped", [11337]], [[11290, 11290], "mapped", [11338]], [[11291, 11291], "mapped", [11339]], [[11292, 11292], "mapped", [11340]], [[11293, 11293], "mapped", [11341]], [[11294, 11294], "mapped", [11342]], [[11295, 11295], "mapped", [11343]], [[11296, 11296], "mapped", [11344]], [[11297, 11297], "mapped", [11345]], [[11298, 11298], "mapped", [11346]], [[11299, 11299], "mapped", [11347]], [[11300, 11300], "mapped", [11348]], [[11301, 11301], "mapped", [11349]], [[11302, 11302], "mapped", [11350]], [[11303, 11303], "mapped", [11351]], [[11304, 11304], "mapped", [11352]], [[11305, 11305], "mapped", [11353]], [[11306, 11306], "mapped", [11354]], [[11307, 11307], "mapped", [11355]], [[11308, 11308], "mapped", [11356]], [[11309, 11309], "mapped", [11357]], [[11310, 11310], "mapped", [11358]], [[11311, 11311], "disallowed"], [[11312, 11358], "valid"], [[11359, 11359], "disallowed"], [[11360, 11360], "mapped", [11361]], [[11361, 11361], "valid"], [[11362, 11362], "mapped", [619]], [[11363, 11363], "mapped", [7549]], [[11364, 11364], "mapped", [637]], [[11365, 11366], "valid"], [[11367, 11367], "mapped", [11368]], [[11368, 11368], "valid"], [[11369, 11369], "mapped", [11370]], [[11370, 11370], "valid"], [[11371, 11371], "mapped", [11372]], [[11372, 11372], "valid"], [[11373, 11373], "mapped", [593]], [[11374, 11374], "mapped", [625]], [[11375, 11375], "mapped", [592]], [[11376, 11376], "mapped", [594]], [[11377, 11377], "valid"], [[11378, 11378], "mapped", [11379]], [[11379, 11379], "valid"], [[11380, 11380], "valid"], [[11381, 11381], "mapped", [11382]], [[11382, 11383], "valid"], [[11384, 11387], "valid"], [[11388, 11388], "mapped", [106]], [[11389, 11389], "mapped", [118]], [[11390, 11390], "mapped", [575]], [[11391, 11391], "mapped", [576]], [[11392, 11392], "mapped", [11393]], [[11393, 11393], "valid"], [[11394, 11394], "mapped", [11395]], [[11395, 11395], "valid"], [[11396, 11396], "mapped", [11397]], [[11397, 11397], "valid"], [[11398, 11398], "mapped", [11399]], [[11399, 11399], "valid"], [[11400, 11400], "mapped", [11401]], [[11401, 11401], "valid"], [[11402, 11402], "mapped", [11403]], [[11403, 11403], "valid"], [[11404, 11404], "mapped", [11405]], [[11405, 11405], "valid"], [[11406, 11406], "mapped", [11407]], [[11407, 11407], "valid"], [[11408, 11408], "mapped", [11409]], [[11409, 11409], "valid"], [[11410, 11410], "mapped", [11411]], [[11411, 11411], "valid"], [[11412, 11412], "mapped", [11413]], [[11413, 11413], "valid"], [[11414, 11414], "mapped", [11415]], [[11415, 11415], "valid"], [[11416, 11416], "mapped", [11417]], [[11417, 11417], "valid"], [[11418, 11418], "mapped", [11419]], [[11419, 11419], "valid"], [[11420, 11420], "mapped", [11421]], [[11421, 11421], "valid"], [[11422, 11422], "mapped", [11423]], [[11423, 11423], "valid"], [[11424, 11424], "mapped", [11425]], [[11425, 11425], "valid"], [[11426, 11426], "mapped", [11427]], [[11427, 11427], "valid"], [[11428, 11428], "mapped", [11429]], [[11429, 11429], "valid"], [[11430, 11430], "mapped", [11431]], [[11431, 11431], "valid"], [[11432, 11432], "mapped", [11433]], [[11433, 11433], "valid"], [[11434, 11434], "mapped", [11435]], [[11435, 11435], "valid"], [[11436, 11436], "mapped", [11437]], [[11437, 11437], "valid"], [[11438, 11438], "mapped", [11439]], [[11439, 11439], "valid"], [[11440, 11440], "mapped", [11441]], [[11441, 11441], "valid"], [[11442, 11442], "mapped", [11443]], [[11443, 11443], "valid"], [[11444, 11444], "mapped", [11445]], [[11445, 11445], "valid"], [[11446, 11446], "mapped", [11447]], [[11447, 11447], "valid"], [[11448, 11448], "mapped", [11449]], [[11449, 11449], "valid"], [[11450, 11450], "mapped", [11451]], [[11451, 11451], "valid"], [[11452, 11452], "mapped", [11453]], [[11453, 11453], "valid"], [[11454, 11454], "mapped", [11455]], [[11455, 11455], "valid"], [[11456, 11456], "mapped", [11457]], [[11457, 11457], "valid"], [[11458, 11458], "mapped", [11459]], [[11459, 11459], "valid"], [[11460, 11460], "mapped", [11461]], [[11461, 11461], "valid"], [[11462, 11462], "mapped", [11463]], [[11463, 11463], "valid"], [[11464, 11464], "mapped", [11465]], [[11465, 11465], "valid"], [[11466, 11466], "mapped", [11467]], [[11467, 11467], "valid"], [[11468, 11468], "mapped", [11469]], [[11469, 11469], "valid"], [[11470, 11470], "mapped", [11471]], [[11471, 11471], "valid"], [[11472, 11472], "mapped", [11473]], [[11473, 11473], "valid"], [[11474, 11474], "mapped", [11475]], [[11475, 11475], "valid"], [[11476, 11476], "mapped", [11477]], [[11477, 11477], "valid"], [[11478, 11478], "mapped", [11479]], [[11479, 11479], "valid"], [[11480, 11480], "mapped", [11481]], [[11481, 11481], "valid"], [[11482, 11482], "mapped", [11483]], [[11483, 11483], "valid"], [[11484, 11484], "mapped", [11485]], [[11485, 11485], "valid"], [[11486, 11486], "mapped", [11487]], [[11487, 11487], "valid"], [[11488, 11488], "mapped", [11489]], [[11489, 11489], "valid"], [[11490, 11490], "mapped", [11491]], [[11491, 11492], "valid"], [[11493, 11498], "valid", [], "NV8"], [[11499, 11499], "mapped", [11500]], [[11500, 11500], "valid"], [[11501, 11501], "mapped", [11502]], [[11502, 11505], "valid"], [[11506, 11506], "mapped", [11507]], [[11507, 11507], "valid"], [[11508, 11512], "disallowed"], [[11513, 11519], "valid", [], "NV8"], [[11520, 11557], "valid"], [[11558, 11558], "disallowed"], [[11559, 11559], "valid"], [[11560, 11564], "disallowed"], [[11565, 11565], "valid"], [[11566, 11567], "disallowed"], [[11568, 11621], "valid"], [[11622, 11623], "valid"], [[11624, 11630], "disallowed"], [[11631, 11631], "mapped", [11617]], [[11632, 11632], "valid", [], "NV8"], [[11633, 11646], "disallowed"], [[11647, 11647], "valid"], [[11648, 11670], "valid"], [[11671, 11679], "disallowed"], [[11680, 11686], "valid"], [[11687, 11687], "disallowed"], [[11688, 11694], "valid"], [[11695, 11695], "disallowed"], [[11696, 11702], "valid"], [[11703, 11703], "disallowed"], [[11704, 11710], "valid"], [[11711, 11711], "disallowed"], [[11712, 11718], "valid"], [[11719, 11719], "disallowed"], [[11720, 11726], "valid"], [[11727, 11727], "disallowed"], [[11728, 11734], "valid"], [[11735, 11735], "disallowed"], [[11736, 11742], "valid"], [[11743, 11743], "disallowed"], [[11744, 11775], "valid"], [[11776, 11799], "valid", [], "NV8"], [[11800, 11803], "valid", [], "NV8"], [[11804, 11805], "valid", [], "NV8"], [[11806, 11822], "valid", [], "NV8"], [[11823, 11823], "valid"], [[11824, 11824], "valid", [], "NV8"], [[11825, 11825], "valid", [], "NV8"], [[11826, 11835], "valid", [], "NV8"], [[11836, 11842], "valid", [], "NV8"], [[11843, 11903], "disallowed"], [[11904, 11929], "valid", [], "NV8"], [[11930, 11930], "disallowed"], [[11931, 11934], "valid", [], "NV8"], [[11935, 11935], "mapped", [27597]], [[11936, 12018], "valid", [], "NV8"], [[12019, 12019], "mapped", [40863]], [[12020, 12031], "disallowed"], [[12032, 12032], "mapped", [19968]], [[12033, 12033], "mapped", [20008]], [[12034, 12034], "mapped", [20022]], [[12035, 12035], "mapped", [20031]], [[12036, 12036], "mapped", [20057]], [[12037, 12037], "mapped", [20101]], [[12038, 12038], "mapped", [20108]], [[12039, 12039], "mapped", [20128]], [[12040, 12040], "mapped", [20154]], [[12041, 12041], "mapped", [20799]], [[12042, 12042], "mapped", [20837]], [[12043, 12043], "mapped", [20843]], [[12044, 12044], "mapped", [20866]], [[12045, 12045], "mapped", [20886]], [[12046, 12046], "mapped", [20907]], [[12047, 12047], "mapped", [20960]], [[12048, 12048], "mapped", [20981]], [[12049, 12049], "mapped", [20992]], [[12050, 12050], "mapped", [21147]], [[12051, 12051], "mapped", [21241]], [[12052, 12052], "mapped", [21269]], [[12053, 12053], "mapped", [21274]], [[12054, 12054], "mapped", [21304]], [[12055, 12055], "mapped", [21313]], [[12056, 12056], "mapped", [21340]], [[12057, 12057], "mapped", [21353]], [[12058, 12058], "mapped", [21378]], [[12059, 12059], "mapped", [21430]], [[12060, 12060], "mapped", [21448]], [[12061, 12061], "mapped", [21475]], [[12062, 12062], "mapped", [22231]], [[12063, 12063], "mapped", [22303]], [[12064, 12064], "mapped", [22763]], [[12065, 12065], "mapped", [22786]], [[12066, 12066], "mapped", [22794]], [[12067, 12067], "mapped", [22805]], [[12068, 12068], "mapped", [22823]], [[12069, 12069], "mapped", [22899]], [[12070, 12070], "mapped", [23376]], [[12071, 12071], "mapped", [23424]], [[12072, 12072], "mapped", [23544]], [[12073, 12073], "mapped", [23567]], [[12074, 12074], "mapped", [23586]], [[12075, 12075], "mapped", [23608]], [[12076, 12076], "mapped", [23662]], [[12077, 12077], "mapped", [23665]], [[12078, 12078], "mapped", [24027]], [[12079, 12079], "mapped", [24037]], [[12080, 12080], "mapped", [24049]], [[12081, 12081], "mapped", [24062]], [[12082, 12082], "mapped", [24178]], [[12083, 12083], "mapped", [24186]], [[12084, 12084], "mapped", [24191]], [[12085, 12085], "mapped", [24308]], [[12086, 12086], "mapped", [24318]], [[12087, 12087], "mapped", [24331]], [[12088, 12088], "mapped", [24339]], [[12089, 12089], "mapped", [24400]], [[12090, 12090], "mapped", [24417]], [[12091, 12091], "mapped", [24435]], [[12092, 12092], "mapped", [24515]], [[12093, 12093], "mapped", [25096]], [[12094, 12094], "mapped", [25142]], [[12095, 12095], "mapped", [25163]], [[12096, 12096], "mapped", [25903]], [[12097, 12097], "mapped", [25908]], [[12098, 12098], "mapped", [25991]], [[12099, 12099], "mapped", [26007]], [[12100, 12100], "mapped", [26020]], [[12101, 12101], "mapped", [26041]], [[12102, 12102], "mapped", [26080]], [[12103, 12103], "mapped", [26085]], [[12104, 12104], "mapped", [26352]], [[12105, 12105], "mapped", [26376]], [[12106, 12106], "mapped", [26408]], [[12107, 12107], "mapped", [27424]], [[12108, 12108], "mapped", [27490]], [[12109, 12109], "mapped", [27513]], [[12110, 12110], "mapped", [27571]], [[12111, 12111], "mapped", [27595]], [[12112, 12112], "mapped", [27604]], [[12113, 12113], "mapped", [27611]], [[12114, 12114], "mapped", [27663]], [[12115, 12115], "mapped", [27668]], [[12116, 12116], "mapped", [27700]], [[12117, 12117], "mapped", [28779]], [[12118, 12118], "mapped", [29226]], [[12119, 12119], "mapped", [29238]], [[12120, 12120], "mapped", [29243]], [[12121, 12121], "mapped", [29247]], [[12122, 12122], "mapped", [29255]], [[12123, 12123], "mapped", [29273]], [[12124, 12124], "mapped", [29275]], [[12125, 12125], "mapped", [29356]], [[12126, 12126], "mapped", [29572]], [[12127, 12127], "mapped", [29577]], [[12128, 12128], "mapped", [29916]], [[12129, 12129], "mapped", [29926]], [[12130, 12130], "mapped", [29976]], [[12131, 12131], "mapped", [29983]], [[12132, 12132], "mapped", [29992]], [[12133, 12133], "mapped", [3e4]], [[12134, 12134], "mapped", [30091]], [[12135, 12135], "mapped", [30098]], [[12136, 12136], "mapped", [30326]], [[12137, 12137], "mapped", [30333]], [[12138, 12138], "mapped", [30382]], [[12139, 12139], "mapped", [30399]], [[12140, 12140], "mapped", [30446]], [[12141, 12141], "mapped", [30683]], [[12142, 12142], "mapped", [30690]], [[12143, 12143], "mapped", [30707]], [[12144, 12144], "mapped", [31034]], [[12145, 12145], "mapped", [31160]], [[12146, 12146], "mapped", [31166]], [[12147, 12147], "mapped", [31348]], [[12148, 12148], "mapped", [31435]], [[12149, 12149], "mapped", [31481]], [[12150, 12150], "mapped", [31859]], [[12151, 12151], "mapped", [31992]], [[12152, 12152], "mapped", [32566]], [[12153, 12153], "mapped", [32593]], [[12154, 12154], "mapped", [32650]], [[12155, 12155], "mapped", [32701]], [[12156, 12156], "mapped", [32769]], [[12157, 12157], "mapped", [32780]], [[12158, 12158], "mapped", [32786]], [[12159, 12159], "mapped", [32819]], [[12160, 12160], "mapped", [32895]], [[12161, 12161], "mapped", [32905]], [[12162, 12162], "mapped", [33251]], [[12163, 12163], "mapped", [33258]], [[12164, 12164], "mapped", [33267]], [[12165, 12165], "mapped", [33276]], [[12166, 12166], "mapped", [33292]], [[12167, 12167], "mapped", [33307]], [[12168, 12168], "mapped", [33311]], [[12169, 12169], "mapped", [33390]], [[12170, 12170], "mapped", [33394]], [[12171, 12171], "mapped", [33400]], [[12172, 12172], "mapped", [34381]], [[12173, 12173], "mapped", [34411]], [[12174, 12174], "mapped", [34880]], [[12175, 12175], "mapped", [34892]], [[12176, 12176], "mapped", [34915]], [[12177, 12177], "mapped", [35198]], [[12178, 12178], "mapped", [35211]], [[12179, 12179], "mapped", [35282]], [[12180, 12180], "mapped", [35328]], [[12181, 12181], "mapped", [35895]], [[12182, 12182], "mapped", [35910]], [[12183, 12183], "mapped", [35925]], [[12184, 12184], "mapped", [35960]], [[12185, 12185], "mapped", [35997]], [[12186, 12186], "mapped", [36196]], [[12187, 12187], "mapped", [36208]], [[12188, 12188], "mapped", [36275]], [[12189, 12189], "mapped", [36523]], [[12190, 12190], "mapped", [36554]], [[12191, 12191], "mapped", [36763]], [[12192, 12192], "mapped", [36784]], [[12193, 12193], "mapped", [36789]], [[12194, 12194], "mapped", [37009]], [[12195, 12195], "mapped", [37193]], [[12196, 12196], "mapped", [37318]], [[12197, 12197], "mapped", [37324]], [[12198, 12198], "mapped", [37329]], [[12199, 12199], "mapped", [38263]], [[12200, 12200], "mapped", [38272]], [[12201, 12201], "mapped", [38428]], [[12202, 12202], "mapped", [38582]], [[12203, 12203], "mapped", [38585]], [[12204, 12204], "mapped", [38632]], [[12205, 12205], "mapped", [38737]], [[12206, 12206], "mapped", [38750]], [[12207, 12207], "mapped", [38754]], [[12208, 12208], "mapped", [38761]], [[12209, 12209], "mapped", [38859]], [[12210, 12210], "mapped", [38893]], [[12211, 12211], "mapped", [38899]], [[12212, 12212], "mapped", [38913]], [[12213, 12213], "mapped", [39080]], [[12214, 12214], "mapped", [39131]], [[12215, 12215], "mapped", [39135]], [[12216, 12216], "mapped", [39318]], [[12217, 12217], "mapped", [39321]], [[12218, 12218], "mapped", [39340]], [[12219, 12219], "mapped", [39592]], [[12220, 12220], "mapped", [39640]], [[12221, 12221], "mapped", [39647]], [[12222, 12222], "mapped", [39717]], [[12223, 12223], "mapped", [39727]], [[12224, 12224], "mapped", [39730]], [[12225, 12225], "mapped", [39740]], [[12226, 12226], "mapped", [39770]], [[12227, 12227], "mapped", [40165]], [[12228, 12228], "mapped", [40565]], [[12229, 12229], "mapped", [40575]], [[12230, 12230], "mapped", [40613]], [[12231, 12231], "mapped", [40635]], [[12232, 12232], "mapped", [40643]], [[12233, 12233], "mapped", [40653]], [[12234, 12234], "mapped", [40657]], [[12235, 12235], "mapped", [40697]], [[12236, 12236], "mapped", [40701]], [[12237, 12237], "mapped", [40718]], [[12238, 12238], "mapped", [40723]], [[12239, 12239], "mapped", [40736]], [[12240, 12240], "mapped", [40763]], [[12241, 12241], "mapped", [40778]], [[12242, 12242], "mapped", [40786]], [[12243, 12243], "mapped", [40845]], [[12244, 12244], "mapped", [40860]], [[12245, 12245], "mapped", [40864]], [[12246, 12271], "disallowed"], [[12272, 12283], "disallowed"], [[12284, 12287], "disallowed"], [[12288, 12288], "disallowed_STD3_mapped", [32]], [[12289, 12289], "valid", [], "NV8"], [[12290, 12290], "mapped", [46]], [[12291, 12292], "valid", [], "NV8"], [[12293, 12295], "valid"], [[12296, 12329], "valid", [], "NV8"], [[12330, 12333], "valid"], [[12334, 12341], "valid", [], "NV8"], [[12342, 12342], "mapped", [12306]], [[12343, 12343], "valid", [], "NV8"], [[12344, 12344], "mapped", [21313]], [[12345, 12345], "mapped", [21316]], [[12346, 12346], "mapped", [21317]], [[12347, 12347], "valid", [], "NV8"], [[12348, 12348], "valid"], [[12349, 12349], "valid", [], "NV8"], [[12350, 12350], "valid", [], "NV8"], [[12351, 12351], "valid", [], "NV8"], [[12352, 12352], "disallowed"], [[12353, 12436], "valid"], [[12437, 12438], "valid"], [[12439, 12440], "disallowed"], [[12441, 12442], "valid"], [[12443, 12443], "disallowed_STD3_mapped", [32, 12441]], [[12444, 12444], "disallowed_STD3_mapped", [32, 12442]], [[12445, 12446], "valid"], [[12447, 12447], "mapped", [12424, 12426]], [[12448, 12448], "valid", [], "NV8"], [[12449, 12542], "valid"], [[12543, 12543], "mapped", [12467, 12488]], [[12544, 12548], "disallowed"], [[12549, 12588], "valid"], [[12589, 12589], "valid"], [[12590, 12592], "disallowed"], [[12593, 12593], "mapped", [4352]], [[12594, 12594], "mapped", [4353]], [[12595, 12595], "mapped", [4522]], [[12596, 12596], "mapped", [4354]], [[12597, 12597], "mapped", [4524]], [[12598, 12598], "mapped", [4525]], [[12599, 12599], "mapped", [4355]], [[12600, 12600], "mapped", [4356]], [[12601, 12601], "mapped", [4357]], [[12602, 12602], "mapped", [4528]], [[12603, 12603], "mapped", [4529]], [[12604, 12604], "mapped", [4530]], [[12605, 12605], "mapped", [4531]], [[12606, 12606], "mapped", [4532]], [[12607, 12607], "mapped", [4533]], [[12608, 12608], "mapped", [4378]], [[12609, 12609], "mapped", [4358]], [[12610, 12610], "mapped", [4359]], [[12611, 12611], "mapped", [4360]], [[12612, 12612], "mapped", [4385]], [[12613, 12613], "mapped", [4361]], [[12614, 12614], "mapped", [4362]], [[12615, 12615], "mapped", [4363]], [[12616, 12616], "mapped", [4364]], [[12617, 12617], "mapped", [4365]], [[12618, 12618], "mapped", [4366]], [[12619, 12619], "mapped", [4367]], [[12620, 12620], "mapped", [4368]], [[12621, 12621], "mapped", [4369]], [[12622, 12622], "mapped", [4370]], [[12623, 12623], "mapped", [4449]], [[12624, 12624], "mapped", [4450]], [[12625, 12625], "mapped", [4451]], [[12626, 12626], "mapped", [4452]], [[12627, 12627], "mapped", [4453]], [[12628, 12628], "mapped", [4454]], [[12629, 12629], "mapped", [4455]], [[12630, 12630], "mapped", [4456]], [[12631, 12631], "mapped", [4457]], [[12632, 12632], "mapped", [4458]], [[12633, 12633], "mapped", [4459]], [[12634, 12634], "mapped", [4460]], [[12635, 12635], "mapped", [4461]], [[12636, 12636], "mapped", [4462]], [[12637, 12637], "mapped", [4463]], [[12638, 12638], "mapped", [4464]], [[12639, 12639], "mapped", [4465]], [[12640, 12640], "mapped", [4466]], [[12641, 12641], "mapped", [4467]], [[12642, 12642], "mapped", [4468]], [[12643, 12643], "mapped", [4469]], [[12644, 12644], "disallowed"], [[12645, 12645], "mapped", [4372]], [[12646, 12646], "mapped", [4373]], [[12647, 12647], "mapped", [4551]], [[12648, 12648], "mapped", [4552]], [[12649, 12649], "mapped", [4556]], [[12650, 12650], "mapped", [4558]], [[12651, 12651], "mapped", [4563]], [[12652, 12652], "mapped", [4567]], [[12653, 12653], "mapped", [4569]], [[12654, 12654], "mapped", [4380]], [[12655, 12655], "mapped", [4573]], [[12656, 12656], "mapped", [4575]], [[12657, 12657], "mapped", [4381]], [[12658, 12658], "mapped", [4382]], [[12659, 12659], "mapped", [4384]], [[12660, 12660], "mapped", [4386]], [[12661, 12661], "mapped", [4387]], [[12662, 12662], "mapped", [4391]], [[12663, 12663], "mapped", [4393]], [[12664, 12664], "mapped", [4395]], [[12665, 12665], "mapped", [4396]], [[12666, 12666], "mapped", [4397]], [[12667, 12667], "mapped", [4398]], [[12668, 12668], "mapped", [4399]], [[12669, 12669], "mapped", [4402]], [[12670, 12670], "mapped", [4406]], [[12671, 12671], "mapped", [4416]], [[12672, 12672], "mapped", [4423]], [[12673, 12673], "mapped", [4428]], [[12674, 12674], "mapped", [4593]], [[12675, 12675], "mapped", [4594]], [[12676, 12676], "mapped", [4439]], [[12677, 12677], "mapped", [4440]], [[12678, 12678], "mapped", [4441]], [[12679, 12679], "mapped", [4484]], [[12680, 12680], "mapped", [4485]], [[12681, 12681], "mapped", [4488]], [[12682, 12682], "mapped", [4497]], [[12683, 12683], "mapped", [4498]], [[12684, 12684], "mapped", [4500]], [[12685, 12685], "mapped", [4510]], [[12686, 12686], "mapped", [4513]], [[12687, 12687], "disallowed"], [[12688, 12689], "valid", [], "NV8"], [[12690, 12690], "mapped", [19968]], [[12691, 12691], "mapped", [20108]], [[12692, 12692], "mapped", [19977]], [[12693, 12693], "mapped", [22235]], [[12694, 12694], "mapped", [19978]], [[12695, 12695], "mapped", [20013]], [[12696, 12696], "mapped", [19979]], [[12697, 12697], "mapped", [30002]], [[12698, 12698], "mapped", [20057]], [[12699, 12699], "mapped", [19993]], [[12700, 12700], "mapped", [19969]], [[12701, 12701], "mapped", [22825]], [[12702, 12702], "mapped", [22320]], [[12703, 12703], "mapped", [20154]], [[12704, 12727], "valid"], [[12728, 12730], "valid"], [[12731, 12735], "disallowed"], [[12736, 12751], "valid", [], "NV8"], [[12752, 12771], "valid", [], "NV8"], [[12772, 12783], "disallowed"], [[12784, 12799], "valid"], [[12800, 12800], "disallowed_STD3_mapped", [40, 4352, 41]], [[12801, 12801], "disallowed_STD3_mapped", [40, 4354, 41]], [[12802, 12802], "disallowed_STD3_mapped", [40, 4355, 41]], [[12803, 12803], "disallowed_STD3_mapped", [40, 4357, 41]], [[12804, 12804], "disallowed_STD3_mapped", [40, 4358, 41]], [[12805, 12805], "disallowed_STD3_mapped", [40, 4359, 41]], [[12806, 12806], "disallowed_STD3_mapped", [40, 4361, 41]], [[12807, 12807], "disallowed_STD3_mapped", [40, 4363, 41]], [[12808, 12808], "disallowed_STD3_mapped", [40, 4364, 41]], [[12809, 12809], "disallowed_STD3_mapped", [40, 4366, 41]], [[12810, 12810], "disallowed_STD3_mapped", [40, 4367, 41]], [[12811, 12811], "disallowed_STD3_mapped", [40, 4368, 41]], [[12812, 12812], "disallowed_STD3_mapped", [40, 4369, 41]], [[12813, 12813], "disallowed_STD3_mapped", [40, 4370, 41]], [[12814, 12814], "disallowed_STD3_mapped", [40, 44032, 41]], [[12815, 12815], "disallowed_STD3_mapped", [40, 45208, 41]], [[12816, 12816], "disallowed_STD3_mapped", [40, 45796, 41]], [[12817, 12817], "disallowed_STD3_mapped", [40, 46972, 41]], [[12818, 12818], "disallowed_STD3_mapped", [40, 47560, 41]], [[12819, 12819], "disallowed_STD3_mapped", [40, 48148, 41]], [[12820, 12820], "disallowed_STD3_mapped", [40, 49324, 41]], [[12821, 12821], "disallowed_STD3_mapped", [40, 50500, 41]], [[12822, 12822], "disallowed_STD3_mapped", [40, 51088, 41]], [[12823, 12823], "disallowed_STD3_mapped", [40, 52264, 41]], [[12824, 12824], "disallowed_STD3_mapped", [40, 52852, 41]], [[12825, 12825], "disallowed_STD3_mapped", [40, 53440, 41]], [[12826, 12826], "disallowed_STD3_mapped", [40, 54028, 41]], [[12827, 12827], "disallowed_STD3_mapped", [40, 54616, 41]], [[12828, 12828], "disallowed_STD3_mapped", [40, 51452, 41]], [[12829, 12829], "disallowed_STD3_mapped", [40, 50724, 51204, 41]], [[12830, 12830], "disallowed_STD3_mapped", [40, 50724, 54980, 41]], [[12831, 12831], "disallowed"], [[12832, 12832], "disallowed_STD3_mapped", [40, 19968, 41]], [[12833, 12833], "disallowed_STD3_mapped", [40, 20108, 41]], [[12834, 12834], "disallowed_STD3_mapped", [40, 19977, 41]], [[12835, 12835], "disallowed_STD3_mapped", [40, 22235, 41]], [[12836, 12836], "disallowed_STD3_mapped", [40, 20116, 41]], [[12837, 12837], "disallowed_STD3_mapped", [40, 20845, 41]], [[12838, 12838], "disallowed_STD3_mapped", [40, 19971, 41]], [[12839, 12839], "disallowed_STD3_mapped", [40, 20843, 41]], [[12840, 12840], "disallowed_STD3_mapped", [40, 20061, 41]], [[12841, 12841], "disallowed_STD3_mapped", [40, 21313, 41]], [[12842, 12842], "disallowed_STD3_mapped", [40, 26376, 41]], [[12843, 12843], "disallowed_STD3_mapped", [40, 28779, 41]], [[12844, 12844], "disallowed_STD3_mapped", [40, 27700, 41]], [[12845, 12845], "disallowed_STD3_mapped", [40, 26408, 41]], [[12846, 12846], "disallowed_STD3_mapped", [40, 37329, 41]], [[12847, 12847], "disallowed_STD3_mapped", [40, 22303, 41]], [[12848, 12848], "disallowed_STD3_mapped", [40, 26085, 41]], [[12849, 12849], "disallowed_STD3_mapped", [40, 26666, 41]], [[12850, 12850], "disallowed_STD3_mapped", [40, 26377, 41]], [[12851, 12851], "disallowed_STD3_mapped", [40, 31038, 41]], [[12852, 12852], "disallowed_STD3_mapped", [40, 21517, 41]], [[12853, 12853], "disallowed_STD3_mapped", [40, 29305, 41]], [[12854, 12854], "disallowed_STD3_mapped", [40, 36001, 41]], [[12855, 12855], "disallowed_STD3_mapped", [40, 31069, 41]], [[12856, 12856], "disallowed_STD3_mapped", [40, 21172, 41]], [[12857, 12857], "disallowed_STD3_mapped", [40, 20195, 41]], [[12858, 12858], "disallowed_STD3_mapped", [40, 21628, 41]], [[12859, 12859], "disallowed_STD3_mapped", [40, 23398, 41]], [[12860, 12860], "disallowed_STD3_mapped", [40, 30435, 41]], [[12861, 12861], "disallowed_STD3_mapped", [40, 20225, 41]], [[12862, 12862], "disallowed_STD3_mapped", [40, 36039, 41]], [[12863, 12863], "disallowed_STD3_mapped", [40, 21332, 41]], [[12864, 12864], "disallowed_STD3_mapped", [40, 31085, 41]], [[12865, 12865], "disallowed_STD3_mapped", [40, 20241, 41]], [[12866, 12866], "disallowed_STD3_mapped", [40, 33258, 41]], [[12867, 12867], "disallowed_STD3_mapped", [40, 33267, 41]], [[12868, 12868], "mapped", [21839]], [[12869, 12869], "mapped", [24188]], [[12870, 12870], "mapped", [25991]], [[12871, 12871], "mapped", [31631]], [[12872, 12879], "valid", [], "NV8"], [[12880, 12880], "mapped", [112, 116, 101]], [[12881, 12881], "mapped", [50, 49]], [[12882, 12882], "mapped", [50, 50]], [[12883, 12883], "mapped", [50, 51]], [[12884, 12884], "mapped", [50, 52]], [[12885, 12885], "mapped", [50, 53]], [[12886, 12886], "mapped", [50, 54]], [[12887, 12887], "mapped", [50, 55]], [[12888, 12888], "mapped", [50, 56]], [[12889, 12889], "mapped", [50, 57]], [[12890, 12890], "mapped", [51, 48]], [[12891, 12891], "mapped", [51, 49]], [[12892, 12892], "mapped", [51, 50]], [[12893, 12893], "mapped", [51, 51]], [[12894, 12894], "mapped", [51, 52]], [[12895, 12895], "mapped", [51, 53]], [[12896, 12896], "mapped", [4352]], [[12897, 12897], "mapped", [4354]], [[12898, 12898], "mapped", [4355]], [[12899, 12899], "mapped", [4357]], [[12900, 12900], "mapped", [4358]], [[12901, 12901], "mapped", [4359]], [[12902, 12902], "mapped", [4361]], [[12903, 12903], "mapped", [4363]], [[12904, 12904], "mapped", [4364]], [[12905, 12905], "mapped", [4366]], [[12906, 12906], "mapped", [4367]], [[12907, 12907], "mapped", [4368]], [[12908, 12908], "mapped", [4369]], [[12909, 12909], "mapped", [4370]], [[12910, 12910], "mapped", [44032]], [[12911, 12911], "mapped", [45208]], [[12912, 12912], "mapped", [45796]], [[12913, 12913], "mapped", [46972]], [[12914, 12914], "mapped", [47560]], [[12915, 12915], "mapped", [48148]], [[12916, 12916], "mapped", [49324]], [[12917, 12917], "mapped", [50500]], [[12918, 12918], "mapped", [51088]], [[12919, 12919], "mapped", [52264]], [[12920, 12920], "mapped", [52852]], [[12921, 12921], "mapped", [53440]], [[12922, 12922], "mapped", [54028]], [[12923, 12923], "mapped", [54616]], [[12924, 12924], "mapped", [52280, 44256]], [[12925, 12925], "mapped", [51452, 51032]], [[12926, 12926], "mapped", [50864]], [[12927, 12927], "valid", [], "NV8"], [[12928, 12928], "mapped", [19968]], [[12929, 12929], "mapped", [20108]], [[12930, 12930], "mapped", [19977]], [[12931, 12931], "mapped", [22235]], [[12932, 12932], "mapped", [20116]], [[12933, 12933], "mapped", [20845]], [[12934, 12934], "mapped", [19971]], [[12935, 12935], "mapped", [20843]], [[12936, 12936], "mapped", [20061]], [[12937, 12937], "mapped", [21313]], [[12938, 12938], "mapped", [26376]], [[12939, 12939], "mapped", [28779]], [[12940, 12940], "mapped", [27700]], [[12941, 12941], "mapped", [26408]], [[12942, 12942], "mapped", [37329]], [[12943, 12943], "mapped", [22303]], [[12944, 12944], "mapped", [26085]], [[12945, 12945], "mapped", [26666]], [[12946, 12946], "mapped", [26377]], [[12947, 12947], "mapped", [31038]], [[12948, 12948], "mapped", [21517]], [[12949, 12949], "mapped", [29305]], [[12950, 12950], "mapped", [36001]], [[12951, 12951], "mapped", [31069]], [[12952, 12952], "mapped", [21172]], [[12953, 12953], "mapped", [31192]], [[12954, 12954], "mapped", [30007]], [[12955, 12955], "mapped", [22899]], [[12956, 12956], "mapped", [36969]], [[12957, 12957], "mapped", [20778]], [[12958, 12958], "mapped", [21360]], [[12959, 12959], "mapped", [27880]], [[12960, 12960], "mapped", [38917]], [[12961, 12961], "mapped", [20241]], [[12962, 12962], "mapped", [20889]], [[12963, 12963], "mapped", [27491]], [[12964, 12964], "mapped", [19978]], [[12965, 12965], "mapped", [20013]], [[12966, 12966], "mapped", [19979]], [[12967, 12967], "mapped", [24038]], [[12968, 12968], "mapped", [21491]], [[12969, 12969], "mapped", [21307]], [[12970, 12970], "mapped", [23447]], [[12971, 12971], "mapped", [23398]], [[12972, 12972], "mapped", [30435]], [[12973, 12973], "mapped", [20225]], [[12974, 12974], "mapped", [36039]], [[12975, 12975], "mapped", [21332]], [[12976, 12976], "mapped", [22812]], [[12977, 12977], "mapped", [51, 54]], [[12978, 12978], "mapped", [51, 55]], [[12979, 12979], "mapped", [51, 56]], [[12980, 12980], "mapped", [51, 57]], [[12981, 12981], "mapped", [52, 48]], [[12982, 12982], "mapped", [52, 49]], [[12983, 12983], "mapped", [52, 50]], [[12984, 12984], "mapped", [52, 51]], [[12985, 12985], "mapped", [52, 52]], [[12986, 12986], "mapped", [52, 53]], [[12987, 12987], "mapped", [52, 54]], [[12988, 12988], "mapped", [52, 55]], [[12989, 12989], "mapped", [52, 56]], [[12990, 12990], "mapped", [52, 57]], [[12991, 12991], "mapped", [53, 48]], [[12992, 12992], "mapped", [49, 26376]], [[12993, 12993], "mapped", [50, 26376]], [[12994, 12994], "mapped", [51, 26376]], [[12995, 12995], "mapped", [52, 26376]], [[12996, 12996], "mapped", [53, 26376]], [[12997, 12997], "mapped", [54, 26376]], [[12998, 12998], "mapped", [55, 26376]], [[12999, 12999], "mapped", [56, 26376]], [[13e3, 13e3], "mapped", [57, 26376]], [[13001, 13001], "mapped", [49, 48, 26376]], [[13002, 13002], "mapped", [49, 49, 26376]], [[13003, 13003], "mapped", [49, 50, 26376]], [[13004, 13004], "mapped", [104, 103]], [[13005, 13005], "mapped", [101, 114, 103]], [[13006, 13006], "mapped", [101, 118]], [[13007, 13007], "mapped", [108, 116, 100]], [[13008, 13008], "mapped", [12450]], [[13009, 13009], "mapped", [12452]], [[13010, 13010], "mapped", [12454]], [[13011, 13011], "mapped", [12456]], [[13012, 13012], "mapped", [12458]], [[13013, 13013], "mapped", [12459]], [[13014, 13014], "mapped", [12461]], [[13015, 13015], "mapped", [12463]], [[13016, 13016], "mapped", [12465]], [[13017, 13017], "mapped", [12467]], [[13018, 13018], "mapped", [12469]], [[13019, 13019], "mapped", [12471]], [[13020, 13020], "mapped", [12473]], [[13021, 13021], "mapped", [12475]], [[13022, 13022], "mapped", [12477]], [[13023, 13023], "mapped", [12479]], [[13024, 13024], "mapped", [12481]], [[13025, 13025], "mapped", [12484]], [[13026, 13026], "mapped", [12486]], [[13027, 13027], "mapped", [12488]], [[13028, 13028], "mapped", [12490]], [[13029, 13029], "mapped", [12491]], [[13030, 13030], "mapped", [12492]], [[13031, 13031], "mapped", [12493]], [[13032, 13032], "mapped", [12494]], [[13033, 13033], "mapped", [12495]], [[13034, 13034], "mapped", [12498]], [[13035, 13035], "mapped", [12501]], [[13036, 13036], "mapped", [12504]], [[13037, 13037], "mapped", [12507]], [[13038, 13038], "mapped", [12510]], [[13039, 13039], "mapped", [12511]], [[13040, 13040], "mapped", [12512]], [[13041, 13041], "mapped", [12513]], [[13042, 13042], "mapped", [12514]], [[13043, 13043], "mapped", [12516]], [[13044, 13044], "mapped", [12518]], [[13045, 13045], "mapped", [12520]], [[13046, 13046], "mapped", [12521]], [[13047, 13047], "mapped", [12522]], [[13048, 13048], "mapped", [12523]], [[13049, 13049], "mapped", [12524]], [[13050, 13050], "mapped", [12525]], [[13051, 13051], "mapped", [12527]], [[13052, 13052], "mapped", [12528]], [[13053, 13053], "mapped", [12529]], [[13054, 13054], "mapped", [12530]], [[13055, 13055], "disallowed"], [[13056, 13056], "mapped", [12450, 12497, 12540, 12488]], [[13057, 13057], "mapped", [12450, 12523, 12501, 12449]], [[13058, 13058], "mapped", [12450, 12531, 12506, 12450]], [[13059, 13059], "mapped", [12450, 12540, 12523]], [[13060, 13060], "mapped", [12452, 12491, 12531, 12464]], [[13061, 13061], "mapped", [12452, 12531, 12481]], [[13062, 13062], "mapped", [12454, 12457, 12531]], [[13063, 13063], "mapped", [12456, 12473, 12463, 12540, 12489]], [[13064, 13064], "mapped", [12456, 12540, 12459, 12540]], [[13065, 13065], "mapped", [12458, 12531, 12473]], [[13066, 13066], "mapped", [12458, 12540, 12512]], [[13067, 13067], "mapped", [12459, 12452, 12522]], [[13068, 13068], "mapped", [12459, 12521, 12483, 12488]], [[13069, 13069], "mapped", [12459, 12525, 12522, 12540]], [[13070, 13070], "mapped", [12460, 12525, 12531]], [[13071, 13071], "mapped", [12460, 12531, 12510]], [[13072, 13072], "mapped", [12462, 12460]], [[13073, 13073], "mapped", [12462, 12491, 12540]], [[13074, 13074], "mapped", [12461, 12517, 12522, 12540]], [[13075, 13075], "mapped", [12462, 12523, 12480, 12540]], [[13076, 13076], "mapped", [12461, 12525]], [[13077, 13077], "mapped", [12461, 12525, 12464, 12521, 12512]], [[13078, 13078], "mapped", [12461, 12525, 12513, 12540, 12488, 12523]], [[13079, 13079], "mapped", [12461, 12525, 12527, 12483, 12488]], [[13080, 13080], "mapped", [12464, 12521, 12512]], [[13081, 13081], "mapped", [12464, 12521, 12512, 12488, 12531]], [[13082, 13082], "mapped", [12463, 12523, 12476, 12452, 12525]], [[13083, 13083], "mapped", [12463, 12525, 12540, 12493]], [[13084, 13084], "mapped", [12465, 12540, 12473]], [[13085, 13085], "mapped", [12467, 12523, 12490]], [[13086, 13086], "mapped", [12467, 12540, 12509]], [[13087, 13087], "mapped", [12469, 12452, 12463, 12523]], [[13088, 13088], "mapped", [12469, 12531, 12481, 12540, 12512]], [[13089, 13089], "mapped", [12471, 12522, 12531, 12464]], [[13090, 13090], "mapped", [12475, 12531, 12481]], [[13091, 13091], "mapped", [12475, 12531, 12488]], [[13092, 13092], "mapped", [12480, 12540, 12473]], [[13093, 13093], "mapped", [12487, 12471]], [[13094, 13094], "mapped", [12489, 12523]], [[13095, 13095], "mapped", [12488, 12531]], [[13096, 13096], "mapped", [12490, 12494]], [[13097, 13097], "mapped", [12494, 12483, 12488]], [[13098, 13098], "mapped", [12495, 12452, 12484]], [[13099, 13099], "mapped", [12497, 12540, 12475, 12531, 12488]], [[13100, 13100], "mapped", [12497, 12540, 12484]], [[13101, 13101], "mapped", [12496, 12540, 12524, 12523]], [[13102, 13102], "mapped", [12500, 12450, 12473, 12488, 12523]], [[13103, 13103], "mapped", [12500, 12463, 12523]], [[13104, 13104], "mapped", [12500, 12467]], [[13105, 13105], "mapped", [12499, 12523]], [[13106, 13106], "mapped", [12501, 12449, 12521, 12483, 12489]], [[13107, 13107], "mapped", [12501, 12451, 12540, 12488]], [[13108, 13108], "mapped", [12502, 12483, 12471, 12455, 12523]], [[13109, 13109], "mapped", [12501, 12521, 12531]], [[13110, 13110], "mapped", [12504, 12463, 12479, 12540, 12523]], [[13111, 13111], "mapped", [12506, 12477]], [[13112, 13112], "mapped", [12506, 12491, 12498]], [[13113, 13113], "mapped", [12504, 12523, 12484]], [[13114, 13114], "mapped", [12506, 12531, 12473]], [[13115, 13115], "mapped", [12506, 12540, 12472]], [[13116, 13116], "mapped", [12505, 12540, 12479]], [[13117, 13117], "mapped", [12509, 12452, 12531, 12488]], [[13118, 13118], "mapped", [12508, 12523, 12488]], [[13119, 13119], "mapped", [12507, 12531]], [[13120, 13120], "mapped", [12509, 12531, 12489]], [[13121, 13121], "mapped", [12507, 12540, 12523]], [[13122, 13122], "mapped", [12507, 12540, 12531]], [[13123, 13123], "mapped", [12510, 12452, 12463, 12525]], [[13124, 13124], "mapped", [12510, 12452, 12523]], [[13125, 13125], "mapped", [12510, 12483, 12495]], [[13126, 13126], "mapped", [12510, 12523, 12463]], [[13127, 13127], "mapped", [12510, 12531, 12471, 12519, 12531]], [[13128, 13128], "mapped", [12511, 12463, 12525, 12531]], [[13129, 13129], "mapped", [12511, 12522]], [[13130, 13130], "mapped", [12511, 12522, 12496, 12540, 12523]], [[13131, 13131], "mapped", [12513, 12460]], [[13132, 13132], "mapped", [12513, 12460, 12488, 12531]], [[13133, 13133], "mapped", [12513, 12540, 12488, 12523]], [[13134, 13134], "mapped", [12516, 12540, 12489]], [[13135, 13135], "mapped", [12516, 12540, 12523]], [[13136, 13136], "mapped", [12518, 12450, 12531]], [[13137, 13137], "mapped", [12522, 12483, 12488, 12523]], [[13138, 13138], "mapped", [12522, 12521]], [[13139, 13139], "mapped", [12523, 12500, 12540]], [[13140, 13140], "mapped", [12523, 12540, 12502, 12523]], [[13141, 13141], "mapped", [12524, 12512]], [[13142, 13142], "mapped", [12524, 12531, 12488, 12466, 12531]], [[13143, 13143], "mapped", [12527, 12483, 12488]], [[13144, 13144], "mapped", [48, 28857]], [[13145, 13145], "mapped", [49, 28857]], [[13146, 13146], "mapped", [50, 28857]], [[13147, 13147], "mapped", [51, 28857]], [[13148, 13148], "mapped", [52, 28857]], [[13149, 13149], "mapped", [53, 28857]], [[13150, 13150], "mapped", [54, 28857]], [[13151, 13151], "mapped", [55, 28857]], [[13152, 13152], "mapped", [56, 28857]], [[13153, 13153], "mapped", [57, 28857]], [[13154, 13154], "mapped", [49, 48, 28857]], [[13155, 13155], "mapped", [49, 49, 28857]], [[13156, 13156], "mapped", [49, 50, 28857]], [[13157, 13157], "mapped", [49, 51, 28857]], [[13158, 13158], "mapped", [49, 52, 28857]], [[13159, 13159], "mapped", [49, 53, 28857]], [[13160, 13160], "mapped", [49, 54, 28857]], [[13161, 13161], "mapped", [49, 55, 28857]], [[13162, 13162], "mapped", [49, 56, 28857]], [[13163, 13163], "mapped", [49, 57, 28857]], [[13164, 13164], "mapped", [50, 48, 28857]], [[13165, 13165], "mapped", [50, 49, 28857]], [[13166, 13166], "mapped", [50, 50, 28857]], [[13167, 13167], "mapped", [50, 51, 28857]], [[13168, 13168], "mapped", [50, 52, 28857]], [[13169, 13169], "mapped", [104, 112, 97]], [[13170, 13170], "mapped", [100, 97]], [[13171, 13171], "mapped", [97, 117]], [[13172, 13172], "mapped", [98, 97, 114]], [[13173, 13173], "mapped", [111, 118]], [[13174, 13174], "mapped", [112, 99]], [[13175, 13175], "mapped", [100, 109]], [[13176, 13176], "mapped", [100, 109, 50]], [[13177, 13177], "mapped", [100, 109, 51]], [[13178, 13178], "mapped", [105, 117]], [[13179, 13179], "mapped", [24179, 25104]], [[13180, 13180], "mapped", [26157, 21644]], [[13181, 13181], "mapped", [22823, 27491]], [[13182, 13182], "mapped", [26126, 27835]], [[13183, 13183], "mapped", [26666, 24335, 20250, 31038]], [[13184, 13184], "mapped", [112, 97]], [[13185, 13185], "mapped", [110, 97]], [[13186, 13186], "mapped", [956, 97]], [[13187, 13187], "mapped", [109, 97]], [[13188, 13188], "mapped", [107, 97]], [[13189, 13189], "mapped", [107, 98]], [[13190, 13190], "mapped", [109, 98]], [[13191, 13191], "mapped", [103, 98]], [[13192, 13192], "mapped", [99, 97, 108]], [[13193, 13193], "mapped", [107, 99, 97, 108]], [[13194, 13194], "mapped", [112, 102]], [[13195, 13195], "mapped", [110, 102]], [[13196, 13196], "mapped", [956, 102]], [[13197, 13197], "mapped", [956, 103]], [[13198, 13198], "mapped", [109, 103]], [[13199, 13199], "mapped", [107, 103]], [[13200, 13200], "mapped", [104, 122]], [[13201, 13201], "mapped", [107, 104, 122]], [[13202, 13202], "mapped", [109, 104, 122]], [[13203, 13203], "mapped", [103, 104, 122]], [[13204, 13204], "mapped", [116, 104, 122]], [[13205, 13205], "mapped", [956, 108]], [[13206, 13206], "mapped", [109, 108]], [[13207, 13207], "mapped", [100, 108]], [[13208, 13208], "mapped", [107, 108]], [[13209, 13209], "mapped", [102, 109]], [[13210, 13210], "mapped", [110, 109]], [[13211, 13211], "mapped", [956, 109]], [[13212, 13212], "mapped", [109, 109]], [[13213, 13213], "mapped", [99, 109]], [[13214, 13214], "mapped", [107, 109]], [[13215, 13215], "mapped", [109, 109, 50]], [[13216, 13216], "mapped", [99, 109, 50]], [[13217, 13217], "mapped", [109, 50]], [[13218, 13218], "mapped", [107, 109, 50]], [[13219, 13219], "mapped", [109, 109, 51]], [[13220, 13220], "mapped", [99, 109, 51]], [[13221, 13221], "mapped", [109, 51]], [[13222, 13222], "mapped", [107, 109, 51]], [[13223, 13223], "mapped", [109, 8725, 115]], [[13224, 13224], "mapped", [109, 8725, 115, 50]], [[13225, 13225], "mapped", [112, 97]], [[13226, 13226], "mapped", [107, 112, 97]], [[13227, 13227], "mapped", [109, 112, 97]], [[13228, 13228], "mapped", [103, 112, 97]], [[13229, 13229], "mapped", [114, 97, 100]], [[13230, 13230], "mapped", [114, 97, 100, 8725, 115]], [[13231, 13231], "mapped", [114, 97, 100, 8725, 115, 50]], [[13232, 13232], "mapped", [112, 115]], [[13233, 13233], "mapped", [110, 115]], [[13234, 13234], "mapped", [956, 115]], [[13235, 13235], "mapped", [109, 115]], [[13236, 13236], "mapped", [112, 118]], [[13237, 13237], "mapped", [110, 118]], [[13238, 13238], "mapped", [956, 118]], [[13239, 13239], "mapped", [109, 118]], [[13240, 13240], "mapped", [107, 118]], [[13241, 13241], "mapped", [109, 118]], [[13242, 13242], "mapped", [112, 119]], [[13243, 13243], "mapped", [110, 119]], [[13244, 13244], "mapped", [956, 119]], [[13245, 13245], "mapped", [109, 119]], [[13246, 13246], "mapped", [107, 119]], [[13247, 13247], "mapped", [109, 119]], [[13248, 13248], "mapped", [107, 969]], [[13249, 13249], "mapped", [109, 969]], [[13250, 13250], "disallowed"], [[13251, 13251], "mapped", [98, 113]], [[13252, 13252], "mapped", [99, 99]], [[13253, 13253], "mapped", [99, 100]], [[13254, 13254], "mapped", [99, 8725, 107, 103]], [[13255, 13255], "disallowed"], [[13256, 13256], "mapped", [100, 98]], [[13257, 13257], "mapped", [103, 121]], [[13258, 13258], "mapped", [104, 97]], [[13259, 13259], "mapped", [104, 112]], [[13260, 13260], "mapped", [105, 110]], [[13261, 13261], "mapped", [107, 107]], [[13262, 13262], "mapped", [107, 109]], [[13263, 13263], "mapped", [107, 116]], [[13264, 13264], "mapped", [108, 109]], [[13265, 13265], "mapped", [108, 110]], [[13266, 13266], "mapped", [108, 111, 103]], [[13267, 13267], "mapped", [108, 120]], [[13268, 13268], "mapped", [109, 98]], [[13269, 13269], "mapped", [109, 105, 108]], [[13270, 13270], "mapped", [109, 111, 108]], [[13271, 13271], "mapped", [112, 104]], [[13272, 13272], "disallowed"], [[13273, 13273], "mapped", [112, 112, 109]], [[13274, 13274], "mapped", [112, 114]], [[13275, 13275], "mapped", [115, 114]], [[13276, 13276], "mapped", [115, 118]], [[13277, 13277], "mapped", [119, 98]], [[13278, 13278], "mapped", [118, 8725, 109]], [[13279, 13279], "mapped", [97, 8725, 109]], [[13280, 13280], "mapped", [49, 26085]], [[13281, 13281], "mapped", [50, 26085]], [[13282, 13282], "mapped", [51, 26085]], [[13283, 13283], "mapped", [52, 26085]], [[13284, 13284], "mapped", [53, 26085]], [[13285, 13285], "mapped", [54, 26085]], [[13286, 13286], "mapped", [55, 26085]], [[13287, 13287], "mapped", [56, 26085]], [[13288, 13288], "mapped", [57, 26085]], [[13289, 13289], "mapped", [49, 48, 26085]], [[13290, 13290], "mapped", [49, 49, 26085]], [[13291, 13291], "mapped", [49, 50, 26085]], [[13292, 13292], "mapped", [49, 51, 26085]], [[13293, 13293], "mapped", [49, 52, 26085]], [[13294, 13294], "mapped", [49, 53, 26085]], [[13295, 13295], "mapped", [49, 54, 26085]], [[13296, 13296], "mapped", [49, 55, 26085]], [[13297, 13297], "mapped", [49, 56, 26085]], [[13298, 13298], "mapped", [49, 57, 26085]], [[13299, 13299], "mapped", [50, 48, 26085]], [[13300, 13300], "mapped", [50, 49, 26085]], [[13301, 13301], "mapped", [50, 50, 26085]], [[13302, 13302], "mapped", [50, 51, 26085]], [[13303, 13303], "mapped", [50, 52, 26085]], [[13304, 13304], "mapped", [50, 53, 26085]], [[13305, 13305], "mapped", [50, 54, 26085]], [[13306, 13306], "mapped", [50, 55, 26085]], [[13307, 13307], "mapped", [50, 56, 26085]], [[13308, 13308], "mapped", [50, 57, 26085]], [[13309, 13309], "mapped", [51, 48, 26085]], [[13310, 13310], "mapped", [51, 49, 26085]], [[13311, 13311], "mapped", [103, 97, 108]], [[13312, 19893], "valid"], [[19894, 19903], "disallowed"], [[19904, 19967], "valid", [], "NV8"], [[19968, 40869], "valid"], [[40870, 40891], "valid"], [[40892, 40899], "valid"], [[40900, 40907], "valid"], [[40908, 40908], "valid"], [[40909, 40917], "valid"], [[40918, 40959], "disallowed"], [[40960, 42124], "valid"], [[42125, 42127], "disallowed"], [[42128, 42145], "valid", [], "NV8"], [[42146, 42147], "valid", [], "NV8"], [[42148, 42163], "valid", [], "NV8"], [[42164, 42164], "valid", [], "NV8"], [[42165, 42176], "valid", [], "NV8"], [[42177, 42177], "valid", [], "NV8"], [[42178, 42180], "valid", [], "NV8"], [[42181, 42181], "valid", [], "NV8"], [[42182, 42182], "valid", [], "NV8"], [[42183, 42191], "disallowed"], [[42192, 42237], "valid"], [[42238, 42239], "valid", [], "NV8"], [[42240, 42508], "valid"], [[42509, 42511], "valid", [], "NV8"], [[42512, 42539], "valid"], [[42540, 42559], "disallowed"], [[42560, 42560], "mapped", [42561]], [[42561, 42561], "valid"], [[42562, 42562], "mapped", [42563]], [[42563, 42563], "valid"], [[42564, 42564], "mapped", [42565]], [[42565, 42565], "valid"], [[42566, 42566], "mapped", [42567]], [[42567, 42567], "valid"], [[42568, 42568], "mapped", [42569]], [[42569, 42569], "valid"], [[42570, 42570], "mapped", [42571]], [[42571, 42571], "valid"], [[42572, 42572], "mapped", [42573]], [[42573, 42573], "valid"], [[42574, 42574], "mapped", [42575]], [[42575, 42575], "valid"], [[42576, 42576], "mapped", [42577]], [[42577, 42577], "valid"], [[42578, 42578], "mapped", [42579]], [[42579, 42579], "valid"], [[42580, 42580], "mapped", [42581]], [[42581, 42581], "valid"], [[42582, 42582], "mapped", [42583]], [[42583, 42583], "valid"], [[42584, 42584], "mapped", [42585]], [[42585, 42585], "valid"], [[42586, 42586], "mapped", [42587]], [[42587, 42587], "valid"], [[42588, 42588], "mapped", [42589]], [[42589, 42589], "valid"], [[42590, 42590], "mapped", [42591]], [[42591, 42591], "valid"], [[42592, 42592], "mapped", [42593]], [[42593, 42593], "valid"], [[42594, 42594], "mapped", [42595]], [[42595, 42595], "valid"], [[42596, 42596], "mapped", [42597]], [[42597, 42597], "valid"], [[42598, 42598], "mapped", [42599]], [[42599, 42599], "valid"], [[42600, 42600], "mapped", [42601]], [[42601, 42601], "valid"], [[42602, 42602], "mapped", [42603]], [[42603, 42603], "valid"], [[42604, 42604], "mapped", [42605]], [[42605, 42607], "valid"], [[42608, 42611], "valid", [], "NV8"], [[42612, 42619], "valid"], [[42620, 42621], "valid"], [[42622, 42622], "valid", [], "NV8"], [[42623, 42623], "valid"], [[42624, 42624], "mapped", [42625]], [[42625, 42625], "valid"], [[42626, 42626], "mapped", [42627]], [[42627, 42627], "valid"], [[42628, 42628], "mapped", [42629]], [[42629, 42629], "valid"], [[42630, 42630], "mapped", [42631]], [[42631, 42631], "valid"], [[42632, 42632], "mapped", [42633]], [[42633, 42633], "valid"], [[42634, 42634], "mapped", [42635]], [[42635, 42635], "valid"], [[42636, 42636], "mapped", [42637]], [[42637, 42637], "valid"], [[42638, 42638], "mapped", [42639]], [[42639, 42639], "valid"], [[42640, 42640], "mapped", [42641]], [[42641, 42641], "valid"], [[42642, 42642], "mapped", [42643]], [[42643, 42643], "valid"], [[42644, 42644], "mapped", [42645]], [[42645, 42645], "valid"], [[42646, 42646], "mapped", [42647]], [[42647, 42647], "valid"], [[42648, 42648], "mapped", [42649]], [[42649, 42649], "valid"], [[42650, 42650], "mapped", [42651]], [[42651, 42651], "valid"], [[42652, 42652], "mapped", [1098]], [[42653, 42653], "mapped", [1100]], [[42654, 42654], "valid"], [[42655, 42655], "valid"], [[42656, 42725], "valid"], [[42726, 42735], "valid", [], "NV8"], [[42736, 42737], "valid"], [[42738, 42743], "valid", [], "NV8"], [[42744, 42751], "disallowed"], [[42752, 42774], "valid", [], "NV8"], [[42775, 42778], "valid"], [[42779, 42783], "valid"], [[42784, 42785], "valid", [], "NV8"], [[42786, 42786], "mapped", [42787]], [[42787, 42787], "valid"], [[42788, 42788], "mapped", [42789]], [[42789, 42789], "valid"], [[42790, 42790], "mapped", [42791]], [[42791, 42791], "valid"], [[42792, 42792], "mapped", [42793]], [[42793, 42793], "valid"], [[42794, 42794], "mapped", [42795]], [[42795, 42795], "valid"], [[42796, 42796], "mapped", [42797]], [[42797, 42797], "valid"], [[42798, 42798], "mapped", [42799]], [[42799, 42801], "valid"], [[42802, 42802], "mapped", [42803]], [[42803, 42803], "valid"], [[42804, 42804], "mapped", [42805]], [[42805, 42805], "valid"], [[42806, 42806], "mapped", [42807]], [[42807, 42807], "valid"], [[42808, 42808], "mapped", [42809]], [[42809, 42809], "valid"], [[42810, 42810], "mapped", [42811]], [[42811, 42811], "valid"], [[42812, 42812], "mapped", [42813]], [[42813, 42813], "valid"], [[42814, 42814], "mapped", [42815]], [[42815, 42815], "valid"], [[42816, 42816], "mapped", [42817]], [[42817, 42817], "valid"], [[42818, 42818], "mapped", [42819]], [[42819, 42819], "valid"], [[42820, 42820], "mapped", [42821]], [[42821, 42821], "valid"], [[42822, 42822], "mapped", [42823]], [[42823, 42823], "valid"], [[42824, 42824], "mapped", [42825]], [[42825, 42825], "valid"], [[42826, 42826], "mapped", [42827]], [[42827, 42827], "valid"], [[42828, 42828], "mapped", [42829]], [[42829, 42829], "valid"], [[42830, 42830], "mapped", [42831]], [[42831, 42831], "valid"], [[42832, 42832], "mapped", [42833]], [[42833, 42833], "valid"], [[42834, 42834], "mapped", [42835]], [[42835, 42835], "valid"], [[42836, 42836], "mapped", [42837]], [[42837, 42837], "valid"], [[42838, 42838], "mapped", [42839]], [[42839, 42839], "valid"], [[42840, 42840], "mapped", [42841]], [[42841, 42841], "valid"], [[42842, 42842], "mapped", [42843]], [[42843, 42843], "valid"], [[42844, 42844], "mapped", [42845]], [[42845, 42845], "valid"], [[42846, 42846], "mapped", [42847]], [[42847, 42847], "valid"], [[42848, 42848], "mapped", [42849]], [[42849, 42849], "valid"], [[42850, 42850], "mapped", [42851]], [[42851, 42851], "valid"], [[42852, 42852], "mapped", [42853]], [[42853, 42853], "valid"], [[42854, 42854], "mapped", [42855]], [[42855, 42855], "valid"], [[42856, 42856], "mapped", [42857]], [[42857, 42857], "valid"], [[42858, 42858], "mapped", [42859]], [[42859, 42859], "valid"], [[42860, 42860], "mapped", [42861]], [[42861, 42861], "valid"], [[42862, 42862], "mapped", [42863]], [[42863, 42863], "valid"], [[42864, 42864], "mapped", [42863]], [[42865, 42872], "valid"], [[42873, 42873], "mapped", [42874]], [[42874, 42874], "valid"], [[42875, 42875], "mapped", [42876]], [[42876, 42876], "valid"], [[42877, 42877], "mapped", [7545]], [[42878, 42878], "mapped", [42879]], [[42879, 42879], "valid"], [[42880, 42880], "mapped", [42881]], [[42881, 42881], "valid"], [[42882, 42882], "mapped", [42883]], [[42883, 42883], "valid"], [[42884, 42884], "mapped", [42885]], [[42885, 42885], "valid"], [[42886, 42886], "mapped", [42887]], [[42887, 42888], "valid"], [[42889, 42890], "valid", [], "NV8"], [[42891, 42891], "mapped", [42892]], [[42892, 42892], "valid"], [[42893, 42893], "mapped", [613]], [[42894, 42894], "valid"], [[42895, 42895], "valid"], [[42896, 42896], "mapped", [42897]], [[42897, 42897], "valid"], [[42898, 42898], "mapped", [42899]], [[42899, 42899], "valid"], [[42900, 42901], "valid"], [[42902, 42902], "mapped", [42903]], [[42903, 42903], "valid"], [[42904, 42904], "mapped", [42905]], [[42905, 42905], "valid"], [[42906, 42906], "mapped", [42907]], [[42907, 42907], "valid"], [[42908, 42908], "mapped", [42909]], [[42909, 42909], "valid"], [[42910, 42910], "mapped", [42911]], [[42911, 42911], "valid"], [[42912, 42912], "mapped", [42913]], [[42913, 42913], "valid"], [[42914, 42914], "mapped", [42915]], [[42915, 42915], "valid"], [[42916, 42916], "mapped", [42917]], [[42917, 42917], "valid"], [[42918, 42918], "mapped", [42919]], [[42919, 42919], "valid"], [[42920, 42920], "mapped", [42921]], [[42921, 42921], "valid"], [[42922, 42922], "mapped", [614]], [[42923, 42923], "mapped", [604]], [[42924, 42924], "mapped", [609]], [[42925, 42925], "mapped", [620]], [[42926, 42927], "disallowed"], [[42928, 42928], "mapped", [670]], [[42929, 42929], "mapped", [647]], [[42930, 42930], "mapped", [669]], [[42931, 42931], "mapped", [43859]], [[42932, 42932], "mapped", [42933]], [[42933, 42933], "valid"], [[42934, 42934], "mapped", [42935]], [[42935, 42935], "valid"], [[42936, 42998], "disallowed"], [[42999, 42999], "valid"], [[43e3, 43e3], "mapped", [295]], [[43001, 43001], "mapped", [339]], [[43002, 43002], "valid"], [[43003, 43007], "valid"], [[43008, 43047], "valid"], [[43048, 43051], "valid", [], "NV8"], [[43052, 43055], "disallowed"], [[43056, 43065], "valid", [], "NV8"], [[43066, 43071], "disallowed"], [[43072, 43123], "valid"], [[43124, 43127], "valid", [], "NV8"], [[43128, 43135], "disallowed"], [[43136, 43204], "valid"], [[43205, 43213], "disallowed"], [[43214, 43215], "valid", [], "NV8"], [[43216, 43225], "valid"], [[43226, 43231], "disallowed"], [[43232, 43255], "valid"], [[43256, 43258], "valid", [], "NV8"], [[43259, 43259], "valid"], [[43260, 43260], "valid", [], "NV8"], [[43261, 43261], "valid"], [[43262, 43263], "disallowed"], [[43264, 43309], "valid"], [[43310, 43311], "valid", [], "NV8"], [[43312, 43347], "valid"], [[43348, 43358], "disallowed"], [[43359, 43359], "valid", [], "NV8"], [[43360, 43388], "valid", [], "NV8"], [[43389, 43391], "disallowed"], [[43392, 43456], "valid"], [[43457, 43469], "valid", [], "NV8"], [[43470, 43470], "disallowed"], [[43471, 43481], "valid"], [[43482, 43485], "disallowed"], [[43486, 43487], "valid", [], "NV8"], [[43488, 43518], "valid"], [[43519, 43519], "disallowed"], [[43520, 43574], "valid"], [[43575, 43583], "disallowed"], [[43584, 43597], "valid"], [[43598, 43599], "disallowed"], [[43600, 43609], "valid"], [[43610, 43611], "disallowed"], [[43612, 43615], "valid", [], "NV8"], [[43616, 43638], "valid"], [[43639, 43641], "valid", [], "NV8"], [[43642, 43643], "valid"], [[43644, 43647], "valid"], [[43648, 43714], "valid"], [[43715, 43738], "disallowed"], [[43739, 43741], "valid"], [[43742, 43743], "valid", [], "NV8"], [[43744, 43759], "valid"], [[43760, 43761], "valid", [], "NV8"], [[43762, 43766], "valid"], [[43767, 43776], "disallowed"], [[43777, 43782], "valid"], [[43783, 43784], "disallowed"], [[43785, 43790], "valid"], [[43791, 43792], "disallowed"], [[43793, 43798], "valid"], [[43799, 43807], "disallowed"], [[43808, 43814], "valid"], [[43815, 43815], "disallowed"], [[43816, 43822], "valid"], [[43823, 43823], "disallowed"], [[43824, 43866], "valid"], [[43867, 43867], "valid", [], "NV8"], [[43868, 43868], "mapped", [42791]], [[43869, 43869], "mapped", [43831]], [[43870, 43870], "mapped", [619]], [[43871, 43871], "mapped", [43858]], [[43872, 43875], "valid"], [[43876, 43877], "valid"], [[43878, 43887], "disallowed"], [[43888, 43888], "mapped", [5024]], [[43889, 43889], "mapped", [5025]], [[43890, 43890], "mapped", [5026]], [[43891, 43891], "mapped", [5027]], [[43892, 43892], "mapped", [5028]], [[43893, 43893], "mapped", [5029]], [[43894, 43894], "mapped", [5030]], [[43895, 43895], "mapped", [5031]], [[43896, 43896], "mapped", [5032]], [[43897, 43897], "mapped", [5033]], [[43898, 43898], "mapped", [5034]], [[43899, 43899], "mapped", [5035]], [[43900, 43900], "mapped", [5036]], [[43901, 43901], "mapped", [5037]], [[43902, 43902], "mapped", [5038]], [[43903, 43903], "mapped", [5039]], [[43904, 43904], "mapped", [5040]], [[43905, 43905], "mapped", [5041]], [[43906, 43906], "mapped", [5042]], [[43907, 43907], "mapped", [5043]], [[43908, 43908], "mapped", [5044]], [[43909, 43909], "mapped", [5045]], [[43910, 43910], "mapped", [5046]], [[43911, 43911], "mapped", [5047]], [[43912, 43912], "mapped", [5048]], [[43913, 43913], "mapped", [5049]], [[43914, 43914], "mapped", [5050]], [[43915, 43915], "mapped", [5051]], [[43916, 43916], "mapped", [5052]], [[43917, 43917], "mapped", [5053]], [[43918, 43918], "mapped", [5054]], [[43919, 43919], "mapped", [5055]], [[43920, 43920], "mapped", [5056]], [[43921, 43921], "mapped", [5057]], [[43922, 43922], "mapped", [5058]], [[43923, 43923], "mapped", [5059]], [[43924, 43924], "mapped", [5060]], [[43925, 43925], "mapped", [5061]], [[43926, 43926], "mapped", [5062]], [[43927, 43927], "mapped", [5063]], [[43928, 43928], "mapped", [5064]], [[43929, 43929], "mapped", [5065]], [[43930, 43930], "mapped", [5066]], [[43931, 43931], "mapped", [5067]], [[43932, 43932], "mapped", [5068]], [[43933, 43933], "mapped", [5069]], [[43934, 43934], "mapped", [5070]], [[43935, 43935], "mapped", [5071]], [[43936, 43936], "mapped", [5072]], [[43937, 43937], "mapped", [5073]], [[43938, 43938], "mapped", [5074]], [[43939, 43939], "mapped", [5075]], [[43940, 43940], "mapped", [5076]], [[43941, 43941], "mapped", [5077]], [[43942, 43942], "mapped", [5078]], [[43943, 43943], "mapped", [5079]], [[43944, 43944], "mapped", [5080]], [[43945, 43945], "mapped", [5081]], [[43946, 43946], "mapped", [5082]], [[43947, 43947], "mapped", [5083]], [[43948, 43948], "mapped", [5084]], [[43949, 43949], "mapped", [5085]], [[43950, 43950], "mapped", [5086]], [[43951, 43951], "mapped", [5087]], [[43952, 43952], "mapped", [5088]], [[43953, 43953], "mapped", [5089]], [[43954, 43954], "mapped", [5090]], [[43955, 43955], "mapped", [5091]], [[43956, 43956], "mapped", [5092]], [[43957, 43957], "mapped", [5093]], [[43958, 43958], "mapped", [5094]], [[43959, 43959], "mapped", [5095]], [[43960, 43960], "mapped", [5096]], [[43961, 43961], "mapped", [5097]], [[43962, 43962], "mapped", [5098]], [[43963, 43963], "mapped", [5099]], [[43964, 43964], "mapped", [5100]], [[43965, 43965], "mapped", [5101]], [[43966, 43966], "mapped", [5102]], [[43967, 43967], "mapped", [5103]], [[43968, 44010], "valid"], [[44011, 44011], "valid", [], "NV8"], [[44012, 44013], "valid"], [[44014, 44015], "disallowed"], [[44016, 44025], "valid"], [[44026, 44031], "disallowed"], [[44032, 55203], "valid"], [[55204, 55215], "disallowed"], [[55216, 55238], "valid", [], "NV8"], [[55239, 55242], "disallowed"], [[55243, 55291], "valid", [], "NV8"], [[55292, 55295], "disallowed"], [[55296, 57343], "disallowed"], [[57344, 63743], "disallowed"], [[63744, 63744], "mapped", [35912]], [[63745, 63745], "mapped", [26356]], [[63746, 63746], "mapped", [36554]], [[63747, 63747], "mapped", [36040]], [[63748, 63748], "mapped", [28369]], [[63749, 63749], "mapped", [20018]], [[63750, 63750], "mapped", [21477]], [[63751, 63752], "mapped", [40860]], [[63753, 63753], "mapped", [22865]], [[63754, 63754], "mapped", [37329]], [[63755, 63755], "mapped", [21895]], [[63756, 63756], "mapped", [22856]], [[63757, 63757], "mapped", [25078]], [[63758, 63758], "mapped", [30313]], [[63759, 63759], "mapped", [32645]], [[63760, 63760], "mapped", [34367]], [[63761, 63761], "mapped", [34746]], [[63762, 63762], "mapped", [35064]], [[63763, 63763], "mapped", [37007]], [[63764, 63764], "mapped", [27138]], [[63765, 63765], "mapped", [27931]], [[63766, 63766], "mapped", [28889]], [[63767, 63767], "mapped", [29662]], [[63768, 63768], "mapped", [33853]], [[63769, 63769], "mapped", [37226]], [[63770, 63770], "mapped", [39409]], [[63771, 63771], "mapped", [20098]], [[63772, 63772], "mapped", [21365]], [[63773, 63773], "mapped", [27396]], [[63774, 63774], "mapped", [29211]], [[63775, 63775], "mapped", [34349]], [[63776, 63776], "mapped", [40478]], [[63777, 63777], "mapped", [23888]], [[63778, 63778], "mapped", [28651]], [[63779, 63779], "mapped", [34253]], [[63780, 63780], "mapped", [35172]], [[63781, 63781], "mapped", [25289]], [[63782, 63782], "mapped", [33240]], [[63783, 63783], "mapped", [34847]], [[63784, 63784], "mapped", [24266]], [[63785, 63785], "mapped", [26391]], [[63786, 63786], "mapped", [28010]], [[63787, 63787], "mapped", [29436]], [[63788, 63788], "mapped", [37070]], [[63789, 63789], "mapped", [20358]], [[63790, 63790], "mapped", [20919]], [[63791, 63791], "mapped", [21214]], [[63792, 63792], "mapped", [25796]], [[63793, 63793], "mapped", [27347]], [[63794, 63794], "mapped", [29200]], [[63795, 63795], "mapped", [30439]], [[63796, 63796], "mapped", [32769]], [[63797, 63797], "mapped", [34310]], [[63798, 63798], "mapped", [34396]], [[63799, 63799], "mapped", [36335]], [[63800, 63800], "mapped", [38706]], [[63801, 63801], "mapped", [39791]], [[63802, 63802], "mapped", [40442]], [[63803, 63803], "mapped", [30860]], [[63804, 63804], "mapped", [31103]], [[63805, 63805], "mapped", [32160]], [[63806, 63806], "mapped", [33737]], [[63807, 63807], "mapped", [37636]], [[63808, 63808], "mapped", [40575]], [[63809, 63809], "mapped", [35542]], [[63810, 63810], "mapped", [22751]], [[63811, 63811], "mapped", [24324]], [[63812, 63812], "mapped", [31840]], [[63813, 63813], "mapped", [32894]], [[63814, 63814], "mapped", [29282]], [[63815, 63815], "mapped", [30922]], [[63816, 63816], "mapped", [36034]], [[63817, 63817], "mapped", [38647]], [[63818, 63818], "mapped", [22744]], [[63819, 63819], "mapped", [23650]], [[63820, 63820], "mapped", [27155]], [[63821, 63821], "mapped", [28122]], [[63822, 63822], "mapped", [28431]], [[63823, 63823], "mapped", [32047]], [[63824, 63824], "mapped", [32311]], [[63825, 63825], "mapped", [38475]], [[63826, 63826], "mapped", [21202]], [[63827, 63827], "mapped", [32907]], [[63828, 63828], "mapped", [20956]], [[63829, 63829], "mapped", [20940]], [[63830, 63830], "mapped", [31260]], [[63831, 63831], "mapped", [32190]], [[63832, 63832], "mapped", [33777]], [[63833, 63833], "mapped", [38517]], [[63834, 63834], "mapped", [35712]], [[63835, 63835], "mapped", [25295]], [[63836, 63836], "mapped", [27138]], [[63837, 63837], "mapped", [35582]], [[63838, 63838], "mapped", [20025]], [[63839, 63839], "mapped", [23527]], [[63840, 63840], "mapped", [24594]], [[63841, 63841], "mapped", [29575]], [[63842, 63842], "mapped", [30064]], [[63843, 63843], "mapped", [21271]], [[63844, 63844], "mapped", [30971]], [[63845, 63845], "mapped", [20415]], [[63846, 63846], "mapped", [24489]], [[63847, 63847], "mapped", [19981]], [[63848, 63848], "mapped", [27852]], [[63849, 63849], "mapped", [25976]], [[63850, 63850], "mapped", [32034]], [[63851, 63851], "mapped", [21443]], [[63852, 63852], "mapped", [22622]], [[63853, 63853], "mapped", [30465]], [[63854, 63854], "mapped", [33865]], [[63855, 63855], "mapped", [35498]], [[63856, 63856], "mapped", [27578]], [[63857, 63857], "mapped", [36784]], [[63858, 63858], "mapped", [27784]], [[63859, 63859], "mapped", [25342]], [[63860, 63860], "mapped", [33509]], [[63861, 63861], "mapped", [25504]], [[63862, 63862], "mapped", [30053]], [[63863, 63863], "mapped", [20142]], [[63864, 63864], "mapped", [20841]], [[63865, 63865], "mapped", [20937]], [[63866, 63866], "mapped", [26753]], [[63867, 63867], "mapped", [31975]], [[63868, 63868], "mapped", [33391]], [[63869, 63869], "mapped", [35538]], [[63870, 63870], "mapped", [37327]], [[63871, 63871], "mapped", [21237]], [[63872, 63872], "mapped", [21570]], [[63873, 63873], "mapped", [22899]], [[63874, 63874], "mapped", [24300]], [[63875, 63875], "mapped", [26053]], [[63876, 63876], "mapped", [28670]], [[63877, 63877], "mapped", [31018]], [[63878, 63878], "mapped", [38317]], [[63879, 63879], "mapped", [39530]], [[63880, 63880], "mapped", [40599]], [[63881, 63881], "mapped", [40654]], [[63882, 63882], "mapped", [21147]], [[63883, 63883], "mapped", [26310]], [[63884, 63884], "mapped", [27511]], [[63885, 63885], "mapped", [36706]], [[63886, 63886], "mapped", [24180]], [[63887, 63887], "mapped", [24976]], [[63888, 63888], "mapped", [25088]], [[63889, 63889], "mapped", [25754]], [[63890, 63890], "mapped", [28451]], [[63891, 63891], "mapped", [29001]], [[63892, 63892], "mapped", [29833]], [[63893, 63893], "mapped", [31178]], [[63894, 63894], "mapped", [32244]], [[63895, 63895], "mapped", [32879]], [[63896, 63896], "mapped", [36646]], [[63897, 63897], "mapped", [34030]], [[63898, 63898], "mapped", [36899]], [[63899, 63899], "mapped", [37706]], [[63900, 63900], "mapped", [21015]], [[63901, 63901], "mapped", [21155]], [[63902, 63902], "mapped", [21693]], [[63903, 63903], "mapped", [28872]], [[63904, 63904], "mapped", [35010]], [[63905, 63905], "mapped", [35498]], [[63906, 63906], "mapped", [24265]], [[63907, 63907], "mapped", [24565]], [[63908, 63908], "mapped", [25467]], [[63909, 63909], "mapped", [27566]], [[63910, 63910], "mapped", [31806]], [[63911, 63911], "mapped", [29557]], [[63912, 63912], "mapped", [20196]], [[63913, 63913], "mapped", [22265]], [[63914, 63914], "mapped", [23527]], [[63915, 63915], "mapped", [23994]], [[63916, 63916], "mapped", [24604]], [[63917, 63917], "mapped", [29618]], [[63918, 63918], "mapped", [29801]], [[63919, 63919], "mapped", [32666]], [[63920, 63920], "mapped", [32838]], [[63921, 63921], "mapped", [37428]], [[63922, 63922], "mapped", [38646]], [[63923, 63923], "mapped", [38728]], [[63924, 63924], "mapped", [38936]], [[63925, 63925], "mapped", [20363]], [[63926, 63926], "mapped", [31150]], [[63927, 63927], "mapped", [37300]], [[63928, 63928], "mapped", [38584]], [[63929, 63929], "mapped", [24801]], [[63930, 63930], "mapped", [20102]], [[63931, 63931], "mapped", [20698]], [[63932, 63932], "mapped", [23534]], [[63933, 63933], "mapped", [23615]], [[63934, 63934], "mapped", [26009]], [[63935, 63935], "mapped", [27138]], [[63936, 63936], "mapped", [29134]], [[63937, 63937], "mapped", [30274]], [[63938, 63938], "mapped", [34044]], [[63939, 63939], "mapped", [36988]], [[63940, 63940], "mapped", [40845]], [[63941, 63941], "mapped", [26248]], [[63942, 63942], "mapped", [38446]], [[63943, 63943], "mapped", [21129]], [[63944, 63944], "mapped", [26491]], [[63945, 63945], "mapped", [26611]], [[63946, 63946], "mapped", [27969]], [[63947, 63947], "mapped", [28316]], [[63948, 63948], "mapped", [29705]], [[63949, 63949], "mapped", [30041]], [[63950, 63950], "mapped", [30827]], [[63951, 63951], "mapped", [32016]], [[63952, 63952], "mapped", [39006]], [[63953, 63953], "mapped", [20845]], [[63954, 63954], "mapped", [25134]], [[63955, 63955], "mapped", [38520]], [[63956, 63956], "mapped", [20523]], [[63957, 63957], "mapped", [23833]], [[63958, 63958], "mapped", [28138]], [[63959, 63959], "mapped", [36650]], [[63960, 63960], "mapped", [24459]], [[63961, 63961], "mapped", [24900]], [[63962, 63962], "mapped", [26647]], [[63963, 63963], "mapped", [29575]], [[63964, 63964], "mapped", [38534]], [[63965, 63965], "mapped", [21033]], [[63966, 63966], "mapped", [21519]], [[63967, 63967], "mapped", [23653]], [[63968, 63968], "mapped", [26131]], [[63969, 63969], "mapped", [26446]], [[63970, 63970], "mapped", [26792]], [[63971, 63971], "mapped", [27877]], [[63972, 63972], "mapped", [29702]], [[63973, 63973], "mapped", [30178]], [[63974, 63974], "mapped", [32633]], [[63975, 63975], "mapped", [35023]], [[63976, 63976], "mapped", [35041]], [[63977, 63977], "mapped", [37324]], [[63978, 63978], "mapped", [38626]], [[63979, 63979], "mapped", [21311]], [[63980, 63980], "mapped", [28346]], [[63981, 63981], "mapped", [21533]], [[63982, 63982], "mapped", [29136]], [[63983, 63983], "mapped", [29848]], [[63984, 63984], "mapped", [34298]], [[63985, 63985], "mapped", [38563]], [[63986, 63986], "mapped", [40023]], [[63987, 63987], "mapped", [40607]], [[63988, 63988], "mapped", [26519]], [[63989, 63989], "mapped", [28107]], [[63990, 63990], "mapped", [33256]], [[63991, 63991], "mapped", [31435]], [[63992, 63992], "mapped", [31520]], [[63993, 63993], "mapped", [31890]], [[63994, 63994], "mapped", [29376]], [[63995, 63995], "mapped", [28825]], [[63996, 63996], "mapped", [35672]], [[63997, 63997], "mapped", [20160]], [[63998, 63998], "mapped", [33590]], [[63999, 63999], "mapped", [21050]], [[64e3, 64e3], "mapped", [20999]], [[64001, 64001], "mapped", [24230]], [[64002, 64002], "mapped", [25299]], [[64003, 64003], "mapped", [31958]], [[64004, 64004], "mapped", [23429]], [[64005, 64005], "mapped", [27934]], [[64006, 64006], "mapped", [26292]], [[64007, 64007], "mapped", [36667]], [[64008, 64008], "mapped", [34892]], [[64009, 64009], "mapped", [38477]], [[64010, 64010], "mapped", [35211]], [[64011, 64011], "mapped", [24275]], [[64012, 64012], "mapped", [20800]], [[64013, 64013], "mapped", [21952]], [[64014, 64015], "valid"], [[64016, 64016], "mapped", [22618]], [[64017, 64017], "valid"], [[64018, 64018], "mapped", [26228]], [[64019, 64020], "valid"], [[64021, 64021], "mapped", [20958]], [[64022, 64022], "mapped", [29482]], [[64023, 64023], "mapped", [30410]], [[64024, 64024], "mapped", [31036]], [[64025, 64025], "mapped", [31070]], [[64026, 64026], "mapped", [31077]], [[64027, 64027], "mapped", [31119]], [[64028, 64028], "mapped", [38742]], [[64029, 64029], "mapped", [31934]], [[64030, 64030], "mapped", [32701]], [[64031, 64031], "valid"], [[64032, 64032], "mapped", [34322]], [[64033, 64033], "valid"], [[64034, 64034], "mapped", [35576]], [[64035, 64036], "valid"], [[64037, 64037], "mapped", [36920]], [[64038, 64038], "mapped", [37117]], [[64039, 64041], "valid"], [[64042, 64042], "mapped", [39151]], [[64043, 64043], "mapped", [39164]], [[64044, 64044], "mapped", [39208]], [[64045, 64045], "mapped", [40372]], [[64046, 64046], "mapped", [37086]], [[64047, 64047], "mapped", [38583]], [[64048, 64048], "mapped", [20398]], [[64049, 64049], "mapped", [20711]], [[64050, 64050], "mapped", [20813]], [[64051, 64051], "mapped", [21193]], [[64052, 64052], "mapped", [21220]], [[64053, 64053], "mapped", [21329]], [[64054, 64054], "mapped", [21917]], [[64055, 64055], "mapped", [22022]], [[64056, 64056], "mapped", [22120]], [[64057, 64057], "mapped", [22592]], [[64058, 64058], "mapped", [22696]], [[64059, 64059], "mapped", [23652]], [[64060, 64060], "mapped", [23662]], [[64061, 64061], "mapped", [24724]], [[64062, 64062], "mapped", [24936]], [[64063, 64063], "mapped", [24974]], [[64064, 64064], "mapped", [25074]], [[64065, 64065], "mapped", [25935]], [[64066, 64066], "mapped", [26082]], [[64067, 64067], "mapped", [26257]], [[64068, 64068], "mapped", [26757]], [[64069, 64069], "mapped", [28023]], [[64070, 64070], "mapped", [28186]], [[64071, 64071], "mapped", [28450]], [[64072, 64072], "mapped", [29038]], [[64073, 64073], "mapped", [29227]], [[64074, 64074], "mapped", [29730]], [[64075, 64075], "mapped", [30865]], [[64076, 64076], "mapped", [31038]], [[64077, 64077], "mapped", [31049]], [[64078, 64078], "mapped", [31048]], [[64079, 64079], "mapped", [31056]], [[64080, 64080], "mapped", [31062]], [[64081, 64081], "mapped", [31069]], [[64082, 64082], "mapped", [31117]], [[64083, 64083], "mapped", [31118]], [[64084, 64084], "mapped", [31296]], [[64085, 64085], "mapped", [31361]], [[64086, 64086], "mapped", [31680]], [[64087, 64087], "mapped", [32244]], [[64088, 64088], "mapped", [32265]], [[64089, 64089], "mapped", [32321]], [[64090, 64090], "mapped", [32626]], [[64091, 64091], "mapped", [32773]], [[64092, 64092], "mapped", [33261]], [[64093, 64094], "mapped", [33401]], [[64095, 64095], "mapped", [33879]], [[64096, 64096], "mapped", [35088]], [[64097, 64097], "mapped", [35222]], [[64098, 64098], "mapped", [35585]], [[64099, 64099], "mapped", [35641]], [[64100, 64100], "mapped", [36051]], [[64101, 64101], "mapped", [36104]], [[64102, 64102], "mapped", [36790]], [[64103, 64103], "mapped", [36920]], [[64104, 64104], "mapped", [38627]], [[64105, 64105], "mapped", [38911]], [[64106, 64106], "mapped", [38971]], [[64107, 64107], "mapped", [24693]], [[64108, 64108], "mapped", [148206]], [[64109, 64109], "mapped", [33304]], [[64110, 64111], "disallowed"], [[64112, 64112], "mapped", [20006]], [[64113, 64113], "mapped", [20917]], [[64114, 64114], "mapped", [20840]], [[64115, 64115], "mapped", [20352]], [[64116, 64116], "mapped", [20805]], [[64117, 64117], "mapped", [20864]], [[64118, 64118], "mapped", [21191]], [[64119, 64119], "mapped", [21242]], [[64120, 64120], "mapped", [21917]], [[64121, 64121], "mapped", [21845]], [[64122, 64122], "mapped", [21913]], [[64123, 64123], "mapped", [21986]], [[64124, 64124], "mapped", [22618]], [[64125, 64125], "mapped", [22707]], [[64126, 64126], "mapped", [22852]], [[64127, 64127], "mapped", [22868]], [[64128, 64128], "mapped", [23138]], [[64129, 64129], "mapped", [23336]], [[64130, 64130], "mapped", [24274]], [[64131, 64131], "mapped", [24281]], [[64132, 64132], "mapped", [24425]], [[64133, 64133], "mapped", [24493]], [[64134, 64134], "mapped", [24792]], [[64135, 64135], "mapped", [24910]], [[64136, 64136], "mapped", [24840]], [[64137, 64137], "mapped", [24974]], [[64138, 64138], "mapped", [24928]], [[64139, 64139], "mapped", [25074]], [[64140, 64140], "mapped", [25140]], [[64141, 64141], "mapped", [25540]], [[64142, 64142], "mapped", [25628]], [[64143, 64143], "mapped", [25682]], [[64144, 64144], "mapped", [25942]], [[64145, 64145], "mapped", [26228]], [[64146, 64146], "mapped", [26391]], [[64147, 64147], "mapped", [26395]], [[64148, 64148], "mapped", [26454]], [[64149, 64149], "mapped", [27513]], [[64150, 64150], "mapped", [27578]], [[64151, 64151], "mapped", [27969]], [[64152, 64152], "mapped", [28379]], [[64153, 64153], "mapped", [28363]], [[64154, 64154], "mapped", [28450]], [[64155, 64155], "mapped", [28702]], [[64156, 64156], "mapped", [29038]], [[64157, 64157], "mapped", [30631]], [[64158, 64158], "mapped", [29237]], [[64159, 64159], "mapped", [29359]], [[64160, 64160], "mapped", [29482]], [[64161, 64161], "mapped", [29809]], [[64162, 64162], "mapped", [29958]], [[64163, 64163], "mapped", [30011]], [[64164, 64164], "mapped", [30237]], [[64165, 64165], "mapped", [30239]], [[64166, 64166], "mapped", [30410]], [[64167, 64167], "mapped", [30427]], [[64168, 64168], "mapped", [30452]], [[64169, 64169], "mapped", [30538]], [[64170, 64170], "mapped", [30528]], [[64171, 64171], "mapped", [30924]], [[64172, 64172], "mapped", [31409]], [[64173, 64173], "mapped", [31680]], [[64174, 64174], "mapped", [31867]], [[64175, 64175], "mapped", [32091]], [[64176, 64176], "mapped", [32244]], [[64177, 64177], "mapped", [32574]], [[64178, 64178], "mapped", [32773]], [[64179, 64179], "mapped", [33618]], [[64180, 64180], "mapped", [33775]], [[64181, 64181], "mapped", [34681]], [[64182, 64182], "mapped", [35137]], [[64183, 64183], "mapped", [35206]], [[64184, 64184], "mapped", [35222]], [[64185, 64185], "mapped", [35519]], [[64186, 64186], "mapped", [35576]], [[64187, 64187], "mapped", [35531]], [[64188, 64188], "mapped", [35585]], [[64189, 64189], "mapped", [35582]], [[64190, 64190], "mapped", [35565]], [[64191, 64191], "mapped", [35641]], [[64192, 64192], "mapped", [35722]], [[64193, 64193], "mapped", [36104]], [[64194, 64194], "mapped", [36664]], [[64195, 64195], "mapped", [36978]], [[64196, 64196], "mapped", [37273]], [[64197, 64197], "mapped", [37494]], [[64198, 64198], "mapped", [38524]], [[64199, 64199], "mapped", [38627]], [[64200, 64200], "mapped", [38742]], [[64201, 64201], "mapped", [38875]], [[64202, 64202], "mapped", [38911]], [[64203, 64203], "mapped", [38923]], [[64204, 64204], "mapped", [38971]], [[64205, 64205], "mapped", [39698]], [[64206, 64206], "mapped", [40860]], [[64207, 64207], "mapped", [141386]], [[64208, 64208], "mapped", [141380]], [[64209, 64209], "mapped", [144341]], [[64210, 64210], "mapped", [15261]], [[64211, 64211], "mapped", [16408]], [[64212, 64212], "mapped", [16441]], [[64213, 64213], "mapped", [152137]], [[64214, 64214], "mapped", [154832]], [[64215, 64215], "mapped", [163539]], [[64216, 64216], "mapped", [40771]], [[64217, 64217], "mapped", [40846]], [[64218, 64255], "disallowed"], [[64256, 64256], "mapped", [102, 102]], [[64257, 64257], "mapped", [102, 105]], [[64258, 64258], "mapped", [102, 108]], [[64259, 64259], "mapped", [102, 102, 105]], [[64260, 64260], "mapped", [102, 102, 108]], [[64261, 64262], "mapped", [115, 116]], [[64263, 64274], "disallowed"], [[64275, 64275], "mapped", [1396, 1398]], [[64276, 64276], "mapped", [1396, 1381]], [[64277, 64277], "mapped", [1396, 1387]], [[64278, 64278], "mapped", [1406, 1398]], [[64279, 64279], "mapped", [1396, 1389]], [[64280, 64284], "disallowed"], [[64285, 64285], "mapped", [1497, 1460]], [[64286, 64286], "valid"], [[64287, 64287], "mapped", [1522, 1463]], [[64288, 64288], "mapped", [1506]], [[64289, 64289], "mapped", [1488]], [[64290, 64290], "mapped", [1491]], [[64291, 64291], "mapped", [1492]], [[64292, 64292], "mapped", [1499]], [[64293, 64293], "mapped", [1500]], [[64294, 64294], "mapped", [1501]], [[64295, 64295], "mapped", [1512]], [[64296, 64296], "mapped", [1514]], [[64297, 64297], "disallowed_STD3_mapped", [43]], [[64298, 64298], "mapped", [1513, 1473]], [[64299, 64299], "mapped", [1513, 1474]], [[64300, 64300], "mapped", [1513, 1468, 1473]], [[64301, 64301], "mapped", [1513, 1468, 1474]], [[64302, 64302], "mapped", [1488, 1463]], [[64303, 64303], "mapped", [1488, 1464]], [[64304, 64304], "mapped", [1488, 1468]], [[64305, 64305], "mapped", [1489, 1468]], [[64306, 64306], "mapped", [1490, 1468]], [[64307, 64307], "mapped", [1491, 1468]], [[64308, 64308], "mapped", [1492, 1468]], [[64309, 64309], "mapped", [1493, 1468]], [[64310, 64310], "mapped", [1494, 1468]], [[64311, 64311], "disallowed"], [[64312, 64312], "mapped", [1496, 1468]], [[64313, 64313], "mapped", [1497, 1468]], [[64314, 64314], "mapped", [1498, 1468]], [[64315, 64315], "mapped", [1499, 1468]], [[64316, 64316], "mapped", [1500, 1468]], [[64317, 64317], "disallowed"], [[64318, 64318], "mapped", [1502, 1468]], [[64319, 64319], "disallowed"], [[64320, 64320], "mapped", [1504, 1468]], [[64321, 64321], "mapped", [1505, 1468]], [[64322, 64322], "disallowed"], [[64323, 64323], "mapped", [1507, 1468]], [[64324, 64324], "mapped", [1508, 1468]], [[64325, 64325], "disallowed"], [[64326, 64326], "mapped", [1510, 1468]], [[64327, 64327], "mapped", [1511, 1468]], [[64328, 64328], "mapped", [1512, 1468]], [[64329, 64329], "mapped", [1513, 1468]], [[64330, 64330], "mapped", [1514, 1468]], [[64331, 64331], "mapped", [1493, 1465]], [[64332, 64332], "mapped", [1489, 1471]], [[64333, 64333], "mapped", [1499, 1471]], [[64334, 64334], "mapped", [1508, 1471]], [[64335, 64335], "mapped", [1488, 1500]], [[64336, 64337], "mapped", [1649]], [[64338, 64341], "mapped", [1659]], [[64342, 64345], "mapped", [1662]], [[64346, 64349], "mapped", [1664]], [[64350, 64353], "mapped", [1658]], [[64354, 64357], "mapped", [1663]], [[64358, 64361], "mapped", [1657]], [[64362, 64365], "mapped", [1700]], [[64366, 64369], "mapped", [1702]], [[64370, 64373], "mapped", [1668]], [[64374, 64377], "mapped", [1667]], [[64378, 64381], "mapped", [1670]], [[64382, 64385], "mapped", [1671]], [[64386, 64387], "mapped", [1677]], [[64388, 64389], "mapped", [1676]], [[64390, 64391], "mapped", [1678]], [[64392, 64393], "mapped", [1672]], [[64394, 64395], "mapped", [1688]], [[64396, 64397], "mapped", [1681]], [[64398, 64401], "mapped", [1705]], [[64402, 64405], "mapped", [1711]], [[64406, 64409], "mapped", [1715]], [[64410, 64413], "mapped", [1713]], [[64414, 64415], "mapped", [1722]], [[64416, 64419], "mapped", [1723]], [[64420, 64421], "mapped", [1728]], [[64422, 64425], "mapped", [1729]], [[64426, 64429], "mapped", [1726]], [[64430, 64431], "mapped", [1746]], [[64432, 64433], "mapped", [1747]], [[64434, 64449], "valid", [], "NV8"], [[64450, 64466], "disallowed"], [[64467, 64470], "mapped", [1709]], [[64471, 64472], "mapped", [1735]], [[64473, 64474], "mapped", [1734]], [[64475, 64476], "mapped", [1736]], [[64477, 64477], "mapped", [1735, 1652]], [[64478, 64479], "mapped", [1739]], [[64480, 64481], "mapped", [1733]], [[64482, 64483], "mapped", [1737]], [[64484, 64487], "mapped", [1744]], [[64488, 64489], "mapped", [1609]], [[64490, 64491], "mapped", [1574, 1575]], [[64492, 64493], "mapped", [1574, 1749]], [[64494, 64495], "mapped", [1574, 1608]], [[64496, 64497], "mapped", [1574, 1735]], [[64498, 64499], "mapped", [1574, 1734]], [[64500, 64501], "mapped", [1574, 1736]], [[64502, 64504], "mapped", [1574, 1744]], [[64505, 64507], "mapped", [1574, 1609]], [[64508, 64511], "mapped", [1740]], [[64512, 64512], "mapped", [1574, 1580]], [[64513, 64513], "mapped", [1574, 1581]], [[64514, 64514], "mapped", [1574, 1605]], [[64515, 64515], "mapped", [1574, 1609]], [[64516, 64516], "mapped", [1574, 1610]], [[64517, 64517], "mapped", [1576, 1580]], [[64518, 64518], "mapped", [1576, 1581]], [[64519, 64519], "mapped", [1576, 1582]], [[64520, 64520], "mapped", [1576, 1605]], [[64521, 64521], "mapped", [1576, 1609]], [[64522, 64522], "mapped", [1576, 1610]], [[64523, 64523], "mapped", [1578, 1580]], [[64524, 64524], "mapped", [1578, 1581]], [[64525, 64525], "mapped", [1578, 1582]], [[64526, 64526], "mapped", [1578, 1605]], [[64527, 64527], "mapped", [1578, 1609]], [[64528, 64528], "mapped", [1578, 1610]], [[64529, 64529], "mapped", [1579, 1580]], [[64530, 64530], "mapped", [1579, 1605]], [[64531, 64531], "mapped", [1579, 1609]], [[64532, 64532], "mapped", [1579, 1610]], [[64533, 64533], "mapped", [1580, 1581]], [[64534, 64534], "mapped", [1580, 1605]], [[64535, 64535], "mapped", [1581, 1580]], [[64536, 64536], "mapped", [1581, 1605]], [[64537, 64537], "mapped", [1582, 1580]], [[64538, 64538], "mapped", [1582, 1581]], [[64539, 64539], "mapped", [1582, 1605]], [[64540, 64540], "mapped", [1587, 1580]], [[64541, 64541], "mapped", [1587, 1581]], [[64542, 64542], "mapped", [1587, 1582]], [[64543, 64543], "mapped", [1587, 1605]], [[64544, 64544], "mapped", [1589, 1581]], [[64545, 64545], "mapped", [1589, 1605]], [[64546, 64546], "mapped", [1590, 1580]], [[64547, 64547], "mapped", [1590, 1581]], [[64548, 64548], "mapped", [1590, 1582]], [[64549, 64549], "mapped", [1590, 1605]], [[64550, 64550], "mapped", [1591, 1581]], [[64551, 64551], "mapped", [1591, 1605]], [[64552, 64552], "mapped", [1592, 1605]], [[64553, 64553], "mapped", [1593, 1580]], [[64554, 64554], "mapped", [1593, 1605]], [[64555, 64555], "mapped", [1594, 1580]], [[64556, 64556], "mapped", [1594, 1605]], [[64557, 64557], "mapped", [1601, 1580]], [[64558, 64558], "mapped", [1601, 1581]], [[64559, 64559], "mapped", [1601, 1582]], [[64560, 64560], "mapped", [1601, 1605]], [[64561, 64561], "mapped", [1601, 1609]], [[64562, 64562], "mapped", [1601, 1610]], [[64563, 64563], "mapped", [1602, 1581]], [[64564, 64564], "mapped", [1602, 1605]], [[64565, 64565], "mapped", [1602, 1609]], [[64566, 64566], "mapped", [1602, 1610]], [[64567, 64567], "mapped", [1603, 1575]], [[64568, 64568], "mapped", [1603, 1580]], [[64569, 64569], "mapped", [1603, 1581]], [[64570, 64570], "mapped", [1603, 1582]], [[64571, 64571], "mapped", [1603, 1604]], [[64572, 64572], "mapped", [1603, 1605]], [[64573, 64573], "mapped", [1603, 1609]], [[64574, 64574], "mapped", [1603, 1610]], [[64575, 64575], "mapped", [1604, 1580]], [[64576, 64576], "mapped", [1604, 1581]], [[64577, 64577], "mapped", [1604, 1582]], [[64578, 64578], "mapped", [1604, 1605]], [[64579, 64579], "mapped", [1604, 1609]], [[64580, 64580], "mapped", [1604, 1610]], [[64581, 64581], "mapped", [1605, 1580]], [[64582, 64582], "mapped", [1605, 1581]], [[64583, 64583], "mapped", [1605, 1582]], [[64584, 64584], "mapped", [1605, 1605]], [[64585, 64585], "mapped", [1605, 1609]], [[64586, 64586], "mapped", [1605, 1610]], [[64587, 64587], "mapped", [1606, 1580]], [[64588, 64588], "mapped", [1606, 1581]], [[64589, 64589], "mapped", [1606, 1582]], [[64590, 64590], "mapped", [1606, 1605]], [[64591, 64591], "mapped", [1606, 1609]], [[64592, 64592], "mapped", [1606, 1610]], [[64593, 64593], "mapped", [1607, 1580]], [[64594, 64594], "mapped", [1607, 1605]], [[64595, 64595], "mapped", [1607, 1609]], [[64596, 64596], "mapped", [1607, 1610]], [[64597, 64597], "mapped", [1610, 1580]], [[64598, 64598], "mapped", [1610, 1581]], [[64599, 64599], "mapped", [1610, 1582]], [[64600, 64600], "mapped", [1610, 1605]], [[64601, 64601], "mapped", [1610, 1609]], [[64602, 64602], "mapped", [1610, 1610]], [[64603, 64603], "mapped", [1584, 1648]], [[64604, 64604], "mapped", [1585, 1648]], [[64605, 64605], "mapped", [1609, 1648]], [[64606, 64606], "disallowed_STD3_mapped", [32, 1612, 1617]], [[64607, 64607], "disallowed_STD3_mapped", [32, 1613, 1617]], [[64608, 64608], "disallowed_STD3_mapped", [32, 1614, 1617]], [[64609, 64609], "disallowed_STD3_mapped", [32, 1615, 1617]], [[64610, 64610], "disallowed_STD3_mapped", [32, 1616, 1617]], [[64611, 64611], "disallowed_STD3_mapped", [32, 1617, 1648]], [[64612, 64612], "mapped", [1574, 1585]], [[64613, 64613], "mapped", [1574, 1586]], [[64614, 64614], "mapped", [1574, 1605]], [[64615, 64615], "mapped", [1574, 1606]], [[64616, 64616], "mapped", [1574, 1609]], [[64617, 64617], "mapped", [1574, 1610]], [[64618, 64618], "mapped", [1576, 1585]], [[64619, 64619], "mapped", [1576, 1586]], [[64620, 64620], "mapped", [1576, 1605]], [[64621, 64621], "mapped", [1576, 1606]], [[64622, 64622], "mapped", [1576, 1609]], [[64623, 64623], "mapped", [1576, 1610]], [[64624, 64624], "mapped", [1578, 1585]], [[64625, 64625], "mapped", [1578, 1586]], [[64626, 64626], "mapped", [1578, 1605]], [[64627, 64627], "mapped", [1578, 1606]], [[64628, 64628], "mapped", [1578, 1609]], [[64629, 64629], "mapped", [1578, 1610]], [[64630, 64630], "mapped", [1579, 1585]], [[64631, 64631], "mapped", [1579, 1586]], [[64632, 64632], "mapped", [1579, 1605]], [[64633, 64633], "mapped", [1579, 1606]], [[64634, 64634], "mapped", [1579, 1609]], [[64635, 64635], "mapped", [1579, 1610]], [[64636, 64636], "mapped", [1601, 1609]], [[64637, 64637], "mapped", [1601, 1610]], [[64638, 64638], "mapped", [1602, 1609]], [[64639, 64639], "mapped", [1602, 1610]], [[64640, 64640], "mapped", [1603, 1575]], [[64641, 64641], "mapped", [1603, 1604]], [[64642, 64642], "mapped", [1603, 1605]], [[64643, 64643], "mapped", [1603, 1609]], [[64644, 64644], "mapped", [1603, 1610]], [[64645, 64645], "mapped", [1604, 1605]], [[64646, 64646], "mapped", [1604, 1609]], [[64647, 64647], "mapped", [1604, 1610]], [[64648, 64648], "mapped", [1605, 1575]], [[64649, 64649], "mapped", [1605, 1605]], [[64650, 64650], "mapped", [1606, 1585]], [[64651, 64651], "mapped", [1606, 1586]], [[64652, 64652], "mapped", [1606, 1605]], [[64653, 64653], "mapped", [1606, 1606]], [[64654, 64654], "mapped", [1606, 1609]], [[64655, 64655], "mapped", [1606, 1610]], [[64656, 64656], "mapped", [1609, 1648]], [[64657, 64657], "mapped", [1610, 1585]], [[64658, 64658], "mapped", [1610, 1586]], [[64659, 64659], "mapped", [1610, 1605]], [[64660, 64660], "mapped", [1610, 1606]], [[64661, 64661], "mapped", [1610, 1609]], [[64662, 64662], "mapped", [1610, 1610]], [[64663, 64663], "mapped", [1574, 1580]], [[64664, 64664], "mapped", [1574, 1581]], [[64665, 64665], "mapped", [1574, 1582]], [[64666, 64666], "mapped", [1574, 1605]], [[64667, 64667], "mapped", [1574, 1607]], [[64668, 64668], "mapped", [1576, 1580]], [[64669, 64669], "mapped", [1576, 1581]], [[64670, 64670], "mapped", [1576, 1582]], [[64671, 64671], "mapped", [1576, 1605]], [[64672, 64672], "mapped", [1576, 1607]], [[64673, 64673], "mapped", [1578, 1580]], [[64674, 64674], "mapped", [1578, 1581]], [[64675, 64675], "mapped", [1578, 1582]], [[64676, 64676], "mapped", [1578, 1605]], [[64677, 64677], "mapped", [1578, 1607]], [[64678, 64678], "mapped", [1579, 1605]], [[64679, 64679], "mapped", [1580, 1581]], [[64680, 64680], "mapped", [1580, 1605]], [[64681, 64681], "mapped", [1581, 1580]], [[64682, 64682], "mapped", [1581, 1605]], [[64683, 64683], "mapped", [1582, 1580]], [[64684, 64684], "mapped", [1582, 1605]], [[64685, 64685], "mapped", [1587, 1580]], [[64686, 64686], "mapped", [1587, 1581]], [[64687, 64687], "mapped", [1587, 1582]], [[64688, 64688], "mapped", [1587, 1605]], [[64689, 64689], "mapped", [1589, 1581]], [[64690, 64690], "mapped", [1589, 1582]], [[64691, 64691], "mapped", [1589, 1605]], [[64692, 64692], "mapped", [1590, 1580]], [[64693, 64693], "mapped", [1590, 1581]], [[64694, 64694], "mapped", [1590, 1582]], [[64695, 64695], "mapped", [1590, 1605]], [[64696, 64696], "mapped", [1591, 1581]], [[64697, 64697], "mapped", [1592, 1605]], [[64698, 64698], "mapped", [1593, 1580]], [[64699, 64699], "mapped", [1593, 1605]], [[64700, 64700], "mapped", [1594, 1580]], [[64701, 64701], "mapped", [1594, 1605]], [[64702, 64702], "mapped", [1601, 1580]], [[64703, 64703], "mapped", [1601, 1581]], [[64704, 64704], "mapped", [1601, 1582]], [[64705, 64705], "mapped", [1601, 1605]], [[64706, 64706], "mapped", [1602, 1581]], [[64707, 64707], "mapped", [1602, 1605]], [[64708, 64708], "mapped", [1603, 1580]], [[64709, 64709], "mapped", [1603, 1581]], [[64710, 64710], "mapped", [1603, 1582]], [[64711, 64711], "mapped", [1603, 1604]], [[64712, 64712], "mapped", [1603, 1605]], [[64713, 64713], "mapped", [1604, 1580]], [[64714, 64714], "mapped", [1604, 1581]], [[64715, 64715], "mapped", [1604, 1582]], [[64716, 64716], "mapped", [1604, 1605]], [[64717, 64717], "mapped", [1604, 1607]], [[64718, 64718], "mapped", [1605, 1580]], [[64719, 64719], "mapped", [1605, 1581]], [[64720, 64720], "mapped", [1605, 1582]], [[64721, 64721], "mapped", [1605, 1605]], [[64722, 64722], "mapped", [1606, 1580]], [[64723, 64723], "mapped", [1606, 1581]], [[64724, 64724], "mapped", [1606, 1582]], [[64725, 64725], "mapped", [1606, 1605]], [[64726, 64726], "mapped", [1606, 1607]], [[64727, 64727], "mapped", [1607, 1580]], [[64728, 64728], "mapped", [1607, 1605]], [[64729, 64729], "mapped", [1607, 1648]], [[64730, 64730], "mapped", [1610, 1580]], [[64731, 64731], "mapped", [1610, 1581]], [[64732, 64732], "mapped", [1610, 1582]], [[64733, 64733], "mapped", [1610, 1605]], [[64734, 64734], "mapped", [1610, 1607]], [[64735, 64735], "mapped", [1574, 1605]], [[64736, 64736], "mapped", [1574, 1607]], [[64737, 64737], "mapped", [1576, 1605]], [[64738, 64738], "mapped", [1576, 1607]], [[64739, 64739], "mapped", [1578, 1605]], [[64740, 64740], "mapped", [1578, 1607]], [[64741, 64741], "mapped", [1579, 1605]], [[64742, 64742], "mapped", [1579, 1607]], [[64743, 64743], "mapped", [1587, 1605]], [[64744, 64744], "mapped", [1587, 1607]], [[64745, 64745], "mapped", [1588, 1605]], [[64746, 64746], "mapped", [1588, 1607]], [[64747, 64747], "mapped", [1603, 1604]], [[64748, 64748], "mapped", [1603, 1605]], [[64749, 64749], "mapped", [1604, 1605]], [[64750, 64750], "mapped", [1606, 1605]], [[64751, 64751], "mapped", [1606, 1607]], [[64752, 64752], "mapped", [1610, 1605]], [[64753, 64753], "mapped", [1610, 1607]], [[64754, 64754], "mapped", [1600, 1614, 1617]], [[64755, 64755], "mapped", [1600, 1615, 1617]], [[64756, 64756], "mapped", [1600, 1616, 1617]], [[64757, 64757], "mapped", [1591, 1609]], [[64758, 64758], "mapped", [1591, 1610]], [[64759, 64759], "mapped", [1593, 1609]], [[64760, 64760], "mapped", [1593, 1610]], [[64761, 64761], "mapped", [1594, 1609]], [[64762, 64762], "mapped", [1594, 1610]], [[64763, 64763], "mapped", [1587, 1609]], [[64764, 64764], "mapped", [1587, 1610]], [[64765, 64765], "mapped", [1588, 1609]], [[64766, 64766], "mapped", [1588, 1610]], [[64767, 64767], "mapped", [1581, 1609]], [[64768, 64768], "mapped", [1581, 1610]], [[64769, 64769], "mapped", [1580, 1609]], [[64770, 64770], "mapped", [1580, 1610]], [[64771, 64771], "mapped", [1582, 1609]], [[64772, 64772], "mapped", [1582, 1610]], [[64773, 64773], "mapped", [1589, 1609]], [[64774, 64774], "mapped", [1589, 1610]], [[64775, 64775], "mapped", [1590, 1609]], [[64776, 64776], "mapped", [1590, 1610]], [[64777, 64777], "mapped", [1588, 1580]], [[64778, 64778], "mapped", [1588, 1581]], [[64779, 64779], "mapped", [1588, 1582]], [[64780, 64780], "mapped", [1588, 1605]], [[64781, 64781], "mapped", [1588, 1585]], [[64782, 64782], "mapped", [1587, 1585]], [[64783, 64783], "mapped", [1589, 1585]], [[64784, 64784], "mapped", [1590, 1585]], [[64785, 64785], "mapped", [1591, 1609]], [[64786, 64786], "mapped", [1591, 1610]], [[64787, 64787], "mapped", [1593, 1609]], [[64788, 64788], "mapped", [1593, 1610]], [[64789, 64789], "mapped", [1594, 1609]], [[64790, 64790], "mapped", [1594, 1610]], [[64791, 64791], "mapped", [1587, 1609]], [[64792, 64792], "mapped", [1587, 1610]], [[64793, 64793], "mapped", [1588, 1609]], [[64794, 64794], "mapped", [1588, 1610]], [[64795, 64795], "mapped", [1581, 1609]], [[64796, 64796], "mapped", [1581, 1610]], [[64797, 64797], "mapped", [1580, 1609]], [[64798, 64798], "mapped", [1580, 1610]], [[64799, 64799], "mapped", [1582, 1609]], [[64800, 64800], "mapped", [1582, 1610]], [[64801, 64801], "mapped", [1589, 1609]], [[64802, 64802], "mapped", [1589, 1610]], [[64803, 64803], "mapped", [1590, 1609]], [[64804, 64804], "mapped", [1590, 1610]], [[64805, 64805], "mapped", [1588, 1580]], [[64806, 64806], "mapped", [1588, 1581]], [[64807, 64807], "mapped", [1588, 1582]], [[64808, 64808], "mapped", [1588, 1605]], [[64809, 64809], "mapped", [1588, 1585]], [[64810, 64810], "mapped", [1587, 1585]], [[64811, 64811], "mapped", [1589, 1585]], [[64812, 64812], "mapped", [1590, 1585]], [[64813, 64813], "mapped", [1588, 1580]], [[64814, 64814], "mapped", [1588, 1581]], [[64815, 64815], "mapped", [1588, 1582]], [[64816, 64816], "mapped", [1588, 1605]], [[64817, 64817], "mapped", [1587, 1607]], [[64818, 64818], "mapped", [1588, 1607]], [[64819, 64819], "mapped", [1591, 1605]], [[64820, 64820], "mapped", [1587, 1580]], [[64821, 64821], "mapped", [1587, 1581]], [[64822, 64822], "mapped", [1587, 1582]], [[64823, 64823], "mapped", [1588, 1580]], [[64824, 64824], "mapped", [1588, 1581]], [[64825, 64825], "mapped", [1588, 1582]], [[64826, 64826], "mapped", [1591, 1605]], [[64827, 64827], "mapped", [1592, 1605]], [[64828, 64829], "mapped", [1575, 1611]], [[64830, 64831], "valid", [], "NV8"], [[64832, 64847], "disallowed"], [[64848, 64848], "mapped", [1578, 1580, 1605]], [[64849, 64850], "mapped", [1578, 1581, 1580]], [[64851, 64851], "mapped", [1578, 1581, 1605]], [[64852, 64852], "mapped", [1578, 1582, 1605]], [[64853, 64853], "mapped", [1578, 1605, 1580]], [[64854, 64854], "mapped", [1578, 1605, 1581]], [[64855, 64855], "mapped", [1578, 1605, 1582]], [[64856, 64857], "mapped", [1580, 1605, 1581]], [[64858, 64858], "mapped", [1581, 1605, 1610]], [[64859, 64859], "mapped", [1581, 1605, 1609]], [[64860, 64860], "mapped", [1587, 1581, 1580]], [[64861, 64861], "mapped", [1587, 1580, 1581]], [[64862, 64862], "mapped", [1587, 1580, 1609]], [[64863, 64864], "mapped", [1587, 1605, 1581]], [[64865, 64865], "mapped", [1587, 1605, 1580]], [[64866, 64867], "mapped", [1587, 1605, 1605]], [[64868, 64869], "mapped", [1589, 1581, 1581]], [[64870, 64870], "mapped", [1589, 1605, 1605]], [[64871, 64872], "mapped", [1588, 1581, 1605]], [[64873, 64873], "mapped", [1588, 1580, 1610]], [[64874, 64875], "mapped", [1588, 1605, 1582]], [[64876, 64877], "mapped", [1588, 1605, 1605]], [[64878, 64878], "mapped", [1590, 1581, 1609]], [[64879, 64880], "mapped", [1590, 1582, 1605]], [[64881, 64882], "mapped", [1591, 1605, 1581]], [[64883, 64883], "mapped", [1591, 1605, 1605]], [[64884, 64884], "mapped", [1591, 1605, 1610]], [[64885, 64885], "mapped", [1593, 1580, 1605]], [[64886, 64887], "mapped", [1593, 1605, 1605]], [[64888, 64888], "mapped", [1593, 1605, 1609]], [[64889, 64889], "mapped", [1594, 1605, 1605]], [[64890, 64890], "mapped", [1594, 1605, 1610]], [[64891, 64891], "mapped", [1594, 1605, 1609]], [[64892, 64893], "mapped", [1601, 1582, 1605]], [[64894, 64894], "mapped", [1602, 1605, 1581]], [[64895, 64895], "mapped", [1602, 1605, 1605]], [[64896, 64896], "mapped", [1604, 1581, 1605]], [[64897, 64897], "mapped", [1604, 1581, 1610]], [[64898, 64898], "mapped", [1604, 1581, 1609]], [[64899, 64900], "mapped", [1604, 1580, 1580]], [[64901, 64902], "mapped", [1604, 1582, 1605]], [[64903, 64904], "mapped", [1604, 1605, 1581]], [[64905, 64905], "mapped", [1605, 1581, 1580]], [[64906, 64906], "mapped", [1605, 1581, 1605]], [[64907, 64907], "mapped", [1605, 1581, 1610]], [[64908, 64908], "mapped", [1605, 1580, 1581]], [[64909, 64909], "mapped", [1605, 1580, 1605]], [[64910, 64910], "mapped", [1605, 1582, 1580]], [[64911, 64911], "mapped", [1605, 1582, 1605]], [[64912, 64913], "disallowed"], [[64914, 64914], "mapped", [1605, 1580, 1582]], [[64915, 64915], "mapped", [1607, 1605, 1580]], [[64916, 64916], "mapped", [1607, 1605, 1605]], [[64917, 64917], "mapped", [1606, 1581, 1605]], [[64918, 64918], "mapped", [1606, 1581, 1609]], [[64919, 64920], "mapped", [1606, 1580, 1605]], [[64921, 64921], "mapped", [1606, 1580, 1609]], [[64922, 64922], "mapped", [1606, 1605, 1610]], [[64923, 64923], "mapped", [1606, 1605, 1609]], [[64924, 64925], "mapped", [1610, 1605, 1605]], [[64926, 64926], "mapped", [1576, 1582, 1610]], [[64927, 64927], "mapped", [1578, 1580, 1610]], [[64928, 64928], "mapped", [1578, 1580, 1609]], [[64929, 64929], "mapped", [1578, 1582, 1610]], [[64930, 64930], "mapped", [1578, 1582, 1609]], [[64931, 64931], "mapped", [1578, 1605, 1610]], [[64932, 64932], "mapped", [1578, 1605, 1609]], [[64933, 64933], "mapped", [1580, 1605, 1610]], [[64934, 64934], "mapped", [1580, 1581, 1609]], [[64935, 64935], "mapped", [1580, 1605, 1609]], [[64936, 64936], "mapped", [1587, 1582, 1609]], [[64937, 64937], "mapped", [1589, 1581, 1610]], [[64938, 64938], "mapped", [1588, 1581, 1610]], [[64939, 64939], "mapped", [1590, 1581, 1610]], [[64940, 64940], "mapped", [1604, 1580, 1610]], [[64941, 64941], "mapped", [1604, 1605, 1610]], [[64942, 64942], "mapped", [1610, 1581, 1610]], [[64943, 64943], "mapped", [1610, 1580, 1610]], [[64944, 64944], "mapped", [1610, 1605, 1610]], [[64945, 64945], "mapped", [1605, 1605, 1610]], [[64946, 64946], "mapped", [1602, 1605, 1610]], [[64947, 64947], "mapped", [1606, 1581, 1610]], [[64948, 64948], "mapped", [1602, 1605, 1581]], [[64949, 64949], "mapped", [1604, 1581, 1605]], [[64950, 64950], "mapped", [1593, 1605, 1610]], [[64951, 64951], "mapped", [1603, 1605, 1610]], [[64952, 64952], "mapped", [1606, 1580, 1581]], [[64953, 64953], "mapped", [1605, 1582, 1610]], [[64954, 64954], "mapped", [1604, 1580, 1605]], [[64955, 64955], "mapped", [1603, 1605, 1605]], [[64956, 64956], "mapped", [1604, 1580, 1605]], [[64957, 64957], "mapped", [1606, 1580, 1581]], [[64958, 64958], "mapped", [1580, 1581, 1610]], [[64959, 64959], "mapped", [1581, 1580, 1610]], [[64960, 64960], "mapped", [1605, 1580, 1610]], [[64961, 64961], "mapped", [1601, 1605, 1610]], [[64962, 64962], "mapped", [1576, 1581, 1610]], [[64963, 64963], "mapped", [1603, 1605, 1605]], [[64964, 64964], "mapped", [1593, 1580, 1605]], [[64965, 64965], "mapped", [1589, 1605, 1605]], [[64966, 64966], "mapped", [1587, 1582, 1610]], [[64967, 64967], "mapped", [1606, 1580, 1610]], [[64968, 64975], "disallowed"], [[64976, 65007], "disallowed"], [[65008, 65008], "mapped", [1589, 1604, 1746]], [[65009, 65009], "mapped", [1602, 1604, 1746]], [[65010, 65010], "mapped", [1575, 1604, 1604, 1607]], [[65011, 65011], "mapped", [1575, 1603, 1576, 1585]], [[65012, 65012], "mapped", [1605, 1581, 1605, 1583]], [[65013, 65013], "mapped", [1589, 1604, 1593, 1605]], [[65014, 65014], "mapped", [1585, 1587, 1608, 1604]], [[65015, 65015], "mapped", [1593, 1604, 1610, 1607]], [[65016, 65016], "mapped", [1608, 1587, 1604, 1605]], [[65017, 65017], "mapped", [1589, 1604, 1609]], [[65018, 65018], "disallowed_STD3_mapped", [1589, 1604, 1609, 32, 1575, 1604, 1604, 1607, 32, 1593, 1604, 1610, 1607, 32, 1608, 1587, 1604, 1605]], [[65019, 65019], "disallowed_STD3_mapped", [1580, 1604, 32, 1580, 1604, 1575, 1604, 1607]], [[65020, 65020], "mapped", [1585, 1740, 1575, 1604]], [[65021, 65021], "valid", [], "NV8"], [[65022, 65023], "disallowed"], [[65024, 65039], "ignored"], [[65040, 65040], "disallowed_STD3_mapped", [44]], [[65041, 65041], "mapped", [12289]], [[65042, 65042], "disallowed"], [[65043, 65043], "disallowed_STD3_mapped", [58]], [[65044, 65044], "disallowed_STD3_mapped", [59]], [[65045, 65045], "disallowed_STD3_mapped", [33]], [[65046, 65046], "disallowed_STD3_mapped", [63]], [[65047, 65047], "mapped", [12310]], [[65048, 65048], "mapped", [12311]], [[65049, 65049], "disallowed"], [[65050, 65055], "disallowed"], [[65056, 65059], "valid"], [[65060, 65062], "valid"], [[65063, 65069], "valid"], [[65070, 65071], "valid"], [[65072, 65072], "disallowed"], [[65073, 65073], "mapped", [8212]], [[65074, 65074], "mapped", [8211]], [[65075, 65076], "disallowed_STD3_mapped", [95]], [[65077, 65077], "disallowed_STD3_mapped", [40]], [[65078, 65078], "disallowed_STD3_mapped", [41]], [[65079, 65079], "disallowed_STD3_mapped", [123]], [[65080, 65080], "disallowed_STD3_mapped", [125]], [[65081, 65081], "mapped", [12308]], [[65082, 65082], "mapped", [12309]], [[65083, 65083], "mapped", [12304]], [[65084, 65084], "mapped", [12305]], [[65085, 65085], "mapped", [12298]], [[65086, 65086], "mapped", [12299]], [[65087, 65087], "mapped", [12296]], [[65088, 65088], "mapped", [12297]], [[65089, 65089], "mapped", [12300]], [[65090, 65090], "mapped", [12301]], [[65091, 65091], "mapped", [12302]], [[65092, 65092], "mapped", [12303]], [[65093, 65094], "valid", [], "NV8"], [[65095, 65095], "disallowed_STD3_mapped", [91]], [[65096, 65096], "disallowed_STD3_mapped", [93]], [[65097, 65100], "disallowed_STD3_mapped", [32, 773]], [[65101, 65103], "disallowed_STD3_mapped", [95]], [[65104, 65104], "disallowed_STD3_mapped", [44]], [[65105, 65105], "mapped", [12289]], [[65106, 65106], "disallowed"], [[65107, 65107], "disallowed"], [[65108, 65108], "disallowed_STD3_mapped", [59]], [[65109, 65109], "disallowed_STD3_mapped", [58]], [[65110, 65110], "disallowed_STD3_mapped", [63]], [[65111, 65111], "disallowed_STD3_mapped", [33]], [[65112, 65112], "mapped", [8212]], [[65113, 65113], "disallowed_STD3_mapped", [40]], [[65114, 65114], "disallowed_STD3_mapped", [41]], [[65115, 65115], "disallowed_STD3_mapped", [123]], [[65116, 65116], "disallowed_STD3_mapped", [125]], [[65117, 65117], "mapped", [12308]], [[65118, 65118], "mapped", [12309]], [[65119, 65119], "disallowed_STD3_mapped", [35]], [[65120, 65120], "disallowed_STD3_mapped", [38]], [[65121, 65121], "disallowed_STD3_mapped", [42]], [[65122, 65122], "disallowed_STD3_mapped", [43]], [[65123, 65123], "mapped", [45]], [[65124, 65124], "disallowed_STD3_mapped", [60]], [[65125, 65125], "disallowed_STD3_mapped", [62]], [[65126, 65126], "disallowed_STD3_mapped", [61]], [[65127, 65127], "disallowed"], [[65128, 65128], "disallowed_STD3_mapped", [92]], [[65129, 65129], "disallowed_STD3_mapped", [36]], [[65130, 65130], "disallowed_STD3_mapped", [37]], [[65131, 65131], "disallowed_STD3_mapped", [64]], [[65132, 65135], "disallowed"], [[65136, 65136], "disallowed_STD3_mapped", [32, 1611]], [[65137, 65137], "mapped", [1600, 1611]], [[65138, 65138], "disallowed_STD3_mapped", [32, 1612]], [[65139, 65139], "valid"], [[65140, 65140], "disallowed_STD3_mapped", [32, 1613]], [[65141, 65141], "disallowed"], [[65142, 65142], "disallowed_STD3_mapped", [32, 1614]], [[65143, 65143], "mapped", [1600, 1614]], [[65144, 65144], "disallowed_STD3_mapped", [32, 1615]], [[65145, 65145], "mapped", [1600, 1615]], [[65146, 65146], "disallowed_STD3_mapped", [32, 1616]], [[65147, 65147], "mapped", [1600, 1616]], [[65148, 65148], "disallowed_STD3_mapped", [32, 1617]], [[65149, 65149], "mapped", [1600, 1617]], [[65150, 65150], "disallowed_STD3_mapped", [32, 1618]], [[65151, 65151], "mapped", [1600, 1618]], [[65152, 65152], "mapped", [1569]], [[65153, 65154], "mapped", [1570]], [[65155, 65156], "mapped", [1571]], [[65157, 65158], "mapped", [1572]], [[65159, 65160], "mapped", [1573]], [[65161, 65164], "mapped", [1574]], [[65165, 65166], "mapped", [1575]], [[65167, 65170], "mapped", [1576]], [[65171, 65172], "mapped", [1577]], [[65173, 65176], "mapped", [1578]], [[65177, 65180], "mapped", [1579]], [[65181, 65184], "mapped", [1580]], [[65185, 65188], "mapped", [1581]], [[65189, 65192], "mapped", [1582]], [[65193, 65194], "mapped", [1583]], [[65195, 65196], "mapped", [1584]], [[65197, 65198], "mapped", [1585]], [[65199, 65200], "mapped", [1586]], [[65201, 65204], "mapped", [1587]], [[65205, 65208], "mapped", [1588]], [[65209, 65212], "mapped", [1589]], [[65213, 65216], "mapped", [1590]], [[65217, 65220], "mapped", [1591]], [[65221, 65224], "mapped", [1592]], [[65225, 65228], "mapped", [1593]], [[65229, 65232], "mapped", [1594]], [[65233, 65236], "mapped", [1601]], [[65237, 65240], "mapped", [1602]], [[65241, 65244], "mapped", [1603]], [[65245, 65248], "mapped", [1604]], [[65249, 65252], "mapped", [1605]], [[65253, 65256], "mapped", [1606]], [[65257, 65260], "mapped", [1607]], [[65261, 65262], "mapped", [1608]], [[65263, 65264], "mapped", [1609]], [[65265, 65268], "mapped", [1610]], [[65269, 65270], "mapped", [1604, 1570]], [[65271, 65272], "mapped", [1604, 1571]], [[65273, 65274], "mapped", [1604, 1573]], [[65275, 65276], "mapped", [1604, 1575]], [[65277, 65278], "disallowed"], [[65279, 65279], "ignored"], [[65280, 65280], "disallowed"], [[65281, 65281], "disallowed_STD3_mapped", [33]], [[65282, 65282], "disallowed_STD3_mapped", [34]], [[65283, 65283], "disallowed_STD3_mapped", [35]], [[65284, 65284], "disallowed_STD3_mapped", [36]], [[65285, 65285], "disallowed_STD3_mapped", [37]], [[65286, 65286], "disallowed_STD3_mapped", [38]], [[65287, 65287], "disallowed_STD3_mapped", [39]], [[65288, 65288], "disallowed_STD3_mapped", [40]], [[65289, 65289], "disallowed_STD3_mapped", [41]], [[65290, 65290], "disallowed_STD3_mapped", [42]], [[65291, 65291], "disallowed_STD3_mapped", [43]], [[65292, 65292], "disallowed_STD3_mapped", [44]], [[65293, 65293], "mapped", [45]], [[65294, 65294], "mapped", [46]], [[65295, 65295], "disallowed_STD3_mapped", [47]], [[65296, 65296], "mapped", [48]], [[65297, 65297], "mapped", [49]], [[65298, 65298], "mapped", [50]], [[65299, 65299], "mapped", [51]], [[65300, 65300], "mapped", [52]], [[65301, 65301], "mapped", [53]], [[65302, 65302], "mapped", [54]], [[65303, 65303], "mapped", [55]], [[65304, 65304], "mapped", [56]], [[65305, 65305], "mapped", [57]], [[65306, 65306], "disallowed_STD3_mapped", [58]], [[65307, 65307], "disallowed_STD3_mapped", [59]], [[65308, 65308], "disallowed_STD3_mapped", [60]], [[65309, 65309], "disallowed_STD3_mapped", [61]], [[65310, 65310], "disallowed_STD3_mapped", [62]], [[65311, 65311], "disallowed_STD3_mapped", [63]], [[65312, 65312], "disallowed_STD3_mapped", [64]], [[65313, 65313], "mapped", [97]], [[65314, 65314], "mapped", [98]], [[65315, 65315], "mapped", [99]], [[65316, 65316], "mapped", [100]], [[65317, 65317], "mapped", [101]], [[65318, 65318], "mapped", [102]], [[65319, 65319], "mapped", [103]], [[65320, 65320], "mapped", [104]], [[65321, 65321], "mapped", [105]], [[65322, 65322], "mapped", [106]], [[65323, 65323], "mapped", [107]], [[65324, 65324], "mapped", [108]], [[65325, 65325], "mapped", [109]], [[65326, 65326], "mapped", [110]], [[65327, 65327], "mapped", [111]], [[65328, 65328], "mapped", [112]], [[65329, 65329], "mapped", [113]], [[65330, 65330], "mapped", [114]], [[65331, 65331], "mapped", [115]], [[65332, 65332], "mapped", [116]], [[65333, 65333], "mapped", [117]], [[65334, 65334], "mapped", [118]], [[65335, 65335], "mapped", [119]], [[65336, 65336], "mapped", [120]], [[65337, 65337], "mapped", [121]], [[65338, 65338], "mapped", [122]], [[65339, 65339], "disallowed_STD3_mapped", [91]], [[65340, 65340], "disallowed_STD3_mapped", [92]], [[65341, 65341], "disallowed_STD3_mapped", [93]], [[65342, 65342], "disallowed_STD3_mapped", [94]], [[65343, 65343], "disallowed_STD3_mapped", [95]], [[65344, 65344], "disallowed_STD3_mapped", [96]], [[65345, 65345], "mapped", [97]], [[65346, 65346], "mapped", [98]], [[65347, 65347], "mapped", [99]], [[65348, 65348], "mapped", [100]], [[65349, 65349], "mapped", [101]], [[65350, 65350], "mapped", [102]], [[65351, 65351], "mapped", [103]], [[65352, 65352], "mapped", [104]], [[65353, 65353], "mapped", [105]], [[65354, 65354], "mapped", [106]], [[65355, 65355], "mapped", [107]], [[65356, 65356], "mapped", [108]], [[65357, 65357], "mapped", [109]], [[65358, 65358], "mapped", [110]], [[65359, 65359], "mapped", [111]], [[65360, 65360], "mapped", [112]], [[65361, 65361], "mapped", [113]], [[65362, 65362], "mapped", [114]], [[65363, 65363], "mapped", [115]], [[65364, 65364], "mapped", [116]], [[65365, 65365], "mapped", [117]], [[65366, 65366], "mapped", [118]], [[65367, 65367], "mapped", [119]], [[65368, 65368], "mapped", [120]], [[65369, 65369], "mapped", [121]], [[65370, 65370], "mapped", [122]], [[65371, 65371], "disallowed_STD3_mapped", [123]], [[65372, 65372], "disallowed_STD3_mapped", [124]], [[65373, 65373], "disallowed_STD3_mapped", [125]], [[65374, 65374], "disallowed_STD3_mapped", [126]], [[65375, 65375], "mapped", [10629]], [[65376, 65376], "mapped", [10630]], [[65377, 65377], "mapped", [46]], [[65378, 65378], "mapped", [12300]], [[65379, 65379], "mapped", [12301]], [[65380, 65380], "mapped", [12289]], [[65381, 65381], "mapped", [12539]], [[65382, 65382], "mapped", [12530]], [[65383, 65383], "mapped", [12449]], [[65384, 65384], "mapped", [12451]], [[65385, 65385], "mapped", [12453]], [[65386, 65386], "mapped", [12455]], [[65387, 65387], "mapped", [12457]], [[65388, 65388], "mapped", [12515]], [[65389, 65389], "mapped", [12517]], [[65390, 65390], "mapped", [12519]], [[65391, 65391], "mapped", [12483]], [[65392, 65392], "mapped", [12540]], [[65393, 65393], "mapped", [12450]], [[65394, 65394], "mapped", [12452]], [[65395, 65395], "mapped", [12454]], [[65396, 65396], "mapped", [12456]], [[65397, 65397], "mapped", [12458]], [[65398, 65398], "mapped", [12459]], [[65399, 65399], "mapped", [12461]], [[65400, 65400], "mapped", [12463]], [[65401, 65401], "mapped", [12465]], [[65402, 65402], "mapped", [12467]], [[65403, 65403], "mapped", [12469]], [[65404, 65404], "mapped", [12471]], [[65405, 65405], "mapped", [12473]], [[65406, 65406], "mapped", [12475]], [[65407, 65407], "mapped", [12477]], [[65408, 65408], "mapped", [12479]], [[65409, 65409], "mapped", [12481]], [[65410, 65410], "mapped", [12484]], [[65411, 65411], "mapped", [12486]], [[65412, 65412], "mapped", [12488]], [[65413, 65413], "mapped", [12490]], [[65414, 65414], "mapped", [12491]], [[65415, 65415], "mapped", [12492]], [[65416, 65416], "mapped", [12493]], [[65417, 65417], "mapped", [12494]], [[65418, 65418], "mapped", [12495]], [[65419, 65419], "mapped", [12498]], [[65420, 65420], "mapped", [12501]], [[65421, 65421], "mapped", [12504]], [[65422, 65422], "mapped", [12507]], [[65423, 65423], "mapped", [12510]], [[65424, 65424], "mapped", [12511]], [[65425, 65425], "mapped", [12512]], [[65426, 65426], "mapped", [12513]], [[65427, 65427], "mapped", [12514]], [[65428, 65428], "mapped", [12516]], [[65429, 65429], "mapped", [12518]], [[65430, 65430], "mapped", [12520]], [[65431, 65431], "mapped", [12521]], [[65432, 65432], "mapped", [12522]], [[65433, 65433], "mapped", [12523]], [[65434, 65434], "mapped", [12524]], [[65435, 65435], "mapped", [12525]], [[65436, 65436], "mapped", [12527]], [[65437, 65437], "mapped", [12531]], [[65438, 65438], "mapped", [12441]], [[65439, 65439], "mapped", [12442]], [[65440, 65440], "disallowed"], [[65441, 65441], "mapped", [4352]], [[65442, 65442], "mapped", [4353]], [[65443, 65443], "mapped", [4522]], [[65444, 65444], "mapped", [4354]], [[65445, 65445], "mapped", [4524]], [[65446, 65446], "mapped", [4525]], [[65447, 65447], "mapped", [4355]], [[65448, 65448], "mapped", [4356]], [[65449, 65449], "mapped", [4357]], [[65450, 65450], "mapped", [4528]], [[65451, 65451], "mapped", [4529]], [[65452, 65452], "mapped", [4530]], [[65453, 65453], "mapped", [4531]], [[65454, 65454], "mapped", [4532]], [[65455, 65455], "mapped", [4533]], [[65456, 65456], "mapped", [4378]], [[65457, 65457], "mapped", [4358]], [[65458, 65458], "mapped", [4359]], [[65459, 65459], "mapped", [4360]], [[65460, 65460], "mapped", [4385]], [[65461, 65461], "mapped", [4361]], [[65462, 65462], "mapped", [4362]], [[65463, 65463], "mapped", [4363]], [[65464, 65464], "mapped", [4364]], [[65465, 65465], "mapped", [4365]], [[65466, 65466], "mapped", [4366]], [[65467, 65467], "mapped", [4367]], [[65468, 65468], "mapped", [4368]], [[65469, 65469], "mapped", [4369]], [[65470, 65470], "mapped", [4370]], [[65471, 65473], "disallowed"], [[65474, 65474], "mapped", [4449]], [[65475, 65475], "mapped", [4450]], [[65476, 65476], "mapped", [4451]], [[65477, 65477], "mapped", [4452]], [[65478, 65478], "mapped", [4453]], [[65479, 65479], "mapped", [4454]], [[65480, 65481], "disallowed"], [[65482, 65482], "mapped", [4455]], [[65483, 65483], "mapped", [4456]], [[65484, 65484], "mapped", [4457]], [[65485, 65485], "mapped", [4458]], [[65486, 65486], "mapped", [4459]], [[65487, 65487], "mapped", [4460]], [[65488, 65489], "disallowed"], [[65490, 65490], "mapped", [4461]], [[65491, 65491], "mapped", [4462]], [[65492, 65492], "mapped", [4463]], [[65493, 65493], "mapped", [4464]], [[65494, 65494], "mapped", [4465]], [[65495, 65495], "mapped", [4466]], [[65496, 65497], "disallowed"], [[65498, 65498], "mapped", [4467]], [[65499, 65499], "mapped", [4468]], [[65500, 65500], "mapped", [4469]], [[65501, 65503], "disallowed"], [[65504, 65504], "mapped", [162]], [[65505, 65505], "mapped", [163]], [[65506, 65506], "mapped", [172]], [[65507, 65507], "disallowed_STD3_mapped", [32, 772]], [[65508, 65508], "mapped", [166]], [[65509, 65509], "mapped", [165]], [[65510, 65510], "mapped", [8361]], [[65511, 65511], "disallowed"], [[65512, 65512], "mapped", [9474]], [[65513, 65513], "mapped", [8592]], [[65514, 65514], "mapped", [8593]], [[65515, 65515], "mapped", [8594]], [[65516, 65516], "mapped", [8595]], [[65517, 65517], "mapped", [9632]], [[65518, 65518], "mapped", [9675]], [[65519, 65528], "disallowed"], [[65529, 65531], "disallowed"], [[65532, 65532], "disallowed"], [[65533, 65533], "disallowed"], [[65534, 65535], "disallowed"], [[65536, 65547], "valid"], [[65548, 65548], "disallowed"], [[65549, 65574], "valid"], [[65575, 65575], "disallowed"], [[65576, 65594], "valid"], [[65595, 65595], "disallowed"], [[65596, 65597], "valid"], [[65598, 65598], "disallowed"], [[65599, 65613], "valid"], [[65614, 65615], "disallowed"], [[65616, 65629], "valid"], [[65630, 65663], "disallowed"], [[65664, 65786], "valid"], [[65787, 65791], "disallowed"], [[65792, 65794], "valid", [], "NV8"], [[65795, 65798], "disallowed"], [[65799, 65843], "valid", [], "NV8"], [[65844, 65846], "disallowed"], [[65847, 65855], "valid", [], "NV8"], [[65856, 65930], "valid", [], "NV8"], [[65931, 65932], "valid", [], "NV8"], [[65933, 65935], "disallowed"], [[65936, 65947], "valid", [], "NV8"], [[65948, 65951], "disallowed"], [[65952, 65952], "valid", [], "NV8"], [[65953, 65999], "disallowed"], [[66e3, 66044], "valid", [], "NV8"], [[66045, 66045], "valid"], [[66046, 66175], "disallowed"], [[66176, 66204], "valid"], [[66205, 66207], "disallowed"], [[66208, 66256], "valid"], [[66257, 66271], "disallowed"], [[66272, 66272], "valid"], [[66273, 66299], "valid", [], "NV8"], [[66300, 66303], "disallowed"], [[66304, 66334], "valid"], [[66335, 66335], "valid"], [[66336, 66339], "valid", [], "NV8"], [[66340, 66351], "disallowed"], [[66352, 66368], "valid"], [[66369, 66369], "valid", [], "NV8"], [[66370, 66377], "valid"], [[66378, 66378], "valid", [], "NV8"], [[66379, 66383], "disallowed"], [[66384, 66426], "valid"], [[66427, 66431], "disallowed"], [[66432, 66461], "valid"], [[66462, 66462], "disallowed"], [[66463, 66463], "valid", [], "NV8"], [[66464, 66499], "valid"], [[66500, 66503], "disallowed"], [[66504, 66511], "valid"], [[66512, 66517], "valid", [], "NV8"], [[66518, 66559], "disallowed"], [[66560, 66560], "mapped", [66600]], [[66561, 66561], "mapped", [66601]], [[66562, 66562], "mapped", [66602]], [[66563, 66563], "mapped", [66603]], [[66564, 66564], "mapped", [66604]], [[66565, 66565], "mapped", [66605]], [[66566, 66566], "mapped", [66606]], [[66567, 66567], "mapped", [66607]], [[66568, 66568], "mapped", [66608]], [[66569, 66569], "mapped", [66609]], [[66570, 66570], "mapped", [66610]], [[66571, 66571], "mapped", [66611]], [[66572, 66572], "mapped", [66612]], [[66573, 66573], "mapped", [66613]], [[66574, 66574], "mapped", [66614]], [[66575, 66575], "mapped", [66615]], [[66576, 66576], "mapped", [66616]], [[66577, 66577], "mapped", [66617]], [[66578, 66578], "mapped", [66618]], [[66579, 66579], "mapped", [66619]], [[66580, 66580], "mapped", [66620]], [[66581, 66581], "mapped", [66621]], [[66582, 66582], "mapped", [66622]], [[66583, 66583], "mapped", [66623]], [[66584, 66584], "mapped", [66624]], [[66585, 66585], "mapped", [66625]], [[66586, 66586], "mapped", [66626]], [[66587, 66587], "mapped", [66627]], [[66588, 66588], "mapped", [66628]], [[66589, 66589], "mapped", [66629]], [[66590, 66590], "mapped", [66630]], [[66591, 66591], "mapped", [66631]], [[66592, 66592], "mapped", [66632]], [[66593, 66593], "mapped", [66633]], [[66594, 66594], "mapped", [66634]], [[66595, 66595], "mapped", [66635]], [[66596, 66596], "mapped", [66636]], [[66597, 66597], "mapped", [66637]], [[66598, 66598], "mapped", [66638]], [[66599, 66599], "mapped", [66639]], [[66600, 66637], "valid"], [[66638, 66717], "valid"], [[66718, 66719], "disallowed"], [[66720, 66729], "valid"], [[66730, 66815], "disallowed"], [[66816, 66855], "valid"], [[66856, 66863], "disallowed"], [[66864, 66915], "valid"], [[66916, 66926], "disallowed"], [[66927, 66927], "valid", [], "NV8"], [[66928, 67071], "disallowed"], [[67072, 67382], "valid"], [[67383, 67391], "disallowed"], [[67392, 67413], "valid"], [[67414, 67423], "disallowed"], [[67424, 67431], "valid"], [[67432, 67583], "disallowed"], [[67584, 67589], "valid"], [[67590, 67591], "disallowed"], [[67592, 67592], "valid"], [[67593, 67593], "disallowed"], [[67594, 67637], "valid"], [[67638, 67638], "disallowed"], [[67639, 67640], "valid"], [[67641, 67643], "disallowed"], [[67644, 67644], "valid"], [[67645, 67646], "disallowed"], [[67647, 67647], "valid"], [[67648, 67669], "valid"], [[67670, 67670], "disallowed"], [[67671, 67679], "valid", [], "NV8"], [[67680, 67702], "valid"], [[67703, 67711], "valid", [], "NV8"], [[67712, 67742], "valid"], [[67743, 67750], "disallowed"], [[67751, 67759], "valid", [], "NV8"], [[67760, 67807], "disallowed"], [[67808, 67826], "valid"], [[67827, 67827], "disallowed"], [[67828, 67829], "valid"], [[67830, 67834], "disallowed"], [[67835, 67839], "valid", [], "NV8"], [[67840, 67861], "valid"], [[67862, 67865], "valid", [], "NV8"], [[67866, 67867], "valid", [], "NV8"], [[67868, 67870], "disallowed"], [[67871, 67871], "valid", [], "NV8"], [[67872, 67897], "valid"], [[67898, 67902], "disallowed"], [[67903, 67903], "valid", [], "NV8"], [[67904, 67967], "disallowed"], [[67968, 68023], "valid"], [[68024, 68027], "disallowed"], [[68028, 68029], "valid", [], "NV8"], [[68030, 68031], "valid"], [[68032, 68047], "valid", [], "NV8"], [[68048, 68049], "disallowed"], [[68050, 68095], "valid", [], "NV8"], [[68096, 68099], "valid"], [[68100, 68100], "disallowed"], [[68101, 68102], "valid"], [[68103, 68107], "disallowed"], [[68108, 68115], "valid"], [[68116, 68116], "disallowed"], [[68117, 68119], "valid"], [[68120, 68120], "disallowed"], [[68121, 68147], "valid"], [[68148, 68151], "disallowed"], [[68152, 68154], "valid"], [[68155, 68158], "disallowed"], [[68159, 68159], "valid"], [[68160, 68167], "valid", [], "NV8"], [[68168, 68175], "disallowed"], [[68176, 68184], "valid", [], "NV8"], [[68185, 68191], "disallowed"], [[68192, 68220], "valid"], [[68221, 68223], "valid", [], "NV8"], [[68224, 68252], "valid"], [[68253, 68255], "valid", [], "NV8"], [[68256, 68287], "disallowed"], [[68288, 68295], "valid"], [[68296, 68296], "valid", [], "NV8"], [[68297, 68326], "valid"], [[68327, 68330], "disallowed"], [[68331, 68342], "valid", [], "NV8"], [[68343, 68351], "disallowed"], [[68352, 68405], "valid"], [[68406, 68408], "disallowed"], [[68409, 68415], "valid", [], "NV8"], [[68416, 68437], "valid"], [[68438, 68439], "disallowed"], [[68440, 68447], "valid", [], "NV8"], [[68448, 68466], "valid"], [[68467, 68471], "disallowed"], [[68472, 68479], "valid", [], "NV8"], [[68480, 68497], "valid"], [[68498, 68504], "disallowed"], [[68505, 68508], "valid", [], "NV8"], [[68509, 68520], "disallowed"], [[68521, 68527], "valid", [], "NV8"], [[68528, 68607], "disallowed"], [[68608, 68680], "valid"], [[68681, 68735], "disallowed"], [[68736, 68736], "mapped", [68800]], [[68737, 68737], "mapped", [68801]], [[68738, 68738], "mapped", [68802]], [[68739, 68739], "mapped", [68803]], [[68740, 68740], "mapped", [68804]], [[68741, 68741], "mapped", [68805]], [[68742, 68742], "mapped", [68806]], [[68743, 68743], "mapped", [68807]], [[68744, 68744], "mapped", [68808]], [[68745, 68745], "mapped", [68809]], [[68746, 68746], "mapped", [68810]], [[68747, 68747], "mapped", [68811]], [[68748, 68748], "mapped", [68812]], [[68749, 68749], "mapped", [68813]], [[68750, 68750], "mapped", [68814]], [[68751, 68751], "mapped", [68815]], [[68752, 68752], "mapped", [68816]], [[68753, 68753], "mapped", [68817]], [[68754, 68754], "mapped", [68818]], [[68755, 68755], "mapped", [68819]], [[68756, 68756], "mapped", [68820]], [[68757, 68757], "mapped", [68821]], [[68758, 68758], "mapped", [68822]], [[68759, 68759], "mapped", [68823]], [[68760, 68760], "mapped", [68824]], [[68761, 68761], "mapped", [68825]], [[68762, 68762], "mapped", [68826]], [[68763, 68763], "mapped", [68827]], [[68764, 68764], "mapped", [68828]], [[68765, 68765], "mapped", [68829]], [[68766, 68766], "mapped", [68830]], [[68767, 68767], "mapped", [68831]], [[68768, 68768], "mapped", [68832]], [[68769, 68769], "mapped", [68833]], [[68770, 68770], "mapped", [68834]], [[68771, 68771], "mapped", [68835]], [[68772, 68772], "mapped", [68836]], [[68773, 68773], "mapped", [68837]], [[68774, 68774], "mapped", [68838]], [[68775, 68775], "mapped", [68839]], [[68776, 68776], "mapped", [68840]], [[68777, 68777], "mapped", [68841]], [[68778, 68778], "mapped", [68842]], [[68779, 68779], "mapped", [68843]], [[68780, 68780], "mapped", [68844]], [[68781, 68781], "mapped", [68845]], [[68782, 68782], "mapped", [68846]], [[68783, 68783], "mapped", [68847]], [[68784, 68784], "mapped", [68848]], [[68785, 68785], "mapped", [68849]], [[68786, 68786], "mapped", [68850]], [[68787, 68799], "disallowed"], [[68800, 68850], "valid"], [[68851, 68857], "disallowed"], [[68858, 68863], "valid", [], "NV8"], [[68864, 69215], "disallowed"], [[69216, 69246], "valid", [], "NV8"], [[69247, 69631], "disallowed"], [[69632, 69702], "valid"], [[69703, 69709], "valid", [], "NV8"], [[69710, 69713], "disallowed"], [[69714, 69733], "valid", [], "NV8"], [[69734, 69743], "valid"], [[69744, 69758], "disallowed"], [[69759, 69759], "valid"], [[69760, 69818], "valid"], [[69819, 69820], "valid", [], "NV8"], [[69821, 69821], "disallowed"], [[69822, 69825], "valid", [], "NV8"], [[69826, 69839], "disallowed"], [[69840, 69864], "valid"], [[69865, 69871], "disallowed"], [[69872, 69881], "valid"], [[69882, 69887], "disallowed"], [[69888, 69940], "valid"], [[69941, 69941], "disallowed"], [[69942, 69951], "valid"], [[69952, 69955], "valid", [], "NV8"], [[69956, 69967], "disallowed"], [[69968, 70003], "valid"], [[70004, 70005], "valid", [], "NV8"], [[70006, 70006], "valid"], [[70007, 70015], "disallowed"], [[70016, 70084], "valid"], [[70085, 70088], "valid", [], "NV8"], [[70089, 70089], "valid", [], "NV8"], [[70090, 70092], "valid"], [[70093, 70093], "valid", [], "NV8"], [[70094, 70095], "disallowed"], [[70096, 70105], "valid"], [[70106, 70106], "valid"], [[70107, 70107], "valid", [], "NV8"], [[70108, 70108], "valid"], [[70109, 70111], "valid", [], "NV8"], [[70112, 70112], "disallowed"], [[70113, 70132], "valid", [], "NV8"], [[70133, 70143], "disallowed"], [[70144, 70161], "valid"], [[70162, 70162], "disallowed"], [[70163, 70199], "valid"], [[70200, 70205], "valid", [], "NV8"], [[70206, 70271], "disallowed"], [[70272, 70278], "valid"], [[70279, 70279], "disallowed"], [[70280, 70280], "valid"], [[70281, 70281], "disallowed"], [[70282, 70285], "valid"], [[70286, 70286], "disallowed"], [[70287, 70301], "valid"], [[70302, 70302], "disallowed"], [[70303, 70312], "valid"], [[70313, 70313], "valid", [], "NV8"], [[70314, 70319], "disallowed"], [[70320, 70378], "valid"], [[70379, 70383], "disallowed"], [[70384, 70393], "valid"], [[70394, 70399], "disallowed"], [[70400, 70400], "valid"], [[70401, 70403], "valid"], [[70404, 70404], "disallowed"], [[70405, 70412], "valid"], [[70413, 70414], "disallowed"], [[70415, 70416], "valid"], [[70417, 70418], "disallowed"], [[70419, 70440], "valid"], [[70441, 70441], "disallowed"], [[70442, 70448], "valid"], [[70449, 70449], "disallowed"], [[70450, 70451], "valid"], [[70452, 70452], "disallowed"], [[70453, 70457], "valid"], [[70458, 70459], "disallowed"], [[70460, 70468], "valid"], [[70469, 70470], "disallowed"], [[70471, 70472], "valid"], [[70473, 70474], "disallowed"], [[70475, 70477], "valid"], [[70478, 70479], "disallowed"], [[70480, 70480], "valid"], [[70481, 70486], "disallowed"], [[70487, 70487], "valid"], [[70488, 70492], "disallowed"], [[70493, 70499], "valid"], [[70500, 70501], "disallowed"], [[70502, 70508], "valid"], [[70509, 70511], "disallowed"], [[70512, 70516], "valid"], [[70517, 70783], "disallowed"], [[70784, 70853], "valid"], [[70854, 70854], "valid", [], "NV8"], [[70855, 70855], "valid"], [[70856, 70863], "disallowed"], [[70864, 70873], "valid"], [[70874, 71039], "disallowed"], [[71040, 71093], "valid"], [[71094, 71095], "disallowed"], [[71096, 71104], "valid"], [[71105, 71113], "valid", [], "NV8"], [[71114, 71127], "valid", [], "NV8"], [[71128, 71133], "valid"], [[71134, 71167], "disallowed"], [[71168, 71232], "valid"], [[71233, 71235], "valid", [], "NV8"], [[71236, 71236], "valid"], [[71237, 71247], "disallowed"], [[71248, 71257], "valid"], [[71258, 71295], "disallowed"], [[71296, 71351], "valid"], [[71352, 71359], "disallowed"], [[71360, 71369], "valid"], [[71370, 71423], "disallowed"], [[71424, 71449], "valid"], [[71450, 71452], "disallowed"], [[71453, 71467], "valid"], [[71468, 71471], "disallowed"], [[71472, 71481], "valid"], [[71482, 71487], "valid", [], "NV8"], [[71488, 71839], "disallowed"], [[71840, 71840], "mapped", [71872]], [[71841, 71841], "mapped", [71873]], [[71842, 71842], "mapped", [71874]], [[71843, 71843], "mapped", [71875]], [[71844, 71844], "mapped", [71876]], [[71845, 71845], "mapped", [71877]], [[71846, 71846], "mapped", [71878]], [[71847, 71847], "mapped", [71879]], [[71848, 71848], "mapped", [71880]], [[71849, 71849], "mapped", [71881]], [[71850, 71850], "mapped", [71882]], [[71851, 71851], "mapped", [71883]], [[71852, 71852], "mapped", [71884]], [[71853, 71853], "mapped", [71885]], [[71854, 71854], "mapped", [71886]], [[71855, 71855], "mapped", [71887]], [[71856, 71856], "mapped", [71888]], [[71857, 71857], "mapped", [71889]], [[71858, 71858], "mapped", [71890]], [[71859, 71859], "mapped", [71891]], [[71860, 71860], "mapped", [71892]], [[71861, 71861], "mapped", [71893]], [[71862, 71862], "mapped", [71894]], [[71863, 71863], "mapped", [71895]], [[71864, 71864], "mapped", [71896]], [[71865, 71865], "mapped", [71897]], [[71866, 71866], "mapped", [71898]], [[71867, 71867], "mapped", [71899]], [[71868, 71868], "mapped", [71900]], [[71869, 71869], "mapped", [71901]], [[71870, 71870], "mapped", [71902]], [[71871, 71871], "mapped", [71903]], [[71872, 71913], "valid"], [[71914, 71922], "valid", [], "NV8"], [[71923, 71934], "disallowed"], [[71935, 71935], "valid"], [[71936, 72383], "disallowed"], [[72384, 72440], "valid"], [[72441, 73727], "disallowed"], [[73728, 74606], "valid"], [[74607, 74648], "valid"], [[74649, 74649], "valid"], [[74650, 74751], "disallowed"], [[74752, 74850], "valid", [], "NV8"], [[74851, 74862], "valid", [], "NV8"], [[74863, 74863], "disallowed"], [[74864, 74867], "valid", [], "NV8"], [[74868, 74868], "valid", [], "NV8"], [[74869, 74879], "disallowed"], [[74880, 75075], "valid"], [[75076, 77823], "disallowed"], [[77824, 78894], "valid"], [[78895, 82943], "disallowed"], [[82944, 83526], "valid"], [[83527, 92159], "disallowed"], [[92160, 92728], "valid"], [[92729, 92735], "disallowed"], [[92736, 92766], "valid"], [[92767, 92767], "disallowed"], [[92768, 92777], "valid"], [[92778, 92781], "disallowed"], [[92782, 92783], "valid", [], "NV8"], [[92784, 92879], "disallowed"], [[92880, 92909], "valid"], [[92910, 92911], "disallowed"], [[92912, 92916], "valid"], [[92917, 92917], "valid", [], "NV8"], [[92918, 92927], "disallowed"], [[92928, 92982], "valid"], [[92983, 92991], "valid", [], "NV8"], [[92992, 92995], "valid"], [[92996, 92997], "valid", [], "NV8"], [[92998, 93007], "disallowed"], [[93008, 93017], "valid"], [[93018, 93018], "disallowed"], [[93019, 93025], "valid", [], "NV8"], [[93026, 93026], "disallowed"], [[93027, 93047], "valid"], [[93048, 93052], "disallowed"], [[93053, 93071], "valid"], [[93072, 93951], "disallowed"], [[93952, 94020], "valid"], [[94021, 94031], "disallowed"], [[94032, 94078], "valid"], [[94079, 94094], "disallowed"], [[94095, 94111], "valid"], [[94112, 110591], "disallowed"], [[110592, 110593], "valid"], [[110594, 113663], "disallowed"], [[113664, 113770], "valid"], [[113771, 113775], "disallowed"], [[113776, 113788], "valid"], [[113789, 113791], "disallowed"], [[113792, 113800], "valid"], [[113801, 113807], "disallowed"], [[113808, 113817], "valid"], [[113818, 113819], "disallowed"], [[113820, 113820], "valid", [], "NV8"], [[113821, 113822], "valid"], [[113823, 113823], "valid", [], "NV8"], [[113824, 113827], "ignored"], [[113828, 118783], "disallowed"], [[118784, 119029], "valid", [], "NV8"], [[119030, 119039], "disallowed"], [[119040, 119078], "valid", [], "NV8"], [[119079, 119080], "disallowed"], [[119081, 119081], "valid", [], "NV8"], [[119082, 119133], "valid", [], "NV8"], [[119134, 119134], "mapped", [119127, 119141]], [[119135, 119135], "mapped", [119128, 119141]], [[119136, 119136], "mapped", [119128, 119141, 119150]], [[119137, 119137], "mapped", [119128, 119141, 119151]], [[119138, 119138], "mapped", [119128, 119141, 119152]], [[119139, 119139], "mapped", [119128, 119141, 119153]], [[119140, 119140], "mapped", [119128, 119141, 119154]], [[119141, 119154], "valid", [], "NV8"], [[119155, 119162], "disallowed"], [[119163, 119226], "valid", [], "NV8"], [[119227, 119227], "mapped", [119225, 119141]], [[119228, 119228], "mapped", [119226, 119141]], [[119229, 119229], "mapped", [119225, 119141, 119150]], [[119230, 119230], "mapped", [119226, 119141, 119150]], [[119231, 119231], "mapped", [119225, 119141, 119151]], [[119232, 119232], "mapped", [119226, 119141, 119151]], [[119233, 119261], "valid", [], "NV8"], [[119262, 119272], "valid", [], "NV8"], [[119273, 119295], "disallowed"], [[119296, 119365], "valid", [], "NV8"], [[119366, 119551], "disallowed"], [[119552, 119638], "valid", [], "NV8"], [[119639, 119647], "disallowed"], [[119648, 119665], "valid", [], "NV8"], [[119666, 119807], "disallowed"], [[119808, 119808], "mapped", [97]], [[119809, 119809], "mapped", [98]], [[119810, 119810], "mapped", [99]], [[119811, 119811], "mapped", [100]], [[119812, 119812], "mapped", [101]], [[119813, 119813], "mapped", [102]], [[119814, 119814], "mapped", [103]], [[119815, 119815], "mapped", [104]], [[119816, 119816], "mapped", [105]], [[119817, 119817], "mapped", [106]], [[119818, 119818], "mapped", [107]], [[119819, 119819], "mapped", [108]], [[119820, 119820], "mapped", [109]], [[119821, 119821], "mapped", [110]], [[119822, 119822], "mapped", [111]], [[119823, 119823], "mapped", [112]], [[119824, 119824], "mapped", [113]], [[119825, 119825], "mapped", [114]], [[119826, 119826], "mapped", [115]], [[119827, 119827], "mapped", [116]], [[119828, 119828], "mapped", [117]], [[119829, 119829], "mapped", [118]], [[119830, 119830], "mapped", [119]], [[119831, 119831], "mapped", [120]], [[119832, 119832], "mapped", [121]], [[119833, 119833], "mapped", [122]], [[119834, 119834], "mapped", [97]], [[119835, 119835], "mapped", [98]], [[119836, 119836], "mapped", [99]], [[119837, 119837], "mapped", [100]], [[119838, 119838], "mapped", [101]], [[119839, 119839], "mapped", [102]], [[119840, 119840], "mapped", [103]], [[119841, 119841], "mapped", [104]], [[119842, 119842], "mapped", [105]], [[119843, 119843], "mapped", [106]], [[119844, 119844], "mapped", [107]], [[119845, 119845], "mapped", [108]], [[119846, 119846], "mapped", [109]], [[119847, 119847], "mapped", [110]], [[119848, 119848], "mapped", [111]], [[119849, 119849], "mapped", [112]], [[119850, 119850], "mapped", [113]], [[119851, 119851], "mapped", [114]], [[119852, 119852], "mapped", [115]], [[119853, 119853], "mapped", [116]], [[119854, 119854], "mapped", [117]], [[119855, 119855], "mapped", [118]], [[119856, 119856], "mapped", [119]], [[119857, 119857], "mapped", [120]], [[119858, 119858], "mapped", [121]], [[119859, 119859], "mapped", [122]], [[119860, 119860], "mapped", [97]], [[119861, 119861], "mapped", [98]], [[119862, 119862], "mapped", [99]], [[119863, 119863], "mapped", [100]], [[119864, 119864], "mapped", [101]], [[119865, 119865], "mapped", [102]], [[119866, 119866], "mapped", [103]], [[119867, 119867], "mapped", [104]], [[119868, 119868], "mapped", [105]], [[119869, 119869], "mapped", [106]], [[119870, 119870], "mapped", [107]], [[119871, 119871], "mapped", [108]], [[119872, 119872], "mapped", [109]], [[119873, 119873], "mapped", [110]], [[119874, 119874], "mapped", [111]], [[119875, 119875], "mapped", [112]], [[119876, 119876], "mapped", [113]], [[119877, 119877], "mapped", [114]], [[119878, 119878], "mapped", [115]], [[119879, 119879], "mapped", [116]], [[119880, 119880], "mapped", [117]], [[119881, 119881], "mapped", [118]], [[119882, 119882], "mapped", [119]], [[119883, 119883], "mapped", [120]], [[119884, 119884], "mapped", [121]], [[119885, 119885], "mapped", [122]], [[119886, 119886], "mapped", [97]], [[119887, 119887], "mapped", [98]], [[119888, 119888], "mapped", [99]], [[119889, 119889], "mapped", [100]], [[119890, 119890], "mapped", [101]], [[119891, 119891], "mapped", [102]], [[119892, 119892], "mapped", [103]], [[119893, 119893], "disallowed"], [[119894, 119894], "mapped", [105]], [[119895, 119895], "mapped", [106]], [[119896, 119896], "mapped", [107]], [[119897, 119897], "mapped", [108]], [[119898, 119898], "mapped", [109]], [[119899, 119899], "mapped", [110]], [[119900, 119900], "mapped", [111]], [[119901, 119901], "mapped", [112]], [[119902, 119902], "mapped", [113]], [[119903, 119903], "mapped", [114]], [[119904, 119904], "mapped", [115]], [[119905, 119905], "mapped", [116]], [[119906, 119906], "mapped", [117]], [[119907, 119907], "mapped", [118]], [[119908, 119908], "mapped", [119]], [[119909, 119909], "mapped", [120]], [[119910, 119910], "mapped", [121]], [[119911, 119911], "mapped", [122]], [[119912, 119912], "mapped", [97]], [[119913, 119913], "mapped", [98]], [[119914, 119914], "mapped", [99]], [[119915, 119915], "mapped", [100]], [[119916, 119916], "mapped", [101]], [[119917, 119917], "mapped", [102]], [[119918, 119918], "mapped", [103]], [[119919, 119919], "mapped", [104]], [[119920, 119920], "mapped", [105]], [[119921, 119921], "mapped", [106]], [[119922, 119922], "mapped", [107]], [[119923, 119923], "mapped", [108]], [[119924, 119924], "mapped", [109]], [[119925, 119925], "mapped", [110]], [[119926, 119926], "mapped", [111]], [[119927, 119927], "mapped", [112]], [[119928, 119928], "mapped", [113]], [[119929, 119929], "mapped", [114]], [[119930, 119930], "mapped", [115]], [[119931, 119931], "mapped", [116]], [[119932, 119932], "mapped", [117]], [[119933, 119933], "mapped", [118]], [[119934, 119934], "mapped", [119]], [[119935, 119935], "mapped", [120]], [[119936, 119936], "mapped", [121]], [[119937, 119937], "mapped", [122]], [[119938, 119938], "mapped", [97]], [[119939, 119939], "mapped", [98]], [[119940, 119940], "mapped", [99]], [[119941, 119941], "mapped", [100]], [[119942, 119942], "mapped", [101]], [[119943, 119943], "mapped", [102]], [[119944, 119944], "mapped", [103]], [[119945, 119945], "mapped", [104]], [[119946, 119946], "mapped", [105]], [[119947, 119947], "mapped", [106]], [[119948, 119948], "mapped", [107]], [[119949, 119949], "mapped", [108]], [[119950, 119950], "mapped", [109]], [[119951, 119951], "mapped", [110]], [[119952, 119952], "mapped", [111]], [[119953, 119953], "mapped", [112]], [[119954, 119954], "mapped", [113]], [[119955, 119955], "mapped", [114]], [[119956, 119956], "mapped", [115]], [[119957, 119957], "mapped", [116]], [[119958, 119958], "mapped", [117]], [[119959, 119959], "mapped", [118]], [[119960, 119960], "mapped", [119]], [[119961, 119961], "mapped", [120]], [[119962, 119962], "mapped", [121]], [[119963, 119963], "mapped", [122]], [[119964, 119964], "mapped", [97]], [[119965, 119965], "disallowed"], [[119966, 119966], "mapped", [99]], [[119967, 119967], "mapped", [100]], [[119968, 119969], "disallowed"], [[119970, 119970], "mapped", [103]], [[119971, 119972], "disallowed"], [[119973, 119973], "mapped", [106]], [[119974, 119974], "mapped", [107]], [[119975, 119976], "disallowed"], [[119977, 119977], "mapped", [110]], [[119978, 119978], "mapped", [111]], [[119979, 119979], "mapped", [112]], [[119980, 119980], "mapped", [113]], [[119981, 119981], "disallowed"], [[119982, 119982], "mapped", [115]], [[119983, 119983], "mapped", [116]], [[119984, 119984], "mapped", [117]], [[119985, 119985], "mapped", [118]], [[119986, 119986], "mapped", [119]], [[119987, 119987], "mapped", [120]], [[119988, 119988], "mapped", [121]], [[119989, 119989], "mapped", [122]], [[119990, 119990], "mapped", [97]], [[119991, 119991], "mapped", [98]], [[119992, 119992], "mapped", [99]], [[119993, 119993], "mapped", [100]], [[119994, 119994], "disallowed"], [[119995, 119995], "mapped", [102]], [[119996, 119996], "disallowed"], [[119997, 119997], "mapped", [104]], [[119998, 119998], "mapped", [105]], [[119999, 119999], "mapped", [106]], [[12e4, 12e4], "mapped", [107]], [[120001, 120001], "mapped", [108]], [[120002, 120002], "mapped", [109]], [[120003, 120003], "mapped", [110]], [[120004, 120004], "disallowed"], [[120005, 120005], "mapped", [112]], [[120006, 120006], "mapped", [113]], [[120007, 120007], "mapped", [114]], [[120008, 120008], "mapped", [115]], [[120009, 120009], "mapped", [116]], [[120010, 120010], "mapped", [117]], [[120011, 120011], "mapped", [118]], [[120012, 120012], "mapped", [119]], [[120013, 120013], "mapped", [120]], [[120014, 120014], "mapped", [121]], [[120015, 120015], "mapped", [122]], [[120016, 120016], "mapped", [97]], [[120017, 120017], "mapped", [98]], [[120018, 120018], "mapped", [99]], [[120019, 120019], "mapped", [100]], [[120020, 120020], "mapped", [101]], [[120021, 120021], "mapped", [102]], [[120022, 120022], "mapped", [103]], [[120023, 120023], "mapped", [104]], [[120024, 120024], "mapped", [105]], [[120025, 120025], "mapped", [106]], [[120026, 120026], "mapped", [107]], [[120027, 120027], "mapped", [108]], [[120028, 120028], "mapped", [109]], [[120029, 120029], "mapped", [110]], [[120030, 120030], "mapped", [111]], [[120031, 120031], "mapped", [112]], [[120032, 120032], "mapped", [113]], [[120033, 120033], "mapped", [114]], [[120034, 120034], "mapped", [115]], [[120035, 120035], "mapped", [116]], [[120036, 120036], "mapped", [117]], [[120037, 120037], "mapped", [118]], [[120038, 120038], "mapped", [119]], [[120039, 120039], "mapped", [120]], [[120040, 120040], "mapped", [121]], [[120041, 120041], "mapped", [122]], [[120042, 120042], "mapped", [97]], [[120043, 120043], "mapped", [98]], [[120044, 120044], "mapped", [99]], [[120045, 120045], "mapped", [100]], [[120046, 120046], "mapped", [101]], [[120047, 120047], "mapped", [102]], [[120048, 120048], "mapped", [103]], [[120049, 120049], "mapped", [104]], [[120050, 120050], "mapped", [105]], [[120051, 120051], "mapped", [106]], [[120052, 120052], "mapped", [107]], [[120053, 120053], "mapped", [108]], [[120054, 120054], "mapped", [109]], [[120055, 120055], "mapped", [110]], [[120056, 120056], "mapped", [111]], [[120057, 120057], "mapped", [112]], [[120058, 120058], "mapped", [113]], [[120059, 120059], "mapped", [114]], [[120060, 120060], "mapped", [115]], [[120061, 120061], "mapped", [116]], [[120062, 120062], "mapped", [117]], [[120063, 120063], "mapped", [118]], [[120064, 120064], "mapped", [119]], [[120065, 120065], "mapped", [120]], [[120066, 120066], "mapped", [121]], [[120067, 120067], "mapped", [122]], [[120068, 120068], "mapped", [97]], [[120069, 120069], "mapped", [98]], [[120070, 120070], "disallowed"], [[120071, 120071], "mapped", [100]], [[120072, 120072], "mapped", [101]], [[120073, 120073], "mapped", [102]], [[120074, 120074], "mapped", [103]], [[120075, 120076], "disallowed"], [[120077, 120077], "mapped", [106]], [[120078, 120078], "mapped", [107]], [[120079, 120079], "mapped", [108]], [[120080, 120080], "mapped", [109]], [[120081, 120081], "mapped", [110]], [[120082, 120082], "mapped", [111]], [[120083, 120083], "mapped", [112]], [[120084, 120084], "mapped", [113]], [[120085, 120085], "disallowed"], [[120086, 120086], "mapped", [115]], [[120087, 120087], "mapped", [116]], [[120088, 120088], "mapped", [117]], [[120089, 120089], "mapped", [118]], [[120090, 120090], "mapped", [119]], [[120091, 120091], "mapped", [120]], [[120092, 120092], "mapped", [121]], [[120093, 120093], "disallowed"], [[120094, 120094], "mapped", [97]], [[120095, 120095], "mapped", [98]], [[120096, 120096], "mapped", [99]], [[120097, 120097], "mapped", [100]], [[120098, 120098], "mapped", [101]], [[120099, 120099], "mapped", [102]], [[120100, 120100], "mapped", [103]], [[120101, 120101], "mapped", [104]], [[120102, 120102], "mapped", [105]], [[120103, 120103], "mapped", [106]], [[120104, 120104], "mapped", [107]], [[120105, 120105], "mapped", [108]], [[120106, 120106], "mapped", [109]], [[120107, 120107], "mapped", [110]], [[120108, 120108], "mapped", [111]], [[120109, 120109], "mapped", [112]], [[120110, 120110], "mapped", [113]], [[120111, 120111], "mapped", [114]], [[120112, 120112], "mapped", [115]], [[120113, 120113], "mapped", [116]], [[120114, 120114], "mapped", [117]], [[120115, 120115], "mapped", [118]], [[120116, 120116], "mapped", [119]], [[120117, 120117], "mapped", [120]], [[120118, 120118], "mapped", [121]], [[120119, 120119], "mapped", [122]], [[120120, 120120], "mapped", [97]], [[120121, 120121], "mapped", [98]], [[120122, 120122], "disallowed"], [[120123, 120123], "mapped", [100]], [[120124, 120124], "mapped", [101]], [[120125, 120125], "mapped", [102]], [[120126, 120126], "mapped", [103]], [[120127, 120127], "disallowed"], [[120128, 120128], "mapped", [105]], [[120129, 120129], "mapped", [106]], [[120130, 120130], "mapped", [107]], [[120131, 120131], "mapped", [108]], [[120132, 120132], "mapped", [109]], [[120133, 120133], "disallowed"], [[120134, 120134], "mapped", [111]], [[120135, 120137], "disallowed"], [[120138, 120138], "mapped", [115]], [[120139, 120139], "mapped", [116]], [[120140, 120140], "mapped", [117]], [[120141, 120141], "mapped", [118]], [[120142, 120142], "mapped", [119]], [[120143, 120143], "mapped", [120]], [[120144, 120144], "mapped", [121]], [[120145, 120145], "disallowed"], [[120146, 120146], "mapped", [97]], [[120147, 120147], "mapped", [98]], [[120148, 120148], "mapped", [99]], [[120149, 120149], "mapped", [100]], [[120150, 120150], "mapped", [101]], [[120151, 120151], "mapped", [102]], [[120152, 120152], "mapped", [103]], [[120153, 120153], "mapped", [104]], [[120154, 120154], "mapped", [105]], [[120155, 120155], "mapped", [106]], [[120156, 120156], "mapped", [107]], [[120157, 120157], "mapped", [108]], [[120158, 120158], "mapped", [109]], [[120159, 120159], "mapped", [110]], [[120160, 120160], "mapped", [111]], [[120161, 120161], "mapped", [112]], [[120162, 120162], "mapped", [113]], [[120163, 120163], "mapped", [114]], [[120164, 120164], "mapped", [115]], [[120165, 120165], "mapped", [116]], [[120166, 120166], "mapped", [117]], [[120167, 120167], "mapped", [118]], [[120168, 120168], "mapped", [119]], [[120169, 120169], "mapped", [120]], [[120170, 120170], "mapped", [121]], [[120171, 120171], "mapped", [122]], [[120172, 120172], "mapped", [97]], [[120173, 120173], "mapped", [98]], [[120174, 120174], "mapped", [99]], [[120175, 120175], "mapped", [100]], [[120176, 120176], "mapped", [101]], [[120177, 120177], "mapped", [102]], [[120178, 120178], "mapped", [103]], [[120179, 120179], "mapped", [104]], [[120180, 120180], "mapped", [105]], [[120181, 120181], "mapped", [106]], [[120182, 120182], "mapped", [107]], [[120183, 120183], "mapped", [108]], [[120184, 120184], "mapped", [109]], [[120185, 120185], "mapped", [110]], [[120186, 120186], "mapped", [111]], [[120187, 120187], "mapped", [112]], [[120188, 120188], "mapped", [113]], [[120189, 120189], "mapped", [114]], [[120190, 120190], "mapped", [115]], [[120191, 120191], "mapped", [116]], [[120192, 120192], "mapped", [117]], [[120193, 120193], "mapped", [118]], [[120194, 120194], "mapped", [119]], [[120195, 120195], "mapped", [120]], [[120196, 120196], "mapped", [121]], [[120197, 120197], "mapped", [122]], [[120198, 120198], "mapped", [97]], [[120199, 120199], "mapped", [98]], [[120200, 120200], "mapped", [99]], [[120201, 120201], "mapped", [100]], [[120202, 120202], "mapped", [101]], [[120203, 120203], "mapped", [102]], [[120204, 120204], "mapped", [103]], [[120205, 120205], "mapped", [104]], [[120206, 120206], "mapped", [105]], [[120207, 120207], "mapped", [106]], [[120208, 120208], "mapped", [107]], [[120209, 120209], "mapped", [108]], [[120210, 120210], "mapped", [109]], [[120211, 120211], "mapped", [110]], [[120212, 120212], "mapped", [111]], [[120213, 120213], "mapped", [112]], [[120214, 120214], "mapped", [113]], [[120215, 120215], "mapped", [114]], [[120216, 120216], "mapped", [115]], [[120217, 120217], "mapped", [116]], [[120218, 120218], "mapped", [117]], [[120219, 120219], "mapped", [118]], [[120220, 120220], "mapped", [119]], [[120221, 120221], "mapped", [120]], [[120222, 120222], "mapped", [121]], [[120223, 120223], "mapped", [122]], [[120224, 120224], "mapped", [97]], [[120225, 120225], "mapped", [98]], [[120226, 120226], "mapped", [99]], [[120227, 120227], "mapped", [100]], [[120228, 120228], "mapped", [101]], [[120229, 120229], "mapped", [102]], [[120230, 120230], "mapped", [103]], [[120231, 120231], "mapped", [104]], [[120232, 120232], "mapped", [105]], [[120233, 120233], "mapped", [106]], [[120234, 120234], "mapped", [107]], [[120235, 120235], "mapped", [108]], [[120236, 120236], "mapped", [109]], [[120237, 120237], "mapped", [110]], [[120238, 120238], "mapped", [111]], [[120239, 120239], "mapped", [112]], [[120240, 120240], "mapped", [113]], [[120241, 120241], "mapped", [114]], [[120242, 120242], "mapped", [115]], [[120243, 120243], "mapped", [116]], [[120244, 120244], "mapped", [117]], [[120245, 120245], "mapped", [118]], [[120246, 120246], "mapped", [119]], [[120247, 120247], "mapped", [120]], [[120248, 120248], "mapped", [121]], [[120249, 120249], "mapped", [122]], [[120250, 120250], "mapped", [97]], [[120251, 120251], "mapped", [98]], [[120252, 120252], "mapped", [99]], [[120253, 120253], "mapped", [100]], [[120254, 120254], "mapped", [101]], [[120255, 120255], "mapped", [102]], [[120256, 120256], "mapped", [103]], [[120257, 120257], "mapped", [104]], [[120258, 120258], "mapped", [105]], [[120259, 120259], "mapped", [106]], [[120260, 120260], "mapped", [107]], [[120261, 120261], "mapped", [108]], [[120262, 120262], "mapped", [109]], [[120263, 120263], "mapped", [110]], [[120264, 120264], "mapped", [111]], [[120265, 120265], "mapped", [112]], [[120266, 120266], "mapped", [113]], [[120267, 120267], "mapped", [114]], [[120268, 120268], "mapped", [115]], [[120269, 120269], "mapped", [116]], [[120270, 120270], "mapped", [117]], [[120271, 120271], "mapped", [118]], [[120272, 120272], "mapped", [119]], [[120273, 120273], "mapped", [120]], [[120274, 120274], "mapped", [121]], [[120275, 120275], "mapped", [122]], [[120276, 120276], "mapped", [97]], [[120277, 120277], "mapped", [98]], [[120278, 120278], "mapped", [99]], [[120279, 120279], "mapped", [100]], [[120280, 120280], "mapped", [101]], [[120281, 120281], "mapped", [102]], [[120282, 120282], "mapped", [103]], [[120283, 120283], "mapped", [104]], [[120284, 120284], "mapped", [105]], [[120285, 120285], "mapped", [106]], [[120286, 120286], "mapped", [107]], [[120287, 120287], "mapped", [108]], [[120288, 120288], "mapped", [109]], [[120289, 120289], "mapped", [110]], [[120290, 120290], "mapped", [111]], [[120291, 120291], "mapped", [112]], [[120292, 120292], "mapped", [113]], [[120293, 120293], "mapped", [114]], [[120294, 120294], "mapped", [115]], [[120295, 120295], "mapped", [116]], [[120296, 120296], "mapped", [117]], [[120297, 120297], "mapped", [118]], [[120298, 120298], "mapped", [119]], [[120299, 120299], "mapped", [120]], [[120300, 120300], "mapped", [121]], [[120301, 120301], "mapped", [122]], [[120302, 120302], "mapped", [97]], [[120303, 120303], "mapped", [98]], [[120304, 120304], "mapped", [99]], [[120305, 120305], "mapped", [100]], [[120306, 120306], "mapped", [101]], [[120307, 120307], "mapped", [102]], [[120308, 120308], "mapped", [103]], [[120309, 120309], "mapped", [104]], [[120310, 120310], "mapped", [105]], [[120311, 120311], "mapped", [106]], [[120312, 120312], "mapped", [107]], [[120313, 120313], "mapped", [108]], [[120314, 120314], "mapped", [109]], [[120315, 120315], "mapped", [110]], [[120316, 120316], "mapped", [111]], [[120317, 120317], "mapped", [112]], [[120318, 120318], "mapped", [113]], [[120319, 120319], "mapped", [114]], [[120320, 120320], "mapped", [115]], [[120321, 120321], "mapped", [116]], [[120322, 120322], "mapped", [117]], [[120323, 120323], "mapped", [118]], [[120324, 120324], "mapped", [119]], [[120325, 120325], "mapped", [120]], [[120326, 120326], "mapped", [121]], [[120327, 120327], "mapped", [122]], [[120328, 120328], "mapped", [97]], [[120329, 120329], "mapped", [98]], [[120330, 120330], "mapped", [99]], [[120331, 120331], "mapped", [100]], [[120332, 120332], "mapped", [101]], [[120333, 120333], "mapped", [102]], [[120334, 120334], "mapped", [103]], [[120335, 120335], "mapped", [104]], [[120336, 120336], "mapped", [105]], [[120337, 120337], "mapped", [106]], [[120338, 120338], "mapped", [107]], [[120339, 120339], "mapped", [108]], [[120340, 120340], "mapped", [109]], [[120341, 120341], "mapped", [110]], [[120342, 120342], "mapped", [111]], [[120343, 120343], "mapped", [112]], [[120344, 120344], "mapped", [113]], [[120345, 120345], "mapped", [114]], [[120346, 120346], "mapped", [115]], [[120347, 120347], "mapped", [116]], [[120348, 120348], "mapped", [117]], [[120349, 120349], "mapped", [118]], [[120350, 120350], "mapped", [119]], [[120351, 120351], "mapped", [120]], [[120352, 120352], "mapped", [121]], [[120353, 120353], "mapped", [122]], [[120354, 120354], "mapped", [97]], [[120355, 120355], "mapped", [98]], [[120356, 120356], "mapped", [99]], [[120357, 120357], "mapped", [100]], [[120358, 120358], "mapped", [101]], [[120359, 120359], "mapped", [102]], [[120360, 120360], "mapped", [103]], [[120361, 120361], "mapped", [104]], [[120362, 120362], "mapped", [105]], [[120363, 120363], "mapped", [106]], [[120364, 120364], "mapped", [107]], [[120365, 120365], "mapped", [108]], [[120366, 120366], "mapped", [109]], [[120367, 120367], "mapped", [110]], [[120368, 120368], "mapped", [111]], [[120369, 120369], "mapped", [112]], [[120370, 120370], "mapped", [113]], [[120371, 120371], "mapped", [114]], [[120372, 120372], "mapped", [115]], [[120373, 120373], "mapped", [116]], [[120374, 120374], "mapped", [117]], [[120375, 120375], "mapped", [118]], [[120376, 120376], "mapped", [119]], [[120377, 120377], "mapped", [120]], [[120378, 120378], "mapped", [121]], [[120379, 120379], "mapped", [122]], [[120380, 120380], "mapped", [97]], [[120381, 120381], "mapped", [98]], [[120382, 120382], "mapped", [99]], [[120383, 120383], "mapped", [100]], [[120384, 120384], "mapped", [101]], [[120385, 120385], "mapped", [102]], [[120386, 120386], "mapped", [103]], [[120387, 120387], "mapped", [104]], [[120388, 120388], "mapped", [105]], [[120389, 120389], "mapped", [106]], [[120390, 120390], "mapped", [107]], [[120391, 120391], "mapped", [108]], [[120392, 120392], "mapped", [109]], [[120393, 120393], "mapped", [110]], [[120394, 120394], "mapped", [111]], [[120395, 120395], "mapped", [112]], [[120396, 120396], "mapped", [113]], [[120397, 120397], "mapped", [114]], [[120398, 120398], "mapped", [115]], [[120399, 120399], "mapped", [116]], [[120400, 120400], "mapped", [117]], [[120401, 120401], "mapped", [118]], [[120402, 120402], "mapped", [119]], [[120403, 120403], "mapped", [120]], [[120404, 120404], "mapped", [121]], [[120405, 120405], "mapped", [122]], [[120406, 120406], "mapped", [97]], [[120407, 120407], "mapped", [98]], [[120408, 120408], "mapped", [99]], [[120409, 120409], "mapped", [100]], [[120410, 120410], "mapped", [101]], [[120411, 120411], "mapped", [102]], [[120412, 120412], "mapped", [103]], [[120413, 120413], "mapped", [104]], [[120414, 120414], "mapped", [105]], [[120415, 120415], "mapped", [106]], [[120416, 120416], "mapped", [107]], [[120417, 120417], "mapped", [108]], [[120418, 120418], "mapped", [109]], [[120419, 120419], "mapped", [110]], [[120420, 120420], "mapped", [111]], [[120421, 120421], "mapped", [112]], [[120422, 120422], "mapped", [113]], [[120423, 120423], "mapped", [114]], [[120424, 120424], "mapped", [115]], [[120425, 120425], "mapped", [116]], [[120426, 120426], "mapped", [117]], [[120427, 120427], "mapped", [118]], [[120428, 120428], "mapped", [119]], [[120429, 120429], "mapped", [120]], [[120430, 120430], "mapped", [121]], [[120431, 120431], "mapped", [122]], [[120432, 120432], "mapped", [97]], [[120433, 120433], "mapped", [98]], [[120434, 120434], "mapped", [99]], [[120435, 120435], "mapped", [100]], [[120436, 120436], "mapped", [101]], [[120437, 120437], "mapped", [102]], [[120438, 120438], "mapped", [103]], [[120439, 120439], "mapped", [104]], [[120440, 120440], "mapped", [105]], [[120441, 120441], "mapped", [106]], [[120442, 120442], "mapped", [107]], [[120443, 120443], "mapped", [108]], [[120444, 120444], "mapped", [109]], [[120445, 120445], "mapped", [110]], [[120446, 120446], "mapped", [111]], [[120447, 120447], "mapped", [112]], [[120448, 120448], "mapped", [113]], [[120449, 120449], "mapped", [114]], [[120450, 120450], "mapped", [115]], [[120451, 120451], "mapped", [116]], [[120452, 120452], "mapped", [117]], [[120453, 120453], "mapped", [118]], [[120454, 120454], "mapped", [119]], [[120455, 120455], "mapped", [120]], [[120456, 120456], "mapped", [121]], [[120457, 120457], "mapped", [122]], [[120458, 120458], "mapped", [97]], [[120459, 120459], "mapped", [98]], [[120460, 120460], "mapped", [99]], [[120461, 120461], "mapped", [100]], [[120462, 120462], "mapped", [101]], [[120463, 120463], "mapped", [102]], [[120464, 120464], "mapped", [103]], [[120465, 120465], "mapped", [104]], [[120466, 120466], "mapped", [105]], [[120467, 120467], "mapped", [106]], [[120468, 120468], "mapped", [107]], [[120469, 120469], "mapped", [108]], [[120470, 120470], "mapped", [109]], [[120471, 120471], "mapped", [110]], [[120472, 120472], "mapped", [111]], [[120473, 120473], "mapped", [112]], [[120474, 120474], "mapped", [113]], [[120475, 120475], "mapped", [114]], [[120476, 120476], "mapped", [115]], [[120477, 120477], "mapped", [116]], [[120478, 120478], "mapped", [117]], [[120479, 120479], "mapped", [118]], [[120480, 120480], "mapped", [119]], [[120481, 120481], "mapped", [120]], [[120482, 120482], "mapped", [121]], [[120483, 120483], "mapped", [122]], [[120484, 120484], "mapped", [305]], [[120485, 120485], "mapped", [567]], [[120486, 120487], "disallowed"], [[120488, 120488], "mapped", [945]], [[120489, 120489], "mapped", [946]], [[120490, 120490], "mapped", [947]], [[120491, 120491], "mapped", [948]], [[120492, 120492], "mapped", [949]], [[120493, 120493], "mapped", [950]], [[120494, 120494], "mapped", [951]], [[120495, 120495], "mapped", [952]], [[120496, 120496], "mapped", [953]], [[120497, 120497], "mapped", [954]], [[120498, 120498], "mapped", [955]], [[120499, 120499], "mapped", [956]], [[120500, 120500], "mapped", [957]], [[120501, 120501], "mapped", [958]], [[120502, 120502], "mapped", [959]], [[120503, 120503], "mapped", [960]], [[120504, 120504], "mapped", [961]], [[120505, 120505], "mapped", [952]], [[120506, 120506], "mapped", [963]], [[120507, 120507], "mapped", [964]], [[120508, 120508], "mapped", [965]], [[120509, 120509], "mapped", [966]], [[120510, 120510], "mapped", [967]], [[120511, 120511], "mapped", [968]], [[120512, 120512], "mapped", [969]], [[120513, 120513], "mapped", [8711]], [[120514, 120514], "mapped", [945]], [[120515, 120515], "mapped", [946]], [[120516, 120516], "mapped", [947]], [[120517, 120517], "mapped", [948]], [[120518, 120518], "mapped", [949]], [[120519, 120519], "mapped", [950]], [[120520, 120520], "mapped", [951]], [[120521, 120521], "mapped", [952]], [[120522, 120522], "mapped", [953]], [[120523, 120523], "mapped", [954]], [[120524, 120524], "mapped", [955]], [[120525, 120525], "mapped", [956]], [[120526, 120526], "mapped", [957]], [[120527, 120527], "mapped", [958]], [[120528, 120528], "mapped", [959]], [[120529, 120529], "mapped", [960]], [[120530, 120530], "mapped", [961]], [[120531, 120532], "mapped", [963]], [[120533, 120533], "mapped", [964]], [[120534, 120534], "mapped", [965]], [[120535, 120535], "mapped", [966]], [[120536, 120536], "mapped", [967]], [[120537, 120537], "mapped", [968]], [[120538, 120538], "mapped", [969]], [[120539, 120539], "mapped", [8706]], [[120540, 120540], "mapped", [949]], [[120541, 120541], "mapped", [952]], [[120542, 120542], "mapped", [954]], [[120543, 120543], "mapped", [966]], [[120544, 120544], "mapped", [961]], [[120545, 120545], "mapped", [960]], [[120546, 120546], "mapped", [945]], [[120547, 120547], "mapped", [946]], [[120548, 120548], "mapped", [947]], [[120549, 120549], "mapped", [948]], [[120550, 120550], "mapped", [949]], [[120551, 120551], "mapped", [950]], [[120552, 120552], "mapped", [951]], [[120553, 120553], "mapped", [952]], [[120554, 120554], "mapped", [953]], [[120555, 120555], "mapped", [954]], [[120556, 120556], "mapped", [955]], [[120557, 120557], "mapped", [956]], [[120558, 120558], "mapped", [957]], [[120559, 120559], "mapped", [958]], [[120560, 120560], "mapped", [959]], [[120561, 120561], "mapped", [960]], [[120562, 120562], "mapped", [961]], [[120563, 120563], "mapped", [952]], [[120564, 120564], "mapped", [963]], [[120565, 120565], "mapped", [964]], [[120566, 120566], "mapped", [965]], [[120567, 120567], "mapped", [966]], [[120568, 120568], "mapped", [967]], [[120569, 120569], "mapped", [968]], [[120570, 120570], "mapped", [969]], [[120571, 120571], "mapped", [8711]], [[120572, 120572], "mapped", [945]], [[120573, 120573], "mapped", [946]], [[120574, 120574], "mapped", [947]], [[120575, 120575], "mapped", [948]], [[120576, 120576], "mapped", [949]], [[120577, 120577], "mapped", [950]], [[120578, 120578], "mapped", [951]], [[120579, 120579], "mapped", [952]], [[120580, 120580], "mapped", [953]], [[120581, 120581], "mapped", [954]], [[120582, 120582], "mapped", [955]], [[120583, 120583], "mapped", [956]], [[120584, 120584], "mapped", [957]], [[120585, 120585], "mapped", [958]], [[120586, 120586], "mapped", [959]], [[120587, 120587], "mapped", [960]], [[120588, 120588], "mapped", [961]], [[120589, 120590], "mapped", [963]], [[120591, 120591], "mapped", [964]], [[120592, 120592], "mapped", [965]], [[120593, 120593], "mapped", [966]], [[120594, 120594], "mapped", [967]], [[120595, 120595], "mapped", [968]], [[120596, 120596], "mapped", [969]], [[120597, 120597], "mapped", [8706]], [[120598, 120598], "mapped", [949]], [[120599, 120599], "mapped", [952]], [[120600, 120600], "mapped", [954]], [[120601, 120601], "mapped", [966]], [[120602, 120602], "mapped", [961]], [[120603, 120603], "mapped", [960]], [[120604, 120604], "mapped", [945]], [[120605, 120605], "mapped", [946]], [[120606, 120606], "mapped", [947]], [[120607, 120607], "mapped", [948]], [[120608, 120608], "mapped", [949]], [[120609, 120609], "mapped", [950]], [[120610, 120610], "mapped", [951]], [[120611, 120611], "mapped", [952]], [[120612, 120612], "mapped", [953]], [[120613, 120613], "mapped", [954]], [[120614, 120614], "mapped", [955]], [[120615, 120615], "mapped", [956]], [[120616, 120616], "mapped", [957]], [[120617, 120617], "mapped", [958]], [[120618, 120618], "mapped", [959]], [[120619, 120619], "mapped", [960]], [[120620, 120620], "mapped", [961]], [[120621, 120621], "mapped", [952]], [[120622, 120622], "mapped", [963]], [[120623, 120623], "mapped", [964]], [[120624, 120624], "mapped", [965]], [[120625, 120625], "mapped", [966]], [[120626, 120626], "mapped", [967]], [[120627, 120627], "mapped", [968]], [[120628, 120628], "mapped", [969]], [[120629, 120629], "mapped", [8711]], [[120630, 120630], "mapped", [945]], [[120631, 120631], "mapped", [946]], [[120632, 120632], "mapped", [947]], [[120633, 120633], "mapped", [948]], [[120634, 120634], "mapped", [949]], [[120635, 120635], "mapped", [950]], [[120636, 120636], "mapped", [951]], [[120637, 120637], "mapped", [952]], [[120638, 120638], "mapped", [953]], [[120639, 120639], "mapped", [954]], [[120640, 120640], "mapped", [955]], [[120641, 120641], "mapped", [956]], [[120642, 120642], "mapped", [957]], [[120643, 120643], "mapped", [958]], [[120644, 120644], "mapped", [959]], [[120645, 120645], "mapped", [960]], [[120646, 120646], "mapped", [961]], [[120647, 120648], "mapped", [963]], [[120649, 120649], "mapped", [964]], [[120650, 120650], "mapped", [965]], [[120651, 120651], "mapped", [966]], [[120652, 120652], "mapped", [967]], [[120653, 120653], "mapped", [968]], [[120654, 120654], "mapped", [969]], [[120655, 120655], "mapped", [8706]], [[120656, 120656], "mapped", [949]], [[120657, 120657], "mapped", [952]], [[120658, 120658], "mapped", [954]], [[120659, 120659], "mapped", [966]], [[120660, 120660], "mapped", [961]], [[120661, 120661], "mapped", [960]], [[120662, 120662], "mapped", [945]], [[120663, 120663], "mapped", [946]], [[120664, 120664], "mapped", [947]], [[120665, 120665], "mapped", [948]], [[120666, 120666], "mapped", [949]], [[120667, 120667], "mapped", [950]], [[120668, 120668], "mapped", [951]], [[120669, 120669], "mapped", [952]], [[120670, 120670], "mapped", [953]], [[120671, 120671], "mapped", [954]], [[120672, 120672], "mapped", [955]], [[120673, 120673], "mapped", [956]], [[120674, 120674], "mapped", [957]], [[120675, 120675], "mapped", [958]], [[120676, 120676], "mapped", [959]], [[120677, 120677], "mapped", [960]], [[120678, 120678], "mapped", [961]], [[120679, 120679], "mapped", [952]], [[120680, 120680], "mapped", [963]], [[120681, 120681], "mapped", [964]], [[120682, 120682], "mapped", [965]], [[120683, 120683], "mapped", [966]], [[120684, 120684], "mapped", [967]], [[120685, 120685], "mapped", [968]], [[120686, 120686], "mapped", [969]], [[120687, 120687], "mapped", [8711]], [[120688, 120688], "mapped", [945]], [[120689, 120689], "mapped", [946]], [[120690, 120690], "mapped", [947]], [[120691, 120691], "mapped", [948]], [[120692, 120692], "mapped", [949]], [[120693, 120693], "mapped", [950]], [[120694, 120694], "mapped", [951]], [[120695, 120695], "mapped", [952]], [[120696, 120696], "mapped", [953]], [[120697, 120697], "mapped", [954]], [[120698, 120698], "mapped", [955]], [[120699, 120699], "mapped", [956]], [[120700, 120700], "mapped", [957]], [[120701, 120701], "mapped", [958]], [[120702, 120702], "mapped", [959]], [[120703, 120703], "mapped", [960]], [[120704, 120704], "mapped", [961]], [[120705, 120706], "mapped", [963]], [[120707, 120707], "mapped", [964]], [[120708, 120708], "mapped", [965]], [[120709, 120709], "mapped", [966]], [[120710, 120710], "mapped", [967]], [[120711, 120711], "mapped", [968]], [[120712, 120712], "mapped", [969]], [[120713, 120713], "mapped", [8706]], [[120714, 120714], "mapped", [949]], [[120715, 120715], "mapped", [952]], [[120716, 120716], "mapped", [954]], [[120717, 120717], "mapped", [966]], [[120718, 120718], "mapped", [961]], [[120719, 120719], "mapped", [960]], [[120720, 120720], "mapped", [945]], [[120721, 120721], "mapped", [946]], [[120722, 120722], "mapped", [947]], [[120723, 120723], "mapped", [948]], [[120724, 120724], "mapped", [949]], [[120725, 120725], "mapped", [950]], [[120726, 120726], "mapped", [951]], [[120727, 120727], "mapped", [952]], [[120728, 120728], "mapped", [953]], [[120729, 120729], "mapped", [954]], [[120730, 120730], "mapped", [955]], [[120731, 120731], "mapped", [956]], [[120732, 120732], "mapped", [957]], [[120733, 120733], "mapped", [958]], [[120734, 120734], "mapped", [959]], [[120735, 120735], "mapped", [960]], [[120736, 120736], "mapped", [961]], [[120737, 120737], "mapped", [952]], [[120738, 120738], "mapped", [963]], [[120739, 120739], "mapped", [964]], [[120740, 120740], "mapped", [965]], [[120741, 120741], "mapped", [966]], [[120742, 120742], "mapped", [967]], [[120743, 120743], "mapped", [968]], [[120744, 120744], "mapped", [969]], [[120745, 120745], "mapped", [8711]], [[120746, 120746], "mapped", [945]], [[120747, 120747], "mapped", [946]], [[120748, 120748], "mapped", [947]], [[120749, 120749], "mapped", [948]], [[120750, 120750], "mapped", [949]], [[120751, 120751], "mapped", [950]], [[120752, 120752], "mapped", [951]], [[120753, 120753], "mapped", [952]], [[120754, 120754], "mapped", [953]], [[120755, 120755], "mapped", [954]], [[120756, 120756], "mapped", [955]], [[120757, 120757], "mapped", [956]], [[120758, 120758], "mapped", [957]], [[120759, 120759], "mapped", [958]], [[120760, 120760], "mapped", [959]], [[120761, 120761], "mapped", [960]], [[120762, 120762], "mapped", [961]], [[120763, 120764], "mapped", [963]], [[120765, 120765], "mapped", [964]], [[120766, 120766], "mapped", [965]], [[120767, 120767], "mapped", [966]], [[120768, 120768], "mapped", [967]], [[120769, 120769], "mapped", [968]], [[120770, 120770], "mapped", [969]], [[120771, 120771], "mapped", [8706]], [[120772, 120772], "mapped", [949]], [[120773, 120773], "mapped", [952]], [[120774, 120774], "mapped", [954]], [[120775, 120775], "mapped", [966]], [[120776, 120776], "mapped", [961]], [[120777, 120777], "mapped", [960]], [[120778, 120779], "mapped", [989]], [[120780, 120781], "disallowed"], [[120782, 120782], "mapped", [48]], [[120783, 120783], "mapped", [49]], [[120784, 120784], "mapped", [50]], [[120785, 120785], "mapped", [51]], [[120786, 120786], "mapped", [52]], [[120787, 120787], "mapped", [53]], [[120788, 120788], "mapped", [54]], [[120789, 120789], "mapped", [55]], [[120790, 120790], "mapped", [56]], [[120791, 120791], "mapped", [57]], [[120792, 120792], "mapped", [48]], [[120793, 120793], "mapped", [49]], [[120794, 120794], "mapped", [50]], [[120795, 120795], "mapped", [51]], [[120796, 120796], "mapped", [52]], [[120797, 120797], "mapped", [53]], [[120798, 120798], "mapped", [54]], [[120799, 120799], "mapped", [55]], [[120800, 120800], "mapped", [56]], [[120801, 120801], "mapped", [57]], [[120802, 120802], "mapped", [48]], [[120803, 120803], "mapped", [49]], [[120804, 120804], "mapped", [50]], [[120805, 120805], "mapped", [51]], [[120806, 120806], "mapped", [52]], [[120807, 120807], "mapped", [53]], [[120808, 120808], "mapped", [54]], [[120809, 120809], "mapped", [55]], [[120810, 120810], "mapped", [56]], [[120811, 120811], "mapped", [57]], [[120812, 120812], "mapped", [48]], [[120813, 120813], "mapped", [49]], [[120814, 120814], "mapped", [50]], [[120815, 120815], "mapped", [51]], [[120816, 120816], "mapped", [52]], [[120817, 120817], "mapped", [53]], [[120818, 120818], "mapped", [54]], [[120819, 120819], "mapped", [55]], [[120820, 120820], "mapped", [56]], [[120821, 120821], "mapped", [57]], [[120822, 120822], "mapped", [48]], [[120823, 120823], "mapped", [49]], [[120824, 120824], "mapped", [50]], [[120825, 120825], "mapped", [51]], [[120826, 120826], "mapped", [52]], [[120827, 120827], "mapped", [53]], [[120828, 120828], "mapped", [54]], [[120829, 120829], "mapped", [55]], [[120830, 120830], "mapped", [56]], [[120831, 120831], "mapped", [57]], [[120832, 121343], "valid", [], "NV8"], [[121344, 121398], "valid"], [[121399, 121402], "valid", [], "NV8"], [[121403, 121452], "valid"], [[121453, 121460], "valid", [], "NV8"], [[121461, 121461], "valid"], [[121462, 121475], "valid", [], "NV8"], [[121476, 121476], "valid"], [[121477, 121483], "valid", [], "NV8"], [[121484, 121498], "disallowed"], [[121499, 121503], "valid"], [[121504, 121504], "disallowed"], [[121505, 121519], "valid"], [[121520, 124927], "disallowed"], [[124928, 125124], "valid"], [[125125, 125126], "disallowed"], [[125127, 125135], "valid", [], "NV8"], [[125136, 125142], "valid"], [[125143, 126463], "disallowed"], [[126464, 126464], "mapped", [1575]], [[126465, 126465], "mapped", [1576]], [[126466, 126466], "mapped", [1580]], [[126467, 126467], "mapped", [1583]], [[126468, 126468], "disallowed"], [[126469, 126469], "mapped", [1608]], [[126470, 126470], "mapped", [1586]], [[126471, 126471], "mapped", [1581]], [[126472, 126472], "mapped", [1591]], [[126473, 126473], "mapped", [1610]], [[126474, 126474], "mapped", [1603]], [[126475, 126475], "mapped", [1604]], [[126476, 126476], "mapped", [1605]], [[126477, 126477], "mapped", [1606]], [[126478, 126478], "mapped", [1587]], [[126479, 126479], "mapped", [1593]], [[126480, 126480], "mapped", [1601]], [[126481, 126481], "mapped", [1589]], [[126482, 126482], "mapped", [1602]], [[126483, 126483], "mapped", [1585]], [[126484, 126484], "mapped", [1588]], [[126485, 126485], "mapped", [1578]], [[126486, 126486], "mapped", [1579]], [[126487, 126487], "mapped", [1582]], [[126488, 126488], "mapped", [1584]], [[126489, 126489], "mapped", [1590]], [[126490, 126490], "mapped", [1592]], [[126491, 126491], "mapped", [1594]], [[126492, 126492], "mapped", [1646]], [[126493, 126493], "mapped", [1722]], [[126494, 126494], "mapped", [1697]], [[126495, 126495], "mapped", [1647]], [[126496, 126496], "disallowed"], [[126497, 126497], "mapped", [1576]], [[126498, 126498], "mapped", [1580]], [[126499, 126499], "disallowed"], [[126500, 126500], "mapped", [1607]], [[126501, 126502], "disallowed"], [[126503, 126503], "mapped", [1581]], [[126504, 126504], "disallowed"], [[126505, 126505], "mapped", [1610]], [[126506, 126506], "mapped", [1603]], [[126507, 126507], "mapped", [1604]], [[126508, 126508], "mapped", [1605]], [[126509, 126509], "mapped", [1606]], [[126510, 126510], "mapped", [1587]], [[126511, 126511], "mapped", [1593]], [[126512, 126512], "mapped", [1601]], [[126513, 126513], "mapped", [1589]], [[126514, 126514], "mapped", [1602]], [[126515, 126515], "disallowed"], [[126516, 126516], "mapped", [1588]], [[126517, 126517], "mapped", [1578]], [[126518, 126518], "mapped", [1579]], [[126519, 126519], "mapped", [1582]], [[126520, 126520], "disallowed"], [[126521, 126521], "mapped", [1590]], [[126522, 126522], "disallowed"], [[126523, 126523], "mapped", [1594]], [[126524, 126529], "disallowed"], [[126530, 126530], "mapped", [1580]], [[126531, 126534], "disallowed"], [[126535, 126535], "mapped", [1581]], [[126536, 126536], "disallowed"], [[126537, 126537], "mapped", [1610]], [[126538, 126538], "disallowed"], [[126539, 126539], "mapped", [1604]], [[126540, 126540], "disallowed"], [[126541, 126541], "mapped", [1606]], [[126542, 126542], "mapped", [1587]], [[126543, 126543], "mapped", [1593]], [[126544, 126544], "disallowed"], [[126545, 126545], "mapped", [1589]], [[126546, 126546], "mapped", [1602]], [[126547, 126547], "disallowed"], [[126548, 126548], "mapped", [1588]], [[126549, 126550], "disallowed"], [[126551, 126551], "mapped", [1582]], [[126552, 126552], "disallowed"], [[126553, 126553], "mapped", [1590]], [[126554, 126554], "disallowed"], [[126555, 126555], "mapped", [1594]], [[126556, 126556], "disallowed"], [[126557, 126557], "mapped", [1722]], [[126558, 126558], "disallowed"], [[126559, 126559], "mapped", [1647]], [[126560, 126560], "disallowed"], [[126561, 126561], "mapped", [1576]], [[126562, 126562], "mapped", [1580]], [[126563, 126563], "disallowed"], [[126564, 126564], "mapped", [1607]], [[126565, 126566], "disallowed"], [[126567, 126567], "mapped", [1581]], [[126568, 126568], "mapped", [1591]], [[126569, 126569], "mapped", [1610]], [[126570, 126570], "mapped", [1603]], [[126571, 126571], "disallowed"], [[126572, 126572], "mapped", [1605]], [[126573, 126573], "mapped", [1606]], [[126574, 126574], "mapped", [1587]], [[126575, 126575], "mapped", [1593]], [[126576, 126576], "mapped", [1601]], [[126577, 126577], "mapped", [1589]], [[126578, 126578], "mapped", [1602]], [[126579, 126579], "disallowed"], [[126580, 126580], "mapped", [1588]], [[126581, 126581], "mapped", [1578]], [[126582, 126582], "mapped", [1579]], [[126583, 126583], "mapped", [1582]], [[126584, 126584], "disallowed"], [[126585, 126585], "mapped", [1590]], [[126586, 126586], "mapped", [1592]], [[126587, 126587], "mapped", [1594]], [[126588, 126588], "mapped", [1646]], [[126589, 126589], "disallowed"], [[126590, 126590], "mapped", [1697]], [[126591, 126591], "disallowed"], [[126592, 126592], "mapped", [1575]], [[126593, 126593], "mapped", [1576]], [[126594, 126594], "mapped", [1580]], [[126595, 126595], "mapped", [1583]], [[126596, 126596], "mapped", [1607]], [[126597, 126597], "mapped", [1608]], [[126598, 126598], "mapped", [1586]], [[126599, 126599], "mapped", [1581]], [[126600, 126600], "mapped", [1591]], [[126601, 126601], "mapped", [1610]], [[126602, 126602], "disallowed"], [[126603, 126603], "mapped", [1604]], [[126604, 126604], "mapped", [1605]], [[126605, 126605], "mapped", [1606]], [[126606, 126606], "mapped", [1587]], [[126607, 126607], "mapped", [1593]], [[126608, 126608], "mapped", [1601]], [[126609, 126609], "mapped", [1589]], [[126610, 126610], "mapped", [1602]], [[126611, 126611], "mapped", [1585]], [[126612, 126612], "mapped", [1588]], [[126613, 126613], "mapped", [1578]], [[126614, 126614], "mapped", [1579]], [[126615, 126615], "mapped", [1582]], [[126616, 126616], "mapped", [1584]], [[126617, 126617], "mapped", [1590]], [[126618, 126618], "mapped", [1592]], [[126619, 126619], "mapped", [1594]], [[126620, 126624], "disallowed"], [[126625, 126625], "mapped", [1576]], [[126626, 126626], "mapped", [1580]], [[126627, 126627], "mapped", [1583]], [[126628, 126628], "disallowed"], [[126629, 126629], "mapped", [1608]], [[126630, 126630], "mapped", [1586]], [[126631, 126631], "mapped", [1581]], [[126632, 126632], "mapped", [1591]], [[126633, 126633], "mapped", [1610]], [[126634, 126634], "disallowed"], [[126635, 126635], "mapped", [1604]], [[126636, 126636], "mapped", [1605]], [[126637, 126637], "mapped", [1606]], [[126638, 126638], "mapped", [1587]], [[126639, 126639], "mapped", [1593]], [[126640, 126640], "mapped", [1601]], [[126641, 126641], "mapped", [1589]], [[126642, 126642], "mapped", [1602]], [[126643, 126643], "mapped", [1585]], [[126644, 126644], "mapped", [1588]], [[126645, 126645], "mapped", [1578]], [[126646, 126646], "mapped", [1579]], [[126647, 126647], "mapped", [1582]], [[126648, 126648], "mapped", [1584]], [[126649, 126649], "mapped", [1590]], [[126650, 126650], "mapped", [1592]], [[126651, 126651], "mapped", [1594]], [[126652, 126703], "disallowed"], [[126704, 126705], "valid", [], "NV8"], [[126706, 126975], "disallowed"], [[126976, 127019], "valid", [], "NV8"], [[127020, 127023], "disallowed"], [[127024, 127123], "valid", [], "NV8"], [[127124, 127135], "disallowed"], [[127136, 127150], "valid", [], "NV8"], [[127151, 127152], "disallowed"], [[127153, 127166], "valid", [], "NV8"], [[127167, 127167], "valid", [], "NV8"], [[127168, 127168], "disallowed"], [[127169, 127183], "valid", [], "NV8"], [[127184, 127184], "disallowed"], [[127185, 127199], "valid", [], "NV8"], [[127200, 127221], "valid", [], "NV8"], [[127222, 127231], "disallowed"], [[127232, 127232], "disallowed"], [[127233, 127233], "disallowed_STD3_mapped", [48, 44]], [[127234, 127234], "disallowed_STD3_mapped", [49, 44]], [[127235, 127235], "disallowed_STD3_mapped", [50, 44]], [[127236, 127236], "disallowed_STD3_mapped", [51, 44]], [[127237, 127237], "disallowed_STD3_mapped", [52, 44]], [[127238, 127238], "disallowed_STD3_mapped", [53, 44]], [[127239, 127239], "disallowed_STD3_mapped", [54, 44]], [[127240, 127240], "disallowed_STD3_mapped", [55, 44]], [[127241, 127241], "disallowed_STD3_mapped", [56, 44]], [[127242, 127242], "disallowed_STD3_mapped", [57, 44]], [[127243, 127244], "valid", [], "NV8"], [[127245, 127247], "disallowed"], [[127248, 127248], "disallowed_STD3_mapped", [40, 97, 41]], [[127249, 127249], "disallowed_STD3_mapped", [40, 98, 41]], [[127250, 127250], "disallowed_STD3_mapped", [40, 99, 41]], [[127251, 127251], "disallowed_STD3_mapped", [40, 100, 41]], [[127252, 127252], "disallowed_STD3_mapped", [40, 101, 41]], [[127253, 127253], "disallowed_STD3_mapped", [40, 102, 41]], [[127254, 127254], "disallowed_STD3_mapped", [40, 103, 41]], [[127255, 127255], "disallowed_STD3_mapped", [40, 104, 41]], [[127256, 127256], "disallowed_STD3_mapped", [40, 105, 41]], [[127257, 127257], "disallowed_STD3_mapped", [40, 106, 41]], [[127258, 127258], "disallowed_STD3_mapped", [40, 107, 41]], [[127259, 127259], "disallowed_STD3_mapped", [40, 108, 41]], [[127260, 127260], "disallowed_STD3_mapped", [40, 109, 41]], [[127261, 127261], "disallowed_STD3_mapped", [40, 110, 41]], [[127262, 127262], "disallowed_STD3_mapped", [40, 111, 41]], [[127263, 127263], "disallowed_STD3_mapped", [40, 112, 41]], [[127264, 127264], "disallowed_STD3_mapped", [40, 113, 41]], [[127265, 127265], "disallowed_STD3_mapped", [40, 114, 41]], [[127266, 127266], "disallowed_STD3_mapped", [40, 115, 41]], [[127267, 127267], "disallowed_STD3_mapped", [40, 116, 41]], [[127268, 127268], "disallowed_STD3_mapped", [40, 117, 41]], [[127269, 127269], "disallowed_STD3_mapped", [40, 118, 41]], [[127270, 127270], "disallowed_STD3_mapped", [40, 119, 41]], [[127271, 127271], "disallowed_STD3_mapped", [40, 120, 41]], [[127272, 127272], "disallowed_STD3_mapped", [40, 121, 41]], [[127273, 127273], "disallowed_STD3_mapped", [40, 122, 41]], [[127274, 127274], "mapped", [12308, 115, 12309]], [[127275, 127275], "mapped", [99]], [[127276, 127276], "mapped", [114]], [[127277, 127277], "mapped", [99, 100]], [[127278, 127278], "mapped", [119, 122]], [[127279, 127279], "disallowed"], [[127280, 127280], "mapped", [97]], [[127281, 127281], "mapped", [98]], [[127282, 127282], "mapped", [99]], [[127283, 127283], "mapped", [100]], [[127284, 127284], "mapped", [101]], [[127285, 127285], "mapped", [102]], [[127286, 127286], "mapped", [103]], [[127287, 127287], "mapped", [104]], [[127288, 127288], "mapped", [105]], [[127289, 127289], "mapped", [106]], [[127290, 127290], "mapped", [107]], [[127291, 127291], "mapped", [108]], [[127292, 127292], "mapped", [109]], [[127293, 127293], "mapped", [110]], [[127294, 127294], "mapped", [111]], [[127295, 127295], "mapped", [112]], [[127296, 127296], "mapped", [113]], [[127297, 127297], "mapped", [114]], [[127298, 127298], "mapped", [115]], [[127299, 127299], "mapped", [116]], [[127300, 127300], "mapped", [117]], [[127301, 127301], "mapped", [118]], [[127302, 127302], "mapped", [119]], [[127303, 127303], "mapped", [120]], [[127304, 127304], "mapped", [121]], [[127305, 127305], "mapped", [122]], [[127306, 127306], "mapped", [104, 118]], [[127307, 127307], "mapped", [109, 118]], [[127308, 127308], "mapped", [115, 100]], [[127309, 127309], "mapped", [115, 115]], [[127310, 127310], "mapped", [112, 112, 118]], [[127311, 127311], "mapped", [119, 99]], [[127312, 127318], "valid", [], "NV8"], [[127319, 127319], "valid", [], "NV8"], [[127320, 127326], "valid", [], "NV8"], [[127327, 127327], "valid", [], "NV8"], [[127328, 127337], "valid", [], "NV8"], [[127338, 127338], "mapped", [109, 99]], [[127339, 127339], "mapped", [109, 100]], [[127340, 127343], "disallowed"], [[127344, 127352], "valid", [], "NV8"], [[127353, 127353], "valid", [], "NV8"], [[127354, 127354], "valid", [], "NV8"], [[127355, 127356], "valid", [], "NV8"], [[127357, 127358], "valid", [], "NV8"], [[127359, 127359], "valid", [], "NV8"], [[127360, 127369], "valid", [], "NV8"], [[127370, 127373], "valid", [], "NV8"], [[127374, 127375], "valid", [], "NV8"], [[127376, 127376], "mapped", [100, 106]], [[127377, 127386], "valid", [], "NV8"], [[127387, 127461], "disallowed"], [[127462, 127487], "valid", [], "NV8"], [[127488, 127488], "mapped", [12411, 12363]], [[127489, 127489], "mapped", [12467, 12467]], [[127490, 127490], "mapped", [12469]], [[127491, 127503], "disallowed"], [[127504, 127504], "mapped", [25163]], [[127505, 127505], "mapped", [23383]], [[127506, 127506], "mapped", [21452]], [[127507, 127507], "mapped", [12487]], [[127508, 127508], "mapped", [20108]], [[127509, 127509], "mapped", [22810]], [[127510, 127510], "mapped", [35299]], [[127511, 127511], "mapped", [22825]], [[127512, 127512], "mapped", [20132]], [[127513, 127513], "mapped", [26144]], [[127514, 127514], "mapped", [28961]], [[127515, 127515], "mapped", [26009]], [[127516, 127516], "mapped", [21069]], [[127517, 127517], "mapped", [24460]], [[127518, 127518], "mapped", [20877]], [[127519, 127519], "mapped", [26032]], [[127520, 127520], "mapped", [21021]], [[127521, 127521], "mapped", [32066]], [[127522, 127522], "mapped", [29983]], [[127523, 127523], "mapped", [36009]], [[127524, 127524], "mapped", [22768]], [[127525, 127525], "mapped", [21561]], [[127526, 127526], "mapped", [28436]], [[127527, 127527], "mapped", [25237]], [[127528, 127528], "mapped", [25429]], [[127529, 127529], "mapped", [19968]], [[127530, 127530], "mapped", [19977]], [[127531, 127531], "mapped", [36938]], [[127532, 127532], "mapped", [24038]], [[127533, 127533], "mapped", [20013]], [[127534, 127534], "mapped", [21491]], [[127535, 127535], "mapped", [25351]], [[127536, 127536], "mapped", [36208]], [[127537, 127537], "mapped", [25171]], [[127538, 127538], "mapped", [31105]], [[127539, 127539], "mapped", [31354]], [[127540, 127540], "mapped", [21512]], [[127541, 127541], "mapped", [28288]], [[127542, 127542], "mapped", [26377]], [[127543, 127543], "mapped", [26376]], [[127544, 127544], "mapped", [30003]], [[127545, 127545], "mapped", [21106]], [[127546, 127546], "mapped", [21942]], [[127547, 127551], "disallowed"], [[127552, 127552], "mapped", [12308, 26412, 12309]], [[127553, 127553], "mapped", [12308, 19977, 12309]], [[127554, 127554], "mapped", [12308, 20108, 12309]], [[127555, 127555], "mapped", [12308, 23433, 12309]], [[127556, 127556], "mapped", [12308, 28857, 12309]], [[127557, 127557], "mapped", [12308, 25171, 12309]], [[127558, 127558], "mapped", [12308, 30423, 12309]], [[127559, 127559], "mapped", [12308, 21213, 12309]], [[127560, 127560], "mapped", [12308, 25943, 12309]], [[127561, 127567], "disallowed"], [[127568, 127568], "mapped", [24471]], [[127569, 127569], "mapped", [21487]], [[127570, 127743], "disallowed"], [[127744, 127776], "valid", [], "NV8"], [[127777, 127788], "valid", [], "NV8"], [[127789, 127791], "valid", [], "NV8"], [[127792, 127797], "valid", [], "NV8"], [[127798, 127798], "valid", [], "NV8"], [[127799, 127868], "valid", [], "NV8"], [[127869, 127869], "valid", [], "NV8"], [[127870, 127871], "valid", [], "NV8"], [[127872, 127891], "valid", [], "NV8"], [[127892, 127903], "valid", [], "NV8"], [[127904, 127940], "valid", [], "NV8"], [[127941, 127941], "valid", [], "NV8"], [[127942, 127946], "valid", [], "NV8"], [[127947, 127950], "valid", [], "NV8"], [[127951, 127955], "valid", [], "NV8"], [[127956, 127967], "valid", [], "NV8"], [[127968, 127984], "valid", [], "NV8"], [[127985, 127991], "valid", [], "NV8"], [[127992, 127999], "valid", [], "NV8"], [[128e3, 128062], "valid", [], "NV8"], [[128063, 128063], "valid", [], "NV8"], [[128064, 128064], "valid", [], "NV8"], [[128065, 128065], "valid", [], "NV8"], [[128066, 128247], "valid", [], "NV8"], [[128248, 128248], "valid", [], "NV8"], [[128249, 128252], "valid", [], "NV8"], [[128253, 128254], "valid", [], "NV8"], [[128255, 128255], "valid", [], "NV8"], [[128256, 128317], "valid", [], "NV8"], [[128318, 128319], "valid", [], "NV8"], [[128320, 128323], "valid", [], "NV8"], [[128324, 128330], "valid", [], "NV8"], [[128331, 128335], "valid", [], "NV8"], [[128336, 128359], "valid", [], "NV8"], [[128360, 128377], "valid", [], "NV8"], [[128378, 128378], "disallowed"], [[128379, 128419], "valid", [], "NV8"], [[128420, 128420], "disallowed"], [[128421, 128506], "valid", [], "NV8"], [[128507, 128511], "valid", [], "NV8"], [[128512, 128512], "valid", [], "NV8"], [[128513, 128528], "valid", [], "NV8"], [[128529, 128529], "valid", [], "NV8"], [[128530, 128532], "valid", [], "NV8"], [[128533, 128533], "valid", [], "NV8"], [[128534, 128534], "valid", [], "NV8"], [[128535, 128535], "valid", [], "NV8"], [[128536, 128536], "valid", [], "NV8"], [[128537, 128537], "valid", [], "NV8"], [[128538, 128538], "valid", [], "NV8"], [[128539, 128539], "valid", [], "NV8"], [[128540, 128542], "valid", [], "NV8"], [[128543, 128543], "valid", [], "NV8"], [[128544, 128549], "valid", [], "NV8"], [[128550, 128551], "valid", [], "NV8"], [[128552, 128555], "valid", [], "NV8"], [[128556, 128556], "valid", [], "NV8"], [[128557, 128557], "valid", [], "NV8"], [[128558, 128559], "valid", [], "NV8"], [[128560, 128563], "valid", [], "NV8"], [[128564, 128564], "valid", [], "NV8"], [[128565, 128576], "valid", [], "NV8"], [[128577, 128578], "valid", [], "NV8"], [[128579, 128580], "valid", [], "NV8"], [[128581, 128591], "valid", [], "NV8"], [[128592, 128639], "valid", [], "NV8"], [[128640, 128709], "valid", [], "NV8"], [[128710, 128719], "valid", [], "NV8"], [[128720, 128720], "valid", [], "NV8"], [[128721, 128735], "disallowed"], [[128736, 128748], "valid", [], "NV8"], [[128749, 128751], "disallowed"], [[128752, 128755], "valid", [], "NV8"], [[128756, 128767], "disallowed"], [[128768, 128883], "valid", [], "NV8"], [[128884, 128895], "disallowed"], [[128896, 128980], "valid", [], "NV8"], [[128981, 129023], "disallowed"], [[129024, 129035], "valid", [], "NV8"], [[129036, 129039], "disallowed"], [[129040, 129095], "valid", [], "NV8"], [[129096, 129103], "disallowed"], [[129104, 129113], "valid", [], "NV8"], [[129114, 129119], "disallowed"], [[129120, 129159], "valid", [], "NV8"], [[129160, 129167], "disallowed"], [[129168, 129197], "valid", [], "NV8"], [[129198, 129295], "disallowed"], [[129296, 129304], "valid", [], "NV8"], [[129305, 129407], "disallowed"], [[129408, 129412], "valid", [], "NV8"], [[129413, 129471], "disallowed"], [[129472, 129472], "valid", [], "NV8"], [[129473, 131069], "disallowed"], [[131070, 131071], "disallowed"], [[131072, 173782], "valid"], [[173783, 173823], "disallowed"], [[173824, 177972], "valid"], [[177973, 177983], "disallowed"], [[177984, 178205], "valid"], [[178206, 178207], "disallowed"], [[178208, 183969], "valid"], [[183970, 194559], "disallowed"], [[194560, 194560], "mapped", [20029]], [[194561, 194561], "mapped", [20024]], [[194562, 194562], "mapped", [20033]], [[194563, 194563], "mapped", [131362]], [[194564, 194564], "mapped", [20320]], [[194565, 194565], "mapped", [20398]], [[194566, 194566], "mapped", [20411]], [[194567, 194567], "mapped", [20482]], [[194568, 194568], "mapped", [20602]], [[194569, 194569], "mapped", [20633]], [[194570, 194570], "mapped", [20711]], [[194571, 194571], "mapped", [20687]], [[194572, 194572], "mapped", [13470]], [[194573, 194573], "mapped", [132666]], [[194574, 194574], "mapped", [20813]], [[194575, 194575], "mapped", [20820]], [[194576, 194576], "mapped", [20836]], [[194577, 194577], "mapped", [20855]], [[194578, 194578], "mapped", [132380]], [[194579, 194579], "mapped", [13497]], [[194580, 194580], "mapped", [20839]], [[194581, 194581], "mapped", [20877]], [[194582, 194582], "mapped", [132427]], [[194583, 194583], "mapped", [20887]], [[194584, 194584], "mapped", [20900]], [[194585, 194585], "mapped", [20172]], [[194586, 194586], "mapped", [20908]], [[194587, 194587], "mapped", [20917]], [[194588, 194588], "mapped", [168415]], [[194589, 194589], "mapped", [20981]], [[194590, 194590], "mapped", [20995]], [[194591, 194591], "mapped", [13535]], [[194592, 194592], "mapped", [21051]], [[194593, 194593], "mapped", [21062]], [[194594, 194594], "mapped", [21106]], [[194595, 194595], "mapped", [21111]], [[194596, 194596], "mapped", [13589]], [[194597, 194597], "mapped", [21191]], [[194598, 194598], "mapped", [21193]], [[194599, 194599], "mapped", [21220]], [[194600, 194600], "mapped", [21242]], [[194601, 194601], "mapped", [21253]], [[194602, 194602], "mapped", [21254]], [[194603, 194603], "mapped", [21271]], [[194604, 194604], "mapped", [21321]], [[194605, 194605], "mapped", [21329]], [[194606, 194606], "mapped", [21338]], [[194607, 194607], "mapped", [21363]], [[194608, 194608], "mapped", [21373]], [[194609, 194611], "mapped", [21375]], [[194612, 194612], "mapped", [133676]], [[194613, 194613], "mapped", [28784]], [[194614, 194614], "mapped", [21450]], [[194615, 194615], "mapped", [21471]], [[194616, 194616], "mapped", [133987]], [[194617, 194617], "mapped", [21483]], [[194618, 194618], "mapped", [21489]], [[194619, 194619], "mapped", [21510]], [[194620, 194620], "mapped", [21662]], [[194621, 194621], "mapped", [21560]], [[194622, 194622], "mapped", [21576]], [[194623, 194623], "mapped", [21608]], [[194624, 194624], "mapped", [21666]], [[194625, 194625], "mapped", [21750]], [[194626, 194626], "mapped", [21776]], [[194627, 194627], "mapped", [21843]], [[194628, 194628], "mapped", [21859]], [[194629, 194630], "mapped", [21892]], [[194631, 194631], "mapped", [21913]], [[194632, 194632], "mapped", [21931]], [[194633, 194633], "mapped", [21939]], [[194634, 194634], "mapped", [21954]], [[194635, 194635], "mapped", [22294]], [[194636, 194636], "mapped", [22022]], [[194637, 194637], "mapped", [22295]], [[194638, 194638], "mapped", [22097]], [[194639, 194639], "mapped", [22132]], [[194640, 194640], "mapped", [20999]], [[194641, 194641], "mapped", [22766]], [[194642, 194642], "mapped", [22478]], [[194643, 194643], "mapped", [22516]], [[194644, 194644], "mapped", [22541]], [[194645, 194645], "mapped", [22411]], [[194646, 194646], "mapped", [22578]], [[194647, 194647], "mapped", [22577]], [[194648, 194648], "mapped", [22700]], [[194649, 194649], "mapped", [136420]], [[194650, 194650], "mapped", [22770]], [[194651, 194651], "mapped", [22775]], [[194652, 194652], "mapped", [22790]], [[194653, 194653], "mapped", [22810]], [[194654, 194654], "mapped", [22818]], [[194655, 194655], "mapped", [22882]], [[194656, 194656], "mapped", [136872]], [[194657, 194657], "mapped", [136938]], [[194658, 194658], "mapped", [23020]], [[194659, 194659], "mapped", [23067]], [[194660, 194660], "mapped", [23079]], [[194661, 194661], "mapped", [23e3]], [[194662, 194662], "mapped", [23142]], [[194663, 194663], "mapped", [14062]], [[194664, 194664], "disallowed"], [[194665, 194665], "mapped", [23304]], [[194666, 194667], "mapped", [23358]], [[194668, 194668], "mapped", [137672]], [[194669, 194669], "mapped", [23491]], [[194670, 194670], "mapped", [23512]], [[194671, 194671], "mapped", [23527]], [[194672, 194672], "mapped", [23539]], [[194673, 194673], "mapped", [138008]], [[194674, 194674], "mapped", [23551]], [[194675, 194675], "mapped", [23558]], [[194676, 194676], "disallowed"], [[194677, 194677], "mapped", [23586]], [[194678, 194678], "mapped", [14209]], [[194679, 194679], "mapped", [23648]], [[194680, 194680], "mapped", [23662]], [[194681, 194681], "mapped", [23744]], [[194682, 194682], "mapped", [23693]], [[194683, 194683], "mapped", [138724]], [[194684, 194684], "mapped", [23875]], [[194685, 194685], "mapped", [138726]], [[194686, 194686], "mapped", [23918]], [[194687, 194687], "mapped", [23915]], [[194688, 194688], "mapped", [23932]], [[194689, 194689], "mapped", [24033]], [[194690, 194690], "mapped", [24034]], [[194691, 194691], "mapped", [14383]], [[194692, 194692], "mapped", [24061]], [[194693, 194693], "mapped", [24104]], [[194694, 194694], "mapped", [24125]], [[194695, 194695], "mapped", [24169]], [[194696, 194696], "mapped", [14434]], [[194697, 194697], "mapped", [139651]], [[194698, 194698], "mapped", [14460]], [[194699, 194699], "mapped", [24240]], [[194700, 194700], "mapped", [24243]], [[194701, 194701], "mapped", [24246]], [[194702, 194702], "mapped", [24266]], [[194703, 194703], "mapped", [172946]], [[194704, 194704], "mapped", [24318]], [[194705, 194706], "mapped", [140081]], [[194707, 194707], "mapped", [33281]], [[194708, 194709], "mapped", [24354]], [[194710, 194710], "mapped", [14535]], [[194711, 194711], "mapped", [144056]], [[194712, 194712], "mapped", [156122]], [[194713, 194713], "mapped", [24418]], [[194714, 194714], "mapped", [24427]], [[194715, 194715], "mapped", [14563]], [[194716, 194716], "mapped", [24474]], [[194717, 194717], "mapped", [24525]], [[194718, 194718], "mapped", [24535]], [[194719, 194719], "mapped", [24569]], [[194720, 194720], "mapped", [24705]], [[194721, 194721], "mapped", [14650]], [[194722, 194722], "mapped", [14620]], [[194723, 194723], "mapped", [24724]], [[194724, 194724], "mapped", [141012]], [[194725, 194725], "mapped", [24775]], [[194726, 194726], "mapped", [24904]], [[194727, 194727], "mapped", [24908]], [[194728, 194728], "mapped", [24910]], [[194729, 194729], "mapped", [24908]], [[194730, 194730], "mapped", [24954]], [[194731, 194731], "mapped", [24974]], [[194732, 194732], "mapped", [25010]], [[194733, 194733], "mapped", [24996]], [[194734, 194734], "mapped", [25007]], [[194735, 194735], "mapped", [25054]], [[194736, 194736], "mapped", [25074]], [[194737, 194737], "mapped", [25078]], [[194738, 194738], "mapped", [25104]], [[194739, 194739], "mapped", [25115]], [[194740, 194740], "mapped", [25181]], [[194741, 194741], "mapped", [25265]], [[194742, 194742], "mapped", [25300]], [[194743, 194743], "mapped", [25424]], [[194744, 194744], "mapped", [142092]], [[194745, 194745], "mapped", [25405]], [[194746, 194746], "mapped", [25340]], [[194747, 194747], "mapped", [25448]], [[194748, 194748], "mapped", [25475]], [[194749, 194749], "mapped", [25572]], [[194750, 194750], "mapped", [142321]], [[194751, 194751], "mapped", [25634]], [[194752, 194752], "mapped", [25541]], [[194753, 194753], "mapped", [25513]], [[194754, 194754], "mapped", [14894]], [[194755, 194755], "mapped", [25705]], [[194756, 194756], "mapped", [25726]], [[194757, 194757], "mapped", [25757]], [[194758, 194758], "mapped", [25719]], [[194759, 194759], "mapped", [14956]], [[194760, 194760], "mapped", [25935]], [[194761, 194761], "mapped", [25964]], [[194762, 194762], "mapped", [143370]], [[194763, 194763], "mapped", [26083]], [[194764, 194764], "mapped", [26360]], [[194765, 194765], "mapped", [26185]], [[194766, 194766], "mapped", [15129]], [[194767, 194767], "mapped", [26257]], [[194768, 194768], "mapped", [15112]], [[194769, 194769], "mapped", [15076]], [[194770, 194770], "mapped", [20882]], [[194771, 194771], "mapped", [20885]], [[194772, 194772], "mapped", [26368]], [[194773, 194773], "mapped", [26268]], [[194774, 194774], "mapped", [32941]], [[194775, 194775], "mapped", [17369]], [[194776, 194776], "mapped", [26391]], [[194777, 194777], "mapped", [26395]], [[194778, 194778], "mapped", [26401]], [[194779, 194779], "mapped", [26462]], [[194780, 194780], "mapped", [26451]], [[194781, 194781], "mapped", [144323]], [[194782, 194782], "mapped", [15177]], [[194783, 194783], "mapped", [26618]], [[194784, 194784], "mapped", [26501]], [[194785, 194785], "mapped", [26706]], [[194786, 194786], "mapped", [26757]], [[194787, 194787], "mapped", [144493]], [[194788, 194788], "mapped", [26766]], [[194789, 194789], "mapped", [26655]], [[194790, 194790], "mapped", [26900]], [[194791, 194791], "mapped", [15261]], [[194792, 194792], "mapped", [26946]], [[194793, 194793], "mapped", [27043]], [[194794, 194794], "mapped", [27114]], [[194795, 194795], "mapped", [27304]], [[194796, 194796], "mapped", [145059]], [[194797, 194797], "mapped", [27355]], [[194798, 194798], "mapped", [15384]], [[194799, 194799], "mapped", [27425]], [[194800, 194800], "mapped", [145575]], [[194801, 194801], "mapped", [27476]], [[194802, 194802], "mapped", [15438]], [[194803, 194803], "mapped", [27506]], [[194804, 194804], "mapped", [27551]], [[194805, 194805], "mapped", [27578]], [[194806, 194806], "mapped", [27579]], [[194807, 194807], "mapped", [146061]], [[194808, 194808], "mapped", [138507]], [[194809, 194809], "mapped", [146170]], [[194810, 194810], "mapped", [27726]], [[194811, 194811], "mapped", [146620]], [[194812, 194812], "mapped", [27839]], [[194813, 194813], "mapped", [27853]], [[194814, 194814], "mapped", [27751]], [[194815, 194815], "mapped", [27926]], [[194816, 194816], "mapped", [27966]], [[194817, 194817], "mapped", [28023]], [[194818, 194818], "mapped", [27969]], [[194819, 194819], "mapped", [28009]], [[194820, 194820], "mapped", [28024]], [[194821, 194821], "mapped", [28037]], [[194822, 194822], "mapped", [146718]], [[194823, 194823], "mapped", [27956]], [[194824, 194824], "mapped", [28207]], [[194825, 194825], "mapped", [28270]], [[194826, 194826], "mapped", [15667]], [[194827, 194827], "mapped", [28363]], [[194828, 194828], "mapped", [28359]], [[194829, 194829], "mapped", [147153]], [[194830, 194830], "mapped", [28153]], [[194831, 194831], "mapped", [28526]], [[194832, 194832], "mapped", [147294]], [[194833, 194833], "mapped", [147342]], [[194834, 194834], "mapped", [28614]], [[194835, 194835], "mapped", [28729]], [[194836, 194836], "mapped", [28702]], [[194837, 194837], "mapped", [28699]], [[194838, 194838], "mapped", [15766]], [[194839, 194839], "mapped", [28746]], [[194840, 194840], "mapped", [28797]], [[194841, 194841], "mapped", [28791]], [[194842, 194842], "mapped", [28845]], [[194843, 194843], "mapped", [132389]], [[194844, 194844], "mapped", [28997]], [[194845, 194845], "mapped", [148067]], [[194846, 194846], "mapped", [29084]], [[194847, 194847], "disallowed"], [[194848, 194848], "mapped", [29224]], [[194849, 194849], "mapped", [29237]], [[194850, 194850], "mapped", [29264]], [[194851, 194851], "mapped", [149e3]], [[194852, 194852], "mapped", [29312]], [[194853, 194853], "mapped", [29333]], [[194854, 194854], "mapped", [149301]], [[194855, 194855], "mapped", [149524]], [[194856, 194856], "mapped", [29562]], [[194857, 194857], "mapped", [29579]], [[194858, 194858], "mapped", [16044]], [[194859, 194859], "mapped", [29605]], [[194860, 194861], "mapped", [16056]], [[194862, 194862], "mapped", [29767]], [[194863, 194863], "mapped", [29788]], [[194864, 194864], "mapped", [29809]], [[194865, 194865], "mapped", [29829]], [[194866, 194866], "mapped", [29898]], [[194867, 194867], "mapped", [16155]], [[194868, 194868], "mapped", [29988]], [[194869, 194869], "mapped", [150582]], [[194870, 194870], "mapped", [30014]], [[194871, 194871], "mapped", [150674]], [[194872, 194872], "mapped", [30064]], [[194873, 194873], "mapped", [139679]], [[194874, 194874], "mapped", [30224]], [[194875, 194875], "mapped", [151457]], [[194876, 194876], "mapped", [151480]], [[194877, 194877], "mapped", [151620]], [[194878, 194878], "mapped", [16380]], [[194879, 194879], "mapped", [16392]], [[194880, 194880], "mapped", [30452]], [[194881, 194881], "mapped", [151795]], [[194882, 194882], "mapped", [151794]], [[194883, 194883], "mapped", [151833]], [[194884, 194884], "mapped", [151859]], [[194885, 194885], "mapped", [30494]], [[194886, 194887], "mapped", [30495]], [[194888, 194888], "mapped", [30538]], [[194889, 194889], "mapped", [16441]], [[194890, 194890], "mapped", [30603]], [[194891, 194891], "mapped", [16454]], [[194892, 194892], "mapped", [16534]], [[194893, 194893], "mapped", [152605]], [[194894, 194894], "mapped", [30798]], [[194895, 194895], "mapped", [30860]], [[194896, 194896], "mapped", [30924]], [[194897, 194897], "mapped", [16611]], [[194898, 194898], "mapped", [153126]], [[194899, 194899], "mapped", [31062]], [[194900, 194900], "mapped", [153242]], [[194901, 194901], "mapped", [153285]], [[194902, 194902], "mapped", [31119]], [[194903, 194903], "mapped", [31211]], [[194904, 194904], "mapped", [16687]], [[194905, 194905], "mapped", [31296]], [[194906, 194906], "mapped", [31306]], [[194907, 194907], "mapped", [31311]], [[194908, 194908], "mapped", [153980]], [[194909, 194910], "mapped", [154279]], [[194911, 194911], "disallowed"], [[194912, 194912], "mapped", [16898]], [[194913, 194913], "mapped", [154539]], [[194914, 194914], "mapped", [31686]], [[194915, 194915], "mapped", [31689]], [[194916, 194916], "mapped", [16935]], [[194917, 194917], "mapped", [154752]], [[194918, 194918], "mapped", [31954]], [[194919, 194919], "mapped", [17056]], [[194920, 194920], "mapped", [31976]], [[194921, 194921], "mapped", [31971]], [[194922, 194922], "mapped", [32e3]], [[194923, 194923], "mapped", [155526]], [[194924, 194924], "mapped", [32099]], [[194925, 194925], "mapped", [17153]], [[194926, 194926], "mapped", [32199]], [[194927, 194927], "mapped", [32258]], [[194928, 194928], "mapped", [32325]], [[194929, 194929], "mapped", [17204]], [[194930, 194930], "mapped", [156200]], [[194931, 194931], "mapped", [156231]], [[194932, 194932], "mapped", [17241]], [[194933, 194933], "mapped", [156377]], [[194934, 194934], "mapped", [32634]], [[194935, 194935], "mapped", [156478]], [[194936, 194936], "mapped", [32661]], [[194937, 194937], "mapped", [32762]], [[194938, 194938], "mapped", [32773]], [[194939, 194939], "mapped", [156890]], [[194940, 194940], "mapped", [156963]], [[194941, 194941], "mapped", [32864]], [[194942, 194942], "mapped", [157096]], [[194943, 194943], "mapped", [32880]], [[194944, 194944], "mapped", [144223]], [[194945, 194945], "mapped", [17365]], [[194946, 194946], "mapped", [32946]], [[194947, 194947], "mapped", [33027]], [[194948, 194948], "mapped", [17419]], [[194949, 194949], "mapped", [33086]], [[194950, 194950], "mapped", [23221]], [[194951, 194951], "mapped", [157607]], [[194952, 194952], "mapped", [157621]], [[194953, 194953], "mapped", [144275]], [[194954, 194954], "mapped", [144284]], [[194955, 194955], "mapped", [33281]], [[194956, 194956], "mapped", [33284]], [[194957, 194957], "mapped", [36766]], [[194958, 194958], "mapped", [17515]], [[194959, 194959], "mapped", [33425]], [[194960, 194960], "mapped", [33419]], [[194961, 194961], "mapped", [33437]], [[194962, 194962], "mapped", [21171]], [[194963, 194963], "mapped", [33457]], [[194964, 194964], "mapped", [33459]], [[194965, 194965], "mapped", [33469]], [[194966, 194966], "mapped", [33510]], [[194967, 194967], "mapped", [158524]], [[194968, 194968], "mapped", [33509]], [[194969, 194969], "mapped", [33565]], [[194970, 194970], "mapped", [33635]], [[194971, 194971], "mapped", [33709]], [[194972, 194972], "mapped", [33571]], [[194973, 194973], "mapped", [33725]], [[194974, 194974], "mapped", [33767]], [[194975, 194975], "mapped", [33879]], [[194976, 194976], "mapped", [33619]], [[194977, 194977], "mapped", [33738]], [[194978, 194978], "mapped", [33740]], [[194979, 194979], "mapped", [33756]], [[194980, 194980], "mapped", [158774]], [[194981, 194981], "mapped", [159083]], [[194982, 194982], "mapped", [158933]], [[194983, 194983], "mapped", [17707]], [[194984, 194984], "mapped", [34033]], [[194985, 194985], "mapped", [34035]], [[194986, 194986], "mapped", [34070]], [[194987, 194987], "mapped", [160714]], [[194988, 194988], "mapped", [34148]], [[194989, 194989], "mapped", [159532]], [[194990, 194990], "mapped", [17757]], [[194991, 194991], "mapped", [17761]], [[194992, 194992], "mapped", [159665]], [[194993, 194993], "mapped", [159954]], [[194994, 194994], "mapped", [17771]], [[194995, 194995], "mapped", [34384]], [[194996, 194996], "mapped", [34396]], [[194997, 194997], "mapped", [34407]], [[194998, 194998], "mapped", [34409]], [[194999, 194999], "mapped", [34473]], [[195e3, 195e3], "mapped", [34440]], [[195001, 195001], "mapped", [34574]], [[195002, 195002], "mapped", [34530]], [[195003, 195003], "mapped", [34681]], [[195004, 195004], "mapped", [34600]], [[195005, 195005], "mapped", [34667]], [[195006, 195006], "mapped", [34694]], [[195007, 195007], "disallowed"], [[195008, 195008], "mapped", [34785]], [[195009, 195009], "mapped", [34817]], [[195010, 195010], "mapped", [17913]], [[195011, 195011], "mapped", [34912]], [[195012, 195012], "mapped", [34915]], [[195013, 195013], "mapped", [161383]], [[195014, 195014], "mapped", [35031]], [[195015, 195015], "mapped", [35038]], [[195016, 195016], "mapped", [17973]], [[195017, 195017], "mapped", [35066]], [[195018, 195018], "mapped", [13499]], [[195019, 195019], "mapped", [161966]], [[195020, 195020], "mapped", [162150]], [[195021, 195021], "mapped", [18110]], [[195022, 195022], "mapped", [18119]], [[195023, 195023], "mapped", [35488]], [[195024, 195024], "mapped", [35565]], [[195025, 195025], "mapped", [35722]], [[195026, 195026], "mapped", [35925]], [[195027, 195027], "mapped", [162984]], [[195028, 195028], "mapped", [36011]], [[195029, 195029], "mapped", [36033]], [[195030, 195030], "mapped", [36123]], [[195031, 195031], "mapped", [36215]], [[195032, 195032], "mapped", [163631]], [[195033, 195033], "mapped", [133124]], [[195034, 195034], "mapped", [36299]], [[195035, 195035], "mapped", [36284]], [[195036, 195036], "mapped", [36336]], [[195037, 195037], "mapped", [133342]], [[195038, 195038], "mapped", [36564]], [[195039, 195039], "mapped", [36664]], [[195040, 195040], "mapped", [165330]], [[195041, 195041], "mapped", [165357]], [[195042, 195042], "mapped", [37012]], [[195043, 195043], "mapped", [37105]], [[195044, 195044], "mapped", [37137]], [[195045, 195045], "mapped", [165678]], [[195046, 195046], "mapped", [37147]], [[195047, 195047], "mapped", [37432]], [[195048, 195048], "mapped", [37591]], [[195049, 195049], "mapped", [37592]], [[195050, 195050], "mapped", [37500]], [[195051, 195051], "mapped", [37881]], [[195052, 195052], "mapped", [37909]], [[195053, 195053], "mapped", [166906]], [[195054, 195054], "mapped", [38283]], [[195055, 195055], "mapped", [18837]], [[195056, 195056], "mapped", [38327]], [[195057, 195057], "mapped", [167287]], [[195058, 195058], "mapped", [18918]], [[195059, 195059], "mapped", [38595]], [[195060, 195060], "mapped", [23986]], [[195061, 195061], "mapped", [38691]], [[195062, 195062], "mapped", [168261]], [[195063, 195063], "mapped", [168474]], [[195064, 195064], "mapped", [19054]], [[195065, 195065], "mapped", [19062]], [[195066, 195066], "mapped", [38880]], [[195067, 195067], "mapped", [168970]], [[195068, 195068], "mapped", [19122]], [[195069, 195069], "mapped", [169110]], [[195070, 195071], "mapped", [38923]], [[195072, 195072], "mapped", [38953]], [[195073, 195073], "mapped", [169398]], [[195074, 195074], "mapped", [39138]], [[195075, 195075], "mapped", [19251]], [[195076, 195076], "mapped", [39209]], [[195077, 195077], "mapped", [39335]], [[195078, 195078], "mapped", [39362]], [[195079, 195079], "mapped", [39422]], [[195080, 195080], "mapped", [19406]], [[195081, 195081], "mapped", [170800]], [[195082, 195082], "mapped", [39698]], [[195083, 195083], "mapped", [4e4]], [[195084, 195084], "mapped", [40189]], [[195085, 195085], "mapped", [19662]], [[195086, 195086], "mapped", [19693]], [[195087, 195087], "mapped", [40295]], [[195088, 195088], "mapped", [172238]], [[195089, 195089], "mapped", [19704]], [[195090, 195090], "mapped", [172293]], [[195091, 195091], "mapped", [172558]], [[195092, 195092], "mapped", [172689]], [[195093, 195093], "mapped", [40635]], [[195094, 195094], "mapped", [19798]], [[195095, 195095], "mapped", [40697]], [[195096, 195096], "mapped", [40702]], [[195097, 195097], "mapped", [40709]], [[195098, 195098], "mapped", [40719]], [[195099, 195099], "mapped", [40726]], [[195100, 195100], "mapped", [40763]], [[195101, 195101], "mapped", [173568]], [[195102, 196605], "disallowed"], [[196606, 196607], "disallowed"], [[196608, 262141], "disallowed"], [[262142, 262143], "disallowed"], [[262144, 327677], "disallowed"], [[327678, 327679], "disallowed"], [[327680, 393213], "disallowed"], [[393214, 393215], "disallowed"], [[393216, 458749], "disallowed"], [[458750, 458751], "disallowed"], [[458752, 524285], "disallowed"], [[524286, 524287], "disallowed"], [[524288, 589821], "disallowed"], [[589822, 589823], "disallowed"], [[589824, 655357], "disallowed"], [[655358, 655359], "disallowed"], [[655360, 720893], "disallowed"], [[720894, 720895], "disallowed"], [[720896, 786429], "disallowed"], [[786430, 786431], "disallowed"], [[786432, 851965], "disallowed"], [[851966, 851967], "disallowed"], [[851968, 917501], "disallowed"], [[917502, 917503], "disallowed"], [[917504, 917504], "disallowed"], [[917505, 917505], "disallowed"], [[917506, 917535], "disallowed"], [[917536, 917631], "disallowed"], [[917632, 917759], "disallowed"], [[917760, 917999], "ignored"], [[918e3, 983037], "disallowed"], [[983038, 983039], "disallowed"], [[983040, 1048573], "disallowed"], [[1048574, 1048575], "disallowed"], [[1048576, 1114109], "disallowed"], [[1114110, 1114111], "disallowed"]];
  }
});

// node_modules/tr46/index.js
var require_tr46 = __commonJS({
  "node_modules/tr46/index.js"(exports, module2) {
    "use strict";
    var punycode = require("punycode");
    var mappingTable = require_mappingTable();
    var PROCESSING_OPTIONS = {
      TRANSITIONAL: 0,
      NONTRANSITIONAL: 1
    };
    function normalize(str) {
      return str.split("\0").map(function(s) {
        return s.normalize("NFC");
      }).join("\0");
    }
    function findStatus(val) {
      var start = 0;
      var end = mappingTable.length - 1;
      while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        var target = mappingTable[mid];
        if (target[0][0] <= val && target[0][1] >= val) {
          return target;
        } else if (target[0][0] > val) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
      return null;
    }
    var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    function countSymbols(string) {
      return string.replace(regexAstralSymbols, "_").length;
    }
    function mapChars(domain_name, useSTD3, processing_option) {
      var hasError = false;
      var processed = "";
      var len = countSymbols(domain_name);
      for (var i = 0; i < len; ++i) {
        var codePoint = domain_name.codePointAt(i);
        var status = findStatus(codePoint);
        switch (status[1]) {
          case "disallowed":
            hasError = true;
            processed += String.fromCodePoint(codePoint);
            break;
          case "ignored":
            break;
          case "mapped":
            processed += String.fromCodePoint.apply(String, status[2]);
            break;
          case "deviation":
            if (processing_option === PROCESSING_OPTIONS.TRANSITIONAL) {
              processed += String.fromCodePoint.apply(String, status[2]);
            } else {
              processed += String.fromCodePoint(codePoint);
            }
            break;
          case "valid":
            processed += String.fromCodePoint(codePoint);
            break;
          case "disallowed_STD3_mapped":
            if (useSTD3) {
              hasError = true;
              processed += String.fromCodePoint(codePoint);
            } else {
              processed += String.fromCodePoint.apply(String, status[2]);
            }
            break;
          case "disallowed_STD3_valid":
            if (useSTD3) {
              hasError = true;
            }
            processed += String.fromCodePoint(codePoint);
            break;
        }
      }
      return {
        string: processed,
        error: hasError
      };
    }
    var combiningMarksRegex = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;
    function validateLabel(label, processing_option) {
      if (label.substr(0, 4) === "xn--") {
        label = punycode.toUnicode(label);
        processing_option = PROCESSING_OPTIONS.NONTRANSITIONAL;
      }
      var error = false;
      if (normalize(label) !== label || label[3] === "-" && label[4] === "-" || label[0] === "-" || label[label.length - 1] === "-" || label.indexOf(".") !== -1 || label.search(combiningMarksRegex) === 0) {
        error = true;
      }
      var len = countSymbols(label);
      for (var i = 0; i < len; ++i) {
        var status = findStatus(label.codePointAt(i));
        if (processing === PROCESSING_OPTIONS.TRANSITIONAL && status[1] !== "valid" || processing === PROCESSING_OPTIONS.NONTRANSITIONAL && status[1] !== "valid" && status[1] !== "deviation") {
          error = true;
          break;
        }
      }
      return {
        label,
        error
      };
    }
    function processing(domain_name, useSTD3, processing_option) {
      var result = mapChars(domain_name, useSTD3, processing_option);
      result.string = normalize(result.string);
      var labels = result.string.split(".");
      for (var i = 0; i < labels.length; ++i) {
        try {
          var validation = validateLabel(labels[i]);
          labels[i] = validation.label;
          result.error = result.error || validation.error;
        } catch (e) {
          result.error = true;
        }
      }
      return {
        string: labels.join("."),
        error: result.error
      };
    }
    module2.exports.toASCII = function(domain_name, useSTD3, processing_option, verifyDnsLength) {
      var result = processing(domain_name, useSTD3, processing_option);
      var labels = result.string.split(".");
      labels = labels.map(function(l) {
        try {
          return punycode.toASCII(l);
        } catch (e) {
          result.error = true;
          return l;
        }
      });
      if (verifyDnsLength) {
        var total = labels.slice(0, labels.length - 1).join(".").length;
        if (total.length > 253 || total.length === 0) {
          result.error = true;
        }
        for (var i = 0; i < labels.length; ++i) {
          if (labels.length > 63 || labels.length === 0) {
            result.error = true;
            break;
          }
        }
      }
      if (result.error)
        return null;
      return labels.join(".");
    };
    module2.exports.toUnicode = function(domain_name, useSTD3) {
      var result = processing(domain_name, useSTD3, PROCESSING_OPTIONS.NONTRANSITIONAL);
      return {
        domain: result.string,
        error: result.error
      };
    };
    module2.exports.PROCESSING_OPTIONS = PROCESSING_OPTIONS;
  }
});

// node_modules/whatwg-url/lib/url-state-machine.js
var require_url_state_machine = __commonJS({
  "node_modules/whatwg-url/lib/url-state-machine.js"(exports, module2) {
    "use strict";
    var punycode = require("punycode");
    var tr46 = require_tr46();
    var specialSchemes = {
      ftp: 21,
      file: null,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    };
    var failure = Symbol("failure");
    function countSymbols(str) {
      return punycode.ucs2.decode(str).length;
    }
    function at(input, idx) {
      const c = input[idx];
      return isNaN(c) ? void 0 : String.fromCodePoint(c);
    }
    function isASCIIDigit(c) {
      return c >= 48 && c <= 57;
    }
    function isASCIIAlpha(c) {
      return c >= 65 && c <= 90 || c >= 97 && c <= 122;
    }
    function isASCIIAlphanumeric(c) {
      return isASCIIAlpha(c) || isASCIIDigit(c);
    }
    function isASCIIHex(c) {
      return isASCIIDigit(c) || c >= 65 && c <= 70 || c >= 97 && c <= 102;
    }
    function isSingleDot(buffer) {
      return buffer === "." || buffer.toLowerCase() === "%2e";
    }
    function isDoubleDot(buffer) {
      buffer = buffer.toLowerCase();
      return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
    }
    function isWindowsDriveLetterCodePoints(cp1, cp2) {
      return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
    }
    function isWindowsDriveLetterString(string) {
      return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
    }
    function isNormalizedWindowsDriveLetterString(string) {
      return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
    }
    function containsForbiddenHostCodePoint(string) {
      return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
    }
    function containsForbiddenHostCodePointExcludingPercent(string) {
      return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
    }
    function isSpecialScheme(scheme) {
      return specialSchemes[scheme] !== void 0;
    }
    function isSpecial(url) {
      return isSpecialScheme(url.scheme);
    }
    function defaultPort(scheme) {
      return specialSchemes[scheme];
    }
    function percentEncode(c) {
      let hex = c.toString(16).toUpperCase();
      if (hex.length === 1) {
        hex = "0" + hex;
      }
      return "%" + hex;
    }
    function utf8PercentEncode(c) {
      const buf = new Buffer(c);
      let str = "";
      for (let i = 0; i < buf.length; ++i) {
        str += percentEncode(buf[i]);
      }
      return str;
    }
    function utf8PercentDecode(str) {
      const input = new Buffer(str);
      const output = [];
      for (let i = 0; i < input.length; ++i) {
        if (input[i] !== 37) {
          output.push(input[i]);
        } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
          output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
          i += 2;
        } else {
          output.push(input[i]);
        }
      }
      return new Buffer(output).toString();
    }
    function isC0ControlPercentEncode(c) {
      return c <= 31 || c > 126;
    }
    var extraPathPercentEncodeSet = /* @__PURE__ */ new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);
    function isPathPercentEncode(c) {
      return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
    }
    var extraUserinfoPercentEncodeSet = /* @__PURE__ */ new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
    function isUserinfoPercentEncode(c) {
      return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
    }
    function percentEncodeChar(c, encodeSetPredicate) {
      const cStr = String.fromCodePoint(c);
      if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
      }
      return cStr;
    }
    function parseIPv4Number(input) {
      let R = 10;
      if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
      } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
      }
      if (input === "") {
        return 0;
      }
      const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
      if (regex.test(input)) {
        return failure;
      }
      return parseInt(input, R);
    }
    function parseIPv4(input) {
      const parts = input.split(".");
      if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
          parts.pop();
        }
      }
      if (parts.length > 4) {
        return input;
      }
      const numbers = [];
      for (const part of parts) {
        if (part === "") {
          return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
          return input;
        }
        numbers.push(n);
      }
      for (let i = 0; i < numbers.length - 1; ++i) {
        if (numbers[i] > 255) {
          return failure;
        }
      }
      if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
      }
      let ipv4 = numbers.pop();
      let counter = 0;
      for (const n of numbers) {
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
      }
      return ipv4;
    }
    function serializeIPv4(address) {
      let output = "";
      let n = address;
      for (let i = 1; i <= 4; ++i) {
        output = String(n % 256) + output;
        if (i !== 4) {
          output = "." + output;
        }
        n = Math.floor(n / 256);
      }
      return output;
    }
    function parseIPv6(input) {
      const address = [0, 0, 0, 0, 0, 0, 0, 0];
      let pieceIndex = 0;
      let compress = null;
      let pointer = 0;
      input = punycode.ucs2.decode(input);
      if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
          return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
      }
      while (pointer < input.length) {
        if (pieceIndex === 8) {
          return failure;
        }
        if (input[pointer] === 58) {
          if (compress !== null) {
            return failure;
          }
          ++pointer;
          ++pieceIndex;
          compress = pieceIndex;
          continue;
        }
        let value = 0;
        let length = 0;
        while (length < 4 && isASCIIHex(input[pointer])) {
          value = value * 16 + parseInt(at(input, pointer), 16);
          ++pointer;
          ++length;
        }
        if (input[pointer] === 46) {
          if (length === 0) {
            return failure;
          }
          pointer -= length;
          if (pieceIndex > 6) {
            return failure;
          }
          let numbersSeen = 0;
          while (input[pointer] !== void 0) {
            let ipv4Piece = null;
            if (numbersSeen > 0) {
              if (input[pointer] === 46 && numbersSeen < 4) {
                ++pointer;
              } else {
                return failure;
              }
            }
            if (!isASCIIDigit(input[pointer])) {
              return failure;
            }
            while (isASCIIDigit(input[pointer])) {
              const number = parseInt(at(input, pointer));
              if (ipv4Piece === null) {
                ipv4Piece = number;
              } else if (ipv4Piece === 0) {
                return failure;
              } else {
                ipv4Piece = ipv4Piece * 10 + number;
              }
              if (ipv4Piece > 255) {
                return failure;
              }
              ++pointer;
            }
            address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
            ++numbersSeen;
            if (numbersSeen === 2 || numbersSeen === 4) {
              ++pieceIndex;
            }
          }
          if (numbersSeen !== 4) {
            return failure;
          }
          break;
        } else if (input[pointer] === 58) {
          ++pointer;
          if (input[pointer] === void 0) {
            return failure;
          }
        } else if (input[pointer] !== void 0) {
          return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
      }
      if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while (pieceIndex !== 0 && swaps > 0) {
          const temp = address[compress + swaps - 1];
          address[compress + swaps - 1] = address[pieceIndex];
          address[pieceIndex] = temp;
          --pieceIndex;
          --swaps;
        }
      } else if (compress === null && pieceIndex !== 8) {
        return failure;
      }
      return address;
    }
    function serializeIPv6(address) {
      let output = "";
      const seqResult = findLongestZeroSequence(address);
      const compress = seqResult.idx;
      let ignore0 = false;
      for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
        if (ignore0 && address[pieceIndex] === 0) {
          continue;
        } else if (ignore0) {
          ignore0 = false;
        }
        if (compress === pieceIndex) {
          const separator = pieceIndex === 0 ? "::" : ":";
          output += separator;
          ignore0 = true;
          continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
          output += ":";
        }
      }
      return output;
    }
    function parseHost(input, isSpecialArg) {
      if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
          return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
      }
      if (!isSpecialArg) {
        return parseOpaqueHost(input);
      }
      const domain = utf8PercentDecode(input);
      const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
      if (asciiDomain === null) {
        return failure;
      }
      if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
      }
      const ipv4Host = parseIPv4(asciiDomain);
      if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
      }
      return asciiDomain;
    }
    function parseOpaqueHost(input) {
      if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
      }
      let output = "";
      const decoded = punycode.ucs2.decode(input);
      for (let i = 0; i < decoded.length; ++i) {
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
      }
      return output;
    }
    function findLongestZeroSequence(arr) {
      let maxIdx = null;
      let maxLen = 1;
      let currStart = null;
      let currLen = 0;
      for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 0) {
          if (currLen > maxLen) {
            maxIdx = currStart;
            maxLen = currLen;
          }
          currStart = null;
          currLen = 0;
        } else {
          if (currStart === null) {
            currStart = i;
          }
          ++currLen;
        }
      }
      if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
      }
      return {
        idx: maxIdx,
        len: maxLen
      };
    }
    function serializeHost(host) {
      if (typeof host === "number") {
        return serializeIPv4(host);
      }
      if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
      }
      return host;
    }
    function trimControlChars(url) {
      return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
    }
    function trimTabAndNewline(url) {
      return url.replace(/\u0009|\u000A|\u000D/g, "");
    }
    function shortenPath(url) {
      const path = url.path;
      if (path.length === 0) {
        return;
      }
      if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
      }
      path.pop();
    }
    function includesCredentials(url) {
      return url.username !== "" || url.password !== "";
    }
    function cannotHaveAUsernamePasswordPort(url) {
      return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
    }
    function isNormalizedWindowsDriveLetter(string) {
      return /^[A-Za-z]:$/.test(string);
    }
    function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
      this.pointer = 0;
      this.input = input;
      this.base = base || null;
      this.encodingOverride = encodingOverride || "utf-8";
      this.stateOverride = stateOverride;
      this.url = url;
      this.failure = false;
      this.parseError = false;
      if (!this.url) {
        this.url = {
          scheme: "",
          username: "",
          password: "",
          host: null,
          port: null,
          path: [],
          query: null,
          fragment: null,
          cannotBeABaseURL: false
        };
        const res2 = trimControlChars(this.input);
        if (res2 !== this.input) {
          this.parseError = true;
        }
        this.input = res2;
      }
      const res = trimTabAndNewline(this.input);
      if (res !== this.input) {
        this.parseError = true;
      }
      this.input = res;
      this.state = stateOverride || "scheme start";
      this.buffer = "";
      this.atFlag = false;
      this.arrFlag = false;
      this.passwordTokenSeenFlag = false;
      this.input = punycode.ucs2.decode(this.input);
      for (; this.pointer <= this.input.length; ++this.pointer) {
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? void 0 : String.fromCodePoint(c);
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
          break;
        } else if (ret === failure) {
          this.failure = true;
          break;
        }
      }
    }
    URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
      if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
      } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
      if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
      } else if (c === 58) {
        if (this.stateOverride) {
          if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
            return false;
          }
          if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
            return false;
          }
          if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
            return false;
          }
          if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
            return false;
          }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
          return false;
        }
        if (this.url.scheme === "file") {
          if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
            this.parseError = true;
          }
          this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
          this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
          this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
          this.state = "path or authority";
          ++this.pointer;
        } else {
          this.url.cannotBeABaseURL = true;
          this.url.path.push("");
          this.state = "cannot-be-a-base-URL path";
        }
      } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
      if (this.base === null || this.base.cannotBeABaseURL && c !== 35) {
        return failure;
      } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
      } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
      } else {
        this.state = "relative";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
      if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
      } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
      if (c === 47) {
        this.state = "authority";
      } else {
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
      this.url.scheme = this.base.scheme;
      if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
      } else if (c === 47) {
        this.state = "relative slash";
      } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
      } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
      } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
      } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
      if (isSpecial(this.url) && (c === 47 || c === 92)) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "special authority ignore slashes";
      } else if (c === 47) {
        this.state = "authority";
      } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
      if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
      } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
      if (c !== 47 && c !== 92) {
        this.state = "authority";
        --this.pointer;
      } else {
        this.parseError = true;
      }
      return true;
    };
    URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
      if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
          this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        const len = countSymbols(this.buffer);
        for (let pointer = 0; pointer < len; ++pointer) {
          const codePoint = this.buffer.codePointAt(pointer);
          if (codePoint === 58 && !this.passwordTokenSeenFlag) {
            this.passwordTokenSeenFlag = true;
            continue;
          }
          const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
          if (this.passwordTokenSeenFlag) {
            this.url.password += encodedCodePoints;
          } else {
            this.url.username += encodedCodePoints;
          }
        }
        this.buffer = "";
      } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        if (this.atFlag && this.buffer === "") {
          this.parseError = true;
          return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
      } else {
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
      if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
      } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
          this.parseError = true;
          return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
          return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
          return false;
        }
      } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
          this.parseError = true;
          return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
          this.parseError = true;
          return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
          return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
          return false;
        }
      } else {
        if (c === 91) {
          this.arrFlag = true;
        } else if (c === 93) {
          this.arrFlag = false;
        }
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
      if (isASCIIDigit(c)) {
        this.buffer += cStr;
      } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92 || this.stateOverride) {
        if (this.buffer !== "") {
          const port = parseInt(this.buffer);
          if (port > Math.pow(2, 16) - 1) {
            this.parseError = true;
            return failure;
          }
          this.url.port = port === defaultPort(this.url.scheme) ? null : port;
          this.buffer = "";
        }
        if (this.stateOverride) {
          return false;
        }
        this.state = "path start";
        --this.pointer;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    var fileOtherwiseCodePoints = /* @__PURE__ */ new Set([47, 92, 63, 35]);
    URLStateMachine.prototype["parse file"] = function parseFile(c) {
      this.url.scheme = "file";
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "file slash";
      } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
        } else if (c === 63) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = "";
          this.state = "query";
        } else if (c === 35) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
          this.url.fragment = "";
          this.state = "fragment";
        } else {
          if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
          !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
          !fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            shortenPath(this.url);
          } else {
            this.parseError = true;
          }
          this.state = "path";
          --this.pointer;
        }
      } else {
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "file host";
      } else {
        if (this.base !== null && this.base.scheme === "file") {
          if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
            this.url.path.push(this.base.path[0]);
          } else {
            this.url.host = this.base.host;
          }
        }
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
      if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
          this.parseError = true;
          this.state = "path";
        } else if (this.buffer === "") {
          this.url.host = "";
          if (this.stateOverride) {
            return false;
          }
          this.state = "path start";
        } else {
          let host = parseHost(this.buffer, isSpecial(this.url));
          if (host === failure) {
            return failure;
          }
          if (host === "localhost") {
            host = "";
          }
          this.url.host = host;
          if (this.stateOverride) {
            return false;
          }
          this.buffer = "";
          this.state = "path start";
        }
      } else {
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
      if (isSpecial(this.url)) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
          --this.pointer;
        }
      } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
      } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
      } else if (c !== void 0) {
        this.state = "path";
        if (c !== 47) {
          --this.pointer;
        }
      }
      return true;
    };
    URLStateMachine.prototype["parse path"] = function parsePath(c) {
      if (isNaN(c) || c === 47 || isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
        if (isSpecial(this.url) && c === 92) {
          this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
          shortenPath(this.url);
          if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
          }
        } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
          this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
          if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
            if (this.url.host !== "" && this.url.host !== null) {
              this.parseError = true;
              this.url.host = "";
            }
            this.buffer = this.buffer[0] + ":";
          }
          this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (this.url.scheme === "file" && (c === void 0 || c === 63 || c === 35)) {
          while (this.url.path.length > 1 && this.url.path[0] === "") {
            this.parseError = true;
            this.url.path.shift();
          }
        }
        if (c === 63) {
          this.url.query = "";
          this.state = "query";
        }
        if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        }
      } else {
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
          this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
      }
      return true;
    };
    URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
      if (c === 63) {
        this.url.query = "";
        this.state = "query";
      } else if (c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
      } else {
        if (!isNaN(c) && c !== 37) {
          this.parseError = true;
        }
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
          this.parseError = true;
        }
        if (!isNaN(c)) {
          this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
        }
      }
      return true;
    };
    URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
      if (isNaN(c) || !this.stateOverride && c === 35) {
        if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
          this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer);
        for (let i = 0; i < buffer.length; ++i) {
          if (buffer[i] < 33 || buffer[i] > 126 || buffer[i] === 34 || buffer[i] === 35 || buffer[i] === 60 || buffer[i] === 62) {
            this.url.query += percentEncode(buffer[i]);
          } else {
            this.url.query += String.fromCodePoint(buffer[i]);
          }
        }
        this.buffer = "";
        if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        }
      } else {
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
          this.parseError = true;
        }
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
      if (isNaN(c)) {
      } else if (c === 0) {
        this.parseError = true;
      } else {
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
          this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
      }
      return true;
    };
    function serializeURL(url, excludeFragment) {
      let output = url.scheme + ":";
      if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
          output += url.username;
          if (url.password !== "") {
            output += ":" + url.password;
          }
          output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
          output += ":" + url.port;
        }
      } else if (url.host === null && url.scheme === "file") {
        output += "//";
      }
      if (url.cannotBeABaseURL) {
        output += url.path[0];
      } else {
        for (const string of url.path) {
          output += "/" + string;
        }
      }
      if (url.query !== null) {
        output += "?" + url.query;
      }
      if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
      }
      return output;
    }
    function serializeOrigin(tuple) {
      let result = tuple.scheme + "://";
      result += serializeHost(tuple.host);
      if (tuple.port !== null) {
        result += ":" + tuple.port;
      }
      return result;
    }
    module2.exports.serializeURL = serializeURL;
    module2.exports.serializeURLOrigin = function(url) {
      switch (url.scheme) {
        case "blob":
          try {
            return module2.exports.serializeURLOrigin(module2.exports.parseURL(url.path[0]));
          } catch (e) {
            return "null";
          }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
          return serializeOrigin({
            scheme: url.scheme,
            host: url.host,
            port: url.port
          });
        case "file":
          return "file://";
        default:
          return "null";
      }
    };
    module2.exports.basicURLParse = function(input, options) {
      if (options === void 0) {
        options = {};
      }
      const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
      if (usm.failure) {
        return "failure";
      }
      return usm.url;
    };
    module2.exports.setTheUsername = function(url, username) {
      url.username = "";
      const decoded = punycode.ucs2.decode(username);
      for (let i = 0; i < decoded.length; ++i) {
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
      }
    };
    module2.exports.setThePassword = function(url, password) {
      url.password = "";
      const decoded = punycode.ucs2.decode(password);
      for (let i = 0; i < decoded.length; ++i) {
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
      }
    };
    module2.exports.serializeHost = serializeHost;
    module2.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
    module2.exports.serializeInteger = function(integer) {
      return String(integer);
    };
    module2.exports.parseURL = function(input, options) {
      if (options === void 0) {
        options = {};
      }
      return module2.exports.basicURLParse(input, { baseURL: options.baseURL, encodingOverride: options.encodingOverride });
    };
  }
});

// node_modules/whatwg-url/lib/URL-impl.js
var require_URL_impl = __commonJS({
  "node_modules/whatwg-url/lib/URL-impl.js"(exports) {
    "use strict";
    var usm = require_url_state_machine();
    exports.implementation = class URLImpl {
      constructor(constructorArgs) {
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== void 0) {
          parsedBase = usm.basicURLParse(base);
          if (parsedBase === "failure") {
            throw new TypeError("Invalid base URL");
          }
        }
        const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase });
        if (parsedURL === "failure") {
          throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
      }
      get href() {
        return usm.serializeURL(this._url);
      }
      set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === "failure") {
          throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
      }
      get origin() {
        return usm.serializeURLOrigin(this._url);
      }
      get protocol() {
        return this._url.scheme + ":";
      }
      set protocol(v) {
        usm.basicURLParse(v + ":", { url: this._url, stateOverride: "scheme start" });
      }
      get username() {
        return this._url.username;
      }
      set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        usm.setTheUsername(this._url, v);
      }
      get password() {
        return this._url.password;
      }
      set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        usm.setThePassword(this._url, v);
      }
      get host() {
        const url = this._url;
        if (url.host === null) {
          return "";
        }
        if (url.port === null) {
          return usm.serializeHost(url.host);
        }
        return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
      }
      set host(v) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        usm.basicURLParse(v, { url: this._url, stateOverride: "host" });
      }
      get hostname() {
        if (this._url.host === null) {
          return "";
        }
        return usm.serializeHost(this._url.host);
      }
      set hostname(v) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        usm.basicURLParse(v, { url: this._url, stateOverride: "hostname" });
      }
      get port() {
        if (this._url.port === null) {
          return "";
        }
        return usm.serializeInteger(this._url.port);
      }
      set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return;
        }
        if (v === "") {
          this._url.port = null;
        } else {
          usm.basicURLParse(v, { url: this._url, stateOverride: "port" });
        }
      }
      get pathname() {
        if (this._url.cannotBeABaseURL) {
          return this._url.path[0];
        }
        if (this._url.path.length === 0) {
          return "";
        }
        return "/" + this._url.path.join("/");
      }
      set pathname(v) {
        if (this._url.cannotBeABaseURL) {
          return;
        }
        this._url.path = [];
        usm.basicURLParse(v, { url: this._url, stateOverride: "path start" });
      }
      get search() {
        if (this._url.query === null || this._url.query === "") {
          return "";
        }
        return "?" + this._url.query;
      }
      set search(v) {
        const url = this._url;
        if (v === "") {
          url.query = null;
          return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, { url, stateOverride: "query" });
      }
      get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
          return "";
        }
        return "#" + this._url.fragment;
      }
      set hash(v) {
        if (v === "") {
          this._url.fragment = null;
          return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, { url: this._url, stateOverride: "fragment" });
      }
      toJSON() {
        return this.href;
      }
    };
  }
});

// node_modules/whatwg-url/lib/URL.js
var require_URL = __commonJS({
  "node_modules/whatwg-url/lib/URL.js"(exports, module2) {
    "use strict";
    var conversions = require_lib();
    var utils = require_utils3();
    var Impl = require_URL_impl();
    var impl = utils.implSymbol;
    function URL(url) {
      if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
      }
      if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
      }
      const args = [];
      for (let i = 0; i < arguments.length && i < 2; ++i) {
        args[i] = arguments[i];
      }
      args[0] = conversions["USVString"](args[0]);
      if (args[1] !== void 0) {
        args[1] = conversions["USVString"](args[1]);
      }
      module2.exports.setup(this, args);
    }
    URL.prototype.toJSON = function toJSON() {
      if (!this || !module2.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }
      const args = [];
      for (let i = 0; i < arguments.length && i < 0; ++i) {
        args[i] = arguments[i];
      }
      return this[impl].toJSON.apply(this[impl], args);
    };
    Object.defineProperty(URL.prototype, "href", {
      get() {
        return this[impl].href;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
      },
      enumerable: true,
      configurable: true
    });
    URL.prototype.toString = function() {
      if (!this || !module2.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }
      return this.href;
    };
    Object.defineProperty(URL.prototype, "origin", {
      get() {
        return this[impl].origin;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "protocol", {
      get() {
        return this[impl].protocol;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "username", {
      get() {
        return this[impl].username;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "password", {
      get() {
        return this[impl].password;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "host", {
      get() {
        return this[impl].host;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "hostname", {
      get() {
        return this[impl].hostname;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "port", {
      get() {
        return this[impl].port;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "pathname", {
      get() {
        return this[impl].pathname;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "search", {
      get() {
        return this[impl].search;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(URL.prototype, "hash", {
      get() {
        return this[impl].hash;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
      },
      enumerable: true,
      configurable: true
    });
    module2.exports = {
      is(obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
      },
      create(constructorArgs, privateData) {
        let obj = Object.create(URL.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
      },
      setup(obj, constructorArgs, privateData) {
        if (!privateData)
          privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils.wrapperSymbol] = obj;
      },
      interface: URL,
      expose: {
        Window: { URL },
        Worker: { URL }
      }
    };
  }
});

// node_modules/whatwg-url/lib/public-api.js
var require_public_api = __commonJS({
  "node_modules/whatwg-url/lib/public-api.js"(exports) {
    "use strict";
    exports.URL = require_URL().interface;
    exports.serializeURL = require_url_state_machine().serializeURL;
    exports.serializeURLOrigin = require_url_state_machine().serializeURLOrigin;
    exports.basicURLParse = require_url_state_machine().basicURLParse;
    exports.setTheUsername = require_url_state_machine().setTheUsername;
    exports.setThePassword = require_url_state_machine().setThePassword;
    exports.serializeHost = require_url_state_machine().serializeHost;
    exports.serializeInteger = require_url_state_machine().serializeInteger;
    exports.parseURL = require_url_state_machine().parseURL;
  }
});

// node_modules/node-fetch/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/node-fetch/lib/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var Stream = _interopDefault(require("stream"));
    var http = _interopDefault(require("http"));
    var Url = _interopDefault(require("url"));
    var whatwgUrl = _interopDefault(require_public_api());
    var https = _interopDefault(require("https"));
    var zlib = _interopDefault(require("zlib"));
    var Readable = Stream.Readable;
    var BUFFER = Symbol("buffer");
    var TYPE = Symbol("type");
    var Blob = class {
      constructor() {
        this[TYPE] = "";
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
          const a = blobParts;
          const length = Number(a.length);
          for (let i = 0; i < length; i++) {
            const element = a[i];
            let buffer;
            if (element instanceof Buffer) {
              buffer = element;
            } else if (ArrayBuffer.isView(element)) {
              buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
            } else if (element instanceof ArrayBuffer) {
              buffer = Buffer.from(element);
            } else if (element instanceof Blob) {
              buffer = element[BUFFER];
            } else {
              buffer = Buffer.from(typeof element === "string" ? element : String(element));
            }
            size += buffer.length;
            buffers.push(buffer);
          }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options && options.type !== void 0 && String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
          this[TYPE] = type;
        }
      }
      get size() {
        return this[BUFFER].length;
      }
      get type() {
        return this[TYPE];
      }
      text() {
        return Promise.resolve(this[BUFFER].toString());
      }
      arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
      }
      stream() {
        const readable = new Readable();
        readable._read = function() {
        };
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
      }
      toString() {
        return "[object Blob]";
      }
      slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === void 0) {
          relativeStart = 0;
        } else if (start < 0) {
          relativeStart = Math.max(size + start, 0);
        } else {
          relativeStart = Math.min(start, size);
        }
        if (end === void 0) {
          relativeEnd = size;
        } else if (end < 0) {
          relativeEnd = Math.max(size + end, 0);
        } else {
          relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob([], { type: arguments[2] });
        blob[BUFFER] = slicedBuffer;
        return blob;
      }
    };
    Object.defineProperties(Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
      value: "Blob",
      writable: false,
      enumerable: false,
      configurable: true
    });
    function FetchError(message, type, systemError) {
      Error.call(this, message);
      this.message = message;
      this.type = type;
      if (systemError) {
        this.code = this.errno = systemError.code;
      }
      Error.captureStackTrace(this, this.constructor);
    }
    FetchError.prototype = Object.create(Error.prototype);
    FetchError.prototype.constructor = FetchError;
    FetchError.prototype.name = "FetchError";
    var convert;
    try {
      convert = require("encoding").convert;
    } catch (e) {
    }
    var INTERNALS = Symbol("Body internals");
    var PassThrough = Stream.PassThrough;
    function Body(body) {
      var _this = this;
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$size = _ref.size;
      let size = _ref$size === void 0 ? 0 : _ref$size;
      var _ref$timeout = _ref.timeout;
      let timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
      if (body == null) {
        body = null;
      } else if (isURLSearchParams(body)) {
        body = Buffer.from(body.toString());
      } else if (isBlob(body))
        ;
      else if (Buffer.isBuffer(body))
        ;
      else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
        body = Buffer.from(body);
      } else if (ArrayBuffer.isView(body)) {
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
      } else if (body instanceof Stream)
        ;
      else {
        body = Buffer.from(String(body));
      }
      this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
      };
      this.size = size;
      this.timeout = timeout;
      if (body instanceof Stream) {
        body.on("error", function(err) {
          const error = err.name === "AbortError" ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, "system", err);
          _this[INTERNALS].error = error;
        });
      }
    }
    Body.prototype = {
      get body() {
        return this[INTERNALS].body;
      },
      get bodyUsed() {
        return this[INTERNALS].disturbed;
      },
      /**
       * Decode response as ArrayBuffer
       *
       * @return  Promise
       */
      arrayBuffer() {
        return consumeBody.call(this).then(function(buf) {
          return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
      },
      /**
       * Return raw response as Blob
       *
       * @return Promise
       */
      blob() {
        let ct = this.headers && this.headers.get("content-type") || "";
        return consumeBody.call(this).then(function(buf) {
          return Object.assign(
            // Prevent copying
            new Blob([], {
              type: ct.toLowerCase()
            }),
            {
              [BUFFER]: buf
            }
          );
        });
      },
      /**
       * Decode response as json
       *
       * @return  Promise
       */
      json() {
        var _this2 = this;
        return consumeBody.call(this).then(function(buffer) {
          try {
            return JSON.parse(buffer.toString());
          } catch (err) {
            return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, "invalid-json"));
          }
        });
      },
      /**
       * Decode response as text
       *
       * @return  Promise
       */
      text() {
        return consumeBody.call(this).then(function(buffer) {
          return buffer.toString();
        });
      },
      /**
       * Decode response as buffer (non-spec api)
       *
       * @return  Promise
       */
      buffer() {
        return consumeBody.call(this);
      },
      /**
       * Decode response as text, while automatically detecting the encoding and
       * trying to decode to UTF-8 (non-spec api)
       *
       * @return  Promise
       */
      textConverted() {
        var _this3 = this;
        return consumeBody.call(this).then(function(buffer) {
          return convertBody(buffer, _this3.headers);
        });
      }
    };
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    });
    Body.mixIn = function(proto) {
      for (const name of Object.getOwnPropertyNames(Body.prototype)) {
        if (!(name in proto)) {
          const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
          Object.defineProperty(proto, name, desc);
        }
      }
    };
    function consumeBody() {
      var _this4 = this;
      if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
      }
      this[INTERNALS].disturbed = true;
      if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error);
      }
      let body = this.body;
      if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0));
      }
      if (isBlob(body)) {
        body = body.stream();
      }
      if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body);
      }
      if (!(body instanceof Stream)) {
        return Body.Promise.resolve(Buffer.alloc(0));
      }
      let accum = [];
      let accumBytes = 0;
      let abort = false;
      return new Body.Promise(function(resolve, reject) {
        let resTimeout;
        if (_this4.timeout) {
          resTimeout = setTimeout(function() {
            abort = true;
            reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, "body-timeout"));
          }, _this4.timeout);
        }
        body.on("error", function(err) {
          if (err.name === "AbortError") {
            abort = true;
            reject(err);
          } else {
            reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, "system", err));
          }
        });
        body.on("data", function(chunk) {
          if (abort || chunk === null) {
            return;
          }
          if (_this4.size && accumBytes + chunk.length > _this4.size) {
            abort = true;
            reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, "max-size"));
            return;
          }
          accumBytes += chunk.length;
          accum.push(chunk);
        });
        body.on("end", function() {
          if (abort) {
            return;
          }
          clearTimeout(resTimeout);
          try {
            resolve(Buffer.concat(accum, accumBytes));
          } catch (err) {
            reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, "system", err));
          }
        });
      });
    }
    function convertBody(buffer, headers) {
      if (typeof convert !== "function") {
        throw new Error("The package `encoding` must be installed to use the textConverted() function");
      }
      const ct = headers.get("content-type");
      let charset = "utf-8";
      let res, str;
      if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
      }
      str = buffer.slice(0, 1024).toString();
      if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
      }
      if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
          res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
          if (res) {
            res.pop();
          }
        }
        if (res) {
          res = /charset=(.*)/i.exec(res.pop());
        }
      }
      if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
      }
      if (res) {
        charset = res.pop();
        if (charset === "gb2312" || charset === "gbk") {
          charset = "gb18030";
        }
      }
      return convert(buffer, "UTF-8", charset).toString();
    }
    function isURLSearchParams(obj) {
      if (typeof obj !== "object" || typeof obj.append !== "function" || typeof obj.delete !== "function" || typeof obj.get !== "function" || typeof obj.getAll !== "function" || typeof obj.has !== "function" || typeof obj.set !== "function") {
        return false;
      }
      return obj.constructor.name === "URLSearchParams" || Object.prototype.toString.call(obj) === "[object URLSearchParams]" || typeof obj.sort === "function";
    }
    function isBlob(obj) {
      return typeof obj === "object" && typeof obj.arrayBuffer === "function" && typeof obj.type === "string" && typeof obj.stream === "function" && typeof obj.constructor === "function" && typeof obj.constructor.name === "string" && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
    }
    function clone(instance) {
      let p1, p2;
      let body = instance.body;
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body instanceof Stream && typeof body.getBoundary !== "function") {
        p1 = new PassThrough();
        p2 = new PassThrough();
        body.pipe(p1);
        body.pipe(p2);
        instance[INTERNALS].body = p1;
        body = p2;
      }
      return body;
    }
    function extractContentType(body) {
      if (body === null) {
        return null;
      } else if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
      } else if (isURLSearchParams(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      } else if (isBlob(body)) {
        return body.type || null;
      } else if (Buffer.isBuffer(body)) {
        return null;
      } else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
        return null;
      } else if (ArrayBuffer.isView(body)) {
        return null;
      } else if (typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${body.getBoundary()}`;
      } else if (body instanceof Stream) {
        return null;
      } else {
        return "text/plain;charset=UTF-8";
      }
    }
    function getTotalBytes(instance) {
      const body = instance.body;
      if (body === null) {
        return 0;
      } else if (isBlob(body)) {
        return body.size;
      } else if (Buffer.isBuffer(body)) {
        return body.length;
      } else if (body && typeof body.getLengthSync === "function") {
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
        body.hasKnownLength && body.hasKnownLength()) {
          return body.getLengthSync();
        }
        return null;
      } else {
        return null;
      }
    }
    function writeToStream(dest, instance) {
      const body = instance.body;
      if (body === null) {
        dest.end();
      } else if (isBlob(body)) {
        body.stream().pipe(dest);
      } else if (Buffer.isBuffer(body)) {
        dest.write(body);
        dest.end();
      } else {
        body.pipe(dest);
      }
    }
    Body.Promise = global.Promise;
    var invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
    var invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
    function validateName(name) {
      name = `${name}`;
      if (invalidTokenRegex.test(name) || name === "") {
        throw new TypeError(`${name} is not a legal HTTP header name`);
      }
    }
    function validateValue(value) {
      value = `${value}`;
      if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
      }
    }
    function find(map, name) {
      name = name.toLowerCase();
      for (const key in map) {
        if (key.toLowerCase() === name) {
          return key;
        }
      }
      return void 0;
    }
    var MAP = Symbol("map");
    var Headers = class {
      /**
       * Headers class
       *
       * @param   Object  headers  Response headers
       * @return  Void
       */
      constructor() {
        let init = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
        this[MAP] = /* @__PURE__ */ Object.create(null);
        if (init instanceof Headers) {
          const rawHeaders = init.raw();
          const headerNames = Object.keys(rawHeaders);
          for (const headerName of headerNames) {
            for (const value of rawHeaders[headerName]) {
              this.append(headerName, value);
            }
          }
          return;
        }
        if (init == null)
          ;
        else if (typeof init === "object") {
          const method = init[Symbol.iterator];
          if (method != null) {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            const pairs = [];
            for (const pair of init) {
              if (typeof pair !== "object" || typeof pair[Symbol.iterator] !== "function") {
                throw new TypeError("Each header pair must be iterable");
              }
              pairs.push(Array.from(pair));
            }
            for (const pair of pairs) {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              this.append(pair[0], pair[1]);
            }
          } else {
            for (const key of Object.keys(init)) {
              const value = init[key];
              this.append(key, value);
            }
          }
        } else {
          throw new TypeError("Provided initializer must be an object");
        }
      }
      /**
       * Return combined header value given name
       *
       * @param   String  name  Header name
       * @return  Mixed
       */
      get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === void 0) {
          return null;
        }
        return this[MAP][key].join(", ");
      }
      /**
       * Iterate over all headers
       *
       * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
       * @param   Boolean   thisArg   `this` context for callback function
       * @return  Void
       */
      forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
        let pairs = getHeaders(this);
        let i = 0;
        while (i < pairs.length) {
          var _pairs$i = pairs[i];
          const name = _pairs$i[0], value = _pairs$i[1];
          callback.call(thisArg, value, name, this);
          pairs = getHeaders(this);
          i++;
        }
      }
      /**
       * Overwrite header values given name
       *
       * @param   String  name   Header name
       * @param   String  value  Header value
       * @return  Void
       */
      set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== void 0 ? key : name] = [value];
      }
      /**
       * Append a value onto existing header
       *
       * @param   String  name   Header name
       * @param   String  value  Header value
       * @return  Void
       */
      append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== void 0) {
          this[MAP][key].push(value);
        } else {
          this[MAP][name] = [value];
        }
      }
      /**
       * Check for header name existence
       *
       * @param   String   name  Header name
       * @return  Boolean
       */
      has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== void 0;
      }
      /**
       * Delete all header values given name
       *
       * @param   String  name  Header name
       * @return  Void
       */
      delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== void 0) {
          delete this[MAP][key];
        }
      }
      /**
       * Return raw headers (non-spec api)
       *
       * @return  Object
       */
      raw() {
        return this[MAP];
      }
      /**
       * Get an iterator on keys.
       *
       * @return  Iterator
       */
      keys() {
        return createHeadersIterator(this, "key");
      }
      /**
       * Get an iterator on values.
       *
       * @return  Iterator
       */
      values() {
        return createHeadersIterator(this, "value");
      }
      /**
       * Get an iterator on entries.
       *
       * This is the default iterator of the Headers object.
       *
       * @return  Iterator
       */
      [Symbol.iterator]() {
        return createHeadersIterator(this, "key+value");
      }
    };
    Headers.prototype.entries = Headers.prototype[Symbol.iterator];
    Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
      value: "Headers",
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperties(Headers.prototype, {
      get: { enumerable: true },
      forEach: { enumerable: true },
      set: { enumerable: true },
      append: { enumerable: true },
      has: { enumerable: true },
      delete: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true }
    });
    function getHeaders(headers) {
      let kind = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
      const keys = Object.keys(headers[MAP]).sort();
      return keys.map(kind === "key" ? function(k) {
        return k.toLowerCase();
      } : kind === "value" ? function(k) {
        return headers[MAP][k].join(", ");
      } : function(k) {
        return [k.toLowerCase(), headers[MAP][k].join(", ")];
      });
    }
    var INTERNAL = Symbol("internal");
    function createHeadersIterator(target, kind) {
      const iterator = Object.create(HeadersIteratorPrototype);
      iterator[INTERNAL] = {
        target,
        kind,
        index: 0
      };
      return iterator;
    }
    var HeadersIteratorPrototype = Object.setPrototypeOf({
      next() {
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
          throw new TypeError("Value of `this` is not a HeadersIterator");
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index >= len) {
          return {
            value: void 0,
            done: true
          };
        }
        this[INTERNAL].index = index + 1;
        return {
          value: values[index],
          done: false
        };
      }
    }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
    Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
      value: "HeadersIterator",
      writable: false,
      enumerable: false,
      configurable: true
    });
    function exportNodeCompatibleHeaders(headers) {
      const obj = Object.assign({ __proto__: null }, headers[MAP]);
      const hostHeaderKey = find(headers[MAP], "Host");
      if (hostHeaderKey !== void 0) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
      }
      return obj;
    }
    function createHeadersLenient(obj) {
      const headers = new Headers();
      for (const name of Object.keys(obj)) {
        if (invalidTokenRegex.test(name)) {
          continue;
        }
        if (Array.isArray(obj[name])) {
          for (const val of obj[name]) {
            if (invalidHeaderCharRegex.test(val)) {
              continue;
            }
            if (headers[MAP][name] === void 0) {
              headers[MAP][name] = [val];
            } else {
              headers[MAP][name].push(val);
            }
          }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
          headers[MAP][name] = [obj[name]];
        }
      }
      return headers;
    }
    var INTERNALS$1 = Symbol("Response internals");
    var STATUS_CODES = http.STATUS_CODES;
    var Response = class {
      constructor() {
        let body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Body.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers(opts.headers);
        if (body != null && !headers.has("Content-Type")) {
          const contentType = extractContentType(body);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS$1] = {
          url: opts.url,
          status,
          statusText: opts.statusText || STATUS_CODES[status],
          headers,
          counter: opts.counter
        };
      }
      get url() {
        return this[INTERNALS$1].url || "";
      }
      get status() {
        return this[INTERNALS$1].status;
      }
      /**
       * Convenience property representing if the request ended normally
       */
      get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
      }
      get redirected() {
        return this[INTERNALS$1].counter > 0;
      }
      get statusText() {
        return this[INTERNALS$1].statusText;
      }
      get headers() {
        return this[INTERNALS$1].headers;
      }
      /**
       * Clone this response
       *
       * @return  Response
       */
      clone() {
        return new Response(clone(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        });
      }
    };
    Body.mixIn(Response.prototype);
    Object.defineProperties(Response.prototype, {
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    });
    Object.defineProperty(Response.prototype, Symbol.toStringTag, {
      value: "Response",
      writable: false,
      enumerable: false,
      configurable: true
    });
    var INTERNALS$2 = Symbol("Request internals");
    var URL = Url.URL || whatwgUrl.URL;
    var parse_url = Url.parse;
    var format_url = Url.format;
    function parseURL(urlStr) {
      if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString();
      }
      return parse_url(urlStr);
    }
    var streamDestructionSupported = "destroy" in Stream.Readable.prototype;
    function isRequest(input) {
      return typeof input === "object" && typeof input[INTERNALS$2] === "object";
    }
    function isAbortSignal(signal) {
      const proto = signal && typeof signal === "object" && Object.getPrototypeOf(signal);
      return !!(proto && proto.constructor.name === "AbortSignal");
    }
    var Request = class {
      constructor(input) {
        let init = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let parsedURL;
        if (!isRequest(input)) {
          if (input && input.href) {
            parsedURL = parseURL(input.href);
          } else {
            parsedURL = parseURL(`${input}`);
          }
          input = {};
        } else {
          parsedURL = parseURL(input.url);
        }
        let method = init.method || input.method || "GET";
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        Body.call(this, inputBody, {
          timeout: init.timeout || input.timeout || 0,
          size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody != null && !headers.has("Content-Type")) {
          const contentType = extractContentType(inputBody);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init)
          signal = init.signal;
        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal");
        }
        this[INTERNALS$2] = {
          method,
          redirect: init.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal
        };
        this.follow = init.follow !== void 0 ? init.follow : input.follow !== void 0 ? input.follow : 20;
        this.compress = init.compress !== void 0 ? init.compress : input.compress !== void 0 ? input.compress : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
      }
      get method() {
        return this[INTERNALS$2].method;
      }
      get url() {
        return format_url(this[INTERNALS$2].parsedURL);
      }
      get headers() {
        return this[INTERNALS$2].headers;
      }
      get redirect() {
        return this[INTERNALS$2].redirect;
      }
      get signal() {
        return this[INTERNALS$2].signal;
      }
      /**
       * Clone this request
       *
       * @return  Request
       */
      clone() {
        return new Request(this);
      }
    };
    Body.mixIn(Request.prototype);
    Object.defineProperty(Request.prototype, Symbol.toStringTag, {
      value: "Request",
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true }
    });
    function getNodeRequestOptions(request) {
      const parsedURL = request[INTERNALS$2].parsedURL;
      const headers = new Headers(request[INTERNALS$2].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError("Only absolute URLs are supported");
      }
      if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError("Only HTTP(S) protocols are supported");
      }
      if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
        throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
      }
      let contentLengthValue = null;
      if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body != null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === "number") {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip,deflate");
      }
      let agent = request.agent;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
      }
      return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
      });
    }
    function AbortError(message) {
      Error.call(this, message);
      this.type = "aborted";
      this.message = message;
      Error.captureStackTrace(this, this.constructor);
    }
    AbortError.prototype = Object.create(Error.prototype);
    AbortError.prototype.constructor = AbortError;
    AbortError.prototype.name = "AbortError";
    var URL$1 = Url.URL || whatwgUrl.URL;
    var PassThrough$1 = Stream.PassThrough;
    var isDomainOrSubdomain = function isDomainOrSubdomain2(destination, original) {
      const orig = new URL$1(original).hostname;
      const dest = new URL$1(destination).hostname;
      return orig === dest || orig[orig.length - dest.length - 1] === "." && orig.endsWith(dest);
    };
    var isSameProtocol = function isSameProtocol2(destination, original) {
      const orig = new URL$1(original).protocol;
      const dest = new URL$1(destination).protocol;
      return orig === dest;
    };
    function fetch2(url, opts) {
      if (!fetch2.Promise) {
        throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
      }
      Body.Promise = fetch2.Promise;
      return new fetch2.Promise(function(resolve, reject) {
        const request = new Request(url, opts);
        const options = getNodeRequestOptions(request);
        const send = (options.protocol === "https:" ? https : http).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort2() {
          let error = new AbortError("The user aborted a request.");
          reject(error);
          if (request.body && request.body instanceof Stream.Readable) {
            destroyStream(request.body, error);
          }
          if (!response || !response.body)
            return;
          response.body.emit("error", error);
        };
        if (signal && signal.aborted) {
          abort();
          return;
        }
        const abortAndFinalize = function abortAndFinalize2() {
          abort();
          finalize();
        };
        const req = send(options);
        let reqTimeout;
        if (signal) {
          signal.addEventListener("abort", abortAndFinalize);
        }
        function finalize() {
          req.abort();
          if (signal)
            signal.removeEventListener("abort", abortAndFinalize);
          clearTimeout(reqTimeout);
        }
        if (request.timeout) {
          req.once("socket", function(socket) {
            reqTimeout = setTimeout(function() {
              reject(new FetchError(`network timeout at: ${request.url}`, "request-timeout"));
              finalize();
            }, request.timeout);
          });
        }
        req.on("error", function(err) {
          reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
          if (response && response.body) {
            destroyStream(response.body, err);
          }
          finalize();
        });
        fixResponseChunkedTransferBadEnding(req, function(err) {
          if (signal && signal.aborted) {
            return;
          }
          if (response && response.body) {
            destroyStream(response.body, err);
          }
        });
        if (parseInt(process.version.substring(1)) < 14) {
          req.on("socket", function(s) {
            s.addListener("close", function(hadError) {
              const hasDataListener = s.listenerCount("data") > 0;
              if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                const err = new Error("Premature close");
                err.code = "ERR_STREAM_PREMATURE_CLOSE";
                response.body.emit("error", err);
              }
            });
          });
        }
        req.on("response", function(res) {
          clearTimeout(reqTimeout);
          const headers = createHeadersLenient(res.headers);
          if (fetch2.isRedirect(res.statusCode)) {
            const location = headers.get("Location");
            let locationURL = null;
            try {
              locationURL = location === null ? null : new URL$1(location, request.url).toString();
            } catch (err) {
              if (request.redirect !== "manual") {
                reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, "invalid-redirect"));
                finalize();
                return;
              }
            }
            switch (request.redirect) {
              case "error":
                reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
                finalize();
                return;
              case "manual":
                if (locationURL !== null) {
                  try {
                    headers.set("Location", locationURL);
                  } catch (err) {
                    reject(err);
                  }
                }
                break;
              case "follow":
                if (locationURL === null) {
                  break;
                }
                if (request.counter >= request.follow) {
                  reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
                  finalize();
                  return;
                }
                const requestOpts = {
                  headers: new Headers(request.headers),
                  follow: request.follow,
                  counter: request.counter + 1,
                  agent: request.agent,
                  compress: request.compress,
                  method: request.method,
                  body: request.body,
                  signal: request.signal,
                  timeout: request.timeout,
                  size: request.size
                };
                if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                  for (const name of ["authorization", "www-authenticate", "cookie", "cookie2"]) {
                    requestOpts.headers.delete(name);
                  }
                }
                if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                  reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                  finalize();
                  return;
                }
                if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === "POST") {
                  requestOpts.method = "GET";
                  requestOpts.body = void 0;
                  requestOpts.headers.delete("content-length");
                }
                resolve(fetch2(new Request(locationURL, requestOpts)));
                finalize();
                return;
            }
          }
          res.once("end", function() {
            if (signal)
              signal.removeEventListener("abort", abortAndFinalize);
          });
          let body = res.pipe(new PassThrough$1());
          const response_options = {
            url: request.url,
            status: res.statusCode,
            statusText: res.statusMessage,
            headers,
            size: request.size,
            timeout: request.timeout,
            counter: request.counter
          };
          const codings = headers.get("Content-Encoding");
          if (!request.compress || request.method === "HEAD" || codings === null || res.statusCode === 204 || res.statusCode === 304) {
            response = new Response(body, response_options);
            resolve(response);
            return;
          }
          const zlibOptions = {
            flush: zlib.Z_SYNC_FLUSH,
            finishFlush: zlib.Z_SYNC_FLUSH
          };
          if (codings == "gzip" || codings == "x-gzip") {
            body = body.pipe(zlib.createGunzip(zlibOptions));
            response = new Response(body, response_options);
            resolve(response);
            return;
          }
          if (codings == "deflate" || codings == "x-deflate") {
            const raw = res.pipe(new PassThrough$1());
            raw.once("data", function(chunk) {
              if ((chunk[0] & 15) === 8) {
                body = body.pipe(zlib.createInflate());
              } else {
                body = body.pipe(zlib.createInflateRaw());
              }
              response = new Response(body, response_options);
              resolve(response);
            });
            raw.on("end", function() {
              if (!response) {
                response = new Response(body, response_options);
                resolve(response);
              }
            });
            return;
          }
          if (codings == "br" && typeof zlib.createBrotliDecompress === "function") {
            body = body.pipe(zlib.createBrotliDecompress());
            response = new Response(body, response_options);
            resolve(response);
            return;
          }
          response = new Response(body, response_options);
          resolve(response);
        });
        writeToStream(req, request);
      });
    }
    function fixResponseChunkedTransferBadEnding(request, errorCallback) {
      let socket;
      request.on("socket", function(s) {
        socket = s;
      });
      request.on("response", function(response) {
        const headers = response.headers;
        if (headers["transfer-encoding"] === "chunked" && !headers["content-length"]) {
          response.once("close", function(hadError) {
            const hasDataListener = socket.listenerCount("data") > 0;
            if (hasDataListener && !hadError) {
              const err = new Error("Premature close");
              err.code = "ERR_STREAM_PREMATURE_CLOSE";
              errorCallback(err);
            }
          });
        }
      });
    }
    function destroyStream(stream, err) {
      if (stream.destroy) {
        stream.destroy(err);
      } else {
        stream.emit("error", err);
        stream.end();
      }
    }
    fetch2.isRedirect = function(code) {
      return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
    };
    fetch2.Promise = global.Promise;
    module2.exports = exports = fetch2;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = exports;
    exports.Headers = Headers;
    exports.Request = Request;
    exports.Response = Response;
    exports.FetchError = FetchError;
  }
});

// node_modules/file-uri-to-path/index.js
var require_file_uri_to_path = __commonJS({
  "node_modules/file-uri-to-path/index.js"(exports, module2) {
    var sep = require("path").sep || "/";
    module2.exports = fileUriToPath;
    function fileUriToPath(uri) {
      if ("string" != typeof uri || uri.length <= 7 || "file://" != uri.substring(0, 7)) {
        throw new TypeError("must pass in a file:// URI to convert to a file path");
      }
      var rest = decodeURI(uri.substring(7));
      var firstSlash = rest.indexOf("/");
      var host = rest.substring(0, firstSlash);
      var path = rest.substring(firstSlash + 1);
      if ("localhost" == host)
        host = "";
      if (host) {
        host = sep + sep + host;
      }
      path = path.replace(/^(.+)\|/, "$1:");
      if (sep == "\\") {
        path = path.replace(/\//g, "\\");
      }
      if (/^.+\:/.test(path)) {
      } else {
        path = sep + path;
      }
      return host + path;
    }
  }
});

// node_modules/bindings/bindings.js
var require_bindings = __commonJS({
  "node_modules/bindings/bindings.js"(exports, module2) {
    var fs2 = require("fs");
    var path = require("path");
    var fileURLToPath = require_file_uri_to_path();
    var join = path.join;
    var dirname = path.dirname;
    var exists = fs2.accessSync && function(path2) {
      try {
        fs2.accessSync(path2);
      } catch (e) {
        return false;
      }
      return true;
    } || fs2.existsSync || path.existsSync;
    var defaults = {
      arrow: process.env.NODE_BINDINGS_ARROW || " \u2192 ",
      compiled: process.env.NODE_BINDINGS_COMPILED_DIR || "compiled",
      platform: process.platform,
      arch: process.arch,
      nodePreGyp: "node-v" + process.versions.modules + "-" + process.platform + "-" + process.arch,
      version: process.versions.node,
      bindings: "bindings.node",
      try: [
        // node-gyp's linked version in the "build" dir
        ["module_root", "build", "bindings"],
        // node-waf and gyp_addon (a.k.a node-gyp)
        ["module_root", "build", "Debug", "bindings"],
        ["module_root", "build", "Release", "bindings"],
        // Debug files, for development (legacy behavior, remove for node v0.9)
        ["module_root", "out", "Debug", "bindings"],
        ["module_root", "Debug", "bindings"],
        // Release files, but manually compiled (legacy behavior, remove for node v0.9)
        ["module_root", "out", "Release", "bindings"],
        ["module_root", "Release", "bindings"],
        // Legacy from node-waf, node <= 0.4.x
        ["module_root", "build", "default", "bindings"],
        // Production "Release" buildtype binary (meh...)
        ["module_root", "compiled", "version", "platform", "arch", "bindings"],
        // node-qbs builds
        ["module_root", "addon-build", "release", "install-root", "bindings"],
        ["module_root", "addon-build", "debug", "install-root", "bindings"],
        ["module_root", "addon-build", "default", "install-root", "bindings"],
        // node-pre-gyp path ./lib/binding/{node_abi}-{platform}-{arch}
        ["module_root", "lib", "binding", "nodePreGyp", "bindings"]
      ]
    };
    function bindings(opts) {
      if (typeof opts == "string") {
        opts = { bindings: opts };
      } else if (!opts) {
        opts = {};
      }
      Object.keys(defaults).map(function(i2) {
        if (!(i2 in opts))
          opts[i2] = defaults[i2];
      });
      if (!opts.module_root) {
        opts.module_root = exports.getRoot(exports.getFileName());
      }
      if (path.extname(opts.bindings) != ".node") {
        opts.bindings += ".node";
      }
      var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
      var tries = [], i = 0, l = opts.try.length, n, b, err;
      for (; i < l; i++) {
        n = join.apply(
          null,
          opts.try[i].map(function(p) {
            return opts[p] || p;
          })
        );
        tries.push(n);
        try {
          b = opts.path ? requireFunc.resolve(n) : requireFunc(n);
          if (!opts.path) {
            b.path = n;
          }
          return b;
        } catch (e) {
          if (e.code !== "MODULE_NOT_FOUND" && e.code !== "QUALIFIED_PATH_RESOLUTION_FAILED" && !/not find/i.test(e.message)) {
            throw e;
          }
        }
      }
      err = new Error(
        "Could not locate the bindings file. Tried:\n" + tries.map(function(a) {
          return opts.arrow + a;
        }).join("\n")
      );
      err.tries = tries;
      throw err;
    }
    module2.exports = exports = bindings;
    exports.getFileName = function getFileName(calling_file) {
      var origPST = Error.prepareStackTrace, origSTL = Error.stackTraceLimit, dummy = {}, fileName;
      Error.stackTraceLimit = 10;
      Error.prepareStackTrace = function(e, st) {
        for (var i = 0, l = st.length; i < l; i++) {
          fileName = st[i].getFileName();
          if (fileName !== __filename) {
            if (calling_file) {
              if (fileName !== calling_file) {
                return;
              }
            } else {
              return;
            }
          }
        }
      };
      Error.captureStackTrace(dummy);
      dummy.stack;
      Error.prepareStackTrace = origPST;
      Error.stackTraceLimit = origSTL;
      var fileSchema = "file://";
      if (fileName.indexOf(fileSchema) === 0) {
        fileName = fileURLToPath(fileName);
      }
      return fileName;
    };
    exports.getRoot = function getRoot(file) {
      var dir = dirname(file), prev;
      while (true) {
        if (dir === ".") {
          dir = process.cwd();
        }
        if (exists(join(dir, "package.json")) || exists(join(dir, "node_modules"))) {
          return dir;
        }
        if (prev === dir) {
          throw new Error(
            'Could not find module root given file: "' + file + '". Do you have a `package.json` file? '
          );
        }
        prev = dir;
        dir = join(dir, "..");
      }
    };
  }
});

// node_modules/register-scheme/index.js
var require_register_scheme = __commonJS({
  "node_modules/register-scheme/index.js"(exports, module2) {
    module2.exports = require_bindings()("register-protocol-handler").registerProtocolHandler;
  }
});

// node_modules/discord-rpc/src/util.js
var require_util = __commonJS({
  "node_modules/discord-rpc/src/util.js"(exports, module2) {
    "use strict";
    var register;
    try {
      const { app } = require("electron");
      register = app.setAsDefaultProtocolClient.bind(app);
    } catch (err) {
      try {
        register = require_register_scheme();
      } catch (e) {
      }
    }
    if (typeof register !== "function") {
      register = () => false;
    }
    function pid() {
      if (typeof process !== "undefined") {
        return process.pid;
      }
      return null;
    }
    var uuid4122 = () => {
      let uuid = "";
      for (let i = 0; i < 32; i += 1) {
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += "-";
        }
        let n;
        if (i === 12) {
          n = 4;
        } else {
          const random = Math.random() * 16 | 0;
          if (i === 16) {
            n = random & 3 | 0;
          } else {
            n = random;
          }
        }
        uuid += n.toString(16);
      }
      return uuid;
    };
    module2.exports = {
      pid,
      register,
      uuid: uuid4122
    };
  }
});

// node_modules/discord-rpc/src/transports/ipc.js
var require_ipc = __commonJS({
  "node_modules/discord-rpc/src/transports/ipc.js"(exports, module2) {
    "use strict";
    var net = require("net");
    var EventEmitter = require("events");
    var fetch2 = require_lib2();
    var { uuid } = require_util();
    var OPCodes = {
      HANDSHAKE: 0,
      FRAME: 1,
      CLOSE: 2,
      PING: 3,
      PONG: 4
    };
    function getIPCPath(id) {
      if (process.platform === "win32") {
        return `\\\\?\\pipe\\discord-ipc-${id}`;
      }
      const { env: { XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP } } = process;
      const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || "/tmp";
      return `${prefix.replace(/\/$/, "")}/discord-ipc-${id}`;
    }
    function getIPC(id = 0) {
      return new Promise((resolve, reject) => {
        const path = getIPCPath(id);
        const onerror = () => {
          if (id < 10) {
            resolve(getIPC(id + 1));
          } else {
            reject(new Error("Could not connect"));
          }
        };
        const sock = net.createConnection(path, () => {
          sock.removeListener("error", onerror);
          resolve(sock);
        });
        sock.once("error", onerror);
      });
    }
    async function findEndpoint(tries = 0) {
      if (tries > 30) {
        throw new Error("Could not find endpoint");
      }
      const endpoint = `http://127.0.0.1:${6463 + tries % 10}`;
      try {
        const r = await fetch2(endpoint);
        if (r.status === 404) {
          return endpoint;
        }
        return findEndpoint(tries + 1);
      } catch (e) {
        return findEndpoint(tries + 1);
      }
    }
    function encode(op, data) {
      data = JSON.stringify(data);
      const len = Buffer.byteLength(data);
      const packet = Buffer.alloc(8 + len);
      packet.writeInt32LE(op, 0);
      packet.writeInt32LE(len, 4);
      packet.write(data, 8, len);
      return packet;
    }
    var working = {
      full: "",
      op: void 0
    };
    function decode(socket, callback) {
      const packet = socket.read();
      if (!packet) {
        return;
      }
      let { op } = working;
      let raw;
      if (working.full === "") {
        op = working.op = packet.readInt32LE(0);
        const len = packet.readInt32LE(4);
        raw = packet.slice(8, len + 8);
      } else {
        raw = packet.toString();
      }
      try {
        const data = JSON.parse(working.full + raw);
        callback({ op, data });
        working.full = "";
        working.op = void 0;
      } catch (err) {
        working.full += raw;
      }
      decode(socket, callback);
    }
    var IPCTransport = class extends EventEmitter {
      constructor(client) {
        super();
        this.client = client;
        this.socket = null;
      }
      async connect() {
        const socket = this.socket = await getIPC();
        socket.on("close", this.onClose.bind(this));
        socket.on("error", this.onClose.bind(this));
        this.emit("open");
        socket.write(encode(OPCodes.HANDSHAKE, {
          v: 1,
          client_id: this.client.clientId
        }));
        socket.pause();
        socket.on("readable", () => {
          decode(socket, ({ op, data }) => {
            switch (op) {
              case OPCodes.PING:
                this.send(data, OPCodes.PONG);
                break;
              case OPCodes.FRAME:
                if (!data) {
                  return;
                }
                if (data.cmd === "AUTHORIZE" && data.evt !== "ERROR") {
                  findEndpoint().then((endpoint) => {
                    this.client.request.endpoint = endpoint;
                  }).catch((e) => {
                    this.client.emit("error", e);
                  });
                }
                this.emit("message", data);
                break;
              case OPCodes.CLOSE:
                this.emit("close", data);
                break;
              default:
                break;
            }
          });
        });
      }
      onClose(e) {
        this.emit("close", e);
      }
      send(data, op = OPCodes.FRAME) {
        this.socket.write(encode(op, data));
      }
      async close() {
        return new Promise((r) => {
          this.once("close", r);
          this.send({}, OPCodes.CLOSE);
          this.socket.end();
        });
      }
      ping() {
        this.send(uuid(), OPCodes.PING);
      }
    };
    module2.exports = IPCTransport;
    module2.exports.encode = encode;
    module2.exports.decode = decode;
  }
});

// node_modules/discord-rpc/src/constants.js
var require_constants4 = __commonJS({
  "node_modules/discord-rpc/src/constants.js"(exports) {
    "use strict";
    function keyMirror(arr) {
      const tmp = {};
      for (const value of arr) {
        tmp[value] = value;
      }
      return tmp;
    }
    exports.browser = typeof window !== "undefined";
    exports.RPCCommands = keyMirror([
      "DISPATCH",
      "AUTHORIZE",
      "AUTHENTICATE",
      "GET_GUILD",
      "GET_GUILDS",
      "GET_CHANNEL",
      "GET_CHANNELS",
      "CREATE_CHANNEL_INVITE",
      "GET_RELATIONSHIPS",
      "GET_USER",
      "SUBSCRIBE",
      "UNSUBSCRIBE",
      "SET_USER_VOICE_SETTINGS",
      "SET_USER_VOICE_SETTINGS_2",
      "SELECT_VOICE_CHANNEL",
      "GET_SELECTED_VOICE_CHANNEL",
      "SELECT_TEXT_CHANNEL",
      "GET_VOICE_SETTINGS",
      "SET_VOICE_SETTINGS_2",
      "SET_VOICE_SETTINGS",
      "CAPTURE_SHORTCUT",
      "SET_ACTIVITY",
      "SEND_ACTIVITY_JOIN_INVITE",
      "CLOSE_ACTIVITY_JOIN_REQUEST",
      "ACTIVITY_INVITE_USER",
      "ACCEPT_ACTIVITY_INVITE",
      "INVITE_BROWSER",
      "DEEP_LINK",
      "CONNECTIONS_CALLBACK",
      "BRAINTREE_POPUP_BRIDGE_CALLBACK",
      "GIFT_CODE_BROWSER",
      "GUILD_TEMPLATE_BROWSER",
      "OVERLAY",
      "BROWSER_HANDOFF",
      "SET_CERTIFIED_DEVICES",
      "GET_IMAGE",
      "CREATE_LOBBY",
      "UPDATE_LOBBY",
      "DELETE_LOBBY",
      "UPDATE_LOBBY_MEMBER",
      "CONNECT_TO_LOBBY",
      "DISCONNECT_FROM_LOBBY",
      "SEND_TO_LOBBY",
      "SEARCH_LOBBIES",
      "CONNECT_TO_LOBBY_VOICE",
      "DISCONNECT_FROM_LOBBY_VOICE",
      "SET_OVERLAY_LOCKED",
      "OPEN_OVERLAY_ACTIVITY_INVITE",
      "OPEN_OVERLAY_GUILD_INVITE",
      "OPEN_OVERLAY_VOICE_SETTINGS",
      "VALIDATE_APPLICATION",
      "GET_ENTITLEMENT_TICKET",
      "GET_APPLICATION_TICKET",
      "START_PURCHASE",
      "GET_SKUS",
      "GET_ENTITLEMENTS",
      "GET_NETWORKING_CONFIG",
      "NETWORKING_SYSTEM_METRICS",
      "NETWORKING_PEER_METRICS",
      "NETWORKING_CREATE_TOKEN",
      "SET_USER_ACHIEVEMENT",
      "GET_USER_ACHIEVEMENTS"
    ]);
    exports.RPCEvents = keyMirror([
      "CURRENT_USER_UPDATE",
      "GUILD_STATUS",
      "GUILD_CREATE",
      "CHANNEL_CREATE",
      "RELATIONSHIP_UPDATE",
      "VOICE_CHANNEL_SELECT",
      "VOICE_STATE_CREATE",
      "VOICE_STATE_DELETE",
      "VOICE_STATE_UPDATE",
      "VOICE_SETTINGS_UPDATE",
      "VOICE_SETTINGS_UPDATE_2",
      "VOICE_CONNECTION_STATUS",
      "SPEAKING_START",
      "SPEAKING_STOP",
      "GAME_JOIN",
      "GAME_SPECTATE",
      "ACTIVITY_JOIN",
      "ACTIVITY_JOIN_REQUEST",
      "ACTIVITY_SPECTATE",
      "ACTIVITY_INVITE",
      "NOTIFICATION_CREATE",
      "MESSAGE_CREATE",
      "MESSAGE_UPDATE",
      "MESSAGE_DELETE",
      "LOBBY_DELETE",
      "LOBBY_UPDATE",
      "LOBBY_MEMBER_CONNECT",
      "LOBBY_MEMBER_DISCONNECT",
      "LOBBY_MEMBER_UPDATE",
      "LOBBY_MESSAGE",
      "CAPTURE_SHORTCUT_CHANGE",
      "OVERLAY",
      "OVERLAY_UPDATE",
      "ENTITLEMENT_CREATE",
      "ENTITLEMENT_DELETE",
      "USER_ACHIEVEMENT_UPDATE",
      "READY",
      "ERROR"
    ]);
    exports.RPCErrors = {
      CAPTURE_SHORTCUT_ALREADY_LISTENING: 5004,
      GET_GUILD_TIMED_OUT: 5002,
      INVALID_ACTIVITY_JOIN_REQUEST: 4012,
      INVALID_ACTIVITY_SECRET: 5005,
      INVALID_CHANNEL: 4005,
      INVALID_CLIENTID: 4007,
      INVALID_COMMAND: 4002,
      INVALID_ENTITLEMENT: 4015,
      INVALID_EVENT: 4004,
      INVALID_GIFT_CODE: 4016,
      INVALID_GUILD: 4003,
      INVALID_INVITE: 4011,
      INVALID_LOBBY: 4013,
      INVALID_LOBBY_SECRET: 4014,
      INVALID_ORIGIN: 4008,
      INVALID_PAYLOAD: 4e3,
      INVALID_PERMISSIONS: 4006,
      INVALID_TOKEN: 4009,
      INVALID_USER: 4010,
      LOBBY_FULL: 5007,
      NO_ELIGIBLE_ACTIVITY: 5006,
      OAUTH2_ERROR: 5e3,
      PURCHASE_CANCELED: 5008,
      PURCHASE_ERROR: 5009,
      RATE_LIMITED: 5011,
      SELECT_CHANNEL_TIMED_OUT: 5001,
      SELECT_VOICE_FORCE_REQUIRED: 5003,
      SERVICE_UNAVAILABLE: 1001,
      TRANSACTION_ABORTED: 1002,
      UNAUTHORIZED_FOR_ACHIEVEMENT: 5010,
      UNKNOWN_ERROR: 1e3
    };
    exports.RPCCloseCodes = {
      CLOSE_NORMAL: 1e3,
      CLOSE_UNSUPPORTED: 1003,
      CLOSE_ABNORMAL: 1006,
      INVALID_CLIENTID: 4e3,
      INVALID_ORIGIN: 4001,
      RATELIMITED: 4002,
      TOKEN_REVOKED: 4003,
      INVALID_VERSION: 4004,
      INVALID_ENCODING: 4005
    };
    exports.LobbyTypes = {
      PRIVATE: 1,
      PUBLIC: 2
    };
    exports.RelationshipTypes = {
      NONE: 0,
      FRIEND: 1,
      BLOCKED: 2,
      PENDING_INCOMING: 3,
      PENDING_OUTGOING: 4,
      IMPLICIT: 5
    };
  }
});

// node_modules/ws/lib/constants.js
var require_constants5 = __commonJS({
  "node_modules/ws/lib/constants.js"(exports, module2) {
    "use strict";
    module2.exports = {
      BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"],
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      EMPTY_BUFFER: Buffer.alloc(0),
      NOOP: () => {
      }
    };
  }
});

// node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "node_modules/ws/lib/buffer-util.js"(exports, module2) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants5();
    function concat(list, totalLength) {
      if (list.length === 0)
        return EMPTY_BUFFER;
      if (list.length === 1)
        return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength)
        return target.slice(0, offset);
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      const length = buffer.length;
      for (let i = 0; i < length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.byteLength === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data))
        return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = Buffer.from(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    try {
      const bufferUtil = require("bufferutil");
      const bu = bufferUtil.BufferUtil || bufferUtil;
      module2.exports = {
        concat,
        mask(source, mask, output, offset, length) {
          if (length < 48)
            _mask(source, mask, output, offset, length);
          else
            bu.mask(source, mask, output, offset, length);
        },
        toArrayBuffer,
        toBuffer,
        unmask(buffer, mask) {
          if (buffer.length < 32)
            _unmask(buffer, mask);
          else
            bu.unmask(buffer, mask);
        }
      };
    } catch (e) {
      module2.exports = {
        concat,
        mask: _mask,
        toArrayBuffer,
        toBuffer,
        unmask: _unmask
      };
    }
  }
});

// node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "node_modules/ws/lib/limiter.js"(exports, module2) {
    "use strict";
    var kDone = Symbol("kDone");
    var kRun = Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency)
          return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module2.exports = Limiter;
  }
});

// node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "node_modules/ws/lib/permessage-deflate.js"(exports, module2) {
    "use strict";
    var zlib = require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode, NOOP } = require_constants5();
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = Symbol("permessage-deflate");
    var kTotalLength = Symbol("total-length");
    var kCallback = Symbol("callback");
    var kBuffers = Symbol("buffers");
    var kError = Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {Boolean} [isServer=false] Create the instance in either server or
       *     client mode
       * @param {Number} [maxPayload=0] The maximum allowed message length
       */
      constructor(options, isServer, maxPayload) {
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {Buffer} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin)
          this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {Buffer} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("error", NOOP);
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin)
            data2 = data2.slice(0, data2.length - 4);
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module2.exports = PerMessageDeflate;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "node_modules/ws/lib/validation.js"(exports, module2) {
    "use strict";
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    try {
      let isValidUTF8 = require("utf-8-validate");
      if (typeof isValidUTF8 === "object") {
        isValidUTF8 = isValidUTF8.Validation.isValidUTF8;
      }
      module2.exports = {
        isValidStatusCode,
        isValidUTF8(buf) {
          return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8(buf);
        }
      };
    } catch (e) {
      module2.exports = {
        isValidStatusCode,
        isValidUTF8: _isValidUTF8
      };
    }
  }
});

// node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "node_modules/ws/lib/receiver.js"(exports, module2) {
    "use strict";
    var { Writable } = require("stream");
    var PerMessageDeflate = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants5();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var Receiver = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {String} [binaryType=nodebuffer] The type for binary data
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Boolean} [isServer=false] Specifies whether to operate in client or
       *     server mode
       * @param {Number} [maxPayload=0] The maximum allowed message length
       */
      constructor(binaryType, extensions, isServer, maxPayload) {
        super();
        this._binaryType = binaryType || BINARY_TYPES[0];
        this[kWebSocket] = void 0;
        this._extensions = extensions || {};
        this._isServer = !!isServer;
        this._maxPayload = maxPayload | 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._state = GET_INFO;
        this._loop = false;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO)
          return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length)
          return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = buf.slice(n);
          return buf.slice(0, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = buf.slice(n);
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        let err;
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              err = this.getInfo();
              break;
            case GET_PAYLOAD_LENGTH_16:
              err = this.getPayloadLength16();
              break;
            case GET_PAYLOAD_LENGTH_64:
              err = this.getPayloadLength64();
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              err = this.getData(cb);
              break;
            default:
              this._loop = false;
              return;
          }
        } while (this._loop);
        cb(err);
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      getInfo() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          this._loop = false;
          return error(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
          this._loop = false;
          return error(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            this._loop = false;
            return error(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
          }
          if (!this._fragmented) {
            this._loop = false;
            return error(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            this._loop = false;
            return error(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            this._loop = false;
            return error(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
          }
          if (compressed) {
            this._loop = false;
            return error(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
          }
          if (this._payloadLength > 125) {
            this._loop = false;
            return error(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
          }
        } else {
          this._loop = false;
          return error(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
        }
        if (!this._fin && !this._fragmented)
          this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            this._loop = false;
            return error(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
          }
        } else if (this._masked) {
          this._loop = false;
          return error(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
        }
        if (this._payloadLength === 126)
          this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127)
          this._state = GET_PAYLOAD_LENGTH_64;
        else
          return this.haveLength();
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      getPayloadLength16() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        return this.haveLength();
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      getPayloadLength64() {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          this._loop = false;
          return error(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        return this.haveLength();
      }
      /**
       * Payload length has been read.
       *
       * @return {(RangeError|undefined)} A possible error
       * @private
       */
      haveLength() {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            this._loop = false;
            return error(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
          }
        }
        if (this._masked)
          this._state = GET_MASK;
        else
          this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked)
            unmask(data, this._mask);
        }
        if (this._opcode > 7)
          return this.controlMessage(data);
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        return this.dataMessage();
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err)
            return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              return cb(
                error(
                  RangeError,
                  "Max payload size exceeded",
                  false,
                  1009,
                  "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
                )
              );
            }
            this._fragments.push(buf);
          }
          const er = this.dataMessage();
          if (er)
            return cb(er);
          this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @return {(Error|undefined)} A possible error
       * @private
       */
      dataMessage() {
        if (this._fin) {
          const messageLength = this._messageLength;
          const fragments = this._fragments;
          this._totalPayloadLength = 0;
          this._messageLength = 0;
          this._fragmented = 0;
          this._fragments = [];
          if (this._opcode === 2) {
            let data;
            if (this._binaryType === "nodebuffer") {
              data = concat(fragments, messageLength);
            } else if (this._binaryType === "arraybuffer") {
              data = toArrayBuffer(concat(fragments, messageLength));
            } else {
              data = fragments;
            }
            this.emit("message", data);
          } else {
            const buf = concat(fragments, messageLength);
            if (!isValidUTF8(buf)) {
              this._loop = false;
              return error(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
            }
            this.emit("message", buf.toString());
          }
        }
        this._state = GET_INFO;
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data) {
        if (this._opcode === 8) {
          this._loop = false;
          if (data.length === 0) {
            this.emit("conclude", 1005, "");
            this.end();
          } else if (data.length === 1) {
            return error(
              RangeError,
              "invalid payload length 1",
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              return error(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
            }
            const buf = data.slice(2);
            if (!isValidUTF8(buf)) {
              return error(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
            }
            this.emit("conclude", code, buf.toString());
            this.end();
          }
        } else if (this._opcode === 9) {
          this.emit("ping", data);
        } else {
          this.emit("pong", data);
        }
        this._state = GET_INFO;
      }
    };
    module2.exports = Receiver;
    function error(ErrorCtor, message, prefix, statusCode, errorCode) {
      const err = new ErrorCtor(
        prefix ? `Invalid WebSocket frame: ${message}` : message
      );
      Error.captureStackTrace(err, error);
      err.code = errorCode;
      err[kStatusCode] = statusCode;
      return err;
    }
  }
});

// node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "node_modules/ws/lib/sender.js"(exports, module2) {
    "use strict";
    var net = require("net");
    var tls = require("tls");
    var { randomFillSync } = require("crypto");
    var PerMessageDeflate = require_permessage_deflate();
    var { EMPTY_BUFFER } = require_constants5();
    var { isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var mask = Buffer.alloc(4);
    var Sender = class {
      /**
       * Creates a Sender instance.
       *
       * @param {(net.Socket|tls.Socket)} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       */
      constructor(socket, extensions) {
        this._extensions = extensions || {};
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {Buffer} data The data to frame
       * @param {Object} options Options object
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {Buffer[]} The framed data as a list of `Buffer` instances
       * @public
       */
      static frame(data, options) {
        const merge = options.mask && options.readOnly;
        let offset = options.mask ? 6 : 2;
        let payloadLength = data.length;
        if (data.length >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (data.length > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? data.length + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1)
          target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(data.length, 2);
        } else if (payloadLength === 127) {
          target.writeUInt32BE(0, 2);
          target.writeUInt32BE(data.length, 6);
        }
        if (!options.mask)
          return [target, data];
        randomFillSync(mask, 0, 4);
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (merge) {
          applyMask(data, mask, target, offset, data.length);
          return [target];
        }
        applyMask(data, mask, data, 0, data.length);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {String} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask2, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || data === "") {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          buf.write(data, 2);
        }
        if (this._deflating) {
          this.enqueue([this.doClose, buf, mask2, cb]);
        } else {
          this.doClose(buf, mask2, cb);
        }
      }
      /**
       * Frames and sends a close message.
       *
       * @param {Buffer} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @private
       */
      doClose(data, mask2, cb) {
        this.sendFrame(
          Sender.frame(data, {
            fin: true,
            rsv1: false,
            opcode: 8,
            mask: mask2,
            readOnly: false
          }),
          cb
        );
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask2, cb) {
        const buf = toBuffer(data);
        if (buf.length > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        if (this._deflating) {
          this.enqueue([this.doPing, buf, mask2, toBuffer.readOnly, cb]);
        } else {
          this.doPing(buf, mask2, toBuffer.readOnly, cb);
        }
      }
      /**
       * Frames and sends a ping message.
       *
       * @param {Buffer} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Boolean} [readOnly=false] Specifies whether `data` can be modified
       * @param {Function} [cb] Callback
       * @private
       */
      doPing(data, mask2, readOnly, cb) {
        this.sendFrame(
          Sender.frame(data, {
            fin: true,
            rsv1: false,
            opcode: 9,
            mask: mask2,
            readOnly
          }),
          cb
        );
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask2, cb) {
        const buf = toBuffer(data);
        if (buf.length > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        if (this._deflating) {
          this.enqueue([this.doPong, buf, mask2, toBuffer.readOnly, cb]);
        } else {
          this.doPong(buf, mask2, toBuffer.readOnly, cb);
        }
      }
      /**
       * Frames and sends a pong message.
       *
       * @param {Buffer} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Boolean} [readOnly=false] Specifies whether `data` can be modified
       * @param {Function} [cb] Callback
       * @private
       */
      doPong(data, mask2, readOnly, cb) {
        this.sendFrame(
          Sender.frame(data, {
            fin: true,
            rsv1: false,
            opcode: 10,
            mask: mask2,
            readOnly
          }),
          cb
        );
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const buf = toBuffer(data);
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate) {
            rsv1 = buf.length >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin)
          this._firstFragment = true;
        if (perMessageDeflate) {
          const opts = {
            fin: options.fin,
            rsv1,
            opcode,
            mask: options.mask,
            readOnly: toBuffer.readOnly
          };
          if (this._deflating) {
            this.enqueue([this.dispatch, buf, this._compress, opts, cb]);
          } else {
            this.dispatch(buf, this._compress, opts, cb);
          }
        } else {
          this.sendFrame(
            Sender.frame(buf, {
              fin: options.fin,
              rsv1: false,
              opcode,
              mask: options.mask,
              readOnly: toBuffer.readOnly
            }),
            cb
          );
        }
      }
      /**
       * Dispatches a data message.
       *
       * @param {Buffer} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += data.length;
        this._deflating = true;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            if (typeof cb === "function")
              cb(err);
            for (let i = 0; i < this._queue.length; i++) {
              const callback = this._queue[i][4];
              if (typeof callback === "function")
                callback(err);
            }
            return;
          }
          this._bufferedBytes -= data.length;
          this._deflating = false;
          options.readOnly = false;
          this.sendFrame(Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (!this._deflating && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[1].length;
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[1].length;
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {Buffer[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module2.exports = Sender;
  }
});

// node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "node_modules/ws/lib/event-target.js"(exports, module2) {
    "use strict";
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @param {Object} target A reference to the target to which the event was
       *     dispatched
       */
      constructor(type, target) {
        this.target = target;
        this.type = type;
      }
    };
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {(String|Buffer|ArrayBuffer|Buffer[])} data The received data
       * @param {WebSocket} target A reference to the target to which the event was
       *     dispatched
       */
      constructor(data, target) {
        super("message", target);
        this.data = data;
      }
    };
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {Number} code The status code explaining why the connection is being
       *     closed
       * @param {String} reason A human-readable string explaining why the
       *     connection is closing
       * @param {WebSocket} target A reference to the target to which the event was
       *     dispatched
       */
      constructor(code, reason, target) {
        super("close", target);
        this.wasClean = target._closeFrameReceived && target._closeFrameSent;
        this.reason = reason;
        this.code = code;
      }
    };
    var OpenEvent = class extends Event {
      /**
       * Create a new `OpenEvent`.
       *
       * @param {WebSocket} target A reference to the target to which the event was
       *     dispatched
       */
      constructor(target) {
        super("open", target);
      }
    };
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {Object} error The error that generated this event
       * @param {WebSocket} target A reference to the target to which the event was
       *     dispatched
       */
      constructor(error, target) {
        super("error", target);
        this.message = error.message;
        this.error = error;
      }
    };
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {Function} listener The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean`` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, listener, options) {
        if (typeof listener !== "function")
          return;
        function onMessage(data) {
          listener.call(this, new MessageEvent(data, this));
        }
        function onClose(code, message) {
          listener.call(this, new CloseEvent(code, message, this));
        }
        function onError(error) {
          listener.call(this, new ErrorEvent(error, this));
        }
        function onOpen() {
          listener.call(this, new OpenEvent(this));
        }
        const method = options && options.once ? "once" : "on";
        if (type === "message") {
          onMessage._listener = listener;
          this[method](type, onMessage);
        } else if (type === "close") {
          onClose._listener = listener;
          this[method](type, onClose);
        } else if (type === "error") {
          onError._listener = listener;
          this[method](type, onError);
        } else if (type === "open") {
          onOpen._listener = listener;
          this[method](type, onOpen);
        } else {
          this[method](type, listener);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {Function} listener The listener to remove
       * @public
       */
      removeEventListener(type, listener) {
        const listeners = this.listeners(type);
        for (let i = 0; i < listeners.length; i++) {
          if (listeners[i] === listener || listeners[i]._listener === listener) {
            this.removeListener(type, listeners[i]);
          }
        }
      }
    };
    module2.exports = EventTarget;
  }
});

// node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "node_modules/ws/lib/extension.js"(exports, module2) {
    "use strict";
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function push(dest, name, elem) {
      if (dest[name] === void 0)
        dest[name] = [elem];
      else
        dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      if (header === void 0 || header === "")
        return offers;
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1)
              start = i;
            else if (!mustUnescape)
              mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1)
                start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1)
        end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension) => {
        let configurations = extensions[extension];
        if (!Array.isArray(configurations))
          configurations = [configurations];
        return configurations.map((params) => {
          return [extension].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values))
                values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module2.exports = { format, parse };
  }
});

// node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/ws/lib/websocket.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var https = require("https");
    var http = require("http");
    var net = require("net");
    var tls = require("tls");
    var { randomBytes, createHash } = require("crypto");
    var { Readable } = require("stream");
    var { URL } = require("url");
    var PerMessageDeflate = require_permessage_deflate();
    var Receiver = require_receiver();
    var Sender = require_sender();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      GUID,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants5();
    var { addEventListener, removeEventListener } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var protocolVersions = [8, 13];
    var closeTimeout = 30 * 1e3;
    var WebSocket = class extends EventEmitter {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = "";
        this._closeTimer = null;
        this._extensions = {};
        this._protocol = "";
        this._readyState = WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (Array.isArray(protocols)) {
            protocols = protocols.join(", ");
          } else if (typeof protocols === "object" && protocols !== null) {
            options = protocols;
            protocols = void 0;
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._isServer = true;
        }
      }
      /**
       * This deviates from the WHATWG interface since ws doesn't support the
       * required default "blob" type (instead we define a custom "nodebuffer"
       * type).
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type))
          return;
        this._binaryType = type;
        if (this._receiver)
          this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket)
          return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return void 0;
      }
      /* istanbul ignore next */
      set onclose(listener) {
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return void 0;
      }
      /* istanbul ignore next */
      set onerror(listener) {
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return void 0;
      }
      /* istanbul ignore next */
      set onopen(listener) {
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return void 0;
      }
      /* istanbul ignore next */
      set onmessage(listener) {
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {(net.Socket|tls.Socket)} socket The network socket between the
       *     server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Number} [maxPayload=0] The maximum allowed message size
       * @private
       */
      setSocket(socket, head, maxPayload) {
        const receiver = new Receiver(
          this.binaryType,
          this._extensions,
          this._isServer,
          maxPayload
        );
        this._sender = new Sender(socket, this._extensions);
        this._receiver = receiver;
        this._socket = socket;
        receiver[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        socket.setTimeout(0);
        socket.setNoDelay();
        if (head.length > 0)
          socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
          this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {String} [data] A string explaining why the connection is closing
       * @public
       */
      close(code, data) {
        if (this.readyState === WebSocket.CLOSED)
          return;
        if (this.readyState === WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          return abortHandshake(this, this._req, msg);
        }
        if (this.readyState === WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err)
            return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        this._closeTimer = setTimeout(
          this._socket.destroy.bind(this._socket),
          closeTimeout
        );
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === WebSocket.CLOSED)
          return;
        if (this.readyState === WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          return abortHandshake(this, this._req, msg);
        }
        if (this._socket) {
          this._readyState = WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket.prototype, `on${method}`, {
        enumerable: true,
        get() {
          const listeners = this.listeners(method);
          for (let i = 0; i < listeners.length; i++) {
            if (listeners[i]._listener)
              return listeners[i]._listener;
          }
          return void 0;
        },
        set(listener) {
          const listeners = this.listeners(method);
          for (let i = 0; i < listeners.length; i++) {
            if (listeners[i]._listener)
              this.removeListener(method, listeners[i]);
          }
          this.addEventListener(method, listener);
        }
      });
    });
    WebSocket.prototype.addEventListener = addEventListener;
    WebSocket.prototype.removeEventListener = removeEventListener;
    module2.exports = WebSocket;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        createConnection: void 0,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: void 0,
        host: void 0,
        path: void 0,
        port: void 0
      };
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL) {
        parsedUrl = address;
        websocket._url = address.href;
      } else {
        parsedUrl = new URL(address);
        websocket._url = address;
      }
      const isUnixSocket = parsedUrl.protocol === "ws+unix:";
      if (!parsedUrl.host && (!isUnixSocket || !parsedUrl.pathname)) {
        const err = new Error(`Invalid URL: ${websocket.url}`);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const isSecure = parsedUrl.protocol === "wss:" || parsedUrl.protocol === "https:";
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const get = isSecure ? https.get : http.get;
      let perMessageDeflate;
      opts.createConnection = isSecure ? tlsConnect : netConnect;
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket",
        ...opts.headers
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(
          opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
          false,
          opts.maxPayload
        );
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols) {
        opts.headers["Sec-WebSocket-Protocol"] = protocols;
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isUnixSocket) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalUnixSocket = isUnixSocket;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isUnixSocket ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else {
          const isSameHost = isUnixSocket ? websocket._originalUnixSocket ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalUnixSocket ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost)
              delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
      }
      let req = websocket._req = get(opts);
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req.aborted)
          return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL(location, address);
          } catch (err) {
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket.CONNECTING)
          return;
        req = websocket._req = null;
        if (res.headers.upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        const protList = (protocols || "").split(/, */);
        let protError;
        if (!protocols && serverProt) {
          protError = "Server sent a subprotocol but none was requested";
        } else if (protocols && !serverProt) {
          protError = "Server sent no subprotocol";
        } else if (serverProt && !protList.includes(serverProt)) {
          protError = "Server sent an invalid subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt)
          websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length) {
            if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
              const message = "Server indicated an extension that was not requested";
              abortHandshake(websocket, socket, message);
              return;
            }
            try {
              perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
            } catch (err) {
              const message = "Invalid Sec-WebSocket-Extensions header";
              abortHandshake(websocket, socket, message);
              return;
            }
            websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
          }
        }
        websocket.setSocket(socket, head, opts.maxPayload);
      });
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket.CLOSING;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        stream.once("abort", websocket.emitClose.bind(websocket));
        websocket.emit("error", err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = toBuffer(data).length;
        if (websocket._socket)
          websocket._sender._bufferedBytes += length;
        else
          websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        cb(err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0)
        return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005)
        websocket.close();
      else
        websocket.close(code, reason);
    }
    function receiverOnDrain() {
      this[kWebSocket]._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      websocket.emit("error", err);
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data) {
      this[kWebSocket].emit("message", data);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      websocket.pong(data, !websocket._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket.CLOSING;
      let chunk;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket.CLOSING;
        this.destroy();
      }
    }
  }
});

// node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "node_modules/ws/lib/stream.js"(exports, module2) {
    "use strict";
    var { Duplex } = require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream(ws, options) {
      let resumeOnReceiverDrain = true;
      let terminateOnDestroy = true;
      function receiverOnDrain() {
        if (resumeOnReceiverDrain)
          ws._socket.resume();
      }
      if (ws.readyState === ws.CONNECTING) {
        ws.once("open", function open() {
          ws._receiver.removeAllListeners("drain");
          ws._receiver.on("drain", receiverOnDrain);
        });
      } else {
        ws._receiver.removeAllListeners("drain");
        ws._receiver.on("drain", receiverOnDrain);
      }
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg) {
        if (!duplex.push(msg)) {
          resumeOnReceiverDrain = false;
          ws._socket.pause();
        }
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed)
          return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed)
          return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called)
            callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy)
          ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null)
          return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted)
            duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if ((ws.readyState === ws.OPEN || ws.readyState === ws.CLOSING) && !resumeOnReceiverDrain) {
          resumeOnReceiverDrain = true;
          if (!ws._receiver._writableState.needDrain)
            ws._socket.resume();
        }
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module2.exports = createWebSocketStream;
  }
});

// node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "node_modules/ws/lib/websocket-server.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var http = require("http");
    var https = require("https");
    var net = require("net");
    var tls = require("tls");
    var { createHash } = require("crypto");
    var PerMessageDeflate = require_permessage_deflate();
    var WebSocket = require_websocket();
    var { format, parse } = require_extension();
    var { GUID, kWebSocket } = require_constants5();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer = class extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          maxPayload: 100 * 1024 * 1024,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true)
          options.perMessageDeflate = {};
        if (options.clientTracking)
          this.clients = /* @__PURE__ */ new Set();
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server)
          return null;
        return this._server.address();
      }
      /**
       * Close the server.
       *
       * @param {Function} [cb] Callback
       * @public
       */
      close(cb) {
        if (cb)
          this.once("close", cb);
        if (this._state === CLOSED) {
          process.nextTick(emitClose, this);
          return;
        }
        if (this._state === CLOSING)
          return;
        this._state = CLOSING;
        if (this.clients) {
          for (const client of this.clients)
            client.terminate();
        }
        const server = this._server;
        if (server) {
          this._removeListeners();
          this._removeListeners = this._server = null;
          if (this.options.port != null) {
            server.close(emitClose.bind(void 0, this));
            return;
          }
        }
        process.nextTick(emitClose, this);
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path)
            return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {(net.Socket|tls.Socket)} socket The network socket between the
       *     server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"] !== void 0 ? req.headers["sec-websocket-key"].trim() : false;
        const version = +req.headers["sec-websocket-version"];
        const extensions = {};
        if (req.method !== "GET" || req.headers.upgrade.toLowerCase() !== "websocket" || !key || !keyRegex.test(key) || version !== 8 && version !== 13 || !this.shouldHandle(req)) {
          return abortHandshake(socket, 400);
        }
        if (this.options.perMessageDeflate) {
          const perMessageDeflate = new PerMessageDeflate(
            this.options.perMessageDeflate,
            true,
            this.options.maxPayload
          );
          try {
            const offers = parse(req.headers["sec-websocket-extensions"]);
            if (offers[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
              extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            return abortHandshake(socket, 400);
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(key, extensions, req, socket, head, cb);
            });
            return;
          }
          if (!this.options.verifyClient(info))
            return abortHandshake(socket, 401);
        }
        this.completeUpgrade(key, extensions, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Object} extensions The accepted extensions
       * @param {http.IncomingMessage} req The request object
       * @param {(net.Socket|tls.Socket)} socket The network socket between the
       *     server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(key, extensions, req, socket, head, cb) {
        if (!socket.readable || !socket.writable)
          return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING)
          return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new WebSocket(null);
        let protocol = req.headers["sec-websocket-protocol"];
        if (protocol) {
          protocol = protocol.split(",").map(trim);
          if (this.options.handleProtocols) {
            protocol = this.options.handleProtocols(protocol, req);
          } else {
            protocol = protocol[0];
          }
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
          const params = extensions[PerMessageDeflate.extensionName].params;
          const value = format({
            [PerMessageDeflate.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, this.options.maxPayload);
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => this.clients.delete(ws));
        }
        cb(ws, req);
      }
    };
    module2.exports = WebSocketServer;
    function addListeners(server, map) {
      for (const event of Object.keys(map))
        server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      if (socket.writable) {
        message = message || http.STATUS_CODES[code];
        headers = {
          Connection: "close",
          "Content-Type": "text/html",
          "Content-Length": Buffer.byteLength(message),
          ...headers
        };
        socket.write(
          `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
        );
      }
      socket.removeListener("error", socketOnError);
      socket.destroy();
    }
    function trim(str) {
      return str.trim();
    }
  }
});

// node_modules/ws/index.js
var require_ws = __commonJS({
  "node_modules/ws/index.js"(exports, module2) {
    "use strict";
    var WebSocket = require_websocket();
    WebSocket.createWebSocketStream = require_stream();
    WebSocket.Server = require_websocket_server();
    WebSocket.Receiver = require_receiver();
    WebSocket.Sender = require_sender();
    module2.exports = WebSocket;
  }
});

// node_modules/discord-rpc/src/transports/websocket.js
var require_websocket2 = __commonJS({
  "node_modules/discord-rpc/src/transports/websocket.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var { browser } = require_constants4();
    var WebSocket = browser ? window.WebSocket : require_ws();
    var pack = (d) => JSON.stringify(d);
    var unpack = (s) => JSON.parse(s);
    var WebSocketTransport = class extends EventEmitter {
      constructor(client) {
        super();
        this.client = client;
        this.ws = null;
        this.tries = 0;
      }
      async connect() {
        const port = 6463 + this.tries % 10;
        this.tries += 1;
        this.ws = new WebSocket(
          `ws://127.0.0.1:${port}/?v=1&client_id=${this.client.clientId}`,
          browser ? void 0 : { origin: this.client.options.origin }
        );
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);
        this.ws.onmessage = this.onMessage.bind(this);
      }
      onOpen() {
        this.emit("open");
      }
      onClose(event) {
        if (!event.wasClean) {
          return;
        }
        this.emit("close", event);
      }
      onError(event) {
        try {
          this.ws.close();
        } catch {
        }
        if (this.tries > 20) {
          this.emit("error", event.error);
        } else {
          setTimeout(() => {
            this.connect();
          }, 250);
        }
      }
      onMessage(event) {
        this.emit("message", unpack(event.data));
      }
      send(data) {
        this.ws.send(pack(data));
      }
      ping() {
      }
      // eslint-disable-line no-empty-function
      close() {
        return new Promise((r) => {
          this.once("close", r);
          this.ws.close();
        });
      }
    };
    module2.exports = WebSocketTransport;
  }
});

// node_modules/discord-rpc/src/transports/index.js
var require_transports = __commonJS({
  "node_modules/discord-rpc/src/transports/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      ipc: require_ipc(),
      websocket: require_websocket2()
    };
  }
});

// node_modules/discord-rpc/src/client.js
var require_client = __commonJS({
  "node_modules/discord-rpc/src/client.js"(exports, module2) {
    "use strict";
    var EventEmitter = require("events");
    var { setTimeout: setTimeout2, clearTimeout: clearTimeout2 } = require("timers");
    var fetch2 = require_lib2();
    var transports = require_transports();
    var { RPCCommands, RPCEvents, RelationshipTypes } = require_constants4();
    var { pid: getPid, uuid } = require_util();
    function subKey(event, args) {
      return `${event}${JSON.stringify(args)}`;
    }
    var RPCClient = class extends EventEmitter {
      /**
       * @param {RPCClientOptions} [options] Options for the client.
       * You must provide a transport
       */
      constructor(options = {}) {
        super();
        this.options = options;
        this.accessToken = null;
        this.clientId = null;
        this.application = null;
        this.user = null;
        const Transport = transports[options.transport];
        if (!Transport) {
          throw new TypeError("RPC_INVALID_TRANSPORT", options.transport);
        }
        this.fetch = (method, path, { data, query } = {}) => fetch2(`${this.fetch.endpoint}${path}${query ? new URLSearchParams(query) : ""}`, {
          method,
          body: data,
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        }).then(async (r) => {
          const body = await r.json();
          if (!r.ok) {
            const e = new Error(r.status);
            e.body = body;
            throw e;
          }
          return body;
        });
        this.fetch.endpoint = "https://discord.com/api";
        this.transport = new Transport(this);
        this.transport.on("message", this._onRpcMessage.bind(this));
        this._expecting = /* @__PURE__ */ new Map();
        this._connectPromise = void 0;
      }
      /**
       * Search and connect to RPC
       */
      connect(clientId2) {
        if (this._connectPromise) {
          return this._connectPromise;
        }
        this._connectPromise = new Promise((resolve, reject) => {
          this.clientId = clientId2;
          const timeout = setTimeout2(() => reject(new Error("RPC_CONNECTION_TIMEOUT")), 1e4);
          timeout.unref();
          this.once("connected", () => {
            clearTimeout2(timeout);
            resolve(this);
          });
          this.transport.once("close", () => {
            this._expecting.forEach((e) => {
              e.reject(new Error("connection closed"));
            });
            this.emit("disconnected");
            reject(new Error("connection closed"));
          });
          this.transport.connect().catch(reject);
        });
        return this._connectPromise;
      }
      /**
       * @typedef {RPCLoginOptions}
       * @param {string} clientId Client ID
       * @param {string} [clientSecret] Client secret
       * @param {string} [accessToken] Access token
       * @param {string} [rpcToken] RPC token
       * @param {string} [tokenEndpoint] Token endpoint
       * @param {string[]} [scopes] Scopes to authorize with
       */
      /**
       * Performs authentication flow. Automatically calls Client#connect if needed.
       * @param {RPCLoginOptions} options Options for authentication.
       * At least one property must be provided to perform login.
       * @example client.login({ clientId: '1234567', clientSecret: 'abcdef123' });
       * @returns {Promise<RPCClient>}
       */
      async login(options = {}) {
        let { clientId: clientId2, accessToken } = options;
        await this.connect(clientId2);
        if (!options.scopes) {
          this.emit("ready");
          return this;
        }
        if (!accessToken) {
          accessToken = await this.authorize(options);
        }
        return this.authenticate(accessToken);
      }
      /**
       * Request
       * @param {string} cmd Command
       * @param {Object} [args={}] Arguments
       * @param {string} [evt] Event
       * @returns {Promise}
       * @private
       */
      request(cmd, args, evt) {
        return new Promise((resolve, reject) => {
          const nonce = uuid();
          this.transport.send({ cmd, args, evt, nonce });
          this._expecting.set(nonce, { resolve, reject });
        });
      }
      /**
       * Message handler
       * @param {Object} message message
       * @private
       */
      _onRpcMessage(message) {
        if (message.cmd === RPCCommands.DISPATCH && message.evt === RPCEvents.READY) {
          if (message.data.user) {
            this.user = message.data.user;
          }
          this.emit("connected");
        } else if (this._expecting.has(message.nonce)) {
          const { resolve, reject } = this._expecting.get(message.nonce);
          if (message.evt === "ERROR") {
            const e = new Error(message.data.message);
            e.code = message.data.code;
            e.data = message.data;
            reject(e);
          } else {
            resolve(message.data);
          }
          this._expecting.delete(message.nonce);
        } else {
          this.emit(message.evt, message.data);
        }
      }
      /**
       * Authorize
       * @param {Object} options options
       * @returns {Promise}
       * @private
       */
      async authorize({ scopes, clientSecret, rpcToken, redirectUri, prompt: prompt2 } = {}) {
        if (clientSecret && rpcToken === true) {
          const body = await this.fetch("POST", "/oauth2/token/rpc", {
            data: new URLSearchParams({
              client_id: this.clientId,
              client_secret: clientSecret
            })
          });
          rpcToken = body.rpc_token;
        }
        const { code } = await this.request("AUTHORIZE", {
          scopes,
          client_id: this.clientId,
          prompt: prompt2,
          rpc_token: rpcToken
        });
        const response = await this.fetch("POST", "/oauth2/token", {
          data: new URLSearchParams({
            client_id: this.clientId,
            client_secret: clientSecret,
            code,
            grant_type: "authorization_code",
            redirect_uri: redirectUri
          })
        });
        return response.access_token;
      }
      /**
       * Authenticate
       * @param {string} accessToken access token
       * @returns {Promise}
       * @private
       */
      authenticate(accessToken) {
        return this.request("AUTHENTICATE", { access_token: accessToken }).then(({ application, user }) => {
          this.accessToken = accessToken;
          this.application = application;
          this.user = user;
          this.emit("ready");
          return this;
        });
      }
      /**
       * Fetch a guild
       * @param {Snowflake} id Guild ID
       * @param {number} [timeout] Timeout request
       * @returns {Promise<Guild>}
       */
      getGuild(id, timeout) {
        return this.request(RPCCommands.GET_GUILD, { guild_id: id, timeout });
      }
      /**
       * Fetch all guilds
       * @param {number} [timeout] Timeout request
       * @returns {Promise<Collection<Snowflake, Guild>>}
       */
      getGuilds(timeout) {
        return this.request(RPCCommands.GET_GUILDS, { timeout });
      }
      /**
       * Get a channel
       * @param {Snowflake} id Channel ID
       * @param {number} [timeout] Timeout request
       * @returns {Promise<Channel>}
       */
      getChannel(id, timeout) {
        return this.request(RPCCommands.GET_CHANNEL, { channel_id: id, timeout });
      }
      /**
       * Get all channels
       * @param {Snowflake} [id] Guild ID
       * @param {number} [timeout] Timeout request
       * @returns {Promise<Collection<Snowflake, Channel>>}
       */
      async getChannels(id, timeout) {
        const { channels } = await this.request(RPCCommands.GET_CHANNELS, {
          timeout,
          guild_id: id
        });
        return channels;
      }
      /**
       * @typedef {CertifiedDevice}
       * @prop {string} type One of `AUDIO_INPUT`, `AUDIO_OUTPUT`, `VIDEO_INPUT`
       * @prop {string} uuid This device's Windows UUID
       * @prop {object} vendor Vendor information
       * @prop {string} vendor.name Vendor's name
       * @prop {string} vendor.url Vendor's url
       * @prop {object} model Model information
       * @prop {string} model.name Model's name
       * @prop {string} model.url Model's url
       * @prop {string[]} related Array of related product's Windows UUIDs
       * @prop {boolean} echoCancellation If the device has echo cancellation
       * @prop {boolean} noiseSuppression If the device has noise suppression
       * @prop {boolean} automaticGainControl If the device has automatic gain control
       * @prop {boolean} hardwareMute If the device has a hardware mute
       */
      /**
       * Tell discord which devices are certified
       * @param {CertifiedDevice[]} devices Certified devices to send to discord
       * @returns {Promise}
       */
      setCertifiedDevices(devices) {
        return this.request(RPCCommands.SET_CERTIFIED_DEVICES, {
          devices: devices.map((d) => ({
            type: d.type,
            id: d.uuid,
            vendor: d.vendor,
            model: d.model,
            related: d.related,
            echo_cancellation: d.echoCancellation,
            noise_suppression: d.noiseSuppression,
            automatic_gain_control: d.automaticGainControl,
            hardware_mute: d.hardwareMute
          }))
        });
      }
      /**
       * @typedef {UserVoiceSettings}
       * @prop {Snowflake} id ID of the user these settings apply to
       * @prop {?Object} [pan] Pan settings, an object with `left` and `right` set between
       * 0.0 and 1.0, inclusive
       * @prop {?number} [volume=100] The volume
       * @prop {bool} [mute] If the user is muted
       */
      /**
       * Set the voice settings for a user, by id
       * @param {Snowflake} id ID of the user to set
       * @param {UserVoiceSettings} settings Settings
       * @returns {Promise}
       */
      setUserVoiceSettings(id, settings) {
        return this.request(RPCCommands.SET_USER_VOICE_SETTINGS, {
          user_id: id,
          pan: settings.pan,
          mute: settings.mute,
          volume: settings.volume
        });
      }
      /**
       * Move the user to a voice channel
       * @param {Snowflake} id ID of the voice channel
       * @param {Object} [options] Options
       * @param {number} [options.timeout] Timeout for the command
       * @param {boolean} [options.force] Force this move. This should only be done if you
       * have explicit permission from the user.
       * @returns {Promise}
       */
      selectVoiceChannel(id, { timeout, force = false } = {}) {
        return this.request(RPCCommands.SELECT_VOICE_CHANNEL, { channel_id: id, timeout, force });
      }
      /**
       * Move the user to a text channel
       * @param {Snowflake} id ID of the voice channel
       * @param {Object} [options] Options
       * @param {number} [options.timeout] Timeout for the command
       * have explicit permission from the user.
       * @returns {Promise}
       */
      selectTextChannel(id, { timeout } = {}) {
        return this.request(RPCCommands.SELECT_TEXT_CHANNEL, { channel_id: id, timeout });
      }
      /**
       * Get current voice settings
       * @returns {Promise}
       */
      getVoiceSettings() {
        return this.request(RPCCommands.GET_VOICE_SETTINGS).then((s) => ({
          automaticGainControl: s.automatic_gain_control,
          echoCancellation: s.echo_cancellation,
          noiseSuppression: s.noise_suppression,
          qos: s.qos,
          silenceWarning: s.silence_warning,
          deaf: s.deaf,
          mute: s.mute,
          input: {
            availableDevices: s.input.available_devices,
            device: s.input.device_id,
            volume: s.input.volume
          },
          output: {
            availableDevices: s.output.available_devices,
            device: s.output.device_id,
            volume: s.output.volume
          },
          mode: {
            type: s.mode.type,
            autoThreshold: s.mode.auto_threshold,
            threshold: s.mode.threshold,
            shortcut: s.mode.shortcut,
            delay: s.mode.delay
          }
        }));
      }
      /**
       * Set current voice settings, overriding the current settings until this session disconnects.
       * This also locks the settings for any other rpc sessions which may be connected.
       * @param {Object} args Settings
       * @returns {Promise}
       */
      setVoiceSettings(args) {
        return this.request(RPCCommands.SET_VOICE_SETTINGS, {
          automatic_gain_control: args.automaticGainControl,
          echo_cancellation: args.echoCancellation,
          noise_suppression: args.noiseSuppression,
          qos: args.qos,
          silence_warning: args.silenceWarning,
          deaf: args.deaf,
          mute: args.mute,
          input: args.input ? {
            device_id: args.input.device,
            volume: args.input.volume
          } : void 0,
          output: args.output ? {
            device_id: args.output.device,
            volume: args.output.volume
          } : void 0,
          mode: args.mode ? {
            type: args.mode.type,
            auto_threshold: args.mode.autoThreshold,
            threshold: args.mode.threshold,
            shortcut: args.mode.shortcut,
            delay: args.mode.delay
          } : void 0
        });
      }
      /**
       * Capture a shortcut using the client
       * The callback takes (key, stop) where `stop` is a function that will stop capturing.
       * This `stop` function must be called before disconnecting or else the user will have
       * to restart their client.
       * @param {Function} callback Callback handling keys
       * @returns {Promise<Function>}
       */
      captureShortcut(callback) {
        const subid = subKey(RPCEvents.CAPTURE_SHORTCUT_CHANGE);
        const stop = () => {
          this._subscriptions.delete(subid);
          return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: "STOP" });
        };
        this._subscriptions.set(subid, ({ shortcut }) => {
          callback(shortcut, stop);
        });
        return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: "START" }).then(() => stop);
      }
      /**
       * Sets the presence for the logged in user.
       * @param {object} args The rich presence to pass.
       * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
       * @returns {Promise}
       */
      setActivity(args = {}, pid = getPid()) {
        let timestamps;
        let assets;
        let party;
        let secrets;
        if (args.startTimestamp || args.endTimestamp) {
          timestamps = {
            start: args.startTimestamp,
            end: args.endTimestamp
          };
          if (timestamps.start instanceof Date) {
            timestamps.start = Math.round(timestamps.start.getTime());
          }
          if (timestamps.end instanceof Date) {
            timestamps.end = Math.round(timestamps.end.getTime());
          }
          if (timestamps.start > 2147483647e3) {
            throw new RangeError("timestamps.start must fit into a unix timestamp");
          }
          if (timestamps.end > 2147483647e3) {
            throw new RangeError("timestamps.end must fit into a unix timestamp");
          }
        }
        if (args.largeImageKey || args.largeImageText || args.smallImageKey || args.smallImageText) {
          assets = {
            large_image: args.largeImageKey,
            large_text: args.largeImageText,
            small_image: args.smallImageKey,
            small_text: args.smallImageText
          };
        }
        if (args.partySize || args.partyId || args.partyMax) {
          party = { id: args.partyId };
          if (args.partySize || args.partyMax) {
            party.size = [args.partySize, args.partyMax];
          }
        }
        if (args.matchSecret || args.joinSecret || args.spectateSecret) {
          secrets = {
            match: args.matchSecret,
            join: args.joinSecret,
            spectate: args.spectateSecret
          };
        }
        return this.request(RPCCommands.SET_ACTIVITY, {
          pid,
          activity: {
            state: args.state,
            details: args.details,
            timestamps,
            assets,
            party,
            secrets,
            buttons: args.buttons,
            instance: !!args.instance
          }
        });
      }
      /**
       * Clears the currently set presence, if any. This will hide the "Playing X" message
       * displayed below the user's name.
       * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
       * @returns {Promise}
       */
      clearActivity(pid = getPid()) {
        return this.request(RPCCommands.SET_ACTIVITY, {
          pid
        });
      }
      /**
       * Invite a user to join the game the RPC user is currently playing
       * @param {User} user The user to invite
       * @returns {Promise}
       */
      sendJoinInvite(user) {
        return this.request(RPCCommands.SEND_ACTIVITY_JOIN_INVITE, {
          user_id: user.id || user
        });
      }
      /**
       * Request to join the game the user is playing
       * @param {User} user The user whose game you want to request to join
       * @returns {Promise}
       */
      sendJoinRequest(user) {
        return this.request(RPCCommands.SEND_ACTIVITY_JOIN_REQUEST, {
          user_id: user.id || user
        });
      }
      /**
       * Reject a join request from a user
       * @param {User} user The user whose request you wish to reject
       * @returns {Promise}
       */
      closeJoinRequest(user) {
        return this.request(RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST, {
          user_id: user.id || user
        });
      }
      createLobby(type, capacity, metadata) {
        return this.request(RPCCommands.CREATE_LOBBY, {
          type,
          capacity,
          metadata
        });
      }
      updateLobby(lobby, { type, owner, capacity, metadata } = {}) {
        return this.request(RPCCommands.UPDATE_LOBBY, {
          id: lobby.id || lobby,
          type,
          owner_id: owner && owner.id || owner,
          capacity,
          metadata
        });
      }
      deleteLobby(lobby) {
        return this.request(RPCCommands.DELETE_LOBBY, {
          id: lobby.id || lobby
        });
      }
      connectToLobby(id, secret) {
        return this.request(RPCCommands.CONNECT_TO_LOBBY, {
          id,
          secret
        });
      }
      sendToLobby(lobby, data) {
        return this.request(RPCCommands.SEND_TO_LOBBY, {
          id: lobby.id || lobby,
          data
        });
      }
      disconnectFromLobby(lobby) {
        return this.request(RPCCommands.DISCONNECT_FROM_LOBBY, {
          id: lobby.id || lobby
        });
      }
      updateLobbyMember(lobby, user, metadata) {
        return this.request(RPCCommands.UPDATE_LOBBY_MEMBER, {
          lobby_id: lobby.id || lobby,
          user_id: user.id || user,
          metadata
        });
      }
      getRelationships() {
        const types = Object.keys(RelationshipTypes);
        return this.request(RPCCommands.GET_RELATIONSHIPS).then((o) => o.relationships.map((r) => ({
          ...r,
          type: types[r.type]
        })));
      }
      /**
       * Subscribe to an event
       * @param {string} event Name of event e.g. `MESSAGE_CREATE`
       * @param {Object} [args] Args for event e.g. `{ channel_id: '1234' }`
       * @returns {Promise<Object>}
       */
      async subscribe(event, args) {
        await this.request(RPCCommands.SUBSCRIBE, args, event);
        return {
          unsubscribe: () => this.request(RPCCommands.UNSUBSCRIBE, args, event)
        };
      }
      /**
       * Destroy the client
       */
      async destroy() {
        await this.transport.close();
      }
    };
    module2.exports = RPCClient;
  }
});

// node_modules/discord-rpc/src/index.js
var require_src = __commonJS({
  "node_modules/discord-rpc/src/index.js"(exports, module2) {
    "use strict";
    var util = require_util();
    module2.exports = {
      Client: require_client(),
      register(id) {
        return util.register(`discord-${id}`);
      }
    };
  }
});

// index.js
var clc = require_cli_color();
var ascii_text_generator = require_ascii_text_generator();
var chokidar = require_chokidar();
var fs = require("fs");
var prompt = require_prompt_sync()();
var fetch = require_lib2();
var DiscordRPC = require_src();
var userid = "";
var clientId = "1040393005640732683";
var rpc = new DiscordRPC.Client({ transport: "ipc" });
rpc.on("ready", () => {
  console.log("Authed for Discord User", rpc.user.username + "#" + rpc.user.discriminator, "(", rpc.user.id, ")");
  userid = rpc.user.id;
});
rpc.login({ clientId }).catch(console.error);
var input_text = "RAVENWOOD";
var ascii_text = ascii_text_generator(input_text, "2");
var input_text2 = " AVI LOGGER";
var ascii_text2 = ascii_text_generator(input_text2, "2");
console.log(clc.magenta("####################################################################################"));
console.log(clc.magenta(ascii_text));
console.log(clc.magentaBright(ascii_text2));
console.log(clc.magenta("####################################################################################"));
console.log(clc.red("------------------------------ WATCHING VRCHAT CACHE -------------------------------"));
var cacheloc = prompt('Enter VRCHAT Cache location (Leave blank for default "%APPDATA%/LocalLow/VRChat/VRChat/Cache-WindowsPlayer"): ');
if (cacheloc === "") {
  appdataloc = `${process.env.APPDATA}`.replace("\\Roaming", "");
  cacheloc = `${appdataloc}`.replace("\\", "/") + "/LocalLow/VRChat/VRChat/Cache-WindowsPlayer";
} else {
  cacheloc.replace("\\", "/");
}
var appdataloc;
var initial = prompt("Do you want to scan your cache before logging? (Y/N): ");
if (initial === "Y") {
  login = false;
} else {
  cacheloc.replace("\\", "/");
  login = true;
}
var login;
watch();
function readCache(filePath, untilText) {
  try {
    const buffer = fs.readFileSync(filePath);
    const bufferLimit = untilText.length;
    const chunkSize = Math.ceil(buffer.length / 4);
    let startIndex = 0;
    let endIndex = chunkSize;
    for (let i = 0; i < 4; i++) {
      const bufferSlice = buffer.slice(startIndex, endIndex);
      const bufferStr = bufferSlice.toString("ascii");
      const index = bufferStr.indexOf(untilText);
      if (index !== -1) {
        const subBuffer = bufferSlice.slice(index + bufferLimit);
        const subBufferStr = subBuffer.toString("ascii");
        const aviIDIndex = subBufferStr.indexOf("avtr_");
        if (aviIDIndex !== -1) {
          const aviID = subBufferStr.substring(aviIDIndex + 5, subBufferStr.indexOf("_", aviIDIndex + 5));
          return `avtr_${aviID}`;
        }
      }
      startIndex = endIndex;
      endIndex += chunkSize;
    }
    return null;
  } catch (e) {
    return null;
  }
}
async function watch() {
  var watcher = chokidar.watch(cacheloc, { ignored: /^\./, persistent: true, ignoreInitial: login });
  watcher.on("add", async function(path) {
    if (`${path}`.includes("_data") === true) {
      var data = readCache(path, "prefab-id-v1");
      if (data === null || data.length !== 41) {
        console.log(clc.red("FOUND AVATAR \u{1F4D5} ") + " BROKEN! DISCARDING!");
      } else {
        console.log(clc.green("FOUND AVATAR \u{1F4D7} ") + " " + data);
        putAvatars2(data);
      }
    }
  });
}
async function putAvatars2(id2) {
  try {
    const ids = `[{"id": "${id2}", "userid": "${userid}"}]`;
    const response = fetch(`https://vrcdbprivate.ravenwood.dev/putavatarauth.php`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Cache": "no-cache",
        "User-Agent": "LuasVRCuserinfoDiscordBot/1.4.1 contact@ravenwood.dev"
      },
      credentials: "same-origin",
      body: ids
    });
  } catch (err) {
  }
}
/*! Bundled license information:

normalize-path/index.js:
  (*!
   * normalize-path <https://github.com/jonschlinkert/normalize-path>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extglob/index.js:
  (*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-glob/index.js:
  (*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
*/
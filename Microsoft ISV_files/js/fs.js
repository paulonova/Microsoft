//!Portions of this code are licensed under the following license:
//!  For license information please see fs.js.LICENSE.txt 
! function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var i in e) n.d(r, i, function (t) {
        return e[t]
      }.bind(null, i));
    return r
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/s", n(n.s = 5)
}([function (e, t, n) {
  "use strict";
  n.r(t), n.d(t, "__extends", function () {
    return i
  }), n.d(t, "__assign", function () {
    return o
  }), n.d(t, "__rest", function () {
    return s
  }), n.d(t, "__decorate", function () {
    return a
  }), n.d(t, "__param", function () {
    return u
  }), n.d(t, "__metadata", function () {
    return c
  }), n.d(t, "__awaiter", function () {
    return h
  }), n.d(t, "__generator", function () {
    return d
  }), n.d(t, "__createBinding", function () {
    return l
  }), n.d(t, "__exportStar", function () {
    return p
  }), n.d(t, "__values", function () {
    return f
  }), n.d(t, "__read", function () {
    return _
  }), n.d(t, "__spread", function () {
    return v
  }), n.d(t, "__spreadArrays", function () {
    return g
  }), n.d(t, "__await", function () {
    return m
  }), n.d(t, "__asyncGenerator", function () {
    return y
  }), n.d(t, "__asyncDelegator", function () {
    return w
  }), n.d(t, "__asyncValues", function () {
    return S
  }), n.d(t, "__makeTemplateObject", function () {
    return b
  }), n.d(t, "__importStar", function () {
    return T
  }), n.d(t, "__importDefault", function () {
    return k
  }), n.d(t, "__classPrivateFieldGet", function () {
    return I
  }), n.d(t, "__classPrivateFieldSet", function () {
    return C
  });
  var r = function (e, t) {
    return (r = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (e, t) {
        e.__proto__ = t
      } || function (e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      })(e, t)
  };

  function i(e, t) {
    function n() {
      this.constructor = e
    }
    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  }
  var o = function () {
    return (o = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e
    }).apply(this, arguments)
  };

  function s(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var i = 0;
      for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
    }
    return n
  }

  function a(e, t, n, r) {
    var i, o = arguments.length,
      s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
    else
      for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
    return o > 3 && s && Object.defineProperty(t, n, s), s
  }

  function u(e, t) {
    return function (n, r) {
      t(n, r, e)
    }
  }

  function c(e, t) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
  }

  function h(e, t, n, r) {
    return new(n || (n = Promise))(function (i, o) {
      function s(e) {
        try {
          u(r.next(e))
        } catch (e) {
          o(e)
        }
      }

      function a(e) {
        try {
          u(r["throw"](e))
        } catch (e) {
          o(e)
        }
      }

      function u(e) {
        var t;
        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t)
        })).then(s, a)
      }
      u((r = r.apply(e, t || [])).next())
    })
  }

  function d(e, t) {
    var n, r, i, o, s = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1]
      },
      trys: [],
      ops: []
    };
    return o = {
      next: a(0),
      "throw": a(1),
      "return": a(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
      return this
    }), o;

    function a(o) {
      return function (a) {
        return function (o) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; s;) try {
            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                return s.label++, {
                  value: o[1],
                  done: !1
                };
              case 5:
                s.label++, r = o[1], o = [0];
                continue;
              case 7:
                o = s.ops.pop(), s.trys.pop();
                continue;
              default:
                if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                  s = 0;
                  continue
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  s.label = o[1];
                  break
                }
                if (6 === o[0] && s.label < i[1]) {
                  s.label = i[1], i = o;
                  break
                }
                if (i && s.label < i[2]) {
                  s.label = i[2], s.ops.push(o);
                  break
                }
                i[2] && s.ops.pop(), s.trys.pop();
                continue;
            }
            o = t.call(e, s)
          } catch (e) {
            o = [6, e], r = 0
          } finally {
            n = i = 0
          }
          if (5 & o[0]) throw o[1];
          return {
            value: o[0] ? o[1] : void 0,
            done: !0
          }
        }([o, a])
      }
    }
  }
  var l = Object.create ? function (e, t, n, r) {
    void 0 === r && (r = n), Object.defineProperty(e, r, {
      enumerable: !0,
      get: function () {
        return t[n]
      }
    })
  } : function (e, t, n, r) {
    void 0 === r && (r = n), e[r] = t[n]
  };

  function p(e, t) {
    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || l(t, e, n)
  }

  function f(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
      next: function () {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        }
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }

  function _(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r, i, o = n.call(e),
      s = [];
    try {
      for (;
        (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
    } catch (e) {
      i = {
        error: e
      }
    } finally {
      try {
        r && !r.done && (n = o["return"]) && n.call(o)
      } finally {
        if (i) throw i.error
      }
    }
    return s
  }

  function v() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_(arguments[t]));
    return e
  }

  function g() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
    var r = Array(e),
      i = 0;
    for (t = 0; t < n; t++)
      for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
    return r
  }

  function m(e) {
    return this instanceof m ? (this.v = e, this) : new m(e)
  }

  function y(e, t, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r, i = n.apply(e, t || []),
      o = [];
    return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function () {
      return this
    }, r;

    function s(e) {
      i[e] && (r[e] = function (t) {
        return new Promise(function (n, r) {
          o.push([e, t, n, r]) > 1 || a(e, t)
        })
      })
    }

    function a(e, t) {
      try {
        (n = i[e](t)).value instanceof m ? Promise.resolve(n.value.v).then(u, c) : h(o[0][2], n)
      } catch (e) {
        h(o[0][3], e)
      }
      var n
    }

    function u(e) {
      a("next", e)
    }

    function c(e) {
      a("throw", e)
    }

    function h(e, t) {
      e(t), o.shift(), o.length && a(o[0][0], o[0][1])
    }
  }

  function w(e) {
    var t, n;
    return t = {}, r("next"), r("throw", function (e) {
      throw e
    }), r("return"), t[Symbol.iterator] = function () {
      return this
    }, t;

    function r(r, i) {
      t[r] = e[r] ? function (t) {
        return (n = !n) ? {
          value: m(e[r](t)),
          done: "return" === r
        } : i ? i(t) : t
      } : i
    }
  }

  function S(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, n = e[Symbol.asyncIterator];
    return n ? n.call(e) : (e = f(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
      return this
    }, t);

    function r(n) {
      t[n] = e[n] && function (t) {
        return new Promise(function (r, i) {
          (function (e, t, n, r) {
            Promise.resolve(r).then(function (t) {
              e({
                value: t,
                done: n
              })
            }, t)
          })(r, i, (t = e[n](t)).done, t.value)
        })
      }
    }
  }

  function b(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
      value: t
    }) : e.raw = t, e
  }
  var E = Object.create ? function (e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    })
  } : function (e, t) {
    e["default"] = t
  };

  function T(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && l(t, e, n);
    return E(t, e), t
  }

  function k(e) {
    return e && e.__esModule ? e : {
      "default": e
    }
  }

  function I(e, t) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return t.get(e)
  }

  function C(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
    return t.set(e, n), n
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.notAwaited = t.omit = t.pick = t.assertExhaustive = t.isNonNull = t.isNonEmpty = t.Object = void 0;
  var r = n(0),
    i = n(6);
  Object.defineProperty(t, "Object", {
    enumerable: !0,
    get: function () {
      return i.ExtendedObject
    }
  }), t.isNonEmpty = function (e) {
    return e.length > 0
  }, t.isNonNull = function (e) {
    return null != e
  }, t.assertExhaustive = function (e, t) {
    throw void 0 === t && (t = "Reached unexpected case in exhaustive switch"), new Error(t)
  }, t.pick = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    var r = {};
    return t.forEach(function (t) {
      r[t] = e[t]
    }), r
  }, t.omit = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    var i = r.__assign({}, e);
    return Object.keys(i).forEach(function (e) {
      var n = e; - 1 !== t.indexOf(n) && delete i[n]
    }), i
  }, t.notAwaited = function (e) {}
}, function (e) {
  e.exports = JSON.parse("{\"Any\":{\"iframe\":{\"src\":\"scrubUrl\",\"srcdoc\":\"erase\"},\"frame\":{\"src\":\"scrubUrl\",\"srcdoc\":\"erase\"}},\"Exclude\":{\"*\":{\"alt\":\"erase\",\"checked\":\"erase\",\"data\":\"erase\",\"placeholder\":\"erase\",\"src\":\"erase\",\"srcset\":\"erase\",\"href\":\"erase\",\"title\":\"erase\",\"value\":\"erase\"}},\"Mask\":{\"*\":{\"checked\":\"erase\",\"data\":\"erase\",\"alt\":\"maskText\",\"placeholder\":\"maskText\",\"title\":\"maskText\",\"value\":\"maskText\"},\"option\":{\"label\":\"maskText\"}}}")
}, function (e) {
  e.exports = JSON.parse("[{\"Selector\":\"input[type=password]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"input[type=hidden]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"[autocomplete^=cc-]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"object:not([type^=\\\"image/\\\"])\",\"Consent\":false,\"Type\":1},{\"Selector\":\"embed:not([type^=\\\"image/\\\"])\",\"Consent\":false,\"Type\":1},{\"Selector\":\"canvas\",\"Consent\":false,\"Type\":1},{\"Selector\":\"noscript\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-hide\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-exclude\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-exclude-without-consent\",\"Consent\":true,\"Type\":1},{\"Selector\":\".fs-mask\",\"Consent\":false,\"Type\":2},{\"Selector\":\".fs-mask-without-consent\",\"Consent\":true,\"Type\":2},{\"Selector\":\".fs-unmask\",\"Consent\":false,\"Type\":3},{\"Selector\":\".fs-unmask-with-consent\",\"Consent\":true,\"Type\":3},{\"Selector\":\".fs-block\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-record-with-consent\",\"Consent\":true,\"Type\":1}]")
}, function (e) {
  e.exports = JSON.parse("{\"AGQFM\":{\"path\":[\"reset-password\"]},\"95NJ7\":{\"path\":[\"reset-password\"]},\"RV68C\":{\"path\":[\"dl\"]},\"QS8RG\":{\"path\":[\"visitor\",\"account\",\"parentAccount\"]},\"FP60X\":{\"path\":[\"retailer\",\"ocadotech\",\"serviceAccounts\"]},\"7R98D\":{\"path\":[\"signup\"]},\"WEN2C\":{\"path\":[\"studies\",\"EU\",\"findings\"]},\"WQF2B\":{\"path\":[\"app/accounts\",\"app/order\",\"app/trade\"]}}")
}, function (e, t, n) {
  e.exports = n(7)
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ExtendedObject = void 0, t.ExtendedObject = Object
}, function (e, t, n) {
  "use strict";
  n.r(t);
  var r = n(0),
    i = !1;

  function o() {
    return i
  }

  function s(e) {
    o() && window.console && console.log(e)
  }
  var a = new(function () {
    function e(e) {
      this.rebuildFromSnapshot(e)
    }
    return e.prototype.rebuildFromSnapshot = function (e) {
      var t = this.snapshot;
      if (this.snapshot = e, !t || t.functions !== e.functions) {
        var n = e.functions;
        this.arrayIsArray = n.arrayIsArray, this.clearWindowInterval = c(n.clearWindowInterval), this.clearWindowTimeout = c(n.clearWindowTimeout), this.dateGetTime = c(n.dateGetTime), this.dateNow = n.dateNow, this.docFragQuerySelectorAll = c(n.docFragQuerySelectorAll), this.docQuerySelectorAll = c(n.docQuerySelectorAll), this.elMatches = c(n.elMatches), this.elQuerySelectorAll = c(n.elQuerySelectorAll), this.jsonParse = n.jsonParse, this.jsonStringify = n.jsonStringify, this.matchMedia = h(n.matchMedia), this.mathAbs = n.mathAbs, this.mathFloor = n.mathFloor, this.mathMax = n.mathMax, this.mathMin = n.mathMin, this.mathPow = n.mathPow, this.mathRandom = n.mathRandom, this.mathRound = n.mathRound, this.objectHasOwnProp = c(n.objectHasOwnProp), this.objectKeys = n.objectKeys, this.objectValues = n.objectValues || null, this.requestWindowAnimationFrame = h(n.requestWindowAnimationFrame), this.requestWindowIdleCallback = h(n.requestWindowIdleCallback), this.setWindowInterval = c(n.setWindowInterval), this.setWindowTimeout = c(n.setWindowTimeout)
      }
    }, e
  }())(u(window));

  function u(e, t) {
    void 0 === t && (t = 0);
    var n = t,
      r = function (e) {
        return n = 2, Ye.sendToBugsnag("Snapshot failed: " + e, "error"),
          function () {
            throw new Error("Invoked failed snapshot")
          }
      },
      i = function (e) {
        try {
          return e()
        } catch (e) {
          return r(e.message)
        }
      },
      o = function (e) {
        try {
          var t = e();
          return t || r("snapshot not found")
        } catch (e) {
          return r(e.message)
        }
      },
      s = {
        arrayIsArray: i(function () {
          return e.Array.isArray
        }),
        clearWindowInterval: i(function () {
          return e.clearInterval
        }),
        clearWindowTimeout: i(function () {
          return e.clearTimeout
        }),
        dateGetTime: i(function () {
          return e.Date.prototype.getTime
        }),
        dateNow: i(function () {
          return e.Date.now
        }),
        docFragQuerySelectorAll: o(function () {
          var t;
          return null === (t = e.DocumentFragment) || void 0 === t ? void 0 : t.prototype.querySelectorAll
        }),
        docQuerySelectorAll: o(function () {
          var t;
          return null !== (t = e.Document.prototype.querySelectorAll) && void 0 !== t ? t : e.document.querySelectorAll
        }),
        elMatches: o(function () {
          return p(e, d)
        }),
        elQuerySelectorAll: o(function () {
          return p(e, l)
        }),
        jsonParse: i(function () {
          return e.JSON.parse
        }),
        jsonStringify: i(function () {
          return e.JSON.stringify
        }),
        matchMedia: i(function () {
          return e.matchMedia
        }),
        mathAbs: i(function () {
          return e.Math.abs
        }),
        mathFloor: i(function () {
          return e.Math.floor
        }),
        mathMax: i(function () {
          return e.Math.max
        }),
        mathMin: i(function () {
          return e.Math.min
        }),
        mathPow: i(function () {
          return e.Math.pow
        }),
        mathRandom: i(function () {
          return e.Math.random
        }),
        mathRound: i(function () {
          return e.Math.round
        }),
        objectHasOwnProp: i(function () {
          return e.Object.prototype.hasOwnProperty
        }),
        objectKeys: i(function () {
          return e.Object.keys
        }),
        objectValues: i(function () {
          return e.Object.values
        }),
        requestWindowAnimationFrame: i(function () {
          return e.requestAnimationFrame
        }),
        requestWindowIdleCallback: i(function () {
          return e.requestIdleCallback
        }),
        setWindowInterval: i(function () {
          return e.setInterval
        }),
        setWindowTimeout: i(function () {
          return e.setTimeout
        })
      },
      a = {
        functionToString: i(function () {
          return e.Function.prototype.toString
        }),
        objectToString: i(function () {
          return e.Object.prototype.toString
        })
      };
    return {
      status: n,
      functions: s,
      helpers: a
    }
  }

  function c(e) {
    return function (t) {
      for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
      return e.apply(t, n)
    }
  }

  function h(e) {
    return e ? c(e) : null
  }

  function d(e) {
    return e.matches || e.webkitMatchesSelector || e.msMatchesSelector || e.mozMatchesSelector
  }

  function l(e) {
    return e.querySelectorAll
  }

  function p(e, t) {
    var n, r, i = (null === (n = e.Element) || void 0 === n ? void 0 : n.prototype) ? t(null === (r = e.Element) || void 0 === r ? void 0 : r.prototype) : void 0,
      o = e.document ? e.document.documentElement : void 0;
    if (!o || i && o instanceof e.Element || (i = t(o)), !i) throw new Error("Unabled to find Element proto function");
    return i
  }
  var f, _, v = ("number" != typeof (_ = (f = function () {
    return a.dateNow()
  })()) && (_ = (f = function () {
    return a.dateGetTime(new Date)
  })()), {
    now: f,
    timeOrigin: _,
    msSinceDocumentStart: function () {
      return f() - _
    }
  });
  var g = function () {
    var e;
    if (function () {
        var e = window.performance;
        return !(!e || !e.now)
      }()) {
      var t = window.performance,
        n = t.now();
      if ("number" == typeof n && isFinite(n) && !(n <= 0)) {
        var r = t.timeOrigin;
        if ("number" != typeof r) {
          var i = v.now() - t.now(),
            o = null === (e = t.timing) || void 0 === e ? void 0 : e.navigationStart;
          r = o ? Math.min(i, o) : i
        }
        var s = Math.round(r);
        if ("number" == typeof s && isFinite(s) && !(s <= 0)) return {
          now: function () {
            return Math.round(s + t.now())
          },
          timeOrigin: s,
          msSinceDocumentStart: function () {
            return t.now()
          }
        }
      }
    }
  }();

  function m() {
    return g ? g.now() : v.now()
  }

  function y() {
    return g ? g.timeOrigin : v.timeOrigin
  }

  function w() {
    return g ? g.msSinceDocumentStart() : v.msSinceDocumentStart()
  }
  var S = ["", "0", "1", "-1", "true", "false", "n/a", "nan", "undefined", "null", "nil", "the_id_that_you_use_in_your_app_for_this_user"],
    b = ["811c9dc5", "350ca8af", "340ca71c", "14cd0a2b", "4db211e5", "0b069958", "3613e041", "2f8f13ba", "9b61ad43", "77074ba4", "0da3f8ec", "1c750511"],
    E = function () {
      return a.mathFloor(m() / 1e3)
    },
    T = function () {
      return E() + 31536e3
    };

  function k(e) {
    if (!e) return null;
    var t = e.split("/"),
      n = t[0],
      r = t[1],
      i = parseInt(r),
      o = E(),
      a = T();
    if (isNaN(i) && (i = a), i <= o) return null;
    i > a && (i = a);
    var u = n.split(/[#,]/);
    if (u.length < 3 && (u = n.split("`")).length < 3) return null;
    var c = u[0],
      h = u[1],
      d = u[2],
      l = u[3],
      p = "";
    void 0 !== l && (p = decodeURIComponent(l), (S.indexOf(p) >= 0 || b.indexOf(p) >= 0) && (s("Ignoring invalid app key \"" + p + "\" from cookie."), p = ""));
    var f = d.split(":");
    return {
      expirationAbsTimeSeconds: i,
      host: c,
      orgId: h,
      userId: f[0],
      sessionId: f[1] || "",
      appKeyHash: p
    }
  }

  function I(e) {
    var t = {};
    try {
      for (var n = e.cookie.split(";"), r = 0; r < n.length; r++) {
        var i = n[r].replace(/^\s+|\s+$/g, "").split("=");
        t[i[0]] || (t[i[0]] = i[1])
      }
    } catch (e) {
      s("Exception trying to parse cookies: " + e)
    }
    return t
  }
  var C;

  function O(e) {
    if (C) return C;
    var t = A(e);
    return t || (t = e._fs_namespace) ? (C = t, t) : C = "FS"
  }

  function A(e) {
    return e._fs_loaded
  }

  function R(e) {
    return e[O(e)]
  }

  function x(e) {
    return "localhost" == e || "127.0.0.1" == e
  }
  var P, L, M, F, q = /^([^.]+\.)*(fullstory|onfire).[^.]+(\/|$)/;

  function U(e, t, n) {
    void 0 === n && (n = "string");
    var r = e[t];
    if (typeof r === n) return r
  }

  function N(e) {
    return !!U(e, "_fs_ext_debug", "boolean") || !!U(e, "_fs_debug", "boolean")
  }

  function j(e) {
    return U(e, "_fs_rec_host") || ((t = K(e)) && q.test(t) ? 0 === t.lastIndexOf("rs.", 0) || 0 === t.lastIndexOf("rs-2.", 0) ? t : 0 == t.lastIndexOf("www.", 0) || 0 == t.lastIndexOf("app.", 0) ? "rs." + t.slice(4) : "rs." + t : t);
    var t
  }

  function W(e) {
    return U(e, "_fs_ext_org") || U(e, "_fs_org")
  }

  function B(e) {
    return !!U(e, "_fs_is_outer_script", "boolean")
  }

  function D(e) {
    return e._fs_transport
  }

  function H(e) {
    var t = R(e);
    if (!t) return [];
    var n = t.q;
    return n ? (delete t.q, n) : []
  }

  function V(e, t) {
    var n = R(e);
    if (n) {
      var r = n.q;
      r || (r = n.q = []), r.push(t)
    }
  }

  function K(e) {
    return U(e, "_fs_ext_host") || U(e, "_fs_host")
  }

  function z(e) {
    return e ? x(function (e) {
      var t = e,
        n = t.indexOf(":");
      return n >= 0 && (t = t.slice(0, n)), t
    }(e)) ? e : 0 == e.indexOf("www.") ? "app." + e.slice(4) : "app." + e : e
  }

  function Q(e) {
    return e ? e + "/s/fs.js" : void 0
  }! function (e) {
    e.MUT_INSERT = 2, e.MUT_REMOVE = 3, e.MUT_ATTR = 4, e.MUT_TEXT = 6, e.MOUSEMOVE = 8, e.MOUSEMOVE_CURVE = 9, e.SCROLL_LAYOUT = 10, e.SCROLL_LAYOUT_CURVE = 11, e.MOUSEDOWN = 12, e.MOUSEUP = 13, e.CLICK = 16, e.FOCUS = 17, e.VALUECHANGE = 18, e.RESIZE_LAYOUT = 19, e.DOMLOADED = 20, e.LOAD = 21, e.PLACEHOLDER_SIZE = 22, e.UNLOAD = 23, e.BLUR = 24, e.SET_FRAME_BASE = 25, e.TOUCHSTART = 32, e.TOUCHEND = 33, e.TOUCHCANCEL = 34, e.TOUCHMOVE = 35, e.TOUCHMOVE_CURVE = 36, e.NAVIGATE = 37, e.PLAY = 38, e.PAUSE = 39, e.RESIZE_VISUAL = 40, e.RESIZE_VISUAL_CURVE = 41, e.RESIZE_DOCUMENT_CONTENT = 42, e.RESIZE_SCROLLABLE_ELEMENT_CONTENT = 43, e.LOG = 48, e.ERROR = 49, e.DBL_CLICK = 50, e.FORM_SUBMIT = 51, e.WINDOW_FOCUS = 52, e.WINDOW_BLUR = 53, e.HEARTBEAT = 54, e.WATCHED_ELEM = 56, e.PERF_ENTRY = 57, e.REC_FEAT_SUPPORTED = 58, e.SELECT = 59, e.CSSRULE_INSERT = 60, e.CSSRULE_DELETE = 61, e.FAIL_THROTTLED = 62, e.AJAX_REQUEST = 63, e.SCROLL_VISUAL_OFFSET = 64, e.SCROLL_VISUAL_OFFSET_CURVE = 65, e.MEDIA_QUERY_CHANGE = 66, e.RESOURCE_TIMING_BUFFER_FULL = 67, e.MUT_SHADOW = 68, e.DISABLE_STYLESHEET = 69, e.FULLSCREEN = 70, e.FULLSCREEN_ERROR = 71, e.ADOPTED_STYLESHEETS = 72, e.CUSTOM_ELEMENT_DEFINED = 73, e.MODAL_OPEN = 74, e.MODAL_CLOSE = 75, e.SLOW_INTERACTION = 76, e.LONG_FRAME = 77, e.TIMING = 78, e.STORAGE_WRITE_FAILURE = 79, e.DOCUMENT_PROPERTIES = 80, e.ENTRY_NAVIGATE = 81, e.KEEP_ELEMENT = 2e3, e.KEEP_URL = 2001, e.KEEP_BOUNCE = 2002, e.SYS_SETVAR = 8193, e.SYS_RESOURCEHASH = 8195, e.SYS_SETCONSENT = 8196, e.SYS_CUSTOM = 8197, e.SYS_REPORTCONSENT = 8198, e.SYS_LETHE_MOBILE_BUNDLE_SEQ = 8199
  }(P || (P = {})),
  function (e) {
    e.Unknown = 0, e.Serialization = 1
  }(L || (L = {})),
  function (e) {
    e.Unknown = 0, e.DomSnapshot = 1, e.NodeEncoding = 2, e.LzEncoding = 3
  }(M || (M = {})),
  function (e) {
    e.Internal = 0, e.Public = 1
  }(F || (F = {}));
  var Y, G, J, X, Z, $, ee, te, ne, re, ie, oe, se, ae, ue, ce = ["print", "alert", "confirm"];

  function he(e) {
    switch (e) {
      case P.MOUSEDOWN:
      case P.MOUSEMOVE:
      case P.MOUSEMOVE_CURVE:
      case P.MOUSEUP:
      case P.TOUCHSTART:
      case P.TOUCHEND:
      case P.TOUCHMOVE:
      case P.TOUCHMOVE_CURVE:
      case P.TOUCHCANCEL:
      case P.CLICK:
      case P.SCROLL_LAYOUT:
      case P.SCROLL_LAYOUT_CURVE:
      case P.SCROLL_VISUAL_OFFSET:
      case P.SCROLL_VISUAL_OFFSET_CURVE:
      case P.NAVIGATE:
        return !0;
    }
    return !1
  }! function (e) {
    e.GrantConsent = !0, e.RevokeConsent = !1
  }(Y || (Y = {})),
  function (e) {
    e.Page = 0, e.Document = 1
  }(G || (G = {})),
  function (e) {
    e.Unknown = 0, e.Api = 1, e.FsShutdownFrame = 2, e.Hibernation = 3, e.Reidentify = 4, e.SettingsBlocked = 5, e.Size = 6, e.Unload = 7
  }(J || (J = {})),
  function (e) {
    e.Timing = 0, e.Navigation = 1, e.Resource = 2, e.Paint = 3, e.Mark = 4, e.Measure = 5, e.Memory = 6, e.TimeOrigin = 7
  }(X || (X = {})),
  function (e) {
    e.Timing = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"], e.Navigation = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "type", "redirectCount", "decodedBodySize", "encodedBodySize", "transferSize"], e.Resource = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "decodedBodySize", "encodedBodySize", "transferSize"], e.Measure = ["name", "startTime", "duration"], e.Memory = ["jsHeapSizeLimit", "totalJSHeapSize", "usedJSHeapSize"], e.TimeOrigin = ["timeOrigin"]
  }(Z || (Z = {})),
  function (e) {
    e.Performance = 0, e.PerformanceEntries = 1, e.PerformanceMemory = 2, e.Console = 3, e.Ajax = 4, e.PerformanceObserver = 5, e.AjaxFetch = 6, e.PerformanceTimeOrigin = 7
  }($ || ($ = {})),
  function (e) {
    e.Node = 1, e.Sheet = 2
  }(ee || (ee = {})),
  function (e) {
    e.StyleSheetHooks = 0, e.SetPropertyHooks = 1
  }(te || (te = {})),
  function (e) {
    e.Document = "document", e.Event = "evt", e.Page = "page", e.User = "user"
  }(ne || (ne = {})),
  function (e) {
    e.Elide = 0, e.Record = 1, e.Whitelist = 2
  }(re || (re = {})),
  function (e) {
    e.SignalInvalid = 0, e.SignalDeadClick = 1, e.SignalRageClick = 2
  }(ie || (ie = {})),
  function (e) {
    e.ReasonNoSuchOrg = 1, e.ReasonOrgDisabled = 2, e.ReasonOrgOverQuota = 3, e.ReasonBlockedDomain = 4, e.ReasonBlockedIp = 5, e.ReasonBlockedUserAgent = 6, e.ReasonBlockedGeo = 7, e.ReasonBlockedTrafficRamping = 8, e.ReasonInvalidURL = 9, e.ReasonUserOptOut = 10, e.ReasonInvalidRecScript = 11, e.ReasonDeletingUser = 12, e.ReasonNativeHookFailure = 13
  }(oe || (oe = {})),
  function (e) {
    e.Unset = 0, e.Exclude = 1, e.Mask = 2, e.Unmask = 3, e.Watch = 4, e.Keep = 5
  }(se || (se = {})),
  function (e) {
    e.Unset = 0, e.Click = 1
  }(ae || (ae = {})),
  function (e) {
    e.MaxLogsPerPage = 1024, e.MutationProcessingInterval = 250, e.CurveSamplingInterval = 142, e.DefaultBundleUploadInterval = 5e3, e.HeartbeatInitial = 4e3, e.HeartbeatMax = 256200, e.PageInactivityTimeout = 18e5, e.BackoffMax = 3e5, e.ScrollSampleInterval = e.MutationProcessingInterval / 5, e.InactivityThreshold = 4e3, e.MaxAjaxPayloadLength = 16384, e.DefaultOrgSettings = {
      MaxConsoleLogPerPage: e.MaxLogsPerPage,
      MaxAjaxPayloadLength: e.MaxAjaxPayloadLength,
      RecordPerformanceResourceImg: !0,
      RecordPerformanceResourceTiming: !0,
      HttpRequestHeadersAllowlist: [],
      HttpResponseHeadersAllowlist: [],
      UrlQueryStringBlocklist: [".*"],
      UrlPathBlocklist: []
    }, e.BlockedFieldValue = "__fs__redacted"
  }(ue || (ue = {}));

  function de(e, t) {
    return function () {
      try {
        return e.apply(this, arguments)
      } catch (e) {
        try {
          t && t(e)
        } catch (e) {}
      }
    }
  }
  var le = function () {},
    pe = navigator.userAgent,
    fe = pe.indexOf("MSIE ") > -1 || pe.indexOf("Trident/") > -1,
    _e = (fe && pe.indexOf("Trident/5"), fe && pe.indexOf("Trident/6"), fe && pe.indexOf("rv:11") > -1),
    ve = pe.indexOf("Edge/") > -1,
    ge = (pe.indexOf("CriOS"), pe.indexOf("Snapchat") > -1);
  var me = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);

  function ye() {
    var e = window.navigator.userAgent.match(/Version\/(\d+)/);
    return e ? parseInt(e[1]) : -1
  }

  function we(e) {
    if (!me) return !1;
    var t = ye();
    return t >= 0 && t === e
  }

  function Se(e) {
    if (!me) return !1;
    var t = ye();
    return t >= 0 && t < e
  }
  we(9), we(10);
  var be, Ee = Se(8);
  Se(10), Se(12);

  function Te(e, t) {
    for (var n = 0 === t.indexOf("on") ? function (e) {
        return "on" + e + t.slice(2)
      } : function (e) {
        return "" + e + t.charAt(0).toUpperCase() + t.slice(1)
      }, r = 0, i = [function () {
        return t
      }, function () {
        return n("webkit")
      }, function () {
        return n("moz")
      }, function () {
        return n("ms")
      }]; r < i.length; r++) {
      var o = (0, i[r])();
      if (o in e) return o
    }
    return t
  }

  function ke(e) {
    return a.arrayIsArray(e)
  }
  var Ie;

  function Ce(e, t) {
    return 0 == e.lastIndexOf(t, 0)
  }

  function Oe(e, t) {
    for (var n in e) a.objectHasOwnProp(e, n) && t(e[n], n, e)
  }

  function Ae(e) {
    for (var t in e)
      if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
  }

  function Re(e, t) {
    var n = 0;
    for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t) return !1;
    return n == t
  }

  function xe(e, t) {
    var n = 0;
    for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t) return !0;
    return !1
  }
  be = "function" == typeof a.objectKeys ? function (e) {
    return a.objectKeys(e)
  } : function (e) {
    var t = [];
    for (var n in e) a.objectHasOwnProp(e, n) && t.push(n);
    return t
  };
  var Pe;
  Ie = fe ? function (e) {
    var t = e.nextSibling;
    return t && e.parentNode && t === e.parentNode.firstChild ? null : t
  } : function (e) {
    return e.nextSibling
  };
  var Le;
  Pe = fe ? function (e, t) {
    if (e) {
      var n = e.parentNode ? e.parentNode.firstChild : null;
      do {
        t(e), e = e.nextSibling
      } while (e && e != n)
    }
  } : function (e, t) {
    for (; e; e = e.nextSibling) t(e)
  };
  var Me;
  Le = fe ? function (e) {
    var t = e.previousSibling;
    return t && e.parentNode && t === e.parentNode.lastChild ? null : t
  } : function (e) {
    return e.previousSibling
  };

  function Fe(e, t) {
    if (!e) return le;
    var n = function (e) {
      try {
        var t = window;
        return t.Zone && t.Zone.root && "function" == typeof t.Zone.root.wrap ? t.Zone.root.wrap(e) : e
      } catch (t) {
        return e
      }
    }(e);
    return t && (n = n.bind(t)), de(n, function (e) {
      s("Unexpected error: " + e)
    })
  }

  function qe(e) {
    var t, n = Array.prototype.toJSON,
      r = String.prototype.toJSON;
    n && (Array.prototype.toJSON = void 0), r && (String.prototype.toJSON = void 0);
    try {
      t = a.jsonStringify(e)
    } catch (e) {
      t = Ue(e)
    } finally {
      n && (Array.prototype.toJSON = n), r && (String.prototype.toJSON = r)
    }
    return t
  }

  function Ue(e) {
    var t = "Internal error: unable to determine what JSON error was";
    try {
      t = (t = "" + e).replace(/[^a-zA-Z0-9\.\:\!\, ]/g, "_")
    } catch (e) {}
    return "\"" + t + "\""
  }

  function Ne(e) {
    var t = e.doctype;
    if (!t) return "";
    var n = "<!DOCTYPE ";
    return n += t.name, t.publicId && (n += " PUBLIC \"" + t.publicId + "\""), t.systemId && (n += " \"" + t.systemId + "\""), n + ">"
  }

  function je(e) {
    return a.jsonParse(e)
  }
  Me = fe ? function (e, t) {
    if (e) {
      var n = e.parentNode ? e.parentNode.lastChild : null;
      do {
        t(e), e = e.previousSibling
      } while (e && e != n)
    }
  } : function (e, t) {
    for (; e; e = e.previousSibling) t(e)
  };
  var We = function () {
      function e(e, t) {
        this.target = e, this.propertyName = t, this._before = le, this._afterSync = le, this._afterAsync = le, this.on = !1
      }
      return e.prototype.before = function (e) {
        return this._before = Fe(e), this
      }, e.prototype.afterSync = function (e) {
        return this._afterSync = Fe(e), this
      }, e.prototype.afterAsync = function (e) {
        return this._afterAsync = Fe(function (t) {
          a.setWindowTimeout(window, de(function () {
            e(t)
          }), 0)
        }), this
      }, e.prototype.disable = function () {
        if (this.on = !1, this.shim) {
          var e = this.shim,
            t = e.override,
            n = e["native"];
          this.target[this.propertyName] === t && (this.target[this.propertyName] = n, this.shim = void 0)
        }
      }, e.prototype.enable = function () {
        if (this.on = !0, this.shim) return !0;
        this.shim = this.makeShim();
        try {
          this.target[this.propertyName] = this.shim.override
        } catch (e) {
          return !1
        }
        return !0
      }, e.prototype.makeShim = function () {
        var e = this,
          t = this.target[this.propertyName];
        return {
          "native": t,
          override: function () {
            var n = {
              that: this,
              args: arguments,
              result: null
            };
            e.on && e._before(n);
            var r = t.apply(this, arguments);
            return e.on && (n.result = r, e._afterSync(n), e._afterAsync(n)), r
          }
        }
      }, e
    }(),
    Be = {};

  function De(e, t) {
    if (!e || "function" != typeof e[t]) return null;
    var n;
    Be[t] = Be[t] || [];
    for (var r = 0; r < Be[t].length; r++) Be[t][r].obj == e && (n = Be[t][r].hook);
    return n || (n = new We(e, t), Be[t].push({
      obj: e,
      hook: n
    })), n.enable() ? n : null
  }

  function He(e, t, n) {
    if (!e) return function () {};
    var i = Object.getOwnPropertyDescriptor(e.prototype, t);
    if (!i || !i.set) return function () {};
    var o = i.set,
      s = Fe(n),
      a = !0;

    function u(e) {
      o.call(this, e), a && s(this, e)
    }
    return Object.defineProperty(e.prototype, t, Object(r.__assign)(Object(r.__assign)({}, i), {
        set: u
      })),
      function () {
        a = !1;
        var n = Object.getOwnPropertyDescriptor(e.prototype, t);
        n && u === n.set && Object.defineProperty(e.prototype, t, Object(r.__assign)(Object(r.__assign)({}, n), {
          set: o
        }))
      }
  }
  var Ve = /function\s*([\w\-$]+)?\s*\(/i;

  function Ke(e) {
    return e.stack || e.backtrace || e.stacktrace
  }

  function ze() {
    var e, t;
    try {
      throw new Error("")
    } catch (n) {
      e = "<generated>\n", t = Ke(n)
    }
    if (!t) {
      e = "<generated-ie>\n";
      var n = [];
      try {
        for (var r = arguments.callee.caller.caller; r && n.length < 10;) {
          var i = Ve.test(r.toString()) && RegExp.$1 || "[anonymous]";
          n.push(i), r = r.caller
        }
      } catch (e) {
        s(e)
      }
      t = n.join("\n")
    }
    return e + t
  }

  function Qe() {
    try {
      return window.self !== window.top
    } catch (e) {
      return !0
    }
  }
  var Ye = function () {
      function e() {}
      return e.wrap = function (t, n) {
        return void 0 === n && (n = "error"), de(t, function (t) {
          return e.sendToBugsnag(t, n)
        })
      }, e.errorLimit = 15, e.sendToBugsnag = function (t, n, r) {
        if (!(e.errorLimit <= 0)) {
          e.errorLimit--, "string" == typeof t && (t = new Error(t));
          var i = I(document).fs_uid,
            o = i ? k(i) : void 0;
          o && o.orgId != W(window) && (o = void 0);
          var s = new Date(161505784e4).toISOString(),
            a = {
              projectRoot: window.location.origin,
              deviceTime: m(),
              inIframe: Qe(),
              CompiledVersion: "65243d039f",
              CompiledTimestamp: 1615057840,
              CompiledTime: s,
              orgId: W(window),
              "userId:sessionId": o ? o.userId + ":" + o.sessionId : "NA",
              context: document.location && document.location.pathname,
              message: t.message,
              name: "Recording Error",
              releaseStage: "production " + s,
              severity: n,
              language: navigator.language || navigator.userLanguage || "en-GB",
              stacktrace: Ke(t) || ze()
            },
            u = function (e, t, n) {
              var r = encodeURIComponent(t) + "=" + encodeURIComponent(n);
              e.push(r)
            },
            c = [];
          for (var h in a) {
            u(c, h, a[h] || "")
          }
          if (r)
            for (var h in r) {
              var d = typeof r[h];
              u(c, "aux_" + h, "string" === d || "number" === d ? r[h] : qe(r[h]))
            }
          new Image().src = "https://" + j(window) + "/rec/except?" + c.join("&")
        }
      }, e
    }(),
    Ge = {};

  function Je(e, t, n) {
    if (void 0 === n && (n = 1), e) return !0;
    if (Ge[t] = Ge[t] || 0, Ge[t]++, Ge[t] > n) return !1;
    var r = new Error("Assertion failed: " + t);
    return Ye.sendToBugsnag(r, "error"), e
  }

  function Xe(e, t, n, r) {
    void 0 !== n && ("function" == typeof e.addEventListener ? e.addEventListener(t, n, r) : "function" == typeof e.addListener ? e.addListener(n) : s("Target of " + t + " doesn't seem to support listeners"))
  }

  function Ze(e, t, n, r) {
    void 0 !== n && ("function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r) : "function" == typeof e.removeListener ? e.removeListener(n) : s("Target of " + t + " doesn't seem to support listeners"))
  }
  var $e = function () {
    function e() {
      var e = this;
      this._listeners = [], this._children = [], this._yesCapture = !0, this._noCapture = !1;
      try {
        var t = Object.defineProperty({}, "passive", {
          get: function () {
            e._yesCapture = {
              capture: !0,
              passive: !0
            }, e._noCapture = {
              capture: !1,
              passive: !0
            }
          }
        });
        window.addEventListener("test", le, t)
      } catch (e) {}
    }
    return e.prototype.add = function (e, t, n, r, i) {
      return void 0 === i && (i = !1), this.addCustom(e, t, n, r, i)
    }, e.prototype.addCustom = function (e, t, n, r, i) {
      void 0 === i && (i = !1);
      var o = {
        target: e,
        type: t,
        fn: Ye.wrap(function (e) {
          (i || !1 !== e.isTrusted || "message" == t || e._fs_trust_event) && r(e)
        }),
        options: n ? this._yesCapture : this._noCapture,
        index: this._listeners.length
      };
      return this._listeners.push(o), Xe(e, t, o.fn, o.options), o
    }, e.prototype.remove = function (e) {
      e.target && (Ze(e.target, e.type, e.fn, e.options), e.target = null, e.fn = void 0)
    }, e.prototype.clear = function () {
      for (var e = 0; e < this._listeners.length; e++) this._listeners[e].target && this.remove(this._listeners[e]);
      this._listeners = []
    }, e.prototype.createChild = function () {
      var t = new e;
      return this._children.push(t), t
    }, e.prototype.refresh = function () {
      for (var e = 0, t = this._listeners; e < t.length; e++) {
        var n = t[e];
        n.target && (Ze(n.target, n.type, n.fn, n.options), Xe(n.target, n.type, n.fn, n.options))
      }
      for (var r = 0, i = this._children; r < i.length; r++) {
        i[r].refresh()
      }
    }, e
  }();

  function et(e) {
    return "function" == typeof e
  }
  var tt = Array.isArray ? Array.isArray : function (e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    },
    nt = 0,
    rt = function (e, t) {
      ct[nt] = e, ct[nt + 1] = t, 2 === (nt += 2) && it()
    };
  var it, ot, st, at, ut, ct = new Array(1e3);

  function ht() {
    for (var e = 0; e < nt; e += 2) {
      (0, ct[e])(ct[e + 1]), ct[e] = void 0, ct[e + 1] = void 0
    }
    nt = 0
  }

  function dt(e, t) {
    var n = arguments,
      r = this,
      i = new this.constructor(ft);
    void 0 === i[pt] && Ot(i);
    var o, s = r._state;
    return s ? (o = n[s - 1], rt(function () {
      return It(s, i, o, r._result)
    })) : bt(r, i, e, t), i
  }

  function lt(e) {
    if (e && "object" == typeof e && e.constructor === this) return e;
    var t = new this(ft);
    return mt(t, e), t
  }
  window.MutationObserver ? (st = 0, at = new MutationObserver(ht), ut = document.createTextNode(""), at.observe(ut, {
    characterData: !0
  }), it = function () {
    var e = st = ++st % 2;
    ut.data = e + ""
  }) : (ot = setTimeout, it = function () {
    return ot(ht, 1)
  });
  var pt = Math.random().toString(36).substring(16);

  function ft() {}
  var _t = new Tt;

  function vt(e) {
    try {
      return e.then
    } catch (e) {
      return _t.error = e, _t
    }
  }

  function gt(e, t, n) {
    t.constructor === e.constructor && n === dt && t.constructor.resolve === lt ? function (e, t) {
      1 === t._state ? wt(e, t._result) : 2 === t._state ? St(e, t._result) : bt(t, void 0, function (t) {
        return mt(e, t)
      }, function (t) {
        return St(e, t)
      })
    }(e, t) : n === _t ? (St(e, _t.error), _t.error = null) : void 0 === n ? wt(e, t) : et(n) ? function (e, t, n) {
      rt(function (e) {
        var r = !1,
          i = function (e, t, n, r, i) {
            try {
              e.call(t, n, r)
            } catch (e) {
              return e
            }
          }(n, t, function (n) {
            r || (r = !0, t !== n ? mt(e, n) : wt(e, n))
          }, function (t) {
            r || (r = !0, St(e, t))
          }, e._label);
        !r && i && (r = !0, St(e, i))
      }, e)
    }(e, t, n) : wt(e, t)
  }

  function mt(e, t) {
    var n;
    e === t ? St(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof (n = t) || "object" == typeof n && null !== n ? gt(e, t, vt(t)) : wt(e, t)
  }

  function yt(e) {
    e._onerror && e._onerror(e._result), Et(e)
  }

  function wt(e, t) {
    void 0 === e._state && (e._result = t, e._state = 1, 0 !== e._subscribers.length && rt(Et, e))
  }

  function St(e, t) {
    void 0 === e._state && (e._state = 2, e._result = t, rt(yt, e))
  }

  function bt(e, t, n, r) {
    var i = e._subscribers,
      o = i.length;
    e._onerror = null, i[o] = t, i[o + 1] = n, i[o + 2] = r, 0 === o && e._state && rt(Et, e)
  }

  function Et(e) {
    var t = e._subscribers,
      n = e._state;
    if (0 !== t.length) {
      for (var r, i, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? It(n, r, i, o) : i(o);
      e._subscribers.length = 0
    }
  }

  function Tt() {
    this.error = null
  }
  var kt = new Tt;

  function It(e, t, n, r) {
    var i, o, s, a, u = et(n);
    if (u) {
      if ((i = function (e, t) {
          try {
            return e(t)
          } catch (e) {
            return kt.error = e, kt
          }
        }(n, r)) === kt ? (a = !0, o = i.error, i.error = null) : s = !0, t === i) return void St(t, new TypeError("A promises callback cannot return that same promise."))
    } else i = r, s = !0;
    void 0 !== t._state || (u && s ? mt(t, i) : a ? St(t, o) : 1 === e ? wt(t, i) : 2 === e && St(t, i))
  }
  var Ct = 0;

  function Ot(e) {
    e[pt] = Ct++, e._state = void 0, e._result = void 0, e._subscribers = []
  }

  function At(e, t) {
    this._instanceConstructor = e, this.promise = new e(ft), this.promise[pt] || Ot(this.promise), tt(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? wt(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && wt(this.promise, this._result))) : St(this.promise, new Error("Array Methods must be provided an Array"))
  }
  At.prototype._enumerate = function () {
    for (var e = this.length, t = this._input, n = 0; void 0 === this._state && n < e; n++) this._eachEntry(t[n], n)
  }, At.prototype._eachEntry = function (e, t) {
    var n = this._instanceConstructor,
      r = n.resolve;
    if (r === lt) {
      var i = vt(e);
      if (i === dt && void 0 !== e._state) this._settledAt(e._state, t, e._result);
      else if ("function" != typeof i) this._remaining--, this._result[t] = e;
      else if (n === Rt) {
        var o = new n(ft);
        gt(o, e, i), this._willSettleAt(o, t)
      } else this._willSettleAt(new n(function (t) {
        return t(e)
      }), t)
    } else this._willSettleAt(r(e), t)
  }, At.prototype._settledAt = function (e, t, n) {
    var r = this.promise;
    void 0 === r._state && (this._remaining--, 2 === e ? St(r, n) : this._result[t] = n), 0 === this._remaining && wt(r, this._result)
  }, At.prototype._willSettleAt = function (e, t) {
    var n = this;
    bt(e, void 0, function (e) {
      return n._settledAt(1, t, e)
    }, function (e) {
      return n._settledAt(2, t, e)
    })
  };
  var Rt = function (e) {
    this[pt] = Ct++, this._result = this._state = void 0, this._subscribers = [], ft !== e && ("function" != typeof e && function () {
      throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }(), this instanceof Rt ? function (e, t) {
      try {
        t(function (t) {
          mt(e, t)
        }, function (t) {
          St(e, t)
        })
      } catch (t) {
        St(e, t)
      }
    }(this, e) : function () {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }())
  };
  Rt.all = function (e) {
    return new At(this, e).promise
  }, Rt.race = function (e) {
    var t = this;
    return tt(e) ? new t(function (n, r) {
      for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
    }) : new t(function (e, t) {
      return t(new TypeError("You must pass an array to race."))
    })
  }, Rt.resolve = lt, Rt.reject = function (e) {
    var t = new this(ft);
    return St(t, e), t
  }, Rt._setAsap = function (e) {
    rt = e
  }, Rt._asap = rt, Rt.prototype = {
    constructor: Rt,
    then: dt,
    "catch": function (e) {
      return this.then(null, e)
    }
  };
  var xt = "function" == typeof window.Promise ? window.Promise : Rt;

  function Pt() {
    var e, t;
    return {
      promise: new xt(function (n, r) {
        e = n, t = r
      }),
      resolve: e,
      reject: t
    }
  }

  function Lt(e) {
    return new xt(function (t) {
      a.setWindowTimeout(window, de(t), e)
    })
  }
  var Mt, Ft = function () {
      try {
        var e = new MessageChannel;
        return e.port1.start(), e
      } catch (e) {
        return null
      }
    }(),
    qt = function () {
      return Ft ? new xt(function (e) {
        var t = Ft.port1,
          n = Ft.port2,
          r = function () {
            e(), t.removeEventListener("message", r)
          };
        t.addEventListener("message", r), n.postMessage(void 0)
      }) : Lt(0)
    };
  ! function (e) {
    e.Essential = "0", e.High = "1", e.Medium = "2", e.Low = "3"
  }(Mt || (Mt = {}));
  var Ut = ["0", "1", "2", "3"],
    Nt = function () {
      function e() {
        var e = this;
        this.measurementTasks = null, this.performingMeasurements = !1, this.recursionDepth = 0, this.bugsnagNonce = !0, this.performMeasurements = Ye.wrap(function () {
          if (e.performingMeasurements) Ye.sendToBugsnag("performMeasurements() already in progress", "error");
          else {
            var t = m(),
              n = t + 150;
            e.performingMeasurements = !0;
            try {
              if (!e.measurementTasks) return;
              e: for (var r = 0, i = Ut; r < i.length; r++)
                for (var o = i[r], s = e.measurementTasks[o], a = 0; a < s.length; a++) {
                  s[a]();
                  var u = m();
                  if (u > n) {
                    e.bugsnagNonce || (e.bugsnagNonce = !0, Ye.sendToBugsnag("Out of time for remaining measurement tasks.", "warning", {
                      totalRunningTimeMs: u - t
                    }));
                    break e
                  }
                }
              e.measurementTasks = null
            } finally {
              e.performingMeasurements = !1
            }
          }
        })
      }
      return e.create = function (e) {
        return e.ResizeObserver ? new jt(e, e.ResizeObserver) : new Wt(e)
      }, e.prototype.requestMeasureTask = function (e, t) {
        var n, r = this;
        if (this.recursionDepth > 16) Ye.sendToBugsnag("Too much synchronous recursion in requestMeasureTask", "error");
        else {
          var i = this.performingMeasurements ? this.recursionDepth : 0,
            o = Ye.wrap(function () {
              var e = r.recursionDepth;
              r.recursionDepth = i + 1;
              try {
                t()
              } finally {
                r.recursionDepth = e
              }
            });
          this.measurementTasks ? this.measurementTasks[e].push(o) : (this.measurementTasks = ((n = {})[Mt.Essential] = [], n[Mt.High] = [], n[Mt.Medium] = [], n[Mt.Low] = [], n[e] = [o], n), this.schedule())
        }
      }, e.prototype.performMeasurementsNow = function () {
        this.performMeasurements()
      }, e
    }(),
    jt = function (e) {
      function t(t, n) {
        var r = e.call(this) || this;
        return r.wnd = t, r.ResizeObserver = n, r
      }
      return Object(r.__extends)(t, e), t.prototype.schedule = function () {
        var e = this,
          t = this.ResizeObserver,
          n = this.wnd.document,
          r = n.body || n.documentElement || n.head,
          i = new t(function () {
            i.unobserve(r), e.performMeasurements()
          });
        i.observe(r)
      }, t
    }(Nt),
    Wt = function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return n.wnd = t, n
      }
      return Object(r.__extends)(t, e), t.prototype.schedule = function () {
        Object(r.__awaiter)(void 0, void 0, xt, function () {
          var e;
          return Object(r.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return (e = a.requestWindowAnimationFrame) ? [4, new xt(function (t) {
                  return e(window, t)
                })] : [3, 2];
              case 1:
                t.sent(), t.label = 2;
              case 2:
                return [4, qt()];
              case 3:
                return t.sent(), [2];
            }
          })
        }).then(this.performMeasurements)
      }, t
    }(Nt);

  function Bt(e, t) {
    return t && e.pageLeft == t.pageLeft && e.pageTop == t.pageTop
  }

  function Dt(e, t) {
    return t && e.width == t.width && e.height == t.height
  }

  function Ht(e) {
    return {
      pageLeft: e.pageLeft,
      pageTop: e.pageTop,
      width: e.width,
      height: e.height
    }
  }
  var Vt = [
      ["@import\\s+\"", "\""],
      ["@import\\s+'", "'"]
    ].concat([
      ["url\\(\\s*\"", "\"\\s*\\)"],
      ["url\\(\\s*'", "'\\s*\\)"],
      ["url\\(\\s*", "\\s*\\)"]
    ]),
    Kt = ".*?" + /(?:[^\\](?:\\\\)*)/.source;
  new RegExp(Vt.map(function (e) {
    var t = e[0],
      n = e[1];
    return "(" + t + ")(" + Kt + ")(" + n + ")"
  }).join("|"), "g");
  var zt = /url\(["']?(.+?)["']?\)/g,
    Qt = /^\s*\/\//;

  function Yt(e) {
    return "BackCompat" == e.compatMode
  }

  function Gt(e) {
    return e && e.body && e.documentElement ? Yt(e) ? [e.body.clientWidth, e.body.clientHeight] : [e.documentElement.clientWidth, e.documentElement.clientHeight] : [0, 0]
  }
  var Jt = function () {
    function e(e, t) {
      var n, r;
      this.hasKnownPosition = !1, this.pageLeft = 0, this.pageTop = 0, this.width = 0, this.height = 0, this.clientWidth = 0, this.clientHeight = 0;
      var i = e.document;
      if (i && i.documentElement && i.body) {
        if ("visualViewport" in e && (this.hasKnownPosition = !0, this.pageTop = e.visualViewport.pageTop - e.visualViewport.offsetTop, this.pageLeft = e.visualViewport.pageLeft - e.visualViewport.offsetLeft, 0 == this.pageTop && (this.pageTop = 0), 0 == this.pageLeft && (this.pageLeft = 0)), n = Gt(i), this.clientWidth = n[0], this.clientHeight = n[1], void 0 !== t && this.clientWidth == t.clientWidth && this.clientHeight == t.clientHeight && t.width > 0 && t.height > 0) return this.width = t.width, void(this.height = t.height);
        r = this.computeLayoutViewportSizeFromMediaQueries(e), this.width = r[0], this.height = r[1]
      }
    }
    return e.prototype.computeLayoutViewportSizeFromMediaQueries = function (e) {
      var t = this.findMediaValue(e, "width", this.clientWidth, this.clientWidth + 128);
      void 0 === t && (t = this.tryToGet(e, "innerWidth")), void 0 === t && (t = this.clientWidth);
      var n = this.findMediaValue(e, "height", this.clientHeight, this.clientHeight + 128);
      return void 0 === n && (n = this.tryToGet(e, "innerHeight")), void 0 === n && (n = this.clientHeight), [t, n]
    }, e.prototype.findMediaValue = function (e, t, n, r) {
      if (a.matchMedia) {
        var i = a.matchMedia(e, "(min-" + t + ": " + n + "px)");
        if (null != i) {
          if (i.matches && a.matchMedia(e, "(max-" + t + ": " + n + "px)").matches) return n;
          for (; n <= r;) {
            var o = a.mathFloor((n + r) / 2);
            if (a.matchMedia(e, "(min-" + t + ": " + o + "px)").matches) {
              if (a.matchMedia(e, "(max-" + t + ": " + o + "px)").matches) return o;
              n = o + 1
            } else r = o - 1
          }
        }
      }
    }, e.prototype.tryToGet = function (e, t) {
      try {
        return e[t]
      } catch (e) {
        return
      }
    }, e
  }();

  function Xt(e, t) {
    return new Jt(e, t)
  }
  var Zt = function (e, t) {
    this.offsetLeft = 0, this.offsetTop = 0, this.pageLeft = 0, this.pageTop = 0, this.width = 0, this.height = 0, this.scale = 0;
    var n = e.document;
    if (n.body) {
      "pageXOffset" in e ? (this.pageLeft = e.pageXOffset, this.pageTop = e.pageYOffset) : n.scrollingElement ? (this.pageLeft = n.scrollingElement.scrollLeft, this.pageTop = n.scrollingElement.scrollTop) : Yt(n) ? (this.pageLeft = n.body.scrollLeft, this.pageTop = n.body.scrollTop) : n.documentElement && (n.documentElement.scrollLeft > 0 || n.documentElement.scrollTop > 0) ? (this.pageLeft = n.documentElement.scrollLeft, this.pageTop = n.documentElement.scrollTop) : (this.pageLeft = n.body.scrollLeft || 0, this.pageTop = n.body.scrollTop || 0), this.offsetLeft = this.pageLeft - t.pageLeft, this.offsetTop = this.pageTop - t.pageTop;
      try {
        var r = e.innerWidth,
          i = e.innerHeight
      } catch (e) {
        return
      }
      if (0 != r && 0 != i) {
        this.scale = t.width / r, this.scale < 1 && (this.scale = 1);
        var o = t.width - t.clientWidth,
          s = t.height - t.clientHeight;
        this.width = r - o / this.scale, this.height = i - s / this.scale
      }
    }
  };

  function $t(e) {
    var t = e;
    return t.tagName ? "object" == typeof t.tagName ? "form" : t.tagName.toLowerCase() : null
  }
  var en = new RegExp("[^\\s]"),
    tn = new RegExp("[\\s]*$");
  String.prototype;

  function nn(e) {
    var t = en.exec(e);
    if (!t) return e;
    for (var n = t.index, r = (t = tn.exec(e)) ? e.length - t.index : 0, i = "\uFFFF", o = e.slice(n, e.length - r).split(/\r\n?|\n/g), s = 0; s < o.length; s++) i += "" + o[s].length, s != o.length - 1 && (i += ":");
    return (n || r) && (i += " " + n + " " + r), i
  }
  var rn = {},
    on = 1;

  function sn(e) {
    var t, n, r = hn(e);
    return null !== (n = null === (t = null == r ? void 0 : r.watchKind) || void 0 === t ? void 0 : t.hasKinds()) && void 0 !== n && n
  }

  function an(e) {
    var t, n, r = hn(e);
    return null !== (n = null === (t = null == r ? void 0 : r.watchKind) || void 0 === t ? void 0 : t.has(2)) && void 0 !== n && n
  }

  function un(e) {
    var t = hn(e);
    return !!t && !!t.mask
  }

  function cn(e) {
    var t = hn(e);
    return null == t ? void 0 : t.watchKind
  }

  function hn(e) {
    return e && e._fs ? rn[e._fs] : null
  }

  function dn(e) {
    return rn[e]
  }

  function ln(e) {
    try {
      return e && e._fs || 0
    } catch (e) {
      return 0
    }
  }

  function pn(e) {
    return an(e) ? 0 : ln(e)
  }

  function fn(e, t) {
    e.parent && (t.unobserveSubtree(e.node), e.parent.child == e && (e.parent.child = e.next), e.parent.lastChild == e && (e.parent.lastChild = e.prev), e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent = e.prev = e.next = null, delete rn[e.id], e.node._fs == e.id && (e.node._fs = 0), e.id = 0, e.child && _n(e.child))
  }

  function _n(e) {
    for (var t = [e]; t.length > 0 && t.length < 1e4;) {
      var n = t.pop();
      delete rn[n.id], n.node._fs == n.id && (n.node._fs = 0), n.id = 0, n.next && t.push(n.next), n.child && t.push(n.child)
    }
    Je(t.length < 1e4, "clearIds is fast")
  }
  var vn, gn = function () {
      function e() {
        var t = this;
        this._wrappedTick = Ye.wrap(function () {
          t.unregister(), t._tick()
        }), this._due = 0, this._id = e.nextId++
      }
      return e._rearm = function () {
        e.checkedAlready = !1, e.lastCheck = 0
      }, e.checkForBrokenSchedulers = function () {
        return Object(r.__awaiter)(this, void 0, xt, function () {
          var t, n;
          return Object(r.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return !a.requestWindowAnimationFrame || e.checkedAlready || (t = m()) - e.lastCheck < 100 ? [2, !1] : (e.lastCheck = t, e.checkedAlready = !0, [4, new xt(function (e) {
                  return a.requestWindowAnimationFrame(window, e)
                })]);
              case 1:
                return r.sent(), n = [], Oe(e.registry, function (e) {
                  var r = e.maybeForceTick(t);
                  r && n.push(r)
                }), [4, xt.all(n)];
              case 2:
                return r.sent(), a.requestWindowAnimationFrame(window, Ye.wrap(function () {
                  e.checkedAlready = !1
                })), [2, !0];
            }
          })
        })
      }, e.stopAll = function () {
        Oe(this.registry, function (e) {
          return e.stop()
        })
      }, e.prototype.setTick = function (e) {
        this._tick = e
      }, e.prototype.stop = function () {
        this.cancel(), delete e.registry[this._id]
      }, e.prototype.register = function (t) {
        this._due = m() + 100 + 1.5 * t, e.registry[this._id] = this
      }, e.prototype.unregister = function () {
        delete e.registry[this._id]
      }, e.prototype.maybeForceTick = function (e) {
        if (e > this._due) return xt.resolve().then(this._wrappedTick)["catch"](function () {})
      }, e.registry = {}, e.nextId = 0, e.checkedAlready = !1, e.lastCheck = 0, e
    }(),
    mn = function (e) {
      function t(t) {
        var n = e.call(this) || this;
        return n._interval = t, n._handle = -1, n
      }
      return Object(r.__extends)(t, e), t.prototype.start = function (e) {
        var t = this; - 1 == this._handle && (this.setTick(function () {
          e(), t.register(t._interval)
        }), this._handle = a.setWindowInterval(window, this._wrappedTick, this._interval), this.register(this._interval))
      }, t.prototype.cancel = function () {
        -1 != this._handle && (a.clearWindowInterval(window, this._handle), this._handle = -1, this.setTick(function () {}))
      }, t
    }(gn),
    yn = function (e) {
      function t(t, n, r) {
        void 0 === n && (n = 0);
        for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
        var s = e.call(this) || this;
        return s.delay = n, s.timer = -1, s.setTick(function () {
          t.apply(void 0 === r ? window : r, i), s.stop()
        }), s
      }
      return Object(r.__extends)(t, e), t.prototype.start = function (e) {
        return void 0 === e && (e = this.delay), this.delay = e, a.clearWindowTimeout(window, this.timer), this.timer = a.setWindowTimeout(window, this._wrappedTick, this.delay), this.register(e), this
      }, t.prototype.cancel = function () {
        -1 != this.timer && (a.clearWindowTimeout(window, this.timer), this.timer = -1)
      }, t
    }(gn),
    wn = function () {
      function e(e, t, n) {
        this.limit = e, this.breaker = n, this.remaining = 0, this.ticker = new mn(t), this.open()
      }
      return e.prototype.guard = function (e) {
        var t = this;
        return function () {
          return 0 == t.remaining ? (t.breaker(), void t.remaining--) : t.remaining < 0 ? void 0 : (t.remaining--, e.apply(this, arguments))
        }
      }, e.prototype.close = function () {
        return this.ticker.stop(), this
      }, e.prototype.open = function () {
        var e = this;
        return this.remaining = this.limit, this.ticker.start(function () {
          e.remaining = e.limit
        }), this
      }, e
    }(),
    Sn = function () {
      function e() {
        this._reported = 0, this._skew = 0, this._startTime = y()
      }
      return e.prototype.wallTime = function () {
        return m()
      }, e.prototype.now = function () {
        var e = this.wallTime() - this._startTime;
        return e < 0 && this._reportTimeSkew("timekeeper now() is negative"), e
      }, e.prototype.startTime = function () {
        return this._startTime
      }, e.prototype.setStartTime = function (e) {
        var t = this.wallTime();
        this._startTime = e, e > t && (this._skew = e - t, this._reportTimeSkew("timekeeper set with future ts"))
      }, e.prototype._reportTimeSkew = function (e) {
        this._reported++ <= 2 && Ye.sendToBugsnag(e, "error", {
          skew: this._skew,
          startTime: this._startTime,
          wallTime: this.wallTime()
        })
      }, e
    }(),
    bn = function () {
      function e(e) {
        this._queue = e, this._fallback = !1, this._elemsWithDeferredChanges = {}, this._values = {}, this._radios = {}, vn = this
      }
      return e.prototype.hookEvents = function () {
        (function () {
          var e = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
          if (!e || !e.set) return !1;
          En || (He(HTMLInputElement, "value", On), He(HTMLInputElement, "checked", On), He(HTMLSelectElement, "value", On), He(HTMLTextAreaElement, "value", On), He(HTMLSelectElement, "selectedIndex", On), He(HTMLOptionElement, "selected", On), En = !0);
          return !0
        })() || (this._fallback = !0)
      }, e.prototype.addInput = function (e) {
        var t = pn(e);
        if (t) {
          var n = !1;
          if (function (e) {
              switch (e.type) {
                case "checkbox":
                case "radio":
                  return e.checked != e.hasAttribute("checked");
                default:
                  return (e.value || "") != function (e) {
                    if ("select" != $t(e)) return e.getAttribute("value") || "";
                    var t = e,
                      n = t.querySelector("option[selected]") || t.querySelector("option");
                    if (!n) return "";
                    return n.value || ""
                  }(e);
              }
            }(e) && (this._addChangeForElem(e), n = !0), this._fallback && (this._elemsWithDeferredChanges[t] = e), !n)
            if (Rn(e)) {
              var r = Cn(e);
              e.checked && (this._radios[r] = t)
            } else this._values[t] = An(e)
        }
      }, e.prototype.diffValue = function (e, t) {
        var n = pn(e);
        if (!n) return !1;
        if (Rn(e)) {
          var r = Cn(e);
          return this._radios[r] === n !== ("true" === t)
        }
        return this._values[n] !== t
      }, e.prototype.onChange = function (e, t) {
        void 0 === t && (t = An(e)), pn(e) && e && this.diffValue(e, t) && this._addChangeForElem(e)
      }, e.prototype.tick = function () {
        for (var e in this._elemsWithDeferredChanges) {
          var t = this._elemsWithDeferredChanges[e];
          if (pn(t)) try {
            delete this._elemsWithDeferredChanges[e];
            var n = An(t);
            this.diffValue(t, n) && this._addChangeForElem(t)
          } finally {
            this._fallback && (this._elemsWithDeferredChanges[e] = t)
          } else delete this._elemsWithDeferredChanges[e], delete this._values[e], Rn(t) && delete this._radios[Cn(t)]
        }
      }, e.prototype.shutdown = function () {
        vn = void 0
      }, e.prototype._addChangeForElem = function (e) {
        var t = pn(e);
        if (t)
          if (this._shouldDeferChange(t, e)) this._elemsWithDeferredChanges[t] = e;
          else {
            var n = An(e),
              r = un(e) ? nn(n) : n;
            if (this._queue.enqueue({
                Kind: P.VALUECHANGE,
                Args: [t, r]
              }), Rn(e)) {
              var i = Cn(e);
              "false" === n && this._radios[i] === t ? delete this._radios[i] : "true" === n && (this._radios[i] = t)
            } else this._values[t] = n
          }
      }, e.prototype._shouldDeferChange = function (e, t) {
        if (this._elemsWithDeferredChanges[e]) return !0;
        if ("select" !== $t(t)) return !1;
        for (var n = t.options, r = 0; r < n.length; r++) {
          if (!pn(n[r])) return !0
        }
        return !1
      }, e
    }(),
    En = !1;
  var Tn, kn = {};

  function In() {
    try {
      if (vn)
        for (var e in kn) {
          var t = kn[e],
            n = t[0],
            r = t[1];
          vn.onChange(n, r)
        }
    } finally {
      Tn = null, kn = {}
    }
  }

  function Cn(e) {
    if (!e) return "";
    for (var t = e; t && "form" != $t(t);) t = t.parentElement;
    return (t && "form" == $t(t) ? ln(t) : 0) + ":" + e.name
  }

  function On(e, t) {
    if (vn) {
      var n = function e(t, n) {
          if (void 0 === n && (n = 2), n <= 0) return t;
          var r = $t(t);
          return "option" != r && "optgroup" != r || !t.parentElement ? t : e(t.parentElement, n - 1)
        }(e),
        r = pn(n);
      r && vn.diffValue(n, "" + t) && (kn[r] = [n, "" + t], Tn || (Tn = new yn(In)).start())
    }
  }

  function An(e) {
    switch (e.type) {
      case "checkbox":
      case "radio":
        return "" + e.checked;
      default:
        var t = e.value;
        return t || (t = ""), "" + t;
    }
  }

  function Rn(e) {
    return e && "radio" == e.type
  }
  var xn = n(1),
    Pn = {};

  function Ln(e) {
    void 0 === e && (e = "__default");
    var t = Pn[e];
    return t || (t = function () {
      var e = document.implementation.createHTMLDocument("");
      return e.head || e.documentElement.appendChild(e.createElement("head")), e.body || e.documentElement.appendChild(e.createElement("body")), e
    }(), "__default" !== e && (t.open(), t.write(e), t.close()), Pn[e] = t), t
  }
  var Mn = new(function () {
    function e() {
      var e = Ln(),
        t = e.getElementById("urlresolver-base");
      t || ((t = e.createElement("base")).id = "urlresolver-base", e.head.appendChild(t));
      var n = e.getElementById("urlresolver-parser");
      n || ((n = e.createElement("a")).id = "urlresolver-parser", e.head.appendChild(n)), this.base = t, this.parser = n
    }
    return e.prototype.parseUrl = function (e, t) {
      if ("undefined" != typeof URL) try {
        e || (e = document.baseURI);
        var n = e ? new URL(t, e) : new URL(t);
        if (n.href) return n
      } catch (e) {}
      return this.parseUrlUsingBaseAndAnchor(e, t)
    }, e.prototype.parseUrlUsingBaseAndAnchor = function (e, t) {
      this.base.setAttribute("href", e), this.parser.setAttribute("href", t);
      var n = document.createElement("a");
      return n.href = this.parser.href, n
    }, e.prototype.resolveUrl = function (e, t) {
      return this.parseUrl(e, t).href
    }, e.prototype.resolveToDocument = function (e, t) {
      var n = qn(e);
      return null == n ? t : this.resolveUrl(n, t)
    }, e
  }());

  function Fn(e, t) {
    return Mn.parseUrl(e, t)
  }

  function qn(e) {
    var t = e.document,
      n = e.location.href;
    if ("string" == typeof t.baseURI) n = t.baseURI;
    else {
      var r = t.getElementsByTagName("base")[0];
      r && r.href && (n = r.href)
    }
    return "about:blank" == n && e.parent != e ? qn(e.parent) : n
  }
  var Un = ["allowReorder", "attributeName", "attributeType", "autoReverse", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "contentScriptType", "contentStyleType", "diffuseConstant", "edgeMode", "externalResourcesRequired", "filterRes", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "referrerPolicy", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].reduce(function (e, t) {
      return e[t] = t, e[t.toUpperCase()] = t, e
    }, {}),
    Nn = n(2),
    jn = "(blocked)",
    Wn = 16e6;

  function Bn(e, t) {
    var n = e.textContent;
    if (!n) return "";
    if (!t && !(t = hn(e))) return "";
    var r = n.length;
    return r > Wn ? (Ye.sendToBugsnag("Ignoring huge text node", "warning", {
      length: r
    }), "") : e.parentNode && "style" == $t(e.parentNode) ? n : t.mask ? nn(n) : n
  }

  function Dn(e) {
    return Un[e] || e.toLowerCase()
  }

  function Hn(e, t, n) {
    var r, i, o = $t(e);
    if (null === o) return null;
    var s = function (e) {
      var n, r, s;
      i = null !== (r = null === (n = Nn[e][o]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : null === (s = Nn[e]["*"]) || void 0 === s ? void 0 : s[t]
    };
    if (s("Any"), void 0 === i) {
      var a = hn(e);
      if (!a) return null;
      (null === (r = a.watchKind) || void 0 === r ? void 0 : r.has(2)) ? s("Exclude"): a.mask && s("Mask")
    }
    if (void 0 === i) return n;
    switch (i) {
      case "erase":
        return null;
      case "scrubUrl":
        return Vn(n, {
          source: "dom",
          type: o
        });
      case "maskText":
        return nn(n);
      default:
        return Object(xn.assertExhaustive)(i);
    }
  }

  function Vn(e, t) {
    if ("" === e) return e;
    switch (t.source) {
      case "dom":
        switch (n = t.type) {
          case "frame":
          case "iframe":
            return zn(e);
          default:
            return Kn(e);
        }
        case "event":
          switch (n = t.type) {
            case P.AJAX_REQUEST:
            case P.NAVIGATE:
              return Kn(e);
            case P.SET_FRAME_BASE:
              return zn(e);
            default:
              return Object(xn.assertExhaustive)(n);
          }
          case "log":
            return zn(e);
          case "page":
            var n;
            switch (n = t.type) {
              case "base":
                return zn(e);
              case "referrer":
              case "url":
                return Kn(e);
              default:
                return Object(xn.assertExhaustive)(n);
            }
            case "perfEntry":
              switch (t.type) {
                case "frame":
                case "iframe":
                case "navigation":
                case "other":
                  return zn(e);
                default:
                  return Kn(e);
              }
              default:
                return Object(xn.assertExhaustive)(t);
    }
  }

  function Kn(e) {
    return Yn(e, Xn)
  }

  function zn(e) {
    return Yn(e, Gn)
  }

  function Qn(e, t, n) {
    if (e.pathname.indexOf(t) >= 0) {
      var r = e.pathname;
      "/" !== r.charAt(0) && (r = "/" + r), e.pathname = r.replace(n, "$1" + jn)
    }
  }

  function Yn(e, t) {
    var n = Fn("", e);
    n.hash && (n.hash = function (e, t) {
      if (t.test(e)) return "#" + jn;
      return e
    }(n.hash, Jn));
    for (var r = 0, i = Zn; r < i.length; r++) {
      var o = i[r];
      Qn(n, o[0], o[1])
    }
    return n.search && n.search.length > 0 && (n.search = function (e, t) {
      return e.split("?").map(function (e) {
        return function (e, t) {
          return e.replace("?", "").split("&").map(function (e) {
            return e.split("=")
          }).map(function (e) {
            var n = e[0],
              r = e[1],
              i = e.slice(2);
            return t.test(n) && void 0 !== r ? [n, jn].concat(i) : [n, r].concat(i)
          }).map(function (e) {
            var t = e[0],
              n = e[1],
              r = e.slice(2);
            return void 0 === n ? t : [t, n].concat(r).join("=")
          }).join("&")
        }(e, t)
      }).join("?")
    }(n.search, t)), n.href.substring(0, 2048)
  }
  var Gn = new RegExp(".*", "i"),
    Jn = new RegExp("access_token|#;;i=", "i"),
    Xn = Gn,
    Zn = [];

  function $n(e) {
    var t = e.paths,
      n = e.queries;
    Xn = new RegExp(n.join("|"), "i"), Zn = [];
    for (var r = 0, i = t; r < i.length; r++) {
      var o = i[r];
      Zn.push([o, new RegExp("(\\/" + o + "\\/).*$", "i")])
    }
  }
  var er = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gi,
    tr = /(?:(http)|(ftp)|(file))[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/gi;

  function nr(e) {
    return "function" == typeof (t = e.constructor) && Function.prototype.toString.call(t).indexOf("[native code]") > -1;
    var t
  }
  var rr = {
      INPUT: !0,
      TEXTAREA: !0,
      NOSCRIPT: !0
    },
    ir = function () {
      function e(e, t) {
        this._watcher = e, this._resizer = t, rn = {}, on = 1
      }
      return e.prototype.tokenizeNode = function (e, t, n, r, i, o, s) {
        var a = this,
          u = hn(t),
          c = hn(n),
          h = [];
        return function (e) {
          var t = on;
          try {
            return e(), !0
          } catch (e) {
            return on = t, !1
          }
        }(function () {
          a.tokeNode(e, u, c, r, h, i, o, s)
        }) || (h = []), h
      }, e.prototype.tokeNode = function (e, t, n, r, i, o, s, a) {
        for (var u, c = [{
            parentMirror: t,
            nextMirror: n,
            node: r
          }], h = function () {
            var t = c.pop();
            if (!t) return "continue";
            if ("string" == typeof t) return i.push(t), "continue";
            var n = t.parentMirror,
              r = t.nextMirror,
              h = t.node,
              l = d._encodeTagAndAttributes(e, n, r, h, i, o, s);
            if (null == l || (null === (u = l.watchKind) || void 0 === u ? void 0 : u.has(2))) return "continue";
            var p = 1 === h.nodeType ? h.shadowRoot : null;
            return (p || h.lastChild) && a(l) ? (c.push("]"), Me(h.lastChild, function (e) {
              e && c.push({
                parentMirror: l,
                nextMirror: null,
                node: e
              })
            }), p && c.push({
              parentMirror: l,
              nextMirror: null,
              node: p
            }), void c.push("[")) : "continue"
          }, d = this; c.length;) h()
      }, e.prototype._encodeTagAndAttributes = function (e, t, n, r, i, o, s) {
        var a, u;
        if ("script" == $t(r) || 8 == r.nodeType) return null;
        var c, h, d, l, p = function (e) {
            return e.constructor === window.ShadowRoot
          }(r),
          f = function (e) {
            var t = {
              id: on++,
              node: e
            };
            return rn[t.id] = t, e._fs = t.id, t
          }(r);
        if ((p || (null == t ? void 0 : t.isInShadowDOM)) && (f.isInShadowDOM = !0), t && (p ? (t.shadow = f, f.parent = t) : (c = t, h = f, d = n, l = this._resizer, fn(h, l), h.parent = c, h.next = d, d && (h.prev = d.prev, d.prev = h), null == h.next ? (h.prev = c.lastChild, c.lastChild = h) : h.next.prev = h, null == h.prev ? c.child = h : h.prev.next = h)), 10 == r.nodeType) {
          var _ = r;
          return i.push("<!DOCTYPE", ":name", _.name, ":publicId", _.publicId || "", ":systemId", _.systemId || ""), f
        }
        f.mask = null === (a = f.parent) || void 0 === a ? void 0 : a.mask;
        try {
          switch (r.nodeType) {
            default:
              i.push("<" + r.nodeName), or(r, o);
              break;
            case 11:
            case 9:
              var v;
              v = p ? nr(r) ? "#shadow" : "#polyfillshadow" : r.nodeName, i.push("<" + v), or(r, o);
              break;
            case 3:
              void 0 === f.mask && (f.mask = !f.parent || f.parent.mask), f.mask && this._resizer.observe(r.parentElement), or(r, o), i.push("<" + r.nodeName, Bn(r, f));
              break;
            case 1:
              var g = r,
                m = g.nodeName;
              "http://www.w3.org/2000/svg" == g.namespaceURI && (m = "svg:" + m), i.push("<" + m);
              var y = this.getWatchState(g, !!f.isInShadowDOM, e);
              null != y && (f.watchKind = y, y.has(16) && this._resizer.observe(g), y.has(2) && (this._resizer.observe(g), i.push(":_fs_excluded", "true")), y.has(8) && (f.mask = !1), y.has(4) && (f.mask = !0)), f.mask && i.push(":_fs_masked", "true"), (null === (u = f.watchKind) || void 0 === u ? void 0 : u.has(2)) || or(r, o),
                function (e, t) {
                  var n;
                  if (ve && "output" === $t(e)) return;
                  var r = e;
                  if (void 0 !== r.hasAttributes && !r.hasAttributes() || void 0 === r.hasAttributes && r.attributes && r.attributes.length <= 0) return;
                  if (void 0 !== r.getAttributeNames)
                    for (var i = 0, o = null !== (n = r.getAttributeNames()) && void 0 !== n ? n : []; i < o.length; i++) {
                      var s = o[i];
                      sr(e, t, s, r.getAttribute(s))
                    } else
                      for (var a = 0; a < r.attributes.length; a++) {
                        var u = r.attributes[a];
                        null != u && sr(e, t, u.name, u.value)
                      }
                }(g, function (e, t) {
                  i.push(":" + e), i.push(t);
                  try {
                    s(g, e, t)
                  } catch (e) {
                    Ye.sendToBugsnag(e, "error")
                  }
                });
          }
        } catch (e) {
          Ye.sendToBugsnag(e, "error")
        }
        return f
      }, e.prototype.getWatchState = function (e, t, n) {
        return t || null == n || rr[e.nodeName] ? this._watcher.isWatched(e) : n.get(e)
      }, e
    }();

  function or(e, t) {
    try {
      t(e)
    } catch (e) {
      Ye.sendToBugsnag(e, "error")
    }
  }

  function sr(e, t, n, r) {
    null !== r && null !== (r = Hn(e, n = Dn(n), r)) && t(n, r)
  }
  var ar = n(3),
    ur = [2, 4, 8],
    cr = [16, 32],
    hr = ur.concat(cr),
    dr = function (e, t) {
      return e | t
    },
    lr = cr.reduce(dr, 0),
    pr = ur.reduce(dr, 0),
    fr = function () {
      function e(e) {
        void 0 === e && (e = 0), this._elementKinds = e
      }
      return e.prototype.has = function (e) {
        return !!(this._elementKinds & e)
      }, e.prototype.set = function (t) {
        if (this._elementKinds & pr && t & pr) {
          var n = this._elementKinds | t,
            r = e._getStrictestPrivacyKind(n);
          this._elementKinds = e._combineBits(r, this._elementKinds)
        } else this._elementKinds |= t
      }, e.prototype.hasKinds = function () {
        return 0 !== this._elementKinds
      }, e.areEqual = function (e, t) {
        return null == e && null == t || null != e && null != t && e.equals(t)
      }, e.prototype.getStrictestPrivacyKind = function () {
        return e._getStrictestPrivacyKind(this._elementKinds)
      }, e._getStrictestPrivacyKind = function (e) {
        for (var t = 0, n = ur; t < n.length; t++) {
          var r = n[t];
          if (e & r) return r
        }
        return null
      }, e.needsToObserve = function (e, t) {
        var n, r, i = null !== (n = null == e ? void 0 : e._elementKinds) && void 0 !== n ? n : 0;
        return !!((null !== (r = null == t ? void 0 : t._elementKinds) && void 0 !== r ? r : 0) & ~i & lr)
      }, e.combineKindsPreservePrivacy = function (t, n) {
        var r, i, o = e._combineBits(null !== (r = null == t ? void 0 : t._elementKinds) && void 0 !== r ? r : 0, null !== (i = null == n ? void 0 : n._elementKinds) && void 0 !== i ? i : 0);
        return new e(o)
      }, e._combineBits = function (e, t) {
        return e & pr | t & lr
      }, e.prototype.equals = function (e) {
        return !!e && this._elementKinds === e._elementKinds
      }, e
    }();

  function _r(e) {
    var t = document.documentElement || document.createElement("div");
    try {
      return a.elMatches(t, e), !0
    } catch (t) {
      return Ye.sendToBugsnag("Browser rejected rule", "warning", {
        selector: e,
        error: t.toString()
      }), !1
    }
  }
  var vr = {
      1: "exclude",
      2: "mask",
      3: "unmask",
      4: "watch",
      5: "keep"
    },
    gr = function () {
      function e() {
        this._withConsent = mr(), this._withoutConsent = mr()
      }
      return e.prototype.forConsentState = function (e) {
        return e ? this._withConsent : this._withoutConsent
      }, e.prototype.addElementBlockRules = function (e) {
        var t = this,
          n = mr(),
          r = mr();
        e.map(wr).filter(function (e) {
          return yr(e.selector)
        }).forEach(function (e) {
          if (e.consent) return 8 === e.kind ? void n[e.kind].push(e) : void r[e.kind].push(e);
          n[e.kind].push(e), r[e.kind].push(e)
        });
        for (var i = document.documentElement || document.createElement("div"), o = function (e, n) {
            try {
              if (0 === e.length) return;
              var r = e.map(function (e) {
                return e.selector
              }).join(", ");
              a.elMatches(i, r), n.push(r)
            } catch (n) {
              Ye.sendToBugsnag("Browser rejected optimistic merge rule", "warning"), t._fallback(e)
            }
          }, s = 0, u = hr; s < u.length; s++) {
          var c = u[s];
          o(n[c], this._withConsent[c]), o(r[c], this._withoutConsent[c])
        }
      }, e.prototype.addRule = function (e, t, n) {
        if (this._tryToAddRule(e, t, n)) return !0;
        switch (e) {
          case 16:
          case 8:
          case 32:
            break;
          case 4:
          case 2:
          default:
            this._withConsent[e] = ["*"], this._withoutConsent[e] = ["*"];
        }
        return !1
      }, e.prototype._tryToAddRule = function (e, t, n) {
        try {
          if (yr(n)) {
            if (t) {
              var r = this._getConsentRulesForKind(e);
              return this._mergeRule(e, r, n)
            }
            return this._mergeRule(e, this._withoutConsent, n) && this._mergeRule(e, this._withConsent, n)
          }
          return !0
        } catch (e) {
          return Ye.sendToBugsnag("Error adding block rule", "error", {
            selector: n,
            error: e.toString()
          }), !1
        }
      }, e.prototype._mergeRule = function (e, t, n) {
        var r = document.documentElement || document.createElement("div");
        switch (e) {
          case 2:
          case 4:
          case 8:
          case 16:
          case 32:
            break;
          default:
            e = 2;
        }
        if (0 == t[e].length) return !!_r(n) && (t[e].push(n), !0);
        var i = t[e].length - 1,
          o = t[e][i].concat(", ", n);
        try {
          a.elMatches(r, o)
        } catch (r) {
          return !!_r(n) && (t[e].push(n), Ye.sendToBugsnag("Browser rejected merged rule", "warning", {
            kind: vr[e],
            selector: n,
            error: r.toString()
          }), !0)
        }
        return t[e][i] = o, !0
      }, e.prototype.addElementBlock = function (e) {
        var t = wr(e),
          n = t.kind,
          r = t.consent,
          i = t.selector;
        return this.addRule(n, r, i)
      }, e.prototype._fallback = function (e) {
        for (var t = 0, n = e; t < n.length; t++) {
          var r = n[t],
            i = r.kind,
            o = r.consent,
            s = r.selector;
          this.addRule(i, o, s)
        }
      }, e.prototype._getConsentRulesForKind = function (e) {
        var t = 8 === e;
        return this.forConsentState(t)
      }, e
    }();

  function mr() {
    for (var e = Object.create ? Object.create(null) : {}, t = 0, n = hr; t < n.length; t++) {
      e[n[t]] = []
    }
    return e
  }

  function yr(e) {
    return !e.match(Qt) && "" != e.trim()
  }

  function wr(e) {
    var t = 2;
    switch (e.Type) {
      case se.Unset:
      case se.Exclude:
        t = 2;
        break;
      case se.Mask:
        t = 4;
        break;
      case se.Unmask:
        t = 8;
        break;
      case se.Watch:
        t = 16;
        break;
      case se.Keep:
        t = 32;
        break;
      default:
        Object(xn.assertExhaustive)(e.Type, "Unexpected block type: " + e.Type);
    }
    return {
      kind: t,
      consent: e.Consent,
      selector: e.Selector
    }
  }

  function Sr(e) {
    if (!(null == e ? void 0 : e.hasKinds())) return 0;
    var t = e.getStrictestPrivacyKind();
    return null === t ? 0 : ur.length - ur.indexOf(t)
  }
  var br = function () {
    function e() {
      this._rules = new gr, this._qsaStrategyEnabled = !ge
    }
    return e.prototype.initialize = function (e) {
      var t = e.blocks,
        n = e.keeps,
        i = e.watches,
        o = Object(r.__spreadArrays)(ar);
      if (t)
        for (var s = 0, a = t; s < a.length; s++) {
          var u = a[s];
          o.push(u)
        }
      if (i)
        for (var c = 0, h = i; c < h.length; c++) {
          var d = h[c];
          o.push({
            Type: se.Watch,
            Consent: Y.RevokeConsent,
            Selector: d.Selector
          })
        }
      this._rules.addElementBlockRules(o), n && this._batchElementKeeps(n)
    }, e.prototype.isWatched = function (e) {
      var t, n = new fr,
        r = this._rules.forConsentState(null !== (t = this._userHasConsented) && void 0 !== t && t),
        i = this._firstMatches(e, ur, r) | this._findMatches(e, cr, r);
      return n.set(i), n.hasKinds() ? n : null
    }, e.prototype._firstMatches = function (e, t, n) {
      return this._findMatches(e, t, n, !0)
    }, e.prototype._findMatches = function (e, t, n, r) {
      void 0 === r && (r = !1);
      for (var i = 0, o = 0, s = t; o < s.length; o++) {
        for (var u = s[o], c = !1, h = 0, d = n[u]; h < d.length; h++) {
          var l = d[h];
          if (a.elMatches(e, l)) {
            i |= u, c = !0;
            break
          }
        }
        if (c && r) break
      }
      return i
    }, e.prototype.addElementBlock = function (e) {
      return this._rules.addElementBlock(e)
    }, e.prototype._batchElementKeeps = function (e) {
      for (var t = 0, n = e; t < n.length; t++) {
        var r = n[t];
        this.addElementKeep(r)
      }
    }, e.prototype.addElementKeep = function (e) {
      switch (e.Type) {
        case ae.Click:
          break;
        default:
          return !1;
      }
      return this.addRule(32, e.Consent, e.Selector)
    }, e.prototype.addRule = function (e, t, n) {
      return this._rules.addRule(e, t, n)
    }, e.prototype.getConsent = function () {
      return this._userHasConsented
    }, e.prototype.initializeConsent = function (e) {
      void 0 === this._userHasConsented && this._setConsent(e, !1)
    }, e.prototype.setConsent = function (e) {
      this._setConsent(e, !0)
    }, e.prototype._setConsent = function (e, t) {
      void 0 === t && (t = !0), this._userHasConsented !== e && (this._userHasConsented = e, t && this.onConsentChange && this.onConsentChange())
    }, e.prototype.allWatchedElements = function (e) {
      var t;
      if (!this._qsaStrategyEnabled) return null;
      for (var n = new WeakMap, r = !1, i = function (e, t) {
          var i, o = null !== (i = n.get(e)) && void 0 !== i ? i : new fr;
          o.set(t), n.set(e, o), r = !0
        }, o = this._rules.forConsentState(null !== (t = this._userHasConsented) && void 0 !== t && t), s = 0, u = hr; s < u.length; s++)
        for (var c = u[s], h = 0, d = o[c]; h < d.length; h++) {
          var l = d[h];
          Tr(e) && a.elMatches(e, l) && i(e, c);
          for (var p = Er(e, l), f = 0; f < p.length; f++) i(p[f], c)
        }
      return r ? n : null
    }, e
  }();

  function Er(e, t) {
    return Tr(e) ? a.elQuerySelectorAll(e, t) : function (e) {
      return 9 === e.nodeType
    }(e) ? a.docQuerySelectorAll(e, t) : function (e) {
      return 11 === e.nodeType
    }(e) ? a.docFragQuerySelectorAll(e, t) : e.querySelectorAll(t)
  }

  function Tr(e) {
    return 1 === e.nodeType
  }
  var kr = function () {
      function e(e) {
        this._ctx = e, this._recordedDims = {}, this._observedDims = {}
      }
      return e.create = function (e) {
        return Ir.isSupported(e.window) ? new Ir(e) : new Cr(e)
      }, e.prototype.collect = function (e) {
        var t = [];
        for (var n in this._observedDims) this.addPlaceholderResize(e, t, Number(n));
        return this._observedDims = {}, t
      }, e.prototype.isObserved = function (e) {
        return !!this._recordedDims[e]
      }, e.prototype.addEntry = function (e) {
        try {
          var t = ln(e);
          if (!t) return;
          if (1 != e.nodeType) return;
          var n = e;
          if (this._observedDims[t] = n.getBoundingClientRect(), !this._recordedDims[t])
            for (var r = this.flushSizeEvents(t), i = 0, o = r; i < o.length; i++) {
              var s = o[i];
              this._ctx.queue().enqueue(s)
            }
        } catch (e) {}
      }, e.prototype.addPlaceholderResize = function (e, t, n) {
        for (var i = 0, o = this.flushSizeEvents(n); i < o.length; i++) {
          var s = o[i];
          t.push(Object(r.__assign)(Object(r.__assign)({}, s), {
            When: e
          }))
        }
      }, e.prototype.flushSizeEvents = function (e) {
        var t = this._observedDims[e];
        if (!t) return [];
        var n = dn(e);
        if (!n) return [];
        var r = n.watchKind,
          i = t.width,
          o = t.height,
          s = this._recordedDims[e];
        if (s && s.w == i && s.h == o) return [];
        this._recordedDims[e] = {
          w: i,
          h: o
        };
        var a = [];
        if (null == r ? void 0 : r.has(16)) {
          var u = 0 != i && 0 != o;
          (!!s && 0 != s.w && 0 != s.h) != u && a.push({
            Kind: P.WATCHED_ELEM,
            Args: [e, u]
          })
        }
        var c = n.node,
          h = ("scrollLeft" in c);
        return ((null == r ? void 0 : r.has(2)) || n.mask || h) && (a.push({
          Kind: P.PLACEHOLDER_SIZE,
          Args: [e, i, o]
        }), h && a.push({
          Kind: P.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
          Args: [e, c.scrollWidth, c.scrollHeight]
        })), a
      }, e
    }(),
    Ir = function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return n._inlineGroups = new WeakMap, n._observedInlines = new WeakMap, n._obs = new t.window.ResizeObserver(function (e) {
          for (var t = 0, r = e; t < r.length; t++) {
            var i = r[t].target;
            n.addEntry(i)
          }
        }), n._inlineGroupObs = new t.window.ResizeObserver(function (e) {
          for (var t = 0, r = e; t < r.length; t++) {
            var i = r[t].target;
            n._addEntriesForInlineGroup(i)
          }
        }), n
      }
      return Object(r.__extends)(t, e), t.isSupported = function (e) {
        return "function" == typeof e.ResizeObserver
      }, t.prototype.observe = function (e) {
        var t = this;
        if (e && 1 == e.nodeType) {
          var n = e;
          this._obs.unobserve(n), this._obs.observe(n), this._ctx.measurer.requestMeasureTask(Mt.Medium, function () {
            t._addToInlineGroupIfNeeded(n)
          })
        }
      }, t.prototype.unobserveSubtree = function (e) {}, t.prototype.nodeChanged = function (e) {
        var t = this,
          n = this._observedInlines.get(e);
        "number" == typeof n && ln(e) === n && this._ctx.measurer.requestMeasureTask(Mt.Medium, function () {
          t.addEntry(e)
        })
      }, t.prototype._addEntriesForInlineGroup = function (e) {
        var t = this._inlineGroups.get(e);
        if (t)
          for (var n in t) {
            var r = dn(t[n]);
            r ? this.addEntry(r.node) : delete t[n]
          }
      }, t.prototype._addToInlineGroupIfNeeded = function (e) {
        var t = this,
          n = ln(e);
        if (n) {
          var r = this._nearestNonInlineElementAncestorOf(e);
          if (r && r !== e) {
            this._observedInlines.set(e, n), this.addEntry(e);
            var i = this._inlineGroups.get(r);
            i || (i = Object.create(null), this._inlineGroups.set(r, i)), i[n] = n, a.setWindowTimeout(this._ctx.window, de(function () {
              t._inlineGroupObs.observe(r)
            }), 0)
          }
        }
      }, t.prototype._nearestNonInlineElementAncestorOf = function (e) {
        for (var t = 0, n = e;;) {
          if (t++ > 1e3) return null;
          if (!n || 1 != n.nodeType) return null;
          var r = n;
          if (getComputedStyle(r).display.indexOf("inline") < 0) return r;
          n = n.parentNode
        }
      }, t
    }(kr),
    Cr = function (e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this
      }
      return Object(r.__extends)(t, e), t.prototype.observe = function (e) {
        var t = this;
        if (e && 1 == e.nodeType) {
          var n = e;
          this.growWatchedIndex(hn(e)), this._ctx.measurer.requestMeasureTask(Mt.Medium, function () {
            t.addEntry(n)
          })
        }
      }, t.prototype.unobserveSubtree = function (e) {
        var t = hn(e);
        t && this.clearWatchedIndex(t)
      }, t.prototype.nodeChanged = function (e) {
        var t = this,
          n = this.relatedWatched(e);
        this._ctx.measurer.requestMeasureTask(Mt.Medium, function () {
          for (var e = 0, r = n; e < r.length; e++) {
            var i = r[e];
            t.addEntry(i)
          }
        })
      }, t.prototype.watchedChildren = function (e) {
        return e.watchedChildren
      }, t.prototype.growWatchedIndex = function (e) {
        if (e && sn(e.node))
          for (var t = e, n = e.parent; n; n = n.parent) {
            if (this.watchedChildren(n) || (n.watchedChildren = {}), this.watchedChildren(t))
              for (var r in this.watchedChildren(t)) delete this.watchedChildren(n)[r];
            if (this.watchedChildren(n)[t.id] = t, Re(this.watchedChildren(n), 2)) t = n;
            else if (xe(this.watchedChildren(n), 2)) break
          }
      }, t.prototype.relatedWatched = function (e) {
        var t = [],
          n = hn(e);
        if (n)
          for (var r = [n], i = 0; r.length && ++i < 1e3;) {
            var o = r.pop();
            sn(o.node) && t.push(o.node), this.watchedChildren(o) && Oe(this.watchedChildren(o), function (e) {
              r.push(e)
            })
          } else {
            for (var s = e; s && !ln(s);) s = s.parentNode;
            s && sn(s) && t.push(s)
          }
        return t
      }, t.prototype.clearWatchedIndex = function (e) {
        if (xe(this.watchedChildren(e), 0) || sn(e.node))
          for (var t = this.watchedChildren(e) && xe(this.watchedChildren(e), 1) || sn(e.node) ? e.id : function (e) {
              for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) return t
            }(this.watchedChildren(e)), n = t ? e.parent : null; n && this.watchedChildren(n) && this.watchedChildren(n)[t];) {
            if (delete this.watchedChildren(n)[t], Re(this.watchedChildren(n), 1)) {
              var r = n.id,
                i = Ae(this.watchedChildren(n));
              for (n = n.parent; n && this.watchedChildren(n) && this.watchedChildren(n)[r];) delete this.watchedChildren(n)[r], this.watchedChildren(n)[i.id] = i, n = n.parent;
              break
            }
            n = n.parent
          }
      }, t
    }(kr),
    Or = {
      attributeName: null,
      attributeNamespace: null,
      addedNodes: [],
      removedNodes: [],
      nextSibling: null,
      previousSibling: null,
      oldValue: null
    };

  function Ar(e) {
    return Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({}, Or), e), {
      type: "childList"
    })
  }

  function Rr(e, t) {
    return 0 === t.length ? Ar({
      target: e
    }) : Ar({
      addedNodes: t,
      nextSibling: Ie(t[t.length - 1]),
      previousSibling: Le(t[0]),
      target: e
    })
  }
  var xr = function () {
    function e(e, t, n, r, i, o) {
      var s = this;
      void 0 === n && (n = function () {}), void 0 === r && (r = function () {}), void 0 === i && (i = function () {}), void 0 === o && (o = function () {
        return !0
      }), this._watcher = t, this._nodeVisitor = n, this._beforeRemove = r, this._attrVisitor = i, this._visitChildren = o, this._sentDomSnapshot = !1, this._newShadowContainers = [], this._toRefresh = [], this._records = [], this._setPropertyWasThrottled = !1, this._wnd = e.window, this._resizer = kr.create(e), this._encoder = new ir(t, this._resizer), Je(!this._watcher.onConsentChange, "This is the only consent change listener."), this._watcher.onConsentChange = function () {
        return s.updateConsent()
      }
    }
    return e.prototype.hookMutations = function (e) {
      void 0 === e && (e = this._wnd.document), this._root = e, this._sentDomSnapshot = !1;
      var t = !0;
      if (fe) try {
        this.setUpIEWorkarounds()
      } catch (e) {
        s("Error setting up IE workarounds for mutation watcher: " + e), t = !1
      }
      t && (this._observer = new MutationObserver(this._addMutations.bind(this)))
    }, e.prototype._observerOff = function () {
      this._observer && this._observer.disconnect()
    }, e.prototype._addMutations = function (e) {
      for (var t = 0, n = e; t < n.length; t++) {
        var r = n[t];
        this._records.push(r)
      }
    }, e.prototype.resizer = function () {
      return this._resizer
    }, e.prototype.shutdown = function () {
      this._observer && this._observer.disconnect();
      var e = hn(this._root);
      e && _n(e), this._records = [], fe && this.tearDownIEWorkarounds(), this._watcher.onConsentChange = null, this._attachShadowHook && (this._attachShadowHook.disable(), this._attachShadowHook = null)
    }, e.prototype.processMutations = function (e) {
      if (!this._root) return [];
      var t = [];
      if (this.maybeGetInitialSnapshot(e, t), this._setPropertyWasThrottled && (t.push({
          Kind: P.FAIL_THROTTLED,
          Args: [te.SetPropertyHooks],
          When: e
        }), this._setPropertyWasThrottled = !1), this._records.length > 0 || this._toRefresh.length > 0) {
        var n = {},
          r = {};
        for (var i in this.processRecords(e, t, r, n), r) {
          var o = i.split("\t");
          t.push({
            Kind: P.MUT_ATTR,
            Args: [parseInt(o[0]), o[1], r[i]],
            When: e
          })
        }
        for (var i in n) t.push({
          Kind: P.MUT_TEXT,
          Args: [parseInt(i), n[i]],
          When: e
        })
      }
      var s = this._newShadowContainers;
      this._newShadowContainers = [];
      for (var a = 0; a < s.length; a++) {
        var u = s[a].shadowRoot;
        u && 0 != ln(s[a]) && 0 == ln(u) && (this.observe(u), this.genShadow(null, e, t, s[a], u))
      }
      return t.push.apply(t, this._resizer.collect(e)), this._records = [], t
    }, e.prototype.recordingIsDetached = function () {
      return !!this._root && this._root != this._wnd.document
    }, e.prototype.maybeGetInitialSnapshot = function (e, t) {
      if (!this._sentDomSnapshot && this._root) {
        var n = this._watcher.allWatchedElements(this._root);
        this.genInsert(n, e, t, null, this._root, null), this._resizer.nodeChanged(this._root), this._observer && this.observe(this._root), this._sentDomSnapshot = !0, this.hookAttachShadow()
      }
    }, e.prototype.hookAttachShadow = function () {
      var e = this;
      this._attachShadowHook = De(Element.prototype, "attachShadow"), this._attachShadowHook && this._attachShadowHook.before(function (t) {
        t.that.shadowRoot || e._newShadowContainers.push(t.that)
      })
    }, e.prototype.observe = function (e) {
      try {
        this._observer.observe(e, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
          attributeOldValue: !0,
          characterDataOldValue: !0
        })
      } catch (e) {}
    }, e.prototype.processRecords = function (e, t, n, r) {
      for (var i = this, o = {}, s = {}, a = function (n) {
          if (hn(n)) {
            i.genRemove(e, t, hn(n));
            var r = hn(n.parentNode);
            r && (s[r.id] = r.node)
          }
        }, u = 0; u < this._records.length; ++u) try {
        var c = this._records[u],
          h = ln(c.target);
        if (!h) continue;
        switch (o[h] = c.target, c.type) {
          case "childList":
            if (c.removedNodes.length > 0)
              for (var d = 0; d < c.removedNodes.length; ++d) {
                (p = hn(c.removedNodes[d])) && p.id && this.genRemove(e, t, p)
              }
            if (c.addedNodes.length > 0) {
              s[h] = c.target;
              var l = Lr(c.target);
              l && (s[l.id] = l.node)
            }
            break;
          case "characterData":
            an(c.target) || c.oldValue != c.target.textContent && (r[h] = Bn(c.target));
            break;
          case "attributes":
            var p, f = cn(S = c.target),
              _ = this._watcher.isWatched(S);
            if (Sr(_) > Sr(f)) {
              a(S);
              break
            }
            fr.needsToObserve(f, _) && (this._resizer.observe(S), (p = hn(S)) && (p.watchKind = fr.combineKindsPreservePrivacy(f, _)));
            var v = Pr(c.attributeNamespace) + (c.attributeName || ""),
              g = Dn(v);
            if (S.hasAttribute(v)) {
              var m = c.target.getAttribute(v);
              c.oldValue != m && (m = Hn(c.target, g, m || ""), this._attrVisitor(c.target, g, m || ""), null !== m && (n[h + "\t" + g] = m))
            } else n[h + "\t" + g] = null;
        }
      } catch (e) {}
      for (var y = 0, w = this._toRefresh; y < w.length; y++) {
        var S = w[y];
        try {
          a(S)
        } catch (e) {
          Ye.sendToBugsnag(e, "error")
        }
      }
      for (var b in this._toRefresh = [], s) {
        var E = hn(T = s[b]);
        E && E.id && this.diff(e, t, T, E.child, T.firstChild)
      }
      for (var b in o) {
        var T = o[b];
        this._resizer.nodeChanged(T)
      }
    }, e.prototype._checkForMissingInsertions = function (e) {
      if (!this._sentDomSnapshot || !e || !this._root) return [];
      return this.walkAddRecords(this._root), []
    }, e.prototype.walkAddRecords = function (e) {
      var t = this;
      ln(e) || null === e.parentNode ? Pe(e.firstChild, function (e) {
        t.walkAddRecords(e)
      }) : this._records.push(Rr(e.parentNode, [e]))
    }, e.prototype.diff = function (e, t, n, r, i) {
      for (var o = [], s = r, a = i; s && a;) {
        var u = hn(a);
        ln(a) ? u && s.id == u.id ? (s = s.next, a = Ie(a)) : (o.push({
          remove: s
        }), s = s.next) : (o.push({
          insert: [n, a, s.node]
        }), a = Ie(a))
      }
      for (; s; s = s.next) o.push({
        remove: s
      });
      Pe(a, function (e) {
        o.push({
          insert: [n, e, null]
        })
      });
      for (var c = !1, h = 0; h < o.length; h++) {
        var d = o[h];
        d.insert ? this.genInsert(null, e, t, d.insert[0], d.insert[1], d.insert[2]) : d.remove && (c = !0, this.genRemove(e, t, d.remove))
      }
      Je(!c, "All remove events should have been generated earlier, in MutationWatcher.processMutations")
    }, e.prototype.genShadow = function (e, t, n, r, i) {
      var o = ln(r),
        s = m(),
        a = this.genDocStream(e, r, i, null),
        u = m() - s;
      a.length > 0 && n.push({
        Kind: P.MUT_SHADOW,
        Args: [o, a],
        When: t
      }, {
        Kind: P.TIMING,
        Args: [
          [F.Internal, L.Serialization, M.NodeEncoding, t, u]
        ],
        When: t
      })
    }, e.prototype.genInsert = function (e, t, n, r, i, o) {
      var s = ln(r) || -1,
        a = ln(o) || -1,
        u = -1 === s && -1 === a,
        c = m(),
        h = this.genDocStream(e, r, i, o),
        d = m() - c;
      h.length > 0 && n.push({
        Kind: P.MUT_INSERT,
        Args: [s, a, h],
        When: t
      }, {
        Kind: P.TIMING,
        Args: [
          [F.Internal, L.Serialization, u ? M.DomSnapshot : M.NodeEncoding, t, d]
        ],
        When: t
      })
    }, e.prototype.genDocStream = function (e, t, n, r) {
      var i = this;
      if (t && an(t)) return [];
      for (var o = [], s = this._encoder.tokenizeNode(e, t, r, n, function (e) {
          if (1 == e.nodeType) {
            var t = e;
            t.shadowRoot && i.observe(t.shadowRoot)
          }
          i._nodeVisitor(e, o)
        }, this._attrVisitor, this._visitChildren), a = 0, u = o; a < u.length; a++) {
        (0, u[a])()
      }
      return s
    }, e.prototype.genRemove = function (e, t, n) {
      var r = n.id;
      if (this._beforeRemove(n), fn(n, this._resizer), t.length > 0) {
        var i = t[t.length - 1];
        if (i.Kind == P.MUT_REMOVE) return void i.Args.push(r)
      }
      t.push({
        Kind: P.MUT_REMOVE,
        Args: [r],
        When: e
      })
    }, e.prototype.setUpIEWorkarounds = function () {
      var t = this;
      if (_e) {
        var n = Object.getOwnPropertyDescriptor(Node.prototype, "textContent"),
          i = n && n.set;
        if (!n || !i) throw new Error("Missing textContent setter -- not safe to record mutations.");
        Object.defineProperty(Element.prototype, "textContent", Object(r.__assign)(Object(r.__assign)({}, n), {
          set: function (e) {
            try {
              for (var t = void 0; t = this.firstChild;) this.removeChild(t);
              if (null === e || "" == e) return;
              var n = (this.ownerDocument || document).createTextNode(e);
              this.appendChild(n)
            } catch (t) {
              i && i.call(this, e)
            }
          }
        }))
      }
      this._setPropertyThrottle = new wn(e.ThrottleMax, e.ThrottleInterval, function () {
        return new yn(function () {
          t._setPropertyWasThrottled = !0, t.tearDownIEWorkarounds()
        }).start()
      });
      var o = this._setPropertyThrottle.guard(function (e) {
        e.cssText = e.cssText
      });
      this._setPropertyThrottle.open(), this._setPropertyHook = De(CSSStyleDeclaration.prototype, "setProperty"), this._setPropertyHook && this._setPropertyHook.afterSync(function (e) {
        o(e.that)
      }), this._removePropertyHook = De(CSSStyleDeclaration.prototype, "removeProperty"), this._removePropertyHook && this._removePropertyHook.afterSync(function (e) {
        o(e.that)
      })
    }, e.prototype.tearDownIEWorkarounds = function () {
      this._setPropertyThrottle && this._setPropertyThrottle.close(), this._setPropertyHook && this._setPropertyHook.disable(), this._removePropertyHook && this._removePropertyHook.disable()
    }, e.prototype.updateConsent = function () {
      var e = this;
      this._root && Pe(this._root.firstChild, function (t) {
        return e.refreshElement(t)
      })
    }, e.prototype.refreshElement = function (e) {
      ln(e) && this._toRefresh.push(e)
    }, e.ThrottleMax = 1024, e.ThrottleInterval = 1e4, e
  }();

  function Pr(e) {
    return void 0 === e && (e = ""), null === e ? "" : {
      "http://www.w3.org/1999/xlink": "xlink:",
      "http://www.w3.org/XML/1998/namespace": "xml:",
      "http://www.w3.org/2000/xmlns/": "xmlns:"
    } [e] || ""
  }

  function Lr(e) {
    return !(null == e ? void 0 : e.shadowRoot) || nr(e.shadowRoot) ? null : hn(e.shadowRoot)
  }
  var Mr = function () {
    function e(e, t, n) {
      this._ctx = e, this._queue = t, this._recordResourceImgs = !1, this._recordResourceTimings = !1, this._perfSupported = !1, this._timingSupported = !1, this._getEntriesSupported = !1, this._memorySupported = !1, this._timeOriginSupported = !1, this._lastUsedJSHeapSize = 0, this._gotLoad = !1, this._observer = null, this._observedBatches = [];
      var r = window.performance;
      r && (this._perfSupported = !0, r.timing && (this._timingSupported = !0), r.memory && (this._memorySupported = !0), r.timeOrigin && (this._timeOriginSupported = !0), "function" == typeof r.getEntries && (this._getEntriesSupported = !0), this._listeners = n.createChild())
    }
    return e.prototype.start = function (e) {
      var t = this,
        n = e.resourceUploader,
        r = e.recTimings,
        i = e.recImgs;
      this._resourceUploader = n, this._recordResourceTimings = r, this._recordResourceImgs = i;
      var o = window.performance;
      o && (this._ctx.recording.inFrame || this._queue.enqueue({
        Kind: P.REC_FEAT_SUPPORTED,
        Args: [$.Performance, this._timingSupported, $.PerformanceEntries, this._getEntriesSupported, $.PerformanceMemory, this._memorySupported, $.PerformanceObserver, !!window.PerformanceObserver, $.PerformanceTimeOrigin, this._timeOriginSupported]
      }), this.observe(), !this._observer && o.addEventListener && o.removeEventListener && this._listeners.add(o, "resourcetimingbufferfull", !0, function () {
        t._queue.enqueue({
          Kind: P.RESOURCE_TIMING_BUFFER_FULL,
          Args: []
        })
      }), this.checkMemory(), this.recordTimeOrigin())
    }, e.prototype.onLoad = function () {
      this._gotLoad || (this._gotLoad = !0, this._timingSupported && (this.recordTiming(performance.timing), this.checkForNewEntries()))
    }, e.prototype.tick = function (e) {
      this.checkMemory(), e && this.checkForNewEntries()
    }, e.prototype.shutdown = function () {
      this._listeners && this._listeners.clear(), this._resourceUploader = void 0;
      var e = [];
      this._observer ? (this._observer.takeRecords && (e = this._observer.takeRecords()), this._observer.disconnect()) : window.performance && window.performance.getEntries && (e = window.performance.getEntries()), e.length > 300 && (e = e.slice(0, 300), this._queue.enqueue({
        Kind: P.RESOURCE_TIMING_BUFFER_FULL,
        Args: []
      })), this._observedBatches.push(e), this.tick(!0)
    }, e.prototype.observe = function () {
      var e = this;
      if (!this._observer && this._getEntriesSupported && window.PerformanceObserver) {
        this._observedBatches.push(performance.getEntries()), this._observer = new window.PerformanceObserver(function (t) {
          var n = t.getEntries();
          e._observedBatches.push(n)
        });
        var t = ["navigation", "resource", "measure", "mark"];
        window.PerformancePaintTiming && t.push("paint"), this._observer.observe({
          entryTypes: t
        })
      }
    }, e.prototype.checkMemory = function () {
      if (this._memorySupported && !this._ctx.recording.inFrame) {
        var e = performance.memory;
        if (e) {
          var t = e.usedJSHeapSize - this._lastUsedJSHeapSize;
          (0 == this._lastUsedJSHeapSize || a.mathAbs(t / this._lastUsedJSHeapSize) > .2) && (this.addPerfEvent(X.Memory, e, Z.Memory), this._lastUsedJSHeapSize = e.usedJSHeapSize)
        }
      }
    }, e.prototype.recordTimeOrigin = function () {
      var e = {
        timeOrigin: y()
      };
      this.addPerfEvent(X.TimeOrigin, e, Z.TimeOrigin)
    }, e.prototype.recordEntry = function (e) {
      switch (e.entryType) {
        case "navigation":
          this.recordNavigation(e);
          break;
        case "resource":
          this.recordResource(e);
          break;
        case "paint":
          this.recordPaint(e);
          break;
        case "measure":
          this.recordMeasure(e);
          break;
        case "mark":
          this.recordMark(e);
      }
    }, e.prototype.checkForNewEntries = function () {
      if (this._perfSupported && this._getEntriesSupported) {
        var e = this._observedBatches;
        this._observedBatches = [];
        for (var t = 0, n = e; t < n.length; t++)
          for (var r = 0, i = n[t]; r < i.length; r++) {
            var o = i[r];
            this.recordEntry(o)
          }
      }
    }, e.prototype.recordTiming = function (e) {
      this.addPerfEvent(X.Timing, e, Z.Timing)
    }, e.prototype.recordNavigation = function (e) {
      this.addPerfEvent(X.Navigation, e, Z.Navigation, {
        name: "navigation"
      })
    }, e.prototype.recordResource = function (e) {
      if (this._recordResourceTimings) {
        var t = e.initiatorType;
        (this._recordResourceImgs || "img" !== t && "image" !== t) && this.addPerfEvent(X.Resource, e, Z.Resource, {
          name: t
        })
      }
    }, e.prototype.recordPaint = function (e) {
      this.addPerfEvent(X.Paint, e, Z.Measure)
    }, e.prototype.recordMark = function (e) {
      this.addPerfEvent(X.Mark, e, Z.Measure)
    }, e.prototype.recordMeasure = function (e) {
      this.addPerfEvent(X.Measure, e, Z.Measure)
    }, e.prototype.addPerfEvent = function (e, t, n, r) {
      void 0 === r && (r = {});
      for (var i = [e], o = 0, s = n; o < s.length; o++) {
        var a = s[o],
          u = t[a];
        if (void 0 === u && (u = -1), a in r) {
          var c = Vn(u, {
            source: "perfEntry",
            type: r[a]
          });
          u === c && this.maybeUploadResource(e, t, c), u = c
        }
        i.push(u)
      }
      this._queue.enqueue({
        Kind: P.PERF_ENTRY,
        Args: i
      })
    }, e.prototype.maybeUploadResource = function (e, t, n) {
      this._resourceUploader && e === X.Resource && "css" === t.initiatorType && this._resourceUploader.uploadIfNeeded(this._ctx.window, n)
    }, e
  }();

  function Fr(e) {
    var t = 0,
      n = {
        id: t++,
        edges: {}
      };
    return e.split("\n").forEach(function (e) {
      if ("" != (e = e.trim())) {
        if (0 == e.indexOf("/") || e.lastIndexOf("/") == e.length - 1) throw new Error("Leading and trailing slashes are not supported");
        var r = n,
          i = e.split("/");
        i.forEach(function (e, n) {
          if ("" === (e = e.trim())) throw new Error("Empty elements are not allowed");
          if ("**" != e && "*" != e && -1 != e.indexOf("*")) throw new Error("Embedded wildcards are not supported");
          var o = null;
          e in r.edges && (o = r.edges[e]), o || (o = {
            id: t++,
            edges: {}
          }, r.edges[e] = o), n == i.length - 1 && (o.term = !0), r = o
        })
      }
    }), n
  }
  var qr = Fr("**");

  function Ur(e, t, n) {
    if (!zr(n)) {
      try {
        for (var r = [], i = 0, o = n; i < o.length; i++) {
          var s = o[i];
          if (!s) return;
          var u = new Nr(!0 === s ? qr : s);
          r.push(u)
        }
        var c = function (e, t) {
            for (var n = {}, r = function (t) {
                n[t] = function () {
                  for (var n = 0, r = e; n < r.length; n++) {
                    var i = r[n];
                    i[t].apply(i, arguments)
                  }
                }
              }, i = 0, o = t; i < o.length; i++) {
              r(o[i])
            }
            return n
          }(r, ["push", "pop"]),
          h = 0,
          d = [1];
        return a.jsonStringify(e, function (e, n) {
          var i = n && "object" == typeof n;
          if ("" == e && 1 == d.length) return d[0]--, i && d.push(a.objectKeys(n).length), n;
          for (c.push(e), r.some(function (e) {
              return e.isRedacted(!i)
            }) && (n = ue.BlockedFieldValue, i = !1), h += e.length + 2, (h += i ? 2 : null === n ? 4 : n.toString().length) >= t && (n = void 0), d[d.length - 1]--, n && n !== ue.BlockedFieldValue && i ? d.push(a.objectKeys(n).length) : c.pop(); d[d.length - 1] <= 0;) d.pop(), c.pop();
          for (var o = 0, s = r; o < s.length; o++) {
            var u = s[o].depth();
            if (void 0 !== u && d.length > 0 && u !== d.length - 1) throw new Error("Property matcher depth out of sync")
          }
          return n
        })
      } catch (e) {
        Ye.sendToBugsnag(e, "error")
      }
      return "[error serializing " + e.constructor.name + "]"
    }
  }
  var Nr = function () {
    function e(e) {
      this._depth = 1;
      var t = [e];
      e.edges["**"] && t.push(e.edges["**"]), this._stateSets = [t]
    }
    return e.prototype._currentStates = function () {
      if (this._stateSets.length <= 0) return [];
      var e = this._stateSets.length - 1,
        t = this._stateSets[e];
      return "number" == typeof t ? this._stateSets[e - 1] : t
    }, e.prototype.depth = function () {
      return this._depth
    }, e.prototype.isRedacted = function (e) {
      var t = this._currentStates();
      return 0 === t.length || e && !t.some(function (e) {
        return e.term
      })
    }, e.prototype.push = function (e) {
      var t;
      this._depth++;
      var n = this._currentStates(),
        r = [];

      function i(t) {
        t.edges["**"] && (r.push(t.edges["**"], jr(t)), i(t.edges["**"])), t.edges["*"] && r.push(t.edges["*"]), t.edges[e] && r.push(t.edges[e])
      }
      for (var o = 0, s = n; o < s.length; o++) {
        var a = s[o];
        if (null === (t = a.edges["**"]) || void 0 === t ? void 0 : t.term) {
          r = [jr(a), a.edges["**"]];
          break
        }
        i(a)
      }
      var u = !1;
      if (r.length !== n.length) u = !0;
      else
        for (var c = 0; c < r.length; c++)
          if (r[c].id !== n[c].id) {
            u = !0;
            break
          } u ? this._stateSets.push(r) : ("number" != typeof this._stateSets[this._stateSets.length - 1] && this._stateSets.push(0), this._stateSets[this._stateSets.length - 1]++)
    }, e.prototype.pop = function () {
      this._depth > 0 && this._depth--;
      var e = this._stateSets[this._stateSets.length - 1];
      "number" == typeof e && e > 1 ? this._stateSets[this._stateSets.length - 1]-- : this._stateSets.pop()
    }, e
  }();

  function jr(e) {
    var t = e.edges["**"];
    if (!t) throw new Error("Node must have double-wildcard edge.");
    return xe(e.edges, 1) ? {
      id: -t.id,
      edges: {
        "**": t
      }
    } : e
  }
  var Wr = function () {
      function e(e) {
        this._requestTracker = e
      }
      return e.prototype.disable = function () {
        this._hook && (this._hook.disable(), this._hook = null)
      }, e.prototype.enable = function (e) {
        var t, n = this,
          r = R(e),
          i = null === (t = null == r ? void 0 : r._w) || void 0 === t ? void 0 : t.fetch;
        (i || e.fetch) && (this._hook = De(i ? r._w : e, "fetch"), this._hook && this._hook.afterSync(function (e) {
          return n.recordFetch(e.that, e.result, e.args[0], e.args[1])
        }))
      }, e.prototype.recordFetch = function (e, t, n, i) {
        return Object(r.__awaiter)(this, void 0, xt, function () {
          var e, o, s, a, u, c, h, d, l, p, f, _;
          return Object(r.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                if (e = "GET", o = "", a = {}, "string" == typeof n ? o = n : "url" in n ? (o = n.url, e = n.method, s = n.body, n.headers && n.headers.forEach(function (e, t) {
                    a[e] = t
                  })) : o = "" + n, i) {
                  if (e = i.method || e, u = i.headers)
                    if (ke(u))
                      for (c = 0, h = u; c < h.length; c++) d = h[c], p = d[0], l = d[1], a[p] = l;
                    else if ("function" == typeof u.forEach) u.forEach(function (e, t, n) {
                    a[t] = e
                  });
                  else
                    for (p in u) a[p] = u[p];
                  s = i.body || s
                }
                if (o) {
                  for (p in o = this._requestTracker.addPendingReq(t, e, o), a) this._requestTracker.addHeader(t, p, a[p]);
                  s && this._requestTracker.addRequestBody(t, s)
                }
                r.label = 1;
              case 1:
                return r.trys.push([1, 3, , 4]), [4, this.processResponse(t, this._requestTracker.getRspAllowlist(o))];
              case 2:
                return f = r.sent(), this.onComplete.apply(this, f), [3, 4];
              case 3:
                return _ = r.sent(), Ye.sendToBugsnag(_, "warning"), this.onComplete(t, _, -1, void 0), [3, 4];
              case 4:
                return [2];
            }
          })
        })
      }, e.prototype.processResponse = function (e, t) {
        return Object(r.__awaiter)(this, void 0, xt, function () {
          var n, i, o, s, a, u, c, h;
          return Object(r.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, e];
              case 1:
                if (n = r.sent(), i = (n.headers.get("content-type") || "default").split(";")[0], o = ["default", "text/plain", "text/json", "application/json"].indexOf(i) > -1, t.indexOf(!1) > -1) return [2, [e, n, -1, void 0]];
                if (!o) return [2, [e, n, -1, void 0]];
                s = n.clone(), r.label = 2;
              case 2:
                return r.trys.push([2, 4, , 5]), [4, s.text()];
              case 3:
                return a = r.sent(), u = Qr(a, this._requestTracker.getMaxAjaxPayloadLength(), t), c = u[0], h = u[1], [2, [e, n, c, h]];
              case 4:
                return r.sent(), [2, [e, n, -1, void 0]];
              case 5:
                return [2];
            }
          })
        })
      }, e.prototype.onComplete = function (e, t, n, r) {
        var i = this,
          o = -1,
          s = "";
        if ("headers" in t) {
          o = t.status;
          s = this.serializeFetchHeaders(t.headers, function (e) {
            return i._requestTracker.isHeaderInResponseHeaderAllowlist(e[0])
          })
        }
        return this._requestTracker.onComplete(e, s, o, n, r)
      }, e.prototype.serializeFetchHeaders = function (e, t) {
        var n = "";
        return e.forEach(function (e, r) {
          r = r.toLowerCase();
          var i = t([r, e]);
          n += r + (i ? ": " + e : "") + Hr
        }), n
      }, e
    }(),
    Br = function () {
      function e(e) {
        this._requestTracker = e
      }
      return e.prototype.disable = function () {
        this._xhrOpenHook && (this._xhrOpenHook.disable(), this._xhrOpenHook = null), this._xhrSetHeaderHook && (this._xhrSetHeaderHook.disable(), this._xhrSetHeaderHook = null)
      }, e.prototype.enable = function (e) {
        var t, n = this,
          r = R(e),
          i = (null === (t = null == r ? void 0 : r._w) || void 0 === t ? void 0 : t.XMLHttpRequest) || e.XMLHttpRequest;
        if (i) {
          var o = i.prototype;
          this._xhrOpenHook = De(o, "open"), this._xhrOpenHook && this._xhrOpenHook.before(function (e) {
            var t = e.args[0],
              r = e.args[1];
            n._requestTracker.addPendingReq(e.that, t, r), e.that.addEventListener("load", Ye.wrap(function (t) {
              n.onComplete(e.that)
            })), e.that.addEventListener("error", Ye.wrap(function (t) {
              n.onComplete(e.that)
            }))
          }), this._xhrSendHook = De(o, "send"), this._xhrSendHook && this._xhrSendHook.before(function (e) {
            var t = e.args[0];
            n._requestTracker.addRequestBody(e.that, t)
          }), this._xhrSetHeaderHook = De(o, "setRequestHeader"), this._xhrSetHeaderHook && this._xhrSetHeaderHook.before(function (e) {
            var t = e.args[0],
              r = e.args[1];
            n._requestTracker.addHeader(e.that, t, r)
          })
        }
      }, e.prototype.onComplete = function (e) {
        var t = this,
          n = this.responseBody(e),
          r = n[0],
          i = n[1],
          o = Zr(function (e) {
            var t = [];
            return e.split(Hr).forEach(function (e) {
              var n = e.indexOf(":"); - 1 != n ? t.push([e.slice(0, n).trim(), e.slice(n + 1, e.length).trim()]) : t.push([e.trim(), null])
            }), t
          }(e.getAllResponseHeaders()), function (e) {
            return t._requestTracker.isHeaderInResponseHeaderAllowlist(e[0])
          });
        return this._requestTracker.onComplete(e, o, e.status, r, i)
      }, e.prototype.responseBody = function (e) {
        var t = this._requestTracker.pendingReq(e);
        if (!t) return [-1, void 0];
        var n = this._requestTracker.getRspAllowlist(t.url);
        if (e.responseType) {
          var r = e.response;
          switch (r || s("Maybe response type was different that expected."), e.responseType) {
            case "text":
              return Qr(e.responseText, this._requestTracker.getMaxAjaxPayloadLength(), n);
            case "json":
              return function (e, t, n) {
                if (!e) return [-1, void 0];
                return [Yr(e), Ur(e, t, n)]
              }(r, this._requestTracker.getMaxAjaxPayloadLength(), n);
            case "arraybuffer":
              return function (e, t) {
                return [e ? e.byteLength : -1, zr(t) ? void 0 : "[ArrayBuffer]"]
              }(r, n);
            case "blob":
              return function (e, t) {
                return [e ? e.size : -1, zr(t) ? void 0 : "[Blob]"]
              }(r, n);
            case "document":
              return function (e, t) {
                return [-1, zr(t) ? void 0 : "[Document]"]
              }(0, n);
          }
        }
        return Qr(e.responseText, this._requestTracker.getMaxAjaxPayloadLength(), n)
      }, e
    }();
  var Dr, Hr = "\r\n",
    Vr = function () {
      function e(e, t) {
        this._queue = t, this._enabled = !1, this._wnd = e.window, this._tracker = new Kr(e, t), this._xhr = new Br(this._tracker), this._fetch = new Wr(this._tracker)
      }
      return e.prototype.isEnabled = function () {
        return this._enabled
      }, e.prototype.enable = function (e) {
        this._enabled || (this._enabled = !0, this._queue.enqueue({
          Kind: P.REC_FEAT_SUPPORTED,
          Args: [$.Ajax, !0, $.AjaxFetch, !!e]
        }), this._xhr.enable(this._wnd), e && this._fetch.enable(this._wnd))
      }, e.prototype.disable = function () {
        this._enabled && (this._enabled = !1, this._xhr.disable(), this._fetch.disable())
      }, e.prototype.tick = function (e) {
        this._tracker.tick(e)
      }, e.prototype.setWatches = function (e) {
        this._tracker.setWatches(e)
      }, e.prototype.initialize = function (e) {
        this._tracker.initialize(e)
      }, e
    }(),
    Kr = function () {
      function e(e, t) {
        this._queue = t, this._urlConfigs = [], this._reqHeaderAllowlist = {}, this._rspHeaderAllowlist = {}, this._pendingReqs = {}, this._events = [], this._curId = 1, this._wnd = e.window, this.initialize({
          requests: ue.DefaultOrgSettings.HttpRequestHeadersAllowlist,
          responses: ue.DefaultOrgSettings.HttpResponseHeadersAllowlist,
          maxAjaxPayloadLength: ue.DefaultOrgSettings.MaxAjaxPayloadLength
        })
      }
      return e.prototype.getReqAllowlist = function (e) {
        for (var t = [], n = 0, r = this._urlConfigs; n < r.length; n++) {
          var i = r[n],
            o = i.urlPattern,
            s = i.reqFields;
          if (o.test(e)) {
            if (!1 === s) return [!1];
            t.push(s)
          }
        }
        return t
      }, e.prototype.getRspAllowlist = function (e) {
        for (var t = [], n = 0, r = this._urlConfigs; n < r.length; n++) {
          var i = r[n],
            o = i.urlPattern,
            s = i.rspFields;
          if (o.test(e)) {
            if (!1 === s) return [!1];
            t.push(s)
          }
        }
        return t
      }, e.prototype.isHeaderInRequestHeaderAllowlist = function (e) {
        return e in this._reqHeaderAllowlist
      }, e.prototype.isHeaderInResponseHeaderAllowlist = function (e) {
        return e in this._rspHeaderAllowlist
      }, e.prototype.pushEvent = function (e) {
        this._events.push(e)
      }, e.prototype.setWatches = function (e) {
        this._urlConfigs = e.map(function (e) {
          return {
            urlPattern: new RegExp(e.URLRegex),
            reqFields: Xr(e.RecordReq, e.ReqWhitelist),
            rspFields: Xr(e.RecordRsp, e.RspWhitelist)
          }
        })
      }, e.prototype.initialize = function (e) {
        var t = this,
          n = e.requests,
          r = e.responses,
          i = e.maxAjaxPayloadLength;
        this._reqHeaderAllowlist = {}, this._rspHeaderAllowlist = {}, null == n || n.forEach(function (e) {
          return t._reqHeaderAllowlist[e] = !0
        }), null == r || r.forEach(function (e) {
          return t._rspHeaderAllowlist[e] = !0
        }), this._maxAjaxPayloadLength = i
      }, e.prototype.tick = function (e) {
        if (e) {
          for (var t = 0; t < this._events.length; t++) this._queue.enqueue({
            Kind: P.AJAX_REQUEST,
            Args: this._events[t]
          });
          this._events = []
        }
      }, e.prototype.pendingReq = function (e) {
        var t = Gr(e);
        return t ? this._pendingReqs[t] : (s("missing xhr req id"), null)
      }, e.prototype.deletePending = function (e) {
        var t = Gr(e);
        t && delete this._pendingReqs[t]
      }, e.prototype.addPendingReq = function (e, t, n) {
        this.deletePending(e);
        var r = this._curId++;
        return n = function (e, t) {
            return Mn.resolveToDocument(e, t)
          }(this._wnd, n), this._pendingReqs[r] = {
            id: r,
            xhr: e,
            method: t,
            url: n,
            startTime: m(),
            headers: [],
            reqSize: 0,
            reqBody: void 0
          },
          function (e, t) {
            e._fs = t
          }(e, r), n
      }, e.prototype.addHeader = function (e, t, n) {
        var r = this.pendingReq(e);
        r && r.headers.push([t, n])
      }, e.prototype.addRequestBody = function (e, t) {
        var n, r = this.pendingReq(e);
        r && (n = this.requestBody(r.url, t), r.reqSize = n[0], r.reqBody = n[1])
      }, e.prototype.onComplete = function (e, t, n, r, i) {
        var o = this,
          s = this.pendingReq(e);
        if (s) {
          this.deletePending(e);
          var a = m() - s.startTime,
            u = Zr(s.headers, function (e) {
              return o.isHeaderInRequestHeaderAllowlist(e[0])
            }),
            c = s.reqBody || null,
            h = i || null,
            d = [s.method, Vn(s.url, {
              source: "event",
              type: P.AJAX_REQUEST
            }), a, n, u, t, s.startTime, s.reqSize, r, c, h];
          this.pushEvent(d)
        }
      }, e.prototype.getMaxAjaxPayloadLength = function () {
        return this._maxAjaxPayloadLength
      }, e.prototype.requestBody = function (e, t) {
        if (null == t) return [0, void 0];
        var n = this.getReqAllowlist(e),
          r = typeof t;
        if ("string" == r) return function (e, t, n) {
          return [e.length, Jr(e, t, n)]
        }(t, this._maxAjaxPayloadLength, n);
        if ("object" == r) {
          var i = r.constructor;
          switch (i) {
            case String:
            case Object:
            default:
              return function (e, t, n) {
                var r = Ur(e, t, n);
                return [Yr(e), r]
              }(t, this._maxAjaxPayloadLength, n);
            case Blob:
              return function (e, t) {
                var n = e.size,
                  r = void 0;
                zr(t) || (r = "[Blob]");
                return [n, r]
              }(t, n);
            case ArrayBuffer:
              return function (e, t) {
                var n = e.byteLength,
                  r = void 0;
                zr(t) || (r = "[ArrayBuffer]");
                return [n, r]
              }(t, n);
            case Document:
            case FormData:
            case URLSearchParams:
            case ReadableStream:
              return [-1, zr(n) ? void 0 : "" + i.name];
          }
        }
        return [-1, zr(n) ? void 0 : "[unknown]"]
      }, e
    }();

  function zr(e) {
    return 0 === e.length || e.indexOf(!1) > -1
  }

  function Qr(e, t, n) {
    return e ? [e.length, Jr(e, t, n)] : [-1, void 0]
  }

  function Yr(e) {
    try {
      return a.jsonStringify(e).length
    } catch (e) {}
    return 0
  }

  function Gr(e) {
    return e._fs
  }

  function Jr(e, t, n) {
    if (!zr(n)) try {
      return Ur(a.jsonParse(e), t, n)
    } catch (r) {
      return n.length > 0 && n.every(function (e) {
        return !0 === e
      }) ? e.slice(0, t) : void 0
    }
  }

  function Xr(e, t) {
    switch (e) {
      default:
      case re.Elide:
        return !1;
      case re.Record:
        return !0;
      case re.Whitelist:
        try {
          return Fr(t)
        } catch (e) {
          return s("error parsing field allowlist (" + t + ": " + e), !1
        }
    }
  }

  function Zr(e, t) {
    var n = "";
    return e.forEach(function (e) {
      e[0] = e[0].toLowerCase();
      var r = t(e);
      n += e[0] + (r ? ": " + e[1] : "") + Hr
    }), n
  }

  function $r(e) {
    return e ? e.sheet : void 0
  }

  function ei(e) {
    try {
      return e ? e.cssRules || e.rules : void 0
    } catch (e) {
      return
    }
  }

  function ti(e, t) {
    var n = function (e, t) {
      var n = e;
      if ("function" == typeof n.getPropertyCSSValue) {
        var r = n.getPropertyCSSValue(t);
        if (null != r) {
          var i;
          switch (r.cssValueType) {
            case 1:
              i = r;
              break;
            case 2:
              if (1 !== r.length) return;
              var o = r.item(0);
              if (null == o) return;
              if (1 !== o.cssValueType) return;
              i = o;
              break;
            default:
              return;
          }
          if (19 === i.primitiveType) {
            var s = Ln();
            Dr || (Dr = s.createElement("div"));
            var a = i.cssText;
            try {
              Dr.style.cssText = t + ": \"" + a + "\";";
              var u = Dr.style.getPropertyCSSValue(t);
              if (null == u) return;
              if (a !== u.cssText) return
            } catch (e) {
              return
            } finally {
              Dr.style.cssText = ""
            }
            return "\"" + a + "\""
          }
        }
      }
    }(e, t);
    return void 0 !== n ? n : e.getPropertyValue(t)
  }
  var ni, ri = "EventQueue not defined for 'withEventQueueFor', likely caused by holding ref to callback",
    ii = function (e) {
      var t = e.ownerDocument;
      return t && t.defaultView
    },
    oi = function () {
      function e(t, n) {
        var r = this;
        this.ctx = t, this.queue = n, this.hooks = [], this.removeShims = [], this.nextSheetId = 1;
        var i = e;
        this.throttle = new wn(i.ThrottleMax, i.ThrottleInterval, function () {
          return setTimeout(function () {
            r.queue.enqueue({
              Kind: P.FAIL_THROTTLED,
              Args: [te.StyleSheetHooks]
            }), r.stop()
          })
        }), this.addInsert = this.throttle.guard(this.addInsert), this.addDelete = this.throttle.guard(this.addDelete)
      }
      return e.prototype.start = function () {
        var e = this;
        this.throttle.open();
        var t = this.ctx.window;
        if (t.CSSStyleSheet && t.StyleSheet) {
          var n, r = t.CSSStyleSheet.prototype;
          (n = De(r, "insertRule")) && (n.afterSync(function (t) {
            e.addInsert(t.that, t.args[0], t.args[1])
          }), this.hooks.push(n)), (n = De(r, "deleteRule")) && (n.afterSync(function (t) {
            e.addDelete(t.that, t.args[0])
          }), this.hooks.push(n)), this.removeShims.push(He(t.StyleSheet, "disabled", function (t, n) {
            return e.onDisableSheet(t, n)
          }), He(t.Document, "adoptedStyleSheets", function (t, n) {
            return e.onSetAdoptedStyleSheets(t)
          }), He(t.ShadowRoot, "adoptedStyleSheets", function (t, n) {
            return e.onSetAdoptedStyleSheets(t)
          }))
        }
      }, e.prototype.onSetAdoptedStyleSheets = function (e) {
        if (ln(e)) {
          var t = e.adoptedStyleSheets;
          if (t) {
            for (var n = [], r = 0, i = t; r < i.length; r++) {
              var o = i[r],
                s = this.snapshotConstructedStylesheet(o);
              n.push(s), !0 === o.disabled && this.onDisableSheet(o, !0)
            }
            this.queue.enqueue({
              Kind: P.ADOPTED_STYLESHEETS,
              Args: [ln(e), n]
            })
          }
        }
      }, e.prototype.snapshotEl = function (e, t) {
        void 0 === t && (t = 0);
        var n = ln(e);
        if (n) {
          var r = $r(e);
          r && this.snapshot([ee.Node, n], r, t)
        }
      }, e.prototype.snapshotConstructedStylesheet = function (e) {
        var t = hi(e);
        if (void 0 !== t) return t;
        var n = this.nextSheetId++;
        return function (e, t) {
          e._fs = t
        }(e, n), this.snapshot([ee.Sheet, n], e), n
      }, e.prototype.snapshot = function (e, t, n) {
        void 0 === n && (n = 0);
        var r = ei(t);
        if (r) {
          for (var i = [], o = n; o < r.length; o++) try {
            var s = di(ni(r[o]));
            i.push(s)
          } catch (e) {
            i.push("html {}")
          }
          this.queue.enqueue({
            Kind: P.CSSRULE_INSERT,
            Args: [e, i, n]
          })
        }
      }, e.prototype.addInsert = function (e, t, n) {
        var r = ci(e, ee.Node);
        if (r && "string" == typeof t) {
          var i = di(t);
          this.withEventQueueForSheet(e, function (e) {
            return e.enqueue({
              Kind: P.CSSRULE_INSERT,
              Args: "number" == typeof n ? [r, [i], n] : [r, [i]]
            })
          })
        }
      }, e.prototype.addDelete = function (e, t) {
        var n = ci(e, ee.Node);
        n && this.withEventQueueForSheet(e, function (e) {
          return e.enqueue({
            Kind: P.CSSRULE_DELETE,
            Args: [n, t]
          })
        })
      }, e.prototype.onDisableSheet = function (e, t) {
        var n = ci(e, ee.Node);
        n && this.withEventQueueForSheet(e, function (e) {
          return e.enqueue({
            Kind: P.DISABLE_STYLESHEET,
            Args: [n, !!t]
          })
        })
      }, e.prototype.withEventQueueForSheet = function (e, t) {
        if (e.ownerNode) return n = this.ctx, r = e.ownerNode, i = t, void((o = R(ii(r) || n.window)) && "function" == typeof o._withEventQueue && o._withEventQueue(n.recording.pageSignature(), function (e) {
          i({
            enqueue: function (t) {
              Je(null != e, ri) && e.enqueue(t)
            },
            enqueueFirst: function (t) {
              Je(null != e, ri) && e.enqueueFirst(t)
            }
          }), e = null
        }));
        var n, r, i, o;
        t(this.queue)
      }, e.prototype.stop = function () {
        this.throttle.close();
        for (var e = 0, t = this.hooks; e < t.length; e++) {
          t[e].disable()
        }
        this.hooks = [];
        for (var n = 0, r = this.removeShims; n < r.length; n++) {
          (0, r[n])()
        }
        this.removeShims = []
      }, e.ThrottleMax = 1e4, e.ThrottleInterval = 1e4, e
    }(),
    si = document.createElement("div");

  function ai(e, t) {
    if (void 0 === t && (t = 0), !Je(t <= 20, "No deep recursion for CSS rules")) return "html { /* Depth limit exceeded! */ }";
    var n = function (e) {
      switch (e.type) {
        case CSSRule.PAGE_RULE:
          var t = e.selectorText || "";
          return t && Ce(t, "@page") ? t : "@page " + t;
        case CSSRule.KEYFRAME_RULE:
          return e.keyText;
        case CSSRule.STYLE_RULE:
          return e.selectorText;
        case CSSRule.MEDIA_RULE:
          return "@media " + e.media.mediaText;
        case CSSRule.KEYFRAMES_RULE:
          return "@keyframes " + e.name;
        case CSSRule.SUPPORTS_RULE:
          return "@supports " + e.conditionText;
        default:
          return null;
      }
    }(e);
    if (null == n) return e.cssText;
    var r = function (e, t) {
      var n = e,
        r = n.style;
      if (r) {
        for (var i = "", o = 0; o < r.length; o++) {
          var s = r[o],
            a = ti(r, s);
          "initial" !== a && ("\"" !== (u = a)[0] && "'" !== u[0] || u[u.length - 1] !== u[0]) || (i += s + ": " + a, "important" === r.getPropertyPriority(s) && (i += " !important"), i += "; ")
        }
        return [r.cssText, i].filter(Boolean).join("\n")
      }
      var u;
      var c = n.cssRules;
      if (!c) return null;
      var h = "";
      for (o = 0; o < c.length; o++) h += ai(c[o], t + 1);
      return h
    }(e, t);
    return null == r ? e.cssText : n + " { " + r + "} "
  }
  si.style.width = "initial", ni = "" != si.style.cssText ? function (e) {
    return e.cssText
  } : ai;
  var ui = /^\s*$/;

  function ci(e, t) {
    var n = function (e) {
      var t = hi(e);
      if (t) return [ee.Sheet, t];
      var n = ln(e.ownerNode);
      if (n) return [ee.Node, n];
      return
    }(e);
    if (n) {
      var r = n[0],
        i = n[1];
      return r === t ? i : n
    }
  }

  function hi(e) {
    return e._fs
  }

  function di(e) {
    return e.length <= Wn ? e : (s("CSSRule too large, inserting dummy instead: " + e.length), ":root { --fs-dropped-large-rule: 0 }")
  }
  var li = function () {
      function e(e, t, n) {
        this._ctx = e, this._q = t, this._listeners = n.createChild()
      }
      return e.prototype.start = function () {
        var e = this,
          t = this._ctx.window.document;
        this._listeners.addCustom(t, this.getFullscreenChangeEvent(), !0, function (t) {
          e.onFullscreenChange(t)
        }), this._listeners.addCustom(t, this.getFullscreenErrorEvent(), !0, function (t) {
          e.onFullscreenError(t)
        })
      }, e.prototype.stop = function () {
        this._listeners && this._listeners.clear()
      }, e.prototype.onFullscreenChange = function (e) {
        var t = this.getFullscreenElement();
        if (t) {
          var n = ln(t);
          Je(null == this._previousFullscreenFSID, "Error: Received fullscreen signal but we think we are already in fullscreen?"), this._q.enqueue({
            Kind: P.FULLSCREEN,
            Args: [n, !0]
          }), this._previousFullscreenFSID = n
        } else Je(null != this._previousFullscreenFSID, "Error: Received fullscreen exit signal but have no previous fullscreen event?"), this._q.enqueue({
          Kind: P.FULLSCREEN,
          Args: [this._previousFullscreenFSID, !1]
        }), this._previousFullscreenFSID = void 0
      }, e.prototype.onFullscreenError = function (e) {
        this._q.enqueue({
          Kind: P.FULLSCREEN_ERROR,
          Args: []
        })
      }, e.prototype.getFullscreenElement = function () {
        var e = this._ctx.window.document;
        return e[Te(e, "fullscreenElement")]
      }, e.prototype.getFullscreenChangeEvent = function () {
        return Te(this._ctx.window.document, "onfullscreenchange").slice(2)
      }, e.prototype.getFullscreenErrorEvent = function () {
        return Te(this._ctx.window.document, "onfullscreenerror").slice(2)
      }, e
    }(),
    pi = function () {
      function e(e, t) {
        this._queue = t, this._registry = null, this._checkedNodeTags = {};
        var n = e.window;
        this._registry = n.customElements && n.customElements.get && n.customElements.whenDefined && n.customElements
      }
      return e.prototype.onCustomNodeVisited = function (e) {
        return Object(r.__awaiter)(this, void 0, xt, function () {
          var t, n;
          return Object(r.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                if (!this._registry) return [2];
                if (t = e.nodeName.toLowerCase(), this._checkedNodeTags.hasOwnProperty(t)) return [2];
                r.label = 1;
              case 1:
                return r.trys.push([1, 3, , 4]), n = !!this._registry.get(t), this._checkedNodeTags[t] = n, [4, this._registry.whenDefined(t)];
              case 2:
                return r.sent(), this._enqueue(t), [3, 4];
              case 3:
                return r.sent(), [3, 4];
              case 4:
                return [2];
            }
          })
        })
      }, e.prototype._enqueue = function (e) {
        this._queue.enqueue({
          Kind: P.CUSTOM_ELEMENT_DEFINED,
          Args: [e]
        })
      }, e
    }(),
    fi = function () {
      function e(e, t, n, r, i, o, s, a) {
        var u = this;
        this._ctx = e, this._queue = t, this._keep = n, this._onFrameCreated = o, this._beforeFrameRemoved = s, this._resourceUploader = a, this._curSelection = [], this._scrollTimeouts = {}, this._uploadResources = !1, this._modalHooks = [], this._initialized = !1, this._wnd = e.window, this._doc = this._wnd.document, this._loc = this._wnd.location, this._hst = this._wnd.history, this._listeners = i.createChild(), this._currentUrl = this._loc.href, this._inputWatcher = new bn(t), this._ajaxWatcher = new Vr(e, t), this._perfWatcher = new Mr(e, t, this._listeners), this._styleSheetWatcher = new oi(e, t), this._fullscreenWatcher = new li(e, t, this._listeners), this._customElementWatcher = new pi(e, t);
        this._mutWatcher = new xr(e, r, function (e, t) {
          return u.visitNode(e, t)
        }, function (e) {
          return u.beforeRemove(e)
        }, function (e, t, n) {
          return u.attributeVisitor(e, t, n)
        })
      }
      return e.prototype.getResourceUploader = function () {
        return this._resourceUploader
      }, e.prototype.watchEvents = function () {
        var e = this;
        this._mutWatcher.hookMutations(), this._inputWatcher.hookEvents(), this._styleSheetWatcher.start(), this._fullscreenWatcher.start(), this._listeners.add(this._wnd, "mousemove", !0, function (t) {
          e.isSafePointerEvent(t) && e.addMouseMove(t)
        }), this._listeners.add(this._wnd, "mousedown", !0, function (t) {
          e.isSafePointerEvent(t) && e.addMouseDown(t)
        }), this._listeners.add(this._wnd, "mouseup", !0, function (t) {
          e.isSafePointerEvent(t) && e.addMouseUp(t)
        }), this._listeners.add(this._wnd, "keydown", !0, function () {
          e._maybeAddValueChange()
        }), this._listeners.add(this._wnd, "keyup", !0, function () {
          e._maybeAddValueChange()
        }), this._listeners.add(this._wnd, "click", !0, function (t) {
          e.isSafePointerEvent(t) && e.addClick(t)
        }), this._listeners.add(this._wnd, "dblclick", !0, function (t) {
          e.addDblClick(t)
        }), this._listeners.add(this._wnd, "focus", !0, function (t) {
          e.addFocus(t)
        }), this._listeners.add(this._wnd, "blur", !0, function (t) {
          e.addBlur(t)
        }), this._listeners.add(this._wnd, "change", !0, function (t) {
          e.addChange(t)
        }, !0), this._listeners.add(this._wnd, "touchstart", !0, function (t) {
          e.isSafePointerEvent(t) && (e.addTouchEvent(t, P.TOUCHSTART), e.addWindowScrollOrResize())
        }), this._listeners.add(this._wnd, "touchend", !0, function (t) {
          e.isSafePointerEvent(t) && (e.addTouchEvent(t, P.TOUCHEND), e.addWindowScrollOrResize())
        }), this._listeners.add(this._wnd, "touchmove", !0, function (t) {
          e.isSafePointerEvent(t) && (e.addTouchEvent(t, P.TOUCHMOVE), e.addWindowScrollOrResize())
        }), this._listeners.add(this._wnd, "touchcancel", !0, function (t) {
          e.isSafePointerEvent(t) && e.addTouchEvent(t, P.TOUCHCANCEL)
        }), this._listeners.add(this._wnd, "play", !0, function (t) {
          e.addPlayEvent(t)
        }), this._listeners.add(this._wnd, "pause", !0, function (t) {
          e.addPauseEvent(t)
        }), this._listeners.add(this._wnd, "scroll", !1, function () {
          e.addWindowScrollOrResize()
        }), this._listeners.add(this._wnd, "resize", !1, function () {
          e.addWindowScrollOrResize()
        }), this._listeners.add(this._wnd, "submit", !1, function (t) {
          e.addFormSubmit(t)
        }), this._listeners.add(this._wnd, "focus", !1, function () {
          e.addWindowFocus()
        }), this._listeners.add(this._wnd, "blur", !1, function () {
          e.addWindowBlur()
        }), this._listeners.add(this._wnd, "popstate", !1, function () {
          e.addNavigate()
        }), this._listeners.add(this._wnd, "selectstart", !0, function () {
          e.addSelection()
        }), this._listeners.add(this._doc, "selectionchange", !0, function () {
          e.addSelection()
        });
        var t = this._wnd.visualViewport;
        t ? (this._listeners.add(t, "scroll", !0, function () {
          return e.addWindowScrollOrResize()
        }), this._listeners.add(t, "resize", !0, function () {
          return e.addWindowScrollOrResize()
        })) : this._listeners.add(this._wnd, "mousewheel", !0, function () {
          e.addWindowScrollOrResize()
        }), this._pushHook = De(this._hst, "pushState"), this._pushHook && this._pushHook.afterSync(function () {
          return e.addNavigate()
        }), this._replaceHook = De(this._hst, "replaceState"), this._replaceHook && this._replaceHook.afterSync(function () {
          return e.addNavigate()
        });
        for (var n = function (t) {
            var n = De(r._wnd, t);
            if (!n) return "continue";
            r._modalHooks.push(n), n.before(function () {
              e._queue.enqueue({
                Kind: P.MODAL_OPEN,
                Args: [t]
              })
            }).afterSync(function () {
              e._queue.enqueue({
                Kind: P.MODAL_CLOSE,
                Args: [t]
              })
            })
          }, r = this, i = 0, o = ce; i < o.length; i++) {
          n(o[i])
        }
        if ("function" == typeof this._wnd.document.hasFocus && this._queue.enqueue({
            Kind: this._wnd.document.hasFocus() ? P.WINDOW_FOCUS : P.WINDOW_BLUR,
            Args: []
          }), a.matchMedia)
          for (var s = function (t, n, r) {
              var i = a.matchMedia(u._wnd, r);
              if (!i) return "continue";
              var o = function () {
                i.matches && e._queue.enqueue({
                  Kind: P.MEDIA_QUERY_CHANGE,
                  Args: [t, n]
                })
              };
              u._listeners.add(i, "change", !0, o), o()
            }, u = this, c = 0, h = [
              ["any-pointer", "coarse", "not screen and (any-pointer: fine)"],
              ["any-pointer", "fine", "only screen and (any-pointer: fine)"],
              ["any-hover", "none", "not screen and (any-hover: hover)"],
              ["any-hover", "hover", "only screen and (any-hover: hover)"],
              ["pointer", "none", "(pointer: none)"],
              ["pointer", "coarse", "(pointer: coarse)"],
              ["pointer", "fine", "(pointer: fine)"],
              ["prefers-color-scheme", "no-preference", "(prefers-color-scheme: no-preference)"],
              ["prefers-color-scheme", "light", "(prefers-color-scheme: light)"],
              ["prefers-color-scheme", "dark", "(prefers-color-scheme: dark)"]
            ]; c < h.length; c++) {
            var d = h[c];
            s(d[0], d[1], d[2])
          }
        this._initialized = !0
      }, e.prototype.initResourceUploading = function () {
        this._resourceUploader.init(), this._uploadResources = !0
      }, e.prototype.onDomLoad = function () {
        this.addDomLoaded(), this.addViewportChange(), this._mutWatcher._checkForMissingInsertions(fe)
      }, e.prototype.onLoad = function () {
        var e = this,
          t = !1,
          n = Ye.wrap(function () {
            t || (t = !0, e._perfWatcher.onLoad(), e.addLoad(), e.addViewportChange())
          }, "error");
        new yn(n, 0).start(), a.requestWindowAnimationFrame && a.requestWindowAnimationFrame(this._wnd, n)
      }, e.prototype.ajaxWatcher = function () {
        return this._ajaxWatcher
      }, e.prototype.perfWatcher = function () {
        return this._perfWatcher
      }, e.prototype.bundleEvents = function (e) {
        var t = this;
        return this._queue.enqueueSimultaneousEventsIn(function (n) {
          var r = t._mutWatcher.processMutations(n);
          return t._inputWatcher.tick(), t._perfWatcher.tick(e), t._ajaxWatcher.tick(e), t.addViewportChange(), r
        })
      }, e.prototype.shutdown = function (e) {
        if (this._initialized) {
          this._initialized = !1, this._listeners && this._listeners.clear(), this._pushHook && this._pushHook.disable(), this._replaceHook && this._replaceHook.disable();
          for (var t = 0, n = this._modalHooks; t < n.length; t++) {
            n[t].disable()
          }
          this._modalHooks = [], this._perfWatcher.onLoad(), this._ctx.measurer.performMeasurementsNow(), this._queue.processEvents(), this._inputWatcher.shutdown(), this._mutWatcher.shutdown(), this._ajaxWatcher.disable(), this._perfWatcher.shutdown(), this._styleSheetWatcher.stop(), this._fullscreenWatcher.stop(), this._queue.shutdown(e)
        }
      }, e.prototype.recordingIsDetached = function () {
        return this._mutWatcher.recordingIsDetached()
      }, e.prototype.visitNode = function (e, t) {
        var n = this;
        switch (e.nodeName) {
          case "#document":
          case "#document-fragment":
            "#document-fragment" === e.nodeName && this._listeners.add(e, "scroll", !0, function (e) {
              return n.addScroll(gi(e))
            });
            var r = e;
            try {
              if (!r.adoptedStyleSheets || 0 === r.adoptedStyleSheets.length) break
            } catch (e) {
              break
            }
            t.push(function () {
              n._styleSheetWatcher.onSetAdoptedStyleSheets(e)
            });
            break;
          case "HTML":
            this._docElScrollListener && this._listeners.remove(this._docElScrollListener), this._docElScrollListener = this._listeners.add(e, "scroll", !0, function (e) {
              n.addScroll(gi(e))
            });
            break;
          case "BODY":
            this.addViewportChange(), this.addSelection();
            break;
          case "INPUT":
          case "TEXTAREA":
          case "SELECT":
            this._inputWatcher.addInput(e);
            break;
          case "FRAME":
          case "IFRAME":
            this._onFrameCreated(e);
            break;
          case "VIDEO":
          case "AUDIO":
            e.paused || this._queue.enqueue({
              Kind: P.PLAY,
              Args: [ln(e)]
            });
            break;
          case "LINK":
            if (!(i = e.sheet)) break;
            !0 === i.disabled && this._styleSheetWatcher.onDisableSheet(i, !0);
            break;
          case "STYLE":
            var i, o = e;
            if (!(i = o.sheet)) break;
            !0 === i.disabled && this._styleSheetWatcher.onDisableSheet(i, !0);
            var s = function (e) {
              var t = e.textContent || "";
              if (!(t.length > 5e5)) {
                var n = ei($r(e));
                if (n) {
                  if (n.length > 0 && ui.test(t)) return 0;
                  if (e.hasAttribute("data-fela-type")) {
                    var r, i = Ln();
                    fe ? (r = i.createElement("style")).textContent = e.textContent : r = i.importNode(e, !0), i.head.appendChild(r);
                    var o = ei($r(r));
                    if (i.head.removeChild(r), o) return n.length > o.length ? o.length : void 0
                  }
                }
              }
            }(o);
            void 0 !== s && t.push(function () {
              n._styleSheetWatcher.snapshotEl(o, s)
            });
            break;
          default:
            "#" !== e.nodeName[0] && e.nodeName.indexOf("-") > -1 && this._customElementWatcher.onCustomNodeVisited(e);
        }
        if ("scrollLeft" in e && "scrollTop" in e) {
          var a = e;
          this._ctx.measurer.requestMeasureTask(Mt.Low, function () {
            0 == a.scrollLeft && 0 == a.scrollTop || n.addScroll(a)
          })
        }
      }, e.prototype.beforeRemove = function (e) {
        var t = e.node;
        if ("iframe" == $t(e.node)) this._beforeFrameRemoved(e.node);
        else if ("function" == typeof t.getElementsByTagName)
          for (var n = t.getElementsByTagName("iframe"), r = 0; r < n.length; r++) {
            var i = n[r];
            this._beforeFrameRemoved(i)
          }
      }, e.prototype.attributeVisitor = function (e, t, n) {
        if (this._uploadResources && ! function (e) {
            return an(e) || un(e)
          }(e))
          for (var r = 0, i = function (e, t, n) {
              var r, i = $t(e);
              if (vi[t] && vi[t][i]) return [n];
              if ("link" == i && "href" == t && (r = e.getAttribute("rel")) && r.indexOf("stylesheet") > -1) return [n];
              if ("srcset" == t && ("img" == i || "source" == i)) {
                return null != n.match(/^\s*$/) ? [] : n.split(",").map(function (e) {
                  return e.trim().split(/\s+/)[0]
                })
              }
              var o = e;
              if ("style" == t && o.style) {
                var s = o.style.backgroundImage;
                if (!s) return [];
                if (s.length > 300) return [];
                var a = [],
                  u = void 0;
                for (zt.lastIndex = 0; u = zt.exec(s);) {
                  var c = u[1];
                  c && a.push(c.trim())
                }
                return a
              }
              return []
            }(e, t, n); r < i.length; r++) {
            var o = i[r];
            this._resourceUploader.uploadIfNeeded(this._wnd, o)
          }
      }, e.prototype.isSafePointerEvent = function (e) {
        var t = gi(e);
        return !!ln(t) && !an(t)
      }, e.prototype.addMouseMove = function (e) {
        var t = ln(gi(e));
        this._queue.enqueue({
          Kind: P.MOUSEMOVE,
          Args: t ? [e.clientX, e.clientY, t] : [e.clientX, e.clientY]
        })
      }, e.prototype.addMouseDown = function (e) {
        this._queue.enqueue({
          Kind: P.MOUSEDOWN,
          Args: [e.clientX, e.clientY]
        })
      }, e.prototype.addMouseUp = function (e) {
        this._queue.enqueue({
          Kind: P.MOUSEUP,
          Args: [e.clientX, e.clientY]
        })
      }, e.prototype.addTouchEvent = function (e, t) {
        if (void 0 !== e.changedTouches)
          for (var n = 0; n < e.changedTouches.length; ++n) {
            var r = e.changedTouches[n];
            isNaN(parseInt(r.identifier)) && (r.identifier = 0);
            var i = [r.identifier, r.clientX, r.clientY];
            this._queue.enqueue({
              Kind: t,
              Args: i
            })
          }
      }, e.prototype.addPlayEvent = function (e) {
        var t = ln(gi(e));
        t && this._queue.enqueue({
          Kind: P.PLAY,
          Args: [t]
        })
      }, e.prototype.addPauseEvent = function (e) {
        var t = ln(gi(e));
        t && this._queue.enqueue({
          Kind: P.PAUSE,
          Args: [t]
        })
      }, e.prototype.addWindowFocus = function () {
        this._queue.enqueue({
          Kind: P.WINDOW_FOCUS,
          Args: []
        })
      }, e.prototype.addWindowBlur = function () {
        this._queue.enqueue({
          Kind: P.WINDOW_BLUR,
          Args: []
        })
      }, e.prototype._maybeAddValueChange = function () {
        var e = function (e) {
          var t = e.activeElement;
          for (; t && t.shadowRoot;) {
            var n = t.shadowRoot.activeElement;
            if (!n) return t;
            t = n
          }
          return t
        }(this._doc);
        e && !an(e) && this._inputWatcher.onChange(e)
      }, e.prototype.addViewportChange = function () {
        var e = this;
        this._ctx.measurer.requestMeasureTask(Mt.High, function () {
          return e._addViewportChangeImpl()
        })
      }, e.prototype._addViewportChangeImpl = function () {
        var e = this.getWindowScrollingElement(),
          t = ln(e);
        if (t) {
          var n = function (e, t) {
            var n = e.documentElement.getBoundingClientRect(),
              r = t.scrollWidth,
              i = t.scrollHeight;
            return {
              width: a.mathMax(n.width, r),
              height: a.mathMax(n.height, i)
            }
          }(this._wnd.document, e);
          Dt(n, this._curDocSize) || (this._curDocSize = n, this._queue.enqueue({
            Kind: P.RESIZE_DOCUMENT_CONTENT,
            Args: [n.width, n.height]
          }));
          var r, i, o, s, u = Xt(this._wnd, this._curLayoutViewport),
            c = function (e, t) {
              return "visualViewport" in e ? e.visualViewport : (void 0 === t && (t = Xt(e)), new Zt(e, t))
            }(this._wnd, u);
          u.hasKnownPosition ? (Bt(u, this._curLayoutViewport) || this._queue.enqueue({
              Kind: P.SCROLL_LAYOUT,
              Args: [t, u.pageLeft, u.pageTop]
            }), r = c, (i = this._curVisualViewport) && r.offsetLeft == i.offsetLeft && r.offsetTop == i.offsetTop || this._queue.enqueue({
              Kind: P.SCROLL_VISUAL_OFFSET,
              Args: [t, c.offsetLeft, c.offsetTop]
            })) : Bt(c, this._curVisualViewport) || this._queue.enqueue({
              Kind: P.SCROLL_LAYOUT,
              Args: [t, c.pageLeft, c.pageTop]
            }),
            function (e, t) {
              return t && e.width == t.width && e.height == t.height && e.clientWidth == t.clientWidth && e.clientHeight == t.clientHeight
            }(u, this._curLayoutViewport) || (u.width == u.clientWidth && u.height == u.clientHeight ? this._queue.enqueue({
              Kind: P.RESIZE_LAYOUT,
              Args: [u.clientWidth, u.clientHeight]
            }) : this._queue.enqueue({
              Kind: P.RESIZE_LAYOUT,
              Args: [u.clientWidth, u.clientHeight, u.width, u.height]
            })), Dt(c, this._curVisualViewport) || this._queue.enqueue({
              Kind: P.RESIZE_VISUAL,
              Args: [c.width, c.height]
            }), this._curLayoutViewport = ((s = Ht(o = u)).clientWidth = o.clientWidth, s.clientHeight = o.clientHeight, s), this._curVisualViewport = function (e) {
              var t = Ht(e);
              return t.offsetLeft = e.offsetLeft, t.offsetTop = e.offsetTop, t
            }(c)
        }
      }, e.prototype.doWorkInScrollTimeout = function (e, t) {
        var n = this;
        e in this._scrollTimeouts || (this._scrollTimeouts[e] = t, new yn(function () {
          n._ctx.measurer.requestMeasureTask(Mt.High, function () {
            if (e in n._scrollTimeouts) {
              var t = n._scrollTimeouts[e];
              delete n._scrollTimeouts[e], t()
            }
          })
        }, ue.ScrollSampleInterval).start())
      }, e.prototype._fireScrollTimeouts = function () {
        for (var e in this._scrollTimeouts) this._scrollTimeouts[e](), delete this._scrollTimeouts[e];
        this._scrollTimeouts = []
      }, e.prototype.getWindowScrollingElement = function () {
        return this._doc.scrollingElement || this._doc.body || this._doc.documentElement
      }, e.prototype.addWindowScrollOrResize = function () {
        var e = this;
        this.doWorkInScrollTimeout(1, function () {
          return e.addViewportChange()
        })
      }, e.prototype.addScroll = function (e) {
        var t = this,
          n = ln(e);
        n && this.doWorkInScrollTimeout(n, function () {
          if (ln(e) === n) {
            var r = e;
            n && "number" == typeof r.scrollLeft && (t._queue.enqueue({
              Kind: P.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
              Args: [n, r.scrollWidth, r.scrollHeight]
            }), t._queue.enqueue({
              Kind: P.SCROLL_LAYOUT,
              Args: [n, r.scrollLeft, r.scrollTop]
            }), qt().then(function () {
              t._mutWatcher.resizer().isObserved(n) || t._mutWatcher.resizer().observe(e)
            }))
          }
        })
      }, e.prototype.addDomLoaded = function () {
        this._queue.enqueue({
          Kind: P.DOMLOADED,
          Args: []
        })
      }, e.prototype.addLoad = function () {
        this._queue.enqueue({
          Kind: P.LOAD,
          Args: []
        })
      }, e.prototype.getNavigateEvent = function (e, t) {
        return void 0 === t && (t = P.NAVIGATE), {
          Kind: t,
          Args: [Vn(e, {
            source: "event",
            type: P.NAVIGATE
          }), this.getNavigationTimingType()]
        }
      }, e.prototype.addNavigate = function () {
        var e = this._loc.href;
        this._currentUrl != e && (this._currentUrl = e, this._keep.onNavigate(e), this._queue.enqueue(this.getNavigateEvent(e)))
      }, e.prototype.getNavigationTimingType = function () {
        try {
          var e = this._wnd.performance;
          if (!e || !e.navigation) return "unknown";
          switch (e.navigation.type) {
            case PerformanceNavigation.TYPE_NAVIGATE:
              return "navigate";
            case PerformanceNavigation.TYPE_RELOAD:
              return "reload";
            case PerformanceNavigation.TYPE_BACK_FORWARD:
              return "back_forward";
            default:
              return "unknown";
          }
        } catch (e) {
          return "unknown"
        }
      }, e.prototype.addClick = function (e) {
        var t = gi(e),
          n = ln(t);
        if (n) {
          var r = 0,
            i = 0,
            o = 0,
            s = 0;
          if (t && t.getBoundingClientRect) {
            var a = t.getBoundingClientRect();
            r = a.left, i = a.top, o = a.width, s = a.height
          }
          var u = hn(t);
          this._keep.onClick(u), this._queue.enqueue({
            Kind: P.CLICK,
            Args: [n, e.clientX, e.clientY, r, i, o, s]
          })
        }
      }, e.prototype.addDblClick = function (e) {
        var t = ln(gi(e));
        t && this._queue.enqueue({
          Kind: P.DBL_CLICK,
          Args: [t]
        })
      }, e.prototype.addFormSubmit = function (e) {
        var t = ln(gi(e));
        t && this._queue.enqueue({
          Kind: P.FORM_SUBMIT,
          Args: [t]
        })
      }, e.prototype.addFocus = function (e) {
        var t = ln(gi(e));
        t && this._queue.enqueue({
          Kind: P.FOCUS,
          Args: [t]
        })
      }, e.prototype.addBlur = function (e) {
        var t = ln(gi(e));
        t && this._queue.enqueue({
          Kind: P.BLUR,
          Args: [t]
        })
      }, e.prototype.addChange = function (e) {
        this._inputWatcher.onChange(gi(e))
      }, e.prototype.addSelection = function () {
        var e = this;
        this._ctx.measurer.requestMeasureTask(Mt.High, function () {
          var t;
          try {
            t = e.selectionArgs()
          } catch (e) {
            return
          }
          for (var n = !1, r = 0; r < 4; r++)
            if (e._curSelection[r] !== t[r]) {
              n = !0;
              break
            } n && (e._curSelection = t, e._queue.enqueue({
            Kind: P.SELECT,
            Args: t
          }))
        })
      }, e.prototype.selectionArgs = function () {
        if (!this._wnd.getSelection) return [];
        var e = this._wnd.getSelection();
        if (!e) return [];
        if ("None" == e.type) return [];
        if ("Caret" == e.type) {
          var t = ln(e.anchorNode);
          return t ? [t, e.anchorOffset] : []
        }
        if (!e.anchorNode || !e.focusNode) return [];
        var n = _i(e.anchorNode, e.anchorOffset),
          r = n[0],
          i = n[1],
          o = _i(e.focusNode, e.focusOffset),
          s = o[0],
          a = o[1],
          u = Boolean(r.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING),
          c = u ? [r, s] : [s, r],
          h = c[0],
          d = c[1],
          l = u ? [i, a] : [a, i],
          p = l[0],
          f = l[1];
        for (ln(h) || (p = 0); h && !ln(h) && h != d;) h = Ie(h) || h.parentNode;
        for (ln(d) || (f = 0); d && !ln(d) && d != h;) d = Le(d) || d.parentNode;
        if (h == d && p == f) return [];
        var _ = ln(h),
          v = ln(d);
        return h && d && _ && v ? [_, p, v, f, u] : []
      }, e
    }();

  function _i(e, t) {
    if (!e.firstChild) return [e, t];
    e = e.firstChild;
    for (var n = 0; n < t - 1; n++) {
      var r = Ie(e);
      if (!r) return [e, 0];
      e = r
    }
    return [e, 0]
  }
  var vi = {
    src: {
      img: !0,
      embed: !0
    },
    href: {
      use: !0,
      image: !0
    },
    data: {
      object: !0
    }
  };

  function gi(e) {
    if (e.composed && e.target) {
      var t = e.target;
      if (1 == t.nodeType && t.shadowRoot) {
        var n = e.composedPath();
        if (n.length > 0) return n[0]
      }
    }
    return e.target
  }
  var mi = /^\s*at .*(\S+\:\d+|native|(<anonymous>))/m,
    yi = /^(eval@)?(\[native code\])?$/;

  function wi(e) {
    if (!e || "string" != typeof e.stack) return [];
    var t = e;
    return t.stack.match(mi) ? t.stack.split("\n").filter(function (e) {
      return !!e.match(mi)
    }).map(function (e) {
      e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
      var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/\(native code\)/, "").split(/\s+/).slice(1),
        n = bi(t.pop());
      return Si(t.join(" "), ["eval", "<anonymous>"].indexOf(n[0]) > -1 ? "" : n[0], n[1], n[2])
    }) : function (e) {
      return e.split("\n").filter(function (e) {
        return !e.match(yi)
      }).map(function (e) {
        if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return [e, "", -1, -1];
        var t = e.split("@"),
          n = bi(t.pop());
        return Si(t.join("@"), n[0], n[1], n[2])
      })
    }(t.stack)
  }

  function Si(e, t, n, r) {
    return [e || "", t || "", parseInt(n || "-1"), parseInt(r || "-1")]
  }

  function bi(e) {
    if (!e || -1 === e.indexOf(":")) return ["", "", ""];
    var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
    return t ? [t[1] || "", t[2] || "", t[3] || ""] : ["", "", ""]
  }
  var Ei = function () {
    function e(e, t, n) {
      this._queue = t, this._enabled = !1, this._overflow = !1, this._total = 0, this._hooks = [], this.maxLogsPerPage = ue.MaxLogsPerPage, this._wnd = e.window, this._listeners = n.createChild()
    }
    return e.prototype.initializeMaxLogsPerPage = function (e) {
      this.maxLogsPerPage = e
    }, e.prototype._overflowMsg = function () {
      return "\"[received more than " + this.maxLogsPerPage + " messages]\""
    }, e.prototype.enable = function () {
      var e = this;
      if (this._listeners.add(this._wnd, "error", !0, function (t) {
          return e.addError(t)
        }), this._listeners.add(this._wnd, "unhandledrejection", !0, function (t) {
          e.addLog("error", ["Uncaught (in promise)", t.reason])
        }, !0), !this._enabled)
        if (this._enabled = !0, this._queue.enqueue({
            Kind: P.REC_FEAT_SUPPORTED,
            Args: [$.Console, !0]
          }), this._wnd.console)
          for (var t = function (t) {
              var r = De(n._wnd.console, t);
              if (!r) return "continue";
              r.before(function (n) {
                var r = n.args;
                return e.addLog(t, r)
              }), n._hooks.push(r)
            }, n = this, r = 0, i = ["log", "info", "warn", "error"]; r < i.length; r++) {
            t(i[r])
          } else this.addLog("log", ["NOTE: Log messages cannot be captured on IE9"])
    }, e.prototype.isEnabled = function () {
      return this._enabled
    }, e.prototype.disable = function () {
      var e;
      if (this._listeners && this._listeners.clear(), this._enabled)
        for (this._enabled = !1; e = this._hooks.pop();) e.disable()
    }, e.prototype.logEvent = function (e, t) {
      if (!this.checkOverflow()) return null;
      var n;
      n = -1 == ["log", "info", "warn", "error", "debug", "_fs_debug"].indexOf(e) ? ["log", Ti(e, 1e3)] : [e];
      for (var r = 0; r < t.length; ++r) n.push(Ti(t[r], 1e3));
      return {
        Kind: P.LOG,
        Args: n
      }
    }, e.prototype.addLog = function (e, t) {
      var n = this.logEvent(e, t);
      n && this._queue.enqueue(n)
    }, e.prototype.addError = function (e) {
      var t = e.message,
        n = e.filename,
        i = e.lineno;
      (t || n || i) && this.checkOverflow() && ("object" == typeof t && (t = Ti(t, 1e3)), "object" == typeof n && (n = Ti(n, 100, !1)), "object" == typeof i && (i = -1), this._queue.enqueue({
        Kind: P.ERROR,
        Args: Object(r.__spreadArrays)([t, n, i], wi(e.error))
      }))
    }, e.prototype.checkOverflow = function () {
      return !this._overflow && (this._total == this.maxLogsPerPage ? (this._queue.enqueue({
        Kind: P.LOG,
        Args: ["warn", this._overflowMsg()]
      }), this._overflow = !0, !1) : (this._total++, !0))
    }, e
  }();

  function Ti(e, t, n) {
    void 0 === n && (n = !0);
    try {
      var r = {
        tokens: [],
        opath: [],
        cyclic: ki(e, t / 4)
      };
      ! function e(t, n, r, i) {
        if (n < 1) return 0;
        var o = t && t.constructor == Date ? (s = t, isNaN(s) ? "Invalid Date" : s.toUTCString()) : function (e) {
          return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeType > 0 && "string" == typeof e.nodeName
        }(t) ? function (e) {
          return e.toString()
        }(t) : void 0 === t ? "undefined" : "object" != typeof t || null == t ? t : t instanceof Error ? t.stack || t.name + ": " + t.message : void 0;
        var s;
        if (void 0 !== o) return void 0 === (o = a.jsonStringify(o)) ? 0 : ("\"" == o[0] && (o = Ii(o, n, "...\"")), o.length <= n ? (i.tokens.push(o), o.length) : 0);
        if (i.cyclic) {
          i.opath.splice(r);
          var u = i.opath.lastIndexOf(t);
          if (u > -1) {
            var c = "<Cycle to ancestor #" + (r - u - 1) + ">";
            return c = "\"" + Ii(c, n - 2) + "\"", i.tokens.push(c), c.length
          }
          i.opath.push(t)
        }
        var h = n,
          d = function (e) {
            return h >= e.length && (h -= e.length, i.tokens.push(e), !0)
          },
          l = function (e) {
            "," == i.tokens[i.tokens.length - 1] ? i.tokens[i.tokens.length - 1] = e : d(e)
          };
        if (h < 2) return 0;
        if (ke(t)) {
          d("[");
          for (var p = 0; p < t.length && h > 0; p++) {
            var f = e(t[p], h - 1, r + 1, i);
            if (h -= f, 0 == f && !d("null")) break;
            d(",")
          }
          l("]")
        } else {
          d("{");
          var _ = be(t);
          for (p = 0; p < _.length && h > 0; p++) {
            var v = _[p],
              g = t[v];
            if (!d("\"" + v + "\":")) break;
            if (0 == (f = e(g, h - 1, r + 1, i))) {
              i.tokens.pop();
              break
            }
            h -= f, d(",")
          }
          l("}")
        }
        return n == 1 / 0 ? 1 : n - h
      }(e, t, 0, r);
      var i = r.tokens.join("");
      return n ? i.replace(er, "<email>").replace(tr, function (e) {
        return Vn(e, {
          source: "log",
          type: "debug"
        })
      }) : i
    } catch (e) {
      return Ue(e)
    }
  }

  function ki(e, t) {
    var n = 0;
    try {
      a.jsonStringify(e, function (e, r) {
        if (n++ > t) throw "break";
        if ("object" == typeof r) return r
      })
    } catch (e) {
      return "break" != e
    }
    return !1
  }
  var Ii = function (e, t, n) {
    return void 0 === n && (n = "..."), e.length <= t ? e : e.length <= n.length || t <= n.length ? e.substring(0, t) : e.substring(0, t - n.length) + n
  };
  var Ci = function () {
    function e(e, t) {
      this._q = e, this._valueIndices = t, this._evts = [], this._curveEndMs = 0
    }
    return e.prototype.add = function (e) {
      0 == this._evts.length ? (this._q.push(e), this._curveEndMs = e.When) : e.When > this._curveEndMs && (this._curveEndMs = e.When), this._evts.push(e)
    }, e.prototype.finish = function (e, t) {
      void 0 === t && (t = []);
      var n = this._evts.length;
      if (n <= 1) return !1;
      for (var i = Object(r.__spreadArrays)([this._curveEndMs], t), o = this._evts[0].When, s = this._evts[n - 1].When, a = 0; a < this._valueIndices.length; ++a) {
        var u = this._valueIndices[a],
          c = this._evts[0].Args[u],
          h = (this._evts[1].When - o) / (s - o),
          d = (this._evts[1].Args[u] - c) / h,
          l = this._evts[n - 2].Args[u],
          p = (s - this._evts[n - 2].When) / (s - o),
          f = this._evts[n - 1].Args[u],
          _ = (f - l) / p;
        i.push(c, f, d, _)
      }
      return this._evts[0].Kind = e, this._evts[0].Args = i, !0
    }, e.prototype.evts = function () {
      return this._evts
    }, e
  }();
  var Oi = function () {
    function e() {
      this._size = 0, this._root = {}, this._root.next = this._root.prev = this._root
    }
    return e.prototype.first = function () {
      return this._root.next.value
    }, e.prototype.last = function () {
      return this._root.prev.value
    }, e.prototype.size = function () {
      return this._size
    }, e.prototype.push = function (e) {
      this._size++, Ai(this._root.prev, {
        value: e
      })
    }, e.prototype.unshift = function (e) {
      this._size++, Ai(this._root, {
        value: e
      })
    }, e.prototype.pop = function () {
      return this._size > 0 && this._size--, Ri(this._root.prev)
    }, e.prototype.shift = function () {
      return this._size > 0 && this._size--, Ri(this._root.next)
    }, e
  }();

  function Ai(e, t) {
    var n = e.next;
    t.next = n, t.prev = e, e.next = n.prev = t
  }

  function Ri(e) {
    var t = e.prev,
      n = e.next;
    return t.next = n, n.prev = t, e.value
  }
  var xi = function () {
      function e(e, t) {
        var n, r;
        void 0 === t && (t = w), this._ctx = e, this._msSinceDocumentStart = t, this._clickTimes = new Oi, this._rageThreshold = 5, this._thresholdRaisedAt = -1, this._isIgnoredCache = new WeakMap;
        var i = e.recording.pageResponse();
        if (!i) throw new Error("Attempt to construct EasyBake before rec/page response is set.");
        for (var o = [".fs-ignore-rage-clicks", ".fs-ignore-rage-clicks *"], s = 0, a = null !== (r = null === (n = i.BehaviorSignalSettings) || void 0 === n ? void 0 : n.ElementBlocks) && void 0 !== r ? r : []; s < a.length; s++) {
          var u = a[s];
          u.Signals.indexOf(ie.SignalRageClick) > -1 && (o.push(u.Selector), o.push(u.Selector + " *"))
        }
        var c = o.join(", ");
        _r(c) ? this._ignoreRageClickSelectors = [c] : this._ignoreRageClickSelectors = o
      }
      return e.prototype._isIgnored = function (e) {
        var t = this._isIgnoredCache.get(e);
        if (void 0 !== t) return t;
        for (var n = 0, r = this._ignoreRageClickSelectors; n < r.length; n++) {
          var i = r[n];
          if (a.elMatches(e, i)) return this._isIgnoredCache.set(e, !0), !0
        }
        return this._isIgnoredCache.set(e, !1), !1
      }, e.prototype.onEvent = function (e) {
        var t;
        if (function (e) {
            switch (e) {
              case P.VALUECHANGE:
              case P.SCROLL_LAYOUT:
              case P.SCROLL_LAYOUT_CURVE:
              case P.SCROLL_VISUAL_OFFSET:
              case P.SCROLL_VISUAL_OFFSET_CURVE:
              case P.MUT_INSERT:
              case P.MUT_REMOVE:
              case P.MUT_ATTR:
              case P.MUT_SHADOW:
              case P.MUT_TEXT:
              case P.NAVIGATE:
              case P.LOAD:
              case P.FOCUS:
              case P.BLUR:
              case P.SELECT:
              case P.FORM_SUBMIT:
              case P.PLAY:
              case P.PAUSE:
              case P.MODAL_OPEN:
              case P.MODAL_CLOSE:
                return !0;
            }
            return !1
          }(e.Kind) && 8 !== this._rageThreshold) return this._rageThreshold = 8, void(this._thresholdRaisedAt = this._msSinceDocumentStart());
        if (e.Kind === P.CLICK) {
          var n = this._msSinceDocumentStart(),
            r = null === (t = dn(e.Args[0])) || void 0 === t ? void 0 : t.node;
          if (r) {
            var i = 1 === r.nodeType ? r : r.parentElement;
            if (!this._isIgnored(i)) {
              var o = $t(r);
              if (!(o && ("textarea" === o || "select" === o || "input" === o && "submit" !== r.type))) {
                this._clickTimes.push(n);
                for (var s = n - 2e3;;) {
                  var a = this._clickTimes.first();
                  if (!(void 0 !== a && a < s)) break;
                  this._clickTimes.shift()
                }
                if (this._thresholdRaisedAt < n - 2e3 && (this._rageThreshold = 5), this._clickTimes.size() >= this._rageThreshold) {
                  var u = this._ctx.recording.getCurrentSessionURL,
                    c = {
                      eventStartTimeStamp: this._clickTimes.first(),
                      eventEndTimeStamp: n,
                      eventReplayUrlAtStart: u(),
                      eventReplayUrlAtCurrentTime: u(!0)
                    };
                  this.dispatchRageClickEvent(r, c), this._rageThreshold = 5, this._clickTimes = new Oi
                }
              }
            }
          }
        }
      }, e.prototype.dispatchRageClickEvent = function (e, t) {
        var n;
        try {
          n = new CustomEvent("fullstory/rageclick", {
            detail: t,
            bubbles: !0,
            cancelable: !0
          })
        } catch (e) {
          (n = document.createEvent("customevent")).initCustomEvent("fullstory/rageclick", !0, !0, t)
        }
        a.setWindowTimeout(window, Ye.wrap(function () {
          e.dispatchEvent(n)
        }), 0)
      }, e
    }(),
    Pi = function () {
      function e(e, t, n, r) {
        void 0 === n && (n = function () {
          return []
        }), void 0 === r && (r = mn), this._ctx = e, this._transport = t, this._gatherExternalEvents = n, this._tickerFactory = r, this._recordingDisabled = !1, this._activeSimultaneousEventsTransactions = 0, this._lastWhen = -1, this._gotUnload = !1, this._eventQueue = [], this._sampleCurvesTicker = new this._tickerFactory(ue.CurveSamplingInterval), this._processMutationsTicker = new this._tickerFactory(ue.MutationProcessingInterval)
      }
      return e.prototype.startPipeline = function (e) {
        var t, n;
        return Object(r.__awaiter)(this, void 0, xt, function () {
          var i, o = this;
          return Object(r.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return this._recordingDisabled || this._pipelineStarted ? [2] : (this._pipelineStarted = !0, this._frameId = null !== (t = e.frameId) && void 0 !== t ? t : 0, this._parentIds = null !== (n = e.parentIds) && void 0 !== n ? n : [], i = !0, [4, qt()]);
              case 1:
                return r.sent(), this.processEvents(), [4, qt()];
              case 2:
                return r.sent(), this._processMutationsTicker.start(function () {
                  o.processEvents()
                }), this._sampleCurvesTicker.start(function () {
                  o.processEvents(i)
                }), this._transport.startPipeline(e), [2];
            }
          })
        })
      }, e.prototype.enableEasyBake = function () {
        this._easyBake = new xi(this._ctx)
      }, e.prototype.enqueueSimultaneousEventsIn = function (e) {
        if (0 === this._activeSimultaneousEventsTransactions) {
          var t = this._ctx.time.now();
          this._lastWhen = t > this._lastWhen ? t : this._lastWhen
        }
        try {
          return this._activeSimultaneousEventsTransactions++, e(this._lastWhen)
        } finally {
          this._activeSimultaneousEventsTransactions--, this._activeSimultaneousEventsTransactions < 0 && (this._activeSimultaneousEventsTransactions = 0)
        }
      }, e.prototype.enqueue = function (e) {
        var t = this._activeSimultaneousEventsTransactions > 0 ? this._lastWhen : this._ctx.time.now();
        this.enqueueAt(t, e), gn.checkForBrokenSchedulers()
      }, e.prototype.enqueueAt = function (e, t) {
        var n;
        if (!this._recordingDisabled) {
          e < this._lastWhen && (e = this._lastWhen), this._lastWhen = e;
          var r = t;
          r.When = e, this._eventQueue.push(r);
          try {
            null === (n = this._easyBake) || void 0 === n || n.onEvent(r)
          } catch (e) {
            Ye.sendToBugsnag(e, "error")
          }
        }
      }, e.prototype.enqueueFirst = function (e) {
        if (this._eventQueue.length > 0) {
          var t = e;
          t.When = this._eventQueue[0].When, this._eventQueue.unshift(t)
        } else this.enqueue(e)
      }, e.prototype.addUnload = function (e) {
        this._gotUnload || (this._gotUnload = !0, this.enqueue({
          Kind: P.UNLOAD,
          Args: [e]
        }), this.singSwanSong())
      }, e.prototype.shutdown = function (e) {
        this._flush(), this.addUnload(e), this._flush(), this._recordingDisabled = !0, this.stopPipeline()
      }, e.prototype._flush = function () {
        this.processEvents(), this._transport.flush()
      }, e.prototype.singSwanSong = function () {
        this._recordingDisabled || (this.processEvents(), this._transport.singSwanSong())
      }, e.prototype.rebaseIframe = function (e, t) {
        for (var n = Math.max(0, t), r = this._ctx.time.startTime(), i = function (t) {
            var i = r + t - e;
            return i >= n ? i : n
          }, o = 0, s = this._eventQueue; o < s.length; o++) {
          var a = s[o];
          a.When = i(a.When)
        } - 1 === this._lastWhen ? this._lastWhen = n : this._lastWhen = i(this._lastWhen)
      }, e.prototype.processEvents = function (e) {
        if (this._pipelineStarted) {
          var t = this._eventQueue;
          this._eventQueue = [];
          var n = function (e) {
            if (0 == e.length) return e;
            for (var t, n = [], r = new Ci(n, [0, 1]), i = {}, o = {}, s = {}, a = 0, u = e; a < u.length; a++) {
              var c = u[a];
              switch (c.Kind) {
                case P.MOUSEMOVE:
                  r.add(c);
                  break;
                case P.TOUCHMOVE:
                  (l = c.Args[0]) in i || (i[l] = new Ci(n, [1, 2])), i[l].add(c);
                  break;
                case P.SCROLL_LAYOUT:
                  (l = c.Args[0]) in o || (o[l] = new Ci(n, [1, 2])), o[l].add(c);
                  break;
                case P.SCROLL_VISUAL_OFFSET:
                  (l = c.Args[0]) in s || (s[l] = new Ci(n, [1, 2])), s[l].add(c);
                  break;
                case P.RESIZE_VISUAL:
                  t || (t = new Ci(n, [0, 1])), t.add(c);
                  break;
                default:
                  n.push(c);
              }
            }
            if (r.finish(P.MOUSEMOVE_CURVE)) {
              var h = r.evts();
              if (h.length > 0) {
                var d = h[h.length - 1].Args[2];
                if (d) h[0].Args[9] = d
              }
            }
            for (var l in o) {
              o[p = parseInt(l)].finish(P.SCROLL_LAYOUT_CURVE, [p])
            }
            for (var l in s) {
              s[p = parseInt(l)].finish(P.SCROLL_VISUAL_OFFSET_CURVE, [p])
            }
            for (var l in i) {
              var p;
              i[p = parseInt(l)].finish(P.TOUCHMOVE_CURVE, [p])
            }
            return t && t.finish(P.RESIZE_VISUAL_CURVE), n
          }(t);
          e || (n = n.concat(this._gatherExternalEvents(0 != n.length))), this.ensureFrameIds(n), 0 != n.length && this._transport.enqueueEvents(this._ctx.recording.pageSignature(), n)
        }
      }, e.prototype.ensureFrameIds = function (e) {
        if (this._frameId)
          for (var t = this._parentIds, n = t && t.length > 0, r = 0; r < e.length; ++r) {
            var i = e[r];
            i.FId || (i.FId = this._frameId), n && !i.PIds && (i.PIds = t)
          }
      }, e.prototype.stopPipeline = function () {
        this._pipelineStarted && (this._sampleCurvesTicker.stop(), this._processMutationsTicker.stop(), this._eventQueue = [], this._transport.stopPipeline())
      }, e
    }(),
    Li = function () {
      function e(e) {
        void 0 === e && (e = 4), this.hashCount = e, this.idx = 0, this.hashMask = e - 1, this.reset()
      }
      return e.prototype.reset = function () {
        this.idx = 0, this.hash = [];
        for (var e = 0; e < this.hashCount; ++e) this.hash.push(2166136261)
      }, e.prototype.write = function (e) {
        for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++) this.hash[n] = this.hash[n] ^ e[r], this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24), n = n + 1 & t;
        this.idx = n
      }, e.prototype.writeAscii = function (e) {
        for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++) this.hash[n] = this.hash[n] ^ e.charCodeAt(r), this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24), n = n + 1 & t;
        this.idx = n
      }, e.prototype.sum = function () {
        var e, t = this.sumAsHex();
        return e = t.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").map(Number), qi(String.fromCharCode.apply(window, e))
      }, e.prototype.sumAsHex = function () {
        for (var e = "", t = 0; t < this.hashCount; ++t) e += ("00000000" + (this.hash[t] >>> 0).toString(16)).slice(-8);
        return e
      }, e
    }();

  function Mi(e) {
    var t = new Li(1);
    return t.writeAscii(e), t.sumAsHex()
  }

  function Fi(e) {
    var t = new Uint8Array(e);
    return qi(String.fromCharCode.apply(null, t))
  }

  function qi(e) {
    var t;
    return (null !== (t = window.btoa) && void 0 !== t ? t : Ui)(e).replace(/\+/g, "-").replace(/\//g, "_")
  }

  function Ui(e) {
    for (var t = String(e), n = [], r = 0, i = 0, o = 0, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; t.charAt(0 | o) || (s = "=", o % 1); n.push(s.charAt(63 & r >> 8 - o % 1 * 8))) {
      if ((i = t.charCodeAt(o += 3 / 4)) > 255) throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      r = r << 8 | i
    }
    return n.join("")
  }

  function Ni(e, t, n, i) {
    return void 0 === i && (i = new Li), Object(r.__awaiter)(this, void 0, xt, function () {
      var o, s, a, u;
      return Object(r.__generator)(this, function (r) {
        switch (r.label) {
          case 0:
            o = e.now(), s = n.byteLength, a = 0, r.label = 1;
          case 1:
            return a < s ? e.now() - o > 25 ? [4, t(100)] : [3, 3] : [3, 5];
          case 2:
            r.sent(), o = e.now(), r.label = 3;
          case 3:
            u = new Uint8Array(n, a, Math.min(s - a, 1e4)), i.write(u), r.label = 4;
          case 4:
            return a += 1e4, [3, 1];
          case 5:
            return [2, {
              hash: i.sum(),
              hasher: i
            }];
        }
      })
    })
  }
  var ji = function () {
    function e(e, t, n, r, i) {
      void 0 === r && (r = window.FormData), void 0 === i && (i = yn), this.ctx = e, this.queue = t, this.protocol = n, this.FormDataCtr = r, this.Timeout = i, this.started = {}, this.byUrl = {}, this.batchReady = !1, this.existsBatch = [], this._sentToBugsnag = !1
    }
    return e.prototype.init = function () {
      this.FormDataCtr && this.main()["catch"](function (e) {
        Ye.sendToBugsnag(e, "error")
      })
    }, e.prototype.main = function () {
      return Object(r.__awaiter)(this, void 0, xt, function () {
        var e, t, n, i, o, a, u, c, h, d, l, p, f, _, v, g, m, y, w, S, b, E, T, k, I, C;
        return Object(r.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              e = this.ctx.options.orgId, r.label = 1;
            case 1:
              return [4, this.getBatch()];
            case 2:
              for (t = r.sent(), n = {
                  fsnv: [],
                  sha1: []
                }, i = 0, o = t; i < o.length; i++) a = o[i], u = a.hash, v = a.hashAlgorithm, n[v].push(u);
              for (c = {}, h = 0, d = t; h < d.length; h++) l = d[h], c[l.hash] = l;
              n.fsnv.sort(), n.sha1.sort(), p = void 0, r.label = 3;
            case 3:
              return r.trys.push([3, 5, , 6]), [4, this.protocol.queryResources({
                OrgId: e,
                HashesByAlgorithm: n
              })];
            case 4:
              return p = r.sent(), [3, 6];
            case 5:
              return s("/rec/queryResources failed with status " + r.sent()), [3, 1];
            case 6:
              for (f = 0, _ = p; f < _.length; f++)
                if ((y = _[f]).Found && y.CanonicalHash) {
                  if (!(w = c[y.QueryHash])) {
                    this.sendOnceToBugsnag("No resource found for hash");
                    continue
                  }
                  if (w.blob = w.stringData = null, "fsnv" !== (v = y.CanonicalHash.Algorithm)) {
                    this.sendOnceToBugsnag("Unrecognized canonical hash type", {
                      hashAlgorithm: v
                    });
                    continue
                  }
                  this.queue.enqueue({
                    Kind: P.SYS_RESOURCEHASH,
                    Args: ["url", w.url, y.CanonicalHash.Hash]
                  })
                } else;
              g = 0, m = p, r.label = 7;
            case 7:
              if (!(g < m.length)) return [3, 12];
              if ((y = m[g]).Found && y.CanonicalHash) return [3, 11];
              if (null == (w = c[y.QueryHash])) return this.sendOnceToBugsnag("Server told us to upload a hash we don't have"), [3, 11];
              if (S = w.url, b = w.contentType, !(E = w.blob || w.stringData)) return this.sendOnceToBugsnag("Missing resource contents"), [3, 11];
              if (T = w.blob || new Blob([E], {
                  type: b
                }), null == E) return this.sendOnceToBugsnag("Tried to re-upload a resource"), [3, 11];
              if ((k = new this.FormDataCtr).append("orgId", e), k.append("baseUrl", S), "fsnv" === y.QueryAlgorithm) k.append("fsnvHash", y.QueryHash);
              else {
                if ("sha1" !== y.QueryAlgorithm) return this.sendOnceToBugsnag("Unrecognized hash type from resource query", {
                  hashAlgorithm: y.QueryAlgorithm
                }), [3, 11];
                k.append("sha1Hash", y.QueryHash)
              }
              k.append("contents", T, "blob"), w.blob = w.stringData = null, r.label = 8;
            case 8:
              return r.trys.push([8, 10, , 11]), [4, this.protocol.uploadResource(k)];
            case 9:
              return I = r.sent(), "fsnv" != (C = JSON.parse(I)).Algorithm && this.sendOnceToBugsnag("Unexpected hash type from resource upload", {
                hashAlgorithm: C.Algorithm
              }), this.queue.enqueue({
                Kind: P.SYS_RESOURCEHASH,
                Args: ["url", S, C.Hash]
              }), [3, 11];
            case 10:
              return r.sent(), s("Server error uploading resource"), [3, 11];
            case 11:
              return g++, [3, 7];
            case 12:
              return [3, 1];
            case 13:
              return [2];
          }
        })
      })
    }, e.prototype.getBatch = function () {
      var e = this,
        t = Pt(),
        n = t.resolve,
        r = t.promise,
        i = function () {
          e.popBatch = null, e.batchReady = !1;
          var t = e.existsBatch;
          e.existsBatch = [], n(t)
        };
      return this.batchReady ? i() : this.popBatch = i, r
    }, e.prototype.uploadIfNeeded = function (e, t) {
      return Object(r.__awaiter)(this, void 0, xt, function () {
        var n, i, o, s, a = this;
        return Object(r.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              return this.FormDataCtr ? (n = Fn(qn(e), t), i = n.href, this.started[i] ? [2] : function (e, t) {
                switch (t.protocol) {
                  case "blob:":
                    return !0;
                  case "http:":
                  case "https:":
                    switch (t.hostname) {
                      case "localhost":
                      case "127.0.0.1":
                      case "[::1]":
                        return e.location.protocol === t.protocol && e.location.host === t.host;
                      case "::1":
                        var n = t.port ? "[::1]:" + t.port : "[::1]";
                        return e.location.protocol === t.protocol && e.location.host === n;
                      default:
                        return !1;
                    }
                    default:
                      return !1;
                }
              }(e, n) ? (this.started[i] = !0, [4, this.processResource(i)]) : [2]) : [2];
            case 1:
              return (o = r.sent()) ? (s = 0 == this.existsBatch.length, this.existsBatch.push(o), s && new this.Timeout(function () {
                a.batchReady = !0, a.popBatch && a.popBatch()
              }, 50).start(), [2]) : [2];
          }
        })
      })
    }, e.prototype.processResource = function (e) {
      return Object(r.__awaiter)(this, void 0, xt, function () {
        var t, n, i, o, s;
        return Object(r.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              return this.byUrl[e] ? [2, this.byUrl[e]] : [4, Wi(e)];
            case 1:
              return (t = r.sent()) ? [4, Bi(this.ctx, t.buffer)] : [2, null];
            case 2:
              return n = r.sent(), i = n.hash, o = n.algorithm, s = {
                hash: i,
                hashAlgorithm: o,
                url: e,
                blob: t.blob,
                contentType: t.contentType
              }, this.byUrl[s.url] = s, [2, s];
          }
        })
      })
    }, e.prototype.sendOnceToBugsnag = function (e, t) {
      this._sentToBugsnag || (this._sentToBugsnag = !0, s(e), Ye.sendToBugsnag(e, "error", t))
    }, e
  }();

  function Wi(e) {
    var t = Pt(),
      n = t.resolve,
      r = t.promise,
      i = new XMLHttpRequest;
    return "string" != typeof i.responseType ? (n(null), r) : (i.open("GET", e, !0), i.responseType = "blob", i.onerror = function () {
      n(null)
    }, i.onload = function () {
      if (200 != i.status) return s("Error loading blob resource " + Vn(e, {
        source: "log",
        type: "debug"
      })), void n(null);
      var t = i.response;
      if ((t.size || t.length) > 6e6) {
        var r = Vn(e, {
          source: "log",
          type: "bugsnag"
        });
        return Ye.sendToBugsnag("Size of blob resource exceeds limit", "warning", {
          url: r,
          MaxResourceSizeBytes: 6e6
        }), void n(null)
      }(function (e) {
        var t = Pt(),
          n = t.resolve,
          r = t.promise,
          i = new FileReader;
        return i.readAsArrayBuffer(e), i.onload = function () {
          n(i.result)
        }, i.onerror = function (e) {
          Ye.sendToBugsnag(e, "error"), n(null)
        }, r
      })(t).then(function (e) {
        n(e ? {
          buffer: e,
          blob: t,
          contentType: t.type
        } : null)
      })
    }, i.send(), r)
  }

  function Bi(e, t) {
    var n, i;
    return Object(r.__awaiter)(this, void 0, xt, function () {
      var o;
      return Object(r.__generator)(this, function (r) {
        switch (r.label) {
          case 0:
            return o = e.window, (null === (i = null === (n = o.crypto) || void 0 === n ? void 0 : n.subtle) || void 0 === i ? void 0 : i.digest) ? [4, o.crypto.subtle.digest({
              name: "sha-1"
            }, t)] : [3, 2];
          case 1:
            return [2, {
              hash: Fi(r.sent()),
              algorithm: "sha1"
            }];
          case 2:
            return [4, Ni(e.time, Lt, t)];
          case 3:
            return [2, {
              hash: r.sent().hash,
              algorithm: "fsnv"
            }];
        }
      })
    })
  }
  var Di = function () {
      function e(e) {
        this._byteCount = 0, this._scheme = e.options.scheme, this._recHost = e.options.recHost, this._ctx = e
      }
      return e.prototype.page = function (e, t, n) {
        this.post("/rec/page", qe(e), function (e) {
          try {
            t(je(e))
          } catch (e) {
            n(0)
          }
        }, function (e, t) {
          if (t) try {
            return n(0, je(t))
          } catch (e) {}
          n(0)
        })
      }, e.prototype.bundle = function (e) {
        var t = qe(e.bundle);
        this._byteCount += t.length, s("total bytes written: " + this._byteCount);
        var n = Vi(e.bundle.Seq, e);
        return this.post(n, t, function (t) {
          try {
            e.win(je(t))
          } catch (n) {
            Ye.sendToBugsnag("Failed to JSON parse /rec/bundle response", "error", {
              rsp: t,
              error: n.toString()
            }), e.lose(0)
          }
        }, e.lose), this._byteCount
      }, e.prototype.bundleBeacon = function (e) {
        var t;
        return Qi(this._scheme, Ki(null === (t = this._ctx.recording.pageResponse()) || void 0 === t ? void 0 : t.GCLBSubdomain, this._recHost), e)
      }, e.prototype.exponentialBackoffMs = function (e, t) {
        var n = a.mathMin(ue.BackoffMax, 5e3 * a.mathPow(2, e));
        return t ? n + .25 * a.mathRandom() * n : n
      }, e.prototype.post = function (e, t, n, r) {
        var i;
        zi(this._scheme, Ki(null === (i = this._ctx.recording.pageResponse()) || void 0 === i ? void 0 : i.GCLBSubdomain, this._recHost), e, t, n, r)
      }, e
    }(),
    Hi = function () {
      function e(e) {
        this._scheme = e.options.scheme, this._recHost = e.options.recHost, this._ctx = e
      }
      return e.prototype.uploadResource = function (e) {
        var t = this;
        return new xt(function (n, r) {
          var i;
          zi(t._scheme, Ki(null === (i = t._ctx.recording.pageResponse()) || void 0 === i ? void 0 : i.GCLBSubdomain, t._recHost), "/rec/uploadResource", e, n, r)
        })
      }, e.prototype.queryResources = function (e) {
        return Object(r.__awaiter)(this, void 0, xt, function () {
          var t, n, i = this;
          return Object(r.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return t = JSON.stringify(e), [4, new xt(function (e, n) {
                  var r;
                  zi(i._scheme, Ki(null === (r = i._ctx.recording.pageResponse()) || void 0 === r ? void 0 : r.GCLBSubdomain, i._recHost), "/rec/queryResources", t, e, n)
                })];
              case 1:
                return n = r.sent(), [2, JSON.parse(n)];
            }
          })
        })
      }, e
    }();

  function Vi(e, t) {
    var n = "/rec/bundle?OrgId=" + t.orgId + "&UserId=" + t.userId + "&SessionId=" + t.sessionId + "&PageId=" + t.pageId + "&Seq=" + e;
    return null != t.serverPageStart && (n += "&PageStart=" + t.serverPageStart), null != t.serverBundleTime && (n += "&PrevBundleTime=" + t.serverBundleTime), null != t.lastUserActivity && (n += "&LastActivity=" + t.lastUserActivity), t.isNewSession && (n += "&IsNewSession=true"), null != t.deltaT && (n += "&DeltaT=" + t.deltaT), n
  }

  function Ki(e, t) {
    return e && (n = t, q.test(n)) ? t.replace(/^rs\./, e + ".") : t;
    var n
  }

  function zi(e, t, n, r, i, o) {
    var s = "//" + t + n,
      a = !1,
      u = new XMLHttpRequest;
    if ("withCredentials" in u) u.onreadystatechange = function () {
      if (4 == u.readyState) {
        if (a) return;
        a = !0;
        try {
          200 == u.status ? i(u.responseText) : o && o(u.status, u.responseText)
        } catch (e) {
          Ye.sendToBugsnag(e, "error")
        }
      }
    }, u.open("POST", e + s, !0), u.withCredentials = !0, "function" != typeof r.append && u.setRequestHeader("Content-Type", "text/plain"), u.send(r);
    else {
      var c = new XDomainRequest;
      c.onload = function () {
        i(c.responseText)
      }, c.onerror = function () {
        o && o("Not Found" == c.responseText ? 404 : 500, c.responseText)
      }, c.onprogress = function () {}, c.open("POST", s), c.send(r)
    }
  }

  function Qi(e, t, n) {
    if ("function" == typeof navigator.sendBeacon) {
      var r = e + "//" + t + Vi(n.bundle.Seq, n) + "&SkipResponseBody=true",
        i = qe(n.bundle);
      try {
        return navigator.sendBeacon(r, i)
      } catch (e) {
        Ye.sendToBugsnag(e, "error", {
          url: r,
          data: i
        })
      }
    }
    return !1
  }
  var Yi = function () {
      function e(e, t, n) {
        void 0 === n && (n = new Gi), this._ctx = e, this._q = t, this._matcher = n
      }
      return e.prototype.initialize = function (e) {
        var t;
        if (e) {
          this._setUrlKeeps(e);
          var n = null === (t = this._ctx.window.location) || void 0 === t ? void 0 : t.href;
          this.onNavigate(n)
        }
      }, e.prototype.onNavigate = function (e) {
        return !!this._matcher.matches(e) && (this._q.enqueue({
          Kind: P.KEEP_URL,
          Args: [this._scrubUrl(e)]
        }), !0)
      }, e.prototype.onClick = function (e) {
        var t;
        return !!(null === (t = null == e ? void 0 : e.watchKind) || void 0 === t ? void 0 : t.has(32)) && (this._q.enqueue({
          Kind: P.KEEP_ELEMENT,
          Args: [e.id]
        }), !0)
      }, e.prototype.urlMatches = function (e) {
        return this._matcher.matches(e)
      }, e.prototype._setUrlKeeps = function (e) {
        this._matcher.setRules(e)
      }, e.prototype._scrubUrl = function (e) {
        return Vn(e, {
          source: "page",
          type: "base"
        })
      }, e
    }(),
    Gi = function () {
      function e() {
        this._regexes = null
      }
      return e.prototype.setRules = function (e) {
        var t = e.map(function (e) {
          return e.Regex
        }).filter(this._isValidRegex);
        t.length > 0 && (this._regexes = this._joinRegexes(t))
      }, e.prototype.matches = function (e) {
        return !!this._regexes && this._regexes.test(e)
      }, e.prototype._isValidRegex = function (e) {
        try {
          return new RegExp(e), !0
        } catch (t) {
          return Ye.sendToBugsnag("Browser rejected UrlKeep.Regex", "error", {
            expr: e,
            error: t.toString()
          }), !1
        }
      }, e.prototype._joinRegexes = function (e) {
        try {
          return new RegExp("(" + e.join(")|(") + ")", "i")
        } catch (t) {
          return Ye.sendToBugsnag("Browser rejected joining UrlKeep.Regexs", "error", {
            exprs: e,
            error: t.toString()
          }), null
        }
      }, e
    }();
  var Ji = new RegExp(/^\s+$/);

  function Xi(e) {
    var t = ln(e) + " ";
    return e.id && (t += "#" + e.id), t += "[src=" + Vn(e.src, {
      source: "log",
      type: "debug"
    }) + "]"
  }
  var Zi, $i = function (e) {
      var t = e.transport,
        n = e.frame,
        r = e.orgId,
        i = e.scheme,
        a = e.script,
        u = e.recHost,
        c = e.appHost,
        h = e.namespace,
        d = Xi(n);
      s("Injecting into Frame " + d);
      try {
        if (function (e) {
            return e.id == e.name && eo.test(e.id)
          }(n)) return void s("Blocklisted iframe: " + d);
        if (function (e) {
            if (!e.contentDocument || !e.contentWindow || !e.contentWindow.location) return !0;
            return function (e) {
              return !!e.src && "about:blank" != e.src && e.src.indexOf("javascript:") < 0
            }(e) && e.src != e.contentWindow.location.href && "loading" == e.contentDocument.readyState
          }(n)) return void s("Frame not yet loaded: " + d);
        var l = n.contentWindow,
          p = n.contentDocument;
        if (!l || !p) return void s("Missing contentWindow or contentDocument: " + d);
        if (!p.head) return void s("Missing contentDocument.head: " + d);
        if (!p.body || 0 === p.body.childNodes.length) return;
        for (var f = !1, _ = p.body.childNodes, v = 0; v < _.length; v++) {
          switch (_[v].nodeType) {
            case Node.ELEMENT_NODE:
              if ("SCRIPT" === _[v].tagName) continue;
              break;
            case Node.TEXT_NODE:
              var g = _[v].textContent;
              if (null === g || Ji.test(g)) continue;
              break;
            case Node.COMMENT_NODE:
              continue;
          }
          f = !0;
          break
        }
        if (!f) return;
        if (R(l)) return void s("FS already defined in Frame contentWindow: " + d + ". Ignoring.");
        var m = l;
        m._fs_org = r, m._fs_script = a, m._fs_rec_host = u, m._fs_app_host = c, m._fs_debug = o(), m._fs_run_in_iframe = !0, t && (m._fs_transport = t),
          function (e, t, n, r, i, o, s) {
            if (n in e) e.console && e.console.log && e.console.log("FullStory namespace conflict. Please set window[\"_fs_namespace\"].");
            else {
              var a = e[n] = function (e, t, n) {
                a.q ? a.q.push([e, t, n]) : a._api(e, t, n)
              };
              a.q = [];
              var u = t.createElement(r);
              u.async = 1, u.src = i + "//" + o, u.crossOrigin = "anonymous", "testdrive" == s && (u.src += "?allowMoo=true");
              var c = t.getElementsByTagName(r);
              c && c.length > 0 ? c[0].parentNode.insertBefore(u, c[0]) : t.head.appendChild(u), a.event = function (e, t, n) {
                a("event", {
                  n: e,
                  p: t
                }, n)
              }, a.log = function (e, t) {
                a("log", [e, t])
              }
            }
          }(m, p, h, "script", i, a, r)
      } catch (e) {
        s("iFrame no injecty. Probably not same origin.")
      }
    },
    eo = /^fb\d{18}$/;
  ! function (e) {
    e[e.NoInfoYet = 1] = "NoInfoYet", e[e.Enabled = 2] = "Enabled", e[e.Disabled = 3] = "Disabled"
  }(Zi || (Zi = {}));
  var to = function () {
    function e(e, t, n, r) {
      var i = this;
      this._ctx = e, this._transport = n, this._injector = r, this._orgSettings = ue.DefaultOrgSettings, this._bundleUploadInterval = ue.DefaultBundleUploadInterval, this._iFrames = [], this._pendingChildFrameIdInits = [], this._listeners = new $e, this._getCurrentSessionEnabled = Zi.NoInfoYet, this._resourceUploadingEnabled = !1;
      this._pendingIframes = {}, this._queue = new Pi(e, this._transport, function (e) {
        return i._eventWatcher.bundleEvents(e)
      }, t);
      var o = new ji(e, this._queue, new Hi(e));
      this._watcher = new br, this._keep = new Yi(e, this._queue), this._eventWatcher = new fi(e, this._queue, this._keep, this._watcher, this._listeners, function (e) {
        return i.onFrameCreated(e)
      }, function (e) {
        return i.beforeFrameRemoved(e)
      }, o), this._consoleWatcher = new Ei(e, this._queue, this._listeners), this._scheme = e.options.scheme, this._script = e.options.script, this._recHost = e.options.recHost, this._appHost = e.options.appHost, this._orgId = e.options.orgId, this._wnd = e.window
    }
    return e.prototype.getPageResponse = function () {
      return this._pageRsp
    }, e.prototype.bundleUploadInterval = function () {
      return this._bundleUploadInterval
    }, e.prototype.orgSettings = function () {
      return this._orgSettings
    }, e.prototype.start = function (e, t) {
      var n = this;
      this._onFullyStarted = t, "onpagehide" in this._wnd ? this._listeners.add(this._wnd, "pagehide", !1, function (e) {
        n.onUnload()
      }) : this._listeners.add(this._wnd, "unload", !1, function (e) {
        n.onUnload()
      }), this._listeners.add(this._wnd, "message", !1, function (e) {
        if ("string" == typeof e.data) {
          var t = e.source;
          n.postMessageReceived(t, ro(e.data))
        }
      });
      var r = this._wnd.Document ? this._wnd.Document.prototype : this._wnd.document;
      this._docCloseHook = De(r, "close"), this._docCloseHook && this._docCloseHook.afterAsync(function () {
        n._listeners.refresh()
      })
    }, e.prototype.queue = function () {
      return this._queue
    }, e.prototype.eventWatcher = function () {
      return this._eventWatcher
    }, e.prototype.console = function () {
      return this._consoleWatcher
    }, e.prototype.onDomLoad = function () {
      this._eventWatcher.onDomLoad()
    }, e.prototype.onLoad = function () {
      this._eventWatcher.onLoad()
    }, e.prototype.shutdown = function (e) {
      this._eventWatcher.shutdown(e), this._consoleWatcher.disable(), this._listeners && this._listeners.clear(), this._docCloseHook && this._docCloseHook.disable(), this.tellAllFramesTo(["ShutdownFrame"])
    }, e.prototype.tellAllFramesTo = function (e) {
      for (var t = 0; t < this._iFrames.length; t++) {
        var n = this._iFrames[t];
        n.contentWindow && no(n.contentWindow, e)
      }
    }, e.prototype.getCurrentSessionURL = function (e) {
      var t = this._getCurrentSessionEnabled;
      if (t == Zi.NoInfoYet) return null;
      if (t == Zi.Disabled) return this._scheme + "//" + this._appHost + "/opt/upgrade";
      var n = this.getCurrentSession();
      return n ? (e && (n += ":" + this._ctx.time.wallTime()), this._scheme + "//" + this._appHost + "/ui/" + this._ctx.options.orgId + "/session/" + encodeURIComponent(n)) : null
    }, e.prototype.getCurrentSession = function () {
      var e = this._getCurrentSessionEnabled;
      return e == Zi.NoInfoYet || e == Zi.Disabled ? null : this._userId ? this._userId + ":" + this._sessionId : null
    }, e.prototype.setConsent = function (e) {
      var t = this,
        n = function () {
          t._watcher.setConsent(e), t._queue.processEvents()
        },
        r = function () {
          t._queue.enqueue({
            Kind: P.SYS_SETCONSENT,
            Args: [e, G.Document]
          })
        };
      switch (e) {
        case Y.GrantConsent:
          r(), n();
          break;
        case Y.RevokeConsent:
          n(), r();
      }
      this.tellAllFramesTo(["SetConsent", e])
    }, e.prototype.pageSignature = function () {
      return this._userId + ":" + this._sessionId + ":" + this._pageId
    }, e.prototype.fireFsReady = function (e) {
      void 0 === e && (e = !1);
      var t = U(this._wnd, "_fs_ready", "function");
      if (t) try {
        e ? t(!0) : t()
      } catch (e) {
        s("exception in _fs_ready(): " + e)
      }
    }, e.prototype.onUnload = function () {
      this._queue.addUnload(J.Unload), gn.stopAll()
    }, e.prototype.isValidResponse = function (e) {
      return !!e.OrgSettings
    }, e.prototype.handleResponse = function (e, t) {
      var n = e.Flags,
        r = n.AjaxFetch,
        i = n.AjaxWatcher,
        o = n.ClientSideRageClick,
        s = n.ConsoleWatcher,
        a = n.GetCurrentSession,
        u = n.ResourceUploading;
      this._pageRsp = e, this._userId = e.UserIntId, this._sessionId = e.SessionIntId, this._pageId = e.PageIntId, this._serverPageStart = e.PageStart, this._getCurrentSessionEnabled = a ? Zi.Enabled : Zi.Disabled, this._orgSettings = e.OrgSettings, $n({
        paths: this._orgSettings.UrlPathBlocklist,
        queries: this._orgSettings.UrlQueryStringBlocklist
      }), this._consoleWatcher.initializeMaxLogsPerPage(this._orgSettings.MaxConsoleLogPerPage), this._eventWatcher.ajaxWatcher().initialize({
        requests: this._orgSettings.HttpRequestHeadersAllowlist,
        responses: this._orgSettings.HttpResponseHeadersAllowlist,
        maxAjaxPayloadLength: this._orgSettings.MaxAjaxPayloadLength
      }), this._eventWatcher.perfWatcher().start({
        resourceUploader: this._eventWatcher.getResourceUploader(),
        recTimings: !!this._orgSettings.RecordPerformanceResourceTiming,
        recImgs: !!this._orgSettings.RecordPerformanceResourceImg
      }), this._watcher.initialize({
        blocks: e.ElementBlocks,
        keeps: e.ElementKeeps,
        watches: e.ElementWatches
      }), this._keep.initialize(e.UrlKeeps), this._watcher.initializeConsent(null != t ? t : !!e.Consented), "number" == typeof e.BundleUploadInterval && (this._bundleUploadInterval = e.BundleUploadInterval), u && this.enableResourceUploading(), i && this.enableAjaxWatcher(!!r), s && this.enableConsoleWatcher(), i && e.AjaxWatches && this._eventWatcher.ajaxWatcher().setWatches(e.AjaxWatches), o && this._queue.enableEasyBake(), this._eventWatcher.watchEvents()
    }, e.prototype.fullyStarted = function () {
      this._onFullyStarted()
    }, e.prototype.enableResourceUploading = function () {
      this._resourceUploadingEnabled = !0, this._eventWatcher.initResourceUploading()
    }, e.prototype.enableAjaxWatcher = function (e) {
      this.eventWatcher().ajaxWatcher().enable(e)
    }, e.prototype.enableConsoleWatcher = function () {
      this.console().enable()
    }, e.prototype.flushPendingChildFrameInits = function () {
      if (this._pendingChildFrameIdInits.length > 0) {
        for (var e = 0; e < this._pendingChildFrameIdInits.length; e++) this._pendingChildFrameIdInits[e]();
        this._pendingChildFrameIdInits = []
      }
    }, e.prototype.inject = function (e) {
      var t = this;
      this._ctx.measurer.requestMeasureTask(Mt.Essential, function () {
        o() && s("Injecting into a " + ("none" !== getComputedStyle(e, null).display ? "hidden" : "visible") + " iframe: " + Xi(e));
        var n = {
          send: function (n, r, i) {
            xt.resolve().then(Ye.wrap(function () {
              t.postMessageReceived(e.contentWindow, [n, a.jsonParse(r), i])
            }))
          }
        };
        t._injector({
          frame: e,
          transport: n,
          orgId: t._orgId,
          scheme: t._scheme,
          script: t._script,
          recHost: t._recHost,
          appHost: t._appHost,
          namespace: O(t._wnd)
        })
      })
    }, e.prototype.onFrameCreated = function (e) {
      var t = ln(e);
      if (t) {
        this._iFrames.push(e);
        var n = !1;
        if (e.contentWindow) try {
          n = !!R(e.contentWindow)
        } catch (e) {
          n = !0
        }
        var r = function (e) {
            var t = e.src,
              n = location.protocol + "//" + location.host;
            return !t || "about:blank" == t || Ce(t, "javascript:") || Ce(t, n)
          }(e),
          i = e.contentWindow && e.contentWindow.postMessage;
        r && !n || !i ? r ? this.initSameOriginIframe(e) : s("Frame Doesn't need injecting. Probably cross domain " + Xi(e)) : this.initCrossOriginIframe(e, t)
      } else s("fsid missing or invalid for iFrame " + Xi(e))
    }, e.prototype.initCrossOriginIframe = function (e, t) {
      var n = this;
      e.contentWindow && e.contentWindow.postMessage ? (s("Cross-origin iframe " + Xi(e)), no(e.contentWindow, ["GreetFrame", t]), o() && (this._pendingIframes[t] = !0, setTimeout(function () {
        n._pendingIframes[t] && s("iframe " + e.src + " is unresponsive")
      }, 5e3))) : s("No content window on init of cross-origin iframe " + Xi(e))
    }, e.prototype.initSameOriginIframe = function (e) {
      var t = this;
      s("Attempting to setup Frame " + Xi(e)), this.inject(e), e.addEventListener("load", Ye.wrap(function (n) {
        s("onload for frame " + Xi(e)), t.inject(e)
      }))
    }, e.prototype.beforeFrameRemoved = function (e) {
      for (var t = 0; t < this._iFrames.length; t++) {
        if (e == this._iFrames[t]) return void this._iFrames.splice(t, 1)
      }
    }, e.prototype.postMessageReceived = function (e, t) {
      if (!e || e.parent == this._wnd) switch (t[0]) {
        case "EvtBundle":
          var n = t[1],
            r = this.pageSignature(),
            i = t[2];
          if (r != i) return Ye.sendToBugsnag("Page signature mismatch", "warning", {
            pageSignature: r,
            messageSignature: i
          }), void(e && no(e, ["ShutdownFrame"]));
          n.length > 0 && this._transport.enqueueEvents(r, n);
          break;
        case "RequestFrameId":
          if (!e) return void s("No MessageEvent.source, iframe may have unloaded.");
          var o = this.iFrameWndToFsId(e);
          o ? (s("Responding to FID request for frame " + o), this._pendingIframes[o] = !1, this.sendFrameIdToInnerFrame(e, o)) : s("No FrameId found. Hoping to send one later.");
      }
    }, e.prototype.sendFrameIdToInnerFrame = function (e, t) {
      var n = this,
        r = function () {
          var r = [];
          0 != n._frameId && (r = n._parentIds ? n._parentIds.concat(n._frameId) : [n._frameId]);
          var i = n._ctx.time.startTime();
          no(e, ["SetFrameId", t, r, i, n._scheme, n._script, n._appHost, n._orgId, n._pageRsp, n._watcher.getConsent(), n._ctx.time.now()])
        };
      null == this._frameId ? this._pendingChildFrameIdInits.push(r) : r()
    }, e.prototype.iFrameWndToFsId = function (e) {
      for (var t = 0; t < this._iFrames.length; t++)
        if (this._iFrames[t].contentWindow == e) return ln(this._iFrames[t]);
      return s("Unable to locate frame for window"), NaN
    }, e.prototype.enqueueDocumentProperties = function (e) {
      var t = this;
      this._ctx.measurer.requestMeasureTask(Mt.Essential, function () {
        t._queue.enqueue({
          Kind: P.DOCUMENT_PROPERTIES,
          Args: [ln(e.scrollingElement), e.compatMode]
        })
      })
    }, e
  }();

  function no(e, t) {
    e && e.postMessage && e.postMessage(qe({
      __fs: t
    }), "*")
  }

  function ro(e) {
    try {
      var t = je(e);
      if ("__fs" in t) return t.__fs
    } catch (e) {}
    return []
  }

  function io(e) {
    return e >= 400 && 502 !== e || 202 == e || 206 == e
  }
  var oo = function () {
      function e(e, t, n, r) {
        void 0 === r && (r = yn), this._ctx = e, this._protocol = t, this._identity = n, this._timeoutFactory = r, this._recover()
      }
      return e.prototype.sing = function (e) {
        s("Saving " + e.bundles.length + " bundles in swan-song.");
        var t = qe({
          OrgId: this._identity.orgId(),
          UserId: this._identity.userId(),
          SessionId: this._identity.sessionId(),
          PageId: e.pageId,
          Bundles: e.bundles,
          PageStartTime: this._ctx.time.startTime(),
          LastBundleTime: e.lastBundleTime,
          ServerPageStart: e.serverPageStart,
          ServerBundleTime: e.serverBundleTime,
          IsNewSession: e.isNewSession
        });
        if (!(t.length > 2e6)) try {
          localStorage._fs_swan_song = t
        } catch (e) {}
      }, e.prototype._recover = function () {
        try {
          if ("_fs_swan_song" in localStorage) {
            var e = localStorage._fs_swan_song || localStorage.singSwanSong;
            delete localStorage._fs_swan_song, delete localStorage.singSwanSong;
            var t = je(e);
            if (!(t.Bundles && t.UserId && t.SessionId && t.PageId)) return void s("Malformed swan song found. Ignoring it.");
            t.OrgId || (t.OrgId = this._identity.orgId()), t.Bundles.length > 0 && (s("Sending " + t.Bundles.length + " bundles as prior page swan song"), this.sendSwanSongBundles(t))
          }
        } catch (e) {
          s("Error recovering swan-song: " + e)
        }
      }, e.prototype.sendSwanSongBundles = function (e, t) {
        var n = this;
        void 0 === t && (t = 0);
        var i = null;
        if (ke(e.Bundles) && 0 !== e.Bundles.length && void 0 !== e.Bundles[0]) {
          1 == e.Bundles.length && (i = this._ctx.time.wallTime() - (e.LastBundleTime || 0));
          this._protocol.bundle({
            bundle: e.Bundles[0],
            deltaT: i,
            orgId: e.OrgId,
            pageId: e.PageId,
            serverBundleTime: e.ServerBundleTime,
            serverPageStart: e.ServerPageStart,
            sessionId: e.SessionId,
            userId: e.UserId,
            isNewSession: e.IsNewSession,
            win: function (t) {
              s("Sent " + e.Bundles[0].Evts.length + " trailing events from last session as Seq " + e.Bundles[0].Seq), e.Bundles.shift(), e.Bundles.length > 0 ? n.sendSwanSongBundles(Object(r.__assign)(Object(r.__assign)({}, e), {
                ServerBundleTime: t.BundleTime
              })) : s("Done with prior page swan song")
            },
            lose: function (r) {
              io(r) ? s("Fatal error while sending events, giving up") : (s("Failed to send events from last session, will retry while on this page"), n._lastSwanSongRetryTimeout = new n._timeoutFactory(n.sendSwanSongBundles, n._protocol.exponentialBackoffMs(t, !0), n, e, t + 1).start())
            }
          })
        }
      }, e
    }(),
    so = function () {
      function e() {}
      return e.prototype.encode = function (e) {
        return e
      }, e
    }(),
    ao = function () {
      function e() {
        this.dict = {
          idx: -1,
          map: {}
        }, this.nodeCount = 1, this.startIdx = 0
      }
      return e.prototype.encode = function (t) {
        if (0 == t.length) return [];
        var n, r, i = t[0],
          o = Object.prototype.hasOwnProperty.call(this.dict.map, i) ? this.dict.map[i] : null,
          s = [],
          a = 1;

        function u() {
          o ? a > 1 ? s.push([o.idx, a]) : s.push(o.idx) : s.push(i)
        }
        for (n = 1; n < t.length; n++)
          if (r = t[n], o && Object.prototype.hasOwnProperty.call(o.map, r)) a++, i = r, o = o.map[r];
          else {
            u();
            var c = this.startIdx + n - a;
            null == o && this.nodeCount < e.MAX_NODES && (o = {
              idx: c,
              map: {}
            }, this.dict.map[i] = o, this.nodeCount++), o && this.nodeCount < e.MAX_NODES && (o.map[r] = {
              idx: c,
              map: {}
            }, this.nodeCount++), a = 1, i = r, o = Object.prototype.hasOwnProperty.call(this.dict.map, r) ? this.dict.map[r] : null
          } return u(), this.startIdx += t.length, s
      }, e.MAX_NODES = 1e4, e
    }(),
    uo = function () {
      function e(e, t, n, r, i) {
        var o = this;
        void 0 === t && (t = new Di(e)), void 0 === n && (n = !0), void 0 === r && (r = mn), void 0 === i && (i = yn), this._ctx = e, this._protocol = t, this._compress = n, this._tickerFactory = r, this._backoffRetries = 0, this._backoffTime = 0, this._bundleSeq = 1, this._lastPostTime = 0, this._compressors = {}, this._serverBundleTime = 0, this._isNewSession = !1, this._largePageSize = 16e6, this._outgoingEventQueue = [], this._bundleQueue = [], this._hibernating = !1, this._heartbeatInterval = 0, this._lastUserActivity = this._ctx.time.wallTime(), this._finished = !1, this._scheme = e.options.scheme, this._identity = e.recording.identity, this._lastBundleTime = e.time.wallTime(), this._swanSong = new oo(e, this._protocol, this._identity, i), this._heartbeatTimeout = new i(function () {
          o.onHeartbeat()
        }), this._hibernationTimeout = new i(function () {
          o.onHibernate()
        }, ue.PageInactivityTimeout)
      }
      return e.prototype.onShutdown = function (e) {
        this._onShutdown = e
      }, e.prototype.scheme = function () {
        return this._scheme
      }, e.prototype.enqueueEvents = function (e, t) {
        if (this.maybeHibernate(), this._hibernating) {
          if (this._finished) return;
          for (var n = 0, r = t; n < r.length; n++) {
            if (he((u = r[n]).Kind)) {
              this._ctx.recording.splitPage(J.Hibernation), this._finished = !0;
              break
            }
          }
        } else {
          for (var i = 0, o = t; i < o.length; i++) {
            if (he((u = o[i]).Kind)) {
              this._hibernationTimeout.start(), this._heartbeatInterval = ue.HeartbeatInitial, this._heartbeatTimeout.start(this._heartbeatInterval), this._lastUserActivity = this._ctx.time.wallTime();
              break
            }
          }
          for (var s = 0, a = t; s < a.length; s++) {
            var u = a[s];
            this._outgoingEventQueue.push(u)
          }
        }
      }, e.prototype.initUploadTicker = function () {
        this._uploadTicker = new this._tickerFactory(this._ctx.recording.bundleUploadInterval())
      }, e.prototype.startPipeline = function (e) {
        var t = this;
        this._pageId = e.pageId, this._serverPageStart = e.serverPageStart, this._isNewSession = e.isNewSession, this.enqueueAndSendBundle(), this._uploadTicker || this.initUploadTicker(), this._uploadTicker.start(function () {
          t.enqueueAndSendBundle()
        }), this._heartbeatInterval = ue.HeartbeatInitial, this._heartbeatTimeout.start(this._heartbeatInterval), this._hibernationTimeout.start()
      }, e.prototype.stopPipeline = function () {
        this._uploadTicker && this._uploadTicker.stop(), this._outgoingEventQueue = [], this._bundleQueue = [], this._compressors = {}, this._hibernationTimeout.stop(), this._heartbeatTimeout.stop()
      }, e.prototype.flush = function () {
        this.maybeSendNextBundle()
      }, e.prototype.singSwanSong = function () {
        if (!this._hibernating && (this._outgoingEventQueue.length > 0 && this.enqueueNextBundle(!0), this._bundleQueue.length > 0 || this._pendingBundle)) {
          var e = this._bundleQueue.concat();
          this._pendingBundle && e.unshift(this._pendingBundle), this._swanSong.sing({
            pageId: this._pageId,
            bundles: e,
            lastBundleTime: this._lastBundleTime,
            serverPageStart: this._serverPageStart,
            serverBundleTime: this._serverBundleTime,
            isNewSession: this._isNewSession
          })
        }
      }, e.prototype.maybeHibernate = function () {
        this._hibernating || this.calcLastUserActivityDuration() >= ue.PageInactivityTimeout + 5e3 && this.onHibernate()
      }, e.prototype.calcLastUserActivityDuration = function () {
        return a.mathFloor(this._ctx.time.wallTime() - this._lastUserActivity)
      }, e.prototype.onHeartbeat = function () {
        var e = this.calcLastUserActivityDuration();
        this._outgoingEventQueue.push({
          When: this._ctx.time.now(),
          Kind: P.HEARTBEAT,
          Args: [e]
        }), this._heartbeatInterval *= 2, this._heartbeatInterval > ue.HeartbeatMax && (this._heartbeatInterval = ue.HeartbeatMax), this._heartbeatTimeout.start(this._heartbeatInterval)
      }, e.prototype.onHibernate = function () {
        this._hibernating || (this.calcLastUserActivityDuration() <= 2 * ue.PageInactivityTimeout && (this._outgoingEventQueue.push({
          When: this._ctx.time.now(),
          Kind: P.UNLOAD,
          Args: [J.Hibernation]
        }), this.singSwanSong()), this.stopPipeline(), this._hibernating = !0)
      }, e.prototype.enqueueAndSendBundle = function () {
        this._pendingBundle ? this._pendingBundleFailed && this._sendPendingBundle() : 0 != this._outgoingEventQueue.length ? this.enqueueNextBundle() : this.maybeSendNextBundle()
      }, e.prototype.enqueueNextBundle = function (e) {
        void 0 === e && (e = !1);
        var t = this.compressBundle({
          When: this._outgoingEventQueue[0].When,
          Seq: this._bundleSeq++,
          Evts: this._outgoingEventQueue
        });
        this._outgoingEventQueue = [], this._bundleQueue.push(t), e ? this._protocol.bundleBeacon({
          bundle: t,
          deltaT: null,
          orgId: this._identity.orgId(),
          pageId: this._pageId,
          serverBundleTime: this._serverBundleTime,
          serverPageStart: this._serverPageStart,
          isNewSession: this._isNewSession,
          sessionId: this._identity.sessionId(),
          userId: this._identity.userId(),
          win: function () {},
          lose: function () {}
        }) : this.maybeSendNextBundle()
      }, e.prototype.maybeSendNextBundle = function () {
        this._pageId && this._serverPageStart && !this._pendingBundle && 0 != this._bundleQueue.length && (this._pendingBundle = this._bundleQueue.shift(), this._sendPendingBundle())
      }, e.prototype._sendPendingBundle = function () {
        var e = this,
          t = this._ctx.time.wallTime();
        if (!(t < this._backoffTime)) {
          var n = this._pendingBundle;
          n && (this._pendingBundleFailed = !1, this._lastPostTime = this._lastBundleTime = t, this.sendBundle(n, function (t) {
            s("Sent bundle " + n.Seq + " with " + n.Evts.length + " events"), e._serverBundleTime = t.BundleTime, e._pendingBundle = null, e._backoffTime = 0, e._backoffRetries = 0, e._ctx.time.wallTime() - e._lastPostTime > e._ctx.recording.bundleUploadInterval() && e.maybeSendNextBundle()
          }, function (t) {
            if (s("Failed to send events."), io(t)) return 206 == t ? Ye.sendToBugsnag("Failed to send bundle, probably because of its large size", "error") : t >= 500 && Ye.sendToBugsnag("Failed to send bundle, recording outage likely", "error"), void(e._onShutdown && e._onShutdown());
            e._pendingBundleFailed = !0, e._backoffTime = e._lastPostTime + e._protocol.exponentialBackoffMs(e._backoffRetries++, !1)
          }))
        }
      }, e.prototype.sendBundle = function (e, t, n) {
        var r = a.mathFloor(this._ctx.time.wallTime() - this._lastUserActivity),
          i = this._protocol.bundle({
            bundle: e,
            deltaT: null,
            lastUserActivity: r,
            orgId: this._identity.orgId(),
            pageId: this._pageId,
            serverBundleTime: this._serverBundleTime,
            serverPageStart: this._serverPageStart,
            isNewSession: this._isNewSession,
            sessionId: this._identity.sessionId(),
            userId: this._identity.userId(),
            win: t,
            lose: n
          });
        i > this._largePageSize && this._bundleSeq > 16 && (s("splitting large page: " + i), this._ctx.recording.splitPage(J.Size))
      }, e.prototype.compressBundle = function (e) {
        for (var t = [], n = 0, i = e.Evts; n < i.length; n++) {
          var o = i[n];
          switch (o.Kind) {
            case P.SET_FRAME_BASE:
              var s = co(o.PIds, o.FId);
              delete this._compressors[s];
              break;
            case P.MUT_INSERT:
              var a = m();
              o.Args[2] = this.encodeStream(o.PIds, o.FId, o.Args[2]), t.push(m() - a);
              break;
            case P.MUT_SHADOW:
              a = m();
              o.Args[1] = this.encodeStream(o.PIds, o.FId, o.Args[1]), t.push(m() - a);
          }
        }
        if (0 === t.length) return e;
        var u = e.Evts[e.Evts.length - 1],
          c = t[0],
          h = t.slice(1);
        return e.Evts.push(Object(r.__assign)(Object(r.__assign)({}, u), {
          Kind: P.TIMING,
          Args: [Object(r.__spreadArrays)([F.Internal, L.Serialization, M.LzEncoding, u.When, c], h.map(function (e) {
            return [M.LzEncoding, e]
          }))]
        })), e
      }, e.prototype.encodeStream = function (e, t, n) {
        void 0 === e && (e = []), void 0 === t && (t = 0);
        var r = co(e, t);
        return this._compressors[r] || (this._compressors[r] = this._compress ? new ao : new so), this._compressors[r].encode(n)
      }, e
    }();

  function co(e, t) {
    void 0 === e && (e = []), void 0 === t && (t = 0);
    for (var n = "", r = 0, i = e; r < i.length; r++) {
      n += "/" + i[r]
    }
    return n + "/" + t
  }
  var ho = function (e) {
      function t(t, n, r, i, o, s) {
        void 0 === r && (r = !0), void 0 === i && (i = new uo(t, n, r)), void 0 === o && (o = mn), void 0 === s && (s = $i);
        var a, u, c = e.call(this, t, o, i, s) || this;
        return c._protocol = n, c._domLoaded = !1, c._recordingDisabled = !1, c._integrationScriptFetched = !1, i.onShutdown(function () {
          return c.shutdown(J.SettingsBlocked)
        }), c._doc = c._wnd.document, c._frameId = 0, c._identity = t.recording.identity, c._getCurrentSessionEnabled = Zi.NoInfoYet, a = c._wnd, u = function (e) {
          if (c._eventWatcher.shutdown(J.Api), e) {
            var t = c._doc.getElementById(e);
            t && t.setAttribute("_fs_embed_token", c._embedToken)
          }
        }, a._fs_shutdown = u, c
      }
      return Object(r.__extends)(t, e), t.prototype.onDomLoad = function () {
        var t = this;
        e.prototype.onDomLoad.call(this), this._domLoaded = !0, this.injectIntegrationScript(function () {
          t.fireFsReady(t._recordingDisabled)
        })
      }, t.prototype.getReplayFlags = function () {
        var e = U(this._wnd, "_fs_replay_flags");
        if (/[?&]_fs_force_session=true(&|#|$)/.test(location.search) && (e += ",forceSession", this._wnd.history)) {
          var t = location.search.replace(/(^\?|&)_fs_force_session=true(&|$)/, function (e, t, n) {
            return n ? t : ""
          });
          this._wnd.history.replaceState({}, "", this._wnd.location.href.replace(location.search, t))
        }
        return e
      }, t.prototype.start = function (t, n) {
        var i, o, s, a = this;
        e.prototype.start.call(this, t, n);
        var u, c, h, d = this.getReplayFlags(),
          l = Gt(this._doc),
          p = l[0],
          f = l[1],
          _ = (u = this._wnd, c = 0, h = 0, null == u.screen ? [c, h] : (c = parseInt(String(u.screen.width)), h = parseInt(String(u.screen.height)), [c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h])),
          v = _[0],
          g = _[1],
          m = "";
        t || (m = this._identity.userId());
        var y = null !== (s = null === (o = null === (i = this._ctx) || void 0 === i ? void 0 : i.recording) || void 0 === o ? void 0 : o.preroll) && void 0 !== s ? s : -1,
          w = Vn(qn(this._wnd), {
            source: "page",
            type: "base"
          }),
          S = function () {
            return Vn(a._wnd.location.href, {
              source: "page",
              type: "url"
            })
          },
          b = function () {
            return Vn(a._doc.referrer, {
              source: "page",
              type: "referrer"
            })
          },
          E = {
            OrgId: this._orgId,
            UserId: m,
            Url: S(),
            Base: w,
            Width: p,
            Height: f,
            ScreenWidth: v,
            ScreenHeight: g,
            Referrer: b(),
            Preroll: y,
            Doctype: Ne(this._doc),
            CompiledVersion: "65243d039f",
            CompiledTimestamp: 1615057840,
            AppId: this._identity.appId()
          };
        d && (E.ReplayFlags = d), this._protocol.page(E, function (e) {
          return Object(r.__awaiter)(a, void 0, xt, function () {
            var t, n;
            return Object(r.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return this.isValidResponse(e) ? (this.handleResponse(e), this.handleIdentity(e.CookieDomain, e.UserIntId, e.SessionIntId, e.PageIntId, e.EmbedToken), this.handleIntegrationScript(e.IntegrationScript), e.PreviewMode && this.maybeInjectPreviewScript(), (t = function (e) {
                    return U(e, "_fs_pagestart", "function")
                  }(this._wnd)) && t(), this._queue.enqueueFirst(this._eventWatcher.getNavigateEvent(this._wnd.location.href, P.ENTRY_NAVIGATE)), n = !!e.Consented, this._queue.enqueueFirst({
                    Kind: P.SYS_REPORTCONSENT,
                    Args: [n, G.Document]
                  }), this._queue.enqueueFirst({
                    Kind: P.SET_FRAME_BASE,
                    Args: [Vn(qn(this._wnd), {
                      source: "event",
                      type: P.SET_FRAME_BASE
                    }), Ne(this._doc), S(), b()]
                  }), [4, this._queue.startPipeline({
                    pageId: e.PageIntId,
                    serverPageStart: e.PageStart,
                    isNewSession: !!e.IsNewSession
                  })]) : [2, this.disableBecauseRecPageSaidSo()];
                case 1:
                  return r.sent(), this.enqueueDocumentProperties(this._doc), this.fullyStarted(), [2];
              }
            })
          })
        }, function (e, t) {
          t && t.user_id && t.cookie_domain && t.reason_code == oe.ReasonBlockedTrafficRamping && m != t.user_id && a.handleIdentity(t.cookie_domain, t.user_id, "", "", ""), a.disableBecauseRecPageSaidSo()
        })
      }, t.prototype.handleIntegrationScript = function (e) {
        var t = this;
        this._integrationScriptFetched = !0, this._integrationScript = e, this.injectIntegrationScript(function () {
          t.fireFsReady(t._recordingDisabled)
        })
      }, t.prototype.handleIdentity = function (e, t, n, r, i) {
        var o = this._identity;
        o.setIds(this._wnd, e, t, n), this._embedToken = i, s("/User," + o.userId() + "/Session," + o.sessionId() + "/Page," + r)
      }, t.prototype.injectIntegrationScript = function (e) {
        var t, n;
        if (this._domLoaded && this._integrationScriptFetched)
          if (this._integrationScript) {
            var r = this._doc.createElement("script");
            (null === (n = null === (t = this._pageRsp) || void 0 === t ? void 0 : t.Flags) || void 0 === n ? void 0 : n.AsyncIntegration) || U(this._wnd, "_fs_csp", "boolean") ? (r.addEventListener("load", e), r.addEventListener("error", e), r.async = !0, r.src = this._scheme + "//" + this._recHost + "/rec/integrations?OrgId=" + this._orgId, this._doc.head.appendChild(r)) : (r.text = this._integrationScript, this._doc.head.appendChild(r), e())
          } else e()
      }, t.prototype.maybeInjectPreviewScript = function () {
        if (!this._doc.getElementById("FullStory-preview-script")) {
          var e = this._doc.createElement("script");
          e.id = "FullStory-preview-script", e.async = !0, e.src = this._scheme + "//" + this._appHost + "/s/fspreview.js", this._doc.head.appendChild(e)
        }
      }, t.prototype.disableBecauseRecPageSaidSo = function () {
        this.shutdown(J.SettingsBlocked), s("Disabling FS."), this._recordingDisabled = !0, this.fireFsReady(this._recordingDisabled)
      }, t
    }(to),
    lo = function () {
      function e(e, t) {
        void 0 === t && (t = new po(e)), this._wnd = e, this._messagePoster = t
      }
      return e.prototype.enqueueEvents = function (e, t) {
        this._messagePoster.postMessage(this._wnd.parent, "EvtBundle", t, e)
      }, e.prototype.startPipeline = function () {}, e.prototype.stopPipeline = function () {}, e.prototype.flush = function () {}, e.prototype.singSwanSong = function () {}, e.prototype.onShutdown = function (e) {}, e
    }(),
    po = function () {
      function e(e) {
        this.wnd = e
      }
      return e.prototype.postMessage = function (e, t, n, r) {
        var i = D(this.wnd);
        if (i) try {
          i.send(t, qe(n), r)
        } catch (e) {
          i.send(t, qe(n))
        } else e.postMessage(function (e, t, n) {
          var r = [e, t];
          n && r.push(n);
          return qe({
            __fs: r
          })
        }(t, n, r), "*")
      }, e
    }();
  var fo, _o = function (e) {
      function t(t, n, r, i, o) {
        void 0 === n && (n = new po(t.window)), void 0 === r && (r = new lo(t.window)), void 0 === i && (i = mn), void 0 === o && (o = $i);
        var s = e.call(this, t, i, r, o) || this;
        return s._messagePoster = n, s
      }
      return Object(r.__extends)(t, e), t.prototype.start = function (t, n) {
        var r = this;
        e.prototype.start.call(this, t, n), this.sendRequestForFrameId(), this._listeners.add(this._wnd, "load", !1, function () {
          r._eventWatcher.recordingIsDetached() && (s("Recording wrong document. Restarting recording in iframe."), r._ctx.recording.splitPage(J.FsShutdownFrame))
        })
      }, t.prototype.postMessageReceived = function (t, n) {
        if (e.prototype.postMessageReceived.call(this, t, n), t == this._wnd.parent || t == this._wnd) switch (n[0]) {
          case "GreetFrame":
            var r = n[1];
            this.sendRequestForFrameId(r);
            break;
          case "SetFrameId":
            try {
              r = n[1];
              var i = n[2],
                o = n[3],
                a = n[4],
                u = n[5],
                c = n[6],
                h = n[7],
                d = n[8],
                l = n[9],
                p = n[10];
              if (!r) return void s("Outer page gave us a bogus frame Id! Iframe: " + Vn(location.href, {
                source: "log",
                type: "debug"
              }));
              this.setFrameIdFromOutside(r, i, o, a, u, c, h, d, l, p)
            } catch (e) {
              s("Failed to parse frameId from message: " + qe(n))
            }
            break;
          case "SetConsent":
            var f = n[1];
            this.setConsent(f);
            break;
          case "InitFrameMobile":
            try {
              var _ = JSON.parse(n[1]),
                v = _.StartTime;
              if (n.length > 2) {
                var g = n[2];
                if (g.hasOwnProperty("ProtocolVersion")) g.ProtocolVersion >= 20180723 && g.hasOwnProperty("OuterStartTime") && (v = g.OuterStartTime)
              }
              var m = _.Host;
              this.setFrameIdFromOutside(0, [], v, "https:", Q(m), z(m), _.OrgId, _.PageResponse, this._watcher.getConsent())
            } catch (e) {
              s("Failed to initialize mobile web recording from message: " + qe(n))
            }
        }
      }, t.prototype.sendRequestForFrameId = function (e) {
        this._frameId && this._frameId === e || (0 != this._frameId ? this._wnd.parent ? (s("Asking for a frame ID."), this._messagePoster.postMessage(this._wnd.parent, "RequestFrameId", [])) : s("Orphaned window.") : s("For some reason the outer window attempted to request a frameId"))
      }, t.prototype.setFrameIdFromOutside = function (e, t, n, r, i, o, a, u, c, h) {
        var d = this;
        if (this._frameId) this._frameId != e ? (s("Updating frame id from " + this._frameId + " to " + e), this._ctx.recording.splitPage(J.FsShutdownFrame)) : s("frame Id is already set to " + this._frameId);
        else {
          s("FrameId received within frame " + Vn(location.href, {
            source: "log",
            type: "debug"
          }) + ": " + e), this._scheme = r, this._script = i, this._appHost = o, this._orgId = a, this._frameId = e, this._parentIds = t;
          var l = null != c ? c : !!u.Consented;
          if (!this.isValidResponse(u)) return s("Invalid page response"), void this.shutdown(J.FsShutdownFrame);
          this.handleResponse(u, l), this.fireFsReady(), this._queue.enqueueFirst({
            Kind: P.SYS_REPORTCONSENT,
            Args: [l, G.Document]
          }), this._queue.enqueueFirst({
            Kind: P.SET_FRAME_BASE,
            Args: [Vn(qn(this._wnd), {
              source: "event",
              type: P.SET_FRAME_BASE
            }), Ne(this._wnd.document)]
          }), this._queue.rebaseIframe(n, null != h ? h : 0), this._ctx.time.setStartTime(n), this._queue.startPipeline({
            pageId: this._pageId,
            serverPageStart: u.PageStart,
            isNewSession: !!u.IsNewSession,
            frameId: e,
            parentIds: t
          }).then(function () {
            d.flushPendingChildFrameInits(), d.enqueueDocumentProperties(d._wnd.document), d.fullyStarted()
          })
        }
      }, t
    }(to),
    vo = function () {
      function e(e, t, n) {
        void 0 === e && (e = document), void 0 === t && (t = function () {}), void 0 === n && (n = !1), this._doc = e, this._onWriteFailure = t, this._disableWrites = n, this._cookies = {}, this._appId = void 0
      }
      return e.prototype.initFromCookies = function (e, t) {
        this._cookies = I(this._doc);
        var n = this._cookies.fs_uid;
        if (!n) try {
          n = localStorage._fs_uid
        } catch (e) {}
        var r = k(n);
        r && r.host.replace(/^www\./, "") == e.replace(/^www\./, "") && r.orgId == t ? this._cookie = r : this._cookie = {
          expirationAbsTimeSeconds: T(),
          host: e,
          orgId: t,
          userId: "",
          sessionId: "",
          appKeyHash: ""
        }
      }, e.prototype.initFromParsedCookie = function (e) {
        this._cookie = e
      }, e.prototype.clear = function () {
        this._cookie.userId = this._cookie.sessionId = this._cookie.appKeyHash = this._appId = "", this._cookie.expirationAbsTimeSeconds = T(), this._write()
      }, e.prototype.host = function () {
        return this._cookie.host
      }, e.prototype.orgId = function () {
        return this._cookie.orgId
      }, e.prototype.userId = function () {
        return this._cookie.userId
      }, e.prototype.sessionId = function () {
        return this._cookie.sessionId
      }, e.prototype.appKeyHash = function () {
        return this._cookie.appKeyHash
      }, e.prototype.cookieData = function () {
        return this._cookie
      }, e.prototype.cookies = function () {
        return this._cookies
      }, e.prototype.setCookie = function (e, t, n) {
        if (void 0 === n && (n = new Date(m() + 6048e5).toUTCString()), !this._disableWrites) {
          var r = e + "=" + t;
          this._domain ? r += "; domain=." + encodeURIComponent(this._domain) : r += "; domain=", r += "; Expires=" + n + "; path=/; SameSite=Strict", "https:" === location.protocol && (r += "; Secure"), this._doc.cookie = r
        }
      }, e.prototype.setIds = function (e, t, n, r) {
        (x(t) || t.match(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g)) && (t = "");
        var i = function (e) {
          return U(e, "_fs_cookie_domain")
        }(e);
        "string" == typeof i && (t = i), this._domain = t, this._cookie.userId = n, this._cookie.sessionId = r, this._write()
      }, e.prototype.clearAppId = function () {
        return !!this._cookie.appKeyHash && (this._appId = "", this._cookie.appKeyHash = "", this._write(), !0)
      }, e.prototype.setAppId = function (e) {
        this._appId = e, this._cookie.appKeyHash = Mi(e), this._write()
      }, e.prototype.appId = function () {
        return this._appId
      }, e.prototype.encode = function () {
        var e = this._cookie.host + "#" + this._cookie.orgId + "#" + this._cookie.userId + ":" + this._cookie.sessionId;
        return this._cookie.appKeyHash && (e += "#" + encodeURIComponent(this._cookie.appKeyHash) + "#"), e += "/" + this._cookie.expirationAbsTimeSeconds
      }, e.prototype._write = function () {
        if (null != this._domain && !this._disableWrites) {
          var e = this.encode(),
            t = new Date(1e3 * this._cookie.expirationAbsTimeSeconds).toUTCString();
          this.setCookie("fs_uid", e, t);
          var n = []; - 1 === this._doc.cookie.indexOf(e) && n.push(["fs_uid", "cookie"]);
          try {
            localStorage._fs_uid = e, localStorage._fs_uid !== e && n.push(["fs_uid", "localStorage"])
          } catch (e) {
            n.push(["fs_uid", "localStorage", String(e)])
          }
          n.length > 0 && this._onWriteFailure(n)
        }
      }, e
    }();
  var go = ((fo = {})[ne.Document] = {
      assetMapId: "str",
      releaseDatetime: "date",
      releaseVersion: "str"
    }, fo[ne.Event] = {}, fo[ne.Page] = {
      pageName: "str",
      releaseVersion: "str",
      releaseDatetime: "str"
    }, fo[ne.User] = {
      uid: "str",
      displayName: "str",
      email: "str"
    }, fo),
    mo = {
      str: yo,
      bool: wo,
      real: So,
      "int": bo,
      date: Eo,
      strs: To(yo),
      bools: To(wo),
      reals: To(So),
      ints: To(bo),
      dates: To(Eo),
      objs: To(ko),
      obj: ko
    };

  function yo(e) {
    return "string" == typeof e
  }

  function wo(e) {
    return "boolean" == typeof e
  }

  function So(e) {
    return "number" == typeof e
  }

  function bo(e) {
    return "number" == typeof e && e - a.mathFloor(e) == 0
  }

  function Eo(e) {
    return !!e && (e.constructor === Date ? !isNaN(e) : ("number" == typeof e || "string" == typeof e) && !isNaN(new Date(e)))
  }

  function To(e) {
    return function (t) {
      if (!(t instanceof Array)) return !1;
      for (var n = 0; n < t.length; n++)
        if (!e(t[n])) return !1;
      return !0
    }
  }

  function ko(e) {
    return !!e && "object" == typeof e
  }
  var Io = /^[a-zA-Z][a-zA-Z0-9_]*$/,
    Co = function () {
      function e(e) {
        this._identity = e, this._documentVars = {}
      }
      return e.prototype.identity = function () {
        return this._identity
      }, e.prototype.unloadCrossPageVars = function (e) {
        switch (e) {
          case J.Hibernation:
          case J.Size:
            break;
          default:
            this._lastPageVars = void 0;
        }
      }, e.prototype.getCrossPageVars = function () {
        return this._lastPageVars
      }, e.prototype.getDocumentVars = function () {
        var e, t = {},
          n = void 0;
        for (var r in this._documentVars) {
          var i = this._documentVars[r],
            o = i.value;
          if (void 0 === (h = i.apiSource)) {
            var s = null != n ? n : {};
            s[r] = o, n = s
          } else {
            var a = null !== (e = t[h]) && void 0 !== e ? e : {};
            a[r] = o, t[h] = a
          }
        }
        var u = [],
          c = function (e) {
            e && u.push(e)
          };
        for (var h in n && c(this._buildVarRawEvent(ne.Document, {
            PayloadToSend: n,
            ValidationErrors: []
          })), t) c(this._buildVarRawEvent(ne.Document, {
          PayloadToSend: t[h],
          ValidationErrors: []
        }, h));
        return u
      }, e.prototype.api = function (e, t, n) {
        var r = !1,
          i = [],
          o = function (e) {
            e && i.push(e)
          };
        try {
          var u = function (e, t) {
              switch (e) {
                case "event":
                  return [ne.Event, t];
                case "page":
                  return [ne.Page, t];
                case "setVars":
                  if (!a.arrayIsArray(t)) throw new Error("Non-array args");
                  var n = t,
                    r = n[0],
                    i = n[1];
                  switch (r) {
                    case ne.Document:
                    case ne.Page:
                    case ne.User:
                      return [r, i];
                    case ne.Event:
                      throw new Error("Invalid scope: Event");
                    default:
                      Object(xn.assertExhaustive)(r, "Invalid scope: " + r);
                  }
                  case "user":
                    return [ne.User, t];
                  default:
                    Object(xn.assertExhaustive)(e, "Unsupported");
              }
            }(e, t),
            c = u[0],
            h = u[1];
          switch (c) {
            case ne.Document:
              var d = Oo(c, h);
              if (!this._updateDocumentVars(d, n)) break;
              o(this._buildVarRawEvent(c, d, n));
              break;
            case ne.Event:
              var l = h.n,
                p = Oo(c, h.p);
              o(this._buildVarRawEvent(c, p, n, l));
              break;
            case ne.Page:
              d = Oo(c, h);
              this._lastPageVars = this._buildVarRawEvent(c, d, n), o(this._lastPageVars);
              break;
            case ne.User:
              if ("object" != typeof h) s("Expected argument of type 'object' instead got type: '" + typeof h + "', value: " + qe(h));
              else if ("uid" in h) {
                var f = h.uid;
                if (!1 === f) this._identity.clearAppId() && (r = !0), delete h.uid;
                else {
                  var _ = function (e, t) {
                      "number" == typeof e && a.mathFloor(e) == e && (s("Expected appId of type 'string' instead got value: " + e + " of type: " + typeof e), e = "" + e);
                      if ("string" != typeof e) return s("blocking FS.identify API call; uid value (" + e + ") must be a string"), [void 0, "fsidentity"];
                      var n = e.trim();
                      if (S.indexOf(n.toLowerCase()) >= 0) return s("blocking FS.identify API call; uid value (" + n + ") is illegal"), [void 0, "fsidentity"];
                      var r = Mi(n),
                        i = void 0;
                      t && t._cookie.appKeyHash && t._cookie.appKeyHash !== r && t._cookie.appKeyHash !== n && (s("user re-identified; existing uid hash (" + t._cookie.appKeyHash + ") does not match provided uid (" + n + ")"), i = "newuid");
                      return [n, i]
                    }(f, this._identity),
                    v = _[0],
                    g = _[1];
                  if (!v) {
                    switch (g) {
                      case "fsidentity":
                      case void 0:
                        break;
                      default:
                        s("unexpected failReason returned from setAppId: " + g);
                    }
                    return {
                      events: i
                    }
                  }
                  h.uid = v, this._identity.setAppId(h.uid), "newuid" === g && (r = !0)
                }
              }
              d = Oo(c, h);
              o(this._buildVarRawEvent(c, d, n));
              break;
            default:
              Object(xn.assertExhaustive)(c, "Unsupported");
          }
        } catch (t) {
          s("unexpected exception handling " + e + " API call: " + t.message)
        }
        return {
          events: i,
          reidentify: r
        }
      }, e.prototype._buildVarRawEvent = function (e, t, n, r) {
        var i = qe(t.PayloadToSend),
          o = !!n && "fs" !== n;
        switch (e) {
          case ne.Event:
            return {
              When: 0, Kind: P.SYS_CUSTOM, Args: o ? [r, i, n] : [r, i]
            };
          case ne.Document:
          case ne.Page:
          case ne.User:
            return {
              When: 0, Kind: P.SYS_SETVAR, Args: o ? [e, i, n] : [e, i]
            };
          default:
            Object(xn.assertExhaustive)(e, "Unsupported");
        }
      }, e.prototype._updateDocumentVars = function (e, t) {
        var n = e.PayloadToSend;
        if (n && "object" == typeof n) {
          var r = 0,
            i = {};
          for (var o in n)
            if (!(o in this._documentVars)) {
              var s = n[o];
              this._documentVars[o] = {
                value: s,
                apiSource: t
              }, i[o] = s, r++
            } if (0 !== r) return {
            PayloadToSend: i,
            ValidationErrors: e.ValidationErrors
          }
        }
      }, e
    }();

  function Oo(e, t) {
    var n = {
        PayloadToSend: {},
        ValidationErrors: []
      },
      r = function (t) {
        var r = Oo(e, t);
        return n.ValidationErrors = n.ValidationErrors.concat(r.ValidationErrors), r.PayloadToSend
      };
    return Oe(t, function (t, i) {
      var o = function (e, t, n, r) {
        var i = t,
          o = typeof n;
        if ("undefined" === o) return s("Cannot infer type of " + o + " " + n), r.push({
          Type: "vartype",
          FieldName: t,
          ValueType: o + " (unsupported)"
        }), null;
        var u = go[e];
        if (a.objectHasOwnProp(u, t)) return {
          name: t,
          type: u[t],
          value: n
        };
        var c = t.lastIndexOf("_");
        if (-1 == c || !Ro(t.substring(c + 1))) {
          var h = function (e) {
            for (var t in mo)
              if (mo[t](e)) return t;
            return null
          }(n);
          if (null == h) return s("Cannot infer type of " + o + " " + n), n ? r.push({
            Type: "vartype",
            FieldName: t
          }) : r.push({
            Type: "vartype",
            FieldName: t,
            ValueType: "null (unsupported)"
          }), null;
          c = t.length, s("Warning: Inferring user variable \"" + t + "\" to be of type \"" + h + "\""), t = t + "_" + h
        }
        var d = [t.substring(0, c), t.substring(c + 1)],
          l = d[0],
          p = d[1];
        if ("object" === o && !n) return s("null is not a valid object type"), r.push({
          Type: "vartype",
          FieldName: i,
          ValueType: "null (unsupported)"
        }), null;
        if (!Io.test(l)) {
          l = l.replace(/[^a-zA-Z0-9_]/g, "").replace(/^[0-9]+/, ""), /[0-9]/.test(l[0]) && (l = l.substring(1)), r.push({
            Type: "varname",
            FieldName: i
          });
          var f = l + "_" + p;
          if (s("Warning: variable \"" + i + "\" has invalid characters. It should match /" + Io.source + "/. Converted name to \"" + f + "\"."), "" == l) return null;
          t = f
        }
        if (!Ro(p)) return s("Variable \"" + i + "\" has invalid type \"" + p + "\""), r.push({
          Type: "varname",
          FieldName: i
        }), null;
        if (! function (e, t) {
            return mo[e](t)
          }(p, n)) return s("illegal value " + qe(n) + " for type " + p), "number" === o ? o = n % 1 == 0 ? "integer" : "real" : "object" == o && null != n && n.constructor == Date && (o = isNaN(n) ? "invalid date" : "date"), r.push({
          Type: "vartype",
          FieldName: i,
          ValueType: o
        }), null;
        return {
          name: t,
          type: p,
          value: n
        }
      }(e, i, t, n.ValidationErrors);
      if (o) {
        var u = o.name;
        if ("obj" !== o.type) {
          if ("objs" !== o.type) {
            var c, h;
            n.PayloadToSend[u] = Ao(o.type, o.value)
          } else {
            e != ne.Event && n.ValidationErrors.push({
              Type: "vartype",
              FieldName: u,
              ValueType: "Array<Object> (unsupported)"
            });
            for (var d = [], l = 0; l < o.value.length; l++) {
              (p = r(o.value[l])) && d.push(p)
            }
            d.length > 0 && (n.PayloadToSend[u] = d)
          }
        } else {
          var p = r(o.value),
            f = (h = "_obj").length > (c = i).length || c.substring(c.length - h.length) != h ? u.substring(0, u.length - "_obj".length) : u;
          n.PayloadToSend[f] = p
        }
      } else n.PayloadToSend[i] = Ao("str", t)
    }), n
  }

  function Ao(e, t) {
    return "str" == e && "string" == typeof t && (t = t.trim()), null == t || "date" != e && t.constructor != Date || (t = function (e) {
      var t = e.constructor === Date ? e : new Date(e);
      try {
        return t.toISOString()
      } catch (e) {
        return null
      }
    }(t)), t
  }

  function Ro(e) {
    return !!mo[e]
  }

  function xo(e, t) {
    return Object(r.__awaiter)(this, void 0, xt, function () {
      var n, i, o, a, c;
      return Object(r.__generator)(this, function (h) {
        switch (h.label) {
          case 0:
            if (h.trys.push([0, 2, , 3]), fe || ve) return [2, Object(r.__assign)(Object(r.__assign)({}, t), {
              status: 1
            })];
            if (!e.document || 0 !== t.status) return [2, t];
            if (1 === (n = function (e, t) {
                var n = t.functions,
                  i = {},
                  o = Object(r.__assign)({}, t.helpers);
                if (o.functionToString = function (e, t) {
                    var n, r, i = null === (n = e["__core-js_shared__"]) || void 0 === n ? void 0 : n.inspectSource;
                    if (Lo(i, 1)) return function () {
                      return i(this)
                    };
                    var o = null === (r = e["__core-js_shared__"]) || void 0 === r ? void 0 : r["native-function-to-string"];
                    if (Lo(o)) return o;
                    var s = t.__zone_symbol__OriginalDelegate;
                    if (Lo(s)) return s;
                    if (Lo(t)) return t;
                    return
                  }(e, o.functionToString), !o.functionToString) return t;
                var s = !1;
                for (var a in n)
                  if (n[a]) {
                    if (i[a] = qo(o.functionToString, n[a]), i[a] || (i[a] = Uo(o.functionToString, o, a)), !i[a]) return t;
                    i[a] !== n[a] && (s = !0)
                  } else i[a] = void 0;
                return {
                  status: 1,
                  functions: s ? i : n,
                  helpers: o
                }
              }(e, t)).status) return [2, n];
            s("The window is dirty; rebuilding Windex from a fresh global."), (i = e.document.createElement("iframe")).id = "FullStory-iframe", i.className = "fs-hide", i.style.display = "none", o = e.document.body || e.document.head || e.document.documentElement || e.document;
            try {
              o.appendChild(i)
            } catch (e) {
              return [2, Object(r.__assign)(Object(r.__assign)({}, t), {
                status: 1
              })]
            }
            return i.contentWindow ? (a = u(i.contentWindow, 1), i.parentNode && i.parentNode.removeChild(i), 2 === a.status ? [2, Object(r.__assign)(Object(r.__assign)({}, t), {
              status: 1
            })] : [4, Po(a, t)]) : [2, Object(r.__assign)(Object(r.__assign)({}, t), {
              status: 1
            })];
          case 1:
            return [2, h.sent()];
          case 2:
            return c = h.sent(), Ye.sendToBugsnag(c, "error"), [2, Object(r.__assign)(Object(r.__assign)({}, t), {
              status: 1
            })];
          case 3:
            return [2];
        }
      })
    })
  }

  function Po(e, t) {
    var n, i = new xt(function (e) {
      return n = e
    });
    return setTimeout(function () {
      try {
        e.functions.jsonParse("[]").push(0)
      } catch (e) {
        n(Object(r.__assign)(Object(r.__assign)({}, t), {
          status: 1
        }))
      }
      n(e)
    }), i
  }

  function Lo(e, t) {
    var n;
    if (void 0 === t && (t = 0), !e) return !1;
    var r = function (e) {
        try {
          return void e.call(null)
        } catch (e) {
          return (e.stack || "").replace(/__fs_nomangle_check_stack(.|\n)*$/, "")
        }
      },
      i = void 0;
    0 !== t && "number" == typeof Error.stackTraceLimit && (i = Error.stackTraceLimit, Error.stackTraceLimit = Number.POSITIVE_INFINITY);
    var o = [function () {
        throw new Error("")
      }, e],
      s = function __fs_nomangle_check_stack() {
        return o.map(r)
      }(),
      a = s[0],
      u = s[1];
    if (void 0 !== i && (Error.stackTraceLimit = i), !a || !u) return !1;
    for (var c = "\n".charCodeAt(0), h = a.length > u.length ? u.length : a.length, d = 1, l = d; l < h; l++) {
      var p = a.charCodeAt(a.length - l),
        f = u.charCodeAt(u.length - l);
      if (p != f) break;
      f != c && l != h - 1 || (d = l)
    }
    return (null !== (n = u.slice(0, u.length - d + 1).match(/\.js:\d+([:)]|$)/gm)) && void 0 !== n ? n : []).length <= t
  }

  function Mo(e, t) {
    return e.call(t).indexOf("[native code]") >= 0
  }
  var Fo = ["__zone_symbol__OriginalDelegate", "nr@original"];

  function qo(e, t) {
    if (t) {
      for (var n = 0, r = Fo; n < r.length; n++) {
        var i = t[r[n]];
        if ("function" == typeof i && Mo(e, i)) return i
      }
      return Mo(e, t) ? t : void 0
    }
  }

  function Uo(e, t, n) {
    switch (n) {
      case "arrayIsArray":
        var r = qo(e, t.objectToString);
        if (!r) return;
        return t.objectToString = r,
          function (e) {
            return "[object Array]" == r.call(e)
          };
      default:
        return;
    }
  }
  var No = function () {
      function e(e, t) {
        void 0 === t && (t = function (e) {
          return new WebSocket(e)
        }), this._newSock = t, this._connecting = !1, this._connected = !1, this._queue = {}, this._seq = 1, this._scheme = e.options.scheme, this._host = e.options.recHost
      }
      return e.isSupported = function () {
        return "WebSocket" in window
      }, e.prototype.page = function (e, t, n) {
        this.request({
          Cmd: 1,
          Page: e
        }, function (e) {
          4 === e.Cmd ? t(e.Page) : s("socket: unexpected page response: " + e.Cmd)
        }, n)
      }, e.prototype.bundle = function (e) {
        var t = e.deltaT,
          n = e.serverPageStart,
          r = e.serverBundleTime;
        return this.request({
          Cmd: 2,
          Bundle: {
            OrgId: e.orgId,
            UserId: e.userId,
            SessionId: e.sessionId,
            PageId: e.pageId,
            Seq: e.bundle.Seq,
            DeltaT: null === t ? void 0 : t,
            PageStart: null == n ? void 0 : n,
            PrevBundleTime: null == r ? void 0 : r,
            Bundle: e.bundle
          }
        }, function (t) {
          5 === t.Cmd ? e.win(t.Bundle) : s("socket: unexpected bundle response: " + t.Cmd)
        }, e.lose)
      }, e.prototype.bundleBeacon = function (e) {
        return Qi(this._scheme, this._host, e)
      }, e.prototype.exponentialBackoffMs = function (e, t) {
        var n = a.mathMin(ue.BackoffMax, 5e3 * a.mathPow(2, e));
        return t ? n + .25 * a.mathRandom() * n : n
      }, e.prototype.request = function (e, t, n) {
        var r = e;
        r.Seq = this._seq++;
        var i = qe(r);
        return this._queue[r.Seq] = {
          payload: i,
          win: t,
          lose: n
        }, this.maybeConnect(), i.length
      }, e.prototype.handleMessage = function (e) {
        var t;
        try {
          t = je(e)
        } catch (e) {
          return void s("socket: error parsing frame: " + e.toString())
        }
        var n = this._queue[t.Seq];
        delete this._queue[t.Seq], n ? 3 === t.Cmd ? (s(t.Fail.Error), n.lose(t.Fail.Status)) : n.win(t) : s("socket: mismatched request seq " + t.Seq + "; ignoring")
      }, e.prototype.drainQueue = function () {
        if (this._connected)
          for (var e in this._queue) {
            var t = this._queue[e];
            t.sent || (this._sock.send(t.payload), t.sent = !0)
          } else s("socket: attempt to drain queue when disconnected.")
      }, e.prototype.failPending = function () {
        for (var e in this._queue) {
          var t = this._queue[e];
          t.sent && (delete this._queue[e], t.lose(0))
        }
      }, e.prototype.maybeConnect = function () {
        var e = this;
        if (this._connected) this.drainQueue();
        else if (!this._connecting) {
          this._connecting = !0;
          var t = ("https:" == this._scheme ? "wss:" : "ws:") + "//" + this._host + "/rec/sock";
          this._sock = this._newSock(t), this._sock.onopen = function (t) {
            e._connecting = !1, e._connected = !0, e.drainQueue()
          }, this._sock.onmessage = function (t) {
            e.handleMessage(t.data), e.drainQueue()
          }, this._sock.onclose = function (t) {
            s("socket: closed; reconnecting"), e._connecting = e._connected = !1, e.failPending()
          }, this._sock.onerror = function (t) {
            s("socket: error; reconnecting"), e._connecting = e._connected = !1, e.failPending()
          }
        }
      }, e
    }(),
    jo = n(4);
  var Wo, Bo, Do, Ho, Vo = (Wo = window.navigator, Bo = Wo.vendor, Do = void 0 !== window.opr, Ho = Wo.userAgent.indexOf("Edge") > -1, !!Wo.userAgent.match("CriOS") || "Google Inc." === Bo && !Do && !Ho);
  /Firefox/.test(window.navigator.userAgent);

  function Ko(e) {
    if (!Vo) return !1;
    var t = window.navigator.userAgent.match(/Chrome\/(\d+)/);
    return !!t && parseInt(t[1]) < e
  }
  Ko(23), Ko(38), Ko(60);
  var zo = jo,
    Qo = function () {
      function e() {}
      return e.prototype.createTopRecorder = function (e) {
        var t = U(e.window, "_fs_use_socket", "boolean") && No.isSupported() ? new No(e) : new Di(e);
        return new ho(e, t)
      }, e.prototype.createInnerRecorder = function (e) {
        return new _o(e)
      }, e
    }(),
    Yo = function () {
      function e(e, t) {
        void 0 === e && (e = window), void 0 === t && (t = new Qo), this.wnd = e, this.recMaker = t, this.scheme = "https:", this.domDoneLoaded = !1, this.waitingOnStart = !1, this.reidentifyCount = 0
      }
      return e.prototype.init = function () {
        var e, t;
        A(this.wnd) || (e = this.wnd, t = O(this.wnd), e._fs_loaded = t, t in e || (e[t] = {}), function (e) {
          Object(r.__awaiter)(this, void 0, xt, function () {
            var t;
            return Object(r.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, xo(e, a.snapshot)];
                case 1:
                  return t = n.sent(), a.rebuildFromSnapshot(t), [2];
              }
            })
          })
        }(this.wnd), this.initApi(), this.start())
      }, e.prototype.getCurrentSessionURL = function (e) {
        return this.recorder ? this.recorder.getCurrentSessionURL(e) : null
      }, e.prototype.getCurrentSession = function () {
        return this.recorder ? this.recorder.getCurrentSession() : null
      }, e.prototype.enableConsole = function () {
        this.recorder && this.recorder.console().enable()
      }, e.prototype.disableConsole = function () {
        this.recorder && this.recorder.console().disable()
      }, e.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._api("log", e)
      }, e.prototype.shutdownApi = function () {
        this.shutdown(J.Api)
      }, e.prototype.shutdown = function (e) {
        this.recorder && !this.deferredStart ? (this.recorder.shutdown(e), this.recorder = null, this.inFrame() || this.vars.unloadCrossPageVars(e)) : s("Recording already shut down.")
      }, e.prototype.restart = function () {
        if (this.deferredStart) return this.deferredStart(), void(this.deferredStart = null);
        this.recorder ? s("Recording already started.") : this.recorder = this.createRecorder(!0)
      }, e.prototype.splitPage = function (e, t) {
        return Object(r.__awaiter)(this, void 0, xt, function () {
          return Object(r.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return t && null == this.identity ? (s("Can't re-identify from an iframe"), [2]) : this.waitingOnStart ? (this.splitPending = [e, t], [2]) : (this.shutdown(e), [4, Lt(0)]);
              case 1:
                return n.sent(), [4, Lt(0)];
              case 2:
                return n.sent(), t && this.identity && this.identity.clear(), this.restart(), [2];
            }
          })
        })
      }, e.prototype.executeApiSequence = function (e, t, n) {
        for (var r, i, o = [], a = !1, u = !1, c = 0, h = t; c < h.length; c++) {
          var d = h[c],
            l = d[0],
            p = d[1];
          try {
            var f = l;
            if (this.inFrame() && "event" !== f) {
              u || (u = !0, s("FS." + f + "() is not available in an inner frame"));
              continue
            }
            switch (f) {
              case "rec":
                r = !!p;
                break;
              case "log":
                var _ = p,
                  v = _[0],
                  g = _.slice(1),
                  m = e.console().logEvent(v, g);
                m && o.push(m);
                break;
              case "consent":
                i = !!p;
                break;
              case "event":
              case "page":
              case "setVars":
              case "user":
                var y = this.vars.api(f, p, n),
                  w = y.events;
                y.reidentify && (o = [], i = void 0, a = !0), o.push.apply(o, w);
                break;
              default:
                s("Unrecognized api: " + f);
            }
          } catch (e) {
            Ye.sendToBugsnag(e, "error")
          }
        }
        return {
          reidentified: a,
          recordingShouldBeEnabled: r,
          applyApi: function () {
            void 0 !== i && e.setConsent(i);
            for (var t = e.queue(), n = 0, r = o; n < r.length; n++) {
              var s = r[n];
              t.enqueue(s)
            }
          }
        }
      }, e.prototype._api = function (e, t, n) {
        var r;
        if (this.recorder) {
          var i = null !== (r = this.executeApiSequence(this.recorder, [
              [e, t]
            ], n)) && void 0 !== r ? r : {
              reidentified: !1,
              applyApi: function () {}
            },
            o = i.reidentified,
            a = i.recordingShouldBeEnabled,
            u = i.applyApi;
          if (o) {
            if (this.reidentifyCount >= 8) return void s("reidentified too many times; giving up");
            this.reidentifyCount++, V(this.wnd, [e, t]), this.splitPage(J.Reidentify, !0)
          } else u();
          void 0 !== a && (a ? this.restart() : this.shutdown(J.Api))
        } else V(this.wnd, [e, t])
      }, e.prototype._cookies = function () {
        return this.identity ? this.identity.cookies() : (s("Error in FS integration: Can't get cookies from inside an iframe"), null)
      }, e.prototype._setCookie = function (e, t) {
        this.identity ? this.identity.setCookie(e, t) : s("Error in FS integration: Can't set cookies from inside an iframe")
      }, e.prototype._withEventQueue = function (e, t) {
        if (this.recorder) {
          var n = this.recorder.queue(),
            r = this.recorder.pageSignature();
          null != n && null != r ? e === r ? t(n) : Ye.sendToBugsnag("Error in _withEventQueue: Page Signature mismatch", "error", {
            pageSignature: r,
            callerSignature: e
          }) : s("Error getting event queue or page signature: Recorder not initialized")
        } else s("Error in FS integration: Recorder not initialized")
      }, e.prototype.initApi = function () {
        var e = R(this.wnd);
        e ? (e.getCurrentSessionURL = Fe(this.getCurrentSessionURL, this), e.getCurrentSession = Fe(this.getCurrentSession, this), e.enableConsole = Fe(this.enableConsole, this), e.disableConsole = Fe(this.disableConsole, this), e.log = Fe(this.log, this), e.shutdown = Fe(this.shutdownApi, this), e.restart = Fe(this.restart, this), e._api = Fe(this._api, this), e._cookies = Fe(this._cookies, this), e._setCookie = Fe(this._setCookie, this), e._withEventQueue = Fe(this._withEventQueue, this)) : s("Missing browser API namespace; couldn't initialize API.")
      }, e.prototype.start = function () {
        var e, t, n, r = this;
        n = N(this.wnd), i = n, s("script version 65243d039f (compiled at 1615057840)");
        var o = W(this.wnd);
        if (o) {
          this.orgId = o;
          var a, u = U(a = this.wnd, "_fs_script") || Q(K(a));
          if (u) {
            this.script = u;
            var c = j(this.wnd);
            if (c) {
              this.recHost = c;
              var h = function (e) {
                return U(e, "_fs_app_host") || z(K(e))
              }(this.wnd);
              h ? (this.appHost = h, s("script: " + this.script), s("recording host: " + this.recHost), s("orgid: " + this.orgId), "localhost:8080" == this.recHost && (this.scheme = "http:"), $n({
                paths: null !== (t = null === (e = zo[this.orgId]) || void 0 === e ? void 0 : e.path) && void 0 !== t ? t : ue.DefaultOrgSettings.UrlPathBlocklist,
                queries: ue.DefaultOrgSettings.UrlQueryStringBlocklist
              }), this.identity = new vo(this.wnd.document, function (e) {
                for (var t, n = 0, i = e; n < i.length; n++) {
                  var o = i[n];
                  null === (t = r.recorder) || void 0 === t || t.queue().enqueue({
                    Kind: P.STORAGE_WRITE_FAILURE,
                    Args: o
                  })
                }
              }, this.inFrame()), this.vars = new Co(this.identity), this.identity.initFromCookies(this.recHost, this.orgId), this.canRecord(this.orgId) ? (this.recorder = this.createRecorder(), this.hookLoadEvents(), this.wnd.addEventListener("message", Ye.wrap(function (e) {
                if ("string" == typeof e.data && (e.source == r.wnd.parent || e.source == r.wnd)) switch (ro(e.data)[0]) {
                  case "ShutdownFrame":
                    r.shutdown(J.FsShutdownFrame);
                    break;
                  case "RestartFrame":
                    r.restart();
                }
              }))) : s("Shutting down recorder.")) : s("Missing global _fs_host or _fs_app_host. Recording disabled.")
            } else s("Missing global _fs_host or _fs_rec_host. Recording disabled.")
          } else s("Missing global _fs_host or _fs_script. Recording disabled.")
        } else s("Missing global _fs_org. Recording disabled.")
      }, e.prototype._context = function (e) {
        var t, n = this,
          r = a.mathRound(null !== (t = de(function () {
            var e;
            return null === (e = window.performance) || void 0 === e ? void 0 : e.now()
          })()) && void 0 !== t ? t : -1),
          i = new Sn;
        return i.setStartTime(i.wallTime()), {
          window: this.wnd,
          time: i,
          measurer: Nt.create(this.wnd),
          options: {
            appHost: this.appHost,
            orgId: this.orgId,
            recHost: this.recHost,
            scheme: this.scheme,
            script: this.script
          },
          recording: {
            bundleUploadInterval: function () {
              return e().bundleUploadInterval()
            },
            getCurrentSessionURL: function (t) {
              return e().getCurrentSessionURL(t)
            },
            identity: this.identity,
            inFrame: this.inFrame(),
            pageResponse: function () {
              var t;
              return null === (t = e()) || void 0 === t ? void 0 : t.getPageResponse()
            },
            pageSignature: function () {
              return e().pageSignature()
            },
            preroll: r,
            splitPage: function (e, t) {
              return n.splitPage(e, t)
            },
            vars: this.vars
          },
          queue: function () {
            return e().queue()
          }
        }
      }, e.prototype.addPreservedVarRawEvents = function (e, t) {
        if (t) {
          for (var n = 0, r = this.vars.getDocumentVars(); n < r.length; n++) {
            var i = r[n];
            e.enqueue(i)
          }
          var o = this.vars.getCrossPageVars();
          void 0 !== o && e.enqueue(o)
        }
      }, e.prototype.createRecorder = function (e) {
        var t, n, r, i = this,
          o = this._context(function () {
            return r
          }),
          s = !1,
          a = !1;
        if (this.inFrame()) {
          r = this.recMaker.createInnerRecorder(o), (p = (null !== (n = this.executeApiSequence(r, H(this.wnd))) && void 0 !== n ? n : {
            applyApi: function () {}
          }).applyApi)()
        } else {
          r = this.recMaker.createTopRecorder(o), this.addPreservedVarRawEvents(r.queue(), e);
          var u = [],
            c = U(this.wnd, "_fs_asset_map_id");
          c && u.push(["setVars", ["document", {
            assetMapId: c
          }]]), u.push.apply(u, H(this.wnd));
          var h = null !== (t = this.executeApiSequence(r, u)) && void 0 !== t ? t : {
              applyApi: function () {}
            },
            d = h.reidentified,
            l = h.recordingShouldBeEnabled,
            p = h.applyApi;
          void 0 !== l && (a = !l), s = !!d, p()
        }
        this.waitingOnStart = !0;
        var f = function () {
          r.start(s, function () {
            i.waitingOnStart = !1, e && r.tellAllFramesTo(["RestartFrame"]), i.splitPending && (i.splitPage(i.splitPending[0], i.splitPending[1]), i.splitPending = null)
          })
        };
        return a ? this.deferredStart = f : f(), r
      }, e.prototype.inFrame = function () {
        if ("boolean" == typeof this._inFrame) return this._inFrame;
        var e = D(this.wnd);
        return B(this.wnd) ? this._inFrame = !1 : this.wnd != top ? this._inFrame = !0 : e ? e.init && e.init(this.orgId) && (this._inFrame = !0) : this._inFrame = !1, this._inFrame
      }, e.prototype.canRecord = function (e) {
        return this.wnd.MutationObserver && this.wnd.WeakMap && !Ee && this.wnd.postMessage && 2 !== a.snapshot.status ? !! function e(t) {
          if (t == top || B(t) || function (e) {
              return !!U(e, "_fs_run_in_iframe", "boolean")
            }(t) || D(t)) return !0;
          try {
            return t.parent.document, e(t.parent)
          } catch (e) {}
          return !1
        }(this.wnd) || (s("FullStory recording for this page is NOT allowed within an iFrame."), !1) : (s("missing required browser features"), !1)
      }, e.prototype.hookLoadEvents = function () {
        var e = this,
          t = function () {
            e.domDoneLoaded || (e.domDoneLoaded = !0, e.recorder && e.recorder.onDomLoad())
          },
          n = !1,
          r = function () {
            n || (n = !0, e.recorder && e.recorder.onLoad())
          };
        switch (document.readyState) {
          case "interactive":
            t();
            break;
          case "complete":
            t(), r();
        }
        this.domDoneLoaded || document.addEventListener("DOMContentLoaded", Ye.wrap(t)), n || this.wnd.addEventListener("load", Ye.wrap(function (e) {
          t(), r()
        }))
      }, e
    }();
  ! function () {
    try {
      new Yo().init()
    } catch (e) {
      Ye.sendToBugsnag(e, "error"), N(window) && window.console && console.log && console.log("Failed to initialize FullStory.")
    }
  }()
}]);
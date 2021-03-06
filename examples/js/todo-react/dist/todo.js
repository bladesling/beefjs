/*! jQuery v2.2.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.1",
      n = function (a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function (a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
      return e.call(this);
    }, get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function (a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function (a) {
      return n.each(this, a);
    }, map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function () {
      return this.pushStack(e.apply(this, arguments));
    }, first: function () {
      return this.eq(0);
    }, last: function () {
      return this.eq(-1);
    }, eq: function (a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function () {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
      throw new Error(a);
    }, noop: function () {}, isFunction: function (a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function (a) {
      return null != a && a === a.window;
    }, isNumeric: function (a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isPlainObject: function (a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    }, isEmptyObject: function (a) {
      var b;for (b in a) return !1;return !0;
    }, type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
    }, globalEval: function (a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function (a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
      } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;return a;
    }, trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function (a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function (a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];return a.length = e, a;
    }, grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
    }, map: function (a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);else for (g in a) e = b(a[g], g, c), null != e && h.push(e);return f.apply([], h);
    }, guid: 1, proxy: function (a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function () {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function (a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function (a, b) {
      for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function (a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function () {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]);a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) r[h] = l + " " + qa(r[h]);s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) d.attrHandle[c[e]] = b;
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) g.unshift(c);c = b;while (c = c.parentNode) h.unshift(c);while (g[d] === h[d]) d++;return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) c += e(b);return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function (a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function (a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function (a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function (a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                  k[a] = [w, n, t];break;
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function (a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function (b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function (a) {
          return a === o;
        }, focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function (a) {
          return a.disabled === !1;
        }, disabled: function (a) {
          return a.disabled === !0;
        }, checked: function (a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
        }, parent: function (a) {
          return !d.pseudos.empty(a);
        }, header: function (a) {
          return Y.test(a.nodeName);
        }, input: function (a) {
          return X.test(a.nodeName);
        }, button: function (a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function (a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = b[d]) if (1 === b.nodeType || e) {
          if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
            }k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
        }m.push(c);
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function (f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) if (q(l, g || n, h)) {
              i.push(l);break;
            }k && (w = y);
          }c && ((l = !q && l) && r--, f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) q(t, u, g, h);if (f) {
            if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));u = ua(u);
          }H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function (a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
      if (e && n(a).is(c)) break;d.push(a);
    }return d;
  },
      v = function (a, b) {
    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function (a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
      }));for (b = 0; c > b; b++) n.find(a, e[b], d);return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function (a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function (a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function (a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);return this;
      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function (a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    }, closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);break;
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function (a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);return a;
  }n.each({ parent: function (a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function (a) {
      return u(a, "parentNode");
    }, parentsUntil: function (a, b, c) {
      return u(a, "parentNode", c);
    }, next: function (a) {
      return F(a, "nextSibling");
    }, prev: function (a) {
      return F(a, "previousSibling");
    }, nextAll: function (a) {
      return u(a, "nextSibling");
    }, prevAll: function (a) {
      return u(a, "previousSibling");
    }, nextUntil: function (a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function (a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function (a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function (a) {
      return v(a.firstChild);
    }, contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function () {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function () {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function () {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
        }), this;
      }, has: function (a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function () {
        return f && (f = []), this;
      }, disable: function () {
        return e = g = [], f = c = "", this;
      }, disabled: function () {
        return !f;
      }, lock: function () {
        return e = g = [], c || (f = c = ""), this;
      }, locked: function () {
        return !!e;
      }, fireWith: function (a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function () {
        return j.fireWith(this, arguments), this;
      }, fired: function () {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function (a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function () {
          return c;
        }, always: function () {
          return e.done(arguments).fail(arguments), this;
        }, then: function () {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function (a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function (a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function (a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();var K = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) K(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
  };function M() {
    this.expando = n.expando + M.uid++;
  }M.uid = 1, M.prototype = { register: function (a, b) {
      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
    }, cache: function (a) {
      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function (a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) e[d] = b[d];return e;
    }, get: function (a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    }, access: function (a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function (a, b) {
      var c,
          d,
          e,
          f = a[this.expando];if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) delete f[d[c]];
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function (a) {
      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
    } };var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;function R(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}O.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function (a) {
      return O.hasData(a) || N.hasData(a);
    }, data: function (a, b, c) {
      return O.access(a, b, c);
    }, removeData: function (a, b) {
      O.remove(a, b);
    }, _data: function (a, b, c) {
      return N.access(a, b, c);
    }, _removeData: function (a, b) {
      N.remove(a, b);
    } }), n.fn.extend({ data: function (a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));N.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == typeof a ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function (a) {
      return this.each(function () {
        O.remove(this, a);
      });
    } }), n.extend({ queue: function (a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function (a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function () {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function (a, b) {
      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function (a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function (a) {
      return this.queue(a || "fx", []);
    }, promise: function (a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function () {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function (a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) g = g.lastChild;n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
    } else m.push(b.createTextNode(f));l.textContent = "", o = 0;while (f = m[o++]) if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
      k = 0;while (f = g[k++]) Z.test(f.type || "") && c.push(f);
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
    return !0;
  }function ha() {
    return !1;
  }function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ja(a, b, c, d, e, f) {
    var g, h;if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) ja(a, h, c, d, b[h], f);return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function (a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
      }
    }, remove: function (a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
          l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
        } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    }, dispatch: function (a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function (a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function (a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) c = e[b], a[c] = g[c];return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function (a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, preventDefault: function () {
      var a = this.originalEvent;this.isDefaultPrevented = ga, a && a.preventDefault();
    }, stopPropagation: function () {
      var a = this.originalEvent;this.isPropagationStopped = ga, a && a.stopPropagation();
    }, stopImmediatePropagation: function () {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), n.fn.extend({ on: function (a, b, c, d) {
      return ja(this, a, b, c, d);
    }, one: function (a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    }, off: function (a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function ra(a) {
    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function sa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }function ta(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }function ua(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
    }return a;
  }function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));return a;
  }n.extend({ htmlPrefilter: function (a) {
      return a.replace(ka, "<$1></$2>");
    }, clone: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    }, cleanData: function (a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) if (L(c)) {
        if (b = c[N.expando]) {
          if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);c[N.expando] = void 0;
        }c[O.expando] && (c[O.expando] = void 0);
      }
    } }), n.fn.extend({ domManip: ua, detach: function (a) {
      return va(this, a, !0);
    }, remove: function (a) {
      return va(this, a);
    }, text: function (a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");return this;
    }, clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function (a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function () {
      var a = [];return ua(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());return this.pushStack(d);
    };
  });var wa,
      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function za(a) {
    var b = d,
        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function (b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function (a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
  },
      Ea = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);function i() {
        h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
      }n.extend(l, { pixelPosition: function () {
          return i(), b;
        }, boxSizingReliable: function () {
          return null == c && i(), c;
        }, pixelMarginRight: function () {
          return null == c && i(), e;
        }, reliableMarginLeft: function () {
          return null == c && i(), f;
        }, reliableMarginRight: function () {
          var b,
              c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
        } });
    }
  }();function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
  }function Ga(a, b) {
    return { get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = { position: "absolute", visibility: "hidden", display: "block" },
      Ja = { letterSpacing: "0", fontWeight: "400" },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;function Ma(a) {
    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;while (c--) if (a = Ka[c] + b, a in La) return a;
  }function Na(a, b, c) {
    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));return g;
  }function Pa(b, c, e) {
    var f = !0,
        g = "width" === c ? b.offsetWidth : b.offsetHeight,
        h = Ca(b),
        i = "border-box" === n.css(b, "boxSizing", !1, h);if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
      if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
    }return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
  }n.extend({ cssHooks: { opacity: { get: function (a, b) {
          if (b) {
            var c = Fa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function (a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function (a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      }, set: function (a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      } };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];return e;
      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({ css: function (a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function () {
      return Qa(this, !0);
    }, hide: function () {
      return Qa(this);
    }, toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    } });function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function () {
      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    }, run: function (a) {
      var b,
          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function (a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function (a) {
      return a;
    }, swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }function Xa(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;return b && (e.opacity = e.width = a), e;
  }function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
  }function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) if (e = b[d], Ua.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
      }m[d] = q && q[d] || n.style(a, d);
    } else j = void 0;if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;N.remove(a, "fxshow");for (b in m) n.style(a, b, m[b]);
      });for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
    }
  }function $a(a, b) {
    var c, d, e, f, g;for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
      f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
    } else b[d] = e;
  }function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function () {
      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function (b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function (b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
      }] }, tweener: function (a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
    }, prefilters: [Za], prefilter: function (a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function (a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function (a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));(b || !c) && n.dequeue(this, a);
      });
    }, finish: function (a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var ab,
      bb = n.expr.attrHandle;n.fn.extend({ attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function (a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function (a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function (a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
    } }), ab = { set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;n.fn.extend({ prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ prop: function (a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function (a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function (a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var eb = /[\t\r\n\f]/g;function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }n.fn.extend({ addClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
          g = 0;while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");h = n.trim(d), e !== h && c.setAttribute("class", h);
        }
      }return this;
    }, removeClass: function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
          g = 0;while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");h = n.trim(d), e !== h && c.setAttribute("class", h);
        }
      }return this;
    }, toggleClass: function (a, b) {
      var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else (void 0 === a || "boolean" === c) && (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    }, hasClass: function (a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;return !1;
    } });var gb = /\r/g;n.fn.extend({ val: function (a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function (a) {
          return n.trim(a.value);
        } }, select: { get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
            if (b = n(c).val(), f) return b;g.push(b);
          }return g;
        }, set: function (a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var hb = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function (b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function (a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    } }), n.fn.extend({ trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function (a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function () {
        var d = this.ownerDocument || this,
            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      }, teardown: function () {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      } };
  });var ib = a.location,
      jb = n.now(),
      kb = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return (!c || c.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + b), c;
  };var lb = /#.*$/,
      mb = /([?&])_=[^&]*/,
      nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pb = /^(?:GET|HEAD)$/,
      qb = /^\/\//,
      rb = {},
      sb = {},
      tb = "*/".concat("*"),
      ub = d.createElement("a");ub.href = ib.href;function vb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }function wb(a, b, c, d) {
    var e = {},
        f = a === sb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function xb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return d && n.extend(!0, a, d), a;
  }function yb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));if (d) for (e in h) if (h[e] && h[e].test(d)) {
      i.unshift(e);break;
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function zb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
      }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
        b = g(b);
      } catch (l) {
        return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ib.href, type: "GET", isLocal: ob.test(ib.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": tb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) {
      return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a);
    }, ajaxPrefilter: vb(rb), ajaxTransport: vb(sb), ajax: function (b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = { readyState: 0, getResponseHeader: function (a) {
          var b;if (2 === v) {
            if (!h) {
              h = {};while (b = nb.exec(g)) h[b[1].toLowerCase()] = b[2];
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function () {
          return 2 === v ? g : null;
        }, setRequestHeader: function (a, b) {
          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
        }, overrideMimeType: function (a) {
          return v || (m.mimeType = a), this;
        }, statusCode: function (a) {
          var b;if (a) if (2 > v) for (b in a) s[b] = [s[b], a[b]];else x.always(a[x.status]);return this;
        }, abort: function (a) {
          var b = a || w;return e && e.abort(b), z(0, b), this;
        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");try {
          j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) x.setRequestHeader(l, m.headers[l]);if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);if (e = wb(sb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;z(-1, y);
        }
      } else z(-1, "No Transport");function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function (a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function (a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function (a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) a = a.firstElementChild;return a;
      }).append(this)), this);
    }, wrapInner: function (a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function (a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };var Ab = /%20/g,
      Bb = /\[\]$/,
      Cb = /\r?\n/g,
      Db = /^(?:submit|button|image|reset|file)$/i,
      Eb = /^(?:input|select|textarea|keygen)/i;function Fb(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Fb(a + "[" + e + "]", b[e], c, d);
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function (a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) Fb(c, a[c], b, e);return d.join("&").replace(Ab, "+");
  }, n.fn.extend({ serialize: function () {
      return n.param(this.serializeArray());
    }, serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(Cb, "\r\n") };
        }) : { name: b.name, value: c.replace(Cb, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Gb = { 0: 200, 1223: 204 },
      Hb = n.ajaxSettings.xhr();l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function (b) {
    var c, d;return l.cors || Hb && !b.crossDomain ? { send: function (e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) h.setRequestHeader(g, e[g]);c = function (a) {
          return function () {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d();
          });
        }, c = c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (c) throw i;
        }
      }, abort: function () {
        c && c();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;return { send: function (e, f) {
          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function () {
          c && c();
        } };
    }
  });var Ib = [],
      Jb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
      var a = Ib.pop() || n.expando + "_" + jb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Jb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), l.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var Kb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Kb) return Kb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(g, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Lb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function (a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Lb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function () {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) a = a.offsetParent;return a || Ea;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Lb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function (a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function (a, b) {
      return this.off(a, null, b);
    }, delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }, size: function () {
      return this.length;
    } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var Mb = a.jQuery,
      Nb = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Nb), b && a.jQuery === n && (a.jQuery = Mb), n;
  }, b || (a.jQuery = a.$ = n), n;
});
//! moment.js
//! version : 2.12.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function (a, b) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b();
}(this, function () {
  "use strict";
  function a() {
    return Zc.apply(null, arguments);
  }function b(a) {
    Zc = a;
  }function c(a) {
    return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a);
  }function d(a) {
    return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
  }function e(a, b) {
    var c,
        d = [];for (c = 0; c < a.length; ++c) d.push(b(a[c], c));return d;
  }function f(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }function g(a, b) {
    for (var c in b) f(b, c) && (a[c] = b[c]);return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a;
  }function h(a, b, c, d) {
    return Ia(a, b, c, d, !0).utc();
  }function i() {
    return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 };
  }function j(a) {
    return null == a._pf && (a._pf = i()), a._pf;
  }function k(a) {
    if (null == a._isValid) {
      var b = j(a);a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour);
    }return a._isValid;
  }function l(a) {
    var b = h(NaN);return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b;
  }function m(a) {
    return void 0 === a;
  }function n(a, b) {
    var c, d, e;if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), $c.length > 0) for (c in $c) d = $c[c], e = b[d], m(e) || (a[d] = e);return a;
  }function o(b) {
    n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), _c === !1 && (_c = !0, a.updateOffset(this), _c = !1);
  }function p(a) {
    return a instanceof o || null != a && null != a._isAMomentObject;
  }function q(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a);
  }function r(a) {
    var b = +a,
        c = 0;return 0 !== b && isFinite(b) && (c = q(b)), c;
  }function s(a, b, c) {
    var d,
        e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;return g + f;
  }function t(b) {
    a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
  }function u(a, b) {
    var c = !0;return g(function () {
      return c && (t(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + new Error().stack), c = !1), b.apply(this, arguments);
    }, b);
  }function v(a, b) {
    ad[a] || (t(b), ad[a] = !0);
  }function w(a) {
    return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
  }function x(a) {
    return "[object Object]" === Object.prototype.toString.call(a);
  }function y(a) {
    var b, c;for (c in a) b = a[c], w(b) ? this[c] = b : this["_" + c] = b;this._config = a, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
  }function z(a, b) {
    var c,
        d = g({}, a);for (c in b) f(b, c) && (x(a[c]) && x(b[c]) ? (d[c] = {}, g(d[c], a[c]), g(d[c], b[c])) : null != b[c] ? d[c] = b[c] : delete d[c]);return d;
  }function A(a) {
    null != a && this.set(a);
  }function B(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }function C(a) {
    for (var b, c, d, e, f = 0; f < a.length;) {
      for (e = B(a[f]).split("-"), b = e.length, c = B(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
        if (d = D(e.slice(0, b).join("-"))) return d;if (c && c.length >= b && s(e, c, !0) >= b - 1) break;b--;
      }f++;
    }return null;
  }function D(a) {
    var b = null;if (!cd[a] && "undefined" != typeof module && module && module.exports) try {
      b = bd._abbr, require("./locale/" + a), E(b);
    } catch (c) {}return cd[a];
  }function E(a, b) {
    var c;return a && (c = m(b) ? H(a) : F(a, b), c && (bd = c)), bd._abbr;
  }function F(a, b) {
    return null !== b ? (b.abbr = a, null != cd[a] ? (v("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), b = z(cd[a]._config, b)) : null != b.parentLocale && (null != cd[b.parentLocale] ? b = z(cd[b.parentLocale]._config, b) : v("parentLocaleUndefined", "specified parentLocale is not defined yet")), cd[a] = new A(b), E(a), cd[a]) : (delete cd[a], null);
  }function G(a, b) {
    if (null != b) {
      var c;null != cd[a] && (b = z(cd[a]._config, b)), c = new A(b), c.parentLocale = cd[a], cd[a] = c, E(a);
    } else null != cd[a] && (null != cd[a].parentLocale ? cd[a] = cd[a].parentLocale : null != cd[a] && delete cd[a]);return cd[a];
  }function H(a) {
    var b;if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return bd;if (!c(a)) {
      if (b = D(a)) return b;a = [a];
    }return C(a);
  }function I() {
    return Object.keys(cd);
  }function J(a, b) {
    var c = a.toLowerCase();dd[c] = dd[c + "s"] = dd[b] = a;
  }function K(a) {
    return "string" == typeof a ? dd[a] || dd[a.toLowerCase()] : void 0;
  }function L(a) {
    var b,
        c,
        d = {};for (c in a) f(a, c) && (b = K(c), b && (d[b] = a[c]));return d;
  }function M(b, c) {
    return function (d) {
      return null != d ? (O(this, b, d), a.updateOffset(this, c), this) : N(this, b);
    };
  }function N(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
  }function O(a, b, c) {
    a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
  }function P(a, b) {
    var c;if ("object" == typeof a) for (c in a) this.set(c, a[c]);else if (a = K(a), w(this[a])) return this[a](b);return this;
  }function Q(a, b, c) {
    var d = "" + Math.abs(a),
        e = b - d.length,
        f = a >= 0;return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
  }function R(a, b, c, d) {
    var e = d;"string" == typeof d && (e = function () {
      return this[d]();
    }), a && (hd[a] = e), b && (hd[b[0]] = function () {
      return Q(e.apply(this, arguments), b[1], b[2]);
    }), c && (hd[c] = function () {
      return this.localeData().ordinal(e.apply(this, arguments), a);
    });
  }function S(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
  }function T(a) {
    var b,
        c,
        d = a.match(ed);for (b = 0, c = d.length; c > b; b++) hd[d[b]] ? d[b] = hd[d[b]] : d[b] = S(d[b]);return function (e) {
      var f = "";for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];return f;
    };
  }function U(a, b) {
    return a.isValid() ? (b = V(b, a.localeData()), gd[b] = gd[b] || T(b), gd[b](a)) : a.localeData().invalidDate();
  }function V(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }var d = 5;for (fd.lastIndex = 0; d >= 0 && fd.test(a);) a = a.replace(fd, c), fd.lastIndex = 0, d -= 1;return a;
  }function W(a, b, c) {
    zd[a] = w(b) ? b : function (a, d) {
      return a && c ? c : b;
    };
  }function X(a, b) {
    return f(zd, a) ? zd[a](b._strict, b._locale) : new RegExp(Y(a));
  }function Y(a) {
    return Z(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
      return b || c || d || e;
    }));
  }function Z(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }function $(a, b) {
    var c,
        d = b;for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
      c[b] = r(a);
    }), c = 0; c < a.length; c++) Ad[a[c]] = d;
  }function _(a, b) {
    $(a, function (a, c, d, e) {
      d._w = d._w || {}, b(a, d._w, d, e);
    });
  }function aa(a, b, c) {
    null != b && f(Ad, a) && Ad[a](b, c._a, c, a);
  }function ba(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }function ca(a, b) {
    return c(this._months) ? this._months[a.month()] : this._months[Kd.test(b) ? "format" : "standalone"][a.month()];
  }function da(a, b) {
    return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Kd.test(b) ? "format" : "standalone"][a.month()];
  }function ea(a, b, c) {
    var d, e, f;for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
      if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;if (!c && this._monthsParse[d].test(a)) return d;
    }
  }function fa(a, b) {
    var c;if (!a.isValid()) return a;if ("string" == typeof b) if (/^\d+$/.test(b)) b = r(b);else if (b = a.localeData().monthsParse(b), "number" != typeof b) return a;return c = Math.min(a.date(), ba(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a;
  }function ga(b) {
    return null != b ? (fa(this, b), a.updateOffset(this, !0), this) : N(this, "Month");
  }function ha() {
    return ba(this.year(), this.month());
  }function ia(a) {
    return this._monthsParseExact ? (f(this, "_monthsRegex") || ka.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }function ja(a) {
    return this._monthsParseExact ? (f(this, "_monthsRegex") || ka.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex;
  }function ka() {
    function a(a, b) {
      return b.length - a.length;
    }var b,
        c,
        d = [],
        e = [],
        f = [];for (b = 0; 12 > b; b++) c = h([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = Z(d[b]), e[b] = Z(e[b]), f[b] = Z(f[b]);this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")$", "i");
  }function la(a) {
    var b,
        c = a._a;return c && -2 === j(a).overflow && (b = c[Cd] < 0 || c[Cd] > 11 ? Cd : c[Dd] < 1 || c[Dd] > ba(c[Bd], c[Cd]) ? Dd : c[Ed] < 0 || c[Ed] > 24 || 24 === c[Ed] && (0 !== c[Fd] || 0 !== c[Gd] || 0 !== c[Hd]) ? Ed : c[Fd] < 0 || c[Fd] > 59 ? Fd : c[Gd] < 0 || c[Gd] > 59 ? Gd : c[Hd] < 0 || c[Hd] > 999 ? Hd : -1, j(a)._overflowDayOfYear && (Bd > b || b > Dd) && (b = Dd), j(a)._overflowWeeks && -1 === b && (b = Id), j(a)._overflowWeekday && -1 === b && (b = Jd), j(a).overflow = b), a;
  }function ma(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = a._i,
        i = Pd.exec(h) || Qd.exec(h);if (i) {
      for (j(a).iso = !0, b = 0, c = Sd.length; c > b; b++) if (Sd[b][1].exec(i[1])) {
        e = Sd[b][0], d = Sd[b][2] !== !1;break;
      }if (null == e) return void (a._isValid = !1);if (i[3]) {
        for (b = 0, c = Td.length; c > b; b++) if (Td[b][1].exec(i[3])) {
          f = (i[2] || " ") + Td[b][0];break;
        }if (null == f) return void (a._isValid = !1);
      }if (!d && null != f) return void (a._isValid = !1);if (i[4]) {
        if (!Rd.exec(i[4])) return void (a._isValid = !1);g = "Z";
      }a._f = e + (f || "") + (g || ""), Ba(a);
    } else a._isValid = !1;
  }function na(b) {
    var c = Ud.exec(b._i);return null !== c ? void (b._d = new Date(+c[1])) : (ma(b), void (b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))));
  }function oa(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
  }function pa(a) {
    var b = new Date(Date.UTC.apply(null, arguments));return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b;
  }function qa(a) {
    return ra(a) ? 366 : 365;
  }function ra(a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
  }function sa() {
    return ra(this.year());
  }function ta(a, b, c) {
    var d = 7 + b - c,
        e = (7 + pa(a, 0, d).getUTCDay() - b) % 7;return -e + d - 1;
  }function ua(a, b, c, d, e) {
    var f,
        g,
        h = (7 + c - d) % 7,
        i = ta(a, d, e),
        j = 1 + 7 * (b - 1) + h + i;return 0 >= j ? (f = a - 1, g = qa(f) + j) : j > qa(a) ? (f = a + 1, g = j - qa(a)) : (f = a, g = j), { year: f, dayOfYear: g };
  }function va(a, b, c) {
    var d,
        e,
        f = ta(a.year(), b, c),
        g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;return 1 > g ? (e = a.year() - 1, d = g + wa(e, b, c)) : g > wa(a.year(), b, c) ? (d = g - wa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), { week: d, year: e };
  }function wa(a, b, c) {
    var d = ta(a, b, c),
        e = ta(a + 1, b, c);return (qa(a) - d + e) / 7;
  }function xa(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }function ya(b) {
    var c = new Date(a.now());return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()];
  }function za(a) {
    var b,
        c,
        d,
        e,
        f = [];if (!a._d) {
      for (d = ya(a), a._w && null == a._a[Dd] && null == a._a[Cd] && Aa(a), a._dayOfYear && (e = xa(a._a[Bd], d[Bd]), a._dayOfYear > qa(e) && (j(a)._overflowDayOfYear = !0), c = pa(e, 0, a._dayOfYear), a._a[Cd] = c.getUTCMonth(), a._a[Dd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];24 === a._a[Ed] && 0 === a._a[Fd] && 0 === a._a[Gd] && 0 === a._a[Hd] && (a._nextDay = !0, a._a[Ed] = 0), a._d = (a._useUTC ? pa : oa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Ed] = 24);
    }
  }function Aa(a) {
    var b, c, d, e, f, g, h, i;b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = xa(b.GG, a._a[Bd], va(Ja(), 1, 4).year), d = xa(b.W, 1), e = xa(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = xa(b.gg, a._a[Bd], va(Ja(), f, g).year), d = xa(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > wa(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = ua(c, d, e, f, g), a._a[Bd] = h.year, a._dayOfYear = h.dayOfYear);
  }function Ba(b) {
    if (b._f === a.ISO_8601) return void ma(b);b._a = [], j(b).empty = !0;var c,
        d,
        e,
        f,
        g,
        h = "" + b._i,
        i = h.length,
        k = 0;for (e = V(b._f, b._locale).match(ed) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(X(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), hd[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), aa(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[Ed] <= 12 && b._a[Ed] > 0 && (j(b).bigHour = void 0), b._a[Ed] = Ca(b._locale, b._a[Ed], b._meridiem), za(b), la(b);
  }function Ca(a, b, c) {
    var d;return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b;
  }function Da(a) {
    var b, c, d, e, f;if (0 === a._f.length) return j(a).invalidFormat = !0, void (a._d = new Date(NaN));for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], Ba(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));g(a, c || b);
  }function Ea(a) {
    if (!a._d) {
      var b = L(a._i);a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
        return a && parseInt(a, 10);
      }), za(a);
    }
  }function Fa(a) {
    var b = new o(la(Ga(a)));return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
  }function Ga(a) {
    var b = a._i,
        e = a._f;return a._locale = a._locale || H(a._l), null === b || void 0 === e && "" === b ? l({ nullInput: !0 }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(la(b)) : (c(e) ? Da(a) : e ? Ba(a) : d(b) ? a._d = b : Ha(a), k(a) || (a._d = null), a));
  }function Ha(b) {
    var f = b._i;void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? na(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
      return parseInt(a, 10);
    }), za(b)) : "object" == typeof f ? Ea(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b);
  }function Ia(a, b, c, d, e) {
    var f = {};return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, Fa(f);
  }function Ja(a, b, c, d) {
    return Ia(a, b, c, d, !1);
  }function Ka(a, b) {
    var d, e;if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Ja();for (d = b[0], e = 1; e < b.length; ++e) (!b[e].isValid() || b[e][a](d)) && (d = b[e]);return d;
  }function La() {
    var a = [].slice.call(arguments, 0);return Ka("isBefore", a);
  }function Ma() {
    var a = [].slice.call(arguments, 0);return Ka("isAfter", a);
  }function Na(a) {
    var b = L(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = H(), this._bubble();
  }function Oa(a) {
    return a instanceof Na;
  }function Pa(a, b) {
    R(a, 0, 0, function () {
      var a = this.utcOffset(),
          c = "+";return 0 > a && (a = -a, c = "-"), c + Q(~ ~(a / 60), 2) + b + Q(~ ~a % 60, 2);
    });
  }function Qa(a, b) {
    var c = (b || "").match(a) || [],
        d = c[c.length - 1] || [],
        e = (d + "").match(Zd) || ["-", 0, 0],
        f = +(60 * e[1]) + r(e[2]);return "+" === e[0] ? f : -f;
  }function Ra(b, c) {
    var e, f;return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Ja(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Ja(b).local();
  }function Sa(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }function Ta(b, c) {
    var d,
        e = this._offset || 0;return this.isValid() ? null != b ? ("string" == typeof b ? b = Qa(wd, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Sa(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? ib(this, cb(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Sa(this) : null != b ? this : NaN;
  }function Ua(a, b) {
    return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
  }function Va(a) {
    return this.utcOffset(0, a);
  }function Wa(a) {
    return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Sa(this), "m")), this;
  }function Xa() {
    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Qa(vd, this._i)), this;
  }function Ya(a) {
    return this.isValid() ? (a = a ? Ja(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1;
  }function Za() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }function $a() {
    if (!m(this._isDSTShifted)) return this._isDSTShifted;var a = {};if (n(a, this), a = Ga(a), a._a) {
      var b = a._isUTC ? h(a._a) : Ja(a._a);this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0;
    } else this._isDSTShifted = !1;return this._isDSTShifted;
  }function _a() {
    return this.isValid() ? !this._isUTC : !1;
  }function ab() {
    return this.isValid() ? this._isUTC : !1;
  }function bb() {
    return this.isValid() ? this._isUTC && 0 === this._offset : !1;
  }function cb(a, b) {
    var c,
        d,
        e,
        g = a,
        h = null;return Oa(a) ? g = { ms: a._milliseconds, d: a._days, M: a._months } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = $d.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = { y: 0, d: r(h[Dd]) * c, h: r(h[Ed]) * c, m: r(h[Fd]) * c, s: r(h[Gd]) * c, ms: r(h[Hd]) * c }) : (h = _d.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = { y: db(h[2], c), M: db(h[3], c), w: db(h[4], c), d: db(h[5], c), h: db(h[6], c), m: db(h[7], c), s: db(h[8], c) }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = fb(Ja(g.from), Ja(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Na(g), Oa(a) && f(a, "_locale") && (d._locale = a._locale), d;
  }function db(a, b) {
    var c = a && parseFloat(a.replace(",", "."));return (isNaN(c) ? 0 : c) * b;
  }function eb(a, b) {
    var c = { milliseconds: 0, months: 0 };return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
  }function fb(a, b) {
    var c;return a.isValid() && b.isValid() ? (b = Ra(b, a), a.isBefore(b) ? c = eb(a, b) : (c = eb(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
  }function gb(a) {
    return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a);
  }function hb(a, b) {
    return function (c, d) {
      var e, f;return null === d || isNaN(+d) || (v(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = cb(c, d), ib(this, e, a), this;
    };
  }function ib(b, c, d, e) {
    var f = c._milliseconds,
        g = gb(c._days),
        h = gb(c._months);b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && O(b, "Date", N(b, "Date") + g * d), h && fa(b, N(b, "Month") + h * d), e && a.updateOffset(b, g || h));
  }function jb(a, b) {
    var c = a || Ja(),
        d = Ra(c, this).startOf("day"),
        e = this.diff(d, "days", !0),
        f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
        g = b && (w(b[f]) ? b[f]() : b[f]);return this.format(g || this.localeData().calendar(f, this, Ja(c)));
  }function kb() {
    return new o(this);
  }function lb(a, b) {
    var c = p(a) ? a : Ja(a);return this.isValid() && c.isValid() ? (b = K(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1;
  }function mb(a, b) {
    var c = p(a) ? a : Ja(a);return this.isValid() && c.isValid() ? (b = K(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1;
  }function nb(a, b, c) {
    return this.isAfter(a, c) && this.isBefore(b, c);
  }function ob(a, b) {
    var c,
        d = p(a) ? a : Ja(a);return this.isValid() && d.isValid() ? (b = K(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1;
  }function pb(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b);
  }function qb(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b);
  }function rb(a, b, c) {
    var d, e, f, g;return this.isValid() ? (d = Ra(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = sb(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : NaN) : NaN;
  }function sb(a, b) {
    var c,
        d,
        e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d);
  }function tb() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }function ub() {
    var a = this.clone().utc();return 0 < a.year() && a.year() <= 9999 ? w(Date.prototype.toISOString) ? this.toDate().toISOString() : U(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : U(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }function vb(b) {
    var c = U(this, b || a.defaultFormat);return this.localeData().postformat(c);
  }function wb(a, b) {
    return this.isValid() && (p(a) && a.isValid() || Ja(a).isValid()) ? cb({ to: this, from: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function xb(a) {
    return this.from(Ja(), a);
  }function yb(a, b) {
    return this.isValid() && (p(a) && a.isValid() || Ja(a).isValid()) ? cb({ from: this, to: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function zb(a) {
    return this.to(Ja(), a);
  }function Ab(a) {
    var b;return void 0 === a ? this._locale._abbr : (b = H(a), null != b && (this._locale = b), this);
  }function Bb() {
    return this._locale;
  }function Cb(a) {
    switch (a = K(a)) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this;
  }function Db(a) {
    return a = K(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms");
  }function Eb() {
    return +this._d - 6e4 * (this._offset || 0);
  }function Fb() {
    return Math.floor(+this / 1e3);
  }function Gb() {
    return this._offset ? new Date(+this) : this._d;
  }function Hb() {
    var a = this;return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()];
  }function Ib() {
    var a = this;return { years: a.year(), months: a.month(), date: a.date(), hours: a.hours(), minutes: a.minutes(), seconds: a.seconds(), milliseconds: a.milliseconds() };
  }function Jb() {
    return this.isValid() ? this.toISOString() : null;
  }function Kb() {
    return k(this);
  }function Lb() {
    return g({}, j(this));
  }function Mb() {
    return j(this).overflow;
  }function Nb() {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }function Ob(a, b) {
    R(0, [a, a.length], 0, b);
  }function Pb(a) {
    return Tb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }function Qb(a) {
    return Tb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
  }function Rb() {
    return wa(this.year(), 1, 4);
  }function Sb() {
    var a = this.localeData()._week;return wa(this.year(), a.dow, a.doy);
  }function Tb(a, b, c, d, e) {
    var f;return null == a ? va(this, d, e).year : (f = wa(a, d, e), b > f && (b = f), Ub.call(this, a, b, c, d, e));
  }function Ub(a, b, c, d, e) {
    var f = ua(a, b, c, d, e),
        g = pa(f.year, 0, f.dayOfYear);return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
  }function Vb(a) {
    return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
  }function Wb(a) {
    return va(a, this._week.dow, this._week.doy).week;
  }function Xb() {
    return this._week.dow;
  }function Yb() {
    return this._week.doy;
  }function Zb(a) {
    var b = this.localeData().week(this);return null == a ? b : this.add(7 * (a - b), "d");
  }function $b(a) {
    var b = va(this, 1, 4).week;return null == a ? b : this.add(7 * (a - b), "d");
  }function _b(a, b) {
    return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
  }function ac(a, b) {
    return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()];
  }function bc(a) {
    return this._weekdaysShort[a.day()];
  }function cc(a) {
    return this._weekdaysMin[a.day()];
  }function dc(a, b, c) {
    var d, e, f;for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
      if (e = Ja([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;if (!c && this._weekdaysParse[d].test(a)) return d;
    }
  }function ec(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != a ? (a = _b(a, this.localeData()), this.add(a - b, "d")) : b;
  }function fc(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == a ? b : this.add(a - b, "d");
  }function gc(a) {
    return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN;
  }function hc(a) {
    var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == a ? b : this.add(a - b, "d");
  }function ic() {
    return this.hours() % 12 || 12;
  }function jc(a, b) {
    R(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }function kc(a, b) {
    return b._meridiemParse;
  }function lc(a) {
    return "p" === (a + "").toLowerCase().charAt(0);
  }function mc(a, b, c) {
    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
  }function nc(a, b) {
    b[Hd] = r(1e3 * ("0." + a));
  }function oc() {
    return this._isUTC ? "UTC" : "";
  }function pc() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }function qc(a) {
    return Ja(1e3 * a);
  }function rc() {
    return Ja.apply(null, arguments).parseZone();
  }function sc(a, b, c) {
    var d = this._calendar[a];return w(d) ? d.call(b, c) : d;
  }function tc(a) {
    var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
      return a.slice(1);
    }), this._longDateFormat[a]);
  }function uc() {
    return this._invalidDate;
  }function vc(a) {
    return this._ordinal.replace("%d", a);
  }function wc(a) {
    return a;
  }function xc(a, b, c, d) {
    var e = this._relativeTime[c];return w(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
  }function yc(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];return w(c) ? c(b) : c.replace(/%s/i, b);
  }function zc(a, b, c, d) {
    var e = H(),
        f = h().set(d, b);return e[c](f, a);
  }function Ac(a, b, c, d, e) {
    if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return zc(a, b, c, e);var f,
        g = [];for (f = 0; d > f; f++) g[f] = zc(a, f, c, e);return g;
  }function Bc(a, b) {
    return Ac(a, b, "months", 12, "month");
  }function Cc(a, b) {
    return Ac(a, b, "monthsShort", 12, "month");
  }function Dc(a, b) {
    return Ac(a, b, "weekdays", 7, "day");
  }function Ec(a, b) {
    return Ac(a, b, "weekdaysShort", 7, "day");
  }function Fc(a, b) {
    return Ac(a, b, "weekdaysMin", 7, "day");
  }function Gc() {
    var a = this._data;return this._milliseconds = xe(this._milliseconds), this._days = xe(this._days), this._months = xe(this._months), a.milliseconds = xe(a.milliseconds), a.seconds = xe(a.seconds), a.minutes = xe(a.minutes), a.hours = xe(a.hours), a.months = xe(a.months), a.years = xe(a.years), this;
  }function Hc(a, b, c, d) {
    var e = cb(b, c);return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble();
  }function Ic(a, b) {
    return Hc(this, a, b, 1);
  }function Jc(a, b) {
    return Hc(this, a, b, -1);
  }function Kc(a) {
    return 0 > a ? Math.floor(a) : Math.ceil(a);
  }function Lc() {
    var a,
        b,
        c,
        d,
        e,
        f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Kc(Nc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Mc(g)), h += e, g -= Kc(Nc(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this;
  }function Mc(a) {
    return 4800 * a / 146097;
  }function Nc(a) {
    return 146097 * a / 4800;
  }function Oc(a) {
    var b,
        c,
        d = this._milliseconds;if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Mc(b), "month" === a ? c : c / 12;switch (b = this._days + Math.round(Nc(this._months)), a) {case "week":
        return b / 7 + d / 6048e5;case "day":
        return b + d / 864e5;case "hour":
        return 24 * b + d / 36e5;case "minute":
        return 1440 * b + d / 6e4;case "second":
        return 86400 * b + d / 1e3;case "millisecond":
        return Math.floor(864e5 * b) + d;default:
        throw new Error("Unknown unit " + a);}
  }function Pc() {
    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12);
  }function Qc(a) {
    return function () {
      return this.as(a);
    };
  }function Rc(a) {
    return a = K(a), this[a + "s"]();
  }function Sc(a) {
    return function () {
      return this._data[a];
    };
  }function Tc() {
    return q(this.days() / 7);
  }function Uc(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }function Vc(a, b, c) {
    var d = cb(a).abs(),
        e = Ne(d.as("s")),
        f = Ne(d.as("m")),
        g = Ne(d.as("h")),
        h = Ne(d.as("d")),
        i = Ne(d.as("M")),
        j = Ne(d.as("y")),
        k = e < Oe.s && ["s", e] || 1 >= f && ["m"] || f < Oe.m && ["mm", f] || 1 >= g && ["h"] || g < Oe.h && ["hh", g] || 1 >= h && ["d"] || h < Oe.d && ["dd", h] || 1 >= i && ["M"] || i < Oe.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];return k[2] = b, k[3] = +a > 0, k[4] = c, Uc.apply(null, k);
  }function Wc(a, b) {
    return void 0 === Oe[a] ? !1 : void 0 === b ? Oe[a] : (Oe[a] = b, !0);
  }function Xc(a) {
    var b = this.localeData(),
        c = Vc(this, !a, b);return a && (c = b.pastFuture(+this, c)), b.postformat(c);
  }function Yc() {
    var a,
        b,
        c,
        d = Pe(this._milliseconds) / 1e3,
        e = Pe(this._days),
        f = Pe(this._months);a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;var g = c,
        h = f,
        i = e,
        j = b,
        k = a,
        l = d,
        m = this.asSeconds();return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
  }var Zc,
      $c = a.momentProperties = [],
      _c = !1,
      ad = {};a.suppressDeprecationWarnings = !1;var bd,
      cd = {},
      dd = {},
      ed = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      fd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      gd = {},
      hd = {},
      id = /\d/,
      jd = /\d\d/,
      kd = /\d{3}/,
      ld = /\d{4}/,
      md = /[+-]?\d{6}/,
      nd = /\d\d?/,
      od = /\d\d\d\d?/,
      pd = /\d\d\d\d\d\d?/,
      qd = /\d{1,3}/,
      rd = /\d{1,4}/,
      sd = /[+-]?\d{1,6}/,
      td = /\d+/,
      ud = /[+-]?\d+/,
      vd = /Z|[+-]\d\d:?\d\d/gi,
      wd = /Z|[+-]\d\d(?::?\d\d)?/gi,
      xd = /[+-]?\d+(\.\d{1,3})?/,
      yd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      zd = {},
      Ad = {},
      Bd = 0,
      Cd = 1,
      Dd = 2,
      Ed = 3,
      Fd = 4,
      Gd = 5,
      Hd = 6,
      Id = 7,
      Jd = 8;R("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), R("MMM", 0, 0, function (a) {
    return this.localeData().monthsShort(this, a);
  }), R("MMMM", 0, 0, function (a) {
    return this.localeData().months(this, a);
  }), J("month", "M"), W("M", nd), W("MM", nd, jd), W("MMM", function (a, b) {
    return b.monthsShortRegex(a);
  }), W("MMMM", function (a, b) {
    return b.monthsRegex(a);
  }), $(["M", "MM"], function (a, b) {
    b[Cd] = r(a) - 1;
  }), $(["MMM", "MMMM"], function (a, b, c, d) {
    var e = c._locale.monthsParse(a, d, c._strict);null != e ? b[Cd] = e : j(c).invalidMonth = a;
  });var Kd = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
      Ld = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      Md = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      Nd = yd,
      Od = yd,
      Pd = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
      Qd = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
      Rd = /Z|[+-]\d\d(?::?\d\d)?/,
      Sd = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      Td = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      Ud = /^\/?Date\((\-?\d+)/i;a.createFromInputFallback = u("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
    a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
  }), R("Y", 0, 0, function () {
    var a = this.year();return 9999 >= a ? "" + a : "+" + a;
  }), R(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), W("Y", ud), W("YY", nd, jd), W("YYYY", rd, ld), W("YYYYY", sd, md), W("YYYYYY", sd, md), $(["YYYYY", "YYYYYY"], Bd), $("YYYY", function (b, c) {
    c[Bd] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b);
  }), $("YY", function (b, c) {
    c[Bd] = a.parseTwoDigitYear(b);
  }), $("Y", function (a, b) {
    b[Bd] = parseInt(a, 10);
  }), a.parseTwoDigitYear = function (a) {
    return r(a) + (r(a) > 68 ? 1900 : 2e3);
  };var Vd = M("FullYear", !1);a.ISO_8601 = function () {};var Wd = u("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
    var a = Ja.apply(null, arguments);return this.isValid() && a.isValid() ? this > a ? this : a : l();
  }),
      Xd = u("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
    var a = Ja.apply(null, arguments);return this.isValid() && a.isValid() ? a > this ? this : a : l();
  }),
      Yd = function () {
    return Date.now ? Date.now() : +new Date();
  };Pa("Z", ":"), Pa("ZZ", ""), W("Z", wd), W("ZZ", wd), $(["Z", "ZZ"], function (a, b, c) {
    c._useUTC = !0, c._tzm = Qa(wd, a);
  });var Zd = /([\+\-]|\d\d)/gi;a.updateOffset = function () {};var $d = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
      _d = /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;cb.fn = Na.prototype;var ae = hb(1, "add"),
      be = hb(-1, "subtract");a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";var ce = u("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
    return void 0 === a ? this.localeData() : this.locale(a);
  });R(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), R(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), Ob("gggg", "weekYear"), Ob("ggggg", "weekYear"), Ob("GGGG", "isoWeekYear"), Ob("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), W("G", ud), W("g", ud), W("GG", nd, jd), W("gg", nd, jd), W("GGGG", rd, ld), W("gggg", rd, ld), W("GGGGG", sd, md), W("ggggg", sd, md), _(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
    b[d.substr(0, 2)] = r(a);
  }), _(["gg", "GG"], function (b, c, d, e) {
    c[e] = a.parseTwoDigitYear(b);
  }), R("Q", 0, "Qo", "quarter"), J("quarter", "Q"), W("Q", id), $("Q", function (a, b) {
    b[Cd] = 3 * (r(a) - 1);
  }), R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), W("w", nd), W("ww", nd, jd), W("W", nd), W("WW", nd, jd), _(["w", "ww", "W", "WW"], function (a, b, c, d) {
    b[d.substr(0, 1)] = r(a);
  });var de = { dow: 0, doy: 6 };R("D", ["DD", 2], "Do", "date"), J("date", "D"), W("D", nd), W("DD", nd, jd), W("Do", function (a, b) {
    return a ? b._ordinalParse : b._ordinalParseLenient;
  }), $(["D", "DD"], Dd), $("Do", function (a, b) {
    b[Dd] = r(a.match(nd)[0], 10);
  });var ee = M("Date", !0);R("d", 0, "do", "day"), R("dd", 0, 0, function (a) {
    return this.localeData().weekdaysMin(this, a);
  }), R("ddd", 0, 0, function (a) {
    return this.localeData().weekdaysShort(this, a);
  }), R("dddd", 0, 0, function (a) {
    return this.localeData().weekdays(this, a);
  }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), W("d", nd), W("e", nd), W("E", nd), W("dd", yd), W("ddd", yd), W("dddd", yd), _(["dd", "ddd", "dddd"], function (a, b, c, d) {
    var e = c._locale.weekdaysParse(a, d, c._strict);null != e ? b.d = e : j(c).invalidWeekday = a;
  }), _(["d", "e", "E"], function (a, b, c, d) {
    b[d] = r(a);
  });var fe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      ge = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      he = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), W("DDD", qd), W("DDDD", kd), $(["DDD", "DDDD"], function (a, b, c) {
    c._dayOfYear = r(a);
  }), R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, ic), R("hmm", 0, 0, function () {
    return "" + ic.apply(this) + Q(this.minutes(), 2);
  }), R("hmmss", 0, 0, function () {
    return "" + ic.apply(this) + Q(this.minutes(), 2) + Q(this.seconds(), 2);
  }), R("Hmm", 0, 0, function () {
    return "" + this.hours() + Q(this.minutes(), 2);
  }), R("Hmmss", 0, 0, function () {
    return "" + this.hours() + Q(this.minutes(), 2) + Q(this.seconds(), 2);
  }), jc("a", !0), jc("A", !1), J("hour", "h"), W("a", kc), W("A", kc), W("H", nd), W("h", nd), W("HH", nd, jd), W("hh", nd, jd), W("hmm", od), W("hmmss", pd), W("Hmm", od), W("Hmmss", pd), $(["H", "HH"], Ed), $(["a", "A"], function (a, b, c) {
    c._isPm = c._locale.isPM(a), c._meridiem = a;
  }), $(["h", "hh"], function (a, b, c) {
    b[Ed] = r(a), j(c).bigHour = !0;
  }), $("hmm", function (a, b, c) {
    var d = a.length - 2;b[Ed] = r(a.substr(0, d)), b[Fd] = r(a.substr(d)), j(c).bigHour = !0;
  }), $("hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[Ed] = r(a.substr(0, d)), b[Fd] = r(a.substr(d, 2)), b[Gd] = r(a.substr(e)), j(c).bigHour = !0;
  }), $("Hmm", function (a, b, c) {
    var d = a.length - 2;b[Ed] = r(a.substr(0, d)), b[Fd] = r(a.substr(d));
  }), $("Hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[Ed] = r(a.substr(0, d)), b[Fd] = r(a.substr(d, 2)), b[Gd] = r(a.substr(e));
  });var ie = /[ap]\.?m?\.?/i,
      je = M("Hours", !0);R("m", ["mm", 2], 0, "minute"), J("minute", "m"), W("m", nd), W("mm", nd, jd), $(["m", "mm"], Fd);var ke = M("Minutes", !1);R("s", ["ss", 2], 0, "second"), J("second", "s"), W("s", nd), W("ss", nd, jd), $(["s", "ss"], Gd);var le = M("Seconds", !1);R("S", 0, 0, function () {
    return ~ ~(this.millisecond() / 100);
  }), R(0, ["SS", 2], 0, function () {
    return ~ ~(this.millisecond() / 10);
  }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), R(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), R(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), R(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), R(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), R(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), J("millisecond", "ms"), W("S", qd, id), W("SS", qd, jd), W("SSS", qd, kd);var me;for (me = "SSSS"; me.length <= 9; me += "S") W(me, td);for (me = "S"; me.length <= 9; me += "S") $(me, nc);var ne = M("Milliseconds", !1);R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");var oe = o.prototype;oe.add = ae, oe.calendar = jb, oe.clone = kb, oe.diff = rb, oe.endOf = Db, oe.format = vb, oe.from = wb, oe.fromNow = xb, oe.to = yb, oe.toNow = zb, oe.get = P, oe.invalidAt = Mb, oe.isAfter = lb, oe.isBefore = mb, oe.isBetween = nb, oe.isSame = ob, oe.isSameOrAfter = pb, oe.isSameOrBefore = qb, oe.isValid = Kb, oe.lang = ce, oe.locale = Ab, oe.localeData = Bb, oe.max = Xd, oe.min = Wd, oe.parsingFlags = Lb, oe.set = P, oe.startOf = Cb, oe.subtract = be, oe.toArray = Hb, oe.toObject = Ib, oe.toDate = Gb, oe.toISOString = ub, oe.toJSON = Jb, oe.toString = tb, oe.unix = Fb, oe.valueOf = Eb, oe.creationData = Nb, oe.year = Vd, oe.isLeapYear = sa, oe.weekYear = Pb, oe.isoWeekYear = Qb, oe.quarter = oe.quarters = Vb, oe.month = ga, oe.daysInMonth = ha, oe.week = oe.weeks = Zb, oe.isoWeek = oe.isoWeeks = $b, oe.weeksInYear = Sb, oe.isoWeeksInYear = Rb, oe.date = ee, oe.day = oe.days = ec, oe.weekday = fc, oe.isoWeekday = gc, oe.dayOfYear = hc, oe.hour = oe.hours = je, oe.minute = oe.minutes = ke, oe.second = oe.seconds = le, oe.millisecond = oe.milliseconds = ne, oe.utcOffset = Ta, oe.utc = Va, oe.local = Wa, oe.parseZone = Xa, oe.hasAlignedHourOffset = Ya, oe.isDST = Za, oe.isDSTShifted = $a, oe.isLocal = _a, oe.isUtcOffset = ab, oe.isUtc = bb, oe.isUTC = bb, oe.zoneAbbr = oc, oe.zoneName = pc, oe.dates = u("dates accessor is deprecated. Use date instead.", ee), oe.months = u("months accessor is deprecated. Use month instead", ga), oe.years = u("years accessor is deprecated. Use year instead", Vd), oe.zone = u("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ua);var pe = oe,
      qe = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
      re = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
      se = "Invalid date",
      te = "%d",
      ue = /\d{1,2}/,
      ve = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
      we = A.prototype;we._calendar = qe, we.calendar = sc, we._longDateFormat = re, we.longDateFormat = tc, we._invalidDate = se, we.invalidDate = uc, we._ordinal = te, we.ordinal = vc, we._ordinalParse = ue, we.preparse = wc, we.postformat = wc, we._relativeTime = ve, we.relativeTime = xc, we.pastFuture = yc, we.set = y, we.months = ca, we._months = Ld, we.monthsShort = da, we._monthsShort = Md, we.monthsParse = ea, we._monthsRegex = Od, we.monthsRegex = ja, we._monthsShortRegex = Nd, we.monthsShortRegex = ia, we.week = Wb, we._week = de, we.firstDayOfYear = Yb, we.firstDayOfWeek = Xb, we.weekdays = ac, we._weekdays = fe, we.weekdaysMin = cc, we._weekdaysMin = he, we.weekdaysShort = bc, we._weekdaysShort = ge, we.weekdaysParse = dc, we.isPM = lc, we._meridiemParse = ie, we.meridiem = mc, E("en", { ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (a) {
      var b = a % 10,
          c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    } }), a.lang = u("moment.lang is deprecated. Use moment.locale instead.", E), a.langData = u("moment.langData is deprecated. Use moment.localeData instead.", H);var xe = Math.abs,
      ye = Qc("ms"),
      ze = Qc("s"),
      Ae = Qc("m"),
      Be = Qc("h"),
      Ce = Qc("d"),
      De = Qc("w"),
      Ee = Qc("M"),
      Fe = Qc("y"),
      Ge = Sc("milliseconds"),
      He = Sc("seconds"),
      Ie = Sc("minutes"),
      Je = Sc("hours"),
      Ke = Sc("days"),
      Le = Sc("months"),
      Me = Sc("years"),
      Ne = Math.round,
      Oe = { s: 45, m: 45, h: 22, d: 26, M: 11 },
      Pe = Math.abs,
      Qe = Na.prototype;Qe.abs = Gc, Qe.add = Ic, Qe.subtract = Jc, Qe.as = Oc, Qe.asMilliseconds = ye, Qe.asSeconds = ze, Qe.asMinutes = Ae, Qe.asHours = Be, Qe.asDays = Ce, Qe.asWeeks = De, Qe.asMonths = Ee, Qe.asYears = Fe, Qe.valueOf = Pc, Qe._bubble = Lc, Qe.get = Rc, Qe.milliseconds = Ge, Qe.seconds = He, Qe.minutes = Ie, Qe.hours = Je, Qe.days = Ke, Qe.weeks = Tc, Qe.months = Le, Qe.years = Me, Qe.humanize = Xc, Qe.toISOString = Yc, Qe.toString = Yc, Qe.toJSON = Yc, Qe.locale = Ab, Qe.localeData = Bb, Qe.toIsoString = u("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Yc), Qe.lang = ce, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), W("x", ud), W("X", xd), $("X", function (a, b, c) {
    c._d = new Date(1e3 * parseFloat(a, 10));
  }), $("x", function (a, b, c) {
    c._d = new Date(r(a));
  }), a.version = "2.12.0", b(Ja), a.fn = pe, a.min = La, a.max = Ma, a.now = Yd, a.utc = h, a.unix = qc, a.months = Bc, a.isDate = d, a.locale = E, a.invalid = l, a.duration = cb, a.isMoment = p, a.weekdays = Dc, a.parseZone = rc, a.localeData = H, a.isDuration = Oa, a.monthsShort = Cc, a.weekdaysMin = Fc, a.defineLocale = F, a.updateLocale = G, a.locales = I, a.weekdaysShort = Ec, a.normalizeUnits = K, a.relativeTimeThreshold = Wc, a.prototype = pe;var Re = a;return Re;
});
/**
  * React v0.14.7
  */(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else {var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else {g=this;}g.React=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s;}({1:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */'use strict';var ReactDOM=_dereq_(35);var ReactDOMServer=_dereq_(45);var ReactIsomorphic=_dereq_(63);var assign=_dereq_(23);var deprecated=_dereq_(106); // `version` will be added here by ReactIsomorphic.
var React={};assign(React,ReactIsomorphic);assign(React,{ // ReactDOM
findDOMNode:deprecated('findDOMNode','ReactDOM','react-dom',ReactDOM,ReactDOM.findDOMNode),render:deprecated('render','ReactDOM','react-dom',ReactDOM,ReactDOM.render),unmountComponentAtNode:deprecated('unmountComponentAtNode','ReactDOM','react-dom',ReactDOM,ReactDOM.unmountComponentAtNode), // ReactDOMServer
renderToString:deprecated('renderToString','ReactDOMServer','react-dom/server',ReactDOMServer,ReactDOMServer.renderToString),renderToStaticMarkup:deprecated('renderToStaticMarkup','ReactDOMServer','react-dom/server',ReactDOMServer,ReactDOMServer.renderToStaticMarkup)});React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ReactDOM;React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ReactDOMServer;module.exports=React;},{"106":106,"23":23,"35":35,"45":45,"63":63}],2:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusUtils
 * @typechecks static-only
 */'use strict';var ReactMount=_dereq_(65);var findDOMNode=_dereq_(108);var focusNode=_dereq_(138);var Mixin={componentDidMount:function(){if(this.props.autoFocus){focusNode(findDOMNode(this));}}};var AutoFocusUtils={Mixin:Mixin,focusDOMComponent:function(){focusNode(ReactMount.getNode(this._rootNodeID));}};module.exports=AutoFocusUtils;},{"108":108,"138":138,"65":65}],3:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var EventPropagators=_dereq_(19);var ExecutionEnvironment=_dereq_(130);var FallbackCompositionState=_dereq_(20);var SyntheticCompositionEvent=_dereq_(90);var SyntheticInputEvent=_dereq_(94);var keyOf=_dereq_(148);var END_KEYCODES=[9,13,27,32]; // Tab, Return, Esc, Space
var START_KEYCODE=229;var canUseCompositionEvent=ExecutionEnvironment.canUseDOM&&'CompositionEvent' in window;var documentMode=null;if(ExecutionEnvironment.canUseDOM&&'documentMode' in document){documentMode=document.documentMode;} // Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&'TextEvent' in window&&!documentMode&&!isPresto(); // In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData=ExecutionEnvironment.canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11); /**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */function isPresto(){var opera=window.opera;return typeof opera==='object'&&typeof opera.version==='function'&&parseInt(opera.version(),10)<=12;}var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);var topLevelTypes=EventConstants.topLevelTypes; // Events and their corresponding property names.
var eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:keyOf({onBeforeInput:null}),captured:keyOf({onBeforeInputCapture:null})},dependencies:[topLevelTypes.topCompositionEnd,topLevelTypes.topKeyPress,topLevelTypes.topTextInput,topLevelTypes.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:keyOf({onCompositionEnd:null}),captured:keyOf({onCompositionEndCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionEnd,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:keyOf({onCompositionStart:null}),captured:keyOf({onCompositionStartCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionStart,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:keyOf({onCompositionUpdate:null}),captured:keyOf({onCompositionUpdateCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionUpdate,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]}}; // Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress=false; /**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */function isKeypressCommand(nativeEvent){return (nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&& // ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(nativeEvent.ctrlKey&&nativeEvent.altKey);} /**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */function getCompositionEventType(topLevelType){switch(topLevelType){case topLevelTypes.topCompositionStart:return eventTypes.compositionStart;case topLevelTypes.topCompositionEnd:return eventTypes.compositionEnd;case topLevelTypes.topCompositionUpdate:return eventTypes.compositionUpdate;}} /**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionStart(topLevelType,nativeEvent){return topLevelType===topLevelTypes.topKeyDown&&nativeEvent.keyCode===START_KEYCODE;} /**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionEnd(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topKeyUp: // Command keys insert or clear IME input.
return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;case topLevelTypes.topKeyDown: // Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return nativeEvent.keyCode!==START_KEYCODE;case topLevelTypes.topKeyPress:case topLevelTypes.topMouseDown:case topLevelTypes.topBlur: // Events are not possible without cancelling IME.
return true;default:return false;}} /**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if(typeof detail==='object'&&'data' in detail){return detail.data;}return null;} // Track the current IME composition fallback object, if any.
var currentComposition=null; /**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var eventType;var fallbackData;if(canUseCompositionEvent){eventType=getCompositionEventType(topLevelType);}else if(!currentComposition){if(isFallbackCompositionStart(topLevelType,nativeEvent)){eventType=eventTypes.compositionStart;}}else if(isFallbackCompositionEnd(topLevelType,nativeEvent)){eventType=eventTypes.compositionEnd;}if(!eventType){return null;}if(useFallbackCompositionData){ // The current composition is stored statically and must not be
// overwritten while composition continues.
if(!currentComposition&&eventType===eventTypes.compositionStart){currentComposition=FallbackCompositionState.getPooled(topLevelTarget);}else if(eventType===eventTypes.compositionEnd){if(currentComposition){fallbackData=currentComposition.getData();}}}var event=SyntheticCompositionEvent.getPooled(eventType,topLevelTargetID,nativeEvent,nativeEventTarget);if(fallbackData){ // Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
event.data=fallbackData;}else {var customData=getDataFromCustomEvent(nativeEvent);if(customData!==null){event.data=customData;}}EventPropagators.accumulateTwoPhaseDispatches(event);return event;} /**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */function getNativeBeforeInputChars(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topCompositionEnd:return getDataFromCustomEvent(nativeEvent);case topLevelTypes.topKeyPress: /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */var which=nativeEvent.which;if(which!==SPACEBAR_CODE){return null;}hasSpaceKeypress=true;return SPACEBAR_CHAR;case topLevelTypes.topTextInput: // Record the characters to be added to the DOM.
var chars=nativeEvent.data; // If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){return null;}return chars;default: // For other native event types, do nothing.
return null;}} /**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */function getFallbackBeforeInputChars(topLevelType,nativeEvent){ // If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
if(currentComposition){if(topLevelType===topLevelTypes.topCompositionEnd||isFallbackCompositionEnd(topLevelType,nativeEvent)){var chars=currentComposition.getData();FallbackCompositionState.release(currentComposition);currentComposition=null;return chars;}return null;}switch(topLevelType){case topLevelTypes.topPaste: // If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case topLevelTypes.topKeyPress: /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(nativeEvent.which&&!isKeypressCommand(nativeEvent)){return String.fromCharCode(nativeEvent.which);}return null;case topLevelTypes.topCompositionEnd:return useFallbackCompositionData?null:nativeEvent.data;default:return null;}} /**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var chars;if(canUseTextInputEvent){chars=getNativeBeforeInputChars(topLevelType,nativeEvent);}else {chars=getFallbackBeforeInputChars(topLevelType,nativeEvent);} // If no characters are being inserted, no BeforeInput event should
// be fired.
if(!chars){return null;}var event=SyntheticInputEvent.getPooled(eventTypes.beforeInput,topLevelTargetID,nativeEvent,nativeEventTarget);event.data=chars;EventPropagators.accumulateTwoPhaseDispatches(event);return event;} /**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */var BeforeInputEventPlugin={eventTypes:eventTypes, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){return [extractCompositionEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget),extractBeforeInputEvent(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget)];}};module.exports=BeforeInputEventPlugin;},{"130":130,"148":148,"15":15,"19":19,"20":20,"90":90,"94":94}],4:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */'use strict'; /**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={animationIterationCount:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true, // SVG-related properties
fillOpacity:true,stopOpacity:true,strokeDashoffset:true,strokeOpacity:true,strokeWidth:true}; /**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);} /**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});}); /**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */var shorthandPropertyExpansions={background:{backgroundAttachment:true,backgroundColor:true,backgroundImage:true,backgroundPositionX:true,backgroundPositionY:true,backgroundRepeat:true},backgroundPosition:{backgroundPositionX:true,backgroundPositionY:true},border:{borderWidth:true,borderStyle:true,borderColor:true},borderBottom:{borderBottomWidth:true,borderBottomStyle:true,borderBottomColor:true},borderLeft:{borderLeftWidth:true,borderLeftStyle:true,borderLeftColor:true},borderRight:{borderRightWidth:true,borderRightStyle:true,borderRightColor:true},borderTop:{borderTopWidth:true,borderTopStyle:true,borderTopColor:true},font:{fontStyle:true,fontVariant:true,fontWeight:true,fontSize:true,lineHeight:true,fontFamily:true},outline:{outlineWidth:true,outlineStyle:true,outlineColor:true}};var CSSProperty={isUnitlessNumber:isUnitlessNumber,shorthandPropertyExpansions:shorthandPropertyExpansions};module.exports=CSSProperty;},{}],5:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 * @typechecks static-only
 */'use strict';var CSSProperty=_dereq_(4);var ExecutionEnvironment=_dereq_(130);var ReactPerf=_dereq_(71);var camelizeStyleName=_dereq_(132);var dangerousStyleValue=_dereq_(105);var hyphenateStyleName=_dereq_(143);var memoizeStringOnly=_dereq_(150);var warning=_dereq_(155);var processStyleName=memoizeStringOnly(function(styleName){return hyphenateStyleName(styleName);});var hasShorthandPropertyBug=false;var styleFloatAccessor='cssFloat';if(ExecutionEnvironment.canUseDOM){var tempStyle=document.createElement('div').style;try{ // IE8 throws "Invalid argument." if resetting shorthand style properties.
tempStyle.font='';}catch(e){hasShorthandPropertyBug=true;} // IE8 only supports accessing cssFloat (standard) as styleFloat
if(document.documentElement.style.cssFloat===undefined){styleFloatAccessor='styleFloat';}}if("development"!=='production'){ // 'msTransform' is correct, but the other prefixes should be capitalized
var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/; // style values shouldn't contain a semicolon
var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnHyphenatedStyleName=function(name){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;"development"!=='production'?warning(false,'Unsupported style property %s. Did you mean %s?',name,camelizeStyleName(name)):undefined;};var warnBadVendoredStyleName=function(name){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;"development"!=='production'?warning(false,'Unsupported vendor-prefixed style property %s. Did you mean %s?',name,name.charAt(0).toUpperCase()+name.slice(1)):undefined;};var warnStyleValueWithSemicolon=function(name,value){if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){return;}warnedStyleValues[value]=true;"development"!=='production'?warning(false,'Style property values shouldn\'t contain a semicolon. '+'Try "%s: %s" instead.',name,value.replace(badStyleValueWithSemicolonPattern,'')):undefined;}; /**
   * @param {string} name
   * @param {*} value
   */var warnValidStyle=function(name,value){if(name.indexOf('-')>-1){warnHyphenatedStyleName(name);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value);}};} /**
 * Operations for dealing with CSS properties.
 */var CSSPropertyOperations={ /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @return {?string}
   */createMarkupForStyles:function(styles){var serialized='';for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];if("development"!=='production'){warnValidStyle(styleName,styleValue);}if(styleValue!=null){serialized+=processStyleName(styleName)+':';serialized+=dangerousStyleValue(styleName,styleValue)+';';}}return serialized||null;}, /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   */setValueForStyles:function(node,styles){var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}if("development"!=='production'){warnValidStyle(styleName,styles[styleName]);}var styleValue=dangerousStyleValue(styleName,styles[styleName]);if(styleName==='float'){styleName=styleFloatAccessor;}if(styleValue){style[styleName]=styleValue;}else {var expansion=hasShorthandPropertyBug&&CSSProperty.shorthandPropertyExpansions[styleName];if(expansion){ // Shorthand property that IE8 won't like unsetting, so unset each
// component to placate it
for(var individualStyleName in expansion){style[individualStyleName]='';}}else {style[styleName]='';}}}}};ReactPerf.measureMethods(CSSPropertyOperations,'CSSPropertyOperations',{setValueForStyles:'setValueForStyles'});module.exports=CSSPropertyOperations;},{"105":105,"130":130,"132":132,"143":143,"150":150,"155":155,"4":4,"71":71}],6:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */'use strict';var PooledClass=_dereq_(24);var assign=_dereq_(23);var invariant=_dereq_(144); /**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */function CallbackQueue(){this._callbacks=null;this._contexts=null;}assign(CallbackQueue.prototype,{ /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */enqueue:function(callback,context){this._callbacks=this._callbacks||[];this._contexts=this._contexts||[];this._callbacks.push(callback);this._contexts.push(context);}, /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */notifyAll:function(){var callbacks=this._callbacks;var contexts=this._contexts;if(callbacks){!(callbacks.length===contexts.length)?"development"!=='production'?invariant(false,'Mismatched list of contexts in callback queue'):invariant(false):undefined;this._callbacks=null;this._contexts=null;for(var i=0;i<callbacks.length;i++){callbacks[i].call(contexts[i]);}callbacks.length=0;contexts.length=0;}}, /**
   * Resets the internal queue.
   *
   * @internal
   */reset:function(){this._callbacks=null;this._contexts=null;}, /**
   * `PooledClass` looks for this.
   */destructor:function(){this.reset();}});PooledClass.addPoolingTo(CallbackQueue);module.exports=CallbackQueue;},{"144":144,"23":23,"24":24}],7:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */'use strict';var EventConstants=_dereq_(15);var EventPluginHub=_dereq_(16);var EventPropagators=_dereq_(19);var ExecutionEnvironment=_dereq_(130);var ReactUpdates=_dereq_(83);var SyntheticEvent=_dereq_(92);var getEventTarget=_dereq_(114);var isEventSupported=_dereq_(119);var isTextInputElement=_dereq_(120);var keyOf=_dereq_(148);var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={change:{phasedRegistrationNames:{bubbled:keyOf({onChange:null}),captured:keyOf({onChangeCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topChange,topLevelTypes.topClick,topLevelTypes.topFocus,topLevelTypes.topInput,topLevelTypes.topKeyDown,topLevelTypes.topKeyUp,topLevelTypes.topSelectionChange]}}; /**
 * For IE shims
 */var activeElement=null;var activeElementID=null;var activeElementValue=null;var activeElementValueProp=null; /**
 * SECTION: handle `change` event
 */function shouldUseChangeEvent(elem){var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();return nodeName==='select'||nodeName==='input'&&elem.type==='file';}var doesChangeEventBubble=false;if(ExecutionEnvironment.canUseDOM){ // See `handleChange` comment below
doesChangeEventBubble=isEventSupported('change')&&(!('documentMode' in document)||document.documentMode>8);}function manualDispatchChangeEvent(nativeEvent){var event=SyntheticEvent.getPooled(eventTypes.change,activeElementID,nativeEvent,getEventTarget(nativeEvent));EventPropagators.accumulateTwoPhaseDispatches(event); // If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
ReactUpdates.batchedUpdates(runEventInBatch,event);}function runEventInBatch(event){EventPluginHub.enqueueEvents(event);EventPluginHub.processEventQueue(false);}function startWatchingForChangeEventIE8(target,targetID){activeElement=target;activeElementID=targetID;activeElement.attachEvent('onchange',manualDispatchChangeEvent);}function stopWatchingForChangeEventIE8(){if(!activeElement){return;}activeElement.detachEvent('onchange',manualDispatchChangeEvent);activeElement=null;activeElementID=null;}function getTargetIDForChangeEvent(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topChange){return topLevelTargetID;}}function handleEventsForChangeEventIE8(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topFocus){ // stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForChangeEventIE8();startWatchingForChangeEventIE8(topLevelTarget,topLevelTargetID);}else if(topLevelType===topLevelTypes.topBlur){stopWatchingForChangeEventIE8();}} /**
 * SECTION: handle `input` event
 */var isInputEventSupported=false;if(ExecutionEnvironment.canUseDOM){ // IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events
isInputEventSupported=isEventSupported('input')&&(!('documentMode' in document)||document.documentMode>9);} /**
 * (For old IE.) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */var newValueProp={get:function(){return activeElementValueProp.get.call(this);},set:function(val){ // Cast to a string so we can do equality checks.
activeElementValue=''+val;activeElementValueProp.set.call(this,val);}}; /**
 * (For old IE.) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */function startWatchingForValueChange(target,targetID){activeElement=target;activeElementID=targetID;activeElementValue=target.value;activeElementValueProp=Object.getOwnPropertyDescriptor(target.constructor.prototype,'value'); // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
// on DOM elements
Object.defineProperty(activeElement,'value',newValueProp);activeElement.attachEvent('onpropertychange',handlePropertyChange);} /**
 * (For old IE.) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */function stopWatchingForValueChange(){if(!activeElement){return;} // delete restores the original property definition
delete activeElement.value;activeElement.detachEvent('onpropertychange',handlePropertyChange);activeElement=null;activeElementID=null;activeElementValue=null;activeElementValueProp=null;} /**
 * (For old IE.) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function handlePropertyChange(nativeEvent){if(nativeEvent.propertyName!=='value'){return;}var value=nativeEvent.srcElement.value;if(value===activeElementValue){return;}activeElementValue=value;manualDispatchChangeEvent(nativeEvent);} /**
 * If a `change` event should be fired, returns the target's ID.
 */function getTargetIDForInputEvent(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topInput){ // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
// what we want so fall through here and trigger an abstract event
return topLevelTargetID;}} // For IE8 and IE9.
function handleEventsForInputEventIE(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topFocus){ // In IE8, we can capture almost all .value changes by adding a
// propertychange handler and looking for events with propertyName
// equal to 'value'
// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange();startWatchingForValueChange(topLevelTarget,topLevelTargetID);}else if(topLevelType===topLevelTypes.topBlur){stopWatchingForValueChange();}} // For IE8 and IE9.
function getTargetIDForInputEventIE(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topSelectionChange||topLevelType===topLevelTypes.topKeyUp||topLevelType===topLevelTypes.topKeyDown){ // On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
if(activeElement&&activeElement.value!==activeElementValue){activeElementValue=activeElement.value;return activeElementID;}}} /**
 * SECTION: handle `click` event
 */function shouldUseClickEvent(elem){ // Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
return elem.nodeName&&elem.nodeName.toLowerCase()==='input'&&(elem.type==='checkbox'||elem.type==='radio');}function getTargetIDForClickEvent(topLevelType,topLevelTarget,topLevelTargetID){if(topLevelType===topLevelTypes.topClick){return topLevelTargetID;}} /**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */var ChangeEventPlugin={eventTypes:eventTypes, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var getTargetIDFunc,handleEventFunc;if(shouldUseChangeEvent(topLevelTarget)){if(doesChangeEventBubble){getTargetIDFunc=getTargetIDForChangeEvent;}else {handleEventFunc=handleEventsForChangeEventIE8;}}else if(isTextInputElement(topLevelTarget)){if(isInputEventSupported){getTargetIDFunc=getTargetIDForInputEvent;}else {getTargetIDFunc=getTargetIDForInputEventIE;handleEventFunc=handleEventsForInputEventIE;}}else if(shouldUseClickEvent(topLevelTarget)){getTargetIDFunc=getTargetIDForClickEvent;}if(getTargetIDFunc){var targetID=getTargetIDFunc(topLevelType,topLevelTarget,topLevelTargetID);if(targetID){var event=SyntheticEvent.getPooled(eventTypes.change,targetID,nativeEvent,nativeEventTarget);event.type='change';EventPropagators.accumulateTwoPhaseDispatches(event);return event;}}if(handleEventFunc){handleEventFunc(topLevelType,topLevelTarget,topLevelTargetID);}}};module.exports=ChangeEventPlugin;},{"114":114,"119":119,"120":120,"130":130,"148":148,"15":15,"16":16,"19":19,"83":83,"92":92}],8:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ClientReactRootIndex
 * @typechecks
 */'use strict';var nextReactRootIndex=0;var ClientReactRootIndex={createReactRootIndex:function(){return nextReactRootIndex++;}};module.exports=ClientReactRootIndex;},{}],9:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 * @typechecks static-only
 */'use strict';var Danger=_dereq_(12);var ReactMultiChildUpdateTypes=_dereq_(67);var ReactPerf=_dereq_(71);var setInnerHTML=_dereq_(124);var setTextContent=_dereq_(125);var invariant=_dereq_(144); /**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */function insertChildAt(parentNode,childNode,index){ // By exploiting arrays returning `undefined` for an undefined index, we can
// rely exclusively on `insertBefore(node, null)` instead of also using
// `appendChild(node)`. However, using `undefined` is not allowed by all
// browsers so we must replace it with `null`.
// fix render order error in safari
// IE8 will throw error when index out of list size.
var beforeChild=index>=parentNode.childNodes.length?null:parentNode.childNodes.item(index);parentNode.insertBefore(childNode,beforeChild);} /**
 * Operations for updating with DOM children.
 */var DOMChildrenOperations={dangerouslyReplaceNodeWithMarkup:Danger.dangerouslyReplaceNodeWithMarkup,updateTextContent:setTextContent, /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markupList List of markup strings.
   * @internal
   */processUpdates:function(updates,markupList){var update; // Mapping from parent IDs to initial child orderings.
var initialChildren=null; // List of children that will be moved or removed.
var updatedChildren=null;for(var i=0;i<updates.length;i++){update=updates[i];if(update.type===ReactMultiChildUpdateTypes.MOVE_EXISTING||update.type===ReactMultiChildUpdateTypes.REMOVE_NODE){var updatedIndex=update.fromIndex;var updatedChild=update.parentNode.childNodes[updatedIndex];var parentID=update.parentID;!updatedChild?"development"!=='production'?invariant(false,'processUpdates(): Unable to find child %s of element. This '+'probably means the DOM was unexpectedly mutated (e.g., by the '+'browser), usually due to forgetting a <tbody> when using tables, '+'nesting tags like <form>, <p>, or <a>, or using non-SVG elements '+'in an <svg> parent. Try inspecting the child nodes of the element '+'with React ID `%s`.',updatedIndex,parentID):invariant(false):undefined;initialChildren=initialChildren||{};initialChildren[parentID]=initialChildren[parentID]||[];initialChildren[parentID][updatedIndex]=updatedChild;updatedChildren=updatedChildren||[];updatedChildren.push(updatedChild);}}var renderedMarkup; // markupList is either a list of markup or just a list of elements
if(markupList.length&&typeof markupList[0]==='string'){renderedMarkup=Danger.dangerouslyRenderMarkup(markupList);}else {renderedMarkup=markupList;} // Remove updated children first so that `toIndex` is consistent.
if(updatedChildren){for(var j=0;j<updatedChildren.length;j++){updatedChildren[j].parentNode.removeChild(updatedChildren[j]);}}for(var k=0;k<updates.length;k++){update=updates[k];switch(update.type){case ReactMultiChildUpdateTypes.INSERT_MARKUP:insertChildAt(update.parentNode,renderedMarkup[update.markupIndex],update.toIndex);break;case ReactMultiChildUpdateTypes.MOVE_EXISTING:insertChildAt(update.parentNode,initialChildren[update.parentID][update.fromIndex],update.toIndex);break;case ReactMultiChildUpdateTypes.SET_MARKUP:setInnerHTML(update.parentNode,update.content);break;case ReactMultiChildUpdateTypes.TEXT_CONTENT:setTextContent(update.parentNode,update.content);break;case ReactMultiChildUpdateTypes.REMOVE_NODE: // Already removed by the for-loop above.
break;}}}};ReactPerf.measureMethods(DOMChildrenOperations,'DOMChildrenOperations',{updateTextContent:'updateTextContent'});module.exports=DOMChildrenOperations;},{"12":12,"124":124,"125":125,"144":144,"67":67,"71":71}],10:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 * @typechecks static-only
 */'use strict';var invariant=_dereq_(144);function checkMask(value,bitmask){return (value&bitmask)===bitmask;}var DOMPropertyInjection={ /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */MUST_USE_ATTRIBUTE:0x1,MUST_USE_PROPERTY:0x2,HAS_SIDE_EFFECTS:0x4,HAS_BOOLEAN_VALUE:0x8,HAS_NUMERIC_VALUE:0x10,HAS_POSITIVE_NUMERIC_VALUE:0x20|0x10,HAS_OVERLOADED_BOOLEAN_VALUE:0x40, /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */injectDOMPropertyConfig:function(domPropertyConfig){var Injection=DOMPropertyInjection;var Properties=domPropertyConfig.Properties||{};var DOMAttributeNamespaces=domPropertyConfig.DOMAttributeNamespaces||{};var DOMAttributeNames=domPropertyConfig.DOMAttributeNames||{};var DOMPropertyNames=domPropertyConfig.DOMPropertyNames||{};var DOMMutationMethods=domPropertyConfig.DOMMutationMethods||{};if(domPropertyConfig.isCustomAttribute){DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);}for(var propName in Properties){!!DOMProperty.properties.hasOwnProperty(propName)?"development"!=='production'?invariant(false,'injectDOMPropertyConfig(...): You\'re trying to inject DOM property '+'\'%s\' which has already been injected. You may be accidentally '+'injecting the same DOM property config twice, or you may be '+'injecting two configs that have conflicting property names.',propName):invariant(false):undefined;var lowerCased=propName.toLowerCase();var propConfig=Properties[propName];var propertyInfo={attributeName:lowerCased,attributeNamespace:null,propertyName:propName,mutationMethod:null,mustUseAttribute:checkMask(propConfig,Injection.MUST_USE_ATTRIBUTE),mustUseProperty:checkMask(propConfig,Injection.MUST_USE_PROPERTY),hasSideEffects:checkMask(propConfig,Injection.HAS_SIDE_EFFECTS),hasBooleanValue:checkMask(propConfig,Injection.HAS_BOOLEAN_VALUE),hasNumericValue:checkMask(propConfig,Injection.HAS_NUMERIC_VALUE),hasPositiveNumericValue:checkMask(propConfig,Injection.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:checkMask(propConfig,Injection.HAS_OVERLOADED_BOOLEAN_VALUE)};!(!propertyInfo.mustUseAttribute||!propertyInfo.mustUseProperty)?"development"!=='production'?invariant(false,'DOMProperty: Cannot require using both attribute and property: %s',propName):invariant(false):undefined;!(propertyInfo.mustUseProperty||!propertyInfo.hasSideEffects)?"development"!=='production'?invariant(false,'DOMProperty: Properties that have side effects must use property: %s',propName):invariant(false):undefined;!(propertyInfo.hasBooleanValue+propertyInfo.hasNumericValue+propertyInfo.hasOverloadedBooleanValue<=1)?"development"!=='production'?invariant(false,'DOMProperty: Value can be one of boolean, overloaded boolean, or '+'numeric value, but not a combination: %s',propName):invariant(false):undefined;if("development"!=='production'){DOMProperty.getPossibleStandardName[lowerCased]=propName;}if(DOMAttributeNames.hasOwnProperty(propName)){var attributeName=DOMAttributeNames[propName];propertyInfo.attributeName=attributeName;if("development"!=='production'){DOMProperty.getPossibleStandardName[attributeName]=propName;}}if(DOMAttributeNamespaces.hasOwnProperty(propName)){propertyInfo.attributeNamespace=DOMAttributeNamespaces[propName];}if(DOMPropertyNames.hasOwnProperty(propName)){propertyInfo.propertyName=DOMPropertyNames[propName];}if(DOMMutationMethods.hasOwnProperty(propName)){propertyInfo.mutationMethod=DOMMutationMethods[propName];}DOMProperty.properties[propName]=propertyInfo;}}};var defaultValueCache={}; /**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */var DOMProperty={ID_ATTRIBUTE_NAME:'data-reactid', /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseAttribute:
   *   Whether the property must be accessed and mutated using `*Attribute()`.
   *   (This includes anything that fails `<propName> in <element>`.)
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasSideEffects:
   *   Whether or not setting a value causes side effects such as triggering
   *   resources to be loaded or text selection changes. If true, we read from
   *   the DOM before updating to ensure that the value is only set if it has
   *   changed.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */properties:{}, /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   * @type {Object}
   */getPossibleStandardName:"development"!=='production'?{}:null, /**
   * All of the isCustomAttribute() functions that have been injected.
   */_isCustomAttributeFunctions:[], /**
   * Checks whether a property name is a custom attribute.
   * @method
   */isCustomAttribute:function(attributeName){for(var i=0;i<DOMProperty._isCustomAttributeFunctions.length;i++){var isCustomAttributeFn=DOMProperty._isCustomAttributeFunctions[i];if(isCustomAttributeFn(attributeName)){return true;}}return false;}, /**
   * Returns the default property value for a DOM property (i.e., not an
   * attribute). Most default values are '' or false, but not all. Worse yet,
   * some (in particular, `type`) vary depending on the type of element.
   *
   * TODO: Is it better to grab all the possible properties when creating an
   * element to avoid having to create the same element twice?
   */getDefaultValueForProperty:function(nodeName,prop){var nodeDefaults=defaultValueCache[nodeName];var testElement;if(!nodeDefaults){defaultValueCache[nodeName]=nodeDefaults={};}if(!(prop in nodeDefaults)){testElement=document.createElement(nodeName);nodeDefaults[prop]=testElement[prop];}return nodeDefaults[prop];},injection:DOMPropertyInjection};module.exports=DOMProperty;},{"144":144}],11:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 * @typechecks static-only
 */'use strict';var DOMProperty=_dereq_(10);var ReactPerf=_dereq_(71);var quoteAttributeValueForBrowser=_dereq_(122);var warning=_dereq_(155); // Simplified subset
var VALID_ATTRIBUTE_NAME_REGEX=/^[a-zA-Z_][\w\.\-]*$/;var illegalAttributeNameCache={};var validatedAttributeNameCache={};function isAttributeNameSafe(attributeName){if(validatedAttributeNameCache.hasOwnProperty(attributeName)){return true;}if(illegalAttributeNameCache.hasOwnProperty(attributeName)){return false;}if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){validatedAttributeNameCache[attributeName]=true;return true;}illegalAttributeNameCache[attributeName]=true;"development"!=='production'?warning(false,'Invalid attribute name: `%s`',attributeName):undefined;return false;}function shouldIgnoreValue(propertyInfo,value){return value==null||propertyInfo.hasBooleanValue&&!value||propertyInfo.hasNumericValue&&isNaN(value)||propertyInfo.hasPositiveNumericValue&&value<1||propertyInfo.hasOverloadedBooleanValue&&value===false;}if("development"!=='production'){var reactProps={children:true,dangerouslySetInnerHTML:true,key:true,ref:true};var warnedProperties={};var warnUnknownProperty=function(name){if(reactProps.hasOwnProperty(name)&&reactProps[name]||warnedProperties.hasOwnProperty(name)&&warnedProperties[name]){return;}warnedProperties[name]=true;var lowerCasedName=name.toLowerCase(); // data-* attributes should be lowercase; suggest the lowercase version
var standardName=DOMProperty.isCustomAttribute(lowerCasedName)?lowerCasedName:DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty.getPossibleStandardName[lowerCasedName]:null; // For now, only warn when we have a suggested correction. This prevents
// logging too much when using transferPropsTo.
"development"!=='production'?warning(standardName==null,'Unknown DOM property %s. Did you mean %s?',name,standardName):undefined;};} /**
 * Operations for dealing with DOM properties.
 */var DOMPropertyOperations={ /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */createMarkupForID:function(id){return DOMProperty.ID_ATTRIBUTE_NAME+'='+quoteAttributeValueForBrowser(id);},setAttributeForID:function(node,id){node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME,id);}, /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */createMarkupForProperty:function(name,value){var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){if(shouldIgnoreValue(propertyInfo,value)){return '';}var attributeName=propertyInfo.attributeName;if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){return attributeName+'=""';}return attributeName+'='+quoteAttributeValueForBrowser(value);}else if(DOMProperty.isCustomAttribute(name)){if(value==null){return '';}return name+'='+quoteAttributeValueForBrowser(value);}else if("development"!=='production'){warnUnknownProperty(name);}return null;}, /**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */createMarkupForCustomAttribute:function(name,value){if(!isAttributeNameSafe(name)||value==null){return '';}return name+'='+quoteAttributeValueForBrowser(value);}, /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */setValueForProperty:function(node,name,value){var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,value);}else if(shouldIgnoreValue(propertyInfo,value)){this.deleteValueForProperty(node,name);}else if(propertyInfo.mustUseAttribute){var attributeName=propertyInfo.attributeName;var namespace=propertyInfo.attributeNamespace; // `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
if(namespace){node.setAttributeNS(namespace,attributeName,''+value);}else if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){node.setAttribute(attributeName,'');}else {node.setAttribute(attributeName,''+value);}}else {var propName=propertyInfo.propertyName; // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
// property type before comparing; only `value` does and is string.
if(!propertyInfo.hasSideEffects||''+node[propName]!==''+value){ // Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
node[propName]=value;}}}else if(DOMProperty.isCustomAttribute(name)){DOMPropertyOperations.setValueForAttribute(node,name,value);}else if("development"!=='production'){warnUnknownProperty(name);}},setValueForAttribute:function(node,name,value){if(!isAttributeNameSafe(name)){return;}if(value==null){node.removeAttribute(name);}else {node.setAttribute(name,''+value);}}, /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */deleteValueForProperty:function(node,name){var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,undefined);}else if(propertyInfo.mustUseAttribute){node.removeAttribute(propertyInfo.attributeName);}else {var propName=propertyInfo.propertyName;var defaultValue=DOMProperty.getDefaultValueForProperty(node.nodeName,propName);if(!propertyInfo.hasSideEffects||''+node[propName]!==defaultValue){node[propName]=defaultValue;}}}else if(DOMProperty.isCustomAttribute(name)){node.removeAttribute(name);}else if("development"!=='production'){warnUnknownProperty(name);}}};ReactPerf.measureMethods(DOMPropertyOperations,'DOMPropertyOperations',{setValueForProperty:'setValueForProperty',setValueForAttribute:'setValueForAttribute',deleteValueForProperty:'deleteValueForProperty'});module.exports=DOMPropertyOperations;},{"10":10,"122":122,"155":155,"71":71}],12:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 * @typechecks static-only
 */'use strict';var ExecutionEnvironment=_dereq_(130);var createNodesFromMarkup=_dereq_(135);var emptyFunction=_dereq_(136);var getMarkupWrap=_dereq_(140);var invariant=_dereq_(144);var OPEN_TAG_NAME_EXP=/^(<[^ \/>]+)/;var RESULT_INDEX_ATTR='data-danger-index'; /**
 * Extracts the `nodeName` from a string of markup.
 *
 * NOTE: Extracting the `nodeName` does not require a regular expression match
 * because we make assumptions about React-generated markup (i.e. there are no
 * spaces surrounding the opening tag and there is at least one attribute).
 *
 * @param {string} markup String of markup.
 * @return {string} Node name of the supplied markup.
 * @see http://jsperf.com/extract-nodename
 */function getNodeName(markup){return markup.substring(1,markup.indexOf(' '));}var Danger={ /**
   * Renders markup into an array of nodes. The markup is expected to render
   * into a list of root nodes. Also, the length of `resultList` and
   * `markupList` should be the same.
   *
   * @param {array<string>} markupList List of markup strings to render.
   * @return {array<DOMElement>} List of rendered nodes.
   * @internal
   */dangerouslyRenderMarkup:function(markupList){!ExecutionEnvironment.canUseDOM?"development"!=='production'?invariant(false,'dangerouslyRenderMarkup(...): Cannot render markup in a worker '+'thread. Make sure `window` and `document` are available globally '+'before requiring React when unit testing or use '+'ReactDOMServer.renderToString for server rendering.'):invariant(false):undefined;var nodeName;var markupByNodeName={}; // Group markup by `nodeName` if a wrap is necessary, else by '*'.
for(var i=0;i<markupList.length;i++){!markupList[i]?"development"!=='production'?invariant(false,'dangerouslyRenderMarkup(...): Missing markup.'):invariant(false):undefined;nodeName=getNodeName(markupList[i]);nodeName=getMarkupWrap(nodeName)?nodeName:'*';markupByNodeName[nodeName]=markupByNodeName[nodeName]||[];markupByNodeName[nodeName][i]=markupList[i];}var resultList=[];var resultListAssignmentCount=0;for(nodeName in markupByNodeName){if(!markupByNodeName.hasOwnProperty(nodeName)){continue;}var markupListByNodeName=markupByNodeName[nodeName]; // This for-in loop skips the holes of the sparse array. The order of
// iteration should follow the order of assignment, which happens to match
// numerical index order, but we don't rely on that.
var resultIndex;for(resultIndex in markupListByNodeName){if(markupListByNodeName.hasOwnProperty(resultIndex)){var markup=markupListByNodeName[resultIndex]; // Push the requested markup with an additional RESULT_INDEX_ATTR
// attribute.  If the markup does not start with a < character, it
// will be discarded below (with an appropriate console.error).
markupListByNodeName[resultIndex]=markup.replace(OPEN_TAG_NAME_EXP, // This index will be parsed back out below.
'$1 '+RESULT_INDEX_ATTR+'="'+resultIndex+'" ');}} // Render each group of markup with similar wrapping `nodeName`.
var renderNodes=createNodesFromMarkup(markupListByNodeName.join(''),emptyFunction // Do nothing special with <script> tags.
);for(var j=0;j<renderNodes.length;++j){var renderNode=renderNodes[j];if(renderNode.hasAttribute&&renderNode.hasAttribute(RESULT_INDEX_ATTR)){resultIndex=+renderNode.getAttribute(RESULT_INDEX_ATTR);renderNode.removeAttribute(RESULT_INDEX_ATTR);!!resultList.hasOwnProperty(resultIndex)?"development"!=='production'?invariant(false,'Danger: Assigning to an already-occupied result index.'):invariant(false):undefined;resultList[resultIndex]=renderNode; // This should match resultList.length and markupList.length when
// we're done.
resultListAssignmentCount+=1;}else if("development"!=='production'){console.error('Danger: Discarding unexpected node:',renderNode);}}} // Although resultList was populated out of order, it should now be a dense
// array.
!(resultListAssignmentCount===resultList.length)?"development"!=='production'?invariant(false,'Danger: Did not assign to every index of resultList.'):invariant(false):undefined;!(resultList.length===markupList.length)?"development"!=='production'?invariant(false,'Danger: Expected markup to render %s nodes, but rendered %s.',markupList.length,resultList.length):invariant(false):undefined;return resultList;}, /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */dangerouslyReplaceNodeWithMarkup:function(oldChild,markup){!ExecutionEnvironment.canUseDOM?"development"!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a '+'worker thread. Make sure `window` and `document` are available '+'globally before requiring React when unit testing or use '+'ReactDOMServer.renderToString() for server rendering.'):invariant(false):undefined;!markup?"development"!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Missing markup.'):invariant(false):undefined;!(oldChild.tagName.toLowerCase()!=='html')?"development"!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the '+'<html> node. This is because browser quirks make this unreliable '+'and/or slow. If you want to render to the root you must use '+'server rendering. See ReactDOMServer.renderToString().'):invariant(false):undefined;var newChild;if(typeof markup==='string'){newChild=createNodesFromMarkup(markup,emptyFunction)[0];}else {newChild=markup;}oldChild.parentNode.replaceChild(newChild,oldChild);}};module.exports=Danger;},{"130":130,"135":135,"136":136,"140":140,"144":144}],13:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */'use strict';var keyOf=_dereq_(148); /**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */var DefaultEventPluginOrder=[keyOf({ResponderEventPlugin:null}),keyOf({SimpleEventPlugin:null}),keyOf({TapEventPlugin:null}),keyOf({EnterLeaveEventPlugin:null}),keyOf({ChangeEventPlugin:null}),keyOf({SelectEventPlugin:null}),keyOf({BeforeInputEventPlugin:null})];module.exports=DefaultEventPluginOrder;},{"148":148}],14:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var EventPropagators=_dereq_(19);var SyntheticMouseEvent=_dereq_(96);var ReactMount=_dereq_(65);var keyOf=_dereq_(148);var topLevelTypes=EventConstants.topLevelTypes;var getFirstReactDOM=ReactMount.getFirstReactDOM;var eventTypes={mouseEnter:{registrationName:keyOf({onMouseEnter:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]},mouseLeave:{registrationName:keyOf({onMouseLeave:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]}};var extractedEvents=[null,null];var EnterLeaveEventPlugin={eventTypes:eventTypes, /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){if(topLevelType===topLevelTypes.topMouseOver&&(nativeEvent.relatedTarget||nativeEvent.fromElement)){return null;}if(topLevelType!==topLevelTypes.topMouseOut&&topLevelType!==topLevelTypes.topMouseOver){ // Must not be a mouse in or mouse out - ignoring.
return null;}var win;if(topLevelTarget.window===topLevelTarget){ // `topLevelTarget` is probably a window object.
win=topLevelTarget;}else { // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var doc=topLevelTarget.ownerDocument;if(doc){win=doc.defaultView||doc.parentWindow;}else {win=window;}}var from;var to;var fromID='';var toID='';if(topLevelType===topLevelTypes.topMouseOut){from=topLevelTarget;fromID=topLevelTargetID;to=getFirstReactDOM(nativeEvent.relatedTarget||nativeEvent.toElement);if(to){toID=ReactMount.getID(to);}else {to=win;}to=to||win;}else {from=win;to=topLevelTarget;toID=topLevelTargetID;}if(from===to){ // Nothing pertains to our managed components.
return null;}var leave=SyntheticMouseEvent.getPooled(eventTypes.mouseLeave,fromID,nativeEvent,nativeEventTarget);leave.type='mouseleave';leave.target=from;leave.relatedTarget=to;var enter=SyntheticMouseEvent.getPooled(eventTypes.mouseEnter,toID,nativeEvent,nativeEventTarget);enter.type='mouseenter';enter.target=to;enter.relatedTarget=from;EventPropagators.accumulateEnterLeaveDispatches(leave,enter,fromID,toID);extractedEvents[0]=leave;extractedEvents[1]=enter;return extractedEvents;}};module.exports=EnterLeaveEventPlugin;},{"148":148,"15":15,"19":19,"65":65,"96":96}],15:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */'use strict';var keyMirror=_dereq_(147);var PropagationPhases=keyMirror({bubbled:null,captured:null}); /**
 * Types of raw signals from the browser caught at the top level.
 */var topLevelTypes=keyMirror({topAbort:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topVolumeChange:null,topWaiting:null,topWheel:null});var EventConstants={topLevelTypes:topLevelTypes,PropagationPhases:PropagationPhases};module.exports=EventConstants;},{"147":147}],16:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */'use strict';var EventPluginRegistry=_dereq_(17);var EventPluginUtils=_dereq_(18);var ReactErrorUtils=_dereq_(56);var accumulateInto=_dereq_(102);var forEachAccumulated=_dereq_(110);var invariant=_dereq_(144);var warning=_dereq_(155); /**
 * Internal store for event listeners
 */var listenerBank={}; /**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */var eventQueue=null; /**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */var executeDispatchesAndRelease=function(event,simulated){if(event){EventPluginUtils.executeDispatchesInOrder(event,simulated);if(!event.isPersistent()){event.constructor.release(event);}}};var executeDispatchesAndReleaseSimulated=function(e){return executeDispatchesAndRelease(e,true);};var executeDispatchesAndReleaseTopLevel=function(e){return executeDispatchesAndRelease(e,false);}; /**
 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
 *   hierarchy given ids of the logical DOM elements involved.
 */var InstanceHandle=null;function validateInstanceHandle(){var valid=InstanceHandle&&InstanceHandle.traverseTwoPhase&&InstanceHandle.traverseEnterLeave;"development"!=='production'?warning(valid,'InstanceHandle not injected before use!'):undefined;} /**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */var EventPluginHub={ /**
   * Methods for injecting dependencies.
   */injection:{ /**
     * @param {object} InjectedMount
     * @public
     */injectMount:EventPluginUtils.injection.injectMount, /**
     * @param {object} InjectedInstanceHandle
     * @public
     */injectInstanceHandle:function(InjectedInstanceHandle){InstanceHandle=InjectedInstanceHandle;if("development"!=='production'){validateInstanceHandle();}},getInstanceHandle:function(){if("development"!=='production'){validateInstanceHandle();}return InstanceHandle;}, /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */injectEventPluginOrder:EventPluginRegistry.injectEventPluginOrder, /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */injectEventPluginsByName:EventPluginRegistry.injectEventPluginsByName},eventNameDispatchConfigs:EventPluginRegistry.eventNameDispatchConfigs,registrationNameModules:EventPluginRegistry.registrationNameModules, /**
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {?function} listener The callback to store.
   */putListener:function(id,registrationName,listener){!(typeof listener==='function')?"development"!=='production'?invariant(false,'Expected %s listener to be a function, instead got type %s',registrationName,typeof listener):invariant(false):undefined;var bankForRegistrationName=listenerBank[registrationName]||(listenerBank[registrationName]={});bankForRegistrationName[id]=listener;var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.didPutListener){PluginModule.didPutListener(id,registrationName,listener);}}, /**
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */getListener:function(id,registrationName){var bankForRegistrationName=listenerBank[registrationName];return bankForRegistrationName&&bankForRegistrationName[id];}, /**
   * Deletes a listener from the registration bank.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */deleteListener:function(id,registrationName){var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.willDeleteListener){PluginModule.willDeleteListener(id,registrationName);}var bankForRegistrationName=listenerBank[registrationName]; // TODO: This should never be null -- when is it?
if(bankForRegistrationName){delete bankForRegistrationName[id];}}, /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {string} id ID of the DOM element.
   */deleteAllListeners:function(id){for(var registrationName in listenerBank){if(!listenerBank[registrationName][id]){continue;}var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.willDeleteListener){PluginModule.willDeleteListener(id,registrationName);}delete listenerBank[registrationName][id];}}, /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @internal
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var events;var plugins=EventPluginRegistry.plugins;for(var i=0;i<plugins.length;i++){ // Not every plugin in the ordering may be loaded at runtime.
var possiblePlugin=plugins[i];if(possiblePlugin){var extractedEvents=possiblePlugin.extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget);if(extractedEvents){events=accumulateInto(events,extractedEvents);}}}return events;}, /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */enqueueEvents:function(events){if(events){eventQueue=accumulateInto(eventQueue,events);}}, /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */processEventQueue:function(simulated){ // Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var processingEventQueue=eventQueue;eventQueue=null;if(simulated){forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseSimulated);}else {forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseTopLevel);}!!eventQueue?"development"!=='production'?invariant(false,'processEventQueue(): Additional events were enqueued while processing '+'an event queue. Support for this has not yet been implemented.'):invariant(false):undefined; // This would be a good time to rethrow if any of the event handlers threw.
ReactErrorUtils.rethrowCaughtError();}, /**
   * These are needed for tests only. Do not use!
   */__purge:function(){listenerBank={};},__getListenerBank:function(){return listenerBank;}};module.exports=EventPluginHub;},{"102":102,"110":110,"144":144,"155":155,"17":17,"18":18,"56":56}],17:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */'use strict';var invariant=_dereq_(144); /**
 * Injectable ordering of event plugins.
 */var EventPluginOrder=null; /**
 * Injectable mapping from names to event plugin modules.
 */var namesToPlugins={}; /**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */function recomputePluginOrdering(){if(!EventPluginOrder){ // Wait until an `EventPluginOrder` is injected.
return;}for(var pluginName in namesToPlugins){var PluginModule=namesToPlugins[pluginName];var pluginIndex=EventPluginOrder.indexOf(pluginName);!(pluginIndex>-1)?"development"!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugins that do not exist in '+'the plugin ordering, `%s`.',pluginName):invariant(false):undefined;if(EventPluginRegistry.plugins[pluginIndex]){continue;}!PluginModule.extractEvents?"development"!=='production'?invariant(false,'EventPluginRegistry: Event plugins must implement an `extractEvents` '+'method, but `%s` does not.',pluginName):invariant(false):undefined;EventPluginRegistry.plugins[pluginIndex]=PluginModule;var publishedEvents=PluginModule.eventTypes;for(var eventName in publishedEvents){!publishEventForPlugin(publishedEvents[eventName],PluginModule,eventName)?"development"!=='production'?invariant(false,'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',eventName,pluginName):invariant(false):undefined;}}} /**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */function publishEventForPlugin(dispatchConfig,PluginModule,eventName){!!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)?"development"!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same '+'event name, `%s`.',eventName):invariant(false):undefined;EventPluginRegistry.eventNameDispatchConfigs[eventName]=dispatchConfig;var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;if(phasedRegistrationNames){for(var phaseName in phasedRegistrationNames){if(phasedRegistrationNames.hasOwnProperty(phaseName)){var phasedRegistrationName=phasedRegistrationNames[phaseName];publishRegistrationName(phasedRegistrationName,PluginModule,eventName);}}return true;}else if(dispatchConfig.registrationName){publishRegistrationName(dispatchConfig.registrationName,PluginModule,eventName);return true;}return false;} /**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */function publishRegistrationName(registrationName,PluginModule,eventName){!!EventPluginRegistry.registrationNameModules[registrationName]?"development"!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same '+'registration name, `%s`.',registrationName):invariant(false):undefined;EventPluginRegistry.registrationNameModules[registrationName]=PluginModule;EventPluginRegistry.registrationNameDependencies[registrationName]=PluginModule.eventTypes[eventName].dependencies;} /**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */var EventPluginRegistry={ /**
   * Ordered list of injected plugins.
   */plugins:[], /**
   * Mapping from event name to dispatch config
   */eventNameDispatchConfigs:{}, /**
   * Mapping from registration name to plugin module
   */registrationNameModules:{}, /**
   * Mapping from registration name to event name
   */registrationNameDependencies:{}, /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */injectEventPluginOrder:function(InjectedEventPluginOrder){!!EventPluginOrder?"development"!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugin ordering more than '+'once. You are likely trying to load more than one copy of React.'):invariant(false):undefined; // Clone the ordering so it cannot be dynamically mutated.
EventPluginOrder=Array.prototype.slice.call(InjectedEventPluginOrder);recomputePluginOrdering();}, /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */injectEventPluginsByName:function(injectedNamesToPlugins){var isOrderingDirty=false;for(var pluginName in injectedNamesToPlugins){if(!injectedNamesToPlugins.hasOwnProperty(pluginName)){continue;}var PluginModule=injectedNamesToPlugins[pluginName];if(!namesToPlugins.hasOwnProperty(pluginName)||namesToPlugins[pluginName]!==PluginModule){!!namesToPlugins[pluginName]?"development"!=='production'?invariant(false,'EventPluginRegistry: Cannot inject two different event plugins '+'using the same name, `%s`.',pluginName):invariant(false):undefined;namesToPlugins[pluginName]=PluginModule;isOrderingDirty=true;}}if(isOrderingDirty){recomputePluginOrdering();}}, /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */getPluginModuleForEvent:function(event){var dispatchConfig=event.dispatchConfig;if(dispatchConfig.registrationName){return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName]||null;}for(var phase in dispatchConfig.phasedRegistrationNames){if(!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)){continue;}var PluginModule=EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];if(PluginModule){return PluginModule;}}return null;}, /**
   * Exposed for unit testing.
   * @private
   */_resetEventPlugins:function(){EventPluginOrder=null;for(var pluginName in namesToPlugins){if(namesToPlugins.hasOwnProperty(pluginName)){delete namesToPlugins[pluginName];}}EventPluginRegistry.plugins.length=0;var eventNameDispatchConfigs=EventPluginRegistry.eventNameDispatchConfigs;for(var eventName in eventNameDispatchConfigs){if(eventNameDispatchConfigs.hasOwnProperty(eventName)){delete eventNameDispatchConfigs[eventName];}}var registrationNameModules=EventPluginRegistry.registrationNameModules;for(var registrationName in registrationNameModules){if(registrationNameModules.hasOwnProperty(registrationName)){delete registrationNameModules[registrationName];}}}};module.exports=EventPluginRegistry;},{"144":144}],18:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */'use strict';var EventConstants=_dereq_(15);var ReactErrorUtils=_dereq_(56);var invariant=_dereq_(144);var warning=_dereq_(155); /**
 * Injected dependencies:
 */ /**
 * - `Mount`: [required] Module that can convert between React dom IDs and
 *   actual node references.
 */var injection={Mount:null,injectMount:function(InjectedMount){injection.Mount=InjectedMount;if("development"!=='production'){"development"!=='production'?warning(InjectedMount&&InjectedMount.getNode&&InjectedMount.getID,'EventPluginUtils.injection.injectMount(...): Injected Mount '+'module is missing getNode or getID.'):undefined;}}};var topLevelTypes=EventConstants.topLevelTypes;function isEndish(topLevelType){return topLevelType===topLevelTypes.topMouseUp||topLevelType===topLevelTypes.topTouchEnd||topLevelType===topLevelTypes.topTouchCancel;}function isMoveish(topLevelType){return topLevelType===topLevelTypes.topMouseMove||topLevelType===topLevelTypes.topTouchMove;}function isStartish(topLevelType){return topLevelType===topLevelTypes.topMouseDown||topLevelType===topLevelTypes.topTouchStart;}var validateEventDispatches;if("development"!=='production'){validateEventDispatches=function(event){var dispatchListeners=event._dispatchListeners;var dispatchIDs=event._dispatchIDs;var listenersIsArr=Array.isArray(dispatchListeners);var idsIsArr=Array.isArray(dispatchIDs);var IDsLen=idsIsArr?dispatchIDs.length:dispatchIDs?1:0;var listenersLen=listenersIsArr?dispatchListeners.length:dispatchListeners?1:0;"development"!=='production'?warning(idsIsArr===listenersIsArr&&IDsLen===listenersLen,'EventPluginUtils: Invalid `event`.'):undefined;};} /**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {string} domID DOM id to pass to the callback.
 */function executeDispatch(event,simulated,listener,domID){var type=event.type||'unknown-event';event.currentTarget=injection.Mount.getNode(domID);if(simulated){ReactErrorUtils.invokeGuardedCallbackWithCatch(type,listener,event,domID);}else {ReactErrorUtils.invokeGuardedCallback(type,listener,event,domID);}event.currentTarget=null;} /**
 * Standard/simple iteration through an event's collected dispatches.
 */function executeDispatchesInOrder(event,simulated){var dispatchListeners=event._dispatchListeners;var dispatchIDs=event._dispatchIDs;if("development"!=='production'){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;} // Listeners and IDs are two parallel arrays that are always in sync.
executeDispatch(event,simulated,dispatchListeners[i],dispatchIDs[i]);}}else if(dispatchListeners){executeDispatch(event,simulated,dispatchListeners,dispatchIDs);}event._dispatchListeners=null;event._dispatchIDs=null;} /**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */function executeDispatchesInOrderStopAtTrueImpl(event){var dispatchListeners=event._dispatchListeners;var dispatchIDs=event._dispatchIDs;if("development"!=='production'){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;} // Listeners and IDs are two parallel arrays that are always in sync.
if(dispatchListeners[i](event,dispatchIDs[i])){return dispatchIDs[i];}}}else if(dispatchListeners){if(dispatchListeners(event,dispatchIDs)){return dispatchIDs;}}return null;} /**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */function executeDispatchesInOrderStopAtTrue(event){var ret=executeDispatchesInOrderStopAtTrueImpl(event);event._dispatchIDs=null;event._dispatchListeners=null;return ret;} /**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */function executeDirectDispatch(event){if("development"!=='production'){validateEventDispatches(event);}var dispatchListener=event._dispatchListeners;var dispatchID=event._dispatchIDs;!!Array.isArray(dispatchListener)?"development"!=='production'?invariant(false,'executeDirectDispatch(...): Invalid `event`.'):invariant(false):undefined;var res=dispatchListener?dispatchListener(event,dispatchID):null;event._dispatchListeners=null;event._dispatchIDs=null;return res;} /**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */function hasDispatches(event){return !!event._dispatchListeners;} /**
 * General utilities that are useful in creating custom Event Plugins.
 */var EventPluginUtils={isEndish:isEndish,isMoveish:isMoveish,isStartish:isStartish,executeDirectDispatch:executeDirectDispatch,executeDispatchesInOrder:executeDispatchesInOrder,executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,hasDispatches:hasDispatches,getNode:function(id){return injection.Mount.getNode(id);},getID:function(node){return injection.Mount.getID(node);},injection:injection};module.exports=EventPluginUtils;},{"144":144,"15":15,"155":155,"56":56}],19:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */'use strict';var EventConstants=_dereq_(15);var EventPluginHub=_dereq_(16);var warning=_dereq_(155);var accumulateInto=_dereq_(102);var forEachAccumulated=_dereq_(110);var PropagationPhases=EventConstants.PropagationPhases;var getListener=EventPluginHub.getListener; /**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */function listenerAtPhase(id,event,propagationPhase){var registrationName=event.dispatchConfig.phasedRegistrationNames[propagationPhase];return getListener(id,registrationName);} /**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */function accumulateDirectionalDispatches(domID,upwards,event){if("development"!=='production'){"development"!=='production'?warning(domID,'Dispatching id must not be null'):undefined;}var phase=upwards?PropagationPhases.bubbled:PropagationPhases.captured;var listener=listenerAtPhase(domID,event,phase);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchIDs=accumulateInto(event._dispatchIDs,domID);}} /**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */function accumulateTwoPhaseDispatchesSingle(event){if(event&&event.dispatchConfig.phasedRegistrationNames){EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker,accumulateDirectionalDispatches,event);}} /**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */function accumulateTwoPhaseDispatchesSingleSkipTarget(event){if(event&&event.dispatchConfig.phasedRegistrationNames){EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker,accumulateDirectionalDispatches,event);}} /**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */function accumulateDispatches(id,ignoredDirection,event){if(event&&event.dispatchConfig.registrationName){var registrationName=event.dispatchConfig.registrationName;var listener=getListener(id,registrationName);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchIDs=accumulateInto(event._dispatchIDs,id);}}} /**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */function accumulateDirectDispatchesSingle(event){if(event&&event.dispatchConfig.registrationName){accumulateDispatches(event.dispatchMarker,null,event);}}function accumulateTwoPhaseDispatches(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingle);}function accumulateTwoPhaseDispatchesSkipTarget(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingleSkipTarget);}function accumulateEnterLeaveDispatches(leave,enter,fromID,toID){EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID,toID,accumulateDispatches,leave,enter);}function accumulateDirectDispatches(events){forEachAccumulated(events,accumulateDirectDispatchesSingle);} /**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */var EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateTwoPhaseDispatchesSkipTarget:accumulateTwoPhaseDispatchesSkipTarget,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};module.exports=EventPropagators;},{"102":102,"110":110,"15":15,"155":155,"16":16}],20:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FallbackCompositionState
 * @typechecks static-only
 */'use strict';var PooledClass=_dereq_(24);var assign=_dereq_(23);var getTextContentAccessor=_dereq_(117); /**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */function FallbackCompositionState(root){this._root=root;this._startText=this.getText();this._fallbackText=null;}assign(FallbackCompositionState.prototype,{destructor:function(){this._root=null;this._startText=null;this._fallbackText=null;}, /**
   * Get current text of input.
   *
   * @return {string}
   */getText:function(){if('value' in this._root){return this._root.value;}return this._root[getTextContentAccessor()];}, /**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */getData:function(){if(this._fallbackText){return this._fallbackText;}var start;var startValue=this._startText;var startLength=startValue.length;var end;var endValue=this.getText();var endLength=endValue.length;for(start=0;start<startLength;start++){if(startValue[start]!==endValue[start]){break;}}var minEnd=startLength-start;for(end=1;end<=minEnd;end++){if(startValue[startLength-end]!==endValue[endLength-end]){break;}}var sliceTail=end>1?1-end:undefined;this._fallbackText=endValue.slice(start,sliceTail);return this._fallbackText;}});PooledClass.addPoolingTo(FallbackCompositionState);module.exports=FallbackCompositionState;},{"117":117,"23":23,"24":24}],21:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */'use strict';var DOMProperty=_dereq_(10);var ExecutionEnvironment=_dereq_(130);var MUST_USE_ATTRIBUTE=DOMProperty.injection.MUST_USE_ATTRIBUTE;var MUST_USE_PROPERTY=DOMProperty.injection.MUST_USE_PROPERTY;var HAS_BOOLEAN_VALUE=DOMProperty.injection.HAS_BOOLEAN_VALUE;var HAS_SIDE_EFFECTS=DOMProperty.injection.HAS_SIDE_EFFECTS;var HAS_NUMERIC_VALUE=DOMProperty.injection.HAS_NUMERIC_VALUE;var HAS_POSITIVE_NUMERIC_VALUE=DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;var HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;var hasSVG;if(ExecutionEnvironment.canUseDOM){var implementation=document.implementation;hasSVG=implementation&&implementation.hasFeature&&implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure','1.1');}var HTMLDOMPropertyConfig={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{ /**
     * Standard Properties
     */accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,allowTransparency:MUST_USE_ATTRIBUTE,alt:null,async:HAS_BOOLEAN_VALUE,autoComplete:null, // autoFocus is polyfilled/normalized by AutoFocusUtils
// autoFocus: HAS_BOOLEAN_VALUE,
autoPlay:HAS_BOOLEAN_VALUE,capture:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,cellPadding:null,cellSpacing:null,charSet:MUST_USE_ATTRIBUTE,challenge:MUST_USE_ATTRIBUTE,checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,classID:MUST_USE_ATTRIBUTE, // To set className on SVG elements, it's necessary to use .setAttribute;
// this works on HTML elements too in all browsers except IE8. Conveniently,
// IE8 doesn't support SVG and so we can simply use the attribute in
// browsers that support SVG and the property in browsers that don't,
// regardless of whether the element is HTML or SVG.
className:hasSVG?MUST_USE_ATTRIBUTE:MUST_USE_PROPERTY,cols:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,colSpan:null,content:null,contentEditable:null,contextMenu:MUST_USE_ATTRIBUTE,controls:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,coords:null,crossOrigin:null,data:null, // For `<object />` acts as `src`.
dateTime:MUST_USE_ATTRIBUTE,'default':HAS_BOOLEAN_VALUE,defer:HAS_BOOLEAN_VALUE,dir:null,disabled:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:null,encType:null,form:MUST_USE_ATTRIBUTE,formAction:MUST_USE_ATTRIBUTE,formEncType:MUST_USE_ATTRIBUTE,formMethod:MUST_USE_ATTRIBUTE,formNoValidate:HAS_BOOLEAN_VALUE,formTarget:MUST_USE_ATTRIBUTE,frameBorder:MUST_USE_ATTRIBUTE,headers:null,height:MUST_USE_ATTRIBUTE,hidden:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:MUST_USE_PROPERTY,inputMode:MUST_USE_ATTRIBUTE,integrity:null,is:MUST_USE_ATTRIBUTE,keyParams:MUST_USE_ATTRIBUTE,keyType:MUST_USE_ATTRIBUTE,kind:null,label:null,lang:null,list:MUST_USE_ATTRIBUTE,loop:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,low:null,manifest:MUST_USE_ATTRIBUTE,marginHeight:null,marginWidth:null,max:null,maxLength:MUST_USE_ATTRIBUTE,media:MUST_USE_ATTRIBUTE,mediaGroup:null,method:null,min:null,minLength:MUST_USE_ATTRIBUTE,multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,name:null,nonce:MUST_USE_ATTRIBUTE,noValidate:HAS_BOOLEAN_VALUE,open:HAS_BOOLEAN_VALUE,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,rel:null,required:HAS_BOOLEAN_VALUE,reversed:HAS_BOOLEAN_VALUE,role:MUST_USE_ATTRIBUTE,rows:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,rowSpan:null,sandbox:null,scope:null,scoped:HAS_BOOLEAN_VALUE,scrolling:null,seamless:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,shape:null,size:MUST_USE_ATTRIBUTE|HAS_POSITIVE_NUMERIC_VALUE,sizes:MUST_USE_ATTRIBUTE,span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:null,src:null,srcDoc:MUST_USE_PROPERTY,srcLang:null,srcSet:MUST_USE_ATTRIBUTE,start:HAS_NUMERIC_VALUE,step:null,style:null,summary:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:MUST_USE_PROPERTY|HAS_SIDE_EFFECTS,width:MUST_USE_ATTRIBUTE,wmode:MUST_USE_ATTRIBUTE,wrap:null, /**
     * RDFa Properties
     */about:MUST_USE_ATTRIBUTE,datatype:MUST_USE_ATTRIBUTE,inlist:MUST_USE_ATTRIBUTE,prefix:MUST_USE_ATTRIBUTE, // property is also supported for OpenGraph in meta tags.
property:MUST_USE_ATTRIBUTE,resource:MUST_USE_ATTRIBUTE,'typeof':MUST_USE_ATTRIBUTE,vocab:MUST_USE_ATTRIBUTE, /**
     * Non-standard Properties
     */ // autoCapitalize and autoCorrect are supported in Mobile Safari for
// keyboard hints.
autoCapitalize:MUST_USE_ATTRIBUTE,autoCorrect:MUST_USE_ATTRIBUTE, // autoSave allows WebKit/Blink to persist values of input fields on page reloads
autoSave:null, // color is for Safari mask-icon link
color:null, // itemProp, itemScope, itemType are for
// Microdata support. See http://schema.org/docs/gs.html
itemProp:MUST_USE_ATTRIBUTE,itemScope:MUST_USE_ATTRIBUTE|HAS_BOOLEAN_VALUE,itemType:MUST_USE_ATTRIBUTE, // itemID and itemRef are for Microdata support as well but
// only specified in the the WHATWG spec document. See
// https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
itemID:MUST_USE_ATTRIBUTE,itemRef:MUST_USE_ATTRIBUTE, // results show looking glass icon and recent searches on input
// search fields in WebKit/Blink
results:null, // IE-only attribute that specifies security restrictions on an iframe
// as an alternative to the sandbox attribute on IE<10
security:MUST_USE_ATTRIBUTE, // IE-only attribute that controls focus behavior
unselectable:MUST_USE_ATTRIBUTE},DOMAttributeNames:{acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv'},DOMPropertyNames:{autoComplete:'autocomplete',autoFocus:'autofocus',autoPlay:'autoplay',autoSave:'autosave', // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
// http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
encType:'encoding',hrefLang:'hreflang',radioGroup:'radiogroup',spellCheck:'spellcheck',srcDoc:'srcdoc',srcSet:'srcset'}};module.exports=HTMLDOMPropertyConfig;},{"10":10,"130":130}],22:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 * @typechecks static-only
 */'use strict';var ReactPropTypes=_dereq_(74);var ReactPropTypeLocations=_dereq_(73);var invariant=_dereq_(144);var warning=_dereq_(155);var hasReadOnlyValue={'button':true,'checkbox':true,'image':true,'hidden':true,'radio':true,'reset':true,'submit':true};function _assertSingleLink(inputProps){!(inputProps.checkedLink==null||inputProps.valueLink==null)?"development"!=='production'?invariant(false,'Cannot provide a checkedLink and a valueLink. If you want to use '+'checkedLink, you probably don\'t want to use valueLink and vice versa.'):invariant(false):undefined;}function _assertValueLink(inputProps){_assertSingleLink(inputProps);!(inputProps.value==null&&inputProps.onChange==null)?"development"!=='production'?invariant(false,'Cannot provide a valueLink and a value or onChange event. If you want '+'to use value or onChange, you probably don\'t want to use valueLink.'):invariant(false):undefined;}function _assertCheckedLink(inputProps){_assertSingleLink(inputProps);!(inputProps.checked==null&&inputProps.onChange==null)?"development"!=='production'?invariant(false,'Cannot provide a checkedLink and a checked property or onChange event. '+'If you want to use checked or onChange, you probably don\'t want to '+'use checkedLink'):invariant(false):undefined;}var propTypes={value:function(props,propName,componentName){if(!props[propName]||hasReadOnlyValue[props.type]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');},checked:function(props,propName,componentName){if(!props[propName]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');},onChange:ReactPropTypes.func};var loggedTypeFailures={};function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';} /**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */var LinkedValueUtils={checkPropTypes:function(tagName,props,owner){for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error=propTypes[propName](props,propName,tagName,ReactPropTypeLocations.prop);}if(error instanceof Error&&!(error.message in loggedTypeFailures)){ // Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var addendum=getDeclarationErrorAddendum(owner);"development"!=='production'?warning(false,'Failed form propType: %s%s',error.message,addendum):undefined;}}}, /**
   * @param {object} inputProps Props for form component
   * @return {*} current value of the input either from value prop or link.
   */getValue:function(inputProps){if(inputProps.valueLink){_assertValueLink(inputProps);return inputProps.valueLink.value;}return inputProps.value;}, /**
   * @param {object} inputProps Props for form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */getChecked:function(inputProps){if(inputProps.checkedLink){_assertCheckedLink(inputProps);return inputProps.checkedLink.value;}return inputProps.checked;}, /**
   * @param {object} inputProps Props for form component
   * @param {SyntheticEvent} event change event to handle
   */executeOnChange:function(inputProps,event){if(inputProps.valueLink){_assertValueLink(inputProps);return inputProps.valueLink.requestChange(event.target.value);}else if(inputProps.checkedLink){_assertCheckedLink(inputProps);return inputProps.checkedLink.requestChange(event.target.checked);}else if(inputProps.onChange){return inputProps.onChange.call(undefined,event);}}};module.exports=LinkedValueUtils;},{"144":144,"155":155,"73":73,"74":74}],23:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */ // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
'use strict';function assign(target,sources){if(target==null){throw new TypeError('Object.assign target cannot be null or undefined');}var to=Object(target);var hasOwnProperty=Object.prototype.hasOwnProperty;for(var nextIndex=1;nextIndex<arguments.length;nextIndex++){var nextSource=arguments[nextIndex];if(nextSource==null){continue;}var from=Object(nextSource); // We don't currently support accessors nor proxies. Therefore this
// copy cannot throw. If we ever supported this then we must handle
// exceptions and side-effects. We don't support symbols so they won't
// be transferred.
for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}}return to;}module.exports=assign;},{}],24:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */'use strict';var invariant=_dereq_(144); /**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */var oneArgumentPooler=function(copyFieldsFrom){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,copyFieldsFrom);return instance;}else {return new Klass(copyFieldsFrom);}};var twoArgumentPooler=function(a1,a2){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2);return instance;}else {return new Klass(a1,a2);}};var threeArgumentPooler=function(a1,a2,a3){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3);return instance;}else {return new Klass(a1,a2,a3);}};var fourArgumentPooler=function(a1,a2,a3,a4){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4);return instance;}else {return new Klass(a1,a2,a3,a4);}};var fiveArgumentPooler=function(a1,a2,a3,a4,a5){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4,a5);return instance;}else {return new Klass(a1,a2,a3,a4,a5);}};var standardReleaser=function(instance){var Klass=this;!(instance instanceof Klass)?"development"!=='production'?invariant(false,'Trying to release an instance into a pool of a different type.'):invariant(false):undefined;instance.destructor();if(Klass.instancePool.length<Klass.poolSize){Klass.instancePool.push(instance);}};var DEFAULT_POOL_SIZE=10;var DEFAULT_POOLER=oneArgumentPooler; /**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */var addPoolingTo=function(CopyConstructor,pooler){var NewKlass=CopyConstructor;NewKlass.instancePool=[];NewKlass.getPooled=pooler||DEFAULT_POOLER;if(!NewKlass.poolSize){NewKlass.poolSize=DEFAULT_POOL_SIZE;}NewKlass.release=standardReleaser;return NewKlass;};var PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fourArgumentPooler:fourArgumentPooler,fiveArgumentPooler:fiveArgumentPooler};module.exports=PooledClass;},{"144":144}],25:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserComponentMixin
 */'use strict';var ReactInstanceMap=_dereq_(62);var findDOMNode=_dereq_(108);var warning=_dereq_(155);var didWarnKey='_getDOMNodeDidWarn';var ReactBrowserComponentMixin={ /**
   * Returns the DOM node rendered by this component.
   *
   * @return {DOMElement} The root node of this component.
   * @final
   * @protected
   */getDOMNode:function(){"development"!=='production'?warning(this.constructor[didWarnKey],'%s.getDOMNode(...) is deprecated. Please use '+'ReactDOM.findDOMNode(instance) instead.',ReactInstanceMap.get(this).getName()||this.tagName||'Unknown'):undefined;this.constructor[didWarnKey]=true;return findDOMNode(this);}};module.exports=ReactBrowserComponentMixin;},{"108":108,"155":155,"62":62}],26:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 * @typechecks static-only
 */'use strict';var EventConstants=_dereq_(15);var EventPluginHub=_dereq_(16);var EventPluginRegistry=_dereq_(17);var ReactEventEmitterMixin=_dereq_(57);var ReactPerf=_dereq_(71);var ViewportMetrics=_dereq_(101);var assign=_dereq_(23);var isEventSupported=_dereq_(119); /**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */var alreadyListeningTo={};var isMonitoringScrollValue=false;var reactTopListenersCounter=0; // For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping={topAbort:'abort',topBlur:'blur',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topChange:'change',topClick:'click',topCompositionEnd:'compositionend',topCompositionStart:'compositionstart',topCompositionUpdate:'compositionupdate',topContextMenu:'contextmenu',topCopy:'copy',topCut:'cut',topDoubleClick:'dblclick',topDrag:'drag',topDragEnd:'dragend',topDragEnter:'dragenter',topDragExit:'dragexit',topDragLeave:'dragleave',topDragOver:'dragover',topDragStart:'dragstart',topDrop:'drop',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topFocus:'focus',topInput:'input',topKeyDown:'keydown',topKeyPress:'keypress',topKeyUp:'keyup',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topMouseDown:'mousedown',topMouseMove:'mousemove',topMouseOut:'mouseout',topMouseOver:'mouseover',topMouseUp:'mouseup',topPaste:'paste',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topScroll:'scroll',topSeeked:'seeked',topSeeking:'seeking',topSelectionChange:'selectionchange',topStalled:'stalled',topSuspend:'suspend',topTextInput:'textInput',topTimeUpdate:'timeupdate',topTouchCancel:'touchcancel',topTouchEnd:'touchend',topTouchMove:'touchmove',topTouchStart:'touchstart',topVolumeChange:'volumechange',topWaiting:'waiting',topWheel:'wheel'}; /**
 * To ensure no conflicts with other potential React instances on the page
 */var topListenersIDKey='_reactListenersID'+String(Math.random()).slice(2);function getListeningForDocument(mountAt){ // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
if(!Object.prototype.hasOwnProperty.call(mountAt,topListenersIDKey)){mountAt[topListenersIDKey]=reactTopListenersCounter++;alreadyListeningTo[mountAt[topListenersIDKey]]={};}return alreadyListeningTo[mountAt[topListenersIDKey]];} /**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */var ReactBrowserEventEmitter=assign({},ReactEventEmitterMixin,{ /**
   * Injectable event backend
   */ReactEventListener:null,injection:{ /**
     * @param {object} ReactEventListener
     */injectReactEventListener:function(ReactEventListener){ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);ReactBrowserEventEmitter.ReactEventListener=ReactEventListener;}}, /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */setEnabled:function(enabled){if(ReactBrowserEventEmitter.ReactEventListener){ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);}}, /**
   * @return {boolean} True if callbacks are enabled.
   */isEnabled:function(){return !!(ReactBrowserEventEmitter.ReactEventListener&&ReactBrowserEventEmitter.ReactEventListener.isEnabled());}, /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */listenTo:function(registrationName,contentDocumentHandle){var mountAt=contentDocumentHandle;var isListening=getListeningForDocument(mountAt);var dependencies=EventPluginRegistry.registrationNameDependencies[registrationName];var topLevelTypes=EventConstants.topLevelTypes;for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){if(dependency===topLevelTypes.topWheel){if(isEventSupported('wheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'wheel',mountAt);}else if(isEventSupported('mousewheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'mousewheel',mountAt);}else { // Firefox needs to capture a different mouse scroll event.
// @see http://www.quirksmode.org/dom/events/tests/scroll.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'DOMMouseScroll',mountAt);}}else if(dependency===topLevelTypes.topScroll){if(isEventSupported('scroll',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll,'scroll',mountAt);}else {ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll,'scroll',ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);}}else if(dependency===topLevelTypes.topFocus||dependency===topLevelTypes.topBlur){if(isEventSupported('focus',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus,'focus',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur,'blur',mountAt);}else if(isEventSupported('focusin')){ // IE has `focusin` and `focusout` events which bubble.
// @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus,'focusin',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur,'focusout',mountAt);} // to make sure blur and focus event listeners are only attached once
isListening[topLevelTypes.topBlur]=true;isListening[topLevelTypes.topFocus]=true;}else if(topEventMapping.hasOwnProperty(dependency)){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency,topEventMapping[dependency],mountAt);}isListening[dependency]=true;}}},trapBubbledEvent:function(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType,handlerBaseName,handle);},trapCapturedEvent:function(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType,handlerBaseName,handle);}, /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */ensureScrollValueMonitoring:function(){if(!isMonitoringScrollValue){var refresh=ViewportMetrics.refreshScrollValues;ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);isMonitoringScrollValue=true;}},eventNameDispatchConfigs:EventPluginHub.eventNameDispatchConfigs,registrationNameModules:EventPluginHub.registrationNameModules,putListener:EventPluginHub.putListener,getListener:EventPluginHub.getListener,deleteListener:EventPluginHub.deleteListener,deleteAllListeners:EventPluginHub.deleteAllListeners});ReactPerf.measureMethods(ReactBrowserEventEmitter,'ReactBrowserEventEmitter',{putListener:'putListener',deleteListener:'deleteListener'});module.exports=ReactBrowserEventEmitter;},{"101":101,"119":119,"15":15,"16":16,"17":17,"23":23,"57":57,"71":71}],27:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildReconciler
 * @typechecks static-only
 */'use strict';var ReactReconciler=_dereq_(76);var instantiateReactComponent=_dereq_(118);var shouldUpdateReactComponent=_dereq_(126);var traverseAllChildren=_dereq_(127);var warning=_dereq_(155);function instantiateChild(childInstances,child,name){ // We found a component instance.
var keyUnique=childInstances[name]===undefined;if("development"!=='production'){"development"!=='production'?warning(keyUnique,'flattenChildren(...): Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, only '+'the first child will be used.',name):undefined;}if(child!=null&&keyUnique){childInstances[name]=instantiateReactComponent(child,null);}} /**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */var ReactChildReconciler={ /**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */instantiateChildren:function(nestedChildNodes,transaction,context){if(nestedChildNodes==null){return null;}var childInstances={};traverseAllChildren(nestedChildNodes,instantiateChild,childInstances);return childInstances;}, /**
   * Updates the rendered children and returns a new set of children.
   *
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextChildren Flat child element maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */updateChildren:function(prevChildren,nextChildren,transaction,context){ // We currently don't have a way to track moves here but if we use iterators
// instead of for..in we can zip the iterators and check if an item has
// moved.
// TODO: If nothing has changed, return the prevChildren object so that we
// can quickly bailout if nothing has changed.
if(!nextChildren&&!prevChildren){return null;}var name;for(name in nextChildren){if(!nextChildren.hasOwnProperty(name)){continue;}var prevChild=prevChildren&&prevChildren[name];var prevElement=prevChild&&prevChild._currentElement;var nextElement=nextChildren[name];if(prevChild!=null&&shouldUpdateReactComponent(prevElement,nextElement)){ReactReconciler.receiveComponent(prevChild,nextElement,transaction,context);nextChildren[name]=prevChild;}else {if(prevChild){ReactReconciler.unmountComponent(prevChild,name);} // The child must be instantiated before it's mounted.
var nextChildInstance=instantiateReactComponent(nextElement,null);nextChildren[name]=nextChildInstance;}} // Unmount children that are no longer present.
for(name in prevChildren){if(prevChildren.hasOwnProperty(name)&&!(nextChildren&&nextChildren.hasOwnProperty(name))){ReactReconciler.unmountComponent(prevChildren[name]);}}return nextChildren;}, /**
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   *
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */unmountChildren:function(renderedChildren){for(var name in renderedChildren){if(renderedChildren.hasOwnProperty(name)){var renderedChild=renderedChildren[name];ReactReconciler.unmountComponent(renderedChild);}}}};module.exports=ReactChildReconciler;},{"118":118,"126":126,"127":127,"155":155,"76":76}],28:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */'use strict';var PooledClass=_dereq_(24);var ReactElement=_dereq_(52);var emptyFunction=_dereq_(136);var traverseAllChildren=_dereq_(127);var twoArgumentPooler=PooledClass.twoArgumentPooler;var fourArgumentPooler=PooledClass.fourArgumentPooler;var userProvidedKeyEscapeRegex=/\/(?!\/)/g;function escapeUserProvidedKey(text){return (''+text).replace(userProvidedKeyEscapeRegex,'//');} /**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */function ForEachBookKeeping(forEachFunction,forEachContext){this.func=forEachFunction;this.context=forEachContext;this.count=0;}ForEachBookKeeping.prototype.destructor=function(){this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler);function forEachSingleChild(bookKeeping,child,name){var func=bookKeeping.func;var context=bookKeeping.context;func.call(context,child,bookKeeping.count++);} /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */function forEachChildren(children,forEachFunc,forEachContext){if(children==null){return children;}var traverseContext=ForEachBookKeeping.getPooled(forEachFunc,forEachContext);traverseAllChildren(children,forEachSingleChild,traverseContext);ForEachBookKeeping.release(traverseContext);} /**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */function MapBookKeeping(mapResult,keyPrefix,mapFunction,mapContext){this.result=mapResult;this.keyPrefix=keyPrefix;this.func=mapFunction;this.context=mapContext;this.count=0;}MapBookKeeping.prototype.destructor=function(){this.result=null;this.keyPrefix=null;this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(MapBookKeeping,fourArgumentPooler);function mapSingleChildIntoContext(bookKeeping,child,childKey){var result=bookKeeping.result;var keyPrefix=bookKeeping.keyPrefix;var func=bookKeeping.func;var context=bookKeeping.context;var mappedChild=func.call(context,child,bookKeeping.count++);if(Array.isArray(mappedChild)){mapIntoWithKeyPrefixInternal(mappedChild,result,childKey,emptyFunction.thatReturnsArgument);}else if(mappedChild!=null){if(ReactElement.isValidElement(mappedChild)){mappedChild=ReactElement.cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
keyPrefix+(mappedChild!==child?escapeUserProvidedKey(mappedChild.key||'')+'/':'')+childKey);}result.push(mappedChild);}}function mapIntoWithKeyPrefixInternal(children,array,prefix,func,context){var escapedPrefix='';if(prefix!=null){escapedPrefix=escapeUserProvidedKey(prefix)+'/';}var traverseContext=MapBookKeeping.getPooled(array,escapedPrefix,func,context);traverseAllChildren(children,mapSingleChildIntoContext,traverseContext);MapBookKeeping.release(traverseContext);} /**
 * Maps children that are typically specified as `props.children`.
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */function mapChildren(children,func,context){if(children==null){return children;}var result=[];mapIntoWithKeyPrefixInternal(children,result,null,func,context);return result;}function forEachSingleChildDummy(traverseContext,child,name){return null;} /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */function countChildren(children,context){return traverseAllChildren(children,forEachSingleChildDummy,null);} /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 */function toArray(children){var result=[];mapIntoWithKeyPrefixInternal(children,result,null,emptyFunction.thatReturnsArgument);return result;}var ReactChildren={forEach:forEachChildren,map:mapChildren,mapIntoWithKeyPrefixInternal:mapIntoWithKeyPrefixInternal,count:countChildren,toArray:toArray};module.exports=ReactChildren;},{"127":127,"136":136,"24":24,"52":52}],29:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactClass
 */'use strict';var ReactComponent=_dereq_(30);var ReactElement=_dereq_(52);var ReactPropTypeLocations=_dereq_(73);var ReactPropTypeLocationNames=_dereq_(72);var ReactNoopUpdateQueue=_dereq_(69);var assign=_dereq_(23);var emptyObject=_dereq_(137);var invariant=_dereq_(144);var keyMirror=_dereq_(147);var keyOf=_dereq_(148);var warning=_dereq_(155);var MIXINS_KEY=keyOf({mixins:null}); /**
 * Policies that describe methods in `ReactClassInterface`.
 */var SpecPolicy=keyMirror({ /**
   * These methods may be defined only once by the class specification or mixin.
   */DEFINE_ONCE:null, /**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */DEFINE_MANY:null, /**
   * These methods are overriding the base class.
   */OVERRIDE_BASE:null, /**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */DEFINE_MANY_MERGED:null});var injectedMixins=[];var warnedSetProps=false;function warnSetProps(){if(!warnedSetProps){warnedSetProps=true;"development"!=='production'?warning(false,'setProps(...) and replaceProps(...) are deprecated. '+'Instead, call render again at the top level.'):undefined;}} /**
 * Composite components are higher-level components that compose other composite
 * or native components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */var ReactClassInterface={ /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */mixins:SpecPolicy.DEFINE_MANY, /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */statics:SpecPolicy.DEFINE_MANY, /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */propTypes:SpecPolicy.DEFINE_MANY, /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */contextTypes:SpecPolicy.DEFINE_MANY, /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */childContextTypes:SpecPolicy.DEFINE_MANY, // ==== Definition methods ====
/**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */getDefaultProps:SpecPolicy.DEFINE_MANY_MERGED, /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */getInitialState:SpecPolicy.DEFINE_MANY_MERGED, /**
   * @return {object}
   * @optional
   */getChildContext:SpecPolicy.DEFINE_MANY_MERGED, /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */render:SpecPolicy.DEFINE_ONCE, // ==== Delegate methods ====
/**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */componentWillMount:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidMount:SpecPolicy.DEFINE_MANY, /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */componentWillReceiveProps:SpecPolicy.DEFINE_MANY, /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */shouldComponentUpdate:SpecPolicy.DEFINE_ONCE, /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */componentWillUpdate:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidUpdate:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */componentWillUnmount:SpecPolicy.DEFINE_MANY, // ==== Advanced methods ====
/**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */updateComponent:SpecPolicy.OVERRIDE_BASE}; /**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */var RESERVED_SPEC_KEYS={displayName:function(Constructor,displayName){Constructor.displayName=displayName;},mixins:function(Constructor,mixins){if(mixins){for(var i=0;i<mixins.length;i++){mixSpecIntoComponent(Constructor,mixins[i]);}}},childContextTypes:function(Constructor,childContextTypes){if("development"!=='production'){validateTypeDef(Constructor,childContextTypes,ReactPropTypeLocations.childContext);}Constructor.childContextTypes=assign({},Constructor.childContextTypes,childContextTypes);},contextTypes:function(Constructor,contextTypes){if("development"!=='production'){validateTypeDef(Constructor,contextTypes,ReactPropTypeLocations.context);}Constructor.contextTypes=assign({},Constructor.contextTypes,contextTypes);}, /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */getDefaultProps:function(Constructor,getDefaultProps){if(Constructor.getDefaultProps){Constructor.getDefaultProps=createMergedResultFunction(Constructor.getDefaultProps,getDefaultProps);}else {Constructor.getDefaultProps=getDefaultProps;}},propTypes:function(Constructor,propTypes){if("development"!=='production'){validateTypeDef(Constructor,propTypes,ReactPropTypeLocations.prop);}Constructor.propTypes=assign({},Constructor.propTypes,propTypes);},statics:function(Constructor,statics){mixStaticSpecIntoComponent(Constructor,statics);},autobind:function(){}}; // noop
function validateTypeDef(Constructor,typeDef,location){for(var propName in typeDef){if(typeDef.hasOwnProperty(propName)){ // use a warning instead of an invariant so components
// don't show up in prod but not in __DEV__
"development"!=='production'?warning(typeof typeDef[propName]==='function','%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',Constructor.displayName||'ReactClass',ReactPropTypeLocationNames[location],propName):undefined;}}}function validateMethodOverride(proto,name){var specPolicy=ReactClassInterface.hasOwnProperty(name)?ReactClassInterface[name]:null; // Disallow overriding of base class methods unless explicitly allowed.
if(ReactClassMixin.hasOwnProperty(name)){!(specPolicy===SpecPolicy.OVERRIDE_BASE)?"development"!=='production'?invariant(false,'ReactClassInterface: You are attempting to override '+'`%s` from your class specification. Ensure that your method names '+'do not overlap with React methods.',name):invariant(false):undefined;} // Disallow defining methods more than once unless explicitly allowed.
if(proto.hasOwnProperty(name)){!(specPolicy===SpecPolicy.DEFINE_MANY||specPolicy===SpecPolicy.DEFINE_MANY_MERGED)?"development"!=='production'?invariant(false,'ReactClassInterface: You are attempting to define '+'`%s` on your component more than once. This conflict may be due '+'to a mixin.',name):invariant(false):undefined;}} /**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classses.
 */function mixSpecIntoComponent(Constructor,spec){if(!spec){return;}!(typeof spec!=='function')?"development"!=='production'?invariant(false,'ReactClass: You\'re attempting to '+'use a component class as a mixin. Instead, just use a regular object.'):invariant(false):undefined;!!ReactElement.isValidElement(spec)?"development"!=='production'?invariant(false,'ReactClass: You\'re attempting to '+'use a component as a mixin. Instead, just use a regular object.'):invariant(false):undefined;var proto=Constructor.prototype; // By handling mixins before any other properties, we ensure the same
// chaining order is applied to methods with DEFINE_MANY policy, whether
// mixins are listed before or after these methods in the spec.
if(spec.hasOwnProperty(MIXINS_KEY)){RESERVED_SPEC_KEYS.mixins(Constructor,spec.mixins);}for(var name in spec){if(!spec.hasOwnProperty(name)){continue;}if(name===MIXINS_KEY){ // We have already handled mixins in a special case above.
continue;}var property=spec[name];validateMethodOverride(proto,name);if(RESERVED_SPEC_KEYS.hasOwnProperty(name)){RESERVED_SPEC_KEYS[name](Constructor,property);}else { // Setup methods on prototype:
// The following member methods should not be automatically bound:
// 1. Expected ReactClass methods (in the "interface").
// 2. Overridden methods (that were mixed in).
var isReactClassMethod=ReactClassInterface.hasOwnProperty(name);var isAlreadyDefined=proto.hasOwnProperty(name);var isFunction=typeof property==='function';var shouldAutoBind=isFunction&&!isReactClassMethod&&!isAlreadyDefined&&spec.autobind!==false;if(shouldAutoBind){if(!proto.__reactAutoBindMap){proto.__reactAutoBindMap={};}proto.__reactAutoBindMap[name]=property;proto[name]=property;}else {if(isAlreadyDefined){var specPolicy=ReactClassInterface[name]; // These cases should already be caught by validateMethodOverride.
!(isReactClassMethod&&(specPolicy===SpecPolicy.DEFINE_MANY_MERGED||specPolicy===SpecPolicy.DEFINE_MANY))?"development"!=='production'?invariant(false,'ReactClass: Unexpected spec policy %s for key %s '+'when mixing in component specs.',specPolicy,name):invariant(false):undefined; // For methods which are defined more than once, call the existing
// methods before calling the new property, merging if appropriate.
if(specPolicy===SpecPolicy.DEFINE_MANY_MERGED){proto[name]=createMergedResultFunction(proto[name],property);}else if(specPolicy===SpecPolicy.DEFINE_MANY){proto[name]=createChainedFunction(proto[name],property);}}else {proto[name]=property;if("development"!=='production'){ // Add verbose displayName to the function, which helps when looking
// at profiling tools.
if(typeof property==='function'&&spec.displayName){proto[name].displayName=spec.displayName+'_'+name;}}}}}}}function mixStaticSpecIntoComponent(Constructor,statics){if(!statics){return;}for(var name in statics){var property=statics[name];if(!statics.hasOwnProperty(name)){continue;}var isReserved=name in RESERVED_SPEC_KEYS;!!isReserved?"development"!=='production'?invariant(false,'ReactClass: You are attempting to define a reserved '+'property, `%s`, that shouldn\'t be on the "statics" key. Define it '+'as an instance property instead; it will still be accessible on the '+'constructor.',name):invariant(false):undefined;var isInherited=name in Constructor;!!isInherited?"development"!=='production'?invariant(false,'ReactClass: You are attempting to define '+'`%s` on your component more than once. This conflict may be '+'due to a mixin.',name):invariant(false):undefined;Constructor[name]=property;}} /**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */function mergeIntoWithNoDuplicateKeys(one,two){!(one&&two&&typeof one==='object'&&typeof two==='object')?"development"!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'):invariant(false):undefined;for(var key in two){if(two.hasOwnProperty(key)){!(one[key]===undefined)?"development"!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): '+'Tried to merge two objects with the same key: `%s`. This conflict '+'may be due to a mixin; in particular, this may be caused by two '+'getInitialState() or getDefaultProps() methods returning objects '+'with clashing keys.',key):invariant(false):undefined;one[key]=two[key];}}return one;} /**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createMergedResultFunction(one,two){return function mergedResult(){var a=one.apply(this,arguments);var b=two.apply(this,arguments);if(a==null){return b;}else if(b==null){return a;}var c={};mergeIntoWithNoDuplicateKeys(c,a);mergeIntoWithNoDuplicateKeys(c,b);return c;};} /**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createChainedFunction(one,two){return function chainedFunction(){one.apply(this,arguments);two.apply(this,arguments);};} /**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */function bindAutoBindMethod(component,method){var boundMethod=method.bind(component);if("development"!=='production'){boundMethod.__reactBoundContext=component;boundMethod.__reactBoundMethod=method;boundMethod.__reactBoundArguments=null;var componentName=component.constructor.displayName;var _bind=boundMethod.bind; /* eslint-disable block-scoped-var, no-undef */boundMethod.bind=function(newThis){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];} // User is trying to bind() an autobound method; we effectively will
// ignore the value of "this" that the user is trying to use, so
// let's warn.
if(newThis!==component&&newThis!==null){"development"!=='production'?warning(false,'bind(): React component methods may only be bound to the '+'component instance. See %s',componentName):undefined;}else if(!args.length){"development"!=='production'?warning(false,'bind(): You are binding a component method to the component. '+'React does this for you automatically in a high-performance '+'way, so you can safely remove this call. See %s',componentName):undefined;return boundMethod;}var reboundMethod=_bind.apply(boundMethod,arguments);reboundMethod.__reactBoundContext=component;reboundMethod.__reactBoundMethod=method;reboundMethod.__reactBoundArguments=args;return reboundMethod; /* eslint-enable */};}return boundMethod;} /**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */function bindAutoBindMethods(component){for(var autoBindKey in component.__reactAutoBindMap){if(component.__reactAutoBindMap.hasOwnProperty(autoBindKey)){var method=component.__reactAutoBindMap[autoBindKey];component[autoBindKey]=bindAutoBindMethod(component,method);}}} /**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */var ReactClassMixin={ /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */replaceState:function(newState,callback){this.updater.enqueueReplaceState(this,newState);if(callback){this.updater.enqueueCallback(this,callback);}}, /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function(){return this.updater.isMounted(this);}, /**
   * Sets a subset of the props.
   *
   * @param {object} partialProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */setProps:function(partialProps,callback){if("development"!=='production'){warnSetProps();}this.updater.enqueueSetProps(this,partialProps);if(callback){this.updater.enqueueCallback(this,callback);}}, /**
   * Replace all the props.
   *
   * @param {object} newProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */replaceProps:function(newProps,callback){if("development"!=='production'){warnSetProps();}this.updater.enqueueReplaceProps(this,newProps);if(callback){this.updater.enqueueCallback(this,callback);}}};var ReactClassComponent=function(){};assign(ReactClassComponent.prototype,ReactComponent.prototype,ReactClassMixin); /**
 * Module for creating composite components.
 *
 * @class ReactClass
 */var ReactClass={ /**
   * Creates a composite component class given a class specification.
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */createClass:function(spec){var Constructor=function(props,context,updater){ // This constructor is overridden by mocks. The argument is used
// by mocks to assert on what gets mounted.
if("development"!=='production'){"development"!=='production'?warning(this instanceof Constructor,'Something is calling a React component directly. Use a factory or '+'JSX instead. See: https://fb.me/react-legacyfactory'):undefined;} // Wire up auto-binding
if(this.__reactAutoBindMap){bindAutoBindMethods(this);}this.props=props;this.context=context;this.refs=emptyObject;this.updater=updater||ReactNoopUpdateQueue;this.state=null; // ReactClasses doesn't have constructors. Instead, they use the
// getInitialState and componentWillMount methods for initialization.
var initialState=this.getInitialState?this.getInitialState():null;if("development"!=='production'){ // We allow auto-mocks to proceed as if they're returning null.
if(typeof initialState==='undefined'&&this.getInitialState._isMockFunction){ // This is probably bad practice. Consider warning here and
// deprecating this convenience.
initialState=null;}}!(typeof initialState==='object'&&!Array.isArray(initialState))?"development"!=='production'?invariant(false,'%s.getInitialState(): must return an object or null',Constructor.displayName||'ReactCompositeComponent'):invariant(false):undefined;this.state=initialState;};Constructor.prototype=new ReactClassComponent();Constructor.prototype.constructor=Constructor;injectedMixins.forEach(mixSpecIntoComponent.bind(null,Constructor));mixSpecIntoComponent(Constructor,spec); // Initialize the defaultProps property after all mixins have been merged.
if(Constructor.getDefaultProps){Constructor.defaultProps=Constructor.getDefaultProps();}if("development"!=='production'){ // This is a tag to indicate that the use of these method names is ok,
// since it's used with createClass. If it's not, then it's likely a
// mistake so we'll warn you to use the static property, property
// initializer or constructor respectively.
if(Constructor.getDefaultProps){Constructor.getDefaultProps.isReactClassApproved={};}if(Constructor.prototype.getInitialState){Constructor.prototype.getInitialState.isReactClassApproved={};}}!Constructor.prototype.render?"development"!=='production'?invariant(false,'createClass(...): Class specification must implement a `render` method.'):invariant(false):undefined;if("development"!=='production'){"development"!=='production'?warning(!Constructor.prototype.componentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',spec.displayName||'A component'):undefined;"development"!=='production'?warning(!Constructor.prototype.componentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',spec.displayName||'A component'):undefined;} // Reduce time spent doing lookups by setting these on the prototype.
for(var methodName in ReactClassInterface){if(!Constructor.prototype[methodName]){Constructor.prototype[methodName]=null;}}return Constructor;},injection:{injectMixin:function(mixin){injectedMixins.push(mixin);}}};module.exports=ReactClass;},{"137":137,"144":144,"147":147,"148":148,"155":155,"23":23,"30":30,"52":52,"69":69,"72":72,"73":73}],30:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */'use strict';var ReactNoopUpdateQueue=_dereq_(69);var canDefineProperty=_dereq_(104);var emptyObject=_dereq_(137);var invariant=_dereq_(144);var warning=_dereq_(155); /**
 * Base class helpers for the updating state of a component.
 */function ReactComponent(props,context,updater){this.props=props;this.context=context;this.refs=emptyObject; // We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=updater||ReactNoopUpdateQueue;}ReactComponent.prototype.isReactComponent={}; /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ReactComponent.prototype.setState=function(partialState,callback){!(typeof partialState==='object'||typeof partialState==='function'||partialState==null)?"development"!=='production'?invariant(false,'setState(...): takes an object of state variables to update or a '+'function which returns an object of state variables.'):invariant(false):undefined;if("development"!=='production'){"development"!=='production'?warning(partialState!=null,'setState(...): You passed an undefined or null state object; '+'instead, use forceUpdate().'):undefined;}this.updater.enqueueSetState(this,partialState);if(callback){this.updater.enqueueCallback(this,callback);}}; /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ReactComponent.prototype.forceUpdate=function(callback){this.updater.enqueueForceUpdate(this);if(callback){this.updater.enqueueCallback(this,callback);}}; /**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */if("development"!=='production'){var deprecatedAPIs={getDOMNode:['getDOMNode','Use ReactDOM.findDOMNode(component) instead.'],isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in '+'componentWillUnmount to prevent memory leaks.'],replaceProps:['replaceProps','Instead, call render again at the top level.'],replaceState:['replaceState','Refactor your code to use setState instead (see '+'https://github.com/facebook/react/issues/3236).'],setProps:['setProps','Instead, call render again at the top level.']};var defineDeprecationWarning=function(methodName,info){if(canDefineProperty){Object.defineProperty(ReactComponent.prototype,methodName,{get:function(){"development"!=='production'?warning(false,'%s(...) is deprecated in plain JavaScript React classes. %s',info[0],info[1]):undefined;return undefined;}});}};for(var fnName in deprecatedAPIs){if(deprecatedAPIs.hasOwnProperty(fnName)){defineDeprecationWarning(fnName,deprecatedAPIs[fnName]);}}}module.exports=ReactComponent;},{"104":104,"137":137,"144":144,"155":155,"69":69}],31:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */'use strict';var ReactDOMIDOperations=_dereq_(40);var ReactMount=_dereq_(65); /**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */var ReactComponentBrowserEnvironment={processChildrenUpdates:ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID, /**
   * If a particular environment requires that some resources be cleaned up,
   * specify this in the injected Mixin. In the DOM, we would likely want to
   * purge any cached node ID lookups.
   *
   * @private
   */unmountIDFromEnvironment:function(rootNodeID){ReactMount.purgeID(rootNodeID);}};module.exports=ReactComponentBrowserEnvironment;},{"40":40,"65":65}],32:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentEnvironment
 */'use strict';var invariant=_dereq_(144);var injected=false;var ReactComponentEnvironment={ /**
   * Optionally injectable environment dependent cleanup hook. (server vs.
   * browser etc). Example: A browser system caches DOM nodes based on component
   * ID and must remove that cache entry when this instance is unmounted.
   */unmountIDFromEnvironment:null, /**
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */replaceNodeWithMarkupByID:null, /**
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */processChildrenUpdates:null,injection:{injectEnvironment:function(environment){!!injected?"development"!=='production'?invariant(false,'ReactCompositeComponent: injectEnvironment() can only be called once.'):invariant(false):undefined;ReactComponentEnvironment.unmountIDFromEnvironment=environment.unmountIDFromEnvironment;ReactComponentEnvironment.replaceNodeWithMarkupByID=environment.replaceNodeWithMarkupByID;ReactComponentEnvironment.processChildrenUpdates=environment.processChildrenUpdates;injected=true;}}};module.exports=ReactComponentEnvironment;},{"144":144}],33:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */'use strict';var ReactComponentEnvironment=_dereq_(32);var ReactCurrentOwner=_dereq_(34);var ReactElement=_dereq_(52);var ReactInstanceMap=_dereq_(62);var ReactPerf=_dereq_(71);var ReactPropTypeLocations=_dereq_(73);var ReactPropTypeLocationNames=_dereq_(72);var ReactReconciler=_dereq_(76);var ReactUpdateQueue=_dereq_(82);var assign=_dereq_(23);var emptyObject=_dereq_(137);var invariant=_dereq_(144);var shouldUpdateReactComponent=_dereq_(126);var warning=_dereq_(155);function getDeclarationErrorAddendum(component){var owner=component._currentElement._owner||null;if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';}function StatelessComponent(Component){}StatelessComponent.prototype.render=function(){var Component=ReactInstanceMap.get(this)._currentElement.type;return Component(this.props,this.context,this.updater);}; /**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 */ /**
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 *
 * @private
 */var nextMountID=1; /**
 * @lends {ReactCompositeComponent.prototype}
 */var ReactCompositeComponentMixin={ /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */construct:function(element){this._currentElement=element;this._rootNodeID=null;this._instance=null; // See ReactUpdateQueue
this._pendingElement=null;this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;this._renderedComponent=null;this._context=null;this._mountOrder=0;this._topLevelWrapper=null; // See ReactUpdates and ReactUpdateQueue.
this._pendingCallbacks=null;}, /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function(rootID,transaction,context){this._context=context;this._mountOrder=nextMountID++;this._rootNodeID=rootID;var publicProps=this._processProps(this._currentElement.props);var publicContext=this._processContext(context);var Component=this._currentElement.type; // Initialize the public class
var inst;var renderedElement; // This is a way to detect if Component is a stateless arrow function
// component, which is not newable. It might not be 100% reliable but is
// something we can do until we start detecting that Component extends
// React.Component. We already assume that typeof Component === 'function'.
var canInstantiate='prototype' in Component;if(canInstantiate){if("development"!=='production'){ReactCurrentOwner.current=this;try{inst=new Component(publicProps,publicContext,ReactUpdateQueue);}finally {ReactCurrentOwner.current=null;}}else {inst=new Component(publicProps,publicContext,ReactUpdateQueue);}}if(!canInstantiate||inst===null||inst===false||ReactElement.isValidElement(inst)){renderedElement=inst;inst=new StatelessComponent(Component);}if("development"!=='production'){ // This will throw later in _renderValidatedComponent, but add an early
// warning now to help debugging
if(inst.render==null){"development"!=='production'?warning(false,'%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`, returned '+'null/false from a stateless component, or tried to render an '+'element whose type is a function that isn\'t a React component.',Component.displayName||Component.name||'Component'):undefined;}else { // We support ES6 inheriting from React.Component, the module pattern,
// and stateless components, but not ES6 classes that don't extend
"development"!=='production'?warning(Component.prototype&&Component.prototype.isReactComponent||!canInstantiate||!(inst instanceof Component),'%s(...): React component classes must extend React.Component.',Component.displayName||Component.name||'Component'):undefined;}} // These should be set up in the constructor, but as a convenience for
// simpler class abstractions, we set them up after the fact.
inst.props=publicProps;inst.context=publicContext;inst.refs=emptyObject;inst.updater=ReactUpdateQueue;this._instance=inst; // Store a reference from the instance back to the internal representation
ReactInstanceMap.set(inst,this);if("development"!=='production'){ // Since plain JS classes are defined without any special initialization
// logic, we can not catch common errors early. Therefore, we have to
// catch them here, at initialization time, instead.
"development"!=='production'?warning(!inst.getInitialState||inst.getInitialState.isReactClassApproved,'getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',this.getName()||'a component'):undefined;"development"!=='production'?warning(!inst.getDefaultProps||inst.getDefaultProps.isReactClassApproved,'getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',this.getName()||'a component'):undefined;"development"!=='production'?warning(!inst.propTypes,'propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',this.getName()||'a component'):undefined;"development"!=='production'?warning(!inst.contextTypes,'contextTypes was defined as an instance property on %s. Use a '+'static property to define contextTypes instead.',this.getName()||'a component'):undefined;"development"!=='production'?warning(typeof inst.componentShouldUpdate!=='function','%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',this.getName()||'A component'):undefined;"development"!=='production'?warning(typeof inst.componentDidUnmount!=='function','%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',this.getName()||'A component'):undefined;"development"!=='production'?warning(typeof inst.componentWillRecieveProps!=='function','%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',this.getName()||'A component'):undefined;}var initialState=inst.state;if(initialState===undefined){inst.state=initialState=null;}!(typeof initialState==='object'&&!Array.isArray(initialState))?"development"!=='production'?invariant(false,'%s.state: must be set to an object or null',this.getName()||'ReactCompositeComponent'):invariant(false):undefined;this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;if(inst.componentWillMount){inst.componentWillMount(); // When mounting, calls to `setState` by `componentWillMount` will set
// `this._pendingStateQueue` without triggering a re-render.
if(this._pendingStateQueue){inst.state=this._processPendingState(inst.props,inst.context);}} // If not a stateless component, we now render
if(renderedElement===undefined){renderedElement=this._renderValidatedComponent();}this._renderedComponent=this._instantiateReactComponent(renderedElement);var markup=ReactReconciler.mountComponent(this._renderedComponent,rootID,transaction,this._processChildContext(context));if(inst.componentDidMount){transaction.getReactMountReady().enqueue(inst.componentDidMount,inst);}return markup;}, /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function(){var inst=this._instance;if(inst.componentWillUnmount){inst.componentWillUnmount();}ReactReconciler.unmountComponent(this._renderedComponent);this._renderedComponent=null;this._instance=null; // Reset pending fields
// Even if this component is scheduled for another update in ReactUpdates,
// it would still be ignored because these fields are reset.
this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;this._pendingCallbacks=null;this._pendingElement=null; // These fields do not really need to be reset since this object is no
// longer accessible.
this._context=null;this._rootNodeID=null;this._topLevelWrapper=null; // Delete the reference from the instance to this internal representation
// which allow the internals to be properly cleaned up even if the user
// leaks a reference to the public instance.
ReactInstanceMap.remove(inst); // Some existing components rely on inst.props even after they've been
// destroyed (in event handlers).
// TODO: inst.props = null;
// TODO: inst.state = null;
// TODO: inst.context = null;
}, /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_maskContext:function(context){var maskedContext=null;var Component=this._currentElement.type;var contextTypes=Component.contextTypes;if(!contextTypes){return emptyObject;}maskedContext={};for(var contextName in contextTypes){maskedContext[contextName]=context[contextName];}return maskedContext;}, /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_processContext:function(context){var maskedContext=this._maskContext(context);if("development"!=='production'){var Component=this._currentElement.type;if(Component.contextTypes){this._checkPropTypes(Component.contextTypes,maskedContext,ReactPropTypeLocations.context);}}return maskedContext;}, /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */_processChildContext:function(currentContext){var Component=this._currentElement.type;var inst=this._instance;var childContext=inst.getChildContext&&inst.getChildContext();if(childContext){!(typeof Component.childContextTypes==='object')?"development"!=='production'?invariant(false,'%s.getChildContext(): childContextTypes must be defined in order to '+'use getChildContext().',this.getName()||'ReactCompositeComponent'):invariant(false):undefined;if("development"!=='production'){this._checkPropTypes(Component.childContextTypes,childContext,ReactPropTypeLocations.childContext);}for(var name in childContext){!(name in Component.childContextTypes)?"development"!=='production'?invariant(false,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName()||'ReactCompositeComponent',name):invariant(false):undefined;}return assign({},currentContext,childContext);}return currentContext;}, /**
   * Processes props by setting default values for unspecified props and
   * asserting that the props are valid. Does not mutate its argument; returns
   * a new props object with defaults merged in.
   *
   * @param {object} newProps
   * @return {object}
   * @private
   */_processProps:function(newProps){if("development"!=='production'){var Component=this._currentElement.type;if(Component.propTypes){this._checkPropTypes(Component.propTypes,newProps,ReactPropTypeLocations.prop);}}return newProps;}, /**
   * Assert that the props are valid
   *
   * @param {object} propTypes Map of prop name to a ReactPropType
   * @param {object} props
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */_checkPropTypes:function(propTypes,props,location){ // TODO: Stop validating prop types here and only use the element
// validation.
var componentName=this.getName();for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error;try{ // This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
!(typeof propTypes[propName]==='function')?"development"!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually '+'from React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],propName):invariant(false):undefined;error=propTypes[propName](props,propName,componentName,location);}catch(ex){error=ex;}if(error instanceof Error){ // We may want to extend this logic for similar errors in
// top-level render calls, so I'm abstracting it away into
// a function to minimize refactoring in the future
var addendum=getDeclarationErrorAddendum(this);if(location===ReactPropTypeLocations.prop){ // Preface gives us something to blacklist in warning module
"development"!=='production'?warning(false,'Failed Composite propType: %s%s',error.message,addendum):undefined;}else {"development"!=='production'?warning(false,'Failed Context Types: %s%s',error.message,addendum):undefined;}}}}},receiveComponent:function(nextElement,transaction,nextContext){var prevElement=this._currentElement;var prevContext=this._context;this._pendingElement=null;this.updateComponent(transaction,prevElement,nextElement,prevContext,nextContext);}, /**
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function(transaction){if(this._pendingElement!=null){ReactReconciler.receiveComponent(this,this._pendingElement||this._currentElement,transaction,this._context);}if(this._pendingStateQueue!==null||this._pendingForceUpdate){this.updateComponent(transaction,this._currentElement,this._currentElement,this._context,this._context);}}, /**
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */updateComponent:function(transaction,prevParentElement,nextParentElement,prevUnmaskedContext,nextUnmaskedContext){var inst=this._instance;var nextContext=this._context===nextUnmaskedContext?inst.context:this._processContext(nextUnmaskedContext);var nextProps; // Distinguish between a props update versus a simple state update
if(prevParentElement===nextParentElement){ // Skip checking prop types again -- we don't read inst.props to avoid
// warning for DOM component props in this upgrade
nextProps=nextParentElement.props;}else {nextProps=this._processProps(nextParentElement.props); // An update here will schedule an update but immediately set
// _pendingStateQueue which will ensure that any state updates gets
// immediately reconciled instead of waiting for the next batch.
if(inst.componentWillReceiveProps){inst.componentWillReceiveProps(nextProps,nextContext);}}var nextState=this._processPendingState(nextProps,nextContext);var shouldUpdate=this._pendingForceUpdate||!inst.shouldComponentUpdate||inst.shouldComponentUpdate(nextProps,nextState,nextContext);if("development"!=='production'){"development"!=='production'?warning(typeof shouldUpdate!=='undefined','%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',this.getName()||'ReactCompositeComponent'):undefined;}if(shouldUpdate){this._pendingForceUpdate=false; // Will set `this.props`, `this.state` and `this.context`.
this._performComponentUpdate(nextParentElement,nextProps,nextState,nextContext,transaction,nextUnmaskedContext);}else { // If it's determined that a component should not update, we still want
// to set props and state but we shortcut the rest of the update.
this._currentElement=nextParentElement;this._context=nextUnmaskedContext;inst.props=nextProps;inst.state=nextState;inst.context=nextContext;}},_processPendingState:function(props,context){var inst=this._instance;var queue=this._pendingStateQueue;var replace=this._pendingReplaceState;this._pendingReplaceState=false;this._pendingStateQueue=null;if(!queue){return inst.state;}if(replace&&queue.length===1){return queue[0];}var nextState=assign({},replace?queue[0]:inst.state);for(var i=replace?1:0;i<queue.length;i++){var partial=queue[i];assign(nextState,typeof partial==='function'?partial.call(inst,nextState,props,context):partial);}return nextState;}, /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */_performComponentUpdate:function(nextElement,nextProps,nextState,nextContext,transaction,unmaskedContext){var inst=this._instance;var hasComponentDidUpdate=Boolean(inst.componentDidUpdate);var prevProps;var prevState;var prevContext;if(hasComponentDidUpdate){prevProps=inst.props;prevState=inst.state;prevContext=inst.context;}if(inst.componentWillUpdate){inst.componentWillUpdate(nextProps,nextState,nextContext);}this._currentElement=nextElement;this._context=unmaskedContext;inst.props=nextProps;inst.state=nextState;inst.context=nextContext;this._updateRenderedComponent(transaction,unmaskedContext);if(hasComponentDidUpdate){transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst,prevProps,prevState,prevContext),inst);}}, /**
   * Call the component's `render` method and update the DOM accordingly.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */_updateRenderedComponent:function(transaction,context){var prevComponentInstance=this._renderedComponent;var prevRenderedElement=prevComponentInstance._currentElement;var nextRenderedElement=this._renderValidatedComponent();if(shouldUpdateReactComponent(prevRenderedElement,nextRenderedElement)){ReactReconciler.receiveComponent(prevComponentInstance,nextRenderedElement,transaction,this._processChildContext(context));}else { // These two IDs are actually the same! But nothing should rely on that.
var thisID=this._rootNodeID;var prevComponentID=prevComponentInstance._rootNodeID;ReactReconciler.unmountComponent(prevComponentInstance);this._renderedComponent=this._instantiateReactComponent(nextRenderedElement);var nextMarkup=ReactReconciler.mountComponent(this._renderedComponent,thisID,transaction,this._processChildContext(context));this._replaceNodeWithMarkupByID(prevComponentID,nextMarkup);}}, /**
   * @protected
   */_replaceNodeWithMarkupByID:function(prevComponentID,nextMarkup){ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID,nextMarkup);}, /**
   * @protected
   */_renderValidatedComponentWithoutOwnerOrContext:function(){var inst=this._instance;var renderedComponent=inst.render();if("development"!=='production'){ // We allow auto-mocks to proceed as if they're returning null.
if(typeof renderedComponent==='undefined'&&inst.render._isMockFunction){ // This is probably bad practice. Consider warning here and
// deprecating this convenience.
renderedComponent=null;}}return renderedComponent;}, /**
   * @private
   */_renderValidatedComponent:function(){var renderedComponent;ReactCurrentOwner.current=this;try{renderedComponent=this._renderValidatedComponentWithoutOwnerOrContext();}finally {ReactCurrentOwner.current=null;}!( // TODO: An `isValidNode` function would probably be more appropriate
renderedComponent===null||renderedComponent===false||ReactElement.isValidElement(renderedComponent))?"development"!=='production'?invariant(false,'%s.render(): A valid ReactComponent must be returned. You may have '+'returned undefined, an array or some other invalid object.',this.getName()||'ReactCompositeComponent'):invariant(false):undefined;return renderedComponent;}, /**
   * Lazily allocates the refs object and stores `component` as `ref`.
   *
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */attachRef:function(ref,component){var inst=this.getPublicInstance();!(inst!=null)?"development"!=='production'?invariant(false,'Stateless function components cannot have refs.'):invariant(false):undefined;var publicComponentInstance=component.getPublicInstance();if("development"!=='production'){var componentName=component&&component.getName?component.getName():'a component';"development"!=='production'?warning(publicComponentInstance!=null,'Stateless function components cannot be given refs '+'(See ref "%s" in %s created by %s). '+'Attempts to access this ref will fail.',ref,componentName,this.getName()):undefined;}var refs=inst.refs===emptyObject?inst.refs={}:inst.refs;refs[ref]=publicComponentInstance;}, /**
   * Detaches a reference name.
   *
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */detachRef:function(ref){var refs=this.getPublicInstance().refs;delete refs[ref];}, /**
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */getName:function(){var type=this._currentElement.type;var constructor=this._instance&&this._instance.constructor;return type.displayName||constructor&&constructor.displayName||type.name||constructor&&constructor.name||null;}, /**
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by render. Can be null for stateless
   * components.
   *
   * @return {ReactComponent} the public component instance.
   * @internal
   */getPublicInstance:function(){var inst=this._instance;if(inst instanceof StatelessComponent){return null;}return inst;}, // Stub
_instantiateReactComponent:null};ReactPerf.measureMethods(ReactCompositeComponentMixin,'ReactCompositeComponent',{mountComponent:'mountComponent',updateComponent:'updateComponent',_renderValidatedComponent:'_renderValidatedComponent'});var ReactCompositeComponent={Mixin:ReactCompositeComponentMixin};module.exports=ReactCompositeComponent;},{"126":126,"137":137,"144":144,"155":155,"23":23,"32":32,"34":34,"52":52,"62":62,"71":71,"72":72,"73":73,"76":76,"82":82}],34:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */'use strict'; /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */var ReactCurrentOwner={ /**
   * @internal
   * @type {ReactComponent}
   */current:null};module.exports=ReactCurrentOwner;},{}],35:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 */ /* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/'use strict';var ReactCurrentOwner=_dereq_(34);var ReactDOMTextComponent=_dereq_(46);var ReactDefaultInjection=_dereq_(49);var ReactInstanceHandles=_dereq_(61);var ReactMount=_dereq_(65);var ReactPerf=_dereq_(71);var ReactReconciler=_dereq_(76);var ReactUpdates=_dereq_(83);var ReactVersion=_dereq_(84);var findDOMNode=_dereq_(108);var renderSubtreeIntoContainer=_dereq_(123);var warning=_dereq_(155);ReactDefaultInjection.inject();var render=ReactPerf.measure('React','render',ReactMount.render);var React={findDOMNode:findDOMNode,render:render,unmountComponentAtNode:ReactMount.unmountComponentAtNode,version:ReactVersion, /* eslint-disable camelcase */unstable_batchedUpdates:ReactUpdates.batchedUpdates,unstable_renderSubtreeIntoContainer:renderSubtreeIntoContainer}; // Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
/* eslint-enable camelcase */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject==='function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:ReactCurrentOwner,InstanceHandles:ReactInstanceHandles,Mount:ReactMount,Reconciler:ReactReconciler,TextComponent:ReactDOMTextComponent});}if("development"!=='production'){var ExecutionEnvironment=_dereq_(130);if(ExecutionEnvironment.canUseDOM&&window.top===window.self){ // First check if devtools is not installed
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){ // If we're in Chrome or Firefox, provide a download link if not installed.
if(navigator.userAgent.indexOf('Chrome')>-1&&navigator.userAgent.indexOf('Edge')===-1||navigator.userAgent.indexOf('Firefox')>-1){console.debug('Download the React DevTools for a better development experience: '+'https://fb.me/react-devtools');}} // If we're in IE8, check to see if we are in compatibility mode and provide
// information on preventing compatibility mode
var ieCompatibilityMode=document.documentMode&&document.documentMode<8;"development"!=='production'?warning(!ieCompatibilityMode,'Internet Explorer is running in compatibility mode; please add the '+'following tag to your HTML to prevent this from happening: '+'<meta http-equiv="X-UA-Compatible" content="IE=edge" />'):undefined;var expectedFeatures=[ // shims
Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim, // shams
Object.create,Object.freeze];for(var i=0;i<expectedFeatures.length;i++){if(!expectedFeatures[i]){console.error('One or more ES5 shim/shams expected by React are not available: '+'https://fb.me/react-warning-polyfills');break;}}}}module.exports=React;},{"108":108,"123":123,"130":130,"155":155,"34":34,"46":46,"49":49,"61":61,"65":65,"71":71,"76":76,"83":83,"84":84}],36:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */'use strict';var mouseListenerNames={onClick:true,onDoubleClick:true,onMouseDown:true,onMouseMove:true,onMouseUp:true,onClickCapture:true,onDoubleClickCapture:true,onMouseDownCapture:true,onMouseMoveCapture:true,onMouseUpCapture:true}; /**
 * Implements a <button> native component that does not receive mouse events
 * when `disabled` is set.
 */var ReactDOMButton={getNativeProps:function(inst,props,context){if(!props.disabled){return props;} // Copy the props, except the mouse listeners
var nativeProps={};for(var key in props){if(props.hasOwnProperty(key)&&!mouseListenerNames[key]){nativeProps[key]=props[key];}}return nativeProps;}};module.exports=ReactDOMButton;},{}],37:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 * @typechecks static-only
 */ /* global hasOwnProperty:true */'use strict';var AutoFocusUtils=_dereq_(2);var CSSPropertyOperations=_dereq_(5);var DOMProperty=_dereq_(10);var DOMPropertyOperations=_dereq_(11);var EventConstants=_dereq_(15);var ReactBrowserEventEmitter=_dereq_(26);var ReactComponentBrowserEnvironment=_dereq_(31);var ReactDOMButton=_dereq_(36);var ReactDOMInput=_dereq_(41);var ReactDOMOption=_dereq_(42);var ReactDOMSelect=_dereq_(43);var ReactDOMTextarea=_dereq_(47);var ReactMount=_dereq_(65);var ReactMultiChild=_dereq_(66);var ReactPerf=_dereq_(71);var ReactUpdateQueue=_dereq_(82);var assign=_dereq_(23);var canDefineProperty=_dereq_(104);var escapeTextContentForBrowser=_dereq_(107);var invariant=_dereq_(144);var isEventSupported=_dereq_(119);var keyOf=_dereq_(148);var setInnerHTML=_dereq_(124);var setTextContent=_dereq_(125);var shallowEqual=_dereq_(153);var validateDOMNesting=_dereq_(128);var warning=_dereq_(155);var deleteListener=ReactBrowserEventEmitter.deleteListener;var listenTo=ReactBrowserEventEmitter.listenTo;var registrationNameModules=ReactBrowserEventEmitter.registrationNameModules; // For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES={'string':true,'number':true};var CHILDREN=keyOf({children:null});var STYLE=keyOf({style:null});var HTML=keyOf({__html:null});var ELEMENT_NODE_TYPE=1;function getDeclarationErrorAddendum(internalInstance){if(internalInstance){var owner=internalInstance._currentElement._owner||null;if(owner){var name=owner.getName();if(name){return ' This DOM node was rendered by `'+name+'`.';}}}return '';}var legacyPropsDescriptor;if("development"!=='production'){legacyPropsDescriptor={props:{enumerable:false,get:function(){var component=this._reactInternalComponent;"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .props of a DOM node; instead, '+'recreate the props as `render` did originally or read the DOM '+'properties/attributes directly from this node (e.g., '+'this.refs.box.className).%s',getDeclarationErrorAddendum(component)):undefined;return component._currentElement.props;}}};}function legacyGetDOMNode(){if("development"!=='production'){var component=this._reactInternalComponent;"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .getDOMNode() of a DOM node; '+'instead, use the node directly.%s',getDeclarationErrorAddendum(component)):undefined;}return this;}function legacyIsMounted(){var component=this._reactInternalComponent;if("development"!=='production'){"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .isMounted() of a DOM node.%s',getDeclarationErrorAddendum(component)):undefined;}return !!component;}function legacySetStateEtc(){if("development"!=='production'){var component=this._reactInternalComponent;"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .setState(), .replaceState(), or '+'.forceUpdate() of a DOM node. This is a no-op.%s',getDeclarationErrorAddendum(component)):undefined;}}function legacySetProps(partialProps,callback){var component=this._reactInternalComponent;if("development"!=='production'){"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .setProps() of a DOM node. '+'Instead, call ReactDOM.render again at the top level.%s',getDeclarationErrorAddendum(component)):undefined;}if(!component){return;}ReactUpdateQueue.enqueueSetPropsInternal(component,partialProps);if(callback){ReactUpdateQueue.enqueueCallbackInternal(component,callback);}}function legacyReplaceProps(partialProps,callback){var component=this._reactInternalComponent;if("development"!=='production'){"development"!=='production'?warning(false,'ReactDOMComponent: Do not access .replaceProps() of a DOM node. '+'Instead, call ReactDOM.render again at the top level.%s',getDeclarationErrorAddendum(component)):undefined;}if(!component){return;}ReactUpdateQueue.enqueueReplacePropsInternal(component,partialProps);if(callback){ReactUpdateQueue.enqueueCallbackInternal(component,callback);}}function friendlyStringify(obj){if(typeof obj==='object'){if(Array.isArray(obj)){return '['+obj.map(friendlyStringify).join(', ')+']';}else {var pairs=[];for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var keyEscaped=/^[a-z$_][\w$_]*$/i.test(key)?key:JSON.stringify(key);pairs.push(keyEscaped+': '+friendlyStringify(obj[key]));}}return '{'+pairs.join(', ')+'}';}}else if(typeof obj==='string'){return JSON.stringify(obj);}else if(typeof obj==='function'){return '[function object]';} // Differs from JSON.stringify in that undefined becauses undefined and that
// inf and nan don't become null
return String(obj);}var styleMutationWarning={};function checkAndWarnForMutatedStyle(style1,style2,component){if(style1==null||style2==null){return;}if(shallowEqual(style1,style2)){return;}var componentName=component._tag;var owner=component._currentElement._owner;var ownerName;if(owner){ownerName=owner.getName();}var hash=ownerName+'|'+componentName;if(styleMutationWarning.hasOwnProperty(hash)){return;}styleMutationWarning[hash]=true;"development"!=='production'?warning(false,'`%s` was passed a style object that has previously been mutated. '+'Mutating `style` is deprecated. Consider cloning it beforehand. Check '+'the `render` %s. Previous style: %s. Mutated style: %s.',componentName,owner?'of `'+ownerName+'`':'using <'+componentName+'>',friendlyStringify(style1),friendlyStringify(style2)):undefined;} /**
 * @param {object} component
 * @param {?object} props
 */function assertValidProps(component,props){if(!props){return;} // Note the use of `==` which checks for null or undefined.
if("development"!=='production'){if(voidElementTags[component._tag]){"development"!=='production'?warning(props.children==null&&props.dangerouslySetInnerHTML==null,'%s is a void element tag and must not have `children` or '+'use `props.dangerouslySetInnerHTML`.%s',component._tag,component._currentElement._owner?' Check the render method of '+component._currentElement._owner.getName()+'.':''):undefined;}}if(props.dangerouslySetInnerHTML!=null){!(props.children==null)?"development"!=='production'?invariant(false,'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'):invariant(false):undefined;!(typeof props.dangerouslySetInnerHTML==='object'&&HTML in props.dangerouslySetInnerHTML)?"development"!=='production'?invariant(false,'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. '+'Please visit https://fb.me/react-invariant-dangerously-set-inner-html '+'for more information.'):invariant(false):undefined;}if("development"!=='production'){"development"!=='production'?warning(props.innerHTML==null,'Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.'):undefined;"development"!=='production'?warning(!props.contentEditable||props.children==null,'A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.'):undefined;}!(props.style==null||typeof props.style==='object')?"development"!=='production'?invariant(false,'The `style` prop expects a mapping from style properties to values, '+'not a string. For example, style={{marginRight: spacing + \'em\'}} when '+'using JSX.%s',getDeclarationErrorAddendum(component)):invariant(false):undefined;}function enqueuePutListener(id,registrationName,listener,transaction){if("development"!=='production'){ // IE8 has no API for event capturing and the `onScroll` event doesn't
// bubble.
"development"!=='production'?warning(registrationName!=='onScroll'||isEventSupported('scroll',true),'This browser doesn\'t support the `onScroll` event'):undefined;}var container=ReactMount.findReactContainerForID(id);if(container){var doc=container.nodeType===ELEMENT_NODE_TYPE?container.ownerDocument:container;listenTo(registrationName,doc);}transaction.getReactMountReady().enqueue(putListener,{id:id,registrationName:registrationName,listener:listener});}function putListener(){var listenerToPut=this;ReactBrowserEventEmitter.putListener(listenerToPut.id,listenerToPut.registrationName,listenerToPut.listener);} // There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var mediaEvents={topAbort:'abort',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topSeeked:'seeked',topSeeking:'seeking',topStalled:'stalled',topSuspend:'suspend',topTimeUpdate:'timeupdate',topVolumeChange:'volumechange',topWaiting:'waiting'};function trapBubbledEventsLocal(){var inst=this; // If a component renders to null or if another component fatals and causes
// the state of the tree to be corrupted, `node` here can be null.
!inst._rootNodeID?"development"!=='production'?invariant(false,'Must be mounted to trap events'):invariant(false):undefined;var node=ReactMount.getNode(inst._rootNodeID);!node?"development"!=='production'?invariant(false,'trapBubbledEvent(...): Requires node to be rendered.'):invariant(false):undefined;switch(inst._tag){case 'iframe':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load',node)];break;case 'video':case 'audio':inst._wrapperState.listeners=[]; // create listener for each media event
for(var event in mediaEvents){if(mediaEvents.hasOwnProperty(event)){inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event],mediaEvents[event],node));}}break;case 'img':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError,'error',node),ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load',node)];break;case 'form':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset,'reset',node),ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit,'submit',node)];break;}}function mountReadyInputWrapper(){ReactDOMInput.mountReadyWrapper(this);}function postUpdateSelectWrapper(){ReactDOMSelect.postUpdateWrapper(this);} // For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special cased tags.
var omittedCloseTags={'area':true,'base':true,'br':true,'col':true,'embed':true,'hr':true,'img':true,'input':true,'keygen':true,'link':true,'meta':true,'param':true,'source':true,'track':true,'wbr':true}; // NOTE: menuitem's close tag should be omitted, but that causes problems.
var newlineEatingTags={'listing':true,'pre':true,'textarea':true}; // For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.
var voidElementTags=assign({'menuitem':true},omittedCloseTags); // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache={};var hasOwnProperty={}.hasOwnProperty;function validateDangerousTag(tag){if(!hasOwnProperty.call(validatedTagCache,tag)){!VALID_TAG_REGEX.test(tag)?"development"!=='production'?invariant(false,'Invalid tag: %s',tag):invariant(false):undefined;validatedTagCache[tag]=true;}}function processChildContextDev(context,inst){ // Pass down our tag name to child components for validation purposes
context=assign({},context);var info=context[validateDOMNesting.ancestorInfoContextKey];context[validateDOMNesting.ancestorInfoContextKey]=validateDOMNesting.updatedAncestorInfo(info,inst._tag,inst);return context;}function isCustomComponent(tagName,props){return tagName.indexOf('-')>=0||props.is!=null;} /**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */function ReactDOMComponent(tag){validateDangerousTag(tag);this._tag=tag.toLowerCase();this._renderedChildren=null;this._previousStyle=null;this._previousStyleCopy=null;this._rootNodeID=null;this._wrapperState=null;this._topLevelWrapper=null;this._nodeWithLegacyProperties=null;if("development"!=='production'){this._unprocessedContextDev=null;this._processedContextDev=null;}}ReactDOMComponent.displayName='ReactDOMComponent';ReactDOMComponent.Mixin={construct:function(element){this._currentElement=element;}, /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {string} rootID The root DOM ID for this node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   * @return {string} The computed markup.
   */mountComponent:function(rootID,transaction,context){this._rootNodeID=rootID;var props=this._currentElement.props;switch(this._tag){case 'iframe':case 'img':case 'form':case 'video':case 'audio':this._wrapperState={listeners:null};transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;case 'button':props=ReactDOMButton.getNativeProps(this,props,context);break;case 'input':ReactDOMInput.mountWrapper(this,props,context);props=ReactDOMInput.getNativeProps(this,props,context);break;case 'option':ReactDOMOption.mountWrapper(this,props,context);props=ReactDOMOption.getNativeProps(this,props,context);break;case 'select':ReactDOMSelect.mountWrapper(this,props,context);props=ReactDOMSelect.getNativeProps(this,props,context);context=ReactDOMSelect.processChildContext(this,props,context);break;case 'textarea':ReactDOMTextarea.mountWrapper(this,props,context);props=ReactDOMTextarea.getNativeProps(this,props,context);break;}assertValidProps(this,props);if("development"!=='production'){if(context[validateDOMNesting.ancestorInfoContextKey]){validateDOMNesting(this._tag,this,context[validateDOMNesting.ancestorInfoContextKey]);}}if("development"!=='production'){this._unprocessedContextDev=context;this._processedContextDev=processChildContextDev(context,this);context=this._processedContextDev;}var mountImage;if(transaction.useCreateElement){var ownerDocument=context[ReactMount.ownerDocumentContextKey];var el=ownerDocument.createElement(this._currentElement.type);DOMPropertyOperations.setAttributeForID(el,this._rootNodeID); // Populate node cache
ReactMount.getID(el);this._updateDOMProperties({},props,transaction,el);this._createInitialChildren(transaction,props,context,el);mountImage=el;}else {var tagOpen=this._createOpenTagMarkupAndPutListeners(transaction,props);var tagContent=this._createContentMarkup(transaction,props,context);if(!tagContent&&omittedCloseTags[this._tag]){mountImage=tagOpen+'/>';}else {mountImage=tagOpen+'>'+tagContent+'</'+this._currentElement.type+'>';}}switch(this._tag){case 'input':transaction.getReactMountReady().enqueue(mountReadyInputWrapper,this); // falls through
case 'button':case 'select':case 'textarea':if(props.autoFocus){transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);}break;}return mountImage;}, /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @return {string} Markup of opening tag.
   */_createOpenTagMarkupAndPutListeners:function(transaction,props){var ret='<'+this._currentElement.type;for(var propKey in props){if(!props.hasOwnProperty(propKey)){continue;}var propValue=props[propKey];if(propValue==null){continue;}if(registrationNameModules.hasOwnProperty(propKey)){if(propValue){enqueuePutListener(this._rootNodeID,propKey,propValue,transaction);}}else {if(propKey===STYLE){if(propValue){if("development"!=='production'){ // See `_updateDOMProperties`. style block
this._previousStyle=propValue;}propValue=this._previousStyleCopy=assign({},props.style);}propValue=CSSPropertyOperations.createMarkupForStyles(propValue);}var markup=null;if(this._tag!=null&&isCustomComponent(this._tag,props)){if(propKey!==CHILDREN){markup=DOMPropertyOperations.createMarkupForCustomAttribute(propKey,propValue);}}else {markup=DOMPropertyOperations.createMarkupForProperty(propKey,propValue);}if(markup){ret+=' '+markup;}}} // For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
if(transaction.renderToStaticMarkup){return ret;}var markupForID=DOMPropertyOperations.createMarkupForID(this._rootNodeID);return ret+' '+markupForID;}, /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @param {object} context
   * @return {string} Content markup.
   */_createContentMarkup:function(transaction,props,context){var ret=''; // Intentional use of != to avoid catching zero/false.
var innerHTML=props.dangerouslySetInnerHTML;if(innerHTML!=null){if(innerHTML.__html!=null){ret=innerHTML.__html;}}else {var contentToUse=CONTENT_TYPES[typeof props.children]?props.children:null;var childrenToUse=contentToUse!=null?null:props.children;if(contentToUse!=null){ // TODO: Validate that text is allowed as a child of this node
ret=escapeTextContentForBrowser(contentToUse);}else if(childrenToUse!=null){var mountImages=this.mountChildren(childrenToUse,transaction,context);ret=mountImages.join('');}}if(newlineEatingTags[this._tag]&&ret.charAt(0)==='\n'){ // text/html ignores the first character in these tags if it's a newline
// Prefer to break application/xml over text/html (for now) by adding
// a newline specifically to get eaten by the parser. (Alternately for
// textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
// \r is normalized out by HTMLTextAreaElement#value.)
// See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
// See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
// See: <http://www.w3.org/TR/html5/syntax.html#newlines>
// See: Parsing of "textarea" "listing" and "pre" elements
//  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
return '\n'+ret;}else {return ret;}},_createInitialChildren:function(transaction,props,context,el){ // Intentional use of != to avoid catching zero/false.
var innerHTML=props.dangerouslySetInnerHTML;if(innerHTML!=null){if(innerHTML.__html!=null){setInnerHTML(el,innerHTML.__html);}}else {var contentToUse=CONTENT_TYPES[typeof props.children]?props.children:null;var childrenToUse=contentToUse!=null?null:props.children;if(contentToUse!=null){ // TODO: Validate that text is allowed as a child of this node
setTextContent(el,contentToUse);}else if(childrenToUse!=null){var mountImages=this.mountChildren(childrenToUse,transaction,context);for(var i=0;i<mountImages.length;i++){el.appendChild(mountImages[i]);}}}}, /**
   * Receives a next element and updates the component.
   *
   * @internal
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   */receiveComponent:function(nextElement,transaction,context){var prevElement=this._currentElement;this._currentElement=nextElement;this.updateComponent(transaction,prevElement,nextElement,context);}, /**
   * Updates a native DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */updateComponent:function(transaction,prevElement,nextElement,context){var lastProps=prevElement.props;var nextProps=this._currentElement.props;switch(this._tag){case 'button':lastProps=ReactDOMButton.getNativeProps(this,lastProps);nextProps=ReactDOMButton.getNativeProps(this,nextProps);break;case 'input':ReactDOMInput.updateWrapper(this);lastProps=ReactDOMInput.getNativeProps(this,lastProps);nextProps=ReactDOMInput.getNativeProps(this,nextProps);break;case 'option':lastProps=ReactDOMOption.getNativeProps(this,lastProps);nextProps=ReactDOMOption.getNativeProps(this,nextProps);break;case 'select':lastProps=ReactDOMSelect.getNativeProps(this,lastProps);nextProps=ReactDOMSelect.getNativeProps(this,nextProps);break;case 'textarea':ReactDOMTextarea.updateWrapper(this);lastProps=ReactDOMTextarea.getNativeProps(this,lastProps);nextProps=ReactDOMTextarea.getNativeProps(this,nextProps);break;}if("development"!=='production'){ // If the context is reference-equal to the old one, pass down the same
// processed object so the update bailout in ReactReconciler behaves
// correctly (and identically in dev and prod). See #5005.
if(this._unprocessedContextDev!==context){this._unprocessedContextDev=context;this._processedContextDev=processChildContextDev(context,this);}context=this._processedContextDev;}assertValidProps(this,nextProps);this._updateDOMProperties(lastProps,nextProps,transaction,null);this._updateDOMChildren(lastProps,nextProps,transaction,context);if(!canDefineProperty&&this._nodeWithLegacyProperties){this._nodeWithLegacyProperties.props=nextProps;}if(this._tag==='select'){ // <select> value update needs to occur after <option> children
// reconciliation
transaction.getReactMountReady().enqueue(postUpdateSelectWrapper,this);}}, /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {?DOMElement} node
   */_updateDOMProperties:function(lastProps,nextProps,transaction,node){var propKey;var styleName;var styleUpdates;for(propKey in lastProps){if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)){continue;}if(propKey===STYLE){var lastStyle=this._previousStyleCopy;for(styleName in lastStyle){if(lastStyle.hasOwnProperty(styleName)){styleUpdates=styleUpdates||{};styleUpdates[styleName]='';}}this._previousStyleCopy=null;}else if(registrationNameModules.hasOwnProperty(propKey)){if(lastProps[propKey]){ // Only call deleteListener if there was a listener previously or
// else willDeleteListener gets called when there wasn't actually a
// listener (e.g., onClick={null})
deleteListener(this._rootNodeID,propKey);}}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){if(!node){node=ReactMount.getNode(this._rootNodeID);}DOMPropertyOperations.deleteValueForProperty(node,propKey);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=propKey===STYLE?this._previousStyleCopy:lastProps[propKey];if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp){continue;}if(propKey===STYLE){if(nextProp){if("development"!=='production'){checkAndWarnForMutatedStyle(this._previousStyleCopy,this._previousStyle,this);this._previousStyle=nextProp;}nextProp=this._previousStyleCopy=assign({},nextProp);}else {this._previousStyleCopy=null;}if(lastProp){ // Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp){if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){styleUpdates=styleUpdates||{};styleUpdates[styleName]='';}} // Update styles that changed since `lastProp`.
for(styleName in nextProp){if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){styleUpdates=styleUpdates||{};styleUpdates[styleName]=nextProp[styleName];}}}else { // Relies on `updateStylesByID` not mutating `styleUpdates`.
styleUpdates=nextProp;}}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp){enqueuePutListener(this._rootNodeID,propKey,nextProp,transaction);}else if(lastProp){deleteListener(this._rootNodeID,propKey);}}else if(isCustomComponent(this._tag,nextProps)){if(!node){node=ReactMount.getNode(this._rootNodeID);}if(propKey===CHILDREN){nextProp=null;}DOMPropertyOperations.setValueForAttribute(node,propKey,nextProp);}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){if(!node){node=ReactMount.getNode(this._rootNodeID);} // If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertantly setting to a string. This
// brings us in line with the same behavior we have on initial render.
if(nextProp!=null){DOMPropertyOperations.setValueForProperty(node,propKey,nextProp);}else {DOMPropertyOperations.deleteValueForProperty(node,propKey);}}}if(styleUpdates){if(!node){node=ReactMount.getNode(this._rootNodeID);}CSSPropertyOperations.setValueForStyles(node,styleUpdates);}}, /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   */_updateDOMChildren:function(lastProps,nextProps,transaction,context){var lastContent=CONTENT_TYPES[typeof lastProps.children]?lastProps.children:null;var nextContent=CONTENT_TYPES[typeof nextProps.children]?nextProps.children:null;var lastHtml=lastProps.dangerouslySetInnerHTML&&lastProps.dangerouslySetInnerHTML.__html;var nextHtml=nextProps.dangerouslySetInnerHTML&&nextProps.dangerouslySetInnerHTML.__html; // Note the use of `!=` which checks for null or undefined.
var lastChildren=lastContent!=null?null:lastProps.children;var nextChildren=nextContent!=null?null:nextProps.children; // If we're switching from children to content/html or vice versa, remove
// the old content
var lastHasContentOrHtml=lastContent!=null||lastHtml!=null;var nextHasContentOrHtml=nextContent!=null||nextHtml!=null;if(lastChildren!=null&&nextChildren==null){this.updateChildren(null,transaction,context);}else if(lastHasContentOrHtml&&!nextHasContentOrHtml){this.updateTextContent('');}if(nextContent!=null){if(lastContent!==nextContent){this.updateTextContent(''+nextContent);}}else if(nextHtml!=null){if(lastHtml!==nextHtml){this.updateMarkup(''+nextHtml);}}else if(nextChildren!=null){this.updateChildren(nextChildren,transaction,context);}}, /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */unmountComponent:function(){switch(this._tag){case 'iframe':case 'img':case 'form':case 'video':case 'audio':var listeners=this._wrapperState.listeners;if(listeners){for(var i=0;i<listeners.length;i++){listeners[i].remove();}}break;case 'input':ReactDOMInput.unmountWrapper(this);break;case 'html':case 'head':case 'body': /**
         * Components like <html> <head> and <body> can't be removed or added
         * easily in a cross-browser way, however it's valuable to be able to
         * take advantage of React's reconciliation for styling and <title>
         * management. So we just document it and throw in dangerous cases.
         */!false?"development"!=='production'?invariant(false,'<%s> tried to unmount. Because of cross-browser quirks it is '+'impossible to unmount some top-level components (eg <html>, '+'<head>, and <body>) reliably and efficiently. To fix this, have a '+'single top-level component that never unmounts render these '+'elements.',this._tag):invariant(false):undefined;break;}this.unmountChildren();ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);this._rootNodeID=null;this._wrapperState=null;if(this._nodeWithLegacyProperties){var node=this._nodeWithLegacyProperties;node._reactInternalComponent=null;this._nodeWithLegacyProperties=null;}},getPublicInstance:function(){if(!this._nodeWithLegacyProperties){var node=ReactMount.getNode(this._rootNodeID);node._reactInternalComponent=this;node.getDOMNode=legacyGetDOMNode;node.isMounted=legacyIsMounted;node.setState=legacySetStateEtc;node.replaceState=legacySetStateEtc;node.forceUpdate=legacySetStateEtc;node.setProps=legacySetProps;node.replaceProps=legacyReplaceProps;if("development"!=='production'){if(canDefineProperty){Object.defineProperties(node,legacyPropsDescriptor);}else { // updateComponent will update this property on subsequent renders
node.props=this._currentElement.props;}}else { // updateComponent will update this property on subsequent renders
node.props=this._currentElement.props;}this._nodeWithLegacyProperties=node;}return this._nodeWithLegacyProperties;}};ReactPerf.measureMethods(ReactDOMComponent,'ReactDOMComponent',{mountComponent:'mountComponent',updateComponent:'updateComponent'});assign(ReactDOMComponent.prototype,ReactDOMComponent.Mixin,ReactMultiChild.Mixin);module.exports=ReactDOMComponent;},{"10":10,"104":104,"107":107,"11":11,"119":119,"124":124,"125":125,"128":128,"144":144,"148":148,"15":15,"153":153,"155":155,"2":2,"23":23,"26":26,"31":31,"36":36,"41":41,"42":42,"43":43,"47":47,"5":5,"65":65,"66":66,"71":71,"82":82}],38:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFactories
 * @typechecks static-only
 */'use strict';var ReactElement=_dereq_(52);var ReactElementValidator=_dereq_(53);var mapObject=_dereq_(149); /**
 * Create a factory that creates HTML tag elements.
 *
 * @param {string} tag Tag name (e.g. `div`).
 * @private
 */function createDOMFactory(tag){if("development"!=='production'){return ReactElementValidator.createFactory(tag);}return ReactElement.createFactory(tag);} /**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */var ReactDOMFactories=mapObject({a:'a',abbr:'abbr',address:'address',area:'area',article:'article',aside:'aside',audio:'audio',b:'b',base:'base',bdi:'bdi',bdo:'bdo',big:'big',blockquote:'blockquote',body:'body',br:'br',button:'button',canvas:'canvas',caption:'caption',cite:'cite',code:'code',col:'col',colgroup:'colgroup',data:'data',datalist:'datalist',dd:'dd',del:'del',details:'details',dfn:'dfn',dialog:'dialog',div:'div',dl:'dl',dt:'dt',em:'em',embed:'embed',fieldset:'fieldset',figcaption:'figcaption',figure:'figure',footer:'footer',form:'form',h1:'h1',h2:'h2',h3:'h3',h4:'h4',h5:'h5',h6:'h6',head:'head',header:'header',hgroup:'hgroup',hr:'hr',html:'html',i:'i',iframe:'iframe',img:'img',input:'input',ins:'ins',kbd:'kbd',keygen:'keygen',label:'label',legend:'legend',li:'li',link:'link',main:'main',map:'map',mark:'mark',menu:'menu',menuitem:'menuitem',meta:'meta',meter:'meter',nav:'nav',noscript:'noscript',object:'object',ol:'ol',optgroup:'optgroup',option:'option',output:'output',p:'p',param:'param',picture:'picture',pre:'pre',progress:'progress',q:'q',rp:'rp',rt:'rt',ruby:'ruby',s:'s',samp:'samp',script:'script',section:'section',select:'select',small:'small',source:'source',span:'span',strong:'strong',style:'style',sub:'sub',summary:'summary',sup:'sup',table:'table',tbody:'tbody',td:'td',textarea:'textarea',tfoot:'tfoot',th:'th',thead:'thead',time:'time',title:'title',tr:'tr',track:'track',u:'u',ul:'ul','var':'var',video:'video',wbr:'wbr', // SVG
circle:'circle',clipPath:'clipPath',defs:'defs',ellipse:'ellipse',g:'g',image:'image',line:'line',linearGradient:'linearGradient',mask:'mask',path:'path',pattern:'pattern',polygon:'polygon',polyline:'polyline',radialGradient:'radialGradient',rect:'rect',stop:'stop',svg:'svg',text:'text',tspan:'tspan'},createDOMFactory);module.exports=ReactDOMFactories;},{"149":149,"52":52,"53":53}],39:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFeatureFlags
 */'use strict';var ReactDOMFeatureFlags={useCreateElement:false};module.exports=ReactDOMFeatureFlags;},{}],40:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 * @typechecks static-only
 */'use strict';var DOMChildrenOperations=_dereq_(9);var DOMPropertyOperations=_dereq_(11);var ReactMount=_dereq_(65);var ReactPerf=_dereq_(71);var invariant=_dereq_(144); /**
 * Errors for properties that should not be updated with `updatePropertyByID()`.
 *
 * @type {object}
 * @private
 */var INVALID_PROPERTY_ERRORS={dangerouslySetInnerHTML:'`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',style:'`style` must be set using `updateStylesByID()`.'}; /**
 * Operations used to process updates to DOM nodes.
 */var ReactDOMIDOperations={ /**
   * Updates a DOM node with new property values. This should only be used to
   * update DOM properties in `DOMProperty`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} name A valid property name, see `DOMProperty`.
   * @param {*} value New value of the property.
   * @internal
   */updatePropertyByID:function(id,name,value){var node=ReactMount.getNode(id);!!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)?"development"!=='production'?invariant(false,'updatePropertyByID(...): %s',INVALID_PROPERTY_ERRORS[name]):invariant(false):undefined; // If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertantly setting to a string. This
// brings us in line with the same behavior we have on initial render.
if(value!=null){DOMPropertyOperations.setValueForProperty(node,name,value);}else {DOMPropertyOperations.deleteValueForProperty(node,name);}}, /**
   * Replaces a DOM node that exists in the document with markup.
   *
   * @param {string} id ID of child to be replaced.
   * @param {string} markup Dangerous markup to inject in place of child.
   * @internal
   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
   */dangerouslyReplaceNodeWithMarkupByID:function(id,markup){var node=ReactMount.getNode(id);DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node,markup);}, /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markup List of markup strings.
   * @internal
   */dangerouslyProcessChildrenUpdates:function(updates,markup){for(var i=0;i<updates.length;i++){updates[i].parentNode=ReactMount.getNode(updates[i].parentID);}DOMChildrenOperations.processUpdates(updates,markup);}};ReactPerf.measureMethods(ReactDOMIDOperations,'ReactDOMIDOperations',{dangerouslyReplaceNodeWithMarkupByID:'dangerouslyReplaceNodeWithMarkupByID',dangerouslyProcessChildrenUpdates:'dangerouslyProcessChildrenUpdates'});module.exports=ReactDOMIDOperations;},{"11":11,"144":144,"65":65,"71":71,"9":9}],41:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */'use strict';var ReactDOMIDOperations=_dereq_(40);var LinkedValueUtils=_dereq_(22);var ReactMount=_dereq_(65);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var invariant=_dereq_(144);var instancesByReactID={};function forceUpdateIfMounted(){if(this._rootNodeID){ // DOM component is still mounted; update
ReactDOMInput.updateWrapper(this);}} /**
 * Implements an <input> native component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */var ReactDOMInput={getNativeProps:function(inst,props,context){var value=LinkedValueUtils.getValue(props);var checked=LinkedValueUtils.getChecked(props);var nativeProps=assign({},props,{defaultChecked:undefined,defaultValue:undefined,value:value!=null?value:inst._wrapperState.initialValue,checked:checked!=null?checked:inst._wrapperState.initialChecked,onChange:inst._wrapperState.onChange});return nativeProps;},mountWrapper:function(inst,props){if("development"!=='production'){LinkedValueUtils.checkPropTypes('input',props,inst._currentElement._owner);}var defaultValue=props.defaultValue;inst._wrapperState={initialChecked:props.defaultChecked||false,initialValue:defaultValue!=null?defaultValue:null,onChange:_handleChange.bind(inst)};},mountReadyWrapper:function(inst){ // Can't be in mountWrapper or else server rendering leaks.
instancesByReactID[inst._rootNodeID]=inst;},unmountWrapper:function(inst){delete instancesByReactID[inst._rootNodeID];},updateWrapper:function(inst){var props=inst._currentElement.props; // TODO: Shouldn't this be getChecked(props)?
var checked=props.checked;if(checked!=null){ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID,'checked',checked||false);}var value=LinkedValueUtils.getValue(props);if(value!=null){ // Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID,'value',''+value);}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event); // Here we use asap to wait until all updates have propagated, which
// is important when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
ReactUpdates.asap(forceUpdateIfMounted,this);var name=props.name;if(props.type==='radio'&&name!=null){var rootNode=ReactMount.getNode(this._rootNodeID);var queryRoot=rootNode;while(queryRoot.parentNode){queryRoot=queryRoot.parentNode;} // If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form, let's just use the global
// `querySelectorAll` to ensure we don't miss anything.
var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');for(var i=0;i<group.length;i++){var otherNode=group[i];if(otherNode===rootNode||otherNode.form!==rootNode.form){continue;} // This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React with non-React.
var otherID=ReactMount.getID(otherNode);!otherID?"development"!=='production'?invariant(false,'ReactDOMInput: Mixing React and non-React radio inputs with the '+'same `name` is not supported.'):invariant(false):undefined;var otherInstance=instancesByReactID[otherID];!otherInstance?"development"!=='production'?invariant(false,'ReactDOMInput: Unknown radio button ID %s.',otherID):invariant(false):undefined; // If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
ReactUpdates.asap(forceUpdateIfMounted,otherInstance);}}return returnValue;}module.exports=ReactDOMInput;},{"144":144,"22":22,"23":23,"40":40,"65":65,"83":83}],42:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */'use strict';var ReactChildren=_dereq_(28);var ReactDOMSelect=_dereq_(43);var assign=_dereq_(23);var warning=_dereq_(155);var valueContextKey=ReactDOMSelect.valueContextKey; /**
 * Implements an <option> native component that warns when `selected` is set.
 */var ReactDOMOption={mountWrapper:function(inst,props,context){ // TODO (yungsters): Remove support for `selected` in <option>.
if("development"!=='production'){"development"!=='production'?warning(props.selected==null,'Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.'):undefined;} // Look up whether this option is 'selected' via context
var selectValue=context[valueContextKey]; // If context key is null (e.g., no specified value or after initial mount)
// or missing (e.g., for <datalist>), we don't change props.selected
var selected=null;if(selectValue!=null){selected=false;if(Array.isArray(selectValue)){ // multiple
for(var i=0;i<selectValue.length;i++){if(''+selectValue[i]===''+props.value){selected=true;break;}}}else {selected=''+selectValue===''+props.value;}}inst._wrapperState={selected:selected};},getNativeProps:function(inst,props,context){var nativeProps=assign({selected:undefined,children:undefined},props); // Read state only from initial mount because <select> updates value
// manually; we need the initial state only for server rendering
if(inst._wrapperState.selected!=null){nativeProps.selected=inst._wrapperState.selected;}var content=''; // Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
ReactChildren.forEach(props.children,function(child){if(child==null){return;}if(typeof child==='string'||typeof child==='number'){content+=child;}else {"development"!=='production'?warning(false,'Only strings and numbers are supported as <option> children.'):undefined;}});if(content){nativeProps.children=content;}return nativeProps;}};module.exports=ReactDOMOption;},{"155":155,"23":23,"28":28,"43":43}],43:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */'use strict';var LinkedValueUtils=_dereq_(22);var ReactMount=_dereq_(65);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var warning=_dereq_(155);var valueContextKey='__ReactDOMSelect_value$'+Math.random().toString(36).slice(2);function updateOptionsIfPendingUpdateAndMounted(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=false;var props=this._currentElement.props;var value=LinkedValueUtils.getValue(props);if(value!=null){updateOptions(this,Boolean(props.multiple),value);}}}function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';}var valuePropNames=['value','defaultValue']; /**
 * Validation function for `value` and `defaultValue`.
 * @private
 */function checkSelectPropTypes(inst,props){var owner=inst._currentElement._owner;LinkedValueUtils.checkPropTypes('select',props,owner);for(var i=0;i<valuePropNames.length;i++){var propName=valuePropNames[i];if(props[propName]==null){continue;}if(props.multiple){"development"!=='production'?warning(Array.isArray(props[propName]),'The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum(owner)):undefined;}else {"development"!=='production'?warning(!Array.isArray(props[propName]),'The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum(owner)):undefined;}}} /**
 * @param {ReactDOMComponent} inst
 * @param {boolean} multiple
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */function updateOptions(inst,multiple,propValue){var selectedValue,i;var options=ReactMount.getNode(inst._rootNodeID).options;if(multiple){selectedValue={};for(i=0;i<propValue.length;i++){selectedValue[''+propValue[i]]=true;}for(i=0;i<options.length;i++){var selected=selectedValue.hasOwnProperty(options[i].value);if(options[i].selected!==selected){options[i].selected=selected;}}}else { // Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
selectedValue=''+propValue;for(i=0;i<options.length;i++){if(options[i].value===selectedValue){options[i].selected=true;return;}}if(options.length){options[0].selected=true;}}} /**
 * Implements a <select> native component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */var ReactDOMSelect={valueContextKey:valueContextKey,getNativeProps:function(inst,props,context){return assign({},props,{onChange:inst._wrapperState.onChange,value:undefined});},mountWrapper:function(inst,props){if("development"!=='production'){checkSelectPropTypes(inst,props);}var value=LinkedValueUtils.getValue(props);inst._wrapperState={pendingUpdate:false,initialValue:value!=null?value:props.defaultValue,onChange:_handleChange.bind(inst),wasMultiple:Boolean(props.multiple)};},processChildContext:function(inst,props,context){ // Pass down initial value so initial generated markup has correct
// `selected` attributes
var childContext=assign({},context);childContext[valueContextKey]=inst._wrapperState.initialValue;return childContext;},postUpdateWrapper:function(inst){var props=inst._currentElement.props; // After the initial mount, we control selected-ness manually so don't pass
// the context value down
inst._wrapperState.initialValue=undefined;var wasMultiple=inst._wrapperState.wasMultiple;inst._wrapperState.wasMultiple=Boolean(props.multiple);var value=LinkedValueUtils.getValue(props);if(value!=null){inst._wrapperState.pendingUpdate=false;updateOptions(inst,Boolean(props.multiple),value);}else if(wasMultiple!==Boolean(props.multiple)){ // For simplicity, reapply `defaultValue` if `multiple` is toggled.
if(props.defaultValue!=null){updateOptions(inst,Boolean(props.multiple),props.defaultValue);}else { // Revert the select back to its default unselected state.
updateOptions(inst,Boolean(props.multiple),props.multiple?[]:'');}}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event);this._wrapperState.pendingUpdate=true;ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted,this);return returnValue;}module.exports=ReactDOMSelect;},{"155":155,"22":22,"23":23,"65":65,"83":83}],44:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */'use strict';var ExecutionEnvironment=_dereq_(130);var getNodeForCharacterOffset=_dereq_(116);var getTextContentAccessor=_dereq_(117); /**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */function isCollapsed(anchorNode,anchorOffset,focusNode,focusOffset){return anchorNode===focusNode&&anchorOffset===focusOffset;} /**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getIEOffsets(node){var selection=document.selection;var selectedRange=selection.createRange();var selectedLength=selectedRange.text.length; // Duplicate selection so we can move range without breaking user selection.
var fromStart=selectedRange.duplicate();fromStart.moveToElementText(node);fromStart.setEndPoint('EndToStart',selectedRange);var startOffset=fromStart.text.length;var endOffset=startOffset+selectedLength;return {start:startOffset,end:endOffset};} /**
 * @param {DOMElement} node
 * @return {?object}
 */function getModernOffsets(node){var selection=window.getSelection&&window.getSelection();if(!selection||selection.rangeCount===0){return null;}var anchorNode=selection.anchorNode;var anchorOffset=selection.anchorOffset;var focusNode=selection.focusNode;var focusOffset=selection.focusOffset;var currentRange=selection.getRangeAt(0); // In Firefox, range.startContainer and range.endContainer can be "anonymous
// divs", e.g. the up/down buttons on an <input type="number">. Anonymous
// divs do not seem to expose properties, triggering a "Permission denied
// error" if any of its properties are accessed. The only seemingly possible
// way to avoid erroring is to access a property that typically works for
// non-anonymous divs and catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{ /* eslint-disable no-unused-expressions */currentRange.startContainer.nodeType;currentRange.endContainer.nodeType; /* eslint-enable no-unused-expressions */}catch(e){return null;} // If the node and offset values are the same, the selection is collapsed.
// `Selection.isCollapsed` is available natively, but IE sometimes gets
// this value wrong.
var isSelectionCollapsed=isCollapsed(selection.anchorNode,selection.anchorOffset,selection.focusNode,selection.focusOffset);var rangeLength=isSelectionCollapsed?0:currentRange.toString().length;var tempRange=currentRange.cloneRange();tempRange.selectNodeContents(node);tempRange.setEnd(currentRange.startContainer,currentRange.startOffset);var isTempRangeCollapsed=isCollapsed(tempRange.startContainer,tempRange.startOffset,tempRange.endContainer,tempRange.endOffset);var start=isTempRangeCollapsed?0:tempRange.toString().length;var end=start+rangeLength; // Detect whether the selection is backward.
var detectionRange=document.createRange();detectionRange.setStart(anchorNode,anchorOffset);detectionRange.setEnd(focusNode,focusOffset);var isBackward=detectionRange.collapsed;return {start:isBackward?end:start,end:isBackward?start:end};} /**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setIEOffsets(node,offsets){var range=document.selection.createRange().duplicate();var start,end;if(typeof offsets.end==='undefined'){start=offsets.start;end=start;}else if(offsets.start>offsets.end){start=offsets.end;end=offsets.start;}else {start=offsets.start;end=offsets.end;}range.moveToElementText(node);range.moveStart('character',start);range.setEndPoint('EndToStart',range);range.moveEnd('character',end-start);range.select();} /**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setModernOffsets(node,offsets){if(!window.getSelection){return;}var selection=window.getSelection();var length=node[getTextContentAccessor()].length;var start=Math.min(offsets.start,length);var end=typeof offsets.end==='undefined'?start:Math.min(offsets.end,length); // IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!selection.extend&&start>end){var temp=end;end=start;start=temp;}var startMarker=getNodeForCharacterOffset(node,start);var endMarker=getNodeForCharacterOffset(node,end);if(startMarker&&endMarker){var range=document.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start>end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else {range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}var useIEOffsets=ExecutionEnvironment.canUseDOM&&'selection' in document&&!('getSelection' in window);var ReactDOMSelection={ /**
   * @param {DOMElement} node
   */getOffsets:useIEOffsets?getIEOffsets:getModernOffsets, /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */setOffsets:useIEOffsets?setIEOffsets:setModernOffsets};module.exports=ReactDOMSelection;},{"116":116,"117":117,"130":130}],45:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMServer
 */'use strict';var ReactDefaultInjection=_dereq_(49);var ReactServerRendering=_dereq_(80);var ReactVersion=_dereq_(84);ReactDefaultInjection.inject();var ReactDOMServer={renderToString:ReactServerRendering.renderToString,renderToStaticMarkup:ReactServerRendering.renderToStaticMarkup,version:ReactVersion};module.exports=ReactDOMServer;},{"49":49,"80":80,"84":84}],46:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextComponent
 * @typechecks static-only
 */'use strict';var DOMChildrenOperations=_dereq_(9);var DOMPropertyOperations=_dereq_(11);var ReactComponentBrowserEnvironment=_dereq_(31);var ReactMount=_dereq_(65);var assign=_dereq_(23);var escapeTextContentForBrowser=_dereq_(107);var setTextContent=_dereq_(125);var validateDOMNesting=_dereq_(128); /**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings in elements so that they can undergo
 * the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */var ReactDOMTextComponent=function(props){ // This constructor and its argument is currently used by mocks.
};assign(ReactDOMTextComponent.prototype,{ /**
   * @param {ReactText} text
   * @internal
   */construct:function(text){ // TODO: This is really a ReactText (ReactNode), not a ReactElement
this._currentElement=text;this._stringText=''+text; // Properties
this._rootNodeID=null;this._mountIndex=0;}, /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */mountComponent:function(rootID,transaction,context){if("development"!=='production'){if(context[validateDOMNesting.ancestorInfoContextKey]){validateDOMNesting('span',null,context[validateDOMNesting.ancestorInfoContextKey]);}}this._rootNodeID=rootID;if(transaction.useCreateElement){var ownerDocument=context[ReactMount.ownerDocumentContextKey];var el=ownerDocument.createElement('span');DOMPropertyOperations.setAttributeForID(el,rootID); // Populate node cache
ReactMount.getID(el);setTextContent(el,this._stringText);return el;}else {var escapedText=escapeTextContentForBrowser(this._stringText);if(transaction.renderToStaticMarkup){ // Normally we'd wrap this in a `span` for the reasons stated above, but
// since this is a situation where React won't take over (static pages),
// we can simply return the text as it is.
return escapedText;}return '<span '+DOMPropertyOperations.createMarkupForID(rootID)+'>'+escapedText+'</span>';}}, /**
   * Updates this component by updating the text content.
   *
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */receiveComponent:function(nextText,transaction){if(nextText!==this._currentElement){this._currentElement=nextText;var nextStringText=''+nextText;if(nextStringText!==this._stringText){ // TODO: Save this as pending props and use performUpdateIfNecessary
// and/or updateComponent to do the actual update for consistency with
// other component types?
this._stringText=nextStringText;var node=ReactMount.getNode(this._rootNodeID);DOMChildrenOperations.updateTextContent(node,nextStringText);}}},unmountComponent:function(){ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);}});module.exports=ReactDOMTextComponent;},{"107":107,"11":11,"125":125,"128":128,"23":23,"31":31,"65":65,"9":9}],47:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */'use strict';var LinkedValueUtils=_dereq_(22);var ReactDOMIDOperations=_dereq_(40);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var invariant=_dereq_(144);var warning=_dereq_(155);function forceUpdateIfMounted(){if(this._rootNodeID){ // DOM component is still mounted; update
ReactDOMTextarea.updateWrapper(this);}} /**
 * Implements a <textarea> native component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */var ReactDOMTextarea={getNativeProps:function(inst,props,context){!(props.dangerouslySetInnerHTML==null)?"development"!=='production'?invariant(false,'`dangerouslySetInnerHTML` does not make sense on <textarea>.'):invariant(false):undefined; // Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.
var nativeProps=assign({},props,{defaultValue:undefined,value:undefined,children:inst._wrapperState.initialValue,onChange:inst._wrapperState.onChange});return nativeProps;},mountWrapper:function(inst,props){if("development"!=='production'){LinkedValueUtils.checkPropTypes('textarea',props,inst._currentElement._owner);}var defaultValue=props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.
var children=props.children;if(children!=null){if("development"!=='production'){"development"!=='production'?warning(false,'Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.'):undefined;}!(defaultValue==null)?"development"!=='production'?invariant(false,'If you supply `defaultValue` on a <textarea>, do not pass children.'):invariant(false):undefined;if(Array.isArray(children)){!(children.length<=1)?"development"!=='production'?invariant(false,'<textarea> can only have at most one child.'):invariant(false):undefined;children=children[0];}defaultValue=''+children;}if(defaultValue==null){defaultValue='';}var value=LinkedValueUtils.getValue(props);inst._wrapperState={ // We save the initial value so that `ReactDOMComponent` doesn't update
// `textContent` (unnecessary since we update value).
// The initial value can be a boolean or object so that's why it's
// forced to be a string.
initialValue:''+(value!=null?value:defaultValue),onChange:_handleChange.bind(inst)};},updateWrapper:function(inst){var props=inst._currentElement.props;var value=LinkedValueUtils.getValue(props);if(value!=null){ // Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID,'value',''+value);}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event);ReactUpdates.asap(forceUpdateIfMounted,this);return returnValue;}module.exports=ReactDOMTextarea;},{"144":144,"155":155,"22":22,"23":23,"40":40,"83":83}],48:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */'use strict';var ReactUpdates=_dereq_(83);var Transaction=_dereq_(100);var assign=_dereq_(23);var emptyFunction=_dereq_(136);var RESET_BATCHED_UPDATES={initialize:emptyFunction,close:function(){ReactDefaultBatchingStrategy.isBatchingUpdates=false;}};var FLUSH_BATCHED_UPDATES={initialize:emptyFunction,close:ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)};var TRANSACTION_WRAPPERS=[FLUSH_BATCHED_UPDATES,RESET_BATCHED_UPDATES];function ReactDefaultBatchingStrategyTransaction(){this.reinitializeTransaction();}assign(ReactDefaultBatchingStrategyTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function(){return TRANSACTION_WRAPPERS;}});var transaction=new ReactDefaultBatchingStrategyTransaction();var ReactDefaultBatchingStrategy={isBatchingUpdates:false, /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */batchedUpdates:function(callback,a,b,c,d,e){var alreadyBatchingUpdates=ReactDefaultBatchingStrategy.isBatchingUpdates;ReactDefaultBatchingStrategy.isBatchingUpdates=true; // The code is written this way to avoid extra allocations
if(alreadyBatchingUpdates){callback(a,b,c,d,e);}else {transaction.perform(callback,null,a,b,c,d,e);}}};module.exports=ReactDefaultBatchingStrategy;},{"100":100,"136":136,"23":23,"83":83}],49:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */'use strict';var BeforeInputEventPlugin=_dereq_(3);var ChangeEventPlugin=_dereq_(7);var ClientReactRootIndex=_dereq_(8);var DefaultEventPluginOrder=_dereq_(13);var EnterLeaveEventPlugin=_dereq_(14);var ExecutionEnvironment=_dereq_(130);var HTMLDOMPropertyConfig=_dereq_(21);var ReactBrowserComponentMixin=_dereq_(25);var ReactComponentBrowserEnvironment=_dereq_(31);var ReactDefaultBatchingStrategy=_dereq_(48);var ReactDOMComponent=_dereq_(37);var ReactDOMTextComponent=_dereq_(46);var ReactEventListener=_dereq_(58);var ReactInjection=_dereq_(59);var ReactInstanceHandles=_dereq_(61);var ReactMount=_dereq_(65);var ReactReconcileTransaction=_dereq_(75);var SelectEventPlugin=_dereq_(86);var ServerReactRootIndex=_dereq_(87);var SimpleEventPlugin=_dereq_(88);var SVGDOMPropertyConfig=_dereq_(85);var alreadyInjected=false;function inject(){if(alreadyInjected){ // TODO: This is currently true because these injections are shared between
// the client and the server package. They should be built independently
// and not share any injection state. Then this problem will be solved.
return;}alreadyInjected=true;ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener); /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);ReactInjection.EventPluginHub.injectMount(ReactMount); /**
   * Some important event plugins included by default (without having to require
   * them).
   */ReactInjection.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin,EnterLeaveEventPlugin:EnterLeaveEventPlugin,ChangeEventPlugin:ChangeEventPlugin,SelectEventPlugin:SelectEventPlugin,BeforeInputEventPlugin:BeforeInputEventPlugin});ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);ReactInjection.EmptyComponent.injectEmptyComponent('noscript');ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM?ClientReactRootIndex.createReactRootIndex:ServerReactRootIndex.createReactRootIndex);ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);if("development"!=='production'){var url=ExecutionEnvironment.canUseDOM&&window.location.href||'';if(/[?&]react_perf\b/.test(url)){var ReactDefaultPerf=_dereq_(50);ReactDefaultPerf.start();}}}module.exports={inject:inject};},{"13":13,"130":130,"14":14,"21":21,"25":25,"3":3,"31":31,"37":37,"46":46,"48":48,"50":50,"58":58,"59":59,"61":61,"65":65,"7":7,"75":75,"8":8,"85":85,"86":86,"87":87,"88":88}],50:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerf
 * @typechecks static-only
 */'use strict';var DOMProperty=_dereq_(10);var ReactDefaultPerfAnalysis=_dereq_(51);var ReactMount=_dereq_(65);var ReactPerf=_dereq_(71);var performanceNow=_dereq_(152);function roundFloat(val){return Math.floor(val*100)/100;}function addValue(obj,key,val){obj[key]=(obj[key]||0)+val;}var ReactDefaultPerf={_allMeasurements:[], // last item in the list is the current one
_mountStack:[0],_injected:false,start:function(){if(!ReactDefaultPerf._injected){ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);}ReactDefaultPerf._allMeasurements.length=0;ReactPerf.enableMeasure=true;},stop:function(){ReactPerf.enableMeasure=false;},getLastMeasurements:function(){return ReactDefaultPerf._allMeasurements;},printExclusive:function(measurements){measurements=measurements||ReactDefaultPerf._allMeasurements;var summary=ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);console.table(summary.map(function(item){return {'Component class name':item.componentName,'Total inclusive time (ms)':roundFloat(item.inclusive),'Exclusive mount time (ms)':roundFloat(item.exclusive),'Exclusive render time (ms)':roundFloat(item.render),'Mount time per instance (ms)':roundFloat(item.exclusive/item.count),'Render time per instance (ms)':roundFloat(item.render/item.count),'Instances':item.count};})); // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
// number.
},printInclusive:function(measurements){measurements=measurements||ReactDefaultPerf._allMeasurements;var summary=ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);console.table(summary.map(function(item){return {'Owner > component':item.componentName,'Inclusive time (ms)':roundFloat(item.time),'Instances':item.count};}));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2)+' ms');},getMeasurementsSummaryMap:function(measurements){var summary=ReactDefaultPerfAnalysis.getInclusiveSummary(measurements,true);return summary.map(function(item){return {'Owner > component':item.componentName,'Wasted time (ms)':item.time,'Instances':item.count};});},printWasted:function(measurements){measurements=measurements||ReactDefaultPerf._allMeasurements;console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2)+' ms');},printDOM:function(measurements){measurements=measurements||ReactDefaultPerf._allMeasurements;var summary=ReactDefaultPerfAnalysis.getDOMSummary(measurements);console.table(summary.map(function(item){var result={};result[DOMProperty.ID_ATTRIBUTE_NAME]=item.id;result.type=item.type;result.args=JSON.stringify(item.args);return result;}));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2)+' ms');},_recordWrite:function(id,fnName,totalTime,args){ // TODO: totalTime isn't that useful since it doesn't count paints/reflows
var writes=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1].writes;writes[id]=writes[id]||[];writes[id].push({type:fnName,time:totalTime,args:args});},measure:function(moduleName,fnName,func){return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var totalTime;var rv;var start;if(fnName==='_renderNewRootComponent'||fnName==='flushBatchedUpdates'){ // A "measurement" is a set of metrics recorded for each flush. We want
// to group the metrics for a given flush together so we can look at the
// components that rendered and the DOM operations that actually
// happened to determine the amount of "wasted work" performed.
ReactDefaultPerf._allMeasurements.push({exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},totalTime:0,created:{}});start=performanceNow();rv=func.apply(this,args);ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1].totalTime=performanceNow()-start;return rv;}else if(fnName==='_mountImageIntoNode'||moduleName==='ReactBrowserEventEmitter'||moduleName==='ReactDOMIDOperations'||moduleName==='CSSPropertyOperations'||moduleName==='DOMChildrenOperations'||moduleName==='DOMPropertyOperations'){start=performanceNow();rv=func.apply(this,args);totalTime=performanceNow()-start;if(fnName==='_mountImageIntoNode'){var mountID=ReactMount.getID(args[1]);ReactDefaultPerf._recordWrite(mountID,fnName,totalTime,args[0]);}else if(fnName==='dangerouslyProcessChildrenUpdates'){ // special format
args[0].forEach(function(update){var writeArgs={};if(update.fromIndex!==null){writeArgs.fromIndex=update.fromIndex;}if(update.toIndex!==null){writeArgs.toIndex=update.toIndex;}if(update.textContent!==null){writeArgs.textContent=update.textContent;}if(update.markupIndex!==null){writeArgs.markup=args[1][update.markupIndex];}ReactDefaultPerf._recordWrite(update.parentID,update.type,totalTime,writeArgs);});}else { // basic format
var id=args[0];if(typeof id==='object'){id=ReactMount.getID(args[0]);}ReactDefaultPerf._recordWrite(id,fnName,totalTime,Array.prototype.slice.call(args,1));}return rv;}else if(moduleName==='ReactCompositeComponent'&&(fnName==='mountComponent'||fnName==='updateComponent'|| // TODO: receiveComponent()?
fnName==='_renderValidatedComponent')){if(this._currentElement.type===ReactMount.TopLevelWrapper){return func.apply(this,args);}var rootNodeID=fnName==='mountComponent'?args[0]:this._rootNodeID;var isRender=fnName==='_renderValidatedComponent';var isMount=fnName==='mountComponent';var mountStack=ReactDefaultPerf._mountStack;var entry=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1];if(isRender){addValue(entry.counts,rootNodeID,1);}else if(isMount){entry.created[rootNodeID]=true;mountStack.push(0);}start=performanceNow();rv=func.apply(this,args);totalTime=performanceNow()-start;if(isRender){addValue(entry.render,rootNodeID,totalTime);}else if(isMount){var subMountTime=mountStack.pop();mountStack[mountStack.length-1]+=totalTime;addValue(entry.exclusive,rootNodeID,totalTime-subMountTime);addValue(entry.inclusive,rootNodeID,totalTime);}else {addValue(entry.inclusive,rootNodeID,totalTime);}entry.displayNames[rootNodeID]={current:this.getName(),owner:this._currentElement._owner?this._currentElement._owner.getName():'<root>'};return rv;}else {return func.apply(this,args);}};}};module.exports=ReactDefaultPerf;},{"10":10,"152":152,"51":51,"65":65,"71":71}],51:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerfAnalysis
 */'use strict';var assign=_dereq_(23); // Don't try to save users less than 1.2ms (a number I made up)
var DONT_CARE_THRESHOLD=1.2;var DOM_OPERATION_TYPES={'_mountImageIntoNode':'set innerHTML',INSERT_MARKUP:'set innerHTML',MOVE_EXISTING:'move',REMOVE_NODE:'remove',SET_MARKUP:'set innerHTML',TEXT_CONTENT:'set textContent','setValueForProperty':'update attribute','setValueForAttribute':'update attribute','deleteValueForProperty':'remove attribute','setValueForStyles':'update styles','replaceNodeWithMarkup':'replace','updateTextContent':'set textContent'};function getTotalTime(measurements){ // TODO: return number of DOM ops? could be misleading.
// TODO: measure dropped frames after reconcile?
// TODO: log total time of each reconcile and the top-level component
// class that triggered it.
var totalTime=0;for(var i=0;i<measurements.length;i++){var measurement=measurements[i];totalTime+=measurement.totalTime;}return totalTime;}function getDOMSummary(measurements){var items=[];measurements.forEach(function(measurement){Object.keys(measurement.writes).forEach(function(id){measurement.writes[id].forEach(function(write){items.push({id:id,type:DOM_OPERATION_TYPES[write.type]||write.type,args:write.args});});});});return items;}function getExclusiveSummary(measurements){var candidates={};var displayName;for(var i=0;i<measurements.length;i++){var measurement=measurements[i];var allIDs=assign({},measurement.exclusive,measurement.inclusive);for(var id in allIDs){displayName=measurement.displayNames[id].current;candidates[displayName]=candidates[displayName]||{componentName:displayName,inclusive:0,exclusive:0,render:0,count:0};if(measurement.render[id]){candidates[displayName].render+=measurement.render[id];}if(measurement.exclusive[id]){candidates[displayName].exclusive+=measurement.exclusive[id];}if(measurement.inclusive[id]){candidates[displayName].inclusive+=measurement.inclusive[id];}if(measurement.counts[id]){candidates[displayName].count+=measurement.counts[id];}}} // Now make a sorted array with the results.
var arr=[];for(displayName in candidates){if(candidates[displayName].exclusive>=DONT_CARE_THRESHOLD){arr.push(candidates[displayName]);}}arr.sort(function(a,b){return b.exclusive-a.exclusive;});return arr;}function getInclusiveSummary(measurements,onlyClean){var candidates={};var inclusiveKey;for(var i=0;i<measurements.length;i++){var measurement=measurements[i];var allIDs=assign({},measurement.exclusive,measurement.inclusive);var cleanComponents;if(onlyClean){cleanComponents=getUnchangedComponents(measurement);}for(var id in allIDs){if(onlyClean&&!cleanComponents[id]){continue;}var displayName=measurement.displayNames[id]; // Inclusive time is not useful for many components without knowing where
// they are instantiated. So we aggregate inclusive time with both the
// owner and current displayName as the key.
inclusiveKey=displayName.owner+' > '+displayName.current;candidates[inclusiveKey]=candidates[inclusiveKey]||{componentName:inclusiveKey,time:0,count:0};if(measurement.inclusive[id]){candidates[inclusiveKey].time+=measurement.inclusive[id];}if(measurement.counts[id]){candidates[inclusiveKey].count+=measurement.counts[id];}}} // Now make a sorted array with the results.
var arr=[];for(inclusiveKey in candidates){if(candidates[inclusiveKey].time>=DONT_CARE_THRESHOLD){arr.push(candidates[inclusiveKey]);}}arr.sort(function(a,b){return b.time-a.time;});return arr;}function getUnchangedComponents(measurement){ // For a given reconcile, look at which components did not actually
// render anything to the DOM and return a mapping of their ID to
// the amount of time it took to render the entire subtree.
var cleanComponents={};var dirtyLeafIDs=Object.keys(measurement.writes);var allIDs=assign({},measurement.exclusive,measurement.inclusive);for(var id in allIDs){var isDirty=false; // For each component that rendered, see if a component that triggered
// a DOM op is in its subtree.
for(var i=0;i<dirtyLeafIDs.length;i++){if(dirtyLeafIDs[i].indexOf(id)===0){isDirty=true;break;}} // check if component newly created
if(measurement.created[id]){isDirty=true;}if(!isDirty&&measurement.counts[id]>0){cleanComponents[id]=true;}}return cleanComponents;}var ReactDefaultPerfAnalysis={getExclusiveSummary:getExclusiveSummary,getInclusiveSummary:getInclusiveSummary,getDOMSummary:getDOMSummary,getTotalTime:getTotalTime};module.exports=ReactDefaultPerfAnalysis;},{"23":23}],52:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */'use strict';var ReactCurrentOwner=_dereq_(34);var assign=_dereq_(23);var canDefineProperty=_dereq_(104); // The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;var RESERVED_PROPS={key:true,ref:true,__self:true,__source:true}; /**
 * Base constructor for all React elements. This is only used to make this
 * work with a dynamic instanceof check. Nothing should live on this prototype.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */var ReactElement=function(type,key,ref,self,source,owner,props){var element={ // This tag allow us to uniquely identify this as a React Element
$$typeof:REACT_ELEMENT_TYPE, // Built-in properties that belong on the element
type:type,key:key,ref:ref,props:props, // Record the component responsible for creating this element.
_owner:owner};if("development"!=='production'){ // The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
element._store={}; // To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
if(canDefineProperty){Object.defineProperty(element._store,'validated',{configurable:false,enumerable:false,writable:true,value:false}); // self and source are DEV only properties.
Object.defineProperty(element,'_self',{configurable:false,enumerable:false,writable:false,value:self}); // Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(element,'_source',{configurable:false,enumerable:false,writable:false,value:source});}else {element._store.validated=false;element._self=self;element._source=source;}Object.freeze(element.props);Object.freeze(element);}return element;};ReactElement.createElement=function(type,config,children){var propName; // Reserved names are extracted
var props={};var key=null;var ref=null;var self=null;var source=null;if(config!=null){ref=config.ref===undefined?null:config.ref;key=config.key===undefined?null:''+config.key;self=config.__self===undefined?null:config.__self;source=config.__source===undefined?null:config.__source; // Remaining properties are added to a new props object
for(propName in config){if(config.hasOwnProperty(propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){props[propName]=config[propName];}}} // Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;} // Resolve default props
if(type&&type.defaultProps){var defaultProps=type.defaultProps;for(propName in defaultProps){if(typeof props[propName]==='undefined'){props[propName]=defaultProps[propName];}}}return ReactElement(type,key,ref,self,source,ReactCurrentOwner.current,props);};ReactElement.createFactory=function(type){var factory=ReactElement.createElement.bind(null,type); // Expose the type on the factory and the prototype so that it can be
// easily accessed on elements. E.g. `<Foo />.type === Foo`.
// This should not be named `constructor` since this may not be the function
// that created the element, and it may not even be a constructor.
// Legacy hook TODO: Warn if this is accessed
factory.type=type;return factory;};ReactElement.cloneAndReplaceKey=function(oldElement,newKey){var newElement=ReactElement(oldElement.type,newKey,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,oldElement.props);return newElement;};ReactElement.cloneAndReplaceProps=function(oldElement,newProps){var newElement=ReactElement(oldElement.type,oldElement.key,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,newProps);if("development"!=='production'){ // If the key on the original is valid, then the clone is valid
newElement._store.validated=oldElement._store.validated;}return newElement;};ReactElement.cloneElement=function(element,config,children){var propName; // Original props are copied
var props=assign({},element.props); // Reserved names are extracted
var key=element.key;var ref=element.ref; // Self is preserved since the owner is preserved.
var self=element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
// transpiler, and the original source is probably a better indicator of the
// true owner.
var source=element._source; // Owner will be preserved, unless ref is overridden
var owner=element._owner;if(config!=null){if(config.ref!==undefined){ // Silently steal the ref from the parent.
ref=config.ref;owner=ReactCurrentOwner.current;}if(config.key!==undefined){key=''+config.key;} // Remaining properties override existing props
for(propName in config){if(config.hasOwnProperty(propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){props[propName]=config[propName];}}} // Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;}return ReactElement(element.type,key,ref,self,source,owner,props);}; /**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */ReactElement.isValidElement=function(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;};module.exports=ReactElement;},{"104":104,"23":23,"34":34}],53:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 */ /**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */'use strict';var ReactElement=_dereq_(52);var ReactPropTypeLocations=_dereq_(73);var ReactPropTypeLocationNames=_dereq_(72);var ReactCurrentOwner=_dereq_(34);var canDefineProperty=_dereq_(104);var getIteratorFn=_dereq_(115);var invariant=_dereq_(144);var warning=_dereq_(155);function getDeclarationErrorAddendum(){if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';} /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */var ownerHasKeyUseWarning={};var loggedTypeFailures={}; /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */function validateExplicitKey(element,parentType){if(!element._store||element._store.validated||element.key!=null){return;}element._store.validated=true;var addenda=getAddendaForKeyUse('uniqueKey',element,parentType);if(addenda===null){ // we already showed the warning
return;}"development"!=='production'?warning(false,'Each child in an array or iterator should have a unique "key" prop.'+'%s%s%s',addenda.parentOrOwner||'',addenda.childOwner||'',addenda.url||''):undefined;} /**
 * Shared warning and monitoring code for the key warnings.
 *
 * @internal
 * @param {string} messageType A key used for de-duping warnings.
 * @param {ReactElement} element Component that requires a key.
 * @param {*} parentType element's parent's type.
 * @returns {?object} A set of addenda to use in the warning message, or null
 * if the warning has already been shown before (and shouldn't be shown again).
 */function getAddendaForKeyUse(messageType,element,parentType){var addendum=getDeclarationErrorAddendum();if(!addendum){var parentName=typeof parentType==='string'?parentType:parentType.displayName||parentType.name;if(parentName){addendum=' Check the top-level render call using <'+parentName+'>.';}}var memoizer=ownerHasKeyUseWarning[messageType]||(ownerHasKeyUseWarning[messageType]={});if(memoizer[addendum]){return null;}memoizer[addendum]=true;var addenda={parentOrOwner:addendum,url:' See https://fb.me/react-warning-keys for more information.',childOwner:null}; // Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
if(element&&element._owner&&element._owner!==ReactCurrentOwner.current){ // Give the component that originally created this child.
addenda.childOwner=' It was passed a child from '+element._owner.getName()+'.';}return addenda;} /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function validateChildKeys(node,parentType){if(typeof node!=='object'){return;}if(Array.isArray(node)){for(var i=0;i<node.length;i++){var child=node[i];if(ReactElement.isValidElement(child)){validateExplicitKey(child,parentType);}}}else if(ReactElement.isValidElement(node)){ // This element was passed in a valid location.
if(node._store){node._store.validated=true;}}else if(node){var iteratorFn=getIteratorFn(node); // Entry iterators provide implicit keys.
if(iteratorFn){if(iteratorFn!==node.entries){var iterator=iteratorFn.call(node);var step;while(!(step=iterator.next()).done){if(ReactElement.isValidElement(step.value)){validateExplicitKey(step.value,parentType);}}}}}} /**
 * Assert that the props are valid
 *
 * @param {string} componentName Name of the component for error messages.
 * @param {object} propTypes Map of prop name to a ReactPropType
 * @param {object} props
 * @param {string} location e.g. "prop", "context", "child context"
 * @private
 */function checkPropTypes(componentName,propTypes,props,location){for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error; // Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{ // This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
!(typeof propTypes[propName]==='function')?"development"!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],propName):invariant(false):undefined;error=propTypes[propName](props,propName,componentName,location);}catch(ex){error=ex;}"development"!=='production'?warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',ReactPropTypeLocationNames[location],propName,typeof error):undefined;if(error instanceof Error&&!(error.message in loggedTypeFailures)){ // Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var addendum=getDeclarationErrorAddendum();"development"!=='production'?warning(false,'Failed propType: %s%s',error.message,addendum):undefined;}}}} /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function validatePropTypes(element){var componentClass=element.type;if(typeof componentClass!=='function'){return;}var name=componentClass.displayName||componentClass.name;if(componentClass.propTypes){checkPropTypes(name,componentClass.propTypes,element.props,ReactPropTypeLocations.prop);}if(typeof componentClass.getDefaultProps==='function'){"development"!=='production'?warning(componentClass.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass '+'definitions. Use a static property named `defaultProps` instead.'):undefined;}}var ReactElementValidator={createElement:function(type,props,children){var validType=typeof type==='string'||typeof type==='function'; // We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
"development"!=='production'?warning(validType,'React.createElement: type should not be null, undefined, boolean, or '+'number. It should be a string (for DOM elements) or a ReactClass '+'(for composite components).%s',getDeclarationErrorAddendum()):undefined;var element=ReactElement.createElement.apply(this,arguments); // The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(element==null){return element;} // Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(validType){for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],type);}}validatePropTypes(element);return element;},createFactory:function(type){var validatedFactory=ReactElementValidator.createElement.bind(null,type); // Legacy hook TODO: Warn if this is accessed
validatedFactory.type=type;if("development"!=='production'){if(canDefineProperty){Object.defineProperty(validatedFactory,'type',{enumerable:false,get:function(){"development"!=='production'?warning(false,'Factory.type is deprecated. Access the class directly '+'before passing it to createFactory.'):undefined;Object.defineProperty(this,'type',{value:type});return type;}});}}return validatedFactory;},cloneElement:function(element,props,children){var newElement=ReactElement.cloneElement.apply(this,arguments);for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],newElement.type);}validatePropTypes(newElement);return newElement;}};module.exports=ReactElementValidator;},{"104":104,"115":115,"144":144,"155":155,"34":34,"52":52,"72":72,"73":73}],54:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */'use strict';var ReactElement=_dereq_(52);var ReactEmptyComponentRegistry=_dereq_(55);var ReactReconciler=_dereq_(76);var assign=_dereq_(23);var placeholderElement;var ReactEmptyComponentInjection={injectEmptyComponent:function(component){placeholderElement=ReactElement.createElement(component);}};var ReactEmptyComponent=function(instantiate){this._currentElement=null;this._rootNodeID=null;this._renderedComponent=instantiate(placeholderElement);};assign(ReactEmptyComponent.prototype,{construct:function(element){},mountComponent:function(rootID,transaction,context){ReactEmptyComponentRegistry.registerNullComponentID(rootID);this._rootNodeID=rootID;return ReactReconciler.mountComponent(this._renderedComponent,rootID,transaction,context);},receiveComponent:function(){},unmountComponent:function(rootID,transaction,context){ReactReconciler.unmountComponent(this._renderedComponent);ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);this._rootNodeID=null;this._renderedComponent=null;}});ReactEmptyComponent.injection=ReactEmptyComponentInjection;module.exports=ReactEmptyComponent;},{"23":23,"52":52,"55":55,"76":76}],55:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponentRegistry
 */'use strict'; // This registry keeps track of the React IDs of the components that rendered to
// `null` (in reality a placeholder such as `noscript`)
var nullComponentIDsRegistry={}; /**
 * @param {string} id Component's `_rootNodeID`.
 * @return {boolean} True if the component is rendered to null.
 */function isNullComponentID(id){return !!nullComponentIDsRegistry[id];} /**
 * Mark the component as having rendered to null.
 * @param {string} id Component's `_rootNodeID`.
 */function registerNullComponentID(id){nullComponentIDsRegistry[id]=true;} /**
 * Unmark the component as having rendered to null: it renders to something now.
 * @param {string} id Component's `_rootNodeID`.
 */function deregisterNullComponentID(id){delete nullComponentIDsRegistry[id];}var ReactEmptyComponentRegistry={isNullComponentID:isNullComponentID,registerNullComponentID:registerNullComponentID,deregisterNullComponentID:deregisterNullComponentID};module.exports=ReactEmptyComponentRegistry;},{}],56:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 * @typechecks
 */'use strict';var caughtError=null; /**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {?String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */function invokeGuardedCallback(name,func,a,b){try{return func(a,b);}catch(x){if(caughtError===null){caughtError=x;}return undefined;}}var ReactErrorUtils={invokeGuardedCallback:invokeGuardedCallback, /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */invokeGuardedCallbackWithCatch:invokeGuardedCallback, /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */rethrowCaughtError:function(){if(caughtError){var error=caughtError;caughtError=null;throw error;}}};if("development"!=='production'){ /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');ReactErrorUtils.invokeGuardedCallback=function(name,func,a,b){var boundFunc=func.bind(null,a,b);var evtType='react-'+name;fakeNode.addEventListener(evtType,boundFunc,false);var evt=document.createEvent('Event');evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);fakeNode.removeEventListener(evtType,boundFunc,false);};}}module.exports=ReactErrorUtils;},{}],57:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */'use strict';var EventPluginHub=_dereq_(16);function runEventQueueInBatch(events){EventPluginHub.enqueueEvents(events);EventPluginHub.processEventQueue(false);}var ReactEventEmitterMixin={ /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {object} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native environment event.
   */handleTopLevel:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var events=EventPluginHub.extractEvents(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget);runEventQueueInBatch(events);}};module.exports=ReactEventEmitterMixin;},{"16":16}],58:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 * @typechecks static-only
 */'use strict';var EventListener=_dereq_(129);var ExecutionEnvironment=_dereq_(130);var PooledClass=_dereq_(24);var ReactInstanceHandles=_dereq_(61);var ReactMount=_dereq_(65);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var getEventTarget=_dereq_(114);var getUnboundedScrollPosition=_dereq_(141);var DOCUMENT_FRAGMENT_NODE_TYPE=11; /**
 * Finds the parent React component of `node`.
 *
 * @param {*} node
 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
 *                           is not nested.
 */function findParent(node){ // TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
var nodeID=ReactMount.getID(node);var rootID=ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);var container=ReactMount.findReactContainerForID(rootID);var parent=ReactMount.getFirstReactDOM(container);return parent;} // Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType,nativeEvent){this.topLevelType=topLevelType;this.nativeEvent=nativeEvent;this.ancestors=[];}assign(TopLevelCallbackBookKeeping.prototype,{destructor:function(){this.topLevelType=null;this.nativeEvent=null;this.ancestors.length=0;}});PooledClass.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass.twoArgumentPooler);function handleTopLevelImpl(bookKeeping){ // TODO: Re-enable event.path handling
//
// if (bookKeeping.nativeEvent.path && bookKeeping.nativeEvent.path.length > 1) {
//   // New browsers have a path attribute on native events
//   handleTopLevelWithPath(bookKeeping);
// } else {
//   // Legacy browsers don't have a path attribute on native events
//   handleTopLevelWithoutPath(bookKeeping);
// }
void handleTopLevelWithPath; // temporarily unused
handleTopLevelWithoutPath(bookKeeping);} // Legacy browsers don't have a path attribute on native events
function handleTopLevelWithoutPath(bookKeeping){var topLevelTarget=ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent))||window; // Loop through the hierarchy, in case there's any nested components.
// It's important that we build the array of ancestors before calling any
// event handlers, because event handlers can modify the DOM, leading to
// inconsistencies with ReactMount's node cache. See #1105.
var ancestor=topLevelTarget;while(ancestor){bookKeeping.ancestors.push(ancestor);ancestor=findParent(ancestor);}for(var i=0;i<bookKeeping.ancestors.length;i++){topLevelTarget=bookKeeping.ancestors[i];var topLevelTargetID=ReactMount.getID(topLevelTarget)||'';ReactEventListener._handleTopLevel(bookKeeping.topLevelType,topLevelTarget,topLevelTargetID,bookKeeping.nativeEvent,getEventTarget(bookKeeping.nativeEvent));}} // New browsers have a path attribute on native events
function handleTopLevelWithPath(bookKeeping){var path=bookKeeping.nativeEvent.path;var currentNativeTarget=path[0];var eventsFired=0;for(var i=0;i<path.length;i++){var currentPathElement=path[i];if(currentPathElement.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE){currentNativeTarget=path[i+1];} // TODO: slow
var reactParent=ReactMount.getFirstReactDOM(currentPathElement);if(reactParent===currentPathElement){var currentPathElementID=ReactMount.getID(currentPathElement);var newRootID=ReactInstanceHandles.getReactRootIDFromNodeID(currentPathElementID);bookKeeping.ancestors.push(currentPathElement);var topLevelTargetID=ReactMount.getID(currentPathElement)||'';eventsFired++;ReactEventListener._handleTopLevel(bookKeeping.topLevelType,currentPathElement,topLevelTargetID,bookKeeping.nativeEvent,currentNativeTarget); // Jump to the root of this React render tree
while(currentPathElementID!==newRootID){i++;currentPathElement=path[i];currentPathElementID=ReactMount.getID(currentPathElement);}}}if(eventsFired===0){ReactEventListener._handleTopLevel(bookKeeping.topLevelType,window,'',bookKeeping.nativeEvent,getEventTarget(bookKeeping.nativeEvent));}}function scrollValueMonitor(cb){var scrollPosition=getUnboundedScrollPosition(window);cb(scrollPosition);}var ReactEventListener={_enabled:true,_handleTopLevel:null,WINDOW_HANDLE:ExecutionEnvironment.canUseDOM?window:null,setHandleTopLevel:function(handleTopLevel){ReactEventListener._handleTopLevel=handleTopLevel;},setEnabled:function(enabled){ReactEventListener._enabled=!!enabled;},isEnabled:function(){return ReactEventListener._enabled;}, /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapBubbledEvent:function(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.listen(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));}, /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapCapturedEvent:function(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.capture(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));},monitorScrollValue:function(refresh){var callback=scrollValueMonitor.bind(null,refresh);EventListener.listen(window,'scroll',callback);},dispatchEvent:function(topLevelType,nativeEvent){if(!ReactEventListener._enabled){return;}var bookKeeping=TopLevelCallbackBookKeeping.getPooled(topLevelType,nativeEvent);try{ // Event queue being processed in the same cycle allows
// `preventDefault`.
ReactUpdates.batchedUpdates(handleTopLevelImpl,bookKeeping);}finally {TopLevelCallbackBookKeeping.release(bookKeeping);}}};module.exports=ReactEventListener;},{"114":114,"129":129,"130":130,"141":141,"23":23,"24":24,"61":61,"65":65,"83":83}],59:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */'use strict';var DOMProperty=_dereq_(10);var EventPluginHub=_dereq_(16);var ReactComponentEnvironment=_dereq_(32);var ReactClass=_dereq_(29);var ReactEmptyComponent=_dereq_(54);var ReactBrowserEventEmitter=_dereq_(26);var ReactNativeComponent=_dereq_(68);var ReactPerf=_dereq_(71);var ReactRootIndex=_dereq_(78);var ReactUpdates=_dereq_(83);var ReactInjection={Component:ReactComponentEnvironment.injection,Class:ReactClass.injection,DOMProperty:DOMProperty.injection,EmptyComponent:ReactEmptyComponent.injection,EventPluginHub:EventPluginHub.injection,EventEmitter:ReactBrowserEventEmitter.injection,NativeComponent:ReactNativeComponent.injection,Perf:ReactPerf.injection,RootIndex:ReactRootIndex.injection,Updates:ReactUpdates.injection};module.exports=ReactInjection;},{"10":10,"16":16,"26":26,"29":29,"32":32,"54":54,"68":68,"71":71,"78":78,"83":83}],60:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */'use strict';var ReactDOMSelection=_dereq_(44);var containsNode=_dereq_(133);var focusNode=_dereq_(138);var getActiveElement=_dereq_(139);function isInDocument(node){return containsNode(document.documentElement,node);} /**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */var ReactInputSelection={hasSelectionCapabilities:function(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&elem.type==='text'||nodeName==='textarea'||elem.contentEditable==='true');},getSelectionInformation:function(){var focusedElem=getActiveElement();return {focusedElem:focusedElem,selectionRange:ReactInputSelection.hasSelectionCapabilities(focusedElem)?ReactInputSelection.getSelection(focusedElem):null};}, /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */restoreSelection:function(priorSelectionInformation){var curFocusedElem=getActiveElement();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){if(ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)){ReactInputSelection.setSelection(priorFocusedElem,priorSelectionRange);}focusNode(priorFocusedElem);}}, /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */getSelection:function(input){var selection;if('selectionStart' in input){ // Modern browser with input or textarea.
selection={start:input.selectionStart,end:input.selectionEnd};}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){ // IE8 input.
var range=document.selection.createRange(); // There can only be one selection per document in IE, so it must
// be in our element.
if(range.parentElement()===input){selection={start:-range.moveStart('character',-input.value.length),end:-range.moveEnd('character',-input.value.length)};}}else { // Content editable or old IE textarea.
selection=ReactDOMSelection.getOffsets(input);}return selection||{start:0,end:0};}, /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */setSelection:function(input,offsets){var start=offsets.start;var end=offsets.end;if(typeof end==='undefined'){end=start;}if('selectionStart' in input){input.selectionStart=start;input.selectionEnd=Math.min(end,input.value.length);}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){var range=input.createTextRange();range.collapse(true);range.moveStart('character',start);range.moveEnd('character',end-start);range.select();}else {ReactDOMSelection.setOffsets(input,offsets);}}};module.exports=ReactInputSelection;},{"133":133,"138":138,"139":139,"44":44}],61:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */'use strict';var ReactRootIndex=_dereq_(78);var invariant=_dereq_(144);var SEPARATOR='.';var SEPARATOR_LENGTH=SEPARATOR.length; /**
 * Maximum depth of traversals before we consider the possibility of a bad ID.
 */var MAX_TREE_DEPTH=10000; /**
 * Creates a DOM ID prefix to use when mounting React components.
 *
 * @param {number} index A unique integer
 * @return {string} React root ID.
 * @internal
 */function getReactRootIDString(index){return SEPARATOR+index.toString(36);} /**
 * Checks if a character in the supplied ID is a separator or the end.
 *
 * @param {string} id A React DOM ID.
 * @param {number} index Index of the character to check.
 * @return {boolean} True if the character is a separator or end of the ID.
 * @private
 */function isBoundary(id,index){return id.charAt(index)===SEPARATOR||index===id.length;} /**
 * Checks if the supplied string is a valid React DOM ID.
 *
 * @param {string} id A React DOM ID, maybe.
 * @return {boolean} True if the string is a valid React DOM ID.
 * @private
 */function isValidID(id){return id===''||id.charAt(0)===SEPARATOR&&id.charAt(id.length-1)!==SEPARATOR;} /**
 * Checks if the first ID is an ancestor of or equal to the second ID.
 *
 * @param {string} ancestorID
 * @param {string} descendantID
 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
 * @internal
 */function isAncestorIDOf(ancestorID,descendantID){return descendantID.indexOf(ancestorID)===0&&isBoundary(descendantID,ancestorID.length);} /**
 * Gets the parent ID of the supplied React DOM ID, `id`.
 *
 * @param {string} id ID of a component.
 * @return {string} ID of the parent, or an empty string.
 * @private
 */function getParentID(id){return id?id.substr(0,id.lastIndexOf(SEPARATOR)):'';} /**
 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
 * supplied `destinationID`. If they are equal, the ID is returned.
 *
 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
 * @param {string} destinationID ID of the destination node.
 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
 * @private
 */function getNextDescendantID(ancestorID,destinationID){!(isValidID(ancestorID)&&isValidID(destinationID))?"development"!=='production'?invariant(false,'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',ancestorID,destinationID):invariant(false):undefined;!isAncestorIDOf(ancestorID,destinationID)?"development"!=='production'?invariant(false,'getNextDescendantID(...): React has made an invalid assumption about '+'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',ancestorID,destinationID):invariant(false):undefined;if(ancestorID===destinationID){return ancestorID;} // Skip over the ancestor and the immediate separator. Traverse until we hit
// another separator or we reach the end of `destinationID`.
var start=ancestorID.length+SEPARATOR_LENGTH;var i;for(i=start;i<destinationID.length;i++){if(isBoundary(destinationID,i)){break;}}return destinationID.substr(0,i);} /**
 * Gets the nearest common ancestor ID of two IDs.
 *
 * Using this ID scheme, the nearest common ancestor ID is the longest common
 * prefix of the two IDs that immediately preceded a "marker" in both strings.
 *
 * @param {string} oneID
 * @param {string} twoID
 * @return {string} Nearest common ancestor ID, or the empty string if none.
 * @private
 */function getFirstCommonAncestorID(oneID,twoID){var minLength=Math.min(oneID.length,twoID.length);if(minLength===0){return '';}var lastCommonMarkerIndex=0; // Use `<=` to traverse until the "EOL" of the shorter string.
for(var i=0;i<=minLength;i++){if(isBoundary(oneID,i)&&isBoundary(twoID,i)){lastCommonMarkerIndex=i;}else if(oneID.charAt(i)!==twoID.charAt(i)){break;}}var longestCommonID=oneID.substr(0,lastCommonMarkerIndex);!isValidID(longestCommonID)?"development"!=='production'?invariant(false,'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',oneID,twoID,longestCommonID):invariant(false):undefined;return longestCommonID;} /**
 * Traverses the parent path between two IDs (either up or down). The IDs must
 * not be the same, and there must exist a parent path between them. If the
 * callback returns `false`, traversal is stopped.
 *
 * @param {?string} start ID at which to start traversal.
 * @param {?string} stop ID at which to end traversal.
 * @param {function} cb Callback to invoke each ID with.
 * @param {*} arg Argument to invoke the callback with.
 * @param {?boolean} skipFirst Whether or not to skip the first node.
 * @param {?boolean} skipLast Whether or not to skip the last node.
 * @private
 */function traverseParentPath(start,stop,cb,arg,skipFirst,skipLast){start=start||'';stop=stop||'';!(start!==stop)?"development"!=='production'?invariant(false,'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.',start):invariant(false):undefined;var traverseUp=isAncestorIDOf(stop,start);!(traverseUp||isAncestorIDOf(start,stop))?"development"!=='production'?invariant(false,'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do '+'not have a parent path.',start,stop):invariant(false):undefined; // Traverse from `start` to `stop` one depth at a time.
var depth=0;var traverse=traverseUp?getParentID:getNextDescendantID;for(var id=start;; /* until break */id=traverse(id,stop)){var ret;if((!skipFirst||id!==start)&&(!skipLast||id!==stop)){ret=cb(id,traverseUp,arg);}if(ret===false||id===stop){ // Only break //after// visiting `stop`.
break;}!(depth++<MAX_TREE_DEPTH)?"development"!=='production'?invariant(false,'traverseParentPath(%s, %s, ...): Detected an infinite loop while '+'traversing the React DOM ID tree. This may be due to malformed IDs: %s',start,stop,id):invariant(false):undefined;}} /**
 * Manages the IDs assigned to DOM representations of React components. This
 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
 * order to simulate events).
 *
 * @internal
 */var ReactInstanceHandles={ /**
   * Constructs a React root ID
   * @return {string} A React root ID.
   */createReactRootID:function(){return getReactRootIDString(ReactRootIndex.createReactRootIndex());}, /**
   * Constructs a React ID by joining a root ID with a name.
   *
   * @param {string} rootID Root ID of a parent component.
   * @param {string} name A component's name (as flattened children).
   * @return {string} A React ID.
   * @internal
   */createReactID:function(rootID,name){return rootID+name;}, /**
   * Gets the DOM ID of the React component that is the root of the tree that
   * contains the React component with the supplied DOM ID.
   *
   * @param {string} id DOM ID of a React component.
   * @return {?string} DOM ID of the React component that is the root.
   * @internal
   */getReactRootIDFromNodeID:function(id){if(id&&id.charAt(0)===SEPARATOR&&id.length>1){var index=id.indexOf(SEPARATOR,1);return index>-1?id.substr(0,index):id;}return null;}, /**
   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
   * should would receive a `mouseEnter` or `mouseLeave` event.
   *
   * NOTE: Does not invoke the callback on the nearest common ancestor because
   * nothing "entered" or "left" that element.
   *
   * @param {string} leaveID ID being left.
   * @param {string} enterID ID being entered.
   * @param {function} cb Callback to invoke on each entered/left ID.
   * @param {*} upArg Argument to invoke the callback with on left IDs.
   * @param {*} downArg Argument to invoke the callback with on entered IDs.
   * @internal
   */traverseEnterLeave:function(leaveID,enterID,cb,upArg,downArg){var ancestorID=getFirstCommonAncestorID(leaveID,enterID);if(ancestorID!==leaveID){traverseParentPath(leaveID,ancestorID,cb,upArg,false,true);}if(ancestorID!==enterID){traverseParentPath(ancestorID,enterID,cb,downArg,true,false);}}, /**
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */traverseTwoPhase:function(targetID,cb,arg){if(targetID){traverseParentPath('',targetID,cb,arg,true,false);traverseParentPath(targetID,'',cb,arg,false,true);}}, /**
   * Same as `traverseTwoPhase` but skips the `targetID`.
   */traverseTwoPhaseSkipTarget:function(targetID,cb,arg){if(targetID){traverseParentPath('',targetID,cb,arg,true,true);traverseParentPath(targetID,'',cb,arg,true,true);}}, /**
   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
   * example, passing `.0.$row-0.1` would result in `cb` getting called
   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */traverseAncestors:function(targetID,cb,arg){traverseParentPath('',targetID,cb,arg,true,false);},getFirstCommonAncestorID:getFirstCommonAncestorID, /**
   * Exposed for unit testing.
   * @private
   */_getNextDescendantID:getNextDescendantID,isAncestorIDOf:isAncestorIDOf,SEPARATOR:SEPARATOR};module.exports=ReactInstanceHandles;},{"144":144,"78":78}],62:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 */'use strict'; /**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */ // TODO: Replace this with ES6: var ReactInstanceMap = new Map();
var ReactInstanceMap={ /**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */remove:function(key){key._reactInternalInstance=undefined;},get:function(key){return key._reactInternalInstance;},has:function(key){return key._reactInternalInstance!==undefined;},set:function(key,value){key._reactInternalInstance=value;}};module.exports=ReactInstanceMap;},{}],63:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactIsomorphic
 */'use strict';var ReactChildren=_dereq_(28);var ReactComponent=_dereq_(30);var ReactClass=_dereq_(29);var ReactDOMFactories=_dereq_(38);var ReactElement=_dereq_(52);var ReactElementValidator=_dereq_(53);var ReactPropTypes=_dereq_(74);var ReactVersion=_dereq_(84);var assign=_dereq_(23);var onlyChild=_dereq_(121);var createElement=ReactElement.createElement;var createFactory=ReactElement.createFactory;var cloneElement=ReactElement.cloneElement;if("development"!=='production'){createElement=ReactElementValidator.createElement;createFactory=ReactElementValidator.createFactory;cloneElement=ReactElementValidator.cloneElement;}var React={ // Modern
Children:{map:ReactChildren.map,forEach:ReactChildren.forEach,count:ReactChildren.count,toArray:ReactChildren.toArray,only:onlyChild},Component:ReactComponent,createElement:createElement,cloneElement:cloneElement,isValidElement:ReactElement.isValidElement, // Classic
PropTypes:ReactPropTypes,createClass:ReactClass.createClass,createFactory:createFactory,createMixin:function(mixin){ // Currently a noop. Will be used to validate and trace mixins.
return mixin;}, // This looks DOM specific but these are actually isomorphic helpers
// since they are just generating DOM strings.
DOM:ReactDOMFactories,version:ReactVersion, // Hook for JSX spread, don't use this for anything else.
__spread:assign};module.exports=React;},{"121":121,"23":23,"28":28,"29":29,"30":30,"38":38,"52":52,"53":53,"74":74,"84":84}],64:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */'use strict';var adler32=_dereq_(103);var TAG_END=/\/?>/;var ReactMarkupChecksum={CHECKSUM_ATTR_NAME:'data-react-checksum', /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */addChecksumToMarkup:function(markup){var checksum=adler32(markup); // Add checksum (handle both parent tags and self-closing tags)
return markup.replace(TAG_END,' '+ReactMarkupChecksum.CHECKSUM_ATTR_NAME+'="'+checksum+'"$&');}, /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */canReuseMarkup:function(markup,element){var existingChecksum=element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);existingChecksum=existingChecksum&&parseInt(existingChecksum,10);var markupChecksum=adler32(markup);return markupChecksum===existingChecksum;}};module.exports=ReactMarkupChecksum;},{"103":103}],65:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */'use strict';var DOMProperty=_dereq_(10);var ReactBrowserEventEmitter=_dereq_(26);var ReactCurrentOwner=_dereq_(34);var ReactDOMFeatureFlags=_dereq_(39);var ReactElement=_dereq_(52);var ReactEmptyComponentRegistry=_dereq_(55);var ReactInstanceHandles=_dereq_(61);var ReactInstanceMap=_dereq_(62);var ReactMarkupChecksum=_dereq_(64);var ReactPerf=_dereq_(71);var ReactReconciler=_dereq_(76);var ReactUpdateQueue=_dereq_(82);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var emptyObject=_dereq_(137);var containsNode=_dereq_(133);var instantiateReactComponent=_dereq_(118);var invariant=_dereq_(144);var setInnerHTML=_dereq_(124);var shouldUpdateReactComponent=_dereq_(126);var validateDOMNesting=_dereq_(128);var warning=_dereq_(155);var ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME;var nodeCache={};var ELEMENT_NODE_TYPE=1;var DOC_NODE_TYPE=9;var DOCUMENT_FRAGMENT_NODE_TYPE=11;var ownerDocumentContextKey='__ReactMount_ownerDocument$'+Math.random().toString(36).slice(2); /** Mapping from reactRootID to React component instance. */var instancesByReactRootID={}; /** Mapping from reactRootID to `container` nodes. */var containersByReactRootID={};if("development"!=='production'){ /** __DEV__-only mapping from reactRootID to root elements. */var rootElementsByReactRootID={};} // Used to store breadth-first search state in findComponentRoot.
var findComponentRootReusableArray=[]; /**
 * Finds the index of the first character
 * that's not common between the two given strings.
 *
 * @return {number} the index of the character where the strings diverge
 */function firstDifferenceIndex(string1,string2){var minLen=Math.min(string1.length,string2.length);for(var i=0;i<minLen;i++){if(string1.charAt(i)!==string2.charAt(i)){return i;}}return string1.length===string2.length?-1:minLen;} /**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 * a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */function getReactRootElementInContainer(container){if(!container){return null;}if(container.nodeType===DOC_NODE_TYPE){return container.documentElement;}else {return container.firstChild;}} /**
 * @param {DOMElement} container DOM element that may contain a React component.
 * @return {?string} A "reactRoot" ID, if a React component is rendered.
 */function getReactRootID(container){var rootElement=getReactRootElementInContainer(container);return rootElement&&ReactMount.getID(rootElement);} /**
 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
 * element can return its control whose name or ID equals ATTR_NAME. All
 * DOM nodes support `getAttributeNode` but this can also get called on
 * other objects so just return '' if we're given something other than a
 * DOM node (such as window).
 *
 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
 * @return {string} ID of the supplied `domNode`.
 */function getID(node){var id=internalGetID(node);if(id){if(nodeCache.hasOwnProperty(id)){var cached=nodeCache[id];if(cached!==node){!!isValid(cached,id)?"development"!=='production'?invariant(false,'ReactMount: Two valid but unequal nodes with the same `%s`: %s',ATTR_NAME,id):invariant(false):undefined;nodeCache[id]=node;}}else {nodeCache[id]=node;}}return id;}function internalGetID(node){ // If node is something like a window, document, or text node, none of
// which support attributes or a .getAttribute method, gracefully return
// the empty string, as if the attribute were missing.
return node&&node.getAttribute&&node.getAttribute(ATTR_NAME)||'';} /**
 * Sets the React-specific ID of the given node.
 *
 * @param {DOMElement} node The DOM node whose ID will be set.
 * @param {string} id The value of the ID attribute.
 */function setID(node,id){var oldID=internalGetID(node);if(oldID!==id){delete nodeCache[oldID];}node.setAttribute(ATTR_NAME,id);nodeCache[id]=node;} /**
 * Finds the node with the supplied React-generated DOM ID.
 *
 * @param {string} id A React-generated DOM ID.
 * @return {DOMElement} DOM node with the suppled `id`.
 * @internal
 */function getNode(id){if(!nodeCache.hasOwnProperty(id)||!isValid(nodeCache[id],id)){nodeCache[id]=ReactMount.findReactNodeByID(id);}return nodeCache[id];} /**
 * Finds the node with the supplied public React instance.
 *
 * @param {*} instance A public React instance.
 * @return {?DOMElement} DOM node with the suppled `id`.
 * @internal
 */function getNodeFromInstance(instance){var id=ReactInstanceMap.get(instance)._rootNodeID;if(ReactEmptyComponentRegistry.isNullComponentID(id)){return null;}if(!nodeCache.hasOwnProperty(id)||!isValid(nodeCache[id],id)){nodeCache[id]=ReactMount.findReactNodeByID(id);}return nodeCache[id];} /**
 * A node is "valid" if it is contained by a currently mounted container.
 *
 * This means that the node does not have to be contained by a document in
 * order to be considered valid.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @param {string} id The expected ID of the node.
 * @return {boolean} Whether the node is contained by a mounted container.
 */function isValid(node,id){if(node){!(internalGetID(node)===id)?"development"!=='production'?invariant(false,'ReactMount: Unexpected modification of `%s`',ATTR_NAME):invariant(false):undefined;var container=ReactMount.findReactContainerForID(id);if(container&&containsNode(container,node)){return true;}}return false;} /**
 * Causes the cache to forget about one React-specific ID.
 *
 * @param {string} id The ID to forget.
 */function purgeID(id){delete nodeCache[id];}var deepestNodeSoFar=null;function findDeepestCachedAncestorImpl(ancestorID){var ancestor=nodeCache[ancestorID];if(ancestor&&isValid(ancestor,ancestorID)){deepestNodeSoFar=ancestor;}else { // This node isn't populated in the cache, so presumably none of its
// descendants are. Break out of the loop.
return false;}} /**
 * Return the deepest cached node whose ID is a prefix of `targetID`.
 */function findDeepestCachedAncestor(targetID){deepestNodeSoFar=null;ReactInstanceHandles.traverseAncestors(targetID,findDeepestCachedAncestorImpl);var foundNode=deepestNodeSoFar;deepestNodeSoFar=null;return foundNode;} /**
 * Mounts this component and inserts it into the DOM.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function mountComponentIntoNode(componentInstance,rootID,container,transaction,shouldReuseMarkup,context){if(ReactDOMFeatureFlags.useCreateElement){context=assign({},context);if(container.nodeType===DOC_NODE_TYPE){context[ownerDocumentContextKey]=container;}else {context[ownerDocumentContextKey]=container.ownerDocument;}}if("development"!=='production'){if(context===emptyObject){context={};}var tag=container.nodeName.toLowerCase();context[validateDOMNesting.ancestorInfoContextKey]=validateDOMNesting.updatedAncestorInfo(null,tag,null);}var markup=ReactReconciler.mountComponent(componentInstance,rootID,transaction,context);componentInstance._renderedComponent._topLevelWrapper=componentInstance;ReactMount._mountImageIntoNode(markup,container,shouldReuseMarkup,transaction);} /**
 * Batched mount.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function batchedMountComponentIntoNode(componentInstance,rootID,container,shouldReuseMarkup,context){var transaction=ReactUpdates.ReactReconcileTransaction.getPooled( /* forceHTML */shouldReuseMarkup);transaction.perform(mountComponentIntoNode,null,componentInstance,rootID,container,transaction,shouldReuseMarkup,context);ReactUpdates.ReactReconcileTransaction.release(transaction);} /**
 * Unmounts a component and removes it from the DOM.
 *
 * @param {ReactComponent} instance React component instance.
 * @param {DOMElement} container DOM element to unmount from.
 * @final
 * @internal
 * @see {ReactMount.unmountComponentAtNode}
 */function unmountComponentFromNode(instance,container){ReactReconciler.unmountComponent(instance);if(container.nodeType===DOC_NODE_TYPE){container=container.documentElement;} // http://jsperf.com/emptying-a-node
while(container.lastChild){container.removeChild(container.lastChild);}} /**
 * True if the supplied DOM node has a direct React-rendered child that is
 * not a React root element. Useful for warning in `render`,
 * `unmountComponentAtNode`, etc.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM element contains a direct child that was
 * rendered by React but is not a root element.
 * @internal
 */function hasNonRootReactChild(node){var reactRootID=getReactRootID(node);return reactRootID?reactRootID!==ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID):false;} /**
 * Returns the first (deepest) ancestor of a node which is rendered by this copy
 * of React.
 */function findFirstReactDOMImpl(node){ // This node might be from another React instance, so we make sure not to
// examine the node cache here
for(;node&&node.parentNode!==node;node=node.parentNode){if(node.nodeType!==1){ // Not a DOMElement, therefore not a React component
continue;}var nodeID=internalGetID(node);if(!nodeID){continue;}var reactRootID=ReactInstanceHandles.getReactRootIDFromNodeID(nodeID); // If containersByReactRootID contains the container we find by crawling up
// the tree, we know that this instance of React rendered the node.
// nb. isValid's strategy (with containsNode) does not work because render
// trees may be nested and we don't want a false positive in that case.
var current=node;var lastID;do {lastID=internalGetID(current);current=current.parentNode;if(current==null){ // The passed-in node has been detached from the container it was
// originally rendered into.
return null;}}while(lastID!==reactRootID);if(current===containersByReactRootID[reactRootID]){return node;}}return null;} /**
 * Temporary (?) hack so that we can store all top-level pending updates on
 * composites instead of having to worry about different types of components
 * here.
 */var TopLevelWrapper=function(){};TopLevelWrapper.prototype.isReactComponent={};if("development"!=='production'){TopLevelWrapper.displayName='TopLevelWrapper';}TopLevelWrapper.prototype.render=function(){ // this.props is actually a ReactElement
return this.props;}; /**
 * Mounting is the process of initializing a React component by creating its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */var ReactMount={TopLevelWrapper:TopLevelWrapper, /** Exposed for debugging purposes **/_instancesByReactRootID:instancesByReactRootID, /**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */scrollMonitor:function(container,renderCallback){renderCallback();}, /**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactElement} nextElement component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */_updateRootComponent:function(prevComponent,nextElement,container,callback){ReactMount.scrollMonitor(container,function(){ReactUpdateQueue.enqueueElementInternal(prevComponent,nextElement);if(callback){ReactUpdateQueue.enqueueCallbackInternal(prevComponent,callback);}});if("development"!=='production'){ // Record the root element in case it later gets transplanted.
rootElementsByReactRootID[getReactRootID(container)]=getReactRootElementInContainer(container);}return prevComponent;}, /**
   * Register a component into the instance map and starts scroll value
   * monitoring
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @return {string} reactRoot ID prefix
   */_registerComponent:function(nextComponent,container){!(container&&(container.nodeType===ELEMENT_NODE_TYPE||container.nodeType===DOC_NODE_TYPE||container.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE))?"development"!=='production'?invariant(false,'_registerComponent(...): Target container is not a DOM element.'):invariant(false):undefined;ReactBrowserEventEmitter.ensureScrollValueMonitoring();var reactRootID=ReactMount.registerContainer(container);instancesByReactRootID[reactRootID]=nextComponent;return reactRootID;}, /**
   * Render a new component into the DOM.
   * @param {ReactElement} nextElement element to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */_renderNewRootComponent:function(nextElement,container,shouldReuseMarkup,context){ // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case.
"development"!=='production'?warning(ReactCurrentOwner.current==null,'_renderNewRootComponent(): Render methods should be a pure function '+'of props and state; triggering nested component updates from '+'render is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):undefined;var componentInstance=instantiateReactComponent(nextElement,null);var reactRootID=ReactMount._registerComponent(componentInstance,container); // The initial render is synchronous but any updates that happen during
// rendering, in componentWillMount or componentDidMount, will be batched
// according to the current batching strategy.
ReactUpdates.batchedUpdates(batchedMountComponentIntoNode,componentInstance,reactRootID,container,shouldReuseMarkup,context);if("development"!=='production'){ // Record the root element in case it later gets transplanted.
rootElementsByReactRootID[reactRootID]=getReactRootElementInContainer(container);}return componentInstance;}, /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */renderSubtreeIntoContainer:function(parentComponent,nextElement,container,callback){!(parentComponent!=null&&parentComponent._reactInternalInstance!=null)?"development"!=='production'?invariant(false,'parentComponent must be a valid React Component'):invariant(false):undefined;return ReactMount._renderSubtreeIntoContainer(parentComponent,nextElement,container,callback);},_renderSubtreeIntoContainer:function(parentComponent,nextElement,container,callback){!ReactElement.isValidElement(nextElement)?"development"!=='production'?invariant(false,'ReactDOM.render(): Invalid component element.%s',typeof nextElement==='string'?' Instead of passing an element string, make sure to instantiate '+'it by passing it to React.createElement.':typeof nextElement==='function'?' Instead of passing a component class, make sure to instantiate '+'it by passing it to React.createElement.': // Check if it quacks like an element
nextElement!=null&&nextElement.props!==undefined?' This may be caused by unintentionally loading two independent '+'copies of React.':''):invariant(false):undefined;"development"!=='production'?warning(!container||!container.tagName||container.tagName.toUpperCase()!=='BODY','render(): Rendering components directly into document.body is '+'discouraged, since its children are often manipulated by third-party '+'scripts and browser extensions. This may lead to subtle '+'reconciliation issues. Try rendering into a container element created '+'for your app.'):undefined;var nextWrappedElement=new ReactElement(TopLevelWrapper,null,null,null,null,null,nextElement);var prevComponent=instancesByReactRootID[getReactRootID(container)];if(prevComponent){var prevWrappedElement=prevComponent._currentElement;var prevElement=prevWrappedElement.props;if(shouldUpdateReactComponent(prevElement,nextElement)){var publicInst=prevComponent._renderedComponent.getPublicInstance();var updatedCallback=callback&&function(){callback.call(publicInst);};ReactMount._updateRootComponent(prevComponent,nextWrappedElement,container,updatedCallback);return publicInst;}else {ReactMount.unmountComponentAtNode(container);}}var reactRootElement=getReactRootElementInContainer(container);var containerHasReactMarkup=reactRootElement&&!!internalGetID(reactRootElement);var containerHasNonRootReactChild=hasNonRootReactChild(container);if("development"!=='production'){"development"!=='production'?warning(!containerHasNonRootReactChild,'render(...): Replacing React-rendered children with a new root '+'component. If you intended to update the children of this node, '+'you should instead have the existing children update their state '+'and render the new components instead of calling ReactDOM.render.'):undefined;if(!containerHasReactMarkup||reactRootElement.nextSibling){var rootElementSibling=reactRootElement;while(rootElementSibling){if(internalGetID(rootElementSibling)){"development"!=='production'?warning(false,'render(): Target node has markup rendered by React, but there '+'are unrelated nodes as well. This is most commonly caused by '+'white-space inserted around server-rendered markup.'):undefined;break;}rootElementSibling=rootElementSibling.nextSibling;}}}var shouldReuseMarkup=containerHasReactMarkup&&!prevComponent&&!containerHasNonRootReactChild;var component=ReactMount._renderNewRootComponent(nextWrappedElement,container,shouldReuseMarkup,parentComponent!=null?parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context):emptyObject)._renderedComponent.getPublicInstance();if(callback){callback.call(component);}return component;}, /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */render:function(nextElement,container,callback){return ReactMount._renderSubtreeIntoContainer(null,nextElement,container,callback);}, /**
   * Registers a container node into which React components will be rendered.
   * This also creates the "reactRoot" ID that will be assigned to the element
   * rendered within.
   *
   * @param {DOMElement} container DOM element to register as a container.
   * @return {string} The "reactRoot" ID of elements rendered within.
   */registerContainer:function(container){var reactRootID=getReactRootID(container);if(reactRootID){ // If one exists, make sure it is a valid "reactRoot" ID.
reactRootID=ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);}if(!reactRootID){ // No valid "reactRoot" ID found, create one.
reactRootID=ReactInstanceHandles.createReactRootID();}containersByReactRootID[reactRootID]=container;return reactRootID;}, /**
   * Unmounts and destroys the React component rendered in the `container`.
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */unmountComponentAtNode:function(container){ // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (Strictly speaking, unmounting won't cause a
// render but we still don't expect to be in a render call here.)
"development"!=='production'?warning(ReactCurrentOwner.current==null,'unmountComponentAtNode(): Render methods should be a pure function '+'of props and state; triggering nested component updates from render '+'is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):undefined;!(container&&(container.nodeType===ELEMENT_NODE_TYPE||container.nodeType===DOC_NODE_TYPE||container.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE))?"development"!=='production'?invariant(false,'unmountComponentAtNode(...): Target container is not a DOM element.'):invariant(false):undefined;var reactRootID=getReactRootID(container);var component=instancesByReactRootID[reactRootID];if(!component){ // Check if the node being unmounted was rendered by React, but isn't a
// root node.
var containerHasNonRootReactChild=hasNonRootReactChild(container); // Check if the container itself is a React root node.
var containerID=internalGetID(container);var isContainerReactRoot=containerID&&containerID===ReactInstanceHandles.getReactRootIDFromNodeID(containerID);if("development"!=='production'){"development"!=='production'?warning(!containerHasNonRootReactChild,'unmountComponentAtNode(): The node you\'re attempting to unmount '+'was rendered by React and is not a top-level container. %s',isContainerReactRoot?'You may have accidentally passed in a React root node instead '+'of its container.':'Instead, have the parent component update its state and '+'rerender in order to remove this component.'):undefined;}return false;}ReactUpdates.batchedUpdates(unmountComponentFromNode,component,container);delete instancesByReactRootID[reactRootID];delete containersByReactRootID[reactRootID];if("development"!=='production'){delete rootElementsByReactRootID[reactRootID];}return true;}, /**
   * Finds the container DOM element that contains React component to which the
   * supplied DOM `id` belongs.
   *
   * @param {string} id The ID of an element rendered by a React component.
   * @return {?DOMElement} DOM element that contains the `id`.
   */findReactContainerForID:function(id){var reactRootID=ReactInstanceHandles.getReactRootIDFromNodeID(id);var container=containersByReactRootID[reactRootID];if("development"!=='production'){var rootElement=rootElementsByReactRootID[reactRootID];if(rootElement&&rootElement.parentNode!==container){"development"!=='production'?warning( // Call internalGetID here because getID calls isValid which calls
// findReactContainerForID (this function).
internalGetID(rootElement)===reactRootID,'ReactMount: Root element ID differed from reactRootID.'):undefined;var containerChild=container.firstChild;if(containerChild&&reactRootID===internalGetID(containerChild)){ // If the container has a new child with the same ID as the old
// root element, then rootElementsByReactRootID[reactRootID] is
// just stale and needs to be updated. The case that deserves a
// warning is when the container is empty.
rootElementsByReactRootID[reactRootID]=containerChild;}else {"development"!=='production'?warning(false,'ReactMount: Root element has been removed from its original '+'container. New container: %s',rootElement.parentNode):undefined;}}}return container;}, /**
   * Finds an element rendered by React with the supplied ID.
   *
   * @param {string} id ID of a DOM node in the React component.
   * @return {DOMElement} Root DOM node of the React component.
   */findReactNodeByID:function(id){var reactRoot=ReactMount.findReactContainerForID(id);return ReactMount.findComponentRoot(reactRoot,id);}, /**
   * Traverses up the ancestors of the supplied node to find a node that is a
   * DOM representation of a React component rendered by this copy of React.
   *
   * @param {*} node
   * @return {?DOMEventTarget}
   * @internal
   */getFirstReactDOM:function(node){return findFirstReactDOMImpl(node);}, /**
   * Finds a node with the supplied `targetID` inside of the supplied
   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
   * quickly.
   *
   * @param {DOMEventTarget} ancestorNode Search from this root.
   * @pararm {string} targetID ID of the DOM representation of the component.
   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
   * @internal
   */findComponentRoot:function(ancestorNode,targetID){var firstChildren=findComponentRootReusableArray;var childIndex=0;var deepestAncestor=findDeepestCachedAncestor(targetID)||ancestorNode;if("development"!=='production'){ // This will throw on the next line; give an early warning
"development"!=='production'?warning(deepestAncestor!=null,'React can\'t find the root component node for data-reactid value '+'`%s`. If you\'re seeing this message, it probably means that '+'you\'ve loaded two copies of React on the page. At this time, only '+'a single copy of React can be loaded at a time.',targetID):undefined;}firstChildren[0]=deepestAncestor.firstChild;firstChildren.length=1;while(childIndex<firstChildren.length){var child=firstChildren[childIndex++];var targetChild;while(child){var childID=ReactMount.getID(child);if(childID){ // Even if we find the node we're looking for, we finish looping
// through its siblings to ensure they're cached so that we don't have
// to revisit this node again. Otherwise, we make n^2 calls to getID
// when visiting the many children of a single node in order.
if(targetID===childID){targetChild=child;}else if(ReactInstanceHandles.isAncestorIDOf(childID,targetID)){ // If we find a child whose ID is an ancestor of the given ID,
// then we can be sure that we only want to search the subtree
// rooted at this child, so we can throw out the rest of the
// search state.
firstChildren.length=childIndex=0;firstChildren.push(child.firstChild);}}else { // If this child had no ID, then there's a chance that it was
// injected automatically by the browser, as when a `<table>`
// element sprouts an extra `<tbody>` child as a side effect of
// `.innerHTML` parsing. Optimistically continue down this
// branch, but not before examining the other siblings.
firstChildren.push(child.firstChild);}child=child.nextSibling;}if(targetChild){ // Emptying firstChildren/findComponentRootReusableArray is
// not necessary for correctness, but it helps the GC reclaim
// any nodes that were left at the end of the search.
firstChildren.length=0;return targetChild;}}firstChildren.length=0;!false?"development"!=='production'?invariant(false,'findComponentRoot(..., %s): Unable to find element. This probably '+'means the DOM was unexpectedly mutated (e.g., by the browser), '+'usually due to forgetting a <tbody> when using tables, nesting tags '+'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> '+'parent. '+'Try inspecting the child nodes of the element with React ID `%s`.',targetID,ReactMount.getID(ancestorNode)):invariant(false):undefined;},_mountImageIntoNode:function(markup,container,shouldReuseMarkup,transaction){!(container&&(container.nodeType===ELEMENT_NODE_TYPE||container.nodeType===DOC_NODE_TYPE||container.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE))?"development"!=='production'?invariant(false,'mountComponentIntoNode(...): Target container is not valid.'):invariant(false):undefined;if(shouldReuseMarkup){var rootElement=getReactRootElementInContainer(container);if(ReactMarkupChecksum.canReuseMarkup(markup,rootElement)){return;}else {var checksum=rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);var rootMarkup=rootElement.outerHTML;rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME,checksum);var normalizedMarkup=markup;if("development"!=='production'){ // because rootMarkup is retrieved from the DOM, various normalizations
// will have occurred which will not be present in `markup`. Here,
// insert markup into a <div> or <iframe> depending on the container
// type to perform the same normalizations before comparing.
var normalizer;if(container.nodeType===ELEMENT_NODE_TYPE){normalizer=document.createElement('div');normalizer.innerHTML=markup;normalizedMarkup=normalizer.innerHTML;}else {normalizer=document.createElement('iframe');document.body.appendChild(normalizer);normalizer.contentDocument.write(markup);normalizedMarkup=normalizer.contentDocument.documentElement.outerHTML;document.body.removeChild(normalizer);}}var diffIndex=firstDifferenceIndex(normalizedMarkup,rootMarkup);var difference=' (client) '+normalizedMarkup.substring(diffIndex-20,diffIndex+20)+'\n (server) '+rootMarkup.substring(diffIndex-20,diffIndex+20);!(container.nodeType!==DOC_NODE_TYPE)?"development"!=='production'?invariant(false,'You\'re trying to render a component to the document using '+'server rendering but the checksum was invalid. This usually '+'means you rendered a different component type or props on '+'the client from the one on the server, or your render() '+'methods are impure. React cannot handle this case due to '+'cross-browser quirks by rendering at the document root. You '+'should look for environment dependent code in your components '+'and ensure the props are the same client and server side:\n%s',difference):invariant(false):undefined;if("development"!=='production'){"development"!=='production'?warning(false,'React attempted to reuse markup in a container but the '+'checksum was invalid. This generally means that you are '+'using server rendering and the markup generated on the '+'server was not what the client was expecting. React injected '+'new markup to compensate which works but you have lost many '+'of the benefits of server rendering. Instead, figure out '+'why the markup being generated is different on the client '+'or server:\n%s',difference):undefined;}}}!(container.nodeType!==DOC_NODE_TYPE)?"development"!=='production'?invariant(false,'You\'re trying to render a component to the document but '+'you didn\'t use server rendering. We can\'t do this '+'without using server rendering due to cross-browser quirks. '+'See ReactDOMServer.renderToString() for server rendering.'):invariant(false):undefined;if(transaction.useCreateElement){while(container.lastChild){container.removeChild(container.lastChild);}container.appendChild(markup);}else {setInnerHTML(container,markup);}},ownerDocumentContextKey:ownerDocumentContextKey, /**
   * React ID utilities.
   */getReactRootID:getReactRootID,getID:getID,setID:setID,getNode:getNode,getNodeFromInstance:getNodeFromInstance,isValid:isValid,purgeID:purgeID};ReactPerf.measureMethods(ReactMount,'ReactMount',{_renderNewRootComponent:'_renderNewRootComponent',_mountImageIntoNode:'_mountImageIntoNode'});module.exports=ReactMount;},{"10":10,"118":118,"124":124,"126":126,"128":128,"133":133,"137":137,"144":144,"155":155,"23":23,"26":26,"34":34,"39":39,"52":52,"55":55,"61":61,"62":62,"64":64,"71":71,"76":76,"82":82,"83":83}],66:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 * @typechecks static-only
 */'use strict';var ReactComponentEnvironment=_dereq_(32);var ReactMultiChildUpdateTypes=_dereq_(67);var ReactCurrentOwner=_dereq_(34);var ReactReconciler=_dereq_(76);var ReactChildReconciler=_dereq_(27);var flattenChildren=_dereq_(109); /**
 * Updating children of a component may trigger recursive updates. The depth is
 * used to batch recursive updates to render markup more efficiently.
 *
 * @type {number}
 * @private
 */var updateDepth=0; /**
 * Queue of update configuration objects.
 *
 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
 *
 * @type {array<object>}
 * @private
 */var updateQueue=[]; /**
 * Queue of markup to be rendered.
 *
 * @type {array<string>}
 * @private
 */var markupQueue=[]; /**
 * Enqueues markup to be rendered and inserted at a supplied index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */function enqueueInsertMarkup(parentID,markup,toIndex){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.INSERT_MARKUP,markupIndex:markupQueue.push(markup)-1,content:null,fromIndex:null,toIndex:toIndex});} /**
 * Enqueues moving an existing element to another index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */function enqueueMove(parentID,fromIndex,toIndex){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.MOVE_EXISTING,markupIndex:null,content:null,fromIndex:fromIndex,toIndex:toIndex});} /**
 * Enqueues removing an element at an index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */function enqueueRemove(parentID,fromIndex){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.REMOVE_NODE,markupIndex:null,content:null,fromIndex:fromIndex,toIndex:null});} /**
 * Enqueues setting the markup of a node.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @private
 */function enqueueSetMarkup(parentID,markup){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.SET_MARKUP,markupIndex:null,content:markup,fromIndex:null,toIndex:null});} /**
 * Enqueues setting the text content.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} textContent Text content to set.
 * @private
 */function enqueueTextContent(parentID,textContent){ // NOTE: Null values reduce hidden classes.
updateQueue.push({parentID:parentID,parentNode:null,type:ReactMultiChildUpdateTypes.TEXT_CONTENT,markupIndex:null,content:textContent,fromIndex:null,toIndex:null});} /**
 * Processes any enqueued updates.
 *
 * @private
 */function processQueue(){if(updateQueue.length){ReactComponentEnvironment.processChildrenUpdates(updateQueue,markupQueue);clearQueue();}} /**
 * Clears any enqueued updates.
 *
 * @private
 */function clearQueue(){updateQueue.length=0;markupQueue.length=0;} /**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */var ReactMultiChild={ /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */Mixin:{_reconcilerInstantiateChildren:function(nestedChildren,transaction,context){if("development"!=='production'){if(this._currentElement){try{ReactCurrentOwner.current=this._currentElement._owner;return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context);}finally {ReactCurrentOwner.current=null;}}}return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context);},_reconcilerUpdateChildren:function(prevChildren,nextNestedChildrenElements,transaction,context){var nextChildren;if("development"!=='production'){if(this._currentElement){try{ReactCurrentOwner.current=this._currentElement._owner;nextChildren=flattenChildren(nextNestedChildrenElements);}finally {ReactCurrentOwner.current=null;}return ReactChildReconciler.updateChildren(prevChildren,nextChildren,transaction,context);}}nextChildren=flattenChildren(nextNestedChildrenElements);return ReactChildReconciler.updateChildren(prevChildren,nextChildren,transaction,context);}, /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */mountChildren:function(nestedChildren,transaction,context){var children=this._reconcilerInstantiateChildren(nestedChildren,transaction,context);this._renderedChildren=children;var mountImages=[];var index=0;for(var name in children){if(children.hasOwnProperty(name)){var child=children[name]; // Inlined for performance, see `ReactInstanceHandles.createReactID`.
var rootID=this._rootNodeID+name;var mountImage=ReactReconciler.mountComponent(child,rootID,transaction,context);child._mountIndex=index++;mountImages.push(mountImage);}}return mountImages;}, /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */updateTextContent:function(nextContent){updateDepth++;var errorThrown=true;try{var prevChildren=this._renderedChildren; // Remove any rendered children.
ReactChildReconciler.unmountChildren(prevChildren); // TODO: The setTextContent operation should be enough
for(var name in prevChildren){if(prevChildren.hasOwnProperty(name)){this._unmountChild(prevChildren[name]);}} // Set new text content.
this.setTextContent(nextContent);errorThrown=false;}finally {updateDepth--;if(!updateDepth){if(errorThrown){clearQueue();}else {processQueue();}}}}, /**
     * Replaces any rendered children with a markup string.
     *
     * @param {string} nextMarkup String of markup.
     * @internal
     */updateMarkup:function(nextMarkup){updateDepth++;var errorThrown=true;try{var prevChildren=this._renderedChildren; // Remove any rendered children.
ReactChildReconciler.unmountChildren(prevChildren);for(var name in prevChildren){if(prevChildren.hasOwnProperty(name)){this._unmountChildByName(prevChildren[name],name);}}this.setMarkup(nextMarkup);errorThrown=false;}finally {updateDepth--;if(!updateDepth){if(errorThrown){clearQueue();}else {processQueue();}}}}, /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */updateChildren:function(nextNestedChildrenElements,transaction,context){updateDepth++;var errorThrown=true;try{this._updateChildren(nextNestedChildrenElements,transaction,context);errorThrown=false;}finally {updateDepth--;if(!updateDepth){if(errorThrown){clearQueue();}else {processQueue();}}}}, /**
     * Improve performance by isolating this hot code path from the try/catch
     * block in `updateChildren`.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */_updateChildren:function(nextNestedChildrenElements,transaction,context){var prevChildren=this._renderedChildren;var nextChildren=this._reconcilerUpdateChildren(prevChildren,nextNestedChildrenElements,transaction,context);this._renderedChildren=nextChildren;if(!nextChildren&&!prevChildren){return;}var name; // `nextIndex` will increment for each child in `nextChildren`, but
// `lastIndex` will be the last index visited in `prevChildren`.
var lastIndex=0;var nextIndex=0;for(name in nextChildren){if(!nextChildren.hasOwnProperty(name)){continue;}var prevChild=prevChildren&&prevChildren[name];var nextChild=nextChildren[name];if(prevChild===nextChild){this.moveChild(prevChild,nextIndex,lastIndex);lastIndex=Math.max(prevChild._mountIndex,lastIndex);prevChild._mountIndex=nextIndex;}else {if(prevChild){ // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
lastIndex=Math.max(prevChild._mountIndex,lastIndex);this._unmountChild(prevChild);} // The child must be instantiated before it's mounted.
this._mountChildByNameAtIndex(nextChild,name,nextIndex,transaction,context);}nextIndex++;} // Remove children that are no longer present.
for(name in prevChildren){if(prevChildren.hasOwnProperty(name)&&!(nextChildren&&nextChildren.hasOwnProperty(name))){this._unmountChild(prevChildren[name]);}}}, /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted.
     *
     * @internal
     */unmountChildren:function(){var renderedChildren=this._renderedChildren;ReactChildReconciler.unmountChildren(renderedChildren);this._renderedChildren=null;}, /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */moveChild:function(child,toIndex,lastIndex){ // If the index of `child` is less than `lastIndex`, then it needs to
// be moved. Otherwise, we do not need to move it because a child will be
// inserted or moved before `child`.
if(child._mountIndex<lastIndex){enqueueMove(this._rootNodeID,child._mountIndex,toIndex);}}, /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */createChild:function(child,mountImage){enqueueInsertMarkup(this._rootNodeID,mountImage,child._mountIndex);}, /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */removeChild:function(child){enqueueRemove(this._rootNodeID,child._mountIndex);}, /**
     * Sets this text content string.
     *
     * @param {string} textContent Text content to set.
     * @protected
     */setTextContent:function(textContent){enqueueTextContent(this._rootNodeID,textContent);}, /**
     * Sets this markup string.
     *
     * @param {string} markup Markup to set.
     * @protected
     */setMarkup:function(markup){enqueueSetMarkup(this._rootNodeID,markup);}, /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */_mountChildByNameAtIndex:function(child,name,index,transaction,context){ // Inlined for performance, see `ReactInstanceHandles.createReactID`.
var rootID=this._rootNodeID+name;var mountImage=ReactReconciler.mountComponent(child,rootID,transaction,context);child._mountIndex=index;this.createChild(child,mountImage);}, /**
     * Unmounts a rendered child.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @private
     */_unmountChild:function(child){this.removeChild(child);child._mountIndex=null;}}};module.exports=ReactMultiChild;},{"109":109,"27":27,"32":32,"34":34,"67":67,"76":76}],67:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */'use strict';var keyMirror=_dereq_(147); /**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */var ReactMultiChildUpdateTypes=keyMirror({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,SET_MARKUP:null,TEXT_CONTENT:null});module.exports=ReactMultiChildUpdateTypes;},{"147":147}],68:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNativeComponent
 */'use strict';var assign=_dereq_(23);var invariant=_dereq_(144);var autoGenerateWrapperClass=null;var genericComponentClass=null; // This registry keeps track of wrapper classes around native tags.
var tagToComponentClass={};var textComponentClass=null;var ReactNativeComponentInjection={ // This accepts a class that receives the tag string. This is a catch all
// that can render any kind of tag.
injectGenericComponentClass:function(componentClass){genericComponentClass=componentClass;}, // This accepts a text component class that takes the text string to be
// rendered as props.
injectTextComponentClass:function(componentClass){textComponentClass=componentClass;}, // This accepts a keyed object with classes as values. Each key represents a
// tag. That particular tag will use this class instead of the generic one.
injectComponentClasses:function(componentClasses){assign(tagToComponentClass,componentClasses);}}; /**
 * Get a composite component wrapper class for a specific tag.
 *
 * @param {ReactElement} element The tag for which to get the class.
 * @return {function} The React class constructor function.
 */function getComponentClassForElement(element){if(typeof element.type==='function'){return element.type;}var tag=element.type;var componentClass=tagToComponentClass[tag];if(componentClass==null){tagToComponentClass[tag]=componentClass=autoGenerateWrapperClass(tag);}return componentClass;} /**
 * Get a native internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */function createInternalComponent(element){!genericComponentClass?"development"!=='production'?invariant(false,'There is no registered component for the tag %s',element.type):invariant(false):undefined;return new genericComponentClass(element.type,element.props);} /**
 * @param {ReactText} text
 * @return {ReactComponent}
 */function createInstanceForText(text){return new textComponentClass(text);} /**
 * @param {ReactComponent} component
 * @return {boolean}
 */function isTextComponent(component){return component instanceof textComponentClass;}var ReactNativeComponent={getComponentClassForElement:getComponentClassForElement,createInternalComponent:createInternalComponent,createInstanceForText:createInstanceForText,isTextComponent:isTextComponent,injection:ReactNativeComponentInjection};module.exports=ReactNativeComponent;},{"144":144,"23":23}],69:[function(_dereq_,module,exports){ /**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNoopUpdateQueue
 */'use strict';var warning=_dereq_(155);function warnTDZ(publicInstance,callerName){if("development"!=='production'){"development"!=='production'?warning(false,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,publicInstance.constructor&&publicInstance.constructor.displayName||''):undefined;}} /**
 * This is the abstract API for an update queue.
 */var ReactNoopUpdateQueue={ /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function(publicInstance){return false;}, /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */enqueueCallback:function(publicInstance,callback){}, /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */enqueueForceUpdate:function(publicInstance){warnTDZ(publicInstance,'forceUpdate');}, /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */enqueueReplaceState:function(publicInstance,completeState){warnTDZ(publicInstance,'replaceState');}, /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */enqueueSetState:function(publicInstance,partialState){warnTDZ(publicInstance,'setState');}, /**
   * Sets a subset of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialProps Subset of the next props.
   * @internal
   */enqueueSetProps:function(publicInstance,partialProps){warnTDZ(publicInstance,'setProps');}, /**
   * Replaces all of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} props New props.
   * @internal
   */enqueueReplaceProps:function(publicInstance,props){warnTDZ(publicInstance,'replaceProps');}};module.exports=ReactNoopUpdateQueue;},{"155":155}],70:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */'use strict';var invariant=_dereq_(144); /**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */var ReactOwner={ /**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */isValidOwner:function(object){return !!(object&&typeof object.attachRef==='function'&&typeof object.detachRef==='function');}, /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */addComponentAsRefTo:function(component,ref,owner){!ReactOwner.isValidOwner(owner)?"development"!=='production'?invariant(false,'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might '+'be adding a ref to a component that was not created inside a component\'s '+'`render` method, or you have multiple copies of React loaded '+'(details: https://fb.me/react-refs-must-have-owner).'):invariant(false):undefined;owner.attachRef(ref,component);}, /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */removeComponentAsRefFrom:function(component,ref,owner){!ReactOwner.isValidOwner(owner)?"development"!=='production'?invariant(false,'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might '+'be removing a ref to a component that was not created inside a component\'s '+'`render` method, or you have multiple copies of React loaded '+'(details: https://fb.me/react-refs-must-have-owner).'):invariant(false):undefined; // Check that `component` is still the current ref because we do not want to
// detach the ref if another component stole it.
if(owner.getPublicInstance().refs[ref]===component.getPublicInstance()){owner.detachRef(ref);}}};module.exports=ReactOwner;},{"144":144}],71:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPerf
 * @typechecks static-only
 */'use strict'; /**
 * ReactPerf is a general AOP system designed to measure performance. This
 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
 */var ReactPerf={ /**
   * Boolean to enable/disable measurement. Set to false by default to prevent
   * accidental logging and perf loss.
   */enableMeasure:false, /**
   * Holds onto the measure function in use. By default, don't measure
   * anything, but we'll override this if we inject a measure function.
   */storedMeasure:_noMeasure, /**
   * @param {object} object
   * @param {string} objectName
   * @param {object<string>} methodNames
   */measureMethods:function(object,objectName,methodNames){if("development"!=='production'){for(var key in methodNames){if(!methodNames.hasOwnProperty(key)){continue;}object[key]=ReactPerf.measure(objectName,methodNames[key],object[key]);}}}, /**
   * Use this to wrap methods you want to measure. Zero overhead in production.
   *
   * @param {string} objName
   * @param {string} fnName
   * @param {function} func
   * @return {function}
   */measure:function(objName,fnName,func){if("development"!=='production'){var measuredFunc=null;var wrapper=function(){if(ReactPerf.enableMeasure){if(!measuredFunc){measuredFunc=ReactPerf.storedMeasure(objName,fnName,func);}return measuredFunc.apply(this,arguments);}return func.apply(this,arguments);};wrapper.displayName=objName+'_'+fnName;return wrapper;}return func;},injection:{ /**
     * @param {function} measure
     */injectMeasure:function(measure){ReactPerf.storedMeasure=measure;}}}; /**
 * Simply passes through the measured function, without measuring it.
 *
 * @param {string} objName
 * @param {string} fnName
 * @param {function} func
 * @return {function}
 */function _noMeasure(objName,fnName,func){return func;}module.exports=ReactPerf;},{}],72:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */'use strict';var ReactPropTypeLocationNames={};if("development"!=='production'){ReactPropTypeLocationNames={prop:'prop',context:'context',childContext:'child context'};}module.exports=ReactPropTypeLocationNames;},{}],73:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */'use strict';var keyMirror=_dereq_(147);var ReactPropTypeLocations=keyMirror({prop:null,context:null,childContext:null});module.exports=ReactPropTypeLocations;},{"147":147}],74:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */'use strict';var ReactElement=_dereq_(52);var ReactPropTypeLocationNames=_dereq_(72);var emptyFunction=_dereq_(136);var getIteratorFn=_dereq_(115); /**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker};function createChainableTypeChecker(validate){function checkType(isRequired,props,propName,componentName,location,propFullName){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(props[propName]==null){var locationName=ReactPropTypeLocationNames[location];if(isRequired){return new Error('Required '+locationName+' `'+propFullName+'` was not specified in '+('`'+componentName+'`.'));}return null;}else {return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var locationName=ReactPropTypeLocationNames[location]; // `propValue` being instance of, say, date/regexp, pass the 'object'
// check, but we can offer a more precise error message here rather than
// 'of type `object`'.
var preciseType=getPreciseType(propValue);return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunction.thatReturns(null));}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!Array.isArray(propValue)){var locationName=ReactPropTypeLocationNames[location];var propType=getPropType(propValue);return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']');if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){if(!ReactElement.isValidElement(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName] instanceof expectedClass)){var locationName=ReactPropTypeLocationNames[location];var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){return createChainableTypeChecker(function(){return new Error('Invalid argument supplied to oneOf, expected an instance of array.');});}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(propValue===expectedValues[i]){return null;}}var locationName=ReactPropTypeLocationNames[location];var valuesString=JSON.stringify(expectedValues);return new Error('Invalid '+locationName+' `'+propFullName+'` of value `'+propValue+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(propValue.hasOwnProperty(key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){return createChainableTypeChecker(function(){return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');});}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName)==null){return null;}}var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue){case 'number':case 'string':case 'undefined':return true;case 'boolean':return !propValue;case 'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||ReactElement.isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else { // Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else {return false;}return true;default:return false;}} // Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return 'array';}if(propValue instanceof RegExp){ // Old webkits (at least until Android 4.0) return 'function' rather than
// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
// passes PropTypes.object.
return 'object';}return propType;} // This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue){var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return 'date';}else if(propValue instanceof RegExp){return 'regexp';}}return propType;} // Returns class name of the object, if any.
function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return '<<anonymous>>';}return propValue.constructor.name;}module.exports=ReactPropTypes;},{"115":115,"136":136,"52":52,"72":72}],75:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 * @typechecks static-only
 */'use strict';var CallbackQueue=_dereq_(6);var PooledClass=_dereq_(24);var ReactBrowserEventEmitter=_dereq_(26);var ReactDOMFeatureFlags=_dereq_(39);var ReactInputSelection=_dereq_(60);var Transaction=_dereq_(100);var assign=_dereq_(23); /**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */var SELECTION_RESTORATION={ /**
   * @return {Selection} Selection information.
   */initialize:ReactInputSelection.getSelectionInformation, /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */close:ReactInputSelection.restoreSelection}; /**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */var EVENT_SUPPRESSION={ /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */initialize:function(){var currentlyEnabled=ReactBrowserEventEmitter.isEnabled();ReactBrowserEventEmitter.setEnabled(false);return currentlyEnabled;}, /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
   *   restores the previous value.
   */close:function(previouslyEnabled){ReactBrowserEventEmitter.setEnabled(previouslyEnabled);}}; /**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the the transaction.
 */var ON_DOM_READY_QUEUEING={ /**
   * Initializes the internal `onDOMReady` queue.
   */initialize:function(){this.reactMountReady.reset();}, /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */close:function(){this.reactMountReady.notifyAll();}}; /**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */var TRANSACTION_WRAPPERS=[SELECTION_RESTORATION,EVENT_SUPPRESSION,ON_DOM_READY_QUEUEING]; /**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */function ReactReconcileTransaction(forceHTML){this.reinitializeTransaction(); // Only server-side rendering really needs this option (see
// `ReactServerRendering`), but server-side uses
// `ReactServerRenderingTransaction` instead. This option is here so that it's
// accessible and defaults to false when `ReactDOMComponent` and
// `ReactTextComponent` checks it in `mountComponent`.`
this.renderToStaticMarkup=false;this.reactMountReady=CallbackQueue.getPooled(null);this.useCreateElement=!forceHTML&&ReactDOMFeatureFlags.useCreateElement;}var Mixin={ /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   *   TODO: convert to array<TransactionWrapper>
   */getTransactionWrappers:function(){return TRANSACTION_WRAPPERS;}, /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */getReactMountReady:function(){return this.reactMountReady;}, /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */destructor:function(){CallbackQueue.release(this.reactMountReady);this.reactMountReady=null;}};assign(ReactReconcileTransaction.prototype,Transaction.Mixin,Mixin);PooledClass.addPoolingTo(ReactReconcileTransaction);module.exports=ReactReconcileTransaction;},{"100":100,"23":23,"24":24,"26":26,"39":39,"6":6,"60":60}],76:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconciler
 */'use strict';var ReactRef=_dereq_(77); /**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */function attachRefs(){ReactRef.attachRefs(this,this._currentElement);}var ReactReconciler={ /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactComponent} internalInstance
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function(internalInstance,rootID,transaction,context){var markup=internalInstance.mountComponent(rootID,transaction,context);if(internalInstance._currentElement&&internalInstance._currentElement.ref!=null){transaction.getReactMountReady().enqueue(attachRefs,internalInstance);}return markup;}, /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function(internalInstance){ReactRef.detachRefs(internalInstance,internalInstance._currentElement);internalInstance.unmountComponent();}, /**
   * Update a component using a new element.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */receiveComponent:function(internalInstance,nextElement,transaction,context){var prevElement=internalInstance._currentElement;if(nextElement===prevElement&&context===internalInstance._context){ // Since elements are immutable after the owner is rendered,
// we can do a cheap identity compare here to determine if this is a
// superfluous reconcile. It's possible for state to be mutable but such
// change should trigger an update of the owner which would recreate
// the element. We explicitly check for the existence of an owner since
// it's possible for an element created outside a composite to be
// deeply mutated and reused.
// TODO: Bailing out early is just a perf optimization right?
// TODO: Removing the return statement should affect correctness?
return;}var refsChanged=ReactRef.shouldUpdateRefs(prevElement,nextElement);if(refsChanged){ReactRef.detachRefs(internalInstance,prevElement);}internalInstance.receiveComponent(nextElement,transaction,context);if(refsChanged&&internalInstance._currentElement&&internalInstance._currentElement.ref!=null){transaction.getReactMountReady().enqueue(attachRefs,internalInstance);}}, /**
   * Flush any dirty changes in a component.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function(internalInstance,transaction){internalInstance.performUpdateIfNecessary(transaction);}};module.exports=ReactReconciler;},{"77":77}],77:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRef
 */'use strict';var ReactOwner=_dereq_(70);var ReactRef={};function attachRef(ref,component,owner){if(typeof ref==='function'){ref(component.getPublicInstance());}else { // Legacy ref
ReactOwner.addComponentAsRefTo(component,ref,owner);}}function detachRef(ref,component,owner){if(typeof ref==='function'){ref(null);}else { // Legacy ref
ReactOwner.removeComponentAsRefFrom(component,ref,owner);}}ReactRef.attachRefs=function(instance,element){if(element===null||element===false){return;}var ref=element.ref;if(ref!=null){attachRef(ref,instance,element._owner);}};ReactRef.shouldUpdateRefs=function(prevElement,nextElement){ // If either the owner or a `ref` has changed, make sure the newest owner
// has stored a reference to `this`, and the previous owner (if different)
// has forgotten the reference to `this`. We use the element instead
// of the public this.props because the post processing cannot determine
// a ref. The ref conceptually lives on the element.
// TODO: Should this even be possible? The owner cannot change because
// it's forbidden by shouldUpdateReactComponent. The ref can change
// if you swap the keys of but not the refs. Reconsider where this check
// is made. It probably belongs where the key checking and
// instantiateReactComponent is done.
var prevEmpty=prevElement===null||prevElement===false;var nextEmpty=nextElement===null||nextElement===false;return  (// This has a few false positives w/r/t empty components.
prevEmpty||nextEmpty||nextElement._owner!==prevElement._owner||nextElement.ref!==prevElement.ref);};ReactRef.detachRefs=function(instance,element){if(element===null||element===false){return;}var ref=element.ref;if(ref!=null){detachRef(ref,instance,element._owner);}};module.exports=ReactRef;},{"70":70}],78:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRootIndex
 * @typechecks
 */'use strict';var ReactRootIndexInjection={ /**
   * @param {function} _createReactRootIndex
   */injectCreateReactRootIndex:function(_createReactRootIndex){ReactRootIndex.createReactRootIndex=_createReactRootIndex;}};var ReactRootIndex={createReactRootIndex:null,injection:ReactRootIndexInjection};module.exports=ReactRootIndex;},{}],79:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerBatchingStrategy
 * @typechecks
 */'use strict';var ReactServerBatchingStrategy={isBatchingUpdates:false,batchedUpdates:function(callback){ // Don't do anything here. During the server rendering we don't want to
// schedule any updates. We will simply ignore them.
}};module.exports=ReactServerBatchingStrategy;},{}],80:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule ReactServerRendering
 */'use strict';var ReactDefaultBatchingStrategy=_dereq_(48);var ReactElement=_dereq_(52);var ReactInstanceHandles=_dereq_(61);var ReactMarkupChecksum=_dereq_(64);var ReactServerBatchingStrategy=_dereq_(79);var ReactServerRenderingTransaction=_dereq_(81);var ReactUpdates=_dereq_(83);var emptyObject=_dereq_(137);var instantiateReactComponent=_dereq_(118);var invariant=_dereq_(144); /**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */function renderToString(element){!ReactElement.isValidElement(element)?"development"!=='production'?invariant(false,'renderToString(): You must pass a valid ReactElement.'):invariant(false):undefined;var transaction;try{ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);var id=ReactInstanceHandles.createReactRootID();transaction=ReactServerRenderingTransaction.getPooled(false);return transaction.perform(function(){var componentInstance=instantiateReactComponent(element,null);var markup=componentInstance.mountComponent(id,transaction,emptyObject);return ReactMarkupChecksum.addChecksumToMarkup(markup);},null);}finally {ReactServerRenderingTransaction.release(transaction); // Revert to the DOM batching strategy since these two renderers
// currently share these stateful modules.
ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);}} /**
 * @param {ReactElement} element
 * @return {string} the HTML markup, without the extra React ID and checksum
 * (for generating static pages)
 */function renderToStaticMarkup(element){!ReactElement.isValidElement(element)?"development"!=='production'?invariant(false,'renderToStaticMarkup(): You must pass a valid ReactElement.'):invariant(false):undefined;var transaction;try{ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);var id=ReactInstanceHandles.createReactRootID();transaction=ReactServerRenderingTransaction.getPooled(true);return transaction.perform(function(){var componentInstance=instantiateReactComponent(element,null);return componentInstance.mountComponent(id,transaction,emptyObject);},null);}finally {ReactServerRenderingTransaction.release(transaction); // Revert to the DOM batching strategy since these two renderers
// currently share these stateful modules.
ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);}}module.exports={renderToString:renderToString,renderToStaticMarkup:renderToStaticMarkup};},{"118":118,"137":137,"144":144,"48":48,"52":52,"61":61,"64":64,"79":79,"81":81,"83":83}],81:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 * @typechecks
 */'use strict';var PooledClass=_dereq_(24);var CallbackQueue=_dereq_(6);var Transaction=_dereq_(100);var assign=_dereq_(23);var emptyFunction=_dereq_(136); /**
 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
 * during the performing of the transaction.
 */var ON_DOM_READY_QUEUEING={ /**
   * Initializes the internal `onDOMReady` queue.
   */initialize:function(){this.reactMountReady.reset();},close:emptyFunction}; /**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */var TRANSACTION_WRAPPERS=[ON_DOM_READY_QUEUEING]; /**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */function ReactServerRenderingTransaction(renderToStaticMarkup){this.reinitializeTransaction();this.renderToStaticMarkup=renderToStaticMarkup;this.reactMountReady=CallbackQueue.getPooled(null);this.useCreateElement=false;}var Mixin={ /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap procedures.
   */getTransactionWrappers:function(){return TRANSACTION_WRAPPERS;}, /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */getReactMountReady:function(){return this.reactMountReady;}, /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */destructor:function(){CallbackQueue.release(this.reactMountReady);this.reactMountReady=null;}};assign(ReactServerRenderingTransaction.prototype,Transaction.Mixin,Mixin);PooledClass.addPoolingTo(ReactServerRenderingTransaction);module.exports=ReactServerRenderingTransaction;},{"100":100,"136":136,"23":23,"24":24,"6":6}],82:[function(_dereq_,module,exports){ /**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdateQueue
 */'use strict';var ReactCurrentOwner=_dereq_(34);var ReactElement=_dereq_(52);var ReactInstanceMap=_dereq_(62);var ReactUpdates=_dereq_(83);var assign=_dereq_(23);var invariant=_dereq_(144);var warning=_dereq_(155);function enqueueUpdate(internalInstance){ReactUpdates.enqueueUpdate(internalInstance);}function getInternalInstanceReadyForUpdate(publicInstance,callerName){var internalInstance=ReactInstanceMap.get(publicInstance);if(!internalInstance){if("development"!=='production'){ // Only warn when we have a callerName. Otherwise we should be silent.
// We're probably calling from enqueueCallback. We don't want to warn
// there because we already warned for the corresponding lifecycle method.
"development"!=='production'?warning(!callerName,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,publicInstance.constructor.displayName):undefined;}return null;}if("development"!=='production'){"development"!=='production'?warning(ReactCurrentOwner.current==null,'%s(...): Cannot update during an existing state transition '+'(such as within `render`). Render methods should be a pure function '+'of props and state.',callerName):undefined;}return internalInstance;} /**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */var ReactUpdateQueue={ /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function(publicInstance){if("development"!=='production'){var owner=ReactCurrentOwner.current;if(owner!==null){"development"!=='production'?warning(owner._warnedAboutRefsInRender,'%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',owner.getName()||'A component'):undefined;owner._warnedAboutRefsInRender=true;}}var internalInstance=ReactInstanceMap.get(publicInstance);if(internalInstance){ // During componentWillMount and render this will still be null but after
// that will always render to something. At least for now. So we can use
// this hack.
return !!internalInstance._renderedComponent;}else {return false;}}, /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */enqueueCallback:function(publicInstance,callback){!(typeof callback==='function')?"development"!=='production'?invariant(false,'enqueueCallback(...): You called `setProps`, `replaceProps`, '+'`setState`, `replaceState`, or `forceUpdate` with a callback that '+'isn\'t callable.'):invariant(false):undefined;var internalInstance=getInternalInstanceReadyForUpdate(publicInstance); // Previously we would throw an error if we didn't have an internal
// instance. Since we want to make it a no-op instead, we mirror the same
// behavior we have in other enqueue* methods.
// We also need to ignore callbacks in componentWillMount. See
// enqueueUpdates.
if(!internalInstance){return null;}if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else {internalInstance._pendingCallbacks=[callback];} // TODO: The callback here is ignored when setState is called from
// componentWillMount. Either fix it or disallow doing so completely in
// favor of getInitialState. Alternatively, we can disallow
// componentWillMount during server-side rendering.
enqueueUpdate(internalInstance);},enqueueCallbackInternal:function(internalInstance,callback){!(typeof callback==='function')?"development"!=='production'?invariant(false,'enqueueCallback(...): You called `setProps`, `replaceProps`, '+'`setState`, `replaceState`, or `forceUpdate` with a callback that '+'isn\'t callable.'):invariant(false):undefined;if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else {internalInstance._pendingCallbacks=[callback];}enqueueUpdate(internalInstance);}, /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */enqueueForceUpdate:function(publicInstance){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'forceUpdate');if(!internalInstance){return;}internalInstance._pendingForceUpdate=true;enqueueUpdate(internalInstance);}, /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */enqueueReplaceState:function(publicInstance,completeState){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'replaceState');if(!internalInstance){return;}internalInstance._pendingStateQueue=[completeState];internalInstance._pendingReplaceState=true;enqueueUpdate(internalInstance);}, /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */enqueueSetState:function(publicInstance,partialState){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'setState');if(!internalInstance){return;}var queue=internalInstance._pendingStateQueue||(internalInstance._pendingStateQueue=[]);queue.push(partialState);enqueueUpdate(internalInstance);}, /**
   * Sets a subset of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialProps Subset of the next props.
   * @internal
   */enqueueSetProps:function(publicInstance,partialProps){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'setProps');if(!internalInstance){return;}ReactUpdateQueue.enqueueSetPropsInternal(internalInstance,partialProps);},enqueueSetPropsInternal:function(internalInstance,partialProps){var topLevelWrapper=internalInstance._topLevelWrapper;!topLevelWrapper?"development"!=='production'?invariant(false,'setProps(...): You called `setProps` on a '+'component with a parent. This is an anti-pattern since props will '+'get reactively updated when rendered. Instead, change the owner\'s '+'`render` method to pass the correct value as props to the component '+'where it is created.'):invariant(false):undefined; // Merge with the pending element if it exists, otherwise with existing
// element props.
var wrapElement=topLevelWrapper._pendingElement||topLevelWrapper._currentElement;var element=wrapElement.props;var props=assign({},element.props,partialProps);topLevelWrapper._pendingElement=ReactElement.cloneAndReplaceProps(wrapElement,ReactElement.cloneAndReplaceProps(element,props));enqueueUpdate(topLevelWrapper);}, /**
   * Replaces all of the props.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} props New props.
   * @internal
   */enqueueReplaceProps:function(publicInstance,props){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'replaceProps');if(!internalInstance){return;}ReactUpdateQueue.enqueueReplacePropsInternal(internalInstance,props);},enqueueReplacePropsInternal:function(internalInstance,props){var topLevelWrapper=internalInstance._topLevelWrapper;!topLevelWrapper?"development"!=='production'?invariant(false,'replaceProps(...): You called `replaceProps` on a '+'component with a parent. This is an anti-pattern since props will '+'get reactively updated when rendered. Instead, change the owner\'s '+'`render` method to pass the correct value as props to the component '+'where it is created.'):invariant(false):undefined; // Merge with the pending element if it exists, otherwise with existing
// element props.
var wrapElement=topLevelWrapper._pendingElement||topLevelWrapper._currentElement;var element=wrapElement.props;topLevelWrapper._pendingElement=ReactElement.cloneAndReplaceProps(wrapElement,ReactElement.cloneAndReplaceProps(element,props));enqueueUpdate(topLevelWrapper);},enqueueElementInternal:function(internalInstance,newElement){internalInstance._pendingElement=newElement;enqueueUpdate(internalInstance);}};module.exports=ReactUpdateQueue;},{"144":144,"155":155,"23":23,"34":34,"52":52,"62":62,"83":83}],83:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */'use strict';var CallbackQueue=_dereq_(6);var PooledClass=_dereq_(24);var ReactPerf=_dereq_(71);var ReactReconciler=_dereq_(76);var Transaction=_dereq_(100);var assign=_dereq_(23);var invariant=_dereq_(144);var dirtyComponents=[];var asapCallbackQueue=CallbackQueue.getPooled();var asapEnqueued=false;var batchingStrategy=null;function ensureInjected(){!(ReactUpdates.ReactReconcileTransaction&&batchingStrategy)?"development"!=='production'?invariant(false,'ReactUpdates: must inject a reconcile transaction class and batching '+'strategy'):invariant(false):undefined;}var NESTED_UPDATES={initialize:function(){this.dirtyComponentsLength=dirtyComponents.length;},close:function(){if(this.dirtyComponentsLength!==dirtyComponents.length){ // Additional updates were enqueued by componentDidUpdate handlers or
// similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
// these new updates so that if A's componentDidUpdate calls setState on
// B, B will update before the callback A's updater provided when calling
// setState.
dirtyComponents.splice(0,this.dirtyComponentsLength);flushBatchedUpdates();}else {dirtyComponents.length=0;}}};var UPDATE_QUEUEING={initialize:function(){this.callbackQueue.reset();},close:function(){this.callbackQueue.notifyAll();}};var TRANSACTION_WRAPPERS=[NESTED_UPDATES,UPDATE_QUEUEING];function ReactUpdatesFlushTransaction(){this.reinitializeTransaction();this.dirtyComponentsLength=null;this.callbackQueue=CallbackQueue.getPooled();this.reconcileTransaction=ReactUpdates.ReactReconcileTransaction.getPooled( /* forceHTML */false);}assign(ReactUpdatesFlushTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function(){return TRANSACTION_WRAPPERS;},destructor:function(){this.dirtyComponentsLength=null;CallbackQueue.release(this.callbackQueue);this.callbackQueue=null;ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);this.reconcileTransaction=null;},perform:function(method,scope,a){ // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
// with this transaction's wrappers around it.
return Transaction.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,method,scope,a);}});PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);function batchedUpdates(callback,a,b,c,d,e){ensureInjected();batchingStrategy.batchedUpdates(callback,a,b,c,d,e);} /**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */function mountOrderComparator(c1,c2){return c1._mountOrder-c2._mountOrder;}function runBatchedUpdates(transaction){var len=transaction.dirtyComponentsLength;!(len===dirtyComponents.length)?"development"!=='production'?invariant(false,'Expected flush transaction\'s stored dirty-components length (%s) to '+'match dirty-components array length (%s).',len,dirtyComponents.length):invariant(false):undefined; // Since reconciling a component higher in the owner hierarchy usually (not
// always -- see shouldComponentUpdate()) will reconcile children, reconcile
// them before their children by sorting the array.
dirtyComponents.sort(mountOrderComparator);for(var i=0;i<len;i++){ // If a component is unmounted before pending changes apply, it will still
// be here, but we assume that it has cleared its _pendingCallbacks and
// that performUpdateIfNecessary is a noop.
var component=dirtyComponents[i]; // If performUpdateIfNecessary happens to enqueue any new updates, we
// shouldn't execute the callbacks until the next render happens, so
// stash the callbacks first
var callbacks=component._pendingCallbacks;component._pendingCallbacks=null;ReactReconciler.performUpdateIfNecessary(component,transaction.reconcileTransaction);if(callbacks){for(var j=0;j<callbacks.length;j++){transaction.callbackQueue.enqueue(callbacks[j],component.getPublicInstance());}}}}var flushBatchedUpdates=function(){ // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
// array and perform any updates enqueued by mount-ready handlers (i.e.,
// componentDidUpdate) but we need to check here too in order to catch
// updates enqueued by setState callbacks and asap calls.
while(dirtyComponents.length||asapEnqueued){if(dirtyComponents.length){var transaction=ReactUpdatesFlushTransaction.getPooled();transaction.perform(runBatchedUpdates,null,transaction);ReactUpdatesFlushTransaction.release(transaction);}if(asapEnqueued){asapEnqueued=false;var queue=asapCallbackQueue;asapCallbackQueue=CallbackQueue.getPooled();queue.notifyAll();CallbackQueue.release(queue);}}};flushBatchedUpdates=ReactPerf.measure('ReactUpdates','flushBatchedUpdates',flushBatchedUpdates); /**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */function enqueueUpdate(component){ensureInjected(); // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (This is called by each top-level update
// function, like setProps, setState, forceUpdate, etc.; creation and
// destruction of top-level components is guarded in ReactMount.)
if(!batchingStrategy.isBatchingUpdates){batchingStrategy.batchedUpdates(enqueueUpdate,component);return;}dirtyComponents.push(component);} /**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */function asap(callback,context){!batchingStrategy.isBatchingUpdates?"development"!=='production'?invariant(false,'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where'+'updates are not being batched.'):invariant(false):undefined;asapCallbackQueue.enqueue(callback,context);asapEnqueued=true;}var ReactUpdatesInjection={injectReconcileTransaction:function(ReconcileTransaction){!ReconcileTransaction?"development"!=='production'?invariant(false,'ReactUpdates: must provide a reconcile transaction class'):invariant(false):undefined;ReactUpdates.ReactReconcileTransaction=ReconcileTransaction;},injectBatchingStrategy:function(_batchingStrategy){!_batchingStrategy?"development"!=='production'?invariant(false,'ReactUpdates: must provide a batching strategy'):invariant(false):undefined;!(typeof _batchingStrategy.batchedUpdates==='function')?"development"!=='production'?invariant(false,'ReactUpdates: must provide a batchedUpdates() function'):invariant(false):undefined;!(typeof _batchingStrategy.isBatchingUpdates==='boolean')?"development"!=='production'?invariant(false,'ReactUpdates: must provide an isBatchingUpdates boolean attribute'):invariant(false):undefined;batchingStrategy=_batchingStrategy;}};var ReactUpdates={ /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */ReactReconcileTransaction:null,batchedUpdates:batchedUpdates,enqueueUpdate:enqueueUpdate,flushBatchedUpdates:flushBatchedUpdates,injection:ReactUpdatesInjection,asap:asap};module.exports=ReactUpdates;},{"100":100,"144":144,"23":23,"24":24,"6":6,"71":71,"76":76}],84:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactVersion
 */'use strict';module.exports='0.14.7';},{}],85:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */'use strict';var DOMProperty=_dereq_(10);var MUST_USE_ATTRIBUTE=DOMProperty.injection.MUST_USE_ATTRIBUTE;var NS={xlink:'http://www.w3.org/1999/xlink',xml:'http://www.w3.org/XML/1998/namespace'};var SVGDOMPropertyConfig={Properties:{clipPath:MUST_USE_ATTRIBUTE,cx:MUST_USE_ATTRIBUTE,cy:MUST_USE_ATTRIBUTE,d:MUST_USE_ATTRIBUTE,dx:MUST_USE_ATTRIBUTE,dy:MUST_USE_ATTRIBUTE,fill:MUST_USE_ATTRIBUTE,fillOpacity:MUST_USE_ATTRIBUTE,fontFamily:MUST_USE_ATTRIBUTE,fontSize:MUST_USE_ATTRIBUTE,fx:MUST_USE_ATTRIBUTE,fy:MUST_USE_ATTRIBUTE,gradientTransform:MUST_USE_ATTRIBUTE,gradientUnits:MUST_USE_ATTRIBUTE,markerEnd:MUST_USE_ATTRIBUTE,markerMid:MUST_USE_ATTRIBUTE,markerStart:MUST_USE_ATTRIBUTE,offset:MUST_USE_ATTRIBUTE,opacity:MUST_USE_ATTRIBUTE,patternContentUnits:MUST_USE_ATTRIBUTE,patternUnits:MUST_USE_ATTRIBUTE,points:MUST_USE_ATTRIBUTE,preserveAspectRatio:MUST_USE_ATTRIBUTE,r:MUST_USE_ATTRIBUTE,rx:MUST_USE_ATTRIBUTE,ry:MUST_USE_ATTRIBUTE,spreadMethod:MUST_USE_ATTRIBUTE,stopColor:MUST_USE_ATTRIBUTE,stopOpacity:MUST_USE_ATTRIBUTE,stroke:MUST_USE_ATTRIBUTE,strokeDasharray:MUST_USE_ATTRIBUTE,strokeLinecap:MUST_USE_ATTRIBUTE,strokeOpacity:MUST_USE_ATTRIBUTE,strokeWidth:MUST_USE_ATTRIBUTE,textAnchor:MUST_USE_ATTRIBUTE,transform:MUST_USE_ATTRIBUTE,version:MUST_USE_ATTRIBUTE,viewBox:MUST_USE_ATTRIBUTE,x1:MUST_USE_ATTRIBUTE,x2:MUST_USE_ATTRIBUTE,x:MUST_USE_ATTRIBUTE,xlinkActuate:MUST_USE_ATTRIBUTE,xlinkArcrole:MUST_USE_ATTRIBUTE,xlinkHref:MUST_USE_ATTRIBUTE,xlinkRole:MUST_USE_ATTRIBUTE,xlinkShow:MUST_USE_ATTRIBUTE,xlinkTitle:MUST_USE_ATTRIBUTE,xlinkType:MUST_USE_ATTRIBUTE,xmlBase:MUST_USE_ATTRIBUTE,xmlLang:MUST_USE_ATTRIBUTE,xmlSpace:MUST_USE_ATTRIBUTE,y1:MUST_USE_ATTRIBUTE,y2:MUST_USE_ATTRIBUTE,y:MUST_USE_ATTRIBUTE},DOMAttributeNamespaces:{xlinkActuate:NS.xlink,xlinkArcrole:NS.xlink,xlinkHref:NS.xlink,xlinkRole:NS.xlink,xlinkShow:NS.xlink,xlinkTitle:NS.xlink,xlinkType:NS.xlink,xmlBase:NS.xml,xmlLang:NS.xml,xmlSpace:NS.xml},DOMAttributeNames:{clipPath:'clip-path',fillOpacity:'fill-opacity',fontFamily:'font-family',fontSize:'font-size',gradientTransform:'gradientTransform',gradientUnits:'gradientUnits',markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',patternContentUnits:'patternContentUnits',patternUnits:'patternUnits',preserveAspectRatio:'preserveAspectRatio',spreadMethod:'spreadMethod',stopColor:'stop-color',stopOpacity:'stop-opacity',strokeDasharray:'stroke-dasharray',strokeLinecap:'stroke-linecap',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',textAnchor:'text-anchor',viewBox:'viewBox',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type',xmlBase:'xml:base',xmlLang:'xml:lang',xmlSpace:'xml:space'}};module.exports=SVGDOMPropertyConfig;},{"10":10}],86:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */'use strict';var EventConstants=_dereq_(15);var EventPropagators=_dereq_(19);var ExecutionEnvironment=_dereq_(130);var ReactInputSelection=_dereq_(60);var SyntheticEvent=_dereq_(92);var getActiveElement=_dereq_(139);var isTextInputElement=_dereq_(120);var keyOf=_dereq_(148);var shallowEqual=_dereq_(153);var topLevelTypes=EventConstants.topLevelTypes;var skipSelectionChangeEvent=ExecutionEnvironment.canUseDOM&&'documentMode' in document&&document.documentMode<=11;var eventTypes={select:{phasedRegistrationNames:{bubbled:keyOf({onSelect:null}),captured:keyOf({onSelectCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topContextMenu,topLevelTypes.topFocus,topLevelTypes.topKeyDown,topLevelTypes.topMouseDown,topLevelTypes.topMouseUp,topLevelTypes.topSelectionChange]}};var activeElement=null;var activeElementID=null;var lastSelection=null;var mouseDown=false; // Track whether a listener exists for this plugin. If none exist, we do
// not extract events.
var hasListener=false;var ON_SELECT_KEY=keyOf({onSelect:null}); /**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getSelection(node){if('selectionStart' in node&&ReactInputSelection.hasSelectionCapabilities(node)){return {start:node.selectionStart,end:node.selectionEnd};}else if(window.getSelection){var selection=window.getSelection();return {anchorNode:selection.anchorNode,anchorOffset:selection.anchorOffset,focusNode:selection.focusNode,focusOffset:selection.focusOffset};}else if(document.selection){var range=document.selection.createRange();return {parentElement:range.parentElement(),text:range.text,top:range.boundingTop,left:range.boundingLeft};}} /**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */function constructSelectEvent(nativeEvent,nativeEventTarget){ // Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
if(mouseDown||activeElement==null||activeElement!==getActiveElement()){return null;} // Only fire when selection has actually changed.
var currentSelection=getSelection(activeElement);if(!lastSelection||!shallowEqual(lastSelection,currentSelection)){lastSelection=currentSelection;var syntheticEvent=SyntheticEvent.getPooled(eventTypes.select,activeElementID,nativeEvent,nativeEventTarget);syntheticEvent.type='select';syntheticEvent.target=activeElement;EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);return syntheticEvent;}return null;} /**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */var SelectEventPlugin={eventTypes:eventTypes, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){if(!hasListener){return null;}switch(topLevelType){ // Track the input node that has focus.
case topLevelTypes.topFocus:if(isTextInputElement(topLevelTarget)||topLevelTarget.contentEditable==='true'){activeElement=topLevelTarget;activeElementID=topLevelTargetID;lastSelection=null;}break;case topLevelTypes.topBlur:activeElement=null;activeElementID=null;lastSelection=null;break; // Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case topLevelTypes.topMouseDown:mouseDown=true;break;case topLevelTypes.topContextMenu:case topLevelTypes.topMouseUp:mouseDown=false;return constructSelectEvent(nativeEvent,nativeEventTarget); // Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case topLevelTypes.topSelectionChange:if(skipSelectionChangeEvent){break;} // falls through
case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:return constructSelectEvent(nativeEvent,nativeEventTarget);}return null;},didPutListener:function(id,registrationName,listener){if(registrationName===ON_SELECT_KEY){hasListener=true;}}};module.exports=SelectEventPlugin;},{"120":120,"130":130,"139":139,"148":148,"15":15,"153":153,"19":19,"60":60,"92":92}],87:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ServerReactRootIndex
 * @typechecks
 */'use strict'; /**
 * Size of the reactRoot ID space. We generate random numbers for React root
 * IDs and if there's a collision the events and DOM update system will
 * get confused. In the future we need a way to generate GUIDs but for
 * now this will work on a smaller scale.
 */var GLOBAL_MOUNT_POINT_MAX=Math.pow(2,53);var ServerReactRootIndex={createReactRootIndex:function(){return Math.ceil(Math.random()*GLOBAL_MOUNT_POINT_MAX);}};module.exports=ServerReactRootIndex;},{}],88:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */'use strict';var EventConstants=_dereq_(15);var EventListener=_dereq_(129);var EventPropagators=_dereq_(19);var ReactMount=_dereq_(65);var SyntheticClipboardEvent=_dereq_(89);var SyntheticEvent=_dereq_(92);var SyntheticFocusEvent=_dereq_(93);var SyntheticKeyboardEvent=_dereq_(95);var SyntheticMouseEvent=_dereq_(96);var SyntheticDragEvent=_dereq_(91);var SyntheticTouchEvent=_dereq_(97);var SyntheticUIEvent=_dereq_(98);var SyntheticWheelEvent=_dereq_(99);var emptyFunction=_dereq_(136);var getEventCharCode=_dereq_(111);var invariant=_dereq_(144);var keyOf=_dereq_(148);var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={abort:{phasedRegistrationNames:{bubbled:keyOf({onAbort:true}),captured:keyOf({onAbortCapture:true})}},blur:{phasedRegistrationNames:{bubbled:keyOf({onBlur:true}),captured:keyOf({onBlurCapture:true})}},canPlay:{phasedRegistrationNames:{bubbled:keyOf({onCanPlay:true}),captured:keyOf({onCanPlayCapture:true})}},canPlayThrough:{phasedRegistrationNames:{bubbled:keyOf({onCanPlayThrough:true}),captured:keyOf({onCanPlayThroughCapture:true})}},click:{phasedRegistrationNames:{bubbled:keyOf({onClick:true}),captured:keyOf({onClickCapture:true})}},contextMenu:{phasedRegistrationNames:{bubbled:keyOf({onContextMenu:true}),captured:keyOf({onContextMenuCapture:true})}},copy:{phasedRegistrationNames:{bubbled:keyOf({onCopy:true}),captured:keyOf({onCopyCapture:true})}},cut:{phasedRegistrationNames:{bubbled:keyOf({onCut:true}),captured:keyOf({onCutCapture:true})}},doubleClick:{phasedRegistrationNames:{bubbled:keyOf({onDoubleClick:true}),captured:keyOf({onDoubleClickCapture:true})}},drag:{phasedRegistrationNames:{bubbled:keyOf({onDrag:true}),captured:keyOf({onDragCapture:true})}},dragEnd:{phasedRegistrationNames:{bubbled:keyOf({onDragEnd:true}),captured:keyOf({onDragEndCapture:true})}},dragEnter:{phasedRegistrationNames:{bubbled:keyOf({onDragEnter:true}),captured:keyOf({onDragEnterCapture:true})}},dragExit:{phasedRegistrationNames:{bubbled:keyOf({onDragExit:true}),captured:keyOf({onDragExitCapture:true})}},dragLeave:{phasedRegistrationNames:{bubbled:keyOf({onDragLeave:true}),captured:keyOf({onDragLeaveCapture:true})}},dragOver:{phasedRegistrationNames:{bubbled:keyOf({onDragOver:true}),captured:keyOf({onDragOverCapture:true})}},dragStart:{phasedRegistrationNames:{bubbled:keyOf({onDragStart:true}),captured:keyOf({onDragStartCapture:true})}},drop:{phasedRegistrationNames:{bubbled:keyOf({onDrop:true}),captured:keyOf({onDropCapture:true})}},durationChange:{phasedRegistrationNames:{bubbled:keyOf({onDurationChange:true}),captured:keyOf({onDurationChangeCapture:true})}},emptied:{phasedRegistrationNames:{bubbled:keyOf({onEmptied:true}),captured:keyOf({onEmptiedCapture:true})}},encrypted:{phasedRegistrationNames:{bubbled:keyOf({onEncrypted:true}),captured:keyOf({onEncryptedCapture:true})}},ended:{phasedRegistrationNames:{bubbled:keyOf({onEnded:true}),captured:keyOf({onEndedCapture:true})}},error:{phasedRegistrationNames:{bubbled:keyOf({onError:true}),captured:keyOf({onErrorCapture:true})}},focus:{phasedRegistrationNames:{bubbled:keyOf({onFocus:true}),captured:keyOf({onFocusCapture:true})}},input:{phasedRegistrationNames:{bubbled:keyOf({onInput:true}),captured:keyOf({onInputCapture:true})}},keyDown:{phasedRegistrationNames:{bubbled:keyOf({onKeyDown:true}),captured:keyOf({onKeyDownCapture:true})}},keyPress:{phasedRegistrationNames:{bubbled:keyOf({onKeyPress:true}),captured:keyOf({onKeyPressCapture:true})}},keyUp:{phasedRegistrationNames:{bubbled:keyOf({onKeyUp:true}),captured:keyOf({onKeyUpCapture:true})}},load:{phasedRegistrationNames:{bubbled:keyOf({onLoad:true}),captured:keyOf({onLoadCapture:true})}},loadedData:{phasedRegistrationNames:{bubbled:keyOf({onLoadedData:true}),captured:keyOf({onLoadedDataCapture:true})}},loadedMetadata:{phasedRegistrationNames:{bubbled:keyOf({onLoadedMetadata:true}),captured:keyOf({onLoadedMetadataCapture:true})}},loadStart:{phasedRegistrationNames:{bubbled:keyOf({onLoadStart:true}),captured:keyOf({onLoadStartCapture:true})}}, // Note: We do not allow listening to mouseOver events. Instead, use the
// onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
mouseDown:{phasedRegistrationNames:{bubbled:keyOf({onMouseDown:true}),captured:keyOf({onMouseDownCapture:true})}},mouseMove:{phasedRegistrationNames:{bubbled:keyOf({onMouseMove:true}),captured:keyOf({onMouseMoveCapture:true})}},mouseOut:{phasedRegistrationNames:{bubbled:keyOf({onMouseOut:true}),captured:keyOf({onMouseOutCapture:true})}},mouseOver:{phasedRegistrationNames:{bubbled:keyOf({onMouseOver:true}),captured:keyOf({onMouseOverCapture:true})}},mouseUp:{phasedRegistrationNames:{bubbled:keyOf({onMouseUp:true}),captured:keyOf({onMouseUpCapture:true})}},paste:{phasedRegistrationNames:{bubbled:keyOf({onPaste:true}),captured:keyOf({onPasteCapture:true})}},pause:{phasedRegistrationNames:{bubbled:keyOf({onPause:true}),captured:keyOf({onPauseCapture:true})}},play:{phasedRegistrationNames:{bubbled:keyOf({onPlay:true}),captured:keyOf({onPlayCapture:true})}},playing:{phasedRegistrationNames:{bubbled:keyOf({onPlaying:true}),captured:keyOf({onPlayingCapture:true})}},progress:{phasedRegistrationNames:{bubbled:keyOf({onProgress:true}),captured:keyOf({onProgressCapture:true})}},rateChange:{phasedRegistrationNames:{bubbled:keyOf({onRateChange:true}),captured:keyOf({onRateChangeCapture:true})}},reset:{phasedRegistrationNames:{bubbled:keyOf({onReset:true}),captured:keyOf({onResetCapture:true})}},scroll:{phasedRegistrationNames:{bubbled:keyOf({onScroll:true}),captured:keyOf({onScrollCapture:true})}},seeked:{phasedRegistrationNames:{bubbled:keyOf({onSeeked:true}),captured:keyOf({onSeekedCapture:true})}},seeking:{phasedRegistrationNames:{bubbled:keyOf({onSeeking:true}),captured:keyOf({onSeekingCapture:true})}},stalled:{phasedRegistrationNames:{bubbled:keyOf({onStalled:true}),captured:keyOf({onStalledCapture:true})}},submit:{phasedRegistrationNames:{bubbled:keyOf({onSubmit:true}),captured:keyOf({onSubmitCapture:true})}},suspend:{phasedRegistrationNames:{bubbled:keyOf({onSuspend:true}),captured:keyOf({onSuspendCapture:true})}},timeUpdate:{phasedRegistrationNames:{bubbled:keyOf({onTimeUpdate:true}),captured:keyOf({onTimeUpdateCapture:true})}},touchCancel:{phasedRegistrationNames:{bubbled:keyOf({onTouchCancel:true}),captured:keyOf({onTouchCancelCapture:true})}},touchEnd:{phasedRegistrationNames:{bubbled:keyOf({onTouchEnd:true}),captured:keyOf({onTouchEndCapture:true})}},touchMove:{phasedRegistrationNames:{bubbled:keyOf({onTouchMove:true}),captured:keyOf({onTouchMoveCapture:true})}},touchStart:{phasedRegistrationNames:{bubbled:keyOf({onTouchStart:true}),captured:keyOf({onTouchStartCapture:true})}},volumeChange:{phasedRegistrationNames:{bubbled:keyOf({onVolumeChange:true}),captured:keyOf({onVolumeChangeCapture:true})}},waiting:{phasedRegistrationNames:{bubbled:keyOf({onWaiting:true}),captured:keyOf({onWaitingCapture:true})}},wheel:{phasedRegistrationNames:{bubbled:keyOf({onWheel:true}),captured:keyOf({onWheelCapture:true})}}};var topLevelEventsToDispatchConfig={topAbort:eventTypes.abort,topBlur:eventTypes.blur,topCanPlay:eventTypes.canPlay,topCanPlayThrough:eventTypes.canPlayThrough,topClick:eventTypes.click,topContextMenu:eventTypes.contextMenu,topCopy:eventTypes.copy,topCut:eventTypes.cut,topDoubleClick:eventTypes.doubleClick,topDrag:eventTypes.drag,topDragEnd:eventTypes.dragEnd,topDragEnter:eventTypes.dragEnter,topDragExit:eventTypes.dragExit,topDragLeave:eventTypes.dragLeave,topDragOver:eventTypes.dragOver,topDragStart:eventTypes.dragStart,topDrop:eventTypes.drop,topDurationChange:eventTypes.durationChange,topEmptied:eventTypes.emptied,topEncrypted:eventTypes.encrypted,topEnded:eventTypes.ended,topError:eventTypes.error,topFocus:eventTypes.focus,topInput:eventTypes.input,topKeyDown:eventTypes.keyDown,topKeyPress:eventTypes.keyPress,topKeyUp:eventTypes.keyUp,topLoad:eventTypes.load,topLoadedData:eventTypes.loadedData,topLoadedMetadata:eventTypes.loadedMetadata,topLoadStart:eventTypes.loadStart,topMouseDown:eventTypes.mouseDown,topMouseMove:eventTypes.mouseMove,topMouseOut:eventTypes.mouseOut,topMouseOver:eventTypes.mouseOver,topMouseUp:eventTypes.mouseUp,topPaste:eventTypes.paste,topPause:eventTypes.pause,topPlay:eventTypes.play,topPlaying:eventTypes.playing,topProgress:eventTypes.progress,topRateChange:eventTypes.rateChange,topReset:eventTypes.reset,topScroll:eventTypes.scroll,topSeeked:eventTypes.seeked,topSeeking:eventTypes.seeking,topStalled:eventTypes.stalled,topSubmit:eventTypes.submit,topSuspend:eventTypes.suspend,topTimeUpdate:eventTypes.timeUpdate,topTouchCancel:eventTypes.touchCancel,topTouchEnd:eventTypes.touchEnd,topTouchMove:eventTypes.touchMove,topTouchStart:eventTypes.touchStart,topVolumeChange:eventTypes.volumeChange,topWaiting:eventTypes.waiting,topWheel:eventTypes.wheel};for(var type in topLevelEventsToDispatchConfig){topLevelEventsToDispatchConfig[type].dependencies=[type];}var ON_CLICK_KEY=keyOf({onClick:null});var onClickListeners={};var SimpleEventPlugin={eventTypes:eventTypes, /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */extractEvents:function(topLevelType,topLevelTarget,topLevelTargetID,nativeEvent,nativeEventTarget){var dispatchConfig=topLevelEventsToDispatchConfig[topLevelType];if(!dispatchConfig){return null;}var EventConstructor;switch(topLevelType){case topLevelTypes.topAbort:case topLevelTypes.topCanPlay:case topLevelTypes.topCanPlayThrough:case topLevelTypes.topDurationChange:case topLevelTypes.topEmptied:case topLevelTypes.topEncrypted:case topLevelTypes.topEnded:case topLevelTypes.topError:case topLevelTypes.topInput:case topLevelTypes.topLoad:case topLevelTypes.topLoadedData:case topLevelTypes.topLoadedMetadata:case topLevelTypes.topLoadStart:case topLevelTypes.topPause:case topLevelTypes.topPlay:case topLevelTypes.topPlaying:case topLevelTypes.topProgress:case topLevelTypes.topRateChange:case topLevelTypes.topReset:case topLevelTypes.topSeeked:case topLevelTypes.topSeeking:case topLevelTypes.topStalled:case topLevelTypes.topSubmit:case topLevelTypes.topSuspend:case topLevelTypes.topTimeUpdate:case topLevelTypes.topVolumeChange:case topLevelTypes.topWaiting: // HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
EventConstructor=SyntheticEvent;break;case topLevelTypes.topKeyPress: // FireFox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(getEventCharCode(nativeEvent)===0){return null;} /* falls through */case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:EventConstructor=SyntheticKeyboardEvent;break;case topLevelTypes.topBlur:case topLevelTypes.topFocus:EventConstructor=SyntheticFocusEvent;break;case topLevelTypes.topClick: // Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(nativeEvent.button===2){return null;} /* falls through */case topLevelTypes.topContextMenu:case topLevelTypes.topDoubleClick:case topLevelTypes.topMouseDown:case topLevelTypes.topMouseMove:case topLevelTypes.topMouseOut:case topLevelTypes.topMouseOver:case topLevelTypes.topMouseUp:EventConstructor=SyntheticMouseEvent;break;case topLevelTypes.topDrag:case topLevelTypes.topDragEnd:case topLevelTypes.topDragEnter:case topLevelTypes.topDragExit:case topLevelTypes.topDragLeave:case topLevelTypes.topDragOver:case topLevelTypes.topDragStart:case topLevelTypes.topDrop:EventConstructor=SyntheticDragEvent;break;case topLevelTypes.topTouchCancel:case topLevelTypes.topTouchEnd:case topLevelTypes.topTouchMove:case topLevelTypes.topTouchStart:EventConstructor=SyntheticTouchEvent;break;case topLevelTypes.topScroll:EventConstructor=SyntheticUIEvent;break;case topLevelTypes.topWheel:EventConstructor=SyntheticWheelEvent;break;case topLevelTypes.topCopy:case topLevelTypes.topCut:case topLevelTypes.topPaste:EventConstructor=SyntheticClipboardEvent;break;}!EventConstructor?"development"!=='production'?invariant(false,'SimpleEventPlugin: Unhandled event type, `%s`.',topLevelType):invariant(false):undefined;var event=EventConstructor.getPooled(dispatchConfig,topLevelTargetID,nativeEvent,nativeEventTarget);EventPropagators.accumulateTwoPhaseDispatches(event);return event;},didPutListener:function(id,registrationName,listener){ // Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
if(registrationName===ON_CLICK_KEY){var node=ReactMount.getNode(id);if(!onClickListeners[id]){onClickListeners[id]=EventListener.listen(node,'click',emptyFunction);}}},willDeleteListener:function(id,registrationName){if(registrationName===ON_CLICK_KEY){onClickListeners[id].remove();delete onClickListeners[id];}}};module.exports=SimpleEventPlugin;},{"111":111,"129":129,"136":136,"144":144,"148":148,"15":15,"19":19,"65":65,"89":89,"91":91,"92":92,"93":93,"95":95,"96":96,"97":97,"98":98,"99":99}],89:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 * @typechecks static-only
 */'use strict';var SyntheticEvent=_dereq_(92); /**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */var ClipboardEventInterface={clipboardData:function(event){return 'clipboardData' in event?event.clipboardData:window.clipboardData;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticClipboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface);module.exports=SyntheticClipboardEvent;},{"92":92}],90:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 * @typechecks static-only
 */'use strict';var SyntheticEvent=_dereq_(92); /**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */var CompositionEventInterface={data:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticCompositionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticCompositionEvent,CompositionEventInterface);module.exports=SyntheticCompositionEvent;},{"92":92}],91:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 * @typechecks static-only
 */'use strict';var SyntheticMouseEvent=_dereq_(96); /**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var DragEventInterface={dataTransfer:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticDragEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent.augmentClass(SyntheticDragEvent,DragEventInterface);module.exports=SyntheticDragEvent;},{"96":96}],92:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 * @typechecks static-only
 */'use strict';var PooledClass=_dereq_(24);var assign=_dereq_(23);var emptyFunction=_dereq_(136);var warning=_dereq_(155); /**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var EventInterface={type:null,target:null, // currentTarget is set when dispatching; no use in copying it here
currentTarget:emptyFunction.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(event){return event.timeStamp||Date.now();},defaultPrevented:null,isTrusted:null}; /**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 */function SyntheticEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){this.dispatchConfig=dispatchConfig;this.dispatchMarker=dispatchMarker;this.nativeEvent=nativeEvent;var Interface=this.constructor.Interface;for(var propName in Interface){if(!Interface.hasOwnProperty(propName)){continue;}var normalize=Interface[propName];if(normalize){this[propName]=normalize(nativeEvent);}else {if(propName==='target'){this.target=nativeEventTarget;}else {this[propName]=nativeEvent[propName];}}}var defaultPrevented=nativeEvent.defaultPrevented!=null?nativeEvent.defaultPrevented:nativeEvent.returnValue===false;if(defaultPrevented){this.isDefaultPrevented=emptyFunction.thatReturnsTrue;}else {this.isDefaultPrevented=emptyFunction.thatReturnsFalse;}this.isPropagationStopped=emptyFunction.thatReturnsFalse;}assign(SyntheticEvent.prototype,{preventDefault:function(){this.defaultPrevented=true;var event=this.nativeEvent;if("development"!=='production'){"development"!=='production'?warning(event,'This synthetic event is reused for performance reasons. If you\'re '+'seeing this, you\'re calling `preventDefault` on a '+'released/nullified synthetic event. This is a no-op. See '+'https://fb.me/react-event-pooling for more information.'):undefined;}if(!event){return;}if(event.preventDefault){event.preventDefault();}else {event.returnValue=false;}this.isDefaultPrevented=emptyFunction.thatReturnsTrue;},stopPropagation:function(){var event=this.nativeEvent;if("development"!=='production'){"development"!=='production'?warning(event,'This synthetic event is reused for performance reasons. If you\'re '+'seeing this, you\'re calling `stopPropagation` on a '+'released/nullified synthetic event. This is a no-op. See '+'https://fb.me/react-event-pooling for more information.'):undefined;}if(!event){return;}if(event.stopPropagation){event.stopPropagation();}else {event.cancelBubble=true;}this.isPropagationStopped=emptyFunction.thatReturnsTrue;}, /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */persist:function(){this.isPersistent=emptyFunction.thatReturnsTrue;}, /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */isPersistent:emptyFunction.thatReturnsFalse, /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */destructor:function(){var Interface=this.constructor.Interface;for(var propName in Interface){this[propName]=null;}this.dispatchConfig=null;this.dispatchMarker=null;this.nativeEvent=null;}});SyntheticEvent.Interface=EventInterface; /**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */SyntheticEvent.augmentClass=function(Class,Interface){var Super=this;var prototype=Object.create(Super.prototype);assign(prototype,Class.prototype);Class.prototype=prototype;Class.prototype.constructor=Class;Class.Interface=assign({},Super.Interface,Interface);Class.augmentClass=Super.augmentClass;PooledClass.addPoolingTo(Class,PooledClass.fourArgumentPooler);};PooledClass.addPoolingTo(SyntheticEvent,PooledClass.fourArgumentPooler);module.exports=SyntheticEvent;},{"136":136,"155":155,"23":23,"24":24}],93:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 * @typechecks static-only
 */'use strict';var SyntheticUIEvent=_dereq_(98); /**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var FocusEventInterface={relatedTarget:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticFocusEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticFocusEvent,FocusEventInterface);module.exports=SyntheticFocusEvent;},{"98":98}],94:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 * @typechecks static-only
 */'use strict';var SyntheticEvent=_dereq_(92); /**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */var InputEventInterface={data:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticInputEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticInputEvent,InputEventInterface);module.exports=SyntheticInputEvent;},{"92":92}],95:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 * @typechecks static-only
 */'use strict';var SyntheticUIEvent=_dereq_(98);var getEventCharCode=_dereq_(111);var getEventKey=_dereq_(112);var getEventModifierState=_dereq_(113); /**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var KeyboardEventInterface={key:getEventKey,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState, // Legacy Interface
charCode:function(event){ // `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
if(event.type==='keypress'){return getEventCharCode(event);}return 0;},keyCode:function(event){ // `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;},which:function(event){ // `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
if(event.type==='keypress'){return getEventCharCode(event);}if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticKeyboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface);module.exports=SyntheticKeyboardEvent;},{"111":111,"112":112,"113":113,"98":98}],96:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 * @typechecks static-only
 */'use strict';var SyntheticUIEvent=_dereq_(98);var ViewportMetrics=_dereq_(101);var getEventModifierState=_dereq_(113); /**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var MouseEventInterface={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState,button:function(event){ // Webkit, Firefox, IE9+
// which:  1 2 3
// button: 0 1 2 (standard)
var button=event.button;if('which' in event){return button;} // IE<9
// which:  undefined
// button: 0 0 0
// button: 1 4 2 (onmouseup)
return button===2?2:button===4?1:0;},buttons:null,relatedTarget:function(event){return event.relatedTarget||(event.fromElement===event.srcElement?event.toElement:event.fromElement);}, // "Proprietary" Interface.
pageX:function(event){return 'pageX' in event?event.pageX:event.clientX+ViewportMetrics.currentScrollLeft;},pageY:function(event){return 'pageY' in event?event.pageY:event.clientY+ViewportMetrics.currentScrollTop;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticMouseEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticMouseEvent,MouseEventInterface);module.exports=SyntheticMouseEvent;},{"101":101,"113":113,"98":98}],97:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 * @typechecks static-only
 */'use strict';var SyntheticUIEvent=_dereq_(98);var getEventModifierState=_dereq_(113); /**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */var TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticTouchEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticTouchEvent,TouchEventInterface);module.exports=SyntheticTouchEvent;},{"113":113,"98":98}],98:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 * @typechecks static-only
 */'use strict';var SyntheticEvent=_dereq_(92);var getEventTarget=_dereq_(114); /**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var UIEventInterface={view:function(event){if(event.view){return event.view;}var target=getEventTarget(event);if(target!=null&&target.window===target){ // target is a window object
return target;}var doc=target.ownerDocument; // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
if(doc){return doc.defaultView||doc.parentWindow;}else {return window;}},detail:function(event){return event.detail||0;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticUIEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticUIEvent,UIEventInterface);module.exports=SyntheticUIEvent;},{"114":114,"92":92}],99:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 * @typechecks static-only
 */'use strict';var SyntheticMouseEvent=_dereq_(96); /**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var WheelEventInterface={deltaX:function(event){return 'deltaX' in event?event.deltaX: // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
'wheelDeltaX' in event?-event.wheelDeltaX:0;},deltaY:function(event){return 'deltaY' in event?event.deltaY: // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
'wheelDeltaY' in event?-event.wheelDeltaY: // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
'wheelDelta' in event?-event.wheelDelta:0;},deltaZ:null, // Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */function SyntheticWheelEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent.augmentClass(SyntheticWheelEvent,WheelEventInterface);module.exports=SyntheticWheelEvent;},{"96":96}],100:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */'use strict';var invariant=_dereq_(144); /**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM updates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */var Mixin={ /**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers();if(this.wrapperInitData){this.wrapperInitData.length=0;}else {this.wrapperInitData=[];}this._isInTransaction=false;},_isInTransaction:false, /**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */getTransactionWrappers:null,isInTransaction:function(){return !!this._isInTransaction;}, /**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked. The optional arguments helps prevent the need
   * to bind in many cases.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} a Argument to pass to the method.
   * @param {Object?=} b Argument to pass to the method.
   * @param {Object?=} c Argument to pass to the method.
   * @param {Object?=} d Argument to pass to the method.
   * @param {Object?=} e Argument to pass to the method.
   * @param {Object?=} f Argument to pass to the method.
   *
   * @return {*} Return value from `method`.
   */perform:function(method,scope,a,b,c,d,e,f){!!this.isInTransaction()?"development"!=='production'?invariant(false,'Transaction.perform(...): Cannot initialize a transaction when there '+'is already an outstanding transaction.'):invariant(false):undefined;var errorThrown;var ret;try{this._isInTransaction=true; // Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// one of these calls threw.
errorThrown=true;this.initializeAll(0);ret=method.call(scope,a,b,c,d,e,f);errorThrown=false;}finally {try{if(errorThrown){ // If `method` throws, prefer to show that stack trace over any thrown
// by invoking `closeAll`.
try{this.closeAll(0);}catch(err){}}else { // Since `method` didn't throw, we don't want to silence the exception
// here.
this.closeAll(0);}}finally {this._isInTransaction=false;}}return ret;},initializeAll:function(startIndex){var transactionWrappers=this.transactionWrappers;for(var i=startIndex;i<transactionWrappers.length;i++){var wrapper=transactionWrappers[i];try{ // Catching errors makes debugging more difficult, so we start with the
// OBSERVED_ERROR state before overwriting it with the real return value
// of initialize -- if it's still set to OBSERVED_ERROR in the finally
// block, it means wrapper.initialize threw.
this.wrapperInitData[i]=Transaction.OBSERVED_ERROR;this.wrapperInitData[i]=wrapper.initialize?wrapper.initialize.call(this):null;}finally {if(this.wrapperInitData[i]===Transaction.OBSERVED_ERROR){ // The initializer for wrapper i threw an error; initialize the
// remaining wrappers but silence any exceptions from them to ensure
// that the first error is the one to bubble up.
try{this.initializeAll(i+1);}catch(err){}}}}}, /**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */closeAll:function(startIndex){!this.isInTransaction()?"development"!=='production'?invariant(false,'Transaction.closeAll(): Cannot close transaction when none are open.'):invariant(false):undefined;var transactionWrappers=this.transactionWrappers;for(var i=startIndex;i<transactionWrappers.length;i++){var wrapper=transactionWrappers[i];var initData=this.wrapperInitData[i];var errorThrown;try{ // Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// wrapper.close threw.
errorThrown=true;if(initData!==Transaction.OBSERVED_ERROR&&wrapper.close){wrapper.close.call(this,initData);}errorThrown=false;}finally {if(errorThrown){ // The closer for wrapper i threw an error; close the remaining
// wrappers but silence any exceptions from them to ensure that the
// first error is the one to bubble up.
try{this.closeAll(i+1);}catch(e){}}}}this.wrapperInitData.length=0;}};var Transaction={Mixin:Mixin, /**
   * Token to look for to determine if an error occurred.
   */OBSERVED_ERROR:{}};module.exports=Transaction;},{"144":144}],101:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */'use strict';var ViewportMetrics={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(scrollPosition){ViewportMetrics.currentScrollLeft=scrollPosition.x;ViewportMetrics.currentScrollTop=scrollPosition.y;}};module.exports=ViewportMetrics;},{}],102:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 */'use strict';var invariant=_dereq_(144); /**
 *
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */function accumulateInto(current,next){!(next!=null)?"development"!=='production'?invariant(false,'accumulateInto(...): Accumulated items must not be null or undefined.'):invariant(false):undefined;if(current==null){return next;} // Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
var currentIsArray=Array.isArray(current);var nextIsArray=Array.isArray(next);if(currentIsArray&&nextIsArray){current.push.apply(current,next);return current;}if(currentIsArray){current.push(next);return current;}if(nextIsArray){ // A bit too dangerous to mutate `next`.
return [current].concat(next);}return [current,next];}module.exports=accumulateInto;},{"144":144}],103:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 */'use strict';var MOD=65521; // adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function adler32(data){var a=1;var b=0;var i=0;var l=data.length;var m=l&~0x3;while(i<m){for(;i<Math.min(i+4096,m);i+=4){b+=(a+=data.charCodeAt(i))+(a+=data.charCodeAt(i+1))+(a+=data.charCodeAt(i+2))+(a+=data.charCodeAt(i+3));}a%=MOD;b%=MOD;}for(;i<l;i++){b+=a+=data.charCodeAt(i);}a%=MOD;b%=MOD;return a|b<<16;}module.exports=adler32;},{}],104:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule canDefineProperty
 */'use strict';var canDefineProperty=false;if("development"!=='production'){try{Object.defineProperty({},'x',{get:function(){}});canDefineProperty=true;}catch(x){ // IE will fail on defineProperty
}}module.exports=canDefineProperty;},{}],105:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 * @typechecks static-only
 */'use strict';var CSSProperty=_dereq_(4);var isUnitlessNumber=CSSProperty.isUnitlessNumber; /**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */function dangerousStyleValue(name,value){ // Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
var isEmpty=value==null||typeof value==='boolean'||value==='';if(isEmpty){return '';}var isNonNumeric=isNaN(value);if(isNonNumeric||value===0||isUnitlessNumber.hasOwnProperty(name)&&isUnitlessNumber[name]){return ''+value; // cast to string
}if(typeof value==='string'){value=value.trim();}return value+'px';}module.exports=dangerousStyleValue;},{"4":4}],106:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule deprecated
 */'use strict';var assign=_dereq_(23);var warning=_dereq_(155); /**
 * This will log a single deprecation notice per function and forward the call
 * on to the new API.
 *
 * @param {string} fnName The name of the function
 * @param {string} newModule The module that fn will exist in
 * @param {string} newPackage The module that fn will exist in
 * @param {*} ctx The context this forwarded call should run in
 * @param {function} fn The function to forward on to
 * @return {function} The function that will warn once and then call fn
 */function deprecated(fnName,newModule,newPackage,ctx,fn){var warned=false;if("development"!=='production'){var newFn=function(){"development"!=='production'?warning(warned, // Require examples in this string must be split to prevent React's
// build tools from mistaking them for real requires.
// Otherwise the build tools will attempt to build a '%s' module.
'React.%s is deprecated. Please use %s.%s from require'+'(\'%s\') '+'instead.',fnName,newModule,fnName,newPackage):undefined;warned=true;return fn.apply(ctx,arguments);}; // We need to make sure all properties of the original fn are copied over.
// In particular, this is needed to support PropTypes
return assign(newFn,fn);}return fn;}module.exports=deprecated;},{"155":155,"23":23}],107:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule escapeTextContentForBrowser
 */'use strict';var ESCAPE_LOOKUP={'&':'&amp;','>':'&gt;','<':'&lt;','"':'&quot;','\'':'&#x27;'};var ESCAPE_REGEX=/[&><"']/g;function escaper(match){return ESCAPE_LOOKUP[match];} /**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */function escapeTextContentForBrowser(text){return (''+text).replace(ESCAPE_REGEX,escaper);}module.exports=escapeTextContentForBrowser;},{}],108:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findDOMNode
 * @typechecks static-only
 */'use strict';var ReactCurrentOwner=_dereq_(34);var ReactInstanceMap=_dereq_(62);var ReactMount=_dereq_(65);var invariant=_dereq_(144);var warning=_dereq_(155); /**
 * Returns the DOM node rendered by this element.
 *
 * @param {ReactComponent|DOMElement} componentOrElement
 * @return {?DOMElement} The root node of this element.
 */function findDOMNode(componentOrElement){if("development"!=='production'){var owner=ReactCurrentOwner.current;if(owner!==null){"development"!=='production'?warning(owner._warnedAboutRefsInRender,'%s is accessing getDOMNode or findDOMNode inside its render(). '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',owner.getName()||'A component'):undefined;owner._warnedAboutRefsInRender=true;}}if(componentOrElement==null){return null;}if(componentOrElement.nodeType===1){return componentOrElement;}if(ReactInstanceMap.has(componentOrElement)){return ReactMount.getNodeFromInstance(componentOrElement);}!(componentOrElement.render==null||typeof componentOrElement.render!=='function')?"development"!=='production'?invariant(false,'findDOMNode was called on an unmounted component.'):invariant(false):undefined;!false?"development"!=='production'?invariant(false,'Element appears to be neither ReactComponent nor DOMNode (keys: %s)',Object.keys(componentOrElement)):invariant(false):undefined;}module.exports=findDOMNode;},{"144":144,"155":155,"34":34,"62":62,"65":65}],109:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 */'use strict';var traverseAllChildren=_dereq_(127);var warning=_dereq_(155); /**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 */function flattenSingleChildIntoContext(traverseContext,child,name){ // We found a component instance.
var result=traverseContext;var keyUnique=result[name]===undefined;if("development"!=='production'){"development"!=='production'?warning(keyUnique,'flattenChildren(...): Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, only '+'the first child will be used.',name):undefined;}if(keyUnique&&child!=null){result[name]=child;}} /**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */function flattenChildren(children){if(children==null){return children;}var result={};traverseAllChildren(children,flattenSingleChildIntoContext,result);return result;}module.exports=flattenChildren;},{"127":127,"155":155}],110:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 */'use strict'; /**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */var forEachAccumulated=function(arr,cb,scope){if(Array.isArray(arr)){arr.forEach(cb,scope);}else if(arr){cb.call(scope,arr);}};module.exports=forEachAccumulated;},{}],111:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 * @typechecks static-only
 */'use strict'; /**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */function getEventCharCode(nativeEvent){var charCode;var keyCode=nativeEvent.keyCode;if('charCode' in nativeEvent){charCode=nativeEvent.charCode; // FF does not set `charCode` for the Enter-key, check against `keyCode`.
if(charCode===0&&keyCode===13){charCode=13;}}else { // IE8 does not implement `charCode`, but `keyCode` has the correct value.
charCode=keyCode;} // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
if(charCode>=32||charCode===13){return charCode;}return 0;}module.exports=getEventCharCode;},{}],112:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 * @typechecks static-only
 */'use strict';var getEventCharCode=_dereq_(111); /**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var normalizeKey={'Esc':'Escape','Spacebar':' ','Left':'ArrowLeft','Up':'ArrowUp','Right':'ArrowRight','Down':'ArrowDown','Del':'Delete','Win':'OS','Menu':'ContextMenu','Apps':'ContextMenu','Scroll':'ScrollLock','MozPrintableKey':'Unidentified'}; /**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var translateToKey={8:'Backspace',9:'Tab',12:'Clear',13:'Enter',16:'Shift',17:'Control',18:'Alt',19:'Pause',20:'CapsLock',27:'Escape',32:' ',33:'PageUp',34:'PageDown',35:'End',36:'Home',37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',45:'Insert',46:'Delete',112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',144:'NumLock',145:'ScrollLock',224:'Meta'}; /**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */function getEventKey(nativeEvent){if(nativeEvent.key){ // Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var key=normalizeKey[nativeEvent.key]||nativeEvent.key;if(key!=='Unidentified'){return key;}} // Browser does not implement `key`, polyfill as much of it as we can.
if(nativeEvent.type==='keypress'){var charCode=getEventCharCode(nativeEvent); // The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return charCode===13?'Enter':String.fromCharCode(charCode);}if(nativeEvent.type==='keydown'||nativeEvent.type==='keyup'){ // While user keyboard layout determines the actual meaning of each
// `keyCode` value, almost all function keys have a universal value.
return translateToKey[nativeEvent.keyCode]||'Unidentified';}return '';}module.exports=getEventKey;},{"111":111}],113:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 * @typechecks static-only
 */'use strict'; /**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */var modifierKeyToProp={'Alt':'altKey','Control':'ctrlKey','Meta':'metaKey','Shift':'shiftKey'}; // IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg){var syntheticEvent=this;var nativeEvent=syntheticEvent.nativeEvent;if(nativeEvent.getModifierState){return nativeEvent.getModifierState(keyArg);}var keyProp=modifierKeyToProp[keyArg];return keyProp?!!nativeEvent[keyProp]:false;}function getEventModifierState(nativeEvent){return modifierStateGetter;}module.exports=getEventModifierState;},{}],114:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 * @typechecks static-only
 */'use strict'; /**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */function getEventTarget(nativeEvent){var target=nativeEvent.target||nativeEvent.srcElement||window; // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return target.nodeType===3?target.parentNode:target;}module.exports=getEventTarget;},{}],115:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getIteratorFn
 * @typechecks static-only
 */'use strict'; /* global Symbol */var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator'; // Before Symbol spec.
/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}module.exports=getIteratorFn;},{}],116:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */'use strict'; /**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function getLeafNode(node){while(node&&node.firstChild){node=node.firstChild;}return node;} /**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function getSiblingNode(node){while(node){if(node.nextSibling){return node.nextSibling;}node=node.parentNode;}} /**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function getNodeForCharacterOffset(root,offset){var node=getLeafNode(root);var nodeStart=0;var nodeEnd=0;while(node){if(node.nodeType===3){nodeEnd=nodeStart+node.textContent.length;if(nodeStart<=offset&&nodeEnd>=offset){return {node:node,offset:offset-nodeStart};}nodeStart=nodeEnd;}node=getLeafNode(getSiblingNode(node));}}module.exports=getNodeForCharacterOffset;},{}],117:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */'use strict';var ExecutionEnvironment=_dereq_(130);var contentKey=null; /**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */function getTextContentAccessor(){if(!contentKey&&ExecutionEnvironment.canUseDOM){ // Prefer textContent to innerText because many browsers support both but
// SVG <text> elements don't support innerText even when <div> does.
contentKey='textContent' in document.documentElement?'textContent':'innerText';}return contentKey;}module.exports=getTextContentAccessor;},{"130":130}],118:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 * @typechecks static-only
 */'use strict';var ReactCompositeComponent=_dereq_(33);var ReactEmptyComponent=_dereq_(54);var ReactNativeComponent=_dereq_(68);var assign=_dereq_(23);var invariant=_dereq_(144);var warning=_dereq_(155); // To avoid a cyclic dependency, we create the final class in this module
var ReactCompositeComponentWrapper=function(){};assign(ReactCompositeComponentWrapper.prototype,ReactCompositeComponent.Mixin,{_instantiateReactComponent:instantiateReactComponent});function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';} /**
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 *
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */function isInternalComponentType(type){return typeof type==='function'&&typeof type.prototype!=='undefined'&&typeof type.prototype.mountComponent==='function'&&typeof type.prototype.receiveComponent==='function';} /**
 * Given a ReactNode, create an instance that will actually be mounted.
 *
 * @param {ReactNode} node
 * @return {object} A new instance of the element's constructor.
 * @protected
 */function instantiateReactComponent(node){var instance;if(node===null||node===false){instance=new ReactEmptyComponent(instantiateReactComponent);}else if(typeof node==='object'){var element=node;!(element&&(typeof element.type==='function'||typeof element.type==='string'))?"development"!=='production'?invariant(false,'Element type is invalid: expected a string (for built-in components) '+'or a class/function (for composite components) but got: %s.%s',element.type==null?element.type:typeof element.type,getDeclarationErrorAddendum(element._owner)):invariant(false):undefined; // Special case string values
if(typeof element.type==='string'){instance=ReactNativeComponent.createInternalComponent(element);}else if(isInternalComponentType(element.type)){ // This is temporarily available for custom components that are not string
// representations. I.e. ART. Once those are updated to use the string
// representation, we can drop this code path.
instance=new element.type(element);}else {instance=new ReactCompositeComponentWrapper();}}else if(typeof node==='string'||typeof node==='number'){instance=ReactNativeComponent.createInstanceForText(node);}else {!false?"development"!=='production'?invariant(false,'Encountered invalid React node of type %s',typeof node):invariant(false):undefined;}if("development"!=='production'){"development"!=='production'?warning(typeof instance.construct==='function'&&typeof instance.mountComponent==='function'&&typeof instance.receiveComponent==='function'&&typeof instance.unmountComponent==='function','Only React Components can be mounted.'):undefined;} // Sets up the instance. This can probably just move into the constructor now.
instance.construct(node); // These two fields are used by the DOM and ART diffing algorithms
// respectively. Instead of using expandos on components, we should be
// storing the state needed by the diffing algorithms elsewhere.
instance._mountIndex=0;instance._mountImage=null;if("development"!=='production'){instance._isOwnerNecessary=false;instance._warnedAboutRefsInRender=false;} // Internal instances should fully constructed at this point, so they should
// not get any new fields added to them at this point.
if("development"!=='production'){if(Object.preventExtensions){Object.preventExtensions(instance);}}return instance;}module.exports=instantiateReactComponent;},{"144":144,"155":155,"23":23,"33":33,"54":54,"68":68}],119:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */'use strict';var ExecutionEnvironment=_dereq_(130);var useHasFeature;if(ExecutionEnvironment.canUseDOM){useHasFeature=document.implementation&&document.implementation.hasFeature&& // always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
document.implementation.hasFeature('','')!==true;} /**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported(eventNameSuffix,capture){if(!ExecutionEnvironment.canUseDOM||capture&&!('addEventListener' in document)){return false;}var eventName='on'+eventNameSuffix;var isSupported=eventName in document;if(!isSupported){var element=document.createElement('div');element.setAttribute(eventName,'return;');isSupported=typeof element[eventName]==='function';}if(!isSupported&&useHasFeature&&eventNameSuffix==='wheel'){ // This is the only way to test support for the `wheel` event in IE9+.
isSupported=document.implementation.hasFeature('Events.wheel','3.0');}return isSupported;}module.exports=isEventSupported;},{"130":130}],120:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 */'use strict'; /**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */var supportedInputTypes={'color':true,'date':true,'datetime':true,'datetime-local':true,'email':true,'month':true,'number':true,'password':true,'range':true,'search':true,'tel':true,'text':true,'time':true,'url':true,'week':true};function isTextInputElement(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&supportedInputTypes[elem.type]||nodeName==='textarea');}module.exports=isTextInputElement;},{}],121:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule onlyChild
 */'use strict';var ReactElement=_dereq_(52);var invariant=_dereq_(144); /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection. The current implementation of this
 * function assumes that a single child gets passed without a wrapper, but the
 * purpose of this helper function is to abstract away the particular structure
 * of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactComponent} The first and only `ReactComponent` contained in the
 * structure.
 */function onlyChild(children){!ReactElement.isValidElement(children)?"development"!=='production'?invariant(false,'onlyChild must be passed a children with exactly one child.'):invariant(false):undefined;return children;}module.exports=onlyChild;},{"144":144,"52":52}],122:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule quoteAttributeValueForBrowser
 */'use strict';var escapeTextContentForBrowser=_dereq_(107); /**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */function quoteAttributeValueForBrowser(value){return '"'+escapeTextContentForBrowser(value)+'"';}module.exports=quoteAttributeValueForBrowser;},{"107":107}],123:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule renderSubtreeIntoContainer
*/'use strict';var ReactMount=_dereq_(65);module.exports=ReactMount.renderSubtreeIntoContainer;},{"65":65}],124:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */ /* globals MSApp */'use strict';var ExecutionEnvironment=_dereq_(130);var WHITESPACE_TEST=/^[ \r\n\t\f]/;var NONVISIBLE_TEST=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/; /**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */var setInnerHTML=function(node,html){node.innerHTML=html;}; // Win8 apps: Allow all html to be inserted
if(typeof MSApp!=='undefined'&&MSApp.execUnsafeLocalFunction){setInnerHTML=function(node,html){MSApp.execUnsafeLocalFunction(function(){node.innerHTML=html;});};}if(ExecutionEnvironment.canUseDOM){ // IE8: When updating a just created node with innerHTML only leading
// whitespace is removed. When updating an existing node with innerHTML
// whitespace in root TextNodes is also collapsed.
// @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html
// Feature detection; only IE8 is known to behave improperly like this.
var testElement=document.createElement('div');testElement.innerHTML=' ';if(testElement.innerHTML===''){setInnerHTML=function(node,html){ // Magic theory: IE8 supposedly differentiates between added and updated
// nodes when processing innerHTML, innerHTML on updated nodes suffers
// from worse whitespace behavior. Re-adding a node like this triggers
// the initial and more favorable whitespace behavior.
// TODO: What to do on a detached node?
if(node.parentNode){node.parentNode.replaceChild(node,node);} // We also implement a workaround for non-visible tags disappearing into
// thin air on IE8, this only happens if there is no visible text
// in-front of the non-visible tags. Piggyback on the whitespace fix
// and simply check if any non-visible tags appear in the source.
if(WHITESPACE_TEST.test(html)||html[0]==='<'&&NONVISIBLE_TEST.test(html)){ // Recover leading whitespace by temporarily prepending any character.
// \uFEFF has the potential advantage of being zero-width/invisible.
// UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
// in hopes that this is preserved even if "\uFEFF" is transformed to
// the actual Unicode character (by Babel, for example).
// https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
node.innerHTML=String.fromCharCode(0xFEFF)+html; // deleteData leaves an empty `TextNode` which offsets the index of all
// children. Definitely want to avoid this.
var textNode=node.firstChild;if(textNode.data.length===1){node.removeChild(textNode);}else {textNode.deleteData(0,1);}}else {node.innerHTML=html;}};}}module.exports=setInnerHTML;},{"130":130}],125:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setTextContent
 */'use strict';var ExecutionEnvironment=_dereq_(130);var escapeTextContentForBrowser=_dereq_(107);var setInnerHTML=_dereq_(124); /**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */var setTextContent=function(node,text){node.textContent=text;};if(ExecutionEnvironment.canUseDOM){if(!('textContent' in document.documentElement)){setTextContent=function(node,text){setInnerHTML(node,escapeTextContentForBrowser(text));};}}module.exports=setTextContent;},{"107":107,"124":124,"130":130}],126:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
 * @typechecks static-only
 */'use strict'; /**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */function shouldUpdateReactComponent(prevElement,nextElement){var prevEmpty=prevElement===null||prevElement===false;var nextEmpty=nextElement===null||nextElement===false;if(prevEmpty||nextEmpty){return prevEmpty===nextEmpty;}var prevType=typeof prevElement;var nextType=typeof nextElement;if(prevType==='string'||prevType==='number'){return nextType==='string'||nextType==='number';}else {return nextType==='object'&&prevElement.type===nextElement.type&&prevElement.key===nextElement.key;}return false;}module.exports=shouldUpdateReactComponent;},{}],127:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */'use strict';var ReactCurrentOwner=_dereq_(34);var ReactElement=_dereq_(52);var ReactInstanceHandles=_dereq_(61);var getIteratorFn=_dereq_(115);var invariant=_dereq_(144);var warning=_dereq_(155);var SEPARATOR=ReactInstanceHandles.SEPARATOR;var SUBSEPARATOR=':'; /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */var userProvidedKeyEscaperLookup={'=':'=0','.':'=1',':':'=2'};var userProvidedKeyEscapeRegex=/[=.:]/g;var didWarnAboutMaps=false;function userProvidedKeyEscaper(match){return userProvidedKeyEscaperLookup[match];} /**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */function getComponentKey(component,index){if(component&&component.key!=null){ // Explicit key
return wrapUserProvidedKey(component.key);} // Implicit key determined by the index in the set
return index.toString(36);} /**
 * Escape a component key so that it is safe to use in a reactid.
 *
 * @param {*} text Component key to be escaped.
 * @return {string} An escaped string.
 */function escapeUserProvidedKey(text){return (''+text).replace(userProvidedKeyEscapeRegex,userProvidedKeyEscaper);} /**
 * Wrap a `key` value explicitly provided by the user to distinguish it from
 * implicitly-generated keys generated by a component's index in its parent.
 *
 * @param {string} key Value of a user-provided `key` attribute
 * @return {string}
 */function wrapUserProvidedKey(key){return '$'+escapeUserProvidedKey(key);} /**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildrenImpl(children,nameSoFar,callback,traverseContext){var type=typeof children;if(type==='undefined'||type==='boolean'){ // All of the above are perceived as null.
children=null;}if(children===null||type==='string'||type==='number'||ReactElement.isValidElement(children)){callback(traverseContext,children, // If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
nameSoFar===''?SEPARATOR+getComponentKey(children,0):nameSoFar);return 1;}var child;var nextName;var subtreeCount=0; // Count of children found in the current subtree.
var nextNamePrefix=nameSoFar===''?SEPARATOR:nameSoFar+SUBSEPARATOR;if(Array.isArray(children)){for(var i=0;i<children.length;i++){child=children[i];nextName=nextNamePrefix+getComponentKey(child,i);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else {var iteratorFn=getIteratorFn(children);if(iteratorFn){var iterator=iteratorFn.call(children);var step;if(iteratorFn!==children.entries){var ii=0;while(!(step=iterator.next()).done){child=step.value;nextName=nextNamePrefix+getComponentKey(child,ii++);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else {if("development"!=='production'){"development"!=='production'?warning(didWarnAboutMaps,'Using Maps as children is not yet fully supported. It is an '+'experimental feature that might be removed. Convert it to a '+'sequence / iterable of keyed ReactElements instead.'):undefined;didWarnAboutMaps=true;} // Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){child=entry[1];nextName=nextNamePrefix+wrapUserProvidedKey(entry[0])+SUBSEPARATOR+getComponentKey(child,0);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}}}else if(type==='object'){var addendum='';if("development"!=='production'){addendum=' If you meant to render a collection of children, use an array '+'instead or wrap the object using createFragment(object) from the '+'React add-ons.';if(children._isReactElement){addendum=' It looks like you\'re using an element created by a different '+'version of React. Make sure to use only one copy of React.';}if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){addendum+=' Check the render method of `'+name+'`.';}}}var childrenString=String(children);!false?"development"!=='production'?invariant(false,'Objects are not valid as a React child (found: %s).%s',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):invariant(false):undefined;}}return subtreeCount;} /**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildren(children,callback,traverseContext){if(children==null){return 0;}return traverseAllChildrenImpl(children,'',callback,traverseContext);}module.exports=traverseAllChildren;},{"115":115,"144":144,"155":155,"34":34,"52":52,"61":61}],128:[function(_dereq_,module,exports){ /**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule validateDOMNesting
 */'use strict';var assign=_dereq_(23);var emptyFunction=_dereq_(136);var warning=_dereq_(155);var validateDOMNesting=emptyFunction;if("development"!=='production'){ // This validation code was written based on the HTML5 parsing spec:
// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
//
// Note: this does not catch all invalid nesting, nor does it try to (as it's
// not clear what practical benefit doing so provides); instead, we warn only
// for cases where the parser will give a parse tree differing from what React
// intended. For example, <b><div></div></b> is invalid but we don't warn
// because it still parses correctly; we do warn for other cases like nested
// <p> tags where the beginning of the second element implicitly closes the
// first, causing a confusing mess.
// https://html.spec.whatwg.org/multipage/syntax.html#special
var specialTags=['address','applet','area','article','aside','base','basefont','bgsound','blockquote','body','br','button','caption','center','col','colgroup','dd','details','dir','div','dl','dt','embed','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','iframe','img','input','isindex','li','link','listing','main','marquee','menu','menuitem','meta','nav','noembed','noframes','noscript','object','ol','p','param','plaintext','pre','script','section','select','source','style','summary','table','tbody','td','template','textarea','tfoot','th','thead','title','tr','track','ul','wbr','xmp']; // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
var inScopeTags=['applet','caption','html','table','td','th','marquee','object','template', // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
'foreignObject','desc','title']; // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
var buttonScopeTags=inScopeTags.concat(['button']); // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
var impliedEndTags=['dd','dt','li','option','optgroup','p','rp','rt'];var emptyAncestorInfo={parentTag:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};var updatedAncestorInfo=function(oldInfo,tag,instance){var ancestorInfo=assign({},oldInfo||emptyAncestorInfo);var info={tag:tag,instance:instance};if(inScopeTags.indexOf(tag)!==-1){ancestorInfo.aTagInScope=null;ancestorInfo.buttonTagInScope=null;ancestorInfo.nobrTagInScope=null;}if(buttonScopeTags.indexOf(tag)!==-1){ancestorInfo.pTagInButtonScope=null;} // See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
if(specialTags.indexOf(tag)!==-1&&tag!=='address'&&tag!=='div'&&tag!=='p'){ancestorInfo.listItemTagAutoclosing=null;ancestorInfo.dlItemTagAutoclosing=null;}ancestorInfo.parentTag=info;if(tag==='form'){ancestorInfo.formTag=info;}if(tag==='a'){ancestorInfo.aTagInScope=info;}if(tag==='button'){ancestorInfo.buttonTagInScope=info;}if(tag==='nobr'){ancestorInfo.nobrTagInScope=info;}if(tag==='p'){ancestorInfo.pTagInButtonScope=info;}if(tag==='li'){ancestorInfo.listItemTagAutoclosing=info;}if(tag==='dd'||tag==='dt'){ancestorInfo.dlItemTagAutoclosing=info;}return ancestorInfo;}; /**
   * Returns whether
   */var isTagValidWithParent=function(tag,parentTag){ // First, let's check if we're in an unusual parsing mode...
switch(parentTag){ // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case 'select':return tag==='option'||tag==='optgroup'||tag==='#text';case 'optgroup':return tag==='option'||tag==='#text'; // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case 'option':return tag==='#text'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case 'tr':return tag==='th'||tag==='td'||tag==='style'||tag==='script'||tag==='template'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case 'tbody':case 'thead':case 'tfoot':return tag==='tr'||tag==='style'||tag==='script'||tag==='template'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case 'colgroup':return tag==='col'||tag==='template'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case 'table':return tag==='caption'||tag==='colgroup'||tag==='tbody'||tag==='tfoot'||tag==='thead'||tag==='style'||tag==='script'||tag==='template'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case 'head':return tag==='base'||tag==='basefont'||tag==='bgsound'||tag==='link'||tag==='meta'||tag==='title'||tag==='noscript'||tag==='noframes'||tag==='style'||tag==='script'||tag==='template'; // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case 'html':return tag==='head'||tag==='body';} // Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(tag){case 'h1':case 'h2':case 'h3':case 'h4':case 'h5':case 'h6':return parentTag!=='h1'&&parentTag!=='h2'&&parentTag!=='h3'&&parentTag!=='h4'&&parentTag!=='h5'&&parentTag!=='h6';case 'rp':case 'rt':return impliedEndTags.indexOf(parentTag)===-1;case 'caption':case 'col':case 'colgroup':case 'frame':case 'head':case 'tbody':case 'td':case 'tfoot':case 'th':case 'thead':case 'tr': // These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return parentTag==null;}return true;}; /**
   * Returns whether
   */var findInvalidAncestorForTag=function(tag,ancestorInfo){switch(tag){case 'address':case 'article':case 'aside':case 'blockquote':case 'center':case 'details':case 'dialog':case 'dir':case 'div':case 'dl':case 'fieldset':case 'figcaption':case 'figure':case 'footer':case 'header':case 'hgroup':case 'main':case 'menu':case 'nav':case 'ol':case 'p':case 'section':case 'summary':case 'ul':case 'pre':case 'listing':case 'table':case 'hr':case 'xmp':case 'h1':case 'h2':case 'h3':case 'h4':case 'h5':case 'h6':return ancestorInfo.pTagInButtonScope;case 'form':return ancestorInfo.formTag||ancestorInfo.pTagInButtonScope;case 'li':return ancestorInfo.listItemTagAutoclosing;case 'dd':case 'dt':return ancestorInfo.dlItemTagAutoclosing;case 'button':return ancestorInfo.buttonTagInScope;case 'a': // Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return ancestorInfo.aTagInScope;case 'nobr':return ancestorInfo.nobrTagInScope;}return null;}; /**
   * Given a ReactCompositeComponent instance, return a list of its recursive
   * owners, starting at the root and ending with the instance itself.
   */var findOwnerStack=function(instance){if(!instance){return [];}var stack=[]; /*eslint-disable space-after-keywords */do { /*eslint-enable space-after-keywords */stack.push(instance);}while(instance=instance._currentElement._owner);stack.reverse();return stack;};var didWarn={};validateDOMNesting=function(childTag,childInstance,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.parentTag;var parentTag=parentInfo&&parentInfo.tag;var invalidParent=isTagValidWithParent(childTag,parentTag)?null:parentInfo;var invalidAncestor=invalidParent?null:findInvalidAncestorForTag(childTag,ancestorInfo);var problematic=invalidParent||invalidAncestor;if(problematic){var ancestorTag=problematic.tag;var ancestorInstance=problematic.instance;var childOwner=childInstance&&childInstance._currentElement._owner;var ancestorOwner=ancestorInstance&&ancestorInstance._currentElement._owner;var childOwners=findOwnerStack(childOwner);var ancestorOwners=findOwnerStack(ancestorOwner);var minStackLen=Math.min(childOwners.length,ancestorOwners.length);var i;var deepestCommon=-1;for(i=0;i<minStackLen;i++){if(childOwners[i]===ancestorOwners[i]){deepestCommon=i;}else {break;}}var UNKNOWN='(unknown)';var childOwnerNames=childOwners.slice(deepestCommon+1).map(function(inst){return inst.getName()||UNKNOWN;});var ancestorOwnerNames=ancestorOwners.slice(deepestCommon+1).map(function(inst){return inst.getName()||UNKNOWN;});var ownerInfo=[].concat( // If the parent and child instances have a common owner ancestor, start
// with that -- otherwise we just start with the parent's owners.
deepestCommon!==-1?childOwners[deepestCommon].getName()||UNKNOWN:[],ancestorOwnerNames,ancestorTag, // If we're warning about an invalid (non-parent) ancestry, add '...'
invalidAncestor?['...']:[],childOwnerNames,childTag).join(' > ');var warnKey=!!invalidParent+'|'+childTag+'|'+ancestorTag+'|'+ownerInfo;if(didWarn[warnKey]){return;}didWarn[warnKey]=true;if(invalidParent){var info='';if(ancestorTag==='table'&&childTag==='tr'){info+=' Add a <tbody> to your code to match the DOM tree generated by '+'the browser.';}"development"!=='production'?warning(false,'validateDOMNesting(...): <%s> cannot appear as a child of <%s>. '+'See %s.%s',childTag,ancestorTag,ownerInfo,info):undefined;}else {"development"!=='production'?warning(false,'validateDOMNesting(...): <%s> cannot appear as a descendant of '+'<%s>. See %s.',childTag,ancestorTag,ownerInfo):undefined;}}};validateDOMNesting.ancestorInfoContextKey='__validateDOMNesting_ancestorInfo$'+Math.random().toString(36).slice(2);validateDOMNesting.updatedAncestorInfo=updatedAncestorInfo; // For testing
validateDOMNesting.isTagValidInContext=function(tag,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.parentTag;var parentTag=parentInfo&&parentInfo.tag;return isTagValidWithParent(tag,parentTag)&&!findInvalidAncestorForTag(tag,ancestorInfo);};}module.exports=validateDOMNesting;},{"136":136,"155":155,"23":23}],129:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventListener
 * @typechecks
 */'use strict';var emptyFunction=_dereq_(136); /**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */var EventListener={ /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */listen:function(target,eventType,callback){if(target.addEventListener){target.addEventListener(eventType,callback,false);return {remove:function(){target.removeEventListener(eventType,callback,false);}};}else if(target.attachEvent){target.attachEvent('on'+eventType,callback);return {remove:function(){target.detachEvent('on'+eventType,callback);}};}}, /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */capture:function(target,eventType,callback){if(target.addEventListener){target.addEventListener(eventType,callback,true);return {remove:function(){target.removeEventListener(eventType,callback,true);}};}else {if("development"!=='production'){console.error('Attempted to listen to events during the capture phase on a '+'browser that does not support the capture phase. Your application '+'will not receive some events.');}return {remove:emptyFunction};}},registerDefault:function(){}};module.exports=EventListener;},{"136":136}],130:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */'use strict';var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement); /**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */var ExecutionEnvironment={canUseDOM:canUseDOM,canUseWorkers:typeof Worker!=='undefined',canUseEventListeners:canUseDOM&&!!(window.addEventListener||window.attachEvent),canUseViewport:canUseDOM&&!!window.screen,isInWorker:!canUseDOM // For now, this is true - might change in the future.
};module.exports=ExecutionEnvironment;},{}],131:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelize
 * @typechecks
 */"use strict";var _hyphenPattern=/-(.)/g; /**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */function camelize(string){return string.replace(_hyphenPattern,function(_,character){return character.toUpperCase();});}module.exports=camelize;},{}],132:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelizeStyleName
 * @typechecks
 */'use strict';var camelize=_dereq_(131);var msPattern=/^-ms-/; /**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */function camelizeStyleName(string){return camelize(string.replace(msPattern,'ms-'));}module.exports=camelizeStyleName;},{"131":131}],133:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule containsNode
 * @typechecks
 */'use strict';var isTextNode=_dereq_(146); /*eslint-disable no-bitwise */ /**
 * Checks if a given DOM node contains or is another DOM node.
 *
 * @param {?DOMNode} outerNode Outer DOM node.
 * @param {?DOMNode} innerNode Inner DOM node.
 * @return {boolean} True if `outerNode` contains or is `innerNode`.
 */function containsNode(_x,_x2){var _again=true;_function: while(_again){var outerNode=_x,innerNode=_x2;_again=false;if(!outerNode||!innerNode){return false;}else if(outerNode===innerNode){return true;}else if(isTextNode(outerNode)){return false;}else if(isTextNode(innerNode)){_x=outerNode;_x2=innerNode.parentNode;_again=true;continue _function;}else if(outerNode.contains){return outerNode.contains(innerNode);}else if(outerNode.compareDocumentPosition){return !!(outerNode.compareDocumentPosition(innerNode)&16);}else {return false;}}}module.exports=containsNode;},{"146":146}],134:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createArrayFromMixed
 * @typechecks
 */'use strict';var toArray=_dereq_(154); /**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */function hasArrayNature(obj){return  (// not null/false
!!obj&&( // arrays are objects, NodeLists are functions in Safari
typeof obj=='object'||typeof obj=='function')&& // quacks like an array
'length' in obj&& // not window
!('setInterval' in obj)&& // no DOM node should be considered an array-like
// a 'select' element has 'length' and 'item' properties on IE8
typeof obj.nodeType!='number'&&( // a real array
Array.isArray(obj)|| // arguments
'callee' in obj|| // HTMLCollection/NodeList
'item' in obj));} /**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */function createArrayFromMixed(obj){if(!hasArrayNature(obj)){return [obj];}else if(Array.isArray(obj)){return obj.slice();}else {return toArray(obj);}}module.exports=createArrayFromMixed;},{"154":154}],135:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createNodesFromMarkup
 * @typechecks
 */ /*eslint-disable fb-www/unsafe-html*/'use strict';var ExecutionEnvironment=_dereq_(130);var createArrayFromMixed=_dereq_(134);var getMarkupWrap=_dereq_(140);var invariant=_dereq_(144); /**
 * Dummy container used to render all markup.
 */var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null; /**
 * Pattern used by `getNodeName`.
 */var nodeNamePattern=/^\s*<(\w+)/; /**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */function getNodeName(markup){var nodeNameMatch=markup.match(nodeNamePattern);return nodeNameMatch&&nodeNameMatch[1].toLowerCase();} /**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */function createNodesFromMarkup(markup,handleScript){var node=dummyNode;!!!dummyNode?"development"!=='production'?invariant(false,'createNodesFromMarkup dummy not initialized'):invariant(false):undefined;var nodeName=getNodeName(markup);var wrap=nodeName&&getMarkupWrap(nodeName);if(wrap){node.innerHTML=wrap[1]+markup+wrap[2];var wrapDepth=wrap[0];while(wrapDepth--){node=node.lastChild;}}else {node.innerHTML=markup;}var scripts=node.getElementsByTagName('script');if(scripts.length){!handleScript?"development"!=='production'?invariant(false,'createNodesFromMarkup(...): Unexpected <script> element rendered.'):invariant(false):undefined;createArrayFromMixed(scripts).forEach(handleScript);}var nodes=createArrayFromMixed(node.childNodes);while(node.lastChild){node.removeChild(node.lastChild);}return nodes;}module.exports=createNodesFromMarkup;},{"130":130,"134":134,"140":140,"144":144}],136:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */"use strict";function makeEmptyFunction(arg){return function(){return arg;};} /**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */function emptyFunction(){}emptyFunction.thatReturns=makeEmptyFunction;emptyFunction.thatReturnsFalse=makeEmptyFunction(false);emptyFunction.thatReturnsTrue=makeEmptyFunction(true);emptyFunction.thatReturnsNull=makeEmptyFunction(null);emptyFunction.thatReturnsThis=function(){return this;};emptyFunction.thatReturnsArgument=function(arg){return arg;};module.exports=emptyFunction;},{}],137:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyObject
 */'use strict';var emptyObject={};if("development"!=='production'){Object.freeze(emptyObject);}module.exports=emptyObject;},{}],138:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule focusNode
 */'use strict'; /**
 * @param {DOMElement} node input/textarea to focus
 */function focusNode(node){ // IE8 can throw "Can't move focus to the control because it is invisible,
// not enabled, or of a type that does not accept the focus." for all kinds of
// reasons that are too expensive and fragile to test.
try{node.focus();}catch(e){}}module.exports=focusNode;},{}],139:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getActiveElement
 * @typechecks
 */ /* eslint-disable fb-www/typeof-undefined */ /**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 */'use strict';function getActiveElement() /*?DOMElement*/{if(typeof document==='undefined'){return null;}try{return document.activeElement||document.body;}catch(e){return document.body;}}module.exports=getActiveElement;},{}],140:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getMarkupWrap
 */ /*eslint-disable fb-www/unsafe-html */'use strict';var ExecutionEnvironment=_dereq_(130);var invariant=_dereq_(144); /**
 * Dummy container used to detect which wraps are necessary.
 */var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null; /**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */var shouldWrap={};var selectWrap=[1,'<select multiple="true">','</select>'];var tableWrap=[1,'<table>','</table>'];var trWrap=[3,'<table><tbody><tr>','</tr></tbody></table>'];var svgWrap=[1,'<svg xmlns="http://www.w3.org/2000/svg">','</svg>'];var markupWrap={'*':[1,'?<div>','</div>'],'area':[1,'<map>','</map>'],'col':[2,'<table><tbody></tbody><colgroup>','</colgroup></table>'],'legend':[1,'<fieldset>','</fieldset>'],'param':[1,'<object>','</object>'],'tr':[2,'<table><tbody>','</tbody></table>'],'optgroup':selectWrap,'option':selectWrap,'caption':tableWrap,'colgroup':tableWrap,'tbody':tableWrap,'tfoot':tableWrap,'thead':tableWrap,'td':trWrap,'th':trWrap}; // Initialize the SVG elements since we know they'll always need to be wrapped
// consistently. If they are created inside a <div> they will be initialized in
// the wrong namespace (and will not display).
var svgElements=['circle','clipPath','defs','ellipse','g','image','line','linearGradient','mask','path','pattern','polygon','polyline','radialGradient','rect','stop','text','tspan'];svgElements.forEach(function(nodeName){markupWrap[nodeName]=svgWrap;shouldWrap[nodeName]=true;}); /**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */function getMarkupWrap(nodeName){!!!dummyNode?"development"!=='production'?invariant(false,'Markup wrapping node not initialized'):invariant(false):undefined;if(!markupWrap.hasOwnProperty(nodeName)){nodeName='*';}if(!shouldWrap.hasOwnProperty(nodeName)){if(nodeName==='*'){dummyNode.innerHTML='<link />';}else {dummyNode.innerHTML='<'+nodeName+'></'+nodeName+'>';}shouldWrap[nodeName]=!dummyNode.firstChild;}return shouldWrap[nodeName]?markupWrap[nodeName]:null;}module.exports=getMarkupWrap;},{"130":130,"144":144}],141:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getUnboundedScrollPosition
 * @typechecks
 */'use strict'; /**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */function getUnboundedScrollPosition(scrollable){if(scrollable===window){return {x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop};}return {x:scrollable.scrollLeft,y:scrollable.scrollTop};}module.exports=getUnboundedScrollPosition;},{}],142:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenate
 * @typechecks
 */'use strict';var _uppercasePattern=/([A-Z])/g; /**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */function hyphenate(string){return string.replace(_uppercasePattern,'-$1').toLowerCase();}module.exports=hyphenate;},{}],143:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenateStyleName
 * @typechecks
 */'use strict';var hyphenate=_dereq_(142);var msPattern=/^ms-/; /**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */function hyphenateStyleName(string){return hyphenate(string).replace(msPattern,'-ms-');}module.exports=hyphenateStyleName;},{"142":142}],144:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */'use strict'; /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */function invariant(condition,format,a,b,c,d,e,f){if("development"!=='production'){if(format===undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else {var args=[a,b,c,d,e,f];var argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name='Invariant Violation';}error.framesToPop=1; // we don't care about invariant's own frame
throw error;}}module.exports=invariant;},{}],145:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isNode
 * @typechecks
 */ /**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */'use strict';function isNode(object){return !!(object&&(typeof Node==='function'?object instanceof Node:typeof object==='object'&&typeof object.nodeType==='number'&&typeof object.nodeName==='string'));}module.exports=isNode;},{}],146:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextNode
 * @typechecks
 */'use strict';var isNode=_dereq_(145); /**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */function isTextNode(object){return isNode(object)&&object.nodeType==3;}module.exports=isTextNode;},{"145":145}],147:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyMirror
 * @typechecks static-only
 */'use strict';var invariant=_dereq_(144); /**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */var keyMirror=function(obj){var ret={};var key;!(obj instanceof Object&&!Array.isArray(obj))?"development"!=='production'?invariant(false,'keyMirror(...): Argument must be an object.'):invariant(false):undefined;for(key in obj){if(!obj.hasOwnProperty(key)){continue;}ret[key]=key;}return ret;};module.exports=keyMirror;},{"144":144}],148:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyOf
 */ /**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */"use strict";var keyOf=function(oneKeyObj){var key;for(key in oneKeyObj){if(!oneKeyObj.hasOwnProperty(key)){continue;}return key;}return null;};module.exports=keyOf;},{}],149:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule mapObject
 */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty; /**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */function mapObject(object,callback,context){if(!object){return null;}var result={};for(var name in object){if(hasOwnProperty.call(object,name)){result[name]=callback.call(context,object[name],name,object);}}return result;}module.exports=mapObject;},{}],150:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule memoizeStringOnly
 * @typechecks static-only
 */'use strict'; /**
 * Memoizes the return value of a function that accepts one string argument.
 *
 * @param {function} callback
 * @return {function}
 */function memoizeStringOnly(callback){var cache={};return function(string){if(!cache.hasOwnProperty(string)){cache[string]=callback.call(this,string);}return cache[string];};}module.exports=memoizeStringOnly;},{}],151:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performance
 * @typechecks
 */'use strict';var ExecutionEnvironment=_dereq_(130);var performance;if(ExecutionEnvironment.canUseDOM){performance=window.performance||window.msPerformance||window.webkitPerformance;}module.exports=performance||{};},{"130":130}],152:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performanceNow
 * @typechecks
 */'use strict';var performance=_dereq_(151);var performanceNow; /**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */if(performance.now){performanceNow=function(){return performance.now();};}else {performanceNow=function(){return Date.now();};}module.exports=performanceNow;},{"151":151}],153:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty; /**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */function shallowEqual(objA,objB){if(objA===objB){return true;}if(typeof objA!=='object'||objA===null||typeof objB!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;} // Test for A's keys different from B.
var bHasOwnProperty=hasOwnProperty.bind(objB);for(var i=0;i<keysA.length;i++){if(!bHasOwnProperty(keysA[i])||objA[keysA[i]]!==objB[keysA[i]]){return false;}}return true;}module.exports=shallowEqual;},{}],154:[function(_dereq_,module,exports){ /**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule toArray
 * @typechecks
 */'use strict';var invariant=_dereq_(144); /**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */function toArray(obj){var length=obj.length; // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
// old versions of Safari).
!(!Array.isArray(obj)&&(typeof obj==='object'||typeof obj==='function'))?"development"!=='production'?invariant(false,'toArray: Array-like object expected'):invariant(false):undefined;!(typeof length==='number')?"development"!=='production'?invariant(false,'toArray: Object needs a length property'):invariant(false):undefined;!(length===0||length-1 in obj)?"development"!=='production'?invariant(false,'toArray: Object should have keys for indices'):invariant(false):undefined; // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
// without method will throw during the slice call and skip straight to the
// fallback.
if(obj.hasOwnProperty){try{return Array.prototype.slice.call(obj);}catch(e){ // IE < 9 does not support Array#slice on collections objects
}} // Fall back to copying key by key. This assumes all keys have a value,
// so will not preserve sparsely populated inputs.
var ret=Array(length);for(var ii=0;ii<length;ii++){ret[ii]=obj[ii];}return ret;}module.exports=toArray;},{"144":144}],155:[function(_dereq_,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */'use strict';var emptyFunction=_dereq_(136); /**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warning=emptyFunction;if("development"!=='production'){warning=function(condition,format){for(var _len=arguments.length,args=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key];}if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(format.indexOf('Failed Composite propType: ')===0){return; // Ignore CompositeComponent proptype check.
}if(!condition){var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.error(message);}try{ // --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}}};}module.exports=warning;},{"136":136}]},{},[1])(1);});
/**
 * ReactDOM v0.14.7
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
// Based off https://github.com/ForbesLindesay/umd/blob/master/template.js
;(function (f) {
  // CommonJS
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f(require('react'));

    // RequireJS
  } else if (typeof define === "function" && define.amd) {
      define(['react'], f);

      // <script>
    } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          // works providing we're not in "use strict";
          // needed for Java 8 Nashorn
          // see https://github.com/facebook/react/issues/3037
          g = this;
        }
        g.ReactDOM = f(g.React);
      }
})(function (React) {
  return React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
});
var __extends = this && this.__extends || function (t, e) {
  function n() {
    this.constructor = t;
  }for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
},
    Beef = function () {
  function t() {}return t.service = function (t, e) {
    return void 0 === e && (e = null), null !== e && (this.services[t] = e), this.services[t];
  }, t.setup = function (t) {
    this.setupCallbacks.push(t);
  }, t.start = function () {
    this.started || (this.setupCallbacks.forEach(function (t) {
      t();
    }), this.started = !0);
  }, t.started = !1, t.Actions = function () {
    return t.start(), { create: function (t) {
        return Actions.create(t);
      } };
  }, t.Api = function () {
    return t.start(), t.service(ApiService.SERVICE_ID);
  }, t.Store = function () {
    return t.start(), { create: function (t) {
        var e = $.extend(!0, new Store(), t);return e.actions(), e;
      } };
  }, t.Router = function () {
    return t.start(), t.service(RoutingService.SERVICE_ID);
  }, t.services = {}, t.setupCallbacks = [], t;
}(),
    BaseApp = function () {
  function t() {}return t.prototype.setup = function () {}, t.prototype.run = function () {}, t;
}(),
    BaseService = function () {
  function t() {}return t;
}(),
    Store = function () {
  function t() {
    this.rows = {}, this.actions = function () {}, this.dispatchIndex = null;
  }return t.prototype.listen = function (t, e) {
    $(window).on(t, e);
  }, t.prototype.ignore = function (t, e) {
    $(window).off(t, e);
  }, t.prototype.emit = function (t, e) {
    void 0 === e && (e = !1), $(window).trigger(t, [e]);
  }, t.prototype.upsertRow = function (t, e, n, i, r) {
    void 0 === r && (r = !1);var o = !1;"undefined" == typeof this.rows[t] && (this.rows[t] = []);var a = this.rows[t],
        u = this;a.forEach(function (t, s) {
      "undefined" != typeof t[e] && t[e] === n && ("undefined" == typeof a[s] && (a[s] = {}), a[s] = r ? a[s] = i : u.merge(a[s], i), o = !0);
    }), o || this.rows[t].push(i);
  }, t.prototype.removeRow = function (t, e, n) {
    if ("undefined" != typeof this.rows[t]) {
      var i = this.rows[t],
          r = [];if (i.forEach(function (t, i) {
        "undefined" != typeof t[e] && t[e] == n && r.push(i);
      }), 0 !== r.length) for (var o = 0; o < r.length; o++) this.rows[t].splice(r[o], 1);
    }
  }, t.prototype.removeRows = function (t, e, n) {
    var i = this;n.forEach(function (n) {
      i.removeRow(t, e, n);
    });
  }, t.prototype.clearAll = function (t) {
    this.rows[t] = [];
  }, t.prototype.getRows = function (t, e) {
    return void 0 === e && (e = !0), "undefined" != typeof this.rows[t] ? e ? this.rows[t] : this.rows[t].slice(0) : [];
  }, t.prototype.sanitizeAndValidate = function (t, e) {
    var n = this.sanitize(t, e, !1),
        i = this.validate(n, e);return i === !0 ? n : i;
  }, t.prototype.validate = function (t, e) {
    var n = [];for (var i in e) if ("undefined" != typeof e[i].validation) for (var r in e[i].validation) {
      if (n.length > 0) break;var o = t[i],
          a = e[i].label ? e[i].label : i;switch (r) {case "required":
          "undefined" != typeof o && null !== o && "" !== o || n.push(a + " is required");break;case "minLength":
          o.length < e[i].validation[r] && n.push(a + " must be at least " + e[i].validation[r] + " characters");break;case "maxLength":
          o.length > e[i].validation[r] && n.push(a + " must be at under " + e[i].validation[r] + " characters");break;default:
          if ("function" == typeof e[i].validation[r]) {
            var u = e[i].validation[r](o);u !== !0 && n.concat(u);
          }}
    }return n.length > 0 ? n : !0;
  }, t.prototype.sanitize = function (t, e, n) {
    void 0 === n && (n = !1);var i = {},
        r = jQuery.extend(!0, {}, t);for (var o in e) i[o] = this.sanitizeField(o, r, e, n);return i;
  }, t.prototype.merge = function (t, e, n) {
    void 0 === n && (n = 1);var i = this;if (3 === n) return e;for (var r in e) try {
      e[r].constructor === Object ? t[r] = i.merge(t[r], e[r], n + 1) : t[r] = e[r];
    } catch (o) {
      t[r] = e[r];
    }return t;
  }, t.prototype.sortBy = function (t, e) {
    return void 0 === e && (e = "desc"), function (n, i) {
      return i[t] && !n[t] || i[t] && n[t] && i[t] > n[t] ? "desc" === e.toLowerCase() ? 1 : -1 : !i[t] && n[t] || i[t] && n[t] && i[t] < n[t] ? "desc" === e.toLowerCase() ? -1 : 1 : i[t] && n[t] && i[t] == n[t] ? 0 : i[t] && !n[t] ? 0 : void 0;
    };
  }, t.prototype.money = function (t) {
    return t.toFixed(2);
  }, t.prototype.uuid = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var e = 16 * Math.random() | 0,
          n = "x" == t ? e : 3 & e | 8;return n.toString(16);
    });
  }, t.string = function (t) {
    return void 0 === t && (t = {}), $.extend(!0, { type: "string" }, t);
  }, t["int"] = function (t) {
    return void 0 === t && (t = {}), $.extend(!0, { type: "int" }, t);
  }, t["double"] = function (t) {
    return void 0 === t && (t = {}), $.extend(!0, { type: "double" }, t);
  }, t.bool = function (t) {
    return void 0 === t && (t = {}), $.extend(!0, { type: "bool" }, t);
  }, t["float"] = function (t) {
    return void 0 === t && (t = {}), $.extend(!0, { type: "float" }, t);
  }, t.array = function (t) {
    return void 0 === t && (t = {}), $.extend(!0, { type: "array", schema: null }, t);
  }, t.object = function (t) {
    return void 0 === t && (t = {}), $.extend(!0, { type: "object", schema: null }, t);
  }, t.datetime = function (t) {
    return void 0 === t && (t = {}), $.extend(!0, { type: "datetime", schema: null, format: "YYYY-MM-DD HH:mm:ss" }, t);
  }, t.callback = function (t) {
    return void 0 === t && (t = {}), $.extend(!0, { type: "callback", schema: null }, t);
  }, t.prototype.sanitizeField = function (t, e, n, i) {
    if ("function" === n[t].type) return n[t].value;"undefined" == typeof e[t] && ("undefined" != typeof n[t].initial ? e[t] = n[t].initial() : e[t] = null);var r = n[t].type;if (null === e[t] && "obj" !== r && "object" !== r) return null;switch (n[t].field = t, r) {case "int":case "integer":
        return this.sanitizeInteger(e[t], n[t]);case "float":case "double":
        return this.sanitizeFloat(e[t], n[t]);case "string":case "char":case "varchar":
        return this.sanitizeString(e[t], n[t]);case "date":case "datetime":case "timestamp":
        return this.sanitizeDateTime(e[t], n[t], i);case "bool":case "boolean":
        return this.sanitizeBoolean(e[t], n[t]);case "obj":case "object":
        return this.sanitizeObject(e[t], n[t], i);case "array":case "collection":
        return this.sanitizeArray(e[t], n[t], i);default:
        if ("undefined" !== n[t].sanitize) return n[t].sanitize(e[t], n[t]);}
  }, t.prototype.sanitizeInteger = function (t, e) {
    if ("string" == typeof t && (t = t.replace(/[a-zA-Z]+/gi, ""), 0 === t.length)) return t = "";if (t = parseInt(t), "undefined" != typeof e.min && t < e.min) throw new Error("Provided value cannot be sanitized, value is below minimum integer allowed");if ("undefined" != typeof e.max && t > e.max) throw new Error("Provided value cannot be sanitized, value is greater than maximum integer allowed");return isNaN(t) ? t = "" : t;
  }, t.prototype.sanitizeFloat = function (t, e) {
    if (t = parseFloat(t), "undefined" != typeof e.min && t < e.min) throw new Error("Provided value cannot be sanitized, value is below minimum float allowed");if ("undefined" != typeof e.max && t > e.max) throw new Error("Provided value cannot be sanitized, value is greater than maximum float allowed");return t;
  }, t.prototype.sanitizeString = function (t, e) {
    if (t = String(t), "undefined" != typeof e.minLength && t.length < e.minLength) throw new Error("Provided value cannot be sanitized, string length is below minimum allowed");return "undefined" != typeof e.maxLength && t.length > e.maxLength && (console.warn("Value was truncated during sanitation"), t = t.substr(0, e.maxLength)), t;
  }, t.prototype.sanitizeDateTime = function (t, e, n) {
    if (moment(t, e.format).isValid()) return n ? moment(t).utc().format("YYYY-MM-DD hh:mm:ss") : "undefined" == typeof e.utc || e.utc ? moment.utc(t) : moment(t);throw new Error("Provided value (" + t + ") cannot be sanitized for field (" + e.field + "), is not a valid date");
  }, t.prototype.sanitizeBoolean = function (t, e) {
    if (t === !1 || t === !0) return t;if ("string" == typeof t) {
      if ("false" === t.toLowerCase().trim()) return !1;if ("true" === t.toLowerCase().trim()) return !0;
    }if (0 === parseInt(t)) return !1;if (1 === parseInt(t)) return !0;throw new Error("Provided value cannot be santized, is not a valid boolean");
  }, t.prototype.sanitizeObject = function (t, e, n) {
    if ("undefined" == typeof e.schema) throw new Error("Provided value cannot be santized, no reference schema provided for field type of object");return null === e.schema ? t : null === t ? null : this.sanitize(t, e.schema(), n);
  }, t.prototype.sanitizeArray = function (t, e, n) {
    if ("undefined" == typeof e.schema || null === e.schema || e.schema === !1) return t;if ("undefined" == typeof t.length) return [];var i = this;return t.map(function (t) {
      return i.sanitize(t, e.schema(), n);
    });
  }, t.prototype.getDispatcher = function () {
    return Beef.service(Dispatcher.SERVICE_ID);
  }, t;
}(),
    Action = function () {
  function t() {
    this._callbacks = {};
  }return t.prototype._register = function (t, e) {
    for (var n in t) {
      var i = t[n].name;"undefined" == typeof this._callbacks[i] && (this._callbacks[i] = []), this._callbacks[i].push(e[n].bind(e));
    }
  }, t.prototype._dispatch = function (t, e, n) {
    if ("undefined" != typeof this._callbacks[t]) {
      var i = e.apply(this, n);this._callbacks[t].forEach(function (t) {
        t(i);
      });
    }
  }, t;
}(),
    Actions = function () {
  function t() {}return t.create = function (e) {
    var n = new Action();for (var i in e) "_" === i[0] || t.ignoreFunctions.indexOf(i) >= 0 || (n[i] = new function () {
      return new Function("return function (fn) { return function " + i + " () { return fn(this, arguments) }; };")()(Function.apply.bind(function (t) {
        var i = [];for (var r in arguments) "0" !== r && i.push(arguments[r]);n._dispatch(t, e[t].bind(n), i);
      }.bind(null, i)));
    }());return n;
  }, t.ignoreFunctions = ["constructor"], t;
}(),
    DispatcherCallback = function () {
  function t(t, e, n) {
    void 0 === e && (e = []), this.func = t, this.dependencies = e, this.dispatchId = n;
  }return t;
}(),
    DispatcherPayload = function () {
  function t(t, e) {
    this.action = t, this.data = e;
  }return t;
}(),
    RoutingConfig = function () {
  function t(t) {
    this.routes = t;
  }return t.prototype.isRoute = function (t) {
    return "undefined" != typeof this.routes[t];
  }, t.prototype.callRoute = function (t, e) {
    return this.routes[t](e);
  }, t;
}(),
    ApiService = function (t) {
  function e() {
    t.apply(this, arguments);
  }return __extends(e, t), e.prototype.throttle = function (t, e, n) {
    var i;return function () {
      var r = this,
          o = arguments,
          a = function () {
        i = null, n || t.apply(r, o);
      },
          u = n && !i;clearTimeout(i), i = setTimeout(a, e), u && t.apply(r, o);
    };
  }, e.prototype.get = function (t, e) {
    return $.ajax({ url: this._buildUrl(t, e), data: JSON.stringify(e), method: "GET", dataType: "json" });
  }, e.prototype.post = function (t, e) {
    return $.ajax({ url: this._buildUrl(t, e, !1), data: JSON.stringify(e), method: "POST", dataType: "json" });
  }, e.prototype.put = function (t, e) {
    return $.ajax({ url: this._buildUrl(t, e, !1), data: JSON.stringify(e), method: "PUT", dataType: "json" });
  }, e.prototype["delete"] = function (t, e) {
    return $.ajax({ url: this._buildUrl(t, e), data: JSON.stringify(e), method: "DELETE", dataType: "json" });
  }, e.prototype._buildUrl = function (t, e, n) {
    void 0 === n && (n = !0);for (var i in e) -1 === t.indexOf("{" + i + "}") ? n !== !1 && (t += -1 !== t.indexOf("?") ? "&" : "?", t += i + "=" + e[i]) : t = t.replace("{" + i + "}", e[i]);return t;
  }, e.SERVICE_ID = "beef.service.api", e;
}(BaseService),
    Dispatcher = function (t) {
  function e() {
    t.apply(this, arguments), this.maxIterations = 10, this.callbacks = [];
  }return __extends(e, t), e.prototype.register = function (t, e) {
    var n = this.callbacks.length;return this.callbacks.push(new DispatcherCallback(t, e, n)), n;
  }, e.prototype.dispatch = function (t, e) {
    for (var n = new DispatcherPayload(t, e), i = [], r = 0, o = 0; r < this.maxIterations && i.length < this.callbacks.length;) {
      o >= this.callbacks.length && (o = 0, r++);var a = this.callbacks[o];i.filter(function (t) {
        return -1 !== a.dependencies.indexOf(t);
      }).length === a.dependencies.length && (a.func(n), i.push(a.dispatchId), o++);
    }r >= this.maxIterations && console.warn("Hit max dispatcher iterations, check dependencies of callbacks");
  }, e.SERVICE_ID = "beef.service.dispatcher", e;
}(BaseService),
    RoutingService = function () {
  function t() {}return t.prototype.onRouteFinished = function () {}, t.prototype.routes = function (t) {
    return this.routingConfig = new RoutingConfig(t), this;
  }, t.prototype.route = function (t, e) {
    var n = this.routingConfig.isRoute(t);if (n || (t = "/"), this.routingConfig.isRoute(t)) {
      var i = this.routingConfig.callRoute(t, e);return this.activeRoute = t, this.onRouteFinished(), i;
    }return null;
  }, t.prototype.doRouting = function () {
    var t = "";for (var e in this.routingConfig.routes) {
      t = e;var n = window.location.hash;n.indexOf("?") >= 0 && (n = n.substring(0, n.indexOf("?")));var i = e.match(/\{[a-z\_\-\+]+\}/gi),
          r = {};if (null !== i) {
        var o = e.split("/"),
            a = n.split("/");if (a = a.splice(1, a.length - 1), a.length !== o.length) continue;var u = 0,
            s = !1;if (a.forEach(function (t) {
          o[u].match(/\{[a-z\_\-\+]+\}/gi) || t !== o[u] && (s = !0), u++;
        }), s) continue;t = "", o.forEach(function (e, n) {
          n > 0 && (t += "/"), t += a[n], n > 0 && (r[e.replace(/[\{\}]/gi, "")] = a[n]);
        });
      }t = t.replace("+", "\\+");var c = new RegExp("^#/" + t + "$", "gi");if (null !== n.match(c)) {
        if (this.activeRoute === e && r === this.routeData) return;return this.routeData = r, this.activeRoute = e, void this.route(e, r);
      }
    }this.route("/", {});
  }, t.SERVICE_ID = "beef.service.routing", t;
}();Beef.setup(function () {
  Beef.service(ApiService.SERVICE_ID, new ApiService()), Beef.service(Dispatcher.SERVICE_ID, new Dispatcher()), Beef.service(RoutingService.SERVICE_ID, new RoutingService());
});
/**
 * Action classes contain actions that can be listened on by stores.
 * 
 * Stores will listen to an Action's methods, and a callback will be triggered
 * with the returned result of the Action.
 */

var TodoActions = Beef.Actions().create({

  /**
   * We are receiving an array of todos
   * @param array rawTodos
   * @returns array
   */
  receiveTodos: function (rawTodos) {
    return rawTodos;
  }

});
/**
 * Stores hold the data for our application, sanitize it, and listen for
 * actions to happen. 
 */
var TodoStore = Beef.Store().create({

    /**
     * Setting up our action listeners,
     */
    actions: function () {

        /**
         * For each ActionClass, we can register several callbacks.
         * The "key" is the function on our store we want to be called, when
         * the Action method that is in the "value" is called.
         * 
         * Our callback will receive the return value of the action we are
         * listening on
         */
        TodoActions._register({

            /**
             * When TodoActions.receiveTodos is called, update our todos
             */
            receiveTodos: TodoActions.receiveTodos
        }, this);
    },

    /**
     * Receive an array of todos, upsert them, and then emit an event
     * saying we changed
     */
    receiveTodos: function (rawTodos) {

        rawTodos.forEach(function (rawTodo) {
            /**
             * Sanitize our todo to the schema
             */
            var todo = TodoStore.sanitize(rawTodo, TodoStore.schema.Todo);
            TodoStore.upsertRow('todo', 'id', todo.id, todo);
        });

        TodoStore.emit('TodoStore.event.UPDATE');
    },

    /**
     * Get all the todos our store contains
     */
    getTodos: function () {
        return TodoStore.getRows('todo');
    },

    /**
     * Hold the schemas for the various data we may contain
     */
    schema: {

        /**
         * A simple todo with nothing but an id that must be an integer,
         * and a title that must be a string, and by default is empty.
         * 
         * If no "initial" callback is set, the field will default to null
         */
        Todo: {

            id: Store.int(),

            title: Store.string({
                initial: function () {
                    return '';
                }
            })
        }
    }

});
/**
 * 
 */

var AppContainer = React.createClass({
    displayName: 'AppContainer',

    getInitialState: function () {
        return {
            url: window.location.hash
        };
    },
    componentWillMount: function () {
        window.addEventListener("hashchange", this.onHashChange, false);
        this.setupRoutes();
    },
    setupRoutes: function () {
        Beef.Router().routes({
            '/': function () {
                return React.createElement(Homepage, null);
            }
        });
    },
    render: function () {
        var url = this.state.url.length > 0 ? this.state.url.substr(1) : '/';
        return Beef.Router().route(url);
    },

    onHashChange: function () {
        this.setState({
            url: window.location.hash
        });
    }
});
/**
 * 
 */

var Header = React.createClass({
    displayName: "Header",

    render: function () {
        return React.createElement(
            "div",
            { className: "header" },
            React.createElement(
                "a",
                { href: "#", className: "logo" },
                "BeefJS"
            )
        );
    }
});
/**
 * 
 */

var Homepage = React.createClass({
    displayName: "Homepage",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(Header, null),
            React.createElement(TodoApp, null)
        );
    }
});
/**
 * 
 */

var TodoApp = React.createClass({
    displayName: 'TodoApp',

    getInitialState: function () {
        return {
            todos: TodoStore.getTodos()
        };
    },
    componentWillMount: function () {
        TodoStore.listen('TodoStore.event.UPDATE', this.updateTodos);
    },
    componentWillUnmount: function () {
        TodoStore.ignore('TodoStore.event.UPDATE', this.updateTodos);
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(Toolbar, { todos: this.state.todos }),
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(TodoList, { todos: this.state.todos })
            )
        );
    },
    updateTodos: function () {
        this.setState({
            todos: TodoStore.getTodos()
        });
    }
});
/**
 * 
 */

var TodoList = React.createClass({
    displayName: "TodoList",

    render: function () {
        var self = this;
        var todos = this.props.todos.map(function (todo) {
            return React.createElement(Todo, { key: todo.id, todo: todo, onChange: self.onChange });
        });

        return React.createElement(
            "ul",
            { className: "todolist" },
            todos
        );
    },
    onChange: function (todo, field, e) {
        var value = e.target.value;
        todo[field] = value;

        TodoActions.receiveTodos([todo]);
    }
});
/**
 * 
 */

var Todo = React.createClass({
    displayName: 'Todo',

    getInitialState: function () {
        return {
            editing: false
        };
    },

    render: function () {
        var todo = this.props.todo;
        var title = this.state.editing ? React.createElement(EditTitle, { value: todo.title, onBlur: this.toggleEditing, onChange: this.props.onChange.bind(null, todo, 'title') }) : React.createElement(Title, { onClick: this.toggleEditing, value: todo.title });
        return React.createElement(
            'li',
            null,
            title
        );
    },
    toggleEditing: function () {
        this.setState({
            editing: !this.state.editing
        });
    }
});

var EditTitle = React.createClass({
    displayName: 'EditTitle',

    focus: function (input) {
        if (input != null) {
            input.focus();
        }
    },
    render: function () {
        return React.createElement('input', { ref: this.focus, type: 'text', value: this.props.value, onChange: this.props.onChange, onBlur: this.props.onBlur });
    }
});

var Title = React.createClass({
    displayName: 'Title',

    render: function () {
        var value = this.props.value.length > 0 ? this.props.value : 'Untitled';
        return React.createElement(
            'span',
            { onClick: this.props.onClick },
            value
        );
    }
});
/**
 * 
 */

var Toolbar = React.createClass({
    displayName: "Toolbar",

    render: function () {
        return React.createElement(
            "div",
            { className: "toolbar" },
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/" },
                        this.props.todos.length,
                        " Todos"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/", onClick: this.createTodo },
                        React.createElement("span", { className: "fa fa-plus" }),
                        " New Todo"
                    )
                )
            )
        );
    },
    createTodo: function () {
        var todo = {
            id: TodoStore.uuid()
        };

        TodoActions.receiveTodos([todo]);
    }
});
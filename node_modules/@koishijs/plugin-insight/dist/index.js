import { ref as L, computed as tt, reactive as ft, defineComponent as wt, watch as dt, onMounted as mt, resolveComponent as Ct, openBlock as $, createBlock as Mt, withCtx as it, createElementVNode as F, normalizeClass as V, unref as D, createElementBlock as I, Fragment as K, renderList as U, withModifiers as X, createVNode as Nt, Transition as kt, withDirectives as At, normalizeStyle as zt, toDisplayString as Et, vShow as Dt } from "../vue.js";
import { store as Z, icons as St } from "../client.js";
import { useEventListener as Y, useElementSize as Tt } from "../vueuse.js";
function $t(t) {
  const n = +this._x.call(null, t), e = +this._y.call(null, t);
  return ct(this.cover(n, e), n, e, t);
}
function ct(t, n, e, r) {
  if (isNaN(n) || isNaN(e))
    return t;
  var i, s = t._root, u = { data: r }, o = t._x0, f = t._y0, v = t._x1, g = t._y1, m, d, c, C, l, a, h, y;
  if (!s)
    return t._root = u, t;
  for (; s.length; )
    if ((l = n >= (m = (o + v) / 2)) ? o = m : v = m, (a = e >= (d = (f + g) / 2)) ? f = d : g = d, i = s, !(s = s[h = a << 1 | l]))
      return i[h] = u, t;
  if (c = +t._x.call(null, s.data), C = +t._y.call(null, s.data), n === c && e === C)
    return u.next = s, i ? i[h] = u : t._root = u, t;
  do
    i = i ? i[h] = new Array(4) : t._root = new Array(4), (l = n >= (m = (o + v) / 2)) ? o = m : v = m, (a = e >= (d = (f + g) / 2)) ? f = d : g = d;
  while ((h = a << 1 | l) === (y = (C >= d) << 1 | c >= m));
  return i[y] = s, i[h] = u, t;
}
function Lt(t) {
  var n, e, r = t.length, i, s, u = new Array(r), o = new Array(r), f = 1 / 0, v = 1 / 0, g = -1 / 0, m = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(i = +this._x.call(null, n = t[e])) || isNaN(s = +this._y.call(null, n)) || (u[e] = i, o[e] = s, i < f && (f = i), i > g && (g = i), s < v && (v = s), s > m && (m = s));
  if (f > g || v > m)
    return this;
  for (this.cover(f, v).cover(g, m), e = 0; e < r; ++e)
    ct(this, u[e], o[e], t[e]);
  return this;
}
function Ft(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n))
    return this;
  var e = this._x0, r = this._y0, i = this._x1, s = this._y1;
  if (isNaN(e))
    i = (e = Math.floor(t)) + 1, s = (r = Math.floor(n)) + 1;
  else {
    for (var u = i - e || 1, o = this._root, f, v; e > t || t >= i || r > n || n >= s; )
      switch (v = (n < r) << 1 | t < e, f = new Array(4), f[v] = o, o = f, u *= 2, v) {
        case 0:
          i = e + u, s = r + u;
          break;
        case 1:
          e = i - u, s = r + u;
          break;
        case 2:
          i = e + u, r = s - u;
          break;
        case 3:
          e = i - u, r = s - u;
          break;
      }
    this._root && this._root.length && (this._root = o);
  }
  return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = s, this;
}
function It() {
  var t = [];
  return this.visit(function(n) {
    if (!n.length)
      do
        t.push(n.data);
      while (n = n.next);
  }), t;
}
function bt(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function A(t, n, e, r, i) {
  this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
}
function Xt(t, n, e) {
  var r, i = this._x0, s = this._y0, u, o, f, v, g = this._x1, m = this._y1, d = [], c = this._root, C, l;
  for (c && d.push(new A(c, i, s, g, m)), e == null ? e = 1 / 0 : (i = t - e, s = n - e, g = t + e, m = n + e, e *= e); C = d.pop(); )
    if (!(!(c = C.node) || (u = C.x0) > g || (o = C.y0) > m || (f = C.x1) < i || (v = C.y1) < s))
      if (c.length) {
        var a = (u + f) / 2, h = (o + v) / 2;
        d.push(
          new A(c[3], a, h, f, v),
          new A(c[2], u, h, a, v),
          new A(c[1], a, o, f, h),
          new A(c[0], u, o, a, h)
        ), (l = (n >= h) << 1 | t >= a) && (C = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - l], d[d.length - 1 - l] = C);
      } else {
        var y = t - +this._x.call(null, c.data), M = n - +this._y.call(null, c.data), p = y * y + M * M;
        if (p < e) {
          var k = Math.sqrt(e = p);
          i = t - k, s = n - k, g = t + k, m = n + k, r = c.data;
        }
      }
  return r;
}
function Yt(t) {
  if (isNaN(g = +this._x.call(null, t)) || isNaN(m = +this._y.call(null, t)))
    return this;
  var n, e = this._root, r, i, s, u = this._x0, o = this._y0, f = this._x1, v = this._y1, g, m, d, c, C, l, a, h;
  if (!e)
    return this;
  if (e.length)
    for (; ; ) {
      if ((C = g >= (d = (u + f) / 2)) ? u = d : f = d, (l = m >= (c = (o + v) / 2)) ? o = c : v = c, n = e, !(e = e[a = l << 1 | C]))
        return this;
      if (!e.length)
        break;
      (n[a + 1 & 3] || n[a + 2 & 3] || n[a + 3 & 3]) && (r = n, h = a);
    }
  for (; e.data !== t; )
    if (i = e, !(e = e.next))
      return this;
  return (s = e.next) && delete e.next, i ? (s ? i.next = s : delete i.next, this) : n ? (s ? n[a] = s : delete n[a], (e = n[0] || n[1] || n[2] || n[3]) && e === (n[3] || n[2] || n[1] || n[0]) && !e.length && (r ? r[h] = e : this._root = e), this) : (this._root = s, this);
}
function jt(t) {
  for (var n = 0, e = t.length; n < e; ++n)
    this.remove(t[n]);
  return this;
}
function Bt() {
  return this._root;
}
function Pt() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length)
      do
        ++t;
      while (n = n.next);
  }), t;
}
function Ot(t) {
  var n = [], e, r = this._root, i, s, u, o, f;
  for (r && n.push(new A(r, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(r = e.node, s = e.x0, u = e.y0, o = e.x1, f = e.y1) && r.length) {
      var v = (s + o) / 2, g = (u + f) / 2;
      (i = r[3]) && n.push(new A(i, v, g, o, f)), (i = r[2]) && n.push(new A(i, s, g, v, f)), (i = r[1]) && n.push(new A(i, v, u, o, g)), (i = r[0]) && n.push(new A(i, s, u, v, g));
    }
  return this;
}
function qt(t) {
  var n = [], e = [], r;
  for (this._root && n.push(new A(this._root, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); ) {
    var i = r.node;
    if (i.length) {
      var s, u = r.x0, o = r.y0, f = r.x1, v = r.y1, g = (u + f) / 2, m = (o + v) / 2;
      (s = i[0]) && n.push(new A(s, u, o, g, m)), (s = i[1]) && n.push(new A(s, g, o, f, m)), (s = i[2]) && n.push(new A(s, u, m, g, v)), (s = i[3]) && n.push(new A(s, g, m, f, v));
    }
    e.push(r);
  }
  for (; r = e.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function Ht(t) {
  return t[0];
}
function Vt(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function Qt(t) {
  return t[1];
}
function Gt(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function ht(t, n, e) {
  var r = new rt(n == null ? Ht : n, e == null ? Qt : e, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function rt(t, n, e, r, i, s) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = s, this._root = void 0;
}
function ot(t) {
  for (var n = { data: t.data }, e = n; t = t.next; )
    e = e.next = { data: t.data };
  return n;
}
var z = ht.prototype = rt.prototype;
z.copy = function() {
  var t = new rt(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, r;
  if (!n)
    return t;
  if (!n.length)
    return t._root = ot(n), t;
  for (e = [{ source: n, target: t._root = new Array(4) }]; n = e.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = n.source[i]) && (r.length ? e.push({ source: r, target: n.target[i] = new Array(4) }) : n.target[i] = ot(r));
  return t;
};
z.add = $t;
z.addAll = Lt;
z.cover = Ft;
z.data = It;
z.extent = bt;
z.find = Xt;
z.remove = Yt;
z.removeAll = jt;
z.root = Bt;
z.size = Pt;
z.visit = Ot;
z.visitAfter = qt;
z.x = Vt;
z.y = Gt;
function S(t) {
  return function() {
    return t;
  };
}
function j(t) {
  return (t() - 0.5) * 1e-6;
}
function Rt(t) {
  return t.index;
}
function st(t, n) {
  var e = t.get(n);
  if (!e)
    throw new Error("node not found: " + n);
  return e;
}
function Wt(t) {
  var n = Rt, e = m, r, i = S(30), s, u, o, f, v, g = 1;
  t == null && (t = []);
  function m(a) {
    return 1 / Math.min(o[a.source.index], o[a.target.index]);
  }
  function d(a) {
    for (var h = 0, y = t.length; h < g; ++h)
      for (var M = 0, p, k, _, w, N, x, E; M < y; ++M)
        p = t[M], k = p.source, _ = p.target, w = _.x + _.vx - k.x - k.vx || j(v), N = _.y + _.vy - k.y - k.vy || j(v), x = Math.sqrt(w * w + N * N), x = (x - s[M]) / x * a * r[M], w *= x, N *= x, _.vx -= w * (E = f[M]), _.vy -= N * E, k.vx += w * (E = 1 - E), k.vy += N * E;
  }
  function c() {
    if (!!u) {
      var a, h = u.length, y = t.length, M = new Map(u.map((k, _) => [n(k, _, u), k])), p;
      for (a = 0, o = new Array(h); a < y; ++a)
        p = t[a], p.index = a, typeof p.source != "object" && (p.source = st(M, p.source)), typeof p.target != "object" && (p.target = st(M, p.target)), o[p.source.index] = (o[p.source.index] || 0) + 1, o[p.target.index] = (o[p.target.index] || 0) + 1;
      for (a = 0, f = new Array(y); a < y; ++a)
        p = t[a], f[a] = o[p.source.index] / (o[p.source.index] + o[p.target.index]);
      r = new Array(y), C(), s = new Array(y), l();
    }
  }
  function C() {
    if (!!u)
      for (var a = 0, h = t.length; a < h; ++a)
        r[a] = +e(t[a], a, t);
  }
  function l() {
    if (!!u)
      for (var a = 0, h = t.length; a < h; ++a)
        s[a] = +i(t[a], a, t);
  }
  return d.initialize = function(a, h) {
    u = a, v = h, c();
  }, d.links = function(a) {
    return arguments.length ? (t = a, c(), d) : t;
  }, d.id = function(a) {
    return arguments.length ? (n = a, d) : n;
  }, d.iterations = function(a) {
    return arguments.length ? (g = +a, d) : g;
  }, d.strength = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : S(+a), C(), d) : e;
  }, d.distance = function(a) {
    return arguments.length ? (i = typeof a == "function" ? a : S(+a), l(), d) : i;
  }, d;
}
var Jt = { value: () => {
} };
function vt() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Q(e);
}
function Q(t) {
  this._ = t;
}
function Kt(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Q.prototype = vt.prototype = {
  constructor: Q,
  on: function(t, n) {
    var e = this._, r = Kt(t + "", e), i, s = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++s < u; )
        if ((i = (t = r[s]).type) && (i = Ut(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++s < u; )
      if (i = (t = r[s]).type)
        e[i] = at(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = at(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new Q(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, s; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (s = this._[t], r = 0, i = s.length; r < i; ++r)
      s[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, s = r.length; i < s; ++i)
      r[i].value.apply(n, e);
  }
};
function Ut(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function at(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Jt, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var B = 0, O = 0, P = 0, gt = 1e3, G, q, R = 0, b = 0, J = 0, H = typeof performance == "object" && performance.now ? performance : Date, yt = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function pt() {
  return b || (yt(Zt), b = H.now() + J);
}
function Zt() {
  b = 0;
}
function et() {
  this._call = this._time = this._next = null;
}
et.prototype = _t.prototype = {
  constructor: et,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? pt() : +e) + (n == null ? 0 : +n), !this._next && q !== this && (q ? q._next = this : G = this, q = this), this._call = t, this._time = e, nt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, nt());
  }
};
function _t(t, n, e) {
  var r = new et();
  return r.restart(t, n, e), r;
}
function te() {
  pt(), ++B;
  for (var t = G, n; t; )
    (n = b - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --B;
}
function ut() {
  b = (R = H.now()) + J, B = O = 0;
  try {
    te();
  } finally {
    B = 0, ne(), b = 0;
  }
}
function ee() {
  var t = H.now(), n = t - R;
  n > gt && (J -= n, R = t);
}
function ne() {
  for (var t, n = G, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : G = e);
  q = t, nt(r);
}
function nt(t) {
  if (!B) {
    O && (O = clearTimeout(O));
    var n = t - b;
    n > 24 ? (t < 1 / 0 && (O = setTimeout(ut, t - H.now() - J)), P && (P = clearInterval(P))) : (P || (R = H.now(), P = setInterval(ee, gt)), B = 1, yt(ut));
  }
}
const re = 1664525, ie = 1013904223, lt = 4294967296;
function oe() {
  let t = 1;
  return () => (t = (re * t + ie) % lt) / lt;
}
function se(t) {
  return t.x;
}
function ae(t) {
  return t.y;
}
var ue = 10, le = Math.PI * (3 - Math.sqrt(5));
function fe(t) {
  var n, e = 1, r = 1e-3, i = 1 - Math.pow(r, 1 / 300), s = 0, u = 0.6, o = /* @__PURE__ */ new Map(), f = _t(m), v = vt("tick", "end"), g = oe();
  t == null && (t = []);
  function m() {
    d(), v.call("tick", n), e < r && (f.stop(), v.call("end", n));
  }
  function d(l) {
    var a, h = t.length, y;
    l === void 0 && (l = 1);
    for (var M = 0; M < l; ++M)
      for (e += (s - e) * i, o.forEach(function(p) {
        p(e);
      }), a = 0; a < h; ++a)
        y = t[a], y.fx == null ? y.x += y.vx *= u : (y.x = y.fx, y.vx = 0), y.fy == null ? y.y += y.vy *= u : (y.y = y.fy, y.vy = 0);
    return n;
  }
  function c() {
    for (var l = 0, a = t.length, h; l < a; ++l) {
      if (h = t[l], h.index = l, h.fx != null && (h.x = h.fx), h.fy != null && (h.y = h.fy), isNaN(h.x) || isNaN(h.y)) {
        var y = ue * Math.sqrt(0.5 + l), M = l * le;
        h.x = y * Math.cos(M), h.y = y * Math.sin(M);
      }
      (isNaN(h.vx) || isNaN(h.vy)) && (h.vx = h.vy = 0);
    }
  }
  function C(l) {
    return l.initialize && l.initialize(t, g), l;
  }
  return c(), n = {
    tick: d,
    restart: function() {
      return f.restart(m), n;
    },
    stop: function() {
      return f.stop(), n;
    },
    nodes: function(l) {
      return arguments.length ? (t = l, c(), o.forEach(C), n) : t;
    },
    alpha: function(l) {
      return arguments.length ? (e = +l, n) : e;
    },
    alphaMin: function(l) {
      return arguments.length ? (r = +l, n) : r;
    },
    alphaDecay: function(l) {
      return arguments.length ? (i = +l, n) : +i;
    },
    alphaTarget: function(l) {
      return arguments.length ? (s = +l, n) : s;
    },
    velocityDecay: function(l) {
      return arguments.length ? (u = 1 - l, n) : 1 - u;
    },
    randomSource: function(l) {
      return arguments.length ? (g = l, o.forEach(C), n) : g;
    },
    force: function(l, a) {
      return arguments.length > 1 ? (a == null ? o.delete(l) : o.set(l, C(a)), n) : o.get(l);
    },
    find: function(l, a, h) {
      var y = 0, M = t.length, p, k, _, w, N;
      for (h == null ? h = 1 / 0 : h *= h, y = 0; y < M; ++y)
        w = t[y], p = l - w.x, k = a - w.y, _ = p * p + k * k, _ < h && (N = w, h = _);
      return N;
    },
    on: function(l, a) {
      return arguments.length > 1 ? (v.on(l, a), n) : v.on(l);
    }
  };
}
function ce() {
  var t, n, e, r, i = S(-30), s, u = 1, o = 1 / 0, f = 0.81;
  function v(c) {
    var C, l = t.length, a = ht(t, se, ae).visitAfter(m);
    for (r = c, C = 0; C < l; ++C)
      n = t[C], a.visit(d);
  }
  function g() {
    if (!!t) {
      var c, C = t.length, l;
      for (s = new Array(C), c = 0; c < C; ++c)
        l = t[c], s[l.index] = +i(l, c, t);
    }
  }
  function m(c) {
    var C = 0, l, a, h = 0, y, M, p;
    if (c.length) {
      for (y = M = p = 0; p < 4; ++p)
        (l = c[p]) && (a = Math.abs(l.value)) && (C += l.value, h += a, y += a * l.x, M += a * l.y);
      c.x = y / h, c.y = M / h;
    } else {
      l = c, l.x = l.data.x, l.y = l.data.y;
      do
        C += s[l.data.index];
      while (l = l.next);
    }
    c.value = C;
  }
  function d(c, C, l, a) {
    if (!c.value)
      return !0;
    var h = c.x - n.x, y = c.y - n.y, M = a - C, p = h * h + y * y;
    if (M * M / f < p)
      return p < o && (h === 0 && (h = j(e), p += h * h), y === 0 && (y = j(e), p += y * y), p < u && (p = Math.sqrt(u * p)), n.vx += h * c.value * r / p, n.vy += y * c.value * r / p), !0;
    if (c.length || p >= o)
      return;
    (c.data !== n || c.next) && (h === 0 && (h = j(e), p += h * h), y === 0 && (y = j(e), p += y * y), p < u && (p = Math.sqrt(u * p)));
    do
      c.data !== n && (M = s[c.data.index] * r / p, n.vx += h * M, n.vy += y * M);
    while (c = c.next);
  }
  return v.initialize = function(c, C) {
    t = c, e = C, g();
  }, v.strength = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : S(+c), g(), v) : i;
  }, v.distanceMin = function(c) {
    return arguments.length ? (u = c * c, v) : Math.sqrt(u);
  }, v.distanceMax = function(c) {
    return arguments.length ? (o = c * c, v) : Math.sqrt(o);
  }, v.theta = function(c) {
    return arguments.length ? (f = c * c, v) : Math.sqrt(f);
  }, v;
}
function he(t) {
  var n = S(0.1), e, r, i;
  typeof t != "function" && (t = S(t == null ? 0 : +t));
  function s(o) {
    for (var f = 0, v = e.length, g; f < v; ++f)
      g = e[f], g.vx += (i[f] - g.x) * r[f] * o;
  }
  function u() {
    if (!!e) {
      var o, f = e.length;
      for (r = new Array(f), i = new Array(f), o = 0; o < f; ++o)
        r[o] = isNaN(i[o] = +t(e[o], o, e)) ? 0 : +n(e[o], o, e);
    }
  }
  return s.initialize = function(o) {
    e = o, u();
  }, s.strength = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : S(+o), u(), s) : n;
  }, s.x = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : S(+o), u(), s) : t;
  }, s;
}
function ve(t) {
  var n = S(0.1), e, r, i;
  typeof t != "function" && (t = S(t == null ? 0 : +t));
  function s(o) {
    for (var f = 0, v = e.length, g; f < v; ++f)
      g = e[f], g.vy += (i[f] - g.y) * r[f] * o;
  }
  function u() {
    if (!!e) {
      var o, f = e.length;
      for (r = new Array(f), i = new Array(f), o = 0; o < f; ++o)
        r[o] = isNaN(i[o] = +t(e[o], o, e)) ? 0 : +n(e[o], o, e);
    }
  }
  return s.initialize = function(o) {
    e = o, u();
  }, s.strength = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : S(+o), u(), s) : n;
  }, s.y = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : S(+o), u(), s) : t;
  }, s;
}
function W(t) {
  return t.type.startsWith("touch") ? [
    ...t.targetTouches,
    ...t.changedTouches
  ][0] : t;
}
function ge() {
  const t = L(""), n = L(!1), e = L(!0), r = L(0), i = L(0), s = tt(() => !r.value || !i.value ? {
    display: "none"
  } : {
    left: r.value + "px",
    top: i.value + "px"
  });
  function u(v, g) {
    t.value = v, n.value = !0, e.value = !1;
    const m = W(g);
    r.value = m.clientX, i.value = m.clientY;
  }
  function o(v = 0, g = !1) {
    e.value = !0, setTimeout(() => {
      !e.value || (n.value = !1, g && (r.value = null, i.value = null));
    }, v);
  }
  Y("mousemove", f), Y("touchmove", f);
  function f(v) {
    if (e.value)
      return;
    const g = W(v);
    i.value = g.clientY, r.value = g.clientX;
  }
  return ft({
    style: s,
    content: t,
    active: n,
    inactive: e,
    activate: u,
    deactivate: o
  });
}
const ye = ["width", "height", "viewBox"], pe = { class: "links" }, _e = ["x1", "y1", "x2", "y2", "onMouseenter", "onMouseleave"], xe = ["x1", "y1", "x2", "y2"], we = { class: "nodes" }, de = ["r", "cx", "cy", "onMouseenter", "onMouseleave", "onMousedown", "onTouchstart"], me = /* @__PURE__ */ wt({
  __name: "index",
  setup(t) {
    const n = L(), { width: e, height: r } = Tt(n), i = ge(), s = L(null), u = L(null), o = L(null), f = ft(Z.insight.nodes), v = tt(() => Z.insight.edges), g = Wt(v.value).id((_) => _.uid).distance(120), m = fe(f).force("link", g).force("charge", ce().strength(-400)).force("x", he().strength(0.05)).force("y", ve().strength(0.05)).stop();
    dt(() => Z.insight, (_) => {
      if (!!_) {
        f.slice().forEach((w, N) => {
          _.nodes.find((E) => E.uid === w.uid) || f.splice(N, 1);
        });
        for (const w of _.nodes) {
          const N = f.find((x) => x.uid === w.uid);
          N ? Object.assign(N, w) : f.push(w);
        }
        m.nodes(f), g.links(_.edges), m.alpha(0.3).restart();
      }
    });
    const d = 1e3, c = 1e-3;
    mt(() => {
      m.alpha(1).alphaMin(c).alphaDecay(1 - Math.pow(c, 1 / d)).restart();
    }), Y("mousemove", M), Y("touchmove", M), Y("mouseup", p), Y("touchend", p);
    function C(_, w) {
      u.value = _, i.activate("\u63D2\u4EF6\uFF1A" + _.name, w);
    }
    function l(_, w) {
      s.value !== _ && (u.value = null, i.deactivate(300));
    }
    function a(_, w) {
      o.value = _;
      const x = `${_.type === "dashed" ? "\u4F9D\u8D56" : "\u8C03\u7528"}\uFF1A${_.source.name} \u2192 ${_.target.name}`;
      i.activate(x, w);
    }
    function h(_, w) {
      o.value = null, i.deactivate(300);
    }
    function y(_, w) {
      s.value = _, m.alphaTarget(0.3).restart();
      const N = W(w);
      _.lastX = N.clientX, _.lastY = N.clientY, _.fx = _.x, _.fy = _.y;
    }
    function M(_) {
      const w = s.value;
      if (!w)
        return;
      const N = W(_);
      w.fx += N.clientX - w.lastX, w.fy += N.clientY - w.lastY, w.lastX = N.clientX, w.lastY = N.clientY;
    }
    function p(_) {
      m.alphaTarget(0);
      const w = s.value;
      !w || (w.fx = null, w.fy = null, u.value = null, s.value = null);
    }
    const k = tt(() => {
      if (o.value)
        return {
          nodes: /* @__PURE__ */ new Set([o.value.source, o.value.target]),
          links: /* @__PURE__ */ new Set([o.value])
        };
      if (!u.value)
        return { nodes: /* @__PURE__ */ new Set(), links: /* @__PURE__ */ new Set() };
      const _ = {
        nodes: /* @__PURE__ */ new Set([u.value]),
        links: /* @__PURE__ */ new Set()
      };
      let w = !0;
      for (; w; ) {
        w = !1;
        for (const x of v.value)
          _.links.has(x) || x.type !== "solid" || _.nodes.has(x.source) && !_.nodes.has(x.target) && (_.nodes.add(x.target), _.links.add(x), w = !0);
      }
      const N = {
        nodes: /* @__PURE__ */ new Set([u.value]),
        links: /* @__PURE__ */ new Set()
      };
      for (w = !0; w; ) {
        w = !1;
        for (const x of v.value)
          N.links.has(x) || x.type !== "solid" || N.nodes.has(x.target) && !N.nodes.has(x.source) && (N.nodes.add(x.source), N.links.add(x), w = !0);
      }
      return {
        nodes: /* @__PURE__ */ new Set([..._.nodes, ...N.nodes]),
        links: /* @__PURE__ */ new Set([..._.links, ...N.links])
      };
    });
    return (_, w) => {
      const N = Ct("k-layout");
      return $(), Mt(N, { main: "darker" }, {
        default: it(() => [
          F("div", {
            ref_key: "root",
            ref: n,
            class: V({ insight: !0, highlight: D(i).active })
          }, [
            ($(), I("svg", {
              ref: "svg",
              id: "couple",
              width: D(e),
              height: D(r),
              viewBox: `-${D(e) / 2} -${D(r) / 2} ${D(e)} ${D(r)}`
            }, [
              F("g", pe, [
                ($(!0), I(K, null, U(D(v), (x, E) => ($(), I("g", {
                  class: V(["link", { active: D(k).links.has(x) }]),
                  key: E
                }, [
                  F("line", {
                    x1: x.source.x,
                    y1: x.source.y,
                    x2: x.target.x,
                    y2: x.target.y,
                    class: "shadow",
                    onMouseenter: X((T) => a(x, T), ["stop", "prevent"]),
                    onMouseleave: X((T) => h(), ["stop", "prevent"])
                  }, null, 40, _e),
                  F("line", {
                    x1: x.source.x,
                    y1: x.source.y,
                    x2: x.target.x,
                    y2: x.target.y,
                    class: V(x.type)
                  }, null, 10, xe)
                ], 2))), 128))
              ]),
              F("g", we, [
                ($(!0), I(K, null, U(f, (x, E) => ($(), I("g", {
                  class: V(["node", { active: D(k).nodes.has(x) }]),
                  key: E
                }, [
                  F("circle", {
                    r: u.value === x ? 12 : 10,
                    cx: x.x,
                    cy: x.y,
                    onMouseenter: X((T) => C(x, T), ["stop", "prevent"]),
                    onMouseleave: X((T) => l(x), ["stop", "prevent"]),
                    onMousedown: X((T) => y(x, T), ["stop", "prevent"]),
                    onTouchstart: X((T) => y(x, T), ["stop", "prevent"])
                  }, null, 40, de)
                ], 2))), 128))
              ])
            ], 8, ye)),
            Nt(kt, { name: "fade" }, {
              default: it(() => [
                At(F("div", {
                  class: "tooltip",
                  style: zt(D(i).style)
                }, [
                  ($(!0), I(K, null, U(D(i).content.split(`
`), (x, E) => ($(), I("div", { key: E }, Et(x), 1))), 128))
                ], 4), [
                  [Dt, D(i).active]
                ])
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const xt = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [r, i] of n)
    e[r] = i;
  return e;
}, Ce = /* @__PURE__ */ xt(me, [["__scopeId", "data-v-f9c93eee"]]), Me = {}, Ne = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, ke = /* @__PURE__ */ F("path", {
  fill: "currentColor",
  d: "M160 64C160 28.65 188.7 0 224 0C259.3 0 288 28.65 288 64C288 83.36 279.4 100.7 265.8 112.5L304.3 196.5C314.4 193.6 325 192 336 192C367.7 192 396.2 205.1 416.6 226.2L517.4 153.7C513.9 145.8 512 137.1 512 128C512 92.65 540.7 64 576 64C611.3 64 640 92.65 640 128C640 163.3 611.3 192 576 192C561.4 192 547.9 187.1 537.2 178.9L435.3 252.2C443.4 267.7 448 285.3 448 304C448 319.4 444.9 334 439.3 347.3L531.1 402.4C542.6 391 558.5 384 576 384C611.3 384 640 412.7 640 448C640 483.3 611.3 512 576 512C540.7 512 512 483.3 512 448C512 441.7 512.9 435.6 514.6 429.8L422.8 374.8C402.3 399.9 371 416 336 416C279.6 416 232.9 374.3 225.1 320H125.1C118.9 347.6 93.82 368 64 368C28.65 368 0 339.3 0 304C0 268.7 28.65 240 64 240C93.82 240 118.9 260.4 125.1 288H225.1C229.8 255.3 248.7 227.1 275.3 209.9L237.1 126.7C232.9 127.5 228.5 128 224 128C188.7 128 160 99.35 160 64V64zM224 96C241.7 96 256 81.67 256 64C256 46.33 241.7 32 224 32C206.3 32 192 46.33 192 64C192 81.67 206.3 96 224 96zM576 160C593.7 160 608 145.7 608 128C608 110.3 593.7 96 576 96C558.3 96 544 110.3 544 128C544 145.7 558.3 160 576 160zM576 416C558.3 416 544 430.3 544 448C544 465.7 558.3 480 576 480C593.7 480 608 465.7 608 448C608 430.3 593.7 416 576 416zM64 336C81.67 336 96 321.7 96 304C96 286.3 81.67 272 64 272C46.33 272 32 286.3 32 304C32 321.7 46.33 336 64 336zM336 384C380.2 384 416 348.2 416 304C416 259.8 380.2 224 336 224C291.8 224 256 259.8 256 304C256 348.2 291.8 384 336 384z"
}, null, -1), Ae = [
  ke
];
function ze(t, n) {
  return $(), I("svg", Ne, Ae);
}
const Ee = /* @__PURE__ */ xt(Me, [["render", ze]]);
St.register("activity:network", Ee);
const $e = (t) => {
  t.page({
    path: "/graph",
    name: "\u4F9D\u8D56\u56FE",
    icon: "activity:network",
    order: 600,
    fields: ["insight"],
    component: Ce
  });
};
export {
  $e as default
};

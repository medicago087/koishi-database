import { send as ce, message as B, store as $, router as de, icons as fe, Card as pe } from "../client.js";
import { defineComponent as W, reactive as U, computed as y, watchEffect as L, watch as P, ref as ge, resolveComponent as h, resolveDirective as _e, withDirectives as me, openBlock as _, createElementBlock as E, createElementVNode as z, toDisplayString as O, unref as r, createVNode as b, withCtx as p, createTextVNode as R, Fragment as be, renderList as he, createBlock as D, withModifiers as J, resolveDynamicComponent as q, mergeProps as H, isRef as G, nextTick as Ce, createCommentVNode as ye, KeepAlive as we } from "../vue.js";
import { useRoute as ke } from "../vue-router.js";
function ve(s) {
  return s instanceof Date ? `"d${s.toJSON()}"` : JSON.stringify(s, (l, e) => {
    if (typeof e == "string")
      return "s" + e;
    if (typeof e == "object") {
      if (e instanceof Date)
        return "d" + new Date(e).toJSON();
      if (e === null)
        return null;
      const f = Array.isArray(e) ? [] : {};
      for (const o in e)
        e[o] instanceof Date ? (f[o] = new Date(e[o]), f[o].toJSON = void 0) : f[o] = e[o];
      return f;
    }
    return e;
  });
}
function Ee(s) {
  if (s !== void 0)
    return JSON.parse(
      s,
      (l, e) => typeof e == "string" ? e[0] === "s" ? e.slice(1) : new Date(e.slice(1)) : e
    );
}
async function j(s, ...l) {
  return Ee(await ce(`database/${s}`, ...l.map(ve)));
}
function Q(s) {
  const l = ["B", "KB", "MB", "GB"];
  for (const e in l)
    if (e && s > 1024)
      s /= 1024;
    else
      return `${s.toFixed(1)} ${l[e]}`;
  return `${s.toFixed(1)} ${l[l.length - 1]}`;
}
function T(s, l = "") {
  return console.warn(s), l.length && (l += "\uFF1A"), s instanceof Error ? l += s.name : typeof s == "string" && (l += s.split(`
`)[0]), B.error(l);
}
function I(s) {
  return s.toString().padStart(2, "0");
}
function K(s) {
  return [
    I(s.getHours()),
    I(s.getMinutes()),
    I(s.getSeconds())
  ].join(":");
}
const ze = { class: "content-right" }, De = { class: "header" }, xe = { class: "table-title" }, Se = { class: "operations" }, Fe = { key: 0 }, Ve = { key: 1 }, $e = ["onParentDblclick"], Oe = /* @__PURE__ */ W({
  __name: "data-table",
  props: {
    name: null
  },
  setup(s) {
    const l = s, e = U({
      loading: !0,
      pageSize: void 0,
      offset: 0,
      sort: null,
      changes: {},
      newRow: {}
    }), f = [30, 50, 100, 150, 200, 500, 1e3], o = y(() => $.database.tables[l.name]);
    L(() => {
      e.pageSize = e.pageSize || f[0];
    }), P(() => e.pageSize, (n) => {
      e.offset = Math.floor(e.offset / n) * n;
    }, {}), P(() => o.value.fields, (n) => {
      for (const t in o.value.fields)
        t in e.newRow || (e.newRow[t] = "");
    }, { immediate: !0 });
    const x = ge([]);
    async function S() {
      if (!l.name)
        return;
      e.loading = !0;
      const n = e.sort && {
        [e.sort.field]: {
          ascending: "asc",
          descending: "desc"
        }[e.sort.order]
      }, t = {
        offset: e.offset,
        limit: e.pageSize,
        sort: n
      };
      x.value = await j("get", l.name, {}, t), await Ce(), e.loading = !1;
    }
    L(S);
    const M = y({
      get: () => Math.floor(e.offset / e.pageSize) + 1,
      set: (n) => e.offset = (n - 1) * e.pageSize
    }), w = y(() => {
      var t;
      const n = {};
      for (const a in e.changes || {})
        for (const i in e.changes[a]) {
          const u = V.value[i];
          (t = u.attrs) != null && t.validate && !u.attrs.validate(e.changes[a][i].model) || (n[a] || (n[a] = {}), n[a][i] = e.changes[a][i]);
        }
      return n;
    }), k = y(() => !!Object.keys(e.changes || {}).length), F = y(() => !!Object.keys(w.value || {}).length), Y = y(() => {
      var n;
      for (const t in o.value.fields) {
        const a = V.value[t];
        if ((n = a.attrs) != null && n.validate && !a.attrs.validate(e.newRow[t]))
          return console.log(t), !1;
      }
      return !0;
    }), V = y(() => Object.keys(o.value.fields).reduce((n, t) => {
      const a = o.value.fields[t], i = { clearable: !1 };
      let u, c;
      switch (a.type) {
        case "time":
          return { ...n, [t]: { is: "el-time-picker", attrs: i } };
        case "date":
          return { ...n, [t]: { is: "el-date-picker", attrs: { ...i, type: "date" } } };
        case "timestamp":
          return { ...n, [t]: { is: "el-date-picker", attrs: { ...i, type: "datetime" } } };
        case "integer":
        case "unsigned":
          c = 1;
        case "float":
        case "double":
        case "decimal":
          u = "number";
          break;
        default:
          u = "text";
          break;
      }
      const C = (m) => {
        if (a.nullable === !1 && !m.length)
          return !1;
        switch (u.value === "number" && (m = parseFloat(m)), a.type) {
          case "unsigned":
            if (m < 0)
              return !1;
          case "integer":
            if (m % 1 != 0)
              return !1;
            break;
          case "json":
            if (m === "")
              return !0;
            if (!m.startsWith("{") || !m.endsWith("}"))
              return !1;
            break;
        }
        return !0;
      };
      return n[t] = { is: "el-input", attrs: { type: u, validate: C, step: c } }, n;
    }, {}));
    function Z(n) {
      n.order === null ? e.sort = null : e.sort = {
        field: n.prop,
        order: n.order
      };
    }
    function ee(n, { row: t, column: a, $index: i }) {
      const u = o.value.fields[n].type, c = t[n];
      switch (u) {
        case "json":
          return JSON.stringify(c);
        case "date":
          if (c instanceof Date)
            return c.toJSON().slice(0, 10);
          break;
        case "time":
          if (c instanceof Date)
            return K(c);
          break;
        case "timestamp":
          if (c instanceof Date)
            return `${c.toJSON().slice(0, 10)} ${K(c)}`;
          break;
      }
      return c;
    }
    function te(n, t) {
      switch (o.value.fields[n].type) {
        case "json":
          return JSON.stringify(t);
        case "time":
          if (typeof t != "string")
            return t;
          const [i, u, c] = t.split(":"), C = new Date();
          return C.setHours(parseInt(i), parseInt(u), parseInt(c)), C;
      }
      return t;
    }
    function N(n, t) {
      switch (o.value.fields[n].type) {
        case "json":
          return JSON.parse(t);
      }
      return t;
    }
    function A({ row: n, column: t, $index: a }, i = !0) {
      var u, c, C, m;
      return ((c = (u = e.changes) == null ? void 0 : u[a]) == null ? void 0 : c[t.label]) === void 0 ? !1 : i ? ((m = (C = e.changes) == null ? void 0 : C[n.id]) == null ? void 0 : m[t.label].model.value) !== n[t.label] : !0;
    }
    function ne(n, t, a) {
      var i;
      (i = a.querySelector(".inner-cell")) == null || i.dispatchEvent(new Event("parent-dblclick"));
    }
    function ae({ row: n, column: t, $index: a }) {
      A({ row: n, column: t, $index: a }, !1) || (e.changes[a] === void 0 && (e.changes[a] = {}), e.changes[a][t.label] = U({
        model: te(t.label, n[t.label])
      }));
    }
    function se({ column: n, $index: t }) {
      delete e.changes[t][n.label], Object.keys(e.changes[t]).length || delete e.changes[t];
    }
    function oe() {
      e.changes = {};
    }
    async function le() {
      e.loading = !0;
      const n = [];
      for (const t in w.value)
        try {
          const a = x.value[t], i = {};
          for (const u in w.value[t])
            i[u] = w.value[t][u].model, i[u] = N(u, i[u]);
          console.log("Update row: ", i), await j("set", l.name, a, i);
          for (const u in w.value[t])
            n.push({ idx: t, field: u });
        } catch (a) {
          T(a, "\u66F4\u65B0\u6570\u636E\u5931\u8D25");
        }
      for (const t of n)
        delete e.changes[t.idx][t.field];
      for (const t in e.changes)
        Object.keys(e.changes[t]).length || delete e.changes[t];
      await S(), n.length && B.success(`\u6210\u529F\u4FEE\u6539 ${n.length} \u9879\u6570\u636E`), e.loading = !1;
    }
    async function re({ row: n, $index: t }) {
      e.loading = !0;
      try {
        await j("remove", l.name, n), await S(), B.success("\u6210\u529F\u5220\u9664\u6570\u636E");
      } catch (a) {
        T(a, "\u6570\u636E\u5220\u9664\u5931\u8D25");
      }
      e.loading = !1;
    }
    async function ie() {
      e.loading = !0;
      try {
        const n = Object.keys(e.newRow).reduce((t, a) => (e.newRow[a] && (t[a] = e.newRow[a], t[a] = N(a, t[a])), t), {});
        console.log("Create row: ", n), await j("create", l.name, n), await S(), B.success("\u6210\u529F\u6DFB\u52A0\u6570\u636E");
        for (const t in e.newRow)
          e.newRow[t] = "";
      } catch (n) {
        T(n, "\u6DFB\u52A0\u6570\u636E\u5931\u8D25");
      }
      e.loading = !1;
    }
    return (n, t) => {
      const a = h("k-button"), i = h("k-icon"), u = h("el-table-column"), c = h("el-popconfirm"), C = h("el-table"), m = h("el-pagination"), ue = _e("loading");
      return me((_(), E("div", ze, [
        z("div", De, [
          z("span", xe, O(s.name) + " " + O(r(o).size ? `(${r(Q)(r(o).size)})` : ""), 1),
          z("div", Se, [
            r(k) ? (_(), E("span", Fe, [
              b(a, {
                solid: "",
                disabled: !r(F),
                onClick: le
              }, {
                default: p(() => [
                  R("\u5E94\u7528\u4FEE\u6539")
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(a, {
                solid: "",
                type: "error",
                onClick: oe
              }, {
                default: p(() => [
                  R("\u53D6\u6D88\u4FEE\u6539")
                ]),
                _: 1
              })
            ])) : (_(), E("span", Ve, "\u53CC\u51FB\u5355\u5143\u683C\u4FEE\u6539\u6570\u636E"))
          ])
        ]),
        b(C, {
          data: x.value,
          class: "data-table",
          style: { width: "100%" },
          height: "100%",
          border: !0,
          "cell-class-name": ({ row: g, column: d, rowIndex: v, columnIndex: Le }) => A({ row: g, column: d, $index: v }, !1) ? "cell-changed" : "",
          onSortChange: Z,
          onCellDblclick: ne
        }, {
          default: p(() => [
            (_(!0), E(be, null, he(Object.keys(r(o).fields), (g) => (_(), D(u, {
              sortable: r(k) ? !1 : "custom",
              prop: g,
              label: g,
              fixed: [r(o).primary || []].flat().includes(g),
              resizable: !0
            }, {
              header: p(({ column: d }) => [
                R(O(d.label) + " ", 1),
                z("div", {
                  class: "insertion",
                  onClick: t[1] || (t[1] = J(() => {
                  }, ["stop"]))
                }, [
                  (_(), D(q(r(V)[d.label].is), H({
                    onClick: t[0] || (t[0] = J(() => {
                    }, ["stop"])),
                    modelValue: e.newRow[d.label],
                    "onUpdate:modelValue": (v) => e.newRow[d.label] = v
                  }, r(V)[d.label].attrs || {}, { size: "small" }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                ])
              ]),
              default: p((d) => [
                A(d, !1) ? (_(), D(q(r(V)[d.column.label].is), H({
                  key: 0,
                  modelValue: e.changes[d.$index][d.column.label].model,
                  "onUpdate:modelValue": (v) => e.changes[d.$index][d.column.label].model = v
                }, r(V)[d.column.label].attrs || {}, { size: "small" }), {
                  suffix: p(() => [
                    b(a, {
                      frameless: "",
                      type: "error",
                      onClick: (v) => se(d)
                    }, {
                      default: p(() => [
                        b(i, { name: "times-full" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1040, ["modelValue", "onUpdate:modelValue"])) : (_(), E("div", {
                  key: 1,
                  onParentDblclick: (v) => ae(d),
                  class: "inner-cell"
                }, O(ee(g, d)), 41, $e))
              ]),
              _: 2
            }, 1032, ["sortable", "prop", "label", "fixed"]))), 256)),
            b(u, {
              label: "\u64CD\u4F5C",
              width: "60",
              fixed: "right",
              align: "center"
            }, {
              header: p(({ column: g }) => [
                R(O(g.label) + " ", 1),
                z("div", {
                  class: "insertion",
                  onClick: t[2] || (t[2] = J(() => {
                  }, ["stop"]))
                }, [
                  b(a, {
                    frameless: "",
                    disabled: !r(Y) || r(k),
                    onClick: ie
                  }, {
                    default: p(() => [
                      R("\u63D2\u5165")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ]),
              default: p((g) => [
                b(c, {
                  onConfirm: (d) => re(g),
                  title: "\u771F\u7684\u8981\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F",
                  "confirm-button-text": "\u662F",
                  "cancel-button-text": "\u5426"
                }, {
                  reference: p(() => [
                    b(a, {
                      frameless: "",
                      type: "error",
                      disabled: r(k)
                    }, {
                      default: p(() => [
                        b(i, { name: "times-full" })
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 2
                }, 1032, ["onConfirm"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["data", "cell-class-name"]),
        b(m, {
          layout: "total, sizes, prev, pager, next, jumper",
          small: !0,
          total: r(o).count,
          "page-sizes": f,
          "default-page-size": f[0],
          "page-size": e.pageSize,
          "onUpdate:page-size": t[3] || (t[3] = (g) => e.pageSize = g),
          "default-current-page": 1,
          "current-page": r(M),
          "onUpdate:current-page": t[4] || (t[4] = (g) => G(M) ? M.value = g : null),
          disabled: r(k)
        }, null, 8, ["total", "default-page-size", "page-size", "current-page", "disabled"])
      ])), [
        [ue, e.loading]
      ]);
    };
  }
});
const X = (s, l) => {
  const e = s.__vccOpts || s;
  for (const [f, o] of l)
    e[f] = o;
  return e;
}, Re = /* @__PURE__ */ X(Oe, [["__scopeId", "data-v-9d559cdf"]]), Me = { key: 0 }, je = /* @__PURE__ */ z("div", null, "\u5728\u5DE6\u4FA7\u9009\u62E9\u8981\u8BBF\u95EE\u7684\u6570\u636E\u8868", -1), Be = /* @__PURE__ */ W({
  __name: "index",
  setup(s) {
    function l(o) {
      return Array.isArray(o) ? o.join("/") : o || "";
    }
    const e = ke(), f = y({
      get() {
        const o = l(e.params.name);
        return $.database.tables[o] ? o : "";
      },
      set(o) {
        $.database.tables[o] || (o = ""), de.replace("/database/" + o);
      }
    });
    return (o, x) => {
      const S = h("k-tab-group"), M = h("el-scrollbar"), w = h("k-empty"), k = h("k-layout");
      return _(), D(k, { class: "page-database" }, {
        header: p(() => {
          var F;
          return [
            R(" \u6570\u636E\u5E93 "),
            (F = r($).database) != null && F.size ? (_(), E("span", Me, "(" + O(r(Q)(r($).database.size)) + ")", 1)) : ye("", !0)
          ];
        }),
        left: p(() => [
          b(M, null, {
            default: p(() => [
              b(S, {
                data: r($).database.tables,
                modelValue: r(f),
                "onUpdate:modelValue": x[0] || (x[0] = (F) => G(f) ? f.value = F : null)
              }, null, 8, ["data", "modelValue"])
            ]),
            _: 1
          })
        ]),
        default: p(() => [
          (_(), D(we, null, [
            r(f) ? (_(), D(Re, {
              key: r(f),
              name: r(f)
            }, null, 8, ["name"])) : (_(), D(w, { key: 0 }, {
              default: p(() => [
                je
              ]),
              _: 1
            }))
          ], 1024))
        ]),
        _: 1
      });
    };
  }
});
const Ae = {}, Je = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, Te = /* @__PURE__ */ z("path", {
  fill: "currentColor",
  d: "M224 512C100.3 512 0 476.2 0 432V80C0 35.82 100.3 0 224 0C347.7 0 448 35.82 448 80V432C448 476.2 347.7 512 224 512zM416 80.45C415.7 79.69 414.4 77.27 409.8 73.31C402.4 67.11 389.9 60.09 371.6 53.57C335.4 40.62 283.2 32 224 32C164.8 32 112.6 40.62 76.37 53.57C58.1 60.09 45.59 67.11 38.25 73.31C33.55 77.27 32.29 79.69 32 80.45V182.1C46.47 192.7 69.9 202.8 100.9 210.4C135.5 218.9 177.1 224 224 224C270 224 312.5 218.9 347.1 210.4C378.1 202.8 401.5 192.7 416 182.1V80.45zM416 219.5C398.8 228.4 377.9 235.8 354.8 241.5C317.3 250.7 272.2 256 224 256C175.8 256 130.7 250.7 93.22 241.5C70.11 235.8 49.18 228.4 32 219.5V310.1C46.47 320.7 69.9 330.8 100.9 338.4C135.5 346.9 177.1 352 224 352C270 352 312.5 346.9 347.1 338.4C378.1 330.8 401.5 320.7 416 310.1V219.5zM38.25 438.7C45.59 444.9 58.1 451.9 76.37 458.4C112.6 471.4 164.8 480 224 480C283.2 480 335.4 471.4 371.6 458.4C389.9 451.9 402.4 444.9 409.8 438.7C414.4 434.7 415.7 432.3 416 431.6V347.5C398.8 356.4 377.9 363.8 354.8 369.5C317.3 378.7 272.2 384 224 384C175.8 384 130.7 378.7 93.22 369.5C70.11 363.8 49.18 356.4 32 347.5V431.6C32.29 432.3 33.55 434.7 38.25 438.7zM416 431.4C416.1 431.3 416.1 431.3 416.1 431.3L416 431.4zM31.96 431.4C31.94 431.3 31.93 431.3 31.92 431.3L31.96 431.4zM31.96 80.56C31.93 80.65 31.92 80.7 31.92 80.7L31.96 80.56zM416.1 80.7C416.1 80.7 416.1 80.65 416 80.56z"
}, null, -1), Ie = [
  Te
];
function Ne(s, l) {
  return _(), E("svg", Je, Ie);
}
const Ue = /* @__PURE__ */ X(Ae, [["render", Ne]]);
fe.register("database", Ue);
const Ke = (s) => {
  s.page({
    path: "/database/:name*",
    name: "\u6570\u636E\u5E93",
    icon: "database",
    order: 410,
    authority: 4,
    fields: ["database"],
    component: Be
  }), s.slot({
    type: "numeric",
    component: pe.numeric({
      title: "\u6570\u636E\u5E93\u4F53\u79EF",
      icon: "database",
      type: "size",
      fields: ["database"],
      content: ({ database: l }) => l.size
    })
  });
};
export {
  Ke as default
};

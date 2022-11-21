import { computed as C, defineComponent as $, openBlock as r, createElementBlock as p, createElementVNode as o, toDisplayString as v, createVNode as i, unref as a, ref as H, watch as F, resolveComponent as d, createBlock as k, withCtx as _, Fragment as B, renderList as I, normalizeClass as N, KeepAlive as K } from "../vue.js";
import { createStorage as W, receive as b, MessageContent as q, Schema as A, store as E, clone as G, deepEqual as J, send as y, VirtualList as P, ChatInput as Q, message as R, icons as X } from "../client.js";
const Y = {
  private: "\u79C1\u804A\u6A21\u5F0F",
  guild: "\u7FA4\u804A\u6A21\u5F0F",
  profile: "\u7528\u6237\u8BBE\u7F6E"
}, s = W("sandbox", 1, () => ({
  user: "",
  index: 0,
  messages: {},
  panelType: "private"
})), x = C(() => s.panelType === "guild" ? "#" : "@" + s.user);
b("sandbox", (n) => {
  var u, t;
  ((u = s.messages)[t = n.channel] || (u[t] = [])).push(n);
});
b("sandbox/delete", ({ id: n, channel: u }) => {
  const t = s.messages[u];
  !t || (s.messages[u] = t.filter((m) => m.id !== n));
});
b("sandbox/clear", () => {
  s.messages[x.value] = [];
});
const Z = [
  "Alice",
  "Bob",
  "Carol",
  "Dave",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
  "Kathy",
  "Lily",
  "Mandy",
  "Nancy",
  "Oscar",
  "Peggy",
  "Quinn",
  "Randy",
  "Sandy",
  "Toby",
  "Uma",
  "Vicky",
  "Wendy",
  "Xander",
  "Yvonne",
  "Zoe"
], ee = { class: "chat-message" }, se = { class: "avatar" }, te = { class: "nickname" }, ne = { class: "message-box" }, ae = /* @__PURE__ */ $({
  __name: "message",
  props: {
    data: null
  },
  setup(n) {
    return (u, t) => (r(), p("div", ee, [
      o("div", se, v(n.data.user[0]), 1),
      o("div", te, v(n.data.user), 1),
      o("div", ne, [
        i(a(q), {
          content: n.data.content
        }, null, 8, ["content"])
      ])
    ]));
  }
});
const w = (n, u) => {
  const t = n.__vccOpts || n;
  for (const [m, h] of u)
    t[m] = h;
  return t;
}, oe = /* @__PURE__ */ w(ae, [["__scopeId", "data-v-cc500173"]]), ue = { class: "user-container" }, ce = { class: "avatar" }, le = { class: "nick" }, re = ["onClick"], ie = { class: "card-header" }, de = ["onClick"], _e = /* @__PURE__ */ o("div", null, "\u70B9\u51FB\u300C\u6DFB\u52A0\u7528\u6237\u300D\u5F00\u59CB\u4F53\u9A8C", -1), me = { class: "card-footer" }, pe = /* @__PURE__ */ $({
  __name: "index",
  setup(n) {
    const u = A.object({
      authority: A.natural().description("\u6743\u9650\u7B49\u7EA7").default(1)
    }), t = C(() => Object.keys(s.messages).filter((e) => e.startsWith("@")).map((e) => e.slice(1))), m = C(() => Object.fromEntries(t.value.map((e) => [e, { name: e }]))), h = 10;
    function V() {
      if (t.value.length >= h)
        return R.error("\u53EF\u521B\u5EFA\u7684\u7528\u6237\u6570\u91CF\u5DF2\u8FBE\u4E0A\u9650\u3002");
      let e;
      do
        e = Z[s.index++], s.index %= h;
      while (t.value.includes(e));
      s.user = e, s.messages["@" + e] = [], y("sandbox/user", s.user, {});
    }
    function L(e) {
      const l = t.value.indexOf(e);
      delete s.messages["@" + e], y("sandbox/user", s.user, null), s.user === e && (s.user = t.value[l] || "");
    }
    const f = H();
    F(() => {
      var e;
      return (e = E.users) == null ? void 0 : e[s.user];
    }, (e) => {
      f.value = G(e);
    }, { immediate: !0 }), F(f, (e) => {
      var l;
      J(e, (l = E.users) == null ? void 0 : l[s.user]) || y("sandbox/user", s.user, e);
    }, { deep: !0 });
    function S(e) {
      y("sandbox/message", s.user, x.value, e);
    }
    return (e, l) => {
      const M = d("k-icon"), D = d("k-tab-group"), T = d("el-scrollbar"), z = d("k-empty"), O = d("k-form"), U = d("k-content"), j = d("k-layout");
      return r(), k(j, { class: "page-sandbox" }, {
        left: _(() => [
          o("div", {
            class: "card-header k-menu-item",
            onClick: V
          }, "\u6DFB\u52A0\u7528\u6237"),
          o("div", ue, [
            i(T, null, {
              default: _(() => [
                i(D, {
                  data: a(m),
                  modelValue: a(s).user,
                  "onUpdate:modelValue": l[0] || (l[0] = (c) => a(s).user = c)
                }, {
                  default: _(({ name: c }) => [
                    o("div", ce, v(c[0]), 1),
                    o("div", le, v(c), 1),
                    o("div", {
                      class: "close",
                      onClick: (g) => L(c)
                    }, [
                      i(M, { name: "times-full" })
                    ], 8, re)
                  ]),
                  _: 1
                }, 8, ["data", "modelValue"])
              ]),
              _: 1
            })
          ])
        ]),
        default: _(() => [
          o("div", ie, [
            (r(!0), p(B, null, I(a(Y), (c, g) => (r(), p("span", {
              key: g,
              class: N(["k-horizontal-tab-item", { active: a(s).panelType === g }]),
              onClick: (xe) => a(s).panelType = g
            }, v(c), 11, de))), 128))
          ]),
          (r(), k(K, null, [
            a(t).length ? a(s).panelType === "profile" ? (r(), k(U, {
              key: "profile" + a(x)
            }, {
              default: _(() => [
                i(O, {
                  instant: "",
                  modelValue: f.value,
                  "onUpdate:modelValue": l[1] || (l[1] = (c) => f.value = c),
                  schema: a(u),
                  "show-header": !1
                }, null, 8, ["modelValue", "schema"])
              ]),
              _: 1
            })) : (r(), p(B, { key: 2 }, [
              i(a(P), {
                data: a(s).messages[a(x)] || [],
                pinned: ""
              }, {
                default: _((c) => [
                  i(oe, { data: c }, null, 8, ["data"])
                ]),
                _: 1
              }, 8, ["data"]),
              o("div", me, [
                i(a(Q), { onSend: S })
              ])
            ], 64)) : (r(), k(z, { key: "empty" }, {
              default: _(() => [
                _e
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
const ve = {}, he = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, fe = /* @__PURE__ */ o("path", {
  fill: "currentColor",
  d: "M437.2 403.5L319.1 215l.0001-135C319.1 71.16 312.8 64 303.1 64S288 71.16 288 79.1L287.1 215c0 5.973 1.672 11.83 4.826 16.9L347.6 320H100.4l54.79-88.1C158.3 226.8 160 220.1 160 215L160 79.1C160 71.16 152.8 64 144 64S128 71.16 128 79.1L128 215l-117.2 188.5C-18.48 450.6 15.27 512 70.89 512h306.2C432.7 512 466.5 450.5 437.2 403.5zM410.9 460C407.6 466 397.6 480 377.1 480H70.89c-20.51 0-30.48-13.95-33.82-19.95c-7.025-12.63-6.691-27.46 .873-39.65L80.48 352h287l42.55 68.41C417.6 432.6 417.1 447.4 410.9 460zM112 32h224C344.8 32 352 24.84 352 16S344.8 0 336 0h-224C103.2 0 96 7.156 96 16S103.2 32 112 32z"
}, null, -1), ge = [
  fe
];
function ke(n, u) {
  return r(), p("svg", he, ge);
}
const ye = /* @__PURE__ */ w(ve, [["render", ke]]);
X.register("activity:flask", ye);
const Fe = (n) => {
  n.page({
    name: "\u6C99\u76D2",
    path: "/sandbox",
    icon: "activity:flask",
    order: 300,
    authority: 4,
    component: pe
  });
};
export {
  Fe as default
};

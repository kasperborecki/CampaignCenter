globalThis.__timing__.logStart('Load chunks/build/StatCard-Bol7zbzD');import script from './index-CEYUf-ld.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatCard",
  __ssrInlineRender: true,
  props: {
    color: {},
    icon: {},
    iconColor: {},
    title: {},
    count: {},
    uphillText: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = script;
      _push(ssrRenderComponent(_component_Card, mergeProps({ pt: {
        root: {
          class: "flex h-full min-h-[112px] w-full flex-col justify-between rounded-2xl border border-white/6 bg-[#151821] px-4 py-3 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.95)]"
        },
        body: { class: "flex h-full flex-col justify-between p-0" },
        content: { class: "flex h-full flex-col justify-between p-0" }
      } }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-start gap-3"${_scopeId}><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/8" style="${ssrRenderStyle({ backgroundColor: __props.color })}"${_scopeId}><i class="${ssrRenderClass(["pi text-2xl", __props.icon])}" style="${ssrRenderStyle({ color: __props.iconColor })}"${_scopeId}></i></div><div class="min-w-0"${_scopeId}><p class="text-sm font-medium leading-5 text-slate-300"${_scopeId}>${ssrInterpolate(__props.title)}</p><p class="mt-1 text-2xl font-semibold leading-none text-[#F5F6FA]"${_scopeId}>${ssrInterpolate(__props.count)}</p></div></div><div class="mt-3 flex items-center gap-2 text-xs text-slate-400"${_scopeId}><i class="pi pi-arrow-up h-4 w-4 shrink-0 text-sm text-slate-400"${_scopeId}></i><p class="truncate"${_scopeId}>${ssrInterpolate(__props.uphillText)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-start gap-3" }, [
                createVNode("div", {
                  class: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/8",
                  style: { backgroundColor: __props.color }
                }, [
                  createVNode("i", {
                    class: ["pi text-2xl", __props.icon],
                    style: { color: __props.iconColor }
                  }, null, 6)
                ], 4),
                createVNode("div", { class: "min-w-0" }, [
                  createVNode("p", { class: "text-sm font-medium leading-5 text-slate-300" }, toDisplayString(__props.title), 1),
                  createVNode("p", { class: "mt-1 text-2xl font-semibold leading-none text-[#F5F6FA]" }, toDisplayString(__props.count), 1)
                ])
              ]),
              createVNode("div", { class: "mt-3 flex items-center gap-2 text-xs text-slate-400" }, [
                createVNode("i", { class: "pi pi-arrow-up h-4 w-4 shrink-0 text-sm text-slate-400" }),
                createVNode("p", { class: "truncate" }, toDisplayString(__props.uphillText), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/StatCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StatCard = Object.assign(_sfc_main, { __name: "CardStatCard" });

export { StatCard as S };;globalThis.__timing__.logEnd('Load chunks/build/StatCard-Bol7zbzD');
//# sourceMappingURL=StatCard-Bol7zbzD.mjs.map

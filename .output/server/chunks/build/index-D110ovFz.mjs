globalThis.__timing__.logStart('Load chunks/build/index-D110ovFz');import { defineComponent, mergeProps, unref, ref, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import script$5 from './index-DUorkBwK.mjs';
import script$4 from './index-CLGbd--w.mjs';
import script$3 from './index-wEFFy2XM.mjs';
import script$2 from './index-CGTrSIDr.mjs';
import script$1 from './index-DDTkROm7.mjs';
import script from './index-xKFz547g.mjs';
import { f as useI18n } from './server.mjs';
import '@primeuix/utils';
import '@primeuix/utils/object';
import './index-CP_fvbAb.mjs';
import './index-DxKIPVaB.mjs';
import './index-DI7ROuCk.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import './index-BkujatKk.mjs';
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import '@primeuix/styles/checkbox';
import './index-BJFn3Jal.mjs';
import './index-DmGtcQDa.mjs';
import './index-Dl3T3yr5.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
import '@primeuix/styles/message';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/iconfield';
import './index-RZE_erJD.mjs';
import './index-QxS0XFpr.mjs';
import '@primeuix/styles/badge';
import '@primeuix/styles/button';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import 'node:url';
import 'node:crypto';
import 'pinia';
import '@vue/shared';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const authBackground = "" + __buildAssetsURL("AuthBackgroundTwo.Csh0psAW.png");
const logo = "" + __buildAssetsURL("logo.C3q_N5UY.png");
const activeModeClass = "border border-[#5b2eff]/50 bg-[#5b2eff]/15 text-[#a78bfa]";
const inactiveModeClass = "text-slate-400 hover:text-white";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuthComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const authType = ref(0);
    const marker = ref("password");
    const markerTwo = ref("password");
    const errorBox = ref(false);
    const isSubmitting = ref(false);
    const rememberMe = ref(false);
    const providers = [
      { key: "google", label: "authProviders.google", icon: "pi pi-google" },
      { key: "facebook", label: "authProviders.facebook", icon: "pi pi-facebook" },
      { key: "apple", label: "authProviders.apple", icon: "pi pi-apple" }
    ];
    const checkboxPt = {
      root: { class: "relative inline-flex h-6 w-6 items-center justify-center" },
      input: { class: "absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" },
      box: {
        class: "flex h-6 w-6 items-center justify-center rounded border-2 border-[#FF91AF] bg-transparent text-white"
      },
      icon: { class: "text-xs text-white" }
    };
    const form = ref({
      email: "",
      password: "",
      confirmPassword: ""
    });
    const ruleErrors = ref({
      email: false,
      password: false,
      confirmPassword: false
    });
    function toggleMarker() {
      marker.value = marker.value === "password" ? "text" : "password";
    }
    function toggleMarkerTwo() {
      markerTwo.value = markerTwo.value === "password" ? "text" : "password";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      const _component_IconField = script$1;
      const _component_InputIcon = script$2;
      const _component_InputText = script$3;
      const _component_Message = script$4;
      const _component_Checkbox = script$5;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "w-full max-w-[560px] space-y-7" }, _attrs))}><header class="space-y-2 text-center"><p class="pb-2 text-3xl font-thin text-white">${ssrInterpolate(authType.value === 0 ? unref(t)("auth.welcomeBack") : unref(t)("auth.registerTitle"))}</p><p class="pb-3 text-lg font-bold text-slate-400">${ssrInterpolate(authType.value === 0 ? unref(t)("auth.loginPrompt") : unref(t)("auth.registerPrompt"))}</p></header><div class="grid grid-cols-2 rounded-[10px] border border-white/15 bg-[#0d0e14] p-1">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        label: unref(t)("auth.login"),
        text: "",
        class: ["h-12 rounded-lg text-sm font-semibold transition", authType.value === 0 ? activeModeClass : inactiveModeClass],
        onClick: ($event) => authType.value = 0
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        label: unref(t)("auth.register"),
        text: "",
        class: ["h-12 rounded-lg text-sm font-semibold transition", authType.value === 1 ? activeModeClass : inactiveModeClass],
        onClick: ($event) => authType.value = 1
      }, null, _parent));
      _push(`</div><div class="grid gap-3 sm:grid-cols-3"><!--[-->`);
      ssrRenderList(providers, (provider) => {
        _push(ssrRenderComponent(_component_Button, {
          key: provider.key,
          type: "button",
          label: unref(t)(provider.label),
          icon: provider.icon,
          outlined: "",
          class: "flex h-12 items-center justify-center gap-2 rounded-lg border-[#5b2eff]/55 bg-transparent px-4 text-sm font-semibold text-slate-100 transition hover:border-[#a78bfa] hover:bg-[#5b2eff]/10"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center gap-4 text-sm text-slate-400"><span class="h-px flex-1 bg-white/15"></span><span>${ssrInterpolate(unref(t)("auth.orContinueWith"))}</span><span class="h-px flex-1 bg-white/15"></span></div><div class="space-y-5"><label class="block space-y-2"><span class="text-sm font-medium text-slate-100">${ssrInterpolate(unref(t)("auth.email"))}</span>`);
      _push(ssrRenderComponent(_component_IconField, {
        "icon-position": "left",
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, { class: "pi pi-at left-4 text-slate-500" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              modelValue: form.value.email,
              "onUpdate:modelValue": ($event) => form.value.email = $event,
              autocomplete: "email",
              placeholder: unref(t)("auth.emailPlaceholder"),
              class: "h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, { class: "pi pi-at left-4 text-slate-500" }),
              createVNode(_component_InputText, {
                modelValue: form.value.email,
                "onUpdate:modelValue": ($event) => form.value.email = $event,
                autocomplete: "email",
                placeholder: unref(t)("auth.emailPlaceholder"),
                class: "h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label><label class="block space-y-2"><span class="text-sm font-medium text-slate-100">${ssrInterpolate(unref(t)("auth.password"))}</span>`);
      _push(ssrRenderComponent(_component_IconField, {
        "icon-position": "left",
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, { class: "pi pi-lock left-4 text-slate-500" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              modelValue: form.value.password,
              "onUpdate:modelValue": ($event) => form.value.password = $event,
              type: marker.value,
              autocomplete: "current-password",
              placeholder: unref(t)("auth.passwordPlaceholder"),
              class: "h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-20 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              icon: marker.value === "password" ? "pi pi-eye" : "pi pi-eye-slash",
              text: "",
              rounded: "",
              class: "absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-[#a78bfa] hover:text-white",
              "aria-label": marker.value === "password" ? "Show password" : "Hide password",
              onClick: toggleMarker
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, { class: "pi pi-lock left-4 text-slate-500" }),
              createVNode(_component_InputText, {
                modelValue: form.value.password,
                "onUpdate:modelValue": ($event) => form.value.password = $event,
                type: marker.value,
                autocomplete: "current-password",
                placeholder: unref(t)("auth.passwordPlaceholder"),
                class: "h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-20 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"]),
              createVNode(_component_Button, {
                type: "button",
                icon: marker.value === "password" ? "pi pi-eye" : "pi pi-eye-slash",
                text: "",
                rounded: "",
                class: "absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-[#a78bfa] hover:text-white",
                "aria-label": marker.value === "password" ? "Show password" : "Hide password",
                onClick: toggleMarker
              }, null, 8, ["icon", "aria-label"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label>`);
      if (authType.value === 1) {
        _push(`<label class="block space-y-2"><span class="text-sm font-medium text-slate-100">${ssrInterpolate(unref(t)("auth.confirmPassword"))}</span>`);
        _push(ssrRenderComponent(_component_IconField, {
          "icon-position": "left",
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_InputIcon, { class: "pi pi-lock left-4 text-slate-500" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: form.value.confirmPassword,
                "onUpdate:modelValue": ($event) => form.value.confirmPassword = $event,
                type: markerTwo.value,
                autocomplete: "current-password",
                placeholder: unref(t)("auth.confirmPasswordPlaceholder"),
                class: "h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-20 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                icon: markerTwo.value === "password" ? "pi pi-eye" : "pi pi-eye-slash",
                text: "",
                rounded: "",
                class: "absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-[#a78bfa] hover:text-white",
                "aria-label": markerTwo.value === "password" ? "Show password" : "Hide password",
                onClick: toggleMarkerTwo
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_InputIcon, { class: "pi pi-lock left-4 text-slate-500" }),
                createVNode(_component_InputText, {
                  modelValue: form.value.confirmPassword,
                  "onUpdate:modelValue": ($event) => form.value.confirmPassword = $event,
                  type: markerTwo.value,
                  autocomplete: "current-password",
                  placeholder: unref(t)("auth.confirmPasswordPlaceholder"),
                  class: "h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-20 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"]),
                createVNode(_component_Button, {
                  type: "button",
                  icon: markerTwo.value === "password" ? "pi pi-eye" : "pi pi-eye-slash",
                  text: "",
                  rounded: "",
                  class: "absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-[#a78bfa] hover:text-white",
                  "aria-label": markerTwo.value === "password" ? "Show password" : "Hide password",
                  onClick: toggleMarkerTwo
                }, null, 8, ["icon", "aria-label"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errorBox.value) {
        _push(ssrRenderComponent(_component_Message, {
          severity: "error",
          closable: false,
          class: "rounded border border-[#EF4444]/20 bg-[#EF4444]/5 p-4 text-sm text-[#EF4444]/80"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (ruleErrors.value.email) {
                _push2(`<p${_scopeId}><i class="pi pi-circle-fill mr-2 text-[8px]"${_scopeId}></i>${ssrInterpolate(unref(t)("auth.invalidEmail"))}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (ruleErrors.value.password) {
                _push2(`<p${_scopeId}><i class="pi pi-circle-fill mr-2 text-[8px]"${_scopeId}></i>${ssrInterpolate(unref(t)("auth.invalidPassword"))}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (authType.value === 1 && ruleErrors.value.confirmPassword) {
                _push2(`<p${_scopeId}><i class="pi pi-circle-fill mr-2 text-[8px]"${_scopeId}></i>${ssrInterpolate(unref(t)("auth.passwordMismatch"))}</p>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ruleErrors.value.email ? (openBlock(), createBlock("p", { key: 0 }, [
                  createVNode("i", { class: "pi pi-circle-fill mr-2 text-[8px]" }),
                  createTextVNode(toDisplayString(unref(t)("auth.invalidEmail")), 1)
                ])) : createCommentVNode("", true),
                ruleErrors.value.password ? (openBlock(), createBlock("p", { key: 1 }, [
                  createVNode("i", { class: "pi pi-circle-fill mr-2 text-[8px]" }),
                  createTextVNode(toDisplayString(unref(t)("auth.invalidPassword")), 1)
                ])) : createCommentVNode("", true),
                authType.value === 1 && ruleErrors.value.confirmPassword ? (openBlock(), createBlock("p", { key: 2 }, [
                  createVNode("i", { class: "pi pi-circle-fill mr-2 text-[8px]" }),
                  createTextVNode(toDisplayString(unref(t)("auth.passwordMismatch")), 1)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-wrap items-center justify-between gap-3"><label for="remember" class="flex cursor-pointer items-center gap-3 text-slate-300">`);
      _push(ssrRenderComponent(_component_Checkbox, {
        modelValue: rememberMe.value,
        "onUpdate:modelValue": ($event) => rememberMe.value = $event,
        "input-id": "remember",
        binary: "",
        class: "h-6 w-6 rounded border-2 border-[#FF91AF] bg-transparent",
        pt: checkboxPt
      }, null, _parent));
      _push(`<span class="text-[1em] font-semibold select-none">${ssrInterpolate(unref(t)("auth.rememberMe"))}</span></label>`);
      if (authType.value === 0) {
        _push(ssrRenderComponent(_component_Button, {
          type: "button",
          label: unref(t)("auth.forgotPassword"),
          text: "",
          class: "text-sm font-semibold text-[#a78bfa] transition hover:text-white"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        label: authType.value === 0 ? unref(t)("auth.login") : unref(t)("auth.register"),
        loading: isSubmitting.value,
        class: "mb-6 h-12 w-full rounded-lg bg-[#5b2eff] text-sm font-bold text-white shadow-lg shadow-[#5b2eff]/25 transition hover:bg-[#7047ff] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#0d0e14]"
      }, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/AuthComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AuthComponent = Object.assign(_sfc_main$1, { __name: "AuthComponent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "grid h-screen overflow-hidden bg-[#090c13] text-white lg:grid-cols-2" }, _attrs))}><section class="relative hidden h-full overflow-hidden lg:block"><img${ssrRenderAttr("src", unref(authBackground))} alt="" class="h-full w-full object-cover"><img${ssrRenderAttr("src", unref(logo))} alt="Campaign Center" class="absolute left-6 top-4 h-12 w-56 object-contain"><div class="absolute left-10 top-16 w-[60%]"><p class="text-[42px] font-bold leading-tight">${ssrInterpolate(unref(t)("auth.heroTitle"))}</p><p class="mt-3 text-[18px] font-thin text-gray-300">${ssrInterpolate(unref(t)("auth.heroSubtitle"))}</p></div></section><section class="relative flex min-h-screen items-center justify-center overflow-hidden border-l border-gray-900 px-6 py-10 sm:px-10 lg:px-16">`);
      _push(ssrRenderComponent(AuthComponent, null, null, _parent));
      _push(`</section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-D110ovFz');
//# sourceMappingURL=index-D110ovFz.mjs.map

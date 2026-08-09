globalThis.__timing__.logStart('Load chunks/build/index-DnPll--n');import script$3 from './index-xKFz547g.mjs';
import script$2 from './index-wEFFy2XM.mjs';
import script$1 from './index-CGTrSIDr.mjs';
import script from './index-DDTkROm7.mjs';
import { defineComponent, ref, unref, withCtx, createVNode, mergeProps, computed, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import script$4 from './index-CEYUf-ld.mjs';
import { f as useI18n } from './server.mjs';
import script$7 from './index-BURwQET4.mjs';
import script$6 from './index-DZBl-9-0.mjs';
import script$5 from './index-b2tP6tqM.mjs';
import { S as StatCard } from './StatCard-Bol7zbzD.mjs';
import script$8 from './index-DUorkBwK.mjs';
import '@primeuix/utils';
import '@primeuix/utils/object';
import './index-RZE_erJD.mjs';
import './index-DxKIPVaB.mjs';
import './index-DI7ROuCk.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import './index-QxS0XFpr.mjs';
import '@primeuix/styles/badge';
import './index-DmGtcQDa.mjs';
import './index-Dl3T3yr5.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
import '@primeuix/styles/button';
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/card';
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
import '@primeuix/styles/avatar';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/tag';
import './index-CP_fvbAb.mjs';
import './index-BkujatKk.mjs';
import '@primeuix/styles/checkbox';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DashboardActionsCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const actions = [
      { label: "actions.addCreator", icon: "pi-users", background: "#8B5CF628", color: "#8B5CF6" },
      { label: "actions.createCampaign", icon: "pi-calendar-plus", background: "#0EA5E928", color: "#0EA5E9" },
      { label: "actions.createTask", icon: "pi-list-check", background: "#22C55E28", color: "#22C55E" },
      { label: "actions.uploadFiles", icon: "pi-upload", background: "#F59E0B28", color: "#F59E0B" },
      { label: "actions.newNote", icon: "pi-align-left", background: "#2A2F3D80", color: "#F5F6FA80" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = script$4;
      const _component_Button = script$3;
      _push(ssrRenderComponent(_component_Card, mergeProps({ pt: {
        root: { class: "h-full w-full rounded-2xl bg-[#151821] px-6 py-4 text-white shadow-xl shadow-black/20" },
        body: { class: "h-full p-0" },
        content: { class: "h-full p-0" }
      } }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><p class="text-[18px] font-medium"${_scopeId}>${ssrInterpolate(unref(t)("actions.title"))}</p></div><div class="mt-3 flex justify-between px-8"${_scopeId}><!--[-->`);
            ssrRenderList(actions, (action) => {
              _push2(ssrRenderComponent(_component_Button, {
                key: action.label,
                type: "button",
                text: "",
                class: "flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-white",
                "aria-label": unref(t)(action.label)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="mr-2 flex h-18 w-18 items-center justify-center rounded-xl" style="${ssrRenderStyle({ backgroundColor: action.background })}"${_scopeId2}><i class="${ssrRenderClass(["pi text-4xl", action.icon])}" style="${ssrRenderStyle({ color: action.color })}"${_scopeId2}></i></span><span class="max-w-20 whitespace-normal text-center text-[14px] leading-tight"${_scopeId2}>${ssrInterpolate(unref(t)(action.label))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "mr-2 flex h-18 w-18 items-center justify-center rounded-xl",
                        style: { backgroundColor: action.background }
                      }, [
                        createVNode("i", {
                          class: ["pi text-4xl", action.icon],
                          style: { color: action.color }
                        }, null, 6)
                      ], 4),
                      createVNode("span", { class: "max-w-20 whitespace-normal text-center text-[14px] leading-tight" }, toDisplayString(unref(t)(action.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("p", { class: "text-[18px] font-medium" }, toDisplayString(unref(t)("actions.title")), 1)
              ]),
              createVNode("div", { class: "mt-3 flex justify-between px-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(actions, (action) => {
                  return createVNode(_component_Button, {
                    key: action.label,
                    type: "button",
                    text: "",
                    class: "flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-white",
                    "aria-label": unref(t)(action.label)
                  }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        class: "mr-2 flex h-18 w-18 items-center justify-center rounded-xl",
                        style: { backgroundColor: action.background }
                      }, [
                        createVNode("i", {
                          class: ["pi text-4xl", action.icon],
                          style: { color: action.color }
                        }, null, 6)
                      ], 4),
                      createVNode("span", { class: "max-w-20 whitespace-normal text-center text-[14px] leading-tight" }, toDisplayString(unref(t)(action.label)), 1)
                    ]),
                    _: 2
                  }, 1032, ["aria-label"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/DashboardActionsCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DashboardActionsCard = Object.assign(_sfc_main$5, { __name: "CardDashboardActionsCard" });
const campaigns = [
  {
    id: 1,
    title: "Summer Sale 2024",
    brand: "BrandLab",
    image: null,
    status: "inProgress",
    statusLabel: "W trakcie",
    creators: {
      current: 8,
      total: 12
    },
    extraCreators: 3,
    messagesCount: 5,
    gradient: "from-[#784DFF] to-[#A78BFA]"
  },
  {
    id: 2,
    title: "New Collection Launch",
    brand: "StyleStore",
    image: null,
    status: "inProgress",
    statusLabel: "W trakcie",
    creators: {
      current: 6,
      total: 8
    },
    extraCreators: 1,
    messagesCount: 3,
    gradient: "from-[#0EA5E9] to-[#67E8F9]"
  },
  {
    id: 3,
    title: "Black Friday 2024",
    brand: "EvoShop",
    image: null,
    status: "planned",
    statusLabel: "Planowana",
    creators: {
      current: 0,
      total: 10
    },
    extraCreators: 5,
    messagesCount: 0,
    gradient: "from-[#EF4444] to-[#F97316]"
  },
  {
    id: 4,
    title: "Back to School",
    brand: "BrandLab",
    image: null,
    status: "inProgress",
    statusLabel: "W trakcie",
    creators: {
      current: 7,
      total: 7
    },
    extraCreators: 0,
    messagesCount: 2,
    gradient: "from-[#22C55E] to-[#86EFAC]"
  }
];
const userAvatar = "" + __buildAssetsURL("UserAvatar.B_m_8kTp.jpg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DashboardCampaignCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const filter = ref("all");
    const tabs = computed(() => [
      { label: t("common.all"), value: "all" },
      { label: t("campaigns.inProgress"), value: "inProgress" },
      { label: t("campaigns.planned"), value: "planned" },
      { label: t("campaigns.closed"), value: "closed" }
    ]);
    const filteredCampaigns = computed(() => {
      if (filter.value === "all") return campaigns;
      return campaigns.filter((campaign) => campaign.status === filter.value);
    });
    function statusStyle(status) {
      const styles = {
        inProgress: { backgroundColor: "#8B5CF628", color: "#8B5CF6" },
        planned: { backgroundColor: "#0EA5E928", color: "#0EA5E9" },
        closed: { backgroundColor: "#EF444428", color: "#EF4444" }
      };
      return styles[status] ?? {};
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = script$4;
      const _component_Button = script$3;
      const _component_Tag = script$5;
      const _component_ProgressBar = script$6;
      const _component_Avatar = script$7;
      _push(ssrRenderComponent(_component_Card, mergeProps({ pt: {
        root: { class: "h-full w-full rounded-2xl bg-[#151821] px-6 py-4 text-white shadow-xl shadow-black/20" },
        body: { class: "h-full p-0" },
        content: { class: "h-full p-0" }
      } }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><p class="text-[18px] font-medium"${_scopeId}>${ssrInterpolate(unref(t)("campaigns.myCampaigns"))}</p>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              text: "",
              label: unref(t)("common.seeAll"),
              icon: "pi pi-arrow-right",
              "icon-pos": "right",
              class: "text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-3 flex items-center gap-8 border-b border-white/5"${_scopeId}><!--[-->`);
            ssrRenderList(tabs.value, (tab) => {
              _push2(ssrRenderComponent(_component_Button, {
                key: tab.value,
                type: "button",
                text: "",
                label: tab.label,
                class: ["rounded-none pb-3 text-sm font-semibold transition", filter.value === tab.value ? "border-b-2 border-[#8B5CF6] text-white" : "border-b-2 border-transparent text-slate-400 hover:text-white"],
                onClick: ($event) => filter.value = tab.value
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><!--[-->`);
            ssrRenderList(filteredCampaigns.value, (campaign) => {
              _push2(`<div class="grid grid-cols-[52px_1.5fr_90px_110px_120px_120px_70px_32px] items-center gap-4 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]"${_scopeId}>`);
              if (campaign.image) {
                _push2(`<img${ssrRenderAttr("src", campaign.image)} alt="" class="h-12 w-12 rounded-lg object-cover"${_scopeId}>`);
              } else {
                _push2(`<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-700 p-1 text-center text-[10px] font-bold leading-tight text-white"${_scopeId}>${ssrInterpolate(campaign.title.replace(/\d/g, ""))}</div>`);
              }
              _push2(`<div class="min-w-0"${_scopeId}><p class="truncate text-sm font-bold text-white"${_scopeId}>${ssrInterpolate(campaign.title)}</p><p class="truncate text-xs font-medium text-slate-400"${_scopeId}>${ssrInterpolate(campaign.brand)}</p></div>`);
              _push2(ssrRenderComponent(_component_Tag, {
                value: campaign.statusLabel,
                class: "flex h-7 w-fit items-center justify-center rounded-md px-3 text-xs font-bold",
                style: statusStyle(campaign.status)
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-sm font-medium text-slate-300"${_scopeId}>${ssrInterpolate(unref(t)("campaigns.creators", campaign.creators))}</p>`);
              _push2(ssrRenderComponent(_component_ProgressBar, {
                value: campaign.creators.current / campaign.creators.total * 100,
                "show-value": false,
                class: "h-2 w-28 rounded-full bg-[#223041]",
                pt: { value: { class: "rounded-full bg-[#8B5CF6]" } }
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center"${_scopeId}><!--[-->`);
              ssrRenderList(3, (avatar) => {
                _push2(ssrRenderComponent(_component_Avatar, {
                  key: avatar,
                  image: unref(userAvatar),
                  shape: "circle",
                  class: "-ml-2 h-8 w-8 border-2 border-[#151821] object-cover first:ml-0"
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              if (campaign.extraCreators > 0) {
                _push2(`<span class="ml-2 text-xs font-semibold text-slate-300"${_scopeId}> +${ssrInterpolate(campaign.extraCreators)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center gap-1 text-sm font-semibold text-slate-300"${_scopeId}><i class="pi pi-comments text-base text-slate-300"${_scopeId}></i> ${ssrInterpolate(campaign.messagesCount)}</div>`);
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                icon: "pi pi-ellipsis-h",
                text: "",
                rounded: "",
                class: "flex h-8 w-8 items-center justify-center text-slate-400 hover:bg-white/5 hover:text-white",
                "aria-label": "Campaign menu"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("p", { class: "text-[18px] font-medium" }, toDisplayString(unref(t)("campaigns.myCampaigns")), 1),
                createVNode(_component_Button, {
                  type: "button",
                  text: "",
                  label: unref(t)("common.seeAll"),
                  icon: "pi pi-arrow-right",
                  "icon-pos": "right",
                  class: "text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]"
                }, null, 8, ["label"])
              ]),
              createVNode("div", { class: "mt-3 flex items-center gap-8 border-b border-white/5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (tab) => {
                  return openBlock(), createBlock(_component_Button, {
                    key: tab.value,
                    type: "button",
                    text: "",
                    label: tab.label,
                    class: ["rounded-none pb-3 text-sm font-semibold transition", filter.value === tab.value ? "border-b-2 border-[#8B5CF6] text-white" : "border-b-2 border-transparent text-slate-400 hover:text-white"],
                    onClick: ($event) => filter.value = tab.value
                  }, null, 8, ["label", "class", "onClick"]);
                }), 128))
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(filteredCampaigns.value, (campaign) => {
                return openBlock(), createBlock("div", {
                  key: campaign.id,
                  class: "grid grid-cols-[52px_1.5fr_90px_110px_120px_120px_70px_32px] items-center gap-4 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]"
                }, [
                  campaign.image ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: campaign.image,
                    alt: "",
                    class: "h-12 w-12 rounded-lg object-cover"
                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-700 p-1 text-center text-[10px] font-bold leading-tight text-white"
                  }, toDisplayString(campaign.title.replace(/\d/g, "")), 1)),
                  createVNode("div", { class: "min-w-0" }, [
                    createVNode("p", { class: "truncate text-sm font-bold text-white" }, toDisplayString(campaign.title), 1),
                    createVNode("p", { class: "truncate text-xs font-medium text-slate-400" }, toDisplayString(campaign.brand), 1)
                  ]),
                  createVNode(_component_Tag, {
                    value: campaign.statusLabel,
                    class: "flex h-7 w-fit items-center justify-center rounded-md px-3 text-xs font-bold",
                    style: statusStyle(campaign.status)
                  }, null, 8, ["value", "style"]),
                  createVNode("p", { class: "text-sm font-medium text-slate-300" }, toDisplayString(unref(t)("campaigns.creators", campaign.creators)), 1),
                  createVNode(_component_ProgressBar, {
                    value: campaign.creators.current / campaign.creators.total * 100,
                    "show-value": false,
                    class: "h-2 w-28 rounded-full bg-[#223041]",
                    pt: { value: { class: "rounded-full bg-[#8B5CF6]" } }
                  }, null, 8, ["value"]),
                  createVNode("div", { class: "flex items-center" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(3, (avatar) => {
                      return createVNode(_component_Avatar, {
                        key: avatar,
                        image: unref(userAvatar),
                        shape: "circle",
                        class: "-ml-2 h-8 w-8 border-2 border-[#151821] object-cover first:ml-0"
                      }, null, 8, ["image"]);
                    }), 64)),
                    campaign.extraCreators > 0 ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "ml-2 text-xs font-semibold text-slate-300"
                    }, " +" + toDisplayString(campaign.extraCreators), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex items-center gap-1 text-sm font-semibold text-slate-300" }, [
                    createVNode("i", { class: "pi pi-comments text-base text-slate-300" }),
                    createTextVNode(" " + toDisplayString(campaign.messagesCount), 1)
                  ]),
                  createVNode(_component_Button, {
                    type: "button",
                    icon: "pi pi-ellipsis-h",
                    text: "",
                    rounded: "",
                    class: "flex h-8 w-8 items-center justify-center text-slate-400 hover:bg-white/5 hover:text-white",
                    "aria-label": "Campaign menu"
                  })
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/DashboardCampaignCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DashboardCampaignCard = Object.assign(_sfc_main$4, { __name: "CardDashboardCampaignCard" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DashboardStatsCardGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" }, _attrs))}>`);
      _push(ssrRenderComponent(StatCard, {
        color: "#8B5CF628",
        icon: "pi-folder",
        "icon-color": "#8B5CF6",
        count: 6,
        title: unref(t)("stats.myCampaigns"),
        "uphill-text": unref(t)("stats.inProgress")
      }, null, _parent));
      _push(ssrRenderComponent(StatCard, {
        color: "#22C55E28",
        icon: "pi-users",
        "icon-color": "#22C55E",
        count: 27,
        title: unref(t)("stats.creatorsInCampaigns"),
        "uphill-text": unref(t)("stats.newThisMonth")
      }, null, _parent));
      _push(ssrRenderComponent(StatCard, {
        color: "#F59E0B28",
        icon: "pi-list-check",
        "icon-color": "#F59E0B",
        count: 12,
        title: unref(t)("stats.activeTasks"),
        "uphill-text": unref(t)("stats.needAttention")
      }, null, _parent));
      _push(ssrRenderComponent(StatCard, {
        color: "#0EA5E928",
        icon: "pi-check-circle",
        "icon-color": "#0EA5E9",
        count: 8,
        title: unref(t)("stats.tasksToday"),
        "uphill-text": unref(t)("stats.planned")
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/DashboardStatsCardGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DashboardStatsCardGroup = Object.assign(_sfc_main$3, { __name: "CardDashboardStatsCardGroup" });
const tasks = [
  {
    id: 1,
    title: "Prześlij brief dla 3 twórców",
    campaign: "New Collection Launch",
    status: "todo",
    statusLabel: "Do zrobienia",
    priority: "high",
    priorityLabel: "Wysoki",
    dueDate: "Dziś, 13:00",
    completed: false
  },
  {
    id: 2,
    title: "Zweryfikuj content od 2 twórców",
    campaign: "Back to School",
    status: "todo",
    statusLabel: "Do zrobienia",
    priority: "medium",
    priorityLabel: "Średni",
    dueDate: "Jutro, 10:00",
    completed: false
  },
  {
    id: 3,
    title: "Dodaj 5 nowych twórców do bazy",
    campaign: "Black Friday 2024",
    status: "todo",
    statusLabel: "Do zrobienia",
    priority: "low",
    priorityLabel: "Niski",
    dueDate: "Jutro, 14:00",
    completed: false
  },
  {
    id: 4,
    title: "Odpowiedz na wiadomości od twórców",
    campaign: "Summer Sale 2024",
    status: "inProgress",
    statusLabel: "W trakcie",
    priority: "high",
    priorityLabel: "Wysoki",
    dueDate: "Dziś, 11:00",
    completed: false
  },
  {
    id: 5,
    title: "Ustal szczegóły współpracy",
    campaign: "Summer Sale 2024",
    status: "todo",
    statusLabel: "Do zrobienia",
    priority: "medium",
    priorityLabel: "Średni",
    dueDate: "Dziś, 15:00",
    completed: false
  },
  {
    id: 6,
    title: "Sprawdź statystyki kampanii",
    campaign: "Back to School",
    status: "inProgress",
    statusLabel: "W trakcie",
    priority: "low",
    priorityLabel: "Niski",
    dueDate: "Piątek, 09:00",
    completed: false
  },
  {
    id: 7,
    title: "Przygotuj raport dla klienta",
    campaign: "Black Friday 2024",
    status: "closed",
    statusLabel: "Zakończone",
    priority: "medium",
    priorityLabel: "Średni",
    dueDate: "Poniedziałek, 12:00",
    completed: true
  },
  {
    id: 8,
    title: "Zamknij kampanię testową",
    campaign: "New Collection Launch",
    status: "closed",
    statusLabel: "Zakończone",
    priority: "low",
    priorityLabel: "Niski",
    dueDate: "Wczoraj, 16:00",
    completed: true
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DashboardTaskCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const filter = ref("todo");
    const checkedTasks = ref([]);
    const checkboxPt = {
      root: { class: "relative inline-flex h-5 w-5 items-center justify-center" },
      input: { class: "absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" },
      box: {
        class: "flex h-5 w-5 items-center justify-center rounded-md border border-slate-600 bg-transparent text-white"
      },
      icon: { class: "text-[10px] text-white" }
    };
    const tabs = computed(() => [
      { label: t("tasks.todo"), value: "todo" },
      { label: t("tasks.inProgress"), value: "inProgress" },
      { label: t("tasks.closed"), value: "closed" }
    ]);
    const filteredTasks = computed(() => tasks.filter((task) => task.status === filter.value));
    function priorityStyle(priority) {
      const styles = {
        low: { backgroundColor: "#22C55E28", color: "#22C55E" },
        medium: { backgroundColor: "#F59E0B28", color: "#F59E0B" },
        high: { backgroundColor: "#EF444428", color: "#EF4444" }
      };
      return styles[priority] ?? {};
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = script$4;
      const _component_Button = script$3;
      const _component_Checkbox = script$8;
      const _component_Tag = script$5;
      _push(ssrRenderComponent(_component_Card, mergeProps({ pt: {
        root: { class: "h-full w-full rounded-2xl bg-[#151821] px-6 py-4 text-white shadow-xl shadow-black/20" },
        body: { class: "h-full p-0" },
        content: { class: "h-full p-0" }
      } }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><p class="text-[18px] font-medium"${_scopeId}>${ssrInterpolate(unref(t)("tasks.title"))}</p>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              text: "",
              label: unref(t)("common.seeAll"),
              icon: "pi pi-arrow-right",
              "icon-pos": "right",
              class: "text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-3 flex items-center gap-8 border-b border-white/5"${_scopeId}><!--[-->`);
            ssrRenderList(tabs.value, (tab) => {
              _push2(ssrRenderComponent(_component_Button, {
                key: tab.value,
                type: "button",
                text: "",
                label: tab.label,
                class: ["rounded-none pb-3 text-sm font-semibold transition", filter.value === tab.value ? "border-b-2 border-[#8B5CF6] text-white" : "border-b-2 border-transparent text-slate-400 hover:text-white"],
                onClick: ($event) => filter.value = tab.value
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><!--[-->`);
            ssrRenderList(filteredTasks.value, (task) => {
              _push2(`<div class="grid h-16 grid-cols-[4%_40%_28%_8%_10%] items-center gap-2 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Checkbox, {
                modelValue: checkedTasks.value,
                "onUpdate:modelValue": ($event) => checkedTasks.value = $event,
                value: task.id,
                class: "h-5 w-5 rounded-md border border-slate-600 bg-transparent",
                pt: checkboxPt
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-[14px]"${_scopeId}>${ssrInterpolate(task.title.slice(0, 40))}</p><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Tag, {
                value: task.campaign,
                class: "flex h-7 w-fit items-center justify-center rounded-md bg-[#2A2F3D80] px-3 text-xs font-bold text-slate-400"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_Tag, {
                value: task.priorityLabel,
                class: "flex h-7 w-14 items-center justify-center rounded-md px-3 text-xs font-bold",
                style: priorityStyle(task.priority)
              }, null, _parent2, _scopeId));
              _push2(`<p class="w-24 text-end"${_scopeId}>${ssrInterpolate(task.dueDate)}</p></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("p", { class: "text-[18px] font-medium" }, toDisplayString(unref(t)("tasks.title")), 1),
                createVNode(_component_Button, {
                  type: "button",
                  text: "",
                  label: unref(t)("common.seeAll"),
                  icon: "pi pi-arrow-right",
                  "icon-pos": "right",
                  class: "text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]"
                }, null, 8, ["label"])
              ]),
              createVNode("div", { class: "mt-3 flex items-center gap-8 border-b border-white/5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (tab) => {
                  return openBlock(), createBlock(_component_Button, {
                    key: tab.value,
                    type: "button",
                    text: "",
                    label: tab.label,
                    class: ["rounded-none pb-3 text-sm font-semibold transition", filter.value === tab.value ? "border-b-2 border-[#8B5CF6] text-white" : "border-b-2 border-transparent text-slate-400 hover:text-white"],
                    onClick: ($event) => filter.value = tab.value
                  }, null, 8, ["label", "class", "onClick"]);
                }), 128))
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(filteredTasks.value, (task) => {
                return openBlock(), createBlock("div", {
                  key: task.id,
                  class: "grid h-16 grid-cols-[4%_40%_28%_8%_10%] items-center gap-2 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]"
                }, [
                  createVNode(_component_Checkbox, {
                    modelValue: checkedTasks.value,
                    "onUpdate:modelValue": ($event) => checkedTasks.value = $event,
                    value: task.id,
                    class: "h-5 w-5 rounded-md border border-slate-600 bg-transparent",
                    pt: checkboxPt
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                  createVNode("p", { class: "text-[14px]" }, toDisplayString(task.title.slice(0, 40)), 1),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_Tag, {
                      value: task.campaign,
                      class: "flex h-7 w-fit items-center justify-center rounded-md bg-[#2A2F3D80] px-3 text-xs font-bold text-slate-400"
                    }, null, 8, ["value"])
                  ]),
                  createVNode(_component_Tag, {
                    value: task.priorityLabel,
                    class: "flex h-7 w-14 items-center justify-center rounded-md px-3 text-xs font-bold",
                    style: priorityStyle(task.priority)
                  }, null, 8, ["value", "style"]),
                  createVNode("p", { class: "w-24 text-end" }, toDisplayString(task.dueDate), 1)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/DashboardTaskCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DashboardTaskCard = Object.assign(_sfc_main$2, { __name: "CardDashboardTaskCard" });
const deadlines = [
  {
    id: 1,
    day: "20",
    month: "MAJ",
    title: "Spotkanie z zespołem",
    subtitle: "Przegląd kampanii",
    datetime: "2026-05-20T10:00:00",
    endDatetime: "2026-05-20T11:00:00",
    color: "#8B5CF6"
  },
  {
    id: 2,
    day: "21",
    month: "MAJ",
    title: "Prezentacja dla klienta",
    subtitle: "Summer Sale 2024",
    datetime: "2026-05-21T14:00:00",
    endDatetime: "2026-05-21T15:00:00",
    color: "#F59E0B"
  },
  {
    id: 3,
    day: "23",
    month: "MAJ",
    title: "Deadline na content",
    subtitle: "New Collection Launch",
    datetime: "2026-05-23T23:59:00",
    endDatetime: null,
    color: "#EF4444"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DashboardTermsCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    function formatDeadlineTime(datetime, endDateTime) {
      const language = locale.value === "pl" ? "pl-PL" : "en-US";
      const start = new Date(datetime);
      const startTime = start.toLocaleTimeString(language, {
        hour: "2-digit",
        minute: "2-digit"
      });
      if (!endDateTime) return startTime;
      const end = new Date(endDateTime);
      const endTime = end.toLocaleTimeString(language, {
        hour: "2-digit",
        minute: "2-digit"
      });
      return `${startTime} - ${endTime}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = script$4;
      const _component_Button = script$3;
      _push(ssrRenderComponent(_component_Card, mergeProps({ pt: {
        root: { class: "h-full w-full rounded-2xl bg-[#151821] px-6 py-4 text-white shadow-xl shadow-black/20" },
        body: { class: "h-full p-0" },
        content: { class: "h-full p-0" }
      } }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 flex items-center justify-between"${_scopeId}><div class="flex"${_scopeId}><div class="mr-2 mt-1 flex h-8 w-8 flex-col items-center justify-center rounded-xl bg-[#EF444428]"${_scopeId}><i class="pi pi-calendar text-sm text-[#EF4444]"${_scopeId}></i></div><div${_scopeId}><p class="text-[18px] font-medium"${_scopeId}>${ssrInterpolate(unref(t)("deadlines.title"))}</p><p class="text-[12px] font-medium text-slate-400"${_scopeId}>${ssrInterpolate(unref(t)("deadlines.subtitle"))}</p></div></div>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              text: "",
              label: unref(t)("common.seeAll"),
              icon: "pi pi-arrow-right",
              "icon-pos": "right",
              class: "text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]"
            }, null, _parent2, _scopeId));
            _push2(`</div><!--[-->`);
            ssrRenderList(unref(deadlines), (deadline) => {
              _push2(`<div class="flex items-center justify-between gap-2 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]"${_scopeId}><div class="flex items-center justify-center"${_scopeId}><div class="flex h-12 w-12 flex-col items-center rounded-xl bg-[#2A2F3D89]"${_scopeId}><p class="text-[18px] font-semibold"${_scopeId}>${ssrInterpolate(deadline.day)}</p><p class="text-[12px] text-slate-400"${_scopeId}>${ssrInterpolate(deadline.month)}</p></div><div class="ml-2 mr-3 h-10 w-1 rounded-full bg-[#8B5CF6]"${_scopeId}></div><div${_scopeId}><p class="text-[15px] font-medium"${_scopeId}>${ssrInterpolate(deadline.title)}</p><p class="text-[12px] font-medium text-slate-400"${_scopeId}>${ssrInterpolate(deadline.subtitle)}</p></div></div><p class="text-[16px] text-slate-400"${_scopeId}>${ssrInterpolate(formatDeadlineTime(deadline.datetime, deadline.endDatetime))}</p></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("div", { class: "mb-2 flex items-center justify-between" }, [
                createVNode("div", { class: "flex" }, [
                  createVNode("div", { class: "mr-2 mt-1 flex h-8 w-8 flex-col items-center justify-center rounded-xl bg-[#EF444428]" }, [
                    createVNode("i", { class: "pi pi-calendar text-sm text-[#EF4444]" })
                  ]),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-[18px] font-medium" }, toDisplayString(unref(t)("deadlines.title")), 1),
                    createVNode("p", { class: "text-[12px] font-medium text-slate-400" }, toDisplayString(unref(t)("deadlines.subtitle")), 1)
                  ])
                ]),
                createVNode(_component_Button, {
                  type: "button",
                  text: "",
                  label: unref(t)("common.seeAll"),
                  icon: "pi pi-arrow-right",
                  "icon-pos": "right",
                  class: "text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]"
                }, null, 8, ["label"])
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(deadlines), (deadline) => {
                return openBlock(), createBlock("div", {
                  key: deadline.id,
                  class: "flex items-center justify-between gap-2 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]"
                }, [
                  createVNode("div", { class: "flex items-center justify-center" }, [
                    createVNode("div", { class: "flex h-12 w-12 flex-col items-center rounded-xl bg-[#2A2F3D89]" }, [
                      createVNode("p", { class: "text-[18px] font-semibold" }, toDisplayString(deadline.day), 1),
                      createVNode("p", { class: "text-[12px] text-slate-400" }, toDisplayString(deadline.month), 1)
                    ]),
                    createVNode("div", { class: "ml-2 mr-3 h-10 w-1 rounded-full bg-[#8B5CF6]" }),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-[15px] font-medium" }, toDisplayString(deadline.title), 1),
                      createVNode("p", { class: "text-[12px] font-medium text-slate-400" }, toDisplayString(deadline.subtitle), 1)
                    ])
                  ]),
                  createVNode("p", { class: "text-[16px] text-slate-400" }, toDisplayString(formatDeadlineTime(deadline.datetime, deadline.endDatetime)), 1)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/DashboardTermsCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DashboardTermsCard = Object.assign(_sfc_main$1, { __name: "CardDashboardTermsCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const search = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconField = script;
      const _component_InputIcon = script$1;
      const _component_InputText = script$2;
      const _component_Button = script$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-2 flex h-[7%] items-center justify-between px-6 pt-2"><div><p class="text-3xl font-medium">${ssrInterpolate(unref(t)("app.hello", { name: "UserName" }))}</p><p class="mt-1 text-gray-400">${ssrInterpolate(unref(t)("app.welcomeDashboard"))}</p></div><div class="-mt-6 flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_IconField, {
        "icon-position": "left",
        class: "flex w-50 items-center rounded-md border border-zinc-700 bg-zinc-800 text-sm text-white shadow transition-all focus-within:w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, { class: "pi pi-search text-zinc-400" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              modelValue: search.value,
              "onUpdate:modelValue": ($event) => search.value = $event,
              spellcheck: "false",
              name: "text",
              placeholder: unref(t)("searchPlaceholder"),
              class: "w-20 bg-transparent py-1.5 pl-10 text-white outline-none transition-all placeholder:text-zinc-400 focus:w-48"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, { class: "pi pi-search text-zinc-400" }),
              createVNode(_component_InputText, {
                modelValue: search.value,
                "onUpdate:modelValue": ($event) => search.value = $event,
                spellcheck: "false",
                name: "text",
                placeholder: unref(t)("searchPlaceholder"),
                class: "w-20 bg-transparent py-1.5 pl-10 text-white outline-none transition-all placeholder:text-zinc-400 focus:w-48"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        icon: "pi pi-bell",
        text: "",
        rounded: "",
        class: "h-10 w-10 text-white hover:bg-white/10",
        "aria-label": "Notifications"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(DashboardStatsCardGroup, { class: "max-h-[13%] max-w-full px-6" }, null, _parent));
      _push(`<div class="mx-8 mt-7 grid grid-cols-[3fr_2fr] items-start gap-6"><div class="flex min-w-0 flex-col gap-6">`);
      _push(ssrRenderComponent(DashboardCampaignCard, { class: "h-[40vh] min-w-0" }, null, _parent));
      _push(ssrRenderComponent(DashboardTermsCard, { class: "h-[30vh] min-w-0" }, null, _parent));
      _push(`</div><div class="flex min-w-0 flex-col gap-6">`);
      _push(ssrRenderComponent(DashboardTaskCard, { class: "h-[50vh] min-w-0" }, null, _parent));
      _push(ssrRenderComponent(DashboardActionsCard, { class: "h-[20vh] min-w-0" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-DnPll--n');
//# sourceMappingURL=index-DnPll--n.mjs.map

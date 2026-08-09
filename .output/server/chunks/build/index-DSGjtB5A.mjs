globalThis.__timing__.logStart('Load chunks/build/index-DSGjtB5A');import script$4 from './index-DKGroQ-w.mjs';
import script$3 from './index-xKFz547g.mjs';
import script$2 from './index-wEFFy2XM.mjs';
import script$1 from './index-CGTrSIDr.mjs';
import script from './index-DDTkROm7.mjs';
import { defineComponent, ref, computed, unref, withCtx, createVNode, toDisplayString, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import script$6 from './index-DZBl-9-0.mjs';
import script$5 from './index-b2tP6tqM.mjs';
import { f as useI18n } from './server.mjs';
import { S as StatCard } from './StatCard-Bol7zbzD.mjs';
import '@primeuix/utils';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/utils/zindex';
import './index-1v7fOn3J.mjs';
import './index-BH9iduCK.mjs';
import './index-DxKIPVaB.mjs';
import './index-DI7ROuCk.mjs';
import '@primeuix/styled';
import './index-CP_fvbAb.mjs';
import './index-CobSNMix.mjs';
import './index-CLrwot36.mjs';
import './index-RZE_erJD.mjs';
import './index-BJFn3Jal.mjs';
import './index-rAVNvoJo.mjs';
import '@primeuix/utils/eventbus';
import './index-zZrFrjQS.mjs';
import './index-DmGtcQDa.mjs';
import './index-Dl3T3yr5.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
import './index-CXHjtVgb.mjs';
import '@primeuix/styles/virtualscroller';
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import '@primeuix/styles/select';
import './index-QxS0XFpr.mjs';
import '@primeuix/styles/badge';
import '@primeuix/styles/button';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/tag';
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
import '@primeuix/styles/base';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-CEYUf-ld.mjs';
import '@primeuix/styles/card';

const campaignsResponse = {
  totalItems: 97,
  totalPages: 20,
  currentPage: 1,
  itemsPerPage: 5,
  campaigns: [
    {
      id: "cmp_001",
      title: "Summer Sale 2024",
      brand: "BrandLab",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXgkq0_FGkTcreIP0e23D66bjhoP0WFVD-w&s",
      status: "inProgress",
      statusLabel: "W trakcie",
      platforms: ["Instagram", "TikTok"],
      budget: {
        amount: null,
        currency: "PLN",
        hidden: true
      },
      guardian: {
        name: "Ty"
      },
      creators: {
        current: 12,
        total: 15
      },
      tasks: {
        current: 26,
        total: 40
      },
      progress: 65,
      reach: {
        formatted: "1.2M"
      },
      dates: {
        createdAt: "2024-05-15T00:00:00.000Z",
        updatedAt: "2024-05-24T11:30:00.000Z",
        startsAt: null,
        endedAt: null
      }
    },
    {
      id: "cmp_002",
      title: "New Collection Launch",
      brand: "StyleStore",
      imageUrl: "https://www.ideoforce.pl/gfx/ideo-2015/pl/corekategorie/197/70.png",
      status: "inProgress",
      statusLabel: "W trakcie",
      platforms: ["Instagram"],
      budget: {
        amount: 25e3,
        currency: "PLN",
        hidden: false
      },
      guardian: {
        name: "Anna Kowalska"
      },
      creators: {
        current: 8,
        total: 10
      },
      tasks: {
        current: 18,
        total: 30
      },
      progress: 60,
      reach: {
        formatted: "850K"
      },
      dates: {
        createdAt: "2024-05-02T00:00:00.000Z",
        updatedAt: "2024-05-23T15:42:00.000Z",
        startsAt: null,
        endedAt: null
      }
    },
    {
      id: "cmp_003",
      title: "Black Friday 2024",
      brand: "EvoShop",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYU4cNtvTE7hSZMkEUbufO1xAQSjwNx5g0Q&s",
      status: "inProgress",
      statusLabel: "W trakcie",
      platforms: ["Instagram", "TikTok", "YouTube"],
      budget: {
        amount: 4e4,
        currency: "PLN",
        hidden: false
      },
      guardian: {
        name: "Ty"
      },
      creators: {
        current: 20,
        total: 25
      },
      tasks: {
        current: 32,
        total: 60
      },
      progress: 53,
      reach: {
        formatted: "2.1M"
      },
      dates: {
        createdAt: "2024-04-10T00:00:00.000Z",
        updatedAt: "2024-05-21T00:00:00.000Z",
        startsAt: null,
        endedAt: null
      }
    },
    {
      id: "cmp_004",
      title: "Back to School",
      brand: "BrandLab",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRKeVU_nthKfwn0CGOkjR8pZEVB0d2nb9YQ&s",
      status: "planned",
      statusLabel: "Planowana",
      platforms: ["Instagram", "TikTok"],
      budget: {
        amount: 18e3,
        currency: "PLN",
        hidden: false
      },
      guardian: {
        name: "Michał Nowak"
      },
      creators: {
        current: 5,
        total: 8
      },
      tasks: {
        current: 0,
        total: 20
      },
      progress: 0,
      reach: {
        formatted: null
      },
      dates: {
        createdAt: "2024-05-20T00:00:00.000Z",
        updatedAt: null,
        startsAt: "2024-08-01T00:00:00.000Z",
        endedAt: null
      }
    },
    {
      id: "cmp_005",
      title: "Spring Collection 2024",
      brand: "StyleStore",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGga8FoiUIZgBHnlrpRvFFzIP6HLxwSlp2Q&s",
      status: "closed",
      statusLabel: "Zakończona",
      platforms: ["Instagram"],
      budget: {
        amount: 2e4,
        currency: "PLN",
        hidden: false
      },
      guardian: {
        name: "Anna Kowalska"
      },
      creators: {
        current: 10,
        total: 10
      },
      tasks: {
        current: 30,
        total: 30
      },
      progress: 100,
      reach: {
        formatted: "1.8M"
      },
      dates: {
        createdAt: "2024-03-15T00:00:00.000Z",
        updatedAt: null,
        startsAt: null,
        endedAt: "2024-04-30T00:00:00.000Z"
      }
    },
    {
      id: "cmp_006",
      title: "Winter Collection 2025",
      brand: "StyleStore",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRKeVU_nthKfwn0CGOkjR8pZEVB0d2nb9YQ&s",
      status: "closed",
      statusLabel: "Zakończona",
      platforms: ["Instagram"],
      budget: {
        amount: 25e3,
        currency: "PLN",
        hidden: false
      },
      guardian: {
        name: "Anna Kowalska"
      },
      creators: {
        current: 10,
        total: 10
      },
      tasks: {
        current: 30,
        total: 30
      },
      progress: 100,
      reach: {
        formatted: "1.8M"
      },
      dates: {
        createdAt: "2024-03-15T00:00:00.000Z",
        updatedAt: null,
        startsAt: null,
        endedAt: "2024-04-30T00:00:00.000Z"
      }
    }
  ]
};
const itemsPerPage = 5;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CampaignDataTable",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const page = ref(1);
    const pagedCampaigns = computed(() => campaignsResponse.campaigns.slice(fromItem.value - 1, toItem.value));
    const totalPages = computed(() => Math.ceil(campaignsResponse.totalItems / itemsPerPage));
    const fromItem = computed(() => (page.value - 1) * itemsPerPage + 1);
    const toItem = computed(() => Math.min(page.value * itemsPerPage, campaignsResponse.totalItems));
    const paginationItems = computed(() => {
      const total = totalPages.value;
      const current = page.value;
      if (total <= 5) return Array.from({ length: total }, (_, index) => index + 1);
      if (current < 3) return [1, 2, 3, "...", total];
      if (current >= total - 2) return [1, "...", total - 2, total - 1, total];
      return [1, "...", current - 1, current, current + 1, "...", total];
    });
    function goToPage(selectedPage) {
      if (selectedPage < 1 || selectedPage > totalPages.value) return;
      page.value = selectedPage;
    }
    function nextPage() {
      goToPage(page.value + 1);
    }
    function prevPage() {
      goToPage(page.value - 1);
    }
    function statusStyle(status) {
      const styles = {
        inProgress: { backgroundColor: "#8B5CF628", color: "#8B5CF6" },
        planned: { backgroundColor: "#0EA5E928", color: "#0EA5E9" },
        closed: { backgroundColor: "#EF444428", color: "#EF4444" }
      };
      return styles[status] ?? {};
    }
    function formatDate(value) {
      if (!value) return "-";
      return new Date(value).toLocaleDateString(locale.value === "pl" ? "pl-PL" : "en-US");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tag = script$5;
      const _component_ProgressBar = script$6;
      const _component_Button = script$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden rounded-2xl border border-white/6 bg-[#151821] shadow-[0_18px_45px_-30px_rgba(0,0,0,0.95)]" }, _attrs))}><!--[-->`);
      ssrRenderList(pagedCampaigns.value, (campaign) => {
        _push(`<article class="grid grid-cols-[112px_1.35fr_0.85fr_0.65fr_0.65fr_0.85fr_42px] items-center gap-5 border-b border-white/5 px-4 py-3 last:border-b-0 sm:px-6">`);
        if (campaign.imageUrl) {
          _push(`<img${ssrRenderAttr("src", campaign.imageUrl)} alt="campaign logo" class="h-19 w-19 rounded-lg object-cover">`);
        } else {
          _push(`<div class="flex h-19 w-19 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-700 p-1 text-center text-[10px] font-bold leading-tight text-white">${ssrInterpolate(campaign.title.replace(/\d/g, ""))}</div>`);
        }
        _push(`<div class="min-w-0"><div class="flex items-center gap-3"><p class="truncate text-base font-bold text-white">${ssrInterpolate(campaign.title)}</p>`);
        _push(ssrRenderComponent(_component_Tag, {
          value: campaign.statusLabel,
          class: "flex h-5 w-fit items-center justify-center rounded-md px-3 text-xs font-bold",
          style: statusStyle(campaign.status)
        }, null, _parent));
        _push(`</div><p class="mt-1 truncate text-xs font-medium text-slate-400"><i class="pi pi-building mr-1 text-[11px]"></i>${ssrInterpolate(campaign.brand)}</p><div class="mt-2 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400"><!--[-->`);
        ssrRenderList(campaign.platforms, (platform) => {
          _push(`<span class="truncate"><i class="pi pi-instagram mr-1 text-[#E879F9]"></i>${ssrInterpolate(platform)}</span>`);
        });
        _push(`<!--]--><span class="flex h-6 items-center rounded-lg bg-[#090c13] px-2"><i class="${ssrRenderClass(["pi mr-1 text-orange-400/70", campaign.budget.hidden ? "pi-lock" : "pi-lock-open"])}"></i> ${ssrInterpolate(unref(t)("campaignPage.budget"))}: ${ssrInterpolate(campaign.budget.hidden ? unref(t)("campaignPage.hidden") : `${campaign.budget.amount} ${campaign.budget.currency}`)}</span><span class="flex h-6 items-center rounded-lg bg-[#090c13] px-2"><i class="pi pi-user mr-1 text-[#A78BFA]"></i>${ssrInterpolate(unref(t)("campaignPage.guardian"))}: ${ssrInterpolate(campaign.guardian.name)}</span></div><div class="mt-2 flex gap-4 text-xs font-medium text-slate-500"><p>${ssrInterpolate(unref(t)("campaignPage.created"))}: ${ssrInterpolate(formatDate(campaign.dates.createdAt))}</p><p>${ssrInterpolate(campaign.dates.startsAt ? unref(t)("campaignPage.starts") : unref(t)("campaignPage.updated"))}: ${ssrInterpolate(formatDate(campaign.dates.startsAt ?? campaign.dates.updatedAt))}</p></div></div><div><p class="text-xs text-slate-400">${ssrInterpolate(unref(t)("campaignPage.creators"))}</p><p class="mt-1 text-base font-semibold text-white">${ssrInterpolate(campaign.creators.current)} / ${ssrInterpolate(campaign.creators.total)}</p></div><div><p class="text-xs text-slate-400">${ssrInterpolate(unref(t)("campaignPage.tasks"))}</p><p class="mt-1 text-base font-semibold text-white">${ssrInterpolate(campaign.tasks.current)} / ${ssrInterpolate(campaign.tasks.total)}</p></div><div><p class="text-xs text-slate-400">${ssrInterpolate(unref(t)("campaignPage.progress"))}</p><p class="mt-1 text-sm font-semibold text-white">${ssrInterpolate(campaign.progress)}%</p>`);
        _push(ssrRenderComponent(_component_ProgressBar, {
          value: campaign.progress,
          "show-value": false,
          class: "mt-1 h-2 w-28 rounded-full bg-[#223041]",
          pt: { value: { class: "rounded-full bg-[#8B5CF6]" } }
        }, null, _parent));
        _push(`</div><div><p class="text-xs text-slate-400">${ssrInterpolate(campaign.dates.startsAt ? unref(t)("campaignPage.starts") : unref(t)("campaignPage.reach"))}</p><p class="mt-1 text-base font-semibold text-white">${ssrInterpolate(campaign.dates.startsAt ? formatDate(campaign.dates.startsAt) : campaign.reach.formatted ?? "-")}</p></div>`);
        _push(ssrRenderComponent(_component_Button, {
          type: "button",
          icon: "pi pi-ellipsis-h",
          text: "",
          rounded: "",
          class: "flex h-8 w-8 items-center justify-center text-slate-400 hover:bg-white/5 hover:text-white",
          "aria-label": "Campaign menu"
        }, null, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--><div class="flex items-center justify-between border-t border-white/5 bg-[#151821] px-4 py-3 sm:px-6"><p class="text-sm text-slate-400">${ssrInterpolate(unref(t)("campaignPage.showing", { from: fromItem.value, to: toItem.value, total: unref(campaignsResponse).totalItems }))}</p><nav aria-label="Pagination" class="isolate inline-flex gap-2 rounded-md">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        icon: "pi pi-chevron-left",
        text: "",
        class: "h-9 w-9 rounded-md text-slate-400 hover:bg-white/5",
        "aria-label": "Previous",
        onClick: prevPage
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(paginationItems.value, (item, index) => {
        _push(ssrRenderComponent(_component_Button, {
          key: `${item}-${index}`,
          type: "button",
          text: "",
          label: String(item),
          disabled: item === "...",
          class: ["h-9 min-w-9 rounded-md px-3 text-sm font-semibold", page.value === item ? "bg-[#784DFF30] text-[#784DFF]" : "text-slate-400 hover:bg-white/5"],
          onClick: ($event) => item !== "..." && goToPage(item)
        }, null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        icon: "pi pi-chevron-right",
        text: "",
        class: "h-9 w-9 rounded-md text-slate-400 hover:bg-white/5",
        "aria-label": "Next",
        onClick: nextPage
      }, null, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/campaign/CampaignDataTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CampaignDataTable = Object.assign(_sfc_main$2, { __name: "CardCampaignDataTable" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CampaignStatCardGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" }, _attrs))}>`);
      _push(ssrRenderComponent(StatCard, {
        color: "#8B5CF628",
        icon: "pi-folder",
        "icon-color": "#8B5CF6",
        count: 24,
        title: unref(t)("campaignPage.allCampaigns"),
        "uphill-text": unref(t)("stats.newThisMonth").replace("5", "3")
      }, null, _parent));
      _push(ssrRenderComponent(StatCard, {
        color: "#22C55E28",
        icon: "pi-play-circle",
        "icon-color": "#22C55E",
        count: 8,
        title: unref(t)("campaigns.inProgress"),
        "uphill-text": "2 więcej niż w zeszłym miesiącu"
      }, null, _parent));
      _push(ssrRenderComponent(StatCard, {
        color: "#0EA5E928",
        icon: "pi-calendar",
        "icon-color": "#0EA5E9",
        count: 6,
        title: unref(t)("campaigns.planned"),
        "uphill-text": "1 w tym miesiącu"
      }, null, _parent));
      _push(ssrRenderComponent(StatCard, {
        color: "#8B5CF628",
        icon: "pi-check-circle",
        "icon-color": "#8B5CF6",
        count: 10,
        title: unref(t)("campaigns.closed"),
        "uphill-text": "15% skuteczności średnio"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/campaign/CampaignStatCardGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CampaignStatCardGroup = Object.assign(_sfc_main$1, { __name: "CardCampaignStatCardGroup" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const filterTab = ref("all");
    const selectedFilterSort = ref("");
    const search = ref("");
    const tabs = computed(() => [
      { label: t("common.all"), value: "all", count: "24" },
      { label: t("campaigns.inProgress"), value: "inProgress", count: "8" },
      { label: t("campaigns.planned"), value: "planned", count: "6" },
      { label: t("campaigns.closed"), value: "closed", count: "10" },
      { label: t("campaignPage.stopped"), value: "stopped", count: "2" },
      { label: t("campaignPage.archived"), value: "archived", count: "3" }
    ]);
    const sortOptions = computed(() => [
      { label: t("campaignPage.sortNewest"), value: "newest" },
      { label: t("campaignPage.sortOldest"), value: "oldest" },
      { label: t("campaignPage.sortAZ"), value: "alphAscending" },
      { label: t("campaignPage.sortZA"), value: "alphDescending" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconField = script;
      const _component_InputIcon = script$1;
      const _component_InputText = script$2;
      const _component_Button = script$3;
      const _component_Select = script$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-2 flex h-[7%] items-center justify-between px-6 pt-4"><div><p class="text-3xl font-medium">${ssrInterpolate(unref(t)("campaignPage.title"))}</p><p class="mt-1 text-gray-400">${ssrInterpolate(unref(t)("campaignPage.subtitle"))}</p></div><div class="flex items-center gap-4">`);
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
      _push(ssrRenderComponent(CampaignStatCardGroup, { class: "w-full px-6" }, null, _parent));
      _push(`<div class="ml-6 mr-8 mt-3 flex items-center justify-between gap-8 border-b border-white/5"><div class="flex items-center justify-center"><!--[-->`);
      ssrRenderList(tabs.value, (tab) => {
        _push(ssrRenderComponent(_component_Button, {
          key: tab.value,
          type: "button",
          text: "",
          class: ["mx-4 flex items-center justify-between rounded-none pb-3 text-sm font-semibold transition", filterTab.value === tab.value ? "border-b-2 border-[#8B5CF6] text-white" : "border-b-2 border-transparent text-slate-400 hover:text-white"],
          onClick: ($event) => filterTab.value = tab.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(tab.label)}</span><span class="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#151821]"${_scopeId}>${ssrInterpolate(tab.count)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(tab.label), 1),
                createVNode("span", { class: "ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#151821]" }, toDisplayString(tab.count), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: selectedFilterSort.value,
        "onUpdate:modelValue": ($event) => selectedFilterSort.value = $event,
        options: sortOptions.value,
        "option-label": "label",
        "option-value": "value",
        placeholder: unref(t)("campaignPage.chooseOption"),
        class: "w-70 cursor-pointer rounded-md border border-[#2A2F3D] p-1 text-lg text-slate-400 outline-none backdrop-blur-md hover:bg-slate-900/80 focus:border-white/25 focus:bg-slate-900/90",
        pt: {
          root: { class: "bg-transparent" },
          label: { class: "text-slate-400" },
          overlay: { class: "rounded-md border border-[#2A2F3D] bg-[#151821] text-slate-300" },
          option: { class: "px-3 py-2 hover:bg-[#5B2EFF]/10" }
        }
      }, null, _parent));
      _push(`</div><div class="mt-2 min-h-0 flex-1 px-8">`);
      _push(ssrRenderComponent(CampaignDataTable, { class: "h-full w-full" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/campaign/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-DSGjtB5A');
//# sourceMappingURL=index-DSGjtB5A.mjs.map

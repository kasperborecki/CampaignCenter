globalThis.__timing__.logStart('Load chunks/build/index-D1Y3w3v3');import { localeComparator, resolveFieldData, sort } from '@primeuix/utils/object';
import script$2 from './index-C3ugBWHF.mjs';
import { s as script$3 } from './index-DI7ROuCk.mjs';
import { style } from '@primeuix/styles/dataview';
import { B as BaseStyle } from './server.mjs';
import { resolveComponent, openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode, createBlock, normalizeClass, createSlots, withCtx, createElementVNode, Fragment, createTextVNode, toDisplayString } from 'vue';
import '@primeuix/utils/dom';
import '@primeuix/styles/paginator';
import './index-qhzJtE_o.mjs';
import './index-DxKIPVaB.mjs';
import './index-DmGtcQDa.mjs';
import './index-Dl3T3yr5.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
import './index-DKGroQ-w.mjs';
import '@primeuix/utils';
import '@primeuix/utils/zindex';
import './index-1v7fOn3J.mjs';
import './index-BH9iduCK.mjs';
import './index-CP_fvbAb.mjs';
import './index-CobSNMix.mjs';
import './index-CLrwot36.mjs';
import './index-RZE_erJD.mjs';
import './index-BJFn3Jal.mjs';
import './index-DDTkROm7.mjs';
import '@primeuix/styles/iconfield';
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
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-CGTrSIDr.mjs';
import './index-wEFFy2XM.mjs';
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import '@primeuix/styles/inputtext';
import './index-rAVNvoJo.mjs';
import './index-zZrFrjQS.mjs';
import './index-CXHjtVgb.mjs';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/select';
import './index-Bmial3w1.mjs';
import './index-BLBoPBG9.mjs';
import './index-CEjm7QwF.mjs';
import '@primeuix/styles/inputnumber';
import './index-CyoypR2R.mjs';

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-dataview p-component", {
      "p-dataview-list": props.layout === "list",
      "p-dataview-grid": props.layout === "grid"
    }];
  },
  header: "p-dataview-header",
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return "p-dataview-paginator-" + position;
  },
  content: "p-dataview-content",
  emptyMessage: "p-dataview-empty-message",
  // TODO: remove?
  footer: "p-dataview-footer"
};
var DataViewStyle = BaseStyle.extend({
  name: "dataview",
  style,
  classes
});
var script$1 = {
  name: "BaseDataView",
  "extends": script$3,
  props: {
    value: {
      type: Array,
      "default": null
    },
    layout: {
      type: String,
      "default": "list"
    },
    rows: {
      type: Number,
      "default": 0
    },
    first: {
      type: Number,
      "default": 0
    },
    totalRecords: {
      type: Number,
      "default": 0
    },
    paginator: {
      type: Boolean,
      "default": false
    },
    paginatorPosition: {
      type: String,
      "default": "bottom"
    },
    alwaysShowPaginator: {
      type: Boolean,
      "default": true
    },
    paginatorTemplate: {
      type: String,
      "default": "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    },
    pageLinkSize: {
      type: Number,
      "default": 5
    },
    rowsPerPageOptions: {
      type: Array,
      "default": null
    },
    currentPageReportTemplate: {
      type: String,
      "default": "({currentPage} of {totalPages})"
    },
    sortField: {
      type: [String, Function],
      "default": null
    },
    sortOrder: {
      type: Number,
      "default": null
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    dataKey: {
      type: String,
      "default": null
    }
  },
  style: DataViewStyle,
  provide: function provide() {
    return {
      $pcDataView: this,
      $parentInstance: this
    };
  }
};
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var script = {
  name: "DataView",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:first", "update:rows", "page"],
  data: function data() {
    return {
      d_first: this.first,
      d_rows: this.rows
    };
  },
  watch: {
    first: function first(newValue) {
      this.d_first = newValue;
    },
    rows: function rows(newValue) {
      this.d_rows = newValue;
    },
    sortField: function sortField() {
      this.resetPage();
    },
    sortOrder: function sortOrder() {
      this.resetPage();
    }
  },
  methods: {
    getKey: function getKey(item, index) {
      return this.dataKey ? resolveFieldData(item, this.dataKey) : index;
    },
    onPage: function onPage(event) {
      this.d_first = event.first;
      this.d_rows = event.rows;
      this.$emit("update:first", this.d_first);
      this.$emit("update:rows", this.d_rows);
      this.$emit("page", event);
    },
    sort: function sort$1() {
      var _this = this;
      if (this.value) {
        var value = _toConsumableArray(this.value);
        var comparer = localeComparator();
        value.sort(function(data1, data2) {
          var value1 = resolveFieldData(data1, _this.sortField);
          var value2 = resolveFieldData(data2, _this.sortField);
          return sort(value1, value2, _this.sortOrder, comparer);
        });
        return value;
      } else {
        return null;
      }
    },
    resetPage: function resetPage() {
      this.d_first = 0;
      this.$emit("update:first", this.d_first);
    }
  },
  computed: {
    getTotalRecords: function getTotalRecords() {
      if (this.totalRecords) return this.totalRecords;
      else return this.value ? this.value.length : 0;
    },
    empty: function empty() {
      return !this.value || this.value.length === 0;
    },
    emptyMessageText: function emptyMessageText() {
      var _this$$primevue$confi;
      return ((_this$$primevue$confi = this.$primevue.config) === null || _this$$primevue$confi === void 0 || (_this$$primevue$confi = _this$$primevue$confi.locale) === null || _this$$primevue$confi === void 0 ? void 0 : _this$$primevue$confi.emptyMessage) || "";
    },
    paginatorTop: function paginatorTop() {
      return this.paginator && (this.paginatorPosition !== "bottom" || this.paginatorPosition === "both");
    },
    paginatorBottom: function paginatorBottom() {
      return this.paginator && (this.paginatorPosition !== "top" || this.paginatorPosition === "both");
    },
    items: function items() {
      if (this.value && this.value.length) {
        var data2 = this.value;
        if (data2 && data2.length && this.sortField) {
          data2 = this.sort();
        }
        if (this.paginator) {
          var first2 = this.lazy ? 0 : this.d_first;
          return data2.slice(first2, first2 + this.d_rows);
        } else {
          return data2;
        }
      } else {
        return null;
      }
    }
  },
  components: {
    DVPaginator: script$2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DVPaginator = resolveComponent("DVPaginator");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), $options.paginatorTop ? (openBlock(), createBlock(_component_DVPaginator, {
    key: 1,
    rows: $data.d_rows,
    first: $data.d_first,
    totalRecords: $options.getTotalRecords,
    pageLinkSize: _ctx.pageLinkSize,
    template: _ctx.paginatorTemplate,
    rowsPerPageOptions: _ctx.rowsPerPageOptions,
    currentPageReportTemplate: _ctx.currentPageReportTemplate,
    "class": normalizeClass(_ctx.cx("pcPaginator", {
      position: "top"
    })),
    alwaysShow: _ctx.alwaysShowPaginator,
    onPage: _cache[0] || (_cache[0] = function($event) {
      return $options.onPage($event);
    }),
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("pcPaginator")
  }, createSlots({
    _: 2
  }, [_ctx.$slots.paginatorcontainer ? {
    name: "container",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorcontainer", {
        first: slotProps.first,
        last: slotProps.last,
        rows: slotProps.rows,
        page: slotProps.page,
        pageCount: slotProps.pageCount,
        pageLinks: slotProps.pageLinks,
        totalRecords: slotProps.totalRecords,
        firstPageCallback: slotProps.firstPageCallback,
        lastPageCallback: slotProps.lastPageCallback,
        prevPageCallback: slotProps.prevPageCallback,
        nextPageCallback: slotProps.nextPageCallback,
        rowChangeCallback: slotProps.rowChangeCallback,
        changePageCallback: slotProps.changePageCallback
      })];
    }),
    key: "0"
  } : void 0, _ctx.$slots.paginatorstart ? {
    name: "start",
    fn: withCtx(function() {
      return [renderSlot(_ctx.$slots, "paginatorstart")];
    }),
    key: "1"
  } : void 0, _ctx.$slots.paginatorend ? {
    name: "end",
    fn: withCtx(function() {
      return [renderSlot(_ctx.$slots, "paginatorend")];
    }),
    key: "2"
  } : void 0]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "class", "alwaysShow", "unstyled", "pt"])) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("content")
  }, _ctx.ptm("content")), [!$options.empty ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [_ctx.$slots.list && _ctx.layout === "list" ? renderSlot(_ctx.$slots, "list", {
    key: 0,
    items: $options.items
  }) : createCommentVNode("", true), _ctx.$slots.grid && _ctx.layout === "grid" ? renderSlot(_ctx.$slots, "grid", {
    key: 1,
    items: $options.items
  }) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("emptyMessage")
  }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "empty", {
    layout: _ctx.layout
  }, function() {
    return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
  })], 16))], 16), $options.paginatorBottom ? (openBlock(), createBlock(_component_DVPaginator, {
    key: 2,
    rows: $data.d_rows,
    first: $data.d_first,
    totalRecords: $options.getTotalRecords,
    pageLinkSize: _ctx.pageLinkSize,
    template: _ctx.paginatorTemplate,
    rowsPerPageOptions: _ctx.rowsPerPageOptions,
    currentPageReportTemplate: _ctx.currentPageReportTemplate,
    "class": normalizeClass(_ctx.cx("pcPaginator", {
      position: "bottom"
    })),
    alwaysShow: _ctx.alwaysShowPaginator,
    onPage: _cache[1] || (_cache[1] = function($event) {
      return $options.onPage($event);
    }),
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("pcPaginator")
  }, createSlots({
    _: 2
  }, [_ctx.$slots.paginatorcontainer ? {
    name: "container",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorcontainer", {
        first: slotProps.first,
        last: slotProps.last,
        rows: slotProps.rows,
        page: slotProps.page,
        pageCount: slotProps.pageCount,
        pageLinks: slotProps.pageLinks,
        totalRecords: slotProps.totalRecords,
        firstPageCallback: slotProps.firstPageCallback,
        lastPageCallback: slotProps.lastPageCallback,
        prevPageCallback: slotProps.prevPageCallback,
        nextPageCallback: slotProps.nextPageCallback,
        rowChangeCallback: slotProps.rowChangeCallback,
        changePageCallback: slotProps.changePageCallback
      })];
    }),
    key: "0"
  } : void 0, _ctx.$slots.paginatorstart ? {
    name: "start",
    fn: withCtx(function() {
      return [renderSlot(_ctx.$slots, "paginatorstart")];
    }),
    key: "1"
  } : void 0, _ctx.$slots.paginatorend ? {
    name: "end",
    fn: withCtx(function() {
      return [renderSlot(_ctx.$slots, "paginatorend")];
    }),
    key: "2"
  } : void 0]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "class", "alwaysShow", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 3,
    "class": _ctx.cx("footer")
  }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-D1Y3w3v3');
//# sourceMappingURL=index-D1Y3w3v3.mjs.map

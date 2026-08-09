globalThis.__timing__.logStart('Load chunks/build/index-BdRqm9Bw');import { s as script$1 } from './index-DI7ROuCk.mjs';
import { B as BaseStyle } from './server.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode } from 'vue';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
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
import '@primeuix/utils';
import '@primeuix/styles/base';
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

var DeferredContentStyle = BaseStyle.extend({
  name: "deferredcontent"
});
var script = {
  name: "DeferredContent",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["load"],
  style: DeferredContentStyle,
  data: function data() {
    return {
      loaded: false
    };
  },
  mounted: function mounted() {
    if (!this.loaded) {
      if (this.shouldLoad()) this.load();
      else this.bindScrollListener();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindScrollListener();
  },
  methods: {
    bindScrollListener: function bindScrollListener() {
      var _this = this;
      this.documentScrollListener = function() {
        if (_this.shouldLoad()) {
          _this.load();
          _this.unbindScrollListener();
        }
      };
      (void 0).addEventListener("scroll", this.documentScrollListener);
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.documentScrollListener) {
        (void 0).removeEventListener("scroll", this.documentScrollListener);
        this.documentScrollListener = null;
      }
    },
    shouldLoad: function shouldLoad() {
      if (this.loaded) {
        return false;
      } else {
        var rect = this.$refs.container.getBoundingClientRect();
        var docElement = (void 0).documentElement;
        var winHeight = docElement.clientHeight;
        return winHeight >= rect.top;
      }
    },
    load: function load(event) {
      this.loaded = true;
      this.$emit("load", event);
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container"
  }, _ctx.ptmi("root")), [$data.loaded ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : createCommentVNode("", true)], 16);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-BdRqm9Bw');
//# sourceMappingURL=index-BdRqm9Bw.mjs.map

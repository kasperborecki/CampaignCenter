globalThis.__timing__.logStart('Load chunks/build/index-CRbpbz9A');import { s as script$2 } from './index-DI7ROuCk.mjs';
import { style } from '@primeuix/styles/toolbar';
import { B as BaseStyle } from './server.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot } from 'vue';
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

var classes = {
  root: "p-toolbar p-component",
  start: "p-toolbar-start",
  center: "p-toolbar-center",
  end: "p-toolbar-end"
};
var ToolbarStyle = BaseStyle.extend({
  name: "toolbar",
  style,
  classes
});
var script$1 = {
  name: "BaseToolbar",
  "extends": script$2,
  props: {
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  style: ToolbarStyle,
  provide: function provide() {
    return {
      $pcToolbar: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Toolbar",
  "extends": script$1,
  inheritAttrs: false
};
var _hoisted_1 = ["aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "toolbar",
    "aria-labelledby": _ctx.ariaLabelledby
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("start")
  }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("center")
  }, _ctx.ptm("center")), [renderSlot(_ctx.$slots, "center")], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("end")
  }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)], 16, _hoisted_1);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-CRbpbz9A');
//# sourceMappingURL=index-CRbpbz9A.mjs.map

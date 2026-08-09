globalThis.__timing__.logStart('Load chunks/build/index-CCiv1n1C');import script$2 from './index-QxS0XFpr.mjs';
import { style } from '@primeuix/styles/overlaybadge';
import { B as BaseStyle } from './server.mjs';
import { resolveComponent, openBlock, createElementBlock, mergeProps, renderSlot, createVNode } from 'vue';
import '@primeuix/utils';
import './index-DI7ROuCk.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/styles/badge';
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

var classes = {
  root: "p-overlaybadge"
};
var OverlayBadgeStyle = BaseStyle.extend({
  name: "overlaybadge",
  style,
  classes
});
var script$1 = {
  name: "OverlayBadge",
  "extends": script$2,
  style: OverlayBadgeStyle,
  provide: function provide() {
    return {
      $pcOverlayBadge: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "OverlayBadge",
  "extends": script$1,
  inheritAttrs: false,
  components: {
    Badge: script$2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Badge = resolveComponent("Badge");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default"), createVNode(_component_Badge, mergeProps(_ctx.$props, {
    pt: _ctx.ptm("pcBadge")
  }), null, 16, ["pt"])], 16);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-CCiv1n1C');
//# sourceMappingURL=index-CCiv1n1C.mjs.map

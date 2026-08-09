globalThis.__timing__.logStart('Load chunks/build/index-CGTrSIDr');import { s as script$2 } from './index-DI7ROuCk.mjs';
import { B as BaseStyle } from './server.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot } from 'vue';
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
  root: "p-inputicon"
};
var InputIconStyle = BaseStyle.extend({
  name: "inputicon",
  classes
});
var script$1 = {
  name: "BaseInputIcon",
  "extends": script$2,
  style: InputIconStyle,
  props: {
    "class": null
  },
  provide: function provide() {
    return {
      $pcInputIcon: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputIcon",
  "extends": script$1,
  inheritAttrs: false,
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": $options.containerClass
  }, _ctx.ptmi("root"), {
    "aria-hidden": "true"
  }), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-CGTrSIDr');
//# sourceMappingURL=index-CGTrSIDr.mjs.map

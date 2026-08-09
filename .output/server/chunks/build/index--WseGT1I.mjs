globalThis.__timing__.logStart('Load chunks/build/index--WseGT1I');import { s as script$2 } from './index-DI7ROuCk.mjs';
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
  root: "p-steplist"
};
var StepListStyle = BaseStyle.extend({
  name: "steplist",
  classes
});
var script$1 = {
  name: "BaseStepList",
  "extends": script$2,
  style: StepListStyle,
  provide: function provide() {
    return {
      $pcStepList: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "StepList",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index--WseGT1I');
//# sourceMappingURL=index--WseGT1I.mjs.map

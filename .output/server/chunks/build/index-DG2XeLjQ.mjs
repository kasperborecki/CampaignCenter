globalThis.__timing__.logStart('Load chunks/build/index-DG2XeLjQ');import { s as script$2 } from './index-DI7ROuCk.mjs';
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
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-stepitem", {
      "p-stepitem-active": instance.isActive
    }];
  }
};
var StepItemStyle = BaseStyle.extend({
  name: "stepitem",
  classes
});
var script$1 = {
  name: "BaseStepItem",
  "extends": script$2,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    }
  },
  style: StepItemStyle,
  provide: function provide() {
    return {
      $pcStepItem: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "StepItem",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$pcStepper"],
  computed: {
    isActive: function isActive() {
      var _this$$pcStepper;
      return ((_this$$pcStepper = this.$pcStepper) === null || _this$$pcStepper === void 0 ? void 0 : _this$$pcStepper.d_value) === this.value;
    }
  }
};
var _hoisted_1 = ["data-p-active"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "data-p-active": $options.isActive
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-DG2XeLjQ');
//# sourceMappingURL=index-DG2XeLjQ.mjs.map

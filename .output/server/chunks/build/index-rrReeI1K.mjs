globalThis.__timing__.logStart('Load chunks/build/index-rrReeI1K');import { s as script$2 } from './index-DI7ROuCk.mjs';
import { style } from '@primeuix/styles/floatlabel';
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
    var props = _ref.props;
    return ["p-floatlabel", {
      "p-floatlabel-over": props.variant === "over",
      "p-floatlabel-on": props.variant === "on",
      "p-floatlabel-in": props.variant === "in"
    }];
  }
};
var FloatLabelStyle = BaseStyle.extend({
  name: "floatlabel",
  style,
  classes
});
var script$1 = {
  name: "BaseFloatLabel",
  "extends": script$2,
  props: {
    variant: {
      type: String,
      "default": "over"
    }
  },
  style: FloatLabelStyle,
  provide: function provide() {
    return {
      $pcFloatLabel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "FloatLabel",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-rrReeI1K');
//# sourceMappingURL=index-rrReeI1K.mjs.map

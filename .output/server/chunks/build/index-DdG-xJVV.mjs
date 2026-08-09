globalThis.__timing__.logStart('Load chunks/build/index-DdG-xJVV');import { uuid } from '@primeuix/utils';
import { s as script$2 } from './index-BDpKneMc.mjs';
import { style } from '@primeuix/styles/checkboxgroup';
import { B as BaseStyle } from './server.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot } from 'vue';
import './index-DI7ROuCk.mjs';
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
import '@primeuix/styles/base';
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

var classes = {
  root: "p-checkbox-group p-component"
};
var CheckboxGroupStyle = BaseStyle.extend({
  name: "checkboxgroup",
  style,
  classes
});
var script$1 = {
  name: "BaseCheckboxGroup",
  "extends": script$2,
  style: CheckboxGroupStyle,
  provide: function provide() {
    return {
      $pcCheckboxGroup: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "CheckboxGroup",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      groupName: this.name
    };
  },
  watch: {
    name: function name(newValue) {
      this.groupName = newValue || uuid("checkbox-group-");
    }
  },
  mounted: function mounted() {
    this.groupName = this.groupName || uuid("checkbox-group-");
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-DdG-xJVV');
//# sourceMappingURL=index-DdG-xJVV.mjs.map

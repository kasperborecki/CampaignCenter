globalThis.__timing__.logStart('Load chunks/build/index-B_JR8Pyr');import { s as script$2 } from './index-DI7ROuCk.mjs';
import { style } from '@primeuix/styles/tabs';
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
    return ["p-tabs p-component", {
      "p-tabs-scrollable": props.scrollable
    }];
  }
};
var TabsStyle = BaseStyle.extend({
  name: "tabs",
  style,
  classes
});
var script$1 = {
  name: "BaseTabs",
  "extends": script$2,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    scrollable: {
      type: Boolean,
      "default": false
    },
    showNavigators: {
      type: Boolean,
      "default": true
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    }
  },
  style: TabsStyle,
  provide: function provide() {
    return {
      $pcTabs: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Tabs",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:value"],
  data: function data() {
    return {
      d_value: this.value
    };
  },
  watch: {
    value: function value(newValue) {
      this.d_value = newValue;
    }
  },
  methods: {
    updateValue: function updateValue(newValue) {
      if (this.d_value !== newValue) {
        this.d_value = newValue;
        this.$emit("update:value", newValue);
      }
    },
    isVertical: function isVertical() {
      return this.orientation === "vertical";
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-B_JR8Pyr');
//# sourceMappingURL=index-B_JR8Pyr.mjs.map

globalThis.__timing__.logStart('Load chunks/build/index-D0QlfBGV');import { mergeProps, openBlock, createBlock, resolveDynamicComponent, withCtx, renderSlot, normalizeClass } from 'vue';
import { s as script$2 } from './index-DI7ROuCk.mjs';
import { B as BaseStyle } from './server.mjs';
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
    var instance = _ref.instance, props = _ref.props;
    return ["p-accordionpanel", {
      "p-accordionpanel-active": instance.active,
      "p-disabled": props.disabled
    }];
  }
};
var AccordionPanelStyle = BaseStyle.extend({
  name: "accordionpanel",
  classes
});
var script$1 = {
  name: "BaseAccordionPanel",
  "extends": script$2,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    },
    asChild: {
      type: Boolean,
      "default": false
    }
  },
  style: AccordionPanelStyle,
  provide: function provide() {
    return {
      $pcAccordionPanel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "AccordionPanel",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$pcAccordion"],
  computed: {
    active: function active() {
      return this.$pcAccordion.isItemActive(this.value);
    },
    attrs: function attrs() {
      return mergeProps(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function a11yAttrs() {
      return {
        "data-pc-name": "accordionpanel",
        "data-p-disabled": this.disabled,
        "data-p-active": this.active
      };
    },
    ptParams: function ptParams() {
      return {
        context: {
          active: this.active
        }
      };
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root")
  }, $options.attrs), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"])) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.active,
    a11yAttrs: $options.a11yAttrs
  });
}
script.render = render;

export { script as default };;globalThis.__timing__.logEnd('Load chunks/build/index-D0QlfBGV');
//# sourceMappingURL=index-D0QlfBGV.mjs.map

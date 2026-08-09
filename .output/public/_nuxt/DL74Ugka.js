import{W as r,an as a,ao as t,B as n,C as s,ae as p,af as c}from"./CCV3VslT.js";var u=`
    .p-checkbox-group {
        display: inline-flex;
    }
`,i={root:"p-checkbox-group p-component"},l=r.extend({name:"checkboxgroup",style:u,classes:i}),h={name:"BaseCheckboxGroup",extends:a,style:l,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},m={name:"CheckboxGroup",extends:h,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||t("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||t("checkbox-group-")}};function d(e,o,x,f,k,g){return n(),s("div",c({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default")],16)}m.render=d;export{m as default};

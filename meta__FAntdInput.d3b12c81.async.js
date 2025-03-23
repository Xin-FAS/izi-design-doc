"use strict";(self.webpackChunkizi_design_doc=self.webpackChunkizi_design_doc||[]).push([[734],{10372:function(S,h,t){var p;t.r(h),t.d(h,{demos:function(){return F}});var A=t(15009),s=t.n(A),g=t(99289),c=t.n(g),n=t(67294),P=t(26330),I=t(15746),F={"fantdinput-demo-0":{component:n.memo(n.lazy(c()(s()().mark(function l(){var r,u,a,d,i,e;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(t.bind(t,15746));case 2:return r=o.sent,u=r.FAntdInput,o.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=o.sent,d=a.useState,i=a.useEffect,e=a.useRef,o.abrupt("return",{default:function(){var y=d(),m=e();return i(function(){var E;(E=m.current)===null||E===void 0||E.focus()},[]),n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",y[0]),n.createElement(u,{state:y,ref:m}))}});case 11:case"end":return o.stop()}},l)})))),asset:{type:"BLOCK",id:"fantdinput-demo-0",refAtomIds:["FAntdInput"],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState, useEffect, useRef } from 'react';

export default () => {
    const state = useState();
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput state={state} ref={inputRef} />
    </>;
}`},izid:{type:"NPM",value:"0.1.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:I,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var l=c()(s()().mark(function u(){var a,d=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,d));case 3:case"end":return e.stop()}},u)}));function r(){return l.apply(this,arguments)}return r}()}},"fantdinput-demo-1":{component:n.memo(n.lazy(c()(s()().mark(function l(){var r,u,a,d;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,15746));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,d=a.useState,e.abrupt("return",{default:function(){var o=d(),f=function(m){console.log("\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A",m)};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Search,{state:o,autoSearch:!0,onSearch:f}))}});case 9:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"fantdinput-demo-1",refAtomIds:["FAntdInput"],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A', value)
    }

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Search state={state} autoSearch onSearch={onSearch} />
    </>;
}`},izid:{type:"NPM",value:"0.1.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:I,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var l=c()(s()().mark(function u(){var a,d=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,d));case 3:case"end":return e.stop()}},u)}));function r(){return l.apply(this,arguments)}return r}()}},"fantdinput-demo-2":{component:n.memo(n.lazy(c()(s()().mark(function l(){var r,u,a,d;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,15746));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,d=a.useState,e.abrupt("return",{default:function(){var o=d(),f=function(m){console.log("\u89E6\u53D1\u641C\u7D22\uFF1A",m)};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Search,{state:o,onSearch:f}))}});case 9:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"fantdinput-demo-2",refAtomIds:["FAntdInput"],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('\u89E6\u53D1\u641C\u7D22\uFF1A', value)
    }

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Search state={state} onSearch={onSearch} />
    </>;
}`},izid:{type:"NPM",value:"0.1.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:I,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var l=c()(s()().mark(function u(){var a,d=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,d));case 3:case"end":return e.stop()}},u)}));function r(){return l.apply(this,arguments)}return r}()}},"fantdinput-demo-3":{component:n.memo(n.lazy(c()(s()().mark(function l(){var r,u,a,d;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,15746));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,d=a.useState,e.abrupt("return",{default:function(){var o=d(),f=function(m){console.log("\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A",m)};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Search,{state:o,throttleDuration:2e3,onSearch:f}))}});case 9:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"fantdinput-demo-3",refAtomIds:["FAntdInput"],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A', value)
    }

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Search state={state} throttleDuration={2000} onSearch={onSearch} />
    </>;
}`},izid:{type:"NPM",value:"0.1.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:I,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var l=c()(s()().mark(function u(){var a,d=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,d));case 3:case"end":return e.stop()}},u)}));function r(){return l.apply(this,arguments)}return r}()}},"fantdinput-demo-4":{component:n.memo(n.lazy(c()(s()().mark(function l(){var r,u,a,d;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,15746));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,d=a.useState,e.abrupt("return",{default:function(){var o=d();return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Password,{state:o}))}});case 9:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"fantdinput-demo-4",refAtomIds:["FAntdInput"],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:I,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var l=c()(s()().mark(function u(){var a,d=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,d));case 3:case"end":return e.stop()}},u)}));function r(){return l.apply(this,arguments)}return r}()}},"fantdinput-demo-5":{component:n.memo(n.lazy(c()(s()().mark(function l(){var r,u,a,d;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,15746));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,d=a.useState,e.abrupt("return",{default:function(){var o=d("");return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.OTP,{state:o}))}});case 9:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"fantdinput-demo-5",refAtomIds:["FAntdInput"],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:I,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var l=c()(s()().mark(function u(){var a,d=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,d));case 3:case"end":return e.stop()}},u)}));function r(){return l.apply(this,arguments)}return r}()}},"fantdinput-demo-6":{component:n.memo(n.lazy(c()(s()().mark(function l(){var r,u,a,d;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,15746));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,d=a.useState,e.abrupt("return",{default:function(){var o=d("");return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.TextArea,{state:o}))}});case 9:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"fantdinput-demo-6",refAtomIds:["FAntdInput"],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:I,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var l=c()(s()().mark(function u(){var a,d=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,d));case 3:case"end":return e.stop()}},u)}));function r(){return l.apply(this,arguments)}return r}()}}}},49326:function(S,h,t){t.r(h),t.d(h,{texts:function(){return A}});var p=t(26330);const A=[{value:"\u8FD9\u662F\u4E00\u4E2A\u6709\u5404\u79CD\u5E38\u89C1\u4E1A\u52A1\u573A\u666F\u7684Antd Input\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:1,tocIndex:2},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:2},{value:"debounceDuration",paraId:2},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:2},{value:"500",paraId:2},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:2},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:3,tocIndex:3},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:4,tocIndex:4},{value:"\u4F7F\u7528",paraId:5},{value:"throttleDuration",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:5},{value:"0",paraId:5},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:5},{value:"\u4F7F\u7528",paraId:5},{value:"throttleTrailing",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u641C\u7D22\uFF0C\u9ED8\u8BA4",paraId:5},{value:"false",paraId:5},{value:"\u5C5E\u6027\u540D",paraId:6,tocIndex:9},{value:"\u7C7B\u578B",paraId:6,tocIndex:9},{value:"\u662F\u5426\u5FC5\u586B",paraId:6,tocIndex:9},{value:"\u8BF4\u660E",paraId:6,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:9},{value:"state",paraId:6,tocIndex:9},{value:"string",paraId:6,tocIndex:9},{value:"false",paraId:6,tocIndex:9},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:6,tocIndex:9},{value:"\u5176\u4ED6Props\u540CAntd Input",paraId:7,tocIndex:9},{value:"Method\u4E0EAntd Input\u76F8\u540C",paraId:8,tocIndex:10},{value:"Ref\u4E0EInput\u76F8\u540C",paraId:9,tocIndex:11},{value:"\u5C5E\u6027\u540D",paraId:10,tocIndex:13},{value:"\u7C7B\u578B",paraId:10,tocIndex:13},{value:"\u662F\u5426\u5FC5\u586B",paraId:10,tocIndex:13},{value:"\u8BF4\u660E",paraId:10,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:13},{value:"state",paraId:10,tocIndex:13},{value:"string",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:10,tocIndex:13},{value:"autoSearch",paraId:10,tocIndex:13},{value:"function",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"\u8F93\u5165\u65F6\u662F\u5426\u81EA\u52A8\u4F7F\u7528\u9632\u6296\u641C\u7D22",paraId:10,tocIndex:13},{value:"debounceDuration",paraId:10,tocIndex:13},{value:"number",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"\u5F00\u542FautoSearch\u540E\uFF0C\u9632\u6296\u65F6\u95F4",paraId:10,tocIndex:13},{value:"500",paraId:10,tocIndex:13},{value:"throttleDuration",paraId:10,tocIndex:13},{value:"number",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"\u89E6\u53D1\u641C\u7D22\u4E8B\u4EF6\u65F6\u8282\u6D41\u65F6\u95F4",paraId:10,tocIndex:13},{value:"0",paraId:10,tocIndex:13},{value:"throttleTrailing",paraId:10,tocIndex:13},{value:"boolean",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"\u8282\u6D41\u641C\u7D22\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u89E6\u53D1\u641C\u7D22",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"\u5176\u4ED6Props\u540CAntd Input",paraId:11,tocIndex:13},{value:"Method\u4E0EAntd Input\u76F8\u540C",paraId:12,tocIndex:14},{value:"Ref\u4E0EInput\u76F8\u540C",paraId:13,tocIndex:15},{value:"\u4E0EAntd Input.OTP\u76F8\u540C",paraId:14,tocIndex:16},{value:"\u4E0EAntd Input.Password\u76F8\u540C",paraId:15,tocIndex:17},{value:"\u4E0EAntd Input.TextArea\u76F8\u540C",paraId:16,tocIndex:18}]}}]);

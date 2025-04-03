"use strict";(self.webpackChunkizi_design_doc=self.webpackChunkizi_design_doc||[]).push([[734],{10372:function(P,y,t){var p;t.r(y),t.d(y,{demos:function(){return z}});var S=t(15009),s=t.n(S),x=t(99289),m=t.n(x),n=t(67294),M=t(26330),f=t(11029),g=t(56356),z={"src-f-antd-input-demo-0":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l,i,e,I,o;return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=v.sent,u=r.FAntdInput,v.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=v.sent,l=a.useState,i=a.useEffect,e=a.useRef,v.next=12,Promise.resolve().then(t.bind(t,56356));case 12:return I=v.sent,o=I.Button,v.abrupt("return",{default:function(){var F=l(),E=e();i(function(){var A;(A=E.current)===null||A===void 0||A.focus()},[]);var $=function(){F[1]("Hello World")};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",F[0]),n.createElement(u,{state:F,ref:E}),n.createElement("p",null,n.createElement(o,{type:"primary",onClick:$},"Hello World")))}});case 15:case"end":return v.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd'

export default () => {
    const state = useState();
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    const setHello = () => {
        state[1]('Hello World')
    }

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput state={state} ref={inputRef} />
        <p><Button type={'primary'} onClick={setHello}>Hello World</Button></p>
    </>;
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.24.6"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2)),antd:g},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-1":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,l=a.useState,e.abrupt("return",{default:function(){var o=l(),c=function(h){console.log("\u89E6\u53D1\u641C\u7D22\uFF1A",h)};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Search,{state:o,onSearch:c}))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-2":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,l=a.useState,e.abrupt("return",{default:function(){var o=l(),c=function(h){console.log("\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A",h)};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Search,{state:o,autoSearch:!0,onSearch:c}))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-3":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,l=a.useState,e.abrupt("return",{default:function(){var o=l(),c=function(h){console.log("\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A",h)};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Search,{state:o,throttleDuration:2e3,onSearch:c}))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-4":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,l=a.useState,e.abrupt("return",{default:function(){var o=l();return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Number,{state:o,strict:!0}))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} strict />
    </>;
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-5":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,l=a.useState,e.abrupt("return",{default:function(){var o=l();return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Number,{state:o,mode:"price"}))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'price'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-6":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,l=a.useState,e.abrupt("return",{default:function(){var o=l();return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Number,{state:o,mode:"percent"}))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'percent'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-7":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,l=a.useState,e.abrupt("return",{default:function(){var o=l();return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.Password,{state:o}))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-8":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,l=a.useState,e.abrupt("return",{default:function(){var o=l("");return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.OTP,{state:o}))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-9":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=e.sent,u=r.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,l=a.useState,e.abrupt("return",{default:function(){var o=l("");return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",o[0]),n.createElement(u.TextArea,{state:o}))}});case 9:case"end":return e.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-9",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2))},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}},"src-f-antd-input-demo-10":{component:n.memo(n.lazy(m()(s()().mark(function d(){var r,u,a,l,i,e,I;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(t.bind(t,11029));case 2:return r=c.sent,u=r.FAntdInput,c.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=c.sent,l=a.useState,c.next=10,Promise.resolve().then(t.bind(t,56356));case 10:return i=c.sent,e=i.Form,I=i.Button,c.abrupt("return",{default:function(){var h=function(E){console.log("\u8868\u5355\u63D0\u4EA4\uFF1A",E)};return n.createElement(e,{onFinish:h},n.createElement(e.Item,{label:"\u8F93\u5165\u6846",name:"value"},n.createElement(u,null)),n.createElement(e.Item,null,n.createElement(I,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4")))}});case 14:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"src-f-antd-input-demo-10",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';
import { Form, Button } from 'antd'

export default () => {
    const onFinish = data => {
        console.log('\u8868\u5355\u63D0\u4EA4\uFF1A', data)
    }

    return <Form onFinish={onFinish}>
        <Form.Item label={'\u8F93\u5165\u6846'} name={'value'}>
            <FAntdInput />
        </Form.Item>
        <Form.Item>
            <Button type={'primary'} htmlType="submit">\u63D0\u4EA4</Button>
        </Form.Item>
    </Form>;
}`},izid:{type:"NPM",value:"0.1.8"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.24.6"}},entry:"index.jsx"},context:{izid:f,react:p||(p=t.t(n,2)),antd:g},renderOpts:{compile:function(){var d=m()(s()().mark(function u(){var a,l=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,l));case 3:case"end":return e.stop()}},u)}));function r(){return d.apply(this,arguments)}return r}()}}}},49326:function(P,y,t){t.r(y),t.d(y,{texts:function(){return S}});var p=t(26330);const S=[{value:"\u8FD9\u662F\u4E00\u4E2A\u6709\u5404\u79CD\u5E38\u89C1\u4E1A\u52A1\u573A\u666F\u7684Antd Input\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:1,tocIndex:2},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:3},{value:"debounceDuration",paraId:3},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:3},{value:"500",paraId:3},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:3},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:4,tocIndex:4},{value:"\u4F7F\u7528",paraId:5},{value:"throttleDuration",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:5},{value:"0",paraId:5},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:5},{value:"\u4F7F\u7528",paraId:5},{value:"throttleTrailing",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u641C\u7D22\uFF0C\u9ED8\u8BA4",paraId:5},{value:"false",paraId:5},{value:"\u5728\u8868\u5355\u4E2D\u65B9\u6CD5\u4F7F\u7528\u540CAntd Input\uFF0C\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:6,tocIndex:11},{value:"\u4F60\u4E0D\u80FD\u5728\u8868\u5355\u4E2D\u4F7F\u7528setState\u53BB\u4FEE\u6539\u8868\u5355\u57DF\u7684\u503C\uFF0C\u8BE6\u89C1\uFF1A",paraId:7},{value:"FormItem",paraId:7},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:13},{value:"Antd Input",paraId:8,tocIndex:13},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:14},{value:"state",paraId:9,tocIndex:14},{value:"string",paraId:9,tocIndex:14},{value:"false",paraId:9,tocIndex:14},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:9,tocIndex:14},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:10,tocIndex:15},{value:"Antd Input.Search",paraId:10,tocIndex:15},{value:"\u5C5E\u6027\u540D",paraId:11,tocIndex:16},{value:"\u7C7B\u578B",paraId:11,tocIndex:16},{value:"\u662F\u5426\u5FC5\u586B",paraId:11,tocIndex:16},{value:"\u8BF4\u660E",paraId:11,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:16},{value:"state",paraId:11,tocIndex:16},{value:"string",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:11,tocIndex:16},{value:"autoSearch",paraId:11,tocIndex:16},{value:"function",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8F93\u5165\u65F6\u662F\u5426\u81EA\u52A8\u4F7F\u7528\u9632\u6296\u641C\u7D22",paraId:11,tocIndex:16},{value:"debounceDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u5F00\u542FautoSearch\u540E\uFF0C\u9632\u6296\u65F6\u95F4",paraId:11,tocIndex:16},{value:"500",paraId:11,tocIndex:16},{value:"throttleDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u89E6\u53D1\u641C\u7D22\u4E8B\u4EF6\u65F6\u8282\u6D41\u65F6\u95F4",paraId:11,tocIndex:16},{value:"0",paraId:11,tocIndex:16},{value:"throttleTrailing",paraId:11,tocIndex:16},{value:"boolean",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8282\u6D41\u641C\u7D22\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u89E6\u53D1\u641C\u7D22",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:12,tocIndex:17},{value:"Antd InputNumber",paraId:12,tocIndex:17},{value:"\u5C5E\u6027\u540D",paraId:13,tocIndex:18},{value:"\u7C7B\u578B",paraId:13,tocIndex:18},{value:"\u662F\u5426\u5FC5\u586B",paraId:13,tocIndex:18},{value:"\u8BF4\u660E",paraId:13,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:18},{value:"state",paraId:13,tocIndex:18},{value:"string",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:13,tocIndex:18},{value:"mode",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:" ",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:"\u4EF7\u683C\u6A21\u5F0F\u3001",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"\u767E\u5206\u6BD4\u6A21\u5F0F\uFF0C\u51FA\u73B0\u56FA\u5B9A\u7684\u683C\u5F0F",paraId:13,tocIndex:18},{value:"strict",paraId:13,tocIndex:18},{value:"boolean",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E25\u683C\u9650\u5236\uFF0C\u9650\u5236\u4E3A\u6B63\u6574\u6570\u3001\u6B65\u957F\u4E3A1\u3001\u767E\u5206\u6BD4\u6A21\u5F0F\u4E0B\u9650\u5236\u6700\u5927\u503C100",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E0EAntd Input.XXX\u76F8\u540C\uFF0C",paraId:14,tocIndex:19},{value:"Antd Input",paraId:14,tocIndex:19}]}}]);

"use strict";(self.webpackChunkfastpay=self.webpackChunkfastpay||[]).push([[532],{532:function(e,t,n){n.r(t);var s=n(152),r=n(791),a=n(871),l=n(184);t.default=function(){var e=(0,r.useState)(!1),t=(0,s.Z)(e,2),n=t[0],i=t[1],o=(0,r.useState)(!1),c=(0,s.Z)(o,2),u=(c[0],c[1]),d=(0,a.s0)(),m=(0,r.useRef)(),h=(0,r.useRef)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsx)("div",{className:"row main-row",children:(0,l.jsx)("div",{className:"col-12 col-lg-6 mx-auto d-flex justify-content-center align-items-center",children:(0,l.jsxs)("form",{className:"form-start",onSubmit:function(e){e.preventDefault();var t=m.current.value,s=h.current.value;u(!0),n||fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtdSwbHtd55FNoCDCywMF-ojizqXZB-3Q",{method:"POST",body:JSON.stringify({email:t,password:s,returnSecureToken:!0}),headers:{"content-type":"application/json"}}).then((function(e){if(u(!1),!e.ok)return e.json().then((function(e){var t="Authentication Failed !!";e&&e.error&&e.error.message&&(t=e.error.message),alert(t)}));d("/",{replace:!0})}))},children:[(0,l.jsx)("h1",{className:"text-center pb-3",children:n?"Login":"SignUp"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"Email",className:"label-control",children:"Email"}),(0,l.jsx)("input",{className:"input-control",type:"email",placeholder:"Enter Your Email..",ref:m})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{htmlFor:"Password",className:"label-control",children:"Password"}),(0,l.jsx)("input",{className:"input-control",type:"password",placeholder:"Enter Your Password..",ref:h})]}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{type:"Submit",className:"btn btn-style w-100",children:n?"Sign Up":"Login"})}),(0,l.jsx)("div",{className:"toggle-div",children:(0,l.jsx)("button",{type:"button",className:"toggle text-center",onClick:function(){i((function(e){return!e}))},children:n?"Create new account":"Login with existing account"})})]})})})})})}}}]);
//# sourceMappingURL=532.ad1338dd.chunk.js.map
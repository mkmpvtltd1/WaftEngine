(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{f429d592a8d947c848ab:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"saveContactRequest",function(){return F}),n.d(a,"saveContactSuccess",function(){return L}),n.d(a,"saveContactFailure",function(){return N}),n.d(a,"ContactDetailRequest",function(){return q}),n.d(a,"contactDetailSuccess",function(){return P}),n.d(a,"contactDetailFailure",function(){return W}),n.d(a,"clearMessages",function(){return I});var o=n("8af190b70a6bc55c6f1b"),r=n.n(o),c=n("4a683f0a5e64e66a8eb9"),s=n.n(c),i=n("d7dd51e1bf6bfc2c9c3d"),u=(n("8a2d1b95e05b6a321e74"),n("a28fc3c963a1d4d1a2e5")),d=n("0d7f0986bcd2f33d8a2a"),l=n("ab4cb61bcb2dc161defb"),f=n("e95a63b25fb92ed15721"),p=n("70d8380575c8f404a2f0"),b=n.n(p),m=n("435859b6b76fb67a754a"),v=n.n(m),g=n("bc75856162e63311fb97"),h=n.n(g),y=n("2aea235afd5c55b8b19b"),C=n.n(y),S=n("f8286fe65ca06bcb51b6"),O=n.n(S),j=n("1ae545a61fbc5b2d4bdd"),A=n.n(j),E=n("679413333d88bed60c6f"),w=n.n(E),_=n("adc20f99e57c573c589c"),R=n("d95b0cf107403b178365"),T=n("3562001638983595ee40"),U=n("d782b72bc5b680c7122c"),x=n("6144be5eac76f277117a"),M=n("6542cd13fd5dd1bcffd4"),k="app/ContactUs/SAVE_CONTACT_REQUEST",D="app/ContactUs/CONTACT_DETAIL_REQUEST",F=function(e){return{type:k,payload:e}},L=function(e){return{type:"app/ContactUs/SAVE_CONTACT_SUCCESS",payload:e}},N=function(e){return{type:"app/ContactUs/SAVE_CONTACT_FAILURE",payload:e}},q=function(e){return{type:D,payload:e}},P=function(e){return{type:"app/ContactUs/CONTACT_DETAIL_SUCCESS",payload:e}},W=function(e){return{type:"app/ContactUs/CONTACT_DETAIL_FAILURE",payload:e}},I=function(){return{type:"app/ContactUs/CLEAR_MESSAGES"}},V=regeneratorRuntime.mark(G),H=regeneratorRuntime.mark(J),Q=regeneratorRuntime.mark(B);function G(e){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(U.select)(Object(M.d)());case 2:return t=n.sent,n.next=5,Object(U.call)(x.a.post("contact",L,N,e.payload,t));case 5:return n.next=7,Object(U.call)(T.delay,5e3);case 7:return n.next=9,Object(U.put)(I());case 9:case"end":return n.stop()}},V)}function J(e){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.call)(x.a.get("contents/key/contactdetail",P,W));case 2:case"end":return e.stop()}},H)}function B(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.takeLatest)(k,G);case 2:return e.next=4,Object(U.takeLatest)(D,J);case 4:case"end":return e.stop()}},Q)}var $,z=n("7edf83707012a871cdfb"),Y={isRequesting:!1,success:!1,successMessage:"",errorMessage:"",contactDetail:{}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;return Object(z.a)(e,function(e){switch(t.type){case k:e.isRequesting=!0,e.success=!1,e.successMessage="",e.errorMessage="";case"app/ContactUs/SAVE_CONTACT_SUCCESS":e.isRequesting=!1,e.success=!0,e.successMessage=t.payload.msg;case"app/ContactUs/SAVE_CONTACT_FAILURE":e.isRequesting=!1,e.success=!1,e.errorMessage="string"===typeof t.payload.errors?t.payload.errors:"something went wrong";case"app/ContactUs/CLEAR_MESSAGES":e.successMessage="",e.errorMessage="";case"app/ContactUs/CONTACT_DETAIL_SUCCESS":e.contactDetail=t.payload.data}})},X=function(e){return e.contactUs||Y};function Z(e){return(Z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t,n,a){$||($="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});if(1===r)t.children=a;else if(r>1){for(var s=new Array(r),i=0;i<r;i++)s[i]=arguments[i+3];t.children=s}return{$$typeof:$,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function te(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ce=r.a.createRef(),se=ee(d.Helmet,{},void 0,ee("title",{},void 0,"Contact Us")),ie=ee("div",{},void 0,ee("h1",{},void 0," Contact Us ")),ue=function(e){function t(){var e,n,a,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return a=this,o=(e=ne(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==Z(o)&&"function"!==typeof o?ae(a):o,re(ae(n),"state",{name:"",email:"",subject:"",message:""}),re(ae(n),"handleChange",function(e){return function(t){n.setState(re({},e,t.target.value))}}),re(ae(n),"handleSave",function(){n.props.saveContactRequest(n.state)}),re(ae(n),"onSubmit",function(){var e=ce.current.getValue();n.props.onSubmit(e)}),re(ae(n),"onChange",function(e){n.setState({reCaptcha:e})}),n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,r.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.props.ContactDetailRequest()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.success!==this.props.success&&e.success&&this.setState({name:"",email:"",subject:"",message:""},function(){window.grecaptcha&&window.grecaptcha.reset()})}},{key:"render",value:function(){var e=this.props,t=e.isRequesting,n=e.msg,a=e.contactDetail,o=this.state,c=o.name,s=o.email,i=o.subject,u=o.message;return ee("div",{className:"container"},void 0,se,ie,ee("div",{},void 0,ee(v.a,{container:!0},void 0,ee(v.a,{item:!0,xs:6,sm:6,md:6},void 0,ee(O.a,{},void 0,ee(A.a,{},void 0,ee(v.a,{},void 0,ee(v.a,{item:!0,xs:12,sm:12,md:12},void 0,ee(h.a,{name:"Name",id:"name",fullWidth:!0,placeholder:"Name",inputProps:{value:c,onChange:this.handleChange("name")}}))),ee(v.a,{},void 0,ee(v.a,{item:!0,xs:12,sm:12,md:12},void 0,ee(h.a,{name:"Email",id:"email",fullWidth:!0,placeholder:"Email",inputProps:{value:s,onChange:this.handleChange("email")}}))),ee(v.a,{},void 0,ee(v.a,{item:!0,xs:12,sm:12,md:12},void 0,ee(h.a,{name:"Subject",id:"subject",fullWidth:!0,placeholder:"Subject",inputProps:{value:i,onChange:this.handleChange("subject")}}))),ee(v.a,{},void 0,ee(v.a,{item:!0,xs:12,sm:12,md:12},void 0,ee(h.a,{name:"Message",id:"message",fullWidth:!0,placeholder:"Message",inputProps:{value:u,onChange:this.handleChange("message")}}))),ee(v.a,{},void 0,ee(v.a,{item:!0,xs:12,sm:12,md:12},void 0,ee("form",{onSubmit:this.onSubmit},void 0,r.a.createElement(b.a,{ref:ce,sitekey:"6LftqoQUAAAAAOnGULHOWhdUACVQYeHFggJdRojU",onChange:this.onChange}))))),ee(w.a,{},void 0,ee(C.a,{variant:"contained",color:"primary",disabled:t,onClick:this.handleSave},void 0,"Save Message"),ee("div",{},void 0,ee("h1",{},void 0,n)),ee("div",{},void 0,ee("h1",{},void 0,this.props.error))))),ee(v.a,{item:!0,xs:6,sm:6,md:6},void 0,a.description&&ee("div",{dangerouslySetInnerHTML:{__html:a.description}})))))}}])&&te(n.prototype,a),o&&te(n,o),t}(),de=Object(u.b)({isRequesting:Object(u.a)(X,function(e){return e.isRequesting}),success:Object(u.a)(X,function(e){return e.success}),msg:Object(u.a)(X,function(e){return e.successMessage}),error:Object(u.a)(X,function(e){return e.errorMessage}),contactDetail:Object(u.a)(X,function(e){return e.contactDetail})}),le=Object(i.connect)(de,a),fe=Object(R.a)({key:"contactUs",reducer:K}),pe=Object(_.a)({key:"contactUs",saga:B}),be=s()({cardCategoryWhite:{color:"rgba(255,255,255,.62)",margin:"0",fontSize:"14px",marginTop:"0",marginBottom:"0"},cardTitleWhite:{color:"#FFFFFF",marginTop:"0px",minHeight:"auto",fontWeight:"300",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",marginBottom:"3px",textDecoration:"none"}});t.default=Object(l.compose)(f.withRouter,be,fe,pe,le)(ue)}}]);
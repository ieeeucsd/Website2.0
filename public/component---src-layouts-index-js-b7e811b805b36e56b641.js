webpackJsonp([0x67ef26645b2a,60335399758886],{106:function(e,t){e.exports={data:{site:{siteMetadata:{title:"IEEE at UCSD"}}},layoutContext:{}}},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),i=r(a),u=n(207),c=r(u),l=n(106),s=r(l);t.default=function(e){return i.default.createElement(c.default,o({},e,s.default))},e.exports=t.default},300:function(e,t){},422:function(e,t){"use strict";function n(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){var u,c,l,s=r(e),f=r(t);if(s&&f){if(c=e.length,c!=t.length)return!1;for(u=c;0!==u--;)if(!n(e[u],t[u]))return!1;return!0}if(s!=f)return!1;var d=e instanceof Date,T=t instanceof Date;if(d!=T)return!1;if(d&&T)return e.getTime()==t.getTime();var p=e instanceof RegExp,E=t instanceof RegExp;if(p!=E)return!1;if(p&&E)return e.toString()==t.toString();var m=o(e);if(c=m.length,c!==o(t).length)return!1;for(u=c;0!==u--;)if(!a.call(t,m[u]))return!1;if(i&&e instanceof Element&&t instanceof Element)return e===t;for(u=c;0!==u--;)if(l=m[u],!("_owner"===l&&e.$$typeof||n(e[l],t[l])))return!1;return!0}return e!==e&&t!==t}var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return n(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||e.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},423:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=r(s),d=n(7),T=r(d),p=n(444),E=r(p),m=n(422),A=r(m),h=n(424),y=n(181),S=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,A.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case y.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case y.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=i,t.titleAttributes=c({},a),t));case y.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},a)});case y.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},a)})}return c({},o,(n={},n[r.type]=c({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),c=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case y.TAG_NAMES.LINK:case y.TAG_NAMES.META:case y.TAG_NAMES.NOSCRIPT:case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=c({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},b=(0,E.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(v),g=S(b);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},181:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},424:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),u=r(i),c=n(5),l=r(c),s=n(181),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=A(e,s.TAG_NAMES.TITLE),n=A(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return A(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],c=u.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:A(e,s.HELMET_PROPS.DEFER),encode:A(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},y=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){y(t)},0)}}(),S=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,O=function(e){_&&b(_),e.defer?_=v(function(){M(e,function(){_=null})}):(M(e),_=null)},M=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,T=e.titleAttributes;P(s.TAG_NAMES.BODY,r),P(s.TAG_NAMES.HTML,o),w(d,T);var p={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,a),metaTags:C(s.TAG_NAMES.META,i),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,u),scriptTags:C(s.TAG_NAMES.SCRIPT,l),styleTags:C(s.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=p[e].oldTags)}),t&&t(),c(e,E,m)},R=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),P(s.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var f=a.indexOf(c);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),a=R(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},j=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=G(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},x=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},k=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return j(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return G(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,T=e.titleAttributes;return{base:k(s.TAG_NAMES.BASE,t,r),bodyAttributes:k(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(s.ATTRIBUTE_NAMES.HTML,o,r),link:k(s.TAG_NAMES.LINK,a,r),meta:k(s.TAG_NAMES.META,i,r),noscript:k(s.TAG_NAMES.NOSCRIPT,u,r),script:k(s.TAG_NAMES.SCRIPT,c,r),style:k(s.TAG_NAMES.STYLE,l,r),title:k(s.TAG_NAMES.TITLE,{title:d,titleAttributes:T},r)}};t.convertReactPropstoHtmlAttributes=H,t.handleClientStateChange=O,t.mapStateOnServer=U,t.reducePropsToState=h,t.requestAnimationFrame=v,t.warn=g}).call(t,function(){return this}())},444:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function i(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(i){function f(){d=e(T.map(function(e){return e.props})),p.canUseDOM?t(d):n&&(d=n(d))}if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var d,T=[],p=function(e){function t(){return e.apply(this,arguments)||this}a(t,e),t.peek=function(){return d},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=d;return d=void 0,T=[],e};var n=t.prototype;return n.shouldComponentUpdate=function(e){return!l(e,this.props)},n.componentWillMount=function(){T.push(this),f()},n.componentDidUpdate=function(){f()},n.componentWillUnmount=function(){var e=T.indexOf(this);T.splice(e,1),f()},n.render=function(){return c.createElement(i,this.props)},t}(u.Component);return o(p,"displayName","SideEffect("+r(i)+")"),o(p,"canUseDOM",s),p}}var u=n(2),c=r(u),l=r(n(463)),s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=i},463:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!u(l))return!1;var s=e[l],f=t[l];if(o=n?n.call(r,s,f,l):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},464:function(e,t,n){var r,o;(function(n){window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),r=this;do for(t=n.length;0<=--t&&n.item(t)!==r;);while(t<0&&(r=r.parentElement));return r}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),o=Math.max(0,16-(r-e)),a=window.setTimeout(function(){t(r+o)},o);return e=r+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),function(n,a){r=[],o=function(){return a(n)}.apply(t,r),!(void 0!==o&&(e.exports=o))}("undefined"!=typeof n?n:"undefined"!=typeof window?window:this,function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}}),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,o=-1,a="",i=n.charCodeAt(0);++o<r;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+a},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n},i=function(t,n,r){0===t&&document.body.focus(),r||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},u=function(t,n,r,o){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(a)}};return function(c,l){var s,f,d,T,p={};p.cancelScroll=function(e){cancelAnimationFrame(T),T=null,e||u("scrollCancel",s)},p.animateScroll=function(r,c,l){p.cancelScroll();var f=n(s||t,l||{}),E="[object Number]"===Object.prototype.toString.call(r),m=E||!r.tagName?null:r;if(E||m){var A=e.pageYOffset;f.header&&!d&&(d=document.querySelector(f.header));var h,y,S,v,b,g,_,O,M=a(d),R=E?r:function(t,n,r,a){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-r,0),a&&(i=Math.min(i,o()-e.innerHeight)),i}(m,M,parseInt("function"==typeof f.offset?f.offset(r,c):f.offset,10),f.clip),w=R-A,P=o(),C=0,I=(h=w,S=(y=f).speedAsDuration?y.speed:Math.abs(h/1e3*y.speed),y.durationMax&&S>y.durationMax?y.durationMax:y.durationMin&&S<y.durationMin?y.durationMin:parseInt(S,10)),N=function(t){var n,o,a;v||(v=t),C+=t-v,g=A+w*(o=b=1<(b=0===I?0:C/I)?1:b,"easeInQuad"===(n=f).easing&&(a=o*o),"easeOutQuad"===n.easing&&(a=o*(2-o)),"easeInOutQuad"===n.easing&&(a=o<.5?2*o*o:(4-2*o)*o-1),"easeInCubic"===n.easing&&(a=o*o*o),"easeOutCubic"===n.easing&&(a=--o*o*o+1),"easeInOutCubic"===n.easing&&(a=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),"easeInQuart"===n.easing&&(a=o*o*o*o),"easeOutQuart"===n.easing&&(a=1- --o*o*o*o),"easeInOutQuart"===n.easing&&(a=o<.5?8*o*o*o*o:1-8*--o*o*o*o),"easeInQuint"===n.easing&&(a=o*o*o*o*o),"easeOutQuint"===n.easing&&(a=1+--o*o*o*o*o),"easeInOutQuint"===n.easing&&(a=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o),n.customEasing&&(a=n.customEasing(o)),a||o),e.scrollTo(0,Math.floor(g)),function(t,n){var o=e.pageYOffset;if(t==n||o==n||(A<n&&e.innerHeight+o)>=P)return p.cancelScroll(!0),i(r,n,E),u("scrollStop",f,r,c),!(T=v=null)}(g,R)||(T=e.requestAnimationFrame(N),v=t)};0===e.pageYOffset&&e.scrollTo(0,0),_=r,O=f,E||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:_.id},document.title,_===document.documentElement?"#top":"#"+_.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(r,Math.floor(R),!1):(u("scrollStart",f,r,c),p.cancelScroll(!0),e.requestAnimationFrame(N))}};var E=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(f=t.target.closest(c))&&"a"===f.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&f.hostname===e.location.hostname&&f.pathname===e.location.pathname&&/#/.test(f.href)){var n,o;try{n=r(decodeURIComponent(f.hash))}catch(e){n=r(f.hash)}if("#"===n){if(!s.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(s),p.animateScroll(o,f))}},m=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||p.animateScroll(t,null,{updateURL:!1})}};return p.destroy=function(){s&&(document.removeEventListener("click",E,!1),e.removeEventListener("popstate",m,!1),p.cancelScroll(),T=d=f=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),s=n(t,l||{}),d=s.header?document.querySelector(s.header):null,document.addEventListener("click",E,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",m,!1)}(),p}})}).call(t,function(){return this}())},205:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(26),u=r(i),c=function(e){var t=e.siteTitle;return a.default.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},a.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.default.createElement("h1",{style:{margin:0}},a.default.createElement(u.default,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};t.default=c,e.exports=t.default},321:function(e,t,n){e.exports=n.p+"static/favicon.34a5752c.ico"},304:function(e,t){},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(2),a=r(o),i=n(7),u=r(i),c=n(423),l=r(c),s=n(321),f=r(s),d=n(205);r(d);n(304),n(300),"undefined"!=typeof window&&n(464)('a[href*="#"]');var T=function(e){var t=e.children,n=e.data;return a.default.createElement("div",null,a.default.createElement(l.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"shortcut icon",type:"image/png",href:""+f.default}]}),a.default.createElement("div",null,t()))};T.propTypes={children:u.default.func},t.default=T;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-b7e811b805b36e56b641.js.map
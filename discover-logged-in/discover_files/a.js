/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
jQuery.noConflict();
;
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);;
var wpFollowButton;

(function($) {
	var cookies = document.cookie.split( /;\s*/ ), cookie = false;
	for ( i = 0; i < cookies.length; i++ ) {
		if ( cookies[i].match( /^wp_api=/ ) ) {
			cookies = cookies[i].split( '=' );
			cookie = cookies[1];
			break;
		}
	}

wpFollowButton = {

	enable: function() {
		$( 'a.wpcom-follow, a.wpcom-following' ).click( function( e ) {
			e.preventDefault();
		
 	 		var link = $( this );
		
			var blog_id = link.data('id');
			var blog_url = link.data('url');
			var is_following = link.hasClass( 'wpcom-following' );

			if ( blog_id ) {
				var f_id = blog_id;
			} else {
				var ln_classes = link.attr( 'class' ).split( ' ' );
				for ( i=0; i < ln_classes.length; i++ ) {
					if ( 0 == ln_classes[i].indexOf('f-') ) {
						var f_id = ln_classes[i].slice( 2, ln_classes[i].length );
					}
				}
			}

 	 		if ( is_following ) {
				var action = 'ab_unsubscribe_from_blog';
 	 		} else {
				var action = 'ab_subscribe_to_blog';
			}
		
			var elem = $( 'a.f-' + f_id );
			if ( is_following ) {
				elem.fadeOut( 'fast', function() {
					elem.removeClass( 'wpcom-following' ).addClass( 'wpcom-follow' ).text( 'Follow' );
					elem.fadeIn( 'fast' );
 	 			})
			} else {
 	 			elem.fadeOut( 'fast', function() {
 	 				elem.addClass( 'wpcom-following' ).removeClass( 'wpcom-follow' ).text( 'Following' );
 	 				elem.fadeIn( 'fast' );
				})
 	 		}
		
			var href = link.attr( 'href' );
		
			var params = href.split( '\?' );
			var domain = params[0];
			var flds = 'undefined' != typeof params[1] ? params[1].split( '&' ) : [];
			for ( var i = 0; i < flds.length; i++ ) {
 	 			var pos = flds[i].indexOf( '=' );
 	 			if ( -1 == pos ) continue;
 	 			var argname = flds[i].substring( 0, pos );
 	 			var value = flds[i].substring( pos+1 );
		
				if ( argname == '_wpnonce') {
 	 				var nonce = value; 
				} else if ( argname == 'src' ) {
					var source = value;
 	 			}
			}

			$.post( domain + 'wp-admin/admin-ajax.php', {
 	 			'action': action,
 	 			'_wpnonce': nonce,
 	 			'blog_id': blog_id,
 	 			'blog_url': blog_url,
 	 			'source': source
			}, function( response ) {
 	 			if ( 'object' == typeof response.errors ) {
 	 				if ( is_following )
 	 					elem.removeClass( 'wpcom-follow' ).addClass( 'wpcom-following' ).text( 'Following' );
 	 				else
 	 					elem.removeClass( 'wpcom-following' ).addClass( 'wpcom-follow' ).text( 'Follow' );
 	 			}
 	 		},
			'json' );
		});
	},

	enable_rest: function( el, source ) {
		var t = this;

		el.unbind( 'click' ).bind( 'click', function( e ) {
			e.preventDefault();
 	 		var link = $( this );
			var blog_id = link.attr( 'data-blog-id' );
 	 		var is_following = link.hasClass( 'wpcom-following-rest' );
			var rest_path = '/sites/' + blog_id + '/follows/new';
		
 	 		if ( is_following ) {
				rest_path = '/sites/' + blog_id + '/follows/mine/delete';
 	 		}
		
			//select and update ALL follow buttons on the page (could be more than one)
			var attr_selector = 'data-blog-id="' + blog_id + '"';
			var elem = $( 'a.wpcom-follow-rest[' + attr_selector + '], a.wpcom-following-rest[' + attr_selector + ']' );
			if ( is_following ) {
				elem.fadeOut( 'fast', function() {
					elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
					elem.fadeIn( 'fast' );
 	 			})
			} else {
 	 			elem.fadeOut( 'fast', function() {
 	 				elem.addClass( 'wpcom-following-rest' ).removeClass( 'wpcom-follow-rest' ).text( link.attr( 'data-following-text' ) );
 	 				elem.fadeIn( 'fast' );
				})
 	 		}
		
			t.ajax( {
				type: 'POST',
				path : rest_path,
				success : function( res ) {
					if ( ! res.success ){
						if ( is_following )
							elem.removeClass( 'wpcom-follow-rest' ).addClass( 'wpcom-following-rest' ).text( link.attr( 'data-following-text' ) );
						else
							elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
					}
				},
				error : function( res ) {
					if ( is_following )
						elem.removeClass( 'wpcom-follow-rest' ).addClass( 'wpcom-following-rest' ).text( link.attr( 'data-following-text' ) );
					else
						elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
				}
			});

			//show post-Follow bubble
			if ( ! is_following ) {
				t.showBubble( link );
				t.bumpStat( link.attr( 'data-stat-src' ) );
			}
		});

		//show unfollow text on hover
		el.hover( function() {
	 	 		var link = $( this );
 		 		var is_following = link.hasClass( 'wpcom-following-rest' );
				if ( is_following )
					link.text( link.attr( 'data-following-hover-text' ) );
			}, function() {
	 	 		var link = $( this );
 		 		var is_following = link.hasClass( 'wpcom-following-rest' );
				if ( is_following )
					link.text( link.attr( 'data-following-text' ) );
			});

	},

	showBubble: function( link ) {
		var pos = link.position();
		var hideBubble = this.hideBubble;
		$( 'div.bubble-txt', 'div.action-bubble' ).html( "New posts from this blog will now appear in <a href='http://wordpress.com/read/following/' onclick='hideBubble()'>your reader</a>." );
		var bubble = $( 'div.action-bubble' );
		link.parent().append( bubble );
		var left = pos.left + ( link.width() / 2 ) - ( $( 'div.wpcom-bubble' ).width() / 2 );
		var top = pos.top + bubble.height();
		bubble.css( { left: left + 'px', top: top + 'px' } );
		bubble.addClass( 'fadein' );
		setTimeout( function() {
			$('body').on( 'click.bubble touchstart.bubble', function(e) {
				if ( !$(e.target).hasClass('action-bubble') && !$(e.target).parents( 'div.action-bubble' ).length )
					hideBubble();
			});
			$(document).on( 'scroll.bubble', hideBubble );
			setTimeout( hideBubble, 10000 );
		}, 500 );
	},

	hideBubble: function() {
		$( 'div.wpcom-bubble.action-bubble' ).remove();
  	},

	//common method for rendering a follow button from the object data
	create : function ( data, source ) {
		var is_following = data['params']['is_following'];
		var follow_link = $('<a></a>', {
			'class' : ( is_following ? 'wpcom-following-rest' : 'wpcom-follow-rest' ),
			href : 'http://public-api.wordpress.com/sites/' + data['params']['site_id'] + '/follows',
			title : data['params']['blog_title'] + 
				' (' + data['params']['blog_domain'] + ')',
			text : is_following ? data['params']['following-text'] : data['params']['follow-text']
		} ).attr( { 
			'data-blog-id' : data['params']['site_id'],
			'data-stat-src' : data['params']['stat-source'],
			'data-follow-text' : data['params']['follow-text'],
			'data-following-text' : data['params']['following-text'],
			'data-following-hover-text' : data['params']['following-hover-text']
		} );
		var follow_button = $( '<div></div>', { 
			'class': 'wpcom-follow-container wpcom-follow-attached',
			style: 'display: inline-block;'
		 } ).append( follow_link );

		this.enable_rest( follow_link, source );
		return follow_button;
	},

	createAll: function() {
		$( '.wpcom-follow-container' ).not( '.wpcom-follow-attached' ).each( function( index ) {
			var el = $( this );
			el.replaceWith( wpFollowButton.create( el.data( 'json' ), el.data( 'follow-source' ) ) );
		});
	},

	ajax: function( options ) {
		if ( document.location.host == 'public-api.wordpress.com' ) {
			//console.log( 'regular ajax call ' + options.type + ' ' + options.path);
			$.ajaxSetup({ beforeSend : function(xhr){
				if ( cookie ) {
					xhr.setRequestHeader( 'Authorization', 'X-WPCOOKIE ' + cookie + ':1:' + document.location.host );
				}
			}});
			var request = {
				type : options.type,
				url : 'https://public-api.wordpress.com/rest/v1' + options.path,
				success : options.success,
				error : options.error,
				data : options.data,
				dataType : 'json'
			};
			$.ajax(request);
			$.ajaxSetup({ beforeSend : null });
		} else {
			//console.log( 'proxied ajax call ' + options.type + ' ' + options.path );
			var request = {
				path: options.path,
				method: options.type
			};
			if ( request.method === "POST" )
				request.body = options.data;
			else
				request.query = options.data;

			$.wpcom_proxy_request(request).done( function ( response, statusCode ) { 
				if ( 200 == statusCode ) 
					options.success( response );
				else
					options.error( statusCode );
			} );
		}
	},

	bumpStat: function( source ) {
		new Image().src = document.location.protocol + 
			'//pixel.wp.com/g.gif?v=wpcom-no-pv&x_follow_source=' + encodeURIComponent( source ) + '&baba=' + Math.random();
	}

};

$(function(){
	wpFollowButton.enable()
	wpFollowButton.createAll()
});

})(jQuery);
;
/**
 The MIT License

 Copyright (c) 2010 Daniel Park (http://metaweb.com, http://postmessage.freebaseapps.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 **/
var NO_JQUERY = {};
(function(window, $, undefined) {

     if (!("console" in window)) {
         var c = window.console = {};
         c.log = c.warn = c.error = c.debug = function(){};
     }

     if ($ === NO_JQUERY) {
         // jQuery is optional
         $ = {
             fn: {},
             extend: function() {
                 var a = arguments[0];
                 for (var i=1,len=arguments.length; i<len; i++) {
                     var b = arguments[i];
                     for (var prop in b) {
                         a[prop] = b[prop];
                     }
                 }
                 return a;
             }
         };
     }

     $.fn.pm = function() {
         console.log("usage: \nto send:    $.pm(options)\nto receive: $.pm.bind(type, fn, [origin])");
         return this;
     };

     // send postmessage
     $.pm = window.pm = function(options) {
         pm.send(options);
     };

     // bind postmessage handler
     $.pm.bind = window.pm.bind = function(type, fn, origin, hash, async_reply) {
         pm.bind(type, fn, origin, hash, async_reply === true);
     };

     // unbind postmessage handler
     $.pm.unbind = window.pm.unbind = function(type, fn) {
         pm.unbind(type, fn);
     };

     // default postmessage origin on bind
     $.pm.origin = window.pm.origin = null;

     // default postmessage polling if using location hash to pass postmessages
     $.pm.poll = window.pm.poll = 200;

     var pm = {

         send: function(options) {
             var o = $.extend({}, pm.defaults, options),
             target = o.target;
             if (!o.target) {
                 console.warn("postmessage target window required");
                 return;
             }
             if (!o.type) {
                 console.warn("postmessage type required");
                 return;
             }
             var msg = {data:o.data, type:o.type};
             if (o.success) {
                 msg.callback = pm._callback(o.success);
             }
             if (o.error) {
                 msg.errback = pm._callback(o.error);
             }
             if (("postMessage" in target) && !o.hash) {
                 pm._bind();
                 target.postMessage(JSON.stringify(msg), o.origin || '*');
             }
             else {
                 pm.hash._bind();
                 pm.hash.send(o, msg);
             }
         },

         bind: function(type, fn, origin, hash, async_reply) {
           pm._replyBind ( type, fn, origin, hash, async_reply );
         },

         _replyBind: function(type, fn, origin, hash, isCallback) {
           if (("postMessage" in window) && !hash) {
               pm._bind();
           }
           else {
               pm.hash._bind();
           }
           var l = pm.data("listeners.postmessage");
           if (!l) {
               l = {};
               pm.data("listeners.postmessage", l);
           }
           var fns = l[type];
           if (!fns) {
               fns = [];
               l[type] = fns;
           }
           fns.push({fn:fn, callback: isCallback, origin:origin || $.pm.origin});
         },

         unbind: function(type, fn) {
             var l = pm.data("listeners.postmessage");
             if (l) {
                 if (type) {
                     if (fn) {
                         // remove specific listener
                         var fns = l[type];
                         if (fns) {
                             var m = [];
                             for (var i=0,len=fns.length; i<len; i++) {
                                 var o = fns[i];
                                 if (o.fn !== fn) {
                                     m.push(o);
                                 }
                             }
                             l[type] = m;
                         }
                     }
                     else {
                         // remove all listeners by type
                         delete l[type];
                     }
                 }
                 else {
                     // unbind all listeners of all type
                     for (var i in l) {
                       delete l[i];
                     }
                 }
             }
         },

         data: function(k, v) {
             if (v === undefined) {
                 return pm._data[k];
             }
             pm._data[k] = v;
             return v;
         },

         _data: {},

         _CHARS: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),

         _random: function() {
             var r = [];
             for (var i=0; i<32; i++) {
                 r[i] = pm._CHARS[0 | Math.random() * 32];
             };
             return r.join("");
         },

         _callback: function(fn) {
             var cbs = pm.data("callbacks.postmessage");
             if (!cbs) {
                 cbs = {};
                 pm.data("callbacks.postmessage", cbs);
             }
             var r = pm._random();
             cbs[r] = fn;
             return r;
         },

         _bind: function() {
             // are we already listening to message events on this w?
             if (!pm.data("listening.postmessage")) {
                 if (window.addEventListener) {
                     window.addEventListener("message", pm._dispatch, false);
                 }
                 else if (window.attachEvent) {
                     window.attachEvent("onmessage", pm._dispatch);
                 }
                 pm.data("listening.postmessage", 1);
             }
         },

         _dispatch: function(e) {
             //console.log("$.pm.dispatch", e, this);
             try {
                 var msg = JSON.parse(e.data);
             }
             catch (ex) {
                 //console.warn("postmessage data invalid json: ", ex); //message wasn't meant for pm
                 return;
             }
             if (!msg.type) {
                 //console.warn("postmessage message type required"); //message wasn't meant for pm
                 return;
             }
             var cbs = pm.data("callbacks.postmessage") || {},
             cb = cbs[msg.type];
             if (cb) {
                 cb(msg.data);
             }
             else {
                 var l = pm.data("listeners.postmessage") || {};
                 var fns = l[msg.type] || [];
                 for (var i=0,len=fns.length; i<len; i++) {
                     var o = fns[i];
                     if (o.origin && o.origin !== '*' && e.origin !== o.origin) {
                         console.warn("postmessage message origin mismatch", e.origin, o.origin);
                         if (msg.errback) {
                             // notify post message errback
                             var error = {
                                 message: "postmessage origin mismatch",
                                 origin: [e.origin, o.origin]
                             };
                             pm.send({target:e.source, data:error, type:msg.errback});
                         }
                         continue;
                     }

                     function sendReply ( data ) {
                       if (msg.callback) {
                           pm.send({target:e.source, data:data, type:msg.callback});
                       }
                     }

                     try {
                         if ( o.callback ) {
                           o.fn(msg.data, sendReply, e);
                         } else {
                           sendReply ( o.fn(msg.data, e) );
                         }
                     }
                     catch (ex) {
                         if (msg.errback) {
                             // notify post message errback
                             pm.send({target:e.source, data:ex, type:msg.errback});
                         } else {
                             throw ex;
                         }
                     }
                 };
             }
         }
     };

     // location hash polling
     pm.hash = {

         send: function(options, msg) {
             //console.log("hash.send", target_window, options, msg);
             var target_window = options.target,
             target_url = options.url;
             if (!target_url) {
                 console.warn("postmessage target window url is required");
                 return;
             }
             target_url = pm.hash._url(target_url);
             var source_window,
             source_url = pm.hash._url(window.location.href);
             if (window == target_window.parent) {
                 source_window = "parent";
             }
             else {
                 try {
                     for (var i=0,len=parent.frames.length; i<len; i++) {
                         var f = parent.frames[i];
                         if (f == window) {
                             source_window = i;
                             break;
                         }
                     };
                 }
                 catch(ex) {
                     // Opera: security error trying to access parent.frames x-origin
                     // juse use window.name
                     source_window = window.name;
                 }
             }
             if (source_window == null) {
                 console.warn("postmessage windows must be direct parent/child windows and the child must be available through the parent window.frames list");
                 return;
             }
             var hashmessage = {
                 "x-requested-with": "postmessage",
                 source: {
                     name: source_window,
                     url: source_url
                 },
                 postmessage: msg
             };
             var hash_id = "#x-postmessage-id=" + pm._random();
             target_window.location = target_url + hash_id + encodeURIComponent(JSON.stringify(hashmessage));
         },

         _regex: /^\#x\-postmessage\-id\=(\w{32})/,

         _regex_len: "#x-postmessage-id=".length + 32,

         _bind: function() {
             // are we already listening to message events on this w?
             if (!pm.data("polling.postmessage")) {
                 setInterval(function() {
                                 var hash = "" + window.location.hash,
                                 m = pm.hash._regex.exec(hash);
                                 if (m) {
                                     var id = m[1];
                                     if (pm.hash._last !== id) {
                                         pm.hash._last = id;
                                         pm.hash._dispatch(hash.substring(pm.hash._regex_len));
                                     }
                                 }
                             }, $.pm.poll || 200);
                 pm.data("polling.postmessage", 1);
             }
         },

         _dispatch: function(hash) {
             if (!hash) {
                 return;
             }
             try {
                 hash = JSON.parse(decodeURIComponent(hash));
                 if (!(hash['x-requested-with'] === 'postmessage' &&
                       hash.source && hash.source.name != null && hash.source.url && hash.postmessage)) {
                     // ignore since hash could've come from somewhere else
                     return;
                 }
             }
             catch (ex) {
                 // ignore since hash could've come from somewhere else
                 return;
             }
             var msg = hash.postmessage,
             cbs = pm.data("callbacks.postmessage") || {},
             cb = cbs[msg.type];
             if (cb) {
                 cb(msg.data);
             }
             else {
                 var source_window;
                 if (hash.source.name === "parent") {
                     source_window = window.parent;
                 }
                 else {
                     source_window = window.frames[hash.source.name];
                 }
                 var l = pm.data("listeners.postmessage") || {};
                 var fns = l[msg.type] || [];
                 for (var i=0,len=fns.length; i<len; i++) {
                     var o = fns[i];
                     if (o.origin) {
                         var origin = /https?\:\/\/[^\/]*/.exec(hash.source.url)[0];
                         if (o.origin !== '*' && origin !== o.origin) {
                             console.warn("postmessage message origin mismatch", origin, o.origin);
                             if (msg.errback) {
                                 // notify post message errback
                                 var error = {
                                     message: "postmessage origin mismatch",
                                     origin: [origin, o.origin]
                                 };
                                 pm.send({target:source_window, data:error, type:msg.errback, hash:true, url:hash.source.url});
                             }
                             continue;
                         }
                     }

                     function sendReply ( data ) {
                       if (msg.callback) {
                         pm.send({target:source_window, data:data, type:msg.callback, hash:true, url:hash.source.url});
                       }
                     }

                     try {
                         if ( o.callback ) {
                           o.fn(msg.data, sendReply);
                         } else {
                           sendReply ( o.fn(msg.data) );
                         }
                     }
                     catch (ex) {
                         if (msg.errback) {
                             // notify post message errback
                             pm.send({target:source_window, data:ex, type:msg.errback, hash:true, url:hash.source.url});
                         } else {
                             throw ex;
                         }
                     }
                 };
             }
         },

         _url: function(url) {
             // url minus hash part
             return (""+url).replace(/#.*$/, "");
         }

     };

     $.extend(pm, {
                  defaults: {
                      target: null,  /* target window (required) */
                      url: null,     /* target window url (required if no window.postMessage or hash == true) */
                      type: null,    /* message type (required) */
                      data: null,    /* message data (required) */
                      success: null, /* success callback (optional) */
                      error: null,   /* error callback (optional) */
                      origin: "*",   /* postmessage origin (optional) */
                      hash: false    /* use location hash for message passing (optional) */
                  }
              });

 })(this, typeof jQuery === "undefined" ? NO_JQUERY : jQuery);

/**
 * http://www.JSON.org/json2.js
 **/
if (! ("JSON" in window && window.JSON)){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
;
var wpcom_mobile_user_agent_info = {
		
		PLATFORM_WINDOWS : 'windows',
		PLATFORM_IPHONE : 'iphone',
		PLATFORM_IPOD : 'ipod',
		PLATFORM_IPAD : 'ipad',
		PLATFORM_BLACKBERRY : 'blackberry',
		PLATFORM_BLACKBERRY_10 : 'blackberry_10',
		PLATFORM_SYMBIAN : 'symbian_series60',
		PLATFORM_SYMBIAN_S40 : 'symbian_series40',
		PLATFORM_J2ME_MIDP : 'j2me_midp',
		PLATFORM_ANDROID : 'android',
		PLATFORM_ANDROID_TABLET : 'android_tablet',
		PLATFORM_FIREFOX_OS : 'firefoxOS',
		PLATFORM_MOBILE_GENERIC : 'mobile_generic',

		userAgent : false, //Shortcut to the browser User Agent String
		matchedPlatformName : false, //Matched platform name. False otherwise.
		matchedUserAgentName : false, //Matched UA String. False otherwise.
		
		init: function() {
			var t = this;
			try{
				t.userAgent = navigator.userAgent.toLowerCase();
				t.getPlatformName();
				t.getMobileUserAgentName();
			}
			catch(e){
				console.error(e);
			}
		},
		
		initForTest: function(userAgent) {
			var t = this;
			t.matchedPlatformName = false;
			t.matchedUserAgentName = false;
			try{
				t.userAgent = userAgent.toLowerCase();
				t.getPlatformName();
				t.getMobileUserAgentName();
			}
			catch(e){
				console.error(e);
			}
		},
		
		
		/**
		 * This method detects the mobile User Agent name.
		 *
		 * @return string The matched User Agent name, false otherwise.
		 */
		getMobileUserAgentName : function() {
			var t = this;
			if ( false !== t.matchedUserAgentName )
				return t.matchedUserAgentName;

			if ( false === t.userAgent )
				return false;

			if( t.isChromeForIOS() )
				t.matchedUserAgentName = 'chrome-for-ios';
			else if( t.isTwitterForIpad() )
				t.matchedUserAgentName =  'twitter-for-ipad';
			else if( t.isTwitterForIphone() )
				t.matchedUserAgentName =  'twitter-for-iphone';
			else if( t.isIPhoneOrIPod() ) 
				t.matchedUserAgentName = 'iphone';
			else if ( t.isIPad() )
				t.matchedUserAgentName = 'ipad';
			else if( t.isAndroidTablet() )
				t.matchedUserAgentName = 'android_tablet';
			else if( t.isAndroid() )
				t.matchedUserAgentName = 'android';
			else if( t.isBlackberry10() )
				t.matchedUserAgentName = 'blackberry_10';
			else if( t.userAgent.indexOf('blackberry') != -1 )
				t.matchedUserAgentName = 'blackberry';
			else if( t.isBlackberryTablet() )
				t.matchedUserAgentName = 'blackberry_tablet';
			else if( t.isWindowsPhone7() )
				t.matchedUserAgentName = 'win7';
			else if( t.isWindowsPhone8() )
				t.matchedUserAgentName = 'winphone8';
			else if( t.isOperaMini() )
				t.matchedUserAgentName = 'opera-mini';
			else if( t.isOperaMobile() )
				t.matchedUserAgentName = 'opera-mobi';
			else if( t.isKindleFire() )
				t.matchedUserAgentName = 'kindle-fire';
			else if( t.isSymbianPlatform() )
				t.matchedUserAgentName = 'series60';
			else if( t.isFirefoxMobile() )
				t.matchedUserAgentName = 'firefox_mobile';
			else if( t.isFirefoxOS() )
				t.matchedUserAgentName = 'firefoxOS';
			else if( t.isFacebookForIphone() )
				t.matchedUserAgentName = 'facebook-for-iphone';
			else if( t.isFacebookForIpad() )
				t.matchedUserAgentName = 'facebook-for-ipad';
			else if( t.isWordPressForIos())
				t.matchedUserAgentName = 'ios-app';
			else if( t.userAgent.indexOf('iphone') != -1 )
				t.matchedUserAgentName = 'iphone-unknown';
			else if( t.userAgent.indexOf('ipad') != -1 )
				t.matchedUserAgentName = 'ipad-unknown';
			
			return t.matchedUserAgentName ;
		},
		
		getPlatformName : function() {
			var t = this;
			if ( false !== t.matchedPlatformName )
				return t.matchedPlatformName;
			
			if ( false === t.userAgent )
				return false;
			
			if( t.userAgent.indexOf('windows ce') != -1 || t.userAgent.indexOf('windows phone') != -1) {
				t.matchedPlatformName = t.PLATFORM_WINDOWS;
			} else if( t.userAgent.indexOf('ipad') != -1 ) {
				t.matchedPlatformName = t.PLATFORM_IPAD;
			} else if( t.userAgent.indexOf('ipod') != -1 ) {
				t.matchedPlatformName = t.PLATFORM_IPOD;
			} else if( t.userAgent.indexOf('iphone') != -1 ) {
				t.matchedPlatformName = t.PLATFORM_IPHONE;
			} else if( t.userAgent.indexOf('android') != -1 ) {
				if ( t.isAndroidTablet() )
					t.matchedPlatformName = t.PLATFORM_ANDROID_TABLET;
				else
					t.matchedPlatformName = t.PLATFORM_ANDROID;
			} else if( t.isKindleFire() ) {
				t.matchedPlatformName = t.PLATFORM_ANDROID_TABLET;
			} else if( t.isBlackberry10() ) {
				t.matchedPlatformName = t.PLATFORM_BLACKBERRY_10;
			} else if( t.userAgent.indexOf('blackberry') != -1 ) {
				t.matchedPlatformName = t.PLATFORM_BLACKBERRY;
			} else if( t.isBlackberryTablet() ) {
				t.matchedPlatformName = t.PLATFORM_BLACKBERRY;
			} else if( t.isSymbianPlatform() ) {
				t.matchedPlatformName = t.PLATFORM_SYMBIAN;
			} else if( t.isSymbianS40Platform() ) {
				t.matchedPlatformName = t.PLATFORM_SYMBIAN_S40;
			} else if( t.isJ2MEPlatform() ) {
				t.matchedPlatformName = t.PLATFORM_J2ME_MIDP;
			} else if (t.isFirefoxOS()) {			
				t.matchedPlatformName = t.PLATFORM_FIREFOX_OS;
			} else if (t.isFirefoxMobile()) {			
				t.matchedPlatformName = t.PLATFORM_MOBILE_GENERIC;
			}
			
			return t.matchedPlatformName;
		},
		
		
		/**
		 * Detect the blackBerry OS version.
		 * 
		 * Note: This is for smartphones only. Do not work on BB tablets.
		 *
		 */
		getBlackBerryOSVersion : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if( t.isBlackberry10() )
				return '10';
			
			if( t.userAgent.indexOf('blackberry') == -1)
				return false;
			
			var rv = -1; // Return value assumes failure.
			if ( t.userAgent.indexOf('webkit') != -1 ) { //detecting the BB OS version for devices running OS 6.0 or higher
				var re  = new RegExp(/Version\/([\d\.]+)/i);
			} else {
				//blackberry devices <= 5.XX
				//BlackBerry9000/5.0.0.93 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179
				var re  = new RegExp(/BlackBerry\w+\/([\d\.]+)/i);
			}
			if (re.exec(t.userAgent) != null)
				rv =  RegExp.$1.toString();
			
			if( -1 == rv )
				return false;
			
			return rv;
		},
		
		/**
		 * Detects if the current UA is iPhone Mobile Safari or another iPhone or iPod Touch Browser.
		 */
		isIPhoneOrIPod : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			var isIphone = ( t.userAgent.indexOf('iphone') != -1 || t.userAgent.indexOf('ipod') != -1 );
			var isSafari = ( t.userAgent.indexOf('safari') != -1 );
			
			return( isIphone && isSafari );
		},

		/**
		 * Detects if the current device is an iPad.
		 */
		isIPad : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return( t.userAgent.indexOf('ipad') != -1 && t.userAgent.indexOf('safari') != -1);
		},
		
		
		/**
		*  Detects if the current UA is Chrome for iOS
		*
		*/
		isChromeForIOS : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;
			
			return( t.isIPhoneOrIPod() && t.userAgent.indexOf('crios/') != -1);
		},
		
	    /**
	     * Detects if the current browser is the Native Android browser.
	     * @return boolean true if the browser is Android otherwise false
	     */
		 isAndroid : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('android') != -1 ) {
				if ( t.isOperaMini() || t.isOperaMobile() || t.isFirefoxMobile() )
					return false;
				else
					return true;
			} 
			return false;
		},
		
		/**
		 * Detects if the current browser is the Native Android Tablet browser.
		 * 	Assumes 'Android' should be in the user agent, but not 'mobile'
		 *
		 * @return boolean true if the browser is Android and not 'mobile' otherwise false
		 */
		 isAndroidTablet : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if( t.userAgent.indexOf('android') != -1 && t.userAgent.indexOf('mobile') == -1) {
				if ( t.isOperaMini() || t.isOperaMobile() || t.isFirefoxMobile() )
					return false;
				else
					return true;
			}
			return false;
		},
		
		
		/**
		 * Detects if the current browser is Opera Mobile
		 *
		 * What is the difference between Opera Mobile and Opera Mini?
		 * - Opera Mobile is a full Internet browser for mobile devices.
		 * - Opera Mini always uses a transcoder to convert the page for a small display.
		 * (it uses Opera advanced server compression technology to compress web content before it gets to a device.
		 *  The rendering engine is on Opera's server.)
		 *
		 * Opera/9.80 (Windows NT 6.1; Opera Mobi/14316; U; en) Presto/2.7.81 Version/11.00"
		 */
		isOperaMobile : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return( t.userAgent.indexOf('opera') != -1 && t.userAgent.indexOf('mobi') != -1);
		},

		/**
		 * Detects if the current browser is Opera Mini
		 *
		 * Opera/8.01 (J2ME/MIDP; Opera Mini/3.0.6306/1528; en; U; ssr)
		 * Opera/9.80 (Android;Opera Mini/6.0.24212/24.746 U;en) Presto/2.5.25 Version/10.5454
		 * Opera/9.80 (iPhone; Opera Mini/5.0.019802/18.738; U; en) Presto/2.4.15
		 * Opera/9.80 (J2ME/iPhone;Opera Mini/5.0.019802/886; U; ja) Presto/2.4.15
		 * Opera/9.80 (J2ME/iPhone;Opera Mini/5.0.019802/886; U; ja) Presto/2.4.15
		 * Opera/9.80 (Series 60; Opera Mini/5.1.22783/23.334; U; en) Presto/2.5.25 Version/10.54
		 * Opera/9.80 (BlackBerry; Opera Mini/5.1.22303/22.387; U; en) Presto/2.5.25 Version/10.54
		 *
		 */
		isOperaMini : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return( t.userAgent.indexOf('opera') != -1 && t.userAgent.indexOf('mini') != -1);
		},

		
		/**
		 * isBlackberry10() can be used to check the User Agent for a BlackBerry 10 device.
		 */
		isBlackberry10 : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;
			
			return( t.userAgent.indexOf('bb10') != -1 && t.userAgent.indexOf('mobile') != -1);
		},
		
		/**
		 * isBlackberryTablet() can be used to check the User Agent for a RIM blackberry tablet
		 * The user agent of the BlackBerry® Tablet OS follows a format similar to the following:
		 * Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+
		 *
		 */
		 isBlackberryTablet : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			return( t.userAgent.indexOf('playbook') != -1 && t.userAgent.indexOf('rim tablet') != -1);
		},
		
		/**
		 * Detects if the current browser is a Windows Phone 7 device.
		 * ex: Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)
		 */
		isWindowsPhone7 : function () {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return ( t.userAgent.indexOf('windows phone os 7') != -1 ); 
		},
		
		/**
		 * Detects if the current browser is a Windows Phone 8 device.
		 * ex: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; ARM; Touch; IEMobile/10.0; <Manufacturer>; <Device> [;<Operator>])
		 */
		isWindowsPhone8 : function () {
			var t = this;

			if ( false === t.userAgent )
				return false;

			return ( t.userAgent.indexOf('windows phone 8') != -1 );
		},
		
		/**
		 *
		 * Detects if the device platform is J2ME.
		 *
		 */
		isJ2MEPlatform : function () {
			var t = this;

			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('j2me/midp') != -1 ) 
				return true;

			if ( t.userAgent.indexOf('midp') != -1 && t.userAgent.indexOf('cldc') != -1 ) 
				return true;

			return false;
		},
		
		
		/**
		 *
		 * Detects if the device platform is the Symbian Series 40.
		 * Nokia Browser for Series 40 is a proxy based browser, previously known as Ovi Browser.
		 * This browser will report 'NokiaBrowser' in the header, however some older version will also report 'OviBrowser'.
		 *
		 */
		isSymbianS40Platform : function() {
			var t = this;

			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('series40') != -1 ) {
				if ( t.userAgent.indexOf('nokia') != -1 || t.userAgent.indexOf('ovibrowser') != -1 || t.userAgent.indexOf('nokiabrowser') != -1)
					return true;
			}

			return false;
		},
		
		
		/**
		 *
		 * Detects if the device platform is the Symbian Series 60.
		 *
		 */
		isSymbianPlatform : function() {

			var t = this;

			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('webkit') != -1 ) {
				//First, test for WebKit, then make sure it's either Symbian or S60.
				if ( t.userAgent.indexOf('symbian') != -1 || t.userAgent.indexOf('series60') != -1 )
					return true;
				else
					return false;
			} else if ( t.userAgent.indexOf('symbianos') != -1 && t.userAgent.indexOf('series60') != -1 ) {
				return true;
			} else if ( t.userAgent.indexOf('nokia') != -1 && t.userAgent.indexOf('series60') != -1 ) {
				return true;
			} else if (  t.userAgent.indexOf('opera mini') != -1) {
				if( t.userAgent.indexOf('symbianos') != -1 || t.userAgent.indexOf('symbos') != -1 || t.userAgent.indexOf('series 60') != -1 )
					return true;
			}

			return false;
		},

		
		/**
		 * Detects if the current browser is the Kindle Fire Native browser.
		 *
		 * Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-84) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true
		 * Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-84) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=false
		 *
		 * @return boolean true if the browser is Kindle Fire Native browser otherwise false
		 */
		isKindleFire : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			return( t.userAgent.indexOf('silk/') != -1 && t.userAgent.indexOf('silk-accelerated=') != -1);
		},
		
		/**
		 * Detects if the current browser is Firefox Mobile (Fennec)
		 *
		 * http://www.userAgentstring.com/pages/Fennec/
		 * Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.1.1) Gecko/20110415 Firefox/4.0.2pre Fennec/4.0.1
		 * Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1b2pre) Gecko/20081015 Fennec/1.0a1
		 */
		isFirefoxMobile : function() {
			var t = this;
		
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('fennec') != -1 )
				return true;

			return false;
		},
		
		
		/**
		 * Detects if the current browser is the native FirefoxOS browser
		 * 
		 * Mozilla/5.0 (Mobile; rv:14.0) Gecko/14.0 Firefox/14.0
		 * 
		 */
		isFirefoxOS : function() {
			var t = this;
		
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('mozilla') != -1 && t.userAgent.indexOf('mobile') != -1 && t.userAgent.indexOf('gecko') != -1 &&  t.userAgent.indexOf('firefox') != -1 )
				return true;

			return false;
		},
		
		
		/**
		 * Detects if the current UA is Facebook for iPad
		 * - Facebook 4020.0 (iPad; iPhone OS 5.0.1; en_US)
		 * - Mozilla/5.0 (iPad; U; CPU iPhone OS 5_0 like Mac OS X; en_US) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.0.2;FBBV/4020.0;FBDV/iPad2,1;FBMD/iPad;FBSN/iPhone OS;FBSV/5.0;FBSS/1; FBCR/;FBID/tablet;FBLC/en_US;FBSF/1.0]
		 * - Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A403 [FBAN/FBIOS;FBAV/5.0;FBBV/47423;FBDV/iPad2,1;FBMD/iPad;FBSN/iPhone OS;FBSV/6.0;FBSS/1; FBCR/;FBID/tablet;FBLC/en_US]
		 */
		isFacebookForIpad : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('ipad') == -1 )
				return false;

			if ( t.userAgent.indexOf('facebook') != -1 || t.userAgent.indexOf('fbforiphone') != -1 ||  t.userAgent.indexOf('fban/fbios;') != -1 )
				return true;
			
			return false;
		},
		
		/**
		 * Detects if the current UA is Facebook for iPhone
		 * - Facebook 4020.0 (iPhone; iPhone OS 5.0.1; fr_FR)
		 * - Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_0 like Mac OS X; en_US) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.0.2;FBBV/4020.0;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.0;FBSS/2; FBCR/O2;FBID/phone;FBLC/en_US;FBSF/2.0]
		 * - Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 [FBAN/FBIOS;FBAV/5.0;FBBV/47423;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.1.1;FBSS/2; FBCR/3ITA;FBID/phone;FBLC/en_US]
		 */
		isFacebookForIphone : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;
			
			if ( t.userAgent.indexOf('iphone') == -1 )
				return false;

			if ( t.userAgent.indexOf('facebook') != -1 && t.userAgent.indexOf('ipad') == -1  )
				return true;
			else if ( t.userAgent.indexOf('fbforiphone') != -1 && t.userAgent.indexOf('tablet') == -1  )
				return true;
			else if ( t.userAgent.indexOf('fban/fbios;') != -1 && t.userAgent.indexOf('tablet') == -1  ) //FB app v5.0 or higher
				return true;

			return false;
		},
		
		/**
		 *  Detects if the current UA is Twitter for iPhone
		 *  
		 * Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_5 like Mac OS X; nb-no) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8L1 Twitter for iPhone
		 * Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 Twitter for iPhone
		 */
		isTwitterForIphone : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('ipad') != -1 )
				return false;

			if ( t.userAgent.indexOf('twitter for iphone') != -1 )
				return true;

			return false;
		},
		
		/**
		 * Detects if the current UA is Twitter for iPad
		 * 
		 * Old version 4.X - Mozilla/5.0 (iPad; U; CPU OS 4_3_5 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8L1 Twitter for iPad
		 * Ver 5.0 or Higher - Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 Twitter for iPhone 
		 */
		isTwitterForIpad : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('twitter for ipad') != -1 )
				return true;

			if ( t.userAgent.indexOf('ipad') != -1 && t.userAgent.indexOf('twitter for iphone') != -1  )
				return true;

			return false;
		},
		
		
		/**
		 *  Detects if the current UA is WordPress for iOS
		 */
		isWordPressForIos : function() {
			var t = this;
			
			if ( false === t.userAgent )
				return false;

			if ( t.userAgent.indexOf('wp-iphone') != -1 )
				return true;

			return false;
		}
		
};;
/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function ($) {
  var inviewObjects = {}, viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, expando = $.expando;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects[data.guid + "-" + this[expando]] = { data: data, $element: $(this) };
    },

    remove: function(data) {
      try { delete inviewObjects[data.guid + "-" + this[expando]]; } catch(e) {}
    }
  };

  function getViewportSize() {
    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

    // if this is correct then return it. iPad has compat Mode, so will
    // go into check clientHeight/clientWidth (which has the wrong value).
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width:  domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
    };
  }

  function checkInView() {
    var $elements = $(), elementsLength, i = 0;

    $.each(inviewObjects, function(i, inviewObject) {
      var selector  = inviewObject.data.selector,
          $element  = inviewObject.$element;
      $elements = $elements.add(selector ? $element.find(selector) : $element);
    });

    elementsLength = $elements.length;
    if (elementsLength) {
      viewportSize   = viewportSize   || getViewportSize();
      viewportOffset = viewportOffset || getViewportOffset();

      for (; i<elementsLength; i++) {
        // Ignore elements that are not in the DOM tree
        if (!$.contains(documentElement, $elements[i])) {
          continue;
        }

        var element       = $elements[i],
            $element      = $(element),
            elementSize   = {},
            elementOffset = {},
            inView        = $element.data('inview'),
            visiblePartX,
            visiblePartY,
            visiblePartsMerged;

        // for the case where 'display:none' is used in place of 'visibility:hidden'
        // count and sum the above items to get and move closer to the correct values
        // IMPORTANT :: insert element into container empty
        if($element.css('display') == 'none')
        {
            var parentElement = $element.parent();

            elementOffset.top = parentElement.offset().top;
            elementOffset.left = parentElement.offset().left;
            elementSize.height = parentElement.height();
            elementSize.width = parentElement.width();
        } else {
       	    elementSize = { height: $element.height(), width: $element.width() }
       	    elementOffset = $element.offset();
       	}

        // Don't ask me why because I haven't figured out yet:
        // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
        // Even though it sounds weird:
        // It seems that the execution of this function is interferred by the onresize/onscroll event
        // where viewportOffset and viewportSize are unset
        if (!viewportOffset || !viewportSize) {
          return;
        }

        if (element.offsetWidth >= 0 && element.offsetHeight >= 0 && element.style.display != "none" &&
            elementOffset.top + elementSize.height > viewportOffset.top &&
            elementOffset.top < viewportOffset.top + viewportSize.height &&
            elementOffset.left + elementSize.width > viewportOffset.left &&
            elementOffset.left < viewportOffset.left + viewportSize.width) {
          visiblePartX = (viewportOffset.left > elementOffset.left ?
            'right' : (viewportOffset.left + viewportSize.width) < (elementOffset.left + elementSize.width) ?
            'left' : 'both');
          visiblePartY = (viewportOffset.top > elementOffset.top ?
            'bottom' : (viewportOffset.top + viewportSize.height) < (elementOffset.top + elementSize.height) ?
            'top' : 'both');
          visiblePartsMerged = visiblePartX + "-" + visiblePartY;
          if (!inView || inView !== visiblePartsMerged) {
            $element.data('inview', visiblePartsMerged).trigger('inview', [true, visiblePartX, visiblePartY]);
          }
        } else if (inView) {
          $element.data('inview', false).trigger('inview', [false]);
        }
      }
    }
  }

  $(w).bind("scroll resize", function() {
    viewportSize = viewportOffset = null;
  });

  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function() {
      viewportOffset = null;
    });
  }

  // Use setInterval in order to also make sure this captures elements within
  // "overflow:scroll" elements or elements that appeared in the dom tree due to
  // dom manipulation and reflow
  // old: $(window).scroll(checkInView);
  //
  // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
  // intervals while the user scrolls. Therefore the inview event might fire a bit late there
  setInterval(checkInView, 250);
})(jQuery);;
/* global Jetpack */
/**
 * Resizeable Iframes.
 *
 * Start listening to resize postMessage events for selected iframes:
 * $( selector ).Jetpack( 'resizeable' );
 * - OR -
 * Jetpack.resizeable( 'on', context );
 *
 * Resize selected iframes:
 * $( selector ).Jetpack( 'resizeable', 'resize', { width: 100, height: 200 } );
 * - OR -
 * Jetpack.resizeable( 'resize', { width: 100, height: 200 }, context );
 *
 * Stop listening to resize postMessage events for selected iframes:
 * $( selector ).Jetpack( 'resizeable', 'off' );
 * - OR -
 * Jetpack.resizeable( 'off', context );
 *
 * Stop listening to all resize postMessage events:
 * Jetpack.resizeable( 'off' );
 */
(function($) {
	var listening     = false, // Are we listening for resize postMessage events
		sourceOrigins = [],    // What origins are allowed to send resize postMessage events
		$sources      = false, // What iframe elements are we tracking resize postMessage events from

		URLtoOrigin,     // Utility to convert URLs into origins
		setupListener,   // Binds global resize postMessage event handler
		destroyListener, // Unbinds global resize postMessage event handler

		methods; // Jetpack.resizeable methods

	// Setup the Jetpack global
	if ( 'undefined' === typeof window.Jetpack ) {
		window.Jetpack = {
			/**
			 * Handles the two different calling methods:
			 * $( selector ).Jetpack( 'namespace', 'method', context ) // here, context is optional and is used to filter the collection
			 * - vs. -
			 * Jetpack.namespace( 'method', context ) // here context defines the collection
			 *
			 * @internal
			 *
			 * Call as: Jetpack.getTarget.call( this, context )
			 *
			 * @param string context: jQuery selector
			 * @return jQuery|undefined object on which to perform operations or undefined when context cannot be determined
			 */
			getTarget: function( context ) {
				if ( this instanceof jQuery ) {
					return context ? this.filter( context ) : this;
				}

				return context ? $( context ) : context;
			}
		};
	}

	// Setup the Jetpack jQuery method
	if ( 'undefined' === typeof $.fn.Jetpack ) {
		/**
		 * Dispatches calls to the correct namespace
		 *
		 * @param string namespace
		 * @param ...
		 * @return mixed|jQuery (chainable)
		 */
		$.fn.Jetpack = function( namespace ) {
			if ( 'function' === typeof Jetpack[namespace] ) {
				// Send the call to the correct Jetpack.namespace
				return Jetpack[namespace].apply( this, Array.prototype.slice.call( arguments, 1 ) );
			} else {
				$.error( 'Namespace "' + namespace + '" does not exist on jQuery.Jetpack' );
			}
		};
	}

	// Define Jetpack.resizeable() namespace to just always bail if no postMessage
	if ( 'function' !== typeof window.postMessage ) {
		$.extend( window.Jetpack, {
			/**
			 * Defines the Jetpack.resizeable() namespace.
			 * See below for non-trivial definition for browsers with postMessage.
			 */
			resizeable: function() {
				$.error( 'Browser does not support window.postMessage' );
			}
		} );

		return;
	}

	/**
	 * Utility to convert URLs into origins
	 *
	 * http://example.com:port/path?query#fragment -> http://example.com:port
	 *
	 * @param string URL
	 * @return string origin
	 */
	URLtoOrigin = function( URL ) {
		if ( ! URL.match( /^https?:\/\// ) ) {
			URL = document.location.href;
		}
		return URL.split( '/' ).slice( 0, 3 ).join( '/' );
	};

	/**
	 * Binds global resize postMessage event handler
	 */
	setupListener = function() {
		listening = true;

		$( window ).on( 'message.JetpackResizeableIframe', function( e ) {
			var event = e.originalEvent,
				data;

			// Ensure origin is allowed
			if ( -1 === $.inArray( event.origin, sourceOrigins ) ) {
				return;
			}

			// Some browsers send structured data, some send JSON strings
			if ( 'object' === typeof event.data ) {
				data = event.data.data;
			} else {
				try {
					data = JSON.parse( event.data );
				} catch ( err ) {
					data = false;
				}
			}

			if ( !data.data ) {
				return;
			}

			// Un-nest
			data = data.data;

			// Is it a resize event?
			if ( 'undefined' === typeof data.action || 'resize' !== data.action ) {
				return;
			}

			// Find the correct iframe and resize it
			$sources.filter( function() {
				if ( 'undefined' !== typeof data.name ) {
					return this.name === data.name;
				} else {
					return event.source === this.contentWindow;
				}
			} ).first().Jetpack( 'resizeable', 'resize', data );
		} );
	};

	/**
	 * Unbinds global resize postMessage event handler
	 */
	destroyListener = function() {
		listening = false;
		$( window ).off( 'message.JetpackResizeableIframe' );

		sourceOrigins = [];
		$( '.jetpack-resizeable' ).removeClass( 'jetpack-resizeable' );
		$sources = false;
	};

	// Methods for Jetpack.resizeable() namespace
	methods = {
		/**
		 * Start listening for resize postMessage events on the given iframes
		 *
		 * Call statically as: Jetpack.resizeable( 'on', context )
		 * Call as: $( selector ).Jetpack( 'resizeable', 'on', context ) // context optional: used to filter the collectino
		 *
		 * @param string context jQuery selector.
		 * @return jQuery (chainable)
		 */
		on: function( context ) {
			var target = Jetpack.getTarget.call( this, context );

			if ( ! listening ) {
				setupListener();
			}

			target.each( function() {
				sourceOrigins.push( URLtoOrigin( $( this ).attr( 'src' ) ) );
			} ).addClass( 'jetpack-resizeable' );

			$sources = $( '.jetpack-resizeable' );

			return target;
		},

		/**
		 * Stop listening for resize postMessage events on the given iframes
		 *
		 * Call statically as: Jetpack.resizeable( 'off', context )
		 * Call as: $( selector ).Jetpack( 'resizeable', 'off', context ) // context optional: used to filter the collectino
		 *
		 * @param string context jQuery selector
		 * @return jQuery (chainable)
		 */
		off: function( context ) {
			var target = Jetpack.getTarget.call( this, context );

			if ( 'undefined' === typeof target ) {
				destroyListener();

				return target;
			}

			target.each( function() {
				var origin = URLtoOrigin( $( this ).attr( 'src' ) ),
					pos = $.inArray( origin, sourceOrigins );

				if ( -1 !== pos ) {
					sourceOrigins.splice( pos, 1 );
				}
			} ).removeClass( 'jetpack-resizeable' );

			$sources = $( '.jetpack-resizeable' );

			return target;
		},

		/**
		 * Resize the given iframes
		 *
		 * Call statically as: Jetpack.resizeable( 'resize', dimensions, context )
		 * Call as: $( selector ).Jetpack( 'resizeable', 'resize', dimensions, context ) // context optional: used to filter the collectino
		 *
		 * @param object dimensions in pixels: { width: (int), height: (int) }
		 * @param string context jQuery selector
		 * @return jQuery (chainable)
		 */
		resize: function( dimensions, context ) {
			var target = Jetpack.getTarget.call( this, context );

			$.each( [ 'width', 'height' ], function( i, variable ) {
				var value = 0,
					container;
				if ( 'undefined' !== typeof dimensions[variable] ) {
					value = parseInt( dimensions[variable], 10 );
				}

				if ( 0 !== value ) {
					target[variable]( value );
					container = target.parent();
					if ( container.hasClass( 'slim-likes-widget' ) ) {
						container[variable]( value );
					}
				}
			} );

			return target;
		}
	};

	// Define Jetpack.resizeable() namespace
	$.extend( window.Jetpack, {
		/**
		 * Defines the Jetpack.resizeable() namespace.
		 * See above for trivial definition for browsers with no postMessage.
		 *
		 * @param string method
		 * @param ...
		 * @return mixed|jQuery (chainable)
		 */
		resizeable: function( method ) {
			if ( methods[method] ) {
				// Send the call to the correct Jetpack.resizeable() method
				return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
			} else if ( ! method ) {
				// By default, send to Jetpack.resizeable( 'on' ), which isn't useful in that form but is when called as
				// jQuery( selector ).Jetpack( 'resizeable' )
				return methods.on.apply( this );
			} else {
				$.error( 'Method ' +  method + ' does not exist on Jetpack.resizeable' );
			}
		}
	} );
})(jQuery);
;
//fgnass.github.com/spin.js#v1.3

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    if(s[prop] !== undefined) return prop
    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    if (typeof this == 'undefined') return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))

        ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: o.color, opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));
;
/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

/*

Basic Usage:
============

$('#el').spin(); // Creates a default Spinner using the text color of #el.
$('#el').spin({ ... }); // Creates a Spinner using the provided options.

$('#el').spin(false); // Stops and removes the spinner.

Using Presets:
==============

$('#el').spin('small'); // Creates a 'small' Spinner using the text color of #el.
$('#el').spin('large', '#fff'); // Creates a 'large' white Spinner.

Adding a custom preset:
=======================

$.fn.spin.presets.flower = {
  lines: 9
  length: 10
  width: 20
  radius: 0
}

$('#el').spin('flower', 'red');

*/

(function(factory) {

  if (typeof exports == 'object') {
    // CommonJS
    factory(require('jquery'), require('spin'))
  }
  else if (typeof define == 'function' && define.amd) {
    // AMD, register as anonymous module
    define(['jquery', 'spin'], factory)
  }
  else {
    // Browser globals
    if (!window.Spinner) throw new Error('Spin.js not present')
    factory(window.jQuery, window.Spinner)
  }

}(function($, Spinner) {

  $.fn.spin = function(opts, color) {

    return this.each(function() {
      var $this = $(this),
        data = $this.data();

      if (data.spinner) {
        data.spinner.stop();
        delete data.spinner;
      }
      if (opts !== false) {
        opts = $.extend(
          { color: color || $this.css('color') },
          $.fn.spin.presets[opts] || opts
        )
        // Begin WordPress Additions
        // To use opts.right, you need to have specified a length, width, and radius.
        if ( typeof opts.right !== 'undefined' && typeof opts.length !== 'undefined'
          && typeof opts.width !== 'undefined' && typeof opts.radius !== 'undefined' ) {
          var pad = $this.css( 'padding-left' );
          pad = ( typeof pad === 'undefined' ) ? 0 : parseInt( pad, 10 );
          opts.left = $this.outerWidth() - ( 2 * ( opts.length + opts.width + opts.radius ) ) - pad - opts.right;
          delete opts.right;
        }
        // End WordPress Additions
        data.spinner = new Spinner(opts).spin(this)
      }
    })
  }

  $.fn.spin.presets = {
    tiny: { lines: 8, length: 2, width: 2, radius: 3 },
    small: { lines: 8, length: 4, width: 3, radius: 5 },
    large: { lines: 10, length: 8, width: 4, radius: 8 }
  }

}));

// Jetpack Presets Overrides:
(function($){
	$.fn.spin.presets.wp = { trail: 60, speed: 1.3 };
	$.fn.spin.presets.small  = $.extend( { lines:  8, length: 2, width: 2, radius: 3 }, $.fn.spin.presets.wp );
	$.fn.spin.presets.medium = $.extend( { lines:  8, length: 4, width: 3, radius: 5 }, $.fn.spin.presets.wp );
	$.fn.spin.presets.large  = $.extend( { lines: 10, length: 6, width: 4, radius: 7 }, $.fn.spin.presets.wp );
	$.fn.spin.presets['small-left']   = $.extend( { left:  5 }, $.fn.spin.presets.small );
	$.fn.spin.presets['small-right']  = $.extend( { right: 5 }, $.fn.spin.presets.small );
	$.fn.spin.presets['medium-left']  = $.extend( { left:  5 }, $.fn.spin.presets.medium );
	$.fn.spin.presets['medium-right'] = $.extend( { right: 5 }, $.fn.spin.presets.medium );
	$.fn.spin.presets['large-left']   = $.extend( { left:  5 }, $.fn.spin.presets.large );
	$.fn.spin.presets['large-right']  = $.extend( { right: 5 }, $.fn.spin.presets.large );
})(jQuery);
;
(function(){var a=this,b=a._,c={},d=Array.prototype,e=Object.prototype,f=Function.prototype,g=d.push,h=d.slice,i=d.concat,j=e.toString,k=e.hasOwnProperty,l=d.forEach,m=d.map,n=d.reduce,o=d.reduceRight,p=d.filter,q=d.every,r=d.some,s=d.indexOf,t=d.lastIndexOf,u=Array.isArray,v=Object.keys,w=f.bind,x=function(a){return a instanceof x?a:this instanceof x?void(this._wrapped=a):new x(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=x),exports._=x):a._=x,x.VERSION="1.6.0";var y=x.each=x.forEach=function(a,b,d){if(null==a)return a;if(l&&a.forEach===l)a.forEach(b,d);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(b.call(d,a[e],e,a)===c)return}else for(var g=x.keys(a),e=0,f=g.length;f>e;e++)if(b.call(d,a[g[e]],g[e],a)===c)return;return a};x.map=x.collect=function(a,b,c){var d=[];return null==a?d:m&&a.map===m?a.map(b,c):(y(a,function(a,e,f){d.push(b.call(c,a,e,f))}),d)};var z="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),n&&a.reduce===n)return d&&(b=x.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(y(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError(z);return c},x.reduceRight=x.foldr=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),o&&a.reduceRight===o)return d&&(b=x.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=a.length;if(f!==+f){var g=x.keys(a);f=g.length}if(y(a,function(h,i,j){i=g?g[--f]:--f,e?c=b.call(d,c,a[i],i,j):(c=a[i],e=!0)}),!e)throw new TypeError(z);return c},x.find=x.detect=function(a,b,c){var d;return A(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},x.filter=x.select=function(a,b,c){var d=[];return null==a?d:p&&a.filter===p?a.filter(b,c):(y(a,function(a,e,f){b.call(c,a,e,f)&&d.push(a)}),d)},x.reject=function(a,b,c){return x.filter(a,function(a,d,e){return!b.call(c,a,d,e)},c)},x.every=x.all=function(a,b,d){b||(b=x.identity);var e=!0;return null==a?e:q&&a.every===q?a.every(b,d):(y(a,function(a,f,g){return(e=e&&b.call(d,a,f,g))?void 0:c}),!!e)};var A=x.some=x.any=function(a,b,d){b||(b=x.identity);var e=!1;return null==a?e:r&&a.some===r?a.some(b,d):(y(a,function(a,f,g){return e||(e=b.call(d,a,f,g))?c:void 0}),!!e)};x.contains=x.include=function(a,b){return null==a?!1:s&&a.indexOf===s?-1!=a.indexOf(b):A(a,function(a){return a===b})},x.invoke=function(a,b){var c=h.call(arguments,2),d=x.isFunction(b);return x.map(a,function(a){return(d?b:a[b]).apply(a,c)})},x.pluck=function(a,b){return x.map(a,x.property(b))},x.where=function(a,b){return x.filter(a,x.matches(b))},x.findWhere=function(a,b){return x.find(a,x.matches(b))},x.max=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);var d=-1/0,e=-1/0;return y(a,function(a,f,g){var h=b?b.call(c,a,f,g):a;h>e&&(d=a,e=h)}),d},x.min=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);var d=1/0,e=1/0;return y(a,function(a,f,g){var h=b?b.call(c,a,f,g):a;e>h&&(d=a,e=h)}),d},x.shuffle=function(a){var b,c=0,d=[];return y(a,function(a){b=x.random(c++),d[c-1]=d[b],d[b]=a}),d},x.sample=function(a,b,c){return null==b||c?(a.length!==+a.length&&(a=x.values(a)),a[x.random(a.length-1)]):x.shuffle(a).slice(0,Math.max(0,b))};var B=function(a){return null==a?x.identity:x.isFunction(a)?a:x.property(a)};x.sortBy=function(a,b,c){return b=B(b),x.pluck(x.map(a,function(a,d,e){return{value:a,index:d,criteria:b.call(c,a,d,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index-b.index}),"value")};var C=function(a){return function(b,c,d){var e={};return c=B(c),y(b,function(f,g){var h=c.call(d,f,g,b);a(e,h,f)}),e}};x.groupBy=C(function(a,b,c){x.has(a,b)?a[b].push(c):a[b]=[c]}),x.indexBy=C(function(a,b,c){a[b]=c}),x.countBy=C(function(a,b){x.has(a,b)?a[b]++:a[b]=1}),x.sortedIndex=function(a,b,c,d){c=B(c);for(var e=c.call(d,b),f=0,g=a.length;g>f;){var h=f+g>>>1;c.call(d,a[h])<e?f=h+1:g=h}return f},x.toArray=function(a){return a?x.isArray(a)?h.call(a):a.length===+a.length?x.map(a,x.identity):x.values(a):[]},x.size=function(a){return null==a?0:a.length===+a.length?a.length:x.keys(a).length},x.first=x.head=x.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:0>b?[]:h.call(a,0,b)},x.initial=function(a,b,c){return h.call(a,0,a.length-(null==b||c?1:b))},x.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:h.call(a,Math.max(a.length-b,0))},x.rest=x.tail=x.drop=function(a,b,c){return h.call(a,null==b||c?1:b)},x.compact=function(a){return x.filter(a,x.identity)};var D=function(a,b,c){return b&&x.every(a,x.isArray)?i.apply(c,a):(y(a,function(a){x.isArray(a)||x.isArguments(a)?b?g.apply(c,a):D(a,b,c):c.push(a)}),c)};x.flatten=function(a,b){return D(a,b,[])},x.without=function(a){return x.difference(a,h.call(arguments,1))},x.partition=function(a,b){var c=[],d=[];return y(a,function(a){(b(a)?c:d).push(a)}),[c,d]},x.uniq=x.unique=function(a,b,c,d){x.isFunction(b)&&(d=c,c=b,b=!1);var e=c?x.map(a,c,d):a,f=[],g=[];return y(e,function(c,d){(b?d&&g[g.length-1]===c:x.contains(g,c))||(g.push(c),f.push(a[d]))}),f},x.union=function(){return x.uniq(x.flatten(arguments,!0))},x.intersection=function(a){var b=h.call(arguments,1);return x.filter(x.uniq(a),function(a){return x.every(b,function(b){return x.contains(b,a)})})},x.difference=function(a){var b=i.apply(d,h.call(arguments,1));return x.filter(a,function(a){return!x.contains(b,a)})},x.zip=function(){for(var a=x.max(x.pluck(arguments,"length").concat(0)),b=new Array(a),c=0;a>c;c++)b[c]=x.pluck(arguments,""+c);return b},x.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},x.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=x.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(s&&a.indexOf===s)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1},x.lastIndexOf=function(a,b,c){if(null==a)return-1;var d=null!=c;if(t&&a.lastIndexOf===t)return d?a.lastIndexOf(b,c):a.lastIndexOf(b);for(var e=d?c:a.length;e--;)if(a[e]===b)return e;return-1},x.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);d>e;)f[e++]=a,a+=c;return f};var E=function(){};x.bind=function(a,b){var c,d;if(w&&a.bind===w)return w.apply(a,h.call(arguments,1));if(!x.isFunction(a))throw new TypeError;return c=h.call(arguments,2),d=function(){if(!(this instanceof d))return a.apply(b,c.concat(h.call(arguments)));E.prototype=a.prototype;var e=new E;E.prototype=null;var f=a.apply(e,c.concat(h.call(arguments)));return Object(f)===f?f:e}},x.partial=function(a){var b=h.call(arguments,1);return function(){for(var c=0,d=b.slice(),e=0,f=d.length;f>e;e++)d[e]===x&&(d[e]=arguments[c++]);for(;c<arguments.length;)d.push(arguments[c++]);return a.apply(this,d)}},x.bindAll=function(a){var b=h.call(arguments,1);if(0===b.length)throw new Error("bindAll must be passed function names");return y(b,function(b){a[b]=x.bind(a[b],a)}),a},x.memoize=function(a,b){var c={};return b||(b=x.identity),function(){var d=b.apply(this,arguments);return x.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},x.delay=function(a,b){var c=h.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},x.defer=function(a){return x.delay.apply(x,[a,1].concat(h.call(arguments,1)))},x.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:x.now(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=x.now();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}},x.debounce=function(a,b,c){var d,e,f,g,h,i=function(){var j=x.now()-g;b>j?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e),f=e=null))};return function(){f=this,e=arguments,g=x.now();var j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e),f=e=null),h}},x.once=function(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),a=null,b)}},x.wrap=function(a,b){return x.partial(b,a)},x.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},x.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},x.keys=function(a){if(!x.isObject(a))return[];if(v)return v(a);var b=[];for(var c in a)x.has(a,c)&&b.push(c);return b},x.values=function(a){for(var b=x.keys(a),c=b.length,d=new Array(c),e=0;c>e;e++)d[e]=a[b[e]];return d},x.pairs=function(a){for(var b=x.keys(a),c=b.length,d=new Array(c),e=0;c>e;e++)d[e]=[b[e],a[b[e]]];return d},x.invert=function(a){for(var b={},c=x.keys(a),d=0,e=c.length;e>d;d++)b[a[c[d]]]=c[d];return b},x.functions=x.methods=function(a){var b=[];for(var c in a)x.isFunction(a[c])&&b.push(c);return b.sort()},x.extend=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},x.pick=function(a){var b={},c=i.apply(d,h.call(arguments,1));return y(c,function(c){c in a&&(b[c]=a[c])}),b},x.omit=function(a){var b={},c=i.apply(d,h.call(arguments,1));for(var e in a)x.contains(c,e)||(b[e]=a[e]);return b},x.defaults=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)void 0===a[c]&&(a[c]=b[c])}),a},x.clone=function(a){return x.isObject(a)?x.isArray(a)?a.slice():x.extend({},a):a},x.tap=function(a,b){return b(a),a};var F=function(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return a===b;a instanceof x&&(a=a._wrapped),b instanceof x&&(b=b._wrapped);var e=j.call(a);if(e!=j.call(b))return!1;switch(e){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]==a)return d[f]==b;var g=a.constructor,h=b.constructor;if(g!==h&&!(x.isFunction(g)&&g instanceof g&&x.isFunction(h)&&h instanceof h)&&"constructor"in a&&"constructor"in b)return!1;c.push(a),d.push(b);var i=0,k=!0;if("[object Array]"==e){if(i=a.length,k=i==b.length)for(;i--&&(k=F(a[i],b[i],c,d)););}else{for(var l in a)if(x.has(a,l)&&(i++,!(k=x.has(b,l)&&F(a[l],b[l],c,d))))break;if(k){for(l in b)if(x.has(b,l)&&!i--)break;k=!i}}return c.pop(),d.pop(),k};x.isEqual=function(a,b){return F(a,b,[],[])},x.isEmpty=function(a){if(null==a)return!0;if(x.isArray(a)||x.isString(a))return 0===a.length;for(var b in a)if(x.has(a,b))return!1;return!0},x.isElement=function(a){return!(!a||1!==a.nodeType)},x.isArray=u||function(a){return"[object Array]"==j.call(a)},x.isObject=function(a){return a===Object(a)},y(["Arguments","Function","String","Number","Date","RegExp"],function(a){x["is"+a]=function(b){return j.call(b)=="[object "+a+"]"}}),x.isArguments(arguments)||(x.isArguments=function(a){return!(!a||!x.has(a,"callee"))}),"function"!=typeof/./&&(x.isFunction=function(a){return"function"==typeof a}),x.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},x.isNaN=function(a){return x.isNumber(a)&&a!=+a},x.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==j.call(a)},x.isNull=function(a){return null===a},x.isUndefined=function(a){return void 0===a},x.has=function(a,b){return k.call(a,b)},x.noConflict=function(){return a._=b,this},x.identity=function(a){return a},x.constant=function(a){return function(){return a}},x.property=function(a){return function(b){return b[a]}},x.matches=function(a){return function(b){if(b===a)return!0;for(var c in a)if(a[c]!==b[c])return!1;return!0}},x.times=function(a,b,c){for(var d=Array(Math.max(0,a)),e=0;a>e;e++)d[e]=b.call(c,e);return d},x.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))},x.now=Date.now||function(){return(new Date).getTime()};var G={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};G.unescape=x.invert(G.escape);var H={escape:new RegExp("["+x.keys(G.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(G.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(a){x[a]=function(b){return null==b?"":(""+b).replace(H[a],function(b){return G[a][b]})}}),x.result=function(a,b){if(null==a)return void 0;var c=a[b];return x.isFunction(c)?c.call(a):c},x.mixin=function(a){y(x.functions(a),function(b){var c=x[b]=a[b];x.prototype[b]=function(){var a=[this._wrapped];return g.apply(a,arguments),M.call(this,c.apply(x,a))}})};var I=0;x.uniqueId=function(a){var b=++I+"";return a?a+b:b},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,K={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},L=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(a,b,c){var d;c=x.defaults({},c,x.templateSettings);var e=new RegExp([(c.escape||J).source,(c.interpolate||J).source,(c.evaluate||J).source].join("|")+"|$","g"),f=0,g="__p+='";a.replace(e,function(b,c,d,e,h){return g+=a.slice(f,h).replace(L,function(a){return"\\"+K[a]}),c&&(g+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(g+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),e&&(g+="';\n"+e+"\n__p+='"),f=h+b.length,b}),g+="';\n",c.variable||(g="with(obj||{}){\n"+g+"}\n"),g="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+g+"return __p;\n";try{d=new Function(c.variable||"obj","_",g)}catch(h){throw h.source=g,h}if(b)return d(b,x);var i=function(a){return d.call(this,a,x)};return i.source="function("+(c.variable||"obj")+"){\n"+g+"}",i},x.chain=function(a){return x(a).chain()};var M=function(a){return this._chain?x(a).chain():a};x.mixin(x),y(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];x.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!=a&&"splice"!=a||0!==c.length||delete c[0],M.call(this,c)}}),y(["concat","join","slice"],function(a){var b=d[a];x.prototype[a]=function(){return M.call(this,b.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return x})}).call(this);;
!function(a,b){if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(c,d,e){a.Backbone=b(a,e,c,d)});else if("undefined"!=typeof exports){var c=require("underscore");b(a,exports,c)}else a.Backbone=b(a,{},a._,a.jQuery||a.Zepto||a.ender||a.$)}(this,function(a,b,c,d){{var e=a.Backbone,f=[],g=(f.push,f.slice);f.splice}b.VERSION="1.1.2",b.$=d,b.noConflict=function(){return a.Backbone=e,this},b.emulateHTTP=!1,b.emulateJSON=!1;var h=b.Events={on:function(a,b,c){if(!j(this,"on",a,[b,c])||!b)return this;this._events||(this._events={});var d=this._events[a]||(this._events[a]=[]);return d.push({callback:b,context:c,ctx:c||this}),this},once:function(a,b,d){if(!j(this,"once",a,[b,d])||!b)return this;var e=this,f=c.once(function(){e.off(a,f),b.apply(this,arguments)});return f._callback=b,this.on(a,f,d)},off:function(a,b,d){var e,f,g,h,i,k,l,m;if(!this._events||!j(this,"off",a,[b,d]))return this;if(!a&&!b&&!d)return this._events=void 0,this;for(h=a?[a]:c.keys(this._events),i=0,k=h.length;k>i;i++)if(a=h[i],g=this._events[a]){if(this._events[a]=e=[],b||d)for(l=0,m=g.length;m>l;l++)f=g[l],(b&&b!==f.callback&&b!==f.callback._callback||d&&d!==f.context)&&e.push(f);e.length||delete this._events[a]}return this},trigger:function(a){if(!this._events)return this;var b=g.call(arguments,1);if(!j(this,"trigger",a,b))return this;var c=this._events[a],d=this._events.all;return c&&k(c,b),d&&k(d,arguments),this},stopListening:function(a,b,d){var e=this._listeningTo;if(!e)return this;var f=!b&&!d;d||"object"!=typeof b||(d=this),a&&((e={})[a._listenId]=a);for(var g in e)a=e[g],a.off(b,d,this),(f||c.isEmpty(a._events))&&delete this._listeningTo[g];return this}},i=/\s+/,j=function(a,b,c,d){if(!c)return!0;if("object"==typeof c){for(var e in c)a[b].apply(a,[e,c[e]].concat(d));return!1}if(i.test(c)){for(var f=c.split(i),g=0,h=f.length;h>g;g++)a[b].apply(a,[f[g]].concat(d));return!1}return!0},k=function(a,b){var c,d=-1,e=a.length,f=b[0],g=b[1],h=b[2];switch(b.length){case 0:for(;++d<e;)(c=a[d]).callback.call(c.ctx);return;case 1:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f);return;case 2:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g);return;case 3:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g,h);return;default:for(;++d<e;)(c=a[d]).callback.apply(c.ctx,b);return}},l={listenTo:"on",listenToOnce:"once"};c.each(l,function(a,b){h[b]=function(b,d,e){var f=this._listeningTo||(this._listeningTo={}),g=b._listenId||(b._listenId=c.uniqueId("l"));return f[g]=b,e||"object"!=typeof d||(e=this),b[a](d,e,this),this}}),h.bind=h.on,h.unbind=h.off,c.extend(b,h);var m=b.Model=function(a,b){var d=a||{};b||(b={}),this.cid=c.uniqueId("c"),this.attributes={},b.collection&&(this.collection=b.collection),b.parse&&(d=this.parse(d,b)||{}),d=c.defaults({},d,c.result(this,"defaults")),this.set(d,b),this.changed={},this.initialize.apply(this,arguments)};c.extend(m.prototype,h,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return c.clone(this.attributes)},sync:function(){return b.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return c.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,d){var e,f,g,h,i,j,k,l;if(null==a)return this;if("object"==typeof a?(f=a,d=b):(f={})[a]=b,d||(d={}),!this._validate(f,d))return!1;g=d.unset,i=d.silent,h=[],j=this._changing,this._changing=!0,j||(this._previousAttributes=c.clone(this.attributes),this.changed={}),l=this.attributes,k=this._previousAttributes,this.idAttribute in f&&(this.id=f[this.idAttribute]);for(e in f)b=f[e],c.isEqual(l[e],b)||h.push(e),c.isEqual(k[e],b)?delete this.changed[e]:this.changed[e]=b,g?delete l[e]:l[e]=b;if(!i){h.length&&(this._pending=d);for(var m=0,n=h.length;n>m;m++)this.trigger("change:"+h[m],this,l[h[m]],d)}if(j)return this;if(!i)for(;this._pending;)d=this._pending,this._pending=!1,this.trigger("change",this,d);return this._pending=!1,this._changing=!1,this},unset:function(a,b){return this.set(a,void 0,c.extend({},b,{unset:!0}))},clear:function(a){var b={};for(var d in this.attributes)b[d]=void 0;return this.set(b,c.extend({},a,{unset:!0}))},hasChanged:function(a){return null==a?!c.isEmpty(this.changed):c.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?c.clone(this.changed):!1;var b,d=!1,e=this._changing?this._previousAttributes:this.attributes;for(var f in a)c.isEqual(e[f],b=a[f])||((d||(d={}))[f]=b);return d},previous:function(a){return null!=a&&this._previousAttributes?this._previousAttributes[a]:null},previousAttributes:function(){return c.clone(this._previousAttributes)},fetch:function(a){a=a?c.clone(a):{},void 0===a.parse&&(a.parse=!0);var b=this,d=a.success;return a.success=function(c){return b.set(b.parse(c,a),a)?(d&&d(b,c,a),void b.trigger("sync",b,c,a)):!1},L(this,a),this.sync("read",this,a)},save:function(a,b,d){var e,f,g,h=this.attributes;if(null==a||"object"==typeof a?(e=a,d=b):(e={})[a]=b,d=c.extend({validate:!0},d),e&&!d.wait){if(!this.set(e,d))return!1}else if(!this._validate(e,d))return!1;e&&d.wait&&(this.attributes=c.extend({},h,e)),void 0===d.parse&&(d.parse=!0);var i=this,j=d.success;return d.success=function(a){i.attributes=h;var b=i.parse(a,d);return d.wait&&(b=c.extend(e||{},b)),c.isObject(b)&&!i.set(b,d)?!1:(j&&j(i,a,d),void i.trigger("sync",i,a,d))},L(this,d),f=this.isNew()?"create":d.patch?"patch":"update","patch"===f&&(d.attrs=e),g=this.sync(f,this,d),e&&d.wait&&(this.attributes=h),g},destroy:function(a){a=a?c.clone(a):{};var b=this,d=a.success,e=function(){b.trigger("destroy",b,b.collection,a)};if(a.success=function(c){(a.wait||b.isNew())&&e(),d&&d(b,c,a),b.isNew()||b.trigger("sync",b,c,a)},this.isNew())return a.success(),!1;L(this,a);var f=this.sync("delete",this,a);return a.wait||e(),f},url:function(){var a=c.result(this,"urlRoot")||c.result(this.collection,"url")||K();return this.isNew()?a:a.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(a){return this._validate({},c.extend(a||{},{validate:!0}))},_validate:function(a,b){if(!b.validate||!this.validate)return!0;a=c.extend({},this.attributes,a);var d=this.validationError=this.validate(a,b)||null;return d?(this.trigger("invalid",this,d,c.extend(b,{validationError:d})),!1):!0}});var n=["keys","values","pairs","invert","pick","omit"];c.each(n,function(a){m.prototype[a]=function(){var b=g.call(arguments);return b.unshift(this.attributes),c[a].apply(c,b)}});var o=b.Collection=function(a,b){b||(b={}),b.model&&(this.model=b.model),void 0!==b.comparator&&(this.comparator=b.comparator),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,c.extend({silent:!0},b))},p={add:!0,remove:!0,merge:!0},q={add:!0,remove:!1};c.extend(o.prototype,h,{model:m,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return b.sync.apply(this,arguments)},add:function(a,b){return this.set(a,c.extend({merge:!1},b,q))},remove:function(a,b){var d=!c.isArray(a);a=d?[a]:c.clone(a),b||(b={});var e,f,g,h;for(e=0,f=a.length;f>e;e++)h=a[e]=this.get(a[e]),h&&(delete this._byId[h.id],delete this._byId[h.cid],g=this.indexOf(h),this.models.splice(g,1),this.length--,b.silent||(b.index=g,h.trigger("remove",h,this,b)),this._removeReference(h,b));return d?a[0]:a},set:function(a,b){b=c.defaults({},b,p),b.parse&&(a=this.parse(a,b));var d=!c.isArray(a);a=d?a?[a]:[]:c.clone(a);var e,f,g,h,i,j,k,l=b.at,n=this.model,o=this.comparator&&null==l&&b.sort!==!1,q=c.isString(this.comparator)?this.comparator:null,r=[],s=[],t={},u=b.add,v=b.merge,w=b.remove,x=!o&&u&&w?[]:!1;for(e=0,f=a.length;f>e;e++){if(i=a[e]||{},g=i instanceof m?h=i:i[n.prototype.idAttribute||"id"],j=this.get(g))w&&(t[j.cid]=!0),v&&(i=i===h?h.attributes:i,b.parse&&(i=j.parse(i,b)),j.set(i,b),o&&!k&&j.hasChanged(q)&&(k=!0)),a[e]=j;else if(u){if(h=a[e]=this._prepareModel(i,b),!h)continue;r.push(h),this._addReference(h,b)}h=j||h,!x||!h.isNew()&&t[h.id]||x.push(h),t[h.id]=!0}if(w){for(e=0,f=this.length;f>e;++e)t[(h=this.models[e]).cid]||s.push(h);s.length&&this.remove(s,b)}if(r.length||x&&x.length)if(o&&(k=!0),this.length+=r.length,null!=l)for(e=0,f=r.length;f>e;e++)this.models.splice(l+e,0,r[e]);else{x&&(this.models.length=0);var y=x||r;for(e=0,f=y.length;f>e;e++)this.models.push(y[e])}if(k&&this.sort({silent:!0}),!b.silent){for(e=0,f=r.length;f>e;e++)(h=r[e]).trigger("add",h,this,b);(k||x&&x.length)&&this.trigger("sort",this,b)}return d?a[0]:a},reset:function(a,b){b||(b={});for(var d=0,e=this.models.length;e>d;d++)this._removeReference(this.models[d],b);return b.previousModels=this.models,this._reset(),a=this.add(a,c.extend({silent:!0},b)),b.silent||this.trigger("reset",this,b),a},push:function(a,b){return this.add(a,c.extend({at:this.length},b))},pop:function(a){var b=this.at(this.length-1);return this.remove(b,a),b},unshift:function(a,b){return this.add(a,c.extend({at:0},b))},shift:function(a){var b=this.at(0);return this.remove(b,a),b},slice:function(){return g.apply(this.models,arguments)},get:function(a){return null==a?void 0:this._byId[a]||this._byId[a.id]||this._byId[a.cid]},at:function(a){return this.models[a]},where:function(a,b){return c.isEmpty(a)?b?void 0:[]:this[b?"find":"filter"](function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},findWhere:function(a){return this.where(a,!0)},sort:function(a){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return a||(a={}),c.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(c.bind(this.comparator,this)),a.silent||this.trigger("sort",this,a),this},pluck:function(a){return c.invoke(this.models,"get",a)},fetch:function(a){a=a?c.clone(a):{},void 0===a.parse&&(a.parse=!0);var b=a.success,d=this;return a.success=function(c){var e=a.reset?"reset":"set";d[e](c,a),b&&b(d,c,a),d.trigger("sync",d,c,a)},L(this,a),this.sync("read",this,a)},create:function(a,b){if(b=b?c.clone(b):{},!(a=this._prepareModel(a,b)))return!1;b.wait||this.add(a,b);var d=this,e=b.success;return b.success=function(a,c){b.wait&&d.add(a,b),e&&e(a,c,b)},a.save(null,b),a},parse:function(a){return a},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(a,b){if(a instanceof m)return a;b=b?c.clone(b):{},b.collection=this;var d=new this.model(a,b);return d.validationError?(this.trigger("invalid",this,d.validationError,b),!1):d},_addReference:function(a){this._byId[a.cid]=a,null!=a.id&&(this._byId[a.id]=a),a.collection||(a.collection=this),a.on("all",this._onModelEvent,this)},_removeReference:function(a){this===a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"!==a&&"remove"!==a||c===this)&&("destroy"===a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=b)),this.trigger.apply(this,arguments))}});var r=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];c.each(r,function(a){o.prototype[a]=function(){var b=g.call(arguments);return b.unshift(this.models),c[a].apply(c,b)}});var s=["groupBy","countBy","sortBy","indexBy"];c.each(s,function(a){o.prototype[a]=function(b,d){var e=c.isFunction(b)?b:function(a){return a.get(b)};return c[a](this.models,e,d)}});var t=b.View=function(a){this.cid=c.uniqueId("view"),a||(a={}),c.extend(this,c.pick(a,v)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},u=/^(\S+)\s*(.*)$/,v=["model","collection","el","id","attributes","className","tagName","events"];c.extend(t.prototype,h,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(a,c){return this.$el&&this.undelegateEvents(),this.$el=a instanceof b.$?a:b.$(a),this.el=this.$el[0],c!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(!a&&!(a=c.result(this,"events")))return this;this.undelegateEvents();for(var b in a){var d=a[b];if(c.isFunction(d)||(d=this[a[b]]),d){var e=b.match(u),f=e[1],g=e[2];d=c.bind(d,this),f+=".delegateEvents"+this.cid,""===g?this.$el.on(f,d):this.$el.on(f,g,d)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(c.result(this,"el"),!1);else{var a=c.extend({},c.result(this,"attributes"));this.id&&(a.id=c.result(this,"id")),this.className&&(a["class"]=c.result(this,"className"));var d=b.$("<"+c.result(this,"tagName")+">").attr(a);this.setElement(d,!1)}}}),b.sync=function(a,d,e){var f=x[a];c.defaults(e||(e={}),{emulateHTTP:b.emulateHTTP,emulateJSON:b.emulateJSON});var g={type:f,dataType:"json"};if(e.url||(g.url=c.result(d,"url")||K()),null!=e.data||!d||"create"!==a&&"update"!==a&&"patch"!==a||(g.contentType="application/json",g.data=JSON.stringify(e.attrs||d.toJSON(e))),e.emulateJSON&&(g.contentType="application/x-www-form-urlencoded",g.data=g.data?{model:g.data}:{}),e.emulateHTTP&&("PUT"===f||"DELETE"===f||"PATCH"===f)){g.type="POST",e.emulateJSON&&(g.data._method=f);var h=e.beforeSend;e.beforeSend=function(a){return a.setRequestHeader("X-HTTP-Method-Override",f),h?h.apply(this,arguments):void 0}}"GET"===g.type||e.emulateJSON||(g.processData=!1),"PATCH"===g.type&&w&&(g.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var i=e.xhr=b.ajax(c.extend(g,e));return d.trigger("request",d,i,e),i};var w=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),x={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};b.ajax=function(){return b.$.ajax.apply(b.$,arguments)};var y=b.Router=function(a){a||(a={}),a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},z=/\((.*?)\)/g,A=/(\(\?)?:\w+/g,B=/\*\w+/g,C=/[\-{}\[\]+?.,\\\^$|#\s]/g;c.extend(y.prototype,h,{initialize:function(){},route:function(a,d,e){c.isRegExp(a)||(a=this._routeToRegExp(a)),c.isFunction(d)&&(e=d,d=""),e||(e=this[d]);var f=this;return b.history.route(a,function(c){var g=f._extractParameters(a,c);f.execute(e,g),f.trigger.apply(f,["route:"+d].concat(g)),f.trigger("route",d,g),b.history.trigger("route",f,d,g)}),this},execute:function(a,b){a&&a.apply(this,b)},navigate:function(a,c){return b.history.navigate(a,c),this},_bindRoutes:function(){if(this.routes){this.routes=c.result(this,"routes");for(var a,b=c.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])}},_routeToRegExp:function(a){return a=a.replace(C,"\\$&").replace(z,"(?:$1)?").replace(A,function(a,b){return b?a:"([^/?]+)"}).replace(B,"([^?]*?)"),new RegExp("^"+a+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(a,b){var d=a.exec(b).slice(1);return c.map(d,function(a,b){return b===d.length-1?a||null:a?decodeURIComponent(a):null})}});var D=b.History=function(){this.handlers=[],c.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},E=/^[#\/]|\s+$/g,F=/^\/+|\/+$/g,G=/msie [\w.]+/,H=/\/$/,I=/#.*$/;D.started=!1,c.extend(D.prototype,h,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(a){var b=(a||this).location.href.match(/#(.*)$/);return b?b[1]:""},getFragment:function(a,b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){a=decodeURI(this.location.pathname+this.location.search);var c=this.root.replace(H,"");a.indexOf(c)||(a=a.slice(c.length))}else a=this.getHash();return a.replace(E,"")},start:function(a){if(D.started)throw new Error("Backbone.history has already been started");D.started=!0,this.options=c.extend({root:"/"},this.options,a),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var d=this.getFragment(),e=document.documentMode,f=G.exec(navigator.userAgent.toLowerCase())&&(!e||7>=e);if(this.root=("/"+this.root+"/").replace(F,"/"),f&&this._wantsHashChange){var g=b.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=g.hide().appendTo("body")[0].contentWindow,this.navigate(d)}this._hasPushState?b.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!f?b.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=d;var h=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&h.hash&&(this.fragment=this.getHash().replace(E,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},stop:function(){b.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),D.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();return a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe))),a===this.fragment?!1:(this.iframe&&this.navigate(a),void this.loadUrl())},loadUrl:function(a){return a=this.fragment=this.getFragment(a),c.any(this.handlers,function(b){return b.route.test(a)?(b.callback(a),!0):void 0})},navigate:function(a,b){if(!D.started)return!1;b&&b!==!0||(b={trigger:!!b});var c=this.root+(a=this.getFragment(a||""));if(a=a.replace(I,""),this.fragment!==a){if(this.fragment=a,""===a&&"/"!==c&&(c=c.slice(0,-1)),this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else{if(!this._wantsHashChange)return this.location.assign(c);this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace))}return b.trigger?this.loadUrl(a):void 0}},_updateHash:function(a,b,c){if(c){var d=a.href.replace(/(javascript:|#).*$/,"");a.replace(d+"#"+b)}else a.hash="#"+b}}),b.history=new D;var J=function(a,b){var d,e=this;d=a&&c.has(a,"constructor")?a.constructor:function(){return e.apply(this,arguments)},c.extend(d,e,b);var f=function(){this.constructor=d};return f.prototype=e.prototype,d.prototype=new f,a&&c.extend(d.prototype,a),d.__super__=e.prototype,d};m.extend=o.extend=y.extend=t.extend=D.extend=J;var K=function(){throw new Error('A "url" property or function must be specified')},L=function(a,b){var c=b.error;b.error=function(d){c&&c(a,d,b),a.trigger("error",a,d,b)}};return b});;
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-shiv-cssclasses-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);;
/*! jquery.caret 2014-09-14 */
(function(){!function(a){return"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery)}(function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l;return k="caret",b=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.setPos=function(){return this.domInputor},b.prototype.getIEPosition=function(){return this.getPosition()},b.prototype.getPosition=function(){var a,b;return b=this.getOffset(),a=this.$inputor.offset(),b.left-=a.left,b.top-=a.top,b},b.prototype.getOldIEPos=function(){var a,b;return b=h.selection.createRange(),a=h.body.createTextRange(),a.moveToElementText(this.domInputor),a.setEndPoint("EndToEnd",b),a.text.length},b.prototype.getPos=function(){var a,b,c;return(c=this.range())?(a=c.cloneRange(),a.selectNodeContents(this.domInputor),a.setEnd(c.endContainer,c.endOffset),b=a.toString().length,a.detach(),b):h.selection?this.getOldIEPos():void 0},b.prototype.getOldIEOffset=function(){var a,b;return a=h.selection.createRange().duplicate(),a.moveStart("character",-1),b=a.getBoundingClientRect(),{height:b.bottom-b.top,left:b.left,top:b.top}},b.prototype.getOffset=function(){var b,c,d,e;if(j.getSelection&&(d=this.range())){if(d.endOffset-1<0)return null;b=d.cloneRange(),b.setStart(d.endContainer,d.endOffset-1),b.setEnd(d.endContainer,d.endOffset),e=b.getBoundingClientRect(),c={height:e.height,left:e.left+e.width,top:e.top},b.detach()}else h.selection&&(c=this.getOldIEOffset());return c&&(c.top+=a(j).scrollTop(),c.left+=a(j).scrollLeft()),c},b.prototype.range=function(){var a;if(j.getSelection)return a=j.getSelection(),a.rangeCount>0?a.getRangeAt(0):null},b}(),c=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.getIEPos=function(){var a,b,c,d,e,f,g;return b=this.domInputor,f=h.selection.createRange(),e=0,f&&f.parentElement()===b&&(d=b.value.replace(/\r\n/g,"\n"),c=d.length,g=b.createTextRange(),g.moveToBookmark(f.getBookmark()),a=b.createTextRange(),a.collapse(!1),e=g.compareEndPoints("StartToEnd",a)>-1?c:-g.moveStart("character",-c)),e},b.prototype.getPos=function(){return h.selection?this.getIEPos():this.domInputor.selectionStart},b.prototype.setPos=function(a){var b,c;return b=this.domInputor,h.selection?(c=b.createTextRange(),c.move("character",a),c.select()):b.setSelectionRange&&b.setSelectionRange(a,a),b},b.prototype.getIEOffset=function(a){var b,c,d,e;return c=this.domInputor.createTextRange(),a||(a=this.getPos()),c.move("character",a),d=c.boundingLeft,e=c.boundingTop,b=c.boundingHeight,{left:d,top:e,height:b}},b.prototype.getOffset=function(b){var c,d,e;return c=this.$inputor,h.selection?(d=this.getIEOffset(b),d.top+=a(j).scrollTop()+c.scrollTop(),d.left+=a(j).scrollLeft()+c.scrollLeft(),d):(d=c.offset(),e=this.getPosition(b),d={left:d.left+e.left-c.scrollLeft(),top:d.top+e.top-c.scrollTop(),height:e.height})},b.prototype.getPosition=function(b){var c,e,f,g,h,i,j;return c=this.$inputor,g=function(b){return a("<div></div>").text(b).html()},void 0===b&&(b=this.getPos()),j=c.val().slice(0,b),f=c.val().slice(b),h="<span style='position: relative; display: inline;'>"+g(j)+"</span>",h+="<span id='caret' style='position: relative; display: inline;'>|</span>",h+="<span style='position: relative; display: inline;'>"+g(f)+"</span>",i=new d(c),e=i.create(h).rect()},b.prototype.getIEPosition=function(a){var b,c,d,e,f;return d=this.getIEOffset(a),c=this.$inputor.offset(),e=d.left-c.left,f=d.top-c.top,b=d.height,{left:e,top:f,height:b}},b}(),d=function(){function b(a){this.$inputor=a}return b.prototype.css_attr=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle","borderTopWidth","boxSizing","fontFamily","fontSize","fontWeight","height","letterSpacing","lineHeight","marginBottom","marginLeft","marginRight","marginTop","outlineWidth","overflow","overflowX","overflowY","paddingBottom","paddingLeft","paddingRight","paddingTop","textAlign","textOverflow","textTransform","whiteSpace","wordBreak","wordWrap"],b.prototype.mirrorCss=function(){var b,c=this;return b={position:"absolute",left:-9999,top:0,zIndex:-2e4},"TEXTAREA"===this.$inputor.prop("tagName")&&this.css_attr.push("width"),a.each(this.css_attr,function(a,d){return b[d]=c.$inputor.css(d)}),b},b.prototype.create=function(b){return this.$mirror=a("<div></div>"),this.$mirror.css(this.mirrorCss()),this.$mirror.html(b),this.$inputor.after(this.$mirror),this},b.prototype.rect=function(){var a,b,c;return a=this.$mirror.find("#caret"),b=a.position(),c={left:b.left,top:b.top,height:a.height()},this.$mirror.remove(),c},b}(),e={contentEditable:function(a){return!(!a[0].contentEditable||"true"!==a[0].contentEditable)}},g={pos:function(a){return a||0===a?this.setPos(a):this.getPos()},position:function(a){return h.selection?this.getIEPosition(a):this.getPosition(a)},offset:function(a){var b;return b=this.getOffset(a)}},h=null,j=null,i=null,l=function(a){var b;return(b=null!=a?a.iframe:void 0)?(i=b,j=b.contentWindow,h=b.contentDocument||j.document):(i=void 0,j=window,h=document)},f=function(a){var b;h=a[0].ownerDocument,j=h.defaultView||h.parentWindow;try{return i=j.frameElement}catch(c){b=c}},a.fn.caret=function(d,f,h){var i;return g[d]?(a.isPlainObject(f)?(l(f),f=void 0):l(h),i=e.contentEditable(this)?new b(this):new c(this),g[d].apply(i,[f])):a.error("Method "+d+" does not exist on jQuery.caret")},a.fn.caret.EditableCaret=b,a.fn.caret.InputCaret=c,a.fn.caret.Utils=e,a.fn.caret.apis=g})}).call(this);;(function(){!function(a){return"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery)}(function(a){var b,c,d,e,f,g,h,i=[].slice;c=function(){function b(b){this.current_flag=null,this.controllers={},this.alias_maps={},this.$inputor=a(b),this.setIframe(),this.listen()}return b.prototype.createContainer=function(b){return 0===(this.$el=a("#atwho-container",b)).length?a(b.body).append(this.$el=a("<div id='atwho-container'></div>")):void 0},b.prototype.setIframe=function(a,b){var c;return null==b&&(b=!1),a?(this.window=a.contentWindow,this.document=a.contentDocument||this.window.document,this.iframe=a):(this.document=document,this.window=window,this.iframe=null),(this.iframeStandalone=b)?(null!=(c=this.$el)&&c.remove(),this.createContainer(this.document)):this.createContainer(document)},b.prototype.controller=function(a){var b,c,d,e;if(this.alias_maps[a])c=this.controllers[this.alias_maps[a]];else{e=this.controllers;for(d in e)if(b=e[d],d===a){c=b;break}}return c?c:this.controllers[this.current_flag]},b.prototype.set_context_for=function(a){return this.current_flag=a,this},b.prototype.reg=function(a,b){var c,e;return c=(e=this.controllers)[a]||(e[a]=new d(this,a)),b.alias&&(this.alias_maps[b.alias]=a),c.init(b),this},b.prototype.listen=function(){return this.$inputor.on("keyup.atwhoInner",function(a){return function(b){return a.on_keyup(b)}}(this)).on("keydown.atwhoInner",function(a){return function(b){return a.on_keydown(b)}}(this)).on("scroll.atwhoInner",function(a){return function(b){var c;return null!=(c=a.controller())?c.view.hide(b):void 0}}(this)).on("blur.atwhoInner",function(a){return function(b){var c;return(c=a.controller())?c.view.hide(b,c.get_opt("display_timeout")):void 0}}(this)).on("click.atwhoInner",function(a){return function(b){var c;return null!=(c=a.controller())?c.view.hide(b):void 0}}(this))},b.prototype.shutdown=function(){var a,b,c;c=this.controllers;for(b in c)a=c[b],a.destroy(),delete this.controllers[b];return this.$inputor.off(".atwhoInner"),this.$el.remove()},b.prototype.dispatch=function(){return a.map(this.controllers,function(a){return function(b){var c;return(c=b.get_opt("delay"))?(clearTimeout(a.delayedCallback),a.delayedCallback=setTimeout(function(){return b.look_up()?a.set_context_for(b.at):void 0},c)):b.look_up()?a.set_context_for(b.at):void 0}}(this))},b.prototype.on_keyup=function(b){var c;switch(b.keyCode){case f.ESC:b.preventDefault(),null!=(c=this.controller())&&c.view.hide();break;case f.DOWN:case f.UP:case f.CTRL:a.noop();break;case f.P:case f.N:b.ctrlKey||this.dispatch();break;default:this.dispatch()}},b.prototype.on_keydown=function(b){var c,d;if(c=null!=(d=this.controller())?d.view:void 0,c&&c.visible())switch(b.keyCode){case f.ESC:b.preventDefault(),c.hide(b);break;case f.UP:b.preventDefault(),c.prev();break;case f.DOWN:b.preventDefault(),c.next();break;case f.P:if(!b.ctrlKey)return;b.preventDefault(),c.prev();break;case f.N:if(!b.ctrlKey)return;b.preventDefault(),c.next();break;case f.TAB:case f.ENTER:if(!c.visible())return;b.preventDefault(),c.choose(b);break;default:a.noop()}},b}(),d=function(){function b(b,c){this.app=b,this.at=c,this.$inputor=this.app.$inputor,this.id=this.$inputor[0].id||this.uid(),this.setting=null,this.query=null,this.pos=0,this.cur_rect=null,this.range=null,0===(this.$el=a("#atwho-ground-"+this.id,this.app.$el)).length&&this.app.$el.append(this.$el=a("<div id='atwho-ground-"+this.id+"'></div>")),this.model=new g(this),this.view=new h(this)}return b.prototype.uid=function(){return(Math.random().toString(16)+"000000000").substr(2,8)+(new Date).getTime()},b.prototype.init=function(b){return this.setting=a.extend({},this.setting||a.fn.atwho["default"],b),this.view.init(),this.model.reload(this.setting.data)},b.prototype.destroy=function(){return this.trigger("beforeDestroy"),this.model.destroy(),this.view.destroy(),this.$el.remove()},b.prototype.call_default=function(){var b,c,d;d=arguments[0],b=2<=arguments.length?i.call(arguments,1):[];try{return e[d].apply(this,b)}catch(f){return c=f,a.error(""+c+" Or maybe At.js doesn't have function "+d)}},b.prototype.trigger=function(a,b){var c,d;return null==b&&(b=[]),b.push(this),c=this.get_opt("alias"),d=c?""+a+"-"+c+".atwho":""+a+".atwho",this.$inputor.trigger(d,b)},b.prototype.callbacks=function(a){return this.get_opt("callbacks")[a]||e[a]},b.prototype.get_opt=function(a){var b;try{return this.setting[a]}catch(c){return b=c,null}},b.prototype.content=function(){return this.$inputor.is("textarea, input")?this.$inputor.val():this.$inputor.text()},b.prototype.catch_query=function(){var a,b,c,d,e,f;return b=this.content(),a=this.$inputor.caret("pos",{iframe:this.app.iframe}),f=b.slice(0,a),d=this.callbacks("matcher").call(this,this.at,f,this.get_opt("start_with_space")),"string"==typeof d&&d.length<=this.get_opt("max_len",20)?(e=a-d.length,c=e+d.length,this.pos=e,d={text:d,head_pos:e,end_pos:c},this.trigger("matched",[this.at,d.text])):(d=null,this.view.hide()),this.query=d},b.prototype.rect=function(){var b,c,d;if(b=this.$inputor.caret("offset",this.pos-1,{iframe:this.app.iframe}))return this.app.iframe&&!this.app.iframeStandalone&&(c=a(this.app.iframe).offset(),b.left+=c.left,b.top+=c.top),this.$inputor.is("[contentEditable]")&&(b=this.cur_rect||(this.cur_rect=b)),d=this.app.document.selection?0:2,{left:b.left,top:b.top,bottom:b.top+b.height+d}},b.prototype.reset_rect=function(){return this.$inputor.is("[contentEditable]")?this.cur_rect=null:void 0},b.prototype.mark_range=function(){var a;if(this.$inputor.is("[contentEditable]"))return this.app.window.getSelection&&(a=this.app.window.getSelection()).rangeCount>0?this.range=a.getRangeAt(0):this.app.document.selection?this.ie8_range=this.app.document.selection.createRange():void 0},b.prototype.insert_content_for=function(b){var c,d,e;return d=b.data("value"),e=this.get_opt("insert_tpl"),this.$inputor.is("textarea, input")||!e?d:(c=a.extend({},b.data("item-data"),{"atwho-data-value":d,"atwho-at":this.at}),this.callbacks("tpl_eval").call(this,e,c))},b.prototype.insert=function(b){var c,d,e,f,g,h,i,j,k;return c=this.$inputor,k=this.callbacks("inserting_wrapper").call(this,c,b,this.get_opt("suffix")),c.is("textarea, input")?(h=c.val(),i=h.slice(0,Math.max(this.query.head_pos-this.at.length,0)),j=""+i+k+h.slice(this.query.end_pos||0),c.val(j),c.caret("pos",i.length+k.length,{iframe:this.app.iframe})):(f=this.range)?(e=f.startOffset-(this.query.end_pos-this.query.head_pos)-this.at.length,f.setStart(f.endContainer,Math.max(e,0)),f.setEnd(f.endContainer,f.endOffset),f.deleteContents(),d=a(k,this.app.document)[0],f.insertNode(d),f.setEndAfter(d),f.collapse(!1),g=this.app.window.getSelection(),g.removeAllRanges(),g.addRange(f)):(f=this.ie8_range)&&(f.moveStart("character",this.query.end_pos-this.query.head_pos-this.at.length),f.pasteHTML(k),f.collapse(!1),f.select()),c.is(":focus")||c.focus(),c.change()},b.prototype.render_view=function(a){var b;return b=this.get_opt("search_key"),a=this.callbacks("sorter").call(this,this.query.text,a.slice(0,1001),b),this.view.render(a.slice(0,this.get_opt("limit")))},b.prototype.look_up=function(){var b,c;if(b=this.catch_query())return c=function(a){return a&&a.length>0?this.render_view(a):this.view.hide()},this.model.query(b.text,a.proxy(c,this)),b},b}(),g=function(){function b(a){this.context=a,this.at=this.context.at,this.storage=this.context.$inputor}return b.prototype.destroy=function(){return this.storage.data(this.at,null)},b.prototype.saved=function(){return this.fetch()>0},b.prototype.query=function(a,b){var c,d,e;return c=this.fetch(),d=this.context.get_opt("search_key"),c=this.context.callbacks("filter").call(this.context,a,c,d)||[],e=this.context.callbacks("remote_filter"),c.length>0||!e&&0===c.length?b(c):e.call(this.context,a,b)},b.prototype.fetch=function(){return this.storage.data(this.at)||[]},b.prototype.save=function(a){return this.storage.data(this.at,this.context.callbacks("before_save").call(this.context,a||[]))},b.prototype.load=function(a){return!this.saved()&&a?this._load(a):void 0},b.prototype.reload=function(a){return this._load(a)},b.prototype._load=function(b){return"string"==typeof b?a.ajax(b,{dataType:"json"}).done(function(a){return function(b){return a.save(b)}}(this)):this.save(b)},b}(),h=function(){function b(b){this.context=b,this.$el=a("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"),this.timeout_id=null,this.context.$el.append(this.$el),this.bind_event()}return b.prototype.init=function(){var a;return a=this.context.get_opt("alias")||this.context.at.charCodeAt(0),this.$el.attr({id:"at-view-"+a})},b.prototype.destroy=function(){return this.$el.remove()},b.prototype.bind_event=function(){var b;return b=this.$el.find("ul"),b.on("mouseenter.atwho-view","li",function(c){return b.find(".cur").removeClass("cur"),a(c.currentTarget).addClass("cur")}).on("click",function(a){return function(b){return a.choose(b),b.preventDefault()}}(this))},b.prototype.visible=function(){return this.$el.is(":visible")},b.prototype.choose=function(a){var b,c;return(b=this.$el.find(".cur")).length&&(c=this.context.insert_content_for(b),this.context.insert(this.context.callbacks("before_insert").call(this.context,c,b),b),this.context.trigger("inserted",[b,a]),this.hide(a)),this.context.get_opt("hide_without_suffix")?this.stop_showing=!0:void 0},b.prototype.reposition=function(b){var c,d,e,f;return f=this.context.app.iframeStandalone?this.context.app.window:window,b.bottom+this.$el.height()-a(f).scrollTop()>a(f).height()&&(b.bottom=b.top-this.$el.height()),b.left>(d=a(f).width()-this.$el.width()-5)&&(b.left=d),c={left:b.left,top:b.bottom},null!=(e=this.context.callbacks("before_reposition"))&&e.call(this.context,c),this.$el.offset(c),this.context.trigger("reposition",[c])},b.prototype.next=function(){var a,b;return a=this.$el.find(".cur").removeClass("cur"),b=a.next(),b.length||(b=this.$el.find("li:first")),b.addClass("cur")},b.prototype.prev=function(){var a,b;return a=this.$el.find(".cur").removeClass("cur"),b=a.prev(),b.length||(b=this.$el.find("li:last")),b.addClass("cur")},b.prototype.show=function(){var a;return this.stop_showing?void(this.stop_showing=!1):(this.context.mark_range(),this.visible()||(this.$el.show(),this.context.trigger("shown")),(a=this.context.rect())?this.reposition(a):void 0)},b.prototype.hide=function(a,b){var c;if(this.visible())return isNaN(b)?(this.context.reset_rect(),this.$el.hide(),this.context.trigger("hidden",[a])):(c=function(a){return function(){return a.hide()}}(this),clearTimeout(this.timeout_id),this.timeout_id=setTimeout(c,b))},b.prototype.render=function(b){var c,d,e,f,g,h,i;if(!(a.isArray(b)&&b.length>0))return void this.hide();for(this.$el.find("ul").empty(),d=this.$el.find("ul"),g=this.context.get_opt("tpl"),h=0,i=b.length;i>h;h++)e=b[h],e=a.extend({},e,{"atwho-at":this.context.at}),f=this.context.callbacks("tpl_eval").call(this.context,g,e),c=a(this.context.callbacks("highlighter").call(this.context,f,this.context.query.text)),c.data("item-data",e),d.append(c);return this.show(),this.context.get_opt("highlight_first")?d.find("li:first").addClass("cur"):void 0},b}(),f={DOWN:40,UP:38,ESC:27,TAB:9,ENTER:13,CTRL:17,P:80,N:78},e={before_save:function(b){var c,d,e,f;if(!a.isArray(b))return b;for(f=[],d=0,e=b.length;e>d;d++)c=b[d],f.push(a.isPlainObject(c)?c:{name:c});return f},matcher:function(a,b,c){var d,e;return a=a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),c&&(a="(?:^|\\s)"+a),e=new RegExp(a+"([A-Za-zÀ-ÿ0-9_+-]*)$|"+a+"([^\\x00-\\xff]*)$","gi"),d=e.exec(b),d?d[2]||d[1]:null},filter:function(a,b,c){var d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],~new String(d[c]).toLowerCase().indexOf(a.toLowerCase())&&g.push(d);return g},remote_filter:null,sorter:function(a,b,c){var d,e,f,g;if(!a)return b;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],d.atwho_order=new String(d[c]).toLowerCase().indexOf(a.toLowerCase()),d.atwho_order>-1&&g.push(d);return g.sort(function(a,b){return a.atwho_order-b.atwho_order})},tpl_eval:function(a,b){var c;try{return a.replace(/\$\{([^\}]*)\}/g,function(a,c){return b[c]})}catch(d){return c=d,""}},highlighter:function(a,b){var c;return b?(c=new RegExp(">\\s*(\\w*?)("+b.replace("+","\\+")+")(\\w*)\\s*<","ig"),a.replace(c,function(a,b,c,d){return"> "+b+"<strong>"+c+"</strong>"+d+" <"})):a},before_insert:function(a){return a},inserting_wrapper:function(a,b,c){var d,e;return d=""===c?c:c||" ",a.is("textarea, input")?""+b+d:"true"===a.attr("contentEditable")?(d=""===c?c:c||"&nbsp;",/firefox/i.test(navigator.userAgent)?e="<span>"+b+d+"</span>":(c="<span contenteditable='false'>"+d+"<span>",e="<span contenteditable='false'>"+b+c+"</span>"),this.app.document.selection&&(e="<span contenteditable='true'>"+b+"</span>"),e):void 0}},b={load:function(a,b){var c;return(c=this.controller(a))?c.model.load(b):void 0},setIframe:function(a,b){return this.setIframe(a,b),null},run:function(){return this.dispatch()},destroy:function(){return this.shutdown(),this.$inputor.data("atwho",null)}},a.fn.atwho=function(d){var e,f;return f=arguments,e=null,this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function(){var g,h;return(h=(g=a(this)).data("atwho"))||g.data("atwho",h=new c(this)),"object"!=typeof d&&d?b[d]&&h?e=b[d].apply(h,Array.prototype.slice.call(f,1)):a.error("Method "+d+" does not exist on jQuery.caret"):h.reg(d.at,d)}),e||this},a.fn.atwho["default"]={at:void 0,alias:void 0,data:null,tpl:"<li data-value='${atwho-at}${name}'>${name}</li>",insert_tpl:"<span id='${id}'>${atwho-data-value}</span>",callbacks:e,search_key:"name",suffix:void 0,hide_without_suffix:!1,start_with_space:!0,highlight_first:!0,limit:5,max_len:20,display_timeout:300,delay:null}})}).call(this);;
// Options based on At.js', see https://github.com/ichord/At.js/wiki
var jetpackSuggestUIDefaults = (function($) {
  return {
	// Require a leading space, otherwise emails and awesome++ type things trigger annoying UI
    start_with_space: true,

    // Don't insert a space after the completion/insertion, and hide after
    // insert, even if we're still "in" the matched string.
    suffix: '',
    hide_without_suffix: true,

    // contentEditable insertion template. This is relying on a crazy "hack" of how
    // jQuery handles strings. The 2 fake HTML tags make it create a textNode, which
    // is what we need to insert for a clean contentEditable experience.
    insert_tpl: '</>${atwho-data-value}</>',

    // How many results to show
    limit: 10,

    callbacks: {
      // Custom filter to only match the start of spaced words
      // Based on the core/default one.
      filter: function( query, data, search_key ) {
        var item, _i, _len, _results = [],
            regxp = new RegExp( "^" + query + "| " + query, 'ig' ); // start of string, or preceded by a space

        for ( _i = 0, _len = data.length; _i < _len; _i++ ) {
          item = data[_i];
          if ( item[search_key].toLowerCase().match( regxp ) ) {
            _results.push( item );
          }
        }
        return _results;
      },

      // contentEditable wrapper definition to avoid inserting junk tags
      // into the WP Editor.
      inserting_wrapper: function( $inputor, content, suffix ) {
        return '' + content + suffix;
      },

      // Based on the core default.
      // Removes some spaces around highlighted string and tweaks regex to
      // allow spaces (to match display_name)
      highlighter: function( li, query ) {
        if ( !query ) {
          return li;
        }

        var regexp = new RegExp( ">(\\s*|[\\w\\s]*)(" + this.at.replace("+", "\\+") + "?" + query.replace("+", "\\+") + ")([\\w ]*)\\s*<", 'ig' );
        return li.replace( regexp, function( str, $1, $2, $3 ) {
          return '>' + $1 + '<strong>' + $2 + '</strong>' + $3 + '<';
        });
      },

      // Reposition the suggestion list dynamically
      before_reposition: function( offset ) {
        // get the iframe, if any, already applied with atwho
        var caret,
            line,
            input = this.$inputor.offset().left,
            $view = $( '#atwho-ground-' + this.id + ' .atwho-view' ),
            $body = $( 'body' ),
            atwhoDataValue = this.$inputor.data( 'atwho' );

        if ( 'undefined' !== atwhoDataValue && 'undefined' !== atwhoDataValue.iframe && null !== atwhoDataValue.iframe ) {
          caret = this.$inputor.caret( 'offset', { iframe: atwhoDataValue.iframe } );
          // Caret.js no longer calculates iframe caret position from the window (it's now just within the iframe).
          // We need to get the iframe offset from the window and merge that into our object.
          var iframeOffset = $( atwhoDataValue.iframe ).offset();
          if ( 'undefined' !== iframeOffset ) {
            caret.left += iframeOffset.left;
            caret.top  += iframeOffset.top;
          }
        } else {
          caret = this.$inputor.caret( 'offset' );
        }

        // If the caret is past horizontal half, then flip it, yo
        if ( caret.left > ( $body.width() / 2 ) ) {
          $view.addClass( 'right' );
          move = caret.left - offset.left - this.view.$el.width();
        } else {
          $view.removeClass( 'right' );
          move = caret.left - offset.left + 1;
        }

        // If we're on a small screen, scroll to caret
        if ( $body.width() <= 400 ) {
          $( document ).scrollTop( caret.top - 6 );
        }

        // New position is under the caret (never above) and positioned to follow
        // Dynamic sizing based on the input area (remove 'px' from end)
        line = parseInt( this.$inputor.css( 'line-height' ).substr( 0, this.$inputor.css( 'line-height' ).length - 2 ), 10 );
        if ( !line || line < 5 ) { // sanity check, and catch no line-height
          line = 19;
        }

        offset.top   = caret.top + line;
        offset.left += move;
      }
    }
  };
})(jQuery);
;
!function(a){a.fn.mentions=function(b){a.isArray(b)&&(b={data:b}),"undefined"!=typeof b.suggestions&&(b.data=b.suggestions);var c={at:"@",data:a.map(b.data,function(a){return a.name=a.name||a.user_login+" "+a.display_name,a}),tpl:"<li data-value='@${user_login}'><img src='${image_URL}' /><span class='username'>@${user_login}</span><small>${display_name}</small></li>"},d=a.extend(!0,{},jetpackSuggestUIDefaults,c,b);return a.fn.atwho.call(this,d)}}(jQuery);;
/*
 * jQuery WordPress REST Proxy Request
 * Name:   wpcom_proxy_request
 * Author: Beau Collins <beaucollins@gmail.com>
 * 
 * A plugin for jQuery that makes proxy requests (using window.postMessage) to the
 * WordPress.com REST api (https://public-api.wordpress.com/rest/v1/help)
 * 
 * Usage:
 * 	jQuery.wpcom_proxy_request( path );
 * 	jQuery.wpcom_proxy_request( path, request );
 * 	jQuery.wpcom_proxy_request( request );
 *    
 * Arguments:
 * 	path     : the REST URL path to request (will be appended to the rest base URL)
 * 	request  : request parameters: method (string), path (string), query (object), body (object)
 *
 * Returns
 * 	A jQuery promise() whose callbacks accept the following arguments:
 * 		response : the JSON response for your request
 * 		statusCode : the HTTP statusCode for your request
 *
 * Example:
 * 	// For simple GET requests
 * 	jQuery.wpcom_proxy_request( '/me' ).done( function( response, statusCode ){
 * 		/// ...
 * 	} );
 *
 * 	// More Advanced GET request
 * 	jQuery.wpcom_proxy_request( {
 * 		path: '/sites/en.blog.wordpress.com/posts',
 * 		query: { number: 100 }
 * 	} );
 * 
 * 	// POST request
 * 	jQuery.wpcom_proxy_request( {
 * 		method: 'POST',
 * 		path: '/sites/en.blog.wordpress.com/posts/9776/replies/new',
 * 		body: { content: 'This is a comment' }
 * 	} );
 */
(function($){
	// don't run this more than once per context
	if ( $.wpcom_proxy_request) {
		return;
	}

	var proxy,
	origin         = window.location.protocol + '//' + window.location.hostname,
	proxyOrigin    = 'https://public-api.wordpress.com',

	ready          = false,
	supported      = true, // assume window.postMessage is supported
	usingPM        = false, // If we don't have window.postMessage, postmessage.js may be available
	structuredData = true, // supports passing of structured data

	bufferedOps    = [],   // store requests while we wait for the proxy iframe to initialize
	deferreds      = {},

	/**
	 * Firefox apparently doesn't like sending `File` instances cross-domain.
	 * It results in a "DataCloneError: The object could not be cloned." error.
	 * Apparently this is for "security purposes" but it's actually silly if that's
	 * the argument because we can just read the File manually into an ArrayBuffer
	 * and we can work around this "security restriction".
	 *
	 * See: https://bugzilla.mozilla.org/show_bug.cgi?id=722126#c8
	 */
	 hasFileSerializationBug = false,

	 // Can we pass structured data via postMessage or just strings?
	check = function( event ){
		structuredData = 'object' === typeof event.originalEvent.data;
		$(window).unbind( 'message', check );
		buildProxy();
	},

	// Initialize the proxy iframe
	buildProxy = function() {
		// Start listening to messages
		if ( !usingPM ) {
			$(window).bind( 'message', receive );
		} else {
			pm.bind( 'proxy', function( e ) { receive( e ); } );
		}

		proxy = document.createElement( 'iframe' );
		proxy.src = 'https://public-api.wordpress.com/wp-admin/rest-proxy/#' + origin;
		proxy.style.display = 'none';

		// Process any buffered API calls after the iframe proxy is ready
		$(proxy).bind( 'load', function() {
			var request;
			ready = true;
			while ( request = bufferedOps.shift() ) {
				postRequest( request );
			}
		});

		// Bring it
		$(document).ready( function() {
			$(document.body).append( proxy );
		} );
	},

	// Message event listener
	receive = function( e ){
		var event,
		    data,
		    deferred_id,
		    deferred;

		if ( !usingPM ) {
			// look at the real event, not the jQuery mocked one
			event = e.originalEvent;

			if ( event.origin !== proxyOrigin ) {
				return;
			}

			data = structuredData ? event.data : JSON.parse( event.data );
		} else {
			data = e;
		}

		if ( !data || !data.length ) {
			return;
		}

		deferred_id = data[ data.length - 1 ];

		if ( 'undefined' === typeof deferreds[deferred_id] ) {
			return;
		}

		deferred = deferreds[deferred_id];
		delete deferreds[deferred_id];

		deferred.resolve.apply( deferred, data.slice( 0, -1 ) );
	},

	// Calls API
	perform = function() {
		var request = buildRequest.apply( null, arguments );

		postRequest( request );

		return deferreds[request.callback].promise();
	},

	// Buffers API request
	buffer = function() {
		var request = buildRequest.apply( null, arguments );

		bufferedOps.push( request );

		return deferreds[request.callback].promise();
	},

	// Submits the API request to the proxy iframe
	postRequest = function( request ) {
		var files = findFilesInRequest( request ),
	 		data = structuredData ? request : JSON.stringify( request );

		if ( hasFileSerializationBug && files.has_files ) {
			postAsArrayBuffer( request, files );
		} else {
			try {
				sendPostMessage( data );
			} catch( e ) {
				// were we trying to serialize a `File`?
				if ( files.has_files ) {

					// cache this check for the next API request
					hasFileSerializationBug = true;
					postAsArrayBuffer( request, files );
				} else {
					// not interested, rethrow
					throw e;
				}
			}
		}
	},

	sendPostMessage = function( data ) {
		if ( !usingPM ) {
			proxy.contentWindow.postMessage( data, proxyOrigin );
		} else if ( window.pm ) {
			pm( {
				data  : data,
				type  : 'proxy',
				target: proxy.contentWindow,
				url   : 'https://public-api.wordpress.com/wp-admin/rest-proxy/#' + origin,
				origin: proxyOrigin
			} );
		}
	},

	postAsArrayBuffer = function( request, files ) {
		if ( ! files.has_files )
			return;


		$.each( files.file_keys, function( n, i ){
			var reader = new FileReader(),
				key = request.formData[i][0],
				file = request.formData[i][1];

			reader.onload = function(e) {
				request.formData[i] = [ key, {
					fileContents: e.target.result,
					fileName : file.name,
					mimeType: file.type
				} ];

				var are_there_still_files = findFilesInRequest( request );
				if ( ! are_there_still_files.has_files ) {
					proxy.contentWindow.postMessage( request, proxyOrigin );
				}
			};

			reader.readAsArrayBuffer( file );
		});
	},

	findFilesInRequest = function( request ) {
		var files = {
			has_files : false,
			file_keys : []
		};

		if ( ! structuredData || ! request.formData || request.formData.length <= 0 )
			return files;

		$.each( request.formData, function( i, arr ) {
			var maybe_a_file = arr[1];
			if ( 'object' == typeof maybe_a_file && '[object File]' == Object.prototype.toString.call( maybe_a_file ) ) {
				files.has_files = true;
				files.file_keys.push( i );
			}
		});

		return files;
	},

	// Builds the postMessage request object
	buildRequest = function() {
		var args     = jQuery.makeArray( arguments ),
		    request  = args.pop(),
		    path     = args.pop(),
		    deferred = new jQuery.Deferred(),
		    deferred_id;

		// @todo - remove this back-compat code
		if ( jQuery.isFunction( request ) ) {
			deferred.done( request );
			request = path;
			path    = args.pop();
		}

		if ( 'string' === typeof( request ) ) {
			request = { path: request };
		}

		if ( path ) {
			request.path = path;
		}

		do {
			deferred_id = Math.random();
		} while ( 'undefined' !== typeof deferreds[deferred_id] );

		deferreds[deferred_id] = deferred;

		request.callback = deferred_id;
		request.supports_args = true; // supports receiving variable amount of arguments
		return request;
	};

	// Step 1: do we have postMessage? ( in IE8, typeof window.postMessage == 'object' )
	if ( jQuery.inArray( typeof window.postMessage, [ 'function', 'object' ] ) != -1 ) {
		// Step 2: Check if we can pass structured data or just strings
		$(window).bind( 'message', check );
		window.postMessage( {}, origin );
	} else if ( window.pm ) {
		usingPM = true;
		// Step 2: We can always just used structured data.
		buildProxy();
	} else {
		supported = false;
	}

	$.wpcom_proxy_request = function(){
		if ( !supported ) {
			throw( 'Browser does not support window.postMessage' );
		}

		if ( ready ) {
			// Make API request
			return perform.apply( null, arguments );
		} else {
			// Buffer API request
			return buffer.apply( null, arguments );
		}
	};

	$.wpcom_proxy_rebuild = function() {
		if ( !ready )
			return;

		ready = false;
		$(proxy).remove();
		
		buildProxy();
	};
})(jQuery);
;
/*
 * Defines an object literal that can be used to avoid redundant calls to the 
 * REST API for terms (e.g. mentions) for sites
 * Depends on jQuery for Promises
 *
 * We're purposely doing this as a global to make it easy for as many consumers
 * as possible to use this object : to avoid redundant logic + requests
 *
 * Future revisions will likely also include client persistent caching (e.g.
 * local storage) to further reduce requests
 */

(function( $ ) {
	window.wpcomTermsCache = {

		mentionData: {},

		getMentions: function( siteID, client ) {
			var deferred = $.Deferred();

			// already in the mentionData cache?  resolve right away
			if ( 'undefined' !== typeof this.mentionData[ siteID ] ) {
				deferred.resolve( this.mentionData[ siteID ] );
			} else {
				// not in the mentionData cache?  make a request for the data
				// @todo : only promote our token if accessing cross blog
				$.wpcom_proxy_request( {
					metaAPI: { accessAllUsersBlogs: true }
				} ).done( function() {
					$.wpcom_proxy_request( '/users/suggest', {
						method: 'GET',
						query: {
							site_id: siteID,
							client: client,
							image_size: 32
						}
					} ).done( function( response, statusCode ) {
						if ( 'undefined' !== typeof response.suggestions ) {
							window.wpcomTermsCache.mentionData[ siteID ] = response.suggestions;
							deferred.resolve( window.wpcomTermsCache.mentionData[ siteID ] );
						} else {
							console.error( 'unexpected response received for /users/suggest : ', response );
							deferred.reject();
						}
					} );
				} );
			}

			return deferred.promise();
		}
	}
} )( jQuery );
;
/*
 RequireJS 2.1.8 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(Z){function H(b){return"[object Function]"===L.call(b)}function I(b){return"[object Array]"===L.call(b)}function y(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function M(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function s(b,c){return ga.call(b,c)}function l(b,c){return s(b,c)&&b[c]}function F(b,c){for(var d in b)if(s(b,d)&&c(b[d],d))break}function Q(b,c,d,h){c&&F(c,function(c,j){if(d||!s(b,j))h&&"string"!==typeof c?(b[j]||(b[j]={}),Q(b[j],
c,d,h)):b[j]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function aa(b){throw b;}function ba(b){if(!b)return b;var c=Z;y(b.split("."),function(b){c=c[b]});return c}function A(b,c,d,h){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=h;d&&(c.originalError=d);return c}function ha(b){function c(a,f,b){var e,m,c,g,d,h,j,i=f&&f.split("/");e=i;var n=k.map,p=n&&n["*"];if(a&&"."===a.charAt(0))if(f){e=l(k.pkgs,f)?i=[f]:i.slice(0,i.length-
1);f=a=e.concat(a.split("/"));for(e=0;f[e];e+=1)if(m=f[e],"."===m)f.splice(e,1),e-=1;else if(".."===m)if(1===e&&(".."===f[2]||".."===f[0]))break;else 0<e&&(f.splice(e-1,2),e-=2);e=l(k.pkgs,f=a[0]);a=a.join("/");e&&a===f+"/"+e.main&&(a=f)}else 0===a.indexOf("./")&&(a=a.substring(2));if(b&&n&&(i||p)){f=a.split("/");for(e=f.length;0<e;e-=1){c=f.slice(0,e).join("/");if(i)for(m=i.length;0<m;m-=1)if(b=l(n,i.slice(0,m).join("/")))if(b=l(b,c)){g=b;d=e;break}if(g)break;!h&&(p&&l(p,c))&&(h=l(p,c),j=e)}!g&&
h&&(g=h,d=j);g&&(f.splice(0,d,g),a=f.join("/"))}return a}function d(a){z&&y(document.getElementsByTagName("script"),function(f){if(f.getAttribute("data-requiremodule")===a&&f.getAttribute("data-requirecontext")===i.contextName)return f.parentNode.removeChild(f),!0})}function h(a){var f=l(k.paths,a);if(f&&I(f)&&1<f.length)return d(a),f.shift(),i.require.undef(a),i.require([a]),!0}function $(a){var f,b=a?a.indexOf("!"):-1;-1<b&&(f=a.substring(0,b),a=a.substring(b+1,a.length));return[f,a]}function n(a,
f,b,e){var m,B,g=null,d=f?f.name:null,h=a,j=!0,k="";a||(j=!1,a="_@r"+(L+=1));a=$(a);g=a[0];a=a[1];g&&(g=c(g,d,e),B=l(r,g));a&&(g?k=B&&B.normalize?B.normalize(a,function(a){return c(a,d,e)}):c(a,d,e):(k=c(a,d,e),a=$(k),g=a[0],k=a[1],b=!0,m=i.nameToUrl(k)));b=g&&!B&&!b?"_unnormalized"+(M+=1):"";return{prefix:g,name:k,parentMap:f,unnormalized:!!b,url:m,originalName:h,isDefine:j,id:(g?g+"!"+k:k)+b}}function q(a){var f=a.id,b=l(p,f);b||(b=p[f]=new i.Module(a));return b}function t(a,f,b){var e=a.id,m=l(p,
e);if(s(r,e)&&(!m||m.defineEmitComplete))"defined"===f&&b(r[e]);else if(m=q(a),m.error&&"error"===f)b(m.error);else m.on(f,b)}function v(a,f){var b=a.requireModules,e=!1;if(f)f(a);else if(y(b,function(f){if(f=l(p,f))f.error=a,f.events.error&&(e=!0,f.emit("error",a))}),!e)j.onError(a)}function w(){R.length&&(ia.apply(G,[G.length-1,0].concat(R)),R=[])}function x(a){delete p[a];delete T[a]}function E(a,f,b){var e=a.map.id;a.error?a.emit("error",a.error):(f[e]=!0,y(a.depMaps,function(e,c){var g=e.id,
d=l(p,g);d&&(!a.depMatched[c]&&!b[g])&&(l(f,g)?(a.defineDep(c,r[g]),a.check()):E(d,f,b))}),b[e]=!0)}function C(){var a,f,b,e,m=(b=1E3*k.waitSeconds)&&i.startTime+b<(new Date).getTime(),c=[],g=[],j=!1,l=!0;if(!U){U=!0;F(T,function(b){a=b.map;f=a.id;if(b.enabled&&(a.isDefine||g.push(b),!b.error))if(!b.inited&&m)h(f)?j=e=!0:(c.push(f),d(f));else if(!b.inited&&(b.fetched&&a.isDefine)&&(j=!0,!a.prefix))return l=!1});if(m&&c.length)return b=A("timeout","Load timeout for modules: "+c,null,c),b.contextName=
i.contextName,v(b);l&&y(g,function(a){E(a,{},{})});if((!m||e)&&j)if((z||da)&&!V)V=setTimeout(function(){V=0;C()},50);U=!1}}function D(a){s(r,a[0])||q(n(a[0],null,!0)).init(a[1],a[2])}function J(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!W?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||W)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function K(){var a;for(w();G.length;){a=
G.shift();if(null===a[0])return v(A("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));D(a)}}var U,X,i,N,V,k={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},p={},T={},Y={},G=[],r={},S={},L=1,M=1;N={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){var b=
l(k.pkgs,a.map.id);return(b?l(k.config,a.map.id+"/"+b.main):l(k.config,a.map.id))||{}},exports:r[a.map.id]}}};X=function(a){this.events=l(Y,a.id)||{};this.map=a;this.shim=l(k.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};X.prototype={init:function(a,b,c,e){e=e||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;
this.ignore=e.ignore;e.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;S[a]||(S[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var e=this.exports,m=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(H(m)){if(this.events.error&&this.map.isDefine||j.onError!==aa)try{e=i.execCb(c,m,b,e)}catch(d){a=d}else e=i.execCb(c,m,b,e);this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==
this.exports?e=b.exports:void 0===e&&this.usingExports&&(e=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",v(this.error=a)}else e=m;this.exports=e;if(this.map.isDefine&&!this.ignore&&(r[c]=e,j.onResourceLoad))j.onResourceLoad(i,this.map,this.depMaps);x(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=
!0)}}else this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=n(a.prefix);this.depMaps.push(d);t(d,"defined",u(this,function(e){var m,d;d=this.map.name;var g=this.map.parentMap?this.map.parentMap.name:null,h=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(e.normalize&&(d=e.normalize(d,function(a){return c(a,g,!0)})||""),e=n(a.prefix+"!"+d,this.map.parentMap),t(e,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),
d=l(p,e.id)){this.depMaps.push(e);if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else m=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),m.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];F(p,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&x(a.map.id)});v(a)}),m.fromText=u(this,function(e,c){var d=a.name,g=n(d),B=O;c&&(e=c);B&&(O=!1);q(g);s(k.config,b)&&(k.config[d]=k.config[b]);try{j.exec(e)}catch(ca){return v(A("fromtexteval",
"fromText eval for "+b+" failed: "+ca,ca,[b]))}B&&(O=!0);this.depMaps.push(g);i.completeLoad(d);h([d],m)}),e.load(a.name,h,m,k)}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){T[this.map.id]=this;this.enabling=this.enabled=!0;y(this.depMaps,u(this,function(a,b){var c,e;if("string"===typeof a){a=n(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=l(N,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;t(a,"defined",u(this,function(a){this.defineDep(b,
a);this.check()}));this.errback&&t(a,"error",u(this,this.errback))}c=a.id;e=p[c];!s(N,c)&&(e&&!e.enabled)&&i.enable(a,this)}));F(this.pluginMaps,u(this,function(a){var b=l(p,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){y(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:k,contextName:b,registry:p,defined:r,urlFetched:S,defQueue:G,Module:X,makeModuleMap:n,
nextTick:j.nextTick,onError:v,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=k.pkgs,c=k.shim,e={paths:!0,config:!0,map:!0};F(a,function(a,b){e[b]?"map"===b?(k.map||(k.map={}),Q(k[b],a,!0,!0)):Q(k[b],a,!0):k[b]=a});a.shim&&(F(a.shim,function(a,b){I(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);c[b]=a}),k.shim=c);a.packages&&(y(a.packages,function(a){a="string"===typeof a?{name:a}:a;b[a.name]={name:a.name,
location:a.location||a.name,main:(a.main||"main").replace(ja,"").replace(ea,"")}}),k.pkgs=b);F(p,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=n(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(Z,arguments));return b||a.exports&&ba(a.exports)}},makeRequire:function(a,f){function d(e,c,h){var g,k;f.enableBuildCallback&&(c&&H(c))&&(c.__requireJsBuild=!0);if("string"===typeof e){if(H(c))return v(A("requireargs",
"Invalid require call"),h);if(a&&s(N,e))return N[e](p[a.id]);if(j.get)return j.get(i,e,a,d);g=n(e,a,!1,!0);g=g.id;return!s(r,g)?v(A("notloaded",'Module name "'+g+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[g]}K();i.nextTick(function(){K();k=q(n(null,a));k.skipMap=f.skipMap;k.init(e,c,h,{enabled:!0});C()});return d}f=f||{};Q(d,{isBrowser:z,toUrl:function(b){var d,f=b.lastIndexOf("."),g=b.split("/")[0];if(-1!==f&&(!("."===g||".."===g)||1<f))d=b.substring(f,b.length),b=
b.substring(0,f);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return s(r,n(b,a,!1,!0).id)},specified:function(b){b=n(b,a,!1,!0).id;return s(r,b)||s(p,b)}});a||(d.undef=function(b){w();var c=n(b,a,!0),f=l(p,b);delete r[b];delete S[c.url];delete Y[b];f&&(f.events.defined&&(Y[b]=f.events),x(b))});return d},enable:function(a){l(p,a.id)&&q(a).enable()},completeLoad:function(a){var b,c,e=l(k.shim,a)||{},d=e.exports;for(w();G.length;){c=G.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===
a&&(b=!0);D(c)}c=l(p,a);if(!b&&!s(r,a)&&c&&!c.inited){if(k.enforceDefine&&(!d||!ba(d)))return h(a)?void 0:v(A("nodefine","No define call for "+a,null,[a]));D([a,e.deps||[],e.exportsFn])}C()},nameToUrl:function(a,b,c){var e,d,h,g,i,n;if(j.jsExtRegExp.test(a))g=a+(b||"");else{e=k.paths;d=k.pkgs;g=a.split("/");for(i=g.length;0<i;i-=1)if(n=g.slice(0,i).join("/"),h=l(d,n),n=l(e,n)){I(n)&&(n=n[0]);g.splice(0,i,n);break}else if(h){a=a===h.name?h.location+"/"+h.main:h.location;g.splice(0,i,a);break}g=g.join("/");
g+=b||(/\?/.test(g)||c?"":".js");g=("/"===g.charAt(0)||g.match(/^[\w\+\.\-]+:/)?"":k.baseUrl)+g}return k.urlArgs?g+((-1===g.indexOf("?")?"?":"&")+k.urlArgs):g},load:function(a,b){j.load(i,a,b)},execCb:function(a,b,c,e){return b.apply(e,c)},onScriptLoad:function(a){if("load"===a.type||ka.test((a.currentTarget||a.srcElement).readyState))P=null,a=J(a),i.completeLoad(a.id)},onScriptError:function(a){var b=J(a);if(!h(b.id))return v(A("scripterror","Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();
return i}var j,w,x,C,J,D,P,K,q,fa,la=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ma=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/\.js$/,ja=/^\.\//;w=Object.prototype;var L=w.toString,ga=w.hasOwnProperty,ia=Array.prototype.splice,z=!!("undefined"!==typeof window&&navigator&&window.document),da=!z&&"undefined"!==typeof importScripts,ka=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,W="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),E={},t={},R=[],O=
!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(H(requirejs))return;t=requirejs;requirejs=void 0}"undefined"!==typeof require&&!H(require)&&(t=require,require=void 0);j=requirejs=function(b,c,d,h){var q,n="_";!I(b)&&"string"!==typeof b&&(q=b,I(c)?(b=c,c=d,d=h):b=[]);q&&q.context&&(n=q.context);(h=l(E,n))||(h=E[n]=j.s.newContext(n));q&&h.configure(q);return h.require(b,c,d)};j.config=function(b){return j(b)};j.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,
4)}:function(b){b()};require||(require=j);j.version="2.1.8";j.jsExtRegExp=/^\/|:|\?|\.js$/;j.isBrowser=z;w=j.s={contexts:E,newContext:ha};j({});y(["toUrl","undef","defined","specified"],function(b){j[b]=function(){var c=E._;return c.require[b].apply(c,arguments)}});if(z&&(x=w.head=document.getElementsByTagName("head")[0],C=document.getElementsByTagName("base")[0]))x=w.head=C.parentNode;j.onError=aa;j.createNode=function(b){var c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):
document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};j.load=function(b,c,d){var h=b&&b.config||{};if(z)return h=j.createNode(h,c,d),h.setAttribute("data-requirecontext",b.contextName),h.setAttribute("data-requiremodule",c),h.attachEvent&&!(h.attachEvent.toString&&0>h.attachEvent.toString().indexOf("[native code"))&&!W?(O=!0,h.attachEvent("onreadystatechange",b.onScriptLoad)):(h.addEventListener("load",b.onScriptLoad,!1),h.addEventListener("error",
b.onScriptError,!1)),h.src=d,K=h,C?x.insertBefore(h,C):x.appendChild(h),K=null,h;if(da)try{importScripts(d),b.completeLoad(c)}catch(l){b.onError(A("importscripts","importScripts failed for "+c+" at "+d,l,[c]))}};z&&M(document.getElementsByTagName("script"),function(b){x||(x=b.parentNode);if(J=b.getAttribute("data-main"))return q=J,t.baseUrl||(D=q.split("/"),q=D.pop(),fa=D.length?D.join("/")+"/":"./",t.baseUrl=fa),q=q.replace(ea,""),j.jsExtRegExp.test(q)&&(q=J),t.deps=t.deps?t.deps.concat(q):[q],!0});
define=function(b,c,d){var h,j;"string"!==typeof b&&(d=c,c=b,b=null);I(c)||(d=c,c=null);!c&&H(d)&&(c=[],d.length&&(d.toString().replace(la,"").replace(ma,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(O){if(!(h=K))P&&"interactive"===P.readyState||M(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return P=b}),h=P;h&&(b||(b=h.getAttribute("data-requiremodule")),j=E[h.getAttribute("data-requirecontext")])}(j?j.defQueue:
R).push([b,c,d])};define.amd={jQuery:!0};j.exec=function(b){return eval(b)};j(t)}})(this);
;
var wpcom = wpcom || {};

/**
 * Based on:
 * Amplify Core 1.1.0
 * 
 * Copyright 2011 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 * 
 * http://amplifyjs.com
 */
(function( global, undefined ) {

var slice = [].slice, subscriptions = {};

var amplify = {
	publish: function( action ) {
		var args = slice.call( arguments, 1 ),
			eventSubscriptions,
			subscription,
			length,
			i = 0;

		if ( !subscriptions[ action ] )
			return false;

		eventSubscriptions = subscriptions[ action ].slice();
		for ( length = eventSubscriptions.length; i < length; i++ ) {
			subscription = eventSubscriptions[ i ];
			subscription.callback.apply( subscription.context, args );
		}

		return true;
	},

	subscribe: function( action, callback, priority, unique, context ) {
		priority = priority || 10;

		if ( typeof(unique) == 'undefined' )
			unique = true;

		var eventIndex, 
			events = action.split( /\s/ ),
			eventLength = events.length,
			added, newaction, registered, i, subscriptionInfo, namespace;

		for ( eventIndex = 0; eventIndex < eventLength; eventIndex++ ) {
			newaction = events[ eventIndex ];
			namespace = newaction.split('.');
			added = false;

			if ( !namespace[1] )
				return false;

			newaction = namespace[0];
			namespace = namespace[1];

			if ( !subscriptions[ newaction ] ) {
				subscriptions[ newaction ] = [];
			} else if ( unique ) {
				for ( registered in subscriptions[ newaction ] ) {
					if ( subscriptions[ newaction ][ registered ].namespace === namespace )
						return false;
				}
			}

			i = subscriptions[ newaction ].length - 1;
			subscriptionInfo = {
				namespace: namespace,
				callback: callback,
				priority: priority,
				context: context
			};

			for ( ; i >= 0; i-- ) {
				if ( subscriptions[ newaction ][ i ].priority <= priority ) {
					subscriptions[ newaction ].splice( i + 1, 0, subscriptionInfo );
					added = true;
					break;
				}
			}

			if ( !added ) {
				subscriptions[ newaction ].unshift( subscriptionInfo );
			}
		}

		return true;
	},

	unsubscribe: function( action ) {
		var namespace = action.split('.'), i, ret = false, actions, reindexed = [];

		if ( !namespace[1] )
			return false;

		action = namespace[0];
		namespace = namespace[1];

		if ( !subscriptions[ action ] )
			return false;

		actions = subscriptions[ action ];

		for ( i in actions ) {
			if ( !actions[ i ] ) {
				continue;
			} else if ( actions[ i ].namespace === namespace ) {
				ret = true;
				continue;
			} else {
				reindexed.push( actions[i] );
			}
		}

		if ( reindexed.length )
			subscriptions[ action ] = reindexed;
		else
			delete( subscriptions[ action ] );

		return ret;
	},

	removeall: function( action ) {
		if ( !subscriptions[ action ] )
			return;

		delete( subscriptions[ action ] );
	}
};

/**
 * Triggers an action (custom event) previously added with addAction()
 *  
 * Usage: doAction( action, ... )
 * Any additional parameters will be passed to the callback(s).
 * 
 * @action string Name of the action.
 */  
wpcom.doAction = amplify.publish;

/**
 * Adds an action (custom event) that is triggered later
 *
 * Usage:
 * addAction( action.namespace, callback );
 * addAction( action.namespace, callback, priority );
 * addAction( action.namespace, callback, priority, unique );
 * addAction( action.namespace, callback, priority, unique, scope );
 *
 * @action.namespace string Action name + namespace. The namespace is required. It is similar to jQuery().bind('click.myname', ...) 
 *                          and has to be unique for this action and for the script adding the action
 *                          similarly to how PHP functions are unique in each WordPress plugin.
 * @callback function Callback function for the action. Can be anonymous: addAction( action.namespace, function(){...} );
 * @priority int optional Action priority. Lower values have higher priority. Default is 10 (same as add_action() in PHP).
 * @unique bool optional Whether to reject attempts to add the same action.namespace multiple times. Defaults to true. 
 * @scope object optional The JS scope when the callback is invoked.
 */
wpcom.addAction = amplify.subscribe;

/**
 * Removes one action
 *
 * Usage: removeAction( action, namespace )
 * 
 * Different actions on the same hook are identified by their namespace.
 *
 * @action string Name of the action.
 * @namespace The namespace that was originally used.
 */  
wpcom.removeAction = amplify.unsubscribe;

/**
 * Removes all actions from a hook.
 *
 * Usage: removeAllActions( action )
 *
 * @action string Name of the action.
 */ 
wpcom.removeAllActions = amplify.removeall;

}( this ) );
;
(function(root, factory){
  // Set up Tappable appropriately for the environment.
  if (typeof define === 'function' && define.amd){
    // AMD
    define('tappable', [], function(){
      factory(root, window.document);
      return root.tappable;
    });
  } else {
    // Browser global scope
    factory(root, window.document);
  }
}(this, function(w, d){

  var abs = Math.abs,
    noop = function(){},
    defaults = {
      noScroll: false,
      activeClass: 'tappable-active',
      onTap: noop,
      onStart: noop,
      onMove: noop,
      onMoveOut: noop,
      onMoveIn: noop,
      onEnd: noop,
      onCancel: noop,
      allowClick: false,
      boundMargin: 50,
      noScrollDelay: 0,
      activeClassDelay: 0,
      inactiveClassDelay: 0
    },
    supportTouch = 'ontouchend' in document,
    events = {
      start: supportTouch ? 'touchstart' : 'mousedown',
      move: supportTouch ? 'touchmove' : 'mousemove',
      end: supportTouch ? 'touchend' : 'mouseup'
    },
    getTargetByCoords = function(x, y){
      var el = d.elementFromPoint(x, y);
      if (el.nodeType == 3) el = el.parentNode;
      return el;
    },
    getTarget = function(e){
      var el = e.target;
      if (el) {
        if (el.nodeType == 3) el = el.parentNode;
        return el;
      }
      var touch = e.targetTouches[0];
      return getTargetByCoords(touch.clientX, touch.clientY);
    },
    clean = function(str){
      return str.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
    },
    addClass = function(el, className){
      if (!className) return;
      if (el.classList){
        el.classList.add(className);
        return;
      }
      if (clean(el.className).indexOf(className) > -1) return;
      el.className = clean(el.className + ' ' + className);
    },
    removeClass = function(el, className){
      if (!className) return;
      if (el.classList){
        el.classList.remove(className);
        return;
      }
      el.className = el.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)'), '$1');
    },
    matchesSelector = function(node, selector){
      var root = d.documentElement,
        matches = root.matchesSelector || root.mozMatchesSelector || root.webkitMatchesSelector || root.oMatchesSelector || root.msMatchesSelector;
      return matches.call(node, selector);
    },
    closest = function(node, selector){
      var matches = false;
      do {
        matches = matchesSelector(node, selector);
      } while (!matches && (node = node.parentNode) && node.ownerDocument);
      return matches ? node : false;
    };

  w.tappable = function(selector, opts){
    if (typeof opts == 'function') opts = { onTap: opts };
    var options = {};
    for (var key in defaults) options[key] = opts[key] || defaults[key];

    var el = options.containerElement || d.body,
      startTarget,
      prevTarget,
      startX,
      startY,
      elBound,
      cancel = false,
      moveOut = false,
      activeClass = options.activeClass,
      activeClassDelay = options.activeClassDelay,
      activeClassTimeout,
      inactiveClassDelay = options.inactiveClassDelay,
      inactiveClassTimeout,
      noScroll = options.noScroll,
      noScrollDelay = options.noScrollDelay,
      noScrollTimeout,
      boundMargin = options.boundMargin;

    var onStart = function(e){
      var target = closest(getTarget(e), selector);
      if (!target) return;

      if (activeClassDelay){
        clearTimeout(activeClassTimeout);
        activeClassTimeout = setTimeout(function(){
          addClass(target, activeClass);
        }, activeClassDelay);
      } else {
        addClass(target, activeClass);
      }
      if (inactiveClassDelay && target == prevTarget) clearTimeout(inactiveClassTimeout);

      startX = e.clientX;
      startY = e.clientY;
      if (!startX || !startY){
        var touch = e.targetTouches[0];
        startX = touch.clientX;
        startY = touch.clientY;
      }
      startTarget = target;
      cancel = false;
      moveOut = false;
      elBound = noScroll ? target.getBoundingClientRect() : null;

      if (noScrollDelay){
        clearTimeout(noScrollTimeout);
        noScroll = false; // set false first, then true after a delay
        noScrollTimeout = setTimeout(function(){
          noScroll = true;
        }, noScrollDelay);
      }
      options.onStart.call(el, e, target);
    };

    var onMove = function(e){
      if (!startTarget) return;

      if (noScroll){
        e.preventDefault();
      } else {
        clearTimeout(activeClassTimeout);
      }

      var target = e.target,
        x = e.clientX,
        y = e.clientY;
      if (!target || !x || !y){ // The event might have a target but no clientX/Y
        var touch = e.changedTouches[0];
        if (!x) x = touch.clientX;
        if (!y) y = touch.clientY;
        if (!target) target = getTargetByCoords(x, y);
      }

      if (noScroll){
        if (x>elBound.left-boundMargin && x<elBound.right+boundMargin && y>elBound.top-boundMargin && y<elBound.bottom+boundMargin){ // within element's boundary
          moveOut = false;
          addClass(startTarget, activeClass);
          options.onMoveIn.call(el, e, target);
        } else {
          moveOut = true;
          removeClass(startTarget, activeClass);
          options.onMoveOut.call(el, e, target);
        }
      } else if (!cancel && abs(y - startY) > 10){
        cancel = true;
        removeClass(startTarget, activeClass);
        options.onCancel.call(target, e);
      }

      options.onMove.call(el, e, target);
    };

    var onEnd = function(e){
      if (!startTarget) return;

      clearTimeout(activeClassTimeout);
      if (inactiveClassDelay){
        if (activeClassDelay && !cancel) addClass(startTarget, activeClass);
        var activeTarget = startTarget;
        inactiveClassTimeout = setTimeout(function(){
          removeClass(activeTarget, activeClass);
        }, inactiveClassDelay);
      } else {
        removeClass(startTarget, activeClass);
      }

      options.onEnd.call(el, e, startTarget);

      var rightClick = e.which == 3 || e.button == 2;
      if (!cancel && !moveOut && !rightClick){
        options.onTap.call(el, e, startTarget);
      }

      prevTarget = startTarget;
      startTarget = null;
      setTimeout(function(){
        startX = startY = null;
      }, 400);
    };

    var onCancel = function(e){
      if (!startTarget) return;
      removeClass(startTarget, activeClass);
      startTarget = startX = startY = null;
      options.onCancel.call(el, e);
    };

    var onClick = function(e){
      var target = closest(e.target, selector);
      if (target){
        e.preventDefault();
      } else if (startX && startY && abs(e.clientX - startX) < 25 && abs(e.clientY - startY) < 25){
        e.stopPropagation();
        e.preventDefault();
      }
    };

    if ( el.addEventListener ) { // ie8 returns errors and prevents newdash from loading. see https://github.com/Automattic/beep-beep-boop/issues/138
    el.addEventListener(events.start, onStart, false);

    el.addEventListener(events.move, onMove, false);

    el.addEventListener(events.end, onEnd, false);

    el.addEventListener('touchcancel', onCancel, false);

    if (!options.allowClick) el.addEventListener('click', onClick, false);
    }

    return {
      el : el,
      destroy : function () {
        el.removeEventListener(events.start, onStart, false);
        el.removeEventListener(events.move, onMove, false);
        el.removeEventListener(events.end, onEnd, false);
        el.removeEventListener('touchcancel', onCancel, false);
        if (!options.allowClick) el.removeEventListener('click', onClick, false);

        return this;
      }
    };

  };

}));

;
require( [
	'tappable'
], function(
	tappable
){
	var $ = jQuery;

	var wpcom_newdash_smallscreen = {
		firstTime: true,
		alwaysOnFirstTime: true,
		appbodyLeft: 0,

		init: function() {
			$( 'body' ).addClass( 'smallscreen' );

			var $sidebar_toggle = $( 'body.smallscreen div.content-header div.sidebar-toggle' );
			if ( $sidebar_toggle.length <= 0 ) {
				$( 'body.smallscreen div.content-header' ).append( '<div class="sidebar-toggle"></div>' );
			}

			// TODO load tappable.js dynamically here.

			if ( this.firstTime ) {
				// Hide the address bar!
				wpcom_newdash_smallscreen.toolbarToTop();

				this.setToolbarTitle();

				tappable( 'body.smallscreen div.content-header div.sidebar-toggle', {
					noScroll: true,
					onTap: function(e, target){
						wpcom_newdash_smallscreen.toggleSidebar();

						$( 'body.smallscreen' ).find( '#sidebar' ).removeClass( 'hide' );
						e.preventDefault();
						e.stopPropagation();
					}
				} );

				tappable( 'body.smallscreen div.right-column-outer.open', {
					noScroll: false,
					onTap: function(e, target){
						wpcom_newdash_smallscreen.toggleSidebar( 'close' );
						e.preventDefault();
						e.stopPropagation();
					}
				} );

				$( '#wpadminbar ul#wp-admin-bar-newdash-default' ).on( 'click', 'li > a.ab-item', function(e) {
					var title = $( this ).html(),
						menu = $( 'body.smallscreen a.ab-item span.newdash-title' );

					menu.html( title );

					setTimeout(function(){
						window.scrollTo(0, 1);
					}, 0);

					setTimeout( function() {
						$( 'body.smallscreen li#wp-admin-bar-newdash' ).removeClass( 'hover' );
						menu.css( { backgroundPosition: ( menu.outerWidth() - 20 ) + 'px 24px' } );
					}, 10 );

					wpcom_newdash.router.setRoute( $(this).attr( 'href' ) );
				});

				tappable( 'body.smallscreen #dash-nav', {
					onTap: function(e, target){
						var $nav = $(e.target).closest( 'nav' );

						$( 'nav#dash-nav-sub' ).removeClass( 'active' );
						wpcom_newdash_smallscreen.toggleMenu( e, $nav );
					}
				});

				tappable( 'html.touch header nav a', {
					noScroll: false,
					onTap: function( e, target ) {
						if ( ! target.href ) {
							return;
						}

						window.wpcom_newdash.router.setRoute( target.pathname + target.search );
					}
				});

				$( 'body.smallscreen #wp-admin-bar-my-account' ).on( 'click.newdashSmall', 'a', function(e) {
					e.stopPropagation();
					e.preventDefault();
				});

				this.firstTime = false;
			}
		},

		toggleMenu: function( e, $nav ) {
			var anchor,
				path,
				basePath,
				basePaths,
				$target = $(e.target);

			if ( !$target.parent().hasClass( 'menupop' ) && !$target.hasClass( 'menu-toggle' ) ) {
				if ( e.target.nodeName == 'SPAN' )
					$target = $target.parent( 'a' );

				if ( $target.length === 0 || ! $target.attr('href') )
					return;

				anchor = $target[0];
				path = anchor.pathname;

				if ( path[0] != '/' ) {
					path = '/' + path;
				}

				basePaths = wpcom_newdash.getBasePaths();
				basePath = path.split('/')[1];

				if ( ( /^\/?$/.test( path ) || $.inArray( basePath, basePaths ) !== -1 ) &&
						anchor.protocol === window.location.protocol &&
						anchor.hostname === window.location.hostname ) {
					wpcom_newdash.router.setRoute( path + anchor.search );
				} else {
					window.location.href = $target.attr('href');
				}
				wpcom_newdash_smallscreen.toolbarToTop();
				$nav.removeClass( 'active' );

				return;
			}

			$(document).on( 'click.offmenu', function(e) {
				if ( $(e.target).parents( 'nav' ).length )
					return false;

				e.preventDefault();
				$nav.removeClass( 'active' );
				$(document).off( 'click.offmenu' );
			} );

			$nav.toggleClass( 'active' );
		},

		toggleSidebar: function( direction ) {
			var rightColumn = $( 'body.smallscreen' ).find( '.right-column-outer' ),
				sidebar = $( 'body.smallscreen' ).find( '#sidebar' ),
				openSidebar = function() {
					this.appbodyLeft = 262;
					sidebar.addClass( 'show' );
					rightColumn.addClass( 'transition open' ).css( { '-webkit-transform': 'translate3d( ' + this.appbodyLeft + 'px, 0, 0 )', 'transform': 'translate3d( ' + this.appbodyLeft + 'px, 0, 0 )' } );
				},
				closeSidebar = function() {
					this.appbodyLeft = 0;
					rightColumn.removeClass( 'open' ).css( { '-webkit-transform': 'translate3d( ' + this.appbodyLeft + 'px, 0, 0 )', 'transform': 'translate3d( ' + this.appbodyLeft + 'px, 0, 0 )' } );

					setTimeout( function() {
						sidebar.removeClass( 'show' );
						rightColumn.removeClass( 'transition').attr( 'style', '' ); // need to remove transform property to avoid rendering issues
					}, 250 );
				}

			// allows specific direction
			if ( 'undefined' !== typeof direction ) {
				if ( 'open' === direction ) {
					openSidebar();
				} else {
					closeSidebar();
				}
			} else if ( ! rightColumn.hasClass( 'open' ) ) {
				openSidebar();
			} else {
				closeSidebar();
			}
		},

		loadSubPage: function($target) {
			var route;
			$( 'li', 'body.smallscreen div#sidebar ul' ).removeClass( 'selected' );

			if ( $target.parent( 'ul' ).length ) {
				$target.addClass( 'selected' );
				route = $target.children( 'a' ).attr( 'href' );
			} else if ( $target.parent( 'li' ).length ) {
				$target.parent( 'li' ).addClass( 'selected' );
				route = $target.attr( 'href' );
			} else {
				route = $target.parent( 'a' ).attr( 'href' );
			}

			wpcom_newdash_smallscreen.toggleSidebar( 'close' );
			setTimeout( function() { wpcom_newdash.router.setRoute( route ); }, 300 );
		},

		setToolbarTitle: function() {
			$( 'body.smallscreen li#wp-admin-bar-newdash > a' ).append( '<span class="newdash-title"></span>' );

			var title = '';
			$.each( $( 'body.smallscreen ul#wp-admin-bar-newdash-default > li' ), function( i, el ) {
				var anc = $( el ).children( 'a.ab-item' ),
					href = anc.attr( 'href' ).split( '#!' ),
					menu = $( 'span.newdash-title', 'body.smallscreen li#wp-admin-bar-newdash > a' );

				href = '#!' + href[1];
				if ( -1 != location.hash.search( href ) )
					menu.html( anc.html() ).css( { backgroundPosition: ( menu.outerWidth() - 20 ) + 'px 24px' } );
			});
		},

		toolbarToTop: function() {
			setTimeout( function(){
				window.scrollTo(0, 1);
			}, 10 );
		},

		alwaysOn: function() {
			if ( this.alwaysOnFirstTime ) {
				$( 'html:not(.touch) body.smallscreen div.content-header div.sidebar-toggle' ).click( function( e ) {
					wpcom_newdash_smallscreen.toggleSidebar();

					$( 'body.smallscreen' ).find( '#sidebar' ).removeClass( 'hide' );
					e.preventDefault();
					e.stopPropagation();
				} );

				tappable( 'html.touch #sidebar li', {
					noScroll: false,
					onTap: function(e, target) {
						e.preventDefault();
						var $target = $(e.target);

						if ( $target.attr( 'id' ) == 'add-topic-input' || $target.parents( 'li#add-topic-input' ).length ) {
							// Add topic form
							return false;
						} else if ( $target.attr( 'id' ) == 'add-list-input' || $target.parents( 'li#add-list-input' ).length ) {
							// Add list form
							return false;
						} else if ( target.nodeName == 'SPAN' && $target.parent( 'a.remove-topic' ).length ) {
							// Remove topic X
							return false;
						} else if ( target.nodeName == 'SPAN' && $target.parent( 'a.topics' ).length ) {
							wpcom_newdash_smallscreen.loadSubPage($target.parents( 'a.topics' ));
							return false;
						} else if ( target.nodeName == 'SPAN' && $target.parents( 'a.edit' ).length ) {
							// Edit list link
							wpcom_newdash_smallscreen.loadSubPage($target.parents( 'a.edit' ));
							return false;
						} else {
							wpcom_newdash_smallscreen.loadSubPage( $target );
							return false;
						}
					}
				});

				$( 'html.touch' ).on( 'click', '#sidebar li a', function(e) {
					e.stopPropagation();
					e.preventDefault();
				});

				$( 'html.touch' ).on( 'click', '.addblog input', function(e) {
					e.stopPropagation();
					e.preventDefault();
				});

				this.alwaysOnFirstTime = false;
			}
		}
	};

	$( document ).ready( function() {
		var wpcom_newdash_smallscreen_interval = setInterval( function() {
			if ( $(document).width() <= 772 ) {
				wpcom_newdash_smallscreen.init();
			} else {
				$( 'body.smallscreen #wp-admin-bar-my-account' ).off( '.newdashSmall' );
				$( 'body' ).removeClass( 'smallscreen' );
			}
			wpcom_newdash_smallscreen.alwaysOn();
		}, 1000 );

		tappable( 'html.touch body.smallscreen .wpcom-sections .menu-toggle', {
			noScroll: false,
			onTap: function( e, target ) {
				if ( $( document ).width() > 480 ) {
					return;
				}

				e.stopPropagation();
				e.preventDefault();

				var $el = $( e.target ).closest( '.menu-toggle' );

				if ( ! $el.hasClass( 'tapped' ) ) {
					$el.addClass( 'tapped' );
					$el.parent().addClass( 'tapped' );
					$( 'body' ).addClass( 'tapped-open' );
				} else {
					$el.removeClass( 'tapped' );
					$el.parent().removeClass( 'tapped' );
					$( 'body' ).removeClass( 'tapped-open' );
				}

				return false;
			}
		});

		tappable( 'html.touch #wp-admin-bar-my-account', {
			noScroll: false,
			onTap: function( e, target ) {
				var $el = $( e.target ).closest( '#wp-admin-bar-my-account' );

				if ( ! $el.hasClass( 'tapped' ) ) {
					$el.addClass( 'tapped' );
					$( 'body' ).addClass( 'tapped-open' );
				} else {
					$el.removeClass( 'tapped' );
					$( 'body' ).removeClass( 'tapped-open' );
				}
			}
		});

		tappable( 'html.touch body.tapped-open', {
			noScroll: false,
			onTap: function( e, target ) {
				if ( $( e.target ).closest( 'tapped' ).length ) {
					return;
				}
				$( '#wp-admin-bar-my-account' ).removeClass( 'tapped' );
				$( '.wpcom-sections .menu-toggle' ).removeClass( 'tapped' ).parent().removeClass( 'tapped' );
				$( 'body' ).removeClass( 'tapped-open' );
			}
		});
	});

	// remove any class artifacts from a mid-process action (like expanded sidebar from portrait view)
	$( window ).on( 'orientationchange', function() {
		wpcom_newdash_smallscreen.toggleSidebar( 'close' );
	} );

} );
;
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */



var Hogan = {};

(function (Hogan, useArrayBuffer) {
  Hogan.Template = function (renderFunc, text, compiler, options) {
    this.r = renderFunc || this.r;
    this.c = compiler;
    this.options = options;
    this.text = text || '';
    this.buf = (useArrayBuffer) ? [] : '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // tries to find a partial in the curent scope and render it
    rp: function(name, context, partials, indent) {
      var partial = partials[name];

      if (!partial) {
        return '';
      }

      if (this.c && typeof partial == 'string') {
        partial = this.c.compile(partial, this.options);
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ls(val, ctx, partials, inverted, start, end, tags);
      }

      pass = (val === '') || !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        return ctx[ctx.length - 1];
      }

      for (var i = 1; i < names.length; i++) {
        if (val && typeof val == 'object' && names[i] in val) {
          cx = val;
          val = val[names[i]];
        } else {
          val = '';
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.lv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && key in v) {
          val = v[key];
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.lv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ho: function(val, cx, partials, text, tags) {
      var compiler = this.c;
      var options = this.options;
      options.delimiters = tags;
      var text = val.call(cx, text);
      text = (text == null) ? String(text) : text.toString();
      this.b(compiler.compile(text, options).render(cx, partials));
      return false;
    },

    // template result buffering
    b: (useArrayBuffer) ? function(s) { this.buf.push(s); } :
                          function(s) { this.buf += s; },
    fl: (useArrayBuffer) ? function() { var r = this.buf.join(''); this.buf = []; return r; } :
                           function() { var r = this.buf; this.buf = ''; return r; },

    // lambda replace section
    ls: function(val, ctx, partials, inverted, start, end, tags) {
      var cx = ctx[ctx.length - 1],
          t = null;

      if (!inverted && this.c && val.length > 0) {
        return this.ho(val, cx, partials, this.text.substring(start, end), tags);
      }

      t = val.call(cx);

      if (typeof t == 'function') {
        if (inverted) {
          return true;
        } else if (this.c) {
          return this.ho(t, cx, partials, this.text.substring(start, end), tags);
        }
      }

      return t;
    },

    // lambda replace variable
    lv: function(val, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = val.call(cx);

      if (typeof result == 'function') {
        result = coerceToString(result.call(cx));
        if (this.c && ~result.indexOf("{\u007B")) {
          return this.c.compile(result, this.options).render(cx, partials);
        }
      }

      return coerceToString(result);
    }

  };

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos =/\'/g,
      rQuot = /\"/g,
      hChars =/[&<>\"\']/;


  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp,'&amp;')
        .replace(rLt,'&lt;')
        .replace(rGt,'&gt;')
        .replace(rApos,'&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);




(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      tagTypes = {
        '#': 1, '^': 2, '/': 3,  '!': 4, '>': 5,
        '<': 6, '=': 7, '_v': 8, '{': 9, '&': 10
      };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push(new String(buf));
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v']) ||
          (!tokens[j].tag && tokens[j].match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (!tokens[j].tag) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = tagTypes[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - ctag.length : i + otag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        token = null;

    while (tokens.length > 0) {
      token = tokens.shift();
      if (token.tag == '#' || token.tag == '^' || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
        instructions.push(token);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else {
        instructions.push(token);
      }
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  Hogan.generate = function (tree, text, options) {
    var code = 'var _=this;_.b(i=i||"");' + walk(tree) + 'return _.fl();';
    if (options.asString) {
      return 'function(c,p,i){' + code + ';}';
    }

    return new Hogan.Template(new Function('c', 'p', 'i', code), text, Hogan, options);
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function walk(tree) {
    var code = '';
    for (var i = 0, l = tree.length; i < l; i++) {
      var tag = tree[i].tag;
      if (tag == '#') {
        code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n),
                        tree[i].i, tree[i].end, tree[i].otag + " " + tree[i].ctag);
      } else if (tag == '^') {
        code += invertedSection(tree[i].nodes, tree[i].n,
                                chooseMethod(tree[i].n));
      } else if (tag == '<' || tag == '>') {
        code += partial(tree[i]);
      } else if (tag == '{' || tag == '&') {
        code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '\n') {
        code += text('"\\n"' + (tree.length-1 == i ? '' : ' + i'));
      } else if (tag == '_v') {
        code += variable(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag === undefined) {
        code += text('"' + esc(tree[i]) + '"');
      }
    }
    return code;
  }

  function section(nodes, id, method, start, end, tags) {
    return 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),' +
           'c,p,0,' + start + ',' + end + ',"' + tags + '")){' +
           '_.rs(c,p,' +
           'function(c,p,_){' +
           walk(nodes) +
           '});c.pop();}';
  }

  function invertedSection(nodes, id, method) {
    return 'if(!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0,"")){' +
           walk(nodes) +
           '};';
  }

  function partial(tok) {
    return '_.b(_.rp("' +  esc(tok.n) + '",c,p,"' + (tok.indent || '') + '"));';
  }

  function tripleStache(id, method) {
    return '_.b(_.t(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function variable(id, method) {
    return '_.b(_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function text(id) {
    return '_.b(' + id + ');';
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  },

  Hogan.cache = {};

  Hogan.compile = function(text, options) {
    // options
    //
    // asString: false (default)
    //
    // sectionTags: [{o: '_foo', c: 'foo'}]
    // An array of object with o and c fields that indicate names for custom
    // section tags. The example above allows parsing of {{_foo}}{{/foo}}.
    //
    // delimiters: A string that overrides the default delimiters.
    // Example: "<% %>"
    //
    options = options || {};

    var key = text + '||' + !!options.asString;

    var t = this.cache[key];

    if (t) {
      return t;
    }

    t = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = t;
  };
})(typeof exports !== 'undefined' ? exports : Hogan);

;
/*
Copyright 2012 Igor Vaynberg
 
Version: 3.1 Timestamp: Tue Aug 14 09:05:17 PDT 2012

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in
compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is
distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
(function(e){"undefined"==typeof e.fn.each2&&e.fn.extend({each2:function(g){for(var n=e([0]),h=-1,m=this.length;++h<m&&(n.context=n[0]=this[h])&&!1!==g.call(n[0],h,n););return this}})})(jQuery);
(function(e,g){function n(a){return a&&"string"===typeof a?a.replace(/&/g,"&amp;"):a}function h(a,b){var c=0,d=b.length,i;if("undefined"===typeof a)return-1;if(a.constructor===String)for(;c<d;c+=1){if(0===a.localeCompare(b[c]))return c}else for(;c<d;c+=1)if(i=b[c],i.constructor===String){if(0===i.localeCompare(a))return c}else if(i===a)return c;return-1}function m(a,b){return a===b?!0:a===g||b===g||null===a||null===b?!1:a.constructor===String?0===a.localeCompare(b):b.constructor===String?0===b.localeCompare(a):
!1}function z(a,b){var c,d,i;if(null===a||1>a.length)return[];c=a.split(b);d=0;for(i=c.length;d<i;d+=1)c[d]=e.trim(c[d]);return c}function A(a,b){var c;return function(){window.clearTimeout(c);c=window.setTimeout(b,a)}}function k(a){a.preventDefault();a.stopPropagation()}function B(a,b,c){var d=a.toUpperCase().indexOf(b.toUpperCase()),b=b.length;0>d?c.push(a):(c.push(a.substring(0,d)),c.push("<span class='select2-match'>"),c.push(a.substring(d,d+b)),c.push("</span>"),c.push(a.substring(d+b,a.length)))}
function C(a){var b,c=0,d=null,i=a.quietMillis||100;return function(j){window.clearTimeout(b);b=window.setTimeout(function(){var b=c+=1,i=a.data,f=a.transport||e.ajax,g=a.traditional||!1,I=a.type||"GET",i=i.call(this,j.term,j.page,j.context);null!==d&&d.abort();d=f.call(null,{url:a.url,dataType:a.dataType,data:i,type:I,traditional:g,success:function(d){b<c||(d=a.results(d,j.page),j.callback(d))}})},i)}}function D(a){var b=a,c,d=function(a){return""+a.text};e.isArray(b)||(d=b.text,e.isFunction(d)||
(c=b.text,d=function(a){return a[c]}),b=b.results);return function(a){var c=a.term,f={};if(c==="")a.callback({results:b});else{f.results=e(b).filter(function(){return a.matcher(c,d(this))}).get();a.callback(f)}}}function E(a){return e.isFunction(a)?a:function(b){var c=b.term,d={results:[]};e(a).each(function(){var a=this.text!==g,e=a?this.text:this;if(""===c||b.matcher(c,e))d.results.push(a?this:{id:this,text:this})});b.callback(d)}}function t(a){if(e.isFunction(a))return!0;if(!a)return!1;throw Error("formatterName must be a function or a falsy value");
}function u(a){return e.isFunction(a)?a():a}function F(a){var b=0;e.each(a,function(a,d){d.children?b+=F(d.children):b++});return b}function J(a,b,c,d){var i=a,e=!1,f,r,o,l;if(!d.createSearchChoice||!d.tokenSeparators||1>d.tokenSeparators.length)return g;for(;;){e=-1;r=0;for(o=d.tokenSeparators.length;r<o&&!(l=d.tokenSeparators[r],e=a.indexOf(l),0<=e);r++);if(0>e)break;f=a.substring(0,e);a=a.substring(e+l.length);if(0<f.length&&(f=d.createSearchChoice(f,b),f!==g&&null!==f&&d.id(f)!==g&&null!==d.id(f))){e=
!1;r=0;for(o=b.length;r<o;r++)if(m(d.id(f),d.id(b[r]))){e=!0;break}e||c(f)}}if(0!=i.localeCompare(a))return a}function w(a,b){var c=function(){};c.prototype=new a;c.prototype.constructor=c;c.prototype.parent=a.prototype;c.prototype=e.extend(c.prototype,b);return c}if(window.Select2===g){var f,v,x,y,G,q;f={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){a=a.which?a.which:a;switch(a){case f.LEFT:case f.RIGHT:case f.UP:case f.DOWN:return!0}return!1},
isControl:function(a){switch(a.which){case f.SHIFT:case f.CTRL:case f.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){a=a.which?a.which:a;return 112<=a&&123>=a}};var K=1;G=function(){return K++};e(document).delegate("*","mousemove",function(a){e.data(document,"select2-lastpos",{x:a.pageX,y:a.pageY})});e(document).ready(function(){e(document).delegate("*","mousedown touchend",function(a){var b=e(a.target).closest("div.select2-container").get(0),c;b?e(document).find("div.select2-container-active").each(function(){this!==
b&&e(this).data("select2").blur()}):(b=e(a.target).closest("div.select2-drop").get(0),e(document).find("div.select2-drop-active").each(function(){this!==b&&e(this).data("select2").blur()}));b=e(a.target);c=b.attr("for");"LABEL"===a.target.tagName&&(c&&0<c.length)&&(b=e("#"+c),b=b.data("select2"),b!==g&&(b.focus(),a.preventDefault()))})});v=w(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(a){var b,c;this.opts=a=this.prepareOpts(a);this.id=a.id;a.element.data("select2")!==
g&&null!==a.element.data("select2")&&this.destroy();this.enabled=!0;this.container=this.createContainer();this.containerId="s2id"+G();this.container.attr("id",this.containerId);var d=!1,i;this.body=function(){!1===d&&(i=a.element.closest("body"),d=!0);return i};a.element.attr("class")!==g&&this.container.addClass(a.element.attr("class"));this.container.css(u(a.containerCss));this.container.addClass(u(a.containerCssClass));this.opts.element.data("select2",this).hide().before(this.container);this.container.data("select2",
this);this.dropdown=this.container.find(".select2-drop");this.dropdown.addClass(u(a.dropdownCssClass));this.dropdown.data("select2",this);this.results=b=this.container.find(".select2-results");this.search=c=this.container.find("input.select2-input");c.attr("tabIndex",this.opts.element.attr("tabIndex"));this.resultsPage=0;this.context=null;this.initContainer();this.initContainerWidth();this.results.bind("mousemove",function(a){var b=e.data(document,"select2-lastpos");(b===g||b.x!==a.pageX||b.y!==a.pageY)&&
e(a.target).trigger("mousemove-filtered",a)});this.dropdown.delegate(".select2-results","mousemove-filtered",this.bind(this.highlightUnderEvent));var f=this.results,H=A(80,function(a){f.trigger("scroll-debounced",a)});f.bind("scroll",function(a){0<=h(a.target,f.get())&&H(a)});this.dropdown.delegate(".select2-results","scroll-debounced",this.bind(this.loadMoreIfNeeded));e.fn.mousewheel&&b.mousewheel(function(a,c,d,e){c=b.scrollTop();0<e&&0>=c-e?(b.scrollTop(0),k(a)):0>e&&b.get(0).scrollHeight-b.scrollTop()+
e<=b.height()&&(b.scrollTop(b.get(0).scrollHeight-b.height()),k(a))});c.bind("keydown",function(){e.data(c,"keyup-change-value")===g&&e.data(c,"keyup-change-value",c.val())});c.bind("keyup",function(){var a=e.data(c,"keyup-change-value");a!==g&&c.val()!==a&&(e.removeData(c,"keyup-change-value"),c.trigger("keyup-change"))});c.bind("keyup-change",this.bind(this.updateResults));c.bind("focus",function(){c.addClass("select2-focused");" "===c.val()&&c.val("")});c.bind("blur",function(){c.removeClass("select2-focused")});
this.dropdown.delegate(".select2-results","mouseup",this.bind(function(a){0<e(a.target).closest(".select2-result-selectable:not(.select2-disabled)").length?(this.highlightUnderEvent(a),this.selectHighlighted(a)):this.focusSearch();k(a)}));this.dropdown.bind("click mouseup mousedown",function(a){a.stopPropagation()});e.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource());(a.element.is(":disabled")||a.element.is("[readonly='readonly']"))&&this.disable()},destroy:function(){var a=
this.opts.element.data("select2");a!==g&&(a.container.remove(),a.dropdown.remove(),a.opts.element.removeData("select2").unbind(".select2").show())},prepareOpts:function(a){var b,c,d;b=a.element;"select"===b.get(0).tagName.toLowerCase()&&(this.select=c=a.element);c&&e.each("id multiple ajax query createSearchChoice initSelection data tags".split(" "),function(){if(this in a)throw Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.");});a=e.extend({},{populateResults:function(b,
c,d){var f,o=this.opts.id,l=this;f=function(b,c,i){var j,k,h,m,s,p,q;j=0;for(k=b.length;j<k;j=j+1){h=b[j];m=o(h)!==g;s="children"in h&&h.children.length>0;p=e("<li></li>");p.addClass("select2-results-dept-"+i);p.addClass("select2-result");p.addClass(m?"select2-result-selectable":"select2-result-unselectable");s&&p.addClass("select2-result-with-children");p.addClass(l.opts.formatResultCssClass(h));m=e("<div></div>");m.addClass("select2-result-label");q=a.formatResult(h,m,d);q!==g&&m.html(n(q));p.append(m);
if(s){s=e("<ul></ul>");s.addClass("select2-result-sub");f(h.children,s,i+1);p.append(s)}p.data("select2-data",h);c.append(p)}};f(c,b,0)}},e.fn.select2.defaults,a);"function"!==typeof a.id&&(d=a.id,a.id=function(a){return a[d]});if(c)a.query=this.bind(function(a){var c={results:[],more:false},d=a.term,f,o,l;l=function(b,c){var e;if(b.is("option"))a.matcher(d,b.text(),b)&&c.push({id:b.attr("value"),text:b.text(),element:b.get(),css:b.attr("class")});else if(b.is("optgroup")){e={text:b.attr("label"),
children:[],element:b.get(),css:b.attr("class")};b.children().each2(function(a,b){l(b,e.children)});e.children.length>0&&c.push(e)}};f=b.children();if(this.getPlaceholder()!==g&&f.length>0){o=f[0];e(o).text()===""&&(f=f.not(o))}f.each2(function(a,b){l(b,c.results)});a.callback(c)}),a.id=function(a){return a.id},a.formatResultCssClass=function(a){return a.css};else if(!("query"in a))if("ajax"in a){if((c=a.element.data("ajax-url"))&&0<c.length)a.ajax.url=c;a.query=C(a.ajax)}else"data"in a?a.query=D(a.data):
"tags"in a&&(a.query=E(a.tags),a.createSearchChoice=function(a){return{id:a,text:a}},a.initSelection=function(b,c){var d=[];e(z(b.val(),a.separator)).each(function(){var b=this,c=this,i=a.tags;e.isFunction(i)&&(i=i());e(i).each(function(){if(m(this.id,b)){c=this.text;return false}});d.push({id:b,text:c})});c(d)});if("function"!==typeof a.query)throw"query function not defined for Select2 "+a.element.attr("id");return a},monitorSource:function(){this.opts.element.bind("change.select2",this.bind(function(){!0!==
this.opts.element.data("select2-change-triggered")&&this.initSelection()}))},triggerChange:function(a){a=a||{};a=e.extend({},a,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",!0);this.opts.element.trigger(a);this.opts.element.data("select2-change-triggered",!1);this.opts.element.click()},enable:function(){this.enabled||(this.enabled=!0,this.container.removeClass("select2-container-disabled"))},disable:function(){this.enabled&&(this.close(),this.enabled=!1,this.container.addClass("select2-container-disabled"))},
opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var a=this.container.offset(),b=this.container.outerHeight(),c=this.container.outerWidth(),d=this.dropdown.outerHeight(),i=e(window).scrollTop()+document.documentElement.clientHeight,b=a.top+b,i=b+d<=i,f=a.top-d>=this.body().scrollTop(),g;this.dropdown.hasClass("select2-drop-above")?(g=!0,!f&&i&&(g=!1)):(g=!1,!i&&f&&(g=!0));g?(b=a.top-d,this.container.addClass("select2-drop-above"),this.dropdown.addClass("select2-drop-above")):
(this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above"));this.dropdown.css({top:b,left:a.left,width:c})},shouldOpen:function(){var a;if(this.opened())return!1;a=jQuery.Event("open");this.opts.element.trigger(a);return!a.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen())return!1;window.setTimeout(this.bind(this.opening),
1);return!0},opening:function(){var a=this.containerId,b="#"+a,c="scroll."+a,d="resize."+a;this.container.parents().each(function(){e(this).bind(c,function(){var a=e(b);0==a.length&&e(this).unbind(c);a.select2("close")})});e(window).bind(d,function(){var a=e(b);0==a.length&&e(window).unbind(d);a.select2("close")});this.clearDropdownAlignmentPreference();" "===this.search.val()&&this.search.val("");this.dropdown.css(u(this.opts.dropdownCss));this.dropdown.addClass("select2-drop-active");this.container.addClass("select2-dropdown-open").addClass("select2-container-active");
this.updateResults(!0);this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body());this.dropdown.show();this.ensureHighlightVisible();this.positionDropdown();this.focusSearch()},close:function(){if(this.opened()){var a=this;this.container.parents().each(function(){e(this).unbind("scroll."+a.containerId)});e(window).unbind("resize."+this.containerId);this.clearDropdownAlignmentPreference();this.dropdown.hide();this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
this.results.empty();this.clearSearch();this.opts.element.trigger(jQuery.Event("close"))}},clearSearch:function(){},ensureHighlightVisible:function(){var a=this.results,b,c,d,f;c=this.highlight();0>c||(0==c?a.scrollTop(0):(b=a.find(".select2-result-selectable"),d=e(b[c]),f=d.offset().top+d.outerHeight(),c===b.length-1&&(b=a.find("li.select2-more-results"),0<b.length&&(f=b.offset().top+b.outerHeight())),b=a.offset().top+a.outerHeight(),f>b&&a.scrollTop(a.scrollTop()+(f-b)),d=d.offset().top-a.offset().top,
0>d&&a.scrollTop(a.scrollTop()+d)))},moveHighlight:function(a){for(var b=this.results.find(".select2-result-selectable"),c=this.highlight();-1<c&&c<b.length;){var c=c+a,d=e(b[c]);if(d.hasClass("select2-result-selectable")&&!d.hasClass("select2-disabled")){this.highlight(c);break}}},highlight:function(a){var b=this.results.find(".select2-result-selectable").not(".select2-disabled");if(0===arguments.length)return h(b.filter(".select2-highlighted")[0],b.get());a>=b.length&&(a=b.length-1);0>a&&(a=0);
b.removeClass("select2-highlighted");e(b[a]).addClass("select2-highlighted");this.ensureHighlightVisible()},countSelectableResults:function(){return this.results.find(".select2-result-selectable").not(".select2-disabled").length},highlightUnderEvent:function(a){a=e(a.target).closest(".select2-result-selectable");if(0<a.length&&!a.is(".select2-highlighted")){var b=this.results.find(".select2-result-selectable");this.highlight(b.index(a))}else 0==a.length&&this.results.find(".select2-highlighted").removeClass("select2-highlighted")},
loadMoreIfNeeded:function(){var a=this.results,b=a.find("li.select2-more-results"),c,d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),0>=c&&(b.addClass("select2-active"),this.opts.query({term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){e.opts.populateResults.call(this,a,c.results,{term:f,page:d,context:g});!0===c.more?(b.detach().appendTo(a).text(e.opts.formatLoadMore(d+1)),window.setTimeout(function(){e.loadMoreIfNeeded()},
10)):b.remove();e.positionDropdown();e.resultsPage=d})})))},tokenize:function(){},updateResults:function(a){function b(){f.scrollTop(0);d.removeClass("select2-active");k.positionDropdown()}function c(a){f.html(n(a));b()}var d=this.search,f=this.results,j=this.opts,h,k=this;if(!(!0!==a&&(!1===this.showSearchInput||!this.opened()))){d.addClass("select2-active");if(1<=j.maximumSelectionSize&&(h=this.data(),e.isArray(h)&&h.length>=j.maximumSelectionSize&&t(j.formatSelectionTooBig,"formatSelectionTooBig"))){c("<li class='select2-selection-limit'>"+
j.formatSelectionTooBig(j.maximumSelectionSize)+"</li>");return}d.val().length<j.minimumInputLength&&t(j.formatInputTooShort,"formatInputTooShort")?c("<li class='select2-no-results'>"+j.formatInputTooShort(d.val(),j.minimumInputLength)+"</li>"):(c("<li class='select2-searching'>"+j.formatSearching()+"</li>"),h=this.tokenize(),h!=g&&null!=h&&d.val(h),this.resultsPage=1,j.query({term:d.val(),page:this.resultsPage,context:null,matcher:j.matcher,callback:this.bind(function(h){var l;this.context=h.context===
g?null:h.context;this.opts.createSearchChoice&&""!==d.val()&&(l=this.opts.createSearchChoice.call(null,d.val(),h.results),l!==g&&null!==l&&k.id(l)!==g&&null!==k.id(l)&&0===e(h.results).filter(function(){return m(k.id(this),k.id(l))}).length&&h.results.unshift(l));0===h.results.length&&t(j.formatNoMatches,"formatNoMatches")?c("<li class='select2-no-results'>"+j.formatNoMatches(d.val())+"</li>"):(f.empty(),k.opts.populateResults.call(this,f,h.results,{term:d.val(),page:this.resultsPage,context:null}),
!0===h.more&&t(j.formatLoadMore,"formatLoadMore")&&(f.append("<li class='select2-more-results'>"+n(j.formatLoadMore(this.resultsPage))+"</li>"),window.setTimeout(function(){k.loadMoreIfNeeded()},10)),this.postprocessResults(h,a),b())})}))}},cancel:function(){this.close()},blur:function(){this.close();this.container.removeClass("select2-container-active");this.dropdown.removeClass("select2-drop-active");this.search[0]===document.activeElement&&this.search.blur();this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},
focusSearch:function(){window.setTimeout(this.bind(function(){this.search.focus();this.search.val(this.search.val())}),10)},selectHighlighted:function(){var a=this.highlight(),b=this.results.find(".select2-highlighted").not(".select2-disabled"),c=b.closest(".select2-result-selectable").data("select2-data");c&&(b.addClass("select2-disabled"),this.highlight(a),this.onSelect(c))},getPlaceholder:function(){return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||
this.opts.placeholder},initContainerWidth:function(){var a=function(){var a,c,d,f;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth()?"auto":this.opts.element.outerWidth()+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){a=this.opts.element.attr("style");if(a!==g){a=a.split(";");d=0;for(f=a.length;d<f;d+=1)if(c=a[d].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/),null!==c&&1<=c.length)return c[1]}return"resolve"===
this.opts.width?(a=this.opts.element.css("width"),0<a.indexOf("%")?a:0===this.opts.element.outerWidth()?"auto":this.opts.element.outerWidth()+"px"):null}return e.isFunction(this.opts.width)?this.opts.width():this.opts.width}.call(this);null!==a&&this.container.attr("style","width: "+a)}});x=w(v,{createContainer:function(){return e("<div></div>",{"class":"select2-container"}).html("    <a href='javascript:void(0)' class='select2-choice'>   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>   <div><b></b></div></a>    <div class='select2-drop select2-offscreen'>   <div class='select2-search'>       <input type='text' autocomplete='off' class='select2-input'/>   </div>   <ul class='select2-results'>   </ul></div>")},
opening:function(){this.search.show();this.parent.opening.apply(this,arguments);this.dropdown.removeClass("select2-offscreen")},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show())},focus:function(){this.close();this.selection.focus()},isFocused:function(){return this.selection[0]===document.activeElement},cancel:function(){this.parent.cancel.apply(this,arguments);this.selection.focus()},
initContainer:function(){var a,b=this.dropdown;this.selection=a=this.container.find(".select2-choice");this.search.bind("keydown",this.bind(function(a){if(this.enabled)if(a.which===f.PAGE_UP||a.which===f.PAGE_DOWN)k(a);else if(this.opened())switch(a.which){case f.UP:case f.DOWN:this.moveHighlight(a.which===f.UP?-1:1);k(a);break;case f.TAB:case f.ENTER:this.selectHighlighted();k(a);break;case f.ESC:this.cancel(a),k(a)}else a.which===f.TAB||f.isControl(a)||f.isFunctionKey(a)||a.which===f.ESC||!1===
this.opts.openOnEnter&&a.which===f.ENTER||this.open()}));this.search.bind("focus",this.bind(function(){this.selection.attr("tabIndex","-1")}));this.search.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active");window.setTimeout(this.bind(function(){this.selection.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)}));a.bind("mousedown",this.bind(function(){this.opened()?(this.close(),this.selection.focus()):this.enabled&&this.open()}));b.bind("mousedown",
this.bind(function(){this.search.focus()}));a.bind("focus",this.bind(function(){this.container.addClass("select2-container-active");this.search.attr("tabIndex","-1")}));a.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active");window.setTimeout(this.bind(function(){this.search.attr("tabIndex",this.opts.element.attr("tabIndex"))}),10)}));a.bind("keydown",this.bind(function(a){if(this.enabled)if(a.which===f.PAGE_UP||a.which===f.PAGE_DOWN)k(a);else if(!(a.which===
f.TAB||f.isControl(a)||f.isFunctionKey(a)||a.which===f.ESC)&&!(!1===this.opts.openOnEnter&&a.which===f.ENTER))if(a.which==f.DELETE)this.opts.allowClear&&this.clear();else{this.open();if(a.which!==f.ENTER&&!(48>a.which)){var b=String.fromCharCode(a.which).toLowerCase();a.shiftKey&&(b=b.toUpperCase());this.search.focus();this.search.val(b)}k(a)}}));a.delegate("abbr","mousedown",this.bind(function(a){this.enabled&&(this.clear(),k(a),this.close(),this.triggerChange(),this.selection.focus())}));this.setPlaceholder();
this.search.bind("focus",this.bind(function(){this.container.addClass("select2-container-active")}))},clear:function(){this.opts.element.val("");this.selection.find("span").empty();this.selection.removeData("select2-data");this.setPlaceholder()},initSelection:function(){if(""===this.opts.element.val())this.close(),this.setPlaceholder();else{var a=this;this.opts.initSelection.call(null,this.opts.element,function(b){b!==g&&null!==b&&(a.updateSelection(b),a.close(),a.setPlaceholder())})}},prepareOpts:function(){var a=
this.parent.prepareOpts.apply(this,arguments);"select"===a.element.get(0).tagName.toLowerCase()&&(a.initSelection=function(a,c){var d=a.find(":selected");e.isFunction(c)&&c({id:d.attr("value"),text:d.text()})});return a},setPlaceholder:function(){var a=this.getPlaceholder();""===this.opts.element.val()&&a!==g&&!(this.select&&""!==this.select.find("option:first").text())&&(this.selection.find("span").html(n(a)),this.selection.addClass("select2-default"),this.selection.find("abbr").hide())},postprocessResults:function(a,
b){var c=0,d=this,f=!0;this.results.find(".select2-result-selectable").each2(function(a,b){if(m(d.id(b.data("select2-data")),d.opts.element.val()))return c=a,!1});this.highlight(c);!0===b&&(f=this.showSearchInput=F(a.results)>=this.opts.minimumResultsForSearch,this.dropdown.find(".select2-search")[f?"removeClass":"addClass"]("select2-search-hidden"),e(this.dropdown,this.container)[f?"addClass":"removeClass"]("select2-with-searchbox"))},onSelect:function(a){var b=this.opts.element.val();this.opts.element.val(this.id(a));
this.updateSelection(a);this.close();this.selection.focus();m(b,this.id(a))||this.triggerChange()},updateSelection:function(a){var b=this.selection.find("span");this.selection.data("select2-data",a);b.empty();a=this.opts.formatSelection(a,b);a!==g&&b.append(n(a));this.selection.removeClass("select2-default");this.opts.allowClear&&this.getPlaceholder()!==g&&this.selection.find("abbr").show()},val:function(){var a,b=null,c=this;if(0===arguments.length)return this.opts.element.val();a=arguments[0];if(this.select)this.select.val(a).find(":selected").each2(function(a,
c){b={id:c.attr("value"),text:c.text()};return!1}),this.updateSelection(b),this.setPlaceholder();else{if(this.opts.initSelection===g)throw Error("cannot call val() if initSelection() is not defined");a?this.opts.initSelection(this.opts.element,function(a){c.opts.element.val(!a?"":c.id(a));c.updateSelection(a);c.setPlaceholder()}):this.clear()}},clearSearch:function(){this.search.val("")},data:function(a){var b;if(0===arguments.length)return b=this.selection.data("select2-data"),b==g&&(b=null),b;!a||
""===a?this.clear():(this.opts.element.val(!a?"":this.id(a)),this.updateSelection(a))}});y=w(v,{createContainer:function(){return e("<div></div>",{"class":"select2-container select2-container-multi"}).html("    <ul class='select2-choices'>  <li class='select2-search-field'>    <input type='text' autocomplete='off' class='select2-input'>  </li></ul><div class='select2-drop select2-drop-multi' style='display:none;'>   <ul class='select2-results'>   </ul></div>")},prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,
arguments);"select"===a.element.get(0).tagName.toLowerCase()&&(a.initSelection=function(a,c){var d=[];a.find(":selected").each2(function(a,b){d.push({id:b.attr("value"),text:b.text()})});e.isFunction(c)&&c(d)});return a},initContainer:function(){var a;this.searchContainer=this.container.find(".select2-search-field");this.selection=a=this.container.find(".select2-choices");this.search.bind("keydown",this.bind(function(b){if(this.enabled){if(b.which===f.BACKSPACE&&""===this.search.val()){this.close();
var c;c=a.find(".select2-search-choice-focus");if(0<c.length){this.unselect(c.first());this.search.width(10);k(b);return}c=a.find(".select2-search-choice");0<c.length&&c.last().addClass("select2-search-choice-focus")}else a.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");if(this.opened())switch(b.which){case f.UP:case f.DOWN:this.moveHighlight(b.which===f.UP?-1:1);k(b);return;case f.ENTER:case f.TAB:this.selectHighlighted();k(b);return;case f.ESC:this.cancel(b);k(b);
return}if(!(b.which===f.TAB||f.isControl(b)||f.isFunctionKey(b)||b.which===f.BACKSPACE||b.which===f.ESC)&&!(!1===this.opts.openOnEnter&&b.which===f.ENTER))this.open(),(b.which===f.PAGE_UP||b.which===f.PAGE_DOWN)&&k(b)}}));this.search.bind("keyup",this.bind(this.resizeSearch));this.search.bind("blur",this.bind(function(){this.container.removeClass("select2-container-active")}));this.container.delegate(".select2-choices","mousedown",this.bind(function(a){this.enabled&&(this.clearPlaceholder(),this.open(),
this.focusSearch(),a.preventDefault())}));this.container.delegate(".select2-choices","focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())}));this.clearSearch()},enable:function(){this.enabled||(this.parent.enable.apply(this,arguments),this.search.removeAttr("disabled"))},disable:function(){this.enabled&&(this.parent.disable.apply(this,arguments),this.search.attr("disabled",!0))},initSelection:function(){""===
this.opts.element.val()&&(this.updateSelection([]),this.close(),this.clearSearch());if(this.select||""!==this.opts.element.val()){var a=this;this.opts.initSelection.call(null,this.opts.element,function(b){if(b!==g&&b!==null){a.updateSelection(b);a.close();a.clearSearch()}})}},clearSearch:function(){var a=this.getPlaceholder();a!==g&&0===this.getVal().length&&!1===this.search.hasClass("select2-focused")?(this.search.val(a).addClass("select2-default"),this.resizeSearch()):this.search.val(" ").width(10)},
clearPlaceholder:function(){this.search.hasClass("select2-default")?this.search.val("").removeClass("select2-default"):" "===this.search.val()&&this.search.val("")},opening:function(){this.parent.opening.apply(this,arguments);this.clearPlaceholder();this.resizeSearch();this.focusSearch()},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close();this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(a){var b=
[],c=[],d=this;e(a).each(function(){0>h(d.id(this),b)&&(b.push(d.id(this)),c.push(this))});a=c;this.selection.find(".select2-search-choice").remove();e(a).each(function(){d.addSelectedChoice(this)});d.postprocessResults()},tokenize:function(){var a=this.search.val(),a=this.opts.tokenizer(a,this.data(),this.bind(this.onSelect),this.opts);null!=a&&a!=g&&(this.search.val(a),0<a.length&&this.open())},onSelect:function(a){this.addSelectedChoice(a);this.select&&this.postprocessResults();this.opts.closeOnSelect?
(this.close(),this.search.width(10)):0<this.countSelectableResults()?(this.search.width(10),this.resizeSearch(),this.positionDropdown()):this.close();this.triggerChange({added:a});this.focusSearch()},cancel:function(){this.close();this.focusSearch()},addSelectedChoice:function(a){var b=e("<li class='select2-search-choice'>    <div></div>    <a href='javascript:void(0)' class='select2-search-choice-close' tabindex='-1'></a></li>"),c=this.id(a),d=this.getVal(),f;f=this.opts.formatSelection(a,b);b.find("div").replaceWith("<div>"+
n(f)+"</div>");b.find(".select2-search-choice-close").bind("mousedown",k).bind("click dblclick",this.bind(function(a){this.enabled&&(e(a.target).closest(".select2-search-choice").fadeOut("fast").animate({width:"hide"},50,this.bind(function(){this.unselect(e(a.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch()})).dequeue(),k(a))})).bind("focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),
this.dropdown.addClass("select2-drop-active"))}));b.data("select2-data",a);b.insertBefore(this.searchContainer);d.push(c);this.setVal(d)},unselect:function(a){var b=this.getVal(),c,d,a=a.closest(".select2-search-choice");if(0===a.length)throw"Invalid argument: "+a+". Must be .select2-search-choice";c=a.data("select2-data");d=h(this.id(c),b);0<=d&&(b.splice(d,1),this.setVal(b),this.select&&this.postprocessResults());a.remove();this.triggerChange({removed:c})},postprocessResults:function(){var a=this.getVal(),
b=this.results.find(".select2-result-selectable"),c=this.results.find(".select2-result-with-children"),d=this;b.each2(function(b,c){var e=d.id(c.data("select2-data"));0<=h(e,a)?c.addClass("select2-disabled").removeClass("select2-result-selectable"):c.removeClass("select2-disabled").addClass("select2-result-selectable")});c.each2(function(a,b){0==b.find(".select2-result-selectable").length?b.addClass("select2-disabled"):b.removeClass("select2-disabled")});b.each2(function(a,b){if(!b.hasClass("select2-disabled")&&
b.hasClass("select2-result-selectable"))return d.highlight(0),!1})},resizeSearch:function(){var a,b,c,d,f=this.search.outerWidth()-this.search.width();a=this.search;q||(c=a[0].currentStyle||window.getComputedStyle(a[0],null),q=e("<div></div>").css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),e("body").append(q));
q.text(a.val());a=q.width()+10;b=this.search.offset().left;c=this.selection.width();d=this.selection.offset().left;b=c-(b-d)-f;b<a&&(b=c-f);40>b&&(b=c-f);this.search.width(b)},getVal:function(){var a;if(this.select)return a=this.select.val(),null===a?[]:a;a=this.opts.element.val();return z(a,this.opts.separator)},setVal:function(a){var b;this.select?this.select.val(a):(b=[],e(a).each(function(){0>h(this,b)&&b.push(this)}),this.opts.element.val(0===b.length?"":b.join(this.opts.separator)))},val:function(){var a,
b=[],c=this;if(0===arguments.length)return this.getVal();if(a=arguments[0])if(this.setVal(a),this.select)this.select.find(":selected").each(function(){b.push({id:e(this).attr("value"),text:e(this).text()})}),this.updateSelection(b);else{if(this.opts.initSelection===g)throw Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(a){var b=e(a).map(c.id);c.setVal(b);c.updateSelection(a);c.clearSearch()})}else this.opts.element.val(""),this.updateSelection([]);
this.clearSearch()},onSortStart:function(){if(this.select)throw Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0);this.searchContainer.hide()},onSortEnd:function(){var a=[],b=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){a.push(b.opts.id(e(this).data("select2-data")))});this.setVal(a);
this.triggerChange()},data:function(a){var b=this,c;if(0===arguments.length)return this.selection.find(".select2-search-choice").map(function(){return e(this).data("select2-data")}).get();a||(a=[]);c=e.map(a,function(a){return b.opts.id(a)});this.setVal(c);this.updateSelection(a);this.clearSearch()}});e.fn.select2=function(){var a=Array.prototype.slice.call(arguments,0),b,c,d,f,j="val destroy opened open close focus isFocused container onSortStart onSortEnd enable disable positionDropdown data".split(" ");
this.each(function(){if(0===a.length||"object"===typeof a[0])b=0===a.length?{}:e.extend({},a[0]),b.element=e(this),"select"===b.element.get(0).tagName.toLowerCase()?f=b.element.attr("multiple"):(f=b.multiple||!1,"tags"in b&&(b.multiple=f=!0)),c=f?new y:new x,c.init(b);else if("string"===typeof a[0]){if(0>h(a[0],j))throw"Unknown method: "+a[0];d=g;c=e(this).data("select2");if(c!==g&&(d="container"===a[0]?c.container:c[a[0]].apply(c,a.slice(1)),d!==g))return!1}else throw"Invalid arguments to select2 plugin: "+
a;});return d===g?this:d};e.fn.select2.defaults={width:"copy",closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c){b=[];B(a.text,c.term,b);return b.join("")},formatSelection:function(a){return a.text},formatResultCssClass:function(){return g},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(a,b){return"Please enter "+(b-a.length)+" more characters"},formatSelectionTooBig:function(a){return"You can only select "+
a+" items"},formatLoadMore:function(){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumSelectionSize:0,id:function(a){return a.id},matcher:function(a,b){return 0<=b.toUpperCase().indexOf(a.toUpperCase())},separator:",",tokenSeparators:[],tokenizer:J};window.Select2={query:{ajax:C,local:D,tags:E},util:{debounce:A,markMatch:B},"class":{"abstract":v,single:x,multi:y}}}})(jQuery);
;
/* jshint onevar:false, smarttabs:true */

( function($) {

	function TiledGalleryCollection() {
		this.galleries = [];
		this.findAndSetupNewGalleries();
	}

	TiledGalleryCollection.prototype.findAndSetupNewGalleries = function() {
		var self = this;
		$( '.tiled-gallery.tiled-gallery-unresized' ).each( function() {
			self.galleries.push( new TiledGallery( $( this ) ) );
		} );
	};

	TiledGalleryCollection.prototype.resizeAll = function() {
		$.each(this.galleries, function(i, gallery) {
			gallery.resize();
		} );
	};

	function TiledGallery( galleryElem ) {
		this.gallery = galleryElem;

		this.addCaptionEvents();

		// Resize when initialized to fit the gallery to window dimensions
		this.resize();

		// Displays the gallery and prevents it from being initialized again
		this.gallery.removeClass( 'tiled-gallery-unresized' );
	}

	/**
	 * Selector for all resizeable elements inside a Tiled Gallery
	 */

	TiledGallery.prototype.resizeableElementsSelector = '.gallery-row, .gallery-group, .tiled-gallery-item img';

	/**
	 * Story
	 */

	TiledGallery.prototype.addCaptionEvents = function() {
		// Hide captions
		this.gallery.find( '.tiled-gallery-caption' ).hide();

		// Add hover effects to bring the caption up and down for each item
		this.gallery.find( '.tiled-gallery-item' ).hover(
			function() { $( this ).find( '.tiled-gallery-caption' ).stop(true, true).slideDown( 'fast' ); },
			function() { $( this ).find( '.tiled-gallery-caption' ).stop(true, true).slideUp( 'fast' ); }
		);
	};

	TiledGallery.prototype.getExtraDimension = function( el, attribute, mode ) {
		if ( mode === 'horizontal' ) {
			var left = ( attribute === 'border' ) ? 'borderLeftWidth' : attribute + 'Left';
			var right = ( attribute === 'border' ) ? 'borderRightWidth' : attribute + 'Right';
			return ( parseInt( el.css( left ), 10 ) || 0 ) +  ( parseInt( el.css( right ), 10 ) || 0 );
		} else if ( mode === 'vertical' ) {
			var top = ( attribute === 'border' ) ? 'borderTopWidth' : attribute + 'Top';
			var bottom = ( attribute === 'border' ) ? 'borderBottomWidth' : attribute + 'Bottom';
			return ( parseInt( el.css( top ), 10 ) || 0 ) + ( parseInt( el.css( bottom ), 10 ) || 0 );
		} else {
			return 0;
		}
	};

	TiledGallery.prototype.resize = function() {
		// Resize everything in the gallery based on the ratio of the current content width
		// to the original content width;
		var originalWidth = this.gallery.data( 'original-width' );
		var currentWidth = this.gallery.parent().width();
		var resizeRatio = Math.min( 1, currentWidth / originalWidth );

		var self = this;
		this.gallery.find( this.resizeableElementsSelector ).each( function () {
			var thisGalleryElement = $( this );

			var marginWidth = self.getExtraDimension( thisGalleryElement, 'margin', 'horizontal' );
			var marginHeight = self.getExtraDimension( thisGalleryElement, 'margin', 'vertical' );

			var paddingWidth = self.getExtraDimension( thisGalleryElement, 'padding', 'horizontal' );
			var paddingHeight = self.getExtraDimension( thisGalleryElement, 'padding', 'vertical' );

			var borderWidth = self.getExtraDimension( thisGalleryElement, 'border', 'horizontal' );
			var borderHeight = self.getExtraDimension( thisGalleryElement, 'border', 'vertical' );

			// Take all outer dimensions into account when resizing so that images
			// scale with constant empty space between them
			var outerWidth = thisGalleryElement.data( 'original-width' ) + paddingWidth + borderWidth + marginWidth;
			var outerHeight = thisGalleryElement.data( 'original-height' ) + paddingHeight + borderHeight + marginHeight;

			// Subtract margins so that images don't overflow on small browser windows
			thisGalleryElement
				.width( Math.floor( resizeRatio * outerWidth ) - marginWidth )
				.height( Math.floor( resizeRatio * outerHeight ) - marginHeight );
		} );
	};

	/**
	 * Resizing logic
	 */

	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	function attachResizeInAnimationFrames( tiledGalleries ) {
		var resizing = false;
		var resizeTimeout = null;

		function handleFrame() {
			tiledGalleries.resizeAll();
			if ( resizing ) {
				requestAnimationFrame( handleFrame );
			}
		}

		$( window ).resize( function() {
			clearTimeout( resizeTimeout );

			if ( ! resizing ) {
				requestAnimationFrame( handleFrame );
			}
			resizing = true;
			resizeTimeout = setTimeout( function() {
				resizing = false;
			}, 15 );
		} );
	}

	function attachPlainResize( tiledGalleries ) {
		$( window ).resize( function() {
			tiledGalleries.resizeAll();
		} );
	}

	/**
	 * Ready, set...
	 */

	$( document ).ready( function() {
		var tiledGalleries = new TiledGalleryCollection();

		$( 'body' ).on( 'post-load', function() {
			tiledGalleries.findAndSetupNewGalleries();
		} );
		$( document ).on( 'page-rendered.wpcom-newdash', function() {
			tiledGalleries.findAndSetupNewGalleries();
		} );

		// Chrome is a unique snow flake and will start lagging on occasion
		// It helps if we only resize on animation frames
		//
		// For other browsers it seems like there is no lag even if we resize every
		// time there is an event
		if ( window.chrome && requestAnimationFrame ) {
			attachResizeInAnimationFrames( tiledGalleries );
		} else {
			attachPlainResize( tiledGalleries );
		}
	});

})(jQuery);
;

function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function c(t,e,n,s,r,o,a){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=i(e,n,s,a);t.p(r,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t){return null==t?"":t}let f,d,h=!1;function p(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function m(t,e){h?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=p(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;s[t]=n[o]+1;const a=o+1;n[a]=t,r=Math.max(a,r)}const o=[],a=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(a[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function g(t,e,n){h&&!n?m(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function y(t){return document.createTextNode(t)}function _(){return y(" ")}function E(){return y("")}function S(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function T(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:A(t,s,e[s])}function L(t){return Array.from(t.childNodes)}function N(t,e,n,s,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o))return n(o),t.splice(s,1),r||(t.claim_info.last_index=s),o}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o))return n(o),t.splice(s,1),r?t.claim_info.last_index--:t.claim_info.last_index=s,o}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function P(t,e,n,s){return N(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s?$(e):w(e)))}function I(t,e){return N(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>y(e)),!0)}function R(t){return I(t," ")}function O(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function k(t){const e=O(t,"HTML_TAG_START",0),n=O(t,"HTML_TAG_END",e);if(e===n)return new D;const s=t.splice(e,n+1);return b(s[0]),b(s[s.length-1]),new D(s.slice(1,s.length-1))}function H(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e){t.value=null==e?"":e}function U(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function j(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=U();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=S(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=S(n.contentWindow,"resize",e)}),m(t,n),()=>{(s||r&&n.contentWindow)&&r(),b(n)}}function M(t,e=document.body){return Array.from(e.querySelectorAll(t))}class D{constructor(t){this.e=this.n=null,this.l=t}m(t,e,n=null){this.e||(this.e=w(e.nodeName),this.t=e,this.l?this.n=this.l:this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)g(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(b)}}function G(t){d=t}function q(){if(!d)throw new Error("Function called outside component initialization");return d}function B(t){q().$$.on_mount.push(t)}function z(t){q().$$.after_update.push(t)}function K(t){q().$$.on_destroy.push(t)}const J=[],V=[],W=[],F=[],Y=Promise.resolve();let Q=!1;function X(t){W.push(t)}let Z=!1;const tt=new Set;function et(){if(!Z){Z=!0;do{for(let t=0;t<J.length;t+=1){const e=J[t];G(e),nt(e.$$)}for(G(null),J.length=0;V.length;)V.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];tt.has(e)||(tt.add(e),e())}W.length=0}while(J.length);for(;F.length;)F.pop()();Q=!1,Z=!1,tt.clear()}}function nt(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const st=new Set;let rt;function ot(){rt={r:0,c:[],p:rt}}function at(){rt.r||r(rt.c),rt=rt.p}function it(t,e){t&&t.i&&(st.delete(t),t.i(e))}function ct(t,e,n,s){if(t&&t.o){if(st.has(t))return;st.add(t),rt.c.push((()=>{st.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function lt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ut(t){return"object"==typeof t&&null!==t?t:{}}function ft(t){t&&t.c()}function dt(t,e){t&&t.l(e)}function ht(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||X((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(X)}function pt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(J.push(t),Q||(Q=!0,Y.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(e,n,o,a,i,c,l=[-1]){const u=d;G(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&mt(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){h=!0;const t=L(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&it(e.$$.fragment),ht(e,n.target,n.anchor,n.customElement),h=!1,et()}G(u)}class bt{$destroy(){pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const vt=[];function wt(e,n=t){let s;const r=[];function o(t){if(a(e,t)&&(e=t,s)){const t=!vt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),vt.push(n,e)}if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const $t={};var yt={owner:"OswaldLabsOpenSource",repo:"status",sites:[{name:"Oswald Labs",url:"https://oswaldlabs.com"},{name:"Oswald Labs Blog",url:"https://blog.oswald.foundation"},{name:"A11Y.co",url:"https://a11y.co"},{name:"Agastya admin",url:"https://admin.oswaldlabs.com"},{name:"Agastya meta",url:"https://agastya-version.oswaldlabs.com/meta.production.json"},{name:"Agastya meta",url:"https://agastya-version.oswaldlabs.com/meta.production.json"}],"status-website":{cname:"status.oswaldlabs.com",logoUrl:"https://avatars2.githubusercontent.com/u/21421587?s=200&v=4",name:"Oswald Labs Status",navbar:[{title:"Status",href:"/"},{title:"Oswald Labs Home",href:"https://oswaldlabs.com"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.oswaldlabs.com",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function _t(t,e,n){const s=t.slice();return s[1]=e[n],s}function Et(e){let n,s,r,o=yt["status-website"]&&!yt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=w("img"),this.h()},l(t){n=P(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),n.src!==(s=yt["status-website"].logoUrl)&&A(n,"src",s),A(n,"class","svelte-a08hsz")},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}(),a=yt["status-website"]&&!yt["status-website"].hideNavTitle&&function(e){let n,s,r=yt["status-website"].name+"";return{c(){n=w("div"),s=y(r)},l(t){n=P(t,"DIV",{});var e=L(n);s=I(e,r),e.forEach(b)},m(t,e){g(t,n,e),m(n,s)},p:t,d(t){t&&b(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=_(),a&&a.c(),this.h()},l(t){n=P(t,"DIV",{});var e=L(n);s=P(e,"A",{href:!0,class:!0});var i=L(s);o&&o.l(i),r=R(i),a&&a.l(i),i.forEach(b),e.forEach(b),this.h()},h(){A(s,"href",yt["status-website"].logoHref||yt.path),A(s,"class","logo svelte-a08hsz")},m(t,e){g(t,n,e),m(n,s),o&&o.m(s,null),m(s,r),a&&a.m(s,null)},p(t,e){yt["status-website"]&&!yt["status-website"].hideNavLogo&&o.p(t,e),yt["status-website"]&&!yt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&b(n),o&&o.d(),a&&a.d()}}}function St(t){let e,n,s,r,o,a=t[1].title+"";return{c(){e=w("li"),n=w("a"),s=y(a),o=_(),this.h()},l(t){e=P(t,"LI",{});var r=L(e);n=P(r,"A",{"aria-current":!0,href:!0,class:!0});var i=L(n);s=I(i,a),i.forEach(b),o=R(r),r.forEach(b),this.h()},h(){A(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",t[1].href.replace("$OWNER",yt.owner).replace("$REPO",yt.repo)),A(n,"class","svelte-a08hsz")},m(t,r){g(t,e,r),m(e,n),m(n,s),m(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",r)},d(t){t&&b(e)}}}function xt(e){let n,s,r,o,a,i=yt["status-website"]&&yt["status-website"].logoUrl&&Et(),c=yt["status-website"]&&yt["status-website"].navbar&&function(t){let e,n=yt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=St(_t(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);g(t,e,n)},p(t,r){if(1&r){let o;for(n=yt["status-website"].navbar,o=0;o<n.length;o+=1){const a=_t(t,n,o);s[o]?s[o].p(a,r):(s[o]=St(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){v(s,t),t&&b(e)}}}(e),l=yt["status-website"]&&yt["status-website"].navbarGitHub&&!yt["status-website"].navbar&&function(e){let n,s,r,o=yt.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=y(o),this.h()},l(t){n=P(t,"LI",{});var e=L(n);s=P(e,"A",{href:!0,class:!0});var a=L(s);r=I(a,o),a.forEach(b),e.forEach(b),this.h()},h(){A(s,"href",`https://github.com/${yt.owner}/${yt.repo}`),A(s,"class","svelte-a08hsz")},m(t,e){g(t,n,e),m(n,s),m(s,r)},p:t,d(t){t&&b(n)}}}();return{c(){n=w("nav"),s=w("div"),i&&i.c(),r=_(),o=w("ul"),c&&c.c(),a=_(),l&&l.c(),this.h()},l(t){n=P(t,"NAV",{class:!0});var e=L(n);s=P(e,"DIV",{class:!0});var u=L(s);i&&i.l(u),r=R(u),o=P(u,"UL",{class:!0});var f=L(o);c&&c.l(f),a=R(f),l&&l.l(f),f.forEach(b),u.forEach(b),e.forEach(b),this.h()},h(){A(o,"class","svelte-a08hsz"),A(s,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){g(t,n,e),m(n,s),i&&i.m(s,null),m(s,r),m(s,o),c&&c.m(o,null),m(o,a),l&&l.m(o,null)},p(t,[e]){yt["status-website"]&&yt["status-website"].logoUrl&&i.p(t,e),yt["status-website"]&&yt["status-website"].navbar&&c.p(t,e),yt["status-website"]&&yt["status-website"].navbarGitHub&&!yt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&b(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function At(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Tt extends bt{constructor(t){super(),gt(this,t,At,xt,a,{segment:0})}}var Lt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Nt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Pt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function It(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Lt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(f,r.index),f=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Nt(Pt(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=It(Nt(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Pt(r[8])+'" alt="'+Pt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Pt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+It(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Pt(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Rt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ot(t,e,n){const s=t.slice();return s[3]=e[n],s}function kt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Ht(e){let n;return{c(){n=w("link"),this.h()},l(t){n=P(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${yt.path}/themes/${(yt["status-website"]||{}).theme||"light"}.css`)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Ct(e){let n;return{c(){n=w("link"),this.h()},l(t){n=P(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(yt["status-website"]||{}).themeUrl)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Ut(e){let n,s;return{c(){n=w("script"),this.h()},l(t){n=P(t,"SCRIPT",{src:!0}),L(n).forEach(b),this.h()},h(){n.src!==(s=e[8].src)&&A(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function jt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=P(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Mt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=P(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Dt(e){let n,s,r,o,a,l,u,f,d,h,p,$,y,S,x,T,N,I,O=It(yt.i18n.footer.replace(/\$REPO/,`https://github.com/${yt.owner}/${yt.repo}`))+"",H=(yt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(yt["status-website"]||{}).customHeadHtml+"";return{c(){n=new D,s=E(),this.h()},l(t){n=k(t),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),g(t,s,e)},p:t,d(t){t&&b(s),t&&n.d()}}}();let C=((yt["status-website"]||{}).themeUrl?Ct:Ht)(e),U=(yt["status-website"]||{}).scripts&&function(t){let e,n=(yt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ut(kt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);g(t,e,n)},p(t,r){if(0&r){let o;for(n=(yt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=kt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Ut(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){v(s,t),t&&b(e)}}}(e),j=(yt["status-website"]||{}).links&&function(t){let e,n=(yt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=jt(Ot(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);g(t,e,n)},p(t,r){if(0&r){let o;for(n=(yt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Ot(t,n,o);s[o]?s[o].p(a,r):(s[o]=jt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){v(s,t),t&&b(e)}}}(e),G=(yt["status-website"]||{}).metaTags&&function(t){let e,n=(yt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Mt(Rt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);g(t,e,n)},p(t,r){if(0&r){let o;for(n=(yt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Rt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Mt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){v(s,t),t&&b(e)}}}(e),q=yt["status-website"].css&&function(e){let n,s,r=`<style>${yt["status-website"].css}</style>`;return{c(){n=new D,s=E(),this.h()},l(t){n=k(t),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),g(t,s,e)},p:t,d(t){t&&b(s),t&&n.d()}}}(),B=yt["status-website"].js&&function(e){let n,s,r=`<script>${yt["status-website"].js}<\/script>`;return{c(){n=new D,s=E(),this.h()},l(t){n=k(t),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),g(t,s,e)},p:t,d(t){t&&b(s),t&&n.d()}}}(),z=(yt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(yt["status-website"]||{}).customBodyHtml+"";return{c(){n=new D,s=E(),this.h()},l(t){n=k(t),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),g(t,s,e)},p:t,d(t){t&&b(s),t&&n.d()}}}();$=new Tt({props:{segment:e[0]}});const K=e[2].default,J=function(t,e,n,s){if(t){const r=i(t,e,n,s);return t[0](r)}}(K,e,e[1],null);return{c(){H&&H.c(),n=E(),C.c(),s=w("link"),r=w("link"),o=w("link"),U&&U.c(),a=E(),j&&j.c(),l=E(),G&&G.c(),u=E(),q&&q.c(),f=E(),B&&B.c(),d=E(),h=_(),z&&z.c(),p=_(),ft($.$$.fragment),y=_(),S=w("main"),J&&J.c(),x=_(),T=w("footer"),N=w("p"),this.h()},l(t){const e=M('[data-svelte="svelte-ri9y7q"]',document.head);H&&H.l(e),n=E(),C.l(e),s=P(e,"LINK",{rel:!0,href:!0}),r=P(e,"LINK",{rel:!0,type:!0,href:!0}),o=P(e,"LINK",{rel:!0,type:!0,href:!0}),U&&U.l(e),a=E(),j&&j.l(e),l=E(),G&&G.l(e),u=E(),q&&q.l(e),f=E(),B&&B.l(e),d=E(),e.forEach(b),h=R(t),z&&z.l(t),p=R(t),dt($.$$.fragment,t),y=R(t),S=P(t,"MAIN",{class:!0});var i=L(S);J&&J.l(i),i.forEach(b),x=R(t),T=P(t,"FOOTER",{class:!0});var c=L(T);N=P(c,"P",{}),L(N).forEach(b),c.forEach(b),this.h()},h(){A(s,"rel","stylesheet"),A(s,"href",`${yt.path}/global.css`),A(r,"rel","icon"),A(r,"type","image/svg"),A(r,"href",(yt["status-website"]||{}).faviconSvg||(yt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(yt["status-website"]||{}).favicon||"/logo-192.png"),A(S,"class","container"),A(T,"class","svelte-jbr799")},m(t,e){H&&H.m(document.head,null),m(document.head,n),C.m(document.head,null),m(document.head,s),m(document.head,r),m(document.head,o),U&&U.m(document.head,null),m(document.head,a),j&&j.m(document.head,null),m(document.head,l),G&&G.m(document.head,null),m(document.head,u),q&&q.m(document.head,null),m(document.head,f),B&&B.m(document.head,null),m(document.head,d),g(t,h,e),z&&z.m(t,e),g(t,p,e),ht($,t,e),g(t,y,e),g(t,S,e),J&&J.m(S,null),g(t,x,e),g(t,T,e),m(T,N),N.innerHTML=O,I=!0},p(t,[e]){(yt["status-website"]||{}).customHeadHtml&&H.p(t,e),C.p(t,e),(yt["status-website"]||{}).scripts&&U.p(t,e),(yt["status-website"]||{}).links&&j.p(t,e),(yt["status-website"]||{}).metaTags&&G.p(t,e),yt["status-website"].css&&q.p(t,e),yt["status-website"].js&&B.p(t,e),(yt["status-website"]||{}).customBodyHtml&&z.p(t,e);const n={};1&e&&(n.segment=t[0]),$.$set(n),J&&J.p&&(!I||2&e)&&c(J,K,t,t[1],I?e:-1,null,null)},i(t){I||(it($.$$.fragment,t),it(J,t),I=!0)},o(t){ct($.$$.fragment,t),ct(J,t),I=!1},d(t){H&&H.d(t),b(n),C.d(t),b(s),b(r),b(o),U&&U.d(t),b(a),j&&j.d(t),b(l),G&&G.d(t),b(u),q&&q.d(t),b(f),B&&B.d(t),b(d),t&&b(h),z&&z.d(t),t&&b(p),pt($,t),t&&b(y),t&&b(S),J&&J.d(t),t&&b(x),t&&b(T)}}}function Gt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class qt extends bt{constructor(t){super(),gt(this,t,Gt,Dt,a,{segment:0})}}function Bt(t){let e,n,s=t[1].stack+"";return{c(){e=w("pre"),n=y(s)},l(t){e=P(t,"PRE",{});var r=L(e);n=I(r,s),r.forEach(b)},m(t,s){g(t,e,s),m(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&H(n,s)},d(t){t&&b(e)}}}function zt(e){let n,s,r,o,a,i,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Bt(e);return{c(){s=_(),r=w("h1"),o=y(e[0]),a=_(),i=w("p"),c=y(f),l=_(),d&&d.c(),u=E(),this.h()},l(t){M('[data-svelte="svelte-1moakz"]',document.head).forEach(b),s=R(t),r=P(t,"H1",{class:!0});var n=L(r);o=I(n,e[0]),n.forEach(b),a=R(t),i=P(t,"P",{class:!0});var h=L(i);c=I(h,f),h.forEach(b),l=R(t),d&&d.l(t),u=E(),this.h()},h(){A(r,"class","svelte-17w3omn"),A(i,"class","svelte-17w3omn")},m(t,e){g(t,s,e),g(t,r,e),m(r,o),g(t,a,e),g(t,i,e),m(i,c),g(t,l,e),d&&d.m(t,e),g(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&H(o,t[0]),2&e&&f!==(f=t[1].message+"")&&H(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Bt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&b(s),t&&b(r),t&&b(a),t&&b(i),t&&b(l),d&&d.d(t),t&&b(u)}}}function Kt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Jt extends bt{constructor(t){super(),gt(this,t,Kt,zt,a,{status:0,error:1})}}function Vt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ft(n.$$.fragment),s=E()},l(t){n&&dt(n.$$.fragment,t),s=E()},m(t,e){n&&ht(n,t,e),g(t,s,e),r=!0},p(t,e){const r=16&e?lt(o,[ut(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){ot();const t=n;ct(t.$$.fragment,1,0,(()=>{pt(t,1)})),at()}a?(n=new a(i()),ft(n.$$.fragment),it(n.$$.fragment,1),ht(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&it(n.$$.fragment,t),r=!0)},o(t){n&&ct(n.$$.fragment,t),r=!1},d(t){t&&b(s),n&&pt(n,t)}}}function Wt(t){let e,n;return e=new Jt({props:{error:t[0],status:t[1]}}),{c(){ft(e.$$.fragment)},l(t){dt(e.$$.fragment,t)},m(t,s){ht(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(it(e.$$.fragment,t),n=!0)},o(t){ct(e.$$.fragment,t),n=!1},d(t){pt(e,t)}}}function Ft(t){let e,n,s,r;const o=[Wt,Vt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=E()},l(t){n.l(t),s=E()},m(t,n){a[e].m(t,n),g(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(ot(),ct(a[c],1,1,(()=>{a[c]=null})),at(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),it(n,1),n.m(s.parentNode,s))},i(t){r||(it(n),r=!0)},o(t){ct(n),r=!1},d(t){a[e].d(t),t&&b(s)}}}function Yt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Ft]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new qt({props:o}),{c(){ft(n.$$.fragment)},l(t){dt(n.$$.fragment,t)},m(t,e){ht(n,t,e),s=!0},p(t,[e]){const s=12&e?lt(r,[4&e&&{segment:t[2][0]},8&e&&ut(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(it(n.$$.fragment,t),s=!0)},o(t){ct(n.$$.fragment,t),s=!1},d(t){pt(n,t)}}}function Qt(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return z(l),u=$t,f=s,q().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class Xt extends bt{constructor(t){super(),gt(this,t,Qt,Yt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Zt=[],te=[{js:()=>Promise.all([import("./index.099bab49.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.afa12c83.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].595f33e3.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].17128a58.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.1f551979.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ee=(ne=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ne(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ne(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ne;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function se(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function re(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let oe,ae=1;const ie="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ce={};let le,ue;function fe(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function de(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(le))return null;let e=t.pathname.slice(le.length);if(""===e&&(e="/"),!Zt.some((t=>t.test(e))))for(let n=0;n<ee.length;n+=1){const s=ee[n],r=s.pattern.exec(e);if(r){const n=fe(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function he(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=re(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=de(r);if(o){ge(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),ie.pushState({id:oe},"",r.href)}}function pe(){return{x:pageXOffset,y:pageYOffset}}function me(t){if(ce[oe]=pe(),t.state){const e=de(new URL(location.href));e?ge(e,t.state.id):location.href=location.href}else!function(t){ae=t}(ae+1),function(t){oe=t}(ae),ie.replaceState({id:oe},"",location.href)}function ge(t,e,n,s){return se(this,void 0,void 0,(function*(){const r=!!e;if(r)oe=e;else{const t=pe();ce[oe]=t,oe=e=++ae,ce[oe]=n?t:{x:0,y:0}}if(yield ue(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ce[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ce[oe]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function be(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let ve,we=null;function $e(t){const e=re(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=de(new URL(t,be(document)));if(e)we&&t===we.href||(we={href:t,promise:Ue(e)}),we.promise}(e.href)}function ye(t){clearTimeout(ve),ve=setTimeout((()=>{$e(t)}),20)}function _e(t,e={noscroll:!1,replaceState:!1}){const n=de(new URL(t,be(document)));if(n){const s=ge(n,null,e.noscroll);return ie[e.replaceState?"replaceState":"pushState"]({id:oe},"",t),s}return location.href=t,new Promise((()=>{}))}const Ee="undefined"!=typeof __SAPPER__&&__SAPPER__;let Se,xe,Ae,Te=!1,Le=[],Ne="{}";const Pe={page:function(t){const e=wt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:wt(null),session:wt(Ee&&Ee.session)};let Ie,Re,Oe;function ke(t,e){const{error:n}=t;return Object.assign({error:n},e)}function He(t){return se(this,void 0,void 0,(function*(){Se&&Pe.preloading.set(!0);const e=function(t){return we&&we.href===t.href?we.promise:Ue(t)}(t),n=xe={},s=yield e,{redirect:r}=s;if(n===xe)if(r)yield _e(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Ce(n,e,ke(e,t.page))}}))}function Ce(t,e,n){return se(this,void 0,void 0,(function*(){Pe.page.set(n),Pe.preloading.set(!1),Se?Se.$set(e):(e.stores={page:{subscribe:Pe.page.subscribe},preloading:{subscribe:Pe.preloading.subscribe},session:Pe.session},e.level0={props:yield Ae},e.notify=Pe.page.notify,Se=new Xt({target:Oe,props:e,hydrate:!0})),Le=t,Ne=JSON.stringify(n.query),Te=!0,Re=!1}))}function Ue(t){return se(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ae){const t=()=>({});Ae=Ee.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ie)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>se(this,void 0,void 0,(function*(){const f=s[i];if(function(t,e,n,s){if(s!==Ne)return!0;const r=Le[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:f};const d=c++;let h;if(Re||u||!Le[i]||Le[i].part!==e.i){u=!1;const{default:s,preload:r}=yield te[e.i].js();let o;o=Te||!Ee.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ie):{}:Ee.preloaded[i+1],h={component:s,props:o,segment:f,match:l,part:e.i}}else h=Le[i];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var je,Me,De;Pe.session.subscribe((t=>se(void 0,void 0,void 0,(function*(){if(Ie=t,!Te)return;Re=!0;const e=de(new URL(location.href)),n=xe={},{redirect:s,props:r,branch:o}=yield Ue(e);n===xe&&(s?yield _e(s.location,{replaceState:!0}):yield Ce(o,r,ke(r,e.page)))})))),je={target:document.querySelector("#sapper")},Me=je.target,Oe=Me,De=Ee.baseUrl,le=De,ue=He,"scrollRestoration"in ie&&(ie.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ie.scrollRestoration="auto"})),addEventListener("load",(()=>{ie.scrollRestoration="manual"})),addEventListener("click",he),addEventListener("popstate",me),addEventListener("touchstart",$e),addEventListener("mousemove",ye),Ee.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Ee;Ae||(Ae=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Ae},level1:{props:{status:o,error:a},component:Jt},segments:r},c=fe(n);Ce([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ie.replaceState({id:ae},"",e);const n=de(new URL(location.href));if(n)return ge(n,ae,!0,t)}));export{pt as A,S as B,r as C,V as D,k as E,u as F,M as G,D as H,It as I,$ as J,_e as K,C as L,x as M,e as N,T as O,lt as P,z as Q,K as R,bt as S,l as T,ut as U,X as V,j as W,L as a,I as b,P as c,b as d,w as e,A as f,g,m as h,gt as i,_ as j,R as k,ot as l,ct as m,t as n,at as o,it as p,B as q,yt as r,a as s,y as t,H as u,E as v,v as w,ft as x,dt as y,ht as z};

import __inject_styles from './inject_styles.5607aec6.js';
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[60,71],{"+lzj":function(t,e,n){n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s}));var r=n("vzKb"),a=n("3/Bf");const o={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null},i=()=>{o.longTaskDurations=[]},c=()=>o,s=async()=>{const t=({name:t,value:e,isFinal:n})=>{n&&("CLS"===t?Object(a.e)(t,100*e):Object(a.e)(t,e))};Object(r.a)({entryTypes:["longtask"]},t=>{t.getEntries().map(t=>o.longTaskDurations.push(t.duration))},()=>i()),Object(r.a)({type:"first-input",buffered:!0},(t,e)=>{const n=t.getEntries()[0];n&&n.startTime&&n.processingStart&&(o.firstInputDelay={startTime:n.startTime,endTime:n.processingStart}),e.disconnect()},()=>{o.firstInputDelay=null}),Object(r.a)({type:"largest-contentful-paint",buffered:!0},t=>{const e=t.getEntries(),n=e[e.length-1];n&&(o.largestContentfulPaint=n.renderTime||n.loadTime||null)}),Object(r.a)({type:"layout-shift",buffered:!0},t=>{t.getEntries().forEach(t=>{t.hadRecentInput||(o.cumulativeLayoutShiftScore+=t.value)})});try{const{getCLS:e,getFID:r,getLCP:a}=await n.e(501).then(n.bind(null,"w6Sm"));r(t),a(t,!0),e(t,!0)}catch(e){}}},"3R0Q":function(t,e,n){e.a=t=>{const e={};t.forEach(({label:t,timestamp:n})=>{e[t]=(e[t]||[]).concat([n])});const n={};return Object.keys(e).forEach(t=>{(e[t]||[]).forEach((e,r)=>{n[r?`${t}_${r+1}`:t]=e})}),n}},"B/lV":function(t,e,n){const r=t=>{const e=t.replace(new RegExp("^"+(window.location.origin||"")),""),n=document&&document.querySelector(`head > script[src='${e}']`);return!!n&&n.hasAttribute("defer")},a=t=>["pinimg","pinterest","pinterdev"].every(e=>!t.includes(e+".com/"));e.a=(t,e)=>{const n=(({name:t,initiatorType:e})=>{switch(e){case"xmlhttprequest":return"xmlhttprequest";case"img":return"image";case"video":return"video";default:{const e=t.split("."),n=(e.length>1&&e.pop()||"").toLowerCase();return["js","mjs"].includes(n)?"script":"css"===n?"css":["mp4","m4v","mov"].includes(n)?"video":["bmp","gif","jpg","jpeg","png","tiff","webp","svg"].includes(n)?"image":"other"}}})(t),{name:o}=t;return{category:n,isDeferred:"script"===n&&r(o),isExternal:a(o),isVisuallyCompleteRequired:"image"===n&&e.includes(o),timing:t}}},CP5N:function(t,e,n){var r=n("q1tI"),a=n("3R0Q"),o=n("B/lV"),i=n("vzKb"),c=n("FylZ"),s=n("mRg4"),u=n("LvPn"),p=n("XtwW"),d=n("LrH5"),b=n("fZG9"),l=n("xfna"),m=n("3/Bf");const f=Object(d.a)("PwtStopwatch"),y=(t,e)=>{if(p.a){if("start"===e.type&&!t.isTiming){const{name:t,startTime:n}=e;return Object(m.c)("TIMING."+t),{isTiming:!0,isSampled:e.isSampled,startTime:"number"==typeof n?n:p.a.now(),metricId:{type:"stopwatch",name:t},pwtStaticContext:e.pwtStaticContext,annotations:[],binaryAnnotations:{},spans:[]}}if("annotate"===e.type&&t.isTiming)return{...t,annotations:t.annotations.concat([{label:e.label,timestamp:p.a.now()}])};if("binaryAnnotate"===e.type&&t.isTiming)return f(`adding binary annotation {${e.name}: ${String(e.value)}}`),{...t,binaryAnnotations:{...t.binaryAnnotations,[e.name]:{value:e.value,type:e.annotationType}}};if("binaryAnnotateOperation"===e.type&&t.isTiming){const{value:n,type:r}=e.binaryAnnotationValueAndType;if(t.binaryAnnotations[e.name]){const a=t.binaryAnnotations[e.name].value||0;return f(`operating on binary annotation {\n          name: ${e.name}\n          pervious value: ${String(a)}\n          operand: ${String(n)}\n        }`),{...t,binaryAnnotations:{...t.binaryAnnotations,[e.name]:{value:n?e.operation(a,n):a,type:r}}}}return{...t,binaryAnnotations:{...t.binaryAnnotations,[e.name]:{value:n,type:r}}}}if("addSubspan"===e.type&&t.isTiming){f(`adding subspan {${e.name}}`);const{startTime:n}=t;return{...t,spans:[...t.spans,{name:e.name,startTime:e.startTime||n,endTime:e.endTime,annotationMap:{...e.annotations},binaryAnnotationMap:{...e.binaryAnnotations}}]}}if("subspanStart"===e.type&&t.isTiming)return f(`starting subspan {${e.name}}`),{...t,spans:[...t.spans,{name:e.name,startTime:p.a.now(),endTime:1/0,annotationMap:{...e.annotations},binaryAnnotationMap:{...e.binaryAnnotations}}]};if("subspanStop"===e.type&&t.isTiming){f(`stopping subspan {${e.name}}`);const n=t.spans.findIndex(t=>t.name===e.name);return n>-1?(t.spans[n].endTime=p.a.now(),e.annotations&&(t.spans[n].annotationMap={...t.spans[n].annotationMap,...e.annotations}),e.binaryAnnotations&&(t.spans[n].binaryAnnotationMap={...t.spans[n].binaryAnnotationMap,...e.binaryAnnotations})):Object(m.b)("invalid_subspan_stop_name",{name:e.name}),t}if("stop"===e.type&&t.isTiming){const{startTime:n,metricId:r,pwtStaticContext:i,annotations:d,binaryAnnotations:l,isSampled:m,spans:f}=t;if(e.stopwatchPerformanceObserver&&e.stopwatchPerformanceObserver.disconnect(),m){const t=e.stopTime||p.a.now(),m={type:"COMPLETE",traceId:Object(c.a)(),startTime:n,endTime:t,spans:f.length?f.map(e=>(e.endTime===1/0&&(e.endTime=t),e)):(e.customStopwatchBuffer||[]).map(t=>Object(u.a)(Object(o.a)(t,[]))).filter(Boolean),annotationMap:Object(a.a)(d),binaryAnnotationMap:Object(b.a)({metricId:r,pwtStaticContext:i,binaryAnnotations:l,performanceResourceTimings:e.customStopwatchBuffer||[]})};Object(s.a)({metricId:r,pwtStaticContext:i,result:m})}return{isTiming:!1}}if("error"===e.type){const{error:t,stopwatchPerformanceObserver:n}=e;return t&&Object(m.b)(t),n&&n.disconnect(),{isTiming:!1}}if("abort"===e.type&&t.isTiming){e.stopwatchPerformanceObserver&&e.stopwatchPerformanceObserver.disconnect();const{metricId:n,pwtStaticContext:r}=t,a=e.reason||"";return Object(s.a)({metricId:n,pwtStaticContext:r,result:{type:"ABORT",reason:a}}),{isTiming:!1}}}return t};e.a=(t,e)=>{const n=Object(l.c)(),a=Object(r.useRef)([]),o=Object(r.useRef)(),[c,s]=Object(r.useReducer)(y,{isTiming:!1});return n?{isTiming:c.isTiming,start:r=>{if(window.PerformanceObserver){const t=1e3;a.current=[],o.current=Object(i.a)({entryTypes:["resource"]},e=>{a.current=a.current.concat(e.getEntries()),a.current.length>t&&(a.current=a.current.slice(-t))})}const c={type:"start",startTime:r,name:t,pwtStaticContext:n,isSampled:!e||Math.random()<e};return s(c)},stop:t=>s({type:"stop",stopTime:t,stopwatchPerformanceObserver:o.current,customStopwatchBuffer:a.current}),error:t=>{s({type:"error",stopwatchPerformanceObserver:o.current,error:t})},abort:t=>s({type:"abort",stopwatchPerformanceObserver:o.current,customStopwatchBuffer:a.current,reason:t}),annotate:t=>s({type:"annotate",label:t}),binaryAnnotate:(t,e,n)=>s({type:"binaryAnnotate",name:t,value:e,annotationType:n}),binaryAnnotateOperation:(t,e,n)=>s({type:"binaryAnnotateOperation",name:t,binaryAnnotationValueAndType:e,operation:n}),addSubspan:(t,e,n,r={},a={})=>s({type:"addSubspan",name:t,startTime:e,endTime:n,annotations:r,binaryAnnotations:a}),subspanStart:(t,e={},n={})=>s({type:"subspanStart",name:t,annotations:e,binaryAnnotations:n}),subspanStop:(t,e={},n={})=>s({type:"subspanStop",name:t,annotations:e,binaryAnnotations:n})}:null}},EHyI:function(t,e,n){n.d(e,"a",(function(){return i}));var r=()=>{var t;return!!(null===(t=window.performance)||void 0===t?void 0:t.timing)},a=n("XtwW"),o=n("gg0E");function i(t){return!("desktop"===t&&!r())&&(!!a.a&&Object(o.a)())}},F4HH:function(t,e,n){var r=n("q1tI"),a=n.n(r),o=n("CP5N"),i=n("1dBE"),c=n("xfna");e.a=({name:t,v2LoggerMetricName:e,sampleRate:n,abortOnUnloadOrClientNavigation:s=!0})=>{const{Provider:u,useHook:p}=Object(i.b)("Stopwatch_"+t);return{Provider:function({children:e}){const i=Object(o.a)(t,n),p=Object(c.b)(),d=p?p.time:0,b=Object(r.useRef)(!1),l=t=>{b.current&&(b.current=!1,i&&i.abort(t))};return Object(r.useEffect)(()=>()=>{s&&l("unloadOrClientNavigation")},[d]),a.a.createElement(u,{value:{abort:l,addAnnotation:t=>{b.current&&i&&i.annotate(t)},addBinaryAnnotation:(t,e,n)=>{b.current&&i&&i.binaryAnnotate(t,e,n)},binaryAnnotationOperation:(t,e,n)=>{b.current&&i&&i.binaryAnnotateOperation(t,e,n)},addSubspan:(t,e,n,r,a)=>{b.current&&i&&i.addSubspan(t,e,n,r,a)},subspanStart:(t,e,n)=>{b.current&&i&&i.subspanStart(t,e,n)},subspanStop:(t,e,n)=>{b.current&&i&&i.subspanStop(t,e,n)},error:t=>{b.current&&(b.current=!1,i&&i.error(t))},start:()=>{i&&b.current&&i.abort("duplicated_init_stopwatch_action"),b.current=!0,null==i||i.start()},stop:t=>{b.current&&(b.current=!1,i&&i.stop(t))}}},e)},useHook:p}}},LvPn:function(t,e,n){n.d(e,"a",(function(){return i}));var r=n("pody"),a=n("nEAA");const o=({category:t,isDeferred:e,isExternal:n})=>[t].concat(e?["deferred"]:[]).concat(n?["external"]:[]).join("_");function i(t){const{category:e,timing:n,isDeferred:i,isExternal:c,isVisuallyCompleteRequired:s}=t;return n.responseEnd&&("image"!==e||s)?{name:o(t),startTime:n.startTime,endTime:n.responseEnd,annotationMap:Object(r.a)(n),binaryAnnotationMap:{category:Object(a.d)(e),decodedBodySize:Object(a.b)(n.decodedBodySize||0),initiatorType:Object(a.d)(n.initiatorType),isDeferred:Object(a.a)(i),isExternal:Object(a.a)(c),name:Object(a.d)(n.name),nextHopProtocol:Object(a.d)(n.nextHopProtocol),transferSize:Object(a.b)(n.transferSize||0)}}:null}},fZG9:function(t,e,n){n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return j}));var r=n("bNC6"),a=n("HMdf"),o=n("+lzj"),i=n("SyXB"),c=n("nEAA");const s=(t,e)=>(t||[]).reduce((t,n)=>({...t,["experiment."+n]:Object(c.d)(e(n))}),{}),u=(t,e)=>"number"==typeof e?t(e):null,p=t=>t.reduce((t,e)=>t+e,0),d=(t,e)=>Object.keys(e).reduce((n,r)=>({...n,[`${t}${r}`]:e[r]}),{}),b=t=>{if(!t.length)return{};const e=t.map(({startTime:t,requestStart:e,responseStart:n,responseEnd:r})=>{const a=e||t;return{startTime:t,requestStart:a,responseStart:n||a,responseEnd:r}}),n=p(e.map(t=>t.requestStart-t.startTime)),r=p(e.map(t=>t.responseStart-t.requestStart)),a=p(e.map(t=>t.responseEnd-t.responseStart)),o=n+r+a,i=p(t.map(t=>t.decodedBodySize||0));return{decodedBodySize:Object(c.b)((s=i,Number(Number(s/1024).toFixed(3)))),"duration.all":Object(c.b)(o),"duration.requestStartToResponseStart":Object(c.b)(r),"duration.responseStartToResponseEnd":Object(c.b)(a),"duration.startToRequestStart":Object(c.b)(n)};var s},l=t=>{const e=t.filter(t=>!!t.responseEnd);return{...t.length?{...b(e),"count.completed":Object(c.b)(e.length)}:{},"count.all":Object(c.b)(t.length)}},m=t=>{const e=t.reduce((t,e)=>(t[e.category]=(t[e.category]||[]).concat([e]),t),{}),n={script:e.script,script_deferred:t.filter(t=>t.isDeferred),external:t.filter(t=>t.isExternal),css:e.css,image:e.image,video:e.video,xmlhttprequest:e.xmlhttprequest,visually_complete:t.filter(t=>t.isVisuallyCompleteRequired)};return Object.keys(n).reduce((t,e)=>({...t,...d(`resource.${e}.`,l((n[e]||[]).map(t=>t.timing)))}),{})},f=(t,e)=>{const{devicePixelRatio:n,navigator:a,innerWidth:o,innerHeight:i}=window,{deviceMemory:s,hardwareConcurrency:u,platform:p,userAgent:d}=a,{appType:b,appVersion:l,browserName:m,browserVersion:f,deviceType:y,isBot:O,isSocialBot:j,locale:g,osName:v,stageName:T}=e,S="desktop"===y?b||5:b||6,w="surface"===t.type&&"initial_app_load"===t.navigationType?1:4;return{"app.type":Object(c.c)(S),"app.version":Object(c.d)(l),"browser.name":Object(c.d)(m),"browser.version":Object(c.d)(f),"cpu.speed":Object(c.c)(u),"device.memory":Object(c.c)(s),"device.type":Object(c.c)(0),"device.typeName":Object(c.d)(y),"device.version":Object(c.d)("unknown"),"pwt.cause":Object(c.c)(w),"pwt.result":Object(c.c)(1),"view.type":Object(c.b)(0),"viewport.height":Object(c.b)(i||0),"viewport.width":Object(c.b)(o||0),devicePixelRatio:Object(c.b)(n||0),isBot:Object(c.a)(O),isSocialBot:Object(c.a)(j),locale:Object(c.d)(g),osName:Object(c.d)(v),platform:Object(c.d)(p||null),profilerVersion:Object(c.d)("3"),pwtActionName:Object(c.c)(Object(r.a)(t)),stageName:Object(c.d)(T),userAgent:Object(c.d)(d)}},y=({metricId:t,pwtStaticContext:e,binaryAnnotations:n={},performanceResourceTimings:r=[]})=>{let o={};{const{connection:t,hardwareConcurrency:e,deviceMemory:n}=window.navigator;o={"net.effectiveType":Object(c.d)((null==t?void 0:t.effectiveType)||null),"net.rtt":Object(c.b)(u(t=>10*Math.round(t/10),null==t?void 0:t.rtt)),"net.speed":Object(c.b)(Object(a.b)(r,!1)),"cpu.threads":Object(c.c)(e),"memory.size":Object(c.b)(n)}}return{...f(t,e),...n,...o}},O=(t,e,n,r)=>{var s;const{navigator:d}=window,{connection:b,serviceWorker:l}=d,{surface:m,navigationType:f,isAuthenticated:y}=t,{cumulativeLayoutShiftScore:O,longTaskDurations:j}=Object(o.b)();return{...j.length?{"longTask.count":Object(c.b)(j.length),"longTask.maxDuration":Object(c.b)(Math.max(...j)),"longTask.totalDuration":Object(c.b)(p(j))}:{},cumulativeLayoutShiftScore:Object(c.b)(100*O),"masonry.paginationMarkCount":Object(c.b)(Object(i.e)(i.a,e)),"metricId.isAuthenticated":Object(c.a)(y),"metricId.navigationType":Object(c.d)(f),"metricId.surface":Object(c.d)(m),"net.effectiveType":Object(c.d)((null==b?void 0:b.effectiveType)||null),"net.rtt":Object(c.b)(u(t=>10*Math.round(t/10),null==b?void 0:b.rtt)),"net.speed":Object(c.b)(Object(a.b)(n)),entryChunkAfterDoc:Object(c.a)(r),resourceBufferClearedCount:Object(c.c)(Object(i.e)("resourceBufferCleared",e)),scrollDuringLayout:Object(c.a)(Object(i.f)("scrollDuringLayout",e)),serviceWorker:Object(c.a)(l?!!l.controller:null),serviceWorkerState:Object(c.d)((null==l||null===(s=l.controller)||void 0===s?void 0:s.state)||null)}},j=({annotateExperiments:t,binaryAnnotations:e={},entries:n,entryChunkAfterDoc:r,metricId:a,performanceResources:o,pwtEndTime:i,pwtStaticContext:c})=>({...e,...m(o),...s(t,c.getExperimentGroup),...f(a,c),...O(a,i,n,r)})},mRg4:function(t,e,n){n.d(e,"a",(function(){return j}));let r=null;var a=(t,e)=>(r=r||{results:[],context:e},r.results.push(t),r),o=n("FZ8N"),i=n("LrH5"),c=n("bNC6"),s=n("3/Bf"),u=n("o9su"),p=n("FylZ");const d=(t,e)=>Object.keys(t).reduce((n,r)=>{const a=t[r];return a&&(n[r]={timestamp:e+a}),n},{}),b=({span:t,id:e,parentId:n,timeOrigin:r})=>{return{id:e,parent_id:n,result:1,name:t.name,timestamp:r+t.startTime,duration:t.endTime-t.startTime,annotations:d(t.annotationMap,r),binary_annotations:(a=t.binaryAnnotationMap,Object.keys(a).reduce((t,e)=>{const n=a[e];if(!n)return t;const{value:r,type:o}=n;return null==r?t:t.concat({name:e,value:r,annotation_type:o})},[]))};var a},l=(t,{startTime:e,endTime:n,annotationMap:r,binaryAnnotationMap:a})=>({name:"pwt/"+t,startTime:e,endTime:n,annotationMap:r,binaryAnnotationMap:a}),m=({annotations:t})=>t.reduce((t,{key:e,timestamp:n})=>({...t,["server_"+e]:{timestamp:n}}),{}),f=(t,e)=>({...t,annotations:{...m(e),...t.annotations},binary_annotations:[...e.binary_annotations,...t.binary_annotations]}),y=({traceId:t,actionName:e,result:n,timeOrigin:r,serverDataToJoin:a})=>{const o=(null==a?void 0:a.client_span_id)||Object(p.a)();let i=b({span:l(e,n),id:o,parentId:null,timeOrigin:r}),c=null;return a&&(i=f(i,a),c=((t,e,n)=>{const r=Object(u.a)();return(null==r?void 0:r.responseEnd)?f(b({span:{name:"html",startTime:0,endTime:(null==r?void 0:r.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{}},id:t.server_span_id||Object(p.a)(),parentId:e,timeOrigin:n}),t):null})(a,o,r)),{trace_id:t,spans:[i,...c?[c]:[],...n.spans.map(t=>b({span:t,id:Object(p.a)(),parentId:o,timeOrigin:r}))]}},O=Object(i.a)("reportResult");function j({metricId:t,pwtStaticContext:e,result:n}){const{ajax:r,serverData:i}=e,u=Object(c.b)(t),p=`${n.type}.${u}`;if(Object(s.c)(n.reason?p.concat("."+n.reason):p),"COMPLETE"!==n.type)return void O("Abort metric "+u,n);const d=(null===(b=window.performance)||void 0===b?void 0:b.now)?Date.now()-window.performance.now():"unknown";var b,l;if("unknown"===d)return O(`Unable to convert to absolute times for ${u} due to missing time origin`),void Object(s.c)("missingTimeOrigin."+u);if(o.c&&(window.PWT_LAB_DATA=a(n,e)),!o.c){const a="surface"===t.type&&"initial_app_load"===t.navigationType,c=n.traceId,s=y({traceId:c,actionName:u,result:n,timeOrigin:d,serverDataToJoin:a&&i||null});r({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(s),report_context:JSON.stringify((l=e,{debugTrace:o.a,locale:l.locale,stageName:l.stageName,userId:l.isAuthenticated?l.userId:null}))}}),O(`PinTrace ${u} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${c}`,{duration:n.endTime-n.startTime,result:n,pwtStaticContext:e})}}},nEAA:function(t,e,n){n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return c}));const r=t=>"number"==typeof t?Math.round(t):t,a=t=>({type:"I16",value:r(t)}),o=t=>({type:"I32",value:r(t)}),i=t=>({type:"STRING",value:t}),c=t=>({type:"BOOL",value:t})},o9su:function(t,e,n){var r=n("XtwW");e.a=()=>{const[t]=r.a?r.a.getEntriesByType("navigation"):[];return t}},pody:function(t,e,n){e.a=t=>({connectEnd:t.connectEnd||0,connectStart:t.connectStart||0,domainLookupEnd:t.domainLookupEnd||0,domainLookupStart:t.domainLookupStart||0,fetchStart:t.fetchStart||0,requestStart:t.requestStart||0,redirectEnd:t.redirectEnd||0,redirectStart:t.redirectStart||0,responseEnd:t.responseEnd||0,responseStart:t.responseStart||0,secureConnectionStart:t.secureConnectionStart||0,startTime:t.startTime||0,workerStart:t.workerStart||0})},seP0:function(t,e,n){n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return u}));var r=n("FZ8N"),a=n("F4HH");const{Provider:o,useHook:i}=Object(a.a)({name:"board_picker",v2LoggerMetricName:16,sampleRate:r.b?1:.1}),c=(t,e)=>{let n="unknown";(null==e?void 0:e.includes("pin/"))?n="PinCloseup":"/"===e?n="HomeFeed":"PinBookMarklet"===e&&(n="PinBookmarklet"),null==t||t.addBinaryAnnotation("source",n,"STRING")},s=o,u=i},xfna:function(t,e,n){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return f}));var r=n("q1tI"),a=n.n(r),o=n("EHyI"),i=n("gg0E"),c=n("SyXB"),s=n("3/Bf"),u=n("+lzj"),p=n("HMdf");const d=Object(r.createContext)(null),b=Object(r.createContext)(null);function l({children:t,immutableLocation:e,resourceTimingCacheSize:n,routerHistoryAction:l,staticContext:m}){const f=Object(r.useRef)(null),y=Object(r.useRef)(null),O=Object(r.useRef)(e),j=Object(r.useRef)(!0);if(Object(r.useEffect)(()=>{Object(p.f)({size:n||1e3}),Object(u.c)(),Object(s.c)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach(t=>{window.performance[t]||Object(s.c)("not_supported.window.performance."+t)}):Object(s.c)("not_supported.window.performance"),window.PerformanceObserver||Object(s.c)("not_supported.window.PerformanceObserer"),Object(i.a)()||Object(s.c)("not_supported.grid_profiler"),j.current=!1},[]),O.current!==e){O.current=e,y.current=(null===(g=window.performance)||void 0===g?void 0:g.now)?window.performance.now():null;const{current:t}=y;if(!j.current){Object(s.c)("routeStart",{tags:{action:l}}),Object(p.a)(),Object(u.a)(),Object(c.b)();const{customBufferSize:e,defaultBufferSize:n}=Object(p.e)();t&&(Object(s.c)("routeStart.customBufferSize",{count:e}),Object(s.c)("routeStart.defaultBufferSize",{count:n}),f.current={time:t,action:l})}}var g;const v=Object(o.a)(m.deviceType);return a.a.createElement(d.Provider,{value:v?m:null},a.a.createElement(b.Provider,{value:f.current},t))}const m=()=>Object(r.useContext)(b),f=()=>Object(r.useContext)(d)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/60-964df86ba6994217b064.mjs.map
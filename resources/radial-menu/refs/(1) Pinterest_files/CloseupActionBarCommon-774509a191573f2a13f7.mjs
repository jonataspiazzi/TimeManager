(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["CloseupActionBarCommon"],{qlIy:function(e,t,n){n.r(t),n.d(t,"CloseupActionBar",(function(){return M}));var i=n("q1tI"),a=n.n(i),o=n("OPV1"),r=n("6wCo"),s=n("c4Fo"),l=n("n6mq");class c extends a.a.Component{constructor(...e){var t,n,i;super(...e),i={paused:!1,showPulsar:!1},(n="state")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}componentDidMount(){this.mountPulsar(),this.props.onExperienceMount&&this.experience&&this.props.onExperienceMount(this.experience)}componentWillUnmount(){clearTimeout(this.timer)}mountPulsar(){if(!this.experience)return;const{display_data:e}=this.experience;e.has_pulsar&&this.setState({showPulsar:!0})}renderPulsar(){const{anchor:e}=this.props,{paused:t}=this.state;if(!e)return null;const n=e.getBoundingClientRect(),{height:i,width:o}=n,r=-(68+i/2),s=-(68-o/2);return a.a.createElement(l.e,{position:"absolute",dangerouslySetInlineStyle:{__style:{zIndex:1,marginTop:r,marginLeft:s,cursor:"pointer",pointerEvents:"none"}}},a.a.createElement(l.G,{paused:t}))}renderFlyout(e){const{anchor:t,flyoutSize:n,idealDirection:i,textOverflow:o}=this.props;return a.a.createElement(l.q,{anchor:t,color:"blue",idealDirection:i||"down",onDismiss:()=>{},shouldFocus:!1,showCaret:!0,size:n},a.a.createElement(l.e,{column:12,padding:3},a.a.createElement(l.V,{color:"white",overflow:o,weight:"bold"},e)))}render(){const{experienceIds:e,placementId:t,shouldTimeoutDismiss:n}=this.props,{showPulsar:i}=this.state;return a.a.createElement(s.a,{experienceIds:e,placementId:t,type:8},e=>{const{complete:t,dismiss:o,display_data:r}=e;return this.experience=e,r.has_pulsar||r.has_tooltip?(n&&r.disappearTime&&r.disappearTime>0&&(this.timer=setTimeout(()=>(o(),null),r.disappearTime)),a.a.createElement(l.e,{dangerouslySetInlineStyle:{__style:{zIndex:10}}},i&&this.renderPulsar(),r.has_tooltip&&(!r.has_pulsar||this.state.paused)&&this.renderFlyout(r.text))):(t(),null)})}}var u=n("/MKj"),d=n("1Vso");const m="cubic-bezier(0, 0, 0.58, 1)",p={loaded:{opacity:1,transitionDuration:"0.20s",transitionTimingFunction:m,transitionProperty:"transform, opacity",transform:"translate(0, 5px)",transformOrigin:"center"},fade:{opacity:.1,transitionDuration:"0.30s",transitionTimingFunction:m,transitionProperty:"transform, opacity",transform:"translate(0, 5px)",transformOrigin:"center"}};function h({reactionLabel:e,handleHideConfirmation:t}){const[n,o]=Object(i.useState)("loaded"),r=Object(i.useRef)();return Object(i.useEffect)(()=>{let e=null,n=null;return r.current=requestAnimationFrame(()=>{e=setTimeout(()=>o("fade"),1e3),n=setTimeout(()=>t(),1300)}),function(){clearTimeout(e),clearTimeout(n)}},[]),a.a.createElement(l.e,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},a.a.createElement(l.e,{rounding:"pill",position:"absolute",color:"darkGray",ref:r,height:20,display:"flex",alignItems:"center",justifyContent:"center",paddingY:1,paddingX:2,dangerouslySetInlineStyle:{__style:{...p[n],whiteSpace:"nowrap"}}},a.a.createElement(l.V,{color:"white",size:"sm",weight:"bold",overflow:"normal"},e)))}var y=n("ihsa"),f=n("eo+c");const g=40,b={icon:{backgroundRepeat:"no-repeat",backgroundSize:"cover"},loading:{opacity:0,transitionDuration:"0.25s",transitionTimingFunction:"ease-out",transitionProperty:"transform, opacity",transform:"scaleX(1) scaleY(1) translateZ(0) translateY(25px)",transformOrigin:"bottom"},loaded:{opacity:1,transitionDuration:"0.2s",transitionTimingFunction:"ease-out",transitionProperty:"transform, opacity",transform:"scaleX(1) scaleY(1)",transformOrigin:"bottom"},clicked:{transition:"transform 0.2s ease-out",transform:"translateY(-30px) scaleX(1.6) scaleY(1.6)",transformOrigin:"bottom",position:"relative",zIndex:1},flying:{transition:"transform 0.2s ease-out",transformOrigin:"bottom"},label:{transition:"transform 0.2s ease-out",transform:"scale(0.625)",transformOrigin:"bottom",whiteSpace:"nowrap"},fading:{opacity:0,transition:"opacity 0.2s ease-out"}},E={boxShadow:"0 9px 26px rgba(0, 0, 0, 0.4)"};function S({reactionButtonRect:e,handleReactionTrayClick:t}){const[n,o]=Object(i.useState)("loading"),[r,s]=Object(i.useState)(""),[c,u]=Object(i.useState)(),[d,m]=Object(i.useState)(!1),[p,h]=Object(i.useState)({}),[S]=Object(i.useState)(e),T=Object(i.useRef)(),R=Object(i.useRef)({});Object(i.useEffect)(()=>{"loading"===n&&(T.current=requestAnimationFrame(()=>o("loaded"))),(()=>{m(!0);const e={...p};f.c.forEach(t=>{R.current[t]&&!e[t]&&(e[t]=R.current[t].getBoundingClientRect())}),Object.keys(e).length===f.c.length&&h(e)})(),!c&&d&&(()=>{const e={...c};f.c.forEach(t=>{const n=p[t],{left:i,top:a}=S,{left:o,top:r}=n,s=i-o-8,l=a-r+9;e[t]={translateX:s,translateY:l}}),u(e)})()},[d,e]);const v=()=>{"clicked"===n&&r&&(o("flying"),setTimeout(()=>{t(r)},750))},x=f.c.map((e,t)=>{const{staticAsset:i,animatedAsset:o,label:s,htmlStyle:u,animationStyle:d}=Object(f.a)(e),m={transitionDelay:.08*t+"s",...b[n]},p={...r===e?b.clicked:b.loaded},h={...c&&r===e?{transform:`translateZ(0) translateX(${c[e].translateX}px) translateY(${c[e].translateY}px) scaleX(0.6) scaleY(0.6) `,...b[n]}:b.fading};let E={};return"loading"===n||"loaded"===n?E={...m}:"clicked"===n?E={...p}:"flying"===n&&(E={...h}),a.a.createElement(l.e,{display:"flex",alignSelf:"center",justifyContent:"between",key:t},a.a.createElement(l.e,{maxHeight:g,maxWidth:g,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",dangerouslySetInlineStyle:{__style:{...E}},ref:t=>{R.current[e]=t}},r!==e&&a.a.createElement(l.e,{position:"absolute",top:!0,left:!0,bottom:!0,right:!0},a.a.createElement(l.e,{width:g,height:g,dangerouslySetInlineStyle:{__style:{backgroundImage:`url(${i})`,backgroundPosiiton:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}})),a.a.createElement(l.e,{display:"flex",alignItems:"center",justifyContent:"center",direction:"column",position:"relative"},a.a.createElement(y.a,{unsafeCSS:u}),r===e&&"clicked"===n&&a.a.createElement(l.e,{rounding:"pill",color:"darkGray",height:20,dangerouslySetInlineStyle:{__style:b.label},display:"flex",alignItems:"center",justifyContent:"center",paddingY:1,paddingX:2},a.a.createElement(l.V,{color:"white",size:"sm",weight:"bold",overflow:"normal"},s)),a.a.createElement("div",{onClick:v,onKeyDown:v,role:"presentation"},a.a.createElement(l.e,{width:g,height:g,display:"flex",alignItems:"center",justifyContent:"center",dangerouslySetInlineStyle:{__style:{...b.icon,...r===e&&"clicked"===n?{animation:d}:{},backgroundImage:`url(${o})`}}})))))});return a.a.createElement(l.e,{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",dangerouslySetInlineStyle:{__style:{marginLeft:-150}}},a.a.createElement(l.e,{display:"flex",alignItems:"center",justifyContent:"center",width:300,height:80,rounding:"pill",color:"flying"===n?"transparent":"white",dangerouslySetInlineStyle:{__style:{..."flying"!==n?E:{}}},onMouseMove:e=>{const{clientX:t}=e;if("flying"!==n){const e=(e=>{let t;return d&&f.c.forEach(n=>{const i=p[n];if(i&&i.left&&i.right){const{left:a,right:o}=i;e>=a&&e<=o&&(t=n)}}),t||null})(t);e!==r&&s(e),o("clicked")}}},a.a.createElement(l.e,{display:"flex",alignItems:"center",justifyContent:"around",width:"100%",paddingX:5},x)))}var T=n("eOdZ");var R=n("U4JR");function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const x={borderRadius:"50%"},O={backgroundColor:"rgb(226, 226, 226)"},w={backgroundColor:"rgb(218, 218, 218)"},C={boxShadow:"0 0 0 4px rgba(0, 132, 255, 0.5)",outline:0};class I extends i.PureComponent{constructor(...e){super(...e),v(this,"state",{clickedReaction:0,isConfirmationShowing:!1,isReactionTrayShowing:!1,reactionButtonRect:null,useInitialReaction:!0,isHoveringOverTray:!1,isHoveringOverButton:!1}),v(this,"reactionButtonRef",a.a.createRef()),v(this,"trayOpenTimer",null),v(this,"trayCloseTimer",null),v(this,"onResize",()=>{this.setReactionButtonRect(),this.startTrayCloseTimer()}),v(this,"onScroll",()=>{this.setReactionButtonRect(),this.startTrayCloseTimer()}),v(this,"handleExperienceMount",e=>{e&&e.complete&&(501977===e.experience_id||501995===e.experience_id)&&(this.tooltipExperience=e)}),v(this,"handleReact",(e=7)=>{const{pinId:t,pinUpdateReactionCount:n}=this.props,i={pin_id:t,reaction_type:e},{clickedReaction:a}=this.state;a&&n(t,!1,a),this.setState({clickedReaction:e,useInitialReaction:!1}),n(t,!0,e),T.a.create("ReactionsResource",i).callUpdate()}),v(this,"handleUnreact",()=>{const{pinId:e}=this.props,t={pin_id:e};this.setState({clickedReaction:0,useInitialReaction:!1}),T.a.create("ReactionsResource",t).callDelete()}),v(this,"setReactionButtonRect",()=>{if(this.reactionButtonRef.current&&this.reactionButtonRef.current instanceof HTMLElement){const e=this.reactionButtonRef.current.getBoundingClientRect();this.setState({reactionButtonRect:e})}}),v(this,"closeTray",()=>{this.setState({isReactionTrayShowing:!1})}),v(this,"startTrayCloseTimer",()=>{clearTimeout(this.trayCloseTimer),this.trayCloseTimer=setTimeout(()=>{const{isHoveringOverTray:e,isHoveringOverButton:t}=this.state;e||t||this.closeTray()},300)}),v(this,"handleOnHoverButton",()=>{this.setState({isHoveringOverButton:!0}),clearTimeout(this.trayOpenTimer),this.trayOpenTimer=setTimeout(()=>{const{isReactionTrayShowing:e,isHoveringOverButton:t}=this.state;!e&&t&&this.setState({isReactionTrayShowing:!0})},500),this.tooltipExperience&&this.tooltipExperience.complete()}),v(this,"handleOffHoverButton",()=>{this.setState({isHoveringOverButton:!1}),this.startTrayCloseTimer()}),v(this,"handleOnHoverTray",()=>{this.setState({isHoveringOverTray:!0})}),v(this,"handleOffHoverTray",()=>{this.setState({isHoveringOverTray:!1}),this.startTrayCloseTimer()}),v(this,"handleClickButton",()=>{const{clickedReaction:e,useInitialReaction:t}=this.state,{pinId:n,pinUpdateReactionCount:i,reactionByMe:a}=this.props,o=t?a:e;o?(i(n,!1,o),this.handleUnreact()):this.setReaction("love"),clearTimeout(this.trayOpenTimer),this.closeTray(),Object(R.b)(101,{view:3,viewParameter:139,element:11354,objectId:n})}),v(this,"setReaction",e=>{this.handleReact(Object(f.a)(e).type),this.handleShowConfirmation()}),v(this,"handleShowConfirmation",()=>{this.setState({isConfirmationShowing:!0})}),v(this,"handleHideConfirmation",()=>{this.setState({isConfirmationShowing:!1},this.startTrayCloseTimer)})}componentDidMount(){this.setReactionButtonRect(),window.addEventListener("mouseover",this.setReactionButtonRect)}componentWillUnmount(){clearTimeout(this.trayOpenTimer),clearTimeout(this.trayCloseTimer),window.removeEventListener("mouseover",this.setReactionButtonRect)}render(){const{isReactionTrayShowing:e,reactionButtonRect:t,isConfirmationShowing:n,clickedReaction:i,useInitialReaction:o,isHoveringOverTray:r}=this.state,{reactionByMe:s,showTooltip:u}=this.props,m=o?s:i,p=m?f.b[m]:"default",{staticAsset:y,label:g}=Object(f.a)(p);return a.a.createElement(l.e,{position:"relative"},a.a.createElement(d.a,{accessibilityLabel:"reaction",onClick:this.handleClickButton,onMouseEnter:this.handleOnHoverButton,onMouseLeave:this.handleOffHoverButton,style:{display:"block",border:"none",padding:0,cursor:"pointer",background:"transparent",outline:"none",borderRadius:"50%"}},({active:e,hovered:t,focused:n})=>{let i={...x};return e?i={...x,...w}:t||r?i={...x,...O}:n&&(i={...x,...C}),a.a.createElement(l.e,{color:"transparent",rounding:"circle",dangerouslySetInlineStyle:{__style:i}},a.a.createElement(l.e,{display:"flex",justifyContent:"center",alignItems:"center",dangerouslySetInlineStyle:{__style:{minHeight:44,minWidth:44}}},a.a.createElement(l.e,{height:24,width:24,ref:this.reactionButtonRef,display:"flex",alignItems:"center",justifyContent:"center",dangerouslySetInlineStyle:{__style:{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosiiton:"center",backgroundImage:`url(${y})`}}})))}),u&&!e&&!n&&o&&a.a.createElement(c,{experienceIds:[501977,501995],idealDirection:"down",placementId:12,anchor:this.reactionButtonRef.current,flyoutSize:"lg",onExperienceMount:this.handleExperienceMount}),e&&!!t&&!!t.left&&!!t.top&&a.a.createElement(l.e,{display:"flex",justifyContent:"center",alignItems:"center"},a.a.createElement(l.Q,{top:0},a.a.createElement(l.U,{onMouseEnter:this.handleOnHoverTray,onMouseLeave:this.handleOffHoverTray},a.a.createElement(S,{reactionButtonRect:t,handleReactionTrayClick:this.setReaction})))),n&&!!m&&g&&a.a.createElement(h,{reactionLabel:g,handleHideConfirmation:this.handleHideConfirmation}))}}var _=Object(u.connect)(null,e=>({pinUpdateReactionCount:(t,n,i)=>e(function(e,t,n){return{type:"PIN_UPDATE_REACTION_COUNT",payload:{id:e,increment:t,reactionType:n}}}(t,n,i))}))(I),B=n("rYoy"),j=n("zXAL"),k=n("T5j3"),H=n("/zJj");function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const D=Object(i.lazy)(()=>Promise.resolve().then(n.bind(null,"fepT")));class M extends a.a.Component{constructor(e){super(e),P(this,"sendExperienceComplete",()=>{}),P(this,"handleExternalSend",()=>{this.sendExperienceComplete()}),P(this,"onSendExperienceMount",e=>{e&&e.complete&&500946===e.experience_id&&(this.sendExperienceComplete=e.complete)}),P(this,"promoteButtonRef",Object(i.createRef)()),this.sendButtonTooltipRef=a.a.createRef()}render(){const{editable:e,gridDescription:t,hidePromoteButton:n,imageSrc:i,isFlyoutOpen:s,isOnSecretBoard:u,isPdp:d,onEditSubmit:m,onFlyoutDismiss:p,onToggleFlyout:h,pin:y,promoteButton:f,saveButton:g,shareButtonRef:b,viewParameter:E}=this.props,S=u?null:a.a.createElement(B.a,null,a.a.createElement(l.e,null,a.a.createElement(l.e,{ref:this.sendButtonTooltipRef},a.a.createElement(D,{buttonType:"icon",gridDescription:t,imageSrc:i,isFlyoutOpen:s,onExternalSend:this.handleExternalSend,onFlyoutDismiss:p,onToggleFlyout:h,pinId:y.id,sendType:"pin",shareButtonRef:b})),g&&!s&&a.a.createElement(c,{experienceIds:[500946],placementId:12,anchor:this.sendButtonTooltipRef.current,onExperienceMount:this.onSendExperienceMount}))),T=Object(k.c)(y),R=a.a.createElement(l.e,{display:"flex",color:"white",justifyContent:"between",rounding:2,"data-test-id":"closeup-action-items",maxWidth:d?H.f:H.d},a.a.createElement(l.e,{display:"flex"},e&&a.a.createElement(l.e,{marginEnd:1},a.a.createElement(o.a,{carouselSlotCurrentIndex:y&&y.carousel_data&&y.carousel_data.index,pinId:y.id,onSubmit:m,view:3,viewParameter:E})),a.a.createElement(r.a,{pin:y,viewParameter:E})),a.a.createElement(l.e,{alignItems:"center",display:"flex"},S,T&&a.a.createElement(B.a,null,a.a.createElement(_,{pinId:y.id,reactionByMe:y.reaction_by_me,showTooltip:!0})),!n&&f&&a.a.createElement(B.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(l.e,{ref:this.promoteButtonRef},f),a.a.createElement(c,{experienceIds:[501121],idealDirection:"down",placementId:12,anchor:this.promoteButtonRef.current,flyoutSize:"lg"})))));return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.e,{display:"flex",justifyContent:"between"},R,a.a.createElement(l.e,{marginStart:3},g)))}}t.default=Object(j.a)(M)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/CloseupActionBarCommon-774509a191573f2a13f7.mjs.map
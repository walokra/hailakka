(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{248:function(e,t,n){"use strict";n.d(t,"a",(function(){return qe}));var r=n(16),a=n.n(r),o=n(0),i=n.n(o),l=n(106),c=n(60),s=n(6),u=n(2),p=n(25),f=n(89),d=n(28),m=n(178),h=n(336),y=n(211),b=n(209),g=n(87),E=n(338),O=n(241),S=n(252),v=n(337),w=n(176),j=n(13),x=n.n(j),P=n(4),k=n.n(P),C=n(339),D=n(340),I=n(177);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){k()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e,t){return"https://"+e+"/"+t+"/json-private?APIKEY=1234567890"},H={method:"GET",headers:{Accept:"application/json"}},L=n(185),z=n(249),F=n(107);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){k()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G={darkModeEnabled:!1},N=Object(F.b)({Settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_THEME":switch(t.payload){case!0:return V(V({},e),{},{darkModeEnabled:!0});case!1:default:return V(V({},e),{},{darkModeEnabled:!1})}default:return e}}}),J=function(e){var t=Object(L.a)().colors,n=Object(l.c)((function(e){return e.Settings.darkModeEnabled})),r=Object(l.b)();return i.a.createElement(u.a,{style:q.switchContainerStyle},i.a.createElement(u.a,{style:q.titleWrapper},i.a.createElement(p.a,{style:[q.switchTitleStyle,{color:t.text}]},"Highlakka")),i.a.createElement(u.a,{style:q.switchWrapperStyle},i.a.createElement(z.a,{value:n,onChange:function(e){r({type:"TOGGLE_THEME",payload:e})}})))},q=s.a.create({switchContainerStyle:{padding:0,minHeight:25,alignItems:"center",flexDirection:"row"},switchTitleStyle:{flex:0,paddingLeft:15,paddingRight:8,fontSize:16,fontWeight:"bold"},switchWrapperStyle:{flex:0,flexDirection:"row",paddingLeft:8,paddingRight:8,justifyContent:"flex-end"},titleWrapper:{flex:1,position:"relative"}}),A=n(5),B=n(43),U=n(55),Y=n(122),_=n(105),K=Object(o.createContext)({htmlFilename:"uutiset",title:"Uutiset"}),Q=function(e){var t=_.DateTime.fromISO(e),n=_.DateTime.now().diff(t,["years","months","days","hours","minutes"]).toObject(),r=n.days,a=n.hours,o=n.minutes;return 0!=r?1==r?1440:1440*r:0!=a?1==a?60*(a+1):60*a:o<0?0:o<5?5:o<15?15:o<30?30:o<45?45:o<60?60:99999},X=function(e){var t=_.DateTime.fromISO(e).diffNow(["days","hours","minutes"]).toObject(),n=Math.abs(t.days),r=Math.abs(t.hours),a=Math.abs(t.minutes);return 0!=n?1===n?"Yesterday":n+" days":0!=r?1==r?"< "+(r+1)+" hours":"< "+r+" hours":a<0?"Just now":a<5?"< 5 minutes":a<15?"< 15 minutes":a<30?"< 30 minutes":a<45?"< 45 minutes":a<60?"< 60 minutes":void 0},Z=s.a.create({container:{alignSelf:"stretch",paddingVertical:5},title:{fontSize:15}}),$=function(e){var t=e.section,n=e.colors;return i.a.createElement(u.a,{style:[Z.container,{backgroundColor:n.background}]},i.a.createElement(p.a,{style:[Z.title,{color:n.text}]},t))};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){k()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=s.a.create({container:{flex:1},contentContainer:{alignItems:"baseline"},articleContainer:{flex:1,alignItems:"baseline"},footerContainer:te(te({position:"absolute",bottom:5,left:0,right:0},A.a.select({ios:{shadowColor:"black",shadowOffset:{width:0,height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}})),{},{alignItems:"center"}),footerInfoText:{fontSize:10,color:"rgba(96,100,109, 1)",textAlign:"center"},entryContainer:{paddingVertical:5,flex:1,flexDirection:"row",alignItems:"center",paddingHorizontal:10,paddingTop:10},entryImage:{alignItems:"flex-start",width:100,height:100},entryContent:{flex:1,flexDirection:"column",paddingHorizontal:10},title:{fontSize:15,minWidth:0},source:{fontSize:12},description:{minWidth:0,fontSize:14,marginTop:3},linkText:{fontSize:9,color:"#2e78b7"}}),re=function(e){var t=e.navigation,n=Object(o.useContext)(K).htmlFilename,r=Object(o.useState)([]),l=a()(r,2),c=l[0],s=l[1],d=Object(o.useState)(!0),m=a()(d,2),h=m[0],y=m[1],b=Object(o.useState)(!1),g=a()(b,2),E=g[0],O=g[1],S=Object(L.a)().colors;Object(o.useEffect)((function(){var e=new Request(W("fi.high.fi",""+n),H);fetch(e).then((function(e){return x.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.json());case 1:case"end":return t.stop()}}),null,null,null,Promise)})).then((function(e){return e.responseData.feed.entries})).then((function(e){var t,r,a;return x.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:s([]),"top"===n?(t=0,r=" 1 ..10",e.forEach((function(e){c[r=t<10?" 1 ..10":t<20?" 11 ..20":t<30?" 21 ..30":t<40?" 31 ..40":t<50?" 41 ..50":t<60?" 51 ..60":t<70?" 61 ..70":" 70 ..."]?c[r].push(e):c[r]=[e],t+=1})),s(c),y(!1),O(!1)):(a=[],e.map((function(e){var t=te(te({},e),{},{timeSince:X(e.publishedDateJS),orderNo:Q(e.publishedDateJS),publishedDate:_.DateTime.fromISO(e.publishedDateJS).toLocal().toFormat("ccc d.m.yyyy HH:mm")});a.push(t)})),a.sort((function(e,t){return e.orderNo-t.orderNo})),a.forEach((function(e){c[e.timeSince]?c[e.timeSince].push(e):c[e.timeSince]=[e]})),s(c),y(!1),O(!1));case 2:case"end":return o.stop()}}),null,null,null,Promise)})).catch((function(e){console.error(e),y(!1),O(!0)})).finally((function(){return y(!1)}))}),[]);return i.a.createElement(u.a,{style:ne.container},i.a.createElement((function(e){return e.isLoading?i.a.createElement(f.a,{animating:!0}):e.isError?i.a.createElement(p.a,null,"Failed to load news!"):i.a.createElement(Y.b,{style:[ne.container,{backgroundColor:S.card}],contentContainerStyle:[ne.contentContainer]},Object.keys(c).map((function(e,n){return i.a.createElement(u.a,{key:n,style:ne.articleContainer},i.a.createElement($,{section:e,colors:S}),c[e].map((function(e,n){return i.a.createElement(U.a,{key:n,onPress:function(){t.navigate("WebView",{link:e.link,title:e.title})},style:ne.entryContainer},i.a.createElement(B.a,{source:{uri:e.picture},style:[ne.entryImage]}),i.a.createElement(u.a,{style:ne.entryContent},i.a.createElement(p.a,{style:[ne.title,{color:S.text}]},e.title),i.a.createElement(p.a,{style:[ne.source,{color:S.text}]},e.author," - ",e.publishedDate),i.a.createElement(p.a,{style:[ne.description,{color:S.text}]},e.shortDescription)))})))})))}),{isLoading:h,isError:E}),i.a.createElement(u.a,{style:[ne.footerContainer,{backgroundColor:S.card}]},i.a.createElement(U.a,{onPress:function(){t.navigate("WebView",{link:"https://high.fi",title:"High.fi"})}},i.a.createElement(p.a,{style:ne.footerInfoText},"Powered by ",i.a.createElement(p.a,{style:ne.linkText},"high.fi")))))},ae=n(251),oe=n(18),ie=n.n(oe),le=n(7),ce=n.n(le),se=n(8),ue=n.n(se),pe=n(9),fe=n.n(pe),de=n(11),me=n.n(de),he=n(1),ye=n.n(he),be=n(90),ge=n(39),Ee=n.n(ge);function Oe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ye()(e);if(t){var a=ye()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return me()(this,n)}}var Se=s.a.create({defaultContainerStyle:{padding:0,minHeight:50,backgroundColor:"white",alignItems:"center",flexDirection:"row"},defaultTitleStyle:{flex:0,paddingLeft:16,paddingRight:8,fontSize:16},defaultDescriptionStyle:{flex:0,paddingLeft:16,paddingRight:8,fontSize:12},defaultSwitchWrapperStyle:{flex:0,flexDirection:"row",paddingLeft:8,marginRight:64},defaultDisabledOverlayStyle:{backgroundColor:"rgba(255,255,255,0.6)",position:"absolute",top:0,right:0,bottom:0,left:0},titleWrapper:{flex:1,position:"relative"}}),ve=function(e){fe()(n,e);var t=Oe(n);function n(){return ce()(this,n),t.apply(this,arguments)}return ue()(n,[{key:"render",value:function(){var e=this.props,t=e.containerProps,n=e.containerStyle,r=e.titleProps,a=e.titleStyle,o=e.title,l=e.disabled,c=e.switchProps,s=e.disabledOverlayStyle,f=e.switchWrapperProps,d=e.switchWrapperStyle,m=e.value,h=e.trackColor,y=e.onValueChange,b=e.descriptionProps,g=e.descriptionStyle,E=e.description;return i.a.createElement(u.a,ie()({},t,{style:[Se.defaultContainerStyle,n]}),i.a.createElement(u.a,{style:Se.titleWrapper},i.a.createElement(p.a,ie()({},r,{style:[Se.defaultTitleStyle,a]}),o),E?i.a.createElement(p.a,ie()({},b,{style:[Se.defaultDescriptionStyle,g]}),E):null,l?i.a.createElement(u.a,{style:[Se.defaultDisabledOverlayStyle,l?s:null]}):null),i.a.createElement(u.a,ie()({},f,{style:[Se.defaultSwitchWrapperStyle,d]}),i.a.createElement(be.a,ie()({value:m,trackColor:h,onValueChange:y,disabled:l},c))))}}]),n}(o.Component);ve.propTypes={containerProps:Ee.a.object,containerStyle:Ee.a.object,disabledOverlayStyle:Ee.a.object,titleProps:Ee.a.object,titleStyle:Ee.a.object,title:Ee.a.string.isRequired,descriptionProps:Ee.a.object,descriptionStyle:Ee.a.object,description:Ee.a.string,switchWrapperProps:Ee.a.object,switchWrapperStyle:Ee.a.object,value:Ee.a.bool.isRequired,disabled:Ee.a.bool,onValueChange:Ee.a.func.isRequired,trackColor:Ee.a.shape({true:Ee.a.string,false:Ee.a.string}),switchProps:Ee.a.object},ve.defaultProps={containerProps:{},containerStyle:{},disabledOverlayStyle:{},titleProps:{},titleStyle:{},descriptionProps:{},descriptionStyle:{},description:null,switchWrapperProps:{},switchWrapperStyle:{},disabled:!1,switchProps:{},trackColor:null};var we=ve;function je(e){e.route,e.navigation;var t=Object(o.useState)(!1),n=a()(t,2),r=n[0],l=n[1],c=Object(L.a)().colors;return i.a.createElement(Y.b,{style:[Pe.container,{backgroundColor:c.card}],contentContainerStyle:[Pe.contentContainer]},i.a.createElement(u.a,{key:"application"},i.a.createElement(p.a,{style:[Pe.titleStyle,{color:c.text}]},"Information"),i.a.createElement(u.a,null,i.a.createElement(xe,{icon:"md-compass",label:"Highlakka on GitHub",onPress:function(){return ae.a("https://github.com/walokra/highlakka")},isLastOption:!0}))),i.a.createElement(u.a,null,i.a.createElement(p.a,{style:[Pe.titleStyle,{color:c.text}]},"General"),i.a.createElement(we,{title:"Use mobile mode",containerStyle:{backgroundColor:c.card},titleStyle:{color:c.text},onValueChange:function(e){console.log("use mobile mode:",e),l(e)},value:r})))}function xe(e){var t=e.icon,n=e.label,r=e.onPress,a=e.isLastOption,o=Object(L.a)().colors;return i.a.createElement(Y.a,{style:[Pe.option,a&&Pe.lastOption,{backgroundColor:o.card}],onPress:r},i.a.createElement(u.a,{style:{flexDirection:"row"}},i.a.createElement(u.a,{style:Pe.optionIconContainer},i.a.createElement(C.a,{name:t,size:22,color:"rgba(0,0,0,0.35)"})),i.a.createElement(u.a,null,i.a.createElement(p.a,{style:[Pe.optionText,{color:o.text}]},n))))}var Pe=s.a.create({container:{flex:1,backgroundColor:"#fafafa",minHeight:50,flexDirection:"row"},contentContainer:{paddingTop:15,flex:1,minHeight:50},optionIconContainer:{marginRight:12,marginLeft:12},titleStyle:{flex:0,paddingLeft:16,paddingRight:8,fontSize:16},option:{backgroundColor:"#fdfdfd",paddingHorizontal:5,paddingVertical:5,borderBottomWidth:0,borderColor:"#ededed"},lastOption:{},optionText:{fontSize:15,alignSelf:"flex-start",marginTop:1}}),ke=n(253),Ce=function(e){var t=e.target;return"web"===A.a.OS?i.a.createElement("iframe",{src:t,style:De}):i.a.createElement(u.a,{style:Ie.container},i.a.createElement(ke.a,{source:{uri:t},startInLoadingState:!0,scalesPageToFit:!0}))},De={top:0,height:"100%",width:"100%"},Ie=s.a.create({container:{height:"100%",width:"100%",overflow:"hidden"}});function Te(e){var t=e.route,n=(e.navigation,t.params.link);return i.a.createElement(u.a,{style:Re.container},i.a.createElement(Ce,{target:n}))}var Re=s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),We=[n(240).a],He=[F.a.apply(void 0,We)],Le=F.c.apply(void 0,He),ze=Object(F.d)(N,{},Le),Fe=function(e){return i.a.createElement(O.a,e,i.a.createElement(J,e),i.a.createElement(S.a,e))},Me=Object(v.a)(),Ve=Object(E.a)(),Ge=function(e){var t=e.item,n=t.title,r=t.htmlFilename;return i.a.createElement(K.Provider,{value:{htmlFilename:r,title:n}},i.a.createElement(Ve.Navigator,null,i.a.createElement(Ve.Screen,{name:"Highlakka",component:re,options:{title:"Highlakka: "+n}}),i.a.createElement(Ve.Screen,{name:"Settings",component:je,options:{title:"Settings"}}),i.a.createElement(Ve.Screen,{name:"WebView",component:Te,options:function(e){return{title:e.route.params.title}}})))};function Ne(){return i.a.createElement(u.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}})}function Je(){var e=function(){var e=o.useState(!1),t=a()(e,2),r=t[0],i=t[1];return o.useEffect((function(){x.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I.b(),e.next=4,x.a.awrap(D.b(R(R({},C.a.font),{},{"space-mono":n(287)})));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0);case 9:return e.prev=9,i(!0),I.a(),e.finish(9);case 13:case"end":return e.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),r}(),t=(Object(w.useColorScheme)(),d.a.get("window").width>=768),r=Object(l.c)((function(e){return e.Settings.darkModeEnabled})),s=Object(o.useState)([]),E=a()(s,2),O=E[0],S=E[1],v=Object(o.useState)(!0),j=a()(v,2),P=j[0],k=j[1],T=Object(o.useState)(!1),L=a()(T,2),z=L[0],F=L[1],M=r?"dark-content":"light-content";return Object(o.useEffect)((function(){(function(e,t,n,r,a){var o,i,l,c,s,u;return x.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return(o=[]).push({title:t,sectionID:"top",htmlFilename:"top",selected:!0,depth:1}),i={title:r,sectionID:n,htmlFilename:n,selected:!0,depth:1},o.push(i),l=""+W(e,"/api/?act=listCategories&usedLanguage="+a+"&APIKEY=1234567890"),c=new Request(l,H),p.prev=7,p.next=10,x.a.awrap(fetch(c));case 10:return s=p.sent,p.next=13,x.a.awrap(s.json());case 13:return u=p.sent,u.responseData.categories.forEach((function(e){var t={};for(var n in e)t[n]=e[n];t.selected=!1,o.push(t)})),p.abrupt("return",o);case 19:throw p.prev=19,p.t0=p.catch(7),console.error(p.t0),Error("Fetching languages failed! "+p.t0.message);case 23:case"end":return p.stop()}}),null,null,[[7,19]],Promise)})("fi.high.fi","Suosituimmat","uutiset","Uusimmat","finnish").then((function(e){S(e),k(!1),F(!1)})).catch((function(e){console.error(e),k(!1),F(!0)})).finally((function(){return k(!1)}))}),[]),e?P?i.a.createElement(m.b,null,i.a.createElement(h.a,{style:[Ae.container]},i.a.createElement(f.a,{animating:!0}))):z?i.a.createElement(m.b,null,i.a.createElement(h.a,{style:[Ae.container]},i.a.createElement(p.a,null,"Failed to load news!"))):i.a.createElement(m.b,null,i.a.createElement(y.a,{theme:r?b.a:g.a},i.a.createElement(u.a,{style:[Ae.container]},i.a.createElement(c.a,{barStyle:M}),i.a.createElement(Me.Navigator,{drawerType:t?"permanent":"back",drawerStyle:t?null:{width:"100%"},overlayColor:"transparent",drawerContent:Fe,initialRouteName:"Root"},O&&O.length>0?O.map((function(e,t){return i.a.createElement(Me.Screen,{key:e.sectionID,name:e.title+"_"+e.sectionID,children:function(){return i.a.createElement(Ge,{item:e})},options:{drawerLabel:e.title}})})):i.a.createElement(Me.Screen,{name:"empty",component:Ne}))))):null}function qe(){return i.a.createElement(w.AppearanceProvider,null,i.a.createElement(l.a,{store:ze},i.a.createElement(Je,null)))}var Ae=s.a.create({container:{flex:1,backgroundColor:"#fff"},header:{height:50}})},264:function(e,t,n){e.exports=n(326)},287:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"}},[[264,1,2]]]);
//# sourceMappingURL=app.7a32447c.chunk.js.map
(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{336:function(e,t,n){e.exports=n(463)},367:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"},463:function(e,t,n){"use strict";n.r(t);var r=n(491),i=n(24),o=n.n(i),c=n(10),a=n.n(c),l=n(6),s=n.n(l),u=n(477),d=n(298),f=n(299),j=n(478),h=n(487),b=n(488),p=n(192),O=n(484),g=n(320),y=n(0),x=n.n(y),m=n(132),S=n(11),v=n(32),w=n(184),C=n(8),D=n(109),k=n(486),P=n(170),I=n(324),T=n(15),E={setState:function(e){},state:{colorScheme:"dark"}},z=x.a.createContext(E),L=function(e){var t=e.children,n=x.a.useState(E.state),r=a()(n,2),i=r[0],o=r[1];return Object(T.jsx)(z.Provider,{value:{setState:o,state:i},children:t})},W=function(e){var t=Object(P.default)().colors,n=Object(y.useContext)(z);return Object(T.jsxs)(C.default,{style:H.switchContainerStyle,children:[Object(T.jsx)(C.default,{style:H.titleWrapper,children:Object(T.jsx)(v.default,{style:[H.switchTitleStyle,{color:t.text}],children:"Highlakka"})}),Object(T.jsx)(C.default,{style:H.switchWrapperStyle,testID:"theme-switch-container-view",children:Object(T.jsx)(I.default,{onChange:function(e){n.setState(!0===e?{colorScheme:"dark"}:{colorScheme:"light"})},testID:"theme-switch",value:"dark"===n.state.colorScheme})})]})},H=S.default.create({switchContainerStyle:{alignItems:"center",flexDirection:"row",minHeight:25,padding:0},switchTitleStyle:{flex:0,fontSize:16,fontWeight:"bold",paddingLeft:15,paddingRight:8},switchWrapperStyle:{flex:0,flexDirection:"row",justifyContent:"flex-end",paddingLeft:8,paddingRight:8},titleWrapper:{flex:1,position:"relative"}}),A=Object(y.createContext)({htmlFilename:"uutiset",title:"Uutiset"}),R=function(e,t){return"https://"+e+"/"+t+"/json-private?APIKEY=1234567890"},V={headers:{Accept:"application/json"},method:"GET"},F=function(){var e=o()((function*(e,t,n,r,i){var o=[],c={depth:1,htmlFilename:"top",sectionID:"top",selected:!0,title:t};o.push(c);var a={depth:1,htmlFilename:n,sectionID:n,selected:!0,title:r};o.push(a);var l=""+R(e,"api/?act=listCategories&usedLanguage="+i+"&APIKEY=1234567890"),s=new Request(l,V);try{var u=yield fetch(s);return(yield u.json()).responseData.categories.forEach((function(e){var t={};for(var n in e)t[n]=e[n];t.selected=!1,o.push(t)})),o}catch(d){throw console.error(d),Error("Fetching languages failed! "+d.message)}}));return function(t,n,r,i,o){return e.apply(this,arguments)}}(),N=n(229),J=n(228);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=n(321),U=n(151),Y=n(62),q=n(9),K=n(101),_=n(98),Q=S.default.create({container:{alignSelf:"stretch",paddingVertical:5},title:{fontSize:15}}),X=function(e){var t=e.colors,n=e.section;return Object(T.jsx)(C.default,{style:[Q.container,{backgroundColor:t.background}],children:Object(T.jsx)(v.default,{style:[Q.title,{color:t.text}],children:n})})},Z=function(e){var t=U.DateTime.fromISO(e),n=U.DateTime.now().diff(t,["years","months","days","hours","minutes"]).toObject(),r=n.days,i=n.hours,o=n.minutes;return 0!==r?1===r?1440:1440*r:0!==i?1===i?60*(i+1):60*i:o<0?0:o<5?5:o<15?15:o<30?30:o<45?45:o<60?60:99999},$=function(e){var t=U.DateTime.fromISO(e).diffNow(["days","hours","minutes"]).toObject(),n=Math.abs(t.days),r=Math.abs(t.hours),i=Math.abs(t.minutes);return 0!==n?1===n?"Yesterday":n+" days":0!==r?1===r?"< "+(r+1)+" hours":"< "+r+" hours":i<0?"Just now":i<5?"< 5 minutes":i<15?"< 15 minutes":i<30?"< 30 minutes":i<45?"< 45 minutes":i<60?"< 60 minutes":void 0};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=S.default.create({articleContainer:{alignItems:"baseline",flex:1},container:{flex:1},contentContainer:{alignItems:"baseline"},description:{fontSize:14,marginTop:3,minWidth:0},entryContainer:{alignItems:"center",flex:1,flexDirection:"row",paddingHorizontal:10,paddingTop:10,paddingVertical:5},entryContent:{flex:1,flexDirection:"column",paddingHorizontal:10},entryImage:{alignItems:"flex-start",height:100,width:100},footerContainer:te(te({bottom:5,left:0,position:"absolute",right:0},q.default.select({android:{elevation:20},ios:{shadowColor:"black",shadowOffset:{height:-3,width:0},shadowOpacity:.1,shadowRadius:3}})),{},{alignItems:"center"}),footerInfoText:{color:"rgba(96,100,109, 1)",fontSize:10,textAlign:"center"},linkText:{color:"#2e78b7",fontSize:9},source:{fontSize:12},title:{fontSize:15,minWidth:0}}),re=function(e){var t=e.navigation,n=Object(y.useContext)(A).htmlFilename,r=Object(y.useState)([]),i=a()(r,2),c=i[0],l=i[1],s=Object(y.useState)(!0),u=a()(s,2),d=u[0],f=u[1],j=Object(y.useState)(!1),h=a()(j,2),b=h[0],p=h[1],O=Object(P.default)().colors;Object(y.useEffect)((function(){var e=new Request(R("fi.high.fi",""+n),V);fetch(e).then(function(){var e=o()((function*(e){return e.json()}));return function(t){return e.apply(this,arguments)}}()).then((function(e){return e.responseData.feed.entries})).then((function(e){if(l([]),"top"===n){var t=0,r=" 1 ..10";e.forEach((function(e){c[r=t<10?" 1 ..10":t<20?" 11 ..20":t<30?" 21 ..30":t<40?" 31 ..40":t<50?" 41 ..50":t<60?" 51 ..60":t<70?" 61 ..70":" 70 ..."]?c[r].push(e):c[r]=[e],t+=1})),l(c),f(!1),p(!1)}else{var i=[];e.map((function(e){var t=te(te({},e),{},{orderNo:Z(e.publishedDateJS),publishedDate:U.DateTime.fromISO(e.publishedDateJS).toLocal().toFormat("ccc d.m.yyyy HH:mm"),timeSince:$(e.publishedDateJS)});i.push(t)})),i.sort((function(e,t){return e.orderNo-t.orderNo})),i.forEach((function(e){c[e.timeSince]?c[e.timeSince].push(e):c[e.timeSince]=[e]})),l(c),f(!1),p(!1)}})).catch((function(e){console.error(e),f(!1),p(!0)})).finally((function(){return f(!1)}))}),[]);return Object(T.jsxs)(C.default,{style:ne.container,children:[Object(T.jsx)((function(e){return e.isLoading?Object(T.jsx)(m.default,{animating:!0}):e.isError?Object(T.jsx)(v.default,{children:"Failed to load news!"}):Object(T.jsx)(_.ScrollView,{contentContainerStyle:[ne.contentContainer],style:[ne.container,{backgroundColor:O.card}],children:Object.keys(c).map((function(e,n){return Object(T.jsxs)(C.default,{style:ne.articleContainer,children:[Object(T.jsx)(X,{colors:O,section:e}),c[e].map((function(e,n){return Object(T.jsxs)(K.default,{onPress:function(){t.navigate("WebView",{link:e.link,title:e.title}),G.openBrowserAsync(e.link).catch(console.error)},style:ne.entryContainer,children:[Object(T.jsx)(Y.default,{source:{uri:e.picture},style:[ne.entryImage]}),Object(T.jsxs)(C.default,{style:ne.entryContent,children:[Object(T.jsx)(v.default,{style:[ne.title,{color:O.text}],children:e.title}),Object(T.jsxs)(v.default,{style:[ne.source,{color:O.text}],children:[e.author," - ",e.publishedDate]}),Object(T.jsx)(v.default,{style:[ne.description,{color:O.text}],children:e.shortDescription})]})]},n)}))]},n)}))})}),{isError:b,isLoading:d}),Object(T.jsx)(C.default,{style:[ne.footerContainer,{backgroundColor:O.card}],children:Object(T.jsx)(K.default,{onPress:function(){t.navigate("WebView",{link:"https://high.fi",title:"High.fi"})},children:Object(T.jsxs)(v.default,{style:ne.footerInfoText,children:["Powered by ",Object(T.jsx)(v.default,{style:ne.linkText,children:"high.fi"})]})})})]})},ie=n(136),oe=S.default.create({defaultContainerStyle:{alignItems:"center",backgroundColor:"white",flexDirection:"row",minHeight:50,padding:0},defaultDescriptionStyle:{flex:0,fontSize:12,paddingLeft:16,paddingRight:8},defaultDisabledOverlayStyle:{backgroundColor:"rgba(255,255,255,0.6)",bottom:0,left:0,position:"absolute",right:0,top:0},defaultSwitchWrapperStyle:{flex:0,flexDirection:"row",marginRight:64,paddingLeft:8},defaultTitleStyle:{flex:0,fontSize:16,paddingLeft:16,paddingRight:8},titleWrapper:{flex:1,position:"relative"}}),ce=function(e){var t=e.containerStyle,n=e.description,r=e.descriptionStyle,i=e.disabled,o=e.onValueChange,c=e.title,a=e.titleStyle,l=e.trackColor,s=e.value;return Object(T.jsxs)(C.default,{style:[oe.defaultContainerStyle,t],children:[Object(T.jsxs)(C.default,{style:oe.titleWrapper,children:[Object(T.jsx)(v.default,{style:[oe.defaultTitleStyle,a],children:c}),n?Object(T.jsx)(v.default,{style:[oe.defaultDescriptionStyle,r],children:n}):null,i?Object(T.jsx)(C.default,{style:[oe.defaultDisabledOverlayStyle]}):null]}),Object(T.jsx)(C.default,{style:[oe.defaultSwitchWrapperStyle],children:Object(T.jsx)(ie.default,{disabled:i,onValueChange:o,trackColor:l,value:s})})]})};function ae(){var e=Object(y.useState)(!1),t=a()(e,2),n=t[0],r=t[1],i=Object(P.default)().colors;return Object(T.jsxs)(_.ScrollView,{contentContainerStyle:[se.contentContainer],style:[se.container,{backgroundColor:i.card}],children:[Object(T.jsxs)(C.default,{children:[Object(T.jsx)(v.default,{style:[se.titleStyle,{color:i.text}],children:"Information"}),Object(T.jsx)(C.default,{children:Object(T.jsx)(le,{icon:"md-compass",isLastOption:!0,label:"Highlakka on GitHub",onPress:function(){}})})]},"application"),Object(T.jsxs)(C.default,{children:[Object(T.jsx)(v.default,{style:[se.titleStyle,{color:i.text}],children:"General"}),Object(T.jsx)(ce,{containerStyle:{backgroundColor:i.card},onValueChange:function(e){console.log("use mobile mode:",e),r(e)},title:"Use mobile mode",titleStyle:{color:i.text},value:n})]})]})}var le=function(e){var t=e.icon,n=e.isLastOption,r=e.label,i=e.onPress,o=Object(P.default)().colors;return Object(T.jsx)(_.RectButton,{onPress:i,style:[se.option,n&&se.lastOption,{backgroundColor:o.card}],children:Object(T.jsxs)(C.default,{style:{flexDirection:"row"},children:[Object(T.jsx)(C.default,{style:se.optionIconContainer,children:Object(T.jsx)(u.default,{color:"rgba(0,0,0,0.35)",name:t,size:22})}),Object(T.jsx)(C.default,{children:Object(T.jsx)(v.default,{style:[se.optionText,{color:o.text}],children:r})})]})})},se=S.default.create({container:{backgroundColor:"#fafafa",flex:1,flexDirection:"row",minHeight:50},contentContainer:{flex:1,minHeight:50,paddingTop:15},lastOption:{},option:{backgroundColor:"#fdfdfd",borderBottomWidth:0,borderColor:"#ededed",paddingHorizontal:5,paddingVertical:5},optionIconContainer:{marginLeft:12,marginRight:12},optionText:{alignSelf:"flex-start",fontSize:15,marginTop:1},titleStyle:{flex:0,fontSize:16,paddingLeft:16,paddingRight:8}}),ue=n(326),de={height:"100%",top:0,width:"100%"},fe=S.default.create({container:{height:"100%",overflow:"hidden",width:"100%"}}),je=function(e){var t=e.target;return"web"===q.default.OS?Object(T.jsx)("iframe",{src:t,style:de}):Object(T.jsx)(C.default,{style:fe.container,children:Object(T.jsx)(ue.WebView,{scalesPageToFit:!0,source:{uri:t},startInLoadingState:!0})})};function he(e){var t=e.route.params.link;return Object(T.jsx)(C.default,{style:be.container,children:Object(T.jsx)(je,{target:t})})}var be=S.default.create({container:{alignItems:"center",backgroundColor:"#fff",flex:1,justifyContent:"center"}});function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=function(e){return Object(T.jsxs)(d.default,Oe(Oe({},e),{},{children:[Object(T.jsx)(W,Oe({},e)),Object(T.jsx)(f.default,Oe({},e))]}))},ye=Object(j.default)(),xe=Object(O.default)(),me=function(e){return Object(T.jsx)(u.default,{color:"blue",name:"menu",onPress:function(){return e.navigation.toggleDrawer()},size:30,testID:"drawer-icon"})},Se=function(e){var t=e.item,n=t.htmlFilename,r=t.title;return Object(T.jsx)(A.Provider,{value:{htmlFilename:n,title:r},children:Object(T.jsxs)(xe.Navigator,{children:[Object(T.jsx)(xe.Screen,{component:re,name:"Highlakka",options:{headerShown:!1}}),Object(T.jsx)(xe.Screen,{component:ae,name:"Settings",options:{title:"Settings"}}),Object(T.jsx)(xe.Screen,{component:he,name:"WebView",options:function(e){return{title:e.route.params.title}}})]})})},ve=function(){return Object(T.jsx)(C.default,{style:{alignItems:"center",flex:1,justifyContent:"center"}})},we=function(){var e=function(){var e=y.useState(!1),t=a()(e,2),r=t[0],i=t[1];return y.useEffect((function(){function e(){return(e=o()((function*(){try{J.preventAutoHideAsync(),yield N.loadAsync(M(M({},u.default.font),{},{"space-mono":n(367)}))}catch(e){console.warn(e)}finally{i(!0),J.hideAsync()}}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r}(),t=(Object(w.default)(),"dark"===Object(y.useContext)(z).state.colorScheme),r=Object(y.useState)([]),i=a()(r,2),c=i[0],l=i[1],s=Object(y.useState)(!0),d=a()(s,2),f=d[0],j=d[1],O=Object(y.useState)(!1),x=a()(O,2),S=x[0],P=x[1],I=t?"dark":"light";return Object(y.useEffect)((function(){(function(){var e=o()((function*(){var e=yield F("fi.high.fi","Suosituimmat","uutiset","Uusimmat","finnish");l(e),j(!1),P(!1)}));return function(){return e.apply(this,arguments)}})()().catch((function(e){console.error(e),j(!1),P(!0)}))}),[]),e?f?Object(T.jsx)(D.SafeAreaProvider,{children:Object(T.jsx)(k.SafeAreaView,{style:[Ce.container],children:Object(T.jsx)(m.default,{animating:!0})})}):S?Object(T.jsx)(D.SafeAreaProvider,{children:Object(T.jsx)(k.SafeAreaView,{style:[Ce.container],children:Object(T.jsx)(v.default,{children:"Failed to load news!"})})}):Object(T.jsx)(D.SafeAreaProvider,{children:Object(T.jsx)(h.default,{theme:t?b.default:p.default,children:Object(T.jsxs)(C.default,{style:[Ce.container],testID:"navigation-container-view",children:[Object(T.jsx)(g.StatusBar,{style:I}),Object(T.jsx)(ye.Navigator,{drawerContent:ge,initialRouteName:"Root",screenOptions:function(e){var t=e.navigation;return{headerLeft:function(){return Object(T.jsx)(me,{navigation:t})}}},children:c&&c.length>0?c.map((function(e){return Object(T.jsx)(ye.Screen,{children:function(){return Object(T.jsx)(Se,{item:e})},name:e.title+"_"+e.sectionID,options:{drawerLabel:e.title,headerTitle:e.title}},e.sectionID)})):Object(T.jsx)(ye.Screen,{component:ve,name:"empty"})})]})})}):null};var Ce=S.default.create({container:{backgroundColor:"#fff",flex:1},header:{height:50}});Object(r.default)(we),Object(r.default)((function(){return Object(T.jsx)(L,{children:Object(T.jsx)(we,{})})}))}},[[336,1,2]]]);
//# sourceMappingURL=app.254666f0.chunk.js.map
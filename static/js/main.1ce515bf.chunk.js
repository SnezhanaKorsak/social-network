(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{120:function(e,t,n){e.exports={loading:"Preloader_loading__2wZBc"}},121:function(e,t,n){},123:function(e,t,n){},126:function(e,t,n){},13:function(e,t,n){e.exports={nav:"Navbar_nav__1zCja",item:"Navbar_item__24pIL",active:"Navbar_active__3Lxyu"}},135:function(e,t,n){},20:function(e,t,n){e.exports={contentInfo:"ProfileInfo_contentInfo__2zTE7",mainAvatar:"ProfileInfo_mainAvatar__2z29I",cover:"ProfileInfo_cover__2z3gO",describeProfile:"ProfileInfo_describeProfile__1_7Ui",basicBlock:"ProfileInfo_basicBlock__23AOr",basicItem:"ProfileInfo_basicItem__3-wdM",order:"ProfileInfo_order__1I44p"}},22:function(e,t,n){e.exports={paginationBlock:"Pagination_paginationBlock__2ptE-",totalCounter:"Pagination_totalCounter__2O0No",currentPage:"Pagination_currentPage__pGyB_",totalBlocks:"Pagination_totalBlocks__F-5JV",pageItem:"Pagination_pageItem__CEBnw",selectedPage:"Pagination_selectedPage__3jagA",selectedItem:"Pagination_selectedItem__2aRyl"}},256:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=(n(126),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,260)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))}),i=n(56),r=n.n(i),o=n(13),l=n.n(o),u=n(11),d=n(0);function j(){return Object(d.jsxs)("nav",{className:l.a.nav,children:[Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:ot.PROFILE+"20572",activeClassName:l.a.active,children:"Profile"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:ot.DIALOGS,activeClassName:l.a.active,children:"Messages"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:ot.NEWS,activeClassName:l.a.active,children:"News"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:ot.MUSIC,activeClassName:l.a.active,children:"Music"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:ot.FIND_FRIENDS,activeClassName:l.a.active,children:"Friends"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:ot.SETTINGS,activeClassName:l.a.active,children:"Settings"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:ot.LOGIN,activeClassName:l.a.active,children:"Login"})})]})}var b=n(9);function f(){return Object(d.jsx)("div",{children:"News"})}function h(){return Object(d.jsx)("div",{children:"Music"})}function O(){return Object(d.jsx)("div",{children:"Settings"})}n(135);var p=n(25),g=n(26),m=n(28),x=n(27),v=n(10),_=n(17),N=n(3),I=n(119),P=n.n(I).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"c0caff3e-2af3-4ee5-bed5-c0d120d6cc75"}}),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return P.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return P.post("/follow/".concat(e),{}).then((function(e){return e.data}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return P.delete("/follow/".concat(e)).then((function(e){return e.data}))},F=function(){return P.get("/auth/me").then((function(e){return e.data}))},k=function(e){return P.get("/profile/"+e).then((function(e){return e.data}))},w=function(e){return P.get("/profile/status/"+e)},y=function(e){return P.put("/profile/status",{status:e})},L={friends:[],isFetching:!1,followingInProgress:[]},E=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},M=function(e,t){return{type:"FOLLOWING-PROGRESS",isFetching:e,userId:t}},A=n(32),R=n.n(A),D=n.p+"static/media/avatarnotfound.86317f4b.jpg",U=function(e){var t=e.friendsPage,n=e.followingInProgress,a=e.followTC,s=e.unfollowTC;return Object(d.jsx)(d.Fragment,{children:t.friends.map((function(e){return Object(d.jsx)("div",{className:R.a.friendsItem,children:Object(d.jsxs)("span",{className:R.a.generalBlock,children:[Object(d.jsx)("div",{children:Object(d.jsx)(u.b,{to:ot.PROFILE+e.id,children:Object(d.jsx)("img",{className:R.a.avatar,alt:"userAvatar",src:null!=e.photos.small?e.photos.small:D})})}),Object(d.jsxs)("span",{className:R.a.info,children:[Object(d.jsx)("div",{className:R.a.name,children:e.name}),Object(d.jsx)("div",{children:e.status})]}),Object(d.jsxs)("span",{className:R.a.location,children:[Object(d.jsx)("div",{children:"f.location.country"}),Object(d.jsx)("div",{children:"f.location.city"}),Object(d.jsx)("button",{className:R.a.buttonFollow,onClick:function(){var t;t=e.id,e.followed?s(t):a(t)},disabled:n.some((function(t){return t===e.id})),children:e.followed?"Follow":"Unfollow"})]})]})},e.id)}))})},B=n(120),G=n.n(B),H=n.p+"static/media/rings.dbfd1db7.svg",W=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:G.a.loading,src:H,alt:"loading"})})},z=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:this.props.isFetching?Object(d.jsx)(W,{}):Object(d.jsx)(U,{friendsPage:this.props.friendsPage,followingInProgress:this.props.followingInProgress,followTC:this.props.followTC,unfollowTC:this.props.unfollowTC})})}}]),n}(s.a.Component),J=Object(v.b)((function(e){return{friendsPage:e.friendsPage,isFetching:e.friendsPage.isFetching,followingInProgress:e.friendsPage.followingInProgress}}),{followTC:function(e){return function(t){t(M(!0,e)),S(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(M(!1,e))}))}},unfollowTC:function(e){return function(t){t(M(!0,e)),T(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(M(!1,e))}))}}})(z),K=n(22),X=n.n(K),Z=function(e){var t=e.totalRecords,n=e.pageLimit,a=e.fetchPageNumbers,s=e.currentPage,c=e.handleClick,i=e.handleMoveLeft,r=e.handleMoveRight,o=Math.ceil(t/n),l=a();return t&&1!==o?Object(d.jsxs)("nav",{className:X.a.paginationBlock,children:[Object(d.jsxs)("div",{className:X.a.totalCounter,children:[Object(d.jsx)("span",{className:X.a.selectedItem,children:t})," Users"]}),Object(d.jsxs)("div",{className:X.a.currentPage,children:["Page ",Object(d.jsx)("span",{className:X.a.selectedItem,children:s}),"/",o]}),Object(d.jsx)("ul",{className:X.a.totalBlocks,children:l.map((function(e,t){return e===V?Object(d.jsx)("li",{className:X.a.pageItem,children:Object(d.jsx)("span",{"aria-hidden":"true",onClick:i,children:"\xab"})},t):e===Y?Object(d.jsx)("li",{className:X.a.pageItem,children:Object(d.jsx)("span",{"aria-hidden":"true",onClick:r,children:"\xbb"})},t):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("li",{className:"".concat(X.a.pageItem," ").concat(s===e&&X.a.selectedPage),onClick:function(){return c(e)},children:e},t)})}))})]}):null},q={totalCount:0,pageLimit:4,pageNeighbours:1,currentPage:1},Q=function(e){return{type:"SET-TOTAL-COUNT",totalCount:e}},V="LEFT",Y="RIGHT",$=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e,s=[];a<=t;)s.push(a),"number"===typeof a?a+=n:a=0;return s},ee=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).fetchPageNumbers=function(){var t=Math.ceil(e.props.totalRecords/e.props.pageLimit),n=e.props.currentPage,a=e.props.pageNeighbours,s=2*a+3;if(t>s+2){var c=Math.max(2,n-a),i=Math.min(t-1,n+a),r=$(c,i),o=c>2,l=t-i>1,u=s-(r.length+1);switch(!0){case o&&!l:var d=$(c-u,c-1);r=[V].concat(Object(_.a)(d),Object(_.a)(r));break;case!o&&l:var j=$(i+1,i+u);r=[].concat(Object(_.a)(r),Object(_.a)(j),[Y]);break;case o&&l:default:r=[V].concat(Object(_.a)(r),[Y])}return[1].concat(Object(_.a)(r),[t])}return $(1,t)},e.handleClick=function(t){"number"===typeof t&&e.props.getUsersTC(t,e.props.pageLimit)},e.handleMoveLeft=function(){var t=e.props.currentPage-2*e.props.pageNeighbours-1;e.props.getUsersTC(t,e.props.pageLimit)},e.handleMoveRight=function(){var t=e.props.currentPage+2*e.props.pageNeighbours+1;e.props.getUsersTC(t,e.props.pageLimit)},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.currentPage,this.props.pageLimit)}},{key:"render",value:function(){return Object(d.jsx)(Z,{pageLimit:this.props.pageLimit,totalRecords:this.props.totalRecords,currentPage:this.props.currentPage,fetchPageNumbers:this.fetchPageNumbers,handleClick:this.handleClick,handleMoveLeft:this.handleMoveLeft,handleMoveRight:this.handleMoveRight})}}]),n}(s.a.Component),te=Object(v.b)((function(e){return{pageLimit:e.pagination.pageLimit,totalRecords:e.pagination.totalCount,pageNeighbours:e.pagination.pageNeighbours,currentPage:e.pagination.currentPage}}),{setTotalCount:Q,getUsersTC:function(e,t){return function(n){n(E(!0)),n({type:"SET-CURRENT-PAGE",page:e}),C(e,t).then((function(e){n(E(!1)),n({type:"SET-FRIENDS",friends:e.items}),n(Q(e.totalCount))}))}}})(ee),ne=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(te,{}),Object(d.jsx)(J,{})]})},ae=n(121),se=n.n(ae),ce="ADD-POST",ie={posts:[{id:1,message:"Hi, how are you?",likeCount:12},{id:2,message:"It's my first post",likeCount:24}],profile:null,status:""},re=function(e){return{type:"SET-USER-STATUS",status:e}},oe=n(61),le=n.n(oe),ue=n(83),de=n.n(ue);function je(e){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:de.a.posts,children:Object(d.jsxs)("div",{className:de.a.item,children:[Object(d.jsx)("img",{src:"https://telegra.ph/file/88a8f1c2805439c4c0d86.jpg",alt:"avatar"}),e.message,Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["like: ",e.likeCount," "]})})]})})})}var be=n(258),fe=n(257),he=function(e){if(!e)return"Field is required"},Oe=function(e){return function(t){if(t&&t.length>e)return"The maximum length should be ".concat(e," characters")}},pe=n(60),ge=n(62),me=n.n(ge),xe=function(e){var t=e.input,n=e.meta,a=e.FormType,s=Object(pe.a)(e,["input","meta","FormType"]),c=n.touched&&n.error,i="".concat(me.a.formControl," ").concat(c?me.a.error:"");return Object(d.jsxs)("div",{className:i,children:[c&&Object(d.jsx)("div",{className:me.a.errorMessage,children:n.error}),Object(d.jsx)(a,Object(N.a)(Object(N.a)({},t),s))]})},ve=function(e){var t=Object.assign({},e);return Object(d.jsx)(xe,Object(N.a)(Object(N.a)({},t),{},{FormType:"textarea"}))},_e=function(e){var t=Object.assign({},e);return Object(d.jsx)(xe,Object(N.a)(Object(N.a)({},t),{},{FormType:"input"}))},Ne=Oe(100),Ie=Object(fe.a)({form:"addMyPost"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(be.a,{name:"newPost",component:ve,placeholder:"Write something",validate:[he,Ne]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:le.a.button,children:"Add Post"})})]})}));var Pe=Object(v.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e({type:ce,postText:t})}}}))((function(e){var t=e.profilePage.posts.map((function(e){return Object(d.jsx)(je,{id:e.id,message:e.message,likeCount:e.likeCount},e.id)}));return Object(d.jsxs)("div",{className:le.a.postBlock,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"My posts:"}),Object(d.jsx)(Ie,{onSubmit:function(t){e.addPost(t.newPost)}})]}),Object(d.jsx)("div",{className:le.a.posts,children:t})]})})),Ce=n(20),Se=n.n(Ce),Te=n.p+"static/media/noavatar.8233c8b6.png",Fe=n(58),ke=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){console.log(Object(Fe.a)(e)),e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this.props.status?this.props.status:"no information";return Object(d.jsx)("div",{children:this.state.editMode?Object(d.jsx)("input",{value:this.state.status,onBlur:this.deactivateEditMode,onChange:this.onStatusChange,autoFocus:!0}):Object(d.jsx)("span",{onDoubleClick:this.activateEditMode,children:e})})}}]),n}(s.a.Component),we=function(e){var t=e.profile,n=e.status,a=e.updateStatus;return t?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:Se.a.cover,children:Object(d.jsx)("img",{src:"https://catherineasquithgallery.com/uploads/posts/2021-02/1612889502_62-p-krasnii-kiberpank-fon-101.jpg",alt:"cover"})}),Object(d.jsxs)("div",{className:Se.a.contentInfo,children:[Object(d.jsx)("div",{className:Se.a.mainAvatar,children:Object(d.jsx)("img",{src:t.photos.small?t.photos.small:Te,alt:"avatar"})}),Object(d.jsxs)("div",{className:Se.a.describeProfile,children:[Object(d.jsx)("h4",{children:"Basic Information"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:Se.a.basicBlock,children:[Object(d.jsxs)("div",{className:"".concat(Se.a.basicItem," ").concat(Se.a.order),children:["Name:",Object(d.jsx)("br",{}),"About me:",Object(d.jsx)("br",{}),"Profession:",Object(d.jsx)("br",{}),"Status:",Object(d.jsx)("br",{})]}),Object(d.jsxs)("div",{className:Se.a.basicItem,children:[t.fullName?t.fullName:"no information",Object(d.jsx)("br",{}),t.aboutMe?t.aboutMe:"no information",Object(d.jsx)("br",{}),t.lookingForAJob?"I'm locking for a job":t.lookingForAJobDescription?t.lookingForAJobDescription:"no information",Object(d.jsx)("br",{}),Object(d.jsx)(ke,{status:n,updateStatus:a})]})]}),Object(d.jsx)("h4",{children:"Contact Information"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:Se.a.basicBlock,children:[Object(d.jsxs)("div",{className:"".concat(Se.a.basicItem," ").concat(Se.a.order),children:["Facebook:",Object(d.jsx)("br",{}),"VK:",Object(d.jsx)("br",{}),"Instagram:",Object(d.jsx)("br",{}),"GitHub:",Object(d.jsx)("br",{})]}),Object(d.jsxs)("div",{className:Se.a.basicItem,children:[t.contacts.facebook?t.contacts.facebook:"no information",Object(d.jsx)("br",{}),t.contacts.vk?t.contacts.vk:"no information",Object(d.jsx)("br",{}),t.contacts.instagram?t.contacts.instagram:"no information",Object(d.jsx)("br",{}),t.contacts.github?t.contacts.github:"no information",Object(d.jsx)("br",{})]})]})]})]})]}):Object(d.jsx)(W,{})},ye=function(e){var t=e.profile,n=e.status,a=e.updateStatus;return Object(d.jsxs)("div",{className:se.a.content,children:[Object(d.jsx)(we,{profile:t,status:n,updateStatus:a}),Object(d.jsx)(Pe,{})]})},Le=n(8),Ee=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="20572"),this.props.getUserProfileTC(e),this.props.getUserStatusTC(e)}},{key:"render",value:function(){return Object(d.jsx)(ye,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC})}}]),n}(s.a.Component),Me=Object(Le.d)(Object(v.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfileTC:function(e){return function(t){k(e).then((function(e){t({type:"SET-USERS-PROFILE",profile:e})}))}},getUserStatusTC:function(e){return function(t){w(e).then((function(e){t(re(e.data))}))}},updateStatusTC:function(e){return function(t){y(e).then((function(n){0===n.data.resultCode&&t(re(e))}))}}}),b.g)(Ee),Ae=n(86),Re=n.n(Ae),De=function(e){var t=e.isAuth,n=e.login;return Object(d.jsxs)("header",{className:Re.a.header,children:[Object(d.jsx)("img",{src:"https://pbs.twimg.com/profile_banners/1341675636151132160/1608715543/1500x500",alt:"label"}),Object(d.jsx)("div",{className:Re.a.loginBlock,children:t?n:Object(d.jsx)(u.b,{to:ot.LOGIN,children:"LOGIN"})})]})},Ue={userId:null,email:null,login:null,isAuth:!1},Be=function(e,t,n,a){return{type:"SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},Ge=function(){return function(e){F().then((function(t){if(0===t.resultCode){var n=t.data,a=n.id,s=n.email,c=n.login;e(Be(a,s,c,!0))}}))}},He=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserAPIDataTC()}},{key:"render",value:function(){return Object(d.jsx)(De,{isAuth:this.props.isAuth,login:this.props.login})}}]),n}(s.a.Component),We=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.userId}}),{getUserAPIDataTC:Ge})(He),ze=n(64),Je=n.n(ze),Ke=Object(fe.a)({form:"login"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(be.a,{placeholder:"Email",name:"email",component:_e,autocomplete:"off",validate:[he]})}),Object(d.jsx)("div",{children:Object(d.jsx)(be.a,{placeholder:"Password",name:"password",type:"password",autocomplete:"off",component:_e,validate:[he]})}),Object(d.jsxs)("div",{className:Je.a.item,children:[Object(d.jsx)(be.a,{type:"checkbox",name:"rememberMe",component:"input"})," Remember me"]}),Object(d.jsx)("div",{className:Je.a.item,children:Object(d.jsx)("button",{children:"Login"})})]})})),Xe=function(){return Object(d.jsxs)("div",{className:Je.a.container,children:[Object(d.jsx)("h1",{children:"LOGIN"}),Object(d.jsx)(Ke,{onSubmit:function(e){console.log(e)}})]})},Ze="ADD-MESSAGE",qe={dialogs:[{id:1,name:"Terra"},{id:2,name:"Azumy"},{id:3,name:"Bria"},{id:4,name:"Keren"}],messages:[{id:1,message:"Hi! How are yoy?"},{id:2,message:"Don't give up!"},{id:3,message:"Just do it"},{id:4,message:"Could you help me?"}]},Qe=n(39),Ve=n.n(Qe),Ye=n(87),$e=n.n(Ye);function et(e){var t="/dialogs/"+e.id;return Object(d.jsx)("div",{className:$e.a.dialog,children:Object(d.jsx)(u.b,{to:t,activeClassName:$e.a.active,children:e.name})})}var tt=n(123),nt=n.n(tt);function at(e){return Object(d.jsx)("div",{className:nt.a.message,children:e.message})}var st=Oe(100);var ct=Object(fe.a)({form:"addMessage"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)(be.a,{component:ve,name:"textMessage",placeholder:"Enter your message",validate:[he,st]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:Ve.a.button,children:"Add Message"})})]})})),it=function(e){return{isAuth:e.auth.isAuth}};var rt=Object(Le.d)(Object(v.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:Ze,messageText:e}}(t))}}})),(function(e){return Object(v.b)(it)((function(t){t.isAuth;var n=Object(pe.a)(t,["isAuth"]);return t.isAuth?Object(d.jsx)(e,Object(N.a)({},n)):Object(d.jsx)(b.a,{to:ot.LOGIN})}))}))((function(e){var t=e.dialogPage.dialogs.map((function(e){return Object(d.jsx)(et,{name:e.name,id:e.id},e.id)})),n=e.dialogPage.messages.map((function(e){return Object(d.jsx)(at,{message:e.message,id:e.id},e.id)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:Ve.a.textarea,children:Object(d.jsx)(ct,{onSubmit:function(t){e.addMessage(t.textMessage)}})}),Object(d.jsxs)("div",{className:Ve.a.dialogs,children:[Object(d.jsx)("div",{className:Ve.a.dialogsItem,children:t}),Object(d.jsx)("div",{className:Ve.a.messages,children:n})]})]})})),ot={PROFILE:"/profile/",DIALOGS:"/dialogs/",NEWS:"/news/",MUSIC:"/music/",SETTINGS:"/settings/",FIND_FRIENDS:"/findFriends/",LOGIN:"/login/"};var lt=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(We,{}),Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(b.a,{to:ot.PROFILE})}}),Object(d.jsx)(b.b,{path:ot.PROFILE+":userId",render:function(){return Object(d.jsx)(Me,{})}}),Object(d.jsx)(b.b,{path:ot.DIALOGS,render:function(){return Object(d.jsx)(rt,{})}}),Object(d.jsx)(b.b,{path:ot.NEWS,render:function(){return Object(d.jsx)(f,{})}}),Object(d.jsx)(b.b,{path:ot.MUSIC,render:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(b.b,{path:ot.FIND_FRIENDS,render:function(){return Object(d.jsx)(ne,{})}}),Object(d.jsx)(b.b,{path:ot.SETTINGS,render:function(){return Object(d.jsx)(O,{})}}),Object(d.jsx)(b.b,{path:ot.LOGIN,render:function(){return Object(d.jsx)(Xe,{})}})]})})]})})},ut={},dt=n(124),jt=n(259),bt=Object(Le.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:var n={id:(new Date).getTime(),message:t.postText,likeCount:0};return Object(N.a)(Object(N.a)({},e),{},{posts:[].concat(Object(_.a)(e.posts),[n])});case"SET-USERS-PROFILE":return Object(N.a)(Object(N.a)({},e),{},{profile:t.profile});case"SET-USER-STATUS":return Object(N.a)(Object(N.a)({},e),{},{status:t.status});default:return e}},dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ze:var n={id:(new Date).getTime(),message:t.messageText};return Object(N.a)(Object(N.a)({},e),{},{messages:[].concat(Object(_.a)(e.messages),[n])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut;return e},friendsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(N.a)(Object(N.a)({},e),{},{friends:e.friends.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(N.a)(Object(N.a)({},e),{},{friends:e.friends.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!1}):e}))});case"SET-FRIENDS":return Object(N.a)(Object(N.a)({},e),{},{friends:t.friends});case"TOGGLE-IS-FETCHING":return Object(N.a)(Object(N.a)({},e),{},{isFetching:t.isFetching});case"FOLLOWING-PROGRESS":return t.isFetching?Object(N.a)(Object(N.a)({},e),{},{followingInProgress:[].concat(Object(_.a)(e.followingInProgress),[t.userId])}):Object(N.a)(Object(N.a)({},e),{},{followingInProgress:e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-CURRENT-PAGE":return Object(N.a)(Object(N.a)({},e),{},{currentPage:t.page});case"SET-TOTAL-COUNT":return Object(N.a)(Object(N.a)({},e),{},{totalCount:t.totalCount});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(N.a)(Object(N.a)(Object(N.a)({},e),t.payload),{},{isAuth:t.payload.isAuth});default:return e}},form:jt.a}),ft=Object(Le.e)(bt,Object(Le.a)(dt.a));r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v.a,{store:ft,children:Object(d.jsx)(lt,{})})}),document.getElementById("root")),c()},32:function(e,t,n){e.exports={friendsItem:"Friends_friendsItem__1z8Rr",generalBlock:"Friends_generalBlock__1nnYb",avatar:"Friends_avatar__19sMf",info:"Friends_info__1B_iw",name:"Friends_name__1H0jP",buttonFollow:"Friends_buttonFollow__3Rq8Q",location:"Friends_location__gZKax",selectedPage:"Friends_selectedPage__2k4r0"}},39:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3FZa8",dialogsItem:"Dialogs_dialogsItem__1PTrf",messages:"Dialogs_messages__XRR94",button:"Dialogs_button__w9F2l",textarea:"Dialogs_textarea__3dxXe"}},61:function(e,t,n){e.exports={postBlock:"MyPost_postBlock__1hg6I",posts:"MyPost_posts__9OGtt",button:"MyPost_button__6BLQc"}},62:function(e,t,n){e.exports={formControl:"FormsControl_formControl__1wB4j",error:"FormsControl_error__LmK2M",errorMessage:"FormsControl_errorMessage__2BR3w",blink1:"FormsControl_blink1__1ZTu4"}},64:function(e,t,n){e.exports={container:"Login_container__37fLX",item:"Login_item__1I-PT"}},83:function(e,t,n){e.exports={item:"Post_item__3Rw3F"}},86:function(e,t,n){e.exports={header:"Header_header__1vXGy",loginBlock:"Header_loginBlock__8AO3e"}},87:function(e,t,n){e.exports={dialog:"DialogItem_dialog__-cKzQ",active:"DialogItem_active__gIi1x"}}},[[256,1,2]]]);
//# sourceMappingURL=main.1ce515bf.chunk.js.map
(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{130:function(e,t,n){e.exports={loading:"Preloader_loading__2wZBc"}},131:function(e,t,n){},133:function(e,t,n){},14:function(e,t,n){e.exports={nav:"Navbar_nav__1zCja",item:"Navbar_item__24pIL",active:"Navbar_active__3Lxyu"}},161:function(e,t,n){},170:function(e,t,n){},21:function(e,t,n){e.exports={contentInfo:"ProfileInfo_contentInfo__2zTE7",mainAvatar:"ProfileInfo_mainAvatar__2z29I",cover:"ProfileInfo_cover__2z3gO",describeProfile:"ProfileInfo_describeProfile__1_7Ui",basicBlock:"ProfileInfo_basicBlock__23AOr",basicItem:"ProfileInfo_basicItem__3-wdM",order:"ProfileInfo_order__1I44p"}},23:function(e,t,n){e.exports={paginationBlock:"Pagination_paginationBlock__2ptE-",totalCounter:"Pagination_totalCounter__2O0No",currentPage:"Pagination_currentPage__pGyB_",totalBlocks:"Pagination_totalBlocks__F-5JV",pageItem:"Pagination_pageItem__CEBnw",selectedPage:"Pagination_selectedPage__3jagA",selectedItem:"Pagination_selectedItem__2aRyl"}},291:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=(n(161),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,292)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))}),i=n(64),c=n.n(i),o=n(14),l=n.n(o),u=n(12),d=n(0);function j(){return Object(d.jsxs)("nav",{className:l.a.nav,children:[Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:jt.PROFILE+"20572",activeClassName:l.a.active,children:"Profile"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:jt.DIALOGS,activeClassName:l.a.active,children:"Messages"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:jt.NEWS,activeClassName:l.a.active,children:"News"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:jt.MUSIC,activeClassName:l.a.active,children:"Music"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:jt.FIND_FRIENDS,activeClassName:l.a.active,children:"Friends"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:jt.SETTINGS,activeClassName:l.a.active,children:"Settings"})}),Object(d.jsx)("div",{className:l.a.item,children:Object(d.jsx)(u.b,{to:jt.LOGIN,activeClassName:l.a.active,children:"Login"})})]})}var b=n(11);function f(){return Object(d.jsx)("div",{children:"News"})}function h(){return Object(d.jsx)("div",{children:"Music"})}function g(){return Object(d.jsx)("div",{children:"Settings"})}n(170);var O=n(26),p=n(27),m=n(29),v=n(28),x=n(10),_=n(18),N=n(5),I=n(129),P=n.n(I).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"c0caff3e-2af3-4ee5-bed5-c0d120d6cc75"}}),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return P.get("/users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return P.post("/follow/".concat(e),{}).then((function(e){return e.data}))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return P.delete("/follow/".concat(e)).then((function(e){return e.data}))},F=function(){return P.get("/auth/me").then((function(e){return e.data}))},k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return P.post("/auth/login",{email:e,password:t,rememberMe:n})},w=function(){return P.delete("/auth/login")},E=function(e){return P.get("/profile/"+e).then((function(e){return e.data}))},L=function(e){return P.get("/profile/status/"+e)},y=function(e){return P.put("/profile/status",{status:e})},M={friends:[],isFetching:!1,followingInProgress:[]},A=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},R=function(e,t){return{type:"FOLLOWING-PROGRESS",isFetching:e,userId:t}},D=n(34),U=n.n(D),B=n.p+"static/media/avatarnotfound.86317f4b.jpg",G=function(e){var t=e.friendsPage,n=e.followingInProgress,a=e.followTC,s=e.unfollowTC;return Object(d.jsx)(d.Fragment,{children:t.friends.map((function(e){return Object(d.jsx)("div",{className:U.a.friendsItem,children:Object(d.jsxs)("span",{className:U.a.generalBlock,children:[Object(d.jsx)("div",{children:Object(d.jsx)(u.b,{to:jt.PROFILE+e.id,children:Object(d.jsx)("img",{className:U.a.avatar,alt:"userAvatar",src:null!=e.photos.small?e.photos.small:B})})}),Object(d.jsxs)("span",{className:U.a.info,children:[Object(d.jsx)("div",{className:U.a.name,children:e.name}),Object(d.jsx)("div",{children:e.status})]}),Object(d.jsxs)("span",{className:U.a.location,children:[Object(d.jsx)("div",{children:"f.location.country"}),Object(d.jsx)("div",{children:"f.location.city"}),Object(d.jsx)("button",{className:U.a.buttonFollow,onClick:function(){var t;t=e.id,e.followed?s(t):a(t)},disabled:n.some((function(t){return t===e.id})),children:e.followed?"Follow":"Unfollow"})]})]})},e.id)}))})},H=n(130),W=n.n(H),z=n.p+"static/media/rings.dbfd1db7.svg",J=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:W.a.loading,src:z,alt:"loading"})})},K=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:this.props.isFetching?Object(d.jsx)(J,{}):Object(d.jsx)(G,{friendsPage:this.props.friendsPage,followingInProgress:this.props.followingInProgress,followTC:this.props.followTC,unfollowTC:this.props.unfollowTC})})}}]),n}(s.a.Component),X=Object(x.b)((function(e){return{friendsPage:e.friendsPage,isFetching:e.friendsPage.isFetching,followingInProgress:e.friendsPage.followingInProgress}}),{followTC:function(e){return function(t){t(R(!0,e)),T(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(R(!1,e))}))}},unfollowTC:function(e){return function(t){t(R(!0,e)),S(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(R(!1,e))}))}}})(K),Z=n(23),q=n.n(Z),Q=function(e){var t=e.totalRecords,n=e.pageLimit,a=e.fetchPageNumbers,s=e.currentPage,r=e.handleClick,i=e.handleMoveLeft,c=e.handleMoveRight,o=Math.ceil(t/n),l=a();return t&&1!==o?Object(d.jsxs)("nav",{className:q.a.paginationBlock,children:[Object(d.jsxs)("div",{className:q.a.totalCounter,children:[Object(d.jsx)("span",{className:q.a.selectedItem,children:t})," Users"]}),Object(d.jsxs)("div",{className:q.a.currentPage,children:["Page ",Object(d.jsx)("span",{className:q.a.selectedItem,children:s}),"/",o]}),Object(d.jsx)("ul",{className:q.a.totalBlocks,children:l.map((function(e,t){return e===$?Object(d.jsx)("li",{className:q.a.pageItem,children:Object(d.jsx)("span",{"aria-hidden":"true",onClick:i,children:"\xab"})},t):e===ee?Object(d.jsx)("li",{className:q.a.pageItem,children:Object(d.jsx)("span",{"aria-hidden":"true",onClick:c,children:"\xbb"})},t):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("li",{className:"".concat(q.a.pageItem," ").concat(s===e&&q.a.selectedPage),onClick:function(){return r(e)},children:e},t)})}))})]}):null},V={totalCount:0,pageLimit:4,pageNeighbours:1,currentPage:1},Y=function(e){return{type:"SET-TOTAL-COUNT",totalCount:e}},$="LEFT",ee="RIGHT",te=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e,s=[];a<=t;)s.push(a),"number"===typeof a?a+=n:a=0;return s},ne=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).fetchPageNumbers=function(){var t=Math.ceil(e.props.totalRecords/e.props.pageLimit),n=e.props.currentPage,a=e.props.pageNeighbours,s=2*a+3;if(t>s+2){var r=Math.max(2,n-a),i=Math.min(t-1,n+a),c=te(r,i),o=r>2,l=t-i>1,u=s-(c.length+1);switch(!0){case o&&!l:var d=te(r-u,r-1);c=[$].concat(Object(_.a)(d),Object(_.a)(c));break;case!o&&l:var j=te(i+1,i+u);c=[].concat(Object(_.a)(c),Object(_.a)(j),[ee]);break;case o&&l:default:c=[$].concat(Object(_.a)(c),[ee])}return[1].concat(Object(_.a)(c),[t])}return te(1,t)},e.handleClick=function(t){"number"===typeof t&&e.props.getUsersTC(t,e.props.pageLimit)},e.handleMoveLeft=function(){var t=e.props.currentPage-2*e.props.pageNeighbours-1;e.props.getUsersTC(t,e.props.pageLimit)},e.handleMoveRight=function(){var t=e.props.currentPage+2*e.props.pageNeighbours+1;e.props.getUsersTC(t,e.props.pageLimit)},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.currentPage,this.props.pageLimit)}},{key:"render",value:function(){return Object(d.jsx)(Q,{pageLimit:this.props.pageLimit,totalRecords:this.props.totalRecords,currentPage:this.props.currentPage,fetchPageNumbers:this.fetchPageNumbers,handleClick:this.handleClick,handleMoveLeft:this.handleMoveLeft,handleMoveRight:this.handleMoveRight})}}]),n}(s.a.Component),ae=Object(x.b)((function(e){return{pageLimit:e.pagination.pageLimit,totalRecords:e.pagination.totalCount,pageNeighbours:e.pagination.pageNeighbours,currentPage:e.pagination.currentPage}}),{setTotalCount:Y,getUsersTC:function(e,t){return function(n){n(A(!0)),n({type:"SET-CURRENT-PAGE",page:e}),C(e,t).then((function(e){n(A(!1)),n({type:"SET-FRIENDS",friends:e.items}),n(Y(e.totalCount))}))}}})(ne),se=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ae,{}),Object(d.jsx)(X,{})]})},re=n(131),ie=n.n(re),ce="ADD-POST",oe={posts:[{id:1,message:"Hi, how are you?",likeCount:12},{id:2,message:"It's my first post",likeCount:24}],profile:null,status:""},le=function(e){return{type:"SET-USER-STATUS",status:e}},ue=n(70),de=n.n(ue),je=n(91),be=n.n(je);function fe(e){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:be.a.posts,children:Object(d.jsxs)("div",{className:be.a.item,children:[Object(d.jsx)("img",{src:"https://telegra.ph/file/88a8f1c2805439c4c0d86.jpg",alt:"avatar"}),e.message,Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["like: ",e.likeCount," "]})})]})})})}var he=n(124),ge=n(125),Oe=function(e){if(!e)return"Field is required"},pe=function(e){return function(t){if(t&&t.length>e)return"The maximum length should be ".concat(e," characters")}},me=n(69),ve=n(71),xe=n.n(ve),_e=function(e){var t=e.input,n=e.meta,a=e.FormType,s=Object(me.a)(e,["input","meta","FormType"]),r=n.touched&&n.error,i="".concat(xe.a.formControl," ").concat(r?xe.a.error:"");return Object(d.jsxs)("div",{className:i,children:[r&&Object(d.jsx)("div",{className:xe.a.errorMessage,children:n.error}),Object(d.jsx)(a,Object(N.a)(Object(N.a)({},t),s))]})},Ne=function(e){var t=Object.assign({},e);return Object(d.jsx)(_e,Object(N.a)(Object(N.a)({},t),{},{FormType:"textarea"}))},Ie=function(e){var t=Object.assign({},e);return Object(d.jsx)(_e,Object(N.a)(Object(N.a)({},t),{},{FormType:"input"}))},Pe=pe(100),Ce=Object(ge.a)({form:"addMyPost"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(he.a,{name:"newPost",component:Ne,placeholder:"Write something",validate:[Oe,Pe]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:de.a.button,children:"Add Post"})})]})}));var Te=Object(x.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e({type:ce,postText:t})}}}))((function(e){var t=e.profilePage.posts.map((function(e){return Object(d.jsx)(fe,{id:e.id,message:e.message,likeCount:e.likeCount},e.id)}));return Object(d.jsxs)("div",{className:de.a.postBlock,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"My posts:"}),Object(d.jsx)(Ce,{onSubmit:function(t){e.addPost(t.newPost)}})]}),Object(d.jsx)("div",{className:de.a.posts,children:t})]})})),Se=n(21),Fe=n.n(Se),ke=n.p+"static/media/noavatar.8233c8b6.png",we=n(67),Ee=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){console.log(Object(we.a)(e)),e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this.props.status?this.props.status:"no information";return Object(d.jsx)("div",{children:this.state.editMode?Object(d.jsx)("input",{value:this.state.status,onBlur:this.deactivateEditMode,onChange:this.onStatusChange,autoFocus:!0}):Object(d.jsx)("span",{onDoubleClick:this.activateEditMode,children:e})})}}]),n}(s.a.Component),Le=function(e){var t=e.profile,n=e.status,a=e.updateStatus;return t?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:Fe.a.cover,children:Object(d.jsx)("img",{src:"https://catherineasquithgallery.com/uploads/posts/2021-02/1612889502_62-p-krasnii-kiberpank-fon-101.jpg",alt:"cover"})}),Object(d.jsxs)("div",{className:Fe.a.contentInfo,children:[Object(d.jsx)("div",{className:Fe.a.mainAvatar,children:Object(d.jsx)("img",{src:t.photos.small?t.photos.small:ke,alt:"avatar"})}),Object(d.jsxs)("div",{className:Fe.a.describeProfile,children:[Object(d.jsx)("h4",{children:"Basic Information"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:Fe.a.basicBlock,children:[Object(d.jsxs)("div",{className:"".concat(Fe.a.basicItem," ").concat(Fe.a.order),children:["Name:",Object(d.jsx)("br",{}),"About me:",Object(d.jsx)("br",{}),"Profession:",Object(d.jsx)("br",{}),"Status:",Object(d.jsx)("br",{})]}),Object(d.jsxs)("div",{className:Fe.a.basicItem,children:[t.fullName?t.fullName:"no information",Object(d.jsx)("br",{}),t.aboutMe?t.aboutMe:"no information",Object(d.jsx)("br",{}),t.lookingForAJob?"I'm locking for a job":t.lookingForAJobDescription?t.lookingForAJobDescription:"no information",Object(d.jsx)("br",{}),Object(d.jsx)(Ee,{status:n,updateStatus:a})]})]}),Object(d.jsx)("h4",{children:"Contact Information"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:Fe.a.basicBlock,children:[Object(d.jsxs)("div",{className:"".concat(Fe.a.basicItem," ").concat(Fe.a.order),children:["Facebook:",Object(d.jsx)("br",{}),"VK:",Object(d.jsx)("br",{}),"Instagram:",Object(d.jsx)("br",{}),"GitHub:",Object(d.jsx)("br",{})]}),Object(d.jsxs)("div",{className:Fe.a.basicItem,children:[t.contacts.facebook?t.contacts.facebook:"no information",Object(d.jsx)("br",{}),t.contacts.vk?t.contacts.vk:"no information",Object(d.jsx)("br",{}),t.contacts.instagram?t.contacts.instagram:"no information",Object(d.jsx)("br",{}),t.contacts.github?t.contacts.github:"no information",Object(d.jsx)("br",{})]})]})]})]})]}):Object(d.jsx)(J,{})},ye=function(e){var t=e.profile,n=e.status,a=e.updateStatus;return Object(d.jsxs)("div",{className:ie.a.content,children:[Object(d.jsx)(Le,{profile:t,status:n,updateStatus:a}),Object(d.jsx)(Te,{})]})},Me=n(9),Ae=function(e){return{isAuth:e.auth.isAuth}};function Re(e){return Object(x.b)(Ae)((function(t){t.isAuth;var n=Object(me.a)(t,["isAuth"]);return t.isAuth?Object(d.jsx)(e,Object(N.a)({},n)):Object(d.jsx)(b.a,{to:jt.LOGIN})}))}var De=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userAuthId),this.props.getUserProfileTC(e),this.props.getUserStatusTC(e)}},{key:"render",value:function(){return Object(d.jsx)(ye,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatusTC})}}]),n}(s.a.Component),Ue=Object(Me.d)(Object(x.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userAuthId:e.auth.userId}}),{getUserProfileTC:function(e){return function(t){E(e).then((function(e){t({type:"SET-USERS-PROFILE",profile:e})}))}},getUserStatusTC:function(e){return function(t){L(e).then((function(e){t(le(e.data))}))}},updateStatusTC:function(e){return function(t){y(e).then((function(n){0===n.data.resultCode&&t(le(e))}))}}}),b.g,Re)(De),Be=n(73),Ge=n.n(Be),He=function(e){var t=e.isAuth,n=e.login,a=e.logoutTC;return Object(d.jsxs)("header",{className:Ge.a.header,children:[Object(d.jsx)("img",{src:"https://pbs.twimg.com/profile_banners/1341675636151132160/1608715543/1500x500",alt:"label"}),Object(d.jsx)("div",{className:Ge.a.loginBlock,children:t?Object(d.jsxs)("div",{className:Ge.a.loginContainer,children:[n,Object(d.jsx)("button",{onClick:a,children:"Logout"})]}):Object(d.jsx)(u.b,{to:jt.LOGIN,children:"LOGIN"})})]})},We=n(39),ze={userId:null,email:null,login:null,isAuth:!1},Je=function(e,t,n,a){return{type:"SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},Ke=function(){return function(e){F().then((function(t){if(0===t.resultCode){var n=t.data,a=n.id,s=n.email,r=n.login;e(Je(a,s,r,!0))}}))}},Xe=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserAPIDataTC()}},{key:"render",value:function(){return Object(d.jsx)(He,{isAuth:this.props.isAuth,login:this.props.login,logoutTC:this.props.logoutTC})}}]),n}(s.a.Component),Ze=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.userId}}),{getUserAPIDataTC:Ke,logoutTC:function(){return function(e){w().then((function(t){0===t.data.resultCode&&e(Je(null,null,null,!1))}))}}})(Xe),qe=n(53),Qe=n.n(qe),Ve=Object(ge.a)({form:"login"})((function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(he.a,{placeholder:"Email",name:"email",component:Ie,validate:[Oe]})}),Object(d.jsx)("div",{children:Object(d.jsx)(he.a,{placeholder:"Password",name:"password",type:"password",component:Ie,validate:[Oe]})}),Object(d.jsxs)("div",{className:Qe.a.item,children:[Object(d.jsx)(he.a,{type:"checkbox",name:"rememberMe",component:"input"})," Remember me"]}),Object(d.jsx)("div",{className:Qe.a.item,children:Object(d.jsx)("button",{children:"Login"})})]}),e.error&&Object(d.jsx)("div",{className:Qe.a.itemError,children:e.error})]})})),Ye=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,userId:e.auth.userId}}),{loginTC:function(e,t,n){return function(a){k(e,t,n).then((function(e){if(0===e.data.resultCode)a(Ke());else{var t=e.data.messages.length>0?e.data.messages[0]:"ERROR: invalid email or password";a(Object(We.a)("login",{_error:t}))}}))}}})((function(e){var t=e.isAuth,n=e.userId,a=e.loginTC;return t?Object(d.jsx)(b.a,{to:jt.PROFILE+n}):Object(d.jsxs)("div",{className:Qe.a.container,children:[Object(d.jsx)("h1",{children:"LOGIN"}),Object(d.jsx)(Ve,{onSubmit:function(e){a(e.email,e.password,e.rememberMe)}})]})})),$e="ADD-MESSAGE",et={dialogs:[{id:1,name:"Terra"},{id:2,name:"Azumy"},{id:3,name:"Bria"},{id:4,name:"Keren"}],messages:[{id:1,message:"Hi! How are yoy?"},{id:2,message:"Don't give up!"},{id:3,message:"Just do it"},{id:4,message:"Could you help me?"}]},tt=n(44),nt=n.n(tt),at=n(94),st=n.n(at);function rt(e){var t="/dialogs/"+e.id;return Object(d.jsx)("div",{className:st.a.dialog,children:Object(d.jsx)(u.b,{to:t,activeClassName:st.a.active,children:e.name})})}var it=n(133),ct=n.n(it);function ot(e){return Object(d.jsx)("div",{className:ct.a.message,children:e.message})}var lt=pe(100);var ut=Object(ge.a)({form:"addMessage"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)(he.a,{component:Ne,name:"textMessage",placeholder:"Enter your message",validate:[Oe,lt]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:nt.a.button,children:"Add Message"})})]})})),dt=Object(Me.d)(Object(x.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:$e,messageText:e}}(t))}}})),Re)((function(e){var t=e.dialogPage.dialogs.map((function(e){return Object(d.jsx)(rt,{name:e.name,id:e.id},e.id)})),n=e.dialogPage.messages.map((function(e){return Object(d.jsx)(ot,{message:e.message,id:e.id},e.id)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:nt.a.textarea,children:Object(d.jsx)(ut,{onSubmit:function(t){e.addMessage(t.textMessage)}})}),Object(d.jsxs)("div",{className:nt.a.dialogs,children:[Object(d.jsx)("div",{className:nt.a.dialogsItem,children:t}),Object(d.jsx)("div",{className:nt.a.messages,children:n})]})]})})),jt={PROFILE:"/profile/",DIALOGS:"/dialogs/",NEWS:"/news/",MUSIC:"/music/",SETTINGS:"/settings/",FIND_FRIENDS:"/findFriends/",LOGIN:"/login/"};var bt=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(Ze,{}),Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(b.a,{to:jt.PROFILE})}}),Object(d.jsx)(b.b,{path:jt.PROFILE+":userId",render:function(){return Object(d.jsx)(Ue,{})}}),Object(d.jsx)(b.b,{path:jt.DIALOGS,render:function(){return Object(d.jsx)(dt,{})}}),Object(d.jsx)(b.b,{path:jt.NEWS,render:function(){return Object(d.jsx)(f,{})}}),Object(d.jsx)(b.b,{path:jt.MUSIC,render:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(b.b,{path:jt.FIND_FRIENDS,render:function(){return Object(d.jsx)(se,{})}}),Object(d.jsx)(b.b,{path:jt.SETTINGS,render:function(){return Object(d.jsx)(g,{})}}),Object(d.jsx)(b.b,{path:jt.LOGIN,render:function(){return Object(d.jsx)(Ye,{})}})]})})]})})},ft={},ht=n(134),gt=n(126),Ot=Object(Me.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:var n={id:(new Date).getTime(),message:t.postText,likeCount:0};return Object(N.a)(Object(N.a)({},e),{},{posts:[].concat(Object(_.a)(e.posts),[n])});case"SET-USERS-PROFILE":return Object(N.a)(Object(N.a)({},e),{},{profile:t.profile});case"SET-USER-STATUS":return Object(N.a)(Object(N.a)({},e),{},{status:t.status});default:return e}},dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $e:var n={id:(new Date).getTime(),message:t.messageText};return Object(N.a)(Object(N.a)({},e),{},{messages:[].concat(Object(_.a)(e.messages),[n])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft;return e},friendsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(N.a)(Object(N.a)({},e),{},{friends:e.friends.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(N.a)(Object(N.a)({},e),{},{friends:e.friends.map((function(e){return e.id===t.userId?Object(N.a)(Object(N.a)({},e),{},{followed:!1}):e}))});case"SET-FRIENDS":return Object(N.a)(Object(N.a)({},e),{},{friends:t.friends});case"TOGGLE-IS-FETCHING":return Object(N.a)(Object(N.a)({},e),{},{isFetching:t.isFetching});case"FOLLOWING-PROGRESS":return t.isFetching?Object(N.a)(Object(N.a)({},e),{},{followingInProgress:[].concat(Object(_.a)(e.followingInProgress),[t.userId])}):Object(N.a)(Object(N.a)({},e),{},{followingInProgress:e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-CURRENT-PAGE":return Object(N.a)(Object(N.a)({},e),{},{currentPage:t.page});case"SET-TOTAL-COUNT":return Object(N.a)(Object(N.a)({},e),{},{totalCount:t.totalCount});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(N.a)(Object(N.a)({},e),t.payload);default:return e}},form:gt.a}),pt=Object(Me.e)(Ot,Object(Me.a)(ht.a));c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x.a,{store:pt,children:Object(d.jsx)(bt,{})})}),document.getElementById("root")),r()},34:function(e,t,n){e.exports={friendsItem:"Friends_friendsItem__1z8Rr",generalBlock:"Friends_generalBlock__1nnYb",avatar:"Friends_avatar__19sMf",info:"Friends_info__1B_iw",name:"Friends_name__1H0jP",buttonFollow:"Friends_buttonFollow__3Rq8Q",location:"Friends_location__gZKax",selectedPage:"Friends_selectedPage__2k4r0"}},44:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3FZa8",dialogsItem:"Dialogs_dialogsItem__1PTrf",messages:"Dialogs_messages__XRR94",button:"Dialogs_button__w9F2l",textarea:"Dialogs_textarea__3dxXe"}},53:function(e,t,n){e.exports={container:"Login_container__37fLX",item:"Login_item__1I-PT",itemError:"Login_itemError__2wtkp"}},70:function(e,t,n){e.exports={postBlock:"MyPost_postBlock__1hg6I",posts:"MyPost_posts__9OGtt",button:"MyPost_button__6BLQc"}},71:function(e,t,n){e.exports={formControl:"FormsControl_formControl__1wB4j",error:"FormsControl_error__LmK2M",errorMessage:"FormsControl_errorMessage__2BR3w",blink1:"FormsControl_blink1__1ZTu4"}},73:function(e,t,n){e.exports={header:"Header_header__1vXGy",loginBlock:"Header_loginBlock__8AO3e",loginContainer:"Header_loginContainer__1z_Po"}},91:function(e,t,n){e.exports={item:"Post_item__3Rw3F"}},94:function(e,t,n){e.exports={dialog:"DialogItem_dialog__-cKzQ",active:"DialogItem_active__gIi1x"}}},[[291,1,2]]]);
//# sourceMappingURL=main.819430b8.chunk.js.map
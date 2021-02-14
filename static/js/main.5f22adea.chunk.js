(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),s=n.n(o),c=n(9),a=n.n(c),u=n(3),i=n(4),l=n(6),h=n(5),d=n(2),p=n.n(d),m=n(7),b=function(){function e(){var t=this;Object(u.a)(this,e),this._baseUrl="https://jsonplaceholder.typicode.com",this._imgUrls=["https://source.unsplash.com/PC_lbSSxCZE/800x600","https://source.unsplash.com/lVmR1YaBGG4/800x600","https://source.unsplash.com/5KvPQc1Uklk/800x600","https://source.unsplash.com/GtYFwFrFbMA/800x600","https://source.unsplash.com/Igct8iZucFI/800x600","https://source.unsplash.com/M01DfkOqz7I/800x600","https://source.unsplash.com/MoI_cHNcSK8/800x600","https://source.unsplash.com/M0WbGFRTXqU/800x600","https://source.unsplash.com/s48nn4NtlZ4/800x600","https://source.unsplash.com/E4944K_4SvI/800x600"],this._addCoverImage=function(e){return t._imgUrls[e]}}return Object(i.a)(e,[{key:"getResource",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._baseUrl).concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,200===n.status){e.next=8;break}throw new Error("Could not fetch ".concat(t,". Recieved status code ").concat(n.status));case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllAlbums",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r,o=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/users/".concat(t,"/albums"));case 2:return n=e.sent,e.next=5,Promise.all(n.map(function(){var e=Object(m.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._transformAlbum(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPhotos",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/albums/".concat(t,"/photos"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCountPhotos",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/albums/".concat(t,"/photos"));case 2:return n=e.sent,e.abrupt("return",n.length);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_transformAlbum",value:function(){var e=Object(m.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCountPhotos(t.id);case 2:return r=e.sent,e.abrupt("return",{userId:t.userId,id:t.id,title:t.title,src:this._addCoverImage(n),countPhotos:r});case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),f=(n(16),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){27===t.keyCode&&e.props.closeModal(t)},e.handleClickOutsideModal=function(t){t.target.matches(".modal-overlay")&&e.props.closeModal(t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){document.body.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnMount",value:function(){document.body.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.closeModal,n=e.findPrevPhoto,o=e.findNextPhoto,s=e.hasPrevPhoto,c=e.hasNextPhoto,a=e.src;return Object(r.jsx)("div",{className:"modal-overlay",onClick:this.handleClickOutsideModal,children:Object(r.jsx)("div",{className:"modal-window",children:Object(r.jsxs)("div",{className:"modal-body",children:[Object(r.jsx)("img",{src:a,alt:"Image: Fake photo"}),Object(r.jsx)("a",{href:"#",className:"modal-close",onClick:function(e){return t(e)},onKeyDown:this.handleKeyDown,children:"\xd7"}),s&&Object(r.jsx)("a",{href:"#",className:"modal-prev",onClick:n,children:"\u2039"}),c&&Object(r.jsx)("a",{href:"#",className:"modal-next",onClick:o,children:"\u203a"})]})})})}}]),n}(o.Component));f.defaultProps={src:"https://via.placeholder.com/600/92c952"};var j=f,v=(n(17),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onAction;return Object(r.jsx)("button",{className:"gallery-button",onClick:n,children:t})}}]),n}(o.Component));v.defaultProps={text:"Click me!"};var O=v,x=(n(18),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.closeAlbum,o=e.openModal;return Object(r.jsx)(g,{images:t,onClose:n,onOpen:o})}}]),n}(o.Component)),g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"renderImageContent",value:function(e){var t=this;if(e)return e.map((function(e,n){var o=e.url,s=e.id;return Object(r.jsx)(y,{image:o,id:n,onOpen:t.props.onOpen},s)}))}},{key:"render",value:function(){var e=this.props,t=e.images,n=e.onClose,o=this.renderImageContent(t);return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("div",{className:"back-button",children:Object(r.jsx)(O,{text:"Back",onAction:n})}),Object(r.jsx)("section",{className:"tiles",children:o})]})}}]),n}(o.Component),y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={mouseOver:!1},e.mouseEnter=function(t){t.preventDefault(),e.state.mouseOver||e.setState({mouseOver:!0})},e.mouseLeave=function(t){t.preventDefault(),e.state.mouseOver&&e.setState({mouseOver:!1})},e.clickHandler=function(t){t.preventDefault(),e.props.onOpen(e.props.id)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.image;return Object(r.jsx)("div",{className:"tile",children:Object(r.jsx)("img",{onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave,onClick:this.clickHandler,src:e,alt:"Image: Fake photo"})})}}]),n}(o.Component);y.defaultProps={image:"https://via.placeholder.com/600/92c952"};var k=x,P=(n(19),function(){return Object(r.jsxs)("div",{className:"error-indicator",children:[Object(r.jsx)("div",{className:"loadingio-spinner-magnify-xvi2eomm9dk",children:Object(r.jsx)("div",{className:"ldio-djr5te9pz2p",children:Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})})}),Object(r.jsxs)("div",{className:"error-message",children:[Object(r.jsx)("div",{children:"Something has gone wrong!"}),Object(r.jsx)("div",{children:"(but we already sent our developers to fix it)"})]})]})}),A=(n(20),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o)))._userId=1,e.state={albums:null,photos:null,countPhotos:null,currentPhotoIndex:null,isOpenModal:!1,isOpenAlbum:!1,error:null},e.fakeApiService=new b,e.updateAlbumTiles=function(){e.fakeApiService.getAllAlbums(e._userId).then((function(t){return e.setState({albums:t})})).catch((function(){return e.setState({error:!0})}))},e.updatePhotosList=function(t){e.fakeApiService.getAllPhotos(t).then((function(t){return e.setState({photos:t})})).catch((function(){return e.setState({error:!0})}))},e.updateCountPhotos=function(t){e.fakeApiService.getCountPhotos(t).then((function(t){return e.setState({countPhotos:t})})).catch((function(){return e.setState({error:!0})}))},e.openAlbum=function(t){e.updatePhotosList(t),e.setState({isOpenAlbum:!0})},e.openModal=function(t){e.updatePhotosList(t),e.setState({currentPhotoIndex:t,isOpenModal:!0})},e.openModalInsideAlbum=function(t){e.setState({currentPhotoIndex:t,isOpenModal:!0})},e.closeAlbum=function(){e.setState({photos:null,currentPhotoIndex:null,isOpenAlbum:!1})},e.closeModal=function(t){t.preventDefault(),e.setState({isOpenModal:!1})},e.findPrevPhoto=function(t){t.preventDefault(),e.setState((function(e){return{currentPhotoIndex:e.currentPhotoIndex-1}}))},e.findNextPhoto=function(t){t.preventDefault(),e.setState((function(e){return{currentPhotoIndex:e.currentPhotoIndex+1}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateAlbumTiles()}},{key:"renderAlbumTiles",value:function(e){var t=this;if(e)return e.map((function(e){var n=e.src,o=e.id,s=e.title,c=e.countPhotos;return Object(r.jsxs)("div",{className:"album",children:[Object(r.jsx)("img",{className:"cover-image",src:n,alt:"Image: cover image"},o),Object(r.jsxs)("div",{className:"album-info",children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Album: "}),s]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Count: "}),c]})]}),Object(r.jsxs)("div",{className:"button-block",children:[Object(r.jsx)(O,{text:"\u0410lbum",onAction:function(){return t.openAlbum(o)}}),Object(r.jsx)(O,{text:"Preview",onAction:function(){return t.openModal(o)}})]})]},o)}))}},{key:"render",value:function(){var e=this.state,t=e.albums,n=e.photos,o=e.currentPhotoIndex,c=e.isOpenModal,a=e.isOpenAlbum,u=e.error?Object(r.jsx)(P,{}):null,i=this.renderAlbumTiles(t),l=c&&n?Object(r.jsx)(j,{closeModal:this.closeModal,findPrevPhoto:this.findPrevPhoto,findNextPhoto:this.findNextPhoto,hasPrevPhoto:o>0,hasNextPhoto:o+1<n.length,src:n[o].url}):null,h=a&&n?Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(k,{closeAlbum:this.closeAlbum,openModal:this.openModalInsideAlbum,data:n}),l]}):null,d=a?null:Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("h1",{children:"Photo Gallery"}),Object(r.jsx)("section",{className:"gallery-grid",children:i}),l]});return Object(r.jsxs)("section",{className:"gallery-container",children:[d,h,u]})}}]),n}(o.Component));a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.querySelector(".gallery"))}],[[21,1,2]]]);
//# sourceMappingURL=main.5f22adea.chunk.js.map
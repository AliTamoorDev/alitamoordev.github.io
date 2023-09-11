(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[6],{150:function(e,a,t){"use strict";var c=t(3),r=t(2),n=t(4),s=t(5),o=t.n(s),i=t(0),d=t(8),b=t(1),l=["as","bsPrefix","className"],j=["className"];var O=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,s=Object(n.a)(e,l);t=Object(d.c)(t,"col");var i=Object(d.a)(),b=Object(d.b)(),j=[],O=[];return i.forEach((function(e){var a,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(a=n.span,c=n.offset,r=n.order):a=n;var o=e!==b?"-".concat(e):"";a&&j.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=r&&O.push("order".concat(o,"-").concat(r)),null!=c&&O.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(j,O))}),{as:a,bsPrefix:t,spans:j}]}(e),s=Object(c.a)(t,2),i=s[0],O=i.className,f=Object(n.a)(i,j),u=s[1],v=u.as,x=void 0===v?"div":v,m=u.bsPrefix,p=u.spans;return Object(b.jsx)(x,Object(r.a)(Object(r.a)({},f),{},{ref:a,className:o()(O,!p.length&&m)}))}));O.displayName="Col",a.a=O},171:function(e,a,t){"use strict";var c=t(2),r=t(3),n=t(4),s=t(5),o=t.n(s),i=t(0),d=t(41),b=t(8),l=t(1),j=["as","bsPrefix","variant","size","active","disabled","className"],O=i.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,i=e.variant,O=void 0===i?"primary":i,f=e.size,u=e.active,v=void 0!==u&&u,x=e.disabled,m=void 0!==x&&x,p=e.className,y=Object(n.a)(e,j),g=Object(b.c)(s,"btn"),h=Object(d.b)(Object(c.a)({tagName:t,disabled:m},y)),N=Object(r.a)(h,2),P=N[0],S=N[1].tagName;return Object(l.jsx)(S,Object(c.a)(Object(c.a)(Object(c.a)({},P),y),{},{ref:a,disabled:m,className:o()(p,g,v&&"active",O&&"".concat(g,"-").concat(O),f&&"".concat(g,"-").concat(f),y.href&&m&&"disabled")}))}));O.displayName="Button",a.a=O},91:function(e,a,t){"use strict";t.r(a);var c=t(2),r=t(0),n=t(150),s=t(4),o=t(5),i=t.n(o),d=t(8),b=t(25),l=t(67),j=t(1),O=["bsPrefix","className","variant","as"],f=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.variant,o=e.as,b=void 0===o?"img":o,l=Object(s.a)(e,O),f=Object(d.c)(t,"card-img");return Object(j.jsx)(b,Object(c.a)({ref:a,className:i()(n?"".concat(f,"-").concat(n):f,r)},l))}));f.displayName="CardImg";var u=f,v=t(68),x=["bsPrefix","className","as"],m=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,b=void 0===o?"div":o,l=Object(s.a)(e,x),O=Object(d.c)(t,"card-header"),f=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:O}}),[O]);return Object(j.jsx)(v.a.Provider,{value:f,children:Object(j.jsx)(b,Object(c.a)(Object(c.a)({ref:a},l),{},{className:i()(n,O)}))})}));m.displayName="CardHeader";var p=m,y=["bsPrefix","className","bg","text","border","body","children","as"],g=Object(l.a)("h5"),h=Object(l.a)("h6"),N=Object(b.a)("card-body"),P=Object(b.a)("card-title",{Component:g}),S=Object(b.a)("card-subtitle",{Component:h}),C=Object(b.a)("card-link",{Component:"a"}),k=Object(b.a)("card-text",{Component:"p"}),w=Object(b.a)("card-footer"),B=Object(b.a)("card-img-overlay"),T=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.bg,o=e.text,b=e.border,l=e.body,O=void 0!==l&&l,f=e.children,u=e.as,v=void 0===u?"div":u,x=Object(s.a)(e,y),m=Object(d.c)(t,"card");return Object(j.jsx)(v,Object(c.a)(Object(c.a)({ref:a},x),{},{className:i()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),b&&"border-".concat(b)),children:O?Object(j.jsx)(N,{children:f}):f}))}));T.displayName="Card";var R=Object.assign(T,{Img:u,Title:P,Subtitle:S,Body:N,Link:C,Text:k,Header:p,Footer:w,ImgOverlay:B}),I=t(171),V=["bsPrefix","bg","pill","text","className","as"],z=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bg,n=void 0===r?"primary":r,o=e.pill,b=void 0!==o&&o,l=e.text,O=e.className,f=e.as,u=void 0===f?"span":f,v=Object(s.a)(e,V),x=Object(d.c)(t,"badge");return Object(j.jsx)(u,Object(c.a)(Object(c.a)({ref:a},v),{},{className:i()(O,x,b&&"rounded-pill",l&&"text-".concat(l),n&&"bg-".concat(n))}))}));z.displayName="Badge";var F=z,H=t(20),J=t(182),L={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=function(e){var a,t,s=Object(r.useContext)(H.a),o=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(R,{style:Object(c.a)(Object(c.a)({},L.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[Object(j.jsx)(R.Img,{variant:"top",src:null===o||void 0===o?void 0:o.image}),Object(j.jsxs)(R.Body,{children:[Object(j.jsx)(R.Title,{style:L.cardTitleStyle,children:o.title}),Object(j.jsx)(R.Text,{style:L.cardTextStyle,children:(t=o.bodyText,Object(j.jsx)(J.a,{children:t}))})]}),Object(j.jsx)(R.Body,{children:null===o||void 0===o||null===(a=o.links)||void 0===a?void 0:a.map((function(e){return Object(j.jsx)(I.a,{style:L.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),o.tags&&Object(j.jsx)(R.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((function(e){return Object(j.jsx)(F,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:L.badgeStyle,children:e},e)}))})]})})}}}]);
//# sourceMappingURL=6.5c77ee26.chunk.js.map
"use strict";(self.webpackChunkrealm_essentials_website=self.webpackChunkrealm_essentials_website||[]).push([[813],{7713:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(1312),a=n(9022),i=n(4848);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.A,{permalink:n,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),l&&(0,i.jsx)(a.A,{permalink:l,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(7131),a=n(4651),i=n(4848);function l(e){let{items:t,component:n=a.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.i,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(6540);var s=n(4164),a=n(1312),i=n(5846),l=n(1213),r=n(7559),o=n(8774),c=n(6535),g=n(7713),d=n(1463),u=n(3892),h=n(996),p=n(1107),m=n(4848);function x(e){const t=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.be,{title:n}),(0,m.jsx)(d.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const l=x(t);return(0,m.jsxs)(c.A,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(h.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.A,{as:"h1",children:l}),(0,m.jsx)(o.A,{href:t.allTagsPath,children:(0,m.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.A,{items:n}),(0,m.jsx)(g.A,{metadata:i})]})}function A(e){return(0,m.jsxs)(l.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(b,{...e})]})}},996:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var s=n(4164),a=n(1312),i=n(5260),l=n(4848);function r(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var g=n(7559),d=n(7293);function u(e){let{className:t}=e;return(0,l.jsx)(d.A,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,s.A)(t,g.G.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(u,{...e})]})}}}]);
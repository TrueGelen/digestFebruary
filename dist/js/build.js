!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6),n(7)},function(e,t){window.addEventListener("load",(function(){for(var e=document.querySelectorAll(".slide__numof .slide__cur"),t=document.querySelectorAll(".slide__numof .slide__of"),n=document.querySelectorAll("section").length,r=0;r<n;r++)e[r].innerHTML="".concat(r+1),t[r].innerHTML="/ ".concat(n)}))},function(e,t){window.addEventListener("load",(function(){var e=document.querySelector(".fixedLogo"),t=document.querySelector("#wrapper");function n(){var n,r,o=window.innerHeight,i=parseInt((r="height",""===(n=t).style[r]?n.currentStyle?n.currentStyle[r]:getComputedStyle(n,null)[r]:n.style[r])),c=window.innerWidth>1050?(o-i)/2+i/100*8:(o-i)/2+i/100*7;e.style.top="".concat(c,"px")}n(),window.addEventListener("resize",(function(){n()}))}))},function(e,t){window.addEventListener("load",(function(){for(var e=document.querySelectorAll("section"),t=1;t<e.length-1;t++){var n=e[t].querySelectorAll(".slide__buttons a");n[0].setAttribute("href","#".concat(e[t-1].id)),n[1].setAttribute("href","#".concat(e[t+1].id))}}))},function(e,t){window.addEventListener("load",(function(){var e=document.querySelector(".burger"),t=document.querySelector("#page-wrapper #wrapper");function n(){if(window.innerWidth>1450){var n=t.getBoundingClientRect().height/2-48-15;e.style.transform="translateY(".concat(-n,"px)")}else if(window.innerWidth<=1450&&window.innerWidth>1200){var r=t.getBoundingClientRect().height/2-48;e.style.transform="translateY(".concat(-r,"px)")}else if(window.innerWidth<=1200&&window.innerWidth>1050){var o=t.getBoundingClientRect().height/2-60;e.style.transform="translateY(".concat(-o,"px)")}else if(window.innerWidth<=1050&&window.innerWidth>768){var i=t.getBoundingClientRect().height/2-70;e.style.transform="translateY(".concat(-i,"px)")}else e.style.transform=""}n(),window.addEventListener("resize",(function(){n(),console.log(window.innerWidth)}))}))},function(e,t){window.addEventListener("load",(function(){var e=document.querySelector("#burger"),t=document.querySelector("#menu"),n=t.querySelectorAll(".menu__items a"),r=t.querySelector(".menu__close");function o(){e.style.opacity=1,t.classList.remove("showMenu"),t.classList.add("hideMenu"),r.classList.remove("showClose"),r.classList.add("hideClose")}e.addEventListener("click",(function(){e.style.opacity=0,t.classList.remove("hideMenu"),t.classList.add("showMenu"),r.classList.remove("hideClose"),r.classList.add("showClose")})),r.addEventListener("click",o);for(var i=0;i<n.length;i++)n[i].addEventListener("click",(function(){o()}))}))},function(e,t){window.addEventListener("load",(function(){var e=document.querySelector("#page-wrapper #wrapper .slide50 .template2__video");document.querySelector("#page-wrapper #wrapper .slide50 .template2__button").addEventListener("click",(function(){var t=document.querySelector("#page-wrapper #wrapper .slide50 .template2__video source").getAttribute("data-src");e.src=t,e.setAttribute("controls","")}));var t=document.querySelector("#page-wrapper #wrapper .slide32 .template2__video");document.querySelector("#page-wrapper #wrapper .slide32 .template2__button").addEventListener("click",(function(){var e=document.querySelector("#page-wrapper #wrapper .slide32 .template2__video source").getAttribute("data-src");t.src=e,t.setAttribute("controls","")}))}))},function(e,t){window.addEventListener("load",(function(){var e=document.querySelector("#page-wrapper"),t=document.querySelector("#wrapper"),n=document.querySelectorAll("link")[0],r=n.href;function o(){window.innerWidth>768?(e.id="page-wrapper",t.id="wrapper",n.href=r):(e.id="",t.id="",n.href="")}o(),window.addEventListener("resize",(function(){o()}))}))}]);
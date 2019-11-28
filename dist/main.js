!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");setInterval((function r(){let c=function(){let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60);return{timerRemaining:t,hours:Math.floor(t/60/60),minutes:n,seconds:o}}();c.hours<10?t.textContent=`0${c.hours}`:t.textContent=c.hours,c.minutes<10?o.textContent=`0${c.minutes}`:o.textContent=c.minutes,c.seconds<10?n.textContent=`0${c.seconds}`:n.textContent=c.seconds,c.timeRemaining>0?setTimeout(r,1e3):c.timerRemaining<0&&(t.textContent="00",o.textContent="00",n.textContent="00")}),1e3)};var r=()=>{const e=document.querySelector("menu"),t=document.body;t.addEventListener("click",t=>{let o=t.target;(o.classList.contains("close-btn")||"A"===o.tagName)&&e.classList.remove("active-menu"),(o=o.closest("menu"))||e.classList.remove("active-menu"),(o=(o=t.target).closest(".menu"))&&e.classList.toggle("active-menu")})};var c=()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content");document.querySelectorAll(".popup-btn").forEach(o=>{o.addEventListener("click",()=>{document.documentElement.clientWidth>=480?(e.style.display="block",t.animate([{transform:"translateX(0px)"},{transform:"translateX(-100px)"},{transform:"translateX(100px)"},{transform:"translateX(0px)"}],{duration:1e3,iterations:2})):e.style.display="block"})}),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"))||(e.style.display="none")})};var a=()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let n=e.target;(n=n.closest(".service-header-tab")).classList.contains("service-header-tab")&&t.forEach((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)})})};var s=()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots")),o=document.querySelector(".portfolio-content");let n,r,c=0;e.forEach(()=>{let e=document.createElement("li");e.classList.add("dot"),t.appendChild(e),n=document.querySelectorAll(".dot")});const a=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},l=()=>{a(e,c,"portfolio-item-active"),a(n,c,"dot-active"),++c>=e.length&&(c=0),s(e,c,"portfolio-item-active"),s(n,c,"dot-active")},i=(e=3e3)=>{r=setInterval(l,e)};o.addEventListener("click",t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(a(e,c,"portfolio-item-active"),a(n,c,"dot-active"),o.matches("#arrow-right")?c++:o.matches("#arrow-left")?c--:o.matches(".dot")&&n.forEach((e,t)=>{e===o&&(c=t)}),c>=e.length&&(c=0),c<0&&(c=e.length-1),s(e,c,"portfolio-item-active"),s(n,c,"dot-active"))}),o.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)}),o.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()}),i()};var l=()=>{const e=document.getElementById("command");let t=e=>{let t=e.src;e.src=e.dataset.img,e.dataset.img=t};e.addEventListener("mouseover",e=>{let o=e.target;o.classList.contains("command__photo")&&t(o)}),e.addEventListener("mouseout",e=>{let o=e.target;o.classList.contains("command__photo")&&t(o)})};var i=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),a=document.getElementById("total"),s=()=>{let t=0,s=1,l=1;const i=o.options[o.selectedIndex].value,u=+n.value;c.value>1&&(s+=(c.value-1)/10),r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),i&&u&&(t=e*i*u*s*l),a.textContent=Math.floor(t)};t.addEventListener("change",e=>{let t=e.target;(t.matches("select")||t.matches("input"))&&s()}),t.addEventListener("input",e=>{let t=e.target;(t.classList.contains("calc-square")||t.classList.contains("calc-count")||t.classList.contains("calc-day"))&&(t.value=t.value.replace(/\D/g,""),s())})};const u=document.getElementById("form1"),d=document.getElementById("form2"),m=document.getElementById("form3");document.body.addEventListener("input",e=>{let t=e.target;t.classList.contains("form-phone")&&(t.value=t.value.replace(/[^0-9\\+]/,"")),(t===document.getElementById("form2-name")||t.classList.contains("mess")||t.classList.contains("form-name"))&&(t.value=t.value.replace(/[^А-яа-я\s]/,""))});var v=e=>{const t=document.createElement("div");t.style.cssText="font-size: 2rem",e.addEventListener("submit",n=>{n.preventDefault(),e.appendChild(t);const r=new FormData(e);let c={};r.forEach((e,t)=>{c[t]=e}),t.textContent="Загрузка...",o(c).then(e=>{if(200!==e.status)throw new Error("Status network not 200");t.textContent="Спасибо! Мы скоро с вами свяжемся!"}).catch(e=>{t.textContent="Что-то пошло не так...",console.error(e)}).then(t=>{e.reset()})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var p=()=>{document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href");if("#"==o)return!1;document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})})})};n("31 november 2019"),r(),c(),a(),s(),l(),i(100),v(u),v(d),v(m),p()}]);
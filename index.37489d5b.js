(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();var e=document.querySelectorAll(".hamburger");e.length>0&&function(e,t,o){if("[object Object]"===Object.prototype.toString.call(e))for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.call(o,e[c],c,e);else for(var l=0,n=e.length;n>l;l++)t.call(o,e[l],l,e)}(e,(function(e){e.addEventListener("click",(function(){this.classList.toggle("is-active")}),!1)}));let t=document.querySelector(".page-up");t.onclick=()=>window.scrollTo({top:0,behavior:"smooth"}),window.onscroll=()=>window.scrollY>400?t.style.opacity=1:t.style.opacity=0;
//# sourceMappingURL=index.37489d5b.js.map
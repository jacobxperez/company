/* @license
 * Rams <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
function t(...t){const e=new Set,s=new Set(["pop","tooltip",...t]);function r(){e.forEach((t=>{s.has(t.dataset.toggle)&&t.removeDataAttr("state")}))}function a(t){const e=t.closestDataAttr("dropbox"),s=t.hasDataAttr("state");e||s||r(),t.toggleDataAttr("state","active")}return document.addEvent("click",(t=>{const s=t.target.closestDataAttr("toggle");if(s){if(e.has(s))return;e.add(s),s.addEvent("click",(t=>{a(s),t.stopPropagation()}),!0),a(s)}else r();t.stopPropagation()})),this}class e{constructor(){e.#t(),this.toggle=t}static#t(){EventTarget.prototype.addEvent=function(t,e,s=!1){return this.addEventListener(t,e,s)},EventTarget.prototype.removeEvent=function(t,e,s=!1){return this.removeEventListener(t,e,s)},Element.prototype.setDataAttr=function(t,e=""){return this.setAttribute(`data-${t}`,e)},Element.prototype.removeDataAttr=function(t){return this.removeAttribute(`data-${t}`)},Element.prototype.getDataAttr=function(t,e){return e?this.getAttribute(`data-${t}="${e}"`):this.getAttribute(`data-${t}`)},Element.prototype.hasDataAttr=function(t,e){return e?this.hasAttribute(`data-${t}="${e}"`):this.hasAttribute(`data-${t}`)},Element.prototype.closestDataAttr=function(t,e){return e?this.closest(`[data-${t}="${e}"]`):this.closest(`[data-${t}]`)},Element.prototype.matchDataAttr=function(t,e){return e?this.matches(`[data-${t}="${e}"]`):this.matches(`[data-${t}]`)},Element.prototype.toggleDataAttr=function(t,e){return this.hasDataAttr(t)?this.removeDataAttr(t):this.setDataAttr(t,e)}}toggle}const s=new e;s.toggle();new class{constructor({carouselSelector:t="[data-carousel]",slideSelector:e="[data-slide]",controlsSelector:s="[data-controls]",tabSelector:r="[data-tab]",intervalTime:a=5e3,lazyLoadThreshold:i=2}={}){if(this.carousel=document.querySelector(t),!this.carousel)throw new Error("Carousel element not found in the DOM");this.slides=this.carousel.querySelectorAll(e),this.controls=this.carousel.querySelector(s)??this.#e(),this.tabs=Array.from(this.controls.querySelectorAll(r)),this.button=document.createElement("button"),this.intervalTime=a,this.lazyLoadThreshold=i,this.currentIndex=0,this.indicators=!1,this.paused=!0,this.#s()}async#s(){await this.#r(),this.#a(),this.controls.addEventListener("click",this.#i.bind(this)),this.tabs.forEach(((t,e)=>t.setAttribute("data-index",e)))}#e(){const t=document.createElement("nav");return t.setAttribute("data-controls",""),this.carousel.appendChild(t),t}async#r(){const t=Array.from(this.slides).slice(0,this.lazyLoadThreshold).map((t=>{const e=t.querySelector("img");if(e)return new Promise(((t,s)=>{const r=new Image;r.src=e.src,r.onload=t,r.onerror=s}))}));await Promise.all(t)}#n(){const t=this.controls.querySelector(`[data-index="${this.currentIndex}"]`),e=this.controls.querySelector('[data-state="active"]');t.setAttribute("data-state","active"),e?.removeAttribute("data-state"),requestAnimationFrame((()=>{this.tabs.filter((s=>![t,e].includes(s))).forEach((t=>t.removeAttribute("data-state")))}))}#a(){const t=this.slides[this.currentIndex];t.setAttribute("data-state","current"),requestAnimationFrame((()=>{Array.from(this.slides).filter((e=>e!==t)).forEach((t=>t.removeAttribute("data-state")))})),this.indicators&&this.#n()}#o(t){"next"===t?(this.currentIndex++,this.currentIndex>this.slides.length-1&&(this.currentIndex=0)):"prev"===t&&(this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.slides.length-1)),this.#a()}#i(t){const e=t.target;e.matches('[data-button="next-slide"]')?(this.#o("next"),this.#h()):e.matches('[data-button="prev-slide"]')?(this.#o("prev"),this.#h()):e.matches("[data-index]")&&(this.#d(),this.currentIndex=Number(e.getAttribute("data-index")),this.#a())}addControls(){const t=this.button.cloneNode(!0),e=this.button.cloneNode(!0);return t.setAttribute("data-button","prev-slide"),e.setAttribute("data-button","next-slide"),this.controls.appendChild(t),this.controls.appendChild(e),this}addIndicators(){const t=document.createElement("div");t.setAttribute("data-indicator","tabs");for(let e=0;e<this.slides.length;e++){const s=this.button.cloneNode(!0);s.setAttribute("data-index",e),s.setAttribute("data-tab","indicator"),t.appendChild(s)}return this.controls.appendChild(t),this.indicators=!0,this}addTouchControls(){return this.carousel.addEventListener("touchstart",this.#c.bind(this)),this.carousel.addEventListener("touchmove",this.#l.bind(this)),this.carousel.addEventListener("touchend",this.#u.bind(this)),this}#c(t){this.touchStartX=t.touches[0].clientX,this.touchEndX=this.touchStartX}#l(t){this.touchEndX=t.touches[0].clientX}#u(){if(void 0!==this.touchStartX&&void 0!==this.touchEndX){const t=this.touchEndX-this.touchStartX;t>0?(this.#o("prev"),this.#h()):t<0&&(this.#o("next"),this.#h())}}addKeyboardControls(){return document.addEventListener("keydown",this.#m.bind(this)),this}#m(t){switch(t.key){case"ArrowLeft":this.#o("prev"),this.#h();break;case"ArrowRight":this.#o("next"),this.#h()}}start(t=this.intervalTime){return this.paused=!1,this.interval=setInterval((()=>{this.#o("next")}),t),this}#d(){return this.paused=!0,clearInterval(this.interval),this}#h(){return this.#d().start(),this}}({}).addControls().addIndicators().addTouchControls().addKeyboardControls().start();
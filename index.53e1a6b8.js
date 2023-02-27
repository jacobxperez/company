/* @license
 * Rams <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
$(".slider").each((function(){var t,e=$(this).find(".slide"),n=e.length,a=0,c=[],i=5e3;function o(){var t=e.eq(a);e.fadeOut(500).css("z-index",1),t.fadeIn(500).css("z-index",5)}function d(){clearInterval(t),t=setInterval((function(){(a+=1)>n-1&&(a=0),o()}),i)}!function t(){a<n?(c[a]=new Image,c[a].src=e.eq(a).find("img").attr("src"),c[a].onload=function(){a+=1,t()}):(a=0,o(),d())}(),$(".next-slide").on("click",(function(){(a+=1)>n-1&&(a=0),o(),d(i=1e4)})),$(".prev-slide").on("click",(function(){(a-=1)<0&&(a=n-1),o(),d(i=1e4)}))})),(()=>{const t=document.querySelectorAll("[data-toggle]");t.forEach((function(t){t.addEventListener("click",(e=>{t.hasAttribute("data-state","active")?t.removeAttribute("data-state"):t.setAttribute("data-state","active"),e.stopPropagation()}))})),document.addEventListener("click",(e=>{t.forEach((t=>function(t,e,n){n.target!==t&&t.matches(e)&&t.removeAttribute("data-state")}(t,'[data-toggle~="dropdown"]',e)))}))})();
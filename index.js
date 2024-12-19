import{a as b,i as l,S as w}from"./assets/vendor-Dpd1z_xS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const f=({webformatURL:e,largeImageURL:s,tags:i,likes:o,views:t,comments:r,downloads:n})=>`<li class='image-item'>
    <div class='card-wrapper'>
      <div class='image-wrapper'>
        <a class='card-link' href=${s}>
          <img src=${e} alt='${i}'>
        </a>
      </div>
      <div class='card-content'>
        <ul class='stats-list'>
          <li class='stats-item'><div><span>Likes</span><span>${o}</span></div></li>
          <li class='stats-item'><div><span>Views</span><span>${t}</span></div></li>
          <li class='stats-item'><div><span>Comments</span><span>${r}</span></div></li>
          <li class='stats-item'><div><span>Downloads</span><span>${n}</span></div></li>
        </ul>
      </div>
    </div>
  </li>`,h=(e,s)=>{e.insertAdjacentHTML("beforeend",s)},y=document.querySelector(".loader");function L(){y.style.display="block"}function g(){y.style.display="none"}function S(){const s=document.querySelector(".image-item").getBoundingClientRect();window.scrollBy({top:s.width*2,behavior:"smooth"})}const q="https://pixabay.com/api/";async function v(e,s,i){const o={key:"47568770-df67670bdc8e06478abf0c27f",image_type:"photo",orientation:"horizontal",safesearch:!0,q:e,page:s,per_page:i};return L(),(await b.get(q,{params:o})).data}const P=document.querySelector(".search-form"),p=document.querySelector(".images-list"),d=document.querySelector(".load-more-btn"),R=document.querySelector(".info");let a=1,c="";const u=15,$=Math.ceil(500/u);P.addEventListener("submit",e=>E(e));d.addEventListener("click",O);function E(e){if(e.preventDefault(),!e.target.search.value.trim()){l.show({title:"Warning",message:"Please fill the field!",position:"topRight",color:"red"});return}e.target.search.value.trim()!==c&&(a=1,d.style.display="none"),p.innerHTML="",c=e.target.search.value.trim().split(" ").join("+"),v(c,a,u).then(s=>{if(s.hits.length){const i=s.hits.map(o=>f(o)).join("");h(p,i),m.refresh(),a++,d.style.display="block"}else l.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"yellow"})}).catch(s=>{l.show({title:"Error",message:"Sorry, trouble happend. Please try again later!",position:"topRight",color:"red"})}).finally(()=>{g()})}function O(){v(c,a,u).then(e=>{if(e.hits.length){const s=e.hits.map(i=>f(i)).join("");h(p,s),m.refresh(),a++,S()}a>$&&(R.style.display="block",d.style.display="none")}).catch(e=>{l.show({title:"Error",message:"Sorry, trouble happend. Please try again later!",position:"topRight",color:"red"})}).finally(()=>{g()})}let m=new w(".card-link",{captionsData:"alt",captionDelay:250});m.on("show.simplelightbox");
//# sourceMappingURL=index.js.map

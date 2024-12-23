import{a as b,i as l,S as w}from"./assets/vendor-Dpd1z_xS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const m=({webformatURL:e,largeImageURL:s,tags:r,likes:o,views:t,comments:i,downloads:n})=>`<li class='image-item'>
    <div class='card-wrapper'>
      <div class='image-wrapper'>
        <a class='card-link' href=${s}>
          <img src=${e} alt='${r}'>
        </a>
      </div>
      <div class='card-content'>
        <ul class='stats-list'>
          <li class='stats-item'><div><span>Likes</span><span>${o}</span></div></li>
          <li class='stats-item'><div><span>Views</span><span>${t}</span></div></li>
          <li class='stats-item'><div><span>Comments</span><span>${i}</span></div></li>
          <li class='stats-item'><div><span>Downloads</span><span>${n}</span></div></li>
        </ul>
      </div>
    </div>
  </li>`,h=(e,s)=>{e.insertAdjacentHTML("beforeend",s)},g=document.querySelector(".loader");function L(){g.style.display="block"}function y(){g.style.display="none"}function S(){const s=document.querySelector(".image-item").getBoundingClientRect();window.scrollBy({top:s.width*2,behavior:"smooth"})}const q="https://pixabay.com/api/";async function v(e,s,r){const o={key:"47568770-df67670bdc8e06478abf0c27f",image_type:"photo",orientation:"horizontal",safesearch:!0,q:e,page:s,per_page:r};return L(),(await b.get(q,{params:o})).data}const P=document.querySelector(".search-form"),p=document.querySelector(".images-list"),d=document.querySelector(".load-more-btn"),R=document.querySelector(".info");let a=1,c="";const u=15;P.addEventListener("submit",e=>$(e));d.addEventListener("click",E);function $(e){if(e.preventDefault(),!e.target.search.value.trim()){l.show({title:"Warning",message:"Please fill the field!",position:"topRight",color:"red"});return}e.target.search.value.trim()!==c&&(a=1,d.style.display="none"),p.innerHTML="",c=e.target.search.value.trim().split(" ").join("+"),v(c,a,u).then(s=>{if(s.hits.length){const r=s.hits.map(o=>m(o)).join("");h(p,r),f.refresh(),a++,d.style.display="block"}else l.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"yellow"})}).catch(s=>{l.show({title:"Error",message:"Sorry, trouble happend. Please try again later!",position:"topRight",color:"red"})}).finally(()=>{y()})}function E(){v(c,a,u).then(e=>{if(e.hits.length){const s=e.hits.map(r=>m(r)).join("");h(p,s),f.refresh(),a++,S()}a>O(e.totalHits)&&(R.style.display="block",d.style.display="none")}).catch(e=>{l.show({title:"Error",message:"Sorry, trouble happend. Please try again later!",position:"topRight",color:"red"})}).finally(()=>{y()})}function O(e){return Math.ceil(e/u)}let f=new w(".card-link",{captionsData:"alt",captionDelay:250});f.on("show.simplelightbox");
//# sourceMappingURL=index.js.map

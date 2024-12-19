import{i as n,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const u=({webformatURL:r,largeImageURL:t,tags:i,likes:a,views:e,comments:s,downloads:o})=>`<li class='image-item'>
    <div class='card-wrapper'>
      <div class='image-wrapper'>
        <a class='card-link' href=${t}>
          <img src=${r} alt='${i}'>
        </a>
      </div>
      <div class='card-content'>
        <ul class='stats-list'>
          <li class='stats-item'><div><span>Likes</span><span>${a}</span></div></li>
          <li class='stats-item'><div><span>Views</span><span>${e}</span></div></li>
          <li class='stats-item'><div><span>Comments</span><span>${s}</span></div></li>
          <li class='stats-item'><div><span>Downloads</span><span>${o}</span></div></li>
        </ul>
      </div>
    </div>
  </li>`,f=(r,t)=>{r.insertAdjacentHTML("afterbegin",t)},c=document.querySelector(".loader");function m(){c.style.display="block"}function h(){c.style.display="none"}const g=new URLSearchParams({key:"47568770-df67670bdc8e06478abf0c27f",image_type:"photo",orientation:"horizontal",safesearch:!0}),y=`https://pixabay.com/api/?${g}`;function v(r){return m(),fetch(`${y}&q=${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const w=document.querySelector(".search-form");document.querySelector(".search-input");const l=document.querySelector(".images-list");w.addEventListener("submit",r=>b(r));function b(r){if(r.preventDefault(),!r.target.search.value.trim()){n.show({title:"Warning",message:"Please fill the field!",position:"topRight",color:"red"});return}l.innerHTML="";const t=r.target.search.value.trim().split(" ").join("+");v(t).then(i=>{if(i.hits.length){const a=i.hits.map(e=>u(e)).join("");f(l,a),d.refresh()}else n.show({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"yellow"})}).catch(i=>{n.show({title:"Error",message:"Sorry, trouble happend. Please try again later!",position:"topRight",color:"red"})}).finally(()=>{h()})}let d=new p(".card-link",{captionsData:"alt",captionDelay:250});d.on("show.simplelightbox");
//# sourceMappingURL=index.js.map

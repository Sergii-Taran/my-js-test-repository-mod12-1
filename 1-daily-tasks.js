import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as i}from"./assets/vendor-CWxt7QI6.js";const c="http://localhost:3000/todos",l=document.querySelector(".todo__form"),o=document.querySelector(".list");l.addEventListener("submit",d);o.addEventListener("click",u);o.addEventListener("click",m);async function r(t=c,e={}){return(await i(t,e)).data}function n(t){return t.map(({id:e,title:a,completed:s})=>`
  <li class="list__item" data-id="${e}">
  <input type="checkbox" class="list__checkbox" ${s?"checked":""}>
  <h2 class="list__title">${a}</h2>
  <button class="list__btn">X</button>
  </li>
  `).join("")}r(c).then(t=>o.insertAdjacentHTML("beforeend",n(t))).catch(t=>console.log(t.message));async function d(t){t.preventDefault();const{todo:e}=t.currentTarget.elements;if(e.value.trim)try{const a=await r(c,{method:"POST",data:{title:e.value,completed:!1}});o.insertAdjacentHTML("beforeend",n([a]))}catch(a){alert(a.message)}finally{t.target.reset()}}async function u(t){if(!t.target.classList.contains("list__checkbox"))return;t.preventDefault();const a=t.target.closest(".list__item").dataset.id;try{const s=await r(`${c}/${a}`,{method:"PATCH",data:{completed:t.target.checked}});t.target.checked=s.completed}catch(s){alert(s.message)}}async function m(t){if(!t.target.classList.contains("list__btn"))return;const e=t.target.closest(".list__item"),a=e.dataset.id;try{await r(`${c}/${a}`,{method:"DELETE"}),e.remove()}catch(s){console.log(s)}}
//# sourceMappingURL=1-daily-tasks.js.map

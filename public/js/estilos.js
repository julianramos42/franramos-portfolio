
(function(){
  const views=[...document.querySelectorAll('[data-view]')];
  function arriba(){ var r=document.documentElement; r.style.scrollBehavior='auto'; window.scrollTo(0,0); requestAnimationFrame(function(){ r.style.scrollBehavior=''; }); }
  function route(){
    const h=(location.hash||'').replace('#','');
    const target = ['vox','documental','lujo','biografia','impacto','limpio','reels','premium','finanzas','collage','papel','mixed'].includes(h) ? h : 'estilos';
    if(target!=='estilos') window.__estilo = {vox:'Explicativo',documental:'Documental',lujo:'Lujo',biografia:'Biografía',impacto:'Impacto',limpio:'Limpio',reels:'Reels',premium:'Premium',finanzas:'Finanzas',collage:'Collage',papel:'Papel',mixed:'Mixed Media'}[target];
    if(h==='crear'){ window.dispatchEvent(new Event('estilo')); views.forEach(v=>v.hidden = v.dataset.view!=='estilos'); requestAnimationFrame(()=>document.getElementById('crear').scrollIntoView({behavior:'smooth'})); return; }
    views.forEach(v=>v.hidden = v.dataset.view!==target);
    if(['vox','documental','lujo','biografia','impacto','limpio','reels','premium','finanzas','collage','papel','mixed','estilos',''].includes(h)) arriba();
  }
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  window.addEventListener('hashchange',route); route();
  window.addEventListener('load',function(){ var h=(location.hash||'').replace('#',''); if(h===''||h==='estilos') arriba(); });

})();


(function(){
  var frase=document.getElementById('c-frase'), out=document.getElementById('c-prompt'), copy=document.getElementById('c-copy');
  if(!frase) return;
  var dur='10 segundos', fondo='completo', estilo='Explicativo';
  function pinta(){
    var f=(frase.value.trim()||'…').replace(/[.\s]+$/,'');
    out.textContent='Usá la skill estilos-de-edicion, Estilo '+estilo+'. Quiero representar esto en un clip de '+dur+': "'+f+'". Dame 5 formas distintas de mostrarlo, en dos líneas cada una.'+(fondo==='transparente'?' Va con fondo transparente, encima de mi video.':'');
  }
  function grupo(id,cb){ var g=document.getElementById(id); g.addEventListener('click',function(e){ var b=e.target.closest('button'); if(!b) return;
    g.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');}); cb(b.dataset.v); pinta(); }); }
  grupo('c-dur',function(v){dur=v;}); grupo('c-fondo',function(v){fondo=v;}); grupo('c-estilo',function(v){estilo=v;});
  window.addEventListener('estilo',function(){ if(!window.__estilo) return; estilo=window.__estilo;
    document.querySelectorAll('#c-estilo button').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.v===estilo?'true':'false');}); pinta(); });
  frase.addEventListener('input',pinta);
  copy.addEventListener('click',function(){
    var t=out.textContent;
    function ok(){ copy.textContent='Copiado'; setTimeout(function(){copy.textContent='Copiar pedido';},1600); }
    function sel(){ var r=document.createRange(); r.selectNodeContents(out); var x=getSelection(); x.removeAllRanges(); x.addRange(r); copy.textContent='Seleccionado: copialo'; }
    if(navigator.clipboard){ navigator.clipboard.writeText(t).then(ok,sel); } else sel();
  });
  pinta();
})();


document.querySelectorAll('.p3 .cp').forEach(function(b){
  b.addEventListener('click',function(){
    var el=document.getElementById(b.dataset.c), t=el.textContent;
    function ok(){ b.classList.add('ok'); setTimeout(function(){b.classList.remove('ok');},1400); }
    function sel(){ var r=document.createRange(); r.selectNodeContents(el); var x=getSelection(); x.removeAllRanges(); x.addRange(r); }
    if(navigator.clipboard){ navigator.clipboard.writeText(t).then(ok,sel); } else sel();
  });
});


document.querySelectorAll('.vsonido').forEach(function(b){
  var v=document.getElementById(b.dataset.v), r=b.parentNode.querySelector('.vvol');
  v.volume=parseFloat(r.value);
  r.addEventListener('input',function(){ v.volume=parseFloat(r.value); });
  b.addEventListener('click',function(){ var on=v.muted;
    v.muted=!on; if(on){ v.currentTime=0; v.play(); } b.setAttribute('aria-pressed',on); b.textContent=on?'Sonido activado':'Activar sonido'; r.hidden=!on; });
});

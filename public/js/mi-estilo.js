
if('scrollRestoration' in history) history.scrollRestoration='manual';
if(!location.hash) window.scrollTo(0,0);
window.addEventListener('load',function(){ if(!location.hash) window.scrollTo(0,0); });
document.querySelectorAll('.vsonido').forEach(function(b){
  var v=document.getElementById(b.dataset.v), r=b.parentNode.querySelector('.vvol');
  v.volume=parseFloat(r.value);
  r.addEventListener('input',function(){ v.volume=parseFloat(r.value); });
  b.addEventListener('click',function(){ var on=v.muted;
    v.muted=!on; if(on){ v.currentTime=0; v.play(); } b.setAttribute('aria-pressed',on); b.textContent=on?'Sonido activado':'Activar sonido'; r.hidden=!on; });
});

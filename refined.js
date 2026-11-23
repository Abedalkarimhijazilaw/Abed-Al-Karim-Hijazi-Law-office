(() => {
  'use strict';
  const body=document.body;
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    body.classList.add('ref-js');
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('ref-inview');observer.unobserve(entry.target);}
      });
    },{threshold:.10,rootMargin:'0px 0px -30px 0px'});
    document.querySelectorAll('.ref-reveal').forEach((el,index)=>{observer.observe(el);});
    // Tiny parallax drift in a single full-bleed photograph, not a flashy scroll takeover.
    const photo=document.querySelector('.ref-feature-photo');
    if(photo){
      let ticking=false;
      const drift=()=>{
        const rect=photo.parentElement.getBoundingClientRect();
        const h=window.innerHeight;
        if(rect.top<h&&rect.bottom>0){const progress=(h-rect.top)/(h+rect.height);photo.style.transform=`translate3d(0,${(progress-.5)*26}px,0) scale(1.045)`;}
        ticking=false;
      };
      addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(drift)}},{passive:true});
      drift();
    }
  }
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.ref-header-nav a').forEach(a=>{if(a.getAttribute('href')===path)a.setAttribute('aria-current','page')});
  // A discreet WhatsApp contact shortcut retains an important conversion pathway.
  const wa=document.createElement('a');wa.id='ref-wa';wa.href='https://wa.me/96171378653';wa.rel='noopener noreferrer';wa.target='_blank';
  wa.setAttribute('aria-label','Contact the office on WhatsApp');
  wa.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.62 11.62 0 0 0 12.03 0C5.45 0 .09 5.35.09 11.93c0 2.1.55 4.15 1.6 5.97L0 24l6.24-1.64a11.96 11.96 0 0 0 5.78 1.48h.01c6.57 0 11.97-5.35 11.97-11.93a11.9 11.9 0 0 0-3.5-8.41zM12.03 21.8a9.92 9.92 0 0 1-5.04-1.38l-.37-.22-3.75.99 1-3.65-.24-.38a9.9 9.9 0 0 1-1.52-5.23c0-5.47 4.45-9.93 9.93-9.93a9.86 9.86 0 0 1 7.03 2.92 9.88 9.88 0 0 1 2.92 7.01c0 5.48-4.46 9.94-9.96 9.94zm5.45-7.43c-.3-.15-1.76-.87-2.03-.97-.28-.1-.47-.15-.68.15-.2.3-.77.96-.95 1.16-.18.2-.35.23-.65.08-.3-.15-1.26-.47-2.4-1.48-.9-.79-1.49-1.77-1.67-2.06-.18-.3-.02-.46.14-.61.13-.13.3-.35.44-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.93-2.22-.24-.59-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.5.72.32 1.28.5 1.72.63.73.23 1.4.2 1.92.12.59-.09 1.76-.72 2.01-1.42.24-.7.24-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg><span>WhatsApp</span>';
  document.body.appendChild(wa);
  const syncWA=()=>{const lang=document.documentElement.lang; const labels={en:'WhatsApp',fr:'WhatsApp',ar:'واتساب'};wa.querySelector('span').textContent=labels[lang]||'WhatsApp';};
  syncWA(); document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',syncWA));
})();

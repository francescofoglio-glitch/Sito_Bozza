(function(){
  var root = document.documentElement;
  try{ var s = localStorage.getItem('pbTheme'); if(s){ root.setAttribute('data-theme', s); } }catch(e){}
  var tb = document.getElementById('themeBtn');
  if(tb){ tb.addEventListener('click', function(){
    var cur = root.getAttribute('data-theme');
    var dark = cur ? cur === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    var nx = dark ? 'light' : 'dark'; root.setAttribute('data-theme', nx);
    try{ localStorage.setItem('pbTheme', nx); }catch(e){}
  }); }
  var mb = document.getElementById('menuBtn');
  if(mb){ mb.addEventListener('click', function(){
    var open = document.body.classList.toggle('nav-open'); mb.setAttribute('aria-expanded', open ? 'true' : 'false');
  }); }
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ document.body.classList.remove('nav-open'); if(mb) mb.setAttribute('aria-expanded','false'); } });
  var pr = document.getElementById('progress');
  function upd(){ var h = document.documentElement; var max = h.scrollHeight - h.clientHeight; if(pr) pr.style.width = (max > 0 ? (window.scrollY/max)*100 : 0) + '%'; }
  window.addEventListener('scroll', upd, {passive:true}); upd();

  var bar = document.getElementById('lensBar');
  if(!bar) return;
  var lenses = {
    privacy:{label:'Privacy e DPO', q:'Siamo in grado di dimostrare oggi la conformità al GDPR?'},
    sicurezza:{label:'Sicurezza e ISO 27001', q:'I controlli di sicurezza funzionano davvero e lo possiamo provare?'},
    ai:{label:'AI Act', q:'Sappiamo quali strumenti AI usiamo e come sono classificati?'},
    contratti:{label:'Contratti e fornitori', q:'Le catene di responsabilità sono coperte dai contratti?'},
    board:{label:'Board', q:'Cosa deve decidere il vertice in questo trimestre?'},
    tutte:{label:'Registro completo', q:'Tutte le evidenze, senza filtri. È lo stesso registro visto da cinque lenti.'}
  };
  var st = {ok:{t:'In regola', c:'ok'}, att:{t:'Da verificare', c:'warn'}, scad:{t:'Scaduto', c:'bad'}};
  var items = [
    {t:'Registro dei trattamenti, area risorse umane', o:'Responsabile HR', v:'marzo 2026', s:'ok', l:['privacy'], n:'Aggiornato dopo il cambio del sistema paghe. Ogni voce ha un responsabile di funzione.'},
    {t:'DPA con il fornitore del sistema paghe', o:'Ufficio compliance', v:'gennaio 2026', s:'att', l:['privacy','contratti'], n:'Il fornitore ha comunicato un nuovo sub-responsabile. Serve l\'aggiornamento dell\'elenco e la verifica delle garanzie per il trasferimento dei dati.'},
    {t:'DPIA dell\'assistente AI per il servizio clienti', o:'Ufficio compliance', v:'febbraio 2026', s:'att', l:['privacy','ai'], n:'La bozza è pronta. Manca la valutazione sui dati personali che gli operatori incollano nelle conversazioni.'},
    {t:'Censimento degli strumenti AI', o:'Responsabili di funzione', v:'aprile 2026', s:'att', l:['ai','board'], n:'Quattordici strumenti dichiarati. Tre usi sono ancora da classificare rispetto all\'Allegato III dell\'AI Act.', d:'Decidere chi autorizza l\'adozione di nuovi strumenti AI nelle funzioni.'},
    {t:'Regola d\'uso interna degli strumenti AI', o:'Ufficio compliance', v:'aprile 2026', s:'ok', l:['ai'], n:'Una pagina, approvata dalla direzione e comunicata a tutte le funzioni.'},
    {t:'Dichiarazione di applicabilità ISO 27001', o:'Responsabile sicurezza', v:'marzo 2026', s:'ok', l:['sicurezza'], n:'Revisione annuale completata. Nessuna esclusione modificata rispetto all\'anno precedente.'},
    {t:'Test di ripristino dei backup', o:'Responsabile IT', v:'settembre 2025', s:'scad', l:['sicurezza','board'], n:'Ultima prova oltre dodici mesi fa. È la lacuna che un auditor troverebbe per prima.', d:'Approvare una finestra di fermo concordata per eseguire il test di ripristino.'},
    {t:'Questionario di sicurezza del cliente principale', o:'Ufficio compliance', v:'maggio 2026', s:'att', l:['sicurezza','contratti'], n:'Prima risposta preparata con l\'aiuto dell\'AI. Tre risposte sono da verificare con il responsabile IT prima dell\'invio.'},
    {t:'Clausola di responsabilità nel contratto con il fornitore cloud', o:'Ufficio compliance', v:'giugno 2026', s:'ok', l:['contratti'], n:'Il limite di responsabilità è coerente con quello concesso ai clienti a valle.'},
    {t:'Formazione annuale del personale', o:'Risorse umane', v:'maggio 2026', s:'att', l:['privacy','sicurezza','board'], n:'Ha completato la formazione l\'ottanta per cento del personale. Il resto va sollecitato.', d:'Rendere obbligatorio il completamento entro una data fissata.'},
    {t:'Registro degli incidenti e delle violazioni di dati', o:'Ufficio compliance', v:'luglio 2026', s:'ok', l:['privacy','sicurezza'], n:'Nessuna violazione notificabile nel trimestre. Due eventi minori registrati e chiusi.'},
    {t:'Catena dei sub-responsabili del fornitore di invio documenti', o:'Ufficio compliance', v:'novembre 2025', s:'scad', l:['contratti','privacy','board'], n:'Il fornitore usa un sub-responsabile non presente nel contratto. Serve la regolarizzazione prima del prossimo rinnovo.', d:'Autorizzare la rinegoziazione, o la sostituzione del fornitore, se non accetta le condizioni.'}
  ];
  var cur = 'privacy';
  Object.keys(lenses).forEach(function(k){
    var b = document.createElement('button'); b.type='button'; b.textContent = lenses[k].label; b.setAttribute('data-lens', k);
    b.addEventListener('click', function(){ cur = k; render(); }); bar.appendChild(b);
  });
  function render(){
    bar.querySelectorAll('button').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-lens') === cur ? 'true' : 'false'); });
    document.getElementById('lensQ').textContent = lenses[cur].q;
    var list = items.filter(function(i){ if(cur==='tutte') return true; if(cur==='board') return i.l.indexOf('board')>=0; return i.l.indexOf(cur)>=0; });
    var c = {ok:0, att:0, scad:0}; list.forEach(function(i){ c[i.s]++; });
    document.getElementById('kpis').innerHTML =
      '<div class="kpi"><b>'+list.length+'</b><span>Evidenze nella vista</span></div>'+
      '<div class="kpi ok"><b>'+c.ok+'</b><span>In regola</span></div>'+
      '<div class="kpi warn"><b>'+c.att+'</b><span>Da verificare</span></div>'+
      '<div class="kpi bad"><b>'+c.scad+'</b><span>Scadute</span></div>';
    var order = {scad:0, att:1, ok:2};
    var html = '';
    list.slice().sort(function(a,b){ return order[a.s]-order[b.s]; }).forEach(function(i){
      html += '<details><summary><span class="it">'+i.t+'<small>'+i.o+', ultima verifica '+i.v+'</small></span><span class="chip '+st[i.s].c+'">'+st[i.s].t+'</span></summary><div class="body"><p>'+i.n+'</p><p><b>Compare nelle viste:</b> '+i.l.map(function(x){return lenses[x].label;}).join(', ')+'</p></div></details>';
    });
    document.getElementById('reg').innerHTML = html;
    var dec = items.filter(function(i){ return i.d && i.l.indexOf('board')>=0; });
    var dEl = document.getElementById('decisions');
    if(cur==='board' && dec.length){
      var dh = '<h3>Decisioni richieste al vertice</h3><ol>'; dec.forEach(function(i){ dh += '<li>'+i.d+'</li>'; });
      dh += '</ol><p class="demo-note">Ogni decisione rimanda a un\'evidenza del registro. Per questo il report al board si costruisce dal registro, e non il contrario.</p>';
      dEl.innerHTML = dh;
    } else { dEl.innerHTML = ''; }
  }
  render();
})();

(function(){
  var links = document.querySelectorAll('.pb-side .toc2 a'); if(!links.length || !('IntersectionObserver' in window)) return;
  var map = {}; links.forEach(function(a){ map[a.getAttribute('href').slice(1)] = a; });
  var io = new IntersectionObserver(function(es){
    es.forEach(function(en){ if(en.isIntersecting){ links.forEach(function(a){ a.classList.remove('on'); }); var a = map[en.target.id]; if(a) a.classList.add('on'); } });
  }, {rootMargin:'-90px 0px -65% 0px'});
  Object.keys(map).forEach(function(id){ var el = document.getElementById(id); if(el) io.observe(el); });
})();

(function(){
  var tabs = document.querySelectorAll('.ftabs button'); if(!tabs.length) return;
  tabs.forEach(function(t){ t.addEventListener('click', function(){
    tabs.forEach(function(x){ x.setAttribute('aria-selected', x === t ? 'true' : 'false'); });
    document.querySelectorAll('.fpane').forEach(function(p){ p.classList.toggle('on', p.id === t.getAttribute('data-fpane')); });
  }); });
  function val(n){ var e = document.querySelector('input[name="'+n+'"]:checked'); return e ? e.value : ''; }
  function intake(){
    var area = val('farea'), trans = val('ftrans'), priv = val('fpriv'), chip, title, body = [];
    if(area === 'hr' || area === 'credit' || area === 'edu'){ chip = 'bad'; title = 'Da approfondire: possibile area ad alto rischio'; body.push('L\'area indicata può rientrare tra quelle ad alto rischio. Serve una valutazione approfondita che verifichi il caso concreto.'); }
    else if(trans === 'no'){ chip = 'warn'; title = 'Limitato: da sistemare la trasparenza'; body.push('Gli utenti dovrebbero sapere di interagire con un sistema di AI. Frida apre un\'azione per chi governa.'); }
    else { chip = 'ok'; title = 'Nessun elemento di rilievo emerso'; body.push('Dalle risposte non emergono aree particolari. Chi governa conferma o integra.'); }
    if(priv === 'yes'){ body.push('Poiché sono trattati dati personali, Frida suggerisce di coinvolgere chi si occupa di privacy.'); }
    document.getElementById('fres').innerHTML = '<span class="chip '+chip+'">Indicazione</span> <b>'+title+'</b><p style="margin:8px 0 0;color:var(--muted)">'+body.join(' ')+'</p>';
  }
  document.querySelectorAll('#fp2 input').forEach(function(i){ i.addEventListener('change', intake); });
  intake();
  var reg = document.getElementById('freg');
  if(reg){ reg.addEventListener('click', function(){
    var n = document.getElementById('fname').value.trim(), el = document.getElementById('fregres');
    el.style.display = 'block';
    if(!n){ el.innerHTML = '<b>Inserisci il nome del modello</b><p style="margin:8px 0 0;color:var(--muted)">Il nome serve per riconoscerlo nell\'inventario.</p>'; return; }
    var base = val('fbase');
    el.innerHTML = '<span class="chip">Registrato</span> <b>'+ n.replace(/[<>&]/g,'') +'</b><p style="margin:8px 0 0;color:var(--muted)">Aggiunto all\'inventario con livello di rischio "Da valutare" e supervisione umana "Da definire". ' + (base === 'gpai' ? 'Poiché si basa su un modello di terzi, Frida chiede la documentazione del fornitore.' : 'Frida chiede la documentazione tecnica interna.') + '</p>';
  }); }
})();

(function(){
  document.querySelectorAll('.video').forEach(function(v){
    var btn = v.querySelector('button'); if(!btn) return;
    btn.addEventListener('click', function(){
      var id = v.getAttribute('data-video-id');
      if(!id || id === 'ID_VIDEO'){ v.querySelector('.vmsg').hidden = false; return; }
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1';
      f.title = v.getAttribute('data-title') || 'Video';
      f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
      v.innerHTML = ''; v.appendChild(f);
    });
  });
  var fl = document.getElementById('artFilter'), list = document.getElementById('artList');
  if(fl && list){
    fl.querySelectorAll('button').forEach(function(b){
      b.addEventListener('click', function(){
        fl.querySelectorAll('button').forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        var c = b.getAttribute('data-cat');
        list.querySelectorAll('[data-item]').forEach(function(r){ r.hidden = !(c === 'all' || r.getAttribute('data-item') === c); });
      });
    });
  }
})();

# Sito di Francesco Foglio: bozza per revisione

Bozza completa del sito, per una prima validazione e per discutere composizione, SEO e struttura prima dello sviluppo su WordPress. Non è pubblicata e ogni pagina è marcata "noindex".

## Come aprirla
Apri `index.html` con un browser. Le pagine sono file statici collegati tra loro, senza server e senza richieste a servizi esterni. Il video dell'articolo di esempio si carica solo dopo un clic.

## Gerarchia decisa
Obiettivo del sito: posizionare l'autore come professionista competente e portare i visitatori ai corsi, che sono il prodotto passivo. La consulenza resta in secondo piano finché l'autore non è pronto a proporla. Ne derivano queste scelte:
1. **Un solo invito forte in home**: la lista d'attesa del corso introduttivo all'AI Act, con modulo email direttamente sotto il titolo. Il sito va online prima che il corso sia pronto, quindi il primo obiettivo è raccogliere contatti da avvisare all'apertura. Il pulsante in alto e le fasce di invito portano allo stesso modulo.
1bis. **Chi sono subito sotto il titolo**, per costruire autorevolezza prima del percorso.
2. **Menu ridotto**: Corsi, Articoli, Playbook, Chi sono.
3. **Formazione in azienda e consulenza**: pagina raggiungibile dai corsi e dal piè di pagina, senza "Prenota una call" in evidenza.
4. **Frida**: link discreto, nel piè di pagina, nel menu laterale del playbook, nella panoramica del playbook e in Chi sono. Fuori dal menu principale.
5. **Corsi a gradini**: introduzione generale (circa mezz'ora) per tutti, poi pacchetti per funzione (Compliance, poi eventualmente Marketing e comunicazione, Risorse umane), da testare prima di produrli. La formazione in presenza è un valore aggiunto dei corsi.
6. **Possibile sviluppo futuro**: spostare i corsi su un secondo sito e dedicare questo dominio a competenza e consulenza.

## Struttura del sito
| Sezione | File | Funzione |
|---|---|---|
| Home | index.html | Un solo invito (corso introduttivo), percorso a gradini, articoli, playbook, chi sono |
| Corsi | corsi.html | Catalogo a gradini e formazione in azienda |
| | corso-introduzione-ai-act.html | Primo corso: circa mezz'ora, programma, acquisto, lista d'attesa |
| | corso-governance-ai-compliance.html | Pacchetto Compliance (nove moduli, circa sei ore) |
| Articoli | articoli.html, articolo-cosa-non-delegare-ai.html | Elenco con filtro e un articolo di esempio con video |
| Playbook | playbook.html e capitoli | Contenuto gratuito di competenza: 4 capitoli, demo, risorse |
| Chi sono | chi-sono.html | Presentazione e metodo |
| In azienda | consulenza.html | Formazione in azienda e consulenza |
| Frida | frida.html | Pagina prodotto dello strumento |

## Cosa chiediamo di rivedere
1. **Composizione e gerarchia.** Il percorso del lettore verso il corso introduttivo, il ruolo del playbook e degli articoli come attrazione, il peso dato a consulenza e a Frida.
2. **SEO.** Titoli e descrizioni, URL, un solo H1 per pagina, breadcrumb, dati strutturati, collegamenti interni, parole chiave da presidiare per i due pubblici (professionista di PMI e professionista della compliance).
3. **Contenuto e prove di fiducia.** Cosa può essere dichiarato oggi e cosa no.
4. **Funnel.** Lista d'attesa, acquisto, bivio finale del corso (approfondire o contattare).
5. **Accessibilità e prestazioni.**

## Scelte tecniche già fatte
- Nessun font o script esterno. Su WordPress i caratteri andranno ospitati in locale.
- Menu laterale fisso nelle pagine del playbook, con indice a comparsa su mobile.
- Tema chiaro e scuro, con preferenza salvata nel browser.
- Il dominio nei tag `canonical` e nei dati strutturati (`www.francescofoglio.it`) è un segnaposto.

## Lista d'attesa
I moduli sono presenti in home (in alto e in fondo), nella pagina Corsi, nel corso introduttivo (in alto e in fondo) e nel pacchetto Compliance. Nella bozza sono dimostrativi e non inviano né salvano nulla. Su WordPress vanno sostituiti con un plugin di newsletter, con consenso esplicito, informativa privacy, conferma via email e un campo "interesse" (generale, intro, compliance).

## Segnaposto ancora aperti
- Foto nella sezione Chi sono della home. I testi di Chi sono (home, pagina dedicata, schede dei corsi) sono ricavati dal CV dell'autore, senza nomi di società e di clienti né recapiti personali: da confermare prima della pubblicazione.
- Strumento e impostazioni della lista d'attesa (doppio consenso, informativa, nomina del fornitore a responsabile del trattamento).
- Prezzo di ingresso del corso introduttivo (anche gratuito per costruire la lista), piattaforma di vendita e di erogazione, licenze per organizzazioni, recesso per i consumatori, durata dell'accesso.
- Contenuti e calendario dell'AI Act nel corso introduttivo: da validare sul testo ufficiale in vigore.
- Natura dell'attestato: di completamento, non accreditato.
- Pacchetti Marketing e comunicazione e Risorse umane: solo se la domanda lo conferma.
- Articoli reali al posto dei titoli di lavoro, con categorie e video.
- Biografia di "Chi sono", link di contatto e di profilo.
- Moduli newsletter e lista d'attesa, calendario per la call, informative privacy e cookie.
- Perimetro della consulenza e della formazione in azienda, da validare con un professionista.
- Frida: titolare, validazione, sottotitolo, ricerca di anteriorità sul nome.
- Casi studio: solo con consenso scritto. Caso del capitolo 4 da confermare come anonimizzato.
- Immagine per le anteprime social e versione in inglese (tag `hreflang`).
- Prima della pubblicazione: rimuovere `noindex` e sostituire `robots.txt`.

## Domande per il consulente
- Il corso introduttivo come unico invito in home è la scelta migliore per i due pubblici?
- Quali ricerche conviene presidiare per portare traffico verso il corso introduttivo?
- Gli URL sono adeguati per WordPress o servono percorsi diversi?
- Quando ha senso separare i corsi su un secondo sito?
- Come collegare gli articoli al corso senza appesantire la lettura?

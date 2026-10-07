# Sito di Francesco Foglio: bozza per revisione

Bozza completa del sito, per una prima validazione e per discutere composizione, SEO e struttura prima dello sviluppo su WordPress. Non è pubblicata e ogni pagina è marcata "noindex".

## Come aprirla
Apri `index.html` con un browser. Le pagine sono file statici collegati tra loro, senza server e senza richieste a servizi esterni. Il video dell'articolo di esempio si carica solo dopo un clic.

## Struttura del sito
Modello di riferimento per l'impostazione: iainazienda.it (ingresso per tipo di pubblico, percorso, servizi, corso con acquisto, domande frequenti).

| Sezione | File | Funzione |
|---|---|---|
| Home | index.html | Ingresso per pubblico (organizzazione, professionista, lettore), percorso comprendere / applicare / mantenere, ultimi articoli, corso, consulenza |
| Articoli | articoli.html | Elenco con filtro per categoria (AI Act, Governance, GDPR, Formazione) |
| | articolo-cosa-non-delegare-ai.html | Esempio completo di articolo con video, fonti e passo successivo |
| Playbook | playbook.html e capitoli | Contenuto di punta, gratuito: 4 capitoli, demo e risorse |
| Consulenza | consulenza.html | Servizi come percorso, modo di lavorare, domande frequenti, contatto |
| Corsi | corsi.html | Catalogo e formule di acquisto (professionisti e organizzazioni) |
| | corso-governance-ai-compliance.html | Scheda del corso: esiti, programma, modalità, acquisto, lista d'attesa |
| Chi sono | chi-sono.html | Presentazione, metodo, collegamenti ai servizi |

## Convenzioni editoriali previste
- Un articolo può avere un video. Su WordPress: formato articolo "Video" e un campo con il codice del video. Il video appare in cima e si carica solo al clic (YouTube nelle impostazioni senza cookie).
- Ogni articolo finisce con un passo successivo coerente con il tema: capitolo del playbook, corso o consulenza.
- Le fonti normative stanno in una sezione "Fonti" alla fine di ogni articolo.

## Cosa chiediamo di rivedere
1. **Composizione.** Percorso del lettore, ruolo del playbook rispetto agli articoli, posizione di corsi e consulenza, titoli e lunghezze.
2. **SEO.** Titoli e descrizioni, URL, un solo H1 per pagina, breadcrumb, dati strutturati (WebSite, Person, Article, Course, Service, BreadcrumbList), collegamenti interni, parole chiave da presidiare, struttura delle categorie.
3. **Contenuto e prove di fiducia.** Cosa può essere dichiarato oggi e cosa no (nessun numero di clienti, nessuna testimonianza inventata).
4. **Funnel e conversione.** Punti di contatto, lista d'attesa del corso, acquisto, call conoscitiva.
5. **Accessibilità e prestazioni.**

## Scelte tecniche già fatte
- Nessun font o script esterno. Su WordPress i caratteri andranno ospitati in locale.
- Tema chiaro e scuro, con preferenza salvata nel browser.
- Il dominio nei tag `canonical` e nei dati strutturati (`www.francescofoglio.it`) è un segnaposto.

## Segnaposto ancora aperti
- Prezzi, durate e perimetro dei servizi di consulenza, e confini dell'incarico (da validare con un professionista).
- Piattaforma di vendita e di erogazione del corso, listino, licenze per organizzazioni, recesso per i consumatori, durata dell'accesso.
- Natura dell'attestato del corso: di completamento, non accreditato.
- Articoli reali al posto dei titoli di lavoro, con categorie e video.
- Biografia della pagina "Chi sono", link di contatto e di profilo.
- Moduli newsletter e lista d'attesa, calendario per la call, informative privacy e cookie.
- Casi studio: solo con consenso scritto. Caso del capitolo 4: da confermare come anonimizzato e pubblicabile.
- Immagine per le anteprime social.
- Versione in inglese in un secondo momento: tag `hreflang` e strategia di URL.
- Prima della pubblicazione: rimuovere `noindex` e sostituire `robots.txt`.

## Domande per il consulente
- La struttura a pagine separate e le categorie degli articoli sono adatte alla strategia di contenuti?
- Quali ricerche conviene presidiare con i titoli attuali?
- Gli URL sono adeguati per WordPress o servono percorsi diversi (per esempio `/playbook/capitolo-1`)?
- Come conviene distinguere nei risultati di ricerca playbook (gratuito), corso (a pagamento) e consulenza?

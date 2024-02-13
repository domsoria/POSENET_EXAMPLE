# POSENET_EXAMPLE
Il codice presentato è un esempio di come utilizzare TensorFlow.js e PoseNet per il riconoscimento di pose umane in tempo reale attraverso la webcam di un computer. Questo tipo di tecnologia trova applicazioni in numerosi campi, dalla realtà aumentata al monitoraggio degli esercizi fisici, fino all'interazione uomo-macchina in modi innovativi. L'articolo segue il flusso del codice per spiegare come viene configurato e utilizzato per catturare e analizzare le pose umane.

### Introduzione a TensorFlow.js e PoseNet

TensorFlow.js è una libreria JavaScript per l'addestramento e l'esecuzione di modelli di machine learning direttamente nel browser o in Node.js. PoseNet è un modello di visione artificiale che può stimare la posizione del corpo umano in immagini e video. Combinando questi strumenti, è possibile sviluppare applicazioni web interattive che rispondono in tempo reale ai movimenti del corpo umano.

### Struttura HTML e Caricamento delle Librerie

Il codice inizia con la definizione della struttura HTML della pagina, che include un elemento `<video>` per visualizzare il feed della webcam e un elemento `<canvas>` per disegnare le pose riconosciute. Viene poi effettuato il caricamento delle librerie necessarie: TensorFlow.js, PoseNet e jQuery.

### CSS per la Sovrapposizione di Canvas e Video

Il CSS definisce lo stile degli elementi per sovrapporre correttamente il canvas al video, in modo che le pose riconosciute possano essere disegnate direttamente sopra l'immagine della persona.

### JavaScript per la Logica di Riconoscimento Pose

Il codice JavaScript gestisce l'interazione con la webcam e l'analisi delle pose in tempo reale. Viene definita la funzione `startVideo` per avviare il feed video dalla webcam dell'utente. Una volta ottenuto l'accesso alla webcam, il feed viene visualizzato nell'elemento `<video>` e, dopo un breve ritardo, viene avviata l'analisi della pose.

La funzione `getSinglePose` carica il modello PoseNet e lo utilizza per stimare la posizione delle parti del corpo in ogni frame catturato dalla webcam. Queste informazioni sono poi visualizzate nella pagina web, aggiornando l'elemento con id `poseElementId` con le coordinate delle parti del corpo riconosciute.

### Flusso del Programma

1. **Caricamento delle Librerie**: All'apertura della pagina, le librerie necessarie sono caricate nel browser.
2. **Avvio del Video**: Dopo un breve ritardo, viene avviato il feed video dalla webcam.
3. **Riconoscimento delle Pose**: Il modello PoseNet è caricato e utilizzato per analizzare il feed video, stimando la posizione delle parti del corpo in tempo reale.
4. **Visualizzazione dei Risultati**: Le coordinate delle parti del corpo riconosciute sono visualizzate in pagina, permettendo all'utente di vedere in tempo reale la posizione riconosciuta di parti del corpo come mani, piedi, ecc.

### ISTRUZIONI OPERATIVE
Per eseguite il software in modo semplice, lanciare da riga di comando nella dir del progetto 

### python3 -m http.server

attendere l'inizializzazione del server web

aprire il browser e andare al link http://localhost:8000



### PER ULTERIORI INFORMAZIONI
https://www.domsoria.com/2019/10/come-usare-una-posnet-con-tensorflow-js-per-valutare-il-movimento-del-corpo/

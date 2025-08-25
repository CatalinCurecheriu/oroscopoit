import { type NextRequest, NextResponse } from "next/server"

const horoscopeData = {
  ariete: {
    name: "Ariete",
    icon: "♈",
    giornaliero: {
      text: "L'energia marziana ti accompagna in questa giornata dinamica. La tua natura impulsiva trova il giusto equilibrio tra azione e riflessione, permettendoti di cogliere opportunità che altri potrebbero lasciarsi sfuggire.",
      sections: [
        {
          title: "Amore",
          content:
            "Passione e spontaneità caratterizzano i tuoi rapporti oggi. Se sei single, un incontro inaspettato potrebbe accendere scintille. In coppia, è il momento di sorprendere il partner con gesti audaci.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua leadership naturale emerge prepotentemente. Progetti ambiziosi prendono forma e le tue idee innovative vengono finalmente riconosciute. Attenzione alle spese impulsive.",
        },
        {
          title: "Benessere",
          content:
            "Energia alle stelle! Il tuo corpo richiede movimento e attività fisica. Perfetto per iniziare una nuova routine di allenamento o praticare sport all'aria aperta.",
        },
      ],
      extras: {
        lucky_numbers: [3, 17, 29],
        lucky_color: "rosso fuoco",
        mood: "energico",
        best_time: "mattina presto",
        keywords: ["azione", "coraggio", "iniziativa", "passione", "leadership"],
      },
    },
    settimanale: {
      text: "Una settimana di grande fermento ti attende, caro Ariete. Le stelle ti invitano a canalizzare la tua energia in progetti concreti, mentre Marte ti dona la forza necessaria per superare ogni ostacolo.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana intensa sul fronte sentimentale. Martedì e giovedì sono giorni particolarmente favorevoli per dichiarazioni d'amore e momenti di intimità profonda.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Opportunità di crescita professionale si presentano a metà settimana. Un progetto che hai a cuore potrebbe ricevere il via libera definitivo. Investimenti favoriti.",
        },
        {
          title: "Benessere",
          content:
            "Mantieni un ritmo sostenibile. La tua energia è alta ma non illimitata. Dedica tempo al riposo, soprattutto nel weekend.",
        },
      ],
      extras: {
        lucky_numbers: [7, 14, 21],
        lucky_color: "arancione",
        mood: "determinato",
        best_time: "pomeriggio",
        keywords: ["progresso", "determinazione", "crescita", "opportunità", "equilibrio"],
      },
    },
    mensile: {
      text: "Agosto si presenta come un mese di trasformazione per l'Ariete. Le energie cosmiche ti spingono verso nuovi orizzonti, sia personali che professionali, richiedendo coraggio e visione lungimirante.",
      sections: [
        {
          title: "Amore",
          content:
            "Il mese porta cambiamenti significativi nella sfera affettiva. Relazioni che sembravano stabili potrebbero evolversi, mentre nuovi incontri promettono sviluppi interessanti.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo di svolta professionale. Potresti ricevere proposte allettanti o decidere di intraprendere una strada completamente nuova. Le finanze migliorano gradualmente.",
        },
        {
          title: "Benessere",
          content:
            "Agosto richiede attenzione alla salute. Stress e tensioni potrebbero accumularsi. Importante trovare il giusto equilibrio tra attività e relax.",
        },
      ],
      extras: {
        lucky_numbers: [8, 16, 24],
        lucky_color: "oro",
        mood: "trasformativo",
        best_time: "sera",
        keywords: ["cambiamento", "evoluzione", "nuovi inizi", "coraggio", "visione"],
      },
    },
    generale: {
      text: "L'Ariete è il pioniere dello zodiaco, sempre pronto a guidare e ispirare gli altri. La tua natura focosa e determinata ti porta naturalmente verso posizioni di leadership, dove puoi esprimere al meglio il tuo potenziale.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore sei passionale e diretto. Non ami i giochi di seduzione complessi, preferisci la sincerità e l'immediatezza. La tua spontaneità è il tuo fascino più grande.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Nato per comandare, eccelli in ruoli che richiedono iniziativa e decisioni rapide. L'imprenditorialità è nel tuo DNA, così come la capacità di motivare i team.",
        },
        {
          title: "Benessere",
          content:
            "Il movimento è vita per te. Sport competitivi e attività che sfidano i tuoi limiti sono ideali. Attenzione a non esagerare: anche i guerrieri hanno bisogno di riposo.",
        },
      ],
      extras: {
        lucky_numbers: [1, 9, 18],
        lucky_color: "rosso",
        mood: "pionieristico",
        best_time: "alba",
        keywords: ["leadership", "pioniere", "energia", "coraggio", "indipendenza"],
      },
    },
  },
  toro: {
    name: "Toro",
    icon: "♉",
    giornaliero: {
      text: "La stabilità venusiana ti dona serenità e concretezza. Oggi è il momento perfetto per consolidare i tuoi progetti e goderti i piaceri semplici della vita con la tua proverbiale pazienza.",
      sections: [
        {
          title: "Amore",
          content:
            "Sensualità e tenerezza guidano i tuoi sentimenti. È una giornata ideale per coccolare il partner o per aprire il cuore a nuove conoscenze basate su valori autentici.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua perseveranza viene premiata. Investimenti a lungo termine mostrano i primi frutti. Evita decisioni affrettate, la tua forza sta nella riflessione ponderata.",
        },
        {
          title: "Benessere",
          content:
            "Cerca il contatto con la natura. Una passeggiata all'aria aperta o attività rilassanti come yoga e meditazione ti ricaricheranno completamente.",
        },
      ],
      extras: {
        lucky_numbers: [6, 15, 24],
        lucky_color: "verde smeraldo",
        mood: "sereno",
        best_time: "pomeriggio",
        keywords: ["stabilità", "pazienza", "sensualità", "natura", "concretezza"],
      },
    },
    settimanale: {
      text: "Una settimana di consolidamento ti attende, caro Toro. Le energie terrestri ti sostengono nel portare a termine progetti importanti con la tua caratteristica determinazione.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di grande armonia sentimentale. Mercoledì e venerdì sono particolarmente favorevoli per momenti romantici e decisioni importanti in coppia.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "I tuoi sforzi costanti iniziano a dare frutti concreti. Un progetto a lungo termine potrebbe ricevere riconoscimenti importanti. Finanze in crescita.",
        },
        {
          title: "Benessere",
          content:
            "Settimana ideale per prenderti cura del tuo corpo. Massaggi, trattamenti estetici e attività rilassanti sono fortemente consigliati.",
        },
      ],
      extras: {
        lucky_numbers: [2, 11, 20],
        lucky_color: "rosa antico",
        mood: "appagato",
        best_time: "sera",
        keywords: ["consolidamento", "armonia", "crescita", "cura", "riconoscimento"],
      },
    },
    mensile: {
      text: "Agosto porta stabilità e crescita graduale per il Toro. Le energie cosmiche favoriscono investimenti a lungo termine e il rafforzamento delle relazioni più importanti.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di approfondimento emotivo. Le relazioni esistenti si consolidano, mentre i single potrebbero incontrare qualcuno di speciale attraverso amicizie comuni.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo favorevole per investimenti immobiliari e progetti a lungo termine. La tua pazienza viene premiata con opportunità concrete e durature.",
        },
        {
          title: "Benessere",
          content:
            "Agosto ti invita a rallentare e goderti i piaceri della vita. Attenzione a non esagerare con il cibo, mantieni un equilibrio sano.",
        },
      ],
      extras: {
        lucky_numbers: [4, 13, 22],
        lucky_color: "terra di Siena",
        mood: "stabile",
        best_time: "tramonto",
        keywords: ["crescita", "investimenti", "consolidamento", "piacere", "equilibrio"],
      },
    },
    generale: {
      text: "Il Toro rappresenta la forza tranquilla dello zodiaco. La tua natura paziente e determinata ti permette di costruire basi solide in ogni aspetto della vita, apprezzando la bellezza e i piaceri autentici.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore sei fedele e sensuale. Cerchi stabilità e sicurezza emotiva, offrendo in cambio dedizione totale e affetto sincero. La tua sensualità è magnetica.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in lavori che richiedono pazienza e precisione. Hai un talento naturale per gli investimenti e la gestione delle risorse. La costanza è la tua arma vincente.",
        },
        {
          title: "Benessere",
          content:
            "Ami i piaceri della vita ma devi fare attenzione agli eccessi. Attività all'aria aperta e contatto con la natura sono essenziali per il tuo equilibrio.",
        },
      ],
      extras: {
        lucky_numbers: [2, 6, 14],
        lucky_color: "verde",
        mood: "pacifico",
        best_time: "alba dorata",
        keywords: ["stabilità", "sensualità", "pazienza", "natura", "fedeltà"],
      },
    },
  },
  gemelli: {
    name: "Gemelli",
    icon: "♊",
    giornaliero: {
      text: "La vivacità mercuriale illumina la tua giornata di curiosità e comunicazione. La tua mente agile trova connessioni inaspettate, aprendo porte a nuove possibilità e incontri stimolanti.",
      sections: [
        {
          title: "Amore",
          content:
            "Fascino e dialogo sono le tue armi di seduzione oggi. Conversazioni brillanti potrebbero trasformarsi in qualcosa di più profondo. In coppia, sorprendi con la tua creatività.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua versatilità è richiestissima. Progetti che richiedono comunicazione e networking sono favoriti. Attenzione a non disperdere le energie su troppi fronti.",
        },
        {
          title: "Benessere",
          content:
            "La tua mente ha bisogno di stimoli costanti. Letture interessanti, podcast o conversazioni stimolanti ti ricaricano più di qualsiasi attività fisica.",
        },
      ],
      extras: {
        lucky_numbers: [5, 14, 23],
        lucky_color: "giallo brillante",
        mood: "curioso",
        best_time: "metà mattina",
        keywords: ["comunicazione", "versatilità", "curiosità", "connessioni", "creatività"],
      },
    },
    settimanale: {
      text: "Una settimana ricca di stimoli e opportunità ti attende, caro Gemelli. La tua natura comunicativa trova terreno fertile in nuovi progetti e collaborazioni interessanti.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana dinamica sul fronte sentimentale. Lunedì e mercoledì favoriscono nuovi incontri, mentre il weekend è perfetto per approfondire relazioni esistenti.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua capacità di adattamento apre nuove strade professionali. Collaborazioni e partnership sono favorite. Entrate extra da attività creative o comunicative.",
        },
        {
          title: "Benessere",
          content:
            "Settimana mentalmente stimolante ma attento a non sovraccaricarti. Alternare momenti di attività intensa a pause rigeneranti è essenziale.",
        },
      ],
      extras: {
        lucky_numbers: [3, 12, 21],
        lucky_color: "azzurro cielo",
        mood: "dinamico",
        best_time: "mattina",
        keywords: ["stimoli", "collaborazioni", "adattamento", "creatività", "equilibrio"],
      },
    },
    mensile: {
      text: "Agosto si presenta come un mese di grande fermento intellettuale per i Gemelli. Le stelle favoriscono comunicazione, apprendimento e connessioni che potrebbero cambiare il tuo futuro.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di incontri significativi e conversazioni profonde. La tua intelligenza e il tuo humor attirano persone interessanti. Relazioni basate sulla complicità mentale.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo eccellente per progetti di comunicazione, scrittura o insegnamento. La tua versatilità apre porte inaspettate. Investimenti in formazione sono favoriti.",
        },
        {
          title: "Benessere",
          content:
            "Agosto richiede equilibrio tra stimolazione mentale e riposo. Viaggi brevi o cambi di ambiente ti rigenerano completamente.",
        },
      ],
      extras: {
        lucky_numbers: [7, 16, 25],
        lucky_color: "argento",
        mood: "intellettuale",
        best_time: "pomeriggio",
        keywords: ["comunicazione", "apprendimento", "versatilità", "connessioni", "equilibrio"],
      },
    },
    generale: {
      text: "I Gemelli rappresentano la curiosità e l'adattabilità dello zodiaco. La tua mente vivace e la capacità di comunicare ti rendono un ponte naturale tra persone e idee diverse.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore cerchi complicità mentale prima di tutto. Hai bisogno di un partner che sappia stimolare la tua intelligenza e condividere le tue passioni intellettuali.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in professioni che richiedono comunicazione, creatività e adattabilità. Giornalismo, insegnamento, vendite e marketing sono campi naturali per te.",
        },
        {
          title: "Benessere",
          content:
            "La tua salute dipende dall'equilibrio mentale. Hai bisogno di stimoli costanti ma anche di momenti di quiete per elaborare tutte le informazioni che assorbi.",
        },
      ],
      extras: {
        lucky_numbers: [3, 5, 12],
        lucky_color: "giallo",
        mood: "versatile",
        best_time: "mezzogiorno",
        keywords: ["curiosità", "comunicazione", "adattabilità", "intelligenza", "connessioni"],
      },
    },
  },
  cancro: {
    name: "Cancro",
    icon: "♋",
    giornaliero: {
      text: "L'energia lunare avvolge la tua giornata di sensibilità e intuizione. Le tue emozioni sono una bussola preziosa che ti guida verso scelte autentiche e connessioni profonde.",
      sections: [
        {
          title: "Amore",
          content:
            "La tua natura protettiva e accogliente attira chi cerca sicurezza emotiva. È una giornata perfetta per coccolare chi ami e creare momenti di intimità autentica.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua intuizione ti guida verso decisioni sagge. Progetti legati alla casa, famiglia o cura degli altri sono particolarmente favoriti. Prudenza negli investimenti.",
        },
        {
          title: "Benessere",
          content:
            "Ascolta i segnali del tuo corpo e delle tue emozioni. Un bagno rilassante o tempo trascorso in casa ti ricaricheranno completamente.",
        },
      ],
      extras: {
        lucky_numbers: [2, 11, 29],
        lucky_color: "argento lunare",
        mood: "protettivo",
        best_time: "sera",
        keywords: ["intuizione", "protezione", "emozioni", "casa", "cura"],
      },
    },
    settimanale: {
      text: "Una settimana di profonda connessione emotiva ti attende, caro Cancro. Le energie lunari ti sostengono nel creare armonia tra vita privata e responsabilità esterne.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di grande intimità emotiva. Martedì e giovedì sono ideali per conversazioni profonde e momenti di condivisione autentica con chi ami.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua capacità di prenderti cura degli altri apre opportunità nel settore dei servizi. Progetti familiari o domestici ricevono sostegno finanziario.",
        },
        {
          title: "Benessere",
          content:
            "Settimana ideale per dedicarti alla casa e alla famiglia. Cucinare, decorare o semplicemente stare con i tuoi cari ti dona grande serenità.",
        },
      ],
      extras: {
        lucky_numbers: [4, 13, 22],
        lucky_color: "blu notte",
        mood: "accogliente",
        best_time: "crepuscolo",
        keywords: ["intimità", "famiglia", "cura", "armonia", "serenità"],
      },
    },
    mensile: {
      text: "Agosto porta focus sulla famiglia e sulla casa per il Cancro. Le energie cosmiche favoriscono il rafforzamento dei legami affettivi e la creazione di un ambiente sicuro e accogliente.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di approfondimento dei legami familiari e sentimentali. Potresti prendere decisioni importanti riguardo alla convivenza o al matrimonio.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo favorevole per investimenti immobiliari o miglioramenti domestici. La tua intuizione negli affari si rivela particolarmente acuta questo mese.",
        },
        {
          title: "Benessere",
          content:
            "Agosto ti invita a creare un santuario personale. Dedica tempo alla meditazione e alle attività che nutrono la tua anima.",
        },
      ],
      extras: {
        lucky_numbers: [6, 15, 24],
        lucky_color: "perla",
        mood: "riflessivo",
        best_time: "luna piena",
        keywords: ["famiglia", "casa", "intuizione", "sicurezza", "nutrimento"],
      },
    },
    generale: {
      text: "Il Cancro rappresenta la protezione e il nutrimento dello zodiaco. La tua natura emotiva e intuitiva ti rende un rifugio sicuro per chi ti circonda, capace di creare legami profondi e duraturi.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore sei devoto e protettivo. Cerchi sicurezza emotiva e offri in cambio un amore incondizionato. La famiglia è al centro del tuo mondo affettivo.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in professioni di cura: medicina, insegnamento, servizi sociali. Hai un talento naturale per gestire le risorse familiari e creare sicurezza economica.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo benessere dipende dall'equilibrio emotivo. Hai bisogno di un ambiente sicuro e di tempo per elaborare le tue emozioni profonde.",
        },
      ],
      extras: {
        lucky_numbers: [2, 7, 16],
        lucky_color: "bianco lunare",
        mood: "nutritivo",
        best_time: "notte",
        keywords: ["protezione", "intuizione", "famiglia", "emozioni", "sicurezza"],
      },
    },
  },
  leone: {
    name: "Leone",
    icon: "♌",
    giornaliero: {
      text: "Il fuoco solare illumina la tua giornata di creatività e magnetismo. La tua presenza regale attira attenzione e opportunità, mentre il tuo cuore generoso ispira chi ti circonda.",
      sections: [
        {
          title: "Amore",
          content:
            "Il tuo carisma è irresistibile oggi. Se sei single, potresti essere al centro dell'attenzione in modo molto piacevole. In coppia, è il momento di organizzare qualcosa di speciale.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua creatività e leadership sono riconosciute. Progetti artistici o che ti mettono in primo piano sono particolarmente favoriti. Generosità nelle spese per gli altri.",
        },
        {
          title: "Benessere",
          content:
            "Hai bisogno di brillare e sentirti apprezzato. Attività che ti permettono di esprimerti creativamente ti ricaricano di energia vitale.",
        },
      ],
      extras: {
        lucky_numbers: [1, 19, 28],
        lucky_color: "oro regale",
        mood: "magnetico",
        best_time: "mezzogiorno",
        keywords: ["creatività", "leadership", "magnetismo", "generosità", "espressione"],
      },
    },
    settimanale: {
      text: "Una settimana di grande visibilità ti attende, caro Leone. Le energie solari amplificano il tuo carisma naturale e aprono porte a riconoscimenti meritati.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di grande fascino personale. Domenica e martedì sono particolarmente favorevoli per conquiste amorose e momenti romantici memorabili.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua creatività viene finalmente riconosciuta. Potresti ricevere proposte interessanti o vedere i tuoi progetti artistici prendere vita. Entrate da talenti creativi.",
        },
        {
          title: "Benessere",
          content:
            "Settimana energica ma attento a non bruciare tutte le energie in una volta. Alternare momenti di gloria a pause rigeneranti è importante.",
        },
      ],
      extras: {
        lucky_numbers: [5, 14, 23],
        lucky_color: "ambra",
        mood: "raggiante",
        best_time: "pomeriggio soleggiato",
        keywords: ["visibilità", "riconoscimento", "creatività", "fascino", "energia"],
      },
    },
    mensile: {
      text: "Agosto è il tuo mese, caro Leone! Il Sole nel tuo segno amplifica tutte le tue qualità migliori, portando successo, riconoscimenti e momenti di pura gioia creativa.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di grande passione e romanticismo. Il tuo fascino è al massimo e potresti vivere una storia d'amore degna di un film. Relazioni esistenti si rinnovano.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo eccellente per lanciare progetti creativi o assumere ruoli di leadership. La tua visione artistica trova finalmente il riconoscimento che merita.",
        },
        {
          title: "Benessere",
          content:
            "Agosto ti ricarica di energia vitale. È il momento perfetto per prenderti cura del tuo aspetto e investire in tutto ciò che ti fa sentire regale.",
        },
      ],
      extras: {
        lucky_numbers: [8, 17, 26],
        lucky_color: "oro puro",
        mood: "trionfante",
        best_time: "alba dorata",
        keywords: ["successo", "passione", "creatività", "leadership", "riconoscimento"],
      },
    },
    generale: {
      text: "Il Leone rappresenta la creatività e la regalità dello zodiaco. La tua natura generosa e il carisma naturale ti rendono un leader nato, capace di ispirare e illuminare la vita degli altri.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore sei passionale e generoso. Ami essere corteggiato e coccolato, ma ricambi con dedizione totale. Il romanticismo e i grandi gesti sono il tuo linguaggio d'amore.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in professioni creative o di leadership. Teatro, arte, management, politica sono campi naturali. Hai bisogno di essere riconosciuto per i tuoi talenti.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo benessere dipende dal sentirsi apprezzato e amato. Hai bisogno di esprimere la tua creatività e di ricevere attenzioni per mantenere alta l'autostima.",
        },
      ],
      extras: {
        lucky_numbers: [1, 8, 19],
        lucky_color: "oro",
        mood: "regale",
        best_time: "pieno sole",
        keywords: ["creatività", "leadership", "generosità", "carisma", "passione"],
      },
    },
  },
  vergine: {
    name: "Vergine",
    icon: "♍",
    giornaliero: {
      text: "La precisione mercuriale guida la tua giornata verso l'eccellenza. La tua attenzione ai dettagli e il desiderio di miglioramento continuo aprono porte a risultati concreti e duraturi.",
      sections: [
        {
          title: "Amore",
          content:
            "La tua dedizione e premura non passano inosservate. È una giornata ideale per dimostrare il tuo amore attraverso gesti concreti e attenzioni pratiche.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua precisione e affidabilità sono molto apprezzate. Progetti che richiedono analisi dettagliata o organizzazione sono favoriti. Attenzione alle spese superflue.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo corpo ha bisogno di routine sane e regolari. È il momento perfetto per iniziare un nuovo regime alimentare o di esercizio fisico.",
        },
      ],
      extras: {
        lucky_numbers: [6, 15, 27],
        lucky_color: "verde salvia",
        mood: "metodico",
        best_time: "prima mattina",
        keywords: ["precisione", "dedizione", "miglioramento", "organizzazione", "salute"],
      },
    },
    settimanale: {
      text: "Una settimana di grande produttività ti attende, cara Vergine. Le energie terrestri sostengono i tuoi sforzi di organizzazione e perfezionamento in ogni area della vita.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di gesti concreti d'amore. Mercoledì e venerdì sono ideali per dimostrare i tuoi sentimenti attraverso azioni pratiche e premure quotidiane.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua efficienza viene riconosciuta e premiata. Progetti di lungo termine mostrano progressi significativi. Periodo favorevole per investimenti sicuri.",
        },
        {
          title: "Benessere",
          content:
            "Settimana perfetta per stabilire nuove routine salutari. La tua disciplina naturale ti aiuta a mantenere abitudini benefiche per corpo e mente.",
        },
      ],
      extras: {
        lucky_numbers: [3, 12, 21],
        lucky_color: "beige naturale",
        mood: "efficiente",
        best_time: "mattino",
        keywords: ["produttività", "efficienza", "routine", "progresso", "disciplina"],
      },
    },
    mensile: {
      text: "Agosto porta focus sull'organizzazione e il miglioramento personale per la Vergine. Le stelle favoriscono progetti di lungo termine e l'implementazione di sistemi più efficienti.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di consolidamento delle relazioni attraverso gesti concreti. La tua capacità di prenderti cura degli altri rafforza i legami più importanti.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo eccellente per riorganizzare le finanze e implementare sistemi più efficienti. I tuoi sforzi metodici iniziano a dare frutti tangibili.",
        },
        {
          title: "Benessere",
          content:
            "Agosto è ideale per un check-up completo della tua salute. Investire in prevenzione e benessere a lungo termine è particolarmente favorito.",
        },
      ],
      extras: {
        lucky_numbers: [9, 18, 27],
        lucky_color: "terra",
        mood: "organizzato",
        best_time: "mattino presto",
        keywords: ["organizzazione", "miglioramento", "efficienza", "salute", "sistemi"],
      },
    },
    generale: {
      text: "La Vergine rappresenta la perfezione e il servizio dello zodiaco. La tua natura analitica e il desiderio di miglioramento continuo ti rendono indispensabile in ogni contesto lavorativo e personale.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore sei devota e premurosa. Esprimi i tuoi sentimenti attraverso gesti concreti e attenzioni pratiche. Cerchi un partner affidabile e sincero come te.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in professioni che richiedono precisione e analisi: medicina, ricerca, amministrazione, editing. Sei un pilastro di affidabilità in ogni team.",
        },
        {
          title: "Benessere",
          content:
            "La tua salute beneficia di routine regolari e attenzione ai dettagli. Hai una naturale inclinazione verso medicina preventiva e stili di vita sani.",
        },
      ],
      extras: {
        lucky_numbers: [6, 9, 15],
        lucky_color: "verde oliva",
        mood: "perfezionista",
        best_time: "alba",
        keywords: ["precisione", "servizio", "analisi", "affidabilità", "miglioramento"],
      },
    },
  },
  bilancia: {
    name: "Bilancia",
    icon: "♎",
    giornaliero: {
      text: "L'armonia venusiana pervade la tua giornata di bellezza e equilibrio. La tua natura diplomatica trova soluzioni eleganti ai conflitti, mentre il tuo senso estetico attira apprezzamenti.",
      sections: [
        {
          title: "Amore",
          content:
            "Il tuo fascino naturale e la capacità di creare armonia rendono questa giornata perfetta per l'amore. Relazioni equilibrate e basate sul rispetto reciproco sono favorite.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua diplomazia risolve conflitti e crea collaborazioni fruttuose. Progetti artistici o che richiedono senso estetico sono particolarmente favoriti.",
        },
        {
          title: "Benessere",
          content:
            "Hai bisogno di bellezza e armonia intorno a te. Dedicare tempo all'estetica personale o circondarti di arte ti ricarica completamente.",
        },
      ],
      extras: {
        lucky_numbers: [7, 16, 25],
        lucky_color: "rosa cipria",
        mood: "armonioso",
        best_time: "pomeriggio",
        keywords: ["armonia", "diplomazia", "bellezza", "equilibrio", "fascino"],
      },
    },
    settimanale: {
      text: "Una settimana di grande equilibrio ti attende, cara Bilancia. Le energie venusiane favoriscono relazioni armoniose e decisioni ponderate in ogni ambito della vita.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di grande armonia sentimentale. Lunedì e giovedì sono particolarmente favorevoli per appianare conflitti e rafforzare l'intesa di coppia.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua capacità di mediazione apre nuove opportunità professionali. Collaborazioni artistiche o nel settore della bellezza sono particolarmente favorite.",
        },
        {
          title: "Benessere",
          content:
            "Settimana ideale per trattamenti estetici e attività che nutrono il tuo senso del bello. L'equilibrio tra lavoro e piacere è essenziale.",
        },
      ],
      extras: {
        lucky_numbers: [2, 11, 20],
        lucky_color: "azzurro pastello",
        mood: "equilibrato",
        best_time: "tramonto",
        keywords: ["equilibrio", "mediazione", "collaborazione", "estetica", "armonia"],
      },
    },
    mensile: {
      text: "Agosto porta focus sulle relazioni e l'estetica per la Bilancia. Le stelle favoriscono partnership di successo e progetti che uniscono bellezza e funzionalità.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di grande romanticismo e partnership equilibrate. Potresti prendere decisioni importanti riguardo al matrimonio o alla convivenza.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo eccellente per collaborazioni creative e investimenti nel settore della bellezza o dell'arte. La tua estetica si trasforma in opportunità concrete.",
        },
        {
          title: "Benessere",
          content:
            "Agosto ti invita a creare bellezza nella tua vita quotidiana. Rinnovare l'ambiente domestico o investire nel tuo aspetto porta grande soddisfazione.",
        },
      ],
      extras: {
        lucky_numbers: [4, 13, 22],
        lucky_color: "lavanda",
        mood: "raffinato",
        best_time: "ora dorata",
        keywords: ["partnership", "bellezza", "romanticismo", "collaborazione", "raffinatezza"],
      },
    },
    generale: {
      text: "La Bilancia rappresenta l'equilibrio e l'armonia dello zodiaco. La tua natura diplomatica e il senso estetico raffinato ti rendono un mediatore naturale e un'ispirazione per chi cerca bellezza.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore cerchi partnership equilibrate e armoniose. Hai bisogno di un compagno che condivida i tuoi valori estetici e la tua ricerca di equilibrio in tutto.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in professioni creative, legali o diplomatiche. Design, moda, arte, mediazione sono campi naturali dove il tuo senso estetico e diplomatico brillano.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo benessere dipende dall'armonia dell'ambiente circostante. Hai bisogno di bellezza, equilibrio e relazioni pacifiche per sentirti completamente bene.",
        },
      ],
      extras: {
        lucky_numbers: [6, 7, 15],
        lucky_color: "rosa",
        mood: "diplomatico",
        best_time: "equilibrio del giorno",
        keywords: ["equilibrio", "diplomazia", "bellezza", "armonia", "partnership"],
      },
    },
  },
  scorpione: {
    name: "Scorpione",
    icon: "♏",
    giornaliero: {
      text: "L'intensità plutoniana pervade la tua giornata di trasformazione e intuizione profonda. La tua capacità di vedere oltre le apparenze rivela verità nascoste e opportunità segrete.",
      sections: [
        {
          title: "Amore",
          content:
            "La tua intensità emotiva e magnetismo sono irresistibili oggi. È una giornata perfetta per connessioni profonde e trasformative. Evita la gelosia eccessiva.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua intuizione negli affari è particolarmente acuta. Ricerche approfondite e progetti che richiedono investigazione sono favoriti. Investimenti strategici.",
        },
        {
          title: "Benessere",
          content:
            "Hai bisogno di attività che ti permettano di scaricare l'intensità emotiva. Sport intensi o pratiche di trasformazione personale sono ideali.",
        },
      ],
      extras: {
        lucky_numbers: [8, 13, 31],
        lucky_color: "rosso bordeaux",
        mood: "intenso",
        best_time: "mezzanotte",
        keywords: ["trasformazione", "intuizione", "intensità", "magnetismo", "profondità"],
      },
    },
    settimanale: {
      text: "Una settimana di profonda trasformazione ti attende, caro Scorpione. Le energie plutoniane sostengono processi di rinnovamento che toccano le radici più profonde del tuo essere.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di grande intensità emotiva. Martedì e sabato sono ideali per conversazioni profonde che possono trasformare completamente una relazione.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua capacità investigativa porta alla luce opportunità nascoste. Progetti di ricerca o che richiedono analisi profonda sono particolarmente favoriti.",
        },
        {
          title: "Benessere",
          content:
            "Settimana di purificazione e rinnovamento. Pratiche detox, meditazione profonda o terapie alternative ti aiutano nella trasformazione personale.",
        },
      ],
      extras: {
        lucky_numbers: [4, 13, 22],
        lucky_color: "nero profondo",
        mood: "trasformativo",
        best_time: "ore piccole",
        keywords: ["rinnovamento", "investigazione", "purificazione", "intensità", "trasformazione"],
      },
    },
    mensile: {
      text: "Agosto porta trasformazioni profonde per lo Scorpione. Le energie cosmiche favoriscono processi di rinascita personale e la scoperta di talenti nascosti.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di passioni intense e trasformative. Relazioni superficiali vengono eliminate, mentre quelle autentiche si approfondiscono enormemente.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo di scoperte importanti che possono cambiare la tua direzione professionale. Investimenti in settori di trasformazione o ricerca sono favoriti.",
        },
        {
          title: "Benessere",
          content:
            "Agosto è un mese di rinascita fisica e mentale. È il momento perfetto per eliminare tutto ciò che non ti serve più e rinnovarti completamente.",
        },
      ],
      extras: {
        lucky_numbers: [10, 19, 28],
        lucky_color: "cremisi",
        mood: "rigenerativo",
        best_time: "eclissi",
        keywords: ["rinascita", "passione", "scoperta", "eliminazione", "rinnovamento"],
      },
    },
    generale: {
      text: "Lo Scorpione rappresenta la trasformazione e il mistero dello zodiaco. La tua natura intensa e la capacità di rigenerazione ti rendono un catalizzatore di cambiamenti profondi.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore sei tutto o niente. Cerchi connessioni profonde e trasformative, capaci di toccare l'anima. La tua passione è intensa ma anche possessiva.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in professioni investigative, terapeutiche o di trasformazione: psicologia, medicina, ricerca, detective. Hai un talento per scoprire verità nascoste.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo benessere passa attraverso cicli di morte e rinascita. Hai bisogno di trasformazioni periodiche per mantenere l'equilibrio psico-fisico.",
        },
      ],
      extras: {
        lucky_numbers: [8, 13, 18],
        lucky_color: "rosso scuro",
        mood: "misterioso",
        best_time: "notte fonda",
        keywords: ["trasformazione", "intensità", "mistero", "rigenerazione", "profondità"],
      },
    },
  },
  sagittario: {
    name: "Sagittario",
    icon: "♐",
    giornaliero: {
      text: "L'energia gioviana espande i tuoi orizzonti verso nuove avventure e conoscenze. La tua natura ottimista e filosofica attira opportunità di crescita e esperienze illuminanti.",
      sections: [
        {
          title: "Amore",
          content:
            "La tua spontaneità e amore per l'avventura rendono questa giornata perfetta per nuovi incontri o per sorprendere il partner con proposte originali e stimolanti.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua visione a lungo termine e ottimismo aprono porte internazionali. Progetti educativi, editoriali o che coinvolgono viaggi sono particolarmente favoriti.",
        },
        {
          title: "Benessere",
          content:
            "Hai bisogno di movimento e spazi aperti. Attività all'aria aperta, sport o semplicemente una passeggiata in natura ti ricaricano di energia positiva.",
        },
      ],
      extras: {
        lucky_numbers: [9, 21, 33],
        lucky_color: "blu cobalto",
        mood: "avventuroso",
        best_time: "mattino",
        keywords: ["avventura", "ottimismo", "crescita", "libertà", "esplorazione"],
      },
    },
    settimanale: {
      text: "Una settimana di espansione e nuove opportunità ti attende, caro Sagittario. Le energie gioviane favoriscono viaggi, apprendimento e connessioni internazionali.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di incontri stimolanti e avventure romantiche. Mercoledì e domenica sono ideali per esplorare nuove dimensioni dell'amore e della complicità.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua visione globale apre opportunità internazionali. Progetti educativi, pubblicazioni o collaborazioni estere sono particolarmente favoriti questa settimana.",
        },
        {
          title: "Benessere",
          content:
            "Settimana perfetta per pianificare viaggi o attività che espandano i tuoi orizzonti. Il movimento e l'esplorazione sono essenziali per il tuo equilibrio.",
        },
      ],
      extras: {
        lucky_numbers: [3, 12, 21],
        lucky_color: "turchese",
        mood: "espansivo",
        best_time: "alba",
        keywords: ["espansione", "opportunità", "internazionale", "movimento", "visione"],
      },
    },
    mensile: {
      text: "Agosto porta grandi espansioni per il Sagittario. Le stelle favoriscono viaggi, studi superiori e progetti che ampliano significativamente i tuoi orizzonti personali e professionali.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di incontri internazionali e relazioni che espandono la tua visione del mondo. L'amore potrebbe arrivare attraverso viaggi o studi.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo eccellente per progetti editoriali, educativi o che coinvolgono culture diverse. I tuoi investimenti in formazione iniziano a dare frutti concreti.",
        },
        {
          title: "Benessere",
          content:
            "Agosto ti invita all'avventura e all'esplorazione. Viaggi, sport all'aria aperta e attività che sfidano i tuoi limiti ti mantengono in perfetta forma.",
        },
      ],
      extras: {
        lucky_numbers: [7, 16, 25],
        lucky_color: "viola reale",
        mood: "filosofico",
        best_time: "mezzogiorno",
        keywords: ["espansione", "viaggi", "educazione", "cultura", "avventura"],
      },
    },
    generale: {
      text: "Il Sagittario rappresenta l'esplorazione e la saggezza dello zodiaco. La tua natura avventurosa e la sete di conoscenza ti rendono un eterno studente della vita e un ispiratore di libertà.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore cerchi un compagno di avventure che condivida la tua sete di esplorazione. Hai bisogno di libertà e di relazioni che crescano attraverso esperienze condivise.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in professioni legate a viaggi, educazione, editoria, filosofia. Hai bisogno di lavori che ti permettano di espandere continuamente i tuoi orizzonti.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo benessere dipende dalla libertà di movimento e dall'esplorazione continua. Hai bisogno di spazi aperti e di sfide che stimolino la tua crescita.",
        },
      ],
      extras: {
        lucky_numbers: [3, 9, 21],
        lucky_color: "blu",
        mood: "libero",
        best_time: "orizzonte",
        keywords: ["esplorazione", "saggezza", "libertà", "avventura", "crescita"],
      },
    },
  },
  capricorno: {
    name: "Capricorno",
    icon: "♑",
    giornaliero: {
      text: "L'ambizione saturniana guida la tua giornata verso obiettivi concreti e duraturi. La tua determinazione e senso pratico trasformano i sogni in realtà attraverso passi metodici e sicuri.",
      sections: [
        {
          title: "Amore",
          content:
            "La tua serietà e affidabilità attirano chi cerca stabilità emotiva. È una giornata perfetta per dimostrare il tuo impegno attraverso gesti concreti e promesse mantenute.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua perseveranza e professionalità vengono riconosciute. Progetti a lungo termine mostrano progressi significativi. Investimenti sicuri e pianificazione finanziaria sono favoriti.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo corpo ha bisogno di struttura e disciplina. Routine di esercizio regolari e abitudini salutari consolidate ti mantengono in forma ottimale.",
        },
      ],
      extras: {
        lucky_numbers: [10, 19, 28],
        lucky_color: "grigio antracite",
        mood: "determinato",
        best_time: "tardo pomeriggio",
        keywords: ["ambizione", "determinazione", "stabilità", "professionalità", "concretezza"],
      },
    },
    settimanale: {
      text: "Una settimana di solidi progressi ti attende, caro Capricorno. Le energie saturniane sostengono i tuoi sforzi di costruzione e consolidamento in ogni area della vita.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di consolidamento delle relazioni serie. Lunedì e giovedì sono ideali per prendere decisioni importanti riguardo al futuro sentimentale.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua dedizione al lavoro porta riconoscimenti concreti. Progetti di lungo termine raggiungono milestone importanti. Periodo favorevole per investimenti immobiliari.",
        },
        {
          title: "Benessere",
          content:
            "Settimana perfetta per stabilire routine salutari durature. La tua disciplina naturale ti aiuta a mantenere abitudini benefiche per il lungo termine.",
        },
      ],
      extras: {
        lucky_numbers: [8, 17, 26],
        lucky_color: "marrone terra",
        mood: "costruttivo",
        best_time: "sera",
        keywords: ["progresso", "consolidamento", "disciplina", "riconoscimento", "costruzione"],
      },
    },
    mensile: {
      text: "Agosto porta focus sulla carriera e gli obiettivi a lungo termine per il Capricorno. Le stelle favoriscono promozioni, riconoscimenti e la costruzione di basi solide per il futuro.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di decisioni importanti riguardo all'impegno e alla stabilità. Relazioni serie potrebbero evolversi verso matrimonio o convivenza.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo eccellente per avanzamenti di carriera e riconoscimenti professionali. I tuoi anni di duro lavoro iniziano a dare frutti tangibili e duraturi.",
        },
        {
          title: "Benessere",
          content:
            "Agosto ti invita a investire nella tua salute a lungo termine. Check-up medici e piani di benessere strutturati sono particolarmente favoriti.",
        },
      ],
      extras: {
        lucky_numbers: [1, 10, 19],
        lucky_color: "nero elegante",
        mood: "ambizioso",
        best_time: "crepuscolo",
        keywords: ["carriera", "riconoscimento", "stabilità", "investimenti", "futuro"],
      },
    },
    generale: {
      text: "Il Capricorno rappresenta l'ambizione e la responsabilità dello zodiaco. La tua natura pratica e la determinazione incrollabile ti rendono un costruttore di successi duraturi e un pilastro di affidabilità.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore sei serio e impegnato. Cerchi relazioni stabili e durature, basate su rispetto reciproco e obiettivi condivisi. La fedeltà è sacra per te.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in posizioni di responsabilità e management. Business, finanza, architettura, ingegneria sono campi naturali dove la tua praticità e ambizione brillano.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo benessere beneficia di routine strutturate e obiettivi chiari. Hai bisogno di disciplina e risultati tangibili per sentirti completamente soddisfatto.",
        },
      ],
      extras: {
        lucky_numbers: [8, 10, 17],
        lucky_color: "grigio",
        mood: "responsabile",
        best_time: "vetta della montagna",
        keywords: ["ambizione", "responsabilità", "disciplina", "successo", "stabilità"],
      },
    },
  },
  acquario: {
    name: "Acquario",
    icon: "♒",
    giornaliero: {
      text: "L'innovazione uraniana illumina la tua giornata di idee rivoluzionarie e connessioni inaspettate. La tua visione futuristica e spirito umanitario aprono porte a collaborazioni stimolanti.",
      sections: [
        {
          title: "Amore",
          content:
            "La tua originalità e indipendenza attirano persone interessanti e non convenzionali. È una giornata perfetta per amicizie che si trasformano in qualcosa di più profondo.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Le tue idee innovative trovano terreno fertile. Progetti tecnologici, sociali o che coinvolgono gruppi sono particolarmente favoriti. Investimenti in settori futuristici.",
        },
        {
          title: "Benessere",
          content:
            "Hai bisogno di stimoli mentali e connessioni sociali. Attività di gruppo o che coinvolgono nuove tecnologie ti ricaricano di energia creativa.",
        },
      ],
      extras: {
        lucky_numbers: [11, 22, 33],
        lucky_color: "azzurro elettrico",
        mood: "innovativo",
        best_time: "futuro",
        keywords: ["innovazione", "originalità", "indipendenza", "umanitarismo", "tecnologia"],
      },
    },
    settimanale: {
      text: "Una settimana di connessioni stimolanti ti attende, caro Acquario. Le energie uraniane favoriscono progetti di gruppo, innovazioni tecnologiche e cause umanitarie.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di incontri attraverso amicizie e gruppi sociali. Martedì e sabato sono ideali per connessioni basate su ideali condivisi e visioni comuni.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua visione futuristica apre opportunità in settori innovativi. Collaborazioni di gruppo e progetti tecnologici sono particolarmente favoriti questa settimana.",
        },
        {
          title: "Benessere",
          content:
            "Settimana perfetta per attività di gruppo e cause sociali. Il tuo benessere dipende dal sentirti parte di qualcosa di più grande e significativo.",
        },
      ],
      extras: {
        lucky_numbers: [7, 16, 25],
        lucky_color: "argento futuristico",
        mood: "visionario",
        best_time: "era digitale",
        keywords: ["connessioni", "gruppo", "innovazione", "futuro", "collaborazione"],
      },
    },
    mensile: {
      text: "Agosto porta focus su amicizie e progetti collettivi per l'Acquario. Le stelle favoriscono innovazioni tecnologiche, cause umanitarie e la realizzazione di sogni futuristici.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di amicizie che si trasformano in amore e di relazioni basate su ideali condivisi. L'amore arriva attraverso connessioni intellettuali e spirituali.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo eccellente per lanciare progetti innovativi o entrare in settori tecnologici. Le tue idee rivoluzionarie trovano finalmente il supporto necessario.",
        },
        {
          title: "Benessere",
          content:
            "Agosto ti invita a connetterti con la comunità e le cause che ti stanno a cuore. Il tuo benessere dipende dal contribuire al bene comune.",
        },
      ],
      extras: {
        lucky_numbers: [4, 13, 22],
        lucky_color: "blu elettrico",
        mood: "rivoluzionario",
        best_time: "era dell'Acquario",
        keywords: ["amicizie", "innovazione", "comunità", "rivoluzione", "futuro"],
      },
    },
    generale: {
      text: "L'Acquario rappresenta l'innovazione e l'umanitarismo dello zodiaco. La tua natura visionaria e lo spirito di fratellanza universale ti rendono un pioniere del progresso sociale e tecnologico.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore cerchi un compagno che sia prima di tutto un amico. Hai bisogno di libertà e di relazioni basate su ideali condivisi e rispetto reciproco dell'indipendenza.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in professioni innovative, tecnologiche o umanitarie. Ricerca scientifica, tecnologia, ONG, astrologia sono campi dove la tua visione futuristica brilla.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo benessere dipende dal sentirti connesso alla comunità globale. Hai bisogno di cause significative e di amicizie stimolanti per mantenere l'equilibrio.",
        },
      ],
      extras: {
        lucky_numbers: [4, 11, 22],
        lucky_color: "azzurro",
        mood: "fraterno",
        best_time: "era futura",
        keywords: ["innovazione", "umanitarismo", "libertà", "fratellanza", "visione"],
      },
    },
  },
  pesci: {
    name: "Pesci",
    icon: "♓",
    giornaliero: {
      text: "L'intuizione nettuniana avvolge la tua giornata di sensibilità e creatività. La tua natura empatica e immaginativa ti connette profondamente con le emozioni altrui e con dimensioni spirituali.",
      sections: [
        {
          title: "Amore",
          content:
            "La tua sensibilità e capacità di comprensione emotiva creano connessioni profonde e spirituali. È una giornata perfetta per l'amore romantico e i gesti poetici.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua creatività e intuizione aprono porte artistiche e spirituali. Progetti che coinvolgono arte, musica o aiuto agli altri sono particolarmente favoriti.",
        },
        {
          title: "Benessere",
          content:
            "Hai bisogno di momenti di solitudine e connessione spirituale. Meditazione, arte o tempo trascorso vicino all'acqua ti ricaricano completamente.",
        },
      ],
      extras: {
        lucky_numbers: [12, 21, 30],
        lucky_color: "verde acqua",
        mood: "sognante",
        best_time: "alba sul mare",
        keywords: ["intuizione", "sensibilità", "creatività", "spiritualità", "empatia"],
      },
    },
    settimanale: {
      text: "Una settimana di profonda connessione emotiva ti attende, caro Pesci. Le energie nettuniane amplificano la tua sensibilità e aprono canali creativi e spirituali.",
      sections: [
        {
          title: "Amore",
          content:
            "Settimana di grande romanticismo e connessioni spirituali. Giovedì e domenica sono ideali per momenti di intimità emotiva e comprensione profonda.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "La tua creatività e intuizione portano opportunità artistiche o spirituali. Progetti che coinvolgono aiuto agli altri o espressione creativa sono favoriti.",
        },
        {
          title: "Benessere",
          content:
            "Settimana perfetta per pratiche spirituali e creative. La tua sensibilità richiede momenti di pace e connessione con la natura o l'arte.",
        },
      ],
      extras: {
        lucky_numbers: [6, 15, 24],
        lucky_color: "blu oceano",
        mood: "compassionevole",
        best_time: "crepuscolo marino",
        keywords: ["romanticismo", "creatività", "spiritualità", "compassione", "intuizione"],
      },
    },
    mensile: {
      text: "Agosto porta focus sulla creatività e spiritualità per i Pesci. Le stelle favoriscono progetti artistici, pratiche spirituali e la connessione con dimensioni più profonde dell'esistenza.",
      sections: [
        {
          title: "Amore",
          content:
            "Mese di amore spirituale e connessioni karmiche. Potresti incontrare qualcuno che sembra conoscere da sempre o approfondire legami esistenti a livello animico.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Periodo eccellente per progetti creativi, artistici o di aiuto agli altri. La tua sensibilità si trasforma in opportunità concrete nel settore dell'arte o del sociale.",
        },
        {
          title: "Benessere",
          content:
            "Agosto ti invita all'introspezione e alla connessione spirituale. Pratiche meditative, artistiche o terapie alternative favoriscono il tuo equilibrio.",
        },
      ],
      extras: {
        lucky_numbers: [9, 18, 27],
        lucky_color: "viola mistico",
        mood: "trascendente",
        best_time: "luna piena sull'oceano",
        keywords: ["creatività", "spiritualità", "karma", "arte", "trascendenza"],
      },
    },
    generale: {
      text: "I Pesci rappresentano la compassione e l'intuizione dello zodiaco. La tua natura sensibile e immaginativa ti rende un ponte tra il mondo materiale e quello spirituale, capace di guarire attraverso l'arte e l'amore.",
      sections: [
        {
          title: "Amore",
          content:
            "In amore sei romantico e devoto. Cerchi connessioni spirituali profonde e sei capace di amore incondizionato. La tua sensibilità è sia la tua forza che la tua vulnerabilità.",
        },
        {
          title: "Lavoro & Denaro",
          content:
            "Eccelli in professioni creative, spirituali o di aiuto: arte, musica, psicologia, medicina alternativa. La tua intuizione è un dono prezioso in ogni campo.",
        },
        {
          title: "Benessere",
          content:
            "Il tuo benessere dipende dall'equilibrio emotivo e spirituale. Hai bisogno di tempo per sognare, creare e connetterti con dimensioni più profonde della vita.",
        },
      ],
      extras: {
        lucky_numbers: [7, 12, 29],
        lucky_color: "blu mare",
        mood: "mistico",
        best_time: "tra sogno e realtà",
        keywords: ["compassione", "intuizione", "creatività", "spiritualità", "guarigione"],
      },
    },
  },
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const sign = searchParams.get("sign") || "ariete"
  const period = searchParams.get("period") || "giornaliero"

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const signData = horoscopeData[sign as keyof typeof horoscopeData]
  if (!signData) {
    return NextResponse.json({ error: "Segno non trovato" }, { status: 404 })
  }

  const periodData = signData[period as keyof typeof signData]
  if (!periodData || typeof periodData === "string") {
    return NextResponse.json({ error: "Periodo non valido" }, { status: 400 })
  }

  return NextResponse.json({
    source: "ai",
    sign,
    period,
    date: new Date().toISOString().split("T")[0],
    name: signData.name,
    icon: signData.icon,
    ...periodData,
  })
}

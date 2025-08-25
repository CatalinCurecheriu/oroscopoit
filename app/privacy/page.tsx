import type { Metadata } from "next"
import { MotionSection } from "@/components/motion-section"
import { AuroraBackground } from "@/components/aurora-background"

export const metadata: Metadata = {
  title: "Privacy Policy - Oroscopo IT",
  description: "Informativa sulla privacy per Oroscopo IT - Come proteggiamo i tuoi dati personali",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AuroraBackground />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <MotionSection className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">La tua privacy è importante per noi</p>
              <p className="text-sm text-muted-foreground mt-2">
                Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Introduzione</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Benvenuto su Oroscopo IT. Questa informativa sulla privacy descrive come raccogliamo, utilizziamo e
                  proteggiamo le tue informazioni personali quando utilizzi il nostro sito web e i nostri servizi di
                  oroscopi personalizzati, calcolo dell'ascendente e compatibilità amorosa.
                </p>
              </div>

              {/* Data Collection */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Dati che Raccogliamo</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Dati di Nascita</h3>
                    <p className="leading-relaxed">
                      Per fornire calcoli astrologici accurati, raccogliamo la tua data, ora e luogo di nascita quando
                      utilizzi il nostro calcolatore dell'ascendente. Questi dati sono utilizzati esclusivamente per
                      generare i tuoi risultati astrologici personalizzati.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Dati di Navigazione</h3>
                    <p className="leading-relaxed">
                      Raccogliamo automaticamente informazioni sulla tua visita, inclusi indirizzo IP, tipo di browser,
                      pagine visitate e tempo trascorso sul sito per migliorare l'esperienza utente e le prestazioni del
                      sito.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Usage */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-pink-400">Come Utilizziamo i Tuoi Dati</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Generare oroscopi personalizzati e calcoli astrologici accurati</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Fornire servizi di compatibilità amorosa e analisi astrologiche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Migliorare e ottimizzare i nostri servizi e l'esperienza utente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Analizzare le tendenze di utilizzo per sviluppare nuove funzionalità</span>
                  </li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-green-400">Protezione dei Dati</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati
                  personali contro accesso non autorizzato, alterazione, divulgazione o distruzione.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Crittografia SSL per tutte le trasmissioni di dati</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Accesso limitato ai dati solo al personale autorizzato</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Backup sicuri e procedure di ripristino</span>
                  </li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Cookie e Tecnologie Simili</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza di navigazione, ricordare le
                  tue preferenze e analizzare il traffico del sito.
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground">Cookie Essenziali:</span> Necessari per il
                    funzionamento del sito
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Cookie Analitici:</span> Ci aiutano a capire come
                    utilizzi il sito
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Cookie di Preferenze:</span> Ricordano le tue
                    impostazioni
                  </div>
                </div>
              </div>

              {/* User Rights */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-indigo-400">I Tuoi Diritti</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In conformità al GDPR, hai i seguenti diritti riguardo ai tuoi dati personali:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                      <strong>Diritto di accesso:</strong> Richiedere informazioni sui dati che trattiamo
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                      <strong>Diritto di rettifica:</strong> Correggere dati inesatti o incompleti
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                      <strong>Diritto di cancellazione:</strong> Richiedere la rimozione dei tuoi dati
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                      <strong>Diritto di portabilità:</strong> Ricevere i tuoi dati in formato strutturato
                    </span>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Contattaci</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Per qualsiasi domanda riguardo questa informativa sulla privacy o per esercitare i tuoi diritti, puoi
                  contattarci:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Email:</strong> privacy@oroscopo-it.com
                  </p>
                  <p>
                    <strong>Responsabile della Protezione dei Dati:</strong> dpo@oroscopo-it.com
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-orange-400">Aggiornamenti</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ci riserviamo il diritto di aggiornare questa informativa sulla privacy periodicamente. Ti
                  notificheremo eventuali modifiche significative pubblicando la nuova informativa su questa pagina con
                  una data di aggiornamento rivista.
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </div>
  )
}

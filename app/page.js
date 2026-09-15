export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <span className="badge">Torrefazione artigianale dal 1998</span>
          <h1>Caffè Aurora</h1>
          <p className="lead">
            Ogni chicco racconta un&apos;alba. Miscele calde e avvolgenti, tostate a
            mano per portare in tazza il profumo autentico del vero caffè
            italiano.
          </p>
          <a className="cta" href="#contatti">
            I nostri prodotti
          </a>
        </div>
      </header>

      <section id="chi-siamo" className="section">
        <div className="container">
          <h2>Chi siamo</h2>
          <p>
            Caffè Aurora nasce da una piccola torrefazione di famiglia, dove
            la tradizione incontra la cura per il dettaglio. Selezioniamo le
            migliori miscele di Arabica e Robusta, tostandole lentamente per
            esaltarne aroma e corpo. Il nostro obiettivo è semplice: regalare
            un momento di calore in ogni tazzina, dalla prima colazione alla
            pausa pomeridiana.
          </p>
          <div className="cards">
            <div className="card">
              <h3>Qualità</h3>
              <p>Chicchi selezionati e tostatura lenta e controllata.</p>
            </div>
            <div className="card">
              <h3>Passione</h3>
              <p>Una ricetta di famiglia tramandata da tre generazioni.</p>
            </div>
            <div className="card">
              <h3>Sostenibilità</h3>
              <p>Filiera equa e packaging a basso impatto ambientale.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="orari" className="section section-alt">
        <div className="container">
          <h2>Orari di apertura</h2>
          <div className="hours">
            <div className="hours-item">
              <span>Lunedì – Venerdì</span>
              <span>7:00 – 19:30</span>
            </div>
            <div className="hours-item">
              <span>Sabato</span>
              <span>8:00 – 20:00</span>
            </div>
            <div className="hours-item">
              <span>Domenica</span>
              <span>9:00 – 13:00</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contatti" className="section">
        <div className="container">
          <h2>Contatti</h2>
          <p>Vieni a trovarci o scrivici: saremo felici di risponderti.</p>
          <div className="contacts">
            <div className="contact-item">
              <strong>Indirizzo</strong>
              <span>Via delle Torrefazioni 12, 40100 Bologna (BO)</span>
            </div>
            <div className="contact-item">
              <strong>Email</strong>
              <span>info@caffeaurora.it</span>
            </div>
            <div className="contact-item">
              <strong>Telefono</strong>
              <span>+39 051 123 4567</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Caffè Aurora. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </>
  );
}

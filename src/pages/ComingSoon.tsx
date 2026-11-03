import '../styles/coming-soon.css'

export default function ComingSoon() {
  return (
    <main className="soon-page">
      <div className="soon-grid" aria-hidden="true" />

      <header className="soon-header">
        <a className="soon-brand" href="/" aria-label="Phong Tran home">
          <span className="soon-mark">P<span className="soon-mark-dot">.</span>T</span>
          <span className="soon-brand-name">PHONG TRAN<span>DESIGN × TECHNOLOGY</span></span>
        </a>
        <div className="soon-status"><span className="soon-status-dot" /> WORK IN PROGRESS</div>
      </header>

      <section className="soon-content" aria-labelledby="soon-heading">
        <div className="soon-copy">
          <div className="soon-eyebrow"><span>01 / PERSONAL LAB</span><span className="soon-eyebrow-rule" /><span>EST. 2026</span></div>
          <h1 id="soon-heading">Something<br /><em>good</em> is taking<br />shape<span className="soon-title-dot">.</span></h1>
          <div className="soon-description">
            <span className="soon-kicker">COMING SOON <span>↗</span></span>
            <p>A new home for design, ideas and useful little experiments. Thoughtfully made. Always evolving.</p>
          </div>
        </div>

        <div className="soon-visual" aria-hidden="true">
          <div className="soon-orbit soon-orbit-one" />
          <div className="soon-orbit soon-orbit-two" />
          <div className="soon-orbit soon-orbit-three" />
          <div className="soon-composition">
            <div className="soon-shape soon-shape-back" />
            <div className="soon-shape soon-shape-front" />
            <div className="soon-shape-fold" />
            <div className="soon-composition-dot" />
          </div>
          <div className="soon-visual-top">IDEAS IN MOTION <span>✳</span></div>
          <div className="soon-visual-bottom"><span>DESIGN.</span><span>BUILD.</span><span>REPEAT.</span></div>
        </div>
      </section>

      <footer className="soon-footer">
        <span>© {new Date().getFullYear()} PHONG TRAN</span>
        <span className="soon-footer-middle">MADE WITH INTENTION <span>✳</span></span>
        <a href="https://github.com/phongtran278" target="_blank" rel="noopener noreferrer" aria-label="Phong Tran on GitHub">GITHUB <span>↗</span></a>
      </footer>
    </main>
  )
}

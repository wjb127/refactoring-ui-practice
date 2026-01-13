"use client";

import Link from "next/link";

export default function ElegantPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        :root {
          /* Elegant Dark + Gold Palette */
          --gold-100: #F5EFE0;
          --gold-200: #E8DCC4;
          --gold-300: #D4C4A8;
          --gold-400: #C9B896;
          --gold-500: #B8A47C;
          --gold-600: #A08B5B;
          --gold-700: #8B7344;
          --gold-800: #6B572F;

          --dark-100: #2A2A2A;
          --dark-200: #1F1F1F;
          --dark-300: #171717;
          --dark-400: #121212;
          --dark-500: #0A0A0A;

          --cream: #FAF8F5;
          --white: #FFFFFF;

          /* Very generous spacing for luxury feel */
          --space-1: 4px;
          --space-2: 8px;
          --space-3: 16px;
          --space-4: 24px;
          --space-5: 32px;
          --space-6: 48px;
          --space-7: 64px;
          --space-8: 96px;
          --space-9: 128px;
          --space-10: 160px;

          /* Minimal radius */
          --radius-sm: 0;
          --radius-md: 2px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Montserrat', -apple-system, sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.8;
          color: var(--dark-200);
          background: var(--white);
          letter-spacing: 0.02em;
        }

        h1, h2, h3, h4 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        /* === Navigation === */
        .nav {
          background: rgba(255,255,255,0.98);
          border-bottom: 1px solid var(--gold-200);
          padding: var(--space-5) 0;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 0.3em;
          color: var(--dark-200);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: var(--space-6);
        }

        .nav-links a {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--dark-100);
          text-decoration: none;
          padding: var(--space-2) 0;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold-600);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          gap: var(--space-4);
          align-items: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-3) var(--space-5);
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: var(--dark-200);
          color: var(--white);
        }

        .btn-primary:hover {
          background: var(--gold-700);
        }

        .btn-outline {
          background: transparent;
          color: var(--dark-200);
          border: 1px solid var(--dark-200);
        }

        .btn-outline:hover {
          background: var(--dark-200);
          color: var(--white);
        }

        .btn-gold {
          background: var(--gold-600);
          color: var(--white);
        }

        .btn-gold:hover {
          background: var(--gold-700);
        }

        /* === Hero Section === */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--cream) 0%, var(--white) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          border: 1px solid var(--gold-300);
          border-radius: 50%;
          right: 10%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.5;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
          padding: var(--space-9) 0;
        }

        .hero-content {
          max-width: 560px;
        }

        .hero-tagline {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold-600);
          margin-bottom: var(--space-4);
        }

        .hero-content h1 {
          font-size: 64px;
          line-height: 1.1;
          color: var(--dark-300);
          margin-bottom: var(--space-5);
        }

        .hero-content h1 em {
          font-style: italic;
          color: var(--gold-700);
        }

        .hero-description {
          font-size: 16px;
          color: var(--dark-100);
          margin-bottom: var(--space-6);
          line-height: 1.9;
          opacity: 0.8;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-4);
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .watch-display {
          width: 400px;
          height: 400px;
          background: linear-gradient(145deg, var(--gold-200), var(--gold-100));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .watch-display::before {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          border: 1px solid var(--gold-400);
          border-radius: 50%;
        }

        .watch-inner {
          width: 200px;
          height: 200px;
          background: var(--dark-300);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        .watch-face {
          width: 160px;
          height: 160px;
          background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
          border-radius: 50%;
          border: 4px solid var(--gold-500);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          color: var(--gold-400);
          letter-spacing: 0.2em;
        }

        /* === Features Section === */
        .features {
          padding: var(--space-10) 0;
          background: var(--white);
        }

        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto var(--space-8);
        }

        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold-600);
          margin-bottom: var(--space-3);
        }

        .section-header h2 {
          font-size: 42px;
          color: var(--dark-300);
          margin-bottom: var(--space-4);
        }

        .section-divider {
          width: 60px;
          height: 1px;
          background: var(--gold-500);
          margin: 0 auto var(--space-4);
        }

        .section-header p {
          font-size: 15px;
          color: var(--dark-100);
          opacity: 0.7;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-7);
        }

        .feature-card {
          text-align: center;
          padding: var(--space-6);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto var(--space-5);
          border: 1px solid var(--gold-400);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .feature-card h3 {
          font-size: 22px;
          color: var(--dark-300);
          margin-bottom: var(--space-3);
        }

        .feature-card p {
          font-size: 14px;
          color: var(--dark-100);
          opacity: 0.7;
          line-height: 1.8;
        }

        /* === Collection Section === */
        .collection {
          padding: var(--space-10) 0;
          background: var(--dark-400);
          color: var(--white);
        }

        .collection .section-label {
          color: var(--gold-400);
        }

        .collection .section-header h2 {
          color: var(--white);
        }

        .collection .section-header p {
          color: var(--gold-200);
        }

        .collection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .collection-item {
          position: relative;
          aspect-ratio: 3/4;
          background: var(--dark-300);
          overflow: hidden;
          cursor: pointer;
        }

        .collection-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.8) 100%);
          z-index: 1;
        }

        .collection-bg {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, var(--dark-200), var(--dark-300));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .collection-watch {
          width: 120px;
          height: 120px;
          background: var(--dark-400);
          border-radius: 50%;
          border: 3px solid var(--gold-500);
        }

        .collection-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--space-5);
          z-index: 2;
        }

        .collection-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          color: var(--white);
          margin-bottom: var(--space-1);
        }

        .collection-price {
          font-size: 13px;
          color: var(--gold-400);
          letter-spacing: 0.1em;
        }

        /* === Quote Section === */
        .quote {
          padding: var(--space-10) 0;
          background: var(--cream);
          text-align: center;
        }

        .quote-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 120px;
          color: var(--gold-400);
          line-height: 0.5;
          margin-bottom: var(--space-4);
        }

        .quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-style: italic;
          color: var(--dark-300);
          line-height: 1.6;
          margin-bottom: var(--space-5);
        }

        .quote-author {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-600);
        }

        /* === CTA Section === */
        .cta {
          padding: var(--space-9) 0;
          background: var(--dark-300);
          text-align: center;
        }

        .cta h2 {
          font-size: 36px;
          color: var(--white);
          margin-bottom: var(--space-4);
        }

        .cta p {
          font-size: 15px;
          color: var(--gold-300);
          margin-bottom: var(--space-6);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        /* === Footer === */
        .footer {
          padding: var(--space-8) 0;
          background: var(--dark-500);
          color: var(--gold-300);
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer .logo {
          color: var(--white);
        }

        .footer-links {
          display: flex;
          gap: var(--space-6);
        }

        .footer-links a {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold-400);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--gold-200);
        }

        .footer-bottom {
          margin-top: var(--space-6);
          padding-top: var(--space-5);
          border-top: 1px solid var(--dark-300);
          text-align: center;
          font-size: 12px;
          color: var(--dark-100);
          opacity: 0.5;
        }

        /* Back link */
        .back-link {
          position: fixed;
          bottom: var(--space-5);
          left: var(--space-5);
          padding: var(--space-3) var(--space-5);
          background: var(--white);
          color: var(--dark-300);
          text-decoration: none;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid var(--gold-400);
          z-index: 100;
          transition: all 0.3s;
        }

        .back-link:hover {
          background: var(--dark-300);
          color: var(--white);
          border-color: var(--dark-300);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            max-width: 100%;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-visual {
            display: none;
          }
          .features-grid,
          .collection-grid {
            grid-template-columns: 1fr;
          }
          .nav-links {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 { font-size: 48px; }
          .footer-container {
            flex-direction: column;
            gap: var(--space-5);
          }
        }
      `}</style>

      <Link href="/" className="back-link">← Gallery</Link>

      <nav className="nav">
        <div className="container nav-container">
          <a href="#" className="logo">LUMIÈRE</a>
          <div className="nav-links">
            <a href="#collection">Collection</a>
            <a href="#craftsmanship">Craftsmanship</a>
            <a href="#heritage">Heritage</a>
            <a href="#boutiques">Boutiques</a>
          </div>
          <div className="nav-actions">
            <a href="#" className="btn btn-outline">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="hero-tagline">Swiss Haute Horlogerie Since 1847</p>
            <h1>Time, <em>Redefined</em></h1>
            <p className="hero-description">
              각각의 타임피스는 175년 전통의 장인정신과 현대적 혁신이 만나
              탄생한 예술 작품입니다. 시간을 넘어 세대를 잇는 가치를 경험하세요.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn btn-primary">Explore Collection</a>
              <a href="#" className="btn btn-outline">Book Appointment</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="watch-display">
              <div className="watch-inner">
                <div className="watch-face">LUMIÈRE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="craftsmanship" className="features">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Craftsmanship</p>
            <h2>The Art of Excellence</h2>
            <div className="section-divider"></div>
            <p>한 세기를 넘어 전해지는 장인정신</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>In-House Movement</h3>
              <p>모든 무브먼트는 스위스 제네바 공방에서 자체 설계되고 제작됩니다. 300개 이상의 부품이 완벽한 조화를 이룹니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Precious Materials</h3>
              <p>18K 골드, 플래티넘, 그리고 엄선된 다이아몬드만을 사용합니다. 모든 재료는 윤리적으로 조달됩니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">♾️</div>
              <h3>Lifetime Heritage</h3>
              <p>영구 보증과 함께 세대를 넘어 전해지는 유산이 됩니다. 우리의 타임피스는 시간을 초월합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="collection">
        <div className="container">
          <div className="section-header">
            <p className="section-label">The Collection</p>
            <h2>Timeless Elegance</h2>
            <div className="section-divider"></div>
            <p>각각의 컬렉션은 고유한 이야기를 담고 있습니다</p>
          </div>

          <div className="collection-grid">
            <div className="collection-item">
              <div className="collection-bg">
                <div className="collection-watch"></div>
              </div>
              <div className="collection-info">
                <h3 className="collection-name">Éternité</h3>
                <p className="collection-price">From ₩45,000,000</p>
              </div>
            </div>

            <div className="collection-item">
              <div className="collection-bg">
                <div className="collection-watch"></div>
              </div>
              <div className="collection-info">
                <h3 className="collection-name">Héritage</h3>
                <p className="collection-price">From ₩78,000,000</p>
              </div>
            </div>

            <div className="collection-item">
              <div className="collection-bg">
                <div className="collection-watch"></div>
              </div>
              <div className="collection-info">
                <h3 className="collection-name">Prestige</h3>
                <p className="collection-price">From ₩120,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="container quote-container">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            진정한 럭셔리는 시간이 흘러도 변하지 않는 가치에 있습니다.
            Lumière는 그 가치를 175년간 지켜왔습니다.
          </p>
          <p className="quote-author">— Pierre Lumière, Founder</p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Experience Lumière</h2>
          <p>전 세계 부티크에서 개인 컨설팅을 예약하세요</p>
          <a href="#" className="btn btn-gold">Book Private Appointment</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <a href="#" className="logo">LUMIÈRE</a>
            <div className="footer-links">
              <a href="#">Collections</a>
              <a href="#">Boutiques</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Lumière. Swiss Haute Horlogerie Since 1847.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

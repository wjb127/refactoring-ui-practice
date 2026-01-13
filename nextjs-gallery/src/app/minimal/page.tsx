"use client";

import Link from "next/link";

export default function MinimalPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        /* =====================================================
           Style 5: Minimal & Clean
           - Monochrome + single accent color
           - Maximum whitespace
           - Concise text
           - Thin lines and typography-focused
           - Agency/portfolio feel
           ===================================================== */

        :root {
          /* Monochrome palette */
          --black: #000000;
          --grey-900: #111111;
          --grey-800: #222222;
          --grey-700: #333333;
          --grey-600: #555555;
          --grey-500: #777777;
          --grey-400: #999999;
          --grey-300: #BBBBBB;
          --grey-200: #DDDDDD;
          --grey-100: #EEEEEE;
          --grey-050: #F7F7F7;
          --white: #FFFFFF;

          /* Single accent - Red */
          --accent: #E53935;
          --accent-light: #FFEBEE;

          /* Maximum spacing */
          --space-1: 4px;
          --space-2: 8px;
          --space-3: 16px;
          --space-4: 24px;
          --space-5: 40px;
          --space-6: 64px;
          --space-7: 96px;
          --space-8: 128px;
          --space-9: 160px;
          --space-10: 200px;

          /* No radius for minimal look */
          --radius: 0;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.7;
          color: var(--grey-800);
          background: var(--white);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 var(--space-5);
        }

        /* === Navigation === */
        .nav {
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 100;
          padding: var(--space-4) 0;
          background: var(--white);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--black);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: var(--space-5);
          list-style: none;
        }

        .nav-links a {
          font-size: 14px;
          color: var(--grey-600);
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--black);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          font-family: inherit;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: var(--black);
          color: var(--white);
        }

        .btn-primary:hover {
          background: var(--grey-800);
        }

        .btn-outline {
          background: transparent;
          color: var(--black);
          border: 1px solid var(--black);
        }

        .btn-outline:hover {
          background: var(--black);
          color: var(--white);
        }

        .btn-text {
          background: none;
          color: var(--grey-600);
          padding: 0;
        }

        .btn-text:hover {
          color: var(--black);
        }

        /* === Hero Section === */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: var(--space-9) 0;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .hero-content {
          max-width: 560px;
        }

        .hero-label {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--grey-500);
          margin-bottom: var(--space-4);
        }

        .hero-content h1 {
          font-size: 56px;
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--black);
          margin-bottom: var(--space-5);
        }

        .hero-content h1 strong {
          font-weight: 600;
        }

        .hero-description {
          font-size: 18px;
          font-weight: 300;
          color: var(--grey-600);
          margin-bottom: var(--space-6);
          line-height: 1.8;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-4);
          align-items: center;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .visual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3);
        }

        .visual-item {
          width: 160px;
          height: 160px;
          background: var(--grey-050);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-item:nth-child(2) {
          background: var(--black);
          color: var(--white);
        }

        .visual-item:nth-child(3) {
          background: var(--accent);
          color: var(--white);
        }

        .visual-item span {
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* === Work Section === */
        .work {
          padding: var(--space-9) 0;
          border-top: 1px solid var(--grey-100);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--space-7);
        }

        .section-header h2 {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--grey-500);
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-5);
        }

        .work-item {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .work-image {
          aspect-ratio: 16/10;
          background: var(--grey-050);
          margin-bottom: var(--space-4);
          overflow: hidden;
          position: relative;
        }

        .work-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--black);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .work-item:hover .work-image::after {
          opacity: 0.1;
        }

        .work-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: var(--grey-400);
        }

        .work-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .work-title {
          font-size: 18px;
          font-weight: 500;
          color: var(--black);
          margin-bottom: var(--space-1);
        }

        .work-category {
          font-size: 13px;
          color: var(--grey-500);
        }

        .work-year {
          font-size: 13px;
          color: var(--grey-400);
        }

        /* === Services Section === */
        .services {
          padding: var(--space-9) 0;
          background: var(--grey-050);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--grey-200);
        }

        .service-item {
          background: var(--white);
          padding: var(--space-6);
          transition: background 0.3s;
        }

        .service-item:hover {
          background: var(--grey-050);
        }

        .service-number {
          font-size: 12px;
          color: var(--grey-400);
          margin-bottom: var(--space-5);
        }

        .service-item h3 {
          font-size: 18px;
          font-weight: 500;
          color: var(--black);
          margin-bottom: var(--space-3);
        }

        .service-item p {
          font-size: 14px;
          color: var(--grey-600);
          line-height: 1.7;
        }

        /* === About Section === */
        .about {
          padding: var(--space-9) 0;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-8);
        }

        .about-label {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--grey-500);
        }

        .about-content h2 {
          font-size: 36px;
          font-weight: 300;
          line-height: 1.4;
          color: var(--black);
          margin-bottom: var(--space-5);
          letter-spacing: -0.02em;
        }

        .about-content h2 strong {
          font-weight: 500;
        }

        .about-content p {
          font-size: 16px;
          color: var(--grey-600);
          max-width: 600px;
        }

        /* === Contact Section === */
        .contact {
          padding: var(--space-9) 0;
          border-top: 1px solid var(--grey-100);
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
        }

        .contact-content h2 {
          font-size: 48px;
          font-weight: 300;
          line-height: 1.2;
          color: var(--black);
          margin-bottom: var(--space-5);
          letter-spacing: -0.02em;
        }

        .contact-content h2 .accent {
          color: var(--accent);
        }

        .contact-content p {
          font-size: 16px;
          color: var(--grey-600);
          margin-bottom: var(--space-5);
        }

        .contact-info {
          padding-top: var(--space-6);
        }

        .contact-item {
          margin-bottom: var(--space-5);
        }

        .contact-item-label {
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--grey-500);
          margin-bottom: var(--space-2);
        }

        .contact-item-value {
          font-size: 16px;
          color: var(--black);
        }

        .contact-item-value a {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid var(--grey-300);
          transition: border-color 0.2s;
        }

        .contact-item-value a:hover {
          border-color: var(--black);
        }

        /* === Footer === */
        .footer {
          padding: var(--space-6) 0;
          border-top: 1px solid var(--grey-100);
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-left {
          font-size: 13px;
          color: var(--grey-500);
        }

        .footer-links {
          display: flex;
          gap: var(--space-5);
        }

        .footer-links a {
          font-size: 13px;
          color: var(--grey-500);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--black);
        }

        /* Back link */
        .back-link {
          position: fixed;
          bottom: var(--space-5);
          left: var(--space-5);
          padding: var(--space-3) var(--space-4);
          background: var(--white);
          color: var(--black);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          border: 1px solid var(--grey-200);
          z-index: 100;
          transition: all 0.2s;
        }

        .back-link:hover {
          background: var(--black);
          color: var(--white);
          border-color: var(--black);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .hero-visual {
            display: none;
          }
          .work-grid {
            grid-template-columns: 1fr;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-container,
          .contact-container {
            grid-template-columns: 1fr;
          }
          .nav-links {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .hero-content h1 {
            font-size: 40px;
          }
          .contact-content h2 {
            font-size: 36px;
          }
        }
      `}</style>

      <Link href="/" className="back-link">← Gallery</Link>

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <a href="#" className="logo">FORM.</a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="btn btn-text">Let's Talk →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <p className="hero-label">Digital Design Studio</p>
            <h1>We design <strong>digital experiences</strong> that matter.</h1>
            <p className="hero-description">
              FORM은 브랜드, 제품, 서비스를 위한 디지털 경험을 디자인합니다.
              단순함 속에서 본질을 찾습니다.
            </p>
            <div className="hero-cta">
              <a href="#work" className="btn btn-primary">View Work</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid">
              <div className="visual-item"><span>Brand</span></div>
              <div className="visual-item"><span>Digital</span></div>
              <div className="visual-item"><span>Design</span></div>
              <div className="visual-item"><span>Motion</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work">
        <div className="container">
          <div className="section-header">
            <h2>Selected Work</h2>
            <a href="#" className="btn btn-text">View All →</a>
          </div>

          <div className="work-grid">
            <a href="#" className="work-item">
              <div className="work-image">
                <div className="work-placeholder">Project Image</div>
              </div>
              <div className="work-info">
                <div>
                  <h3 className="work-title">Naver Financial</h3>
                  <p className="work-category">Brand Identity, Web Design</p>
                </div>
                <span className="work-year">2024</span>
              </div>
            </a>

            <a href="#" className="work-item">
              <div className="work-image">
                <div className="work-placeholder">Project Image</div>
              </div>
              <div className="work-info">
                <div>
                  <h3 className="work-title">Kakao Makers</h3>
                  <p className="work-category">Product Design, Motion</p>
                </div>
                <span className="work-year">2024</span>
              </div>
            </a>

            <a href="#" className="work-item">
              <div className="work-image">
                <div className="work-placeholder">Project Image</div>
              </div>
              <div className="work-info">
                <div>
                  <h3 className="work-title">LINE Music</h3>
                  <p className="work-category">UI/UX Design</p>
                </div>
                <span className="work-year">2023</span>
              </div>
            </a>

            <a href="#" className="work-item">
              <div className="work-image">
                <div className="work-placeholder">Project Image</div>
              </div>
              <div className="work-info">
                <div>
                  <h3 className="work-title">Samsung Design</h3>
                  <p className="work-category">Digital Campaign</p>
                </div>
                <span className="work-year">2023</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
          </div>

          <div className="services-grid">
            <div className="service-item">
              <div className="service-number">01</div>
              <h3>Brand Identity</h3>
              <p>로고, 비주얼 시스템, 브랜드 가이드라인을 통해 일관된 브랜드 경험을 설계합니다.</p>
            </div>

            <div className="service-item">
              <div className="service-number">02</div>
              <h3>Web Design</h3>
              <p>비즈니스 목표에 부합하는 웹사이트를 디자인하고 개발합니다.</p>
            </div>

            <div className="service-item">
              <div className="service-number">03</div>
              <h3>Product Design</h3>
              <p>사용자 중심의 디지털 제품 경험을 설계합니다. UX 리서치부터 UI 디자인까지.</p>
            </div>

            <div className="service-item">
              <div className="service-number">04</div>
              <h3>Motion Design</h3>
              <p>인터랙션과 모션을 통해 디지털 경험에 생명을 불어넣습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-container">
          <p className="about-label">About</p>
          <div className="about-content">
            <h2>
              우리는 <strong>본질에 집중</strong>합니다.<br />
              불필요한 것을 제거하고<br />
              진정으로 중요한 것만 남깁니다.
            </h2>
            <p>
              2015년 설립된 FORM은 서울을 기반으로 국내외 기업들과 협업하고 있습니다.
              네이버, 카카오, 삼성, LINE 등과 함께 디지털 경험을 만들어왔습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container contact-container">
          <div className="contact-content">
            <h2>
              새로운 프로젝트가<br />
              <span className="accent">있으신가요?</span>
            </h2>
            <p>
              프로젝트에 대해 이야기 나눠보고 싶습니다.<br />
              편하게 연락 주세요.
            </p>
            <a href="mailto:hello@form.studio" className="btn btn-primary">Start a Project</a>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <p className="contact-item-label">Email</p>
              <p className="contact-item-value"><a href="mailto:hello@form.studio">hello@form.studio</a></p>
            </div>
            <div className="contact-item">
              <p className="contact-item-label">Phone</p>
              <p className="contact-item-value">02-1234-5678</p>
            </div>
            <div className="contact-item">
              <p className="contact-item-label">Location</p>
              <p className="contact-item-value">Seoul, South Korea</p>
            </div>
            <div className="contact-item">
              <p className="contact-item-label">Social</p>
              <p className="contact-item-value">
                <a href="#">Instagram</a> · <a href="#">Behance</a> · <a href="#">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p className="footer-left">© 2024 FORM. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}

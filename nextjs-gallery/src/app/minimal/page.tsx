"use client";

import Link from "next/link";

export default function MinimalPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --black: #0A0A0A;
          --grey-900: #171717;
          --grey-800: #262626;
          --grey-700: #404040;
          --grey-600: #525252;
          --grey-500: #737373;
          --grey-400: #A3A3A3;
          --grey-300: #D4D4D4;
          --grey-200: #E5E5E5;
          --grey-100: #F5F5F5;
          --white: #FFFFFF;

          --accent: #E53935;

          --space-1: 4px;
          --space-2: 8px;
          --space-3: 12px;
          --space-4: 16px;
          --space-5: 24px;
          --space-6: 32px;
          --space-7: 48px;
          --space-8: 80px;
          --space-9: 120px;
          --space-10: 200px;

          --radius: 0;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--white);
          color: var(--grey-900);
          line-height: 1.6;
          font-weight: 400;
        }

        .minimal-nav {
          padding: var(--space-5) var(--space-7);
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .minimal-logo {
          font-size: 18px;
          font-weight: 600;
          color: var(--black);
          letter-spacing: -0.5px;
        }

        .minimal-nav-links {
          display: flex;
          gap: var(--space-7);
          list-style: none;
        }

        .minimal-nav-links a {
          color: var(--grey-500);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: color 0.2s;
        }

        .minimal-nav-links a:hover {
          color: var(--black);
        }

        .minimal-btn {
          padding: var(--space-3) var(--space-5);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-block;
          border: none;
        }

        .minimal-btn-primary {
          background: var(--black);
          color: var(--white);
        }

        .minimal-btn-primary:hover {
          background: var(--grey-800);
        }

        .minimal-btn-text {
          background: none;
          color: var(--black);
          padding: 0;
        }

        .minimal-btn-text:hover {
          color: var(--accent);
        }

        .minimal-hero {
          padding: var(--space-10) var(--space-7);
          max-width: 1400px;
          margin: 0 auto;
        }

        .minimal-hero h1 {
          font-size: 72px;
          font-weight: 300;
          color: var(--black);
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: var(--space-6);
        }

        .minimal-hero h1 span {
          color: var(--accent);
        }

        .minimal-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-9);
          align-items: end;
        }

        .minimal-hero p {
          font-size: 16px;
          color: var(--grey-500);
          max-width: 400px;
          line-height: 1.8;
          font-weight: 300;
        }

        .minimal-hero-actions {
          display: flex;
          gap: var(--space-5);
          margin-top: var(--space-6);
        }

        .minimal-divider {
          width: 100%;
          height: 1px;
          background: var(--grey-200);
        }

        .minimal-services {
          padding: var(--space-9) var(--space-7);
          max-width: 1400px;
          margin: 0 auto;
        }

        .minimal-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: var(--space-8);
        }

        .minimal-section-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--grey-400);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .minimal-section-title {
          font-size: 14px;
          font-weight: 400;
          color: var(--grey-500);
        }

        .minimal-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--grey-200);
          border-left: 1px solid var(--grey-200);
        }

        .minimal-service-card {
          padding: var(--space-7);
          border-right: 1px solid var(--grey-200);
          border-bottom: 1px solid var(--grey-200);
          transition: all 0.3s;
        }

        .minimal-service-card:hover {
          background: var(--grey-100);
        }

        .minimal-service-number {
          font-size: 12px;
          color: var(--grey-400);
          margin-bottom: var(--space-5);
        }

        .minimal-service-card h3 {
          font-size: 24px;
          font-weight: 500;
          color: var(--black);
          margin-bottom: var(--space-3);
          letter-spacing: -0.5px;
        }

        .minimal-service-card p {
          font-size: 14px;
          color: var(--grey-500);
          font-weight: 300;
          line-height: 1.7;
        }

        .minimal-work {
          padding: var(--space-9) var(--space-7);
          background: var(--grey-100);
        }

        .minimal-work-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .minimal-work-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-7);
        }

        .minimal-work-title {
          font-size: 32px;
          font-weight: 300;
          letter-spacing: -1px;
        }

        .minimal-work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-5);
        }

        .minimal-work-item {
          aspect-ratio: 16/10;
          background: var(--grey-300);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          transition: all 0.3s;
          cursor: pointer;
        }

        .minimal-work-item:hover {
          background: var(--grey-400);
        }

        .minimal-contact {
          padding: var(--space-10) var(--space-7);
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .minimal-contact h2 {
          font-size: 48px;
          font-weight: 300;
          letter-spacing: -1px;
          margin-bottom: var(--space-4);
        }

        .minimal-contact p {
          font-size: 16px;
          color: var(--grey-500);
          margin-bottom: var(--space-6);
        }

        .minimal-contact-email {
          font-size: 24px;
          color: var(--black);
          text-decoration: none;
          border-bottom: 1px solid var(--grey-300);
          padding-bottom: var(--space-1);
          transition: all 0.2s;
        }

        .minimal-contact-email:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .minimal-footer {
          padding: var(--space-7) var(--space-7);
          border-top: 1px solid var(--grey-200);
        }

        .minimal-footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .minimal-footer-left {
          font-size: 14px;
          color: var(--grey-400);
        }

        .minimal-footer-links {
          display: flex;
          gap: var(--space-6);
        }

        .minimal-footer-links a {
          font-size: 14px;
          color: var(--grey-500);
          text-decoration: none;
        }

        .minimal-footer-links a:hover {
          color: var(--black);
        }

        .minimal-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: var(--black);
          color: var(--white);
          padding: var(--space-3) var(--space-5);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          z-index: 100;
        }

        .minimal-back-link:hover {
          background: var(--accent);
        }

        @media (max-width: 1024px) {
          .minimal-services-grid { grid-template-columns: 1fr; }
          .minimal-hero-content { grid-template-columns: 1fr; }
          .minimal-work-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .minimal-hero h1 { font-size: 48px; }
          .minimal-nav-links { display: none; }
        }
      `}</style>

      <nav className="minimal-nav">
        <div className="minimal-logo">FORM.</div>
        <ul className="minimal-nav-links">
          <li><a href="#">Work</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" className="minimal-btn minimal-btn-primary">문의하기</a>
      </nav>

      <section className="minimal-hero">
        <h1>우리는 브랜드의<br /><span>본질</span>을 디자인합니다</h1>
        <div className="minimal-hero-content">
          <div></div>
          <div>
            <p>
              FORM.은 브랜딩, 디지털 프로덕트, 공간 디자인을 아우르는 크리에이티브 스튜디오입니다. 불필요한 것을 덜어내고 핵심에 집중합니다.
            </p>
            <div className="minimal-hero-actions">
              <a href="#" className="minimal-btn minimal-btn-primary">프로젝트 문의</a>
              <a href="#" className="minimal-btn minimal-btn-text">작업 보기 →</a>
            </div>
          </div>
        </div>
      </section>

      <div className="minimal-divider"></div>

      <section className="minimal-services">
        <div className="minimal-section-header">
          <span className="minimal-section-label">Services</span>
          <span className="minimal-section-title">우리가 하는 일</span>
        </div>
        <div className="minimal-services-grid">
          <div className="minimal-service-card">
            <div className="minimal-service-number">01</div>
            <h3>Brand Identity</h3>
            <p>로고, 컬러 시스템, 타이포그래피부터 브랜드 가이드라인까지. 일관된 브랜드 경험을 설계합니다.</p>
          </div>
          <div className="minimal-service-card">
            <div className="minimal-service-number">02</div>
            <h3>Digital Product</h3>
            <p>웹사이트, 앱, 대시보드. 사용자 중심의 디지털 프로덕트를 디자인하고 개발합니다.</p>
          </div>
          <div className="minimal-service-card">
            <div className="minimal-service-number">03</div>
            <h3>Space Design</h3>
            <p>오피스, 리테일, 전시 공간. 브랜드의 철학이 담긴 공간 경험을 만들어냅니다.</p>
          </div>
        </div>
      </section>

      <section className="minimal-work">
        <div className="minimal-work-container">
          <div className="minimal-work-header">
            <h2 className="minimal-work-title">Selected Work</h2>
            <a href="#" className="minimal-btn minimal-btn-text">전체 보기 →</a>
          </div>
          <div className="minimal-work-grid">
            <div className="minimal-work-item">Project 01</div>
            <div className="minimal-work-item">Project 02</div>
            <div className="minimal-work-item">Project 03</div>
            <div className="minimal-work-item">Project 04</div>
          </div>
        </div>
      </section>

      <section className="minimal-contact">
        <h2>함께 일해요</h2>
        <p>새로운 프로젝트에 대해 이야기 나눠요</p>
        <a href="mailto:hello@form.studio" className="minimal-contact-email">hello@form.studio</a>
      </section>

      <footer className="minimal-footer">
        <div className="minimal-footer-container">
          <span className="minimal-footer-left">© 2024 FORM.</span>
          <div className="minimal-footer-links">
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>

      <Link href="/" className="minimal-back-link">← 갤러리로</Link>
    </>
  );
}

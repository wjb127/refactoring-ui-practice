"use client";

import Link from "next/link";

export default function ElegantPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500&display=swap');

        :root {
          --gold-100: #FDF6E3;
          --gold-200: #F5E6C8;
          --gold-300: #E8D5A3;
          --gold-400: #D4AF37;
          --gold-500: #C9A227;
          --gold-600: #B8860B;

          --dark-100: #2D2D2D;
          --dark-200: #1F1F1F;
          --dark-300: #1A1A1A;
          --dark-400: #141414;
          --dark-500: #0A0A0A;

          --cream: #FAF8F5;
          --text-light: #8A8A8A;
          --text-dark: #1A1A1A;

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

          --radius: 0;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Montserrat', sans-serif;
          background: var(--cream);
          color: var(--text-dark);
          line-height: 1.8;
        }

        .elegant-nav {
          padding: var(--space-5) var(--space-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .elegant-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: var(--text-dark);
          letter-spacing: 4px;
        }

        .elegant-nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .elegant-nav-links a {
          color: var(--text-light);
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: color 0.3s;
        }

        .elegant-nav-links a:hover {
          color: var(--gold-500);
        }

        .elegant-btn {
          padding: var(--space-3) var(--space-5);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }

        .elegant-btn-primary {
          background: var(--dark-300);
          color: white;
          border: 1px solid var(--dark-300);
        }

        .elegant-btn-primary:hover {
          background: var(--gold-500);
          border-color: var(--gold-500);
        }

        .elegant-btn-outline {
          background: transparent;
          color: var(--text-dark);
          border: 1px solid var(--dark-300);
        }

        .elegant-btn-outline:hover {
          background: var(--dark-300);
          color: white;
        }

        .elegant-hero {
          padding: var(--space-10) var(--space-6);
          text-align: center;
          background: linear-gradient(180deg, var(--cream) 0%, white 100%);
        }

        .elegant-hero-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold-500);
          margin-bottom: var(--space-5);
        }

        .elegant-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 400;
          color: var(--text-dark);
          margin-bottom: var(--space-5);
          line-height: 1.1;
          letter-spacing: 2px;
        }

        .elegant-hero p {
          font-size: 15px;
          color: var(--text-light);
          max-width: 500px;
          margin: 0 auto var(--space-7);
          font-weight: 300;
          line-height: 2;
        }

        .elegant-hero-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
        }

        .elegant-divider {
          width: 60px;
          height: 1px;
          background: var(--gold-400);
          margin: var(--space-9) auto;
        }

        .elegant-collection {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .elegant-section-header {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .elegant-section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold-500);
          margin-bottom: var(--space-3);
        }

        .elegant-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 400;
          color: var(--text-dark);
          letter-spacing: 1px;
        }

        .elegant-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          max-width: 1200px;
          margin: 0 auto;
        }

        .elegant-product-card {
          text-align: center;
          padding: var(--space-6);
          transition: all 0.3s;
        }

        .elegant-product-card:hover {
          background: var(--cream);
        }

        .elegant-product-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, var(--dark-200) 0%, var(--dark-400) 100%);
          margin-bottom: var(--space-5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
        }

        .elegant-product-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: var(--space-2);
          letter-spacing: 1px;
        }

        .elegant-product-card p {
          font-size: 13px;
          color: var(--text-light);
          margin-bottom: var(--space-3);
        }

        .elegant-product-price {
          font-size: 14px;
          font-weight: 500;
          color: var(--gold-500);
          letter-spacing: 1px;
        }

        .elegant-about {
          padding: var(--space-10) var(--space-6);
          background: var(--dark-300);
          color: white;
          text-align: center;
        }

        .elegant-about h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 400;
          margin-bottom: var(--space-5);
          letter-spacing: 2px;
        }

        .elegant-about p {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          max-width: 600px;
          margin: 0 auto var(--space-7);
          font-weight: 300;
          line-height: 2;
        }

        .elegant-about .elegant-btn-outline {
          color: white;
          border-color: rgba(255,255,255,0.3);
        }

        .elegant-about .elegant-btn-outline:hover {
          background: var(--gold-500);
          border-color: var(--gold-500);
        }

        .elegant-footer {
          padding: var(--space-8) var(--space-6);
          background: var(--dark-500);
          color: white;
          text-align: center;
        }

        .elegant-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 600;
          letter-spacing: 4px;
          margin-bottom: var(--space-5);
        }

        .elegant-footer-links {
          display: flex;
          justify-content: center;
          gap: var(--space-6);
          list-style: none;
          margin-bottom: var(--space-5);
        }

        .elegant-footer-links a {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .elegant-footer-copyright {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 1px;
        }

        .elegant-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: var(--dark-300);
          color: white;
          padding: var(--space-3) var(--space-5);
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.3s;
          z-index: 100;
        }

        .elegant-back-link:hover {
          background: var(--gold-500);
        }

        @media (max-width: 1024px) {
          .elegant-products-grid { grid-template-columns: 1fr; max-width: 400px; }
        }

        @media (max-width: 768px) {
          .elegant-hero h1 { font-size: 48px; }
          .elegant-nav-links { display: none; }
        }
      `}</style>

      <nav className="elegant-nav">
        <div className="elegant-logo">LUMIÈRE</div>
        <ul className="elegant-nav-links">
          <li><a href="#">컬렉션</a></li>
          <li><a href="#">헤리티지</a></li>
          <li><a href="#">매장 안내</a></li>
          <li><a href="#">서비스</a></li>
        </ul>
        <a href="#" className="elegant-btn elegant-btn-outline">예약 상담</a>
      </nav>

      <section className="elegant-hero">
        <div className="elegant-hero-label">Since 1892</div>
        <h1>시간을 담는 예술</h1>
        <p>
          130년 전통의 스위스 장인 정신으로 완성된 타임피스.
          세대를 넘어 전해지는 가치를 경험하십시오.
        </p>
        <div className="elegant-hero-actions">
          <a href="#" className="elegant-btn elegant-btn-primary">컬렉션 보기</a>
          <a href="#" className="elegant-btn elegant-btn-outline">브랜드 스토리</a>
        </div>
      </section>

      <div className="elegant-divider"></div>

      <section className="elegant-collection">
        <div className="elegant-section-header">
          <div className="elegant-section-label">New Collection</div>
          <h2 className="elegant-section-title">2024 Signature</h2>
        </div>
        <div className="elegant-products-grid">
          <div className="elegant-product-card">
            <div className="elegant-product-image">⌚</div>
            <h3>Éternité</h3>
            <p>플래티넘 케이스, 문페이즈 컴플리케이션</p>
            <span className="elegant-product-price">₩ 128,000,000</span>
          </div>
          <div className="elegant-product-card">
            <div className="elegant-product-image">⌚</div>
            <h3>Élégance</h3>
            <p>로즈골드 케이스, 퍼페추얼 캘린더</p>
            <span className="elegant-product-price">₩ 85,000,000</span>
          </div>
          <div className="elegant-product-card">
            <div className="elegant-product-image">⌚</div>
            <h3>Classique</h3>
            <p>화이트골드 케이스, 미닛 리피터</p>
            <span className="elegant-product-price">₩ 156,000,000</span>
          </div>
        </div>
      </section>

      <section className="elegant-about">
        <h2>장인의 손끝에서 탄생하다</h2>
        <p>
          각각의 타임피스는 숙련된 마스터 워치메이커의 손에서 800시간 이상의 정성을 거쳐 완성됩니다.
          세상에 단 하나뿐인 시계를 소유하십시오.
        </p>
        <a href="#" className="elegant-btn elegant-btn-outline">제작 과정 보기</a>
      </section>

      <footer className="elegant-footer">
        <div className="elegant-footer-logo">LUMIÈRE</div>
        <ul className="elegant-footer-links">
          <li><a href="#">개인정보처리방침</a></li>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">고객센터</a></li>
        </ul>
        <p className="elegant-footer-copyright">© 2024 LUMIÈRE. All Rights Reserved.</p>
      </footer>

      <Link href="/" className="elegant-back-link">← 갤러리로</Link>
    </>
  );
}

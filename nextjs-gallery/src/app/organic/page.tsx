"use client";

import Link from "next/link";

export default function OrganicPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap');

        :root {
          /* Palette 12 - Green Primary */
          --green-050: #E3F9E5;
          --green-100: #C1EAC5;
          --green-200: #A3D9A5;
          --green-300: #7BC47F;
          --green-400: #57AE5B;
          --green-500: #3F9142;
          --green-600: #2F8132;
          --green-700: #207227;
          --green-800: #0E5814;
          --green-900: #05400A;

          /* Warm Neutrals */
          --grey-050: #FAF9F7;
          --grey-100: #E8E6E1;
          --grey-200: #D3D0C9;
          --grey-300: #B8B2A7;
          --grey-400: #A39B8B;
          --grey-500: #857B6B;
          --grey-600: #6B6152;
          --grey-700: #544C40;
          --grey-800: #3D382E;
          --grey-900: #27241D;

          /* Earth Accents */
          --earth-brown: #8B7355;
          --earth-terracotta: #C67B4E;
          --earth-cream: #F5F1E8;

          /* Spacing */
          --space-1: 4px;
          --space-2: 8px;
          --space-3: 12px;
          --space-4: 16px;
          --space-5: 24px;
          --space-6: 32px;
          --space-7: 48px;
          --space-8: 64px;
          --space-9: 96px;
          --space-10: 128px;

          /* Border Radius - Medium for organic feel */
          --radius-sm: 8px;
          --radius-md: 12px;
          --radius-lg: 20px;
          --radius-xl: 32px;

          /* Shadows - Soft and warm */
          --shadow-sm: 0 2px 8px rgba(39, 36, 29, 0.06);
          --shadow-md: 0 4px 16px rgba(39, 36, 29, 0.08);
          --shadow-lg: 0 8px 32px rgba(39, 36, 29, 0.12);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Open Sans', sans-serif;
          background: var(--grey-050);
          color: var(--grey-800);
          line-height: 1.7;
        }

        .organic-nav {
          padding: var(--space-5) var(--space-6);
          background: var(--earth-cream);
          border-bottom: 1px solid var(--grey-200);
        }

        .organic-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .organic-logo {
          font-family: 'Lora', serif;
          font-size: 26px;
          font-weight: 600;
          color: var(--green-700);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .organic-logo-icon {
          font-size: 28px;
        }

        .organic-nav-links {
          display: flex;
          gap: var(--space-7);
          list-style: none;
        }

        .organic-nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .organic-nav-links a:hover {
          color: var(--green-600);
        }

        .organic-btn {
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .organic-btn-primary {
          background: var(--green-600);
          color: white;
        }

        .organic-btn-primary:hover {
          background: var(--green-700);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .organic-btn-secondary {
          background: white;
          color: var(--green-700);
          border: 2px solid var(--green-200);
        }

        .organic-btn-secondary:hover {
          border-color: var(--green-400);
          background: var(--green-050);
        }

        .organic-hero {
          padding: var(--space-10) var(--space-6);
          background: linear-gradient(180deg, var(--earth-cream) 0%, var(--grey-050) 100%);
          position: relative;
          overflow: hidden;
        }

        .organic-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .organic-hero-label {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--green-100);
          color: var(--green-700);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-xl);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: var(--space-5);
        }

        .organic-hero h1 {
          font-family: 'Lora', serif;
          font-size: 52px;
          font-weight: 600;
          color: var(--grey-900);
          margin-bottom: var(--space-5);
          line-height: 1.2;
        }

        .organic-hero h1 span {
          color: var(--green-600);
        }

        .organic-hero p {
          font-size: 18px;
          color: var(--grey-600);
          margin-bottom: var(--space-6);
          line-height: 1.8;
        }

        .organic-hero-actions {
          display: flex;
          gap: var(--space-4);
        }

        .organic-hero-image {
          aspect-ratio: 1;
          background: linear-gradient(135deg, var(--green-200) 0%, var(--green-400) 100%);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 120px;
          box-shadow: var(--shadow-lg);
        }

        .organic-benefits {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .organic-section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .organic-section-header {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .organic-section-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--green-600);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: var(--space-3);
        }

        .organic-section-title {
          font-family: 'Lora', serif;
          font-size: 40px;
          font-weight: 600;
          color: var(--grey-900);
          margin-bottom: var(--space-4);
        }

        .organic-section-desc {
          font-size: 17px;
          color: var(--grey-500);
          max-width: 600px;
          margin: 0 auto;
        }

        .organic-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .organic-benefit-card {
          background: var(--grey-050);
          padding: var(--space-7);
          border-radius: var(--radius-lg);
          text-align: center;
          transition: all 0.3s;
          border: 1px solid transparent;
        }

        .organic-benefit-card:hover {
          background: white;
          border-color: var(--green-200);
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }

        .organic-benefit-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto var(--space-5);
          background: var(--green-100);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .organic-benefit-card h3 {
          font-family: 'Lora', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--grey-800);
          margin-bottom: var(--space-3);
        }

        .organic-benefit-card p {
          font-size: 15px;
          color: var(--grey-500);
          line-height: 1.7;
        }

        .organic-products {
          padding: var(--space-9) var(--space-6);
          background: var(--earth-cream);
        }

        .organic-products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-5);
        }

        .organic-product-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s;
        }

        .organic-product-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        .organic-product-image {
          aspect-ratio: 1;
          background: var(--green-100);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
        }

        .organic-product-info {
          padding: var(--space-5);
        }

        .organic-product-badge {
          display: inline-block;
          background: var(--green-100);
          color: var(--green-700);
          font-size: 11px;
          font-weight: 600;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
          margin-bottom: var(--space-2);
        }

        .organic-product-card h3 {
          font-family: 'Lora', serif;
          font-size: 18px;
          font-weight: 600;
          color: var(--grey-800);
          margin-bottom: var(--space-1);
        }

        .organic-product-price {
          font-size: 16px;
          font-weight: 600;
          color: var(--green-600);
        }

        .organic-cta {
          padding: var(--space-10) var(--space-6);
          background: var(--green-700);
          text-align: center;
          color: white;
          position: relative;
        }

        .organic-cta::before {
          content: '🌿';
          position: absolute;
          font-size: 200px;
          opacity: 0.1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .organic-cta h2 {
          font-family: 'Lora', serif;
          font-size: 40px;
          font-weight: 600;
          margin-bottom: var(--space-4);
          position: relative;
        }

        .organic-cta p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: var(--space-6);
          position: relative;
        }

        .organic-cta .organic-btn-secondary {
          background: white;
          color: var(--green-700);
          border: none;
          position: relative;
        }

        .organic-footer {
          padding: var(--space-8) var(--space-6);
          background: var(--grey-900);
          color: white;
        }

        .organic-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-8);
        }

        .organic-footer-brand p {
          color: var(--grey-400);
          font-size: 14px;
          margin-top: var(--space-3);
          line-height: 1.7;
        }

        .organic-footer h4 {
          font-family: 'Lora', serif;
          font-size: 16px;
          margin-bottom: var(--space-4);
        }

        .organic-footer ul {
          list-style: none;
        }

        .organic-footer li {
          margin-bottom: var(--space-2);
        }

        .organic-footer a {
          color: var(--grey-400);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .organic-footer a:hover {
          color: var(--green-400);
        }

        .organic-footer-bottom {
          max-width: 1200px;
          margin: var(--space-7) auto 0;
          padding-top: var(--space-6);
          border-top: 1px solid var(--grey-700);
          text-align: center;
          font-size: 13px;
          color: var(--grey-500);
        }

        .organic-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: var(--green-600);
          color: white;
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-md);
          text-decoration: none;
          font-weight: 600;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s;
          z-index: 100;
        }

        .organic-back-link:hover {
          background: var(--green-700);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .organic-hero-container { grid-template-columns: 1fr; }
          .organic-hero-image { display: none; }
          .organic-benefits-grid { grid-template-columns: 1fr; }
          .organic-products-grid { grid-template-columns: repeat(2, 1fr); }
          .organic-footer-container { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .organic-hero h1 { font-size: 36px; }
          .organic-nav-links { display: none; }
          .organic-products-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav className="organic-nav">
        <div className="organic-nav-container">
          <div className="organic-logo">
            <span className="organic-logo-icon">🌱</span>
            그린마켓
          </div>
          <ul className="organic-nav-links">
            <li><a href="#">제품</a></li>
            <li><a href="#">농장소개</a></li>
            <li><a href="#">스토리</a></li>
            <li><a href="#">커뮤니티</a></li>
          </ul>
          <a href="#" className="organic-btn organic-btn-primary">장바구니</a>
        </div>
      </nav>

      <section className="organic-hero">
        <div className="organic-hero-container">
          <div>
            <span className="organic-hero-label">🌿 100% 유기농 인증</span>
            <h1>자연에서 온<br /><span>건강한 먹거리</span></h1>
            <p>
              화학비료와 농약 없이 자연 그대로 재배한 유기농 채소와 과일을
              농장에서 식탁까지 신선하게 배송해 드립니다.
            </p>
            <div className="organic-hero-actions">
              <a href="#" className="organic-btn organic-btn-primary">제품 둘러보기</a>
              <a href="#" className="organic-btn organic-btn-secondary">농장 이야기</a>
            </div>
          </div>
          <div className="organic-hero-image">🥬</div>
        </div>
      </section>

      <section className="organic-benefits">
        <div className="organic-section-container">
          <div className="organic-section-header">
            <div className="organic-section-label">Why Organic</div>
            <h2 className="organic-section-title">유기농을 선택하는 이유</h2>
            <p className="organic-section-desc">건강한 땅에서 자란 건강한 작물, 자연과 사람 모두를 생각합니다</p>
          </div>

          <div className="organic-benefits-grid">
            <div className="organic-benefit-card">
              <div className="organic-benefit-icon">🌍</div>
              <h3>지속 가능한 농업</h3>
              <p>토양의 건강을 유지하고 생태계를 보호하는 친환경 농법을 실천합니다.</p>
            </div>
            <div className="organic-benefit-card">
              <div className="organic-benefit-icon">💚</div>
              <h3>풍부한 영양</h3>
              <p>자연 그대로 자란 유기농 작물은 더 풍부한 비타민과 미네랄을 함유합니다.</p>
            </div>
            <div className="organic-benefit-card">
              <div className="organic-benefit-icon">🚚</div>
              <h3>산지 직송</h3>
              <p>수확 후 24시간 이내 배송으로 신선함을 그대로 전달해 드립니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="organic-products">
        <div className="organic-section-container">
          <div className="organic-section-header">
            <div className="organic-section-label">Best Sellers</div>
            <h2 className="organic-section-title">이번 주 인기 상품</h2>
          </div>

          <div className="organic-products-grid">
            <div className="organic-product-card">
              <div className="organic-product-image">🥕</div>
              <div className="organic-product-info">
                <span className="organic-product-badge">유기농</span>
                <h3>당근 1kg</h3>
                <span className="organic-product-price">₩8,900</span>
              </div>
            </div>
            <div className="organic-product-card">
              <div className="organic-product-image">🥬</div>
              <div className="organic-product-info">
                <span className="organic-product-badge">무농약</span>
                <h3>배추 1포기</h3>
                <span className="organic-product-price">₩12,500</span>
              </div>
            </div>
            <div className="organic-product-card">
              <div className="organic-product-image">🍎</div>
              <div className="organic-product-info">
                <span className="organic-product-badge">유기농</span>
                <h3>사과 2kg</h3>
                <span className="organic-product-price">₩24,000</span>
              </div>
            </div>
            <div className="organic-product-card">
              <div className="organic-product-image">🥚</div>
              <div className="organic-product-info">
                <span className="organic-product-badge">동물복지</span>
                <h3>자연란 30구</h3>
                <span className="organic-product-price">₩15,800</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="organic-cta">
        <h2>자연의 맛을 경험하세요</h2>
        <p>첫 주문 시 15% 할인 + 무료 배송</p>
        <a href="#" className="organic-btn organic-btn-secondary">지금 시작하기</a>
      </section>

      <footer className="organic-footer">
        <div className="organic-footer-container">
          <div className="organic-footer-brand">
            <div className="organic-logo" style={{color: 'white'}}>
              <span className="organic-logo-icon">🌱</span>
              그린마켓
            </div>
            <p>건강한 먹거리로 건강한 삶을. 농부의 정성이 담긴 유기농 식품을 전합니다.</p>
          </div>
          <div>
            <h4>제품</h4>
            <ul>
              <li><a href="#">채소</a></li>
              <li><a href="#">과일</a></li>
              <li><a href="#">정육/계란</a></li>
              <li><a href="#">가공식품</a></li>
            </ul>
          </div>
          <div>
            <h4>고객지원</h4>
            <ul>
              <li><a href="#">자주 묻는 질문</a></li>
              <li><a href="#">배송 안내</a></li>
              <li><a href="#">교환/환불</a></li>
              <li><a href="#">1:1 문의</a></li>
            </ul>
          </div>
          <div>
            <h4>회사</h4>
            <ul>
              <li><a href="#">회사 소개</a></li>
              <li><a href="#">농장 소개</a></li>
              <li><a href="#">채용</a></li>
              <li><a href="#">블로그</a></li>
            </ul>
          </div>
        </div>
        <div className="organic-footer-bottom">
          © 2024 그린마켓. 자연과 함께 건강하게.
        </div>
      </footer>

      <Link href="/" className="organic-back-link">← 갤러리로</Link>
    </>
  );
}

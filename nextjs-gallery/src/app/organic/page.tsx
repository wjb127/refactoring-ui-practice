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

        /* How It Works Section */
        .organic-process {
          padding: var(--space-9) var(--space-6);
          background: var(--grey-050);
        }

        .organic-process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
          position: relative;
        }

        .organic-process-steps::before {
          content: '';
          position: absolute;
          top: 60px;
          left: 15%;
          right: 15%;
          height: 2px;
          background: linear-gradient(90deg, var(--green-200), var(--green-400), var(--green-200));
          z-index: 0;
        }

        .organic-step {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .organic-step-number {
          width: 48px;
          height: 48px;
          background: var(--green-600);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Lora', serif;
          font-size: 20px;
          font-weight: 600;
          margin: 0 auto var(--space-5);
          box-shadow: var(--shadow-md);
        }

        .organic-step-icon {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          margin: 0 auto var(--space-4);
          box-shadow: var(--shadow-sm);
          border: 2px solid var(--green-100);
        }

        .organic-step h3 {
          font-family: 'Lora', serif;
          font-size: 18px;
          font-weight: 600;
          color: var(--grey-800);
          margin-bottom: var(--space-2);
        }

        .organic-step p {
          font-size: 14px;
          color: var(--grey-500);
          line-height: 1.6;
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

        /* Farm Story Section */
        .organic-story {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .organic-story-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .organic-story-image {
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, var(--green-100) 0%, var(--green-300) 100%);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 100px;
          position: relative;
          overflow: hidden;
        }

        .organic-story-image::before {
          content: '🌾';
          position: absolute;
          font-size: 60px;
          bottom: 20px;
          left: 30px;
          opacity: 0.5;
        }

        .organic-story-image::after {
          content: '☀️';
          position: absolute;
          font-size: 40px;
          top: 20px;
          right: 30px;
          opacity: 0.6;
        }

        .organic-story-content h2 {
          font-family: 'Lora', serif;
          font-size: 36px;
          font-weight: 600;
          color: var(--grey-900);
          margin-bottom: var(--space-5);
        }

        .organic-story-content p {
          font-size: 16px;
          color: var(--grey-600);
          line-height: 1.8;
          margin-bottom: var(--space-5);
        }

        .organic-story-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
          margin-top: var(--space-6);
        }

        .organic-stat {
          text-align: center;
          padding: var(--space-4);
          background: var(--grey-050);
          border-radius: var(--radius-md);
        }

        .organic-stat-number {
          font-family: 'Lora', serif;
          font-size: 32px;
          font-weight: 700;
          color: var(--green-600);
          margin-bottom: var(--space-1);
        }

        .organic-stat-label {
          font-size: 13px;
          color: var(--grey-500);
        }

        /* Testimonials Section */
        .organic-testimonials {
          padding: var(--space-9) var(--space-6);
          background: var(--green-050);
        }

        .organic-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .organic-testimonial-card {
          background: white;
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          position: relative;
        }

        .organic-testimonial-card::before {
          content: '"';
          font-family: 'Lora', serif;
          font-size: 72px;
          color: var(--green-200);
          position: absolute;
          top: 10px;
          left: 20px;
          line-height: 1;
        }

        .organic-testimonial-content {
          font-size: 15px;
          color: var(--grey-600);
          line-height: 1.8;
          margin-bottom: var(--space-5);
          position: relative;
          z-index: 1;
          padding-top: var(--space-5);
        }

        .organic-testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .organic-testimonial-avatar {
          width: 48px;
          height: 48px;
          background: var(--green-100);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .organic-testimonial-name {
          font-family: 'Lora', serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--grey-800);
        }

        .organic-testimonial-role {
          font-size: 13px;
          color: var(--grey-500);
        }

        /* Subscription Plans Section */
        .organic-subscription {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .organic-plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .organic-plan-card {
          background: var(--grey-050);
          border-radius: var(--radius-lg);
          padding: var(--space-7);
          text-align: center;
          transition: all 0.3s;
          border: 2px solid transparent;
        }

        .organic-plan-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .organic-plan-card.featured {
          background: var(--green-700);
          color: white;
          transform: scale(1.05);
        }

        .organic-plan-card.featured:hover {
          transform: scale(1.05) translateY(-4px);
        }

        .organic-plan-icon {
          font-size: 48px;
          margin-bottom: var(--space-4);
        }

        .organic-plan-name {
          font-family: 'Lora', serif;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: var(--space-2);
        }

        .organic-plan-card.featured .organic-plan-name {
          color: white;
        }

        .organic-plan-desc {
          font-size: 14px;
          color: var(--grey-500);
          margin-bottom: var(--space-5);
        }

        .organic-plan-card.featured .organic-plan-desc {
          color: var(--green-100);
        }

        .organic-plan-price {
          font-family: 'Lora', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--green-600);
          margin-bottom: var(--space-2);
        }

        .organic-plan-card.featured .organic-plan-price {
          color: white;
        }

        .organic-plan-period {
          font-size: 14px;
          color: var(--grey-500);
          margin-bottom: var(--space-5);
        }

        .organic-plan-card.featured .organic-plan-period {
          color: var(--green-200);
        }

        .organic-plan-features {
          list-style: none;
          margin-bottom: var(--space-6);
          text-align: left;
        }

        .organic-plan-features li {
          padding: var(--space-2) 0;
          font-size: 14px;
          color: var(--grey-600);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .organic-plan-card.featured .organic-plan-features li {
          color: var(--green-100);
        }

        .organic-plan-features li::before {
          content: '✓';
          color: var(--green-500);
          font-weight: 600;
        }

        .organic-plan-card.featured .organic-plan-features li::before {
          color: var(--green-200);
        }

        .organic-plan-card .organic-btn-primary {
          width: 100%;
        }

        .organic-plan-card.featured .organic-btn-primary {
          background: white;
          color: var(--green-700);
        }

        .organic-plan-card.featured .organic-btn-primary:hover {
          background: var(--green-050);
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
          .organic-process-steps { grid-template-columns: repeat(2, 1fr); }
          .organic-process-steps::before { display: none; }
          .organic-story-container { grid-template-columns: 1fr; }
          .organic-testimonials-grid { grid-template-columns: 1fr; }
          .organic-plans-grid { grid-template-columns: 1fr; }
          .organic-plan-card.featured { transform: none; }
          .organic-plan-card.featured:hover { transform: translateY(-4px); }
        }

        @media (max-width: 768px) {
          .organic-hero h1 { font-size: 36px; }
          .organic-nav-links { display: none; }
          .organic-products-grid { grid-template-columns: 1fr; }
          .organic-story-stats { grid-template-columns: 1fr; }
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
            <li><a href="#">정기배송</a></li>
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

      {/* How It Works Section */}
      <section className="organic-process">
        <div className="organic-section-container">
          <div className="organic-section-header">
            <div className="organic-section-label">Farm to Table</div>
            <h2 className="organic-section-title">농장에서 식탁까지</h2>
            <p className="organic-section-desc">신선한 유기농 식재료가 여러분의 식탁에 오르기까지의 과정입니다</p>
          </div>

          <div className="organic-process-steps">
            <div className="organic-step">
              <div className="organic-step-number">1</div>
              <div className="organic-step-icon">🌱</div>
              <h3>유기농 재배</h3>
              <p>화학비료 없이 자연 그대로 정성껏 재배합니다</p>
            </div>
            <div className="organic-step">
              <div className="organic-step-number">2</div>
              <div className="organic-step-icon">👨‍🌾</div>
              <h3>당일 수확</h3>
              <p>주문 후 농부가 직접 아침에 수확합니다</p>
            </div>
            <div className="organic-step">
              <div className="organic-step-number">3</div>
              <div className="organic-step-icon">📦</div>
              <h3>신선 포장</h3>
              <p>냉장 상태로 신선도를 유지하며 포장합니다</p>
            </div>
            <div className="organic-step">
              <div className="organic-step-number">4</div>
              <div className="organic-step-icon">🏠</div>
              <h3>당일 배송</h3>
              <p>24시간 이내 여러분의 식탁에 도착합니다</p>
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

      {/* Farm Story Section */}
      <section className="organic-story">
        <div className="organic-story-container">
          <div className="organic-story-image">🧑‍🌾</div>
          <div className="organic-story-content">
            <h2>우리 농장 이야기</h2>
            <p>
              그린마켓은 2015년 강원도 홍천의 작은 유기농 농장에서 시작되었습니다.
              처음에는 가족들만을 위해 키우던 채소였지만, 건강한 먹거리를 찾는
              이웃들의 요청으로 조금씩 규모를 키워왔습니다.
            </p>
            <p>
              지금은 전국 50여 개의 파트너 농가와 함께 유기농 인증을 받은
              신선한 농산물을 전국 각지의 가정으로 배송하고 있습니다.
              자연과 함께, 건강하게 - 이것이 우리의 약속입니다.
            </p>
            <div className="organic-story-stats">
              <div className="organic-stat">
                <div className="organic-stat-number">50+</div>
                <div className="organic-stat-label">파트너 농가</div>
              </div>
              <div className="organic-stat">
                <div className="organic-stat-number">12만</div>
                <div className="organic-stat-label">월간 배송</div>
              </div>
              <div className="organic-stat">
                <div className="organic-stat-number">98%</div>
                <div className="organic-stat-label">고객 만족도</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="organic-testimonials">
        <div className="organic-section-container">
          <div className="organic-section-header">
            <div className="organic-section-label">Reviews</div>
            <h2 className="organic-section-title">고객님들의 이야기</h2>
            <p className="organic-section-desc">그린마켓과 함께하는 건강한 식탁의 변화를 경험해보세요</p>
          </div>

          <div className="organic-testimonials-grid">
            <div className="organic-testimonial-card">
              <p className="organic-testimonial-content">
                아이들 이유식 재료로 사용하고 있어요. 농약 걱정 없이 안심하고 먹일 수 있어서
                정말 좋습니다. 신선도도 너무 좋아요!
              </p>
              <div className="organic-testimonial-author">
                <div className="organic-testimonial-avatar">👩</div>
                <div>
                  <div className="organic-testimonial-name">김서연</div>
                  <div className="organic-testimonial-role">정기배송 6개월</div>
                </div>
              </div>
            </div>
            <div className="organic-testimonial-card">
              <p className="organic-testimonial-content">
                마트에서 사던 채소와는 비교가 안 될 정도로 맛이 달라요.
                특히 당근은 아이들이 생으로도 잘 먹을 만큼 달콤해요.
              </p>
              <div className="organic-testimonial-author">
                <div className="organic-testimonial-avatar">👨</div>
                <div>
                  <div className="organic-testimonial-name">박준혁</div>
                  <div className="organic-testimonial-role">정기배송 1년</div>
                </div>
              </div>
            </div>
            <div className="organic-testimonial-card">
              <p className="organic-testimonial-content">
                환경도 생각하고 건강도 챙기는 소비를 하고 싶었는데,
                그린마켓 덕분에 두 마리 토끼를 다 잡았어요.
              </p>
              <div className="organic-testimonial-author">
                <div className="organic-testimonial-avatar">👩‍🦱</div>
                <div>
                  <div className="organic-testimonial-name">이수민</div>
                  <div className="organic-testimonial-role">정기배송 8개월</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="organic-subscription">
        <div className="organic-section-container">
          <div className="organic-section-header">
            <div className="organic-section-label">Subscription</div>
            <h2 className="organic-section-title">정기 배송 플랜</h2>
            <p className="organic-section-desc">가정에 맞는 플랜을 선택하고 매주 신선한 유기농 식재료를 받아보세요</p>
          </div>

          <div className="organic-plans-grid">
            <div className="organic-plan-card">
              <div className="organic-plan-icon">🥗</div>
              <div className="organic-plan-name">싱글</div>
              <p className="organic-plan-desc">1~2인 가구에 적합한 소량 구성</p>
              <div className="organic-plan-price">₩29,900</div>
              <div className="organic-plan-period">월 4회 배송</div>
              <ul className="organic-plan-features">
                <li>주 1회 신선 채소 배송</li>
                <li>5~6종 채소 구성</li>
                <li>레시피 카드 제공</li>
                <li>언제든 배송 일정 변경</li>
              </ul>
              <a href="#" className="organic-btn organic-btn-primary">시작하기</a>
            </div>

            <div className="organic-plan-card featured">
              <div className="organic-plan-icon">👨‍👩‍👧</div>
              <div className="organic-plan-name">패밀리</div>
              <p className="organic-plan-desc">3~4인 가족에게 인기 있는 플랜</p>
              <div className="organic-plan-price">₩49,900</div>
              <div className="organic-plan-period">월 4회 배송</div>
              <ul className="organic-plan-features">
                <li>주 1회 신선 채소 배송</li>
                <li>8~10종 채소 구성</li>
                <li>레시피 카드 + 영양 정보</li>
                <li>월 1회 과일 보너스 박스</li>
                <li>우선 고객 서비스</li>
              </ul>
              <a href="#" className="organic-btn organic-btn-primary">가장 인기 있는 플랜</a>
            </div>

            <div className="organic-plan-card">
              <div className="organic-plan-icon">🏠</div>
              <div className="organic-plan-name">프리미엄</div>
              <p className="organic-plan-desc">모든 것을 담은 프리미엄 구성</p>
              <div className="organic-plan-price">₩79,900</div>
              <div className="organic-plan-period">월 4회 배송</div>
              <ul className="organic-plan-features">
                <li>주 1회 채소 + 과일 배송</li>
                <li>12종 이상 프리미엄 구성</li>
                <li>계란, 유제품 포함</li>
                <li>전담 영양사 상담</li>
                <li>시즌 한정 특별 상품</li>
              </ul>
              <a href="#" className="organic-btn organic-btn-primary">시작하기</a>
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

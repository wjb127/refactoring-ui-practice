"use client";

import Link from "next/link";

export default function GradientPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          /* Palette 8 - Blue Vivid */
          --blue-050: #E6F6FF;
          --blue-100: #BAE3FF;
          --blue-200: #7CC4FA;
          --blue-300: #47A3F3;
          --blue-400: #2186EB;
          --blue-500: #0967D2;
          --blue-600: #0552B5;
          --blue-700: #03449E;
          --blue-800: #01337D;
          --blue-900: #002159;

          /* Cyan Vivid */
          --cyan-050: #E1FCF8;
          --cyan-100: #C1FEF6;
          --cyan-200: #92FDF2;
          --cyan-300: #62F4EB;
          --cyan-400: #3AE7E1;
          --cyan-500: #1CD4D4;
          --cyan-600: #0FB5BA;
          --cyan-700: #099AA4;

          /* Purple for gradients */
          --purple-400: #9F7AEA;
          --purple-500: #805AD5;
          --purple-600: #6B46C1;

          /* Cool Grey */
          --grey-050: #F5F7FA;
          --grey-100: #E4E7EB;
          --grey-200: #CBD2D9;
          --grey-300: #9AA5B1;
          --grey-400: #7B8794;
          --grey-500: #616E7C;
          --grey-600: #52606D;
          --grey-700: #3E4C59;
          --grey-800: #323F4B;
          --grey-900: #1F2933;

          /* Gradients */
          --gradient-primary: linear-gradient(135deg, var(--blue-500) 0%, var(--cyan-500) 100%);
          --gradient-accent: linear-gradient(135deg, var(--purple-500) 0%, var(--blue-400) 100%);
          --gradient-soft: linear-gradient(135deg, var(--blue-050) 0%, var(--cyan-050) 100%);
          --gradient-dark: linear-gradient(135deg, var(--grey-900) 0%, var(--blue-900) 100%);

          /* Glass Effect */
          --glass-bg: rgba(255, 255, 255, 0.7);
          --glass-border: rgba(255, 255, 255, 0.4);
          --glass-shadow: 0 8px 32px rgba(9, 103, 210, 0.15);

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

          /* Border Radius - Large for modern feel */
          --radius-sm: 8px;
          --radius-md: 16px;
          --radius-lg: 24px;
          --radius-xl: 32px;
          --radius-full: 9999px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--gradient-soft);
          color: var(--grey-800);
          line-height: 1.6;
          min-height: 100vh;
        }

        .gradient-nav {
          position: fixed;
          top: var(--space-4);
          left: 50%;
          transform: translateX(-50%);
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-full);
          padding: var(--space-3) var(--space-5);
          z-index: 1000;
          box-shadow: var(--glass-shadow);
        }

        .gradient-nav-container {
          display: flex;
          align-items: center;
          gap: var(--space-6);
        }

        .gradient-logo {
          font-size: 20px;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-nav-links {
          display: flex;
          gap: var(--space-5);
          list-style: none;
        }

        .gradient-nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .gradient-nav-links a:hover {
          color: var(--blue-600);
        }

        .gradient-btn {
          padding: var(--space-2) var(--space-5);
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .gradient-btn-primary {
          background: var(--gradient-primary);
          color: white;
          box-shadow: 0 4px 16px rgba(9, 103, 210, 0.3);
        }

        .gradient-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(9, 103, 210, 0.4);
        }

        .gradient-btn-large {
          padding: var(--space-4) var(--space-7);
          font-size: 16px;
        }

        .gradient-btn-secondary {
          background: white;
          color: var(--blue-600);
          border: 2px solid var(--blue-200);
        }

        .gradient-btn-secondary:hover {
          border-color: var(--blue-400);
          background: var(--blue-050);
        }

        .gradient-hero {
          padding: var(--space-10) var(--space-6);
          padding-top: calc(var(--space-10) + 60px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .gradient-hero::before {
          content: '';
          position: absolute;
          top: -200px;
          left: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(9, 103, 210, 0.15) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }

        .gradient-hero::after {
          content: '';
          position: absolute;
          bottom: -200px;
          right: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(28, 212, 212, 0.15) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }

        .gradient-hero-content {
          position: relative;
          z-index: 1;
        }

        .gradient-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--glass-bg);
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 500;
          color: var(--blue-600);
          margin-bottom: var(--space-6);
        }

        .gradient-hero h1 {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: var(--space-5);
          color: var(--grey-900);
        }

        .gradient-hero h1 span {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-hero p {
          font-size: 20px;
          color: var(--grey-500);
          max-width: 600px;
          margin: 0 auto var(--space-7);
          line-height: 1.7;
        }

        .gradient-hero-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          margin-bottom: var(--space-9);
        }

        .gradient-hero-cards {
          display: flex;
          justify-content: center;
          gap: var(--space-5);
          perspective: 1000px;
        }

        .gradient-card-preview {
          width: 280px;
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          box-shadow: var(--glass-shadow);
          transform: rotateY(-5deg);
          transition: transform 0.3s;
        }

        .gradient-card-preview:hover {
          transform: rotateY(0deg) translateY(-8px);
        }

        .gradient-card-preview:nth-child(2) {
          transform: rotateY(5deg);
          margin-top: var(--space-6);
        }

        .gradient-card-preview:nth-child(2):hover {
          transform: rotateY(0deg) translateY(-8px);
        }

        .gradient-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-4);
        }

        .gradient-card-icon {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .gradient-card-badge {
          font-size: 11px;
          font-weight: 600;
          color: var(--cyan-600);
          background: var(--cyan-050);
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
        }

        .gradient-card-amount {
          font-size: 32px;
          font-weight: 800;
          color: var(--grey-900);
          margin-bottom: var(--space-1);
        }

        .gradient-card-label {
          font-size: 13px;
          color: var(--grey-500);
        }

        .gradient-card-chart {
          height: 60px;
          margin-top: var(--space-4);
          background: linear-gradient(180deg, var(--cyan-100) 0%, transparent 100%);
          border-radius: var(--radius-sm);
          position: relative;
          overflow: hidden;
        }

        .gradient-card-chart::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-primary);
        }

        .gradient-features {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .gradient-section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .gradient-section-header {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .gradient-section-label {
          font-size: 13px;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: var(--space-3);
        }

        .gradient-section-title {
          font-size: 44px;
          font-weight: 800;
          color: var(--grey-900);
          margin-bottom: var(--space-4);
        }

        .gradient-section-desc {
          font-size: 18px;
          color: var(--grey-500);
          max-width: 600px;
          margin: 0 auto;
        }

        .gradient-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .gradient-feature-card {
          background: var(--gradient-soft);
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          transition: all 0.3s;
          border: 1px solid transparent;
        }

        .gradient-feature-card:hover {
          background: white;
          border-color: var(--blue-200);
          box-shadow: 0 12px 40px rgba(9, 103, 210, 0.1);
          transform: translateY(-4px);
        }

        .gradient-feature-icon {
          width: 56px;
          height: 56px;
          background: var(--gradient-primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: var(--space-5);
        }

        .gradient-feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--grey-900);
          margin-bottom: var(--space-2);
        }

        .gradient-feature-card p {
          font-size: 15px;
          color: var(--grey-500);
          line-height: 1.7;
        }

        .gradient-stats {
          padding: var(--space-9) var(--space-6);
          background: var(--gradient-dark);
          position: relative;
          overflow: hidden;
        }

        .gradient-stats::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .gradient-stats-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
          position: relative;
        }

        .gradient-stat {
          text-align: center;
        }

        .gradient-stat-value {
          font-size: 48px;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--space-2);
        }

        .gradient-stat-label {
          font-size: 14px;
          color: var(--grey-400);
        }

        .gradient-cta {
          padding: var(--space-10) var(--space-6);
          text-align: center;
          position: relative;
        }

        .gradient-cta-box {
          max-width: 800px;
          margin: 0 auto;
          background: var(--gradient-primary);
          border-radius: var(--radius-xl);
          padding: var(--space-9);
          position: relative;
          overflow: hidden;
        }

        .gradient-cta-box::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
        }

        .gradient-cta h2 {
          font-size: 40px;
          font-weight: 800;
          color: white;
          margin-bottom: var(--space-4);
          position: relative;
        }

        .gradient-cta p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          margin-bottom: var(--space-6);
          position: relative;
        }

        .gradient-cta .gradient-btn-secondary {
          background: white;
          color: var(--blue-600);
          border: none;
          position: relative;
        }

        .gradient-footer {
          padding: var(--space-8) var(--space-6);
          background: white;
          border-top: 1px solid var(--grey-100);
        }

        .gradient-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .gradient-footer-links {
          display: flex;
          gap: var(--space-6);
        }

        .gradient-footer-links a {
          color: var(--grey-500);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .gradient-footer-links a:hover {
          color: var(--blue-600);
        }

        .gradient-footer-copyright {
          font-size: 14px;
          color: var(--grey-400);
        }

        .gradient-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: var(--gradient-primary);
          color: white;
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-full);
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 4px 16px rgba(9, 103, 210, 0.3);
          transition: all 0.3s;
          z-index: 100;
        }

        .gradient-back-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(9, 103, 210, 0.4);
        }

        @media (max-width: 1024px) {
          .gradient-features-grid { grid-template-columns: repeat(2, 1fr); }
          .gradient-hero-cards { flex-direction: column; align-items: center; }
          .gradient-card-preview { transform: none !important; margin-top: 0 !important; }
        }

        @media (max-width: 768px) {
          .gradient-hero h1 { font-size: 40px; }
          .gradient-features-grid { grid-template-columns: 1fr; }
          .gradient-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .gradient-nav-links { display: none; }
        }
      `}</style>

      <nav className="gradient-nav">
        <div className="gradient-nav-container">
          <div className="gradient-logo">Finflow</div>
          <ul className="gradient-nav-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
          <a href="#" className="gradient-btn gradient-btn-primary">Get Started</a>
        </div>
      </nav>

      <section className="gradient-hero">
        <div className="gradient-hero-content">
          <span className="gradient-hero-badge">✨ 2024년 최고의 핀테크 앱 선정</span>
          <h1>금융을 더<br /><span>스마트하게</span></h1>
          <p>
            AI 기반 자산 관리로 당신의 재정을 한눈에. 투자, 저축, 지출 분석을
            하나의 앱에서 경험하세요.
          </p>
          <div className="gradient-hero-actions">
            <a href="#" className="gradient-btn gradient-btn-primary gradient-btn-large">무료로 시작하기</a>
            <a href="#" className="gradient-btn gradient-btn-secondary gradient-btn-large">데모 보기</a>
          </div>

          <div className="gradient-hero-cards">
            <div className="gradient-card-preview">
              <div className="gradient-card-header">
                <div className="gradient-card-icon">💰</div>
                <span className="gradient-card-badge">+12.5%</span>
              </div>
              <div className="gradient-card-amount">₩24,500,000</div>
              <div className="gradient-card-label">총 자산</div>
              <div className="gradient-card-chart"></div>
            </div>
            <div className="gradient-card-preview">
              <div className="gradient-card-header">
                <div className="gradient-card-icon">📊</div>
                <span className="gradient-card-badge">이번 달</span>
              </div>
              <div className="gradient-card-amount">₩1,850,000</div>
              <div className="gradient-card-label">투자 수익</div>
              <div className="gradient-card-chart"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-features">
        <div className="gradient-section-container">
          <div className="gradient-section-header">
            <div className="gradient-section-label">Features</div>
            <h2 className="gradient-section-title">스마트한 금융 관리</h2>
            <p className="gradient-section-desc">AI가 분석하고, 당신은 성장합니다</p>
          </div>

          <div className="gradient-features-grid">
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🤖</div>
              <h3>AI 자산 분석</h3>
              <p>머신러닝이 당신의 지출 패턴을 분석하고 맞춤형 절약 방법을 제안합니다.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">📈</div>
              <h3>자동 투자</h3>
              <p>리스크 성향에 맞는 포트폴리오를 자동으로 구성하고 리밸런싱합니다.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🔔</div>
              <h3>스마트 알림</h3>
              <p>예산 초과, 이상 거래, 투자 기회를 실시간으로 알려드립니다.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🏦</div>
              <h3>계좌 통합</h3>
              <p>모든 은행 계좌와 카드를 연결해 한 곳에서 관리하세요.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🎯</div>
              <h3>목표 저축</h3>
              <p>여행, 결혼, 주택 등 목표를 설정하고 자동으로 저축하세요.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🔒</div>
              <h3>은행급 보안</h3>
              <p>256비트 암호화와 생체 인증으로 자산을 안전하게 보호합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-stats">
        <div className="gradient-stats-grid">
          <div className="gradient-stat">
            <div className="gradient-stat-value">500K+</div>
            <div className="gradient-stat-label">활성 사용자</div>
          </div>
          <div className="gradient-stat">
            <div className="gradient-stat-value">₩2.3조</div>
            <div className="gradient-stat-label">관리 자산</div>
          </div>
          <div className="gradient-stat">
            <div className="gradient-stat-value">4.9</div>
            <div className="gradient-stat-label">앱스토어 평점</div>
          </div>
          <div className="gradient-stat">
            <div className="gradient-stat-value">15%</div>
            <div className="gradient-stat-label">평균 저축률 증가</div>
          </div>
        </div>
      </section>

      <section className="gradient-cta">
        <div className="gradient-cta-box">
          <h2>지금 시작하세요</h2>
          <p>가입 후 30일간 프리미엄 기능 무료 체험</p>
          <a href="#" className="gradient-btn gradient-btn-secondary gradient-btn-large">무료 체험 시작 →</a>
        </div>
      </section>

      <footer className="gradient-footer">
        <div className="gradient-footer-container">
          <div className="gradient-logo">Finflow</div>
          <div className="gradient-footer-links">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">고객센터</a>
          </div>
          <span className="gradient-footer-copyright">© 2024 Finflow</span>
        </div>
      </footer>

      <Link href="/" className="gradient-back-link">← 갤러리로</Link>
    </>
  );
}

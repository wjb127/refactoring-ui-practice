"use client";

import Link from "next/link";

export default function BoldPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        :root {
          --orange-050: #FFF7ED;
          --orange-100: #FFEDD5;
          --orange-200: #FED7AA;
          --orange-300: #FDBA74;
          --orange-400: #FB923C;
          --orange-500: #F97316;
          --orange-600: #EA580C;
          --orange-700: #C2410C;

          --dark-800: #1C1917;
          --dark-900: #0C0A09;

          --grey-050: #FAFAF9;
          --grey-100: #F5F5F4;
          --grey-200: #E7E5E4;
          --grey-400: #A8A29E;
          --grey-500: #78716C;
          --grey-600: #57534E;
          --grey-700: #44403C;

          --space-1: 4px;
          --space-2: 8px;
          --space-3: 12px;
          --space-4: 16px;
          --space-5: 24px;
          --space-6: 32px;
          --space-7: 48px;
          --space-8: 64px;
          --space-9: 96px;

          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 12px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Space Grotesk', sans-serif;
          background: white;
          color: var(--dark-800);
          line-height: 1.5;
        }

        .bold-nav {
          padding: var(--space-4) var(--space-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
        }

        .bold-logo {
          font-size: 28px;
          font-weight: 700;
          color: var(--dark-900);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .bold-logo-icon {
          width: 40px;
          height: 40px;
          background: var(--orange-500);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          transform: rotate(-10deg);
        }

        .bold-nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .bold-nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.2s;
        }

        .bold-nav-links a:hover {
          color: var(--orange-600);
        }

        .bold-btn {
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .bold-btn-primary {
          background: var(--orange-500);
          color: white;
        }

        .bold-btn-primary:hover {
          background: var(--orange-600);
          transform: translateY(-2px);
        }

        .bold-btn-dark {
          background: var(--dark-900);
          color: white;
        }

        .bold-btn-dark:hover {
          background: var(--dark-800);
        }

        .bold-hero {
          padding: var(--space-9) var(--space-6);
          position: relative;
          overflow: hidden;
        }

        .bold-hero-container {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .bold-hero-label {
          display: inline-block;
          background: var(--orange-100);
          color: var(--orange-700);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 14px;
          margin-bottom: var(--space-5);
        }

        .bold-hero h1 {
          font-size: 80px;
          font-weight: 700;
          color: var(--dark-900);
          margin-bottom: var(--space-5);
          line-height: 1.0;
          max-width: 900px;
        }

        .bold-hero h1 span {
          color: var(--orange-500);
        }

        .bold-hero p {
          font-size: 20px;
          color: var(--grey-500);
          max-width: 600px;
          margin-bottom: var(--space-7);
          line-height: 1.7;
        }

        .bold-hero-actions {
          display: flex;
          gap: var(--space-4);
        }

        .bold-shape-1 {
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--orange-100);
          border-radius: 50%;
          top: -100px;
          right: 100px;
          z-index: 0;
        }

        .bold-shape-2 {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 150px solid transparent;
          border-right: 150px solid transparent;
          border-bottom: 260px solid var(--orange-200);
          bottom: -50px;
          right: 300px;
          z-index: 0;
          transform: rotate(15deg);
        }

        .bold-stats {
          padding: var(--space-7) var(--space-6);
          background: var(--dark-900);
        }

        .bold-stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
        }

        .bold-stat {
          text-align: center;
          color: white;
        }

        .bold-stat-value {
          font-size: 56px;
          font-weight: 700;
          color: var(--orange-400);
          line-height: 1;
        }

        .bold-stat-label {
          font-size: 14px;
          color: var(--grey-400);
          margin-top: var(--space-2);
        }

        .bold-features {
          padding: var(--space-9) var(--space-6);
        }

        .bold-features-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .bold-section-header {
          margin-bottom: var(--space-8);
        }

        .bold-section-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--dark-900);
          margin-bottom: var(--space-3);
        }

        .bold-section-title span {
          color: var(--orange-500);
        }

        .bold-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }

        .bold-feature-card {
          background: var(--grey-050);
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          border-left: 4px solid var(--orange-500);
          transition: all 0.2s;
        }

        .bold-feature-card:hover {
          transform: translateX(8px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .bold-feature-number {
          font-size: 48px;
          font-weight: 700;
          color: var(--orange-200);
          line-height: 1;
          margin-bottom: var(--space-3);
        }

        .bold-feature-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--dark-900);
          margin-bottom: var(--space-2);
        }

        .bold-feature-card p {
          font-size: 15px;
          color: var(--grey-500);
        }

        .bold-cta {
          padding: var(--space-9) var(--space-6);
          background: linear-gradient(135deg, var(--orange-500), var(--orange-600));
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .bold-cta h2 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .bold-cta p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: var(--space-6);
        }

        .bold-cta .bold-btn-dark {
          font-size: 18px;
          padding: var(--space-4) var(--space-7);
        }

        .bold-footer {
          padding: var(--space-8) var(--space-6);
          background: var(--dark-900);
          color: white;
          text-align: center;
        }

        .bold-footer-logo {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .bold-footer p {
          color: var(--grey-500);
          font-size: 14px;
        }

        .bold-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: var(--orange-500);
          color: white;
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-md);
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(249, 115, 22, 0.4);
          z-index: 100;
        }

        .bold-back-link:hover {
          background: var(--orange-600);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .bold-hero h1 { font-size: 56px; }
          .bold-features-grid { grid-template-columns: 1fr; }
          .bold-stats-container { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .bold-hero h1 { font-size: 40px; }
          .bold-nav-links { display: none; }
          .bold-stat-value { font-size: 40px; }
        }
      `}</style>

      <nav className="bold-nav">
        <div className="bold-logo">
          <span className="bold-logo-icon">🚀</span>
          ROCKET
        </div>
        <ul className="bold-nav-links">
          <li><a href="#">프로그램</a></li>
          <li><a href="#">포트폴리오</a></li>
          <li><a href="#">팀</a></li>
          <li><a href="#">블로그</a></li>
        </ul>
        <a href="#" className="bold-btn bold-btn-primary">지원하기</a>
      </nav>

      <section className="bold-hero">
        <div className="bold-shape-1"></div>
        <div className="bold-shape-2"></div>
        <div className="bold-hero-container">
          <span className="bold-hero-label">🔥 2024 배치 모집 중</span>
          <h1>당신의 아이디어를<br /><span>현실로</span> 만들어요</h1>
          <p>ROCKET은 초기 스타트업을 위한 액셀러레이터입니다. 투자, 멘토링, 네트워크 - 성공에 필요한 모든 것을 제공합니다.</p>
          <div className="bold-hero-actions">
            <a href="#" className="bold-btn bold-btn-primary">지금 지원하기</a>
            <a href="#" className="bold-btn bold-btn-dark">프로그램 소개</a>
          </div>
        </div>
      </section>

      <section className="bold-stats">
        <div className="bold-stats-container">
          <div className="bold-stat">
            <div className="bold-stat-value">150+</div>
            <div className="bold-stat-label">투자 포트폴리오</div>
          </div>
          <div className="bold-stat">
            <div className="bold-stat-value">₩2.5조</div>
            <div className="bold-stat-label">총 기업가치</div>
          </div>
          <div className="bold-stat">
            <div className="bold-stat-value">23</div>
            <div className="bold-stat-label">유니콘 배출</div>
          </div>
          <div className="bold-stat">
            <div className="bold-stat-value">85%</div>
            <div className="bold-stat-label">후속 투자 유치율</div>
          </div>
        </div>
      </section>

      <section className="bold-features">
        <div className="bold-features-container">
          <div className="bold-section-header">
            <h2 className="bold-section-title">왜 <span>ROCKET</span>인가</h2>
          </div>
          <div className="bold-features-grid">
            <div className="bold-feature-card">
              <div className="bold-feature-number">01</div>
              <h3>시드 투자</h3>
              <p>최대 5억원의 시드 투자와 함께 시작하세요. 지분 희석 최소화로 창업자 친화적 조건을 제공합니다.</p>
            </div>
            <div className="bold-feature-card">
              <div className="bold-feature-number">02</div>
              <h3>전문가 멘토링</h3>
              <p>성공한 창업자, 업계 전문가 100인 이상의 멘토 네트워크가 당신의 성장을 돕습니다.</p>
            </div>
            <div className="bold-feature-card">
              <div className="bold-feature-number">03</div>
              <h3>글로벌 네트워크</h3>
              <p>실리콘밸리, 싱가포르, 유럽까지. 글로벌 진출을 위한 연결고리를 만들어드립니다.</p>
            </div>
            <div className="bold-feature-card">
              <div className="bold-feature-number">04</div>
              <h3>오피스 & 인프라</h3>
              <p>강남 중심부 코워킹 스페이스와 AWS, Google Cloud 크레딧 등 성장에 필요한 인프라를 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bold-cta">
        <h2>다음 유니콘은 당신입니다</h2>
        <p>2024년 배치 지원 마감까지 30일 남았습니다</p>
        <a href="#" className="bold-btn bold-btn-dark">지금 지원하기 →</a>
      </section>

      <footer className="bold-footer">
        <div className="bold-footer-logo">🚀 ROCKET</div>
        <p>© 2024 ROCKET Accelerator. 스타트업과 함께 성장합니다.</p>
      </footer>

      <Link href="/" className="bold-back-link">← 갤러리로</Link>
    </>
  );
}

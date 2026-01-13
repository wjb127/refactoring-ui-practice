"use client";

import Link from "next/link";

export default function BoldPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        :root {
          /* Vibrant Orange Palette */
          --orange-050: #FFF7ED;
          --orange-100: #FFEDD5;
          --orange-200: #FED7AA;
          --orange-300: #FDBA74;
          --orange-400: #FB923C;
          --orange-500: #F97316;
          --orange-600: #EA580C;
          --orange-700: #C2410C;
          --orange-800: #9A3412;

          /* Supporting colors */
          --red-500: #EF4444;
          --yellow-400: #FACC15;

          /* Dark */
          --dark-100: #374151;
          --dark-200: #1F2937;
          --dark-300: #111827;
          --dark-400: #0A0A0A;

          --white: #FFFFFF;
          --grey-100: #F3F4F6;
          --grey-200: #E5E7EB;
          --grey-500: #6B7280;

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

          /* Sharp radius for bold look */
          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 12px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Space Grotesk', -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: var(--dark-200);
          background: var(--white);
        }

        .container {
          max-width: 1300px;
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
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-weight: 700;
          font-size: 24px;
          color: var(--dark-300);
          text-decoration: none;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--orange-500);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-10deg);
          font-size: 20px;
        }

        .nav-links {
          display: flex;
          gap: var(--space-5);
        }

        .nav-links a {
          font-size: 15px;
          font-weight: 500;
          color: var(--dark-100);
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--orange-600);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-5);
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: var(--orange-500);
          color: white;
        }

        .btn-primary:hover {
          background: var(--orange-600);
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: var(--dark-200);
          border: 2px solid var(--dark-200);
        }

        .btn-outline:hover {
          background: var(--dark-200);
          color: white;
        }

        .btn-large {
          padding: var(--space-4) var(--space-7);
          font-size: 17px;
        }

        .btn-white {
          background: white;
          color: var(--orange-600);
        }

        /* === Hero Section === */
        .hero {
          min-height: 100vh;
          padding: 140px 0 var(--space-9);
          background: var(--grey-100);
          position: relative;
          overflow: hidden;
        }

        /* Geometric decoration */
        .geo-shape {
          position: absolute;
          z-index: 0;
        }

        .geo-triangle {
          width: 0;
          height: 0;
          border-left: 200px solid transparent;
          border-right: 200px solid transparent;
          border-bottom: 350px solid var(--orange-200);
          right: -100px;
          top: 10%;
          opacity: 0.5;
        }

        .geo-circle {
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: var(--orange-100);
          left: -200px;
          bottom: -200px;
          opacity: 0.5;
        }

        .geo-square {
          width: 150px;
          height: 150px;
          background: var(--yellow-400);
          transform: rotate(45deg);
          right: 20%;
          bottom: 10%;
          opacity: 0.3;
        }

        .hero-container {
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 900px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: var(--orange-100);
          color: var(--orange-700);
          font-size: 14px;
          font-weight: 600;
          border-radius: var(--radius-sm);
          margin-bottom: var(--space-5);
        }

        .hero-content h1 {
          font-size: 80px;
          font-weight: 700;
          line-height: 1;
          color: var(--dark-300);
          margin-bottom: var(--space-5);
          letter-spacing: -0.03em;
        }

        .hero-content h1 .highlight {
          color: var(--orange-500);
          position: relative;
        }

        .hero-content h1 .highlight::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 10px;
          width: 100%;
          height: 20px;
          background: var(--orange-200);
          z-index: -1;
        }

        .hero-description {
          font-size: 22px;
          color: var(--dark-100);
          max-width: 650px;
          margin-bottom: var(--space-7);
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-4);
          align-items: center;
          margin-bottom: var(--space-8);
        }

        .hero-stats {
          display: flex;
          gap: var(--space-8);
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 48px;
          font-weight: 700;
          color: var(--orange-600);
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          color: var(--grey-500);
          margin-top: var(--space-2);
        }

        /* === Features Section === */
        .features {
          padding: var(--space-9) 0;
          background: white;
          position: relative;
        }

        .section-header {
          max-width: 600px;
          margin-bottom: var(--space-8);
        }

        .section-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--orange-600);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-3);
        }

        .section-header h2 {
          font-size: 48px;
          font-weight: 700;
          color: var(--dark-300);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-5);
        }

        .feature-card {
          padding: var(--space-6);
          background: var(--grey-100);
          border-radius: var(--radius-md);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-4px);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--orange-500);
        }

        .feature-number {
          font-size: 64px;
          font-weight: 700;
          color: var(--orange-200);
          line-height: 1;
          margin-bottom: var(--space-3);
        }

        .feature-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--dark-300);
          margin-bottom: var(--space-3);
        }

        .feature-card p {
          font-size: 15px;
          color: var(--grey-500);
          line-height: 1.7;
        }

        /* === Program Section === */
        .program {
          padding: var(--space-9) 0;
          background: var(--dark-300);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .program::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: var(--orange-500);
          border-radius: 50%;
          right: -300px;
          top: -300px;
          opacity: 0.1;
        }

        .program .section-header h2 {
          color: white;
        }

        .program-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
          position: relative;
          z-index: 1;
        }

        .program-card {
          padding: var(--space-6);
          background: var(--dark-200);
          border-radius: var(--radius-md);
          border: 1px solid var(--dark-100);
          transition: all 0.3s;
        }

        .program-card:hover {
          border-color: var(--orange-500);
          background: var(--dark-100);
        }

        .program-icon {
          width: 56px;
          height: 56px;
          background: var(--orange-500);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-5);
          font-size: 24px;
        }

        .program-card h3 {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin-bottom: var(--space-3);
        }

        .program-card p {
          font-size: 14px;
          color: var(--grey-500);
          line-height: 1.7;
        }

        /* === Testimonials === */
        .testimonials {
          padding: var(--space-9) 0;
          background: white;
        }

        .testimonial-featured {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--space-7);
          align-items: center;
          background: var(--orange-500);
          border-radius: var(--radius-lg);
          padding: var(--space-8);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .testimonial-featured::before {
          content: '"';
          position: absolute;
          font-size: 400px;
          font-weight: 700;
          color: rgba(255,255,255,0.1);
          top: -100px;
          right: -50px;
          line-height: 1;
        }

        .testimonial-author-large {
          text-align: center;
        }

        .author-image {
          width: 120px;
          height: 120px;
          background: var(--orange-300);
          border-radius: 50%;
          margin: 0 auto var(--space-4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 700;
        }

        .author-name-large {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: var(--space-1);
        }

        .author-company {
          font-size: 14px;
          opacity: 0.8;
        }

        .testimonial-content h3 {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: var(--space-5);
          position: relative;
          z-index: 1;
        }

        .testimonial-stats {
          display: flex;
          gap: var(--space-6);
        }

        .testimonial-stat {
          text-align: center;
        }

        .testimonial-stat-value {
          font-size: 36px;
          font-weight: 700;
        }

        .testimonial-stat-label {
          font-size: 12px;
          opacity: 0.8;
        }

        /* === CTA Section === */
        .cta {
          padding: var(--space-9) 0;
          background: var(--grey-100);
          text-align: center;
        }

        .cta h2 {
          font-size: 56px;
          font-weight: 700;
          color: var(--dark-300);
          margin-bottom: var(--space-4);
          letter-spacing: -0.02em;
        }

        .cta h2 .highlight {
          color: var(--orange-500);
        }

        .cta p {
          font-size: 18px;
          color: var(--grey-500);
          margin-bottom: var(--space-6);
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: var(--space-4);
        }

        /* === Footer === */
        .footer {
          padding: var(--space-7) 0;
          background: var(--dark-400);
          color: var(--grey-500);
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer .logo {
          color: white;
        }

        .footer-links {
          display: flex;
          gap: var(--space-5);
        }

        .footer-links a {
          font-size: 14px;
          color: var(--grey-500);
          text-decoration: none;
        }

        .footer-links a:hover {
          color: white;
        }

        /* Back link */
        .back-link {
          position: fixed;
          bottom: var(--space-5);
          left: var(--space-5);
          padding: var(--space-3) var(--space-5);
          background: white;
          color: var(--dark-300);
          text-decoration: none;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 100;
          transition: all 0.2s;
        }

        .back-link:hover {
          background: var(--orange-500);
          color: white;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content h1 {
            font-size: 56px;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .program-grid {
            grid-template-columns: 1fr;
          }
          .testimonial-featured {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .testimonial-stats {
            justify-content: center;
          }
          .cta h2 {
            font-size: 40px;
          }
          .hero-stats {
            flex-wrap: wrap;
            gap: var(--space-5);
          }
          .nav-links {
            display: none;
          }
        }
      `}</style>

      <Link href="/" className="back-link">← Gallery</Link>

      <nav className="nav">
        <div className="container nav-container">
          <a href="#" className="logo">
            <div className="logo-icon">🚀</div>
            ROCKET
          </a>
          <div className="nav-links">
            <a href="#program">프로그램</a>
            <a href="#portfolio">포트폴리오</a>
            <a href="#about">소개</a>
            <a href="#apply">지원하기</a>
          </div>
          <a href="#" className="btn btn-primary">지금 지원</a>
        </div>
      </nav>

      <section className="hero">
        <div className="geo-shape geo-triangle"></div>
        <div className="geo-shape geo-circle"></div>
        <div className="geo-shape geo-square"></div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🚀</span>
              2024 BATCH 모집 중
            </div>
            <h1>
              당신의 <span className="highlight">AI 스타트업</span>을<br />
              다음 레벨로
            </h1>
            <p className="hero-description">
              ROCKET은 AI 스타트업을 위한 대한민국 최고의 액셀러레이터입니다.
              투자, 멘토링, 네트워크 - 성공에 필요한 모든 것을 제공합니다.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn btn-primary btn-large">무료 지원하기 →</a>
              <a href="#" className="btn btn-outline btn-large">프로그램 소개</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">₩500억+</span>
                <span className="stat-label">총 투자 유치액</span>
              </div>
              <div className="stat">
                <span className="stat-value">127</span>
                <span className="stat-label">포트폴리오 기업</span>
              </div>
              <div className="stat">
                <span className="stat-value">3</span>
                <span className="stat-label">유니콘 배출</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="features">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Why ROCKET</p>
            <h2>스타트업 성공의 모든 요소</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>시드 투자</h3>
              <p>선발 즉시 최대 3억원의 시드 투자를 받습니다. 추가 후속 투자 기회도 제공합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>전문가 멘토링</h3>
              <p>구글, 네이버, 카카오 출신 전문가들이 1:1 멘토링을 제공합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>글로벌 네트워크</h3>
              <p>실리콘밸리, 싱가포르 등 글로벌 VC 및 파트너사와 연결해드립니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-number">04</div>
              <h3>오피스 & 인프라</h3>
              <p>강남 핵심지역 공유 오피스와 AWS 크레딧 등 필수 인프라를 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="program">
        <div className="container">
          <div className="section-header">
            <p className="section-label">12-Week Program</p>
            <h2>집중 성장 프로그램</h2>
          </div>

          <div className="program-grid">
            <div className="program-card">
              <div className="program-icon">✓</div>
              <h3>Product-Market Fit</h3>
              <p>고객 검증부터 MVP 개선까지, PMF를 찾는 과정을 함께합니다.</p>
            </div>

            <div className="program-card">
              <div className="program-icon">📈</div>
              <h3>Growth Strategy</h3>
              <p>데이터 기반 그로스 해킹과 스케일업 전략을 수립합니다.</p>
            </div>

            <div className="program-card">
              <div className="program-icon">👥</div>
              <h3>Team Building</h3>
              <p>인재 채용과 조직 문화 구축을 위한 노하우를 전수합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Success Story</p>
            <h2>Alumni 성공 사례</h2>
          </div>

          <div className="testimonial-featured">
            <div className="testimonial-author-large">
              <div className="author-image">JK</div>
              <div className="author-name-large">김지현 대표</div>
              <div className="author-company">AI Labs (2022 Batch)</div>
            </div>
            <div className="testimonial-content">
              <h3>"ROCKET 프로그램이 없었다면 지금의 AI Labs는 없었을 겁니다. 단순 투자가 아니라 진짜 성장을 도와주는 파트너입니다."</h3>
              <div className="testimonial-stats">
                <div className="testimonial-stat">
                  <div className="testimonial-stat-value">Series B</div>
                  <div className="testimonial-stat-label">현재 투자 라운드</div>
                </div>
                <div className="testimonial-stat">
                  <div className="testimonial-stat-value">₩150억</div>
                  <div className="testimonial-stat-label">누적 투자액</div>
                </div>
                <div className="testimonial-stat">
                  <div className="testimonial-stat-value">85명</div>
                  <div className="testimonial-stat-label">현재 팀원 수</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="cta">
        <div className="container">
          <h2>다음 <span className="highlight">유니콘</span>은 당신입니다</h2>
          <p>2024 BATCH 마감까지 D-14</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary btn-large">지금 바로 지원하기</a>
            <a href="#" className="btn btn-outline btn-large">자세히 알아보기</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-container">
          <a href="#" className="logo">ROCKET</a>
          <div className="footer-links">
            <a href="#">프로그램</a>
            <a href="#">포트폴리오</a>
            <a href="#">FAQ</a>
            <a href="#">문의</a>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import Link from "next/link";

export default function BalancedPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        :root {
          /* Color Palette - Primary (Cyan) */
          --cyan-050: #E0FCFF;
          --cyan-100: #BEF8FD;
          --cyan-200: #87EAF2;
          --cyan-300: #54D1DB;
          --cyan-400: #38BEC9;
          --cyan-500: #2CB1BC;
          --cyan-600: #14919B;
          --cyan-700: #0E7C86;
          --cyan-800: #0A6C74;
          --cyan-900: #044E54;

          /* Neutrals (Cool Grey) */
          --grey-050: #F0F4F8;
          --grey-100: #D9E2EC;
          --grey-200: #BCCCDC;
          --grey-300: #9FB3C8;
          --grey-400: #829AB1;
          --grey-500: #627D98;
          --grey-600: #486581;
          --grey-700: #334E68;
          --grey-800: #243B53;
          --grey-900: #102A43;

          /* Supporting Colors */
          --indigo-050: #E0E8F9;
          --indigo-600: #4055A8;
          --pink-050: #FFE0F0;
          --pink-600: #AD2167;
          --yellow-050: #FFFAEB;
          --yellow-600: #C99A2E;

          /* Spacing Scale */
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

          /* Type Scale */
          --text-xs: 12px;
          --text-sm: 14px;
          --text-base: 16px;
          --text-lg: 18px;
          --text-xl: 20px;
          --text-2xl: 24px;
          --text-3xl: 30px;
          --text-4xl: 36px;
          --text-5xl: 48px;

          /* Shadow System */
          --shadow-sm: 0 1px 2px 0 rgba(16, 42, 67, 0.05);
          --shadow-md: 0 4px 6px -1px rgba(16, 42, 67, 0.1), 0 2px 4px -1px rgba(16, 42, 67, 0.06);
          --shadow-lg: 0 10px 15px -3px rgba(16, 42, 67, 0.1), 0 4px 6px -2px rgba(16, 42, 67, 0.05);
          --shadow-xl: 0 20px 25px -5px rgba(16, 42, 67, 0.1), 0 10px 10px -5px rgba(16, 42, 67, 0.04);
          --shadow-2xl: 0 25px 50px -12px rgba(16, 42, 67, 0.25);

          /* Border Radius */
          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 12px;
          --radius-xl: 16px;
          --radius-full: 9999px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: var(--text-base);
          line-height: 1.6;
          color: var(--grey-800);
          background-color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-5);
        }

        /* Accent Bar */
        .accent-bar {
          height: 4px;
          background: linear-gradient(90deg, var(--cyan-500), var(--cyan-600));
        }

        /* Navigation */
        .nav {
          padding: var(--space-4) 0;
          position: sticky;
          top: 0;
          background: white;
          z-index: 100;
          border-bottom: 1px solid var(--grey-100);
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
          font-size: var(--text-xl);
          color: var(--grey-900);
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          color: var(--cyan-600);
        }

        .nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--grey-900);
        }

        .nav-actions {
          display: flex;
          gap: var(--space-3);
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
          font-weight: 600;
          border-radius: var(--radius-md);
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          text-decoration: none;
        }

        .btn-primary {
          background: var(--cyan-600);
          color: white;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), var(--shadow-sm);
        }

        .btn-primary:hover {
          background: var(--cyan-700);
        }

        .btn-secondary {
          background: white;
          color: var(--grey-700);
          border: 1px solid var(--grey-300);
        }

        .btn-secondary:hover {
          background: var(--grey-050);
          border-color: var(--grey-400);
        }

        .btn-ghost {
          background: transparent;
          color: var(--grey-600);
        }

        .btn-ghost:hover {
          color: var(--grey-900);
        }

        .btn-white {
          background: white;
          color: var(--cyan-700);
        }

        .btn-white:hover {
          background: var(--grey-050);
        }

        .btn-large {
          padding: var(--space-3) var(--space-6);
          font-size: var(--text-base);
        }

        .btn-block {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          padding: var(--space-9) 0;
          background: linear-gradient(180deg, white 0%, var(--grey-050) 100%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .hero-content h1 {
          font-size: var(--text-5xl);
          font-weight: 800;
          margin-bottom: var(--space-5);
          letter-spacing: -0.02em;
          color: var(--grey-900);
          line-height: 1.1;
        }

        .highlight {
          color: var(--cyan-600);
        }

        .hero-description {
          font-size: var(--text-xl);
          color: var(--grey-600);
          margin-bottom: var(--space-6);
          max-width: 500px;
          line-height: 1.7;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-4);
          margin-bottom: var(--space-4);
        }

        .hero-note {
          font-size: var(--text-sm);
          color: var(--grey-500);
        }

        /* App Preview */
        .app-preview {
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-2xl);
          overflow: hidden;
        }

        .preview-header {
          background: var(--grey-100);
          padding: var(--space-3) var(--space-4);
        }

        .preview-dots {
          display: flex;
          gap: var(--space-2);
        }

        .preview-dots span {
          width: 12px;
          height: 12px;
          border-radius: var(--radius-full);
          background: var(--grey-300);
        }

        .preview-content {
          display: flex;
          min-height: 300px;
        }

        .preview-sidebar {
          width: 80px;
          background: var(--grey-050);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .sidebar-item {
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--grey-200);
        }

        .sidebar-item.active {
          background: var(--cyan-500);
        }

        .preview-main {
          flex: 1;
          padding: var(--space-5);
          display: flex;
          gap: var(--space-4);
        }

        .preview-card {
          flex: 1;
          background: var(--grey-050);
          border-radius: var(--radius-md);
          padding: var(--space-4);
        }

        .card-header {
          height: 20px;
          width: 60%;
          background: var(--grey-300);
          border-radius: var(--radius-sm);
          margin-bottom: var(--space-4);
        }

        .card-tasks {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .task {
          height: 32px;
          background: white;
          border-radius: var(--radius-sm);
          border-left: 3px solid var(--grey-300);
        }

        .task.done {
          border-left-color: var(--cyan-500);
          opacity: 0.7;
        }

        /* Section Styles */
        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto var(--space-8);
        }

        .section-tag {
          display: inline-block;
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--cyan-700);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-3);
        }

        .section-header h2 {
          font-size: var(--text-4xl);
          font-weight: 700;
          margin-bottom: var(--space-3);
          color: var(--grey-900);
        }

        .section-header p {
          font-size: var(--text-lg);
          color: var(--grey-500);
        }

        /* Features Section */
        .features {
          padding: var(--space-10) 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }

        .feature-card {
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          background: white;
          border: 1px solid var(--grey-100);
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .feature-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-lg);
          background: var(--cyan-050);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
          font-size: 24px;
        }

        .feature-icon.indigo {
          background: var(--indigo-050);
        }

        .feature-icon.yellow {
          background: var(--yellow-050);
        }

        .feature-icon.pink {
          background: var(--pink-050);
        }

        .feature-card h3 {
          font-size: var(--text-xl);
          font-weight: 600;
          margin-bottom: var(--space-3);
          color: var(--grey-900);
        }

        .feature-card p {
          color: var(--grey-600);
          line-height: 1.7;
        }

        /* Stats Section */
        .stats {
          padding: var(--space-8) 0;
          background: var(--grey-900);
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: var(--text-4xl);
          font-weight: 700;
          color: white;
          margin-bottom: var(--space-1);
        }

        .stat-label {
          font-size: var(--text-sm);
          color: var(--grey-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Testimonials Section */
        .testimonials {
          padding: var(--space-10) 0;
          background: var(--grey-050);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .testimonial-card {
          background: white;
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          position: relative;
        }

        .testimonial-card.featured {
          background: var(--cyan-600);
          color: white;
        }

        .quote-icon {
          font-size: 60px;
          font-family: Georgia, serif;
          color: var(--cyan-200);
          line-height: 1;
          margin-bottom: var(--space-2);
        }

        .testimonial-card.featured .quote-icon {
          color: var(--cyan-300);
        }

        .testimonial-text {
          font-size: var(--text-lg);
          line-height: 1.7;
          margin-bottom: var(--space-5);
        }

        .testimonial-card.featured .testimonial-text {
          color: var(--cyan-050);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          background: var(--grey-200);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: var(--grey-700);
        }

        .testimonial-card.featured .author-avatar {
          background: var(--cyan-500);
          color: white;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-weight: 600;
          font-size: var(--text-base);
        }

        .author-role {
          font-size: var(--text-sm);
          color: var(--grey-500);
        }

        .testimonial-card.featured .author-role {
          color: var(--cyan-200);
        }

        /* Pricing Section */
        .pricing {
          padding: var(--space-10) 0;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          align-items: start;
        }

        .pricing-card {
          background: white;
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          position: relative;
        }

        .pricing-card.popular {
          border: 2px solid var(--cyan-500);
          box-shadow: var(--shadow-xl);
          transform: scale(1.05);
        }

        .popular-badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--cyan-600);
          color: white;
          font-size: var(--text-xs);
          font-weight: 600;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pricing-header h3 {
          font-size: var(--text-2xl);
          font-weight: 700;
          margin-bottom: var(--space-1);
        }

        .pricing-description {
          color: var(--grey-500);
          font-size: var(--text-sm);
          margin-bottom: var(--space-5);
        }

        .pricing-price {
          margin-bottom: var(--space-5);
        }

        .price {
          font-size: var(--text-4xl);
          font-weight: 700;
          color: var(--grey-900);
        }

        .price-period {
          font-size: var(--text-base);
          color: var(--grey-500);
          font-weight: 400;
        }

        .pricing-features {
          list-style: none;
          margin-bottom: var(--space-6);
        }

        .pricing-features li {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-2) 0;
          color: var(--grey-700);
        }

        .pricing-features li svg {
          width: 20px;
          height: 20px;
          color: var(--cyan-600);
          flex-shrink: 0;
        }

        /* CTA Section */
        .cta {
          padding: var(--space-10) 0;
          background: linear-gradient(135deg, var(--cyan-600) 0%, var(--cyan-800) 100%);
          text-align: center;
        }

        .cta h2 {
          font-size: var(--text-4xl);
          font-weight: 700;
          color: white;
          margin-bottom: var(--space-3);
        }

        .cta p {
          font-size: var(--text-lg);
          color: var(--cyan-100);
          margin-bottom: var(--space-6);
        }

        /* Footer */
        .footer {
          padding: var(--space-9) 0 0;
          background: var(--grey-900);
          color: var(--grey-300);
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: var(--space-8);
          padding-bottom: var(--space-8);
        }

        .footer-brand .logo {
          color: white;
          margin-bottom: var(--space-3);
        }

        .footer-brand p {
          color: var(--grey-400);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .footer-column h4 {
          font-size: var(--text-sm);
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-4);
        }

        .footer-column a {
          display: block;
          color: var(--grey-400);
          padding: var(--space-1) 0;
          transition: color 0.2s;
          text-decoration: none;
        }

        .footer-column a:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid var(--grey-800);
          padding: var(--space-5) 0;
        }

        .footer-bottom p {
          color: var(--grey-500);
          font-size: var(--text-sm);
        }

        /* Back link */
        .back-link {
          position: fixed;
          bottom: var(--space-5);
          left: var(--space-5);
          padding: var(--space-3) var(--space-5);
          background: white;
          color: var(--grey-700);
          text-decoration: none;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: var(--text-sm);
          box-shadow: var(--shadow-md);
          z-index: 100;
          transition: all 0.2s;
        }

        .back-link:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-visual {
            display: none;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          .pricing-card.popular {
            transform: none;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hero-content h1 {
            font-size: var(--text-4xl);
          }
          .stats-container {
            grid-template-columns: 1fr;
          }
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <Link href="/" className="back-link">← Gallery</Link>

      <div className="accent-bar"></div>

      <nav className="nav">
        <div className="container nav-container">
          <div className="logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
            <span>TaskFlow</span>
          </div>
          <ul className="nav-links">
            <li><a href="#features">기능</a></li>
            <li><a href="#pricing">요금</a></li>
            <li><a href="#testimonials">후기</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#" className="btn btn-ghost">로그인</a>
            <a href="#" className="btn btn-primary">무료 시작</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>팀의 생산성을<br /><span className="highlight">2배</span>로 높이세요</h1>
            <p className="hero-description">
              복잡한 프로젝트도 간단하게. TaskFlow와 함께라면
              모든 팀원이 같은 페이지에서 협업할 수 있습니다.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn btn-primary btn-large">14일 무료 체험</a>
              <a href="#" className="btn btn-secondary btn-large">데모 보기</a>
            </div>
            <p className="hero-note">신용카드 없이 시작 가능</p>
          </div>
          <div className="hero-visual">
            <div className="app-preview">
              <div className="preview-header">
                <div className="preview-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="preview-content">
                <div className="preview-sidebar">
                  <div className="sidebar-item active"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                </div>
                <div className="preview-main">
                  <div className="preview-card">
                    <div className="card-header"></div>
                    <div className="card-tasks">
                      <div className="task done"></div>
                      <div className="task done"></div>
                      <div className="task"></div>
                    </div>
                  </div>
                  <div className="preview-card">
                    <div className="card-header"></div>
                    <div className="card-tasks">
                      <div className="task"></div>
                      <div className="task"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">기능</span>
            <h2>협업에 필요한 모든 것</h2>
            <p>직관적인 인터페이스로 누구나 쉽게 시작할 수 있습니다</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>칸반 보드</h3>
              <p>드래그 앤 드롭으로 작업 상태를 직관적으로 관리하세요. 한눈에 프로젝트 진행 상황을 파악할 수 있습니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon indigo">👥</div>
              <h3>실시간 협업</h3>
              <p>팀원들과 실시간으로 소통하고 피드백을 주고받으세요. 변경사항이 즉시 모든 팀원에게 반영됩니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon yellow">📊</div>
              <h3>상세 분석</h3>
              <p>팀 생산성을 데이터로 확인하세요. 병목 현상을 파악하고 워크플로우를 최적화할 수 있습니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon pink">🔔</div>
              <h3>스마트 알림</h3>
              <p>중요한 업데이트만 받아보세요. AI가 우선순위를 분석해 꼭 필요한 알림만 전달합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-container">
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">활성 사용자</span>
          </div>
          <div className="stat">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">서비스 가동률</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">사용자 평점</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">고객 지원</span>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">후기</span>
            <h2>고객들의 이야기</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">TaskFlow 도입 후 팀 미팅 시간이 50% 줄었습니다. 모든 진행 상황이 투명하게 공유되니까요.</p>
              <div className="testimonial-author">
                <div className="author-avatar">김</div>
                <div className="author-info">
                  <span className="author-name">김서연</span>
                  <span className="author-role">스타트업 PM</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card featured">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">다른 툴은 복잡해서 팀원들이 잘 안 썼는데, TaskFlow는 온보딩 없이도 바로 사용하더라고요. 정말 직관적입니다.</p>
              <div className="testimonial-author">
                <div className="author-avatar">박</div>
                <div className="author-info">
                  <span className="author-name">박준혁</span>
                  <span className="author-role">개발팀 리드</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">분석 대시보드가 특히 좋아요. 어디서 병목이 생기는지 바로 보이니까 빠르게 대응할 수 있어요.</p>
              <div className="testimonial-author">
                <div className="author-avatar">이</div>
                <div className="author-info">
                  <span className="author-name">이지민</span>
                  <span className="author-role">에이전시 대표</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">요금</span>
            <h2>심플한 가격 정책</h2>
            <p>숨겨진 비용 없이 투명하게</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Starter</h3>
                <p className="pricing-description">소규모 팀에 적합</p>
              </div>
              <div className="pricing-price">
                <span className="price">무료</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  최대 5명
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  프로젝트 3개
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  기본 분석
                </li>
              </ul>
              <a href="#" className="btn btn-secondary btn-block">시작하기</a>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">인기</div>
              <div className="pricing-header">
                <h3>Pro</h3>
                <p className="pricing-description">성장하는 팀을 위한</p>
              </div>
              <div className="pricing-price">
                <span className="price">₩15,000</span>
                <span className="price-period">/월/인</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  무제한 팀원
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  무제한 프로젝트
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  고급 분석
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  우선 지원
                </li>
              </ul>
              <a href="#" className="btn btn-primary btn-block">14일 무료 체험</a>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Enterprise</h3>
                <p className="pricing-description">대규모 조직을 위한</p>
              </div>
              <div className="pricing-price">
                <span className="price">맞춤</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Pro 모든 기능
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  SSO/SAML
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  전담 매니저
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  SLA 보장
                </li>
              </ul>
              <a href="#" className="btn btn-secondary btn-block">문의하기</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>지금 바로 시작하세요</h2>
          <p>14일 무료 체험으로 TaskFlow의 모든 기능을 경험해보세요</p>
          <a href="#" className="btn btn-white btn-large">무료로 시작하기</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <div className="logo">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
              </svg>
              <span>TaskFlow</span>
            </div>
            <p>팀 협업을 위한 최고의 선택</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>제품</h4>
              <a href="#">기능</a>
              <a href="#">요금</a>
              <a href="#">통합</a>
            </div>
            <div className="footer-column">
              <h4>회사</h4>
              <a href="#">소개</a>
              <a href="#">블로그</a>
              <a href="#">채용</a>
            </div>
            <div className="footer-column">
              <h4>지원</h4>
              <a href="#">문서</a>
              <a href="#">API</a>
              <a href="#">문의</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>© 2024 TaskFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

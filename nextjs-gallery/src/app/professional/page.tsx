"use client";

import Link from "next/link";

export default function ProfessionalPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap');

        :root {
          /* Professional Navy Blue Palette */
          --navy-050: #E7EDF5;
          --navy-100: #C5D4E8;
          --navy-200: #9BB5D4;
          --navy-300: #7196C0;
          --navy-400: #517DB0;
          --navy-500: #3164A0;
          --navy-600: #2A5588;
          --navy-700: #1E3A5F;
          --navy-800: #152A45;
          --navy-900: #0D1B2A;

          /* Supporting Blue */
          --blue-500: #2563EB;
          --blue-600: #1D4ED8;

          /* Greys */
          --grey-050: #F8FAFC;
          --grey-100: #F1F5F9;
          --grey-200: #E2E8F0;
          --grey-300: #CBD5E1;
          --grey-400: #94A3B8;
          --grey-500: #64748B;
          --grey-600: #475569;
          --grey-700: #334155;
          --grey-800: #1E293B;
          --grey-900: #0F172A;

          /* Success/Warning */
          --green-500: #22C55E;
          --green-600: #16A34A;

          /* Compact spacing */
          --space-1: 4px;
          --space-2: 8px;
          --space-3: 12px;
          --space-4: 16px;
          --space-5: 20px;
          --space-6: 28px;
          --space-7: 40px;
          --space-8: 56px;
          --space-9: 80px;

          /* Small, professional radius */
          --radius-sm: 2px;
          --radius-md: 4px;
          --radius-lg: 6px;

          /* Subtle shadows */
          --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.05);
          --shadow-md: 0 4px 6px rgba(15, 23, 42, 0.07);
          --shadow-lg: 0 10px 20px rgba(15, 23, 42, 0.1);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: var(--grey-700);
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-5);
        }

        /* === Top Bar === */
        .top-bar {
          background: var(--navy-900);
          color: var(--grey-300);
          font-size: 13px;
          padding: var(--space-2) 0;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-bar a {
          color: var(--grey-300);
          text-decoration: none;
        }

        .top-bar a:hover {
          color: white;
        }

        /* === Navigation === */
        .nav {
          background: white;
          border-bottom: 1px solid var(--grey-200);
          padding: var(--space-4) 0;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-weight: 700;
          font-size: 20px;
          color: var(--navy-800);
          text-decoration: none;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: var(--navy-700);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .nav-links {
          display: flex;
          gap: var(--space-1);
        }

        .nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          padding: var(--space-2) var(--space-4);
          font-size: 14px;
          font-weight: 500;
          border-radius: var(--radius-md);
          transition: all 0.2s;
        }

        .nav-links a:hover {
          background: var(--grey-100);
          color: var(--grey-900);
        }

        .nav-actions {
          display: flex;
          gap: var(--space-3);
          align-items: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: all 0.15s;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: var(--navy-700);
          color: white;
        }

        .btn-primary:hover {
          background: var(--navy-800);
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

        .btn-large {
          padding: var(--space-3) var(--space-6);
          font-size: 15px;
        }

        /* === Hero Section === */
        .hero {
          padding: var(--space-9) 0;
          background: linear-gradient(180deg, var(--grey-050) 0%, white 100%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-1) var(--space-3);
          background: var(--green-600);
          color: white;
          font-size: 12px;
          font-weight: 600;
          border-radius: var(--radius-sm);
          margin-bottom: var(--space-4);
        }

        .hero-content h1 {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;
          color: var(--grey-900);
          margin-bottom: var(--space-4);
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-size: 17px;
          color: var(--grey-600);
          margin-bottom: var(--space-6);
          line-height: 1.7;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-3);
          margin-bottom: var(--space-6);
        }

        .hero-stats {
          display: flex;
          gap: var(--space-7);
          padding-top: var(--space-6);
          border-top: 1px solid var(--grey-200);
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: var(--navy-700);
        }

        .stat-label {
          font-size: 13px;
          color: var(--grey-500);
        }

        /* Dashboard Preview */
        .dashboard-preview {
          background: white;
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-3) var(--space-4);
          background: var(--grey-050);
          border-bottom: 1px solid var(--grey-200);
        }

        .dashboard-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--grey-700);
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          font-size: 12px;
          color: var(--green-600);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--green-500);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .dashboard-body {
          padding: var(--space-5);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-5);
        }

        .metric-card {
          padding: var(--space-4);
          background: var(--grey-050);
          border-radius: var(--radius-md);
        }

        .metric-label {
          font-size: 12px;
          color: var(--grey-500);
          margin-bottom: var(--space-1);
        }

        .metric-value {
          font-size: 20px;
          font-weight: 700;
          color: var(--grey-900);
        }

        .metric-value.success {
          color: var(--green-600);
        }

        .chart-placeholder {
          height: 120px;
          background: linear-gradient(180deg, var(--navy-050) 0%, white 100%);
          border-radius: var(--radius-md);
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          padding: var(--space-3);
        }

        .bar {
          width: 24px;
          background: var(--navy-300);
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          transition: height 0.3s;
        }

        /* === Logos Section === */
        .logos {
          padding: var(--space-7) 0;
          border-top: 1px solid var(--grey-200);
          border-bottom: 1px solid var(--grey-200);
          background: var(--grey-050);
        }

        .logos-container {
          text-align: center;
        }

        .logos-label {
          font-size: 13px;
          color: var(--grey-500);
          margin-bottom: var(--space-5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .logos-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-8);
          flex-wrap: wrap;
        }

        .logo-item {
          font-size: 18px;
          font-weight: 700;
          color: var(--grey-400);
        }

        /* === Features Section === */
        .features {
          padding: var(--space-9) 0;
        }

        .section-header {
          max-width: 640px;
          margin-bottom: var(--space-7);
        }

        .section-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--navy-600);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-3);
        }

        .section-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: var(--grey-900);
          margin-bottom: var(--space-3);
          letter-spacing: -0.01em;
        }

        .section-header p {
          font-size: 16px;
          color: var(--grey-500);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .feature-card {
          padding: var(--space-5);
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-md);
          transition: all 0.2s;
        }

        .feature-card:hover {
          border-color: var(--navy-200);
          box-shadow: var(--shadow-md);
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          background: var(--navy-050);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
          font-size: 18px;
        }

        .feature-card h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--grey-800);
          margin-bottom: var(--space-2);
        }

        .feature-card p {
          font-size: 14px;
          color: var(--grey-500);
          line-height: 1.6;
        }

        /* === Compliance Section === */
        .compliance {
          padding: var(--space-9) 0;
          background: var(--grey-050);
        }

        .compliance-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .compliance-content h2 {
          font-size: 28px;
          font-weight: 700;
          color: var(--grey-900);
          margin-bottom: var(--space-4);
        }

        .compliance-content > p {
          color: var(--grey-600);
          margin-bottom: var(--space-5);
        }

        .compliance-list {
          list-style: none;
        }

        .compliance-list li {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-2) 0;
          font-size: 14px;
          color: var(--grey-700);
        }

        .compliance-list .check-icon {
          color: var(--green-600);
          font-weight: bold;
        }

        .certifications {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
        }

        .cert-badge {
          padding: var(--space-5);
          background: white;
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-md);
          text-align: center;
        }

        .cert-badge strong {
          display: block;
          font-size: 18px;
          color: var(--navy-700);
          margin-bottom: var(--space-1);
        }

        .cert-badge span {
          font-size: 13px;
          color: var(--grey-500);
        }

        /* === Pricing Section === */
        .pricing {
          padding: var(--space-9) 0;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .pricing-card {
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-md);
          padding: var(--space-6);
          position: relative;
        }

        .pricing-card.featured {
          border: 2px solid var(--navy-600);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--navy-600);
          color: white;
          font-size: 11px;
          font-weight: 600;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pricing-header {
          margin-bottom: var(--space-5);
          padding-bottom: var(--space-5);
          border-bottom: 1px solid var(--grey-200);
        }

        .pricing-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: var(--grey-800);
          margin-bottom: var(--space-1);
        }

        .pricing-card .desc {
          font-size: 13px;
          color: var(--grey-500);
          margin-bottom: var(--space-4);
        }

        .price {
          font-size: 36px;
          font-weight: 700;
          color: var(--grey-900);
        }

        .price-period {
          font-size: 14px;
          color: var(--grey-500);
          font-weight: 400;
        }

        .pricing-features {
          list-style: none;
          margin-bottom: var(--space-6);
        }

        .pricing-features li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
          padding: var(--space-2) 0;
          font-size: 14px;
          color: var(--grey-600);
        }

        .pricing-features .check {
          color: var(--navy-600);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .btn-block {
          width: 100%;
          text-align: center;
        }

        /* === CTA Section === */
        .cta {
          padding: var(--space-9) 0;
          background: var(--navy-800);
        }

        .cta-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cta h2 {
          font-size: 28px;
          font-weight: 700;
          color: white;
          margin-bottom: var(--space-2);
        }

        .cta p {
          color: var(--grey-300);
        }

        .cta-actions {
          display: flex;
          gap: var(--space-3);
        }

        .btn-white {
          background: white;
          color: var(--navy-800);
        }

        .btn-white:hover {
          background: var(--grey-100);
        }

        .btn-outline-white {
          background: transparent;
          color: white;
          border: 1px solid var(--grey-500);
        }

        .btn-outline-white:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
        }

        /* === Footer === */
        .footer {
          padding: var(--space-8) 0;
          background: var(--navy-900);
          color: var(--grey-400);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr repeat(4, 1fr);
          gap: var(--space-7);
          margin-bottom: var(--space-7);
        }

        .footer-brand p {
          font-size: 14px;
          margin-top: var(--space-3);
          max-width: 280px;
        }

        .footer-column h4 {
          font-size: 13px;
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-4);
        }

        .footer-column a {
          display: block;
          font-size: 14px;
          color: var(--grey-400);
          text-decoration: none;
          padding: var(--space-1) 0;
        }

        .footer-column a:hover {
          color: white;
        }

        .footer-bottom {
          padding-top: var(--space-6);
          border-top: 1px solid var(--navy-700);
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        /* Back link */
        .back-link {
          position: fixed;
          bottom: var(--space-5);
          left: var(--space-5);
          padding: var(--space-2) var(--space-4);
          background: white;
          color: var(--grey-700);
          text-decoration: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 13px;
          box-shadow: var(--shadow-md);
          z-index: 100;
          border: 1px solid var(--grey-200);
        }

        .back-link:hover {
          background: var(--grey-050);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container,
          .compliance-container {
            grid-template-columns: 1fr;
          }
          .dashboard-preview {
            display: none;
          }
          .features-grid,
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cta-container {
            flex-direction: column;
            text-align: center;
            gap: var(--space-5);
          }
        }

        @media (max-width: 768px) {
          .top-bar { display: none; }
          .nav-links { display: none; }
          .hero-content h1 { font-size: 32px; }
          .certifications { grid-template-columns: 1fr; }
        }
      `}</style>

      <Link href="/" className="back-link">← Gallery</Link>

      <div className="top-bar">
        <div className="container top-bar-content">
          <span>엔터프라이즈 보안 솔루션 | ISO 27001 인증</span>
          <div>
            <a href="#">문의하기</a> · <a href="#">1588-1234</a>
          </div>
        </div>
      </div>

      <nav className="nav">
        <div className="container nav-container">
          <a href="#" className="logo">
            <div className="logo-icon">🛡️</div>
            SecureVault
          </a>
          <div className="nav-links">
            <a href="#features">솔루션</a>
            <a href="#compliance">보안인증</a>
            <a href="#pricing">요금제</a>
            <a href="#">리소스</a>
            <a href="#">고객사례</a>
          </div>
          <div className="nav-actions">
            <a href="#" className="btn btn-secondary">로그인</a>
            <a href="#" className="btn btn-primary">데모 요청</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✓</span>
              SOC 2 Type II 인증 완료
            </div>
            <h1>기업 데이터 보안의<br />새로운 기준을 제시합니다</h1>
            <p className="hero-description">
              SecureVault는 Fortune 500대 기업이 신뢰하는 엔터프라이즈급
              보안 솔루션입니다. 제로 트러스트 아키텍처 기반으로 귀사의
              민감한 데이터를 완벽하게 보호합니다.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn btn-primary btn-large">무료 보안 진단 신청</a>
              <a href="#" className="btn btn-secondary btn-large">제품 데모 보기</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-value">500+</span>
                <span className="stat-label">엔터프라이즈 고객사</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">99.99%</span>
                <span className="stat-label">서비스 가용성</span>
              </div>
              <div className="hero-stat">
                <span className="stat-value">0</span>
                <span className="stat-label">보안 침해 사고</span>
              </div>
            </div>
          </div>
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <span className="dashboard-title">보안 대시보드</span>
              <span className="status-badge">
                <span className="status-dot"></span>
                실시간 모니터링 중
              </span>
            </div>
            <div className="dashboard-body">
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-label">위협 탐지</div>
                  <div className="metric-value">2,847</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">차단된 공격</div>
                  <div className="metric-value success">100%</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">취약점</div>
                  <div className="metric-value">0</div>
                </div>
              </div>
              <div className="chart-placeholder">
                <div className="bar" style={{height: '40%'}}></div>
                <div className="bar" style={{height: '65%'}}></div>
                <div className="bar" style={{height: '45%'}}></div>
                <div className="bar" style={{height: '80%'}}></div>
                <div className="bar" style={{height: '55%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
                <div className="bar" style={{height: '50%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logos">
        <div className="container logos-container">
          <p className="logos-label">국내외 선도 기업들이 신뢰합니다</p>
          <div className="logos-grid">
            <span className="logo-item">삼성전자</span>
            <span className="logo-item">현대자동차</span>
            <span className="logo-item">SK텔레콤</span>
            <span className="logo-item">LG전자</span>
            <span className="logo-item">네이버</span>
            <span className="logo-item">카카오</span>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <p className="section-label">솔루션</p>
            <h2>엔터프라이즈급 보안 기능</h2>
            <p>제로 트러스트 원칙에 기반한 다층 보안 아키텍처로 모든 위협으로부터 보호합니다.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>제로 트러스트 아키텍처</h3>
              <p>모든 접근 요청을 검증하고, 최소 권한 원칙을 적용하여 내부 위협까지 방지합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>엔드투엔드 암호화</h3>
              <p>AES-256 및 RSA-4096 암호화로 전송 중 및 저장 중인 모든 데이터를 보호합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>실시간 위협 모니터링</h3>
              <p>AI 기반 이상 행동 탐지로 24/7 실시간 모니터링 및 즉각적인 위협 대응이 가능합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>ID 및 접근 관리</h3>
              <p>SSO, MFA, RBAC을 통한 통합 ID 관리로 접근 권한을 세밀하게 제어합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>규정 준수 보고서</h3>
              <p>GDPR, CCPA, 개인정보보호법 등 각종 규정 준수를 위한 자동화된 보고서를 제공합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>자동 백업 및 복구</h3>
              <p>랜섬웨어 등 재해 상황에서도 즉시 복구 가능한 자동 백업 시스템을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="compliance" className="compliance">
        <div className="container compliance-container">
          <div className="compliance-content">
            <h2>글로벌 보안 인증 완비</h2>
            <p>SecureVault는 국내외 주요 보안 인증을 모두 취득하여 귀사의 규정 준수 요건을 충족합니다.</p>
            <ul className="compliance-list">
              <li>
                <span className="check-icon">✓</span>
                ISO 27001 정보보안 관리체계 인증
              </li>
              <li>
                <span className="check-icon">✓</span>
                SOC 2 Type II 감사 보고서
              </li>
              <li>
                <span className="check-icon">✓</span>
                GDPR 및 CCPA 준수
              </li>
              <li>
                <span className="check-icon">✓</span>
                KISA ISMS-P 인증
              </li>
            </ul>
          </div>
          <div className="certifications">
            <div className="cert-badge">
              <strong>ISO 27001</strong>
              <span>정보보안 관리</span>
            </div>
            <div className="cert-badge">
              <strong>SOC 2</strong>
              <span>Type II 인증</span>
            </div>
            <div className="cert-badge">
              <strong>ISMS-P</strong>
              <span>개인정보보호</span>
            </div>
            <div className="cert-badge">
              <strong>CSA STAR</strong>
              <span>클라우드 보안</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <p className="section-label">요금제</p>
            <h2>비즈니스 규모에 맞는 플랜</h2>
            <p>모든 플랜에 24/7 기술 지원이 포함되어 있습니다.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Business</h3>
                <p className="desc">중소기업을 위한 필수 보안</p>
                <div className="price">₩500,000<span className="price-period">/월</span></div>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> 최대 100명 사용자</li>
                <li><span className="check">✓</span> 기본 위협 탐지</li>
                <li><span className="check">✓</span> SSO 연동</li>
                <li><span className="check">✓</span> 이메일 지원</li>
              </ul>
              <a href="#" className="btn btn-secondary btn-block">14일 무료 체험</a>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-badge">권장</div>
              <div className="pricing-header">
                <h3>Enterprise</h3>
                <p className="desc">대기업을 위한 종합 보안</p>
                <div className="price">₩2,000,000<span className="price-period">/월</span></div>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> 무제한 사용자</li>
                <li><span className="check">✓</span> AI 기반 고급 위협 탐지</li>
                <li><span className="check">✓</span> SIEM/SOAR 연동</li>
                <li><span className="check">✓</span> 전담 CSM 배정</li>
                <li><span className="check">✓</span> 24/7 긴급 대응</li>
              </ul>
              <a href="#" className="btn btn-primary btn-block">도입 상담 신청</a>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Custom</h3>
                <p className="desc">맞춤형 보안 솔루션</p>
                <div className="price">견적 문의</div>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> Enterprise 모든 기능</li>
                <li><span className="check">✓</span> 온프레미스 배포 옵션</li>
                <li><span className="check">✓</span> 커스텀 SLA</li>
                <li><span className="check">✓</span> 전용 인프라</li>
              </ul>
              <a href="#" className="btn btn-secondary btn-block">영업팀 연락</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-container">
          <div>
            <h2>귀사의 보안 취약점을 진단해드립니다</h2>
            <p>전문 보안 컨설턴트가 무료로 보안 현황을 분석해드립니다.</p>
          </div>
          <div className="cta-actions">
            <a href="#" className="btn btn-white btn-large">무료 보안 진단 신청</a>
            <a href="#" className="btn btn-outline-white btn-large">제품 소개서 다운로드</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo" style={{color: 'white'}}>
                <div className="logo-icon">🛡️</div>
                SecureVault
              </a>
              <p>기업 데이터 보안의 새로운 기준. Fortune 500대 기업이 신뢰하는 엔터프라이즈 보안 솔루션.</p>
            </div>
            <div className="footer-column">
              <h4>제품</h4>
              <a href="#">기능 소개</a>
              <a href="#">요금제</a>
              <a href="#">보안 백서</a>
              <a href="#">API 문서</a>
            </div>
            <div className="footer-column">
              <h4>회사</h4>
              <a href="#">소개</a>
              <a href="#">채용</a>
              <a href="#">뉴스룸</a>
              <a href="#">파트너</a>
            </div>
            <div className="footer-column">
              <h4>리소스</h4>
              <a href="#">블로그</a>
              <a href="#">고객 사례</a>
              <a href="#">웨비나</a>
              <a href="#">가이드</a>
            </div>
            <div className="footer-column">
              <h4>지원</h4>
              <a href="#">고객센터</a>
              <a href="#">기술 지원</a>
              <a href="#">서비스 상태</a>
              <a href="#">문의하기</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2024 SecureVault Inc. All rights reserved.</span>
            <span>개인정보처리방침 · 이용약관 · 보안정책</span>
          </div>
        </div>
      </footer>
    </>
  );
}

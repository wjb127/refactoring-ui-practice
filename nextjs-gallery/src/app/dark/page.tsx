"use client";

import Link from "next/link";

export default function DarkPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg-primary: #0D1117;
          --bg-secondary: #161B22;
          --bg-tertiary: #21262D;
          --bg-elevated: #30363D;

          --text-primary: #F0F6FC;
          --text-secondary: #8B949E;
          --text-tertiary: #6E7681;

          --accent-blue: #58A6FF;
          --accent-purple: #A371F7;
          --accent-green: #3FB950;
          --accent-orange: #F0883E;
          --accent-pink: #F778BA;
          --accent-cyan: #56D4DD;

          --syntax-keyword: #FF7B72;
          --syntax-string: #A5D6FF;
          --syntax-function: #D2A8FF;
          --syntax-variable: #FFA657;
          --syntax-comment: #8B949E;

          --border-default: #30363D;
          --border-muted: #21262D;

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

          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 12px;

          --glow-blue: 0 0 20px rgba(88, 166, 255, 0.3);
          --glow-purple: 0 0 20px rgba(163, 113, 247, 0.3);
          --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.5);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.6;
        }

        .dark-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(13, 17, 23, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-default);
          padding: var(--space-4) var(--space-6);
          z-index: 1000;
        }

        .dark-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dark-logo {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 20px;
          color: var(--text-primary);
        }

        .dark-logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .dark-nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .dark-nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .dark-nav-links a:hover {
          color: var(--text-primary);
        }

        .dark-btn {
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .dark-btn-ghost {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border-default);
        }

        .dark-btn-ghost:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .dark-btn-primary {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          color: white;
        }

        .dark-btn-primary:hover {
          box-shadow: var(--glow-blue);
          transform: translateY(-1px);
        }

        .dark-btn-large {
          padding: var(--space-3) var(--space-6);
          font-size: 16px;
        }

        .dark-hero {
          padding: var(--space-10) var(--space-6);
          padding-top: calc(var(--space-10) + 80px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .dark-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(88, 166, 255, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .dark-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-1) var(--space-3);
          background: var(--bg-secondary);
          border: 1px solid var(--border-default);
          border-radius: 100px;
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: var(--space-6);
        }

        .dark-hero-badge-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-green);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .dark-hero h1 {
          font-size: 64px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: var(--space-5);
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-blue) 50%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dark-hero p {
          font-size: 20px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto var(--space-7);
          line-height: 1.7;
        }

        .dark-hero-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          margin-bottom: var(--space-8);
        }

        .dark-code-preview {
          max-width: 700px;
          margin: 0 auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          overflow: hidden;
          text-align: left;
          box-shadow: var(--shadow-lg);
        }

        .dark-code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-default);
        }

        .dark-code-dots {
          display: flex;
          gap: var(--space-2);
        }

        .dark-code-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dark-code-dot.red { background: #FF5F56; }
        .dark-code-dot.yellow { background: #FFBD2E; }
        .dark-code-dot.green { background: #27C93F; }

        .dark-code-filename {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--text-secondary);
        }

        .dark-code-body {
          padding: var(--space-5);
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          line-height: 1.8;
          overflow-x: auto;
        }

        .dark-code-line {
          display: flex;
        }

        .dark-code-line-number {
          color: var(--text-tertiary);
          width: 30px;
          flex-shrink: 0;
          user-select: none;
        }

        .keyword { color: var(--syntax-keyword); }
        .string { color: var(--syntax-string); }
        .function { color: var(--syntax-function); }
        .variable { color: var(--syntax-variable); }
        .comment { color: var(--syntax-comment); font-style: italic; }

        .dark-features {
          padding: var(--space-10) var(--space-6);
          background: var(--bg-secondary);
        }

        .dark-section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .dark-section-header {
          text-align: center;
          margin-bottom: var(--space-9);
        }

        .dark-section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: var(--space-3);
        }

        .dark-section-title {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .dark-section-desc {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .dark-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .dark-feature-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          transition: all 0.3s;
        }

        .dark-feature-card:hover {
          border-color: var(--accent-blue);
          box-shadow: var(--glow-blue);
          transform: translateY(-4px);
        }

        .dark-feature-icon {
          width: 48px;
          height: 48px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: var(--space-4);
        }

        .dark-feature-card:nth-child(1) .dark-feature-icon { color: var(--accent-blue); }
        .dark-feature-card:nth-child(2) .dark-feature-icon { color: var(--accent-purple); }
        .dark-feature-card:nth-child(3) .dark-feature-icon { color: var(--accent-green); }
        .dark-feature-card:nth-child(4) .dark-feature-icon { color: var(--accent-orange); }
        .dark-feature-card:nth-child(5) .dark-feature-icon { color: var(--accent-pink); }
        .dark-feature-card:nth-child(6) .dark-feature-icon { color: var(--accent-cyan); }

        .dark-feature-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: var(--space-2);
        }

        .dark-feature-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .dark-stats {
          padding: var(--space-9) var(--space-6);
        }

        .dark-stats-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
        }

        .dark-stat-item {
          text-align: center;
          padding: var(--space-5);
        }

        .dark-stat-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 48px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--space-2);
        }

        .dark-stat-label {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .dark-cta {
          padding: var(--space-10) var(--space-6);
          text-align: center;
          position: relative;
        }

        .dark-cta::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(163, 113, 247, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .dark-cta-box {
          max-width: 700px;
          margin: 0 auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: var(--space-9);
          position: relative;
        }

        .dark-cta h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .dark-cta p {
          font-size: 16px;
          color: var(--text-secondary);
          margin-bottom: var(--space-6);
        }

        .dark-cta-input-group {
          display: flex;
          gap: var(--space-3);
          max-width: 450px;
          margin: 0 auto;
        }

        .dark-cta-input {
          flex: 1;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 14px;
          font-family: 'JetBrains Mono', monospace;
        }

        .dark-cta-input::placeholder {
          color: var(--text-tertiary);
        }

        .dark-cta-input:focus {
          outline: none;
          border-color: var(--accent-blue);
        }

        .dark-footer {
          padding: var(--space-8) var(--space-6);
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-default);
        }

        .dark-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-8);
        }

        .dark-footer-brand p {
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: var(--space-3);
          max-width: 280px;
        }

        .dark-footer-column h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: var(--space-4);
          color: var(--text-primary);
        }

        .dark-footer-links {
          list-style: none;
        }

        .dark-footer-links li {
          margin-bottom: var(--space-2);
        }

        .dark-footer-links a {
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }

        .dark-footer-links a:hover {
          color: var(--accent-blue);
        }

        .dark-footer-bottom {
          max-width: 1200px;
          margin: var(--space-7) auto 0;
          padding-top: var(--space-6);
          border-top: 1px solid var(--border-default);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: var(--text-tertiary);
        }

        .dark-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-default);
          color: var(--text-secondary);
          padding: var(--space-3) var(--space-4);
          border-radius: var(--radius-md);
          text-decoration: none;
          font-size: 14px;
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.2s;
          z-index: 100;
        }

        .dark-back-link:hover {
          background: var(--bg-elevated);
          color: var(--text-primary);
          border-color: var(--accent-blue);
        }

        @media (max-width: 1024px) {
          .dark-features-grid { grid-template-columns: repeat(2, 1fr); }
          .dark-footer-container { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .dark-hero h1 { font-size: 40px; }
          .dark-features-grid { grid-template-columns: 1fr; }
          .dark-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .dark-nav-links { display: none; }
        }
      `}</style>

      <nav className="dark-nav">
        <div className="dark-nav-container">
          <div className="dark-logo">
            <span className="dark-logo-icon">&lt;/&gt;</span>
            DevFlow
          </div>
          <ul className="dark-nav-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
          <div style={{display: 'flex', gap: '12px'}}>
            <a href="#" className="dark-btn dark-btn-ghost">로그인</a>
            <a href="#" className="dark-btn dark-btn-primary">시작하기</a>
          </div>
        </div>
      </nav>

      <section className="dark-hero">
        <div className="dark-hero-badge">
          <span className="dark-hero-badge-dot"></span>
          v2.0 릴리즈 - 새로운 기능 확인하기
        </div>
        <h1>개발자를 위한<br />통합 API 플랫폼</h1>
        <p>결제, 인증, 알림, 분석까지. 복잡한 백엔드를 단 몇 줄의 코드로 구현하세요.</p>
        <div className="dark-hero-actions">
          <a href="#" className="dark-btn dark-btn-primary dark-btn-large">무료로 시작하기</a>
          <a href="#" className="dark-btn dark-btn-ghost dark-btn-large">문서 보기 →</a>
        </div>

        <div className="dark-code-preview">
          <div className="dark-code-header">
            <div className="dark-code-dots">
              <span className="dark-code-dot red"></span>
              <span className="dark-code-dot yellow"></span>
              <span className="dark-code-dot green"></span>
            </div>
            <span className="dark-code-filename">payment.ts</span>
          </div>
          <div className="dark-code-body">
            <div className="dark-code-line">
              <span className="dark-code-line-number">1</span>
              <span><span className="keyword">import</span> {"{ DevFlow }"} <span className="keyword">from</span> <span className="string">&apos;@devflow/sdk&apos;</span>;</span>
            </div>
            <div className="dark-code-line">
              <span className="dark-code-line-number">2</span>
              <span></span>
            </div>
            <div className="dark-code-line">
              <span className="dark-code-line-number">3</span>
              <span><span className="keyword">const</span> <span className="variable">client</span> = <span className="keyword">new</span> <span className="function">DevFlow</span>(<span className="string">&apos;sk_live_...&apos;</span>);</span>
            </div>
            <div className="dark-code-line">
              <span className="dark-code-line-number">4</span>
              <span></span>
            </div>
            <div className="dark-code-line">
              <span className="dark-code-line-number">5</span>
              <span><span className="comment">// 결제 생성 - 단 3줄로 완료</span></span>
            </div>
            <div className="dark-code-line">
              <span className="dark-code-line-number">6</span>
              <span><span className="keyword">const</span> <span className="variable">payment</span> = <span className="keyword">await</span> client.<span className="function">payments.create</span>({"{"}</span>
            </div>
            <div className="dark-code-line">
              <span className="dark-code-line-number">7</span>
              <span>  amount: <span className="variable">50000</span>,</span>
            </div>
            <div className="dark-code-line">
              <span className="dark-code-line-number">8</span>
              <span>  currency: <span className="string">&apos;KRW&apos;</span></span>
            </div>
            <div className="dark-code-line">
              <span className="dark-code-line-number">9</span>
              <span>{"}"});</span>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-features">
        <div className="dark-section-container">
          <div className="dark-section-header">
            <p className="dark-section-label">Features</p>
            <h2 className="dark-section-title">개발에만 집중하세요</h2>
            <p className="dark-section-desc">인프라 관리는 저희가 할게요. 검증된 API로 빠르게 제품을 출시하세요.</p>
          </div>

          <div className="dark-features-grid">
            <div className="dark-feature-card">
              <div className="dark-feature-icon">💳</div>
              <h3>결제 API</h3>
              <p>카드, 계좌이체, 간편결제까지. PCI-DSS 인증을 받은 안전한 결제 인프라.</p>
            </div>
            <div className="dark-feature-card">
              <div className="dark-feature-icon">🔐</div>
              <h3>인증 API</h3>
              <p>소셜 로그인, 2FA, Magic Link까지. 안전한 사용자 인증을 쉽게 구현.</p>
            </div>
            <div className="dark-feature-card">
              <div className="dark-feature-icon">📊</div>
              <h3>분석 API</h3>
              <p>실시간 이벤트 트래킹과 대시보드. 데이터 기반 의사결정.</p>
            </div>
            <div className="dark-feature-card">
              <div className="dark-feature-icon">📧</div>
              <h3>알림 API</h3>
              <p>이메일, SMS, 푸시 알림을 통합 API 하나로. 템플릿 관리도 간편.</p>
            </div>
            <div className="dark-feature-card">
              <div className="dark-feature-icon">🗄️</div>
              <h3>스토리지 API</h3>
              <p>파일 업로드와 CDN 배포를 자동으로 처리.</p>
            </div>
            <div className="dark-feature-card">
              <div className="dark-feature-icon">⚡</div>
              <h3>Webhook</h3>
              <p>이벤트 기반 실시간 알림. 재시도 로직 내장.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-stats">
        <div className="dark-stats-grid">
          <div className="dark-stat-item">
            <div className="dark-stat-value">99.99%</div>
            <div className="dark-stat-label">Uptime SLA</div>
          </div>
          <div className="dark-stat-item">
            <div className="dark-stat-value">&lt;50ms</div>
            <div className="dark-stat-label">평균 응답 시간</div>
          </div>
          <div className="dark-stat-item">
            <div className="dark-stat-value">10K+</div>
            <div className="dark-stat-label">활성 개발자</div>
          </div>
          <div className="dark-stat-item">
            <div className="dark-stat-value">1B+</div>
            <div className="dark-stat-label">월간 API 호출</div>
          </div>
        </div>
      </section>

      <section className="dark-cta">
        <div className="dark-cta-box">
          <h2>5분 만에 첫 API 호출</h2>
          <p>API 키를 발급받고 바로 시작하세요. 신용카드 필요 없습니다.</p>
          <div className="dark-cta-input-group">
            <input type="email" className="dark-cta-input" placeholder="your@email.com" />
            <button className="dark-btn dark-btn-primary">API 키 발급</button>
          </div>
        </div>
      </section>

      <footer className="dark-footer">
        <div className="dark-footer-container">
          <div className="dark-footer-brand">
            <div className="dark-logo">
              <span className="dark-logo-icon">&lt;/&gt;</span>
              DevFlow
            </div>
            <p>개발자 경험을 최우선으로. 더 나은 제품을 더 빠르게.</p>
          </div>
          <div className="dark-footer-column">
            <h4>Product</h4>
            <ul className="dark-footer-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div className="dark-footer-column">
            <h4>Developers</h4>
            <ul className="dark-footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">SDK</a></li>
            </ul>
          </div>
          <div className="dark-footer-column">
            <h4>Company</h4>
            <ul className="dark-footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="dark-footer-bottom">
          <span>© 2024 DevFlow. All rights reserved.</span>
          <div style={{display: 'flex', gap: '24px'}}>
            <a href="#" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>GitHub</a>
            <a href="#" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>Twitter</a>
            <a href="#" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>Discord</a>
          </div>
        </div>
      </footer>

      <Link href="/" className="dark-back-link">← 갤러리로</Link>
    </>
  );
}

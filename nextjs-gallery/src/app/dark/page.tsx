"use client";

import Link from "next/link";

export default function DarkPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');

        /* ============================================
           Style 6: Dark Mode (Developer Tools)
           - 다크 배경 (#0D1117, #161B22)
           - 네온 블루/퍼플 악센트
           - 모노스페이스 코드 스타일
           - 터미널/코드 UI 요소
           - 개발자 친화적 미학
           ============================================ */

        :root {
          /* Dark Mode Color Palette */
          --bg-primary: #0D1117;
          --bg-secondary: #161B22;
          --bg-tertiary: #21262D;
          --bg-elevated: #30363D;

          --text-primary: #F0F6FC;
          --text-secondary: #8B949E;
          --text-tertiary: #6E7681;

          /* Neon Accents */
          --accent-blue: #58A6FF;
          --accent-purple: #A371F7;
          --accent-green: #3FB950;
          --accent-orange: #F0883E;
          --accent-pink: #F778BA;
          --accent-cyan: #56D4DD;

          /* Syntax Highlighting Colors */
          --syntax-keyword: #FF7B72;
          --syntax-string: #A5D6FF;
          --syntax-function: #D2A8FF;
          --syntax-variable: #FFA657;
          --syntax-comment: #8B949E;

          /* Border */
          --border-default: #30363D;
          --border-muted: #21262D;

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

          /* Typography */
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

          /* Border Radius */
          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 12px;

          /* Shadows - Glow Effect */
          --glow-blue: 0 0 20px rgba(88, 166, 255, 0.3);
          --glow-purple: 0 0 20px rgba(163, 113, 247, 0.3);
          --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.5);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-sans);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.6;
        }

        /* Navigation */
        .nav {
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

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 20px;
          color: var(--text-primary);
          text-decoration: none;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .nav-actions {
          display: flex;
          gap: var(--space-3);
        }

        /* Buttons */
        .btn {
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          font-family: var(--font-sans);
        }

        .btn-ghost {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border-default);
        }

        .btn-ghost:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          color: white;
        }

        .btn-primary:hover {
          box-shadow: var(--glow-blue);
          transform: translateY(-1px);
        }

        .btn-large {
          padding: var(--space-3) var(--space-6);
          font-size: 16px;
        }

        /* Hero Section */
        .hero {
          padding: var(--space-10) var(--space-6);
          padding-top: calc(var(--space-10) + 80px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
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

        .hero-badge {
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

        .hero-badge-dot {
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

        .hero h1 {
          font-size: 64px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: var(--space-5);
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-blue) 50%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: 20px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto var(--space-7);
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          margin-bottom: var(--space-8);
        }

        /* Code Block */
        .code-preview {
          max-width: 700px;
          margin: 0 auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          overflow: hidden;
          text-align: left;
          box-shadow: var(--shadow-lg);
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-default);
        }

        .code-dots {
          display: flex;
          gap: var(--space-2);
        }

        .code-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .code-dot.red { background: #FF5F56; }
        .code-dot.yellow { background: #FFBD2E; }
        .code-dot.green { background: #27C93F; }

        .code-filename {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-secondary);
        }

        .code-body {
          padding: var(--space-5);
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.8;
          overflow-x: auto;
        }

        .code-line {
          display: flex;
        }

        .code-line-number {
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

        /* Features Section */
        .features {
          padding: var(--space-10) var(--space-6);
          background: var(--bg-secondary);
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-9);
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: var(--space-3);
        }

        .section-title {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .section-desc {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .feature-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          transition: all 0.3s;
        }

        .feature-card:hover {
          border-color: var(--accent-blue);
          box-shadow: var(--glow-blue);
          transform: translateY(-4px);
        }

        .feature-icon {
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

        .feature-card:nth-child(1) .feature-icon { color: var(--accent-blue); }
        .feature-card:nth-child(2) .feature-icon { color: var(--accent-purple); }
        .feature-card:nth-child(3) .feature-icon { color: var(--accent-green); }
        .feature-card:nth-child(4) .feature-icon { color: var(--accent-orange); }
        .feature-card:nth-child(5) .feature-icon { color: var(--accent-pink); }
        .feature-card:nth-child(6) .feature-icon { color: var(--accent-cyan); }

        .feature-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: var(--space-2);
        }

        .feature-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* API Endpoints Section */
        .endpoints {
          padding: var(--space-10) var(--space-6);
        }

        .endpoints-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .endpoints-text h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .endpoints-text p {
          font-size: 16px;
          color: var(--text-secondary);
          margin-bottom: var(--space-6);
          line-height: 1.7;
        }

        .endpoint-list {
          list-style: none;
        }

        .endpoint-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--border-muted);
        }

        .endpoint-method {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
        }

        .method-get { background: rgba(63, 185, 80, 0.2); color: var(--accent-green); }
        .method-post { background: rgba(88, 166, 255, 0.2); color: var(--accent-blue); }
        .method-put { background: rgba(240, 136, 62, 0.2); color: var(--accent-orange); }
        .method-delete { background: rgba(255, 123, 114, 0.2); color: var(--syntax-keyword); }

        .endpoint-path {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--text-primary);
        }

        .endpoints-demo {
          background: var(--bg-secondary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .demo-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-default);
        }

        .demo-tab {
          padding: var(--space-3) var(--space-5);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
        }

        .demo-tab.active {
          color: var(--accent-blue);
          border-bottom-color: var(--accent-blue);
        }

        .demo-content {
          padding: var(--space-5);
        }

        .demo-content pre {
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.7;
          overflow-x: auto;
        }

        /* Stats Section */
        .stats {
          padding: var(--space-9) var(--space-6);
          background: var(--bg-secondary);
        }

        .stats-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
        }

        .stat-item {
          text-align: center;
          padding: var(--space-5);
        }

        .stat-value {
          font-family: var(--font-mono);
          font-size: 48px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--space-2);
        }

        .stat-label {
          font-size: 14px;
          color: var(--text-secondary);
        }

        /* Pricing Section */
        .pricing {
          padding: var(--space-10) var(--space-6);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          max-width: 1000px;
          margin: 0 auto;
        }

        .pricing-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: var(--space-7);
          position: relative;
        }

        .pricing-card.featured {
          border-color: var(--accent-blue);
          box-shadow: var(--glow-blue);
        }

        .pricing-badge {
          position: absolute;
          top: calc(var(--space-4) * -1);
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          color: white;
          font-size: 12px;
          font-weight: 600;
          padding: var(--space-1) var(--space-3);
          border-radius: 100px;
        }

        .pricing-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: var(--space-2);
        }

        .pricing-desc {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: var(--space-5);
        }

        .pricing-price {
          margin-bottom: var(--space-5);
        }

        .pricing-amount {
          font-size: 48px;
          font-weight: 700;
        }

        .pricing-period {
          font-size: 14px;
          color: var(--text-secondary);
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
          font-size: 14px;
          color: var(--text-secondary);
        }

        .pricing-features li::before {
          content: '✓';
          color: var(--accent-green);
          font-weight: 600;
        }

        .pricing-card .btn {
          width: 100%;
          text-align: center;
          display: block;
        }

        /* CTA Section */
        .cta {
          padding: var(--space-10) var(--space-6);
          text-align: center;
          position: relative;
        }

        .cta::before {
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

        .cta-box {
          max-width: 700px;
          margin: 0 auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          padding: var(--space-9);
          position: relative;
        }

        .cta h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .cta p {
          font-size: 16px;
          color: var(--text-secondary);
          margin-bottom: var(--space-6);
        }

        .cta-input-group {
          display: flex;
          gap: var(--space-3);
          max-width: 450px;
          margin: 0 auto;
        }

        .cta-input {
          flex: 1;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 14px;
          font-family: var(--font-mono);
        }

        .cta-input::placeholder {
          color: var(--text-tertiary);
        }

        .cta-input:focus {
          outline: none;
          border-color: var(--accent-blue);
        }

        /* Footer */
        .footer {
          padding: var(--space-8) var(--space-6);
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-default);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-8);
        }

        .footer-brand p {
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: var(--space-3);
          max-width: 280px;
        }

        .footer-column h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: var(--space-4);
          color: var(--text-primary);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: var(--space-2);
        }

        .footer-links a {
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--accent-blue);
        }

        .footer-bottom {
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

        .footer-social {
          display: flex;
          gap: var(--space-4);
        }

        .footer-social a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-social a:hover {
          color: var(--accent-blue);
        }

        /* Back Link */
        .back-link {
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
          font-family: var(--font-mono);
          transition: all 0.2s;
          z-index: 100;
        }

        .back-link:hover {
          background: var(--bg-elevated);
          color: var(--text-primary);
          border-color: var(--accent-blue);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .endpoints-content {
            grid-template-columns: 1fr;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 40px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-container {
            grid-template-columns: 1fr 1fr;
          }

          .nav-links {
            display: none;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">&lt;/&gt;</span>
            DevFlow
          </a>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#changelog">Changelog</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#" className="btn btn-ghost">로그인</a>
            <a href="#" className="btn btn-primary">시작하기</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          v2.0 릴리즈 - 새로운 기능 확인하기
        </div>
        <h1>개발자를 위한<br />통합 API 플랫폼</h1>
        <p>결제, 인증, 알림, 분석까지. 복잡한 백엔드를 단 몇 줄의 코드로 구현하세요. 확장 가능하고 안정적인 인프라를 제공합니다.</p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary btn-large">무료로 시작하기</a>
          <a href="#" className="btn btn-ghost btn-large">문서 보기 →</a>
        </div>

        {/* Code Preview */}
        <div className="code-preview">
          <div className="code-header">
            <div className="code-dots">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
            </div>
            <span className="code-filename">payment.ts</span>
          </div>
          <div className="code-body">
            <div className="code-line">
              <span className="code-line-number">1</span>
              <span><span className="keyword">import</span> {"{ DevFlow }"} <span className="keyword">from</span> <span className="string">'@devflow/sdk'</span>;</span>
            </div>
            <div className="code-line">
              <span className="code-line-number">2</span>
              <span></span>
            </div>
            <div className="code-line">
              <span className="code-line-number">3</span>
              <span><span className="keyword">const</span> <span className="variable">client</span> = <span className="keyword">new</span> <span className="function">DevFlow</span>(<span className="string">'sk_live_...'</span>);</span>
            </div>
            <div className="code-line">
              <span className="code-line-number">4</span>
              <span></span>
            </div>
            <div className="code-line">
              <span className="code-line-number">5</span>
              <span><span className="comment">// 결제 생성 - 단 3줄로 완료</span></span>
            </div>
            <div className="code-line">
              <span className="code-line-number">6</span>
              <span><span className="keyword">const</span> <span className="variable">payment</span> = <span className="keyword">await</span> client.<span className="function">payments.create</span>({"{"}</span>
            </div>
            <div className="code-line">
              <span className="code-line-number">7</span>
              <span>  amount: <span className="variable">50000</span>,</span>
            </div>
            <div className="code-line">
              <span className="code-line-number">8</span>
              <span>  currency: <span className="string">'KRW'</span>,</span>
            </div>
            <div className="code-line">
              <span className="code-line-number">9</span>
              <span>  method: <span className="string">'card'</span></span>
            </div>
            <div className="code-line">
              <span className="code-line-number">10</span>
              <span>{"}"});</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-container">
          <div className="section-header">
            <p className="section-label">Features</p>
            <h2 className="section-title">개발에만 집중하세요</h2>
            <p className="section-desc">인프라 관리는 저희가 할게요. 검증된 API로 빠르게 제품을 출시하세요.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>결제 API</h3>
              <p>카드, 계좌이체, 간편결제까지. PCI-DSS 인증을 받은 안전한 결제 인프라를 제공합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>인증 API</h3>
              <p>소셜 로그인, 2FA, Magic Link까지. 안전한 사용자 인증을 쉽게 구현하세요.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>분석 API</h3>
              <p>실시간 이벤트 트래킹과 대시보드. 데이터 기반 의사결정을 내리세요.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3>알림 API</h3>
              <p>이메일, SMS, 푸시 알림을 통합 API 하나로. 템플릿 관리도 간편합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗄️</div>
              <h3>스토리지 API</h3>
              <p>이미지, 동영상, 문서 파일 업로드와 CDN 배포를 자동으로 처리합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Webhook</h3>
              <p>이벤트 기반 실시간 알림. 재시도 로직과 로그 관리가 기본 내장되어 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="endpoints" id="docs">
        <div className="section-container">
          <div className="endpoints-content">
            <div className="endpoints-text">
              <h2>RESTful API로<br />쉬운 통합</h2>
              <p>명확하고 일관된 API 설계. 모든 엔드포인트는 JSON으로 응답하며, 자세한 에러 메시지를 제공합니다.</p>
              <ul className="endpoint-list">
                <li className="endpoint-item">
                  <span className="endpoint-method method-get">GET</span>
                  <span className="endpoint-path">/v1/payments/{"{id}"}</span>
                </li>
                <li className="endpoint-item">
                  <span className="endpoint-method method-post">POST</span>
                  <span className="endpoint-path">/v1/payments</span>
                </li>
                <li className="endpoint-item">
                  <span className="endpoint-method method-put">PUT</span>
                  <span className="endpoint-path">/v1/payments/{"{id}"}/capture</span>
                </li>
                <li className="endpoint-item">
                  <span className="endpoint-method method-delete">DELETE</span>
                  <span className="endpoint-path">/v1/payments/{"{id}"}/cancel</span>
                </li>
              </ul>
            </div>
            <div className="endpoints-demo">
              <div className="demo-tabs">
                <div className="demo-tab active">Response</div>
                <div className="demo-tab">cURL</div>
                <div className="demo-tab">Node.js</div>
              </div>
              <div className="demo-content">
                <pre>{`// GET /v1/payments/pay_abc123
{
  "id": "pay_abc123",
  "amount": 50000,
  "currency": "KRW",
  "status": "succeeded",
  "method": {
    "type": "card",
    "last4": "4242"
  },
  "created_at": "2024-01-15T09:30:00Z"
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">99.99%</div>
            <div className="stat-label">Uptime SLA</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">&lt;50ms</div>
            <div className="stat-label">평균 응답 시간</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10K+</div>
            <div className="stat-label">활성 개발자</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">1B+</div>
            <div className="stat-label">월간 API 호출</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="section-container">
          <div className="section-header">
            <p className="section-label">Pricing</p>
            <h2 className="section-title">사용한 만큼만 지불하세요</h2>
            <p className="section-desc">숨겨진 비용 없이 투명한 가격 정책. 무료 플랜으로 지금 바로 시작하세요.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-name">Free</h3>
              <p className="pricing-desc">사이드 프로젝트와 프로토타입</p>
              <div className="pricing-price">
                <span className="pricing-amount">₩0</span>
                <span className="pricing-period">/월</span>
              </div>
              <ul className="pricing-features">
                <li>월 10,000 API 호출</li>
                <li>기본 분석 대시보드</li>
                <li>커뮤니티 서포트</li>
                <li>테스트 환경</li>
              </ul>
              <a href="#" className="btn btn-ghost">시작하기</a>
            </div>

            <div className="pricing-card featured">
              <span className="pricing-badge">인기</span>
              <h3 className="pricing-name">Pro</h3>
              <p className="pricing-desc">성장하는 스타트업</p>
              <div className="pricing-price">
                <span className="pricing-amount">₩99,000</span>
                <span className="pricing-period">/월</span>
              </div>
              <ul className="pricing-features">
                <li>월 1,000,000 API 호출</li>
                <li>고급 분석 + 리포트</li>
                <li>이메일 서포트 (24시간)</li>
                <li>프로덕션 환경</li>
                <li>Webhook 재시도</li>
              </ul>
              <a href="#" className="btn btn-primary">시작하기</a>
            </div>

            <div className="pricing-card">
              <h3 className="pricing-name">Enterprise</h3>
              <p className="pricing-desc">대규모 서비스</p>
              <div className="pricing-price">
                <span className="pricing-amount">맞춤</span>
                <span className="pricing-period">가격</span>
              </div>
              <ul className="pricing-features">
                <li>무제한 API 호출</li>
                <li>전담 계정 매니저</li>
                <li>SLA 99.99% 보장</li>
                <li>On-premise 배포</li>
                <li>커스텀 통합</li>
              </ul>
              <a href="#" className="btn btn-ghost">문의하기</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-box">
          <h2>5분 만에 첫 API 호출</h2>
          <p>API 키를 발급받고 바로 시작하세요. 신용카드 필요 없습니다.</p>
          <div className="cta-input-group">
            <input type="email" className="cta-input" placeholder="your@email.com" />
            <button className="btn btn-primary">API 키 발급</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-icon">&lt;/&gt;</span>
              DevFlow
            </a>
            <p>개발자 경험을 최우선으로 생각합니다. 더 나은 제품을 더 빠르게 만들 수 있도록 돕겠습니다.</p>
          </div>
          <div className="footer-column">
            <h4>Product</h4>
            <ul className="footer-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Developers</h4>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">SDK</a></li>
              <li><a href="#">Examples</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 DevFlow. All rights reserved.</span>
          <div className="footer-social">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
          </div>
        </div>
      </footer>

      <Link href="/" className="back-link">← 갤러리로</Link>
    </>
  );
}

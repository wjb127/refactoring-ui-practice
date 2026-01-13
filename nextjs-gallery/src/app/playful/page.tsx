"use client";

import Link from "next/link";

export default function PlayfulPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        :root {
          --primary-050: #F5F3FF;
          --primary-100: #EDE9FE;
          --primary-200: #DDD6FE;
          --primary-300: #C4B5FD;
          --primary-400: #A78BFA;
          --primary-500: #8B5CF6;
          --primary-600: #7C3AED;
          --primary-700: #6D28D9;
          --primary-800: #5B21B6;
          --primary-900: #4C1D95;

          --accent-pink: #F472B6;
          --accent-yellow: #FBBF24;
          --accent-green: #34D399;

          --grey-050: #FAFAFA;
          --grey-100: #F4F4F5;
          --grey-200: #E4E4E7;
          --grey-400: #A1A1AA;
          --grey-500: #71717A;
          --grey-600: #52525B;
          --grey-700: #3F3F46;
          --grey-800: #27272A;

          --space-1: 4px;
          --space-2: 8px;
          --space-3: 12px;
          --space-4: 16px;
          --space-5: 24px;
          --space-6: 32px;
          --space-7: 48px;
          --space-8: 64px;
          --space-9: 96px;

          --radius-sm: 12px;
          --radius-md: 16px;
          --radius-lg: 24px;
          --radius-xl: 32px;
          --radius-full: 9999px;

          --shadow-sm: 0 2px 8px rgba(139, 92, 246, 0.1);
          --shadow-md: 0 4px 16px rgba(139, 92, 246, 0.15);
          --shadow-lg: 0 8px 32px rgba(139, 92, 246, 0.2);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Nunito', sans-serif;
          background: linear-gradient(180deg, var(--primary-050) 0%, white 100%);
          color: var(--grey-700);
          line-height: 1.6;
        }

        .playful-nav {
          padding: var(--space-4) var(--space-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .playful-logo {
          font-size: 24px;
          font-weight: 800;
          color: var(--primary-600);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .playful-logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary-400), var(--accent-pink));
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .playful-nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .playful-nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }

        .playful-nav-links a:hover {
          color: var(--primary-600);
        }

        .playful-btn {
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .playful-btn-primary {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          color: white;
          box-shadow: var(--shadow-md);
        }

        .playful-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .playful-btn-secondary {
          background: white;
          color: var(--primary-600);
          border: 2px solid var(--primary-200);
        }

        .playful-btn-secondary:hover {
          background: var(--primary-050);
          border-color: var(--primary-400);
        }

        .playful-hero {
          padding: var(--space-8) var(--space-6);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .playful-hero h1 {
          font-size: 56px;
          font-weight: 800;
          color: var(--grey-800);
          margin-bottom: var(--space-4);
          line-height: 1.1;
        }

        .playful-hero h1 span {
          background: linear-gradient(135deg, var(--primary-500), var(--accent-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .playful-hero p {
          font-size: 20px;
          color: var(--grey-500);
          max-width: 600px;
          margin: 0 auto var(--space-7);
        }

        .playful-hero-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
        }

        .playful-features {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .playful-section-title {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .playful-section-title h2 {
          font-size: 40px;
          font-weight: 800;
          color: var(--grey-800);
          margin-bottom: var(--space-3);
        }

        .playful-section-title p {
          font-size: 18px;
          color: var(--grey-500);
        }

        .playful-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          max-width: 1100px;
          margin: 0 auto;
        }

        .playful-feature-card {
          background: var(--grey-050);
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          text-align: center;
          transition: all 0.3s;
        }

        .playful-feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .playful-feature-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto var(--space-4);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .playful-feature-card:nth-child(1) .playful-feature-icon {
          background: linear-gradient(135deg, #DDD6FE, #C4B5FD);
        }
        .playful-feature-card:nth-child(2) .playful-feature-icon {
          background: linear-gradient(135deg, #FBCFE8, #F9A8D4);
        }
        .playful-feature-card:nth-child(3) .playful-feature-icon {
          background: linear-gradient(135deg, #FEF3C7, #FDE68A);
        }

        .playful-feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--grey-800);
          margin-bottom: var(--space-2);
        }

        .playful-feature-card p {
          font-size: 15px;
          color: var(--grey-500);
        }

        .playful-cta {
          padding: var(--space-9) var(--space-6);
          background: linear-gradient(135deg, var(--primary-500), var(--accent-pink));
          text-align: center;
          color: white;
        }

        .playful-cta h2 {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: var(--space-4);
        }

        .playful-cta p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: var(--space-6);
        }

        .playful-cta .playful-btn-secondary {
          background: white;
          color: var(--primary-600);
          border: none;
        }

        .playful-footer {
          padding: var(--space-7) var(--space-6);
          background: var(--grey-800);
          color: white;
          text-align: center;
        }

        .playful-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: white;
          color: var(--primary-600);
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-full);
          text-decoration: none;
          font-weight: 700;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s;
          z-index: 100;
        }

        .playful-back-link:hover {
          transform: translateY(-2px);
          background: var(--primary-050);
        }

        @media (max-width: 768px) {
          .playful-hero h1 { font-size: 36px; }
          .playful-features-grid { grid-template-columns: 1fr; }
          .playful-nav-links { display: none; }
        }
      `}</style>

      <nav className="playful-nav">
        <div className="playful-logo">
          <span className="playful-logo-icon">🎵</span>
          Moodify
        </div>
        <ul className="playful-nav-links">
          <li><a href="#">기능</a></li>
          <li><a href="#">요금제</a></li>
          <li><a href="#">고객후기</a></li>
        </ul>
        <a href="#" className="playful-btn playful-btn-primary">무료로 시작하기</a>
      </nav>

      <section className="playful-hero">
        <h1>음악으로 <span>기분 전환</span><br />해볼까요?</h1>
        <p>당신의 기분에 맞는 플레이리스트를 AI가 자동으로 만들어드려요. 슬플 때, 신날 때, 집중할 때 - 언제든 딱 맞는 음악을 만나보세요!</p>
        <div className="playful-hero-actions">
          <a href="#" className="playful-btn playful-btn-primary">앱 다운로드</a>
          <a href="#" className="playful-btn playful-btn-secondary">둘러보기</a>
        </div>
      </section>

      <section className="playful-features">
        <div className="playful-section-title">
          <h2>왜 Moodify일까요? 🤔</h2>
          <p>음악 듣는 게 이렇게 쉬워질 줄이야!</p>
        </div>
        <div className="playful-features-grid">
          <div className="playful-feature-card">
            <div className="playful-feature-icon">🎭</div>
            <h3>기분 인식 AI</h3>
            <p>당신의 기분을 물어보고, 딱 맞는 음악을 추천해드려요</p>
          </div>
          <div className="playful-feature-card">
            <div className="playful-feature-icon">💝</div>
            <h3>맞춤 플레이리스트</h3>
            <p>들을수록 당신을 더 잘 알아가는 똑똑한 추천</p>
          </div>
          <div className="playful-feature-card">
            <div className="playful-feature-icon">🌟</div>
            <h3>친구와 공유</h3>
            <p>좋아하는 음악을 친구들과 함께 즐겨보세요</p>
          </div>
        </div>
      </section>

      <section className="playful-cta">
        <h2>지금 바로 시작해볼래요?</h2>
        <p>첫 달은 무료! 마음에 안 들면 언제든 취소 가능해요.</p>
        <a href="#" className="playful-btn playful-btn-secondary">무료로 시작하기 →</a>
      </section>

      <footer className="playful-footer">
        <p>© 2024 Moodify. 음악으로 기분 좋은 하루 되세요! 🎶</p>
      </footer>

      <Link href="/" className="playful-back-link">← 갤러리로</Link>
    </>
  );
}

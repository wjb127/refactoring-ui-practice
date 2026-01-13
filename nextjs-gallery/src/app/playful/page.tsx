"use client";

import Link from "next/link";

export default function PlayfulPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        :root {
          --purple-050: #F5F3FF;
          --purple-100: #EDE9FE;
          --purple-200: #DDD6FE;
          --purple-300: #C4B5FD;
          --purple-400: #A78BFA;
          --purple-500: #8B5CF6;
          --purple-600: #7C3AED;
          --purple-700: #6D28D9;

          --pink-050: #FDF2F8;
          --pink-100: #FCE7F3;
          --pink-200: #FBCFE8;
          --pink-300: #F9A8D4;
          --pink-400: #F472B6;
          --pink-500: #EC4899;

          --grey-050: #FAFAFA;
          --grey-100: #F4F4F5;
          --grey-200: #E4E4E7;
          --grey-400: #A1A1AA;
          --grey-500: #71717A;
          --grey-600: #52525B;
          --grey-700: #3F3F46;
          --grey-800: #27272A;
          --grey-900: #18181B;

          --space-1: 4px;
          --space-2: 8px;
          --space-3: 12px;
          --space-4: 16px;
          --space-5: 24px;
          --space-6: 32px;
          --space-7: 48px;
          --space-8: 64px;
          --space-9: 96px;

          --radius-sm: 8px;
          --radius-md: 16px;
          --radius-lg: 24px;
          --radius-xl: 32px;
          --radius-full: 9999px;

          --shadow-sm: 0 2px 8px rgba(139, 92, 246, 0.08);
          --shadow-md: 0 8px 24px rgba(139, 92, 246, 0.12);
          --shadow-lg: 0 16px 48px rgba(139, 92, 246, 0.16);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Nunito', -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: var(--grey-700);
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-5);
        }

        /* Navigation */
        .nav {
          padding: var(--space-4) 0;
          position: fixed;
          width: 100%;
          top: 0;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          z-index: 100;
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
          font-weight: 800;
          font-size: 24px;
          color: var(--purple-600);
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--purple-400), var(--pink-400));
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--purple-600);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-3) var(--space-5);
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--purple-500), var(--pink-500));
          color: white;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
        }

        .btn-secondary {
          background: var(--purple-050);
          color: var(--purple-600);
        }

        .btn-secondary:hover {
          background: var(--purple-100);
        }

        .btn-large {
          padding: var(--space-4) var(--space-7);
          font-size: 17px;
        }

        /* Hero Section */
        .hero {
          padding: 160px 0 var(--space-9);
          background: linear-gradient(180deg, var(--purple-050) 0%, white 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, var(--purple-200), var(--pink-200));
          border-radius: 50%;
          top: -100px;
          right: -100px;
          opacity: 0.5;
        }

        .hero::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, var(--pink-200), var(--purple-200));
          border-radius: 50%;
          bottom: 0;
          left: -100px;
          opacity: 0.4;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content h1 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          color: var(--grey-900);
          margin-bottom: var(--space-5);
        }

        .hero-content h1 span {
          background: linear-gradient(135deg, var(--purple-500), var(--pink-500));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 20px;
          color: var(--grey-600);
          margin-bottom: var(--space-6);
          line-height: 1.7;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-4);
          align-items: center;
        }

        .hero-note {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-top: var(--space-5);
          font-size: 14px;
          color: var(--grey-500);
        }

        .hero-note svg {
          color: var(--purple-400);
        }

        .hero-visual {
          position: relative;
        }

        .phone-mockup {
          width: 320px;
          height: 640px;
          background: linear-gradient(180deg, var(--purple-100), var(--pink-100));
          border-radius: var(--radius-xl);
          margin: 0 auto;
          padding: var(--space-3);
          box-shadow: var(--shadow-lg);
          position: relative;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 28px;
          padding: var(--space-5);
          overflow: hidden;
        }

        .phone-header {
          text-align: center;
          margin-bottom: var(--space-5);
        }

        .mood-emoji {
          font-size: 64px;
          margin-bottom: var(--space-3);
        }

        .mood-text {
          font-size: 24px;
          font-weight: 700;
          color: var(--grey-800);
        }

        .playlist-preview {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .song-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3);
          background: var(--grey-050);
          border-radius: var(--radius-md);
        }

        .song-cover {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--purple-300), var(--pink-300));
        }

        .song-info {
          flex: 1;
        }

        .song-title {
          font-weight: 700;
          font-size: 14px;
          color: var(--grey-800);
        }

        .song-artist {
          font-size: 12px;
          color: var(--grey-500);
        }

        /* Floating elements */
        .float-element {
          position: absolute;
          animation: float 6s ease-in-out infinite;
        }

        .float-1 {
          top: 20%;
          right: -20px;
          animation-delay: 0s;
        }

        .float-2 {
          bottom: 30%;
          left: -30px;
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .music-note {
          font-size: 32px;
          opacity: 0.6;
        }

        /* Features Section */
        .features {
          padding: var(--space-9) 0;
        }

        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto var(--space-8);
        }

        .section-tag {
          display: inline-block;
          padding: var(--space-2) var(--space-4);
          background: var(--purple-100);
          color: var(--purple-600);
          font-size: 14px;
          font-weight: 700;
          border-radius: var(--radius-full);
          margin-bottom: var(--space-4);
        }

        .section-header h2 {
          font-size: 40px;
          font-weight: 800;
          color: var(--grey-900);
          margin-bottom: var(--space-3);
        }

        .section-header p {
          font-size: 18px;
          color: var(--grey-500);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .feature-card {
          padding: var(--space-6);
          background: white;
          border-radius: var(--radius-lg);
          border: 2px solid var(--grey-100);
          transition: all 0.3s;
          text-align: center;
        }

        .feature-card:hover {
          border-color: var(--purple-200);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .feature-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto var(--space-5);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .feature-icon.purple {
          background: linear-gradient(135deg, var(--purple-100), var(--purple-200));
        }

        .feature-icon.pink {
          background: linear-gradient(135deg, var(--pink-100), var(--pink-200));
        }

        .feature-icon.gradient {
          background: linear-gradient(135deg, var(--purple-200), var(--pink-200));
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--grey-800);
          margin-bottom: var(--space-3);
        }

        .feature-card p {
          color: var(--grey-500);
          line-height: 1.7;
        }

        /* How It Works */
        .how-it-works {
          padding: var(--space-9) 0;
          background: linear-gradient(180deg, white 0%, var(--purple-050) 100%);
        }

        .steps {
          display: flex;
          gap: var(--space-5);
          justify-content: center;
          flex-wrap: wrap;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 280px;
        }

        .step-number {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--purple-500), var(--pink-500));
          color: white;
          font-size: 24px;
          font-weight: 800;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
        }

        .step h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--grey-800);
          margin-bottom: var(--space-2);
        }

        .step p {
          font-size: 15px;
          color: var(--grey-500);
        }

        .step-arrow {
          display: flex;
          align-items: center;
          padding-top: var(--space-5);
          color: var(--purple-300);
        }

        /* Testimonials */
        .testimonials {
          padding: var(--space-9) 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .testimonial-card {
          padding: var(--space-6);
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          border: 2px solid transparent;
          transition: all 0.3s;
        }

        .testimonial-card:hover {
          border-color: var(--purple-200);
        }

        .testimonial-card.featured {
          background: linear-gradient(135deg, var(--purple-500), var(--pink-500));
          color: white;
        }

        .testimonial-text {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: var(--space-5);
        }

        .testimonial-card.featured .testimonial-text {
          color: rgba(255,255,255,0.9);
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
          background: var(--purple-100);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .testimonial-card.featured .author-avatar {
          background: rgba(255,255,255,0.2);
        }

        .author-name {
          font-weight: 700;
          color: var(--grey-800);
        }

        .testimonial-card.featured .author-name {
          color: white;
        }

        .author-handle {
          font-size: 14px;
          color: var(--grey-400);
        }

        .testimonial-card.featured .author-handle {
          color: rgba(255,255,255,0.7);
        }

        /* CTA Section */
        .cta {
          padding: var(--space-9) 0;
        }

        .cta-box {
          background: linear-gradient(135deg, var(--purple-500), var(--pink-500));
          border-radius: var(--radius-xl);
          padding: var(--space-9);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-box::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          top: -100px;
          right: -100px;
        }

        .cta-box::after {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
          bottom: -50px;
          left: -50px;
        }

        .cta-box h2 {
          font-size: 40px;
          font-weight: 800;
          color: white;
          margin-bottom: var(--space-4);
          position: relative;
        }

        .cta-box p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          margin-bottom: var(--space-6);
          position: relative;
        }

        .btn-white {
          background: white;
          color: var(--purple-600);
          font-weight: 700;
        }

        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        /* Footer */
        .footer {
          padding: var(--space-8) 0;
          background: var(--grey-900);
          color: var(--grey-400);
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
          gap: var(--space-6);
        }

        .footer-links a {
          color: var(--grey-400);
          text-decoration: none;
          font-size: 14px;
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
          color: var(--grey-700);
          text-decoration: none;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 14px;
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
          .hero-cta {
            justify-content: center;
          }
          .hero-note {
            justify-content: center;
          }
          .hero-visual {
            display: none;
          }
          .features-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .steps {
            flex-direction: column;
            align-items: center;
          }
          .step-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>

      <Link href="/" className="back-link">← Gallery</Link>

      <nav className="nav">
        <div className="container nav-container">
          <div className="logo">
            <div className="logo-icon">🎵</div>
            Moodify
          </div>
          <ul className="nav-links">
            <li><a href="#features">기능</a></li>
            <li><a href="#how">사용법</a></li>
            <li><a href="#reviews">후기</a></li>
          </ul>
          <a href="#" className="btn btn-primary">앱 다운로드</a>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>오늘 기분이<br /><span>어떠세요?</span></h1>
            <p className="hero-description">
              Moodify가 당신의 감정을 읽고 완벽한 플레이리스트를 만들어드려요.
              슬플 때, 신날 때, 집중이 필요할 때 - 언제나 딱 맞는 음악을!
            </p>
            <div className="hero-cta">
              <a href="#" className="btn btn-primary btn-large">무료로 시작하기</a>
              <a href="#" className="btn btn-secondary btn-large">둘러보기</a>
            </div>
            <p className="hero-note">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              100만+ 다운로드 · 무료 · 광고 없음
            </p>
          </div>
          <div className="hero-visual">
            <div className="float-element float-1">
              <span className="music-note">🎵</span>
            </div>
            <div className="float-element float-2">
              <span className="music-note">🎶</span>
            </div>
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="mood-emoji">😊</div>
                  <div className="mood-text">오늘은 신나는 날!</div>
                </div>
                <div className="playlist-preview">
                  <div className="song-item">
                    <div className="song-cover"></div>
                    <div className="song-info">
                      <div className="song-title">Happy</div>
                      <div className="song-artist">Pharrell Williams</div>
                    </div>
                  </div>
                  <div className="song-item">
                    <div className="song-cover"></div>
                    <div className="song-info">
                      <div className="song-title">Good as Hell</div>
                      <div className="song-artist">Lizzo</div>
                    </div>
                  </div>
                  <div className="song-item">
                    <div className="song-cover"></div>
                    <div className="song-info">
                      <div className="song-title">Uptown Funk</div>
                      <div className="song-artist">Bruno Mars</div>
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
            <span className="section-tag">✨ 특별한 기능</span>
            <h2>음악이 당신을 이해해요</h2>
            <p>AI가 분석하는 감정, 완벽하게 맞춤화된 음악 경험</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon purple">🎭</div>
              <h3>감정 인식</h3>
              <p>얼굴 표정이나 목소리 톤으로 지금 기분을 자동으로 파악해요. 말하지 않아도 알아요!</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon pink">🎯</div>
              <h3>맞춤 추천</h3>
              <p>당신의 취향을 계속 학습해요. 쓸수록 더 정확해지는 AI 추천 시스템!</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon gradient">🌈</div>
              <h3>무드 저널</h3>
              <p>매일의 감정 변화를 음악으로 기록해요. 나중에 돌아보면 재미있는 추억이 될 거예요.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🚀 시작하기</span>
            <h2>3단계면 끝!</h2>
            <p>복잡한 설정 없이 바로 시작하세요</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>앱 열기</h3>
              <p>Moodify를 실행하고 오늘의 기분을 선택하거나 AI가 읽게 해주세요</p>
            </div>

            <div className="step-arrow">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 12h36M28 4l8 8-8 8"/>
              </svg>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>플레이리스트 받기</h3>
              <p>AI가 분석한 감정에 딱 맞는 노래들로 구성된 플레이리스트가 짠!</p>
            </div>

            <div className="step-arrow">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 12h36M28 4l8 8-8 8"/>
              </svg>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>즐기기!</h3>
              <p>마음에 드는 곡은 저장하고, 취향을 AI에게 알려주세요. 점점 더 좋아져요!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💜 유저들의 사랑</span>
            <h2>직접 들어보세요</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"출근길마다 쓰는데, 피곤한 월요일 아침에 딱 맞는 노래 틀어줘서 진짜 신기해요 ㅋㅋ"</p>
              <div className="testimonial-author">
                <div className="author-avatar">😄</div>
                <div>
                  <div className="author-name">직장인 A</div>
                  <div className="author-handle">@morning_coffee</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card featured">
              <p className="testimonial-text">"우울할 때 억지로 신나는 노래 안 틀어주고, 감정에 공감해주는 곡 먼저 추천해주는 게 좋아요. 진짜 이해받는 느낌?"</p>
              <div className="testimonial-author">
                <div className="author-avatar">🥹</div>
                <div>
                  <div className="author-name">대학생 민지</div>
                  <div className="author-handle">@music_lover</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">"운동할 때 쓰는데 페이스에 맞춰서 BPM 조절해주는 거 진심 미쳤음 👍"</p>
              <div className="testimonial-author">
                <div className="author-avatar">💪</div>
                <div>
                  <div className="author-name">헬스 덕후</div>
                  <div className="author-handle">@gym_daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>오늘의 기분, 음악으로 표현해볼까요?</h2>
            <p>100만 명이 이미 Moodify와 함께하고 있어요</p>
            <a href="#" className="btn btn-white btn-large">무료로 시작하기</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-container">
          <div className="logo">Moodify</div>
          <div className="footer-links">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">고객센터</a>
          </div>
        </div>
      </footer>
    </>
  );
}

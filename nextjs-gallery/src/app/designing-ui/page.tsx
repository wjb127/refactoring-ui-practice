"use client";

import Link from "next/link";
import { useState } from "react";

export default function DesigningUIPage() {
  const [copied, setCopied] = useState(false);

  const aiPrompt = `# Designing User Interfaces 원칙에 따른 UI 디자인 요청

다음 "Designing User Interfaces" (Michal Malewicz) 핵심 원칙들을 적용하여 UI를 디자인/개선해주세요.

## 핵심 디자인 원칙

### 1. 인지(Perception) 기반 디자인
- 사용자가 UI를 어떻게 인식하는지 이해
- 게슈탈트 원칙 활용 (근접성, 유사성, 연속성, 폐쇄성)
- 시각적 무게(visual weight)와 균형 고려
- 눈의 자연스러운 흐름(F-pattern, Z-pattern) 활용

### 2. 레이아웃과 그리드
- 8px 기반 그리드 시스템 사용
- 12컬럼 또는 유연한 그리드 적용
- 여백의 리듬감 유지 (8, 16, 24, 32, 48, 64px)
- 컨테이너 최대 너비 설정 (1200-1440px)

### 3. 색상 시스템
- Primary, Secondary, Neutral 색상 정의
- 각 색상별 050-900 스케일 생성
- 60-30-10 비율 적용 (배경-보조-강조)
- 시맨틱 색상: Success, Warning, Error, Info
- 충분한 대비(4.5:1 이상) 확보

### 4. 타이포그래피 계층
- 최대 3개의 폰트 크기 계층 사용
- 제목: 24-48px, bold (700-800)
- 본문: 14-16px, regular (400)
- 보조: 12-13px, medium (500)
- 줄 간격: 제목 1.2-1.3, 본문 1.5-1.7

### 5. UI 오브젝트 원칙
- 모든 오브젝트에 명확한 경계 정의
- 그림자 또는 보더로 레이어 구분
- 아이콘: 24x24px 기본, 스트로크 1.5-2px
- 일관된 border-radius (4/8/12/16px 중 선택)

### 6. 버튼 시스템
- Primary: 채워진 배경, 주요 액션
- Secondary: 테두리만, 보조 액션
- Tertiary/Ghost: 텍스트만, 덜 중요한 액션
- 크기: sm(32px), md(40px), lg(48px), xl(56px)
- 상태: default, hover, active, disabled, loading

### 7. 카드 컴포넌트
- 내부 패딩: 16-24px
- 그림자: 0 2px 8px rgba(0,0,0,0.08)
- hover 시 그림자 증가 또는 border 변화
- 콘텐츠 순서: 이미지 → 제목 → 설명 → 액션

### 8. 폼 디자인
- 레이블: 입력 필드 위에 배치
- 입력 필드: 40-48px 높이, grey-300 보더
- 포커스: primary 색상 보더 + 연한 그림자
- 에러: 빨간 보더 + 아래 에러 메시지
- 필수 표시: 레이블 옆 별표(*)

### 9. 테이블
- 헤더: 배경색으로 구분, bold 텍스트
- 행: hover 시 연한 배경색
- 셀 패딩: 12-16px
- 정렬: 텍스트 좌측, 숫자 우측

### 10. 모달/팝업
- 배경 오버레이: rgba(0,0,0,0.5)
- 모달 최대 너비: 480-600px
- 닫기 버튼: 우상단 또는 하단
- 애니메이션: fade + scale (0.2s)

### 11. 내비게이션
- 현재 위치 명확히 표시 (active state)
- 클릭 영역 충분히 (최소 44x44px)
- 모바일: 햄버거 메뉴 또는 탭 바
- 웹: 상단 고정 또는 사이드바

### 12. 애니메이션
- 기본 트랜지션: 0.2-0.3s ease-out
- 의미 있는 움직임만 사용
- 사용자 액션에 즉각적 피드백
- 과도한 애니메이션 지양

## 요청사항

위 원칙을 적용하여:
1. 시각적 계층이 명확한 UI 설계
2. 일관된 디자인 시스템 적용
3. 모든 상태(기본, 호버, 포커스, 활성, 비활성)를 고려
4. 반응형 디자인 고려 (모바일-태블릿-데스크톱)
5. 접근성 기준 준수 (WCAG 2.1 AA)

코드와 함께 디자인 결정의 근거를 설명해주세요.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(aiPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap");

        :root {
          --cyan-050: #e0fcff;
          --cyan-100: #bef8fd;
          --cyan-200: #87eaf2;
          --cyan-300: #54d1db;
          --cyan-400: #38bec9;
          --cyan-500: #2cb1bc;
          --cyan-600: #14919b;
          --cyan-700: #0e7c86;
          --cyan-800: #0a6c74;
          --cyan-900: #044e54;

          --grey-050: #f7fafc;
          --grey-100: #edf2f7;
          --grey-200: #e2e8f0;
          --grey-300: #cbd5e0;
          --grey-400: #a0aec0;
          --grey-500: #718096;
          --grey-600: #4a5568;
          --grey-700: #2d3748;
          --grey-800: #1a202c;
          --grey-900: #171923;

          --gradient-primary: linear-gradient(135deg, #0967d2 0%, #1cd4d4 100%);
          --gradient-accent: linear-gradient(135deg, #14919b 0%, #0e7c86 100%);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--grey-050);
          color: var(--grey-800);
          line-height: 1.6;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Navigation */
        .nav {
          background: white;
          border-bottom: 1px solid var(--grey-200);
          padding: 16px 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-weight: 700;
          font-size: 18px;
          color: var(--grey-800);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-logo:hover {
          color: var(--cyan-600);
        }

        .nav-links {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .nav-link {
          color: var(--grey-600);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--cyan-600);
        }

        /* Hero */
        .hero {
          padding: 80px 0;
          text-align: center;
          background: var(--gradient-primary);
          color: white;
          margin-bottom: 48px;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .hero h1 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 20px;
          opacity: 0.9;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-authors {
          font-size: 14px;
          opacity: 0.8;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-top: 40px;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 32px;
          font-weight: 800;
        }

        .stat-label {
          font-size: 13px;
          opacity: 0.8;
        }

        /* Main content */
        .main {
          padding: 48px 0 96px;
        }

        /* TOC */
        .toc {
          background: white;
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 48px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .toc h2 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--grey-800);
        }

        .toc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .toc-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 8px;
          color: var(--grey-600);
          text-decoration: none;
          font-size: 13px;
          transition: all 0.2s;
        }

        .toc-item:hover {
          background: var(--cyan-050);
          color: var(--cyan-700);
        }

        .toc-number {
          width: 24px;
          height: 24px;
          background: var(--grey-100);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: var(--grey-500);
          flex-shrink: 0;
        }

        .toc-item:hover .toc-number {
          background: var(--cyan-100);
          color: var(--cyan-700);
        }

        /* Section */
        .section {
          background: white;
          border-radius: 16px;
          padding: 32px;
          margin-bottom: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .section-number {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--grey-800);
          line-height: 1.3;
        }

        .section-subtitle {
          font-size: 14px;
          color: var(--grey-500);
          margin-top: 4px;
        }

        .section-content {
          color: var(--grey-600);
          font-size: 15px;
          line-height: 1.7;
        }

        .section-content p {
          margin-bottom: 16px;
        }

        .section-content h4 {
          font-size: 16px;
          font-weight: 600;
          color: var(--grey-800);
          margin: 24px 0 12px;
        }

        .section-content ul {
          margin: 16px 0;
          padding-left: 24px;
        }

        .section-content li {
          margin-bottom: 8px;
        }

        .section-content strong {
          color: var(--grey-800);
          font-weight: 600;
        }

        /* Code block */
        .code-block {
          background: var(--grey-900);
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
          overflow-x: auto;
        }

        .code-block code {
          font-family: "Fira Code", monospace;
          font-size: 13px;
          color: #e2e8f0;
          line-height: 1.6;
        }

        /* Highlight box */
        .highlight-box {
          background: linear-gradient(
            135deg,
            var(--cyan-050) 0%,
            var(--cyan-100) 100%
          );
          border: 1px solid var(--cyan-200);
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
        }

        .highlight-box h5 {
          font-size: 14px;
          font-weight: 600;
          color: var(--cyan-800);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .highlight-box p {
          font-size: 14px;
          color: var(--cyan-700);
          margin: 0;
        }

        /* Comparison grid */
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 20px 0;
        }

        .comparison-item {
          padding: 16px;
          border-radius: 10px;
          font-size: 13px;
        }

        .comparison-bad {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #991b1b;
        }

        .comparison-good {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
        }

        .comparison-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        /* Color palette */
        .color-palette {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 4px;
          margin: 16px 0;
        }

        .color-swatch {
          aspect-ratio: 1;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 600;
        }

        /* Spacing scale */
        .spacing-scale {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          padding: 16px;
          background: var(--grey-100);
          border-radius: 10px;
          margin: 16px 0;
        }

        .spacing-item {
          background: var(--cyan-500);
          border-radius: 4px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 4px;
          font-size: 10px;
          color: white;
          font-weight: 600;
        }

        /* Copy section */
        .copy-section {
          background: var(--grey-900);
          border-radius: 16px;
          padding: 32px;
          margin-top: 48px;
        }

        .copy-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .copy-title {
          color: white;
          font-size: 20px;
          font-weight: 700;
        }

        .copy-subtitle {
          color: var(--grey-400);
          font-size: 14px;
          margin-top: 4px;
        }

        .copy-button {
          background: var(--gradient-primary);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .copy-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(9, 103, 210, 0.4);
        }

        .copy-button.copied {
          background: #10b981;
        }

        .prompt-preview {
          background: var(--grey-800);
          border-radius: 12px;
          padding: 20px;
          max-height: 300px;
          overflow-y: auto;
        }

        .prompt-preview pre {
          font-family: "Fira Code", monospace;
          font-size: 12px;
          color: var(--grey-300);
          white-space: pre-wrap;
          line-height: 1.6;
        }

        /* Footer */
        .footer {
          background: white;
          border-top: 1px solid var(--grey-200);
          padding: 48px 0;
          text-align: center;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 24px;
        }

        .footer-link {
          color: var(--grey-600);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: var(--cyan-600);
        }

        .footer-copy {
          color: var(--grey-500);
          font-size: 13px;
        }

        /* Video section */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin: 20px 0;
        }

        .video-item {
          background: var(--grey-100);
          border-radius: 12px;
          padding: 16px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s;
        }

        .video-item:hover {
          background: var(--cyan-050);
          transform: translateY(-2px);
        }

        .video-icon {
          width: 40px;
          height: 40px;
          background: var(--grey-200);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          font-size: 18px;
        }

        .video-item:hover .video-icon {
          background: var(--cyan-200);
        }

        .video-title {
          font-weight: 600;
          font-size: 14px;
          color: var(--grey-800);
          margin-bottom: 4px;
        }

        .video-desc {
          font-size: 13px;
          color: var(--grey-500);
        }

        /* Section group */
        .section-group {
          margin-bottom: 48px;
        }

        .section-group-title {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--cyan-600);
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid var(--cyan-100);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 32px;
          }

          .hero-stats {
            gap: 24px;
          }

          .stat-number {
            font-size: 24px;
          }

          .toc-grid {
            grid-template-columns: 1fr;
          }

          .comparison-grid,
          .video-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <Link href="/" className="nav-logo">
            <span>Designing UI</span>
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-link">
              Gallery
            </Link>
            <Link href="/learn" className="nav-link">
              Refactoring UI
            </Link>
            <Link href="/boring-ui" className="nav-link">
              Boring UI
            </Link>
            <a
              href="https://www.designingui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Book
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">769 Pages / 30 Chapters</span>
          <h1>Designing User Interfaces</h1>
          <p className="hero-subtitle">
            25년 이상의 실무 경험을 바탕으로 한 가장 포괄적인 UI 디자인
            가이드북입니다.
          </p>
          <p className="hero-authors">
            by Michal Malewicz & Diana Malewicz (HYPE4 Academy)
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">30</div>
              <div className="stat-label">챕터</div>
            </div>
            <div className="stat">
              <div className="stat-number">578</div>
              <div className="stat-label">메인북 페이지</div>
            </div>
            <div className="stat">
              <div className="stat-number">191</div>
              <div className="stat-label">스타일북 페이지</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Table of Contents */}
          <div className="toc">
            <h2>목차 (Table of Contents)</h2>
            <div className="toc-grid">
              <a href="#ch1" className="toc-item">
                <span className="toc-number">01</span>
                Introduction
              </a>
              <a href="#ch2" className="toc-item">
                <span className="toc-number">02</span>
                Who is this for?
              </a>
              <a href="#ch3" className="toc-item">
                <span className="toc-number">03</span>
                UI vs UX
              </a>
              <a href="#ch4" className="toc-item">
                <span className="toc-number">04</span>
                Design and Art
              </a>
              <a href="#ch5" className="toc-item">
                <span className="toc-number">05</span>
                What makes UI good?
              </a>
              <a href="#ch6" className="toc-item">
                <span className="toc-number">06</span>
                Perception
              </a>
              <a href="#ch7" className="toc-item">
                <span className="toc-number">07</span>
                Screens
              </a>
              <a href="#ch8" className="toc-item">
                <span className="toc-number">08</span>
                Layout and Grid
              </a>
              <a href="#ch9" className="toc-item">
                <span className="toc-number">09</span>
                Objects
              </a>
              <a href="#ch10" className="toc-item">
                <span className="toc-number">10</span>
                Colors
              </a>
              <a href="#ch11" className="toc-item">
                <span className="toc-number">11</span>
                Gradients
              </a>
              <a href="#ch12" className="toc-item">
                <span className="toc-number">12</span>
                Typography
              </a>
              <a href="#ch13" className="toc-item">
                <span className="toc-number">13</span>
                Icons
              </a>
              <a href="#ch14" className="toc-item">
                <span className="toc-number">14</span>
                Buttons
              </a>
              <a href="#ch15" className="toc-item">
                <span className="toc-number">15</span>
                Cards
              </a>
              <a href="#ch16" className="toc-item">
                <span className="toc-number">16</span>
                Tables
              </a>
              <a href="#ch17" className="toc-item">
                <span className="toc-number">17</span>
                Forms
              </a>
              <a href="#ch18" className="toc-item">
                <span className="toc-number">18</span>
                Modals & Popups
              </a>
              <a href="#ch19" className="toc-item">
                <span className="toc-number">19</span>
                Navigation
              </a>
              <a href="#ch20" className="toc-item">
                <span className="toc-number">20</span>
                Animation
              </a>
              <a href="#ch21" className="toc-item">
                <span className="toc-number">21</span>
                Photos
              </a>
              <a href="#ch22" className="toc-item">
                <span className="toc-number">22</span>
                Illustration
              </a>
              <a href="#ch23" className="toc-item">
                <span className="toc-number">23</span>
                Language
              </a>
              <a href="#ch24" className="toc-item">
                <span className="toc-number">24</span>
                Design Styles
              </a>
              <a href="#ch25" className="toc-item">
                <span className="toc-number">25</span>
                Design Process
              </a>
              <a href="#ch26" className="toc-item">
                <span className="toc-number">26</span>
                Design Systems
              </a>
              <a href="#ch27" className="toc-item">
                <span className="toc-number">27</span>
                UI Audit
              </a>
              <a href="#ch28" className="toc-item">
                <span className="toc-number">28</span>
                Developer Handoff
              </a>
              <a href="#ch29" className="toc-item">
                <span className="toc-number">29</span>
                Prototyping
              </a>
              <a href="#ch30" className="toc-item">
                <span className="toc-number">30</span>
                Summary
              </a>
            </div>
          </div>

          {/* INTRO Section */}
          <div className="section-group">
            <div className="section-group-title">INTRO</div>

            <section id="ch1" className="section">
              <div className="section-header">
                <div className="section-number">01</div>
                <div>
                  <h3 className="section-title">Introduction</h3>
                  <p className="section-subtitle">UI 디자인의 세계로</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  이 책은 25년 이상의 디지털 프로덕트 디자인 경험을 바탕으로
                  작성되었습니다. Fortune 500 대기업부터 혁신적인 스타트업까지
                  다양한 프로젝트에서 얻은 실무 지식을 담았습니다.
                </p>
                <div className="highlight-box">
                  <h5>왜 이 책인가?</h5>
                  <p>
                    시중의 다른 책들과 달리, 실제 업계 전문가들이 현장에서 얻은
                    경험을 바탕으로 작성했습니다. 이론이 아닌 실무에서 바로 적용
                    가능한 지식입니다.
                  </p>
                </div>
              </div>
            </section>

            <section id="ch3" className="section">
              <div className="section-header">
                <div className="section-number">03</div>
                <div>
                  <h3 className="section-title">UI vs UX</h3>
                  <p className="section-subtitle">두 개념의 차이와 관계</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  <strong>UI (User Interface)</strong>는 사용자가 실제로 보고
                  상호작용하는 시각적 요소입니다. 버튼, 아이콘, 색상, 타이포그래피
                  등이 포함됩니다.
                </p>
                <p>
                  <strong>UX (User Experience)</strong>는 사용자가 제품을
                  사용하면서 느끼는 전체적인 경험입니다. 사용성, 접근성, 만족도
                  등을 포함합니다.
                </p>
                <div className="comparison-grid">
                  <div className="comparison-item comparison-bad">
                    <div className="comparison-label">흔한 오해</div>
                    "UI와 UX는 같은 것이다"
                  </div>
                  <div className="comparison-item comparison-good">
                    <div className="comparison-label">올바른 이해</div>
                    "좋은 UI는 좋은 UX의 필수 요소지만, UX는 UI 이상의 것을
                    포함한다"
                  </div>
                </div>
              </div>
            </section>

            <section id="ch5" className="section">
              <div className="section-header">
                <div className="section-number">05</div>
                <div>
                  <h3 className="section-title">What makes UI good?</h3>
                  <p className="section-subtitle">좋은 UI의 기준</p>
                </div>
              </div>
              <div className="section-content">
                <p>좋은 UI는 다음 특성을 갖추고 있습니다:</p>
                <ul>
                  <li>
                    <strong>명확성 (Clarity)</strong>: 사용자가 무엇을 해야 하는지
                    즉시 알 수 있어야 합니다.
                  </li>
                  <li>
                    <strong>일관성 (Consistency)</strong>: 같은 요소는 항상 같은
                    방식으로 동작해야 합니다.
                  </li>
                  <li>
                    <strong>피드백 (Feedback)</strong>: 사용자의 행동에 즉각적으로
                    반응해야 합니다.
                  </li>
                  <li>
                    <strong>효율성 (Efficiency)</strong>: 최소한의 단계로 목표를
                    달성할 수 있어야 합니다.
                  </li>
                  <li>
                    <strong>미적 완성도 (Aesthetics)</strong>: 시각적으로
                    매력적이고 전문적이어야 합니다.
                  </li>
                </ul>
              </div>
            </section>

            <section id="ch6" className="section">
              <div className="section-header">
                <div className="section-number">06</div>
                <div>
                  <h3 className="section-title">Perception</h3>
                  <p className="section-subtitle">인지 심리학과 디자인</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  사용자가 UI를 어떻게 인식하는지 이해하는 것이 디자인의 기초입니다.
                  게슈탈트 원칙을 활용하면 더 직관적인 인터페이스를 만들 수
                  있습니다.
                </p>
                <h4>게슈탈트 원칙</h4>
                <ul>
                  <li>
                    <strong>근접성 (Proximity)</strong>: 가까운 요소들은 관련된
                    것으로 인식
                  </li>
                  <li>
                    <strong>유사성 (Similarity)</strong>: 비슷해 보이는 요소들은
                    같은 그룹으로 인식
                  </li>
                  <li>
                    <strong>연속성 (Continuity)</strong>: 시선은 자연스러운 경로를
                    따라 이동
                  </li>
                  <li>
                    <strong>폐쇄성 (Closure)</strong>: 불완전한 형태도 완전한
                    것으로 인식하려 함
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* DESIGN BASICS Section */}
          <div className="section-group">
            <div className="section-group-title">DESIGN BASICS</div>

            <section id="ch8" className="section">
              <div className="section-header">
                <div className="section-number">08</div>
                <div>
                  <h3 className="section-title">Layout and Grid</h3>
                  <p className="section-subtitle">8px 그리드 시스템</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  모든 요소의 크기와 간격은 <strong>8px 그리드</strong>를
                  기반으로 합니다. 이렇게 하면 일관된 리듬감이 생기고 개발자와의
                  협업이 쉬워집니다.
                </p>
                <div className="spacing-scale">
                  <div className="spacing-item" style={{ width: 8, height: 8 }}>
                    8
                  </div>
                  <div
                    className="spacing-item"
                    style={{ width: 16, height: 16 }}
                  >
                    16
                  </div>
                  <div
                    className="spacing-item"
                    style={{ width: 24, height: 24 }}
                  >
                    24
                  </div>
                  <div
                    className="spacing-item"
                    style={{ width: 32, height: 32 }}
                  >
                    32
                  </div>
                  <div
                    className="spacing-item"
                    style={{ width: 48, height: 48 }}
                  >
                    48
                  </div>
                  <div
                    className="spacing-item"
                    style={{ width: 64, height: 64 }}
                  >
                    64
                  </div>
                </div>
                <div className="highlight-box">
                  <h5>Red Square Method</h5>
                  <p>
                    빨간 정사각형을 사용해 여백이 일관된지 시각적으로 확인하는
                    방법입니다. 같은 크기의 정사각형이 요소들 사이에 딱 맞아야
                    합니다.
                  </p>
                </div>
              </div>
            </section>

            <section id="ch10" className="section">
              <div className="section-header">
                <div className="section-number">10</div>
                <div>
                  <h3 className="section-title">Colors</h3>
                  <p className="section-subtitle">색상 시스템 구축</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  체계적인 색상 시스템은 일관된 UI의 기반입니다. 각 색상은
                  050-900까지의 스케일로 정의합니다.
                </p>
                <h4>색상 스케일 예시 (Cyan)</h4>
                <div className="color-palette">
                  <div
                    className="color-swatch"
                    style={{
                      background: "var(--cyan-050)",
                      color: "var(--grey-800)",
                    }}
                  >
                    50
                  </div>
                  <div
                    className="color-swatch"
                    style={{
                      background: "var(--cyan-100)",
                      color: "var(--grey-800)",
                    }}
                  >
                    100
                  </div>
                  <div
                    className="color-swatch"
                    style={{
                      background: "var(--cyan-200)",
                      color: "var(--grey-800)",
                    }}
                  >
                    200
                  </div>
                  <div
                    className="color-swatch"
                    style={{ background: "var(--cyan-300)", color: "white" }}
                  >
                    300
                  </div>
                  <div
                    className="color-swatch"
                    style={{ background: "var(--cyan-400)", color: "white" }}
                  >
                    400
                  </div>
                  <div
                    className="color-swatch"
                    style={{ background: "var(--cyan-500)", color: "white" }}
                  >
                    500
                  </div>
                  <div
                    className="color-swatch"
                    style={{ background: "var(--cyan-600)", color: "white" }}
                  >
                    600
                  </div>
                  <div
                    className="color-swatch"
                    style={{ background: "var(--cyan-700)", color: "white" }}
                  >
                    700
                  </div>
                  <div
                    className="color-swatch"
                    style={{ background: "var(--cyan-800)", color: "white" }}
                  >
                    800
                  </div>
                  <div
                    className="color-swatch"
                    style={{ background: "var(--cyan-900)", color: "white" }}
                  >
                    900
                  </div>
                </div>
                <h4>60-30-10 규칙</h4>
                <ul>
                  <li>
                    <strong>60%</strong>: 배경색 (neutral/grey)
                  </li>
                  <li>
                    <strong>30%</strong>: 보조색 (secondary elements)
                  </li>
                  <li>
                    <strong>10%</strong>: 강조색 (primary actions, highlights)
                  </li>
                </ul>
              </div>
            </section>

            <section id="ch12" className="section">
              <div className="section-header">
                <div className="section-number">12</div>
                <div>
                  <h3 className="section-title">Typography</h3>
                  <p className="section-subtitle">타이포그래피 시스템</p>
                </div>
              </div>
              <div className="section-content">
                <p>타이포그래피는 UI에서 가장 중요한 요소 중 하나입니다.</p>
                <h4>폰트 크기 계층</h4>
                <ul>
                  <li>
                    <strong>Hero</strong>: 48-64px, Extra Bold (800)
                  </li>
                  <li>
                    <strong>H1</strong>: 32-40px, Bold (700)
                  </li>
                  <li>
                    <strong>H2</strong>: 24-28px, Semi Bold (600)
                  </li>
                  <li>
                    <strong>H3</strong>: 18-20px, Semi Bold (600)
                  </li>
                  <li>
                    <strong>Body</strong>: 14-16px, Regular (400)
                  </li>
                  <li>
                    <strong>Caption</strong>: 12-13px, Medium (500)
                  </li>
                </ul>
                <h4>줄 간격 (Line Height)</h4>
                <ul>
                  <li>제목 (Headings): 1.2 - 1.3</li>
                  <li>본문 (Body): 1.5 - 1.7</li>
                  <li>긴 글 (Long-form): 1.7 - 1.8</li>
                </ul>
              </div>
            </section>

            <section id="ch14" className="section">
              <div className="section-header">
                <div className="section-number">14</div>
                <div>
                  <h3 className="section-title">Buttons</h3>
                  <p className="section-subtitle">버튼 컴포넌트 시스템</p>
                </div>
              </div>
              <div className="section-content">
                <p>버튼은 사용자 액션의 핵심 요소입니다.</p>
                <h4>버튼 유형</h4>
                <ul>
                  <li>
                    <strong>Primary</strong>: 채워진 배경, 가장 중요한 액션
                  </li>
                  <li>
                    <strong>Secondary</strong>: 테두리만, 보조 액션
                  </li>
                  <li>
                    <strong>Tertiary/Ghost</strong>: 텍스트만, 덜 중요한 액션
                  </li>
                  <li>
                    <strong>Destructive</strong>: 빨간색, 삭제/취소 등 위험 액션
                  </li>
                </ul>
                <h4>버튼 크기</h4>
                <div className="code-block">
                  <code>
                    {`/* 버튼 크기 시스템 */
.btn-sm  { height: 32px; padding: 0 12px; font-size: 13px; }
.btn-md  { height: 40px; padding: 0 16px; font-size: 14px; }
.btn-lg  { height: 48px; padding: 0 24px; font-size: 15px; }
.btn-xl  { height: 56px; padding: 0 32px; font-size: 16px; }`}
                  </code>
                </div>
                <h4>버튼 상태</h4>
                <ul>
                  <li>Default: 기본 상태</li>
                  <li>Hover: 마우스 오버 (약간 밝게 또는 그림자 추가)</li>
                  <li>Active/Pressed: 클릭 중 (약간 어둡게)</li>
                  <li>Disabled: 비활성 (opacity: 0.5, cursor: not-allowed)</li>
                  <li>Loading: 로딩 중 (스피너 + 텍스트 fade)</li>
                </ul>
              </div>
            </section>

            <section id="ch17" className="section">
              <div className="section-header">
                <div className="section-number">17</div>
                <div>
                  <h3 className="section-title">Forms</h3>
                  <p className="section-subtitle">폼 디자인 베스트 프랙티스</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  폼은 사용자와 시스템 간의 가장 중요한 상호작용 지점입니다.
                </p>
                <h4>입력 필드 구조</h4>
                <div className="code-block">
                  <code>
                    {`/* 입력 필드 기본 스타일 */
.input {
  height: 44px;
  padding: 0 16px;
  border: 1px solid #CBD5E0;  /* grey-300 */
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus {
  border-color: #2CB1BC;  /* primary */
  box-shadow: 0 0 0 3px rgba(44, 177, 188, 0.15);
  outline: none;
}

.input:invalid, .input.error {
  border-color: #F56565;  /* error */
}`}
                  </code>
                </div>
                <h4>폼 디자인 규칙</h4>
                <ul>
                  <li>레이블은 입력 필드 위에 배치</li>
                  <li>필수 필드는 별표(*)로 표시</li>
                  <li>Placeholder는 예시로만 사용 (레이블 대체 금지)</li>
                  <li>에러 메시지는 입력 필드 바로 아래에</li>
                  <li>관련 필드는 그룹으로 묶기</li>
                </ul>
              </div>
            </section>

            <section id="ch19" className="section">
              <div className="section-header">
                <div className="section-number">19</div>
                <div>
                  <h3 className="section-title">Navigation</h3>
                  <p className="section-subtitle">내비게이션 패턴</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  좋은 내비게이션은 사용자가 현재 위치를 알고, 원하는 곳으로 쉽게
                  이동할 수 있게 합니다.
                </p>
                <h4>내비게이션 유형</h4>
                <ul>
                  <li>
                    <strong>Top Navigation</strong>: 웹사이트, 적은 메뉴 항목
                  </li>
                  <li>
                    <strong>Side Navigation</strong>: 대시보드, 많은 메뉴 항목
                  </li>
                  <li>
                    <strong>Tab Bar</strong>: 모바일 앱, 3-5개 주요 섹션
                  </li>
                  <li>
                    <strong>Hamburger Menu</strong>: 모바일 웹, 숨겨진 메뉴
                  </li>
                </ul>
                <div className="highlight-box">
                  <h5>클릭 영역</h5>
                  <p>
                    모바일에서 터치 영역은 최소 44x44px 이상이어야 합니다. 작은
                    아이콘도 패딩으로 터치 영역을 확보하세요.
                  </p>
                </div>
              </div>
            </section>

            <section id="ch20" className="section">
              <div className="section-header">
                <div className="section-number">20</div>
                <div>
                  <h3 className="section-title">Animation</h3>
                  <p className="section-subtitle">모션과 트랜지션</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  애니메이션은 UI에 생명력을 불어넣지만, 과하면 사용자 경험을
                  해칩니다.
                </p>
                <h4>트랜지션 시간</h4>
                <ul>
                  <li>
                    <strong>즉각적 (50-100ms)</strong>: 버튼 호버, 토글
                  </li>
                  <li>
                    <strong>빠름 (150-200ms)</strong>: 드롭다운, 메뉴 확장
                  </li>
                  <li>
                    <strong>보통 (250-300ms)</strong>: 모달, 페이지 전환
                  </li>
                  <li>
                    <strong>느림 (400-500ms)</strong>: 복잡한 상태 변화
                  </li>
                </ul>
                <div className="code-block">
                  <code>
                    {`/* 기본 트랜지션 */
.element {
  transition: all 0.2s ease-out;
}

/* 호버 효과 */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

/* 버튼 클릭 */
.btn:active {
  transform: scale(0.98);
}`}
                  </code>
                </div>
              </div>
            </section>
          </div>

          {/* BONUS Section */}
          <div className="section-group">
            <div className="section-group-title">BONUS CONTENT</div>

            <section id="ch24" className="section">
              <div className="section-header">
                <div className="section-number">24</div>
                <div>
                  <h3 className="section-title">Design Styles</h3>
                  <p className="section-subtitle">191페이지 부록</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  동반 전자책 "UI Design Styles"에서는 다양한 디자인 스타일과 그
                  적용 방법을 다룹니다.
                </p>
                <ul>
                  <li>
                    <strong>Minimal</strong>: 흑백 기반, 여백 극대화
                  </li>
                  <li>
                    <strong>Glassmorphism</strong>: 투명 배경, 블러 효과
                  </li>
                  <li>
                    <strong>Neumorphism</strong>: 소프트 그림자, 돌출 효과
                  </li>
                  <li>
                    <strong>Dark Mode</strong>: 다크 배경, 네온 액센트
                  </li>
                  <li>
                    <strong>Gradient</strong>: 선명한 그라데이션
                  </li>
                  <li>
                    <strong>3D/Isometric</strong>: 입체적 일러스트
                  </li>
                </ul>
              </div>
            </section>

            <section id="ch26" className="section">
              <div className="section-header">
                <div className="section-number">26</div>
                <div>
                  <h3 className="section-title">Design Systems</h3>
                  <p className="section-subtitle">디자인 시스템 구축</p>
                </div>
              </div>
              <div className="section-content">
                <p>
                  디자인 시스템은 일관된 사용자 경험을 제공하고 팀의 생산성을
                  높입니다.
                </p>
                <h4>디자인 시스템의 구성요소</h4>
                <ul>
                  <li>
                    <strong>Design Tokens</strong>: 색상, 타이포그래피, 간격, 그림자
                  </li>
                  <li>
                    <strong>Components</strong>: 버튼, 입력, 카드, 모달 등
                  </li>
                  <li>
                    <strong>Patterns</strong>: 폼, 테이블, 내비게이션 패턴
                  </li>
                  <li>
                    <strong>Guidelines</strong>: 사용 가이드라인과 원칙
                  </li>
                </ul>
                <div className="code-block">
                  <code>
                    {`/* CSS 변수로 디자인 토큰 정의 */
:root {
  /* Colors */
  --color-primary: #2CB1BC;
  --color-secondary: #718096;
  --color-error: #F56565;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}`}
                  </code>
                </div>
              </div>
            </section>

            <section id="ch28" className="section">
              <div className="section-header">
                <div className="section-number">28</div>
                <div>
                  <h3 className="section-title">Developer Handoff</h3>
                  <p className="section-subtitle">개발자와의 협업</p>
                </div>
              </div>
              <div className="section-content">
                <p>디자인을 개발자에게 효과적으로 전달하는 것은 중요합니다.</p>
                <h4>핸드오프 체크리스트</h4>
                <ul>
                  <li>모든 상태 (hover, active, disabled, error) 정의</li>
                  <li>반응형 브레이크포인트별 디자인</li>
                  <li>정확한 수치 (px, rem) 명시</li>
                  <li>애니메이션 타이밍과 이징</li>
                  <li>에셋 내보내기 (SVG, PNG @2x)</li>
                  <li>컴포넌트 명명 규칙</li>
                </ul>
                <div className="highlight-box">
                  <h5>팁</h5>
                  <p>
                    Figma의 Dev Mode나 Zeplin 같은 도구를 사용하면 개발자가 직접
                    디자인에서 수치와 코드를 추출할 수 있습니다.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Videos Section */}
          <div className="section-group">
            <div className="section-group-title">VIDEO TUTORIALS</div>

            <section className="section">
              <div className="section-header">
                <div className="section-number">V</div>
                <div>
                  <h3 className="section-title">Exclusive Video Materials</h3>
                  <p className="section-subtitle">구매자 전용 영상 자료</p>
                </div>
              </div>
              <div className="section-content">
                <p>책 구매자를 위한 독점 비디오 튜토리얼입니다.</p>
                <div className="video-grid">
                  <a
                    href="https://youtu.be/I9CKtSm-fHw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-item"
                  >
                    <div className="video-icon">🔴</div>
                    <div className="video-title">Red Square Method</div>
                    <div className="video-desc">
                      UI 정렬을 위한 빨간 정사각형 기법
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/lhwFUkEQKOM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-item"
                  >
                    <div className="video-icon">🎬</div>
                    <div className="video-title">Live Redesign #1</div>
                    <div className="video-desc">실시간 리디자인 연습 세션</div>
                  </a>
                  <a
                    href="https://youtu.be/qSEtP_2UUSY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-item"
                  >
                    <div className="video-icon">🎬</div>
                    <div className="video-title">Live Redesign #2</div>
                    <div className="video-desc">실시간 리디자인 연습 세션</div>
                  </a>
                  <a
                    href="https://youtu.be/yR2HrPJFbJw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-item"
                  >
                    <div className="video-icon">🎬</div>
                    <div className="video-title">Live Redesign #3</div>
                    <div className="video-desc">실시간 리디자인 연습 세션</div>
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* AI Prompt Copy Section */}
          <div className="copy-section">
            <div className="copy-header">
              <div>
                <div className="copy-title">AI 디자인 프롬프트</div>
                <div className="copy-subtitle">
                  Designing User Interfaces 원칙을 적용한 AI 프롬프트
                </div>
              </div>
              <button
                onClick={handleCopy}
                className={`copy-button ${copied ? "copied" : ""}`}
              >
                {copied ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" />
                      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" />
                    </svg>
                    Copy Prompt
                  </>
                )}
              </button>
            </div>
            <div className="prompt-preview">
              <pre>{aiPrompt}</pre>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <Link href="/" className="footer-link">
              Style Gallery
            </Link>
            <Link href="/learn" className="footer-link">
              Refactoring UI
            </Link>
            <Link href="/boring-ui" className="footer-link">
              Boring UI
            </Link>
            <a
              href="https://www.designingui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Official Book
            </a>
          </div>
          <p className="footer-copy">
            Content summarized from "Designing User Interfaces" by Michal
            Malewicz & Diana Malewicz
          </p>
        </div>
      </footer>
    </>
  );
}

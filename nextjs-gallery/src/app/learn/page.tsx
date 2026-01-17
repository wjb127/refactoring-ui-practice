"use client";

import Link from "next/link";
import { useState } from "react";

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const aiPrompt = `# Refactoring UI 원칙에 따른 디자인 개선 요청

다음 Refactoring UI 핵심 원칙들을 적용하여 현재 웹사이트/컴포넌트의 디자인을 개선해주세요.

## 적용할 디자인 원칙

### 1. 시각적 계층 구조 (Visual Hierarchy)
- 크기만으로 계층을 만들지 말고, 색상 대비와 폰트 굵기 활용
- Primary 정보: 진한 색상 (grey-900), 굵은 폰트
- Secondary 정보: 중간 색상 (grey-600), 보통 굵기
- Tertiary 정보: 연한 색상 (grey-400), 작은 크기
- 2-3단계의 명확한 계층 유지

### 2. 일관된 간격 시스템 (Spacing System)
- 4px 또는 8px 기반의 간격 시스템 사용
- 권장 스케일: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- 섹션 사이: 48-96px
- 요소 그룹 사이: 24-32px
- 관련 요소 사이: 8-16px

### 3. 색상 시스템 (Color System)
- 각 색상은 050-900까지 9-10단계로 구성
- 050-200: 배경, 호버 상태, 보더
- 300-400: 덜 중요한 텍스트
- 500-600: 버튼, 링크, 강조
- 700-900: 제목, 본문 텍스트
- 채도 높은 색상은 아껴서 사용

### 4. 타이포그래피 (Typography)
- 5-7개의 폰트 크기로 제한
- 권장 스케일: 12, 14, 16, 18, 20, 24, 32, 48px
- 본문 (14-18px): line-height 1.6-1.8
- 제목 (24-32px): line-height 1.3-1.4
- 대형 제목 (48px+): line-height 1.1-1.2

### 5. Border Radius
- 작은 radius (0-4px): 전문적, 단정한 느낌
- 중간 radius (8px): 균형 잡힌 느낌
- 큰 radius (16px+): 모던하고 친근한 느낌
- 큰 요소에는 큰 radius, 작은 요소에는 작은 radius

### 6. 그림자 시스템 (Shadow System)
- sm: 0 1px 2px rgba(0,0,0,0.05) - 카드, 입력 필드
- md: 0 4px 6px rgba(0,0,0,0.07) - 드롭다운, 팝오버
- lg: 0 10px 15px rgba(0,0,0,0.1) - 모달, 토스트
- xl: 0 20px 25px rgba(0,0,0,0.15) - 풀스크린 오버레이

### 7. 마무리 디테일
- 모든 클릭 요소에 호버 효과 적용
- 상태 변화에 0.2-0.3s 트랜지션 적용
- 키보드 접근성을 위한 포커스 스타일
- 빈 상태, 로딩 상태, 에러 상태 처리

## 요청사항

위 원칙들을 현재 코드에 적용하여:
1. 시각적 계층 구조를 개선해주세요
2. 일관된 간격 시스템을 적용해주세요
3. 색상과 타이포그래피를 정리해주세요
4. Border radius와 그림자를 일관성 있게 조정해주세요
5. 호버/포커스 등 인터랙션 상태를 추가해주세요

변경 전후를 비교할 수 있도록 어떤 부분이 왜 바뀌었는지 설명해주세요.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(aiPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');

        :root {
          --blue-050: #EBF8FF;
          --blue-100: #BEE3F8;
          --blue-200: #90CDF4;
          --blue-300: #63B3ED;
          --blue-400: #4299E1;
          --blue-500: #3182CE;
          --blue-600: #2B6CB0;
          --blue-700: #2C5282;
          --blue-800: #2A4365;
          --blue-900: #1A365D;

          --grey-050: #F7FAFC;
          --grey-100: #EDF2F7;
          --grey-200: #E2E8F0;
          --grey-300: #CBD5E0;
          --grey-400: #A0AEC0;
          --grey-500: #718096;
          --grey-600: #4A5568;
          --grey-700: #2D3748;
          --grey-800: #1A202C;
          --grey-900: #171923;

          --green-500: #48BB78;
          --orange-500: #ED8936;
          --red-500: #F56565;
          --purple-500: #9F7AEA;

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

          --radius-sm: 6px;
          --radius-md: 8px;
          --radius-lg: 12px;
          --radius-xl: 16px;

          --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
          --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
          --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', -apple-system, sans-serif;
          background: var(--grey-050);
          color: var(--grey-800);
          line-height: 1.7;
        }

        .learn-nav {
          position: sticky;
          top: 0;
          background: white;
          border-bottom: 1px solid var(--grey-200);
          padding: var(--space-4) var(--space-6);
          z-index: 100;
        }

        .learn-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .learn-logo {
          font-size: 20px;
          font-weight: 700;
          color: var(--grey-800);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .learn-logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--blue-500) 0%, var(--blue-600) 100%);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
        }

        .learn-nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .learn-nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .learn-nav-links a:hover {
          color: var(--blue-600);
        }

        .learn-hero {
          background: linear-gradient(135deg, var(--blue-600) 0%, var(--blue-800) 100%);
          padding: var(--space-10) var(--space-6);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .learn-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .learn-hero-content {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .learn-hero-badge {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          padding: var(--space-2) var(--space-4);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: var(--space-5);
        }

        .learn-hero h1 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: var(--space-5);
          line-height: 1.2;
        }

        .learn-hero p {
          font-size: 20px;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .learn-toc {
          background: white;
          padding: var(--space-8) var(--space-6);
          border-bottom: 1px solid var(--grey-200);
        }

        .learn-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .learn-toc h2 {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--grey-500);
          margin-bottom: var(--space-5);
        }

        .learn-toc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
        }

        .learn-toc-item {
          padding: var(--space-4);
          background: var(--grey-050);
          border-radius: var(--radius-lg);
          border: 1px solid var(--grey-100);
          cursor: pointer;
          transition: all 0.2s;
        }

        .learn-toc-item:hover {
          background: white;
          border-color: var(--blue-200);
          box-shadow: var(--shadow-md);
        }

        .learn-toc-item.active {
          background: var(--blue-050);
          border-color: var(--blue-300);
        }

        .learn-toc-number {
          font-size: 12px;
          font-weight: 700;
          color: var(--blue-500);
          margin-bottom: var(--space-1);
        }

        .learn-toc-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--grey-800);
        }

        .learn-content {
          padding: var(--space-9) var(--space-6);
        }

        .learn-section {
          max-width: 900px;
          margin: 0 auto var(--space-10);
        }

        .learn-section-header {
          margin-bottom: var(--space-7);
        }

        .learn-section-number {
          font-size: 14px;
          font-weight: 700;
          color: var(--blue-500);
          margin-bottom: var(--space-2);
        }

        .learn-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: var(--grey-900);
          margin-bottom: var(--space-4);
        }

        .learn-section-intro {
          font-size: 18px;
          color: var(--grey-600);
          line-height: 1.8;
        }

        .learn-card {
          background: white;
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          margin-bottom: var(--space-5);
          border: 1px solid var(--grey-200);
          box-shadow: var(--shadow-sm);
        }

        .learn-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--grey-800);
          margin-bottom: var(--space-3);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .learn-card h3 .icon {
          width: 32px;
          height: 32px;
          background: var(--blue-100);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .learn-card p {
          font-size: 15px;
          color: var(--grey-600);
          line-height: 1.8;
          margin-bottom: var(--space-4);
        }

        .learn-tip {
          background: var(--blue-050);
          border-left: 4px solid var(--blue-500);
          padding: var(--space-4) var(--space-5);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin: var(--space-4) 0;
        }

        .learn-tip-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--blue-600);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--space-1);
        }

        .learn-tip p {
          font-size: 14px;
          color: var(--blue-800);
          margin: 0;
        }

        .learn-example {
          background: var(--grey-100);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          margin: var(--space-5) 0;
        }

        .learn-example-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--grey-500);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: var(--space-3);
        }

        .learn-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }

        .learn-compare-item {
          background: white;
          border-radius: var(--radius-md);
          padding: var(--space-4);
          text-align: center;
        }

        .learn-compare-bad {
          border: 2px solid var(--red-500);
        }

        .learn-compare-good {
          border: 2px solid var(--green-500);
        }

        .learn-compare-label {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: var(--space-2);
        }

        .learn-compare-bad .learn-compare-label {
          color: var(--red-500);
        }

        .learn-compare-good .learn-compare-label {
          color: var(--green-500);
        }

        .learn-list {
          list-style: none;
          margin: var(--space-4) 0;
        }

        .learn-list li {
          padding: var(--space-3) 0;
          padding-left: var(--space-6);
          position: relative;
          font-size: 15px;
          color: var(--grey-700);
          border-bottom: 1px solid var(--grey-100);
        }

        .learn-list li:last-child {
          border-bottom: none;
        }

        .learn-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--green-500);
          font-weight: 700;
        }

        .learn-code {
          font-family: 'Fira Code', monospace;
          background: var(--grey-800);
          color: var(--grey-100);
          padding: var(--space-4);
          border-radius: var(--radius-md);
          font-size: 13px;
          overflow-x: auto;
          margin: var(--space-4) 0;
        }

        .learn-code .comment { color: var(--grey-500); }
        .learn-code .keyword { color: var(--purple-500); }
        .learn-code .string { color: var(--green-500); }
        .learn-code .number { color: var(--orange-500); }

        .learn-color-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 2px;
          margin: var(--space-4) 0;
        }

        .learn-color-swatch {
          aspect-ratio: 1;
          border-radius: var(--radius-sm);
          position: relative;
        }

        .learn-color-swatch::after {
          content: attr(data-label);
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 10px;
          color: var(--grey-500);
        }

        .learn-spacing-demo {
          display: flex;
          align-items: flex-end;
          gap: var(--space-3);
          padding: var(--space-4);
          background: var(--grey-100);
          border-radius: var(--radius-md);
          margin: var(--space-4) 0;
        }

        .learn-spacing-box {
          background: var(--blue-500);
          width: 40px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          color: white;
          font-size: 11px;
          font-weight: 600;
          padding-bottom: var(--space-1);
        }

        .learn-radius-demo {
          display: flex;
          gap: var(--space-4);
          margin: var(--space-4) 0;
        }

        .learn-radius-item {
          width: 80px;
          height: 80px;
          background: var(--blue-500);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: 600;
        }

        .learn-hierarchy-demo {
          background: white;
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          margin: var(--space-4) 0;
        }

        .learn-hierarchy-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--grey-900);
          margin-bottom: var(--space-2);
        }

        .learn-hierarchy-subtitle {
          font-size: 14px;
          color: var(--grey-500);
          margin-bottom: var(--space-3);
        }

        .learn-hierarchy-body {
          font-size: 15px;
          color: var(--grey-600);
          line-height: 1.7;
        }

        .learn-footer {
          background: var(--grey-900);
          color: white;
          padding: var(--space-8) var(--space-6);
          text-align: center;
        }

        .learn-footer p {
          color: var(--grey-400);
          font-size: 14px;
        }

        .learn-footer a {
          color: var(--blue-300);
          text-decoration: none;
        }

        .learn-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: var(--blue-600);
          color: white;
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-md);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          box-shadow: var(--shadow-lg);
          transition: all 0.2s;
          z-index: 100;
        }

        .learn-back-link:hover {
          background: var(--blue-700);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .learn-toc-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .learn-hero h1 { font-size: 32px; }
          .learn-toc-grid { grid-template-columns: 1fr; }
          .learn-compare { grid-template-columns: 1fr; }
          .learn-nav-links { display: none; }
        }

        /* AI Prompt Section Styles */
        .learn-prompt-container {
          background: var(--grey-800);
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin: var(--space-5) 0;
        }

        .learn-prompt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-4) var(--space-5);
          background: var(--grey-900);
          border-bottom: 1px solid var(--grey-700);
        }

        .learn-prompt-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--grey-300);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .learn-prompt-title span {
          color: var(--green-500);
        }

        .learn-copy-btn {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: var(--blue-600);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .learn-copy-btn:hover {
          background: var(--blue-500);
          transform: translateY(-1px);
        }

        .learn-copy-btn.copied {
          background: var(--green-500);
        }

        .learn-prompt-content {
          padding: var(--space-5);
          max-height: 400px;
          overflow-y: auto;
        }

        .learn-prompt-content pre {
          font-family: 'Fira Code', monospace;
          font-size: 13px;
          color: var(--grey-200);
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
          margin: 0;
        }

        .learn-prompt-content::-webkit-scrollbar {
          width: 8px;
        }

        .learn-prompt-content::-webkit-scrollbar-track {
          background: var(--grey-800);
        }

        .learn-prompt-content::-webkit-scrollbar-thumb {
          background: var(--grey-600);
          border-radius: 4px;
        }

        .learn-prompt-content::-webkit-scrollbar-thumb:hover {
          background: var(--grey-500);
        }

        .learn-usage-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
          margin: var(--space-5) 0;
        }

        .learn-usage-step {
          background: white;
          padding: var(--space-5);
          border-radius: var(--radius-lg);
          border: 1px solid var(--grey-200);
          text-align: center;
        }

        .learn-usage-step-number {
          width: 36px;
          height: 36px;
          background: var(--blue-100);
          color: var(--blue-600);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          margin: 0 auto var(--space-3);
        }

        .learn-usage-step h4 {
          font-size: 15px;
          font-weight: 600;
          color: var(--grey-800);
          margin-bottom: var(--space-2);
        }

        .learn-usage-step p {
          font-size: 13px;
          color: var(--grey-600);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .learn-usage-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <nav className="learn-nav">
        <div className="learn-nav-container">
          <div className="learn-logo">
            <div className="learn-logo-icon">📚</div>
            Refactoring UI Guide
          </div>
          <ul className="learn-nav-links">
            <li><a href="#hierarchy">Hierarchy</a></li>
            <li><a href="#spacing">Spacing</a></li>
            <li><a href="#color">Color</a></li>
            <li><a href="#typography">Typography</a></li>
          </ul>
        </div>
      </nav>

      <section className="learn-hero">
        <div className="learn-hero-content">
          <span className="learn-hero-badge">디자인 시스템 가이드</span>
          <h1>Refactoring UI<br />핵심 원칙 마스터하기</h1>
          <p>
            개발자를 위한 실용적인 UI 디자인 원칙.
            복잡한 이론 없이, 바로 적용할 수 있는 패턴과 테크닉을 배워보세요.
          </p>
        </div>
      </section>

      <section className="learn-toc">
        <div className="learn-container">
          <h2>목차</h2>
          <div className="learn-toc-grid">
            <a href="#hierarchy" className="learn-toc-item">
              <div className="learn-toc-number">01</div>
              <div className="learn-toc-title">시각적 계층 구조</div>
            </a>
            <a href="#spacing" className="learn-toc-item">
              <div className="learn-toc-number">02</div>
              <div className="learn-toc-title">레이아웃과 여백</div>
            </a>
            <a href="#color" className="learn-toc-item">
              <div className="learn-toc-number">03</div>
              <div className="learn-toc-title">색상 시스템</div>
            </a>
            <a href="#typography" className="learn-toc-item">
              <div className="learn-toc-number">04</div>
              <div className="learn-toc-title">타이포그래피</div>
            </a>
            <a href="#radius" className="learn-toc-item">
              <div className="learn-toc-number">05</div>
              <div className="learn-toc-title">Border Radius와 개성</div>
            </a>
            <a href="#shadow" className="learn-toc-item">
              <div className="learn-toc-number">06</div>
              <div className="learn-toc-title">그림자와 깊이감</div>
            </a>
            <a href="#images" className="learn-toc-item">
              <div className="learn-toc-number">07</div>
              <div className="learn-toc-title">이미지 다루기</div>
            </a>
            <a href="#finishing" className="learn-toc-item">
              <div className="learn-toc-number">08</div>
              <div className="learn-toc-title">마무리 터치</div>
            </a>
            <a href="#ai-prompt" className="learn-toc-item">
              <div className="learn-toc-number">09</div>
              <div className="learn-toc-title">AI 디자인 프롬프트</div>
            </a>
          </div>
        </div>
      </section>

      <section className="learn-content">
        {/* Section 1: Hierarchy */}
        <div id="hierarchy" className="learn-section">
          <div className="learn-section-header">
            <div className="learn-section-number">Chapter 01</div>
            <h2>시각적 계층 구조</h2>
            <p className="learn-section-intro">
              디자인에서 가장 중요한 것은 <strong>무엇이 중요한지</strong> 명확히 전달하는 것입니다.
              크기, 색상, 굵기를 활용해 정보의 우선순위를 시각적으로 표현하세요.
            </p>
          </div>

          <div className="learn-card">
            <h3><span className="icon">👁️</span> 크기만으로 계층을 만들지 마세요</h3>
            <p>
              모든 것을 크게 만들면 아무것도 중요해 보이지 않습니다.
              대신 <strong>색상의 대비</strong>와 <strong>폰트 굵기</strong>를 활용하세요.
            </p>

            <div className="learn-example">
              <div className="learn-example-label">예시: 카드 컴포넌트의 계층</div>
              <div className="learn-hierarchy-demo">
                <div className="learn-hierarchy-title">프로젝트 관리의 새로운 방법</div>
                <div className="learn-hierarchy-subtitle">2024년 1월 15일 · 5분 읽기</div>
                <div className="learn-hierarchy-body">
                  효율적인 프로젝트 관리를 위한 실용적인 팁과 도구를 소개합니다.
                  팀 협업을 개선하고 생산성을 높이는 방법을 알아보세요.
                </div>
              </div>
            </div>

            <div className="learn-tip">
              <div className="learn-tip-label">핵심 원칙</div>
              <p>제목은 굵고 어둡게, 부가 정보는 작고 흐리게. 2-3단계의 명확한 계층을 유지하세요.</p>
            </div>
          </div>

          <div className="learn-card">
            <h3><span className="icon">⚖️</span> 시각적 무게 균형 맞추기</h3>
            <p>
              같은 크기의 요소라도 색상이 진하면 더 무거워 보입니다.
              아이콘과 텍스트의 균형을 맞출 때 이 원리를 활용하세요.
            </p>

            <ul className="learn-list">
              <li>Primary 정보: 진한 색상 (grey-900), 굵은 폰트</li>
              <li>Secondary 정보: 중간 색상 (grey-600), 보통 굵기</li>
              <li>Tertiary 정보: 연한 색상 (grey-400), 작은 크기</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Spacing */}
        <div id="spacing" className="learn-section">
          <div className="learn-section-header">
            <div className="learn-section-number">Chapter 02</div>
            <h2>레이아웃과 여백</h2>
            <p className="learn-section-intro">
              여백은 디자인의 숨결입니다. 일관된 간격 시스템을 사용하면
              디자인이 훨씬 정돈되고 프로페셔널해 보입니다.
            </p>
          </div>

          <div className="learn-card">
            <h3><span className="icon">📏</span> 간격 시스템 정의하기</h3>
            <p>
              임의의 숫자(13px, 17px)를 피하고, <strong>일관된 스케일</strong>을 사용하세요.
              4px 또는 8px 기반의 시스템이 가장 보편적입니다.
            </p>

            <div className="learn-spacing-demo">
              <div className="learn-spacing-box" style={{height: '16px'}}>4</div>
              <div className="learn-spacing-box" style={{height: '32px'}}>8</div>
              <div className="learn-spacing-box" style={{height: '48px'}}>12</div>
              <div className="learn-spacing-box" style={{height: '64px'}}>16</div>
              <div className="learn-spacing-box" style={{height: '96px'}}>24</div>
              <div className="learn-spacing-box" style={{height: '128px'}}>32</div>
              <div className="learn-spacing-box" style={{height: '192px'}}>48</div>
            </div>

            <div className="learn-code">
              <span className="comment">/* 권장하는 간격 시스템 */</span><br/>
              <span className="keyword">--space-1</span>: <span className="number">4px</span>;<br/>
              <span className="keyword">--space-2</span>: <span className="number">8px</span>;<br/>
              <span className="keyword">--space-3</span>: <span className="number">12px</span>;<br/>
              <span className="keyword">--space-4</span>: <span className="number">16px</span>;<br/>
              <span className="keyword">--space-5</span>: <span className="number">24px</span>;<br/>
              <span className="keyword">--space-6</span>: <span className="number">32px</span>;<br/>
              <span className="keyword">--space-7</span>: <span className="number">48px</span>;<br/>
              <span className="keyword">--space-8</span>: <span className="number">64px</span>;
            </div>
          </div>

          <div className="learn-card">
            <h3><span className="icon">🎯</span> 요소 사이의 관계 표현하기</h3>
            <p>
              <strong>근접성의 원리</strong>: 관련된 요소는 가깝게, 그렇지 않은 요소는 멀게 배치하세요.
              여백은 그룹을 구분하는 가장 효과적인 방법입니다.
            </p>

            <div className="learn-tip">
              <div className="learn-tip-label">실전 팁</div>
              <p>섹션 사이: 48-96px / 요소 그룹 사이: 24-32px / 관련 요소 사이: 8-16px</p>
            </div>
          </div>
        </div>

        {/* Section 3: Color */}
        <div id="color" className="learn-section">
          <div className="learn-section-header">
            <div className="learn-section-number">Chapter 03</div>
            <h2>색상 시스템</h2>
            <p className="learn-section-intro">
              효과적인 색상 시스템은 9-10단계의 밝기를 가진 팔레트로 구성됩니다.
              무채색(Grey)과 1-2개의 브랜드 색상으로 시작하세요.
            </p>
          </div>

          <div className="learn-card">
            <h3><span className="icon">🎨</span> 색상 팔레트 구축하기</h3>
            <p>
              각 색상은 가장 밝은 것(050)부터 가장 어두운 것(900)까지 9-10단계로 구성합니다.
              이렇게 하면 어떤 상황에서도 적절한 색상 변형을 찾을 수 있습니다.
            </p>

            <div className="learn-example">
              <div className="learn-example-label">Blue 팔레트 예시</div>
              <div className="learn-color-grid">
                <div className="learn-color-swatch" style={{background: '#EBF8FF'}} data-label="050"></div>
                <div className="learn-color-swatch" style={{background: '#BEE3F8'}} data-label="100"></div>
                <div className="learn-color-swatch" style={{background: '#90CDF4'}} data-label="200"></div>
                <div className="learn-color-swatch" style={{background: '#63B3ED'}} data-label="300"></div>
                <div className="learn-color-swatch" style={{background: '#4299E1'}} data-label="400"></div>
                <div className="learn-color-swatch" style={{background: '#3182CE'}} data-label="500"></div>
                <div className="learn-color-swatch" style={{background: '#2B6CB0'}} data-label="600"></div>
                <div className="learn-color-swatch" style={{background: '#2C5282'}} data-label="700"></div>
                <div className="learn-color-swatch" style={{background: '#2A4365'}} data-label="800"></div>
                <div className="learn-color-swatch" style={{background: '#1A365D'}} data-label="900"></div>
              </div>
            </div>

            <ul className="learn-list">
              <li>050-200: 배경, 호버 상태, 보더</li>
              <li>300-400: 덜 중요한 텍스트</li>
              <li>500-600: 버튼, 링크, 강조</li>
              <li>700-900: 제목, 본문 텍스트</li>
            </ul>
          </div>

          <div className="learn-card">
            <h3><span className="icon">⚡</span> 채도가 높을수록 아껴 쓰세요</h3>
            <p>
              비비드한 색상은 눈을 끌지만, 너무 많이 사용하면 피곤해집니다.
              Primary 액션이나 강조할 때만 사용하고, 대부분은 낮은 채도의 색상을 사용하세요.
            </p>

            <div className="learn-compare">
              <div className="learn-compare-item learn-compare-bad">
                <div className="learn-compare-label">❌ 피하세요</div>
                <div style={{background: '#FF0000', color: 'white', padding: '12px', borderRadius: '8px', fontWeight: 600}}>
                  순수 빨강 (#FF0000)
                </div>
              </div>
              <div className="learn-compare-item learn-compare-good">
                <div className="learn-compare-label">✓ 권장</div>
                <div style={{background: '#E53E3E', color: 'white', padding: '12px', borderRadius: '8px', fontWeight: 600}}>
                  조정된 빨강 (#E53E3E)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Typography */}
        <div id="typography" className="learn-section">
          <div className="learn-section-header">
            <div className="learn-section-number">Chapter 04</div>
            <h2>타이포그래피</h2>
            <p className="learn-section-intro">
              좋은 타이포그래피는 가독성과 심미성을 모두 만족시킵니다.
              폰트 크기, 줄 높이, 글자 간격의 조화가 중요합니다.
            </p>
          </div>

          <div className="learn-card">
            <h3><span className="icon">📝</span> 타입 스케일 정의하기</h3>
            <p>
              폰트 크기도 간격처럼 시스템으로 관리하세요.
              너무 많은 크기를 사용하지 말고, 5-7개 정도로 제한하세요.
            </p>

            <div className="learn-code">
              <span className="comment">/* 권장하는 타입 스케일 */</span><br/>
              <span className="keyword">--text-xs</span>: <span className="number">12px</span>;  <span className="comment">/* 캡션 */</span><br/>
              <span className="keyword">--text-sm</span>: <span className="number">14px</span>;  <span className="comment">/* 보조 텍스트 */</span><br/>
              <span className="keyword">--text-base</span>: <span className="number">16px</span>; <span className="comment">/* 본문 */</span><br/>
              <span className="keyword">--text-lg</span>: <span className="number">18px</span>;  <span className="comment">/* 강조 본문 */</span><br/>
              <span className="keyword">--text-xl</span>: <span className="number">20px</span>;  <span className="comment">/* 소제목 */</span><br/>
              <span className="keyword">--text-2xl</span>: <span className="number">24px</span>; <span className="comment">/* 제목 */</span><br/>
              <span className="keyword">--text-3xl</span>: <span className="number">32px</span>; <span className="comment">/* 대제목 */</span><br/>
              <span className="keyword">--text-4xl</span>: <span className="number">48px</span>; <span className="comment">/* 히어로 */</span>
            </div>
          </div>

          <div className="learn-card">
            <h3><span className="icon">↕️</span> 줄 높이(Line Height) 조절하기</h3>
            <p>
              글자 크기에 따라 줄 높이를 다르게 설정하세요.
              작은 텍스트는 더 넓은 줄 높이가 필요하고, 큰 제목은 더 좁은 줄 높이가 적합합니다.
            </p>

            <ul className="learn-list">
              <li>본문 텍스트 (14-18px): line-height 1.6-1.8</li>
              <li>제목 (24-32px): line-height 1.3-1.4</li>
              <li>대형 제목 (48px+): line-height 1.1-1.2</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Border Radius */}
        <div id="radius" className="learn-section">
          <div className="learn-section-header">
            <div className="learn-section-number">Chapter 05</div>
            <h2>Border Radius와 개성</h2>
            <p className="learn-section-intro">
              Border radius는 브랜드 개성을 표현하는 강력한 도구입니다.
              작은 radius는 전문적이고, 큰 radius는 친근하고 현대적인 느낌을 줍니다.
            </p>
          </div>

          <div className="learn-card">
            <h3><span className="icon">🔲</span> Radius가 전달하는 느낌</h3>
            <p>
              같은 디자인이라도 border-radius 하나로 완전히 다른 분위기를 연출할 수 있습니다.
              브랜드 톤에 맞는 radius를 일관되게 사용하세요.
            </p>

            <div className="learn-radius-demo">
              <div className="learn-radius-item" style={{borderRadius: '0'}}>0px<br/><small>전문적</small></div>
              <div className="learn-radius-item" style={{borderRadius: '4px'}}>4px<br/><small>단정함</small></div>
              <div className="learn-radius-item" style={{borderRadius: '8px'}}>8px<br/><small>균형</small></div>
              <div className="learn-radius-item" style={{borderRadius: '16px'}}>16px<br/><small>모던</small></div>
              <div className="learn-radius-item" style={{borderRadius: '50%'}}>50%<br/><small>친근함</small></div>
            </div>

            <div className="learn-tip">
              <div className="learn-tip-label">실전 팁</div>
              <p>큰 요소에는 큰 radius, 작은 요소에는 작은 radius를 사용하세요. 버튼(8px)과 모달(16px)의 radius가 같으면 부자연스러워 보입니다.</p>
            </div>
          </div>
        </div>

        {/* Section 6: Shadow */}
        <div id="shadow" className="learn-section">
          <div className="learn-section-header">
            <div className="learn-section-number">Chapter 06</div>
            <h2>그림자와 깊이감</h2>
            <p className="learn-section-intro">
              그림자는 요소 사이의 관계와 중요도를 표현합니다.
              미묘한 그림자 시스템으로 자연스러운 깊이감을 만들어보세요.
            </p>
          </div>

          <div className="learn-card">
            <h3><span className="icon">🌓</span> 그림자 시스템 구축하기</h3>
            <p>
              그림자도 간격처럼 시스템으로 관리하세요.
              3-5단계의 그림자 강도를 미리 정의해두면 일관성을 유지할 수 있습니다.
            </p>

            <div className="learn-code">
              <span className="comment">/* 그림자 시스템 */</span><br/>
              <span className="keyword">--shadow-sm</span>: <span className="string">0 1px 2px rgba(0,0,0,0.05)</span>;<br/>
              <span className="keyword">--shadow-md</span>: <span className="string">0 4px 6px rgba(0,0,0,0.07)</span>;<br/>
              <span className="keyword">--shadow-lg</span>: <span className="string">0 10px 15px rgba(0,0,0,0.1)</span>;<br/>
              <span className="keyword">--shadow-xl</span>: <span className="string">0 20px 25px rgba(0,0,0,0.15)</span>;
            </div>

            <ul className="learn-list">
              <li>sm: 카드, 입력 필드 (살짝 떠있는 느낌)</li>
              <li>md: 드롭다운, 팝오버 (명확한 분리)</li>
              <li>lg: 모달, 토스트 (강한 초점)</li>
              <li>xl: 풀스크린 오버레이 (최상위 레이어)</li>
            </ul>
          </div>
        </div>

        {/* Section 7: Images */}
        <div id="images" className="learn-section">
          <div className="learn-section-header">
            <div className="learn-section-number">Chapter 07</div>
            <h2>이미지 다루기</h2>
            <p className="learn-section-intro">
              텍스트 위에 이미지를 배경으로 사용할 때는 주의가 필요합니다.
              명암 대비를 확보해 가독성을 유지하세요.
            </p>
          </div>

          <div className="learn-card">
            <h3><span className="icon">🖼️</span> 이미지 위 텍스트 처리</h3>
            <p>
              배경 이미지 위에 텍스트를 올릴 때는 항상 대비를 높여야 합니다.
              여러 가지 테크닉을 상황에 맞게 활용하세요.
            </p>

            <ul className="learn-list">
              <li>반투명 오버레이: rgba(0,0,0,0.5) 등의 레이어 추가</li>
              <li>텍스트 그림자: 텍스트에 그림자를 적용해 분리</li>
              <li>그라데이션 오버레이: 이미지 하단에서 상단으로 점진적 어둡게</li>
              <li>이미지 흐림: backdrop-filter: blur() 사용</li>
            </ul>
          </div>
        </div>

        {/* Section 8: Finishing Touches */}
        <div id="finishing" className="learn-section">
          <div className="learn-section-header">
            <div className="learn-section-number">Chapter 08</div>
            <h2>마무리 터치</h2>
            <p className="learn-section-intro">
              디테일이 디자인을 완성합니다. 작은 디테일에 신경 쓰면
              전체적인 품질이 확연히 달라집니다.
            </p>
          </div>

          <div className="learn-card">
            <h3><span className="icon">✨</span> 디테일 체크리스트</h3>
            <p>
              완성이라고 생각될 때, 다음 항목들을 점검해보세요.
            </p>

            <ul className="learn-list">
              <li>호버 상태: 모든 클릭 가능한 요소에 호버 효과 적용</li>
              <li>트랜지션: 상태 변화에 부드러운 전환 효과 (0.2-0.3s)</li>
              <li>포커스 상태: 키보드 네비게이션을 위한 포커스 링</li>
              <li>아이콘 정렬: 텍스트와 아이콘의 수직 정렬 확인</li>
              <li>빈 상태: 데이터가 없을 때의 UI 처리</li>
              <li>로딩 상태: 스켈레톤이나 스피너 적용</li>
              <li>에러 상태: 오류 메시지와 입력 필드 하이라이트</li>
            </ul>
          </div>

          <div className="learn-card">
            <h3><span className="icon">🎭</span> 브랜드 개성 표현하기</h3>
            <p>
              지금까지 배운 모든 요소 - 색상, radius, 폰트, 여백, 그림자 - 의 조합이
              브랜드 개성을 만듭니다. 일관성 있게 적용하는 것이 핵심입니다.
            </p>

            <div className="learn-tip">
              <div className="learn-tip-label">핵심 요약</div>
              <p>
                Professional: 작은 radius + 차분한 색상 + 세리프/산세리프 혼합<br/>
                Playful: 큰 radius + 밝은 색상 + 둥근 산세리프<br/>
                Elegant: 얇은 선 + 넓은 여백 + 세리프 폰트<br/>
                Tech: 다크 테마 + 네온 액센트 + 모노스페이스
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: AI Prompt */}
        <div id="ai-prompt" className="learn-section">
          <div className="learn-section-header">
            <div className="learn-section-number">Chapter 09</div>
            <h2>AI 디자인 프롬프트</h2>
            <p className="learn-section-intro">
              위에서 배운 모든 원칙을 담은 프롬프트입니다.
              Claude Code나 다른 코딩 AI에게 전달하면 디자인을 체계적으로 개선할 수 있습니다.
            </p>
          </div>

          <div className="learn-card">
            <h3><span className="icon">🤖</span> 사용 방법</h3>
            <p>
              아래 프롬프트를 복사해서 AI에게 전달하면, Refactoring UI 원칙에 따라
              현재 코드의 디자인을 개선해줍니다.
            </p>

            <div className="learn-usage-steps">
              <div className="learn-usage-step">
                <div className="learn-usage-step-number">1</div>
                <h4>프롬프트 복사</h4>
                <p>아래 복사 버튼을 클릭하여 프롬프트를 클립보드에 복사하세요.</p>
              </div>
              <div className="learn-usage-step">
                <div className="learn-usage-step-number">2</div>
                <h4>AI에게 전달</h4>
                <p>Claude Code, Cursor, 또는 다른 코딩 AI에 프롬프트를 붙여넣기하세요.</p>
              </div>
              <div className="learn-usage-step">
                <div className="learn-usage-step-number">3</div>
                <h4>코드 개선 요청</h4>
                <p>개선하고 싶은 컴포넌트 코드와 함께 전달하면 디자인이 개선됩니다.</p>
              </div>
            </div>
          </div>

          <div className="learn-card">
            <h3><span className="icon">📋</span> 디자인 개선 프롬프트</h3>
            <p>
              이 프롬프트에는 시각적 계층, 간격 시스템, 색상, 타이포그래피, border radius,
              그림자 등 모든 핵심 원칙이 정리되어 있습니다.
            </p>

            <div className="learn-prompt-container">
              <div className="learn-prompt-header">
                <div className="learn-prompt-title">
                  <span>●</span> refactoring-ui-prompt.md
                </div>
                <button
                  className={`learn-copy-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopy}
                >
                  {copied ? '✓ 복사됨!' : '📋 복사하기'}
                </button>
              </div>
              <div className="learn-prompt-content">
                <pre>{aiPrompt}</pre>
              </div>
            </div>

            <div className="learn-tip">
              <div className="learn-tip-label">활용 팁</div>
              <p>
                프롬프트와 함께 개선하고 싶은 컴포넌트의 코드를 붙여넣으면
                AI가 원칙에 맞게 스타일을 수정해줍니다. "이 버튼 컴포넌트를 위 원칙에 맞게 개선해줘"처럼 요청하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="learn-footer">
        <p>
          이 가이드는 <a href="https://www.refactoringui.com/" target="_blank" rel="noopener noreferrer">Refactoring UI</a> 책의 핵심 내용을 요약한 것입니다.
          <br />더 자세한 내용은 원서를 참고하세요.
        </p>
      </footer>

      <Link href="/" className="learn-back-link">← 갤러리로</Link>
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function BoringUIPage() {
  const [copied, setCopied] = useState(false);

  const aiPrompt = `# Boring UI 원칙에 따른 컴포넌트 디자인 요청

다음 "Boring UI" 핵심 원칙들을 적용하여 UI 컴포넌트를 디자인/개선해주세요.

## Boring UI 디자인 원칙

### 1. "지루함"이 곧 명확함
- 트렌디한 것보다 명확하고 사용하기 쉬운 UI가 좋은 UI
- 사용자가 생각 없이 사용할 수 있어야 함
- 혼란을 주는 창의적 요소는 제거

### 2. 일관된 컴포넌트 시스템
- 버튼, 입력, 카드 등 모든 컴포넌트의 스타일 통일
- 한 프로젝트 내에서 같은 컴포넌트는 같은 모양
- 디자인 토큰(색상, 간격, radius)을 일관되게 적용

### 3. 시각적 계층 (Visual Hierarchy)
- 가장 중요한 것이 가장 눈에 띄어야 함
- Primary/Secondary/Tertiary 액션 명확히 구분
- 크기, 색상, 대비로 중요도 표현

### 4. 명확한 상호작용 피드백
- 클릭 가능한 요소는 클릭 가능해 보여야 함
- 호버, 포커스, 활성 상태 명확히 표시
- 로딩, 성공, 에러 상태 시각적으로 구분

### 5. 적절한 여백과 정렬
- 관련 요소는 가깝게, 다른 요소는 멀게
- 일관된 간격 시스템 사용 (4px/8px 기반)
- 요소들의 정렬 라인 맞추기

### 6. 읽기 쉬운 타이포그래피
- 본문은 14-16px, 충분한 줄 간격 (1.5-1.7)
- 제목과 본문의 명확한 구분
- 한 화면에 2-3개 폰트 크기만 사용

### 7. 목적에 맞는 색상 사용
- Primary 색상: 주요 액션 (버튼, 링크)
- 회색 계열: 대부분의 텍스트와 배경
- 시맨틱 색상: 성공(초록), 경고(노랑), 에러(빨강)

## 컴포넌트별 가이드

### 버튼
- Primary: 채워진 배경, 흰 텍스트
- Secondary: 테두리만, Primary 색상 텍스트
- Ghost: 배경 없음, 호버시 연한 배경
- 크기: sm(32px), md(40px), lg(48px) 높이

### 입력 필드
- 명확한 테두리 (grey-300)
- 포커스시 Primary 색상 테두리
- 레이블 위에, placeholder 연하게
- 에러시 빨간 테두리 + 에러 메시지

### 카드
- 연한 그림자 또는 테두리
- 일관된 내부 패딩 (16-24px)
- 제목 > 설명 > 액션 순서

### 드롭다운/셀렉트
- 현재 선택된 값 표시
- 화살표 아이콘으로 드롭다운 암시
- 옵션 hover 상태 명확히

## 요청사항

위 원칙을 적용하여:
1. 컴포넌트가 명확하고 사용하기 쉽게
2. 일관된 스타일 시스템 적용
3. 모든 상태(기본, 호버, 포커스, 비활성)를 고려
4. 접근성(키보드, 스크린리더) 고려

코드와 함께 왜 그렇게 디자인했는지 설명해주세요.`;

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
          --blue-050: #e6f4ff;
          --blue-100: #b3dcff;
          --blue-200: #80c4ff;
          --blue-300: #4dacff;
          --blue-400: #1a94ff;
          --blue-500: #0078e6;
          --blue-600: #005bb3;
          --blue-700: #003e80;
          --blue-800: #00214d;
          --blue-900: #00091a;

          --grey-050: #f8fafc;
          --grey-100: #f1f5f9;
          --grey-200: #e2e8f0;
          --grey-300: #cbd5e1;
          --grey-400: #94a3b8;
          --grey-500: #64748b;
          --grey-600: #475569;
          --grey-700: #334155;
          --grey-800: #1e293b;
          --grey-900: #0f172a;

          --green-500: #22c55e;
          --orange-500: #f97316;
          --red-500: #ef4444;
          --cyan-500: #06b6d4;

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

          --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
          --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
          --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: "Inter", -apple-system, sans-serif;
          background: var(--grey-050);
          color: var(--grey-800);
          line-height: 1.7;
        }

        .boring-nav {
          position: sticky;
          top: 0;
          background: white;
          border-bottom: 1px solid var(--grey-200);
          padding: var(--space-4) var(--space-6);
          z-index: 100;
        }

        .boring-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .boring-logo {
          font-size: 20px;
          font-weight: 700;
          color: var(--grey-800);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .boring-logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(
            135deg,
            var(--blue-500) 0%,
            var(--cyan-500) 100%
          );
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }

        .boring-nav-links {
          display: flex;
          gap: var(--space-6);
          list-style: none;
        }

        .boring-nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .boring-nav-links a:hover {
          color: var(--blue-600);
        }

        .boring-hero {
          background: linear-gradient(
            135deg,
            var(--grey-900) 0%,
            var(--blue-900) 100%
          );
          padding: var(--space-10) var(--space-6);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .boring-hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .boring-hero-content {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .boring-hero-badge {
          display: inline-block;
          background: rgba(6, 182, 212, 0.2);
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: var(--space-2) var(--space-4);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: var(--space-5);
          color: var(--cyan-500);
        }

        .boring-hero h1 {
          font-size: 52px;
          font-weight: 800;
          margin-bottom: var(--space-5);
          line-height: 1.1;
        }

        .boring-hero h1 span {
          background: linear-gradient(
            90deg,
            var(--blue-400) 0%,
            var(--cyan-500) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .boring-hero p {
          font-size: 20px;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto var(--space-6);
          line-height: 1.7;
        }

        .boring-hero-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-3);
          font-size: 14px;
          opacity: 0.7;
        }

        .boring-hero-author-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(
            135deg,
            var(--blue-500),
            var(--cyan-500)
          );
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
        }

        .boring-toc {
          background: white;
          padding: var(--space-8) var(--space-6);
          border-bottom: 1px solid var(--grey-200);
        }

        .boring-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .boring-toc h2 {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--grey-500);
          margin-bottom: var(--space-5);
        }

        .boring-toc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-4);
        }

        .boring-toc-item {
          padding: var(--space-4);
          background: var(--grey-050);
          border-radius: var(--radius-lg);
          border: 1px solid var(--grey-100);
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          color: inherit;
        }

        .boring-toc-item:hover {
          background: white;
          border-color: var(--blue-200);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .boring-toc-number {
          font-size: 12px;
          font-weight: 700;
          color: var(--blue-500);
          margin-bottom: var(--space-1);
        }

        .boring-toc-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--grey-800);
        }

        .boring-content {
          padding: var(--space-9) var(--space-6);
        }

        .boring-section {
          max-width: 900px;
          margin: 0 auto var(--space-10);
        }

        .boring-section-header {
          margin-bottom: var(--space-7);
        }

        .boring-section-number {
          font-size: 14px;
          font-weight: 700;
          color: var(--blue-500);
          margin-bottom: var(--space-2);
        }

        .boring-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: var(--grey-900);
          margin-bottom: var(--space-4);
        }

        .boring-section-intro {
          font-size: 18px;
          color: var(--grey-600);
          line-height: 1.8;
        }

        .boring-card {
          background: white;
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          margin-bottom: var(--space-5);
          border: 1px solid var(--grey-200);
          box-shadow: var(--shadow-sm);
        }

        .boring-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--grey-800);
          margin-bottom: var(--space-3);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .boring-card h3 .icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(
            135deg,
            var(--blue-100) 0%,
            var(--cyan-500) 100%
          );
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .boring-card p {
          font-size: 15px;
          color: var(--grey-600);
          line-height: 1.8;
          margin-bottom: var(--space-4);
        }

        .boring-tip {
          background: linear-gradient(
            135deg,
            var(--blue-050) 0%,
            rgba(6, 182, 212, 0.1) 100%
          );
          border-left: 4px solid var(--blue-500);
          padding: var(--space-4) var(--space-5);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin: var(--space-4) 0;
        }

        .boring-tip-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--blue-600);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--space-1);
        }

        .boring-tip p {
          font-size: 14px;
          color: var(--blue-800);
          margin: 0;
        }

        .boring-example {
          background: var(--grey-100);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          margin: var(--space-5) 0;
        }

        .boring-example-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--grey-500);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: var(--space-3);
        }

        .boring-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }

        .boring-compare-item {
          background: white;
          border-radius: var(--radius-md);
          padding: var(--space-4);
          text-align: center;
        }

        .boring-compare-bad {
          border: 2px solid var(--red-500);
        }

        .boring-compare-good {
          border: 2px solid var(--green-500);
        }

        .boring-compare-label {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: var(--space-2);
        }

        .boring-compare-bad .boring-compare-label {
          color: var(--red-500);
        }

        .boring-compare-good .boring-compare-label {
          color: var(--green-500);
        }

        .boring-list {
          list-style: none;
          margin: var(--space-4) 0;
        }

        .boring-list li {
          padding: var(--space-3) 0;
          padding-left: var(--space-6);
          position: relative;
          font-size: 15px;
          color: var(--grey-700);
          border-bottom: 1px solid var(--grey-100);
        }

        .boring-list li:last-child {
          border-bottom: none;
        }

        .boring-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--green-500);
          font-weight: 700;
        }

        .boring-code {
          font-family: "Fira Code", monospace;
          background: var(--grey-800);
          color: var(--grey-100);
          padding: var(--space-4);
          border-radius: var(--radius-md);
          font-size: 13px;
          overflow-x: auto;
          margin: var(--space-4) 0;
        }

        .boring-code .comment {
          color: var(--grey-500);
        }
        .boring-code .keyword {
          color: var(--cyan-500);
        }
        .boring-code .string {
          color: var(--green-500);
        }
        .boring-code .number {
          color: var(--orange-500);
        }

        .boring-component-demo {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          padding: var(--space-5);
          background: var(--grey-100);
          border-radius: var(--radius-lg);
          margin: var(--space-4) 0;
        }

        .boring-btn-demo {
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .boring-btn-primary {
          background: var(--blue-500);
          color: white;
          border: none;
        }

        .boring-btn-primary:hover {
          background: var(--blue-600);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 120, 230, 0.3);
        }

        .boring-btn-secondary {
          background: white;
          color: var(--blue-500);
          border: 2px solid var(--blue-500);
        }

        .boring-btn-secondary:hover {
          background: var(--blue-050);
        }

        .boring-btn-ghost {
          background: transparent;
          color: var(--blue-500);
          border: none;
        }

        .boring-btn-ghost:hover {
          background: var(--blue-050);
        }

        .boring-input-demo {
          padding: 10px 14px;
          border: 1px solid var(--grey-300);
          border-radius: 8px;
          font-size: 14px;
          width: 200px;
          transition: all 0.2s;
        }

        .boring-input-demo:focus {
          outline: none;
          border-color: var(--blue-500);
          box-shadow: 0 0 0 3px rgba(0, 120, 230, 0.1);
        }

        .boring-card-demo {
          background: white;
          border: 1px solid var(--grey-200);
          border-radius: 12px;
          padding: 20px;
          width: 280px;
          box-shadow: var(--shadow-sm);
        }

        .boring-card-demo h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--grey-800);
        }

        .boring-card-demo p {
          font-size: 14px;
          color: var(--grey-500);
          margin-bottom: 16px;
        }

        .boring-footer {
          background: var(--grey-900);
          color: white;
          padding: var(--space-8) var(--space-6);
          text-align: center;
        }

        .boring-footer p {
          color: var(--grey-400);
          font-size: 14px;
        }

        .boring-footer a {
          color: var(--cyan-500);
          text-decoration: none;
        }

        .boring-back-link {
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

        .boring-back-link:hover {
          background: var(--blue-700);
          transform: translateY(-2px);
        }

        /* AI Prompt Section Styles */
        .boring-prompt-container {
          background: var(--grey-800);
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin: var(--space-5) 0;
        }

        .boring-prompt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-4) var(--space-5);
          background: var(--grey-900);
          border-bottom: 1px solid var(--grey-700);
        }

        .boring-prompt-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--grey-300);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .boring-prompt-title span {
          color: var(--cyan-500);
        }

        .boring-copy-btn {
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

        .boring-copy-btn:hover {
          background: var(--blue-500);
          transform: translateY(-1px);
        }

        .boring-copy-btn.copied {
          background: var(--green-500);
        }

        .boring-prompt-content {
          padding: var(--space-5);
          max-height: 400px;
          overflow-y: auto;
        }

        .boring-prompt-content pre {
          font-family: "Fira Code", monospace;
          font-size: 13px;
          color: var(--grey-200);
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
          margin: 0;
        }

        .boring-prompt-content::-webkit-scrollbar {
          width: 8px;
        }

        .boring-prompt-content::-webkit-scrollbar-track {
          background: var(--grey-800);
        }

        .boring-prompt-content::-webkit-scrollbar-thumb {
          background: var(--grey-600);
          border-radius: 4px;
        }

        .boring-usage-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
          margin: var(--space-5) 0;
        }

        .boring-usage-step {
          background: white;
          padding: var(--space-5);
          border-radius: var(--radius-lg);
          border: 1px solid var(--grey-200);
          text-align: center;
        }

        .boring-usage-step-number {
          width: 36px;
          height: 36px;
          background: linear-gradient(
            135deg,
            var(--blue-100),
            var(--cyan-500)
          );
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          margin: 0 auto var(--space-3);
        }

        .boring-usage-step h4 {
          font-size: 15px;
          font-weight: 600;
          color: var(--grey-800);
          margin-bottom: var(--space-2);
        }

        .boring-usage-step p {
          font-size: 13px;
          color: var(--grey-600);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .boring-toc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .boring-hero h1 {
            font-size: 32px;
          }
          .boring-toc-grid {
            grid-template-columns: 1fr;
          }
          .boring-compare {
            grid-template-columns: 1fr;
          }
          .boring-nav-links {
            display: none;
          }
          .boring-usage-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <nav className="boring-nav">
        <div className="boring-nav-container">
          <div className="boring-logo">
            <div className="boring-logo-icon">🔲</div>
            Boring UI Guide
          </div>
          <ul className="boring-nav-links">
            <li>
              <a href="#philosophy">철학</a>
            </li>
            <li>
              <a href="#components">컴포넌트</a>
            </li>
            <li>
              <a href="#hierarchy">계층</a>
            </li>
            <li>
              <a href="#prompt">AI 프롬프트</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="boring-hero">
        <div className="boring-hero-content">
          <span className="boring-hero-badge">UI Component Course</span>
          <h1>
            <span>"Boring"</span> UI Course
            <br />
            핵심 원칙 정리
          </h1>
          <p>
            트렌디한 것보다 명확하고 사용하기 쉬운 UI가 좋은 UI입니다.
            <br />
            Michal Malewicz의 컴포넌트 디자인 철학을 배워보세요.
          </p>
          <div className="boring-hero-author">
            <div className="boring-hero-author-avatar">MM</div>
            <span>by Michal Malewicz · HYPE4 Academy</span>
          </div>
        </div>
      </section>

      <section className="boring-toc">
        <div className="boring-container">
          <h2>목차</h2>
          <div className="boring-toc-grid">
            <a href="#philosophy" className="boring-toc-item">
              <div className="boring-toc-number">01</div>
              <div className="boring-toc-title">"지루함"의 철학</div>
            </a>
            <a href="#components" className="boring-toc-item">
              <div className="boring-toc-number">02</div>
              <div className="boring-toc-title">컴포넌트 시스템</div>
            </a>
            <a href="#buttons" className="boring-toc-item">
              <div className="boring-toc-number">03</div>
              <div className="boring-toc-title">버튼 디자인</div>
            </a>
            <a href="#inputs" className="boring-toc-item">
              <div className="boring-toc-number">04</div>
              <div className="boring-toc-title">입력 필드</div>
            </a>
            <a href="#cards" className="boring-toc-item">
              <div className="boring-toc-number">05</div>
              <div className="boring-toc-title">카드 & 컨테이너</div>
            </a>
            <a href="#hierarchy" className="boring-toc-item">
              <div className="boring-toc-number">06</div>
              <div className="boring-toc-title">시각적 계층</div>
            </a>
            <a href="#states" className="boring-toc-item">
              <div className="boring-toc-number">07</div>
              <div className="boring-toc-title">상태 & 피드백</div>
            </a>
            <a href="#prompt" className="boring-toc-item">
              <div className="boring-toc-number">08</div>
              <div className="boring-toc-title">AI 디자인 프롬프트</div>
            </a>
          </div>
        </div>
      </section>

      <section className="boring-content">
        {/* Section 1: Philosophy */}
        <div id="philosophy" className="boring-section">
          <div className="boring-section-header">
            <div className="boring-section-number">Chapter 01</div>
            <h2>"지루함"의 철학</h2>
            <p className="boring-section-intro">
              왜 "Boring" UI인가요? 최고의 UI는 사용자가 UI의 존재를 인식하지
              못하는 UI입니다. 사용자가 목표를 달성하는 데 방해가 되지 않는,
              <strong>투명하고 명확한 인터페이스</strong>가 좋은 인터페이스입니다.
            </p>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">🎯</span> 명확함이 창의성보다 중요하다
            </h3>
            <p>
              트렌디한 디자인, 독특한 인터랙션, 새로운 패턴... 이런 것들은
              디자이너에게는 재미있지만, 사용자에게는 혼란을 줄 수 있습니다.
              사용자는 여러분의 앱을 배우고 싶어하지 않습니다. 그냥 목표를
              달성하고 싶을 뿐입니다.
            </p>

            <div className="boring-compare">
              <div className="boring-compare-item boring-compare-bad">
                <div className="boring-compare-label">피하세요</div>
                <div
                  style={{
                    background: "linear-gradient(45deg, #ff6b6b, #feca57)",
                    color: "white",
                    padding: "12px",
                    borderRadius: "20px 4px 20px 4px",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  여기를 눌러주세요~!
                </div>
              </div>
              <div className="boring-compare-item boring-compare-good">
                <div className="boring-compare-label">권장</div>
                <div
                  style={{
                    background: "#0078e6",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  저장하기
                </div>
              </div>
            </div>

            <div className="boring-tip">
              <div className="boring-tip-label">핵심 원칙</div>
              <p>
                "지루한" 디자인은 나쁜 디자인이 아닙니다. 사용자가 생각 없이
                사용할 수 있는, 익숙하고 예측 가능한 디자인입니다.
              </p>
            </div>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">🧠</span> 인지 부하를 줄여라
            </h3>
            <p>
              모든 새로운 패턴, 독특한 아이콘, 창의적인 레이아웃은 사용자에게
              "배워야 할 것"을 추가합니다. 표준 패턴을 따르면 사용자는 이미
              알고 있는 지식을 활용할 수 있습니다.
            </p>

            <ul className="boring-list">
              <li>햄버거 메뉴는 왼쪽 상단 또는 오른쪽 상단에</li>
              <li>검색 아이콘은 돋보기 모양으로</li>
              <li>Primary 버튼은 눈에 띄게, Secondary는 덜 눈에 띄게</li>
              <li>에러는 빨간색, 성공은 초록색</li>
              <li>입력 필드는 사각형에 테두리로</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Component System */}
        <div id="components" className="boring-section">
          <div className="boring-section-header">
            <div className="boring-section-number">Chapter 02</div>
            <h2>컴포넌트 시스템</h2>
            <p className="boring-section-intro">
              일관된 컴포넌트 시스템은 디자인의 품질을 결정합니다. 같은
              프로젝트 내에서 같은 컴포넌트는 <strong>반드시 같은 모양</strong>
              이어야 합니다.
            </p>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">🧱</span> 디자인 토큰 정의하기
            </h3>
            <p>
              컴포넌트를 만들기 전에 먼저 디자인 토큰을 정의하세요. 색상, 간격,
              border-radius, 그림자 등을 시스템으로 관리하면 일관성을 유지할 수
              있습니다.
            </p>

            <div className="boring-code">
              <span className="comment">/* 디자인 토큰 예시 */</span>
              <br />
              <span className="keyword">--color-primary</span>:{" "}
              <span className="string">#0078e6</span>;<br />
              <span className="keyword">--color-grey-500</span>:{" "}
              <span className="string">#64748b</span>;<br />
              <br />
              <span className="keyword">--spacing-sm</span>:{" "}
              <span className="number">8px</span>;<br />
              <span className="keyword">--spacing-md</span>:{" "}
              <span className="number">16px</span>;<br />
              <span className="keyword">--spacing-lg</span>:{" "}
              <span className="number">24px</span>;<br />
              <br />
              <span className="keyword">--radius-sm</span>:{" "}
              <span className="number">6px</span>;<br />
              <span className="keyword">--radius-md</span>:{" "}
              <span className="number">8px</span>;<br />
              <span className="keyword">--radius-lg</span>:{" "}
              <span className="number">12px</span>;
            </div>
          </div>
        </div>

        {/* Section 3: Buttons */}
        <div id="buttons" className="boring-section">
          <div className="boring-section-header">
            <div className="boring-section-number">Chapter 03</div>
            <h2>버튼 디자인</h2>
            <p className="boring-section-intro">
              버튼은 가장 중요한 인터랙션 요소입니다.
              Primary/Secondary/Ghost 세 가지 변형으로 대부분의 상황을
              커버할 수 있습니다.
            </p>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">🔘</span> 버튼 계층 구조
            </h3>
            <p>
              한 화면에서 Primary 버튼은 하나만! 가장 중요한 액션에만 Primary
              스타일을 사용하세요.
            </p>

            <div className="boring-component-demo">
              <button className="boring-btn-demo boring-btn-primary">
                Primary
              </button>
              <button className="boring-btn-demo boring-btn-secondary">
                Secondary
              </button>
              <button className="boring-btn-demo boring-btn-ghost">Ghost</button>
            </div>

            <ul className="boring-list">
              <li>Primary: 가장 중요한 액션 (저장, 제출, 구매)</li>
              <li>Secondary: 대안적 액션 (취소, 뒤로가기)</li>
              <li>Ghost: 부가적 액션 (더보기, 상세)</li>
            </ul>

            <div className="boring-tip">
              <div className="boring-tip-label">Pro Tip</div>
              <p>
                버튼 높이는 32px(sm), 40px(md), 48px(lg)로 통일하세요. 터치
                영역은 최소 44px를 확보해야 합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Inputs */}
        <div id="inputs" className="boring-section">
          <div className="boring-section-header">
            <div className="boring-section-number">Chapter 04</div>
            <h2>입력 필드</h2>
            <p className="boring-section-intro">
              입력 필드는 사용자로부터 정보를 받는 핵심 컴포넌트입니다. 명확한
              테두리와 상태 표시가 핵심입니다.
            </p>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">📝</span> 입력 필드 구조
            </h3>
            <p>
              레이블은 필드 위에, placeholder는 연한 색으로, 포커스시 Primary
              색상 테두리로 피드백을 제공하세요.
            </p>

            <div className="boring-component-demo">
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--grey-700)",
                  }}
                >
                  이메일
                </label>
                <input
                  className="boring-input-demo"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <ul className="boring-list">
              <li>기본: 연한 테두리 (grey-300)</li>
              <li>포커스: Primary 색상 테두리 + 연한 그림자</li>
              <li>에러: 빨간 테두리 + 에러 메시지 아래에</li>
              <li>비활성: 회색 배경, 흐린 텍스트</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Cards */}
        <div id="cards" className="boring-section">
          <div className="boring-section-header">
            <div className="boring-section-number">Chapter 05</div>
            <h2>카드 & 컨테이너</h2>
            <p className="boring-section-intro">
              카드는 관련 콘텐츠를 그룹화하는 컨테이너입니다. 일관된 패딩,
              그림자, border-radius가 중요합니다.
            </p>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">🗂️</span> 카드 컴포넌트
            </h3>
            <p>
              카드 내부는 제목 → 설명 → 액션 순서로 구성하세요. 패딩은
              16-24px가 적당합니다.
            </p>

            <div className="boring-component-demo">
              <div className="boring-card-demo">
                <h4>프로젝트 제목</h4>
                <p>프로젝트에 대한 간단한 설명이 여기에 들어갑니다.</p>
                <button className="boring-btn-demo boring-btn-primary">
                  자세히 보기
                </button>
              </div>
            </div>

            <div className="boring-tip">
              <div className="boring-tip-label">패턴</div>
              <p>
                카드는 연한 그림자 또는 테두리 중 하나만 사용하세요. 둘 다
                사용하면 과하게 보입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Hierarchy */}
        <div id="hierarchy" className="boring-section">
          <div className="boring-section-header">
            <div className="boring-section-number">Chapter 06</div>
            <h2>시각적 계층</h2>
            <p className="boring-section-intro">
              좋은 UI는 사용자의 시선을 자연스럽게 유도합니다.
              <strong>크기, 색상, 대비</strong>로 중요도를 표현하세요.
            </p>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">👁️</span> 계층 만들기
            </h3>
            <p>
              모든 요소가 같은 시각적 무게를 가지면 아무것도 중요해 보이지
              않습니다. 명확한 계층 구조를 만들어 사용자가 어디를 봐야 하는지
              알려주세요.
            </p>

            <div className="boring-example">
              <div className="boring-example-label">계층 구조 예시</div>
              <div
                style={{
                  background: "white",
                  padding: "24px",
                  borderRadius: "12px",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--grey-900)",
                    marginBottom: "8px",
                  }}
                >
                  프로젝트 관리 대시보드
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--grey-500)",
                    marginBottom: "4px",
                  }}
                >
                  2024년 1월 20일 · 마지막 수정 3시간 전
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--grey-600)",
                    lineHeight: 1.6,
                  }}
                >
                  팀원들과 함께 프로젝트 진행 상황을 추적하고, 일정을 관리하세요.
                </p>
              </div>
            </div>

            <ul className="boring-list">
              <li>Primary: 큰 크기 + 굵은 굵기 + 진한 색상</li>
              <li>Secondary: 중간 크기 + 중간 색상</li>
              <li>Tertiary: 작은 크기 + 연한 색상</li>
            </ul>
          </div>
        </div>

        {/* Section 7: States */}
        <div id="states" className="boring-section">
          <div className="boring-section-header">
            <div className="boring-section-number">Chapter 07</div>
            <h2>상태 & 피드백</h2>
            <p className="boring-section-intro">
              사용자는 자신의 행동에 대한 피드백을 기대합니다. 모든 인터랙티브
              요소에 <strong>명확한 상태 변화</strong>를 제공하세요.
            </p>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">🔄</span> 인터랙션 상태
            </h3>
            <p>
              버튼, 링크, 입력 필드 등 모든 클릭/터치 가능한 요소는 최소 4가지
              상태를 가져야 합니다.
            </p>

            <ul className="boring-list">
              <li>Default: 기본 상태</li>
              <li>Hover: 마우스 오버시 (배경 밝아지거나 어두워짐)</li>
              <li>Active/Pressed: 클릭 중 (살짝 눌리는 느낌)</li>
              <li>Disabled: 비활성 (흐리게, 클릭 불가)</li>
              <li>Focus: 키보드 포커스 (링/아웃라인 표시)</li>
            </ul>

            <div className="boring-tip">
              <div className="boring-tip-label">접근성</div>
              <p>
                포커스 상태는 키보드 사용자를 위해 반드시 표시되어야 합니다.
                outline: none만 하지 말고, 대체 스타일을 제공하세요.
              </p>
            </div>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">📊</span> 시스템 상태
            </h3>
            <p>로딩, 성공, 에러 등 시스템 상태도 명확히 표시해야 합니다.</p>

            <ul className="boring-list">
              <li>로딩: 스피너 또는 스켈레톤 UI</li>
              <li>성공: 초록색 + 체크 아이콘 + "완료되었습니다"</li>
              <li>에러: 빨간색 + 경고 아이콘 + 구체적인 에러 메시지</li>
              <li>빈 상태: 친근한 일러스트 + 다음 행동 유도</li>
            </ul>
          </div>
        </div>

        {/* Section 8: AI Prompt */}
        <div id="prompt" className="boring-section">
          <div className="boring-section-header">
            <div className="boring-section-number">Chapter 08</div>
            <h2>AI 디자인 프롬프트</h2>
            <p className="boring-section-intro">
              위에서 배운 Boring UI 원칙을 담은 프롬프트입니다. Claude Code나
              다른 코딩 AI에게 전달하면 컴포넌트를 체계적으로 디자인할 수
              있습니다.
            </p>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">🤖</span> 사용 방법
            </h3>
            <p>
              아래 프롬프트를 복사해서 AI에게 전달하면, Boring UI 원칙에 따라
              일관되고 사용하기 쉬운 컴포넌트를 만들어줍니다.
            </p>

            <div className="boring-usage-steps">
              <div className="boring-usage-step">
                <div className="boring-usage-step-number">1</div>
                <h4>프롬프트 복사</h4>
                <p>아래 복사 버튼을 클릭하여 프롬프트를 클립보드에 복사하세요.</p>
              </div>
              <div className="boring-usage-step">
                <div className="boring-usage-step-number">2</div>
                <h4>AI에게 전달</h4>
                <p>
                  Claude Code, Cursor, 또는 다른 코딩 AI에 프롬프트를
                  붙여넣기하세요.
                </p>
              </div>
              <div className="boring-usage-step">
                <div className="boring-usage-step-number">3</div>
                <h4>컴포넌트 요청</h4>
                <p>
                  "이 원칙으로 버튼 컴포넌트 만들어줘"처럼 요청하면 됩니다.
                </p>
              </div>
            </div>
          </div>

          <div className="boring-card">
            <h3>
              <span className="icon">📋</span> Boring UI 프롬프트
            </h3>
            <p>
              이 프롬프트에는 컴포넌트 디자인 철학, 버튼/입력/카드 가이드,
              계층 구조, 상태 피드백 등 모든 핵심 원칙이 정리되어 있습니다.
            </p>

            <div className="boring-prompt-container">
              <div className="boring-prompt-header">
                <div className="boring-prompt-title">
                  <span>●</span> boring-ui-prompt.md
                </div>
                <button
                  className={`boring-copy-btn ${copied ? "copied" : ""}`}
                  onClick={handleCopy}
                >
                  {copied ? "✓ 복사됨!" : "📋 복사하기"}
                </button>
              </div>
              <div className="boring-prompt-content">
                <pre>{aiPrompt}</pre>
              </div>
            </div>

            <div className="boring-tip">
              <div className="boring-tip-label">활용 팁</div>
              <p>
                "버튼 컴포넌트 3가지 변형으로 만들어줘", "로그인 폼을 위
                원칙대로 디자인해줘"처럼 구체적으로 요청하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="boring-footer">
        <p>
          이 가이드는{" "}
          <a
            href="https://hype4.academy/video-courses/boring-ui-course"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michal Malewicz의 Boring UI Course
          </a>
          의 핵심 내용을 요약한 것입니다.
          <br />
          전체 코스는 HYPE4 Academy에서 확인하세요.
        </p>
      </footer>

      <Link href="/" className="boring-back-link">
        ← 갤러리로
      </Link>
    </>
  );
}

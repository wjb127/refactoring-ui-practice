"use client";

import Link from "next/link";
import { useState } from "react";

export default function DesigningUIPage() {
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);
  const [copiedMain, setCopiedMain] = useState(false);

  // AI Prompts for Prompt Engineering Guide
  const prompts = [
    {
      title: "Structure Prompt (레이아웃)",
      prompt: `Create a dashboard layout using:
- 12-column grid system with 24px gaps
- Sidebar navigation (240px width)
- Main content area with max-width 1120px
- 8pt spacing system (all margins/paddings are multiples of 8)
- Hierarchy strips: group related content with 16px gaps, separate sections with 48px gaps
- No pure black (#000000) - use #1E293B for text instead`,
    },
    {
      title: "Component Prompt (버튼)",
      prompt: `Design a primary button component following these rules:
- Height: 48px (desktop), 44px minimum (mobile)
- Padding: 16px horizontal, 12px vertical
- Border-radius: 8px
- Font: Semi-bold, 15px
- Background: Primary color (#3B82F6)
- Hover: Slightly darker + soft colored shadow (0 8px 24px rgba(59, 130, 246, 0.3))
- Active: Scale down slightly (transform: scale(0.98))
- Disabled: 50% opacity, no pointer events`,
    },
    {
      title: "Audit Prompt (UI 검토)",
      prompt: `Act as a UI Auditor. Review this design for:
1. Grid consistency - Are all elements aligned to 8pt grid?
2. Color accessibility - WCAG AA contrast ratio (4.5:1 for text, 3:1 for large text)
3. No pure black check - Is #000000 used anywhere? Replace with #1E293B
4. Typography hierarchy - Clear distinction between H1, H2, Body, Caption
5. Spacing rhythm - Consistent use of 8, 16, 24, 32, 48, 64px
6. Shadow quality - Soft, colored shadows instead of harsh black
7. 60/30/10 rule - Proper distribution of neutral/secondary/accent colors`,
    },
  ];

  const mainAiPrompt = `# Designing User Interfaces 원칙에 따른 UI 디자인 요청

## 핵심 철학
"UI 디자인은 예술이 아닌 엔지니어링이다"
"Good design is as little design as possible"
Lorem Ipsum 사용 금지 - 실제 맥락에 맞는 텍스트 사용

## 필수 규칙

### 1. 8pt Grid System
- 모든 간격, 마진, 사이즈는 8의 배수 (8, 16, 24, 32, 48, 64px)
- 컨테이너 최대 너비: 1120px - 1220px (12컬럼 기준)
- Red Square Method: 빨간 정사각형으로 정렬 일관성 검증

### 2. Hierarchy Strips
- 관련 콘텐츠는 가깝게 그룹화 (16px 내부 간격)
- 다른 그룹은 넓은 여백으로 분리 (48-64px)
- Interest → Detail → Action 순서 유지

### 3. Colors (No Pure Black)
- #000000 절대 사용 금지
- 텍스트: deep grey (#1E293B 또는 #131313) 사용
- 배경: white (#FFFFFF) 또는 light grey (#F8F9FA)
- 60/30/10 규칙: 60% neutral, 30% secondary, 10% accent

### 4. Shadows
- 검은 그림자 금지
- Soft colored shadows 사용
- 예: 0 8px 24px rgba(primary-color, 0.15)

### 5. Typography
- Sans-serif 폰트 (Inter, Plus Jakarta Sans)
- H1: Bold, 32-48px
- Body: Regular, 최소 16px
- Line-height: 본문 1.5x

### 6. Components
- 버튼 높이: 최소 44px(모바일) / 48px(데스크톱)
- 입력 필드: 레이블은 반드시 필드 위 왼쪽 정렬
- 카드: white 배경, soft shadow, 명확한 내부 패딩

## 요청사항
위 규칙을 엄격히 따라 UI를 설계해주세요.
코드에 규칙 출처를 주석으로 표시해주세요.`;

  const handleCopyPrompt = async (index: number) => {
    try {
      await navigator.clipboard.writeText(prompts[index].prompt);
      setCopiedPrompt(index);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleCopyMain = async () => {
    try {
      await navigator.clipboard.writeText(mainAiPrompt);
      setCopiedMain(true);
      setTimeout(() => setCopiedMain(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <style jsx global>{`
        /* [Book Reference: Typography - Chapter 12] */
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap");

        :root {
          /* [Book Reference: Colors - Chapter 10] */
          /* NO PURE BLACK - Use deep greys instead */
          --text-primary: #1e293b; /* NOT #000000 */
          --text-secondary: #475569;
          --text-tertiary: #64748b;
          --text-muted: #94a3b8;

          /* Neutral Scale */
          --neutral-50: #f8fafc;
          --neutral-100: #f1f5f9;
          --neutral-200: #e2e8f0;
          --neutral-300: #cbd5e1;
          --neutral-400: #94a3b8;
          --neutral-500: #64748b;
          --neutral-600: #475569;
          --neutral-700: #334155;
          --neutral-800: #1e293b;
          --neutral-900: #0f172a;

          /* Primary (Blue) */
          --primary-50: #eff6ff;
          --primary-100: #dbeafe;
          --primary-200: #bfdbfe;
          --primary-300: #93c5fd;
          --primary-400: #60a5fa;
          --primary-500: #3b82f6;
          --primary-600: #2563eb;
          --primary-700: #1d4ed8;
          --primary-800: #1e40af;
          --primary-900: #1e3a8a;

          /* Accent (Cyan) */
          --accent-500: #06b6d4;
          --accent-600: #0891b2;

          /* Semantic */
          --success: #10b981;
          --warning: #f59e0b;
          --error: #ef4444;

          /* [Book Reference: Spacing - 8pt Grid System] */
          --space-1: 8px;
          --space-2: 16px;
          --space-3: 24px;
          --space-4: 32px;
          --space-5: 48px;
          --space-6: 64px;

          /* [Book Reference: Shadows - Soft Colored Shadows] */
          --shadow-soft: 0 4px 16px rgba(30, 41, 59, 0.08);
          --shadow-medium: 0 8px 24px rgba(30, 41, 59, 0.12);
          --shadow-colored: 0 8px 24px rgba(59, 130, 246, 0.2);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          /* [Book Reference: No Pure Black] */
          background: var(--neutral-50);
          color: var(--text-primary);
          line-height: 1.6;
        }

        /* [Book Reference: Layout - Max Width 1120-1220px] */
        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 var(--space-3);
        }

        /* Navigation */
        .nav {
          background: white;
          border-bottom: 1px solid var(--neutral-200);
          padding: var(--space-2) 0;
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
          color: var(--text-primary);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: var(--space-3);
          align-items: center;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          padding: var(--space-1) var(--space-2);
          border-radius: 8px;
          transition: all 0.2s;
        }

        .nav-link:hover {
          color: var(--primary-600);
          background: var(--primary-50);
        }

        /* Hero Section */
        .hero {
          padding: var(--space-6) 0;
          text-align: center;
          background: white;
          border-bottom: 1px solid var(--neutral-200);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--primary-50);
          color: var(--primary-700);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: var(--space-3);
        }

        .hero h1 {
          /* [Book Reference: Typography Hierarchy - H1 Bold, Large] */
          font-size: 48px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto var(--space-4);
          line-height: 1.6;
        }

        /* [Book Reference: Buttons - Min 48px height, 8px radius] */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 48px;
          padding: 0 24px;
          background: var(--primary-500);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-primary:hover {
          background: var(--primary-600);
          box-shadow: var(--shadow-colored);
          transform: translateY(-2px);
        }

        .btn-primary:active {
          transform: scale(0.98);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 48px;
          padding: 0 24px;
          background: transparent;
          color: var(--primary-600);
          border: 1px solid var(--primary-300);
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-secondary:hover {
          background: var(--primary-50);
          border-color: var(--primary-400);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 48px;
          padding: 0 24px;
          background: transparent;
          color: var(--text-secondary);
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-ghost:hover {
          background: var(--neutral-100);
          color: var(--text-primary);
        }

        /* Red Square Method Demo */
        .red-square-demo {
          max-width: 500px;
          margin: var(--space-5) auto 0;
          padding: var(--space-4);
          background: var(--neutral-100);
          border-radius: 16px;
          position: relative;
        }

        .red-square-grid {
          display: flex;
          gap: 24px;
          align-items: center;
          padding: 24px;
          background: white;
          border-radius: 12px;
          box-shadow: var(--shadow-soft);
        }

        .red-square {
          width: 24px;
          height: 24px;
          background: #ef4444;
          opacity: 0.7;
          border-radius: 4px;
          position: absolute;
        }

        .rs-1 {
          top: 56px;
          left: 56px;
        }
        .rs-2 {
          top: 56px;
          left: 104px;
        }
        .rs-3 {
          top: 56px;
          right: 56px;
        }

        .red-square-label {
          font-size: 12px;
          color: var(--text-tertiary);
          text-align: center;
          margin-top: 16px;
        }

        /* Main Content */
        .main {
          padding: var(--space-6) 0;
        }

        /* Section */
        .section {
          margin-bottom: var(--space-6);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-5);
        }

        .section-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary-600);
          margin-bottom: 8px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .section-subtitle {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Principles Grid */
        /* [Book Reference: Layout - Hierarchy Strips] */
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
        }

        .principle-card {
          background: white;
          border-radius: 16px;
          padding: var(--space-4);
          box-shadow: var(--shadow-soft);
          transition: all 0.3s;
        }

        .principle-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
        }

        .principle-icon {
          width: 48px;
          height: 48px;
          background: var(--primary-50);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: var(--space-2);
        }

        .principle-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .principle-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Design System Showcase */
        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-3);
        }

        .showcase-card {
          background: white;
          border-radius: 16px;
          padding: var(--space-4);
          box-shadow: var(--shadow-soft);
        }

        .showcase-card h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-2);
        }

        /* Typography Scale */
        .type-scale {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .type-item {
          display: flex;
          align-items: baseline;
          gap: 16px;
        }

        .type-label {
          font-size: 12px;
          color: var(--text-muted);
          width: 80px;
          flex-shrink: 0;
        }

        .type-h1 {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .type-h2 {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-primary);
        }
        .type-body {
          font-size: 16px;
          color: var(--text-secondary);
        }
        .type-caption {
          font-size: 13px;
          color: var(--text-tertiary);
        }

        /* Color Palette */
        .color-row {
          margin-bottom: 16px;
        }

        .color-row-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-tertiary);
          margin-bottom: 8px;
        }

        .color-swatches {
          display: flex;
          gap: 4px;
        }

        .color-swatch {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 600;
        }

        /* Shadow Comparison */
        .shadow-compare {
          display: flex;
          gap: 24px;
        }

        .shadow-item {
          flex: 1;
          padding: 24px;
          border-radius: 12px;
          background: white;
          text-align: center;
        }

        .shadow-soft {
          box-shadow: 0 8px 24px rgba(30, 41, 59, 0.1);
        }

        .shadow-hard {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .shadow-label {
          font-size: 13px;
          font-weight: 500;
          margin-top: 12px;
        }

        .shadow-good {
          color: var(--success);
        }
        .shadow-bad {
          color: var(--error);
        }

        /* Button Showcase */
        .button-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .btn-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }

        /* Input Showcase */
        /* [Book Reference: Forms - Labels TOP-LEFT aligned] */
        .input-demo {
          max-width: 300px;
        }

        .input-label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .input-required {
          color: var(--error);
        }

        .input-field {
          width: 100%;
          height: 44px;
          padding: 0 16px;
          border: 1px solid var(--neutral-300);
          border-radius: 8px;
          font-size: 15px;
          color: var(--text-primary);
          background: white;
          transition: all 0.2s;
        }

        .input-field:focus {
          outline: none;
          border-color: var(--primary-500);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        .input-field::placeholder {
          color: var(--text-muted);
        }

        /* Product Card Example */
        /* [Book Reference: Cards - Safe Area Padding] */
        .product-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          max-width: 320px;
          margin: 0 auto;
          transition: all 0.3s;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium);
        }

        .product-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(
            135deg,
            var(--primary-100) 0%,
            var(--primary-200) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
        }

        /* [Book Reference: Spacing - 8pt Grid, gap-4 internal, p-6 container] */
        .product-content {
          padding: 24px; /* p-6 = 24px */
          display: flex;
          flex-direction: column;
          gap: 16px; /* gap-4 = 16px */
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .product-price {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary-600);
        }

        .product-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .product-btn {
          width: 100%;
        }

        /* 8pt Grid Demo */
        .grid-demo {
          display: flex;
          gap: 8px;
          align-items: flex-end;
          padding: 24px;
          background: var(--neutral-100);
          border-radius: 12px;
        }

        .grid-bar {
          background: var(--primary-500);
          border-radius: 4px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 4px;
          font-size: 10px;
          color: white;
          font-weight: 600;
          width: 40px;
        }

        /* 60-30-10 Demo */
        .color-ratio {
          display: flex;
          border-radius: 12px;
          overflow: hidden;
          height: 60px;
        }

        .ratio-60 {
          flex: 6;
          background: var(--neutral-100);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .ratio-30 {
          flex: 3;
          background: var(--neutral-800);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          color: white;
        }

        .ratio-10 {
          flex: 1;
          background: var(--primary-500);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: white;
        }

        /* Hierarchy Strips Demo */
        .hierarchy-demo {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hierarchy-strip {
          padding: 16px;
          background: white;
          border-radius: 8px;
          border-left: 4px solid;
        }

        .strip-interest {
          border-color: var(--primary-500);
        }
        .strip-detail {
          border-color: var(--accent-500);
        }
        .strip-action {
          border-color: var(--success);
        }

        .strip-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .strip-content {
          font-size: 14px;
          color: var(--text-secondary);
        }

        /* Prompt Cards */
        .prompt-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: var(--space-3);
        }

        .prompt-card {
          background: var(--neutral-900);
          border-radius: 16px;
          overflow: hidden;
        }

        .prompt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: var(--neutral-800);
        }

        .prompt-title {
          font-size: 14px;
          font-weight: 600;
          color: white;
        }

        .prompt-copy-btn {
          padding: 8px 16px;
          background: var(--primary-500);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .prompt-copy-btn:hover {
          background: var(--primary-600);
        }

        .prompt-copy-btn.copied {
          background: var(--success);
        }

        .prompt-code {
          padding: 24px;
          font-family: "Fira Code", monospace;
          font-size: 13px;
          color: var(--neutral-300);
          line-height: 1.6;
          white-space: pre-wrap;
          max-height: 200px;
          overflow-y: auto;
        }

        /* Video Grid */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .video-item {
          background: white;
          border-radius: 12px;
          padding: 20px;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: var(--shadow-soft);
        }

        .video-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }

        .video-icon {
          width: 40px;
          height: 40px;
          background: var(--neutral-100);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          font-size: 18px;
        }

        .video-title {
          font-weight: 600;
          font-size: 14px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .video-desc {
          font-size: 12px;
          color: var(--text-tertiary);
        }

        /* Main Prompt Copy Section */
        .main-prompt-section {
          background: var(--neutral-900);
          border-radius: 20px;
          padding: var(--space-4);
          margin-top: var(--space-5);
        }

        .main-prompt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .main-prompt-title {
          font-size: 20px;
          font-weight: 700;
          color: white;
        }

        .main-prompt-subtitle {
          font-size: 14px;
          color: var(--neutral-400);
          margin-top: 4px;
        }

        .main-prompt-preview {
          background: var(--neutral-800);
          border-radius: 12px;
          padding: 24px;
          max-height: 400px;
          overflow-y: auto;
        }

        .main-prompt-preview pre {
          font-family: "Fira Code", monospace;
          font-size: 12px;
          color: var(--neutral-300);
          white-space: pre-wrap;
          line-height: 1.6;
        }

        /* Footer */
        .footer {
          background: white;
          border-top: 1px solid var(--neutral-200);
          padding: var(--space-5) 0;
          text-align: center;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: var(--space-4);
          margin-bottom: var(--space-2);
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: var(--primary-600);
        }

        .footer-copy {
          color: var(--text-tertiary);
          font-size: 13px;
        }

        /* Full width card */
        .full-width-card {
          grid-column: 1 / -1;
        }

        /* No Black Badge */
        .no-black-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: #fef2f2;
          color: #991b1b;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .no-black-cross {
          text-decoration: line-through;
          opacity: 0.6;
        }

        /* Stats Row */
        .stats-row {
          display: flex;
          justify-content: center;
          gap: var(--space-5);
          margin-top: var(--space-4);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 32px;
          font-weight: 800;
          color: var(--primary-600);
        }

        .stat-label {
          font-size: 13px;
          color: var(--text-tertiary);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 32px;
          }

          .principles-grid,
          .showcase-grid {
            grid-template-columns: 1fr;
          }

          .video-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .nav-links {
            display: none;
          }

          .stats-row {
            gap: var(--space-3);
          }

          .stat-number {
            font-size: 24px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-content">
          <Link href="/" className="nav-logo">
            Designing UI
          </Link>
          <div className="nav-links">
            <a href="#principles" className="nav-link">
              Principles
            </a>
            <a href="#design-system" className="nav-link">
              Design System
            </a>
            <a href="#examples" className="nav-link">
              Examples
            </a>
            <a href="#prompts" className="nav-link">
              Prompts
            </a>
            <Link href="/learn" className="nav-link">
              Refactoring UI
            </Link>
            <Link href="/boring-ui" className="nav-link">
              Boring UI
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">
            <span>769 Pages</span>
            <span>•</span>
            <span>30 Chapters</span>
            <span>•</span>
            <span>2024 Edition</span>
          </span>
          <h1>Design with Precision,<br />Not Just Instinct.</h1>
          <p className="hero-subtitle">
            A guide based on the 8pt grid, hierarchy strips, and
            engineering-driven design principles. By Michal & Diana Malewicz.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a href="#design-system" className="btn-primary">
              Explore the System
            </a>
            <a
              href="https://www.designingui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get the Book
            </a>
          </div>

          {/* Red Square Method Demo */}
          {/* [Book Reference: Chapter - Red Square Method] */}
          <div className="red-square-demo">
            <div className="red-square rs-1"></div>
            <div className="red-square rs-2"></div>
            <div className="red-square rs-3"></div>
            <div className="red-square-grid">
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "var(--primary-500)",
                  borderRadius: 8,
                }}
              />
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  Consistent Spacing
                </div>
                <div style={{ fontSize: 14, color: "var(--text-tertiary)" }}>
                  24px gaps verified
                </div>
              </div>
              <div
                style={{ marginLeft: "auto", color: "var(--text-muted)" }}
              >
                →
              </div>
            </div>
            <div className="red-square-label">
              Red Square Method: Use squares to verify alignment consistency
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">8pt</div>
              <div className="stat-label">Grid System</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">60/30/10</div>
              <div className="stat-label">Color Rule</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">Pure Black</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Core Principles Section */}
          <section id="principles" className="section">
            <div className="section-header">
              <span className="section-label">The "Why"</span>
              <h2 className="section-title">Core Principles</h2>
              <p className="section-subtitle">
                Everything you design should follow these fundamental rules
              </p>
            </div>

            <div className="principles-grid">
              {/* [Book Reference: 8pt Grid System] */}
              <div className="principle-card">
                <div className="principle-icon">📐</div>
                <h3 className="principle-title">The 8pt Grid</h3>
                <p className="principle-desc">
                  Everything is a multiple of 8. All spacing, margins, and
                  sizing use 8, 16, 24, 32, 48, 64px. Creates consistent rhythm.
                </p>
                <div className="grid-demo" style={{ marginTop: 16 }}>
                  <div className="grid-bar" style={{ height: 8 }}>
                    8
                  </div>
                  <div className="grid-bar" style={{ height: 16 }}>
                    16
                  </div>
                  <div className="grid-bar" style={{ height: 24 }}>
                    24
                  </div>
                  <div className="grid-bar" style={{ height: 32 }}>
                    32
                  </div>
                  <div className="grid-bar" style={{ height: 48 }}>
                    48
                  </div>
                </div>
              </div>

              {/* [Book Reference: Hierarchy Strips] */}
              <div className="principle-card">
                <div className="principle-icon">📊</div>
                <h3 className="principle-title">Hierarchy Strips</h3>
                <p className="principle-desc">
                  Organize content by logic: Interest → Detail → Action. Group
                  related content closely, separate distinct groups.
                </p>
                <div className="hierarchy-demo" style={{ marginTop: 16 }}>
                  <div className="hierarchy-strip strip-interest">
                    <div
                      className="strip-label"
                      style={{ color: "var(--primary-600)" }}
                    >
                      Interest
                    </div>
                    <div className="strip-content">Catch attention</div>
                  </div>
                  <div className="hierarchy-strip strip-detail">
                    <div
                      className="strip-label"
                      style={{ color: "var(--accent-600)" }}
                    >
                      Detail
                    </div>
                    <div className="strip-content">Provide information</div>
                  </div>
                  <div className="hierarchy-strip strip-action">
                    <div
                      className="strip-label"
                      style={{ color: "var(--success)" }}
                    >
                      Action
                    </div>
                    <div className="strip-content">Enable decision</div>
                  </div>
                </div>
              </div>

              {/* [Book Reference: No Pure Black] */}
              <div className="principle-card">
                <div className="principle-icon">🎨</div>
                <h3 className="principle-title">No Pure Black</h3>
                <p className="principle-desc">
                  Never use #000000. Use natural dark greys like #1E293B for
                  better contrast perception and softer appearance.
                </p>
                <div style={{ marginTop: 16 }}>
                  <div className="no-black-badge">
                    <span className="no-black-cross">#000000</span>
                    <span>→</span>
                    <span>#1E293B</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 16,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      padding: 12,
                      background: "#000000",
                      color: "white",
                      borderRadius: 8,
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    #000 ❌
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: 12,
                      background: "#1E293B",
                      color: "white",
                      borderRadius: 8,
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    #1E293B ✓
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design System Showcase */}
          <section id="design-system" className="section">
            <div className="section-header">
              <span className="section-label">Interactive</span>
              <h2 className="section-title">Live Design System</h2>
              <p className="section-subtitle">
                A practical implementation of the book's rules
              </p>
            </div>

            <div className="showcase-grid">
              {/* Typography Scale */}
              {/* [Book Reference: Typography - Chapter 12] */}
              <div className="showcase-card">
                <h4>Typography Scale</h4>
                <div className="type-scale">
                  <div className="type-item">
                    <span className="type-label">H1 / 32px</span>
                    <span className="type-h1">Headlines</span>
                  </div>
                  <div className="type-item">
                    <span className="type-label">H2 / 24px</span>
                    <span className="type-h2">Subheadings</span>
                  </div>
                  <div className="type-item">
                    <span className="type-label">Body / 16px</span>
                    <span className="type-body">Regular body text</span>
                  </div>
                  <div className="type-item">
                    <span className="type-label">Caption / 13px</span>
                    <span className="type-caption">Small captions</span>
                  </div>
                </div>
              </div>

              {/* Color Palette */}
              {/* [Book Reference: Colors - Chapter 10] */}
              <div className="showcase-card">
                <h4>Color Palette</h4>
                <div className="color-row">
                  <div className="color-row-label">Neutral (No #000!)</div>
                  <div className="color-swatches">
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--neutral-100)",
                        color: "var(--neutral-600)",
                      }}
                    >
                      100
                    </div>
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--neutral-300)",
                        color: "var(--neutral-700)",
                      }}
                    >
                      300
                    </div>
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--neutral-500)",
                        color: "white",
                      }}
                    >
                      500
                    </div>
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--neutral-700)",
                        color: "white",
                      }}
                    >
                      700
                    </div>
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--neutral-900)",
                        color: "white",
                      }}
                    >
                      900
                    </div>
                  </div>
                </div>
                <div className="color-row">
                  <div className="color-row-label">Primary</div>
                  <div className="color-swatches">
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--primary-100)",
                        color: "var(--primary-700)",
                      }}
                    >
                      100
                    </div>
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--primary-300)",
                        color: "var(--primary-800)",
                      }}
                    >
                      300
                    </div>
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--primary-500)",
                        color: "white",
                      }}
                    >
                      500
                    </div>
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--primary-700)",
                        color: "white",
                      }}
                    >
                      700
                    </div>
                    <div
                      className="color-swatch"
                      style={{
                        background: "var(--primary-900)",
                        color: "white",
                      }}
                    >
                      900
                    </div>
                  </div>
                </div>
                {/* [Book Reference: 60/30/10 Rule] */}
                <div className="color-row" style={{ marginTop: 16 }}>
                  <div className="color-row-label">60/30/10 Rule</div>
                  <div className="color-ratio">
                    <div className="ratio-60">60%</div>
                    <div className="ratio-30">30%</div>
                    <div className="ratio-10">10</div>
                  </div>
                </div>
              </div>

              {/* Shadow Comparison */}
              {/* [Book Reference: Shadows - Soft Colored Shadows] */}
              <div className="showcase-card">
                <h4>Shadows (Soft vs Hard)</h4>
                <div className="shadow-compare">
                  <div className="shadow-item shadow-soft">
                    <div style={{ fontSize: 24 }}>✓</div>
                    <div className="shadow-label shadow-good">
                      Soft Shadow
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-tertiary)",
                        marginTop: 4,
                      }}
                    >
                      rgba(30, 41, 59, 0.1)
                    </div>
                  </div>
                  <div className="shadow-item shadow-hard">
                    <div style={{ fontSize: 24 }}>✗</div>
                    <div className="shadow-label shadow-bad">Hard Shadow</div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-tertiary)",
                        marginTop: 4,
                      }}
                    >
                      rgba(0, 0, 0, 0.3)
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Showcase */}
              {/* [Book Reference: Buttons - Min 44/48px height] */}
              <div className="showcase-card">
                <h4>Buttons (48px Height)</h4>
                <div className="button-row">
                  <button className="btn-primary">Primary</button>
                  <button className="btn-secondary">Secondary</button>
                  <button className="btn-ghost">Ghost</button>
                </div>
                <div className="button-row">
                  <button className="btn-primary btn-disabled">Disabled</button>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-tertiary)",
                    marginTop: 8,
                  }}
                >
                  Min-height: 48px desktop / 44px mobile
                </div>
              </div>

              {/* Input Showcase */}
              {/* [Book Reference: Forms - Labels TOP-LEFT] */}
              <div className="showcase-card full-width-card">
                <h4>Input Field (Label TOP-LEFT)</h4>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
                >
                  <div className="input-demo">
                    <label className="input-label">
                      Email Address <span className="input-required">*</span>
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="input-demo">
                    <label className="input-label">Password</label>
                    <input
                      type="password"
                      className="input-field"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UI Card Example */}
          <section id="examples" className="section">
            <div className="section-header">
              <span className="section-label">Applying the Rules</span>
              <h2 className="section-title">Product Card Example</h2>
              <p className="section-subtitle">
                A component built strictly following the book's spacing rules
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              {/* [Book Reference: Cards - Safe Area Padding] */}
              <div className="product-card">
                <div className="product-image">📦</div>
                <div className="product-content">
                  <div className="product-meta">
                    <span className="product-title">Premium Headphones</span>
                    <span className="product-price">$299</span>
                  </div>
                  <p className="product-desc">
                    Wireless noise-canceling headphones with 30-hour battery
                    life and premium audio quality.
                  </p>
                  <button className="btn-primary product-btn">
                    Add to Cart
                  </button>
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 16,
                    color: "var(--text-primary)",
                  }}
                >
                  Spacing Breakdown
                </h4>
                <ul
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    lineHeight: 2,
                    listStyle: "none",
                  }}
                >
                  <li>
                    <strong>Container padding:</strong> 24px (p-6)
                  </li>
                  <li>
                    <strong>Internal gap:</strong> 16px (gap-4)
                  </li>
                  <li>
                    <strong>Image height:</strong> 200px (multiple of 8)
                  </li>
                  <li>
                    <strong>Border radius:</strong> 16px (rounded-xl)
                  </li>
                  <li>
                    <strong>Shadow:</strong> Soft, colored (not black)
                  </li>
                  <li>
                    <strong>Button:</strong> Full width, 48px height
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Video Resources */}
          <section className="section">
            <div className="section-header">
              <span className="section-label">Resources</span>
              <h2 className="section-title">Video Tutorials</h2>
              <p className="section-subtitle">
                Exclusive video materials from the book
              </p>
            </div>

            <div className="video-grid">
              <a
                href="https://youtu.be/I9CKtSm-fHw"
                target="_blank"
                rel="noopener noreferrer"
                className="video-item"
              >
                <div className="video-icon">🔴</div>
                <div className="video-title">Red Square Method</div>
                <div className="video-desc">Alignment verification technique</div>
              </a>
              <a
                href="https://youtu.be/lhwFUkEQKOM"
                target="_blank"
                rel="noopener noreferrer"
                className="video-item"
              >
                <div className="video-icon">🎬</div>
                <div className="video-title">Live Redesign #1</div>
                <div className="video-desc">Real-time design exercise</div>
              </a>
              <a
                href="https://youtu.be/qSEtP_2UUSY"
                target="_blank"
                rel="noopener noreferrer"
                className="video-item"
              >
                <div className="video-icon">🎬</div>
                <div className="video-title">Live Redesign #2</div>
                <div className="video-desc">Real-time design exercise</div>
              </a>
              <a
                href="https://youtu.be/yR2HrPJFbJw"
                target="_blank"
                rel="noopener noreferrer"
                className="video-item"
              >
                <div className="video-icon">🎬</div>
                <div className="video-title">Live Redesign #3</div>
                <div className="video-desc">Real-time design exercise</div>
              </a>
            </div>
          </section>

          {/* Prompt Engineering Guide */}
          <section id="prompts" className="section">
            <div className="section-header">
              <span className="section-label">AI Integration</span>
              <h2 className="section-title">Prompt Engineering Guide</h2>
              <p className="section-subtitle">
                Copy-paste prompts to generate UI following the book's rules
              </p>
            </div>

            <div className="prompt-grid">
              {prompts.map((p, idx) => (
                <div key={idx} className="prompt-card">
                  <div className="prompt-header">
                    <span className="prompt-title">{p.title}</span>
                    <button
                      onClick={() => handleCopyPrompt(idx)}
                      className={`prompt-copy-btn ${
                        copiedPrompt === idx ? "copied" : ""
                      }`}
                    >
                      {copiedPrompt === idx ? (
                        <>
                          <svg
                            width="14"
                            height="14"
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
                            width="14"
                            height="14"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" />
                            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" />
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="prompt-code">{p.prompt}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Main AI Prompt */}
          <div className="main-prompt-section">
            <div className="main-prompt-header">
              <div>
                <div className="main-prompt-title">Complete AI Design Prompt</div>
                <div className="main-prompt-subtitle">
                  Comprehensive prompt including all book principles
                </div>
              </div>
              <button
                onClick={handleCopyMain}
                className={`btn-primary ${copiedMain ? "copied" : ""}`}
                style={{
                  background: copiedMain ? "var(--success)" : undefined,
                }}
              >
                {copiedMain ? (
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
                    Copy Full Prompt
                  </>
                )}
              </button>
            </div>
            <div className="main-prompt-preview">
              <pre>{mainAiPrompt}</pre>
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
            Content based on "Designing User Interfaces 2024" by Michal &
            Diana Malewicz. Credits to HYPE4 Academy.
          </p>
        </div>
      </footer>
    </>
  );
}

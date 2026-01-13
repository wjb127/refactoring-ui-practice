"use client";

import Link from "next/link";

export default function ProfessionalPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap');

        :root {
          --primary-050: #E8F4FD;
          --primary-100: #BEE0F7;
          --primary-200: #8CC8F0;
          --primary-300: #5AAFE9;
          --primary-400: #339BE3;
          --primary-500: #1E88D5;
          --primary-600: #1565C0;
          --primary-700: #0D47A1;
          --primary-800: #0A3A80;
          --primary-900: #062C60;

          --navy-800: #1E3A5F;
          --navy-900: #0F2644;

          --grey-050: #F8FAFC;
          --grey-100: #F1F5F9;
          --grey-200: #E2E8F0;
          --grey-300: #CBD5E1;
          --grey-400: #94A3B8;
          --grey-500: #64748B;
          --grey-600: #475569;
          --grey-700: #334155;
          --grey-800: #1E293B;

          --success: #059669;
          --warning: #D97706;

          --space-1: 4px;
          --space-2: 8px;
          --space-3: 12px;
          --space-4: 16px;
          --space-5: 20px;
          --space-6: 24px;
          --space-7: 32px;
          --space-8: 48px;
          --space-9: 64px;

          --radius-sm: 2px;
          --radius-md: 4px;
          --radius-lg: 6px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Noto Sans KR', sans-serif;
          background: white;
          color: var(--grey-700);
          line-height: 1.6;
        }

        .pro-topbar {
          background: var(--navy-900);
          color: white;
          padding: var(--space-2) var(--space-6);
          font-size: 13px;
          display: flex;
          justify-content: space-between;
        }

        .pro-topbar a {
          color: var(--grey-300);
          text-decoration: none;
        }

        .pro-nav {
          background: white;
          border-bottom: 1px solid var(--grey-200);
          padding: var(--space-4) var(--space-6);
        }

        .pro-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pro-logo {
          font-size: 22px;
          font-weight: 700;
          color: var(--navy-800);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .pro-logo-icon {
          width: 36px;
          height: 36px;
          background: var(--navy-800);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
        }

        .pro-nav-links {
          display: flex;
          gap: var(--space-7);
          list-style: none;
        }

        .pro-nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
        }

        .pro-nav-links a:hover {
          color: var(--primary-600);
        }

        .pro-btn {
          padding: var(--space-2) var(--space-5);
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .pro-btn-primary {
          background: var(--primary-600);
          color: white;
        }

        .pro-btn-primary:hover {
          background: var(--primary-700);
        }

        .pro-btn-outline {
          background: transparent;
          color: var(--primary-600);
          border: 1px solid var(--primary-600);
        }

        .pro-hero {
          background: linear-gradient(135deg, var(--navy-800) 0%, var(--navy-900) 100%);
          color: white;
          padding: var(--space-9) var(--space-6);
        }

        .pro-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .pro-hero h1 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: var(--space-5);
          line-height: 1.2;
        }

        .pro-hero p {
          font-size: 16px;
          color: var(--grey-300);
          margin-bottom: var(--space-6);
          line-height: 1.8;
        }

        .pro-hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
          margin-top: var(--space-7);
          padding-top: var(--space-6);
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .pro-stat-value {
          font-size: 32px;
          font-weight: 700;
          color: white;
        }

        .pro-stat-label {
          font-size: 13px;
          color: var(--grey-400);
        }

        .pro-trust {
          padding: var(--space-7) var(--space-6);
          background: var(--grey-050);
          border-bottom: 1px solid var(--grey-200);
        }

        .pro-trust-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pro-trust-label {
          font-size: 13px;
          color: var(--grey-500);
          font-weight: 500;
        }

        .pro-trust-logos {
          display: flex;
          gap: var(--space-8);
          align-items: center;
        }

        .pro-trust-logo {
          font-size: 18px;
          font-weight: 700;
          color: var(--grey-400);
        }

        .pro-features {
          padding: var(--space-9) var(--space-6);
        }

        .pro-features-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pro-section-header {
          margin-bottom: var(--space-8);
        }

        .pro-section-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--primary-600);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: var(--space-2);
        }

        .pro-section-title {
          font-size: 32px;
          font-weight: 700;
          color: var(--grey-800);
        }

        .pro-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .pro-feature-card {
          background: white;
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          transition: all 0.2s;
        }

        .pro-feature-card:hover {
          border-color: var(--primary-300);
          box-shadow: 0 4px 12px rgba(30, 58, 95, 0.08);
        }

        .pro-feature-icon {
          width: 40px;
          height: 40px;
          background: var(--primary-050);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: var(--space-4);
        }

        .pro-feature-card h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--grey-800);
          margin-bottom: var(--space-2);
        }

        .pro-feature-card p {
          font-size: 14px;
          color: var(--grey-500);
        }

        .pro-cta {
          padding: var(--space-9) var(--space-6);
          background: var(--grey-050);
          text-align: center;
        }

        .pro-cta h2 {
          font-size: 28px;
          font-weight: 700;
          color: var(--grey-800);
          margin-bottom: var(--space-3);
        }

        .pro-cta p {
          font-size: 16px;
          color: var(--grey-500);
          margin-bottom: var(--space-6);
        }

        .pro-footer {
          background: var(--navy-900);
          color: white;
          padding: var(--space-8) var(--space-6);
        }

        .pro-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-8);
        }

        .pro-footer h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: var(--space-4);
        }

        .pro-footer ul {
          list-style: none;
        }

        .pro-footer li {
          margin-bottom: var(--space-2);
        }

        .pro-footer a {
          color: var(--grey-400);
          text-decoration: none;
          font-size: 14px;
        }

        .pro-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: var(--primary-600);
          color: white;
          padding: var(--space-2) var(--space-5);
          border-radius: var(--radius-md);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 4px 12px rgba(30, 58, 95, 0.2);
          z-index: 100;
        }

        .pro-back-link:hover {
          background: var(--primary-700);
        }

        @media (max-width: 1024px) {
          .pro-hero-container { grid-template-columns: 1fr; }
          .pro-features-grid { grid-template-columns: 1fr; }
          .pro-footer-container { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .pro-hero h1 { font-size: 32px; }
          .pro-nav-links { display: none; }
          .pro-topbar { display: none; }
        }
      `}</style>

      <div className="pro-topbar">
        <span>전화상담: 1588-0000 | 이메일: enterprise@securevault.kr</span>
        <a href="#">로그인</a>
      </div>

      <nav className="pro-nav">
        <div className="pro-nav-container">
          <div className="pro-logo">
            <span className="pro-logo-icon">🔐</span>
            SecureVault
          </div>
          <ul className="pro-nav-links">
            <li><a href="#">솔루션</a></li>
            <li><a href="#">가격정책</a></li>
            <li><a href="#">고객사례</a></li>
            <li><a href="#">기술지원</a></li>
            <li><a href="#">회사소개</a></li>
          </ul>
          <div style={{display: 'flex', gap: '12px'}}>
            <a href="#" className="pro-btn pro-btn-outline">문의하기</a>
            <a href="#" className="pro-btn pro-btn-primary">데모 신청</a>
          </div>
        </div>
      </nav>

      <section className="pro-hero">
        <div className="pro-hero-container">
          <div>
            <h1>엔터프라이즈급<br />보안 솔루션</h1>
            <p>
              SecureVault는 금융권, 공공기관, 대기업에서 검증된 차세대 통합 보안 플랫폼입니다.
              실시간 위협 탐지, 데이터 암호화, 접근 제어를 하나의 솔루션으로 관리하십시오.
            </p>
            <div style={{display: 'flex', gap: '12px'}}>
              <a href="#" className="pro-btn pro-btn-primary">도입 상담 신청</a>
              <a href="#" className="pro-btn pro-btn-outline" style={{background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)'}}>제품 소개서</a>
            </div>
            <div className="pro-hero-stats">
              <div>
                <div className="pro-stat-value">500+</div>
                <div className="pro-stat-label">기업 고객사</div>
              </div>
              <div>
                <div className="pro-stat-value">99.99%</div>
                <div className="pro-stat-label">서비스 가용성</div>
              </div>
              <div>
                <div className="pro-stat-value">ISO 27001</div>
                <div className="pro-stat-label">인증 보유</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section className="pro-trust">
        <div className="pro-trust-container">
          <span className="pro-trust-label">신뢰하는 기업들</span>
          <div className="pro-trust-logos">
            <span className="pro-trust-logo">삼성전자</span>
            <span className="pro-trust-logo">현대자동차</span>
            <span className="pro-trust-logo">KB국민은행</span>
            <span className="pro-trust-logo">SK텔레콤</span>
            <span className="pro-trust-logo">LG전자</span>
          </div>
        </div>
      </section>

      <section className="pro-features">
        <div className="pro-features-container">
          <div className="pro-section-header">
            <div className="pro-section-label">핵심 기능</div>
            <h2 className="pro-section-title">포괄적인 보안 솔루션</h2>
          </div>
          <div className="pro-features-grid">
            <div className="pro-feature-card">
              <div className="pro-feature-icon">🛡️</div>
              <h3>실시간 위협 탐지</h3>
              <p>AI 기반 이상 행위 탐지로 알려지지 않은 위협까지 사전 차단합니다.</p>
            </div>
            <div className="pro-feature-card">
              <div className="pro-feature-icon">🔒</div>
              <h3>데이터 암호화</h3>
              <p>AES-256 암호화로 저장 데이터와 전송 데이터를 완벽하게 보호합니다.</p>
            </div>
            <div className="pro-feature-card">
              <div className="pro-feature-icon">👤</div>
              <h3>접근 제어 관리</h3>
              <p>역할 기반 접근 제어(RBAC)로 세분화된 권한 관리가 가능합니다.</p>
            </div>
            <div className="pro-feature-card">
              <div className="pro-feature-icon">📊</div>
              <h3>컴플라이언스 리포트</h3>
              <p>ISMS, ISO 27001 등 규제 준수를 위한 자동화된 리포트를 제공합니다.</p>
            </div>
            <div className="pro-feature-card">
              <div className="pro-feature-icon">🔄</div>
              <h3>통합 대시보드</h3>
              <p>모든 보안 현황을 한눈에 파악할 수 있는 중앙 집중식 관리 콘솔입니다.</p>
            </div>
            <div className="pro-feature-card">
              <div className="pro-feature-icon">📞</div>
              <h3>24/7 기술 지원</h3>
              <p>전담 기술 지원팀이 365일 24시간 신속하게 대응합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pro-cta">
        <h2>보안 전문가와 상담하세요</h2>
        <p>귀사의 요구사항에 맞는 최적의 보안 솔루션을 제안해 드립니다.</p>
        <a href="#" className="pro-btn pro-btn-primary">무료 보안 진단 신청</a>
      </section>

      <footer className="pro-footer">
        <div className="pro-footer-container">
          <div>
            <div className="pro-logo" style={{marginBottom: '16px'}}>
              <span className="pro-logo-icon">🔐</span>
              SecureVault
            </div>
            <p style={{fontSize: '14px', color: '#94A3B8', maxWidth: '300px'}}>
              (주)시큐어볼트 | 대표이사: 홍길동<br />
              서울특별시 강남구 테헤란로 123<br />
              사업자등록번호: 123-45-67890
            </p>
          </div>
          <div>
            <h4>솔루션</h4>
            <ul>
              <li><a href="#">위협 탐지</a></li>
              <li><a href="#">데이터 보호</a></li>
              <li><a href="#">접근 관리</a></li>
              <li><a href="#">컴플라이언스</a></li>
            </ul>
          </div>
          <div>
            <h4>리소스</h4>
            <ul>
              <li><a href="#">기술 문서</a></li>
              <li><a href="#">백서</a></li>
              <li><a href="#">사례 연구</a></li>
              <li><a href="#">웨비나</a></li>
            </ul>
          </div>
          <div>
            <h4>회사</h4>
            <ul>
              <li><a href="#">회사 소개</a></li>
              <li><a href="#">채용 정보</a></li>
              <li><a href="#">뉴스룸</a></li>
              <li><a href="#">연락처</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <Link href="/" className="pro-back-link">← 갤러리로</Link>
    </>
  );
}

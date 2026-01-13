import Link from "next/link";
import styles from "./page.module.css";

const styleCards = [
  {
    id: "balanced",
    name: "Balanced & Neutral",
    description: "Cyan 팔레트, 중간 radius, 균형잡힌 톤. Refactoring UI 원칙의 기본 적용 예시.",
    features: ["Cyan palette", "Medium radius", "Balanced tone"],
    style: "balanced",
  },
  {
    id: "playful",
    name: "Playful & Friendly",
    description: "둥근 코너, 밝은 그라데이션, 친근한 언어. 소비자 대상 SaaS에 적합한 따뜻한 느낌.",
    features: ["Large radius", "Pastel colors", "Casual tone"],
    style: "playful",
  },
  {
    id: "professional",
    name: "Professional & Corporate",
    description: "작은 코너, 차분한 블루 계열, 격식 있는 언어. 기업 고객을 위한 신뢰감.",
    features: ["Small radius", "Blue palette", "Formal tone"],
    style: "professional",
  },
  {
    id: "elegant",
    name: "Elegant & Luxury",
    description: "세리프 폰트, 골드/다크 색상 조합, 넓은 여백. 프리미엄 제품에 적합한 고급스러움.",
    features: ["Serif font", "Gold accents", "Wide spacing"],
    style: "elegant",
  },
  {
    id: "bold",
    name: "Bold & Energetic",
    description: "큰 타이포그래피, 강렬한 오렌지, 기하학적 요소. 혁신적인 스타트업 느낌.",
    features: ["Large typography", "Vibrant orange", "Geometric"],
    style: "bold",
  },
  {
    id: "minimal",
    name: "Minimal & Clean",
    description: "흑백 기반, 단일 포인트 색상, 넓은 여백. 에이전시나 포트폴리오에 적합.",
    features: ["Monochrome", "Max whitespace", "Single accent"],
    style: "minimal",
  },
  {
    id: "dark",
    name: "Dark Mode Tech",
    description: "다크 배경, 네온 블루/퍼플 액센트, 코드 스니펫. 개발자 도구에 최적화.",
    features: ["Dark background", "Neon accents", "Dev-friendly"],
    style: "dark",
  },
  {
    id: "organic",
    name: "Organic & Natural",
    description: "그린 팔레트, 세리프 헤드라인, 따뜻한 톤. 에코/웰니스 브랜드에 적합.",
    features: ["Green palette", "Warm neutrals", "Serif headlines"],
    style: "organic",
  },
  {
    id: "gradient",
    name: "Gradient & Glass",
    description: "비비드 그라데이션, 글래스모피즘, 플로팅 요소. 모던 핀테크/AI 서비스에 최적화.",
    features: ["Vivid gradients", "Glassmorphism", "Modern fintech"],
    style: "gradient",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1>Refactoring UI Style Gallery</h1>
            <p className={styles.subtitle}>9가지 다른 디자인 스타일 조합</p>
          </div>
          <Link href="/learn" className={styles.learnLink}>
            📚 원칙 배우기
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h2>같은 원칙, 다른 표현</h2>
          <p>
            Refactoring UI의 원칙은 동일하지만, 폰트, 색상, border-radius, 여백,
            언어 톤 등의 조합에 따라 완전히 다른 분위기를 만들 수 있습니다.
            8가지 스타일을 통해 이를 증명합니다.
          </p>
        </div>

        <div className={styles.grid}>
          {styleCards.map((card, index) => (
            <Link
              key={card.id}
              href={`/${card.id}`}
              className={`${styles.card} ${styles[card.style]}`}
            >
              <div className={styles.cardPreview}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardTag}>Style {index + 1}</div>
                <h3>{card.name}</h3>
                <p>{card.description}</p>
                <div className={styles.cardFeatures}>
                  {card.features.map((feature) => (
                    <span key={feature} className={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

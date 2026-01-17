"use client";

import Link from "next/link";
import Image from "next/image";

export default function GradientPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          /* Palette 8 - Blue Vivid */
          --blue-050: #E6F6FF;
          --blue-100: #BAE3FF;
          --blue-200: #7CC4FA;
          --blue-300: #47A3F3;
          --blue-400: #2186EB;
          --blue-500: #0967D2;
          --blue-600: #0552B5;
          --blue-700: #03449E;
          --blue-800: #01337D;
          --blue-900: #002159;

          /* Cyan Vivid */
          --cyan-050: #E1FCF8;
          --cyan-100: #C1FEF6;
          --cyan-200: #92FDF2;
          --cyan-300: #62F4EB;
          --cyan-400: #3AE7E1;
          --cyan-500: #1CD4D4;
          --cyan-600: #0FB5BA;
          --cyan-700: #099AA4;

          /* Purple for gradients */
          --purple-400: #9F7AEA;
          --purple-500: #805AD5;
          --purple-600: #6B46C1;

          /* Cool Grey */
          --grey-050: #F5F7FA;
          --grey-100: #E4E7EB;
          --grey-200: #CBD2D9;
          --grey-300: #9AA5B1;
          --grey-400: #7B8794;
          --grey-500: #616E7C;
          --grey-600: #52606D;
          --grey-700: #3E4C59;
          --grey-800: #323F4B;
          --grey-900: #1F2933;

          /* Gradients */
          --gradient-primary: linear-gradient(135deg, var(--blue-500) 0%, var(--cyan-500) 100%);
          --gradient-accent: linear-gradient(135deg, var(--purple-500) 0%, var(--blue-400) 100%);
          --gradient-soft: linear-gradient(135deg, var(--blue-050) 0%, var(--cyan-050) 100%);
          --gradient-dark: linear-gradient(135deg, var(--grey-900) 0%, var(--blue-900) 100%);

          /* Glass Effect */
          --glass-bg: rgba(255, 255, 255, 0.7);
          --glass-border: rgba(255, 255, 255, 0.4);
          --glass-shadow: 0 8px 32px rgba(9, 103, 210, 0.15);

          /* Spacing */
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

          /* Border Radius - Modern but controlled */
          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 12px;
          --radius-xl: 16px;
          --radius-full: 100px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: var(--gradient-soft);
          color: var(--grey-800);
          line-height: 1.6;
          min-height: 100vh;
        }

        .gradient-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--grey-100);
          padding: var(--space-3) var(--space-6);
          z-index: 1000;
        }

        .gradient-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .gradient-nav-container {
          display: flex;
          align-items: center;
          gap: var(--space-6);
        }

        .gradient-logo {
          font-size: 20px;
          font-weight: 800;
          color: var(--blue-600);
        }

        .gradient-nav-links {
          display: flex;
          gap: var(--space-5);
          list-style: none;
        }

        .gradient-nav-links a {
          color: var(--grey-600);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .gradient-nav-links a:hover {
          color: var(--blue-600);
        }

        .gradient-btn {
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

        .gradient-btn-primary {
          background: var(--blue-500);
          color: white;
        }

        .gradient-btn-primary:hover {
          background: var(--blue-600);
          transform: translateY(-1px);
        }

        .gradient-btn-large {
          padding: var(--space-4) var(--space-7);
          font-size: 16px;
        }

        .gradient-btn-secondary {
          background: white;
          color: var(--blue-600);
          border: 2px solid var(--blue-200);
        }

        .gradient-btn-secondary:hover {
          border-color: var(--blue-400);
          background: var(--blue-050);
        }

        .gradient-hero {
          padding: var(--space-10) var(--space-6);
          padding-top: calc(var(--space-10) + 64px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .gradient-hero::before {
          content: '';
          position: absolute;
          top: -200px;
          left: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(9, 103, 210, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .gradient-hero::after {
          content: '';
          position: absolute;
          bottom: -200px;
          right: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(28, 212, 212, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .gradient-hero-content {
          position: relative;
          z-index: 1;
        }

        .gradient-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--blue-050);
          border: 1px solid var(--blue-100);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 600;
          color: var(--blue-600);
          margin-bottom: var(--space-6);
        }

        .gradient-hero h1 {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: var(--space-5);
          color: var(--grey-900);
        }

        .gradient-hero h1 span {
          color: var(--blue-500);
        }

        .gradient-hero p {
          font-size: 20px;
          color: var(--grey-500);
          max-width: 600px;
          margin: 0 auto var(--space-7);
          line-height: 1.7;
        }

        .gradient-hero-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          margin-bottom: var(--space-7);
        }

        .gradient-hero-image {
          max-width: 700px;
          margin: 0 auto;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(9, 103, 210, 0.2);
        }

        .gradient-hero-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        .gradient-hero-cards {
          display: flex;
          justify-content: center;
          gap: var(--space-5);
          perspective: 1000px;
        }

        .gradient-card-preview {
          width: 280px;
          background: white;
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .gradient-card-preview:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .gradient-card-preview:nth-child(2) {
          margin-top: var(--space-4);
        }

        .gradient-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-4);
        }

        .gradient-card-icon {
          width: 40px;
          height: 40px;
          background: var(--blue-100);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .gradient-card-badge {
          font-size: 11px;
          font-weight: 600;
          color: var(--cyan-600);
          background: var(--cyan-050);
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-sm);
        }

        .gradient-card-amount {
          font-size: 32px;
          font-weight: 800;
          color: var(--grey-900);
          margin-bottom: var(--space-1);
        }

        .gradient-card-label {
          font-size: 13px;
          color: var(--grey-500);
        }

        .gradient-card-chart {
          height: 60px;
          margin-top: var(--space-4);
          background: var(--blue-050);
          border-radius: var(--radius-sm);
          position: relative;
          overflow: hidden;
        }

        .gradient-card-chart::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--blue-400);
        }

        .gradient-features {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .gradient-section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .gradient-section-header {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .gradient-section-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--blue-500);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: var(--space-3);
        }

        .gradient-section-title {
          font-size: 44px;
          font-weight: 800;
          color: var(--grey-900);
          margin-bottom: var(--space-4);
        }

        .gradient-section-desc {
          font-size: 18px;
          color: var(--grey-500);
          max-width: 600px;
          margin: 0 auto;
        }

        .gradient-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .gradient-feature-card {
          background: var(--gradient-soft);
          padding: var(--space-6);
          border-radius: var(--radius-lg);
          transition: all 0.3s;
          border: 1px solid transparent;
        }

        .gradient-feature-card:hover {
          background: white;
          border-color: var(--blue-200);
          box-shadow: 0 12px 40px rgba(9, 103, 210, 0.1);
          transform: translateY(-4px);
        }

        .gradient-feature-icon {
          width: 48px;
          height: 48px;
          background: var(--blue-100);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: var(--space-4);
        }

        .gradient-feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--grey-900);
          margin-bottom: var(--space-2);
        }

        .gradient-feature-card p {
          font-size: 15px;
          color: var(--grey-500);
          line-height: 1.7;
        }

        .gradient-features-visual {
          margin-top: var(--space-8);
          display: flex;
          justify-content: center;
        }

        .gradient-features-image {
          max-width: 600px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(9, 103, 210, 0.15);
        }

        .gradient-features-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        /* How It Works Section */
        .gradient-how {
          padding: var(--space-9) var(--space-6);
          background: var(--gradient-soft);
        }

        .gradient-how-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-5);
          position: relative;
        }

        .gradient-how-steps::before {
          content: '';
          position: absolute;
          top: 48px;
          left: 15%;
          right: 15%;
          height: 2px;
          background: var(--blue-200);
          z-index: 0;
        }

        .gradient-step {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .gradient-step-number {
          width: 40px;
          height: 40px;
          background: var(--blue-500);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin: 0 auto var(--space-4);
        }

        .gradient-step-icon {
          width: 72px;
          height: 72px;
          background: white;
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin: 0 auto var(--space-4);
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .gradient-step h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--grey-900);
          margin-bottom: var(--space-2);
        }

        .gradient-step p {
          font-size: 14px;
          color: var(--grey-500);
          line-height: 1.6;
        }

        /* Pricing Section */
        .gradient-pricing {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .gradient-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .gradient-pricing-card {
          background: var(--gradient-soft);
          border-radius: var(--radius-xl);
          padding: var(--space-7);
          text-align: center;
          transition: all 0.3s;
          border: 2px solid transparent;
          position: relative;
        }

        .gradient-pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(9, 103, 210, 0.15);
        }

        .gradient-pricing-card.featured {
          background: var(--blue-600);
          color: white;
          border-color: var(--blue-600);
        }

        .gradient-pricing-card.featured:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(9, 103, 210, 0.2);
        }

        .gradient-pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--cyan-500);
          color: white;
          padding: var(--space-1) var(--space-4);
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 700;
        }

        .gradient-pricing-icon {
          font-size: 48px;
          margin-bottom: var(--space-4);
        }

        .gradient-pricing-name {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: var(--space-2);
        }

        .gradient-pricing-card.featured .gradient-pricing-name {
          color: white;
        }

        .gradient-pricing-desc {
          font-size: 14px;
          color: var(--grey-500);
          margin-bottom: var(--space-5);
        }

        .gradient-pricing-card.featured .gradient-pricing-desc {
          color: rgba(255,255,255,0.8);
        }

        .gradient-pricing-price {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: var(--space-1);
        }

        .gradient-pricing-price span {
          font-size: 18px;
          font-weight: 500;
        }

        .gradient-pricing-card:not(.featured) .gradient-pricing-price {
          color: var(--blue-600);
        }

        .gradient-pricing-period {
          font-size: 14px;
          color: var(--grey-500);
          margin-bottom: var(--space-5);
        }

        .gradient-pricing-card.featured .gradient-pricing-period {
          color: rgba(255,255,255,0.7);
        }

        .gradient-pricing-features {
          list-style: none;
          margin-bottom: var(--space-6);
          text-align: left;
        }

        .gradient-pricing-features li {
          padding: var(--space-2) 0;
          font-size: 14px;
          color: var(--grey-600);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .gradient-pricing-card.featured .gradient-pricing-features li {
          color: rgba(255,255,255,0.9);
        }

        .gradient-pricing-features li::before {
          content: '✓';
          width: 20px;
          height: 20px;
          background: var(--cyan-100);
          color: var(--cyan-600);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .gradient-pricing-card.featured .gradient-pricing-features li::before {
          background: rgba(255,255,255,0.2);
          color: white;
        }

        .gradient-pricing-card .gradient-btn {
          width: 100%;
        }

        .gradient-pricing-card.featured .gradient-btn-primary {
          background: white;
          color: var(--blue-600);
        }

        .gradient-pricing-card.featured .gradient-btn-primary:hover {
          background: var(--blue-050);
        }

        /* Testimonials Section */
        .gradient-testimonials {
          padding: var(--space-9) var(--space-6);
          background: var(--gradient-soft);
        }

        .gradient-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .gradient-testimonial-card {
          background: white;
          border: 1px solid var(--grey-200);
          border-radius: var(--radius-md);
          padding: var(--space-6);
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: all 0.2s;
        }

        .gradient-testimonial-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }

        .gradient-testimonial-rating {
          display: flex;
          gap: var(--space-1);
          margin-bottom: var(--space-4);
        }

        .gradient-testimonial-star {
          color: #FFB800;
          font-size: 18px;
        }

        .gradient-testimonial-content {
          font-size: 15px;
          color: var(--grey-600);
          line-height: 1.8;
          margin-bottom: var(--space-5);
        }

        .gradient-testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .gradient-testimonial-avatar {
          width: 48px;
          height: 48px;
          background: var(--blue-100);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .gradient-testimonial-name {
          font-size: 16px;
          font-weight: 700;
          color: var(--grey-900);
        }

        .gradient-testimonial-role {
          font-size: 13px;
          color: var(--grey-500);
        }

        /* Security Section */
        .gradient-security {
          padding: var(--space-9) var(--space-6);
          background: var(--gradient-dark);
          position: relative;
          overflow: hidden;
        }

        .gradient-security::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .gradient-security-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
          position: relative;
        }

        .gradient-security-content h2 {
          font-size: 40px;
          font-weight: 800;
          color: white;
          margin-bottom: var(--space-5);
        }

        .gradient-security-content p {
          font-size: 17px;
          color: var(--grey-400);
          line-height: 1.8;
          margin-bottom: var(--space-6);
        }

        .gradient-security-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
        }

        .gradient-security-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .gradient-security-icon {
          width: 40px;
          height: 40px;
          background: rgba(28, 212, 212, 0.2);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .gradient-security-item span {
          font-size: 14px;
          color: var(--grey-300);
        }

        .gradient-security-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .gradient-shield {
          width: 180px;
          height: 220px;
          background: var(--blue-500);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 40px rgba(9, 103, 210, 0.3);
          position: relative;
        }

        .gradient-shield::before {
          content: '';
          position: absolute;
          inset: 4px;
          background: rgba(255,255,255,0.05);
          border-radius: calc(var(--radius-lg) - 4px);
        }

        .gradient-shield-icon {
          font-size: 64px;
          margin-bottom: var(--space-3);
          position: relative;
        }

        .gradient-shield-text {
          font-size: 18px;
          font-weight: 700;
          color: white;
          position: relative;
        }

        .gradient-stats {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .gradient-stats-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
          position: relative;
        }

        .gradient-stat {
          text-align: center;
        }

        .gradient-stat-value {
          font-size: 48px;
          font-weight: 800;
          color: var(--blue-500);
          margin-bottom: var(--space-2);
        }

        .gradient-stat-label {
          font-size: 14px;
          color: var(--grey-500);
        }

        /* Lifestyle Section */
        .gradient-lifestyle {
          padding: var(--space-9) var(--space-6);
          background: white;
        }

        .gradient-lifestyle-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
          align-items: center;
        }

        .gradient-lifestyle-text h2 {
          font-size: 40px;
          font-weight: 800;
          color: var(--grey-900);
          margin-bottom: var(--space-4);
        }

        .gradient-lifestyle-text p {
          font-size: 17px;
          color: var(--grey-500);
          line-height: 1.8;
          margin-bottom: var(--space-5);
        }

        .gradient-lifestyle-features {
          list-style: none;
        }

        .gradient-lifestyle-features li {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-2) 0;
          color: var(--grey-700);
        }

        .gradient-lifestyle-features li::before {
          content: '✓';
          width: 24px;
          height: 24px;
          background: var(--cyan-100);
          color: var(--cyan-600);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .gradient-lifestyle-image {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(9, 103, 210, 0.15);
        }

        .gradient-lifestyle-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        @media (max-width: 1024px) {
          .gradient-lifestyle-content {
            grid-template-columns: 1fr;
          }
        }

        .gradient-cta {
          padding: var(--space-10) var(--space-6);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .gradient-cta-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .gradient-cta-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
        }

        .gradient-cta-box {
          max-width: 800px;
          margin: 0 auto;
          background: var(--blue-600);
          border-radius: var(--radius-lg);
          padding: var(--space-9);
          position: relative;
          overflow: hidden;
        }

        .gradient-cta h2 {
          font-size: 40px;
          font-weight: 800;
          color: white;
          margin-bottom: var(--space-4);
          position: relative;
        }

        .gradient-cta p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          margin-bottom: var(--space-6);
          position: relative;
        }

        .gradient-cta .gradient-btn-secondary {
          background: white;
          color: var(--blue-600);
          border: none;
          position: relative;
        }

        .gradient-footer {
          padding: var(--space-8) var(--space-6);
          background: white;
          border-top: 1px solid var(--grey-100);
        }

        .gradient-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .gradient-footer-links {
          display: flex;
          gap: var(--space-6);
        }

        .gradient-footer-links a {
          color: var(--grey-500);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .gradient-footer-links a:hover {
          color: var(--blue-600);
        }

        .gradient-footer-copyright {
          font-size: 14px;
          color: var(--grey-400);
        }

        .gradient-back-link {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background: var(--blue-500);
          color: white;
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-md);
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(9, 103, 210, 0.2);
          transition: all 0.2s;
          z-index: 100;
        }

        .gradient-back-link:hover {
          background: var(--blue-600);
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .gradient-features-grid { grid-template-columns: repeat(2, 1fr); }
          .gradient-hero-cards { flex-direction: column; align-items: center; }
          .gradient-card-preview { transform: none !important; margin-top: 0 !important; }
          .gradient-how-steps { grid-template-columns: repeat(2, 1fr); }
          .gradient-how-steps::before { display: none; }
          .gradient-pricing-grid { grid-template-columns: 1fr; }
          .gradient-pricing-card.featured:hover { transform: translateY(-4px); }
          .gradient-testimonials-grid { grid-template-columns: 1fr; }
          .gradient-security-container { grid-template-columns: 1fr; }
          .gradient-security-visual { display: none; }
        }

        @media (max-width: 768px) {
          .gradient-hero h1 { font-size: 40px; }
          .gradient-features-grid { grid-template-columns: 1fr; }
          .gradient-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .gradient-nav-links { display: none; }
          .gradient-security-features { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav className="gradient-nav">
        <div className="gradient-nav-container">
          <div className="gradient-logo">Finflow</div>
          <ul className="gradient-nav-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
          <a href="#" className="gradient-btn gradient-btn-primary">Get Started</a>
        </div>
      </nav>

      <section className="gradient-hero">
        <div className="gradient-hero-content">
          <span className="gradient-hero-badge">✨ 2024년 최고의 핀테크 앱 선정</span>
          <h1>금융을 더<br /><span>스마트하게</span></h1>
          <p>
            AI 기반 자산 관리로 당신의 재정을 한눈에. 투자, 저축, 지출 분석을
            하나의 앱에서 경험하세요.
          </p>
          <div className="gradient-hero-actions">
            <a href="#" className="gradient-btn gradient-btn-primary gradient-btn-large">무료로 시작하기</a>
            <a href="#" className="gradient-btn gradient-btn-secondary gradient-btn-large">데모 보기</a>
          </div>

          <div className="gradient-hero-image">
            <Image
              src="/images/gradient/hero.png"
              alt="AI powered financial visualization"
              width={700}
              height={500}
              priority
            />
          </div>
        </div>
      </section>

      <section className="gradient-features">
        <div className="gradient-section-container">
          <div className="gradient-section-header">
            <div className="gradient-section-label">Features</div>
            <h2 className="gradient-section-title">스마트한 금융 관리</h2>
            <p className="gradient-section-desc">AI가 분석하고, 당신은 성장합니다</p>
          </div>

          <div className="gradient-features-grid">
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🤖</div>
              <h3>AI 자산 분석</h3>
              <p>머신러닝이 당신의 지출 패턴을 분석하고 맞춤형 절약 방법을 제안합니다.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">📈</div>
              <h3>자동 투자</h3>
              <p>리스크 성향에 맞는 포트폴리오를 자동으로 구성하고 리밸런싱합니다.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🔔</div>
              <h3>스마트 알림</h3>
              <p>예산 초과, 이상 거래, 투자 기회를 실시간으로 알려드립니다.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🏦</div>
              <h3>계좌 통합</h3>
              <p>모든 은행 계좌와 카드를 연결해 한 곳에서 관리하세요.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🎯</div>
              <h3>목표 저축</h3>
              <p>여행, 결혼, 주택 등 목표를 설정하고 자동으로 저축하세요.</p>
            </div>
            <div className="gradient-feature-card">
              <div className="gradient-feature-icon">🔒</div>
              <h3>은행급 보안</h3>
              <p>256비트 암호화와 생체 인증으로 자산을 안전하게 보호합니다.</p>
            </div>
          </div>

          <div className="gradient-features-visual">
            <div className="gradient-features-image">
              <Image
                src="/images/gradient/feature.png"
                alt="Financial app UI on smartphone"
                width={600}
                height={450}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="gradient-how">
        <div className="gradient-section-container">
          <div className="gradient-section-header">
            <div className="gradient-section-label">How It Works</div>
            <h2 className="gradient-section-title">시작하기</h2>
            <p className="gradient-section-desc">3분이면 스마트한 금융 생활을 시작할 수 있습니다</p>
          </div>

          <div className="gradient-how-steps">
            <div className="gradient-step">
              <div className="gradient-step-number">1</div>
              <div className="gradient-step-icon">📱</div>
              <h3>앱 다운로드</h3>
              <p>App Store 또는 Play Store에서 무료로 다운로드하세요</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-number">2</div>
              <div className="gradient-step-icon">🔗</div>
              <h3>계좌 연결</h3>
              <p>보유한 은행 계좌와 카드를 안전하게 연결합니다</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-number">3</div>
              <div className="gradient-step-icon">🎯</div>
              <h3>목표 설정</h3>
              <p>재정 목표와 투자 성향을 설정합니다</p>
            </div>
            <div className="gradient-step">
              <div className="gradient-step-number">4</div>
              <div className="gradient-step-icon">🚀</div>
              <h3>자동 관리</h3>
              <p>AI가 자동으로 분석하고 최적화합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="gradient-pricing">
        <div className="gradient-section-container">
          <div className="gradient-section-header">
            <div className="gradient-section-label">Pricing</div>
            <h2 className="gradient-section-title">요금제 선택</h2>
            <p className="gradient-section-desc">당신에게 맞는 플랜을 선택하세요</p>
          </div>

          <div className="gradient-pricing-grid">
            <div className="gradient-pricing-card">
              <div className="gradient-pricing-icon">✨</div>
              <div className="gradient-pricing-name">Basic</div>
              <p className="gradient-pricing-desc">개인 사용자를 위한 기본 플랜</p>
              <div className="gradient-pricing-price">무료</div>
              <div className="gradient-pricing-period">영구 무료</div>
              <ul className="gradient-pricing-features">
                <li>계좌 3개 연결</li>
                <li>기본 지출 분석</li>
                <li>월간 리포트</li>
                <li>커뮤니티 지원</li>
              </ul>
              <a href="#" className="gradient-btn gradient-btn-secondary">무료로 시작</a>
            </div>

            <div className="gradient-pricing-card featured">
              <span className="gradient-pricing-badge">Most Popular</span>
              <div className="gradient-pricing-icon">💎</div>
              <div className="gradient-pricing-name">Pro</div>
              <p className="gradient-pricing-desc">적극적인 자산 관리를 원하는 분</p>
              <div className="gradient-pricing-price">₩9,900<span>/월</span></div>
              <div className="gradient-pricing-period">연간 결제 시 20% 할인</div>
              <ul className="gradient-pricing-features">
                <li>무제한 계좌 연결</li>
                <li>AI 맞춤 분석</li>
                <li>자동 투자 기능</li>
                <li>실시간 알림</li>
                <li>주간 리포트</li>
                <li>1:1 상담 지원</li>
              </ul>
              <a href="#" className="gradient-btn gradient-btn-primary">Pro 시작하기</a>
            </div>

            <div className="gradient-pricing-card">
              <div className="gradient-pricing-icon">🏢</div>
              <div className="gradient-pricing-name">Business</div>
              <p className="gradient-pricing-desc">기업 및 팀을 위한 플랜</p>
              <div className="gradient-pricing-price">₩29,900<span>/월</span></div>
              <div className="gradient-pricing-period">사용자당 가격</div>
              <ul className="gradient-pricing-features">
                <li>Pro 모든 기능 포함</li>
                <li>팀 대시보드</li>
                <li>법인카드 관리</li>
                <li>비용 승인 워크플로우</li>
                <li>전담 매니저</li>
                <li>API 연동</li>
              </ul>
              <a href="#" className="gradient-btn gradient-btn-secondary">영업팀 문의</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="gradient-testimonials">
        <div className="gradient-section-container">
          <div className="gradient-section-header">
            <div className="gradient-section-label">Testimonials</div>
            <h2 className="gradient-section-title">고객 후기</h2>
            <p className="gradient-section-desc">Finflow와 함께 재정 목표를 달성한 고객들의 이야기</p>
          </div>

          <div className="gradient-testimonials-grid">
            <div className="gradient-testimonial-card">
              <div className="gradient-testimonial-rating">
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
              </div>
              <p className="gradient-testimonial-content">
                "처음으로 제 돈이 어디로 가는지 정확히 알게 됐어요.
                AI 분석 덕분에 월 50만원 이상 절약하고 있습니다."
              </p>
              <div className="gradient-testimonial-author">
                <div className="gradient-testimonial-avatar">👨‍💼</div>
                <div>
                  <div className="gradient-testimonial-name">김민수</div>
                  <div className="gradient-testimonial-role">스타트업 대표</div>
                </div>
              </div>
            </div>
            <div className="gradient-testimonial-card">
              <div className="gradient-testimonial-rating">
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
              </div>
              <p className="gradient-testimonial-content">
                "자동 투자 기능으로 복잡한 투자 결정에서 해방됐어요.
                1년 만에 15% 수익률을 달성했습니다."
              </p>
              <div className="gradient-testimonial-author">
                <div className="gradient-testimonial-avatar">👩‍🎓</div>
                <div>
                  <div className="gradient-testimonial-name">박서윤</div>
                  <div className="gradient-testimonial-role">대학원생</div>
                </div>
              </div>
            </div>
            <div className="gradient-testimonial-card">
              <div className="gradient-testimonial-rating">
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
                <span className="gradient-testimonial-star">★</span>
              </div>
              <p className="gradient-testimonial-content">
                "결혼 자금 목표를 설정하고 자동 저축을 시작했는데,
                생각보다 빨리 목표에 도달할 수 있었어요!"
              </p>
              <div className="gradient-testimonial-author">
                <div className="gradient-testimonial-avatar">👩‍💻</div>
                <div>
                  <div className="gradient-testimonial-name">이지현</div>
                  <div className="gradient-testimonial-role">개발자</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="gradient-security">
        <div className="gradient-security-container">
          <div className="gradient-security-content">
            <h2>은행급 보안으로<br />자산을 보호합니다</h2>
            <p>
              Finflow는 금융 기관 수준의 보안 프로토콜을 적용하여
              당신의 개인정보와 금융 데이터를 철저하게 보호합니다.
            </p>
            <div className="gradient-security-features">
              <div className="gradient-security-item">
                <div className="gradient-security-icon">🔐</div>
                <span>256비트 AES 암호화</span>
              </div>
              <div className="gradient-security-item">
                <div className="gradient-security-icon">👆</div>
                <span>생체 인증</span>
              </div>
              <div className="gradient-security-item">
                <div className="gradient-security-icon">🛡️</div>
                <span>이상 거래 탐지</span>
              </div>
              <div className="gradient-security-item">
                <div className="gradient-security-icon">📋</div>
                <span>ISO 27001 인증</span>
              </div>
            </div>
          </div>
          <div className="gradient-security-visual">
            <div className="gradient-shield">
              <div className="gradient-shield-icon">🛡️</div>
              <div className="gradient-shield-text">Bank-Level Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="gradient-lifestyle">
        <div className="gradient-lifestyle-content">
          <div className="gradient-lifestyle-text">
            <h2>언제 어디서나<br />스마트한 금융</h2>
            <p>
              출퇴근길, 카페, 집에서도 손쉽게 자산을 관리하세요.
              실시간 알림과 원터치 투자로 바쁜 일상 속에서도
              현명한 금융 결정을 내릴 수 있습니다.
            </p>
            <ul className="gradient-lifestyle-features">
              <li>실시간 포트폴리오 모니터링</li>
              <li>원터치 투자 및 이체</li>
              <li>개인 맞춤형 금융 인사이트</li>
              <li>24시간 고객 지원</li>
            </ul>
          </div>
          <div className="gradient-lifestyle-image">
            <Image
              src="/images/gradient/team.png"
              alt="Young professional using fintech app"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="gradient-stats">
        <div className="gradient-section-container">
          <div className="gradient-section-header">
            <div className="gradient-section-label">Our Impact</div>
            <h2 className="gradient-section-title">숫자로 보는 Finflow</h2>
          </div>

          <div className="gradient-stats-grid">
            <div className="gradient-stat">
              <div className="gradient-stat-value">500K+</div>
              <div className="gradient-stat-label">활성 사용자</div>
            </div>
            <div className="gradient-stat">
              <div className="gradient-stat-value">₩2.3조</div>
              <div className="gradient-stat-label">관리 자산</div>
            </div>
            <div className="gradient-stat">
              <div className="gradient-stat-value">4.9</div>
              <div className="gradient-stat-label">앱스토어 평점</div>
            </div>
            <div className="gradient-stat">
              <div className="gradient-stat-value">15%</div>
              <div className="gradient-stat-label">평균 저축률 증가</div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-cta">
        <div className="gradient-cta-bg">
          <Image
            src="/images/gradient/background.png"
            alt=""
            width={1920}
            height={600}
            aria-hidden="true"
          />
        </div>
        <div className="gradient-cta-box">
          <h2>지금 시작하세요</h2>
          <p>가입 후 30일간 프리미엄 기능 무료 체험</p>
          <a href="#" className="gradient-btn gradient-btn-secondary gradient-btn-large">무료 체험 시작 →</a>
        </div>
      </section>

      <footer className="gradient-footer">
        <div className="gradient-footer-container">
          <div className="gradient-logo">Finflow</div>
          <div className="gradient-footer-links">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">고객센터</a>
          </div>
          <span className="gradient-footer-copyright">© 2024 Finflow</span>
        </div>
      </footer>

      <Link href="/" className="gradient-back-link">← 갤러리로</Link>
    </>
  );
}

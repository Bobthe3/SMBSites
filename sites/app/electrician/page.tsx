'use client'

import { useState, FormEvent } from 'react'

export default function ElectricianPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your request! We will contact you shortly.')
    ;(e.target as HTMLFormElement).reset()
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --copper: #b87333;
          --copper-light: #d4915a;
          --copper-dark: #8b5a2b;
          --copper-glow: #e8a965;
          --slate: #4a5568;
          --slate-dark: #2d3748;
          --slate-light: #718096;
          --charcoal: #1a202c;
          --off-white: #f7fafc;
          --gray-100: #edf2f7;
          --gray-200: #e2e8f0;
          --gray-500: #a0aec0;
          --gold: #d4a84b;
          --white: #ffffff;
          --text-primary: #1a202c;
          --text-secondary: #4a5568;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: var(--off-white);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5 {
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.1;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(184, 115, 51, 0.4); }
          50% { box-shadow: 0 0 40px rgba(184, 115, 51, 0.7); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes electricPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0.75rem 2rem;
          background: var(--charcoal);
          border-bottom: 3px solid var(--copper);
        }

        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--copper);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-icon svg {
          width: 24px;
          height: 24px;
          stroke: var(--white);
          fill: none;
          stroke-width: 2;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-main {
          font-family: 'Oswald', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .logo-sub {
          font-size: 0.65rem;
          color: var(--copper-light);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--gray-200);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--copper-light);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: var(--copper);
          color: var(--white) !important;
          border: none;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn:hover {
          background: var(--copper-light);
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--copper);
          color: var(--copper) !important;
        }

        .btn-outline:hover {
          background: var(--copper);
          color: var(--white) !important;
        }

        .btn-dark {
          background: var(--charcoal);
          border: 2px solid var(--charcoal);
        }

        .btn-dark:hover {
          background: var(--slate-dark);
          border-color: var(--slate-dark);
        }

        .btn-large {
          padding: 1.125rem 2.25rem;
          font-size: 1rem;
        }

        .btn-phone {
          background: var(--copper);
          font-family: 'Oswald', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.02em;
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }

        .mobile-toggle span {
          width: 24px;
          height: 2px;
          background: var(--white);
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 8rem 2rem 4rem;
          background: linear-gradient(135deg, var(--charcoal) 0%, var(--slate-dark) 100%);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 80%, rgba(184, 115, 51, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(184, 115, 51, 0.08) 0%, transparent 40%);
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 60%;
          height: 200%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M150,0 L100,200 L150,200 L80,400 L130,400 L50,600' stroke='%23b87333' stroke-width='2' fill='none' opacity='0.1'/%3E%3C/svg%3E") no-repeat center;
          background-size: contain;
          pointer-events: none;
          animation: electricPulse 3s ease-in-out infinite;
        }

        .hero-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          animation: slideInLeft 0.8s ease-out;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(184, 115, 51, 0.15);
          border: 1px solid var(--copper);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--copper-light);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          animation: fadeIn 0.6s ease-out 0.2s both;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--white);
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .hero h1 span {
          color: var(--copper);
          text-shadow: 0 0 40px rgba(184, 115, 51, 0.5);
        }

        .hero-text {
          font-size: 1.125rem;
          color: var(--gray-500);
          margin-bottom: 2rem;
          max-width: 500px;
          line-height: 1.7;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .hero-ctas .btn:first-child {
          animation: glow 2s ease-in-out infinite;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .trust-item svg {
          width: 20px;
          height: 20px;
          stroke: var(--copper);
          fill: none;
          stroke-width: 2;
        }

        .trust-item span {
          font-size: 0.9rem;
          color: var(--gray-200);
        }

        .trust-item strong {
          color: var(--copper-light);
        }

        .hero-visual {
          position: relative;
          animation: slideInRight 0.8s ease-out 0.3s both;
        }

        .hero-image-container {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
        }

        .hero-image {
          width: 100%;
          height: 500px;
          background: linear-gradient(145deg, var(--copper-dark) 0%, var(--copper) 50%, var(--copper-light) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.08) 50%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.05) 50%, transparent 52%);
          background-size: 30px 30px;
        }

        .hero-image::after {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          bottom: 20px;
          border: 2px solid rgba(255,255,255,0.2);
          border-radius: 4px;
        }

        .hero-image-text {
          text-align: center;
          color: var(--white);
          position: relative;
          z-index: 1;
        }

        .hero-image-text .years {
          font-family: 'Oswald', sans-serif;
          font-size: 7rem;
          font-weight: 700;
          line-height: 1;
          display: block;
          text-shadow: 0 4px 30px rgba(0,0,0,0.4);
          animation: float 3s ease-in-out infinite;
        }

        .hero-image-text .label {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          opacity: 0.9;
          margin-top: 0.5rem;
        }

        .hero-image-accent {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 150px;
          height: 150px;
          background: var(--charcoal);
          border-radius: 8px;
          z-index: -1;
          transform: rotate(-5deg);
        }

        /* Trust Bar */
        .trust-bar {
          background: var(--slate-dark);
          padding: 2rem;
          border-top: 1px solid rgba(184, 115, 51, 0.3);
        }

        .trust-bar-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--white);
        }

        .trust-badge svg {
          width: 24px;
          height: 24px;
          stroke: var(--copper);
          fill: none;
          stroke-width: 2;
        }

        .trust-badge-text {
          font-size: 0.9rem;
          color: var(--gray-200);
        }

        .trust-badge-text strong {
          display: block;
          font-size: 1rem;
          color: var(--white);
        }

        .trust-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.15);
        }

        /* Services */
        .services {
          padding: 6rem 2rem;
          background: var(--white);
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
        }

        .section-label {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--copper);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--charcoal);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          font-family: 'Source Sans 3', sans-serif;
          text-transform: none;
          letter-spacing: normal;
        }

        .services-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          border-left: 4px solid var(--copper);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, transparent 0%, rgba(184, 115, 51, 0.03) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          border-left-color: var(--copper-light);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 8px 25px rgba(184, 115, 51, 0.3);
        }

        .service-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--copper) 0%, var(--copper-dark) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(184, 115, 51, 0.2);
        }

        .service-icon svg {
          width: 26px;
          height: 26px;
          stroke: var(--white);
          fill: none;
          stroke-width: 2;
        }

        .service-card h3 {
          font-size: 1.25rem;
          color: var(--charcoal);
          margin-bottom: 0.75rem;
          transition: color 0.3s;
        }

        .service-card:hover h3 {
          color: var(--copper-dark);
        }

        .service-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          text-transform: none;
          letter-spacing: normal;
          line-height: 1.6;
        }

        /* Why Choose */
        .why-choose {
          padding: 6rem 2rem;
          background: var(--slate-dark);
          position: relative;
          overflow: hidden;
        }

        .why-choose::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 50%;
          height: 200%;
          background: radial-gradient(ellipse, rgba(184, 115, 51, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .why-choose .section-label {
          color: var(--copper-light);
        }

        .why-choose .section-title {
          color: var(--white);
        }

        .why-choose .section-subtitle {
          color: var(--gray-500);
        }

        .why-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .why-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .why-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--copper), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .why-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-5px);
          border-color: rgba(184, 115, 51, 0.3);
        }

        .why-card:hover::before {
          opacity: 1;
        }

        .why-card:hover .why-icon {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(184, 115, 51, 0.4);
        }

        .why-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--copper) 0%, var(--copper-dark) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(184, 115, 51, 0.25);
        }

        .why-icon svg {
          width: 30px;
          height: 30px;
          stroke: var(--white);
          fill: none;
          stroke-width: 2;
        }

        .why-card h3 {
          color: var(--white);
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
        }

        .why-card p {
          color: var(--gray-500);
          font-size: 0.9rem;
          text-transform: none;
          letter-spacing: normal;
          line-height: 1.6;
        }

        /* Emergency CTA */
        .emergency-cta {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, var(--copper-dark) 0%, var(--copper) 50%, var(--copper-light) 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .emergency-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.05) 50%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, rgba(255,255,255,0.05) 50%, transparent 55%);
          background-size: 60px 60px;
        }

        .emergency-cta-inner {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .emergency-icon {
          width: 80px;
          height: 80px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 0 0 0 rgba(255,255,255,0.4);
        }

        .emergency-icon svg {
          width: 40px;
          height: 40px;
          stroke: var(--white);
          fill: none;
          stroke-width: 2;
          animation: electricPulse 1.5s ease-in-out infinite;
        }

        .emergency-cta h2 {
          color: var(--white);
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 0.75rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .emergency-cta p {
          color: rgba(255,255,255,0.9);
          font-size: 1.15rem;
          margin-bottom: 2rem;
        }

        .emergency-phone {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--white);
          color: var(--copper-dark) !important;
          padding: 1.25rem 3rem;
          border-radius: 8px;
          font-family: 'Oswald', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .emergency-phone:hover {
          transform: scale(1.08);
          box-shadow: 0 15px 50px rgba(0,0,0,0.3);
        }

        .emergency-phone svg {
          width: 32px;
          height: 32px;
          stroke: var(--copper);
          fill: none;
          stroke-width: 2;
        }

        /* Reviews */
        .reviews {
          padding: 6rem 2rem;
          background: var(--white);
          position: relative;
        }

        .reviews::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gray-200), transparent);
        }

        .reviews-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .review-card {
          background: var(--off-white);
          padding: 2.5rem;
          border-radius: 16px;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          border-color: var(--gray-200);
        }

        .review-card::before {
          content: '"';
          position: absolute;
          top: 1.5rem;
          right: 2rem;
          font-family: 'Oswald', sans-serif;
          font-size: 6rem;
          color: var(--copper);
          opacity: 0.1;
          line-height: 1;
        }

        .review-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 1.25rem;
        }

        .review-stars svg {
          width: 20px;
          height: 20px;
          fill: var(--gold);
          filter: drop-shadow(0 1px 2px rgba(212, 168, 75, 0.3));
        }

        .review-text {
          color: var(--text-primary);
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--gray-200);
        }

        .review-avatar {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--copper) 0%, var(--copper-dark) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-weight: 600;
          font-size: 1.1rem;
          box-shadow: 0 4px 12px rgba(184, 115, 51, 0.25);
        }

        .review-meta strong {
          display: block;
          color: var(--charcoal);
          font-size: 1rem;
        }

        .review-meta span {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        /* About */
        .about {
          padding: 6rem 2rem;
          background: var(--off-white);
          position: relative;
          overflow: hidden;
        }

        .about::before {
          content: '';
          position: absolute;
          top: 50%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(184, 115, 51, 0.05) 0%, transparent 70%);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .about-visual {
          position: relative;
        }

        .about-image {
          width: 100%;
          height: 450px;
          background: linear-gradient(145deg, var(--slate-dark) 0%, var(--charcoal) 100%);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--white);
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0,0,0,0.15);
        }

        .about-image::before {
          content: '';
          position: absolute;
          inset: 20px;
          border: 2px solid rgba(184, 115, 51, 0.2);
          border-radius: 8px;
        }

        .about-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 30% 70%, rgba(184, 115, 51, 0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .about-stat {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .about-stat-number {
          font-family: 'Oswald', sans-serif;
          font-size: 6rem;
          font-weight: 700;
          color: var(--copper);
          line-height: 1;
          text-shadow: 0 4px 30px rgba(184, 115, 51, 0.4);
        }

        .about-stat-label {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--gray-200);
          margin-top: 0.75rem;
        }

        .about-accent {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, var(--copper) 0%, var(--copper-dark) 100%);
          border-radius: 16px;
          z-index: -1;
          transform: rotate(-8deg);
        }

        .about-accent::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%);
        }

        .about-content h2 {
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: var(--charcoal);
          margin-bottom: 1.5rem;
        }

        .about-content h2 span {
          color: var(--copper);
        }

        .about-text {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin: 2.5rem 0;
          padding: 2rem 0;
          border-top: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .stat {
          text-align: center;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s;
        }

        .stat:hover {
          background: rgba(184, 115, 51, 0.05);
        }

        .stat:hover .stat-number {
          transform: scale(1.1);
        }

        .stat-number {
          font-family: 'Oswald', sans-serif;
          font-size: 2.75rem;
          font-weight: 700;
          color: var(--copper);
          line-height: 1;
          transition: transform 0.3s;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .credentials-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .credential {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--white);
          border: 1px solid var(--gray-200);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.85rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .credential svg {
          width: 16px;
          height: 16px;
          stroke: var(--copper);
          fill: none;
          stroke-width: 2;
        }

        /* Contact */
        .contact {
          padding: 6rem 2rem;
          background: var(--white);
        }

        .contact-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
        }

        .contact-info h2 {
          font-size: 2.25rem;
          color: var(--charcoal);
          margin-bottom: 1rem;
        }

        .contact-info > p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .contact-item-icon {
          width: 44px;
          height: 44px;
          background: var(--off-white);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-item-icon svg {
          width: 20px;
          height: 20px;
          stroke: var(--copper);
          fill: none;
          stroke-width: 2;
        }

        .contact-item-text strong {
          display: block;
          color: var(--charcoal);
          margin-bottom: 0.25rem;
        }

        .contact-item-text span,
        .contact-item-text a {
          color: var(--text-secondary);
          text-decoration: none;
        }

        .contact-item-text a:hover {
          color: var(--copper);
        }

        .contact-form-card {
          background: var(--white);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 25px 80px rgba(0,0,0,0.1);
          border: 1px solid var(--gray-100);
          position: relative;
          overflow: hidden;
        }

        .contact-form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--copper), var(--copper-light), var(--copper));
        }

        .contact-form-card h3 {
          font-size: 1.5rem;
          color: var(--charcoal);
          margin-bottom: 0.5rem;
        }

        .contact-form-card > p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-family: 'Source Sans 3', sans-serif;
          text-transform: none;
          letter-spacing: normal;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          border: 2px solid var(--gray-200);
          background: var(--white);
          border-radius: 10px;
          font-family: inherit;
          font-size: 1rem;
          color: var(--text-primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-group input:hover,
        .form-group select:hover,
        .form-group textarea:hover {
          border-color: var(--gray-500);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--copper);
          box-shadow: 0 0 0 4px rgba(184, 115, 51, 0.1);
        }

        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-checkbox {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(184, 115, 51, 0.1);
          border: 1px solid var(--copper);
          border-radius: 6px;
        }

        .form-checkbox input {
          width: 20px;
          height: 20px;
          accent-color: var(--copper);
        }

        .form-checkbox label {
          font-size: 0.95rem;
          color: var(--copper-dark);
          font-weight: 500;
        }

        .form-submit {
          margin-top: 1rem;
        }

        .form-submit .btn {
          width: 100%;
          justify-content: center;
          padding: 1.25rem 2rem;
          font-size: 1.1rem;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--copper) 0%, var(--copper-dark) 100%);
          box-shadow: 0 8px 25px rgba(184, 115, 51, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-submit .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(184, 115, 51, 0.4);
        }

        /* Footer */
        .footer {
          background: var(--charcoal);
          color: var(--white);
          padding: 4rem 2rem 2rem;
        }

        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-brand .logo-main {
          color: var(--white);
          font-size: 1.5rem;
        }

        .footer-brand .logo-sub {
          color: var(--copper-light);
        }

        .footer-brand p {
          margin-top: 1rem;
          color: var(--gray-500);
          font-size: 0.95rem;
          max-width: 300px;
        }

        .footer-col h4 {
          font-family: 'Oswald', sans-serif;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--copper-light);
          margin-bottom: 1.25rem;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col ul li {
          margin-bottom: 0.75rem;
        }

        .footer-col ul a {
          color: var(--gray-500);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .footer-col ul a:hover {
          color: var(--white);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          font-size: 0.9rem;
          color: var(--gray-500);
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal a {
          font-size: 0.9rem;
          color: var(--gray-500);
          text-decoration: none;
        }

        .footer-legal a:hover {
          color: var(--white);
        }

        /* Floating Phone Button (Mobile) */
        .floating-phone {
          display: none;
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 999;
          width: 60px;
          height: 60px;
          background: var(--copper);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(184, 115, 51, 0.4);
          text-decoration: none;
          transition: transform 0.2s;
        }

        .floating-phone:hover {
          transform: scale(1.1);
        }

        .floating-phone svg {
          width: 28px;
          height: 28px;
          stroke: var(--white);
          fill: none;
          stroke-width: 2;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-inner,
          .about-inner,
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-visual {
            order: -1;
          }

          .hero-image {
            height: 350px;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav {
            padding: 0.75rem 1.5rem;
          }

          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--charcoal);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            border-top: 1px solid rgba(255,255,255,0.1);
          }

          .nav-links.active {
            display: flex;
          }

          .nav-links .btn-phone {
            width: 100%;
            justify-content: center;
          }

          .mobile-toggle {
            display: flex;
          }

          .hero {
            padding: 7rem 1.5rem 3rem;
          }

          .hero-trust {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .trust-bar-inner {
            gap: 1.5rem;
          }

          .trust-divider {
            display: none;
          }

          .services-grid,
          .why-grid,
          .reviews-grid {
            grid-template-columns: 1fr;
          }

          .about-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .floating-phone {
            display: flex;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <div className="logo-text">
              <span className="logo-main">[Company Name]</span>
              <span className="logo-sub">Licensed Electricians</span>
            </div>
          </a>
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a>
            <a href="#why-us" onClick={(e) => scrollToSection(e, '#why-us')}>Why Us</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, '#reviews')}>Reviews</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
            <a href="tel:+1XXXXXXXXXX" className="btn btn-phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (XXX) XXX-XXXX
            </a>
          </div>
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              Licensed &bull; Bonded &bull; Insured
            </div>
            <h1>Expert Electrical<br/>Services for <span>[City]</span></h1>
            <p className="hero-text">Professional electricians serving homes and businesses. From panel upgrades to emergency repairs, we deliver safe, reliable electrical solutions backed by [X]+ years of experience.</p>
            <div className="hero-ctas">
              <a href="tel:+1XXXXXXXXXX" className="btn btn-large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </a>
              <a href="#contact" className="btn btn-outline btn-large" onClick={(e) => scrollToSection(e, '#contact')}>Get Free Estimate</a>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span><strong>[X]+</strong> Years Experience</span>
              </div>
              <div className="trust-item">
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span><strong>5-Star</strong> Rated</span>
              </div>
              <div className="trust-item">
                <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                <span><strong>Same-Day</strong> Service</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-image">
                <div className="hero-image-text">
                  <span className="years">[X]+</span>
                  <span className="label">Years of Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-badge">
            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <div className="trust-badge-text">
              <strong>License #XXXXXX</strong>
              <span>State Licensed Contractor</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <div className="trust-badge-text">
              <strong>Fully Insured</strong>
              <span>Liability &amp; Workers&apos; Comp</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <div className="trust-badge-text">
              <strong>$XX,XXX Bonded</strong>
              <span>Your Protection Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Residential &amp; Commercial Electrical</h2>
          <p className="section-subtitle">Complete electrical solutions for homes and businesses. Quality workmanship, code-compliant installations, and reliable repairs.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3>Panel Upgrades</h3>
            <p>Upgrade your electrical panel to handle modern power demands. 100-400 amp service upgrades for safety and capacity.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </div>
            <h3>Outlet &amp; Switch Installation</h3>
            <p>New outlets, GFCI/AFCI protection, USB outlets, dimmer switches, and smart home integrations.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </div>
            <h3>Lighting Installation</h3>
            <p>Recessed lighting, chandeliers, landscape lighting, LED upgrades, and indoor/outdoor fixtures.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <h3>Commercial Wiring</h3>
            <p>Office buildouts, retail spaces, warehouses, and industrial facilities. Code-compliant commercial installations.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3>Emergency Lighting</h3>
            <p>Exit signs, emergency backup lighting, and battery systems for code compliance and safety.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><rect x="1" y="6" width="22" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/></svg>
            </div>
            <h3>Generator Installation</h3>
            <p>Whole-home and commercial backup generators. Automatic transfer switches for seamless power backup.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose" id="why-us">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">The [Company] Difference</h2>
          <p className="section-subtitle">Trusted by homeowners and businesses throughout [City] and surrounding areas</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Licensed &amp; Insured</h3>
            <p>Fully licensed contractor with comprehensive liability and workers&apos; compensation insurance for your protection.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>24/7 Emergency Service</h3>
            <p>Electrical emergencies don&apos;t wait. We&apos;re available around the clock when you need us most.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3>Upfront Pricing</h3>
            <p>No hidden fees or surprises. Get a detailed quote before any work begins. We stand behind our estimates.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3>Satisfaction Guaranteed</h3>
            <p>We stand behind our work with a 100% satisfaction guarantee. Your complete satisfaction is our priority.</p>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-cta">
        <div className="emergency-cta-inner">
          <div className="emergency-icon">
            <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <h2>Electrical Emergency?</h2>
          <p>We&apos;re available 24/7 for emergency electrical service. Don&apos;t wait—call now for immediate assistance.</p>
          <a href="tel:+1XXXXXXXXXX" className="emergency-phone">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (XXX) XXX-XXXX
          </a>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews" id="reviews">
        <div className="section-header">
          <span className="section-label">Customer Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by homeowners and businesses throughout [City]</p>
        </div>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p className="review-text">&quot;Called for an emergency late at night and they were at my house within an hour. Professional, explained everything clearly, and fixed the issue quickly. Highly recommend!&quot;</p>
            <div className="review-author">
              <div className="review-avatar">JD</div>
              <div className="review-meta">
                <strong>John D.</strong>
                <span>[City], [State] &bull; via Google</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p className="review-text">&quot;Had them upgrade our entire electrical panel. Fair pricing, on-time, and incredibly professional. The crew was respectful of our home and cleaned up everything perfectly.&quot;</p>
            <div className="review-author">
              <div className="review-avatar">SM</div>
              <div className="review-meta">
                <strong>Sarah M.</strong>
                <span>[City], [State] &bull; via Yelp</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p className="review-text">&quot;We use them for all our commercial electrical needs. Responsive, knowledgeable, and always deliver quality work. They understand business needs and minimize disruption.&quot;</p>
            <div className="review-author">
              <div className="review-avatar">RK</div>
              <div className="review-meta">
                <strong>Robert K.</strong>
                <span>Business Owner &bull; via Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-image">
              <div className="about-stat">
                <div className="about-stat-number">[X]+</div>
                <div className="about-stat-label">Years in Business</div>
              </div>
            </div>
            <div className="about-accent"></div>
          </div>
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2>Your Trusted Local <span>Electricians</span></h2>
            <p className="about-text">[Company Name] has been serving [City] and the surrounding areas for over [X] years. As a family-owned business, we take pride in delivering quality electrical services with the personal touch that only a local company can provide.</p>
            <p className="about-text">Our team of licensed electricians brings expertise, professionalism, and a commitment to safety to every job—from simple repairs to complex commercial installations.</p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">[X]+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">[X]+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">5.0</div>
                <div className="stat-label">Star Rating</div>
              </div>
            </div>
            <div className="credentials-list">
              <span className="credential">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Licensed Contractor
              </span>
              <span className="credential">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Fully Insured
              </span>
              <span className="credential">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Bonded
              </span>
              <span className="credential">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <span className="section-label">Contact Us</span>
            <h2>Get Your Free Estimate</h2>
            <p>Ready to start your electrical project? Contact us today for a free, no-obligation estimate. We&apos;ll assess your needs and provide upfront pricing.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Phone</strong>
                  <a href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Service Area</strong>
                  <span>[City], [State] &amp; Surrounding Areas</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Hours</strong>
                  <span>24/7 Emergency | Mon-Sat Regular</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Payment</strong>
                  <span>All major credit cards accepted</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-card">
            <h3>Request Your Free Quote</h3>
            <p>Fill out the form below and we&apos;ll get back to you promptly.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service">
                  <option value="">Select a service...</option>
                  <option value="panel">Panel Upgrade</option>
                  <option value="outlet">Outlet/Switch Installation</option>
                  <option value="lighting">Lighting Installation</option>
                  <option value="repair">Electrical Repair</option>
                  <option value="inspection">Safety Inspection</option>
                  <option value="commercial">Commercial Services</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" placeholder="Tell us about your electrical needs..."></textarea>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" id="emergency" name="emergency" />
                <label htmlFor="emergency">This is an emergency—please call me ASAP</label>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-large">Send Request</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#" className="logo">
                <span className="logo-main">[Company Name]</span>
                <span className="logo-sub">Licensed Electricians</span>
              </a>
              <p>Serving [City] and surrounding areas with professional electrical services. Licensed, insured, and committed to quality.</p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Panel Upgrades</a></li>
                <li><a href="#services">Lighting Installation</a></li>
                <li><a href="#services">Outlet Installation</a></li>
                <li><a href="#services">Commercial Wiring</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="tel:+1XXXXXXXXXX">Emergency Line</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Service Areas</h4>
              <ul>
                <li><a href="#">[City 1], [State]</a></li>
                <li><a href="#">[City 2], [State]</a></li>
                <li><a href="#">[City 3], [State]</a></li>
                <li><a href="#">[City 4], [State]</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} [Company Name]. License #XXXXXX. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Phone Button (Mobile) */}
      <a href="tel:+1XXXXXXXXXX" className="floating-phone" aria-label="Call us">
        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </>
  )
}

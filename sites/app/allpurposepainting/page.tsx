'use client'

import { useState, FormEvent } from 'react'

export default function AllPurposePaintingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your request! We will contact you within 24 hours.')
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
          --forest: #1a3a2f;
          --forest-light: #2d5a4a;
          --cream: #f8f5f0;
          --cream-dark: #efe9e0;
          --terracotta: #c4785a;
          --terracotta-light: #d4927a;
          --gold: #b8934e;
          --gold-light: #d4b06e;
          --charcoal: #2c2c2c;
          --gray: #6b6b6b;
          --white: #ffffff;
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
          font-family: 'DM Sans', sans-serif;
          background-color: var(--cream);
          color: var(--charcoal);
          line-height: 1.6;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          line-height: 1.2;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          background: var(--white);
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
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
          flex-direction: column;
        }

        .logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--forest);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .logo-sub {
          font-size: 0.7rem;
          color: var(--terracotta);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-top: -2px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--charcoal);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: var(--forest);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: var(--terracotta);
          color: var(--white) !important;
          border: none;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
        }

        .btn:hover {
          background: var(--terracotta-light);
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--forest);
          color: var(--forest) !important;
        }

        .btn-outline:hover {
          background: var(--forest);
          color: var(--white) !important;
        }

        .btn-large {
          padding: 1.125rem 2.25rem;
          font-size: 1rem;
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
          background: var(--forest);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 8rem 2rem 4rem;
          background: linear-gradient(135deg, var(--cream) 0%, var(--cream-dark) 100%);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 80%;
          height: 200%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100,0 Q150,200 100,400 T100,800' stroke='%231a3a2f' stroke-width='80' fill='none' opacity='0.04'/%3E%3C/svg%3E") no-repeat center;
          background-size: contain;
          pointer-events: none;
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
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--white);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--forest);
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 15px rgba(0,0,0,0.06);
        }

        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--forest);
          margin-bottom: 1.5rem;
        }

        .hero h1 span {
          color: var(--terracotta);
          font-style: italic;
        }

        .hero-text {
          font-size: 1.125rem;
          color: var(--gray);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .trust-item svg {
          width: 20px;
          height: 20px;
        }

        .trust-item span {
          font-size: 0.9rem;
          color: var(--charcoal);
        }

        .trust-item strong {
          color: var(--forest);
        }

        .hero-visual {
          position: relative;
        }

        .hero-image-container {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(26, 58, 47, 0.2);
        }

        .hero-image {
          width: 100%;
          height: 500px;
          background: linear-gradient(135deg, var(--forest) 0%, var(--forest-light) 100%);
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
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23ffffff' stroke-width='0.5' fill='none' opacity='0.1'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%23ffffff' stroke-width='0.5' fill='none' opacity='0.1'/%3E%3Ccircle cx='50' cy='50' r='20' stroke='%23ffffff' stroke-width='0.5' fill='none' opacity='0.1'/%3E%3C/svg%3E") center/cover;
        }

        .hero-image-text {
          text-align: center;
          color: var(--white);
          position: relative;
          z-index: 1;
        }

        .hero-image-text .years {
          font-family: 'Cormorant Garamond', serif;
          font-size: 6rem;
          font-weight: 700;
          line-height: 1;
          display: block;
        }

        .hero-image-text .label {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.9;
        }

        .hero-floating-card {
          position: absolute;
          bottom: -30px;
          left: -30px;
          background: var(--white);
          padding: 1.25rem 1.5rem;
          border-radius: 8px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .floating-stars {
          display: flex;
          gap: 2px;
        }

        .floating-stars svg {
          width: 16px;
          height: 16px;
          fill: var(--gold);
        }

        .floating-text {
          font-size: 0.85rem;
        }

        .floating-text strong {
          display: block;
          color: var(--forest);
          font-size: 1rem;
        }

        .trust-bar {
          background: var(--forest);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .trust-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='1' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='75' cy='75' r='1' fill='%23ffffff' opacity='0.03'/%3E%3Ccircle cx='50' cy='10' r='0.5' fill='%23ffffff' opacity='0.02'/%3E%3C/pattern%3E%3Crect width='100' height='100' fill='url(%23grain)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .trust-bar-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
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
          opacity: 0.9;
        }

        .trust-badge-text {
          font-size: 0.9rem;
        }

        .trust-badge-text strong {
          display: block;
          font-size: 1.1rem;
        }

        .trust-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.2);
        }

        .services {
          padding: 6rem 2rem;
          background: var(--white);
          position: relative;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
        }

        .section-label {
          display: inline-block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--terracotta);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--forest);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--gray);
        }

        .services-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: var(--cream);
          padding: 2.5rem;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          border-left: 4px solid var(--terracotta);
        }

        .service-icon {
          width: 50px;
          height: 50px;
          background: var(--forest);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .service-icon svg {
          width: 24px;
          height: 24px;
          stroke: var(--white);
          fill: none;
          stroke-width: 2;
        }

        .service-card h3 {
          font-size: 1.4rem;
          color: var(--forest);
          margin-bottom: 0.75rem;
        }

        .service-card p {
          color: var(--gray);
          font-size: 0.95rem;
        }

        .about {
          padding: 6rem 2rem;
          background: var(--cream);
          position: relative;
          overflow: hidden;
        }

        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: -10%;
          width: 40%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 Q100,150 50,300 T0,600' stroke='%231a3a2f' stroke-width='100' fill='none' opacity='0.03'/%3E%3C/svg%3E") no-repeat center;
          background-size: contain;
          pointer-events: none;
        }

        .about-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image {
          position: relative;
        }

        .about-image-main {
          width: 100%;
          height: 500px;
          background: linear-gradient(145deg, var(--forest-light) 0%, var(--forest) 100%);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--white);
          position: relative;
          overflow: hidden;
        }

        .about-image-main::before {
          content: '';
          position: absolute;
          inset: 20px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
        }

        .about-image-main .icon {
          width: 80px;
          height: 80px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .about-image-main .icon svg {
          width: 36px;
          height: 36px;
          stroke: var(--white);
          fill: none;
          stroke-width: 1.5;
        }

        .about-image-main h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .about-image-main p {
          opacity: 0.8;
          font-size: 1rem;
        }

        .about-accent {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 200px;
          height: 200px;
          background: var(--terracotta);
          border-radius: 8px;
          z-index: -1;
        }

        .about-content h2 {
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: var(--forest);
          margin-bottom: 1.5rem;
        }

        .about-content h2 span {
          color: var(--terracotta);
          font-style: italic;
        }

        .about-text {
          color: var(--gray);
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
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--forest);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--gray);
          margin-top: 0.25rem;
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
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--charcoal);
        }

        .credential svg {
          width: 16px;
          height: 16px;
          stroke: var(--forest);
          fill: none;
          stroke-width: 2;
        }

        .why-choose {
          padding: 6rem 2rem;
          background: var(--forest);
          position: relative;
          overflow: hidden;
        }

        .why-choose::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpattern id='dots' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23ffffff' opacity='0.05'/%3E%3C/pattern%3E%3Crect width='100' height='100' fill='url(%23dots)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .why-choose .section-header {
          position: relative;
          z-index: 1;
        }

        .why-choose .section-label {
          color: var(--gold);
        }

        .why-choose .section-title {
          color: var(--white);
        }

        .why-choose .section-subtitle {
          color: rgba(255,255,255,0.7);
        }

        .why-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .why-card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
        }

        .why-icon {
          width: 60px;
          height: 60px;
          background: var(--terracotta);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .why-icon svg {
          width: 28px;
          height: 28px;
          stroke: var(--white);
          fill: none;
          stroke-width: 2;
        }

        .why-card h3 {
          color: var(--white);
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
        }

        .why-card p {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
        }

        .reviews {
          padding: 6rem 2rem;
          background: var(--white);
        }

        .reviews-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .review-card {
          background: var(--cream);
          padding: 2rem;
          border-radius: 8px;
          position: relative;
        }

        .review-card::before {
          content: '"';
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          color: var(--forest);
          opacity: 0.1;
          line-height: 1;
        }

        .review-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 1rem;
        }

        .review-stars svg {
          width: 18px;
          height: 18px;
          fill: var(--gold);
        }

        .review-text {
          color: var(--charcoal);
          font-size: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .review-avatar {
          width: 48px;
          height: 48px;
          background: var(--forest);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .review-meta strong {
          display: block;
          color: var(--forest);
          font-size: 1rem;
        }

        .review-meta span {
          font-size: 0.85rem;
          color: var(--gray);
        }

        .cta-section {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, var(--cream) 0%, var(--cream-dark) 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 60%;
          height: 200%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M200,0 Q100,150 150,300 T200,600' stroke='%23c4785a' stroke-width='80' fill='none' opacity='0.08'/%3E%3C/svg%3E") no-repeat center;
          background-size: contain;
          pointer-events: none;
        }

        .cta-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cta-inner h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--forest);
          margin-bottom: 1rem;
        }

        .cta-inner p {
          font-size: 1.15rem;
          color: var(--gray);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-phone {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          color: var(--forest);
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          margin-top: 2rem;
        }

        .cta-phone svg {
          width: 24px;
          height: 24px;
          stroke: var(--terracotta);
          fill: none;
          stroke-width: 2;
        }

        .cta-phone a {
          color: inherit;
          text-decoration: none;
        }

        .cta-phone a:hover {
          color: var(--terracotta);
        }

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
          font-size: 2.5rem;
          color: var(--forest);
          margin-bottom: 1rem;
        }

        .contact-info > p {
          color: var(--gray);
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
          background: var(--cream);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-item-icon svg {
          width: 20px;
          height: 20px;
          stroke: var(--forest);
          fill: none;
          stroke-width: 2;
        }

        .contact-item-text strong {
          display: block;
          color: var(--forest);
          margin-bottom: 0.25rem;
        }

        .contact-item-text span,
        .contact-item-text a {
          color: var(--gray);
          text-decoration: none;
        }

        .contact-item-text a:hover {
          color: var(--terracotta);
        }

        .contact-form-card {
          background: var(--cream);
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }

        .contact-form-card h3 {
          font-size: 1.75rem;
          color: var(--forest);
          margin-bottom: 0.5rem;
        }

        .contact-form-card > p {
          color: var(--gray);
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #e0e0e0;
          background: var(--white);
          border-radius: 6px;
          font-family: inherit;
          font-size: 1rem;
          color: var(--charcoal);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--forest);
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

        .form-submit {
          margin-top: 0.5rem;
        }

        .form-submit .btn {
          width: 100%;
          justify-content: center;
        }

        .footer {
          background: var(--forest);
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
          font-size: 1.75rem;
        }

        .footer-brand .logo-sub {
          color: var(--gold);
        }

        .footer-brand p {
          margin-top: 1rem;
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
          max-width: 300px;
        }

        .footer-col h4 {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--gold);
          margin-bottom: 1.25rem;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col ul li {
          margin-bottom: 0.75rem;
        }

        .footer-col ul a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.95rem;
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
          color: rgba(255,255,255,0.5);
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal a {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
        }

        .footer-legal a:hover {
          color: var(--white);
        }

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

          .footer-main {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--white);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }

          .nav-links.active {
            display: flex;
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

          .hero-floating-card {
            position: relative;
            bottom: auto;
            left: auto;
            margin-top: 1.5rem;
          }

          .trust-bar-inner {
            gap: 1.5rem;
          }

          .trust-divider {
            display: none;
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
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">
            <span className="logo-main">All Purpose Painting</span>
            <span className="logo-sub">&amp; Restoration</span>
          </a>
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, '#reviews')}>Reviews</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
            <a href="tel:5105894656" className="btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (510) 589-4656
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
              BuildZoom Top 15% Contractor in California
            </div>
            <h1>Painting Excellence,<br/><span>Since 1999</span></h1>
            <p className="hero-text">From a trusted referral-only company to Fremont&apos;s premier painting contractor. 26+ years of transforming homes with precision, care, and craftsmanship that speaks for itself.</p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-large" onClick={(e) => scrollToSection(e, '#contact')}>Get Free Estimate</a>
              <a href="#services" className="btn btn-outline btn-large" onClick={(e) => scrollToSection(e, '#services')}>View Services</a>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3a2f" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Licensed &amp; Insured</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8934e" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span><strong>4.9&#9733;</strong> on Yelp</span>
              </div>
              <div className="trust-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a3a2f" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>EPA RRP Certified</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-image">
                <div className="hero-image-text">
                  <span className="years">26+</span>
                  <span className="label">Years of Excellence</span>
                </div>
              </div>
              <div className="hero-floating-card">
                <div className="floating-stars">
                  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div className="floating-text">
                  <strong>4.9★ on Yelp</strong>
                  <span>39+ Reviews</span>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div className="trust-badge-text">
              <strong>CA License #901359</strong>
              <span>Painting &amp; Decorating</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <div className="trust-badge-text">
              <strong>EPA RRP Certified</strong>
              <span>Lead-Safe Work Practices</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <div className="trust-badge-text">
              <strong>Fully Insured</strong>
              <span>$15,000 Bonded</span>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <div className="trust-badge-text">
              <strong>BBB A- Rating</strong>
              <span>Accredited Business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Comprehensive Painting &amp; Restoration</h2>
          <p className="section-subtitle">From interior refreshes to complete exterior transformations, we deliver exceptional results using premium Kelly Moore and Sherwin Williams products.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3>Interior Painting</h3>
            <p>Transform your living spaces with flawless interior finishes. Expert color consultation, meticulous prep work, and premium paint application.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Exterior Painting</h3>
            <p>Protect and beautify your home&apos;s exterior with weather-resistant coatings. We handle all prep, repairs, and application for lasting results.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
            </div>
            <h3>Cabinet Refinishing</h3>
            <p>Revitalize your kitchen or bathroom without the cost of replacement. Professional cabinet painting and refinishing that looks factory-fresh.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h3>Drywall Repair</h3>
            <p>Expert sheetrock and drywall repair for holes, cracks, water damage, and texture matching. Seamless repairs that disappear under paint.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
            <h3>Stucco Repairs</h3>
            <p>Restore your home&apos;s stucco exterior to perfect condition. We handle crack repair, patching, and texture matching for invisible repairs.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Bathtub Resurfacing</h3>
            <p>Give your bathroom a fresh look with professional bathtub and shower resurfacing. A cost-effective alternative to replacement.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3>Commercial Painting</h3>
            <p>Professional painting services for offices, retail spaces, and commercial properties. Minimal disruption, maximum impact.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <h3>Residential Repaints</h3>
            <p>Complete home repainting services for homeowners ready for a change. Full prep, premium products, and meticulous application.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-image">
            <div className="about-image-main">
              <div className="icon">
                <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>Chris D&apos;Onofrio</h3>
              <p>Owner &amp; Master Painter</p>
            </div>
            <div className="about-accent"></div>
          </div>
          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2>From Referrals Only to <span>Your Trusted Partner</span></h2>
            <p className="about-text">In 1999, All Purpose Painting began as a simple idea: deliver such exceptional quality that clients couldn&apos;t help but tell their friends. For years, we operated exclusively through word-of-mouth referrals—no advertising, no marketing. Just outstanding work that spoke for itself.</p>
            <p className="about-text">Today, as All Purpose Painting &amp; Restoration, we&apos;ve opened our doors to the entire community while maintaining those same referral-quality standards that built our reputation. Every project receives the same meticulous attention that made our clients our best advertisers.</p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">26+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Yelp Rating</div>
              </div>
              <div className="stat">
                <div className="stat-number">99</div>
                <div className="stat-label">BuildZoom Score</div>
              </div>
            </div>
            <div className="credentials-list">
              <span className="credential">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Licensed Contractor
              </span>
              <span className="credential">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                EPA RRP Certified
              </span>
              <span className="credential">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                Fully Insured
              </span>
              <span className="credential">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                $15K Bonded
              </span>
              <span className="credential">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                CPR/First Aid
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">The All Purpose Difference</h2>
          <p className="section-subtitle">What sets us apart from other painting contractors in the Bay Area</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>26+ Years Experience</h3>
            <p>Over two decades of painting and construction expertise. We&apos;ve seen it all and can handle any challenge.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Fully Licensed &amp; Insured</h3>
            <p>CA License #901359, comprehensive insurance through Heffernan, and $15,000 bond for your protection.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>Top-Rated Service</h3>
            <p>4.9 stars on Yelp, 5 stars on Houzz, A- BBB rating, and 25+ Nextdoor recommendations.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <h3>EPA Lead-Safe Certified</h3>
            <p>RRP certified for safe renovation practices, especially important for older homes in Fremont.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
            <h3>Flexible Payment</h3>
            <p>We accept all major credit cards for your convenience. Easy payment options for every budget.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3>Clear Communication</h3>
            <p>Detailed quotes, project timelines, and consistent updates. No surprises, just transparency.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews" id="reviews">
        <div className="section-header">
          <span className="section-label">Client Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Don&apos;t just take our word for it—hear from homeowners who trusted us with their projects</p>
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
            <p className="review-text">Chris and his team did an outstanding job on our entire home interior. Their attention to detail was remarkable, and they went above and beyond to ensure every surface was perfect. Highly recommend!</p>
            <div className="review-author">
              <div className="review-avatar">JM</div>
              <div className="review-meta">
                <strong>Jennifer M.</strong>
                <span>Fremont, CA &bull; via Yelp</span>
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
            <p className="review-text">We hired All Purpose for our exterior painting and couldn&apos;t be happier. Professional from start to finish, great communication, and the quality of work exceeded our expectations. Our house looks brand new!</p>
            <div className="review-author">
              <div className="review-avatar">RK</div>
              <div className="review-meta">
                <strong>Robert K.</strong>
                <span>Newark, CA &bull; via Houzz</span>
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
            <p className="review-text">Chris refinished our kitchen cabinets and they look absolutely stunning. He was meticulous about prep work and the finish is flawless. Saved us thousands compared to replacing them. Will definitely use again!</p>
            <div className="review-author">
              <div className="review-avatar">SL</div>
              <div className="review-meta">
                <strong>Sarah L.</strong>
                <span>Union City, CA &bull; via Nextdoor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="section-label">Ready to Transform Your Space?</span>
          <h2>Get Your Free Estimate Today</h2>
          <p>Join hundreds of satisfied Bay Area homeowners who trusted All Purpose Painting &amp; Restoration with their homes. No pressure, no obligation—just honest advice and fair pricing.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-large" onClick={(e) => scrollToSection(e, '#contact')}>Request Free Estimate</a>
            <a href="tel:5105894656" className="btn btn-outline btn-large">Call Now</a>
          </div>
          <div className="cta-phone">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:5105894656">(510) 589-4656</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <span className="section-label">Get In Touch</span>
            <h2>Let&apos;s Discuss Your Project</h2>
            <p>Ready to transform your space? Contact us for a free, no-obligation estimate. We&apos;ll visit your property, discuss your vision, and provide a detailed quote.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Phone</strong>
                  <a href="tel:5105894656">(510) 589-4656</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Location</strong>
                  <span>4242 Becerra Dr, Fremont, CA 94536</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="contact-item-text">
                  <strong>Hours</strong>
                  <span>Mon - Sat: 8am - 6pm</span>
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
            <h3>Request Your Free Estimate</h3>
            <p>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service">
                  <option value="">Select a service...</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="cabinet">Cabinet Refinishing</option>
                  <option value="drywall">Drywall Repair</option>
                  <option value="stucco">Stucco Repairs</option>
                  <option value="bathtub">Bathtub Resurfacing</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" placeholder="Tell us about your project, timeline, and any specific requirements..."></textarea>
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
                <span className="logo-main">All Purpose Painting</span>
                <span className="logo-sub">&amp; Restoration</span>
              </a>
              <p>Serving the Bay Area with premium painting and restoration services since 1999. Licensed, insured, and committed to excellence.</p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Interior Painting</a></li>
                <li><a href="#services">Exterior Painting</a></li>
                <li><a href="#services">Cabinet Refinishing</a></li>
                <li><a href="#services">Drywall Repair</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="tel:5105894656">Get Estimate</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Service Areas</h4>
              <ul>
                <li><a href="#">Fremont, CA</a></li>
                <li><a href="#">Newark, CA</a></li>
                <li><a href="#">Union City, CA</a></li>
                <li><a href="#">Hayward, CA</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 All Purpose Painting &amp; Restoration. CA License #901359. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

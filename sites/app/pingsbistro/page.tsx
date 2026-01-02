'use client';

import { useState, useEffect } from 'react';

export default function PingsBistroPage() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [showOverlay, setShowOverlay] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('pings-lang');
    if (saved) {
      setLang(saved as 'en' | 'zh');
      setShowOverlay(false);
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectLanguage = (l: 'en' | 'zh') => {
    setLang(l);
    setShowOverlay(false);
    localStorage.setItem('pings-lang', l);
  };

  const t = (en: string, zh: string) => lang === 'en' ? en : zh;

  return (
    <>
      <style jsx global>{`
        :root {
          --bg-warm: #FAF7F2;
          --bg-cream: #F5EFE6;
          --crimson: #B8293D;
          --crimson-dark: #8C1F2E;
          --crimson-light: #D4424F;
          --gold: #C9A227;
          --gold-light: #E8D5A3;
          --charcoal: #1A1A1A;
          --ink: #2C2C2C;
          --text-secondary: #5A5A5A;
          --white: #FFFFFF;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        /* Skip to content - accessibility */
        .skip-to-content { position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden; z-index: 10001; }
        .skip-to-content:focus { position: fixed; top: 0; left: 0; width: auto; height: auto; padding: 1rem 1.5rem; background: var(--charcoal); color: var(--white); font-weight: 600; text-decoration: none; outline: 2px solid var(--gold); }

        /* Prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
          html { scroll-behavior: auto; }
        }
        body {
          font-family: 'Outfit', sans-serif;
          background-color: var(--bg-warm);
          color: var(--charcoal);
          line-height: 1.6;
          overflow-x: hidden;
        }
        h1, h2, h3, .display { font-family: 'Cormorant Garamond', serif; font-weight: 500; }
        .chinese-text { font-family: 'Noto Serif SC', serif; }

        .language-overlay {
          position: fixed; inset: 0; background: var(--charcoal); z-index: 10000;
          display: flex; align-items: center; justify-content: center;
          transition: opacity 0.6s ease, visibility 0.6s ease;
        }
        .language-overlay.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
        .language-selector { text-align: center; animation: fadeInUp 0.8s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .language-logo { font-family: 'Noto Serif SC', serif; font-size: 2rem; color: var(--gold); margin-bottom: 0.5rem; letter-spacing: 0.1em; }
        .language-logo-en { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: var(--white); margin-bottom: 3rem; letter-spacing: 0.15em; opacity: 0.8; }
        .language-prompt { font-size: 1rem; color: rgba(255,255,255,0.6); margin-bottom: 2rem; letter-spacing: 0.1em; }
        .language-buttons { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }
        .lang-btn {
          background: transparent; border: 1px solid rgba(255,255,255,0.3); color: var(--white);
          padding: 1.5rem 3rem; border-radius: 8px; cursor: pointer; transition: all 0.4s;
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem; min-width: 160px;
        }
        .lang-btn:hover { background: var(--crimson); border-color: var(--crimson); transform: translateY(-5px); box-shadow: 0 20px 40px rgba(184,41,61,0.3); }
        .lang-btn-primary { font-family: 'Noto Serif SC', serif; font-size: 1.5rem; font-weight: 600; }
        .lang-btn-secondary { font-size: 0.85rem; opacity: 0.7; letter-spacing: 0.05em; }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 1.5rem 4rem; display: flex; justify-content: space-between; align-items: center;
          background: rgba(250,247,242,0.95); backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        nav.scrolled { padding: 1rem 4rem; box-shadow: 0 4px 30px rgba(26,26,26,0.05); }
        .logo { display: flex; flex-direction: column; align-items: flex-start; }
        .logo-chinese { font-family: 'Noto Serif SC', serif; font-size: 1.4rem; font-weight: 600; color: var(--crimson); letter-spacing: 0.1em; }
        .logo-english { font-family: 'Cormorant Garamond', serif; font-size: 0.9rem; color: var(--text-secondary); letter-spacing: 0.08em; }
        .nav-links { display: flex; gap: 3rem; list-style: none; }
        .nav-links a { text-decoration: none; color: var(--text-secondary); font-size: 0.9rem; font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; position: relative; transition: color 0.3s; }
        .nav-links a:hover { color: var(--crimson); }
        .nav-right { display: flex; align-items: center; gap: 1.5rem; }
        .lang-toggle { background: none; border: 1px solid var(--gold-light); color: var(--charcoal); padding: 0.5rem 1rem; border-radius: 100px; font-size: 0.8rem; cursor: pointer; transition: all 0.3s; font-family: 'Noto Serif SC', serif; }
        .lang-toggle:hover { background: var(--gold-light); }
        .nav-cta { background: var(--crimson); color: var(--white); padding: 0.8rem 2rem; border-radius: 100px; text-decoration: none; font-size: 0.85rem; font-weight: 500; letter-spacing: 0.03em; transition: all 0.3s; }
        .nav-cta:hover { background: var(--crimson-dark); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(184,41,61,0.25); }

        .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; padding: 8rem 4rem 4rem; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; top: -30%; right: -10%; width: 60%; height: 120%; background: radial-gradient(ellipse, var(--gold-light) 0%, transparent 60%); opacity: 0.3; z-index: 0; }
        .hero-content { display: flex; flex-direction: column; justify-content: center; padding-right: 4rem; z-index: 2; animation: fadeInUp 1s ease-out; }
        .hero-tag { display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, var(--crimson), var(--crimson-dark)); color: var(--white); padding: 0.5rem 1.2rem; border-radius: 100px; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; width: fit-content; margin-bottom: 2rem; }
        .hero h1 { font-size: clamp(2.8rem, 5vw, 4.5rem); line-height: 1.15; color: var(--charcoal); margin-bottom: 1.5rem; }
        .hero h1 .chinese-title { font-family: 'Noto Serif SC', serif; display: block; color: var(--crimson); font-size: 0.6em; margin-bottom: 0.3em; letter-spacing: 0.15em; }
        .hero h1 span.accent { color: var(--crimson); font-style: italic; }
        .hero-description { font-size: 1.15rem; color: var(--text-secondary); max-width: 480px; margin-bottom: 2.5rem; line-height: 1.8; }
        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { background: var(--crimson); color: var(--white); padding: 1.1rem 2.5rem; border-radius: 100px; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: all 0.3s; display: inline-flex; align-items: center; gap: 0.5rem; }
        .btn-primary:hover { background: var(--crimson-dark); transform: translateY(-3px); box-shadow: 0 15px 40px rgba(184,41,61,0.3); }
        .btn-secondary { background: transparent; color: var(--charcoal); padding: 1.1rem 2.5rem; border-radius: 100px; text-decoration: none; font-size: 0.95rem; font-weight: 500; border: 1.5px solid var(--charcoal); transition: all 0.3s; display: inline-flex; align-items: center; gap: 0.5rem; }
        .btn-secondary:hover { background: var(--charcoal); color: var(--white); }

        .hero-image { position: relative; display: flex; align-items: center; justify-content: center; z-index: 2; animation: fadeInUp 1s ease-out 0.2s both; }
        .hero-image-container { position: relative; width: 100%; max-width: 520px; }
        .hero-img-main { width: 100%; height: 580px; background: linear-gradient(145deg, var(--crimson-light), var(--crimson-dark)); border-radius: 300px 300px 30px 30px; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 40px 80px rgba(184,41,61,0.2); position: relative; }
        .hero-img-main img { width: 90%; height: 90%; object-fit: cover; border-radius: 280px 280px 20px 20px; position: relative; z-index: 1; }
        .floating-card { position: absolute; background: var(--white); border-radius: 20px; padding: 1.2rem 1.5rem; box-shadow: 0 20px 50px rgba(0,0,0,0.12); animation: float 4s ease-in-out infinite; z-index: 10; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .floating-card.card-1 { top: 18%; left: -50px; animation-delay: 0s; }
        .floating-card.card-2 { bottom: 22%; right: -30px; animation-delay: 1s; }
        .floating-card-icon { width: 44px; height: 44px; background: linear-gradient(135deg, var(--gold-light), var(--gold)); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; font-size: 1.2rem; }
        .floating-card-label { font-size: 0.7rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
        .floating-card-value { font-family: 'Noto Serif SC', serif; font-size: 1.2rem; color: var(--crimson); font-weight: 600; }

        .signature { padding: 8rem 4rem; background: var(--charcoal); color: var(--white); position: relative; overflow: hidden; }
        .signature::before { content: '湘'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: 'Noto Serif SC', serif; font-size: 40vw; color: rgba(255,255,255,0.02); pointer-events: none; }
        .section-header { text-align: center; max-width: 650px; margin: 0 auto 5rem; position: relative; z-index: 1; }
        .section-tag { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--gold); margin-bottom: 1rem; display: block; }
        .section-header h2 { font-size: clamp(2.2rem, 4vw, 3rem); color: var(--white); line-height: 1.2; }
        .section-header h2 .chinese-subtitle { font-family: 'Noto Serif SC', serif; display: block; font-size: 0.5em; color: var(--gold); margin-top: 0.5em; letter-spacing: 0.2em; }

        .signature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .signature-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; overflow: hidden; transition: all 0.4s; cursor: pointer; }
        .signature-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.06); box-shadow: 0 30px 60px rgba(0,0,0,0.3); }
        .signature-card-image { height: 240px; background: linear-gradient(135deg, var(--crimson), var(--crimson-dark)); position: relative; overflow: hidden; }
        .signature-card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
        .signature-card:hover .signature-card-image img { transform: scale(1.1); }
        .signature-card-content { padding: 1.8rem; }
        .signature-card-tag { display: inline-block; background: rgba(201,162,39,0.2); color: var(--gold); padding: 0.3rem 0.8rem; border-radius: 100px; font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.8rem; }
        .signature-card h3 { font-size: 1.1rem; color: var(--white); margin-bottom: 0.3rem; }
        .signature-card .chinese-name { font-family: 'Noto Serif SC', serif; font-size: 1.3rem; color: var(--gold); margin-bottom: 0.8rem; letter-spacing: 0.1em; }
        .signature-card p { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; margin-bottom: 1rem; }
        .signature-card-price { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: var(--crimson-light); font-weight: 600; }

        .values { padding: 8rem 4rem; background: var(--white); position: relative; }
        .values .section-header h2 { color: var(--charcoal); }
        .values .section-header h2 .chinese-subtitle { color: var(--crimson); }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; max-width: 1100px; margin: 0 auto; }
        .value-card { text-align: center; padding: 3rem 2rem; border-radius: 24px; background: var(--bg-warm); transition: all 0.4s; position: relative; overflow: hidden; }
        .value-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--gold), var(--crimson)); transform: scaleX(0); transition: transform 0.4s; }
        .value-card:hover::before { transform: scaleX(1); }
        .value-card:hover { transform: translateY(-8px); box-shadow: 0 25px 50px rgba(184,41,61,0.1); }
        .value-icon { width: 80px; height: 80px; background: var(--white); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.06); font-size: 2rem; }
        .value-card h3 { font-size: 1.4rem; color: var(--charcoal); margin-bottom: 0.5rem; }
        .value-card .chinese-label { font-family: 'Noto Serif SC', serif; font-size: 1rem; color: var(--crimson); margin-bottom: 1rem; letter-spacing: 0.1em; }
        .value-card p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7; }

        .reviews { padding: 8rem 4rem; background: var(--bg-cream); position: relative; }
        .reviews .section-header h2 { color: var(--charcoal); }
        .reviews .section-header h2 .chinese-subtitle { color: var(--crimson); }
        .stats-bar { display: flex; justify-content: center; gap: 4rem; margin-bottom: 4rem; padding: 2rem; background: var(--white); border-radius: 20px; max-width: 800px; margin-left: auto; margin-right: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.05); flex-wrap: wrap; }
        .stat-item { text-align: center; }
        .stat-number { font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 600; color: var(--crimson); line-height: 1; }
        .stat-label { font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.3rem; }
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 1200px; margin: 0 auto; }
        .review-card { background: var(--white); border-radius: 24px; padding: 2rem; transition: all 0.3s; }
        .review-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.08); }
        .review-stars { color: var(--gold); font-size: 1.1rem; margin-bottom: 1rem; }
        .review-text { font-size: 1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem; font-style: italic; }
        .review-author { display: flex; align-items: center; gap: 1rem; }
        .review-avatar { width: 48px; height: 48px; background: linear-gradient(135deg, var(--crimson-light), var(--crimson)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: var(--white); font-weight: 600; }
        .review-name { font-weight: 500; color: var(--charcoal); }
        .review-source { font-size: 0.85rem; color: var(--text-secondary); }

        .location-cta { padding: 8rem 4rem; background: var(--white); }
        .location-container { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .location-content h2 { font-size: clamp(2rem, 3.5vw, 2.6rem); color: var(--charcoal); margin-bottom: 1rem; line-height: 1.2; }
        .location-content h2 .chinese-subtitle { font-family: 'Noto Serif SC', serif; display: block; font-size: 0.55em; color: var(--crimson); margin-top: 0.5em; letter-spacing: 0.15em; }
        .location-content p { color: var(--text-secondary); font-size: 1.05rem; margin-bottom: 2rem; line-height: 1.7; }
        .location-details { background: var(--bg-warm); border-radius: 20px; padding: 1.5rem; margin-bottom: 2rem; }
        .location-item { display: flex; align-items: flex-start; gap: 1rem; padding: 1rem 0; }
        .location-item:not(:last-child) { border-bottom: 1px solid var(--gold-light); }
        .location-item-icon { width: 40px; height: 40px; background: var(--white); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1.2rem; }
        .location-item-text { flex: 1; }
        .location-item-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-secondary); margin-bottom: 0.2rem; }
        .location-item-value { font-size: 0.95rem; color: var(--charcoal); font-weight: 500; }
        .location-map { height: 450px; background: linear-gradient(145deg, var(--gold-light), var(--gold)); border-radius: 30px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
        .map-pin { width: 70px; height: 70px; background: var(--crimson); border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; box-shadow: 0 15px 40px rgba(184,41,61,0.4); animation: bounce 2s ease-in-out infinite; font-size: 1.5rem; }
        @keyframes bounce { 0%, 100% { transform: rotate(-45deg) translateY(0); } 50% { transform: rotate(-45deg) translateY(-12px); } }
        .map-pin span { transform: rotate(45deg); }

        footer { background: var(--charcoal); color: var(--white); padding: 5rem 4rem 2rem; }
        .footer-grid { display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: 4rem; max-width: 1200px; margin: 0 auto; padding-bottom: 4rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .footer-brand .logo-chinese { font-family: 'Noto Serif SC', serif; color: var(--gold); font-size: 1.8rem; margin-bottom: 0.3rem; display: block; }
        .footer-brand .logo-english { font-family: 'Cormorant Garamond', serif; color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; display: block; }
        .footer-brand p { color: rgba(255,255,255,0.6); font-size: 0.95rem; line-height: 1.7; max-width: 300px; }
        .footer-column h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; margin-bottom: 1.5rem; color: var(--white); }
        .footer-column ul { list-style: none; }
        .footer-column li { margin-bottom: 0.8rem; }
        .footer-column a { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.9rem; transition: color 0.3s; }
        .footer-column a:hover { color: var(--gold); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding-top: 2rem; flex-wrap: wrap; gap: 1rem; }
        .footer-bottom p { color: rgba(255,255,255,0.5); font-size: 0.85rem; }

        @media (max-width: 1024px) {
          nav { padding: 1rem 2rem; }
          .nav-links { display: none; }
          .hero { grid-template-columns: 1fr; padding: 7rem 2rem 3rem; min-height: auto; }
          .hero-content { padding-right: 0; text-align: center; align-items: center; }
          .hero-buttons { justify-content: center; }
          .hero-image { margin-top: 3rem; }
          .signature-grid, .values-grid, .reviews-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-bar { flex-wrap: wrap; gap: 2rem; }
          .location-container { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .language-buttons { flex-direction: column; }
          .hero h1 { font-size: 2.2rem; }
          .signature-grid, .values-grid, .reviews-grid { grid-template-columns: 1fr; }
          .hero-buttons { flex-direction: column; width: 100%; }
          .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
          .floating-card { display: none; }
          .footer-grid { grid-template-columns: 1fr; }
          .stats-bar { flex-direction: column; gap: 1.5rem; }
        }
      `}</style>

      {/* Skip to content link - accessibility */}
      <a href="#main-content" className="skip-to-content">
        {lang === 'en' ? 'Skip to main content' : '跳至主要内容'}
      </a>

      {/* Language Overlay */}
      <div className={`language-overlay ${!showOverlay ? 'hidden' : ''}`}>
        <div className="language-selector">
          <div className="language-logo">留湘老店</div>
          <div className="language-logo-en">PING&apos;S BISTRO</div>
          <p className="language-prompt">Select your language / 选择语言</p>
          <div className="language-buttons">
            <button className="lang-btn" onClick={() => selectLanguage('en')}>
              <span className="lang-btn-primary">English</span>
              <span className="lang-btn-secondary">Continue in English</span>
            </button>
            <button className="lang-btn" onClick={() => selectLanguage('zh')}>
              <span className="lang-btn-primary">中文</span>
              <span className="lang-btn-secondary">继续使用中文</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="logo">
          <span className="logo-chinese">留湘老店</span>
          <span className="logo-english">Ping&apos;s Bistro</span>
        </div>
        <ul className="nav-links">
          <li><a href="#menu">{t('Menu', '菜单')}</a></li>
          <li><a href="#about">{t('Our Story', '关于我们')}</a></li>
          <li><a href="#reviews">{t('Reviews', '评价')}</a></li>
          <li><a href="#location">{t('Location', '地址')}</a></li>
        </ul>
        <div className="nav-right">
          <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <a href="https://www.ordertogo.com/restaurants/pbfr/mesh" className="nav-cta" target="_blank" rel="noreferrer">
            {t('Order Now', '立即下单')}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main id="main-content">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">{t("Fremont's Favorite", '弗里蒙特人气餐厅')}</span>
          <h1>
            <span className="chinese-title">正宗湘菜</span>
            {t('Authentic Hunan', '地道湘味')}<br/>
            <span className="accent">{t('fire & flavor', '麻辣鲜香')}</span>
          </h1>
          <p className="hero-description">
            {t(
              'Experience the bold, fiery flavors of Hunan cuisine. Fresh ingredients, masterful technique, and recipes passed down through generations.',
              '体验湘菜的浓烈风味与热情。新鲜食材，精湛厨艺，世代传承的经典配方。'
            )}
          </p>
          <div className="hero-buttons">
            <a href="https://www.ordertogo.com/restaurants/pbfr/mesh" className="btn-primary" target="_blank" rel="noreferrer">
              {t('Order Online', '在线点餐')} →
            </a>
            <a href="#menu" className="btn-secondary">
              {t('View Menu', '浏览菜单')}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="hero-img-main">
              <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&h=700&fit=crop" alt="Hunan Cuisine" />
            </div>
            <div className="floating-card card-1">
              <div className="floating-card-icon">⭐</div>
              <span className="floating-card-label">Yelp Rating</span>
              <span className="floating-card-value">4.5 星</span>
            </div>
            <div className="floating-card card-2">
              <div className="floating-card-icon">👥</div>
              <span className="floating-card-label">Reviews</span>
              <span className="floating-card-value">395+ 评价</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="signature" id="menu">
        <div className="section-header">
          <span className="section-tag">{t('Signature Dishes', '招牌菜品')}</span>
          <h2>
            {t('The flavors that made us famous', '让我们闻名的经典味道')}
            <span className="chinese-subtitle">经典招牌 · 必点推荐</span>
          </h2>
        </div>
        <div className="signature-grid">
          <div className="signature-card">
            <div className="signature-card-image">
              <img src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop" alt="Hunan Style Sautéed Beef" />
            </div>
            <div className="signature-card-content">
              <span className="signature-card-tag">{t("Chef's Pick", '主厨推荐')}</span>
              <h3>{t('Hunan Style Sautéed Beef', '湘式小炒牛肉')}</h3>
              <div className="chinese-name">小炒黄牛肉</div>
              <p>{t('Tender beef wok-seared with fresh chilies, creating the perfect balance of heat and savory depth.', '嫩牛肉与新鲜辣椒爆炒，完美平衡辣味与鲜香。')}</p>
              <span className="signature-card-price">$33.75</span>
            </div>
          </div>
          <div className="signature-card">
            <div className="signature-card-image">
              <img src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&h=300&fit=crop" alt="Fish Fillet with Flaming Chili Oil" />
            </div>
            <div className="signature-card-content">
              <span className="signature-card-tag">{t('Spicy', '辣味')}</span>
              <h3>{t('Fish Fillet with Flaming Chili Oil', '沸腾鱼片')}</h3>
              <div className="chinese-name">沸腾鱼片</div>
              <p>{t('Silky basa fish swimming in an ocean of intense, aromatic chili oil. A must for spice lovers.', '嫩滑鱼片浸在浓郁香辣的辣椒油中，嗜辣者必点。')}</p>
              <span className="signature-card-price">$40.00</span>
            </div>
          </div>
          <div className="signature-card">
            <div className="signature-card-image">
              <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop" alt="Chongqing Style Spicy Chicken" />
            </div>
            <div className="signature-card-content">
              <span className="signature-card-tag">{t('Classic', '经典')}</span>
              <h3>{t('Chongqing Style Spicy Chicken', '重庆辣子鸡')}</h3>
              <div className="chinese-name">重庆辣子鸡</div>
              <p>{t('Crispy chicken buried beneath a mountain of dried chilies. Fragrant, fiery, unforgettable.', '酥脆鸡块埋藏在干辣椒山下，香辣难忘。')}</p>
              <span className="signature-card-price">$30.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values" id="about">
        <div className="section-header">
          <span className="section-tag">{t('Our Philosophy', '我们的理念')}</span>
          <h2>
            {t('Hunan tradition, Bay Area fresh', '湘菜传统，湾区新鲜')}
            <span className="chinese-subtitle">传承 · 创新 · 品质</span>
          </h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🕐</div>
            <h3>{t('Fresh Daily', '每日新鲜')}</h3>
            <div className="chinese-label">新鲜食材</div>
            <p>{t('Premium ingredients sourced fresh every morning. No shortcuts, no compromises—just pure, authentic flavors.', '每天清晨采购优质食材。绝不妥协，只为呈现最纯正的地道风味。')}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">📜</div>
            <h3>{t('Authentic Recipes', '正宗配方')}</h3>
            <div className="chinese-label">世代传承</div>
            <p>{t('Time-honored techniques passed down through generations. True Hunan fire and flavor in every dish.', '世代传承的烹饪技艺。每道菜都呈现真正的湘菜麻辣鲜香。')}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>{t('Made with Love', '用心烹制')}</h3>
            <div className="chinese-label">匠心独运</div>
            <p>{t("Every dish crafted with care and passion. We treat each plate as if we're cooking for family.", '每道菜都倾注心血与热情。我们像为家人烹饪一样用心。')}</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews" id="reviews">
        <div className="section-header">
          <span className="section-tag">{t('What People Say', '顾客评价')}</span>
          <h2>
            {t('Loved by the community', '深受社区喜爱')}
            <span className="chinese-subtitle">真实评价 · 口碑相传</span>
          </h2>
        </div>
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-number">4.5</div>
            <div className="stat-label">Yelp Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">395+</div>
            <div className="stat-label">{t('Reviews', '评价')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1200+</div>
            <div className="stat-label">{t('Photos', '照片')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">{t('Years', '年')}</div>
          </div>
        </div>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">{t('"The Hunan Style Sautéed Beef is absolutely incredible. Perfect amount of spice and the beef is so tender. Best Chinese food in the Bay Area!"', '"小炒黄牛肉绝对令人惊艳。辣度恰到好处，牛肉非常嫩。湾区最好的中餐！"')}</p>
            <div className="review-author">
              <div className="review-avatar">M</div>
              <div>
                <div className="review-name">Michelle T.</div>
                <div className="review-source">Yelp Elite</div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">{t('"Finally found authentic Hunan cuisine! The spicy grilled fish is a masterpiece. The wait is worth it—make a reservation!"', '"终于找到正宗湘菜！麻辣烤鱼堪称杰作。等待是值得的——记得预约！"')}</p>
            <div className="review-author">
              <div className="review-avatar">J</div>
              <div>
                <div className="review-name">Jason L.</div>
                <div className="review-source">Google Review</div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">{t('"My family\'s go-to spot! The portions are generous and everything tastes homemade. Love the Chongqing chicken!"', '"我们全家的首选餐厅！份量很足，每道菜都像家常菜一样好吃。超爱重庆辣子鸡！"')}</p>
            <div className="review-author">
              <div className="review-avatar">S</div>
              <div>
                <div className="review-name">Sarah W.</div>
                <div className="review-source">Yelp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location-cta" id="location">
        <div className="location-container">
          <div className="location-content">
            <h2>
              {t('Visit us today', '今天就来品尝')}
              <span className="chinese-subtitle">欢迎光临</span>
            </h2>
            <p>{t('Located in the Charter Square Shopping Center in Fremont. Due to high demand, reservations are highly recommended for dinner and weekends.', '位于弗里蒙特Charter Square购物中心。由于人气火爆，建议提前预约晚餐和周末时段。')}</p>
            <div className="location-details">
              <div className="location-item">
                <div className="location-item-icon">📍</div>
                <div className="location-item-text">
                  <div className="location-item-label">{t('Address', '地址')}</div>
                  <div className="location-item-value">34145 Fremont Blvd, Fremont, CA 94555</div>
                </div>
              </div>
              <div className="location-item">
                <div className="location-item-icon">🕐</div>
                <div className="location-item-text">
                  <div className="location-item-label">{t('Hours', '营业时间')}</div>
                  <div className="location-item-value">
                    {t('Mon, Wed-Sun: 11am-2pm, 5pm-8:15pm', '周一、周三至周日: 11am-2pm, 5pm-8:15pm')}<br/>
                    {t('Closed Tuesday', '周二休息')}
                  </div>
                </div>
              </div>
              <div className="location-item">
                <div className="location-item-icon">📞</div>
                <div className="location-item-text">
                  <div className="location-item-label">{t('Phone', '电话')}</div>
                  <div className="location-item-value">(510) 744-9988</div>
                </div>
              </div>
            </div>
            <a href="https://www.ordertogo.com/restaurants/pbfr/mesh" className="btn-primary" target="_blank" rel="noreferrer">
              {t('Order Online Now', '立即在线点餐')} →
            </a>
          </div>
          <div className="location-map">
            <div className="map-pin"><span>📍</span></div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo-chinese chinese-text">留湘老店</span>
            <span className="logo-english">Ping&apos;s Bistro · Fremont</span>
            <p>{t('Bringing the authentic fire and flavor of Hunan cuisine to the Bay Area since 2014.', '自2014年起，将正宗湘菜的麻辣鲜香带到湾区。')}</p>
          </div>
          <div className="footer-column">
            <h4>{t('Quick Links', '快速链接')}</h4>
            <ul>
              <li><a href="#menu">{t('Menu', '菜单')}</a></li>
              <li><a href="#about">{t('About Us', '关于我们')}</a></li>
              <li><a href="#reviews">{t('Reviews', '评价')}</a></li>
              <li><a href="#location">{t('Location', '地址')}</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t('Order', '点餐')}</h4>
            <ul>
              <li><a href="https://www.ordertogo.com/restaurants/pbfr/mesh" target="_blank" rel="noreferrer">OrderToGo</a></li>
              <li><a href="https://www.doordash.com/store/pings-bistro-518067/" target="_blank" rel="noreferrer">DoorDash</a></li>
              <li><a href="#">Uber Eats</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t('Contact', '联系我们')}</h4>
            <ul>
              <li><a href="tel:+15107449988">(510) 744-9988</a></li>
              <li><a href="https://www.yelp.com/biz/pings-bistro-fremont" target="_blank" rel="noreferrer">Yelp</a></li>
              <li><a href="https://pingsbistro.net/" target="_blank" rel="noreferrer">{t('Official Site', '官方网站')}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Ping&apos;s Bistro · 留湘老店. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

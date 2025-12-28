'use client';

import { useEffect, useState } from 'react';

export default function YSGPage() {
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-idx') || '0');
            setVisible((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el, i) => {
      el.setAttribute('data-idx', i.toString());
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --saffron: #D4A73A;
          --saffron-light: #E8C968;
          --burgundy: #8B2635;
          --burgundy-dark: #5C1A24;
          --charcoal: #1A1A1A;
          --charcoal-light: #2D2D2D;
          --cream: #F5F0E8;
          --cream-dark: #E8E0D4;
          --white: #FFFFFF;
          --green-halal: #2D5A27;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        /* Skip to content - accessibility */
        .skip-to-content { position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden; z-index: 10001; }
        .skip-to-content:focus { position: fixed; top: 0; left: 0; width: auto; height: auto; padding: 1rem 1.5rem; background: var(--charcoal); color: var(--cream); font-weight: 600; text-decoration: none; outline: 2px solid var(--saffron); }

        /* Prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
          html { scroll-behavior: auto; }
        }
        body { font-family: 'Outfit', sans-serif; background: var(--charcoal); color: var(--cream); line-height: 1.6; overflow-x: hidden; }

        .truck-art-border { height: 12px; background: linear-gradient(135deg, var(--saffron) 25%, transparent 25%) -10px 0, linear-gradient(225deg, var(--saffron) 25%, transparent 25%) -10px 0, linear-gradient(315deg, var(--burgundy) 25%, transparent 25%), linear-gradient(45deg, var(--burgundy) 25%, transparent 25%); background-size: 20px 12px; background-color: var(--charcoal); }

        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; background: rgba(26,26,26,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(212,167,58,0.2); }
        .nav-logo { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; color: var(--saffron); text-decoration: none; letter-spacing: 2px; display: flex; flex-direction: column; }
        .nav-logo span { color: var(--cream); font-family: 'Outfit', sans-serif; font-size: 0.75rem; letter-spacing: 3px; margin-top: -5px; }
        .nav-links { display: flex; gap: 2rem; align-items: center; }
        .nav-links a { color: var(--cream); text-decoration: none; font-weight: 500; font-size: 0.9rem; letter-spacing: 1px; transition: color 0.3s; }
        .nav-links a:hover { color: var(--saffron); }
        .nav-cta { background: var(--burgundy); color: var(--cream); padding: 0.7rem 1.5rem; font-weight: 600; border: 2px solid var(--burgundy); transition: all 0.3s; text-decoration: none; }
        .nav-cta:hover { background: transparent; color: var(--saffron); border-color: var(--saffron); }

        .hero { min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden; padding: 8rem 2rem; }
        .hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 80%, rgba(139,38,53,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(212,167,58,0.2) 0%, transparent 40%), linear-gradient(180deg, var(--charcoal) 0%, var(--charcoal-light) 100%); }
        .hero-content { position: relative; z-index: 2; max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .hero-text { animation: slideInLeft 1s ease-out; }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--green-halal); color: var(--white); padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2rem; border: 1px solid rgba(255,255,255,0.2); }
        .hero-badge::before { content: '✓'; background: var(--white); color: var(--green-halal); width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; }
        .hero h1 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(4rem, 10vw, 8rem); line-height: 0.9; letter-spacing: 3px; color: var(--cream); margin-bottom: 1rem; }
        .hero h1 .highlight { color: var(--saffron); display: block; }
        .hero-tagline { font-size: 1.3rem; color: var(--cream-dark); margin-bottom: 2rem; font-weight: 300; max-width: 500px; }
        .hero-tagline strong { color: var(--saffron); font-weight: 600; }
        .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; font-size: 1rem; font-weight: 600; text-decoration: none; letter-spacing: 1px; transition: all 0.3s; cursor: pointer; border: none; }
        .btn-primary { background: var(--saffron); color: var(--charcoal); }
        .btn-primary:hover { background: var(--saffron-light); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(212,167,58,0.3); }
        .btn-secondary { background: transparent; color: var(--cream); border: 2px solid var(--cream); }
        .btn-secondary:hover { background: var(--cream); color: var(--charcoal); }
        .hero-stats { display: flex; gap: 4rem; flex-wrap: wrap; }
        .hero-stat-value { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; color: var(--saffron); line-height: 1; }
        .hero-stat-label { font-size: 0.8rem; color: var(--cream-dark); letter-spacing: 1px; }
        .hero-image { position: relative; animation: slideInRight 1s ease-out 0.3s both; }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        .hero-image-wrapper { position: relative; aspect-ratio: 1; max-width: 500px; margin: 0 auto; }
        .hero-image-main { width: 100%; height: 100%; background: linear-gradient(135deg, var(--charcoal-light) 0%, var(--burgundy-dark) 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid var(--saffron); box-shadow: 0 0 0 15px rgba(212,167,58,0.1), 0 30px 60px rgba(0,0,0,0.5); font-size: 10rem; }
        .hero-floating-tag { position: absolute; background: var(--burgundy); color: var(--cream); padding: 0.8rem 1.2rem; font-weight: 600; font-size: 0.85rem; animation: float 3s ease-in-out infinite; white-space: nowrap; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .hero-floating-tag:nth-child(2) { top: 10%; right: -10%; }
        .hero-floating-tag:nth-child(3) { bottom: 20%; left: -15%; animation-delay: 1s; background: var(--saffron); color: var(--charcoal); }
        .hero-floating-tag:nth-child(4) { bottom: 5%; right: 5%; animation-delay: 2s; background: var(--green-halal); }

        .story { padding: 8rem 2rem; background: var(--cream); color: var(--charcoal); position: relative; }
        .story-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: center; }
        .story-image { position: relative; }
        .story-image-frame { aspect-ratio: 4/5; background: linear-gradient(135deg, var(--burgundy) 0%, var(--burgundy-dark) 100%); display: flex; align-items: center; justify-content: center; font-size: 8rem; }
        .story-image-overlay { position: absolute; bottom: -20px; right: -20px; background: var(--saffron); color: var(--charcoal); padding: 2rem; max-width: 200px; }
        .story-image-overlay span { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; line-height: 1; display: block; }
        .story-image-overlay p { font-size: 0.85rem; font-weight: 500; }
        .section-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--burgundy); margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem; }
        .section-label::after { content: ''; flex: 1; height: 1px; background: var(--burgundy); opacity: 0.3; }
        .story h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1; letter-spacing: 2px; margin-bottom: 2rem; color: var(--charcoal); }
        .story h2 span { color: var(--burgundy); }
        .story-text { font-size: 1.1rem; color: var(--charcoal-light); margin-bottom: 2rem; }
        .story-features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .story-feature { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; background: var(--cream-dark); }
        .story-feature-icon { width: 40px; height: 40px; background: var(--burgundy); color: var(--cream); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
        .story-feature-text strong { display: block; font-size: 0.9rem; margin-bottom: 2px; }
        .story-feature-text span { font-size: 0.8rem; color: #666; }

        .menu { padding: 8rem 2rem; background: var(--charcoal); position: relative; }
        .menu-header { text-align: center; max-width: 700px; margin: 0 auto 4rem; }
        .menu-header .section-label { color: var(--saffron); justify-content: center; }
        .menu-header .section-label::before, .menu-header .section-label::after { content: ''; width: 60px; height: 1px; background: var(--saffron); opacity: 0.3; }
        .menu h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(3rem, 6vw, 5rem); letter-spacing: 3px; margin-bottom: 1rem; }
        .menu h2 span { color: var(--saffron); }
        .menu-subtitle { color: var(--cream-dark); font-size: 1.1rem; }
        .menu-grid { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
        .menu-item { background: var(--charcoal-light); position: relative; overflow: hidden; transition: transform 0.4s; }
        .menu-item:hover { transform: translateY(-10px); }
        .menu-item.featured { grid-column: span 2; }
        .menu-item-image { aspect-ratio: 16/10; background: linear-gradient(135deg, var(--burgundy-dark) 0%, var(--charcoal) 100%); display: flex; align-items: center; justify-content: center; font-size: 5rem; position: relative; }
        .menu-item.featured .menu-item-image { aspect-ratio: 21/10; font-size: 8rem; }
        .menu-item-image::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(26,26,26,0.8) 100%); }
        .menu-item-badge { position: absolute; top: 1rem; left: 1rem; background: var(--saffron); color: var(--charcoal); padding: 0.4rem 0.8rem; font-size: 0.7rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; z-index: 2; }
        .menu-item-content { padding: 2rem; }
        .menu-item h3 { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; letter-spacing: 1px; margin-bottom: 0.5rem; color: var(--cream); }
        .menu-item p { color: var(--cream-dark); font-size: 0.95rem; line-height: 1.5; }
        .menu-cta { text-align: center; margin-top: 4rem; }

        .testimonials { padding: 8rem 2rem; background: var(--burgundy); position: relative; overflow: hidden; }
        .testimonials::before { content: '"'; position: absolute; top: -50px; left: 5%; font-family: Georgia, serif; font-size: 40rem; color: rgba(255,255,255,0.03); line-height: 1; pointer-events: none; }
        .testimonials-header { text-align: center; margin-bottom: 4rem; position: relative; z-index: 1; }
        .testimonials-header .section-label { color: var(--saffron); justify-content: center; }
        .testimonials h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); letter-spacing: 2px; }
        .testimonials-rating { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem; }
        .testimonials-stars { color: var(--saffron); font-size: 1.5rem; letter-spacing: 3px; }
        .testimonials-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; position: relative; z-index: 1; }
        .testimonial { background: rgba(255,255,255,0.05); padding: 2rem; border-left: 4px solid var(--saffron); backdrop-filter: blur(10px); }
        .testimonial-text { font-size: 1.1rem; font-style: italic; margin-bottom: 1rem; line-height: 1.7; }
        .testimonial-author { font-weight: 600; color: var(--saffron); }
        .testimonial-source { font-size: 0.85rem; opacity: 0.7; }

        .location { padding: 8rem 2rem; background: var(--cream); color: var(--charcoal); }
        .location-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .location-info .section-label { color: var(--burgundy); }
        .location h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); letter-spacing: 2px; margin-bottom: 2rem; color: var(--charcoal); }
        .location-address { font-size: 1.2rem; margin-bottom: 2rem; padding-left: 1rem; border-left: 3px solid var(--burgundy); }
        .location-hours h3 { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; letter-spacing: 1px; margin-bottom: 1rem; color: var(--burgundy); }
        .hours-grid { display: grid; gap: 0.5rem; }
        .hours-row { display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--cream-dark); }
        .hours-row.closed .hours-time { color: var(--burgundy); font-weight: 600; }
        .location-features { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
        .location-feature { display: flex; align-items: center; gap: 0.5rem; background: var(--cream-dark); padding: 0.6rem 1rem; font-size: 0.9rem; font-weight: 500; }
        .location-map { background: var(--charcoal-light); aspect-ratio: 1; display: flex; align-items: center; justify-content: center; position: relative; font-size: 6rem; }
        .location-map-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(180deg, transparent 0%, var(--charcoal) 100%); padding: 4rem 2rem 2rem; text-align: center; }
        .location-map-overlay a { color: var(--saffron); font-weight: 600; text-decoration: none; font-size: 1.1rem; }

        .order { padding: 8rem 2rem; background: var(--charcoal); text-align: center; }
        .order-container { max-width: 900px; margin: 0 auto; }
        .order h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(3rem, 7vw, 6rem); letter-spacing: 3px; margin-bottom: 1rem; }
        .order h2 span { color: var(--saffron); }
        .order-subtitle { font-size: 1.2rem; color: var(--cream-dark); margin-bottom: 4rem; }
        .order-platforms { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 4rem; }
        .order-platform { display: flex; align-items: center; gap: 1rem; background: var(--charcoal-light); padding: 1.2rem 2rem; text-decoration: none; color: var(--cream); border: 2px solid transparent; transition: all 0.3s; min-width: 200px; justify-content: center; }
        .order-platform:hover { border-color: var(--saffron); transform: translateY(-3px); }
        .order-platform-icon { font-size: 2rem; }
        .order-platform-name { font-weight: 600; font-size: 1.1rem; }
        .order-phone p { color: var(--cream-dark); margin-bottom: 0.5rem; }
        .order-phone a { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; color: var(--saffron); text-decoration: none; letter-spacing: 2px; }

        .footer { background: var(--burgundy-dark); padding: 4rem 2rem 2rem; }
        .footer-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 4rem; }
        .footer-brand .nav-logo { margin-bottom: 1rem; display: inline-flex; }
        .footer-brand p { color: rgba(255,255,255,0.7); max-width: 350px; line-height: 1.7; }
        .footer-social { display: flex; gap: 1rem; margin-top: 2rem; }
        .footer-social a { width: 45px; height: 45px; background: rgba(255,255,255,0.1); color: var(--cream); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; text-decoration: none; transition: all 0.3s; }
        .footer-social a:hover { background: var(--saffron); color: var(--charcoal); }
        .footer-column h4 { font-family: 'Bebas Neue', sans-serif; font-size: 1.3rem; letter-spacing: 1px; margin-bottom: 1rem; color: var(--saffron); }
        .footer-column ul { list-style: none; }
        .footer-column li { margin-bottom: 0.5rem; }
        .footer-column a { color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.3s; }
        .footer-column a:hover { color: var(--saffron); }
        .footer-bottom { max-width: 1200px; margin: 4rem auto 0; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .footer-bottom p { color: rgba(255,255,255,0.5); font-size: 0.9rem; }

        .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 1024px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-text { order: 1; }
          .hero-image { order: 0; margin-bottom: 2rem; }
          .hero-image-wrapper { max-width: 350px; }
          .hero-ctas { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-floating-tag { display: none; }
          .story-container { grid-template-columns: 1fr; }
          .menu-item.featured { grid-column: span 1; }
          .location-container { grid-template-columns: 1fr; }
          .footer-container { grid-template-columns: 1fr; text-align: center; }
          .footer-brand p { margin: 0 auto; }
          .footer-social { justify-content: center; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hero h1 { font-size: 3.5rem; }
          .story-features { grid-template-columns: 1fr; }
          .menu-grid { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .order-platforms { flex-direction: column; align-items: center; }
          .order-platform { width: 100%; max-width: 300px; }
        }
      `}</style>

      {/* Skip to content link - accessibility */}
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      {/* Border */}
      <div className="truck-art-border" />

      {/* Navigation */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          YSG HALAL
          <span>YeeShaan&apos;s Grubb</span>
        </a>
        <div className="nav-links">
          <a href="#story">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#reviews">Reviews</a>
          <a href="#location">Location</a>
          <a href="#order" className="nav-cta">Order Now</a>
        </div>
      </nav>

      {/* Hero */}
      <main id="main-content">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">HFSAA Certified Halal</div>
            <h1>
              YEESHAAN&apos;S
              <span className="highlight">GRUBB</span>
            </h1>
            <p className="hero-tagline">
              <strong>Pakistani-American fusion</strong> comfort food. From our legendary food truck to your favorite restaurant in Fremont.
            </p>
            <div className="hero-ctas">
              <a href="#order" className="btn btn-primary">Order Now →</a>
              <a href="#menu" className="btn btn-secondary">View Menu</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">4.9★</div>
                <div className="hero-stat-label">Google Rating</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">219+</div>
                <div className="hero-stat-label">Yelp Reviews</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">2019</div>
                <div className="hero-stat-label">Est. Food Truck</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <div className="hero-image-main">🍔</div>
              <div className="hero-floating-tag">House-Made Sauces</div>
              <div className="hero-floating-tag">Grass-Fed Beef</div>
              <div className="hero-floating-tag">100% Halal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story" id="story">
        <div className="story-container">
          <div className={`story-image fade-in ${visible.has(0) ? 'visible' : ''}`}>
            <div className="story-image-frame">🚚</div>
            <div className="story-image-overlay">
              <span>2019</span>
              <p>Started as Bay Area&apos;s first certified Halal food truck</p>
            </div>
          </div>
          <div className={`story-content fade-in ${visible.has(1) ? 'visible' : ''}`}>
            <div className="section-label">Our Story</div>
            <h2>FROM WHEELS <span>TO WALLS</span></h2>
            <p className="story-text">
              What started as cooking for family and friends became a passion that rolled through the Bay Area on four wheels. Owner Shaan Sultaan built YSG Halal from the ground up—literally from a food truck—to become Fremont&apos;s beloved destination for Pakistani-American fusion comfort food.
            </p>
            <p className="story-text">
              Every sauce is made in-house. Every patty is crafted with care. We use only grass-fed, free-range beef because quality isn&apos;t just a promise—it&apos;s our foundation.
            </p>
            <div className="story-features">
              <div className="story-feature">
                <div className="story-feature-icon">🥩</div>
                <div className="story-feature-text">
                  <strong>Grass-Fed Beef</strong>
                  <span>Free-range & ethically sourced</span>
                </div>
              </div>
              <div className="story-feature">
                <div className="story-feature-icon">🧪</div>
                <div className="story-feature-text">
                  <strong>House-Made</strong>
                  <span>All sauces & spices crafted in-house</span>
                </div>
              </div>
              <div className="story-feature">
                <div className="story-feature-icon">🕌</div>
                <div className="story-feature-text">
                  <strong>Prayer Area</strong>
                  <span>Welcoming space for the community</span>
                </div>
              </div>
              <div className="story-feature">
                <div className="story-feature-icon">💰</div>
                <div className="story-feature-text">
                  <strong>No Tipping</strong>
                  <span>Fair wages, relaxed dining</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="menu" id="menu">
        <div className={`menu-header fade-in ${visible.has(2) ? 'visible' : ''}`}>
          <div className="section-label">What We Serve</div>
          <h2>SIGNATURE <span>EATS</span></h2>
          <p className="menu-subtitle">Pakistani spices meet American comfort. Every bite tells our story.</p>
        </div>
        <div className="menu-grid">
          <div className={`menu-item featured fade-in ${visible.has(3) ? 'visible' : ''}`}>
            <div className="menu-item-image">
              🍔
              <span className="menu-item-badge">Signature</span>
            </div>
            <div className="menu-item-content">
              <h3>THE YEESHAAN BURGER</h3>
              <p>Our legendary creation—desi beef AND desi chicken patties stacked together with three house-made sauces. The burger that made us famous.</p>
            </div>
          </div>
          <div className={`menu-item fade-in ${visible.has(4) ? 'visible' : ''}`}>
            <div className="menu-item-image">🍟</div>
            <div className="menu-item-content">
              <h3>LOADED FRIES</h3>
              <p>Crispy fries buried under our signature toppings and drizzled with house-made sauces. Pure indulgence.</p>
            </div>
          </div>
          <div className={`menu-item fade-in ${visible.has(5) ? 'visible' : ''}`}>
            <div className="menu-item-image">🌯</div>
            <div className="menu-item-content">
              <h3>LOADED QUESADILLAS</h3>
              <p>Fusion at its finest. Rich, flavorful, and packed with our unique desi-American fillings.</p>
            </div>
          </div>
          <div className={`menu-item fade-in ${visible.has(6) ? 'visible' : ''}`}>
            <div className="menu-item-image">🍗</div>
            <div className="menu-item-content">
              <h3>JUICY WINGS</h3>
              <p>Perfectly seasoned with our special spice blend. Crispy outside, juicy inside. Fan favorite.</p>
            </div>
          </div>
          <div className={`menu-item fade-in ${visible.has(7) ? 'visible' : ''}`}>
            <div className="menu-item-image">🥤</div>
            <div className="menu-item-content">
              <h3>FALOODA MILKSHAKE</h3>
              <p>Our creative twist on the classic South Asian dessert drink. Sweet, creamy, unforgettable.</p>
            </div>
          </div>
        </div>
        <div className={`menu-cta fade-in ${visible.has(8) ? 'visible' : ''}`}>
          <a href="#order" className="btn btn-primary">View Full Menu & Order →</a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="reviews">
        <div className={`testimonials-header fade-in ${visible.has(9) ? 'visible' : ''}`}>
          <div className="section-label">What People Say</div>
          <h2>RAVE REVIEWS</h2>
          <div className="testimonials-rating">
            <span className="testimonials-stars">★★★★★</span>
            <span>4.9 out of 5 · 219+ Reviews</span>
          </div>
        </div>
        <div className="testimonials-grid">
          <div className={`testimonial fade-in ${visible.has(10) ? 'visible' : ''}`}>
            <p className="testimonial-text">&quot;Incredible flavor and quality! YSG Halal is hands down one of the best halal spots. The sauces are fantastic!&quot;</p>
            <p className="testimonial-author">— Satisfied Customer</p>
            <p className="testimonial-source">Yelp Review</p>
          </div>
          <div className={`testimonial fade-in ${visible.has(11) ? 'visible' : ''}`}>
            <p className="testimonial-text">&quot;The burger was simple, fresh and delicious. The sauces were fantastic! Wings and fried rice were amazing.&quot;</p>
            <p className="testimonial-author">— Happy Diner</p>
            <p className="testimonial-source">Google Review</p>
          </div>
          <div className={`testimonial fade-in ${visible.has(12) ? 'visible' : ''}`}>
            <p className="testimonial-text">&quot;Staff were helpful in figuring out what to order. The food paired great with our beers at a pop-up. Outstanding!&quot;</p>
            <p className="testimonial-author">— Food Enthusiast</p>
            <p className="testimonial-source">Yelp Review</p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location" id="location">
        <div className="location-container">
          <div className={`location-info fade-in ${visible.has(13) ? 'visible' : ''}`}>
            <div className="section-label">Find Us</div>
            <h2>COME VISIT</h2>
            <div className="location-address">
              <strong>4342 Thornton Ave</strong><br />
              Fremont, CA 94536
            </div>
            <div className="location-hours">
              <h3>HOURS</h3>
              <div className="hours-grid">
                <div className="hours-row closed">
                  <span>Monday</span>
                  <span className="hours-time">Closed</span>
                </div>
                <div className="hours-row">
                  <span>Tuesday - Thursday</span>
                  <span>11:00 AM - 12:00 AM</span>
                </div>
                <div className="hours-row">
                  <span>Friday - Saturday</span>
                  <span>11:00 AM - 1:00 AM</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
            <div className="location-features">
              <div className="location-feature">♿ Wheelchair Accessible</div>
              <div className="location-feature">🅿️ Ample Parking</div>
              <div className="location-feature">🌳 Outdoor Seating</div>
              <div className="location-feature">👨‍👩‍👧‍👦 Family Friendly</div>
            </div>
          </div>
          <div className={`location-map fade-in ${visible.has(14) ? 'visible' : ''}`}>
            📍
            <div className="location-map-overlay">
              <a href="https://maps.google.com/?q=4342+Thornton+Ave+Fremont+CA" target="_blank" rel="noopener noreferrer">
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Order */}
      <section className="order" id="order">
        <div className={`order-container fade-in ${visible.has(15) ? 'visible' : ''}`}>
          <h2>READY TO <span>EAT?</span></h2>
          <p className="order-subtitle">Order online for pickup or delivery. We&apos;re waiting to serve you.</p>
          <div className="order-platforms">
            <a href="https://www.doordash.com/store/ysg-halal-yeeshaans-grubb-fremont-655079/" className="order-platform" target="_blank" rel="noopener noreferrer">
              <span className="order-platform-icon">🚗</span>
              <span className="order-platform-name">DoorDash</span>
            </a>
            <a href="#" className="order-platform">
              <span className="order-platform-icon">🍽️</span>
              <span className="order-platform-name">UberEats</span>
            </a>
            <a href="#" className="order-platform">
              <span className="order-platform-icon">📱</span>
              <span className="order-platform-name">Direct Order</span>
            </a>
          </div>
          <div className="order-phone">
            <p>Or call us directly</p>
            <a href="tel:+15101234567">(510) 123-4567</a>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              YSG HALAL
              <span>YeeShaan&apos;s Grubb</span>
            </a>
            <p>Bay Area&apos;s first HFSAA certified halal food truck, now your favorite restaurant. Pakistani-American fusion done right.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/yeeshaansgrubb/" target="_blank" rel="noopener noreferrer">📷</a>
              <a href="#">📘</a>
              <a href="#">🎵</a>
              <a href="https://www.yelp.com/biz/ysg-halal-yeeshaans-grubb-fremont-2" target="_blank" rel="noopener noreferrer">⭐</a>
            </div>
          </div>
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#order">Order Online</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CONTACT</h4>
            <ul>
              <li><a href="tel:+15101234567">(510) 123-4567</a></li>
              <li><a href="mailto:hello@ysghalal.com">hello@ysghalal.com</a></li>
              <li><a href="https://maps.google.com/?q=4342+Thornton+Ave+Fremont+CA" target="_blank" rel="noopener noreferrer">4342 Thornton Ave<br />Fremont, CA 94536</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 YSG Halal - YeeShaan&apos;s Grubb. All rights reserved.</p>
        </div>
      </footer>

      {/* Border */}
      <div className="truck-art-border" />
    </>
  );
}

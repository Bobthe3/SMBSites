'use client';

import { useEffect, useState } from 'react';

export default function SiaFusionPage() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

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

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.setAttribute('data-idx', i.toString());
      observer.observe(el);
    });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'Crispy Chicken Wings', price: '$15 – $21', desc: 'Golden-fried wings tossed in your choice of sauce: Regular, Soy Garlic, Hot & Sweet, BBQ, or Buffalo. Impossibly crispy, dangerously addictive.', tags: ['Best Seller', '8 or 14 pcs', '5 Flavors'], category: 'wings', featured: true, emoji: '🍗' },
    { name: 'Seoul Burger', price: '$17', desc: 'Juicy beef patty crowned with bulgogi, swiss cheese, and a perfect fried egg. East meets West.', tags: ['Signature', 'With Side'], category: 'burgers', emoji: '🍔' },
    { name: 'Kimchi Fried Rice', price: '$17', desc: 'Wok-fired rice with aged kimchi, your choice of protein, topped with a sunny fried egg.', tags: ['Popular', 'Choice of Protein'], category: 'korean', emoji: '🍚' },
    { name: "Andy's Fries", price: '$16', desc: "Crispy fries buried under melted cheese and savory bulgogi. Shareable, but you won't want to.", tags: ['Fan Favorite'], category: 'fusion', emoji: '🍟' },
    { name: 'Bibimbap', price: '$18', desc: 'Classic Korean rice bowl with seasonal vegetables, gochujang, and a runny egg. Mix it all together.', tags: ['Traditional', 'Choice of Protein'], category: 'korean', emoji: '🥗' },
    { name: 'Chicken Katsu Burger', price: '$19', desc: 'Panko-crusted chicken cutlet with house tonkatsu sauce. Japanese crunch, American comfort.', tags: ['Japanese-Inspired'], category: 'burgers', emoji: '🍔' },
    { name: 'Bulgogi Kimchi Burrito', price: '$17', desc: 'Kimchi fried rice, tender bulgogi, sour cream, and avocado wrapped in a flour tortilla.', tags: ['Fusion'], category: 'fusion', emoji: '🌯' },
    { name: 'Spicy Rice Cake', price: '$19', desc: 'Chewy tteokbokki in our signature spicy-sweet gochujang sauce. Korean street food perfection.', tags: ['Spicy', 'Street Food'], category: 'korean', emoji: '🍢' },
    { name: 'Beef Short Rib Plate', price: '$33', desc: 'Premium galbi marinated and grilled to perfection. Served with rice and fresh salad.', tags: ['Premium', 'Grilled'], category: 'korean', emoji: '🥩' },
  ];

  const filteredItems = activeFilter === 'all' ? menuItems : menuItems.filter(item => item.category === activeFilter);

  return (
    <>
      <style jsx global>{`
        :root {
          --black: #0A0A0A;
          --black-light: #141414;
          --black-elevated: #1A1A1A;
          --cream: #F5F0E6;
          --cream-dark: #E8E0D4;
          --vermillion: #C73E3A;
          --vermillion-dark: #A33330;
          --gold: #C9A962;
          --gold-light: #D4BA7A;
          --indigo: #1E3A5F;
          --text-primary: #F5F0E6;
          --text-secondary: #A8A8A8;
          --text-muted: #666666;
          --border: rgba(245, 240, 230, 0.08);
          --border-light: rgba(245, 240, 230, 0.15);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        /* Skip to content - accessibility */
        .skip-to-content { position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden; z-index: 10001; }
        .skip-to-content:focus { position: fixed; top: 0; left: 0; width: auto; height: auto; padding: 1rem 1.5rem; background: var(--black); color: var(--cream); font-weight: 600; text-decoration: none; outline: 2px solid var(--vermillion); }

        /* Prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
          html { scroll-behavior: auto; }
          .reveal { opacity: 1; transform: none; }
        }
        body { font-family: 'Manrope', sans-serif; background: var(--black); color: var(--text-primary); line-height: 1.6; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        ::selection { background: var(--vermillion); color: var(--cream); }

        .pattern-bg { position: absolute; inset: 0; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='none' stroke='%23F5F0E6' stroke-width='1'/%3E%3C/svg%3E"); background-size: 60px 60px; pointer-events: none; }

        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 24px 32px; display: flex; justify-content: space-between; align-items: center; transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .nav.scrolled { background: rgba(10, 10, 10, 0.95); backdrop-filter: blur(20px); padding: 16px 32px; border-bottom: 1px solid var(--border); }
        .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-logo-mark { width: 40px; height: 40px; border: 2px solid var(--vermillion); display: flex; align-items: center; justify-content: center; font-family: 'Cormorant', serif; font-size: 0.9rem; color: var(--vermillion); font-weight: 600; }
        .nav-logo-text { font-family: 'Cormorant', serif; font-size: 1.4rem; font-weight: 600; color: var(--cream); letter-spacing: 0.5px; }
        .nav-links { display: flex; align-items: center; gap: 40px; }
        .nav-links a { font-size: 0.85rem; font-weight: 500; color: var(--text-secondary); text-decoration: none; letter-spacing: 0.5px; text-transform: uppercase; transition: color 0.3s; position: relative; }
        .nav-links a::after { content: ''; position: absolute; bottom: -6px; left: 0; width: 0; height: 1px; background: var(--vermillion); transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .nav-links a:hover { color: var(--cream); }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta { background: var(--vermillion); color: var(--cream) !important; padding: 12px 28px; font-weight: 600; letter-spacing: 1px; border: 1px solid var(--vermillion); transition: all 0.3s; }
        .nav-cta::after { display: none !important; }
        .nav-cta:hover { background: transparent; color: var(--vermillion) !important; }

        .hero { min-height: 100vh; display: flex; align-items: center; position: relative; padding: 140px 32px 100px; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse at 80% 20%, rgba(199, 62, 58, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(201, 169, 98, 0.08) 0%, transparent 40%), linear-gradient(180deg, var(--black) 0%, var(--black-light) 100%); }
        .hero-content { position: relative; max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .hero-text { z-index: 2; }
        .hero-badge { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 32px; animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
        .hero-badge-dot { width: 8px; height: 8px; background: var(--vermillion); border-radius: 50%; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(199, 62, 58, 0.4); } 50% { opacity: 0.8; box-shadow: 0 0 0 8px rgba(199, 62, 58, 0); } }
        .hero-badge-text { font-size: 0.8rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--vermillion); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .hero h1 { font-family: 'Cormorant', serif; font-size: clamp(3.5rem, 8vw, 6.5rem); font-weight: 400; line-height: 1.05; letter-spacing: -1px; margin-bottom: 28px; }
        .hero h1 .line { display: block; overflow: hidden; }
        .hero h1 .line span { display: block; animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero h1 .line:nth-child(1) span { animation-delay: 0.3s; }
        .hero h1 .line:nth-child(2) span { animation-delay: 0.4s; }
        .hero h1 .line:nth-child(3) span { animation-delay: 0.5s; }
        .hero h1 em { font-style: italic; color: var(--gold); }
        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .hero-description { font-size: 1.15rem; color: var(--text-secondary); max-width: 440px; margin-bottom: 40px; line-height: 1.7; animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both; }
        .hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both; }
        .btn { display: inline-flex; align-items: center; gap: 12px; padding: 18px 36px; font-family: 'Manrope', sans-serif; font-size: 0.85rem; font-weight: 600; text-decoration: none; letter-spacing: 1px; text-transform: uppercase; border: none; cursor: pointer; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .btn-primary { background: var(--vermillion); color: var(--cream); }
        .btn-primary:hover { background: var(--vermillion-dark); transform: translateY(-2px); box-shadow: 0 20px 40px rgba(199, 62, 58, 0.25); }
        .btn-secondary { background: transparent; color: var(--cream); border: 1px solid var(--border-light); }
        .btn-secondary:hover { border-color: var(--gold); color: var(--gold); }
        .hero-visual { position: relative; animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both; }
        .hero-image-container { position: relative; aspect-ratio: 4/5; }
        .hero-image { width: 100%; height: 100%; background: linear-gradient(135deg, var(--black-elevated) 0%, var(--black-light) 100%); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 12rem; }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
        .hero-image span { animation: floatSlow 5s ease-in-out infinite; display: block; filter: drop-shadow(0 30px 60px rgba(0,0,0,0.5)); }
        .hero-vertical-text { position: absolute; right: -60px; top: 50%; transform: translateY(-50%) rotate(90deg); font-family: 'Cormorant', serif; font-size: 0.9rem; letter-spacing: 4px; color: var(--text-muted); white-space: nowrap; }
        .hero-float-card { position: absolute; background: var(--black-elevated); border: 1px solid var(--border); padding: 16px 20px; backdrop-filter: blur(10px); animation: float 4s ease-in-out infinite; }
        .hero-float-card:nth-child(2) { top: 15%; left: -40px; }
        .hero-float-card:nth-child(3) { bottom: 25%; right: -50px; animation-delay: 1s; }
        .hero-float-card:nth-child(4) { bottom: 5%; left: 10%; animation-delay: 2s; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .hero-float-label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-muted); margin-bottom: 4px; }
        .hero-float-value { font-family: 'Cormorant', serif; font-size: 1.4rem; font-weight: 600; color: var(--cream); }
        .hero-float-value.accent { color: var(--gold); }
        .hero-float-value.red { color: var(--vermillion); }

        .stats-scroll { padding: 48px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); overflow: hidden; }
        .stats-track { display: flex; gap: 80px; animation: scroll 25s linear infinite; width: max-content; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .stat-item { display: flex; align-items: center; gap: 16px; white-space: nowrap; }
        .stat-divider { width: 6px; height: 6px; background: var(--vermillion); transform: rotate(45deg); }
        .stat-text { font-family: 'Cormorant', serif; font-size: 1.1rem; font-weight: 500; color: var(--text-secondary); }
        .stat-text strong { color: var(--cream); font-weight: 600; }

        .menu { padding: 140px 32px; position: relative; }
        .container { max-width: 1280px; margin: 0 auto; }
        .section-header { display: flex; justify-content: space-between; align-items: flex-end; gap: 40px; margin-bottom: 60px; flex-wrap: wrap; }
        .section-label { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
        .section-label-line { width: 40px; height: 1px; background: var(--vermillion); }
        .section-label-text { font-size: 0.75rem; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--vermillion); }
        .section-title { font-family: 'Cormorant', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 400; line-height: 1.1; }
        .section-title em { font-style: italic; color: var(--gold); }
        .menu-filter { display: flex; gap: 8px; flex-wrap: wrap; }
        .filter-btn { padding: 12px 24px; background: transparent; border: 1px solid var(--border); color: var(--text-secondary); font-family: 'Manrope', sans-serif; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.5px; cursor: pointer; transition: all 0.3s; }
        .filter-btn:hover { border-color: var(--text-secondary); color: var(--cream); }
        .filter-btn.active { background: var(--cream); border-color: var(--cream); color: var(--black); }
        .menu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--border); border: 1px solid var(--border); }
        .menu-item { background: var(--black); padding: 32px; transition: all 0.4s; cursor: pointer; position: relative; overflow: hidden; }
        .menu-item::before { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 0; background: var(--vermillion); transition: height 0.4s; }
        .menu-item:hover { background: var(--black-light); }
        .menu-item:hover::before { height: 100%; }
        .menu-item-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
        .menu-item-name { font-family: 'Cormorant', serif; font-size: 1.5rem; font-weight: 500; line-height: 1.2; max-width: 70%; }
        .menu-item-price { font-family: 'Cormorant', serif; font-size: 1.3rem; font-weight: 600; color: var(--gold); }
        .menu-item-description { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px; }
        .menu-item-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .menu-tag { font-size: 0.65rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; padding: 6px 10px; background: var(--black-elevated); color: var(--text-muted); }
        .menu-tag.signature { background: rgba(199, 62, 58, 0.15); color: var(--vermillion); }
        .menu-tag.popular { background: rgba(201, 169, 98, 0.15); color: var(--gold); }
        .menu-item.featured { grid-column: span 2; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; padding: 40px; }
        .menu-item.featured .menu-item-image { aspect-ratio: 1; background: linear-gradient(135deg, var(--black-elevated) 0%, var(--indigo) 100%); display: flex; align-items: center; justify-content: center; font-size: 6rem; border: 1px solid var(--border); }
        .menu-item.featured .menu-item-content { display: flex; flex-direction: column; justify-content: center; }
        .menu-item.featured .menu-item-name { font-size: 2rem; max-width: 100%; margin-bottom: 8px; }
        .menu-item.featured .menu-item-description { font-size: 1rem; }

        .story { padding: 140px 32px; background: var(--cream); color: var(--black); position: relative; overflow: hidden; }
        .story .pattern-bg { opacity: 0.05; background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='none' stroke='%230A0A0A' stroke-width='1'/%3E%3C/svg%3E"); }
        .story-container { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr; gap: 100px; align-items: center; position: relative; }
        .story-visual { position: relative; }
        .story-image { aspect-ratio: 3/4; background: linear-gradient(135deg, var(--vermillion) 0%, var(--vermillion-dark) 100%); display: flex; align-items: center; justify-content: center; font-size: 10rem; position: relative; }
        .story-image-frame { position: absolute; top: 20px; left: 20px; right: -20px; bottom: -20px; border: 1px solid var(--black); pointer-events: none; }
        .story-content .section-label-text { color: var(--vermillion); }
        .story-content .section-title { color: var(--black); margin-bottom: 32px; }
        .story-text { font-size: 1.1rem; line-height: 1.8; color: #444; margin-bottom: 24px; }
        .story-features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 40px; }
        .story-feature { display: flex; align-items: flex-start; gap: 16px; }
        .story-feature-icon { width: 48px; height: 48px; background: var(--black); color: var(--cream); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
        .story-feature-text strong { display: block; font-size: 0.95rem; margin-bottom: 4px; color: var(--black); }
        .story-feature-text span { font-size: 0.85rem; color: #666; }

        .hours { padding: 140px 32px; position: relative; }
        .hours-container { max-width: 1000px; margin: 0 auto; text-align: center; }
        .hours-icon { font-size: 4rem; margin-bottom: 32px; display: inline-block; animation: glow 2s ease-in-out infinite alternate; }
        @keyframes glow { from { filter: drop-shadow(0 0 20px rgba(199, 62, 58, 0.3)); } to { filter: drop-shadow(0 0 40px rgba(199, 62, 58, 0.6)); } }
        .hours h2 { font-family: 'Cormorant', serif; font-size: clamp(3rem, 7vw, 5rem); font-weight: 400; margin-bottom: 20px; }
        .hours h2 em { font-style: italic; color: var(--vermillion); }
        .hours-subtitle { font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 60px; }
        .hours-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 12px; }
        .hour-card { background: var(--black-light); border: 1px solid var(--border); padding: 28px 16px; text-align: center; transition: all 0.3s; }
        .hour-card:hover { border-color: var(--vermillion); transform: translateY(-4px); }
        .hour-card-day { font-size: 0.7rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; }
        .hour-card-time { font-family: 'Cormorant', serif; font-size: 1rem; color: var(--gold); line-height: 1.5; }
        .hour-card-late { display: inline-block; margin-top: 8px; font-size: 0.65rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; padding: 4px 8px; background: rgba(199, 62, 58, 0.15); color: var(--vermillion); }

        .location { padding: 140px 32px; background: var(--black-light); border-top: 1px solid var(--border); }
        .location-container { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .location-map { aspect-ratio: 4/3; background: var(--black-elevated); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 6rem; position: relative; cursor: pointer; transition: border-color 0.3s; text-decoration: none; }
        .location-map:hover { border-color: var(--vermillion); }
        .location-map-label { position: absolute; bottom: 20px; left: 20px; right: 20px; text-align: center; font-size: 0.85rem; color: var(--text-secondary); }
        .location-info .section-title { margin-bottom: 24px; }
        .location-address { font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 32px; padding-left: 20px; border-left: 2px solid var(--vermillion); }
        .location-features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 40px; }
        .location-feature { display: flex; align-items: center; gap: 14px; padding: 18px; background: var(--black); border: 1px solid var(--border); }
        .location-feature-icon { font-size: 1.4rem; }
        .location-feature span { font-size: 0.9rem; color: var(--text-secondary); }

        .order { padding: 140px 32px; position: relative; overflow: hidden; }
        .order-bg { position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(199, 62, 58, 0.1) 0%, transparent 60%); }
        .order-container { max-width: 900px; margin: 0 auto; text-align: center; position: relative; }
        .order h2 { font-family: 'Cormorant', serif; font-size: clamp(3rem, 8vw, 6rem); font-weight: 400; margin-bottom: 20px; }
        .order h2 em { font-style: italic; color: var(--gold); }
        .order-subtitle { font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 50px; }
        .order-platforms { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 50px; }
        .order-platform { display: flex; align-items: center; gap: 16px; padding: 24px 40px; background: var(--black-light); border: 1px solid var(--border); text-decoration: none; color: var(--cream); transition: all 0.4s; min-width: 220px; justify-content: center; }
        .order-platform:hover { border-color: var(--vermillion); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); }
        .order-platform-icon { font-size: 1.8rem; }
        .order-platform-name { font-weight: 600; letter-spacing: 0.5px; }
        .order-divider { display: flex; align-items: center; gap: 24px; margin-bottom: 40px; }
        .order-divider-line { flex: 1; height: 1px; background: var(--border); }
        .order-divider-text { font-size: 0.8rem; color: var(--text-muted); letter-spacing: 2px; text-transform: uppercase; }
        .order-phone a { font-family: 'Cormorant', serif; font-size: 2.5rem; color: var(--cream); text-decoration: none; transition: color 0.3s; }
        .order-phone a:hover { color: var(--gold); }

        .footer { padding: 80px 32px 40px; background: var(--black); border-top: 1px solid var(--border); }
        .footer-container { max-width: 1280px; margin: 0 auto; }
        .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; margin-bottom: 60px; }
        .footer-brand p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7; margin-top: 20px; max-width: 280px; }
        .footer-social { display: flex; gap: 12px; margin-top: 24px; }
        .footer-social a { width: 44px; height: 44px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; text-decoration: none; transition: all 0.3s; }
        .footer-social a:hover { border-color: var(--vermillion); background: var(--vermillion); }
        .footer-column h4 { font-family: 'Cormorant', serif; font-size: 1.1rem; font-weight: 600; margin-bottom: 20px; color: var(--cream); }
        .footer-column ul { list-style: none; }
        .footer-column li { margin-bottom: 12px; }
        .footer-column a { color: var(--text-secondary); text-decoration: none; font-size: 0.9rem; transition: color 0.3s; }
        .footer-column a:hover { color: var(--gold); }
        .footer-bottom { padding-top: 40px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .footer-bottom p { font-size: 0.85rem; color: var(--text-muted); }
        .footer-korean { font-family: 'Cormorant', serif; font-size: 1rem; color: var(--text-muted); letter-spacing: 2px; }

        @media (max-width: 1024px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; gap: 60px; }
          .hero-description { margin: 0 auto 40px; }
          .hero-ctas { justify-content: center; }
          .hero-visual { order: -1; }
          .hero-image-container { max-width: 400px; margin: 0 auto; }
          .hero-vertical-text { display: none; }
          .hero-float-card { display: none; }
          .menu-grid { grid-template-columns: repeat(2, 1fr); }
          .menu-item.featured { grid-column: span 2; grid-template-columns: 1fr; }
          .story-container { grid-template-columns: 1fr; gap: 60px; }
          .hours-grid { grid-template-columns: repeat(4, 1fr); }
          .location-container { grid-template-columns: 1fr; }
          .footer-top { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hero { padding: 120px 24px 80px; }
          .menu-grid { grid-template-columns: 1fr; }
          .menu-item.featured { grid-column: span 1; }
          .hours-grid { grid-template-columns: repeat(2, 1fr); }
          .location-features { grid-template-columns: 1fr; }
          .order-platforms { flex-direction: column; align-items: center; }
          .order-platform { width: 100%; max-width: 300px; }
          .footer-top { grid-template-columns: 1fr; text-align: center; }
          .footer-brand p { margin: 20px auto 0; }
          .footer-social { justify-content: center; }
          .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
          .section-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* Skip to content link - accessibility */}
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark">시아</div>
          <span className="nav-logo-text">Sia Fusion</span>
        </a>
        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#story">Our Story</a>
          <a href="#hours">Hours</a>
          <a href="#location">Location</a>
          <a href="#order" className="nav-cta">Order Now</a>
        </div>
      </nav>

      {/* Hero */}
      <main id="main-content">
      <section className="hero">
        <div className="hero-bg" />
        <div className="pattern-bg" />
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">Open Late Until 2AM</span>
            </div>
            <h1>
              <span className="line"><span>Korean Soul,</span></span>
              <span className="line"><span>American</span></span>
              <span className="line"><span><em>Comfort.</em></span></span>
            </h1>
            <p className="hero-description">
              Where Korean tradition meets bold American flavors. Wings, burgers, Korean BBQ and more—crafted for late nights and good company.
            </p>
            <div className="hero-ctas">
              <a href="#order" className="btn btn-primary">Order Now →</a>
              <a href="#menu" className="btn btn-secondary">View Menu</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-image"><span>🍜</span></div>
              <div className="hero-float-card">
                <div className="hero-float-label">Rating</div>
                <div className="hero-float-value accent">4.2 ★</div>
              </div>
              <div className="hero-float-card">
                <div className="hero-float-label">Open Until</div>
                <div className="hero-float-value red">2 AM</div>
              </div>
              <div className="hero-float-card">
                <div className="hero-float-label">Reviews</div>
                <div className="hero-float-value">1000+</div>
              </div>
            </div>
            <div className="hero-vertical-text">NEWARK, CALIFORNIA • EST. 2015</div>
          </div>
        </div>
      </section>

      {/* Scrolling Stats */}
      <div className="stats-scroll">
        <div className="stats-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'contents' }}>
              <div className="stat-item"><span className="stat-divider" /><span className="stat-text"><strong>1000+</strong> Happy Reviews</span></div>
              <div className="stat-item"><span className="stat-divider" /><span className="stat-text">Open Until <strong>2AM</strong></span></div>
              <div className="stat-item"><span className="stat-divider" /><span className="stat-text"><strong>Korean-Japanese</strong> Fusion</span></div>
              <div className="stat-item"><span className="stat-divider" /><span className="stat-text"><strong>5</strong> Wing Flavors</span></div>
              <div className="stat-item"><span className="stat-divider" /><span className="stat-text">Newark, <strong>California</strong></span></div>
              <div className="stat-item"><span className="stat-divider" /><span className="stat-text"><strong>Delivery</strong> Available</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <section className="menu" id="menu">
        <div className="container">
          <div className={`section-header reveal ${visible.has(0) ? 'visible' : ''}`}>
            <div>
              <div className="section-label">
                <span className="section-label-line" />
                <span className="section-label-text">Our Menu</span>
              </div>
              <h2 className="section-title">Taste the <em>Fusion</em></h2>
            </div>
            <div className="menu-filter">
              {['all', 'wings', 'burgers', 'korean', 'fusion'].map(f => (
                <button key={f} className={`filter-btn ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className={`menu-grid reveal ${visible.has(1) ? 'visible' : ''}`}>
            {filteredItems.map((item, i) => (
              <div key={i} className={`menu-item ${item.featured ? 'featured' : ''}`}>
                {item.featured && <div className="menu-item-image">{item.emoji}</div>}
                <div className={item.featured ? 'menu-item-content' : ''}>
                  <div className="menu-item-top">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-description">{item.desc}</p>
                  <div className="menu-item-tags">
                    {item.tags.map((tag, j) => (
                      <span key={j} className={`menu-tag ${tag === 'Best Seller' || tag === 'Signature' ? 'signature' : ''} ${tag === 'Popular' || tag === 'Fan Favorite' ? 'popular' : ''}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story" id="story">
        <div className="pattern-bg" />
        <div className="story-container">
          <div className={`story-visual reveal ${visible.has(2) ? 'visible' : ''}`}>
            <div className="story-image">
              🍜
              <div className="story-image-frame" />
            </div>
          </div>
          <div className={`story-content reveal ${visible.has(3) ? 'visible' : ''}`}>
            <div className="section-label">
              <span className="section-label-line" />
              <span className="section-label-text">Our Story</span>
            </div>
            <h2 className="section-title">Two Cultures,<br />One <em>Kitchen</em></h2>
            <p className="story-text">
              Sia Fusion was born from a simple idea: the bold, comforting flavors of Korean cuisine deserve to meet the American classics we all love. From crispy wings glazed in soy garlic to burgers topped with bulgogi and fried eggs—every dish tells a story of fusion done right.
            </p>
            <p className="story-text">
              We&apos;re here for the late nights, the good conversations, and the cravings that hit when everywhere else is closed. Welcome to the family.
            </p>
            <div className="story-features">
              <div className="story-feature">
                <div className="story-feature-icon">🌙</div>
                <div className="story-feature-text"><strong>Open Late</strong><span>Until 2AM on weekends</span></div>
              </div>
              <div className="story-feature">
                <div className="story-feature-icon">🔥</div>
                <div className="story-feature-text"><strong>Made Fresh</strong><span>Cooked to order, always</span></div>
              </div>
              <div className="story-feature">
                <div className="story-feature-icon">🍺</div>
                <div className="story-feature-text"><strong>Soju & Drinks</strong><span>Perfect pairings available</span></div>
              </div>
              <div className="story-feature">
                <div className="story-feature-icon">📦</div>
                <div className="story-feature-text"><strong>Delivery</strong><span>DoorDash, UberEats & more</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="hours" id="hours">
        <div className={`hours-container reveal ${visible.has(4) ? 'visible' : ''}`}>
          <div className="hours-icon">🌙</div>
          <h2>Open <em>Late</em></h2>
          <p className="hours-subtitle">Because great food shouldn&apos;t have a curfew.</p>
          <div className="hours-grid">
            {[
              { day: 'Mon', time: '4PM\n1AM' },
              { day: 'Tue', time: '4PM\n1AM' },
              { day: 'Wed', time: '4PM\n1AM' },
              { day: 'Thu', time: '4PM\n1AM' },
              { day: 'Fri', time: '11:30AM\n2AM', late: true },
              { day: 'Sat', time: '11:30AM\n2AM', late: true },
              { day: 'Sun', time: '11:30AM\n11PM' },
            ].map((h, i) => (
              <div key={i} className="hour-card">
                <div className="hour-card-day">{h.day}</div>
                <div className="hour-card-time" dangerouslySetInnerHTML={{ __html: h.time.replace('\n', '<br/>') }} />
                {h.late && <span className="hour-card-late">Late Night</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location" id="location">
        <div className="location-container">
          <a href="https://maps.google.com/?q=39263+Cedar+Blvd+Newark+CA" target="_blank" rel="noopener noreferrer" className={`location-map reveal ${visible.has(5) ? 'visible' : ''}`}>
            📍
            <span className="location-map-label">Click to open in Google Maps</span>
          </a>
          <div className={`location-info reveal ${visible.has(6) ? 'visible' : ''}`}>
            <div className="section-label">
              <span className="section-label-line" />
              <span className="section-label-text">Find Us</span>
            </div>
            <h2 className="section-title">Visit <em>Sia</em></h2>
            <div className="location-address">
              <strong>39263 Cedar Blvd</strong><br />
              Newark, CA 94560
            </div>
            <div className="location-features">
              <div className="location-feature"><span className="location-feature-icon">🚗</span><span>Free Parking</span></div>
              <div className="location-feature"><span className="location-feature-icon">📦</span><span>Takeout Ready</span></div>
              <div className="location-feature"><span className="location-feature-icon">🛵</span><span>Delivery Available</span></div>
              <div className="location-feature"><span className="location-feature-icon">🍺</span><span>Beer & Soju</span></div>
            </div>
            <a href="https://maps.google.com/?q=39263+Cedar+Blvd+Newark+CA" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Get Directions →</a>
          </div>
        </div>
      </section>

      {/* Order */}
      <section className="order" id="order">
        <div className="order-bg" />
        <div className={`order-container reveal ${visible.has(7) ? 'visible' : ''}`}>
          <h2>Ready to <em>Eat?</em></h2>
          <p className="order-subtitle">Order online for pickup or delivery. Your fusion feast awaits.</p>
          <div className="order-platforms">
            <a href="https://siafusioneatery.com/newark/order" target="_blank" rel="noopener noreferrer" className="order-platform">
              <span className="order-platform-icon">🍽️</span>
              <span className="order-platform-name">Order Direct</span>
            </a>
            <a href="https://www.doordash.com/store/sia-fusion-eatery-newark-26029151/" target="_blank" rel="noopener noreferrer" className="order-platform">
              <span className="order-platform-icon">🚗</span>
              <span className="order-platform-name">DoorDash</span>
            </a>
            <a href="https://www.ubereats.com/store/sia-fusion-eatery/NA0GhtC4Qled7tPgwGB9Fw" target="_blank" rel="noopener noreferrer" className="order-platform">
              <span className="order-platform-icon">🛵</span>
              <span className="order-platform-name">Uber Eats</span>
            </a>
          </div>
          <div className="order-divider">
            <span className="order-divider-line" />
            <span className="order-divider-text">Or call us</span>
            <span className="order-divider-line" />
          </div>
          <div className="order-phone">
            <a href="tel:+15107948852">(510) 794-8852</a>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="nav-logo">
                <div className="nav-logo-mark">시아</div>
                <span className="nav-logo-text">Sia Fusion</span>
              </a>
              <p>Korean-Japanese fusion comfort food in Newark, CA. Open late, always delicious.</p>
              <div className="footer-social">
                <a href="#">📷</a>
                <a href="#">📘</a>
                <a href="https://www.yelp.com/biz/sia-fusion-eatery-newark" target="_blank" rel="noopener noreferrer">⭐</a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Menu</h4>
              <ul>
                <li><a href="#menu">Wings</a></li>
                <li><a href="#menu">Burgers</a></li>
                <li><a href="#menu">Korean Classics</a></li>
                <li><a href="#menu">Fusion Plates</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Visit</h4>
              <ul>
                <li><a href="#hours">Hours</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="https://maps.google.com/?q=39263+Cedar+Blvd+Newark+CA" target="_blank" rel="noopener noreferrer">Directions</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Order</h4>
              <ul>
                <li><a href="https://siafusioneatery.com/newark/order" target="_blank" rel="noopener noreferrer">Order Direct</a></li>
                <li><a href="https://www.doordash.com/store/sia-fusion-eatery-newark-26029151/" target="_blank" rel="noopener noreferrer">DoorDash</a></li>
                <li><a href="https://www.ubereats.com/store/sia-fusion-eatery/NA0GhtC4Qled7tPgwGB9Fw" target="_blank" rel="noopener noreferrer">Uber Eats</a></li>
                <li><a href="tel:+15107948852">(510) 794-8852</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Sia Fusion Eatery. All rights reserved.</p>
            <span className="footer-korean">시아 퓨전</span>
          </div>
        </div>
      </footer>
    </>
  );
}

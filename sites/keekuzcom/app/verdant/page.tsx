'use client';

import { useState, useEffect } from 'react';

export default function VerdantPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --bg-warm: #FAF8F5;
          --bg-cream: #F5F0E8;
          --forest: #1A3D2E;
          --forest-light: #2A5A45;
          --terracotta: #E07B54;
          --terracotta-dark: #C86A47;
          --sage: #A8B5A0;
          --sage-light: #D4DDD0;
          --text-primary: #1A1A1A;
          --text-secondary: #5A5A5A;
          --white: #FFFFFF;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background-color: var(--bg-warm); color: var(--text-primary); line-height: 1.6; overflow-x: hidden; }
        h1, h2, h3, .display { font-family: 'Cormorant Garamond', serif; font-weight: 500; }

        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 1.5rem 4rem; display: flex; justify-content: space-between; align-items: center; background: rgba(250,248,245,0.9); backdrop-filter: blur(20px); transition: all 0.4s; }
        nav.scrolled { padding: 1rem 4rem; box-shadow: 0 4px 30px rgba(26,61,46,0.05); }
        .logo { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 600; color: var(--forest); letter-spacing: 0.02em; }
        .nav-links { display: flex; gap: 3rem; list-style: none; }
        .nav-links a { text-decoration: none; color: var(--text-secondary); font-size: 0.9rem; font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; transition: color 0.3s; }
        .nav-links a:hover { color: var(--forest); }
        .nav-cta { background: var(--forest); color: var(--white); padding: 0.8rem 2rem; border-radius: 100px; text-decoration: none; font-size: 0.85rem; font-weight: 500; transition: all 0.3s; }
        .nav-cta:hover { background: var(--forest-light); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(26,61,46,0.2); }

        .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; padding: 8rem 4rem 4rem; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; top: -50%; right: -20%; width: 80%; height: 150%; background: radial-gradient(ellipse, var(--sage-light) 0%, transparent 70%); opacity: 0.4; z-index: 0; }
        .hero-content { display: flex; flex-direction: column; justify-content: center; padding-right: 4rem; z-index: 1; animation: fadeInUp 1s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .hero-tag { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--sage-light); color: var(--forest); padding: 0.5rem 1rem; border-radius: 100px; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; width: fit-content; margin-bottom: 2rem; }
        .hero-tag::before { content: ''; width: 6px; height: 6px; background: var(--terracotta); border-radius: 50%; animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .hero h1 { font-size: clamp(3rem, 6vw, 5rem); line-height: 1.1; color: var(--forest); margin-bottom: 1.5rem; }
        .hero h1 span { color: var(--terracotta); font-style: italic; }
        .hero-description { font-size: 1.15rem; color: var(--text-secondary); max-width: 480px; margin-bottom: 2.5rem; line-height: 1.8; }
        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { background: var(--terracotta); color: var(--white); padding: 1.1rem 2.5rem; border-radius: 100px; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: all 0.3s; display: inline-flex; align-items: center; gap: 0.5rem; }
        .btn-primary:hover { background: var(--terracotta-dark); transform: translateY(-3px); box-shadow: 0 15px 40px rgba(224,123,84,0.3); }
        .btn-secondary { background: transparent; color: var(--forest); padding: 1.1rem 2.5rem; border-radius: 100px; text-decoration: none; font-size: 0.95rem; font-weight: 500; border: 1.5px solid var(--forest); transition: all 0.3s; display: inline-flex; align-items: center; gap: 0.5rem; }
        .btn-secondary:hover { background: var(--forest); color: var(--white); }

        .hero-image { position: relative; display: flex; align-items: center; justify-content: center; z-index: 1; animation: fadeInUp 1s ease-out 0.2s both; }
        .hero-image-container { position: relative; width: 100%; max-width: 550px; }
        .hero-img-main { width: 100%; height: 600px; background: linear-gradient(145deg, var(--sage) 0%, var(--forest-light) 100%); border-radius: 200px 200px 40px 40px; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 40px 80px rgba(26,61,46,0.15); }
        .hero-img-main img { width: 85%; height: 85%; object-fit: cover; border-radius: 180px 180px 30px 30px; }
        .floating-card { position: absolute; background: var(--white); border-radius: 20px; padding: 1.2rem 1.5rem; box-shadow: 0 20px 50px rgba(0,0,0,0.1); animation: float 4s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .floating-card.card-1 { top: 15%; left: -60px; animation-delay: 0s; }
        .floating-card.card-2 { bottom: 20%; right: -40px; animation-delay: 1s; }
        .floating-card-icon { width: 40px; height: 40px; background: var(--sage-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; font-size: 1.2rem; }
        .floating-card-label { font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
        .floating-card-value { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: var(--forest); font-weight: 600; }

        .values { padding: 8rem 4rem; background: var(--white); position: relative; }
        .values::before { content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 1px; height: 80px; background: linear-gradient(to bottom, var(--sage), transparent); }
        .section-header { text-align: center; max-width: 600px; margin: 0 auto 5rem; }
        .section-tag { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--terracotta); margin-bottom: 1rem; display: block; }
        .section-header h2 { font-size: clamp(2.2rem, 4vw, 3rem); color: var(--forest); line-height: 1.2; }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; max-width: 1200px; margin: 0 auto; }
        .value-card { text-align: center; padding: 3rem 2rem; border-radius: 30px; background: var(--bg-warm); transition: all 0.4s; position: relative; overflow: hidden; }
        .value-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--sage), var(--terracotta)); transform: scaleX(0); transition: transform 0.4s; }
        .value-card:hover::before { transform: scaleX(1); }
        .value-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(26,61,46,0.1); }
        .value-icon { width: 80px; height: 80px; background: var(--white); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; box-shadow: 0 10px 30px rgba(26,61,46,0.08); font-size: 2rem; }
        .value-card h3 { font-size: 1.5rem; color: var(--forest); margin-bottom: 1rem; }
        .value-card p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7; }

        .menu { padding: 8rem 4rem; background: var(--bg-cream); position: relative; }
        .menu-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; max-width: 1400px; margin: 0 auto; }
        .menu-card { background: var(--white); border-radius: 24px; overflow: hidden; transition: all 0.4s; cursor: pointer; }
        .menu-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 30px 60px rgba(26,61,46,0.12); }
        .menu-card-image { height: 220px; background: linear-gradient(135deg, var(--sage-light), var(--sage)); position: relative; overflow: hidden; }
        .menu-card-image::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 60px; background: linear-gradient(to top, var(--white), transparent); }
        .menu-card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
        .menu-card:hover .menu-card-image img { transform: scale(1.1); }
        .menu-card-content { padding: 1.5rem; }
        .menu-card-tag { display: inline-block; background: var(--sage-light); color: var(--forest); padding: 0.3rem 0.8rem; border-radius: 100px; font-size: 0.7rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.8rem; }
        .menu-card h3 { font-size: 1.3rem; color: var(--forest); margin-bottom: 0.5rem; }
        .menu-card-meta { display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--sage-light); }
        .menu-card-calories { font-size: 0.85rem; color: var(--text-secondary); }
        .menu-card-price { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: var(--terracotta); font-weight: 600; }

        .social-proof { padding: 8rem 4rem; background: var(--forest); color: var(--white); position: relative; overflow: hidden; }
        .social-proof::before { content: ''; position: absolute; top: -100px; left: -100px; width: 400px; height: 400px; background: radial-gradient(circle, var(--forest-light), transparent); opacity: 0.5; }
        .social-proof .section-header { position: relative; z-index: 1; }
        .social-proof .section-tag { color: var(--sage); }
        .social-proof h2 { color: var(--white); }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; max-width: 1000px; margin: 0 auto 5rem; position: relative; z-index: 1; }
        .stat-item { text-align: center; }
        .stat-number { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 600; color: var(--terracotta); line-height: 1; margin-bottom: 0.5rem; }
        .stat-label { font-size: 0.85rem; color: var(--sage); text-transform: uppercase; letter-spacing: 0.1em; }
        .testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .testimonial-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 2rem; backdrop-filter: blur(10px); transition: all 0.3s; }
        .testimonial-card:hover { background: rgba(255,255,255,0.08); transform: translateY(-5px); }
        .testimonial-stars { color: var(--terracotta); margin-bottom: 1rem; font-size: 1.1rem; }
        .testimonial-text { font-size: 1rem; line-height: 1.7; color: rgba(255,255,255,0.85); margin-bottom: 1.5rem; font-style: italic; }
        .testimonial-author { display: flex; align-items: center; gap: 1rem; }
        .testimonial-avatar { width: 48px; height: 48px; background: var(--sage); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; color: var(--forest); font-weight: 600; }
        .testimonial-name { font-weight: 500; color: var(--white); }
        .testimonial-location { font-size: 0.85rem; color: var(--sage); }

        .location-cta { padding: 8rem 4rem; background: var(--white); }
        .location-container { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .location-content h2 { font-size: clamp(2rem, 3.5vw, 2.8rem); color: var(--forest); margin-bottom: 1.5rem; line-height: 1.2; }
        .location-content p { color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.7; }
        .location-search { display: flex; gap: 1rem; }
        .location-input { flex: 1; padding: 1.1rem 1.5rem; border: 2px solid var(--sage-light); border-radius: 100px; font-size: 1rem; font-family: 'Outfit', sans-serif; transition: all 0.3s; background: var(--bg-warm); }
        .location-input:focus { outline: none; border-color: var(--forest); background: var(--white); }
        .location-map { height: 400px; background: linear-gradient(145deg, var(--sage-light), var(--sage)); border-radius: 30px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
        .map-pin { width: 60px; height: 60px; background: var(--terracotta); border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(224,123,84,0.4); animation: bounce 2s ease-in-out infinite; font-size: 1.5rem; }
        @keyframes bounce { 0%, 100% { transform: rotate(-45deg) translateY(0); } 50% { transform: rotate(-45deg) translateY(-10px); } }
        .map-pin span { transform: rotate(45deg); }

        footer { background: var(--forest); color: var(--white); padding: 5rem 4rem 2rem; }
        .footer-grid { display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: 4rem; max-width: 1200px; margin: 0 auto; padding-bottom: 4rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .footer-brand .logo { color: var(--white); margin-bottom: 1.5rem; display: inline-block; }
        .footer-brand p { color: var(--sage); font-size: 0.95rem; line-height: 1.7; max-width: 300px; }
        .footer-column h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; margin-bottom: 1.5rem; color: var(--white); }
        .footer-column ul { list-style: none; }
        .footer-column li { margin-bottom: 0.8rem; }
        .footer-column a { color: var(--sage); text-decoration: none; font-size: 0.9rem; transition: color 0.3s; }
        .footer-column a:hover { color: var(--white); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding-top: 2rem; }
        .footer-bottom p { color: var(--sage); font-size: 0.85rem; }

        @media (max-width: 1024px) {
          nav { padding: 1rem 2rem; }
          .nav-links { display: none; }
          .hero { grid-template-columns: 1fr; padding: 7rem 2rem 3rem; min-height: auto; }
          .hero-content { padding-right: 0; text-align: center; align-items: center; }
          .hero-buttons { justify-content: center; }
          .hero-image { margin-top: 3rem; }
          .values-grid, .menu-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonials { grid-template-columns: 1fr; }
          .location-container { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .hero h1 { font-size: 2.5rem; }
          .values-grid, .menu-grid { grid-template-columns: 1fr; }
          .hero-buttons { flex-direction: column; width: 100%; }
          .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
          .floating-card { display: none; }
          .footer-grid { grid-template-columns: 1fr; }
          .location-search { flex-direction: column; }
          .stats-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
      `}</style>

      {/* Navigation */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <span className="logo">Verdant</span>
        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#values">Our Story</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
        <a href="#order" className="nav-cta">Order Now</a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Now Open in Your Neighborhood</span>
          <h1>Eat well.<br/>Feel <span>alive</span>.</h1>
          <p className="hero-description">Fresh, seasonal ingredients crafted into nourishing bowls and salads. Made with love, served with speed, designed for your wellbeing.</p>
          <div className="hero-buttons">
            <a href="#order" className="btn-primary">Start Your Order →</a>
            <a href="#menu" className="btn-secondary">Explore Menu</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="hero-img-main">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=700&fit=crop" alt="Fresh healthy bowl" />
            </div>
            <div className="floating-card card-1">
              <div className="floating-card-icon">⏱️</div>
              <span className="floating-card-label">Ready in</span>
              <span className="floating-card-value">5 Minutes</span>
            </div>
            <div className="floating-card card-2">
              <div className="floating-card-icon">❤️</div>
              <span className="floating-card-label">Customer love</span>
              <span className="floating-card-value">4.9 Stars</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values" id="values">
        <div className="section-header">
          <span className="section-tag">Why Verdant</span>
          <h2>Nourishment with intention, served with purpose</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🛡️</div>
            <h3>Farm Fresh Daily</h3>
            <p>Every ingredient sourced from local farms within 150 miles. No preservatives, no compromises—just honest, seasonal produce.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>Carbon Neutral</h3>
            <p>From compostable packaging to renewable energy kitchens, we&apos;re committed to leaving the planet better than we found it.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h3>Ready When You Are</h3>
            <p>Order ahead, skip the line. Our digital kitchen ensures your meal is crafted fresh the moment you walk through the door.</p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="menu" id="menu">
        <div className="section-header">
          <span className="section-tag">Seasonal Favorites</span>
          <h2>Bowls crafted for every craving</h2>
        </div>
        <div className="menu-grid">
          <div className="menu-card">
            <div className="menu-card-image">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" alt="Harvest Bowl" />
            </div>
            <div className="menu-card-content">
              <span className="menu-card-tag">Signature</span>
              <h3>Harvest Bowl</h3>
              <div className="menu-card-meta">
                <span className="menu-card-calories">545 cal</span>
                <span className="menu-card-price">$14.95</span>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="menu-card-image">
              <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop" alt="Kale Caesar" />
            </div>
            <div className="menu-card-content">
              <span className="menu-card-tag">Classic</span>
              <h3>Crispy Kale Caesar</h3>
              <div className="menu-card-meta">
                <span className="menu-card-calories">420 cal</span>
                <span className="menu-card-price">$13.50</span>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="menu-card-image">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop" alt="Warm Wild Rice" />
            </div>
            <div className="menu-card-content">
              <span className="menu-card-tag">Seasonal</span>
              <h3>Warm Wild Rice</h3>
              <div className="menu-card-meta">
                <span className="menu-card-calories">610 cal</span>
                <span className="menu-card-price">$15.25</span>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <div className="menu-card-image">
              <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400&h=300&fit=crop" alt="Shroomami" />
            </div>
            <div className="menu-card-content">
              <span className="menu-card-tag">Plant-Based</span>
              <h3>Shroomami</h3>
              <div className="menu-card-meta">
                <span className="menu-card-calories">485 cal</span>
                <span className="menu-card-price">$14.50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof" id="reviews">
        <div className="section-header">
          <span className="section-tag">Community Love</span>
          <h2>Join thousands feeling their best</h2>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">2M+</div>
            <div className="stat-label">Bowls Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Locations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Local Farms</div>
          </div>
        </div>
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">&quot;Finally, fast food that doesn&apos;t make me feel guilty. The Harvest Bowl is my weekly ritual—fresh, filling, and absolutely delicious.&quot;</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SK</div>
              <div>
                <div className="testimonial-name">Sarah K.</div>
                <div className="testimonial-location">Brooklyn, NY</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">&quot;The app makes ordering so seamless. I walk in, grab my bowl, and I&apos;m out. Perfect for my busy schedule without sacrificing nutrition.&quot;</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">MR</div>
              <div>
                <div className="testimonial-name">Marcus R.</div>
                <div className="testimonial-location">Austin, TX</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">&quot;I love that everything is locally sourced. You can taste the difference. My whole office is hooked on the Kale Caesar now.&quot;</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">JL</div>
              <div>
                <div className="testimonial-name">Jennifer L.</div>
                <div className="testimonial-location">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="location-cta" id="locations">
        <div className="location-container">
          <div className="location-content">
            <h2>Find your nearest Verdant</h2>
            <p>Over 150 locations and growing. Fresh, nourishing meals are never far away. Enter your address to discover your new favorite lunch spot.</p>
            <div className="location-search">
              <input type="text" className="location-input" placeholder="Enter your address or zip code" />
              <a href="#" className="btn-primary">Find Locations</a>
            </div>
          </div>
          <div className="location-map">
            <div className="map-pin"><span>📍</span></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">Verdant</span>
            <p>Crafting nourishing meals that fuel your day and respect our planet. Join the movement toward mindful eating.</p>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Catering</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Nutrition Info</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Verdant. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

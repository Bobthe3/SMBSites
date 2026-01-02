'use client'

import { useState, FormEvent } from 'react'

export default function JPPaintingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your request! JP Painting will contact you soon.')
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
          --golden: #c9a227;
          --terracotta: #bf7245;
          --sage: #5c6b4d;
          --sand: #f5f1e8;
          --clay: #d4a574;
          --rust: #8b4d3b;
          --cream: #faf8f5;
          --charcoal: #2d2d2d;
          --charcoal-light: #4a4a4a;
          --white: #ffffff;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: var(--cream);
          color: var(--charcoal);
          line-height: 1.6;
        }

        h1, h2, h3, h4 {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 600;
          line-height: 1.2;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          background: var(--white);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--charcoal);
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--charcoal);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: var(--terracotta);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          background: var(--terracotta);
          color: var(--white) !important;
          border: none;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
        }

        .btn:hover {
          background: #a65f3a;
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--charcoal);
          color: var(--charcoal) !important;
        }

        .btn-outline:hover {
          background: var(--charcoal);
          color: var(--white) !important;
        }

        .btn-yelp {
          background: #d32323;
        }

        .btn-yelp:hover {
          background: #b91c1c;
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
          background: var(--charcoal);
        }

        /* Paint Swatch Background - Full Page */
        .main-content {
          position: relative;
        }

        .paint-strokes {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          z-index: 0;
          pointer-events: none;
        }

        .stroke {
          flex: 1;
          position: relative;
          opacity: 0.7;
        }

        .stroke:nth-child(1) { background: var(--sand); }
        .stroke:nth-child(2) { background: var(--clay); }
        .stroke:nth-child(3) { background: var(--terracotta); }
        .stroke:nth-child(4) { background: var(--sage); }
        .stroke:nth-child(5) { background: var(--rust); }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 7rem 2rem 4rem;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 4.5vw, 3.5rem);
          color: var(--charcoal);
          margin-bottom: 1.5rem;
        }

        .hero-content h1 span {
          color: var(--terracotta);
        }

        .hero-text {
          font-size: 1.1rem;
          color: var(--charcoal-light);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .hero-rating {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: var(--white);
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          display: inline-flex;
        }

        .hero-rating-stars {
          display: flex;
          gap: 2px;
        }

        .hero-rating-stars svg {
          width: 18px;
          height: 18px;
          fill: var(--golden);
        }

        .hero-rating-text {
          font-weight: 600;
          color: var(--charcoal);
        }

        .hero-rating-text span {
          color: var(--charcoal-light);
          font-weight: 400;
        }

        .hero-image {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .hero-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }

        /* Services */
        .services {
          padding: 5rem 2rem;
          position: relative;
        }

        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        .section-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          color: var(--charcoal);
          margin-bottom: 0.75rem;
        }

        .section-subtitle {
          color: var(--charcoal-light);
          font-size: 1.05rem;
        }

        .services-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .service-card {
          background: var(--cream);
          padding: 2rem;
          border-radius: 8px;
          border-left: 4px solid var(--terracotta);
        }

        .service-card h3 {
          font-size: 1.2rem;
          color: var(--charcoal);
          margin-bottom: 0.5rem;
        }

        .service-card p {
          color: var(--charcoal-light);
          font-size: 0.95rem;
        }

        /* Gallery */
        .gallery {
          padding: 5rem 2rem;
          position: relative;
        }

        .gallery-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .gallery-item {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 1;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-item:first-child {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-cta {
          text-align: center;
          margin-top: 2rem;
        }

        /* Reviews */
        .reviews {
          padding: 5rem 2rem;
          position: relative;
        }

        .reviews-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .review-card {
          background: var(--cream);
          padding: 1.75rem;
          border-radius: 8px;
        }

        .review-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 1rem;
        }

        .review-stars svg {
          width: 16px;
          height: 16px;
          fill: var(--golden);
        }

        .review-text {
          color: var(--charcoal);
          font-size: 0.95rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .review-author {
          font-weight: 600;
          color: var(--charcoal);
          font-size: 0.9rem;
        }

        .review-author span {
          color: var(--charcoal-light);
          font-weight: 400;
        }

        .reviews-cta {
          text-align: center;
          margin-top: 2rem;
        }

        /* CTA */
        .cta-section {
          padding: 5rem 2rem;
          text-align: center;
          position: relative;
        }

        .cta-inner {
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-inner h2 {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          color: var(--charcoal);
          margin-bottom: 1rem;
        }

        .cta-inner p {
          color: var(--charcoal-light);
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .cta-phone {
          font-size: 1.25rem;
          color: var(--charcoal);
          font-family: 'Playfair Display', serif;
        }

        .cta-phone a {
          color: inherit;
          text-decoration: none;
        }

        .cta-phone a:hover {
          color: var(--terracotta);
        }

        /* Contact */
        .contact {
          padding: 5rem 2rem;
          position: relative;
        }

        .contact-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
        }

        .contact-info h2 {
          font-size: 2rem;
          color: var(--charcoal);
          margin-bottom: 1rem;
        }

        .contact-info > p {
          color: var(--charcoal-light);
          margin-bottom: 1.5rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .contact-item svg {
          width: 20px;
          height: 20px;
          stroke: var(--sage);
          fill: none;
          stroke-width: 2;
          flex-shrink: 0;
        }

        .contact-item span,
        .contact-item a {
          color: var(--charcoal);
          text-decoration: none;
          font-size: 0.95rem;
        }

        .contact-item a:hover {
          color: var(--terracotta);
        }

        .contact-form {
          background: var(--white);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .contact-form h3 {
          font-size: 1.25rem;
          color: var(--charcoal);
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 0.25rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          background: var(--cream);
          border-radius: 4px;
          font-family: inherit;
          font-size: 1rem;
          color: var(--charcoal);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--terracotta);
        }

        .form-group textarea {
          min-height: 100px;
          resize: vertical;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-submit .btn {
          width: 100%;
          justify-content: center;
          padding: 1rem;
        }

        /* Footer */
        .footer {
          background: var(--charcoal);
          color: var(--white);
          padding: 3rem 2rem 1.5rem;
          position: relative;
          z-index: 10;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-brand .logo {
          color: var(--white);
          font-size: 1.25rem;
        }

        .footer-brand p {
          margin-top: 0.5rem;
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          max-width: 250px;
        }

        .footer-links {
          display: flex;
          gap: 3rem;
        }

        .footer-col h4 {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--golden);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col ul li {
          margin-bottom: 0.4rem;
        }

        .footer-col ul a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.9rem;
        }

        .footer-col ul a:hover {
          color: var(--white);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
        }

        .footer-bottom a {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
        }

        .footer-bottom a:hover {
          color: var(--white);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-inner,
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-image {
            order: -1;
          }

          .hero-image img {
            height: 350px;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-item:first-child {
            grid-column: span 1;
            grid-row: span 1;
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
            padding: 1.5rem;
            gap: 1rem;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .nav-links.active {
            display: flex;
          }

          .mobile-toggle {
            display: flex;
          }

          .hero {
            padding: 6rem 1.5rem 3rem;
          }

          .hero-swatches {
            flex-direction: column;
          }

          .services-grid,
          .reviews-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .footer-main {
            flex-direction: column;
          }

          .footer-links {
            flex-direction: column;
            gap: 1.5rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="logo">JP Painting</a>
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a>
            <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>Gallery</a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, '#reviews')}>Reviews</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="btn">Request Pricing</a>
          </div>
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Paint Stroke Background */}
      <div className="paint-strokes">
        <div className="stroke"></div>
        <div className="stroke"></div>
        <div className="stroke"></div>
        <div className="stroke"></div>
        <div className="stroke"></div>
      </div>

      {/* Main Content */}
      <main className="main-content">

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Professional Painting for <span>Bay Area Homes</span></h1>
            <p className="hero-text">Professional painting company serving Redwood City and the entire Bay Area. Interior, exterior, cabinets, drywall &mdash; expert craftsmanship for every project.</p>
            <div className="hero-ctas">
              <a href="#contact" className="btn" onClick={(e) => scrollToSection(e, '#contact')}>Request Pricing & Availability</a>
              <a href="https://www.yelp.com/biz/jp-painting-redwood-city" target="_blank" rel="noopener noreferrer" className="btn btn-yelp">View on Yelp</a>
            </div>
            <div className="hero-rating">
              <div className="hero-rating-stars">
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div className="hero-rating-text">Highly Rated <span>on Yelp</span></div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80" alt="Professional house painting" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Quality painting and finishing for every project</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <h3>Interior Painting</h3>
            <p>Transform your living spaces with flawless finishes and expert color consultation.</p>
          </div>
          <div className="service-card">
            <h3>Exterior Painting</h3>
            <p>Protect and beautify your home with weather-resistant, long-lasting coatings.</p>
          </div>
          <div className="service-card">
            <h3>Cabinet Painting</h3>
            <p>Refresh your kitchen or bathroom with professional cabinet refinishing.</p>
          </div>
          <div className="service-card">
            <h3>Drywall Repair</h3>
            <p>Expert patching and texture matching for holes, cracks, and damage.</p>
          </div>
          <div className="service-card">
            <h3>Wood Staining</h3>
            <p>Enhance natural wood beauty on doors, decks, fences, and trim.</p>
          </div>
          <div className="service-card">
            <h3>Wallpaper</h3>
            <p>Professional installation and removal for all wallpaper types.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery" id="gallery">
        <div className="section-header">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">Recent projects from around the Bay Area</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80" alt="Beautiful painted living room" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" alt="Kitchen cabinet painting" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" alt="Exterior house painting" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Interior wall painting" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80" alt="Finished painted room" />
          </div>
        </div>
        <div className="gallery-cta">
          <a href="https://www.yelp.com/biz/jp-painting-redwood-city" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Photos on Yelp</a>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews" id="reviews">
        <div className="section-header">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">Real reviews from Yelp</p>
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
            <p className="review-text">&ldquo;JP did a great job staining a new wood door to match the rest of the house. Very responsive and got the job done quickly with attention to detail.&rdquo;</p>
            <div className="review-author">Matt M. <span>&bull; Oakland</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p className="review-text">&ldquo;Professional, communicative, competitively priced, and fast. Finished look is awesome. I would highly recommend them!&rdquo;</p>
            <div className="review-author">Kathryn F. <span>&bull; San Mateo</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p className="review-text">&ldquo;Great job and a pleasure to work with. Prompt communication, fair quote, and high quality work. Paid attention to the details.&rdquo;</p>
            <div className="review-author">John M. <span>&bull; Redwood City</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <p className="review-text">&ldquo;Excellent work! Meticulous prep, beautiful result. They even replaced hardware and came on time every morning.&rdquo;</p>
            <div className="review-author">Linda S. <span>&bull; Redwood City</span></div>
          </div>
        </div>
        <div className="reviews-cta">
          <a href="https://www.yelp.com/biz/jp-painting-redwood-city" target="_blank" rel="noopener noreferrer" className="btn btn-yelp">View All Reviews on Yelp</a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Get Started?</h2>
          <p>Free estimates, fast response, and results guaranteed. Family owned, verified license, serving all Bay Area cities.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn" onClick={(e) => scrollToSection(e, '#contact')}>Request Request Quote</a>
            <a href="https://www.yelp.com/biz/jp-painting-redwood-city" target="_blank" rel="noopener noreferrer" className="btn btn-yelp">View on Yelp</a>
          </div>
          <div className="cta-phone">
            <a href="tel:6502499264">Request Pricing</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <h2>Get Your Request Quote</h2>
            <p>Fill out the form and JP will get back to you quickly.</p>
            <div className="contact-details">
              <div className="contact-item">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:6502499264">Request Pricing</a>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Redwood City &amp; All Bay Area</span>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Open 24/7 Mon-Fri</span>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                <span>Credit cards accepted</span>
              </div>
            </div>
            <a href="https://www.yelp.com/biz/jp-painting-redwood-city" target="_blank" rel="noopener noreferrer" className="btn btn-yelp">View on Yelp</a>
          </div>
          <div className="contact-form">
            <h3>Request a Quote</h3>
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
                  <option value="">Select...</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="cabinet">Cabinet Painting</option>
                  <option value="drywall">Drywall Repair</option>
                  <option value="staining">Wood Staining</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" placeholder="Tell us about your project..."></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn">Send Request</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#" className="logo">JP Painting</a>
              <p>Professional painting services for homes and businesses. Family owned, serving all Bay Area cities.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Interior</a></li>
                  <li><a href="#services">Exterior</a></li>
                  <li><a href="#services">Cabinets</a></li>
                  <li><a href="#services">Drywall</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Areas</h4>
                <ul>
                  <li><a href="#">Redwood City</a></li>
                  <li><a href="#">Palo Alto</a></li>
                  <li><a href="#">Redwood City</a></li>
                  <li><a href="#">Bay Area</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2025 JP Painting Inc.</span>
            <a href="https://www.yelp.com/biz/jp-painting-redwood-city" target="_blank" rel="noopener noreferrer">View on Yelp</a>
          </div>
        </div>
      </footer>
    </>
  )
}

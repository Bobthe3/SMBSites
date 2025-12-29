'use client';

import { useState, useEffect } from 'react';

export default function DinasPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('breakfast');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuData = {
    breakfast: [
      { name: 'Greek Omelette', desc: 'Bell peppers, onions, tomato, olives, oregano, garlic & feta cheese', price: '11.95' },
      { name: 'Chicken & Waffle', desc: 'Golden fried chicken breast with a fluffy Belgian waffle', price: '12.95' },
      { name: 'Eggs Benedict', desc: '2 poached eggs, Canadian bacon on English muffin with hollandaise', price: '11.95' },
      { name: 'Country Biscuits & Gravy', desc: 'Two buttermilk biscuits with our homemade country gravy', price: '7.50' },
      { name: 'French Toast', desc: '3 slices of thick-cut bread, grilled golden', price: '9.50' },
      { name: 'Steak & Eggs', desc: '14 oz tri-tip steak with 2 eggs any style', price: '16.95' },
    ],
    lunch: [
      { name: 'French Dip Beef', desc: 'Sliced beef on a French roll with au jus', price: '11.95' },
      { name: 'Monte Cristo', desc: 'Grilled turkey, ham, egg & Swiss cheese with fruit or fries', price: '11.95' },
      { name: 'Chicken Fried Steak', desc: 'Served with brown beef gravy, potatoes & vegetables', price: '12.95' },
      { name: 'Tuna Melt', desc: 'Classic tuna salad with melted cheese on grilled bread', price: '9.95' },
      { name: 'Chef\'s Salad', desc: 'Fresh greens with ham, turkey, cheese & hard-boiled egg', price: '12.95' },
      { name: 'Broiled Chicken Breast', desc: 'Tender chicken breast with potatoes, vegetables & French bread', price: '14.25' },
    ],
    dinner: [
      { name: 'New York Steak', desc: '14 oz premium cut with sauteed mushrooms', price: '18.95' },
      { name: 'T-Bone Steak', desc: '16 oz with mushrooms, bell peppers & onions', price: '22.95' },
      { name: 'Fish & Chips', desc: 'Golden fried fish with crispy fries & tartar sauce', price: '15.95' },
      { name: 'Veal Parmigiana', desc: 'Breaded veal cutlet with marinara & melted cheese', price: '15.95' },
      { name: 'Chicken Cordon Bleu', desc: 'Stuffed with ham & Swiss, served with soup or salad', price: '15.95' },
      { name: 'Fettuccine Alfredo', desc: 'With chicken & mushrooms, soup or salad, garlic bread', price: '14.95' },
    ],
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --red: #C41E3A;
          --red-dark: #9A1830;
          --red-light: #E85A6B;
          --green: #1D6F42;
          --green-dark: #145231;
          --green-light: #2D8B55;
          --cream: #FFF8F0;
          --cream-dark: #F5EDE3;
          --cream-darker: #E8DFD4;
          --brown: #2D2319;
          --brown-light: #4A3C2E;
          --white: #FFFFFF;
          --gold: #D4A574;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .skip-to-content { position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden; z-index: 10001; }
        .skip-to-content:focus { position: fixed; top: 0; left: 0; width: auto; height: auto; padding: 1rem 1.5rem; background: var(--red); color: var(--white); font-weight: 600; text-decoration: none; outline: 2px solid var(--gold); }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
          html { scroll-behavior: auto; }
        }

        body { font-family: 'Open Sans', sans-serif; background: var(--cream); color: var(--brown); line-height: 1.6; }
        h1, h2, h3, h4 { font-family: 'Lora', serif; font-weight: 600; }

        /* Decorative stripe */
        .stripe { height: 8px; background: linear-gradient(90deg, var(--green) 33%, var(--white) 33% 66%, var(--red) 66%); }

        /* Navigation */
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; background: rgba(255,248,240,0.98); backdrop-filter: blur(10px); transition: all 0.3s; border-bottom: 1px solid transparent; }
        .nav.scrolled { padding: 0.75rem 2rem; box-shadow: 0 2px 20px rgba(45,35,25,0.1); border-bottom: 1px solid var(--cream-darker); }
        .nav-logo { display: flex; flex-direction: column; align-items: center; text-decoration: none; }
        .nav-logo-text { font-family: 'Lora', serif; font-size: 1.6rem; font-weight: 700; color: var(--brown); letter-spacing: 1px; }
        .nav-logo-sub { font-size: 0.65rem; color: var(--red); text-transform: uppercase; letter-spacing: 3px; font-weight: 600; }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a { text-decoration: none; color: var(--brown-light); font-size: 0.9rem; font-weight: 500; transition: color 0.3s; position: relative; }
        .nav-links a:hover { color: var(--red); }
        .nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--red); transition: width 0.3s; }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta { background: var(--red); color: var(--white); padding: 0.75rem 1.5rem; border-radius: 6px; text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: all 0.3s; }
        .nav-cta:hover { background: var(--red-dark); transform: translateY(-2px); box-shadow: 0 4px 15px rgba(196,30,58,0.3); }
        .mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; }
        .mobile-menu-btn span { display: block; width: 24px; height: 2px; background: var(--brown); margin: 5px 0; transition: all 0.3s; }

        /* Hero */
        .hero { min-height: 90vh; display: flex; align-items: center; position: relative; overflow: hidden; padding: 8rem 2rem 4rem; background: linear-gradient(135deg, var(--cream) 0%, var(--cream-dark) 100%); }
        .hero-pattern { position: absolute; inset: 0; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D2319' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
        .hero-content { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 1fr; gap: 4rem; align-items: center; position: relative; z-index: 1; width: 100%; }
        .hero-text { animation: fadeInLeft 1s ease-out; }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--green); color: var(--white); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1.5rem; }
        .hero h1 { font-size: clamp(2.8rem, 5vw, 4rem); line-height: 1.15; color: var(--brown); margin-bottom: 1.5rem; }
        .hero h1 span { color: var(--red); font-style: italic; }
        .hero-description { font-size: 1.15rem; color: var(--brown-light); max-width: 500px; margin-bottom: 2rem; line-height: 1.8; }
        .hero-features { display: flex; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2.5rem; }
        .hero-feature { display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; color: var(--brown); }
        .hero-feature-icon { width: 24px; height: 24px; background: var(--cream-darker); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; }
        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; font-size: 1rem; font-weight: 600; text-decoration: none; border-radius: 8px; transition: all 0.3s; cursor: pointer; border: none; font-family: 'Open Sans', sans-serif; }
        .btn-primary { background: var(--red); color: var(--white); }
        .btn-primary:hover { background: var(--red-dark); transform: translateY(-3px); box-shadow: 0 10px 30px rgba(196,30,58,0.25); }
        .btn-secondary { background: var(--white); color: var(--brown); border: 2px solid var(--brown); }
        .btn-secondary:hover { background: var(--brown); color: var(--white); }

        .hero-image { position: relative; animation: fadeInRight 1s ease-out 0.2s both; }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        .hero-image-container { position: relative; }
        .hero-image-main { width: 100%; aspect-ratio: 1; background: var(--cream-darker); border-radius: 20px; overflow: hidden; box-shadow: 0 30px 60px rgba(45,35,25,0.15); display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 8px; padding: 8px; }
        .hero-image-item { background: linear-gradient(135deg, var(--gold) 0%, var(--cream-dark) 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 3rem; }
        .hero-floating { position: absolute; background: var(--white); border-radius: 12px; padding: 1rem 1.25rem; box-shadow: 0 10px 40px rgba(45,35,25,0.12); animation: float 4s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .hero-floating.card-1 { top: -20px; left: -30px; }
        .hero-floating.card-2 { bottom: 30px; right: -20px; animation-delay: 1.5s; }
        .hero-floating-icon { font-size: 1.5rem; margin-bottom: 0.25rem; }
        .hero-floating-text { font-size: 0.8rem; color: var(--brown-light); }
        .hero-floating-value { font-family: 'Lora', serif; font-size: 1.1rem; color: var(--brown); font-weight: 600; }

        /* About Section */
        .about { padding: 6rem 2rem; background: var(--white); }
        .about-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: center; }
        .about-image { position: relative; }
        .about-image-frame { aspect-ratio: 4/3; background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 6rem; box-shadow: 0 20px 50px rgba(196,30,58,0.2); }
        .about-image-badge { position: absolute; bottom: -20px; right: -20px; background: var(--green); color: var(--white); padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 10px 30px rgba(29,111,66,0.3); }
        .about-image-badge span { font-family: 'Lora', serif; font-size: 2.5rem; font-weight: 700; display: block; line-height: 1; }
        .about-image-badge p { font-size: 0.8rem; font-weight: 500; margin-top: 0.25rem; }
        .section-label { font-size: 0.8rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--red); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem; }
        .section-label::after { content: ''; width: 40px; height: 2px; background: var(--red); }
        .about h2 { font-size: clamp(2rem, 4vw, 2.8rem); color: var(--brown); margin-bottom: 1.5rem; line-height: 1.2; }
        .about h2 span { color: var(--red); }
        .about-text { font-size: 1.1rem; color: var(--brown-light); margin-bottom: 1.5rem; line-height: 1.8; }
        .about-features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 2rem; }
        .about-feature { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; background: var(--cream); border-radius: 10px; }
        .about-feature-icon { width: 40px; height: 40px; background: var(--red); color: var(--white); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
        .about-feature-text strong { display: block; font-size: 0.95rem; color: var(--brown); margin-bottom: 2px; }
        .about-feature-text span { font-size: 0.85rem; color: var(--brown-light); }

        /* Menu Section */
        .menu { padding: 6rem 2rem; background: var(--cream); }
        .menu-header { text-align: center; max-width: 600px; margin: 0 auto 3rem; }
        .menu h2 { font-size: clamp(2rem, 4vw, 2.8rem); color: var(--brown); margin-bottom: 1rem; }
        .menu h2 span { color: var(--red); }
        .menu-subtitle { color: var(--brown-light); font-size: 1.1rem; }
        .menu-tabs { display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 3rem; flex-wrap: wrap; }
        .menu-tab { padding: 0.75rem 2rem; font-size: 0.95rem; font-weight: 600; background: var(--white); border: 2px solid var(--cream-darker); border-radius: 50px; cursor: pointer; transition: all 0.3s; color: var(--brown-light); font-family: 'Open Sans', sans-serif; }
        .menu-tab:hover { border-color: var(--red); color: var(--red); }
        .menu-tab.active { background: var(--red); border-color: var(--red); color: var(--white); }
        .menu-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; }
        .menu-item { background: var(--white); padding: 1.5rem; border-radius: 12px; display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; transition: all 0.3s; border: 1px solid var(--cream-darker); }
        .menu-item:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(45,35,25,0.1); border-color: var(--red); }
        .menu-item-info h3 { font-family: 'Lora', serif; font-size: 1.15rem; color: var(--brown); margin-bottom: 0.5rem; }
        .menu-item-info p { font-size: 0.9rem; color: var(--brown-light); line-height: 1.5; }
        .menu-item-price { font-family: 'Lora', serif; font-size: 1.25rem; color: var(--red); font-weight: 600; white-space: nowrap; }
        .menu-cta { text-align: center; margin-top: 3rem; }

        /* Testimonials */
        .testimonials { padding: 6rem 2rem; background: var(--brown); color: var(--white); position: relative; overflow: hidden; }
        .testimonials::before { content: '"'; position: absolute; top: -80px; left: 5%; font-size: 40rem; color: rgba(255,255,255,0.02); font-family: Georgia, serif; line-height: 1; pointer-events: none; }
        .testimonials-header { text-align: center; margin-bottom: 3rem; position: relative; z-index: 1; }
        .testimonials .section-label { color: var(--gold); justify-content: center; }
        .testimonials h2 { font-size: clamp(2rem, 4vw, 2.8rem); color: var(--white); }
        .testimonials-rating { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem; }
        .testimonials-stars { color: var(--gold); font-size: 1.3rem; letter-spacing: 2px; }
        .testimonials-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; position: relative; z-index: 1; }
        .testimonial { background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 12px; border-left: 4px solid var(--gold); backdrop-filter: blur(10px); }
        .testimonial-text { font-size: 1.05rem; font-style: italic; margin-bottom: 1.5rem; line-height: 1.7; color: rgba(255,255,255,0.9); }
        .testimonial-author { font-weight: 600; color: var(--gold); }
        .testimonial-source { font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-top: 0.25rem; }

        /* Location & Hours */
        .location { padding: 6rem 2rem; background: var(--white); }
        .location-container { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .location-info .section-label { color: var(--green); }
        .location h2 { font-size: clamp(1.8rem, 3.5vw, 2.5rem); color: var(--brown); margin-bottom: 2rem; }
        .location-address { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 2rem; padding: 1.5rem; background: var(--cream); border-radius: 12px; }
        .location-address-icon { width: 50px; height: 50px; background: var(--red); color: var(--white); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0; }
        .location-address-text { font-size: 1.1rem; color: var(--brown); }
        .location-address-text a { color: var(--red); text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem; margin-top: 0.5rem; }
        .location-address-text a:hover { text-decoration: underline; }
        .location-phone { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
        .location-phone-icon { width: 50px; height: 50px; background: var(--green); color: var(--white); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
        .location-phone a { font-family: 'Lora', serif; font-size: 1.5rem; color: var(--brown); text-decoration: none; font-weight: 600; }
        .location-phone a:hover { color: var(--red); }
        .location-hours h3 { font-family: 'Lora', serif; font-size: 1.3rem; color: var(--brown); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; }
        .hours-grid { display: grid; gap: 0.5rem; }
        .hours-row { display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--cream-dark); font-size: 0.95rem; }
        .hours-row:last-child { border-bottom: none; }
        .hours-day { color: var(--brown); font-weight: 500; }
        .hours-time { color: var(--brown-light); }
        .location-features { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
        .location-feature { display: flex; align-items: center; gap: 0.5rem; background: var(--cream); padding: 0.6rem 1rem; border-radius: 50px; font-size: 0.85rem; font-weight: 500; color: var(--brown); }
        .location-map { background: var(--cream-dark); border-radius: 16px; overflow: hidden; position: relative; min-height: 400px; }
        .location-map iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

        /* CTA Section */
        .cta { padding: 5rem 2rem; background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%); text-align: center; color: var(--white); }
        .cta-container { max-width: 700px; margin: 0 auto; }
        .cta h2 { font-size: clamp(1.8rem, 4vw, 2.5rem); margin-bottom: 1rem; }
        .cta p { font-size: 1.1rem; opacity: 0.9; margin-bottom: 2rem; }
        .cta-buttons { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
        .cta .btn-primary { background: var(--white); color: var(--red); }
        .cta .btn-primary:hover { background: var(--cream); transform: translateY(-3px); }
        .cta .btn-secondary { background: transparent; color: var(--white); border: 2px solid var(--white); }
        .cta .btn-secondary:hover { background: var(--white); color: var(--red); }

        /* Footer */
        .footer { background: var(--brown); color: var(--white); padding: 4rem 2rem 2rem; }
        .footer-container { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 3rem; }
        .footer-brand .nav-logo-text { color: var(--white); font-size: 1.8rem; margin-bottom: 1rem; display: block; }
        .footer-brand p { color: rgba(255,255,255,0.7); font-size: 0.95rem; line-height: 1.7; max-width: 300px; }
        .footer-social { display: flex; gap: 0.75rem; margin-top: 1.5rem; }
        .footer-social a { width: 40px; height: 40px; background: rgba(255,255,255,0.1); color: var(--white); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; text-decoration: none; transition: all 0.3s; }
        .footer-social a:hover { background: var(--red); }
        .footer-column h4 { font-family: 'Lora', serif; font-size: 1.1rem; margin-bottom: 1.25rem; color: var(--gold); }
        .footer-column ul { list-style: none; }
        .footer-column li { margin-bottom: 0.6rem; }
        .footer-column a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.9rem; transition: color 0.3s; }
        .footer-column a:hover { color: var(--white); }
        .footer-bottom { max-width: 1100px; margin: 3rem auto 0; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .footer-bottom p { color: rgba(255,255,255,0.5); font-size: 0.85rem; }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .mobile-menu-btn { display: block; }
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-text { order: 1; }
          .hero-image { order: 0; max-width: 450px; margin: 0 auto 2rem; }
          .hero-features { justify-content: center; }
          .hero-buttons { justify-content: center; }
          .hero-floating { display: none; }
          .about-container { grid-template-columns: 1fr; }
          .about-image { max-width: 450px; margin: 0 auto; }
          .location-container { grid-template-columns: 1fr; }
          .location-map { min-height: 300px; }
          .footer-container { grid-template-columns: 1fr; text-align: center; }
          .footer-brand p { margin: 0 auto; }
          .footer-social { justify-content: center; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
        @media (max-width: 640px) {
          .hero { padding: 7rem 1.5rem 3rem; }
          .hero h1 { font-size: 2.2rem; }
          .hero-image-main { aspect-ratio: 1.2; }
          .hero-buttons { flex-direction: column; width: 100%; }
          .btn { width: 100%; justify-content: center; }
          .about, .menu, .testimonials, .location { padding: 4rem 1.5rem; }
          .menu-grid { grid-template-columns: 1fr; }
          .menu-item { flex-direction: column; gap: 0.75rem; }
          .menu-item-price { align-self: flex-start; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .about-features { grid-template-columns: 1fr; }
          .cta-buttons { flex-direction: column; }
        }
      `}</style>

      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      {/* Decorative Stripe */}
      <div className="stripe" />

      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <span className="nav-logo-text">Dina&apos;s</span>
          <span className="nav-logo-sub">Family Restaurant</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">Our Story</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#location">Location</a></li>
        </ul>
        <a href="tel:+15107701930" className="nav-cta">Call to Order</a>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-pattern" />
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">Serving Since 1985</span>
              <h1>Good Food, Made <span>Just Like Home</span></h1>
              <p className="hero-description">
                At Dina&apos;s, food quality is paramount. Everything is prepared fresh from scratch,
                just as you would at home. Join our family for breakfast, lunch, or dinner.
              </p>
              <div className="hero-features">
                <div className="hero-feature">
                  <span className="hero-feature-icon">&#127859;</span>
                  <span>Breakfast All Day</span>
                </div>
                <div className="hero-feature">
                  <span className="hero-feature-icon">&#128293;</span>
                  <span>Made From Scratch</span>
                </div>
                <div className="hero-feature">
                  <span className="hero-feature-icon">&#128666;</span>
                  <span>Catering Available</span>
                </div>
              </div>
              <div className="hero-buttons">
                <a href="#menu" className="btn btn-primary">View Our Menu</a>
                <a href="tel:+15107701930" className="btn btn-secondary">Call (510) 770-1930</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-container">
                <div className="hero-image-main">
                  <div className="hero-image-item">&#127859;</div>
                  <div className="hero-image-item">&#127828;</div>
                  <div className="hero-image-item">&#129367;</div>
                  <div className="hero-image-item">&#127856;</div>
                </div>
                <div className="hero-floating card-1">
                  <div className="hero-floating-icon">&#11088;</div>
                  <div className="hero-floating-text">Customer Rating</div>
                  <div className="hero-floating-value">4.7 Stars</div>
                </div>
                <div className="hero-floating card-2">
                  <div className="hero-floating-icon">&#128149;</div>
                  <div className="hero-floating-text">Family Owned</div>
                  <div className="hero-floating-value">39+ Years</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="about-container">
            <div className="about-image">
              <div className="about-image-frame">&#127869;</div>
              <div className="about-image-badge">
                <span>39+</span>
                <p>Years of Service</p>
              </div>
            </div>
            <div className="about-content">
              <div className="section-label">Our Story</div>
              <h2>A Family Tradition of <span>Homestyle Cooking</span></h2>
              <p className="about-text">
                Since 1985, Dina&apos;s Family Restaurant has been a beloved gathering place in Fremont.
                What started as a small family diner has grown into a community institution, but our
                commitment to quality has never wavered.
              </p>
              <p className="about-text">
                We believe in cooking the way families cook at home fresh ingredients,
                time-honored recipes, and generous portions. Every dish is prepared from scratch
                with care, just like your grandmother would make.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">&#127869;</div>
                  <div className="about-feature-text">
                    <strong>Fresh Ingredients</strong>
                    <span>Never frozen, always fresh</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">&#128104;&#8205;&#127859;</div>
                  <div className="about-feature-text">
                    <strong>Made From Scratch</strong>
                    <span>Traditional homestyle recipes</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">&#128106;</div>
                  <div className="about-feature-text">
                    <strong>Family Friendly</strong>
                    <span>Welcoming atmosphere for all</span>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">&#127860;</div>
                  <div className="about-feature-text">
                    <strong>Generous Portions</strong>
                    <span>Great value, every meal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="menu" id="menu">
          <div className="menu-header">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Menu</div>
            <h2>Delicious <span>Homestyle Favorites</span></h2>
            <p className="menu-subtitle">From hearty breakfasts to satisfying dinners, we have something for everyone.</p>
          </div>
          <div className="menu-tabs">
            <button
              className={`menu-tab ${activeMenu === 'breakfast' ? 'active' : ''}`}
              onClick={() => setActiveMenu('breakfast')}
            >
              Breakfast
            </button>
            <button
              className={`menu-tab ${activeMenu === 'lunch' ? 'active' : ''}`}
              onClick={() => setActiveMenu('lunch')}
            >
              Lunch
            </button>
            <button
              className={`menu-tab ${activeMenu === 'dinner' ? 'active' : ''}`}
              onClick={() => setActiveMenu('dinner')}
            >
              Dinner
            </button>
          </div>
          <div className="menu-grid">
            {menuData[activeMenu as keyof typeof menuData].map((item, index) => (
              <div className="menu-item" key={index}>
                <div className="menu-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="menu-item-price">${item.price}</span>
              </div>
            ))}
          </div>
          <div className="menu-cta">
            <a href="tel:+15107701930" className="btn btn-primary">Call to Order</a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials" id="reviews">
          <div className="testimonials-header">
            <div className="section-label">What Our Guests Say</div>
            <h2>Loved by Families for Generations</h2>
            <div className="testimonials-rating">
              <span className="testimonials-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>4.7 out of 5 on Yelp</span>
            </div>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="testimonial-text">
                &quot;Been coming here for over 20 years. The food is consistently delicious and the
                portions are huge! Best breakfast in Fremont, hands down.&quot;
              </p>
              <p className="testimonial-author">Long-time Customer</p>
              <p className="testimonial-source">Yelp Review</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                &quot;This place feels like home. The staff remembers your name, the coffee is always
                fresh, and the chicken fried steak is out of this world!&quot;
              </p>
              <p className="testimonial-author">Regular Guest</p>
              <p className="testimonial-source">Google Review</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                &quot;We bring our whole family here every Sunday. Great food, great prices, and
                they make everyone feel welcome. A true gem!&quot;
              </p>
              <p className="testimonial-author">Local Family</p>
              <p className="testimonial-source">Yelp Review</p>
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section className="location" id="location">
          <div className="location-container">
            <div className="location-info">
              <div className="section-label">Visit Us</div>
              <h2>Come Dine With Our Family</h2>
              <div className="location-address">
                <div className="location-address-icon">&#128205;</div>
                <div className="location-address-text">
                  <strong>40800 Fremont Blvd</strong><br />
                  Fremont, CA 94538<br />
                  <a href="https://maps.google.com/?q=40800+Fremont+Blvd+Fremont+CA+94538" target="_blank" rel="noopener noreferrer">
                    Get Directions &#8594;
                  </a>
                </div>
              </div>
              <div className="location-phone">
                <div className="location-phone-icon">&#128222;</div>
                <a href="tel:+15107701930">(510) 770-1930</a>
              </div>
              <div className="location-hours">
                <h3>&#128336; Hours</h3>
                <div className="hours-grid">
                  <div className="hours-row">
                    <span className="hours-day">Monday - Sunday</span>
                    <span className="hours-time">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-day">Breakfast</span>
                    <span className="hours-time">All Day</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-day">Lunch Specials</span>
                    <span className="hours-time">Until 3:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="location-features">
                <div className="location-feature">&#128663; Free Parking</div>
                <div className="location-feature">&#128666; Catering</div>
                <div className="location-feature">&#129370; Takeout</div>
                <div className="location-feature">&#128106; Family Friendly</div>
              </div>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8!2d-121.9401!3d37.5535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc0a0b2c1b8b7%3A0x1c2f9b8c5a1d2e3f!2s40800%20Fremont%20Blvd%2C%20Fremont%2C%20CA%2094538!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dina's Family Restaurant Location"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="cta-container">
            <h2>Ready to Experience Homestyle Cooking?</h2>
            <p>Call ahead for takeout, or stop by and join us for a meal. We can&apos;t wait to serve you!</p>
            <div className="cta-buttons">
              <a href="tel:+15107701930" className="btn btn-primary">Call (510) 770-1930</a>
              <a href="https://maps.google.com/?q=40800+Fremont+Blvd+Fremont+CA+94538" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Get Directions</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="nav-logo-text" style={{ fontFamily: 'Lora, serif' }}>Dina&apos;s Family Restaurant</span>
            <p>A Fremont tradition since 1985. Serving homestyle breakfast, lunch, and dinner made fresh from scratch every day.</p>
            <div className="footer-social">
              <a href="https://www.yelp.com/biz/dinas-family-restaurant-fremont" target="_blank" rel="noopener noreferrer" aria-label="Yelp">&#11088;</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">&#128101;</a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+15107701930">(510) 770-1930</a></li>
              <li><a href="https://maps.google.com/?q=40800+Fremont+Blvd+Fremont+CA+94538" target="_blank" rel="noopener noreferrer">40800 Fremont Blvd<br />Fremont, CA 94538</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dina&apos;s Family Restaurant. All rights reserved.</p>
        </div>
      </footer>

      {/* Bottom Stripe */}
      <div className="stripe" />
    </>
  );
}

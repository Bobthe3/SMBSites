'use client';

import { useEffect, useState } from 'react';
import {
  Phone, MapPin, Clock, Star, ChevronLeft, ChevronRight,
  Flame, Leaf, Instagram, Facebook, Mail, ExternalLink,
  UtensilsCrossed, Coffee, Drumstick, Sandwich, FrenchFries,
  CircleCheck, Users, ShoppingBag
} from 'lucide-react';

// Real product images from DoorDash CDN
const productImages = {
  naughtyChick: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/be1833b2-e344-4d87-b557-639afbc81e98-retina-large.jpg',
  bigG: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/048b1ced-aabe-4484-93bb-91b788973c44-retina-large.jpg',
  badBoy: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/6eebcc06-8648-422a-8726-1d975681e7da-retina-large.jpg',
  chickLicious: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/7ed9ae92-d2cd-453a-b2bf-f600165325e8-retina-large.jpg',
  tendersMeal: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/5e1484c2-df72-4ac9-96ea-85375022510a-retina-large.jpg',
  gMeal: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/0ba43cf7-22c9-4894-a82e-fc96bdc08583-retina-large.JPG',
  friendsMeal: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/3238c7b8-401f-4494-9152-5afe4d0b7302-retina-large.JPG',
  loadedFries: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/d3bb66a3-975a-43c0-8eec-8bbbeb3ce9d2-retina-large.png',
  wings: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/bfb49b10-4588-42af-a4a5-65accbec9207-retina-large.jpg',
  macCheese: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/d32258a3-7aa3-49b6-afca-5d0050789fbc-retina-large.jpg',
  fries: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/d0f5914b-5d7d-4147-8a2c-6943acea566e-retina-large.jpg',
  coleslaw: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/52e2887b-b31d-426a-9bc8-60856f731bf3-retina-large.jpg',
  vegG: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/c0b41892-640c-4fe3-a30c-2032a02d219c-retina-large.jpg',
  strawberryLemonade: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/39efda9c-9cea-438a-9d00-319857bf771a-retina-large.jpg',
  pineappleRefresher: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/9b00307c-9efe-48ec-a983-e6a1265a022f-retina-large.jpg',
  lemonade: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/9913e6b3-4b80-41b5-b98c-ee7044761aa0-retina-large.JPG',
  tenderBasket: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=600,format=auto,quality=90/media/yelp/edbd579e-1cbd-45b1-981d-01db8afada96-e59681ff-ed45-4648-a53e-47b1d5721637.jpg',
  combo1: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/74501249-56f9-40b5-b10b-2e001a450dae-retina-large.jpg',
};

const heroCarouselImages = [
  { src: productImages.bigG, alt: 'The Big G Sandwich' },
  { src: productImages.naughtyChick, alt: 'Naughty-Chick Sandwich' },
  { src: productImages.gMeal, alt: 'The G Meal' },
  { src: productImages.loadedFries, alt: 'Loaded G-Fries' },
  { src: productImages.wings, alt: 'Crispy Wings' },
];

export default function ChickenGsPage() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % heroCarouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % heroCarouselImages.length);
  const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + heroCarouselImages.length) % heroCarouselImages.length);

  return (
    <>
      <style jsx global>{`
        :root {
          --red: #DC2626;
          --red-dark: #B91C1C;
          --red-glow: rgba(220, 38, 38, 0.3);
          --charcoal: #0D0D0D;
          --charcoal-light: #1A1A1A;
          --charcoal-mid: #252525;
          --halal-green: #2D5A27;
          --halal-green-light: #3D7A37;
          --cream: #FFF8E7;
          --cream-dark: #F5EDD8;
          --white: #FFFFFF;
          --gray: #9CA3AF;
          --gray-light: #D1D5DB;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .skip-to-content {
          position: absolute; left: -9999px; top: auto;
          width: 1px; height: 1px; overflow: hidden; z-index: 10001;
        }
        .skip-to-content:focus {
          position: fixed; top: 0; left: 0; width: auto; height: auto;
          padding: 1rem 1.5rem; background: var(--charcoal); color: var(--cream);
          font-weight: 600; text-decoration: none; outline: 2px solid var(--red);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          html { scroll-behavior: auto; }
        }

        body {
          font-family: 'DM Sans', sans-serif;
          background: var(--charcoal);
          color: var(--cream);
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(13,13,13,0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(220,38,38,0.2);
        }

        .nav-logo {
          font-family: 'Fraunces', serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--red);
          text-decoration: none;
          letter-spacing: -1px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-logo .g-mark {
          width: 38px;
          height: 38px;
          background: var(--red);
          color: var(--charcoal);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 900;
          transform: rotate(-3deg);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--cream);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          transition: color 0.3s;
        }

        .nav-links a:hover { color: var(--red); }

        .halal-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--halal-green);
          color: var(--white);
          padding: 0.35rem 0.7rem;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 2px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--cream);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        /* Order Buttons Bar */
        .order-bar {
          display: flex;
          gap: 0.8rem;
          align-items: center;
        }

        .order-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s;
        }

        .order-btn.primary {
          background: var(--red);
          color: var(--white);
        }

        .order-btn.primary:hover {
          background: var(--red-dark);
        }

        .order-btn.secondary {
          background: var(--charcoal-mid);
          color: var(--cream);
          border: 1px solid var(--charcoal-mid);
        }

        .order-btn.secondary:hover {
          border-color: var(--red);
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 7rem 2rem 5rem;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 70%, rgba(220,38,38,0.12) 0%, transparent 50%),
            linear-gradient(180deg, var(--charcoal) 0%, var(--charcoal-light) 100%);
        }

        .hero-g-watermark {
          position: absolute;
          right: -8%;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Fraunces', serif;
          font-size: clamp(25rem, 45vw, 50rem);
          font-weight: 900;
          color: rgba(220,38,38,0.03);
          line-height: 0.8;
          pointer-events: none;
          user-select: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text { animation: slideInLeft 0.8s ease-out; }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .hero-badges {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .hero h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: 0.95;
          letter-spacing: -2px;
          color: var(--cream);
          margin-bottom: 1.2rem;
        }

        .hero h1 .highlight {
          color: var(--red);
          display: block;
        }

        .hero-tagline {
          font-size: 1.2rem;
          color: var(--gray);
          margin-bottom: 2rem;
          max-width: 500px;
          line-height: 1.7;
        }

        .hero-tagline strong {
          color: var(--cream);
          font-weight: 600;
        }

        /* Hero Order Platforms */
        .hero-order-platforms {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .hero-order-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.6rem;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid transparent;
        }

        .hero-order-btn.doordash {
          background: #FF3008;
          color: var(--white);
        }

        .hero-order-btn.ubereats {
          background: #06C167;
          color: var(--white);
        }

        .hero-order-btn.grubhub {
          background: #F63440;
          color: var(--white);
        }

        .hero-order-btn.direct {
          background: var(--charcoal-mid);
          color: var(--cream);
          border-color: var(--gray);
        }

        .hero-order-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        .hero-stats {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .hero-stat-value {
          font-family: 'Fraunces', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--red);
          line-height: 1;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .hero-stat-label {
          font-size: 0.8rem;
          color: var(--gray);
          letter-spacing: 0.5px;
          margin-top: 0.3rem;
        }

        /* Hero Carousel */
        .hero-carousel {
          position: relative;
          animation: slideInRight 0.8s ease-out 0.2s both;
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .carousel-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .carousel-slide.active {
          opacity: 1;
        }

        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-nav {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .carousel-dot.active {
          background: var(--white);
          width: 24px;
          border-radius: 4px;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          background: rgba(0,0,0,0.5);
          color: var(--white);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 10;
        }

        .carousel-btn:hover {
          background: var(--red);
        }

        .carousel-btn.prev { left: 1rem; }
        .carousel-btn.next { right: 1rem; }

        /* Instagram Section */
        .instagram-section {
          padding: 5rem 2rem;
          background: var(--charcoal-light);
        }

        .section-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
        }

        .section-label::before,
        .section-label::after {
          content: '';
          width: 30px;
          height: 1px;
          background: var(--red);
          opacity: 0.4;
        }

        .section-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.1;
          color: var(--cream);
        }

        .section-title span { color: var(--red); }

        .instagram-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .instagram-header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .instagram-icon-wrapper {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #833AB4, #FD1D1D, #F77737);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .instagram-handle {
          font-family: 'Fraunces', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--cream);
        }

        .instagram-handle span {
          color: var(--gray);
          font-size: 0.9rem;
          font-weight: 400;
          display: block;
        }

        .instagram-follow-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          background: linear-gradient(135deg, #833AB4, #FD1D1D, #F77737);
          color: var(--white);
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .instagram-follow-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(253, 29, 29, 0.3);
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .instagram-item {
          aspect-ratio: 1;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }

        .instagram-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }

        .instagram-item:hover img {
          transform: scale(1.05);
        }

        .instagram-item-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .instagram-item:hover .instagram-item-overlay {
          opacity: 1;
        }

        .instagram-item.video::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23DC2626'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 24px;
        }

        /* Menu Section */
        .menu {
          padding: 5rem 2rem;
          background: var(--charcoal);
        }

        .menu-category {
          margin-bottom: 4rem;
        }

        .menu-category:last-child {
          margin-bottom: 0;
        }

        .menu-category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--charcoal-mid);
        }

        .menu-category-icon {
          width: 48px;
          height: 48px;
          background: var(--red);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }

        .menu-category-title {
          font-family: 'Fraunces', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--cream);
        }

        .menu-category-subtitle {
          font-size: 0.85rem;
          color: var(--gray);
          margin-top: 0.2rem;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.2rem;
        }

        .menu-item {
          background: var(--charcoal-light);
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          transition: all 0.3s;
          border: 1px solid transparent;
        }

        .menu-item:hover {
          border-color: var(--red);
          transform: translateY(-2px);
        }

        .menu-item-image {
          width: 100px;
          height: 100px;
          flex-shrink: 0;
          overflow: hidden;
        }

        .menu-item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .menu-item-content {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .menu-item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.3rem;
        }

        .menu-item-name {
          font-family: 'Fraunces', serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--cream);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .menu-item-price {
          font-family: 'Fraunces', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--red);
        }

        .menu-item-desc {
          font-size: 0.8rem;
          color: var(--gray);
          line-height: 1.4;
        }

        .menu-item-tags {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }

        .menu-tag {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 0.2rem 0.5rem;
          background: var(--charcoal-mid);
          color: var(--gray);
          text-transform: uppercase;
          border-radius: 3px;
        }

        .menu-tag.popular {
          background: var(--red);
          color: var(--white);
        }

        .menu-tag.veggie {
          background: var(--halal-green);
          color: var(--white);
        }

        .menu-tag.spicy {
          background: #F59E0B;
          color: var(--charcoal);
        }

        /* Sides Grid */
        .sides-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1rem;
        }

        .side-item {
          background: var(--charcoal-light);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s;
        }

        .side-item:hover {
          transform: translateY(-2px);
        }

        .side-item-image {
          aspect-ratio: 1;
          overflow: hidden;
        }

        .side-item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .side-item-content {
          padding: 0.8rem;
          text-align: center;
        }

        .side-item-name {
          font-weight: 600;
          color: var(--cream);
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }

        .side-item-price {
          color: var(--red);
          font-weight: 700;
        }

        /* Add-ons Row */
        .addons-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--charcoal-mid);
        }

        .addon-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.8rem;
          background: var(--charcoal-light);
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .addon-item span:last-child {
          color: var(--red);
          font-weight: 600;
        }

        /* Story Section */
        .story {
          padding: 5rem 2rem;
          background: var(--red);
          color: var(--white);
          position: relative;
          overflow: hidden;
        }

        .story-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .story-content .section-label {
          color: rgba(255,255,255,0.7);
        }

        .story h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.2rem;
        }

        .story-text {
          font-size: 1.05rem;
          line-height: 1.7;
          opacity: 0.95;
          margin-bottom: 1.2rem;
        }

        .story-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem;
          margin-top: 1.5rem;
        }

        .story-feature {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
        }

        .story-feature-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .story-feature-text strong {
          display: block;
          font-size: 0.95rem;
          margin-bottom: 0.1rem;
        }

        .story-feature-text span {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .story-visual {
          position: relative;
        }

        .story-visual-main {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
        }

        .story-visual-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Reviews */
        .reviews {
          padding: 5rem 2rem;
          background: var(--charcoal-light);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .review-card {
          background: var(--charcoal-mid);
          padding: 1.5rem;
          border-radius: 8px;
          border-left: 3px solid var(--red);
        }

        .review-stars {
          color: #F59E0B;
          font-size: 1rem;
          letter-spacing: 2px;
          margin-bottom: 0.8rem;
          display: flex;
          gap: 0.2rem;
        }

        .review-text {
          font-size: 1rem;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1rem;
          color: var(--cream);
        }

        .review-author {
          font-weight: 700;
          color: var(--red);
          font-size: 0.9rem;
        }

        .review-source {
          font-size: 0.8rem;
          color: var(--gray);
          margin-top: 0.2rem;
        }

        /* Location */
        .location {
          padding: 5rem 2rem;
          background: var(--cream);
          color: var(--charcoal);
        }

        .location-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .location h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .location-address {
          font-size: 1.1rem;
          padding-left: 1.2rem;
          border-left: 3px solid var(--red);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .location-hours h3 {
          font-family: 'Fraunces', serif;
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          color: var(--red);
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          padding: 0.6rem 0;
          border-bottom: 1px solid var(--cream-dark);
          font-size: 1rem;
        }

        .location-contact {
          margin-top: 1.5rem;
        }

        .location-contact a {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--red);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          transition: opacity 0.3s;
        }

        .location-contact a:hover { opacity: 0.7; }

        .location-map {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .location-map img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .location-map-placeholder {
          width: 100%;
          height: 100%;
          min-height: 300px;
          background: var(--charcoal-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          color: var(--cream);
        }

        .location-map-placeholder a {
          color: var(--red);
          font-weight: 600;
          text-decoration: none;
        }

        /* Footer */
        .footer {
          background: var(--charcoal);
          padding: 3rem 2rem 1.5rem;
          border-top: 1px solid var(--charcoal-mid);
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
        }

        .footer-brand .nav-logo { margin-bottom: 1rem; }

        .footer-brand p {
          color: var(--gray);
          max-width: 300px;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        .footer-social {
          display: flex;
          gap: 0.8rem;
          margin-top: 1.2rem;
        }

        .footer-social a {
          width: 40px;
          height: 40px;
          background: var(--charcoal-mid);
          color: var(--cream);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .footer-social a:hover {
          background: var(--red);
        }

        .footer-column h4 {
          font-family: 'Fraunces', serif;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--red);
        }

        .footer-column ul { list-style: none; }

        .footer-column li { margin-bottom: 0.5rem; }

        .footer-column a {
          color: var(--gray);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s;
        }

        .footer-column a:hover { color: var(--cream); }

        .footer-bottom {
          max-width: 1100px;
          margin: 2rem auto 0;
          padding-top: 1.5rem;
          border-top: 1px solid var(--charcoal-mid);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          color: var(--gray);
          font-size: 0.85rem;
        }

        /* Animations */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text { order: 1; }
          .hero-carousel { order: 0; margin-bottom: 2rem; }
          .carousel-container { max-width: 400px; }
          .hero-badges { justify-content: center; }
          .hero-order-platforms { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-tagline { margin: 0 auto 2rem; }
          .hero-g-watermark { display: none; }
          .instagram-grid { grid-template-columns: repeat(2, 1fr); }
          .story-container { grid-template-columns: 1fr; }
          .story-visual { order: -1; }
          .location-container { grid-template-columns: 1fr; }
          .footer-container { grid-template-columns: 1fr; text-align: center; }
          .footer-brand p { margin: 0 auto; }
          .footer-social { justify-content: center; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }

        @media (max-width: 768px) {
          .nav { padding: 0.8rem 1rem; }
          .nav-links { display: none; }
          .order-bar { display: none; }
          .mobile-menu-btn { display: block; }
          .hero { padding: 5rem 1rem 3rem; }
          .hero h1 { font-size: 2.5rem; }
          .hero-order-platforms { flex-direction: column; align-items: center; }
          .hero-order-btn { width: 100%; max-width: 280px; justify-content: center; }
          .hero-stats { gap: 1.5rem; }
          .story-features { grid-template-columns: 1fr; }
          .menu-grid { grid-template-columns: 1fr; }
          .menu-item-image { width: 80px; height: 80px; }
          .reviews-grid { grid-template-columns: 1fr; }
          .sides-grid { grid-template-columns: repeat(2, 1fr); }
          .instagram-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* Skip Link */}
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      {/* Navigation */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          <span className="g-mark">G</span>
          Chicken G&apos;s
        </a>
        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#story">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#location">Location</a>
          <div className="halal-badge">
            <CircleCheck size={12} />
            Halal Certified
          </div>
        </div>
        <div className="order-bar">
          <a href="https://order.toasttab.com/online/chicken-g-s-fremont-40839-fremont-boulevard" className="order-btn primary" target="_blank" rel="noopener noreferrer">
            <ShoppingBag size={16} />
            Order Direct
          </a>
          <a href="https://www.doordash.com/store/chickeng's-fremont-24885714/" className="order-btn secondary" target="_blank" rel="noopener noreferrer">
            DoorDash
          </a>
          <a href="https://www.ubereats.com/store/chicken-gs-fremont/p-QJc--1V0akOLdMo2moXA" className="order-btn secondary" target="_blank" rel="noopener noreferrer">
            Uber Eats
          </a>
        </div>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <main id="main-content">
        {/* Hero */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-g-watermark">G</div>
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badges">
                <div className="halal-badge">
                  <CircleCheck size={12} />
                  Certified Halal
                </div>
              </div>
              <h1>
                HAND-BATTERED
                <span className="highlight">CRISPY CHICKEN</span>
              </h1>
              <p className="hero-tagline">
                <strong>Made to order, never frozen.</strong> Premium halal fried chicken that arrives hot and crispy. Enjoy complimentary chai while you wait.
              </p>
              <div className="hero-order-platforms">
                <a href="https://order.toasttab.com/online/chicken-g-s-fremont-40839-fremont-boulevard" className="hero-order-btn direct" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag size={18} />
                  Order Direct
                </a>
                <a href="https://www.doordash.com/store/chickeng's-fremont-24885714/" className="hero-order-btn doordash" target="_blank" rel="noopener noreferrer">
                  DoorDash
                </a>
                <a href="https://www.ubereats.com/store/chicken-gs-fremont/p-QJc--1V0akOLdMo2moXA" className="hero-order-btn ubereats" target="_blank" rel="noopener noreferrer">
                  Uber Eats
                </a>
                <a href="https://www.grubhub.com/restaurant/chicken-gs-40839-freemont-blvd-fremont/8523120" className="hero-order-btn grubhub" target="_blank" rel="noopener noreferrer">
                  Grubhub
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">
                    <Star size={20} fill="currentColor" />
                    4.5
                  </div>
                  <div className="hero-stat-label">1K+ Reviews</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">3</div>
                  <div className="hero-stat-label">Bay Area Locations</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">
                    <Clock size={18} />
                    1AM
                  </div>
                  <div className="hero-stat-label">Open Late</div>
                </div>
              </div>
            </div>
            <div className="hero-carousel">
              <div className="carousel-container">
                {heroCarouselImages.map((img, idx) => (
                  <div key={idx} className={`carousel-slide ${idx === carouselIndex ? 'active' : ''}`}>
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
                <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">
                  <ChevronLeft size={20} />
                </button>
                <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">
                  <ChevronRight size={20} />
                </button>
                <div className="carousel-nav">
                  {heroCarouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`carousel-dot ${idx === carouselIndex ? 'active' : ''}`}
                      onClick={() => setCarouselIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="instagram-section">
          <div className="section-container">
            <div className={`instagram-header fade-in ${visible.has(0) ? 'visible' : ''}`}>
              <div className="instagram-header-left">
                <div className="instagram-icon-wrapper">
                  <Instagram size={24} color="white" />
                </div>
                <div className="instagram-handle">
                  @chickengs1
                  <span>Follow us for the latest</span>
                </div>
              </div>
              <a href="https://www.instagram.com/chickengs1/" className="instagram-follow-btn" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
                Follow on Instagram
              </a>
            </div>
            <div className="instagram-grid">
              <a href="https://www.instagram.com/chickengs1/" target="_blank" rel="noopener noreferrer" className="instagram-item video">
                <img src={productImages.bigG} alt="The Big G Sandwich" />
                <div className="instagram-item-overlay">
                  <ExternalLink size={24} color="white" />
                </div>
              </a>
              <a href="https://www.instagram.com/chickengs1/" target="_blank" rel="noopener noreferrer" className="instagram-item video">
                <img src={productImages.naughtyChick} alt="Naughty-Chick" />
                <div className="instagram-item-overlay">
                  <ExternalLink size={24} color="white" />
                </div>
              </a>
              <a href="https://www.instagram.com/chickengs1/" target="_blank" rel="noopener noreferrer" className="instagram-item">
                <img src={productImages.loadedFries} alt="Loaded G-Fries" />
                <div className="instagram-item-overlay">
                  <ExternalLink size={24} color="white" />
                </div>
              </a>
              <a href="https://www.instagram.com/chickengs1/" target="_blank" rel="noopener noreferrer" className="instagram-item video">
                <img src={productImages.gMeal} alt="The G Meal" />
                <div className="instagram-item-overlay">
                  <ExternalLink size={24} color="white" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="menu" id="menu">
          <div className="section-container">
            <div className={`section-header fade-in ${visible.has(1) ? 'visible' : ''}`}>
              <div className="section-label">Our Menu</div>
              <h2 className="section-title">PREMIUM <span>HALAL</span> CHICKEN</h2>
            </div>

            {/* Sandwiches */}
            <div className={`menu-category fade-in ${visible.has(2) ? 'visible' : ''}`}>
              <div className="menu-category-header">
                <div className="menu-category-icon">
                  <Sandwich size={24} />
                </div>
                <div>
                  <h3 className="menu-category-title">Chicken Sandwiches</h3>
                  <p className="menu-category-subtitle">All sandwiches come with a side</p>
                </div>
              </div>
              <div className="menu-grid">
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.bigG} alt="The Big G" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">The Big G</span>
                      <span className="menu-item-price">$14.49</span>
                    </div>
                    <p className="menu-item-desc">Swiss cheese, lettuce, tomato, red onions & tangy garlic sauce</p>
                    <div className="menu-item-tags">
                      <span className="menu-tag popular">Best Seller</span>
                    </div>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.naughtyChick} alt="Naughty-Chick" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">
                        Naughty-Chick
                        <Flame size={14} color="#F59E0B" />
                      </span>
                      <span className="menu-item-price">$14.99</span>
                    </div>
                    <p className="menu-item-desc">Pepper jack, serrano chili, lettuce & G-sauce</p>
                    <div className="menu-item-tags">
                      <span className="menu-tag spicy">Spicy</span>
                    </div>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.badBoy} alt="Bad Boy" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">
                        Bad Boy
                        <Flame size={14} color="#F59E0B" />
                      </span>
                      <span className="menu-item-price">$14.49</span>
                    </div>
                    <p className="menu-item-desc">Cheddar cheese, lettuce & G-sauce</p>
                    <div className="menu-item-tags">
                      <span className="menu-tag spicy">Medium</span>
                    </div>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.chickLicious} alt="Chick-Licious" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">Chick-Licious</span>
                      <span className="menu-item-price">$13.49</span>
                    </div>
                    <p className="menu-item-desc">Classic with premium mayonnaise</p>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.vegG} alt="My Veg G" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">
                        My Veg G
                        <Leaf size={14} color="#2D5A27" />
                      </span>
                      <span className="menu-item-price">$13.99</span>
                    </div>
                    <p className="menu-item-desc">Potato & chickpeas patty with tangy garlic sauce</p>
                    <div className="menu-item-tags">
                      <span className="menu-tag veggie">Vegetarian</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fried Chicken */}
            <div className={`menu-category fade-in ${visible.has(3) ? 'visible' : ''}`}>
              <div className="menu-category-header">
                <div className="menu-category-icon">
                  <Drumstick size={24} />
                </div>
                <div>
                  <h3 className="menu-category-title">Fried Chicken</h3>
                  <p className="menu-category-subtitle">Hand-battered every time</p>
                </div>
              </div>
              <div className="menu-grid">
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.combo1} alt="Combo 1" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">Combo 1</span>
                      <span className="menu-item-price">$13.99</span>
                    </div>
                    <p className="menu-item-desc">2 pc chicken with side, Texas Toast & sauces</p>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.gMeal} alt="The G Meal" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">The G Meal</span>
                      <span className="menu-item-price">$22.99</span>
                    </div>
                    <p className="menu-item-desc">4 pc chicken with 2 sides, 2 Texas Toasts</p>
                    <div className="menu-item-tags">
                      <span className="menu-tag popular">Popular</span>
                    </div>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.friendsMeal} alt="Friends Meal" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">Friends Meal</span>
                      <span className="menu-item-price">$38.99</span>
                    </div>
                    <p className="menu-item-desc">8 pc chicken with 3 sides, 3 Texas Toasts</p>
                    <div className="menu-item-tags">
                      <span className="menu-tag">Feeds 4</span>
                    </div>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.tendersMeal} alt="Tender Meal" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">Tender Meal</span>
                      <span className="menu-item-price">$12.99</span>
                    </div>
                    <p className="menu-item-desc">2 pc tenders with side & sauces</p>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.tenderBasket} alt="Tender Basket" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">Tender Basket</span>
                      <span className="menu-item-price">$21.99</span>
                    </div>
                    <p className="menu-item-desc">5 pc tenders with house sauces</p>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.wings} alt="Crispy Wings" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">Crispy Wings</span>
                      <span className="menu-item-price">$13.99</span>
                    </div>
                    <p className="menu-item-desc">6 pc wings with G-sauce</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Loaded Fries */}
            <div className={`menu-category fade-in ${visible.has(4) ? 'visible' : ''}`}>
              <div className="menu-category-header">
                <div className="menu-category-icon">
                  <UtensilsCrossed size={24} />
                </div>
                <div>
                  <h3 className="menu-category-title">Loaded Fries</h3>
                  <p className="menu-category-subtitle">Crowd favorites</p>
                </div>
              </div>
              <div className="menu-grid">
                <div className="menu-item">
                  <div className="menu-item-image">
                    <img src={productImages.loadedFries} alt="Loaded G-Fries" />
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <span className="menu-item-name">Loaded G-Fries</span>
                      <span className="menu-item-price">$15.99</span>
                    </div>
                    <p className="menu-item-desc">Fries topped with crispy chicken, cheddar, sauces, onions & serranos</p>
                    <div className="menu-item-tags">
                      <span className="menu-tag popular">Fan Favorite</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sides */}
            <div className={`menu-category fade-in ${visible.has(5) ? 'visible' : ''}`}>
              <div className="menu-category-header">
                <div className="menu-category-icon">
                  <UtensilsCrossed size={24} />
                </div>
                <div>
                  <h3 className="menu-category-title">Sides</h3>
                </div>
              </div>
              <div className="sides-grid">
                <div className="side-item">
                  <div className="side-item-image">
                    <img src={productImages.fries} alt="Seasoned Fries" />
                  </div>
                  <div className="side-item-content">
                    <div className="side-item-name">Seasoned Fries</div>
                    <div className="side-item-price">$4.49</div>
                  </div>
                </div>
                <div className="side-item">
                  <div className="side-item-image">
                    <img src={productImages.macCheese} alt="Mac & Cheese" />
                  </div>
                  <div className="side-item-content">
                    <div className="side-item-name">Mac & Cheese</div>
                    <div className="side-item-price">$4.49</div>
                  </div>
                </div>
                <div className="side-item">
                  <div className="side-item-image">
                    <img src={productImages.coleslaw} alt="Coleslaw" />
                  </div>
                  <div className="side-item-content">
                    <div className="side-item-name">Coleslaw</div>
                    <div className="side-item-price">$4.49</div>
                  </div>
                </div>
              </div>
              <div className="addons-row">
                <div className="addon-item"><span>G-Sauce</span> <span>$0.50</span></div>
                <div className="addon-item"><span>Tangy Garlic Sauce</span> <span>$0.50</span></div>
                <div className="addon-item"><span>HOT Sauce</span> <span>$0.50</span></div>
                <div className="addon-item"><span>Texas Toast</span> <span>$0.50</span></div>
              </div>
            </div>

            {/* Drinks */}
            <div className={`menu-category fade-in ${visible.has(6) ? 'visible' : ''}`}>
              <div className="menu-category-header">
                <div className="menu-category-icon">
                  <Coffee size={24} />
                </div>
                <div>
                  <h3 className="menu-category-title">Drinks</h3>
                  <p className="menu-category-subtitle">House-made refreshments</p>
                </div>
              </div>
              <div className="sides-grid">
                <div className="side-item">
                  <div className="side-item-image">
                    <img src={productImages.lemonade} alt="Housemade Lemonade" />
                  </div>
                  <div className="side-item-content">
                    <div className="side-item-name">Fresh Lemonade</div>
                    <div className="side-item-price">$4.99</div>
                  </div>
                </div>
                <div className="side-item">
                  <div className="side-item-image">
                    <img src={productImages.strawberryLemonade} alt="Strawberry Lemonade" />
                  </div>
                  <div className="side-item-content">
                    <div className="side-item-name">Strawberry Lemonade</div>
                    <div className="side-item-price">$4.99</div>
                  </div>
                </div>
                <div className="side-item">
                  <div className="side-item-image">
                    <img src={productImages.pineappleRefresher} alt="Pineapple Refresher" />
                  </div>
                  <div className="side-item-content">
                    <div className="side-item-name">Pineapple Refresher</div>
                    <div className="side-item-price">$5.49</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="story" id="story">
          <div className="story-container">
            <div className={`story-content fade-in ${visible.has(7) ? 'visible' : ''}`}>
              <div className="section-label">Our Promise</div>
              <h2>HAND-BATTERED.<br />NEVER FROZEN.<br />ALWAYS HALAL.</h2>
              <p className="story-text">
                At Chicken G&apos;s, every piece is hand-battered fresh when you order—that&apos;s why it arrives hot and crispy. We source only antibiotic-free, cage-free, humanely-raised chicken.
              </p>
              <p className="story-text">
                Enjoy complimentary masala chai while you wait. It&apos;s our way of saying thank you for choosing quality halal food.
              </p>
              <div className="story-features">
                <div className="story-feature">
                  <div className="story-feature-icon">
                    <UtensilsCrossed size={20} color="white" />
                  </div>
                  <div className="story-feature-text">
                    <strong>Made to Order</strong>
                    <span>Fresh-battered for every customer</span>
                  </div>
                </div>
                <div className="story-feature">
                  <div className="story-feature-icon">
                    <Coffee size={20} color="white" />
                  </div>
                  <div className="story-feature-text">
                    <strong>Free Chai Tea</strong>
                    <span>Complimentary while you wait</span>
                  </div>
                </div>
                <div className="story-feature">
                  <div className="story-feature-icon">
                    <Leaf size={20} color="white" />
                  </div>
                  <div className="story-feature-text">
                    <strong>Premium Quality</strong>
                    <span>Cage-free, antibiotic-free</span>
                  </div>
                </div>
                <div className="story-feature">
                  <div className="story-feature-icon">
                    <CircleCheck size={20} color="white" />
                  </div>
                  <div className="story-feature-text">
                    <strong>Certified Halal</strong>
                    <span>USDA inspected chicken</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`story-visual fade-in ${visible.has(8) ? 'visible' : ''}`}>
              <div className="story-visual-main">
                <img src={productImages.friendsMeal} alt="Chicken G's Fried Chicken" />
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="reviews" id="reviews">
          <div className="section-container">
            <div className={`section-header fade-in ${visible.has(9) ? 'visible' : ''}`}>
              <div className="section-label">Customer Love</div>
              <h2 className="section-title">WHAT PEOPLE <span>SAY</span></h2>
            </div>
            <div className="reviews-grid">
              <div className={`review-card fade-in ${visible.has(10) ? 'visible' : ''}`}>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="review-text">&quot;OMG! My chicken was thoroughly cooked and juicy inside, crispy outside on a warm bun. The orangish sauce is BOMB! Will definitely order again!&quot;</p>
                <p className="review-author">Mercedes P.</p>
                <p className="review-source">DoorDash Review</p>
              </div>
              <div className={`review-card fade-in ${visible.has(11) ? 'visible' : ''}`}>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="review-text">&quot;Believe the hype, this might be the best fried chicken I&apos;ve ever had. The mac n cheese is fire too. Glad I took a chance and tried them.&quot;</p>
                <p className="review-author">Steven P.</p>
                <p className="review-source">DoorDash Review</p>
              </div>
              <div className={`review-card fade-in ${visible.has(12) ? 'visible' : ''}`}>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="review-text">&quot;Great tasting chicken, piece itself is huge! Nicely seasoned fries. Ordered multiple times and each time it tasted freshly made, never old.&quot;</p>
                <p className="review-author">Fernando V.</p>
                <p className="review-source">DoorDash Review</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="location" id="location">
          <div className="location-container">
            <div className={`location-info fade-in ${visible.has(13) ? 'visible' : ''}`}>
              <div className="section-label" style={{ justifyContent: 'flex-start', color: 'var(--red)' }}>Visit Us</div>
              <h2>FREMONT LOCATION</h2>
              <div className="location-address">
                <strong>40839 Fremont Blvd</strong><br />
                Fremont, CA 94538
              </div>
              <div className="location-hours">
                <h3>Hours</h3>
                <div className="hours-row">
                  <span>Every Day</span>
                  <span>10:30 AM - 1:00 AM</span>
                </div>
              </div>
              <div className="location-contact">
                <a href="tel:+16509187777">
                  <Phone size={18} />
                  (650) 918-7777
                </a>
                <a href="mailto:Contact@chickengs.com">
                  <Mail size={18} />
                  Contact@chickengs.com
                </a>
              </div>
            </div>
            <div className={`location-map fade-in ${visible.has(14) ? 'visible' : ''}`}>
              <div className="location-map-placeholder">
                <MapPin size={48} />
                <a href="https://maps.google.com/?q=40839+Fremont+Blvd+Fremont+CA+94538" target="_blank" rel="noopener noreferrer">
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <span className="g-mark">G</span>
              Chicken G&apos;s
            </a>
            <p>Hand-battered halal fried chicken made to order. Never frozen, always crispy. Bay Area&apos;s favorite halal chicken spot.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/chickengs1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/chickengs/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#story">About</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Order Online</h4>
            <ul>
              <li><a href="https://order.toasttab.com/online/chicken-g-s-fremont-40839-fremont-boulevard" target="_blank" rel="noopener noreferrer">Order Direct</a></li>
              <li><a href="https://www.doordash.com/store/chickeng's-fremont-24885714/" target="_blank" rel="noopener noreferrer">DoorDash</a></li>
              <li><a href="https://www.ubereats.com/store/chicken-gs-fremont/p-QJc--1V0akOLdMo2moXA" target="_blank" rel="noopener noreferrer">Uber Eats</a></li>
              <li><a href="https://www.grubhub.com/restaurant/chicken-gs-40839-freemont-blvd-fremont/8523120" target="_blank" rel="noopener noreferrer">Grubhub</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Chicken G&apos;s. All rights reserved.</p>
          <div className="halal-badge">
            <CircleCheck size={12} />
            Certified Halal
          </div>
        </div>
      </footer>
    </>
  );
}

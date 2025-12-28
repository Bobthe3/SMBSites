'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { reviews, averageRating, totalReviews } from '@/data/keekuzcom/reviews';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'google':
        return '🔍';
      case 'yelp':
        return '⭐';
      case 'doordash':
        return '🚗';
      default:
        return '💬';
    }
  };

  const getSourceName = (source: string) => {
    switch (source) {
      case 'google':
        return 'Google';
      case 'yelp':
        return 'Yelp';
      case 'doordash':
        return 'DoorDash';
      default:
        return 'Review';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            What Our Customers Say
          </h2>

          {/* Overall Rating */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-lg">
            <div className="text-4xl font-bold text-dark">{averageRating.toFixed(1)}</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.round(averageRating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">Based on {totalReviews}+ reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Review Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              {/* Avatar */}
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-600">
                {reviews[currentIndex].name.charAt(0)}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-bold text-dark">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500">{reviews[currentIndex].date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getSourceIcon(reviews[currentIndex].source)}</span>
                    <span className="text-sm text-gray-500">{getSourceName(reviews[currentIndex].source)}</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= reviews[currentIndex].rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <blockquote className="text-lg text-gray-700 leading-relaxed italic">
              &ldquo;{reviews[currentIndex].text}&rdquo;
            </blockquote>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex ? 'bg-primary-500 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://www.google.com/search?q=keeku+da+dhaba+fremont+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow hover:shadow-md transition text-gray-700"
          >
            <span>🔍</span>
            <span>Google Reviews</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://www.yelp.com/biz/keeku-da-dhaba-fremont"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow hover:shadow-md transition text-gray-700"
          >
            <span>⭐</span>
            <span>Yelp Reviews</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

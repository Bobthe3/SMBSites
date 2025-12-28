import { Clock, Phone, MapPin, Truck, ExternalLink } from 'lucide-react';
import DeliveryButtons from '@/components/DeliveryButtons';
import { restaurantInfo } from '@/data/restaurant';

export default function OrderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur rounded-full mb-6">
            <Truck className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Order Online</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get authentic Dhaba-style Indian cuisine delivered right to your doorstep
          </p>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Choose Your Delivery Service</h2>
            <p className="text-gray-600">
              Click on any of the options below to order from your preferred delivery platform
            </p>
          </div>

          {/* Large Delivery Buttons */}
          <div className="space-y-4">
            {restaurantInfo.deliveryServices.map((service) => (
              <a
                key={service.name}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 rounded-2xl transition transform hover:scale-[1.02] shadow-lg"
                style={{
                  backgroundColor: service.color,
                  boxShadow: `0 10px 40px ${service.color}30`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <p className="text-white/80 text-sm">Order for delivery</p>
                  </div>
                </div>
                <ExternalLink className="h-6 w-6 text-white" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark">Delivery Hours</h3>
              </div>
              <ul className="space-y-2">
                {restaurantInfo.hoursDisplay.map((schedule, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{schedule.days}</span>
                    <span
                      className={`font-medium ${
                        schedule.hours === 'Closed' ? 'text-red-500' : 'text-green-600'
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone Order */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark">Call to Order</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Prefer to order by phone? Give us a call and we&apos;ll have your order ready for pickup!
              </p>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                <Phone className="h-5 w-5" />
                {restaurantInfo.phoneFormatted}
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark">Pickup Location</h3>
              </div>
              <p className="text-gray-600 mb-4">{restaurantInfo.address.full}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-dark mb-8">Ordering Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="font-bold text-dark mb-2">Order Early</h3>
              <p className="text-gray-600 text-sm">
                Weekends can get busy! Order early for faster delivery.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🌶️</div>
              <h3 className="font-bold text-dark mb-2">Spice Preference</h3>
              <p className="text-gray-600 text-sm">
                Add notes for spice level - we can adjust to your taste!
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🍚</div>
              <h3 className="font-bold text-dark mb-2">Complete Meal</h3>
              <p className="text-gray-600 text-sm">
                Don&apos;t forget to add naan or rice to complete your meal!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import ContactForm from '@/components/keekuzcom/ContactForm';
import GoogleMap from '@/components/keekuzcom/GoogleMap';
import { restaurantInfo } from '@/data/keekuzcom/restaurant';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have a question or feedback? We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 text-center border border-primary-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Call Us</h3>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition"
              >
                {restaurantInfo.phoneFormatted}
              </a>
              <p className="text-gray-600 mt-2 text-sm">Tap to call on mobile</p>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 text-center border border-accent-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 rounded-full mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Visit Us</h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-dark hover:text-primary-600 transition"
              >
                {restaurantInfo.address.street}
                <br />
                {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
              </a>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 text-center border border-secondary-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-500 rounded-full mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Hours</h3>
              <ul className="space-y-1 text-sm">
                {restaurantInfo.hoursDisplay.map((schedule, index) => (
                  <li key={index} className="flex justify-between">
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
          </div>

          {/* Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Find Us</h3>
              <GoogleMap height="400px" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'Do you offer catering services?',
                answer:
                  'Yes! We offer catering for events of all sizes. Please call us or send a message through the contact form to discuss your needs.',
              },
              {
                question: 'Can I make a reservation?',
                answer:
                  'We primarily operate on a first-come, first-served basis. For large groups, please call ahead so we can accommodate you.',
              },
              {
                question: 'Do you have vegetarian options?',
                answer:
                  'Absolutely! About half of our menu is vegetarian. Look for the green leaf icon on our menu page.',
              },
              {
                question: 'Can you adjust the spice level?',
                answer:
                  'Yes, we can adjust the spice level to your preference. Just let us know when ordering.',
              },
              {
                question: 'Do you offer gluten-free options?',
                answer:
                  'Many of our dishes are naturally gluten-free. Please ask our staff about specific items.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-dark mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

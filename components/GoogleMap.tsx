import { restaurantInfo } from '@/data/restaurant';
import { MapPin, Navigation } from 'lucide-react';

interface GoogleMapProps {
  height?: string;
}

export default function GoogleMap({ height = '400px' }: GoogleMapProps) {
  const { address, mapCoordinates } = restaurantInfo;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapCoordinates.lat},${mapCoordinates.lng}`;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.5!2d${mapCoordinates.lng}!3d${mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc0a5a5a5a5a5%3A0x0!2s${encodeURIComponent(address.full)}!5e0!3m2!1sen!2sus!4v1234567890`;

  return (
    <div className="w-full">
      {/* Map container */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height }}>
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Keeku da Dhaba Location"
        />
      </div>

      {/* Address and directions */}
      <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow">
        <div className="flex items-center gap-3">
          <div className="bg-primary-100 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <p className="font-semibold text-dark">{address.street}</p>
            <p className="text-gray-600">{address.city}, {address.state} {address.zip}</p>
          </div>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          <Navigation className="h-5 w-5" />
          Get Directions
        </a>
      </div>
    </div>
  );
}

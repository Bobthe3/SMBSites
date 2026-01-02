import { restaurantInfo } from '@/data/restaurant';
import { ExternalLink } from 'lucide-react';

interface DeliveryButtonsProps {
  size?: 'default' | 'large';
  showTitle?: boolean;
}

export default function DeliveryButtons({ size = 'default', showTitle = true }: DeliveryButtonsProps) {
  const isLarge = size === 'large';

  return (
    <div className="w-full">
      {showTitle && (
        <h3 className={`text-center font-bold text-dark mb-6 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
          Order for Delivery
        </h3>
      )}
      <div className={`grid gap-4 ${isLarge ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'}`}>
        {restaurantInfo.deliveryServices.map((service) => (
          <a
            key={service.name}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 rounded-xl font-bold transition transform hover:scale-105 shadow-lg ${
              isLarge ? 'px-8 py-6 text-xl' : 'px-6 py-4 text-lg'
            }`}
            style={{
              backgroundColor: service.color,
              color: 'white',
              boxShadow: `0 10px 30px ${service.color}40`,
            }}
          >
            <span>{service.name}</span>
            <ExternalLink className={isLarge ? 'h-6 w-6' : 'h-5 w-5'} />
          </a>
        ))}
      </div>
    </div>
  );
}

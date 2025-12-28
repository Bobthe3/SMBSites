'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { restaurantInfo } from '@/data/sweetgarden/restaurant';

interface OpenStatusProps {
  showHours?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function OpenStatus({ showHours = false, size = 'md' }: OpenStatusProps) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [currentDay, setCurrentDay] = useState<string>('');
  const [todayHours, setTodayHours] = useState<string>('');
  const [closingTime, setClosingTime] = useState<string>('');

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const dayName = days[now.getDay()] as keyof typeof restaurantInfo.hours;

      setCurrentDay(dayName.charAt(0).toUpperCase() + dayName.slice(1));

      const todaySchedule = restaurantInfo.hours[dayName];

      if (!todaySchedule) {
        setIsOpen(false);
        setTodayHours('Closed today');
        return;
      }

      setTodayHours(`${todaySchedule.open} - ${todaySchedule.close}`);
      setClosingTime(todaySchedule.close);

      // Parse times
      const parseTime = (timeStr: string) => {
        const [time, period] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        return hours * 60 + minutes;
      };

      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const openMinutes = parseTime(todaySchedule.open);
      const closeMinutes = parseTime(todaySchedule.close);

      // Check for break time
      let isInBreak = false;
      if (todaySchedule.break) {
        const breakStartMinutes = parseTime(todaySchedule.break.start);
        const breakEndMinutes = parseTime(todaySchedule.break.end);
        isInBreak = currentMinutes >= breakStartMinutes && currentMinutes < breakEndMinutes;
      }

      setIsOpen(currentMinutes >= openMinutes && currentMinutes < closeMinutes && !isInBreak);
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  if (isOpen === null) {
    return null; // Loading state
  }

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  return (
    <div className="inline-flex flex-col items-center gap-1">
      <div
        className={`inline-flex items-center gap-2 rounded-full font-semibold ${sizeClasses[size]} ${
          isOpen
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-red-100 text-red-700 border border-red-200'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}
        />
        {isOpen ? 'Open Now' : 'Closed'}
        {isOpen && closingTime && (
          <span className="text-green-600 font-normal">· until {closingTime}</span>
        )}
      </div>
      {showHours && (
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <Clock className="h-3 w-3" />
          <span>{currentDay}: {todayHours}</span>
        </div>
      )}
    </div>
  );
}

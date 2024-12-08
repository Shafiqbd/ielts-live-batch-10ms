"use client";

import { useCallback, useEffect, useState } from "react";

export default function Countdown({ start_at }: any) {
  // Function to calculate remaining time
  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date(start_at).getTime(); // Parse ISO string to timestamp

    const now = new Date().getTime();
    const difference = now - targetDate;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [start_at]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!start_at) return;

    // Update the timer every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [start_at, calculateTimeLeft]);

  return (
    <div className="space-y-4 mt-10">
      <p className="text-lg font-semibold text-gray-200">
        ১০ম ব্যাচের ভর্তি শেষ হবে:
      </p>
      <div className="flex space-x-4">
        {/* Time Box */}
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div className="flex flex-col items-center " key={unit}>
            <div className="flex flex-col items-center justify-center w-16 h-16 bg-black text-white border-2 border-gray-700 rounded-md">
              <p className="text-2xl font-bold">{value}</p>
            </div>
            <p className="text-sm capitalize text-gray-400 mt-2">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

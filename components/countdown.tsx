"use client";
import { useEffect, useState } from 'react';

const CountdownTimer: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(true); 

  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-09-20T00:00:00'); 
    const currentTime = new Date();
    const difference = eventDate.getTime() - currentTime.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  if (isClosed) {
    return null; 
  }

  const countdownDisplay = `
    ${String(timeLeft.days).padStart(2, '0')}d : ${String(timeLeft.hours).padStart(2, '0')}h : 
    ${String(timeLeft.minutes).padStart(2, '0')}m : ${String(timeLeft.seconds).padStart(2, '0')}s
  `;

  return (
    <div
      className={`bg-black text-terminal-green font-mono ${
        isFullScreen ? 'h-screen w-screen' : 'h-auto w-auto'
      }`}
    >

      <div className="absolute top-0 left-0 p-4 flex flex-col">
       
        <div className="flex space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-600 rounded-full cursor-pointer" onClick={handleClose}></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer" onClick={handleMinimize}></div>
          <div className="w-3 h-3 bg-green-600 rounded-full cursor-pointer" onClick={handleToggleFullScreen}></div>
        </div>

        {!isMinimized && (

        <div className="text-white text-xl">
          yama@deceptions:~$ <span className="text-terminal-green">./countdown.sh</span>
        </div>
        )}
      </div>
      {!isMinimized && (
        <div className="flex items-center justify-center h-full">
          <div className="text-[6rem] leading-none text-terminal-green">
            {countdownDisplay}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;

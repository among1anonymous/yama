"use client";
import localFont from 'next/font/local';
import { useEffect, useState } from 'react';

const myFont = localFont({
  src: '/fonts/Hacked-KerX.ttf',
})
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
    ${String(timeLeft.days).padStart(2, '0')}D : ${String(timeLeft.hours).padStart(2, '0')}H : 
    ${String(timeLeft.minutes).padStart(2, '0')}M : ${String(timeLeft.seconds).padStart(2, '0')}S
  `;

  return (
    <div
      className={`bg-black text-terminal-green font-mono ${
        isFullScreen ? 'h-screen w-screen' : 'h-auto w-auto'
      }`}
    >
      
      <div className="top-0 absolute left-0 p-4 flex flex-col">
       
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
            <div className={myFont.className}>
              {countdownDisplay}
            </div>
          </div>
        </div>
      )}
      </div>
    
  );
};

export default CountdownTimer;

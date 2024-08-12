import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SetupTime = ({ initialSeconds = 4 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isRunning, seconds]);

  const getClipPath = (seconds: any) => {
    switch (seconds) {
      case 3:
        return "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%, 0% 100%, 50% 100%, 50% 50%, 0% 50%, 0% 0%, 100% 0%, 100% 50%, 50% 50%, 50% 0%)";
      case 2:
        return "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)";
      case 1:
        return "polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)";
      case 0:
        return "polygon(0% 0%, 0% 0%, 100% 50%, 0% 0%)";
      default:
        return "none";
    }
  };
  return (
    
      <div className="relative w-16 h-16 ">
        <svg className="absolute inset-0 w-full h-full">
          <motion.circle
            cx="50%"
            cy="50%"
            r="28"
            fill="#E9E9E9"
            stroke="#000000"
            strokeWidth={4}
            clipPath={getClipPath(seconds)}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            style={{ transform: "rotate(-90deg)", transformOrigin: "center", padding:"4px 4px 4px 4px" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl text-gray-800">{seconds}</span>
        </div>
      </div>
    
  );
};

export default SetupTime;

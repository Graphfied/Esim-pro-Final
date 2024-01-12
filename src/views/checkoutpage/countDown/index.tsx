"use client";
import { useState, useEffect } from "react";

export default function CountDown() {
  const [countdown, setCountdown] = useState(15); // 15 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1));
    }, 60 * 1000); // Update every minute

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return <div className="inline">{countdown}</div>;
}

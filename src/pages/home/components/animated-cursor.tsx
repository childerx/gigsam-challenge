import React, { useRef, useState, useEffect } from "react";
import { BsCursorFill } from "react-icons/bs";

const AnimatedCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: -20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Update position at an interval
    const intervalId = setInterval(() => {
      const rect = container.getBoundingClientRect();

      // Random x and y within container (minus some offset so it doesn’t overflow)
      const maxOffset = 25; // Adjust if your elements are larger
      const randomX = Math.random() * (rect.width - maxOffset);
      const randomY = Math.random() * (rect.height - maxOffset);

      setPosition({ x: randomX, y: randomY });
    }, 2000); // Move to a new random position every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div ref={containerRef} className="relative  ">
      {/* Cursor Icon */}
      <BsCursorFill
        className="
          text-blue-600
          absolute
          transition-all duration-1000
        "
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        aria-hidden="true"
      />

      {/* Text */}
      <p
        className="
          bg-blue-600 text-black text-xs p-1 rounded-md absolute
          transition-all duration-1000
        "
        style={{
          // Offset the text slightly so it doesn’t overlap the icon
          transform: `translate(${position.x - 50}px, ${position.y + 20}px)`,
        }}
      >
        Pranathi
      </p>
    </div>
  );
};

export default AnimatedCursor;

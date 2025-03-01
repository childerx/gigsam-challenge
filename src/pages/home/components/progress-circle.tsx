import React from "react";

interface ProgressCircleProps {
  progress?: number;
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  showPercentage?: boolean;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress = 90,
  size = 120,
  strokeWidth = 10,
  strokeColor = "#14b8a6",
  showPercentage = true,
}) => {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress / 100);

  return (
    <div className="flex items-center justify-center  rounded-full">
      <svg width={size} height={size}>
        {/* Background track circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#333" // a darker gray for contrast, adjust if needed
          strokeWidth={strokeWidth}
        />
        {/* Progress indicator circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={strokeColor} // teal color for progress
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`} // start from the top
        />
        {/* Centered progress number */}
        {showPercentage && (
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            className="text-xs text-[rgb(237,237,237)]"
          >
            {progress}
          </text>
        )}
      </svg>
    </div>
  );
};

export default ProgressCircle;

import { codeOwners, conformanceData } from "@/constants/data";
import React from "react";
import ProgressCircle from "./progress-circle";

const ConformanceTable = () => {
  return (
    <div className="mt-8 flex border-t border-r border-l border-[var(--border)] rounded-xl bg-[rgb(10,10,10)]">
      <div className="w-full flex-1 flex flex-col gap-2.5  border-r border-[var(--border)] p-5">
        <p className="font-medium text-sm text-[rgb(237,237,237)] ">
          Conformance
        </p>

        {conformanceData.map((data, index) => (
          <div
            className="bg-[rgb(18,18,18)] p-4 rounded-lg flex justify-between items-center mt-2"
            key={index}
          >
            <p className="text-[rgb(155,155,155)] text-xs">{data.name}</p>
            <div className="flex gap-2 items-center">
              {index === 0 && (
                <ProgressCircle
                  progress={90}
                  size={22}
                  strokeWidth={3}
                  showPercentage={false}
                />
              )}
              <p className="text-[rgb(237,237,237)] ">{data.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex-1 flex flex-col gap-2.5  p-5 overflow-hidden">
        <p className="font-medium text-sm text-[rgb(237,237,237)] ">
          Code Owners
        </p>

        {codeOwners.map((data, index) => (
          <div
            className="bg-[rgb(18,18,18)] px-2 py-4 rounded-lg flex justify-between items-center mt-2"
            key={index}
          >
            <p className="text-[rgb(155,155,155)] text-xs">{data.name}</p>
            <div className="flex items-center justify-end">
              {data.owners.map((value, index) => (
                <img
                  src={value}
                  alt="profile"
                  className={`size-6 rounded-full object-cover border border-[var(--border)] ${index !== data.owners.length - 1 && "-mr-3"} `}
                  key={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConformanceTable;

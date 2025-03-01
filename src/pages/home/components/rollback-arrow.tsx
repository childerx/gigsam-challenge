import React from "react";
import Xarrow from "react-xarrows";
import ProgressCircle from "./progress-circle";
import { MdOutlineCommit } from "react-icons/md";
import { MdRestore } from "react-icons/md";

const RollbackArrow: React.FC = () => {
  return (
    <div className=" ">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="teal" />
            <stop offset="33%" stopColor="green" />
            <stop offset="66%" stopColor="yellow" />
            <stop offset="100%" stopColor="red" />
          </linearGradient>
        </defs>
      </svg>
      <div
        id="topBox"
        className="max-w-[80%] absolute left-0 bg-[rgb(10,10,10)] border border-[var(--border)] rounded-xl p-4  w-full "
      >
        <div className="flex justify-between items-center gap-4 ">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="text-sm text-[rgb(237,237,237)] mb-1">
                <span className="text-[rgb(169,169,169)]">vercel-site/</span>
                jvbj4ynna
              </p>
              <p className="text-sm text-[rgb(169,169,169)]">1d ago</p>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <MdOutlineCommit
                className="size-5 text-[rgb(169,169,169)] "
                aria-hidden="true"
              />
              <p className="text-sm text-[rgb(237,237,237)] ">
                ba5f55f Update bento box design
              </p>
            </div>
          </div>
          <ProgressCircle size={38} strokeWidth={3} />
        </div>
      </div>

      <div
        id="bottomBox"
        className="max-w-[80%] absolute right-0 bottom-1 bg-[rgb(10,10,10)] border border-dashed border-[var(--border)] rounded-xl p-4  w-full "
      >
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="text-sm text-[rgb(237,237,237)] mb-1">
                <span className="text-[rgb(169,169,169)]">vercel-site/</span>
                gigj178pv
              </p>
              <p className="text-sm text-[rgb(169,169,169)]">10m ago</p>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <MdOutlineCommit
                className="size-5 text-[rgb(169,169,169)] "
                aria-hidden="true"
              />
              <p className="text-sm text-[rgb(237,237,237)] ">
                bx012mm Fix ESLint error on query
              </p>
            </div>
          </div>
          <ProgressCircle
            progress={55}
            size={38}
            strokeWidth={3}
            strokeColor="red"
          />
        </div>
      </div>

      {/* middle item */}

      <div className="absolute z-10 top-[56%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-10 bg-[rgb(10,10,10)] border border-[var(--border)] rounded-full flex justify-center items-center">
        <MdRestore
          className="size-5 text-[rgb(169,169,169)]"
          aria-hidden="true"
        />
      </div>

      <Xarrow
        start="topBox"
        end="bottomBox"
        path="smooth"
        curveness={0.95}
        strokeWidth={3}
        color="url(#arrowGradient)"
        showTail={true}
        showHead={false}
        headSize={4}
      />
    </div>
  );
};

export default RollbackArrow;

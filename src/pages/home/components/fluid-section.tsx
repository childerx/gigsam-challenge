import React from "react";
import ParticleFlowBackground from "./particles";

const FluidComputeSection: React.FC = () => {
  return (
    <section
      className="
        mb-12
        
        bg-black text-white
        
       px-8
      "
    >
      <div className="relative w-full flex flex-col items-center justify-center h-72 border border-[var(--border)]">
        {/* Our advanced fluid background */}
        {/* <FluidBackground /> */}
        <ParticleFlowBackground />

        {/* Content on top */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl font-semibold mb-4">
            Introducing Fluid Compute
          </h1>
          <p className=" text-[#ededed] mb-6">
            The power of servers in serverless form
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#"
              className="
              bg-white text-black px-6 py-3
              rounded-full 
              hover:bg-gray-200 transition
            "
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FluidComputeSection;

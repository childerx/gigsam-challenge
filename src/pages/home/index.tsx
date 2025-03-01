import "./components/vercel.css";

import React, { FC, PropsWithChildren } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import VercelCanvas from "./components/vercel-canvas";
import triangle from "@/assets/images/triangle.svg";
import buttonTriangle from "@/assets/images/button-triangle.svg";
import FluidComputeSection from "./components/fluid-section";
import { BsStars } from "react-icons/bs";
import { GiChameleonGlyph } from "react-icons/gi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsCursorFill } from "react-icons/bs";
import AnimatedCursor from "./components/animated-cursor";
import { MdOutlineArrowUpward } from "react-icons/md";
import AnalyticsSection from "./components/analytics";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { BiSave } from "react-icons/bi";
import RollbackArrow from "./components/rollback-arrow";
import ConformanceTable from "./components/conformance-table";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuShieldCheck } from "react-icons/lu";

const HomePage = () => {
  return (
    <main className="relative font-Geist max-w-6xl mx-auto min-h-screen w-full overflow-x-hidden bg-[#000] pt-10 text-[rgb(237,237,237)]">
      <FluidComputeSection />
      <header className="flex w-full items-center justify-center px-4">
        <div
          className="relative grid grid-cols-[repeat(8,var(--cellsize))]
         grid-rows-[1fr_repeat(4,var(--cellsize))] place-items-center border border-[var(--border)]
          md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(8,var(--cellsize))]"
        >
          <FloatingCross />

          {/* Background */}
          <div
            aria-hidden={true}
            className="absolute bottom-0 size-full overflow-hidden pt-[calc(var(--cellsize)*2)] md:pt-[var(--cellsize)]"
          >
            <VercelCanvas />
            <div
              className={twJoin(
                "absolute isolate size-full scale-150 mix-blend-hard-light md:scale-100",
                "gradient"
              )}
            />
            <div
              className="absolute mt-16 size-full scale-150 md:mt-0 md:scale-100"
              style={{
                background:
                  "radial-gradient(150% 150% at 50% 140%, transparent 0, transparent 50%, #000 75%)",
              }}
            />
            <BackgoundLines />
          </div>

          <LogoPrism />

          {/* Grid blocks */}
          {/* Small size grid */}
          <div
            aria-hidden={true}
            className="pointer-events-none relative col-span-full row-span-full grid grid-cols-subgrid grid-rows-subgrid md:hidden"
          >
            <div className="col-span-full row-span-1" />
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className={twJoin(
                  "border-r border-t border-[var(--border)]",
                  // MF: added later
                  // Hide right border if last column (prevent double border)
                  (i + 1) % 8 === 0 && "border-r-0",
                  // Hide bottom border if last row
                  i > 23 && "border-b-0"
                )}
              />
            ))}
          </div>

          {/* Medium size grid */}
          <div
            aria-hidden={true}
            className="pointer-events-none relative col-span-full row-span-full hidden grid-cols-subgrid grid-rows-subgrid md:grid"
          >
            {Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className={twJoin(
                  "border border-l-0 border-t-0 border-[var(--border)]",
                  i > 12 && i < 22 && "border-0",
                  i === 22 && "border-b-0",
                  i > 24 && i < 34 && "border-0",
                  i === 34 && "border-b-0",
                  i > 36 && i < 46 && "border-0",
                  i === 46 && "border-b-0",
                  i > 48 && i < 58 && "border-r-0",
                  // hide right border if last column
                  (i + 1) % 12 === 0 && "border-r-0",
                  // hide bottom border if last row
                  i > 83 && "border-b-0"
                )}
              />
            ))}
          </div>

          {/* Main heading block */}
          <div
            className="border-3 relative z-10 col-span-full col-start-1 row-span-1 row-start-1
           flex flex-col items-center justify-center gap-2 border-green
           bg-[#000] p-5 md:col-span-10 md:col-start-2 md:row-span-4 md:row-start-2 md:gap-4 md:bg-transparent"
          >
            <h1
              className="max-w-[80%] text-balance text-center text-[clamp(24px,3.75vw,48px)] font-semibold
             tracking-tighter md:max-w-none xs-h:text-[22px]"
            >
              Your complete platform for the web.
            </h1>
            <p className="max-w-[80%] text-balance text-center text-sm leading-relaxed tracking-tight text-[rgb(161,161,161)] sm:text-base md:max-w-xl md:text-xl md:leading-loose">
              Vercel provides the developer tools and cloud infrastructure to
              build, scale, and secure a faster, more personalized web.
            </p>
            <div className="mt-3 flex gap-4 md:gap-6">
              <Button variant="light">
                <img
                  src={buttonTriangle}
                  alt=""
                  className="-ml-2"
                  width={16}
                  height={16}
                />
                <span className="md:hidden">Deploy</span>
                <span className="hidden md:block">Start Deploying</span>
              </Button>
              <Button variant="dark">Get a Demo</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="flex w-full items-center justify-center px-4 ">
        <div
          className="relative grid grid-cols-[repeat(8,var(--cellsize))]
         grid-rows-[1fr_repeat(4,var(--cellsize))] place-items-center border border-[var(--border)]
          md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(4,var(--cellsize))]"
        >
          <FloatingCross right />
          <div className="w-full absolute flex p-8">
            <div className="flex-[2]">
              <p className="font-light text-2xl text-[rgb(237,237,237)] leading-10 ">
                <span className="font-extrabold">runway</span> build times went
                from 7m to 40s. <br />
                <span className="flex items-center">
                  {" "}
                  <GiChameleonGlyph />
                  <span className="font-extrabold mx-2">Leonardo.Ai</span> saw a
                  95% reduction in page
                </span>
                load times. <span className="font-extrabold ">_zapier</span> saw
                24x faster buimds.
              </p>

              <div className="w-fit border border-[var(--border)] text-[rgb(237,237,237)] flex gap-3 rounded-full mt-5 overflow-hidden">
                {[
                  "AI Apps",
                  "Web Apps",
                  "Ecommerce",
                  "Marketing",
                  "Platforms",
                ].map((item, idx) => {
                  return (
                    <div
                      key={item}
                      className={`flex items-center gap-2 px-3 py-2.5  ${
                        idx === 0 &&
                        "bg-[#111] border-r border-[var(--border)] rounded-full px-5 "
                      } `}
                    >
                      <span className="text-sm ">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[rgb(237,237,237)]">
                Get started using our pre-built templates. Easily stream
                long-running LLM responses for a better user experience with
                zero-config infrastructure that's always globally performant.
              </p>
              <button className="flex justify-between items-center gap-3 px-5 py-2.5 mt-6 rounded-full bg-[rgb(237,237,237)] text-[rgb(10,10,10)] border-[rgb(10,10,10)] hover:bg-[rgb(220,220,220)]">
                <span className="md:hidden">Deploy</span>
                <span className="hidden md:block text-sm">
                  Deploy AI Apps in seconds
                </span>
                <BsStars className="text-black size-5" />
              </button>
            </div>
          </div>
          {/* divider */}
          <div className="absolute h-[0.5px] bg-[var(--border)] w-full bottom-6 " />
        </div>
      </section>

      {/* shipping section */}
      <section className="flex w-full items-center justify-center px-4 ">
        <div
          className="relative grid grid-cols-[repeat(8,var(--cellsize))]
         grid-rows-[1fr_repeat(4,var(--cellsize))] place-items-center border-b border-r border-l border-[var(--border)]
          md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(7,var(--cellsize))]"
        >
          <div className="w-full absolute flex h-full">
            <div className="flex-1 flex flex-col gap-6 justify-between border-r border-[var(--border)] p-10 ">
              <div className="">
                <div className="flex items-center mb-3">
                  <svg
                    width="40"
                    height="30"
                    viewBox="0 0 60 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      x="0"
                      y="20"
                      fontFamily="monospace"
                      fontSize="20"
                      fill="currentColor"
                    >
                      &gt;_
                    </text>
                  </svg>
                  <p className="font-light text-[rgb(169,169,169)] text-lg">
                    Git-connected Deploys
                  </p>
                </div>

                <h4 className="font-medium text-2xl leading-7 ">
                  From localhost to https, in seconds.
                </h4>
                <h4 className="font-medium text-[rgb(169,169,169)] text-2xl leading-10">
                  Deploy from Git or your CLI.
                </h4>
              </div>
              <div className=" select-none  ">
                <div className="relative w-full max-w-fit border border-[var(--border)] rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="size-3 bg-[var(--border)] rounded-full"
                      ></div>
                    ))}
                  </div>
                  <p className="mt-4 text-[rgb(198,198,198)] font-mono text-xs text-nowrap leading-6">
                    <span className="text-[rgb(169,169,169)] mr-2">
                      ▲ ~ vercel-site/
                    </span>
                    git push <br />
                    Enumerating objects: 1, done. <br />
                    Counting objects: 100% (1/1), done. <br />
                    Writing objects: 100% (1/1), 72 bytes, done. <br />
                    Total 1 (delta 0), reused 0 (delta 0) <br />
                    To github.com:vercel/vercel-site.git <br />
                    21326a9..81663c3 main -&gt; main
                  </p>

                  {/* Dark fading overlay on the right */}
                  <div className="absolute inset-y-2 right-2 w-44 pointer-events-none bg-gradient-to-l from-black to-transparent" />
                </div>

                <div className="relative -top-9  flex justify-end">
                  <div className="relative w-full max-w-fit bg-[rgb(18,18,18)] border border-[var(--border)] rounded-xl p-4 overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {["bg-red", "bg-blue-600", "bg-[#14b8a6]"].map(
                          (item) => (
                            <div
                              key={item}
                              className={`size-3 ${item} rounded-full`}
                            ></div>
                          )
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Lock body */}
                          <rect
                            x="4"
                            y="10"
                            width="16"
                            height="10"
                            rx="2"
                            fill="rgb(169,169,169)"
                          />
                          {/* Shackle */}
                          <path
                            d="M8 10V6a4 4 0 0 1 8 0v4"
                            stroke="rgb(169,169,169)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="font-mono text-sm text-[rgb(169,169,169)]">
                          vercel.com
                        </p>
                      </div>
                      <div />
                    </div>

                    <div className="relative h-36 flex flex-col items-center border-t border-r border-l border-[var(--border)] mt-4 p-4 pb-0 overflow-hidden">
                      <h2
                        className="text-[2rem] font-bold leading-none text-transparent text-nowrap mb-4
        "
                        style={{
                          // Draw a gray stroke around the text
                          WebkitTextStroke: "1px rgb(100,100,100)",
                          // Fill the text with the same color as the background (black), so only the stroke is visible
                          WebkitTextFillColor: "rgb(18,18,18)",
                        }}
                      >
                        What will you ship?
                      </h2>

                      <div className="relative top-14 w-32 h-32 ml-5  border-t border-l border-[var(--border)] rotate-45" />
                    </div>
                    <div className="absolute inset-x-0 bottom-1 w-full h-28 pointer-events-none bg-gradient-to-t from-[rgb(18,18,18)] to-transparent" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between p-10">
              <div className="">
                <div className="flex items-center gap-2 mb-3">
                  <IoChatbubbleOutline />
                  <p className="font-light text-[rgb(169,169,169)] text-lg">
                    Collaborative pre-production
                  </p>
                </div>

                <h4 className="font-medium text-2xl leading-7 ">
                  Every deploy is remarkable.{" "}
                  <span className="text-[rgb(169,169,169)]">
                    Chat with your team on real, production-grade UI, not just
                    designs.
                  </span>
                </h4>
              </div>

              <div className="flex flex-col gap-8 select-none">
                <div className="w-fit border border-[var(--border)] text-sm bg-[rgb(8,8,8)] px-4 py-3  rounded-xl ">
                  <p className="leading-6">
                    Swapped out the{" "}
                    <code className="font-light font-mono bg-[rgb(34,34,34)] text-[rgb(169,169,169)] p-1 rounded-md">
                      button
                    </code>{" "}
                    for <br /> some variants we needed.
                  </p>
                </div>

                <div className="flex justify-end items-start">
                  <div className="flex items-center gap-8">
                    {/* <div className="relative">
                      <BsCursorFill
                        className="absolute -top-4 -right-4 text-blue-600"
                        aria-hidden="true"
                      />
                      <p className="bg-blue-600 text-black text-xs p-1 rounded-md">
                        Pranathi
                      </p>
                    </div> */}
                    <AnimatedCursor />
                    <div className="w-fit border border-[var(--border)] text-sm bg-[rgb(8,8,8)] px-4 py-3 rounded-xl ">
                      <p className="leading-6">How about this instead?</p>
                    </div>
                  </div>
                </div>

                <div className="flex ">
                  <div className="flex items-end gap-12">
                    <div className="w-fit border border-[var(--border)] text-sm bg-[rgb(8,8,8)] px-4 py-3 rounded-xl ">
                      <p className="leading-6">
                        I like it. Does this work with <br /> the brand tweaks @
                        <span className="font-medium">mamuso</span>
                      </p>
                    </div>
                    <div className="relative">
                      <BsCursorFill
                        className="absolute -top-4 -left-5 text-red -rotate-90"
                        aria-hidden="true"
                      />
                      <p className="bg-red text-black text-xs p-1 rounded-md">
                        Rauno
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-start">
                  <div className="flex items-end gap-2">
                    <div className="w-fit flex items-center gap-4 border border-[var(--border)] text-sm bg-[rgb(8,8,8)] px-4 py-3 rounded-xl ">
                      <p className="leading-6 ">
                        This looks great!
                        <span className="blinking-cursor text-lg">|</span>{" "}
                      </p>
                      <div className="size-6 bg-[rgb(237,237,237)] rounded-full flex justify-center items-center">
                        <MdOutlineArrowUpward
                          className="size-4 text-black"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="relative pb-1">
                      <BsCursorFill
                        className="absolute -top-4 -right-4 text-[#14b8a6] -rotate-90"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* analytics */}
      <section className="flex w-full items-center justify-center px-4 ">
        <div
          className="relative grid grid-cols-[repeat(8,var(--cellsize))]
         grid-rows-[1fr_repeat(4,var(--cellsize))] place-items-center border-b border-r border-l border-[var(--border)]
          md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(5,var(--cellsize))]"
        >
          <FloatingCross right />

          <div className="w-full absolute flex h-full ">
            <AnalyticsSection />
          </div>
        </div>
      </section>

      {/* Rollbacks */}
      <section className="flex w-full items-center justify-center px-4 ">
        <div
          className="relative grid grid-cols-[repeat(8,var(--cellsize))]
         grid-rows-[1fr_repeat(4,var(--cellsize))] place-items-center border-b border-r border-l border-[var(--border)]
          md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(6,var(--cellsize))]"
        >
          <FloatingCross />
          <div className="w-full absolute flex h-full">
            <div className="flex-1 flex flex-col gap-6 justify-between border-r border-[var(--border)] p-10 ">
              <div className="">
                <div className="flex items-center gap-2 ">
                  <MdOutlineSettingsBackupRestore
                    className="size-5 text-[rgb(169,169,169)]"
                    aria-hidden="true"
                  />
                  <p className="font-light text-[rgb(169,169,169)] text-lg">
                    Instant Rollbacks
                  </p>
                </div>

                <h4 className="font-medium text-2xl text-[rgb(169,169,169)] leading-7 ">
                  <span className="text-white">
                    Go ahead, deploy on Friday.
                  </span>{" "}
                  Instantly rollback to a working deployment.
                </h4>
              </div>

              <div className="relative w-full flex-1 flex flex-col items-center gap-6 bg-black p-8 text-white">
                {/* Top Box */}

                {/* Arrow */}
                <RollbackArrow />

                {/* Bottom Box */}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between p-10">
              <div className="">
                <div className="flex items-center gap-2 mb-3">
                  <BiSave
                    className="size-5 text-[rgb(169,169,169)]"
                    aria-hidden="true"
                  />
                  <p className="font-light text-[rgb(169,169,169)] text-lg">
                    Conformance
                  </p>
                </div>

                <h4 className="font-medium text-2xl text-[rgb(169,169,169)] leading-7 ">
                  <span className="text-white">
                    Move fast, don't break things.
                  </span>{" "}
                  Keep quality high while maintaining velocity with Enterprise
                  Monorepos.
                </h4>
              </div>
              <div className="relative flex-1">
                <ConformanceTable />
                <div className="absolute inset-x-0 -bottom-2 w-full h-28 pointer-events-none bg-gradient-to-t from-black to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* scale */}
      <section className="flex w-full items-center justify-center px-4 ">
        <div
          className="relative grid grid-cols-[repeat(8,var(--cellsize))]
         grid-rows-[1fr_repeat(4,var(--cellsize))] place-items-center border-b border-r border-l border-[var(--border)]
          md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(2,var(--cellsize))]"
        >
          <div className="w-full absolute flex justify-center items-center gap-2 h-full">
            <p className="font-medium text-2xl text-[rgb(237,237,237)]">
              Scale your
            </p>{" "}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-[rgb(237,237,237)] bg-[rgb(8,8,8)]">
              <HiOutlineBuildingOffice2 className="size-4" aria-hidden="true" />
              <span className="text-sm">Enterprise</span>
            </button>
            <p className="font-medium text-2xl text-[rgb(237,237,237)]">
              without compromising
            </p>{" "}
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-[rgb(237,237,237)] bg-[rgb(8,8,8)]">
              <LuShieldCheck className="size-4" aria-hidden="true" />
              <span className="text-sm">Security</span>
            </button>
          </div>
          {/* divider */}
          <div className="absolute h-[0.5px] bg-[var(--border)] w-full bottom-6 " />
        </div>
      </section>

      {/* Ready to Deploy */}
      <section className="flex w-full items-center justify-center px-4 ">
        <div
          className="relative grid grid-cols-[repeat(8,var(--cellsize))]
      grid-rows-[1fr_repeat(4,var(--cellsize))] place-items-center border-b border-r border-l border-[var(--border)]
      md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(3,var(--cellsize))]"
        >
          {/* Dashed vertical lines to divide the grid into 3 equal parts */}
          <div className="absolute top-0 left-[33.33%] h-full border-l border-dashed border-[var(--border)]" />
          <div className="absolute top-0 left-[66.66%] h-full border-l border-dashed border-[var(--border)]" />

          <FloatingCross />

          <div className="w-full absolute flex justify-between items-center gap-2 h-full">
            <div className="flex-[2] px-8">
              <h2 className="font-semibold text-2xl text-[rgb(169,169,169)] mb-8">
                <span className="text-[rgb(237,237,237)]">
                  Ready to deploy?
                </span>{" "}
                Start building with a free account. <br />
                Speak to an expert for your{" "}
                <span className="text-blue-500"> Pro </span> or{" "}
                <span className="text-violet-500"> Enterprise </span> needs.
              </h2>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-black bg-[rgb(237,237,237)]">
                  <span className="text-sm">Start Deploying</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-[rgb(237,237,237)] bg-[rgb(15,15,15)]">
                  <span className="text-sm">Talk to an Expert</span>
                </button>
              </div>
            </div>
            <div className="flex-1 ">
              <h4 className="font-semibold text-xl text-[rgb(169,169,169)] mb-6 px-4">
                <span className="text-[rgb(237,237,237)]">
                  Explore Vercel Enterprise
                </span>{" "}
                with an interactive product tour, trial, or a personalized demo.
              </h4>
              <div className="px-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-[rgb(237,237,237)] bg-[rgb(15,15,15)]">
                  <span className="text-sm">Explore Enterprise</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full items-center justify-center px-4 ">
        <div className="relative grid grid-cols-[repeat(8,var(--cellsize))] grid-rows-[1fr_repeat(1,var(--cellsize))] place-items-center md:grid-cols-[repeat(12,var(--cellsize))] ">
          <FloatingCross right />
        </div>
      </section>
    </main>
  );
};

type ButtonProps = PropsWithChildren<{
  variant: "light" | "dark";
  className?: string;
}>;

const VARIANT_CLASSES: Record<ButtonProps["variant"], string> = {
  light:
    "bg-[rgb(237,237,237)] text-[rgb(10,10,10)] border-[rgb(10,10,10)] hover:bg-[rgb(220,220,220)]",
  dark: "bg-[rgb(10,10,10)] text-[rgb(237,237,237)] border-0 hover:bg-[#000] shadow-[0px_0px_2px_rgba(255,255,255,0.4)]",
};

const Button: FC<ButtonProps> = ({ children, variant, className }) => {
  return (
    <button
      className={twMerge(
        "relative flex cursor-pointer items-center justify-center gap-x-2.5 rounded-full px-4 py-2 text-sm font-semibold md:w-48 md:py-3 md:text-base",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

const FloatingCross = ({ right }: { right?: boolean }) => {
  const boxClass =
    "absolute z-20 aspect-square size-2 md:size-3 border-[#7A7A7A]";
  return (
    <>
      <div
        aria-hidden={true}
        className={twJoin(
          boxClass,
          `${
            right
              ? "-right-px border-r  border-t -top-px"
              : "-left-px border-l  border-t  -top-px"
          }  `
        )}
      />
      <div
        aria-hidden={true}
        className={twJoin(
          boxClass,
          `${
            right
              ? "-right-2 md:-right-3 border-l  border-b -top-2 md:-top-3"
              : "-left-2 md:-left-3 border-b border-r -top-2   md:-top-3"
          }  `
        )}
      />
    </>
  );
};

const BackgoundLines: FC = () => {
  return (
    <svg
      aria-hidden="true"
      // TODO: Improve positioning for mobile
      className="absolute size-full scale-[1.8] md:scale-100"
      fill="none"
      viewBox="0 0 1200 700"
      width="100%"
    >
      <g fill="var(--geist-background)" transform="scale(1.1)">
        <path d="M-161 440.4L-160.9 438.4L376 445L-160.8 431.8V429.8L376.2 443L-160.6 423.2L-160.5 421.2L376.1 441L-160.2 414.7L-160.1 412.7L376.3 439L-159.7 406.1L-159.6 404.1L376.4 437L-159.2 397.5L-159 395.5L376.5 435L-158.5 388.9L-158.3 386.9L376.7 433L-157.7 380.4L-157.5 378.4L377 431L-156.8 371.8L-156.6 369.9L377.1 429L-155.9 363.3L-155.6 361.3L377.4 427.1L-154.8 354.8L-154.5 352.8L377.7 425.1L-153.6 346.3L-153.3 344.3L377.9 423.1L-152.3 337.8L-152 335.8L378.3 421.1L-150.9 329.3L-150.5 327.3L378.5 419.1L-149.4 320.9L-149 318.9L379 417.2L-147.7 312.4L-147.4 310.5L379.3 415.2L-146 304L-145.6 302L379.8 413.3L-144.2 295.6L-143.8 293.7L380.2 411.3L-142.3 287.2L-141.8 285.3L380.7 409.4L-140.3 278.9L-139.8 276.9L381.1 407.4L-138.1 270.6L-137.6 268.6L381.6 405.5L-135.9 262.3L-135.4 260.3L382.2 403.6L-133.6 254L-133 252.1L382.7 401.6L-131.1 245.8L-130.6 243.8L383.3 399.7L-128.6 237.5L-128 235.6L384 397.9L-126 229.4L-125.4 227.5L384.6 395.9L-123.2 221.2L-122.6 219.3L385.2 394L-120.4 213.1L-119.7 211.2L385.8 392.1L-117.5 205L-116.8 203.2L386.6 390.3L-114.5 197L-113.7 195.1L387.2 388.4L-111.3 189L-110.6 187.1L388.1 386.6L-108.1 181L-107.3 179.2L388.8 384.7L-104.8 173.1L-104 171.3L389.6 382.9L-101.4 165.2L-100.5 163.4L390.5 381.1L-97.8 157.4L-97 155.6L391.2 379.2L-94.2 149.6L-93.4 147.8L392.1 377.4L-90.5 141.9L-89.6 140.1L393 375.6L-86.7 134.2L-85.8 132.4L393.8 373.8L-82.8 126.5L-81.9 124.7L394.9 372.1L-78.8 118.9L-77.9 117.1L395.8 370.3L-74.7 111.3L-73.8 109.6L396.6 368.5L-70.6 103.8L-69.6 102.1L397.7 366.8L-66.3 96.4L-65.3 94.7L398.8 365.1L-61.9 89L-60.9 87.3L399.6 363.3L-57.5 81.6L-56.4 79.9L400.8 361.6L-52.9 74.3L-51.9 72.7L401.9 360L-48.3 67.1L-47.2 65.4L403 358.3L-43.6 59.9L-42.5 58.3L404.1 356.6L-38.8 52.8L-37.6 51.2L405.1 354.9L-33.9 45.8L-32.7 44.1L406.4 353.4L-28.9 38.8L-27.7 37.1L407.5 351.7L-23.8 31.8L-22.6 30.2L408.7 350.1L-18.7 24.9L-17.5 23.3L409.9 348.5L-13.5 18.1L-12.2 16.5L411.1 346.9L-8.10001 11.4L-6.89999 9.79999L412.4 345.4L-2.7 4.70001L-1.5 3.2L413.7 343.9L2.7 -1.89999L4 -3.39999L414.9 342.2L8.3 -8.5L9.60001 -10L416.3 340.8L13.9 -14.9L15.3 -16.4L417.5 339.3L19.7 -21.4L21 -22.8L418.9 337.8L25.5 -27.7L26.8 -29.2L420.3 336.4L31.3 -34L32.7 -35.4L421.7 334.9L37.3 -40.1L38.7 -41.6L423.1 333.5L43.3 -46.3L44.7 -47.7L424.4 332L49.4 -52.3L50.9 -53.7L425.9 330.7L55.6 -58.3L57 -59.7L427.3 329.3L61.8 -64.2L63.3 -65.5L428.9 328L68.2 -70L69.7 -71.3L430.4 326.6L74.6 -75.7L76.1 -77.1L431.7 325.1L81 -81.4L82.5 -82.7L433.3 324L87.6 -87L89.1 -88.3L434.8 322.6L94.2 -92.5L95.7 -93.7L436.4 321.4L100.8 -97.9L102.4 -99.1L438.1 320.3L107.6 -103.2L109.1 -104.5L439.4 318.8L114.3 -108.5L115.9 -109.7L441.2 317.8L121.2 -113.6L122.8 -114.8L442.7 316.5L128.1 -118.7L129.8 -119.9L444.4 315.4L135.1 -123.7L136.8 -124.9L446 314.2L142.2 -128.6L143.8 -129.8L447.6 313L149.3 -133.5L150.9 -134.6L449.3 312L156.4 -138.2L158.1 -139.3L450.9 310.7L163.7 -142.9L165.3 -143.9L452.7 309.8L170.9 -147.4L172.6 -148.5L454.4 308.8L178.3 -151.9L180 -152.9L456.1 307.7L185.7 -156.3L187.4 -157.3L457.8 306.7L193.1 -160.6L194.8 -161.6L459.5 305.7L200.6 -164.8L202.3 -165.7L461.3 304.7L208.1 -168.9L209.9 -169.8L463.1 303.9L215.7 -172.9L217.5 -173.8L464.8 302.8L223.4 -176.8L225.2 -177.7L466.7 302L231.1 -180.6L232.9 -181.5L468.4 301L238.8 -184.4L240.6 -185.2L470.2 300.2L246.6 -188L248.4 -188.8L472.1 299.5L254.4 -191.5L256.2 -192.4L473.9 298.6L262.3 -195L264.1 -195.8L475.7 297.7L270.2 -198.3L272 -199.1L477.5 297L278.1 -201.6L280 -202.3L479.5 296.4L286.1 -204.7L288 -205.5L481.2 295.4L294.2 -207.8L296 -208.5L483.2 294.9L302.2 -210.7L304.1 -211.4L485.1 294.3L310.3 -213.6L312.2 -214.3L487 293.6L318.5 -216.4L320.4 -217L488.8 292.9L326.6 -219L328.5 -219.6L490.7 292.3L334.8 -221.6L336.8 -222.1L492.7 291.8L343.1 -224L345 -224.6L494.6 291.2L351.3 -226.4L353.3 -226.9L496.5 290.6L359.6 -228.6L361.6 -229.1L498.5 290.3L367.9 -230.8L369.9 -231.3L500.3 289.6L376.3 -232.8L378.2 -233.3L502.3 289L384.7 -234.8L386.6 -235.2L504.3 288.8L393 -236.6L395 -237L506.2 288.3L401.5 -238.4L403.4 -238.7L508.2 288L409.9 -240L411.9 -240.4L510.2 287.6L418.3 -241.5L420.3 -241.9L512.1 287.1L426.8 -243L428.8 -243.3L514.1 287L435.3 -244.3L437.3 -244.6L516.1 286.7L443.8 -245.5L445.8 -245.8L518.1 286.4L452.3 -246.6L454.3 -246.9L520 286.1L460.8 -247.6L462.8 -247.8L522 286L469.4 -248.5L471.4 -248.7L524 285.7L477.9 -249.3L479.9 -249.5L526 285.6L486.5 -250L488.5 -250.2L528 285.3L495.1 -250.6L497.1 -250.7L530 285.4L503.7 -251.1L505.7 -251.2L532 285.1L512.2 -251.5L514.2 -251.6L534 285L520.8 -251.8H522.8L536 285.2L529.4 -251.9L531.4 -252L538 285V-252H-161V447H376.1L-161 440.4Z"></path>
        <path d="M1239 455.6L1238.9 457.6L701.9 451L1238.8 464.2V466.2L702 453L1238.6 472.8L1238.5 474.8L701.8 455L1238.2 481.3L1238.1 483.3L701.8 457L1237.8 489.9L1237.6 491.9L701.6 459L1237.2 498.5L1237 500.5L701.4 461L1236.5 507.1L1236.3 509.1L701.3 463L1235.7 515.6L1235.5 517.6L701.1 465L1234.9 524.2L1234.6 526.1L700.8 467L1233.9 532.7L1233.6 534.7L700.6 468.9L1232.8 541.2L1232.5 543.2L700.4 470.9L1231.6 549.7L1231.3 551.7L700.1 472.9L1230.3 558.2L1230 560.2L699.7 474.9L1228.9 566.7L1228.5 568.7L699.6 476.9L1227.4 575.1L1227 577.1L698.9 478.8L1225.7 583.6L1225.4 585.5L698.7 480.8L1224 592L1223.6 594L698.1 482.7L1222.2 600.4L1221.8 602.3L697.8 484.7L1220.3 608.8L1219.8 610.7L697.3 486.6L1218.3 617.1L1217.8 619.1L696.9 488.6L1216.1 625.4L1215.6 627.4L696.3 490.5L1213.9 633.7L1213.4 635.7L695.9 492.4L1211.6 642L1211 643.9L695.1 494.3L1209.2 650.2L1208.6 652.2L694.7 496.3L1206.6 658.5L1206 660.4L693.9 498.1L1204 666.6L1203.4 668.5L693.5 500.1L1201.3 674.8L1200.6 676.7L692.7 501.9L1198.4 682.9L1197.7 684.8L692.1 503.8L1195.5 691L1194.8 692.8L691.4 505.7L1192.5 699L1191.7 700.9L690.7 507.6L1189.3 707L1188.6 708.9L690 509.4L1186.1 715L1185.3 716.8L689.1 511.3L1182.8 722.9L1182 724.7L688.4 513.1L1179.4 730.8L1178.5 732.6L687.5 514.9L1175.8 738.6L1175 740.4L686.8 516.8L1172.2 746.4L1171.4 748.2L685.9 518.6L1168.5 754.1L1167.6 755.9L684.9 520.3L1164.7 761.8L1163.8 763.6L684.1 522.2L1160.8 769.5L1159.9 771.3L683.2 524L1156.8 777.1L1155.9 778.9L682.3 525.7L1152.7 784.7L1151.8 786.4L681.3 527.5L1148.6 792.2L1147.6 793.9L680.4 529.2L1144.3 799.6L1143.3 801.3L679.3 530.9L1139.9 807L1138.9 808.7L678.3 532.7L1135.5 814.4L1134.4 816.1L677.2 534.4L1130.9 821.7L1129.9 823.3L676 536L1126.3 828.9L1125.2 830.6L675.1 537.7L1121.6 836.1L1120.5 837.7L674 539.4L1116.8 843.2L1115.7 844.8L672.7 540.9L1111.9 850.3L1110.7 851.9L671.7 542.7L1106.9 857.3L1105.7 858.9L670.6 544.3L1101.8 864.2L1100.7 865.8L669.2 545.8L1096.7 871.1L1095.5 872.7L668.3 547.6L1091.5 877.9L1090.2 879.4L666.8 549L1086.1 884.6L1084.9 886.2L665.6 550.6L1080.7 891.3L1079.5 892.8L664.4 552.2L1075.3 897.9L1074 899.4L663.1 553.7L1069.7 904.5L1068.4 906L661.8 555.2L1064.1 910.9L1062.7 912.4L660.4 556.7L1058.3 917.3L1057 918.8L659.1 558.2L1052.5 923.7L1051.2 925.2L657.6 559.5L1046.7 930L1045.3 931.4L656.4 561.2L1040.7 936.1L1039.3 937.6L655 562.6L1034.7 942.3L1033.3 943.7L653.4 563.8L1028.6 948.3L1027.1 949.7L652.3 565.5L1022.4 954.3L1021 955.7L650.5 566.6L1016.2 960.2L1014.7 961.5L649.2 568L1009.8 966L1008.3 967.3L647.8 569.5L1003.4 971.7L1001.9 973.1L646.1 570.6L997 977.4L995.5 978.7L644.7 572.1L990.4 983L988.9 984.3L643.3 573.5L983.9 988.5L982.3 989.7L641.6 574.5L977.2 993.9L975.6 995.1L640 575.8L970.4 999.2L968.9 1000.5L638.5 577.1L963.7 1004.5L962.1 1005.7L636.9 578.4L956.8 1009.6L955.2 1010.8L635.3 579.5L949.9 1014.7L948.2 1015.9L633.7 580.8L942.9 1019.7L941.3 1020.9L631.9 581.7L935.8 1024.6L934.2 1025.8L630.4 582.9L928.7 1029.5L927.1 1030.6L628.7 584L921.6 1034.2L919.9 1035.3L627 585.1L914.3 1038.9L912.7 1039.9L625.4 586.3L907.1 1043.4L905.4 1044.5L623.5 587.1L899.7 1047.9L898 1048.9L622 588.4L892.3 1052.3L890.6 1053.3L620.2 589.4L884.9 1056.6L883.2 1057.6L618.5 590.3L877.4 1060.8L875.7 1061.7L616.7 591.3L869.9 1064.9L868.1 1065.8L614.9 592.1L862.3 1068.9L860.5 1069.8L613.2 593.2L854.6 1072.8L852.8 1073.7L611.3 594L846.9 1076.6L845.1 1077.5L609.6 595L839.2 1080.4L837.4 1081.2L607.8 595.7L831.4 1084L829.6 1084.8L605.9 596.5L823.6 1087.5L821.8 1088.4L604.1 597.4L815.7 1091L813.9 1091.8L602.2 598L807.8 1094.3L806 1095.1L600.6 599.2L799.9 1097.6L798 1098.3L598.5 599.6L791.9 1100.7L790 1101.5L596.7 600.4L783.8 1103.8L782 1104.5L594.9 601.3L775.8 1106.7L773.9 1107.4L592.9 601.6L767.7 1109.6L765.8 1110.2L591 602.4L759.5 1112.4L757.6 1113L589.2 603.1L751.4 1115L749.5 1115.6L587.2 603.5L743.2 1117.6L741.2 1118.2L585.4 604.3L734.9 1120L733 1120.6L583.4 604.8L726.7 1122.4L724.7 1122.9L581.5 605.4L718.4 1124.6L716.4 1125.1L579.5 605.7L710.1 1126.8L708.1 1127.3L577.6 606.4L701.7 1128.8L699.8 1129.3L575.7 606.9L693.3 1130.8L691.4 1131.2L573.7 607.2L685 1132.6L683 1133L571.8 607.6L676.5 1134.4L674.6 1134.7L569.8 607.8L668.1 1136L666.1 1136.4L567.9 608.6L659.7 1137.5L657.7 1137.9L565.9 608.9L651.2 1139L649.2 1139.3L563.9 609L642.7 1140.3L640.7 1140.6L561.9 609.3L634.2 1141.5L632.2 1141.8L559.9 609.6L625.7 1142.6L623.7 1142.9L558 609.9L617.2 1143.6L615.2 1143.8L556 610.1L608.6 1144.5L606.6 1144.7L554 610.1L600.1 1145.3L598.1 1145.5L552 610.4L591.5 1146L589.5 1146.2L550 610.6L582.9 1146.6L580.9 1146.7L548 610.7L574.3 1147.1L572.3 1147.2L546 610.8L565.8 1147.5L563.8 1147.6L544 611.1L557.2 1147.8H555.2L542 610.8L548.6 1147.9L546.6 1148L540 611V1148H1239V449H702L1239 455.6Z"></path>
        <path d="M540 -252V285.1L546.6 -252L548.6 -251.9L542 285.1L555.2 -251.8H557.2L544 285.1L563.8 -251.6L565.8 -251.5L546 285.1L572.3 -251.2L574.3 -251.1L548 285.3L580.9 -250.7L582.9 -250.6L550 285.5L589.5 -250.2L591.5 -250L552 285.5L598.1 -249.5L600.1 -249.3L554 285.7L606.6 -248.7L608.6 -248.5L556 285.9L615.2 -247.8L617.2 -247.6L558 286.1L623.7 -246.9L625.7 -246.6L559.9 286.4L632.2 -245.8L634.2 -245.5L561.9 286.6L640.7 -244.6L642.7 -244.3L563.9 287L649.2 -243.3L651.2 -243L565.9 287.2L657.7 -241.9L659.7 -241.5L567.9 287.4L666.1 -240.4L668.1 -240L569.8 288.1L674.6 -238.7L676.5 -238.4L571.8 288.4L683 -237L685 -236.6L573.7 288.7L691.4 -235.2L693.3 -234.8L575.7 289.2L699.8 -233.3L701.7 -232.8L577.6 289.7L708.1 -231.3L710.1 -230.8L579.6 290.1L716.4 -229.1L718.4 -228.6L581.5 290.7L724.7 -226.9L726.7 -226.4L583.4 291.2L733 -224.6L734.9 -224L585.3 291.9L741.2 -222.1L743.2 -221.6L587.3 292.2L749.5 -219.6L751.4 -219L589.1 293.1L757.6 -217L759.5 -216.4L591 293.6L765.8 -214.3L767.7 -213.6L592.9 294.3L773.9 -211.4L775.8 -210.7L594.9 294.8L782 -208.5L783.8 -207.8L596.7 295.5L790 -205.5L791.9 -204.7L598.6 296.3L798 -202.3L799.9 -201.6L600.4 297.1L806 -199.1L807.8 -198.3L602.3 297.7L813.9 -195.8L815.7 -195L604.1 298.7L821.8 -192.4L823.6 -191.5L605.9 299.5L829.6 -188.8L831.4 -188L607.9 300.1L837.4 -185.2L839.2 -184.4L609.6 301.1L845.1 -181.5L846.9 -180.6L611.3 302.1L852.8 -177.7L854.6 -176.8L613.2 302.8L860.5 -173.8L862.3 -172.9L614.9 303.9L868.1 -169.8L869.9 -168.9L616.7 304.8L875.7 -165.7L877.4 -164.8L618.5 305.7L883.2 -161.6L884.9 -160.6L620.2 306.6L890.6 -157.3L892.3 -156.3L622 307.6L898 -152.9L899.7 -151.9L623.6 308.7L905.4 -148.5L907.1 -147.4L625.3 309.9L912.7 -143.9L914.3 -142.9L627 310.9L919.9 -139.3L921.6 -138.2L628.7 311.9L927.1 -134.6L928.7 -133.5L630.4 313L934.2 -129.8L935.8 -128.6L631.9 314.3L941.3 -124.9L942.9 -123.7L633.7 315.3L948.2 -119.9L949.9 -118.7L635.2 316.6L955.2 -114.8L956.8 -113.6L636.9 317.7L962.1 -109.7L963.7 -108.5L638.4 319L968.9 -104.5L970.5 -103.2L640.1 320.1L975.6 -99.1L977.2 -97.9L641.5 321.5L982.3 -93.7L983.9 -92.5L643.3 322.5L988.9 -88.3L990.5 -87L644.8 323.8L995.5 -82.7L997 -81.4L646.2 325.3L1001.9 -77.1L1003.4 -75.7L647.6 326.7L1008.3 -71.3L1009.8 -70L649.2 327.9L1014.7 -65.5L1016.2 -64.2L650.7 329.2L1021 -59.7L1022.4 -58.3L652 330.7L1027.2 -53.7L1028.6 -52.3L653.5 332.1L1033.3 -47.7L1034.7 -46.3L655 333.4L1039.3 -41.6L1040.7 -40.1L656.2 335L1045.3 -35.4L1046.7 -34L657.8 336.3L1051.2 -29.2L1052.5 -27.7L659.1 337.8L1057 -22.8L1058.3 -21.4L660.3 339.4L1062.7 -16.4L1064.1 -14.9L661.8 340.8L1068.4 -10L1069.7 -8.5L663.1 342.3L1074 -3.39999L1075.3 -1.89999L664.4 343.8L1079.5 3.2L1080.7 4.70001L665.6 345.4L1084.9 9.79999L1086.1 11.4L666.9 346.9L1090.2 16.5L1091.5 18.1L668.1 348.5L1095.5 23.3L1096.7 24.9L669.3 350.1L1100.7 30.2L1101.8 31.8L670.6 351.7L1105.7 37.1L1106.9 38.8L671.7 353.3L1110.7 44.1L1111.9 45.8L672.8 355L1115.7 51.2L1116.8 52.8L674 356.6L1120.5 58.3L1121.6 59.9L675 358.3L1125.2 65.4L1126.3 67.1L676.2 359.9L1129.9 72.7L1130.9 74.3L677.2 361.7L1134.4 79.9L1135.5 81.6L678.3 363.3L1138.9 87.3L1139.9 89L679.2 365.1L1143.3 94.7L1144.3 96.4L680.4 366.7L1147.6 102.1L1148.6 103.8L681.3 368.5L1151.8 109.6L1152.7 111.3L682.2 370.3L1155.9 117.1L1156.8 118.9L683.2 372L1159.9 124.7L1160.8 126.5L684.1 373.8L1163.8 132.4L1164.7 134.2L685 375.6L1167.6 140.1L1168.5 141.9L686 377.4L1171.4 147.8L1172.2 149.6L686.7 379.3L1175 155.6L1175.8 157.4L687.6 381L1178.5 163.4L1179.4 165.2L688.4 382.9L1182 171.3L1182.8 173.1L689.1 384.7L1185.3 179.2L1186.1 181L689.9 386.6L1188.6 187.1L1189.3 189L690.7 388.4L1191.7 195.1L1192.5 197L691.5 390.2L1194.8 203.2L1195.5 205L692.1 392.1L1197.7 211.2L1198.4 213.1L692.8 394L1200.6 219.3L1201.3 221.2L693.5 395.9L1203.4 227.5L1204 229.4L694 397.8L1206 235.6L1206.6 237.5L694.6 399.7L1208.6 243.8L1209.2 245.8L695.3 401.6L1211 252.1L1211.6 254L695.8 403.6L1213.4 260.3L1213.9 262.3L696.3 405.5L1215.6 268.6L1216.1 270.6L696.9 407.4L1217.8 276.9L1218.3 278.9L697.4 409.4L1219.8 285.3L1220.3 287.2L697.8 411.3L1221.8 293.7L1222.2 295.6L698.2 413.3L1223.6 302L1224 304L698.7 415.2L1225.4 310.5L1225.7 312.4L699 417.2L1227 318.9L1227.4 320.9L699.3 419.2L1228.5 327.3L1228.9 329.3L699.8 421.1L1230 335.8L1230.3 337.8L700 423.1L1231.3 344.3L1231.6 346.3L700.4 425.1L1232.5 352.8L1232.8 354.8L700.6 427.1L1233.6 361.3L1233.9 363.3L700.9 429L1234.6 369.9L1234.9 371.8L701.1 431L1235.5 378.4L1235.7 380.4L701.3 433L1236.3 386.9L1236.5 388.9L701.5 435L1237 395.5L1237.2 397.5L701.6 437L1237.6 404.1L1237.7 406.1L701.7 439L1238.1 412.7L1238.2 414.7L701.9 441L1238.5 421.2L1238.6 423.2L701.8 443L1238.8 429.8V431.8L702 445L1238.9 438.4L1239 440.4L702 447H1239V-252H540Z"></path>
        <path d="M531.4 1148L529.4 1147.9L536 610.8L522.8 1147.8H520.8L534 610.8L514.2 1147.6L512.2 1147.5L532 610.9L505.7 1147.2L503.7 1147.1L530 610.7L497.1 1146.7L495.1 1146.6L528 610.7L488.5 1146.2L486.5 1146L526 610.6L479.9 1145.5L477.9 1145.3L524 610.2L471.4 1144.7L469.4 1144.5L522 610L462.8 1143.8L460.9 1143.6L520 609.9L454.3 1142.9L452.3 1142.6L518.1 609.7L445.8 1141.8L443.8 1141.5L516.1 609.2L437.3 1140.6L435.3 1140.3L514.1 609.2L428.8 1139.3L426.8 1139L512.1 608.7L420.3 1137.9L418.3 1137.5L510.2 608.4L411.9 1136.4L409.9 1136L508.2 608.1L403.4 1134.7L401.5 1134.4L506.2 607.7L395 1133L393 1132.6L504.3 607.3L386.6 1131.2L384.7 1130.8L502.4 606.6L378.2 1129.3L376.3 1128.8L500.4 606.4L369.9 1127.3L367.9 1126.8L498.4 605.9L361.6 1125.1L359.6 1124.6L496.5 605.4L353.3 1122.9L351.3 1122.4L494.6 604.7L345 1120.6L343.1 1120L492.7 604.1L336.8 1118.2L334.8 1117.6L490.7 603.8L328.5 1115.6L326.6 1115L488.9 603L320.4 1113L318.5 1112.4L486.9 602.4L312.2 1110.2L310.3 1109.6L485 601.9L304.1 1107.4L302.2 1106.7L483.2 601.1L296 1104.5L294.2 1103.8L481.3 600.4L288 1101.5L286.1 1100.7L479.4 599.7L280 1098.3L278.1 1097.6L477.5 599L272 1095.1L270.2 1094.3L475.7 598.2L264.1 1091.8L262.3 1091L473.9 597.3L256.2 1088.4L254.4 1087.5L472 596.6L248.4 1084.8L246.6 1084L470.2 595.7L240.6 1081.2L238.8 1080.4L468.4 594.9L232.9 1077.5L231.1 1076.6L466.6 594.1L225.2 1073.7L223.4 1072.8L464.9 593L217.5 1069.8L215.7 1068.9L463 592.3L209.9 1065.8L208.1 1064.9L461.3 591.3L202.3 1061.7L200.6 1060.8L459.6 590.2L194.8 1057.6L193.1 1056.6L457.7 589.4L187.4 1053.3L185.7 1052.3L456.1 588.3L180 1048.9L178.3 1047.9L454.4 587.2L172.6 1044.5L170.9 1043.4L452.7 586.2L165.3 1039.9L163.7 1038.9L451 585.1L158.1 1035.3L156.4 1034.2L449.3 584.1L150.9 1030.6L149.3 1029.5L447.6 583L143.8 1025.8L142.2 1024.6L445.9 581.9L136.8 1020.9L135.1 1019.7L444.4 580.6L129.8 1015.9L128.1 1014.7L442.7 579.5L122.8 1010.8L121.2 1009.6L441.1 578.3L115.9 1005.7L114.3 1004.5L439.6 577L109.1 1000.5L107.5 999.2L437.9 576L102.4 995.1L100.8 993.9L436.4 574.6L95.7 989.7L94.2 988.5L434.8 573.4L89.1 984.3L87.6 983L433.4 571.9L82.5 978.7L81 977.4L431.8 570.7L76.1 973.1L74.6 971.7L430.3 569.4L69.6 967.3L68.2 966L428.7 568.2L63.3 961.5L61.8 960.2L427.4 566.6L57 955.7L55.6 954.3L425.9 565.3L50.9 949.7L49.4 948.3L424.5 564L44.7 943.7L43.3 942.3L423 562.6L38.7 937.6L37.3 936.1L421.6 561.1L32.7 931.4L31.3 930L420.3 559.6L26.8 925.2L25.5 923.7L418.9 558.2L21 918.8L19.7 917.3L417.6 556.7L15.3 912.4L13.9 910.9L416.2 555.2L9.60001 906L8.3 904.5L415 553.7L4 899.4L2.7 897.9L413.6 552.2L-1.5 892.8L-2.7 891.3L412.4 550.6L-6.89999 886.2L-8.10001 884.6L411.1 549.1L-12.2 879.4L-13.5 877.9L409.9 547.5L-17.5 872.7L-18.7 871.1L408.8 545.8L-22.7 865.8L-23.8 864.2L407.5 544.3L-27.7 858.9L-28.9 857.3L406.3 542.7L-32.7 851.9L-33.9 850.3L405.3 540.9L-37.6 844.8L-38.8 843.2L404 539.4L-42.5 837.7L-43.6 836.1L402.9 537.7L-47.2 830.6L-48.3 828.9L401.9 536L-51.9 823.3L-52.9 821.7L400.9 534.3L-56.4 816.1L-57.5 814.4L399.8 532.6L-60.9 808.7L-61.9 807L398.6 531L-65.3 801.3L-66.3 799.6L397.7 529.2L-69.6 793.9L-70.6 792.2L396.8 527.4L-73.8 786.4L-74.7 784.7L395.8 525.7L-77.9 778.9L-78.8 777.1L394.8 524L-81.9 771.3L-82.8 769.5L393.9 522.2L-85.8 763.6L-86.7 761.8L393 520.4L-89.6 755.9L-90.5 754.1L392.1 518.6L-93.4 748.2L-94.2 746.4L391.2 516.8L-97 740.4L-97.8 738.6L390.5 514.9L-100.5 732.6L-101.4 730.8L389.6 513.1L-104 724.7L-104.8 722.9L388.8 511.3L-107.3 716.8L-108.1 715L388 509.5L-110.6 708.9L-111.3 707L387.3 507.6L-113.7 700.9L-114.5 699L386.6 505.7L-116.8 692.8L-117.5 691L385.9 503.8L-119.7 684.8L-120.4 682.9L385.3 501.9L-122.6 676.7L-123.2 674.8L384.6 500.1L-125.4 668.5L-126 666.6L384 498.2L-128 660.4L-128.6 658.5L383.4 496.3L-130.6 652.2L-131.1 650.2L382.8 494.3L-133 643.9L-133.6 642L382.1 492.5L-135.4 635.7L-135.9 633.7L381.8 490.5L-137.6 627.4L-138.1 625.4L381.2 488.6L-139.8 619.1L-140.3 617.1L380.7 486.6L-141.8 610.7L-142.3 608.8L380.3 484.7L-143.8 602.3L-144.2 600.4L379.7 482.7L-145.6 594L-146 592L379.3 480.8L-147.4 585.5L-147.7 583.6L379 478.8L-149 577.1L-149.4 575.1L378.5 476.9L-150.5 568.7L-150.9 566.7L378.3 474.9L-152 560.2L-152.3 558.2L378 472.9L-153.3 551.7L-153.6 549.7L377.6 470.9L-154.5 543.2L-154.8 541.2L377.4 468.9L-155.6 534.7L-155.9 532.7L377.2 467L-156.6 526.1L-156.8 524.2L376.9 465L-157.5 517.6L-157.7 515.6L376.7 463L-158.3 509.1L-158.5 507.1L376.6 461L-159 500.5L-159.2 498.5L376.4 459L-159.6 491.9L-159.7 489.9L376.2 457L-160.1 483.3L-160.2 481.3L376.2 455L-160.5 474.8L-160.6 472.8L376 453L-160.8 466.2V464.2L376.1 451L-160.9 457.6L-161 455.6L376 449H-161V1148H538V611L531.4 1148Z"></path>
      </g>
    </svg>
  );
};

const LogoPrism: FC = () => {
  return (
    <div className="z-10 col-span-full row-span-2 row-start-3 w-full place-items-center md:row-start-6">
      <img
        src={triangle}
        alt="triangle prism"
        className="h-[calc(var(--cellsize)*2)] object-contain"
      />
    </div>
  );
};

export default HomePage;

// import {Link} from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { t } from "@/lib/i18n"
import React from "react"
import { useState } from 'react';
import SolutionEwImg from "@/assets/images/solution_EW_poster.jpg"
import SolutionCwImg from "@/assets/images/solution_CW2_poster.jpg"
import SolutionBwImg from "@/assets/images/solution_BW_poster.jpg"

import SolutionEwVideo from "@/assets/videos/solution_EW.mp4"
import SolutionCwVideo from "@/assets/videos/solution_CW2.mp4"
import SolutionBwVideo from "@/assets/videos/solution_BW.mp4"

const solutionData = [
  {
    id: "electronic-warfare",
    number: "01",
    key: "electronicWarfare" as const,
    href: "/solution/electronic-warfare",
    poster: SolutionEwImg,
    video: SolutionEwVideo,
  },
  {
    id: "chemical-warfare",
    number: "02",
    key: "chemicalWarfare" as const,
    href: "/solution/chemical-warfare",
    poster: SolutionCwImg,
    video: SolutionCwVideo,
  },
  {
    id: "biological-warfare",
    number: "03",
    key: "biologicalWarfare" as const,
    href: "/solution/biological-warfare",
    poster: SolutionBwImg,
    video: SolutionBwVideo,
  },
]

export default function SolutionPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.solution.label}</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground">
                {t.solution.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t.solution.description}
              </p>
            </div>
          </div>
        </section>

        {/* Solutions List */}
        <section className="pb-24 lg:pb-32 hidden lg:block">
        <div className="mx-auto  px-6 lg:px-8">
          <div className="flex gap-6 h-[520px]">
            {solutionData.map((solution, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;
              
              return (
                <a
                  key={solution.id}
                  href={solution.href}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    videoRefs.current[index]?.play();
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    const video = videoRefs.current[index];
                    if (video) {
                      video.pause();
                    }
                  }}
                  className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur transition-all duration-1500 ease-[cubic-bezier(0.32,1,0.3,1)] cursor-pointer group"
                  style={{
                    flexBasis: isHovered ? '60%' : isAnyHovered ? '20%' : '33.333%',
                  }}
                >
                  {/* Background Video */}
                  <video
                    ref={(el) => {videoRefs.current[index] = el}}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    poster={solution.poster}
                  >
                    <source src={solution.video} type="video/mp4" />
                  </video>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    {/* Number */}
                    <span className="text-6xl font-mono font-bold text-white/20 group-hover:text-white/40 transition-colors duration-500">
                      {solution.number}
                    </span>

                    {/* Bottom Content */}
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-2 transition-transform duration-500 group-hover:translate-y-[-4px]">
                        {t.solution[solution.key].title}
                      </h2>
                      <p
                        className="text-gray-300 transition-all duration-500 overflow-hidden"
                        style={{
                          maxHeight: isHovered ? '100px' : '0px',
                          opacity: isHovered ? 1 : 0
                        }}
                      >
                        {t.solution[solution.key].summary}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-white/80 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium">{t.solution.learnMore}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Solutions List */}
      <section className="pb-24 lg:hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6">
            {solutionData.map((solution) => (
              <a
                key={solution.id}
                href={solution.href}
                className="relative h-[400px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur group"
              >
                {/* Background Video */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  autoPlay
                  poster={solution.poster}
                >
                  <source src={solution.video} type="video/mp4" />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <span className="text-5xl font-mono font-bold text-white/20">
                    {solution.number}
                  </span>

                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-2">
                      {t.solution[solution.key].title}
                    </h2>
                    <p className="text-gray-300 mb-4">
                      {t.solution[solution.key].summary}
                    </p>
                    <div className="flex items-center gap-2 text-white/80">
                      <span className="text-sm font-medium">{t.solution.learnMore}</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  )
}

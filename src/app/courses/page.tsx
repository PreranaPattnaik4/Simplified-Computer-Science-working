
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import placeholderImages from '@/app/lib/placeholder-images.json';

export default function CoursesPage() {
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      id: 0,
      title: "Career Tips and Roadmaps",
      subtitle: "Your career journey starts here",
      image: placeholderImages.homeHero1.src,
    },
    {
      id: 1,
      title: "TRENDING BLOGS",
      subtitle: "Stay updated with the latest trends",
      image: placeholderImages.homeHero2.src,
    },
    {
      id: 2,
      title: "Hackathons and Internships",
      subtitle: "Gain real-world experience",
      image: placeholderImages.homeHero3.src,
    },
    {
      id: 3,
      title: "PROJECTS",
      subtitle: "Build your portfolio",
      image: placeholderImages.homeHero4.src,
    },
    {
      id: 4,
      title: "TOP TRENDING COURSES",
      subtitle: "Master in-demand skills",
      image: placeholderImages.homeHero5.src,
    },
  ];

  return (
    <main>
        <section className="w-full bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-2 h-64 md:h-80 rounded-lg overflow-hidden">
                {panels.map((panel) => {
                    const isActive = activePanel === panel.id;
                    const activeWidth = 65;
                    const inactiveWidth = (100 - activeWidth) / (panels.length - 1);
                    const width = isActive ? activeWidth : inactiveWidth;

                    return (
                    <div
                        key={panel.id}
                        className={`relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out rounded-lg flex-1`}
                        style={{
                        flex: `${width} 1 auto`,
                        }}
                        onClick={() => setActivePanel(panel.id)}
                        onMouseEnter={() => setActivePanel(panel.id)}
                    >
                        <Image
                            src={panel.image}
                            alt={panel.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div
                        className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-opacity duration-500 ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                        >
                        <h3 className="text-white text-lg md:text-2xl font-bold uppercase tracking-wider mb-2">
                            {panel.title}
                        </h3>
                        <p className="text-yellow-400 font-semibold text-sm md:text-base uppercase tracking-widest">
                            {panel.subtitle}
                        </p>
                        </div>
                        {!isActive && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 opacity-75 group-hover:opacity-0 transition-opacity duration-300">
                            <h3 className="text-white text-sm md:text-lg font-bold uppercase tracking-wider truncate">
                            {panel.title}
                            </h3>
                        </div>
                        )}
                    </div>
                    );
                })}
                </div>
                <div className="flex justify-center gap-3 mt-8">
                {panels.map((panel) => (
                    <button
                    key={panel.id}
                    onClick={() => setActivePanel(panel.id)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                        activePanel === panel.id
                        ? "w-8 bg-yellow-400"
                        : "w-3 bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to ${panel.title}`}
                    />
                ))}
                </div>
            </div>
        </section>
        <div className="container mx-auto max-w-7xl px-4 py-16">
            <h1 className="text-4xl font-bold font-space-grotesk">Courses</h1>
            <p className="mt-4 text-lg text-muted-foreground">
            Browse our wide selection of courses.
            </p>
        </div>
    </main>
  );
}

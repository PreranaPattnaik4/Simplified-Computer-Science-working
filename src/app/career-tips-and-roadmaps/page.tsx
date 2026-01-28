
import CareerTimeline from "@/components/CareerTimeline";
import React from 'react';

export default function CareerTipsAndRoadmapsPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900">
              Career Tips and Roadmaps
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your guide to navigating the tech industry and building a successful career.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <CareerTimeline />
      </main>
    </div>
  );
}

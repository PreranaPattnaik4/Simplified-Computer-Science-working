

import Image from 'next/image';
import { Lightbulb } from 'lucide-react';
import placeholderImages from '@/app/lib/placeholder-images.json';

const heroImages = [
  {
    src: placeholderImages.resourcesHero1.src,
    alt: 'VR Future Tech',
    hint: placeholderImages.resourcesHero1.hint,
  },
  {
    src: placeholderImages.resourcesHero2.src,
    alt: 'Hackathons and Internships',
    hint: placeholderImages.resourcesHero2.hint,
  },
  {
    src: placeholderImages.resourcesHero3.src,
    alt: 'Robotics and Circuitry',
    hint: placeholderImages.resourcesHero3.hint,
  },
];

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Image Panels */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {heroImages.map((image, index) => (
              <div key={index} className="flex-1 overflow-hidden rounded-lg relative h-64 md:h-80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="w-full h-auto object-cover"
                  data-ai-hint={image.hint}
                />
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-2">
              Hackathons & Internships: Stand Out with Hands-On Experience!!
            </h2>
            <p className="text-xl font-bold text-accent">
              Earn Free Certificate
            </p>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="container mx-auto max-w-7xl px-4 py-16 text-center">
        <h2 className="text-4xl font-bold font-space-grotesk">Unleash Your Potential in AI, Tech & Innovation!</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Gain hands-on experience through exciting hackathons and real-world internships in AI, Machine Learning, and cutting-edge tech. Build your portfolio, collaborate with industry experts, and stand out in your career journey.
        </p>
        <ul className="mt-6 flex justify-center flex-wrap gap-8 text-lg">
          <li className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent" /> Work on real projects</li>
          <li className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent" /> Enhance your problem-solving skills</li>
          <li className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent" /> Earn certificates & grow your network</li>
        </ul>
        <button className="mt-8 rounded-full bg-accent px-12 py-4 text-lg font-bold text-accent-foreground transition-transform hover:scale-105">
          Start your journey today!
        </button>
      </section>

      {/* Original Content */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold font-space-grotesk">Resources</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to the Resources page. Here you will find a collection of useful tools, guides, and downloads to help you on your learning journey.
        </p>
      </div>
    </main>
  );
}

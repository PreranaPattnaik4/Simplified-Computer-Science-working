'use client';

import Image from 'next/image';
import { Download, Code, FileText, BrainCircuit, Bot } from 'lucide-react';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaWhatsapp } from 'react-icons/fa';

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

const resources = [
    {
        title: "Python for Data Science Cheat Sheet",
        description: "A handy guide covering essential commands for Pandas, NumPy, and Matplotlib.",
        icon: <Code className="h-8 w-8 text-accent" />,
        downloadLink: "#",
    },
    {
        title: "The Ultimate Resume Checklist for Tech Roles",
        description: "Craft the perfect resume with this checklist, covering everything from formatting to content.",
        icon: <FileText className="h-8 w-8 text-accent" />,
        downloadLink: "#",
    },
    {
        title: "101 JavaScript Interview Questions",
        description: "A comprehensive list of common JavaScript questions to ace your next technical interview.",
        icon: <BrainCircuit className="h-8 w-8 text-accent" />,
        downloadLink: "#",
    },
    {
        title: "Beginner's Guide to Prompt Engineering",
        description: "Learn the art of crafting effective prompts to get the most out of AI models like GPT.",
        icon: <Bot className="h-8 w-8 text-accent" />,
        downloadLink: "#",
    }
];

export default function ResourcesPage() {
  const shareOnWhatsApp = (title: string) => {
    if (typeof window !== "undefined") {
      const text = encodeURIComponent(`Check out this awesome resource from Simplified Computer Science: "${title}". Find more at ${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`);
    }
  };

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
              Hackathons & Internships: Stand Out with Hands-On Experience!
            </h2>
            <p className="text-xl font-bold text-accent">
              Earn Free Certificate
            </p>
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section className="bg-gray-50/50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-space-grotesk">Downloadable Resources</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Accelerate your learning with our curated collection of cheat sheets, guides, and checklists. Download them for free and share with your network.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {resources.map((resource, index) => (
                    <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow">
                        <CardHeader className="items-center">
                            <div className="bg-accent/10 p-4 rounded-full mb-4">
                                {resource.icon}
                            </div>
                            <CardTitle className="font-space-grotesk h-14">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{resource.description}</CardDescription>
                        </CardContent>
                        <div className="p-6 pt-0 w-full flex flex-col gap-3">
                            <Button asChild className="w-full">
                                <a href={resource.downloadLink} download>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </a>
                            </Button>
                            <Button 
                                variant="outline" 
                                className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white" 
                                onClick={() => shareOnWhatsApp(resource.title)}>
                                <FaWhatsapp className="mr-2 h-5 w-5" />
                                Share on WhatsApp
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </main>
  );
}

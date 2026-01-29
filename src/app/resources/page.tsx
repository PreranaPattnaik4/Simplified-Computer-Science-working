'use client';

import Image from 'next/image';
import { Download, Code, FileText, BrainCircuit, Bot, CheckCircle } from 'lucide-react';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaWhatsapp } from 'react-icons/fa';

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

const GuideDetail = ({ title, items }: { title: string; items: string[] }) => (
    <div>
        <h3 className="font-semibold text-lg text-accent mb-2">{title}</h3>
        <ul className="text-gray-300 space-y-1">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent/80 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);


export default function ResourcesPage() {
  const shareOnWhatsApp = (title: string) => {
    if (typeof window !== "undefined") {
      const text = encodeURIComponent(`Check out this awesome resource from Simplified Computer Science: "${title}". Find more at ${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`);
    }
  };
  
  const whatYoullFind = [
    "Downloadable cheat sheets for quick reference.",
    "Comprehensive guides and checklists for tech roles.",
    "Curated lists of interview questions to ace your next interview.",
    "Practical resources for prompt engineering and AI tools.",
    "Ready-to-use templates for resumes and projects.",
  ];

  const whoThisIsFor = [
    "Students looking for handy study aids.",
    "Developers and engineers preparing for technical interviews.",
    "Self-learners wanting to accelerate their progress.",
    "Anyone in tech needing quick, actionable information and templates.",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
            <Image 
                src={placeholderImages.resourcesHero1.src}
                alt="Tech resources abstract"
                fill
                className="object-cover opacity-20"
                data-ai-hint="tech resources"
            />
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-accent">
                        Resources
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Your one-stop collection of downloadable cheat sheets, guides, and templates to accelerate your tech journey.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <GuideDetail title="What you’ll find here:" items={whatYoullFind} />
                    <GuideDetail title="Who this is for:" items={whoThisIsFor} />
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

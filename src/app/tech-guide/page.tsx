
'use client';

import React from 'react';
import { BrainCircuit, Feather, PenTool, Lightbulb, Code, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const techGuideTabs = [
    {
        id: 'AI & Content Creation',
        title: "AI & Content Creation",
        icon: <BrainCircuit className="h-8 w-8 text-accent" />,
        content: {
            heading: "AI & Content Creation: Supercharge Your Workflow",
            description: "Learn how to partner with AI to create high-quality content faster and more efficiently. From brainstorming ideas to polishing your final draft, AI is a powerful assistant for writers and creators.",
            features: {
                title: 'Core Concepts:',
                list: [
                    'Prompt Engineering: Crafting clear instructions to get the best results from AI models.',
                    'AI-Assisted Writing: Using tools like ChatGPT or Gemini to generate drafts, summarize text, and refine your writing.',
                    'Content Optimization: Leveraging AI to analyze SEO and improve your content\'s visibility.',
                    'Ethical Considerations: Understanding the responsible use of AI in content creation.',
                ]
            },
            conclusion: 'Integrating AI into your workflow allows you to focus on strategy and creativity while automating repetitive tasks.'
        }
    },
    {
        id: 'Web Development',
        title: "Web Development",
        icon: <Code className="h-8 w-8 text-accent" />,
        content: {
            heading: "Web Development: From Concept to Live Site",
            description: "Build a solid foundation in web development. Understand the core technologies and frameworks needed to build modern, responsive, and user-friendly websites and applications.",
             features: {
                title: 'Key Areas:',
                list: [
                    'Frontend: Learn HTML for structure, CSS for styling, and JavaScript for interactivity.',
                    'Backend: Understand server-side logic, databases, and APIs to power your application.',
                    'Frameworks: Utilize modern frameworks like React and Next.js to build complex applications efficiently.',
                    'Deployment: Learn how to take your project from your local machine to a live server for the world to see.',
                ]
            },
            conclusion: 'A strong understanding of web development opens the door to creating powerful digital experiences.'
        }
    },
    {
        id: 'Prompt Engineering',
        title: "Prompt Engineering",
        icon: <Feather className="h-8 w-8 text-accent" />,
        content: {
            heading: "Prompt Engineering: The Art of Talking to AI",
            description: "Learn how to craft effective prompts to get the most out of large language models (LLMs). This skill is essential for anyone working with generative AI, as the quality of the input directly determines the quality of the output.",
            features: {
                title: 'Essential Techniques:',
                list: [
                    'Specificity and Context: Providing detailed context to guide the AI\'s response.',
                    'Few-Shot Prompting: Giving the model examples to teach it the desired format or style.',
                    'Chain of Thought: Asking the AI to "think step by step" to improve reasoning for complex problems.',
                    'Role-Playing: Instructing the AI to act as a specific persona (e.g., "Act as an expert copywriter").',
                ]
            },
            conclusion: 'Mastering prompt engineering turns generative AI from a novelty into a powerful, reliable tool.'
        }
    },
    {
        id: 'Writing & Content Creation',
        title: "Writing & Content Creation",
        icon: <PenTool className="h-8 w-8 text-accent" />,
        content: {
            heading: "Writing & Content Creation for the Digital Age",
            description: "Enhance your writing skills and learn how to create engaging content that resonates with your audience. From technical blogging to marketing copy, strong writing is a cornerstone of effective communication in tech.",
             features: {
                title: 'Core Skills:',
                list: [
                    'Know Your Audience: Tailoring your language and tone to your target readers.',
                    'Storytelling: Weaving narratives to make complex topics more relatable and memorable.',
                    'SEO Best Practices: Understanding keywords and structure to make your content discoverable.',
                    'Editing and Proofreading: Polishing your work to ensure clarity, accuracy, and professionalism.',
                ]
            },
            conclusion: 'Great content not only informs but also builds authority and trust with your audience.'
        }
    },
    {
        id: 'AI Tools',
        title: "AI Tools",
        icon: <Lightbulb className="h-8 w-8 text-accent" />,
        content: {
            heading: "Leveraging AI Tools to Boost Productivity",
            description: "Discover a curated list of AI tools that can boost your productivity for various purposes, from coding assistants that write boilerplate code to design tools that generate images from text.",
            features: {
                title: 'Popular Categories:',
                list: [
                    'AI Code Assistants: Tools like GitHub Copilot that suggest code and entire functions in real-time.',
                    'AI Image Generators: Platforms like Midjourney or DALL-E that create visuals from text prompts.',
                    'AI Note-Taking & Summarization: Tools that can transcribe meetings and summarize long documents.',
                    'AI Presentation Makers: Software that can help design slides and generate presentation content.',
                ]
            },
            conclusion: 'Effectively using AI tools can save you hours of work and unlock new creative possibilities.'
        }
    },
    {
        id: 'Professional Skills',
        title: "Professional Skills",
        icon: <Briefcase className="h-8 w-8 text-accent" />,
        content: {
            heading: "Developing Professional Skills for a Tech Career",
            description: "Technical ability is only half the equation. Develop the soft skills and professional acumen needed to succeed in the tech industry, from collaborating in a team to planning your career path.",
            features: {
                title: 'Must-Have Skills:',
                list: [
                    'Effective Communication: Clearly explaining complex technical topics to non-technical stakeholders.',
                    'Teamwork & Collaboration: Working effectively in a team environment using tools like Git and project management software.',
                    'Problem-Solving: Approaching challenges with a structured and analytical mindset.',
                    'Career Management: Building a portfolio, networking effectively, and preparing for interviews.',
                ]
            },
            conclusion: 'Strong professional skills will accelerate your career growth and make you a more valuable team member.'
        }
    },
];

export default function TechGuidePage() {
    const [activeTab, setActiveTab] = useState('AI & Content Creation');
    const activeTabData = techGuideTabs.find(tab => tab.id === activeTab)?.content;

    return (
        <div className="bg-background text-foreground">
            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900">
                            Tech Guide for Beginners
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Your starting point for navigating the world of tech. Explore curated resources on AI, content creation, web development, and professional skills.
                        </p>
                    </div>
                </section>

                 {/* Guide Section */}
                <section className="container mx-auto max-w-7xl px-4 py-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="col-span-1 space-y-4">
                            {techGuideTabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "w-full p-6 rounded-lg font-bold text-lg text-left transition-colors flex items-center gap-4",
                                        activeTab === tab.id 
                                            ? 'bg-accent text-accent-foreground' 
                                            : 'bg-black text-white hover:bg-gray-800'
                                    )}
                                >
                                    {tab.icon && React.cloneElement(tab.icon, { className: "h-6 w-6 text-current" })}
                                    <span>{tab.title}</span>
                                </button>
                            ))}
                        </div>
                        <div className="col-span-2 rounded-lg border bg-card p-8 text-card-foreground text-left">
                            {activeTabData && (
                                <>
                                    <h3 className="text-2xl font-bold mb-4 font-space-grotesk">{activeTabData.heading}</h3>
                                    <p className="mb-6 text-muted-foreground">{activeTabData.description}</p>
                                    <h4 className="text-xl font-bold mb-2 font-space-grotesk">{activeTabData.features.title}</h4>
                                    <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                                        {activeTabData.features.list.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="text-muted-foreground italic">{activeTabData.conclusion}</p>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

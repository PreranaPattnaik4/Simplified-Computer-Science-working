
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Menu,
  User,
  Search,
  BookOpen,
  Code,
  GraduationCap,
  Lightbulb,
  Briefcase,
  Wrench,
  Rocket,
  ArrowRight,
  Instagram,
  Linkedin,
  Youtube,
  FileText,
  HeartHandshake,
  Download,
  Target,
  BarChart,
  BrainCircuit,
  PencilRuler,
  Server,
  Star,
  HelpCircle,
  FolderKanban,
  FileBadge,
  ArrowDown,
  Bot,
  TerminalSquare,
  Milestone,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import IndustrySolutions from '@/components/IndustrySolutions';
import TrendingBlogs from '@/components/TrendingBlogs';
import LimitlessLearning from '@/components/LimitlessLearning';
import CareerTimeline from '@/components/CareerTimeline';
import placeholderImages from '@/app/lib/placeholder-images.json';
import SCSLearningPaths from '@/components/SCSLearningPaths';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';


const whatWeOffer = [
    { icon: <BookOpen />, title: "Blogs", description: "Stay updated with the latest trends in technology, IT, computers, and AI through our insightful blogs. We provide in-depth analysis and opinions on current trends and emerging technologies.", tag: "EXCLUSIVE" },
    { icon: <GraduationCap />, title: "Courses", description: "Comprehensive learning paths designed to take you from beginner to advanced levels in various topics. Our courses include practical exercises and real-world applications.", tag: "EXCLUSIVE"},
    { icon: <Code />, title: "Project", description: "Learn how to effectively manage projects and handle file management with our practical instructions, helping you stay organized and efficient." },
    { icon: <FileText />, title: "How-To Guides", description: "Our how-to guides provide detailed instructions on a variety of tech-related tasks. Whether you're a beginner or an experienced professional, you'll find valuable information to help you achieve your goals." },
    { icon: <Briefcase />, title: "Professional Skills", description: "Our website provides step-by-step instructions on how to cultivate essential abilities, including technical skills, soft skills, language proficiency, and personal attributes, ensuring you have the tools you need to succeed in the modern workplace." },
    { icon: <Wrench />, title: "Tips and Tricks", description: "Discover practical tips and tricks to improve your tech skills and productivity. Our tips are designed to help you navigate the digital world more efficiently."},
    { icon: <Rocket />, title: "Career Roadmaps", description: "At Simplified Computer Science, our roadmaps cover tech and AI career paths, offering: A step-by-step approach to mastering key skills. Clear milestones for tracking progress. Guidance on relevant tools, technologies, and certifications. Clear, structured guides to help you navigate your career path in tech and AI.These roadmaps simplify the learning process, helping users focus on essential knowledge to achieve their goals efficiently." },
    { icon: <HeartHandshake />, title: "Interview Preparation", description: "A collection of technical and non-technical interview questions to help you get ready for job interviews in various roles. These interview questions samples simplify the learning process, helping users focus on essential knowledge to achieve their goals efficiently.", tag: "EXCLUSIVE" },
    { icon: <Download />, title: "Downloads", description: "At Simplified Computer Science, we offer downloadable resources like study guides to support your learning offline. These materials are for personal use only and cannot be redistributed or used commercially without permission. All content is subject to copyright, and proper attribution is required for offline use. While these resources offer flexible learning, please do not use them directly—instead, learn from them and create your own original work.", tag: "EXCLUSIVE"},
];

const faqItems = [
    {
        question: "Who is Simplified Computer Science for?",
        answer: "Our platform is for learners of all levels, from absolute beginners to experienced professionals. We offer resources to help you start your journey in tech or upskill in areas like computer science and AI."
    },
    {
        question: "Who is the founder?",
        answer: "Simplified Computer Science was founded by Prerana Kailash Pattnaik, a tech educator and content creator dedicated to making technology education accessible to everyone."
    },
    {
        question: "Do you offer certificates?",
        answer: "Yes, we offer certificates for most courses upon successful completion. They are a great way to showcase your skills and commitment to learning."
    },
    {
        question: "Can I add courses to my resume?",
        answer: "Absolutely! We encourage you to add completed courses and certificates to your resume and LinkedIn profile to demonstrate your skills to potential employers."
    },
    {
      question: "Are the certificates accredited?",
      answer: "While our certificates are not formally accredited, they are recognized by employers as valuable proof of your dedication to continuous learning and professional development."
    },
    {
      question: "What's in the newsletter?",
      answer: "Our newsletter includes updates on new courses, the latest blog posts, and exclusive tips and tricks to help you stay ahead in the fast-paced world of technology."
    }
];

const coreConceptsTabs = [
    {
        id: 'Agentic AI',
        title: 'Agentic AI',
        content: {
            heading: 'The Rise of Agentic AI',
            description: 'Agentic AI refers to autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals without direct human intervention. These agents can learn, adapt, and collaborate, paving the way for highly sophisticated automation.',
            features: {
                title: 'Characteristics of AI Agents:',
                list: [
                    'Autonomy: Operates independently to perform tasks.',
                    'Reactivity: Senses and responds to changes in its environment.',
                    'Proactiveness: Takes initiative to achieve goals rather than just reacting.',
                    'Goal-Oriented: Designed with specific objectives to pursue.',
                    'Learning: Adapts its behavior based on experience and data.'
                ]
            },
            conclusion: 'Agentic AI is moving us from tools that require instruction to partners that can take on complex tasks autonomously.'
        }
    },
    {
        id: 'Generative AI',
        title: 'Generative AI',
        content: {
            heading: 'Exploring Generative AI',
            description: 'Generative AI is a branch of artificial intelligence that can create new and original content, such as text, images, music, and code. It learns patterns from existing data and uses that knowledge to generate novel outputs. Large Language Models (LLMs) like GPT are a prime example of generative AI.',
            features: {
                title: 'Key Applications:',
                list: [
                    'Content Creation: Automating the generation of articles, marketing copy, and social media posts.',
                    'Art and Design: Creating unique images, illustrations, and designs from text descriptions.',
                    'Code Generation: Assisting developers by writing boilerplate code, functions, and even entire scripts.',
                    'Drug Discovery and Research: Simulating molecular structures and accelerating scientific research.',
                    'Personalized Experiences: Powering chatbots and virtual assistants that offer human-like conversation.'
                ]
            },
            conclusion: 'Generative AI is revolutionizing creative and technical fields by augmenting human capabilities and automating content production.'
        }
    },
    {
        id: 'Data Scientists',
        title: 'Data Scientists And Analysts',
        content: {
            heading: 'The Role of Data Scientists and Analysts',
            description: 'Data Scientists and Analysts are professionals who extract insights and knowledge from data. Analysts often focus on describing what happened, while Data Scientists may build models to predict what will happen. Both roles are critical for data-driven decision-making in any organization.',
            features: {
                title: 'Essential Skills & Tools:',
                list: [
                    'Data Wrangling and Cleaning: Using tools like Python (Pandas) and SQL to prepare data for analysis.',
                    'Statistical Analysis: Applying statistical methods to interpret data and uncover trends.',
                    'Data Visualization: Creating charts and dashboards with libraries like Matplotlib, Seaborn, or tools like Tableau to communicate findings.',
                    'Business Acumen: Understanding the business context to ask the right questions and provide actionable insights.',
                    'Machine Learning (for Data Scientists): Building predictive models to forecast future outcomes.'
                ]
            },
            conclusion: 'These roles transform raw data into a strategic asset, guiding business strategy and uncovering new opportunities.'
        }
    },
    {
        id: 'Web Development',
        title: "Web Development",
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
        id: 'Programming Fundamentals',
        title: 'Programming Fundamentals',
        content: {
            heading: 'Programming Fundamentals: The Building Blocks of Code',
            description: 'Programming fundamentals are the essential concepts and principles that form the foundation of all software development. Mastering these basics is the first step to becoming a proficient programmer, regardless of the language or technology you choose.',
            features: {
                title: 'Core Concepts:',
                list: [
                    'Variables & Data Types: Storing and managing different kinds of information.',
                    'Control Flow: Using loops and conditional statements (if/else) to direct the logic of a program.',
                    'Functions: Writing reusable blocks of code to perform specific tasks.',
                    'Data Structures: Understanding how to organize data with structures like arrays and lists.',
                    'Problem-Solving: Breaking down complex problems into smaller, manageable steps.',
                ]
            },
            conclusion: 'A strong grasp of these fundamentals is crucial for writing clean, efficient, and effective code.'
        }
    },
    {
        id: 'Software Engineering',
        title: 'Software Engineering',
        content: {
            heading: 'Software Engineering: Building Robust and Scalable Applications',
            description: "Software Engineering applies engineering principles to software development. It's not just about writing code, but about designing, building, testing, and maintaining software systems in a systematic and disciplined way.",
            features: {
                title: 'Key Practices:',
                list: [
                    'System Design: Architecting the components and structure of a software application.',
                    'Version Control: Using tools like Git to track changes and collaborate with teams.',
                    'Testing: Implementing unit, integration, and end-to-end tests to ensure quality and reliability.',
                    'Agile Methodologies: Following iterative development cycles to adapt to changing requirements.',
                    'Code Quality: Writing clean, maintainable, and well-documented code.',
                ]
            },
            conclusion: 'Good software engineering practices ensure that projects are delivered on time, within budget, and meet user needs.'
        }
    },
];

export default function HomePage() {
  const [activeCoreConceptTab, setActiveCoreConceptTab] = useState('Agentic AI');
  const activeCoreConceptData = coreConceptsTabs.find(tab => tab.id === activeCoreConceptTab)?.content;

  const explorationCards = [
    {
        title: "Career Roadmaps",
        subtitle: "Chart your path to success in tech.",
        href: "/career-tips-and-roadmaps",
        image: placeholderImages.homeHero1.src,
        hint: placeholderImages.homeHero1.hint
    },
    {
        title: "Trending Courses",
        subtitle: "Explore our most popular and highly-rated courses.",
        href: "/courses-live",
        image: placeholderImages.homeHero5.src,
        hint: placeholderImages.homeHero5.hint
    },
    {
        title: "Tech Guide",
        subtitle: "A deep-dive into core CS topics and modern technologies.",
        href: "/tech-guide",
        image: placeholderImages.techGuideHero.src,
        hint: placeholderImages.techGuideHero.hint
    },
    {
        title: "SCS DevStudio",
        subtitle: "Execute code in real-time. Supports HTML/CSS, Python, C, SQL, and Modern JS Frameworks.",
        href: "/codelab",
        image: placeholderImages.course2.src,
        hint: placeholderImages.course2.hint
    },
    {
        title: "SCS AI Assistant",
        subtitle: "Your personal guide to SCS. Ask me anything about our courses, content, or career paths.",
        href: "/ai-assistant",
        image: placeholderImages.aiAssistant.src,
        hint: placeholderImages.aiAssistant.hint
    }
  ];

  return (
    <div className="bg-background text-foreground">
      <main>
        {/* New Hero Section */}
        <section className="bg-background pt-8 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square">
                        <Image
                            src={placeholderImages.designCulture.src}
                            alt="Design Culture"
                            fill
                            className="object-cover rounded-lg"
                            data-ai-hint={placeholderImages.designCulture.hint}
                        />
                         <div
                          className="absolute inset-0 rounded-lg"
                          style={{
                            backgroundImage:
                              'linear-gradient(to right, rgba(255,255,255,0.85), rgba(255,255,255,0.55), rgba(255,255,255,0.15))',
                          }}
                        ></div>

                        <div className="absolute -bottom-10 -left-10 hidden md:block">
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 border-2 border-black"></div>
                                <div className="absolute inset-2 bg-accent flex items-center justify-center">
                                    <ArrowDown className="w-8 h-8 text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk tracking-tighter leading-none">
                            SIMPLIFIED <br /> COMPUTER SCIENCE
                        </h1>
                        <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-light leading-tight">
                                    Making Technology Simple, Practical, and Accessible
                                </h2>
                                <Link href="/courses-live">
                                    <button className="mt-6 bg-accent text-accent-foreground font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors">
                                        START LEARNING
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <p className="text-muted-foreground">
                                    Learn computer science, artificial intelligence, and modern tech skills through easy-to-follow tutorials, clear roadmaps, and practical guidance for real-world IT learning.
                                </p>
                                <Link href="/courses-live" className="mt-2 inline-block font-semibold underline underline-offset-4">
                                    Explore Tutorials
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2: Core Technical Concepts */}
        <section className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold font-space-grotesk tracking-[0.2em] text-gray-800 uppercase">
            Core Technical Concepts
          </h2>
          <div className="w-24 h-px bg-accent mx-auto mt-4 mb-12"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="col-span-1 space-y-4">
                  {coreConceptsTabs.map(tab => (
                      <button
                          key={tab.id}
                          onClick={() => setActiveCoreConceptTab(tab.id)}
                          className={cn(
                              "w-full p-6 rounded-lg text-white font-bold text-lg text-left transition-colors",
                              activeCoreConceptTab === tab.id ? 'bg-accent text-accent-foreground' : 'bg-black hover:bg-gray-800'
                          )}
                      >
                          {tab.title}
                      </button>
                  ))}
              </div>
              <div className="col-span-2 rounded-lg border bg-card p-8 text-card-foreground text-left">
                  {activeCoreConceptData && (
                      <>
                          <h3 className="text-2xl font-bold mb-4 font-space-grotesk">{activeCoreConceptData.heading}</h3>
                          <p className="mb-6 text-muted-foreground">{activeCoreConceptData.description}</p>
                          <h4 className="text-xl font-bold mb-2 font-space-grotesk">{activeCoreConceptData.features.title}</h4>
                          <ul className="list-disc list-inside space-y-2 mb-6">
                              {activeCoreConceptData.features.list.map((item, index) => (
                                  <li key={index}>{item}</li>
                              ))}
                          </ul>
                          <p className="text-muted-foreground">{activeCoreConceptData.conclusion}</p>
                      </>
                  )}
              </div>
          </div>
        </section>

        {/* Explore Core Features Section */}
        <section className="bg-gray-50/50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900">Explore Core Features</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Dive into our main offerings, each designed to provide a clear path to mastering new skills and concepts.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {explorationCards.map(card => (
                        <Link href={card.href} key={card.title}>
                            <div className="group relative block h-96 overflow-hidden rounded-xl shadow-lg">
                                <Image 
                                    src={card.image} 
                                    alt={card.title} 
                                    fill 
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    data-ai-hint={card.hint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100 motion-reduce:opacity-0"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ease-out group-hover:-translate-y-2 motion-reduce:transition-none">
                                    <h3 className="text-xl font-bold font-space-grotesk">{card.title}</h3>
                                    <p className="text-sm text-gray-300">{card.subtitle}</p>
                                    <div className="mt-4 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:opacity-100">
                                        <span className="font-semibold text-sm">
                                            {card.title === 'SCS DevStudio' 
                                                ? 'Open Sandbox' 
                                                : card.title === 'SCS AI Assistant'
                                                ? 'Ask AI'
                                                : 'Explore'
                                            }
                                        </span>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        <SCSLearningPaths />
        
        <TrendingBlogs />
        <LimitlessLearning />
        <IndustrySolutions />
        <CareerTimeline />

        <section className="bg-gray-50/50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src={placeholderImages.careerTipsHero.src} 
                            alt="A winding path representing a career roadmap" 
                            fill 
                            className="object-cover"
                            data-ai-hint={placeholderImages.careerTipsHero.hint}
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900">Career Roadmaps for Modern Tech Roles</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Navigate your career in tech with our detailed roadmaps. Get step-by-step guidance for top roles like AI/ML Engineer, Full-Stack Developer, and more.
                        </p>
                        <Link href="/career-tips-and-roadmaps">
                           <Button className="mt-8">
                                Explore Roadmaps
                           </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* What We Offer Section */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-12 text-center text-4xl font-bold font-space-grotesk">What We Offer</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {whatWeOffer.map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
                        {item.tag && <span className="absolute top-2 right-2 py-1 px-3 rounded-full bg-pink-500 text-white text-xs font-bold">{item.tag}</span>}
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-accent">
                            {React.cloneElement(item.icon, { className: "h-8 w-8" })}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold font-space-grotesk">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 py-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold font-space-grotesk">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our platform is designed for learners of all levels, from absolute beginners to experienced professionals. We provide a comprehensive range of resources to support your learning goals.
                    </p>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-lg font-semibold font-space-grotesk">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 pb-16">
            <div className="text-center">
                <p className="text-lg text-muted-foreground">Have more questions? Find all the answers you need on our FAQ page.</p>
                <Link href="/faq">
                    <Button variant="link" className="mt-2 text-lg">
                        Visit FAQ Page <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </section>

        <section className="container mx-auto max-w-7xl px-4 py-16">
            <div className="rounded-lg border-l-8 border-accent bg-card p-8 shadow-lg md:p-12 text-center">
                <h2 className="text-3xl font-bold font-space-grotesk">Discover the most trending courses in AI, technology, and more! Join now to access these high-demand courses</h2>
                <p className="mt-2 text-xl font-semibold text-accent">Earn Free Certificate</p>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                    Gain full access to our extensive library of free courses and track your progress effortlessly! While our Blogs, Tutorials, and Resources are available without signup, registering allows you to enjoy exclusive content, course certificates, and more. Most of our courses are free—start learning today with no fees, just knowledge!
                </p>
                <button className="mt-8 flex items-center gap-2 mx-auto rounded-full bg-accent px-10 py-4 text-lg font-bold text-accent-foreground transition-transform hover:scale-105">
                    ENROLL NOW! <ArrowRight className="h-5 w-5" />
                </button>
            </div>
        </section>
      </main>
    </div>
  );
}


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

const foundationsTabs = [
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
    {
        id: 'UI/UX Design',
        title: 'UI/UX Design',
        content: {
            heading: 'UI/UX Design: Crafting User-Centered Experiences',
            description: 'User Interface (UI) and User Experience (UX) Design are critical for creating products that are not only visually appealing but also intuitive, easy to use, and enjoyable for the user. UI focuses on the look and feel, while UX focuses on the overall experience and usability.',
            features: {
                title: 'Core Principles:',
                list: [
                    'User Research: Understanding user behaviors, needs, and motivations through interviews and surveys.',
                    'Wireframing & Prototyping: Creating low-fidelity and high-fidelity mockups to visualize the product structure.',
                    'Interaction Design: Designing the way users interact with the product.',
                    'Usability Testing: Evaluating the product with real users to identify and fix usability issues.',
                    'Visual Design: Focusing on aesthetics, including color theory, typography, and layout.',
                ]
            },
            conclusion: 'Effective UI/UX design is essential for product success, leading to higher user satisfaction and engagement.'
        }
    },
    {
        id: 'Python',
        title: 'Python',
        content: {
            heading: 'Python: The Heart of Modern AI and LLM Development',
            description: 'Python is a powerful, easy-to-learn programming language that supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It is widely used for web development, automation, machine learning, data analysis, and artificial intelligence. Python’s extensive standard library and vibrant community contribute to its popularity in various industries.',
            features: {
                title: 'Key Features of Python Development:',
                list: [
                    'Readability: Python’s simple syntax makes it easy to read and write, reducing the complexity of software development.',
                    'Extensive Libraries: Python offers a vast collection of libraries and frameworks, such as Django, Flask, NumPy, and pandas, that speed up development.',
                    'Cross-Platform Compatibility: Python runs on various platforms, including Windows, Linux, and macOS, making it a versatile choice for a developer.',
                    'Automation & Scripting: Python is commonly used for automating tasks, from simple scripts to complex workflows.',
                    'Data Science & Machine Learning: Python is a go-to language for data analysis, statistical computing, and building machine learning models, with libraries like TensorFlow, scikit-learn, and Keras.'
                ]
            },
            conclusion: 'With Python’s flexibility and powerful features, developers can create anything from web applications to data-driven solutions and AI models, making it an essential tool in modern development.'
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
        id: 'Deployment',
        title: 'Deployment',
        content: {
            heading: 'Deployment: Bringing Your Application to Life',
            description: 'Deployment is the process of making your software application available for users. This crucial step involves moving your code from a development environment to a production environment where it can be accessed by the world.',
            features: {
                title: 'Common Deployment Strategies:',
                list: [
                    'CI/CD Pipelines: Automating the build, test, and deployment process for faster and more reliable releases.',
                    'Containerization: Packaging an application and its dependencies into a container (using Docker) for consistency across environments.',
                    'Cloud Platforms: Utilizing services from AWS, Google Cloud, or Azure to host and scale applications.',
                    "Monitoring & Logging: Tracking the application's performance and health in production to quickly identify and fix issues.",
                ]
            },
            conclusion: 'A smooth deployment process is key to delivering value to users quickly and maintaining a stable, reliable service.'
        }
    },
];

const advancedTabs = [
    {
        id: 'Machine Learning',
        title: 'Machine Learning',
        content: {
            heading: 'Fundamentals of Machine Learning',
            description: 'Machine Learning (ML) is a subset of AI that focuses on building systems that can learn from and make decisions based on data. Instead of being explicitly programmed, an ML model identifies patterns in data to make predictions or classifications.',
            features: {
                title: 'Common ML Paradigms:',
                list: [
                    'Supervised Learning: Training a model on labeled data to predict outcomes (e.g., spam detection, house price prediction).',
                    'Unsupervised Learning: Finding hidden patterns or structures in unlabeled data (e.g., customer segmentation, anomaly detection).',
                    'Reinforcement Learning: Training an agent to make a sequence of decisions by rewarding it for good actions and penalizing it for bad ones (e.g., game playing, robotics).',
                    'Model Evaluation: Using metrics to assess the performance and accuracy of models before deployment.',
                ]
            },
            conclusion: 'Machine Learning is the engine that powers many of the AI applications we use daily, from recommendation systems to predictive analytics.'
        }
    },
    {
        id: 'AI Specialists',
        title: 'Artificial Intelligence Specialists',
        content: {
            heading: 'The Role of an AI Specialist',
            description: 'AI Specialists design and implement artificial intelligence models to solve real-world problems. They work on everything from natural language processing and computer vision to complex decision-making systems. This role requires a strong foundation in programming, machine learning, and deep learning.',
            features: {
                title: 'Core Competencies:',
                list: [
                    'Expertise in Python for AI development.',
                    'Deep understanding of Machine Learning and Deep Learning frameworks like TensorFlow and PyTorch.',
                    'Ability to design, train, and validate complex neural networks.',
                    'Experience with data preprocessing and feature engineering.',
                    'Knowledge of cloud platforms (AWS, Google Cloud) for deploying AI models at scale.'
                ]
            },
            conclusion: 'AI Specialists are at the forefront of innovation, creating intelligent systems that can learn, reason, and act.'
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
        id: 'Cloud Engineering',
        title: 'Cloud Engineering',
        content: {
            heading: 'Cloud Engineering: Building the Future on the Cloud',
            description: 'Cloud Engineering involves designing, building, and managing applications and infrastructure on cloud platforms like AWS, Google Cloud, and Azure. It enables scalability, flexibility, and cost-efficiency for modern tech solutions, including AI.',
            features: {
                title: 'Key Cloud Concepts:',
                list: [
                    'Infrastructure as Code (IaC): Managing infrastructure through code using tools like Terraform or CloudFormation.',
                    'Serverless Computing: Running code without provisioning or managing servers (e.g., AWS Lambda, Google Cloud Functions).',
                    'Containerization: Packaging an application and its dependencies into a container (using Docker) and orchestrating them with Kubernetes.',
                    'Cloud-Native Services: Leveraging managed services for databases, storage, and AI/ML.',
                    'Security & Compliance: Implementing robust security measures in the cloud environment.'
                ]
            },
            conclusion: 'Cloud Engineering is the backbone of modern technology, providing the scalable and resilient infrastructure needed to power everything from startups to enterprise-scale AI.'
        }
    },
    {
        id: 'MLOps',
        title: 'MLOps',
        content: {
            heading: 'MLOps: Bridging Development and Operations',
            description: 'MLOps (Machine Learning Operations) is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently. It is the intersection of machine learning, data engineering, and DevOps.',
            features: {
                title: 'Core MLOps Practices:',
                list: [
                    'CI/CD Automation: Continuous Integration and Continuous Deployment for ML pipelines.',
                    'Model Versioning: Tracking changes to models, data, and code.',
                    'Monitoring: Observing model performance and drift in production.',
                    'Reproducibility: Ensuring that experiments and model training processes are fully reproducible.',
                    'Scalability: Building systems that can handle growing data and user loads.'
                ]
            },
            conclusion: 'MLOps streamlines the ML lifecycle, enabling businesses to operationalize AI and derive value from their models faster.'
        }
    }
];

export default function HomePage() {
  const router = useRouter();
  const [activePanel, setActivePanel] = useState(2);
  const [activeFoundationTab, setActiveFoundationTab] = useState('Programming Fundamentals');
  const [activeAdvancedTab, setActiveAdvancedTab] = useState('Machine Learning');

  const panels = [
    {
        id: 0,
        title: "Career Roadmaps",
        subtitle: "Your career journey starts here",
        image: placeholderImages.homeHero1.src,
        href: "/career-tips-and-roadmaps",
    },
    {
        id: 1,
        title: "TRENDING BLOGS",
        subtitle: "Stay updated with the latest trends",
        image: placeholderImages.homeHero2.src,
        href: "/blogs",
    },
    {
        id: 2,
        title: "Tutorials",
        subtitle: "Explore our Tech Guide",
        image: placeholderImages.homeHero3.src,
        href: "/tech-guide",
    },
    {
        id: 3,
        title: "PROJECTS",
        subtitle: "Build your portfolio",
        image: placeholderImages.homeHero4.src,
        href: "/codelab",
    },
     {
        id: 4,
        title: "TOP TRENDING COURSES",
        subtitle: "Master in-demand skills",
        image: placeholderImages.homeHero5.src,
        href: "/courses-live",
    },
  ];
  
  const activeFoundationTabData = foundationsTabs.find(tab => tab.id === activeFoundationTab)?.content;
  const activeAdvancedTabData = advancedTabs.find(tab => tab.id === activeAdvancedTab)?.content;

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

        {/* Section 2.1: Foundational Concepts */}
        <section className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold font-space-grotesk tracking-[0.2em] text-gray-800 uppercase">
            Foundational Concepts
          </h2>
          <div className="w-24 h-px bg-accent mx-auto mt-4 mb-12"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="col-span-1 space-y-4">
                  {foundationsTabs.map(tab => (
                      <button
                          key={tab.id}
                          onClick={() => setActiveFoundationTab(tab.id)}
                          className={cn(
                              "w-full p-6 rounded-lg text-white font-bold text-lg text-left transition-colors",
                              activeFoundationTab === tab.id ? 'bg-accent text-accent-foreground' : 'bg-black hover:bg-gray-800'
                          )}
                      >
                          {tab.title}
                      </button>
                  ))}
              </div>
              <div className="col-span-2 rounded-lg border bg-card p-8 text-card-foreground text-left">
                  {activeFoundationTabData && (
                      <>
                          <h3 className="text-2xl font-bold mb-4 font-space-grotesk">{activeFoundationTabData.heading}</h3>
                          <p className="mb-6 text-muted-foreground">{activeFoundationTabData.description}</p>
                          <h4 className="text-xl font-bold mb-2 font-space-grotesk">{activeFoundationTabData.features.title}</h4>
                          <ul className="list-disc list-inside space-y-2 mb-6">
                              {activeFoundationTabData.features.list.map((item, index) => (
                                  <li key={index}>{item}</li>
                              ))}
                          </ul>
                          <p className="text-muted-foreground">{activeFoundationTabData.conclusion}</p>
                      </>
                  )}
              </div>
          </div>
        </section>

        {/* Section 2.2: Advanced & AI Topics */}
        <section className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold font-space-grotesk tracking-[0.2em] text-gray-800 uppercase">
            Advanced & AI Topics
          </h2>
          <div className="w-24 h-px bg-accent mx-auto mt-4 mb-12"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="col-span-1 space-y-4">
                  {advancedTabs.map(tab => (
                      <button
                          key={tab.id}
                          onClick={() => setActiveAdvancedTab(tab.id)}
                          className={cn(
                              "w-full p-6 rounded-lg text-white font-bold text-lg text-left transition-colors",
                              activeAdvancedTab === tab.id ? 'bg-accent text-accent-foreground' : 'bg-black hover:bg-gray-800'
                          )}
                      >
                          {tab.title}
                      </button>
                  ))}
              </div>
              <div className="col-span-2 rounded-lg border bg-card p-8 text-card-foreground text-left">
                  {activeAdvancedTabData && (
                      <>
                          <h3 className="text-2xl font-bold mb-4 font-space-grotesk">{activeAdvancedTabData.heading}</h3>
                          <p className="mb-6 text-muted-foreground">{activeAdvancedTabData.description}</p>
                          <h4 className="text-xl font-bold mb-2 font-space-grotesk">{activeAdvancedTabData.features.title}</h4>
                          <ul className="list-disc list-inside space-y-2 mb-6">
                              {activeAdvancedTabData.features.list.map((item, index) => (
                                  <li key={index}>{item}</li>
                              ))}
                          </ul>
                          <p className="text-muted-foreground">{activeAdvancedTabData.conclusion}</p>
                      </>
                  )}
              </div>
          </div>
        </section>

        {/* Hero Image Accordion */}
        <section className="w-full bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-2 h-80 md:h-96 rounded-lg overflow-hidden">
                {panels.map((panel) => {
                    const isActive = activePanel === panel.id;
                    const activeWidth = 40; // Decreased width for active panel
                    const inactiveWidth = (100 - activeWidth) / (panels.length - 1);
                    const width = isActive ? activeWidth : inactiveWidth;

                    return (
                    <div
                        key={panel.id}
                        className={'relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out rounded-lg'}
                        style={{
                            width: `${width}%`,
                            flexShrink: 0,
                        }}
                        onClick={() => {
                            if (panel.href) {
                                router.push(panel.href);
                            } else {
                                setActivePanel(panel.id);
                            }
                        }}
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

        {/* Hero Content */}
        <section className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-4xl font-bold font-space-grotesk">Unleash Your Potential in AI, Tech & Innovation!</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Gain hands-on experience through exciting hackathons and real-world internships in AI, Machine Learning, and cutting-edge tech. Build your portfolio, collaborate with industry experts, and stand out in your career journey.
          </p>
          <ul className="mt-6 flex justify-center gap-8 text-lg">
            <li className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent" /> Work on real projects</li>
            <li className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent" /> Enhance your problem-solving skills</li>
            <li className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent" /> Earn certificates & grow your network</li>
          </ul>
        </section>

        {/* Section 8: "What We Offer" Grid */}
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
        
        <TrendingBlogs />

        {/* Section 4: Gateway to Mastering CS & AI */}
        <LimitlessLearning />

        {/* Section 5: Limitless Learning */}
        <section className="bg-black text-white py-20">
            <div className="container mx-auto max-w-7xl px-4 text-center">
                <h2 className="font-space-grotesk text-4xl font-bold leading-tight mb-4">Unlock Your Potential: Learn, Create, and Innovate with Our Comprehensive Courses!</h2>
                <button className="bg-accent text-accent-foreground font-bold py-3 px-8 rounded-full transition-colors">Tranding Courses Live!</button>
            </div>
        </section>

        {/* Section 6: Industry Solutions */}
        <IndustrySolutions />

        {/* The SCS Ecosystem Section */}
        <SCSLearningPaths />

        {/* Section 7: Step-by-Step Career Timeline */}
        <CareerTimeline />

        {/* Section: Career Roadmap CTA */}
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

        {/* Section 9: FAQ Section */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold font-space-grotesk">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our platform is designed for learners of all levels, from absolute beginners looking to start their journey in tech, to experienced professionals aiming to upskill. We provide a comprehensive range of resources to support your learning goals.
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

        {/* Section 9.5: FAQ CTA */}
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

        {/* Section 10: Final Enrollment CTA */}
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

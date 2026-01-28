
'use client';

import React from 'react';
import { BrainCircuit, Feather, PenTool, Lightbulb, Code, Briefcase, TerminalSquare, FolderKanban, PencilRuler, BarChart, Server, User, Rocket, Cloud, GitBranch } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const techGuideTabs = [
    {
        id: 'AI & Content Creation',
        title: "AI & Content Creation",
        icon: <BrainCircuit className="h-8 w-8" />,
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
        icon: <Code className="h-8 w-8" />,
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
        icon: <Feather className="h-8 w-8" />,
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
        icon: <PenTool className="h-8 w-8" />,
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
        icon: <Lightbulb className="h-8 w-8" />,
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
        icon: <Briefcase className="h-8 w-8" />,
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

const foundationsTabs = [
    {
        id: 'Programming Fundamentals',
        title: 'Programming Fundamentals',
        icon: <TerminalSquare className="h-8 w-8" />,
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
        icon: <FolderKanban className="h-8 w-8" />,
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
        icon: <PencilRuler className="h-8 w-8" />,
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
        icon: <Code className="h-8 w-8" />,
        content: {
            heading: 'Python: The Heart of Modern AI and LLM Development',
            description: 'Python is a powerful, easy-to-learn programming language that supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It is widely used for web development, automation, machine learning, data analysis, and artificial intelligence. Python’s extensive standard library and vibrant community contribute to its popularity in various industries.',
            features: {
                title: 'Key Features of Python Development:',
                list: [
                    'Readability: Python’s simple syntax makes it easy to read and write, reducing the complexity of software development.',
                    'Extensive Libraries: Python offers a vast collection of libraries and frameworks, such as Django, Flask, NumPy, and pandas, that speed up development.',
                    'Cross-Platform Compatibility: Python runs on various platforms, including Windows, Linux, and macOS, making it a versatile choice for developers.',
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
        icon: <BarChart className="h-8 w-8" />,
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
        icon: <Server className="h-8 w-8" />,
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
        icon: <BrainCircuit className="h-8 w-8" />,
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
        icon: <User className="h-8 w-8" />,
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
        icon: <Lightbulb className="h-8 w-8" />,
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
        icon: <Rocket className="h-8 w-8" />,
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
        icon: <Cloud className="h-8 w-8" />,
        content: {
            heading: 'Cloud Engineering: Building the Future on the Cloud',
            description: 'Cloud Engineering involves designing, building, and managing applications and infrastructure on cloud platforms like AWS, Google Cloud, and Azure. It enables scalability, flexibility, and cost-efficiency for modern tech solutions, including AI.',
            features: {
                title: 'Key Cloud Concepts:',
                list: [
                    'Infrastructure as Code (IaC): Managing infrastructure through code using tools like Terraform or CloudFormation.',
                    'Serverless Computing: Running code without provisioning or managing servers (e.g., AWS Lambda, Google Cloud Functions).',
                    'Containerization: Packaging applications with all their dependencies using Docker and orchestrating them with Kubernetes.',
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
        icon: <GitBranch className="h-8 w-8" />,
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

export default function TechGuidePage() {
    const [activeTab, setActiveTab] = useState('AI & Content Creation');
    const activeTabData = techGuideTabs.find(tab => tab.id === activeTab)?.content;

    const [activeFoundationTab, setActiveFoundationTab] = useState('Programming Fundamentals');
    const activeFoundationTabData = foundationsTabs.find(tab => tab.id === activeFoundationTab)?.content;
    
    const [activeAdvancedTab, setActiveAdvancedTab] = useState('Machine Learning');
    const activeAdvancedTabData = advancedTabs.find(tab => tab.id === activeAdvancedTab)?.content;

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

                 {/* Practical Skills Guide Section */}
                <section className="container mx-auto max-w-7xl px-4 py-16">
                    <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">Practical Tech Skills</h2>
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

                {/* Foundational Concepts Section */}
                <section className="container mx-auto max-w-7xl px-4 py-16">
                    <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">Foundational Concepts</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="col-span-1 space-y-4">
                            {foundationsTabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveFoundationTab(tab.id)}
                                    className={cn(
                                        "w-full p-6 rounded-lg font-bold text-lg text-left transition-colors flex items-center gap-4",
                                        activeFoundationTab === tab.id 
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
                            {activeFoundationTabData && (
                                <>
                                    <h3 className="text-2xl font-bold mb-4 font-space-grotesk">{activeFoundationTabData.heading}</h3>
                                    <p className="mb-6 text-muted-foreground">{activeFoundationTabData.description}</p>
                                    <h4 className="text-xl font-bold mb-2 font-space-grotesk">{activeFoundationTabData.features.title}</h4>
                                    <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                                        {activeFoundationTabData.features.list.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="text-muted-foreground italic">{activeFoundationTabData.conclusion}</p>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                {/* Advanced & AI Topics Section */}
                <section className="container mx-auto max-w-7xl px-4 py-16">
                    <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">Advanced &amp; AI Topics</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="col-span-1 space-y-4">
                            {advancedTabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveAdvancedTab(tab.id)}
                                    className={cn(
                                        "w-full p-6 rounded-lg font-bold text-lg text-left transition-colors flex items-center gap-4",
                                        activeAdvancedTab === tab.id 
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
                            {activeAdvancedTabData && (
                                <>
                                    <h3 className="text-2xl font-bold mb-4 font-space-grotesk">{activeAdvancedTabData.heading}</h3>
                                    <p className="mb-6 text-muted-foreground">{activeAdvancedTabData.description}</p>
                                    <h4 className="text-xl font-bold mb-2 font-space-grotesk">{activeAdvancedTabData.features.title}</h4>
                                    <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                                        {activeAdvancedTabData.features.list.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p className="text-muted-foreground italic">{activeAdvancedTabData.conclusion}</p>
                                </>
                            )}
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

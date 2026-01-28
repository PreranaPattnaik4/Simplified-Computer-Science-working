
import { BrainCircuit, Feather, PenTool, Lightbulb, Code, Briefcase } from 'lucide-react';
import Link from 'next/link';

const guideSections = [
    {
        title: "AI & Content Creation",
        icon: <BrainCircuit className="h-8 w-8 text-accent" />,
        description: "Master the art of creating compelling content with the help of AI. Learn prompt engineering, leverage AI for writing, and discover tools to streamline your workflow.",
        links: [
            { href: "#", title: "Introduction to Prompt Engineering" },
            { href: "#", title: "Using AI for Blog Writing" },
            { href: "#", title: "Top AI Content Creation Tools" },
        ]
    },
    {
        title: "Web Development",
        icon: <Code className="h-8 w-8 text-accent" />,
        description: "Build a solid foundation in web development. Understand the core technologies and frameworks needed to build modern websites and applications.",
        links: [
            { href: "/courses-live/full-stack-web-development-with-nextjs-and-react", title: "Full-Stack with Next.js" },
            { href: "/blog/mastering-python-in-2025", title: "Python for Web Backends" },
            { href: "#", title: "HTML, CSS, & JavaScript Basics" },
        ]
    },
    {
        title: "Prompt Engineering",
        icon: <Feather className="h-8 w-8 text-accent" />,
        description: "Learn how to craft effective prompts to get the most out of large language models (LLMs). This skill is essential for anyone working with generative AI.",
        links: [
            { href: "#", title: "Advanced Prompting Techniques" },
            { href: "#", title: "Few-Shot Prompting Explained" },
            { href: "#", title: "Building AI-powered applications" },
        ]
    },
    {
        title: "Writing & Content Creation",
        icon: <PenTool className="h-8 w-8 text-accent" />,
        description: "Enhance your writing skills and learn how to create engaging content that resonates with your audience. From technical blogging to marketing copy.",
        links: [
            { href: "/blog/is-ai-writing-stealing-your-job", title: "AI in Blogging" },
            { href: "#", title: "SEO Best Practices for Writers" },
            { href: "#", title: "Creating a Content Calendar" },
        ]
    },
    {
        title: "AI Tools",
        icon: <Lightbulb className="h-8 w-8 text-accent" />,
        description: "Discover a curated list of AI tools that can boost your productivity for various purposes, from coding assistants to design generators.",
        links: [
            { href: "#", title: "AI Code Assistants (e.g., Copilot)" },
            { href: "#", title: "AI Image Generation (e.g., Midjourney)" },
            { href: "#", title: "AI for Presentations and Reports" },
        ]
    },
    {
        title: "Professional Skills",
        icon: <Briefcase className="h-8 w-8 text-accent" />,
        description: "Develop the soft skills and professional acumen needed to succeed in the tech industry. Learn about communication, teamwork, and career growth.",
        links: [
            { href: "/blog/career-tips-for-tech-professionals", title: "Career Tips" },
            { href: "/blog/from-resume-to-offer", title: "Interview Preparation" },
            { href: "#", title: "Effective Technical Communication" },
        ]
    },
];

export default function TechGuidePage() {
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

                {/* Guide Sections */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {guideSections.map((section, index) => (
                                <div key={index} className="flex flex-col p-8 border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-card">
                                    <div className="mb-4 flex items-center gap-4">
                                        {section.icon}
                                        <h3 className="text-2xl font-semibold font-space-grotesk">{section.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground mb-6 flex-grow">{section.description}</p>
                                    <div className="space-y-2">
                                        {section.links.map((link, linkIndex) => (
                                            <Link key={linkIndex} href={link.href}>
                                                <div className="text-accent font-semibold hover:underline">{link.title}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

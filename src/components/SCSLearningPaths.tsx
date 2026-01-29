
import { BrainCircuit, Milestone, TerminalSquare, Bot } from 'lucide-react';
import Link from 'next/link';

const paths = [
    {
        title: 'The Foundation Path',
        description: 'Logic & CS Basics',
        icon: <Milestone className="w-6 h-6" />,
        href: '/learning-paths',
    },
    {
        title: 'The AI Roadmap',
        description: 'Machine Learning Fundamentals',
        icon: <BrainCircuit className="w-6 h-6" />,
        href: '/learning-paths',
    },
    {
        title: 'SCS DevStudio',
        description: 'Execute code in real-time. Supports HTML/CSS, Python, C, SQL, and Modern JS Frameworks.',
        icon: <TerminalSquare className="w-6 h-6" />,
        href: '/codelab',
    },
    {
        title: 'AI Assistant',
        description: 'Your personal guide to SCS. Ask me anything about our courses, content, or career paths.',
        icon: <Bot className="w-6 h-6" />,
        href: '#',
    },
];

export default function SCSLearningPaths() {
    return (
        <section className="bg-white text-foreground py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div className="max-w-lg">
                    <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk leading-tight">
                        The SCS Ecosystem.
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Stop chasing random tutorials. Follow our curated, visual-first journeys designed to build technical intuition from the ground up and apply your skills in a live sandbox.
                    </p>
                    <Link href="/learning-paths">
                        <button 
                            className="mt-8 rounded-full bg-accent text-accent-foreground px-8 py-3 text-lg font-bold transition-colors hover:bg-accent/90"
                        >
                            Start Learning
                        </button>
                    </Link>
                </div>
                
                {/* Right Side */}
                <div className="space-y-4">
                    {paths.map((path, index) => (
                        <Link href={path.href} key={index} className="block">
                            <div className="flex items-center gap-4 border border-border bg-card hover:border-accent p-4 rounded-xl transition-colors">
                                <div className="text-accent">
                                    {path.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-accent">
                                        {path.title}
                                    </h3>
                                    <p className="text-muted-foreground">{path.description}</p>
                                    {path.title === 'SCS DevStudio' && (
                                        <div className="text-accent font-bold mt-2">Open Sandbox</div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

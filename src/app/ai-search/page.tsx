'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Search, Sparkles, Check, Wand2, ArrowRight, BrainCircuit, Code, Palette, User, Server, BookOpen, Layers, BarChart, Target, FileText, Bot, ListChecks, Shield, Briefcase, Lightbulb, FolderKanban } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generateSearchResults, AiSearchInput, AiSearchOutput } from '@/ai/flows/ai-search';
import { marked } from 'marked';

const topics = [
    { id: 'AI Product Management', label: 'AI Product Management', icon: FolderKanban },
    { id: 'Agentic AI Systems', label: 'Agentic AI Systems', icon: Bot },
    { id: 'GenAI Product Design', label: 'GenAI Product Design', icon: Palette },
    { id: 'UX for AI Products', label: 'UX for AI Products', icon: User },
    { id: 'AI Architecture', label: 'AI Architecture', icon: Server },
    { id: 'AI Evaluation & Metrics', label: 'AI Evaluation & Metrics', icon: BarChart },
    { id: 'Responsible AI', label: 'Responsible AI', icon: Shield },
    { id: 'Case Studies', label: 'Case Studies', icon: BookOpen },
    { id: 'Career & Interview Prep', label: 'Career & Interview Prep', icon: Briefcase },
];

const contentTypes = [
    { id: 'Concept Explanation', label: 'Concept Explanation', icon: Lightbulb },
    { id: 'Frameworks & Models', label: 'Frameworks & Models', icon: Layers },
    { id: 'Mental Models', label: 'Mental Models', icon: BrainCircuit },
    { id: 'Step-by-Step Breakdown', label: 'Step-by-Step Breakdown', icon: ListChecks },
    { id: 'PM Decision Analysis', label: 'PM Decision Analysis', icon: Target },
    { id: 'Technical + Product Hybrid View', label: 'Technical + Product Hybrid View', icon: Code },
    { id: 'Interview-Ready Notes', label: 'Interview-Ready Notes', icon: FileText },
];

const Chip = ({ label, icon, isSelected, onClick }: { label: string, icon: React.ElementType, isSelected: boolean, onClick: () => void }) => {
    const Icon = icon;
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                isSelected 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-background hover:bg-gray-100 border-gray-300'
            )}
        >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
        </button>
    );
};

export default function AISearchPage() {
    const [query, setQuery] = useState('');
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>([]);
    const [depth, setDepth] = useState<AiSearchInput['depth']>('Intermediate');
    const [role, setRole] = useState<AiSearchInput['role']>('Product Manager');
    
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<AiSearchOutput>([]);
    
    const toggleSelection = (id: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
        setList(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    };

    const handleSearch = async () => {
        if (!query) return;
        setIsLoading(true);
        setResults([]);
        try {
            const response = await generateSearchResults({
                query,
                topics: selectedTopics,
                contentTypes: selectedContentTypes,
                depth,
                role
            });
            setResults(response);
        } catch (error) {
            console.error("AI Search failed:", error);
            // In a real app, show an error toast
        } finally {
            setIsLoading(false);
        }
    };
    
    const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
        <div>
            <h3 className="text-lg font-semibold mb-3 font-space-grotesk">{title}</h3>
            <div className="flex flex-wrap gap-2">{children}</div>
        </div>
    );
    
    const ResultCard = ({ card }: { card: AiSearchOutput[0] }) => (
        <Card className="bg-white shadow-lg break-inside-avoid mb-6">
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-space-grotesk">{card.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                    {card.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-full font-medium">{tag}</span>
                    ))}
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <ResultSection title="Executive Summary">
                        <p className="text-muted-foreground">{card.executiveSummary}</p>
                    </ResultSection>
                    <ResultSection title="Problem Context" content={card.problemContext} />
                    <ResultSection title="Core Concepts / Frameworks" content={card.coreConcepts} />
                    <ResultSection title="Practical Application" content={card.practicalApplication} />
                    <ResultSection title="Real-World Example" content={card.realWorldExample} />
                    <ResultSection title="Risks, Constraints & Trade-offs" content={card.risksAndTradeoffs} />
                    <ResultSection title="Key Takeaways for AI Product Leaders" content={card.keyTakeaways} />
                    <ResultSection title="Exploration Paths">
                         <div className="flex flex-wrap gap-2">
                            {card.explorationPaths.map((path, index) => (
                                <span key={index} className="flex items-center gap-2 text-sm text-accent font-semibold">
                                    <ArrowRight className="w-4 h-4"/>{path}
                                </span>
                            ))}
                        </div>
                    </ResultSection>
                </div>
            </CardContent>
        </Card>
    );

    const ResultSection = ({ title, content, children }: { title: string, content?: string, children?: React.ReactNode }) => (
        <div>
            <h4 className="font-bold text-lg font-space-grotesk text-gray-800 border-b pb-2 mb-3">{title}</h4>
            {content && <div className="prose prose-sm max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: marked(content) }} />}
            {children}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto max-w-7xl px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <Wand2 className="h-10 w-10 mx-auto text-primary mb-2" />
                        <h1 className="text-4xl font-bold font-space-grotesk">AI Search & Discovery</h1>
                        <p className="text-muted-foreground mt-2">An intelligent engine for professional AI product knowledge.</p>
                    </div>

                    {/* Search Form */}
                    <Card className="p-6 mb-8 shadow-md">
                        <div className="space-y-6">
                            <div className="relative">
                                <Input 
                                    placeholder="Search for topics like 'RAG evaluation' or 'Agentic design patterns'..." 
                                    className="h-12 pl-12 text-base"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-6 w-6" />
                            </div>

                            <Section title="Filter by Topic">
                                {topics.map(topic => (
                                    <Chip key={topic.id} label={topic.label} icon={topic.icon} isSelected={selectedTopics.includes(topic.id)} onClick={() => toggleSelection(topic.id, selectedTopics, setSelectedTopics)} />
                                ))}
                            </Section>

                            <Section title="Filter by Content Type">
                                {contentTypes.map(type => (
                                    <Chip key={type.id} label={type.label} icon={type.icon} isSelected={selectedContentTypes.includes(type.id)} onClick={() => toggleSelection(type.id, selectedContentTypes, setSelectedContentTypes)} />
                                ))}
                            </Section>
                            
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div>
                                    <h3 className="text-sm font-medium mb-2">Depth</h3>
                                    <select value={depth} onChange={e => setDepth(e.target.value as any)} className="w-full border-gray-300 rounded-md shadow-sm h-10 px-3">
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Expert</option>
                                    </select>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium mb-2">Role Perspective</h3>
                                    <select value={role} onChange={e => setRole(e.target.value as any)} className="w-full border-gray-300 rounded-md shadow-sm h-10 px-3">
                                        <option>Product Manager</option>
                                        <option>Designer</option>
                                        <option>Engineer</option>
                                        <option>Founder</option>
                                    </select>
                                </div>
                                <div className="sm:mt-auto">
                                    <Button onClick={handleSearch} disabled={isLoading || !query} className="w-full h-10">
                                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                                        Generate Results
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Results */}
                    <div className="space-y-8">
                        {isLoading && (
                            <div className="text-center py-10">
                                <Loader2 className="h-8 w-8 mx-auto animate-spin text-primary mb-2" />
                                <p className="text-muted-foreground">Generating professional analysis...</p>
                            </div>
                        )}
                        {results.length > 0 && (
                            <div className="column-count-1 md:column-count-2 md:column-gap-6">
                                {results.map((card, index) => (
                                    <ResultCard key={index} card={card} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

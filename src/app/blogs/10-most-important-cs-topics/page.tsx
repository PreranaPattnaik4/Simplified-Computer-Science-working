
import { User, Calendar, Folder, Hash, Brain, Database, Code, Shield, Cpu, GitBranch, Share2, BookOpen } from 'lucide-react';

const BlogHeader = ({ title, description }: { title: string, description: string }) => (
    <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        <div className="w-full md:w-2/3">
          <div className="h-1 w-16 bg-accent mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </section>
);

const TopicSection = ({ number, title, description, examples, icon }: { number: number, title: string, description: string, examples: string, icon: React.ReactNode }) => (
    <div className="mb-10">
        <div className="flex items-center gap-4 mb-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                {icon}
            </div>
            <h2 className="text-3xl font-bold font-space-grotesk text-gray-900">{number}. {title}</h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-3">{description}</p>
        <p className="text-md text-muted-foreground"><strong className="text-gray-700">Examples:</strong> {examples}</p>
    </div>
);

export default function ImportantCSTopicsPage() {
  const pageDescription = "A breakdown of the 10 most crucial topics that form the backbone of modern computer science and software engineering.";
  const topics = [
      {
          icon: <Hash size={24} />,
          title: "Algorithms",
          description: "Step-by-step problem-solving methods that form the foundation of coding, interviews, and system efficiency.",
          examples: "Sorting, searching, pathfinding"
      },
      {
          icon: <Database size={24} />,
          title: "Data Structures",
          description: "How data is stored and organized, directly affecting performance and scalability.",
          examples: "Arrays, linked lists, stacks, queues, trees, graphs"
      },
      {
          icon: <Cpu size={24} />,
          title: "Operating Systems",
          description: "The software that talks to hardware, managing multitasking and memory.",
          examples: "Processes, threads, scheduling, memory management"
      },
      {
          icon: <Share2 size={24} />,
          title: "Computer Networks",
          description: "How computers communicate with each other; the backbone of the internet and cloud.",
          examples: "TCP/IP, HTTP/HTTPS, DNS, routing"
      },
      {
          icon: <Database size={24} />,
          title: "Databases & DBMS",
          description: "How applications store and retrieve data, used in almost every real-world system.",
          examples: "SQL, NoSQL, indexing, transactions"
      },
      {
          icon: <Code size={24} />,
          title: "Programming Languages & Paradigms",
          description: "How code is written and structured. Understanding paradigms improves thinking.",
          examples: "OOP, functional, procedural, scripting"
      },
      {
          icon: <GitBranch size={24} />,
          title: "Software Engineering",
          description: "How real software is designed, built, and maintained, focusing on scalability, teamwork, and quality.",
          examples: "SDLC, design patterns, testing, version control"
      },
      {
          icon: <Cpu size={24} />,
          title: "Computer Architecture",
          description: "How a computer works internally, helping to understand performance and low-level behavior.",
          examples: "CPU, memory, instruction sets, cache"
      },
      {
          icon: <Shield size={24} />,
          title: "Cybersecurity",
          description: "The practice of protecting systems and data, critical in today’s digital world.",
          examples: "Encryption, authentication, network security"
      },
      {
          icon: <Brain size={24} />,
          title: "Artificial Intelligence & Machine Learning",
          description: "The science of teaching machines to learn and reason, driving modern tech innovation.",
          examples: "Supervised learning, neural networks, natural language processing"
      }
  ];
  
  return (
    <div className="bg-white">
      <BlogHeader 
          title="The 10 Most Important Topics in Computer Science"
          description={pageDescription}
      />
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex justify-start items-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <User size={16} /> Prerana
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Calendar size={16} /> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Folder size={16} /> Computer Science, Fundamentals
            </div>
        </div>
        
        <div className="prose lg:prose-xl max-w-none mx-auto text-muted-foreground">
            <p className="lead text-xl mb-8">
                Computer Science is a vast and ever-evolving field. Whether you're a student, a self-taught programmer, or a seasoned professional, understanding the core pillars is essential for building a strong and successful career. Here are the 10 most important topics you need to know.
            </p>
        </div>

        <div className="mt-12 space-y-12">
            {topics.map((topic, index) => (
                <TopicSection key={index} number={index + 1} {...topic} />
            ))}
        </div>
        
      </main>
    </div>
  );
}

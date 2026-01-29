
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

const TopicSection = ({ number, title, description, examples, icon, details }: { number: number, title: string, description: string, examples: string, icon: React.ReactNode, details: React.ReactNode }) => (
    <div className="mb-10 border-b pb-10">
        <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                {icon}
            </div>
            <div>
                <h2 className="text-3xl font-bold font-space-grotesk text-gray-900">{number}. {title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mt-1">{description}</p>
            </div>
        </div>
        <div className="prose prose-lg max-w-none text-muted-foreground ml-20">
            {details}
            <p className="text-md mt-4"><strong className="text-gray-700">Examples:</strong> {examples}</p>
        </div>
    </div>
);

export default function ImportantCSTopicsPage() {
  const pageDescription = "A breakdown of the 10 most crucial topics that form the backbone of modern computer science and software engineering.";
  const topics = [
      {
          icon: <Hash size={32} />,
          title: "Algorithms",
          description: "Step-by-step problem-solving methods that form the foundation of coding, interviews, and system efficiency.",
          examples: "Sorting, searching, pathfinding",
          details: (
              <>
                  <h4>Why They Matter?</h4>
                  <p>Algorithms are the core of computer science. They determine how efficiently a program runs. A small change in an algorithm can be the difference between a program that runs in a fraction of a second and one that takes years!</p>
                  <h4>Measuring Efficiency: Big O Notation</h4>
                  <p>We use Big O Notation to describe an algorithm's performance. It characterizes how the runtime or space requirements grow as the input size grows (e.g., O(n), O(log n)).</p>
              </>
          )
      },
      {
          icon: <Database size={32} />,
          title: "Data Structures",
          description: "How data is stored and organized, directly affecting performance and scalability.",
          examples: "Arrays, linked lists, stacks, queues, trees, graphs",
          details: (
              <>
                  <h4>Why They Matter?</h4>
                  <p>The choice of data structure directly impacts an algorithm's performance. Efficient data organization is key to handling large amounts of information in applications like databases or search engines.</p>
              </>
          )
      },
      {
          icon: <Cpu size={32} />,
          title: "Operating Systems",
          description: "The software that talks to hardware, managing multitasking and memory.",
          examples: "Processes, threads, scheduling, memory management",
          details: (
              <>
                  <h4>Core Responsibilities</h4>
                  <p>An OS manages process scheduling (deciding which program runs when), memory allocation, and interaction with devices. Understanding this helps you write programs that work well with the underlying system.</p>
              </>
          )
      },
      {
          icon: <Share2 size={32} />,
          title: "Computer Networks",
          description: "How computers communicate with each other; the backbone of the internet and cloud.",
          examples: "TCP/IP, HTTP/HTTPS, DNS, routing",
          details: (
                <>
                    <h4>The Internet & The TCP/IP Model</h4>
                    <p>The internet's communication is standardized by the TCP/IP protocol suite, which includes layers for application (HTTP), transport (TCP), and networking (IP). This model governs how data is sent and received across the globe.</p>
                </>
          )
      },
      {
          icon: <Database size={32} />,
          title: "Databases & DBMS",
          description: "How applications store and retrieve data, used in almost every real-world system.",
          examples: "SQL, NoSQL, indexing, transactions",
          details: (
              <>
                <h4>SQL vs. NoSQL</h4>
                <p>Relational databases (SQL) organize data in tables, enforcing a strict structure. Non-relational (NoSQL) databases are more flexible and are often used for large-scale, unstructured data.</p>
              </>
          )
      },
      {
          icon: <Code size={32} />,
          title: "Programming Languages & Paradigms",
          description: "How code is written and structured. Understanding paradigms improves thinking.",
          examples: "OOP, functional, procedural, scripting",
          details: (
              <>
                <h4>Common Paradigms</h4>
                <p>Object-Oriented Programming (OOP) uses objects to model real-world things. Functional Programming treats computation as the evaluation of mathematical functions. Understanding different paradigms makes you a more versatile programmer.</p>
              </>
          )
      },
      {
          icon: <GitBranch size={32} />,
          title: "Software Engineering",
          description: "How real software is designed, built, and maintained, focusing on scalability, teamwork, and quality.",
          examples: "SDLC, design patterns, testing, version control (Git)",
          details: (
              <>
                <h4>Software Development Life Cycle (SDLC)</h4>
                <p>The SDLC is a process for planning, creating, testing, and deploying high-quality software. Methodologies like Agile help teams build software iteratively and adapt to change.</p>
              </>
          )
      },
      {
          icon: <Cpu size={32} />,
          title: "Computer Architecture",
          description: "How a computer works internally, helping to understand performance and low-level behavior.",
          examples: "CPU, memory (RAM), instruction sets, cache",
          details: (
              <>
                <h4>Core Components</h4>
                <p>Architecture defines the relationship between the CPU (the brain), RAM (short-term memory), and storage. Understanding this helps you write code that is optimized for the hardware it runs on.</p>
              </>
          )
      },
      {
          icon: <Shield size={32} />,
          title: "Cybersecurity",
          description: "The practice of protecting systems and data, critical in today’s digital world.",
          examples: "Encryption, authentication, network security, firewalls",
          details: (
              <>
                <h4>The CIA Triad</h4>
                <p>A core security model focusing on Confidentiality (privacy), Integrity (trustworthiness of data), and Availability (access when needed). These principles guide security policies for protecting digital assets.</p>
              </>
          )
      },
      {
          icon: <Brain size={32} />,
          title: "Artificial Intelligence & Machine Learning",
          description: "The science of teaching machines to learn and reason, driving modern tech innovation.",
          examples: "Supervised learning, neural networks, natural language processing",
          details: (
              <>
                <h4>Machine Learning Paradigms</h4>
                <p>Supervised learning uses labeled data to make predictions, while unsupervised learning finds patterns in unlabeled data. Deep Learning, a subset using neural networks, powers many modern AI applications like image recognition.</p>
              </>
          )
      }
  ];
  
  return (
    <div className="bg-white">
      <BlogHeader 
          title="The 10 Most Important Topics in Computer Science"
          description={pageDescription}
      />
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex justify-start items-center gap-4 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <User size={16} /> Prerana
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Calendar size={16} /> August 13, 2024
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Folder size={16} /> Software Development
            </div>
        </div>
        
        <div className="prose lg:prose-xl max-w-none mx-auto text-muted-foreground mb-16">
            <p className="lead text-xl">
                Computer Science is a vast and ever-evolving field. Whether you're a student, a self-taught programmer, or a seasoned professional, understanding the core pillars is essential for building a strong and successful career. Here are the 10 most important topics you need to know.
            </p>
        </div>

        <div className="space-y-12">
            {topics.map((topic, index) => (
                <TopicSection key={index} number={index + 1} {...topic} />
            ))}
        </div>
        
      </main>
    </div>
  );
}

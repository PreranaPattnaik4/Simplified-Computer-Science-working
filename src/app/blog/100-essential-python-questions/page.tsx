
import { User, Calendar, Folder } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const QnaSection = ({ title, questions }: { title: string, questions: {q: string, a: React.ReactNode}[] }) => (
    <div className="mb-12">
        <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6">{title}</h2>
        <Accordion type="single" collapsible className="w-full">
            {questions.map((item, itemIndex) => (
                <AccordionItem key={itemIndex} value={`item-${itemIndex}`}>
                    <AccordionTrigger className="text-lg font-semibold font-space-grotesk text-left">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground prose lg:prose-lg max-w-none">
                        {item.a}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
        <code>{children}</code>
    </pre>
);

const pythonBasics = [
    { q: "What is Python, and why should I learn it?", a: <p>Python is a high-level, general-purpose programming language known for its simplicity and readability. It is widely used in data science, AI, automation, and web development.</p> },
    { q: "How do I install Python on my computer?", a: <p>Download and install Python from python.org. Use the Python installer and ensure you check the box to add Python to your system PATH.</p> },
    { q: "How do I run a Python script?", a: <p>You can run a Python script in the command line using <code>python filename.py</code> or in an IDE like PyCharm, VS Code, or Jupyter Notebook.</p> },
    { q: "What are variables in Python?", a: <div><p>Variables store data. Example:</p><CodeBlock>{`name = "Alice"\nage = 25\nprint(name, age)`}</CodeBlock></div> },
    { q: "What are Python data types?", a: <div><p>Python has several built-in data types, including:</p><ul className="list-disc pl-6"><li><code>int</code> (integer)</li><li><code>float</code> (decimal numbers)</li><li><code>str</code> (string)</li><li><code>list</code> (ordered, mutable sequence)</li><li><code>tuple</code> (ordered, immutable sequence)</li><li><code>dict</code> (key-value pairs)</li><li><code>bool</code> (True or False)</li></ul></div> },
    { q: "What are conditional statements in Python?", a: <div><p>Conditional statements control program flow. Example:</p><CodeBlock>{`age = 18\nif age >= 18:\n    print("You are an adult.")\nelse:\n    print("You are a minor.")`}</CodeBlock></div> },
    { q: "How does a loop work in Python?", a: <div><p>Loops repeat a block of code. Example of a for loop:</p><CodeBlock>{`for i in range(5):\n    print(i)`}</CodeBlock></div> },
    { q: "What is the difference between a list and a tuple?", a: <div><p>Lists are mutable (can be changed), while tuples are immutable (cannot be changed).</p><CodeBlock>{`my_list = [1, 2, 3]\nmy_tuple = (1, 2, 3)`}</CodeBlock></div> },
    { q: "How do I write and use functions in Python?", a: <div><p>Functions allow code reuse. Example:</p><CodeBlock>{`def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))`}</CodeBlock></div> },
    { q: "What is the role of indentation in Python?", a: <p>Python uses indentation (spaces or tabs) to define code blocks instead of curly brackets {}.</p> },
];

const careerTips = [
    { q: "Is Python enough to get a job?", a: <p>Yes, but it’s beneficial to learn frameworks like Django for web development or Pandas for data science.</p> },
    { q: "What are the top industries hiring Python developers?", a: <p>Python is widely used in tech, finance, healthcare, AI startups, and e-commerce.</p> },
    { q: "What projects should I add to my Python portfolio?", a: <p>Web apps, data analysis projects, automation scripts, and AI models.</p> },
    { q: "Where can I find Python freelance jobs?", a: <p>Platforms like Upwork, Fiverr, Freelancer, and Toptal offer freelance opportunities.</p> },
    { q: "What certifications help in a Python career?", a: <p>Google IT Automation with Python, Microsoft Python Certification, and PCEP (Python Entry-Level Certification).</p> },
];


export default function PythonQuestionsPage() {
  const pageDescription = "Python is one of the most beginner-friendly programming languages. This guide answers 100 essential Python questions, covering fundamentals, career tips, and more.";
  
  return (
    <div className="bg-white">
      <BlogHeader 
          title="100 Essential Python Questions & Answers"
          description={pageDescription}
      />
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex justify-start items-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <User size={16} /> Prerana
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Calendar size={16} /> February 11, 2025
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Folder size={16} /> Python, FAQ, Beginners
            </div>
        </div>
        
        <div className="prose lg:prose-xl max-w-none mx-auto text-muted-foreground">
            <p className="lead text-xl mb-8">
              If you’re new to Python, you probably have a lot of questions. This guide answers 100 essential Python questions, covering fundamentals, career tips, web development, and AI/ML with Python.
            </p>
        </div>

        <div className="mt-8">
            <QnaSection title="1. Python Basics & Fundamentals" questions={pythonBasics} />
            <QnaSection title="2. Career Tips for Python Developers" questions={careerTips} />
        </div>

        <div className="mt-12 text-center text-lg text-muted-foreground">
           <p>Have more questions? Comment below or visit Simplified Computer Science for more Python tutorials!</p>
        </div>
        
      </main>
    </div>
  );
}

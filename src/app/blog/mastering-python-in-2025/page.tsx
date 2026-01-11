
import { User, Calendar, Folder } from 'lucide-react';

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

const BlogSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-4">{title}</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">{children}</div>
    </div>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-6">
        <h3 className="text-2xl font-semibold font-space-grotesk text-gray-800 mb-2">{title}</h3>
        {children}
    </div>
);

const CodeBlock = ({ children } : { children: React.ReactNode }) => (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
        <code>
            {children}
        </code>
    </pre>
);

export default function MasteringPythonPage() {
  const pageDescription = "Python has become one of the most popular and versatile programming languages in the world. This guide provides an in-depth look into Python, from its basics to advanced applications.";
  
  return (
    <div className="bg-white">
      <BlogHeader 
          title="Mastering Python in 2025: A Comprehensive Guide with Tips and Insights"
          description={pageDescription}
      />
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex justify-start items-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <User size={16} /> Prerana
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Calendar size={16} /> February 10, 2025
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Folder size={16} /> Python, Programming
            </div>
        </div>
        
        <div className="prose lg:prose-xl max-w-none mx-auto text-muted-foreground">
            <p className="lead text-xl mb-8">
               Whether you’re a beginner looking to start coding or an experienced developer exploring new possibilities, Python offers simplicity, flexibility, and an extensive ecosystem.
            </p>
        </div>

        <div className="mt-8 space-y-12">
            <BlogSection title="What is Python?">
                <p>Python is a high-level, interpreted programming language known for its easy-to-read syntax and vast library support. It is widely used in various domains, such as web development, data science, machine learning, artificial intelligence, and more.</p>
            </BlogSection>

            <BlogSection title="Why Learn Python in 2025?">
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Demand Across Industries:</strong> Python is used in industries like finance, healthcare, gaming, and tech startups.</li>
                    <li><strong>Diverse Applications:</strong> From AI to web development, Python’s versatility makes it invaluable.</li>
                    <li><strong>Community Support:</strong> Python boasts one of the largest and most active developer communities.</li>
                </ul>
            </BlogSection>

            <BlogSection title="Getting Started with Python">
                <SubSection title="1. Installing Python">
                    <p>Download the latest version from Python.org. Use package managers like pip to install additional libraries.</p>
                </SubSection>
                <SubSection title="2. Setting Up Your Environment">
                    <p>Use IDEs like PyCharm, VS Code, or Jupyter Notebook for an efficient coding experience. Install virtual environments to manage dependencies:</p>
                    <CodeBlock>
{`pip install virtualenv
virtualenv my_project
source my_project/bin/activate`}
                    </CodeBlock>
                </SubSection>
            </BlogSection>

            <BlogSection title="Python Basics">
                <SubSection title="1. Variables and Data Types">
                    <p>Python supports several data types: Numeric (int, float), Text (str), Boolean (bool), and Collections (list, tuple, set, dict).</p>
                    <CodeBlock>
{`name = "Python"
version = 3.10
is_popular = True
print(f"{name} version {version} is popular: {is_popular}")`}
                    </CodeBlock>
                </SubSection>
                <SubSection title="2. Control Structures">
                    <p>If-Else Statements:</p>
                    <CodeBlock>
{`age = 18
if age >= 18:
    print("You're an adult.")
else:
    print("You're a minor.")`}
                    </CodeBlock>
                    <p className="mt-4">Loops:</p>
                     <CodeBlock>
{`for i in range(5):
    print(i)`}
                    </CodeBlock>
                </SubSection>
            </BlogSection>

            <BlogSection title="Intermediate Python Concepts">
                <SubSection title="1. Functions">
                    <p>Organize your code into reusable blocks:</p>
                    <CodeBlock>
{`def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`}
                    </CodeBlock>
                </SubSection>
                <SubSection title="2. File Handling">
                     <p>Read and write files:</p>
                    <CodeBlock>
{`# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, Python!")

# Reading from a file
with open("example.txt", "r") as file:
    print(file.read())`}
                    </CodeBlock>
                </SubSection>
                <SubSection title="3. Object-Oriented Programming (OOP)">
                    <p>Use classes and objects:</p>
                     <CodeBlock>
{`class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        return f"{self.name} says Woof!"

dog = Dog("Buddy", "Golden Retriever")
print(dog.bark())`}
                    </CodeBlock>
                </SubSection>
            </BlogSection>
            
            <BlogSection title="Tips for Mastering Python">
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Practice Daily:</strong> Consistent practice is key to mastering Python.</li>
                    <li><strong>Contribute to Open Source:</strong> Join GitHub projects to enhance your skills.</li>
                    <li><strong>Explore Libraries:</strong> Familiarize yourself with Python libraries relevant to your field.</li>
                    <li><strong>Build Projects:</strong> Work on projects like a personal portfolio website, a simple chatbot, or a data visualization dashboard.</li>
                    <li><strong>Join Communities:</strong> Engage with communities like Stack Overflow, Reddit, and Python Discord.</li>
                    <li><strong>Stay Updated:</strong> Follow Python blogs, YouTube channels, and newsletters for the latest trends.</li>
                </ul>
            </BlogSection>

        </div>

        <div className="mt-12 text-center text-lg text-muted-foreground prose lg:prose-xl max-w-none mx-auto">
           <p>Python remains a powerful and in-demand language, offering endless possibilities in technology and beyond. Start coding today and unlock the power of Python in 2025!</p>
            <p><strong>What’s Your Next Python Project? Share your Python goals or favorite tips in the comments below. Let’s inspire each other to grow!</strong></p>
        </div>
        
      </main>
    </div>
  );
}
